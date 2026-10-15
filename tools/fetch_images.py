"""Copy each entry's pictures into content/media/ (R29, R32, P7).

content/media/pictures.yaml lists each page's pictures in order (see load_pictures). For each
Wikimedia Commons file the licence is checked on Commons itself (its file API): public domain,
CC0, CC BY or CC BY-SA (any version) are copied; non-commercial (NC), no-derivatives (ND),
GFDL-only and unknown licences are skipped. Openverse pictures (CC-licensed photos from Flickr and
similar) carry their licence and credit in pictures.yaml. A web-sized copy (at most 800 px wide,
as WebP) is saved as content/media/<page>.webp (or <page>-<id>.webp for a second or third
picture), and content/media/media.yaml records each one's title, author, licence and source page,
which the entry page shows as a credit line under the picture. Animated GIFs are saved as
animated WebP (marked `animated`), with a still copy (<file>.still.webp) for people who ask for
reduced motion and for the finder cards. A page not in pictures.yaml gets the first copyable
Commons file among the research's links.

Run: python3 tools/fetch_images.py [--only page1,page2] [--force]
Needs Python 3, pyyaml and Pillow (pip install pillow). Entries already in media.yaml are kept
unless --force. Pictures no longer listed are removed. Entries with nothing copied and no drawn
diagram are listed at the end (see content/README.md).
"""
import hashlib, html, io, json, os, re, sys, time, urllib.error, urllib.parse, urllib.request
import yaml
from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
ENTRIES = os.path.join(ROOT, 'content', 'entries')
MEDIA = os.path.join(ROOT, 'content', 'media')
RECORD = os.path.join(MEDIA, 'media.yaml')
API = 'https://commons.wikimedia.org/w/api.php'
UA = 'EncyclopaediaOfConnections-build/0.1 (https://github.com/smileymcfrown/EncyclopediaOfConnections)'
OK = re.compile(r'^(public domain|pd\b|cc0|cc[ -]by(-sa)?[ -]\d)', re.I)
BAD = re.compile(r'\bnc\b|\bnd\b|non-?commercial|no ?deriv', re.I)
IMAGE_TYPES = ('image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/gif', 'image/tiff')


def get(url, params=None):
    if params:
        url += '?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    for attempt in range(6):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if attempt == 5 or e.code not in (429, 500, 502, 503, 504):
                raise
            time.sleep(int(e.headers.get('Retry-After') or 0) or 10 * (attempt + 1))   # Wikimedia asks for patience
        except OSError:
            if attempt == 5:
                raise
            time.sleep(5 * (attempt + 1))


def text(s):
    """Plain text from Commons' HTML fields (author names often come wrapped in links)."""
    s = re.sub(r'<[^>]+>', '', s or '')
    return re.sub(r'\s+', ' ', html.unescape(s)).strip()


def file_title(url):
    m = re.search(r'commons\.wikimedia\.org/wiki/(File:[^?#]+)', url)
    return urllib.parse.unquote(m.group(1)).replace('_', ' ') if m else None


def info(titles):
    """Licence, author and a web-sized address for up to 50 Commons files at once."""
    out = {}
    for i in range(0, len(titles), 50):
        d = json.loads(get(API, {
            'action': 'query', 'format': 'json', 'titles': '|'.join(titles[i:i + 50]), 'prop': 'imageinfo',
            'iiprop': 'url|extmetadata|size|mime', 'iiurlwidth': '800',
            'iiextmetadatafilter': 'LicenseShortName|LicenseUrl|Artist|Credit|ObjectName|ImageDescription'}))
        q = d.get('query', {})
        norm = {n['to']: n['from'] for n in q.get('normalized', [])}
        for p in q.get('pages', {}).values():
            if 'imageinfo' not in p:
                continue
            ii = p['imageinfo'][0]
            md = {k: v.get('value', '') for k, v in ii.get('extmetadata', {}).items()}
            out[norm.get(p['title'], p['title'])] = dict(
                title=p['title'], page=ii.get('descriptionurl'), mime=ii.get('mime'),
                thumb=re.sub(r'\?utm_.*$', '', ii.get('thumburl') or ii.get('url') or ''), width=ii.get('width'),
                original=re.sub(r'\?utm_.*$', '', ii.get('url') or ''),
                license=text(md.get('LicenseShortName')), license_url=text(md.get('LicenseUrl')),
                author=text(md.get('Artist')) or text(md.get('Credit')), name=text(md.get('ObjectName')))
        time.sleep(0.5)
    return out


