---
title: Walking linkage
description: A planar linkage of bars and pin joints, driven by one continuously turning crank, that moves a foot around a
  closed loop with a long, nearly flat ground stroke and a lifted return, so that several legs on a shared crankshaft make
  a machine walk.
num: 279
term: Walking linkage (leg mechanism), especially Jansen's linkage (the Strandbeest leg) and the Klann linkage
plain_name: 'A leg made of bars and pins that a single turning handle or motor drives, so that the foot pushes along the ground
  in a flat, steady stroke, lifts up, swings forward and comes down again: the machine walks instead of rolling'
aliases:
- leg mechanism
- walking mechanism
- Jansen's linkage / Jansen linkage / Jansen mechanism / Theo Jansen mechanism
- Strandbeest leg or Strandbeest linkage ('strandbeest' is Dutch for 'beach beast'; plural strandbeesten)
- '''holy numbers'' (Jansen''s own name for his set of bar lengths)'
- Klann linkage / Klann mechanism
- Mechanical Spider linkage (Klann's own walker name) and 'walking device' (the title of Klann's US patent 6,260,862)
- crank-driven leg / single-degree-of-freedom (1-DoF) walking linkage
- planar leg mechanism (all its bars move in one flat plane)
- Koppelgetriebe (German for linkage; the German Wikipedia uses it for the Strandbeest legs)
- 詹森步行机构 (Chinese, 'Jansen walking mechanism') and 克兰步行机构 (Chinese, 'Klann walking mechanism')
- 'Mini Strandbeest / Mini Beest (Gakken, brand: a plastic desk kit of the Jansen leg)'
family: motion conversion
other_families: []
finder:
  job: [change the kind of motion, let it move]
  motion: multiple
  special_behaviour: [motion conversion]
  holding_principle: [not a holding joint, shape]
  reuse_cycles: many times
  seal: none
  access_needed: not applicable
  print_in_place: partly
  maker_difficulty: moderate
  processes: [off-the-shelf part, 3D print (FDM), laser cut, sheet metal, woodwork]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning]
  shaft_layout: [parallel]
  overload_response: not applicable
  clicks: not applicable
  tools: [none, soldering iron, hand tools]
  load_max: heavy
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [input_output, play_and_precision, processes, off_the_shelf_parts, environment_limits, safety_notes, make_it_yourself]
diagram_idea: Side view of one Jansen leg and one Klann leg next to each other, each with the crank circle at the top, the
  bars drawn as coloured lines, and the foot's loop traced underneath (flat bottom stroke in green marked 'pushing on the
  ground', raised return in grey marked 'lifting and swinging forward'), plus a small strip showing four legs on one crankshaft
  taking turns.
links:
- url: https://commons.wikimedia.org/wiki/File:Strandbeest-Walking-Animation.gif
  title: Strandbeest-Walking-Animation.gif (Wikimedia Commons, by MichaelFrey)
  shows: Animation of one Jansen leg turning through a full crank cycle, with the foot tracing its flat-bottomed path
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Strandbeest_Leg_Proportions.svg
  title: Strandbeest Leg Proportions.svg (Wikimedia Commons, by MichaelFrey)
  shows: Labelled diagram of the Jansen leg with the 'holy number' bar lengths a to m
  license: CC BY-SA 3.0
- url: https://commons.wikimedia.org/wiki/File:F4-motion.gif
  title: F4-motion.gif (Wikimedia Commons, by Joseph Klann)
  shows: Animation of a set of Klann linkage legs walking, with the pivots marked and the near legs outlined
  license: Public domain
- url: https://commons.wikimedia.org/wiki/File:Strandbeest,_TrotBot,_Strider,_Klann_Linkages.gif
  title: Strandbeest, TrotBot, Strider, Klann Linkages.gif (Wikimedia Commons, by WadeVagle)
  shows: Side-by-side animation comparing the foot paths of the Strandbeest (Jansen), TrotBot, Strider and Klann leg linkages
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Strandbeest_walking_with_six_legs.gif
  title: Strandbeest walking with six legs.gif (Wikimedia Commons, by MichaelFrey)
  shows: Animation of six Jansen legs on one crankshaft taking turns to carry the body
  license: CC BY-SA 4.0
make_it_yourself:
- url: https://www.printables.com/model/853015-easy-strandbeest
  title: Easy Strandbeest (LoboCNC, Printables) (URL from Printables API, page not opened)
  what_it_is: Wind-driven 8-leg Jansen walker with print-in-place leg units and a one-piece printed crankshaft; detailed notes
    on freeing and oiling the joints and on assembly order
  license: CC BY-SA
- url: https://www.printables.com/model/194176-theo-jansen-strandbeest-desktop-mechanism
  title: Theo Jansen Strandbeest Desktop Mechanism (Wright4TheJob, Printables) (URL from Printables API, page not opened)
  what_it_is: Hand-cranked desk model of one pair of Jansen legs, driven through a 2:1 gear set, with joints held by PLA filament
    pins and snap fits
  license: CC BY-SA
- url: https://www.nablu.com/2020/05/building-strandbeest.html
  title: Building a strandbeest (nablu.com, by Anachronist)
  what_it_is: Step-by-step build article for a parametric OpenSCAD Strandbeest whose parts all snap together without supports,
    with lessons on PLA versus PETG snap fits and deburring (the models are on Printables, model 129102, 'Parametric strandbeest
    in OpenSCAD')
  license: Printables model CC BY-NC (from Printables API); article licence not stated [uncertain]
- url: https://www.printables.com/model/1081125-crawler-mechanism
  title: Crawler Mechanism (DigiKey, Printables) (URL from Printables API, page not opened)
  what_it_is: A custom, easier-to-assemble Klann-linkage crawling robot by Odd Jayy, with a link to full build instructions
    and Arduino code
  license: CC BY
- url: https://www.diywalkers.com/klann-linkage-optimizer.html
  title: Klann Linkage Optimizer (DIYwalkers)
  what_it_is: Interactive Scratch simulator to change Klann bar lengths and see the foot path and foot speed; includes Klann's
    patent proportions and LEGO-friendly versions; Python and Scratch code downloadable
  license: not stated [uncertain]
- url: https://www.diywalkers.com/strandbeest-optimizer-for-lego.html
  title: LEGO Strandbeest Optimizer (DIYwalkers)
  what_it_is: Interactive Jansen-linkage calculator with Jansen's proportions scaled to crank = 3, LEGO approximations, foot-speed
    plots and tips on dead points and leg planes
  license: not stated [uncertain]
- url: https://huangyan920.github.io/Mechanical/
  title: HUANGYAN920/Mechanical interactive mechanism animations
  what_it_is: Browser animations that include a Klann walking linkage (no. 228, 克兰步行机构) and a Jansen walking linkage (no.
    229, 詹森步行机构); labels mostly in Chinese
  license: MIT (code)
sources:
- https://en.wikipedia.org/wiki/Jansen%27s_linkage
- https://en.wikipedia.org/wiki/Klann_linkage
- https://en.wikipedia.org/wiki/Leg_mechanism
- https://en.wikipedia.org/wiki/Theo_Jansen
- https://de.wikipedia.org/wiki/Theo_Jansen
- https://en.wikipedia.org/wiki/Mondo_spider
- https://en.wikipedia.org/wiki/Chebyshev_lambda_linkage
- https://arxiv.org/abs/2606.22129
- https://arxiv.org/pdf/2606.22129
- https://patents.google.com/patent/US6260862B1/en
- https://www.diywalkers.com/walker-abcs.html
- https://www.diywalkers.com/klanns-linkage-plans.html
- https://www.diywalkers.com/klann-linkage-optimizer.html
- https://www.diywalkers.com/strandbeest.html
- https://www.diywalkers.com/strandbeest-optimizer-for-lego.html
- https://hackaday.com/2025/01/16/building-a-3d-printed-strandbeest/
- https://www.nablu.com/2020/05/building-strandbeest.html
- https://www.makerprojectlab.com/mini-strandbeest-kit-review/
- https://raw.githubusercontent.com/wrongu/strandbeest/master/README.md
- https://raw.githubusercontent.com/garyhodgson/strandbeest/master/README.md
- https://hpi.de/baudisch/projects/metamaterial-mechanisms.html
- https://huangyan920.github.io/Mechanical/
- https://help.prusa3d.com/article/pla_2062
- https://help.prusa3d.com/article/petg_2059
- https://commons.wikimedia.org/wiki/File:Strandbeest-Walking-Animation.gif
- https://commons.wikimedia.org/wiki/File:Strandbeest_Leg_Proportions.svg
- https://commons.wikimedia.org/wiki/File:Jansen%27s_Linkage.svg
- https://commons.wikimedia.org/wiki/File:F4-motion.gif
- https://commons.wikimedia.org/wiki/File:Strandbeest,_TrotBot,_Strider,_Klann_Linkages.gif
- https://commons.wikimedia.org/wiki/File:Strandbeest_walking_with_six_legs.gif
- https://api.printables.com/graphql/
- https://www.printables.com/model/853015-easy-strandbeest (URL from Printables API, page not opened)
- https://www.printables.com/model/194176-theo-jansen-strandbeest-desktop-mechanism (URL from Printables API, page not opened)
- https://www.printables.com/model/129102-parametric-strandbeest-in-openscad (URL from Printables API, page not opened)
- https://www.printables.com/model/1081125-crawler-mechanism (URL from Printables API, page not opened)
research: research/connection-types/results/Walking_linkage_Jansen_and_Klann_leg_mechanisms.json
---

A planar linkage of bars and pin joints, driven by one continuously turning crank, that moves a foot around a closed loop with a long, nearly flat ground stroke and a lifted return, so that several legs on a shared crankshaft make a machine walk.

**In plain words:** A leg made of bars and pins that a single turning handle or motor drives, so that the foot pushes along the ground in a flat, steady stroke, lifts up, swings forward and comes down again: the machine walks instead of rolling. **Proper term:** Walking linkage (leg mechanism), especially Jansen's linkage (the Strandbeest leg) and the Klann linkage.

**Also called:** leg mechanism; walking mechanism; Jansen's linkage / Jansen linkage / Jansen mechanism / Theo Jansen mechanism; Strandbeest leg or Strandbeest linkage ('strandbeest' is Dutch for 'beach beast'; plural strandbeesten); 'holy numbers' (Jansen's own name for his set of bar lengths); Klann linkage / Klann mechanism; Mechanical Spider linkage (Klann's own walker name) and 'walking device' (the title of Klann's US patent 6,260,862); crank-driven leg / single-degree-of-freedom (1-DoF) walking linkage; planar leg mechanism (all its bars move in one flat plane); Koppelgetriebe (German for linkage; the German Wikipedia uses it for the Strandbeest legs); 詹森步行机构 (Chinese, 'Jansen walking mechanism') and 克兰步行机构 (Chinese, 'Klann walking mechanism'); Mini Strandbeest / Mini Beest (Gakken, brand: a plastic desk kit of the Jansen leg).

## How it works

The crank turns in a full circle, and the bars around it can only move in one way for each crank angle, so the whole leg has a single degree of freedom (Wikipedia 'Jansen's linkage'). The bar lengths are chosen so that for about half a turn of the crank the foot moves backwards along an almost straight, level line, pushing the body forward, and for the rest of the turn it lifts, swings forward and comes back down (Klann's patent: the foot stays on the ground in a substantially straight line for about half of each crank revolution). Several legs on the same crankshaft, set out of step with each other, take turns carrying the body, so it moves along level instead of bobbing up and down. Jansen found his proportions by evolving them with a computer; Klann built his from the curves traced by four-bar linkages (Burmester curves).

## Parts

A small assembly that acts as one unit. One Jansen leg has a crank plus six more moving bars, joined by ten pin joints to each other and to a fixed frame (Wang 2026 counts seven moving bodies and ten revolute joints; Wikipedia counts eight links per leg including the frame); the lower bars form rigid triangles, one of which carries the foot. A Klann leg has six links: the frame, a crank, two rockers pivoted on the frame (upper and lower) and two coupling bars, one of which is the bent leg with the foot (Wikipedia). A walker adds a frame, a shared crankshaft with the cranks set at different angles, 4 to 12 or more legs, and a drive: a hand crank, a geared motor, or (Jansen) a wind turbine or sails.

## Everyday examples

- Theo Jansen's Strandbeests: large PVC-tube sculptures that walk along Dutch beaches in the wind (Wikipedia), also seen in a 2007 BMW TV advert (German Wikipedia) and a 2016 episode of The Simpsons (Wikipedia)
- The Gakken Mini Strandbeest desk kit (brand), which walks across a table when you blow on its little wind turbine or point a desk fan at it (Maker Project Lab)
- The Mondo Spider, a ride-on eight-legged walking machine using Klann linkages, shown at Burning Man (Wikipedia)
- Printed and LEGO walking robots and toys built from Strandbeest or Klann legs (DIYwalkers; Printables)

## When to use it

Use a walking linkage when you want a machine to walk using only one motor (or one motor per side for steering), with no computer control of individual joints: for kinetic sculptures, toys and desk demonstrations; for small robots that must cross sand, gravel, carpet edges, kerbs or debris where small wheels sink or catch (Klann's patent claims kerbs, steps, mud, snow and sand); and when you want lifelike movement (Jansen's linkage looks especially organic). Jansen's linkage gives the flatter, smoother ground stroke; Klann's uses fewer bars per leg (six against eight) and steps higher, so it is easier to build and better at clearing obstacles (Wikipedia; Hackaday commenter).

## When not to use it

Avoid it on smooth, flat ground where speed and efficiency matter: wheels or tracks are simpler, faster and waste less energy. Avoid it when you need to change stride length or step height while moving, walk sideways, or place feet precisely: use legs with two or three servo motors each, or hydraulic legs (Wikipedia 'Leg mechanism' notes stride control is not practicable with a crank-based leg). Avoid it for heavy machines unless you can engineer trussed legs and frames (DIYwalkers). If you just need a point to move in a straight line, use a straight-line linkage or slide instead; if you just want a rough-terrain wheel, consider whegs (spoked wheel-legs).

## Details

- **What it does (jobs):**
  - change the kind of motion: turns the continuous rotation of one crank (from a motor, a hand crank or the wind) into a walking step
  - let it move (turn, slide or bend): carries a vehicle, robot or sculpture over sand, rough ground, kerbs or small obstacles where wheels would sink or get stuck
- **Movement:** multiple: the crank rotates continuously (360 degrees); the other bars rock back and forth through limited angles; the foot travels round a closed loop (a long flat bottom stroke along the ground and a raised return), so it moves both horizontally and vertically.
- **Directions it can move (degrees of freedom):** 1: one crank angle fixes the position of every bar and of the foot, so one motor or one hand crank drives each leg, or all the legs on a shared crankshaft (Wikipedia 'Jansen's linkage'; Wang 2026 checks it with Gruebler's count: 3 x 7 - 2 x 10 = 1)
- **Special behaviour:**
  - motion conversion (e.g. rotary to linear): the crank's rotation becomes an almost straight, level foot stroke on the ground followed by a lifting return, in other words a walking step
  - none of the other listed behaviours: it does not lock, slip, click or hold; it only passes motion on
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it is a mechanism that converts motion
  - shape (the parts interlock; form-fit): every joint is a pin or shaft turning in a hole or bushing
- **Input and output:** Continuous rotation -> walking motion: each turn of the crank moves each foot through one stride. Klann's patent leg steps about 0.54 of its stride length high (step height 0.5424 x stride) and keeps the foot on the ground in a nearly straight line for about half the crank turn; his walking-chair version has a 12 in (about 305 mm) stride, a 7.5 in (about 190 mm) step height and stays within +/-0.33 in of a straight line (US 6,260,862). Jansen's leg gives a long, nearly flat ground stroke and a high return arc (Wang 2026). The foot's horizontal speed is not constant: in both the Klann and Strandbeest linkages it slows towards each end of the ground stroke, which gives a slightly halting gait on grippy ground (DIYwalkers). Efficiency: lower than a wheel on flat ground, because the feet speed up and slow down, slip and lift the body slightly (a Hackaday commenter says the Klann linkage wastes more energy this way than Jansen's); no measured figure found ⚑ [uncertain]. Motors usually need gearing down: DIYwalkers' LEGO walkers use reductions such as 5:1, and only their Strider linkage could walk at 1:1 without the motors stalling. Shaft arrangement: all pivots and the crank axle are parallel (a planar mechanism). Back-drivable: the legs can in principle turn the crank backwards, for example when the walker is pushed, except near dead points where bars line up; at a dead point Jansen's knee joint can 'flip' into the wrong position (DIYwalkers) ⚑ [uncertain as a general rule].
- **Power:** passive (no power needed): the linkage itself has no power source, but something must turn the crank: a geared electric motor, a hand crank, or the wind (Jansen's Strandbeests are moved by the wind, and some store air pressure to keep walking when there is no wind; Wikipedia). If the drive stops, the walker simply stops where it is.
- **Load:** Light to heavy depending on scale. Desk models carry only themselves; Klann-type walkers have been built big enough to ride: the Mondo Spider carries one person at up to about 1.2 m/s (Wikipedia), DIYwalkers mention the 14,000 lb (about 6.4 t) Klann-based Walking Beast, and four 6 lb TrotBot legs carried a 450 lb machine (DIYwalkers). The legs are strong in their own plane but weak against sideways forces and twisting, which can 'snap the legs like twigs', especially when the walker turns on the spot (DIYwalkers). Pin forces are much higher than the foot load: in Wang's model of a Jansen leg pressed down with 20 N, the most loaded frame pivot carries about 48 N.
- **Play and precision:** Play: noticeable, because each leg has about ten pin joints and the clearance of every one adds up at the foot ⚑ [uncertain: no measurement found]. Repeatability: the foot follows the same loop every turn, but not a perfect line; Klann's walking chair is designed to stay within +/-0.33 in over a 12 in stride. Wang (2026) found in a tolerance study that some bar lengths strongly affect ground clearance and need tight manufacturing tolerances. Misalignment: pivots must be parallel and the bars must lie in separate, neighbouring planes or they rub and bind; DIYwalkers advise that each leg part should connect to parts in an adjacent plane, and nablu.com warns that built-in spacer washers with burrs stack up and squeeze the bars together.
- **Taking it apart:** removable: the bars are joined by pins, screws, shafts with snap clips or LEGO Technic pins (brand) and can be taken apart; snap-together printed and kit versions come apart by hand, while Jansen's large sculptures are tied with cable ties
- **How often it can be reused:** many times: a pinned walker can be dismantled and rebuilt repeatedly; the practical limit is wear of the pivot holes and pins (DIYwalkers found LEGO leg pins wear out after a dozen or so hours of walking)
- **Sealing:** none: it is an open mechanism of bars and pins and seals nothing
- **Adjustable:** Usually no: the bar lengths fix the foot path. The step height and stride can be changed only by changing pivot positions or bar lengths (Klann's patent; DIYwalkers move the Klann leg's lower rockers towards the centre for a higher step), so prototypes are often built from LEGO Technic beams (brand) or bars with several holes, and checked in a simulator first. Speed and direction are adjusted by the drive: running the left and right leg sets from separate motors lets the walker steer (Hackaday printed Strandbeest; Wikipedia 'Leg mechanism').
- **Access needed:** not applicable: it is a mechanism in an open frame, reached from the side
- **Materials:** Jansen builds his Strandbeests from yellow PVC tubing, cable ties (zip ties), wood, nylon thread, adhesive tape and fabric sails (Wikipedia, English and German). Desk kits (Gakken Mini Strandbeest, brand) are injection-moulded plastic with a metal shaft and a rubber band (Maker Project Lab). Printed walkers use PLA or PETG; PETG is better for snap-fit shafts because PLA is brittle and its layers split (nablu.com). LEGO Technic beams (brand) are used for quick prototypes, with 3/16 in metal rods as axles (DIYwalkers). Large walkers use steel legs (Mondo Spider) or laser-cut, anodised aluminium (an underwater Klann walking robot pictured in Wikipedia's 'Klann linkage' article), with bushings or bearings at every joint (Klann's patent).
- **Heat, cold, water and wear:** Printed PLA softens above about 60 °C and degrades in UV light, so a PLA walker left in a hot car or the sun can warp; PETG is fine for most outdoor use below about 80 °C (Prusa). Sand and grit getting into the many pin joints increase friction and wear ⚑ [uncertain: no measurement found]; Jansen designs his beests to survive sand, storms and water and some anchor themselves when a storm comes (Wikipedia). Joint wear limits the life of any walker (Wang 2026), and plastic pins wear out (DIYwalkers: LEGO leg pins after a dozen or so hours). Long legs bend sideways under turning loads, worse with heavy payloads (DIYwalkers).

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): the most common maker route; bars, triangles, frames and crankshafts print flat (examples: LoboCNC's Easy Strandbeest, Anachronist's parametric OpenSCAD Strandbeest, Maker 101's motorised Strandbeest on Hackaday)
  - laser cut: flat bars in acrylic, plywood or aluminium suit the planar legs; Wikipedia's 'Klann linkage' article pictures an underwater walking robot with laser-cut, anodised aluminium Klann legs
  - woodwork: Jansen's Lignatum-era beests were wood-based (Wikipedia); simple wooden bars and dowel pins suit large slow models ⚑ [uncertain: no wooden build guide opened]
  - sheet metal: steel or aluminium bars for large or ride-on walkers such as the Mondo Spider's eight steel legs (Wikipedia)
  - off-the-shelf part: LEGO Technic beams and pins (brand) for prototypes (DIYwalkers) and ready-made kits such as the Gakken Mini Strandbeest (brand)
- **Printing it in one piece (print in place):** partly: LoboCNC's Easy Strandbeest prints each leg unit pre-assembled with working pivots (they must be cracked free and worked loose after printing), and its crankshaft prints as one piece, but the legs, side rods, end pieces and crankshaft are then clipped together; most other printed walkers are printed as separate bars and pinned or snapped together
- **Tools:** None for snap-together kits and the print-in-place Easy Strandbeest (apart from a razor blade to free stuck printed joints and a drop of light oil); a needle file to remove burrs from printed holes and shafts (nablu.com); a screwdriver or hex key and pliers for screwed or pinned joints; glue for a few parts of some printed kits (e.g. gears onto shafts in Wright4TheJob's desk model); a soldering iron and basic electronics tools if motorised
- **Difficulty:** moderate: a desk-sized walker prints or laser-cuts easily and the proportions are published, but it has many joints that all need low friction, legs must be stacked in the right order and phase on the crankshaft, and large walkers become a real structural-engineering job

### 3D printing tips

1) Get the geometry right first: try the proportions in a simulator (the DIYwalkers Klann and Strandbeest optimisers, HUANGYAN920's animations) or build a LEGO version, then print (DIYwalkers warn that a good simulation still needs tinkering). 2) Orientation: print shafts and pins standing up so they come out round; nablu.com notes that a snap clip printed vertically is 'the absolute worst orientation' because snapping it in pulls the layers apart, so print snap-fit shafts in PETG (sticky, not brittle) or a PLA with good layer adhesion; shiny silk PLA broke the clips. Snap-fit parts should be printed horizontally whenever possible. 3) Clean up: file burrs out of hub holes and ridges off shafts, and make sure built-in spacer washers are flat, because the tolerances stack up along a crankshaft carrying many bars (nablu.com). Print a few sample parts first to check bearing fit and clip strength. 4) Print-in-place legs: LoboCNC recommends PLA for stiffness, slows the small-perimeter speed so thin vertical shafts bond well, needs supports only under the crankshaft's overhanging shafts, and frees each joint by gently cracking it, working it back and forth, running a razor blade into tight gaps and adding a drop of light oil; with 8 legs driven by a fan, 'you can tolerate very little friction'. 5) Cheap pins: Wright4TheJob's desk model holds its joints with lengths of PLA filament ('PLA spikes') and snap fits. 6) Assembly order and phase: connecting arms must go onto each crank section in a set order, and opposite legs must be half a turn apart (diywalkers: crank of 3 units needs a centre crank of 6 to put the outer legs 180 degrees out of phase; Maker Project Lab: each successive arm stacks closest to you). 7) Keep each bar in its own layer (plane) next to the parts it joins, so bars do not collide or bind (DIYwalkers). 8) Gear the motor down and use one motor per side if you want to steer (Hackaday printed Strandbeest uses two DC gear motors). 9) PLA softens above about 60 °C and degrades in UV light (Prusa), so use PETG (fine below about 80 °C and outdoors, Prusa) for a walker left in the sun.

### Buying one (off-the-shelf parts)

Gakken Mini Strandbeest kit (brand) for a ready-made Jansen walker; LEGO Technic beams, pins and axles (brand) for prototypes; small DC gear motors (geared DC motors) with a motor driver, such as the Arduino L293D shield used in Maker 101's printed Strandbeest; spur gears for gearing down; steel rod or silver-steel shafting for crankshafts and support rods (DIYwalkers used 3/16 in rod); for larger walkers, flanged bushings or plain bearings at every pivot (as Klann's patent shows), shoulder bolts (shoulder screws), dowel pins, washers and retaining clips (E-clips) ⚑ [uncertain: these fastener names are generic suggestions, not checked against a specific build].

## Rules of thumb

- Jansen's proportions (the 'holy numbers', lengths in the same units, crank = m): a = 38.0, b = 41.5, c = 39.3, d = 40.1, e = 55.8, f = 39.4, g = 36.7, h = 65.7, i = 49.0, j = 50.0, k = 61.9, l = 7.8, m = 15.0. Here m is the crank radius and a and l are the horizontal and vertical distances from the crank axle to the fixed frame pivot (Wikimedia Commons 'Strandbeest Leg Proportions.svg'; Wang 2026, Table 1). Scale them all together to change the size; changing them separately changes the gait.
- Klann's patent leg (US 6,260,862): for a stride of 1 unit the crank is 0.267949 units (so the stride is about 3.7 crank lengths), the step height is 0.5424 units, and the leg is about 2 units long with a 150 degree bend at the knee; the foot can clear obstacles about 54% of the stride length high. DIYwalkers redraw the same leg scaled to crank = 3 and describe the knee bend as 30 degrees.
- Klann's walking-chair version: 12 in stride, 7.5 in step height, foot within +/-0.33 in of a straight line, front and rear leg sets 60 in apart for stability (US 6,260,862).
- Each foot should be on the ground for at least half of the crank turn in a two- or four-legged group, or at least a third of the turn in a three- or six-legged group, so the body is always supported (Wikipedia 'Leg mechanism', design goals). Klann's foot is on the ground for about half the turn (patent).
- Pair legs half a turn (180 degrees) apart on the crankshaft; 12-legged walkers need cranks 120 degrees apart; the crank must be keyed (square or hex shaft, or keyed axle) so the legs stay in phase (DIYwalkers).
- Foot-path shape: for rough ground, prefer a high, oval foot path; triangular paths are high only in the middle and catch obstacles at the ends, and teardrop paths can leave the walker unable to reverse out; adding a claw-like 'heel' helps a Klann leg clear obstacles (DIYwalkers).
- Small walkers can manage with three feet on the ground; large walkers should keep four feet down at all times, like a four-wheeled car (DIYwalkers).
- Scale: weight grows with size cubed but strength only with size squared, and forces from swinging feet grow with size to the fourth power, so the bigger the walker, the smoother its gait and the more trussed (triangulated) its legs and frame must be (DIYwalkers).
- The pins carry more than the foot load: in Wang's (2026) Jansen model a 20 N foot load gives up to about 48 N at the most loaded frame pivot and peak crank torque of 0.24 N m at 1 rev/s; the crank bearings turn a full circle every step and wear regardless of bar lengths, so give the crank and the frame pivot the best bearings.
- LEGO prototypes: a bar of length n needs a beam with n + 1 holes, because the first hole counts as zero (DIYwalkers).

## Common failures

1) Feet catch on an obstacle and the linkage jams, which can grind or strip the gears (DIYwalkers): give the foot path enough height, prefer an oval path, add a heel, and protect the drive. 2) A joint 'flips' at a dead point, especially Jansen's knee (DIYwalkers): add a stop to block the wrong position, or check the design in a simulator. 3) Too much friction for the drive: with many legs every stiff joint adds up; free each joint, deburr holes and shafts, and oil lightly (LoboCNC; nablu.com). 4) Printed snap-fit shafts break along the layers when pressed in (nablu.com): use PETG, print snap features horizontally when possible, and press only on the two mating parts. 5) Arms clipped onto the crankshaft in the wrong order or phase, so legs fight each other (LoboCNC; Maker Project Lab). 6) Legs bend or snap sideways and support rods sag, especially when turning on the spot (DIYwalkers): make legs wider or trussed, and brace rods with tensioned cables or a truss. 7) Halting, skidding gait because the foot slows at the ends of its stroke (DIYwalkers): add hinged feet with curved bottoms that rock, or feet that slide. 8) Underpowered motor: gear it down (DIYwalkers). 9) Worn pins and holes add play and make the walk sloppy: use metal pins or bushings at the most loaded pivots (Klann's patent; Wang 2026).

## Safety

Crossing bars and the crank close like scissors and can pinch fingers while the walker is running ⚑ [uncertain: general advice]. A jammed linkage driven by a strong motor can strip gears (DIYwalkers), so use a motor no stronger than needed or add a slipping clutch. Large walkers are heavy machines: DIYwalkers wear bike helmets when testing their rideable TrotBot, and ride-on walkers like the Mondo Spider need engineering checks before anyone rides. Wind-driven models can run away in strong wind (Jansen's beests anchor themselves in storms; Wikipedia).

## Related

- Four-bar linkage (incl. parallelogram linkage): the simplest walking legs use a four-bar coupler curve as the foot path; Klann's linkage grew out of four-bar double-rocker curves (Wikipedia)
- Straight-line linkages (Watt, Chebyshev, Peaucellier): give the flat part of the stride; Chebyshev's Plantigrade Machine (1878), built from his lambda linkage, was an early walking machine (Wikipedia)
- Slider-crank: the simplest crank-driven toy legs use inverted slider-cranks (patents listed in Wikipedia 'Leg mechanism')
- TrotBot and Strider linkages (DIYwalkers): later crank-driven leg linkages designed for steadier foot speed and higher, more obstacle-proof steps
- Whegs (wheel-legs, listed by DIYwalkers) and single rotating-crank legs (e.g. US patent 6,481,513, 'Single Actuator per Leg Robotic Hexapod', listed in Wikipedia 'Leg mechanism'): simpler rough-terrain alternatives with fewer joints
- Servo-driven legged robots: each joint has its own motor, so gait, stride and direction can change, at the cost of electronics and control
- Mechanical metamaterial mechanism: HPI printed a working Jansen walker as one block of flexible cells instead of bars and pins
- Gear trains and gearboxes: usually needed between the motor and the crankshaft to slow it down
- Cam and follower: another way to make a part follow a chosen path from a rotating shaft, used in automata

## Make it yourself

- [Easy Strandbeest (LoboCNC, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/853015-easy-strandbeest): Wind-driven 8-leg Jansen walker with print-in-place leg units and a one-piece printed crankshaft; detailed notes on freeing and oiling the joints and on assembly order *(licence: CC BY-SA)*
- [Theo Jansen Strandbeest Desktop Mechanism (Wright4TheJob, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/194176-theo-jansen-strandbeest-desktop-mechanism): Hand-cranked desk model of one pair of Jansen legs, driven through a 2:1 gear set, with joints held by PLA filament pins and snap fits *(licence: CC BY-SA)*
- [Building a strandbeest (nablu.com, by Anachronist)](https://www.nablu.com/2020/05/building-strandbeest.html): Step-by-step build article for a parametric OpenSCAD Strandbeest whose parts all snap together without supports, with lessons on PLA versus PETG snap fits and deburring (the models are on Printables, model 129102, 'Parametric strandbeest in OpenSCAD') *(licence: Printables model CC BY-NC (from Printables API); article licence not stated ⚑ [uncertain])*
- [Crawler Mechanism (DigiKey, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1081125-crawler-mechanism): A custom, easier-to-assemble Klann-linkage crawling robot by Odd Jayy, with a link to full build instructions and Arduino code *(licence: CC BY)*
- [Klann Linkage Optimizer (DIYwalkers)](https://www.diywalkers.com/klann-linkage-optimizer.html): Interactive Scratch simulator to change Klann bar lengths and see the foot path and foot speed; includes Klann's patent proportions and LEGO-friendly versions; Python and Scratch code downloadable *(licence: not stated ⚑ [uncertain])*
- [LEGO Strandbeest Optimizer (DIYwalkers)](https://www.diywalkers.com/strandbeest-optimizer-for-lego.html): Interactive Jansen-linkage calculator with Jansen's proportions scaled to crank = 3, LEGO approximations, foot-speed plots and tips on dead points and leg planes *(licence: not stated ⚑ [uncertain])*
- [HUANGYAN920/Mechanical interactive mechanism animations](https://huangyan920.github.io/Mechanical/): Browser animations that include a Klann walking linkage (no. 228, 克兰步行机构) and a Jansen walking linkage (no. 229, 詹森步行机构); labels mostly in Chinese *(licence: MIT (code))*

## Pictures, videos and models

- [Strandbeest-Walking-Animation.gif (Wikimedia Commons, by MichaelFrey)](https://commons.wikimedia.org/wiki/File:Strandbeest-Walking-Animation.gif): Animation of one Jansen leg turning through a full crank cycle, with the foot tracing its flat-bottomed path *(licence: CC BY-SA 4.0)*
- [Strandbeest Leg Proportions.svg (Wikimedia Commons, by MichaelFrey)](https://commons.wikimedia.org/wiki/File:Strandbeest_Leg_Proportions.svg): Labelled diagram of the Jansen leg with the 'holy number' bar lengths a to m *(licence: CC BY-SA 3.0)*
- [F4-motion.gif (Wikimedia Commons, by Joseph Klann)](https://commons.wikimedia.org/wiki/File:F4-motion.gif): Animation of a set of Klann linkage legs walking, with the pivots marked and the near legs outlined *(licence: Public domain)*
- [Strandbeest, TrotBot, Strider, Klann Linkages.gif (Wikimedia Commons, by WadeVagle)](https://commons.wikimedia.org/wiki/File:Strandbeest,_TrotBot,_Strider,_Klann_Linkages.gif): Side-by-side animation comparing the foot paths of the Strandbeest (Jansen), TrotBot, Strider and Klann leg linkages *(licence: CC BY-SA 4.0)*
- [Strandbeest walking with six legs.gif (Wikimedia Commons, by MichaelFrey)](https://commons.wikimedia.org/wiki/File:Strandbeest_walking_with_six_legs.gif): Animation of six Jansen legs on one crankshaft taking turns to carry the body *(licence: CC BY-SA 4.0)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 10 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Jansen%27s_linkage>
- <https://en.wikipedia.org/wiki/Klann_linkage>
- <https://en.wikipedia.org/wiki/Leg_mechanism>
- <https://en.wikipedia.org/wiki/Theo_Jansen>
- <https://de.wikipedia.org/wiki/Theo_Jansen>
- <https://en.wikipedia.org/wiki/Mondo_spider>
- <https://en.wikipedia.org/wiki/Chebyshev_lambda_linkage>
- <https://arxiv.org/abs/2606.22129>
- <https://arxiv.org/pdf/2606.22129>
- <https://patents.google.com/patent/US6260862B1/en>
- <https://www.diywalkers.com/walker-abcs.html>
- <https://www.diywalkers.com/klanns-linkage-plans.html>
- <https://www.diywalkers.com/klann-linkage-optimizer.html>
- <https://www.diywalkers.com/strandbeest.html>
- <https://www.diywalkers.com/strandbeest-optimizer-for-lego.html>
- <https://hackaday.com/2025/01/16/building-a-3d-printed-strandbeest/>
- <https://www.nablu.com/2020/05/building-strandbeest.html>
- <https://www.makerprojectlab.com/mini-strandbeest-kit-review/>
- <https://raw.githubusercontent.com/wrongu/strandbeest/master/README.md>
- <https://raw.githubusercontent.com/garyhodgson/strandbeest/master/README.md>
- <https://hpi.de/baudisch/projects/metamaterial-mechanisms.html>
- <https://huangyan920.github.io/Mechanical/>
- <https://help.prusa3d.com/article/pla_2062>
- <https://help.prusa3d.com/article/petg_2059>
- <https://commons.wikimedia.org/wiki/File:Strandbeest-Walking-Animation.gif>
- <https://commons.wikimedia.org/wiki/File:Strandbeest_Leg_Proportions.svg>
- <https://commons.wikimedia.org/wiki/File:Jansen%27s_Linkage.svg>
- <https://commons.wikimedia.org/wiki/File:F4-motion.gif>
- <https://commons.wikimedia.org/wiki/File:Strandbeest,_TrotBot,_Strider,_Klann_Linkages.gif>
- <https://commons.wikimedia.org/wiki/File:Strandbeest_walking_with_six_legs.gif>
- <https://api.printables.com/graphql/>
- <https://www.printables.com/model/853015-easy-strandbeest (URL from Printables API, page not opened)>
- <https://www.printables.com/model/194176-theo-jansen-strandbeest-desktop-mechanism (URL from Printables API, page not opened)>
- <https://www.printables.com/model/129102-parametric-strandbeest-in-openscad (URL from Printables API, page not opened)>
- <https://www.printables.com/model/1081125-crawler-mechanism (URL from Printables API, page not opened)>
