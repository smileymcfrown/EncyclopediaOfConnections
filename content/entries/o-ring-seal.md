---
title: O-ring seal
description: A ring of rubber with a round cross-section that sits in a groove and is squashed a set amount when two parts
  are closed, blocking the gap so liquids and gases can't leak through.
num: 130
term: 'O-ring seal (O-ring in a gland: face seal or radial seal)'
plain_name: A rubber ring that sits in a groove and gets squashed between a lid and a box (or a cap and a tube) so water,
  air and oil can't get past; the standard way to make a screw-on cap or a printed box truly watertight
aliases:
- O-ring, packing, toric joint (Wikipedia 'O-ring')
- O-ring gland or O-ring groove (the groove the ring sits in is called the gland; Parker O-Ring Handbook)
- face seal O-ring (ring squeezed between two flat faces, as in a lid or end cap) and radial seal or bore seal O-ring (ring
  on a plug squeezed against the inside of a tube) (Parker; Formlabs white paper; Blue Robotics)
- static O-ring seal (parts don't move) and dynamic O-ring seal (a rod slides or a shaft turns through it) (Wikipedia; Fictiv)
- dash-number O-ring or AS568 O-ring (US inch sizes, e.g. AS568-214), ISO 3601 metric O-ring, BS O-ring (British sizes BS001
  to BS932) (Wikipedia 'O-ring')
- 'X-ring, Q-ring or Quad-Ring (brand) and square ring or lathe-cut ring: related rings with other cross-sections (Wikipedia
  ''O-ring'')'
- spliced O-ring or O-ring cord (a custom-length ring glued from cord stock; Global O-Ring and Seal)
- rubber seal ring, sealing ring, seal washer (common shop names) [uncertain]
family: seals & pass-throughs
other_families: ['hydraulics, pneumatics & vacuum']
finder:
  job:
  - seal it, or pass cables or fluid through
  motion: none
  special_behaviour: []
  holding_principle: [not a holding joint]
  reuse_cycles: many times
  seal: airtight or pressure
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, 3D print (resin)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [none, hand tools]
  load_max: light
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [aliases, holding_principle, making_tips_3d_printing, when_not_to_use]
diagram_idea: 'A cut-away of a lid closing on a box: frame 1 shows the round rubber ring sitting loose in a rectangular groove
  with empty space around it; frame 2 shows the lid closed, the ring squashed into an oval touching the groove floor and the
  lid, with labels for squeeze (about 25%) and the empty quarter of the groove; frame 3 adds water pressure from outside,
  pushing the ring against the inner groove wall and tightening the seal.'
links:
- url: https://commons.wikimedia.org/wiki/File:O-ring_static_seal_usage_example.png
  title: O-ring static seal usage example (Wikimedia Commons, by Yapparina)
  shows: Cross-section drawing of a static O-ring seal between two parts, with the ring (black circles) sitting in its groove
  license: CC0 (public domain dedication)
- url: https://commons.wikimedia.org/wiki/File:Rectangular_groove_O_ring.png
  title: Rectangular groove O ring (Wikimedia Commons, by Yuri Raysper)
  shows: Dimensioned drawing of an O-ring in a rectangular groove
  license: Public domain
- url: https://commons.wikimedia.org/wiki/File:O-Rings_Assorted.jpg
  title: O-Rings Assorted (Wikimedia Commons, photo by William Rafti)
  shows: Photo of assorted rubber O-rings in different sizes and colours
  license: CC BY 2.5
- url: https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/
  title: 'Watertight 3D printing part 2: Airtight closable models (Prusa blog, 2024)'
  shows: Photos of printed flashlight, lock-box and camera housings tested under water to 30 m, comparing O-rings, printed
    gaskets and cast silicone seals
  license: link only
- url: https://formlabs.com/white-papers/3d-printing-watertight-enclosures-and-pressure-testing-results/
  title: 3D Printing Watertight Enclosures and Pressure Testing Results (Formlabs white paper)
  shows: Printed underwater housing with face-seal O-ring groove, O-ring sizing advice and implosion test results for SLA
    and SLS materials
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/12311-waterproof-housing-test-tpu-o-ring
  title: Waterproof Housing Test (TPU O-ring) (Sir Ged, Printables)
  what_it_is: Small screwed test housing with an O-ring groove, printed in pairs and tested with food colouring and paper
    towel; version 2 kept liquid in and out. Uses a printed TPU ring (swap in a rubber ring for a better seal). Details read
    through the Printables public API.
  license: CC BY (Creative Commons Attribution)
