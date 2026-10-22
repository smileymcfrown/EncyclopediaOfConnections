"""The finder's question tree, tested against the run 2 data. Run: python3 tree.py

Every answer is a rule over an entry's fixed finder values: its finder tags (TG, from
../finder-tags/tags.yaml) and the normalised research fields (job, family, motion, special behaviour,
print in place, access). Since R33 (2026-10-15) no answer looks at entry names any more: the answers
that did are now finder tags, which a person can check and correct."""
import re, collections, json, sys, os
RESULTS=os.path.join(os.path.dirname(os.path.abspath(__file__)),"..","connection-types","results")+os.sep
HERE_ = os.path.dirname(os.path.abspath(__file__))
E = json.load(open(os.path.join(HERE_, 'entries.json')))   # written by normalise.py
def rx(p, s): return re.search(p, s, re.I) is not None
def fams(e): return [e['family']] + e['other_families']
def J(*jobs, k=2):            # main job is one of these (first k jobs)
    return lambda e: bool(set(e['job'][:k]) & set(jobs))
def F(*f): return lambda e: e['family'] in f
def OF(*f): return lambda e: bool(set(fams(e)) & set(f))
def SB(*s, k=2): return lambda e: bool(set(e['sb'][:k]) & set(s))
# The answers below use the finder tags (TG, from ../finder-tags/tags.yaml) wherever a tag field exists
# (Phase 2, R33). These short names keep the tree readable.
CONNECTS = {'printed': '3D-printed part', 'sheet': 'boards or sheet', 'tube': 'tube, rod or extrusion', 'shaft': 'shaft',
            'cord': 'strap, cord or fabric', 'lid': 'lid, door or cover', 'mount': 'wall, rail, desk or grid',
            'grip': 'something to grip', 'wires': 'wires', 'hoses': 'hoses or pipes', 'any': 'any solid parts'}
def C(t): return TG('connects', CONNECTS[t])
GLUE_TRAITS = ('strongest', 'stays flexible', 'fills gaps', 'fast', 'can be undone')   # every glue has at least one
def M(*m): return lambda e: e['motion'] in m
REMOVAL = {'never': ('permanent', 'semi-permanent'), 'tools': ('removable',), 'hand': ('tool-free quick release',)}
def R(*r): return TG('removability', *[v for x in r for v in REMOVAL[x]])
POWER = {'electric': 'electricity', 'air': 'compressed air', 'liquid': 'liquid', 'suction': 'suction'}
def P(t): return TG('power_source', POWER[t])
TURNING = ('steady turning', 'back-and-forth turning'); STRAIGHT = ('straight push or pull', 'back-and-forth straight')
def MV(ins, outs): return AND(TG('motion_in', *ins), TG('motion_out', *outs))
DRIVE_OUT = ('same way', 'opposite ways', 'different speeds', 'pushes, pulls or flow shared out')   # R36
SHAFT = {'parallel': 'parallel', 'angle': 'at an angle', 'inline': 'in line', 'crossed': 'crossed', 'far': 'far apart'}
def SH(*t): return TG('shaft_layout', *[SHAFT[x] for x in t])

# Finder tags from research/finder-tags/tags.yaml (P3; the owner accepted them as working values, R25).
# TG(field, *values) matches an entry whose tag has one of the values. When the value it matched on still
# needs confirming, walk() remembers it, so the shortlist can mark that entry (⚑) on that path.
import yaml
_TAGS = {t['num']: t for t in yaml.safe_load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'finder-tags', 'tags.yaml')))}
for _e in E:
    _t = _TAGS[_e['num']]
    assert _t['name'] == _e['name'], (_e['num'], _t['name'], _e['name'])
    _e['tg'], _e['nc'] = _t['tags'], _t['needs_confirming']
USED = None
def TG(field, *values):
    def f(e):
        v = e['tg'].get(field); vals = v if isinstance(v, list) else [v]
        ok = bool(set(vals) & set(values))
        if ok and USED is not None and field in e['nc']: USED.add((e['num'], field))
        return ok
    f.field, f.values = field, values   # for tools that list which answer uses which tag value
    return f
