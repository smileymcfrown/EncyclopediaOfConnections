---
title: Compliant ratchet and overrunning clutch
description: A ratchet or one-way clutch in which the catch (pawl) and its spring are the same springy arm, moulded or printed
  in one piece with the hub, so the wheel clicks round one way and locks the other with no pins, springs or assembly.
num: 13
term: Compliant ratchet (flexure-pawl ratchet); when used as a freewheel, a compliant overrunning clutch
plain_name: 'A one-piece plastic click-wheel whose catches are springy arms: it turns one way with a click and locks the other
  way, with no pins or separate springs'
aliases:
- flexure pawl
- compliant pawl
- flex pawl
- spring pawl / leaf-spring pawl / flat-spring pawl
- spring-blade ratchet (RoyMech's name for metal versions whose pawls are flat springs)
- ratchet with molded-in springs (DuPont's description of injection-moulded plastic versions)
- compliant over-running ratchet and pawl clutch (BYU Compliant Mechanisms Research)
- compliant overrunning clutch with centrifugal throw-out (US patent 6,148,979)
- one-piece ratchet / monolithic ratchet
- print-in-place ratchet
- compliant freewheel
family: one-way & ratchet
other_families: [compliant mechanisms & flexures, print-in-place & 3D-printing joints, indexing & detents]
finder:
  job: [stop it moving back, click into set positions, tighten and hold tension]
  motion: rotate
  special_behaviour: [one-way, indexing, tensioning]
  holding_principle: [shape, spring force]
  reuse_cycles: many times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: 'yes'
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, 3D print (resin), sheet metal]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning]
  shaft_layout: [in line]
  overload_response: not applicable
  clicks: clicks
  tools: [none]
  load_max: medium
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [input_output, load, play_and_precision, processes, rules_of_thumb, environment_limits, links, make_it_yourself]
diagram_idea: 'Top view of a toothed ring with two springy arms inside: in frame 1 (free direction) a sloped tooth back lifts
  a catch and its arm bends, with a ''click'' label; in frame 2 (locking direction) the steep tooth face pushes straight into
  the catch tip, the arm stays straight, and a force arrow runs along the arm into the hub.'
links:
- url: https://commons.wikimedia.org/wiki/File:ZipTieCrossSection.JPG
  title: File:ZipTieCrossSection.JPG (Wikimedia Commons)
  shows: Cutaway photo of a cable tie head showing the moulded springy catch (flexure pawl) against the strap's teeth
  license: Public domain (released by the author, Mushrooshi)
- url: https://www.youtube.com/watch?v=KbHqf4kF5Wk
  title: Compliant Overrunning Clutch - 3D printed (BYU Compliant Mechanisms Research Group)
  shows: 'BYU''s printed one-piece compliant overrunning clutch working [uncertain: title and channel verified through YouTube''s
    oEmbed data; the video itself was not viewed]'
  license: YouTube standard licence; link only
- url: https://www.youtube.com/watch?v=rKYTr9NjgOA
  title: Ratchet mechanism for anti-reverse 1 (Nguyen Duc Thang, thang010146)
  shows: CAD animation of a ratchet wheel that turns only one way because a flat spring acts as the pawl (description from
    Thang's catalogue, Part 2, p. 31)
  license: link only
- url: https://patents.google.com/patent/US6148979A/en
  title: 'US6148979A: Compliant overrunning clutch with centrifugal throw-out (Roach and Howell, BYU)'
  shows: Patent drawings of the one-piece pawl hub with slender biasing arms and support members inside a ratchet ring
  license: patent document; link only
- url: https://en.wikipedia.org/wiki/Ratchet_(device)
  title: Ratchet (device), Wikipedia
  shows: Animated gear-and-pawl and rack-and-pawl ratchets, a ratchet drawing and a cable-tie cutaway
  license: 'Text CC BY-SA 4.0; each image has its own Commons licence (Ratchet_Gear_and_Pawl.gif listed as CC BY-SA 4.0) [uncertain:
    image licence seen only in a search listing]'
make_it_yourself:
- url: https://www.thingiverse.com/thing:3007265
  title: Compliant Overrunning Clutch by BYU_CMR (Thingiverse)
  what_it_is: 'Free printable model of BYU''s compliant overrunning clutch (one-piece pawl hub plus ratchet ring) [uncertain:
    the page was opened but its content did not render; title from the search listing and the run-1 preferred-sources list]'
  license: '[uncertain]'
