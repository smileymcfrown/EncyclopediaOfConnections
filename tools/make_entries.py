"""Make one Markdown page per entry from the run 2 research results (P5).

Reads research/connection-types/outline.yaml and results/*.json, the finder tags in
research/finder-tags/tags.yaml and the open points in research/connection-types/review-notes.md,
and writes content/entries/<slug>.md: front matter (YAML) for the finder, the layout and the
links, then the text under fixed headings. The JSON stays the research record.

Anything nobody has confirmed is kept and marked ⚑ "needs confirming" (R25): sentences the
research agents marked [uncertain], finder values that need confirming, and the entry's open
points from review-notes.md. See research/needs-confirming.md.

Run: python3 tools/make_entries.py      (then python3 tools/check_entries.py)
The pages are generated: change the JSON, tags.yaml or review-notes.md, not the pages, until the
project decides to edit the pages directly (see content/README.md).
"""
import html, json, os, re, sys
from collections import OrderedDict
import yaml

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
CT = os.path.join(ROOT, 'research', 'connection-types')
OUT = os.path.join(ROOT, 'content', 'entries')
sys.path.insert(0, os.path.join(ROOT, 'research', 'finder-test'))
import normalise as nz  # noqa: E402  (the same rules the finder test uses)

FLAG = '⚑'
UNC = re.compile(r'\[uncertain\b', re.I)
OUTLINE = yaml.safe_load(open(os.path.join(CT, 'outline.yaml')))
TAGS = {t['num']: t for t in yaml.safe_load(open(os.path.join(ROOT, 'research', 'finder-tags', 'tags.yaml')))}
PROCESS_LABELS = {'fdm': '3D print (FDM)', 'resin': '3D print (resin)', 'cnc': 'CNC', 'laser': 'laser cut',
                  'woodwork': 'woodwork', 'sheet metal': 'sheet metal', 'buy': 'off-the-shelf part'}


def slug_file(name):          # the results file name rule of /research-deep
    return re.sub(r'[^A-Za-z0-9_]', '', name.replace(' ', '_'))


def short(name):
    """The entry's name without the bracketed extra names: 'Sprag clutch', 'Nails, brads and tacks'."""
    return re.sub(r'\s*\(.*$', '', name).strip()


def page_slug(name):
    import unicodedata
    s = unicodedata.normalize('NFKD', short(name)).encode('ascii', 'ignore').decode()
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def text(v):
    if isinstance(v, list):
        return ' | '.join(text(x) for x in v)
    if isinstance(v, dict):
        return ' | '.join(text(x) for x in v.values())
    return str(v or '')


def mark(s):
    """Put ⚑ in front of each [uncertain] marker, and keep stray '<' from being read as HTML."""
    s = UNC.sub(lambda m: f'{FLAG} ' + m.group(0), str(s))
    return re.sub(r'<(?=[A-Za-z/!])', '&lt;', s).replace('\n', ' ').strip()


def first_sentence(t):
    return re.split(r'(?<=[.;:])\s', (t or '').strip(), maxsplit=1)[0]


def snippet(t, width=110):
    m = UNC.search(t or '')
    a = max(0, m.start() - 70)
    return ('…' if a else '') + re.sub(r'\s+', ' ', t[a:m.start() + width - 70]).strip() + '…'


# ---------------------------------------------------------------- open points from review-notes.md
SETTLED = re.compile(r'\*\*(?:corrections?|settled):?\*\*|^\*\*Cross-links for the update pass\*\*', re.I)
LEAD = re.compile(r'(?:(?<=^)|(?<=[.;]\s))(?=\*[^*\n]{3,80}\*(?:\s*\(\d{1,3}\))?\s*:)')


