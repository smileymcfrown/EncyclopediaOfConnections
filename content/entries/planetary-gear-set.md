---
title: Planetary gear set
description: A planetary gear set has a central sun gear, several planet gears that mesh with it and with an outer ring gear,
  and a carrier holding the planets, so holding one of the three parts still gives a compact, strong speed reduction (or increase)
  with the input and output on the same line.
num: 93
term: Planetary gear set (epicyclic gear train)
plain_name: A small gear in the middle with several gears rolling round it inside a big ring that has teeth on the inside,
  like planets round the sun; turning the middle gear makes the frame holding the rolling gears turn much more slowly and
  strongly, on the same centre line
aliases:
- planetary gearbox / planetary gearhead / planetary reducer / planetary gearmotor
- epicyclic gearing / epicyclic gear train (Wikipedia)
- sun gear, planet gears, planet carrier and ring gear (also called the annulus or internal gear)
- '''planetary'', ''solar'' and ''star'' types (KHK''s names for the set with the ring, the sun or the carrier held still)'
- multi-stage planetary gearbox (several sets stacked in one housing)
- gear bearing (a print-in-place planetary set used as a bearing or fidget toy)
- 'compound planetary: meshed-planet, stepped-planet and Ravigneaux sets, as in automatic transmissions (Wikipedia)'
- internal gear hub / hub gear (bicycles)
- UltraPlanetary (REV Robotics (brand)) and Yellow Jacket (goBILDA (brand)) robot gearmotors
- Planetengetriebe (German)
family: gear trains, gearboxes & transmissions
other_families: [print-in-place & 3D-printing joints]
finder:
  job: [change speed or turning force, let it move]
  motion: rotate
  special_behaviour: [self-aligning or self-centring]
  holding_principle: [not a holding joint, shape]
  reuse_cycles: many times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: 'yes'
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM), 3D print (resin)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning]
  shaft_layout: [in line]
  overload_response: not applicable
  clicks: not applicable
  tools: [soldering iron, hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming:
  usual_process:
    kind: best guess
    reason: first-listed process is off-the-shelf, but `print_in_place` is yes
confirmed: []
open_points:
- kind: content
  note: '*Planetary gear set*: HowToMechatronics states "20 N at 10 cm = 200 Nm"; it is 2 N·m (200 N·cm). The entry uses the
    corrected value.'
uncertain_fields: [input_output, seal, materials, processes]
diagram_idea: Front view of a sun, three planets, carrier and ring, drawn three times with a different part shaded as 'held'
  (ring, carrier, sun), with arrows showing each part's direction and relative speed and the ratio formula under each (1 +
  R/S, -R/S, 1 + S/R).
links:
- url: https://commons.wikimedia.org/wiki/File:Epicyclic_Gearing_Stationary_Ring.gif
  title: Epicyclic Gearing Stationary Ring.gif (Wikimedia Commons; Jahobr)
  shows: Animation of a planetary set with the ring held still (sun 24, planets 16, ring 56 teeth) and the carrier turning
  license: CC0 1.0 (public domain)
- url: https://commons.wikimedia.org/wiki/File:Planetary_Gear_Animation.gif
  title: Planetary Gear Animation.gif (Wikimedia Commons; Laserlicht, from a CC0 Thingiverse model)
  shows: 3D animation of a planetary gear set with three planets turning
  license: CC0 1.0 (public domain)
- url: https://en.wikipedia.org/wiki/Epicyclic_gearing
  title: Epicyclic gearing (Wikipedia)
  shows: Definitions, ratio equations, the assembly rule, several animations, and photos of applications
  license: Text CC BY-SA 4.0; images per file on Commons
- url: https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_systems.html
  title: 'Gear systems: planetary gear system (KHK Gear Technical Reference)'
  shows: Diagrams of the planetary, solar and star arrangements with the tooth-count conditions and worked ratio examples
  license: link only
- url: https://huangyan920.github.io/Mechanical/
  title: 'HUANGYAN920 Mechanical: interactive animations (entries ''PLANETARY-GEAR'' no. 14, ''EPICYCLIC'' no. 74 and ''DOUBLE-PLANET''
    no. 79)'
  shows: Adjustable browser animations of planetary and epicyclic gear trains
  license: MIT
make_it_yourself:
- url: https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  title: 'BOSL2 gears.scad: planetary_gears(), spur_gear() and ring_gear() (OpenSCAD library source)'
  what_it_is: Parametric gear library whose planetary_gears() function finds tooth counts, planet positions and profile shifts
    for a requested ratio and fixed member
  license: BSD 2-Clause
- url: https://www.printables.com/model/273375-planetary-gear-print-in-place-4751
  title: Planetary Gear Print in Place (4.75:1) (Dangineering, Printables) (URL from Printables API, page not opened)
  what_it_is: A simple planetary set that prints assembled as one file; print at 0.10-0.15 mm layers and turn it a few times
    to break it free
  license: CC0 (public domain)
- url: https://www.printables.com/model/114535-perfect-gear-bearing
  title: Perfect Gear Bearing (Gamma4D, Printables) (URL from Printables API, page not opened)
  what_it_is: Print-in-place planetary 'gear bearing' inspired by Emmett's design; 0% infill, 'ensure vertical shell thickness'
    off
  license: CC BY-SA
- url: https://www.printables.com/model/281222-nema17-planetary-gearbox
  title: NEMA17 Planetary Gearbox (Davide Mognaschi, Printables) (URL from Printables API, page not opened)
  what_it_is: Compact 3.7:1 (1 + 38/14) gearbox for a NEMA 17 stepper, designed for SLA resin but FDM-printable, assembled
    with M3 screws and greased
  license: CC BY-NC-SA
- url: https://www.printables.com/model/253289-pa11-carbon-fiber-planetary-gearbox
  title: PA11 Carbon Fiber Planetary Gearbox (Prusament, Printables) (URL from Printables API, page not opened)
  what_it_is: Stackable demonstration planetary gearbox with a crank, designed for PA11 carbon-fibre nylon; three stages give
    1:64
  license: CC BY-NC
- url: https://howtomechatronics.com/how-it-works/how-planetary-gears-work-3d-printed-planetary-gearbox-design-and-test/
  title: How Planetary Gears Work - 3D Printed Planetary Gearbox Design and Test (HowToMechatronics)
  what_it_is: Step-by-step design, printing and torque and backlash testing of a two-stage 16:1 PLA gearbox for a NEMA 17
    stepper
  license: link only
sources:
- https://en.wikipedia.org/wiki/Epicyclic_gearing
- https://commons.wikimedia.org/wiki/File:Epicyclic_Gearing_Stationary_Ring.gif
- https://commons.wikimedia.org/wiki/File:Planetary_Gear_Animation.gif
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_systems.html
- https://khkgears.net/new/gear_knowledge/Types_and_Mechanisms_of_Gear_Reducers.html
- https://www.machinedesign.com/motors-drives/article/21834575/planetary-gears-a-review-of-basic-design-criteria-and-new-options-for-sizing
- https://gm0.org/en/latest/docs/power-and-electronics/motor-guide/gearbox-anatomy.html
- https://www.revrobotics.com/rev-41-1600/
- https://technische-antriebselemente.de/en/guides/worm-vs-planetary-gearbox/
- https://howtomechatronics.com/how-it-works/how-planetary-gears-work-3d-printed-planetary-gearbox-design-and-test/
- https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
- https://www.metmo.co.uk/blogs/news/planetary-gears-explained-a-design-written-in-the-stars
- https://help.prusa3d.com/article/gearbox-alignment-core-one-l-core-one-xl-mk4-s-mk3-9-s_465779
- https://help.prusa3d.com/article/mk4s-glossary_980102
- https://help.prusa3d.com/article/pla_2062
- https://help.prusa3d.com/article/petg_2059
- https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
- https://huangyan920.github.io/Mechanical/
- https://arxiv.org/abs/2506.16356
- https://api.printables.com/graphql/
research: research/connection-types/results/Planetary_gear_set_epicyclic_gearing.json
image: null
glossary: [misalignment, backlash, self-locking, axial--radial, torque, pitch, crank, actuator, clearance, tolerance, form-fit--force-fit--material-bond,
  heat-set-insert, repeatability--accuracy, lubrication, infill, print-in-place]
---

A planetary gear set has a central sun gear, several planet gears that mesh with it and with an outer ring gear, and a carrier holding the planets, so holding one of the three parts still gives a compact, strong speed reduction (or increase) with the input and output on the same line.

**In plain words:** A small gear in the middle with several gears rolling round it inside a big ring that has teeth on the inside, like planets round the sun; turning the middle gear makes the frame holding the rolling gears turn much more slowly and strongly, on the same centre line. **Proper term:** Planetary gear set (epicyclic gear train).

**Also called:** planetary gearbox / planetary gearhead / planetary reducer / planetary gearmotor; epicyclic gearing / epicyclic gear train (Wikipedia); sun gear, planet gears, planet carrier and ring gear (also called the annulus or internal gear); 'planetary', 'solar' and 'star' types (KHK's names for the set with the ring, the sun or the carrier held still); multi-stage planetary gearbox (several sets stacked in one housing); gear bearing (a [print-in-place](../glossary.md#print-in-place) planetary set used as a bearing or fidget toy); compound planetary: meshed-planet, stepped-planet and Ravigneaux sets, as in automatic transmissions (Wikipedia); internal gear hub / hub gear (bicycles); UltraPlanetary (REV Robotics (brand)) and Yellow Jacket (goBILDA (brand)) robot gearmotors; Planetengetriebe (German).

## How it works

Each planet meshes with the sun on its inside and the ring on its outside. In the usual gearbox the ring is held still and the motor turns the sun: the planets are forced to roll round inside the ring, dragging the carrier round with them in the same direction but more slowly, so the speed is divided (and the turning force multiplied) by 1 + ring teeth / sun teeth (Wikipedia; KHK). Holding a different part gives a different ratio: with the carrier held the ring turns backwards at ring/sun, and with the sun held the ring drives the carrier with only a small reduction (KHK). Because the load is shared between several planets and their sideways forces cancel, it carries a lot of [torque](../glossary.md#torque) in a small round package with input and output on one axis, and stages can be stacked to multiply the ratio (Wikipedia). With nothing held, the three parts' speeds are linked by one equation, so the set can add two inputs, as in differentials and hybrid-car power-split drives (Wikipedia).

## Parts

A small assembly that acts as one unit: a sun gear (on the input shaft), usually three planet gears on pins or small bearings, a planet carrier (the frame that holds the planet pins and is usually the output), a ring gear with teeth on the inside (often part of the housing), bearings or bushings, and grease; stacking several such sets gives a multi-stage gearbox.

## Everyday examples

- A cordless drill or electric screwdriver: battery drills typically use a three-stage planetary reduction behind the motor (MetMo)
- A bicycle with gears inside the rear hub (3-, 7- or 11-speed hubs use epicyclic trains) (Wikipedia; MetMo)
- A car's automatic transmission, and the power-split drive in hybrid cars (Wikipedia)
- The extruder gearbox of a Prusa MK4 3D printer (Nextruder), and geared stepper motors in other printers (Prusa; Wikipedia)

## When to use it

Use it when you need a strong speed reduction in a small, round package with the output on the same line as the motor: robot joints and drivetrains (legged-robot joint [actuators](../glossary.md#actuator) use single-stage planetary gearboxes of roughly 5:1 to 11:1, Singh et al. 2025), arms, winches, geared stepper motors (a geared-down stepper also gets smaller steps, Wikipedia), extruders, and cordless tools. It carries more torque than spur gears of the same size because several planets share the load, it is efficient, has little [backlash](../glossary.md#backlash), and several stages or different held parts give a wide choice of ratios (Wikipedia; gm0).

## When not to use it

Avoid it when the load must stay put with the power off: it is not [self-locking](../glossary.md#self-locking), so add a brake or use a worm drive or a fine lead screw (TEA). For very high ratios in one step (roughly over 10:1) use more stages, a compound (split-ring) planetary, a strain-wave (harmonic) drive or a cycloidal drive; for near-zero backlash on a budget, strain-wave and cycloidal drives are the usual choices. For small ratios (under about 3:1) or shafts that are far apart, spur gears, belts or chains are simpler (Machine Design). For a turn round a corner use bevel or worm gears. If cost and simplicity matter more than size and strength, a spur gear train is cheaper (gm0).

## Details

- **What it does (jobs):**
  - change speed or turning force: a compact reduction (usually 3:1 to 10:1 per stage) behind a motor, or several speeds by holding different parts (drills, bicycle hubs, automatic transmissions)
  - let it move (turn, slide or bend): printed as a 'gear bearing', the set itself works as a bearing that carries a rotating part
- **Movement:** rotate: continuous rotation of input and output about the same axis, with no limit on the number of turns
- **Directions it can move (degrees of freedom):** 2 for the bare set, because the speeds of sun, carrier and ring are tied by one equation (N_s x w_s + N_r x w_r = (N_s + N_r) x w_c, Wikipedia), so any two decide the third; 1 once one part is held still, which is how it works as a normal gearbox
- **Special behaviour:**
  - none: it is not self-locking, torque-limiting or one-way by itself; planetary gearboxes need a separate holding brake to hold a vertical load (TEA)
  - self-aligning or self-centring: with several evenly spaced planets the sideways forces on the sun cancel ('purely torsional reactions', Wikipedia), so the sun is pushed toward the centre rather than off to one side
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it passes rotation on at a different speed
  - shape (the parts interlock; [form-fit](../glossary.md#form-fit--force-fit--material-bond)): the meshing teeth interlock
- **Input and output:** Rotation -> rotation on the same axis (in line). Ring held, sun in, carrier out: reduction 1 + R/S in the same direction ('planetary' type; 16-tooth sun, 16-tooth planets and 48-tooth ring give 4:1, KHK). Carrier held, sun in, ring out: R/S, reversed ('star' type, -3 with the same gears). Sun held, ring in, carrier out: 1 + S/R ('solar' type, 1.33) (KHK; Wikipedia). Practical single-stage reductions are 3:1 to 10:1, best 4:1-8:1 (Machine Design); stages multiply (two 4:1 stages give 16:1, HowToMechatronics; three stages of Prusament's printed gearbox give 1:64). Efficiency: about 3% lost per stage (Wikipedia), 90-98% per stage (TEA), about 94% for typical two-stage robot gearboxes (gm0); a two-stage 16:1 PLA printed gearbox delivered only about half its theoretical torque because of friction (HowToMechatronics). Back-drivable: yes; planetary gearboxes are never self-locking (TEA), although multi-stage, high-ratio units take a large torque to turn from the output ⚑ [uncertain].
- **Power:** passive (no power needed); it passes on power from a motor or hand [crank](../glossary.md#crank). If the motor loses power, a planetary gearbox does not hold the load by itself; a vertical load needs a separate holding brake (TEA)
- **Load:** Medium to heavy: the load is shared between the planets, so torque capacity is high and grows with the number of planets (Wikipedia); robot-kit planetary gearboxes are recommended for high-load uses such as drivetrains and arms, where spur gearboxes break (gm0); a 3D-printed two-stage 16:1 PLA gearbox on a NEMA 17 stepper gave about 2 N.m (20 N at 10 cm; the article writes 200 Nm, which is a unit slip) (HowToMechatronics). Strong in twist; weak points are the small sun gear (which is why ratios over about 10:1 per stage are avoided, Machine Design), the planet pins and bearings (high bearing loads, Wikipedia), and, with helical gears, the thrust they create, which needs bearings that take [axial](../glossary.md#axial--radial) load (Machine Design). Side loads on the output shaft depend on its bearings.
- **Play and precision:** Small backlash: lower than an equivalent spur gearbox (gm0); precision servo planetary gearheads are under 3 arcmin (TEA); a typical commercial unit measured 8 arcmin new and up to 15 arcmin after six months of wear (Machine Design); a well-tuned 3D-printed PLA gearbox measured about 18 arcmin (HowToMechatronics). [Repeatability](../glossary.md#repeatability--accuracy) is good once the backlash is taken up. It tolerates little [misalignment](../glossary.md#misalignment): the sun, carrier and ring must stay concentric, and imprecise [tolerances](../glossary.md#tolerance) give uneven load sharing between planets (MetMo); Prusa's extruder gearbox has an alignment procedure after assembly.
- **Taking it apart:** removable: a gearhead bolts to the motor face with its sun gear on the motor shaft, and the set can be opened and the gears replaced; print-in-place sets cannot be taken apart
- **How often it can be reused:** many times: bolted gearheads and cartridge systems (e.g. REV UltraPlanetary cartridges, swapped to change the ratio) can be taken apart and rebuilt repeatedly; print-in-place versions are one piece
- **Sealing:** none for an open gear set; commercial gearheads are closed housings with grease for life (Machine Design), which keeps most dirt out, but the gear set itself does not seal ⚑ [uncertain]
- **Adjustable:** no, not continuously: the ratio is fixed by the tooth counts. It can be changed by holding a different part (two-speed drills, bicycle hub gears and automatic transmissions lock or free the ring, sun or carrier) or by swapping or stacking stages (REV UltraPlanetary 3:1, 4:1 and 5:1 cartridges give nominal ratios from 3:1 to 60:1)
- **Access needed:** end of a tube or shaft: the sun gear fits on the end of the motor shaft and the gearbox bolts to the motor's face, with the output shaft on the same line
- **Materials:** Hardened steel for industrial and automotive sets; plastic and metal in small gearmotors ⚑ [uncertain]; 3D printing: EngineerDog ranks nylon > PLA > ABS > PETG for printed gears; Prusa makes a demonstration planetary gearbox in PA11 carbon-fibre nylon; Mognaschi's printed NEMA 17 gearbox is designed for engineering (nylon-like) resin on an SLA printer but can be FDM printed; steel pins, bronze bushings and ball bearings for the planets and output
- **Heat, cold, water and wear:** Needs constant [lubrication](../glossary.md#lubrication) (Wikipedia): grease can last the life of a sealed gearhead, while oil-filled units need maintenance every few thousand hours (Machine Design). Compact housings have limited ability to shed heat (MetMo). Backlash grows as the teeth wear (Machine Design). Printed PLA gears soften above about 60 C and degrade in UV light; PETG copes to about 80 C (Prusa), and EngineerDog notes PLA wears well only when kept cool.

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: planetary gearmotors and stepper gearheads, precision servo gearheads, cartridge systems for robot kits
  - 3D print (FDM): print-in-place demonstrators and gear bearings, and assembled gearboxes for steppers and robot joints
  - 3D print (resin): small precise gearboxes (Mognaschi's NEMA 17 gearbox is designed for SLA engineering resin)
  - CNC: machined or cut metal gears and housings for high-load gearboxes ⚑ [uncertain]
- **Printing it in one piece (print in place):** yes: several models print already assembled and working, e.g. Dangineering's 4.75:1 print-in-place planetary gear and the 'gear bearing' family (Gamma4D's Perfect Gear Bearing, inspired by Emmett's design); gearboxes that carry real load are usually printed as separate parts and assembled with pins, bearings and screws
- **Tools:** Hex keys and screws (e.g. M3 screws and nuts in Mognaschi's printed NEMA 17 gearbox); lithium or other grease; for printed gearboxes, bearings, steel pins and sometimes [heat-set inserts](../glossary.md#heat-set-insert) (HowToMechatronics used M3 threaded inserts); none for print-in-place sets
- **Difficulty:** moderate: it prints well (even in one piece), and free tools calculate the teeth, but the tooth counts must obey the ring = sun + 2 x planet and equal-spacing rules, and a gearbox that carries real torque needs an accurately calibrated printer, bearings and grease

### 3D printing tips

1) Choose tooth counts that fit: ring teeth = sun teeth + 2 x planet teeth, and (sun + ring) / number of planets must be a whole number or the planets will not all mesh at equal spacing (KHK; Wikipedia; HowToMechatronics). BOSL2's planetary_gears() works out tooth counts, positions and profile shifts for a target ratio. 2) Keep teeth printable: HowToMechatronics chose module 1.5 as about the smallest printable tooth, and EngineerDog suggests a 25 degree pressure angle, at least 13 teeth at 20 degrees or 9 at 25 degrees, and a face width of 3-5 x the circular [pitch](../glossary.md#pitch). 3) Aim for 3:1 to 10:1 per stage; above that the sun gets too small and weak (Machine Design), so stack stages instead. 4) Put planets on steel pins with bushings or bearings and washers on each side rather than plastic on plastic (HowToMechatronics used 6 mm pins, 8 mm bushings and M6 washers), and carry the carrier and output on ball bearings. 5) Tight fits trade friction for backlash: HowToMechatronics' tight PLA gearbox had only about 18 arcmin of play but lost about half its torque to friction, so test the [clearance](../glossary.md#clearance) and calibrate horizontal expansion (they used 0.02 mm, and 0.04 mm for holes). 6) Herringbone planets run smoothly and are self-aligning (BOSL2), so they stay in the ring without end plates, but plain helical gears push sideways and need bearings that take thrust (Machine Design). 7) For print-in-place sets use fine layers (0.10-0.15 mm) and turn the gears after printing to break any light fusing (Dangineering); for gear bearings Gamma4D suggests 0% [infill](../glossary.md#infill) and turning off 'ensure vertical shell thickness'. 8) Grease all moving parts generously, e.g. with lithium grease (Mognaschi). 9) Material: nylon wears best (EngineerDog); PLA softens above about 60 C and PETG copes to about 80 C (Prusa), so keep PLA gearboxes away from hot motors. 10) After assembly, align the housing: Prusa's extruder gearbox procedure loosens the cover screws, runs the gears, then tightens the screws in a set pattern.

### Buying one (off-the-shelf parts)

Planetary gearmotors (e.g. goBILDA Yellow Jacket and REV UltraPlanetary with 3:1, 4:1 and 5:1 cartridges (brands)); NEMA 17 stepper motors with planetary gearheads; precision servo planetary gearheads specified in arcmin of backlash; separate sun, planet and internal (ring) gears from gear makers such as KHK (brand); planet pins, bronze bushings and thin-section ball bearings (HowToMechatronics used 6805, 6803 and 6802 bearings); bicycle internal gear hubs (3-, 7- and 11-speed, MetMo); lithium grease.

## Rules of thumb

- Tooth counts: ring teeth = sun teeth + 2 x planet teeth (KHK Gear Technical Reference, 'Planetary gear system', eq. 17.1; HowToMechatronics).
- Equal spacing: (sun teeth + ring teeth) / number of planets must be a whole number (Wikipedia 'Epicyclic gearing'; HowToMechatronics; BOSL2 gears.scad notes that exact uniform spacing needs sun + ring to be a multiple of the number of planets).
- Ratios: ring held, sun in, carrier out = 1 + R/S; carrier held = -R/S (output reversed); sun held, ring in = 1 + S/R. Example with 16-tooth sun and planets and a 48-tooth ring: 4, -3 and 1.33 (KHK; Wikipedia).
- A single stage works best between 4:1 and 8:1; below 3:1 there is no room for the planets and above 10:1 the sun gear becomes too small (Howard Horn, Machine Design, 2012). BOSL2's planetary_gears() only accepts sun-to-carrier ratios larger than 2.
- Efficiency: about 3% lost per stage (Wikipedia); two-stage robot gearboxes about 94% versus about 85% for spur gearboxes (gm0); 90-98% per stage for industrial units (TEA).
- More planets carry more load (Wikipedia); helical planetary gearing carries 30-50% more torque than equivalent spur gearing (Machine Design).
- Backlash: precision servo gearheads under 3 arcmin (TEA); a commercial unit went from 8 to 15 arcmin in six months (Machine Design); a printed PLA gearbox measured about 18 arcmin (HowToMechatronics).
- Printed gears: 25 degree pressure angle, at least 9 teeth at 25 degrees (13 at 20 degrees), face width 3-5 x circular pitch, nylon best (EngineerDog).
- Not self-locking: add a holding brake if it must hold a vertical load with the power off (TEA).

## Common failures

1) Planets won't all mesh or the set won't assemble because the tooth counts break the ring = sun + 2 x planet or equal-spacing rules (KHK; Wikipedia). 2) Uneven load sharing from loose tolerances overloads one planet and wears it early (MetMo). 3) Printed gearboxes too tight, fused or grinding, so friction eats much of the torque (HowToMechatronics lost about half), or too loose, giving backlash. 4) Broken or stripped teeth on a too-small sun gear at high ratios (Machine Design's 10:1 limit). 5) Worn planet pins and bearings (high bearing loads, Wikipedia), or motor bearings damaged by the thrust of helical gears (Machine Design). 6) Wear from missing or dried-out grease, and backlash growing over time (Machine Design). 7) A misaligned housing, fixed by re-aligning it (Prusa).

## Safety

Meshing gears are in-running nip points that can catch fingers, hair and clothing (OSHA machine guarding), so keep the set enclosed. A small motor with a high-ratio planetary gearbox produces a large, slow torque that can crush or twist fingers. It does not hold a load when the power is lost, so a raised arm or load can fall unless there is a brake (TEA).

## Related

- Compound planetary gearbox (split-ring or Wolfrom planetary): two ring gears with slightly different tooth counts for a very high ratio in one stage
- Strain-wave gear (harmonic drive): very high ratio with almost no backlash in a flat package, but uses a flexing thin ring
- Cycloidal drive: a lobed disc rolling in a ring of pins; high ratio and shock resistant
- Differential (bevel gear differential): an epicyclic set used with two outputs that can turn at different speeds
- Spur gear train: cheaper and simpler, but the output is offset from the input and fewer teeth share the load (gm0)
- Worm drive: high ratio in one step at a right angle, and often self-locking, but much less efficient (TEA)
- Gear bearing: a print-in-place planetary set used as a rotating bearing rather than as a reducer

## Make it yourself

- [BOSL2 gears.scad: planetary_gears(), spur_gear() and ring_gear() (OpenSCAD library source)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad): Parametric gear library whose planetary_gears() function finds tooth counts, planet positions and profile shifts for a requested ratio and fixed member *(licence: BSD 2-Clause)*
- [Planetary Gear Print in Place (4.75:1) (Dangineering, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/273375-planetary-gear-print-in-place-4751): A simple planetary set that prints assembled as one file; print at 0.10-0.15 mm layers and turn it a few times to break it free *(licence: CC0 (public domain))*
- [Perfect Gear Bearing (Gamma4D, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/114535-perfect-gear-bearing): Print-in-place planetary 'gear bearing' inspired by Emmett's design; 0% infill, 'ensure vertical shell thickness' off *(licence: CC BY-SA)*
- [NEMA17 Planetary Gearbox (Davide Mognaschi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/281222-nema17-planetary-gearbox): Compact 3.7:1 (1 + 38/14) gearbox for a NEMA 17 stepper, designed for SLA resin but FDM-printable, assembled with M3 screws and greased *(licence: CC BY-NC-SA)*
- [PA11 Carbon Fiber Planetary Gearbox (Prusament, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/253289-pa11-carbon-fiber-planetary-gearbox): Stackable demonstration planetary gearbox with a crank, designed for PA11 carbon-fibre nylon; three stages give 1:64 *(licence: CC BY-NC)*
- [How Planetary Gears Work - 3D Printed Planetary Gearbox Design and Test (HowToMechatronics)](https://howtomechatronics.com/how-it-works/how-planetary-gears-work-3d-printed-planetary-gearbox-design-and-test/): Step-by-step design, printing and torque and backlash testing of a two-stage 16:1 PLA gearbox for a NEMA 17 stepper *(licence: link only)*

## Pictures, videos and models

- [Epicyclic Gearing Stationary Ring.gif (Wikimedia Commons; Jahobr)](https://commons.wikimedia.org/wiki/File:Epicyclic_Gearing_Stationary_Ring.gif): Animation of a planetary set with the ring held still (sun 24, planets 16, ring 56 teeth) and the carrier turning *(licence: CC0 1.0 (public domain))*
- [Planetary Gear Animation.gif (Wikimedia Commons; Laserlicht, from a CC0 Thingiverse model)](https://commons.wikimedia.org/wiki/File:Planetary_Gear_Animation.gif): 3D animation of a planetary gear set with three planets turning *(licence: CC0 1.0 (public domain))*
- [Epicyclic gearing (Wikipedia)](https://en.wikipedia.org/wiki/Epicyclic_gearing): Definitions, ratio equations, the assembly rule, several animations, and photos of applications *(licence: Text CC BY-SA 4.0; images per file on Commons)*
- [Gear systems: planetary gear system (KHK Gear Technical Reference)](https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_systems.html): Diagrams of the planetary, solar and star arrangements with the tooth-count conditions and worked ratio examples *(licence: link only)*
- [HUANGYAN920 Mechanical: interactive animations (entries 'PLANETARY-GEAR' no. 14, 'EPICYCLIC' no. 74 and 'DOUBLE-PLANET' no. 79)](https://huangyan920.github.io/Mechanical/): Adjustable browser animations of planetary and epicyclic gear trains *(licence: MIT)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 4 sentences on this page marked [uncertain].
- ⚑ Finder value `usual_process` = off-the-shelf part (best guess): first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ Research note: *Planetary gear set*: HowToMechatronics states "20 N at 10 cm = 200 Nm"; it is 2 N·m (200 N·cm). The entry uses the corrected value.

## Sources

- <https://en.wikipedia.org/wiki/Epicyclic_gearing>
- <https://commons.wikimedia.org/wiki/File:Epicyclic_Gearing_Stationary_Ring.gif>
- <https://commons.wikimedia.org/wiki/File:Planetary_Gear_Animation.gif>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_systems.html>
- <https://khkgears.net/new/gear_knowledge/Types_and_Mechanisms_of_Gear_Reducers.html>
- <https://www.machinedesign.com/motors-drives/article/21834575/planetary-gears-a-review-of-basic-design-criteria-and-new-options-for-sizing>
- <https://gm0.org/en/latest/docs/power-and-electronics/motor-guide/gearbox-anatomy.html>
- <https://www.revrobotics.com/rev-41-1600/>
- <https://technische-antriebselemente.de/en/guides/worm-vs-planetary-gearbox/>
- <https://howtomechatronics.com/how-it-works/how-planetary-gears-work-3d-printed-planetary-gearbox-design-and-test/>
- <https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/>
- <https://www.metmo.co.uk/blogs/news/planetary-gears-explained-a-design-written-in-the-stars>
- <https://help.prusa3d.com/article/gearbox-alignment-core-one-l-core-one-xl-mk4-s-mk3-9-s_465779>
- <https://help.prusa3d.com/article/mk4s-glossary_980102>
- <https://help.prusa3d.com/article/pla_2062>
- <https://help.prusa3d.com/article/petg_2059>
- <https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE>
- <https://huangyan920.github.io/Mechanical/>
- <https://arxiv.org/abs/2506.16356>
- <https://api.printables.com/graphql/>
