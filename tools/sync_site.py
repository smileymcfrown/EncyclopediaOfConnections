"""Copy the content into the site (P4) before each build: python3 tools/sync_site.py

Writes, under site/ (all ignored by git, as they are made from content/):
- src/content/docs/entries/<page>.md: every entry page, with the Beta banner, glossary links
  pointed at the site's glossary page, and "Suggest a correction" links (the correction issue
  form with the entry, and the value where there is one, filled in);
- src/content/docs/families/<family>.md: one page per family, listing its entries;
- src/content/docs/glossary.md and needs-confirming.md (every ⚑ item, by family);
- public/data/finder.json and finder-tree.json: the finder's data (tools/export_finder.py);
- src/sidebar.json: the sidebar (start pages, then the 31 families).

SITE_BASE (default /EncyclopediaOfConnections) is the site's address under its host, as in
site/astro.config.mjs.
"""
import json, os, re, shutil, sys
from urllib.parse import quote
import yaml

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
SITE = os.path.join(ROOT, 'site')
DOCS = os.path.join(SITE, 'src', 'content', 'docs')
BASE = os.environ.get('SITE_BASE', '/EncyclopediaOfConnections').rstrip('/')
REPO = 'https://github.com/smileymcfrown/EncyclopediaOfConnections'
OUTLINE = yaml.safe_load(open(os.path.join(ROOT, 'research', 'connection-types', 'outline.yaml')))
BANNER = ('<strong>Beta:</strong> this encyclopaedia is new and still being checked. Anything marked ⚑ needs '
          f'confirming. <a href="{BASE}/help/">Help improve it</a>.')


def fam_slug(key):
    return re.sub(r'[^a-z0-9]+', '-', key.lower()).strip('-')


def correction(entry, what=None):
    u = f'{REPO}/issues/new?template=correction.yml&entry={quote(entry)}'
    return u + (f'&what={quote(what)}' if what else '')


def split(s):
    m = re.match(r'---\n(.*?)\n---\n', s, re.S)
    return yaml.safe_load(m.group(1)), m.group(1), s[m.end():]


def with_banner(fm_text):
    return fm_text + '\nbanner:\n  content: ' + json.dumps(BANNER, ensure_ascii=False)


