"""Propose fixed-choice finder tags for every entry (P3).

Reads research/connection-types/outline.yaml and results/*.json, proposes a value for each field
in fields.yaml, and writes tags.yaml. Fields it is unsure of go in the entry's `check` map with
the reason, so the review session can start there. Entries whose status is `checked` in an
existing tags.yaml are kept as they are.

Run: python3 propose.py            (writes tags.yaml and review/*.md)
     python3 propose.py --stats    (also prints how many values each field got)
"""
import json, os, re, sys
from collections import Counter, OrderedDict
import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
CT = os.path.join(ROOT, 'research', 'connection-types')
FIELDS = yaml.safe_load(open(os.path.join(HERE, 'fields.yaml')))
OUTLINE = yaml.safe_load(open(os.path.join(CT, 'outline.yaml')))
TAGS = os.path.join(HERE, 'tags.yaml')


def slug(name):
    return re.sub(r'[^A-Za-z0-9_]', '', name.replace(' ', '_'))


def rx(p, s):
    return re.search(p, s or '', re.I) is not None


def text(v):
    if isinstance(v, str):
        return v
    if isinstance(v, list):
        return ' | '.join(text(x) for x in v)
    if isinstance(v, dict):
        return ' | '.join(text(x) for x in v.values())
    return str(v)


def snip(s, m, width=90):
    """A short quote around a regex match, for the review notes."""
    mm = re.search(m, s or '', re.I)
    if not mm:
        return ''
    a = max(0, mm.start() - 30)
    return ('...' if a else '') + re.sub(r'\s+', ' ', s[a:a + width]).strip() + '...'


def lead(s, n=1):
    """The start of a free-text field, up to the first colon, semicolon or full stop."""
    return re.split(r'[:;.(]', (s or '').strip().lower(), maxsplit=n)[0]


# ---------------------------------------------------------------- existing fields, normalised
def earliest(s, opts):
    l = (s or '').lower()
    best = None
    for o in opts:
        i = l.find(o)
        if i >= 0 and (best is None or i < best[0] or (i == best[0] and len(o) > len(best[1]))):
            best = (i, o)
    return best[1] if best else None


def power(s):
    l = (s or '').lower().strip()
    if l.startswith('passive or powered') or l.startswith('both'):
        return 'both'
    if l.startswith('powered'):
        return 'powered'
    if l.startswith('mostly passive') or l.startswith('passive'):
        return 'passive'
    return earliest(l, ['powered', 'passive']) or 'passive'


def removability(s):
    return earliest(s, ['tool-free quick release', 'semi-permanent', 'permanent', 'removable']) or 'removable'


def adjustable(s):
    l = (s or '').lower().strip()
    if re.match(r'^(yes)', l):
        return 'yes'
    if re.match(r'^(partly|sometimes|slightly|a little|only|limited|in some)', l):
        return 'partly'
    if re.match(r'^(no|usually no|mostly no|not)', l):
        return 'no'
    return earliest(l, ['yes', 'partly', 'no']) or 'partly'


def load_max(s):
    l = (s or '').lower()
    if l.startswith('not applicable'):
        return 'not applicable', None
    first = re.split(r'[.:;(]', l)[0]
    lv = [w for w in ['light', 'medium', 'heavy'] if re.search(r'\b' + w + r'\b', first)]
    if not lv:
        lv = [w for w in ['light', 'medium', 'heavy'] if re.search(r'\b' + w + r'\b', l[:200])]
        if not lv:
            return 'medium', 'no light/medium/heavy band in `load`; defaulted to medium'
    return (['light', 'medium', 'heavy'][max(['light', 'medium', 'heavy'].index(w) for w in lv)]), None


