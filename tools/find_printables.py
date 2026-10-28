"""Find Printables photos for pages that show a render (R39).

The owner agreed (R39) to add real photos from Printables model pages under CC0, CC BY or CC BY-SA,
credited to the uploader, after the render on pages that have no real photo. This script takes the
Printables models each entry's research already links (`media.make_it_yourself`), re-checks each
model's licence through the Printables API, and writes the candidates and small thumbnails to OUT,
with one contact sheet per page (each candidate numbered) for choosing by eye:

  OUT/candidates.json   per page: title, summary, candidates (n, model, url, license, license_url,
                        author, page, thumb)
  OUT/thumbs/           a small copy of each photo
  OUT/sheets/<page>-<k>.png

Chosen photos go into content/media/pictures.yaml as `web` items (see tools/fetch_images.py).

With --search, pages that have no Printables photo yet are searched by the entry's name and first other
name instead (Printables search, the top models with an allowed licence, fewer photos each).

Run: python3 tools/find_printables.py OUT [--only page1,page2] [--search]
Needs Python 3, pyyaml and Pillow. Printables must be reachable (Thingiverse and MakerWorld refuse
scripted requests).
"""
import io, json, os, re, sys, time, urllib.request
from concurrent.futures import ThreadPoolExecutor
import yaml
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
sys.path.insert(0, os.path.join(ROOT, 'research', 'finder-tags'))
ARGS, sys.argv = sys.argv[1:], sys.argv[:1]
import propose  # noqa: E402  (slug)

API = 'https://api.printables.com/graphql/'
MEDIA = 'https://media.printables.com/'
UA = {'User-Agent': 'EncyclopaediaOfConnections-build/0.1 (https://github.com/smileymcfrown/EncyclopediaOfConnections)'}
ALLOWED = {'CC0': 'CC0 1.0', 'CC-BY': 'CC BY', 'CC-BY-SA': 'CC BY-SA'}
Q = 'query($id:ID!){print(id:$id){id name slug license{abbreviation} user{publicUsername} images{filePath}}}'
PER_MODEL = 8
SEARCH_MODELS, SEARCH_PHOTOS = 6, 4


def fetch(url, data=None):
    hdr = dict(UA, **({'content-type': 'application/json'} if data else {}))
    for attempt in range(4):
        try:
            return urllib.request.urlopen(urllib.request.Request(url, data=data, headers=hdr), timeout=60).read()
        except Exception:
            if attempt == 3:
                raise
            time.sleep(3 * (attempt + 1))


def gql(query, variables):
    return json.loads(fetch(API, json.dumps({'query': query, 'variables': variables}).encode()))


def page_of(name):
    return re.sub(r'[^a-z0-9]+', '-', name.split(' (')[0].lower()).strip('-')


def thumb(url, dest):
    """A small copy of the photo: the server's own thumbnail where it has one, else made here."""
    if os.path.exists(dest) and os.path.getsize(dest):
        return True
    base, fn = url[len(MEDIA):].rsplit('/', 1)
    for u in (f'{MEDIA}{base}/thumbs/inside/320x240/jpg/{fn.rsplit(".", 1)[0]}.webp', url):
        try:
            im = Image.open(io.BytesIO(fetch(u)))
            im.seek(0)
            im = im.convert('RGB')
            im.thumbnail((480, 360))
            im.save(dest, 'WEBP', quality=80)
            return True
        except Exception:
            continue
    return False


