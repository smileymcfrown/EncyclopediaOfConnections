---
title: Compliant detent
description: A notched wheel or track plus a springy arm made as part of the plastic (or a thin steel jumper spring) that
  drops into each notch, giving a turning or sliding part positive click positions without separate springs, balls or pins.
num: 32
term: 'Compliant detent (flexure detent); in clocks, watches and switches: star wheel and jumper spring (detent wheel and
  detent spring)'
plain_name: A springy plastic arm (or bump) that rubs over a ring or row of notches and drops into each one with a click,
  so a knob, dial, slider or hinge stops at set positions, with no metal spring or ball
aliases:
- flexure click arm / click arm
- detent arm / detent spring / detent beam
- printed detent, clicky knob, clicker knob (maker names)
- leaf-spring detent (when the springy arm is a strip of spring steel)
- 'jumper or jumper spring (watch and clock term: a springy lever whose tip rests between the points of a star wheel)'
- star wheel and jumper (a wheel with pointed teeth held in each position by a jumper)
- sautoir (French watchmaking term for the jumper; literally 'neck chain', as used by Horopedia)
- detent wheel (the notched wheel of a rotary switch or scroll wheel)
- haptic detent (term used in interface-design research such as FlexHaptics and Shape-Haptics)
family: indexing & detents
other_families: [compliant mechanisms & flexures, print-in-place & 3D-printing joints, one-way & ratchet, snap & clip fits]
finder:
  job: [click into set positions, let it move, stop it moving back]
  motion: multiple
  special_behaviour: [indexing, self-aligning or self-centring, one-way, torque-limiting]
  holding_principle: [spring force, shape]
  reuse_cycles: many times
  seal: none
  access_needed: not applicable
  print_in_place: 'yes'
  maker_difficulty: easy
  processes: [off-the-shelf part, 3D print (FDM), laser cut, 3D print (resin), sheet metal]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: clicks or pops out and resets
  clicks: clicks
  tools: [none, hand tools]
  load_max: light
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: permanent
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [reuse_cycles, load, processes, making_tips_3d_printing, off_the_shelf_parts, everyday_examples, environment_limits,
  safety_notes, common_failures, links]
diagram_idea: 'A notched wheel with a springy plastic arm growing from the housing: frame 1 the arm''s rounded tip rests straight
  in a notch; frame 2 the wheel turns, a tooth bends the arm outwards (arrow showing spring force P and notch angle α); frame
  3 the tip drops into the next notch with a ''click'', with a small inset of a watch star wheel and jumper doing the same
  thing.'
links:
- url: https://www.youtube.com/watch?v=pRVqH-dwAzc
  title: Positioning device 7 (YouTube, Nguyen Duc Thang, thang010146)
  shows: CAD animation of a leaf-spring detent holding a part in set positions; Thang notes 'A leaf spring provides limited
    holding power'
  license: link only (standard YouTube licence)
- url: https://www.youtube.com/watch?v=YydcGLWbuZg
  title: Spring toggle mechanism 6a (YouTube, Nguyen Duc Thang, thang010146)
  shows: CAD animation of a spring indexing device that snaps a lever into five positions and holds it there
  license: link only (standard YouTube licence)
- url: https://arxiv.org/abs/2202.10655
  title: 'Shape-Haptics: Planar & Passive Force Feedback Mechanisms for Physical Interfaces (Zheng et al., CHI 2022, arXiv)'
  shows: Diagrams and photos of laser-cut POM springs riding on shaped sliders and detented knobs, with force-displacement
    graphs, and illustrations of how existing knobs and buttons click
  license: link only (paper licence not checked) [uncertain]
- url: https://www.youtube.com/watch?v=bWCiSvidCUY
  title: 'FlexHaptics: A Design Method for Passive Haptic Inputs Using Planar Compliant Structures (YouTube, ACM SIGCHI)'
  shows: Video of 3D-printed compliant modules giving resistance, detent or bounce feel along linear, rotary and ortho-planar
    paths
  license: link only (standard YouTube licence)
