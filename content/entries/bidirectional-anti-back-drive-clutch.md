---
title: Bidirectional anti-back-drive clutch
description: A 1:1 shaft coupling with wedging rollers (or a coil spring) that passes turning from the input to the output
  in both directions, but jams the output against a fixed housing whenever the output itself tries to turn, so a load cannot
  drive the motor or handle backwards.
num: 15
term: Bidirectional anti-back-drive clutch (reverse-input blocking clutch; non-back-drivable clutch)
plain_name: A coupling that lets a motor or handle turn the output either way, but locks solid if the load tries to turn it
  back, so a raised arm, seat or blind stays put when you let go
aliases:
- reverse-input blocking clutch
- reverse input lock clutch / reverse input prevention clutch
- anti-reverse input clutch
- non-back-drivable clutch (NBDC) / non-back-drivable mechanism
- irreversible roller clutch
- back-drive prevention clutch
- two-way anti-reverse transmission (Nguyen Duc Thang's animation title)
- lock-type torque diode (NTN's product term)
- seat lifter clutch
- wrap clutch for anti-reverse transmission (window-blind version with a coil spring)
family: self-locking & anti-back-drive
other_families: [clutches & couplings, one-way & ratchet, 'brakes, dampers & speed control']
finder:
  job: [stop it moving back, let it move, 'lock, and release by hand']
  motion: rotate
  special_behaviour: [self-locking, hand-release only, fail-safe or breakaway]
  holding_principle: [friction or clamping, spring force]
  reuse_cycles: many times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: 'no'
  maker_difficulty: hard
  processes: [off-the-shelf part, CNC, 3D print (FDM), 3D print (resin)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning]
  shaft_layout: [in line]
  overload_response: not applicable
  clicks: not applicable
  tools: [press or vice, hand tools]
  load_max: medium
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming:
  tools:
    kind: source uncertain
    reason: '`tools_needed` is marked [uncertain] here: "…may also need circlip pliers or a small press for shafts and bearings
      [uncertain]…"'
confirmed: []
open_points: []
uncertain_fields: [tools_needed, seal, play_and_precision, materials, maker_difficulty, processes, making_tips_3d_printing,
  when_not_to_use, environment_limits, safety_notes, common_failures, links, make_it_yourself]
diagram_idea: 'Cross-section with a fixed outer ring, a square output hub and four rollers in wedge gaps: panel A shows the
  load twisting the hub and one roller jamming (red); panel B shows the input fork''s fingers first pushing the rollers out
  of their wedges and then turning the hub (green arrows).'
links:
- url: https://www.youtube.com/watch?v=wZjoNIkYQqM
  title: Two-way anti-reverse transmission 1a (Nguyen Duc Thang, thang010146)
  shows: 'CAD animation: the input shaft drives the output both ways, while rollers wedge against a fixed rim if the output
    tries to drive (description from Thang''s catalogue, Part 1, p. 32)'
  license: link only
- url: https://www.youtube.com/watch?v=5DBfEdX5Ow8
  title: Two-way anti-reverse transmission 1b (Nguyen Duc Thang, thang010146)
  shows: A second embodiment of the same roller anti-reverse transmission (Part 1, p. 32)
  license: link only
- url: https://www.youtube.com/watch?v=-Y_SQGMRx8k
  title: Two way overrunning clutch 1 (Nguyen Duc Thang, thang010146)
  shows: Roller clutch with a fork and springs in which rotation passes from the outer disk to the fork in both directions
    but not back the other way (Part 1, p. 30)
  license: link only
- url: https://www.ntnglobal.com/en/products/catalog/pdf/2900E.pdf
  title: NTN Clutches catalogue CAT. No. 2900, Section 3 Torque Diode (pp. 24-27)
  shows: Cross-section drawings and three-step operating-principle figures of lock-type, free-type and swing-type torque diodes
    and the seat lifter clutch
  license: © NTN; link only
- url: https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1385076/full
  title: 'Liu, Luo, Xiao and Liang (2024): Non-back-drivable clutch based self-locking mechanism of prosthetic joint to improve
    manipulation stability'
  shows: Driving and self-locking modes, section and exploded views, and five key states of a wedge-type non-back-drivable
    clutch (Figs. 1-3)
  license: 'open access [uncertain: Frontiers articles are usually CC BY, but the licence line was not seen]'
make_it_yourself:
- url: https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/
  title: Printable One-Way Driver Skips Ratchet For A Clutch (Hackaday, 2022)
  what_it_is: Article on a fully 3D-printed one-way screwdriver by ukman (shared on Instructables) that locks with wedging
    cylinders (a roller clutch). A one-way building block rather than a bidirectional anti-back-drive clutch; the bidirectional
    version adds a fixed outer ring, rollers facing both ways and an input fork, as in Thang's animations
  license: '[uncertain]'
sources:
- https://www.ntnglobal.com/en/products/catalog/pdf/2900E.pdf
- https://cs448m.github.io/lectures/machines/doc/1.pdf
- https://www.youtube.com/watch?v=wZjoNIkYQqM
- https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=wZjoNIkYQqM&format=json
- https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=5DBfEdX5Ow8&format=json
- https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=-Y_SQGMRx8k&format=json
- https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VgciAZMn7Zc&format=json
- https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1385076/full
- https://patents.google.com/patent/US7832542B2/en
- https://patents.google.com/patent/EP1498570A1/en
- https://www.mecapedia.uji.es/pages/irreversibilidad.html
- https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
research: research/connection-types/results/Bidirectional_antibackdrive_clutch_reverseinput_blocking_clutch.json
---

A 1:1 shaft coupling with wedging rollers (or a coil spring) that passes turning from the input to the output in both directions, but jams the output against a fixed housing whenever the output itself tries to turn, so a load cannot drive the motor or handle backwards.

**In plain words:** A coupling that lets a motor or handle turn the output either way, but locks solid if the load tries to turn it back, so a raised arm, seat or blind stays put when you let go. **Proper term:** Bidirectional anti-back-drive clutch (reverse-input blocking clutch; non-back-drivable clutch).

**Also called:** reverse-input blocking clutch; reverse input lock clutch / reverse input prevention clutch; anti-reverse input clutch; non-back-drivable clutch (NBDC) / non-back-drivable mechanism; irreversible roller clutch; back-drive prevention clutch; two-way anti-reverse transmission (Nguyen Duc Thang's animation title); lock-type torque diode (NTN's product term); seat lifter clutch; wrap clutch for anti-reverse transmission (window-blind version with a coil spring).

## How it works

With nothing turning the input, springs hold the rollers lightly in wedge-shaped gaps between the output hub and the fixed housing, with gaps facing both ways, so if the load twists the output in either direction a roller jams and locks the output to the housing. When the input turns, fingers on its cage first push the rollers out of their wedges (unlocking), and after a small free angle the cage catches the output and drives it (NTN lock-type torque diode, Figs. 1-3). Thang describes it as having the self-locking of a worm drive but at a 1:1 ratio. In the coil-spring version, the load's twist expands the spring against a fixed drum so it grips, while turning the input releases the spring and drives through it (Nien Made, EP 1 498 570).

## Parts

A small assembly that acts as one unit: a fixed outer ring or housing; an output hub with flat or ramped faces (a cam); rollers, balls or wedges sitting in wedge-shaped gaps between hub and ring; small springs pushing them into the gaps; an input cage or fork whose fingers sit between the rollers; and bearings (NTN catalogue; Thang's animations). The window-blind version uses a coil spring inside a fixed drum instead of rollers (EP 1 498 570).

## Everyday examples

- Car seat height lever: pump it up or down and the seat stays exactly where it is (NTN seat lifter clutch)
- Window blinds worked by a crank or rod that stay where you leave them, because a wrap-spring anti-reverse clutch stops the blind's weight turning the mechanism (EP 1 498 570)
- Hospital beds, car window regulators and powered shutters (applications listed in US 7,832,542)
- Powered prosthetic hands and wrists that keep their grip with the motor off (Liu et al. 2024)

## When to use it

When a motor or hand crank must move something both ways but the load must never drive it back: robot arm joints that should hold with power off, lifts and tilting tables, blinds and shutters, seat and bed adjusters, camera or antenna positioners. Choose it over a worm drive when you want a 1:1 drive with good efficiency (no big speed reduction); choose it over a power-off brake when you want holding without electronics or wiring.

## When not to use it

Not for smooth, controlled lowering of a load that pulls in the same direction as the motion: the clutch may lock and unlock repeatedly and judder ⚑ [uncertain: not verified on an opened page]; use a worm drive, a braked gearmotor or a damper. Not when the joint should give way when bumped, for safety or compliance: use a torque limiter or a back-drivable drive. Not for high torque or shock loads in a home-made printed version: buy a unit, or use a worm drive or power-off brake. Not where lost motion at each reversal matters for precise positioning: use a servo with a holding brake.

## Details

- **What it does (jobs):**
  - stop it moving back (one-way): the load can never turn the input, whichever way it pushes
  - let it move (turn, slide or bend): the input still drives the output both ways
  - lock, and release by hand: with a hand crank or lever, working the input is what unlocks it
- **Movement:** rotate: unlimited turning in both directions when driven from the input; locked when the output tries to drive
- **Directions it can move (degrees of freedom):** 1: the output turns about the shaft axis, but only when the input drives it; seen from the load side it has 0, because it is locked to the housing
- **Special behaviour:**
  - self-locking (holds under load, won't back-drive): the output jams against the fixed housing whichever way the load pushes
  - hand-release only (locks under load, releases when a person operates it): turning the input (crank, lever or motor) is the only way to release it
  - fail-safe or breakaway: it is passive, so a motor-driven load stays held when power is cut; Thang notes it lets a servo motor rest with its supply switched off
- **How it holds:**
  - friction or clamping (force-fit): rollers or wedges jam by friction between the output hub and the fixed ring
  - spring force (a springy part presses it in place): small springs keep the rollers ready in their wedges
- **Input and output:** Input rotation in either direction -> output rotation in the same direction at the same speed (1:1); shafts in line. Efficient, because nothing slides while it drives: about 0.95 for Controzzi's roller design, as cited by Liu et al. (2024), whereas Liu et al. list worm gears and high-ratio reducers as the usual, less attractive alternatives. Back-drivable: no, the output locks in both directions. A small free angle (lost motion) occurs each time the input changes direction, e.g. a 7° idle angle and 14° at the input in the Liu et al. prosthetic-wrist clutch. Variant: a 'free-type' unit lets the output spin freely instead of locking, but still never drives the input (NTN free-type torque diode).
- **Power:** passive (no power needed); it holds the load whether or not the motor is powered, so if power is lost it stays locked
- **Load:** Light to medium. Catalogue examples: 4.9 N·m allowed load torque (NTN lock-type torque diode TDL28), 29.4 N·m (swing-type TDS26), and 80 N·m braking force for a car seat-lifter clutch about 50 mm across (NTN TDLU); a prosthetic-wrist design locked about 0.6 N·m (Liu et al. 2024). It holds twist in both directions; bending and end loads must be carried by separate bearings.
- **Play and precision:** Noticeable: there is a free angle every time the input changes direction, because the cage must push the rollers out before it catches the output (NTN; 7° idle and 14° input backlash in Liu et al.). Once locked it holds firmly, although the rollers wedge in a little further as load builds. Input and output shafts need to be well aligned and centred ⚑ [uncertain].
- **Taking it apart:** removable: it is a self-contained unit fitted between shaft ends and fixed to a frame
- **How often it can be reused:** many times: the unit can be unbolted and refitted; its life limit is wear of the rollers, ramps and springs
- **Sealing:** none as a rule: catalogue units have oil-impregnated bearings inside a closed housing, but no rated seal is claimed (NTN) ⚑ [uncertain]
- **Adjustable:** no: how firmly it locks and how easily it unlocks are set by the design (roller size, ramp angle and springs)
- **Access needed:** end of a tube or shaft: the unit fits between the ends of the input and output shafts
- **Materials:** Hardened bearing-steel rollers and rings with spring-steel springs; a lightweight prosthetic version used 7075 aluminium for the main parts, stainless steel pins and wavy springs of 301 stainless steel (Liu et al. 2024). Printed plastic can make a demonstrator, but plastics creep under constant load (DuPont), and the Liu et al. design needed a friction coefficient of about 0.25 at the wedges, which plastic surfaces may not reliably give ⚑ [uncertain].
- **Heat, cold, water and wear:** It holds by friction, so oil on the locking faces, wear or polished surfaces can let it slip (Liu et al. stress that the friction coefficient must meet a minimum); grease belongs only where the design intends it (Liu et al. grease the spring groove). Printed plastic versions creep under constant load and lose grip (DuPont); heat makes this worse ⚑ [uncertain]. Cold and heat change spring force and lubricant thickness, which shifts the unlocking torque ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: the usual choice (catalogue reverse-input blocking clutches, seat-lifter clutches, blind clutches)
  - CNC: hardened steel or aluminium rings, cam and cage for custom units, as in the Liu et al. prototype
  - 3D print (FDM): demonstration models or very light-duty units, using steel dowel pins as rollers ⚑ [uncertain]
  - 3D print (resin): accurate small demonstration models ⚑ [uncertain]
- **Printing it in one piece (print in place):** no: the rollers should be steel pins and springs must be added, so the housing, cam and cage are printed as separate parts and assembled
- **Tools:** screwdriver or hex keys to mount the housing; some units may also need circlip pliers or a small press for shafts and bearings ⚑ [uncertain]
- **Difficulty:** hard: it needs hard, accurate wedge surfaces and a well-chosen ramp angle to lock reliably yet unlock easily, so most makers should buy a unit (search 'reverse input blocking clutch' or 'torque diode') or use a worm drive; a printed demonstrator with steel pins as rollers is possible for very light loads ⚑ [uncertain]

### 3D printing tips

Treat a printed version as a light-duty demonstrator. Print the fixed ring, the output cam and the input cage lying flat, so the round and ramped faces are smooth vertical walls made of continuous perimeters. Use steel dowel pins or needle rollers as the rollers, because printed rollers are rarely round or hard enough ⚑ [uncertain]. Leave at least 0.3 mm clearance between the cage and the parts it moves past (Prusa's starting value for moving parts). Keep each wedge gap shallow enough that friction locks it: the Liu et al. design needed a friction coefficient of about 0.25 between wedge and ring and suggests roughening the contact faces (for example by sandblasting) to raise friction. Give the cage a deliberate free angle so it pushes the rollers out of their wedges before it catches the output (NTN; Liu et al.). Push each roller into its wedge with a light spring; stronger springs raise the torque needed to unlock (Liu et al.). Expect printed plastic ramps to creep if a load hangs on them for hours (DuPont), so test with the real load overnight. Keep grease off the locking faces. For anything heavier than a demonstration, buy a unit or use a worm drive.

### Buying one (off-the-shelf parts)

Search terms: 'reverse input blocking clutch', 'reverse input lock clutch', 'anti-reverse input clutch', 'non-back-drivable clutch', 'lock-type torque diode' (NTN product name) and 'free-type torque diode' (output freewheels instead of locking), 'seat lifter clutch', 'bi-directional clutch', 'wrap spring clutch' (roller-blind and window-blind clutches). Alternatives: self-locking worm gearmotor, spring-applied (power-off) electromagnetic brake, one-way needle roller clutch (holds one direction only).

## Rules of thumb

- Catalogue ratings to compare against: NTN lock-type torque diode TDL28, 4.9 N·m allowed load torque; swing-type TDS26, 29.4 N·m; seat lifter clutch TDLU, 80 N·m braking force in a 50 mm diameter by 51 mm unit (NTN Clutches catalogue CAT. No. 2900, pp. 24-27).
- Self-locking like a worm drive but at a 1:1 ratio; suited to motion systems where a servo motor should rest with its power switched off (Nguyen Duc Thang, 2700 Animated Mechanical Mechanisms, Part 1, p. 32).
- Friction coefficient between wedge and fixed ring of about 0.25 preferred; unlocking torque about 65-85 N·mm and locking about 600 N·mm for a 33 mm diameter, 15 mm thick, 25.5 g clutch; 7° idle angle (Liu et al., Frontiers in Bioengineering and Biotechnology, 2024).
- Roller-type non-back-drivable mechanisms can reach an efficiency of around 0.95 (Controzzi et al., as cited by Liu et al., 2024).
- Self-locking (irreversibility) comes from friction combined with unfavourable transmission angles in the reverse direction; worm drives and power screws are the classic examples (Mecapedia, Irreversibilidad).
- Expect a little backlash whenever the direction of rotation reverses (NTN, two-way clutch note, p. 23).

## Common failures

Slipping back under load: worn or polished rollers and ramps, oil on the faces, weak springs, or printed parts creeping; replace, clean, or roughen the surfaces (Liu et al. suggest sandblasting to raise friction). Hard to unlock, or the motor stalls when starting: springs too strong or wedges too steep; Liu et al. note the springs should be optimised to lower the unlocking torque. Wear of springs and cams in earlier designs (Liu et al., reviewing prior work). Contact faces deforming under overload (Liu et al. found failure when contact strain exceeded 0.2% in their aluminium wedges). Judder or knocking when the load pulls with the motion ⚑ [uncertain].

## Safety

Because it holds the load when power is off, a jammed mechanism or trapped hand cannot be freed by pushing on the output; you must drive the input or take it apart ⚑ [uncertain]. If it slips from wear or oil, the load can drop, so never rely on a home-made one to hold anything above people. Driving the input to unlock a heavy load can let the load lurch as the lock releases ⚑ [uncertain].

## Related

- Worm drive (worm and worm wheel): also can't be back-driven, but reduces speed a lot and is less efficient
- Lead screw and nut: self-locking straight-line version of the same idea
- Roller clutch (one-way bearing) and sprag clutch: lock in one direction only and let the other freewheel
- Free-type torque diode: the output can spin freely but still can't drive the input (NTN)
- Wrap-spring clutch: the coil-spring version of the same wedging idea
- Electromagnetic brake (power-off, spring-applied): holds with power off using springs and needs power to release
- Ratchet and pawl: holds one way only, in tooth steps, with clicks
- Binding-plate lock (tilting friction plate): a straight-line, one-direction friction lock
- Torque limiter: the opposite goal; it lets go when overloaded

## Make it yourself

- [Printable One-Way Driver Skips Ratchet For A Clutch (Hackaday, 2022)](https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/): Article on a fully 3D-printed one-way screwdriver by ukman (shared on Instructables) that locks with wedging cylinders (a roller clutch). A one-way building block rather than a bidirectional anti-back-drive clutch; the bidirectional version adds a fixed outer ring, rollers facing both ways and an input fork, as in Thang's animations *(licence: ⚑ [uncertain])*

## Pictures, videos and models

- [Two-way anti-reverse transmission 1a (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=wZjoNIkYQqM): CAD animation: the input shaft drives the output both ways, while rollers wedge against a fixed rim if the output tries to drive (description from Thang's catalogue, Part 1, p. 32) *(licence: link only)*
- [Two-way anti-reverse transmission 1b (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=5DBfEdX5Ow8): A second embodiment of the same roller anti-reverse transmission (Part 1, p. 32) *(licence: link only)*
- [Two way overrunning clutch 1 (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=-Y_SQGMRx8k): Roller clutch with a fork and springs in which rotation passes from the outer disk to the fork in both directions but not back the other way (Part 1, p. 30) *(licence: link only)*
- [NTN Clutches catalogue CAT. No. 2900, Section 3 Torque Diode (pp. 24-27)](https://www.ntnglobal.com/en/products/catalog/pdf/2900E.pdf): Cross-section drawings and three-step operating-principle figures of lock-type, free-type and swing-type torque diodes and the seat lifter clutch *(licence: © NTN; link only)*
- [Liu, Luo, Xiao and Liang (2024): Non-back-drivable clutch based self-locking mechanism of prosthetic joint to improve manipulation stability](https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1385076/full): Driving and self-locking modes, section and exploded views, and five key states of a wedge-type non-back-drivable clutch (Figs. 1-3) *(licence: open access ⚑ [uncertain: Frontiers articles are usually CC BY, but the licence line was not seen])*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 16 sentences on this page marked [uncertain].
- ⚑ Finder value `tools` = press or vice, hand tools (source uncertain): `tools_needed` is marked ⚑ [uncertain] here: "…may also need circlip pliers or a small press for shafts and bearings ⚑ [uncertain]…"

## Sources

- <https://www.ntnglobal.com/en/products/catalog/pdf/2900E.pdf>
- <https://cs448m.github.io/lectures/machines/doc/1.pdf>
- <https://www.youtube.com/watch?v=wZjoNIkYQqM>
- <https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=wZjoNIkYQqM&format=json>
- <https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=5DBfEdX5Ow8&format=json>
- <https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=-Y_SQGMRx8k&format=json>
- <https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VgciAZMn7Zc&format=json>
- <https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1385076/full>
- <https://patents.google.com/patent/US7832542B2/en>
- <https://patents.google.com/patent/EP1498570A1/en>
- <https://www.mecapedia.uji.es/pages/irreversibilidad.html>
- <https://hackaday.com/2022/08/25/printable-one-way-driver-skips-ratchet-for-a-clutch/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf>