def open_points(items):
    """Points in review-notes.md about an entry, grouped by outline number.

    A bullet that discusses several entries ("*Dampers* (214): ... *Tendon-driven joint* (278): ...")
    is split into one point per entry. A point is matched by the entry's number in brackets, or by its
    name in italics. kind: content (figures that disagree, content points), sources (how a source was
    read or should be cited) or scope (families and tagging). Points marked as done (**correction:**
    or **settled:**) and the R23 cross-link list (applied in the update pass) are left out."""
    names = {i: short(it['name']).lower() for i, it in enumerate(items, 1)}
    out = {}

    def entries_in(seg):
        nums = [int(n) for n in re.findall(r'\*\s*\((\d{1,3})\)', seg) if 1 <= int(n) <= len(items)]
        for span in re.findall(r'\*([^*\n]{3,80})\*', seg):
            sp = span.strip().lower().rstrip('.,')
            hits = [i for i, n in names.items() if n == sp] or (
                [i for i, n in names.items() if n.startswith(sp)] if len(sp) >= 8 else [])
            if len(hits) == 1 and hits[0] not in nums:
                nums.append(hits[0])
        return nums

    def flush(b, k):
        if not b or SETTLED.match(b[2:].strip()):
            return
        body = re.sub(r'\s+', ' ', b[2:]).strip()
        cuts = sorted({0} | {m.start() for m in LEAD.finditer(body)})
        segs = [body[x:y].strip() for x, y in zip(cuts, cuts[1:] + [len(body)])]
        for seg in segs:
            if SETTLED.search(seg):
                continue
            head = entries_in(seg.split(':', 1)[0]) if seg.startswith('*') else []
            for n in (head or entries_in(seg)):
                out.setdefault(n, []).append({'kind': k, 'note': seg})

    kind, bullet = 'scope', None
    for ln in open(os.path.join(CT, 'review-notes.md')).read().split('\n') + ['']:
        if ln.startswith('#'):
            flush(bullet, kind)
            bullet = None
            h = ln.lower()
            kind = ('content' if ('conflicting' in h or 'content correction' in h) else
                    'sources' if ('sources' in h or 'blocked' in h or 'environment' in h) else 'scope')
        elif ln.startswith('- '):
            flush(bullet, kind)
            bullet = ln
        elif bullet is not None and ln.startswith('  ') and ln.strip():
            bullet += ' ' + ln.strip()
        else:
            flush(bullet, kind)
            bullet = None
    return out


# ---------------------------------------------------------------- front matter
def finder_block(d, tg, confirm):
    """The fixed finder values: the run 2 fields as the finder test normalises them, then the P3 tags."""
    fa, mk = d['finder_attributes'], d['making']
    f = OrderedDict()
    norm = [('job', lambda: nz.list_prefix(fa['job'], nz.JOB), 'job'),
            ('motion', lambda: nz.motion(fa['motion']), 'motion'),
            ('special_behaviour', lambda: nz.list_prefix(fa['special_behaviour'], nz.SB), 'special_behaviour'),
            ('holding_principle', lambda: nz.hp_parse(fa['holding_principle']), 'holding_principle'),
            ('reuse_cycles', lambda: nz.reuse(fa['reuse_cycles']), 'reuse_cycles'),
            ('seal', lambda: nz.seal(fa['seal']), 'seal'),
            ('access_needed', lambda: nz.access(fa['access_needed']), 'access_needed'),
            ('print_in_place', lambda: nz.pip(mk['print_in_place']), 'print_in_place'),
            ('maker_difficulty', lambda: nz.difficulty(fa['maker_difficulty']), 'maker_difficulty'),
            ('processes', lambda: [PROCESS_LABELS[p] for p in nz.processes(mk['processes'])], 'processes')]
    src = {'job': fa['job'], 'motion': fa['motion'], 'special_behaviour': fa['special_behaviour'],
           'holding_principle': fa['holding_principle'], 'reuse_cycles': fa['reuse_cycles'], 'seal': fa['seal'],
           'access_needed': fa['access_needed'], 'print_in_place': mk['print_in_place'],
           'maker_difficulty': fa['maker_difficulty'], 'processes': mk['processes']}
    for key, fn, field in norm:
        v = fn()
        f[key] = v if v not in (None, []) else ('not applicable' if not isinstance(v, list) else [])
        # the value comes from the start of the text (or each list item's lead); mark it if that part is uncertain
        s = src[field]
        part = ' | '.join(re.split(r'[:;(]', x, maxsplit=1)[0] for x in s) if isinstance(s, list) else first_sentence(s)
        if UNC.search(part):
            confirm[key] = {'kind': 'source uncertain', 'reason': f'`{field}` is marked [uncertain] here: "{snippet(part)}"'}
    for k, v in tg['tags'].items():
        f[k] = v
    for k, v in (tg.get('needs_confirming') or {}).items():
        confirm[k] = v
    return f


