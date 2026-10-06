---
title: Push-and-turn child-resistant cap
description: A two-layer screw cap whose loose outer shell only grips the threaded inner cap when you press down while turning,
  so a child who just twists it gets nothing but spinning and clicking, while an adult who knows the trick can open it.
num: 29
term: Push-and-turn child-resistant closure (push-down-and-turn cap)
plain_name: A bottle cap that just spins and clicks if you only twist it, and only unscrews if you press it down hard while
  you turn
aliases:
- child-resistant cap / CR closure / CRC
- 'childproof cap / child-proof lid (common but inaccurate: regulators say child-resistant, not child-proof)'
- safety cap
- push down and turn cap / push & turn closure
- push-and-twist cap
- palm-and-turn cap / Palm N Turn (historical name of the first design, 1967)
- double-shell closure / two-piece closure (outer cap or over cap, and inner cap)
- special packaging (US legal term for child-resistant, senior-friendly packaging)
family: locks, latches & catches
other_families: [one-way & ratchet, clutches & couplings, seals & pass-throughs]
finder:
  job:
  - lock, and release by hand
  - join and hold
  - seal it, or pass cables or fluid through
  motion: rotate+slide
  special_behaviour: [one-way, hand-release only]
  holding_principle: [shape, spring force]
  reuse_cycles: many times
  seal: watertight
  access_needed: end of a tube or shaft
  print_in_place: 'no'
  maker_difficulty: hard
  processes: [off-the-shelf part, 3D print (FDM), 3D print (resin)]
  connects: [any solid parts]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: clicks
  tools: [none]
  load_max: light
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: tool-free quick release
  power: passive
needs_confirming:
  connects:
    kind: best guess
    reason: joins parts, but no specific kind of part found; set to any solid parts
  motion_in:
    kind: best guess
    reason: 'no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close
      drives ..."'
  motion_out:
    kind: best guess
    reason: 'no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close
      drives ..."'
  shaft_layout:
    kind: best guess
    reason: 'no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close
      drives ..."'
confirmed: []
open_points: []
uncertain_fields: [motion, reuse_cycles, seal, processes, print_in_place, making_tips_3d_printing, environment_limits, links]
diagram_idea: 'A cut-away of a two-piece cap on a bottle neck in two frames: (1) just twisting, with the springy fingers holding
  the outer cap up so its teeth ride over the inner cap''s ramps (curved arrow, ''click click''); (2) pressing down, with
  the outer cap''s lugs dropped into the inner cap''s slots so both turn together and unscrew.'
links:
- url: https://commons.wikimedia.org/wiki/File:Aspirin1.jpg
  title: Aspirin1.jpg (Wikimedia Commons, Mosesofmason, 2005)
  shows: Photo of an aspirin bottle with a child-resistant cap marked 'push down & turn to open'
  license: CC BY-SA 3.0 or GFDL 1.2+ (reuse with credit); the brand name is a trademark
- url: https://commons.wikimedia.org/wiki/File:Palmnturn.JPG
  title: Palmnturn.JPG (Wikimedia Commons, unknown author)
  shows: Image of the original Palm N Turn child-proof cap
  license: Public domain in the United States (published 1931-1977 without a copyright notice); may still be copyrighted elsewhere
- url: https://patents.google.com/patent/US4394916A/en
  title: US4394916A Child-resistant closure assembly (Ned J. Smalley, Owens-Illinois, 1983; Google Patents)
  shows: 'Patent drawings of a two-piece cap: angled leaf springs on the outer cap drive ratchet lugs on the inner cap when
    tightening and cam past them when loosening, and drive lugs that only engage when the outer cap is pressed down'
  license: link only (US patent drawings are generally free of copyright [uncertain])
- url: https://www.paramountglobal.com/knowledge/child-resistant-closures/
  title: Guide to Child Resistant Caps & Closures (Paramount Global)
  shows: Plain explanation of push-and-turn, squeeze-and-turn and snap child-resistant closures, with images
  license: link only
- url: https://www.youtube.com/watch?v=nzEkMZeIeP8
  title: 3D Printed Dram Pill Bottles With Child Protection Mechanism (Pixel Precision, YouTube; title confirmed via YouTube
    oEmbed)
  shows: Demonstration and assembly of a printed pill bottle with a lever-type child-resistant cap (a close relative of push-and-turn)
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/1109394-dram-pill-bottle-with-protective-cap-mechanism
  title: Dram Pill Bottle With Protective Cap Mechanism by reavenk (Printables 1109394; details read via the Printables public
    API)
  what_it_is: Printable pill bottles and caps that fit real pharmacy dram vials; the cap won't unscrew until a thumb lever
    is pressed (a press-tab variant rather than a push-down cap); includes a Blender source file
  license: CC BY
