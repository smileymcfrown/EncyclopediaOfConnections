---
title: Spur gear pair and gear train
description: Meshing gears with straight teeth pass rotation between parallel shafts, changing speed and turning force in
  proportion to their tooth counts, reversing direction at each mesh, and multiplying their ratios when several pairs are
  chained on shared shafts.
num: 267
term: Spur gear pair and spur gear train (simple, compound and idler gear trains)
plain_name: 'Two or more toothed wheels with straight teeth, on parallel shafts, that mesh so turning one turns the next:
  a small wheel driving a big one turns it slower but with more force, a big one driving a small one turns it faster with
  less force'
aliases:
- spur gears / straight-cut gears / straight-toothed gears (Wikipedia)
- gear pair / gear set / gear mesh
- pinion and wheel / pinion and gear (the smaller gear is the pinion, the larger the wheel)
- driver gear and driven gear / input gear and output gear
- cog / cogwheel (informal)
- gear reduction / reduction gear / step-down gearing; step-up gearing / overdrive
- simple gear train (one gear per shaft)
- compound gear train / double reduction gear / multi-stage reducer / cluster gear / layshaft or countershaft gearbox
- idler gear / intermediate gear / reverse idler
- 'wheel train / going train (clocks and watches: wheels, pinions and arbors)'
- gearbox / gear reducer / speed reducer
- Stirnradgetriebe (German)
family: gear trains, gearboxes & transmissions
other_families: []
finder:
  job: [change speed or turning force, let it move]
  motion: rotate
  special_behaviour: []
  holding_principle: [not a holding joint, shape]
  reuse_cycles: many times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: 'yes'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, 3D print (resin), woodwork]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning]
  shaft_layout: [parallel]
  overload_response: not applicable
  clicks: not applicable
  tools: [hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming:
  tools:
    kind: source uncertain
    reason: '`tools_needed` is marked [uncertain] here: "…gears, EngineerDog); a feeler gauge or paper strip to check backlash
      [uncertain]…"'
  usual_process:
    kind: best guess
    reason: first-listed process is off-the-shelf, but `print_in_place` is yes
confirmed: []
open_points: []
uncertain_fields: [tools_needed, processes, environment_limits]
diagram_idea: 'Three panels: a small gear driving a big one with pitch circles drawn and arrows showing opposite rotation
  and ''slower but stronger''; the same pair with an idler in between showing same-direction output and unchanged ratio; and
  a compound train where a big and a small gear share a middle shaft, with the stage ratios written as 3:1 x 3:1 = 9:1.'
links:
- url: https://commons.wikimedia.org/wiki/File:Animated_two_spur_gears_1_2.gif
  title: Animated two spur gears 1 2.gif (Wikimedia Commons, by Jahobr)
  shows: A 14-tooth gear driving a 28-tooth gear (2:1 ratio), turning in opposite directions
  license: CC0 1.0 (public domain)
- url: https://commons.wikimedia.org/wiki/File:Animated_3_Gear_Row.gif
  title: Animated 3 Gear Row.gif (Wikimedia Commons, by Jahobr)
  shows: Three gears in a row (14, 28 and 42 teeth), showing how the middle gear passes motion along and the speeds change
  license: CC0 1.0 (public domain)
- url: https://commons.wikimedia.org/wiki/File:Example_of_a_Compound_Gear_Train.png
  title: Example of a Compound Gear Train.png (Wikimedia Commons, by Manuel Bieling)
  shows: Diagram of connected gears in a gearbox forming a compound gear train
  license: CC0 1.0 (public domain)
- url: https://en.wikipedia.org/wiki/Gear_train
  title: Gear train (Wikipedia)
  shows: Gear ratio, torque, idler gears (with a worked farm-machinery example), double reduction and hunting gear sets, with
    animations
  license: Text CC BY-SA 4.0; images per file on Commons
- url: https://www.youtube.com/watch?v=JTdSBcmtmsk
  title: IDLER Spur Gear - Animation (Drivetrain Hub, YouTube; title verified via YouTube oEmbed)
  shows: Animation of an idler gear between input and output spur gears
  license: link only
make_it_yourself:
- url: https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  title: BOSL2 gears.scad (OpenSCAD library source)
  what_it_is: Parametric involute spur, helical and ring gears with automatic profile shifting, backlash and clearance settings,
    and gear_dist() to compute the centre distance
  license: BSD 2-Clause
- url: https://geargenerator.com/
  title: Gear Generator (Abel Vincze)
  what_it_is: 'Browser-based involute gear designer and simulator: set teeth and module, add gears to a train, animate it
    and export (EngineerDog notes STL/CSV export became paid)'
  license: free online tool; exports may require payment
- url: https://www.printables.com/model/1123635-reduction-gearbox-2621441-gear-ratio
  title: Reduction Gearbox (262,144:1 Gear Ratio) (The Engineering Teacher, Printables) (URL from Printables API, page not
    opened)
  what_it_is: Compound gear train of nine 32/8-tooth (4:1) compound gears with a crank at each end, to feel how ratios multiply;
    gears can be swapped for shims to lower the ratio
  license: CC BY-NC
- url: https://www.printables.com/model/1374188-gear-ratio-demonstration-gear-box
  title: Gear Ratio Demonstration Gear Box (Jpxfrd, Printables) (URL from Printables API, page not opened)
  what_it_is: Printed 5:1 demonstration gearbox with handles, spacers and printed C-clips used as shaft collars
  license: CC0 (public domain)
- url: https://www.printables.com/model/516218-gear-fidget-trolerance-test
  title: Gear fidget + Trolerance test (EmilH, Printables) (URL from Printables API, page not opened)
  what_it_is: Gear fidget that doubles as a tolerance test, to find the gear clearance your printer can manage
  license: CC BY
sources:
- https://en.wikipedia.org/wiki/Gear_train
- https://en.wikipedia.org/wiki/Gear
- https://en.wikipedia.org/wiki/Wheel_train
- https://en.wikipedia.org/wiki/Servo_(radio_control)
- https://commons.wikimedia.org/wiki/File:Animated_two_spur_gears_1_2.gif
- https://commons.wikimedia.org/wiki/File:Animated_3_Gear_Row.gif
- https://commons.wikimedia.org/wiki/File:Example_of_a_Compound_Gear_Train.png
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear-trains.html
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/involute_gear_profile.html
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/calculation_gear_dimensions.html
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_backlash.html
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/mounting_accuracy_of_gears.html
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/design-of-plastic-gears.html
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/how_to_reduce_gear_noise.html
- https://khkgears.net/new/gear_knowledge/gear_technical_reference/damage_to_gears.html
- https://gearsolutions.com/departments/tooth-tips/addendum-modification-and-undercut/
- https://wiki.dtonline.org/index.php/Gear_Train
- https://wiki.dtonline.org/index.php/Idler_Gear
- https://www.notesandsketches.co.uk/Gears.html
- https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
- https://howtomechatronics.com/how-it-works/how-to-3d-print-gears-the-ultimate-guide/
- https://www.igus.com/custom-parts-services/3d-printing/3d-printed-gear
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
- https://geargenerator.com/
- https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
- https://help.prusa3d.com/article/pla_2062
- https://help.prusa3d.com/article/petg_2059
- https://www.youtube.com/watch?v=JTdSBcmtmsk
- https://api.printables.com/graphql/
research: research/connection-types/results/Spur_gear_pair_and_gear_train_simple_compound_idler.json
---

Meshing gears with straight teeth pass rotation between parallel shafts, changing speed and turning force in proportion to their tooth counts, reversing direction at each mesh, and multiplying their ratios when several pairs are chained on shared shafts.

**In plain words:** Two or more toothed wheels with straight teeth, on parallel shafts, that mesh so turning one turns the next: a small wheel driving a big one turns it slower but with more force, a big one driving a small one turns it faster with less force. **Proper term:** Spur gear pair and spur gear train (simple, compound and idler gear trains).

**Also called:** spur gears / straight-cut gears / straight-toothed gears (Wikipedia); gear pair / gear set / gear mesh; pinion and wheel / pinion and gear (the smaller gear is the pinion, the larger the wheel); driver gear and driven gear / input gear and output gear; cog / cogwheel (informal); gear reduction / reduction gear / step-down gearing; step-up gearing / overdrive; simple gear train (one gear per shaft); compound gear train / double reduction gear / multi-stage reducer / cluster gear / layshaft or countershaft gearbox; idler gear / intermediate gear / reverse idler; wheel train / going train (clocks and watches: wheels, pinions and arbors); gearbox / gear reducer / speed reducer; Stirnradgetriebe (German).

## How it works

Each gear's teeth are shaped (as involute curves) so the two gears behave like two circles (the pitch circles) rolling on each other without slipping (Wikipedia 'Gear train'; EngineerDog). The gear with fewer teeth turns faster: speed ratio = teeth on driven gear / teeth on driver, and the turning force (torque) is multiplied by the same ratio, minus a small friction loss (Wikipedia; DT Online). Two meshing outside gears turn in opposite directions (KHK). An idler gear in between makes the output turn the same way as the input without changing the ratio (Wikipedia; KHK); a compound train puts a big and a small gear together on a middle shaft (layshaft), so the stage ratios multiply (DT Online; KHK), e.g. two 3:1 stages give 9:1.

## Parts

A few parts per stage: two gears, each fixed to a shaft (or turning on an axle), two or more bearings per shaft, and a frame or housing that holds the shafts parallel at the right distance. A compound train adds shared intermediate shafts carrying a large and a small gear fixed together; an idler adds one extra gear on its own axle.

## Everyday examples

- A mechanical clock or wind-up watch: its 'wheel train' of large wheels driving small pinions (Wikipedia 'Wheel train')
- A hobby servo or small gearmotor: a tiny fast motor driving a train of reduction gears (Wikipedia 'Servo (radio control)')
- A car's manual gearbox, where a reverse idler gear is slid in to make the car go backwards (Wikipedia 'Gear train')
- Construction and school gear kits such as Meccano, K'Nex or Engino gear sets (brands), used to build and feel gear trains (DT Online buyers' guide)

