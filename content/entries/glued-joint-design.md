---
title: Glued joint design
description: The rules for shaping a glued joint so that the glue is loaded in shear (the two faces sliding past each other)
  or compression over a wide area, and never peeled from one edge or split open like a wedge, because almost every glue is
  many times stronger in shear than in peel or cleavage.
num: 270
term: 'Adhesive joint design (bonded joint geometry): butt, lap (overlap) and scarf joints; shear, tension, compression, peel
  and cleavage loading'
plain_name: 'How to shape the faces you glue together so the glue is slid along (strong) rather than peeled or pulled straight
  apart (weak): overlap the parts, or cut long slanted ends, instead of just sticking two ends face to face'
aliases:
- glued joint, bonded joint, adhesive joint, glue line or bondline (Henkel LOCTITE design guide; Wood Handbook)
- butt joint, head-to-head joint, end-grain butt joint (Loctite manual; Wood Handbook)
- lap joint, overlap joint, single lap joint, offset joint; half lap, end lap, cross lap (Henkel; Wikipedia 'Lap joint')
- joggle lap joint; tapered or bevelled lap joint; double lap joint; double butt lap joint (3M; Loctite manual)
- strap joint, single strap, double strap, recessed or bevelled double strap (Henkel; Loctite manual)
- scarf joint, scarph joint, plain scarf, stepped scarf, stepped lap, landed scarf tongue and groove (Wikipedia 'Scarf joint';
  3M; Loctite manual)
- fingerjoint (finger joint) for lengthening timber (Wood Handbook)
- tongue-and-groove joint, cylindrical or slip joint, T-joint (3M; Henkel)
- 'load types: shear, tensile (tension), compressive, peel, cleavage; tests: lap shear (ASTM D1002, ISO 4587), T-peel (ISO
  11339), wedge (cleavage) test (Loctite manual)'
- hybrid joining (glue plus rivets, screws, spot welds or clinching) (Wikipedia 'Adhesive bonding')
family: adhesives & bonding
other_families: [interlocking joints & joinery, print-in-place & 3D-printing joints]
finder:
  job: [glue or bond, join and hold]
  motion: none
  special_behaviour: [self-aligning or self-centring]
  holding_principle: [shape, material bond]
  reuse_cycles: once
  seal: none
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [CNC, 3D print (FDM), laser cut, 3D print (resin), sheet metal, woodwork]
  connects: [any solid parts]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  glue_traits: [strongest]
  bonds_well: [wood]
  bonds_poorly: [PLA, PETG, ABS or ASA, slippery plastics (PE or PP), silicone, metal]
  tools: [press or vice, power tools, hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: permanent
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [making_tips_3d_printing]
diagram_idea: 'Four small side-view panels of the same glued strip being loaded: shear (arrows along the joint, glue stress
  shown evenly spread with small peaks at the ends), tension across a butt joint, cleavage (rigid parts levered open at one
  end) and peel (a flexible strip lifted like tape), each with a red bar showing where the glue stress piles up; below, the
  fixes: butt joint to lap, lap to tapered or joggle lap, and a long 1-in-10 scarf.'
links:
- url: https://multimedia.3m.com/mws/media/79082O/joint-design-for-structural-adhesives-technical-bulletin.pdf
  title: Joint Design for Structural Adhesives, Technical Bulletin (3M, November 2017)
  shows: Drawings of lap, joggle lap, tapered lap, double butt lap, double scarf lap, angle, butt, tongue-and-groove, cylindrical,
    corner and stiffener joints, rated good or fair for different loads
  license: link only
- url: https://commons.wikimedia.org/wiki/File:Woodworking-joint-scarf.gif
  title: Woodworking-joint-scarf.gif (Wikimedia Commons, SilentC)
  shows: Diagram of a plain scarf joint joining two boards end to end on a long slant
  license: CC BY-SA 3.0 / GFDL 1.2 (dual licensed)
- url: https://commons.wikimedia.org/wiki/File:Woodworking_lap_joints.svg
  title: Woodworking lap joints.svg (Wikimedia Commons, Fred the Oyster)
  shows: Half lap, mitred half lap, cross lap and dovetail lap joints
  license: CC BY-SA 4.0
- url: https://www.youtube.com/watch?v=n0LNrwTk9MQ
  title: Lap Shear Doesn't Measure Shear (Steven Abbott, YouTube; title confirmed via YouTube oEmbed)
  shows: Explanation, with an interactive model, of why a lap joint fails by peel at the ends of the overlap
  license: link only
- url: https://www.youtube.com/watch?v=3_9HR64bVus
  title: Shear Strength Adhesive Testing (LOCTITE North America, YouTube; title confirmed via YouTube oEmbed)
  shows: Manufacturer's video of lap-shear testing of bonded joints
  license: link only
