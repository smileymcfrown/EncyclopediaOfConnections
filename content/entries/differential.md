---
title: Differential
description: A small gear train, usually bevel gears inside a spinning cage, that splits one input between two output shafts
  and lets them turn at different speeds (as the inner and outer wheels of a car do on a bend), while always pushing on both
  with the same turning force.
num: 97
term: Differential (bevel gear differential, open differential)
plain_name: A little cage of gears in the middle of an axle that lets the left and right wheels turn at different speeds on
  a bend, while the motor still drives both
aliases:
- diff
- open differential
- bevel differential / bevel gear differential
- ring-and-pinion differential (with the final drive gear that turns the drive through 90 degrees)
- spider gears / planet gears / differential pinions (the small bevel gears inside); side gears / sun gears (the ones on the
  axles)
- differential gear / differential gearing
- ball differential / ball diff (RC-car variant with balls between two plates)
- gear diff / sealed gear differential / oil-filled diff (RC-car variant tuned with silicone oil)
- limited-slip differential (LSD), 'posi' (from Positraction, a trade name)
- locking differential / diff lock / locker; spool (permanently locked axle); welded diff
- Torsen (brand) or torque-sensing differential
- spur-gear differential; epicyclic or planetary differential (centre diffs in all-wheel drive)
- Entwistle's gearing (historic name, 507 Mechanical Movements No. 495)
- Differentialgetriebe / Ausgleichsgetriebe (German)
family: gear trains, gearboxes & transmissions
other_families: []
finder:
  job: [change speed or turning force, let it move, slip or let go when overloaded]
  motion: rotate
  special_behaviour: [motion conversion, torque-limiting]
  holding_principle: [not a holding joint, friction or clamping]
  reuse_cycles: many times
  seal: none
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning]
  shaft_layout: [at an angle, in line]
  overload_response: slips and keeps going
  clicks: not applicable
  tools: [hand tools]
  load_max: heavy
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming:
  adjustable:
    kind: source uncertain
    reason: '`adjustable` is marked [uncertain] here: "…(gear mesh and backlash are set with shims or spacers when assembled
      [uncertain]).…"'
confirmed: []
open_points: []
uncertain_fields: [input_output, power, seal, load, adjustable, processes, print_in_place, making_tips_3d_printing, when_not_to_use,
  safety_notes, common_failures]
diagram_idea: 'A top-down animated axle going round a bend: the cage turns at 10 rpm while the inner wheel turns at 8 and
  the outer at 12, with a live readout ''average = 10''; then one wheel drives onto ice and spins at 20 while the other stops,
  with equal-sized torque arrows on both wheels to show why it gets stuck.'
links:
- url: https://commons.wikimedia.org/wiki/File:Around_the_Corner_(1937)_24fps_selection.webm
  title: Around the Corner (1937), Jam Handy Organization for Chevrolet (Wikimedia Commons video)
  shows: Classic 7-minute animated and model film explaining step by step why a car needs a differential on a bend and how
    the bevel gears do it
  license: Public domain in the United States (published 1931-1963 without copyright renewal); may still be copyrighted in
    some other countries
- url: https://commons.wikimedia.org/wiki/File:Differential_free.png
  title: Differential free.png (Wikimedia Commons, by Wapcaplet)
  shows: 'Colour-coded 3D diagram of a ring-and-pinion differential: ring gear and carrier driving both side gears; paired
    with ''Differential locked-2.png'' showing the planet gear turning on a bend'
  license: GFDL 1.2+ / CC BY-SA 3.0
- url: https://commons.wikimedia.org/wiki/File:BallDifferential.svg
  title: BallDifferential.svg (Wikimedia Commons, by Kivaan)
  shows: Exploded diagram of an RC-car ball differential
  license: Public domain
- url: https://www.youtube.com/watch?v=YjhzkV5Ya2k
  title: Car Differential with Bevel Gears 1 (Nguyen Duc Thang, YouTube thang010146)
  shows: CAD animation of a bevel gear car differential
  license: link only (standard YouTube licence)
- url: https://507movements.com/mm_495.html
  title: '507 Mechanical Movements, No. 495: Entwistle''s patent gearing'
  shows: Historic 1868 drawing (with an animated version) of a bevel differential with one side gear fixed, so the other turns
    twice per turn of the carrier shaft
  license: Book public domain; website animation link only