OVERLOAD = ('slips and keeps going', 'clicks or pops out and resets', 'comes apart without damage, refit by hand', 'breaks or lets go once')
def OR(*ps): return lambda e: any(p(e) for p in ps)
def AND(*ps): return lambda e: all(p(e) for p in ps)
def NOT(p): return lambda e: not p(e)
ALL=lambda e: True

REMOVE=('Will you need to take it apart again?',[
  ('No, never (permanent)', R('never'), None),
  ('Now and then, with a tool', R('tools'), None),
  ('Often, by hand, without tools', R('hand'), None)])
def Q(question, *answers): return (question, list(answers))
def A(label, pred, child=None): return (label, pred, child)

class TICK:
    """A last step where people tick several values of one finder tag, e.g. every material they are
    gluing; the list keeps the entries whose tag has *all* the ticked values (R29). `anything` is a
    value that matches whatever is ticked (e.g. 'any solid parts'). A tick step may start with more
    than 10 entries, because ticking narrows it; tree.py checks every pair of ticks instead."""
    def __init__(self, field, prompt, anything=None, min_pair=0):
        self.field, self.prompt, self.anything = field, prompt, anything
def is_q(child): return isinstance(child, tuple)
def PIP(e): return e['pip'] in ('yes','partly')

GLUE_NEED=Q('What matters most?',
  A('Strongest bond', TG('glue_traits', 'strongest')),
  A('Stays flexible, or seals too', TG('glue_traits', 'stays flexible')),
  A('Fills gaps, or builds up a shape', TG('glue_traits', 'fills gaps')),
  A('Can be undone later', OR(R('tools','hand'), TG('glue_traits', 'can be undone'))))