- url: https://github.com/shaiss/print-bench/issues/668
  title: 'Design brief: pip-ratchet, a print-in-place one-way wheel (GitHub issue)'
  what_it_is: A hobby project's written design brief for a print-in-place ratchet with two PETG flexure pawls, giving dimensions,
    clearances, tooth angles and a test-coupon plan (a brief, not a finished, tested model)
  license: '[uncertain]'
sources:
- https://patents.google.com/patent/US6148979A/en
- https://www.youtube.com/watch?v=KbHqf4kF5Wk
- https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=KbHqf4kF5Wk&format=json
- https://www.thingiverse.com/thing:3007265
- https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
- https://roymech.org/Useful_Tables/Cams_Springs/Ratchets.html
- https://en.wikipedia.org/wiki/Ratchet_(device)
- https://en.wikipedia.org/wiki/Compliant_mechanism
- https://en.wikipedia.org/wiki/Cable_tie
- https://commons.wikimedia.org/wiki/File:ZipTieCrossSection.JPG
- https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
- https://cs448m.github.io/lectures/machines/doc/2.pdf
- https://www.youtube.com/watch?v=rKYTr9NjgOA
- https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=rKYTr9NjgOA&format=json
- https://github.com/shaiss/print-bench/issues/668
research: research/connection-types/results/Compliant_ratchet_and_overrunning_clutch_flexure_pawl.json
glossary: [backlash, axial--radial, detent, ratchet, pawl, freewheel, sprag, torque, pitch, crank, stiffness, preload, flexure,
  compliant-mechanism, living-hinge, cantilever, deflection, clearance, form-fit--force-fit--material-bond, taper, chamfer--fillet,
  undercut, creep, stress-relaxation, fatigue, brittle--ductile, perimeters, print-in-place, elephants-foot, peel-vs-shear]
---

