# seals & pass-throughs: Seals out water and dust, or carries cables and fluid across a joint

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 130 O-ring seal

*seals & pass-throughs.* A rubber ring squeezed in a groove between two parts to seal against water, air or oil; the most reliable way to make a printed enclosure watertight

### What it is

- **plain_name**: A rubber ring that sits in a groove and gets squashed between a lid and a box (or a cap and a tube) so water, air and oil can't get past; the standard way to make a screw-on cap or a printed box truly watertight
- **term**: O-ring seal (O-ring in a gland: face seal or radial seal)
- **aliases**: 
  - O-ring, packing, toric joint (Wikipedia 'O-ring')
  - O-ring gland or O-ring groove (the groove the ring sits in is called the gland; Parker O-Ring Handbook)
  - face seal O-ring (ring squeezed between two flat faces, as in a lid or end cap) and radial seal or bore seal O-ring (ring on a plug squeezed against the inside of a tube) (Parker; Formlabs white paper; Blue Robotics)
  - static O-ring seal (parts don't move) and dynamic O-ring seal (a rod slides or a shaft turns through it) (Wikipedia; Fictiv)
  - dash-number O-ring or AS568 O-ring (US inch sizes, e.g. AS568-214), ISO 3601 metric O-ring, BS O-ring (British sizes BS001 to BS932) (Wikipedia 'O-ring')
  - X-ring, Q-ring or Quad-Ring (brand) and square ring or lathe-cut ring: related rings with other cross-sections (Wikipedia 'O-ring')
  - spliced O-ring or O-ring cord (a custom-length ring glued from cord stock; Global O-Ring and Seal) *(unverified parts omitted)*
- **family**: seals & pass-throughs
- **other_families**: hydraulics, pneumatics & vacuum
- **one_liner**: A ring of rubber with a round cross-section that sits in a groove and is squashed a set amount when two parts are closed, blocking the gap so liquids and gases can't leak through.
- **complexity**: A few parts: the rubber ring (O-ring), a groove (gland) cut or printed into one part, a smooth mating face or bore on the other part, and whatever holds the two parts closed (screws, a screw thread, a bayonet or clips). Optional: a thin film of O-ring grease, and for high pressure a plastic back-up ring (Parker O-Ring Handbook; Wikipedia).
- **how_it_works**: The groove is made slightly shallower than the ring is thick, so closing the parts squashes the ring by a set amount (the squeeze), and the rubber pushes back hard against both surfaces, closing every tiny gap (Parker, section 3.6). Rubber behaves almost like a liquid that can't be compressed, so when water or air pressure pushes on one side, the ring is shoved into the corner of the groove and presses even harder on the faces; that is why an O-ring can hold high pressure as long as the rubber isn't squeezed out through the gap (Wikipedia 'O-ring'). The groove must have spare room (about a quarter empty) so the rubber has somewhere to go when squashed, heated or swollen (Parker, section 3.7). The parts themselves are held together by something else; the O-ring only seals.

### Finder attributes

- **job**: seal it, or pass cables or fluid through: keeps water, dust, air or oil in or out at a lid, cap, end cap, pipe joint or shaft
- **motion**: none for a static seal (lids, caps, end caps). A dynamic O-ring lets a rod slide (slide) or a shaft turn (rotate) through it while still sealing, but needs less squeeze and lubrication (Parker, section 3.6; Wikipedia 'O-ring').
- **degrees_of_freedom**: 0 in a static seal: the parts are fixed together by screws, a thread or clips. In a dynamic seal 1 (the rod slides or the shaft turns), but the O-ring does not guide that motion; a bearing or bushing must.
- **special_behaviour**: 
  - none: it just seals. Its clever side is that it is pressure-assisted (self-energising): the fluid pressure pushes the ring harder into the gap, so the seal gets tighter as pressure rises, up to the point where the rubber is squeezed out (Wikipedia 'O-ring')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: the ring lifts out of its groove and can be reused or replaced; the joint opens as easily as whatever closes it (tool-free for a screw cap, a screwdriver for a screwed lid). Use a plastic pick, not a metal one, so the groove isn't scratched (Blue Robotics WTE guide).
- **reuse_cycles**: many times: a clean, undamaged, lightly greased ring can be reused over and over; replace it when it is nicked, dirty, dried out or has taken a permanent flat shape (compression set) (Blue Robotics WTE guide; Parker, section 3.6; Fictiv). Spliced (glued) rings are for static use only (Global O-Ring and Seal).
- **tools_needed**: none to fit (fingers), plus the tool the closure needs (screwdriver or nothing for a screw cap). Useful: O-ring grease (silicone grease), a plastic O-ring pick, and a vacuum hand pump or a bowl of water to test for leaks (Blue Robotics WTE guide; Prusa blog)
- **seal**: airtight or pressure: the squeezed rubber ring closes the gap. Rated designs reach IPX7 (1 m under water for 30 min) and beyond (Fictiv; Wikipedia 'IP code'); printed SLA and SLS housings sealed with face-seal O-rings were pressure-tested until they imploded, at pressures equal to roughly 900-4,000 m of water (Formlabs white paper), and O-rings have been tested to 5,000 psi (34 MPa) (Wikipedia 'O-ring'). On an FDM print the weak point is usually the printed wall, not the O-ring (Prusa blog; Formlabs white paper).
- **load**: light: it carries no useful load and must not be used to hold parts together. It pushes the parts apart with a steady force that depends on hardness, cross-section and squeeze (Parker, section 3.8), so the lid, screws or thread must be stiff enough to keep it squashed evenly.
- **adjustable**: No: the squeeze is fixed by the groove depth, not by how hard you tighten, as long as the parts close face to face (Parker's design charts assume the parts touch metal-to-metal). To change it you change the groove, the ring's thickness, or its hardness.
- **play_and_precision**: not applicable for locating: it does not position the parts. It is sensitive to size errors: a 1.78 mm ring squeezed 25% is only compressed about 0.45 mm, so a 0.2 mm error in a printed groove changes the squeeze a lot; thicker rings tolerate sloppier parts (Fictiv: choose cross-section from the tolerance of the surfaces; Formlabs: thicker O-rings behave better in printed parts). A radial seal tolerates a little sideways offset; a face seal needs the two faces to close flat and evenly.
- **access_needed**: not applicable: the ring sits between the two parts, so you fit it with the joint open. For a radial plug seal you need the open end of the tube (end of a tube or shaft).
- **materials**: Rings: nitrile rubber (NBR, Buna-N), the cheap general-purpose choice, good with oils and greases, about -34 to -57 °C up to 100 °C, but not resistant to ozone and weathering; EPDM, good for water, steam, outdoors and silicone grease, but ruined by mineral oils and petroleum greases; fluoroelastomer (FKM, Viton (brand)) for heat, fuels and chemicals; silicone rubber for a very wide temperature range (about -55 to 200 °C) and food use, but weak and poor at wear; polyurethane (TPU) for toughness and wear (Parker, section 2.2; Wikipedia 'O-ring'). 70 Shore A is a common hardness (Blue Robotics uses Buna-N 70A). Housings: any rigid material; for printing, SLA resin seals best, SLS nylon works, FDM PLA or PETG work with thick, well-fused walls (Formlabs white paper; Prusa blog).
- **maker_difficulty**: easy to moderate: buying a standard ring and drawing a groove from a chart is easy, but getting a 3D-printed housing truly watertight takes test prints, smooth sealing faces and leak-proof walls

### Making it

- **processes**: 
  - off-the-shelf part: the O-ring itself is always bought (standard metric or AS568 sizes, or cut and glued from O-ring cord) (Wikipedia; Global O-Ring and Seal)
  - 3D print (resin): SLA gives the smoothest, densest sealing faces; SLA housings sealed with face-seal O-rings were pressure-tested until they imploded at 1,672-5,794 psi, far deeper than hobby use (Formlabs white paper)
  - 3D print (FDM): works for splash-proof and shallow-water boxes, caps and torches if walls are thick and well fused; Prusa's PLA housings with O-rings stayed dry at 20-30 m (Prusa blog)
  - 3D print (SLS): nylon housings sealed with O-rings (Formlabs white paper)
  - CNC (lathe or mill): the classic way; grooves are turned or milled to chart sizes (Parker)
  - laser cut: flat acrylic lids or windows pressed onto a face-seal O-ring in a printed housing (Formlabs white paper, URI Undersea Robotics and Imaging Lab)
- **print_in_place**: no: the groove is printed into the housing but the rubber ring is a separate bought part. Printed TPU O-rings exist, but makers report they seal worse than real rubber rings (Printables 'EDC Container Box Capsule + O Ring'), and Prusa found printed flexible gaskets did not seal at all (Prusa blog).
- **making_tips_3d_printing**: 1) Buy the ring first, then design the groove around it from a chart (Parker face-seal chart 4-2, or a supplier calculator); don't guess. 2) Prefer a face seal (ring squeezed between a flat lid face and a groove) for printed parts; the URI Undersea Robotics lab found face seals the most reliable in printed housings (Formlabs white paper), and heavy-squeeze radial seals are hard to assemble (Parker, section 4.3). 3) Use a thick ring: Formlabs found 1/8 in (3.53 mm, '2-dash') rings the most reliable on SLA parts, and thicker rings tolerate printing errors better (Formlabs white paper); 2-2.5 mm rings are common in small printed screw-cap containers (Printables 'Waterproof Container', 'EDC Container'). 4) Make the walls watertight, not just the joint: at least 3-4 perimeters and 2-3 mm walls; for pressure, four perimeters and 60% infill or more (Prusa blog). PETG leaked through gaps between perimeters and infill in Prusa's tests, while PLA worked to 20 m (Prusa blog); Formlabs found its PLA test housing took on water at once, so results vary by printer and settings (Formlabs white paper). An internal epoxy coating was the best fix in a pressure test of FDM parts (Hackaday, 2026). 5) Make the faces the ring touches as smooth as possible: print them face-down on a smooth sheet or use ironing (Prusa blog). Tool marks that run along the ring seal well even if rough, but marks that cross the ring leak (Parker, section 4.1), so keep the Z seam off sealing surfaces (inference from Parker; one maker sets seam position to rear, Printables 'Waterproof Container'). 6) In a non-round groove, make the inside corner radii at least 3 times the ring's thickness (Parker, section 4.3). 7) Put the screws outside the ring, so screw holes are not leak paths (Hackaday.io 'OpenDendrometer' log), and space them closely or make the lid stiff so it can't bow between them (Fictiv). 8) Let the parts close face to face (a hard stop), so the groove depth, not your tightening, sets the squeeze (Parker charts assume metal-to-metal contact). 9) Print slower and a little hotter so layers fuse, check flow, and use 3-4 perimeters with 100% infill for small containers (Printables 'EDC Container'). 10) Grease the ring lightly with silicone grease before closing (Prusa blog; Blue Robotics), and test: put tissue paper inside and sink it, or pull a vacuum on it (Hackaday.io; Blue Robotics; Printables 'EDC Container'). *(unverified parts omitted)*
- **off_the_shelf_parts**: O-rings in standard sizes: metric O-rings named by inside diameter x cross-section, e.g. '2x1 N70' (2 mm ID, 1 mm section, nitrile 70 Shore A); US AS568 dash-number sizes (e.g. AS568-214); ISO 3601-1 and BS sizes (Wikipedia 'O-ring'). Search 'O-ring assortment kit' (metric or AS568), 'O-ring cord' and 'O-ring splicing kit' (cord, cutting jig, blade and rapid-set glue, for custom rings in static seals) (Global O-Ring and Seal). Materials to ask for: NBR (Buna-N), EPDM, FKM (Viton, brand), silicone (VMQ). Lubricants: 'O-ring grease' or 'silicone grease', e.g. Molykote 111 (brand) (Blue Robotics) or Parker Super-O-Lube (brand) (Parker, section 3.1.5). Also 'back-up ring' (anti-extrusion ring, for high pressure; ISO 3601-4), 'O-ring pick' (plastic), and complete 'watertight enclosure' tubes and flanges for underwater robots (Blue Robotics).
- **rules_of_thumb**: 
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

### When to use it