make_it_yourself:
- url: https://www.stevenabbott.co.uk/practical-adhesion/g-rlap.php
  title: 'Lap Joint Models: Kendall & Goland-Reissner (Practical Adhesion Science, Prof. Steven Abbott)'
  what_it_is: 'Free interactive web app: enter the thickness and stiffness of the parts and the glue, the overlap and the
    width, and see where the shear and peel stresses peak along a lap joint'
  license: link only
- url: https://www.printables.com/model/236948-glue-strength-test-pieces
  title: Glue strength test pieces by MethodicalMaker (Printables) (URL from Printables API, page not opened)
  what_it_is: Printable shear, tensile and torque test pieces for comparing glues on 3D prints, with the author's method (80-grit
    sanding, washing, clamping, 5 days' cure, hanging scale with peak hold)
  license: CC BY
- url: https://www.printables.com/model/327466-glue-adhesion-strength-tester
  title: Glue Adhesion Strength Tester by TinkerTiger (Printables) (URL from Printables API, page not opened)
  what_it_is: Two printed testers glued face to face and pulled apart with a luggage scale; print flat or on the side to test
    different directions
  license: CC BY-SA
- url: https://www.printables.com/model/30133-glue-test-strips
  title: Glue Test Strips by kaje (Printables) (URL from Printables API, page not opened)
  what_it_is: Printed strips with a flat face and nesting hemispheres for comparing glues on PLA by flat versus shaped joints
  license: CC0 / Public Domain
sources:
- https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf
  (Henkel, The LOCTITE Design Guide for Bonding Plastics, Vol. 6, 'Adhesive Joint Design' pp. 77-81)
- https://multimedia.3m.com/mws/media/79082O/joint-design-for-structural-adhesives-technical-bulletin.pdf (3M Technical Bulletin
  'Joint Design for Structural Adhesives', 2017)
- https://industry.sika.com/dam/dms/global-industry/b/general-guidelinestructuralbonding.pdf (Sika Services AG, 'General Guideline
  Structural Bonding', July 2022, version 2)
- https://www.loctitex.com/en/manuals/bonding/5.1-adhesive-joint-design/
- https://www.loctitex.com/en/manuals/bonding/4.4-stresses-on-joints/
- https://www.loctitex.com/en/manuals/bonding/4.4.1-shear-stress/
- https://www.loctitex.com/en/manuals/bonding/4.4.4-peel-stress/
- https://www.loctitex.com/en/manuals/bonding/4.4.5-cleavage-stress/
- https://www.loctitex.com/en/manuals/bonding/5.1.3.1-head-to-head-or-butt-joints/
- https://www.loctitex.com/en/manuals/bonding/5.1.3.2-scarf-joint/
- https://www.loctitex.com/en/manuals/bonding/5.1.3.10-overlap-joint/
- https://www.loctitex.com/en/manuals/bonding/5.1.3.11-joggle-lap-joint/
- https://www.loctitex.com/en/manuals/bonding/5.1.3.13-double-lap-joint/
- https://www.loctitex.com/en/manuals/bonding/5.1.5-cylindrical-substrates/
- https://www.loctitex.com/en/manuals/bonding/5.1.6-joints-with-plastic-and-elastomeric-substrates/
- https://www.loctitex.com/en/manuals/bonding/5.2.1-summary-of-suitability-of-common-bonded-joint-types/
- https://www.loctitex.com/en/manuals/bonding/5.2.1.1-gap-requirements-for-bonded-assemblies/
- 'https://research.fs.usda.gov/treesearch/download/37422.pdf (Frihart and Hunt, ''Adhesives with Wood Materials: Bond Formation
  and Performance'', Wood Handbook FPL-GTR-190, 2010, ch. 10)'
- https://en.wikipedia.org/wiki/Scarf_joint (read as raw wikitext)
- https://en.wikipedia.org/wiki/Butt_joint (read as raw wikitext)
- https://en.wikipedia.org/wiki/Lap_joint (read as raw wikitext)
- https://en.wikipedia.org/wiki/Adhesive_bonding (read as raw wikitext)
- https://www.stevenabbott.co.uk/practical-adhesion/g-rlap.php
- https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
- https://www.printpool.co.uk/articles/how-to-join-and-bond-3d-printed-parts
- https://commons.wikimedia.org/wiki/File:Woodworking-joint-scarf.gif
- https://commons.wikimedia.org/wiki/File:Woodworking_lap_joints.svg
- https://www.youtube.com/watch?v=n0LNrwTk9MQ (verified via YouTube oEmbed)
- https://www.youtube.com/watch?v=3_9HR64bVus (verified via YouTube oEmbed)
- https://api.printables.com/graphql/ (Printables models 236948, 327466, 30133, 32037 and 1352973 read via the public API)
research: research/connection-types/results/Glued_joint_design_butt_lap_and_scarf_joints_peel_vs_shear.json
image: null
glossary: [stiffness, clearance, form-fit--force-fit--material-bond, spline, taper, repeatability--accuracy, creep, fatigue,
  stress-concentration, end-grain, cure, pot-life--working-time, primer, peel-vs-shear]