## When to use it

Use spur gears whenever you need a fixed, exact speed or torque change between parallel shafts: slowing a small motor down for a robot arm, winch, turntable or clock, speeding up a hand crank, keeping two shafts exactly in step, or reversing direction with an idler. They are the simplest, cheapest and most efficient gears (about 98-99.5% per mesh, KHK), easy to design with free generators, easy to print, and create no end thrust, so plain bearings or simple ball bearings are enough. Chain several stages (compound train) for big ratios in a small space.

## When not to use it

Avoid spur gears for fast, quiet drives: they are noisy at high speed (Wikipedia 'Gear'); use helical or herringbone gears. For large reductions in one compact step use a planetary, worm, cycloidal or strain-wave gearbox; for a drive that must hold a load when the motor stops use a worm drive or add a brake; for shafts far apart use a belt or chain instead of a long chain of idlers (Wikipedia 'Gear train'); for zero backlash use anti-backlash gears or a strain-wave drive; for shafts at an angle use bevel or worm gears; if an overload must not break teeth, add a slip clutch.

## Details

- **What it does (jobs):**
  - change speed or turning force: slows a fast, weak motor down to a slow, strong output (reduction) or speeds a slow input up (step-up)
  - let it move (turn, slide or bend): passes rotation from one shaft to a parallel shaft, and can reverse or keep its direction (idler gear)