def usable(x):
    lic = x['license']
    return x['mime'] in IMAGE_TYPES and OK.search(lic) and not BAD.search(lic)


def flat(im):
    """One frame as RGB, with transparency put on white so diagrams read in dark mode too."""
    im = im.convert('RGBA')
    if im.width > 800:
        im = im.resize((800, round(im.height * 800 / im.width)), Image.LANCZOS)
    bg = Image.new('RGB', im.size, 'white')
    bg.paste(im, mask=im.split()[3])
    return bg


def still_name(dest):
    return dest[:-len('.webp')] + '.still.webp'


def save(x, dest):
    """Save a web-sized WebP. Animated GIFs stay animated (an animated WebP plays by itself in
    every current browser); they are read from the original file, as Commons may serve a still
    thumbnail for a large GIF."""
    animated = x['mime'] == 'image/gif'
    im = Image.open(io.BytesIO(get(x['original'] if animated else x['thumb'])))
    n = getattr(im, 'n_frames', 1)
    if animated and n > 1:
        frames, durations, size = [], [], im.size
        for i in range(n):
            im.seek(i)
            fr = im.convert('RGBA')
            if fr.size != size:          # a frame larger or smaller than the first: fit it to the first frame
                c = Image.new('RGBA', size, (255, 255, 255, 0))
                c.paste(fr.crop((0, 0) + size))
                fr = c
            frames.append(flat(fr))
            durations.append(im.info.get('duration', 100) or 100)
        frames[0].save(dest, 'WEBP', save_all=True, append_images=frames[1:], duration=durations, loop=0,
                       quality=75, method=4)
        frames[0].save(still_name(dest), 'WEBP', quality=80, method=6)   # for reduced motion and finder cards
        if os.path.getsize(dest) > 3_000_000:   # a long animation: smaller and lower quality, to keep pages quick
            frames = [f.resize((560, round(f.height * 560 / f.width)), Image.LANCZOS) if f.width > 560 else f
                      for f in frames]
            frames[0].save(dest, 'WEBP', save_all=True, append_images=frames[1:], duration=durations, loop=0,
                           quality=55, method=4)
        return frames[0].width, frames[0].height, n
    im.seek(0)
    im = flat(im)
    im.save(dest, 'WEBP', quality=80, method=6)
    return im.width, im.height, 1


def load_pictures():
    """content/media/pictures.yaml: the pictures each page shows, in order (R32). Items are
    `render` (a 3D render made for the encyclopaedia, content/media/render/<page>.webp; R35), `drawn`
    (the diagram in drawn/<page>.svg, animated from drawn/anim/<page>.svg when there is one),
    {commons: "File:..."} or {openverse: <id>, url, title, author, license, license_url, source},
    each with an optional `kind` (animation, diagram, cross-section, how-it-works, photo) and `alt`."""
    f = os.path.join(MEDIA, 'pictures.yaml')
    out = {}
    for page, items in ((yaml.safe_load(open(f)) or {}) if os.path.exists(f) else {}).items():
        out[page] = [{'drawn': True} if x in ('drawn', 'render') else dict(x) for x in items or []]
    return out


def src_of(x):
    return x['commons'].replace('_', ' ') if x.get('commons') else 'openverse:' + x['openverse'] if x.get('openverse') else None