make_it_yourself:
- url: https://www.printables.com/model/928398-public-domain-differential
  title: Public Domain Differential by Stone Age Sculptor (URL from Printables API, page not opened)
  what_it_is: Classroom demonstration differential with knob, crown (ring) gear, four small gears in a case and two wheels;
    OpenSCAD source script included; printed in PLA+ at 0.16 mm layers; needs supports and a little glue
  license: Creative Commons Public Domain (CC0)
- url: https://www.printables.com/model/232280-differential-fidget
  title: Differential fidget by LazyMaker (URL from Printables API, page not opened)
  what_it_is: 'Simple hand-held bevel differential toy: body, 2 side bevel gears, 2 spider gears, 2 pins, 2 side gears, with
    assembly instructions'
  license: CC BY
- url: https://www.printables.com/model/679842-differential-5-with-limited-slip-rc-unimog-edition
  title: 'Differential #5 with limited slip, RC Unimog edition by Prism08 (URL from Printables API, page not opened)'
  what_it_is: 'Working printed differential with limited slip for a 1/10 RC truck, using small ball bearings; see also the
    author''s RC CAR Differential #3 (model 444446)'
  license: CC BY-NC
- url: https://www.printables.com/model/926631-torsen-differential-limited-slip-differential
  title: Torsen differential - Limited-slip differential by Dmitrii Tomin (URL from Printables API, page not opened)
  what_it_is: Printed showcase model of a Torsen-type limited-slip differential with 608 bearings, 8 mm rods and M4/M5 bolts;
    assembly guide included
  license: CC BY-SA
- url: https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad
  title: 'BOSL2 gears.scad: bevel_gear() (OpenSCAD library)'
  what_it_is: Parametric generator for matched straight, zerol and spiral bevel gear pairs (the parts of a differential),
    with backlash settings
  license: BSD 2-Clause
- url: https://huangyan920.github.io/Mechanical/
  title: 'HUANGYAN920 Mechanical: interactive mechanism animations (entry ''DIFFERENTIAL-GEAR'', no. 44)'
  what_it_is: Browser animation of a bevel-gear differential; its parameter notes are brief, so check numbers elsewhere
  license: MIT
sources:
- https://en.wikipedia.org/wiki/Differential_(mechanical_device)
- https://en.wikipedia.org/w/index.php?title=Differential_(mechanical_device)&action=raw
- https://en.wikipedia.org/wiki/Limited-slip_differential
- https://en.wikipedia.org/w/index.php?title=Limited-slip_differential&action=raw
- https://en.wikipedia.org/wiki/Ball_differential
- https://en.wikipedia.org/w/index.php?title=Ball_differential&action=raw
- https://en.wikipedia.org/wiki/Locking_differential
- https://en.wikipedia.org/wiki/Torsen
- https://en.wikipedia.org/wiki/Bevel_gear
- https://www.rccaraction.com/understanding-differentials/
- https://rcguided.com/how-to-build-a-ball-diff/
- https://rcguided.com/rc-diff-oil-tuning-simplified/
- https://sariel.pl/2009/01/limited-slip-differential/
- https://sariel.pl/2012/05/compact-axle-with-a-differential-lock/
- https://hackaday.io/project/945/logs?sort=oldest&page=4
- https://khkgears.net/new/bevel_gears.html
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html
- https://khkgears.net/pdf/2025/miter-gears.pdf
- https://507movements.com/mm_495.html
- https://507movements.com/toc.html
- https://commons.wikimedia.org/wiki/File:Around_the_Corner_(1937)_24fps_selection.webm
- https://commons.wikimedia.org/wiki/File:Differential_free.png
- https://commons.wikimedia.org/wiki/File:Differential_locked-2.png
- https://commons.wikimedia.org/wiki/File:BallDifferential.svg
- https://commons.wikimedia.org/wiki/File:Spur_gear_differential_(Manual_of_Driving_and_Maintenance).jpg
- https://www.youtube.com/watch?v=YjhzkV5Ya2k
- https://www.youtube.com/watch?v=0yG46eH_kz0
- https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
- https://raw.githubusercontent.com/looooo/freecad.gears/master/README.md
- https://huangyan920.github.io/Mechanical/
- https://api.printables.com/graphql/
- https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
- https://howtomechatronics.com/how-it-works/how-to-3d-print-gears-the-ultimate-guide/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://help.prusa3d.com/article/pla_2062
- https://www.mcmaster.com/products/bevel-gears/
- https://www.mcmaster.com/products/miter-gears/
research: research/connection-types/results/Differential_bevel_gear_differential.json
---