- **Movement:** rotate: continuous rotation in either direction, unlimited turns
- **Directions it can move (degrees of freedom):** 1: in any gear train all the gears' angles are tied together by the teeth, so choosing the angle of one gear fixes all the others (plus a little free play from backlash)
- **Special behaviour:**
  - none: a spur gear train is not self-locking, one-way or torque-limiting; it simply passes motion in both directions. Very high compound ratios become practically impossible to turn from the output end (e.g. a 262,144:1 printed demonstration gearbox, 'The Engineering Teacher', Printables), but that is friction, not a true lock.
- **How it holds:**
  - not a holding joint (it moves or passes on motion)
  - shape (the parts interlock; form-fit): the teeth interlock, so the gears cannot slip relative to each other as a belt or friction wheel can
- **Input and output:** Continuous rotation -> continuous rotation. Ratio of one stage = driven teeth / driver teeth (e.g. 13 to 42 teeth gives 3.23:1, Wikipedia); compound trains multiply stage ratios (e.g. four 2:1 stages = 16:1, HowToMechatronics; nine 4:1 stages = 262,144:1, 'The Engineering Teacher'). Idler gears do not change the ratio. Direction: reversed at each external mesh; an idler or a two-stage train makes input and output turn the same way (KHK). Efficiency: 98.0-99.5% per spur mesh, not counting bearing and lubricant losses (KHK gear types table), so losses add up stage by stage. Shaft arrangement: parallel. Back-drivable: yes (you can turn the input by turning the output), though very high ratios become effectively stuck from the output side because of friction.
- **Power:** passive (no power needed); driven by a motor, crank or spring. If the motor loses power the train does not hold a load (it back-drives), unless the ratio is so high that friction holds it
- **Load:** Light to heavy: from clock and toy gears to steel industrial gearboxes. Tooth strength rises with tooth size (module) and face width: doubling the width roughly doubles the strength (EngineerDog). Each tooth is loaded like a small cantilever and can snap at its root under shock loads (EngineerDog; KHK 'Damage to gears'). Spur gears create no axial (end) thrust (Wikipedia 'Gear'), but the tooth force pushes the two shafts apart, more so at higher pressure angles (BOSL2; EngineerDog), so shafts and housing must be stiff. Printed PLA spur gears of module 1.5 broke at about 117 N on a test arm (about 35 N·m) in one test (HowToMechatronics).
- **Play and precision:** Backlash: small to noticeable. Some backlash is necessary for smooth running (KHK); it increases if the centre distance grows and vanishes (gears jam) if it shrinks (KHK). Printed trains have noticeable play: a four-stage 16:1 printed spur gearbox measured about 151 arcminutes (about 2.5 degrees) of backlash at the output (HowToMechatronics). Precision: gears track rotation precisely apart from backlash, which is why they are used in watches (Wikipedia 'Gear'). Misalignment: low tolerance; shafts must be parallel and at the correct centre distance, or teeth contact only at one edge, causing noise, wear and breakage (KHK 'Mounting accuracy').
- **Taking it apart:** removable: gears come off their shafts by undoing set screws, clamp hubs, keys or retaining rings, and the housing comes apart
- **How often it can be reused:** many times: gear trains are repeatedly disassembled for maintenance; limits are tooth wear and the hub-to-shaft joint (see the shaft-to-hub entry)
- **Sealing:** none: the gears themselves seal nothing; a closed gearbox housing (often with shaft seals) keeps grease or oil in and dirt out
- **Adjustable:** no for the ratio of a given set (change gears to change ratio; 'change gears' and sliding-gear gearboxes do this); backlash can be adjusted by moving one shaft slightly closer or further (larger centre distance = more backlash, KHK) or by profile shifting in design
- **Access needed:** end of a tube or shaft: gears slide onto their shafts from the free end, and the train is assembled by opening the frame or housing
- **Materials:** Steel, cast iron (quieter than steel, KHK), brass (clocks), and plastics: acetal (POM, Duracon) and nylon (MC Nylon) run with little or no lubrication but change size with heat and moisture (KHK 'Design of plastic gears'). Printed gears: EngineerDog ranks nylon > PLA > ABS > PETG; in HowToMechatronics' break test PLA and ASA were strongest and PETG and a poor nylon weakest; igus prints gears in self-lubricating iglide polymers that lasted five times longer than milled POM gears in its rack test (igus). Wood and plywood gears are made from printed templates (EngineerDog lists Matthias Wandel's gear template generator).
- **Heat, cold, water and wear:** Heat: printed PLA gears soften above 60 C; PETG is fine below 80 C (Prusa); ABS softens around 105 C (EngineerDog). Plastic gears in general lose strength as temperature rises, expand much more than steel with heat, change size when they absorb moisture (especially nylon), and become brittle at about -30 to -50 C (KHK 'Design of plastic gears'). Lubrication: metal gears need grease or oil; lack of lubrication causes wear and pitting (KHK 'Damage to gears'); dust in open gears speeds up wear. Plastic gears under constant load may creep and lose tooth shape over time ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: metal and plastic spur gears bought by module (metric) or diametral pitch (inch), and complete gearmotors and gearboxes
  - 3D print (FDM): gears of module about 1 and up, demonstration trains, reducers and toy gearboxes
  - 3D print (SLS powder): wear-resistant printed gears (igus iglide)
  - 3D print (resin): small, fine-toothed gears ⚑ [uncertain]
  - laser cut: flat gears from acrylic or plywood using a generated profile (e.g. Gear Generator exports)
  - CNC: hobbing, shaping or milling metal gears; industrial gears are cut by generating tools such as hobs (Gear Solutions)
  - woodwork: wooden gears cut from paper templates (EngineerDog links Matthias Wandel's gear template generator)
- **Printing it in one piece (print in place):** yes: print-in-place spur gear demonstrators exist (e.g. ForgeFiles' 'Gear Train Demonstration Kit, Print in Place, 4 Meshing Spur'), but working and load-bearing trains are usually printed as separate gears and mounted on metal shafts or pins
- **Tools:** Hex keys, screwdrivers or spanners for hubs, shafts and housing; circlip pliers for retaining rings; grease (lithium, PTFE or silicone for printed gears, EngineerDog); a feeler gauge or paper strip to check backlash ⚑ [uncertain]
- **Difficulty:** easy to moderate: free generators draw correct involute teeth and gears print flat without supports, but holding the shafts parallel at the exact centre distance, and fixing gears firmly to shafts, take care

### 3D printing tips

1) Don't draw teeth by hand: use a generator (BOSL2 spur_gear(), Onshape 'Spur Gear' FeatureScript, Gear Generator) so the involute shape is right; meshing gears must share the same module (tooth size) and pressure angle (KHK; BOSL2). 2) Centre distance = module x (teeth1 + teeth2) / 2 (KHK), e.g. module 3 with 12 and 24 teeth sits 54 mm apart; then add clearance by thinning teeth or offsetting the profile rather than guessing. HowToMechatronics used -0.15 mm horizontal expansion in the slicer and a 0.1 mm Z offset to stop 'elephant's foot' distorting the first layers. 3) Print gears flat on the bed with the axle vertical; holes print undersize, so oversize the bore about 0.13 mm (0.005 in) or ream it, and clean teeth with a blade (EngineerDog). 4) Make teeth big and wide: avoid tiny teeth (gaps appear inside them even at 100% infill), use at least 13 teeth at 20 degrees or 9 at 25 degrees (EngineerDog), face width 3-5 x circular pitch (EngineerDog), at least 35% infill and 5 or more walls (HowToMechatronics); its module tests (modules 1 to 2.5 at a fixed 50 mm centre distance) confirmed that bigger teeth and wider gears are stronger, and that old or damp filament can spoil the result (HowToMechatronics). 5) Choose 'hunting' tooth counts with no common factor (15 and 31 rather than 15 and 30) so wear spreads over all teeth (EngineerDog; Wikipedia 'Gear train'). 6) Support shafts close to the gears and use ball bearings; flexing mounts open up the centre distance and load only the tooth tips (HowToMechatronics saw bolts bend in its test rig). 7) Fix gears to shafts with a D-flat or hex bore, a captive-nut set screw or a clamp, not a press fit on a smooth bore (EngineerDog; see the shaft-to-hub entry). 8) Material: PLA is stiff and wears well but softens above 60 C (Prusa); PETG is fine below 80 C (Prusa) but softer; nylon wears best but absorbs water; grease loaded gears with lithium, PTFE or silicone grease (not WD-40) (EngineerDog). 9) Expect spur gears to be the loudest of the printed types (about 77 dB vs 74-75 dB for helical and herringbone in one test) but the most efficient, to vibrate more than helical or herringbone gears in a multi-stage reducer, and to have noticeable backlash (HowToMechatronics).

