---
title: Roller clutch
description: Rollers sit in pockets with a sloping floor (ramps) between a shaft and an outer ring; turn one way and they
  roll into the wide end and spin free, turn the other way and they jam into the narrow end and lock the shaft to the ring.
num: 11
term: Roller clutch (roller-ramp one-way clutch); the ready-made small version is the drawn cup roller clutch or one-way needle
  bearing
plain_name: 'A one-way bearing: a ring with little rollers sitting in sloped pockets, so a shaft spins freely one way but
  the rollers wedge and grip the shaft the other way'
aliases:
- one-way bearing
- one-way needle bearing
- one-way needle roller clutch
- drawn cup roller clutch (catalogue name; HF series without bearings, HFL series with built-in needle bearings)
- one-way locking needle-roller bearing (McMaster catalogue name)
- roller-ramp clutch
- roller freewheel
- overrunning clutch
- freewheel clutch
- clutch bearing
- anti-reverse bearing (fishing reels)
- motion rectifier, mechanical rectifier or mechanical diode (two one-way clutches that turn back-and-forth motion into one-way
  rotation)
family: one-way & ratchet
other_families: [clutches & couplings, self-locking & anti-back-drive, motion conversion]
finder:
  job: [stop it moving back, let it move, change the kind of motion]
  motion: rotate
  special_behaviour: [one-way, self-locking, motion conversion]
  holding_principle: [friction or clamping, not a holding joint]
  reuse_cycles: a few times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: 'yes'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), 3D print (resin)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning]
  shaft_layout: [in line]
  overload_response: not applicable
  clicks: silent
  tools: [press or vice, hand tools]
  load_max: medium
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: semi-permanent
  power: passive
needs_confirming:
  usual_process:
    kind: best guess
    reason: first-listed process is off-the-shelf, but `print_in_place` is yes
confirmed: []
open_points: []
uncertain_fields: [input_output, play_and_precision, making_tips_3d_printing]
diagram_idea: 'A cross-section of an outer ring with four ramped pockets around a shaft, each holding a roller pushed by a
  small spring: one panel shows the shaft turning the free way with the rollers resting in the deep ends, the next shows it
  turning the other way with the rollers jammed in the shallow ends; a third panel shows the motion rectifier, a rocking rack
  driving two opposite-facing clutches that both turn one output gear the same way.'