A small gear train, usually bevel gears inside a spinning cage, that splits one input between two output shafts and lets them turn at different speeds (as the inner and outer wheels of a car do on a bend), while always pushing on both with the same turning force.

**In plain words:** A little cage of gears in the middle of an axle that lets the left and right wheels turn at different speeds on a bend, while the motor still drives both. **Proper term:** Differential (bevel gear differential, open differential).

**Also called:** diff; open differential; bevel differential / bevel gear differential; ring-and-pinion differential (with the final drive gear that turns the drive through 90 degrees); spider gears / planet gears / differential pinions (the small bevel gears inside); side gears / sun gears (the ones on the axles); differential gear / differential gearing; ball differential / ball diff (RC-car variant with balls between two plates); gear diff / sealed gear differential / oil-filled diff (RC-car variant tuned with silicone oil); limited-slip differential (LSD), 'posi' (from Positraction, a trade name); locking differential / diff lock / locker; spool (permanently locked axle); welded diff; Torsen (brand) or torque-sensing differential; spur-gear differential; epicyclic or planetary differential (centre diffs in all-wheel drive); Entwistle's gearing (historic name, 507 Mechanical Movements No. 495); Differentialgetriebe / Ausgleichsgetriebe (German).

## How it works

The input gear turns the whole cage (carrier). When both outputs meet the same resistance, the spider gears don't spin on their pin; they are carried round like a solid block and both outputs turn at the cage speed. On a bend one output is held back, so the spider gears start rolling round it, taking speed off that side and adding exactly as much to the other: the cage speed is always the average of the two output speeds, so if one output is held still the other turns twice as fast. Because the spider gears push equally on both side gears, both outputs always get the same turning force (torque), which is why an open differential lets one wheel on ice spin while the wheel with grip gets almost nothing; limited-slip and locking types add friction, thick fluid or a lock to stop that. A ball differential does the same job with balls rolling between two plates pressed together by springs, so it also slips a little by design.

## Parts

A small assembly that acts as one unit. Bevel type: an input gear (the ring gear or crown wheel, driven by a small pinion), a carrier or cage fixed to it, two to four small bevel gears on a cross-pin inside the cage (spider or planet gears), two side gears splined or keyed to the output shafts, plus bearings and usually a housing. Ball type (RC cars): a drive gear or pulley with a ring of holes holding about 2 mm balls, two thrust washers (diff rings or plates), Belleville (dished spring) washers, an adjusting screw or collar, a small thrust bearing and two output cups. Limited-slip types add clutch plates, thick fluid, cams or special worm or spur gears.

## Everyday examples

- The bulge in the middle of a rear-wheel-drive car's or truck's back axle
- RC cars and LEGO Technic vehicles (the grey or black differential gear case in the axle)
- Robot arm wrists where two motors share one joint (e.g. Dan Royer's 3D-printed 5+ axis arm on Hackaday.io)
- Historic machines: mechanical analogue computers and clocks, and Mars rover suspensions (Wikipedia 'Differential')

## When to use it

Use a differential when one motor must drive two wheels on the same axle of a robot or vehicle that has to turn corners without scrubbing its tyres or fighting itself. Also use one to combine two motors into one joint that can move two ways (a pan/roll or pitch/roll robot wrist: both motors turning the same way gives one motion, opposite ways the other), to add or subtract two rotations mechanically, or as a teaching model. Choose a ball diff or a limited-slip type if you want some grip kept on both sides and an adjustable 'feel' (RC racing).

## When not to use it

Skip it if each wheel has its own motor (skid-steer or differential-drive robots): the controller already sets each wheel's speed ⚑ [uncertain] (wording; standard practice). Go-karts and trams simply use a solid axle and accept some wheel slip (Wikipedia 'Differential'). If both wheels must always drive on loose, slippery or uneven ground (rock crawlers, off-road robots), an open differential will spin the wheel with the least grip; use a locker, spool or limited-slip differential instead (Wikipedia 'Limited-slip differential'; Sariel's LEGO LSD). For a single output shaft use a spur, belt or planetary gearbox, and if the output must hold position under load use a worm drive or a brake, because a differential holds nothing by itself.

