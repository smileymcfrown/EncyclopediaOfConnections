---
title: Multi-material interlock
description: When two printed materials that bond poorly (for example soft TPU and rigid PLA, or PP and PLA) are printed in
  one go, small beams or dovetails of each material are interlaced across the seam so the parts are locked together by shape
  rather than by adhesion.
num: 281
term: Multi-material interlock (co-printed mechanical interlocking; slicer 'interlocking structure' or 'beam interlocking')
plain_name: Printing a soft, rubbery plastic and a hard plastic in the same print, with the two woven into each other along
  the seam like interlaced fingers, so they hold together even though they don't stick to each other
aliases:
- material interlocking
- Generate Interlocking Structure (the UltiMaker Cura setting name, Cura 5.3 and later)
- beam interlocking / interlocking beams (Bambu Studio, OrcaSlicer and PrusaSlicer setting names)
- interlocking depth of a segmented region (an older PrusaSlicer/OrcaSlicer setting for painted multi-material regions)
- ITIL, interlaced topologically interlocking lattice (the research name of the pattern Cura uses; Kuipers et al. 2022)
- dovetail interlocking / mechanical interlock between materials (hand-designed versions)
- co-printed TPU and PLA, TPU/PLA hybrid print, dual-material print
- 'mechanical interlock in overmoulding (the injection-moulding equivalent: undercuts or holes that the soft material flows
  into)'
family: print-in-place & 3D-printing joints
other_families: [interlocking joints & joinery, compliant mechanisms & flexures]
finder:
  job: [join and hold, let it move]
  motion: none
  special_behaviour: []
  holding_principle: [shape, material bond]
  reuse_cycles: once
  seal: none
  access_needed: not applicable
  print_in_place: 'yes'
  maker_difficulty: moderate
  processes: [3D print (FDM)]
  connects: [3D-printed part, 'lid, door or cover']
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [hand tools]
  load_max: medium
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: permanent
  power: passive
needs_confirming:
  tools:
    kind: best guess
    reason: no tool named in `tools_needed`; defaulted to hand tools
confirmed: []
open_points:
- kind: content
  note: '*Multi-material interlock*: which plastics bond (Bambu: TPU and PETG bond easily, TPU and PLA poorly; UltiMaker:
    CPE and TPU incompatible). UltiMaker''s "only limited by the weakest material" overstates it: Kuipers et al. give an upper
    bound of 1/(1/σA + 1/σB).'
uncertain_fields: [seal, play_and_precision, environment_limits, safety_notes]
diagram_idea: Cut-away block, half blue (rigid) and half orange (flexible), with the seam zone exploded into three layers
  showing orange beams reaching into blue and blue into orange, turning 90° on each layer like woven fabric, next to a simple
  dovetail version and a note that the dovetail can slide out while the woven version cannot.
links:
- url: https://wiki.bambulab.com/en/software/bambu-studio/beam-interlocking
  title: Beam Interlocking in Bambu Studio (Bambu Lab Wiki)
  shows: Before-and-after slicer previews of a TPU/PETG/PLA test cube, and how beam width, direction, layer count, depth and
    boundary avoidance change the interlock pattern
  license: link only
- url: https://ultimaker.com/learn/unlock-true-multi-material-printing-with-ultimaker-cura-5-3/
  title: Unlock true multi-material printing with UltiMaker Cura 5.3 (UltiMaker)
  shows: Photos of the CPE and TPU crocodile clip and a sliced view of the interlocking pattern around its TPU hinge
  license: link only
- url: https://pure.tudelft.nl/ws/portalfiles/portal/103402631/1_s2.0_S2214860421006424_main.pdf
  title: 'ITIL: Interlaced Topologically Interlocking Lattice for continuous dual-material extrusion (Kuipers, Su, Wu and
    Wang, Additive Manufacturing 50, 2022)'
  shows: Diagrams comparing dovetail, cubic-lattice and interlaced-beam interlocks, unit-cell drawings, photos of PP/PLA grippers,
    a prosthetic hand and a box, and tensile test results
  license: CC BY 4.0
- url: https://www.thingiverse.com/thing:5842529
  title: CuraCrocClip [Cura 5.3 Interlocking Structure] (UltiMaker_Cura, Thingiverse)
  shows: Photos of the dual-material crocodile clip designed by Mariska Maas to demonstrate the interlocking settings
  license: CC BY 4.0
