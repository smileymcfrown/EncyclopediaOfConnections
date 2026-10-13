"""Copy one picture per entry from Wikimedia Commons into content/media/ (R29, P7).

For each entry page, the Commons file links the research found (`links` in the front matter) are
checked in order on Commons itself (its file API), and the first one whose licence allows copying
is kept: public domain, CC0, CC BY or CC BY-SA (any version). Non-commercial (NC), no-derivatives
(ND), GFDL-only and unknown licences are skipped. A web-sized copy (at most 800 px wide, as WebP)
is saved as content/media/<page>.webp, and content/media/media.yaml records the file's title,
author, licence and Commons page, which each entry page shows as a credit line under the picture.

content/media/choices.yaml (R30) overrides the research's order: `use: "File:..."` tries that
Commons file first, and `use: drawn` drops the copy so the page shows its drawn diagram. Animated
GIFs are saved as animated WebP (marked `animated` in media.yaml), so they play on their own.

Run: python3 tools/fetch_images.py [--only page1,page2] [--force]
Needs Python 3, pyyaml and Pillow (pip install pillow). Entries already in media.yaml are kept
unless --force. Entries with no usable Commons file are listed at the end: they get a drawn
diagram instead (content/media/drawn/<page>.svg, see content/README.md).
"""
import html, io, json, os, re, sys, time, urllib.error, urllib.parse, urllib.request
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


def save(x, dest):
    """Save a web-sized WebP. Animated GIFs stay animated (an animated WebP plays by itself in
    every current browser); they are read from the original file, as Commons may serve a still
    thumbnail for a large GIF."""
    animated = x['mime'] == 'image/gif'
    im = Image.open(io.BytesIO(get(x['original'] if animated else x['thumb'])))
    n = getattr(im, 'n_frames', 1)
    if animated and n > 1:
        frames, durations = [], []
        for i in range(n):
            im.seek(i)
            frames.append(flat(im))
            durations.append(im.info.get('duration', 100) or 100)
        frames[0].save(dest, 'WEBP', save_all=True, append_images=frames[1:], duration=durations, loop=0,
                       quality=75, method=4)
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


def main():
    sys.stdout.reconfigure(line_buffering=True)
    only = None
    if '--only' in sys.argv:
        only = set(sys.argv[sys.argv.index('--only') + 1].split(','))
    force = '--force' in sys.argv
    # content/media/choices.yaml (R30): a person's (or reviewer's) choice of picture for a page:
    # {use: 'File:...'} puts that Commons file first; {use: drawn} shows the drawn diagram instead.
    cf = os.path.join(MEDIA, 'choices.yaml')
    choices = (yaml.safe_load(open(cf)) or {}) if os.path.exists(cf) else {}
    os.makedirs(MEDIA, exist_ok=True)
    rec = (yaml.safe_load(open(RECORD)) or {}) if os.path.exists(RECORD) else {}
    pages = {}
    for fn in sorted(os.listdir(ENTRIES)):
        if fn.endswith('.md') and (only is None or fn[:-3] in only):
            fm = yaml.safe_load(re.match(r'---\n(.*?)\n---\n', open(os.path.join(ENTRIES, fn)).read(), re.S).group(1))
            pages[fn[:-3]] = fm
    for p, c in choices.items():
        if c.get('use') == 'drawn' and p in rec:
            os.remove(os.path.join(MEDIA, rec.pop(p)['file']))
    want = lambda p: (choices.get(p, {}).get('use') or '').replace('_', ' ')
    todo = {p: fm for p, fm in pages.items() if want(p) != 'drawn' and (
        force or p not in rec or (want(p).startswith('File:') and rec[p]['title'] != want(p))
        or (rec[p]['title'].lower().endswith('.gif') and 'animated' not in rec[p]))}   # R30: older GIF copies were one still frame
    cand = {p: [(file_title(l['url']), l) for l in fm.get('links') or [] if file_title(l['url'])] for p, fm in todo.items()}
    for p in cand:                       # a chosen file goes first, even if the research did not list it
        if want(p).startswith('File:'):
            cand[p] = [(want(p), {'shows': choices[p].get('alt', '')})] + [c for c in cand[p] if c[0] != want(p)]
    meta = info(sorted({t for c in cand.values() for t, _ in c}))
    none = []
    for p, cs in cand.items():
        pick = next(((t, l) for t, l in cs if t in meta and usable(meta[t])), None)
        if not pick:
            none.append(p)
            continue
        t, l = pick
        x = meta[t]
        w, h, n = save(x, os.path.join(MEDIA, p + '.webp'))
        rec[p] = {'file': p + '.webp', 'width': w, 'height': h, 'title': x['title'], 'author': x['author'] or 'unknown',
                  'license': x['license'], 'license_url': x['license_url'], 'source': x['page'],
                  'alt': l.get('shows') or x['name'] or pages[p]['title']}
        if x['mime'] == 'image/gif':
            rec[p]['animated'] = n > 1   # saved as an animated WebP, which plays by itself in every browser
        print(f'{p}: {x["title"]} ({x["license"]})')
        time.sleep(1.5)
    with open(RECORD, 'w') as f:
        f.write('# Pictures copied from Wikimedia Commons by tools/fetch_images.py (licence and author read from\n'
                '# each file\'s Commons page). Each entry page shows the credit line under its picture.\n')
        yaml.safe_dump(dict(sorted(rec.items())), f, allow_unicode=True, sort_keys=False, width=120)
    print(f'{len(rec)} entries have a picture; {len(none)} have no usable Commons file: {", ".join(sorted(none))}')


if __name__ == '__main__':
    main()