## Details

- **What it does (jobs):**
  - change speed or turning force: splits one drive between two outputs that may turn at different speeds; the ring-and-pinion input usually also gives a fixed speed reduction and turns the drive through 90 degrees
  - let it move (turn, slide or bend): lets the two output shafts turn relative to each other, e.g. the inner and outer wheels on a bend
  - slip or let go when overloaded: only the friction types; a ball differential or a clutch-type limited-slip differential lets the sides slip against a friction set by springs or an adjusting screw
- **Movement:** rotate: continuous rotation in, two continuous rotations out that can differ in speed (one side can even stop or turn backwards); unlimited range, either direction
- **Directions it can move (degrees of freedom):** 2: the three shafts (input cage and two outputs) are tied by one rule, cage speed = average of the two outputs, so choosing any two speeds fixes the third; a locked differential drops to 1 (both outputs turn together)
- **Special behaviour:**
  - motion conversion (e.g. rotary to linear): not rotary-to-linear, but it adds and averages two rotations, which is why differentials were used to add and subtract in mechanical analogue computers and are used to let two motors share one robot wrist (both motors the same way = one motion, opposite ways = the other)
  - torque-limiting (slips or clicks at a set force/torque): ball differentials and clutch-type limited-slip differentials hold the two sides together by spring-loaded friction, so they slip above a set turning force; on a ball diff the adjusting screw sets how much (Wikipedia 'Ball differential'; Wikipedia 'Limited-slip differential' on spring preload of the clutches)
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it passes rotation from one input to two outputs
  - friction or clamping (force-fit): only in ball differentials and clutch, cone or viscous (thick-fluid) limited-slip differentials, where friction resists the two sides turning at different speeds