- url: https://www.protolabs.com/resources/design-tips/designing-for-overmolding/
  title: 'Design Tip: 3 key elements to consider when using overmolding (Protolabs)'
  shows: An image of a mechanical interlock between a rigid substrate and an overmoulded soft material, with design rules
    for hand-designed interlocks
  license: link only
make_it_yourself:
- url: https://www.thingiverse.com/thing:5842529
  title: CuraCrocClip [Cura 5.3 Interlocking Structure] (UltiMaker_Cura, Thingiverse)
  what_it_is: A rigid-plus-TPU crocodile clip with a flexible hinge, made to try Cura's interlocking settings on a dual-extrusion
    printer
  license: CC BY 4.0
- url: https://www.printables.com/model/11202-multi-material-hinged-roll-up-box-experiment-tpu-p
  title: Multi-Material hinged Roll-Up Box experiment.. TPU / PLA (Rainer, Printables) (URL from Printables API, page not
    opened)
  what_it_is: A TPU/PLA box with flexible hinges whose seam is hand-woven layer by layer, printed on a single-extruder Prusa
    MK3 with manual filament changes
  license: CC BY-NC
- url: https://www.printables.com/model/552894-charnieres-flexible-tpupla-flexible-hinges
  title: Charnières flexible TPU/PLA - Flexible hinges (Job, Printables) (URL from Printables API, page not opened)
  what_it_is: Small TPU/PLA hinges for doors, printed together on a Prusa XL tool changer
  license: CC BY-NC-SA
- url: https://www.printables.com/model/1521983-beam-interlocking-issue-demonstration
  title: Beam interlocking issue demonstration (Breakmate, Printables) (URL from Printables API, page not opened)
  what_it_is: A test model showing beam interlocking bridging the clearance gap of a print-in-place hinge; useful for checking
    your slicer before printing a real part
  license: CC Public Domain
- url: https://www.printables.com/model/66504-tpupla-hybrid-box-square-version
  title: TPU/PLA Hybrid Box - Square Version (3dprintedman, Printables) (URL from Printables API, page not opened)
  what_it_is: A hinged box printed with TPU for the first three layers and PLA for the rest (a filament change at a set layer);
    a simple way to try plain TPU/PLA layer bonding without any interlock, for comparison
  license: CC BY-SA
sources:
- https://ultimaker.com/learn/unlock-true-multi-material-printing-with-ultimaker-cura-5-3/
- https://ultimaker.com/learn/ultimaker-highlight-dual-extrusion-material-interlocking/
- https://www.thingiverse.com/thing:5842529
- https://raw.githubusercontent.com/Ultimaker/Cura/main/resources/definitions/fdmprinter.def.json
- https://wiki.bambulab.com/en/software/bambu-studio/beam-interlocking
- https://help.prusa3d.com/article/mutliple-extruders-settings-interlocking-advanced-bonding_867124
- https://help.prusa3d.com/article/combining-materials-xl_498103
- https://www.orcaslicer.com/wiki/print_settings/multimaterial/multimaterial_settings_advanced
- https://pure.tudelft.nl/ws/portalfiles/portal/103402631/1_s2.0_S2214860421006424_main.pdf
- https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8585249/fullTextXML
- https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12787935/fullTextXML
- https://www.protolabs.com/resources/design-tips/designing-for-overmolding/
- https://help.prusa3d.com/article/pla_2062
- https://help.prusa3d.com/article/petg_2059
- https://api.printables.com/graphql/
- https://www.printables.com/model/11202-multi-material-hinged-roll-up-box-experiment-tpu-p (URL from Printables API, page
  not opened)
- https://www.printables.com/model/552894-charnieres-flexible-tpupla-flexible-hinges (URL from Printables API, page not opened)
- https://www.printables.com/model/1521983-beam-interlocking-issue-demonstration (URL from Printables API, page not opened)
- https://www.printables.com/model/66504-tpupla-hybrid-box-square-version (URL from Printables API, page not opened)
research: research/connection-types/results/Multimaterial_interlock_coprinted_rigid_and_flexible_parts.json
---

When two printed materials that bond poorly (for example soft TPU and rigid PLA, or PP and PLA) are printed in one go, small beams or dovetails of each material are interlaced across the seam so the parts are locked together by shape rather than by adhesion.

