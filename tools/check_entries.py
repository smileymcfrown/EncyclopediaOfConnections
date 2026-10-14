"""Check the entry pages in content/entries/ (P5).

Every outline item has exactly one page; the front matter has every required key; families and
finder values are among the fixed options; every `needs_confirming` note names a finder value and
a known kind; every page has the fixed headings. Exits with status 1 on any error, so it can run
in CI (with the finder path test) once the site is set up.

Run: python3 tools/check_entries.py
"""
import os, re, sys
import yaml

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
sys.path.insert(0, os.path.join(ROOT, 'research', 'finder-test'))
import normalise as nz  # noqa: E402
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from make_entries import PROCESS_LABELS  # noqa: E402

OUTLINE = yaml.safe_load(open(os.path.join(ROOT, 'research', 'connection-types', 'outline.yaml')))
TAGF = yaml.safe_load(open(os.path.join(ROOT, 'research', 'finder-tags', 'fields.yaml')))
DIR = os.path.join(ROOT, 'content', 'entries')
REQUIRED = ['title', 'description', 'num', 'term', 'plain_name', 'aliases', 'family', 'other_families', 'finder',
            'needs_confirming', 'confirmed', 'open_points', 'uncertain_fields', 'links', 'make_it_yourself',
            'sources', 'research', 'glossary', 'pictures']
HEADINGS = ['## How it works', '## Details', '## Making it', '## Needs confirming']
NA = 'not applicable'
OPTIONS = {   # the normalised run 2 fields (research/finder-test/normalise.py) and what each may hold
    'job': ('list', nz.JOB), 'special_behaviour': ('list', nz.SB), 'holding_principle': ('list', nz.HP),
    'motion': ('one', ['rotate+slide', 'multiple', 'rotate', 'slide', 'flex', 'none', NA]),
    'reuse_cycles': ('one', ['effectively unlimited', 'many times', 'a few times', 'once', NA]),
    'seal': ('one', ['airtight or pressure', 'watertight', 'dust-resistant', 'loose', 'none', NA]),
    'access_needed': ('one', ['one side only', 'both sides', 'end of a tube or shaft', NA]),
    'print_in_place': ('one', ['yes', 'partly', 'no', NA]),
    'maker_difficulty': ('one', ['easy', 'moderate', 'hard', NA]),
    'processes': ('list', list(PROCESS_LABELS.values())),
}
for k, v in TAGF.items():
    OPTIONS[k] = (v['kind'], v['options'])
KINDS = {'best guess', 'source uncertain'}
from make_entries import gh_anchor  # noqa: E402
ANCHORS = {gh_anchor(t['term']) for t in yaml.safe_load(open(os.path.join(ROOT, 'content', 'glossary.yaml')))}


def main():
    errors, warnings = [], []
    fams = {f['key'] for f in OUTLINE['families']}
    seen = {}
    for fn in sorted(os.listdir(DIR)):
        if not fn.endswith('.md') or fn == 'README.md':
            continue
        s = open(os.path.join(DIR, fn)).read()
        m = re.match(r'---\n(.*?)\n---\n', s, re.S)
        if not m:
            errors.append(f'{fn}: no front matter')
            continue
        fm, body = yaml.safe_load(m.group(1)), s[m.end():]
        e = lambda msg: errors.append(f'{fn}: {msg}')
        for k in REQUIRED:
            if k not in fm:
                e(f'missing `{k}`')
        n = fm.get('num')
        if n in seen:
            e(f'number {n} is also used by {seen[n]}')
        seen[n] = fn
        if fm.get('family') not in fams:
            e(f'unknown family {fm.get("family")!r}')
        for f in fm.get('other_families') or []:
            if f not in fams:
                e(f'unknown other family {f!r}')
        finder = fm.get('finder') or {}
        for k, (kind, opts) in OPTIONS.items():
            if k not in finder:
                if k != 'electrical_band' and not k.startswith(('glue', 'bonds')):
                    e(f'finder value `{k}` missing')
                continue
            v = finder[k]
            vals = v if isinstance(v, list) else [v]
            if kind == 'list' and not isinstance(v, list):
                e(f'finder value `{k}` should be a list')
            bad = [x for x in vals if x not in opts]
            if bad:
                e(f'finder value `{k}` has {bad}, not among its options')
            if v in (NA, []) and k in ('job', 'motion', 'holding_principle'):
                warnings.append(f'{fn}: finder value `{k}` is empty')
        for k in finder:
            if k not in OPTIONS:
                e(f'unknown finder value `{k}`')
        for k, v in (fm.get('needs_confirming') or {}).items():
            if k not in finder:
                e(f'needs_confirming names `{k}`, which is not a finder value')
            if not isinstance(v, dict) or v.get('kind') not in KINDS or not v.get('reason'):
                e(f'needs_confirming `{k}` needs a kind ({", ".join(sorted(KINDS))}) and a reason')
        for p in fm.get('open_points') or []:
            if p.get('kind') not in ('content', 'sources', 'scope') or not p.get('note'):
                e('an open point needs a kind (content, sources or scope) and a note')
        for x in (fm.get('links') or []) + (fm.get('make_it_yourself') or []):
            if not isinstance(x, dict) or not str(x.get('url', '')).startswith('http'):
                e(f'a link without a web address: {str(x)[:60]}')
        if not os.path.exists(os.path.join(ROOT, fm.get('research', ''))):
            e(f'research file {fm.get("research")} not found')
        for a in re.findall(r'\]\(\.\./glossary\.md#([^)]+)\)', body):
            if a not in ANCHORS:
                e(f'link to a glossary term that does not exist: #{a}')
        if not fm.get('pictures'):
            e('no picture')
        for img in fm.get('pictures') or []:
            for f in (img['file'], img.get('still')):
                if f and not os.path.exists(os.path.join(ROOT, 'content', 'media', f)):
                    e(f'picture content/media/{f} not found')
            if not img.get('drawn') and not all(img.get(k) for k in ('title', 'author', 'license', 'source')):
                e(f'a copied picture ({img["file"]}) needs its title, author, licence and source for the credit line')
            if not img.get('alt'):
                e(f'picture {img["file"]} has no alt text')
        for h in HEADINGS:
            if h not in body:
                e(f'heading "{h}" missing')
    want = set(range(1, len(OUTLINE['items']) + 1))
    for n in sorted(want - set(seen)):
        errors.append(f'outline item {n} ({OUTLINE["items"][n - 1]["name"]}) has no page')
    for n in sorted(set(seen) - want):
        errors.append(f'{seen[n]}: number {n} is not in the outline')
    for w in warnings:
        print('warning:', w)
    for x in errors:
        print('error:', x)
    print(f'{len(seen)} pages checked: {len(errors)} errors, {len(warnings)} warnings')
    sys.exit(1 if errors else 0)


if __name__ == '__main__':
    main()