- **Input and output:** One rotation in -> two rotations out. Speed: cage (ring gear) speed = average of the two output speeds (Wikipedia 'Differential'); hold one output still and the other turns at twice the cage speed (507 Mechanical Movements No. 495: with three equal bevel gears, gear C makes two revolutions for one of shaft D). Torque: an open differential always gives both outputs equal torque, so the gripping side can get no more than the slipping side takes (Wikipedia 'Limited-slip differential'). A Torsen with a 3:1 torque bias ratio can give one side up to three quarters of the torque (Wikipedia 'Torsen'). Ratio: the pinion driving the ring gear usually has fewer teeth, giving a fixed reduction (the 'axle ratio'); one printed RC differential uses 2:1 (Prism08, Printables). Efficiency: each bevel gear mesh is about 98-99% (KHK); ⚑ [uncertain] a complete differential loses a little more in its pins, thrust washers and bearings, and a ball or limited-slip diff loses more to friction when the sides turn at different speeds. Shafts: the input usually meets the outputs at right angles (intersecting, or offset in hypoid final drives), or is in line with them in spur-gear and planetary types; the two outputs are in line with each other. Back-drivable: yes for open differentials; the wheels can drive it back (a Torsen that loses grip completely is freed by using engine braking or the parking brake, per Wikipedia 'Torsen').
- **Power:** passive (no power needed). Selectable lockers are switched by air (pneumatic), vacuum, a cable or an electric actuator (Wikipedia 'Locking differential'; Sariel's LEGO diff lock uses a small pneumatic cylinder or a motor), and electronic limited-slip differentials use a computer-controlled clutch. ⚑ [uncertain] What happens if that power is lost depends on the design (many selectable lockers return to open).
- **Load:** Medium to heavy for its size in metal, because it carries a vehicle's whole drive torque; in plastic the small spider gears and their thin cross-pin are the weak points. Strong in twist. The bevel side gears push outwards along the axles (thrust) and the pinion pushes away from the ring gear, so the carrier and bearings must be stiff (KHK: bevel gears produce axial thrust; mount them close to bearings). Printed demo differentials are for hand turning and light loads only ⚑ [uncertain] (for any particular model).
- **Play and precision:** Noticeable backlash: there are two bevel meshes in series plus the ring and pinion, so the wheels have some free play; a ball differential has no backlash or free play (RC Car Action). It is not a positioning device, although robot-wrist differentials use it to move a joint, so backlash matters there. It needs the two output shafts on one line and the pinion at the correct mounting distance; misalignment gives noise, uneven wear, binding or skipping teeth (KHK miter gear catalogue on bevel mounting errors).
- **Taking it apart:** removable: it is a set of gears on pins inside a carrier held by screws, pins or clips; RC differentials are routinely opened to change oil or rebuild
- **How often it can be reused:** many times: it can be taken apart and rebuilt repeatedly; the limit is wear of the gears, balls, rings and thrust washers
- **Sealing:** none for printed and LEGO differentials. Car differentials run inside a closed, oil-filled axle housing, and RC gear diffs are sealed so their silicone oil stays in (RCGuided mentions O-rings and a sealing grease); the sealing is done by the housing and O-rings, not by the gears. ⚑ [uncertain] Details of the seals vary by model.
- **Adjustable:** Open differentials: no (gear mesh and backlash are set with shims or spacers when assembled ⚑ [uncertain]). RC ball diffs: yes, tightening or loosening the screw changes how much they slip (Wikipedia 'Ball differential'). RC gear diffs: yes, by refilling with thinner or thicker silicone oil (RCGuided starting points: front 5,000-7,000 cSt, centre 5,000-10,000 cSt, rear 3,000-5,000 cSt). Locking differentials can be switched between open and locked (manually, by air, cable or electric actuator).
- **Access needed:** not applicable: it is built into an axle or gearbox and reached by opening its housing
- **Materials:** Cars and trucks: steel gears in a cast housing running in oil. RC cars: steel or plastic gear diffs; ball diffs with steel, ceramic or tungsten-carbide balls (ceramic lasts longer; softer balls 'flat spot', per Wikipedia 'Ball differential') and hard diff rings. LEGO Technic differentials (brand): ABS plastic. 3D-printed: PLA, PLA+, PETG or nylon gears, often with steel pins and small ball bearings (e.g. MR63ZZ, MR117, 6700ZZ in Prism08's printed RC differentials). EngineerDog ranks nylon > PLA > ABS > PETG for printed gears.
- **Heat, cold, water and wear:** Printed PLA parts soften and deform above about 60 C (Prusa), so keep printed differentials away from hot motors and hot cars. RC diff oil and grease pick up dirt if the case is open; gear diffs need their oil checked every few months or every few race days (RCGuided). Viscous limited-slip differentials can suffer the 'hump' effect, where heat makes the fluid expand and lock the sides harder (Wikipedia 'Limited-slip differential'). Soft balls in a ball diff flat-spot over time, making it gritty (Wikipedia 'Ball differential'). Plastic miter and bevel gears change size with temperature and humidity (KHK miter catalogue on MC901 nylon gears).

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): demonstration models and light RC or robot differentials
  - off-the-shelf part: RC differential kits (gear and ball diffs), LEGO Technic differentials (brand), go-kart, ATV and car differentials
  - CNC: metal gears and carriers for strong custom builds ⚑ [uncertain]
- **Printing it in one piece (print in place):** no: printable differentials are printed as separate parts and assembled, e.g. the 'Differential fidget' is 1 body, 2 side bevel gears, 2 middle (spider) bevel gears, 2 pins and 2 side gears pressed together, and the 'Public Domain Differential' also needs glue. ⚑ [uncertain] A print-in-place differential demo is offered on MyMiniFactory (seen in search results only, not opened).
- **Tools:** Hex keys or small screwdrivers for the case screws; pliers or a pin punch for cross-pins; grease. RC gear diffs need silicone differential oil; RC ball diffs need diff grease for the balls and rings, a different grease for the thrust bearing, and a tool to set the adjusting screw (RCGuided). Some printed demo models need glue and pliers to assemble (Public Domain Differential, Printables).
- **Difficulty:** moderate: printable demo differentials are easy fidget-style prints (several free models; some need glue or supports), and LEGO Technic differentials cost little; a working one for a robot or RC vehicle needs accurately matched bevel gears, a stiff cage, bearings, a proper cross-pin and grease, and a ball diff needs bought balls, rings, spring washers and a thrust bearing

### 3D printing tips

1) Don't draw the teeth by hand: generate matched bevel pairs with BOSL2 bevel_gear() (you give both tooth counts and the shaft angle, because bevel gears only work in designed pairs) or the FreeCAD Gears workbench; spider gears and side gears must share the same tooth size (module) and pressure angle, and all their cone tips (apexes) must meet at the centre of the cage (BOSL2 docs). 2) Use two or four spider gears on a cross-pin; a steel pin or bolt is much stronger than a printed one, although Prism08's printed RC differential #3 gets away with a small PLA axle because the spider gears only turn when the car is turning. 3) Put ball bearings where speed is high: on the cage and the output shafts (Prism08 uses 6700ZZ and MR117 bearings; his limited-slip version adds eight MR63ZZ). 4) Print a test piece first: the Public Domain Differential author suggests printing the drive shaft and gear first to check the fit of the square axle tip; Prusa suggests starting at about 0.3 mm clearance for moving parts. 5) Orientation: print bevel gears flat on their back face ⚑ [uncertain] (general practice rather than a tested rule); axles standing upright may be knocked over by the nozzle, so use gyroid or 3D-honeycomb infill (Public Domain Differential, printed at 0.16 mm layers, 0.4 mm nozzle, three walls in PLA+; it needs supports). Snap-in connectors printed lying horizontally flex better (MoreMorris 'Differential Gears'). 6) Strength: HowToMechatronics found wall count mattered most and recommends 5 or more walls and at least 35% infill for printed gears. 7) Assembly trick (LazyMaker 'Differential fidget'): hold the side gears still, slide both spider gears in from opposite sides at the same time so their holes line up, then press the pins in. 8) Grease lightly: the Public Domain Differential author wipes on a trace of clear grease; EngineerDog suggests white lithium, PTFE or silicone grease for printed gears. 9) Heat: PLA softens and deforms above about 60 C (Prusa), so avoid PLA near hot motors or in a hot car. 10) The side gears push outwards along the axles, so add thrust washers or shoulders and a stiff cage, or the gears will push apart and skip ⚑ [uncertain] (for printed parts; KHK notes bevel gears produce axial thrust and must be fastened so they cannot move). 11) For a printed ball diff, the drive gear with ball holes can be printed (Kent Asplund's HPD Evo ball differential), but balls, rings, Belleville washers and the thrust bearing are bought parts.