def main():
    sys.stdout.reconfigure(line_buffering=True)
    only = set(sys.argv[sys.argv.index('--only') + 1].split(',')) if '--only' in sys.argv else None
    force = '--force' in sys.argv
    chosen = load_pictures()
    os.makedirs(MEDIA, exist_ok=True)
    rec = (yaml.safe_load(open(RECORD)) or {}) if os.path.exists(RECORD) else {}
    pages = {}
    for fn in sorted(os.listdir(ENTRIES)):
        if fn.endswith('.md') and (only is None or fn[:-3] in only):
            pages[fn[:-3]] = yaml.safe_load(re.match(r'---\n(.*?)\n---\n', open(os.path.join(ENTRIES, fn)).read(), re.S).group(1))
    # What each page wants copied: its pictures.yaml items, or else (a page not listed yet) the
    # first Commons file among the research's links whose licence allows copying.
    want = {}
    for p, fm in pages.items():
        if p in chosen:
            want[p] = [x for x in chosen[p] if src_of(x)]
        else:
            want[p] = [{'commons': t, 'alt': l.get('shows') or '', 'auto': True}
                       for t, l in ((file_title(l['url']), l) for l in fm.get('links') or []) if t]
    have = {r['src'] for rs in rec.values() for r in rs}
    meta = info(sorted({src_of(x) for xs in want.values() for x in xs
                        if x.get('commons') and (force or src_of(x) not in have)}))
    none = []
    for p, xs in want.items():
        old = {r['src']: r for r in rec.get(p, [])}
        new = []
        for x in xs:
            s = src_of(x)
            r = old.get(s)
            gif_still = r and r.get('title', '').lower().endswith('.gif') and 'animated' not in r
            if r and not force and not gif_still:
                r = dict(r, alt=x.get('alt') or r['alt'])
                if x.get('kind'):
                    r['kind'] = x['kind']
                new.append(r)
                if x.get('auto'):
                    break
                continue
            if x.get('commons'):
                m = meta.get(s) or info([s]).get(s)
                if not m or not usable(m):
                    if not x.get('auto'):
                        print(f'{p}: {s} is missing or its licence does not allow copying')
                    continue
                pic = dict(m)
                credit = {'title': m['title'], 'author': m['author'] or 'unknown', 'license': m['license'],
                          'license_url': m['license_url'], 'source': m['page'], 'site': 'Wikimedia Commons'}
            else:
                pic = {'mime': 'image/' + ('gif' if x['url'].lower().endswith('.gif') else 'jpeg'),
                       'thumb': x['url'], 'original': x['url']}
                credit = {k: x.get(k) or '' for k in ('title', 'author', 'license', 'license_url', 'source')}
                credit['site'] = x.get('site') or 'Openverse'
            taken = {q['file'] for q in new} | {q['file'] for q in old.values() if q['src'] != s}
            name = (r or {}).get('file') or (p + '.webp' if p + '.webp' not in taken
                                              else f'{p}-{hashlib.sha1(s.encode()).hexdigest()[:6]}.webp')
            tmp = os.path.join(MEDIA, '.tmp-' + name)
            try:
                w, h, n = save(pic, tmp)
                os.replace(tmp, os.path.join(MEDIA, name))
                if n > 1:
                    os.replace(still_name(tmp), os.path.join(MEDIA, still_name(name)))
            except Exception as err:     # one bad file must not lose the rest of the run
                print(f'{p}: could not save {s}: {err}')
                continue
            r = dict(src=s, file=name, width=w, height=h, **credit, alt=x.get('alt') or pic.get('name') or pages[p]['title'])
            if x.get('kind'):
                r['kind'] = x['kind']
            if pic['mime'] == 'image/gif':
                r['animated'] = n > 1   # saved as an animated WebP, which plays by itself in every browser
                if n > 1:
                    r['still'] = still_name(name)
            new.append(r)
            print(f'{p}: {s} ({r["license"]})')
            time.sleep(1.5)
            if x.get('auto'):
                break
        for r in old.values():           # pictures the page no longer shows
            if r['src'] not in {q['src'] for q in new}:
                for f in (r['file'], r.get('still')):
                    if f and os.path.exists(os.path.join(MEDIA, f)) and not any(f in (q['file'], q.get('still')) for q in new):
                        os.remove(os.path.join(MEDIA, f))
        if new:
            rec[p] = new
        else:
            rec.pop(p, None)
            if not any(x.get('drawn') for x in chosen.get(p, [])):
                none.append(p)
    with open(RECORD, 'w') as f:
        f.write('# Pictures copied by tools/fetch_images.py, per page in the order shown (licence and author read\n'
                '# from each file\'s own page). Each entry page shows the credit line under its picture.\n')
        yaml.safe_dump(dict(sorted(rec.items())), f, allow_unicode=True, sort_keys=False, width=120)
    print(f'{len(rec)} entries have a copied picture; {len(none)} have none and no drawn diagram: {", ".join(sorted(none))}')


if __name__ == '__main__':
    main()