- url: https://www.printables.com/model/181253-edc-container-box-capsule-o-ring
  title: EDC Container Box Capsule + O Ring (Meister Edel, Printables) (URL from Printables API, page not opened)
  what_it_is: 'Screw-cap capsule in three versions (no ring, inner ring 23 x 2.5 mm, outer ring 25 x 2.5 mm), vacuum-tested:
    only the outer-ring version stayed dry and airtight at full vacuum. Printed TPU rings are included but the author says
    real rubber rings work better.'
  license: CC BY-NC-SA
- url: https://www.printables.com/model/429704-waterproof-container-o-ring-included
  title: Waterproof Container (O-ring included) (PointNemo, Printables) (URL from Printables API, page not opened)
  what_it_is: Threaded containers in three heights using a 34 x 2 mm O-ring; printed with 4 perimeters and the seam at the
    rear
  license: CC BY-NC-SA
- url: https://www.printables.com/model/582788-parametric-keychain-container-with-o-ring-groove
  title: Parametric Keychain Container with O-ring groove (Printables) (URL from Printables API, page not opened)
  what_it_is: Remix of a fully parametric screw-on container with an added O-ring groove, so you can size the container and
    groove to your ring
  license: CC BY-NC-SA
- url: https://www.youtube.com/watch?v=r2JtSLt809Q
  title: 'Model O-ring Grooves in a Box with Dividers - Fusion 360 Tutorial - #LarsLive 140 (Lars Christensen, YouTube)'
  what_it_is: CAD tutorial showing how to model an O-ring groove around a box lid in Fusion 360 (title and channel confirmed
    through YouTube oEmbed; video not watched)
  license: link only (standard YouTube licence)
sources:
- https://en.wikipedia.org/wiki/O-ring
- https://en.wikipedia.org/wiki/IP_code
- https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Parker-O-ring-handbook.pdf
- https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/
- https://www.fictiv.com/articles/nothing-gets-in-waterproof-enclosure-design-101-and-ip68
- https://formlabs.com/white-papers/3d-printing-watertight-enclosures-and-pressure-testing-results/
- https://formlabs.com/blog/watertight-3d-printing/
- https://bluerobotics.com/learn/watertight-enclosure-wte-assembly-new/
- https://hackaday.com/2026/05/30/testing-various-ways-to-waterproof-fdm-printed-parts/
- https://hackaday.io/project/185224/log/207087-3d-printed-weatherproof-enclosure
- https://www.globaloring.com/o-ring-splicing-kits/
- https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
- http://thrinter.com/creep-abs-pla-petg-alloy-910/
- https://commons.wikimedia.org/wiki/Category:O-rings
- https://commons.wikimedia.org/wiki/File:O-ring_static_seal_usage_example.png
- https://commons.wikimedia.org/wiki/File:Rectangular_groove_O_ring.png
- https://commons.wikimedia.org/wiki/File:O-Rings_Assorted.jpg
- https://api.printables.com/graphql/
- https://www.printables.com/model/12311-waterproof-housing-test-tpu-o-ring
- https://www.printables.com/model/181253-edc-container-box-capsule-o-ring
- https://www.printables.com/model/429704-waterproof-container-o-ring-included
- https://www.printables.com/model/582788-parametric-keychain-container-with-o-ring-groove
- https://www.youtube.com/watch?v=r2JtSLt809Q
research: research/connection-types/results/Oring_seal.json
image: null
glossary: [axial--radial, tolerance, chamfer--fillet, creep, lubrication, perimeters, infill, o-ring, gland]
---

A ring of rubber with a round cross-section that sits in a groove and is squashed a set amount when two parts are closed, blocking the gap so liquids and gases can't leak through.

