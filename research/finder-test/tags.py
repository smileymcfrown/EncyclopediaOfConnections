"""Derived tags used by the draft finder tree (rough, rule-based; to be set by hand in Phase 1)."""
import re, json, os
HERE=os.path.dirname(os.path.abspath(__file__))
E=json.load(open(f'{HERE}/entries.json'))
def rx(p,s): return re.search(p,s,re.I) is not None
def fams(e): return [e['family']]+e['other_families']

def connects(e):
    n=e['name']; t=set()
    f=e['family']
    if f in ('print-in-place & 3D-printing joints','snap & clip fits') or rx(r'insert|nut trap|crush rib|heat stak|thread-forming|self-tapping|magnet joint|press fit|split-part|printed screw|multi-material|mid-print|tolerance ring',n): t.add('printed')
    if (f=='interlocking joints & joinery' or rx(r'rivet|clinch|sheet|panel|knock-down|cleco|push nut|speed nut|tab|butterfly|dowel|biscuit|wedge dowel|T-slot joint|lever-cam|wood screw|nails, brads|staples for wood|metal brackets',n)) and not rx(r'turntable',n) and f!='cord, strap, webbing & textile hardware': t.add('sheet')
    if rx(r'tube|extrusion|pole|T-slot nut|star nut|expansion plug|telescop|clamp-on|collet|scaffold|spring bar|spring button|cam lever',n): t.add('tube')
    if f=='clutches & couplings' or rx(r'shaft|hub|horn|keyless|taper fit|tolerance ring|retaining ring|collet|spline|coupling|press fit|dog clutch|scroll|fixing pin',n): t.add('shaft')
    if f in ('cord, strap, webbing & textile hardware','knots, lashings & sewn joints') or (rx(r'\bcord|rope|strap|webbing|\blace|buckle|zipper|hook-and-loop|press stud|cable tie|knot|garment|carabiner|shock-corded|woven',n) and not rx(r'gasket',n)): t.add('cord')
    if rx(r'latch|catch|hinge|\blid|door|hatch|quarter-turn|cam lock|draw latch|magnet joint|bayonet|interrupted-screw|band flange|tamper|mechanical interlock|tumbler|combination lock|folding-blade',n) and not rx(r'thread-locking|self-locking wedge|knock-down',n): t.add('lid')
    if rx(r'mount|hang|DIN-rail|grid|suction|quick-release plate|switchable permanent|foam tape|stretch-release|vacuum hold|magnet joint|quick-release pin|genderless|indexable clamping|isolation|wall plug|hollow-wall|eye bolts|spring clip clamp',n): t.add('mount')
    if f=='adhesives & bonding' or rx(r'glued joint',n): t.add('glue')
    if rx(r'gripper|tongs|toggle clamp|cam lever|self-locking wedge|scroll|collet',n): t.add('grip')
    return t

def removal(e):
    r=e['removability']
    return {'permanent':'never','semi-permanent':'never','removable':'tools','tool-free quick release':'hand'}[r]

def swing_or_spin(e):
    m=e['motion_raw'].lower()
    if rx(r'continuous|unlimited|any number of|full turn|360|round and round|spins|keeps turning|many turns',m): return 'spin'
    return 'swing'

def power_kind(e):
    f=e['family']; n=e['name']; p=e['power']
    t=set()
    if f=='hydraulics, pneumatics & vacuum' or rx(r'air|pneumatic|vacuum|suction|bernoulli|hydraulic|syringe|pump|valve|siphon|jamming',n):
        if rx(r'vacuum|suction|jamming|bernoulli|venturi',n): t.add('suction')
        elif rx(r'hydraulic|syringe|water|siphon|liquid|centrifugal|gear pump|peristaltic|float',n): t.add('liquid')
        else: t.add('air')
    if rx(r'electro|solenoid|\bservo|motor|shape-memory|thermal|burn-wire|polymer muscle|maglock',n) or (f=='powered & active connectors' and not t): t.add('electric')
    return t

def io_class(e):
    s=e['io'].lower(); n=e['name']
    t=set()
    if rx(r'pressure|air|vacuum|flow of|heat ->|liquid|oil',s.split('->')[0]) and '->' in s: t.add('fluid/heat->motion')
    if rx(r'pump|siphon|valve|regulator',n): t.add('moves fluid')
    first=s.split('->')[0] if '->' in s else s
    out=s.split('->',1)[1][:160] if '->' in s else ''
    if rx(r'rotation|crank|sprocket|rod|motor',first):
        if rx(r'straight|linear|reciprocat|traverse|push|pull|plunger|extension',out): t.add('turn->straight')
        if rx(r'stepped|intermittent|step-by-step',out): t.add('turn->steps')
        if rx(r'oscillat|swing|rocking|back-and-forth rotation',out): t.add('turn->swing')
        if rx(r'walking|path|radial|jaw',out): t.add('turn->path')
    if rx(r'straight|push|pull|linear|squeeze',first) and not rx(r'rotation',first[:30]):
        if rx(r'rotation|torque|twist|swing|bending|jaw',out): t.add('straight->turn/bend')
        if rx(r'straight|push|pull|lift|haul|longer|long straight',out): t.add('straight->straight')
    if rx(r'rocking|swing',first) and rx(r'straight',out): t.add('swing->straight')
    return t

def shafts(e):
    s=e['io'].lower(); t=set()
    if rx(r'parallel',s): t.add('parallel')
    if rx(r'intersect|right angle|90 degrees|at an angle|90°',s): t.add('angle')
    if rx(r'in line|coaxial|same axis',s): t.add('inline')
    if rx(r'crossed|skew|offset',s): t.add('crossed')
    return t

for e in E:
    e['connects']=sorted(connects(e)); e['removal']=removal(e); e['swing']=swing_or_spin(e)
    e['pkind']=sorted(power_kind(e)); e['ioc']=sorted(io_class(e)); e['shafts']=sorted(shafts(e))