**In plain words:** Printing a soft, rubbery plastic and a hard plastic in the same print, with the two woven into each other along the seam like interlaced fingers, so they hold together even though they don't stick to each other. **Proper term:** Multi-material interlock (co-printed mechanical interlocking; slicer 'interlocking structure' or 'beam interlocking').

**Also called:** material interlocking; Generate Interlocking Structure (the UltiMaker Cura setting name, Cura 5.3 and later); beam interlocking / interlocking beams (Bambu Studio, OrcaSlicer and PrusaSlicer setting names); interlocking depth of a segmented region (an older PrusaSlicer/OrcaSlicer setting for painted multi-material regions); ITIL, interlaced topologically interlocking lattice (the research name of the pattern Cura uses; Kuipers et al. 2022); dovetail interlocking / mechanical interlock between materials (hand-designed versions); co-printed TPU and PLA, TPU/PLA hybrid print, dual-material print; mechanical interlock in overmoulding (the injection-moulding equivalent: undercuts or holes that the soft material flows into).

## How it works

Some plastic pairs simply don't fuse when printed against each other, so a plain seam peels apart (Bambu Lab: TPU and PLA 'don't bond well'; UltiMaker: CPE and TPU are 'incompatible'). An interlock makes the two materials grip by shape instead: near the seam, the slicer replaces a thin zone with short beams of material A reaching into material B and vice versa, and alternates their direction layer by layer, so each material is threaded through the other like woven fabric. Because the beams cross over and under each other, the materials cannot be pulled apart without breaking beams, even if one is very flexible (Kuipers et al. call this topological interlocking, which unlike a jigsaw-style dovetail cannot be undone just by bending the parts). Designers can also do it by hand with dovetails, through-holes or undercuts that the second material flows into, as in injection overmoulding (Protolabs).

## Parts

single piece: the result is one printed part made of two (or more) materials. Its zones are the rigid body, the flexible body and a thin interlock zone between them where beams of each material alternate, crossing each other at right angles from layer to layer (Cura; Kuipers et al.). Hand-designed versions use dovetails, holes or undercuts in the rigid part that the soft material fills.

## Everyday examples

- A phone case with a hard back and soft TPU edges that would otherwise peel off as you pull the phone from your pocket (Bambu Lab wiki example)
- Tool handles and grips with soft rubbery areas, and electronics housings with a soft gasket moulded onto the cover (the injection-moulded equivalent, overmoulding; Bambu Lab; Protolabs)
- UltiMaker's crocodile clip: rigid jaws and a flexible TPU hinge printed as one working clip (CuraCrocClip)
- Printed boxes and cases with flexible TPU hinges built into rigid PLA shells (Printables)

## When to use it

Use it whenever one print must combine materials that don't stick to each other well, or might not: soft hinges, grips, bumpers, feet, seals, gaskets or springy clips in a rigid body; wear-resistant skins over a cheaper core (UltiMaker's Heineken can pusher has a nylon wear layer over a red PLA core that shows through when it wears out); dual-material jigs with a soft TPU face that won't scratch car paint (Volkswagen Autoeuropa, via UltiMaker). It removes the need for glue, fasteners or separate parts, and lets you combine materials without consulting a compatibility chart (UltiMaker). Turn it on even for pairs that bond reasonably, as cheap insurance against delamination at corners.

## When not to use it

Skip it if you only have a single-extruder printer and the seam is not horizontal (glue, screw or clip the parts instead, or use split-part joints). Skip it for very thin walls or tiny details where the beams don't fit or would show through (Bambu). Don't rely on it for heavily loaded structural joints between materials: it is always weaker than the weaker material (Kuipers et al.); design a mechanical joint or fastener instead. If you only need a flexible hinge, a single-material living hinge in PP (or a print-in-place pin hinge) avoids material changes entirely. If the part must come apart later, use a snap fit or screws.

## Details

- **What it does (jobs):**
  - join and hold: locks two different printed materials together permanently in one print, with no glue or screws
  - let it move (turn, slide or bend): makes one-piece parts with soft, bendable sections (TPU hinges, grips, bumpers, gaskets, springy clips) locked into rigid parts
- **Movement:** none at the seam: the two materials are locked together. Any movement comes from the soft material bending (flex), for example a TPU hinge in a rigid clip.
- **Directions it can move (degrees of freedom):** 0 at the joint itself: the interlock is a rigid, permanent join between the materials; the flexible material may then bend, which is a property of the part, not of the joint
- **Special behaviour:**
  - none: it is a permanent shape-locked join; its 'trick' is that it joins materials that will not bond, so a rigid part can carry built-in flexible sections
