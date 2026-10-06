---
title: Capstan cable drive
description: A cable wrapped several turns around a small input drum and anchored at both ends to a larger output drum turns
  the large drum at a reduced speed with more turning force, with zero backlash, very low friction and easy back-driving,
  but only through a limited angle.
num: 101
term: Capstan drive (capstan cable drive, cable reduction)
plain_name: A thin rope or cable wound a few times around a small drum on the motor, with both ends fixed to a much bigger
  drum, so the small drum turns the big one slowly and strongly with no wobble or play, like gears made of string
aliases:
- capstan reducer / capstan speed reducer
- cable drive, cable transmission, cable reduction ('pre-tensioned cable reductions' in the PHANToM haptic arm paper)
- rope drive / rope-driven reducer ('High Precision Speed Reducer Using Rope')
- cable-drum drive / rope-on-sheave drive (research papers)
- capstan gear (maker model name)
- tendon drive (loosely; strictly, tendon drives pull a joint from a distance, like finger tendons)
- friction drive or dial-cord drive (the old radio-tuning version, where the cord is not fixed to the small drum and can slip)
family: gear trains, gearboxes & transmissions
other_families: []
finder:
  job: [change speed or turning force]
  motion: rotate
  special_behaviour: []
  holding_principle: [not a holding joint, friction or clamping, shape]
  reuse_cycles: many times
  seal: none
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [back-and-forth turning]
  motion_out: [back-and-forth turning]
  shaft_layout: [parallel]
  overload_response: not applicable
  clicks: not applicable
  tools: [crimper, hand tools]
  load_max: heavy
  usual_process: 3D print (FDM)
  adjustable: 'yes'
  removability: removable
  power: passive
needs_confirming:
  tools:
    kind: source uncertain
    reason: '`tools_needed` is marked [uncertain] here: "…g or ball-end fittings; a lighter or glue to seal synthetic rope
      ends [uncertain]…"'
confirmed: []
open_points: []
uncertain_fields: [tools_needed, making_tips_3d_printing, everyday_examples, when_not_to_use, environment_limits, safety_notes,
  common_failures, make_it_yourself]
diagram_idea: Top view of a small drum and a large drum side by side with one cable coming off the big drum, wrapping three
  spiral turns round the small drum and returning to the big drum, with arrows showing the small drum turning eight times
  for one slow sweep of the big drum, and an inset graph of grip rising steeply with each extra wrap.
links:
- url: https://www.youtube.com/watch?v=MwIBTbumd1Q
  title: High Precision Speed Reducer Using Rope (Aaed Musa, YouTube)
  shows: Video explaining and building a 3D-printed capstan drive and testing it in a five-bar drawing robot and a jumping
    leg
  license: link only (standard YouTube licence)