# ---------------------------------------------------------------- tools
TOOLS = OrderedDict([
    ('soldering iron', r'soldering iron|heat-set tip|heat[- ]set'),
    ('crimper', r'crimp'),
    ('glue gun', r'glue gun|hot-melt gun'),
    ('heat gun', r'heat gun|hot-air|hot air gun|heat-shrink'),
    ('welding or brazing torch', r'welder|welding|brazing|blowtorch|gas torch|propane|butane torch|oxy-?acetylene|oxy-fuel'),
    ('drill and tap', r'\bdrill|(?<!t-)\btaps\b|\btap (?:and die|set|wrench|drill)|thread tap|\bm\d+ tap|tapping|reamer'),
    ('press or vice', r'arbor press|\bvice\b|\bvise\b|(?:a|small|hand|bench|hydraulic|rivet|clinching) press\b|press tool|[gf]-clamp|bar clamp|sash clamp|(?<!hose )(?<!ear )(?<!or )(?<!cable )(?<!boot )(?<!drive )(?<!for )(?<!spring )\bclamps\b'),
    ('sewing or leather tools', r'\bneedle\b(?![- ]nose| file|[- ]tip| applicator| bottle| nozzle)|sewing|stitch|\bawl\b|pricking iron|leather punch|hole punch|rotary punch|grommet|eyelet|\bsetter\b|sailmaker'),
    ('power tools', r'router|power saw|circular saw|mitre saw|miter saw|table saw|band ?saw|scroll saw|jigsaw|grinder|lathe|milling|\bmill\b|laser cutter|\bcnc\b|rotary tool|dremel|power drill|cordless drill|drill press'),
    ('hand tools', r'screwdriver|spanner|wrench|hex key|allen|pliers|hammer|mallet|chisel|knife|scissors|\bfiles?\b|stripper|cutters?\b|\bsaw\b|hacksaw|punch|\bdrift\b|tweezers|socket set'),
])


def tools(s):
    l = (s or '').lower()
    out = [k for k, p in TOOLS.items() if re.search(p, l)]
    if re.match(r'^(none|no tools|by hand|nothing)', l.strip()):
        return ['none'] + [o for o in out if o != 'none'], None
    if not out:
        return ['hand tools'], 'no tool named in `tools_needed`; defaulted to hand tools'
    return out, None


# ---------------------------------------------------------------- usual process
PROC = [('3D print (resin)', r'^3d print \(resin\)|^resin'), ('3D print (FDM)', r'^3d print'),
        ('off-the-shelf part', r'^off-the-shelf|^buy|^bought'), ('CNC', r'^cnc|^machin'),
        ('laser cut', r'^laser'), ('woodwork', r'^woodwork|^wood'), ('sheet metal', r'^sheet metal|^sheet-metal'),
        ('sewing or leatherwork', r'^sew|^leather|^textile'), ('by hand (tied or wrapped)', r'^by hand|^tied|^hand')]


def usual_process(procs, pip, family):
    first = (procs[0] if procs else '').lower().strip()
    v = None
    for name, p in PROC:
        if re.search(p, first):
            v = name
            break
    note = None
    if family == 'knots, lashings & sewn joints' and v in (None, 'off-the-shelf part', '3D print (FDM)'):
        v2 = 'sewing or leatherwork' if rx(r'sew|stitch|seam|lacing', ' '.join(procs)) else 'by hand (tied or wrapped)'
        note = f'first-listed process was "{first[:40]}"; knots family, so set to {v2}'
        v = v2
    if family == 'adhesives & bonding':
        return 'off-the-shelf part', None   # the glue is bought; `processes` lists what it is used on
    if v is None:
        v = 'off-the-shelf part'
        note = f'first-listed process "{first[:50]}" not recognised; defaulted'
    if pip in ('yes',) and v == 'off-the-shelf part':
        note = 'first-listed process is off-the-shelf, but `print_in_place` is yes'
    return v, note


# ---------------------------------------------------------------- power source and power loss
def power_source(pw, name, family, d):
    t = text(d['finder_attributes']['power'])
    if pw == 'passive':
        return ['none'], None
    src = []
    checks = [('electricity', r'electric|solenoid|motor|servo|battery|volt|\bcurrent\b|coil|electromagnet|microcontroller|signal'),
              ('compressed air', r'compressed air|pneumatic|air pressure|\bair\b'),
              ('liquid', r'hydraulic|liquid|\bwater\b|\boil\b'),
              ('suction', r'vacuum|suction'),
              ('heat', r'\bheat|thermal|temperature|wax|melt')]
    for k, p in checks:
        if rx(p, t) or rx(p, name):
            src.append(k)
    if family == 'hydraulics, pneumatics & vacuum' and not set(src) & {'compressed air', 'liquid', 'suction'}:
        src.append('compressed air')
    if not src:
        return ['electricity'], 'powered, but no power source named in `power`; defaulted to electricity'
    note = 'several power sources named; check which ones apply' if len(src) > 2 else None
    return src, note


