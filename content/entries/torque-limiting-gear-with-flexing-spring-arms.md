---
title: Torque-limiting gear with flexing spring arms
description: A gear or hub whose own flexible arms grip the shaft by spring force, so it drives normally but slips instead
  of stripping teeth when overloaded, with no separate springs, balls or nuts.
num: 5
term: Compliant torque-limiting gear (compliant slip hub, flexure slip clutch)
plain_name: A plastic gear or hub with springy arms built into it that hug the shaft tightly enough to drive it, but let the
  gear slip round when something jams; the RC 'servo saver' is a spring-loaded servo arm that gives way when the wheels are
  knocked and then springs back
aliases:
- compliant slip hub
- flexure slip clutch
- torque limiting gear (DuPont design guide term)
- gear with sliding coupling / split-hub coupling (DuPont design guide term)
- slip gear
- slipping gear
- clutch gear
- friction hub
- spring-arm clutch
- gear saver or motor saver (maker term) [uncertain]
- friction-type torque limiter with a split resin sleeve (printer paper-feed parts)
- 'servo saver (RC cars: a sprung or flexible servo arm)'
- adjustable servo saver
- flexible servo arm / flexible servo horn
family: torque limiting & slip
other_families: [compliant mechanisms & flexures, print-in-place & 3D-printing joints, clutches & couplings]
finder:
  job: [slip or let go when overloaded, join and hold]
  motion: rotate
  special_behaviour: [torque-limiting, self-aligning or self-centring]
  holding_principle: [friction or clamping, spring force, shape]
  reuse_cycles: many times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: 'yes'
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM), 3D print (resin)]
  connects: [shaft]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning]
  shaft_layout: [parallel, in line]
  overload_response: slips and keeps going
  clicks: not applicable
  tools: [none, press or vice, hand tools]
  load_max: light
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points:
- kind: sources
  note: '**Printables models cited through the API**: printables.com model pages return 403 to the agents, so they read models
    through `https://api.printables.com/graphql/`. Where no page URL was confirmed, `make_it_yourself` entries point at the
    API URL with the model ID in the title (*Friction slip clutch*, *Shear-pin coupling*, *Torque-limiting gear*). Replace
    each with the model''s page URL (`printables.com/model/<id>-<slug>`) after opening it in a browser.'
uncertain_fields: [aliases, motion, holding_principle, play_and_precision, materials, processes, making_tips_3d_printing,
  rules_of_thumb, when_not_to_use, environment_limits, make_it_yourself]
diagram_idea: Front view of a gear whose hub is cut into three curved spring arms pressing on a round shaft, animated so the
  gear drives the shaft normally, then the shaft is blocked and the gear keeps turning with the arms sliding round it; beside
  it, a servo arm split in two halves joined by a spring that bends when a wheel is knocked and springs back.
links:
- url: https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  title: General Design Principles for DuPont Engineering Polymers (Design Guide Module I), ch. 8 'Gears', p. 48
  shows: Line drawings Fig. 8.05 'Torque limiting gear' (gear with pivoting moulded-in springs) and Fig. 8.06 'Gear with sliding
    coupling' (split hub acting as a slipping coupling), plus Fig. 8.02 hub-to-rim flexible web
  license: link only (© 2000 DuPont; cite facts in our own words)
- url: https://youtu.be/KJ4pp4CCnTc
  title: Safety clutch 6 (spring arm) (Nguyen Duc Thang, YouTube thang010146)
  shows: 'CAD animation: a pin on a springy arm drives a slotted shaft and jumps out of the slot when overloaded'
  license: link only (YouTube, all rights reserved)
- url: https://youtu.be/Apye3XXRpYU
  title: Safety clutch 14 (Nguyen Duc Thang, YouTube thang010146)
  shows: 'CAD animation: two parts of an arm held in line by a leaf spring that bends and lets them rotate apart when the
    machine crashes, the same idea as an RC servo saver'
  license: link only (YouTube, all rights reserved)
- url: https://patents.google.com/patent/US20030050121A1/en
  title: US20030050121A1 'Torque limiter and rotary member with the torque limiter' (Google Patents)
  shows: Patent drawings of a one-piece resin gear boss with a slit sleeve squeezed onto a shaft by a ring spring, used in
    printer paper feeds
  license: link only (patent document)