KINDS = {'animation': 'Animation', 'diagram': 'Diagram', 'cross-section': 'Cross-section',
         'how-it-works': 'How it works', 'photo': 'Photo', 'render': 'Render'}


def gallery(pics):
    """The pictures at the top of an entry page (R32), as one HTML block: the first one big, the
    rest (real photos) below it. An animation has a still copy for people whose device asks for
    reduced motion. Each picture has its credit line, or the needs-confirming note if drawn."""
    e = lambda v: html.escape(str(v or ''), quote=True)
    out = ['<div class="eoc-pictures">']
    photo = any(x.get('web') and x.get('kind') not in ('animation', 'diagram') for x in pics)   # an R39 photo
    for n, x in enumerate(pics):
        img = f'<img src="../media/{e(x["file"])}" alt="{e(x["alt"][:300])}"' + (' loading="lazy"' if n else '') + '>'
        if x.get('still'):
            img = f'<picture><source media="(prefers-reduced-motion: reduce)" srcset="../media/{e(x["still"])}">{img}</picture>'
        kind = KINDS.get(x.get('kind') or ('animation' if x.get('still') else ''), '')
        lead = f'<strong>{kind}.</strong> ' if kind else ''
        if x.get('render'):
            lead = '<strong>Cut-away render.</strong> ' if x.get('kind') == 'cross-section' else '<strong>Render.</strong> '
            cap = (f'{lead}A 3D model made for the encyclopaedia, not a photo' +
                   (': a real one is shown below. ' if photo else ': a stand-in until a good real photo is found. ') +
                   f'{FLAG} Needs confirming: a model can simplify or get details wrong' +
                   ('.' if photo else '; a real photo is welcome.'))
        elif x.get('drawn'):
            cap = (f'{lead}Diagram drawn for the encyclopaedia from the research notes. {FLAG} Needs confirming: a drawing '
                   'can simplify or get details wrong; a real photo or a better diagram is welcome.')
        else:
            lic = f'<a href="{e(x["license_url"])}">{e(x["license"])}</a>' if x.get('license_url') else e(x['license'])
            title = re.sub(r'^File:|\.[a-zA-Z]{3,4}$', '', x.get('title') or '') or 'Photo'
            cap = (f'{lead}<a href="{e(x["source"])}">{e(title)}</a> by {e(str(x["author"])[:120])}, {lic}, '
                   f'from {e(x.get("site") or "Wikimedia Commons")}.')
        out.append(f'<figure class="eoc-pic{" eoc-pic-main" if n == 0 else ""}">{img}<figcaption>{cap}</figcaption></figure>')
    out.append('</div>')
    return '\n'.join(out)


def write_render_register(pics, rmeta, M):
    """content/media/render/README.md (R35): every page that shows a render as a stand-in for a real
    photo, so each can be checked and swapped for a photo when a good one is found."""
    used = sorted(p for p, lst in pics.items() if any(x.get('render') for x in lst))
    if not used and not rmeta:
        return
    unused = sorted(set(rmeta) - set(used))
    L = ['# Renders used as stand-ins for photos (R35)', '',
         'Generated by `tools/make_entries.py`; do not edit by hand. These pages had no copyable real photo of',
         'the item (searched in R32 and R34), so the owner asked for a realistic render as a stand-in, marked ⚑ on',
         'the page. Each render is a 3D model made for the encyclopaedia (`tools/renders/models/<page>.js`, rendered',
         'by `tools/renders/render.mjs`). A model can simplify or get details wrong, so each one needs checking.', '',
         '**To replace a render with a real photo:** in `content/media/pictures.yaml`, put the photo in the page\'s',
         'list (`commons: "File:..."` with `kind` and `alt`) and remove `render`, then run `tools/fetch_images.py`',
         '(the *Fetch pictures* workflow) and `tools/make_entries.py`. The model can stay in `tools/renders/models/`.',
         'Pages marked *also has a real photo* show a 3D-print photo from a Printables model page (R39) after the',
         'render; the owner chose to keep the render there too.',
         '', f'{len(used)} pages use a render. The ones marked **weak** most need a real photo.', '',
         '| Page | Kind | What it shows | Note |', '|---|---|---|---|']
    for p in used:
        m = rmeta[p]
        note = (m.get('note') or '').replace('|', '/')
        if any(x.get('web') and x.get('kind') not in ('animation', 'diagram') for x in pics[p]):
            note = (note + '; ' if note else '') + 'also has a real photo (R39)'
        L.append(f'| [{p}](../../entries/{p}.md) | {"cut-away render" if m.get("kind") == "cross-section" else "render"} | '
                 f'{m["alt"].replace("|", "/")} | {note} |')
    if unused:
        L += ['', 'Rendered but not shown on any page: ' + ', '.join(unused) + '.']
    open(os.path.join(M, 'render', 'README.md'), 'w').write('\n'.join(L) + '\n')