- url: https://www.youtube.com/watch?v=QnqAtSeqRPo
  title: 3d printed 3 position detent mechanism (YouTube, Jesse Schoch)
  shows: A 3D-printed detent clicking between three positions
  license: link only (standard YouTube licence)
make_it_yourself:
- url: https://www.printables.com/model/274563-print-in-place-rotary-fidget-detent-knob-with-dete
  title: Print-in-place Rotary Fidget Detent Knob with detent strength options (Y Ibrahim, Printables)
  what_it_is: A clicky knob that prints already assembled, no supports, in three detent strengths; also works as a basic one-way
    ratchet. Details read through the Printables public API because the web page blocks automated access.
  license: CC BY-SA
- url: https://www.printables.com/model/902861-clicker-knob
  title: Clicker Knob (Jack, Printables)
  what_it_is: Snap-together knobs with 12 or 24 clicks per turn, marked dials and a stackable counter version with two spring
    strengths; includes OpenSCAD scripts to change size and markings. Read through the Printables public API.
  license: 'CC0 / public domain (Printables: Creative Commons Public Domain)'
- url: https://www.printables.com/model/280920-clicky-knob
  title: Clicky Knob (RoboBear Designs, Printables)
  what_it_is: A toy-stove knob with a detent at each mark so it clicks when turned. Read through the Printables public API.
  license: 'CC0 / public domain (Printables: Creative Commons Public Domain)'
sources:
- https://en.wikipedia.org/wiki/Detent
- https://en.wikipedia.org/wiki/Rotary_switch
- https://www.engineersedge.com/mechanics_machines/plunger_detent_mechanism_14924.htm
- https://arxiv.org/abs/2202.10655
- https://arxiv.org/pdf/2202.10655
- https://api.semanticscholar.org/graph/v1/paper/DOI:10.1145/3491102.3502113?fields=title,abstract,authors,year,venue,openAccessPdf,externalIds
- https://www.youtube.com/watch?v=bWCiSvidCUY
- https://www.youtube.com/watch?v=QnqAtSeqRPo
- https://www.youtube.com/watch?v=pRVqH-dwAzc
- https://www.youtube.com/watch?v=YydcGLWbuZg
- https://cs448m.github.io/lectures/machines/doc/3.pdf
- https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
- https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://www.cnckitchen.com/blog/stop-printing-flat-the-45-secret-for-stronger-parts
- https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
- http://thrinter.com/creep-abs-pla-petg-alloy-910/
- https://www.awci.com/watchmaking-excellen/minute-counter-jumper-springs/
- https://horopedia.org/star-wheel/
- https://horopedia.org/jumping-hour/
- https://beyondthebezel.substack.com/p/az-horology-terminology-list
- https://patents.google.com/patent/US3688490A/en
- https://api.printables.com/graphql/
- https://www.printables.com/model/274563-print-in-place-rotary-fidget-detent-knob-with-dete
- https://www.printables.com/model/902861-clicker-knob
- https://www.printables.com/model/280920-clicky-knob
- https://www.printables.com/model/308024-super-clicky-fidget-knob
research: research/connection-types/results/Compliant_detent_flexure_click_arm.json
image: null
glossary: [detent, ratchet, pawl, torque, stiffness, flexure, cantilever, deflection, clearance, form-fit--force-fit--material-bond,
  taper, chamfer--fillet, creep, fatigue, brittle--ductile, layer-lines, print-in-place, peel-vs-shear]
---

A notched wheel or track plus a springy arm made as part of the plastic (or a thin steel jumper spring) that drops into each notch, giving a turning or sliding part positive click positions without separate springs, balls or pins.