TREE=Q('What do you need it to do?',
 A('Hold two things together (they stay still)', AND(OR(J('join and hold','glue or bond'), AND(M('none','flex'), F('adhesives & bonding','interlocking joints & joinery','snap & clip fits','clamping, magnetic & friction connections','print-in-place & 3D-printing joints','quick-release & tool-free')), F('locks, latches & catches'), TG('also_under', 'hold together')), NOT(F('electrical connections'))),
   Q('What are you joining?',
     A('3D-printed parts, or screws, nuts and magnets into a print', C('printed'), Q('Will you need to take it apart again?',
         A('No, never (permanent)', TG('printed_take_apart', 'no')),
         A('Yes', TG('printed_take_apart', 'yes'), Q('Is there a screw or bolt?',
             A('Yes', TG('threaded', 'yes')),
             A('No (clips, pins, rings, magnets)', TG('threaded', 'no')))),
         A('It is fabric, chain mail or a folding sheet made in the print', TG('printed_take_apart', 'made as fabric or a folding sheet')))),
     A('Boards, panels or sheet (wood, plywood, acrylic, sheet metal)', C('sheet'), Q('Will you need to take it apart again?',
         A('No, never (permanent)', R('never'), Q('What is the sheet made of?',
             A('Wood or plywood', TG('sheet_material', 'wood')),
             A('Sheet metal', TG('sheet_material', 'sheet metal')),
             A('Plastic sheet (acrylic, or laser-cut sheet)', TG('sheet_material', 'plastic sheet')))),
         A('Now and then, with a tool', R('tools'), Q('What is the sheet made of?',
             A('Wood or plywood', TG('sheet_material', 'wood')),
             A('Sheet metal, plastic or laser-cut sheet', TG('sheet_material', 'sheet metal', 'plastic sheet')))),
         A('Often, by hand, without tools', R('hand')))),
     A('Tube, rod, pole or aluminium extrusion', C('tube'), Q('Does it carry air or liquid?',
         A('Yes (hoses, pipes and tubing)', TG('carries_fluid', 'yes')),
         A('No (frames, poles and rails)', TG('carries_fluid', 'no')))),
     A('A wheel, gear or arm onto a shaft, or two shafts end to end', C('shaft'), Q('What are you connecting?',
         A('A wheel, gear, pulley or arm onto a shaft', TG('shaft_joint', 'part onto a shaft'), Q('Will you 3D print the part that goes on the shaft?',
             A('Yes', TG('printable', 'yes')),
             A('No, it is metal or bought', TG('printable', 'no')))),
         A('Two shafts end to end', TG('shaft_joint', 'shaft to shaft'), Q('How well do the shafts line up?',
             A('Exactly in line', TG('shaft_alignment', 'exactly in line')),
             A('A little out of line (needs some give)', TG('shaft_alignment', 'a little out of line')),
             A('At an angle, or along a bent path', TG('shaft_alignment', 'at an angle or a bent path')))))),
     A('Strap, cord, rope or fabric', C('cord'), Q('What do you need?',
         A('Close an opening, or attach fabric (zip, hook-and-loop, press stud, button)', TG('cord_use', 'close or attach fabric')),
         A('Tie, splice or lash it (knots, no hardware)', TG('cord_use', 'knots'), Q('What should the knot do?',
             A('Stop a cord pulling through, or finish its end', TG('knot_use', 'stop or finish an end')),
             A('Tie it to a post or ring, or join two cords', TG('knot_use', 'tie on or join')),
             A('Make a loop, or pull it tight and hold it', TG('knot_use', 'loop or tension')),
             A('Bind or lash things together', TG('knot_use', 'bind or lash')))),
         A('Sew or lace it', TG('cord_use', 'sew or lace')),
         A('Fit a part (buckle, hook, shackle, grommet, rivet)', TG('cord_use', 'a fitted part'), Q('What should the part do?',
             A('Hook, link or swivel onto something', TG('cord_part', 'hook, link or swivel')),
             A('Join or grip strap and cord ends, or hold struts with cord', TG('cord_part', 'join or grip ends')),
             A('Fix it to fabric or leather, or hold a fabric edge', TG('cord_part', 'fix to fabric or an edge')))))),
     A('A lid, door or cover that opens and closes', C('lid'), Q('How should it open?',
         A('It swings open on a hinge, or stays open at an angle', TG('opens_by', 'swings on a hinge')),
         A('Twist a lid, knob or fastener', TG('opens_by', 'twist')),
         A('Press, pull or flip a catch or lever', TG('opens_by', 'catch or lever'), Q('Should it lock, so only the right person can open it?',
             A('Yes (key, code, hidden catch or safety lock)', TG('locks_out', 'yes')),
             A('No, it just has to stay shut', TG('locks_out', 'no')))),
         A('By power (button, remote, timer)', P('electric')))),
     A('Something onto a wall, desk, bar, tripod, rail or grid', OR(C('mount'), TG('also_under', 'mount')), Q('What is it going onto?',
         A('A wall or ceiling', TG('mounts_on', 'wall or ceiling'), Q('How should it hold?',
             A('Screws, anchors, hooks or slots', TG('wall_hold', 'screws, anchors or hooks')),
             A('Magnet, suction cup or sticky tape (no holes)', TG('wall_hold', 'magnet or suction', 'tape or pads')))),
         A('A bar, pole, tube or the edge of a desk', TG('mounts_on', 'bar, pole or desk edge')),
         A('A tripod, camera or light stand', TG('mounts_on', 'tripod or stand')),
         A('A rail, extrusion or grid', TG('mounts_on', 'rail, extrusion or grid')))),
     A('Something that has to be gripped or clamped', C('grip'), Q('Who does the gripping?',
         A('I tighten it by hand (clamp, chuck, wedge)', TG('gripped_by', 'by hand')),
         A('A robot or machine (gripper)', TG('gripped_by', 'machine')))),
     A('Melt them together (weld, braze or solder)', OR(F('welding, brazing & soldering'), TG('also_under', 'melt')), Q('What are the parts made of?',
         A('Metal', TG('weld_material', 'metal')),
         A('Plastic, or plastic film and coated fabric', TG('weld_material', 'plastic or film')))),
     A('Two different kinds of part (e.g. a print onto wood, or a strap onto a tube)', ALL,
       TICK('connects', 'Tick each kind of part you are joining', anything='any solid parts')),
     A('I just want to glue it', TG('glue_traits', *GLUE_TRAITS), Q('What are you gluing?',
         A('3D-printed plastic (PLA, PETG, ABS) or resin prints', TG('bonds_well', 'PLA', 'PETG', 'ABS or ASA', 'resin prints'), GLUE_NEED),
         A('Slippery plastics (polyethylene, polypropylene, silicone)', TG('bonds_well', 'slippery plastics (PE or PP)', 'silicone')),
         A('Wood, paper or card', TG('bonds_well', 'wood', 'paper or card'), GLUE_NEED),
         A('Metal or glass', TG('bonds_well', 'metal', 'glass or ceramic'), GLUE_NEED),
         A('Rubber, fabric, leather or foam', TG('bonds_well', 'rubber', 'fabric or leather', 'foam'), GLUE_NEED),
         A('Two different materials (e.g. a print onto wood)', ALL, TICK('bonds_well', 'Tick every material you are gluing')))),
     A('Any solid parts / something else', AND(TG('connects', 'any solid parts', 'not applicable'), TG('power_source', 'none'), NOT(TG('glue_traits', *GLUE_TRAITS)), NOT(F('welding, brazing & soldering','seals & pass-throughs','hydraulics, pneumatics & vacuum'))), Q('Where can you reach?',
         A('Only one side, or only the end of a tube or shaft', lambda e: e['access'] in ('one side only','end of a tube or shaft')),
         A('Both sides', lambda e: e['access']=='both sides'),
         A('It does not matter', lambda e: e['access']=='not applicable'))))),
 A('Connect wires or power (electrical connections)', OR(OF('electrical connections'), TG('also_under', 'wires')),
   Q('What are you connecting?',
     A('Wires to each other (a splice)', TG('wire_use', 'splice')),
     A('A wire to a board, terminal or device', TG('wire_use', 'to a board or terminal'), Q('Will you unplug it often?',
         A('Yes, it plugs in and out', TG('plugs_in', 'yes')),
         A('No, it stays connected (screwed, crimped or wrapped)', TG('plugs_in', 'no')))),
     A('Batteries, docks, and parts that touch or turn (no plug)', TG('wire_use', 'touching or turning contacts')),
     A('Wires on fabric, paper or a print (sewn, taped or painted on)', TG('wire_use', 'on fabric, paper or a print')),
     A('Insulate, protect or route wires (sleeves, strain relief, lacing, hinges)', TG('wire_use', 'insulate, protect or route')))),
 A('Let something move (turn, slide, swing or bend)', OR(J('let it move'), F('hinges & pivots','sliding, telescoping & linear motion','compliant mechanisms & flexures')),
   Q('How should it move?',
     A('Swing or rock, less than a full turn (like a lid or arm)', AND(M('rotate'), TG('turns', 'part of a turn')), Q('Should it print in one piece?',
         A('Yes, print it assembled', PIP, Q('Should it stay where you put it?',
             A('No, swing freely', TG('holds_position', 'no')),
             A('Yes: hold, click or spring shut', TG('holds_position', 'yes')))),
         A('No, I will assemble or buy it', lambda e: e['pip']=='no'))),
     A('Spin round and round (a wheel, roller or shaft)', OR(AND(M('rotate'), TG('turns', 'full turns')), TG('also_under', 'spin')), Q('What should spin?',
         A('A wheel or part on a fixed axle or table', NOT(OF('clutches & couplings','gear trains, gearboxes & transmissions'))),
         A('A shaft driving another shaft', OF('clutches & couplings','gear trains, gearboxes & transmissions'), Q('What else should it do?',
             A('Just pass the turning on', TG('drive_does', 'passes the turning on')),
             A('Turn one way only', TG('drive_does', 'one way only')),
             A('Change speed or split the drive (gears)', TG('drive_does', 'changes speed or splits')))))),
     A('Slide in a straight line, or telescope', M('slide','rotate+slide'), Q('What kind of slide?',
         A('A tube or pole that telescopes and locks', TG('slide_kind', 'telescoping tube')),
         A('A carriage, drawer or table on a rail', TG('slide_kind', 'carriage on a rail')),
         A('Pushed along by a screw, chain or crank', TG('slide_kind', 'pushed by a screw, chain or crank')))),
     A('Bend or flex (no hinge pin)', M('flex'), Q('What should the bendy part do?',
         A('Fold or swing like a hinge', TG('flex_does', 'folds like a hinge')),
         A('Move in a straight line, or act as a spring', TG('flex_does', 'straight line or spring')),
         A('Grip, or snap between two positions', TG('flex_does', 'grips or snaps')))),
     A('Swivel or tilt in several directions (ball or universal joint)', TG('move_kind', 'swivel or tilt')),
     A('Follow a set path (e.g. swing out and stay level)', TG('move_kind', 'follows a set path')))),
 A('Control a movement (one way only, clicks, slips, locks, slows)', OR(J('stop it moving back','click into set positions','slip or let go when overloaded','slow it, stop it or keep its speed steady'), SB('one-way','indexing','torque-limiting','self-locking','hand-release only','over-centre',k=1), TG('also_under', 'control'), TG('overload_response', *OVERLOAD)),
   Q('What should it do?',
     A('Move one way only (stop it going back)', OR(J('stop it moving back'), SB('one-way',k=1)), Q('Does it turn or slide?',
         A('Turns', M('rotate','rotate+slide','multiple'), Q('Is clicking OK?',
             A('Yes, clicks are fine (ratchets)', TG('one_way_kind', 'clicks')),
             A('No, it must be smooth and silent', TG('one_way_kind', 'silent')))),
         A('Slides', M('slide','rotate+slide')),
         A('Bends, or something else', M('flex','none')),
         A('It is air or liquid flowing (one-way valves)', TG('one_way_kind', 'for air or liquid')))),
     A('Click into set positions', OR(J('click into set positions'), SB('indexing',k=1)), Q('Does it turn or slide?',
         A('Turns', M('rotate','rotate+slide','multiple'), Q('What should the clicks do?',
             A('Hold a position I set by hand', TG('clicks_do', 'hold a set position')),
             A('Step forward one position at a time', TG('clicks_do', 'step forward')))),
         A('Slides, bends or something else', M('slide','rotate+slide','flex','none')))),
     A('Slip, click or let go if overloaded', OR(J('slip or let go when overloaded'), SB('torque-limiting',k=1), F('torque limiting & slip'), TG('also_under', 'overload'), TG('overload_response', *OVERLOAD)), Q('What should happen when it is overloaded?',
         A('Slip, and keep going', TG('overload_response', 'slips and keeps going'), Q('Will you 3D print it?',
             A('Yes, or partly', lambda e: e['pip'] in ('yes','partly') or 'fdm' in e['processes'] and e['difficulty']=='easy'),
             A('No, I will buy or machine it', lambda e: not (e['pip'] in ('yes','partly') or 'fdm' in e['processes'] and e['difficulty']=='easy')))),
         A('Click or pop out, then reset by itself', TG('overload_response', 'clicks or pops out and resets')),
         A('Pull apart without damage, then refit it by hand', TG('overload_response', 'comes apart without damage, refit by hand')),
         A('Break or let go once, on purpose (replace it after)', TG('overload_response', 'breaks or lets go once')))),
     A('Stay where I leave it, and let go when I release it', AND(OR(SB('self-locking','hand-release only',k=1), F('self-locking & anti-back-drive')), NOT(F('knots, lashings & sewn joints','adjusters, levellers & spacers','everyday fasteners & fixings'))), Q('Does it turn or slide?',
         A('Turns', M('rotate','rotate+slide','multiple'), Q('What should it do?',
             A('Lock so only a person can open it (key, code, trigger)', TG('holds_for', 'a person to open')),
             A('Hold a load where it stops (brake or self-locking drive)', TG('holds_for', 'a load')))),
         A('Slides', M('slide','rotate+slide')),
         A('Bends, or something else', M('flex','none')))),
     A('Snap past a point and stay there (over-centre)', OR(SB('over-centre',k=2), F('over-centre, toggle & cam clamps')), Q('What is it for?',
         A('Clamp or latch something shut', TG('over_centre_use', 'clamp or latch')),
         A('Flip between two positions (switch, fold or stay)', TG('over_centre_use', 'flip between positions')))),
     A('Slow it down, stop it, or keep its speed steady', OR(J('slow it, stop it or keep its speed steady'), F('brakes, dampers & speed control')), Q('What do you need?',
         A('Stop it or hold it still (brakes)', TG('slows_by', 'brake')),
         A('Cushion or smooth it (dampers)', TG('slows_by', 'damper')),
         A('Keep a steady speed or level', TG('slows_by', 'steady speed or level')))))),
 A('Change a movement (speed, force or kind of motion)', OR(J('change speed or turning force','change the kind of motion'), F('motion conversion','gear trains, gearboxes & transmissions'), TG('drive_split', *DRIVE_OUT, 'combines inputs')),
   Q('What change do you need?',
     A('Faster, slower or stronger turning', OR(J('change speed or turning force',k=1), F('gear trains, gearboxes & transmissions')), Q('How are the input and output shafts arranged?',
         A('Side by side (parallel)', SH('parallel')),
         A('At an angle (e.g. 90 degrees)', SH('angle','crossed')),
         A('In line (one straight through the other)', SH('inline')),
         A('Far apart, or the path bends (belts, cables, chains)', SH('far')))),
     A('Turning into straight-line motion, or back', OR(MV(TURNING, STRAIGHT), MV(STRAIGHT, TURNING + ('bending',))), Q('What kind of straight-line motion?',
         A('A slow, precise push (screws)', TG('straight_drive', 'screw')),
         A('Back and forth, again and again (cranks, cams)', TG('straight_drive', 'crank or cam')),
         A('Long travel, or pulling (rack, belt, chain, cable, rope)', TG('straight_drive', 'long travel or pulling')))),
     A('Steady turning into steps, or into rocking', OR(MV(TURNING, ('steps',)), MV(('steady turning',), ('back-and-forth turning',)))),
     A('A push or pull moved, multiplied or redirected', OR(MV(STRAIGHT, STRAIGHT), MV(('back-and-forth turning',), STRAIGHT)), Q('How?',
         A('Levers and linkages', TG('push_by', 'levers and linkages')),
         A('Cables, ropes, pulleys or liquid in tubes', TG('push_by', 'cables, pulleys or liquid')))),
     A('Make movement from air, liquid, suction or heat', TG('motion_in', 'pressure', 'heat')),
     A('Drive several things from one, or combine several into one', TG('drive_split', *DRIVE_OUT, 'combines inputs'), Q('Which way does the power go?',
         A('One input drives several outputs', TG('drive_split', *DRIVE_OUT), Q('How should the outputs move?',
             A('All turn the same way, in step', TG('drive_split', 'same way')),
             A('Some turn the opposite way, or two turn opposite ways on one axis', TG('drive_split', 'opposite ways')),
             A('At different speeds, or free to turn at different speeds', TG('drive_split', 'different speeds')),
             A('Pushes, pulls or flow shared out (cams, cables, levers, air or liquid)', TG('drive_split', 'pushes, pulls or flow shared out')))),
         A('Several inputs combine into one (add movements, or share a load)', TG('drive_split', 'combines inputs')))))),
 A('Tighten something, or take up slack', OR(J('tighten and hold tension'), F('tensioning, reels & take-up')),
   Q('What are you tightening?',
     A('A strap, lace, cord or rope', TG('tightens', 'strap, cord or rope'), Q('How should it hold?',
         A('Click, wind or screw it tighter (ratchet, winch, turnbuckle)', TG('tension_hold', 'ratchet, winch or screw')),
         A('Grip by friction; release by hand (buckles, cord locks, hitches)', TG('tension_hold', 'friction grip')),
         A('Pull back by itself (spring or elastic)', TG('tension_hold', 'spring or elastic')))),
     A('A belt, chain or cable in a machine', TG('tightens', 'belt, chain or cable'), None),
     A('Parts clamped or pulled together', TG('tightens', 'parts clamped together'), None))),
 A('Line parts up exactly, or adjust and level them', OR(J('line parts up exactly',k=1), F('locating & alignment','adjusters, levellers & spacers')),
   Q('What do you need?',
     A('Put it back in exactly the same place every time', NOT(F('adjusters, levellers & spacers'))),
     A('Set a height, gap or position, then hold it', TG('adjusts', 'set and hold')),
     A('Fine-tune a tilt or angle with screws', TG('adjusts', 'fine-tune a tilt')))),
 A('Spring back, or store energy', OR(J('store energy'), F('springs & energy storage')), Q('How should it push back?',
     A('Push or pull in a straight line', TG('spring_kind', 'straight push or pull')),
     A('A printed or bent springy part (flexure)', M('flex')),
     A('Twist back (torsion)', TG('spring_kind', 'twist back')),
     A('Wind up or store energy, then let it go (clock spring, flywheel, trigger)', TG('spring_kind', 'wind up and let go')))),
 A('Seal it, or pass cables, air or liquid through', OR(J('seal it, or pass cables or fluid through'), F('seals & pass-throughs','hydraulics, pneumatics & vacuum')),
   Q('What do you need?',
     A('Keep water, dust or air out of a joint that does not move', TG('seal_use', 'seal a still joint'), Q('Will you need to take it apart again?',
         A('No, never', R('never'), Q('What are the parts?',
             A('Metal sheet, tube or pipe', TG('seal_material', 'metal')),
             A('Plastic, fabric or film, or a gap to fill', TG('seal_material', 'plastic, fabric or a gap')))),
         A('Yes', R('tools','hand')))),
     A('Seal round a moving shaft or rod', TG('seal_use', 'seal a moving shaft')),
     A('Get cables through a wall or past a moving joint', TG('seal_use', 'pass cables through')),
     A('Join hoses, pipes or tubes', TG('seal_use', 'join hoses or pipes'), Q('How is it joined?',
         A('Screwed together (threads or a nut)', TG('hose_join', 'screwed')),
         A('Pushed on, clamped or clicked together', TG('hose_join', 'pushed, clamped or clicked')),
         A('Fused, soldered or brazed for good', TG('hose_join', 'fused or brazed')))),
     A('Pump, store or control air or liquid (valves, pumps)', TG('seal_use', 'pump or control a flow'), Q('What should it do?',
         A('Push air or liquid along (pumps)', TG('fluid_does', 'pump')),
         A('Let flow one way only, or let off pressure (safety)', TG('fluid_does', 'one way or let off pressure')),
         A('Switch, set or store the flow (valves, regulators, tanks)', TG('fluid_does', 'switch, set or store')))))),
 A('Hold or let go using power (electric, air or suction)', OR(J('hold or release using power'), lambda e: e['power']=='powered', F('powered & active connectors')),
   Q('What will power it?',
     A('Electricity', P('electric'), Q('What should it do?',
         A('Lock, latch or hold by magnet, and let go on command', TG('powered_does', 'lock or hold')),
         A('Move or push something (motors, actuators, artificial muscles)', TG('powered_does', 'move or push something')),
         A('Pump, switch or control air or liquid', TG('powered_does', 'pump or control a flow')),
         A('Brake, clutch or grip', TG('powered_does', 'brake or engage', 'grip or lift')))),
     A('Compressed air', P('air'), Q('What should it do?',
         A('Push, pull, bend or turn something (cylinders, air muscles)', TG('powered_does', 'move or push something')),
         A('Grip or lift something (grippers, air bearings)', TG('powered_does', 'grip or lift')),
         A('Switch, pump or control the air (valves, pumps)', TG('powered_does', 'pump or control a flow', 'lock or hold')))),
     A('Liquid (hydraulics, water)', P('liquid'), Q('What should it do?',
         A('Push, lift, bend or fold something', TG('powered_does', 'move or push something')),
         A('Pump, switch or control the liquid', TG('powered_does', 'pump or control a flow', 'grip or lift', 'brake or engage', 'lock or hold')))),
     A('Suction (vacuum)', P('suction')))),
)