def page(i, it, d, tg, points, pics=None):
    idt, fa, mk, gd, md = d['identity'], d['finder_attributes'], d['making'], d['guidance'], d['media']
    confirm = OrderedDict()
    finder = finder_block(d, tg, confirm)
    fm = OrderedDict()
    fm['title'] = short(it['name'])
    fm['description'] = mark(idt['one_liner'])
    fm['num'] = i
    fm['term'] = idt['term']
    fm['plain_name'] = idt['plain_name']
    fm['aliases'] = idt['aliases']
    fm['family'] = idt['family']
    fm['other_families'] = idt.get('other_families', [])
    fm['finder'] = finder
    fm['needs_confirming'] = confirm
    fm['confirmed'] = tg.get('confirmed') or []
    fm['open_points'] = points
    fm['uncertain_fields'] = d.get('uncertain', [])
    fm['diagram_idea'] = md.get('diagram_idea', '')
    fm['links'] = md.get('links', [])
    fm['make_it_yourself'] = md.get('make_it_yourself', [])
    fm['sources'] = md.get('sources', [])
    fm['research'] = f'research/connection-types/results/{slug_file(it["name"])}.json'
    pics = pics or []
    fm['image'] = pics[0] if pics else None
    fm['pictures'] = pics

    B = []

    def para(v):
        if isinstance(v, list):
            B.extend(f'- {mark(x)}' if not isinstance(x, dict) else '- ' + mark(text(x)) for x in v)
        elif v:
            B.append(mark(v))
        B.append('')

    def section(title, v):
        if v in (None, '', []):
            return
        B.append(f'## {title}')
        B.append('')
        para(v)

    def link_line(x):
        lic = f' *(licence: {mark(x["license"])})*' if x.get('license') else ''
        extra = '; '.join(mark(x[k]) for k in ('shows', 'what_it_is') if x.get(k))
        return f'- [{mark(x.get("title") or x["url"])}]({x["url"]})' + (f': {extra}' if extra else '') + lic

    if pics:
        B += [gallery(pics), '']
    B.append(mark(idt['one_liner']))
    B.append('')
    B.append(f'**In plain words:** {mark(idt["plain_name"])}. **Proper term:** {mark(idt["term"])}.')
    B.append('')
    if idt.get('aliases'):
        B.append('**Also called:** ' + '; '.join(mark(a) for a in idt['aliases']) + '.')
        B.append('')
    section('How it works', idt.get('how_it_works'))
    section('Parts', idt.get('complexity'))
    section('Everyday examples', gd.get('everyday_examples'))
    section('When to use it', gd.get('when_to_use'))
    section('When not to use it', gd.get('when_not_to_use'))
    details = [('What it does (jobs)', fa.get('job')), ('Movement', fa.get('motion')),
               ('Directions it can move (degrees of freedom)', fa.get('degrees_of_freedom')),
               ('Special behaviour', fa.get('special_behaviour')), ('How it holds', fa.get('holding_principle')),
               ('Input and output', fa.get('input_output')), ('Power', fa.get('power')), ('Load', fa.get('load')),
               ('Play and precision', fa.get('play_and_precision')), ('Taking it apart', fa.get('removability')),
               ('How often it can be reused', fa.get('reuse_cycles')), ('Sealing', fa.get('seal')),
               ('Adjustable', fa.get('adjustable')), ('Access needed', fa.get('access_needed')),
               ('Materials', fa.get('materials')), ('Heat, cold, water and wear', gd.get('environment_limits'))]
    B.append('## Details')
    B.append('')
    for label, v in details:
        if v in (None, '', []):
            continue
        if isinstance(v, list):
            B.append(f'- **{label}:**')
            B.extend(f'  - {mark(text(x))}' for x in v)
        else:
            B.append(f'- **{label}:** {mark(v)}')
    B.append('')
    B.append('## Making it')
    B.append('')
    for label, v in [('Ways to make or get it', mk.get('processes')), ('Printing it in one piece (print in place)', mk.get('print_in_place')),
                     ('Tools', fa.get('tools_needed')), ('Difficulty', fa.get('maker_difficulty'))]:
        if isinstance(v, list):
            B.append(f'- **{label}:**')
            B.extend(f'  - {mark(text(x))}' for x in v)
        elif v:
            B.append(f'- **{label}:** {mark(v)}')
    B.append('')
    for title, v in [('3D printing tips', mk.get('making_tips_3d_printing')), ('Buying one (off-the-shelf parts)', mk.get('off_the_shelf_parts'))]:
        if v:
            B.append(f'### {title}')
            B.append('')
            para(v)
    section('Rules of thumb', mk.get('rules_of_thumb'))
    section('Common failures', gd.get('common_failures'))
    section('Safety', gd.get('safety_notes'))
    section('Related', gd.get('related'))
    if md.get('make_it_yourself'):
        B += ['## Make it yourself', ''] + [link_line(x) for x in md['make_it_yourself']] + ['']
    if md.get('links'):
        B += ['## Pictures, videos and models', ''] + [link_line(x) for x in md['links']] + ['']
    B += ['## Needs confirming', '',
          f'{FLAG} marks something nobody has confirmed yet: a fact the research could not confirm from a source, '
          'a finder value that is a best guess, or an open point from the research notes. '
          'Corrections are welcome (see `research/needs-confirming.md`).', '']
    n_inline = len(UNC.findall(json.dumps(d, ensure_ascii=False)))
    if n_inline:
        B.append(f'- {FLAG} {n_inline} sentence{"s" if n_inline > 1 else ""} on this page marked [uncertain].')
    for k, v in confirm.items():
        shown = finder.get(k)
        shown = ', '.join(shown) if isinstance(shown, list) else shown
        B.append(f'- {FLAG} Finder value `{k}` = {shown} ({v["kind"]}): {mark(v["reason"])}')
    for p in points:
        if p['kind'] != 'sources':
            B.append(f'- {FLAG} Research note: {p["note"]}')
    if not (n_inline or confirm or [p for p in points if p['kind'] != 'sources']):
        B.append('Nothing is marked on this page.')
    B.append('')
    if md.get('sources'):
        B += ['## Sources', ''] + [f'- <{s}>' if isinstance(s, str) and s.startswith('http') else f'- {mark(text(s))}'
                                   for s in md['sources']] + ['']
    return fm, '\n'.join(B).rstrip() + '\n'