**In plain words:** A springy plastic arm (or bump) that rubs over a ring or row of notches and drops into each one with a click, so a knob, dial, slider or hinge stops at set positions, with no metal spring or ball. **Proper term:** Compliant [detent](../glossary.md#detent) ([flexure](../glossary.md#flexure) detent); in clocks, watches and switches: star wheel and jumper spring (detent wheel and detent spring).

**Also called:** flexure click arm / click arm; detent arm / detent spring / detent beam; printed detent, clicky knob, clicker knob (maker names); leaf-spring detent (when the springy arm is a strip of spring steel); jumper or jumper spring (watch and clock term: a springy lever whose tip rests between the points of a star wheel); star wheel and jumper (a wheel with pointed teeth held in each position by a jumper); sautoir (French watchmaking term for the jumper; literally 'neck chain', as used by Horopedia); detent wheel (the notched wheel of a rotary switch or scroll wheel); haptic detent (term used in interface-design research such as FlexHaptics and Shape-Haptics).

## How it works

The springy arm presses its tip against the notched wheel or track. As you turn or slide the part, a tooth pushes the tip outwards and bends the arm; once the tip passes the tooth's crest it springs back into the next notch, which you feel and hear as a click, and it then holds the part there until you push hard enough to bend the arm again (Wikipedia 'Detent'; Shape-Haptics, Zheng et al. 2022). The sideways force needed to leave a notch grows with the arm's spring force and the steepness of the notch sides (Engineers Edge: R = P tan α). In clocks and watches the same pair is called a star wheel and jumper: the jumper sits in the V between two star points and keeps a date, day or counter wheel in exact position between jumps, then lets it snap forward one tooth at a time (Horopedia; AWCI). If the notches are saw-shaped (steep on one side, gentle on the other), the same arm lets the part turn one way only and becomes a [ratchet](../glossary.md#ratchet).

## Parts

Single piece ([print-in-place](../glossary.md#print-in-place) knobs) or a few parts: a notched wheel, ring or strip (the star or detent wheel), and a springy arm, beam or ring with a rounded or V-shaped tip, moulded or printed as part of the other component. Watch and clock versions: star wheel, steel jumper spring, and the post or screw it pivots on, often an eccentric post for adjustment (AWCI); a single stamped jumper with two springy arms can hold both the day and date wheels (Suwa Seikosha patent US3688490A, 1972). Snap-together printed knobs: knob, base and printed spring (Printables 'Clicker Knob').

## Everyday examples

- A computer mouse scroll wheel that clicks as it turns (Wikipedia 'Detent') ⚑ [uncertain] (the spring in a mouse may be metal or plastic)
- Selector knobs and rotary switches that click from one position to the next, e.g. a toy stove knob (Printables 'Clicky Knob'; Wikipedia 'Rotary switch')
- The date window and chronograph minute counter in a mechanical watch, held between jumps by a jumper spring (AWCI; Horopedia)
- A stereo balance control that clicks into its centre position (Wikipedia 'Detent')

## When to use it

Use a compliant detent when you want a knob, dial, slider, lid or small hinge to feel clicky and stop at set positions but don't need it to hold a real load: menu or mode selectors, counters, adjusters that shouldn't drift with vibration, fidget toys and printed enclosures. It is ideal for 3D printing and laser cutting because the spring is part of the plastic, so there are no balls, pins or metal springs to buy, it can often be printed in place, and the click strength is set by the geometry. The metal star-wheel-and-jumper version suits precise small mechanisms (clocks, counters, switches) where a wheel must sit exactly between steps.

## When not to use it

Avoid it when the part carries a load or must stay locked against a push (use an indexing plunger or a pin), when it must stay at one position under constant load for months (a plastic arm kept bent [creeps](../glossary.md#creep); use a metal spring or a ball detent), when you need hundreds of thousands of crisp clicks (use a ball detent or a steel detent spring with hardened parts), in hot places with PLA, or when you need any angle rather than set steps (use a friction hinge or clamp). For one-way motion use a proper ratchet; for exact angles under load use a Hirth joint.

## Details

- **What it does (jobs):**
  - click into set positions: the main job (knobs, dials, sliders, selector switches, counters)
  - let it move (turn, slide or bend): the part still turns or slides freely between clicks
  - stop it moving back (one-way): only when the notches are saw-toothed; e.g. Y Ibrahim's print-in-place detent knob 'also acts as a handy basic one-way ratchet' (Printables)
- **Movement:** multiple: rotate (knobs, dials, star wheels, hinges; any number of turns or a limited arc) or slide (sliders, drawers); the arm itself flexes a little, about the depth of a notch, at each click
- **Directions it can move (degrees of freedom):** 1: turning about the knob's axis or sliding along the track; the arm's small bending is an internal motion that lets the teeth pass
- **Special behaviour:**
  - indexing (clicks into set positions): the defining behaviour; click spacing = 360° divided by the number of notches (e.g. a rotary switch clicking every 30° has 12 positions; Wikipedia 'Rotary switch')
  - self-aligning or self-centring: a V-shaped notch pulls the part into the middle of each position, e.g. a stereo balance control that clicks into its centre position (Wikipedia 'Detent') and a watch jumper that lines the hand up with the dial marks (AWCI)
  - one-way (moves freely one way, locks the other): only with saw-toothed notches (then it is a compliant ratchet)
  - torque-limiting (slips or clicks at a set force/[torque](../glossary.md#torque)): in a rough sense, because pushing hard always pushes the arm out of the notch rather than breaking it; the release force is set by the arm and notch shape but is not precise
- **How it holds:**
  - spring force (a spring or springy part presses it in place): the bent arm presses the tip into the notch
  - shape (the parts interlock; [form-fit](../glossary.md#form-fit--force-fit--material-bond)): only partly, because the notch sides slope, so enough force always pushes the tip out
- **Input and output:** not applicable (it holds positions rather than passing motion on). In watch and clock star-wheel-and-jumper pairs the drive pushes the star forward, and the jumper finishes each step by snapping the star into the next exact position (Horopedia).
- **Power:** passive (no power needed)
- **Load:** light: meant to hold against fingertip forces, knocks and vibration, not working loads. Shape-Haptics laser-cut POM springs push with about 0.75-3 N at up to 4 mm of bending, and the authors describe their mechanisms as covering light force feedback of 0-5 N for hands and fingers (Zheng et al. 2022). Strong in the arm's own plane, weak if the part is pushed sideways out of that plane ⚑ [uncertain].
- **Play and precision:** small: a V-notch pulls the part to the same spot each time, but a soft plastic arm allows a little wobble within each position and a weak arm can let the part sit slightly off-centre or skip under shock; a watch jumper that is too weak lets the hand move on a shock or advance by more than one tooth (AWCI). Rough laser-cut or printed edges give uneven friction and click feel (Shape-Haptics).
- **Taking it apart:** permanent when the arm is printed or moulded as part of the knob or housing (print-in-place knobs); removable in snap-together or screwed versions (e.g. Printables 'Clicker Knob' is pressed together, and a watch jumper is held by a screw and post)
- **How often it can be reused:** many times: snap-together and screwed versions can be taken apart and refitted; how many clicks it survives depends on how far the arm bends; plastic springs work well in intermittent action but must not be stressed beyond the material's [fatigue](../glossary.md#fatigue) limit (DuPont design guide, p. 36) ⚑ [uncertain] (no cycle figures found for printed detents)
- **Sealing:** none
- **Adjustable:** Usually no: click strength is fixed by the arm's thickness, length and the notch depth. Ways to change it: print a stiffer or softer arm (Y Ibrahim's knob comes in three detent strengths; Printables), fit a different spring (the 'Clicker Knob' stacked counter uses two spring strengths so one ring clicks while the next holds), or move the spring's post (watch jumpers are adjusted on an eccentric post; AWCI). Loosening the screws of a laser-cut side spring added play and a sharper click (Shape-Haptics).
- **Access needed:** not applicable: it is built into the part
- **Materials:** Best plastics for springy arms are tough and resilient: acetal (POM, Delrin (brand)) and polyester elastomer (Hytrel (brand)) are the best unreinforced plastics for springs (DuPont, p. 36); Shape-Haptics used 3 mm POM sheet (Sustarin (brand)) because laser-cut acrylic loses strength and plywood's strength depends on grain direction. For FDM printing, tough, ductile ABS, PETG and nylon suit flexing features better than [brittle](../glossary.md#brittle--ductile) PLA (Protolabs/Hubs snap-fit guide), although PLA works for light fidget knobs. Watch jumpers and rotary-switch detent springs are spring steel (Wikipedia 'Detent': 'a piece of spring steel that snaps into position').
- **Heat, cold, water and wear:** PLA arms soften from about 60 °C and PETG from about 80 °C (CNC Kitchen), so a PLA detent left in a hot car may lose its click. Plastic arms held bent creep and relax, weakening the click over time (DuPont; thrinter PLA creep test). Acetal (POM) has good resistance to moisture, solvents and oils (DuPont, p. 36). Dust and old grease in the notches change the feel ⚑ [uncertain]. Shock and vibration can make a weak detent skip a notch (AWCI, for watch jumpers).

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): print-in-place or snap-together knobs, dials and sliders with printed arms
  - 3D print (resin): possible for small precise detents, but standard resins are brittle for flexing arms (Protolabs/Hubs snap-fit guide notes standard SLA resins are less suitable)
  - laser cut: flat POM (acetal) springs and notched sliders or wheels (Shape-Haptics)
  - injection moulding: how most plastic knobs and switches with moulded-in detent arms are made ⚑ [uncertain]
  - sheet metal: stamped spring-steel jumper and detent springs (watches, clocks, rotary switches)
  - off-the-shelf part: rotary switches and detented knobs or encoders that already contain a star-wheel detent
- **Printing it in one piece (print in place):** yes: e.g. Y Ibrahim's 'Print-in-place Rotary Fidget Detent Knob' prints assembled with no supports and in three detent strengths (Printables). Other designs print as separate knob, base and spring and are pressed together (Printables 'Clicker Knob', 'Super Clicky Fidget Knob').
- **Tools:** none (print-in-place or press-fit); a screwdriver for screwed-on arms or watch jumpers
- **Difficulty:** easy to moderate: a clicking knob prints in one piece, but getting the right click strength and making the arm last usually takes a few test prints

### 3D printing tips

1) Lay the arm flat on the bed so it bends within the layers, not across them: Protolabs/Hubs advise avoiding snap-fit [cantilevers](../glossary.md#cantilever) built vertically in the Z direction, because layers [peel](../glossary.md#peel-vs-shear) apart; PLA printed standing up reached only about half the strength of flat-printed PLA in CNC Kitchen's test (31 vs 63 MPa). 2) Round the arm's root with a [fillet](../glossary.md#chamfer--fillet) of at least half the arm thickness, [taper](../glossary.md#taper) the arm towards its tip and, where you can, make it at least 5 mm wide (Protolabs/Hubs snap-fit guide); avoid sharp inside corners (DuPont, p. 36). 3) Design the arm so it is relaxed (unbent) when the tip sits in a notch and only bends while passing a tooth: plastic springs work for intermittent action but creep and relax if kept bent (DuPont, pp. 36 and 47, which also notes plastic ratchets work 'providing the springs are not held in the loaded position for a long period of time'); PLA creeps the most of the common filaments (thrinter test). 4) Shape the tip with equal slopes on both sides (Shape-Haptics used 45° slopes) so it clicks the same in both directions; make one side steep and the other shallow for a one-way ratchet. 5) Tune the click with notch depth and arm [stiffness](../glossary.md#stiffness) rather than guesswork: the sideways force to escape rises with the arm's push and the steepness of the notch sides (Engineers Edge R = P tan α); print two or three strengths side by side, as the fidget-knob designer did. 6) Use PETG, ABS or nylon for arms that click often; PLA is brittle (Protolabs/Hubs) and softens from about 60 °C (CNC Kitchen). 7) For print-in-place parts, leave a [clearance](../glossary.md#clearance) gap between the moving parts of at least 0.3 mm (Prusa) to 0.5 mm (Protolabs/Hubs FDM clearance), and check the first layers don't fuse the arm to the wheel ⚑ [uncertain]. 8) Stair-stepped [layer lines](../glossary.md#layer-lines) on curved notches make the click rough; a little grease helps (the 'Clicker Knob' designer suggests a tiny amount on the notches and spring tips), and pressing snap-together parts in warm water makes assembly easier (Printables 'Clicker Knob'). 9) Keep plenty of teeth for fine steps but not so shallow that the tip skips: 12 or 24 clicks per turn on a 20 mm knob work in the 'Clicker Knob' design.

### Buying one (off-the-shelf parts)

Search for: 'rotary switch' (star-wheel detent built in, positions every 30°, 45°, 60° or 90°; Wikipedia), 'detented knob', 'rotary encoder with detents' ⚑ [uncertain], 'detent spring', 'leaf spring' or 'flat spring', 'spring steel strip', 'POM sheet' or 'acetal sheet' (Delrin (brand), Sustarin (brand)) for laser-cut springs, 'jumper spring' (watch and clock spare parts), 'star wheel'.

## Rules of thumb

- Click spacing = 360° / number of notches; rotary switches typically click every 30°, 45°, 60° or 90° (Wikipedia 'Rotary switch').
- Holding (escape) force rises with spring force and notch angle: R = P tan α, and more with friction (Engineers Edge 'Plunger Detent Mechanism').
- Plastic springs are fine for intermittent action; springs under constant load or [deflection](../glossary.md#deflection) should be spring steel, because plastics creep and relax (DuPont 'General Design Principles for Engineering Polymers', p. 36). Plastic ratchet springs work if not held loaded for long periods (same guide, p. 47).
- Give the arm a root fillet of at least 0.5 x its base thickness, a width of at least 5 mm where possible, a taper towards the tip, and don't build it vertically in Z (Protolabs/Hubs snap-fit guide for 3D printing).
- Laser-cut POM springs: 1 mm minimum wall; springs with 1.0-2.5 mm walls, up to 4 mm deflection and about 0.75-3 N contact force; tip with 45° slopes on both sides (Zheng et al., Shape-Haptics, CHI 2022).
- A watch jumper must be strong enough to stop shocks moving the wheel but weak enough not to rob the drive of energy; it sits on two teeth and is set with an eccentric post (AWCI 'Minute Counter Jumper Springs').
- Moving printed parts need at least about 0.3 mm clearance (Prusa knowledge base).

## Common failures

The arm cracks at its root, usually from a sharp inside corner, printing it standing up (layers peel), or too much bending for a brittle material like PLA (Protolabs/Hubs; DuPont). The arm takes a permanent set (creeps) if it rests bent, so the click gets weaker (DuPont; thrinter). The notches and tip wear, turning a crisp click into a mushy one ⚑ [uncertain]. The arm is too stiff, making the knob hard to turn or wearing it quickly, or too weak, so it skips under vibration or overshoots by a notch (AWCI, for watch jumpers). Rough printed or laser-cut edges give an uneven click (Shape-Haptics). Print-in-place parts fused together by too small a gap ⚑ [uncertain]. Fixes: fillet and taper the arm, print it flat, let it rest straight in each notch, choose PETG or nylon, add a dab of grease, and test a few stiffnesses.

## Safety

Generally none known for plastic detents. Small printed fidget knobs and their parts may be a choking hazard for young children ⚑ [uncertain]. Laser-cutting POM (acetal) gives off irritating fumes (formaldehyde), so use proper extraction ⚑ [uncertain]. Metal jumper springs in watches can fly off when removed.

## Related

- Ball detent (spring plunger): a metal spring pushes a ball into dimples; stronger, longer-lasting and more consistent, but needs bought parts
- Compliant ratchet (flexure [pawl](../glossary.md#pawl)): the same springy arm with saw-toothed notches, so it turns one way only
- Cantilever snap fit: the same bending beam with a hook, but made to click together once and stay locked
- Torque-limiting gear with flexing spring arms: springy arms in notches designed to slip at a set torque rather than to give click positions
- Printed leaf spring: a flat printed spring that can press a separate detent tip or ball
- Detent hinge: a hinge with a built-in detent that holds a lid or leg at set angles
- Indexing plunger: a pulled pin in holes; locks firmly rather than clicking
- Hirth joint: toothed faces clamped together for firm, play-free angle steps
- Geneva drive: steps a wheel round and locks it positively between steps, rather than holding it with a spring

## Make it yourself

- [Print-in-place Rotary Fidget Detent Knob with detent strength options (Y Ibrahim, Printables)](https://www.printables.com/model/274563-print-in-place-rotary-fidget-detent-knob-with-dete): A clicky knob that prints already assembled, no supports, in three detent strengths; also works as a basic one-way ratchet. Details read through the Printables public API because the web page blocks automated access. *(licence: CC BY-SA)*
- [Clicker Knob (Jack, Printables)](https://www.printables.com/model/902861-clicker-knob): Snap-together knobs with 12 or 24 clicks per turn, marked dials and a stackable counter version with two spring strengths; includes OpenSCAD scripts to change size and markings. Read through the Printables public API. *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
- [Clicky Knob (RoboBear Designs, Printables)](https://www.printables.com/model/280920-clicky-knob): A toy-stove knob with a detent at each mark so it clicks when turned. Read through the Printables public API. *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*

## Pictures, videos and models

- [Positioning device 7 (YouTube, Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=pRVqH-dwAzc): CAD animation of a leaf-spring detent holding a part in set positions; Thang notes 'A leaf spring provides limited holding power' *(licence: link only (standard YouTube licence))*
- [Spring toggle mechanism 6a (YouTube, Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=YydcGLWbuZg): CAD animation of a spring indexing device that snaps a lever into five positions and holds it there *(licence: link only (standard YouTube licence))*
- [Shape-Haptics: Planar & Passive Force Feedback Mechanisms for Physical Interfaces (Zheng et al., CHI 2022, arXiv)](https://arxiv.org/abs/2202.10655): Diagrams and photos of laser-cut POM springs riding on shaped sliders and detented knobs, with force-displacement graphs, and illustrations of how existing knobs and buttons click *(licence: link only (paper licence not checked) ⚑ [uncertain])*
- [FlexHaptics: A Design Method for Passive Haptic Inputs Using Planar Compliant Structures (YouTube, ACM SIGCHI)](https://www.youtube.com/watch?v=bWCiSvidCUY): Video of 3D-printed compliant modules giving resistance, detent or bounce feel along linear, rotary and ortho-planar paths *(licence: link only (standard YouTube licence))*
- [3d printed 3 position detent mechanism (YouTube, Jesse Schoch)](https://www.youtube.com/watch?v=QnqAtSeqRPo): A 3D-printed detent clicking between three positions *(licence: link only (standard YouTube licence))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 12 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Detent>
- <https://en.wikipedia.org/wiki/Rotary_switch>
- <https://www.engineersedge.com/mechanics_machines/plunger_detent_mechanism_14924.htm>
- <https://arxiv.org/abs/2202.10655>
- <https://arxiv.org/pdf/2202.10655>
- <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1145/3491102.3502113?fields=title,abstract,authors,year,venue,openAccessPdf,externalIds>
- <https://www.youtube.com/watch?v=bWCiSvidCUY>
- <https://www.youtube.com/watch?v=QnqAtSeqRPo>
- <https://www.youtube.com/watch?v=pRVqH-dwAzc>
- <https://www.youtube.com/watch?v=YydcGLWbuZg>
- <https://cs448m.github.io/lectures/machines/doc/3.pdf>
- <https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf>
- <https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://www.cnckitchen.com/blog/stop-printing-flat-the-45-secret-for-stronger-parts>
- <https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament>
- <http://thrinter.com/creep-abs-pla-petg-alloy-910/>
- <https://www.awci.com/watchmaking-excellen/minute-counter-jumper-springs/>
- <https://horopedia.org/star-wheel/>
- <https://horopedia.org/jumping-hour/>
- <https://beyondthebezel.substack.com/p/az-horology-terminology-list>
- <https://patents.google.com/patent/US3688490A/en>
- <https://api.printables.com/graphql/>
- <https://www.printables.com/model/274563-print-in-place-rotary-fidget-detent-knob-with-dete>
- <https://www.printables.com/model/902861-clicker-knob>
- <https://www.printables.com/model/280920-clicky-knob>
- <https://www.printables.com/model/308024-super-clicky-fidget-knob>