LOSS = [('stays locked', r'fail-secure|stays locked|remains locked|stays closed|stay locked|stays latched|keeps (?:the )?(?:door|bolt) locked|locked when power|it locks|locks \(engages\)|engages when|fail safely closed'),
        ('lets go', r'fail-safe|lets go|releases|is released|drops|unlocks|opens when|loses (?:its )?(?:grip|hold)|let go|falls|relax|springs? back|swings freely|runs? back|stops braking|drains? back|transmit nothing|back-drive'),
        ('keeps its last state', r'keeps its (?:last )?(?:position|state|shape)|keep their last|holds its position|stays where|stops where|simply stops|bistable|keeps holding|retains|stays in (?:its|the) last|not pushed backwards')]


def power_loss(pw, d):
    if pw == 'passive':        # the text may say what a motor-driven version does, but the type itself needs no power
        return 'not applicable', None
    t = text(d['finder_attributes']['power']).lower()
    if not rx(r'power is lost|power fails|loss of power|power loss|without power|power cut|if power|unpowered|fail-safe|fail-secure|when the power|switched off|power off|pressure is lost', t):
        return 'not applicable', 'uses power, but `power` does not say what happens when it is lost'
    found = sorted((m.start(), k) for k, p in LOSS for m in [re.search(p, t)] if m)
    if not found:
        return 'not applicable', 'mentions power loss, but no outcome matched; check'
    note = ('versions differ: ' + ', '.join(k for _, k in found)) if len({k for _, k in found}) > 1 else None
    return found[0][1], note


# ---------------------------------------------------------------- motion in and out
MOT = [('steps', r'intermittent|step-by-step|\bsteps?\b(?!-up|-down)|stepped|indexed|stop-start'),
       ('back-and-forth turning', r'oscillat|rocking|back-and-forth rotation|back-and-forth turning|swing|partial rotation|less than (?:one|a) (?:full )?turn|limited rotation'),
       ('back-and-forth straight', r'reciprocat|back-and-forth (?:linear|straight)|to-and-fro'),
       ('steady turning', r'continuous rotation|rotation|rotary|turning|turn of|torque|crank|spin'),
       ('straight push or pull', r'straight|linear|push|pull|translation|lift|tension|stroke'),
       ('bending', r'bend|flex|deform|curl'),
       ('pressure', r'pressure|compressed air|\bair\b|vacuum|suction|fluid|liquid|hydraulic|pneumatic'),
       ('heat', r'\bheat|temperature|thermal')]


def classify_motion(s):
    out = []
    for k, p in MOT:
        if re.search(p, s, re.I):
            out.append(k)
    cont = re.search(r'continuous', s, re.I)
    if 'steady turning' in out and ({'back-and-forth turning', 'steps'} & set(out)) and not cont:
        out.remove('steady turning')
    if 'straight push or pull' in out and 'back-and-forth straight' in out:
        out.remove('straight push or pull')
    return out


def motions(d):
    io = text(d['finder_attributes']['input_output'])
    l = io.strip().lower()
    m = re.search(r'input:(.*?)output:(.*)', io, re.I | re.S)
    if l.startswith('not applicable') or l.startswith('not a ') or ('->' not in io and not m):
        note = None if l.startswith(('not applicable', 'not a ')) else f'no "in -> out" form in `input_output`: "{re.sub(chr(10), " ", io[:80])}..."'
        return ['not applicable'], ['not applicable'], ['not applicable'], note
    a, b = io.split('->', 1) if '->' in io else (m.group(1), m.group(2))
    b = re.split(r'[;.]', b.strip(), maxsplit=1)[0]
    mi, mo = classify_motion(a), classify_motion(b)
    note = None if '->' in io else 'read from the "Input: ... Output: ..." wording of `input_output`; check'
    if not mi or not mo:
        note = f'could not read both sides of `input_output`: "{re.sub(chr(10), " ", io[:90])}..."'
        mi = mi or ['not applicable']
        mo = mo or ['not applicable']
    sl = shafts(io) if ({'steady turning', 'back-and-forth turning'} & set(mi)) and ({'steady turning', 'back-and-forth turning'} & set(mo)) else ['not applicable']
    if sl == []:
        sl = ['not applicable']
        note = (note + '; ' if note else '') + 'both sides turn, but no shaft layout named'
    return mi, mo, sl, note