- url: https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/bottlecaps.scad
  title: BOSL2 bottlecaps.scad (OpenSCAD library)
  what_it_is: Parametric caps and necks for standard PCO-1810/1881 drink bottles, SPI bottles and jars and mason jars; a starting
    point for the threaded inner cap of a home-made push-and-turn closure
  license: BSD 2-Clause
sources:
- https://en.wikipedia.org/wiki/Child-resistant_packaging
- https://en.wikipedia.org/wiki/Child_safety_lock
- https://www.law.cornell.edu/cfr/text/16/1700.15
- https://www.law.cornell.edu/cfr/text/16/1700.20
- https://www.cpsc.gov/s3fs-public/PoisonPreventionPackagingAGuideforHealthcareProfessionals.pdf?VersionId=vz7Fa (pp. 3, 5-6,
  14)
- https://patents.google.com/patent/US4394916A/en
- https://patents.google.com/patent/US6450352B1/en
- https://patents.google.com/patent/US20120138561A1/en
- https://www.paramountglobal.com/knowledge/child-resistant-closures/
- https://aptar.com/en-us/products/push-turn-child-resistant-closure
- https://packagingschool.com/lessons/child-resistant-closures
- https://jadex.com/press-media/cpsc-child-resistant-safety-caps
- https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/
- https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
- https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
- https://help.prusa3d.com/article/pla_2062
- https://help.prusa3d.com/article/petg_2059
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/bottlecaps.scad
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
- https://commons.wikimedia.org/wiki/File:Aspirin1.jpg
- https://commons.wikimedia.org/wiki/File:Palmnturn.JPG
- https://www.youtube.com/watch?v=nzEkMZeIeP8 (verified via YouTube oEmbed)
- https://www.printables.com/model/1109394-dram-pill-bottle-with-protective-cap-mechanism (read via https://api.printables.com/graphql/)
- https://api.printables.com/graphql/
research: research/connection-types/results/Pushandturn_childresistant_cap.json
---

A two-layer screw cap whose loose outer shell only grips the threaded inner cap when you press down while turning, so a child who just twists it gets nothing but spinning and clicking, while an adult who knows the trick can open it.

**In plain words:** A bottle cap that just spins and clicks if you only twist it, and only unscrews if you press it down hard while you turn. **Proper term:** Push-and-turn child-resistant closure (push-down-and-turn cap).

**Also called:** child-resistant cap / CR closure / CRC; childproof cap / child-proof lid (common but inaccurate: regulators say child-resistant, not child-proof); safety cap; push down and turn cap / push & turn closure; push-and-twist cap; palm-and-turn cap / Palm N Turn (historical name of the first design, 1967); double-shell closure / two-piece closure (outer cap or over cap, and inner cap); special packaging (US legal term for child-resistant, senior-friendly packaging).

## How it works

Only the inner cap is screwed onto the bottle; the outer cap sits loosely over it, pushed up by small springy fingers so their teeth or lugs don't mesh. Turning to close, the springy fingers or sloped ratchet teeth catch on the inner cap and drive it round, so the cap always tightens. Turning to open without pressing, the fingers or teeth just ride up and slip over the ramps with a clicking sound, so the inner cap never turns. Pressing down squashes the springs and pushes the outer cap's lugs into slots or teeth on the inner cap, like engaging a dog clutch, so the push and the turn together unscrew the cap.

## Parts

A few parts moulded as a two-piece cap: an outer cap (over cap) with drive lugs or teeth inside its top or skirt and springy fingers or leaf springs; an inner cap with the screw thread, matching lugs or ratchet ramps on its top or outside, and a liner or plug seal; plus the bottle neck with its outer thread.

## Everyday examples

- aspirin and painkiller bottles marked 'push down & turn to open'
- prescription and over-the-counter medicine bottles
- household-chemical and personal-care bottles (closure makers list these uses)

## When to use it

On containers of medicines, chemicals or other harmful contents that adults open often, where a simple screw cap would be too easy for a young child. Also as a fun demonstrator of a push-engaged clutch, or on a stash box or spare-parts jar where you just want a lid that doesn't come off with a casual twist.

## When not to use it

Not for people with arthritis, weak hands or poor grip, who may struggle with it; US pharmacists can dispense in ordinary (non-child-resistant) packaging on request, and a lever or easy-open cap may suit better. Not as your only protection: it is child-resistant, not child-proof, so store poisons out of reach too. Not for anything that needs a certified child-resistant package unless the cap and container were tested together. If you only need a lid that stays shut when knocked, a plain screw cap, snap lid or bayonet lid is simpler.

