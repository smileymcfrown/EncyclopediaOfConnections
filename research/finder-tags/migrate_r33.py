"""One-off (R33, 2026-10-15): turn the finder answers that were rules over entry names into finder tags.

Until R33 most answers in ../finder-test/tree.py picked entries by matching their names (e.g. "Is there
a screw or bolt?" matched thread|insert|nut|screw|bolt). Each of those questions is now a finder tag
field, set by hand (`set_by: hand` in fields.yaml), whose values are the entry's answers to it. This
script ran the old rules once, inside the same branches of the tree, and wrote what they gave:

- the new fields (with their question and options) into fields.yaml;
- each entry's values into tags.yaml, every one marked needs confirming (best guess), as a rule over
  names can be wrong. A later check against the entry text may remove the mark (see README.md).

So the finder's shortlists did not change on the day; from then on only the tags count, and a person
can correct any value. Kept for the record; running it again would overwrite those fields.
"""
import os, sys
import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, '..', 'finder-test'))
sys.argv = [sys.argv[0]]
import tree  # noqa: E402

# What each new field means (shown in fields.yaml); fields not listed take the question they answer.
MEANING = {
    'also_under': 'Extra top-level finder answers an entry belongs under, beyond its job and family (before R33 these were exceptions by name).',
    'turns': 'For things that turn: less than a full turn (swings or rocks) or full turns (spins).',
    'move_kind': 'For moving things: swivels or tilts in several directions, or follows a set path.',
}


def questions(node, out, path=()):
    """field -> (question, [(key, answer label)], branch): where in the tree each field is asked."""
    q, answers = node
    for label, pred, child in answers:
        if getattr(pred, 'field', None):
            out.setdefault(pred.field, (q, [], ' > '.join(x.split(' (')[0] for x in path)))[1].append((pred.key, label))
        if tree.is_q(child):
            questions(child, out, path + (label,))
    return out


def main():
    tree.MIGRATE = True
    out = []
    tree.walk(tree.TREE, tree.E, [], out)
    rec = tree.RECORD
    qs = questions(tree.TREE, {})
    order = []                                        # fields in the order the tree asks them
    keys = {}
    for f in list(qs) + [f for f in rec if f not in qs]:
        if f not in order:
            order.append(f)
        ks = keys.setdefault(f, [])
        for k, _ in qs.get(f, ('', [], ''))[1]:
            if k not in ks:
                ks.append(k)
        for vals in rec.get(f, {}).values():
            for k in vals:
                if k not in ks:
                    ks.append(k)
    # fields.yaml: append the new fields
    ff = os.path.join(HERE, 'fields.yaml')
    text = open(ff).read()
    if 'set_by: hand' not in text:
        text += '\n# ---------------------------------------------------------------------------------------------\n'
        text += '# Finder answers (R33). Each field below is one finder question that used to pick entries by name.\n'
        text += '# The value is the entry\'s answer(s) to it. `set_by: hand`: propose.py keeps these as they are;\n'
        text += '# they started from the old name rules (migrate_r33.py) and can be corrected like any other tag.\n'
        for f in order:
            meaning = MEANING.get(f) or f'Answer to the finder question "{qs[f][0]}" (under: {qs[f][2]}).'
            text += f'\n{f}:\n  kind: list\n  set_by: hand\n  meaning: {yaml.safe_dump(meaning, width=1000).strip().removesuffix("...").strip()}\n'
            text += '  options: ' + yaml.safe_dump(keys[f] + ['not applicable'], default_flow_style=True, width=1000).strip() + '\n'
        open(ff, 'w').write(text)
    # tags.yaml: add the values
    tf = os.path.join(HERE, 'tags.yaml')
    head = ''.join(ln for ln in open(tf) if ln.startswith('#'))
    data = yaml.safe_load(open(tf))
    n_vals = 0
    for e in data:
        for f in order:
            vals = [k for k in keys[f] if k in rec.get(f, {}).get(e['num'], [])]
            e['tags'][f] = vals or ['not applicable']
            if vals:
                n_vals += 1
                q = f'{qs[f][0]}" under "{qs[f][2]}' if f in qs else MEANING[f]
                e['needs_confirming'][f] = {
                    'kind': 'best guess',
                    'reason': f'carried over from the finder\'s old rule on entry names (R33), for "{q}"'}
    sys.path.insert(0, HERE)
    import propose  # noqa: E402  (its writer, so the file looks the same as before)
    with open(tf, 'w') as fh:
        fh.write(head)
        import json
        yaml.dump([json.loads(json.dumps(x)) for x in data], fh, Dumper=propose.FlowLists, allow_unicode=True,
                  sort_keys=False, width=110)
    print(f'{len(order)} new fields; {n_vals} values set; fields: {", ".join(order)}')


if __name__ == '__main__':
    main()