def shafts(io):
    s = io.lower()
    t = []
    if rx(r'parallel', s):
        t.append('parallel')
    if rx(r'intersect|right angle|right-angle|90 degrees|90°|at an angle|perpendicular', s):
        t.append('at an angle')
    if rx(r'in line|in-line|coaxial|same axis|inline|on the same line', s):
        t.append('in line')
    if rx(r'crossed|skew|non-intersecting', s):
        t.append('crossed')
    if rx(r'far apart|any distance|long distance|over a distance|between distant', s):
        t.append('far apart')
    return t


# ---------------------------------------------------------------- overload, clicks
def body(x):
    """A special_behaviour item without its category label, e.g. 'torque-limiting (slips or clicks ...): '."""
    x = re.sub(r'^\s*(?:torque-limiting|fail-safe or breakaway|one-way|indexing|self-locking|over-centre|hand-release only)\s*', '', x, count=1, flags=re.I)
    return re.sub(r'^\([^)]*\)\s*:\s*|^:\s*', '', x, count=1)


REFIT = r'lets go without damage|lets go instead of|pulls? out instead|disengages? when pulled|comes? away if pulled|parts? on purpose|pulls? (?:apart|free|off) without'
OVER = [('breaks or lets go once', r'shear|fusible|breakaway|sacrificial|one-shot|snaps? off|break off|tear-away|burns? through'),
        ('clicks or pops out and resets', r'ball-detent|detent|dimple|ratchet|pops? out|clicks?|resets?|re-engages?|jumps|skips|relief'),
        ('slips and keeps going', r'slips?|slipping|friction|keeps (?:turning|going|running)|magnetic coupling|tolerance ring|belt|centrifugal')]


def overload(sb_items, name, family):
    # Fail-safe items often mean "lets go when the power is off"; count them only when they are about overload.
    rel = [x for x in sb_items if re.match(r'\s*torque-limiting', x, re.I) and not re.match(r'\s*torque-limiting[^:]*:\s*(?:no\b|not\b|none)', x, re.I)]
    rel += [x for x in sb_items if re.match(r'\s*fail-safe or breakaway', x, re.I)
            and (rx(r'overload|too much|excess|too hard|set (?:load|force|torque)|breaks? (?:at|away|off)|pulls? (?:out|free|apart|off)|pulled|yank|tug|jam', body(x))
                 or rx(OVER[0][1], name))]
    if not rel and family != 'torque limiting & slip':
        return 'not applicable', None
    t = ' '.join(body(x) for x in rel)
    if rx(REFIT, t):
        return 'comes apart without damage, refit by hand', 'new option (not yet a finder answer): lets go without damage and is put back by hand'
    for k, p in OVER:          # the name decides when it names the behaviour
        if rx(p, name):
            return k, None
    found = sorted((m.start(), k) for k, p in OVER for m in [re.search(p, t, re.I)] if m)
    if not found:
        return 'not applicable', 'listed as torque-limiting or breakaway, but no overload behaviour matched'
    note = ('several overload behaviours named: ' + ', '.join(sorted({k for _, k in found}))) if len({k for _, k in found}) > 1 else None
    return found[0][1], note


def clicks(sb_items, name, family, d):
    rel = [x for x in sb_items if re.match(r'\s*(one-way|indexing)', x, re.I)]
    if not rel and family not in ('one-way & ratchet', 'indexing & detents'):
        return 'not applicable', None
    t = name + ' ' + ' '.join(body(x) for x in rel) + ' ' + text(d['identity'].get('how_it_works', ''))[:600]
    c = rx(r'click|ratchet|pawl|teeth|tooth|detent|notch', t)
    q = rx(r'silent|quiet|smooth|sprag|roller clutch|wrap-spring|no click|friction', t)
    if c and not q:
        return 'clicks', None
    if q and not c:
        return 'silent', None
    if c and q:
        first_c = re.search(r'click|ratchet|pawl|teeth|tooth|detent|notch', t, re.I).start()
        first_q = re.search(r'silent|quiet|smooth|sprag|roller clutch|wrap-spring|no click|friction', t, re.I).start()
        return ('clicks' if first_c < first_q else 'silent'), 'both clicking and silent words appear; check'
    if family == 'hydraulics, pneumatics & vacuum' or rx(r'valve|pump|cylinder|tank', name):
        return 'not applicable', None   # one-way flow, not a one-way movement
    return 'clicks', 'one-way or indexing, but neither clicking nor silent named; defaulted to clicks'