## Details

- **What it does (jobs):**
  - lock, and release by hand: keeps a screw cap from being undone by a single simple twist, while an adult can open it by pushing and turning
  - join and hold: screws the cap onto the bottle
  - seal it, or pass cables or fluid through: a liner or plug seal in the inner cap seals the bottle
- **Movement:** rotate+slide: the outer cap turns freely on the inner cap and moves down a short way when pressed ⚑ [uncertain: travel not stated in opened sources, roughly a millimetre or two]; the inner cap unscrews along the bottle's thread
- **Directions it can move (degrees of freedom):** Outer cap relative to inner cap: 2 (it turns, and it slides a little up and down). Cap relative to bottle: 0 when screwed tight; 1 while unscrewing (turning and rising together along the thread).
- **Special behaviour:**
  - one-way (moves freely one way, locks the other): without pressure the outer cap drives the inner cap in the tightening direction but slips over it in the opening direction, like a ratchet
  - hand-release only (locks under load, releases when a person operates it): it needs two different motions at once (push down and turn), which young children rarely manage but most adults can
- **How it holds:** shape (the screw thread holds the cap on, and the lugs interlock only when pushed together; form-fit), with spring force (springy fingers keep the lugs apart until pressed)
- **Input and output:** Works like a push-engaged one-way clutch: turning the outer cap to close drives the inner cap at 1:1; turning to open drives it only while pushed down, otherwise the torque passed on is near zero (it slips and clicks). In line (coaxial). Not a power drive, so efficiency is not relevant.
- **Power:** passive (no power needed)
- **Load:** light: it only has to hold a screw cap on a bottle. Twisting alone, however hard, just slips; the weak points are a strong push-and-turn, prying or biting the cap, or leaving the cap loose. Pulling straight off is resisted by the screw thread.
- **Play and precision:** noticeable play by design: the outer cap rattles and spins freely on the inner cap and has some up-and-down travel; the cap is not a locating part
- **Taking it apart:** tool-free quick release: unscrews by hand (push down and turn) and screws back on
- **How often it can be reused:** many times: US rules require it to keep working 'for the number of openings and closings customary for its size and contents' (16 CFR 1700.15); a worn or damaged cap stops being child-resistant ⚑ [uncertain: no cycle figure]
- **Sealing:** watertight: a liner, inlay or plug seal inside the inner cap presses on the bottle lip when the cap is tightened ⚑ [uncertain whether a particular cap is airtight; some bottles also have a separate foil seal]
- **Adjustable:** no
- **Access needed:** end of a tube or shaft: it screws onto the neck (end) of a bottle or jar
- **Materials:** Polypropylene (PP) and high-density polyethylene (HDPE) for both shells, sometimes with recycled (PCR) resin; liners of foam or other sealing materials; the bottle can be plastic or glass. For printing: PETG or nylon are less brittle than PLA for the springy fingers and teeth.
- **Heat, cold, water and wear:** Heat: printed PLA softens above about 60 °C, PETG is fine below about 80 °C (Prusa); moulded PP and HDPE caps handle normal household conditions ⚑ [uncertain: no temperature limit found]. Plastic springy fingers that are left pressed down would relax (DuPont), but in normal use they are only pressed briefly. Worn or broken fingers or teeth let the cap spin loosely or lock up ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: certified child-resistant caps sold with matching bottles by closure makers
  - 3D print (FDM): demonstrators and non-certified containers, printed as separate inner and outer caps
  - 3D print (resin): finer teeth and threads for small caps ⚑ [uncertain: no resin example found]