### Buying one (off-the-shelf parts)

Spur gears (steel, stainless, brass, plastic; plain bore, set-screw hub or clamp hub) by module, e.g. KHK (brand) stock gears; plastic spur gears in acetal (Duracon) and MC Nylon (KHK); internal gears; gear racks; hobby servo and gearmotor gearboxes (a small motor driving a train of reduction gears, Wikipedia 'Servo (radio control)'); clock wheel and pinion sets; school and construction-kit gear sets such as Meccano, K'Nex and Engino (brands; DT Online buyers' guide); shafts, bearings, spacers and retaining rings to mount them.

## Rules of thumb

- Gears only mesh if they have the same module (tooth size) and the same pressure angle; 20 degrees is standard, 14.5 is the old standard (KHK 'Involute gear profile'; BOSL2 gears.scad).
- Speed ratio = driven teeth / driver teeth; torque is multiplied by the same ratio (Wikipedia 'Gear train'; DT Online). Stage ratios multiply in a compound train; idler gears don't change the ratio but reverse direction (Wikipedia; KHK 'Gear trains').
- Standard spur gear dimensions (KHK Table 4.1): pitch diameter d = module x teeth; centre distance a = m(z1 + z2)/2; tip diameter = d + 2m; tooth depth = 2.25m; root diameter = d - 2.5m. Example: m = 3, 12 and 24 teeth gives a = 54 mm (KHK 'Calculation of gear dimensions').
- Undercut: at 20 degrees pressure angle a standard spur gear needs at least 17 teeth to avoid undercut, though 16 or fewer can still be usable; at 14.5 degrees it is 32 (Gear Solutions 'Addendum modification and undercut'; BOSL2 gears.scad). BOSL2 cites a rule of thumb that 14 teeth is fine at 20 degrees, and profile shifting fixes undercut on smaller pinions (BOSL2; KHK).
- Printed gears: at least 13 teeth at 20 degrees or 9 at 25 degrees; face width 3-5 x circular pitch; doubling width about doubles strength (EngineerDog).
- Efficiency of a spur mesh: 98.0-99.5% (not counting bearings and lubricant) (KHK 'Gear types and terminology', Table 1.1).
- Some backlash is required; a larger centre distance increases backlash and a smaller one can jam the gears (KHK 'Gear backlash' and 'Mounting accuracy of gears').
- Use tooth counts with no common factor (a hunting set, e.g. 15 and 31) to spread wear (EngineerDog; Wikipedia 'Gear train').
- Printed gear settings from one test series: horizontal expansion about -0.15 mm, infill at least 35%, 5 or more walls (HowToMechatronics; test your own printer).
- Plastic gears grow with heat and moisture: KHK's example uses MC Nylon's expansion coefficient of 9 x 10^-5 per C, so a 1010 mm nylon rack lengthens about 1.8 mm for a 20 C rise (about 0.09 mm per 100 mm per 10 C); nylon also swells as it absorbs water, so allow extra backlash (KHK 'Design of plastic gears').