**In plain words:** A rubber ring that sits in a groove and gets squashed between a lid and a box (or a cap and a tube) so water, air and oil can't get past; the standard way to make a screw-on cap or a printed box truly watertight. **Proper term:** [O-ring](../glossary.md#o-ring) seal (O-ring in a [gland](../glossary.md#gland): face seal or [radial](../glossary.md#axial--radial) seal).

**Also called:** O-ring, packing, toric joint (Wikipedia 'O-ring'); O-ring gland or O-ring groove (the groove the ring sits in is called the gland; Parker O-Ring Handbook); face seal O-ring (ring squeezed between two flat faces, as in a lid or end cap) and radial seal or bore seal O-ring (ring on a plug squeezed against the inside of a tube) (Parker; Formlabs white paper; Blue Robotics); static O-ring seal (parts don't move) and dynamic O-ring seal (a rod slides or a shaft turns through it) (Wikipedia; Fictiv); dash-number O-ring or AS568 O-ring (US inch sizes, e.g. AS568-214), ISO 3601 metric O-ring, BS O-ring (British sizes BS001 to BS932) (Wikipedia 'O-ring'); X-ring, Q-ring or Quad-Ring (brand) and square ring or lathe-cut ring: related rings with other cross-sections (Wikipedia 'O-ring'); spliced O-ring or O-ring cord (a custom-length ring glued from cord stock; Global O-Ring and Seal); rubber seal ring, sealing ring, seal washer (common shop names) ⚑ [uncertain].

## How it works

The groove is made slightly shallower than the ring is thick, so closing the parts squashes the ring by a set amount (the squeeze), and the rubber pushes back hard against both surfaces, closing every tiny gap (Parker, section 3.6). Rubber behaves almost like a liquid that can't be compressed, so when water or air pressure pushes on one side, the ring is shoved into the corner of the groove and presses even harder on the faces; that is why an O-ring can hold high pressure as long as the rubber isn't squeezed out through the gap (Wikipedia 'O-ring'). The groove must have spare room (about a quarter empty) so the rubber has somewhere to go when squashed, heated or swollen (Parker, section 3.7). The parts themselves are held together by something else; the O-ring only seals.

## Parts

A few parts: the rubber ring (O-ring), a groove (gland) cut or printed into one part, a smooth mating face or bore on the other part, and whatever holds the two parts closed (screws, a screw thread, a bayonet or clips). Optional: a thin film of O-ring grease, and for high pressure a plastic back-up ring (Parker O-Ring Handbook; Wikipedia).

## Everyday examples

- The rubber ring in a screw-on torch (flashlight) tail cap or dive-light housing (Prusa's threaded flashlight housing stayed dry at 30 m)
- The ring in a garden-hose quick connector (Printables 'Gardena TPU Gasket | 16mm O-Ring' replacement)
- Waterproof keychain capsules and pill containers with a screw lid (Printables 'EDC Container Box Capsule + O Ring')
- Hydraulic brakes and cylinders, and the joints of the Space Shuttle's rocket boosters (Wikipedia 'O-ring')

## When to use it

Use an O-ring when a joint must be really watertight or airtight and still open again: screw-cap containers, torch and sensor housings, underwater robot tubes, pipe and hose joints, and printed boxes with a round or rounded-rectangle lid. It is cheap, standard, reusable and the most reliable seal Prusa found for printed watertight models; it also works on a sliding rod or slow turning shaft if lubricated (a dynamic seal). Best when the opening is round or has generous corner radii, and when the parts can be made stiff enough to keep the ring evenly squeezed.

## When not to use it

Don't use one for a large or sharp-cornered flat lid (use a gasket or cord-in-groove gasket), where you only need to keep out dust and splashes and want no friction or wear (use a labyrinth seal), for a cable passing through a wall (use a cable gland), for a joint that never needs opening (glue it or use a silicone sealant), or on a fast-spinning shaft (use a lip seal or a labyrinth) (lip seal advice not verified) ⚑ [uncertain]. Avoid spliced rings in moving seals (Global O-Ring and Seal). Don't rely on a 3D-printed box with an O-ring for mains electrics or life-critical diving equipment; use a certified enclosure.

## Details

- **What it does (jobs):**
  - seal it, or pass cables or fluid through: keeps water, dust, air or oil in or out at a lid, cap, end cap, pipe joint or shaft
- **Movement:** none for a static seal (lids, caps, end caps). A dynamic O-ring lets a rod slide (slide) or a shaft turn (rotate) through it while still sealing, but needs less squeeze and [lubrication](../glossary.md#lubrication) (Parker, section 3.6; Wikipedia 'O-ring').
- **Directions it can move (degrees of freedom):** 0 in a static seal: the parts are fixed together by screws, a thread or clips. In a dynamic seal 1 (the rod slides or the shaft turns), but the O-ring does not guide that motion; a bearing or bushing must.
- **Special behaviour:**
  - none: it just seals. Its clever side is that it is pressure-assisted (self-energising): the fluid pressure pushes the ring harder into the gap, so the seal gets tighter as pressure rises, up to the point where the rubber is squeezed out (Wikipedia 'O-ring')
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it does not hold parts together; a screw thread, screws, a bayonet or latches do. It seals by spring force: the squashed rubber pushes back against both faces. A radial O-ring on a plug adds a little friction that helps keep a push-in cap in place ⚑ [uncertain]
- **Input and output:** not applicable
- **Power:** passive (no power needed)
- **Load:** light: it carries no useful load and must not be used to hold parts together. It pushes the parts apart with a steady force that depends on hardness, cross-section and squeeze (Parker, section 3.8), so the lid, screws or thread must be stiff enough to keep it squashed evenly.
- **Play and precision:** not applicable for locating: it does not position the parts. It is sensitive to size errors: a 1.78 mm ring squeezed 25% is only compressed about 0.45 mm, so a 0.2 mm error in a printed groove changes the squeeze a lot; thicker rings tolerate sloppier parts (Fictiv: choose cross-section from the [tolerance](../glossary.md#tolerance) of the surfaces; Formlabs: thicker O-rings behave better in printed parts). A radial seal tolerates a little sideways offset; a face seal needs the two faces to close flat and evenly.
- **Taking it apart:** removable: the ring lifts out of its groove and can be reused or replaced; the joint opens as easily as whatever closes it (tool-free for a screw cap, a screwdriver for a screwed lid). Use a plastic pick, not a metal one, so the groove isn't scratched (Blue Robotics WTE guide).
- **How often it can be reused:** many times: a clean, undamaged, lightly greased ring can be reused over and over; replace it when it is nicked, dirty, dried out or has taken a permanent flat shape (compression set) (Blue Robotics WTE guide; Parker, section 3.6; Fictiv). Spliced (glued) rings are for static use only (Global O-Ring and Seal).
- **Sealing:** airtight or pressure: the squeezed rubber ring closes the gap. Rated designs reach IPX7 (1 m under water for 30 min) and beyond (Fictiv; Wikipedia 'IP code'); printed SLA and SLS housings sealed with face-seal O-rings were pressure-tested until they imploded, at pressures equal to roughly 900-4,000 m of water (Formlabs white paper), and O-rings have been tested to 5,000 psi (34 MPa) (Wikipedia 'O-ring'). On an FDM print the weak point is usually the printed wall, not the O-ring (Prusa blog; Formlabs white paper).
- **Adjustable:** No: the squeeze is fixed by the groove depth, not by how hard you tighten, as long as the parts close face to face (Parker's design charts assume the parts touch metal-to-metal). To change it you change the groove, the ring's thickness, or its hardness.
- **Access needed:** not applicable: the ring sits between the two parts, so you fit it with the joint open. For a radial plug seal you need the open end of the tube (end of a tube or shaft).
- **Materials:** Rings: nitrile rubber (NBR, Buna-N), the cheap general-purpose choice, good with oils and greases, about -34 to -57 °C up to 100 °C, but not resistant to ozone and weathering; EPDM, good for water, steam, outdoors and silicone grease, but ruined by mineral oils and petroleum greases; fluoroelastomer (FKM, Viton (brand)) for heat, fuels and chemicals; silicone rubber for a very wide temperature range (about -55 to 200 °C) and food use, but weak and poor at wear; polyurethane (TPU) for toughness and wear (Parker, section 2.2; Wikipedia 'O-ring'). 70 Shore A is a common hardness (Blue Robotics uses Buna-N 70A). Housings: any rigid material; for printing, SLA resin seals best, SLS nylon works, FDM PLA or PETG work with thick, well-fused walls (Formlabs white paper; Prusa blog).
- **Heat, cold, water and wear:** Rubber choice sets the limits: nitrile (NBR) works from about -34 to -57 °C (by grade) up to 100 °C but cracks in ozone and sunlight outdoors; EPDM works to about -57 °C and 150 °C and resists weather and water but swells in mineral oils and petroleum grease; silicone works from about -55 to 200 °C (Parker, section 2.2). All rubbers stiffen near their cold limit and stop sealing, which caused the Challenger disaster (Wikipedia 'O-ring'). Rings slowly take a permanent flat shape under squeeze (compression set), faster when hot (Parker; Fictiv). The printed housing is often the weak link: PLA softens from about 60 °C and PETG from about 80 °C (CNC Kitchen), Prusa saw a PLA housing deform in a hot car, and PLA [creeps](../glossary.md#creep) under steady load (Thrinter), which can relax a screwed lid.

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: the O-ring itself is always bought (standard metric or AS568 sizes, or cut and glued from O-ring cord) (Wikipedia; Global O-Ring and Seal)
  - 3D print (resin): SLA gives the smoothest, densest sealing faces; SLA housings sealed with face-seal O-rings were pressure-tested until they imploded at 1,672-5,794 psi, far deeper than hobby use (Formlabs white paper)
  - 3D print (FDM): works for splash-proof and shallow-water boxes, caps and torches if walls are thick and well fused; Prusa's PLA housings with O-rings stayed dry at 20-30 m (Prusa blog)
  - 3D print (SLS): nylon housings sealed with O-rings (Formlabs white paper)
  - CNC (lathe or mill): the classic way; grooves are turned or milled to chart sizes (Parker)
  - laser cut: flat acrylic lids or windows pressed onto a face-seal O-ring in a printed housing (Formlabs white paper, URI Undersea Robotics and Imaging Lab)
- **Printing it in one piece (print in place):** no: the groove is printed into the housing but the rubber ring is a separate bought part. Printed TPU O-rings exist, but makers report they seal worse than real rubber rings (Printables 'EDC Container Box Capsule + O Ring'), and Prusa found printed flexible gaskets did not seal at all (Prusa blog).
- **Tools:** none to fit (fingers), plus the tool the closure needs (screwdriver or nothing for a screw cap). Useful: O-ring grease (silicone grease), a plastic O-ring pick, and a vacuum hand pump or a bowl of water to test for leaks (Blue Robotics WTE guide; Prusa blog)
- **Difficulty:** easy to moderate: buying a standard ring and drawing a groove from a chart is easy, but getting a 3D-printed housing truly watertight takes test prints, smooth sealing faces and leak-proof walls

### 3D printing tips

1) Buy the ring first, then design the groove around it from a chart (Parker face-seal chart 4-2, or a supplier calculator); don't guess. 2) Prefer a face seal (ring squeezed between a flat lid face and a groove) for printed parts; the URI Undersea Robotics lab found face seals the most reliable in printed housings (Formlabs white paper), and heavy-squeeze radial seals are hard to assemble (Parker, section 4.3). 3) Use a thick ring: Formlabs found 1/8 in (3.53 mm, '2-dash') rings the most reliable on SLA parts, and thicker rings tolerate printing errors better (Formlabs white paper); 2-2.5 mm rings are common in small printed screw-cap containers (Printables 'Waterproof Container', 'EDC Container'). 4) Make the walls watertight, not just the joint: at least 3-4 [perimeters](../glossary.md#perimeters) and 2-3 mm walls; for pressure, four perimeters and 60% [infill](../glossary.md#infill) or more (Prusa blog). PETG leaked through gaps between perimeters and infill in Prusa's tests, while PLA worked to 20 m (Prusa blog); Formlabs found its PLA test housing took on water at once, so results vary by printer and settings (Formlabs white paper). An internal epoxy coating was the best fix in a pressure test of FDM parts (Hackaday, 2026). 5) Make the faces the ring touches as smooth as possible: print them face-down on a smooth sheet or use ironing (Prusa blog). Tool marks that run along the ring seal well even if rough, but marks that cross the ring leak (Parker, section 4.1), so keep the Z seam off sealing surfaces (inference from Parker; one maker sets seam position to rear, Printables 'Waterproof Container'). 6) In a non-round groove, make the inside corner radii at least 3 times the ring's thickness (Parker, section 4.3). 7) Put the screws outside the ring, so screw holes are not leak paths (Hackaday.io 'OpenDendrometer' log), and space them closely or make the lid stiff so it can't bow between them (Fictiv). 8) Let the parts close face to face (a hard stop), so the groove depth, not your tightening, sets the squeeze (Parker charts assume metal-to-metal contact). 9) Print slower and a little hotter so layers fuse, check flow, and use 3-4 perimeters with 100% infill for small containers (Printables 'EDC Container'). 10) Grease the ring lightly with silicone grease before closing (Prusa blog; Blue Robotics), and test: put tissue paper inside and sink it, or pull a vacuum on it (Hackaday.io; Blue Robotics; Printables 'EDC Container'). 11) Printed groove sizes come out slightly off; print a test ring of groove sizes or order 2-3 ring sizes and test-fit (Formlabs white paper) (exact FDM allowance not verified) ⚑ [uncertain].