- **Printing it in one piece (print in place):** no: the inner and outer caps are printed separately and snapped together (the outer cap's lip has to pass over the inner cap), and the bottle is printed separately ⚑ [uncertain: no print-in-place push-and-turn cap was found]
- **Tools:** none to use. Making real caps needs injection or compression moulding tools; printed versions need only a printer.
- **Difficulty:** hard: you need two closely fitting printed shells with a screw thread, springy fingers and small ratchet teeth, and it will not be tested or certified; buy certified caps and bottles for real medicines or chemicals. Printing one as a demonstrator or for a non-hazardous stash box is a good moderate project.

### 3D printing tips

Threads: bottle threads are large and coarse, which suits printing; follow the rule of M6 or bigger, a rounded (semi-circular) thread profile and about 0.1 mm offset between cap and neck (Formlabs). To fit real bottles, the BOSL2 OpenSCAD library has standard bottle-neck and cap threads (PCO-1810/1881 drink bottles, SPI bottle and jar threads, mason jars). Springy fingers and ratchet teeth: print the outer cap top-down so the fingers and teeth lie flat in the layers, and don't build flexing parts standing up in the Z direction, because they snap between layers (Hubs). Give sliding and snapping parts about 0.5 mm clearance on FDM, and add a fillet at least half the finger thickness where each finger joins the cap (Hubs). Use PETG, ABS or nylon rather than PLA, which is brittle and breaks into shards (Hubs, Prusa). The fingers are only bent while you push, so plastic springs are acceptable here; springs that stay bent all the time relax and creep (DuPont design guide, p. 36). Make the unlocking lugs deep enough to take the unscrewing torque without skipping, and the slip ramps shallow enough to click over easily ⚑ [uncertain: no printed-cap dimensions found]. A similar printed design uses a thumb lever instead of a push (Printables 1109394); its maker found the printed lever stiffer than the moulded original and that it bends slightly with use but still works. Do not rely on a printed cap for real medicines or poisons: it has not been tested with children, and FDM surfaces are not food-safe (same maker).

### Buying one (off-the-shelf parts)

Child-resistant push-and-turn closures in standard neck sizes (e.g. 18, 22, 25, 28, 32, 40 and 50 mm are listed by one maker) with matching bottles or vials; 'CR caps', 'CRC closures', 'push down and turn caps', 'child-resistant screw caps'; related types: squeeze-and-turn caps, line-up-the-arrows snap caps, reversible (two-way) prescription vial caps, press-tab (lever) vial caps; liners and induction seals. Note that a closure only counts as child-resistant when it has been certified together with a specific container (Aptar).

## Rules of thumb

- US 'special packaging' must stop at least 85% of children without a demonstration and at least 80% after a demonstration, must be opened and properly closed by at least 90% of senior adults, and must keep working for the openings and closings customary for its contents (16 CFR 1700.15, https://www.law.cornell.edu/cfr/text/16/1700.15).
- The test uses panels of 50 children aged 42-51 months who get 5 minutes, then a demonstration, then 5 more minutes; senior adults aged 50-70 must open it within 5 minutes and re-close it properly within 1 minute (16 CFR 1700.20, https://www.law.cornell.edu/cfr/text/16/1700.20).
- A closure is only qualified as child-resistant together with the specific containers it was certified with (Aptar, https://aptar.com/en-us/products/push-turn-child-resistant-closure).
- Most child-resistant closures work by needing two different motions at once, such as push-and-turn (https://en.wikipedia.org/wiki/Child-resistant_packaging).
- For printed threads, prefer M6-sized or larger threads, a semi-circular profile and about 0.1 mm offset (Formlabs, https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/).
- Don't build flexing features vertically in Z; use about 0.5 mm clearance on FDM and a root fillet of at least 0.5 times the thickness (Hubs, https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/).

## Common failures

(1) Cap left loose or not re-closed: the child-resistant feature does nothing; tighten until the cap drives the inner cap tight. (2) Adults can't open it and leave it off or swap it for an ordinary lid: choose an easier certified design or ask for non-child-resistant packaging. (3) Worn, cracked or flattened springy fingers: the outer cap no longer lifts clear, so it opens with a plain twist, or the teeth skip when you try to open it. (4) Cracked inner cap or stripped thread from over-tightening. (5) Dirt or dried contents (syrup, powder) jamming the gap between the shells. (6) On printed caps: fingers snapping between layers, or ratchet teeth too small to grip; print flat and use a tougher plastic.

## Safety

It slows children down; it does not make a container safe. Many poisonings happen because the cap was left off or not screwed back on properly, or the contents were moved to an ordinary container (US CPSC). Always screw it back on fully until it is tight. Reversible caps (with a child-resistant and an ordinary side) are discouraged by the CPSC, because people tend to leave them on the easy side. A home-printed cap is not tested or certified and should not be relied on for medicines or poisons.

## Related

- Squeeze-and-turn cap: you squeeze two sides of the cap while turning instead of pushing down
- Line-up-the-arrows snap cap: a tab has to be lined up with a mark before the cap can be pushed off
- Press-tab or lever cap: a tab or lever on the cap or bottle has to be pressed while turning (as on some pharmacy vials)
- Ratchet-tooth torque limiter (clicking cap or knob): the same clicking ramp teeth, but they slip above a set torque rather than until pushed
- Dog clutch (claw clutch): the same 'push lugs into mesh to connect the drive' idea, used on shafts
- Bayonet mount (push-and-twist lock): also push-and-turn, but with pins in L-shaped slots instead of a screw thread and a slip clutch
- Tamper-evident breakaway bridge: often added to caps to show they have been opened, but does not stop opening
- Face ratchet: the one-way teeth on the cap's top are a small face ratchet

## Make it yourself

- [Dram Pill Bottle With Protective Cap Mechanism by reavenk (Printables 1109394; details read via the Printables public API)](https://www.printables.com/model/1109394-dram-pill-bottle-with-protective-cap-mechanism): Printable pill bottles and caps that fit real pharmacy dram vials; the cap won't unscrew until a thumb lever is pressed (a press-tab variant rather than a push-down cap); includes a Blender source file *(licence: CC BY)*
- [BOSL2 bottlecaps.scad (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/bottlecaps.scad): Parametric caps and necks for standard PCO-1810/1881 drink bottles, SPI bottles and jars and mason jars; a starting point for the threaded inner cap of a home-made push-and-turn closure *(licence: BSD 2-Clause)*

## Pictures, videos and models

- [Aspirin1.jpg (Wikimedia Commons, Mosesofmason, 2005)](https://commons.wikimedia.org/wiki/File:Aspirin1.jpg): Photo of an aspirin bottle with a child-resistant cap marked 'push down & turn to open' *(licence: CC BY-SA 3.0 or GFDL 1.2+ (reuse with credit); the brand name is a trademark)*
- [Palmnturn.JPG (Wikimedia Commons, unknown author)](https://commons.wikimedia.org/wiki/File:Palmnturn.JPG): Image of the original Palm N Turn child-proof cap *(licence: Public domain in the United States (published 1931-1977 without a copyright notice); may still be copyrighted elsewhere)*
- [US4394916A Child-resistant closure assembly (Ned J. Smalley, Owens-Illinois, 1983; Google Patents)](https://patents.google.com/patent/US4394916A/en): Patent drawings of a two-piece cap: angled leaf springs on the outer cap drive ratchet lugs on the inner cap when tightening and cam past them when loosening, and drive lugs that only engage when the outer cap is pressed down *(licence: link only (US patent drawings are generally free of copyright ⚑ [uncertain]))*
- [Guide to Child Resistant Caps & Closures (Paramount Global)](https://www.paramountglobal.com/knowledge/child-resistant-closures/): Plain explanation of push-and-turn, squeeze-and-turn and snap child-resistant closures, with images *(licence: link only)*
- [3D Printed Dram Pill Bottles With Child Protection Mechanism (Pixel Precision, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=nzEkMZeIeP8): Demonstration and assembly of a printed pill bottle with a lever-type child-resistant cap (a close relative of push-and-turn) *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 9 sentences on this page marked [uncertain].
- ⚑ Finder value `connects` = any solid parts (best guess): joins parts, but no specific kind of part found; set to any solid parts
- ⚑ Finder value `motion_in` = not applicable (best guess): no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."
- ⚑ Finder value `motion_out` = not applicable (best guess): no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."
- ⚑ Finder value `shaft_layout` = not applicable (best guess): no "in -> out" form in `input_output`: "Works like a push-engaged one-way clutch: turning the outer cap to close drives ..."

## Sources

- <https://en.wikipedia.org/wiki/Child-resistant_packaging>
- <https://en.wikipedia.org/wiki/Child_safety_lock>
- <https://www.law.cornell.edu/cfr/text/16/1700.15>
- <https://www.law.cornell.edu/cfr/text/16/1700.20>
- <https://www.cpsc.gov/s3fs-public/PoisonPreventionPackagingAGuideforHealthcareProfessionals.pdf?VersionId=vz7Fa (pp. 3, 5-6, 14)>
- <https://patents.google.com/patent/US4394916A/en>
- <https://patents.google.com/patent/US6450352B1/en>
- <https://patents.google.com/patent/US20120138561A1/en>
- <https://www.paramountglobal.com/knowledge/child-resistant-closures/>
- <https://aptar.com/en-us/products/push-turn-child-resistant-closure>
- <https://packagingschool.com/lessons/child-resistant-closures>
- <https://jadex.com/press-media/cpsc-child-resistant-safety-caps>
- <https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/>
- <https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/>
- <https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf>
- <https://help.prusa3d.com/article/pla_2062>
- <https://help.prusa3d.com/article/petg_2059>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/bottlecaps.scad>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE>
- <https://commons.wikimedia.org/wiki/File:Aspirin1.jpg>
- <https://commons.wikimedia.org/wiki/File:Palmnturn.JPG>
- <https://www.youtube.com/watch?v=nzEkMZeIeP8 (verified via YouTube oEmbed)>
- <https://www.printables.com/model/1109394-dram-pill-bottle-with-protective-cap-mechanism (read via https://api.printables.com/graphql/)>
- <https://api.printables.com/graphql/>