- **How it holds:**
  - shape (the parts interlock; form-fit): interlaced beams or dovetails of each material pass through the other
  - material bond (glue, solvent or melting): whatever fusion the two hot materials do achieve adds to the grip; Bambu Lab describes the result as 'both mechanical grip and thermal adhesion'
- **Input and output:** not applicable: it is a fixed joint that does not pass motion on
- **Power:** passive (no power needed)
- **Load:** Medium for a plastic joint, but always weaker than the weaker material: the strongest any interlock can be is 1 / (1/σA + 1/σB), because the two materials share the seam's cross-section; for Kuipers' PLA and PP that limit is 8.6 MPa, and all the interlocks they tested (their lattice and dovetails) reached 6-7 MPa, about three-quarters of it. Tested in pulling straight across a vertical seam; resistance to vertical (layer-direction) loads and to peeling was left for future work (Kuipers et al.). In bending, slicer-made interlocks raised the peak load of TPU-core sandwich beams by up to 15% and the energy absorbed by up to 51% (Polymers 2026 study). Note: UltiMaker's article claims the bond is 'only limited by the strength of the weakest of the two materials', which overstates it.
- **Play and precision:** none: the materials are fused and interwoven, so there is no play. Positional accuracy between the materials depends on how well the printer aligns its nozzles or tools ⚑ [uncertain]. Strength varies quite a lot from print to print; Kuipers et al. blame print-head position errors, filament diameter changes, temperature swings and even the position on the build plate.
- **Taking it apart:** permanent: the materials are interwoven during printing and can only be separated by breaking or cutting them
- **How often it can be reused:** once: it is made in the print and cannot be taken apart and put back
- **Sealing:** none as a feature: the interlock is not designed to seal ⚑ [uncertain whether the seam is watertight]; it is, however, used to lock soft gaskets into rigid frames, and the gasket does the sealing (UltiMaker)
- **Adjustable:** no: once printed it is fixed; the beam width, direction, layer count, depth and edge clearance are set in the slicer before printing
- **Access needed:** not applicable: it is formed inside the part during printing
- **Materials:** Typical pairs: a flexible TPU or TPE with a rigid PLA, PETG/CPE, nylon or ABS-type plastic, and PP with PLA (Kuipers et al.). Sources disagree on which pairs bond without help: Bambu Lab says TPU and PETG bond easily but TPU and standard PLA bond poorly; UltiMaker calls CPE (a PETG-like copolyester) and TPU 'incompatible'; a 2021 study (Brancewicz-Steinmetz et al., Materials 14) found the direct PLA-TPU bond depends on print settings, surface pattern and printing order, with an average shear strength of only about 0.37-0.39 MPa, and PLA printed on top of TPU gave the more consistent results. PLA and PETG barely stick to each other, which is why Prusa uses them as easy-release supports for each other. The interlock is most useful for the poorly bonding pairs, and also for pairs whose printing temperatures differ.
- **Heat, cold, water and wear:** Set by the weaker or less heat-resistant material: PLA softens above about 60 °C and degrades in UV light; PETG copes to about 80 °C and outdoors (Prusa). Because the materials are locked by shape, the joint does not age like a glue line, but a soft TPU under constant pull may creep and slowly ease out of the interlock ⚑ [uncertain: not tested in the opened sources]. The two plastics expand differently with heat, which may stress the seam in hot-cold cycles ⚑ [uncertain]. TPU absorbs a lot of moisture, which makes it string badly when printed (Prusa).

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): the only maker process for this: a multi-material FDM printer prints both materials and the slicer generates the interlock
  - 3D print (FDM) with manual filament changes: hand-designed, layer-by-layer weaving works for horizontal seams on a single-extruder printer (Rainer's roll-up box)
- **Printing it in one piece (print in place):** yes: the two materials print together and come off the printer already joined; no assembly, glue or fasteners (UltiMaker's CuraCrocClip prints as one working clip with a TPU hinge)
- **Tools:** A printer that can print two materials in one job (a tool changer, an IDEX or dual-nozzle printer, or a single nozzle with an automatic filament switcher), and a slicer with the interlocking setting (UltiMaker Cura 5.3 or later, Bambu Studio, OrcaSlicer or PrusaSlicer). For flat, horizontal seams a single-extruder printer can do it with manual filament changes at set layers (Rainer's TPU/PLA roll-up box on a Prusa MK3). No tools afterwards.
- **Difficulty:** moderate: the slicer setting is one tick box, but you need a multi-material printer, flexible filament that feeds reliably, good tool alignment, and a test print to check the bond

### 3D printing tips

1) Model the part as separate bodies (one per material) that touch or overlap, or paint regions, assign a filament to each, then turn on the interlock: Cura 'Generate Interlocking Structure' (visible in advanced/expert settings), Bambu Studio Global > Others > 'Use Beam Interlocking', OrcaSlicer 'Interlocking beam', PrusaSlicer Print Settings > Multiple Extruders > 'Use beam interlocking' (based on OrcaSlicer's). 2) Start with the defaults: beam width twice the outer wall line width (0.8 mm with a 0.4 mm nozzle), direction 22.5°, 2 layers per beam, depth 2 cells, boundary avoidance 2 cells (Cura). Bambu suggests 0.4-0.8 mm beams for small prints; at 0.2 mm the beams were too thin and a TPU membrane came loose. 3) Check the sliced preview at the seam to see the interlock pattern (UltiMaker). 4) Leave room: thin walls and fine details may not have space for the beams, and pushing beams away from the outer walls (boundary avoidance) improves the surface but weakens the edges (Bambu). 5) In Bambu Studio the interlock only works between parts of one object, not between separate objects (Bambu). 6) Keep print-in-place clearances away from the material seam: one maker reports beam interlocking bridging the gap of a print-in-place hinge (Printables 'Beam interlocking issue demonstration'). 7) TPU strings and soaks up moisture: dry it, and raise the purge volume (Prusa uses 35 mm³ for mixed-material prints and up to 70 mm³ for TPU stringing). When rigid filament is printed on top of TPU or TPE, it can push the soft layers around (Prusa). 8) Pick a stable prime/wipe tower: different materials may not stick to each other in the tower, so set one extruder to print the whole tower (Prusa). 9) Hand-designed interlocks: give the rigid part undercuts, dovetails or reverse-tapered or counterbored holes for the soft material to fill (Protolabs overmoulding guidance), and keep feature heights at least two layers (Kuipers et al.). Weaving layers by hand over several layers gave Rainer a TPU/PLA bond that 'cannot be separated without brute force'. 10) Always print a small test piece with your exact material pair and pull it apart before printing the real part.

### Buying one (off-the-shelf parts)

None in the joint itself. Needed: a multi-material printer (tool changer such as the Prusa XL, IDEX or dual-nozzle printers such as UltiMaker's, or a single-nozzle printer with an automatic filament changer such as Bambu Lab's AMS or Prusa's MMU, all brands), flexible filament (TPU, typically shore 95A as in UltiMaker's clip, or TPE), and a filament dryer is useful for TPU.

## Rules of thumb

- Cura defaults for 'Generate Interlocking Structure': beam width = 2 x outer wall line width (0.8 mm default), structure orientation 22.5°, beam layer count 2, interlocking depth 2 cells, boundary avoidance 2 cells; fewer beam layers is stronger but more prone to defects, and too few cells of depth gives poor adhesion (UltiMaker Cura setting definitions, fdmprinter.def.json). OrcaSlicer, Bambu Studio and PrusaSlicer use the same five settings.
- Beam width: about 0.4-0.8 mm suits small prints; 0.2 mm is too thin to hold TPU (Bambu Lab wiki).
- Strength ceiling: an interlock between materials A and B can never exceed 1 / (1/σA + 1/σB) (both yield strengths), which is always below the weaker material; for PLA (47 MPa) and PP (10.5 MPa) printed samples that gives 8.6 MPa, and real interlocks (lattice or dovetail) reached 6-7 MPa, about 75% of it (Kuipers et al., Additive Manufacturing 50, 2022).
- A plain PLA-TPU seam is weak: printed cylinders of PLA and TPU sheared apart at an average of only about 0.37-0.39 MPa, and the result depended on printing order and the surface pattern at the seam (Brancewicz-Steinmetz et al., Materials 14, 2021, via Europe PMC), which is why an interlock is worth adding.
- Make interlock beams at least two layers tall, and one layer of interlock cells along the seam is enough; for an interlock zone narrower than about 2.4 mm the 'straight' lattice beats the 'diagonal' one (Kuipers et al. 2022).
- Kuipers' lattice keeps every toolpath continuous, unlike a dovetail or cubic lattice that leaves small disconnected islands on some layers, which print badly (Kuipers et al. 2022).
- For moulded or hand-designed joints: add a mechanical interlock (an undercut in the rigid part, or reverse-tapered or counterbored holes the soft material flows into) whenever the bond matters; keep the soft layer no thicker than the rigid part under it and flush with or slightly below neighbouring rigid surfaces (Protolabs 'Designing for overmolding').
- Purge volume: 35 mm³ per change for mixed-material prints, up to 70 mm³ if TPU strings (Prusa 'Combining materials (XL)').

## Common failures

1) Seam peels apart: no interlock on a poorly bonding pair, or interlocking switched off or not applied (Bambu; UltiMaker): enable it and check the sliced preview. 2) Beams too thin or too few layers deep, so the soft material tears loose (Bambu: 0.2 mm beams let a TPU membrane detach; Cura: too few cells give poor adhesion). 3) Beams bridging the clearance of a print-in-place joint next to the seam, fusing it solid (Printables 'Beam interlocking issue demonstration'). 4) Beams showing through or weakening thin walls (Bambu): raise boundary avoidance or thicken the walls. 5) Interlock not generated between separate objects in Bambu Studio (Bambu): make the materials parts of one object. 6) Rigid filament dragging the soft layers below it out of place (Prusa). 7) Stringing and oozing of TPU into the other colour or material (Prusa): dry the TPU and raise the purge volume. 8) Prime tower collapsing because its layers of different materials don't stick (Prusa). 9) Big strength differences between nominally identical prints, from tiny printing errors (Kuipers et al.): test with margin.