### Buying one (off-the-shelf parts)

O-rings in standard sizes: metric O-rings named by inside diameter x cross-section, e.g. '2x1 N70' (2 mm ID, 1 mm section, nitrile 70 Shore A); US AS568 dash-number sizes (e.g. AS568-214); ISO 3601-1 and BS sizes (Wikipedia 'O-ring'). Search 'O-ring assortment kit' (metric or AS568), 'O-ring cord' and 'O-ring splicing kit' (cord, cutting jig, blade and rapid-set glue, for custom rings in static seals) (Global O-Ring and Seal). Materials to ask for: NBR (Buna-N), EPDM, FKM (Viton, brand), silicone (VMQ). Lubricants: 'O-ring grease' or 'silicone grease', e.g. Molykote 111 (brand) (Blue Robotics) or Parker Super-O-Lube (brand) (Parker, section 3.1.5). Also 'back-up ring' (anti-extrusion ring, for high pressure; ISO 3601-4), 'O-ring pick' (plastic), and complete 'watertight enclosure' tubes and flanges for underwater robots (Blue Robotics).

## Rules of thumb

- Static seal squeeze: up to about 30% of the ring's thickness is the maximum for most rubbers, and a face seal benefits from about 30%; dynamic seals about 16% maximum (up to 25% for small sections) (Parker O-Ring Handbook ORD 5700A, section 3.6, p. 3-8).
- Minimum squeeze about 0.2 mm (0.007 in) for any ring; below about 0.1 mm almost all rubbers quickly take a 100% permanent set (Parker, section 3.6, pp. 3-8 to 3-9).
- Groove fill: the ring should fill 60-85% of the groove's volume, best about 75%, and never more than 90% (always leave at least 10% empty) (Parker, section 3.7, p. 3-9).
- Stretch: a ring fitted over a groove should be stretched no more than about 5%; above 2-3% the groove must be made shallower to keep the squeeze (Parker, section 3.5, p. 3-8). Fictiv: for a static seal pick a ring whose ID is about 1-5% smaller than the groove's inner diameter.
- Parker face-seal groove (Design Chart 4-2, p. 4-14): for a 1/8 in (0.139 in, 3.53 mm) ring, groove depth 0.101-0.107 in (about 2.6-2.7 mm, 20-30% squeeze) and width 0.177-0.187 in (about 4.5-4.75 mm) for liquids; for a 3/32 in (0.103 in, 2.62 mm) ring, depth 0.074-0.080 in (about 1.9-2.0 mm) and width 0.136-0.142 in (about 3.45-3.6 mm); for a 1/16 in (0.070 in, 1.78 mm) ring, depth 0.050-0.054 in (about 1.3 mm) and width 0.101-0.107 in (about 2.6-2.7 mm).
- Which wall the ring rests on: for pressure from inside (a bottle), size the groove's outside diameter to the ring's outside diameter; for pressure from outside (a box under water, or vacuum), size the groove's inside diameter to the ring's inside diameter, so pressure pushes the ring against the wall it already touches (Parker, Design Chart 4-2).
- Non-round (rectangular) face grooves: inside corner radii at least 3 times the ring's cross-section, or the ring creases and leaks (Parker, section 4.3, p. 4-3). Formlabs: 1/8 in rings manage groove bends as tight as 0.375 in (9.5 mm) radius.
- Printed SLA housings: groove depth 15-20% less than the ring's thickness worked for the URI lab (e.g. a 0.115 in groove for a 0.139 in ring = 17.2% squeeze) (Formlabs white paper).
- Surface finish of sealing faces: no rougher than 32 micro-inch (0.8 micrometre) RMS for liquids and 16 for gases; marks running along the ring are far less harmful than marks across it (Parker, section 4.1, p. 4-2).
- Parker's dovetail groove (to stop the ring falling out of a face groove) is expensive and 'not generally recommended'; use it only when necessary (Parker, pp. 4-3 and 4-15).