links:
- url: https://commons.wikimedia.org/wiki/File:Freewheel_en.svg
  title: Freewheel en.svg (Wikimedia Commons)
  shows: Labelled diagram of a roller freewheel showing which way is free and which way is engaged, with rollers in ramped
    pockets
  license: Public domain (Borb, derived from Technoargia's Roue libre2.svg)
- url: https://commons.wikimedia.org/wiki/File:Roue_libre_verrouillage_deverrouillage.svg
  title: Roue libre verrouillage deverrouillage.svg (Wikimedia Commons)
  shows: Diagram of a roller freewheel locking and unlocking, drawn both from the ground and from the sprocket's point of
    view
  license: Public domain (Cdang)
- url: https://www.youtube.com/watch?v=H4SiM5Dcblg
  title: Roller overrunning clutch 1 (Nguyen Duc Thang, YouTube channel thang010146)
  shows: CAD animation of a roller overrunning clutch, with arrows showing which part drives (title and channel confirmed
    via YouTube oEmbed)
  license: link only
- url: https://www.youtube.com/watch?v=UIhCPl8eb7s
  title: Can you 3D Print a One Way Bearing? Roller Clutch Design (Maker's Muse, YouTube)
  shows: Designing and testing a print-in-place 3D-printed roller clutch (title and channel confirmed via YouTube oEmbed)
  license: link only
- url: https://www.youtube.com/watch?v=oQ34BJk4HGs
  title: Mechanical Rectifier (Rectilinear, Demonstrator Version) (Sea Power Ltd, YouTube)
  shows: Hand-held motion rectifier demonstrator turning up-and-down motion into one-way rotation (title and channel confirmed
    via YouTube oEmbed)
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/110339-functional-one-way-clutch-model
  title: Functional one way clutch model (Jori, Printables)
  what_it_is: Print-in-place roller clutch, about 32 mm across and 6 mm high, printed in under 30 minutes with no supports;
    inspired by Maker's Muse, with an Onshape source. Details read through the Printables public API because the web page
    blocks automated access
  license: CC BY-NC (Creative Commons Attribution-NonCommercial)
- url: https://www.printables.com/model/1368336-parametric-one-way-clutch-bearing
  title: Parametric one way clutch bearing (Radim Mach, Printables)
  what_it_is: Parametric print-in-place roller clutch with a hex bore, supplied as a Fusion 360 file and STL. Details read
    through the Printables public API
  license: CC BY-NC (Creative Commons Attribution-NonCommercial)
- url: https://www.printables.com/model/129974-one-way-clutch
  title: one way clutch (tylermor, Printables)
  what_it_is: Multi-part printable roller overrunning clutch (body, spider, rollers, roller shoes, hub) that uses pen springs
    to press the shoes onto the rollers; the designer notes PLA grip torque is low. Details read through the Printables public
    API
  license: CC BY (Creative Commons Attribution)
- url: https://www.printables.com/model/1571032-qidibox-spool-driven-gear-using-hf0306-one-way-bea
  title: Qidibox Spool Driven Gear using HF0306 One-way Bearing (weav, Printables)
  what_it_is: Example of pressing bought HF0306 one-way needle bearings into a printed gear on a 3 mm rod; reported working
    for over six months. Details read through the Printables public API
  license: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike)
- url: https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/
  title: Printable One-Way Driver Skips Ratchet For A Clutch (Hackaday)
  what_it_is: Article on ukman's 3D-printed one-way screwdriver, where metal cylinders wedge in printed pockets; links to
    the Instructables build 'Ratchet Screwdriver Without Ratchet With Overrunning Clutch' (https://www.instructables.com/Ratchet-Screwdriver-Without-Ratchet-With-Overrunni/,
    page title confirmed, content needs JavaScript)
  license: link only (article); Instructables licence not seen
sources:
- https://en.wikipedia.org/wiki/Freewheel
- https://en.wikipedia.org/wiki/Sprag_clutch
- https://commons.wikimedia.org/wiki/Category:Roller_clutches
- https://commons.wikimedia.org/wiki/Category:Self-locking_couplings
- https://commons.wikimedia.org/wiki/File:Freewheel_en.svg
- https://commons.wikimedia.org/wiki/File:Roue_libre_verrouillage_deverrouillage.svg
- https://commons.wikimedia.org/wiki/File:Freewheel.jpg
- https://www.ntnglobal.com/en/products/catalog/pdf/2300E_17.pdf
- https://www.engineerlive.com/content/one-way-roller-clutches
- https://www.mcmaster.com/products/one-way-clutches/
- https://www.ustsubaki.com/wp-content/uploads/L14016-Tsubaki-Cam-Clutch-Catalog-2019.pdf
- https://www.ustsubaki.com/resources/knowledge-center/guide-to-indexing-overrunning-and-backstop-clutches/
- https://www.linkedin.com/pulse/quick-info-one-way-bearing-tianyu-gao
- https://patents.google.com/patent/EP2399455B1/en
- https://iopscience.iop.org/article/10.1088/0964-1726/22/2/025008
- https://hackaday.com/2010/02/03/the-mechanical-diode/
- https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/
- https://www.instructables.com/Ratchet-Screwdriver-Without-Ratchet-With-Overrunni/
- https://www.printables.com/model/110339-functional-one-way-clutch-model
- https://www.printables.com/model/1368336-parametric-one-way-clutch-bearing
- https://www.printables.com/model/129974-one-way-clutch
- https://www.printables.com/model/443599-one-way-bearingclutch-bearing
- https://www.printables.com/model/1571032-qidibox-spool-driven-gear-using-hf0306-one-way-bea
- https://api.printables.com/graphql/
- https://www.youtube.com/watch?v=H4SiM5Dcblg
- https://www.youtube.com/watch?v=UIhCPl8eb7s
- https://www.youtube.com/watch?v=oQ34BJk4HGs
research: research/connection-types/results/Roller_clutch_oneway_bearing.json
---

Rollers sit in pockets with a sloping floor (ramps) between a shaft and an outer ring; turn one way and they roll into the wide end and spin free, turn the other way and they jam into the narrow end and lock the shaft to the ring.

**In plain words:** A one-way bearing: a ring with little rollers sitting in sloped pockets, so a shaft spins freely one way but the rollers wedge and grip the shaft the other way. **Proper term:** Roller clutch (roller-ramp one-way clutch); the ready-made small version is the drawn cup roller clutch or one-way needle bearing.

**Also called:** one-way bearing; one-way needle bearing; one-way needle roller clutch; drawn cup roller clutch (catalogue name; HF series without bearings, HFL series with built-in needle bearings); one-way locking needle-roller bearing (McMaster catalogue name); roller-ramp clutch; roller freewheel; overrunning clutch; freewheel clutch; clutch bearing; anti-reverse bearing (fishing reels); motion rectifier, mechanical rectifier or mechanical diode (two one-way clutches that turn back-and-forth motion into one-way rotation).

## How it works

The pocket for each roller is shaped like a wedge: one end is deeper than the roller, the other end is shallower. A light spring pushes each roller towards the shallow end so it always touches both the shaft and the ring. When the shaft turns the free way relative to the ring, friction rolls the rollers towards the deep end and they spin freely (overrun). When it turns the other way, friction drags the rollers into the shallow end, where they wedge between the ramp and the shaft and lock them together by friction; this works because the wedge angle is shallow enough that friction beats it (self-locking). A motion rectifier puts two of these clutches, facing opposite ways, on a back-and-forth shaft so that one drives on each stroke, turning both strokes into one-way rotation of the output, like an electrical full-wave rectifier.

## Parts

A small assembly that acts as one unit. Parts of the common drawn-cup type: a thin pressed-steel outer ring (drawn cup) with ramps inside, needle rollers, a plastic cage, and a small spring for each roller; the shaft itself is the inner running surface. The HFL type adds needle bearings at each end. Printed versions: outer ring, a hub with ramped pockets, and rollers (printed, or steel pins), sometimes with springs. The motion rectifier variant is a small assembly of two one-way clutches plus gears (e.g. three bevel gears) and a rack and pinion or crank.

## Everyday examples

- The instant anti-reverse in a spinning fishing reel, which stops the handle turning backwards (Shimano patent EP2399455B1)
- E-bike drives and motorcycle electric starters (Engineer Live)
- Early bicycle freewheels: a roller freewheel was patented in the UK in 1881 (Wikipedia, Freewheel)
- 3D printer filament spool drives and rewinders that must wind one way only (weav's Qidibox gear, Printables)

## When to use it

Use a roller clutch when you want a small, cheap, quiet one-way drive or anti-reverse that locks at any angle without clicking: spools that must only wind in, hand cranks that shouldn't be dragged back, push-and-return tools (one-way screwdrivers), paper and filament feeds, and robot or RC drives that must coast. A bought drawn-cup one-way needle bearing is the easiest way to add a strong one-way action to a 3D-printed design. Use two back to back as a motion rectifier to harvest energy from back-and-forth motion (waves, shock absorbers, a pull cord or a lever) or to make a push-pull crank turn a wheel one way.

## When not to use it

Avoid it for very high torque in a small space (a sprag clutch carries more), for tiny back-and-forth oscillations under load (NTN warns fine oscillation and high oscillation cycles shorten life), on soft, printed or worn shafts (it will slip or wear the shaft), and where slipping could hurt someone without a separate positive lock (NTN). If you need a positive lock that can't slip, use a ratchet and pawl. If you need to switch the drive on and off, use a wrap-spring or dog clutch. If you need the output to stay still when the load pushes back in either direction, use a bidirectional anti-back-drive clutch or a worm drive. For a no-extra-parts printed one-way action, a compliant (flexure) ratchet is often more reliable than printed rollers.

## Details

- **What it does (jobs):**
  - stop it moving back (one-way): e.g. the anti-reverse in a fishing reel, or a spool that can wind in but not unwind
  - let it move (turn, slide or bend): lets a driven part coast or run faster than its drive (overrunning), e.g. a starter motor or e-bike drive
  - change the kind of motion: two clutches as a motion rectifier turn back-and-forth rocking into continuous one-way rotation; one clutch driven by a crank gives step-by-step feeding (indexing)
- **Movement:** rotate: continuous rotation, free in one direction relative to the ring and locked in the other; the HFL type also works as a plain needle bearing
- **Directions it can move (degrees of freedom):** 1: the shaft can only turn relative to the ring about their common axis, and only in the free direction; in the locking direction the relative freedom is 0
- **Special behaviour:**
  - one-way (moves freely one way, locks the other): locks at any angle with only a small take-up angle, and runs almost silently
  - self-locking (holds under load, won't back-drive): with the ring fixed, it holds a load from turning back, e.g. a fishing reel rotor or a spool
  - motion conversion (e.g. rotary to linear): as a motion rectifier, two clutches turn oscillating motion (from a rack, lever or wave) into steady one-way rotation; a single clutch rocked by a crank gives indexing
- **How it holds:**
  - friction or clamping (force-fit): the rollers wedge between a ramp and a smooth shaft and hold by friction
  - not a holding joint (it moves or passes on motion): it passes on or blocks turning force between shaft and housing
- **Input and output:** Rotation -> rotation at 1:1 in the drive direction; freewheel (overrun) in the other. Efficiency: close to lossless when locked, with a small spring drag when overrunning. Shaft arrangement: in line (shaft inside ring). Back-drivable: the output can always run ahead in the free direction; turning it backwards relative to the input locks it, so with the ring fixed it is not back-drivable (anti-reverse). Motion rectifier: oscillating rotation or reciprocating linear motion -> continuous one-way rotation; Li et al.'s shock-absorber harvester (two roller clutches and three bevel gears) reached over 60 percent mechanical efficiency, compared with 30-45 percent for their conventional design. Take-up (delay) angle: small and growing with load; NTN's delay-angle chart spans 0 to 5 degrees ⚑ [uncertain].
- **Power:** passive (no power needed): springs and friction do the work
- **Load:** light to medium: NTN drawn-cup clutches carry about 1.76 N·m on a 6 mm shaft (HF0612), 5.3 N·m on 10 mm (HF1012), 28.5 N·m on 20 mm (HF2016) and 121 N·m on 35 mm (HF3520); industrial roller clutches go much higher. Strong in twist in the locking direction only. The HF type carries no radial load and must have a bearing on each side; the HFL type has built-in needle bearings for radial load (NTN). Printed plastic versions carry only small torques
- **Play and precision:** Play: small. Rollers are individually sprung so they always touch the shaft, which gives high indexing accuracy (Engineer Live), but there is a small take-up angle between input and output (NTN's 'delay angle', which rises with load and stays stable for over a million cycles; NTN's chart spans 0 to 5 degrees ⚑ [uncertain]). Repeatability: good for indexing. Misalignment: very little tolerated; NTN specifies shaft tolerance h5 (h6), shaft roundness IT3 and support bearings on both sides to keep it concentric
- **Taking it apart:** semi-permanent (can be undone but may damage parts): drawn-cup clutches are press-fitted into the housing and can be pressed out, but the thin cup deforms easily; larger roller clutches with keyed hubs are removable
- **How often it can be reused:** a few times: a press-fitted drawn cup can be removed and refitted only a few times before the fit or cup is damaged; the shaft slides in and out freely (turn it the free way while inserting, NTN)
- **Sealing:** none: open drawn cups have no seals; they are pre-greased and rely on the surrounding parts to keep dirt out
- **Adjustable:** no: nothing to adjust. To reverse the locking direction, press a drawn cup in the other way round (the free direction is marked on the ring face, NTN) or flip the hub of a printed version
- **Access needed:** end of a tube or shaft: the clutch is pressed into a bore and the shaft is pushed through it
- **Materials:** Bought units: pressed alloy-steel cup, hardened steel needle rollers, glass-fibre-reinforced polyamide cage, steel springs. The shaft must be hardened steel (HRC 58-64, NTN) because the rollers run directly on it. Housings: steel, cast iron or aluminium alloy; for plastic housings use the knurled-outer-ring version (suffix R) (Engineer Live). Printed versions: PLA or PETG, with printed rollers or steel pins as rollers
- **Heat, cold, water and wear:** Temperature: NTN drawn-cup clutches -10 to 70 C with grease and -10 to 120 C with oil. Lubricant: too much grease interferes with clutching (NTN). Vibration and speed: NTN says lock failure can happen with fast idling speeds, frequent idling and vibration. Wear: a soft shaft shortens life (NTN). Printed plastic versions: plastic rollers and ramps wear and lose grip over time, and PLA softens in heat such as a hot car.

## Making it

- **Ways to make or get it:**
  - off-the-shelf part (drawn cup roller clutches, one-way needle bearings, keyed roller clutches)
  - 3D print (FDM): print-in-place demonstration clutches and light-duty clutches, plus housings, gears and pulleys for bought units
  - 3D print (resin): fine print-in-place clutches (not tested in this research)
  - CNC: hardened shafts and precise housing bores for bought units
- **Printing it in one piece (print in place):** yes: several Printables designs print already assembled with the rollers inside (e.g. Jori's 32 mm model, Radim Mach's parametric bearing, Wakkie's bearing), though they are weak and may need breaking free; others are 'partly', adding pen springs (tylermor) or metal cylinders as rollers (ukman's one-way screwdriver)
- **Tools:** An arbor press or vice with a stepped pressing mandrel for drawn cups (NTN says never hammer the cup); hex keys for set-screw or keyed units; none for printed print-in-place versions (a hex key helps break a new print free)
- **Difficulty:** easy to moderate: a bought one-way needle bearing just presses into a housing, but it needs a hardened, accurate shaft and a stiff housing; print-in-place plastic versions are easy to print but weak

### 3D printing tips

Two routes. (1) Print the whole clutch. Print-in-place designs put the hub, rollers and outer ring on the build plate together with the rotation axis vertical, so every roller and ramp is drawn round in the XY plane. Radim Mach's parametric model is labelled '0.2' in its preview image, which suggests a 0.2 mm gap between parts ⚑ [uncertain]; a snippet from the now-offline Maker's Muse page said you need a printer that can manage 0.2 mm clearances ⚑ [uncertain]. Jori's 32 mm, 6 mm-tall model printed at 0.16 mm layers with no supports in under 30 minutes, but needed breaking free after printing (a hex key in the centre hole helps). Plastic grip is weak: tylermor found PLA works but 'max gripping torque is still kind of low', and used pen springs to press shoes against the rollers. For more grip, use steel rollers (dowel pins) in printed pockets, as in ukman's one-way screwdriver (Hackaday says it suits light assembly work, not high torque). Keep grease out of friction clutches, or use very little: NTN warns that too much grease stops even a steel clutch gripping properly. (2) Buy a drawn-cup clutch and print around it. Press it into the housing with a flat-ended tool on the marked face, never hammer it (NTN). Use the knurled 'R' version in plastic housings (Engineer Live). Make the housing wall thick: NTN asks for at least 0.75 x (outer diameter minus roller circle) in iron and 1.5 x in light alloy, so a printed housing needs at least that much or more ⚑ [uncertain]. Use a hardened, ground steel shaft (e.g. a hardened dowel pin or linear rod), not a printed or soft shaft, and support it with a bearing on each side or use the HFL type. weav's printed spool gear with an HF0306 on a stock 3 mm rod has run for over six months in a low-torque filament box, but he notes the rod's hardness and roundness are unknown.

### Buying one (off-the-shelf parts)

Search: 'drawn cup roller clutch', 'one-way needle bearing', 'HF' series (e.g. HF0612 = 6 mm shaft, 12 mm wide; HF0306 = 3 mm shaft), 'HFL' series (with built-in bearings), 'HF...R' (knurled outer ring for plastic housings), 'one-way locking needle-roller bearing' and 'one-way clutch, roller engagement' (knurled or keyed hub) (McMaster), 'one-way-locking sprocket', 'freewheel', 'overrunning clutch'. Pair HF clutches with matching 'HK' drawn cup needle roller bearings as support bearings (NTN lists matching HK sizes). Shafts: hardened ground dowel pins or linear shafts. For a motion rectifier: two one-way bearings plus a gear pair or three bevel gears.

## Rules of thumb

- Shaft (the rollers run on it): hardened to HRC 58-64 with at least 0.4 mm hardened depth, roughness 0.2 micrometre Ra, roundness IT3 (IT4) (NTN one-way clutch catalogue, Table 3)
- Fits: shaft h5 (h6); housing N6 (N7) in iron or steel, R6 (R7) in light alloy; no snap ring needed, the press fit holds it (NTN, Table 1)
- Housing wall at least 0.75 x (D - Fw) for iron-based housings and 1.5 x (D - Fw) for light alloy, where D is the clutch outer diameter and Fw the roller circle diameter (NTN, Table 2)
- HF clutches only clutch: put a radial bearing at each end, or use HFL with built-in needle bearings (NTN)
- Rated torque examples: HF0612 1.76 N·m, HF1012 5.30 N·m, HF2016 28.5 N·m, HF3520 121 N·m (NTN dimension table)
- Operating temperature: -10 to 70 C with grease, -10 to 120 C with oil (NTN)
- Use the knurled-outer-ring version (suffix R) in plastic housings (Engineer Live, One-way roller clutches)
- Locking only happens if friction beats the wedge: the friction coefficient must be greater than the tangent of the self-locking (wedge) angle, so ramps are shallow (Tianyu Gao, 'Quick info - One-Way Bearing', LinkedIn)
- Motion rectifier: two one-way roller clutches driving opposite bevel gears into one output gear gave over 60 percent mechanical efficiency at higher frequencies in a shock-absorber energy harvester (Li, Zuo, Kuang and Luhrs, Smart Materials and Structures, 2013)

## Common failures

Slipping because the shaft is too soft, worn, polished or oily; fix with a hardened ground shaft and correct (not excessive) lubrication (NTN). Short life from high torque, heavy radial load, fine oscillation or a low-hardness shaft (NTN). Lock failure under vibration or high idling speed (NTN). A thin or loose housing lets the drawn cup deform or turn; follow NTN's wall-thickness and fit tables. Rollers that slip instead of biting into the ramp are a known problem even in fishing reels (Shimano patent). Printed versions: not enough grip in PLA, rollers stuck after printing, wear of printed rollers and ramps, and too much clearance so rollers never reach the wedge; use springs to push the rollers into contact.

## Safety

A roller clutch holds by friction, so it can slip without warning; NTN says that where slipping could seriously harm people or equipment, a separate positive safety device must be fitted. Don't hammer drawn cups in (they deform). Rotating shafts and gears in a motion rectifier are pinch points. Otherwise none known.

## Related

- Sprag clutch: tilted blocks instead of rollers; more torque for its size, but must be bought, can't really be printed
- Ratchet and pawl: locks positively on teeth with a click, can't slip but has backlash up to one tooth
- Face ratchet (star ratchet): toothed discs pressed together, used in bicycle hubs; clicks
- Wrap-spring clutch: a coil spring grips a hub; can also be switched on and off
- Compliant ratchet and overrunning clutch (flexure pawl): one-piece printable one-way clutch with springy arms
- Binding-plate lock: the same wedge-by-friction idea for sliding along a bar instead of turning
- Bidirectional anti-back-drive clutch: often built from rollers too, but lets the input drive either way while blocking the load
- Needle roller bearing (HK drawn cup): same size and look as an HF clutch but turns freely both ways

## Make it yourself

- [Functional one way clutch model (Jori, Printables)](https://www.printables.com/model/110339-functional-one-way-clutch-model): Print-in-place roller clutch, about 32 mm across and 6 mm high, printed in under 30 minutes with no supports; inspired by Maker's Muse, with an Onshape source. Details read through the Printables public API because the web page blocks automated access *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
- [Parametric one way clutch bearing (Radim Mach, Printables)](https://www.printables.com/model/1368336-parametric-one-way-clutch-bearing): Parametric print-in-place roller clutch with a hex bore, supplied as a Fusion 360 file and STL. Details read through the Printables public API *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
- [one way clutch (tylermor, Printables)](https://www.printables.com/model/129974-one-way-clutch): Multi-part printable roller overrunning clutch (body, spider, rollers, roller shoes, hub) that uses pen springs to press the shoes onto the rollers; the designer notes PLA grip torque is low. Details read through the Printables public API *(licence: CC BY (Creative Commons Attribution))*
- [Qidibox Spool Driven Gear using HF0306 One-way Bearing (weav, Printables)](https://www.printables.com/model/1571032-qidibox-spool-driven-gear-using-hf0306-one-way-bea): Example of pressing bought HF0306 one-way needle bearings into a printed gear on a 3 mm rod; reported working for over six months. Details read through the Printables public API *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
- [Printable One-Way Driver Skips Ratchet For A Clutch (Hackaday)](https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/): Article on ukman's 3D-printed one-way screwdriver, where metal cylinders wedge in printed pockets; links to the Instructables build 'Ratchet Screwdriver Without Ratchet With Overrunning Clutch' (https://www.instructables.com/Ratchet-Screwdriver-Without-Ratchet-With-Overrunni/, page title confirmed, content needs JavaScript) *(licence: link only (article); Instructables licence not seen)*

## Pictures, videos and models

- [Freewheel en.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Freewheel_en.svg): Labelled diagram of a roller freewheel showing which way is free and which way is engaged, with rollers in ramped pockets *(licence: Public domain (Borb, derived from Technoargia's Roue libre2.svg))*
- [Roue libre verrouillage deverrouillage.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Roue_libre_verrouillage_deverrouillage.svg): Diagram of a roller freewheel locking and unlocking, drawn both from the ground and from the sprocket's point of view *(licence: Public domain (Cdang))*
- [Roller overrunning clutch 1 (Nguyen Duc Thang, YouTube channel thang010146)](https://www.youtube.com/watch?v=H4SiM5Dcblg): CAD animation of a roller overrunning clutch, with arrows showing which part drives (title and channel confirmed via YouTube oEmbed) *(licence: link only)*
- [Can you 3D Print a One Way Bearing? Roller Clutch Design (Maker's Muse, YouTube)](https://www.youtube.com/watch?v=UIhCPl8eb7s): Designing and testing a print-in-place 3D-printed roller clutch (title and channel confirmed via YouTube oEmbed) *(licence: link only)*
- [Mechanical Rectifier (Rectilinear, Demonstrator Version) (Sea Power Ltd, YouTube)](https://www.youtube.com/watch?v=oQ34BJk4HGs): Hand-held motion rectifier demonstrator turning up-and-down motion into one-way rotation (title and channel confirmed via YouTube oEmbed) *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 5 sentences on this page marked [uncertain].
- ⚑ Finder value `usual_process` = off-the-shelf part (best guess): first-listed process is off-the-shelf, but `print_in_place` is yes

## Sources

- <https://en.wikipedia.org/wiki/Freewheel>
- <https://en.wikipedia.org/wiki/Sprag_clutch>
- <https://commons.wikimedia.org/wiki/Category:Roller_clutches>
- <https://commons.wikimedia.org/wiki/Category:Self-locking_couplings>
- <https://commons.wikimedia.org/wiki/File:Freewheel_en.svg>
- <https://commons.wikimedia.org/wiki/File:Roue_libre_verrouillage_deverrouillage.svg>
- <https://commons.wikimedia.org/wiki/File:Freewheel.jpg>
- <https://www.ntnglobal.com/en/products/catalog/pdf/2300E_17.pdf>
- <https://www.engineerlive.com/content/one-way-roller-clutches>
- <https://www.mcmaster.com/products/one-way-clutches/>
- <https://www.ustsubaki.com/wp-content/uploads/L14016-Tsubaki-Cam-Clutch-Catalog-2019.pdf>
- <https://www.ustsubaki.com/resources/knowledge-center/guide-to-indexing-overrunning-and-backstop-clutches/>
- <https://www.linkedin.com/pulse/quick-info-one-way-bearing-tianyu-gao>
- <https://patents.google.com/patent/EP2399455B1/en>
- <https://iopscience.iop.org/article/10.1088/0964-1726/22/2/025008>
- <https://hackaday.com/2010/02/03/the-mechanical-diode/>
- <https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/>
- <https://www.instructables.com/Ratchet-Screwdriver-Without-Ratchet-With-Overrunni/>
- <https://www.printables.com/model/110339-functional-one-way-clutch-model>
- <https://www.printables.com/model/1368336-parametric-one-way-clutch-bearing>
- <https://www.printables.com/model/129974-one-way-clutch>
- <https://www.printables.com/model/443599-one-way-bearingclutch-bearing>
- <https://www.printables.com/model/1571032-qidibox-spool-driven-gear-using-hf0306-one-way-bea>
- <https://api.printables.com/graphql/>
- <https://www.youtube.com/watch?v=H4SiM5Dcblg>
- <https://www.youtube.com/watch?v=UIhCPl8eb7s>
- <https://www.youtube.com/watch?v=oQ34BJk4HGs>
