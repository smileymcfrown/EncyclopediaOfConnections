---
title: Clevis joint
description: A U-shaped fork on one part and a flat tongue on the other are joined by a pin through both, making a simple,
  strong pivot that carries push and pull through the pin; on action-camera mounts, interleaved prongs are clamped by a thumbscrew
  so friction holds whatever angle you set.
num: 67
term: Clevis joint (clevis and pin; called a knuckle joint in machine-design textbooks)
plain_name: A hinge made from a fork on one part that wraps around a flat tab on the other, with a pin or bolt pushed through
  both so they can swing; action-camera mounts use the same idea with flat interlocking fingers that a thumb screw squeezes
  together so they hold any angle
aliases:
- fork-and-pin joint
- clevis and tang (the tang or tongue is the piece that sits inside the fork; Wikipedia)
- fork joint, fork head or clevis fork head (threaded fork ends to DIN 71752 / ISO 8140, used on pneumatic cylinders and gas
  struts)
- rod clevis or cylinder clevis
- knuckle joint (a forked rod end and an eye rod end joined by a knuckle pin; NPTEL machine design course)
- shackle (a U-shaped clevis together with its pin, as used in rigging; Wikipedia); rigging shackles have their own entry,
  Shackle and quick link
- clevis joint with folding spring bolt, or with bolt and circlip (catalogue names; mbo Osswald, igus)
- hitch pin and clevis (trailer and tractor drawbars) [uncertain]
- prong mount, finger mount, 2-prong and 3-prong mount (action cameras)
- GoPro mount (brand) and GoPro's own names 'mounting fingers' and 'mounting buckle'
- RC clevis (a small metal or nylon clevis on a threaded pushrod that clips onto a control horn; Model Aviation)
family: hinges & pivots
other_families:
- clamping, magnetic & friction connections
- quick-release & tool-free
finder:
  job: [let it move, join and hold, 'lock, and release by hand']
  motion: rotate
  special_behaviour: [quick-release]
  holding_principle: [shape, friction or clamping]
  reuse_cycles: many times
  seal: none
  access_needed: both sides
  print_in_place: partly
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), sheet metal, woodwork]
  connects: ['wall, rail, desk or grid']
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [none, hand tools]
  load_max: heavy
  usual_process: 3D print (FDM)
  adjustable: 'yes'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [aliases, load, reuse_cycles, play_and_precision, processes, making_tips_3d_printing, everyday_examples,
  environment_limits, safety_notes, common_failures]
diagram_idea: Exploded side view of a fork, tongue and pin with a split pin, with the pin's two shear planes marked in red
  and pull arrows on each part; beside it, an action-camera mount with two prongs sliding between three, the thumbscrew through
  all five into a captured nut, and a curved arrow showing the angle being set by hand.
links:
- url: https://commons.wikimedia.org/wiki/File:Clevis.svg
  title: File:Clevis.svg (Wikimedia Commons)
  shows: Drawing of a clevis pin through a U-shaped clevis (shackle), held in by a split pin
  license: CC BY-SA 3.0 (Sakurambo)
- url: https://commons.wikimedia.org/wiki/File:Principe_articulation_chape.svg
  title: File:Principe articulation chape.svg (Wikimedia Commons)
  shows: 'Principle drawing of a clevis coupling: fork, tongue and pin'
  license: CC BY-SA 3.0 (Cdang)
- url: https://commons.wikimedia.org/wiki/File:Surfaces_contact_articulation_porteafaux_chape.svg
  title: File:Surfaces contact articulation porteafaux chape.svg (Wikimedia Commons)
  shows: 'A cantilever pin joint next to a clevis, with the contact surfaces (blue arrows) and shear surfaces (red lines):
    one shear plane versus two'
  license: CC BY-SA 3.0 (Cdang)
- url: https://www.youtube.com/watch?v=y5l58xDnPUk
  title: Clevises and clevis joints - variants, assembly instructions and applications (YouTube, mbo Osswald EN; title confirmed
    through YouTube oEmbed, video not watched)
  shows: Manufacturer's video of clevis variants, how they are assembled and where they are used
  license: link only (standard YouTube licence)