- url: https://www.aaedmusa.com/projects/capstandrive
  title: Capstan Drive (Aaed Musa's project page)
  shows: Photos and explanation of an 8.55:1 printed capstan drive test stand, with rope selection notes
  license: link only
- url: https://hackaday.com/2024/06/03/gears-are-old-and-busted-capstans-are-cool/
  title: Gears Are Old And Busted, Capstans Are Cool (Hackaday)
  shows: Article with pictures of the printed capstan drive and why it suits 3D printing
  license: link only
- url: https://arxiv.org/abs/2507.15693
  title: Strong, Accurate, and Low-Cost Robot Manipulator (Forte), arXiv 2507.15693
  shows: 'Fig. 2: exploded view of a 3D-printed capstan drive with a stationary capstan and cable routing through the sheave'
  license: CC BY 4.0
- url: https://www.youtube.com/watch?v=jKZIvseA1Nk
  title: 'CS235: Applied Robot Design, Lecture 7 - Introduction to Cable Transmissions (Stanford, YouTube)'
  shows: University lecture on cable transmissions and capstan drives for robots
  license: link only (standard YouTube licence)
make_it_yourself:
- url: https://github.com/aaedmusa/Capstan-Drive
  title: aaedmusa/Capstan-Drive (GitHub)
  what_it_is: Code and design notes for Aaed Musa's 852 g, PLA, 120-degree, 8.55:1 capstan drive test stand with helical drums
    and a lead-screw tensioner (README read via raw.githubusercontent.com)
  license: '[uncertain] no licence file found in the repository'
- url: https://www.printables.com/model/470672-capstan-gear-for-delta-robot
  title: Capstan gear for delta-robot (holgersindbaek, Printables) (URL from Printables API, page not opened)
  what_it_is: Printable capstan drive used on a peg-solitaire-playing delta robot; the author suggests reworking the sizes
    from his published calculations
  license: CC BY
sources:
- https://en.wikipedia.org/wiki/Capstan_equation
- https://hackaday.com/2021/01/26/cable-mechanism-maths-designing-against-the-capstan-equation/
- https://hackaday.com/2024/06/03/gears-are-old-and-busted-capstans-are-cool/
- https://hackaday.com/2021/08/07/capstan-drive-is-pulling-the-strings-on-this-dynamic-quadruped/
- https://hackaday.com/2025/07/13/from-leash-to-locomotion-cara-the-robotic-dog/
- https://hackaday.io/project/176726-stanley-the-capstan-based-quadruped
- https://www.aaedmusa.com/projects/capstandrive
- https://www.aaedmusa.com/projects/cara
- https://raw.githubusercontent.com/aaedmusa/Capstan-Drive/main/README.md
- https://arxiv.org/abs/2507.15693
- https://arxiv.org/pdf/2507.15693
- https://www.osti.gov/servlets/purl/1340266
- http://ai.stanford.edu/~jks/pubs/1994-Massie-salisbury-asme-sohi.pdf
- https://www.mazzellacompanies.com/learning-center/why-sheave-design-is-critical-to-wire-rope-service-life/
- https://aaronnewmanb.substack.com/p/capstan-drives-affordable-precision
- https://childhoodradio.com/dial-string-mechanisms/
- https://www.youtube.com/watch?v=MwIBTbumd1Q
- https://www.youtube.com/watch?v=jKZIvseA1Nk
- https://api.printables.com/graphql/
research: research/connection-types/results/Capstan_cable_drive_tendon_drive.json
glossary: [misalignment, backlash, back-driving, self-locking, torque, pitch, actuator, stiffness, clearance, tolerance, form-fit--force-fit--material-bond,
  set-screw, repeatability--accuracy, creep, fatigue, layer-lines, infill]
---

A cable wrapped several turns around a small input drum and anchored at both ends to a larger output drum turns the large drum at a reduced speed with more turning force, with zero [backlash](../glossary.md#backlash), very low friction and easy [back-driving](../glossary.md#back-driving), but only through a limited angle.

**In plain words:** A thin rope or cable wound a few times around a small drum on the motor, with both ends fixed to a much bigger drum, so the small drum turns the big one slowly and strongly with no wobble or play, like gears made of string. **Proper term:** Capstan drive (capstan cable drive, cable reduction).

**Also called:** capstan reducer / capstan speed reducer; cable drive, cable transmission, cable reduction ('pre-tensioned cable reductions' in the PHANToM haptic arm paper); rope drive / rope-driven reducer ('High Precision Speed Reducer Using Rope'); cable-drum drive / rope-on-sheave drive (research papers); capstan gear (maker model name); tendon drive (loosely; strictly, tendon drives pull a joint from a distance, like finger tendons); friction drive or dial-cord drive (the old radio-tuning version, where the cord is not fixed to the small drum and can slip).

## How it works

The cable leaves the big drum, wraps three to five times around the small drum and returns to the big drum, where both ends are fixed, so it forms a tight loop. Friction from the wraps grows exponentially with each turn (the capstan equation), so the cable cannot slip on the small drum and the two drums behave like meshing gears; one direction of rotation is carried by the cable on one side and the other direction by the other side. The reduction equals the ratio of the drum diameters measured to the centre of the cable (effective or [pitch](../glossary.md#pitch) diameters). Because the cable is always tight there is no gap to cross when the direction reverses, so there is no backlash, but the big drum can only turn until the cable runs out, usually well under one turn.

## Parts

A small assembly: a small input drum (the 'sheave' or capstan) on the motor shaft, usually with a spiral groove; a large output drum or drum sector (the 'pulley') on the joint; one or two cables or ropes; anchors that fix the cable ends to the big drum (often through a hole, knot, ball fitting or clamp); and a tensioner (a screw, lead screw or sliding carriage) to pull the cable tight; plus the frame and bearings that hold the two drums at a fixed distance.

## Everyday examples

- Old radio tuning dials: a cord wrapped 1.5-2.5 times around the tuning-knob shaft turns a big drum on the tuning capacitor (ChildhoodRadio)
- Force-feedback (haptic) arms such as the PHANToM, whose motors drive the arm through pre-tensioned cable reductions (Massie and Salisbury, 1994)
- Hobby and research robot dogs and robot arms (CARA, Stanley, Forte)
- A ship's capstan or a sailing winch uses the same friction-grip principle, although it only pulls a rope in rather than driving a drum ⚑ [uncertain]

## When to use it

Use a capstan drive when you want a moderate speed reduction (about 8:1 in most maker builds) with no backlash at all, very low friction and a joint that you can push back by hand: legged robots that must absorb landings, robot arms that should feel what they touch, force-feedback controllers, camera or telescope mounts, and 3D-printed [actuators](../glossary.md#actuator) where printed gears would be rough, noisy and sloppy (Hackaday). It is cheap and quiet (Sandia measured about 60 dBA), and the drums need no precise teeth, so it suits 3D printing.

## When not to use it

Don't use it for continuous rotation, such as wheels or spindles, since the output can only turn part of a turn (Aaron Newman; Forte); use a belt drive or gears. Don't use it where the load must stay put when the power is off, because it back-drives freely; use a worm drive or brake. For large reductions in one stage (30:1 and up) use a planetary, cycloidal or strain-wave gearbox, or stack a belt stage in front (Forte). Avoid it in tight spaces if you must use steel cable, because steel needs big drums (Sandia), and in dirty places where grit would abrade the rope ⚑ [uncertain].

## Details

- **What it does (jobs):**
  - change speed or turning force: a single-stage reduction, typically around 8:1 to 10:1, used to amplify a motor's [torque](../glossary.md#torque) at a robot or haptic joint
- **Movement:** rotate, limited range: the output drum typically turns 180-270 degrees (Forte paper), e.g. 120 degrees on Aaed Musa's test stand and up to 330 degrees on the Forte arm's base; the input drum turns the ratio times as far
- **Directions it can move (degrees of freedom):** 1: the two drums are tied together by the tight cable, so turning one sets the other
- **Special behaviour:**
  - none of the listed clever behaviours: its value is zero backlash, low friction and smooth, quiet, easily back-driven motion. It is not [self-locking](../glossary.md#self-locking) and not a reliable torque limiter; if the cable is not anchored to the small drum and has too few wraps it can slip, as in old radio dial-cord drives, but in a proper capstan drive the wraps prevent this
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it transmits rotation
  - friction or clamping ([force-fit](../glossary.md#form-fit--force-fit--material-bond)): the cable grips the small drum through the friction of several wraps (capstan effect)
  - shape (the parts interlock; form-fit): the cable ends are anchored to the big drum by knots, ball fittings, clamps or holes
- **Input and output:** Limited rotation -> slower limited rotation (the output typically moves 120-330 degrees). Ratio = effective diameter of big drum / effective diameter of small drum, measured to the cable centreline: 8:1 on the Forte arm (19.4 mm and 155.2 mm drums), 8.55:1 on Aaed Musa's test stand (intended 8:1), 8:1 on the CARA robot dog, under 9:1 on the Stanley quadruped (Hackaday). For higher ratios, stages are combined, e.g. a 2.5:1 belt stage feeding a 7.5:1 capstan for 18.75:1 (Forte). Efficiency: about 95% unlubricated and 96% with lubricated synthetic ropes (Sandia, Mazumdar et al. 2017). Shafts: parallel. Back-drivable: yes, easily; this 'torque transparency' is why it is used in haptic devices and legged robots (Hackaday; Sandia). If the big drum is held still and the small drum orbits around it, the ratio becomes D/d + 1 (Forte).
- **Power:** passive (no power needed). With the motor off, the output is free to be back-driven by the load, so a lifted arm will fall unless it is balanced or braked
- **Load:** Light to medium for hobby builds, and up to heavy in research robots: Forte's printed, steel-cable capstan joints are rated up to about 23.6 N m (with a belt stage, calculated from the motor's holding torque) and Sandia's synthetic-rope drives handle about 60 N m peak torques on a biped ankle. The cable only carries pull, the small drum sees the highest stress (Aaed Musa), and the cable ends are usually the weakest point, so extra wraps are used to protect them (Sandia). Bearings must resist the cable pre-tension pulling the two drums together.
- **Play and precision:** None (zero backlash) as long as the cable stays pre-tensioned (Sandia; Hackaday); slack from [creep](../glossary.md#creep) or lost tension brings back play and poor positioning (Aaed Musa). [Stiffness](../glossary.md#stiffness) comes from cable stretch, so a short, stiff, low-creep cable and good pre-tension matter. Forte, a printed arm with capstan and belt joints, measured [repeatability](../glossary.md#repeatability--accuracy) (standard deviation) of 0.29-0.59 mm at the tool. The actual ratio can differ slightly from the drum ratio because the rope's working diameter is hard to measure and it flattens under tension (Aaed Musa). [Misalignment](../glossary.md#misalignment): the drums must be parallel and at a fixed spacing; Forte spaces them about 1.5 cable thicknesses apart.
- **Taking it apart:** removable: the drums are bolted or pressed onto shafts and the cable can be untensioned and unwound; the cable is usually replaced rather than reused once cut and knotted to length
- **How often it can be reused:** many times for the drums and frame; a few times for the cable, which is cut to length, anchored and pre-stretched in place
- **Sealing:** none: the cable and drums run in the open
- **Adjustable:** Yes: cable tension is set with a screw, lead screw or sliding tensioning pulley, and should be re-tightened after a wear-in period of roughly 10-50 cycles and occasionally afterwards; Sandia found no more tensioning was needed after about 1,000 cycles. The ratio is fixed by the drum sizes, and makers fine-tune it by adjusting the big drum's outside diameter (Aaed Musa, CARA)
- **Access needed:** not applicable: it is built into a frame between two parallel shafts; you need to reach the tensioning screw and the cable anchors
- **Materials:** Cable: stainless steel wire rope (zero creep but needs big drums; failed within 5 hours on Aaed Musa's small drums); synthetic ropes such as Dyneema DM20, Vectran, Kevlar or Zylon, which bend round small drums but may creep (stretch permanently) (Sandia; Aaed Musa). Vectran gave the best mix of low creep and light resistance in Sandia's tests; Aaed Musa chose 2 mm Dyneema DM20 after a two-week endurance test. Drums: machined and polished aluminium in industry and research (Sandia); 3D-printed PLA, PET-CF or polycarbonate in maker builds (Aaed Musa; Stanley on Hackaday.io).
- **Heat, cold, water and wear:** Creep: most synthetic ropes slowly stretch under constant tension and go slack, so choose low-creep Dyneema DM20 or Vectran and re-tension (Aaed Musa; Sandia). UV light: unprotected Zylon lost more than 70% of its strength after 144 hours of UV, while silicone-treated Vectran lost about 30% after 600 hours (Sandia), so shade synthetic ropes from sunlight. Lubricant on the anchor wraps reduces grip and moves load onto the anchors (Sandia). [Fatigue](../glossary.md#fatigue): steel cable round small drums breaks from repeated bending (Aaed Musa; Stanley). Printed drums share the usual heat and creep limits of the plastic ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): drums and frame (PLA, PETG, PET-CF, PC)
  - CNC: machined aluminium drums with spiral grooves in research and industrial designs
  - off-the-shelf part: the rope or cable, end fittings, bearings and screws
- **Printing it in one piece (print in place):** no: the drums and frame are printed separately, then the cable is wound on, anchored and tensioned by hand
- **Tools:** Hex keys or a screwdriver for the tensioning screw and drum mounting; a cutter for the rope or cable; for steel cable, crimping or ball-end fittings; a lighter or glue to seal synthetic rope ends ⚑ [uncertain]
- **Difficulty:** moderate: the parts print easily and need no precise gear teeth, but you must choose a low-creep rope, work out the effective diameters, route and anchor the cable neatly and build a tensioner

### 3D printing tips

1) Use effective (pitch) diameters: calculate the ratio from the diameters at the centre of the rope, not the drums' outside diameters, or the ratio will be off; Aaed Musa built two test drives slightly above and below 8:1 and interpolated the big-drum size to hit exactly 8:1. 2) Give the small drum a spiral (helical) groove so the wraps sit side by side and don't rub or climb on each other (Aaed Musa; Sandia); make the drum long enough for all the wraps: Forte uses height = cable thickness x ratio + 2 mm [tolerance](../glossary.md#tolerance), and places the two drums about 1.5 cable thicknesses apart. 3) Make the small drum the strongest part: it carries the highest stress; CARA printed small drums in PET-CF at 100% [infill](../glossary.md#infill) (other parts 25% gyroid), and the Stanley team found Prusament PC Blend worked where PETG and nylon wore (Hackaday.io). 4) Keep the drum surfaces smooth; Sandia polishes its drums to stop rope abrasion, so sand off rough [layer lines](../glossary.md#layer-lines) where the rope runs ⚑ [uncertain]. 5) Choose the rope for low creep: 2 mm Dyneema DM20 on CARA; ordinary synthetic ropes stretch and go slack, and stainless steel wire broke within 5 hours on small printed drums (Aaed Musa). 6) Wrap 3-5 turns on the small drum; that is enough friction to stop slipping (Aaed Musa); Hackaday's cable maths article says about four wraps is enough to drive a cable directly. 7) Build in a tensioner: Aaed Musa uses a lead screw, Forte passes steel cable through a hollow (vented) screw with a ball fitting and locks it with a nut, and Sandia uses a bolt-driven tensioning pulley on a sliding carriage. Re-tension after the first tens of cycles. 8) Anchor the cable so it leaves the anchor in a straight line and add extra wraps before the anchor to take load off it (Sandia). 9) Stiffen printed shafts and drums with embedded bolts or rods, or epoxy, and point the rope exit toward the output drum to reduce bending on the input shaft (Aaron Newman). 10) Don't lubricate the wraps you rely on for grip (Sandia).

### Buying one (off-the-shelf parts)

Low-creep synthetic rope (Dyneema DM20 or SK78 braid, Vectran), or 7x19 stainless steel wire rope / aircraft cable with crimped ball or stop sleeves; wire rope crimp sleeves; ball bearings for both drum shafts; [set screws](../glossary.md#set-screw), hollow tensioning screws or lead screws for tensioning; brushless 'quasi-direct drive' motors (e.g. 90 KV outrunners) or stepper motors as the input.

## Rules of thumb

- Capstan equation: tension on the loaded side = tension on the holding side x e^(friction coefficient x total wrap angle in radians); with a friction coefficient of 0.5 one full turn multiplies the grip about 23 times (Wikipedia 'Capstan equation').
- With a friction coefficient of 0.3, two wraps give 6.6 times the friction of one wrap and three wraps 43 times; with 0.2, three wraps give only 12.3 times (Hackaday 'Cable Mechanism Maths'). About four wraps lets the drum drive the cable directly without slip (same article); 3-5 turns is enough in practice (Aaed Musa).
- Reduction ratio = effective diameter of big drum / effective diameter of small drum, measured to the rope centreline (Aaed Musa, CARA page); if the big drum is fixed and the small drum orbits it, ratio = D/d + 1 (Forte, arXiv 2507.15693).
- Drum-to-cable diameter (D/d): synthetic ropes can wrap round pulleys at about 8:1, where Vectran keeps about 85% of its strength; steel cables typically need about 18:1 in the 3 mm size range (Sandia, Mazumdar et al. 2017). For steel wire rope in general, suppliers give minimum D/d from 18 to 42 depending on construction, e.g. 26 for 6x19 and 18 for 6x37, and a bigger D/d greatly lengthens rope life (Mazzella).
- Wrap height on the small drum = cable thickness x ratio + [clearance](../glossary.md#clearance) (Forte used 2 mm), and drum spacing about 1.5 x cable thickness (Forte).
- Force on the cable anchor = torque-induced tension / e^(friction coefficient x anchor wrap angle) + pre-tension; Sandia measured 0.3 friction between Vectran and aluminium and used at least one full wrap on the small drum and half a wrap on the big one before the anchors (Sandia).
- Re-tension after a wear-in of roughly 10-50 cycles; slack cables cause shock loads that shorten rope life (Sandia).
- Typical range of motion is 180-270 degrees for most capstan-driven systems (Forte).

## Common failures

1) Cable goes slack from creep or wear-in, giving play and poor positioning: use low-creep rope and re-tension (Aaed Musa; Sandia). 2) Steel cable fatigue: on small drums it snapped within hours (Aaed Musa) and broke repeatedly once the Stanley quadruped began jumping (Hackaday.io); use bigger drums or synthetic rope. 3) Anchor (termination) failure: in Sandia's tests every tensile sample failed at the termination, and a lubricated anchor area failed early; add extra wraps before the anchor and keep it dry. 4) Ratio not as designed because the rope diameter was ignored (Aaed Musa). 5) Wraps rubbing or crossing because there is no groove or the drum is too short (Sandia; Forte). 6) Printed small drum wearing or breaking under the highest stress: print it stronger or in a tougher material (Aaed Musa; Stanley). 7) Running past the end of travel pulls on the anchors ⚑ [uncertain].

## Safety

The pre-tensioned cable stores energy and can whip if it or an anchor breaks, so keep hands and faces clear when tensioning and testing ⚑ [uncertain]. The drums form pinch points where the cable runs on. Frayed steel wire strands are sharp. Because the drive back-drives freely, a powered-off arm or leg can drop under its own weight.

## Related

- Belt drive: also a flexible loop between pulleys, with unlimited rotation, but a toothed belt has some backlash and a friction belt can slip
- Spur or planetary gearbox: unlimited rotation and bigger ratios, but has backlash and printed gears are noisy
- Strain-wave (harmonic) drive and cycloidal drive: high-ratio, near-zero-backlash gearboxes that turn continuously but are complex and harder to back-drive
- Bowden cable / tendon drive: pulls a joint from a distance through a sleeve instead of wrapping around drums; adds friction at every bend
- Winch or capstan (nautical): uses the same capstan friction to haul rope in, with no fixed return loop
- Worm drive: large reduction that usually can't be back-driven; the opposite choice when you want the joint to hold still
- Stopper knots and cord-end anchors: knots, plugs and clamps that anchor a synthetic rope's ends to the big drum, usually the weakest point of the drive
- Wire-rope terminations: crimped sleeves and ball or stop fittings for anchoring steel cable ends to the drums

## Make it yourself

- [aaedmusa/Capstan-Drive (GitHub)](https://github.com/aaedmusa/Capstan-Drive): Code and design notes for Aaed Musa's 852 g, PLA, 120-degree, 8.55:1 capstan drive test stand with helical drums and a lead-screw tensioner (README read via raw.githubusercontent.com) *(licence: ⚑ [uncertain] no licence file found in the repository)*
- [Capstan gear for delta-robot (holgersindbaek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/470672-capstan-gear-for-delta-robot): Printable capstan drive used on a peg-solitaire-playing delta robot; the author suggests reworking the sizes from his published calculations *(licence: CC BY)*

## Pictures, videos and models

- [High Precision Speed Reducer Using Rope (Aaed Musa, YouTube)](https://www.youtube.com/watch?v=MwIBTbumd1Q): Video explaining and building a 3D-printed capstan drive and testing it in a five-bar drawing robot and a jumping leg *(licence: link only (standard YouTube licence))*
- [Capstan Drive (Aaed Musa's project page)](https://www.aaedmusa.com/projects/capstandrive): Photos and explanation of an 8.55:1 printed capstan drive test stand, with rope selection notes *(licence: link only)*
- [Gears Are Old And Busted, Capstans Are Cool (Hackaday)](https://hackaday.com/2024/06/03/gears-are-old-and-busted-capstans-are-cool/): Article with pictures of the printed capstan drive and why it suits 3D printing *(licence: link only)*
- [Strong, Accurate, and Low-Cost Robot Manipulator (Forte), arXiv 2507.15693](https://arxiv.org/abs/2507.15693): Fig. 2: exploded view of a 3D-printed capstan drive with a stationary capstan and cable routing through the sheave *(licence: CC BY 4.0)*
- [CS235: Applied Robot Design, Lecture 7 - Introduction to Cable Transmissions (Stanford, YouTube)](https://www.youtube.com/watch?v=jKZIvseA1Nk): University lecture on cable transmissions and capstan drives for robots *(licence: link only (standard YouTube licence))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 8 sentences on this page marked [uncertain].
- ⚑ Finder value `tools` = crimper, hand tools (source uncertain): `tools_needed` is marked ⚑ [uncertain] here: "…g or ball-end fittings; a lighter or glue to seal synthetic rope ends ⚑ [uncertain]…"

## Sources

- <https://en.wikipedia.org/wiki/Capstan_equation>
- <https://hackaday.com/2021/01/26/cable-mechanism-maths-designing-against-the-capstan-equation/>
- <https://hackaday.com/2024/06/03/gears-are-old-and-busted-capstans-are-cool/>
- <https://hackaday.com/2021/08/07/capstan-drive-is-pulling-the-strings-on-this-dynamic-quadruped/>
- <https://hackaday.com/2025/07/13/from-leash-to-locomotion-cara-the-robotic-dog/>
- <https://hackaday.io/project/176726-stanley-the-capstan-based-quadruped>
- <https://www.aaedmusa.com/projects/capstandrive>
- <https://www.aaedmusa.com/projects/cara>
- <https://raw.githubusercontent.com/aaedmusa/Capstan-Drive/main/README.md>
- <https://arxiv.org/abs/2507.15693>
- <https://arxiv.org/pdf/2507.15693>
- <https://www.osti.gov/servlets/purl/1340266>
- <http://ai.stanford.edu/~jks/pubs/1994-Massie-salisbury-asme-sohi.pdf>
- <https://www.mazzellacompanies.com/learning-center/why-sheave-design-is-critical-to-wire-rope-service-life/>
- <https://aaronnewmanb.substack.com/p/capstan-drives-affordable-precision>
- <https://childhoodradio.com/dial-string-mechanisms/>
- <https://www.youtube.com/watch?v=MwIBTbumd1Q>
- <https://www.youtube.com/watch?v=jKZIvseA1Nk>
- <https://api.printables.com/graphql/>