## Common failures

1) Teeth skip or jam because the centre distance is wrong or the frame flexes: check centre distance = m(z1 + z2)/2 plus clearance, and stiffen supports (KHK; HowToMechatronics). 2) Broken teeth from shock loads, small teeth or too narrow a face: use a larger module, wider gears and more walls or infill (EngineerDog; HowToMechatronics). 3) Rapid wear, noise and heat from poor lubrication or bad alignment (KHK 'Damage to gears'; 'How to reduce gear noise'). 4) Rough, jerky meshing from badly drawn teeth or 'elephant's foot' on the first layers: use a generator and correct the first layer (EngineerDog; HowToMechatronics). 5) Undercut, weak teeth on small pinions: use at least 17 teeth at 20 degrees or a profile shift (Gear Solutions; BOSL2). 6) Gear slipping on its shaft (really a hub failure): use a D-flat, hex, clamp or key (EngineerDog). 7) Too much backlash in a multi-stage printed gearbox: fewer stages, bigger printed accuracy, or anti-backlash gears (HowToMechatronics). 8) Plastic gears binding when warm or damp: allow extra backlash (KHK).

## Safety

Meshing gears create an in-running nip point that can catch fingers, hair and clothing (OSHA machine guarding); cover them, especially with motors. High-ratio gearboxes multiply a small motor's torque enough to crush fingers or break things at the output. A geared lift or arm can back-drive and drop its load when power is removed unless there is a brake. Breaking plastic teeth can fling small fragments.