- url: https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/README.md
  title: GoPro Mounts README (Jay Abbott, j-h-a/go-pro-mounts on GitHub)
  shows: Photos and build steps for printed three-prong and two-prong action-camera connectors and a long thumbscrew (images
    hosted on j-h-a.github.io)
  license: '''Do What You Want Public License'' v1 (permissive)'
make_it_yourself:
- url: https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/lib/mounting_prongs.scad
  title: mounting_prongs.scad (j-h-a/go-pro-mounts, OpenSCAD)
  what_it_is: OpenSCAD modules for GoPro-style prongs (3 mm prongs, 3.6 mm middle prong, 5.3 mm hole, pocket for an M5 nut);
    the repository also has tri-prong, bi-prong and flat connectors and a thumbscrew
  license: '''Do What You Want Public License'' v1'
- url: https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad
  title: 'BOSL2 hinges.scad: knuckle_hinge() (OpenSCAD library)'
  what_it_is: Parametric knuckle hinges (the fork-and-tongue idea with several knuckles) with pin holes, screw pins that self-tap
    in the last knuckle, or print-in-place interlocking cones
  license: BSD 2-Clause
- url: https://www.printables.com/model/406853-go-pro-camera-mount-adapter-2-and-3-prong
  title: Go Pro / Camera mount adapter - 2 and 3 prong (jtav1, Printables; details read through the Printables API)
  what_it_is: Two- and three-prong attachment points to add to your own designs; M4 bolt with captive nut, swivels about 180
    degrees; tested in PLA and PETG
  license: 'CC0 (Printables: Creative Commons Public Domain)'
- url: https://www.printables.com/model/1239290-gopro-mount-parametric
  title: GoPro Mount parametric (Thomas Förster, Printables) (URL from Printables API, page not opened)
  what_it_is: A FreeCAD-parametric GoPro-style mount with a print-in nut (pause at layer 98 to insert an M5 nut)
  license: CC BY-NC-SA
- url: https://www.printables.com/model/897509-gopro-action-camera-mount-m5-bolt-knob-freecad-par
  title: GoPro action camera mount M5 bolt knob (FreeCAD parametric) (Tol, Printables) (URL from Printables API, page not
    opened)
  what_it_is: A parametric printed knob for an M5 bolt to make your own thumbscrew; hole 5.1 mm, bolt-head pocket 8.6 mm across
    flats
  license: CC BY-SA
- url: https://www.printables.com/model/139308-fully-printed-gopro-thumb-screw
  title: Fully Printed GoPro Thumb Screw (rb, Printables; page returned 403, details read through the Printables API)
  what_it_is: A fully printed thumbscrew and nut for light-duty use when no metal parts are to hand
  license: CC BY-NC-SA
sources:
- https://en.wikipedia.org/wiki/Clevis_fastener
- https://commons.wikimedia.org/wiki/File:Clevis.svg
- https://commons.wikimedia.org/wiki/File:Principe_articulation_chape.svg
- https://commons.wikimedia.org/wiki/File:Surfaces_contact_articulation_porteafaux_chape.svg
- https://archive.nptel.ac.in/content/storage2/courses/112105125/pdf/Module-4_lesson-2.pdf
- https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/README.md
- https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/lib/mounting_prongs.scad
- https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/connector_triprong.scad
- https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/LICENSE
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
- https://storytellertech.com/gopro-screw-size/
- https://techsparewarehouse.com/blogs/news/gopro-mount-screws-the-ultimate-guide
- https://gopro.com/en/us/shop/mounts-accessories/mounting-finger-adapter/ABTFR-001.html
- https://www.jwwinco.com/en-us/products/3.6-Moving-transferring-connecting-with-shafts-and-joints/Fork-joints/DIN-71752-Metric-Size-Steel-Clevis-Fork-Heads
- https://springfixuk.com/blogs/news/clevis-fork-end-fittings-explained-din-71752-sizes-uses-installation-guide
- https://www.mbo-osswald.de/en/shop/clevises-clevis-joints/
- https://www.igus.com/spherical-bearings/clevis-rod-ends
- https://www.igus.in/info/igubal-clevis-joints
- https://www.modelaviation.com/control-linkage-roundup
- https://www.flyrc.com/beginners-guide-to-pushrods-and-connectors-2/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
- https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
- https://blog.uavmodel.com/3d-printed-drone-parts-tpu-mounts-petg-frames-and-design-for-fpv-accessories-2026/
- https://www.youtube.com/watch?v=y5l58xDnPUk
- https://api.printables.com/graphql/
research: research/connection-types/results/Clevis_joint_forkandpin_joint_prong_mount.json
image: null
glossary: [misalignment, detent, linkage, actuator, flexure, cantilever, clearance, form-fit--force-fit--material-bond, circlip,
  captive-nut, layer-lines, peel-vs-shear]