A [ratchet](../glossary.md#ratchet) or one-way clutch in which the catch ([pawl](../glossary.md#pawl)) and its spring are the same springy arm, moulded or printed in one piece with the hub, so the wheel clicks round one way and locks the other with no pins, springs or assembly.

**In plain words:** A one-piece plastic click-wheel whose catches are springy arms: it turns one way with a click and locks the other way, with no pins or separate springs. **Proper term:** Compliant ratchet (flexure-pawl ratchet); when used as a [freewheel](../glossary.md#freewheel), a compliant overrunning clutch.

**Also called:** [flexure](../glossary.md#flexure) pawl; compliant pawl; flex pawl; spring pawl / leaf-spring pawl / flat-spring pawl; spring-blade ratchet (RoyMech's name for metal versions whose pawls are flat springs); ratchet with molded-in springs (DuPont's description of injection-moulded plastic versions); compliant over-running ratchet and pawl clutch (BYU [Compliant Mechanisms](../glossary.md#compliant-mechanism) Research); compliant overrunning clutch with centrifugal throw-out (US patent 6,148,979); one-piece ratchet / monolithic ratchet; [print-in-place](../glossary.md#print-in-place) ratchet; compliant freewheel.

## How it works

Each catch sits on the end of a thin arm that bends like a diving board (a [cantilever](../glossary.md#cantilever) flexure), so the arm is both the hinge and the spring. Turned the free way, the gently sloped backs of the teeth push the catch aside, bending the arm, and it springs back into the next gap with a click. Turned the other way, the steep face of a tooth pushes straight against the catch's tip; the tooth face is shaped so this push drives the catch deeper into the tooth rather than out of it, so the wheel locks. In BYU's patented clutch, stiff support members carry the locking load so the slender spring arms only have to bias the pawls, and at high freewheeling speed the pawls swing outward by centrifugal force (centrifugal throw-out) so they stop rubbing on the teeth (US 6,148,979).

## Parts

A few parts, often just one: (1) a toothed wheel or toothed ring (ratchet wheel); (2) a hub or frame carrying one or more thin springy arms whose tips are the catches (flexure pawls). The hub, arms and catches are a single piece. Print-in-place versions also trap the wheel inside the frame, so the whole thing is one printed part. The BYU compliant overrunning clutch is two parts: a one-piece pawl hub sitting inside a ratchet ring (US 6,148,979).

## Everyday examples

- A cable tie: the small tongue inside the head is a springy catch moulded in one piece with the head, clicking over the teeth on the strap (Wikipedia, Cable tie; Wikimedia Commons cutaway photo)
- Timers and clockwork that wind springs and drive timing cams with flat-spring pawls (RoyMech, spring blade ratchet)
- Plastic gear-and-ratchet parts in small machines, with the pawl springs moulded into the gear (DuPont design example, Fig. 8.01)

## When to use it

When you want a one-way or click-stop action in a printed or moulded part without buying springs and pins: winders and take-up spools, anti-reverse on a hand [crank](../glossary.md#crank), one-way knobs, simple freewheels in toys and light hand tools, and teaching models. It is a good choice when the part should be cheap, one piece, and assemble in seconds (or not at all), when loads are light, and when the catch spends most of its time resting in a tooth gap rather than held bent.

## When not to use it

Avoid it for heavy or safety-critical holding (hoists, anything above people): use a steel ratchet and pawl with a metal spring, or a worm drive. Avoid it where a catch must stay bent for long periods, because plastic springs [creep](../glossary.md#creep) and lose force (DuPont): use a metal spring. Avoid it when clicking or the one-tooth [backlash](../glossary.md#backlash) matters: use a roller clutch or [sprag](../glossary.md#sprag) clutch (silent, no tooth steps) or a wrap-spring clutch. Avoid PLA arms for high cycle counts: use PETG, nylon or a metal spring blade. Avoid fast freewheeling unless the design allows for it (the BYU centrifugal throw-out is one answer).

## Details

- **What it does (jobs):**
  - stop it moving back (one-way): it turns or slides freely one way and locks the other way
  - click into set positions: every tooth is a click stop
  - tighten and hold tension: winders, knobs and cable ties keep whatever they have pulled in
- **Movement:** rotate: unlimited turns in the free direction, locked in the other (linear versions such as a cable tie slide instead)
- **Directions it can move (degrees of freedom):** 1: the wheel only turns about its axle (or the strip only slides along its length), and under load only in one direction
- **Special behaviour:**
  - one-way (moves freely one way, locks the other): the springy catches ride over the sloped backs of the teeth one way and jam against the steep tooth faces the other way
  - indexing (clicks into set positions): it stops and clicks at every tooth, so it holds in steps of one tooth
  - tensioning (takes up slack and holds): in winders and cable ties it keeps the tension you wind or pull in
  - BYU variant only: centrifugal throw-out, meaning the pawls swing clear of the teeth at speed, so the freewheeling clutch runs with less rubbing, noise and wear (US 6,148,979)
- **How it holds:**
  - shape (the parts interlock; [form-fit](../glossary.md#form-fit--force-fit--material-bond)): the tip of the catch hooks against a tooth face
  - spring force (a springy part presses it in place): the bent arm keeps the catch pressed into the teeth
- **Input and output:** Rotation in the driving direction -> the same rotation at 1:1 (it is a clutch, not a gearbox); in the other direction the wheel freewheels. Shafts in line. Efficient when driving because nothing slides once a catch is engaged; there is a small drag from the arms rubbing over the teeth when freewheeling. Back-drivable: no in the locking direction; free in the other direction. BYU reported a polypropylene clutch reaching over 66.2 N·m peak [torque](../glossary.md#torque) with under 0.01 N·m overrunning torque ⚑ [uncertain: figures from the listing of the 1998 ASME paper by Roach, Lyon and Howell; the page itself could not be opened].
- **Power:** passive (no power needed)
- **Load:** Light to medium. Strongest in the locking direction when the tooth pushes straight along the catch, so the stiff part of the pawl, not the thin spring arm, carries the load (the BYU patent uses separate support members for this; a BYU thesis reports the most torque with pawls loaded in compression ⚑ [uncertain: thesis seen only as a search listing]). Weak if the catch is loaded sideways or the thin arm has to carry the lock. Plastic versions suit hand-powered and small-motor loads, not lifting people or heavy overhead loads.
- **Play and precision:** Noticeable: like any ratchet it can slip back by up to one tooth before a catch lands (Wikipedia, Ratchet (device)); more teeth, or several catches offset by a fraction of a tooth, make the steps smaller ⚑ [uncertain: offset-pawl trick not verified on an opened page]. It returns to tooth positions repeatably. It tolerates a little wobble because the arms flex, but the catch tips must stay lined up with the teeth.
- **Taking it apart:** removable: two-part designs (pawl hub plus ratchet ring) slide apart; print-in-place versions are captive, so in practice they are permanent unless you cut them
- **How often it can be reused:** many times: there are no fasteners to wear out; the life limit is [fatigue](../glossary.md#fatigue) of the springy arms, not taking it apart
- **Sealing:** none: it is an open mechanism and nothing makes it seal
- **Adjustable:** no: the click force is set by the arm's length and thickness; to change it you reprint or remould with a different arm
- **Access needed:** end of a tube or shaft: the hub or wheel slides onto the end of a shaft; print-in-place demos need no access at all
- **Materials:** Moulded versions: polypropylene (named in the BYU patent because it is cheap and easy to mould); acetal (Delrin) gears with molded-in springs acting on a nylon ratchet wheel (DuPont design guide, Fig. 8.01); nylon (cable ties). Metal versions: heat-treated flat spring steel blades (RoyMech). 3D printing: PETG or nylon for the springy arms; PLA 'makes for a very poor spring material' (Hackaday). It is a mechanism, not a joining method, so it does not 'join' materials.
- **Heat, cold, water and wear:** All plastic springs creep and relax if held bent, and temperature and chemicals change their spring properties (DuPont, Module I, p. 36); PLA is a very poor spring material (Hackaday, 2026). Heat softens printed arms, so a ratchet left in a hot car or next to a motor can weaken and take a set ⚑ [uncertain: no temperature figure verified]. Nylon parts used outdoors need UV stabilising; outdoor cable ties use nylon with at least 2% carbon black (Wikipedia, Cable tie). Vibration is usually fine because a catch sits in a tooth gap, but a weak arm can let the catch bounce out.

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): the usual maker method; prints in one piece
  - 3D print (resin): possible for small demos, but many standard resins are [brittle](../glossary.md#brittle--ductile), so thin arms may crack ⚑ [uncertain]
  - CNC or laser cut: flat versions can be cut from sheet plastic such as acetal ⚑ [uncertain]
  - sheet metal: spring-steel blade pawls in metal ratchets (RoyMech, spring blade ratchet)
  - off-the-shelf part: a cable tie is a ready-made linear ratchet with a moulded flexing catch
- **Printing it in one piece (print in place):** yes: the wheel, the springy catches and the frame can print already assembled and working, provided there is [clearance](../glossary.md#clearance) between the moving parts (Prusa suggests at least 0.3 mm as a starting point)
- **Tools:** none: it prints or moulds in one piece; two-part versions push together by hand
- **Difficulty:** moderate: it prints in one piece, but getting the arm [stiffness](../glossary.md#stiffness), tip clearance and tooth shape right usually takes a few test prints

### 3D printing tips

Orientation: print it lying flat so the arms bend sideways in the plane of the bed. Each arm is then built from continuous extrusion lines running along its length, and bending does not try to [peel](../glossary.md#peel-vs-shear) layers apart (Hubs' living-hinge rule: orient so the hinge's width, not its length, is built up layer by layer). Arm size: make each arm at least two [perimeters](../glossary.md#perimeters) wide (about 0.9 mm with a 0.4 mm nozzle; one perimeter, about 0.45 mm, is the absolute minimum, Prusa). For a given bend, stress rises with thickness and falls with length (standard cantilever formula, quoted in the print-bench design brief), so prefer longer, thinner arms to short, thick ones. Tapering the arm toward its tip (a constant-strength beam) gives the same stiffness at about two-thirds of the stress (DuPont, p. 36). Add a generous [fillet](../glossary.md#chamfer--fillet) where the arm joins the hub, because sharp corners start fatigue cracks (DuPont, p. 36). Clearance: leave at least 0.3 mm between wheel and frame and around the catch tips (Prusa), and check the first layer, since a squashed first layer ([elephant's foot](../glossary.md#elephants-foot)) is a common reason print-in-place parts fuse. Material: PETG or nylon for the arms; avoid PLA for anything that must click many times (Hackaday). Rest state: design so the catches sit in the tooth gaps with little or no bend when stopped; plastic springs held bent for long periods creep and lose force (DuPont, pp. 36-37 and 47). Tooth shape: make the locking face of each tooth point straight at the centre ([radial](../glossary.md#axial--radial)) or slightly [undercut](../glossary.md#undercut), so the load pulls the catch in, and make the back of the tooth a shallow slope so the catch rides over it (one hobby brief used a radial locking flank and about a 60° drive flank). Use two or more catches spread round the wheel to share and balance the load. Typical print failures: an arm snapping at its root (add a fillet, [taper](../glossary.md#taper) it, use PETG or nylon, reduce how far it bends), arms taking a set so the clicks get weak (reduce [preload](../glossary.md#preload)), catches skipping under load (steeper locking face, stiffer arms, more catches) and fused parts (more clearance).

### Buying one (off-the-shelf parts)

Few ready-made compliant ratchets are sold as parts. Useful search terms: 'cable tie' and 'releasable cable tie' (linear version with a moulded flexing pawl); 'flat spring', 'leaf spring' or 'spring steel shim' (to make a metal spring-blade pawl); 'ratchet wheel' (plastic or steel, to pair with a printed flexure pawl); 'one-way bearing' or 'one-way needle roller clutch' (a silent ready-made alternative). BYU's compliant overrunning clutch is shared as a free printable model (Thingiverse thing:3007265).

## Rules of thumb

- Plastic springs suit intermittent action, not constant load: 'Springs under constant load or [deflection](../glossary.md#deflection) should be designed in spring steel' because of creep and [stress relaxation](../glossary.md#stress-relaxation) (DuPont, General Design Principles, Module I, p. 36).
- Ratchets with molded-in acetal springs 'function properly, providing the springs are not held in the loaded position for a long period of time' (DuPont, Module I, p. 47).
- A tapered (constant-strength) spring arm reaches the same stiffness at two-thirds of the stress of a straight arm and with a quarter less material (DuPont, Module I, p. 36, Fig. 6.01).
- Avoid sharp corners at the arm root; use generous fillets (DuPont, Module I, p. 36).
- Start with at least 0.3 mm clearance between printed moving parts; the minimum printable wall is one extrusion width, about 0.45 mm for a 0.4 mm nozzle (Prusa Knowledge Base, Modeling with 3D printing in mind).
- FDM [living hinges](../glossary.md#living-hinge): 0.4-0.6 mm thick with at least two layers, oriented so the hinge width is built up layer by layer; a nylon FDM example lasted only about 25 full folds, so a printed ratchet arm should bend far less than a folding hinge (Hubs, How to design living hinges for 3D printing).
- Any ratchet can slip back by up to one tooth [pitch](../glossary.md#pitch) before it catches (Wikipedia, Ratchet (device)).
- Metal spring-blade ratchets, with proper heat treatment, give long life under light loading and can index to about one-tenth of a degree (RoyMech, Ratchets).
- Hobby design brief example: 56 mm, 24-tooth wheel with two opposed PETG pawl beams 1.2 mm thick, 10 mm long and 8 mm wide, locking flank radial (0°), drive flank about 60°, 0.4 mm radial clearance, target click force 1-2 N at the rim (GitHub shaiss/print-bench issue #668) ⚑ [uncertain: an untested hobby brief, not a design guide].

## Common failures

Arm cracks at its root after many clicks (fatigue, the main weakness of all flexing mechanisms because stress concentrates where they bend; Wikipedia, Compliant mechanism): add a fillet, taper the arm, use PETG or nylon, and reduce how far it bends. Arm takes a permanent bend so clicks become weak or it skips (creep): don't leave catches preloaded; use a tougher material or a metal spring. Catches skip or pop out under load: make the locking tooth face radial or undercut so the load pulls the catch in, add more catches, stiffen the arms. Print-in-place parts fused together: increase clearance to 0.3 mm or more and fix the first layer. Teeth or catch tips wear round: larger teeth or a harder material. Loud clicking or drag when freewheeling: lighter arms, fewer catches, or a centrifugal throw-out design (BYU).

## Safety

Low hazard in small demos. Do not use a printed flexure ratchet as the only thing holding a raised load or a tension that could whip back, because the arms can fail suddenly from fatigue. Small printed parts are a choking hazard for young children.

## Related

- Ratchet and pawl: the classic version with a pinned pawl and a separate spring; stronger and serviceable, but more parts
- Face ratchet: teeth on the faces of two discs pressed together by a spring; often used as a printed ratcheting joint
- Linear ratchet (cable-tie ratchet): the straight-line version; a cable tie is a linear flexure-pawl ratchet
- Roller clutch (one-way bearing) and sprag clutch: silent one-way clutches with no tooth steps, but need hardened parts
- Wrap-spring clutch: a coil spring grips a shaft one way; smooth and silent
- Torque-limiting gear with flexing spring arms (compliant slip hub): same one-piece springy-arm idea, but made to slip when overloaded instead of locking
- [Detent](../glossary.md#detent): a springy catch that holds set positions but can be pushed past in both directions

## Make it yourself

- [Compliant Overrunning Clutch by BYU_CMR (Thingiverse)](https://www.thingiverse.com/thing:3007265): Free printable model of BYU's compliant overrunning clutch (one-piece pawl hub plus ratchet ring) ⚑ [uncertain: the page was opened but its content did not render; title from the search listing and the run-1 preferred-sources list] *(licence: ⚑ [uncertain])*
- [Design brief: pip-ratchet, a print-in-place one-way wheel (GitHub issue)](https://github.com/shaiss/print-bench/issues/668): A hobby project's written design brief for a print-in-place ratchet with two PETG flexure pawls, giving dimensions, clearances, tooth angles and a test-coupon plan (a brief, not a finished, tested model) *(licence: ⚑ [uncertain])*

## Pictures, videos and models

- [File:ZipTieCrossSection.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:ZipTieCrossSection.JPG): Cutaway photo of a cable tie head showing the moulded springy catch (flexure pawl) against the strap's teeth *(licence: Public domain (released by the author, Mushrooshi))*
- [Compliant Overrunning Clutch - 3D printed (BYU Compliant Mechanisms Research Group)](https://www.youtube.com/watch?v=KbHqf4kF5Wk): BYU's printed one-piece compliant overrunning clutch working ⚑ [uncertain: title and channel verified through YouTube's oEmbed data; the video itself was not viewed] *(licence: YouTube standard licence; link only)*
- [Ratchet mechanism for anti-reverse 1 (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=rKYTr9NjgOA): CAD animation of a ratchet wheel that turns only one way because a flat spring acts as the pawl (description from Thang's catalogue, Part 2, p. 31) *(licence: link only)*
- [US6148979A: Compliant overrunning clutch with centrifugal throw-out (Roach and Howell, BYU)](https://patents.google.com/patent/US6148979A/en): Patent drawings of the one-piece pawl hub with slender biasing arms and support members inside a ratchet ring *(licence: patent document; link only)*
- [Ratchet (device), Wikipedia](https://en.wikipedia.org/wiki/Ratchet_(device)): Animated gear-and-pawl and rack-and-pawl ratchets, a ratchet drawing and a cable-tie cutaway *(licence: Text CC BY-SA 4.0; each image has its own Commons licence (Ratchet_Gear_and_Pawl.gif listed as CC BY-SA 4.0) ⚑ [uncertain: image licence seen only in a search listing])*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 12 sentences on this page marked [uncertain].

## Sources

- <https://patents.google.com/patent/US6148979A/en>
- <https://www.youtube.com/watch?v=KbHqf4kF5Wk>
- <https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=KbHqf4kF5Wk&format=json>
- <https://www.thingiverse.com/thing:3007265>
- <https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf>
- <https://roymech.org/Useful_Tables/Cams_Springs/Ratchets.html>
- <https://en.wikipedia.org/wiki/Ratchet_(device)>
- <https://en.wikipedia.org/wiki/Compliant_mechanism>
- <https://en.wikipedia.org/wiki/Cable_tie>
- <https://commons.wikimedia.org/wiki/File:ZipTieCrossSection.JPG>
- <https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/>
- <https://cs448m.github.io/lectures/machines/doc/2.pdf>
- <https://www.youtube.com/watch?v=rKYTr9NjgOA>
- <https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=rKYTr9NjgOA&format=json>
- <https://github.com/shaiss/print-bench/issues/668>