## Related

- Herringbone and helical gears: slanted teeth, quieter and stronger at speed; helical gears push sideways along the shaft, herringbone cancels that
- Rack and pinion: a spur gear driving a straight toothed bar, turning rotation into sliding
- Bevel gears (incl. mitre and crown gears): for shafts that meet at an angle
- Worm drive (worm and worm wheel): large reduction in one step and usually not back-drivable, but less efficient
- Planetary gear set (epicyclic gearing): spur gears arranged around a sun gear for high ratios with input and output in line
- Compound planetary gearbox, cycloidal drive and strain-wave gear (harmonic drive): compact very-high-ratio reducers
- Belt drives and chain and sprocket drive: pass rotation between shafts that are far apart; belts can slip, chains stretch
- Friction drives and CVTs: smooth wheels pressed together; can slip, but ratio can vary
- Anti-backlash gear (split scissor gear): removes the backlash of a spur pair
- Intermittent gear and non-circular gears: special spur-like gears that give stop-go or varying speed
- Lantern gear (pin gear): a simple pin-and-disc gear that is easy to make from dowels
- Differential (bevel gear differential): lets two outputs turn at different speeds
- Shaft-to-hub joints (key, set screw, D-flat, clamp hub): how each gear is fixed to its shaft

## Make it yourself