# ---------------------------------------------------------------- glossary (P9)
GLOSSARY = os.path.join(ROOT, 'content', 'glossary.yaml')
STOP_AT = ('## Make it yourself', '## Pictures, videos and models', '## Needs confirming', '## Sources')


def gh_anchor(heading):
    """The anchor GitHub gives a heading: lower case, punctuation dropped, spaces to hyphens."""
    return re.sub(r'[^\w\- ]', '', heading.strip().lower()).replace(' ', '-')


def load_glossary():
    terms = yaml.safe_load(open(GLOSSARY))
    for t in terms:
        t['anchor'] = gh_anchor(t['term'])
        words = re.split(r'\s+/\s+|\s+vs\s+', t['term'])
        t['patterns'] = [] if t.get('link') is False else [
            re.compile(r'(?<![\w-])(' + re.escape(w) + r')(?:s|es)?(?![\w-])', re.I) for w in words]
    return terms


def write_glossary(terms):
    groups = list(OrderedDict((t['group'], 1) for t in terms))
    L = ['---', 'title: Glossary',
         'description: The technical words used in the encyclopaedia, each in one plain sentence.', '---', '',
         'The technical words used on the entry pages, each explained in one plain sentence. Each entry page',
         'links the first time it uses one of these words. Corrections and new words are welcome (see',
         '`CONTRIBUTING.md`). Made by `tools/make_entries.py` from `glossary.yaml`.', '']
    L += [f'- [{g}](#{gh_anchor(g)})' for g in groups] + ['']
    for g in groups:
        L += [f'## {g}', '']
        for t in [t for t in terms if t['group'] == g]:
            L += [f'### {t["term"]}', '']
            if t.get('other_names'):
                L += [f'*Also called:* {t["other_names"]}', '']
            L += [t['definition'], '']
    open(os.path.join(ROOT, 'content', 'glossary.md'), 'w').write('\n'.join(L).rstrip() + '\n')