# ---------------------------------------------------------------- connects
def connects(name, family, other, jobs, d):
    n = name
    t = set()
    f = family
    if f in ('print-in-place & 3D-printing joints', 'snap & clip fits') or rx(r'(?<!nylon-)insert|nut trap|nut pocket|crush rib|heat stak|thread-forming|self-tapping|magnet joint|press fit|split-part|printed screw|multi-material|mid-print|tolerance ring', n):
        t.add('3D-printed part')
    if (f in ('interlocking joints & joinery', 'everyday fasteners & fixings') or rx(r'rivet|clinch|\bsheet\b|panel|knock-down|cleco|push nut|speed nut|\btab\b|butterfly|dowel|biscuit|T-slot joint|lever-cam|wood screw|nails|staples|bracket', n)) and f != 'cord, strap, webbing & textile hardware' and not rx(r'turntable|wall plug|hollow-wall|eye bolt|threaded rod|tensegrity', n):
        t.add('boards or sheet')
    if rx(r'tube|extrusion|pole|T-slot nut|star nut|expansion plug|telescop(?!ic ball)|clamp-on|collet|scaffold|spring bar|spring button|strut hub|internal grip', n):
        t.add('tube, rod or extrusion')
    if (f == 'clutches & couplings' or rx(r'shaft|hub|horn|keyless|taper fit|tolerance ring|retaining ring|collet|spline|coupling|press fit|dog clutch|fixing pin', n)) and not rx(r'kinematic|genderless|hermaphrodit|hose|tube', n):
        t.add('shaft')
    if f in ('cord, strap, webbing & textile hardware', 'knots, lashings & sewn joints') or rx(r'\bcord|rope|strap|webbing|\blace|buckle|zipper|hook-and-loop|press stud|cable tie|knot|garment|carabiner|shock-corded|woven|fabric', n):
        t.add('strap, cord or fabric')
    if rx(r'latch|catch|hinge|\blid\b|door|hatch|quarter-turn|cam lock|draw latch|bayonet|interrupted-screw|tamper|interlock|tumbler|combination lock|folding-blade|multi-point', n) and not rx(r'thread-locking|self-locking wedge|knock-down', n):
        t.add('lid, door or cover')
    if rx(r'mount|hang-on|DIN-rail|grid|suction|quick-release plate|switchable permanent|foam tape|stretch-release|vacuum hold|magnet joint|quick-release pin|indexable clamping|isolation|wall plug|hollow-wall|eye bolt|tripod|spring clip clamp', n):
        t.add('wall, rail, desk or grid')
    if rx(r'gripper|tongs|toggle clamp|cam lever|self-locking wedge|scroll|collet|internal grip|spring clip clamp', n):
        t.add('something to grip')
    if f == 'electrical connections' or 'electrical connections' in other:
        t.add('wires')
    if rx(r'hose|pipe|barb|tube fitting|coupler|flare|compression fitting|luer|band flange', n):
        t.add('hoses or pipes')
    joins = bool(set(jobs[:2]) & {'join and hold', 'glue or bond'})
    if not t:
        if joins:
            if f in ('adhesives & bonding', 'welding, brazing & soldering'):
                return ['any solid parts'], None
            return ['any solid parts'], 'joins parts, but no specific kind of part found; set to any solid parts'
        return ['not applicable'], None
    note = None if joins or f in ('electrical connections',) else 'tagged from its name, but joining is not one of its first two jobs; check it belongs'
    order = FIELDS['connects']['options']
    return [o for o in order if o in t], note


# ---------------------------------------------------------------- glues
MATS = OrderedDict([
    ('PLA', r'\bPLA\b'), ('PETG', r'PETG|\bPET\b'), ('ABS or ASA', r'\bABS\b|\bASA\b'), ('nylon', r'nylon|polyamide|\bPA\b'),
    ('TPU or flexible prints', r'\bTPU\b|flexible filament|flexible print'), ('resin prints', r'resin print|SLA|photopolymer'),
    ('slippery plastics (PE or PP)', r'\bPE\b|\bPP\b|polyethylene|polypropylene|HDPE|LDPE|low-surface-energy|PTFE'),
    ('silicone', r'silicone'), ('acrylic or polycarbonate', r'acrylic|PMMA|polycarbonate|\bPC\b'), ('PVC', r'\bPVC\b|CPVC'),
    ('wood', r'\bwood|timber|plywood|MDF'), ('paper or card', r'paper|card'), ('metal', r'metal|steel|aluminium|aluminum|brass|copper|iron'),
    ('glass or ceramic', r'glass|ceramic|porcelain|china'), ('rubber', r'rubber|neoprene|EPDM'), ('fabric or leather', r'fabric|leather|textile|felt|cloth'),
    ('foam', r'foam|polystyrene|EPS'), ('stone or concrete', r'stone|concrete|masonry|brick')])
