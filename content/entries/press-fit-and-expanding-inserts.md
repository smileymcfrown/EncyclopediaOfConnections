---
title: Press-fit and expanding inserts
description: A metal threaded sleeve pushed or tapped cold into a slightly smaller hole, held by its barbs or knurls biting
  into the wall, and sometimes spread wider by the screw, to give a plastic or wooden part reusable metal threads without
  heat.
num: 179
term: Press-in threaded insert (press-fit insert), including the expansion insert (screw-to-expand insert) and the tap-in
  or hammer-in insert
plain_name: A small ridged or barbed metal sleeve with a screw thread inside that you push, squeeze or tap cold into a plain
  hole, so a plastic or wooden part gets metal threads without heating anything; some types are split and spread outwards
  to grip harder when the screw goes in
aliases:
- press-fit insert, press-in insert (Wikipedia 'Threaded insert'; PEM; McMaster-Carr)
- cold-pressed insert, cold-press insert (PEM; SPIROL)
- expansion insert, slotted press-in insert (PEM 'Four Ways To Tackle Threaded Inserts For Plastics'; Stratasys)
- screw-to-expand insert, screw-to-expand press-in threaded insert (Formlabs; Protolabs; McMaster-Carr)
- tap-in insert (Hubs 'How to assemble 3D printed parts with threaded fasteners')
- hammer-in insert nut, knock-in nut (for wood and particle board; Wikipedia 'Threaded insert')
- hammer-in tee nut, prong nut (four-pronged flange for wood; McMaster-Carr; Hackaday 2024)
- barbed press-in insert, hex press-in insert, twist-resistant press-in insert, strong-grip screw-to-expand insert (catalogue
  variants; McMaster-Carr; PEM)
- E-Z Press (brand) insert (E-Z LOK)
family: print-in-place & 3D-printing joints
other_families:
- clamping, magnetic & friction connections
- interlocking joints & joinery
finder:
  job: [join and hold]
  motion: none
  special_behaviour: []
  holding_principle: [friction or clamping, shape]
  reuse_cycles: many times
  seal: none
  access_needed: one side only
  print_in_place: partly
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), 3D print (resin), woodwork]
  connects: [3D-printed part]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [drill and tap, press or vice, hand tools]
  load_max: medium
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points:
- kind: content
  note: '*Press-fit and expanding inserts* (179): expansion inserts perform ''least of all'' (SPIROL) against a ''very good
    hold'' (Formlabs); boss size 1.5-2× the knurl diameter (SPIROL''s 3D-print paper) against 2-3× the insert diameter (SPIROL''s
    moulded-plastics guide). SPIROL''s resin press-in figures (7 N·m, 40 N) were left out as inconsistent.'
uncertain_fields: [special_behaviour, removability, reuse_cycles, load, access_needed, processes, making_tips_3d_printing,
  off_the_shelf_parts, everyday_examples, environment_limits, safety_notes, common_failures, make_it_yourself]
diagram_idea: 'Side-by-side cut-away views: (1) a solid knurled insert above a slightly smaller hole, then pressed flush by
  a vice jaw, with small arrows where the knurls bite into the wall; (2) a slotted expansion insert pushed in loosely, then
  a screw going in and arrows showing the slotted sides spreading outwards; (3) a hammer-in tee nut in wood from the back
  face with its prongs; plus a small ''wrong'' inset showing a crack from a hole that is too small and a spinning insert in
  a hole that is too big.'
links:
- url: https://commons.wikimedia.org/wiki/File:Press-in_Insert.png
  title: Press-in Insert (Wikimedia Commons, by Dhruvvasoya91)
  shows: Photo of a knurled press-in threaded insert machined from free-cutting brass
  license: CC BY-SA 4.0
- url: https://www.pemnet.com/products-overview/products-threaded-inserts/threaded-inserts-press-in-inserts/
  title: Press-In Threaded Inserts (PEM / PennEngineering)
  shows: Vendor page with an animation of the press-in installation process and pictures of slotted, flanged and hex press-in
    inserts
  license: link only
- url: https://www.spirol.com/assets/files/SPIROL-Inserts-for-Plastics-us.pdf
  title: SPIROL Inserts for Plastics design guide (PDF)
  shows: Drawings of press-in, heat, self-tapping and moulded-in inserts, knurl types, correct and incorrect installation
    depth, and boss and hole design, plus comparative pull-out and torque tables
  license: link only