def answer_paths(node=None, path=()):
    """Every answer (not only the last ones), as a tuple of answer labels from the first question."""
    q, answers = node or TREE
    for label, pred, child in answers:
        p = path + (label,)
        yield q, p
        if is_q(child): yield from answer_paths(child, p)

def load_examples():
    import yaml
    f = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'examples.yaml')
    if not os.path.exists(f): return {}
    return {tuple(x['path']): x for x in yaml.safe_load(open(f))}

def check_examples():
    ex = load_examples(); paths = [p for _, p in answer_paths()]
    missing = [p for p in paths if not ex.get(p, {}).get('example')]
    extra = [p for p in ex if p not in set(paths)]
    return missing, extra

def walk(node, S, path, out, flags=None):
    """Every leaf as (path, entries, flags, tick). tick is the TICK step, or None. flags maps an entry number to the tag fields whose
    needs-confirming values put it on this path."""
    global USED
    q, answers = node
    for label, pred, child in answers:
        USED = set()
        T = [e for e in S if pred(e)]
        used, USED = USED, None
        keep = {e['num'] for e in T}
        fl = {k: set(v) for k, v in (flags or {}).items() if k in keep}
        for num, field in used:
            if num in keep: fl.setdefault(num, set()).add(field)
        p = path + [label]
        if not is_q(child): out.append((p, T, fl, child))
        else: walk(child, T, p, out, fl)

