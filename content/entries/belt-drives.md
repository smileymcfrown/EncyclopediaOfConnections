---
title: Belt drives
description: A flexible loop runs around two or more pulleys and carries rotation from one shaft to another, speeding it up
  or slowing it down according to the pulley sizes; toothed (timing) belts mesh like gears and never slip, while V-belts and
  round belts grip by friction and can slip when overloaded.
num: 100
term: 'Belt drive (belt and pulley drive): toothed timing belt (synchronous belt drive), V-belt drive and round-belt drive'
plain_name: A loop of belt, like a strong rubber band or a toothed strap, wrapped around two wheels so that turning one wheel
  turns the other; different wheel sizes make the second wheel turn faster or slower
aliases:
- belt and pulley
- pulley belt / drive belt
- timing belt, toothed belt, synchronous belt, cogged belt (the toothed kind)
- GT2 belt / 2GT belt (the 2 mm-pitch toothed belt in most 3D printers; PowerGrip GT (brand) is the Gates name for the tooth
  profile)
- HTD belt, T2.5 / T5 belt, MXL / XL belt (other toothed-belt profiles)
- V-belt, vee belt, wedge belt (e.g. SPZ, SPA sections), fan belt
- poly-V belt, multi-groove or multi-rib belt, serpentine belt (car engines)
- round belt, O-ring belt, polycord, urethane or polyurethane (PU) round belt
- flat belt (the older friction type, still in conveyors)
- open belt drive (both pulleys turn the same way) / crossed belt drive (they turn opposite ways)
- Zahnriemen (German, toothed belt), Keilriemen (German, V-belt)
family: gear trains, gearboxes & transmissions
other_families: [torque limiting & slip, clutches & couplings]
finder:
  job: [change speed or turning force, change the kind of motion, slip or let go when overloaded]
  motion: rotate
  special_behaviour: [torque-limiting, motion conversion, self-aligning or self-centring, quick-release]
  holding_principle: [not a holding joint, shape, friction or clamping]
  reuse_cycles: many times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), 3D print (resin)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning, straight push or pull]
  shaft_layout: [parallel, crossed]
  overload_response: slips and keeps going
  clicks: not applicable
  tools: [soldering iron, welding or brazing torch, hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'yes'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [special_behaviour, processes, environment_limits, related, make_it_yourself]
diagram_idea: Three side-by-side cut-away pulleys showing a toothed belt locked into grooves, a V-belt wedged into its groove
  and a round belt sitting in a V-groove, above an animation of a small pulley driving one three times bigger (with rev counters
  showing 3:1), and a crossed-belt version turning the other way.
links:
- url: https://commons.wikimedia.org/wiki/File:Power_transmission_belt.gif
  title: Power transmission belt.gif (Wikimedia Commons, OSHA)
  shows: Animation of a belt running onto its pulley, showing the in-running nip point
  license: Public domain (work of the US Department of Labor)
- url: https://commons.wikimedia.org/wiki/File:Belt_drives_profiles.svg
  title: Belt drives profiles.svg (Wikimedia Commons, by Wittiko)
  shows: Cross-sections of a flat belt, V-belt, round belt and poly-V belt in their pulley grooves
  license: CC BY 4.0
- url: https://commons.wikimedia.org/wiki/File:Pu-Rundriemen.jpg
  title: Pu-Rundriemen.jpg (Wikimedia Commons, by Seilerei Pflug)
  shows: Photo of polyurethane round belts
  license: CC BY-SA 3.0
- url: https://507movements.com/mm_001.html
  title: '507 Mechanical Movements, No. 1: simple pulleys and an open belt'
  shows: Historic 1868 drawing with an animated version of an open belt drive in which both pulleys turn the same way
  license: Book public domain; website animation link only
- url: https://www.youtube.com/watch?v=j8G0LAX9MVg
  title: 3D Printed Pulleys and Round Belts (Polyurethane Belt) (Jesse Parker, YouTube)
  shows: Video of 3D-printed pulleys running on polyurethane round belts
  license: link only (standard YouTube licence)
make_it_yourself:
- url: https://www.printables.com/model/333720-gt2-pulley-the-big-collection-updated
  title: GT2 Pulley - the big collection updated (RH3D, Printables)
  what_it_is: Ready-to-print GT2 pulleys in many tooth counts and bore sizes (5-10 mm), with set-screw, nut or collet fixing;
    bores designed 0.1 mm oversize
  license: CC BY-NC-SA
- url: https://www.printables.com/model/1183441-oepu-gt2-pulley-collection-parametric (URL from Printables API, page not opened)
  title: '[OEPU] GT2 Pulley Collection - Parametric (OstrichEngineering, Printables)'
  what_it_is: Parametric Fusion 360 model plus STLs of GT2 pulleys in many sizes
  license: GNU GPL v3.0
- url: https://raw.githubusercontent.com/rbuckland/openscad.parametric-pulley/master/Pulley_T-MXL-XL-HTD-GT2_N-tooth.scad
  title: openscad.parametric-pulley (rbuckland's modular version of droftarts' Thingiverse 'Parametric pulley', thing:16627)
  what_it_is: OpenSCAD script that generates toothed pulleys for MXL, 40DP, XL, H, T2.5, T5, T10, AT5, HTD 3/5/8 mm and GT2
    2/3/5 mm belts with any tooth count, flanges and captive nuts
  license: '[uncertain] not stated in the repository; the original Thingiverse page could not be opened'
- url: https://www.printables.com/model/46639-tension-meter-for-the-gt2-belts-of-i3-mk3s-or-prus
  title: Tension Meter for the GT2 belts of i3 MK3S+ or Prusa MINI+ (Prusament, Printables)
  what_it_is: Printed flexure gauge that clips on a GT2 belt and shows whether tension is between MIN and MAX; must be printed
    in Prusament PETG from the supplied G-code
  license: CC BY-NC-ND
- url: https://www.printables.com/model/987627-6mm-bore-single-groove-pulley-for-round-belt (URL from Printables API, page
    not opened)
  title: 6mm Bore Single Groove Pulley for Round Belt (themadjem, Printables)
  what_it_is: 34 mm single V-groove pulley for 3-5 mm polyurethane round belts, 6 mm bore with captive M3 nut
  license: CC BY-SA