- url: https://www.sys-uk.com/wp-content/uploads/2016/01/BP_FDM_InsertingHardwarePostBuild.pdf
  title: 'FDM Best Practice: Inserting Hardware Post-Build (Stratasys, PDF)'
  shows: Photos of knurled and expansion inserts in FDM parts and pressing with an arbor press, with step-by-step press-fit,
    glue and heat-set methods
  license: link only
- url: https://www.youtube.com/watch?v=lYXTiJo_FQQ
  title: These threaded inserts aren't made for 3D prints (but work amazingly well) (YouTube, Made with Layers (Thomas Sanladerer))
  shows: Video comparing M5 rivet nuts, hex-socket wood inserts, helical inserts, self-tapping inserts and tee nuts (prong
    nuts) in 3D prints (as described by Hackaday, April 2024); title and channel confirmed via YouTube oEmbed, video not watched
  license: link only (standard YouTube licence)
make_it_yourself:
- url: https://www.printables.com/model/1444127-heat-set-insert-test-block-with-graduated-hole-siz
  title: Heat-Set Insert Test Block with Graduated Hole Sizes (Vladimir Gamalyan, Printables) (URL from Printables API, page
    not opened)
  what_it_is: Parametric OpenSCAD block with a row of holes stepping up in 0.1 mm increments and guide tubes; its description
    lists 'testing hole tolerance for press-fit or interference-fit parts'. Print flat with 100% infill. Read through the
    Printables public API.
  license: Creative Commons Public Domain
- url: https://www.printables.com/model/223069-threaded-insert-test-block
  title: Threaded Insert Test Block (Joseph Marlin, Printables) (URL from Printables API, page not opened)
  what_it_is: Test block with holes from 3.5 mm to 5.25 mm for finding the right hole for M4 threaded inserts; made for heat-set
    inserts but usable to check a press-fit [uncertain for press-fit use]. Read through the Printables public API.
  license: Creative Commons Public Domain
sources:
- https://www.pemnet.com/products/engineering-guides/four-ways-to-tackle-threaded-inserts-for-plastics/
- https://www.pemnet.com/products-overview/products-threaded-inserts/threaded-inserts-press-in-inserts/
- https://www.pemnet.com/products/engineering-guides/si-threaded-inserts-for-plastic/
- https://www.spirol.com/assets/files/SPIROL-Inserts-for-Plastics-us.pdf
- https://www.sys-uk.com/wp-content/uploads/2016/01/BP_FDM_InsertingHardwarePostBuild.pdf
- https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/
- https://www.protolabs.com/resources/blog/threading-and-inserts-for-3d-printing/
- https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
- https://www.ezlok.com/e-z-press-insert-installation
- https://www.accu.co.uk/p/486-threaded-inserts-fasteners-for-plastics-and-3d-printing
- https://www.mcmaster.com/products/threaded-inserts/
- https://www.mcmaster.com/products/threaded-inserts/thread-size~m3/
- https://en.wikipedia.org/wiki/Threaded_insert
- https://commons.wikimedia.org/wiki/File:Press-in_Insert.png
- https://www.cnckitchen.com/blog/how-to-use-threaded-inserts-in-resin-3d-prints
- https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
- https://hackaday.com/2024/04/15/alternate-threaded-inserts-for-3d-prints/
- https://www.youtube.com/watch?v=lYXTiJo_FQQ
- https://api.printables.com/graphql/
- https://www.spirol.com/assets/files/inserts-for-3d-printed-assemblies-us.pdf
research: research/connection-types/results/Pressfit_and_expanding_inserts_tapin_insert.json
glossary: [torque, pitch, interference-fit, form-fit--force-fit--material-bond, heat-set-insert, captive-nut, boss, pilot-hole,
  undercut, brittle--ductile, perimeters, infill]
---

A metal threaded sleeve pushed or tapped cold into a slightly smaller hole, held by its barbs or knurls biting into the wall, and sometimes spread wider by the screw, to give a plastic or wooden part reusable metal threads without heat.

**In plain words:** A small ridged or barbed metal sleeve with a screw thread inside that you push, squeeze or tap cold into a plain hole, so a plastic or wooden part gets metal threads without heating anything; some types are split and spread outwards to grip harder when the screw goes in. **Proper term:** Press-in threaded insert (press-fit insert), including the expansion insert (screw-to-expand insert) and the tap-in or hammer-in insert.