### Buying one (off-the-shelf parts)

RC differential parts: sealed gear differential (gear diff) sets, silicone differential oil (sold by viscosity in cSt, commonly 3,000-50,000 cSt), ball differential rebuild kits (diff balls, diff rings or plates, thrust bearing, Belleville spring washers, diff grease), spools and one-way diffs. LEGO Technic differential gears (brand) and the transmission driving ring used for diff locks (Sariel). Go-kart, ATV and car differentials, 'spider gear' and side-gear sets. For building your own: miter gears and bevel gears (McMaster-Carr 'Metal Miter Gears', 'Plastic Miter Gears', 'Metal Bevel Gears'), dowel or cross pins, thrust washers, flanged ball bearings (e.g. MR63ZZ, MR117, 6700ZZ, 608).

## Rules of thumb

- Speed rule: the cage (carrier) turns at the average of the two output speeds (Wikipedia 'Differential'); hold one output still and the other turns at twice the cage speed (507 Mechanical Movements No. 495).
- Torque rule: an open differential always gives both outputs the same torque, so the wheel with grip gets no more than the slipping wheel can take (Wikipedia 'Limited-slip differential', with the example of a wheel on ice spinning at 50 lbf-ft).
- Torsen torque bias ratio (TBR): 3:1 means one side can take up to three quarters of the torque; with one wheel in the air it acts like an open differential (Wikipedia 'Torsen').
- Spider gears only rotate on their pin when the two outputs turn at different speeds (Prism08, Printables RC differential #3), so their pin mostly carries torque, not speed.
- Bevel gears must be designed in pairs for a chosen shaft angle, with matching tooth size and pressure angle, and their cone apexes must coincide (BOSL2 gears.scad docs); mounting-distance, offset and shaft-angle errors cause noise and uneven wear (KHK miter gear catalogue).
- Each bevel gear mesh is about 98-99% efficient (KHK bevel gears page).
- RC gear diff oil starting points: front 5,000-7,000 cSt, centre 5,000-10,000 cSt, rear 3,000-5,000 cSt; thicker oil = more locking and on-power traction, thinner = more free differential action (RCGuided).
- RC ball diff: clean oil off the balls and rings, tighten only until snug, then break it in and tighten a little at a time (RCGuided); ceramic or tungsten balls resist flat-spotting (Wikipedia 'Ball differential').
- Locked axles and spools scrub tyres and cause understeer and heavier steering (Wikipedia 'Locking differential').

## Common failures

1) One wheel spins and the vehicle stops when one side loses grip: this is normal for an open differential; add a limited-slip device, a locker or thicker diff oil (Wikipedia; Sariel). 2) Printed spider gears skip or the cross-pin snaps: use a steel pin, larger tooth size, more walls (5+) and a stiff cage that stops the gears pushing apart. 3) Gears bind or wear unevenly because the pinion's mounting distance or the shaft angle is wrong (KHK). 4) Ball diff slips too much: clean oil off the balls and rings and tighten slightly; too tight gives little differential action (RCGuided; Wikipedia 'Ball differential'). 5) Ball diff feels gritty: flat-spotted balls or worn rings; replace with harder (ceramic or carbide) balls (Wikipedia). 6) Gear diff leaks oil and changes its feel: replace O-rings and refill (RCGuided). 7) ⚑ [uncertain] Printed differentials that are over-tightened or glued slightly out of line jam; check that everything turns freely before gluing (Public Domain Differential instructions).

