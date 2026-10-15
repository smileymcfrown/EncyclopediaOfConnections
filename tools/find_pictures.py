"""Find candidate pictures for every entry (R32): animations, cross-sections and real photos.

For each entry page this searches Wikimedia Commons for the entry's name and proper term, for
animations of it (moving entries only) and for cut-away or cross-section pictures, plus the Commons
files the research already linked. It keeps only files whose licence allows copying (the same test
as tools/fetch_images.py: public domain, CC0, CC BY, CC BY-SA), notes which are animated, and
saves a small thumbnail of each so a person (or a helper agent) can choose from contact sheets.
With --openverse it also asks Openverse (CC-licensed photos from Flickr and other sites) for
entries that have few candidates; Openverse allows 200 searches a day without an API key.

Nothing here changes the site: the choices go in content/media/pictures.yaml.

Run: python3 tools/find_pictures.py OUT_DIR [--only page1,page2] [--openverse]
Writes OUT_DIR/candidates.json and OUT_DIR/thumbs/. Needs pyyaml and Pillow.
"""
import hashlib, json, os, re, sys, time, urllib.parse
import yaml
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch_images import API, ENTRIES, get, file_title, text, usable, OK, BAD  # noqa: E402

OPENVERSE = 'https://api.openverse.org/v1/images/'
OV_MAX = 190          # Openverse searches per run (200 a day without a key)
ov_used = 0


def search(q, n):
    d = json.loads(get(API, {'action': 'query', 'format': 'json', 'list': 'search', 'srnamespace': '6',
                             'srsearch': q, 'srlimit': str(n)}))
    time.sleep(0.6)
    return [x['title'] for x in d.get('query', {}).get('search', [])]


def details(titles):
    """Licence, size, frame count and a 330 px thumbnail for up to 50 Commons files at once."""
    out = {}
    for i in range(0, len(titles), 50):
        d = json.loads(get(API, {
            'action': 'query', 'format': 'json', 'titles': '|'.join(titles[i:i + 50]), 'prop': 'imageinfo',
            'iiprop': 'url|extmetadata|size|mime|metadata', 'iiurlwidth': '330',
            'iiextmetadatafilter': 'LicenseShortName|Artist|Credit|ImageDescription'}))
        q = d.get('query', {})
        norm = {n['to']: n['from'] for n in q.get('normalized', [])}
        for p in q.get('pages', {}).values():
            if not p.get('imageinfo'):        # a missing or deleted file
                continue
            ii = p['imageinfo'][0]
            md = {k: v.get('value', '') for k, v in ii.get('extmetadata', {}).items()}
            meta = {m['name']: m['value'] for m in ii.get('metadata') or [] if isinstance(m, dict)}
            frames = meta.get('frameCount') or 1
            out[norm.get(p['title'], p['title'])] = dict(
                source='commons', title=p['title'], mime=ii.get('mime'), width=ii.get('width'),
                height=ii.get('height'), frames=int(frames) if str(frames).isdigit() else 1,
                thumb=re.sub(r'\?utm_.*$', '', ii.get('thumburl') or '').replace('//thumb.wikimedia.org/wikipedia/commons/thumb/', '//upload.wikimedia.org/wikipedia/commons/thumb/'),
                license=text(md.get('LicenseShortName')), author=text(md.get('Artist')) or text(md.get('Credit')),
                description=text(md.get('ImageDescription'))[:300])
        time.sleep(0.6)
    return out


def openverse(q, n=12):
    global ov_used
    ov_used += 1
    d = json.loads(get(OPENVERSE + '?' + urllib.parse.urlencode({
        'q': q, 'license_type': 'commercial,modification', 'page_size': n, 'excluded_source': 'wikimedia'})))
    time.sleep(3.5)          # 20 a minute at most
    out = []
    for r in d.get('results', []):
        lic = ('CC0' if r['license'] == 'cc0' else 'Public domain' if r['license'] == 'pdm'
               else f'CC {r["license"].upper()} {r.get("license_version") or ""}'.strip())
        out.append(dict(source='openverse', id=r['id'], title=r.get('title') or '', mime='image/' + (r.get('filetype') or 'jpeg'),
                        width=r.get('width'), height=r.get('height'), frames=1, thumb=r.get('url'),
                        license=lic, author=r.get('creator') or '', page=r.get('foreign_landing_url'),
                        provider=r.get('source'), description=''))
    return out


