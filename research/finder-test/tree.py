"""Draft finder tree, tested against the run 2 data. Run: python3 tree.py"""
import re, collections, json, sys, os
RESULTS=os.path.join(os.path.dirname(os.path.abspath(__file__)),"..","connection-types","results")+os.sep
from tags import E, rx, fams
def J(*jobs, k=2):            # main job is one of these (first k jobs)
    return lambda e: bool(set(e['job'][:k]) & set(jobs))
def F(*f): return lambda e: e['family'] in f
def OF(*f): return lambda e: bool(set(fams(e)) & set(f))
def SB(*s, k=2): return lambda e: bool(set(e['sb'][:k]) & set(s))
def C(t): return lambda e: t in e['connects']
def M(*m): return lambda e: e['motion'] in m
def R(*r): return lambda e: e['removal'] in r
def P(t): return lambda e: t in e['pkind']
def IO(*t): return lambda e: bool(set(e['ioc']) & set(t))
def SH(*t): return lambda e: bool(set(e['shafts']) & set(t))
def N(p): return lambda e: rx(p, e['name'])
def OR(*ps): return lambda e: any(p(e) for p in ps)
def AND(*ps): return lambda e: all(p(e) for p in ps)
def NOT(p): return lambda e: not p(e)
ALL=lambda e: True

def mat(*w):  # adhesive materials keywords in the raw materials field
    import json as _j
    def f(e):
        t=e.get('materials_raw','')
        if e['family']!='adhesives & bonding' and 'glue or bond' not in e['job'][:2]: return False
        good=re.split(r'(?i)poor|does not|doesn.t|not for|avoid|won.t|cannot|unsuitable|not suit|fails on|no good', t)[0]
        return rx('|'.join(w), good)
    return f

REMOVE=('Will you need to take it apart again?',[
  ('No, never (permanent)', R('never'), None),
  ('Now and then, with a tool', R('tools'), None),
  ('Often, by hand, without tools', R('hand'), None)])
def Q(question, *answers): return (question, list(answers))
def A(label, pred, child=None): return (label, pred, child)
GLUE_NEED=Q('What matters most?',
  A('Strongest bond', N(r'epoxy|structural acrylic|polyurethane|cyanoacrylate|solvent weld|UV-curing|anaerobic|PVA|glued joint')),
  A('Stays flexible, or seals too', N(r'silicone|contact adhesive|elastomeric|hot-melt|foam tape')),
  A('Fills gaps, or builds up a shape', N(r'epoxy|polyurethane|hot-melt|thermoplastic|silicone')),
  A('Can be undone later', OR(R('tools','hand'), N(r'stretch-release|hide glue|hot-melt|thermoplastic'))))