---

A U-shaped fork on one part and a flat tongue on the other are joined by a pin through both, making a simple, strong pivot that carries push and pull through the pin; on action-camera mounts, interleaved prongs are clamped by a thumbscrew so friction holds whatever angle you set.

**In plain words:** A hinge made from a fork on one part that wraps around a flat tab on the other, with a pin or bolt pushed through both so they can swing; action-camera mounts use the same idea with flat interlocking fingers that a thumb screw squeezes together so they hold any angle. **Proper term:** Clevis joint (clevis and pin; called a knuckle joint in machine-design textbooks).

**Also called:** fork-and-pin joint; clevis and tang (the tang or tongue is the piece that sits inside the fork; Wikipedia); fork joint, fork head or clevis fork head (threaded fork ends to DIN 71752 / ISO 8140, used on pneumatic cylinders and gas struts); rod clevis or cylinder clevis; knuckle joint (a forked rod end and an eye rod end joined by a knuckle pin; NPTEL machine design course); shackle (a U-shaped clevis together with its pin, as used in rigging; Wikipedia); rigging shackles have their own entry, Shackle and quick link; clevis joint with folding spring bolt, or with bolt and [circlip](../glossary.md#circlip) (catalogue names; mbo Osswald, igus); hitch pin and clevis (trailer and tractor drawbars) ⚑ [uncertain]; prong mount, finger mount, 2-prong and 3-prong mount (action cameras); GoPro mount (brand) and GoPro's own names 'mounting fingers' and 'mounting buckle'; RC clevis (a small metal or nylon clevis on a threaded pushrod that clips onto a control horn; Model Aviation).

## How it works

The tongue slides between the two ears of the fork and the pin passes through all three holes, so the parts can only turn about the pin (Wikipedia: it allows rotation in some axes while restricting rotation in others). A pull or push on the joint is shared by the two ears and crosses the pin at two places, so the pin is loaded in [shear](../glossary.md#peel-vs-shear) on two faces at once (double shear), which makes it much stronger than a single-sided ([cantilever](../glossary.md#cantilever)) pin of the same size (NPTEL; Wikimedia Commons diagram by Cdang). If the pin is loose in the fork it also bends, so a snug pin and stiff ears matter (NPTEL). On action-camera prong mounts, one part's two prongs slide between the other part's three, and a thumbscrew through all five screws into a nut: loose, the joint swings; tight, the screw clamps the prongs together and friction between the touching faces holds the angle (techsparewarehouse; j-h-a go-pro-mounts).

## Parts

A few parts: the fork (clevis: two parallel ears with matching holes), the tongue (tang, eye or lug) that fits between the ears, the pin (a headed clevis pin, a bolt or a shoulder screw) and something to keep the pin in (split pin, R-clip, circlip or retaining ring, folding spring clip, or a nut). Action-camera version: a two-prong part, a three-prong part, a thumbscrew and a nut held in the outer prong (a domed 'acorn' or cap nut on commercial mounts; an M5 nut in printed ones).

## Everyday examples

- Action-camera mounts (GoPro-style), where two and three flat prongs interleave and a thumbscrew clamps them (techsparewarehouse; j-h-a go-pro-mounts)
- Fork ends on gas struts, pneumatic cylinders and gate hardware (DIN 71752 fork heads; SpringFix)
- RC plane control rods, where a small clevis on a threaded pushrod clips onto the control horn (Model Aviation)
- Shackles in sailing rigging and on farm equipment (Wikipedia)
- Tow bars and tractor drawbars held with a hitch pin and clip ⚑ [uncertain]

## When to use it

Use a clevis when you need a simple, strong, one-axis pivot that carries push or pull: the end of an [actuator](../glossary.md#actuator), gas strut or [linkage](../glossary.md#linkage), a folding leg or arm, or a tow link, especially when you want to be able to pull the pin out to take it apart. Because the pin is supported on both sides, it is stronger and stiffer than a single-sided pin or a bolt through two overlapping plates. The action-camera prong version is a good choice when you want to set any angle by hand, lock it with a thumbscrew, and use accessories from many makers.

## When not to use it

Avoid it when the parts must also tilt sideways or twist (use a rod end or ball link, or a ball-and-socket joint), when there must be no play at all (use a preloaded bearing or a [flexure](../glossary.md#flexure) hinge), when the angle must be held firmly under large or vibrating loads (a friction prong mount can slip: use a Hirth joint or an indexing pin), or when clicks at set angles are wanted (use a [detent](../glossary.md#detent) hinge). For a long door or lid, a butt or piano hinge spreads the load better. For a joint that must snap on and off and move in every direction, use a ball stud and socket (angle joint).

## Details

- **What it does (jobs):**
  - let it move (turn, slide or bend): the tongue swings on the pin
  - join and hold: carries push and pull between a rod, strut or actuator and a bracket
  - lock, and release by hand: tool-free versions use a spring clip, R-clip or quick-release pin; prong mounts are tightened and loosened with a thumbscrew to set the angle or separate the parts
- **Movement:** rotate: about the pin only, through an arc limited by where the tongue hits the base of the fork or the parts' shape, e.g. 'about 180 degrees' for a printed 2- and 3-prong adapter (Printables 406853). A clamped prong mount does not move until the thumbscrew is loosened.
- **Directions it can move (degrees of freedom):** 1: turning about the pin (a clamped prong mount has 0 while tight). The [clearance](../glossary.md#clearance) between pin and holes adds a little unwanted wobble. Two prong joints at right angles, as on action-camera extension arms, give two turning axes.
- **Special behaviour:**
  - quick-release: pins held by a folding spring clip, R-clip or ball-lock pin come out by hand (mbo Osswald; SpringFix), and a prong mount comes apart once the thumbscrew is removed
  - none otherwise: a prong mount holds any angle through ordinary clamping friction, not a special mechanism
- **How it holds:**
  - shape (the parts interlock; [form-fit](../glossary.md#form-fit--force-fit--material-bond)): the pin passes through holes in both parts, so they cannot pull apart; the retainer (split pin, clip or nut) only stops the pin sliding out
  - friction or clamping (force-fit): on action-camera prong mounts the thumbscrew squeezes the interleaved prongs so friction holds the angle
- **Input and output:** not applicable: it is a pivot. In a linkage it passes push or pull straight through the pin without changing the kind of motion.
- **Power:** passive (no power needed)
- **Load:** Medium to heavy for its size in push and pull along the rod, because the pin is loaded in double shear and the fork ears and the eye share the load (NPTEL). It resists turning about the other two axes. Weak points: sideways force along the pin (held only by the pin head and retainer), a loose pin bending in a wide fork, and the ears or eye tearing, crushing or shearing out around the hole (NPTEL's failure checks). Prong mounts are light-duty: they hold a small camera by friction and a printed one can split along its layers in a crash (UAVMODEL) ⚑ [uncertain].
- **Play and precision:** Small play: a pin in plain holes always has some clearance, so the joint wobbles slightly; closer-fitting pins, shoulder bolts or bushed holes reduce it ⚑ [uncertain]. It lets the rods swing within the fork's plane (NPTEL: it 'permits angular [misalignment](../glossary.md#misalignment) of the rods') but does not tolerate twist out of that plane; where that is needed, igus pairs its clevis joints with self-aligning rod ends (igus). A tightened prong mount has no play until the clamping friction is overcome.
- **Taking it apart:** removable: take out the retainer and slide out the pin, or unscrew the thumbscrew; tool-free quick release when the pin is held by a spring clip, R-clip or ball-lock pin, or clamped by a thumbscrew
- **How often it can be reused:** many times: metal pins, spring clips, circlips and thumbscrews can be reused over and over; a split pin (cotter pin) is usually replaced once its legs have been bent ⚑ [uncertain]; printed thumbscrews and printed threads wear out much sooner (Printables 139308 and 432185 describe theirs as for light duty)
- **Sealing:** none
- **Adjustable:** Plain clevis: only by turning it on its threaded rod; threaded fork heads (DIN 71752) come with right-hand, left-hand and fine threads, so a rod with a fork at each end can be set to length and locked with a nut (JW Winco). Clevises with an elongated (slotted) hole give deliberate free play (mbo Osswald). Prong mount: yes, loosen the thumbscrew, set any angle, retighten.
- **Access needed:** both sides: the pin goes right through and its retainer sits on the far side (a threaded pin can screw into a tapped ear instead). On a prong mount the thumbscrew goes in from one side into a nut held in the far prong, so you only turn it from one side.
- **Materials:** Fork heads in zinc-plated steel (property class 5), stainless steel or aluminium (JW Winco); stainless 1.4305 or seawater-resistant 1.4404 (mbo Osswald); plastic igubal clevis joints in igumid G, a long-fibre-reinforced polymer, rated -40 to +120 °C (igus). Pins in steel or stainless steel. Action-camera mounts are moulded plastic; printed ones are made in PLA, PETG, glass-filled ABS (Printables 1239290) or TPU for crash absorption (UAVMODEL). Joins metal, wood and printed parts; in printed parts use a metal bolt as the pin.
- **Heat, cold, water and wear:** Metal clevises are fine outdoors if zinc-plated or stainless (stainless 1.4404 is seawater-resistant; mbo Osswald). igubal plastic clevis joints are rated -40 to +120 °C and resist corrosion, chemicals, dirt and UV (igus). Printed PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen), so a PLA mount can sag in a hot car. Plastic prongs clamped by a thumbscrew may slowly relax, so the clamp loosens over time ⚑ [uncertain]. Vibration can loosen thumbscrews and nuts, and pin retainers should be checked regularly, especially on gates (SpringFix).

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): forks, tongues and action-camera prong mounts, usually with a metal bolt as the pin
  - off-the-shelf part: clevis fork heads (DIN 71752 / ISO 8140), clevis pins (ISO 2341), clevis joints with spring-clip or circlip pins, plastic clevis joints, action-camera mounts and thumbscrews
  - CNC: machined metal forks, lugs and brackets ⚑ [uncertain]
  - sheet metal: bent U-shaped brackets used as forks ⚑ [uncertain]
  - woodwork: wooden forks and tongues pinned with a dowel or bolt ⚑ [uncertain]
- **Printing it in one piece (print in place):** partly: usually the fork and tongue are printed separately and joined with a bolt. Parametric prong mounts can print a pocket for a nut that is dropped in during a pause (Printables 1239290 pauses at layer 98 for an M5 nut). BOSL2's knuckle_hinge() can generate multi-knuckle fork-and-tongue hinges that print in place, with interlocking cones instead of a pin (BOSL2 hinges.scad).
- **Tools:** None for spring-clip pins, R-clips, quick-release pins and thumbscrews; pliers for split pins, circlip pliers for circlips; a spanner or hex key when the pin is a bolt with a nut. A thumbscrew wrench is sometimes used to give an action-camera mount an extra quarter turn (techsparewarehouse).
- **Difficulty:** easy: a printed or cut fork and tongue with a bolt as the pin is one of the simplest joints to make; moderate for a prong mount that must fit commercial action-camera accessories, because prong thickness and hole size must match (the j-h-a go-pro-mounts build notes involve sanding to fit)

### 3D printing tips

1) Use a metal pin: a bolt, shoulder screw or clevis pin through printed ears is far stronger and wears better than a printed pin. GoPro-style mounts use an M5 x 0.8 thumbscrew (Storyteller Tech); printed adapters also use M4 bolts with a [captive nut](../glossary.md#captive-nut) (Printables 406853). 2) Holes: leave at least 0.3 mm clearance for parts that move (Prusa). For prong mounts the hole is a clearance hole, e.g. 5.3 mm for M5 in the j-h-a OpenSCAD prongs or 5.1 mm in a FreeCAD parametric knob (Printables 897509). When a screw is the pin, BOSL2 makes a clearance hole through most knuckles and a smaller self-tapping hole in the last one (BOSL2 hinges.scad). 3) Nut traps: model the hex pocket with about 0.2 mm extra overall (0.1 mm each side) as a starting point and test; keep at least one fastener diameter of wall around threads (Hubs). Or pause the print and drop the nut in (Printables 1239290). 4) Orientation: make the layers run along the ears rather than across them; a drone camera mount printed so a crash pulls the layers apart can split on the first impact (UAVMODEL), and 4 to 6 walls survive better than 2 (UAVMODEL) ⚑ [uncertain]. Designers differ: one parametric GoPro mount is printed lying on its side with tree supports, 4 wall loops and 5 top and bottom layers (Printables 1239290). 5) Fit for commercial accessories: one maker's measured GoPro-style prongs are 3 mm thick with a slightly thicker 3.6 mm middle prong, a 14.9 mm round end and 12 mm plate width (j-h-a mounting_prongs.scad); fit is tuned by sanding, and the outer prongs should spring slightly and grip when tightened (j-h-a README). 6) Material: PETG or ASA for mounts used outdoors or in cars; PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen); TPU 95A absorbs crashes on drones (UAVMODEL). 7) Proportions: textbook knuckle-joint ratios (pin diameter equal to the rod diameter d, eye 1.25d thick, each fork ear 0.75d, eye outside diameter 2d) are written for steel (NPTEL); for plastic, start there and make the ears and eye thicker ⚑ [uncertain]. 8) Printed thumbscrews and nuts are for light loads only (Printables 139308 and 432185); for strength, glue a metal bolt into a printed knob (j-h-a long thumbscrew: a 50 mm M5 bolt super-glued in).

### Buying one (off-the-shelf parts)

Search for: 'clevis pin' (ISO 2341 type A without a hole and type B with a split-pin hole; DIN 1444), 'split pin' or 'cotter pin', 'R-clip' or 'hitch pin clip', 'retaining ring' (DIN 471) or 'locking washer' (DIN 6799), 'clevis joint with folding spring bolt' (mbo Osswald), 'clevis fork head', 'rod clevis' or 'clevis rod end' (DIN 71752 / ISO 8140, M4 to M20, right- or left-hand thread; JW Winco), 'plastic clevis joint' (igus igubal (brand), DIN 71752), 'quick-release pin' or 'ball-lock pin', 'shoulder bolt', 'shackle' (rigging). Action cameras: 'GoPro mount' (brand name used generically), '2-prong' or '3-prong mount', 'mounting buckle', 'M5 thumb screw', 'acorn nut' or 'cap nut', '1/4-20 mounting finger adapter' (to fit tripod threads; GoPro).

## Rules of thumb

- Textbook knuckle-joint proportions for a rod of diameter d: pin diameter d, eye (tongue) thickness 1.25d, eye outside diameter 2d, each fork ear 0.75d thick, pin collar 1.5d in diameter and 0.5d thick, split pin about 0.25d (NPTEL, IIT Kharagpur, Machine Design, Module 4 Lesson 2).
- Check the pin in double shear: load = 2 x (pi/4) x d^2 x allowable shear stress; also check the eye and the fork ears for crushing, tension across the hole and shear-out, and the pin for bending if it is loose in the fork (NPTEL Module 4 Lesson 2).
- A pin held on both sides by a fork (clevis) is sheared on two surfaces, a one-sided (cantilever) pin on only one (Wikimedia Commons diagram 'Surfaces contact articulation porteafaux chape.svg').
- Moving printed parts: start with at least 0.3 mm clearance (Prusa Knowledge Base).
- Nut traps: start with a 0.2 mm total offset round the nut; walls round any thread at least one fastener diameter thick (Hubs).
- GoPro-style mounts use an M5 x 0.8 thumbscrew with about 18.5 to 19 mm of thread; a screw that is too long won't clamp the fingers and the mount can wobble or break (Storyteller Tech; GoPro doesn't publish the size).
- Tighten action-camera thumbscrews by hand; for high vibration add a quarter turn with a thumbscrew wrench, without over-tightening the plastic (techsparewarehouse).
- Sleeve small RC clevises with silicone tubing or heat-shrink so they can't spring open (flyrc; Model Aviation).

## Common failures

The pin wears or the holes go oval, giving slop (fit hardened pins, bushings or a plastic plain bearing) ⚑ [uncertain]; the pin bends because it is loose in a wide fork (NPTEL); the ears or eye tear out when the hole is too close to the edge (NPTEL's shear-out check); the retainer falls off and the pin works loose (SpringFix). On action-camera mounts: a wrong-length or poorly made thumbscrew won't clamp, so the camera wobbles or the mount breaks (Storyteller Tech); over-tightening strips the nut or cracks the plastic (techsparewarehouse); printed prongs split along their [layer lines](../glossary.md#layer-lines) in a crash (UAVMODEL) ⚑ [uncertain].

## Safety

Pinch point between fork and tongue as the joint closes. A missing or loose retainer lets the pin walk out and the joint come apart, which matters on gates, trailers and anything overhead; make sure spring clips are fully engaged and inspect them (SpringFix). Don't rely on a plastic prong mount alone for a camera on a vehicle or drone; add a tether or strap (UAVMODEL) ⚑ [uncertain]. The cut ends of split pins are sharp.

## Related

- Plain pivot (pin in hole, shoulder bolt): one pin through overlapping parts; simpler, but the pin is loaded in single shear
- Rod end and ball link (rose joint): adds a swivelling ball so the joint can also tilt; often screwed onto the same threaded rod as a clevis
- Ball-and-socket joint: moves in every direction, often with a clamp to lock it
- Quick-release pin (ball-lock pin): a pin that locks into a clevis with spring-loaded balls and releases at the press of a button
- Snap pin (split-leg push-in pin): a printed pin that clips through a hinge or clevis without tools
- Hirth joint: toothed faces clamped by a bolt; holds set angles far more firmly than a friction prong mount
- Detent hinge: clicks and holds at set angles instead of any angle
- Friction hinge: holds any angle by built-in friction, with no thumbscrew to tighten
- Knuckle hinge (butt hinge): the same fork-and-tongue idea repeated along a long edge
- Shackle and quick link: the rigging cousin of a clevis, a U-shaped link closed by a screw pin or bolt that joins chain, rope and straps rather than acting as a pivot
- Tripod and stand screw mount: the 1/4-20 camera thread that a mounting-finger adapter turns a prong mount into

## Make it yourself

- [mounting_prongs.scad (j-h-a/go-pro-mounts, OpenSCAD)](https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/lib/mounting_prongs.scad): OpenSCAD modules for GoPro-style prongs (3 mm prongs, 3.6 mm middle prong, 5.3 mm hole, pocket for an M5 nut); the repository also has tri-prong, bi-prong and flat connectors and a thumbscrew *(licence: 'Do What You Want Public License' v1)*
- [BOSL2 hinges.scad: knuckle_hinge() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad): Parametric knuckle hinges (the fork-and-tongue idea with several knuckles) with pin holes, screw pins that self-tap in the last knuckle, or print-in-place interlocking cones *(licence: BSD 2-Clause)*
- [Go Pro / Camera mount adapter - 2 and 3 prong (jtav1, Printables; details read through the Printables API)](https://www.printables.com/model/406853-go-pro-camera-mount-adapter-2-and-3-prong): Two- and three-prong attachment points to add to your own designs; M4 bolt with captive nut, swivels about 180 degrees; tested in PLA and PETG *(licence: CC0 (Printables: Creative Commons Public Domain))*
- [GoPro Mount parametric (Thomas Förster, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1239290-gopro-mount-parametric): A FreeCAD-parametric GoPro-style mount with a print-in nut (pause at layer 98 to insert an M5 nut) *(licence: CC BY-NC-SA)*
- [GoPro action camera mount M5 bolt knob (FreeCAD parametric) (Tol, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/897509-gopro-action-camera-mount-m5-bolt-knob-freecad-par): A parametric printed knob for an M5 bolt to make your own thumbscrew; hole 5.1 mm, bolt-head pocket 8.6 mm across flats *(licence: CC BY-SA)*
- [Fully Printed GoPro Thumb Screw (rb, Printables; page returned 403, details read through the Printables API)](https://www.printables.com/model/139308-fully-printed-gopro-thumb-screw): A fully printed thumbscrew and nut for light-duty use when no metal parts are to hand *(licence: CC BY-NC-SA)*

## Pictures, videos and models

- [File:Clevis.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Clevis.svg): Drawing of a clevis pin through a U-shaped clevis (shackle), held in by a split pin *(licence: CC BY-SA 3.0 (Sakurambo))*
- [File:Principe articulation chape.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Principe_articulation_chape.svg): Principle drawing of a clevis coupling: fork, tongue and pin *(licence: CC BY-SA 3.0 (Cdang))*
- [File:Surfaces contact articulation porteafaux chape.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Surfaces_contact_articulation_porteafaux_chape.svg): A cantilever pin joint next to a clevis, with the contact surfaces (blue arrows) and shear surfaces (red lines): one shear plane versus two *(licence: CC BY-SA 3.0 (Cdang))*
- [Clevises and clevis joints - variants, assembly instructions and applications (YouTube, mbo Osswald EN; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=y5l58xDnPUk): Manufacturer's video of clevis variants, how they are assembled and where they are used *(licence: link only (standard YouTube licence))*
- [GoPro Mounts README (Jay Abbott, j-h-a/go-pro-mounts on GitHub)](https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/README.md): Photos and build steps for printed three-prong and two-prong action-camera connectors and a long thumbscrew (images hosted on j-h-a.github.io) *(licence: 'Do What You Want Public License' v1 (permissive))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 14 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Clevis_fastener>
- <https://commons.wikimedia.org/wiki/File:Clevis.svg>
- <https://commons.wikimedia.org/wiki/File:Principe_articulation_chape.svg>
- <https://commons.wikimedia.org/wiki/File:Surfaces_contact_articulation_porteafaux_chape.svg>
- <https://archive.nptel.ac.in/content/storage2/courses/112105125/pdf/Module-4_lesson-2.pdf>
- <https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/README.md>
- <https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/lib/mounting_prongs.scad>
- <https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/connector_triprong.scad>
- <https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/LICENSE>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE>
- <https://storytellertech.com/gopro-screw-size/>
- <https://techsparewarehouse.com/blogs/news/gopro-mount-screws-the-ultimate-guide>
- <https://gopro.com/en/us/shop/mounts-accessories/mounting-finger-adapter/ABTFR-001.html>
- <https://www.jwwinco.com/en-us/products/3.6-Moving-transferring-connecting-with-shafts-and-joints/Fork-joints/DIN-71752-Metric-Size-Steel-Clevis-Fork-Heads>
- <https://springfixuk.com/blogs/news/clevis-fork-end-fittings-explained-din-71752-sizes-uses-installation-guide>
- <https://www.mbo-osswald.de/en/shop/clevises-clevis-joints/>
- <https://www.igus.com/spherical-bearings/clevis-rod-ends>
- <https://www.igus.in/info/igubal-clevis-joints>
- <https://www.modelaviation.com/control-linkage-roundup>
- <https://www.flyrc.com/beginners-guide-to-pushrods-and-connectors-2/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/>
- <https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament>
- <https://blog.uavmodel.com/3d-printed-drone-parts-tpu-mounts-petg-frames-and-design-for-fpv-accessories-2026/>
- <https://www.youtube.com/watch?v=y5l58xDnPUk>
- <https://api.printables.com/graphql/>