PROTECT = re.compile(r'\[[^\]]*\]\([^)]*\)|<https?://[^>]*>|https?://\S+|`[^`]*`|\*\*[^*]+\*\*')


def link_terms(body, terms):
    """Link the first use of each glossary term in the page's text (not in headings, links, code or
    bold labels, and not in the link, needs-confirming and source sections). Returns (body, anchors)."""
    lines = body.split('\n')
    end = next((i for i, ln in enumerate(lines) if ln.startswith(STOP_AT)), len(lines))
    used = []
    for t in terms:
        done = False
        for i in range(end):
            ln = lines[i]
            if done or ln.startswith(('#', '<')) or not ln.strip():
                continue
            spans = [m.span() for m in PROTECT.finditer(ln)]
            for pat in t['patterns']:
                for m in pat.finditer(ln):
                    if any(a <= m.start() < b or a < m.end() <= b for a, b in spans):
                        continue
                    lines[i] = ln[:m.start()] + f'[{m.group(0)}](../glossary.md#{t["anchor"]})' + ln[m.end():]
                    used.append(t['anchor'])
                    done = True
                    break
                if done:
                    break
            if done:
                break
    return '\n'.join(lines), used


class Dumper(yaml.SafeDumper):
    pass


Dumper.add_representer(OrderedDict, lambda d, v: d.represent_dict(v.items()))
Dumper.add_representer(list, lambda d, v: d.represent_sequence(
    'tag:yaml.org,2002:seq', v, flow_style=bool(v) and all(isinstance(x, str) and len(x) < 40 for x in v)))