**Also called:** press-fit insert, press-in insert (Wikipedia 'Threaded insert'; PEM; McMaster-Carr); cold-pressed insert, cold-press insert (PEM; SPIROL); expansion insert, slotted press-in insert (PEM 'Four Ways To Tackle Threaded Inserts For Plastics'; Stratasys); screw-to-expand insert, screw-to-expand press-in threaded insert (Formlabs; Protolabs; McMaster-Carr); tap-in insert (Hubs 'How to assemble 3D printed parts with threaded fasteners'); hammer-in insert nut, knock-in nut (for wood and particle board; Wikipedia 'Threaded insert'); hammer-in tee nut, prong nut (four-pronged flange for wood; McMaster-Carr; Hackaday 2024); barbed press-in insert, hex press-in insert, twist-resistant press-in insert, strong-grip screw-to-expand insert (catalogue variants; McMaster-Carr; PEM); E-Z Press (brand) insert (E-Z LOK).

## How it works

The hole is slightly smaller than the outside of the insert, so pushing it in makes a tight [interference fit](../glossary.md#interference-fit), and its knurls or barbs dig into the hole wall so it can't turn or pull out (PEM; Wikipedia 'Threaded insert'). Because nothing melts, this pressure alone holds it, which is why it is weaker than a [heat-set insert](../glossary.md#heat-set-insert) and why too much force can crack the plastic (PEM 'Press-In Inserts'). Expansion inserts have a slot, so they squeeze inwards and go in easily, even with finger pressure; when the screw is threaded in it forces the sides back out and pushes the knurls into the hole wall, much like an expanding wall anchor (PEM 'Four Ways'; E-Z LOK). Tap-in and hammer-in inserts for wood work the same way, with barbs or prongs that are driven in with a hammer (Hubs; Wikipedia).

## Parts

A few parts: the insert (a short brass, aluminium or stainless steel sleeve, threaded inside, with knurls, barbs, fins or a hex shape outside; expansion types have a slot down the side), the part with a plain hole sized for it, and the screw that later goes into it. Installing it needs only an arbor press, vice or hammer.

## Everyday examples

- Car dashboard and centre-console electronics, where lightweight aluminium press-in inserts hold buttons, screens and circuit boards to plastic or composite frames (PEM 'Press-In Inserts')
- Flat-pack and particle-board furniture with hammered-in threaded insert nuts or tee nuts for the assembly bolts (Wikipedia describes hammer-in insert nuts for wood and particle board) ⚑ [uncertain for furniture specifically]
- An expanding wall plug or sleeve anchor, which works the same way as an expansion insert (PEM compares expansion inserts to 'the sheathed lag bolts you'd find at the hardware store')

## When to use it

Use a press-in or expansion insert when you want metal threads in a plastic, resin or wooden part but have no soldering iron or can't use heat: resin (SLA) prints and other thermosets that won't melt, parts that would warp near a hot iron, wood and particle board, or quick jobs where a vice or hammer is all you have. They suit screws that are taken in and out several times but don't carry big loads, such as covers, lids, electronics mounts and light brackets. SPIROL names press-in inserts the most effective choice for thermoset prints such as SLA resin, with self-tapping inserts a viable alternative that limits back-out [torque](../glossary.md#torque) (SPIROL white paper 'How to Select a Threaded Insert for Your 3D Printed Assembly', 2026, p. 2).

## When not to use it

For strong or heavily loaded joints in thermoplastic prints (PLA, PETG, ABS, nylon), a heat-set insert holds several times better (SPIROL; PEM; Formlabs). Avoid tight press-fit inserts in thin walls, [brittle](../glossary.md#brittle--ductile) plastics or polycarbonate prints, which can crack (SPIROL; Stratasys); use a heat-set insert, a glued insert or a [captive nut](../glossary.md#captive-nut) pocket instead. Avoid them where the part gets hot, as screw-to-expand inserts may loosen at high temperatures (Formlabs). For screws fitted only once or twice, a self-tapping screw straight into the plastic is simpler; for the highest pull-out strength after moulding or printing, self-tapping (screw-in) inserts are stronger (SPIROL), at least in nylon; in resin prints SPIROL warns that self-tapping inserts limit back-out torque and may thread out of an assembly that is taken apart (SPIROL white paper 'How to Select a Threaded Insert for Your 3D Printed Assembly', 2026, pp. 2, 4).

## Details

- **What it does (jobs):**
  - join and hold: gives a plastic, printed or wooden part a strong, reusable metal screw thread so another part can be bolted on and taken off again, without a soldering iron
- **Movement:** none
- **Directions it can move (degrees of freedom):** 0: once pressed in (and, for expansion types, once the screw is in), the insert cannot move, and the screw clamps the parts together rigidly
- **Special behaviour:**
  - none: it simply provides a metal thread; it does not lock, click or limit force (add thread-locking compound or a locking screw if vibration is a worry) ⚑ [uncertain]
  - grips harder when screwed: in expansion (screw-to-expand) inserts the screw spreads the slotted sleeve outwards (PEM; E-Z LOK); SPIROL's helical knurls are angled so that tightening the screw tends to drive the insert further into the hole, not twist it out (SPIROL design guide, p. 3)
- **How it holds:**
  - friction or clamping ([force-fit](../glossary.md#form-fit--force-fit--material-bond)): the insert is a tight interference fit in the hole, and press-in inserts 'rely entirely on the interference fit to provide pull-out and torque-out resistance' (PEM 'Press-In Inserts'); expansion inserts add outward pressure when the screw goes in
  - shape (the parts interlock; form-fit): knurls, barbs, fins, [undercuts](../glossary.md#undercut) or a hex body bite into the hole wall so the insert can't turn or pull out (PEM 'SI Threaded Inserts for Plastic'; McMaster-Carr)
- **Input and output:** not applicable
- **Power:** passive (no power needed); nothing needs heating, only a press, vice or hammer to install it
- **Load:** light to medium: weaker than heat-set or moulded-in inserts but still gives metal threads that take normal tightening. SPIROL's catalogue values in nylon 6/6 for M3 (4-40) inserts: press-in about 330 N pull-out and 2 N m torque, against about 1,000-2,000 N and 3-4 N m for heat or ultrasonic inserts and about 2,650 N pull-out for self-tapping inserts (SPIROL design guide, p. 21; 'a general comparative guide' only). PEM: cold pressed-in inserts 'may not perform as well' as heat-staked, ultrasonic or moulded-in inserts, and press-in inserts are 'not as secure' but quick and cheap. Formlabs rates screw-to-expand inserts as a 'very good hold' in 3D prints, with heat-set inserts giving 'improved security and strength'. Longer inserts resist pulling out better and wider ones resist twisting better (PEM 'Four Ways'). No independent pull tests of press-fit inserts in FDM prints were found ⚑ [uncertain]. SPIROL's 2026 white paper on inserts for 3D prints rates press-in inserts as giving 'moderate tensile and torque performance' in FDM and SLS thermoplastic prints, below heat-installed inserts, and as 'the most effective choice for thermosets' such as SLA resin, where expansion-style inserts gave 'the least of all Insert styles'. SPIROL's low rating for expansion inserts disagrees with Formlabs' 'very good hold' for screw-to-expand inserts in prints; the two views are recorded side by side (SPIROL white paper 'How to Select a Threaded Insert for Your 3D Printed Assembly', 2026, pp. 1-2; Formlabs).
- **Play and precision:** small: the metal thread fits screws like any nut. The main precision issue is getting the insert in straight and flush: a pilot on the insert 'only slightly smaller than the hole' helps it go in straight (SPIROL, p. 3), the insert should be pressed with a flat tool so it sits square (Stratasys), and it should end up flush, because an insert left below the surface can be pulled up ('jack-out') when the screw is tightened (SPIROL, p. 5).
- **Taking it apart:** removable: the screw can be taken out and put back many times, which is the point of the insert (PEM 'Press-In Inserts': metal threads 'can still be reliably disassembled and reassembled'). The insert itself is semi-permanent: prying or drilling it out usually damages the hole ⚑ [uncertain].
- **How often it can be reused:** many times for the screw (metal threads, so the plastic thread does not wear; Hubs; PEM). The insert itself is fitted once; an expansion insert may relax slightly each time the screw is removed ⚑ [uncertain].
- **Sealing:** none: it doesn't seal; water or air can pass along the thread and around the knurls
- **Adjustable:** no: it is a fixed threaded anchor; any adjustment comes from the screw or the parts being joined
- **Access needed:** one side only (blind): press-in, expansion and tap-in inserts go into a hole from its open face and the screw goes in from the same side. Exceptions: flanged screw-to-expand inserts for through holes are fitted from the underside (McMaster-Carr), and tee nuts for wood are hammered into the back face, so both sides must be reachable ⚑ [uncertain for tee nuts].
- **Materials:** Inserts: usually brass; lead-free aluminium for light parts; stainless steel for hex-bodied types (too stiff for slotted ones) (PEM 'Press-In Inserts'). Hammer-in insert nuts for wood are steel, brass or nylon (Wikipedia). Host materials: softer plastics (SPIROL), thermosets, where heat-set and ultrasonic inserts can't be used (PEM), both thermoplastics and thermosets for slotted expansion inserts (E-Z LOK), FDM nylon 12 as the best printed material for interference-fit inserts, while polycarbonate prints keep surface stress and suit glue or heat-set better (Stratasys), resin (SLA) and SLS prints with screw-to-expand inserts (Formlabs; Protolabs, which set them in epoxy), wood and particle board for hammer-in insert nuts (Wikipedia), soft metals such as aluminium and dense composites with special press-in inserts (McMaster-Carr).
- **Heat, cold, water and wear:** The insert holds only as well as the plastic gripping it. Formlabs warns that screw-to-expand inserts 'may loosen at elevated temperatures'. PLA starts to give at about 60 degrees C, PETG at 80 and ASA at 110 (CNC Kitchen oven test), so an insert in a PLA part in a hot car or near a motor can loosen. Plastics slowly relax under the constant squeeze of an interference fit, so grip may fall over time ⚑ [uncertain]. Vibration may loosen friction-held inserts ⚑ [uncertain]. Brass itself is unaffected by normal temperatures and damp.

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): print the hole slightly undersize and drill or ream it to the insert maker's size, then press the insert in (Hubs; Stratasys)
  - 3D print (resin): screw-to-expand inserts in SLA and SLS parts, fitted before post-curing or set in epoxy (Formlabs; Protolabs)
  - woodwork: hammer-in insert nuts and tee nuts in wood and particle board (Wikipedia; McMaster-Carr)
  - CNC: drilled or machined holes in plastic, composite or soft metal (McMaster-Carr) ⚑ [uncertain]
  - injection-moulded parts: pressed into moulded holes, the industrial use (PEM; SPIROL)
  - off-the-shelf part: the insert itself is always bought
- **Printing it in one piece (print in place):** partly: the part prints with a plain hole ready for the insert, and the bought metal insert is pressed or tapped in afterwards
- **Tools:** a drill (to open printed or moulded holes to an accurate size; Hubs, Stratasys) and an arbor press, a bench vice or a hammer with a flat punch to push or tap it in flush (Stratasys; SPIROL; Hubs; Accu). Expansion inserts can be pushed in by hand (PEM). Afterwards a screwdriver or hex key for the screw.
- **Difficulty:** easy: needs only a drill and a vice, press or hammer, with no heat; the only skill is getting the hole size right, so test in a scrap piece first (E-Z LOK)

### 3D printing tips

1) Hole size is everything: 'A hole that is too large will allow the insert to spin... A hole that is too small will compress the insert so much that the fastener cannot be installed' (E-Z LOK), and in solid-body inserts an undersized hole can crack the plastic (SPIROL, p. 5). Use the insert maker's hole size, and because printed holes are not exact, print slightly small and drill or ream to size (Hubs: 'an accurate [pilot hole](../glossary.md#pilot-hole) is required, so drilling is recommended'; Stratasys: 'Drill or ream the hole'). Test in scrap first (E-Z LOK), for example with a printed graduated-hole test block. 2) Hole depth: make it deeper than the insert, at least the insert length plus two thread [pitches](../glossary.md#pitch), so the screw never bottoms out and pushes the insert up (SPIROL, p. 5). 3) Walls: SPIROL's optimum [boss](../glossary.md#boss) diameter is 2-3 times the insert diameter, and cold-pressed inserts need even thicker walls because pressing them in stresses the plastic more (SPIROL, pp. 5-6); Hubs' minimum for any threaded hole in a print is a wall as thick as the screw diameter. More [perimeters](../glossary.md#perimeters) around the hole should help ⚑ [uncertain]. 4) Pressing: line the insert up with its pilot in the hole, then push it in with an arbor press, a vice or a drill press used as a press, using a flat surface so it goes in square, until it is flush (Stratasys; Accu); tap-in inserts are tapped in gently with a hammer (Hubs). Don't press at an angle (Accu). Expansion inserts are pushed in by hand until flush, then the screw is tightened slowly to spread them (PEM; Accu). 5) Material: Stratasys rates nylon 12 as the best FDM material for interference-fit inserts and polycarbonate as poor, because it holds surface stress; brittle PLA may crack around a tight insert ⚑ [uncertain], while tougher PETG or nylon should cope better ⚑ [uncertain]. 6) Layer direction: pressing an insert pushes outwards on the hole wall; a hole whose axis lies along the layers may split between layers more easily than one printed upright ⚑ [uncertain]. 7) For more grip, add a drop of superglue (CA) or epoxy when pressing in; Formlabs says this works in thermoplastic prints 'but won't have as strong a hold as a true heat-set installation'. In CNC Kitchen's tests, knurled brass (heat-set type) inserts glued cold into resin prints with thick CA held 52 kg on average ('How To use Threaded Inserts in Resin 3D Prints'). 8) Resin (SLA) prints: install screw-to-expand inserts after washing but before post-curing, with a screw in place, to reduce the chance of cracking the resin (Formlabs); Protolabs sets them in epoxy. 9) Avoid tapered inserts in thin walls or where the load pulls the insert through the part; they can crack the plastic (SPIROL, p. 6). 10) SPIROL's white paper for 3D prints: press the insert in with an arbor press for steady pressure (in softer plastics a hammer may do); give it a solid boss of at least 1.5 times its knurl diameter, and 2 times for full strength; use more than 50% [infill](../glossary.md#infill) and 0.16-0.2 mm layers; and remember that desktop printers hold hole sizes only to about ±0.3-0.5 mm, so either drill the hole (which can cut into an FDM part's reinforcing outer walls) or test hole sizes until one fits (SPIROL white paper 'How to Select a Threaded Insert for Your 3D Printed Assembly', 2026, pp. 2-5).

### Buying one (off-the-shelf parts)

Search supplier catalogues for 'press-in threaded inserts for plastic', 'press-fit inserts', 'screw-to-expand inserts', 'expansion inserts', 'tap-in inserts' or, for wood, 'hammer-in insert nuts', 'knock-in nuts' and 'tee nuts'. McMaster-Carr variants: screw-to-expand press-in inserts (also a flanged through-hole version), strong-grip screw-to-expand inserts with fins, twist-resistant hex-body press-in inserts, barbed press-in inserts, press-in inserts for soft metal and for composites, and hammer-in tee nuts with a four-pronged flange. PEM families: NFPA/NFPC hexagonal press-in inserts; PPA/PPB slotted brass; PFLA/PFLB flange-head slotted brass; PKA/PKB straight-knurl slotted brass. SPIROL Series 50 (symmetrical, with pilot) and Series 51 (headed) press-in inserts. E-Z Press (brand) slotted inserts (E-Z LOK). Tools: an arbor press or bench vice; press-in insert installation tools (McMaster-Carr lists them by insert type) ⚑ [uncertain]. Screws: ordinary machine screws.

## Rules of thumb

- Hole size is critical: larger holes lower the holding strength, smaller holes cause stress and cracks; for plastics with 15% or more filler make the hole 0.08 mm larger, and 0.15 mm larger at 35% or more (SPIROL Inserts for Plastics design guide, p. 5).
- Optimum boss diameter or wall: 2-3 times the insert diameter, the multiple falling as the insert gets bigger; cold-pressed inserts need bigger bosses or thicker walls than heat-installed ones (SPIROL design guide, pp. 5-6).
- Minimum hole depth for pressed or heat-installed inserts: insert length plus two thread pitches (1.2 times the length for self-tapping inserts); the screw must never bottom out (SPIROL design guide, p. 5).
- Install flush: no more than 0.13 mm (0.005 in) standing proud, and not below flush, which invites jack-out (SPIROL design guide, p. 5).
- M3 comparative values in nylon 6/6: press-in 330 N pull-out and 2 N m torque; heat or ultrasonic 1,000-2,000 N and 3-4 N m; self-tapping 2,650 N pull-out (SPIROL design guide, p. 21, 'a general comparative guide' only).
- Knurl choice: straight knurls resist twisting best, grooves between knurl bands resist pulling out, diamond knurls resist both; longer inserts resist pull-out more and wider inserts resist torque more (PEM 'Four Ways To Tackle Threaded Inserts For Plastics').
- Minimum wall around any threaded hole in a 3D print equal to the screw diameter, e.g. 5 mm for M5 (Hubs 'How to assemble 3D printed parts with threaded fasteners').
- For FDM parts, drill or ream the hole before press-fitting, and prefer nylon 12 for interference-fit inserts; avoid them in polycarbonate (Stratasys 'FDM Best Practice: Inserting Hardware Post-Build').
- Boss size, figures that differ by source: for 3D prints SPIROL's white paper asks for a solid boss of at least 1.5 times the insert's knurl diameter (2 times for maximum performance), plus more than 50% infill in FDM; its design guide for moulded plastics gives 2-3 times the insert diameter (SPIROL white paper 'How to Select a Threaded Insert for Your 3D Printed Assembly', 2026, p. 2; SPIROL design guide, pp. 5-6).
- In SLA resin (a thermoset that can't be heated to set an insert), press-in inserts are the most effective, self-tapping inserts a viable alternative with lower back-out torque, and expansion-style inserts the weakest (SPIROL white paper 'How to Select a Threaded Insert for Your 3D Printed Assembly', 2026, p. 2).

## Common failures

1) The insert spins when the screw is tightened: the hole is too big (E-Z LOK); drill a new hole or glue it in with CA or epoxy ⚑ [uncertain for the glue fix]. 2) The screw won't go in or binds: the hole was so small that it squeezed an expansion insert shut (E-Z LOK). 3) The plastic cracks or bulges around the insert: hole too small, walls too thin, a tapered insert in a thin boss, or a brittle material (SPIROL, pp. 5-6; PEM; Stratasys). 4) The insert pulls up out of the hole when tightening ('jack-out'): it was left below the surface, or the screw bottomed out in a hole that was too shallow (SPIROL, p. 5). 5) The insert went in crooked: use the insert's pilot, a press or vice, and a flat surface to push it square (SPIROL; Stratasys; Accu). 6) It works loose over time or in heat: an interference fit relies on the plastic staying tight (Formlabs); use a heat-set or glued insert for hot or vibrating parts. 7) Resin part cracks when the screw expands the insert: install the insert and screw before post-curing (Formlabs).

## Safety

Few hazards: keep fingers clear of an arbor press or vice when pressing, and wear eye protection when hammering or when a brittle part might crack and fly apart ⚑ [uncertain]. Some brass contains lead, and makers now offer lead-free brass, aluminium or stainless inserts (PEM; CNC Kitchen), so wash your hands after handling brass inserts ⚑ [uncertain].

## Related

- Heat-set threaded insert: melted in with a soldering iron; holds several times better in thermoplastic prints but needs heat and doesn't work in resin
- Captive nut pocket (nut trap): an ordinary nut in a printed hex pocket; no special insert needed, strong when the nut is pulled against solid plastic
- Screw-in threaded insert: a self-tapping insert with an outside thread that cuts into the hole, which SPIROL rates the strongest insert fitted after moulding, or a wire thread coil such as Helicoil (brand), which needs a tapped hole
- Rivet nut (rivnut): a threaded insert squeezed from one side to clamp a thin sheet
- Crush ribs and spring-fit features (compliant press fit): printed ribs that crush to hold a part in a hole without an insert
- Mid-print embedding (captive nuts, magnets and bearings): drop a nut in during a print pause so it is trapped for good
- Self-tapping screw into plastic (thread-forming screw): simplest, but plastic threads wear out after a few uses

## Make it yourself

- [Heat-Set Insert Test Block with Graduated Hole Sizes (Vladimir Gamalyan, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1444127-heat-set-insert-test-block-with-graduated-hole-siz): Parametric OpenSCAD block with a row of holes stepping up in 0.1 mm increments and guide tubes; its description lists 'testing hole tolerance for press-fit or interference-fit parts'. Print flat with 100% infill. Read through the Printables public API. *(licence: Creative Commons Public Domain)*
- [Threaded Insert Test Block (Joseph Marlin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/223069-threaded-insert-test-block): Test block with holes from 3.5 mm to 5.25 mm for finding the right hole for M4 threaded inserts; made for heat-set inserts but usable to check a press-fit ⚑ [uncertain for press-fit use]. Read through the Printables public API. *(licence: Creative Commons Public Domain)*

## Pictures, videos and models

- [Press-in Insert (Wikimedia Commons, by Dhruvvasoya91)](https://commons.wikimedia.org/wiki/File:Press-in_Insert.png): Photo of a knurled press-in threaded insert machined from free-cutting brass *(licence: CC BY-SA 4.0)*
- [Press-In Threaded Inserts (PEM / PennEngineering)](https://www.pemnet.com/products-overview/products-threaded-inserts/threaded-inserts-press-in-inserts/): Vendor page with an animation of the press-in installation process and pictures of slotted, flanged and hex press-in inserts *(licence: link only)*
- [SPIROL Inserts for Plastics design guide (PDF)](https://www.spirol.com/assets/files/SPIROL-Inserts-for-Plastics-us.pdf): Drawings of press-in, heat, self-tapping and moulded-in inserts, knurl types, correct and incorrect installation depth, and boss and hole design, plus comparative pull-out and torque tables *(licence: link only)*
- [FDM Best Practice: Inserting Hardware Post-Build (Stratasys, PDF)](https://www.sys-uk.com/wp-content/uploads/2016/01/BP_FDM_InsertingHardwarePostBuild.pdf): Photos of knurled and expansion inserts in FDM parts and pressing with an arbor press, with step-by-step press-fit, glue and heat-set methods *(licence: link only)*
- [These threaded inserts aren't made for 3D prints (but work amazingly well) (YouTube, Made with Layers (Thomas Sanladerer))](https://www.youtube.com/watch?v=lYXTiJo_FQQ): Video comparing M5 rivet nuts, hex-socket wood inserts, helical inserts, self-tapping inserts and tee nuts (prong nuts) in 3D prints (as described by Hackaday, April 2024); title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 18 sentences on this page marked [uncertain].
- ⚑ Research note: *Press-fit and expanding inserts* (179): expansion inserts perform 'least of all' (SPIROL) against a 'very good hold' (Formlabs); boss size 1.5-2× the knurl diameter (SPIROL's 3D-print paper) against 2-3× the insert diameter (SPIROL's moulded-plastics guide). SPIROL's resin press-in figures (7 N·m, 40 N) were left out as inconsistent.

## Sources

- <https://www.pemnet.com/products/engineering-guides/four-ways-to-tackle-threaded-inserts-for-plastics/>
- <https://www.pemnet.com/products-overview/products-threaded-inserts/threaded-inserts-press-in-inserts/>
- <https://www.pemnet.com/products/engineering-guides/si-threaded-inserts-for-plastic/>
- <https://www.spirol.com/assets/files/SPIROL-Inserts-for-Plastics-us.pdf>
- <https://www.sys-uk.com/wp-content/uploads/2016/01/BP_FDM_InsertingHardwarePostBuild.pdf>
- <https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/>
- <https://www.protolabs.com/resources/blog/threading-and-inserts-for-3d-printing/>
- <https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/>
- <https://www.ezlok.com/e-z-press-insert-installation>
- <https://www.accu.co.uk/p/486-threaded-inserts-fasteners-for-plastics-and-3d-printing>
- <https://www.mcmaster.com/products/threaded-inserts/>
- <https://www.mcmaster.com/products/threaded-inserts/thread-size~m3/>
- <https://en.wikipedia.org/wiki/Threaded_insert>
- <https://commons.wikimedia.org/wiki/File:Press-in_Insert.png>
- <https://www.cnckitchen.com/blog/how-to-use-threaded-inserts-in-resin-3d-prints>
- <https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament>
- <https://hackaday.com/2024/04/15/alternate-threaded-inserts-for-3d-prints/>
- <https://www.youtube.com/watch?v=lYXTiJo_FQQ>
- <https://api.printables.com/graphql/>
- <https://www.spirol.com/assets/files/inserts-for-3d-printed-assemblies-us.pdf>