GLUE_LISTS = [('strongest', r'epoxy|structural acrylic|polyurethane|cyanoacrylate|solvent weld|UV-curing|anaerobic|PVA|glued joint'),
              ('stays flexible', r'silicone|contact adhesive|elastomeric|hot-melt|foam tape'),
              ('fills gaps', r'epoxy|polyurethane|hot-melt|thermoplastic|silicone'),
              ('can be undone', r'stretch-release|hide glue|hot-melt|thermoplastic')]
POOR = r'(?i)poor|does not|doesn.t|not for|avoid|won.t|cannot|can.t|unsuitable|not suit|fails on|no good|not recommended|weak on|attacks|dissolves'


def glue(d, name, family, jobs):
    if family != 'adhesives & bonding' and (not rx(r'glue|adhesive|\btape\b|fusible web|conductive (?:glue|paint)', name) or rx(r'tape-spring|heat-shrink|pipe thread', name)):
        return None
    mt = text(d['finder_attributes']['materials'])
    parts = re.split(POOR, mt, maxsplit=1)
    good, bad = parts[0], (parts[1] if len(parts) > 1 else '')
    well = [k for k, p in MATS.items() if re.search(p, good)]
    poorly = [k for k, p in MATS.items() if re.search(p, bad) and k not in well]
    allt = ' '.join(text(d['identity'].get(k, '')) for k in ('one_liner', 'how_it_works')) + ' ' + text(d['guidance'].get('when_to_use', ''))
    # The first four traits start from the name lists in finder-test/tree.py (GLUE_NEED), which the owner
    # reviewed in run 3; "fast" and anything not on those lists come from the text.
    traits, listed = [], False
    for k, p in GLUE_LISTS:
        if rx(p, name):
            traits.append(k)
            listed = True
    if 'can be undone' not in traits and removability(d['finder_attributes']['removability']) in ('removable', 'tool-free quick release'):
        traits.append('can be undone')
    if rx(r'seconds|instant|5-minute|five-minute|quick-setting|sets? in (?:a few )?(?:seconds|minutes)|within (?:a few )?minutes|cures? in minutes', allt):
        traits.append('fast')
    if not listed:
        for k, p in [('strongest', r'structural|strongest|very strong|high strength|load-bearing'),
                     ('stays flexible', r'flexible|stays soft|rubbery|elastic|flexes'),
                     ('fills gaps', r'gap-filling|fills gaps|gap filling|fill gaps|mouldable|putty')]:
            if rx(p, allt) and k not in traits:
                traits.append(k)
    traits = [o for o in FIELDS['glue_traits']['options'] if o in traits]
    notes = []
    if not well:
        notes.append('no bonded materials found in `materials`')
    if not traits:
        notes.append('no glue traits found')
    elif not listed:
        notes.append('not on the glue lists in the finder tree; traits read from the text')
    return {'glue_traits': traits, 'bonds_well': well, 'bonds_poorly': poorly}, ('; '.join(notes) or None)


# ---------------------------------------------------------------- electrical band
def electrical_band(d, family, other):
    if family != 'electrical connections' and 'electrical connections' not in other:
        return None, None
    l = text(d['finder_attributes']['load']).lower()
    for k, p in [('not a conductor', r'not a conductor'), ('signal only', r'signal only'),
                 ('up to about 3 A', r'up to about 3 ?a\b'), ('up to about 30 A', r'up to about 30 ?a\b'),
                 ('above about 30 A', r'above about 30 ?a\b')]:
        m = re.search(p, l)
        if m and m.start() < 120:
            return k, None
    return 'not applicable', 'tagged electrical, but `load` does not start with the fixed electrical lead-in'