make_it_yourself:
- url: https://www.printables.com/model/490489-slipping-gear-clutch-gear-for-rc-cars
  title: Slipping gear / clutch gear for RC cars (Prism08, Printables)
  what_it_is: Printable slipping gear (20-tooth helical, module 1.5) made of a gear, a ring and a clutch part that must flex
    (exact arm geometry not seen [uncertain]); two versions, one that slips easily and a stronger one, plus a test axle for
    a drill; clutch printed in PETG (web page bot-blocked here; details read through the Printables API)
  license: CC BY-NC
- url: https://www.thingiverse.com/thing:6734746
  title: Flexure slip clutch (yehar, Thingiverse)
  what_it_is: Parametric OpenSCAD flexure-spring friction clutch to use as a torque limiter or gear/motor saver; torque set
    by a 'tight' parameter and the height; PETG recommended (page opened but its content loads by JavaScript; details from
    a search-engine summary [uncertain])
  license: Creative Commons Public Domain Dedication [uncertain]
- url: https://api.printables.com/graphql/
  title: Orlandoo Hunter OH32X02 Servo Saver (Aspengt, Printables model id 383115)
  what_it_is: Replacement servo arm for a micro RC truck printed in TPU so the arm itself flexes and acts as a servo saver,
    in two stiffnesses (read through the Printables public API; the web page could not be opened here)
  license: CC BY-NC-SA
- url: https://api.printables.com/graphql/
  title: Servo Saver Replacement for HPI Firestorm RC Truggy (Timo, Printables model id 74078)
  what_it_is: Printable PETG servo saver that reuses the original spring, metal sleeve and nut; the designer notes it is weaker
    than the original and also offers a solid version whose protection is breaking (read through the Printables public API)
  license: CC BY-NC-SA
sources:
- https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
- https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
- https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
- https://patents.google.com/patent/US20030050121A1/en
- https://tamiyamodel.com/how-does-a-servo-saver-work/
- https://rcraces.com/what-is-a-servo-saver/
- http://rc4beginners.blogspot.com/p/lesson-4-steering-system_06.html
- https://en.wikipedia.org/wiki/Torque_limiter
- https://help.prusa3d.com/article/pla_2062
- https://help.prusa3d.com/article/petg_2059
- https://cs448m.github.io/lectures/machines/doc/3.pdf
- https://youtu.be/KJ4pp4CCnTc
- https://youtu.be/Apye3XXRpYU
- https://www.printables.com/model/490489-slipping-gear-clutch-gear-for-rc-cars
- https://www.thingiverse.com/thing:6734746
- https://api.printables.com/graphql/
- https://uomustansiriyah.edu.iq/media/lectures/5/5_2021_12_11!08_29_17_PM.pdf
research: research/connection-types/results/Torquelimiting_gear_with_flexing_spring_arms_compliant_slip_hub.json
image: null
glossary: [backlash, axial--radial, detent, ratchet, pawl, torque, linkage, stiffness, preload, flexure, torsion, tolerance,
  interference-fit, form-fit--force-fit--material-bond, set-screw, spline, chamfer--fillet, stress-relaxation, brittle--ductile,
  peel-vs-shear, o-ring]
---

A gear or hub whose own flexible arms grip the shaft by spring force, so it drives normally but slips instead of stripping teeth when overloaded, with no separate springs, balls or nuts.