- url: https://hackaday.io/project/182852-3d-printed-gt2-profile-tpu-belt-with-pla-sprockets
  title: 3D Printed GT2 Profile TPU Belt with PLA Sprockets (Hackaday.io)
  what_it_is: A 60-tooth, 6 mm wide GT2-profile belt printed in TPU running on two 20-tooth PLA pulleys, driven by an N20
    gear motor
  license: '[uncertain] not stated on the project page'
sources:
- https://en.wikipedia.org/wiki/Belt_(mechanical)
- https://en.wikipedia.org/wiki/Toothed_belt
- https://en.wikipedia.org/wiki/Timing_belt_(camshaft)
- https://roymech.org/Useful_Tables/Drive/Belt_Drives.html
- https://roymech.org/Useful_Tables/Drive/Timing_belts.html
- https://roymech.org/Useful_Tables/Drive/Vee_belts.html
- https://docs.rs-online.com/5016/0900766b8002d3b7.pdf
- https://www.notesandsketches.co.uk/Pulleys.html
- https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/belt.html
- https://help.prusa3d.com/glossary/belt-tension_1597
- https://help.prusa3d.com/article/adjusting-belt-tension-mk4-s-mk3-9-s-mk3-5-s-mk3-s_112380
- https://www.filastruder.com/blogs/news/gates-belt-2gt-gt2-gt3-myths-and-legends
- https://www.dhm-online.com/en/blog/gt2-belts-and-pulleys-for-3d-printers-complete-guide-n240
- https://meta-matic.com/en/3d/gt2-pulley/guide/
- https://hackaday.io/project/162982-paper-pikon-with-1000mm-focal-length/log/158387-3d-printed-pulleys
- https://hackaday.io/project/182852-3d-printed-gt2-profile-tpu-belt-with-pla-sprockets
- https://hackaday.com/2024/05/15/custom-polyurethane-belts-made-easy/
- https://cabaret.co.uk/making-urethane-belts-for-automaton-projects-dugs-tips-10/
- https://durabelt.com/faq.php
- https://www.durabelt.com/crosssectioncalcinfo.php
- https://www.osha.gov/etools/woodworking/machine-hazards/nip-points
- https://commons.wikimedia.org/wiki/Category:Belt_drives
- https://commons.wikimedia.org/wiki/File:Power_transmission_belt.gif
- https://commons.wikimedia.org/wiki/File:Belt_drives_profiles.svg
- https://commons.wikimedia.org/wiki/File:Pu-Rundriemen.jpg
- https://507movements.com/mm_001.html
- https://www.youtube.com/watch?v=j8G0LAX9MVg
- https://raw.githubusercontent.com/rbuckland/openscad.parametric-pulley/master/Pulley_T-MXL-XL-HTD-GT2_N-tooth.scad
- https://raw.githubusercontent.com/rbuckland/openscad.parametric-pulley/master/README.md
- https://www.printables.com/model/333720-gt2-pulley-the-big-collection-updated
- https://www.printables.com/model/46639-tension-meter-for-the-gt2-belts-of-i3-mk3s-or-prus
- https://api.printables.com/graphql/
research: research/connection-types/results/Belt_drives_timing_round_and_Vbelt.json
glossary: [misalignment, backlash, ratchet, torque, pitch, idler, deflection, clearance, tolerance, form-fit--force-fit--material-bond,
  set-screw, collet, captive-nut, repeatability--accuracy, creep, fatigue, brittle--ductile, lubrication, overhang--bridging,
  peel-vs-shear, o-ring]