- [BOSL2 gears.scad (OpenSCAD library source)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad): Parametric involute spur, helical and ring gears with automatic profile shifting, backlash and clearance settings, and gear_dist() to compute the centre distance *(licence: BSD 2-Clause)*
- [Gear Generator (Abel Vincze)](https://geargenerator.com/): Browser-based involute gear designer and simulator: set teeth and module, add gears to a train, animate it and export (EngineerDog notes STL/CSV export became paid) *(licence: free online tool; exports may require payment)*
- [Reduction Gearbox (262,144:1 Gear Ratio) (The Engineering Teacher, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1123635-reduction-gearbox-2621441-gear-ratio): Compound gear train of nine 32/8-tooth (4:1) compound gears with a crank at each end, to feel how ratios multiply; gears can be swapped for shims to lower the ratio *(licence: CC BY-NC)*
- [Gear Ratio Demonstration Gear Box (Jpxfrd, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1374188-gear-ratio-demonstration-gear-box): Printed 5:1 demonstration gearbox with handles, spacers and printed C-clips used as shaft collars *(licence: CC0 (public domain))*
- [Gear fidget + Trolerance test (EmilH, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/516218-gear-fidget-trolerance-test): Gear fidget that doubles as a tolerance test, to find the gear clearance your printer can manage *(licence: CC BY)*

## Pictures, videos and models

- [Animated two spur gears 1 2.gif (Wikimedia Commons, by Jahobr)](https://commons.wikimedia.org/wiki/File:Animated_two_spur_gears_1_2.gif): A 14-tooth gear driving a 28-tooth gear (2:1 ratio), turning in opposite directions *(licence: CC0 1.0 (public domain))*
- [Animated 3 Gear Row.gif (Wikimedia Commons, by Jahobr)](https://commons.wikimedia.org/wiki/File:Animated_3_Gear_Row.gif): Three gears in a row (14, 28 and 42 teeth), showing how the middle gear passes motion along and the speeds change *(licence: CC0 1.0 (public domain))*
- [Example of a Compound Gear Train.png (Wikimedia Commons, by Manuel Bieling)](https://commons.wikimedia.org/wiki/File:Example_of_a_Compound_Gear_Train.png): Diagram of connected gears in a gearbox forming a compound gear train *(licence: CC0 1.0 (public domain))*
- [Gear train (Wikipedia)](https://en.wikipedia.org/wiki/Gear_train): Gear ratio, torque, idler gears (with a worked farm-machinery example), double reduction and hunting gear sets, with animations *(licence: Text CC BY-SA 4.0; images per file on Commons)*
- [IDLER Spur Gear - Animation (Drivetrain Hub, YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=JTdSBcmtmsk): Animation of an idler gear between input and output spur gears *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 3 sentences on this page marked [uncertain].
- ⚑ Finder value `tools` = hand tools (source uncertain): `tools_needed` is marked ⚑ [uncertain] here: "…gears, EngineerDog); a feeler gauge or paper strip to check backlash ⚑ [uncertain]…"
- ⚑ Finder value `usual_process` = off-the-shelf part (best guess): first-listed process is off-the-shelf, but `print_in_place` is yes

## Sources

- <https://en.wikipedia.org/wiki/Gear_train>
- <https://en.wikipedia.org/wiki/Gear>
- <https://en.wikipedia.org/wiki/Wheel_train>
- <https://en.wikipedia.org/wiki/Servo_(radio_control)>
- <https://commons.wikimedia.org/wiki/File:Animated_two_spur_gears_1_2.gif>
- <https://commons.wikimedia.org/wiki/File:Animated_3_Gear_Row.gif>
- <https://commons.wikimedia.org/wiki/File:Example_of_a_Compound_Gear_Train.png>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear-trains.html>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/involute_gear_profile.html>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/calculation_gear_dimensions.html>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_backlash.html>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/mounting_accuracy_of_gears.html>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/design-of-plastic-gears.html>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/how_to_reduce_gear_noise.html>
- <https://khkgears.net/new/gear_knowledge/gear_technical_reference/damage_to_gears.html>
- <https://gearsolutions.com/departments/tooth-tips/addendum-modification-and-undercut/>
- <https://wiki.dtonline.org/index.php/Gear_Train>
- <https://wiki.dtonline.org/index.php/Idler_Gear>
- <https://www.notesandsketches.co.uk/Gears.html>
- <https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/>
- <https://howtomechatronics.com/how-it-works/how-to-3d-print-gears-the-ultimate-guide/>
- <https://www.igus.com/custom-parts-services/3d-printing/3d-printed-gear>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad>
- <https://geargenerator.com/>
- <https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions>
- <https://help.prusa3d.com/article/pla_2062>
- <https://help.prusa3d.com/article/petg_2059>
- <https://www.youtube.com/watch?v=JTdSBcmtmsk>
- <https://api.printables.com/graphql/>