## Common failures

Leaks through the printed wall rather than past the ring (porous FDM layers; PETG leaked through perimeter gaps in Prusa's tests): use more perimeters, fuse layers well, or coat inside with epoxy. Too little squeeze because the groove is too deep, the ring too thin, or the lid bows between screws: follow the chart and stiffen the lid (Parker; Fictiv). Too much squeeze or an overfull groove, which cuts or squeezes the rubber out through the gap (extrusion, the most common failure; Wikipedia). Ring cut or pinched while fitting (installation damage; Wikipedia): break sharp edges, add lead-in [chamfers](../glossary.md#chamfer--fillet), grease it. Dirt, hair or lint on the ring (Blue Robotics). Wrong rubber: nitrile cracking outdoors from ozone, or EPDM swelling from petroleum jelly (Parker; one Printables maker suggests Vaseline, which suits nitrile but not EPDM). Corners too tight in a rectangular groove, creasing the ring (Parker). A flattened old ring (compression set): replace it. Printed TPU rings that leak (Printables 'EDC Container'). In long-stroke moving seals, the ring twists and cuts itself (spiral failure; Wikipedia).

## Safety

A well-sealed box traps pressure: gas from batteries or heat can build up inside, so underwater housings use a vent or pressure-relief valve, and a locked lid under pressure can fly off when opened (Blue Robotics WTE guide). Printed housings can suddenly implode or burst under test pressure (Formlabs white paper), so pressure-test behind a cover. Epoxy used to seal printed walls needs gloves and a respirator (Prusa blog). Don't trust printed housings with mains voltage or life-support diving gear.

## Related

- Gasket (flat, cord-in-groove or cast-in-place): the choice for non-round or large flat lids; a cord gasket is really an O-ring cord laid in a groove
- Labyrinth seal (baffle seal): keeps out dust and splashes without touching, so no wear or friction, but it is not watertight under water
- Cable gland and strain relief: uses a squeezed rubber insert to seal around a cable passing through a wall
- Printed screw thread: the usual way to squeeze an O-ring in a printed cap; the thread holds, the O-ring seals
- Bayonet mount (push-and-twist lock): a quick twist closure often used to squeeze an O-ring in camera and lamp housings
- Compression fitting (ferrule fitting): seals a pipe by crushing a metal or plastic ring instead of rubber
- Silicone and MS-polymer adhesive sealants: seal permanently, for joints that never need opening
- X-ring (Quad-Ring, brand) and square ring: rubber rings with other cross-sections; X-rings have less friction in sliding seals (Wikipedia)

## Make it yourself

- [Waterproof Housing Test (TPU O-ring) (Sir Ged, Printables)](https://www.printables.com/model/12311-waterproof-housing-test-tpu-o-ring): Small screwed test housing with an O-ring groove, printed in pairs and tested with food colouring and paper towel; version 2 kept liquid in and out. Uses a printed TPU ring (swap in a rubber ring for a better seal). Details read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- [EDC Container Box Capsule + O Ring (Meister Edel, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/181253-edc-container-box-capsule-o-ring): Screw-cap capsule in three versions (no ring, inner ring 23 x 2.5 mm, outer ring 25 x 2.5 mm), vacuum-tested: only the outer-ring version stayed dry and airtight at full vacuum. Printed TPU rings are included but the author says real rubber rings work better. *(licence: CC BY-NC-SA)*
- [Waterproof Container (O-ring included) (PointNemo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/429704-waterproof-container-o-ring-included): Threaded containers in three heights using a 34 x 2 mm O-ring; printed with 4 perimeters and the seam at the rear *(licence: CC BY-NC-SA)*
- [Parametric Keychain Container with O-ring groove (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/582788-parametric-keychain-container-with-o-ring-groove): Remix of a fully parametric screw-on container with an added O-ring groove, so you can size the container and groove to your ring *(licence: CC BY-NC-SA)*
- [Model O-ring Grooves in a Box with Dividers - Fusion 360 Tutorial - #LarsLive 140 (Lars Christensen, YouTube)](https://www.youtube.com/watch?v=r2JtSLt809Q): CAD tutorial showing how to model an O-ring groove around a box lid in Fusion 360 (title and channel confirmed through YouTube oEmbed; video not watched) *(licence: link only (standard YouTube licence))*

## Pictures, videos and models

- [O-ring static seal usage example (Wikimedia Commons, by Yapparina)](https://commons.wikimedia.org/wiki/File:O-ring_static_seal_usage_example.png): Cross-section drawing of a static O-ring seal between two parts, with the ring (black circles) sitting in its groove *(licence: CC0 (public domain dedication))*
- [Rectangular groove O ring (Wikimedia Commons, by Yuri Raysper)](https://commons.wikimedia.org/wiki/File:Rectangular_groove_O_ring.png): Dimensioned drawing of an O-ring in a rectangular groove *(licence: Public domain)*
- [O-Rings Assorted (Wikimedia Commons, photo by William Rafti)](https://commons.wikimedia.org/wiki/File:O-Rings_Assorted.jpg): Photo of assorted rubber O-rings in different sizes and colours *(licence: CC BY 2.5)*
- [Watertight 3D printing part 2: Airtight closable models (Prusa blog, 2024)](https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/): Photos of printed flashlight, lock-box and camera housings tested under water to 30 m, comparing O-rings, printed gaskets and cast silicone seals *(licence: link only)*
- [3D Printing Watertight Enclosures and Pressure Testing Results (Formlabs white paper)](https://formlabs.com/white-papers/3d-printing-watertight-enclosures-and-pressure-testing-results/): Printed underwater housing with face-seal O-ring groove, O-ring sizing advice and implosion test results for SLA and SLS materials *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 4 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/O-ring>
- <https://en.wikipedia.org/wiki/IP_code>
- <https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Parker-O-ring-handbook.pdf>
- <https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/>
- <https://www.fictiv.com/articles/nothing-gets-in-waterproof-enclosure-design-101-and-ip68>
- <https://formlabs.com/white-papers/3d-printing-watertight-enclosures-and-pressure-testing-results/>
- <https://formlabs.com/blog/watertight-3d-printing/>
- <https://bluerobotics.com/learn/watertight-enclosure-wte-assembly-new/>
- <https://hackaday.com/2026/05/30/testing-various-ways-to-waterproof-fdm-printed-parts/>
- <https://hackaday.io/project/185224/log/207087-3d-printed-weatherproof-enclosure>
- <https://www.globaloring.com/o-ring-splicing-kits/>
- <https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament>
- <http://thrinter.com/creep-abs-pla-petg-alloy-910/>
- <https://commons.wikimedia.org/wiki/Category:O-rings>
- <https://commons.wikimedia.org/wiki/File:O-ring_static_seal_usage_example.png>
- <https://commons.wikimedia.org/wiki/File:Rectangular_groove_O_ring.png>
- <https://commons.wikimedia.org/wiki/File:O-Rings_Assorted.jpg>
- <https://api.printables.com/graphql/>
- <https://www.printables.com/model/12311-waterproof-housing-test-tpu-o-ring>
- <https://www.printables.com/model/181253-edc-container-box-capsule-o-ring>
- <https://www.printables.com/model/429704-waterproof-container-o-ring-included>
- <https://www.printables.com/model/582788-parametric-keychain-container-with-o-ring-groove>
- <https://www.youtube.com/watch?v=r2JtSLt809Q>