def sheets(out, cands):
    os.makedirs(os.path.join(out, 'sheets'), exist_ok=True)
    try:
        font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 13)
        big = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 18)
    except Exception:
        font = big = ImageFont.load_default()
    W, H, COLS, PER = 250, 250, 5, 20
    for page, m in cands.items():
        cs = m['candidates']
        for s in range(0, len(cs), PER):
            part = cs[s:s + PER]
            sheet = Image.new('RGB', (COLS * W, 40 + ((len(part) + COLS - 1) // COLS) * H), 'white')
            d = ImageDraw.Draw(sheet)
            d.text((8, 8), f"{page}: {m['title'][:90]}  ({len(cs)} candidates)", fill='black', font=big)
            for k, x in enumerate(part):
                X, Y = (k % COLS) * W, 40 + (k // COLS) * H
                p = os.path.join(out, 'thumbs', x['thumb'])
                if os.path.exists(p):
                    im = Image.open(p)
                    im.thumbnail((W - 10, H - 60))
                    sheet.paste(im, (X + 5, Y + 5))
                d.text((X + 5, Y + H - 52), f"#{x['n']} {x['license']}", fill='black', font=font)
                d.text((X + 5, Y + H - 36), x['model'][:34], fill='black', font=font)
            sheet.save(os.path.join(out, 'sheets', f'{page}-{s // PER + 1}.png'))


def main():
    out = ARGS[0]
    only = set(ARGS[ARGS.index('--only') + 1].split(',')) if '--only' in ARGS else None
    search = '--search' in ARGS
    os.makedirs(os.path.join(out, 'thumbs'), exist_ok=True)
    lic_url = {x['abbreviation']: re.search(r'href="([^"]+)"', x['content']).group(1).replace('http://', 'https://')
               for x in gql('{licenses{abbreviation content}}', {})['data']['licenses'] if x['abbreviation'] in ALLOWED}
    pics = yaml.safe_load(open(os.path.join(ROOT, 'content', 'media', 'pictures.yaml'))) or {}
    items = yaml.safe_load(open(os.path.join(ROOT, 'research', 'connection-types', 'outline.yaml')))['items']
    cands = {}
    for it in items:
        page = page_of(it['name'])
        if 'render' not in (pics.get(page) or []) or (only and page not in only):
            continue
        if search and any(isinstance(x, dict) and x.get('web') for x in pics[page]):
            continue
        d = json.load(open(os.path.join(ROOT, 'research', 'connection-types', 'results', propose.slug(it['name']) + '.json')))
        if search:
            terms = [it['name'].split(' (')[0]] + [a.split(' (')[0].split(',')[0].strip() for a in (d['identity'].get('aliases') or [])[:1]]
            ids = []
            for t in dict.fromkeys(terms):
                r = gql('query($q:String!){searchPrints2(query:$q,limit:12){items{id license{abbreviation}}}}', {'q': t})
                ids += [x['id'] for x in ((r.get('data') or {}).get('searchPrints2') or {}).get('items') or []
                        if (x.get('license') or {}).get('abbreviation') in ALLOWED]
            ids = list(dict.fromkeys(ids))[:SEARCH_MODELS]
        else:
            ids = list(dict.fromkeys(m.group(1) for x in d['media'].get('make_it_yourself') or []
                                     for m in [re.search(r'printables\.com/(?:[a-z]{2}/)?model/(\d+)', x.get('url', ''))] if m))
        cs = []
        for mid in ids:
            r = (gql(Q, {'id': mid}).get('data') or {}).get('print')
            if not r or (r.get('license') or {}).get('abbreviation') not in lic_url:
                continue
            ab = r['license']['abbreviation']
            ver = re.search(r'/(\d\.\d)/', lic_url[ab])
            name = ALLOWED[ab] + (f' {ver.group(1)}' if ver and ab != 'CC0' else '')
            for k, im in enumerate(r['images'][:SEARCH_PHOTOS if search else PER_MODEL], 1):
                url = MEDIA + im['filePath']
                cs.append({'n': len(cs) + 1, 'id': f"{r['id']}-{k}", 'model': r['name'], 'url': url, 'license': name,
                           'license_url': lic_url[ab], 'author': r['user']['publicUsername'],
                           'page': f"https://www.printables.com/model/{r['id']}-{r['slug']}", 'thumb': f"{r['id']}-{k}.webp"})
        if cs:
            cands[page] = {'title': it['name'], 'summary': d['identity'].get('one_liner', ''), 'candidates': cs}
        print(page, len(ids), 'models,', len(cs), 'photos', flush=True)
    todo = [x for v in cands.values() for x in v['candidates']]
    with ThreadPoolExecutor(8) as pool:       # thumbnails in parallel; ones already saved are skipped
        for x, ok in zip(todo, pool.map(lambda x: thumb(x['url'], os.path.join(out, 'thumbs', x['thumb'])), todo)):
            if not ok:
                x['thumb'] = None
    json.dump(cands, open(os.path.join(out, 'candidates.json'), 'w'), ensure_ascii=False, indent=1)
    sheets(out, cands)
    n = sum(len(v['candidates']) for v in cands.values())
    print(f"{len(cands)} pages, {n} candidates, {sum(1 for v in cands.values() for x in v['candidates'] if not x['thumb'])} without a thumbnail")


if __name__ == '__main__':
    main()
