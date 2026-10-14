"""Write the finder's data files for the site (P6): content/finder/finder.json and finder-tree.json.

The questions and their rules stay in research/finder-test/tree.py, the tested tree. This script
walks that tree and saves, for every answer, the entries it leaves (as outline numbers), so the
site's finder only has to follow the answers someone picks. It needs no rule language of its own.
It also saves the answers' examples and explanations (examples.yaml), and marks the entries that
are on a path only because of a value that needs confirming (⚑).

finder.json has one record per entry: its page, name, one-line summary, family and fixed finder
values (from the entry page's front matter), and which values need confirming.

Run: python3 tools/export_finder.py   (after tools/make_entries.py; it runs normalise.py itself)
It stops with an error if any path ends on fewer than 3 or more than 10 entries, or leaves an entry
unreached, or an answer has no example: the same test as tree.py.
"""
import json, os, re, subprocess, sys
import yaml

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
FT = os.path.join(ROOT, 'research', 'finder-test')
OUT = os.path.join(ROOT, 'content', 'finder')
ENTRIES = os.path.join(ROOT, 'content', 'entries')

subprocess.run([sys.executable, 'normalise.py'], cwd=FT, check=True, stdout=subprocess.DEVNULL)
sys.path.insert(0, FT)
sys.argv = [sys.argv[0]]
import tree  # noqa: E402

for e in tree.E:   # as tree.py's own test does
    d = json.load(open(tree.RESULTS + e['file']))
    e['materials_raw'] = d['finder_attributes']['materials']
EXA = tree.load_examples()


def front(fn):
    s = open(os.path.join(ENTRIES, fn)).read()
    return yaml.safe_load(re.match(r'---\n(.*?)\n---\n', s, re.S).group(1))


def node(n, S, path, flags, leaves):
    q, answers = n
    out = {'question': q, 'answers': []}
    for label, pred, child in answers:
        tree.USED = set()
        T = [e for e in S if pred(e)]
        used, tree.USED = tree.USED, None
        keep = {e['num'] for e in T}
        fl = {k: set(v) for k, v in flags.items() if k in keep}
        for num, field in used:
            if num in keep:
                fl.setdefault(num, set()).add(field)
        p = path + (label,)
        x = EXA.get(p, {})
        a = {'label': label, 'example': x.get('example'), 'explain': x.get('explain'),
             'entries': sorted(keep),
             'needs_confirming': {str(k): sorted(v) for k, v in sorted(fl.items())}}
        if tree.is_q(child):
            a['next'] = node(child, T, p, fl, leaves)
        elif child is not None:     # a tick step (R29): the finder page narrows the list by ticks
            a['tick'] = {'field': child.field, 'prompt': child.prompt, 'anything': child.anything}
        else:
            leaves.append((p, len(T)))
        out['answers'].append(a)
    return out


def main():
    os.makedirs(OUT, exist_ok=True)
    pages = {}
    for fn in sorted(os.listdir(ENTRIES)):
        if fn.endswith('.md'):
            fm = front(fn)
            pages[fm['num']] = {
                'num': fm['num'], 'page': fn[:-3], 'title': fm['title'],
                'description': fm['description'], 'family': fm['family'], 'other_families': fm['other_families'],
                'finder': fm['finder'], 'needs_confirming': sorted(fm['needs_confirming']),
                'image': (fm.get('image') or {}).get('still') or (fm.get('image') or {}).get('file')}   # cards show a still
    leaves = []
    t = node(tree.TREE, tree.E, (), {}, leaves)
    reached = set()

    def collect(n):
        for a in n['answers']:
            if 'next' in a:
                collect(a['next'])
            else:
                reached.update(a['entries'])
    collect(t)
    errors = [f'path ends on {k} entries: {" > ".join(p)}' for p, k in leaves if not 3 <= k <= 10]
    errors += [f'entry {n} is on no path' for n in sorted(set(pages) - reached)]
    errors += [f'answer has no example: {" > ".join(p)}' for _, p in tree.answer_paths() if not EXA.get(p, {}).get('example')]
    missing = sorted({e['num'] for e in tree.E} - set(pages))
    errors += [f'entry {n} has no page (run tools/make_entries.py)' for n in missing]
    if errors:
        sys.exit('\n'.join(errors))
    json.dump([pages[k] for k in sorted(pages)], open(os.path.join(OUT, 'finder.json'), 'w'),
              ensure_ascii=False, separators=(',', ':'))
    json.dump(t, open(os.path.join(OUT, 'finder-tree.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
    size = lambda f: os.path.getsize(os.path.join(OUT, f)) // 1024
    print(f'finder.json: {len(pages)} entries ({size("finder.json")} KB); finder-tree.json: '
          f'{sum(1 for _ in tree.answer_paths())} answers, {len(leaves)} paths, all 3-10 entries ({size("finder-tree.json")} KB)')


if __name__ == '__main__':
    main()