def thumb(x, d):
    name = hashlib.sha1((x.get('id') or x['title']).encode()).hexdigest()[:16] + '.jpg'
    path = os.path.join(d, name)
    if not os.path.exists(path):
        im = Image.open(__import__('io').BytesIO(get(x['thumb'])))
        im.seek(0)
        im = im.convert('RGBA')
        im.thumbnail((320, 320))
        bg = Image.new('RGB', im.size, 'white')
        bg.paste(im, mask=im.split()[3])
        bg.save(path, 'JPEG', quality=80)
        time.sleep(0.4 if x['source'] == 'commons' else 0.1)
    return name


def main():
    sys.stdout.reconfigure(line_buffering=True)
    out_dir = sys.argv[1]
    only = set(sys.argv[sys.argv.index('--only') + 1].split(',')) if '--only' in sys.argv else None
    tdir = os.path.join(out_dir, 'thumbs')
    os.makedirs(tdir, exist_ok=True)
    cf = os.path.join(out_dir, 'candidates.json')
    cands = json.load(open(cf)) if os.path.exists(cf) else {}
    for fn in sorted(os.listdir(ENTRIES)):
        if not fn.endswith('.md') or (only and fn[:-3] not in only):
            continue
        page = fn[:-3]
        fm = yaml.safe_load(re.match(r'---\n(.*?)\n---\n', open(os.path.join(ENTRIES, fn)).read(), re.S).group(1))
        if page in cands and '--openverse' not in sys.argv:
            continue
        moving = fm['finder'].get('motion') not in ('none', 'not applicable')
        if page not in cands:
            name = fm['title']
            term = re.sub(r'\s*\(.*?\)', '', fm.get('term') or '').strip()
            names = [name] + ([term] if term and term.lower() != name.lower() else [])
            found = [file_title(l['url']) for l in (fm.get('links') or []) if file_title(l['url'])]
            try:
                for nm in names:
                    found += search(nm, 12)
                    for extra, n in (('cross section', 8), ('cutaway', 6), ('3D printed', 6)):
                        found += search(f'{nm} {extra}', n)      # every word must match
                    if moving:
                        found += search(f'{nm} filemime:gif', 8)
                found = list(dict.fromkeys(found))
                info = details(found)
            except Exception as e:      # keep what we have; the next run carries on
                print(f'{page}: search failed ({e}); run again later')
                continue
            keep = [info[t] for t in found if t in info and usable(info[t])]
            cands[page] = {'title': fm['title'], 'summary': fm['description'], 'moving': moving,
                           'motion': fm['finder'].get('motion'), 'candidates': keep}
        c = cands[page]
        if ('--openverse' in sys.argv and not c.get('openverse_done') and len(c['candidates']) < 10
                and ov_used < OV_MAX):
            try:
                c['candidates'] += [x for x in openverse(c['title']) if OK.search(x['license']) and not BAD.search(x['license'])]
                c['openverse_done'] = True
            except Exception as e:
                print(f'{page}: Openverse failed ({e})')
        for x in c['candidates']:
            if not x.get('file') and x.get('thumb'):
                try:
                    x['file'] = thumb(x, tdir)
                except Exception as e:
                    print(f'{page}: no thumbnail for {x["title"]} ({e})')
        anim = sum(1 for x in c['candidates'] if x['frames'] > 1)
        print(f'{page}: {len(c["candidates"])} candidates, {anim} animated')
        json.dump(cands, open(cf, 'w'), ensure_ascii=False, indent=0)


if __name__ == '__main__':
    main()