TREE=Q('What do you need it to do?',
 A('Hold two things together (they stay still)', OR(J('join and hold','glue or bond'), AND(M('none','flex'), F('adhesives & bonding','interlocking joints & joinery','snap & clip fits','clamping, magnetic & friction connections','print-in-place & 3D-printing joints','quick-release & tool-free')), F('locks, latches & catches'), N(r'lid and flap stays')),
   Q('What are you joining?',
     A('3D-printed parts, or screws, nuts and magnets into a print', C('printed'), Q('Will you need to take it apart again?',
         A('No, never (permanent)', R('never')),
         A('Yes', R('tools','hand'), Q('Is there a screw or bolt?',
             A('Yes', N(r'thread|insert|nut|screw|bolt')),
             A('No (clips, pins, rings, magnets)', NOT(N(r'thread|insert|nut|screw|bolt'))))))),
     A('Boards, panels or sheet (wood, plywood, acrylic, sheet metal)', C('sheet'), Q('Will you need to take it apart again?',
         A('No, never (permanent)', R('never'), Q('What is the sheet made of?',
             A('Wood or plywood', N(r'butterfly|dovetail|dowel|finger|housing|mortise|butt and lap|japanese')),
             A('Sheet metal or plastic sheet', NOT(N(r'butterfly|dovetail|dowel|finger|housing|mortise|butt and lap|japanese'))))),
         A('Now and then, with a tool', R('tools'), Q('What is the sheet made of?',
             A('Wood or plywood', N(r'butt and lap|cross-halving|japanese|knock-down|lever-cam|sliding dovetail|dowel')),
             A('Sheet metal, plastic or laser-cut sheet', NOT(N(r'butt and lap|cross-halving|japanese|knock-down|lever-cam|sliding dovetail|dowel'))))),
         A('Often, by hand, without tools', R('hand')))),
     A('Tube, rod, pole or aluminium extrusion', C('tube')),
     A('A wheel, gear or arm onto a shaft, or two shafts end to end', C('shaft'), Q('What are you connecting?',
         A('A wheel, gear, pulley or arm onto a shaft', N(r'collet|keyless|retaining|horn|hub|spline|taper|tolerance|press fit|scroll|key|crush'), Q('Will you 3D print the part that goes on the shaft?',
             A('Yes', lambda e: e['pip'] in ('yes','partly') or rx(r'crush|press fit|torque-limiting gear|horn|tolerance|retaining', e['name'])),
             A('No, it is metal or bought', lambda e: not (e['pip'] in ('yes','partly') or rx(r'crush|press fit|torque-limiting gear|horn|tolerance|retaining', e['name']))))),
         A('Two shafts end to end', N(r'coupling|universal joint|drive shaft|right-angle|dog clutch|CV|genderless|shaft-to-hub'), Q('How well do the shafts line up?',
             A('Exactly in line', N(r'rigid|shaft-to-hub|dog clutch|shear|genderless|kinematic')),
             A('A little out of line (needs some give)', N(r'beam|jaw|oldham|schmidt')),
             A('At an angle, or along a bent path', N(r'universal|drive shaft|right-angle|CV|constant-velocity')))))),
     A('Strap, cord, rope or fabric', C('cord'), Q('What do you need?',
         A('Close an opening, or attach fabric (zip, hook-and-loop, press stud, button)', N(r'zipper|hook-and-loop|press stud|garment')),
         A('Join strap ends, hook something on, or grip a cord', NOT(N(r'zipper|hook-and-loop|press stud|garment'))))),
     A('A lid, door or cover that opens and closes', C('lid'), Q('How should it open?',
         A('It swings open on a hinge, or stays open at an angle', N(r'hinge|kerf|stays')),
         A('Twist a lid, knob or fastener', N(r'bayonet|quarter-turn|^cam latch|interrupted|tamper|child')),
         A('Press, pull or flip a catch or lever', NOT(OR(N(r'hinge|kerf|stays|bayonet|quarter-turn|^cam latch|interrupted|tamper|child'), P('electric'))), Q('Should it lock, so only the right person can open it?',
             A('Yes (key, code, hidden catch or safety lock)', N(r'tumbler|combination|hidden|interlock|folding-blade')),
             A('No, it just has to stay shut', NOT(N(r'tumbler|combination|hidden|interlock|folding-blade'))))),
         A('By power (button, remote, timer)', P('electric')))),
     A('Something onto a wall, rail, desk or grid', C('mount'), Q('How should it hold?',
         A('Hooks, slots, clips or pins', N(r'bayonet|clevis|DIN|genderless|hang-on|quick-release pin|quick-release plate|grid|indexable')),
         A('Magnet or suction', N(r'magnet|suction|vacuum')),
         A('Sticky tape or pads', N(r'tape|stretch-release|isolation')))),
     A('Something that has to be gripped or clamped', C('grip'), Q('Who does the gripping?',
         A('I tighten it by hand (clamp, chuck, wedge)', NOT(N(r'gripper'))),
         A('A robot or machine (gripper)', N(r'gripper')))),
     A('I just want to glue it', C('glue'), Q('What are you gluing?',
         A('3D-printed plastic (PLA, PETG, ABS) or resin prints', mat(r'\bPLA\b|PETG|\bABS\b|resin print|3D print'), GLUE_NEED),
         A('Slippery plastics (polyethylene, polypropylene, silicone)', mat(r'\bPE\b|\bPP\b|polyethylene|polypropylene|HDPE|low-surface')),
         A('Wood, paper or card', mat(r'wood|paper|card'), GLUE_NEED),
         A('Metal or glass', mat(r'metal|steel|aluminium|glass'), GLUE_NEED),
         A('Rubber, fabric, leather or foam', mat(r'rubber|fabric|leather|foam|textile'), GLUE_NEED))),
     A('Any solid parts / something else', lambda e: not e['connects'] and e['power']=='passive', Q('Where can you reach?',
         A('Only one side, or only the end of a tube or shaft', lambda e: e['access'] in ('one side only','end of a tube or shaft')),
         A('Both sides', lambda e: e['access']=='both sides'),
         A('It does not matter', lambda e: e['access']=='not applicable'))))),
 A('Let something move (turn, slide, swing or bend)', OR(J('let it move'), F('hinges & pivots','sliding, telescoping & linear motion','compliant mechanisms & flexures')),
   Q('How should it move?',
     A('Swing or rock, less than a full turn (like a lid or arm)', AND(M('rotate'), lambda e: e['swing']=='swing'), Q('Should it print in one piece?',
         A('Yes, print it assembled', lambda e: e['pip'] in ('yes','partly'), Q('Should it stay where you put it?',
             A('No, swing freely', NOT(N(r'friction|detent|self-closing|lockable|ball-and-socket'))),
             A('Yes: hold, click or spring shut', N(r'friction|detent|self-closing|lockable|ball-and-socket')))),
         A('No, I will assemble or buy it', lambda e: e['pip']=='no'))),
     A('Spin round and round (a wheel, roller or shaft)', AND(M('rotate'), lambda e: e['swing']=='spin'), Q('What should spin?',
         A('A wheel or part on a fixed axle or table', NOT(OF('clutches & couplings','gear trains, gearboxes & transmissions'))),
         A('A shaft driving another shaft', OF('clutches & couplings','gear trains, gearboxes & transmissions'), Q('What else should it do?',
             A('Just pass the turning on', NOT(N(r'ratchet|roller clutch|sprag|wrap-spring|anti-back|differential|gear'))),
             A('Turn one way only', N(r'ratchet|roller clutch|sprag|wrap-spring|anti-back')),
             A('Change speed or split the drive (gears)', N(r'differential|gear')))))),
     A('Slide in a straight line, or telescope', M('slide','rotate+slide'), Q('What kind of slide?',
         A('A tube or pole that telescopes and locks', N(r'telescop|spring button')),
         A('A carriage, drawer or table on a rail', N(r'dovetail|drawer|linear guide|spline')),
         A('Pushed along by a screw, chain or crank', N(r'screw|chain|rigging|yoke|syringe')))),
     A('Bend or flex (no hinge pin)', M('flex'), Q('What should the bendy part do?',
         A('Fold or swing like a hinge', N(r'flexure hinge|kerf|lamina|living hinge|self-folding|metamaterial|tape-spring')),
         A('Move in a straight line, or act as a spring', N(r'leaf|ortho|beam coupling|elastic band|bellows')),
         A('Grip, or snap between two positions', N(r'bistable|gripper|fin-ray|jamming')))),
     A('Swivel or tilt in several directions (ball or universal joint)', AND(OR(M('multiple'), N(r'ball-and-socket|gimbal')), N(r'rod end|universal|schmidt|posable|ball|gimbal|CV'))),
     A('Follow a set path (e.g. swing out and stay level)', N(r'four-bar|straight-line|walking|scissor|bell crank|lid and flap|iris|origami|tendon|virtual-pivot')))),
 A('Control a movement (one way only, clicks, slips, locks, slows)', OR(J('stop it moving back','click into set positions','slip or let go when overloaded','slow it, stop it or keep its speed steady'), SB('one-way','indexing','torque-limiting','self-locking','hand-release only','over-centre',k=1), N(r'fusible|shear|breakaway')),
   Q('What should it do?',
     A('Move one way only (stop it going back)', OR(J('stop it moving back'), SB('one-way',k=1)), Q('Does it turn or slide?',
         A('Turns', M('rotate','rotate+slide','multiple'), Q('Is clicking OK?',
             A('Yes, clicks are fine (ratchets)', N(r'ratchet|pawl|reel closure|latch|child-resistant')),
             A('No, it must be smooth and silent', N(r'sprag|roller clutch|wrap-spring|anti-back|worm|inertia')),
             A('It is for air or liquid (one-way valves)', N(r'valve|pump|damper')))),
         A('Slides', M('slide','rotate+slide')),
         A('Bends, or something else', M('flex','none')))),
     A('Click into set positions', OR(J('click into set positions'), SB('indexing',k=1)), Q('Does it turn or slide?',
         A('Turns', M('rotate','rotate+slide','multiple'), Q('What should the clicks do?',
             A('Hold a position I set by hand', NOT(N(r'click-pen|geneva|intermittent|ratchet'))),
             A('Step forward one position at a time', N(r'click-pen|geneva|intermittent|ratchet')))),
         A('Slides, bends or something else', M('slide','rotate+slide','flex','none')))),
     A('Slip, click or let go if overloaded', OR(J('slip or let go when overloaded'), SB('torque-limiting',k=1), F('torque limiting & slip'), N(r'fusible')), Q('What should happen when it is overloaded?',
         A('Slip, and keep going', N(r'friction|magnetic coupling|tolerance|belt|centrifugal|series-elastic|slip|threadless|governor'), Q('Will you 3D print it?',
             A('Yes, or partly', lambda e: e['pip'] in ('yes','partly') or 'fdm' in e['processes'] and e['difficulty']=='easy'),
             A('No, I will buy or machine it', lambda e: not (e['pip'] in ('yes','partly') or 'fdm' in e['processes'] and e['difficulty']=='easy')))),
         A('Click or pop out, then reset by itself', N(r'ball-detent|ratchet-tooth|torque-limiting gear|relief|thermal')),
         A('Break or let go once, on purpose (replace it after)', N(r'shear|breakaway|tamper|fusible|burn')))),
     A('Stay where I leave it, and let go when I release it', OR(SB('self-locking','hand-release only',k=1), F('self-locking & anti-back-drive')), Q('Does it turn or slide?',
         A('Turns', M('rotate','rotate+slide','multiple'), Q('What should it do?',
             A('Lock so only a person can open it (key, code, trigger)', N(r'combination|tumbler|hidden|sear|servo|cam latch|rotary latch')),
             A('Hold a load where it stops (brake or self-locking drive)', NOT(N(r'combination|tumbler|hidden|sear|servo|cam latch|rotary latch'))))),
         A('Slides', M('slide','rotate+slide')),
         A('Bends, or something else', M('flex','none')))),
     A('Snap past a point and stay there (over-centre)', OR(SB('over-centre',k=2), F('over-centre, toggle & cam clamps')), Q('What is it for?',
         A('Clamp or latch something shut', N(r'draw latch|cam lever|toggle clamp|over-centre linkage|lever lock')),
         A('Flip between two positions (switch, fold or stay)', NOT(N(r'draw latch|cam lever|toggle clamp|over-centre linkage|lever lock'))))),
     A('Slow it down, stop it, or keep its speed steady', OR(J('slow it, stop it or keep its speed steady'), F('brakes, dampers & speed control')), Q('What do you need?',
         A('Stop it or hold it still (brakes)', N(r'brake|limiter|ratchet')),
         A('Cushion or smooth it (dampers)', N(r'damper|isolation|gas spring|stays|friction hinge|dashpot')),
         A('Keep a steady speed or level', N(r'governor|escapement|float|speed-control|shut-off|slip clutch|cam and follower|siphon')))))),
 A('Change a movement (speed, force or kind of motion)', OR(J('change speed or turning force','change the kind of motion'), F('motion conversion','gear trains, gearboxes & transmissions')),
   Q('What change do you need?',
     A('Faster, slower or stronger turning', OR(J('change speed or turning force',k=1), F('gear trains, gearboxes & transmissions')), Q('How are the input and output shafts arranged?',
         A('Side by side (parallel)', SH('parallel')),
         A('At an angle (e.g. 90 degrees)', SH('angle','crossed')),
         A('In line (one straight through the other)', SH('inline')),
         A('Far apart, or the path bends (belts, cables, chains)', N(r'belt|chain|cable|bowden|pulley|capstan|flexible')))),
     A('Turning into straight-line motion, or back', IO('turn->straight','straight->turn/bend'), Q('What kind of straight-line motion?',
         A('A slow, precise push (screws)', N(r'screw|half nut|syringe pump')),
         A('Back and forth, again and again (cranks, cams)', N(r'cam and|slider|scotch|quick-return|swashplate')),
         A('Long travel, or pulling (rack, belt, chain, cable, rope)', N(r'rack|belt|chain|capstan|twisted|tendon|pulley|lantern|friction drive')))),
     A('Steady turning into steps, or into rocking', IO('turn->steps','turn->swing')),
     A('A push or pull moved, multiplied or redirected', IO('straight->straight','swing->straight','turn->path'), Q('How?',
         A('Levers and linkages', N(r'crank|linkage|scissor|whippletree|iris|metamaterial|gripper')),
         A('Cables, ropes, pulleys or liquid in tubes', N(r'bowden|pulley|syringe|half nut')))),
     A('Make movement from air, liquid, suction or heat', IO('fluid/heat->motion')))),
 A('Tighten something, or take up slack', OR(J('tighten and hold tension'), F('tensioning, reels & take-up')),
   Q('What are you tightening?',
     A('A strap, lace, cord or rope', OR(C('cord'), N(r'\blace|\bcord|rope|strap|reel|winch|capstan|cleat|knot|turnbuckle|tie')), Q('How should it hold?',
         A('Click, wind or screw it tighter (ratchet, winch, turnbuckle)', N(r'ratchet|inertia|capstan|turnbuckle|winch|windlass')),
         A('Grip by friction; release by hand (buckles, cord locks)', N(r'cam buckle|cord lock|guy-line|ladder lock|cleat|knot')),
         A('Pull back by itself (spring or elastic)', N(r'constant-force|elastic|shock-corded')))),
     A('A belt, chain or cable in a machine', AND(N(r'belt|chain|idler|tensioner|spring|bowden|multi-stage'), NOT(C('cord'))), None),
     A('Parts clamped or pulled together', NOT(OR(C('cord'), N(r'\blace|\bcord|rope|strap|reel|winch|capstan|cleat|knot|belt|chain|idler'))), None))),
 A('Line parts up exactly, every time', OR(J('line parts up exactly',k=1), F('locating & alignment')), None),
 A('Spring back, or store energy', OR(J('store energy'), F('springs & energy storage')), Q('How should it push back?',
     A('Push or pull in a straight line', AND(NOT(M('flex')), NOT(N(r'torsion|clock|spiral|hinge')))),
     A('A printed or bent springy part (flexure)', M('flex')),
     A('Twist back (torsion), or wind up', N(r'torsion|clock|spiral|hinge|constant')))),
 A('Seal it, or pass cables, air or liquid through', OR(J('seal it, or pass cables or fluid through'), F('seals & pass-throughs','hydraulics, pneumatics & vacuum')),
   Q('What do you need?',
     A('Keep water, dust or air out of a joint that does not move', AND(M('none','flex'), NOT(N(r'pump|valve|siphon|cable|hose|fitting|coupler|tank|gripper|vacuum|venturi|Bernoulli|actuator|muscle'))), Q('Will you need to take it apart again?',
         A('No, never', R('never')),
         A('Yes', R('tools','hand')))),
     A('Seal round a moving shaft or rod', AND(NOT(M('none')), N(r'seal|boot|bellows|O-ring|labyrinth|gasket'))),
     A('Get cables through a wall or past a moving joint', N(r'cable|slip ring|twist|drag|gland|grommet')),
     A('Join hoses, pipes or tubes', N(r'hose|fitting|coupler|barb|flange|compression|luer|push-to')),
     A('Pump, store or control air or liquid (valves, pumps)', N(r'pump|valve|siphon|regulator|tank|accumulator'), Q('What should it do?',
         A('Push air or liquid along (pumps)', N(r'pump|siphon|ram')),
         A('Let flow one way only, or let off pressure (safety)', N(r'check valve|relief|tesla|float')),
         A('Switch, set or store the flow (valves, regulators, tanks)', N(r'air-logic|iris valve|regulator|shut-off|speed-control|switching|tank')))))),
 A('Hold or let go using power (electric, air or suction)', OR(J('hold or release using power'), lambda e: e['power']=='powered', F('powered & active connectors')),
   Q('What will power it?',
     A('Electricity', P('electric'), Q('What should it do?',
         A('Lock, latch or hold by magnet, and let go on command', N(r'latch|maglock|holding electromagnet|electro-permanent|burn')),
         A('Brake, engage, switch or move something', NOT(N(r'latch|maglock|holding electromagnet|electro-permanent|burn'))))),
     A('Compressed air', P('air')),
     A('Liquid (hydraulics, water)', P('liquid')),
     A('Suction (vacuum)', P('suction')))),
)