---

A flexible loop runs around two or more pulleys and carries rotation from one shaft to another, speeding it up or slowing it down according to the pulley sizes; toothed (timing) belts mesh like gears and never slip, while V-belts and round belts grip by friction and can slip when overloaded.

**In plain words:** A loop of belt, like a strong rubber band or a toothed strap, wrapped around two wheels so that turning one wheel turns the other; different wheel sizes make the second wheel turn faster or slower. **Proper term:** Belt drive (belt and pulley drive): toothed timing belt (synchronous belt drive), V-belt drive and round-belt drive.

**Also called:** belt and pulley; pulley belt / drive belt; timing belt, toothed belt, synchronous belt, cogged belt (the toothed kind); GT2 belt / 2GT belt (the 2 mm-pitch toothed belt in most 3D printers; PowerGrip GT (brand) is the Gates name for the tooth profile); HTD belt, T2.5 / T5 belt, MXL / XL belt (other toothed-belt profiles); V-belt, vee belt, wedge belt (e.g. SPZ, SPA sections), fan belt; poly-V belt, multi-groove or multi-rib belt, serpentine belt (car engines); round belt, [O-ring](../glossary.md#o-ring) belt, polycord, urethane or polyurethane (PU) round belt; flat belt (the older friction type, still in conveyors); open belt drive (both pulleys turn the same way) / crossed belt drive (they turn opposite ways); Zahnriemen (German, toothed belt), Keilriemen (German, V-belt).

## How it works

The belt is stretched tight around the pulleys, so when the driving pulley turns, the belt is pulled along and turns the other pulley. The speed changes by the ratio of the pulley sizes (or tooth counts): a small pulley driving one three times bigger turns the output three times slower with about three times the turning force. A toothed belt's teeth lock into grooves on the pulleys, so it keeps exact step (synchronous) as long as it is tight enough not to jump teeth; a V-belt wedges into its groove and a round or flat belt grips by friction, so they can [creep](../glossary.md#creep) or slip a little, and slip completely if overloaded. Crossing the belt into a figure eight makes the two pulleys turn in opposite directions.

## Parts

A few parts: a driving pulley (on the motor), a driven pulley, the belt loop, and a way to tension the belt (slotted motor mount, adjustable centre distance or an [idler](../glossary.md#idler) pulley). Timing belts use toothed pulleys (sprockets) with side flanges to stop the belt walking off; V-belts use V-grooved pulleys (sheaves); round belts use pulleys with a V or round groove. Plus shafts and bearings to carry the belt's pull.

## Everyday examples

- 3D printers, laser cutters and plotters: GT2 toothed belts move the print head and bed
- Car engines: a toothed timing belt keeps the camshaft in step with the crankshaft, and a ribbed (poly-V) belt drives the alternator and other accessories
- Old sewing machines and cassette decks: thin round belts (Wikipedia; Hackaday)
- Belt-drive record turntables and belt-drive bicycles (Wikimedia Commons categories)

## When to use it

Use a belt when the two shafts are too far apart for gears, when you want quiet, smooth running without [lubrication](../glossary.md#lubrication), or when you want a cheap speed reduction that you can change by swapping pulleys. Choose a toothed timing belt when the shafts must stay exactly in step or when you need position control, such as 3D printer and CNC axes, camera sliders, robot joints and reduction stages for stepper motors. Choose a V-belt or round belt when some slip is useful: it cushions shocks and protects the machine if something jams (Wikipedia), for example on lathes, drill presses, grinders, toys, automata and conveyors. Round polyurethane belts are ideal for makers because you can weld them to any length; like other belts they can also run with a twist, so the shafts need not be parallel (Wikipedia).

## When not to use it

Avoid friction belts (V, round, flat) where position must stay exact or where slip would be dangerous; use a toothed belt, chain or gears. Avoid belts where the load must be held when the motor stops, since belts back-drive freely; use a worm drive, lead screw or a brake. Avoid toothed belts in dirty or dusty places unless they are shielded, because packed debris stops the teeth seating (Gates, p. 135); a V-belt or chain copes better. For very high [torque](../glossary.md#torque) in a small space, or where the shafts are very close, use gears; for shock-loaded, dirty, low-speed drives use a roller chain. If the frame can't be made stiff and adjustable enough to keep tension, a gear train may be simpler.

## Details

- **What it does (jobs):**
  - change speed or turning force: speeds up or slows down rotation between two shafts that can be far apart (ratio set by pulley sizes or tooth counts)
  - change the kind of motion: an open-ended timing belt clamped to a carriage turns a motor's rotation into straight-line motion, as on the X and Y axes of most 3D printers
  - slip or let go when overloaded: friction belts (V, round, flat) slip instead of breaking things when jammed; toothed belts do not, except by jumping teeth
- **Movement:** rotate: continuous rotation in either direction with unlimited range; an open-ended toothed belt can also drive a carriage in a straight line (slide)
- **Directions it can move (degrees of freedom):** 1: the two pulleys are tied together by the belt, so turning one sets the other's position (exactly for toothed belts, approximately for friction belts that creep or slip)
- **Special behaviour:**
  - torque-limiting (slips at a set force or torque): V-belts, round belts and flat belts slip when the load gets too high, which helps protect machinery from overload and jams (Wikipedia 'Belt (mechanical)'); the slipping point is not precise and changes with tension and wear. Toothed belts do not slip but can jump teeth ([ratchet](../glossary.md#ratchet)) when loose or overloaded
  - motion conversion (e.g. rotary to linear): an open-ended toothed belt fixed to a sliding carriage converts pulley rotation into straight-line motion, as in 3D printers, plotters and laser cutters
  - self-aligning or self-centring: a flat belt climbs to the high point of a crowned (slightly barrel-shaped) pulley and stays centred (Wikipedia); toothed belts instead need side flanges
  - quick-release: ⚑ [uncertain] slackening the tension lets the belt be lifted off without taking the shafts apart; Wikipedia notes clutch action can be had by releasing belt tension or shifting the belt onto a free-turning pulley
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it transmits rotation
  - shape (the parts interlock; [form-fit](../glossary.md#form-fit--force-fit--material-bond)): toothed timing belts, whose teeth mesh with the pulley grooves
  - friction or clamping (force-fit): V-belts (wedged into the groove), round belts and flat belts, which rely on belt tension and friction
- **Input and output:** Continuous rotation -> continuous rotation (or rotation -> straight-line motion with an open-ended toothed belt). Ratio = driven pulley diameter / driving pulley diameter (NotesandSketches), or driven teeth / driving teeth for toothed belts; a 20-tooth GT2 pulley moves the belt 40 mm per turn (meta-matic). Single stages are typically a few to one: the Hackaday.io 'Paper PiKon' telescope drive uses 20:100 tooth stages (5:1) and stacks five stages for 6480:1. Efficiency is high: 90-98%, usually 95% for belts in general (Wikipedia); up to 98% for toothed belts, and 95-98% for well-kept V-belts, dropping 5% or more if poorly maintained (Gates design manual, p. 138). Shaft arrangement: normally parallel; a crossed belt reverses direction; belts can also run with a twist so the shafts need not be parallel (Wikipedia). Back-drivable: yes, freely, in both directions.
- **Power:** passive (no power needed); it simply passes on the motor's power. If the motor stops, nothing holds the output: a belt drive will let a load (such as a lifted Z axis) drive the motor backwards
- **Load:** Light to heavy depending on type and size: round belts are for relatively low torque only (Wikipedia); small GT2 belts carry light 3D-printer loads; industrial toothed belts carry up to about 150 kW (Wikipedia) and V-belt sets drive large machinery. A belt only works in tension, so the pull on the tight side plus the installation tension loads the shafts and bearings sideways. Toothed belts fail by tooth [shear](../glossary.md#peel-vs-shear) or jumping teeth if overloaded or loose; friction belts slip first.
- **Play and precision:** Toothed belts: small play ([backlash](../glossary.md#backlash)), because the belt teeth need some [clearance](../glossary.md#clearance) to enter and leave the grooves; Gates says GT2 backlash lies between trapezoidal-tooth belts (little) and HTD belts (significant), and that belt stretch and tooth [deflection](../glossary.md#deflection) add further position error under changing loads (Gates design manual, p. 133). Position repeats well when tension is kept up; Game Manual 0 says a properly tensioned timing belt has essentially no slop. Friction belts: no fixed position relationship, because slip and belt stretch mean the ratio is not exactly constant (Wikipedia). [Misalignment](../glossary.md#misalignment): toothed belts should be within 1/4 degree or 1/16 inch per foot (Gates, p. 141); friction belts are more forgiving of misaligned shafts (Wikipedia).
- **Taking it apart:** removable: pulleys are clamped to shafts with [set screws](../glossary.md#set-screw), clamps or keyed bushings, and the belt comes off once the tension is released
- **How often it can be reused:** many times: belts and pulleys can be taken off and refitted repeatedly; the belt itself wears out ([fatigue](../glossary.md#fatigue), tooth wear) and is replaced as a consumable
- **Sealing:** none: the belt and pulleys are open. Drives can be enclosed in a guard or cover for safety and to keep debris out, but the belt itself seals nothing
- **Adjustable:** Yes, tension: by sliding the motor in slotted holes, moving one shaft, or moving an idler pulley. The speed ratio is fixed by the pulleys, except on stepped (cone) pulleys where the belt is moved between steps, or variable-speed V-belt drives with split pulleys that change their working diameter (Wikimedia Commons categories 'Cone pulleys', 'Variable speed v-belts')
- **Access needed:** end of a tube or shaft: pulleys slide onto the shaft ends, and a closed-loop belt has to be slipped over the pulleys, so you need to get past the shaft ends or move the pulleys closer together; open-ended belts (as on 3D-printer axes) can be threaded in and clamped instead
- **Materials:** Toothed belts: rubber (neoprene or EPDM) or polyurethane, reinforced with fibreglass, aramid (Kevlar), steel or carbon cords, with a nylon fabric tooth facing (Wikipedia 'Toothed belt'; Gates). 3D-printer GT2 belts come with glass-fibre or steel cores (steel stretches least) (DHM-online). V-belts: rubber with fabric and cords. Round belts: polyurethane, cut to length and welded (Wikipedia; Hackaday). Pulleys: aluminium, steel, cast or [ductile](../glossary.md#brittle--ductile) iron, plastic, or 3D-printed PLA, PETG or nylon for light duty. Makers have even printed working GT2-profile belts in TPU running on PLA pulleys (Hackaday.io).
- **Heat, cold, water and wear:** Heat and cold: toothed belts work normally from -34 to 85 C (Gates, p. 136), and Wikipedia gives -35 to 85 C for belts; one round-belt maker recommends a maximum of 55 C for standard urethane belts, with special high-temperature urethane to 110 C (Dura-Belt FAQ, vendor). Oil and water: excess lubricant or chemicals on a toothed drive make it more likely to jump teeth (Gates), and they make friction belts slip (Dura-Belt FAQ); wet or humid air can rust steel pulleys (Gates). Sunlight and ozone: store belts away from direct sunlight, heat, moisture and ozone (Gates, p. 136). Over time belts stretch and wear, so tension must be re-checked (Wikipedia), and 3D-printed PLA pulleys can creep or soften in heat ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part (belts, pulleys, idlers, tensioners)
  - 3D print (FDM): pulleys, idlers, tensioners, round-belt pulleys, even TPU toothed belts for light loads
  - 3D print (resin): small, fine-pitch pulleys ⚑ [uncertain]
  - CNC: machined metal pulleys and sheaves
- **Printing it in one piece (print in place):** no: the belt is bought (or printed separately in TPU) and fitted over separately printed or bought pulleys, then tensioned
- **Tools:** Hex keys or a screwdriver for pulley set screws and motor mounts; something to measure or judge tension (a printed tension meter, a spring gauge, or the pluck-and-listen test); a cutter for open-ended belts; for welded round belts, a soldering iron, hot blade or butane torch and ideally a clamping jig
- **Difficulty:** easy: belts, pulleys and idlers are cheap off-the-shelf parts, and pulleys print well from free generators; the main skills are holding the right tension and lining the pulleys up. Round belts are the easiest of all to make to any length by heat-welding polyurethane cord.

### 3D printing tips

1) Generate pulleys, don't draw teeth by hand: droftarts' OpenSCAD 'Parametric pulley' (and its GitHub copies) covers MXL, XL, T2.5, T5, HTD and GT2 profiles with any tooth count; it has an 'additional_tooth_width' setting you tune 0.1 mm at a time until the belt fits snugly. 2) Print pulleys standing on end, with the pulley axis vertical (along Z), so the tooth outline is traced in each layer; use layers of 0.16 mm or less, a 0.4 mm or smaller nozzle and slow outer walls for accurate teeth (meta-matic GT2 guide). 3) Size the bore 0.1-0.2 mm over the shaft and ream or drill it to fit (meta-matic; RH3D's pulley collection uses 0.1 mm and suggests drilling if too tight). 4) Fix pulleys with an M3 set screw into a [captive nut](../glossary.md#captive-nut), or a clamping [collet](../glossary.md#collet), which wobbles less (RH3D). 5) Don't go too small: Hackaday.io's Paper PiKon project used 20 teeth as the smallest GT2 pulley and made sure at least 6 teeth were in mesh (it got 7); a pulley guide suggests 16 teeth as the smallest for GT2 because of the belt's bend radius (meta-matic), and OstrichEngineering warns small printed pulleys make belts slip sooner. 6) Wrap: aim for at least 90 degrees of belt contact on each pulley, better 180 degrees or more (Game Manual 0); Gates asks for at least 60 degrees on each loaded pulley and at least 6 teeth in mesh. 7) Add flanges, at least two on one pulley or one on each pulley on opposite sides; the top flange [overhang](../glossary.md#overhang--bridging) may need splitting the pulley into two prints (meta-matic; Gates). 8) Materials: PLA or ABS for light work, PETG or nylon for higher loads (meta-matic). 9) Build in a tensioner or slotted mount: a printed frame cannot hold the 0.05-0.08 mm centre-distance [accuracy](../glossary.md#repeatability--accuracy) a fixed-centre drive needs (Gates p. 134). 10) Round belts: design a 60-degree V-groove (Wikipedia); for 2 mm or 3/32 inch urethane cord keep pulleys at least 3/4 inch (19 mm) across (Cabaret Mechanical Theatre); weld the cord ends with a hot blade or soldering iron in a printed two-slider clamping jig so the ends stay lined up (Hackaday, JBVCreative), then trim the small bump at the weld. 11) Printed toothed belts: a TPU GT2-profile belt on 20-tooth PLA pulleys has worked for a light gear-motor model (Hackaday.io), but buy a reinforced belt for anything that needs accuracy or strength.

### Buying one (off-the-shelf parts)

GT2 (2GT) timing belt, 2 mm [pitch](../glossary.md#pitch), 6 mm or 9 mm wide, open-ended (sold by the metre) or closed loop, with glass-fibre, steel or aramid cords; GT2 timing pulleys, typically 16 or 20 teeth with a 5 mm bore for NEMA 17 motors; toothed idler pulleys and smooth (flat) idlers with built-in bearings; belt tensioners; larger-pitch toothed belts and pulleys (HTD 3M/5M, GT2/GT3 3 mm and 5 mm, T2.5, T5, MXL, XL, L) used in robotics; V-belts (classical A/B, narrow wedge SPZ/SPA/SPB/SPC, light-duty fractional sizes) and matching V-groove pulleys (sheaves), often with taper-lock or QD bushings; poly-V (multi-rib) belts; polyurethane round belt cord (commonly 2-10 mm diameter) and round-belt pulleys; belt tension gauges. Beware: some 3D-printer vendors sell MXL-profile pulleys labelled as GT2, which causes print artefacts (Filastruder).

## Rules of thumb

- Speed ratio = diameter of driven pulley / diameter of driver pulley; e.g. 50 mm driving 150 mm gives 3:1, so 2100 rpm becomes 700 rpm (NotesandSketches 'Pulleys').
- GT2 belt travel per pulley turn = number of teeth x 2 mm; a 20-tooth pulley moves the belt 40 mm per turn (meta-matic GT2 guide).
- Toothed belts: keep at least 6 teeth in mesh with the smaller pulley; the power rating drops 20% for each tooth fewer (Gates PowerGrip GT2 Drive Design Manual, p. 135; RoyMech 'Timing belts' gives the same 6-tooth rule).
- Each loaded toothed pulley should have at least 60 degrees of belt wrap (Gates, p. 135); Game Manual 0 asks for at least 90 degrees and ideally 180 degrees or more.
- Flanges: on a two-pulley drive use two flanges on one pulley or one flange on each on opposite sides; flange both pulleys on both sides if the centre distance is more than 8 times the small pulley's diameter; on vertical shafts flange one pulley both sides and the others on the bottom (Gates, p. 134).
- Idlers go on the slack side; inside idlers should be toothed (up to 40 grooves); outside (backside) idlers should be flat, uncrowned and at least 1.3 times the smallest recommended pulley size; avoid spring-loaded idlers on toothed belts except for light loads, because the belt can overpower the spring and jump teeth (Gates, p. 135).
- Misalignment of toothed belt drives should not exceed 1/4 degree or 1/16 inch per foot (Gates, p. 141).
- Don't use a fixed (non-adjustable) centre distance for power drives; for light motion-transfer drives it must be held within about 0.05-0.08 mm, because belt and pulley [tolerances](../glossary.md#tolerance) can change tension by a factor of 3 or more (Gates, p. 134).
- Efficiency: toothed belts up to 98%; well-kept V-belts 95-98%; roller chains 92-98% (Gates, p. 138). Belts in general 90-98%, usually 95% (Wikipedia).
- Toothed belts work unaffected from -34 to 85 C (Gates, p. 136); timing belts last roughly 8,000-12,000 hours (RoyMech).
- V-belt minimum pulley diameters: SPZ 67 mm, SPA 100 mm, SPB 160 mm, SPC 224 mm; groove angles 34 or 38 degrees depending on pulley size; capacity falls to 0.82 of rated at 120 degrees of wrap (RoyMech 'Vee belts').
- Round belts run in a pulley with a 60-degree V-groove and are for relatively low torque only (Wikipedia 'Belt (mechanical)').
- Timing belts need only enough tension to keep the belt in contact with the pulley; friction belts need more (Wikipedia). Prusa's rule of thumb for printer GT2 belts: plucked, they should sound like a low bass note (Prusa Knowledge Base).

## Common failures

1) Too loose: toothed belts jump teeth (ratchet) and printers show layer shifts, ghosting or distorted shapes; friction belts slip and glaze. Fix: tension properly and re-check after running in (Prusa Knowledge Base; Game Manual 0). 2) Too tight: overloads bearings and motors and shortens belt life (Gates; Game Manual 0). 3) Misaligned pulleys: the belt wears on one edge, rides into the flanges or walks off (Gates, p. 141). 4) Tooth shear or stripped teeth, or the fibre cords delaminating, often after the belt was kinked or crimped during storage or forced over a flange during fitting (Wikipedia 'Toothed belt'; Gates). 5) Too few teeth in mesh or too little wrap on a small pulley: skipping (Gates; Game Manual 0). 6) Wrong pulley profile, e.g. MXL pulleys sold as GT2, causing regular print artefacts (Filastruder). 7) Debris packed into pulley grooves (Gates). 8) Round belts: a lumpy weld that knocks as it passes the pulley; trim it or use a clamping jig (Hackaday). 9) Printed pulleys: a loose bore or set screw that lets the pulley wobble or slip on the shaft (RH3D).

## Safety

The point where the belt runs onto a pulley is an in-running nip point that can pull in fingers, hair or loose clothing and crush or sever them; guard it (OSHA woodworking eTool 'Nip points'). Stop and unplug the machine before checking or adjusting tension. Over-tightened belts overload motor and shaft bearings (DHM-online). Belts can build up static electricity, which matters near flammable dust or vapours (Gates, p. 137).

## Related

- Roller chain and sprockets: also joins distant shafts without slip and handles more torque in dirty places, but is noisier, heavier, needs oil and is 92-98% efficient (Gates)
- Spur or helical gears: for shafts close together; stiffer and more compact, but printed gears have backlash and are noisier
- Capstan cable drive: a cable wrapped around a small drum and anchored to a big one; zero backlash but only a limited range of rotation
- Rope drive: a historic form of round-belt drive using ropes on grooved pulleys (Wikimedia Commons 'Rope drives')
- Friction wheel drive: two wheels pressed together, with no belt; simpler but slips more easily ⚑ [uncertain]
- Rack and pinion or lead screw: other ways to turn rotation into straight-line motion, stiffer than an open-ended belt

## Make it yourself

- [GT2 Pulley - the big collection updated (RH3D, Printables)](https://www.printables.com/model/333720-gt2-pulley-the-big-collection-updated): Ready-to-print GT2 pulleys in many tooth counts and bore sizes (5-10 mm), with set-screw, nut or collet fixing; bores designed 0.1 mm oversize *(licence: CC BY-NC-SA)*
- [[OEPU] GT2 Pulley Collection - Parametric (OstrichEngineering, Printables)](https://www.printables.com/model/1183441-oepu-gt2-pulley-collection-parametric (URL from Printables API, page not opened)): Parametric Fusion 360 model plus STLs of GT2 pulleys in many sizes *(licence: GNU GPL v3.0)*
- [openscad.parametric-pulley (rbuckland's modular version of droftarts' Thingiverse 'Parametric pulley', thing:16627)](https://raw.githubusercontent.com/rbuckland/openscad.parametric-pulley/master/Pulley_T-MXL-XL-HTD-GT2_N-tooth.scad): OpenSCAD script that generates toothed pulleys for MXL, 40DP, XL, H, T2.5, T5, T10, AT5, HTD 3/5/8 mm and GT2 2/3/5 mm belts with any tooth count, flanges and captive nuts *(licence: ⚑ [uncertain] not stated in the repository; the original Thingiverse page could not be opened)*
- [Tension Meter for the GT2 belts of i3 MK3S+ or Prusa MINI+ (Prusament, Printables)](https://www.printables.com/model/46639-tension-meter-for-the-gt2-belts-of-i3-mk3s-or-prus): Printed flexure gauge that clips on a GT2 belt and shows whether tension is between MIN and MAX; must be printed in Prusament PETG from the supplied G-code *(licence: CC BY-NC-ND)*
- [6mm Bore Single Groove Pulley for Round Belt (themadjem, Printables)](https://www.printables.com/model/987627-6mm-bore-single-groove-pulley-for-round-belt (URL from Printables API, page not opened)): 34 mm single V-groove pulley for 3-5 mm polyurethane round belts, 6 mm bore with captive M3 nut *(licence: CC BY-SA)*
- [3D Printed GT2 Profile TPU Belt with PLA Sprockets (Hackaday.io)](https://hackaday.io/project/182852-3d-printed-gt2-profile-tpu-belt-with-pla-sprockets): A 60-tooth, 6 mm wide GT2-profile belt printed in TPU running on two 20-tooth PLA pulleys, driven by an N20 gear motor *(licence: ⚑ [uncertain] not stated on the project page)*

## Pictures, videos and models

- [Power transmission belt.gif (Wikimedia Commons, OSHA)](https://commons.wikimedia.org/wiki/File:Power_transmission_belt.gif): Animation of a belt running onto its pulley, showing the in-running nip point *(licence: Public domain (work of the US Department of Labor))*
- [Belt drives profiles.svg (Wikimedia Commons, by Wittiko)](https://commons.wikimedia.org/wiki/File:Belt_drives_profiles.svg): Cross-sections of a flat belt, V-belt, round belt and poly-V belt in their pulley grooves *(licence: CC BY 4.0)*
- [Pu-Rundriemen.jpg (Wikimedia Commons, by Seilerei Pflug)](https://commons.wikimedia.org/wiki/File:Pu-Rundriemen.jpg): Photo of polyurethane round belts *(licence: CC BY-SA 3.0)*
- [507 Mechanical Movements, No. 1: simple pulleys and an open belt](https://507movements.com/mm_001.html): Historic 1868 drawing with an animated version of an open belt drive in which both pulleys turn the same way *(licence: Book public domain; website animation link only)*
- [3D Printed Pulleys and Round Belts (Polyurethane Belt) (Jesse Parker, YouTube)](https://www.youtube.com/watch?v=j8G0LAX9MVg): Video of 3D-printed pulleys running on polyurethane round belts *(licence: link only (standard YouTube licence))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 6 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Belt_(mechanical)>
- <https://en.wikipedia.org/wiki/Toothed_belt>
- <https://en.wikipedia.org/wiki/Timing_belt_(camshaft)>
- <https://roymech.org/Useful_Tables/Drive/Belt_Drives.html>
- <https://roymech.org/Useful_Tables/Drive/Timing_belts.html>
- <https://roymech.org/Useful_Tables/Drive/Vee_belts.html>
- <https://docs.rs-online.com/5016/0900766b8002d3b7.pdf>
- <https://www.notesandsketches.co.uk/Pulleys.html>
- <https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/belt.html>
- <https://help.prusa3d.com/glossary/belt-tension_1597>
- <https://help.prusa3d.com/article/adjusting-belt-tension-mk4-s-mk3-9-s-mk3-5-s-mk3-s_112380>
- <https://www.filastruder.com/blogs/news/gates-belt-2gt-gt2-gt3-myths-and-legends>
- <https://www.dhm-online.com/en/blog/gt2-belts-and-pulleys-for-3d-printers-complete-guide-n240>
- <https://meta-matic.com/en/3d/gt2-pulley/guide/>
- <https://hackaday.io/project/162982-paper-pikon-with-1000mm-focal-length/log/158387-3d-printed-pulleys>
- <https://hackaday.io/project/182852-3d-printed-gt2-profile-tpu-belt-with-pla-sprockets>
- <https://hackaday.com/2024/05/15/custom-polyurethane-belts-made-easy/>
- <https://cabaret.co.uk/making-urethane-belts-for-automaton-projects-dugs-tips-10/>
- <https://durabelt.com/faq.php>
- <https://www.durabelt.com/crosssectioncalcinfo.php>
- <https://www.osha.gov/etools/woodworking/machine-hazards/nip-points>
- <https://commons.wikimedia.org/wiki/Category:Belt_drives>
- <https://commons.wikimedia.org/wiki/File:Power_transmission_belt.gif>
- <https://commons.wikimedia.org/wiki/File:Belt_drives_profiles.svg>
- <https://commons.wikimedia.org/wiki/File:Pu-Rundriemen.jpg>
- <https://507movements.com/mm_001.html>
- <https://www.youtube.com/watch?v=j8G0LAX9MVg>
- <https://raw.githubusercontent.com/rbuckland/openscad.parametric-pulley/master/Pulley_T-MXL-XL-HTD-GT2_N-tooth.scad>
- <https://raw.githubusercontent.com/rbuckland/openscad.parametric-pulley/master/README.md>
- <https://www.printables.com/model/333720-gt2-pulley-the-big-collection-updated>
- <https://www.printables.com/model/46639-tension-meter-for-the-gt2-belts-of-i3-mk3s-or-prus>
- <https://api.printables.com/graphql/>