## Safety

The gear mesh and the spinning cage are pinch points, so keep fingers clear and cover the gears on powered builds ⚑ [uncertain] (general machine safety). Locked or limited-slip axles make a vehicle harder to steer and, with a spool, it may become unmanageable in wet or snowy weather (Wikipedia 'Locking differential'). Ball diffs use tiny 2 mm balls that are easy to lose and could be swallowed by small children ⚑ [uncertain] (general small-parts caution).

## Related

- Spool or solid axle: both wheels locked together; simplest and strongest, but tyres scrub on turns
- Locking differential (diff lock, locker): an open differential that can be locked solid when grip is poor
- Limited-slip differential (clutch, viscous or Torsen gear type): limits how differently the two sides can turn, so the gripping wheel keeps some drive
- Ball differential: RC variant using friction through balls; no backlash, adjustable slip, but lower power capacity than a gear diff (RC Car Action)
- Spur-gear or planetary (epicyclic) differential: same speed-averaging job with parallel-shaft gears; planetary ones can split torque unequally front to rear
- Planetary gear set: a three-shaft gear train like the differential, but used for speed reduction
- Bevel gears (incl. mitre gears): the parts most differentials are built from
- Differential screw and differential pulley (hoist): use the 'difference' idea for fine movement or lifting force, not for sharing drive between two outputs

## Make it yourself