---

The rules for shaping a glued joint so that the glue is loaded in shear (the two faces sliding past each other) or compression over a wide area, and never peeled from one edge or split open like a wedge, because almost every glue is many times stronger in shear than in [peel](../glossary.md#peel-vs-shear) or cleavage.

**In plain words:** How to shape the faces you glue together so the glue is slid along (strong) rather than peeled or pulled straight apart (weak): overlap the parts, or cut long slanted ends, instead of just sticking two ends face to face. **Proper term:** Adhesive joint design (bonded joint geometry): butt, lap (overlap) and scarf joints; shear, tension, compression, peel and cleavage loading.

**Also called:** glued joint, bonded joint, adhesive joint, glue line or bondline (Henkel LOCTITE design guide; Wood Handbook); butt joint, head-to-head joint, end-grain butt joint (Loctite manual; Wood Handbook); lap joint, overlap joint, single lap joint, offset joint; half lap, end lap, cross lap (Henkel; Wikipedia 'Lap joint'); joggle lap joint; tapered or bevelled lap joint; double lap joint; double butt lap joint (3M; Loctite manual); strap joint, single strap, double strap, recessed or bevelled double strap (Henkel; Loctite manual); scarf joint, scarph joint, plain scarf, stepped scarf, stepped lap, landed scarf tongue and groove (Wikipedia 'Scarf joint'; 3M; Loctite manual); fingerjoint (finger joint) for lengthening timber (Wood Handbook); tongue-and-groove joint, cylindrical or slip joint, T-joint (3M; Henkel); load types: shear, tensile (tension), compressive, peel, cleavage; tests: lap shear (ASTM D1002, ISO 4587), T-peel (ISO 11339), wedge (cleavage) test (Loctite manual); hybrid joining (glue plus rivets, screws, spot welds or clinching) (Wikipedia 'Adhesive bonding').

## How it works

Glue carries load best when the whole glued area shares it: sliding the faces past each other (shear) or pressing them together (compression) spreads the load over the joint, while peel (a flexible part lifted from one end, like tape) and cleavage (rigid parts levered open at one end) put almost all the load on the first thin line of glue, which tears and then 'unzips' along the joint (Henkel LOCTITE design guide; Loctite manual; Sika). A butt joint only has the small end area and puts the glue in tension, and any bending turns that into cleavage, so it is the weakest joint (Loctite manual; 3M). A lap joint gives much more area and loads the glue in shear, but the offset makes it bend, so the ends of the overlap carry most of the load and failure starts there in peel (Sika; Steven Abbott). A scarf joint cuts both parts on a long slant so the glue area is many times the cross-section and the load runs along the glue line in shear; that is why scarfed or finger-jointed wood can reach up to about 90% of the strength of solid wood while an end-grain butt joint reaches only about 25% (Wood Handbook).

## Parts

A few parts: the two pieces being joined, a layer of glue, and sometimes an extra part such as a strap (splice plate), dowel, peg, [spline](../glossary.md#spline) or rivet. The design choices are the joint shape (butt, lap, joggle lap, tapered lap, double lap, strap, scarf, stepped lap, tongue and groove), the overlap length and width, the glue-line thickness and how the load reaches the joint.

## Everyday examples

- sticky tape, which is hard to slide off a surface (shear) but peels off easily when lifted from one corner (peel)
- finger-jointed and scarf-jointed timber and plywood, made by gluing long slanted ends together (Wood Handbook)
- car windscreens and body parts, which are bonded to the car body with adhesives (Wikipedia 'Adhesive bonding')
- a large 3D print split into pieces and glued back together, ideally with pegs and overlapping joints (Prusa; Printpool)

## When to use it

Whenever you glue parts that must carry load: splitting a 3D print that is too big for the printer, lengthening a board or strip, repairing a broken part, joining thin sheets, or bonding different materials that can't be screwed or welded. Choose a lap, double lap or strap joint for thin parts; a scarf or finger joint to lengthen wood, plywood or composite with an almost invisible glue line; tongue and groove or stepped laps when the parts must also locate themselves; and sockets or sleeves for rods and tubes. Glue spreads the load over the whole area without drilling holes, and can seal and damp at the same time (Wikipedia 'Adhesive bonding'; Loctite manual).

## When not to use it

Don't design a glued joint that will be peeled, levered open, or bent across a butt joint: redesign it into a lap, sleeve or strap, or add a mechanical fastener (Sika; Loctite manual). Don't glue when you need to take it apart again: use screws, snap fits or interlocking joints instead (Printpool). Don't rely on glue alone where failure would be dangerous (overhead loads, anything that holds people) or where it will get hot: glue strength drops with heat and ageing (Sika) and some glues [creep](../glossary.md#creep) (Wikipedia 'Adhesive bonding'); combine glue with rivets, screws or clinching (hybrid joining). Don't glue [end grain](../glossary.md#end-grain) to end grain in wood and expect strength; use a scarf, finger joint, dowel, mortise and tenon or biscuit (Wood Handbook). Hard-to-glue plastics (PE, PP, silicone) need a special adhesive or a mechanical joint.

## Details

- **What it does (jobs):**
  - glue or bond: joins parts permanently with an adhesive
  - join and hold: the joint shape decides how strong and stiff the glued connection is
- **Movement:** none
- **Directions it can move (degrees of freedom):** 0: once the glue has cured the parts are fixed together
- **Special behaviour:**
  - none: a glued joint has no mechanism; its 'clever' part is the geometry that turns peel and cleavage into shear and compression
  - self-aligning or self-centring (only for some shapes): tongue-and-groove, stepped lap and stepped scarf joints, pegs and landed scarfs locate the parts and can set the glue-line thickness, whereas plain butt, scarf and lap joints need a jig or clamps (Loctite manual joint suitability table; 3M; Prusa)
- **How it holds:** [material bond](../glossary.md#form-fit--force-fit--material-bond) (glue), sometimes helped by shape (tongue and groove, stepped laps, dovetails, pegs) or by added fasteners (hybrid joining: rivets, screws, clinching)
- **Input and output:** not applicable
- **Power:** passive (no power needed)
- **Load:** From light to heavy depending on the glue, the area and the shape: strong in shear and compression, weak in tension across a butt joint, and weakest in peel and cleavage, where stress is concentrated at one edge (Henkel; 3M; Sika). Lap joints are strongest when forces are parallel to the parts and weak when bent (Loctite manual; Printpool). In wood, an end-grain butt joint reaches only about 25% of the wood's tensile strength, a good scarf, finger or lap joint up to about 90% (Wood Handbook). In plastics and 3D prints the part itself often breaks before a well-designed bond (Henkel).
- **Play and precision:** None once cured. [Accuracy](../glossary.md#repeatability--accuracy) depends on how the parts are located while the glue [cures](../glossary.md#cure): plain butt, scarf and lap joints have no self-alignment, stepped laps and scarfs are better, and tongue-and-groove is best (Loctite manual joint suitability table); pegs or alignment pins help printed parts line up (Prusa; Printpool). The glue line must be even and the faces parallel, or the load goes off-axis and turns into cleavage (Loctite manual).
- **Taking it apart:** permanent: most structural glue joints can't be undone without damaging a part; cyanoacrylate can be dissolved with a debonder (Prusa gluing guide), and some glues are easier to remove than others (Wikipedia 'Adhesive bonding')
- **How often it can be reused:** once
- **Sealing:** none by design; a continuous, gap-free glue line with a water-resistant glue can also seal the joint (sealing is listed as a side benefit of bonding in Wikipedia 'Adhesive bonding'), but spot-glued joints do not seal
- **Adjustable:** no: position is fixed once the glue sets; only during the glue's [working time](../glossary.md#pot-life--working-time) (seconds for superglue, minutes to hours for epoxy and wood glue) can the parts be moved (Prusa)
- **Access needed:** not applicable: glue goes on the mating faces before the parts are put together; clamping usually needs access to both sides of the joint
- **Materials:** Applies to any glue and material. Wood: long grain to long grain (edge-grain joints) bonds almost as strong as the wood, end grain soaks up glue and bonds poorly (Wood Handbook). Plastics and 3D prints (PLA, PETG, ABS/ASA, resin): usually stiffer glues (epoxy, superglue) on rigid parts; plastics are more flexible than metals, so flexible adhesives are generally recommended and joints should be designed against peel (Loctite manual 5.1.6; Henkel). Metals and composites: joggle, tapered, double-lap, strap and scarf joints (3M; Loctite manual). Hard-to-bond plastics such as PE, PP and silicone need special adhesives regardless of joint shape (see the adhesive entries).
- **Heat, cold, water and wear:** Heat: adhesive strength and [stiffness](../glossary.md#stiffness) change with temperature; in Sika's example an epoxy kept only 58% of its room-temperature strength at 70 °C, and service temperatures from -20 °C to 80 °C can shift strength well away from datasheet values (Sika). Water and ageing: temperature, humidity, chemicals, radiation and mechanical stress all age bonds (Wikipedia 'Adhesive bonding'); in Sika's test three months under water kept 94% of the strength. Wood movement: wood swells far more across the grain than along it, so end-to-edge-grain joints build up large internal stresses as moisture changes and should be protected from changes in moisture content (Wood Handbook). [Fatigue](../glossary.md#fatigue): repeated loading greatly lowers the usable strength (Sika: to 39% for two million cycles). Creep: some adhesives slowly creep under constant load (Wikipedia 'Adhesive bonding'). Differential expansion between different materials stresses the glue line; flexible adhesives cope better (Wikipedia 'Adhesive bonding'; Loctite manual).

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): split large prints with lap, stepped-lap, tongue-and-groove or pegged glue faces instead of flat butt faces
  - 3D print (resin): the same joint shapes; superglue and epoxy bond resin prints
  - woodwork: scarf joints and finger joints to lengthen boards, half laps and edge-grain glue-ups
  - laser cut and CNC: slot-and-tab or stepped features that add glue area and locate the parts
  - sheet metal: joggle laps, straps and folded flanges bonded with structural adhesives
- **Printing it in one piece (print in place):** no: glued joints are made from separate parts that are glued after printing
- **Tools:** glue and mixing tools; clamps, clothes pegs, rubber bands or weights to hold the parts while the glue cures (Prusa); sandpaper and a solvent or soap to clean the faces (Prusa; Printables 'Glue strength test pieces'); for scarf joints in wood a plane, saw, router or scarfing jig to cut a long, even [taper](../glossary.md#taper); shims or spacer beads to set glue-line thickness (Loctite manual)
- **Difficulty:** easy for lap, stepped-lap and pegged joints (easy to model in CAD or cut with hand tools); moderate for scarf joints, which need a long, accurate, flat taper (1 in 8 to 1 in 12 in wood) and a jig or careful planing

### 3D printing tips

(1) Never rely on a flat butt joint between two printed faces: it has little area and loads the glue in tension, so it is the first to fail when knocked; use a lap joint, a tongue and groove (about twice the glue area of a simple lap and stronger in bending), a mortise and tenon or a dovetail, and round sharp corners, which act as stress raisers (Printpool). (2) Design so the joint is loaded in shear and compression, not peel: make the glued area wider rather than longer, because extra overlap length adds little strength while extra width adds strength almost in proportion (Henkel LOCTITE plastics guide; Sika). In plastics a long overlap is wasted: in one worked example of 1 in x 1/8 in plastic strips, an overlap of 0.58 in gave the same assembly strength as a longer one, because the plastic broke first (Henkel). (3) If you use a scarf in a plastic part, make the glued length at least four times the wall thickness (Loctite manual 5.1.6). (4) Add pegs or alignment pins so the parts line up and share the load (Prusa 'Modeling with 3D printing in mind'; Printpool). (5) Leave room for glue: for printed interlocking parts Formlabs suggests a 0.2 mm gap for small, thin parts and up to 0.4 mm for larger, chunkier ones (FDM needs more [clearance](../glossary.md#clearance) than resin), and, if the parts are glued, CA or two-part epoxy applied thoroughly because some glue soaks into the print surface (Formlabs). Rigid glues are strongest in thin, even glue lines of about 0.02-0.2 mm (Loctite manual), so avoid big gaps filled with glue. (6) Surface preparation: make the faces clean and level, sand if needed and remove the dust, and press or clamp the parts together while the glue cures (Prusa gluing guide); one glue tester sands faces with 80-grit paper, washes them with soap and waits 5 days before testing (Printables 'Glue strength test pieces'). (7) Remember print direction: FFF prints are stronger in one direction than another (Prusa), so a glued joint can be stronger than the layers next to it; place split lines so the load does not pull the layers apart ⚑ [uncertain: layer-direction advice inferred from Prusa's general statement]. (8) Epoxy warms up as it cures and can distort thin prints, so allow a slightly looser fit (Printpool). (9) For permanent, strong assemblies, let the joint shape carry the load and use the glue mainly to stop it loosening (Printpool).

### Buying one (off-the-shelf parts)

Adhesives (two-part epoxy, cyanoacrylate with activator and debonder, PVA wood glue, polyurethane, structural acrylic; see the adhesive entries); dowels, biscuits, splines and alignment pins to add shape and area; splice plates or straps for strap joints; clamps (bar, spring, F-clamps), clothes pegs and rubber bands (Prusa); scarfing jigs and guides for planes, routers and saws (woodwork); shims or glass spacer beads to control glue-line thickness (Loctite manual); rivets, screws and clinch tools for hybrid joints (Wikipedia 'Adhesive bonding').

## Rules of thumb

- Maximise shear and compression and minimise peel and cleavage: in peel and cleavage the stress sits at one end of the bond line, while in shear both ends resist it (Henkel, The LOCTITE Design Guide for Bonding Plastics, Vol. 6, p. 79, https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf; Sika, General Guideline Structural Bonding, 2022, sections 2.2-2.3, https://industry.sika.com/dam/dms/global-industry/b/general-guidelinestructuralbonding.pdf; 3M Technical Bulletin 'Joint Design for Structural Adhesives', 2017, https://multimedia.3m.com/mws/media/79082O/joint-design-for-structural-adhesives-technical-bulletin.pdf).
- 'Wider is better': increase joint width rather than overlap, because the ends of the overlap carry most of the load; a much longer overlap adds little if any strength (Henkel guide p. 79). Strength rises linearly with width but less and less with overlap, especially with rigid glues; two joints of equal area bonded with the same rigid epoxy differed by more than 10 MPa, the wider one being stronger (Sika, section 2.4 and Fig. 11).
- In plastic lap joints, [stress concentration](../glossary.md#stress-concentration) at the overlap ends falls with a shorter overlap (maximum stress ratio 22.5 at 1 in, 13.0 at 0.5 in, 7.17 at 0.25 in, 3.78 at 0.125 in), with a softer adhesive (22.4 at 300,000 psi modulus down to 1.13 at 200 psi) and with a thicker bondline (18.4 at 0.001 in down to 3.06 at 0.040 in) (Henkel guide p. 80, tables based on 0.125 in plastic, 0.5 in overlap, 100 lb load).
- Glue-line thickness: for rigid adhesives 0.02-0.20 mm, optimum about 0.1 mm; thicker gaps usually lower strength (Loctite 'Gap requirements for bonded assemblies', https://www.loctitex.com/en/manuals/bonding/5.2.1.1-gap-requirements-for-bonded-assemblies/); 3M gives typically 0.1-0.5 mm depending on the joint (3M bulletin); for stiff structural wood adhesives the strongest bonds are 0.08-0.15 mm (Wood Handbook ch. 10, p. 10-17).
- Wood end-grain butt joints reach only about 25% of the wood's tensile strength. To approach the strength of solid wood, a scarf or finger joint needs a glue area at least 10 times the cross-section, because wood is about 10 times stronger in tension than in shear; slopes of 1 in 12 or flatter give the highest strength, 1 in 8 is typical for structural plywood, and a well-made scarf, finger or lap joint can reach up to 90% of clear wood's tensile strength (USDA Forest Products Laboratory, Wood Handbook FPL-GTR-190, ch. 10, p. 10-18, https://research.fs.usda.gov/treesearch/download/37422.pdf). Scarf tapers are generally cut at 1:8 to 1:10, and vintage aircraft restorations need no steeper than 1:8 (Wikipedia 'Scarf joint', https://en.wikipedia.org/wiki/Scarf_joint).
- Clamping pressure for wood: about 0.7 MPa (100 psi) for low-density woods, up to 1.7 MPa (247 psi) for the densest; too much pressure squeezes out or drives in the glue and leaves a starved joint (Wood Handbook ch. 10, p. 10-16).
- A datasheet shear strength is only a starting point: in Sika's worked example a 28 MPa epoxy was reduced to an allowable 3 MPa after factors for 70 °C service temperature (x0.58), three months' water immersion (x0.94), two million fatigue cycles (x0.39) and a safety factor of 2 (Sika, section 2.5 'Dimensioning with material reduction factors').
- A single lap joint bends under load; reduce the end stress peaks with tapered (bevelled) ends, a joggle that brings the loads into line, a double lap or a double strap; use a scarf or stepped lap to make the stress even (Sika sections 2.3-2.4; 3M bulletin; Loctite manual 5.1.3.11-5.1.3.13, https://www.loctitex.com/en/manuals/bonding/5.1.3.11-joggle-lap-joint/). For thin plastic parts the double strap is one of the most effective joints, with straps of similar material and thickness (Loctite manual 5.1.6, https://www.loctitex.com/en/manuals/bonding/5.1.6-joints-with-plastic-and-elastomeric-substrates/).
- Avoid butt joints on rods and tubes; use a sleeve, socket or overlapping (slip) joint that adds bonded area and bending strength (Loctite manual 5.1.5, https://www.loctitex.com/en/manuals/bonding/5.1.5-cylindrical-substrates/; 3M bulletin).
- The standard lap-shear test mostly fails by peel at the ends of the overlap, and above a minimum overlap its length makes no difference to the breaking force (Steven Abbott, Practical Adhesion Science, https://www.stevenabbott.co.uk/practical-adhesion/g-rlap.php).

## Common failures

(1) Peeling or cleaving from one edge: a flexible part or a lever loads one edge; redesign to shear, stiffen the parts, taper the edges or add a fastener at the edge (Henkel; Sika; Loctite manual). (2) Butt joint snaps when bent or knocked: add area and shape (lap, tongue and groove, dowel, sleeve) (Loctite manual; Printpool). (3) Joint fails at the ends of a long, narrow overlap: make it wider rather than longer (Henkel; Sika). (4) Starved or thick glue lines: too much clamping pressure squeezes the glue out; too little or rough, badly fitting faces leave thick, weak, bubbly glue lines (Wood Handbook; Loctite manual). (5) Poor surface preparation: dust, grease, paint or old glue on the faces (Prusa). (6) End grain soaks up the glue (over-penetration), so the joint is weak (Wood Handbook). (7) The part breaks next to the glue line: in plastics and prints the substrate is often weaker than a good bond (Henkel), so strengthen the part or move the joint. (8) Parts moved during superglue's short setting time, which weakens the bond; clean off and start again (Prusa). (9) Failure after heat, water or many cycles because the datasheet strength was used without safety factors (Sika).

## Safety

Glue and solvent fumes: some adhesives, cleaning solvents and [primers](../glossary.md#primer) are hazardous and need proper handling and ventilation (Wikipedia 'Adhesive bonding'); don't breathe superglue fumes (Prusa). Superglue bonds skin in seconds, so wear gloves (Printpool), and it can react hot with cotton or wool, in extreme cases burning a hole and giving off smoke (Prusa). Epoxy gives off heat as it cures (Printpool). Structural safety: a glued joint that looks fine can fail suddenly in peel or after heat, damp or fatigue, and bonded joints can't be fully checked without breaking them (Wikipedia 'Adhesive bonding'); don't trust a glued joint alone with heavy or overhead loads.

## Related

- Two-part epoxy, cyanoacrylate (superglue), PVA wood glue, polyurethane glue, structural acrylic and the other adhesive entries: the glue itself; this entry is about the shape of the joint that any of them goes into
- Butt and lap wood joints (screwed, pocket-hole, half-lap): the same basic shapes held by screws as well as, or instead of, glue
- Dowel and biscuit joints: add shape and glue area to a weak butt joint in wood
- Finger joint (box joint) and dovetail joint: interlocking shapes with far more glue area than a butt joint
- Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins): printable shapes that locate and help carry load in glued prints
- Solvent welding (solvent cement): melts plastic faces together; the same shear-not-peel rules apply
- Double-sided foam tape: a pressure-sensitive adhesive that is very sensitive to peel; the same design rules apply
- Clinching and rivets: mechanical joints often combined with glue in hybrid joints to stop peel at the edges

## Make it yourself

- [Lap Joint Models: Kendall & Goland-Reissner (Practical Adhesion Science, Prof. Steven Abbott)](https://www.stevenabbott.co.uk/practical-adhesion/g-rlap.php): Free interactive web app: enter the thickness and stiffness of the parts and the glue, the overlap and the width, and see where the shear and peel stresses peak along a lap joint *(licence: link only)*
- [Glue strength test pieces by MethodicalMaker (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236948-glue-strength-test-pieces): Printable shear, tensile and torque test pieces for comparing glues on 3D prints, with the author's method (80-grit sanding, washing, clamping, 5 days' cure, hanging scale with peak hold) *(licence: CC BY)*
- [Glue Adhesion Strength Tester by TinkerTiger (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/327466-glue-adhesion-strength-tester): Two printed testers glued face to face and pulled apart with a luggage scale; print flat or on the side to test different directions *(licence: CC BY-SA)*
- [Glue Test Strips by kaje (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/30133-glue-test-strips): Printed strips with a flat face and nesting hemispheres for comparing glues on PLA by flat versus shaped joints *(licence: CC0 / Public Domain)*

## Pictures, videos and models

- [Joint Design for Structural Adhesives, Technical Bulletin (3M, November 2017)](https://multimedia.3m.com/mws/media/79082O/joint-design-for-structural-adhesives-technical-bulletin.pdf): Drawings of lap, joggle lap, tapered lap, double butt lap, double scarf lap, angle, butt, tongue-and-groove, cylindrical, corner and stiffener joints, rated good or fair for different loads *(licence: link only)*
- [Woodworking-joint-scarf.gif (Wikimedia Commons, SilentC)](https://commons.wikimedia.org/wiki/File:Woodworking-joint-scarf.gif): Diagram of a plain scarf joint joining two boards end to end on a long slant *(licence: CC BY-SA 3.0 / GFDL 1.2 (dual licensed))*
- [Woodworking lap joints.svg (Wikimedia Commons, Fred the Oyster)](https://commons.wikimedia.org/wiki/File:Woodworking_lap_joints.svg): Half lap, mitred half lap, cross lap and dovetail lap joints *(licence: CC BY-SA 4.0)*
- [Lap Shear Doesn't Measure Shear (Steven Abbott, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=n0LNrwTk9MQ): Explanation, with an interactive model, of why a lap joint fails by peel at the ends of the overlap *(licence: link only)*
- [Shear Strength Adhesive Testing (LOCTITE North America, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=3_9HR64bVus): Manufacturer's video of lap-shear testing of bonded joints *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 1 sentence on this page marked [uncertain].

## Sources

- <https://www.ellsworth.com/globalassets/literature-library/manufacturer/henkel-loctite/henkel-loctite-design-guide-plastic-bonding.pdf (Henkel, The LOCTITE Design Guide for Bonding Plastics, Vol. 6, 'Adhesive Joint Design' pp. 77-81)>
- <https://multimedia.3m.com/mws/media/79082O/joint-design-for-structural-adhesives-technical-bulletin.pdf (3M Technical Bulletin 'Joint Design for Structural Adhesives', 2017)>
- <https://industry.sika.com/dam/dms/global-industry/b/general-guidelinestructuralbonding.pdf (Sika Services AG, 'General Guideline Structural Bonding', July 2022, version 2)>
- <https://www.loctitex.com/en/manuals/bonding/5.1-adhesive-joint-design/>
- <https://www.loctitex.com/en/manuals/bonding/4.4-stresses-on-joints/>
- <https://www.loctitex.com/en/manuals/bonding/4.4.1-shear-stress/>
- <https://www.loctitex.com/en/manuals/bonding/4.4.4-peel-stress/>
- <https://www.loctitex.com/en/manuals/bonding/4.4.5-cleavage-stress/>
- <https://www.loctitex.com/en/manuals/bonding/5.1.3.1-head-to-head-or-butt-joints/>
- <https://www.loctitex.com/en/manuals/bonding/5.1.3.2-scarf-joint/>
- <https://www.loctitex.com/en/manuals/bonding/5.1.3.10-overlap-joint/>
- <https://www.loctitex.com/en/manuals/bonding/5.1.3.11-joggle-lap-joint/>
- <https://www.loctitex.com/en/manuals/bonding/5.1.3.13-double-lap-joint/>
- <https://www.loctitex.com/en/manuals/bonding/5.1.5-cylindrical-substrates/>
- <https://www.loctitex.com/en/manuals/bonding/5.1.6-joints-with-plastic-and-elastomeric-substrates/>
- <https://www.loctitex.com/en/manuals/bonding/5.2.1-summary-of-suitability-of-common-bonded-joint-types/>
- <https://www.loctitex.com/en/manuals/bonding/5.2.1.1-gap-requirements-for-bonded-assemblies/>
- <https://research.fs.usda.gov/treesearch/download/37422.pdf (Frihart and Hunt, 'Adhesives with Wood Materials: Bond Formation and Performance', Wood Handbook FPL-GTR-190, 2010, ch. 10)>
- <https://en.wikipedia.org/wiki/Scarf_joint (read as raw wikitext)>
- <https://en.wikipedia.org/wiki/Butt_joint (read as raw wikitext)>
- <https://en.wikipedia.org/wiki/Lap_joint (read as raw wikitext)>
- <https://en.wikipedia.org/wiki/Adhesive_bonding (read as raw wikitext)>
- <https://www.stevenabbott.co.uk/practical-adhesion/g-rlap.php>
- <https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://formlabs.com/blog/how-to-3d-print-interlocking-joints/>
- <https://www.printpool.co.uk/articles/how-to-join-and-bond-3d-printed-parts>
- <https://commons.wikimedia.org/wiki/File:Woodworking-joint-scarf.gif>
- <https://commons.wikimedia.org/wiki/File:Woodworking_lap_joints.svg>
- <https://www.youtube.com/watch?v=n0LNrwTk9MQ (verified via YouTube oEmbed)>
- <https://www.youtube.com/watch?v=3_9HR64bVus (verified via YouTube oEmbed)>
- <https://api.printables.com/graphql/ (Printables models 236948, 327466, 30133, 32037 and 1352973 read via the public API)>