- **everyday_examples**: 
  - The rubber ring in a screw-on torch (flashlight) tail cap or dive-light housing (Prusa's threaded flashlight housing stayed dry at 30 m)
  - The ring in a garden-hose quick connector (Printables 'Gardena TPU Gasket | 16mm O-Ring' replacement)
  - Waterproof keychain capsules and pill containers with a screw lid (Printables 'EDC Container Box Capsule + O Ring')
  - Hydraulic brakes and cylinders, and the joints of the Space Shuttle's rocket boosters (Wikipedia 'O-ring')
- **when_to_use**: Use an O-ring when a joint must be really watertight or airtight and still open again: screw-cap containers, torch and sensor housings, underwater robot tubes, pipe and hose joints, and printed boxes with a round or rounded-rectangle lid. It is cheap, standard, reusable and the most reliable seal Prusa found for printed watertight models; it also works on a sliding rod or slow turning shaft if lubricated (a dynamic seal). Best when the opening is round or has generous corner radii, and when the parts can be made stiff enough to keep the ring evenly squeezed.
- **when_not_to_use**: Avoid spliced rings in moving seals (Global O-Ring and Seal). Don't rely on a 3D-printed box with an O-ring for mains electrics or life-critical diving equipment; use a certified enclosure. *(unverified parts omitted)*
- **environment_limits**: Rubber choice sets the limits: nitrile (NBR) works from about -34 to -57 °C (by grade) up to 100 °C but cracks in ozone and sunlight outdoors; EPDM works to about -57 °C and 150 °C and resists weather and water but swells in mineral oils and petroleum grease; silicone works from about -55 to 200 °C (Parker, section 2.2). All rubbers stiffen near their cold limit and stop sealing, which caused the Challenger disaster (Wikipedia 'O-ring'). Rings slowly take a permanent flat shape under squeeze (compression set), faster when hot (Parker; Fictiv). The printed housing is often the weak link: PLA softens from about 60 °C and PETG from about 80 °C (CNC Kitchen), Prusa saw a PLA housing deform in a hot car, and PLA creeps under steady load (Thrinter), which can relax a screwed lid.
- **safety_notes**: A well-sealed box traps pressure: gas from batteries or heat can build up inside, so underwater housings use a vent or pressure-relief valve, and a locked lid under pressure can fly off when opened (Blue Robotics WTE guide). Printed housings can suddenly implode or burst under test pressure (Formlabs white paper), so pressure-test behind a cover. Epoxy used to seal printed walls needs gloves and a respirator (Prusa blog). Don't trust printed housings with mains voltage or life-support diving gear.
- **common_failures**: Leaks through the printed wall rather than past the ring (porous FDM layers; PETG leaked through perimeter gaps in Prusa's tests): use more perimeters, fuse layers well, or coat inside with epoxy. Too little squeeze because the groove is too deep, the ring too thin, or the lid bows between screws: follow the chart and stiffen the lid (Parker; Fictiv). Too much squeeze or an overfull groove, which cuts or squeezes the rubber out through the gap (extrusion, the most common failure; Wikipedia). Ring cut or pinched while fitting (installation damage; Wikipedia): break sharp edges, add lead-in chamfers, grease it. Dirt, hair or lint on the ring (Blue Robotics). Wrong rubber: nitrile cracking outdoors from ozone, or EPDM swelling from petroleum jelly (Parker; one Printables maker suggests Vaseline, which suits nitrile but not EPDM). Corners too tight in a rectangular groove, creasing the ring (Parker). A flattened old ring (compression set): replace it. Printed TPU rings that leak (Printables 'EDC Container'). In long-stroke moving seals, the ring twists and cuts itself (spiral failure; Wikipedia).
- **related**: 
  - Gasket (flat, cord-in-groove or cast-in-place): the choice for non-round or large flat lids; a cord gasket is really an O-ring cord laid in a groove
  - Labyrinth seal (baffle seal): keeps out dust and splashes without touching, so no wear or friction, but it is not watertight under water
  - Cable gland and strain relief: uses a squeezed rubber insert to seal around a cable passing through a wall
  - Printed screw thread: the usual way to squeeze an O-ring in a printed cap; the thread holds, the O-ring seals
  - Bayonet mount (push-and-twist lock): a quick twist closure often used to squeeze an O-ring in camera and lamp housings
  - Compression fitting (ferrule fitting): seals a pipe by crushing a metal or plastic ring instead of rubber
  - Silicone and MS-polymer adhesive sealants: seal permanently, for joints that never need opening
  - X-ring (Quad-Ring, brand) and square ring: rubber rings with other cross-sections; X-rings have less friction in sliding seals (Wikipedia)

### Pictures, videos and models

- **links**: 
  - [O-ring static seal usage example (Wikimedia Commons, by Yapparina)](https://commons.wikimedia.org/wiki/File:O-ring_static_seal_usage_example.png): Cross-section drawing of a static O-ring seal between two parts, with the ring (black circles) sitting in its groove *(licence: CC0 (public domain dedication))*
  - [Rectangular groove O ring (Wikimedia Commons, by Yuri Raysper)](https://commons.wikimedia.org/wiki/File:Rectangular_groove_O_ring.png): Dimensioned drawing of an O-ring in a rectangular groove *(licence: Public domain)*
  - [O-Rings Assorted (Wikimedia Commons, photo by William Rafti)](https://commons.wikimedia.org/wiki/File:O-Rings_Assorted.jpg): Photo of assorted rubber O-rings in different sizes and colours *(licence: CC BY 2.5)*
  - [Watertight 3D printing part 2: Airtight closable models (Prusa blog, 2024)](https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/): Photos of printed flashlight, lock-box and camera housings tested under water to 30 m, comparing O-rings, printed gaskets and cast silicone seals *(licence: link only)*
  - [3D Printing Watertight Enclosures and Pressure Testing Results (Formlabs white paper)](https://formlabs.com/white-papers/3d-printing-watertight-enclosures-and-pressure-testing-results/): Printed underwater housing with face-seal O-ring groove, O-ring sizing advice and implosion test results for SLA and SLS materials *(licence: link only)*
- **make_it_yourself**: 
  - [Waterproof Housing Test (TPU O-ring) (Sir Ged, Printables)](https://www.printables.com/model/12311-waterproof-housing-test-tpu-o-ring): Small screwed test housing with an O-ring groove, printed in pairs and tested with food colouring and paper towel; version 2 kept liquid in and out. Uses a printed TPU ring (swap in a rubber ring for a better seal). Details read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [EDC Container Box Capsule + O Ring (Meister Edel, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/181253-edc-container-box-capsule-o-ring): Screw-cap capsule in three versions (no ring, inner ring 23 x 2.5 mm, outer ring 25 x 2.5 mm), vacuum-tested: only the outer-ring version stayed dry and airtight at full vacuum. Printed TPU rings are included but the author says real rubber rings work better. *(licence: CC BY-NC-SA)*
  - [Waterproof Container (O-ring included) (PointNemo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/429704-waterproof-container-o-ring-included): Threaded containers in three heights using a 34 x 2 mm O-ring; printed with 4 perimeters and the seam at the rear *(licence: CC BY-NC-SA)*
  - [Parametric Keychain Container with O-ring groove (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/582788-parametric-keychain-container-with-o-ring-groove): Remix of a fully parametric screw-on container with an added O-ring groove, so you can size the container and groove to your ring *(licence: CC BY-NC-SA)*
  - [Model O-ring Grooves in a Box with Dividers - Fusion 360 Tutorial - #LarsLive 140 (Lars Christensen, YouTube)](https://www.youtube.com/watch?v=r2JtSLt809Q): CAD tutorial showing how to model an O-ring groove around a box lid in Fusion 360 (title and channel confirmed through YouTube oEmbed; video not watched) *(licence: link only (standard YouTube licence))*
- **diagram_idea**: A cut-away of a lid closing on a box: frame 1 shows the round rubber ring sitting loose in a rectangular groove with empty space around it; frame 2 shows the lid closed, the ring squashed into an oval touching the groove floor and the lid, with labels for squeeze (about 25%) and the empty quarter of the groove; frame 3 adds water pressure from outside, pushing the ring against the inner groove wall and tightening the seal.
- **sources**: 
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

### Other info

- **Fields with unverified parts:** aliases, holding_principle, making_tips_3d_printing, when_not_to_use

## 131 Gasket (flat, cord-in-groove or cast-in-place)

*seals & pass-throughs.* A soft layer or cord squeezed between a lid and a housing to seal an opening that isn't round, often pressed into a groove by a ridge on the lid

### What it is

- **plain_name**: A soft strip, sheet or bead of rubber, foam or silicone squashed between a lid and a box (or two flat flanges) so water and dust can't get through the seam; used when the opening is square or an odd shape
- **term**: Gasket (flat sheet gasket, cord-in-groove gasket, or formed-in-place / cured-in-place gasket)
- **aliases**: 
  - sheet gasket, cut gasket, soft cut gasket (cut or punched from flat sheet; Wikipedia 'Gasket')
  - face gasket (Fictiv) and flange gasket (between two pipe flanges; Wikipedia)
  - enclosure gasket, door gasket, panel gasket (Stockwell Elastomerics)
  - cord gasket, foam cord gasket, sealing cord, round silicone sealing cord (a rubber or foam cord laid in a groove; Hackaday.io 'OpenDendrometer'; Printables pb-tec box)
  - formed-in-place gasket (FIPG), liquid gasket, RTV gasket maker (liquid sealant applied wet and closed while uncured; ThreeBond Technical News 91; Permatex)
  - cured-in-place gasket (CIPG), dispensed gasket, poured-in-place gasket (bead cured before the parts are closed; ThreeBond; Stockwell mentions poured-in-place gaskets) *(unverified parts omitted)*
- **family**: seals & pass-throughs
- **other_families**: adhesives & bonding
- **one_liner**: A soft layer, cord or bead squeezed between two mating surfaces that fills their bumps and gaps so liquid and dust can't leak through the joint, even when the opening isn't round.
- **complexity**: A few parts: the soft seal (a flat sheet cut to shape, a cord or tube laid in a groove, or a bead of silicone dispensed onto one part), the two rigid parts it sits between (often a groove in the box and a ridge or tongue on the lid), and the screws, latches or clips that squeeze it (Wikipedia 'Gasket'; Hackaday.io 'Water Resistant 3D Printed Enclosures').
- **how_it_works**: A gasket is a soft, springy material squeezed between two parts so it fills their unevenness and closes the gap (Wikipedia 'Gasket'). It only seals while it stays squeezed, typically by about a quarter to a third of its thickness, and it keeps pushing back on the lid, so the screws or latches and the lid itself must be stiff enough to squeeze it evenly all the way round (Rogers Corporation; Fictiv). In a cord-in-groove design a round rubber or foam cord sits in a U-shaped groove and a narrow ridge on the lid presses into it, concentrating the force on a thin line (Hackaday.io 'Water Resistant 3D Printed Enclosures'). A formed-in-place gasket is a bead of liquid silicone that is closed while wet, sticking to both faces like glue; a cured-in-place gasket is cured first, so it acts like a moulded rubber gasket that sticks only to one part and can be opened again (ThreeBond Technical News 91).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: seals a lid, door, panel or flange against water and dust
  - glue or bond: a formed-in-place gasket also bonds the two faces together (ThreeBond Technical News 91)
- **motion**: none: gaskets are static seals; they are squeezed once and stay still (Wikipedia 'Gasket').
- **degrees_of_freedom**: 0: the gasket sits between parts that are fixed together by screws, latches or clips; it does not guide or allow any motion.
- **special_behaviour**: none: it just seals. A formed-in-place gasket is also an adhesive, so the joint becomes semi-permanent (ThreeBond Technical News 91)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): a flat, cord or cured-in-place gasket does not hold the parts together; screws, latches or clips do, and the gasket seals by spring force (the squashed rubber or foam pushes back on both faces)
  - material bond (glue, solvent or melting): a formed-in-place gasket cures while touching both faces and bonds them, acting as gasket and adhesive together (ThreeBond Technical News 91)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable for flat, cord and cured-in-place gaskets (the lid unscrews and the gasket can be reused while it still springs back); semi-permanent (can be undone but may damage parts) for a formed-in-place gasket, which bonds both faces and has poor removability (ThreeBond Technical News 91).
- **reuse_cycles**: a few times to many times for solid rubber and good closed-cell foam, as long as it still springs back (resists compression set); door gaskets that are opened often need a material chosen for rebound (Stockwell Elastomerics). *(unverified parts omitted)*
- **tools_needed**: screwdriver or nothing (latches) to close the joint. To make one: scissors, craft knife, hole punch or a laser cutter for sheet gaskets; a caulking gun and a spatula or printed mould for silicone gaskets; a flexible-filament printer for printed TPU gaskets (Prusa blog; Materials Education laser cutter guide)
- **seal**: watertight: a well-squeezed solid silicone or closed-cell sponge gasket in a stiff, well-fastened enclosure can meet IP67 (1 m under water for 30 minutes) and NEMA 6 (Stockwell Elastomerics 'Submerged Gaskets'; Wikipedia 'IP code'). Open-cell foam gaskets are only suggested for indoor enclosures against dust, dirt and at most dripping or light splashing (NEMA types 1, 2 and 12), so they are dust-resistant, not watertight (Stockwell 'Enclosure Gaskets'). What makes it seal is the squeeze of a soft material filling the gap.
- **load**: light: the gasket carries no useful load; it pushes the lid off with a steady force (its compression force deflection, CFD), from about 2 psi (14 kPa) at 25% compression for soft foams to over 40 psi (280 kPa) for firm ones, which can bend thin plastic lids, warp panels and overload snap-fit latches if too stiff (Rogers Corporation).
- **adjustable**: yes, a little: with a flat or foam gasket, tightening the screws squeezes it more, but over-squeezing makes it bottom out and take a permanent set, and uneven tightening causes leaks (Rogers; Wikipedia 'Gasket'). Designs with a hard stop (compression stop or limiter, or a wall that lands on the mating face) fix the squeeze and are not adjustable (Stockwell; ThreeBond).
- **play_and_precision**: not applicable for locating: it does not position the parts. It tolerates rough or wavy faces better than an O-ring, which is its main advantage (Wikipedia 'Gasket'), but only up to its spare squeeze: if the lid bows between screws by more than the gasket can make up, it leaks (Fictiv). *(unverified parts omitted)*
- **access_needed**: not applicable: the gasket sits between the two parts, fitted with the joint open.
- **materials**: Solid silicone rubber (10-70 Shore A; preferred for submersion because it holds up in salt water, resists UV and ozone and springs back well) (Stockwell 'Submerged Gaskets'); closed-cell sponge and foam (silicone, EPDM, neoprene, polyurethane such as PORON (brand)) for low closing force (Stockwell; Rogers); open-cell foam for dust only (Stockwell); cork, paper, fibre, felt, PTFE and metal for oil, fuel, heat and pipe flanges (Wikipedia 'Gasket'); silicone tubing or rubber cord for cord-in-groove (Hackaday.io); RTV silicone or UV-curing liquids for formed- or cured-in-place gaskets (Permatex; ThreeBond); printed TPU or foaming TPU for printed gaskets (CNC Kitchen; Prusa blog). The housing can be any rigid material; printed housings need thick, well-fused walls (Prusa blog).
- **maker_difficulty**: easy to moderate: cutting a flat gasket or laying silicone cord in a printed groove is easy, but getting an even squeeze all round with a printed lid and screws takes design care and testing; printed TPU gaskets are often too hard to seal

### Making it

- **processes**: 
  - off-the-shelf part: silicone or EPDM cord and tubing, foam weatherstrip, gasket sheet (rubber, cork, fibre), RTV silicone gasket maker (Permatex; pb-tec box; Hackaday.io)
  - laser cut: silicone rubber, cork and many rubber sheets cut well into flat gaskets, but never laser-cut neoprene or other chlorine-containing materials (Materials Education 'Materials for Laser Cutter Machines')
  - 3D print (FDM): print the housing with a groove and ridge; the gasket can be printed in TPU or cast in silicone in a printed mould (Printables pb-tec box; Prusa blog)
  - 3D print (resin): flexible resins were tried for printed gaskets by Prusa but did not seal between printed parts (Prusa blog)
  - cast in place: silicone caulk or two-part silicone poured into a groove or a printed mould (Prusa blog; Hackaday.io) *(unverified parts omitted)*
- **print_in_place**: no: the gasket is usually a separate cord, sheet or cast part fitted after printing. A multi-material printer can print a TPU seal fused onto a rigid part in one job (Printables 'Multi Material TPU Container Watertight'), but Prusa found printed flexible gaskets did not seal between printed parts (Prusa blog).
- **making_tips_3d_printing**: 1) Pick the seal type: a bought rubber or silicone cord (or silicone aquarium tubing) in a printed groove is the most dependable maker option; cast silicone in a printed mould comes next; a printed TPU gasket is the least reliable. Prusa printed gaskets in Flexfill 98A and 92A, FilaFlex 40 and flexible resin, with and without ironing, and none held water, even screwed down hard enough to strip threads (Prusa blog). Typical TPU is about 95 Shore A (CNC Kitchen), much harder than the 10-70 Shore A silicone used for submerged gaskets (Stockwell), so choose the softest flexible filament you can print, or foaming TPU, which reaches about 65 Shore A when printed hot (CNC Kitchen varioShore test); some makers report printed TPU gaskets working well for splash-proof boxes (Printables 'Waterproof Housing Test', 'Outdoor Enclosure for Govee Light Controller'). 2) Groove and ridge: put a U-shaped groove in the box rim and a ridge (tongue) on the lid that presses into the cord. One tested design used 6 mm silicone aquarium tubing in the groove; its first lid let a little water in during 1-2 hour soaks, while a rounded 2.5 mm ridge on the lid kept it dry at 10 minutes, 1 hour and 2 hours under water, and ridges pressing into a groove of cured silicone sealant did not seal at all (Hackaday.io 'Water Resistant 3D Printed Enclosures'). The pb-tec parametric box uses a groove and ridge for 1-3 mm silicone sealing cord or a printed TPU gasket (Printables). 3) Join cord ends carefully: slide a short piece of smaller tube into both cut ends, or glue the ends (Hackaday.io); for solid rubber cord, use an O-ring splicing kit (Global O-Ring and Seal). 4) Round the groove corners: at least 3 times the cord thickness, or the cord creases and leaks (Parker O-Ring Handbook, rectangular face seals). 5) Keep all screws outside the gasket line so screw holes can't leak (Hackaday.io 'OpenDendrometer'). 6) Use enough screws and a stiff lid: a lid screwed only at the corners bows open in the middle (Fictiv; Stockwell); add ribs or thickness to printed lids. 7) Aim for about 25-35% squeeze of the gasket (Rogers) and let the lid land on a hard stop so the squeeze can't be overdone. 8) Make the walls watertight too: 3+ perimeters, 2-3 mm walls, smooth sealing faces printed against the bed or ironed (Prusa blog). 9) Cast gaskets: print a two-piece mould and fill it with silicone caulk, or dispense a bead into the groove; it is messy and takes skill (Prusa blog). Letting a silicone bead cure in the groove before closing (cured-in-place) did not seal in one maker's test (Hackaday.io), so test before trusting it. 10) Wipe a thin film of silicone grease on the gasket (Printables 'Outdoor Enclosure for Govee Light Controller'; Prusa blog). 11) Test: tissue paper inside, sink it for 10 minutes to 2 hours, and check for damp (Hackaday.io).
- **off_the_shelf_parts**: Search for: 'silicone sealing cord' or 'silicone O-ring cord' (1-3 mm for small printed boxes; pb-tec), 'silicone tubing' (e.g. 6 mm aquarium tubing; Hackaday.io), 'EPDM foam cord' or 'closed-cell sponge cord', 'self-adhesive foam weatherstrip', 'gasket sheet' (silicone, EPDM, neoprene, cork, fibre) cut to shape, 'closed-cell silicone sponge sheet', 'PORON (brand) polyurethane foam' (Rogers), 'RTV silicone gasket maker' (e.g. Permatex Ultra Grey (brand), a formed-in-place gasket), 'O-ring splicing kit' for joining cord (Global O-Ring and Seal), 'compression limiter' (a metal sleeve that stops the gasket being over-squeezed under a screw; Stockwell), and ready-made 'IP65' or 'IP67 junction box' enclosures with gaskets. For EMI shielding there are electrically conductive gaskets (Stockwell).
- **rules_of_thumb**: 
  - Compression: choose a gasket slightly thicker than the final gap so it is squeezed about 25-35%; too much makes it bottom out and stop springing back, too little leaves leak paths (Rogers Corporation, 'The Mechanics of Enclosure Seal Design').
  - Closing force (CFD) at 25% compression: under 10 psi (about 70 kPa) for easy closing and plastic housings; 10-30 psi balanced; over 30 psi for heavy bolted enclosures (Rogers).
  - Wider seals leak much less: a 3.175 mm thick silicone gasket at 1.5 psi water pressure leaked 47.3 mL/min at 3.175 mm wide, 12 mL/min at 6.35 mm and 1.5 mL/min at 12.7 mm wide (Rogers).
  - Cured-in-place bead: conventional UV-cured beads were designed for 20-40% compression of the bead height; a single wall that lands on the mating face gives a stable compression ratio and shields the bead from water, oil and dust (ThreeBond Technical News 91, 2018).
  - Formed-in-place RTV silicone: 2-6 mm (1/16-1/4 in) bead on one surface around all bolt holes, assemble while wet, finger-tighten until it squeezes out, wait one hour, then tighten 1/4-1/2 turn more; skins in 1 hour, fully cures in 24 hours (Permatex Ultra Grey instructions).
  - Water versus dust: closed-cell foam, closed-cell sponge or solid rubber for rain, hosing or submersion (NEMA 3, 4, 6); open-cell foam only for dust and dripping water indoors (NEMA 1, 2, 12) (Stockwell 'Enclosure Gaskets').
  - Submersion (IP67, NEMA 6): 1 m depth; any small gap or under-compressed spot lets water flow in; use soft, low-durometer material, well-spaced fasteners, a rigid housing and a groove or adhesive backing to hold the gasket in place (Stockwell 'Submerged Gaskets').
  - Rectangular grooves for rubber cord: inside corner radii at least 3 times the cord diameter (Parker O-Ring Handbook ORD 5700A, section 4.3, rule for rectangular face seals with standard O-rings).
  - Flange faces: a machined finish of about 32 RMS is a common target; too smooth lets the gasket blow out, too rough or not flat leaves leak paths (Wikipedia 'Gasket').

### When to use it

- **everyday_examples**: 
  - The rubber seal round a rugged phone's battery cover, rated IP67 (Wikimedia Commons photo of a CAT B25 cover)
  - The silicone ring in the lid of a clip-lock food storage box (Prusa tested a printed copy of a Lock&Lock (brand) box with a gasket)
  - The gasket under a car engine's valve cover or cylinder head (Wikipedia 'Gasket', see also 'Head gasket')
  - The seal round the door of an outdoor electrical cabinet or junction box (Stockwell 'Enclosure Gaskets')
- **when_to_use**: Use a gasket to seal a lid, door, panel or flange that is square, long or an odd shape, where a round O-ring won't fit, and where the faces are not perfectly flat or smooth, since the soft material fills the unevenness. It suits printed and moulded project boxes, junction boxes, outdoor sensor cases, access panels and pipe flanges, and splash-proof to briefly submersible boxes. Choose a cord-in-groove gasket for printed boxes that you open now and then, a flat foam or sheet gasket for light dust and splash sealing, and a formed-in-place silicone bead for a joint you rarely or never open.
- **when_not_to_use**: For a round opening that must be really watertight or hold pressure, use an O-ring (Prusa found O-rings far more reliable than gaskets at depth). For a moving shaft or rod, use an O-ring, lip seal or labyrinth seal, since gaskets are static only. To keep out only dust and rain with no rubber to wear or lose, a labyrinth (overlapping lip) may be enough. For cables through the wall, use a cable gland. For a permanently closed joint, a silicone sealant or glue is simpler. Avoid thin, flexible printed lids with few screws for anything that must survive immersion; they bow and leak.
- **environment_limits**: Silicone gaskets resist UV, ozone and salt water and spring back well; other rubbers and foams age faster (Stockwell). Gasket life depends on UV, ozone, temperature, chemicals and wear (Stockwell 'Enclosure Gaskets'). All rubbers and foams slowly creep and take a permanent set under constant squeeze, so old gaskets stop springing back (Fictiv; Rogers). Rain on a hot box cools it and creates suction that can pull pooled water in past a gasket, so vent the enclosure (Stockwell). RTV silicone needs about 24 hours to cure, longer when cold or dry (Permatex). Printed housings soften: PLA from about 60 °C, PETG about 80 °C, ASA about 110 °C (CNC Kitchen), and PLA lids creep under the steady push of the gasket (Thrinter).
- **safety_notes**: Never laser-cut neoprene, PVC or other chlorine-containing gasket sheet: it gives off toxic, corrosive hydrogen chloride gas; if you don't know what the rubber is, don't cut it (Materials Education 'Materials for Laser Cutter Machines'). Epoxy used to seal printed walls needs gloves and a respirator (Prusa blog). A gasketed printed box is not a certified enclosure: use a proper IP-rated box for mains voltage (Printables 'Outdoor Enclosure for Govee Light Controller' author's note).
- **common_failures**: Printed TPU gasket too hard to fill the gaps, so it leaks however hard you tighten (Prusa blog). Lid bowing between screws, so the middle of each side opens up (Fictiv; Stockwell; Wikipedia 'uneven distributed pressing force'): add screws, stiffen the lid. Over-squeezing so the gasket bottoms out and takes a set, or under-squeezing so gaps remain (Rogers). Old gasket permanently flattened (compression set; Fictiv) or loosened bolts from stress relaxation (Wikipedia). A leak at the joint where the cord's ends meet (Hackaday.io). A cured silicone bead in the groove that doesn't meet the lid everywhere (Hackaday.io). Gasket sliding out of place when the lid closes: seat it in a groove or use adhesive backing (Stockwell). Screw holes inside the seal line becoming leak paths (Hackaday.io 'OpenDendrometer'). Water pulled in as a hot box cools (Stockwell). Porous printed walls leaking even though the gasket is fine (Prusa blog).
- **related**: 
  - O-ring seal: a round rubber ring in a precise groove; more reliable and pressure-proof, but needs a round or large-radius groove and a standard ring size
  - Labyrinth seal (baffle seal): an overlapping lip or winding path that keeps out dust and splashes with no rubber at all; often added in front of a gasket to shield it from direct water jets (Stockwell)
  - Silicone and MS-polymer adhesive sealants: the same material as a formed-in-place gasket, used to seal and bond permanently
  - Cable gland and strain relief: seals cables passing through the gasketed box
  - Draw latch (over-centre latch): a common way to pull a gasketed lid down evenly without tools
  - Tongue-and-groove joint: the joinery cousin; in enclosures the tongue on the lid presses the gasket into the groove *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Gasket.svg (Wikimedia Commons, by Mysid)](https://commons.wikimedia.org/wiki/File:Gasket.svg): Diagram of a gasket (orange) used as a face seal between two pipe flanges *(licence: Public domain)*
  - [CAT-B25-Battery-Cover.jpg (Wikimedia Commons, by MarcoTangerino)](https://commons.wikimedia.org/wiki/File:CAT-B25-Battery-Cover.jpg): Photo of a rugged phone's battery cover with a rubber gasket all round it, giving IP67 dust and water resistance, held by two screws *(licence: Public domain)*
  - [Joints plats.JPG (Wikimedia Commons, by Nerijp)](https://commons.wikimedia.org/wiki/File:Joints_plats.JPG): Photo of various flat gaskets cut from sheet *(licence: GFDL 1.2+ or CC BY-SA 3.0 / 2.5 / 2.0 / 1.0 (multi-licensed))*
  - [Water Resistant 3D Printed Enclosures (Hackaday.io project)](https://hackaday.io/project/174011-water-resistant-3d-printed-enclosures): Cross-section photos of printed lid ridges pressing silicone aquarium tubing into a U-channel, with submersion test results for tubing versus cured silicone sealant *(licence: link only)*
  - [The Mechanics of Enclosure Seal Design: Gap Spacing, CFD, and Compressibility (Rogers Corporation, 2025)](https://www.rogerscorp.com/blog/2025/the-mechanics-of-enclosure-seal-design-gap-spacing-cfd-and-compressibility): Charts of gasket compression force versus deflection and of leak rate versus gasket width *(licence: link only)*
- **make_it_yourself**: 
  - [Customizable parametric stable and waterproof electronics IP65 IP67 project box (pb-tec, Printables)](https://printables.com/model/72839-customizable-parametric-stable-and-waterproof-elec): OpenSCAD customizer box with a groove and ridge round the rim for 1-3 mm silicone sealing cord or a printed TPU gasket, screws at the corners, and options for cable-gland holes; the author notes he never tested its water-proofness. Details read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Flexible filament test (TPU/TPE) for enclosure gasket (Taneli R, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/63204-flexible-filament-test-tputpe-for-enclosure-gasket): Quick 41 x 41 x 12 mm test print: a rigid PLA or PETG body with a flexible gasket part, to try your flexible filament as a gasket before designing a full box *(licence: CC0 (Creative Commons Public Domain))*
  - [Outdoor Enclosure for Govee Light Controller | TPU Gasket (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1505724-outdoor-enclosure-for-govee-light-controller-tpu-g): PETG enclosure with a printed TPU gasket, 4 M3 screws into heat-set inserts, dual 6 mm cable pass-throughs and optional silicone grease; no formal IP rating claimed *(licence: CC BY-NC)*
  - [Multi Material TPU Container Watertight (Meister Edel, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1243819-multi-material-tpu-container-watertight): Small PLA container with a TPU lid printed in one multi-material job, the two materials locked together by small barbs; a test of printing a flexible seal fused to a rigid part *(licence: CC BY-NC-SA)*
- **diagram_idea**: Three side-by-side cut-aways of a box rim and lid: (1) a flat foam gasket squashed between two flat faces, with arrows showing the lid bowing up between two corner screws and a gap opening in the middle; (2) a round cord in a U-groove with a rounded ridge on the lid pressing into it and screws outside the seal line; (3) a silicone bead dispensed on one face, shown wet and bonding both faces (formed in place) versus cured first and only stuck to one side (cured in place).
- **sources**: 
  - https://en.wikipedia.org/wiki/Gasket
  - https://en.wikipedia.org/wiki/IP_code
  - https://www.threebond.co.jp/en/technical/technicalnews/pdf/TechnicalNews91.pdf
  - https://www.rogerscorp.com/blog/2025/the-mechanics-of-enclosure-seal-design-gap-spacing-cfd-and-compressibility
  - https://www.stockwell.com/submerged-gaskets/
  - https://www.stockwell.com/enclosure-gaskets/
  - https://www.fictiv.com/articles/nothing-gets-in-waterproof-enclosure-design-101-and-ip68
  - https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/
  - https://hackaday.io/project/174011-water-resistant-3d-printed-enclosures
  - https://hackaday.io/project/185224/log/207087-3d-printed-weatherproof-enclosure
  - https://www.permatex.com/products/gasketing/gasket-makers/grey-gasket-makers/permatex-ultra-grey-rtv-silicone-gasket-maker-3-5-oz/
  - https://www.cnckitchen.com/blog/testing-colorfabb-varioshore-tpu-foaming-3d-printing-filament
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.materialseducation.org/educators/matedu-modules/docs/Laser_Cutter_Materials.pdf
  - https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Parker-O-ring-handbook.pdf
  - https://www.globaloring.com/o-ring-splicing-kits/
  - https://commons.wikimedia.org/wiki/Category:Gaskets
  - https://commons.wikimedia.org/wiki/File:Gasket.svg
  - https://commons.wikimedia.org/wiki/File:CAT-B25-Battery-Cover.jpg
  - https://commons.wikimedia.org/wiki/File:Joints_plats.JPG
  - https://api.printables.com/graphql/
  - https://printables.com/model/72839-customizable-parametric-stable-and-waterproof-elec
  - https://www.printables.com/model/12311-waterproof-housing-test-tpu-o-ring

### Other info

- **Fields with unverified parts:** aliases, play_and_precision, processes, related, reuse_cycles

## 132 Labyrinth seal (baffle seal)

*seals & pass-throughs.* A winding, overlapping path between two parts that keeps out dust and splashes without touching, so it never wears; easy to print into lids and shafts

### What it is

- **plain_name**: An overlapping, zig-zag gap between two parts, such as a lid whose skirt hangs down over a raised rim, or nested rings round a spinning shaft, that makes dust and splashes follow a long winding path so they can't get in, even though the parts never touch
- **term**: Labyrinth seal (non-contact seal)
- **aliases**: 
  - labyrinth seal, non-contact seal, gap seal, mini maze seal (GMN Bearing USA)
  - bearing isolator (a labyrinth device fitted at a bearing housing in place of a lip seal; Machinery Lubrication)
  - rotor and stator labyrinth; teeth on rotor (TOR) or teeth on stator (TOS) (Wikipedia 'Labyrinth seal'; Machinery Lubrication)
  - lip-and-groove joint or tongue-and-groove joint (the static version between two halves of a plastic housing; RJC Mold)
  - louvres (angled slats that let air through but keep out rain, as on a Stevenson screen; Wikipedia 'Stevenson screen') *(unverified parts omitted)*
- **family**: seals & pass-throughs
- **other_families**: locating & alignment
- **one_liner**: Two parts shaped so the gap between them doubles back on itself several times, so dust, grit and splashes run out of energy or drain away before they reach the inside, with no rubbing contact and nothing to wear out.
- **complexity**: Two parts, no extra pieces: ribs, grooves, skirts or nested rings shaped into a stationary part (the stator, or a box) and a moving part (the rotor on a shaft, or a lid) (Machinery Lubrication; GMN Bearing USA). Optional: grease packed into the gaps, and a drain hole at the lowest point.
- **how_it_works**: Instead of pressing rubber against a surface, the two parts are shaped so the narrow gap between them turns back and forth several times, and each turn makes dust and droplets lose their momentum (GMN Bearing USA; Machinery Lubrication). On a spinning shaft the path runs inward, so spinning (centrifugal force) throws dirt and liquid back outward, away from the bearing (Wikipedia 'Labyrinth seal'; GMN). On a still lid or hub, the openings face downward so gravity drains any water back out, like two C-shaped channels nested one inside the other (Jobst Brandt). Because the parts never touch there is no friction and no wear, but the path is always open, so it only slows leakage: water standing against it, a water jet into the gap or a pressure difference will push through (Wikipedia; GMN).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: keeps dust, grit, rain and splashes out of a box, lid or bearing, and grease or oil in, without touching
  - line parts up exactly: a lip-and-groove version on a box also aligns the two halves (RJC Mold 'Lip and Groove Design')
- **motion**: none for a box or lid joint; rotate (unlimited, at any speed) for a shaft labyrinth, since the parts never touch; GMN's only speed limit is the seal lifting off the shaft at very high speed (GMN Bearing USA).
- **degrees_of_freedom**: 0 for a closed box. 1 on a shaft (it turns freely), but the labyrinth does not guide the shaft: bearings must hold it true, and it only tolerates end float and wobble smaller than its gap (about 0.5 mm axial and radial in GMN's plastic gap seals).
- **special_behaviour**: 
  - none: it does none of the listed clever things; its special feature is that it seals without contact, so it has no friction, no power loss, no wear and effectively unlimited life (GMN Bearing USA; Machinery Lubrication)
- **holding_principle**: not a holding joint (it moves or passes on motion): it does not hold anything together; screws, clips, a thread or bearings hold the parts, and the labyrinth only shapes the gap between them
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: it is simply the shape of the two parts, so it comes apart whenever they do; press-fitted shaft labyrinths come off with the shaft (GMN).
- **reuse_cycles**: effectively unlimited: the parts never touch, so nothing wears (GMN 'unlimited life'; Machinery Lubrication). A grease-packed labyrinth needs repacking now and then because rotation slowly moves grease out (GMN).
- **tools_needed**: none for the labyrinth itself, only whatever holds the parts together; a grease gun or a finger of grease if it is grease-packed
- **seal**: dust-resistant: keeps out dust, grit and splashing water, and drains rain if its openings face down (Jobst Brandt; GMN), but it is not watertight under water, against water jets aimed into the gap, or against any pressure difference (GMN; Wikipedia). Moulded ABS instrument boxes with a tongue-and-groove joint are sold with an IP54 rating (dust protected and splash-proof) (Bud Industries PI series listing; *(unverified parts omitted)*
- **load**: none: it carries no load and must not be used to locate or support the parts; a shaft labyrinth needs its own bearings.
- **adjustable**: no: the gap is fixed by the shape of the parts.
- **play_and_precision**: The gap must stay open all the way round: GMN's plastic gap seals use about 0.5 mm axial and radial clearance, and machined bearing isolators can run with gaps as small as 0.003 in (76 micrometres) (GMN; Machinery Lubrication). A gap that is too small acts like a capillary tube and can wick water in (Jobst Brandt). A lip-and-groove on a box also helps line the halves up (RJC Mold). *(unverified parts omitted)*
- **access_needed**: not applicable for a box joint; end of a tube or shaft for a shaft labyrinth, which is slid or pressed on from the shaft end (GMN; split designs can be fitted round a shaft without removing it, Printables 'Split Labyrinth Seal').
- **materials**: Any rigid material: GMN makes its gap seals from acetal (POM) plastic, which resists oils, greases, many solvents and water but not strong acids; others are bronze, stainless steel or plastic (GMN; Machinery Lubrication). 'Plain old plastic will suffice for a labyrinth seal because there is no contact' (Jobst Brandt). For printing: PLA indoors; PETG or ASA outdoors or near heat (CNC Kitchen heat tests); ABS or another higher-temperature material near hot machinery (Printables 'Split Labyrinth Seal').
- **maker_difficulty**: easy: it is just ribs, skirts or grooves printed into the lid, box or hub, with no added parts; the design skill is in drainage, gap size and keeping the parts from rubbing

### Making it

- **processes**: 
  - 3D print (FDM): ribs, skirts and nested rings print as part of lids, hubs and housings, usually without supports if printed upside down (Printables 'Helical rain/radiation shield', 'Compact Stevenson Screen')
  - CNC (lathe): the classic way for metal shaft labyrinths and bearing isolators (Machinery Lubrication)
  - injection moulding: lip-and-groove joints on plastic enclosures (RJC Mold)
  - off-the-shelf part: plastic gap seals and labyrinth seals for bearings (GMN Bearing USA), bearing isolators (Machinery Lubrication) *(unverified parts omitted)*
- **print_in_place**: no: the labyrinth is two separate printed parts (box and lid, or rotor and stator) that are assembled, but each part carries its own ribs or grooves, so no extra seal, spring or rubber is needed.
- **making_tips_3d_printing**: 2) Make every opening face downward and give water a way out: a lid skirt that hangs outside and below the rim, drain slots or a drainage channel at the lowest point (Jobst Brandt: labyrinths 'use gravity to purge water'; Printables 'Splash-Proof Switch and Socket Box' uses a drainage channel). 3) Use several turns: two nested C-shaped channels are the minimum; more overlaps slow dust and spray further (Jobst Brandt; Wikipedia 'many grooves'). 4) Print lids and hats upside down so downward skirts, ribs and louvres need no supports (Printables 'Helical rain/radiation shield', 'Compact Stevenson Screen'). 5) On a shaft, make the path lead inward toward the bearing so spinning throws dirt back out, and fit it with the larger labyrinth diameter facing the dirt (GMN). 6) For dusty places, pack the labyrinth with grease (GMN; Printables 'Split Labyrinth Seal' packs its cavity with wheel-bearing grease). 7) Where water must be kept out properly, use the labyrinth as the first barrier in front of a gasket or O-ring: a flange that shields the gasket from direct spray greatly improves wash-down performance (Stockwell 'Enclosure Gaskets'; RJC Mold). 8) Give cable entries a drip shield or drip loop so water running down the wire can't follow it in (Printables 'Helical rain/radiation shield' has a wire pass-through with a drip shield). 9) Let the box breathe through the labyrinth or a vent: a hot box cooled by rain sucks air and water in (Stockwell). 10) Outdoors, print in PETG or ASA rather than PLA, which softens from about 60 °C in the sun (CNC Kitchen). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for 'non-contact labyrinth seal', 'labyrinth gap seal' or 'gap seal' for bearings (e.g. GMN S and SA series in POM plastic, brand), 'bearing isolator' (Machinery Lubrication; e.g. For boxes: 'IP54 enclosure' with 'tongue and groove' joints (e.g. Bud Industries PI series, brand), 'breather vent' or 'membrane vent' (a microporous membrane that passes air but blocks liquid water; RJC Mold), and 'louvred radiation shield' or 'Stevenson screen' for outdoor sensors. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Clearance: about 0.5 mm axial and radial in GMN's plastic gap seals; grease-filling increases sealing against dust; fit with the larger labyrinth diameter facing the contaminant (GMN Bearing USA 'Labyrinth Seal Guide').
  - Not for pressure or standing liquid: a pressure difference or a standing level of liquid will overcome a labyrinth and leak (GMN).
  - Machined bearing isolators run with a rotor-stator gap as small as 0.003 in (about 76 micrometres); the winding path, not a tight gap, does the work (Machinery Lubrication, 2013).
  - Water: the gap must be large enough to prevent capillary attraction, and the design must let gravity drain water from its entrance; two nested channel-section washers, one turning inside the other, are enough for a bicycle hub (Jobst Brandt, rec.bicycles.tech).
  - A door flange that shields the gasket from a direct water blast greatly improves the chance of passing a wash-down test (Stockwell 'Enclosure Gaskets'). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - The hubs of old Sturmey-Archer 3-speed bicycles and some freewheels and pedals, which stay clean and dry inside for decades with only labyrinth seals (Jobst Brandt)
  - The white slatted box (Stevenson screen) that holds a weather station's thermometer, keeping out rain and sun but letting air through (Wikipedia 'Stevenson screen')
  - The winding air channels moulded into the top of an inkjet ink tank, which let air in while slowing evaporation (Wikimedia Commons photo)
  - Steam turbine and gas turbine shafts, and bearing isolators on pumps and electric motors (Wikipedia; Wikimedia Commons; Machinery Lubrication)
- **when_to_use**: Use a labyrinth when you want to keep dust, grit, rain and splashes out (or grease in) without any rubber that wears, drags or ages: around spinning shafts in fans, wheels, turntables, hubs and robot joints, where a rubbing seal would add friction or limit speed; on printed lids and boxes that are opened often or must breathe; as a first barrier to shield a gasket from direct spray; and in outdoor sensor shelters that need airflow. It is free to add to a printed part and never needs replacing.
- **when_not_to_use**: Don't use a labyrinth alone for anything that will be submerged, hosed at close range, sealed against pressure or vacuum, or that holds a standing liquid (GMN); use an O-ring or gasket instead, perhaps behind a labyrinth. It is also a poor choice where the parts can't be kept from rubbing (loose or badly printed shafts), or where a vertical opening faces up into the rain. *(unverified parts omitted)*
- **environment_limits**: There is no rubber to crack from ozone or sunlight, so the limits are those of the plastic or metal: printed PLA softens from about 60 °C, PETG about 80 °C and ASA about 110 °C (CNC Kitchen). A gap that is too fine wicks water in by capillary action in heavy rain (Jobst Brandt). Temperature changes make an enclosure breathe, pulling in moist air and pooled water as it cools (Stockwell), so condensation can still form inside. Grease in a labyrinth is slowly flung out by rotation (GMN). *(unverified parts omitted)*
- **safety_notes**: None known for the seal itself. A labyrinth-only box is not waterproof: don't rely on it for mains-voltage electrics outdoors. *(unverified parts omitted)*
- **common_failures**: Gap too small, so water is drawn in by capillary action (the problem Jobst Brandt saw on SunTour freewheels) or the parts rub and wear. Openings facing up or no drain, so water pools and runs through. Fitted the wrong way round (GMN: the larger diameter must face the contaminant). Grease flung or washed out of a grease-packed labyrinth (GMN). Expecting it to survive immersion, jets or pressure, which overcome it (GMN). Moist air pumped in as the box heats and cools (Stockwell), leading to condensation. *(unverified parts omitted)*
- **related**: 
  - O-ring seal: squeezed rubber ring; watertight and pressure-proof, but rubs if parts move and needs a bought ring
  - Gasket (flat, cord-in-groove or cast-in-place): squeezed soft seal for non-round lids; often combined with a labyrinth lip in front of it
  - Tongue-and-groove joint (incl. sliding-lid grooves): the joinery version of the same interlocking shape, used for alignment and strength rather than sealing
  - Cable gland and strain relief: seals cables through a wall, where a labyrinth can't
  - Slip ring and rotary union: carries power or fluid across a spinning joint; a rotary union needs contact seals because a labyrinth leaks under pressure
  - Breathable membrane vent: lets air in and out but blocks liquid water; a sealed alternative to a baffled vent (RJC Mold)
  - Tesla valve: another fixed winding channel with no moving parts, whose baffles and recesses let fluid flow easily one way but resist it the other way (Wikipedia 'Tesla valve'; listed under 'see also' on Wikipedia 'Labyrinth seal')

### Pictures, videos and models

- **links**: 
  - [Labyrinth-seal.png (Wikimedia Commons, by Aarchiba)](https://commons.wikimedia.org/wiki/File:Labyrinth-seal.png): Simple cross-section drawing of a labyrinth seal around a shaft, used on the English Wikipedia 'Labyrinth seal' article *(licence: Public domain)*
  - [Labyrinthdichtung01.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Labyrinthdichtung01.jpg): Photo of the rows of labyrinth seal teeth on a steam turbine *(licence: GFDL 1.2+ or CC BY-SA 3.0 (dual licensed))*
  - [Labyrinth Air Channels on Epson Ink Tank (Wikimedia Commons, by Dale Mahalko)](https://commons.wikimedia.org/wiki/File:Labyrinth_Air_Channels_on_Epson_Ink_Tank.JPG): Photo of the long winding air channels moulded into the top of an inkjet ink tank, a static labyrinth vent *(licence: CC BY-SA 3.0)*
  - [What is a Labyrinth Seal? (GMN Bearing USA, YouTube)](https://www.youtube.com/watch?v=nyKfm60f9os): Video explaining non-contact labyrinth seals for bearings (title and channel confirmed through YouTube oEmbed; video not watched) *(licence: link only (standard YouTube licence))*
  - [Labyrinth Seal Guide (GMN Bearing USA)](https://www.gmnbt.com/resources/guides/labyrinth-seal-guide/): Illustrated guide to non-contact labyrinth and gap seals: how the path works, clearances, grease filling, mounting direction and limits *(licence: link only)*
- **make_it_yourself**: 
  - [Split Labyrinth Seal (afp316, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/403921-split-labyrinth-seal): Printable two-part (split) grease-packed labyrinth seal fitted outboard of a leaking oil seal on a quad bike axle: the inner ring grips the shaft, the outer ring is pressed into the housing; STEP files included for adapting *(licence: CC BY-NC)*
  - [Helical rain/radiation shield for weather sensors with sensor mounting (agmcmll, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/33136-helical-rainradiation-shield-for-weather-sensors-w): Baffled shield for an outdoor temperature, humidity and pressure sensor that prints upside down without supports, with a wire pass-through protected by a drip shield *(licence: CC BY (Creative Commons Attribution))*
  - [Compact Stevenson Screen (fumo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/411004-compact-stevenson-screen): Fully printable louvred sensor shelter with a threaded hat printed upside down and a hole for a PG7 cable gland *(licence: CC BY (Creative Commons Attribution))*
  - [86mm x 86mm Splash-Proof Switch and Socket Box (Lean, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1659930-86mm-x-86mm-splash-proof-switch-and-socket-box): Hinged splash cover for a wall switch or socket whose curved outer cover sheds water and whose inner box has a drainage channel for any drops that get past *(licence: CC BY-NC-SA)*
- **diagram_idea**: A cut-away of a lid on a box rim: the lid's skirt hangs down outside the rim and a second rib on the lid drops inside it, forming an upside-down U path; arrows show rain running off the skirt, a splash entering the gap and falling back out by gravity, and dust settling in the first turn; a second small inset shows the same idea round a spinning shaft, with arrows flinging water outward.
- **sources**: 
  - https://en.wikipedia.org/wiki/Labyrinth_seal
  - https://en.wikipedia.org/wiki/IP_code
  - https://en.wikipedia.org/wiki/Stevenson_screen
  - https://en.wikipedia.org/wiki/Tesla_valve
  - https://www.machinerylubrication.com/Read/29452/using-labyrinth-seals
  - https://www.gmnbt.com/resources/guides/labyrinth-seal-guide/
  - https://yarchive.net/bike/labyrinth_seals.html
  - https://rjcmold.com/guides/lip-and-groove-design
  - https://rjcmold.com/ingress-protection-ratings
  - https://www.stockwell.com/enclosure-gaskets/
  - https://americancableassemblies.com/bud-industries-pi-1902-pi-series-ip54-molded-two-part-tongue-and-groove-instrument-abs-89-9-mm/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Labyrinth-seal.png
  - https://commons.wikimedia.org/wiki/File:Labyrinthdichtung01.jpg
  - https://commons.wikimedia.org/wiki/File:Labyrinth_Air_Channels_on_Epson_Ink_Tank.JPG
  - https://www.youtube.com/watch?v=nyKfm60f9os
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/403921-split-labyrinth-seal
  - https://www.printables.com/model/33136-helical-rainradiation-shield-for-weather-sensors-w
  - https://www.printables.com/model/411004-compact-stevenson-screen
  - https://www.printables.com/model/1659930-86mm-x-86mm-splash-proof-switch-and-socket-box

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, making_tips_3d_printing, off_the_shelf_parts, play_and_precision, processes, rules_of_thumb, safety_notes, seal, when_not_to_use

## 133 Hose barb (barbed tube fitting)

*seals & pass-throughs.* A spigot with sharp ridges that soft tubing is pushed over and gripped by; for low pressure, with a clip added for more hold

### What it is

- **plain_name**: A short pipe with sharp ridges round it that you push a soft tube over; the ridges bite into the inside of the tube so it seals and won't pull off, and a clip round the tube holds it on harder
- **term**: Hose barb (barbed fitting, barbed tube connector)
- **aliases**: 
  - barbed fitting, barb fitting, barbed connector, barb connector, hose barb connector (ISM; Tameson)
  - hose tail or hosetail (UK; a Printables model title uses 'Hose Barb Hosetail')
  - 'Christmas-tree' barb: the older style with several barbs of increasing size (Beswick)
  - single-barb or 'line contact' barb (Beswick; Hydraulics & Pneumatics)
  - hose splicer, hose coupler, hose mender, barb-to-barb reducer, barb tee, barb wye (names for fittings with a barb on each end; Printables model titles)
  - slip-in fitting, barbed insert fitting (drip irrigation; DripWorks)
  - airline connector (aquarium air tubing) *(unverified parts omitted)*
- **family**: seals & pass-throughs
- **other_families**: clamping, magnetic & friction connections, hydraulics, pneumatics & vacuum
- **one_liner**: A ridged spigot (hose barb) that a soft tube is stretched over, so the tube's own elasticity grips the ridges and seals the joint for low-pressure air, water or other fluids, with an optional clamp or cable tie behind the barb for extra hold.
- **complexity**: Single piece, plus the tube and an optional clamp. Parts: a hollow spigot with one or more ridges (barbs), each with a gentle slope and a sharp back edge; a plain cylindrical stem behind the barb for the tube to relax onto; and on the other end another barb, a thread, a flange or a tee (Tameson; ISM). Retention device if used: a worm-drive, spring, wire or ear clamp, or a cable tie (Wikipedia, Hose clamp; Qosina).
- **how_it_works**: The tube is pushed up the slope of the barb, stretching it wider than its own inside diameter; once past the sharp edge it springs back and squeezes the plain stem behind it (ISM). That squeeze makes the seal, and the sharp edge makes a line of high contact pressure that grips the tube (Beswick). Pulling on the tube makes it get thinner and grip even tighter, but a pressure spike swells the tube and can loosen it, which is why a clamp is added for higher pressure (ISM; Qosina). A clamp placed just behind the barb also blocks the tube from sliding off, because the clamp would have to stretch over the barb (Wikipedia, Hose clamp).

### Finder attributes

- **job**: seal it, or pass cables or fluid through: joins a soft tube to a fitting or a device so air or liquid can pass without leaking, join and hold: holds the tube on against pulling and internal pressure
- **motion**: none: the tube is fixed to the barb (the soft tube itself can still bend)
- **degrees_of_freedom**: 0: once pushed on, the tube is held in place on the barb; it may be possible to twist the tube round the barb by hand, but it isn't meant to move
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): only in the sense that the barb's slope lets the tube slide on easily while its sharp back edge resists pulling the tube off; pulling actually makes the tube grip tighter (ISM; Hydraulics & Pneumatics)
- **holding_principle**: 
  - friction or clamping (force-fit): the stretched tube squeezes the barb stem, and a clamp adds more squeeze
  - shape (the parts interlock; form-fit): the tube relaxes behind the sharp barb edge, which hooks it; a clamp behind the barb also blocks the tube from sliding off (Wikipedia, Hose clamp)
- **input_output**: not applicable: it joins a tube and passes fluid, not motion
- **power**: passive (no power needed)
- **removability**: semi-permanent (can be undone but may damage parts): a well-matched barb is designed to be very hard to pull off (Beswick), so the tube end is often cut off; the fitting itself can usually be reused with a new tube (Tameson). *(unverified parts omitted)*
- **reuse_cycles**: a few times: the barb can be reused many times, but each removal usually costs a cut or stretched tube end (Tameson)
- **tools_needed**: None to push on (hot water or a hair dryer helps soften stiff tubing; Drip Depot). A knife or tube cutter for a square cut; pliers for spring clamps, a screwdriver or nut driver for worm-drive clamps, a special pincer tool for ear clamps (Wikipedia, Hose clamp); cable ties need only a cutter.
- **seal**: airtight or pressure: the stretched tube squeezing the plain stem behind the barb makes the seal, good for low pressures (ISM: 125 psi or lower); a clamp adds sealing force and resists blow-off (Beswick). Printed barbs are only as tight as their walls (Prusa Knowledge Base)
- **load**: light: holds a tube against pulling and low pressure. Strong against pull (the tube grips tighter; ISM), weaker against pressure spikes that swell the tube (ISM; Qosina). Metal and moulded barbs are strong in bending; printed barbs are weakest where the barb joins a flange or body and can snap there if the tube is levered sideways (Printables 1765791).
- **adjustable**: no: the grip is set by the barb size, the tube's hardness and the clamp; you can only tighten a screw clamp
- **play_and_precision**: not applicable
- **access_needed**: end of a tube or shaft: you push the tube over the end of the barb, so you need the free end of the tube and room to push it on
- **materials**: Fittings: brass, stainless steel, nylon and other plastics such as polypropylene and PVDF (Kynar) (Tameson; ISM; Beswick). Tubing that suits barbs: soft, elastic tubing such as silicone, TPE, PVC and softer polyurethane (Qosina; Beswick); Clippard recommends 85A polyurethane for barbs but 95A for push-in fittings. Stiff tubing (nylon, polyethylene, PTFE, PEEK) suits push-to-connect or compression fittings better (Beswick), although drip-irrigation fittings are barbed inserts for polyethylene tubing (DripWorks). Printed barbs: PETG is a common choice for water; PLA only for dry indoor use (Printables 1829891); PP, ASA and PA11 nylon are also used (Printables 1829891, 1810917).
- **maker_difficulty**: easy: buy one for pennies, or print one in a single piece (the barb profile is support-free if the ridges are 45° cones; Printables 1765791); getting a printed one watertight needs extra walls and good settings

### Making it

- **processes**: off-the-shelf part: brass, stainless and plastic barbs, tees, wyes, reducers and barb-to-thread adapters, 3D print (FDM): single-piece barbs and adapters, often printed standing up *(unverified parts omitted)*
- **print_in_place**: yes: a barbed fitting is a single printed part with nothing to assemble; you just push the tube on (some multi-part designs, such as Printables 1436108, are printed in pieces and glued)
- **making_tips_3d_printing**: 1) Orientation: most makers print barbs standing up, with the tube axis vertical, so each barb is a round ring of layers (Printables 1810917 printed this way in PLA and PA11 without supports; Printables 378315 printed a barb tee standing up with supports). Give the barbs a 45° slope on both sides so they print without supports (Printables 1765791 uses a '2x45° ridge profile'). 2) Leak-tight walls: use at least 3-4 perimeters, raise the nozzle temperature 5-10 °C and the extrusion multiplier 5-10%, keep layer height at no more than 60-65% of the nozzle size (Prusa Knowledge Base, Watertight prints); one drip-irrigation tee needed 6 perimeters to be water-tight under pressure (Printables 378315). Some designers print at 100% infill (Printables 1436108) or with walls thick enough to be solid. 3) Seam: set the seam to random, or scrape the seam smooth with a knife, because an aligned seam is a leak path along the barb (Printables 455268; Printables 1436108). 4) Material: PETG for water and outdoors; PLA only for dry indoor use (Printables 1829891); PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen), so avoid printed barbs on hot water or engine coolant. 5) Strength: add a fillet or internal reinforcement where the barb joins a flange or body, the usual snapping point (Printables 1765791). 6) Sizing: measure the tube's inside diameter and make the barb a little larger; commercial barbs range from about 10% to 100% larger than the nominal tube ID depending on style (Qosina); parametric generators let you set the barb lip, count and length (Printables 1829891, 1767584; Printables 69154). 7) Hold: leave room behind the barb for a clamp or cable tie (Printables 1436108). 8) Don't use printed barbs for high pressure or fuel (Printables 1436108).
- **off_the_shelf_parts**: Search for: 'hose barb', 'barbed fitting', 'barb x NPT' or 'barb x BSP' adapters ('hose tail' in the UK), 'barb tee', 'barb wye', 'barbed reducer', 'hose mender' or 'hose splicer', 'single-barb fitting', 'Luer to barb' (medical and lab), 'aquarium airline connector' (3/16 in, about 5 mm tubing; FishLab), 'drip irrigation barbed fitting' (DripWorks). Retention: 'worm drive hose clamp' ('Jubilee Clip' (brand) in the UK), 'spring hose clamp', 'wire hose clamp', 'ear clamp' or 'stepless ear clamp' (Oetiker (brand)) (Wikipedia, Hose clamp; Qosina), 'cable tie'. Tubing: 'silicone tubing', 'PVC tubing', 'polyurethane tubing 85A'.
- **rules_of_thumb**: 
  - Barbed fittings are for low pressure: 'low-pressure (125 psi or lower) fluid, gas and air' (ISM, Barb Connectors in Depth); usually below 150 or 125 psi because the soft tubing is the limit (Beswick white paper).
  - Add a clamp when pressure approaches 80 to 100+ psi (depending on tube ID, wall and durometer); clamps also help with pressure pulses and heat (Beswick white paper). For drip irrigation, DripWorks advises stainless hose clamps above 20 psi.
  - Size a barb by the tube's inside diameter; push-in fittings are sized by the tube's outside diameter (Clippard).
  - Make the barb bigger than the tube's ID: Qosina's barb styles are 10-25%, 18-34%, 12-57%, 40-60% and up to 50-100% 'oversized' compared with the nominal tube ID. There are no consensus standards for barb sizes, so test with your tubing (Qosina).
  - Match barb and tube hardness: barbs suit soft tubing (Clippard recommends 85A polyurethane for barbs and 95A for push-in fittings; push-in fittings are typically used with 95 Shore A or harder tubing, Beswick). A barb for soft silicone needs a higher peak than one for stiff nylon (Hydraulics & Pneumatics).
  - One sharp barb with no mould parting line and a plain stem behind it for the tube to relax onto usually beats several barbs; if you do use several, space them far enough apart that the tube can close down behind each one (Hydraulics & Pneumatics, 'Plastic fittings: How many barbs are best?', 2004; Beswick).
  - Place the clamp or cable tie closely behind the barb (Qosina), so the tube can't slide off without the clamp stretching over the barb (Wikipedia, Hose clamp).
  - Worm-drive (screw) clamps are normally used on hoses 1/2 in diameter and up; smaller hoses use other clamps (Wikipedia, Hose clamp).
  - To fit stiff tubing, dip its end in hot (not boiling) water for about a count of 10 first (Drip Depot).
  - Printed watertight parts: at least 3-4 perimeters, +5-10 °C nozzle temperature, +5-10% extrusion multiplier (Prusa Knowledge Base, Watertight prints).

### When to use it

- **everyday_examples**: 
  - Aquarium air-pump tubing and its little check valves and tees (standard 3/16 in, about 5 mm, airline tubing; FishLab)
  - Garden drip-irrigation fittings pushed into polyethylene tubing (DripWorks; Printables 378315)
  - PC water-cooling loops, with hoses clamped onto barb fittings (Wikipedia, Hose clamp; Wikimedia Commons photo)
  - Car heater and coolant hoses held on with spring or screw clamps (Wikipedia, Hose clamp)
  - The side arm of a lab vacuum flask or water aspirator (Wikipedia, Hose barb)
- **when_to_use**: Use a hose barb to join soft, stretchy tubing (silicone, PVC, TPE, soft polyurethane) for low-pressure air, water, vacuum or other fluids when you want a cheap, compact joint that you set up once and leave: aquariums, garden watering, coolant loops, pumps, lab rigs, pneumatic toys and soft robots. It is small because it seals on the inside of the tube, it usually seals better than a push-in fitting on soft tube, and it costs less (Clippard; Beswick). It is also the easiest tube fitting to 3D print as one piece, e.g. to adapt one hose size or thread to another.
- **when_not_to_use**: Don't use it for high pressure (well above about 100 psi), for pressure spikes, or where a blow-off would be dangerous: use compression or crimped fittings (Beswick; Wikipedia, Hose clamp). Don't use it with hard tubing such as nylon, polyethylene, PTFE or metal: use push-to-connect or compression fittings (Beswick; Clippard). If you need to connect and disconnect often, use a push-to-connect fitting or a quick-disconnect coupling (Clippard; Beswick). Don't use printed barbs for fuel, hot coolant or high pressure (Printables 1436108; CNC Kitchen).
- **environment_limits**: The tubing sets most limits: pressure spikes swell it and loosen the grip (ISM), and heat softens it, which is why clamps are recommended for heat (Beswick). Check chemical compatibility and exposure to cleaners and sunlight for both tube and fitting (ISM). Printed barbs: PLA starts to give at about 60 °C, PETG at about 80 °C and ASA at about 110 °C (CNC Kitchen); PLA only for dry indoor use (Printables 1829891). *(unverified parts omitted)*
- **safety_notes**: A tube that blows off under pressure can spray hot or harmful fluid and whip about; clamp anything pressurised (Beswick) and don't use printed barbs for fuel or high pressure (Printables 1436108). In life-support or medical tubing a slipped-off tube can be dangerous (Hydraulics & Pneumatics). *(unverified parts omitted)*
- **common_failures**: Tube splits or cracks: barb too sharp or too big for the tube, or the tube over-stretched (Tameson; ISM). Leaks: barb too small for the tube's ID (Tameson), a mould parting line or printed seam running along the barb (Hydraulics & Pneumatics; Printables 1436108), porous printed walls (Prusa Knowledge Base), or a scratched barb (Wikipedia, Hose clamp). Tube blows off: pressure spikes or too-high pressure with no clamp (ISM; Beswick). Tube pulls off: a shallow, rounded barb with stiff tubing (Qosina), or barbs spaced too closely for the tube to relax between them (Hydraulics & Pneumatics). Printed barb snaps at its base when the tube is levered sideways (Printables 1765791). Removal advice conflicts: Tameson says cut the tube so it spreads off the barb; Wikipedia's Hose clamp article says never slit stuck hoses because the knife can scratch the fitting.
- **related**: 
  - Push-to-connect (push-in) fitting: a toothed collet grips the outside of stiffer tubing and an O-ring seals it; releases with a collar, so it is better for frequent reconnection (Clippard; Beswick)
  - Compression fitting: a nut squeezes a ferrule onto the outside of hard or metal tubing, for higher pressures (Beswick; Wikipedia, Hose clamp)
  - Quick-disconnect coupling: for many connect-disconnect cycles (Beswick)
  - Hose clamp: not a fitting on its own, but the add-on that seals and holds a hose on a barb (Wikipedia, Hose clamp)
  - O-ring seal: seals a rigid spigot inside a bore instead of stretching a tube
  - Cable gland: the equivalent idea for sealing a cable (not a tube) through a wall

### Pictures, videos and models

- **links**: 
  - [File:Stainless hose fittings different shapes and sizes.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Stainless_hose_fittings_different_shapes_and_sizes.png): Stainless crimp and hose barb fittings in different shapes and sizes *(licence: CC BY-SA 4.0 (Candm503))*
  - [File:PC watercooling T-Line-2009-12-03.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:PC_watercooling_T-Line-2009-12-03.jpg): A water-cooled PC whose hoses are held on hose barb fittings with screw (band) hose clamps *(licence: GFDL 1.2 / CC BY-SA 3.0 (Senater Cache; derivative work by Silverxxx))*
  - [File:Two spring Hose Clamps - small.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Two_spring_Hose_Clamps_-_small.jpg): A pair of spring-type hose clamps used to hold hoses on barbs *(licence: GFDL / CC BY-SA 3.0 (Bushytails at English Wikipedia))*
  - [Barb Connectors in Depth - Design and Function (Industrial Specialties Mfg., updated 2023)](https://www.industrialspec.com/about-us/blog/detail/barb-connectors-in-depth-design-and-function): Cross-section of flexible tubing pushed over a barb, and a diagram of barb depth and tube expansion from diameter B to A *(licence: link only)*
  - [Plastic fittings: How many barbs are best? (Power & Motion / Hydraulics & Pneumatics, 2004)](https://www.hydraulicspneumatics.com/technologies/fittings-couplings/article/21883519/plastic-fittings-how-many-barbs-are-best): Why a single sharp barb without a parting line often seals and holds better than several barbs *(licence: link only)*
- **make_it_yourself**: 
  - [Pipe / Tube / Hose Connector Generator (Will, Printables; URL from search results, details read through the Printables API)](https://www.printables.com/model/69154-pipe-tube-hose-connector-generator): A customisable OpenSCAD barbed hose connector and manifold generator (straight, L, polygon or round manifolds, two tube sizes), based on papergeek's Thingiverse hose barb adapter *(licence: CC BY)*
  - [Parametric Dual barbed-end hose connector (Dan Sabau, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1767584-parametric-dual-barbed-end-hose-connector-pick-eac): OpenSCAD file with independent sizes for each end (1/2 in to 2 in) and settings for barb count, barb height, barb pitch, collar length and wall thickness *(licence: Open Community License v1.1)*
  - [Parametric barbed hose connector - straight (condensate / drain hoses) (Snoopymad, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1829891-parametric-barbed-hose-connector-straight-condensa): Parametric OpenSCAD inline coupler (hose ID, barb count, barb lip, insertion length) with print settings: PETG, 3-4 walls, no supports, and a clamp or zip tie for a permanent joint *(licence: CC BY-NC)*
  - [Parametric Flanged Hose Barb (Reinforced) (tilmaen, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1765791-parametric-flanged-hose-barb-reinforced): Parametric barb adapter with a support-free 2x45° ridge profile and internal reinforcement to stop it snapping at the flange *(licence: CC BY)*
  - [5/16" Hose Barb Fitting - Splicer / Coupler (great_timing, Printables; URL from search results)](https://www.printables.com/model/1436101-516-hose-barb-fitting-splicer-coupler): One of a series of printable barb splicers, tees and wyes for 1/4 in to 5/8 in hose, with suggested settings (3 walls, 100% infill) and room for clamps *(licence: CC0 (Public Domain))*
- **diagram_idea**: Cut-away of a tube being pushed onto a single barb: the tube stretches up the slope, springs down behind the sharp edge onto the plain stem (arrows showing the squeeze that seals), a hose clamp sitting just behind the barb, and a small inset showing a pressure spike swelling the tube (loosening) versus a pull thinning the tube (gripping harder).
- **sources**: 
  - https://en.wikipedia.org/wiki/Hose_barb
  - https://en.wikipedia.org/wiki/Hose_clamp
  - https://www.industrialspec.com/about-us/blog/detail/barb-connectors-in-depth-design-and-function
  - https://www.beswick.com/resources/what-they-didnt-teach-you-about-fittings-in-engineering-school/
  - https://www.hydraulicspneumatics.com/technologies/fittings-couplings/article/21883519/plastic-fittings-how-many-barbs-are-best
  - https://www.qosina.com/blog/how-to-select-the-correct-barbed-connector-for-your-single-use-system
  - https://www.clippard.com/cms/wiki/barb-fittings-vs-push-quick-fittings
  - https://tameson.com/pages/hose-barb-fittings
  - https://www.dripworks.com/blog/what-is-a-barb-fitting-and-how-does-it-work
  - https://help.dripdepot.com/support/solutions/articles/11000044403-fitting-installation-tips
  - https://fishlab.com/air-check-valve/
  - https://help.prusa3d.com/en/article/watertight-prints_112324
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Stainless_hose_fittings_different_shapes_and_sizes.png
  - https://commons.wikimedia.org/wiki/File:PC_watercooling_T-Line-2009-12-03.jpg
  - https://commons.wikimedia.org/wiki/File:Two_spring_Hose_Clamps_-_small.jpg
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, environment_limits, processes, removability, safety_notes

## 134 Cable gland and strain relief

*seals & pass-throughs.* A threaded fitting whose nut squeezes a rubber insert around a cable, sealing the hole and stopping the cable being pulled out

### What it is

- **plain_name**: A plastic or metal fitting that screws into a hole in a box; you pass a cable through it and tighten its cap, which squeezes a rubber sleeve round the cable so water can't get in and the cable can't be yanked out
- **term**: Cable gland (with cable strain relief; called a cord grip in the US)
- **aliases**: 
  - cord grip, cable strain relief, cable connector, cable fitting (US names; Wikipedia)
  - cable screw gland, cable screw connection (Lapp product class 'Cable screw gland'); Kabelverschraubung (German)
  - PG gland, PG7 gland (by thread size; PG7 is common on 3D-printer toolheads, Printables); metric gland M12 to M63; NPT gland; liquid-tight cordgrip (Heyco)
  - split cable gland: fits round a cable that already has a plug on it (Wikipedia)
  - armoured cable gland, CW gland (grips steel wire armour; Wikimedia Commons)
  - EMC gland (connects a cable's shield to a metal box; Hummel product category)
  - strain relief bushing, snap-in cordgrip (a one-piece plastic bush that clamps a power cord in a panel hole; Heyco)
  - SKINTOP (Lapp, brand); HSK (Hummel, brand); Heyco (brand) *(unverified parts omitted)*
- **family**: seals & pass-throughs
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A threaded fitting that passes a cable through a wall or enclosure: tightening its dome nut presses a set of plastic fingers and a rubber seal round the cable, which seals the hole against dust and water and anchors the cable so pulling or twisting it doesn't strain the wires inside (strain relief).
- **complexity**: A small assembly that acts as one unit: a body (with an entry thread that screws into a threaded hole or through a hole with a locknut), a sealing insert (rubber such as CR/neoprene or NBR), a clamping cage of plastic fingers (lamellae), a domed cap nut, and often an O-ring or flat seal between the body and the wall (Lapp SKINTOP ST-M and MS-M data sheets; Hummel HSK-K). Variants add reducing or multi-hole inserts, split bodies for pre-terminated cables, armour clamps or EMC contact springs (Wikipedia; Lapp). Simpler strain reliefs are single-piece bushings, cable ties on an anchor, clamps or moulded boots (Wikipedia, Cable management; Heyco).
- **how_it_works**: You push the cable through the gland and turn the domed cap nut; its tapered inside pushes the clamping fingers inwards, and they squeeze the rubber insert evenly round the cable, which both seals the gap and grips the cable (Lapp MS-M: 'insert with lamellar cage' plus sealing ring). The body is sealed to the wall by its own O-ring or seal and held by the entry thread or a locknut (Lapp ST-M). Because the cable is gripped at the wall, a pull or twist on the outside is taken by the gland and not by the wire terminals inside; the standard IEC 62444 calls the static version of this 'cable retention' and the pull-and-twist version 'cable anchorage' (IEC 62444 preview). The seal only works if the cable's outside diameter is inside the gland's clamping range (Lapp data sheets).

### Finder attributes

- **job**: seal it, or pass cables or fluid through: seals the hole where a cable enters a box, join and hold: anchors the cable so pulls and twists don't reach the wires inside (strain relief)
- **motion**: none: the cable is clamped
- **degrees_of_freedom**: 0: once tightened the cable can't slide or twist in the gland (that is what the strain-relief tests check; IEC 62444)
- **special_behaviour**: 
  - none: it simply clamps and seals. Useful variants: split glands that go round a cable that already has its plug fitted (Wikipedia; Wikimedia Commons, KVT split gland), multi-hole inserts for several cables and reducing inserts for thin cables (Lapp STR-M/MSR-M), and glands with a built-in bend protector that stops the cable kinking where it leaves (Wikimedia Commons)
- **holding_principle**: friction or clamping (force-fit): the rubber insert squeezed by the fingers grips the cable, shape (the parts interlock; form-fit): the entry thread or locknut holds the gland in the wall
- **input_output**: not applicable: it passes a cable, not motion
- **power**: passive (no power needed)
- **removability**: removable: loosen the cap nut to free the cable, unscrew the body or locknut to remove the gland
- **tools_needed**: Spanners (wrenches) for the cap nut and locknut (Lapp lists a wrench size per gland; M20 ST-M is 25 mm across flats), ideally a torque tool for rated IP sealing (Lapp T21 torques); a step drill, hole punch or hole saw for the clearance hole; cable strippers. Snap-in strain-relief bushings need special assembly pliers for some types and none for snap-in types (Heyco). Printed glands: none beyond hand tightening.
- **seal**: watertight: the squeezed rubber insert seals round the cable and an O-ring or seal seals the body to the wall. Industrial plastic glands are rated IP68 (for example 5 bar for 30 min, Lapp ST-M; 10 bar for 30 min with an extra O-ring, Hummel HSK-K) and IP69 against hot high-pressure washdown (Lapp). The rating only holds with a round cable inside the clamping range and the right tightening torque (Lapp). 'liquid tight' versions exist (Heyco) *(unverified parts omitted)*
- **load**: light to medium: rated for holding a cable against pulls and twists, not for carrying a structure. Glands are tested for cable retention (static pull) and anchorage (pull and twist) with forces that depend on cable diameter (IEC 62444, Table 2; values not seen); Lapp MS-M is rated strain relief 'Category A' to DIN EN 62444. Strongest against pull along the cable; the body is weakest against impact and side loads, which IEC 62444 also tests. Printed glands are weaker; their fingers can break if clamped too far (Printables 114283).
- **adjustable**: yes: tightening the cap nut sets the grip within the clamping range; reducing inserts adapt a gland to thinner cables (Lapp STR-M, MSR-M)
- **play_and_precision**: not applicable
- **access_needed**: both sides: the body goes through the wall and a locknut is fitted inside (Lapp: counter nut SKINTOP GMP-GL-M), unless the wall has a threaded hole, when you only need the outside (one side only). The cable itself must be threaded through before its ends are terminated, unless you use a split gland (Wikipedia)
- **materials**: Bodies: polyamide (nylon, PA6) for most plastic glands, nickel-plated brass, stainless steel or aluminium for industrial use (Wikipedia; Lapp; Wikimedia Commons M16 nylon gland). Seals: CR (neoprene) or NBR rubber; inserts in PA (Lapp ST-M, MS-M; Hummel HSK-K). Cable sheaths of PVC, PUR or rubber; very soft insulation needs lower tightening torque (Lapp T21). Printed glands: PETG and 'soft PLA' worked better than ABS for the flexing fingers (Printables 114283); TPU for seals and O-rings with PLA+, ASA, PETG or PA rigid parts, and 'normal PLA is not recommended' for the clamping fingers (Printables 1389492); 95A TPU for printed strain-relief boots (Printables 1474155).
- **maker_difficulty**: easy: buy a nylon gland and drill a round hole (or print a threaded hole) for it; moderate to print a working gland yourself (fine threads, thin flexing fingers and a TPU seal)

### Making it

- **processes**: 
  - off-the-shelf part: nylon, brass and stainless glands in metric, PG and NPT sizes; strain-relief bushings; cord grips; cable entry frames
  - 3D print (FDM): printed glands and PG7-size copies, threaded holes or bosses for bought glands, TPU seals and bend reliefs, moulds for hot-glue overmoulded strain relief
  - sheet metal: punched or drilled clearance holes in metal boxes *(unverified parts omitted)*
- **print_in_place**: no: a gland is printed as separate parts (body, clamping cage or insert, cap nut, and usually a TPU seal) and screwed together round the cable (Printables 114283; Printables 1389492)
- **making_tips_3d_printing**: 1) Easiest route: print the enclosure with a plain clearance hole and fit a bought gland with its locknut and O-ring; the metric clearance hole is the thread size +0 to +0.2 mm, e.g. 20.0-20.2 mm for M20 (Lapp T21; IEC 62444 Table 1). 2) Printed thread instead of a locknut: M12x1.5 to M20x1.5 threads print, but warp-prone materials such as ABS can distort the small thread (Printables 1117046 recommends a brim and notes Polymaker ABS warped on the M12 thread). 3) Printing a whole gland: PETG or 'soft PLA' worked better than ABS for the flexing fingers; use 0.1-0.15 mm layers for small threads and 2-3 perimeters filling the thin walls (Printables 114283). Normal PLA is too stiff for the clamping fingers; use TPU for the seal and O-ring (Printables 1389492). 4) Don't over-tighten printed fingers: they can snap, and the gland then won't be reusable (Printables 114283). 5) Sizing a printed gland: in one design the wall hole is always the cable channel D + 5 mm and the thread length is the wall thickness + 6 mm (5 mm nut + 1 mm) (Printables 114283). 6) TPU strain-relief boot: 95A TPU, one perimeter, little infill, bore 1 mm smaller than the cable (Printables 1474155). 7) Printed gaskets between two printed surfaces didn't seal in Prusa's tests; O-rings with silicone grease were the reliable choice (Prusa blog, Watertight 3D printing part 2). 8) Hot-glue overmould: print a two-part mould in PETG (to survive hot glue), coat it with a release agent such as silicone or vegetable oil, and cast hot glue round the cable and connector for a moulded strain relief (Hackaday, 2020 and 2024). 9) Don't use printed glands where mains wiring or an inspected installation needs certified parts (Printables 1389492). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'cable gland M20x1.5' (and M12, M16, M25 ...), 'PG7 cable gland', 'nylon cable gland IP68', 'brass cable gland', 'cable gland locknut' (Lapp calls it a counter nut), 'cable gland O-ring' or 'sealing washer', 'reducing seal insert', 'multi-hole seal insert', 'split cable gland' (for cables with plugs), 'EMC cable gland', 'armoured cable gland', 'blanking plug', 'breather' or 'vent plug' (pressure equalisation; *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Choose the gland by the cable's outside diameter, which must fall inside the clamping range, e.g. Lapp SKINTOP ST-M: M12 3.5-7 mm, M16 4.5-10 mm, M20 7-13 mm, M25 8-17 mm, M32 11-21 mm; reducing-insert versions take thinner cable (Lapp SKINTOP ST-M catalogue page; MSR-M M20: 5-10 mm, Lapp MS-M data sheet).
  - Clearance holes for metric entry threads (EN 60423): M12 12.0, M16 16.0, M20 20.0, M25 25.0 mm, each +0.2 mm; M32 and M40 +0.3 mm (Lapp Technical Table T21; IEC 62444 Table 1). PG threads: PG7 12.8, PG9 15.5, PG11 18.9, PG13.5 20.7 mm (each -0.2 mm) (Lapp T21).
  - Recommended tightening torques for plastic SKINTOP metric glands: M12 1.5 N·m, M16 3.0, M20 6.0, M25 8.0, M32 10.0 N·m; metal glands higher (M20 12 N·m). Use lower torques on soft cable insulation or it may be damaged (Lapp T21).
  - Wall space: allow room for the hexagon; Lapp gives the across-corners diameter, e.g. 28.3 mm for a 25 mm hexagon (M20 ST-M) (Lapp T21 and ST-M table).
  - An IP68 rating on a gland is tied to a test pressure and time, e.g. IP68 5 bar/30 min for plastic SKINTOP ST-M and 10 bar/30 min for brass MS-M M12 to M50 (Lapp); IP67 in the IP code means immersion in 1 m of fresh water for up to 30 min (Wikipedia, IP code).
  - Strain relief placement: for PROFINET cables, strain relief is recommended about 1 m (3.5 ft) from the connection point (Wikipedia, Cable management).
  - Printed gland (Printables 114283): hole in the wall = cable channel D + 5 mm; thread length = wall thickness + 6 mm.
  - Printed TPU strain relief: bore about 1 mm smaller than the cable (Printables 1474155).

### When to use it

- **everyday_examples**: 
  - The grey or black screw-cap fittings where cables enter outdoor junction boxes, lamps and solar boxes (Wikimedia Commons, category Cable glands)
  - PG7 glands on 3D printers, where the toolhead cable bundle enters the print head (Printables Voron models) *(unverified parts omitted)*
- **when_to_use**: Use a cable gland whenever a cable enters a box that must stay sealed against dust and water (outdoor sensors, garden lights, pond pumps, boat electronics, printed enclosures) or where a tug on the cable must never pull on the wires or solder joints inside (robots, power tools, anything with a mains cord). It also neatly finishes the hole so sharp edges can't cut the cable. Pick a split gland when the cable already has a plug on it, and a multi-hole insert when several cables share one hole (Wikipedia; Lapp).
- **when_not_to_use**: For a cable that moves constantly, a gland only fixes the end; add a cable carrier (drag chain) or bend relief for the moving part (Wikipedia, Cable management). For many pre-terminated cables through one cut-out, use a split cable-entry frame (Wikipedia). *(unverified parts omitted)*
- **environment_limits**: Nylon glands: Lapp SKINTOP ST-M is rated -40 to +100 °C when fixed and -20 to +100 °C when the cable moves; Hummel HSK-K -40 to +100 °C; brass Lapp MS-M -40 to +100 °C static and -25 to +100 °C dynamic (manufacturers' data). Choose black glands for sunlight: Lapp marks the black version of its ST-M as UV-resistant. IEC 62444 tests plastic glands after 168 h in an oven at 70 °C (IEC 62444 preview), and IP69 versions withstand hot high-pressure cleaning (Lapp). Printed glands: PLA gives at about 60 °C, PETG about 80 °C, ASA about 110 °C (CNC Kitchen). *(unverified parts omitted)*
- **safety_notes**: For mains voltage use certified glands and follow wiring rules; a printed gland isn't a certified electrical component and has no fire rating (Printables 1389492). Over-tightening can crush and damage cable insulation (Lapp T21). Metal glands on armoured or shielded cable may be part of the earthing (grounding) path (Wikipedia). *(unverified parts omitted)*
- **common_failures**: Leaks because the cable is too thin for the gland (the seal can't close), the cable isn't round, or the O-ring or seal under the body is missing; choose a gland whose clamping range includes the cable (Lapp). Crushed insulation or split seals from over-tightening; follow the torque table (Lapp T21). Printed glands: fingers snap when clamped too far (Printables 114283), small threads warp in ABS (Printables 1117046), and printed gaskets don't seal (Prusa blog). Cable breaks just outside the gland where it bends repeatedly: add a bend relief (Wikimedia Commons, glands with bend protection) or clamp the cable further along. *(unverified parts omitted)*
- **related**: 
  - Rubber grommet: lines a hole to protect the cable but doesn't grip or fully seal it
  - Strain-relief bushing (snap-in cordgrip): a one-piece plastic bush squeezed onto a cord and snapped into a panel hole; cheaper, often not sealed (Heyco)
  - Wire mesh cord grip: a woven wire sleeve that tightens as the cable is pulled (Wikipedia, Cable management)
  - Cable tie on a strain-relief plate or tie mount: cheap strain relief with no sealing (Wikipedia, Cable management)
  - Overmoulded boot or bend relief: moulded rubber or hot glue round the cable where it leaves a plug (Hackaday)
  - Cable carrier (drag chain): guides a moving cable along an axis; glands or strain-relief plates fix its ends (Wikipedia, Cable management)
  - Hose barb: the equivalent for joining a soft tube to a fitting
  - O-ring seal and gasket: seal the lid or the gland body to the box *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [File:Exploded CW Gland annotated.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Exploded_CW_Gland_annotated.png): Exploded, labelled view of the parts of a CW-type steel-wire-armour cable gland *(licence: CC BY-SA 4.0 (Andyremel))*
  - [File:M16 cable gland.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:M16_cable_gland.jpg): A metric polyamide (nylon) cable gland with M16x1.5 thread *(licence: CC BY-SA 4.0 (Phiarc))*
  - [File:Cable glands with bend protection.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Cable_glands_with_bend_protection.jpg): M16 and M12 cable glands with built-in bend protection sleeves *(licence: CC BY-SA 4.0 (Phiarc))*
  - [Thread and hole dimensions / Tightening torques for cable glands (Lapp Technical Table T21)](https://t3.lappcdn.com/fileadmin/catalog/en_T_pdf/T21_Thread_dimensions_for_cable_glands_int.pdf): Drawings and tables of entry threads, clearance holes, tightening torques and hexagon clearances *(licence: link only)*
  - [Fast fitting IP68 Cable Gland - no need for a locknut - Hylec KWIK FIX (YouTube, eFIXX; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=v4E1c1ere5U): An electrician's demonstration of fitting an IP68 cable gland (a branded quick-fit type) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Cable gland "all sizes" (93djen, Printables; URL from search results, details read through the Printables API)](https://www.printables.com/model/114283-cable-gland-all-sizes): 300+ ready-made STL sizes of a printable gland with clamping fingers and cap nut, with tested clamping reductions (e.g. D8 closes to 6.3 mm) and print settings *(licence: CC0 (Public Domain))*
  - [Waterproof Cable Gland (theartfulbadger, Printables; URL from search results, details read through the Printables API)](https://www.printables.com/model/1389492-waterproof-cable-gland): A printable waterproof gland with a TPU compression sleeve and TPU seal, STEP file and a parametric Fusion 360 file (cable_OD, printer_tolerance, knockout diameter) *(licence: CC0 (Public Domain))*
  - [Parametric TPU cable gland strain relief (Bene, Printables; URL from search results, details read through the Printables API)](https://www.printables.com/model/1474155-parametric-tpu-cable-gland-strain-relief): A TPU bend-relief boot that fits onto a printed gland; bore 1 mm smaller than the cable *(licence: CC0 (Public Domain))*
  - [Cable Gland - split-able - customizable (Mark, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/608533-cable-gland-split-able-customizable): A split gland that fits round a cable with a plug already on it, with an O-ring groove and a parametric Fusion 360 file *(licence: CC BY)*
  - [Cheap Strain Relief By Casting Hot Glue In A 3D Print (Hackaday, 2020)](https://hackaday.com/2020/02/11/cheap-strain-relief-by-casting-hot-glue-in-a-3d-print/): Printed PETG moulds for casting hot-glue strain relief round JST-XH connectors, with a video *(licence: link only)*
- **diagram_idea**: Cut-away of a nylon cable gland in a box wall: cable through the middle, rubber insert inside a ring of plastic fingers, domed cap nut with arrows showing it pushing the fingers inwards to squeeze the seal onto the cable, an O-ring between body and wall and a locknut inside; a small side panel shows a pull on the cable outside being stopped at the gland so the terminals inside stay slack.
- **sources**: 
  - https://en.wikipedia.org/wiki/Cable_gland
  - https://en.wikipedia.org/wiki/Cable_management
  - https://en.wikipedia.org/wiki/IP_code
  - https://cdn.standards.iteh.ai/samples/14734/1c08c28add8e42c081d15fd1d239ae8e/IEC-62444-2010.pdf
  - https://www.lapptannehill.com/media/datasheet/LAPP/SKINTOP/SKINTOP-ST-M-ST-R-M.pdf
  - https://products.lappgroup.com/fileadmin/documents/technische_doku/datenblaetter/skintop/DB53112000EN.pdf
  - https://t3.lappcdn.com/fileadmin/catalog/en_T_pdf/T21_Thread_dimensions_for_cable_glands_int.pdf
  - https://www.hummel.com/en/cable-glands/products/plastic-cable-glands/hsk-k/
  - https://www.heyco.com/products/strain-relief-bushings/
  - https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://hackaday.com/2020/02/11/cheap-strain-relief-by-casting-hot-glue-in-a-3d-print/
  - https://hackaday.com/2024/08/02/over-molding-wires-with-hot-glue-and-3d-printed-molds/
  - https://commons.wikimedia.org/wiki/Category:Cable_glands
  - https://commons.wikimedia.org/wiki/File:Exploded_CW_Gland_annotated.png
  - https://commons.wikimedia.org/wiki/File:M16_cable_gland.jpg
  - https://commons.wikimedia.org/wiki/File:Cable_glands_with_bend_protection.jpg
  - https://commons.wikimedia.org/wiki/File:KVT_Teilbare_Kabelverschraubung.jpg
  - https://www.youtube.com/watch?v=v4E1c1ere5U
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, everyday_examples, making_tips_3d_printing, off_the_shelf_parts, processes, related, reuse_cycles, safety_notes, seal, when_not_to_use

## 135 Slip ring and rotary union

*seals & pass-throughs.* A joint with sliding contacts (or seals) that carries power, signals or fluid across something that keeps turning, so cables never wind up, as in robot turrets

### What it is

- **plain_name**: A turning joint with rings and sliding contacts inside (or sealed channels, for liquids and air) that lets electricity, signals or fluid pass from a fixed part to a part that keeps spinning, so the wires or hoses never get twisted up
- **term**: Slip ring (rotary electrical joint) and rotary union (rotary joint for fluids)
- **aliases**: 
  - slip ring, collector ring, rotary electrical interface, rotating electrical connector, collector, swivel, electrical rotary joint, electric swivel (Wikipedia; Moog)
  - capsule slip ring (small closed unit on the end of a shaft), through-bore or hollow-shaft slip ring (with a hole down the middle), pancake slip ring (rings on a flat disc) (Wikipedia; TME Systems)
  - mercury-wetted slip ring (contacts wetted by liquid metal; Mercotac (brand)) (Wikipedia); fibre-brush slip ring (Wikimedia Commons)
  - wireless or contactless slip ring, rotary transformer (passes power and data through a magnetic field) (Wikipedia)
  - fibre optic rotary joint, FORJ (for high-speed data; Moog)
  - one-way-flow and two-way-flow rotary joints, rotary joint manifold (McMaster-Carr family names)
  - clock spring, spiral cable (the limited-turn alternative in car steering wheels; Wikipedia, Clockspring)
  - cord untangler (telephone handset cord swivel; Wikimedia Commons), detangler or gyro (BMX brake-cable swivel; Wikipedia, Detangler) *(unverified parts omitted)*
- **family**: seals & pass-throughs
- **other_families**: hinges & pivots, hydraulics, pneumatics & vacuum
- **one_liner**: A slip ring passes electric power and signals from a stationary part to a continuously rotating one through springy contacts (brushes) rubbing on rings, and a rotary union does the same for liquids, air or vacuum through seals between a fixed housing and a turning shaft, so the rotating part can turn forever without its cables or hoses winding up.
- **complexity**: A small assembly that acts as one unit. Slip ring: a rotor carrying a stack of insulated metal rings (e.g. brass, gold-plated), a stator carrying one spring-loaded brush or wire contact per ring, bearings, a housing, and colour-coded lead wires on each side (Wikipedia; Hackaday teardown article; Adafruit). Rotary union: a housing with inlet port(s), a shaft with passages, one or more bearings, and one or more seals (face seals, lip seals or O-rings) (Wikipedia, Rotary union). Combined units stack slip rings, fluid passages and fibre optic joints in one body (Moog; Wikipedia).
- **how_it_works**: In a slip ring each circuit has its own continuous metal ring on the turning part, and a stationary brush (graphite or metal) is pressed against it by a spring; the current flows through the sliding contact, so the connection holds at any angle and for any number of turns (Wikipedia). More circuits are simply more rings stacked along the shaft. A rotary union works the same way for fluid: the fluid enters a fixed housing, passes into a groove or chamber that runs all the way round the shaft, and flows into a hole drilled in the turning shaft, while seals either side stop it leaking out; multi-passage unions have several chambers separated by seals (Wikipedia, Rotary union). Wireless versions replace the rubbing contacts with facing coils (a rotary transformer), which don't wear but carry much less power (Wikipedia, Slip ring).

### Finder attributes

- **job**: seal it, or pass cables or fluid through: carries power, signals or fluid across a turning joint, let it move (turn, slide or bend): lets the joint keep turning in the same direction without limit
- **motion**: rotate: continuous, unlimited turns in either direction (hobby capsule slip rings are rated 0-300 rpm; Adafruit; SRC012/SRC022 data sheets)
- **degrees_of_freedom**: 1: rotation about the shaft; the unit's own small bearings keep the rings centred but are not meant to carry the machine's loads (Canyon Components; Hackaday comments)
- **special_behaviour**: 
  - none: its clever trick, endless turning without twisting the wires or hoses, isn't one of the listed behaviours (Wikipedia: a slip ring allows unlimited rotations, whereas a slack cable can only be twisted a few times before it binds)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes current or fluid across a turning joint
  - spring force (a spring or springy part presses it in place): the brushes are pressed onto the rings by springs (Wikipedia; Hackaday: 'gold-plated spring contacts')
- **input_output**: not applicable: it passes electricity, signals or fluid rather than motion; it adds a little drag (starting and running torque) that the drive motor must overcome (TME Systems)
- **power**: passive (no power needed): it carries power and signals but needs none to work; if the supply is lost, the rotating side simply loses power
- **removability**: removable: capsule slip rings are held by a flange with screws and their leads go to connectors or terminals; rotary unions screw onto the shaft end and their hoses unscrew
- **reuse_cycles**: many times
- **tools_needed**: DIY slip rings: pipe cutter, soldering iron and a press or hammer for press-fitting (Printables 103824). *(unverified parts omitted)*
- **seal**: airtight or pressure (rotary union: seals hold liquid, air or vacuum; industrial unions reach 1,000 bar and 40,000 rpm, Moog; a small amount of leakage is normal in some designs, GTI Spindle). Slip rings themselves range from unsealed hobby capsules to IP65/IP67 sealed units for dust and water (TME Systems)
- **load**: light: carries current and signals, not mechanical load. A hobby capsule ring carries 2 A per circuit at up to 240 V (Adafruit, SRC022/SRC012 data sheets), though Hackaday's review of a teardown called a small unit's mains-voltage claim 'wishful thinking'. Robot-size rings with 30 A per contact exist (Chief Delphi). The rings' own bearings should not carry side loads: mount the rotating part on its own bearing and let the slip ring only follow it (Canyon Components for rotary O-ring seals; Hackaday reader comments).
- **adjustable**: no
- **play_and_precision**: small: capsule units have little play but must be mounted on the axis of rotation; mounting one off-centre makes the leads flex every turn (Chief Delphi). Electrical 'noise' (resistance change while turning) is under 0.01 ohm for hobby capsules (SRC022 data sheet). Rotary unions need low runout: side-loading from stiff hoses or a mismatched mounting face causes runout and seal wear (GTI Spindle); O-ring rotary seals allow only about 0.002-0.003 in of eccentricity (Canyon Components).
- **access_needed**: end of a tube or shaft: capsule slip rings and most rotary unions fit on the end of the axis of rotation; through-bore slip rings slide over a shaft or round a central hose (TME Systems)
- **materials**: Slip rings: precious-metal (gold-plated) contacts, brass or copper rings, graphite or metal brushes, engineering-plastic housings, FEP-insulated silver-plated leads (SRC012/SRC022 data sheets; Wikipedia; Hackaday). Rotary unions: stainless steel or aluminium housings, ball or tapered roller bearings or bronze or graphite bushings, and elastomer, face or lip seals chosen for the fluid, pressure, speed and temperature (Wikipedia, Rotary union; Moog). DIY: copper pipe rings with motor carbon brushes (Printables 1071530), ball bearings used as rotating contacts (Printables 103824, 162154), copper sheet and guitar-string wipers (Hackaday).
- **maker_difficulty**: moderate: a bought capsule slip ring is easy to fit (screw on the flange, solder the leads), but designing the turning joint round it and making your own reliable contacts or a leak-free fluid union is hard

### Making it

- **processes**: 
  - off-the-shelf part: capsule and through-bore slip rings (6 to 36 circuits), pneumatic and water rotary unions, combined electrical and pneumatic units
  - 3D print (FDM): housings, ring carriers and mounts for DIY slip rings (with copper pipe rings, brushes or ball bearings), mounts for bought slip rings, swivelling low-pressure hose adapters (e.g. vacuum hose swivels) *(unverified parts omitted)*
- **print_in_place**: no: printed slip rings combine printed carriers with metal rings, brushes, bearings and wires, assembled by press-fitting and soldering (Printables 103824; Printables 1071530)
- **making_tips_3d_printing**: 1) Buy the contacts: hobby capsule slip rings are cheap and well-sealed compared with DIY contacts; print a mount that holds the rotating part on its own bearing and lets the slip ring only follow it (Hackaday reader comments: a capsule unit has no hole for an axle, so either use it as the axle end or mount it on a hollow shaft or in the hole of a lazy-Susan bearing). 2) Mount it exactly on the axis; a ring mounted off-centre makes its leads flex on every turn (Chief Delphi). 3) DIY rings: 3/4 in copper pipe cut into 4 mm rings on a pipe cutter, pressed onto a printed bush, work as ring contacts; solder the wires to the copper before press-fitting, because soldering afterwards distorts the plastic (Printables 103824). Using ball bearings' outer races as contacts with plain wire or screw contacts works for light duty but loses contact under vibration (Printables 103824). Copper pipe with small motor brushes makes a simple two-conductor ring (Printables 1071530). Copper sheet with guitar-string wipers worked but with noticeable friction (Hackaday, double pendulum). 4) For a few low-current circuits, a quality audio jack and plug can act as a slip ring (Hackaday, 2020 and 2025). 5) Rotary union: seal a turning shaft with O-rings in grooves either side of a groove fed by the inlet; support the shaft on bearings, because the O-ring groove shouldn't act as a bearing; keep the O-ring squeeze low (0-11% for 0.070 in section) and the surface speed low (Canyon Components). 6) Low-pressure air such as dust extraction can simply use a printed swivel collar (Printables 386782: a 360° swivelling vacuum connector, best in PETG). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'slip ring', 'capsule slip ring', 'miniature slip ring 12 wire', 'slip ring with flange 22 mm' (Adafruit), 'through bore slip ring' or 'hollow shaft slip ring', 'pancake slip ring', 'Ethernet slip ring', 'USB slip ring', 'fibre optic rotary joint (FORJ)' (Moog), 'mercury slip ring' (Mercotac (brand)), 'contactless slip ring' or 'inductive rotary coupler'. Alternatives: 'clock spring' (steering wheel), 'bidirectional cable chain' or 'twister chain' for turrets (Chief Delphi; Printables 919579). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Hobby capsule slip rings (Prosper SRC012 and SRC022 series, sold by Adafruit): 2 A per ring, 240 V AC/DC rated, 0-300 rpm, electrical noise under 0.01 ohm, -20 to +80 °C, AWG 26-28 leads; the 12-circuit, 22 mm unit is 28 mm long, the 12 mm miniature is 19.5 mm long (Adafruit product pages; SRC012 and SRC022 data sheets).
  - Do you really need endless rotation? To point in any direction a turret only needs +/-180°, which halves the cable length needed for a simple service loop (Chief Delphi, 'Service Loop for Turret').
  - Rate every ring for the full current of its circuit; FRC rules require the whole electrical path, slip ring included, to be rated for the breaker, and a 2015 FRC answer accepted two 30 A slip-ring legs in parallel on a 40 A breaker (Chief Delphi, 'Slip Rings', quoting FRC rule R58 and Q&A 85).
  - Keep motor power circuits apart from signal circuits in the slip ring, shield feedback signals, and allow for voltage drop across the contacts (TME Systems guide). For fast data (Ethernet, video) use slip rings made for it or a fibre optic rotary joint (Moog; TME Systems).
  - Rotary O-ring seals: surface speed (ft/min) = 0.26 x shaft diameter (in) x rpm; for a 0.070 in cross-section O-ring the limit is 200-1500 ft/min, for 0.103 in 200-600, for 0.139 in 200-400; squeeze only 0-11%; clearances assume 80 Shore A O-rings and no more than 800 psi; not usually for below -40 °C or above 121 °C (Canyon Components, rotary groove guide).
  - Rotary unions wear out through their seals: filter the fluid to 50 microns or finer, avoid side-loading from hoses, pressure spikes, running dry or over the rated rpm, and expect a little leakage by design in some types (GTI Spindle, citing Advanced Machine and Engineering).
  - Mercury-wetted slip rings stop working below about -40 °C, when mercury freezes, and bring toxicity concerns (Wikipedia, Slip ring).
  - Wireless (inductive) slip rings don't wear but carry far less power than a contact ring of the same size (Wikipedia, Slip ring).

### When to use it

- **everyday_examples**: 
  - Car alternators, wound-rotor motors, wind turbines and generators, which feed the spinning part through slip rings (Wikipedia, Slip ring; Wikimedia Commons hydroelectric generator photo)
  - Ferris wheels, aerodrome beacons, radio telescopes and rotating signs (Wikipedia, Slip ring; McMaster-Carr)
  - Automatic car washes, whose spinning brushes are fed detergent water through rotary unions (Wikipedia, Rotary union)
  - A car's steering-wheel clock spring, a spiral flat cable that does the same job for a limited number of turns (Wikipedia, Clockspring)
  - The swivel 'untangler' on a telephone handset cord (Wikimedia Commons)
- **when_to_use**: Use a slip ring when something must keep turning the same way while powered or sending signals: robot turrets and spinning lidar heads, camera motion-control rigs, motorised turntables with lights, spinning clocks and displays, cable reels that stay connected while unwinding (Hackaday; Adafruit; Printables 950300). Use a rotary union when a liquid, air or vacuum has to reach a turning part: car-wash brushes and spinners, coolant or air through a machine-tool spindle, rotary index tables and chucks, swivelling hose connectors (Wikipedia, Rotary union; GTI Spindle; Printables 386782). They avoid the weight, bulk and fatigue of cable loops (TME Systems).
- **when_not_to_use**: If the part only turns part of a revolution, or a few turns back and forth, use a cable loop, clock-spring (spiral) cable or a bidirectional cable chain; they are cheaper and have no sliding contacts to wear or add noise (Chief Delphi; Wikipedia, Clockspring). For very high speed or fast data, use a contactless (inductive) coupler or a fibre optic rotary joint (Wikipedia, Rotary transformer; Moog). Don't feed high motor currents through tiny capsule rings (2 A per ring; Adafruit). *(unverified parts omitted)*
- **environment_limits**: Hobby capsule slip rings: -20 to +80 °C, 0-300 rpm (SRC012/SRC022 data sheets); running faster shortens life and adds noise (Adafruit). Dust wears brush contacts and industrial units need IP65/IP67 sealing in dusty or wet places (TME Systems). Mercury-wetted rings freeze at about -40 °C (Wikipedia). Rotary union life falls with speed, pressure, heat, dirty fluid and pressure pulses (GTI Spindle); O-ring rotary seals are not usually used below -40 °C or above 121 °C (Canyon Components). Printed parts: PLA gives at about 60 °C and PETG at about 80 °C (CNC Kitchen); friction in rotary seals generates heat (Canyon Components).
- **safety_notes**: Mercury-wetted slip rings contain toxic mercury (Wikipedia). Pressurised rotary unions can leak or spray the working fluid (GTI Spindle). *(unverified parts omitted)*
- **common_failures**: Brush and ring wear causing electrical noise, flickering or data errors, especially with dust or at high speed (TME Systems; Wikipedia, Rotary transformer: slip rings suffer friction, wear and intermittent contact). DIY contacts losing touch under vibration (Printables 103824) or rubbing with high friction (Hackaday, double pendulum). Lead wires fatiguing when the slip ring is mounted off-axis (Chief Delphi). A slip ring used as the axle and bent by side loads (Hackaday comments). Rotary unions: worn seals from dirty fluid, side-loaded hoses, running dry or overspeed, then leaks (GTI Spindle). *(unverified parts omitted)*
- **related**: 
  - Cable loop (service loop) or clock-spring spiral cable: cheaper, no sliding contacts, but only for a limited number of turns (Chief Delphi; Wikipedia, Clockspring)
  - Bidirectional (twisting) cable chain: guides cables round a turret for limited rotation (Printables 919579; Chief Delphi)
  - Rotary transformer (contactless slip ring): passes power and data through coils without wear, but less power (Wikipedia)
  - Fibre optic rotary joint: passes light signals for very fast data (Moog)
  - Audio jack and plug used as a slip ring: a cheap hack for a few low-current circuits (Hackaday)
  - Turntable bearing (lazy Susan, slewing ring): carries the turning platform's load; its large centre hole is where a through-bore slip ring or rotary union often sits
  - Cable gland: seals a cable where it passes through a fixed wall, rather than a turning joint
  - Detangler: the mechanical (cable-pull) equivalent for BMX brake cables (Wikipedia)

### Pictures, videos and models

- **links**: 
  - [File:Sliprings annotated.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Sliprings_annotated.jpg): Slip rings on a hydroelectric generator: spring-loaded graphite brushes on steel rings, labelled *(licence: CC BY-SA 3.0 (Wtshymanski))*
  - [File:Slip-rings-fiber-brush.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Slip-rings-fiber-brush.png): Illustration of a fibre-brush slip ring: bundles of fine wires rubbing on a stack of rings *(licence: CC BY-SA 4.0 (Servotecnica))*
  - [File:Rotary-union-components.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Rotary-union-components.jpg): The components that make up a rotary union *(licence: CC BY-SA 4.0 (Hotshot6902))*
  - [6-circuit slip-ring teardown (YouTube, bigclivedotcom; title confirmed through YouTube oEmbed, video not watched; described in Hackaday's 'What's In A Slip Ring?')](https://www.youtube.com/watch?v=XTPcSdeAd2Q): Teardown of a small capsule slip ring: a rotor with six brass rings on small bearings and a set of gold-plated spring contacts *(licence: link only (standard YouTube licence))*
  - [Slip Ring with Flange - 22mm diameter, 12 wires, max 240V @ 2A (Adafruit)](https://www.adafruit.com/product/1196): Photos and a video of a typical hobby capsule slip ring, with ratings and data sheet *(licence: link only)*
- **make_it_yourself**: 
  - [Slip Ring (Glenn, Printables; URL from search results, details read through the Printables API)](https://www.printables.com/model/1071530-slip-ring): A printed two-conductor slip ring made with 1/2 in copper pipe and small motor brushes; OpenJSCAD source on GitHub (gharris012/SlipRing) *(licence: CC BY)*
  - [Robust 2 pole Slip ring - Horizontal mount (Flex, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/103824-robust-2-pole-slip-ring-horizontal-mount): A vibration-resistant DIY slip ring using ball bearings and 3/4 in copper pipe rings on a printed bush, with build notes *(licence: CC BY-SA)*
  - [2-4 Pole slip ring - horizontal and vertical mount (Flex, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/162154-2-4-pole-slip-ring-horizontal-and-vertical-mount): An upgraded 2-4 pole version using 20 mm copper pipe electrodes and 18x12x4 mm bearings that also acts as the load bearing *(licence: CC BY-SA)*
  - [Bidirectional Cable Chain for Rotational Systems (Lndnny, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/919579-bidirectional-cable-chain-for-rotational-systems): A printable twisting cable chain for turrets with limited rotation, the main alternative to a slip ring (used by FRC teams, Chief Delphi) *(licence: CC BY-NC-SA)*
  - [90° swivel vacuum connector for Dewalt miter saw (Maarten Vlug, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/386782-90deg-swivel-vacuum-connector-for-dewalt-miter-saw): A printed 360° swivelling hose connector, the simplest low-pressure 'rotary union' for dust extraction; STEP files included *(licence: CC BY-SA)*
- **diagram_idea**: Side-by-side cut-aways on one shaft: left, a slip ring with three coloured rings on the turning shaft and three spring brushes on the fixed housing, each wire colour-matched to its ring; right, a rotary union with a fixed housing, an inlet feeding a groove that runs all round the shaft, a cross-drilled hole in the shaft, and O-rings either side; an arrow shows the shaft spinning many turns while the outside wires and hose stay still.
- **sources**: 
  - https://en.wikipedia.org/wiki/Slip_ring
  - https://en.wikipedia.org/wiki/Rotary_union
  - https://en.wikipedia.org/wiki/Clockspring
  - https://en.wikipedia.org/wiki/Rotary_transformer
  - https://en.wikipedia.org/wiki/Detangler
  - https://www.adafruit.com/product/1196
  - https://www.adafruit.com/product/1195
  - https://cdn-shop.adafruit.com/datasheets/SRC012.pdf
  - https://cdn-shop.adafruit.com/datasheets/SRC022A-6.pdf
  - https://hackaday.com/2023/06/19/whats-in-a-slip-ring/
  - https://hackaday.com/2019/11/15/double-pendulum-uses-custom-slip-rings/
  - https://hackaday.com/tag/slip-ring/
  - https://hackaday.com/tag/slip-rings/
  - https://www.chiefdelphi.com/t/slip-rings/160095
  - https://www.chiefdelphi.com/t/service-loop-for-turret/375005
  - https://www.chiefdelphi.com/t/turret-cable-managment/514135
  - https://sliprings.com.au/blog/selecting-a-slip-ring-for-robotic-arm-applications-a-technical-guide/
  - https://www.moog.com/products/slip-rings.html
  - https://www.moog.com/products/fluid-rotary-union.html
  - https://gtispindle.com/blog/monitoring-rotary-unions-avoid-spindle-failure/
  - https://www.canyoncomponents.com/dynamic-rotary-design
  - https://www.mcmaster.com/products/rotary-unions/
  - https://www.mcmaster.com/products/slip-rings/
  - https://blog.prusa3d.com/watertight-3d-printing-part-2_53638/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/Category:Slip_rings
  - https://commons.wikimedia.org/wiki/File:Sliprings_annotated.jpg
  - https://commons.wikimedia.org/wiki/File:Slip-rings-fiber-brush.png
  - https://commons.wikimedia.org/wiki/File:Rotary-union-components.jpg
  - https://commons.wikimedia.org/wiki/File:Untangler.jpg
  - https://www.youtube.com/watch?v=XTPcSdeAd2Q
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, making_tips_3d_printing, off_the_shelf_parts, processes, safety_notes, tools_needed, when_not_to_use

## 136 Cable carrier (drag chain, energy chain)

*seals & pass-throughs.* A chain of hinged hollow links that carries cables and hoses neatly along a moving axis without kinking; one of the most printed functional parts

*Also covers:* Also covers the festoon cable system (cables hung in loops from trolleys running along a track)

### What it is

- **plain_name**: A chain of hollow plastic links, hinged together, that carries a bundle of cables or hoses and rolls along behind a moving part, so the cables always bend in a gentle curve and never tangle, kink or get caught
- **term**: Cable carrier (drag chain, energy chain)
- **aliases**: 
  - drag chain, cable drag chain (Wikipedia 'Cable carrier'; maker usage on Printables)
  - energy chain, e-chain (e-chain is a brand of igus) (Wikipedia; igus)
  - cable chain (Wikipedia; Hackaday)
  - cable track, CAT track, cable and hose carrier (names listed in 'Basics of Cable Carriers', Machine Design / igus, 2013)
  - Energiekette, Schleppkette (German; Wikimedia Commons, Printables model titles)
  - Kabelschlepp (brand; the company that brought steel cable carriers to market in the 1950s, per Wikipedia)
  - enclosed cable carrier, tube-type or conduit-type carrier (fully closed versions) (Basics of Cable Carriers)
  - multi-axis cable carrier, robot dress pack; triflex (brand, igus) (Basics of Cable Carriers)
  - rotary cable carrier; twisterband (brand, igus) (Basics of Cable Carriers)
- **family**: seals & pass-throughs
- **other_families**: sliding, telescoping & linear motion, print-in-place & 3D-printing joints
- **one_liner**: A cable carrier is a flexible chain of hinged, hollow links that bends only one way and not too tightly, carrying cables and hoses to a moving part of a machine so they are guided, protected and never over-bent or tangled.
- **complexity**: A small assembly that acts as one unit: many identical links (two side plates joined by crossbars, or one-piece moulded links) that pivot on pins or round bosses of the next link; crossbars or lids that open so cables can be laid in; optional separators and shelves inside; two end links or mounting brackets (one fixed, one moving); and strain-relief clamps or cable-tie plates for the cables (Wikipedia 'Cable carrier'; Basics of Cable Carriers).
- **how_it_works**: Each link can swing only a limited angle against its neighbour, in one plane and usually in only one direction, because stop faces on the links butt together (Wikipedia 'Cable carrier'). One end is screwed to the fixed frame and the other to the moving carriage; as the carriage travels, the chain rolls over itself in a U-shaped loop that moves along with it, a bit like a caterpillar track, so the cables inside are only ever bent round that loop and never tighter than the chain's minimum bend radius (Basics of Cable Carriers; Hackaday reader comment: they 'enforce a minimum bend radius'). The upper run stays straight and self-supporting up to a certain length, after which it sags and must glide on the lower run or be supported (igus 'Unsupported applications'). The cables lie loosely inside with some free space and dividers so they can slide as the chain bends, and are clamped at the ends (strain relief) so they don't creep in and out (igus 'Filling rules'; Basics of Cable Carriers).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: guides power, signal, air, oil or water lines, and PTFE filament tubes, to a part that moves
  - let it move (turn, slide or bend): its hinged links roll along with a sliding (or, in rotary versions, a turning) machine axis
- **motion**: rotate: each link pivots through a small, limited angle on its neighbour, and only one way; together the links roll along with a sliding axis, so the moving end travels in a straight line (industrial travels can be more than a quarter mile, per Basics of Cable Carriers). Chains laid on their side with a reversed bend follow a turning or swivelling part instead (Wikimedia Commons 'Cable drag chain rotating 3D animated.gif').
- **degrees_of_freedom**: 1 at each link (a hinge that turns a limited angle about its pin) and 1 for the chain as a whole: the moving end goes back and forth along one line (or round one axis for rotary types) while the chain stays in one plane. Multi-axis carriers made of ball-and-socket segments add twisting and 3D movement; igus's triflex R can twist up to 360° per yard (Basics of Cable Carriers).
- **special_behaviour**: 
  - none: it has none of the listed clever behaviours. Its own tricks are a built-in minimum bend radius (the links stop at a set angle, so cables can't be bent too tightly) and one-way bending with a straight or slightly arched upper run, so the chain can't flop sideways, twist or fold the wrong way (Wikipedia 'Cable carrier'; one printable design is deliberately given a slight curve 'to make sure the chain wont accidently bend the opposite way', Printables 'Bambu Lab P1P Printable Cable Drag Chain')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it guides and protects cables rather than holding parts together
  - shape (the parts interlock; form-fit): the links snap together on pins or bosses, and the crossbars or lids clip shut
  - friction or clamping (force-fit): the cables are fixed at the ends with strain-relief clamps or cable ties (Basics of Cable Carriers)
- **input_output**: not applicable
- **power**: passive (no power needed): the chain is simply dragged along by the machine's moving part.
- **removability**: removable: the end brackets are screwed on, the crossbars or lids open anywhere along the chain so cables can be added or removed, and links can be pried apart to shorten or lengthen the chain (Wikipedia 'Cable carrier'; Basics of Cable Carriers; a printed design's notes say 'To remove the latches, insert a small flat head screwdriver and twist', Printables).
- **reuse_cycles**: many times: crossbars and lids are meant to be opened for inspection and cable changes (Basics of Cable Carriers). Printed snap-on clips and link hinges loosen with use, so printed chains wear out sooner than moulded ones (Printables 'Bambu Lab P1P Printable Cable Drag Chain').
- **tools_needed**: A screwdriver or hex key with screws or T-nuts to fix the two end brackets (Hackaday: chains 'affixed into the aluminium extrusion with bolts and T-nuts'); a small flat screwdriver to open crossbars or separate links; cable ties, tie-wrap plates or clamps for strain relief (Basics of Cable Carriers). Printed links usually just press together; some designs use toothpicks as pins or clips that are tapped in (Printables 'Fully Parametric Drag Chain'; Hackaday 2022).
- **seal**: none for open types; dust-resistant for fully enclosed and tube types, whose solid covers keep machining chips, sawdust, weld spatter and other debris off the cables (Basics of Cable Carriers; Wikipedia 'Cable carrier'). They are not watertight.
- **load**: light to medium: it only has to carry the weight of its cables and hoses plus the forces of speeding up and slowing down. Each size has a rated fill weight for a given unsupported length (igus load diagrams), and 'a typical plastic cable carrier with a 2.5-in. inner height handles about 1,800 lb' of total push-pull force (Basics of Cable Carriers). Strong along its length and in its bending plane; weak sideways and in twist, so it must run in line with the axis and be guided in a trough on long, fast travels (igus 'Unsupported applications'). *(unverified parts omitted)*
- **adjustable**: yes, in length only: add or remove links, and move separators and shelves inside. The bend radius is fixed by the link shape, although parametric printable designs let you choose the minimum and maximum bend radius before printing (Printables 'Fully Parametric Drag Chain').
- **play_and_precision**: small play at every link hinge by design, because it must move freely; it doesn't locate anything precisely. A well-fitted printed chain should have 'very little movement (almost none) when wiggling the links in any other direction other then rotating' (Printables 'Bambu Lab P1P Printable Cable Drag Chain'). *(unverified parts omitted)*
- **access_needed**: not applicable: it is screwed on at its two ends, and cables are laid in from the openable side of the links.
- **materials**: Mostly injection-moulded plastic: nylon (polyamide) or glass-filled nylon for low-cost chains, which 'become brittle at cold temperatures and many formulations absorb water'; tougher engineering plastics such as UHMW polyethylene, PTFE and acetal; igus uses its own nylon-based 'igumid' blends (brand) (Basics of Cable Carriers). Wikipedia also names polypropylene. Steel or stainless steel for heavy, hot or abrasive jobs, and hybrids with plastic side links and steel or aluminium crossbars (Basics of Cable Carriers; Wikipedia). 3D-printed chains are usually PETG or tough 'PLA+', with ASA near heat: one maker's PETG chain ran on a CNC for almost a year without problems, while a designer warns 'DO NOT USE PLA, IT WILL BREAK' for the mounting parts of a printer chain (Printables). The cables inside should be continuous-flex 'chain-suitable' cables with slippery, abrasion-resistant jackets (Basics of Cable Carriers).
- **maker_difficulty**: easy: dozens of free printable designs exist and cheap moulded chains are easy to buy. The main fiddly part is getting printed link hinges to the right tightness, which usually needs a small test print (Printables 'Bambu Lab P1P Printable Cable Drag Chain').

### Making it

- **processes**: 
  - off-the-shelf part: moulded plastic or steel chains sold by inner width x inner height and bend radius, with matching end brackets
  - 3D print (FDM): one of the most printed functional parts, either as separate snap-together links or as print-in-place strips (Printables; Hackaday 2022)
  - CNC: end brackets and mounts; steel chains for heavy industrial machines (Basics of Cable Carriers)
  - sheet metal: steel link plates for heavy-duty chains (Basics of Cable Carriers) *(unverified parts omitted)*
- **print_in_place**: yes: some designs print already linked and working, e.g. a 'Print-in-place Cable Chain' that 'moves freely when taken out of buildplate' and a parametric chain that can be printed in place or assembled (Printables). Most popular designs are printed as separate links and snapped together, and one designer who tried print-in-place found 'the chain link parts fused to each other' (Printables 'Drag Chain for CNC, two-piece, snap-open').
- **making_tips_3d_printing**: 1) Start with a proven or parametric design rather than drawing your own: OpenSCAD and Fusion 360 models let you set inside width and height, the minimum and maximum bend radius, pins on the inside or outside, open or closed links, and the hinge tolerance (Printables 'Fully Parametric Drag Chain', 'Yet Another Parametric Drag Chain'). 2) Size the inside for the cables first: allow about 10% free space around electrical cables and 20% around hydraulic hoses, and don't fill more than about 60% of the cross-section (igus 'Filling rules'; Basics of Cable Carriers). 3) Choose the bend radius from the stiffest cable (at least 8-10 times the thickest cable or hose diameter, Basics of Cable Carriers); one printer chain uses an 18 mm minimum radius for thin wires, while a CNC chain uses a 64 mm radius for cables that shouldn't bend tighter than 128 mm across (Printables). 4) Print a hinge test first: one designer supplies links with holes at 0.00, +0.02 and -0.02 mm and asks you to snap three short chains together, work them back and forth a few times, and keep the size that is snug but moves; PETG needed tighter (smaller) holes than PLA+ (Printables 'Bambu Lab P1P Printable Cable Drag Chain'). Chamfers on the hinge bosses make pressing links together easier (same source). 5) Print links flat without supports; good designs avoid long bridges, e.g. with an angled roof (Printables 'Parametric Drag Chain'). Typical settings from one CNC chain: 0.4-0.6 mm nozzle, 0.3 mm layers, 50-100% infill, no supports (Printables 'Drag Chain for CNC, two-piece, snap-open'). 6) If the assembled chain sags or won't lie straight, the hinge fit is off: that designer suggests nudging flow up 1-5% if it sags, or down if it won't lie straight, and printing links rotated in all four directions on the bed so small printer errors cancel out instead of curving the chain (same source). 7) Print small snap-on clips on a separate plate if they come loose from the bed (same source). 8) Material: PETG or tough PLA+ for links, ASA near hot beds or motors; plain PLA is brittle and softens from about 60 °C, PETG from about 80 °C and ASA from about 110 °C (CNC Kitchen). 9) Add a slight built-in arch or incline to reduce sag on unsupported runs; one designer added a 2° incline to the mount (Printables 'Bambu Lab P1P Cable Drag Chain Assembly'). 10) Expect printed hinges to loosen and wear over time: 'the Amazon chain is still a better option overall when it comes to durability and smoothness' (Printables 'Bambu Lab P1P Printable Cable Drag Chain').
- **off_the_shelf_parts**: Search for 'cable carrier', 'drag chain', 'cable drag chain' or 'energy chain', usually listed by inner height x inner width (small maker sizes such as 10 x 11 mm, 10 x 15 mm, 15 x 20 mm and 20 x 40 mm appear in printable and replacement designs) plus bend radius R and whether it is open, snap-open (openable crossbars) or fully enclosed (tube) (Basics of Cable Carriers; Printables). Related parts: end brackets or mounting brackets; interior separators and shelves; strain-relief clamps and tie-wrap plates; guide troughs or channels and glide bars for long travels; continuous-flex 'high-flex' or 'chain-suitable' cable, e.g. chainflex (brand, igus). Industrial names: e-chain (brand, igus), Kabelschlepp (brand), triflex multi-axis robot carriers and twisterband rotary carriers (brands, igus) (Wikipedia; Basics of Cable Carriers; igus).
- **rules_of_thumb**: 
  - Bend radius: at least the minimum bend radius of the stiffest cable or hose, and as a rule 8 to 10 times the outside diameter of the largest one; the radius is measured to the centre of the link pivot pin, not the overall loop height (Basics of Cable Carriers, Machine Design / igus 2013). A larger radius than the minimum extends service life (igus 'Filling rules').
  - Free space: at least 10% clearance all round for round electrical cables and 20% for hydraulic hoses (pneumatic 5-10%, flat cables 10%, other media hoses 15-20%); fill the cavity no more than about 60% (igus 'Filling rules'; Basics of Cable Carriers).
  - Separate cables that could swap places or tangle: if two cable diameters added together are 1.2 times the inside height or less, fit a divider or shelf; a compartment holding several similar cables side by side should be no taller than 1.5 times their diameter; spread the weight evenly across the width (igus 'Filling rules').
  - Chain length is roughly half the total travel plus the length of the curved loop; mounting the fixed end at the middle of the travel gives the shortest chain (Basics of Cable Carriers).
  - Strain-relieve cables at the moving end and, whenever possible, at both ends; hydraulic hoses only at the moving end (Basics of Cable Carriers; igus '7 Guidelines for Cable Installation'). Lay cables straight and untwisted, unrolled from the spool rather than pulled off over the flange, so each can move freely from side to side (igus 'Filling rules'; igus '7 Guidelines'). For ordinary cables igus recommends a gap of 10-30 times the cable diameter between the end of the bend and the clamp (igus 'Filling rules').
  - Unsupported spans: small plastic carriers are typically rated for 2 to 15 ft (about 0.6-4.6 m) of unsupported span depending on size (Basics of Cable Carriers). A sag of more than half a chain height counts as 'with sag'; beyond the permitted sag the chain must glide or be supported, and in unsupported setups high acceleration, not speed, is what shortens life (igus 'Unsupported applications').
  - High-pressure hoses can change length by about +2 to -4% with pressure, so leave room for it (Basics of Cable Carriers).

### When to use it

- **everyday_examples**: 
  - The chain that carries the print-head cables and filament tube on many 3D printers, e.g. the one on the Bambu Lab X1 that makers copy for other models (Printables 'Bambu Lab P1P Cable Drag Chain Assembly')
  - Hobby CNC routers and laser cutters, where chains carry the spindle and motor cables along each axis (Hackaday 2017 and 2022)
  - Automatic car washes, where the moving brush gantry trails its hoses and cables (Wikipedia 'Cable carrier')
  - Factory robots, machine tools, cranes and theatre stage machinery (Wikipedia 'Cable carrier')
- **when_to_use**: Use a cable carrier whenever cables or hoses have to follow something that moves back and forth over and over, such as the axes of a 3D printer, CNC router, laser cutter, camera slider, linear robot or sliding door. It keeps the wiring tidy, stops it being snagged or crushed by moving parts, and above all stops it being bent too tightly again and again, which is what breaks wires (Wikipedia 'Cable carrier'; Hackaday 2017). Choose an enclosed type if chips, sawdust or hot debris fly around (Basics of Cable Carriers). Printing your own is worthwhile when you need an odd size or custom mounts, or can't wait for delivery (Hackaday 2022).
- **when_not_to_use**: For something that keeps turning round and round, use a slip ring or rotary union instead; a chain only follows limited travel (rotary chains and 'twisterband' style carriers manage a limited number of degrees, e.g. about 3,000°, per Basics of Cable Carriers). For a robot arm that twists and bends in 3D, use a multi-axis carrier or a dress pack. For a few light wires on a short axis, a cheaper option is a strip of tape-measure steel inside braided sleeving, which holds a U-shaped curl and stays sag-free (Hackaday 2017). For cables that don't move, cable ties or clips are enough. Hackaday readers point out that printing large chains can take as long as delivery and that moulded chains move more smoothly and last longer (Hackaday 2022).
- **environment_limits**: Moulded igus 'igumid G' chains are rated suitable for outdoor use and are used down to -40 °C, though fitting them may be difficult below about -25 °C, and 130 °C continuous is possible with reduced strength and life (igus 'Technical Environment'). Cheap nylon chains become brittle in the cold and absorb water (Basics of Cable Carriers). Printed chains are limited by their plastic: PLA gives way at about 60 °C, PETG at about 80 °C and ASA at about 110 °C (CNC Kitchen), so keep PLA chains away from heated beds and enclosed hot printers. Hot metal chips need steel or special high-temperature carriers (Basics of Cable Carriers). High accelerations make chains vibrate and shorten their life (igus 'Unsupported applications'). Printed hinges loosen and wear over time (Printables).
- **safety_notes**: It is mainly a safety device: a proper carrier keeps cables away from moving parts, and badly managed wiring can end in 'a dead machine at best, and some kind of raucous fire at worst' (Hackaday 2022; Wikipedia: cable carriers 'improve operator safety'). Cables whose insulation has worn through inside a chain can short out, so inspect them through the opening crossbars (Basics of Cable Carriers: carriers with easy-open crossbars 'permit more frequent inspection'). *(unverified parts omitted)*
- **common_failures**: Cables breaking inside because ordinary cable 'corkscrews' when bent thousands of times, or because the bend radius is too tight; use continuous-flex cable and a big enough radius (Basics of Cable Carriers). Cables tangling, rubbing or swapping places because the chain is overfilled or has no dividers; overfilling is 'probably the most-common design mistake' (Basics of Cable Carriers). Cables creeping and wearing because there's no strain relief, or pulling tight because they were twisted when laid in (Basics of Cable Carriers; igus 'Filling rules'). The upper run sagging and dragging on the lower run on long travels; a steel chain that does this 'will quickly saw itself to pieces' (Basics of Cable Carriers). Printed links wearing loose, sagging, or popping apart, and PLA mounting parts cracking; use a hinge test print and PETG or PLA+ (Printables). A PTFE filament tube or stiff hose clipped in too many places, forcing the chain out of its path (Printables 'Bambu Lab P1P Printable Cable Drag Chain').
- **related**: 
  - Cable gland and strain relief: seals and grips a cable where it passes through a wall; used at the ends of a carrier, not along a moving path
  - Slip ring and rotary union: pass power, signals or fluid across a joint that keeps turning, which a chain can't do
  - Tape-measure cable guide: a strip of tape-measure steel in braided sleeving that holds a U-shaped curl; cheaper and slimmer for a few light wires (Hackaday 2017)
  - Multi-axis cable carrier / robot dress pack: ball-and-socket segments that can twist and bend in 3D for robot arms (Basics of Cable Carriers)
  - Rotary cable carrier (e.g. twisterband, brand): a spiral carrier for limited turning motion (Basics of Cable Carriers)
  - Spiral wrap, braided sleeving and coiled (curly) cables: bundle or stretch cables but don't enforce a bend radius
  - Constant-force spring and spring-return cable reels: wind a cable or hose back in, instead of letting it fold in a loop
  - Print-in-place hinge: the same pin-and-socket idea that printed chain links use, printed already assembled

### Pictures, videos and models

- **links**: 
  - [Cable drag chain unsupported 3D animated.gif (Wikimedia Commons, by Silberwolf)](https://commons.wikimedia.org/wiki/File:Cable_drag_chain_unsupported_3D_animated.gif): Animation of a self-supporting energy chain rolling back and forth as its moving end travels *(licence: CC BY-SA 2.5)*
  - [Cable drag chain rotating 3D animated.gif (Wikimedia Commons, by Silberwolf)](https://commons.wikimedia.org/wiki/File:Cable_drag_chain_rotating_3D_animated.gif): Animation of a chain lying on its side with a reversed bend, carrying cables to a turning or swivelling part *(licence: CC BY-SA 2.5)*
  - [Cable drag chain-plastic.jpg (Wikimedia Commons, by Matthias Krüger)](https://commons.wikimedia.org/wiki/File:Cable_drag_chain-plastic.jpg): Photo of a fully closed plastic cable drag chain *(licence: CC BY 2.5)*
  - [How to make your own cable chains? (YouTube, Nikodem Bartnik)](https://www.youtube.com/watch?v=dMEKEeV_7Ls): Video of designing, printing and fitting 20 mm and 40 mm printed cable chains on a DIY CNC machine (title and channel checked via YouTube oEmbed and the Hackaday write-up; not watched) *(licence: link only (standard YouTube licence))*
  - [Filling rules - cables and hoses in energy chains (igus energy chain wiki)](https://www.igus.eu/energy-chain/wiki/filling-rule): Illustrated rules for how much free space to leave around cables and hoses, when to use separators, and bend radius *(licence: link only)*
- **make_it_yourself**: 
  - [Fully Parametric Drag Chain (Gasol1n, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/40345-fully-parametric-drag-chain): OpenSCAD / Customizer model where you set width, height, length, minimum and maximum bend radius, pin position, open or closed links, clip or toothpick closure and hinge tolerance; prints without supports; remix of Joerg Scheuermann's Thingiverse design. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Parametric Drag Chain (Adam Oellermann, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/209371-parametric-drag-chain): OpenSCAD chain that can be printed in place or as separate links, with an angled roof so large links need no difficult bridging; no supports. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Print-in-place Cable Chain (Mañolo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/568258-print-in-place-cable-chain): A simple chain that prints in place as one piece and moves freely once removed from the bed; good for trying the idea. Read through the Printables public API. *(licence: Public domain (Creative Commons Public Domain))*
  - [Bambu Lab P1P Printable Cable Drag Chain (Brody, Printables)](https://www.printables.com/model/385282-bambu-lab-p1p-printable-cable-drag-chain): Snap-together printer chain with an 18 mm minimum bend radius and a tolerance test print (0.00 / +0.02 / -0.02 mm holes) for tuning the hinge fit. URL seen in search results; details read through the Printables public API. *(licence: CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives))*
  - [Drag Chain with removable closing brackets (Marius Hornberger, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/70839-drag-chain-with-removable-closing-brackets): Larger chain for a CNC router with clip-off closing brackets; printed in PLA at stock settings, no supports. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
- **diagram_idea**: A side view of a chain in its U-shaped loop, fixed end bolted to the frame at the bottom and moving end on the carriage at the top, with the carriage shown in two positions so the loop visibly rolls along; labels for bend radius R, the straight upper run and the curve; plus a close-up of two links showing the pivot pin and the stop faces that limit how far they can bend.
- **sources**: 
  - https://en.wikipedia.org/wiki/Cable_carrier
  - https://www.igus.com/contentData/Product_Files/Download/pdf/Basics_of_Cable_Carriers.pdf
  - https://www.igus.eu/energy-chain/wiki/filling-rule
  - https://www.igus.eu/energy-chain/wiki/application-types/cantilevered
  - https://www.igus.com/cable-carriers/resources/energy-chains-designing-igumid-com?C=US
  - https://www.igus.com/company/unharnessed-cables-guidelines-for-cable-installation-ca
  - https://hackaday.com/2022/04/12/skip-the-shipping-print-your-own-cable-chains/
  - https://hackaday.com/2017/12/17/diy-cable-chain-looks-great-stays-cheap/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:Cable_drag_chain_unsupported_3D_animated.gif
  - https://commons.wikimedia.org/wiki/File:Cable_drag_chain_rotating_3D_animated.gif
  - https://commons.wikimedia.org/wiki/File:Cable_drag_chain-plastic.jpg
  - https://www.youtube.com/watch?v=dMEKEeV_7Ls

### Other info

- **Fields with unverified parts:** load, play_and_precision, processes, safety_notes

## 210 Compression fitting (ferrule fitting)

*seals & pass-throughs.* A nut that squeezes a ring (ferrule or olive) onto a tube to grip and seal it, undone and remade with spanners

### What it is

- **plain_name**: A nut on a pipe that you tighten with spanners; as it screws down it squashes a small ring (the olive) round the pipe, so the joint grips the pipe and doesn't leak, and you can undo it again later
- **term**: Compression fitting (ferrule fitting, flareless tube fitting)
- **aliases**: 
  - olive fitting, 'nut and olive' (British English: the ring is called an olive; Wikipedia, Compression fitting; DIYdata)
  - ferrule fitting, compression ring fitting (American English: the ring is called a ferrule; Wikipedia, Compression fitting)
  - flareless fitting (Wikipedia, Compression fitting; Cutting ring fitting)
  - Type A or 'non-manipulative' compression fitting (British; the tube isn't reshaped) versus Type B or 'manipulative' fitting (the tube end is shaped with a tool) (Wikipedia, Compression fitting)
  - tube fitting, instrumentation tube fitting, single-ferrule and double-ferrule (twin-ferrule) fitting (Beswick; Swagelok instructions; Wikimedia Commons 'Zweiklemmring-Rohrverschraubung')
  - cutting ring fitting, bite-type fitting (hydraulic version whose ring cuts into the tube, standardised in ISO 8434; Wikipedia, Cutting ring fitting)
  - Klemmringverschraubung, Schneidringverschraubung (German; Wikimedia Commons categories), knelkoppeling (Dutch; Wikimedia Commons file name)
  - Swagelok-type fitting (Swagelok is a brand); Ermeto (brand, the original cutting ring fitting; Wikipedia, Cutting ring fitting)
  - 'compression fitting' is also what PC water-cooling builders call a barb with a screw-down collar (soft tube) or an O-ring fitting (hard tube); these work differently (TitanRig)
- **family**: seals & pass-throughs
- **other_families**: clamping, magnetic & friction connections, hydraulics, pneumatics & vacuum
- **one_liner**: A threaded nut that, when tightened, drives a ring (ferrule or olive) into a tapered seat in the fitting body, squeezing the ring onto the outside of a tube so it both seals and grips the tube, for water, air, gas, oil and hydraulic lines that you may need to take apart later.
- **complexity**: A few parts: the fitting body (with a thread, a tapered seat and a stop, or shoulder, for the tube), a compression nut, and one or two rings (ferrules or olives); for soft plastic pipe also a stiffening insert pushed into the pipe end (Beswick; Kalsi Plastics; Wikipedia, Compression fitting).
- **how_it_works**: You slide the nut and then the ring onto the tube and push the tube into the body until it hits the stop. Tightening the nut pushes the ring into the cone-shaped seat inside the body, and the cone squeezes the ring inwards onto the tube, which makes the seal (Beswick). The ring seals against both the tube and the body's seat, so fluid never reaches the threads and no thread sealant is needed; the squeeze also grips (and slightly deforms) the tube so it can't pull out (Wikipedia, Compression fitting). Hydraulic 'cutting ring' versions have sharp edges that cut into the tube's surface for more hold at high pressure (Wikipedia, Cutting ring fitting).

### Finder attributes

- **job**: seal it, or pass cables or fluid through: joins a tube to another tube, a valve or a threaded port without leaking, join and hold: grips the tube so pressure or pulling can't push it out
- **motion**: none: the tube is fixed in the fitting once the nut is tight
- **degrees_of_freedom**: 0: a tightened fitting holds the tube so it can't slide or turn; Swagelok's high-pressure instructions tighten until the tube 'will not turn by hand or move axially in the fitting' before the final turn (Swagelok MS-12-01)
- **special_behaviour**: none: it is a plain sealing joint. The only 'clever' part is that the thread doesn't seal; the squeezed ring does, so it can be undone and remade (Wikipedia, Compression fitting)
- **holding_principle**: 
  - friction or clamping (force-fit): the ring is squeezed radially onto the tube (Beswick)
  - shape (the parts interlock; form-fit): the ring deforms the tube (Wikipedia, Compression fitting) and cutting-ring versions bite into it (Wikipedia, Cutting ring fitting), so the tube is also hooked in place
- **input_output**: not applicable: it joins tubes and passes fluid, not motion
- **power**: passive (no power needed)
- **removability**: removable: undo the nut with spanners and pull the tube out. The ring stays squeezed onto the tube, so you either refit the same tube and ring (instrument fittings) or cut off the tube end and fit a new olive (UK plumbing advice) (Swagelok MS-12-01; Brassland)
- **reuse_cycles**: a few times: the body and nut last many cycles, but the ring limits it. Beswick says most designs allow only a limited number of remakes before the ferrule must be replaced; Swagelok says its fittings can be remade 'many times'; UK plumbing guides treat olives as single-use (Beswick; Swagelok MS-12-01; Brassland)
- **tools_needed**: Two spanners (one to hold the body steady, one to turn the nut; Swagelok MS-12-01; Brassland); a wheeled pipe cutter and a deburring tool (Brassland); a marker pen for turn-marks; optionally a gap inspection gauge (Swagelok) and an olive puller to remove old rings (Wikipedia, Compression fitting)
- **seal**: airtight or pressure: the ring squeezed between the tapered seat and the tube makes the seal (Beswick). Beswick rates its stainless compression fittings at 3,000-5,000 psig; plastic MDPE compression fittings seal with an O-ring instead, with a grab ring for grip (Kalsi Plastics)
- **load**: medium to heavy: holds the full working pressure and strong pulls along the tube (the ring grips and bites it), but joints dislike bending, flexing and the shaking from water hammer, which soldered joints tolerate better (Wikipedia, Compression fitting)
- **adjustable**: slightly: if a new joint weeps, you can tighten the nut a little more until it stops (Wikipedia, Compression fitting); there is no position adjustment
- **play_and_precision**: not applicable: it doesn't locate parts or pass on motion. The tube must go in straight and right up to the stop (shoulder) before tightening, or the ring seats badly (Swagelok MS-12-01; Brassland)
- **access_needed**: end of a tube or shaft: the nut and ring slide on from the tube's cut end, and you need room round the fitting for two spanners. *(unverified parts omitted)*
- **materials**: Bodies and nuts: brass (plumbing), stainless steel and steel (instrument and hydraulic), and plastics (Beswick; Wikipedia, Compression fitting). Rings: copper or brass olives in plumbing (copper olives are barrel-shaped so can't go on backwards), brass or plastic single ferrules, stainless double ferrules (Wikipedia, Compression fitting; Beswick). Tubes: hard tubing that resists the squeeze, such as copper, steel, stainless steel and hard plastic; soft tube such as polyurethane or vinyl collapses unless a metal insert is pushed in (Beswick). PE, PEX and MDPE pipe always need an insert (Kalsi Plastics; ESG). PTFE filament tubes can also be held with small M8 compression fittings (Prusa forum).
- **maker_difficulty**: easy: buy a ready-made fitting and tighten it with two spanners; printing your own nut and ferrule for low-pressure or PTFE tube is moderate (needs 100% infill and fine threads, and PLA may need re-tightening; Printables 890869, 784765)

### Making it

- **processes**: 
  - off-the-shelf part: brass, stainless and plastic compression couplers, elbows, tees, reducers, isolating valves and tube-to-thread adapters
  - 3D print (FDM): low-pressure nuts and ferrules for PTFE Bowden tube, and parametric printed pipe couplings (Printables 890869, 784765; Thingiverse 6955018) *(unverified parts omitted)*
- **print_in_place**: no: the body, nut and ring are separate parts that must be threaded onto the tube in order (Printables 784765 prints the ferrules as separate small parts with mouse-ear brims)
- **making_tips_3d_printing**: 1) Use it for low pressure only unless tested: the open-source parametric 'easy-connect' pipe fitting printed in PLA, PETG, ASA and TPE passed hydrostatic tests, with PETG couplings holding up to 4.551 ± 0.138 MPa (Fini et al. 2) Infill and walls: print nuts and ferrules at 100% infill (Printables 890869, 784765); for watertight bodies use at least 3-4 perimeters, raise the nozzle temperature 5-10 °C and keep layer height to 60-65% of the nozzle width (Prusa Knowledge Base, Watertight prints). 3) Orientation: print the nut upside down with its narrow hole on the bed to reduce overhangs (Printables 890869). 4) Threads: fine layers help; one designer used 0.08 mm layers and a support threshold angle that keeps supports off the threads (Printables 784765). 5) Material: PETG grips PTFE tube better and suits a permanent fitting; PLA works but may need re-tightening every few prints (Printables 890869); PLA softens at about 60 °C and PETG at about 80 °C (CNC Kitchen), so keep printed fittings away from hot water and hot ends. 6) A printed nut can't crush a metal olive: swage the brass olive onto the copper tube with a metal fitting first, then screw on the printed part (Printables 797450). 7) Soft tube needs a stiff insert inside it or it will collapse (Beswick). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'compression fitting', 'compression coupler', 'compression elbow/tee', 'compression olive' or 'brass olive', 'copper olive', 'ferrule', 'double ferrule tube fitting', 'instrumentation tube fitting', 'compression x BSP' or 'compression x NPT' adapter, 'compression isolating valve' (UK), 'cutting ring fitting DIN 2353 / ISO 8434-1' (hydraulics), 'pipe insert' or 'pipe stiffener' for PE, PEX or MDPE pipe, 'MDPE compression fitting' (with O-ring and grab ring), 'olive puller' or 'olive remover', 'M8 compression fitting 4 mm' for PTFE tube (Prusa forum), 'gap inspection gauge' (Swagelok). Brands: Swagelok (brand), Parker (brand), Ermeto (brand). Sources: Wikipedia, Compression fitting and Cutting ring fitting; Beswick; Kalsi Plastics; Swagelok MS-12-01.
- **rules_of_thumb**: 
  - Instrument (double-ferrule) tube fittings: push the tube fully against the shoulder, tighten finger-tight, mark the nut, then turn 1¼ turns; for 1/16, 1/8 and 3/16 in and 2, 3 and 4 mm tube, turn ¾ of a turn (Swagelok Tube Fitting Instructions MS-12-01). Hold the body steady with a second spanner.
  - To remake a Swagelok-type joint: mark the tube and nut before undoing, then refit and turn back to the marked position, where resistance rises sharply, then tighten slightly; don't use the gap gauge on remade joints and don't mix parts from different makers (Swagelok MS-12-01).
  - UK plumbing (copper pipe and olive): advice varies from hand-tight plus about half a turn (Wikipedia, Compression fitting) to one full turn after hand-tight (DIYdata) or 1 to 1¼ turns (Brassland). Over-tightening is the most common cause of leaks; if the joint weeps, tighten a little at a time until it stops (Wikipedia, Compression fitting).
  - Plastic MDPE compression fittings: hand-tight plus 1 to 1½ turns with a spanner, and always fit the pipe insert (Kalsi Plastics); PE and PEX pipe need an insert to stop the wall collapsing (ESG).
  - No PTFE tape or pipe dope is needed on the thread, because the ring seals, not the thread; a little grease on the thread helps smooth tightening (Wikipedia, Compression fitting). DIYdata warns that PTFE tape can get trapped under an olive.
  - Cut the tube square with a wheeled pipe cutter (not a hacksaw) and deburr inside and out (Brassland).
  - Use hard tubing, or put a metal insert in soft tubing; soft polyurethane or vinyl tube collapses or pulls away from the ferrule (Beswick).
  - Single ferrules suit softer materials such as plastic or brass; stainless fittings use two ferrules to reduce galling and give a more consistent seal (Beswick).
  - Fit the ferrule the right way round: in hydraulic ferrules the longer sloping face points away from the nut (Wikipedia, Compression fitting).

### When to use it

- **everyday_examples**: 
  - The small isolating valves and tap connectors under a UK sink or basin (Wikimedia Commons photo of a 15 mm compression isolating valve)
  - Copper pipe joins made with a nut and olive in home plumbing (DIYdata; Brassland)
  - Brass or plastic fittings on blue MDPE water pipe to garden taps and outbuildings (Kalsi Plastics)
  - Compression fittings holding PTFE tube on some 3D-printer extruders instead of push-fit couplers (Prusa forum; Printables 890869)
- **when_to_use**: Use a compression fitting to join rigid or semi-rigid tube (copper, steel, stainless, hard plastic, or plastic pipe with an insert) when the joint must hold pressure, seal gas or liquid, and still come apart for maintenance, or where you can't use a flame to solder (Wikipedia, Compression fitting). For makers: water and air lines on projects, compressed-air tools, hydroponics, lab rigs, coffee-machine or cooling projects, and gripping a PTFE Bowden tube firmly where push-fit collets let it wear or slip (Prusa forum; Printables 890869).
- **when_not_to_use**: Don't use it on soft, stretchy tubing such as silicone or soft PVC: use a hose barb with a clamp, or a push-to-connect fitting for semi-rigid tube (Beswick). Avoid it where the pipe will be flexed, bent or shaken, e.g. by water hammer: a soldered joint copes better (Wikipedia, Compression fitting). If you connect and disconnect often, use a quick coupler. *(unverified parts omitted)*
- **environment_limits**: Metal fittings handle heat and cold well, but the tube and ring material set the limits. Vibration and flexing can loosen or fatigue the joint (Wikipedia, Compression fitting). Plastic pipe and printed parts can creep: a PLA printed nut may need re-tightening every few prints (Printables 890869), and PLA softens at about 60 °C and PETG at about 80 °C (CNC Kitchen). Mixing parts from different makers can cause leaks (Swagelok MS-12-01).
- **safety_notes**: Always release the pressure before undoing a fitting (Swagelok MS-12-01): a fitting undone under pressure can spray fluid or blow apart. Pressurised gas and hydraulic lines can store a lot of energy; don't use printed fittings for gas, fuel or high pressure unless tested. Mind cuts from sharp tube ends and burrs. *(unverified parts omitted)*
- **common_failures**: Leaks from over-tightening, which deforms the ferrule into surface contact (Beswick; Wikipedia, Compression fitting); leaks from under-tightening (Swagelok gap gauge). Tube not pushed fully in, cut out of square, not deburred, or scratched where the olive sits (Brassland; Swagelok). Ring fitted backwards or missing, or parts from different makers mixed (Wikipedia; Swagelok). Soft or plastic pipe without an insert collapses and leaks (Beswick; Kalsi Plastics). A reused olive fails to reseal; fit a new one on fresh pipe if in doubt (Brassland; Wikipedia, Compression fitting). Joint loosens under vibration or bending (Wikipedia, Compression fitting). Advice on reuse conflicts: instrument fittings are designed to be remade many times, plumbing olives often not.
- **related**: 
  - Hose barb: soft tubing stretched over a ridged spigot, for low pressure; cheaper but not for hard tube (Beswick)
  - Push-to-connect (push-fit) coupler: grips the tube with a toothed collet and seals with an O-ring; faster to connect and release, but lower grip on PTFE and can wear it (Prusa forum)
  - Flare fitting: the tube end is flared with a tool and clamped by a nut, with no separate ring; used for gas, brake and refrigeration lines (Wikipedia, Flare fitting)
  - Cutting ring (bite-type) fitting: a hydraulic compression fitting whose ring cuts into the tube (Wikipedia, Cutting ring fitting)
  - Cable gland: the same nut-squeezes-a-seal idea, but the seal is a rubber insert round a cable
  - Soldered (sweat) joint: permanent and more tolerant of vibration, but needs a flame (Wikipedia, Compression fitting)
  - PC water-cooling 'compression fittings': a barb with a threaded collar (soft tube) or an O-ring collar (hard tube), not a ferrule (TitanRig)

### Pictures, videos and models

- **links**: 
  - [File:Schneidring lose.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Schneidring_lose.jpg): Cut-away drawing of a cutting ring (ferrule) fitting before tightening: 1 body, 2 cap nut, 3 cutting ring, 4 pipe *(licence: CC BY-SA 3.0 / GFDL (Christian Lindecke))*
  - [File:Schneidring fest.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Schneidring_fest.jpg): The same fitting tightened, with the ring's edges cut into the pipe to seal it *(licence: CC BY-SA 3.0 / GFDL (Christian Lindecke))*
  - [File:Fitok Tube Fittings.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Fitok_Tube_Fittings.jpg): Illustration of a double-ferrule (two-ring) tube fitting (Fitok is a brand) *(licence: CC BY-SA 3.0 DE (HPS Solutions GmbH))*
  - [File:Compression fitting isolating valve 15mm screwdriver turn.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Compression_fitting_isolating_valve_15mm_screwdriver_turn.jpg): A household 15 mm isolating valve with compression nuts on each end *(licence: Public domain (Mike1024))*
  - [Swagelok Tube Fitting Instructions for 1 in. (25 mm) and smaller fittings (MS-12-01, 2021)](https://www.swagelok.com/downloads/webcatalogs/en/ms-12-01.pdf): Step-by-step figures: tube into fitting, marking the nut, 1¼-turn tightening, gap gauge check, and remaking a joint *(licence: link only)*
- **make_it_yourself**: 
  - [Easy-Connect Pipe Fitting (jpearce, Thingiverse)](https://www.thingiverse.com/thing:6955018): Open-source parametric OpenSCAD pipe coupling tested in PLA, PETG, ASA and TPE (PETG to about 4.5 MPa), from the 2025 JMMP paper by Fini et al.; STL files and PrusaSlicer profiles are on OSF project fqjxe *(licence: GNU GPL v3.0)*
  - [Bowden tube compression fitting (tapered) for Titan Extruder/FLSun Q5 (nich, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/890869-bowden-tube-compression-fitting-tapered-for-titan): Printed nut and tapered fitting that replaces a push-fit coupler on a Bowden tube; STL, STEP and FreeCAD files, with print advice (100% infill, PETG grips better) *(licence: CC BY-SA)*
  - [Bowden Compression Fitting (zfactor, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/784765-bowden-compression-fitting): Printed compression nut and ferrules for a Bowden tube, printed in PLA at 0.08 mm layers and 100% infill *(licence: CC BY-NC-SA)*
  - [Air Gun adapter 1/4" NPT to 1/4" tube and 1/4" compression fitting (Ma Ha, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/797450-air-gun-adapter-14-npt-to-14-tube-and-14-compressi): TPU-printed adapter with a 5/16-24 thread that takes a brass compression olive already swaged onto copper tube *(licence: CC BY-SA)*
- **diagram_idea**: Cut-away of a fitting in three steps: nut and olive slid onto the tube, tube pushed to the stop, then the nut tightened so the olive is squeezed into the cone (arrows showing it pressing inward onto the tube), with the two seal lines (olive-to-tube and olive-to-seat) highlighted and a note that the thread itself doesn't seal.
- **sources**: 
  - https://en.wikipedia.org/wiki/Compression_fitting
  - https://en.wikipedia.org/wiki/Cutting_ring_fitting
  - https://en.wikipedia.org/wiki/Flare_fitting
  - https://en.wikipedia.org/wiki/Ferrule
  - https://www.beswick.com/resources/the-basics-of-compression-fittings/
  - https://www.swagelok.com/downloads/webcatalogs/en/ms-12-01.pdf
  - https://www.diydata.com/techniques/plumbing/joints/compression/compression.php
  - https://brassland.com/resources/blog/copper-compression-fittings-a-complete-installation-guide.html
  - https://www.kalsiplastics.co.uk/blog/how-to-join-mdpe-pipe-compression-fittings-guide/
  - https://www.esg-intl.com/feeds/blog/compression-fittings-plastic-pipe
  - https://forum.prusa3d.com/forum/original-prusa-i3-mk3s-mk3-user-mods-octoprint-enclosures-nozzles/ptfe-compression-fittings-where-to-source/
  - https://www.titanrig.com/blog/post/pc-water-cooling-components-compression-fittings
  - https://www.thingiverse.com/thing:6955018
  - https://api.osf.io/v2/nodes/fqjxe/
  - https://help.prusa3d.com/article/watertight-prints_112324
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Schneidring_lose.jpg
  - https://commons.wikimedia.org/wiki/File:Schneidring_fest.jpg
  - https://commons.wikimedia.org/wiki/File:Fitok_Tube_Fittings.jpg
  - https://commons.wikimedia.org/wiki/File:Compression_fitting_isolating_valve_15mm_screwdriver_turn.jpg
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** access_needed, making_tips_3d_printing, processes, safety_notes, when_not_to_use

## 275 Iris valve (twisted-sleeve valve)

*seals & pass-throughs.* A fabric or rubber sleeve held between two rings that twists shut like a drawstring when one ring is turned, closing a tube or hopper opening without any blades

*Also covers:* Different from the Iris mechanism, which uses sliding blades. Also covers the pinch valve (a soft tube squeezed shut from outside)

### What it is

- **plain_name**: A soft tube of fabric or rubber held between two rings: turn one ring and the tube twists shut in the middle, like twisting the neck of a bag closed, so powder or grain stops pouring out. Its simpler cousin is a soft tube that you squeeze flat from outside to stop the flow (a pinch valve)
- **term**: Iris valve (iris diaphragm valve, twisted-sleeve valve); also covers the pinch valve
- **aliases**: 
  - iris valve
  - iris diaphragm valve (the industry name for the fabric-sleeve type)
  - flexible sleeve iris valve (title of a 1953 US patent)
  - twisted-sleeve valve, twisting-sleeve valve or fabric-sleeve valve (descriptive names)
  - fabric diaphragm valve (the sleeve is often called the diaphragm)
  - Mucon valve (brand; a well-known maker of iris diaphragm valves)
  - big-bag or bulk-bag discharge valve (a common use)
  - pinch valve (a soft tube or sleeve squeezed shut from outside)
  - air-operated or pneumatic pinch valve (compressed air around the sleeve squeezes it shut)
  - solenoid pinch valve (an electric plunger pinches lab or medical tubing)
  - mechanical or manual pinch valve (a handwheel screws a pinch bar down)
  - pinchcock, Mohr's pinchcock or tubing clamp (spring clip that pinches lab rubber tubing)
  - roller clamp (a wheel rolled along a ramp to squeeze a drip or aquarium tube)
  - hose clamp or bite clamp on a drinking-bladder tube (a clip that pinches the hose; not the worm-drive band that clamps a hose onto a fitting)
  - Quetschventil (German: pinch valve); Manschette (German: the rubber sleeve)
- **family**: seals & pass-throughs
- **other_families**: powered & active connectors, hydraulics, pneumatics & vacuum
- **one_liner**: A fabric or rubber sleeve is clamped at each end to a ring, and turning one ring by about half a turn twists the sleeve shut towards the centre, so it can meter or stop powder, grain or pellets pouring from a hopper or bag; a pinch valve does a similar job by squeezing a soft tube flat from outside.
- **complexity**: A few parts. Iris valve: a fixed ring (the valve body), a turning control ring with a handle, lever or handwheel (often with notches or a trigger lock to hold set positions), the flexible sleeve, and clamp bands that grip the two ends of the sleeve (Hapman; Vortex; SolidsWiki; Mucon JS). Pinch valve: a rubber sleeve or plain soft tube, a housing or frame, and a squeezer, which can be a pinch bar on a screw and handwheel, a rolling wheel on a ramp, a solenoid plunger, a hobby servo arm, or compressed air pumped into the housing around the sleeve (Tameson; AKO; Printables models).
- **how_it_works**: One end of a tube-shaped sleeve is fixed to the valve body and the other end to a control ring. Turning the ring twists the sleeve, and its middle narrows evenly from all sides, like a bundle of strings between two rings twisted into a waisted shape (a hyperboloid); after about a 180-degree turn of the handle the fabric is wound into a flat, tight plug (Hapman; Vortex; LibreTexts). Twisting also pulls the two ends closer together, so early designs let the lower ring slide up and down, while later ones fold the sleeve back on itself so the rings can stay put (US patent 2663467; LibreTexts). A pinch valve instead presses a soft tube flat with a bar, roller, plunger or air pressure, and the rubber's springiness plus the pressure of the flow open it again when the squeeze is released (Tameson; AKO).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: opens, meters and shuts off a flow of powder, granules, pellets (iris valve) or liquids, slurries and air (pinch valve) through a tube or hopper outlet, with only the sleeve touching the material (Hapman; Tameson)
  - lock, and release by hand: the manual versions are set by hand and held by a trigger lock, notches or friction (Vortex; Mucon JS)
  - hold or release using power: air-operated and solenoid pinch valves and pneumatic iris valves open or close when power or air is switched (AKO; Mucon E series; Lee Co.)
- **motion**: multiple: the control ring rotates (about 180 degrees from open to closed on typical iris valves, Hapman; less than one full turn in the 1953 patent design), while the sleeve twists and its opening shrinks in towards the centre; in a pinch valve a bar, roller or plunger slides in to flatten the tube
- **degrees_of_freedom**: 1: the angle of the control ring (or the position of the pinch bar or roller) alone sets how open the valve is. In older designs the ring also had to move slightly along the axis as the sleeve shortened, but that movement is tied to the turn, not independent (US patent 2663467)
- **special_behaviour**: 
  - self-centring: the opening closes evenly towards the centre of the flow, so material pours in a neat central cone into the container below, unlike a slide gate or butterfly valve whose blade cuts across the flow (Hapman)
  - indexing (some designs): quick-lock handles and multi-notched bodies click into a set of preset openings for repeatable flow rates (Vortex; Mucon JS)
  - fail-safe (powered pinch valves): a standard air-operated pinch valve is pushed open by the flow and the springy sleeve when the air is released, while normally-closed versions and add-on automatic closure systems shut when air or power fails (AKO; pinch-valves.com; Mucon E series)
  - self-sealing around grit: the soft sleeve closes around trapped particles instead of jamming on them, as a ball or gate valve can (Tameson; AKO)
- **holding_principle**: 
  - friction or clamping (force-fit): the twisted fabric is packed tight against itself, and a pinch valve's rubber walls are pressed together, which blocks the flow
  - shape (form-fit): the twisted plug of fabric forms a flat barrier that holds back the weight of material above it (Hapman)
  - suction or air pressure: in an air-operated pinch valve, compressed air in the housing squeezes the sleeve shut (AKO)
  - friction or clamping (force-fit): the handle is held at its setting by a trigger lock, notches or a threaded locking handle (SolidsWiki; Vortex)
- **input_output**: not applicable
- **power**: passive (no power needed) for hand-lever, handwheel and screw or roller pinch versions. Powered versions exist: pneumatic or electric iris valves (Vortex; Mucon E series) and air-operated or solenoid pinch valves (AKO; Lee Co.). A standard air-operated pinch valve opens when the air is lost, because the flow pressure and the springy sleeve push it open; normally-closed pinch valves and optional automatic closure systems close on air or power failure (AKO; pinch-valves.com; Mucon E series)
- **removability**: removable: the valve bolts, clamps or slips onto the outlet, and worn sleeves are designed to be swapped on site (Vortex: 'sleeve is inexpensive and easily replaceable'; AKO). Clip-on and roller pinch clamps are tool-free and can be fitted to a tube that is already installed (Printables roller clamp)
- **reuse_cycles**: many times: the valve opens and closes repeatedly and sleeves are replaced when worn. Hapman warns that iris valves cannot handle frequent open-close cycles when the material touches the sleeve directly; external solenoid pinch valves typically need new tubing every 200,000 to 500,000 cycles, and sealed internal ones are rated to about 5 million cycles or more (Lee Co.)
- **tools_needed**: none to operate; spanner or screwdriver to bolt the valve to a flange and to change the sleeve and its clamp bands (AKO; *(unverified parts omitted)*
- **seal**: dust-resistant (iris valve): a fabric sleeve gives a 'dust tight closure' for dry powders (Mucon JS; Vortex), with a double sleeve for fine, dusty powders (Hapman); it works only with gravity flow at zero pressure (Vortex spec sheet). Pinch valves can be watertight and, within their rating, pressure-tight: the rubber walls press together, but coarse solids trapped in the pinch can stop them sealing 100% (AKO)
- **load**: light to medium: an iris valve holds back the weight of powder or granules above it, but not a heavy, abrasive material or a standing column it has to close through, and it cannot carry equipment hung from it (Hapman). Rated bulk density ranges from about 40 lb/ft³ (about 640 kg/m³) for one manual valve (Vortex) to 1000 kg/m³ (Mucon JS) and over 1600 kg/m³ for a heavy pneumatic model (Mucon E series). Air-operated pinch valves handle media pressures of about 2.5 to 6 bar, depending on size and type (AKO). Closing puts a twisting load on the handle and ring (Hapman)
- **adjustable**: yes: the opening can be set anywhere between fully open and closed (Vortex's infinite-position handle) or to preset notches for repeatable flow rates (Vortex quick-lock; Mucon multi-notched body); a roller pinch clamp with a ridged ramp gives fine flow control (Printables: terageek). Air-operated pinch valves can be throttled with a pressure regulator (AKO)
- **play_and_precision**: noticeable: flow control is rough and depends on the material. The handle position is only a visual guide to the flow rate (Vortex spec: position shown by handle position), and the soft sleeve gives no exact opening size. It tolerates some misalignment because the sleeve is flexible, but the sleeve must be fitted centred: a pinch-valve sleeve sticking out further on one side can be pulled out, leak or fail to close (pinch-valves.com)
- **access_needed**: end of a tube or shaft: an iris valve is fitted in line between flanges or on a hopper or bag outlet (Vortex; Mucon JS); clip-on and roller pinch clamps can be fitted from the side around a tube that is already installed, without reaching either end (Printables roller clamp)
- **materials**: Iris valve bodies: aluminium (sometimes anodised or PTFE-coated), or 304/316L stainless steel for hygienic uses; control rings in polycarbonate, bronze, zinc-aluminium or stainless steel (Hapman; Mucon JS). Sleeves: nylon, Terylene (polyester), PTFE, urethane, nitrile (Buna-N) or natural rubber (Hapman), silicone-coated, urethane-coated or PTFE-coated nylon fabric, and static-dissipative fabric (Vortex); rubber for abrasive or wash-down uses (SolidsWiki). Pinch-valve sleeves: natural rubber, EPDM, nitrile, Viton (FKM), neoprene or butyl (Wikipedia 'Pinch valve'); silicone or flexible PVC tubing for external pinch valves, which wears faster than EPDM or FKM (Lee Co.). Home-made pinch clamps print well in PETG or PLA (Printables models). Handles dry powders, granules, pellets and flakes (iris) and liquids, slurries, powders and air (pinch)

### Making it

- **processes**: off-the-shelf part: manual and powered iris valves and replacement sleeves (Vortex; Hapman; Mucon, all brands), air-operated and solenoid pinch valves, lab pinchcocks and roller clamps *(unverified parts omitted)*
- **print_in_place**: no: printed pinch clamps and roller clamps are printed as separate parts (a body plus a wheel, or a clip plus teeth) and fitted round a tube, and the twisted-sleeve valve needs a separate fabric or rubber sleeve (Printables: terageek; DarioAR)
- **making_tips_3d_printing**: 1) Pinch valve first: it is the easiest printed version. A roller clamp (a wheel rolled up a ramp to squeeze the tube) gives fine flow control and can be clipped round a tube that is already fitted; make the groove wider than the tube's outside diameter so the flattened tube still fits, add small ridges on the track so the wheel doesn't slip, and print the wheel with supports and fine layers (0.1 mm used by terageek, Printables). 2) Size it to your tubing wall: DarioAR's printed roller clamp uses a 12 mm model for 1.5 mm walls and a 16 mm model for 2.0 mm walls, and warns that other wall thicknesses may drip or be hard to operate; a little Vaseline on the axle pegs makes it smoother, and loose cross-braces may need gluing (Printables). 3) For a garden hose, a screw-down pinch clamp printed in PETG with 3 to 5 perimeters and 20% infill, with grease on the thread, works for 16 mm hose and can be scaled for other hose sizes (kjrps, Printables). 4) A clip-type hose pinch clamp relies on sharp latch teeth; don't let textured 'fuzzy skin' surfaces cover the teeth, and redesign the teeth rather than just scaling the model down for thinner hose (IanFoulds; SB_TECH, Printables). 5) Servo pinch valves: an SG90 micro servo pinching 5 to 7 mm tubing works for drink mixers, but expect a drop to escape after closing (MSTVS, Printables). 6) Material: PETG for outdoor or wet use; PLA softens and deforms above about 60 °C and degrades in UV light (Prusa), so keep PLA away from hot liquids. *(unverified parts omitted)*
- **off_the_shelf_parts**: Iris valves (iris diaphragm valves) in manual (hand lever, quick-lock, handwheel) and pneumatic or electric versions, and replacement sleeves, e.g. Vortex, Hapman and Mucon (brands); air-operated pinch valves and spare sleeves (e.g. AKO, Red Valve (brands)); manual (handwheel) pinch valves; solenoid pinch valves for lab tubing (e.g. The Lee Co. (brand)); Mohr's pinchcock tubing clamps (lab supply); roller clamps; silicone, PVC, EPDM or FKM tubing; worm-drive hose clamps or cable ties to grip a home-made sleeve; hobby servos (SG90, MG996R) for motorised pinch valves; quick-exhaust valves and pressure regulators for air-operated pinch valves (AKO).
- **rules_of_thumb**: 
  - About a half turn: iris valve handles swing through 180 degrees from fully open to fully closed (Hapman; Vortex). In the 1953 design the sleeve's length compared with its diameter was chosen so it closes 'in less than one complete revolution' of the ring (US patent 2663467)
  - Give the sleeve slack: twisting pulls the two ends closer together (the lower ring 'rises slightly', LibreTexts), so either let one ring move along the axis or fold the sleeve back on itself, so the rings can stay put (US patent 2663467)
  - Gravity flow only: iris valves are rated for 0 bar media pressure (Vortex spec sheet) and cannot close through a standing column of material or handle heavy abrasive material or high-volume continuous flow (Hapman)
  - Bulk-density limits vary by design: up to 40 lb/ft³ (about 640 kg/m³) for one manual valve (Vortex), 1000 kg/m³ for a big-bag valve (Mucon JS), over 1600 kg/m³ for a heavy-duty pneumatic one (Mucon E series); material temperature up to about 65 °C (Vortex)
  - Use a double fabric sleeve for fine, dusty powders (Hapman; Vortex) and a rubber sleeve for abrasive or washed-down uses (SolidsWiki)
  - Very compact: an iris valve body is only about 40 mm (2 in) tall for bores from 100 to 455 mm (Vortex)
  - Air-operated pinch valve: the control (closing) air pressure must be at least 2 bar above the line pressure for natural rubber sleeves; more pressure than needed shortens sleeve life, so fit a regulator (AKO operating instructions). AKO UK quotes 2.5 bar for a gravity line (pinch-valves.com)
  - Mount a pinch valve at least twice its own length away from a pipe bend, or turbulence wears the sleeve early (AKO operating instructions)
  - Tubing life in external pinch valves: silicone or flexible PVC tubing typically needs replacing every 200,000 to 500,000 cycles; EPDM or FKM lasts about ten times longer (Lee Co.)
  - Don't use a pinch valve under vacuum without balancing the pressure outside the sleeve: suction can collapse it (Tameson); AKO says to equalise pressure for vacuums below about 100 mbar

### When to use it

- **everyday_examples**: 
  - Twisting the neck of a bread bag closed before fitting the tie: the same 'twist it shut' idea, done by hand (analogy)
  - The clip on a hydration-bladder or water-filter hose that pinches the tube shut (a printed replacement is sold as a 'hose clamp (pinch valve)', Printables)
  - The clamp on a hospital drip line that sets how fast the drops fall (Wikipedia 'Drip chamber'), and the spring pinchcock on rubber tubing in a school chemistry lab
  - The original Super Soaker 50 water gun, which used a pinch valve (Wikipedia 'Pinch valve')
- **when_to_use**: Use a twisted-sleeve iris valve to meter or shut off free-flowing dry powders, grain, pellets or flakes falling by gravity from a hopper, bin, chute or big bag, especially fragile materials that a blade would crush, and when you want the stream to pour neatly into the middle of a container; it is light, slim, cheap when hand-operated, easy to clean, and only the sleeve touches the material (Hapman; Vortex). Use a pinch valve when a liquid, slurry or gritty flow must never touch metal parts or must stay clean (food, lab, medical and aquarium tubing), when solids would jam an ordinary valve, or when you need a cheap valve that clips onto existing soft tubing (Tameson; Lee Co.; Printables).
- **when_not_to_use**: Avoid an iris valve for pressurised or vacuum lines, heavy or abrasive materials, high-volume continuous flow, closing through a column of material that is standing still, or very frequent cycling; use a slide gate, butterfly valve or rotary valve instead (Hapman; Vortex). Avoid pinch valves for hot fluids beyond the rubber's temperature limit, high pressures that can deform the sleeve, and vacuum lines unless the pressure is balanced (Tameson; AKO); use a ball or globe valve there. For a light, closable opening that doesn't need to seal, a blade iris mechanism looks better; for a one-way flow use a check (non-return) valve.
- **environment_limits**: Heat: one manual iris valve is rated for material up to about 65 °C (Vortex; the older spec sheet says 66 °C); pinch-valve rubber is unsuitable for high temperatures, and a sleeve blistered on hot chocolate (Tameson; pinch-valves.com). Chemicals: fatty oils attack natural rubber, so use nitrile (pinch-valves.com); pick sleeve fabric or rubber to suit the material (Hapman). Sunlight: UV light ages sleeves and plastic parts, so store them dry and out of the sun; AKO suggests about a 2-year shelf life for spare sleeves (AKO; pinch-valves.com). Vacuum: suction can collapse a pinch valve's sleeve (Tameson). Wear: abrasive material wears sleeves, so use a wear liner or rubber sleeve (Vortex; SolidsWiki). Printed PLA parts soften above about 60 °C and degrade in UV (Prusa). *(unverified parts omitted)*
- **safety_notes**: Explosive dusts: ground the valve and surrounding equipment to prevent static sparks, and use suitably rated actuators (Hapman). Pinch and trap points between the turning ring, handle and body, and inside a powered valve: AKO says to make sure no body parts or tools can get inside, and to switch off and disconnect the air before changing a sleeve (AKO). Hot media can burn; a burst sleeve can let the material escape or enter the air lines, and pressure surges can burst a sleeve (AKO). Leftover material inside a removed valve can be hazardous (AKO). Hobby versions on water lines are low-risk, but a failed pinch clamp on a pressurised line can spray water.
- **common_failures**: 1) Handle, lock or control ring distorts or breaks from the twisting load, especially in polycarbonate; use metal parts where high torque is needed (Hapman). 2) Bronze control rings rubbing on a metal body shed metal flakes that damage the sleeve and contaminate the product; stainless steel rings last longer (Hapman). 3) Sleeve worn through by abrasive or dense material, or by frequent cycling while in contact with the material; fit a wear liner or a tougher sleeve (Hapman; Vortex). 4) Valve can't close because material is standing still in the column above it (Hapman). 5) Pinch sleeve split by a sharp foreign object, blistered by heat, attacked by the wrong fluid, torn by too much pressure in a vacuum application, or cracked by installing a normally-closed valve while shut (pinch-valves.com). 6) Leaks because coarse solids are trapped in the pinch (AKO) or because the sleeve was fitted off-centre (pinch-valves.com). 7) Sleeve life cut short by too much closing air pressure (AKO). 8) Printed clamps: teeth that no longer catch after scaling the model down, dripping with the wrong tubing wall thickness, and a drop escaping after a servo pinch (Printables: SB_TECH; DarioAR; MSTVS).
- **related**: 
  - Iris mechanism: rigid sliding blades instead of a soft sleeve; blades leave gaps and are 'difficult to seal', while the twisted sleeve closes dust-tight (see the Iris mechanism entry)
  - Slide gate and butterfly valve: a blade or disc cuts across the flow; stronger and suited to heavier flows, but can crush fragile material and doesn't centre the stream (Hapman)
  - Peristaltic (tube) pump: rollers squeeze a tube one after another to pump the liquid along, rather than just shutting it off (Wikipedia 'Peristaltic pump')
  - Check (non-return) valve, such as a duckbill valve: lets flow go one way only, automatically, instead of being opened and closed on purpose (see the gap-search notes)
  - Drawstring closure: pulls a fabric opening shut with a cord instead of twisting it
  - Twisted-tube kink valve (soft robotics): twisting a soft tube until it kinks blocks air flow, used as a valve and logic gate in soft robots (Wang et al., 2023)
  - Cable gland and strain relief: also a soft part squeezed round something in a tube, but to seal round a cable, not to shut a flow

### Pictures, videos and models

- **links**: 
  - [How Does an Iris Valve Work? (Vortex technical article)](https://www.vortexglobal.com/resources/how-does-an-iris-valve-work): Plain explanation, with pictures, of the two rings, the fabric sleeve and the 180-degree handle turn that twists it shut *(licence: link only)*
  - [Kemutec - Mucon JS Iris Diaphragm Valve Bulk Bag Discharge Control (kemutecUSA, YouTube)](https://www.youtube.com/watch?v=QFwJfybSSBY): Video of an iris diaphragm valve controlling flow from a big bag (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Mucon AD Series Iris Valve (ProcessComponents, YouTube)](https://www.youtube.com/watch?v=RHklazqg3bs): Video of an iris diaphragm valve (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Air operated pinch valve - operating principle and mode of operation (VF series) (Pinch valve - AKO, YouTube)](https://www.youtube.com/watch?v=pJVdq6K-zro): Animation of compressed air squeezing a rubber sleeve shut inside a pinch valve (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Manschette Quetschventil (pinch valve sleeve) (Hess BSH, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Manschette_Quetschventil.jpg): Photo of a replaceable fabric-reinforced rubber sleeve for a pinch valve *(licence: CC BY-SA 4.0)*
- **make_it_yourself**: 
  - [Customizable pinch valve for flexible tubing (terageek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/757868-customizable-pinch-valve-for-flexible-tubing): OpenSCAD-customisable rolling pinch valve (roller clamp) that clips onto aquarium air tubing to reduce or stop flow; set tube size, pinch depth and number of ramp steps *(licence: CC BY)*
  - [Roller Clamp - One-handed operation and flow control (DarioAR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/898729-roller-clamp-one-handed-operation-and-flow-control): Printable roller clamp for silicone or rubber tubing up to 16 mm, fitted without reaching the tube ends; 12 mm and 16 mm versions for 1.5 mm and 2.0 mm walls *(licence: CC BY-NC-SA)*
  - [Quetschventil für Gartenschlauch / Pinch valve for garden hose (kjrps, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1308507-quetschventil-fur-gartenschlauch-pinch-valve-for-g): Screw-down pinch valve that slips over a 16 mm garden hose to reduce or shut off flow without cutting the hose; scalable for other hose sizes *(licence: CC BY-NC-ND)*
  - [pinch valve powered by servo (MSTVS, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/247744-pinch-valve-powered-by-servo): Micro-servo (SG90) pinch valve for 5-7 mm tubing, made for a cocktail-mixer project; printed in PLA *(licence: CC BY-NC)*
  - [Replacement Platypus Hose Clamp (Pinch Valve) (IanFoulds, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1350975-replacement-platypus-hose-clamp-pinch-valve): Clip-type hose pinch clamp with latch teeth for a water-filter hose; printed in PETG *(licence: CC BY)*
- **diagram_idea**: Three side-by-side cutaway frames of a fabric tube stretched between a fixed top ring and a turning bottom ring, at 0, 90 and 180 degrees of turn, showing the waist narrowing evenly to a closed twist while grain above stops falling, with a small inset of a rubber tube being pressed flat by a bar (pinch valve) for comparison.
- **sources**: 
  - https://hapman.com/technical-brief-how-does-an-iris-valve-work/
  - https://www.vortexglobal.com/resources/how-does-an-iris-valve-work
  - https://www.vortexglobal.com/products/iris-valve
  - https://toztek.com/files/iris-valve.pdf
  - https://www.solidswiki.com/index.php?title=Iris_Valves
  - https://www.kemutecusa.com/mucon-iris-diaphragm/mucon-js-series-iris-diaphragm-valve/
  - https://www.mucon.com/en/products/iris-valves/150-mucon
  - https://www.powderbulksolids.com/packaging-systems/iris-diaphragm-valve-for-big-bag-discharge-stations
  - https://patents.google.com/patent/US2663467A/en
  - https://phys.libretexts.org/Bookshelves/Astronomy_and_Cosmology_TextMaps/Map:_Celestial_Mechanics_(Tatum)/4:_Coordinate_Geometry_in_Three_Dimensions/4.5:_The_Hyperboloid
  - https://en.wikipedia.org/wiki/Pinch_valve
  - https://tameson.com/pages/pinch-valve
  - https://www.pinch-valves.com/wp-content/uploads/2013/04/Operating-Instructions-for-AKO-Air-Operated-Pinch-Valves.pdf
  - https://www.pinch-valves.com/technical-help/typical-pinch-valve-failures/failed-pinch-valve-sleeves/
  - https://www.theleeco.com/insights/selecting-the-best-pinch-valve-for-your-application/
  - https://en.wikipedia.org/wiki/Drip_chamber
  - https://en.wikipedia.org/wiki/Peristaltic_pump
  - https://ouci.dntb.gov.ua/en/works/73EER12l/
  - https://commons.wikimedia.org/wiki/File:Manschette_Quetschventil.jpg
  - https://help.prusa3d.com/article/pla_2062
  - https://www.printables.com/model/757868-customizable-pinch-valve-for-flexible-tubing
  - https://www.printables.com/model/898729-roller-clamp-one-handed-operation-and-flow-control
  - https://www.printables.com/model/1308507-quetschventil-fur-gartenschlauch-pinch-valve-for-g
  - https://www.printables.com/model/247744-pinch-valve-powered-by-servo
  - https://www.printables.com/model/1350975-replacement-platypus-hose-clamp-pinch-valve
  - https://www.printables.com/model/1806937-6mm-silicone-hose-pinch-valve-hose-clamp-remix
  - https://www.youtube.com/watch?v=QFwJfybSSBY
  - https://www.youtube.com/watch?v=RHklazqg3bs
  - https://www.youtube.com/watch?v=pJVdq6K-zro

### Other info

- **Fields with unverified parts:** environment_limits, maker_difficulty, making_tips_3d_printing, processes, tools_needed

## 290 Bellows boot and way cover (gaiter)

*seals & pass-throughs.* A folded concertina cover that stretches and squashes as a joint, rod, screw or rail moves, keeping dust and water out; can be printed in TPU

### What it is

- **plain_name**: A folded, concertina-shaped rubber or fabric sleeve fitted over a moving rod, screw, slide or joint: it stretches out and squashes up as the part moves, so dust, grit, metal chips and water stay off the moving parts and the grease stays in
- **term**: Bellows boot (protective bellows, convoluted boot) and way cover bellows; called a gaiter on cars
- **aliases**: 
  - bellows, protective bellows, bellows cover, bellows boot
  - gaiter (the usual automotive name, e.g. CV gaiter, steering-rack gaiter, gear-stick gaiter) (Dynatect; Wikipedia)
  - CV boot (constant-velocity joint boot), driveshaft or axle boot
  - rubber boot, dust boot, rod boot, cylinder rod boot, shock-absorber boot or dust cover
  - convoluted boot, convoluted rubber bellows, molded rubber bellows
  - way cover, way cover bellows, machine way cover, accordion way cover, concertina cover
  - rail cover, linear rail bellows, lead screw or ball screw bellows
  - sewn bellows, sewn-folded bellows, heat-sealed bellows, metal-shielded bellows
  - zippered bellows (fits without taking the machine apart)
  - Faltenbalg (German: bellows or gaiter); Achsmanschette (German: axle boot)
  - Gortite (brand, Dynatect)
- **family**: seals & pass-throughs
- **other_families**: compliant mechanisms & flexures
- **one_liner**: A flexible, pleated sleeve clamped to a fixed part at one end and to the moving part at the other, so its folds open and close as the part slides or bends, keeping dirt, chips and water out and grease in without any rubbing seal.
- **complexity**: Single piece, or a few parts: the folded sleeve itself (molded rubber; coated fabric sewn, welded or vulcanised into folds; or printed TPU), with a collar or flange at each end, held by hose clamps on round collars, by bolts or Velcro strips on flat flanges, or by magnets on some printed covers. Long way covers add plastic stiffeners or guides inside the folds, sewn tabs, vent holes, zips, and grommets running on a guide wire (Joyce/Dayton; Dynatect; Printables).
- **how_it_works**: Each end of the boot is sealed to a part: one fixed, one moving. When the moving part travels, the folds (convolutions) open out or stack up like an accordion, so the cover always spans the gap without sliding over anything, and a round boot can also bend with a joint such as a car's CV joint (Wikipedia 'Constant-velocity joint'; Dynatect). Because its volume changes as it moves, air must get in and out: fast or long bellows have vent holes, otherwise trapped air makes them bulge or buckle (Joyce/Dayton; Dynatect). Even fully squashed, the folds take up some length, so the machine must leave room for the compressed bellows (Dynatect).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: keeps dust, chips, coolant, grit and water off moving rods, screws, rails and joints, and keeps lubricating grease in (Dynatect; Wikipedia 'Constant-velocity joint'; Wikipedia 'Bellows')
- **motion**: flex: the folds open and close along the axis as the covered part slides (stretching and squashing), and round boots also bend and allow some sideways offset, as on a CV joint or steering rack; how far it can travel is set by its extended-to-retracted ratio (Dynatect)
- **special_behaviour**: 
  - none: it is a passive cover that simply follows the movement. It also covers pinch points between moving parts (Dynatect), and some molded rubber boots have a 'closed' resting shape that springs back to its short length when released (Dynatect)
- **holding_principle**: 
  - not a holding joint (it moves with the part it protects)
  - friction or clamping (force-fit): round collars are held by hose clamps; flanges are screwed on or held with Velcro strips (Joyce/Dayton)
  - magnetic: some printed lathe way covers are held on by bar magnets slid into their ends (erischilde, Printables)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: hose-clamped collars, screwed flanges and Velcro come undone easily (Joyce/Dayton). A one-piece boot normally has to be slid off the end of the rod or shaft, so it may mean taking the machine apart; zippered bellows avoid this (Joyce/Dayton)
- **reuse_cycles**: many times: clamps and flanges can be undone and refitted many times; the bellows itself flexes through very many cycles until the material cracks, wears or ages, which happens faster in harsh conditions (Dynatect FAQ)
- **tools_needed**: a screwdriver or nut driver for hose clamps and flange screws; often none for Velcro, zips or magnets (Joyce/Dayton; Printables). *(unverified parts omitted)*
- **seal**: dust-resistant to watertight, depending on construction: sewn fabric bellows have stitch holes and vented bellows let air through, so they keep out dust and chips; 'sealed' constructions (seamless molded rubber, or seams joined by heat or vulcanising) also keep out liquids (Dynatect FAQ; Joyce/Dayton). A printed TPU gaiter was watertight in its maker's test (Gt6k, Printables). It is not a pressure seal, since it normally has to breathe as it moves
- **load**: light: it is a cover, not a structural part, and carries no load. Long or horizontal bellows must be supported by stiffener guides or by grommets on a guide wire, or they sag onto the part they protect (Joyce/Dayton; Dynatect crane case study), and a build-up of chips can push a cover right off its rails (Dynatect)
- **adjustable**: no: its length simply follows the movement; the collar position and clamps can be moved when fitting
- **play_and_precision**: not applicable (it doesn't locate parts or pass on motion); round boots tolerate some bending and sideways offset, and way-cover stiffeners can be shaped to fit a particular rail or dovetail (Dynatect)
- **access_needed**: end of a tube or shaft: a one-piece boot slides over the end of the rod, screw or shaft; zippered bellows wrap round from the side when the machine can't be taken apart (Joyce/Dayton)
- **materials**: Coated fabrics (Joyce/Dayton): neoprene-coated nylon (the standard; -51 to 121 C), Hypalon-coated nylon (corrosive chemicals; to 149 C), silicone-coated fibreglass (to 232 C), PTFE (Teflon)-coated fibreglass (to 260 C; stiff, not for very small bellows), aluminised fibreglass (to 288 C; reflects heat), and vinyl-coated polyester (-34 to 70 C; mainly for platform skirts); Joyce/Dayton says coated-fabric bellows are more durable and abrasion-resistant than molded boots. Molded rubber: nitrile (oil- and abrasion-resistant), neoprene (good against sunlight, ozone and weather), silicone (wide temperature range but poor abrasion and oil resistance) and natural rubber (Rubber Group); also EPDM, and molded boots are typically nitrile (CQM). Polyurethane films; stainless steel plates over fabric folds where hot chips fly (Dynatect). Printed: TPU of about 85A-95A Shore hardness (Printables makers)
- **maker_difficulty**: easy to buy and fit (standard round boots and bellows come in many sizes and lengths); moderate to print in TPU, because flexible filament is slow and fussy, the folds are overhangs, and tall thin parts wobble under the nozzle (Prusa; Gt6k and Homunculus, Printables)

### Making it

- **processes**: 
  - off-the-shelf part: molded rubber boots and bellows, and sewn, heat-sealed or vulcanised fabric bellows and way covers (Joyce/Dayton; Dynatect; Rubber Group; CQM)
  - 3D print (FDM): TPU boots, gaiters and accordion covers, printed in vase mode, as folded shapes, or with PLA interface layers on a two-material printer (Printables; Hackaday)
  - sewing: fabric bellows sewn from coated fabric, often with plastic stiffeners at each fold (Joyce/Dayton; Dynatect)
  - molding: rubber bellows made by injection, transfer or compression molding (Rubber Group)
- **print_in_place**: yes: a TPU bellows prints as one piece and works straight off the printer (vase-mode or folded designs, Printables); the alternating TPU-and-PLA method needs the PLA layers peeled out afterwards (Hackaday)
- **making_tips_3d_printing**: 1) Material: TPU of about 85A-95A; softer is more flexible but harder to print (Prusa; Homunculus, Printables). Print slowly with low or no retraction, keep the filament dry, and keep part cooling off (Prusa). 2) Vase mode (a single continuous wall): keep fold overhangs shallower than 45 degrees, aim for about 0.8 mm walls, print the big end on the bed, and use a brim inside and out; with a 0.4 mm nozzle Kiwi Tinkerer used 0.1 mm layers (Printables camera bellows). 3) Folded (re-entrant) designs stop a gaiter going floppy; 0.2 mm layers at about 30 mm/s worked, thicker layers made the overhangs porous, and the tall part wobbled under the nozzle, so slow down travel moves or brace it with blocks halfway up; the result stretched to about twice its printed length (Gt6k, Printables steering-rack gaiter). 4) Print accordion covers in their folded (squashed) shape for more coverage and better springback, with no supports and skins only one line wide (Arachne) on a 0.4 mm nozzle; print with the edges down, and the folds may stick together a little until pulled apart (erischilde, Printables lathe way cover). 5) A two-material printer can print a flat stack of TPU folds separated by PLA interface layers, peeled out afterwards; different TPU brands behaved differently, and feeding TPU through an automatic material changer made it brittle (Hackaday; Darak, Printables). 6) Tall boots print better on a CoreXY printer than on a bed-slinger, where the moving bed shakes the part (Homunculus, Printables shock boot). 7) Print one boot at a time to limit stringing; a printed CV boot can be packed with grease (Spiderz Hobbies, Printables). 8) If the boot moves quickly, leave a small vent so air can get in and out (Joyce/Dayton; Dynatect).
- **off_the_shelf_parts**: Round molded rubber bellows and dust boots (sold by inside diameters and stroke); CV boots and CV boot kits; steering-rack gaiters; shock-absorber dust boots; gear-stick gaiters; sewn round bellows with collar or flange ends (supplied with stainless hose clamps); square, rectangular, U-shaped and C-shaped way covers with stiffeners; zippered bellows; bellows accessories such as vents, internal guides, wire supports, grommets and flange plates; alternatives such as telescopic steel way covers, telescopic spring covers for ball screws, roll-up covers and way wipers (Joyce/Dayton; Dynatect; CQM)
- **rules_of_thumb**: 
  - Design the machine around the bellows' extended-to-retracted ratio: the most common mistake is fixing the rail travel first and leaving no room for the fully squashed bellows, which causes interference and early wear (Dynatect; Joyce/Dayton design tips)
  - Allow space for the retracted bellows in the overall design, because adding bellows always increases the space needed (Joyce/Dayton)
  - Add vents for fast cycling: holes in one or more folds, or in the stiffeners and guides, let air in and out; otherwise pressure builds up and the cover bulges (a 'caterpillar' effect) or buckles (Joyce/Dayton; Dynatect)
  - Support long or horizontal bellows with internal stiffener guides or grommets on a guide wire so they don't sag onto the screw or rail; sewn tabs stabilise long-travel bellows and relieve stress on the seams (Joyce/Dayton)
  - Zippered bellows can be fitted without dismantling the machine, but they make the closed length longer (Joyce/Dayton)
  - Match the material to heat and dirt: neoprene-coated nylon -51 to 121 C, silicone-coated fibreglass to 232 C, aluminised fibreglass to 288 C, vinyl only -34 to 70 C (Joyce/Dayton); use metal-shielded bellows or telescopic steel covers where hot chips, sparks or dropped tools hit them (Dynatect)
  - For molded rubber, choose nitrile for oil, neoprene for sunlight, ozone and weather, and silicone for wide temperatures but not oil or petrol (Rubber Group)
  - Inspect and clear chips regularly: built-up chip loads can push a bellows right off its rails (Dynatect)
  - Printed TPU bellows: fold overhangs under 45 degrees and walls about 0.8 mm for vase mode (Kiwi Tinkerer, Printables); about 0.2 mm layers at 30 mm/s for a folded gaiter (Gt6k, Printables)

### When to use it

- **everyday_examples**: 
  - The ribbed rubber boot over a car's driveshaft joint (CV boot), and the gaiters on the ends of a steering rack (Wikipedia; Printables)
  - The pleated gaiter round a car's gear stick, and the rubber boot over a car's shock absorber (Printables)
  - The rubber concertina joint between the two halves of an articulated bus or tram (Wikipedia 'Bellows'; Commons ICE 3 gaiter photo)
  - Pleated covers over the slides of lathes and milling machines (Wikipedia 'Bellows'; Joyce/Dayton)
- **when_to_use**: Use a bellows boot whenever a sliding or bending part has to work among dust, chips, coolant or weather: over lead screws, ball screws, linear rails and guide rods on CNC machines, the piston rods of air and hydraulic cylinders, steering racks, shock absorbers, and CV or universal joints (Joyce/Dayton; Dynatect; Wikipedia). It keeps grease in and grit out without rubbing, so it adds no friction the way a wiper or sliding seal does, it copes with bending as well as stretching, and it also covers pinch points (Dynatect). A printed TPU boot is a handy fix for a cracked rubber boot that is no longer sold (Printables shock boot and steering-rack gaiter).
- **when_not_to_use**: Avoid it where there's no room for the squashed bellows (a roll-up cover is lower-profile), where hot chips, sparks, weld spatter or dropped tools would cut or burn it (use telescopic steel covers or metal-shielded bellows), or where it would need to hold pressure (use a sealed bellows actuator, a lip seal or an O-ring) (Dynatect). For a rotating shaft that doesn't move along its axis, a radial lip seal, O-ring or labyrinth seal is simpler. For long horizontal travel, plan guides to stop the bellows sagging (Joyce/Dayton).
- **environment_limits**: Temperature limits of common coated fabrics: neoprene-coated nylon -51 to 121 C, Hypalon-coated nylon to 149 C, silicone-coated fibreglass to 232 C, vinyl-coated polyester -34 to 70 C (Joyce/Dayton). Chemicals: neoprene is attacked by strong oxidising acids, esters, ketones and some hydrocarbons (Joyce/Dayton); silicone isn't for oils or petrol, and nitrile resists oil but has poor flame resistance (Rubber Group). Sunlight and ozone: neoprene resists them well (Rubber Group). Ageing: long exposure to extreme heat or cold degrades bellows faster (Dynatect FAQ), and rubber CV boots crack and split with age and damage (Wikipedia). Printed TPU stays flexible in the cold and resists many solvents, but absorbs moisture (Prusa).
- **safety_notes**: Low risk in itself; a bellows usually improves safety by covering pinch points between moving parts (Dynatect). Things to watch: 1) A split boot hides trouble: grit gets in and grease gets out, and the joint or screw underneath wears fast or fails, as with a CV joint (Wikipedia); inspect boots regularly. 2) Hot chips, sparks and weld spatter can burn through fabric covers; use heat-resistant or metal-shielded covers (Dynatect; Joyce/Dayton). 3) Chips piling up can push a cover off its rails into the moving machine (Dynatect).
- **common_failures**: 1) Cracks, splits and tears from age, heat, chemicals or damage, letting dirt in and grease out, after which the protected joint wears quickly or fails (Wikipedia 'Constant-velocity joint'; Commons cracked CV boot photo). 2) Not enough room to squash fully, causing interference and early wear: plan for the extended-to-retracted ratio (Dynatect). 3) Trapped air making the cover bulge or buckle on fast moves ('caterpillar' effect): add vents (Dynatect; Joyce/Dayton). 4) Long horizontal bellows sagging and rubbing on the screw or rail: add stiffener guides or guide wires (Joyce/Dayton; Dynatect crane case study). 5) Seams worn out by long travel: sewn tabs limit how far each fold flexes (Joyce/Dayton). 6) Chip build-up pushing the cover off its rails (Dynatect). 7) Printed TPU: porous overhangs from thick layers, floppy folds, and the part wobbling during printing (Gt6k, Printables).
- **related**: 
  - Bellows and inflatable actuators: the same folded shape, but sealed and pumped up so it pushes or lifts instead of just covering
  - Gasket and O-ring seal: seal parts that hardly move relative to each other
  - Radial lip seal (rotary shaft seal): seals a spinning shaft where it leaves a housing, using a rubbing lip
  - Labyrinth seal: a winding, non-contact path that slows dirt and water, with no flexible cover
  - Telescopic steel way covers, roll-up covers and way wipers: tougher or lower-profile alternatives for machine slides (Dynatect)
  - Cable carrier (drag chain): guides moving cables and hoses rather than covering a moving part
  - Cable gland and strain relief: seals where a cable passes through a wall
  - Bellows coupling: a metal bellows that joins two shafts and carries turning force; not a cover
  - Constant-velocity joint, ball screw and lead screw: common parts that a boot protects

### Pictures, videos and models

- **links**: 
  - [2008-04-23 Cracked CV boot (Ildar Sagdejev; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:2008-04-23_Cracked_CV_boot.jpg): Photo of a cracked rubber CV boot on a car axle, showing how the folds split with age *(licence: CC BY-SA 4.0)*
  - [Fahrzeugtechnik Vorderachse (Btr; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Fahrzeugtechnik_Vorderachse.jpg): Labelled photo of a car's driven front axle, with the axle boot (Achsmanschette, item b) on the driveshaft *(licence: CC BY-SA 2.5)*
  - [Faltenbalg ICE3 innen (Sebastian Terfloth; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Faltenbalg_ICE3_innen.jpg): Convoluted rubber gaiter on an ICE 3 high-speed train, a large concertina cover over a moving joint *(licence: CC BY-SA 2.5)*
  - [Way Cover Bellows (Dynatect)](https://dynatect.com/product/way-cover-bellows/): Photos of bellows way covers on machine tools, plus design tips on the extended-to-retracted ratio, venting and stiffener profiles *(licence: link only)*
  - [3D Printed TPU Bellows with PLA Interface Layers - Prints Flat! (Functional Print Friday, YouTube)](https://www.youtube.com/watch?v=UFrWfnwD3aU): Video of printing TPU bellows between peel-away PLA layers on a two-material printer (title and channel confirmed via YouTube oEmbed; video not watched; described by Hackaday) *(licence: link only)*
- **make_it_yourself**: 
  - [Camera Bellows - Collapsible & Customizable - TPU Vase Mode - F3d Files included (Kiwi Tinkerer, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/246679-camera-bellows-collapsible-customizable-tpu-vase-m): Customisable Fusion 360 bellows generator that prints in TPU in vase mode with fold angles under 45 degrees and 0.8 mm walls; a good starting point for any round or square printed bellows *(licence: CC BY)*
  - [TPU Accordion Ways cover for Mini Metal Lathe - no PLA Supports (erischilde, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1473674-tpu-accordion-ways-cover-for-mini-metal-lathe-no-p): One-piece TPU accordion way cover printed folded, with no supports, held on with bar magnets *(licence: Public domain)*
  - [Steering rack gaiter (Gt6k, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/82686-steering-rack-gaiter): TPU steering-rack gaiter in thick-walled and vase-mode versions, with notes on folded re-entrant designs and print settings *(licence: CC BY)*
  - [Toyota Celica 6th Gen ST20x shock boot front (Homunculus, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1791102-toyota-celica-6th-gen-st20x-shock-boot-front): Replacement shock-absorber boot printed in 85A TPU without supports, with an editable Onshape model *(licence: Public domain)*
  - [TPU Bellows Test for Multi Tool Printers (Darak, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1381129-tpu-bellows-test-for-multi-tool-printers): Test bellows printed in TPU with PLA interface layers, for two-material or tool-changer printers *(licence: CC BY-NC)*
  - [3DSets CV Boots for most 3DSets models (Spiderz Hobbies, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1082528-3dsets-cv-boots-for-most-3dsets-models): Small TPU (95A) CV boots for printed RC-car driveshafts, packed with grease to keep dirt out *(licence: CC BY-NC)*
- **diagram_idea**: A lead screw with a moving carriage, drawn twice: carriage at the left with the bellows on its right stretched out long, then carriage at the right with the bellows squashed into a short stack, with labels for extended length, retracted (stack) length and a vent hole, and grit bouncing off the folds.
- **sources**: 
  - https://en.wikipedia.org/wiki/Bellows
  - https://en.wikipedia.org/wiki/Constant-velocity_joint
  - https://joycedayton.com/sites/default/files/pdfs/current-catalog/BellowsProductLine.pdf
  - https://dynatect.com/product/way-cover-bellows/
  - https://dynatect.com/categories/bellows-covers/
  - https://dynatect.com/categories/machine-tool-protection/machine-way-covers/
  - https://rubber-group.com/molded-rubber-bellows/
  - https://www.cqm-inc.com/molded-rubber-bellows.html
  - https://hackaday.com/2025/05/08/3d-printed-tpu-bellows-with-pla-interface-layers/
  - https://www.youtube.com/watch?v=UFrWfnwD3aU
  - https://help.prusa3d.com/article/flexible-materials_2057
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/246679-camera-bellows-collapsible-customizable-tpu-vase-m
  - https://www.printables.com/model/1473674-tpu-accordion-ways-cover-for-mini-metal-lathe-no-p
  - https://www.printables.com/model/82686-steering-rack-gaiter
  - https://www.printables.com/model/1791102-toyota-celica-6th-gen-st20x-shock-boot-front
  - https://www.printables.com/model/1381129-tpu-bellows-test-for-multi-tool-printers
  - https://www.printables.com/model/1082528-3dsets-cv-boots-for-most-3dsets-models
  - https://www.printables.com/model/1610336-adjustable-gear-stick-cover-adjustable-bellow
  - https://commons.wikimedia.org/wiki/File:2008-04-23_Cracked_CV_boot.jpg
  - https://commons.wikimedia.org/wiki/File:Fahrzeugtechnik_Vorderachse.jpg
  - https://commons.wikimedia.org/wiki/File:Faltenbalg_ICE3_innen.jpg

### Other info

- **Fields with unverified parts:** degrees_of_freedom, tools_needed

## 291 Anti-twister mechanism (twist-free cable feed)

*seals & pass-throughs.* A loop of cable carried round at exactly half the speed of a spinning part, so power or signals can pass to it through endless turns without a slip ring and without the cable twisting

### What it is

- **plain_name**: A cable that loops up, over and down onto a spinning turntable, while an arm carries the loop round at exactly half the turntable's speed, so the turntable can spin for ever without the cable winding up or twisting, and without any sliding contacts
- **term**: Anti-twister mechanism (antitwister, twist-free cable feed)
- **aliases**: 
  - anti-twister, antitwister mechanism (Wikipedia)
  - anti-twist mechanism (Holroyd 2022, 'The spinor linkage'; YouTube 'LEGO anti-twist mechanism')
  - one-omega/two-omega (1-omega, 2-omega) principle, umbilicus or umbilical drive (blood-processing centrifuges; Fenwal patent US9545637)
  - sealless or seal-less centrifuge, flow-through centrifuge without rotating seals (IBM/COBE patent US4439178; Ito, Suaudeau and Bowman, Science 1975)
  - flying leads and de-twist mechanism (tubing in planetary countercurrent-chromatography centrifuges; Wikipedia, Countercurrent chromatography)
  - Dirac's belt trick, plate trick, string trick, Balinese cup trick (the demonstration behind it; Wikipedia, Plate trick)
  - spinor linkage (a hinged-arm version turned by a handle; Holroyd 2022)
  - 4-pi (720 degree) spin-1/2 demonstrator (Printables model 1128267) *(unverified parts omitted)*
- **family**: seals & pass-throughs
- **other_families**: gear trains, gearboxes & transmissions, hydraulics, pneumatics & vacuum
- **one_liner**: An anti-twister passes a continuous cable or tube from a fixed base to a part that keeps spinning, by swinging the cable's loop round the axis at exactly half the part's speed, so the cable only bends and never builds up twist, and no slip ring or rotating seal is needed.
- **complexity**: A small assembly that acts as one unit: a fixed base, the spinning platform (rotor), a carrier arm or cage that guides the cable loop round the axis, a 2:1 drive linking carrier and platform (a ring gear, idler and transfer gears in Adams' 1971 patent US3586413; a two-layer planetary gear set in Printables model 1128267), bearings, the flexible cable, wire bundle or tube, and clamps at each end. A purely linkage version (Holroyd's spinor linkage) uses 14 hinged rigid bodies and a hook-shaped control shaft instead of gears.
- **how_it_works**: The cable comes out of the base along the axis, runs up, outwards and over the top in a loop, and comes back down onto the axis on top of the spinning part (Wikipedia; US3586413). A carrier swings this loop round the axis at exactly half the spinning part's speed, in the same direction (Wikipedia: 'the plane of this cable is rotated at exactly half the rate of the disk so the cable experiences no net twisting'). The cable is constantly bent back and forth but is not twisted about its own length: 'For every 720 rotation of the platform ... the conductors will complete 360 of rotation without becoming twisted' (US3586413). It works because of a property of 3D rotations shown by Dirac's belt trick: a twist made by one full turn cannot be undone, but the twist from two full turns can be, by passing the belt round the object (Wikipedia, Plate trick).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: carries power, signals or fluid to a part that keeps spinning, with no sliding contacts and no rotating seal
  - let it move (turn, slide or bend): lets the platform turn endlessly in one direction while still connected
- **motion**: rotate: continuous, unlimited turns of the platform; the carrier turns at half that speed in the same direction about the same axis (Wikipedia; US3586413; US9545637)
- **degrees_of_freedom**: 1: only the platform's rotation is free; the carrier is geared (or linked) to it, so its motion is not independent (Holroyd: the spinor linkage 'has one degree of freedom, and the motion is generated by simply turning a handle')
- **special_behaviour**: 
  - none: its clever trick, endless rotation with a continuous cable that never builds up twist, isn't one of the listed behaviours; inside, it relies on a fixed 2:1 speed ratio between platform and carrier (US3586413)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it carries cables or tubes across a turning joint
  - shape (the parts interlock; form-fit): the gears that keep the exact 2:1 ratio mesh by shape, so the timing can't slip (US3586413; Printables 1128267)
- **input_output**: Input: rotation of the platform (or of the drive ring) -> output: the cable carrier turning at exactly half the platform speed, same direction, same axis (in line). Ratio fixed at 2:1 (US3586413: gears 'chosen to provide relative rotational velocities of the rotating platform and the rotating support of two-to-one'; US9545637: umbilicus midsection at 'one-omega', chamber at 'two-omega'). *(unverified parts omitted)*
- **power**: passive (no power needed): the mechanism itself needs no power; the spinning part is usually driven by a motor (US3586413 uses one motor for both). If the motor stops, the cable simply stays connected; nothing releases
- **reuse_cycles**: many times
- **tools_needed**: The printed demonstrator snaps together: 'The bases, axle, and band clip in with a snap fit' (Printables 1128267); its print-in-place gears are freed with a blunt butter knife. *(unverified parts omitted)*
- **seal**: none: the mechanism itself doesn't seal anything, but because the tube runs unbroken from base to rotor, a liquid path stays closed with no rotating seal to leak ('The sealed, sterile integrity of the fluid processing assembly may thus be maintained without the need for rotating seals', US9545637; Ito et al. 1975: 'eliminates complications arising from rotating seals')
- **load**: light: it carries cables or tubes, not mechanical loads. The spinning platform must run on its own bearing (in US3586413 the platform and rotating support each have their own bearings). The weak point is the cable itself, which is bent on every turn: continuous bending makes most cables 'corkscrew', a major reason conductors break (igus, Basics of Cable Carriers).
- **play_and_precision**: The cable loop is not precisely located: in a fast centrifuge part of the tube takes its shape from centrifugal force (US4439178). The cable must leave and arrive exactly on the axis of rotation (US3586413 routes it up a tubular channel along the axis). *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: the cable enters along the axis from below and lands on the axis on top of the spinning part, and the carrier sweeps round the outside, so the whole space round the rotor must stay clear. Holroyd notes 'it is impossible to access the spinning object continuously from any fixed direction: the arm always gets in the way', and that Adams' device 'seems to suffer from the same difficulty'.
- **materials**: Flexible cable, wire bundle or plastic tubing (blood centrifuges use a multi-lumen plastic tube with reinforcing sleeves; US4439178); carrier-friendly cables with abrasion-resistant, slick jackets and conductors laid to resist corkscrewing (igus, Basics of Cable Carriers); metal or plastic gears and ball bearings. Printed demonstrator: drive, cube and bases in PLA, the clear axle in PETG and the flexible band in ABS (Printables 1128267). LEGO Technic parts for the spinor linkage and LEGO anti-twist demos (Holroyd 2022; YouTube aeh5040).

### Making it

- **processes**: 
  - 3D print (FDM): print-in-place planetary drive, carrier arm, bases and cable guides (Printables 1128267)
  - off-the-shelf part: gears (spur, ring or planetary sets), ball bearings or a turntable bearing, high-flex cable or tubing; no ready-made anti-twister unit was found
  - LEGO Technic: anti-twist and spinor-linkage demonstrators (Holroyd 2022; YouTube 'LEGO anti-twist mechanism') *(unverified parts omitted)*
- **print_in_place**: partly: the two-layer planetary gear drive of Printables model 1128267 prints in place and is broken loose after printing, but the cube, axle, bases and band are separate parts that snap on
- **making_tips_3d_printing**: 1) Get the ratio exactly 2:1 with gears, not friction: the Printables demonstrator uses a planetary gear set and mounts the band's base on one of the planets, so it 'must complete one full circle around the shaft for every two rotations of the cube, while maintaining its orientation' (Printables 1128267). 2) Print-in-place gears: 0.2 mm layer height, no supports, top-surface ironing, 0.2 mm clearances; break the planet, sun and ring gears loose after printing 'so you can feel them slightly wiggle' (Printables 1128267). 3) Snap-fit parts that are flexed (axle, bases, band) are better in PETG or ABS than PLA; the designer printed the band in ABS and the clear axle in PETG (Printables 1128267). 4) Route the cable up the centre of the axis and down onto the centre of the rotor (US3586413), and clamp (strain-relieve) it at both ends so the bending happens in the free loop, not at the solder joints (igus: 'always strain relieve cables at the moving end and, whenever possible, at both ends'). 5) Keep the loop's bend radius generous: igus's rule for moving cables in carriers is at least 8 to 10 times the outer diameter of the largest cable (igus, Basics of Cable Carriers). 7) Leave a clear sweep zone round the rotor, since the carrier and loop pass every side (Holroyd). 8) PLA parts near motors soften from about 60 degrees C (CNC Kitchen). *(unverified parts omitted)*
- **off_the_shelf_parts**: Limited-rotation alternatives: 'Twisterband' (igus (brand); a compact carrier that 'can turn through 3,000 degrees', igus Basics of Cable Carriers), 'clock spring' or 'spiral cable'. Endless-rotation alternative with contacts: 'capsule slip ring', 'rotary union'. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - The cable carrier must turn at exactly half the speed of the spinning part, in the same direction (Wikipedia, Anti-twister mechanism; US3586413 'two-to-one'; US9545637 'one-omega' and 'two-omega').
  - The cable returns to its starting state only every two turns of the platform (720 degrees), not every turn (US3586413; Wikipedia, Plate trick; Printables 1128267: 'Only after these two full rotations, does the system return to where it started').
  - Moving-cable bend radius: at least 8 to 10 times the outer diameter of the largest cable, and a larger radius lasts longer (igus, Basics of Cable Carriers; a cable-carrier rule, applied here to the swinging loop).
  - Strain-relieve cables at the moving end and, whenever possible, at both ends; hydraulic hoses only at the moving end (igus, Basics of Cable Carriers).
  - A flexing tube heats up from flexure friction; reinforcing sleeves at the ends spread the bending and the heat 'so as to avoid weakened hot spots' (US4439178).
  - Plan for the swinging arm to block any fixed line of sight or access to the spinning part (Holroyd 2022).

### When to use it

- **everyday_examples**: 
  - Blood-separating (apheresis) centrifuges, which spin a sealed bag or chamber fed by a tube bundle swung round at half speed (US9545637; US4439178; Ito, Suaudeau and Bowman, Science 1975)
  - Planetary centrifuges for countercurrent chromatography, whose 'flying leads' carry liquid to the spinning coils (Wikipedia, Countercurrent chromatography)
  - Dirac's belt trick: turn a belt buckle round twice and the belt can be untwisted without turning it back (Wikipedia, Plate trick)
  - The plate trick and the Balinese candle dance, where a hand holding a plate or candle turns twice and the arm ends up untwisted (Wikipedia, Plate trick)
- **when_to_use**: Use an anti-twister when a part must keep spinning the same way and you want a continuous cable or tube to it, with no sliding contacts and no rotating seals: low-noise power or signals for small electronics (Wikipedia: brushes introduce 'unacceptable levels of noise'), sealed or sterile liquid paths (blood processing; US9545637), equipment working under high g in a centrifuge that needs electrical measurements (US3586413), or a striking science demonstration or kinetic sculpture (Printables 1128267; Holroyd). It also suits links that can't easily go through a slip ring, such as a tube carrying liquid alongside wires (US3586413 lists hydraulic, pneumatic and optical uses).
- **when_not_to_use**: If the part only turns part of a revolution or a few turns back and forth, a simple service loop, a clock-spring spiral cable or a rotary cable carrier is simpler (see Slip ring and rotary union; igus Twisterband turns through 3,000 degrees). If you need to reach or see the spinning part from a fixed side at all times, the swinging loop gets in the way (Holroyd 2022); use a slip ring, rotary union or a wireless link instead. Holroyd notes that 'the practical applications of such anti-twist mechanisms seem limited'. For low-cost, low-current hobby projects a bought capsule slip ring is smaller and easier. Very high speeds heat and fatigue the flexing cable (US4439178).
- **environment_limits**: The cable fatigues from constant bending and may 'corkscrew' and break its conductors (igus, Basics of Cable Carriers). A flexing tube heats up from flexure friction (US4439178), and bearing surfaces on the tube heat up from friction too (US9545637). Printed PLA parts start to give at about 60 degrees C and PETG at about 80 degrees C (CNC Kitchen). *(unverified parts omitted)*
- **safety_notes**: In fluid systems, wear where the tube runs in its bearing can cut into the tube and cause 'leakage of the fluid through the umbilicus' (US9545637). *(unverified parts omitted)*
- **common_failures**: 2) Cable fatigue: conductors break from repeated bending and corkscrewing; use flexible, carrier-rated cable, a large bend radius and strain relief at both ends (igus, Basics of Cable Carriers). 3) Heating and wear of the flexing tube where it runs in its support bearing, leading to leaks (US4439178; US9545637). 4) The loop hitting the rotor, frame or nearby objects as it sweeps round (Holroyd). 5) Printed demo: print-in-place gears fused together until broken loose, and PLA snap fits cracking (Printables 1128267). *(unverified parts omitted)*
- **related**: 
  - Slip ring and rotary union: also allow endless rotation, but through sliding brushes or rotating seals, which wear and add electrical noise or leak (Wikipedia, Anti-twister mechanism; Slip ring)
  - Clock-spring (spiral) cable and service loop: no moving contacts, but only a limited number of turns
  - Cable carrier (drag chain), including rotary carriers such as igus Twisterband (brand): guide cables through a limited rotation (up to 3,000 degrees) rather than endless turns (igus, Basics of Cable Carriers)
  - Multi-turn rotation limiter: stops a shaft after a set number of turns, so a plain cable loop isn't over-twisted
  - Planetary gear set: the usual way to get the exact 2:1 carrier speed (Printables 1128267)
  - Spinor linkage: a chain of hinged links driven by an internal shaft that does the same job without a separate flexible cable (Holroyd 2022)
  - Flexible drive shaft: a rotating cable that carries turning motion, rather than a cable that must not twist
  - Gimbal: lets a part point in any direction with nested rings, not continuous spin with a cable

### Pictures, videos and models

- **links**: 
  - [File:Belt Trick.gif (Wikimedia Commons, Jason Hise)](https://commons.wikimedia.org/wiki/File:Belt_Trick.gif): Animation of a cube spinning continuously while tethered by several belts that never twist or tangle, the principle of the anti-twister *(licence: CC0 1.0 (public domain dedication))*
  - [LEGO anti-twist mechanism (YouTube, aeh5040; title confirmed through YouTube oEmbed, video not watched; linked from Wikipedia)](https://www.youtube.com/watch?v=1x_oQv_qj_U): A working LEGO anti-twister *(licence: link only (standard YouTube licence))*
  - [Spinor Linkage (YouTube, aeh5040 / A. E. Holroyd; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=oRPCoEq05Zk): A hinged-arm linkage that lets a cube spin endlessly while tethered, turned by a handle *(licence: link only (standard YouTube licence))*
  - [Do you know the anti-twister mechanism? (YouTube, MindYourDecisions; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=ulrcyZpA0rE): Explainer video on the anti-twister mechanism *(licence: link only (standard YouTube licence))*
  - [US3586413A, Apparatus for providing energy communication between a moving and a stationary terminal (Dale A. Adams, 1971; Google Patents)](https://patents.google.com/patent/US3586413A/en): Patent drawings of the geared anti-twister: base, half-speed rotating support, 2:1 gearing and the cable path over the platform *(licence: US patent (public domain text and drawings))*
- **make_it_yourself**: 
  - [4pi Spin-1/2 Symmetry Demonstrator Anti-Twister Mechanism (Elequant, Printables; URL from search results, details read through the Printables API)](https://www.printables.com/model/1128267-4pi-spin-12-symmetry-demonstrator-anti-twister-mec): Printable demonstrator: a print-in-place two-layer planetary gear drive spins a cube twice for each orbit of a flexible band, which never tangles; 0.2 mm layers and 0.2 mm tolerances *(licence: CC BY)*
  - [The spinor linkage: a mechanical implementation of the plate trick (A. E. Holroyd, arXiv 2107.01681; Journal of Mathematics and the Arts 2022)](https://arxiv.org/abs/2107.01681): Paper with an appendix giving 'full instructions for constructing a working model of the spinor linkage from LEGO parts', including the parts list; also discusses anti-twist mechanisms *(licence: arXiv non-exclusive distribution licence (link and cite only))*
- **diagram_idea**: Side view of a turntable on a fixed base: a coloured cable rises up the base's axis, loops out and over a C-shaped carrier arm, and drops onto the centre of the turntable; frames at 0, 180, 360, 540 and 720 degrees of turntable rotation show the arm at half those angles and a stripe painted along the cable twisting half a turn one way and then back to straight.
- **sources**: 
  - https://en.wikipedia.org/wiki/Anti-twister_mechanism
  - https://en.wikipedia.org/wiki/Plate_trick
  - https://en.wikipedia.org/wiki/Countercurrent_chromatography
  - https://commons.wikimedia.org/wiki/File:Belt_Trick.gif
  - https://patents.google.com/patent/US3586413A/en
  - https://patents.google.com/patent/US9545637B2/en
  - https://patents.google.com/patent/US4439178A/en
  - https://arxiv.org/abs/2107.01681
  - https://arxiv.org/pdf/2107.01681
  - https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=10805426,663998,1220011&rettype=abstract&retmode=text
  - https://www.igus.com/contentData/Product_Files/Download/pdf/Basics_of_Cable_Carriers.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.youtube.com/watch?v=1x_oQv_qj_U
  - https://www.youtube.com/watch?v=oRPCoEq05Zk
  - https://www.youtube.com/watch?v=ulrcyZpA0rE
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1128267-4pi-spin-12-symmetry-demonstrator-anti-twister-mec

### Other info

- **Fields with unverified parts:** adjustable, aliases, common_failures, environment_limits, input_output, maker_difficulty, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, processes, removability, safety_notes, tools_needed

## 295 Radial lip seal (rotary shaft seal, oil seal)

*seals & pass-throughs.* A rubber ring with a springy lip pressed against a spinning shaft, keeping oil in and dirt out where an O-ring would wear through

### What it is

- **plain_name**: A rubber ring with a metal stiffener and a thin, springy rubber lip that hugs a spinning shaft where it comes out of a gearbox, pump or bearing housing, keeping the oil or grease in and dirt and water out
- **term**: Radial shaft seal (rotary shaft lip seal), commonly called an oil seal
- **aliases**: 
  - rotary lip seal, radial lip seal (Wikipedia 'Radial shaft seal')
  - oil seal, shaft seal (trade names used by suppliers; American Rubber Corp)
  - Simmerring or Simmer-Ring (brand of Freudenberg Sealing Technologies, often used as a generic name; Wikipedia)
  - Radial-Wellendichtring or RWDR (German, as in DIN 3760; Wikipedia, Wikimedia Commons)
  - gufero (Czech workshop name; Wikimedia Commons file titles)
  - TC oil seal (main lip plus dust lip) and SC oil seal (single lip): supplier type codes (American Rubber Corp)
  - CR seal (SKF CR Seals product line), e.g. HMS5 and HMSA10 (SKF)
  - pressure radial shaft seal (short, stiff lip for hydraulic pumps and motors; Parker)
  - by use: crankshaft seal, axle seal, pinion seal, power steering seal, pump seal, valve stem seal (Wikipedia 'Radial shaft seal')
- **family**: seals & pass-throughs
- **other_families**: hydraulics, pneumatics & vacuum
- **one_liner**: A ring pressed into a round hole around a spinning shaft, whose spring-loaded rubber lip rides on the shaft on a thin film of oil, so the shaft can turn for years while the oil stays in and dirt and splashes stay out.
- **complexity**: A small assembly that acts as one unit: a metal stiffening ring (metal insert or case), a rubber body with the main sealing lip, a ring-shaped coil spring that squeezes the lip (garter spring), and often a second small dust lip (Parker 'Radial Shaft Seals' catalogue, p. 7; Wikimedia Commons 'Radial sealing CAD sectional view'). It also needs a hard, smooth shaft and a round housing hole (bore) of the right size.
- **how_it_works**: The seal is pressed into the housing hole with a tight fit (interference fit), which stops it turning and seals around its outside (Parker, p. 8). Its lip is made slightly smaller than the shaft and the garter spring squeezes it on, with a light force of about 0.1-0.15 N per millimetre of shaft circumference, touching along a band only about 0.2 mm wide (Parker, pp. 7-8). When the shaft turns, the lip lifts very slightly on a thin film of oil, and the lip's shape (a steeper angle on the oil side) plus tiny surface textures pump any escaping oil back inside (pump-back), so it runs lubricated instead of dry (Parker, p. 8; Wikipedia). An O-ring squeezed hard against a fast-turning shaft would rub dry and wear through; the lip seal's light, oil-lubricated contact is what lets it live on a spinning shaft.

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: lets a turning shaft pass through the wall of an oil- or grease-filled housing (gearbox, pump, motor, bearing) while keeping lubricant in and dirt, dust and splashed water out (SKF overview: retain the lubricant, separate two media, seal under pressure, exclude dirt and moisture)
- **motion**: rotate: the shaft turns continuously inside the seal, in either direction, at surface speeds up to about 12 m/s for nitrile rubber and up to 40 m/s for fluororubber in Parker's standard seal (Parker, p. 14). It is made for turning, not sliding: sliding rods use rod seals and wipers instead (SKF seals overview).
- **degrees_of_freedom**: 1: the shaft turns relative to the housing. The seal does not guide or support the shaft; bearings must do that, and the seal should sit close to a bearing so the shaft doesn't wobble under the lip (Parker, p. 12).
- **special_behaviour**: 
  - none: it just seals. Its clever side is that the lip follows small wobbles of the shaft (it is spring-loaded and flexible) and actively pumps leaking oil back inside when the shaft turns (pump-back effect) (Parker, pp. 7-8; SKF HMS5 brochure)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it does not hold parts together
  - friction or clamping (force-fit): the seal itself stays in the housing by a press fit of its outside diameter in the bore (Parker, p. 9)
  - spring force (a spring or springy part presses it in place): the garter spring and the rubber's own springiness keep the lip pressed on the shaft (Parker, p. 7)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: Designers can add holes in the housing shoulder so the seal can be pushed out from behind (SKF CR Seals handbook, p. 48). *(unverified parts omitted)*
- **tools_needed**: press or seal driver: an arbor press if possible, otherwise a soft-faced hammer on an installation tool whose outside diameter is larger than the bore, so the seal goes in square (SKF CR Seals handbook, pp. 24-25). A thin-walled installation sleeve to cover keyways, splines, threads or sharp shoulders (SKF CR Seals handbook; Parker, p. 11), the oil or grease to be sealed for pre-lubricating the lip, and a seal puller or pry tool for removal. Printable seal drivers exist (Printables 'Oil Seal Installer').
- **seal**: watertight: the lip keeps oil in and splashes and dirt out, but standard seals are only for near-zero pressure, about 0.5 bar or less (Parker VA, p. 14; SKF HMS5: 0.03 MPa = 0.3 bar). Special pressure seals with short stiff lips, and metal back-up rings for the higher ratings, handle 10, 30 or 60 bar in hydraulic pumps and motors (Parker VP, VT and VV types, pp. 49-60).
- **load**: light: it carries no load and 'must not be axially strained and must not be used to transmit forces' (Parker, p. 11). The shaft has to be held by bearings; the seal only needs a light press fit in its bore.
- **adjustable**: No. SKF seals overview). *(unverified parts omitted)*
- **play_and_precision**: not applicable for locating. It needs accurate parts around it: shaft tolerance h11 and bore tolerance H8 (Parker, pp. 10-11; SKF HMS5 brochure). The lip tolerates small shaft wobble (runout) and offset between shaft and bore, but less at high speed, because the lip cannot follow fast enough, and pressure seals tolerate 50-70% less (Parker, p. 12).
- **access_needed**: end of a tube or shaft: the seal slides on over the end of the shaft and is pressed into the bore from one side. For big shafts that can't be pulled out, split seals that wrap round the shaft exist (SKF CR Seals handbook, split seals HS8).
- **materials**: Lip rubbers (Parker, p. 13): nitrile rubber (NBR, -30 to +100 C, the standard choice for mineral oils), hydrogenated nitrile (HNBR, -35 to +140 C), fluororubber (FKM, Viton (brand), -20 to +200 C), silicone (MVQ, -60 to +200 C) and EPDM (-40 to +150 C); also polyacrylate (ACM) and ethylene-acrylic (AEM) (Wikipedia) and PTFE lips for special duty (Parker; SKF). Rubber hardness is typically 70-85 Shore A (Wikipedia). Case: mild or stainless steel; spring: spring steel or stainless (Parker; SKF HMS5). The shaft must be hard steel (at least 45 HRC) or fitted with a hard stainless wear sleeve (Parker, p. 11; SKF). *(unverified parts omitted)*
- **maker_difficulty**: moderate: buying a standard seal and pressing it in is easy, but the shaft needs a hard, smooth, ground surface and the bore must be round and accurately sized, which a 3D printer can't make directly, so use a bought hardened shaft or wear sleeve and size-test the bore

### Making it

- **processes**: 
  - off-the-shelf part: the seal is always bought, by shaft diameter x bore diameter x width in mm, e.g. '10 x 22 x 7' (American Rubber Corp), to DIN 3760 or ISO 6194 sizes (Wikipedia)
  - CNC (lathe): the classic way to make the bore and the shaft seat; the shaft running surface is then hardened and plunge-ground and polished (Parker, p. 10)
  - 3D print (FDM) or 3D print (resin): only for the housing that holds the seal (with care over bore size) and for seal-installation tools (Printables 'Oil Seal Installer'); printed TPU seals are improvised one-off repairs (Printables winch shaft seal)
- **print_in_place**: no: the seal is a bought rubber-and-metal part pressed into a housing; even improvised TPU replacements are printed separately and fitted (Printables 'Anchor Windlass shaft seal')
- **making_tips_3d_printing**: 1) Buy the seal first and design around it; sizes are written shaft x bore x width (American Rubber Corp). 2) Choose a seal with a rubber-covered outside (e.g. 3) The bore must grip the seal: real seals are made about 0.08-0.30 mm bigger than a bore of up to 50 mm (press-fit allowance, Parker, p. 4) Add a 15-30 degree lead-in chamfer at the mouth of the bore (SKF CR Seals handbook, p. 48) and make the bore at least the seal width plus 0.3 mm deep (SKF, p. 48); add two small push-out holes in the bottom shoulder for later removal (SKF, p. 48). 5) Never let the lip run on plastic or soft metal: the shaft surface needs at least 45 HRC and Ra 0.2-0.6 micrometres with no spiral grinding marks (Parker, pp. 10-11). 6) Chamfer the shaft end, and cover keyways, flats, threads and set-screw holes with a thin printed or tape sleeve while sliding the seal on (SKF CR Seals handbook; Parker, p. 11: thin-walled plastic or aluminium sleeves). 7) Press it in square with a flat driver whose outside is larger than the bore; printable seal drivers exist (Printables 'Oil Seal Installer'); don't hit the seal directly (SKF CR Seals handbook). 8) Point the main lip at the oil (SKF CR Seals handbook) and wipe the lip with the oil or grease being sealed before fitting; fill only about 30% of the gap between the main lip and dust lip with grease (Parker, p. 7). 9) Mount the seal close to a bearing so the shaft can't wobble under the lip (Parker, p. 12). 10) Printed housings near hot gearboxes or motors: PLA starts to soften at about 60 C and PETG at about 80 C (CNC Kitchen), and PLA creeps under constant stress (Thrinter), which can loosen a press fit over time; 11) Printed TPU 'shaft seals' are a stop-gap: one maker printed a winch shaft seal in 95A TPU with 3 perimeters and grease and says 'time will tell how long it lasts' (Printables). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search: 'oil seal' or 'radial shaft seal' plus size, e.g. '12x22x7 TC NBR' (TC = main lip plus dust lip, SC = single lip; American Rubber Corp), 'rotary shaft seal DIN 3760', 'FKM oil seal' or 'Viton oil seal' (brand) for heat, 'Simmerring' (brand, Freudenberg), SKF HMS5 (single lip) and HMSA10 (with auxiliary lip) (SKF HMS5 brochure), Parker VA (single lip) and VB (with dust lip) (Parker). Pressure-rated 'pressure radial shaft seal' for hydraulic pumps (Parker VP to VW). Repairs: 'wear sleeve' or 'Speedi-Sleeve' (brand) (SKF). Tools: 'seal driver set' or 'bearing and seal driver kit', 'seal puller', 'installation sleeve'. Related seals: 'V-ring seal' (axial secondary seal) (SKF seals overview).
- **rules_of_thumb**: 
  - Shaft hardness at least 45 HRC with at least 0.3 mm hardened depth; at least 55 HRC above 4 m/s surface speed, in heavy dirt or at 0.5-5 bar; 60-65 HRC at higher pressures (Parker 'Radial Shaft Seals' catalogue, p. 11).
  - Shaft surface roughness Ra 0.2-0.6 micrometres (Rz 1-4, Rmax under 6.3) for standard DIN 3760 seals, and Ra 0.2-0.4 for pressure seals (Parker, p. 11). SKF gives Ra 0.2-0.8 (DIN 3760) or 0.2-0.5 (ISO 6194) (SKF HMS5 brochure). Too rough wears the lip; overly smooth can leak early (SKF CR Seals handbook, failure modes).
  - No spiral marks: finish the running surface by plunge grinding then polishing, so there is no thread-like 'lead' that pumps oil out; a string resting on the oiled, turning shaft that drifts sideways shows lead (Parker, p. 10; SKF CR Seals handbook, p. 48: directionality 0 plus or minus 0.05 degrees).
  - Fits: shaft h11, housing bore H8 with Ra 1.6-4 micrometres (Parker, pp. 10-11; SKF HMS5 brochure gives bore Ra 1.6-6.3 for DIN 3760).
  - Shaft lead-in chamfer 15-30 degrees, reducing the diameter by 1.5 mm for shafts under 10 mm, 2.0 mm for 10-20 mm, 2.5 mm for 20-30 mm, 3.0 mm for 30-40 mm and 3.5 mm for 40-50 mm (Parker, p. 11).
  - Bore: 15-30 degree lead-in chamfer, and depth at least the seal width plus 0.3 mm for metric metal-reinforced seals (SKF CR Seals handbook, p. 48).
  - Pressure: standard seals 0.5 bar or less (Parker VA, p. 14), and less as speed rises: 0.5 bar up to 1,000 rpm (2.8 m/s), 0.35 bar up to 2,000 rpm, 0.2 bar up to 3,000 rpm (Parker, p. 10).
  - Speed limits for Parker's standard seal: nitrile 12 m/s, HNBR 25 m/s, fluororubber 40 m/s (Parker, p. 14); SKF HMS5 nitrile up to 14 m/s (SKF HMS5 brochure). Surface speed in m/s = 3.14 x shaft diameter (mm) x rpm / 60,000, e.g. a 20 mm shaft at 3,000 rpm runs at about 3.1 m/s (worked example).
  - Heat is the enemy: the service life of the system can be cut in half by each 10 C rise at the lip contact (Parker, p. 6).
  - Lip load is only about 0.1-0.15 N per mm of circumference, rising 2-5 times in pressure seals (Parker, p. 7); the lip touches a band about 0.2 mm wide (Parker, p. 8).
  - Fill only about 30% of the space between the main lip and the dust lip with grease (Parker, p. 7).

### When to use it

- **everyday_examples**: 
  - The seals where the crankshaft and the axles come out of a car's engine and gearbox, and in the power steering pump (Wikipedia 'Radial shaft seal')
  - The seal on a washing machine's pump or drum shaft (Parker lists washing machines; Wikimedia Commons photos of a washing-machine pump seal)
  - The seal on the motor shaft of a stand mixer's gearbox, which stops grease getting into the motor (Printables 'Kitchenaid Motor Shaft Seal')
  - Seals in power drills, industrial gearboxes and wind turbines (Parker, p. 7)
- **when_to_use**: Use a lip seal wherever a turning shaft comes out of something filled with oil or grease, such as a gearbox, a pump, a motor housing or a bearing block, and you need to keep the lubricant in and dust, dirt and splashes out (SKF seals overview; Parker). It is cheap, standard, compact and handles continuous rotation at high speed for a long time, provided the shaft is hard and smooth, the lip is lubricated and the pressure is low. Choose one with a dust lip where there is dirt outside (Parker, p. 7) and a pressure-rated type for hydraulic pumps and motors (Parker).
- **when_not_to_use**: Don't use one on parts that don't turn (use an O-ring or a gasket), on a sliding rod (use a rod seal and wiper; SKF seals overview), or where you only need to keep out dust and splashes with no friction or wear (use a labyrinth seal or a V-ring). Avoid it where the lip would run dry or on a soft or printed shaft (Parker: dry running wears the lip). For real pressure, use a pressure-rated lip seal or a mechanical face seal; a Blue Robotics forum member notes that lip seals 'need more force to turn as the pressure increases' and suggests keeping the shaft small (Blue Robotics forum). For underwater robots, flooded motors avoid shaft seals altogether: the Blue Robotics T200 thruster 'eliminates the need for shaft seals, magnetic couplings, and air- or oil-filled compartments' (Blue Robotics). To drive through a wall with no leakage at all, use a magnetic coupling.
- **environment_limits**: Temperature depends on the rubber: nitrile -30 to +100 C, HNBR -35 to +140 C, FKM -20 to +200 C, silicone -60 to +200 C, EPDM -40 to +150 C (Parker, p. 13). Friction heat at the lip is the main limit; it hardens nitrile and causes axial cracks (Parker, p. 6), and life roughly halves for each 10 C rise (Parker). FKM can harden and crack when amine additives in some oils react with it, generally at 210 F (about 99 C) or more (SKF CR Seals handbook). Rubber ages in heat, sunlight (UV) and ozone: SKF says to store seals at 15-25 C and 40-70% humidity, away from sunlight, electric motors and fluorescent lights (which make ozone), and never hang them on a nail, which distorts the lip (SKF CR Seals handbook, pp. 32-33). Check that the rubber suits the fluid (Parker). A printed housing softens long before the seal does: PLA at about 60 C, PETG at about 80 C (CNC Kitchen).
- **safety_notes**: Fluororubber (FKM, Viton (brand)) and PTFE seals give off dangerous fumes above 300 C, e.g. in a fire or when parts are cut or burned; SKF says to see a doctor after skin contact with residues or breathing the vapour (SKF seals overview, 'Important safety note'). Seals on hydraulic pumps and motors can hold oil under pressure (pressure seals up to 60 bar; Parker): release the pressure before working on them, because fluid jets can inject oil through the skin, possibly at pressures as low as 7 bar, and need urgent hospital treatment (HSE safety bulletin 'Hydraulic injection injury'). When hammering a seal in, use a soft-faced hammer on a driver, not on the seal (SKF CR Seals handbook). *(unverified parts omitted)*
- **common_failures**: Leaks from a nicked or cut lip, caused by sliding it over keyways, splines, threads or sharp edges or by sharp tools: cover them with a sleeve or tape and keep screwdrivers away from the lip (SKF CR Seals handbook, failure modes). Damage during fitting from a missing bore chamfer, hitting the seal directly or an undersized bore (SKF). Fitted backwards: the main lip must face the oil (SKF). Excessive wear from a rough shaft, dirt, lack of lubrication, too much interference or pressure (SKF). Lip turned inside out by pressure or poor assembly (SKF). Spiral grinding marks on the shaft that pump oil out (Parker, p. 10). A worn groove in the shaft under the old lip: fit a wear sleeve (SKF). Overheating: nitrile hardens and cracks (Parker; SKF). Running dry, especially the dust lip, if not greased at fitting (Parker, p. 7). Shaft wobble or misalignment beyond what the lip can follow, worse at high speed; fit the seal close to a bearing (Parker, p. 12). *(unverified parts omitted)*
- **related**: 
  - O-ring seal: the standard seal for parts that don't move or move slowly; on a fast-spinning shaft a lip seal is used instead
  - Labyrinth seal (baffle seal): no contact, so no wear or friction, but only keeps out dust and splashes; often paired with a lip seal
  - V-ring seal (axial lip seal): an all-rubber ring that turns with the shaft and seals against a flat face; used as a secondary seal or slinger in front of a lip seal (SKF seals overview)
  - Mechanical face seal (rotating face seal): two very flat hard rings (often ceramic) rubbing face to face, for pumps and higher pressures (Wikipedia; Blue Robotics forum)
  - Magnetic coupling: passes turning motion through a closed wall so no shaft seal is needed
  - Gasket and silicone sealant: for static joints in the same housing (covers and flanges)
  - Bellows boot (gaiter): a flexible dust cover for sliding or bending joints rather than spinning shafts
  - Slip ring and rotary union: a rotary union uses rotating seals to carry fluid into a turning shaft
  - Rod seal and wiper: the sliding-rod equivalent used in hydraulic cylinders (SKF seals overview)

### Pictures, videos and models

- **links**: 
  - [Radial sealing CAD sectional view num.svg (Wikimedia Commons, by Jahobr, vectorised by Sunspeanzler)](https://commons.wikimedia.org/wiki/File:Radial_sealing_CAD_sectional_view_num.svg): Labelled cross-section of a radial shaft seal: shaft, housing, oil (higher pressure) side, air side, metal ring, sealing lip, garter spring and optional dust lip *(licence: CC BY-SA 3.0)*
  - [RWDR mit Fettpunkten im Schnitt (Wikimedia Commons, by Christoph Olbrich)](https://commons.wikimedia.org/wiki/File:RWDR_mit_Fettpunkten_im_Schnitt.png): Schematic cross-section of a radial shaft seal with grease applied to the sealing edge *(licence: CC BY-SA 3.0)*
  - [Gufero s prachovkou (Wikimedia Commons, photo by Juandev)](https://commons.wikimedia.org/wiki/File:Gufero_s_prachovkou_(001).jpg): Photo of a real radial shaft seal with a dust lip *(licence: CC BY-SA 3.0)*
  - [Radial Shaft Seals catalogue (Parker Hannifin, PDF hosted by Ashton Seals)](https://www.ashtonseals.co.uk/files/mydocs/parker/radial-shaft-seals.pdf): Cross-section drawings of seal profiles, the lip contact area, and dimensioned shaft and bore chamfer drawings *(licence: link only)*
  - [CR Seals handbook: Industrial shaft seals (SKF, November 2024)](https://cdn.skfmediahub.skf.com/api/public/0901d196807662c1/pdf_preview_medium/810-701_CRSeals_Handbook_Nov_2024_pdf_preview_medium.pdf): Installation tool drawings, wear sleeve fitting steps, and photos of common seal failures (cut lips, wear, cracking, inverted lips) *(licence: link only)*
- **make_it_yourself**: 
  - [Oil Seal Installer - 40mm ID x 55mm OD (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1009455-oil-seal-installer-40mm-id-x-55mm-od): Printable driver that presses a 40 x 55 mm oil seal in evenly; a bolt and washer through the centre can apply even pressure *(licence: CC BY-NC)*
  - [Anchor Windlass shaft seal Powermate Powerwinch 501 (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/683255-anchor-windlass-shaft-seal-powermate-powerwinch-50): An improvised replacement shaft seal printed in 95A TPU (about 90 mm ID, 114 mm OD), greased and fitted to a boat winch; the maker says time will tell how long it lasts *(licence: CC BY)*
  - [Kitchenaid Motor Shaft Seal - Pro Mixer (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1151025-kitchenaid-motor-shaft-seal-pro-mixer): Printed replacement for the seal between a stand mixer's motor shaft and its gearbox, made after gearbox grease leaked into the motor *(licence: CC BY-SA)*
- **diagram_idea**: Cross-section of a shaft passing out of an oil-filled box, with the seal's metal ring pressed in the hole, its rubber lip pointing at the oil and a garter spring squeezing it on, plus an inset close-up showing the thin oil film under the lip and arrows of oil being pumped back in as the shaft turns.
- **sources**: 
  - https://en.wikipedia.org/wiki/Radial_shaft_seal
  - https://www.ashtonseals.co.uk/files/mydocs/parker/radial-shaft-seals.pdf
  - https://www.skf.com/skf/campaign/newindustrialoffers/upload/products/Radial%20Shaft%20Seals%20for%20catalogue%20gearboxes/Maximizing%20bearing%20performance.pdf
  - https://allsealsinc.com/skf/SKF_catalog.pdf
  - https://cdn.skfmediahub.skf.com/api/public/0901d196807662c1/pdf_preview_medium/810-701_CRSeals_Handbook_Nov_2024_pdf_preview_medium.pdf
  - https://www.americanrubbercorp.com/products/oil-seals/oil-seal-size-chart/
  - https://bluerobotics.com/store/thrusters/t100-t200-thrusters/t200-thruster-r2-rp/
  - https://discuss.bluerobotics.com/t/marine-rotary-shaft-seal/15372
  - https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.printables.com/model/1009455-oil-seal-installer-40mm-id-x-55mm-od
  - https://www.printables.com/model/683255-anchor-windlass-shaft-seal-powermate-powerwinch-50
  - https://www.printables.com/model/1151025-kitchenaid-motor-shaft-seal-pro-mixer
  - https://commons.wikimedia.org/wiki/File:Radial_sealing_CAD_sectional_view_num.svg
  - https://commons.wikimedia.org/wiki/File:RWDR_mit_Fettpunkten_im_Schnitt.png
  - https://commons.wikimedia.org/wiki/File:Gufero_s_prachovkou_(001).jpg

### Other info

- **Fields with unverified parts:** adjustable, common_failures, making_tips_3d_printing, materials, removability, reuse_cycles, safety_notes

