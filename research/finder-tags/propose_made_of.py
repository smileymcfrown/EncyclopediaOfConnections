"""Propose the `made_of` finder tag (R37, D45): the materials an entry suits, for the finder's
"Made of" filter under every shortlist.

`made_of` is set by hand (`set_by: hand` in fields.yaml), like the finder answers of R33: propose.py
keeps it as it is. This script gives a first value to every entry that has none yet ("not
applicable"), from the words in its research text, and marks each one needs confirming (best
guess). Helper agents then check the values against the entry text (review-r37.yaml); values they
find right or change lose the mark, values they cannot settle keep it.

Run: python3 propose_made_of.py            (entries with no value yet)
     python3 propose_made_of.py --evidence F (also write the words each value came from to F, for the check)
"""
import json, os, re, sys
import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.argv, ARGS = sys.argv[:1], sys.argv[1:]
import propose  # noqa: E402

FIELD = 'made_of'
# option -> words in the research text that suggest it (checked by a person or helper afterwards)
WORDS = {
    '3D prints': r'\b(?:PLA|PETG|ABS|ASA|TPU|FDM|3D[- ]print\w*|printed (?:part|plastic|in)|resin print\w*|SLS|MJF)\b',
    'plastic sheet, tube or moulded parts': r'\b(?:acrylic|polycarbonate|PVC|HDPE|UHMW|acetal|POM|Delrin|nylon|polypropylene|polyethylene|plastic sheet|moulded plastic|injection[- ]moulded|plastic)\b',
    'wood': r'\b(?:wood\w*|timber|plywood|MDF|hardwood|softwood|bamboo|dowel|joinery)\b',
    'metal': r'\b(?:metal\w*|steel|stainless|alumin(?:i)?um|brass|bronze|copper|iron|zinc|titanium|sheet metal)\b',
    'paper or card': r'\b(?:paper|card(?:board|stock)?|corrugated|paperboard)\b',
    'foam': r'\b(?:foam\w*|EVA|polystyrene|styrofoam|XPS|EPS|EPP|Depron|foamboard|foam[- ]?core)\b',
    'clay or putty': r'\b(?:clay|polymer clay|epoxy putty|modelling putty|air-dry)\b',
    'carbon fibre or composites': r'\b(?:carbon[- ]fib(?:re|er)|CFRP|GFRP|GRP|fib(?:re|er)glass|glass[- ]fib(?:re|er)|composite (?:panel|material|tube|lay-?up|sheet|part)s?|honeycomb|Kevlar|aramid)\b',
    'glass or mirror': r'\b(?:glass(?!-filled|[- ]fib|[- ]reinforced)|mirror\w*|glazing)\b',
    'fabric, leather or cord': r'\b(?:fabric|textile|leather|webbing|rope|cord|canvas|ribbon|sewing thread|yarn)s?\b',
}
NEG = r'\b(?:not (?:for|suit|recommended|on|with|in)|poor(?:ly)?|avoid|won\'t|will not|does not|doesn\'t|cannot|can\'t|unsuitable|never)\b'


def positive(t):
    """The parts of a text before any 'not for', 'poorly', 'avoid' and so on, sentence by sentence."""
    out = []
    for s in re.split(r'(?<=[.;])\s+', t or ''):
        m = re.search(NEG, s, re.I)
        out.append(s[:m.start()] if m else s)
    return ' '.join(out)


def suggest(d, tags):
    fa, mk = d['finder_attributes'], d['making']
    srcs = {'materials': positive(propose.text(fa['materials'])),
            'processes': propose.text(mk['processes']),
            'how_it_works': propose.text(d['identity']['how_it_works'])}
    vals, why = [], {}
    for opt, pat in WORDS.items():
        for src, t in srcs.items():
            m = re.search(pat, t, re.I)
            if m:
                vals.append(opt)
                why[opt] = f'{src}: {propose.snip(t, re.escape(m.group(0)))}'
                break
    tips = propose.text(mk['making_tips_3d_printing']).strip().lower()
    if '3D prints' not in vals and tips and not tips.startswith('not applicable'):
        vals.append('3D prints')
        why['3D prints'] = 'making_tips_3d_printing has printing advice'
    for b in tags.get('bonds_well') or []:      # glues: the materials they bond well
        for opt, pat in WORDS.items():
            if re.search(pat, b, re.I) and opt not in vals:
                vals.append(opt)
                why[opt] = f'bonds_well: {b}'
    opts = FIELDSPEC['options']
    vals = [o for o in opts if o in vals]
    return vals or ['metal'], why


FIELDSPEC = propose.FIELDS[FIELD]


def main():
    tags = yaml.safe_load(open(propose.TAGS))
    evidence = {}
    n = 0
    for i, it in enumerate(propose.OUTLINE['items'], 1):
        e = next(x for x in tags if x['num'] == i)
        if e['tags'].get(FIELD, ['not applicable']) != ['not applicable']:
            continue
        d = json.load(open(os.path.join(propose.CT, 'results', propose.slug(it['name']) + '.json')))
        vals, why = suggest(d, e['tags'])
        e['tags'][FIELD] = vals
        e['needs_confirming'][FIELD] = {'kind': propose.GUESS, 'reason': 'proposed from the words in the research text (R37); not yet checked'}
        evidence[i] = {'name': it['name'], 'made_of': vals, 'why': why}
        n += 1
    hdr = ''.join(l for l in open(propose.TAGS) if l.startswith('#'))
    with open(propose.TAGS, 'w') as f:
        f.write(hdr)
        yaml.dump(tags, f, Dumper=propose.FlowLists, allow_unicode=True, sort_keys=False, width=110)
    if '--evidence' in ARGS:
        yaml.dump(evidence, open(ARGS[ARGS.index('--evidence') + 1], 'w'), allow_unicode=True, sort_keys=False, width=150)
    print(f'{n} entries given a first `made_of` value')


if __name__ == '__main__':
    main()