# ---------------------------------------------------------------- main
def propose(i, it):
    p = os.path.join(CT, 'results', slug(it['name']) + '.json')
    d = json.load(open(p))
    fa, mk, idt = d['finder_attributes'], d['making'], d['identity']
    name, family, other = it['name'], idt['family'], idt.get('other_families', [])
    jobs = [j.split(':')[0].strip().lower() for j in fa['job']] if isinstance(fa['job'], list) else [lead(fa['job'])]
    sb = fa['special_behaviour'] if isinstance(fa['special_behaviour'], list) else [fa['special_behaviour']]
    unc = set(d.get('uncertain', []))
    tags, check = OrderedDict(), OrderedDict()

    def put(field, value, note=None, src=None):
        tags[field] = value
        if note:
            check[field] = note
        elif src and src in unc:
            check[field] = f'the source field `{src}` is marked [uncertain]'

    pw = power(text(fa['power']))
    v, n = connects(name, family, other, jobs, d); put('connects', v, n)
    v, n = power_source(pw, name, family, d); put('power_source', v, n, 'power')
    v, n = power_loss(pw, d); put('power_loss', v, n)
    mi, mo, sl, n = motions(d); put('motion_in', mi, n, 'input_output'); put('motion_out', mo); put('shaft_layout', sl)
    v, n = overload(sb, name, family); put('overload_response', v, n)
    v, n = clicks(sb, name, family, d); put('clicks', v, n)
    g = glue(d, name, family, jobs)
    if g:
        vals, n = g
        for k, val in vals.items():
            put(k, val)
        if n:
            check['glue'] = n
    v, n = electrical_band(d, family, other)
    if v:
        put('electrical_band', v, n)
    v, n = tools(text(fa['tools_needed'])); put('tools', v, n, 'tools_needed')
    v, n = load_max(text(fa['load']))
    if n and text(fa['load']).lower().startswith('electrical:'):
        v, n = 'light', 'electrical entry whose mechanical load has no light/medium/heavy band; set to light'
    put('load_max', v, n, 'load')
    v, n = usual_process(mk['processes'] if isinstance(mk['processes'], list) else [mk['processes']], lead(mk.get('print_in_place', '')), family); put('usual_process', v, n)
    put('adjustable', adjustable(text(fa['adjustable'])), None, 'adjustable')
    put('removability', removability(text(fa['removability'])), None, 'removability')
    put('power', pw)
    return OrderedDict([('num', i), ('name', name), ('family', family), ('status', 'proposed'),
                        ('tags', dict(tags)), ('check', dict(check))])


def validate(entry):
    for k, v in entry['tags'].items():
        if k not in FIELDS:
            sys.exit(f"tags.yaml entry {entry['num']}: unknown field `{k}` (fields are in fields.yaml)")
        opts = FIELDS[k]['options']
        vals = v if isinstance(v, list) else [v]
        bad = [x for x in vals if x not in opts]
        if bad:
            sys.exit(f"tags.yaml entry {entry['num']} ({entry['name']}), {k}: {bad} not in the options in fields.yaml")


class FlowLists(yaml.SafeDumper):
    """Writes short lists of values on one line (connects: [shaft, wires]), so tags.yaml is easy to edit."""


FlowLists.add_representer(list, lambda d, v: d.represent_sequence(
    'tag:yaml.org,2002:seq', v, flow_style=all(isinstance(x, str) for x in v)))


def main():
    old = {}
    if os.path.exists(TAGS):
        for e in yaml.safe_load(open(TAGS)) or []:
            old[e['num']] = e
    out = []
    for i, it in enumerate(OUTLINE['items'], 1):
        if old.get(i, {}).get('status') == 'checked' and old[i]['name'] == it['name']:
            validate(old[i])
            out.append(old[i])
            continue
        e = propose(i, it)
        validate(e)
        out.append(e)
    hdr = ('# Proposed finder tags (P3). Generated by propose.py from the run 2 results; field options are in fields.yaml.\n'
           '# Review: correct any value, delete its `check` note, and set `status: checked` when an entry is done.\n'
           '# Re-running propose.py keeps checked entries as they are.\n')
    with open(TAGS, 'w') as f:
        f.write(hdr)
        yaml.dump([json.loads(json.dumps(e)) for e in out], f, Dumper=FlowLists, allow_unicode=True, sort_keys=False, width=110)
    write_review(out)
    if '--stats' in sys.argv:
        stats(out)
    n_check = sum(1 for e in out if e['check'])
    print(f'{len(out)} entries; {sum(1 for e in out if e["status"] == "checked")} checked; '
          f'{n_check} have at least one field to check; {sum(len(e["check"]) for e in out)} fields to check')