- [Public Domain Differential by Stone Age Sculptor (URL from Printables API, page not opened)](https://www.printables.com/model/928398-public-domain-differential): Classroom demonstration differential with knob, crown (ring) gear, four small gears in a case and two wheels; OpenSCAD source script included; printed in PLA+ at 0.16 mm layers; needs supports and a little glue *(licence: Creative Commons Public Domain (CC0))*
- [Differential fidget by LazyMaker (URL from Printables API, page not opened)](https://www.printables.com/model/232280-differential-fidget): Simple hand-held bevel differential toy: body, 2 side bevel gears, 2 spider gears, 2 pins, 2 side gears, with assembly instructions *(licence: CC BY)*
- [Differential #5 with limited slip, RC Unimog edition by Prism08 (URL from Printables API, page not opened)](https://www.printables.com/model/679842-differential-5-with-limited-slip-rc-unimog-edition): Working printed differential with limited slip for a 1/10 RC truck, using small ball bearings; see also the author's RC CAR Differential #3 (model 444446) *(licence: CC BY-NC)*
- [Torsen differential - Limited-slip differential by Dmitrii Tomin (URL from Printables API, page not opened)](https://www.printables.com/model/926631-torsen-differential-limited-slip-differential): Printed showcase model of a Torsen-type limited-slip differential with 608 bearings, 8 mm rods and M4/M5 bolts; assembly guide included *(licence: CC BY-SA)*
- [BOSL2 gears.scad: bevel_gear() (OpenSCAD library)](https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad): Parametric generator for matched straight, zerol and spiral bevel gear pairs (the parts of a differential), with backlash settings *(licence: BSD 2-Clause)*
- [HUANGYAN920 Mechanical: interactive mechanism animations (entry 'DIFFERENTIAL-GEAR', no. 44)](https://huangyan920.github.io/Mechanical/): Browser animation of a bevel-gear differential; its parameter notes are brief, so check numbers elsewhere *(licence: MIT)*

## Pictures, videos and models

- [Around the Corner (1937), Jam Handy Organization for Chevrolet (Wikimedia Commons video)](https://commons.wikimedia.org/wiki/File:Around_the_Corner_(1937)_24fps_selection.webm): Classic 7-minute animated and model film explaining step by step why a car needs a differential on a bend and how the bevel gears do it *(licence: Public domain in the United States (published 1931-1963 without copyright renewal); may still be copyrighted in some other countries)*
- [Differential free.png (Wikimedia Commons, by Wapcaplet)](https://commons.wikimedia.org/wiki/File:Differential_free.png): Colour-coded 3D diagram of a ring-and-pinion differential: ring gear and carrier driving both side gears; paired with 'Differential locked-2.png' showing the planet gear turning on a bend *(licence: GFDL 1.2+ / CC BY-SA 3.0)*
- [BallDifferential.svg (Wikimedia Commons, by Kivaan)](https://commons.wikimedia.org/wiki/File:BallDifferential.svg): Exploded diagram of an RC-car ball differential *(licence: Public domain)*
- [Car Differential with Bevel Gears 1 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=YjhzkV5Ya2k): CAD animation of a bevel gear car differential *(licence: link only (standard YouTube licence))*
- [507 Mechanical Movements, No. 495: Entwistle's patent gearing](https://507movements.com/mm_495.html): Historic 1868 drawing (with an animated version) of a bevel differential with one side gear fixed, so the other turns twice per turn of the carrier shaft *(licence: Book public domain; website animation link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 13 sentences on this page marked [uncertain].
- ⚑ Finder value `adjustable` = no (source uncertain): `adjustable` is marked ⚑ [uncertain] here: "…(gear mesh and backlash are set with shims or spacers when assembled ⚑ [uncertain]).…"

## Sources

- <https://en.wikipedia.org/wiki/Differential_(mechanical_device)>
- <https://en.wikipedia.org/w/index.php?title=Differential_(mechanical_device)&action=raw>
- <https://en.wikipedia.org/wiki/Limited-slip_differential>
- <https://en.wikipedia.org/w/index.php?title=Limited-slip_differential&action=raw>
- <https://en.wikipedia.org/wiki/Ball_differential>
- <https://en.wikipedia.org/w/index.php?title=Ball_differential&action=raw>
- <https://en.wikipedia.org/wiki/Locking_differential>
- <https://en.wikipedia.org/wiki/Torsen>
- <https://en.wikipedia.org/wiki/Bevel_gear>
- <https://www.rccaraction.com/understanding-differentials/>
- <https://rcguided.com/how-to-build-a-ball-diff/>
- <https://rcguided.com/rc-diff-oil-tuning-simplified/>
- <https://sariel.pl/2009/01/limited-slip-differential/>
- <https://sariel.pl/2012/05/compact-axle-with-a-differential-lock/>
- <https://hackaday.io/project/945/logs?sort=oldest&page=4>
- <https://khkgears.net/new/bevel_gears.html>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html>
- <https://khkgears.net/pdf/2025/miter-gears.pdf>
- <https://507movements.com/mm_495.html>
- <https://507movements.com/toc.html>
- <https://commons.wikimedia.org/wiki/File:Around_the_Corner_(1937)_24fps_selection.webm>
- <https://commons.wikimedia.org/wiki/File:Differential_free.png>
- <https://commons.wikimedia.org/wiki/File:Differential_locked-2.png>
- <https://commons.wikimedia.org/wiki/File:BallDifferential.svg>
- <https://commons.wikimedia.org/wiki/File:Spur_gear_differential_(Manual_of_Driving_and_Maintenance).jpg>
- <https://www.youtube.com/watch?v=YjhzkV5Ya2k>
- <https://www.youtube.com/watch?v=0yG46eH_kz0>
- <https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE>
- <https://raw.githubusercontent.com/looooo/freecad.gears/master/README.md>
- <https://huangyan920.github.io/Mechanical/>
- <https://api.printables.com/graphql/>
- <https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/>
- <https://howtomechatronics.com/how-it-works/how-to-3d-print-gears-the-ultimate-guide/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://help.prusa3d.com/article/pla_2062>
- <https://www.mcmaster.com/products/bevel-gears/>
- <https://www.mcmaster.com/products/miter-gears/>