def main():
    items = OUTLINE['items']
    pts = open_points(items)
    # Pictures (R29, R32): content/media/pictures.yaml lists each page's pictures in order: `drawn`
    # (content/media/drawn/<page>.svg, its <title> the alt text, animated from drawn/anim/<page>.svg
    # when that exists) or a copied picture recorded in content/media/media.yaml (tools/fetch_images.py).
    # A page with nothing listed or copied shows its drawn diagram. `render` (R35) is a 3D render made
    # for the encyclopaedia (content/media/render/<page>.webp, its alt text and kind in renders.json,
    # made by tools/renders/), a stand-in for a real photo: listed in content/media/render/README.md.
    M = os.path.join(ROOT, 'content', 'media')
    drawn = {}
    for fn in sorted(os.listdir(os.path.join(M, 'drawn'))):
        if fn.endswith('.svg'):
            t = re.search(r'<title>(.*?)</title>', open(os.path.join(M, 'drawn', fn)).read(), re.S)
            x = {'file': 'drawn/' + fn, 'alt': re.sub(r'\s+', ' ', t.group(1)).strip() if t else '', 'drawn': True}
            if os.path.exists(os.path.join(M, 'drawn', 'anim', fn)):
                ta = re.search(r'<title>(.*?)</title>', open(os.path.join(M, 'drawn', 'anim', fn)).read(), re.S)
                x.update(file='drawn/anim/' + fn, still='drawn/' + fn, kind='animation',
                         alt=re.sub(r'\s+', ' ', ta.group(1)).strip() if ta else x['alt'])
            drawn[fn[:-4]] = x
    rmeta = json.load(open(os.path.join(M, 'render', 'renders.json'))) if os.path.exists(os.path.join(M, 'render', 'renders.json')) else {}
    copied = (yaml.safe_load(open(os.path.join(M, 'media.yaml'))) or {}) if os.path.exists(os.path.join(M, 'media.yaml')) else {}
    chosen = (yaml.safe_load(open(os.path.join(M, 'pictures.yaml'))) or {}) if os.path.exists(os.path.join(M, 'pictures.yaml')) else {}
    pics = {}
    for p in set(drawn) | set(copied) | set(chosen):
        by_src = {r['src']: r for r in copied.get(p, [])}
        lst = []
        for x in chosen.get(p) or []:
            if x == 'drawn':
                if p in drawn:
                    lst.append(dict(drawn[p]))
                continue
            if x == 'render':
                if p not in rmeta or not os.path.exists(os.path.join(M, 'render', p + '.webp')):
                    sys.exit(f'pictures.yaml: {p} lists a render, but content/media/render/{p}.webp or its renders.json entry is missing')
                lst.append({'file': f'render/{p}.webp', 'alt': rmeta[p]['alt'], 'kind': rmeta[p].get('kind') or 'render',
                            'render': True, 'drawn': True})
                continue
            src = ((x.get('commons') or '').replace('_', ' ') or
                   ('web:' + str(x['web']) if x.get('web') else 'openverse:' + str(x.get('openverse'))))
            if src in by_src:
                r = {k: v for k, v in by_src[src].items() if k not in ('src', 'width', 'height', 'animated')}
                r.update({k: x[k] for k in ('kind', 'alt') if x.get(k)})
                lst.append(dict(r, drawn=False, **({'web': True} if src.startswith('web:') else {})))
        if not lst and copied.get(p) and p not in chosen:
            lst = [dict({k: v for k, v in copied[p][0].items() if k not in ('src', 'width', 'height', 'animated')}, drawn=False)]
        if not lst and p in drawn:
            lst = [dict(drawn[p])]
        pics[p] = lst
    write_render_register(pics, rmeta, M)
    terms = load_glossary()
    write_glossary(terms)
    os.makedirs(OUT, exist_ok=True)
    slugs = {}
    for i, it in enumerate(items, 1):
        s = page_slug(it['name'])
        if s in slugs.values():
            sys.exit(f'two entries give the page name {s}: {it["name"]}')
        slugs[i] = s
    keep = set()
    for i, it in enumerate(items, 1):
        d = json.load(open(os.path.join(CT, 'results', slug_file(it['name']) + '.json')))
        tg = TAGS[i]
        assert tg['name'] == it['name'], (i, tg['name'], it['name'])
        fm, body = page(i, it, d, tg, pts.get(i, []), pics.get(slugs[i]))
        body, fm['glossary'] = link_terms(body, terms)
        fn = slugs[i] + '.md'
        keep.add(fn)
        with open(os.path.join(OUT, fn), 'w') as f:
            f.write('---\n')
            yaml.dump(json.loads(json.dumps(fm, ensure_ascii=False), object_pairs_hook=OrderedDict), f,
                      Dumper=Dumper, allow_unicode=True, sort_keys=False, width=120)
            f.write('---\n\n')
            f.write(body)
    for fn in os.listdir(OUT):
        if fn.endswith('.md') and fn not in keep:
            os.remove(os.path.join(OUT, fn))
    n_pts = sum(len(v) for v in pts.values())
    n_links = sum(1 for fn in keep for _ in re.finditer(r'\]\(\.\./glossary\.md#', open(os.path.join(OUT, fn)).read()))
    print(f'wrote {len(keep)} pages to content/entries/ and content/glossary.md ({len(terms)} terms, {n_links} links); '
          f'{n_pts} research-note points attached to {len(pts)} entries')


if __name__ == '__main__':
    main()