def stats(out):
    for k in FIELDS:
        c = Counter()
        for e in out:
            v = e['tags'].get(k)
            if v is None:
                continue
            for x in (v if isinstance(v, list) else [v]):
                c[x] += 1
        print(f'{k}: ' + ', '.join(f'{x} {n}' for x, n in c.most_common()))
    cc = Counter(f for e in out for f in e['check'])
    print('fields to check:', ', '.join(f'{k} {n}' for k, n in cc.most_common()))


def short(n):
    return re.sub(r'\s*\(.*$', '', n)


def cell(v):
    if isinstance(v, list):
        v = ', '.join(x for x in v if x != 'not applicable') or '–'
    return '–' if v in ('not applicable', None, '') else str(v)


def is_src(note):
    return note.startswith('the source field')


def write_review(out):
    rd = os.path.join(HERE, 'review')
    os.makedirs(rd, exist_ok=True)
    fams = [f['key'] for f in OUTLINE['families']]
    labels = {f['key']: f['label'] for f in OUTLINE['families']}
    index = ['# Finder tag review, family by family', '',
             'One page per family. Each row is one entry with its proposed tags. **Bold** marks a value the',
             'script was unsure of (a default, a guess or a clash); *italics* mark a value read from text the',
             'research run marked [uncertain]. The reasons are listed under each table, the unsure ones first.',
             'Correct the values in `../tags.yaml`, delete the entry\'s `check` notes you have dealt with, and set',
             'its `status` to `checked`. Field options: `../fields.yaml`. How to re-run: `../README.md`.', '',
             '| Family | Entries | Script unsure | Source uncertain |', '|---|---|---|---|']
    for n, fam in enumerate(fams, 1):
        es = [e for e in out if e['family'] == fam]
        fn = f'{n:02d}-' + re.sub(r'[^a-z0-9]+', '-', fam.lower()).strip('-') + '.md'
        n_unsure = sum(1 for e in es for v in e['check'].values() if not is_src(v))
        n_src = sum(1 for e in es for v in e['check'].values() if is_src(v))
        index.append(f'| [{fam}]({fn}) | {len(es)} | {n_unsure} | {n_src} |')
        cols = ['connects', 'power_source', 'power_loss', 'motion_in', 'motion_out', 'shaft_layout', 'overload_response',
                'clicks', 'tools', 'load_max', 'usual_process', 'adjustable', 'removability']
        heads = ['Connects', 'Power', 'If power is lost', 'Motion in', 'Motion out', 'Shafts', 'If overloaded',
                 'Clicks', 'Tools', 'Load', 'Usually made by', 'Adjust', 'Take apart']
        extra = []
        if any('glue_traits' in e['tags'] for e in es):
            extra += [('glue_traits', 'Glue traits'), ('bonds_well', 'Bonds well'), ('bonds_poorly', 'Bonds poorly')]
        if any('electrical_band' in e['tags'] for e in es):
            extra += [('electrical_band', 'Electrical')]
        cols += [c for c, _ in extra]
        heads += [h for _, h in extra]
        L = [f'# {fam}: {labels[fam]}', '',
             f'{len(es)} entries; {n_unsure} values the script was unsure of, {n_src} read from text marked [uncertain]. '
             'Back to the [index](README.md).', '',
             '| # | Entry | ' + ' | '.join(heads) + ' |', '|' + '---|' * (len(heads) + 2)]
        unsure, src = [], []
        for e in es:
            row = []
            for c in cols:
                v = cell(e['tags'].get(c))
                key = 'glue' if c in ('glue_traits', 'bonds_well', 'bonds_poorly') and 'glue' in e['check'] else c
                if key == 'motion_out' or key == 'shaft_layout':
                    key = 'motion_in' if 'motion_in' in e['check'] else key
                note = e['check'].get(key)
                row.append(v if not note else (f'*{v}*' if is_src(note) else f'**{v}**'))
            L.append(f"| {e['num']} | {short(e['name'])} | " + ' | '.join(row) + ' |')
            for k, why in e['check'].items():
                (src if is_src(why) else unsure).append(f"- **{e['num']} {short(e['name'])}**, {k}: {why}")
        L += ['', '## The script was unsure', ''] + (unsure or ['Nothing flagged.'])
        L += ['', '## Read from text marked [uncertain]', '',
              'The value is probably right, but the research run was not sure of the fact behind it.', ''] + (src or ['None.'])
        open(os.path.join(rd, fn), 'w').write('\n'.join(L) + '\n')
    open(os.path.join(rd, 'README.md'), 'w').write('\n'.join(index) + '\n')


if __name__ == '__main__':
    main()