## Safety

None known specific to the joint. Normal printer precautions apply: hot nozzles and bed, and a tool-changer printer's moving tools can pinch fingers ⚑ [uncertain: general advice].

## Related

- Living hinge: a thin flexing strip in one material (best in PP); no material change, but limited to materials that survive repeated bending
- Print-in-place hinge: a pin-and-knuckle hinge printed already assembled in one material; turns rather than bends
- Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins): join separately printed parts, usually of the same material, after printing
- Mid-print embedding: pausing a print to insert a nut, magnet or bearing, which the next layers lock in by shape
- Overmoulding / two-shot injection moulding: the factory version, where soft TPE or silicone is moulded over a rigid part with chemical bonding and mechanical interlocks (Protolabs)
- Adhesive bonding (e.g. cyanoacrylate, flexible craft glues): joins separately printed soft and rigid parts, but some plastics such as PP and PE are hard to glue
- Dovetail joint (woodwork): the same shape-locking idea used between wooden boards
- Compliant mechanisms and flexures: often the reason to combine a flexible and a rigid material in one print
- Printing onto fabric: pausing the print to lay in a mesh or fabric that the next layers lock through, joining cloth to plastic rather than two printed plastics

## Make it yourself

- [CuraCrocClip [Cura 5.3 Interlocking Structure] (UltiMaker_Cura, Thingiverse)](https://www.thingiverse.com/thing:5842529): A rigid-plus-TPU crocodile clip with a flexible hinge, made to try Cura's interlocking settings on a dual-extrusion printer *(licence: CC BY 4.0)*
- [Multi-Material hinged Roll-Up Box experiment.. TPU / PLA (Rainer, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/11202-multi-material-hinged-roll-up-box-experiment-tpu-p): A TPU/PLA box with flexible hinges whose seam is hand-woven layer by layer, printed on a single-extruder Prusa MK3 with manual filament changes *(licence: CC BY-NC)*
- [Charnières flexible TPU/PLA - Flexible hinges (Job, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/552894-charnieres-flexible-tpupla-flexible-hinges): Small TPU/PLA hinges for doors, printed together on a Prusa XL tool changer *(licence: CC BY-NC-SA)*
- [Beam interlocking issue demonstration (Breakmate, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1521983-beam-interlocking-issue-demonstration): A test model showing beam interlocking bridging the clearance gap of a print-in-place hinge; useful for checking your slicer before printing a real part *(licence: CC Public Domain)*
- [TPU/PLA Hybrid Box - Square Version (3dprintedman, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/66504-tpupla-hybrid-box-square-version): A hinged box printed with TPU for the first three layers and PLA for the rest (a filament change at a set layer); a simple way to try plain TPU/PLA layer bonding without any interlock, for comparison *(licence: CC BY-SA)*

## Pictures, videos and models

- [Beam Interlocking in Bambu Studio (Bambu Lab Wiki)](https://wiki.bambulab.com/en/software/bambu-studio/beam-interlocking): Before-and-after slicer previews of a TPU/PETG/PLA test cube, and how beam width, direction, layer count, depth and boundary avoidance change the interlock pattern *(licence: link only)*
- [Unlock true multi-material printing with UltiMaker Cura 5.3 (UltiMaker)](https://ultimaker.com/learn/unlock-true-multi-material-printing-with-ultimaker-cura-5-3/): Photos of the CPE and TPU crocodile clip and a sliced view of the interlocking pattern around its TPU hinge *(licence: link only)*
- [ITIL: Interlaced Topologically Interlocking Lattice for continuous dual-material extrusion (Kuipers, Su, Wu and Wang, Additive Manufacturing 50, 2022)](https://pure.tudelft.nl/ws/portalfiles/portal/103402631/1_s2.0_S2214860421006424_main.pdf): Diagrams comparing dovetail, cubic-lattice and interlaced-beam interlocks, unit-cell drawings, photos of PP/PLA grippers, a prosthetic hand and a box, and tensile test results *(licence: CC BY 4.0)*
- [CuraCrocClip [Cura 5.3 Interlocking Structure] (UltiMaker_Cura, Thingiverse)](https://www.thingiverse.com/thing:5842529): Photos of the dual-material crocodile clip designed by Mariska Maas to demonstrate the interlocking settings *(licence: CC BY 4.0)*
- [Design Tip: 3 key elements to consider when using overmolding (Protolabs)](https://www.protolabs.com/resources/design-tips/designing-for-overmolding/): An image of a mechanical interlock between a rigid substrate and an overmoulded soft material, with design rules for hand-designed interlocks *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 5 sentences on this page marked [uncertain].
- ⚑ Finder value `tools` = hand tools (best guess): no tool named in `tools_needed`; defaulted to hand tools
- ⚑ Research note: *Multi-material interlock*: which plastics bond (Bambu: TPU and PETG bond easily, TPU and PLA poorly; UltiMaker: CPE and TPU incompatible). UltiMaker's "only limited by the weakest material" overstates it: Kuipers et al. give an upper bound of 1/(1/σA + 1/σB).

## Sources

- <https://ultimaker.com/learn/unlock-true-multi-material-printing-with-ultimaker-cura-5-3/>
- <https://ultimaker.com/learn/ultimaker-highlight-dual-extrusion-material-interlocking/>
- <https://www.thingiverse.com/thing:5842529>
- <https://raw.githubusercontent.com/Ultimaker/Cura/main/resources/definitions/fdmprinter.def.json>
- <https://wiki.bambulab.com/en/software/bambu-studio/beam-interlocking>
- <https://help.prusa3d.com/article/mutliple-extruders-settings-interlocking-advanced-bonding_867124>
- <https://help.prusa3d.com/article/combining-materials-xl_498103>
- <https://www.orcaslicer.com/wiki/print_settings/multimaterial/multimaterial_settings_advanced>
- <https://pure.tudelft.nl/ws/portalfiles/portal/103402631/1_s2.0_S2214860421006424_main.pdf>
- <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8585249/fullTextXML>
- <https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12787935/fullTextXML>
- <https://www.protolabs.com/resources/design-tips/designing-for-overmolding/>
- <https://help.prusa3d.com/article/pla_2062>
- <https://help.prusa3d.com/article/petg_2059>
- <https://api.printables.com/graphql/>
- <https://www.printables.com/model/11202-multi-material-hinged-roll-up-box-experiment-tpu-p (URL from Printables API, page not opened)>
- <https://www.printables.com/model/552894-charnieres-flexible-tpupla-flexible-hinges (URL from Printables API, page not opened)>
- <https://www.printables.com/model/1521983-beam-interlocking-issue-demonstration (URL from Printables API, page not opened)>
- <https://www.printables.com/model/66504-tpupla-hybrid-box-square-version (URL from Printables API, page not opened)>