def main():
    if os.path.isdir(os.path.join(DOCS, 'entries')):
        shutil.rmtree(os.path.join(DOCS, 'entries'))
    if os.path.isdir(os.path.join(DOCS, 'families')):
        shutil.rmtree(os.path.join(DOCS, 'families'))
    os.makedirs(os.path.join(DOCS, 'entries'))
    os.makedirs(os.path.join(DOCS, 'families'))
    src = os.path.join(ROOT, 'content', 'entries')
    entries = []
    for fn in sorted(os.listdir(src)):
        if not fn.endswith('.md'):
            continue
        page = fn[:-3]
        fm, fm_text, body = split(open(os.path.join(src, fn)).read())
        body = re.sub(r'\]\(\.\./glossary\.md#', f']({BASE}/glossary/#', body)
        body = re.sub(r'^(- ⚑ Finder value `([a-z_]+)`.*)$',
                      lambda m: m.group(1) + f' ([suggest a correction]({correction(page, m.group(2))}))', body, flags=re.M)
        ask = (f'Something wrong, or can you confirm something marked ⚑? '
               f'[Suggest a correction]({correction(page)}).\n\n')
        body = body.replace('## Sources', ask + '## Sources', 1) if '## Sources' in body else body.rstrip() + '\n\n' + ask
        open(os.path.join(DOCS, 'entries', fn), 'w').write('---\n' + with_banner(fm_text) + '\n---\n' + body)
        entries.append(dict(fm, page=page))

    labels = {f['key']: f['label'] for f in OUTLINE['families']}
    link = lambda e: f'[{e["title"]}]({BASE}/entries/{e["page"]}/)'
    for key, label in labels.items():
        main_ = sorted([e for e in entries if e['family'] == key], key=lambda e: e['title'].lower())
        also = sorted([e for e in entries if key in (e.get('other_families') or [])], key=lambda e: e['title'].lower())
        L = ['---', f'title: {json.dumps(label + " (" + key + ")", ensure_ascii=False)}',
             f'description: {json.dumps(label, ensure_ascii=False)}', with_banner('').strip(), '---', '',
             f'{len(main_)} entries in this family.', '']
        L += [f'- {link(e)}: {e["description"]}' for e in main_]
        if also:
            L += ['', '## Also useful here', '', 'Entries from other families that also do this job.', '']
            L += [f'- {link(e)}: {e["description"]}' for e in also]
        open(os.path.join(DOCS, 'families', fam_slug(key) + '.md'), 'w').write('\n'.join(L) + '\n')

    g_fm, g_text, g_body = split(open(os.path.join(ROOT, 'content', 'glossary.md')).read())
    g_body = g_body.replace('`CONTRIBUTING.md`', f'[how to help]({BASE}/help/)').replace(
        ' Made by `tools/make_entries.py` from `glossary.yaml`.', '')
    open(os.path.join(DOCS, 'glossary.md'), 'w').write('---\n' + with_banner(g_text) + '\n---\n' + g_body)

    L = ['---', 'title: Needs confirming', 'description: Everything in the encyclopaedia that nobody has confirmed yet.',
         with_banner('').strip(), '---', '',
         '⚑ marks something nobody has confirmed yet: a fact the research could not check against a source, a finder',
         'value that is a best guess, or an open question from the research notes. It is the best current answer, not',
         f'a known error. If you know, please [suggest a correction]({REPO}/issues/new?template=correction.yml), '
         'or open the entry and use the link next to the item.', '',
         'Entries are listed by family, with how many things on each page need confirming.', '']
    for key, label in labels.items():
        es = sorted([e for e in entries if e['family'] == key], key=lambda e: e['title'].lower())
        rows = []
        for e in es:
            s = open(os.path.join(src, e['page'] + '.md')).read()
            n_unc = len(re.findall(r'⚑ \[uncertain', s))
            n_val = len(e.get('needs_confirming') or {})
            n_pts = len([p for p in e.get('open_points') or [] if p['kind'] != 'sources'])
            parts = [f'{n} {w}' for n, w in ((n_val, 'finder values'), (n_unc, 'sentences'), (n_pts, 'research notes')) if n]
            if parts:
                rows.append(f'- [{e["title"]}]({BASE}/entries/{e["page"]}/#needs-confirming): ' + ', '.join(parts))
        if rows:
            L += [f'## {label} ({key})', ''] + rows + ['']
    open(os.path.join(DOCS, 'needs-confirming.md'), 'w').write('\n'.join(L))

    data = os.path.join(SITE, 'public', 'data')
    os.makedirs(data, exist_ok=True)
    for f in ('finder.json', 'finder-tree.json'):
        shutil.copy(os.path.join(ROOT, 'content', 'finder', f), data)

    sidebar = [
        {'label': 'Start here', 'items': [
            {'label': 'Home', 'link': '/'},
            {'label': 'Find a connection', 'link': '/finder/'},
            {'label': 'Glossary', 'link': '/glossary/'},
            {'label': 'Needs confirming', 'link': '/needs-confirming/'},
            {'label': 'How to help', 'link': '/help/'}]},
        {'label': 'Families', 'items': [
            {'label': label, 'link': f'/families/{fam_slug(key)}/'} for key, label in labels.items()]},
    ]
    json.dump(sidebar, open(os.path.join(SITE, 'src', 'sidebar.json'), 'w'), indent=1, ensure_ascii=False)
    print(f'synced {len(entries)} entries, {len(labels)} family pages, the glossary, needs-confirming and the finder data into site/')


if __name__ == '__main__':
    main()
