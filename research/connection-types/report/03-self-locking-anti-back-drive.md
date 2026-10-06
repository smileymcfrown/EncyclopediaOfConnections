# self-locking & anti-back-drive: Holds against a load until you release it

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 15 Bidirectional anti-back-drive clutch (reverse-input blocking clutch)

*self-locking & anti-back-drive.* A clutch that lets the input shaft turn the output either way, but locks if the output tries to turn the input, so a load can't drive the motor backwards

### What it is

- **plain_name**: A coupling that lets a motor or handle turn the output either way, but locks solid if the load tries to turn it back, so a raised arm, seat or blind stays put when you let go
- **term**: Bidirectional anti-back-drive clutch (reverse-input blocking clutch; non-back-drivable clutch)
- **aliases**: 
  - reverse-input blocking clutch
  - reverse input lock clutch / reverse input prevention clutch
  - anti-reverse input clutch
  - non-back-drivable clutch (NBDC) / non-back-drivable mechanism
  - irreversible roller clutch
  - back-drive prevention clutch
  - two-way anti-reverse transmission (Nguyen Duc Thang's animation title)
  - lock-type torque diode (NTN's product term)
  - seat lifter clutch
  - wrap clutch for anti-reverse transmission (window-blind version with a coil spring)
- **family**: self-locking & anti-back-drive
- **other_families**: clutches & couplings, one-way & ratchet, brakes, dampers & speed control
- **one_liner**: A 1:1 shaft coupling with wedging rollers (or a coil spring) that passes turning from the input to the output in both directions, but jams the output against a fixed housing whenever the output itself tries to turn, so a load cannot drive the motor or handle backwards.
- **complexity**: A small assembly that acts as one unit: a fixed outer ring or housing; an output hub with flat or ramped faces (a cam); rollers, balls or wedges sitting in wedge-shaped gaps between hub and ring; small springs pushing them into the gaps; an input cage or fork whose fingers sit between the rollers; and bearings (NTN catalogue; Thang's animations). The window-blind version uses a coil spring inside a fixed drum instead of rollers (EP 1 498 570).
- **how_it_works**: With nothing turning the input, springs hold the rollers lightly in wedge-shaped gaps between the output hub and the fixed housing, with gaps facing both ways, so if the load twists the output in either direction a roller jams and locks the output to the housing. When the input turns, fingers on its cage first push the rollers out of their wedges (unlocking), and after a small free angle the cage catches the output and drives it (NTN lock-type torque diode, Figs. 1-3). Thang describes it as having the self-locking of a worm drive but at a 1:1 ratio. In the coil-spring version, the load's twist expands the spring against a fixed drum so it grips, while turning the input releases the spring and drives through it (Nien Made, EP 1 498 570).

### Finder attributes

- **job**: 
  - stop it moving back (one-way): the load can never turn the input, whichever way it pushes
  - let it move (turn, slide or bend): the input still drives the output both ways
  - lock, and release by hand: with a hand crank or lever, working the input is what unlocks it
- **motion**: rotate: unlimited turning in both directions when driven from the input; locked when the output tries to drive
- **degrees_of_freedom**: 1: the output turns about the shaft axis, but only when the input drives it; seen from the load side it has 0, because it is locked to the housing
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): the output jams against the fixed housing whichever way the load pushes
  - hand-release only (locks under load, releases when a person operates it): turning the input (crank, lever or motor) is the only way to release it
  - fail-safe or breakaway: it is passive, so a motor-driven load stays held when power is cut; Thang notes it lets a servo motor rest with its supply switched off
- **holding_principle**: 
  - friction or clamping (force-fit): rollers or wedges jam by friction between the output hub and the fixed ring
  - spring force (a springy part presses it in place): small springs keep the rollers ready in their wedges
- **input_output**: Input rotation in either direction -> output rotation in the same direction at the same speed (1:1); shafts in line. Efficient, because nothing slides while it drives: about 0.95 for Controzzi's roller design, as cited by Liu et al. (2024), whereas Liu et al. list worm gears and high-ratio reducers as the usual, less attractive alternatives. Back-drivable: no, the output locks in both directions. A small free angle (lost motion) occurs each time the input changes direction, e.g. a 7° idle angle and 14° at the input in the Liu et al. prosthetic-wrist clutch. Variant: a 'free-type' unit lets the output spin freely instead of locking, but still never drives the input (NTN free-type torque diode).
- **power**: passive (no power needed); it holds the load whether or not the motor is powered, so if power is lost it stays locked
- **removability**: removable: it is a self-contained unit fitted between shaft ends and fixed to a frame
- **reuse_cycles**: many times: the unit can be unbolted and refitted; its life limit is wear of the rollers, ramps and springs
- **load**: Light to medium. Catalogue examples: 4.9 N·m allowed load torque (NTN lock-type torque diode TDL28), 29.4 N·m (swing-type TDS26), and 80 N·m braking force for a car seat-lifter clutch about 50 mm across (NTN TDLU); a prosthetic-wrist design locked about 0.6 N·m (Liu et al. 2024). It holds twist in both directions; bending and end loads must be carried by separate bearings.
- **adjustable**: no: how firmly it locks and how easily it unlocks are set by the design (roller size, ramp angle and springs)
- **play_and_precision**: Noticeable: there is a free angle every time the input changes direction, because the cage must push the rollers out before it catches the output (NTN; 7° idle and 14° input backlash in Liu et al.). Once locked it holds firmly, although the rollers wedge in a little further as load builds. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: the unit fits between the ends of the input and output shafts
- **materials**: Hardened bearing-steel rollers and rings with spring-steel springs; a lightweight prosthetic version used 7075 aluminium for the main parts, stainless steel pins and wavy springs of 301 stainless steel (Liu et al. 2024). *(unverified parts omitted)*

### Making it

- **processes**: 
  - off-the-shelf part: the usual choice (catalogue reverse-input blocking clutches, seat-lifter clutches, blind clutches)
  - CNC: hardened steel or aluminium rings, cam and cage for custom units, as in the Liu et al. prototype *(unverified parts omitted)*
- **print_in_place**: no: the rollers should be steel pins and springs must be added, so the housing, cam and cage are printed as separate parts and assembled
- **making_tips_3d_printing**: Treat a printed version as a light-duty demonstrator. Print the fixed ring, the output cam and the input cage lying flat, so the round and ramped faces are smooth vertical walls made of continuous perimeters. Leave at least 0.3 mm clearance between the cage and the parts it moves past (Prusa's starting value for moving parts). Keep each wedge gap shallow enough that friction locks it: the Liu et al. design needed a friction coefficient of about 0.25 between wedge and ring and suggests roughening the contact faces (for example by sandblasting) to raise friction. Give the cage a deliberate free angle so it pushes the rollers out of their wedges before it catches the output (NTN; Liu et al.). Push each roller into its wedge with a light spring; stronger springs raise the torque needed to unlock (Liu et al.). Expect printed plastic ramps to creep if a load hangs on them for hours (DuPont), so test with the real load overnight. Keep grease off the locking faces. For anything heavier than a demonstration, buy a unit or use a worm drive. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'reverse input blocking clutch', 'reverse input lock clutch', 'anti-reverse input clutch', 'non-back-drivable clutch', 'lock-type torque diode' (NTN product name) and 'free-type torque diode' (output freewheels instead of locking), 'seat lifter clutch', 'bi-directional clutch', 'wrap spring clutch' (roller-blind and window-blind clutches). Alternatives: self-locking worm gearmotor, spring-applied (power-off) electromagnetic brake, one-way needle roller clutch (holds one direction only).
- **rules_of_thumb**: 
  - Catalogue ratings to compare against: NTN lock-type torque diode TDL28, 4.9 N·m allowed load torque; swing-type TDS26, 29.4 N·m; seat lifter clutch TDLU, 80 N·m braking force in a 50 mm diameter by 51 mm unit (NTN Clutches catalogue CAT. No. 2900, pp. 24-27).
  - Self-locking like a worm drive but at a 1:1 ratio; suited to motion systems where a servo motor should rest with its power switched off (Nguyen Duc Thang, 2700 Animated Mechanical Mechanisms, Part 1, p. 32).
  - Friction coefficient between wedge and fixed ring of about 0.25 preferred; unlocking torque about 65-85 N·mm and locking about 600 N·mm for a 33 mm diameter, 15 mm thick, 25.5 g clutch; 7° idle angle (Liu et al., Frontiers in Bioengineering and Biotechnology, 2024).
  - Roller-type non-back-drivable mechanisms can reach an efficiency of around 0.95 (Controzzi et al., as cited by Liu et al., 2024).
  - Self-locking (irreversibility) comes from friction combined with unfavourable transmission angles in the reverse direction; worm drives and power screws are the classic examples (Mecapedia, Irreversibilidad).
  - Expect a little backlash whenever the direction of rotation reverses (NTN, two-way clutch note, p. 23).

### When to use it

- **everyday_examples**: 
  - Car seat height lever: pump it up or down and the seat stays exactly where it is (NTN seat lifter clutch)
  - Window blinds worked by a crank or rod that stay where you leave them, because a wrap-spring anti-reverse clutch stops the blind's weight turning the mechanism (EP 1 498 570)
  - Hospital beds, car window regulators and powered shutters (applications listed in US 7,832,542)
  - Powered prosthetic hands and wrists that keep their grip with the motor off (Liu et al. 2024)
- **when_to_use**: When a motor or hand crank must move something both ways but the load must never drive it back: robot arm joints that should hold with power off, lifts and tilting tables, blinds and shutters, seat and bed adjusters, camera or antenna positioners. Choose it over a worm drive when you want a 1:1 drive with good efficiency (no big speed reduction); choose it over a power-off brake when you want holding without electronics or wiring.
- **when_not_to_use**: Not when the joint should give way when bumped, for safety or compliance: use a torque limiter or a back-drivable drive. Not for high torque or shock loads in a home-made printed version: buy a unit, or use a worm drive or power-off brake. Not where lost motion at each reversal matters for precise positioning: use a servo with a holding brake. *(unverified parts omitted)*
- **environment_limits**: It holds by friction, so oil on the locking faces, wear or polished surfaces can let it slip (Liu et al. stress that the friction coefficient must meet a minimum); grease belongs only where the design intends it (Liu et al. grease the spring groove). *(unverified parts omitted)*
- **safety_notes**: If it slips from wear or oil, the load can drop, so never rely on a home-made one to hold anything above people. *(unverified parts omitted)*
- **common_failures**: Slipping back under load: worn or polished rollers and ramps, oil on the faces, weak springs, or printed parts creeping; replace, clean, or roughen the surfaces (Liu et al. suggest sandblasting to raise friction). Hard to unlock, or the motor stalls when starting: springs too strong or wedges too steep; Liu et al. note the springs should be optimised to lower the unlocking torque. Wear of springs and cams in earlier designs (Liu et al., reviewing prior work). Contact faces deforming under overload (Liu et al. found failure when contact strain exceeded 0.2% in their aluminium wedges). *(unverified parts omitted)*
- **related**: 
  - Worm drive (worm and worm wheel): also can't be back-driven, but reduces speed a lot and is less efficient
  - Lead screw and nut: self-locking straight-line version of the same idea
  - Roller clutch (one-way bearing) and sprag clutch: lock in one direction only and let the other freewheel
  - Free-type torque diode: the output can spin freely but still can't drive the input (NTN)
  - Wrap-spring clutch: the coil-spring version of the same wedging idea
  - Electromagnetic brake (power-off, spring-applied): holds with power off using springs and needs power to release
  - Ratchet and pawl: holds one way only, in tooth steps, with clicks
  - Binding-plate lock (tilting friction plate): a straight-line, one-direction friction lock
  - Torque limiter: the opposite goal; it lets go when overloaded

### Pictures, videos and models

- **links**: 
  - [Two-way anti-reverse transmission 1a (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=wZjoNIkYQqM): CAD animation: the input shaft drives the output both ways, while rollers wedge against a fixed rim if the output tries to drive (description from Thang's catalogue, Part 1, p. 32) *(licence: link only)*
  - [Two-way anti-reverse transmission 1b (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=5DBfEdX5Ow8): A second embodiment of the same roller anti-reverse transmission (Part 1, p. 32) *(licence: link only)*
  - [Two way overrunning clutch 1 (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=-Y_SQGMRx8k): Roller clutch with a fork and springs in which rotation passes from the outer disk to the fork in both directions but not back the other way (Part 1, p. 30) *(licence: link only)*
  - [NTN Clutches catalogue CAT. No. 2900, Section 3 Torque Diode (pp. 24-27)](https://www.ntnglobal.com/en/products/catalog/pdf/2900E.pdf): Cross-section drawings and three-step operating-principle figures of lock-type, free-type and swing-type torque diodes and the seat lifter clutch *(licence: © NTN; link only)* *(unverified parts omitted)*
- **diagram_idea**: Cross-section with a fixed outer ring, a square output hub and four rollers in wedge gaps: panel A shows the load twisting the hub and one roller jamming (red); panel B shows the input fork's fingers first pushing the rollers out of their wedges and then turning the hub (green arrows).
- **sources**: 
  - https://www.ntnglobal.com/en/products/catalog/pdf/2900E.pdf
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://www.youtube.com/watch?v=wZjoNIkYQqM
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=wZjoNIkYQqM&format=json
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=5DBfEdX5Ow8&format=json
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=-Y_SQGMRx8k&format=json
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VgciAZMn7Zc&format=json
  - https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1385076/full
  - https://patents.google.com/patent/US7832542B2/en
  - https://patents.google.com/patent/EP1498570A1/en
  - https://www.mecapedia.uji.es/pages/irreversibilidad.html
  - https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, links, make_it_yourself, maker_difficulty, making_tips_3d_printing, materials, play_and_precision, processes, safety_notes, seal, tools_needed, when_not_to_use

## 146 Self-locking wedge (wedge clamp, taper key)

*self-locking & anti-back-drive.* A shallow wedge driven into a gap that stays put by friction, holding parts tightly until tapped back out

### What it is

- **plain_name**: A thin, gently sloping block (wedge) pushed or tapped into a gap so it jams tight and stays there by friction, squeezing the parts together until you knock it back out from the thin end
- **term**: Self-locking wedge (friction wedge; as a machine part: taper key or cotter)
- **aliases**: 
  - door wedge / doorstop wedge (Wikipedia 'Doorstop')
  - shim / tapered shim (Wikipedia 'Shim (spacer)'; flat shims and spacers have their own entry, 'Shims, spacers and standoffs')
  - folding wedges (a pair of wedges driven towards each other; 'cramping' with folding wedges in old joinery books) (Wikimedia Commons, Cassell's Carpentry; Engineering Statics)
  - wedge clamp / wedge clamping (Fine Woodworking; Printables 'CNC Wedge Clamp')
  - taper key; gib-head key or 'gip head' key (DIN 6887) (Wikipedia 'Key (engineering)'; MBO Osswald)
  - tangential taper key (pairs of taper keys for heavy torque) (Wikipedia 'Key (engineering)'; Thang 'Wedge mechanism 23')
  - cotter / cotter pin (British usage; a tapered pin with a flat, e.g. bicycle crank cotter; in the US 'cotter pin' means a split pin instead) (Wikipedia 'Cotter (pin)')
  - Dutch pin (tapered pin driven into a hole drilled across shaft and hub) (Wikipedia 'Key (engineering)')
  - wedged tenon, tusk tenon wedge, loose wedge (woodworking) (Popular Woodworking; Woodsmith)
  - quoin (printing), wheel chock (listed under 'See also' on Wikipedia 'Wedge')
  - Keil (German)
- **family**: self-locking & anti-back-drive
- **other_families**: clamping, magnetic & friction connections, interlocking joints & joinery, adjusters, levellers & spacers
- **one_liner**: A shallow wedge driven into a gap multiplies a light tap into a strong squeeze, and because its slope is gentle, friction stops it sliding back out, so it holds parts tight until it is knocked out again.
- **complexity**: Single piece (the wedge) working against the two parts it jams between; folding wedges are a matched pair; a taper key is one tapered bar in a matching tapered keyway in the hub (Wikipedia 'Key (engineering)'); a bicycle cotter is a tapered pin with a flat face, a threaded end, a washer and a nut (Wikipedia 'Cotter (pin)').
- **how_it_works**: Pushing a wedge along its length moves its sloping face sideways only a little, so a light push or tap becomes a much larger sideways squeeze; the mechanical advantage is roughly its length divided by its thickness (Wikipedia 'Wedge'). The squeeze presses the wedge's faces hard against the parts, and friction on those faces resists it sliding back. If the slope is shallow enough (the wedge angle is smaller than the 'friction angle', arctan of the friction coefficient) friction wins and the wedge stays put after you stop pushing: it is self-locking (Wikipedia 'Wedge'; IIT Guwahati ME101 notes). To release it you drive it back from the thin end, pull it by a head, or push it out with another wedge (a drift) (Wikipedia 'Machine taper'; MBO Osswald).

### Finder attributes

- **job**: 
  - join and hold: jams parts together, e.g. a hub on a shaft with a taper key, a crank on its axle with a cotter, a tenon in a mortise with wedges
  - lock, and release by hand: a door wedge or a tusk-tenon wedge is kicked or tapped in to hold and tapped out to release
  - tighten and hold tension: driving a wedge (or a pair of folding wedges) in further squeezes parts together like a clamp and keeps the pressure on (Fine Woodworking; Engineering Statics)
  - line parts up exactly: shims and adjusting wedges set a gap or level a part, e.g. a wedge that adjusts the gap between a slide and its runway (Thang 'Wedge mechanism 17') and shims under machine feet (Wikipedia 'Shim (spacer)')
- **motion**: slide: the wedge slides a short way into the gap while it is driven, then nothing moves (none once seated)
- **degrees_of_freedom**: 0 once driven home: the wedge and the parts it jams are locked by friction. While fitting, the wedge has 1 (sliding along its taper).
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): a shallow wedge cannot be pushed back out by the force it is holding, because friction on its faces is bigger than the push-back (Engineering Statics: 'high-friction (self-locking) wedges'; Wikipedia 'Wedge')
  - tensioning (takes up slack and holds): driving it further takes up any gap and adds clamping force, and a loose wedge can be re-tightened with a tap (Woodsmith on tusk tenons)
  - quick-release: simple wedges come out with a kick or a tap from the thin end, with no fasteners to undo (Wikipedia 'Doorstop'; Woodsmith)
- **holding_principle**: 
  - friction or clamping (force-fit): the wedge itself is held only by friction on its sloping faces, and the parts are held by the squeeze it produces; a taper key transmits force by friction on its inclined faces rather than by shape (MBO Osswald)
  - shape (the parts interlock; form-fit): in a cotter joint, a tusk tenon or a wedged tenon the wedge also blocks the parts from pulling apart, so the joint is locked by shape once the wedge is in (Thang 'Wedge mechanism 21'; Woodsmith; Popular Woodworking)
- **input_output**: not applicable as a holding joint. As a mechanism, a wedge turns a push along its length into a smaller but stronger sideways movement (mechanical advantage about length / width; Wikipedia 'Wedge'); a self-locking wedge cannot be driven backwards by its load (back-drivable: no), though vibration can walk it out (Sheldon Brown on cotters).
- **power**: passive (no power needed): it is driven in by hand, a mallet or hammer, and stays by friction
- **removability**: removable: knocked back out from the thin end, pulled by its head (gib-head key, with a key puller) or pushed out with a drift (Wikipedia 'Machine taper'; MBO Osswald). Glued wedges in wedged through-tenons are effectively permanent (Popular Woodworking).
- **reuse_cycles**: many times for door wedges, folding wedges and tusk-tenon wedges (Woodsmith: tusk tenons can be taken apart); a few times for tightly driven metal cotters and taper keys, which are often damaged on removal (Sheldon Brown: threads mushroom and cotters may have to be drilled out)
- **tools_needed**: None for a door wedge; a mallet or hammer to drive and release most wedges; a drift or punch to drive out a tight one; a key puller for gib-head keys (MBO Osswald); a cotter press or hammer, punch and locking pliers for bicycle cotters (Sheldon Brown). To make wooden wedges: a bandsaw (or saw) and optionally a plane (Fine Woodworking).
- **seal**: none
- **load**: Medium to heavy in the direction it squeezes (a small tap produces a large clamping force; high-friction wedges hold shoring timbers in ships' damage control, per Engineering Statics). Taper keys transmit shaft torque and resist vibration and shock loads (MBO Osswald). Weak against vibration and repeated load reversals, which can loosen it (Sheldon Brown), against being pushed from the thin end, and in wood against splitting of the part it presses on (Woodsmith; Popular Woodworking).
- **adjustable**: yes: drive it further to tighten or to take up wear or wood shrinkage; e.g. a tusk-tenon wedge can be re-tightened with a tap when seasonal wood movement loosens the joint (Woodsmith); wedges can set a gap between a slide and its runway (Thang 'Wedge mechanism 17')
- **play_and_precision**: No play once driven: taper keys 'eliminate potential play' compared with plain parallel keys (MBO Osswald). But a taper key can push the hub slightly off-centre on the shaft (Wikipedia 'Key (engineering)'), and the final position depends on how hard it is driven; the angle of a bicycle cotter's flat decides where the crank ends up, so mismatched cotters leave the cranks out of line (Wikipedia 'Cotter (pin)'; Sheldon Brown). Wedges are very tolerant of rough, uneven gaps, which is why shims and wedges are used for levelling (Wikipedia 'Shim (spacer)').
- **access_needed**: both sides: a through wedge, cotter or tusk tenon is driven in from the thick end and knocked out from the thin end. A door wedge or shim needs only one side, and a gib-head taper key is fitted and pulled from the end of the shaft.
- **materials**: Straight-grained hardwood for joinery wedges, often a contrasting colour (Popular Woodworking); saw-cut surfaces grip better for clamping wedges, smooth surfaces are easier to remove, and oily woods such as teak or lignum vitae make self-lubricating removable wedges (Fine Woodworking 1992); wood, rubber, fabric or plastic door wedges (Wikipedia 'Doorstop'); steel or stainless steel taper keys (MBO Osswald); steel cotters; wood, plastic, metal or even paper shims (Wikipedia 'Shim (spacer)'); TPU for grippy printed door wedges (Printables model 1612035).
- **maker_difficulty**: easy: a wedge is quick to cut on a bandsaw or print in one piece; matching its angle to a tapered slot (tusk tenon, taper key) takes more care, so moderate for those

### Making it

- **processes**: 
  - woodwork: sawn or bandsawn wedges, wedged and tusk tenons, folding wedges for clamping
  - 3D print (FDM): door wedges, wedge clamps and printed wedge-locked joints (Printables models)
  - CNC: milled wedge clamps and tapered keyways; laser-cut 'hammer joints' with a wedge through a tenon (Printables 'Tenon Wedge Hammer Joint Test' was adapted from a laser-cut design)
  - off-the-shelf part: taper keys (DIN 6887), tapered shims, rubber door wedges, bicycle cotters *(unverified parts omitted)*
- **print_in_place**: no: the wedge is printed separately and driven in after the other parts are assembled
- **making_tips_3d_printing**: 1) Keep the slope shallow so it self-locks: the wedge angle must be smaller than the friction angle (arctan of the friction coefficient) (Wikipedia 'Wedge'); for a clamping wedge about 1 in 6 (roughly 9.5 degrees) is a good starting point (Fine Woodworking 1992), and joinery wedges use about 3 to 5 degrees (Popular Woodworking; Woodsmith). 3) Test designs are printed in PLA with 2 perimeters and 15% gyroid infill and tapped home with a soft hammer (Printables 'Tenon Wedge Hammer Joint Test' by kaje); a strong filament such as carbon-fibre polycarbonate is used for CNC wedge clamps (Printables 'CNC Pivoting Wedge Clamp' by Elphwrkz). 4) Use TPU (about 90A to 95A) for door wedges that must grip the floor; PLA or PETG grip less (Printables 'Flexible TPU Door Stopper'). 5) Expect it to loosen over time: printed PLA parts creep under constant load (PMC7764475 creep study), and PLA softens above about 60 C (Prusa), so a wedge left under constant pressure, or in a hot place, will relax; check and re-tap it, or use PETG or a harder material. 7) Add small teeth or texture for more grip in soft materials such as cloth (Printables 'Wedge Tensioner / Clamp for Canvas' uses 'strong teeth'). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'taper key' or 'gib head key DIN 6887' (1:100 taper; e.g. MBO Osswald (brand)); 'taper pin'; 'bicycle cotter pin' (cottered cranks); 'tapered shims' or 'shim stock' and 'laminated shims'; 'door wedge' or 'door stop wedge' (rubber); 'folding wedges' or 'timber wedges' (construction); 'plug and feathers' (stone splitting wedges); 'felling wedge'; 'drift' (for knocking out Morse-taper tools); 'key puller'.
- **rules_of_thumb**: 
  - Self-locking condition: a wedge binds (stays put) when its angle is less than the arctangent of the friction coefficient (Wikipedia 'Wedge'). Statics texts show that with friction on both faces a wedge stays in place up to about twice the friction angle (IIT Guwahati ME101 lecture 14), so keeping the angle below arctan(mu) is the safe rule. Example: mu = 0.3 gives arctan(0.3) = about 17 degrees (calculated).
  - For clamping with wedges, 'a wedge that rises about 1 in. in 6 in. makes a good choice'; steep wedges give more movement but need more force and are more likely to slip (Blandford, 'Clamping with Wedges', Fine Woodworking #93).
  - Wedged through-tenons: a 3-degree taper on the mortise ends and wedges works well, with the taper extending about three-quarters of the way down the mortise (Popular Woodworking, 'Wedged Mortise and Tenon').
  - Tusk tenons: wedge and wedge mortise with a matching bevel of about 5 degrees; a loose-wedge (dovetailed) version uses about 10 to 12 degrees; leave at least 1/2 in of solid wood beyond the wedge mortise to avoid splitting (Woodsmith).
  - Taper keys (gib-head, DIN 6887) have a 1:100 taper, are driven in with a hammer and hold by friction; sizes run from 4 x 4 x 14 to 50 x 28 x 400 mm for shafts of 10 to 230 mm (MBO Osswald).
  - Morse tapers (a self-holding taper, which is a wedge wrapped round a cone) are about 1.49 degrees (roughly 3 degrees included), about 1:20 (Wikipedia 'Machine taper').
  - Cotters: hammer in, snug the nut, hammer again and repeat until no more slack appears; don't try to pull them in with the nut alone (it strips the thread); re-tap and re-tighten after about 50 miles of riding (Sheldon Brown, 'Cottered Cranks').

### When to use it

- **everyday_examples**: 
  - A door wedge kicked under a door to hold it open (Wikipedia 'Doorstop')
  - A folded card or shim under a wobbly table leg (Wikipedia 'Shim (spacer)')
  - The wooden wedge that holds the blade in a traditional hand plane (Fine Woodworking, 'The Versatile Wedge')
  - Cottered cranks on older bicycles, and the wedge inside a bicycle quill stem (Wikipedia 'Cotter (pin)'; Wikipedia 'Wedge'; Thang 'Wedge mechanism 19')
- **when_to_use**: Use a wedge when you want a strong, tight hold that is quick to make and can be undone with a tap: knock-down furniture joints (tusk tenons), locking a tenon permanently (glued wedged tenons), clamping awkward or thin glue-ups where ordinary clamps don't fit (Fine Woodworking), taking up an uneven or unknown gap (shims, levelling), holding a door or a part in place temporarily, fixing a hub to a shaft without play in heavy, vibrating machinery (taper keys; MBO Osswald), and gently prising parts apart without damage (Fine Woodworking).
- **when_not_to_use**: Avoid it where there is strong vibration or load reversal and nobody will check it, because wedges and cotters can work loose (Sheldon Brown); use a screw with a lock nut or threadlocker, or a pin that can't slide. Avoid it where the hub must run exactly centred, because a taper key can push the hub off-centre (Wikipedia 'Key (engineering)'); use a parallel key, a keyless locking bush or a taper-lock bush. Avoid steep wedges in slippery materials (they pop out; Fine Woodworking 1992) and wedging close to the end of wood or thin printed walls (they split; Woodsmith). For something you undo often, a cam lever, toggle clamp or quick-release pin is faster and needs no hammer.
- **environment_limits**: Wood shrinks and swells with humidity, so wooden wedges loosen as wood dries and may need re-tapping (Woodsmith); swelling can also make wedges grip harder, as ancient quarrymen used wet wooden wedges to split stone (Wikipedia 'Wedge'). Vibration can walk wedges and cotters loose (Sheldon Brown); a tusk-tenon wedge oriented vertically is less likely to work loose (Woodsmith). Printed plastic wedges creep under constant load (PMC7764475 creep study) and PLA softens above about 60 C (Prusa), so the clamping force fades over time and in heat. *(unverified parts omitted)*
- **safety_notes**: Hammering: miss-hits damage parts and hands; hold a punch or drift with locking pliers, not your fingers (Sheldon Brown). Heating a part to free a stuck cotter weakens it (Sheldon Brown). Driving wedges near the end of wood can split it suddenly (Woodsmith). *(unverified parts omitted)*
- **common_failures**: 1) Works loose from vibration, wood shrinkage or plastic creep: re-tap it, orient it so gravity and vibration don't push it out (Woodsmith), or add a nut or pin (Sheldon Brown: re-tighten cotters after about 50 miles). 2) Too steep, so it slips out: make the slope shallower or roughen the faces (Fine Woodworking 1992). 3) Splits the part it presses on: leave more material beyond the slot, drill relief holes at the end of saw kerfs in wedged tenons (Popular Woodworking), and match the wedge angle to the slot so pressure is spread (Woodsmith). 4) Taper key pushes the hub off-centre (Wikipedia 'Key (engineering)'). 5) Mismatched cotters leave cranks out of line (Wikipedia 'Cotter (pin)'). 6) Stuck fast: needs sharp, well-aimed hammer blows, a punch, drilling out or (last resort) heat (Sheldon Brown).
- **related**: 
  - Taper fit (Morse taper): a wedge wrapped into a cone; self-holding and knocked apart with a drift wedge (Wikipedia 'Machine taper')
  - Keyless locking bush (taper-lock bush): tapered rings squeezed by screws instead of hammering, and they keep the hub centred
  - Mortise and tenon (wedged, drawbored and tusk tenons): the main joinery use of wedges
  - Wedge dowel (click-in grooved dowel): a ready-made furniture fitting that wedges panels together
  - Screw thread / lead screw: 'a wedge of considerable length wrapped around a cylinder', self-locking in the same way (Fine Woodworking 1992; IIT Guwahati)
  - Sprag clutch and roller clutch: wedging elements that lock in one direction only
  - Binding-plate lock: a tilting plate that wedges on a bar
  - Eccentric cam lever: a rotating wedge that clamps and releases by hand without a hammer
  - Dovetail slide with gib strip: a tapered strip (a wedge) adjusted to take up play in a slide
  - Shims, spacers and standoffs: flat packing of a set thickness that sets a gap by stacking rather than by sliding a taper; tapered shims and folding wedges stay in this entry

### Pictures, videos and models

- **links**: 
  - [Wedge-diagram.svg (Wikimedia Commons, by Iainf; used on Wikipedia 'Wedge')](https://commons.wikimedia.org/wiki/File:Wedge-diagram.svg): Cross-section of a wedge showing a downward push producing sideways forces on its sloping faces *(licence: Public domain)*
  - [Wooden wedge door stop.jpg (Wikimedia Commons, by Strait)](https://commons.wikimedia.org/wiki/File:Wooden_wedge_door_stop.jpg): Photo of a handmade wooden door wedge *(licence: Public domain)*
  - [Cassell's Carpentry fig. 369: Cramping floor-boards with dog and folding wedges (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Cassells_Carpentry.369_Cramping_Floor-Boards_with_Dog_and_Folding_Wedges.png): Old engraving of a pair of folding wedges driven between a metal dog and a floorboard to squeeze boards together *(licence: Public domain)*
  - [Cotter-Pin.jpg (Wikimedia Commons; cropped from 'Keil fuer Tretlager')](https://commons.wikimedia.org/wiki/File:Cotter-Pin.jpg): Photo with scale of a bicycle crank cotter: a tapered pin with a flat face and a threaded end *(licence: Public domain)*
  - [Wedge mechanism 22 (Nguyen Duc Thang, YouTube)](https://www.youtube.com/watch?v=6N0YcXU_0vc): CAD animation of a sunk taper key being driven into a matching sloped slot to lock a disc on a shaft (per Thang's catalogue description; title verified) *(licence: link only)*
- **make_it_yourself**: 
  - [Tenon Wedge Hammer Joint Test (kaje, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/673039-tenon-wedge-hammer-joint-test): Printed test of a laser-cut style 'hammer joint': a tenon through a hole locked by a wedge tapped down flush; PLA, 2 perimeters, 15% gyroid; Onshape CAD linked *(licence: Creative Commons Attribution (as listed in the Printables API))*
  - [CNC Wedge Clamp (Elphwrkz, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/393687-cnc-wedge-clamp): Low-profile printed wedge clamp for a CNC bed that pushes sideways on the workpiece using two T-track bolts *(licence: Creative Commons Attribution (as listed in the Printables API))*
  - [Wedge Tensioner / Clamp for Canvas, Tarpaulin, Cloth (Meister Edel, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/723184-wedge-tensioner-clamp-for-canvas-tarpaulin-cloth): Two printed parts that slide into each other and clamp thin material harder the further they are pushed together; released by pushing the wedge out from behind *(licence: Creative Commons Attribution-NonCommercial-ShareAlike (as listed in the Printables API))*
  - [Flexible TPU Door Stopper / Door Wedge (Felix, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1612035-flexible-tpu-door-stopper-door-wedge): Scalable printed door wedge in TPU (about 90A to 95A) with a textured top for grip *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives (as listed in the Printables API))*
- **diagram_idea**: Side view of a wedge being tapped into a gap, with arrows showing the small push along its length becoming a large squeeze sideways, the friction arrows on both faces pointing against sliding out, and an inset comparing a shallow wedge that stays put with a steep wedge that pops out (angle compared with the friction angle).
- **sources**: 
  - https://en.wikipedia.org/wiki/Wedge
  - https://en.wikipedia.org/wiki/Key_(engineering)
  - https://en.wikipedia.org/wiki/Cotter_(pin)
  - https://en.wikipedia.org/wiki/Machine_taper
  - https://en.wikipedia.org/wiki/Shim_(spacer)
  - https://en.wikipedia.org/wiki/Doorstop
  - https://engineeringstatics.org/Chapter_09-block-and-wedge-friction.html
  - https://iitg.ac.in/kd/Lecture%20Notes/ME101-Lecture14-KD_DivI.pdf
  - https://www.mecapedia.uji.es/pages/irreversibilidad.html
  - https://www.mbo-osswald.de/en/shop/taper-keys-with-gip-head-din-6887
  - https://www.finewoodworking.com/1992/04/01/clamping-with-wedges
  - https://www.finewoodworking.com/project-guides/shop-projects/the-versatile-wedge
  - https://www.popularwoodworking.com/projects/wedged-mortise-and-tenon/
  - https://www.woodsmith.com/article/loose-wedge-mortise-tenon-joints-basic-tusk-tenon/
  - https://www.sheldonbrown.com/tooltips/cotters.html
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC7764475/
  - https://help.prusa3d.com/article/pla_2062
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:Wedge-diagram.svg
  - https://commons.wikimedia.org/wiki/File:Wooden_wedge_door_stop.jpg
  - https://commons.wikimedia.org/wiki/File:Cassells_Carpentry.369_Cramping_Floor-Boards_with_Dog_and_Folding_Wedges.png
  - https://commons.wikimedia.org/wiki/File:Cotter-Pin.jpg
  - https://www.youtube.com/watch?v=6N0YcXU_0vc
  - https://www.youtube.com/watch?v=Ybm4xZNfA9o
  - https://www.youtube.com/watch?v=fO-NIQ-YFmA
  - https://www.youtube.com/watch?v=_I3PPttljC8
  - https://www.youtube.com/watch?v=pe3wTSXQa2c
  - https://www.youtube.com/watch?v=qlPg8I8ZB1U

### Other info

- **Fields with unverified parts:** environment_limits, making_tips_3d_printing, processes, safety_notes

## 147 Inertia-locking reel (seat-belt lock, centrifugal catch)

*self-locking & anti-back-drive.* A reel that pays out freely when pulled slowly but locks instantly when jerked, by a swinging weight or flyweight catching a ratchet

### What it is

- **plain_name**: A spring-loaded reel, like the one inside a car seat belt, that lets the strap pull out smoothly when you pull gently and winds it back in, but catches and locks the instant the strap is jerked or the car brakes hard
- **term**: Emergency locking retractor (inertia reel)
- **aliases**: 
  - inertia reel / inertial reel (Wikipedia 'Inertia reel' redirects to 'Seat belt: Locking retractors')
  - emergency locking retractor, ELR (Wikipedia 'Seat belt'; FMVSS 209)
  - webbing-sensitive lock (reacts to the strap being jerked) and vehicle-sensitive lock (reacts to braking, crash or rollover); dual-sensing retractor (both) (Wikipedia 'Seat belt')
  - switchable retractor, which can also be put into automatic locking retractor (ALR) mode for fitting child seats (The Car Seat Lady)
  - seat-belt retractor / seat-belt reel
  - self-retracting lifeline (SRL), self-retracting lanyard, self-retracting device (SRD), personal fall limiter, 'block' or 'yo-yo' (fall protection) (OSHA 1910.140; FallTech)
  - centrifugal catch / centrifugal lock / flyweight lock (a flung-out weight that catches ratchet teeth)
  - inertial locking (as used in rope grabs) (OSHA 1910.140)
  - Dynalock (brand; early US automatic locking retractor) (Wikipedia 'Seat belt')
- **family**: self-locking & anti-back-drive
- **other_families**: tensioning, reels & take-up, one-way & ratchet
- **one_liner**: A spring-return reel whose spool turns freely for slow movements, but whose built-in inertia sensor (a swinging pendulum, a rolling ball, or a flyweight or inertia wheel on the spool) throws a catch into ratchet teeth to lock it the moment the line is jerked or the vehicle decelerates sharply.
- **complexity**: A small assembly that acts as one unit: spool (reel) carrying the strap, webbing or line; spiral return spring; ratchet wheel (toothed wheel) on the spool; locking pawl or locking bar; sensor(s): a pendulum or ball for vehicle movement and/or a spring-held flyweight lever or inertia wheel for strap speed; frame and housing (Wikipedia 'Seat belt'; US patent 3,918,658; SafetyRestore). Modern car belts may add a pyrotechnic pretensioner and a load limiter (Wikipedia 'Seat belt'); fall-arrest units add an energy absorber (FallTech).
- **how_it_works**: A spiral spring keeps turning the spool to wind the strap in, so slow pulls just unwind it against a light spring force (Wikipedia; SafetyRestore). In the strap-sensing (webbing-sensitive) lock, a weighted lever on the spool is held in by a small spring; if the strap is jerked, the spool spins fast, the weight is flung outwards (a small centrifugal clutch), and via a cam it pushes a pawl into a ratchet so the spool can't unwind any further (Wikipedia 'Seat belt'; SafetyRestore). Some designs use an inertia wheel that lags behind the accelerating spool instead (US patent 3,918,658). In the vehicle-sensing lock, a pendulum or ball swings when the car brakes hard or rolls over and pushes the pawl into the ratchet; when the pull eases the spool turns back a little and the pawl drops out, unlocking it (Wikipedia 'Seat belt'; SafetyRestore).

### Finder attributes

- **job**: 
  - stop it moving back (one-way): once locked, the strap or line cannot pay out any more, although the spring can still wind it in (Wikipedia 'Seat belt'; SafetyRestore)
  - tighten and hold tension: the spring keeps the strap snug and winds up any slack (Wikipedia 'Seat belt')
  - slow it, stop it or keep its speed steady: it stops a sudden pay-out, e.g. a person thrown forward in a crash or a worker starting to fall (OSHA 1910.140 definition of a self-retracting lifeline)
- **motion**: rotate: the spool turns many times as the strap pays out or rewinds; the pawl and sensor only swing a few degrees
- **degrees_of_freedom**: 1 when unlocked (the spool turns, so the strap slides in and out). When locked: 0 in the pay-out direction, while winding in is still possible (a ratchet allows one direction).
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): when triggered, the pawl in the ratchet teeth holds the full crash or fall load (FMVSS 209; OSHA 1910.140)
  - one-way (moves freely one way, locks the other): when locked it still lets the strap wind in but not out, and in automatic-locking (ALR) mode it only gets shorter (The Car Seat Lady)
  - tensioning (takes up slack and holds): the spring winds up slack and keeps a light pull on the strap (FMVSS 209 sets 1 to 7 N)
  - fail-safe or breakaway: it locks automatically, with no power, whenever the pull or the vehicle's deceleration is sudden, and unlocks by itself once the load eases (Wikipedia 'Seat belt'; SafetyRestore)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the pawl drops into the ratchet teeth and blocks the spool
  - spring force (a spring or springy part presses it in place): the spiral spring keeps the strap wound in, and small springs keep the flyweight and pawl out of the teeth until a jerk overcomes them (SafetyRestore)
- **input_output**: Line pulled out (straight-line motion) -> spool rotation, 1 turn per spool circumference of line. Slow pull -> free rotation against a light spring; sudden pull, or vehicle deceleration or tilt -> locked. Shafts: the sensor, ratchet and spool share the spool axis (in line); the pendulum or ball sensor sits below it in the frame. Efficiency: not applicable. Back-drivable: the spring winds the spool back in; once locked, the load cannot drive it outwards (no) until the pull eases. For cars, it must lock before 25 mm of pay-out at 0.7 g (FMVSS 209).
- **power**: passive (no power needed): the spring, the inertia sensor and the pawl need no electricity. Exceptions: pretensioners fire a small explosive charge in a crash (one-shot) (Wikipedia 'Seat belt'), and some door-mounted belts use an electromagnet to stop locking while the door opens, designed so that a failure still lets a hard deceleration lock the belt (US patent 4,235,455).
- **removability**: removable: the retractor bolts to the vehicle body or anchor as a unit (TR6 forum: disconnect the retractor unit); the lock itself is not a joint that is taken apart
- **reuse_cycles**: many times: it locks and unlocks over and over in normal use (car retractors are tested for 50,000 pull-out cycles, with the lock triggered at least 10,000 times; FMVSS 209), but after arresting a real crash or fall it should be taken out of service and inspected or replaced (OSHA 1910.140(c)(17))
- **tools_needed**: To use: none. *(unverified parts omitted)*
- **seal**: dust-resistant: the mechanism is enclosed in a housing, and car retractors must still work after a 5-hour dust test (FMVSS 209); leaves and grime can still get in over the years (TR6 forum)
- **load**: Heavy in pull when locked: a car seat-belt assembly loop must withstand at least 22,241 N (each structural part at least 11,120 N) (FMVSS 209); self-retracting lifelines limiting free fall to 2 ft or less must have components that sustain 3,000 lb (13.3 kN) (OSHA 1910.140). Very light in normal use: the retractive pull is only 1 to 7 N (FMVSS 209). It only resists pull along the strap; it does nothing against slow creep, because a slow pull never triggers the lock.
- **adjustable**: no: the locking thresholds are fixed by the sensor design; a switchable car retractor can be changed into automatic-locking mode by pulling the belt all the way out, and back to normal by letting it all the way in (The Car Seat Lady)
- **play_and_precision**: Small, deliberate travel before it locks: car retractors must lock within 25 mm of pay-out at 0.7 g, while strap-sensing ones must not lock before 51 mm at 0.3 g or less (FMVSS 209); fall-arrest devices allow an arrest distance of 24 in (old Class A), 42 in (Class 1 and 2) or 54 in (old Class B) (ANSI Z359.14 via FallTech). Vehicle-sensitive retractors must be mounted at the right angle: they must not lock when tilted 15 degrees or less from their installed angle, and must lock when tilted beyond 45 degrees (FMVSS 209). *(unverified parts omitted)*
- **access_needed**: not applicable: the housing is bolted to a frame or anchor and the user only handles the free end of the strap or line
- **maker_difficulty**: hard: for anything that protects people, buy a certified retractor or self-retracting lifeline; a printed demonstrator is moderate, but getting the flyweight heavy enough and the springs light enough to trigger reliably is fiddly (a printed centrifugal-lock puzzle box worked only unreliably because its printed balls were too light; Printables 'Box with Centrifugal Locks')

### Making it

- **processes**: off-the-shelf part: car seat-belt retractors, self-retracting lifelines and fall-arrest blocks (certified; never home-made for safety use) *(unverified parts omitted)*
- **making_tips_3d_printing**: For a teaching model only, never for anything that holds a person or a heavy load. 1) Put a pivoting weighted lever (flyweight) on the spool with a light spring holding it in, and a ring of ratchet teeth inside the housing: spin slowly and it passes; jerk it and the weight swings out and catches (Wikipedia 'Seat belt'; 2) Printed plastic weights are very light: a printed centrifugal-lock box 'doesn't work exactly perfect' because its printed balls lack mass, and its maker suggests steel or ceramic balls (about 2.79 mm, with about 0.41 mm clearance each side in the track) instead (Printables 'Box with Centrifugal Locks'); so embed a steel ball, nut or screw in the flyweight to make it heavier. 3) The trigger speed comes from the balance of flyweight force (mass x radius x speed squared) against its spring, the same balance as a centrifugal clutch (LNCT clutch notes): a heavier weight or a weaker spring makes it lock at a lower pull speed. 6) A pendulum version needs the housing mounted upright; test that it doesn't lock when simply tilted a little (car rules allow 15 degrees; FMVSS 209). *(unverified parts omitted)*
- **off_the_shelf_parts**: 'self-retracting lifeline (SRL)', 'self-retracting lanyard', 'personal fall limiter', 'fall arrest block' (ANSI Z359.14 Class 1 or Class 2; e.g. FallTech (brand)); related parts: 'spiral spring' or 'power spring', 'constant force spring', 'ratchet and pawl', 'centrifugal brake'. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Car emergency-locking retractors must lock before 25 mm of strap pay-out at 0.7 g, strap-sensing ones must not lock before 51 mm at 0.3 g or less, and vehicle-sensing ones must not lock when tilted 15 degrees or less from their installed angle but must lock beyond 45 degrees (FMVSS 209, 49 CFR 571.209 S4.3(j)).
  - Retractive force should be light: 1 to 7 N for a belt across both chest and lap, 1 to 5 N for a shoulder belt alone, at least 3 N for a lap belt alone (FMVSS 209 S4.3(j)); after the durability tests the retraction force must still be at least 50% of the original (FMVSS 209 S4.3(k)).
  - Durability test for car emergency-locking retractors: 50,000 pull-out and rewind cycles with the lock actuated at least 10,000 times, plus a 5-hour dust test (FMVSS 209 S5.2(k)).
  - Strength: a car seat-belt assembly loop must withstand at least 22,241 N, each structural component at least 11,120 N (FMVSS 209 S4.4). Self-retracting lifelines that limit free fall to 2 ft (0.61 m) or less need components that sustain 3,000 lb (13.3 kN) fully extended (OSHA 1910.140(c)(5)).
  - Fall-arrest devices (ANSI Z359.14, as summarised by FallTech): maximum arrest force 1,800 lb; maximum arrest distance 42 in for current Class 1 and 2 devices (24 in and 54 in for the retired Classes A and B).
  - Any fall-protection system that has arrested a fall (been impact-loaded) must be removed from service until a competent person inspects it (OSHA 1910.140(c)(17)).

### When to use it

- **everyday_examples**: 
  - Car seat belts: the belt pulls out slowly but locks if you jerk it or brake hard (Wikipedia 'Seat belt')
  - Fall-arrest 'yo-yo' blocks used by roofers and scaffolders (OSHA 1910.140; FallTech)
  - Child-seat installation using the belt's automatic-locking mode (pull it all the way out and it clicks and only gets shorter) (The Car Seat Lady)
  - Lift (elevator) overspeed governors, a related speed-triggered catch that clamps the car to its rails if it descends too fast (Wikipedia 'Elevator')
- **when_to_use**: It is also the mechanism to understand when building a demonstration of speed-sensitive locking (flyweight catching a ratchet), which is the same idea as a centrifugal clutch but with a positive catch instead of friction. *(unverified parts omitted)*
- **when_not_to_use**: Never make your own for protecting people: use a certified seat belt or self-retracting lifeline (FMVSS 209; ANSI Z359.14; OSHA 1910.140). Don't rely on it to stop slow creep or a slowly sinking load, because a slow pull never triggers it; use a ratchet and pawl, a cam cleat, a brake or a self-locking worm or screw instead. For a strap that must stay fixed in length (e.g. holding a child seat), use automatic-locking mode or a ratchet strap (The Car Seat Lady). For limiting speed rather than stopping, use a centrifugal brake or speed governor; for engaging a drive at speed, use a centrifugal clutch.
- **environment_limits**: Dirt, leaves and grime inside the housing can stop it retracting (TR6 forum); car retractors are tested for dust, corrosion and temperature (FMVSS 209). The rewind spring weakens with use; the rules only require 50% of the original retraction force after durability testing (FMVSS 209). Webbing and synthetic lines are damaged by abrasion, cuts and sharp edges (FMVSS 209 abrasion tests; FallTech on leading-edge ratings); *(unverified parts omitted)*
- **safety_notes**: Life-safety device: never modify, bypass or 3D print one for real use. The rewind spring stores energy and can spring out when the cover is removed: wear eye protection and hold the cover down (TR6 forum). Car pretensioners contain explosive gas generators, so don't take them apart (Wikipedia 'Seat belt'). Replace or inspect after any crash or fall arrest (OSHA 1910.140(c)(17)). A slow pull or slow slip won't lock it.
- **common_failures**: 1) Won't retract: dirt and grime in the spool or a weak or rusty spring (TR6 forum); clean it out, or replace the unit. 2) Locks when it shouldn't: pulling the strap too quickly, or a vehicle-sensitive unit tilted beyond its design angle (FMVSS 209 tilt limits); pull slowly and mount it at the correct angle. 5) Used in a crash or fall: the parts may be stretched or damaged and must be inspected or replaced (OSHA 1910.140(c)(17)). *(unverified parts omitted)*
- **related**: 
  - Ratchet and pawl: the locking part inside the reel, but operated by hand or always engaged, not triggered by speed
  - Centrifugal clutch: the same flung-out weight idea, used to grip a drum by friction and drive it, instead of to lock
  - Speed governor (fly fan, centrifugal governor): flyweights that keep speed steady instead of locking
  - Constant-force spring (spring-return reel) and spiral power spring: the rewind springs used in reels and retractors
  - Rope grab and ascender: a cam that grips a rope; OSHA notes rope grabs often use inertial locking too
  - Automatic locking retractor (ALR): a ratchet mode that locks as soon as the strap stops being pulled out, then only lets it get shorter (The Car Seat Lady)
  - Electromagnetic brake (power-off, spring-applied): holds a shaft whenever power is lost, instead of when it spins too fast
  - Lift overspeed governor and safety gear: a speed-triggered catch that clamps brake shoes onto guide rails (Wikipedia 'Elevator')

### Pictures, videos and models

- **links**: 
  - [Intertial-reel.jpg (Wikimedia Commons, by Liftarn; used on Wikipedia 'Seat belt')](https://commons.wikimedia.org/wiki/File:Intertial-reel.jpg): Photo of an inertial-reel seat belt with the roll of webbing exposed, retrofitted in a 1973 Saab 99 *(licence: CC BY-SA 3.0)*
  - [Inertial reel belt.jpg (Wikimedia Commons, by A7N8X)](https://commons.wikimedia.org/wiki/File:Inertial_reel_belt.jpg): Photo of the seat-belt retractor housing of a Fiat Panda, with the belt running out of it *(licence: CC BY-SA 3.0)*
  - [US3918658A: Seat belt retractor having inertial device activated by two stimuli (Google Patents)](https://patents.google.com/patent/US3918658A/en): Patent text and drawings of a dual-sensing retractor: a pendulum for vehicle movement and an inertia wheel for strap acceleration, both pushing a pawl into a ratchet wheel *(licence: US patent (public domain text and drawings))*
  - [Elevator speed governor.jpg (Wikimedia Commons, by Darklanlan)](https://commons.wikimedia.org/wiki/File:Elevator_speed_governor.jpg): Photo of a lift overspeed governor in a machine room, a related speed-triggered safety catch *(licence: CC BY 4.0)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Box with Centrifugal Locks (Ky3_actual, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/84286-box-with-centrifugal-locks): Puzzle box whose catches only release when it is spun, using balls in a two-position track: a printable demonstration of a spin-triggered (centrifugal) catch; the maker notes printed balls are too light and suggests steel or ceramic ones *(licence: Creative Commons Attribution (as listed in the Printables API))*
- **diagram_idea**: Side view of a seat-belt spool with its ratchet wheel, shown twice: a slow pull where the spring-held flyweight stays tucked in and the spool turns, and a sudden jerk where the flyweight swings out, a cam tips the pawl into the ratchet teeth and the spool stops; a small inset shows the pendulum version tipping in a hard stop.
- **sources**: 
  - https://en.wikipedia.org/wiki/Seat_belt
  - https://en.wikipedia.org/wiki/Inertia_reel
  - https://en.wikipedia.org/wiki/Elevator
  - https://www.law.cornell.edu/cfr/text/49/571.209
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.140
  - https://www.falltech.com/blog/fall-protection-guides-resources/the-essential-guide-to-self-retracting-lifelines
  - https://www.safetyrestore.com/blog/how-seat-belt-locking-mechanism-works/
  - https://patents.google.com/patent/US3918658A/en
  - https://patents.google.com/patent/US4235455A/en
  - https://thecarseatlady.com/installation/lockingthebelt/
  - https://www.triumphexp.com/forum/tr6-tech-forum.2/how-to-rebuild-retracting-seat-belts.937134/
  - https://lnct.ac.in/wp-content/uploads/2020/04/ME403_Unit4_Clutches.pdf
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:Intertial-reel.jpg
  - https://commons.wikimedia.org/wiki/File:Inertial_reel_belt.jpg
  - https://commons.wikimedia.org/wiki/File:Elevator_speed_governor.jpg
  - https://www.youtube.com/watch?v=aunIE33GYZc

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, links, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, print_in_place, processes, tools_needed, when_to_use

## 148 Woven self-tightening grip (finger-trap grip)

*self-locking & anti-back-drive.* A braided tube that gets narrower and grips harder the more it is pulled, like a Chinese finger trap or a cable-pulling sock

*Also covers:* Also covers the whoopie sling (an adjustable spliced sling using the finger-trap grip).

### What it is

- **plain_name**: A stretchy woven tube that slides easily onto a cable, rope or finger, then squeezes tighter the harder you pull, and lets go when you push its ends towards the middle
- **term**: Woven self-tightening grip (biaxial braided grip, the 'finger-trap' principle); as a cable tool it is a wire-mesh cable grip (pulling grip, support grip or strain-relief grip)
- **aliases**: 
  - Chinese finger trap, Chinese finger puzzle, Chinese thumb cuff, Chinese handcuffs (names for the toy, which is not Chinese in origin, Wikipedia)
  - finger trap
  - towing sock, cable sock, cable pulling sock
  - wire pulling grip, wire rope puller (Wikipedia)
  - wire-mesh grip, mesh grip, cable pulling grip
  - Chinese fingers (trade name for cable socks, e.g. 'Towing Socks (Chinese Fingers)')
  - strain-relief grip, support grip, splicing grip, slack-pulling grip (split mesh) (Kellems, Klein)
  - Kellems grip (brand, Hubbell; invented by Vivien Kellems in 1927)
  - finger-trap splice, bury splice, long bury splice (in hollow-braid rope)
  - finger trapping (parachute rigging)
  - Schmall'sches Extensionsgeflecht / Schmall's extension mesh (historic medical traction device, 1873)
  - expandable braided sleeving (e.g. Techflex, brand), which shows the same effect
  - whoopie sling (an adjustable-length spliced rope sling whose buried section works like a finger trap; Animated Knots; Greenbelly)
- **family**: self-locking & anti-back-drive
- **other_families**: cord, strap, webbing & textile hardware, clamping, magnetic & friction connections, seals & pass-throughs
- **one_liner**: A tube woven from two sets of crossing spiral strands that slides over the end of a cable, rope or finger and then grips it harder the harder it is pulled, because pulling makes the weave longer and narrower.
- **complexity**: Single piece in its simplest form: a woven tube (the bamboo or paper toy, a length of braided sleeving, or the hollow core of a braided rope). Cable grips are a small assembly that acts as one unit: a tube of woven strands (galvanized steel, tin-coated bronze, stainless steel or aramid fibre); a pulling eye made from the same strands (flexible, rotating or offset); often aluminium shoulders at the eye end to protect the cable; bands or tape over the tail end; and on split-mesh grips a lace or rod that closes the mesh around a cable mid-span (Kellems and Klein catalogues).
- **how_it_works**: The tube is a braid: two sets of strands wind round it in opposite spirals and cross over and under each other (a biaxial braid). Pulling the ends lengthens the braid, and it can only get longer by the strands swinging closer to the tube's length, which shrinks its circumference, so it squeezes whatever is inside; 'the more one pulls, the more the circumference shrinks and the trap tightens' (Wikipedia, 'Chinese finger trap'). The squeeze makes friction along the whole length, so the grip rises with the load instead of slipping. Pushing the ends towards the middle does the opposite: the tube gets shorter and wider and lets go, which is how you escape the toy and also why an object pushing against the tail of a cable grip can release it by accident (Kellems caution 8). A whoopie sling turns the grip into an adjustable loop: a hollow 12-strand braided rope has a fixed eye spliced into one end and its long end threaded back along inside its own core, so pulling the tail feeds rope through the buried section and changes the size of the loop (Animated Knots 'Whoopie Sling'); the buried section 'works like a Chinese finger trap - push the ends together to loosen and pull the ends away to tighten' (Greenbelly 'Guide to Whoopie Slings').

### Finder attributes

- **job**: 
  - join and hold: grabs the end (or, with split mesh, the middle) of a cable, rope, hose or finger so it can be pulled, hung or held
  - lock, and release by hand: holds as long as it is pulled, and lets go when the tension is off and its ends are pushed together
  - seal it, or pass cables or fluid through: as a strain-relief grip it takes the pull or weight off an electrical cord where it hangs from a ceiling or enters a box (it does not seal)
- **motion**: none: once loaded nothing moves; the braid itself changes shape (longer and narrower as it tightens, shorter and wider as it releases), which is how it grips
- **degrees_of_freedom**: 0 once it is gripping under load: the cable can't slide out in the pull direction. Before it is loaded it slides freely along the cable (1). Cable and grip together can still twist, which is why pulling eyes are joined to the pull line with a swivel; Kellems says swivels are 'essential' on long high-tension pulls because torque builds up.
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): the harder the pull, the tighter the weave squeezes, so it doesn't slip out under load
  - hand-release only (locks under load, releases when a person operates it): push the ends towards the middle and it opens up (the toy's escape); cable grips come off once the pull is taken off
  - self-aligning or self-centring: the woven tube closes evenly all the way round and centres the cable or rope inside it
- **holding_principle**: jamming (grains or a braid lock up under load): the braid narrows onto the object as it is pulled, friction or clamping (force-fit): the squeeze makes friction along the whole gripped length
- **input_output**: not applicable: it holds rather than passing motion on (back-drivable: no; pulling on it only tightens it, while pushing its tail towards the eye loosens it)
- **power**: passive (no power needed)
- **removability**: removable: take the load off, push the mesh back towards the eye to open it and slide it off (Kellems describes pulling grips as reusable tools). A buried hollow-braid rope splice counts as semi-permanent, and it is usually stitched or locked so it stays put (Animated Knots).
- **reuse_cycles**: many times: the toy works indefinitely and Kellems grips are 'designed to be a reusable tool', but strands kink, fray, corrode and break with use. Kellems' published breaking strengths apply only to new, unused grips, and a damaged grip must not be used (Kellems catalogue T-17, T-18).
- **tools_needed**: none for the toy or a sleeve. Cable grips: banding tool and bands (e.g. Punch-Lok bands, brand) or tape to lock the tail. Rope: a fid or splicing tool to bury the tail, and a needle and thread to stitch it (Animated Knots); parachute riggers use a 'finger-trapping needle' (a threaded fid) or a finger-trapping wire (FAA Parachute Rigger Handbook).
- **seal**: none: the open weave doesn't seal; for a sealed cable entry combine it with a cable gland or cord connector (see Cable gland and strain relief)
- **load**: Light to heavy, but only as a pull along the gripped object. The bamboo toy is very light and its strips break if pulled hard (Wikipedia). Kellems light-duty pulling grips for 0.50-0.61 in (13-16 mm) cable have an approximate breaking strength of 2,800 lb (12.5 kN), about 560 lb (2.5 kN) working load at Kellems' recommended safety factor of 5; Kellems' worked example is a 27,200 lb (121 kN) grip with a 5,440 lb (24 kN) maximum recommended load. A properly made long-bury splice in hollow-braid rope reaches 90-100% of the rope's breaking strength (Animated Knots). Weak against anything that pushes the tail back (which releases it), and it takes no sideways load or twist.
- **adjustable**: yes, before loading: slide it to where you want it and pull; it adapts to any diameter within its range. Once loaded it can't be adjusted without taking the load off.
- **play_and_precision**: A buried rope tail also shortens the rope by an amount that depends on how tightly the rope was braided, so Animated Knots advises loading it to 'reset' the braid and measuring. Each cable grip fits only a narrow diameter band (Kellems light-duty sizes step about every 1/8 in: 0.50-0.61 in, 0.62-0.74 in, 0.75-0.99 in). It centres the object but does not locate it precisely. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: a closed grip, sleeve or toy slides over a free end; split-mesh grips (lace or rod closing) wrap around a cable mid-span 'when end of cable is not available' (Kellems, Klein)
- **materials**: Toy: woven bamboo (Wikipedia) or paper strips. Cable grips: galvanized steel strand for pulling grips; tin-coated bronze (non-magnetic) or stainless steel for permanent support grips; aramid fibre for non-conductive grips (Kellems). Sleeving: PET monofilament (Techflex Flexo PET). Rope splices: hollow-braid HMPE (Dyneema, Spectra, Amsteel), aramid, LCP (Vectran) or polyester (Animated Knots). Printed: TPU strips (Printables). It grips round, fairly firm things well: cable, rope, hose, conduit, fingers. Slippery surfaces need a much longer grip: HMPE rope needs about twice the bury length of polyester (Animated Knots).
- **maker_difficulty**: easy to use, moderate to make: buy a mesh grip or a length of expandable braided sleeving, or weave strips by hand; printing a working braid in one go is hard because the strands must slide over each other at every crossing, so the printable version is flat TPU strips woven by hand

### Making it

- **processes**: 
  - off-the-shelf part: wire-mesh pulling, support, splicing and strain-relief grips (Kellems, Klein) and expandable braided sleeving (Techflex)
  - 3D print (FDM): flexible TPU strips printed flat and woven into a tube by hand (Printables 'Finger Trap (for flexible filament)')
  - other (hand work): weaving paper, bamboo or ribbon strips round a cylinder; burying a rope tail inside hollow-braid rope with a fid (Animated Knots) *(unverified parts omitted)*
- **print_in_place**: no: the strands must bend and slide over one another at every crossing, so the printable design (Nikorasu, Printables) is printed as two flat L-shaped TPU strips, 2 layers thick, which are woven together by hand around a pen and glued at the tab. (Some 'finger trap' prints are a different mechanism: a rigid tube with angled flaps.) *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Use flexible filament (TPU): the toy only works if every strand can bend and slide, and Nikorasu's Printables design notes TPU is 'pretty tough' compared with wood or paper traps that 'usually fall apart'. Flexible filaments are 'suitable mostly for advanced users due to high print difficulty' (Prusa, flexible materials), so print slowly. 2) Print the strips flat on the bed, only about 2 layers thick, so each strip is thin and bendy; level the bed well because a 2-layer print shows every error (Nikorasu). 3) Weave, don't print, the tube: tape the strip corners to a finger-sized former such as a thick pen, on opposite sides, then weave strictly over-under-over-under; tabs and holes at the ends line up and are glued (Nikorasu). 6) For a functional cable or rope grip it is usually better to buy PET braided sleeving (cut and seal its ends with a hot knife, Techflex) or a wire-mesh grip, and print only the parts around it: an end cap or eye that clamps the closed end, and a sleeve or band that locks the tail so it can't be pushed back (the job Kellems' bands do). *(unverified parts omitted)*
- **off_the_shelf_parts**: Wire-mesh cable pulling grips (search 'cable pulling grip', 'wire mesh grip', 'cable sock', 'Chinese fingers'): closed mesh (slides over an end) or split mesh with lace or rod closing (fits mid-span); single, double or multi-weave; flexible, rotating or offset eyes. Also support grips (single, double or offset eye) for hanging cable permanently, strain-relief grips for flexible cords and liquid-tight conduit, splicing grips (temporary cable-to-cable joints), hose containment grips (stop a burst hose whipping), Punch-Lok bands and banding tools, and ball-bearing pulling swivels (Kellems, Klein). Expandable braided sleeving (PET, e.g. Techflex Flexo PET, brand). Rope-splicing fids and finger-trapping needles. Finger-trap toys.
- **rules_of_thumb**: 
  - Pick the grip whose diameter range includes the cable's outside diameter; each size covers a narrow band (Kellems light-duty grips: 0.50-0.61 in, 0.62-0.74 in, 0.75-0.99 in, ...), and 'each Kellems Grip is designed to work on a specific range of cable diameters' (Kellems catalogue, T-12 and T-17).
  - Working load = approximate breaking strength ÷ safety factor: Kellems recommends a factor of 5 for pulling grips and 10 for support grips (worked examples: 27,200 lb breaking → 5,440 lb; 1,610 lb breaking → 161 lb), and a greater factor 'where risk of injury to persons or property is involved' (Kellems catalogue, T-18).
  - Push the cable in fully ('up to the elbows of the aluminum shoulders') and apply two bands about 1 in and 2 in (25 and 50 mm) from the tail end, because 'accidental release can occur if an object contracts and pushes against the tail end of the mesh' (Kellems catalogue, T-15 and T-17).
  - Longer mesh holds more: Klein uses standard lengths 'in restricted space for short pulls' and longer lengths 'for higher pulling loads' (Klein Tools wire pulling grips catalogue).
  - Hollow-braid rope bury length: about 72 × the rope's diameter for slippery HMPE (Dyneema, Spectra), about half that for polyester; taper the tail and stitch or lock it so movement can't draw it out (Animated Knots, 'Long Bury Splice', citing Brion Toss and Starzinger).
  - Expandable braided sleeving covers about a 3:1 range of diameters: Techflex Flexo PET 1/4 in nominal fits from 1/8 in to 7/16 in (Techflex product table).
  - Use each grip only for its job: 'Do not use a pulling grip for any application other than pulling cable', and attach hardware only at the pulling eye (Kellems caution list, T-17).
  - Whoopie sling marks (a different splice from the long bury above): for slippery high-modulus fibres such as Dyneema, Animated Knots' approximate figures (after Atlantic Braids) put the first bury mark about 40 x the rope diameter from the end and the entry to the adjustable section about 75 x the diameter further on; for less slippery polyester, nylon or polyolefin rope about 25 x and 50 x. Leave the long end untapered so it acts as a stopper and is less likely to be pulled into the adjustable section (Animated Knots 'Whoopie Sling').

### When to use it

- **everyday_examples**: 
  - The Chinese finger trap toy (Wikipedia)
  - A cable-pulling sock on the end of a cable being pulled through a duct or conduit (Wikipedia 'Towing sock'; Kellems)
  - A strain-relief grip holding the weight of a power cord that drops from a ceiling to a machine (Wikipedia 'Towing sock')
  - Expandable braided sleeving on computer or car wiring, which widens when pushed and narrows when pulled (Techflex)
  - Eye splices in hollow-braid Dyneema rope, and finger-trapped parachute suspension lines (Animated Knots; FAA Parachute Rigger Handbook)
- **when_to_use**: When you need to grab the end of something round and fairly firm (a cable, rope, hose or rod) and pull it or hang it, without drilling it, knotting it or crushing it in one spot: pulling cable through conduit or a long duct, hanging a power cord or hose from above, taking strain off a cord where it enters a box, joining two cables temporarily, or making a strong, low-bulk eye in hollow-braid rope. It spreads the grip over a long length, fits a range of diameters, keeps a slim profile that slides through ducts, and comes off again without damage. A whoopie sling gives a light rope loop whose length can be changed: it was developed by and for arborists (with a pulley block), is used in camping to tension a hammock, and in marine yards to balance a load (Animated Knots 'Whoopie Sling').
- **when_not_to_use**: Not for loads that push, twist or come from the side, and not where anything can push back on the tail (it releases): use a clamp, a cable gland or a knot/thimble instead. Not for short or tapered objects, because it needs a long straight length to grip. Not for permanent structural hanging with a pulling grip: use a rated support grip, or a proper end fitting such as a swaged or clamped termination. Not for life-safety lines or anything over people unless it is a rated product used within its working load. Not near live electrical conductors with steel mesh (use non-conductive grips). For a quick adjustable hold on thin cord, a cord lock or cam cleat is easier; for pulling electrical cable with a pulling eye already fitted, use that eye.
- **environment_limits**: Galvanized steel mesh is 'not subject to continuous outside environment' (not for permanent outdoor use); for permanent support Kellems uses tin-coated bronze or stainless steel, and non-metallic aramid grips resist corrosion and have 'superior flex life' but only 'moderate strength' (Kellems catalogue, T-18 and T-29). PET sleeving resists UV, chemicals and abrasion (Techflex). Steel mesh conducts electricity (Klein: 'Do NOT use on live circuits'). Shaking, flapping or 'inquisitive fingers' can walk a loose tail out, so stitch, band or tape it (Animated Knots; Kellems). *(unverified parts omitted)*
- **safety_notes**: Pulling harder on a finger trap only tightens it; a strong trap (e.g. TPU) 'can be rather difficult to take off by yourself' (Nikorasu, Printables), and a toy is not a restraint (Wikipedia). Wire-mesh grips carry large loads: Kellems warns that misuse 'may result in property damage, personal injury or death', says grips must be installed by a qualified person, never used at their rated breaking strength, never altered, only attached at the pulling eye, and discarded if damaged. Do not use steel grips on or near live circuits (Klein); Kellems makes non-conductive aramid grips for utilities. A home-made splice or whoopie sling is not rated: never rely on one to hold a person, for example as hammock suspension; use rated, tested gear for that. *(unverified parts omitted)*
- **common_failures**: Slips off: grip too big for the cable, cable not pushed in far enough, tail not banded, or the tail pushed back by an obstruction or pulley (Kellems T-15, T-17). Breaks or pulls apart: overload beyond the working load, or a mesh already damaged, kinked, corroded or abused (Kellems T-18). The jacket slides off the core: the mesh grips only the outside, so fibre-optic cable makers strip a short section of jacket so the grip also holds the strength member (Kellems T-56). Twisting damage on long pulls: fit a ball-bearing swivel between grip and pull line (Kellems). Rope splice pulls out: bury too short, no taper, or not stitched or locked (Animated Knots). Toy breaks: strips over-stretched by a hard pull (Wikipedia).
- **related**: 
  - Cable gland and strain relief: a nut and seal that clamp a cable where it passes through a wall; seals, but grips only a short length
  - Cord lock (spring toggle): a spring plunger that pinches a thin cord; adjustable with one hand, but for very light loads
  - Cam cleat and clam cleat: grip a rope harder as it pulls back, using toothed cams or grooves instead of a woven tube; hold a rope mid-length and release quickly
  - Granular jamming gripper (coffee-balloon gripper): also holds by jamming, but uses loose grains squeezed by vacuum instead of a braid squeezed by tension
  - Wrap-spring clutch: a coil wrapped round a shaft that tightens when dragged one way, the same self-energising idea in metal
  - Collet: a slotted sleeve squeezed onto a rod by a taper or nut; much stiffer and more precise, but needs tightening
  - Capstan (rope wrapped round a drum): friction that grows along the wrap, used to hold big loads with a small pull
  - Friction hitch (Prusik knot): a cord wrapped round a rope that grips when loaded and slides when relaxed; a knot, not a tube
  - McKibben artificial muscle (braided pneumatic muscle): the same braided sleeve, inflated from inside, turns pressure into a pull; braid angles below 54.7° contract (IOP review)
  - Rope splices: eye, short and braided-rope splices that tuck or bury a rope's end to make loops and joins; the buried splices in hollow braid hold by this entry's finger-trap grip

### Pictures, videos and models

- **links**: 
  - [Finger trap toys.jpg, Wikimedia Commons, photo by carol (CarolSpears)](https://commons.wikimedia.org/wiki/File:Finger_trap_toys.jpg): Several woven Chinese finger trap toys, showing the crossing diagonal strips of the braid *(licence: CC BY 2.5)*
  - [Towing sock - 01.jpg, Wikimedia Commons, photo by Anna Frodesiak](https://commons.wikimedia.org/wiki/File:Towing_sock_-_01.jpg): A towing sock seizing the end of a cable so it can be threaded through a tube or tunnel (Haikou, China) *(licence: CC0 1.0 (public domain dedication))*
  - [Hubbell Kellems Wire Management Products, Section T (catalogue PDF)](https://www.farnell.com/datasheets/1644328.pdf): Drawings and photos of closed and split-mesh pulling grips, support grips, strain-relief grips, eye styles, banding, plus selection and safety-factor tables *(licence: © Hubbell; link only)*
  - [Long Bury Splice, Animated Knots by Grog](https://www.animatedknots.com/long-bury-splice-knot): Step-by-step animation of burying a rope's tail up the hollow core of a braided rope, which then grips it like a finger trap *(licence: © Animated Knots; link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Finger Trap (for flexible filament) by Nikorasu, Printables (URL from Printables API, page not opened)](https://www.printables.com/model/1203456-finger-trap-for-flexible-filament): Two flat L-shaped TPU strips, 2 layers thick, printed flat and woven by hand round a pen into a working finger trap; the tab end is glued. Details read through the Printables public API. *(licence: CC BY-NC-SA)* *(unverified parts omitted)*
- **diagram_idea**: Side view of a braided tube around a rod in two states: relaxed (short, wide, strands crossing at a wide angle, rod sliding freely) and pulled (long, narrow, strands nearly parallel to the rod, arrows showing the squeeze), with a small inset showing that pushing the ends together widens it again and releases the rod.
- **sources**: 
  - https://en.wikipedia.org/wiki/Chinese_finger_trap
  - https://en.wikipedia.org/wiki/Towing_sock
  - https://commons.wikimedia.org/wiki/File:Finger_trap_toys.jpg
  - https://commons.wikimedia.org/wiki/File:Towing_sock_-_01.jpg
  - https://commons.wikimedia.org/wiki/Category:Chinese_finger_traps
  - https://www.farnell.com/datasheets/1644328.pdf
  - https://data.kleintools.com/sites/kleintools/files/tool-catalog/18-WirePullingGrips-Catalog.pdf
  - https://www.controlbooth.com/wiki/Kellems-Grip
  - https://www.animatedknots.com/long-bury-splice-knot
  - https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/prh_change1.pdf
  - https://www.techflex.com/general-purpose/flexo-pet
  - https://iopscience.iop.org/article/10.1088/1748-3190/ae66c0
  - https://en.wikipedia.org/wiki/Pneumatic_artificial_muscles
  - https://help.prusa3d.com/article/flexible-materials_2057
  - https://www.youtube.com/watch?v=oj_Vzbmp6y8
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=oj_Vzbmp6y8&format=json
  - https://api.printables.com/graphql/
  - https://www.thingiverse.com/thing:6956625
  - https://www.animatedknots.com/whoopie-sling-knot
  - https://www.greenbelly.co/pages/whoopie-slings

### Other info

- **Fields with unverified parts:** environment_limits, links, make_it_yourself, making_tips_3d_printing, play_and_precision, print_in_place, processes, safety_notes

## 260 Thread-locking hardware (nylon-insert nut, lock washer, split pin)

*self-locking & anti-back-drive.* Nuts, washers and pins that stop threaded joints shaking loose by friction, springiness or a physical block

### What it is

- **plain_name**: Special nuts, washers and pins that stop a nut or bolt shaking loose: a nut with a nylon ring inside that grips the thread, springy or toothed washers, and a soft metal pin pushed through a hole in the bolt and bent over so the nut can't turn
- **term**: Thread-locking hardware (locknuts, locking washers and positive locking pins)
- **aliases**: 
  - nylon-insert lock nut, nyloc nut, Nylock, polymer-insert lock nut, elastic stop nut ('Nyloc' is a registered trademark in Australia; ESNA elastic stop nut is a brand) (Wikipedia 'Nyloc nut')
  - locknut, lock nut, locking nut, self-locking nut, prevailing-torque nut, stiff nut; all-metal types such as the distorted-thread, split-beam or Philidas nut (brand) (Wikipedia 'Locknut'; NASA RP-1228)
  - nylon pellet or patch (e.g. Nylok, brand): a small nylon plug or coating on the thread instead of a ring (Wikipedia 'Nyloc nut'; NASA RP-1228)
  - lock washer: split washer, spring washer, spring lock washer, helical spring washer (DIN 127 B, ASME B18.21.1, NASM 35338); tooth lock washer, star washer or serrated washer (internal, external, countersunk); tab washer; wedge-locking washer (Nord-Lock, brand); conical spring washer or Belleville washer (DIN 6796) (Wikipedia 'Washer (hardware)'; Bolt Science; Nord-Lock user manual)
  - split pin (UK) or cotter pin / cotter key (US); 'split cotter' in the UK; sizes to ISO 1234 / DIN 94 / BS 1574 (Wikipedia 'Split pin'; RoyMech)
  - castellated nut or castle nut, slotted nut: a nut with slots for a split pin (Wikipedia 'Castellated nut')
  - jam nut, lock nut or counter nut: a second, often thin, nut tightened against the first (Wikipedia 'Jam nut')
  - safety wire or lockwire; serrated-face or serrated flange nut; free-spinning locking bolt, e.g. Whizlock (brand) (NASA RP-1228; Bolt Science)
- **family**: self-locking & anti-back-drive
- **other_families**: clamping, magnetic & friction connections, hinges & pivots, everyday fasteners & fixings
- **one_liner**: Ordinary-looking nuts, washers and pins that stop a bolted joint undoing itself: a nylon ring or deformed thread that drags on the bolt, a washer that springs, bites or wedges, or a pin through the bolt that physically blocks the nut.
- **complexity**: A few parts, always used with an ordinary bolt or screw. Nylon-insert nut: a steel, stainless or brass hex nut with a nylon (polyamide) ring fixed in its top (Wikipedia 'Nyloc nut'; Aspen DIN 985 sheet). Lock washer: one split or toothed spring-steel washer, or a glued pair of wedge-locking washers (Nord-Lock user manual). Positive lock: a castellated nut, a bolt with a cross-hole drilled through its threaded end, and a split pin (a doubled-over half-round wire with an eye) (NASA RP-1228; Wikipedia 'Split pin').
- **how_it_works**: Bolts mostly work loose when the joint slips sideways a little, over and over: each slip cancels the thread friction for a moment, and the thread's slope then turns the nut backwards (Bolt Science 'Self-loosening'; the Junker test). Locking hardware fights this in three ways. Friction: a nylon ring slightly smaller than the bolt is squeezed out of shape by the thread and grips it, so the nut needs a 'prevailing torque' to turn even when it isn't tight (Wikipedia 'Nyloc nut', 'Locknut'). Springiness or wedging: a split washer was meant to keep pressure on the nut, though tests show it doesn't work, while a wedge-locking washer pair has ramps steeper than the thread, so turning the nut back would have to stretch the bolt (Bolt Science; Nord-Lock user manual). A physical block: a split pin through a slot in a castellated nut and a hole in the bolt stops the nut turning at all (NASA RP-1228).

### Finder attributes

- **job**: 
  - join and hold: keeps a bolted or screwed joint from shaking loose under vibration, temperature changes or movement (Bolt Science 'Self-loosening')
  - let it move (turn, slide or bend): keeps a nut on a pivot bolt, or a clevis pin in a hinge, while the joint is left free to turn, with no need to clamp it tight (TractorByNet forum; Wikipedia 'Split pin')
- **motion**: none: the hardware itself stays put. When a nylon-insert nut or split pin retains a pivot bolt or clevis pin, the joint it holds is 'rotate'.
- **degrees_of_freedom**: 0 for a clamped bolted joint. 1 (turning about the pin) when it only keeps a pivot bolt or clevis pin from coming out.
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): a prevailing-torque nut resists turning at any position on the thread, even before it is tightened (Wikipedia 'Locknut'); a wedge-locking washer pair blocks loosening because 'the cam angle (α) is greater than the thread pitch (β)' (Nord-Lock user manual); a castellated nut with a split pin is a 'positive locking device' that can't turn at all (Wikipedia 'Castellated nut')
  - one-way (moves freely one way, locks the other): split spring washers and toothed washers are meant to let the nut tighten but bite when it turns back, and nylon-insert nuts can only be fitted one way up, with the nylon end away from the joint (Wikipedia 'Washer (hardware)'; Aspen DIN 985 sheet). Tests show split washers don't actually stop loosening (see rules_of_thumb)
- **holding_principle**: 
  - friction or clamping (force-fit): nylon-insert and all-metal prevailing-torque nuts drag on the thread; jam nuts lock two nuts against each other (Wikipedia 'Nyloc nut', 'Jam nut'; Bolt Science)
  - shape (the parts interlock; form-fit): a split pin through a castellated nut and a cross-drilled bolt, safety wire, tab washers, and the teeth of star, serrated or wedge-locking washers that dig into the surfaces (NASA RP-1228; Wikipedia 'Washer (hardware)'; Nord-Lock user manual)
  - spring force (a spring or springy part presses it in place): split spring washers and conical spring washers (DIN 6796). Only conical spring washers are designed to keep clamp force as the joint settles; split washers flatten early and don't lock (Bolt Science 'Helical spring washers')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: nylon-insert nuts and lock washers come off with a spanner. The split pin is pulled out with pliers but should then be thrown away and replaced (Wikipedia 'Split pin').
- **reuse_cycles**: a few times. Nylon-insert nuts 'may be re-used a limited number of times' (Aspen DIN 985 sheet); the ISO 2320 standard checks locking up to the 5th removal and warns that re-use reduces prevailing torque (ISO 2320:2015 abstract via iTeh); all-metal deformed-thread locknuts can be re-used about 10 times (NASA RP-1228 p.7); a nylon pellet 'will also be damaged quickly by reassembly' (NASA RP-1228 p.7). Split pins: once, because bending fatigues them (Wikipedia 'Split pin'). Authorities disagree on re-using nylon-insert nuts: the FAA allows re-use if the prevailing torque is still in specification, while a US Air Force order requires new ones in critical places (Wikipedia 'Nyloc nut').
- **tools_needed**: Two spanners or a spanner and a screwdriver: a prevailing-torque nut has to be turned with a spanner all the way on, not spun on by hand (Wikipedia 'Locknut'). For split pins: a drill to cross-drill the bolt or pin (or buy it drilled), and pliers to spread and bend the legs; 'hammer lock' split pins are set with a hammer (Wikipedia 'Split pin'). Safety wire needs a drilled bolt head and lockwire pliers (NASA RP-1228).
- **seal**: none. The nylon collar of a nylon-insert nut 'provides some sealing action from gas and moisture leakage' along the thread (NASA RP-1228 p.7), but it is not a seal.
- **load**: As strong as the bolted joint it locks (light to heavy, depending on the bolt): the locking part adds no strength of its own. Split pins are soft metal and should not be used to resist strong shear forces (Wikipedia 'Split pin'). A castellated nut and split pin 'works extremely well for low-torque applications such as holding a wheel bearing in place' (NASA RP-1228 p.7). Locking hardware can't save a joint whose clamp force is too low to stop it slipping sideways: the bolt will then wear or break from fatigue even if the nut stays on (Bolt Science).
- **adjustable**: yes for prevailing-torque nuts: they stay wherever you leave them on the thread, so you can set a pivot to turn freely or fine-tune a bed-levelling screw (TractorByNet forum; Prusa forum 'Nylock mod'). Castellated nuts adjust only in steps of one slot, usually 1/6 turn (six slots) (NASA RP-1228 p.7). Lock washers: no.
- **play_and_precision**: not applicable for a clamped joint. On a castellated nut and split pin, the nut can only stop at one of its slots, so bearing preload is set in 1/6-turn steps (NASA RP-1228 p.7). A nylon-insert nut can be set at any angle.
- **access_needed**: both sides for a bolt and nut: hold the bolt head while turning the locknut, and reach both ends of a split pin's hole. One side only (blind) for a screw into a tapped hole with a locking washer, where the tapped hole does the rest (Nord-Lock user manual 'Tapped holes').
- **materials**: Nylon-insert nuts: zinc-plated steel, A2 or A4 stainless or brass, with a polyamide (nylon) insert (Aspen DIN 985 sheet). Split pins: mild steel, brass, bronze, stainless or aluminium (Wikipedia 'Split pin'), usually zinc-plated low-carbon steel (RoyMech). Split washers: hardened carbon steel, also aluminium, bronze, stainless and Monel (NASA RP-1228 p.9). Wedge-locking washers: steel or stainless, and they must be harder than the surfaces they sit on. Nord-Lock does not recommend them on 'very soft mating surfaces — for example, wood and plastic' (Nord-Lock user manual p.3). Toothed washers bite best into soft metals such as aluminium (Wikipedia citing Carroll Smith), but they scratch and damage the surfaces, which can start cracks and corrosion (NASA RP-1228 p.10). The joint can be metal, wood or plastic, but in wood and plastic the clamped material itself squashes and creeps over time (see environment_limits).
- **maker_difficulty**: easy: buy the part and fit it with ordinary spanners and pliers. The only extra jobs are drilling a cross-hole for a split pin, and designing a deeper pocket in 3D prints for the taller nylon-insert nut.

### Making it

- **processes**: 
  - off-the-shelf part: always bought
  - 3D print (FDM): printed parts get hex pockets (nut traps) for nylon-insert nuts, holes for bolts, and loops or holes for clevis pins with split pins (Hubs; Thingiverse bed-level knob models)
  - CNC: drill the cross-hole for a split pin, or machine a castellated nut seat
  - sheet metal: toothed and wedge-locking washers under nuts on metal panels *(unverified parts omitted)*
- **print_in_place**: no: the locking parts are metal hardware fitted after printing. Printed split pins and snap pins exist, but they are a different joint (see Related).
- **making_tips_3d_printing**: 1) Use real metal locking hardware with printed parts rather than printing it. 2) Nylon-insert nuts are taller than plain nuts, so make the nut pocket deeper: DIN 985 thin nylon-insert nuts are 5 mm tall for M4 and M5, 6 mm for M6 and 8 mm for M8, with the same across-flats as plain nuts (7, 8, 10 and 13 mm) (Aspen DIN 985 sheet). Hubs suggests starting with a 0.2 mm offset around the nut (0.1 mm each side) for a loose fit, then adjusting by test prints, and a wall at least as thick as the fastener diameter (Hubs threaded fasteners guide). Tolerance-test prints such as the 'Nutchecker' step the pocket size by 0.05 mm (Thingiverse). 3) Fit the nut with the nylon end facing away from the part; it only works one way up (Aspen DIN 985 sheet), and leave about two threads of the bolt sticking out beyond the nylon so the insert fully grips (Fastener Training Minute 157). 4) A nylon-insert nut needs torque all the way along the thread, so the hex pocket must stop it turning. 5) Best use in prints: pivots and adjusters. Because the nylon grips even when the nut isn't tight, you can leave a printed hinge or lever just snug so it turns freely while the nut stays put (TractorByNet forum: 'the nyloc is serving the same purpose as a cotter pin would'). Printed bed-levelling knobs hold a nylon-insert nut for the same reason: plain threaded inserts 'do not hold screw over time due to vibrations from stepper motor' (Thingiverse 'Bed level knob for M4 nylock nut'). 6) Don't expect locking hardware to keep a printed joint tight: the plastic under the nut or washer creeps and 'can compress over time and reduce clamping force even when the fastener has not rotated' (FilamentSpecs creep guide). Spread the load with a large flat washer, and for clamped joints consider metal spacers or heat-set inserts. 7) Skip split spring washers and wedge-locking washers on printed plastic: split washers don't lock even in steel (NASA RP-1228: 'useless for locking'), wedge-locking washers are not recommended for plastic (Nord-Lock user manual), and toothed washers dig into and damage soft surfaces (NASA RP-1228). *(unverified parts omitted)*
- **off_the_shelf_parts**: Wikipedia); 'all-metal prevailing torque nut', 'distorted thread lock nut', 'split beam lock nut' (NASA RP-1228; Wikipedia 'Locknut'); 'serrated flange nut' or 'flange lock nut'; 'keps nut' or 'K-lock nut' (nut with a captive star washer) (Wikipedia 'Locknut'); 'jam nut' or 'thin nut'; 'castellated nut', 'castle nut' or 'slotted nut'; 'split pin' or 'cotter pin' (ISO 1234 / DIN 94), often sold in assortment boxes, plus 'clevis pin' with a cross-hole (RoyMech; Wikipedia); 'spring lock washer' or 'split washer' (DIN 127 B); 'internal / external tooth lock washer' or 'star washer'; 'wedge-locking washer' (Nord-Lock, brand); 'conical spring washer' (DIN 6796); 'tab washer'; 'safety wire' or 'lockwire'; and bolts with a 'pre-applied threadlocker patch' or 'nylon patch' (Nylok, brand) (Wikipedia 'Washer (hardware)'; Bolt Science; NASA RP-1228). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Clamp force comes first: 'the key to preventing self loosening' is enough clamp force to stop the joint slipping sideways, allowing for settling, then a proven locking device (Bolt Science 'Self-loosening of bolts and nuts').
  - In Junker (sideways vibration) tests, 'the chemical locking category provides the greatest resistance to vibration loosening, followed by the free spinning locking fastener' (serrated flange types); prevailing-torque nuts such as nylon-insert nuts are also a proven type. 'Loose washers, of the plain or spring variety, are not generally advisable' (Bolt Science 'Self-loosening').
  - Split (helical) spring washers don't lock: they 'flatten out at between 10% to 20% of the target preload' for property class 8.8 and stronger bolts (Bolt Science 'Helical spring washers'); NASA: 'a lockwasher of this type is useless for locking' (NASA RP-1228 p.9). DIN withdrew several lock-washer standards in 2004 for this reason (Bolt Science).
  - Nylon-insert nuts work from -50 °C to +120 °C; all-metal prevailing-torque nuts from -50 °C to +150 °C (ISO 2320:2015 notes, via iTeh abstract). Wikipedia (citing Carroll Smith) and NASA both give about 250 °F (121 °C) as the nylon limit (Wikipedia 'Nyloc nut'; NASA RP-1228 p.7).
  - Leave about two full threads of the bolt sticking out beyond the nylon insert so that it fully grips; 2-3 threads is the general rule for any nut (Fastener Training Minute 157, Fasteners Clearinghouse).
  - Re-use: prevailing torque drops with each re-use; ISO 2320 type-tests to the 5th removal (ISO 2320:2015 abstract). NASA gives about 10 re-uses for all-metal deformed-thread nuts (NASA RP-1228 p.7). Split pins are single-use (Wikipedia 'Split pin').
  - Choose a split pin by the hole it goes in: ISO 1234 split pins are named by hole size, and the pin itself is slightly thinner (e.g. size 2.0 has a 1.8 mm pin, size 3.2 a 2.9 mm pin, size 4.0 a 3.7 mm pin) (RoyMech). Wikipedia's table pairs a 2 mm pin (2.4 mm hole) with an M8 bolt and a 3 mm pin (3.4 mm hole) with M12-M14 (Wikipedia 'Split pin', from Jensen 2001).
  - Castellated nut: tighten to the specified torque, then turn to the nearest slot that lines up with the hole and fit the split pin. Wikipedia says turn forward (tighter); NASA says forward or backward depending on preference (Wikipedia 'Castellated nut'; NASA RP-1228 p.7).
  - Two nuts: the thin nut goes next to the joint, not on top (Bolt Science 'Self-loosening'); tighten the inner nut to about a quarter to a half of the outer nut's torque, hold it, then tighten the outer nut fully (Wikipedia 'Jam nut'). NASA calls jam nuts 'too unpredictable to be reliable' except where they carry no tension, e.g. on a turnbuckle (NASA RP-1228 p.7).
  - Wedge-locking washers need surfaces softer than the washer, one pair under the bolt head and another under the nut in a through-hole, and are not recommended for wood or plastic (Nord-Lock user manual pp.3-4).

### When to use it

- **everyday_examples**: 
  - A car's front wheel-bearing nut held by a castellated nut, or a slotted nut cover, and a split pin (Wikimedia Commons 'Car hub cotter pin.jpg'; NASA RP-1228)
  - Nylon-insert nuts on the pivot bolts of tractor loader and backhoe linkages, left un-tightened so the joint moves (TractorByNet forum)
  - The 'Nylock mod' on Prusa MK3 3D printers, where nylon-insert nuts on the heated bed's screws are used to fine-tune levelling (Prusa forum)
  - A split pin through a clevis pin on a trailer hitch or garden-machinery linkage; split pins 'are frequently used to secure other fasteners, e.g. clevis pins' (Wikipedia 'Split pin')
- **when_to_use**: Use locking hardware on any bolted joint that vibrates, moves, flexes or heats and cools: machines with motors, vehicles, bikes, printers and robots (Bolt Science). Use a nylon-insert nut when the nut must stay at a set position without being tightened hard, e.g. a pivot bolt, a levelling or adjusting screw, or a bolt through wood or a 3D print that can't take much clamping. Use a castellated nut with a split pin, or safety wire, when the lock must be positive and easy to check by eye, e.g. a wheel-bearing nut on a trailer or kart (NASA RP-1228; Wikipedia 'Castellated nut'). Use a split pin, or an R-clip, to keep a clevis pin in a linkage (Wikipedia 'Split pin').
- **when_not_to_use**: Don't rely on a split spring washer as a lock: use a nylon-insert or all-metal locknut, a wedge-locking washer on metal, or liquid threadlocker instead (Bolt Science; NASA RP-1228). Don't use nylon-insert nuts above about 120 °C, e.g. near exhausts, engines or hot ends: use an all-metal locknut or safety wire (ISO 2320; NASA RP-1228). Don't use them where the joint is taken apart every day: they wear out, so use a tool-free fastener (wing nut, thumbscrew, hitch pin and R-clip) or a quick-release pin instead. Don't use wedge-locking washers or toothed washers on wood or plastic (Nord-Lock user manual; NASA RP-1228). Don't use a split pin to carry real shear load, since it is soft; it only stops something turning or sliding out (Wikipedia 'Split pin'). If the joint should never come apart, liquid threadlocker (see Anaerobic adhesive) is stronger and simpler.
- **environment_limits**: Nylon inserts: -50 °C to +120 °C (ISO 2320:2015 note); about 250 °F (121 °C) (Wikipedia 'Nyloc nut'; NASA RP-1228), and 'certain chemicals' also limit them (Aspen DIN 985 sheet). All-metal prevailing-torque nuts: -50 °C to +150 °C (ISO 2320). Wedge-locking washers: steel -50 °C to 200 °C, stainless -160 °C to 500 °C (Nord-Lock user manual p.4). Plain steel parts rust outdoors, so use zinc-plated or stainless hardware. Vibration is exactly what they are for, but combined sideways and axial loads can still make prevailing-torque nuts come completely loose (Bolt Science, Fastener and Fixing 2009 article summary). In plastic and wood the clamped material creeps, so clamp force fades even if the nut doesn't turn (FilamentSpecs creep guide; Bolt Science on embedding and relaxation).
- **safety_notes**: Locking hardware that fails can let wheels, brakes or linkages come apart: a 2007 UK train derailment was traced to nuts, fitted with helical spring washers, that came completely off their bolts (Bolt Science 'Helical spring washers'). Use new split pins and, on safety-critical parts, new locknuts; a US Air Force order requires replacing self-locking nuts in critical areas (Wikipedia 'Nyloc nut'). *(unverified parts omitted)*
- **common_failures**: 1) Nut still works loose because the joint was never tight enough to stop it slipping sideways; the bolt may then also break from fatigue (Bolt Science). 2) Split spring washer flattened and gives no lock; nut backs off (Bolt Science; NASA RP-1228). 3) Nylon-insert nut re-used too many times or overheated, so it now spins freely (ISO 2320; NASA RP-1228). 4) Bolt too short: the thread doesn't reach through the nylon ring, so the lock never engages (Fastener Training Minute 157). 5) Nylon-insert nut fitted upside down (Aspen DIN 985 sheet). 6) Split pin re-used, not bent over, or too small for its hole, so it fatigues, breaks or falls out (Wikipedia 'Split pin'; RoyMech). 7) Castellated nut backed off to line up a slot, so the preload is lost (Wikipedia 'Castellated nut' says turn forward). 8) Jam nuts in the wrong order or at the wrong torques, so both turn together (Bolt Science; NASA RP-1228). 9) Toothed washers scratch the surfaces, starting cracks and corrosion (NASA RP-1228). 10) In plastic or wood, clamp force fades as the material creeps and settles (FilamentSpecs; Bolt Science).
- **related**: 
  - Anaerobic adhesive (threadlocker, retaining compound): liquid locking that gave the greatest resistance to vibration loosening in Bolt Science's summary; permanent or semi-permanent
  - Ordinary screw joint (bolt and nut, machine screw): the joint this hardware protects; enough clamp force matters more than the lock
  - Retaining ring (circlip, E-clip): holds a part on a grooved shaft, where a split pin needs a cross-hole
  - Tool-free fasteners (thumbscrew, wing nut, hitch pin and R-clip): an R-clip does a split pin's job but can be removed and re-used by hand
  - Quick-release pin (ball-lock pin): a pin that locks itself with spring balls, for joints taken apart often
  - Clevis joint (fork-and-pin joint): the pivot most often held by a split pin or R-clip
  - Captive nut pocket (nut trap) and heat-set threaded insert: ways to put a metal thread into a 3D print; a nylon-insert nut can sit in a nut trap
  - Wave and disc springs (compact axial springs): conical spring washers (DIN 6796) keep clamp force as a joint settles, which split washers don't
  - Snap pin (split-leg push-in pin): a printed or plastic pin with springy legs, not the same as a metal split pin

### Pictures, videos and models

- **links**: 
  - [Nylon Lock Nut.png (Btarski, Wikimedia Commons, 2007)](https://commons.wikimedia.org/wiki/File:Nylon_Lock_Nut.png): Photo of a nylon-insert lock nut showing the nylon ring in the top of the nut *(licence: GFDL 1.2 or CC BY-SA 3.0)*
  - [CotterPins.svg (Kivaan, Wikimedia Commons, 2007)](https://commons.wikimedia.org/wiki/File:CotterPins.svg): Diagram of a split pin new (A) and fitted with its legs bent back (B), an R-clip (C) and the pin's half-round cross-section (D) *(licence: Public domain)*
  - [Castellated Nut (new).png (Btarski, Wikimedia Commons, 2007)](https://commons.wikimedia.org/wiki/File:Castellated_Nut_(new).png): Photo of an unused castellated (castle) nut with its slots for a split pin *(licence: GFDL 1.2 or CC BY-SA 3.0)*
  - [Wedge Locking Washer.jpg (Doctorfastener, Wikimedia Commons, 2019)](https://commons.wikimedia.org/wiki/File:Wedge_Locking_Washer.jpg): The two halves of a wedge-locking washer, showing the ramps (cams) on one face and the radial teeth on the other *(licence: CC BY-SA 4.0)*
  - [Nuts & Bolts - Lock Washer & Lock Nut Vibration Test (Hacks by Dad, YouTube; title confirmed via oEmbed, not watched)](https://www.youtube.com/watch?v=4H-HOHZ3chA): A home vibration test comparing lock washers and lock nuts *(licence: link only (YouTube))*
- **make_it_yourself**: 
  - [Bed level knob for M4 nylock nut (JGFTW, Thingiverse)](https://www.thingiverse.com/thing:4618066): Printable 3D-printer bed-levelling knob that holds an M4 nylon-insert nut so the levelling screw stays where you set it despite stepper-motor vibration *(licence: CC BY 4.0)*
  - [Thumbwheel for M3 standard and nyloc nuts (andygock, Thingiverse)](https://www.thingiverse.com/thing:39459): Printable thumbwheel that clamps tightly around an M3 plain or nylon-insert nut, used for bed levelling on a Prusa Mendel *(licence: CC BY-SA 4.0)*
  - [Nutchecker - M3 - M4 - M5 - M6 (tolerance test) (ginoadriano, Thingiverse)](https://www.thingiverse.com/thing:6043489): Test print with hex pockets that grow by 0.05 mm per step, for finding the right nut-trap size on your printer before designing pockets for locknuts *(licence: CC BY 4.0)*
  - [Nord-Lock Wedge-Locking Washers - Junker Vibration Test (Nord-Lock Group, YouTube; title confirmed via oEmbed, not watched)](https://www.youtube.com/watch?v=IKwWu2w1gGk): Manufacturer video of the Junker sideways-vibration test used to compare locking methods (brand demonstration) *(licence: link only (YouTube))*
- **diagram_idea**: Three side-by-side cut-away sketches of a bolt and nut: (1) a nylon-insert nut with the nylon ring squeezed onto the thread and arrows for the grip, (2) a castellated nut with a split pin through a slot and the bolt's cross-hole, legs bent back, (3) a flattened split washer crossed out, with a small inset showing sideways slip of the joint as the real cause of loosening.
- **sources**: 
  - https://en.wikipedia.org/wiki/Nyloc_nut
  - https://en.wikipedia.org/wiki/Locknut
  - https://en.wikipedia.org/wiki/Washer_(hardware)
  - https://en.wikipedia.org/wiki/Split_pin
  - https://en.wikipedia.org/wiki/Castellated_nut
  - https://en.wikipedia.org/wiki/Jam_nut
  - https://ntrs.nasa.gov/api/citations/19900009424/downloads/19900009424.pdf
  - https://www.boltscience.com/pages/vibloose.htm
  - https://www.boltscience.com/pages/helicalspringwashers.htm
  - https://www.boltscience.com/pages/junkertestvideo.htm
  - https://standards.iteh.ai/catalog/standards/cen/2479d383-c8c7-43e0-bcb6-2d5ad3ffa1c3/en-iso-2320-2015
  - https://www.aspenfasteners.com/content/pdf/Metric_DIN_985_spec.pdf
  - https://www.nord-lock.com/shop/private-use/how-it-works/
  - https://www.nord-lock.com/globalassets/mediavalet/web-assets/downloads/user-manual/00095_nl_user_manual_nlo_2026_v01_digital2.pdf
  - https://roymech.org/Useful_Tables/Circlips/Split_Cotter_Pins.html
  - https://roymech.org/Useful_Tables/Circlips/index.html
  - https://news.fastenersclearinghouse.com/ftm-157-thread-stick-out/
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://filamentspecs.com/creep-resistance-3d-printed-parts/
  - https://www.tractorbynet.com/forums/threads/nyla-nuts.430100/post-5823756
  - https://forum.prusa3d.com/forum/original-prusa-i3-mk3s-mk3-user-mods-octoprint-enclosures-nozzles/guide-nylock-mod-for-mk3-and-mk3s/
  - https://www.thingiverse.com/thing:4618066
  - https://www.thingiverse.com/thing:39459
  - https://www.thingiverse.com/thing:6043489
  - https://commons.wikimedia.org/wiki/File:Nylon_Lock_Nut.png
  - https://commons.wikimedia.org/wiki/File:CotterPins.svg
  - https://commons.wikimedia.org/wiki/File:Castellated_Nut_(new).png
  - https://commons.wikimedia.org/wiki/File:Wedge_Locking_Washer.jpg
  - https://commons.wikimedia.org/wiki/File:Car_hub_cotter_pin.jpg
  - https://www.youtube.com/oembed (titles of 4H-HOHZ3chA and IKwWu2w1gGk)

### Other info

- **Fields with unverified parts:** making_tips_3d_printing, off_the_shelf_parts, processes, safety_notes

## 292 Weight-activated gripping tongs (lifting tongs, lewis)

*self-locking & anti-back-drive.* Scissor-like tongs, or a wedged plug in a stone (a lewis), whose grip tightens as the load hangs from them, so the heavier the load the harder they bite

### What it is

- **plain_name**: Big scissor-like tongs, or a set of steel wedges or pins slipped into a hole in a stone, that hang from a crane hook and grip harder the heavier the thing they lift, because the load's own weight squeezes the jaws shut
- **term**: Weight-activated lifting tongs (gravity-actuated scissor grab) and lewis
- **aliases**: 
  - lifting tongs, lifting grabs, below-the-hook lifting device (Mazzella; ASME B30.20 category, Bushman)
  - scissor tongs, scissors tongs, pressure tongs, gripping tongs, supporting tongs, tong grab (Bushman, 'Application Basics for Lifting Tongs'; Crosby Airpes)
  - self-closing lifting tongs (patent EP0790211)
  - ice tongs, ice block tongs (CooksInfo)
  - log tongs, timber tongs, log lifting tongs (Crosby Airpes; vendor listings)
  - stone tongs, kerb lifter or curb lifter, slab lifter, external lewis, 'dogs' and 'dog holes' (Wikipedia, Lewis)
  - Steinzange, Steinschere (German: stone tongs, stone scissors; Wikimedia Commons category Stone lifting tools)
  - lewis, lewisson, lewis hole, lewis pins (Wikipedia, Lewis; YouTube)
  - three-legged lewis, dovetailed lewis, St Peter's keys, Wilson bolt, three pin lewis (Wikipedia; YouTube 'Three Pin Lewis Demonstration')
  - two-pinned lewis, chain-linked lewis (chain lewis), split-pin lewis (Wikipedia, Lewis)
  - billet, ingot, slab, drum, sheet, pallet, beam, coil and pipe tongs (Bushman; Crosby Airpes) *(unverified parts omitted)*
- **family**: self-locking & anti-back-drive
- **other_families**: clamping, magnetic & friction connections, quick-release & tool-free
- **one_liner**: Weight-activated tongs and the lewis turn the pull of the crane hook into a squeeze (or a wedging force inside a hole) on the load, so the grip grows in step with the load's weight and lets go once the load is set down.
- **complexity**: A few parts. Scissor tongs: two crossed arms on a centre pin, two short links (or a chain) joining the top ends of the arms to a shackle or bail, and jaws with friction pads or hardened points; an optional automatic latch holds them open between lifts (Bushman; 507 Mechanical Movements no. 494). Lewis: two or three steel legs or pins with a shackle and bolt, rings or a short chain; the three-legged lewis has two flared outer legs and a parallel middle leg held by a shackle (Wikipedia, Lewis; 507 Mechanical Movements no. 493).
- **how_it_works**: Pulling up on the shackle pulls the two links, which pull the upper ends of the arms together; because the arms cross at a pin, the lower jaws are forced inwards against the load, so 'the greater the weight the harder the tongs bite' (507 Mechanical Movements no. 494). A simple four-bar analysis gives the squeeze on the load as proportional to the load (including the tongs' own weight), multiplied by a ratio of link lengths, and the load stays put as long as the friction at each jaw (squeeze x friction coefficient) exceeds the half-weight each jaw carries (Bushman). Pointed jaws also dig into the load, so it is partly held by shape (Bushman; CooksInfo). A lewis does the same inside a prepared hole: the stone's weight acts on long lever arms and creates very high reaction and friction where the short ends press on the hole's walls; the three-legged lewis also locks by its dovetail shape (Wikipedia, Lewis).

### Finder attributes

- **job**: 
  - join and hold: grips a heavy block, log, slab or stone so it can be lifted, with no rigging point needed on the load (Mazzella)
  - lock, and release by hand: holds while the load hangs and lets go once the load is set down and the tongs are opened by hand or by an automatic latch (Bushman)
- **motion**: rotate: the arms swing a little about the centre pin to open and close the jaws over their grip range; once gripping, nothing moves. A lewis doesn't move once seated (none)
- **degrees_of_freedom**: 1 while opening or closing: the arms and links form a four-bar linkage (Bushman: 'most of them can be broken down into a simple four-bar linkage'), so the two jaws open and close together; 0 once gripping. A seated lewis has 0.
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): the heavier the load, the harder the jaws squeeze, so the load can't pull itself out (507 Mechanical Movements no. 494; Crosby Airpes: 'The gripping force increases as the load gets heavier')
  - hand-release only (locks under load, releases when a person operates it): the tongs can't open while the weight hangs; they open only when the load is set down and the tension comes off (Bushman)
  - quick-release: tongs with an automatic latch lock open when set down on the floor, so the hoist can lift them clear without anyone handling the arms (Bushman; YouTube 'Automatic Latching of Tong Grab') *(unverified parts omitted)*
- **holding_principle**: 
  - friction or clamping (force-fit): pads squeeze the sides of the load; the friction must exceed the weight carried at each jaw (Bushman: 'Fy < Fx fo')
  - shape (the parts interlock; form-fit): hardened points dig into the load (Bushman; ice tongs' picks 'to dig into the block of ice', CooksInfo), and the three-legged lewis locks by its dovetail shape, 'the safest' type (Wikipedia, Lewis)
- **input_output**: Input: vertical pull on the bail (load + tongs weight, L) -> output: horizontal squeeze at each jaw, Fx = L(B + C) / (2(D + A)), where B, C and A, D are lever lengths of the links and arms (Bushman). ASME B30.20 calls Fx / load the 'grip ratio'; Bushman recommends more than 1 where points penetrate the load, 2 or more for friction-only grips, usually 1 to 2 for gripping tongs that reach below the middle of round loads, and as low as 1/2 for supporting tongs that hold the load from underneath. Shaft arrangement: not applicable. Back-drivable: no while loaded, the load cannot pry the jaws open; it releases only when the pull stops.
- **power**: passive (no power needed): the load's weight does the clamping; Bushman's paper 'will concentrate on tongs that are activated by gravity (no motorization)'. Electric and hydraulic closing versions exist (Crosby Airpes) but are a different, powered type. If the pull is reduced (the load is set down or bumps on something), the grip drops with it (Wikipedia, Lewis)
- **removability**: tool-free quick release: tongs open once the load is down (by hand or an automatic latch). A lewis is lifted out of its hole after the stone is bedded, and the lewis hole in visible stones is patched with a matching plug (Wikipedia, Lewis)
- **reuse_cycles**: effectively unlimited for the tool itself if inspected and maintained (Bushman: a tong 'will outlast most other types of material handling equipment'); pads and points wear and are made replaceable (Bushman)
- **tools_needed**: None to use tongs beyond a hoist, crane or two people for manual kerb lifters (Wikipedia, Lewis). A lewis needs a drill or chisel to cut the lewis hole, a spanner for the shackle bolt, and metal shims to pack a loose lewis (Wikipedia, Lewis).
- **seal**: none
- **load**: light to heavy: from hand-carried ice and log tongs to crane tongs for metal ingots, slabs and concrete highway barriers (Bushman). Strong in a steady straight lift; weak if the load swings, tilts, bumps or is set down partly, because the grip falls as soon as weight is taken off (Wikipedia, Lewis), and in sideways pulls. Edges of the load must bear the weight or the corners crumble and the load drops (Bushman).
- **adjustable**: Partly: each tong has a set grip range; gripping tongs for round loads should keep the ratio of smallest to largest diameter at 0.80 or more, e.g. 10 to 12.5 in pipe (Bushman). Manual kerb lifters are 'large, adjustable' tongs (Wikipedia, Lewis). Pads can be changed for different loads (Bushman).
- **play_and_precision**: Pivot pins and bushings wear: Bushman advises consulting the maker when pins show more than 2-5% wear (obvious indentations), and checking that the legs meet in the centre when closed. *(unverified parts omitted)*
- **access_needed**: Tongs: both sides (the jaws must reach two opposite faces, and there must be headroom above; Mazzella: 'not ideal for low headroom applications'). Lewis: one side only (blind): it works from a hole in the top face, preferably above the centre of mass, so the stone can be lifted where slings can't go under or round it (Wikipedia, Lewis).
- **materials**: Steel arms, links, pins and bails; replaceable pads of rubber or bronze for delicate loads and pins of hardened alloy or tool steel for loads that may be marked (Bushman); composite arms with damping in one patent design (EP0790211). Three-legged lewis: 13 mm thick rectangular steel legs (Wikipedia, Lewis). Works on stone, concrete, ice, timber, steel and even cotton bales (Bushman). *(unverified parts omitted)*
- **maker_difficulty**: easy for a small demonstrator or light grabber (two arms, a pin, two links and a ring); moderate to get a reliable grip on real objects; hard and not a DIY job for anything lifted over people, which needs rated tongs designed to ASME BTH-1 and inspected to ASME B30.20 (Bushman; Mazzella)

### Making it

- **processes**: 
  - off-the-shelf part: lifting tongs (scissor, log, drum, plate, billet), ice tongs, kerb and slab lifters, lewis pins and three-legged lewises
  - sheet metal: steel plate arms cut and drilled for real lifting tools, made by specialist manufacturers (Bushman) *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Get the geometry right: the squeeze grows as the top lever lengths (the 'X-links') grow relative to the lower ones (the 'Y-links'), the same principle as pliers (Bushman, relationship 1); a wider grip range needs taller links and a wider tong to keep the grip ratio up (Bushman, relationship 2). 2) Aim for a grip ratio (squeeze on one side / load) of at least 2 for friction-only jaws; from Bushman's friction condition this only works if the friction coefficient is above 0.25 (derived from Bushman's 'Fy < Fx fo' with Fy = half the load) [derived]. 3) For round objects, let the jaws reach below the object's middle so it is partly carried from underneath, and shape the pads to match the largest diameter (Bushman: pad curvature half of the largest diameter). 4) Print the arms flat so the layers run along the arm; CNC Kitchen found PLA hooks printed standing up failed at only 55% of the load of hooks printed lying flat. 5) Use metal bolts or shoulder bolts as pivot pins and keep the holes snug; worn or bent pins are the first sign of overload (Bushman). 7) Test by lifting just off the ground first, as stonemasons test a lewis (Wikipedia, Lewis), and never lift over people or feet. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'lifting tongs', 'scissor lifting tongs', 'scissor grab', 'tong grab', 'log lifting tongs' or 'timber tongs', 'ice block tongs', 'kerb lifter' or 'curb stone lifter', 'slab lifter', 'drum lifting tongs', 'plate lifting tongs', 'billet tongs', 'automatic latch tongs' (Bushman; Crosby Airpes; Mazzella), 'lewis pins', 'split pin lewis', 'three legged lewis' or 'Wilson bolt' (Wikipedia; YouTube), 'shackle', 'clevis pin', 'shoulder bolt' and 'friction pads'. Rated devices are covered by ASME B30.20 (Below-the-Hook Lifting Devices) and designed to ASME BTH-1 (Bushman; Mazzella). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Squeeze per jaw Fx = L(B + C) / (2(D + A)); L = load + tong weight; the load is safe only while the jaw friction exceeds the half-load each jaw carries, 'Fy < Fx fo', with 'sufficient margin' because friction changes with dust, humidity, oxide films, surface finish, temperature, vibration and contamination (Bushman).
  - Grip ratio (ASME B30.20: horizontal force on one side / load): more than 1:1 where points penetrate the load, 2 or higher for straight friction lifting; 1 to 2 usual for gripping tongs reaching below the centre line of round loads; 1/2 to 1 for supporting tongs (Bushman).
  - Gripping tongs for round loads: smallest/largest diameter should generally not be below 0.80 (e.g. 10 to 12.5 in pipe); pad curvature half the diameter of the largest load (Bushman).
  - Points: leave 1/16 to 1/8 in (1.5 to 3 mm) of point shank free to bite into the load in every position (Bushman).
  - For mill-duty tongs with frequent cycles, designers may allow for shock loading of 150% or more (Bushman); inspect pins and consult the maker at 2-5% wear (Bushman).
  - Lewis: seat it above the stone's centre of mass; drill two-pin lewis holes at about 15 degrees from vertical; use a safety sling until the stone is close to its final position, and test by lifting a small distance first (Wikipedia, Lewis).
  - The three-legged (dovetail) lewis is the safest type because it relies on shape rather than friction alone; the outer legs go in first and the parallel middle leg last (Wikipedia, Lewis).

### When to use it

- **everyday_examples**: 
  - Old-fashioned ice-delivery tongs, which 'ended in picks that pointed in at each other, to dig into the block of ice' (CooksInfo)
  - Kerb stone lifters used by road crews, swung between two people or hung from a machine (Wikipedia, Lewis; Commons photo from Hainan)
  - Lewis holes and 'dog holes' still visible in Roman stonework, old bridges and walls (Wikipedia, Lewis) *(unverified parts omitted)*
- **when_to_use**: Use weight-activated tongs to lift heavy objects that have no lifting point and can't easily have a sling passed round them: stone blocks, kerbs and slabs, logs, ice, concrete barriers, steel billets, drums and hot metal (Mazzella; Bushman; Crosby Airpes). They need no power, are not affected by electromagnetic interference, tolerate heat and shock loading, and are quick to hook on and off (Bushman). Use a lewis when a stone must be lowered exactly into place and slings would be trapped underneath or would damage carved faces: closing stones in a string course, column drums, capitals, coping stones (Wikipedia, Lewis). *(unverified parts omitted)*
- **when_not_to_use**: Avoid them where headroom is low or space is confined (Mazzella), where the load may bump, swing or be partly set down mid-lift, which can let a lewis slip out (Wikipedia, Lewis), and on oily, wet or dusty surfaces that cut friction (Bushman), unless the jaws have points. Soft or delicate loads may be marked or crushed: use supporting tongs, a vacuum lifter or slings instead (Bushman). If the load must be released while still hanging, use a powered gripper or a quick-release hook. Don't improvise lifting tongs for anything lifted over people; buy rated, tested equipment (Bushman; Mazzella).
- **environment_limits**: The grip depends on friction, which is 'sensitive to atmospheric dust and humidity, oxide films, surface finish, temperature, vibration, and the extent of contamination' (Bushman); ice and wet stone are slippery, which is why ice tongs use points (CooksInfo). Steel tongs can be built for hot loads (Bushman). *(unverified parts omitted)*
- **safety_notes**: A dropped load can kill: 'The wrong application or improper use of a tong can cause significant property damage and even the loss of life' (Bushman). A lewis can slip out if some of the stone's weight is taken off, for example when it bumps on scaffolding, so use a safety sling until it is near its final position (Wikipedia, Lewis). Keep fingers clear between jaws and load and when removing packing under a stone (Wikipedia, Lewis: 'dunnage removed with fingers clear'). Rated tongs need inspection under ASME B30.20 and new devices are tested by a qualified person before first use (Mazzella; Bushman). *(unverified parts omitted)*
- **common_failures**: 1) Load slips out because friction is lower than designed, from grease, scale, dust or wet surfaces; keep a margin and use points where marking is acceptable (Bushman). 2) Pads or points worn down, lowering the grip ratio the design relied on; replace them (Bushman). 3) Lewis slips when the stone bumps or the hole is badly cut; test with a small lift and correct the hole or pack with metal shims (Wikipedia, Lewis). 4) Load too wide or narrow for the grip range, so the tong drags on the floor or neighbouring loads (Bushman: keep the diameter ratio at 0.80 or more). 5) Load edges crumble or a long load sags and slides out of supporting tongs (Bushman). 6) Bent pins, cracked links, worn bushings or a worn automatic latch; inspect regularly (Bushman). *(unverified parts omitted)*
- **related**: 
  - Rope grab and ascender (cam rope clamp): a cam that pinches a rope harder as the load pulls, rather than jaws pinching an object
  - Binding-plate lock (tilting friction plate): a tilted plate that jams on a rod under load
  - Woven self-tightening grip (finger-trap grip): a braid that narrows and grips harder when pulled
  - Self-locking wedge (wedge clamp, taper key): a wedge driven in by the load, as the central pin of the classic lewis is (507 Mechanical Movements no. 493)
  - Scissor linkage (lazy tongs): many crossed arms that multiply movement, not a load-driven grip
  - Compliant gripper and force amplifier: multiplies a force someone applies, rather than using the load's weight
  - Fin-ray gripper and vacuum (suction) gripper: other passive or powered grippers for robots
  - Toggle clamp: locks shut over centre by hand, independent of the load's weight *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [507 Mechanical Movements no. 494: Tongs for lifting stones (Brown, 1868; animated)](https://507movements.com/mm_494.html): Animation of scissor stone tongs: the pull on the shackle and links forces the points into the stone; 'The greater the weight the harder the tongs bite' *(licence: book public domain; website animation link only)*
  - [File:Three-legged lewis diagram - 02.png (Wikimedia Commons, Anna Frodesiak)](https://commons.wikimedia.org/wiki/File:Three-legged_lewis_diagram_-_02.png): Diagram of a three-legged (dovetail) lewis: the pieces are inserted 1, 2, 3 into an undercut hole *(licence: CC0 1.0 (public domain dedication))*
  - [File:A lewis in Hainan - 01.jpg (Wikimedia Commons, Anna Frodesiak)](https://commons.wikimedia.org/wiki/File:A_lewis_in_Hainan_-_01.jpg): Workers using a kerb lifter (external lewis, scissor tongs) to place kerb stones *(licence: CC0 1.0 (public domain dedication))*
  - [Three Pin Lewis Demonstration (YouTube, Stephen Critchley Master Stonemason & Stone Carver; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=76zOAf3uXUA): A stonemason demonstrating a three-pin (three-legged) lewis *(licence: link only (standard YouTube licence))*
  - [Automatic Latching of Tong Grab (YouTube, Hussam Bastug; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=WcCxJ-tkP4I): A tong grab's automatic latch holding it open and releasing on alternate set-downs *(licence: link only (standard YouTube licence))*
- **diagram_idea**: A pair of crossed tongs hanging from a hook by two short links, gripping a block: a big arrow for the block's weight, two smaller arrows showing the links pulling the top ends of the arms together, and two arrows at the jaws pressing inwards that grow as the weight arrow grows; beside it, a cut-away stone with a three-legged lewis in a dovetail hole.
- **sources**: 
  - https://507movements.com/mm_494.html
  - https://507movements.com/mm_493.html
  - https://en.wikipedia.org/wiki/Lewis_(lifting_appliance)
  - https://www.bushman.com/wp-content/uploads/files/pdf/technical-papers/application-basics-for-lifting-tongs-technical-paper.pdf
  - https://www.mazzellacompanies.com/learning-center/a-breakdown-of-lifting-tongs-5-benefits-important-industry-standards/
  - https://www.airpes.com/types-of-lifting-tongs/
  - https://patents.google.com/patent/EP0790211A1/en
  - https://www.cooksinfo.com/ice-tongs
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/Category:Stone_lifting_tools
  - https://commons.wikimedia.org/wiki/File:Three-legged_lewis_diagram_-_02.png
  - https://commons.wikimedia.org/wiki/File:A_lewis_in_Hainan_-_01.jpg
  - https://www.youtube.com/watch?v=76zOAf3uXUA
  - https://www.youtube.com/watch?v=WcCxJ-tkP4I

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, everyday_examples, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, print_in_place, processes, related, safety_notes, special_behaviour, when_to_use