**In plain words:** A plastic gear or hub with springy arms built into it that hug the shaft tightly enough to drive it, but let the gear slip round when something jams; the RC 'servo saver' is a spring-loaded servo arm that gives way when the wheels are knocked and then springs back. **Proper term:** Compliant torque-limiting gear (compliant slip hub, [flexure](../glossary.md#flexure) slip clutch).

**Also called:** compliant slip hub; flexure slip clutch; [torque](../glossary.md#torque) limiting gear (DuPont design guide term); gear with sliding coupling / split-hub coupling (DuPont design guide term); slip gear; slipping gear; clutch gear; friction hub; spring-arm clutch; gear saver or motor saver (maker term) ⚑ [uncertain]; friction-type torque limiter with a split resin sleeve (printer paper-feed parts); servo saver (RC cars: a sprung or flexible servo arm); adjustable servo saver; flexible servo arm / flexible servo horn.

## How it works

The hub is split into several springy arms or fingers that are made slightly too small for the shaft (or an inner ring), so they have to bend outwards to fit; their spring-back presses on the shaft, and friction carries the turning force. When the load needs more torque than that grip can carry, the arms slide round the shaft (or flex enough to hop out of small notches) and the gear slips, then grips again once the overload ends. A servo saver does the same job on a servo's arm: the two halves of the arm are held in line by a preloaded spring or by flexible plastic, so a knock on the wheels makes the arm give instead of the servo's gears, and the spring pulls it back to centre.

## Parts

Single piece: a gear or hub with built-in spring arms (split hub fingers or curved flexures), plus the shaft or inner ring it grips; long-life versions add one part, a metal ring spring or [O-ring](../glossary.md#o-ring) around the split hub. The servo saver is a few parts: an inner hub on the servo [spline](../glossary.md#spline), an outer arm, a spring (coil or [torsion](../glossary.md#torsion) spring, or the flexible plastic itself), a sleeve and a collar or nut

## Everyday examples

- The servo saver on the steering of a hobby RC car, which protects the steering servo when the front wheels hit something (tamiyamodel.com)
- Toy gearboxes with a small clutch inside a gear, e.g. a push-along toy dog whose broken internal clutch stopped it gripping (Printables 'replacement gear with clutch for toy')
- Printer paper-feed rollers that use a one-piece resin torque limiter (split sleeve with a ring spring) (US patent application US20030050121A1)
- Dial and clock setting knobs that turn with a light, slipping grip (DuPont Fig. 8.06)

## When to use it

When you want simple, built-in overload protection in a printed or moulded part with no extra hardware: toy and hobby gear drives, small robot grippers, pan-tilt heads and end-stop protection for small geared motors, settable dials and knobs, and servo protection in RC cars and small robots. Good when part count, size and cost matter more than an exact or adjustable slip torque

## When not to use it

Not for high or precisely known torques, or where the torque must stay the same for years under constant load, because plastic arms relax and wear (use an adjustable friction slip clutch with a metal spring, or a ball-detent torque limiter). Not where the part must hold its position or hold a load against gravity. Not where it may slip for long periods or in hot places (plastic softens). For servos in robots, lowering the servo's torque or current limit in software is another option ⚑ [uncertain]

## Details

- **What it does (jobs):**
  - slip or let go when overloaded: protects plastic gear teeth, small motors and servos
  - join and hold: it also holds the gear on its shaft, with no key or [set screw](../glossary.md#set-screw)
- **Movement:** rotate: 1:1 rotation while gripping; unlimited slipping rotation when overloaded. Servo saver: rotate, a limited give of some degrees that springs back to centre (exact angle not found ⚑ [uncertain])
- **Directions it can move (degrees of freedom):** 0 while gripping (gear and shaft turn together); 1 while slipping (the gear turns relative to the shaft). Servo saver: 1 (the arm can turn a little relative to the servo shaft against a spring)
- **Special behaviour:**
  - torque-limiting: slips (or gives, for a servo saver) at a torque set by the [stiffness](../glossary.md#stiffness) and pre-bend of its arms
  - self-aligning or self-centring: the servo saver's spring pulls the arm back into line after a knock, so steering returns to centre
  - Resets itself: nothing to replace after an overload, unlike a [shear](../glossary.md#peel-vs-shear) pin
- **How it holds:**
  - friction or clamping ([force-fit](../glossary.md#form-fit--force-fit--material-bond)): the arms press on the shaft and friction carries the torque
  - spring force (a spring or springy part presses it in place): the arms are the spring; a servo saver uses a coil or torsion spring or flexible TPU
  - shape (form-fit): some versions have arm tips that sit in notches and hop over them when overloaded, like a [detent](../glossary.md#detent) ⚑ [uncertain]
- **Input and output:** continuous rotation -> the same rotation, ratio 1:1, until the slip torque; then the output stops or slows while the input keeps turning. Efficiency close to 100% while gripping; slipping power becomes heat. Gear or hub mounted on a shaft (shafts in line or the gear meshing with parallel shafts). Back-drivable: yes, it slips at roughly the same torque in both directions. Servo saver: servo arm angle -> steering link angle 1:1, with springy give under shock
- **Power:** passive (no power needed)
- **Load:** light (to medium for larger moulded gears): suited to small instrument, dial, toy and printer drives and RC steering. DuPont suggests torque-limiting gears for plastic gear drives in meat grinders, can openers and hand drill presses, and says split-hub couplings are fine where the required torque is very low. Strong only in twist up to the slip torque; side loads must be carried by the shaft and its bearings
- **Play and precision:** Little or no play while gripping (DuPont even uses springy flexing gear parts to remove [backlash](../glossary.md#backlash)). After it slips the output loses its angular position, so re-home anything with a position sensor on the motor side. A servo saver adds some play (steering 'slop'), and some models add a slight delay in steering response (tamiyamodel.com). Because the arms flex it tolerates small variations in shaft diameter ⚑ [uncertain]
- **Taking it apart:** removable: the gear or hub pushes or snaps onto the shaft and can be pulled off; a servo saver screws onto the servo's splined output
- **How often it can be reused:** many times: it can slip, and be fitted and removed, many times, but plastic arms slowly relax and wear so the slip torque falls; printed ones are cheap to reprint
- **Sealing:** none
- **Adjustable:** mostly no: the slip torque is fixed by the arm thickness, length, material and how much they are pre-bent; to change it, reprint with a different fit or height, or add an O-ring or metal ring spring around a split hub. Some servo savers have a threaded collar that sets the spring [preload](../glossary.md#preload) (tamiyamodel.com: adjustable types let you adjust the spring tension)
- **Access needed:** end of a tube or shaft: it slides or snaps onto the shaft end
- **Materials:** Moulded: acetal (POM, e.g. Delrin (brand)) gears on nylon shafts (DuPont examples); a resin sleeve with [axial](../glossary.md#axial--radial) slits squeezed by a metal ring spring (printer torque limiter patent). 3D printed: PETG (flexes and tolerates heat, preferred by Printables designers), nylon, ABS, or TPU for flexible servo arms; avoid PLA for flexing arms because it is [brittle](../glossary.md#brittle--ductile) and relaxes under constant load. Servo savers: plastic or aluminium arms with a steel coil spring, metal sleeve and nut. Works best gripping a smooth metal shaft ⚑ [uncertain]
- **Heat, cold, water and wear:** Plastic springs lose force over time under constant load ([stress relaxation](../glossary.md#stress-relaxation)), faster when warm, so the slip torque drops (DuPont Module I, pp. 47-48 and 63). PLA softens and deforms above about 60 °C (Prusa PLA guide); PETG is rated for use below about 80 °C (Prusa PETG guide). Heat from slipping adds to this. Cold makes plastic arms more brittle and more likely to snap ⚑ [uncertain]. Grease or oil on the shaft lowers the grip ⚑ [uncertain]

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): PETG, nylon, ABS or TPU gears, hubs and flexible servo arms
  - 3D print (resin): tough or flexible resins for small gears ⚑ [uncertain]
  - injection moulding (industrial): acetal and nylon gears with moulded-in springs (DuPont)
  - CNC: flexural elements machined into a gear's hub (Slocum)
  - off-the-shelf part: RC servo savers, printer-type friction torque limiters, toy-kit clutch gears
- **Printing it in one piece (print in place):** yes: the gear or hub with its spring arms prints as one finished, working piece that simply pushes onto a shaft. Long-life designs add a separate metal ring spring or O-ring around the split hub, which makes them 'partly'
- **Tools:** none for most (push on by hand; a vice or small press for tight fits); a screwdriver for the screw that holds a servo saver on the servo; a spanner for an adjustable servo saver's collar or nut
- **Difficulty:** moderate: it prints in one piece with no extra hardware, but the grip depends on a tiny amount of interference (a fraction of a millimetre) and on the material, so expect several test prints and tuning; ready-made RC servo savers are easy to buy and fit

### 3D printing tips

Print the gear flat on the bed so the spring arms lie in the layer plane and bend within the layers; do not build flexing arms vertically in Z, because layer bonds are weak (Hubs snap-fit guide). Make each arm at least 1 mm thick at its root and add a [fillet](../glossary.md#chamfer--fillet) of at least half the arm thickness where it joins the hub (Hubs). Use PETG, nylon, ABS or TPU rather than PLA: the Printables RC slipping-gear designer prints the clutch part in PETG because it 'needs to flex and accept some heat', while PLA is fine for the other parts; Hubs calls PLA too brittle for repeated flexing; the flexure slip clutch on Thingiverse also recommends PETG because its springs keep their tension over time ⚑ [uncertain]. Make the grip parametric (interference and hub height) and print two or three versions: the Printables designer's first version would not slip at all, and he then offered a 'slips quite easily' part and a stronger part. Test the slip with a drill on its lowest torque setting holding the gear, as that designer suggests. Do not let the arms stay bent when not needed: DuPont's torque-limiting gear uses three pivoting springs so they do not remain loaded by accident, and plastic springs lose force under constant load (stress relaxation), so for a steady torque over a long time add a metal ring spring around the hub (DuPont). For a flexible servo arm, the Printables TPU servo saver was printed at 0.1 mm layers, 230 °C nozzle, 60 °C bed, 20 mm/s, retraction off, in two stiffnesses. Slipping makes heat; PLA softens above about 60 °C (Prusa)

### Buying one (off-the-shelf parts)

Servo saver (RC car steering), adjustable servo saver, aluminium servo saver, servo saver spring; servo horn (servo arm) for the servo's spline; friction-type torque limiter for office equipment (split resin sleeve with coil or C-ring spring, as in US patent application US20030050121A1); toy-kit clutch gears (e.g. LEGO Technic (brand) 24-tooth clutch gear); O-rings or spring-steel C-rings to add grip around a split hub; [tolerance](../glossary.md#tolerance) rings (a metal alternative)

## Rules of thumb

- Torque-limiting devices are very useful on plastic gears to stop tooth damage on overload, e.g. in meat grinders, can openers and hand drill presses; the springs must not remain accidentally in the loaded position, which DuPont's example achieves with three pivoting springs (DuPont Design Guide Module I, ch. 8 'Gears', pp. 47-48, Fig. 8.05)
- A split hub used as a slipping coupling is fine where the torque is very low (e.g. a small dial setting device); if a constant torque must be carried for a long time, add a metal spring around the hub to keep the force constant (DuPont Module I, p. 48, Fig. 8.06)
- Plastic [interference fits](../glossary.md#interference-fit) on shafts only suit low torque, because stress relaxation of the plastic can let them slip over time (DuPont Module I, p. 63): design the slip torque with margin and expect it to fall
- Machine or mould flexural elements into the gear's hub to keep a steady preload between gear and shaft, rather than relying on a plain press fit as the clutch (Slocum, FUNdaMENTALs of Design, Topic 5, 'Wheels: Clutches & Differentials')
- Flexing arms for FDM: root thickness at least 1 mm, root fillet radius at least 0.5 x the thickness, never build them vertically in Z; prefer ABS, nylon or TPU (Hubs, 'How to design snap-fit joints for 3D printing')
- Slip torque is roughly friction coefficient x total pressing force of all arms x shaft radius (the friction clutch rule T = mu x W x R applied to a hub; derived, not from a design guide ⚑ [uncertain])
- Servo saver setting: stiff enough that normal steering does not make it give, loose enough to give on impacts ⚑ [uncertain]

## Common failures

Too tight: it never slips and the teeth strip anyway (the Printables RC slipping-gear designer's first version would not slip). Too loose, or loosened over time by stress relaxation: it slips in normal use (DuPont). Arms crack at the root if they are thin, have no fillet, are printed vertically or are made of brittle PLA (Hubs). Long slipping heats and wears the hub and shaft. Printed servo savers can be weaker than the moulded originals and break often (Printables HPI servo saver replacement). Servo saver too soft: vague steering ('slop'). Avoid by tuning with test prints, using PETG, nylon or TPU, adding fillets, and adding a metal ring spring where the torque must stay steady

## Safety

Low risk. It limits torque but does not make a mechanism finger-safe. A printed arm can crack and fall into a gearbox. None known beyond the usual pinch points of gears and steering [linkages](../glossary.md#linkage)

## Related

- Friction slip clutch (slip coupling, slipper clutch): the same slip-by-friction idea with a separate metal spring and nut, so it is adjustable and steadier, but has more parts
- Ratchet-tooth torque limiter: sloped teeth on springy arms click over each other at a set torque; one-direction, noisy
- Ball-detent torque limiter: spring-loaded balls pop out of dimples; more precise and re-engages at the same angle
- Tolerance ring (wavy-band press fit): a metal wavy band does the same gripping-and-slipping job between a shaft and a hole, with less relaxation than plastic
- Servo horn and spline hub: the plain, rigid way to attach an arm to a servo, with no protection
- Series-elastic coupling: a deliberate spring between motor and output that gives under shock but does not slip
- Compliant [ratchet](../glossary.md#ratchet) and overrunning clutch (flexure [pawl](../glossary.md#pawl)): printed spring arms that give one-way motion instead of torque limiting
- Shear-pin coupling (breakaway link): breaks instead of slipping; some printed servo savers are simply designed to break at a set point

## Make it yourself

- [Slipping gear / clutch gear for RC cars (Prism08, Printables)](https://www.printables.com/model/490489-slipping-gear-clutch-gear-for-rc-cars): Printable slipping gear (20-tooth helical, module 1.5) made of a gear, a ring and a clutch part that must flex (exact arm geometry not seen ⚑ [uncertain]); two versions, one that slips easily and a stronger one, plus a test axle for a drill; clutch printed in PETG (web page bot-blocked here; details read through the Printables API) *(licence: CC BY-NC)*
- [Flexure slip clutch (yehar, Thingiverse)](https://www.thingiverse.com/thing:6734746): Parametric OpenSCAD flexure-spring friction clutch to use as a torque limiter or gear/motor saver; torque set by a 'tight' parameter and the height; PETG recommended (page opened but its content loads by JavaScript; details from a search-engine summary ⚑ [uncertain]) *(licence: Creative Commons Public Domain Dedication ⚑ [uncertain])*
- [Orlandoo Hunter OH32X02 Servo Saver (Aspengt, Printables model id 383115)](https://api.printables.com/graphql/): Replacement servo arm for a micro RC truck printed in TPU so the arm itself flexes and acts as a servo saver, in two stiffnesses (read through the Printables public API; the web page could not be opened here) *(licence: CC BY-NC-SA)*
- [Servo Saver Replacement for HPI Firestorm RC Truggy (Timo, Printables model id 74078)](https://api.printables.com/graphql/): Printable PETG servo saver that reuses the original spring, metal sleeve and nut; the designer notes it is weaker than the original and also offers a solid version whose protection is breaking (read through the Printables public API) *(licence: CC BY-NC-SA)*

## Pictures, videos and models

- [General Design Principles for DuPont Engineering Polymers (Design Guide Module I), ch. 8 'Gears', p. 48](https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf): Line drawings Fig. 8.05 'Torque limiting gear' (gear with pivoting moulded-in springs) and Fig. 8.06 'Gear with sliding coupling' (split hub acting as a slipping coupling), plus Fig. 8.02 hub-to-rim flexible web *(licence: link only (© 2000 DuPont; cite facts in our own words))*
- [Safety clutch 6 (spring arm) (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/KJ4pp4CCnTc): CAD animation: a pin on a springy arm drives a slotted shaft and jumps out of the slot when overloaded *(licence: link only (YouTube, all rights reserved))*
- [Safety clutch 14 (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/Apye3XXRpYU): CAD animation: two parts of an arm held in line by a leaf spring that bends and lets them rotate apart when the machine crashes, the same idea as an RC servo saver *(licence: link only (YouTube, all rights reserved))*
- [US20030050121A1 'Torque limiter and rotary member with the torque limiter' (Google Patents)](https://patents.google.com/patent/US20030050121A1/en): Patent drawings of a one-piece resin gear boss with a slit sleeve squeezed onto a shaft by a ring spring, used in printer paper feeds *(licence: link only (patent document))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 15 sentences on this page marked [uncertain].

## Sources

- <https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf>
- <https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF>
- <https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/>
- <https://patents.google.com/patent/US20030050121A1/en>
- <https://tamiyamodel.com/how-does-a-servo-saver-work/>
- <https://rcraces.com/what-is-a-servo-saver/>
- <http://rc4beginners.blogspot.com/p/lesson-4-steering-system_06.html>
- <https://en.wikipedia.org/wiki/Torque_limiter>
- <https://help.prusa3d.com/article/pla_2062>
- <https://help.prusa3d.com/article/petg_2059>
- <https://cs448m.github.io/lectures/machines/doc/3.pdf>
- <https://youtu.be/KJ4pp4CCnTc>
- <https://youtu.be/Apye3XXRpYU>
- <https://www.printables.com/model/490489-slipping-gear-clutch-gear-for-rc-cars>
- <https://www.thingiverse.com/thing:6734746>
- <https://api.printables.com/graphql/>
- <https://uomustansiriyah.edu.iq/media/lectures/5/5_2021_12_11!08_29_17_PM.pdf>