if __name__=='__main__':
    HERE=os.path.dirname(os.path.abspath(__file__))
    for e in E:
        d=json.load(open(RESULTS+e['file']))
        e['materials_raw']=d['finder_attributes']['materials']
    out=[]; walk(TREE,E,[],out)
    reached=set()
    verbose='-v' in sys.argv
    def tvals(e, f):
        v = e['tg'].get(f); return set(v if isinstance(v, list) else [v]) - {'not applicable', None}
    plain = [(p,T) for p,T,fl,t in out if t is None]
    for p,T,fl,t in out:
        reached|={e['num'] for e in T}
        if t is None:
            flag='OK ' if 3<=len(T)<=10 else ('BIG' if len(T)>10 else 'SML')
            print(f"{flag} {len(T):3}  {' > '.join(x[:38] for x in p)}")
        else:
            opts = sorted(set().union(*(tvals(e, t.field) for e in T)) - {t.anything})
            has = lambda e, vs: t.anything in tvals(e, t.field) or vs <= tvals(e, t.field)
            pairs = [(a, b, sum(has(e, {a, b}) for e in T)) for i, a in enumerate(opts) for b in opts[i+1:]]
            print(f"TICK{len(T):3}  {' > '.join(x[:38] for x in p)}: {len(opts)} options; pairs with no entry "
                  f"{sum(1 for *_, n in pairs if n == 0)} of {len(pairs)}; median per pair {sorted(n for *_, n in pairs)[len(pairs)//2] if pairs else 0}")
        if verbose: print('        ', '; '.join(f"{e['num']} {e['name'][:28]}" + (' ⚑' if e['num'] in fl else '') for e in T))
    un=[e for e in E if e['num'] not in reached]
    print('\nleaves',len(plain),'OK',sum(3<=len(T)<=10 for _,T in plain),'BIG',sum(len(T)>10 for _,T in plain),'SMALL',sum(len(T)<3 for _,T in plain),'tick steps',len(out)-len(plain))
    print('entries on a path because of a value that needs confirming',sum(len(fl) for _,_,fl,_ in out))
    print('unreached',len(un)); [print('  ',e['num'],e['name'][:60],'|',e['family'],e['job'][:2],e['motion']) for e in un]
    # every answer needs a real-world example (examples.yaml; owner's request 2026-10-06)
    missing, extra = check_examples()
    print('answers without an example',len(missing)); [print('   ',' > '.join(p)) for p in missing]
    if extra: print('examples for answers that no longer exist',len(extra)); [print('   ',' > '.join(p)) for p in extra]