def walk(node, S, path, out):
    q, answers = node
    for label, pred, child in answers:
        T=[e for e in S if pred(e)]
        p=path+[label]
        if child is None: out.append((p,T))
        else: walk(child, T, p, out)

if __name__=='__main__':
    HERE=os.path.dirname(os.path.abspath(__file__))
    for e in E:
        d=json.load(open(RESULTS+e['file']))
        e['materials_raw']=d['finder_attributes']['materials']
    out=[]; walk(TREE,E,[],out)
    reached=set()
    verbose='-v' in sys.argv
    for p,T in out:
        reached|={e['num'] for e in T}
        flag='OK ' if 3<=len(T)<=10 else ('BIG' if len(T)>10 else 'SML')
        print(f"{flag} {len(T):3}  {' > '.join(x[:38] for x in p)}")
        if verbose: print('        ', '; '.join(f"{e['num']} {e['name'][:28]}" for e in T))
    un=[e for e in E if e['num'] not in reached]
    print('\nleaves',len(out),'OK',sum(3<=len(T)<=10 for _,T in out),'BIG',sum(len(T)>10 for _,T in out),'SMALL',sum(len(T)<3 for _,T in out))
    print('unreached',len(un)); [print('  ',e['num'],e['name'][:60],'|',e['family'],e['job'][:2],e['motion']) for e in un]
