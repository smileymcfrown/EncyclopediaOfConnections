"""Normalise run 2 finder fields into canonical option sets. Writes entries.json."""
import json, glob, re, yaml, os
ROOT=os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
OUT=os.path.dirname(os.path.abspath(__file__))
outline=yaml.safe_load(open(f'{ROOT}/research/connection-types/outline.yaml'))
names=[it['name'] for it in outline['items']]

JOB=['join and hold','let it move','stop it moving back','slip or let go when overloaded',
     'click into set positions','lock, and release by hand','change speed or turning force',
     'change the kind of motion','hold or release using power','glue or bond',
     'tighten and hold tension','line parts up exactly','store energy',
     'slow it, stop it or keep its speed steady','seal it, or pass cables or fluid through']
SB=['torque-limiting','self-locking','hand-release only','one-way','indexing','over-centre',
    'self-aligning or self-centring','quick-release','fail-safe or breakaway','tensioning',
    'motion conversion']
HP=['shape','friction or clamping','material bond','magnetic','suction or air pressure',
    'spring force','jamming','powered hold','not a holding joint']

def lead(s):
    return s.strip().lower()

def list_prefix(items, opts):
    found=[]
    for v in items:
        l=lead(v)
        for o in opts:
            if l.startswith(o) and o not in found:
                found.append(o)
        # combined "a / b"
        if l.startswith('click into set positions / stop it moving back'):
            for o in ['click into set positions','stop it moving back']:
                if o not in found: found.append(o)
    return found

def hp_parse(v):
    if isinstance(v,list):
        return list_prefix(v,HP)
    l=v.lower()
    found=[]
    for o in HP:
        for m in re.finditer(re.escape(o), l):
            pre=l[max(0,m.start()-8):m.start()]
            if 'not a' in pre and o=='powered hold': continue
            if o not in found: found.append(o)
    return found

def earliest(s, opts):
    l=s.lower()
    best=None
    for o in opts:
        i=l.find(o)
        if i>=0 and (best is None or i<best[0] or (i==best[0] and len(o)>len(best[1]))):
            best=(i,o)
    return best[1] if best else None

def motion(s):
    l=s.lower().strip()
    for o in ['rotate+slide','multiple','rotate','slide','flex','none']:
        if l.startswith(o): return o
    if l.startswith('none'): return 'none'
    return earliest(l,['rotate+slide','multiple','rotate','slide','flex','none'])

def removability(s):
    return earliest(s,['tool-free quick release','semi-permanent','permanent','removable'])

def reuse(s):
    return earliest(s,['effectively unlimited','many times','a few times','once'])

def seal(s):
    l=s.lower()
    for o in ['airtight or pressure','watertight','dust-resistant','loose','none']:
        if l.startswith(o): return o
    return earliest(l,['airtight or pressure','watertight','dust-resistant','loose','none'])

def power(s):
    l=s.lower()
    if l.startswith('passive or powered'): return 'both'
    if l.startswith('powered'): return 'powered'
    if l.startswith('mostly passive') or l.startswith('passive'): return 'passive'
    return earliest(l,['powered','passive'])

def load(s):
    l=s.lower()
    first=re.split(r'[.:;(]',l)[0]
    lv=[w for w in ['light','medium','heavy'] if w in first]
    if 'very heavy' in first and 'heavy' not in lv: lv.append('heavy')
    if not lv:
        lv=[w for w in ['light','medium','heavy'] if re.search(r'\b'+w+r'\b', l[:200])]
    if len(lv)==2 and 'light' in lv and 'heavy' in lv and ' to ' in first: lv=['light','medium','heavy']
    return lv or ['n/a']

def adjustable(s):
    l=s.lower().strip()
    if re.match(r'^(yes|partly|sometimes|slightly|a little|only)',l): return 'yes' if l.startswith('yes') else 'partly'
    if re.match(r'^(no|usually no|mostly no|not)',l): return 'no'
    return earliest(l,['yes','partly','no']) or 'partly'

def access(s):
    return earliest(s,['one side only','both sides','end of a tube or shaft','not applicable'])

def pip(s):
    l=s.lower().strip()
    for o in ['yes','partly','no']:
        if l.startswith(o): return o
    return earliest(l,['partly','yes','no'])

def difficulty(s):
    l=s.lower().strip()
    if l.startswith('moderate to hard') or l.startswith('hard'): return 'hard' if l.startswith('hard') else 'moderate'
    if l.startswith('easy'): return 'easy'
    if l.startswith('moderate'): return 'moderate'
    return earliest(l,['easy','moderate','hard'])

PROC={'3d print (fdm)':'fdm','3d print (resin)':'resin','cnc':'cnc','laser cut':'laser','woodwork':'woodwork',
      'sheet metal':'sheet metal','off-the-shelf part':'buy'}
def processes(lst):
    out=set()
    for v in lst:
        l=v.lower()
        head=re.split(r'[:;]',l)[0]
        if head.startswith('3d print'):
            if 'resin' in head: out.add('resin')
            if 'fdm' in head or 'resin' not in head: out.add('fdm')
            continue
        for k,c in PROC.items():
            if head.startswith(k) or (k in head[:40] and k not in ('cnc',)): out.add(c)
        if head.startswith('cnc') or head.startswith('laser cut or cnc') or ' cnc' in head[:20]: out.add('cnc')
        if 'laser' in head[:25]: out.add('laser')
        if 'woodwork' in head[:25]: out.add('woodwork')
        if 'sheet metal' in head[:25]: out.add('sheet metal')
    return sorted(out)

TOOLS={'soldering iron':r'soldering iron|heat-set|heat set','press':r'\barbor press|\bpress\b|vice|vise','crimper':r'crimp',
       'rivet tool':r'rivet(er| gun| tool|ing tool)|rivet nut tool|pop rivet','tap':r'\btap\b|taps\b|tapping','drill':r'\bdrill',
       'glue':r'glue|adhesive|epoxy|solvent','heat gun':r'heat gun|hot air|heat shrink','saw/chisel/router':r'\bsaw\b|chisel|router|jig',
       'spanner/hex key/screwdriver':r'spanner|wrench|hex key|allen|screwdriver','pliers':r'pliers','compressor/pump':r'compressor|pump'}
def tools(s):
    l=s.lower()
    out=[k for k,p in TOOLS.items() if re.search(p,l)]
    none = bool(re.match(r'^(none|no tools|by hand)',l.strip()))
    return out, none

entries=[]
for f in sorted(glob.glob(f'{ROOT}/research/connection-types/results/*.json')):
    d=json.load(open(f)); fa=d['finder_attributes']; mk=d['making']; idt=d['identity']
    e=dict(file=os.path.basename(f), term=idt['term'], family=idt['family'], other_families=idt['other_families'],
           job=list_prefix(fa['job'],JOB), motion=motion(fa['motion']), sb=list_prefix(fa['special_behaviour'],SB),
           hp=hp_parse(fa['holding_principle']), power=power(fa['power']), removability=removability(fa['removability']),
           reuse=reuse(fa['reuse_cycles']), seal=seal(fa['seal']), load=load(fa['load']), adjustable=adjustable(fa['adjustable']),
           access=access(fa['access_needed']), processes=processes(mk['processes']), pip=pip(mk['print_in_place']),
           difficulty=difficulty(fa['maker_difficulty']), io=fa['input_output'], tools_raw=fa['tools_needed'],
           motion_raw=fa['motion'], removability_raw=fa['removability'], seal_raw=fa['seal'])
    e['tools'],e['tools_none']=tools(fa['tools_needed'])
    entries.append(e)
# match outline number
import difflib
def key(s): return re.sub(r'[^a-z0-9]','',s.lower())
fk={key(e['file'][:-5]):e for e in entries}
for i,n in enumerate(names,1):
    k=key(n)
    m=[e for kk,e in fk.items() if kk==k[:len(kk)] or k.startswith(kk) or kk.startswith(k[:30])]
    if not m:
        best=difflib.get_close_matches(k,list(fk),1,0.5)
        m=[fk[best[0]]] if best else []
    if m: m[0].setdefault('num',i); m[0].setdefault('name',n)
missing=[e['file'] for e in entries if 'num' not in e]
print('unmatched files',missing)
json.dump(entries,open(f'{OUT}/entries.json','w'),indent=1)
print(len(entries))
