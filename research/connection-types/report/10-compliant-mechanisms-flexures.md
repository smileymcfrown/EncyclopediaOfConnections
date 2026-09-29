# compliant mechanisms & flexures: Bends instead of hinging

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 23 Bistable compliant mechanism (snap-through switch or hinge)

*compliant mechanisms & flexures.* A one-piece springy part with two stable positions that snaps from one to the other, like a hair clip or a snap bracelet

### What it is

- **plain_name**: A one-piece springy part that happily rests in either of two positions and snaps from one to the other when pushed past a middle point, like a snap hair clip, a snap bracelet or a light switch that clicks on and off
- **term**: Bistable compliant mechanism (snap-through mechanism)
- **aliases**: 
  - bistable mechanism
  - snap-through mechanism or snap-through switch
  - snap-action flexure or snap-action mechanism
  - bistable switch
  - bistable hinge, snap hinge or butterfly hinge (flip-top bottle caps)
  - bistable clip or clasp
  - curved-beam bistable mechanism or double curved beam (engineering literature)
  - buckled-beam bistable mechanism
  - von Mises truss (the classic two-bar snap-through model)
  - tape spring or bistable strip (snap bracelet, tape measure style)
  - snap dome or click dome (dome-shaped version)
  - multistable mechanism (versions with more than two stable positions)
  - hair clip mechanism (HCM, robotics research term)
  - slap bracelet or snap bracelet (everyday name for the strip version)
- **family**: compliant mechanisms & flexures
- **other_families**: over-centre, toggle & cam clamps, springs & energy storage, indexing & detents, hinges & pivots, snap & clip fits, print-in-place & 3D-printing joints
- **one_liner**: A part that bends instead of using hinges and has two resting shapes, so pushing it past a tipping point makes it snap quickly into the other shape and stay there with no latch, spring or power holding it.
- **complexity**: Single piece in its simplest form (a pre-curved beam, a pair of beams joined at the middle, a curved strip or a dome, or links joined by thin flexible hinges). Some designs add a separate spring, magnets, pins or a housing, but the snapping comes from the flexing parts themselves.
- **how_it_works**: Bending the part stores energy in it like a spring. The shape is chosen so the stored energy first rises as you push it, peaks at a middle (unstable) point, and then falls again to a second low point, so after the peak the part pushes itself the rest of the way and snaps into its second shape, where it rests with no force needed (Chi et al. 2022, 'ball on a hill' picture from BYU CMR). For a pre-curved beam this works only if the beam's curve is tall enough compared with its thickness and the beam is stopped from twisting sideways as it flips, which is why designs often use two beams joined at the middle (Qiu, Lang and Slocum 2004). Pushing back past the tipping point snaps it back, so it acts like a switch with two positions.

### Finder attributes

- **job**: 
  - click into set positions: two (or more) positions that it snaps into and holds
  - store energy: holds strain energy and releases it quickly in the snap
  - let it move (turn, slide or bend): moves by bending, with no pins or sliding surfaces
  - join and hold: bistable clips and clasps hold cables, hair or lids closed
  - lock, and release by hand: a clip or lid stays shut or open until pushed past its tipping point
- **motion**: flex: the part bends to move a point along a line (snap-through beams and switches) or to swing a lid or arm (bistable hinges, e.g. up to 180 degrees on BYU's bistable-to-monostable hinge); the snap itself is fast, taking only several to tens of milliseconds (Chi et al. 2022)
- **degrees_of_freedom**: 1: it moves along one path between its two stable shapes; the flexures are designed to be stiff in the other directions
- **special_behaviour**: 
  - over-centre (snaps past a point and stays): once pushed past the unstable middle point, it snaps to the second position and stays there with no latch (Chi et al. 2022)
  - indexing (clicks into set positions): two stable positions, or more in multistable designs made by chaining bistable units (Chi et al. 2022)
  - quick-release: bistable clips and cable clips open and close with a push of the fingers (Cableclips, Printables)
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): each stable position is a low point in the stored spring energy of the flexing part itself
  - shape (the parts interlock; form-fit): clips and hinges also use their closed shape to wrap around or cover what they hold
- **input_output**: not applicable as a transmission. It acts as a threshold or trigger: a small push that exceeds the snap-through force -> a fast, larger jump to the other position, which can give an amplified output force during the snap (Chi et al. 2022). Not back-drivable in the usual sense: a load smaller than the snap-through force leaves it where it is; a larger one flips it.
- **power**: passive (no power needed). When combined with an actuator (motor, magnet, shape-memory wire, air pressure) power is needed only to switch it, because it can apply a contact force without continued power (Qiu et al. 2004); if power is lost it keeps its last state
- **removability**: tool-free quick release: as a clip or clasp it opens and closes by hand; as a switch or hinge it is built into the part itself (one piece), so there is nothing to take apart
- **reuse_cycles**: many times with a tough, springy material (polypropylene, PETG, nylon, spring steel); only a few tens of cycles with brittle PLA flexures, e.g. about 40 to 50 cycles for early all-flexure versions of one printed switch (Gamma4D, Printables) and about 25 cycles for a single-strand FDM living hinge (Hubs)
- **tools_needed**: none
- **seal**: none
- **load**: light: it holds only against forces smaller than its snap-through force, and printed versions are small plastic flexures. Strongest along its snapping direction up to that force; weak against sideways loads, which can twist the flexing beams so they no longer snap cleanly (Qiu et al. 2004)
- **adjustable**: no: the snap force and the two positions are set by the geometry (beam thickness, curve height, hinge angle, material); changing them means reprinting. Some research designs tune or switch off bistability with magnets or added parts (BYU bistable-to-monostable magnetic hinge; Chi et al. 2022)
- **play_and_precision**: Play: none, because there are no pin joints; compliant mechanisms reduce or remove backlash (BYU CMR, Printables). Misalignment: off-axis pushes can twist the beams instead of snapping them (Qiu et al. 2004) *(unverified parts omitted)*
- **access_needed**: not applicable
- **materials**: Polypropylene is the best choice for moulded or milled flexing hinges (revpart; BYU recommends milled polypropylene sheet for its bistable switch). For FDM printing: PETG, ASA or ABS (Cableclips; PLA 'is not elastic enough'), nylon (Hubs), TPU for flexible dome and auxetic versions (PLA 'too brittle', Printables 604690). Metal versions use thin spring or stainless steel (slap bracelets use steel bands about 0.15 mm thick; Wikipedia) and robotics 'hair clip' mechanisms use PETG sheet about 0.38 to 0.76 mm thick, carbon fibre or steel (arXiv 2311.03212). Silicon for microscopic (MEMS) versions (Qiu et al. 2004)
- **maker_difficulty**: moderate: it prints in one piece with no assembly, but getting a crisp snap that lasts needs the right material, print orientation and beam thickness, usually found by printing a few test versions

### Making it

- **processes**: 
  - 3D print (FDM): one-piece switches, clips, hinges and fidget toys
  - CNC: milled polypropylene sheet (BYU recommends this for its bistable switch)
  - sheet metal: snap domes and bistable steel strips (snap bracelets) *(unverified parts omitted)*
- **print_in_place**: yes: most designs print as one working piece (BYU bistable mechanism and switch, Cableclips); a few use short pieces of filament as pins, e.g. Gamma4D's hinged switch
- **making_tips_3d_printing**: Choose a tough, springy plastic: Cableclips are tested in PETG, ASA and ABS, and PLA is not recommended because it is not elastic enough (Printables 328519); PLA flexures can wear out in tens of cycles, whereas a pinned-hinge version of the same switch passed 110,000 cycles in PLA (Gamma4D, Printables 488317). BYU notes that the fatigue and flex properties of your filament decide how many cycles a printed bistable switch lasts (Printables 581016). Orient the part so the flexing beams lie flat on the bed with layers running along their length, so bending does not pull layers apart; Hubs advises building the hinge so its width, not its length, is stacked layer by layer, and making FDM flexures 0.4 to 0.6 mm thick with at least two layers (Hubs). Print orientation of the springy parts is critical and a wrong orientation won't work (Hackaday, snap action mechanism). Use the slicer settings the designer gives, because wall count and line width set the flexure thickness (Cableclips). Give pre-curved snap beams a curve height well over 2.3 times their thickness and stop them twisting, e.g. with two beams joined at the middle (see rules of thumb). Round the corners where flexures meet thick parts, since flexure roots concentrate stress and fail by fatigue (Wikipedia, Compliant mechanism). Hubs suggests annealing living hinges in boiling water and flexing them while warm to extend life (Hubs). *(unverified parts omitted)*
- **off_the_shelf_parts**: Mostly made, not bought. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Pre-curved beam: with Q = curve (apex) height / thickness, Q below 1.23 bends smoothly, 1.23 to 2.31 snaps but springs back (monostable), and above 2.31 it is bistable (Chi et al. 2022, Advanced Materials, citing Qiu et al.)
  - A single curved beam also needs its twisting (second) buckling mode blocked, e.g. by guiding the centre in a slot or, better, by joining two parallel curved beams at their centres; a gap of five beam thicknesses between the beams worked (Qiu, Lang and Slocum 2004)
  - Linkage with flexible hinges (von Mises truss): it becomes bistable when the links' incline angle is larger than a critical angle arccos(L1/L) (Chi et al. 2022)
  - Link-and-spring version: bistable when the rigid link length is greater than the spring's initial length (Chi et al. 2022)
  - Curved strips and plates (snap bracelet, tape measure): bistable when width x square root of (curvature / thickness) is much greater than 1, i.e. wide, thin, strongly curved strips (Chi et al. 2022)
  - FDM living hinges 0.4 to 0.6 mm thick with at least two layers; SLS 0.3 to 0.8 mm; FDM single-strand hinges last about 25 cycles and SLS 30 to 50 before failure (Hubs)
  - Moulded polypropylene living hinges 0.007 to 0.015 in (about 0.18 to 0.38 mm) thick, in homopolymer PP, flexed a few times straight out of the mould; butterfly and three-section bistable hinges give the flip action of dispensing caps (revpart)

### When to use it

- **everyday_examples**: 
  - Snap hair clips (Chi et al. 2022)
  - Snap (slap) bracelets, made of layered bistable steel bands (Wikipedia, Slap bracelet)
  - Flip-top shampoo and ketchup bottle caps with snap hinges (Chi et al. 2022; US patent 4982866)
  - Light switches and popper jumping toys (BYU CMR; Chi et al. 2022)
- **when_to_use**: Use a bistable compliant mechanism when you want something to stay in one of two positions without a latch or power: an on/off switch or toggle, a clip or clasp that snaps open and shut, a lid or hinge that stays open or closed, a gripper that snaps shut on contact, or a valve or relay that only uses power to change state. It is ideal for 3D printing because it can be one piece with no assembly, no backlash and nothing to lubricate (BYU CMR), and its fast snap gives a clear click and a burst of force (Chi et al. 2022).
- **when_not_to_use**: Avoid it for heavy loads or where it must hold against forces larger than its snap force (use a latch or an over-centre toggle clamp). Avoid printed plastic flexures for parts that must switch many thousands of times in PLA (use a pinned spring toggle, a metal spring or PP/nylon) and for parts held in the bent state in heat for long periods, where creep weakens the snap. Where you need many set positions, use a detent or ratchet; where you need a firm adjustable clamp, use a cam lever or toggle clamp; for a push-once-to-latch, push-again-to-release action, use a push-push latch.
- **environment_limits**: Plastic flexures fatigue at their stress concentrations under repeated flexing (Wikipedia, Compliant mechanism) and plastic springs slowly deform (creep) under steady strain (Hackaday); PLA is the worst common filament for this (Hackaday; Cableclips). Energy is partly lost in each flex, which adds damping (Wikipedia, Compliant mechanism). Steel versions resist creep but can rust or crack through the covering (Wikipedia, Slap bracelet). *(unverified parts omitted)*
- **safety_notes**: Metal strip versions can break or poke through their covering and cut, which led to school bans and recalls of cheap slap bracelets (Wikipedia, Slap bracelet). *(unverified parts omitted)*
- **common_failures**: Won't stay in the second position (it snaps and springs back), because the curve is too shallow for its thickness or the beam twists instead of snapping; fix by increasing curve height over thickness or joining two beams at the middle (Qiu et al. 2004; Chi et al. 2022). Cracks at the roots of flexures from fatigue, especially in PLA (Wikipedia, Compliant mechanism; Gamma4D; Hubs). Layers splitting when the part was printed in the wrong orientation (Hackaday snap action mechanism). Snap getting weak or 'sloppy' with heavy use or after long storage in one state, from wear and creep (Hackaday; *(unverified parts omitted)*
- **related**: 
  - Over-centre linkage and spring toggle: the rigid-link version with pin joints and a separate spring; more durable in PLA but more parts
  - Living hinge: a single thin flexing hinge with no stable positions of its own; add a snap geometry to make it bistable
  - Push-push latch: also has two states, but switches with the same push each time using a heart-shaped track
  - Click-pen mechanism: a rotating-cam indexer that alternates between two states on each push
  - Cantilever snap fit: a springy hook that snaps into a catch to join parts, rather than switching a part between two resting shapes
  - Tape-spring hinge: a curved metal strip that folds flat and snaps back straight, used for deployable structures
  - Ball detent: a spring-loaded ball that clicks into several set positions
  - Constant-force and negative-stiffness mechanisms: use the same buckling physics to flatten or reverse a spring's force curve

### Pictures, videos and models

- **links**: 
  - [Bistable compliant switch mechanism.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Bistable_compliant_switch_mechanism.png): Image of BYU's one-piece bistable compliant switch, used on the Wikipedia article Compliant mechanism *(licence: CC BY-SA 4.0 (BYU CMR))*
  - [Bistable Compliant Mechanism (BYU CMR, Printables)](https://www.printables.com/model/581013-bistable-compliant-mechanism): Animated GIF of a one-piece printed bistable mechanism snapping between its two positions, with references to BYU papers *(licence: CC BY-NC-SA (model page read via the Printables public API))*
  - [Simple Snap Action Mechanism Is 100% 3D Printed (Hackaday)](https://hackaday.com/2022/06/10/simple-snap-action-mechanism-is-100-3d-printed/): Article and pictures of a fully printed snap-action slide with two curved leaf springs, stressing print orientation *(licence: link only)*
  - [Bistable and Multistable Actuators for Soft Robots: Structures, Materials, and Functionalities (Chi et al., Advanced Materials 2022)](https://d-nb.info/1254133046/34): Open-access review with diagrams of curved beams, curved plates, domes and flexure linkages, force-displacement and energy curves, and photos of everyday bistable objects (hair clips, tape measures, bottle caps) *(licence: Creative Commons Attribution (CC BY; open access))* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Bistable Compliant Switch (BYU CMR, Printables)](https://www.printables.com/model/581016-bistable-compliant-switch): One-piece bistable switch based on a four-bar linkage with living hinges, with a short lesson on bistability; print in PLA or ABS or mill from 1/4 inch polypropylene sheet. Read through the Printables public API *(licence: CC BY-NC)*
  - [Cableclips - Bistable Compliant Mechanism (Bodo, Printables)](https://www.printables.com/model/328519-cableclips-bistable-compliant-mechanism): Reusable snap-open cable clips in nine sizes (8.5 to 30 mm); tested in PETG, ASA and ABS; PLA not recommended. Read through the Printables public API *(licence: CC BY-NC-ND)*
  - [Hinged Bistable switch (Gamma4D, Printables)](https://www.printables.com/model/488317-hinged-bistable-switch): Bistable switch toy; the author reports early flexure versions lasted 40 to 50 cycles in PLA while this pinned-hinge version runs over 110,000 cycles. Read through the Printables public API *(licence: CC BY)*
  - [Bistable Auxetic Structure (Parametric with OpenSCAD) (ahaque, Printables)](https://www.printables.com/model/604690-bistable-auxetic-structure-parametric-with-opensca): Parametric OpenSCAD sheet that expands into a dome and locks; print in TPU (PLA too brittle). Read through the Printables public API *(licence: CC BY)*
  - [Bistable Square Hinge - compliant mechanism (Charles Mangin, Printables)](https://www.printables.com/model/1712914-bistable-square-hinge-compliant-mechanism): Origami-inspired flat-printed folding square stable in several orientations; base should be two layers thick or PLA cracks. Read through the Printables public API *(licence: CC BY-SA)*
- **diagram_idea**: A pre-curved beam clamped at both ends shown in three frames (curved up, flattened at the tipping point, curved down) beside a 'ball on a hill' energy curve with two valleys and one peak, with an arrow showing the push needed to get over the peak and the snap into the other valley.
- **sources**: 
  - https://bdml.stanford.edu/twiki/pub/Main/PerchingPapers/bistable_beams.pdf
  - https://d-nb.info/1254133046/34
  - https://commons.wikimedia.org/wiki/File:Bistable_compliant_switch_mechanism.png
  - https://en.wikipedia.org/wiki/Compliant_mechanism
  - https://en.wikipedia.org/wiki/Slap_bracelet
  - https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/
  - https://revpart.com/living-hinge-design-guide/
  - https://patents.google.com/patent/US4982866A/en
  - https://arxiv.org/pdf/2311.03212
  - https://hackaday.com/2022/06/10/simple-snap-action-mechanism-is-100-3d-printed/
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://www.firgelliauto.com/blogs/mechanisms/bistable-buckled-beam-mechanism
  - https://www.printables.com/model/581013-bistable-compliant-mechanism
  - https://www.printables.com/model/581016-bistable-compliant-switch
  - https://www.printables.com/model/581020-bistable-to-monostable-magnetic-hinge
  - https://www.printables.com/model/328519-cableclips-bistable-compliant-mechanism
  - https://www.printables.com/model/488317-hinged-bistable-switch
  - https://www.printables.com/model/604690-bistable-auxetic-structure-parametric-with-opensca
  - https://www.printables.com/model/1712914-bistable-square-hinge-compliant-mechanism
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=97t7Xj_iBv0

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, links, making_tips_3d_printing, off_the_shelf_parts, play_and_precision, processes, safety_notes

## 49 Living hinge

*compliant mechanisms & flexures.* A thin, flexible strip of the same material joining two parts so they fold, like the lid of a ketchup bottle or a tic-tac box

### What it is

- **plain_name**: A thin, bendy strip of plastic that joins a lid to its box so the lid folds open and shut, all made as one piece with no pin, like the flip-top cap on a ketchup bottle or the lid of a Tic Tac box
- **term**: Living hinge (integral hinge)
- **aliases**: 
  - integral hinge (term used in the MIT course document 'Design Issues on Living Hinges')
  - live hinge (name used by the BOSL2 OpenSCAD library)
  - flexure bearing or flexure hinge (the wider engineering family it belongs to; Wikipedia 'Flexure bearing')
  - flat hinge, double hinge and butterfly hinge (common living-hinge shapes for 3D printing; MatterHackers names flat, butterfly and kerf-bend hinges)
  - kerf-bend living hinge (the laser-cut plywood or acrylic version made by a pattern of cuts; covered in its own entry 'Kerf bending') *(unverified parts omitted)*
- **family**: compliant mechanisms & flexures
- **other_families**: hinges & pivots, print-in-place & 3D-printing joints
- **one_liner**: A thinned strip of the same plastic that joins two stiff parts so they fold like a hinge, with no pin, no assembly and nothing to wear out or lose.
- **complexity**: Single piece: two stiff parts (for example a box and its lid) joined by a thin web (the hinge), often with rounded edges and small shoulders beside the web so it bends in the right place (MIT 'Design Issues on Living Hinges'). Usually paired with a snap or clip moulded into the same part to keep the lid shut.
- **how_it_works**: The hinge is made so thin that folding it only stretches the outer surface of the plastic a little, so the lid can fold through up to 180 degrees and back without breaking (Protolabs 'Living Hinge Basics for Injection Molding'). In a moulded polypropylene hinge the plastic's long molecules are lined up across the hinge as the melt flows through the thin gap; flexing the hinge a few times straight after moulding stretches (cold-draws) the web two to three times, which makes it much stronger and gives it an almost unlimited fold life (MIT 'Design Issues on Living Hinges'). Because the hinge is just bent material there is nothing to rub, rattle or lose, but it only lasts in plastics that tolerate repeated bending, mainly polypropylene and polyethylene (Wikipedia 'Living hinge').

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): folds a lid, flap or cover open and shut
  - join and hold: keeps the lid attached to the box so it can't get lost (the lid is held shut by a separate snap or latch, not by the hinge)
- **motion**: flex: folds (rotates by bending) through anything from 1 to 180 degrees (Protolabs 'Living Hinge Basics for Injection Molding'). There is no fixed pin, so the fold line moves slightly as it bends.
- **degrees_of_freedom**: 1 intended: folding about the hinge line. The thin web also lets the lid twist a little, which is why lids with snap latches can tear at the ends of the hinge (MIT 'Design Issues on Living Hinges').
- **special_behaviour**: none: a plain living hinge simply folds; it does not lock, click or limit force *(unverified parts omitted)*
- **holding_principle**: not a holding joint (it moves or passes on motion): it lets two parts fold; the lid stays attached only because it is the same piece of plastic, and a separate snap or latch holds it shut
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: box, hinge and lid are one piece, so the lid can only be removed by cutting or tearing the hinge
- **reuse_cycles**: not applicable to taking apart (it never comes apart). Fold life ranges from effectively unlimited to a few dozen folds: tests on moulded homopolymer polypropylene hinges were stopped after about a million flexes without failure, and one hinge survived 900,000 flexes including 300,000 at -28 °C (MIT 'Design Issues on Living Hinges'); 3D-printed hinges last tens to hundreds of flexes (Fictiv), for example about 25 folds for one FDM hinge and 30-50 for SLS nylon (Hubs).
- **tools_needed**: none: it is made as part of the moulded or printed part. Warmth helps when first flexing a printed hinge: boiling water (Hubs), a warm print bed (Prusa forum) or taking the print off the bed while still warm (BYU CMR origami flasher)
- **load**: light: carries the weight of a lid and the pull of opening it. Once its molecules are lined up it is strong when pulled across the hinge, but weak against tearing and twisting, which start cracks at the hinge ends (MIT 'Design Issues on Living Hinges'). Not for load-bearing doors or arms; use a pin hinge instead.
- **adjustable**: No: stiffness and fold angle are fixed by the hinge's thickness, length and material. The only 'adjustment' is training it by flexing it while warm straight after moulding or printing, and cooling it in the closed position if you want it to rest closed (MIT guide; Hubs).
- **play_and_precision**: none: there is no play or rattle because nothing slides. It tolerates small misalignment because the thin web can twist slightly (MIT guide). *(unverified parts omitted)*
- **access_needed**: not applicable: it is part of the moulded or printed part
- **materials**: Best: polypropylene (PP), especially homopolymer and random-copolymer grades, then polyethylene (PE) (Wikipedia; MIT guide; Fictiv); impact-copolymer PP is recommended for cold use. Fillers such as talc, mica and glass fibre ruin hinge life (MIT guide). Harder or clear plastics such as K-Resin (SB) can work if the hinge is bent warm as it comes off the press (Protolabs). ABS is also used for moulded hinges (Wikipedia). For 3D printing: nylon (PA12 or PA11) in SLS or MJF gives the best printed hinges (Protolabs; Hubs); FDM hinges suit nylon, PP, TPU or TPE (Hubs; MatterHackers) and PETG (BYU CMR); MatterHackers says ABS and PLA are unsuitable, but thin PLA hinges printed flat work in boxes that are opened now and then (Printables 'Book box with living hinge'; Prusa forum). Urethane casting resins made for living hinges also exist (Fictiv). Plywood and acrylic can only 'hinge' with kerf-cut patterns (Wikipedia; see 'Kerf bending').
- **maker_difficulty**: easy to moderate: a printed hinge is just a thin section and prints in one piece, but making it last more than a few dozen folds needs a bendy material (PP, nylon, TPU or PETG), the right print orientation and a few test prints; a hinge that lasts for years in daily use really needs injection-moulded polypropylene

### Making it

- **processes**: 
  - injection moulding: the normal way; box, hinge and lid are moulded as one piece in one shot (Wikipedia; MIT guide)
  - 3D print (FDM): fine for prototypes and boxes opened occasionally; best in PP, nylon, TPU or PETG (Hubs; BYU CMR)
  - 3D print (resin): material jetting with simulated polypropylene works (Hubs); standard SLA resins are brittle under repeated bending (Hubs snap-fit guide). Powder-bed nylon (SLS, MJF) gives the best printed hinges (Protolabs)
  - laser cut: polypropylene sheet can be cut into hinged parts (BYU FlexLinks are cut from PP sheet); plywood and acrylic need a kerf-bend cut pattern instead (Wikipedia; separate entry)
  - other: stamping, blow moulding, extrusion and machining of PP (MIT guide), thermoforming (Wikipedia) and urethane casting (Fictiv)
- **print_in_place**: yes: the hinge prints as part of the box in one go, usually lying flat so the hinge is the first two thin layers and the box folds up afterwards (Printables 'Book box with living hinge'; BOSL2 living_hinge_mask), or standing up so the hinge axis is vertical (Hubs). No added parts are needed.
- **making_tips_3d_printing**: 1) Choose the material first: polypropylene (PP) flexes best but warps badly and only sticks to a PP build sheet or PP packing tape, so use a 5-10 mm brim and an enclosure if you can (Prusa knowledge base 'Polypropylene (PP)'); nylon, TPU or TPE are the other good choices (Hubs; MatterHackers), and PETG works (BYU CMR). PLA works only for hinges folded now and then, such as a box opened occasionally (Printables 'Book box with living hinge', printed in PLA at 0.2 mm layers). 2) Never let the fold line run along a layer boundary, because the layers will peel apart. Either print the part flat so the hinge is the bottom one or two layers with the extrusion lines running across the fold line (BYU's printed origami flasher uses two 0.1 mm bottom layers so every fold has two crossing layers of filament to bend on; a single 0.2 mm layer broke easily), or print it standing up so the hinge's width, not its length, is built up layer by layer, i.e. the hinge axis points up (Hubs). 3) Thickness: FDM hinges about 0.4-0.6 mm and at least two layers (Hubs); start at 0.5 mm (Fictiv). The 0.25-0.38 mm used in injection moulding is too thin for FDM (MatterHackers). SLS: 0.3-0.8 mm and at least 5 mm long (Hubs); Protolabs gives 0.02 in (0.5 mm) minimum for MJF and 0.03 in (0.76 mm) for SLS. 4) Make the hinge long enough to bend in a smooth curve rather than a sharp crease: for a 180-degree fold, hinge length L = pi x R, where R is the distance from the mating face to the hinge centre line (Protolabs; Fictiv); aim for a long curved outer surface and a short inner surface (Hubs). 5) Round every corner where the hinge meets the stiff parts, and add small shoulders so it bends in the middle (MIT guide; Fictiv). 6) Leave a small gap under the fold so the two halves don't collide when folded (BOSL2 living_hinge_mask adds a hinge gap). 7) Train the hinge while warm: take the print off the bed while still warm and fold it (BYU CMR), or dip it in boiling water, work it back and forth and let it cool in the closed position (Hubs); one maker heated a PLA hinge on a 75 °C bed for about 30 seconds and flexed it as it cooled (Prusa forum). 8) Split very long hinges into sections; moulding guides split hinges over about 6 in (150 mm) (MIT guide; Fictiv). 9) Print a test piece first to find the best thickness for your printer and filament (Printables 'Living Hinge Design Test'). 10) Expect a limited life: tens to hundreds of folds (Fictiv), about 25 folds for one FDM example (Hubs), so use a printed pin hinge for anything opened many times a day.
- **off_the_shelf_parts**: None are needed; the hinge is part of the plastic. Useful supplies: polypropylene (PP) filament with a PP build sheet or PP tape (Prusa knowledge base), nylon or TPU filament, and polypropylene sheet for cut hinges (BYU FlexLinks). For a hinge that must last under heavy daily use, search for a 'piano hinge' ('continuous hinge') or a 'print-in-place hinge' instead. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Injection-moulded polypropylene: start thin at 0.20-0.25 mm (0.008-0.010 in) and thicken only if needed, to at most 0.38 mm (0.015 in); keep the thin land about 1.5 mm (0.060 in) long; gate the mould so the plastic flows straight across the hinge; flex the hinge a few times straight after moulding while it is still warm (MIT course 2.75 document 'Design Issues on Living Hinges').
  - Protolabs' moulding example: 0.012 in (0.3 mm) thick, about 0.060 in (1.5 mm) long, a 0.008 in (0.2 mm) recess on the side it folds towards and a 0.030 in (0.76 mm) radius on the stretched side; it can fold from 1 to 180 degrees (Protolabs 'Living Hinge Basics for Injection Molding').
  - Resist tearing from twisting (e.g. at snap lids): thicken both ends of the hinge from 0.25 to 0.50 mm over 0.5-1.0 mm, or round the hinge ends (MIT guide).
  - Split hinges longer than about 6 in (150 mm) into two or more sections with small gaps (MIT guide; Fictiv).
  - Hinge length for a smooth bend: L = pi x R for a 180-degree fold, or L = (angle / 180) x pi x R for other angles, where R is the distance from the mating surface to the hinge centre line (Protolabs 'How to Design 3D-Printed Hinges'; Fictiv).
  - 3D-printed hinge thickness: FDM 0.4-0.6 mm with at least two layers; SLS 0.3-0.8 mm and at least 5 mm long; material jetting 0.4-0.8 mm (Hubs 'How to design living hinges for 3D printing'). MJF at least 0.02 in (0.5 mm), SLS at least 0.03 in (0.76 mm) (Protolabs).
  - Printed hinges last far less than moulded PP ones: about 25 folds for one FDM example and 30-50 for SLS, extended by annealing (Hubs); tens to hundreds of flexes versus millions for a well-moulded PP hinge (Fictiv).
  - BOSL2's living_hinge_mask leaves hinge material 2 layer heights thick (e.g. 0.4 mm at 0.2 mm layers) at the bottom of a flat-printed plate, with a gap above it for folding (BOSL2 hinges.scad).
  - Avoid filled plastics: talc, mica and glass fibre in PP give very poor hinge life (MIT guide).

### When to use it

- **everyday_examples**: 
  - The lid of a Tic Tac mint box (Wikipedia 'Living hinge'; Wikimedia Commons photo)
  - Flip-top caps on ketchup, shampoo and sauce bottles (Wikipedia lists bottle caps)
  - Egg cartons, pill boxes with a lid for each day, and clamshell takeaway food containers (Wikipedia)
  - Plastic cassette and video-tape cases (MIT guide mentions VCR cassette cases; Wikimedia Commons 'MS Box')
- **when_to_use**: Use a living hinge when you want a lid, flap, cover or clip that folds and stays attached, made in one piece with no pins or assembly: boxes, cases, cable clips, folding packaging, origami-style folding shapes, and small covers over buttons or ports. It is ideal when you can mould in polypropylene, or print in PP, nylon, TPU or PETG, and when the part must be cheap, light, rattle-free and impossible to lose. For printed parts it suits things folded occasionally or only a few dozen times, or a part that is folded once into shape and then fixed (a 'fold-up' box).
- **when_not_to_use**: Avoid it when the hinge must carry a real load (use a pin, knuckle or piano hinge), when a printed part will be opened many times a day (use a print-in-place pin hinge or a geared hinge), when the only material you can use is brittle (PLA, standard SLA resin or filled plastics), when you need a precise, repeatable pivot for an instrument (use a flexure hinge or a bearing), or when the part will sit in strong sunlight or harsh chemicals without a UV-stabilised grade. To make stiff sheet such as plywood or acrylic bend, use kerf bending instead.
- **environment_limits**: Polypropylene hinges keep working in the cold: one hinge survived 300,000 flexes at -28 °C, although impact-copolymer PP is recommended where the part must also survive knocks in the cold. Sunlight (UV) and strongly oxidising chemicals shorten a PP hinge's life because the thin, stretched web is easily attacked; parts for outdoor, hot or wet use need specially stabilised grades (MIT 'Design Issues on Living Hinges'). Printed PLA hinges soften from about 60 °C and PETG from about 80 °C (CNC Kitchen), so a PLA box in a hot car can deform. PLA creeps if left bent (thrinter creep test), so a printed lid stored open may take a set.
- **safety_notes**: None known for the hinge itself. Take care with boiling water or a hot print bed when training printed hinges.
- **common_failures**: Cracking or tearing along the fold: from a hinge that is too thick (too much strain) or too thin (tears), sharp corners, a weld line along the hinge where two flows of plastic met, or twisting forces that start a tear at the hinge ends (MIT guide; Protolabs). In 3D prints: the layers peel apart if the fold runs along a layer line, and single-layer or PLA hinges split after a few folds (BYU CMR origami flasher; Hubs, about 25 cycles for one FDM example). Warped PP prints that pop off the bed (Prusa knowledge base). The lid won't lie closed because the hinge has taken a set; fix by training it warm and cooling it closed (Hubs). Fixes: pick PP, nylon, TPU or PETG, orient the lines across the fold, keep the hinge thin with rounded edges, and test-print a few thicknesses.
- **related**: 
  - Flexure hinge (notch, leaf-spring and cross-axis pivots): the same bending idea used for precise, small-angle pivots in instruments, rather than for folding lids
  - Print-in-place hinge: a printed pin-and-knuckle hinge that turns rather than bends, so it lasts far longer in PLA but has a little play
  - Kerf bending (laser-cut living hinge): a pattern of cuts that makes stiff plywood or acrylic bend; the laser-cutting cousin
  - Bistable compliant mechanism: a living hinge plus a springy link that snaps open or shut and stays there
  - Cantilever snap fit: often moulded next to a living hinge to hold the lid shut
  - Piano hinge (continuous hinge): a metal or plastic pin hinge for heavy or frequent use
  - Geared hinge: two toothed edges roll on each other; strong, printable, and not limited by material fatigue

### Pictures, videos and models

- **links**: 
  - [Mint box polypropylene lid (Wikimedia Commons, by Polyparadigm)](https://commons.wikimedia.org/wiki/File:Mint_box_polypropylene_lid.JPG): Photo of an open Tic Tac box showing the polypropylene living hinge and the resin code 5; used on the Wikipedia articles 'Living hinge' and 'Flexure bearing' *(licence: Public domain (released by the author))*
  - [MS Box.jpg (Wikimedia Commons, by Magnasound)](https://commons.wikimedia.org/wiki/File:MS_Box.jpg): Photo of a plastic cassette box with a living hinge *(licence: CC BY-SA 3.0 or GFDL 1.2+ (dual licensed))*
  - [5 Living Hinges for Mass Production 3D Printing (YouTube, Slant 3D)](https://www.youtube.com/watch?v=TiEyFle6lTM): Video comparing several printed living-hinge shapes, including circular hinges for more range and notched patterns (as described by Hackaday, 'Hinges Live Inside 3D Prints', May 2023) *(licence: link only (standard YouTube licence))*
  - [How to design living hinges for 3D printing (Hubs / Protolabs Network)](https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/): Illustrated guide with hinge cross-sections, print orientation and thickness rules for FDM, SLS and material jetting *(licence: link only)*
  - [Living Hinge Basics for Injection Molding (Protolabs)](https://www.protolabs.com/resources/blog/living-hinge-basics-for-injection-molding/): Diagram of a moulded hinge profile with dimensions, and material and gating advice *(licence: link only)*
- **make_it_yourself**: 
  - [Book box with living hinge (DrJones, Printables)](https://www.printables.com/model/295977-book-box-with-living-hinge): A small book-shaped box in several sizes (SD cards, credit cards, playing cards, batteries) whose spine is a living hinge printed flat in PLA at 0.2 mm layers, with a clasp that needs no magnet. Details read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [Living Hinge Design Test (tjdesign, Printables)](https://www.printables.com/model/517584-living-hinge-design-test): A quick test print to find which layer height and gap width work best for 90-degree living hinges on your printer; Fusion 360 file included. Read through the Printables public API. *(licence: Creative Commons Public Domain)*
  - [TPU/PP: little box with living hinge (flex) (3Dietrich, Printables)](https://www.printables.com/model/18192-tpupp-little-box-with-living-hinge-flex): A small closing box with a living hinge, for flexible filament only (TPU/TPE or PP), printed with no supports at 0.15 mm layers. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [BOSL2 hinges.scad: living_hinge_mask() and apply_folding_hinges_and_snaps() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad): Parametric OpenSCAD modules that cut a living hinge into a flat plate (leaving 2 layer heights of material) and add snap locks, for printing flat parts that fold up into boxes or shapes *(licence: BSD 2-Clause)*
- **diagram_idea**: A cut-away side view of a box and lid joined by a thin web: frame 1 flat as printed or moulded, with arrows showing the plastic's lines running across the thin section; frame 2 folded to 90 degrees with the outer surface stretched (tension) and the inner surface squashed; frame 3 closed at 180 degrees, with an inset showing the wrong way to print it (fold line along a layer boundary, layers peeling apart).
- **sources**: 
  - https://en.wikipedia.org/wiki/Living_hinge
  - https://en.wikipedia.org/wiki/Flexure_bearing
  - https://commons.wikimedia.org/wiki/Category:Living_hinges
  - https://commons.wikimedia.org/wiki/File:Mint_box_polypropylene_lid.JPG
  - https://commons.wikimedia.org/wiki/File:MS_Box.jpg
  - https://stuff.mit.edu/afs/athena/course/2/2.75/resources/random/Living%20Hinge%20Design.pdf
  - https://www.protolabs.com/resources/blog/living-hinge-basics-for-injection-molding/
  - https://www.protolabs.com/resources/design-tips/how-to-design-3d-printed-hinges/
  - https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://www.fictiv.com/articles/how-to-design-living-hinges
  - https://www.matterhackers.com/news/living-hinge:--design-guidelines-and-material-selection
  - https://forum.prusa3d.com/forum/original-prusa-i3-mk3s-mk3-print-tips-archive/living-hinge/
  - https://help.prusa3d.com/article/polypropylene-pp_167126
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://hackaday.com/2023/05/01/hinges-live-inside-3d-prints/
  - https://www.youtube.com/watch?v=TiEyFle6lTM
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/295977-book-box-with-living-hinge
  - https://www.printables.com/model/517584-living-hinge-design-test
  - https://www.printables.com/model/18192-tpupp-little-box-with-living-hinge-flex
  - https://www.printables.com/model/569143-flexlinks-cross-axis-flexural-pivot
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE

### Other info

- **Fields with unverified parts:** aliases, off_the_shelf_parts, play_and_precision, seal, special_behaviour

## 50 Flexure hinge (notch, leaf-spring and cross-axis pivots)

*compliant mechanisms & flexures.* A pivot made by a thin or crossed springy section that bends instead of rubbing, giving smooth, backlash-free rotation over a small angle

### What it is

- **plain_name**: A pivot with no pin: a thin or crossed springy strip joining two parts bends a little so one part can tilt or swing a few degrees, smoothly and with no rubbing, wobble or wear, and springs back when you let go
- **term**: Flexure hinge (flexure pivot); main kinds: notch hinge, leaf-spring (blade) hinge and cross-axis flexural pivot (crossed-leaf or cross-spring pivot)
- **aliases**: 
  - flexure pivot, flex pivot, flexural pivot, pivot bearing (trade terms)
  - flexure bearing (Wikipedia 'Flexure bearing')
  - compliant joint or compliant revolute joint (compliant-mechanism term)
  - notch hinge or notch flexure; circular, elliptical or corner-filleted notch hinge (by the shape of the cut-out; Linss, Henning and Zentner, IntechOpen)
  - leaf-spring hinge, leaf-type hinge, blade flexure
  - cross-axis flexural pivot (CAFP), cross-spring pivot, crossed-leaf hinge, X-hinge (Akaki Kuumeri's name for a printed one)
  - butterfly hinge or multi-trapezoidal hinge (a larger-angle variant; IntechOpen)
  - suspension spring (the flexure a pendulum clock's pendulum hangs from)
  - Free-Flex pivot (brand, Riverhawk) and C-Flex pivot bearing (brand)
  - Festkoerpergelenk (German: 'solid-body joint')
  - living hinge (sometimes used loosely for plastic flexure hinges, e.g. by Sharkey et al. 2016)
- **family**: compliant mechanisms & flexures
- **other_families**: hinges & pivots, print-in-place & 3D-printing joints
- **one_liner**: A pivot made from a deliberately thinned or crossed springy section that bends to let two parts rotate a small angle about each other, with no friction, backlash or wear.
- **complexity**: Single piece for notch and leaf-spring hinges, which are cut, moulded or printed into one block (e.g. the whole OpenFlexure microscope body with its hinges prints as one part). A few parts for a cross-axis pivot: two thin blades crossed in an X and fixed to the two parts; printed versions are two identical halves that clip together (BYU CMR), and bought pivots are two sleeves joined by flat springs crossed at 90 degrees (Riverhawk Free-Flex) or three leaf springs on two planes (C-Flex).
- **how_it_works**: Instead of a pin turning in a hole, the two parts are joined by a section that is much thinner than the rest, so all the bending happens there and the parts turn about it like a hinge (Wikipedia 'Flexure'; Sharkey et al. 2016). A short notch keeps the turning point almost fixed but allows only a few degrees; a longer thin blade allows more angle, but its turning point drifts as it bends; crossing two blades in an X gives a larger angle with a well-defined axis and good stiffness in the other directions (Linss et al., IntechOpen; BYU CMR). Because nothing slides, there is no friction, stiction, backlash or need for oil, and the bent section acts as a spring that pulls the part back to its rest position (Riverhawk; Physik Instrumente). The price is a small range of motion, set by how far the material can bend without taking a permanent bend or fatiguing (Wikipedia 'Flexure bearing').

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): a small, smooth, play-free rotation
  - line parts up exactly: it returns to the same spot every time, so it is used for precise alignment in instruments (Wikipedia 'Flexure')
  - store energy: the bent section is a spring that returns the part to centre
- **motion**: flex (rotates by bending), over a small angle: aluminium notch hinges only a few degrees (Linss et al., IntechOpen); printed PLA notch hinges in the OpenFlexure microscope are limited to about 6 degrees (Sharkey et al. 2016); bought crossed-spring pivots from plus or minus 3.7 degrees to plus or minus 15 degrees for unlimited life and up to plus or minus 30 degrees before damage (C-Flex design guide), or up to 60 degrees in total (Riverhawk)
- **degrees_of_freedom**: 1: rotation about the hinge axis, with the other directions held by the stiffness of the section. A notch flexure holds five directions and leaves one rotation free; a single thin blade holds only three, so it also bends sideways and twists easily (Wikipedia 'Flexure'), which is why blades are crossed or stacked to make a true one-axis pivot.
- **special_behaviour**: 
  - self-aligning or self-centring: the springy section always pulls the part back to its rest position; flexural pivots are described as self-centring by both Riverhawk and C-Flex
  - none of the locking, one-way or clicking behaviours: it is a smooth, spring-return pivot
- **holding_principle**: not a holding joint (it moves or passes on motion): it guides a rotation, spring force (a spring or springy part presses it in place): the bent section pushes back towards the rest position
- **input_output**: not applicable as a transmission on its own. Used as the fulcrum of a flexure lever it scales motion: e.g. Topias Korpi's printed flexure lever turns M3-screw movement into dial-gauge movement reduced about 10:1 to 15:1 (Hackaday, 2022), and Physik Instrumente uses flexure levers to multiply piezo travel up to 2 mm. Back-drivable: yes, it is a spring.
- **power**: passive (no power needed)
- **removability**: permanent for one-piece notch, leaf and printed hinges (they are part of the part); removable for crossed pivots that clip together (BYU CMR Cross-Axis Flexure Pivot), for metal blades clamped between blocks, and for bought pivot bearings that mount in a hole (C-Flex design guide)
- **reuse_cycles**: many times for clip-together, clamped and bought versions. The real limit is flex life, not taking it apart: effectively unlimited when the strain is kept low (a Riverhawk pivot was cycled over 12 billion times in twenty years; C-Flex rates 'indefinite life' below a set angle), but limited in 3D-printed plastic, which yields early and creeps (Akaki Kuumeri)
- **seal**: none
- **load**: light to medium. Bought steel crossed-spring pivots are very stiff sideways (radial stiffness up to 100,000 lb/in) and carry radial loads up to 1,600 lb (about 7 kN) in the biggest sizes (Riverhawk); printed plastic hinges carry only light loads. Load capacity and stiffness fall as the rotation angle grows (C-Flex design guide; DSPE 'Infinity flexure'). A single blade is strong when pulled along its length, weaker when pushed (it can buckle) and weak against twisting (Wikipedia 'Flexure').
- **adjustable**: No: stiffness and range are fixed by the section's thickness, length, width and material. You can limit travel with end stops (Akaki Kuumeri), and bought pivots come in thinner or thicker spring series: thinner springs give more range but less stiffness and load capacity (C-Flex design guide).
- **play_and_precision**: none: no backlash, stiction or lost motion, so it can be adjusted in extremely fine steps (Riverhawk: increments of 0.00005 in; Physik Instrumente: guiding accuracy of a few nanometres or microradians). The axis is not perfectly fixed: the turning point shifts sideways as it rotates (centre shift), zero at rest and growing with angle (C-Flex design guide); circular notches drift least, while corner-filleted notches and long blades allow more angle but drift more (Linss et al., IntechOpen). Printed plastic creeps, so the rest position can wander after it has been held bent (Akaki Kuumeri; Sharkey et al.). *(unverified parts omitted)*
- **access_needed**: not applicable: it is built into the part (bought pivot bearings can mount in a blind hole; C-Flex design guide)
- **materials**: Metal: stainless or spring-steel flat springs (AISI 420 in Riverhawk pivots), beryllium copper, titanium and Inconel for special pivots (Riverhawk; C-Flex); high-strength aluminium such as 7075 for machined notch hinges (Linss et al., IntechOpen). Plastic: polypropylene sheet gives BYU's cut FlexLinks pivots the best flexibility and fatigue life; PLA and ABS work in printed instruments (Sharkey et al.), and PLA+ was the most useful in Akaki Kuumeri's tests, with PETG said to yield later and creep less. Plastics bend further than metals of the same size, giving more range (Sharkey et al.), but creep.
- **maker_difficulty**: easy to moderate: a printed notch or leaf hinge is just a thin wall and prints in place, but getting thickness, length and range right takes test prints, and plastic yields and creeps; precise, long-life metal pivots are easiest to buy ready-made

### Making it

- **processes**: 
  - 3D print (FDM): one-piece notch and leaf hinges and clip-together crossed pivots (OpenFlexure microscope; BYU CMR; Akaki Kuumeri's controllers)
  - CNC: machined notch hinges in aluminium or steel; the most accurate flexure guides are cut by wire EDM (Physik Instrumente; Linss et al.)
  - laser cut: flat plastic flexures; BYU FlexLinks can also be milled, water-jet cut or CNC-routed from polypropylene sheet
  - off-the-shelf part: flexural pivot bearings (Free-Flex (brand), C-Flex (brand)) *(unverified parts omitted)*
- **print_in_place**: yes: notch and leaf hinges print as part of the mechanism with no assembly (the OpenFlexure microscope body, with all its hinges, prints as one piece without supports; Sharkey et al.). Crossed-blade pivots, whose blades cross in space, are often printed as two identical halves that clip together (BYU CMR Cross-Axis Flexure Pivot; layer.works 'Simplified Snap-Fit Flexure Pivot').
- **making_tips_3d_printing**: 1) Orient the flexure so it bends along the printed lines, not across layer joins. Two good options: (a) lay the flexure flat with its hinge axis horizontal, as OpenFlexure does, because a printer's layer height is thinner than its line width, so flat flexures can be thinner and stronger (Sharkey et al.); if it lies flat, make the lines run lengthwise along the flexure (Akaki Kuumeri); or (b) print the flexure as a thin standing wall with its hinge axis vertical, exactly two lines thick (Akaki Kuumeri: 'always printed vertically'; zalo's XY stage). Avoid a standing wall that bends about a horizontal axis, because the layers peel apart (Hubs advises against Z-direction cantilevers). 2) Starting sizes that worked: Akaki Kuumeri's 'flexure primitive' is 0.75 mm thick (two lines from a 0.4 mm nozzle), at least 10 mm wide (narrower twists too easily), at least 40 mm long (shorter doesn't bend well) and moved 5 mm at the tip; OpenFlexure's notch hinges are 0.72 mm thick, 1.5 mm long and 4 mm wide, bent no more than 6 degrees. 3) Check the strain before printing: the surface strain of a bent flexure is about thickness x angle (in radians) / (2 x length); OpenFlexure's 0.024 (2.4%) is already close to the yield strain of PLA and ABS (Sharkey et al.), so keep printed hinges at or below about that. 4) Add end stops so the hinge cannot be bent past its limit; OpenFlexure saw flexures snap only in designs where the motion was not constrained (Sharkey et al.; Akaki Kuumeri). 5) Design the hinge so it rests unbent, and never leave it under load: printed plastic creeps and won't return to centre after being held bent for a day (Akaki Kuumeri). 6) Fillet the corners where the flexure meets the stiff parts, and keep the print seam away from the flexure (use a seam painter or seam attractor) (Akaki Kuumeri; Line Arc Line). 7) Slicer settings for thin flexures: use the Classic perimeter generator rather than Arachne so the flexure is one or two clean lines (Line Arc Line), turn off 'detect thin walls' and set a 0.4 mm external perimeter, and check that two lines run along each flexure (zalo). 8) Materials: PLA or PLA+ is fine for light, occasional use (Akaki Kuumeri; Sharkey et al.); PETG or nylon for more flexing; PLA softens from about 60 °C (CNC Kitchen). 9) Crossed pivots: print two identical halves and clip them together with the clips at opposite ends (BYU CMR). 10) Print a small test piece first; OpenFlexure includes one to tune flexures and bridges for your printer (Sharkey et al.).
- **off_the_shelf_parts**: Search for 'flexural pivot', 'flex pivot' or 'pivot bearing' (Free-Flex (brand, Riverhawk) in cantilevered single-ended and double-ended styles, 0.125-1 in diameter; C-Flex (brand) pivot bearings in 10, 20 and 30 spring series). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Surface strain in a bent flexure is about t x alpha / (2 L) (t thickness, L length, alpha bend angle in radians); 0.72 mm x 1.5 mm PLA hinges bent 6 degrees reach about 2.4% strain, close to the yield strain of PLA and ABS (Sharkey et al., Rev. Sci. Instrum. 87, 025104, 2016).
  - Printed flexure starting point: 0.75 mm thick (two 0.4 mm lines), at least 10 mm wide, at least 40 mm long, about 5 mm tip movement; use end stops and never leave it loaded (Akaki Kuumeri, '3D Printed Flexures' slides).
  - Aluminium (7075) notch hinges are limited to rotations of a few degrees; a circular notch gives the least axis drift but the smallest range, a corner-filleted notch the largest range (Linss, Henning and Zentner, IntechOpen 2019).
  - Crossed-spring pivot bearings: indefinite life up to about half the angle that damages them, e.g. plus or minus 15 degrees versus 30 degrees (thin 10 series), plus or minus 7.5 versus 15 (20 series), plus or minus 3.7 versus 7.5 (thick 30 series); thinner springs give more range but less stiffness and load capacity (C-Flex design guide).
  - Centre shift grows with rotation angle and pivot diameter, and is zero at the centre position (C-Flex design guide; Riverhawk).
  - Keep cyclic stress low enough and a steel flexure can last effectively forever: a Riverhawk pivot ran over 12 billion cycles (Riverhawk engineering data).
  - Ordinary flexure hinges lose stiffness in their supporting directions as they deflect, especially at large angles; special designs are needed beyond a few tens of degrees (DSPE 'Large range of motion flexure hinge: Infinity flexure').

### When to use it

- **everyday_examples**: 
  - Tweezers: two springy arms joined at one end, a common example of a flexure joint (German Wikipedia 'Festkoerpergelenk'; Wikimedia Commons photo)
  - The thin metal ribbon that a pendulum clock's pendulum hangs from (suspension spring), used because it avoids the wobble of a conventional pivot (Wikipedia 'Pendulum clock')
  - The weighing mechanism of a precision laboratory balance, built with thin notch hinges (Wikimedia Commons photo of a Sartorius BP 160 P balance)
  - The rubber doughnut coupling (rag joint or giubo) on some car drive shafts, a flexure that bends in two directions (Wikipedia 'Flexure bearing')
- **when_to_use**: Use a flexure hinge when you need a small, smooth, precise rotation with no play and no friction: tilting mirrors and optics, fine-adjustment levers, weighing and measuring mechanisms, joysticks and controllers that spring back to centre, grippers, and pivots in places where oil, wear particles or dirt are a problem (vacuum, clean rooms, outdoors). In 3D printing it replaces a sloppy printed pin joint with a crisp, rattle-free one that prints in place, and it gives a built-in return spring for free.
- **when_not_to_use**: Avoid it when you need a large angle or continuous rotation (use a pin hinge, a bearing or a living hinge for folding lids), when the joint carries heavy loads or shocks, when the part must stay deflected for long periods in plastic (it creeps; use a metal flexure or a bearing with a separate spring), or when the extra returning force would be a nuisance. For a folding lid use a living hinge; for straight-line motion use a parallel leaf-spring flexure; for heavy, long-range rotation use ball bearings or bushings.
- **environment_limits**: Metal flexures suit hostile places: they work underwater, in a vacuum and at high temperatures (Wikipedia 'Flexure bearing'); steel Riverhawk pivots are rated from -400 °F to +1200 °F and have no lubricant to outgas in space; flexure stages need no lubricants and work in vacuum (Physik Instrumente). Metals still fatigue and eventually snap if bent too far too often (Wikipedia 'Flexure bearing'). Printed plastic hinges: PLA softens from about 60 °C and PETG from about 80 °C (CNC Kitchen); plastic creeps and takes a set if left bent (Akaki Kuumeri), and printed OpenFlexure stages drift slowly after large moves because of creep (Sharkey et al.).
- **safety_notes**: Generally low risk. Printed flexures bent past their limit snap suddenly (Sharkey et al.). Beryllium-copper flexure material is safe to handle, but breathing its dust or fumes can cause chronic beryllium disease (Wikipedia 'Beryllium copper'), so never grind, sand or machine it without proper controls. *(unverified parts omitted)*
- **common_failures**: Bent too far, so the material yields (takes a permanent bend) or snaps; add end stops and check the strain (Sharkey et al.; Akaki Kuumeri). Fatigue cracks at the thinnest point or at sharp corners after many cycles, especially in metals bent near their limit (German Wikipedia 'Festkoerpergelenk'; Wikipedia 'Compliant mechanism'); fillet the corners and lower the angle. Creep in plastic: the hinge no longer returns to centre after being held bent (Akaki Kuumeri). Layer splitting when a printed flexure bends across layer joins (Hubs). A single blade twisting or buckling under side or compressive loads (Wikipedia 'Flexure'). Loss of support stiffness and axis shift at large angles (DSPE; C-Flex). Seams, blobs or stray infill lines on a printed flexure make it stiff or weak (Akaki Kuumeri; zalo).
- **related**: 
  - Living hinge: a thin plastic web used to fold lids through large angles for a limited life, rather than for precise, small-angle pivots
  - Parallel leaf-spring flexure (linear flexure stage): two or more flexures arranged as a parallelogram to give straight-line motion instead of rotation
  - Print-in-place hinge: a printed pin-and-knuckle hinge with unlimited angle but with play and friction
  - Ball bearing or plain bushing: for large angles, continuous rotation and heavy loads, at the cost of friction and play
  - Knife-edge pivot: the most accurate balances and regulator clocks pivot on hardened knife edges instead of a spring (Wikipedia 'Pendulum clock')
  - Bistable compliant mechanism: flexure hinges arranged to snap between two stable positions
  - Compliant gripper and force amplifier: whole mechanisms built from flexure hinges
  - Torsion bar or torsion spring: twisting rather than bending gives the rotation

### Pictures, videos and models

- **links**: 
  - [Flexure pivot.png (Wikimedia Commons, NASA Space Mechanisms Project)](https://commons.wikimedia.org/wiki/File:Flexure_pivot.png): A Riverhawk Free-Flex crossed-spring flexure pivot, used in place of bearings in precision alignment mechanisms and scientific instruments *(licence: Public domain (NASA work))*
  - [Sartorius BP 160 P 6.jpg (Wikimedia Commons, by PaulT / Gunther Tschuch)](https://commons.wikimedia.org/wiki/File:Sartorius_BP_160_P_6.jpg): Close-up of one of the thin notch flexure hinges inside a precision laboratory balance *(licence: CC BY-SA 4.0)*
  - [Why Machines That Bend Are Better (YouTube, Veritasium)](https://www.youtube.com/watch?v=97t7Xj_iBv0): Veritasium visits BYU's Compliant Mechanisms Research group; demonstrations of flexure-based mechanisms that replace pins and bearings *(licence: link only (standard YouTube licence))*
  - [Triple crossed flexure pivot (TRIVOT) compliant mechanism (YouTube, Instant-Lab)](https://www.youtube.com/watch?v=rUH3cDmeXC4): Video of a large-angle crossed-blade flexure pivot in motion *(licence: link only (standard YouTube licence))*
  - [Building Prototypes Dan Gelbart part 10 of 18 Flexures (YouTube, Dan Gelbart)](https://www.youtube.com/watch?v=PaypcVFPs48): A prototyping engineer demonstrates practical metal and printed flexure hinges and levers *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Cross-Axis Flexure Pivot (BYU CMR, Printables)](https://www.printables.com/model/576067-cross-axis-flexure-pivot): Two identical printed parts that clip together to form a crossed-blade pivot that replaces a pin joint; stack two at right angles for a two-axis joint. Includes references to the Jensen and Howell (2002) modelling paper. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [FlexLinks: Cross-Axis Flexural Pivot (BYU CMR, Printables)](https://www.printables.com/model/569143-flexlinks-cross-axis-flexural-pivot): A LEGO-compatible crossed flexure pivot for prototyping compliant mechanisms; can be printed, milled, water-jet or CNC-router cut, best from polypropylene sheet (two 1/8 in layers). Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Simplified Snap-Fit Flexure Pivot (layer.works, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/174512-simplified-snap-fit-flexure-pivot): A slimmed-down remix of a BYU CMR crossed flexure pivot: print two identical parts and snap them together; prints well in PLA. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [OpenFlexure Microscope (OpenFlexure project)](https://openflexure.org/projects/microscope/): An open-source 3D-printed microscope whose stage and focus move on printed plastic flexure hinges, with build instructions and files *(licence: CC BY-SA 4.0)*
- **diagram_idea**: Three side-by-side sketches of the same swinging arm on different flexure hinges: a block with two round notches cut into it (tiny angle, fixed axis), a single thin blade (bigger angle, axis drifting, shown with a moving dot), and two blades crossed in an X (big angle, axis almost fixed), each with an arc arrow showing its range and a small 'no pin, no rubbing' label.
- **sources**: 
  - https://en.wikipedia.org/wiki/Flexure
  - https://en.wikipedia.org/wiki/Flexure_bearing
  - https://en.wikipedia.org/wiki/Compliant_mechanism
  - https://en.wikipedia.org/wiki/Pendulum_clock
  - https://en.wikipedia.org/wiki/Beryllium_copper
  - https://en.wikipedia.org/wiki/Freedom_and_constraint_topologies
  - https://de.wikipedia.org/wiki/Festkörpergelenk
  - https://commons.wikimedia.org/wiki/File:Flexure_pivot.png
  - https://commons.wikimedia.org/wiki/File:Sartorius_BP_160_P_6.jpg
  - https://commons.wikimedia.org/wiki/File:Risorta_pinchilo.jpg
  - https://kalab.emma.cam.ac.uk/pdfs/Sharkey2016.pdf
  - https://arxiv.org/abs/1509.05394
  - https://www.intechopen.com/chapters/66493
  - https://www.dspe.nl/knowledge/dppm-cases/large-range-of-motion-flexure-hinge-infinity-flexure/
  - https://www.flexpivots.com/free-flex-flexural/
  - https://direct.daitron.co.jp/pdf/Riverhawk-FlexuralPivotEngineeringData.pdf
  - https://c-flex.com/products/pivot-bearings/
  - https://c-flex.com/wp-content/uploads/2024/10/DESIGN-GUIDE.pdf
  - https://www.physikinstrumente.com/en/expertise/technology/guiding-systems-force-transmission/flexure-stages
  - https://s3files.core77.com/images/c77_webinar_series/Akaki-Kuumeri-3D-printed-flexures.pdf
  - https://hackaday.com/2022/06/03/3d-printed-flexture-shows-precision-in-action/
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://openflexure.org/projects/microscope/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/576067-cross-axis-flexure-pivot
  - https://www.printables.com/model/569143-flexlinks-cross-axis-flexural-pivot
  - https://www.printables.com/model/77081-xy-flexure-translation-stage
  - https://scholarsarchive.byu.edu/facpub/6578
  - https://www.youtube.com/watch?v=97t7Xj_iBv0
  - https://www.youtube.com/watch?v=rUH3cDmeXC4
  - https://www.youtube.com/watch?v=PaypcVFPs48
  - https://www.youtube.com/watch?v=K0wr_ZhhtbE

### Other info

- **Fields with unverified parts:** off_the_shelf_parts, play_and_precision, processes, safety_notes, tools_needed

## 51 Parallel leaf-spring flexure (linear flexure stage)

*compliant mechanisms & flexures.* Two or more parallel springy blades that let a platform slide a short way in a straight line with no sliding friction or play

### What it is

- **plain_name**: Two (or more) thin springy strips standing side by side like the legs of a table, holding a small platform so it can shift a short way in a straight line without tilting, rubbing or wobbling, and springs back when you let go
- **term**: Parallel leaf-spring flexure (parallelogram flexure); built into a positioning stage it is a linear flexure stage
- **aliases**: 
  - parallelogram flexure (Awtar, Slocum and Sevincer)
  - parallel leaf-spring guidance, two parallel leaf springs (Ingeniqs Engipedia)
  - four-bar flexure or flexure four-bar linkage (when the legs have notch hinges at each end; Sharkey et al. 2016)
  - double parallelogram flexure or compound parallelogram (two in series, which cancels the dip; Awtar et al.; Ingeniqs)
  - flexure stage, flexure translation stage, flexure-guided stage, piezo flexure stage (Physik Instrumente; OpenFlexure)
  - linear flexure, compliant linear guide (maker names on Printables and Hackaday)
  - single-point (bending-beam) load cell body: a machined parallelogram flexure used in weighing scales (Transducer Techniques)
- **family**: compliant mechanisms & flexures
- **other_families**: sliding, telescoping & linear motion, print-in-place & 3D-printing joints
- **one_liner**: Two or more identical parallel blades join a fixed base to a moving platform, so the platform can slide a short distance in a nearly straight line with no friction, play or wear, guided and sprung by the bending blades.
- **complexity**: A double parallelogram adds an intermediate stage between two sets of blades. A positioning stage adds a drive, such as an M3 screw, nut and thumbwheel or a stepper motor (Sharkey et al.; OpenFlexure). *(unverified parts omitted)*
- **how_it_works**: Two blades of equal length form a parallelogram with the base and the platform. When you push the platform sideways, both blades bend into the same S shape, so the platform stays parallel to the base and moves almost in a straight line, while the blades' resistance to being stretched, squashed and twisted holds every other direction (Awtar et al.; Ingeniqs). Because the blades cannot change length, the platform dips slightly towards the base as it moves, by about 0.6 x travel squared / blade length; putting two parallelograms in series, with the middle stage moving half as far as the platform, cancels this dip (double parallelogram) (Ingeniqs; Awtar et al.). With nothing sliding there is no friction, stiction or play, so a flexure stage can be moved in steps of micrometres or even nanometres (Physik Instrumente; Sharkey et al.).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): a short, straight, play-free slide
  - line parts up exactly: fine positioning of optics, samples, probes and pens
  - store energy: the bent blades act as a return spring that pushes the platform back to its rest position
- **motion**: flex (slides by bending): a short, nearly straight travel. Metal flexure guides suit positioning tasks of up to several millimetres, and lever-amplified piezo stages reach up to 2 mm (Physik Instrumente); printed four-bar stages give a usable range of about 20% of the lever length (plus or minus 10%) (Sharkey et al.); OpenFlexure's printed stage moves 8 x 8 x 4 mm and zalo's printed XY stage plus or minus 14 mm.
- **degrees_of_freedom**: 1: straight sideways travel, with the other five directions held; David Tucker's printed linear flexure was 'rigid in five of the six degrees of freedom' (Hackaday, 2021). Two sets at right angles, or a table-like arrangement of parallelogram legs, give 2 (X and Y) (Sharkey et al.; zalo).
- **special_behaviour**: 
  - self-aligning or self-centring: the bent blades spring the platform back to its central rest position when released
  - none of the locking, one-way or clicking behaviours: it is a smooth, spring-return straight guide
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it guides a straight-line motion
  - spring force (a spring or springy part presses it in place): the blades push the platform back towards the rest position
- **input_output**: not applicable as a transmission; it is usually driven by a screw, piezo actuator or motor. Levers made of flexures can scale the motion: OpenFlexure's focus axis reduces screw motion 2.6 times, and with stepper motors and 1/16 microstepping it moves in steps of about 50 nm (Sharkey et al.). Back-drivable: yes, the blades are springs.
- **power**: passive (no power needed) for the flexure itself; motorised stages need power to move, and a screw-driven stage stays where it is if power is lost
- **reuse_cycles**: many times: nothing wears because nothing slides; the life limit is fatigue of the blades, which is long if they are bent well within the material's limit. Printed OpenFlexure stages had no flexures snap after 6 months of use (Sharkey et al.); FabianVeile's printed XY guide is designed to stay in the elastic region so it always returns to its start position (Printables)
- **seal**: none
- **load**: light to medium in the directions it holds; very light in the travel direction by design. Stiff against loads along the blades and against tilting. Stiffness in the travel direction is 2 x E x w x t cubed / L cubed for two blades (Ingeniqs). Holding stiffness falls as it moves: about 30% lower at a travel of one tenth of the blade length for a simple parallelogram, and about 90% lower for a double parallelogram (Awtar et al.). A pushing (compressive) load along the blades softens them towards buckling, so hang loads from the blades rather than stand them on top where possible (Awtar et al.).
- **adjustable**: Position: yes, that is its purpose; the platform is moved by a fine screw (an M3 screw moves 0.5 mm per turn, allowing sub-micron adjustment by hand; Sharkey et al.), a piezo or a motor. Stiffness and range: no, fixed by the blade thickness, length, width and material.
- **play_and_precision**: none: no backlash, stiction or play. Repeatability of a printed OpenFlexure stage was under 1 micrometre for small moves and about 15 micrometres for 1 mm moves, with focus drift typically under 10 micrometres (Sharkey et al.); metal flexure-guided piezo stages reach guiding accuracy of a few nanometres or microradians (Physik Instrumente). The path is not perfectly straight: the dip is about 0.6 x travel squared / blade length (Ingeniqs; Awtar et al.), and for a four-bar of notch hinges the deviation from a straight line is about 1% of the lever length over its usable range (Sharkey et al.). Blades of unequal length make the platform tilt as it moves (Awtar et al.). Printed stages drift slowly after big moves because plastic creeps (Sharkey et al.).
- **access_needed**: not applicable: it is built into the mechanism
- **materials**: Metal: aluminium or steel blocks with the flexures cut in, as in single-point load cells (Transducer Techniques) and wire-EDM-cut precision stages (Physik Instrumente); flexures can be made from nonmagnetic materials (Physik Instrumente). Plastic: PLA (OpenFlexure; zalo's XY stage), PLA+ (Akaki Kuumeri), PETG or more flexible filaments (Line Arc Line). Plastic gives a longer range than an equal-sized metal flexure but creeps (Sharkey et al.). *(unverified parts omitted)*
- **maker_difficulty**: easy to moderate: a printed parallel flexure is a simple one-piece print (FabianVeile's XY Linear Guide prints in about 45 minutes), but printing thin blades cleanly, avoiding creep and adding a fine screw drive takes some care; nanometre-grade metal stages are bought

### Making it

- **processes**: 
  - 3D print (FDM): one-piece linear and XY flexure stages (OpenFlexure; zalo; FabianVeile; BYU CMR)
  - CNC: monolithic metal stages with flexures cut by wire EDM (Physik Instrumente) and machined load-cell bodies (Transducer Techniques)
  - off-the-shelf part: piezo flexure stages and nanopositioners (Physik Instrumente); single-point load cells (Transducer Techniques) *(unverified parts omitted)*
- **print_in_place**: yes: the whole guide prints as one working piece without supports (OpenFlexure microscope and Block Stage; zalo's XY Flexure Translation Stage; FabianVeile's XY Linear Guide). A positioning stage then needs an added drive, such as an M3 screw and nut (Sharkey et al.; Printables 'High-precision Compliant XY-Positioning Device'), which makes it 'partly' print-in-place.
- **making_tips_3d_printing**: 1) Print the blades as thin standing walls, two lines thick with a 0.4 mm nozzle (about 0.75 mm), so they bend along the printed lines; Akaki Kuumeri's 'flexure primitive' is 0.75 mm thick, at least 10 mm wide and at least 40 mm long, and his linear mechanisms are built from it; if a flexure must lie flat, make the lines run lengthwise (Akaki Kuumeri). OpenFlexure instead lays its notch hinges flat with the hinge axes horizontal, because the layer height is thinner than the line width (Sharkey et al.). 2) Use slicer settings that give exactly one or two clean lines per blade: 'Classic' perimeter generator rather than Arachne (Line Arc Line), 'detect thin walls' off and 'detect bridging perimeters' on, external perimeter width 0.4 mm, and check that two lines run along each flexure (zalo). 3) Keep the print seam off the blades (paint it elsewhere or use a seam attractor) and fillet the corners where blades meet the blocks (Line Arc Line; Akaki Kuumeri). 4) Make the two blades identical in length and thickness, or the platform will tilt as it moves (Awtar et al.). 5) Size the travel: the peak bending stress of a guided blade is about 3 x E x t x travel / L squared (Ingeniqs), so longer, thinner blades allow more travel; printed four-bar stages use about plus or minus 10% of their lever length (Sharkey et al.). 6) Add end stops so the stage can't be pushed past its safe range; OpenFlexure only saw flexures snap in designs whose motion was not limited (Sharkey et al.; Akaki Kuumeri). 7) Don't leave it pushed to one side: plastic creeps and will not return to centre (Akaki Kuumeri); OpenFlexure stages drift more after a large move (Sharkey et al.). 8) For straighter travel, use two parallelograms in series (double parallelogram) or mirror-image pairs, as in zalo's 'mutually compensating' XY stage (zalo; Akaki Kuumeri's 'linear-er movement with two stages'). 9) For two axes, a table with parallelogram legs is stiffer out of plane than two stages stacked on each other when printed in plastic (Sharkey et al.). 10) Prefer PLA+ or PETG for light, occasional use; PLA softens from about 60 °C and PETG from about 80 °C (CNC Kitchen).
- **rules_of_thumb**: 
  - Parasitic dip (shortening) of a simple parallelogram: about 0.6 x travel squared / blade length (Ingeniqs 'Two parallel leaf springs'; Awtar, Slocum and Sevincer, 'Characteristics of Beam-based Flexure Modules', kinematic coefficient -0.6). Example: 2 mm travel on 40 mm blades gives about 0.06 mm dip.
  - Travel-direction stiffness of two blades: 2 x E x w x t cubed / L cubed; peak bending stress: 3 x E x t x travel / L squared (Ingeniqs).
  - A double parallelogram cancels the dip when the middle stage moves exactly half as far as the platform (Ingeniqs), but its holding stiffness falls about 90% at a travel of one tenth of the blade length, versus about 30% for a simple parallelogram with blades 1/50 of their length thick (Awtar et al.).
  - Compressive load along the blades lowers the travel stiffness, reaching zero at buckling; tension raises it (Awtar et al.).
  - Printed four-bar flexure stages: usable range about 20% of lever length (plus or minus 10%) with about 1% deviation from a straight line; hinges 0.72 mm thick, 1.5 mm long, 4 mm wide, bent no more than 6 degrees (Sharkey et al., Rev. Sci. Instrum. 87, 025104, 2016).
  - Printed flexure blade starting point: 0.75 mm thick (two 0.4 mm lines), at least 10 mm wide, at least 40 mm long (Akaki Kuumeri).
  - Metal flexure guides suit positioning tasks up to several millimetres; lever-amplified piezo flexure stages reach up to 2 mm but simple levers lose guiding accuracy and stiffness (Physik Instrumente).
  - Single-point load cells use four thin flexures (two near the top, two near the bottom) so an off-centre load moves the platform down instead of tipping it; the correction holds only up to the rated platform size (e.g. 7.87 in square for the LSP series) (Transducer Techniques).

### When to use it

- **everyday_examples**: 
  - The load cell inside kitchen, bathroom and postal scales: a metal block with four thin flexures forming a parallelogram, so the reading is the same wherever you put the item on the platform (Transducer Techniques)
  - The weighing mechanism of a precision laboratory balance, guided by thin flexure hinges (German Wikipedia 'Festkoerpergelenk'; Wikimedia Commons photo of a Sartorius BP 160 P)
  - The sample stage of the 3D-printed OpenFlexure microscope (openflexure.org)
  - Pen or drag-knife holders on hobby CNC plotters, which use printed linear flexures to press the tool down with a steady force (Hackaday, 'Print Your Own Flexures', 2021)
- **when_to_use**: Use a parallel leaf-spring flexure when something must move a short distance in a straight line with no play, friction or stick-slip: focusing and positioning microscopes, lenses, mirrors, fibres and probes; fine adjusters driven by a screw; pen or knife holders that must press down evenly; weighing and force sensing; and compact spring-loaded guides that must not rattle. It is a natural fit for 3D printing because printed sliding rails are rough and loose, whereas a printed flexure guide is one piece, prints without supports and needs no bearings (Sharkey et al.).
- **when_not_to_use**: Avoid it when you need long travel (more than a few millimetres in metal, or more than about a tenth of the blade length in plastic): use a linear rail, a dovetail slide or wheels on an extrusion. Avoid it for heavy or shock loads, for motion that must stay deflected for long periods in plastic (creep), or where the return-spring force would fight the drive. For rotation use a flexure hinge; for a perfectly straight path over a longer stroke use a double parallelogram or a rolling-element linear guide.
- **environment_limits**: Metal flexure guides need no lubricants or consumables, so they work in vacuum, and can be made from nonmagnetic materials (Physik Instrumente); they avoid friction, stiction and wear (Wikipedia 'Flexure'). Plastic stages: PLA softens from about 60 °C and PETG from about 80 °C (CNC Kitchen); plastic creeps, so printed stages drift after large moves, although a one-piece OpenFlexure stage moved less than 20 micrometres over a week without temperature control (Sharkey et al.) and the OpenFlexure Block Stage drifted 1.6 micrometres in 16 hours (openflexure.org). Metals fatigue if bent too far too often (Wikipedia 'Flexure bearing').
- **safety_notes**: None known for small printed stages. Printed blades pushed past their limit can snap (Sharkey et al.). If you make blades from beryllium-copper strip, do not grind or sand it: breathing its dust can cause chronic beryllium disease (Wikipedia 'Beryllium copper').
- **common_failures**: Blades snap or take a permanent bend when pushed too far; add end stops (Sharkey et al.; Akaki Kuumeri). Creep: a printed stage left pushed to one side no longer returns to centre, or drifts after a big move (Akaki Kuumeri; Sharkey et al.). The platform tilts or dips because the blades are unequal or because of the natural shortening effect (Awtar et al.; Ingeniqs). The stage becomes wobbly near the ends of its travel as holding stiffness drops, especially with a double parallelogram whose middle stage is free to float (Awtar et al.). Blades buckle under a compressive load (Awtar et al.). Printing faults: gaps or single wobbly lines in thin blades, a seam blob on a blade, or poor bridges (zalo; Line Arc Line; Sharkey et al.). Over-constraint: adding extra parallel blades that don't match exactly makes the guide stiff or bind (Awtar et al.).
- **related**: 
  - Flexure hinge (notch, leaf-spring and cross-axis pivots): the rotating building block; a parallelogram is four flexure hinges or two blades working together
  - Double parallelogram flexure: two parallelograms in series that cancel the dip and double the travel, at the cost of lower holding stiffness
  - Roberts or X-Bob straight-line compliant mechanism: a different flexure layout for longer straight travel (BYU CMR 'Linear-Motion Compliant Mechanism')
  - Dovetail slide with gib strip: a sliding straight guide with long travel but friction and adjustable play
  - Linear rail or linear ball bearing: long travel and high load, with bought parts and some friction
  - Lead screw and nut: often used to drive a flexure stage with fine resolution
  - Living hinge: the same bending principle used for folding lids rather than guiding motion

### Pictures, videos and models

- **links**: 
  - [Weird Flex But Okay: Introduction to the Parallelogram Flexure (YouTube, Precision Stuff)](https://www.youtube.com/watch?v=JGbM6qZAwQY): Video introduction to the parallelogram (parallel leaf-spring) flexure and how it guides straight-line motion *(licence: link only (standard YouTube licence))*
  - [A one-piece 3D printed flexure translation stage for open-source microscopy (Sharkey, Foo, Kabla, Baumberg and Bowman; Rev. Sci. Instrum. 2016; arXiv)](https://arxiv.org/abs/1509.05394): Photos and diagrams of a printed microscope whose stage and focus move on printed parallelogram flexures, with the flexure geometry, strain estimate, drift and repeatability measurements *(licence: CC BY 3.0 for the journal article (stated in the article PDF); the arXiv page shows CC BY 4.0)*
  - [OpenFlexure Block Stage (OpenFlexure project)](https://openflexure.org/projects/blockstage/): A 3D-printed three-axis flexure stage with sub-100 nm steps over 2 x 2 x 2 mm, with pictures, build instructions and files *(licence: CC BY-SA 4.0)*
  - [Building Prototypes Dan Gelbart part 10 of 18 Flexures (YouTube, Dan Gelbart)](https://www.youtube.com/watch?v=PaypcVFPs48): Practical demonstrations of flexure guides and levers for precise motion *(licence: link only (standard YouTube licence))*
  - [Sartorius BP 160 P 6.jpg (Wikimedia Commons, by PaulT / Gunther Tschuch)](https://commons.wikimedia.org/wiki/File:Sartorius_BP_160_P_6.jpg): Close-up of a flexure hinge in the parallel guide of a precision laboratory balance *(licence: CC BY-SA 4.0)*
- **make_it_yourself**: 
  - [XY Flexure Translation Stage (zalo, Printables)](https://www.printables.com/model/77081-xy-flexure-translation-stage): A one-piece printed XY stage using mutually compensating flexures for nearly pure straight-line motion, plus or minus 14 mm range, in PLA with slicer settings for two-line flexures; Fusion 360 source linked. Read through the Printables public API. *(licence: CC BY (Creative Commons Attribution))*
  - [XY Linear Guide (Compliant Mechanism) (FabianVeile, Printables)](https://www.printables.com/model/101320-xy-linear-guide-compliant-mechanism): A simple one-piece compliant XY guide moving about 10 mm in X and 7.5 mm in Y; prints in about 45 minutes. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [High-precision Compliant XY-Positioning Device (FabianVeile, Printables)](https://www.printables.com/model/336719-high-precision-compliant-xy-positioning-device): A one-piece flexure positioner driven by two M3 screws and nuts (about 1 mm range in X and 2 mm in Y), printed in PLA at 0.2 mm layers without supports. Read through the Printables public API. *(licence: CC BY-NC-ND)*
  - [Linear-Motion Compliant Mechanism (BYU CMR, Printables)](https://www.printables.com/model/586635-linear-motion-compliant-mechanism): A printable 'X-Bob' large-displacement straight-line compliant mechanism (four Roberts mechanisms), a related straight-line flexure from BYU's research on safety-and-arming devices. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [OpenFlexure Block Stage build files and instructions](https://openflexure.org/projects/blockstage/): Open-source printed three-axis flexure stage driven by M3 lead screws and gears, optionally motorised with 28BYJ-48 steppers *(licence: CC BY-SA 4.0)*
- **diagram_idea**: Side view of a platform held above a base by two parallel blades: frame 1 at rest (a rectangle); frame 2 pushed sideways, both blades bent into matching S shapes and the platform still level, with a small exaggerated arrow showing it dipping towards the base; frame 3 a double parallelogram in which the middle block moves half as far and the dip cancels.
- **sources**: 
  - https://psdl.engin.umich.edu/pdf/J6.pdf
  - https://ingeniqs.be/engipedia/two-parallel-leaf-springs/
  - https://kalab.emma.cam.ac.uk/pdfs/Sharkey2016.pdf
  - https://arxiv.org/abs/1509.05394
  - https://arxiv.org/abs/1911.09986
  - https://openflexure.org/projects/blockstage/
  - https://openflexure.org/projects/microscope/
  - https://www.physikinstrumente.com/en/expertise/technology/guiding-systems-force-transmission/flexure-stages
  - https://www.transducertechniques.com/lsp-load-cell.aspx
  - https://en.wikipedia.org/wiki/Flexure
  - https://en.wikipedia.org/wiki/Flexure_bearing
  - https://en.wikipedia.org/wiki/Beryllium_copper
  - https://de.wikipedia.org/wiki/Festkörpergelenk
  - https://commons.wikimedia.org/wiki/File:Sartorius_BP_160_P_6.jpg
  - https://s3files.core77.com/images/c77_webinar_series/Akaki-Kuumeri-3D-printed-flexures.pdf
  - https://hackaday.com/2021/06/22/print-your-own-flexures/
  - https://hackaday.io/project/180448-putting-the-flex-on-flexures
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/77081-xy-flexure-translation-stage
  - https://www.printables.com/model/101320-xy-linear-guide-compliant-mechanism
  - https://www.printables.com/model/336719-high-precision-compliant-xy-positioning-device
  - https://www.printables.com/model/586635-linear-motion-compliant-mechanism
  - https://www.youtube.com/watch?v=JGbM6qZAwQY
  - https://www.youtube.com/watch?v=PaypcVFPs48

### Other info

- **Fields with unverified parts:** complexity, materials, off_the_shelf_parts, processes, removability, tools_needed

## 52 Compliant gripper and force amplifier

*compliant mechanisms & flexures.* One-piece bending mechanisms that multiply or redirect a force, such as printed grippers, pliers and crimpers

### What it is

- **plain_name**: A one-piece plastic tool, such as pliers, tweezers or a robot claw, that grips or squeezes by bending instead of turning on pins, and can be shaped so a gentle squeeze on the handles becomes a strong pinch at the jaws (or a tiny push becomes a big jaw movement)
- **term**: Compliant gripper (compliant force or displacement amplifier)
- **aliases**: 
  - compliant gripper or flexure gripper
  - monolithic (one-piece) gripper
  - compliant pliers or fully compliant pliers
  - compliant crimper or compliant crimping mechanism
  - compliant tweezers or compliant grabber
  - compliant microgripper (tiny versions driven by piezo actuators)
  - compliant force amplifier or force-amplifying compliant mechanism
  - displacement-amplifying compliant mechanism (DaCM)
  - compliant lever amplifier
  - bridge-type amplifier or bridge-type flexure amplifier
  - compliant clamp or compliant vise grip
  - cross-locking tweezers, reverse-action tweezers or self-closing tweezers (spring-closed metal version)
- **family**: compliant mechanisms & flexures
- **other_families**: print-in-place & 3D-printing joints, over-centre, toggle & cam clamps, gear trains, gearboxes & transmissions, clamping, magnetic & friction connections
- **one_liner**: A single bending part shaped like a set of levers, so that pushing or squeezing one end makes the jaws at the other end close with more force (or more movement) than you put in, with no pins, springs or hinges to assemble.
- **complexity**: Single piece: handles or an input point, thin bending sections (flexure hinges) that act as pivots, stiffer arms that act as levers, and jaws; sometimes a built-in stop. Robot versions add a servo or motor to push the input; microgrippers add a piezo actuator.
- **how_it_works**: The part is really a set of levers (a linkage) where every pin joint has been replaced by a thin section that bends (a flexure hinge), so the whole thing can be printed or cut as one piece (BYU CMR, Printables; Wikipedia, Compliant mechanism). As with any lever, the ratio of the lever arms sets the trade: a long handle and a short jaw arm multiply force but shrink movement, and the reverse multiplies movement but reduces force (mechanical advantage, the law of the lever; Wikipedia, Mechanical advantage). Unlike pinned pliers, some of your squeeze is used up bending the flexures, so a compliant gripper delivers less output force than the lever ratio alone predicts and springs back open when released (Midha, Bapat and Midha 2015; IISc M2D2 collection). Precision versions chain lever and 'bridge' stages to turn a piezo actuator's micrometre movement into a jaw movement tens of times larger (Chen et al. 2019).

### Finder attributes

- **job**: 
  - join and hold: grips or clamps an object between its jaws
  - change speed or turning force: multiplies force (or movement) through built-in levers
  - change the kind of motion: turns a squeeze or push into a pinching jaw movement
  - let it move (turn, slide or bend): all motion comes from bending sections, with no pins
  - store energy: the bent flexures store energy that springs the jaws back open (or shut, in self-closing designs)
- **motion**: flex: the jaws open and close by bending the flexure hinges, usually over a small range (a few millimetres to a few centimetres at the jaws for printed tools; hundreds of micrometres for piezo microgrippers, e.g. 632 micrometres in Chen et al. 2019)
- **degrees_of_freedom**: 1: the jaws open and close along one path; the flexures are designed to be stiff in other directions, though twisting and sideways wobble (parasitic motion) are common in thin printed versions
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): converts a squeeze or push into a pinch, and trades travel for force or force for travel through its lever ratios
  - over-centre (snaps past a point and stays): only in locking or bistable versions, e.g. printed vice-grip style pliers that snap shut and bistable keychain grippers that stay open or closed (Printables, Codeman3000 and FabianVeile)
- **holding_principle**: 
  - friction or clamping (force-fit): the jaws squeeze the object and friction holds it
  - spring force (a spring or springy part presses it in place): the bent flexures keep pressure on the jaws in self-closing and bistable designs
- **input_output**: Squeeze or linear push -> jaw closing (rotation or near-straight pinch). Force ratio is set by the lever arms (law of the lever) minus the energy lost bending the flexures (Midha et al. 2015). Displacement amplifiers for piezo drives reach about 31.6x (four-stage aluminium microgripper; Chen et al. 2019) to 65x (bridge-type amplifier; Wang et al. Back-drivable: yes, the jaws spring back when the input is released, except in over-centre or bistable locking versions. *(unverified parts omitted)*
- **removability**: tool-free quick release: it releases the object as soon as you stop squeezing (or flip the switch on bistable versions); the tool itself is one piece with nothing to take apart
- **reuse_cycles**: many times, as long as the flexures bend only within their springy (elastic) range and the material is tough (PETG, polypropylene, nylon); thin FDM flexures pushed hard can fail in tens of cycles (an FDM living hinge lasted about 25 cycles; *(unverified parts omitted)*
- **tools_needed**: none to use; none to assemble (one piece). A ballpoint refill or knife may be needed to free fused gaps after printing (FabianVeile, Printables)
- **seal**: none
- **load**: light: printed hand tools grip small objects and give modest force; the force is limited by what the thin flexures can take without yielding (Wikipedia, Compliant mechanism). *(unverified parts omitted)*
- **adjustable**: no: the lever ratios and jaw gap are fixed by the shape; changing force or opening means reprinting with different flexure thickness or arm lengths (BYU surgical grippers note thinner flexures need less force)
- **play_and_precision**: Play: none, because there are no pin joints (no backlash; Wikipedia, Compliant mechanism; Akaki Kuumeri). Repeatability: good while the plastic stays springy, but plastic creep and yielding shift the rest position over time (Akaki Kuumeri). Jaw alignment: jaws may not meet squarely if flexures are too thick or the print is slightly off, and designers work to keep the jaws parallel (BYU surgical grippers; IISc M2D2 collection)
- **access_needed**: not applicable
- **materials**: FDM: PETG is the best common filament for BYU's fully compliant pliers, which were originally milled from 1/4 inch polypropylene sheet (BYU CMR, Printables); PLA works for small or occasional-use grippers (BYU surgical grippers, FabianVeile), PLA+ was the most useful in one maker's tests (Akaki Kuumeri); nylon and ABS also used (Igor A, Printables). Resin: Tough 1500 (155% elongation, 8,000 Ross flex cycles) is recommended by Formlabs for compliant mechanisms. Metal: spring steel or stainless tweezers and sugar tongs (Wikipedia); aluminium 7075 for precision piezo-driven microgrippers (Chen et al. 2019; Wang et al. 2021)
- **maker_difficulty**: moderate: prints in one piece with no assembly, but flexure thickness, gaps between moving parts and material choice usually need a few test prints to get a gripper that closes fully and lasts

### Making it

- **processes**: 
  - 3D print (FDM): one-piece pliers, tweezers, grippers and robot claws
  - 3D print (resin): tough resins such as Formlabs Tough 1500 for small compliant mechanisms
  - CNC: milled from polypropylene sheet (BYU's fully compliant pliers) or wire-EDM or milled aluminium for precision microgrippers
  - sheet metal: bent or joined metal strips for tweezers and sugar tongs
  - off-the-shelf part: tweezers and cross-locking tweezers *(unverified parts omitted)*
- **print_in_place**: yes: most designs print flat in one piece and work straight off the bed (BYU fully compliant pliers, FabianVeile's tweezers, quibeck's spring pliers), though some need narrow gaps broken free after printing
- **making_tips_3d_printing**: Print the gripper flat so the flexures bend along the layer lines, never across them; if a flexure must lie flat, make sure its print lines run lengthwise (Akaki Kuumeri; Hubs recommends building the hinge width layer by layer). Size flexures to the nozzle: a 0.75 mm wall prints as exactly two lines with a 0.4 mm nozzle, and walls over three lines thick behave unpredictably; make them at least 10 mm wide so they don't twist and about 40 mm long so they bend smoothly (Akaki Kuumeri). Hubs gives 0.4 to 0.6 mm (at least two layers) for FDM living hinges. Thinner flexures give better jaw alignment for less squeezing force (BYU surgical grippers). Fillet corners where flexures meet thick parts, and move the slicer seam away from flexures (Akaki Kuumeri). Add end stops so the flexures can't be bent past their limit, and never store the tool clamped shut or under load, because printed plastic yields early and creeps (Akaki Kuumeri; FabianVeile adds a stop to his tweezers). Use PETG for longest life (BYU fully compliant pliers); quibeck recommends PETG with 3 to 4 walls for printed spring pliers. Check narrow gaps: very small clearances between a moving rod and fixed parts can fuse and need freeing with a thin tool (FabianVeile). Calibrate to avoid over-extrusion and elephant's foot, which make joints stiff (juh, Printables). Add rubber or grippy material to jaws if parts slip, because smooth PLA and PETG have low friction (Hartisch and Haninger 2023).
- **off_the_shelf_parts**: Tweezers (fused or bent-strip) and cross-locking tweezers (also sold as reverse-action or self-closing tweezers) are metal compliant grippers you can buy (Wikipedia, Tweezers). Robot versions use a micro servo (e.g. SG90) or linear actuator to push the input. The rigid-link equivalents are locking pliers ('Vise-Grip' is a brand) and crimping pliers. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Law of the lever: force gain = input lever arm / output lever arm, and movement shrinks by the same ratio (Wikipedia, Mechanical advantage)
  - In a compliant mechanism, the energy stored in bending the flexures reduces the mechanical advantage, so minimise flexure stiffness relative to the lever geometry (Midha, Bapat and Midha, ASME IDETC 2015)
  - Bridge-type amplifiers: thinner hinges, a smaller incline angle and a shorter input frame give more amplification but more stress; an optimised aluminium design reached 65x with 0.4 mm hinges and a 0.7 degree incline angle (Wang et al., Micromachines 2021)
  - Chaining stages multiplies the ratios: two bridge stages and two lever stages gave 31.6x in a piezo microgripper (Chen et al., Micromachines 2019)
  - FDM flexure starting point: 0.75 mm thick (two lines with a 0.4 mm nozzle), at least 10 mm wide and about 40 mm long, printed vertically (Akaki Kuumeri, Core77 webinar)
  - FDM living hinges 0.4 to 0.6 mm thick with at least two layers; SLS 0.3 to 0.8 mm; expect tens of cycles, e.g. about 25 in an FDM test (Hubs)
  - Thinner flexures give better jaw alignment under less force; thick flexures need hard squeezing and leave the jaws misaligned (BYU CMR, Compliant Surgical Grippers)
  - Formlabs Tough 1500 resin: 155% elongation at break and 8,000 Ross flex fatigue cycles, recommended for compliant mechanisms (Formlabs)

### When to use it

- **everyday_examples**: 
  - Tweezers: two levers joined at one fixed end that spring apart until squeezed (Wikipedia, Tweezers); note they trade force for fine control rather than amplifying force
  - Cross-locking (self-closing) tweezers that grip without being squeezed (Wikipedia, Tweezers)
  - Sugar tongs made from a single band of bent metal (Wikipedia, Tongs)
  - Printed one-piece pliers and grabbers shared by BYU and makers (Printables)
- **when_to_use**: Use a compliant gripper when you want a gripping tool, clamp or robot claw that prints in one piece with no pins, springs or assembly; when you need smooth, backlash-free jaw motion; when parts must be cheap, light, washable or scaled down (BYU's surgical grippers keep working when scaled down); or when you need to magnify a tiny actuator movement (piezo, shape-memory wire) or a weak squeeze. It suits small robots and classroom kits where lost screws are a problem (Hackaday, LittleArm v3), pick-up tools, crimp or clamp helpers and fidget-style demonstrators.
- **when_not_to_use**: Avoid it for heavy crimping, cutting or gripping forces (use metal pliers, a toggle or over-centre linkage, or a screw clamp); for large jaw openings or continuous rotation, which flexures cannot give (Wikipedia, Compliant mechanism); for tools stored clamped shut or under constant load, where plastic creeps (use a pinned mechanism with a metal spring); and for high cycle counts in PLA (use PETG, PP or nylon, or a pinned hinge). If you need the jaws to stay perfectly parallel under load, add parallel leaf-spring flexures or use a rigid parallel gripper.
- **environment_limits**: Printed plastic flexures yield early and creep: a flexure left bent for a day may not return to centre (Akaki Kuumeri). Repeated bending causes fatigue cracks at flexure stress concentrations (Wikipedia, Compliant mechanism). PLA softens above its glass transition (about 60 to 65 degrees C; An et al. *(unverified parts omitted)*
- **safety_notes**: A force amplifier multiplies your squeeze, so its jaws can pinch skin hard; keep fingers out of the jaws. Thin printed flexures can snap suddenly, and sharp printed edges can cut hands (one maker redesigned BYU's surgical gripper so it 'could be held without drawing blood'; DeansElectronics, Printables).
- **common_failures**: Flexures crack at their roots from fatigue or from being bent too far: add fillets and end stops (Wikipedia, Compliant mechanism; Akaki Kuumeri). Layers split when flexures bend across layer lines: reorient the print (Akaki Kuumeri; Hubs). The tool takes a permanent set (stays partly closed) after being stored under load: don't store it clamped (Akaki Kuumeri). Jaws don't meet or need too much force because flexures are too thick: thin them (BYU surgical grippers). Narrow gaps fuse during printing: widen the gap or free it with a thin tool (FabianVeile). Weaker grip than expected, because energy goes into bending the flexures (Midha et al. 2015). Objects slip on smooth plastic jaws: add rubber or texture (Hartisch and Haninger 2023).
- **related**: 
  - Pinned pliers and locking pliers (over-centre linkage or toggle clamp): the rigid-link version, stronger and more durable but needs pins and a spring
  - Living hinge: a single thin bending hinge; compliant grippers are built from several of these
  - Flexure hinge (notch, leaf-spring and cross-axis pivots): the individual bending joints used inside compliant grippers; cross-axis flexural pivots can keep clamp jaws parallel
  - Parallel leaf-spring flexure: used where the jaws must move in a straight, parallel path
  - Bistable compliant mechanism: gives grippers that snap open or shut and stay there without being held
  - Fin-ray gripper: a soft finger that wraps around the object, rather than a lever system that multiplies force
  - Over-centre linkage: rigid-link force amplifier whose force rises sharply near the straight (toggle) position

### Pictures, videos and models

- **links**: 
  - [Compliant plier mechanism.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Compliant_plier_mechanism.png): Drawing of BYU's single-piece compliant plier (vice grip) mechanism, used as the lead image of the Wikipedia article Compliant mechanism *(licence: CC BY-SA 4.0 (BYU CMR))*
  - [Compliant Mechanism Collection (M2D2 Lab, Indian Institute of Science)](https://mecheng.iisc.ac.in/m2d2/CMcollection/): Photo gallery of physical compliant grippers, crimpers and displacement-amplifying mechanisms, with short notes on mechanical advantage *(licence: link only (no licence stated))*
  - [Design of a Compliant Mechanism Based Four-Stage Amplification Piezoelectric-Driven Asymmetric Microgripper (Chen et al., Micromachines 2019)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7020048/): Diagrams of bridge and lever amplifier stages and a photo of a one-piece aluminium microgripper *(licence: CC BY 4.0)*
  - [Simple 3D Printed Robotic Arm Uses Compliant Mechanism (Hackaday)](https://hackaday.com/2020/02/09/simple-3d-printed-robotic-arm-uses-compliant-mechanism/): Photo of the LittleArm v3, whose gripper and forearm went from 8 parts to one printed compliant part with a zig-zag flexure *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Fully Compliant Pliers (BYU CMR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/525989-fully-compliant-pliers): One-piece compliant pliers; PETG recommended; originally designed to be milled from 1/4 inch polypropylene sheet *(licence: CC BY-NC)*
  - [Compliant Surgical Grippers (BYU CMR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/664175-compliant-surgical-grippers): Printable version of BYU's inverted L-arm surgical gripper, printed in PLA with no supports; small smooth-jaw or large toothed versions *(licence: CC BY-NC)*
  - [Thin Grippers / Tweezers (Compliant Mechanism) (FabianVeile, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/103548-thin-grippers-tweezers-compliant-mechanism): One-piece thumb-operated grabber for reaching small objects, with a built-in stop; prints in about an hour *(licence: CC BY-NC-SA)*
  - [Compliant pliers (Codeman3000, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/473734-compliant-pliers): Remix of BYU's pliers that snaps shut like a vice grip, in three sizes *(licence: CC BY)*
  - [Compliant parallel Clamp (Jack, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/499739-compliant-parallel-clamp): Clamp that keeps its jaws parallel using cross-axis flexural pivots *(licence: CC0 (Public Domain))*
  - [Keychain / fully working compliant Robot Gripper (bistable) (FabianVeile, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/86228-keychain-fully-working-compliant-robot-gripper-bis): Tiny bistable gripper that snaps open and stays open; PLA, 0.12 mm layers *(licence: CC BY-NC-ND)* *(unverified parts omitted)*
- **diagram_idea**: Side-by-side drawings of ordinary pinned pliers and one-piece compliant pliers, with the pins circled and replaced by thin bending sections, and arrows showing a small hand force over a long handle becoming a large jaw force over a short distance.
- **sources**: 
  - https://en.wikipedia.org/wiki/Compliant_mechanism
  - https://commons.wikimedia.org/wiki/File:Compliant_plier_mechanism.png
  - https://en.wikipedia.org/wiki/Mechanical_advantage
  - https://en.wikipedia.org/wiki/Tweezers
  - https://en.wikipedia.org/wiki/Tongs
  - https://mecheng.iisc.ac.in/m2d2/CMcollection/
  - https://scholarsmine.mst.edu/mec_aereng_facwork/4214/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC7020048/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC8620755/
  - https://s3files.core77.com/images/c77_webinar_series/Akaki-Kuumeri-3D-printed-flexures.pdf
  - https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/
  - https://formlabs.com/blog/updated-tough-resins-family/
  - https://forum.formlabs.com/t/compliant-mechanisms-which-formlabs-resin/30067
  - https://hackaday.com/2020/02/09/simple-3d-printed-robotic-arm-uses-compliant-mechanism/
  - https://morphingmatter.org/s/thermorph.pdf
  - https://arxiv.org/pdf/2301.08431
  - https://www.youtube.com/watch?v=97t7Xj_iBv0
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, input_output, links, load, make_it_yourself, off_the_shelf_parts, power, processes, reuse_cycles

## 53 Fin-ray gripper (fin ray effect finger)

*compliant mechanisms & flexures.* A flexible triangular finger with cross ribs that wraps around an object when pressed, instead of pushing it away; popular for soft robot grippers

### What it is

- **plain_name**: A soft, triangle-shaped robot finger with a ladder of cross ribs inside, which curls around whatever presses on it instead of bending away, so it hugs odd-shaped or delicate things like fruit
- **term**: Fin Ray Effect finger (fin-ray gripper)
- **aliases**: 
  - fin ray gripper, finray gripper or fin-ray finger
  - Fin Ray Effect (registered trademark 'Fin Ray®')
  - finray-effect gripper
  - fish-fin gripper or fish-tail-fin gripper
  - adaptive gripper finger or adaptive finger
  - soft fin ray finger or fin-ray-inspired soft gripper
  - FinGripper (Festo, brand)
  - DHAS adaptive gripper finger (Festo, brand)
  - TPU gripper finger or flexible gripper jaw (maker terms)
- **family**: compliant mechanisms & flexures
- **other_families**: print-in-place & 3D-printing joints, clamping, magnetic & friction connections
- **one_liner**: A flexible, hollow, triangular gripper finger with cross ribs that bends toward a pushing object and wraps around it, giving a gentle, self-adjusting grip with no sensors or joints.
- **complexity**: Single piece: two flexible side walls joined at the tip in a V or A shape, several cross ribs (crossbeams) between them, and a stiffer base with mounting holes. A gripper uses two or three fingers on a servo, motor-and-tendon, pneumatic or parallel-jaw drive; some add a rigid 'fingernail' tip or rubber grip pads.
- **how_it_works**: The idea copies a fish's tail fin: its two bony rays form a V with tissue between them, and pulling or pushing on one side makes the whole fin bend (Crooks et al. 2016). A fin-ray finger has two flexible walls meeting at the tip, joined by cross ribs; when an object presses on the inner wall, the ribs pass the push across to the outer wall, and the base and tip of the finger swing toward the object, so the finger wraps around it instead of bending away like a plain flexible strip would (Crooks et al. 2016; Festo's Johannes Stoll, quoted in Make). This spreads the grip over a large contact area, so the finger conforms to round, soft or irregular objects without sensors (Crooks et al. 2016). Tilting the ribs gives the finger a preferred bending direction, which needs less force and gave about 40% more holding strength in one study (Crooks et al. 2016).

### Finder attributes

- **job**: 
  - join and hold: grips and holds objects, especially delicate or odd-shaped ones
  - let it move (turn, slide or bend): the whole finger bends and curls, with no joints
  - line parts up exactly: fingers with notches can self-align a part as they close, e.g. compensating up to about 7.5 mm of misalignment in plug insertion (Hartisch and Haninger 2023)
- **motion**: flex: the finger curls toward and around the contact point; when a 60 mm ball was pushed 20 mm into a simulated 100 mm TPU 95A finger, the finger deformed about 20 mm around it while its tip shifted only about 1.4 mm sideways (Adeli and Sayyaadi 2026)
- **degrees_of_freedom**: One intended motion (curling in the gripping plane), but as a continuous flexible body it can also twist and bend sideways; designers stiffen the outer wall and add side supports to limit this (Crooks et al. 2016)
- **special_behaviour**: 
  - self-aligning or self-centring: the finger passively adapts to the object's shape and position; notched fin-ray fingers corrected up to about 7.5 mm of misalignment when inserting plugs at high speed (Hartisch and Haninger 2023)
- **holding_principle**: 
  - friction or clamping (force-fit): the gripper's actuator squeezes the fingers against the object and friction holds it
  - shape (the parts interlock; form-fit): the fingers wrap partly around the object, and notched fingertips can lock a part in place (Hartisch and Haninger 2023)
- **input_output**: not applicable as a transmission: the finger is passive. A servo, motor-and-tendon, pneumatic bellows or parallel-jaw gripper closes the fingers, and the fingers turn contact pressure into a wrapping motion (Crooks et al. 2016)
- **removability**: tool-free quick release: the gripper lets go as soon as it opens; the fingers are usually bolted to the gripper (removable with a screwdriver)
- **reuse_cycles**: many times: soft TPU fingers flex repeatedly, but stiff PLA versions broke after a bit of use (juh, Printables), and PLA+ or PETG fingers can deform permanently where ribs meet the wall if overloaded (Hartisch and Haninger 2023)
- **tools_needed**: screwdriver or hex key to bolt fingers to the gripper; none to operate
- **seal**: none
- **load**: light: gentle grip for delicate objects; a tendon-driven research gripper held about 560 g, and fingers began to pull away from their holders at about 300 g of sideways load (Crooks et al. 2016). Weak against twisting (it twisted when trying to open a door) and sideways loads (Crooks et al. 2016)
- **adjustable**: no, after printing: stiffness is set by rib angle, spacing and thickness, wall thickness and material; makers change these (or the slicer infill settings for ribs) and reprint (Hartisch and Haninger 2023; Adeli and Sayyaadi 2026)
- **play_and_precision**: Play: no backlash in the finger itself, but it is deliberately soft, so the held object's position is not precise. Misalignment tolerance: high; fin-ray fingers absorbed up to about 7.5 mm of offset in plug insertion (Hartisch and Haninger 2023). A force along the finger rotates the fingertip, which can make a small part lose contact (Hartisch and Haninger 2023)
- **access_needed**: not applicable
- **materials**: TPU (Shore 95A is common, e.g. Cartman's gripper and the vekkax open-source gripper) or NinjaFlex for soft fingers; PETG or PLA+ for stiffer fingers (Hartisch and Haninger 2023; juh prints a print-in-place version in plain PETG, and PLA versions broke); multi-material resin (TangoPlus soft with VeroClear rigid parts on an Objet500) in research (Crooks et al. 2016); cast silicone (Dragon Skin 30) for early prototypes (Crooks et al. 2016); laser-sintered polyamide for Festo's commercial grippers (Crooks et al. 2016); card or paper for demonstration models (Make, Festo Fin Gripper)
- **maker_difficulty**: easy: the finger prints in one piece with no assembly; TPU needs slow printing and a direct-drive extruder is strongly recommended (vekkax, GitHub), and fingers need rubber or texture on the gripping face

### Making it

- **processes**: 
  - 3D print (FDM): TPU, PETG or PLA+ fingers, often with the ribs made from slicer infill lines
  - 3D print (resin): multi-material PolyJet (soft and rigid resins together) in research grippers
  - 3D print (SLS): laser-sintered polyamide for Festo's commercial fingers
  - casting silicone in printed moulds for soft prototypes
  - paper or card models for teaching (Festo template)
  - off-the-shelf part: ready-made adaptive gripper fingers from automation suppliers (e.g. Festo DHAS)
- **print_in_place**: yes: a fin-ray finger prints as one piece; juh's gripper even prints the whole two-finger mechanism in place in PETG with flexure joints (Printables); mounting to a servo or gripper needs screws
- **making_tips_3d_printing**: Print the finger lying flat so the ribs and walls are drawn in the plane of bending. A neat slicer trick replaces modelled ribs: model a solid finger, then in the slicer use 'lines' infill with 'connect infill lines' off, one wall about one nozzle width (0.4 mm) thick, and no top or bottom layers, so the infill lines become the ribs; use a modifier or support-blocker region to give the mounting base normal walls and solid top and bottom layers (Hartisch and Haninger 2023, GitHub README). Rib density and angle then become slicer settings: 10 to 30% infill at 0 to 40 degrees was tested; 10% PETG was too floppy to hold a part, 30% was stiff enough to damage delicate parts, and 40 degree ribs failed by buckling and permanent deformation (Hartisch and Haninger 2023). For TPU: 0.2 mm layers, about 220 degrees C nozzle, 20 mm/s, cooling and retraction off, direct-drive extruder (vekkax Fin-ray Soft Gripper). Use many walls (about 10) around screw holes in TPU so the mounts don't flex (SPIDERMONK, Printables). PETG is more forgiving than PLA+ (less permanent deformation; Hartisch and Haninger 2023) and PLA versions broke quickly (juh). Calibrate to avoid over-extrusion, stringing and elephant's foot, which stiffen print-in-place joints (juh). Add grip: rubber bands glued on, vulcanising fluid, spray-on rubber or foam, because smooth PLA or PETG is too slippery (SPIDERMONK; juh; Source Robotics; Hartisch and Haninger 2023). Avoid tiny hard-soft interfaces in dual-material prints; PLA-to-NinjaFlex joints broke, so the fingers were made entirely soft (Crooks et al. 2016). Don't wash PETG fingers in hot water, which deforms them (Bas, Printables).
- **off_the_shelf_parts**: Ready-made fin-ray fingers are sold as 'adaptive gripper fingers' for pneumatic or electric parallel grippers, e.g. For DIY grippers: hobby servos (e.g. SG90 or HK15138), parallel-jaw gripper modules, and mounting hardware. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Angle the cross ribs (not at right angles to the base) to give a preferred bending direction; this needed less force, bent about 15% further and held about 40% more (560 g versus 390 g) than the symmetric design (Crooks et al., Frontiers in Robotics and AI 2016)
  - Make the outer (back) wall thicker than the gripping wall: 1 mm front wall with 2 mm back and bottom walls in TPU 95A (Adeli and Sayyaadi 2026)
  - A simulated optimum for a 100 mm TPU 95A finger gripping a 60 mm ball: 30 mm width, 10 mm rib spacing, seven ribs tilted at about 15 degrees (-15 degrees as the paper defines it) and 1 mm rib thickness (Adeli and Sayyaadi, arXiv 2026)
  - Best beam thickness and spacing depend on the object: 0.5 to 1.0 mm beams with 10 to 11 mm spacing for TPU 95A fingers across three test objects (Deng and Li, Frontiers in Robotics and AI 2021)
  - Slicer-made ribs in PLA+ or PETG: 10 to 30% line infill and 0 to 30 degree rib direction worked; 40 degrees failed; PETG tolerated up to about 7.5 mm of misalignment (Hartisch and Haninger 2023)
  - The standard V-shaped finger moves most in the middle and has a stiff tip; if you must grip at the fingertip, use a squarer tip or a notch (Hartisch and Haninger 2023)

### When to use it

- **everyday_examples**: 
  - A fish's tail fin, which bends toward a finger pushed against it (Crooks et al. 2016; Make)
  - Fruit- and vegetable-picking robot grippers, e.g. designs for handling tomatoes (Adeli and Sayyaadi 2026)
  - Student robot competition grippers (an FTC team's TPU fin-ray gripper, SPIDERMONK, Printables) *(unverified parts omitted)*
- **when_to_use**: Use fin-ray fingers when a robot or tool must pick up things of different shapes and sizes, or soft and fragile things (fruit, eggs, bottles, cans, packaging) without precise positioning or force sensors; when you want a cheap, printable, one-piece finger for a servo or parallel gripper; or when a gripper must tolerate misalignment, such as pushing plugs or parts into place (Crooks et al. 2016; Hackaday egg gripper; Hartisch and Haninger 2023).
- **when_not_to_use**: Avoid it for heavy loads, high gripping forces or strong twisting (use rigid jaws or a vacuum cup); for tiny or very thin items such as needles or paper, and for tasks like stacking that need precise placement, because the fingers deform (Source Robotics); and for gripping at the very fingertip with a plain V-shaped finger (use a notched or flat-tipped finger or rigid tweezers; Hartisch and Haninger 2023). For grip that multiplies force, use a lever-based compliant gripper or pliers instead.
- **environment_limits**: Hot water deforms PETG fingers, so don't clean them in it (Bas, Printables); PLA softens above about 60 to 65 degrees C (An et al. 2018). Printed fingers lose shape if overloaded, with permanent deformation where ribs meet the walls (Hartisch and Haninger 2023). *(unverified parts omitted)*
- **safety_notes**: Generally one of the safest grippers because the fingers are soft and limit crushing force; still keep fingers clear of the gripper's drive (servo linkages or tendons can pinch). Vulcanising fluid used as a grip coating gives off fumes; don't inhale them (juh, Printables).
- **common_failures**: Objects slip because printed plastic is smooth: add rubber, foam or texture (Hartisch and Haninger 2023; SPIDERMONK). Finger too floppy (too few, thin or low-density ribs) or too stiff and crushes parts (too many ribs or high infill): tune rib density and angle (Hartisch and Haninger 2023). Ribs buckle or tear from the walls when overloaded or with steep rib angles (Hartisch and Haninger 2023). Finger twists or bends sideways under side loads: thicken or stiffen the outer wall and add side supports (Crooks et al. 2016). Mounting holes flex or tear in TPU: use many walls there (SPIDERMONK). Brittle PLA fingers crack: use TPU or PETG (juh). Hard-soft material interfaces break in dual-material prints (Crooks et al. 2016).
- **related**: 
  - Compliant gripper and force amplifier: one-piece lever-based grippers that multiply force, rather than soft fingers that wrap
  - Soft pneumatic gripper fingers: silicone fingers bent by air pressure, softer but need a pump
  - Underactuated linkage fingers: rigid jointed fingers driven by one tendon that also wrap around objects
  - Vacuum suction cup: holds flat, smooth objects instead of wrapping them
  - Jamming gripper: a bag of grains that moulds around an object and then locks rigid when air is sucked out
  - Parallel leaf-spring flexure: gives straight, parallel jaw motion with no wrapping
  - Living hinge and flexure hinge: the thin bending joints that make up the rib-to-wall connections

### Pictures, videos and models

- **links**: 
  - [Fin Ray Effect Inspired Soft Robotic Gripper: From the RoboSoft Grand Challenge toward Optimization (Crooks et al., Frontiers in Robotics and AI 2016)](https://www.frontiersin.org/articles/10.3389/frobt.2016.00070/full): Diagrams of the traditional fin-ray finger bending under a point load, the modified angled-rib finger, simulation results and photos of printed grippers *(licence: CC BY 4.0)*
  - [Compliant Finray gripper for high-speed robotic electrical plug assembly (Kevin Haninger, YouTube)](https://www.youtube.com/watch?v=J7EGXtE54oY): Video of printed fin-ray fingers gripping and inserting electrical plugs (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Adaptive gripper based on FESTO FinGripper fingers (malte ahlers, YouTube)](https://www.youtube.com/watch?v=90cXfaFM4O8): Video of a DIY motor-driven gripper using fin-ray fingers picking up different objects (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Compliant Robot Gripper Won't Scramble Your Eggs (Hackaday)](https://hackaday.com/2013/12/03/compliant-robot-gripper-wont-scramble-your-eggs/): Article, photos and linked video of a three-finger printed fin-ray-style gripper holding an egg *(licence: link only)*
  - [Festo Fin Gripper (Make:)](https://makezine.com/projects/festo-fin-gripper/): Printable card template and step photos for a paper fin-ray finger that bends toward a push *(licence: link only (no licence shown))*
- **make_it_yourself**: 
  - [Print-in-place flexure fin ray gripper (juh, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1134880-print-in-place-flexure-fin-ray-gripper): Fully printed, no-assembly fin-ray gripper in plain PETG (no TPU needed), servo-driven, fischertechnik-compatible *(licence: CC BY-NC-SA)*
  - [Fingergripper - Fin Ray Effect (Cartman, Printables) (URL seen in search results; read via Printables API)](https://www.printables.com/model/382440-fingergripper-fin-ray-effect): Small hand-held two-finger fin-ray gripper printed in TPU 95A, with STEP file for modification *(licence: CC BY-NC-SA)*
  - [Fin Ray Adaptive gripper for Gobilda pattern (SPIDERMONK, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/621918-fin-ray-adaptive-gripper-for-gobilda-pattern): TPU fin-ray gripper used by an FTC robotics team; print with at least 10 walls *(licence: CC BY)*
  - [compliantfinray (Richard Hartisch, GitHub README)](https://raw.githubusercontent.com/richardhartisch/compliantfinray/main/README.md): CAD and STL files for printed fin-ray fingers, plus the Cura slicing method that turns infill lines into ribs *(licence: BSD 3-Clause)* *(unverified parts omitted)*
- **diagram_idea**: Two side views of a pushing finger: a plain flexible strip bending away from the push, next to a triangular fin-ray finger with cross ribs whose tip curls toward and around a round object, with arrows showing the ribs passing the push to the back wall.
- **sources**: 
  - https://www.frontiersin.org/articles/10.3389/frobt.2016.00070/full
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2016.00070/pdf
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2020.590076/full
  - https://arxiv.org/pdf/2606.03798
  - https://arxiv.org/abs/2301.08431
  - https://arxiv.org/pdf/2301.08431
  - https://raw.githubusercontent.com/richardhartisch/compliantfinray/main/README.md
  - https://github.com/vekkax/Fin-ray-Soft-Gripper/blob/main/README.md
  - https://www.opensourceforu.com/2026/09/open-source-fin-ray-gripper-enables-multi-robot-manipulation/
  - https://source-robotics.com/blogs/blog/soft-robotic-grippers-fin-ray-effect
  - https://makezine.com/projects/festo-fin-gripper/
  - https://makezine.com/2011/09/09/adaptive-gripping-mechanism/
  - https://hackaday.com/2013/12/03/compliant-robot-gripper-wont-scramble-your-eggs/
  - https://en.wikipedia.org/wiki/Compliant_mechanism
  - https://morphingmatter.org/s/thermorph.pdf
  - https://www.youtube.com/watch?v=J7EGXtE54oY
  - https://www.youtube.com/watch?v=90cXfaFM4O8
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, everyday_examples, make_it_yourself, off_the_shelf_parts, power

## 174 Lamina emergent torsional joint (LET joint)

*compliant mechanisms & flexures.* A pattern of cuts in flat sheet that lets part of it twist out of the plane like a hinge, for laser-cut or printed flat mechanisms

### What it is

- **plain_name**: A pattern of long slots cut into a flat sheet so that thin strips between them can twist, letting one part of the sheet fold up out of the flat like a hinge, even in stiff stuff like plywood, acrylic or steel
- **term**: Lamina emergent torsional joint (LET joint)
- **aliases**: 
  - LET joint, lamina emergent torsion joint (Jacobsen, Chen, Howell and Magleby 2009; US patent 9,157,497)
  - outside LET joint (torsion bars on the outside, two connecting pieces at the ends) and inside LET joint (torsion bars on the inside, one connecting piece across the middle) (US 9,157,497)
  - half LET joint (only two torsion bars, working side by side; US 9,157,497)
  - M-LET, membrane-enhanced LET joint (a thin film added to stop unwanted stretching and twisting; Chen, Magleby and Howell 2018)
  - triple-LET and outside-deployed LET joints (variants for a larger folding range; named in the M-LET paper)
  - curved LET joint (cut into the wall of a tube; Seymour et al. 2021)
  - LET array, lamina emergent array (LEA): many LET joints side by side so a whole sheet can fold or curve (BYU CMR Printables models; Nelson et al. 2016)
  - surrogate fold (origami-engineering term for a compliant hinge standing in for a crease; M-LET paper)
  - a building block of lamina emergent mechanisms (LEMs, 'pop-up mechanisms'): compliant mechanisms made from flat sheet whose motion emerges out of the plane (Wikipedia 'Lamina emergent mechanism')
  - torsional hinge (MEMS term; BYU Technology Transfer)
  - related but not identical: lattice hinge, laser-cut living hinge, flex pattern (arrays of small twisting links; Deferred Procrastination)
- **family**: compliant mechanisms & flexures
- **other_families**: hinges & pivots, print-in-place & 3D-printing joints
- **one_liner**: A hinge made only by cutting slots in a flat sheet: the strips left between the slots twist like tiny torsion springs, so one side of the sheet can rotate up out of the plane while the whole thing stays one piece and springs back toward flat.
- **complexity**: Single piece: a cut pattern in one sheet made of long, thin torsion bars (the strips that twist), short connecting pieces that join the bars and bend a little, and the two panels (links) being hinged. An outside LET joint has four torsion bars and two connecting pieces; an inside LET joint has its torsion bars inside and one connecting piece across the middle (US 9,157,497; Chen, Magleby and Howell 2018).
- **how_it_works**: When one panel is turned out of the plane, each long torsion bar twists along its length like a wrung cloth, and the short connecting pieces bend a little; all these springy parts together act like one hinge with a built-in return spring (US 9,157,497). The bars are arranged in pairs side by side (springs in parallel) and one after another (springs in series), so each bar only twists through part of the total fold: in the basic outside joint each bar turns half the joint angle, which halves the stress for the same stiffness as one bar (US 9,157,497, eq. 4). Because stiff materials can twist much further than they can bend over the same thickness, the joint gives 'much greater deflections than simple single-beam compliant flexures of similar thickness' (Seymour et al. 2021) and turns wood, acrylic or steel sheet into a fold (BYU CMR). The cost is that it is fairly floppy in other directions: pushing, pulling or twisting it in the plane of the sheet bends the torsion bars and causes unwanted (parasitic) motion (Chen, Magleby and Howell 2018).

### Finder attributes

- **job**: let it move (turn, slide or bend): a hinge made from the sheet itself, store energy: the twisted bars act as a return spring that pulls the panel back toward flat (US 9,157,497)
- **motion**: flex: bends out of the plane of the sheet like a hinge, through large angles; a spring-steel example was modelled to 20° and a curved aluminium one simulated to 35° (US 9,157,497; Seymour et al. 2021), and plywood and printed demonstrators fold to form chairs and boxes (Wasatch Design Collective; *(unverified parts omitted)*
- **degrees_of_freedom**: 1 intended: 'A LET joint primarily provides one rotational degree-of-freedom through the torsional deflections of the torsional segments' (Chen, Magleby and Howell 2018); in practice it also allows some unwanted stretching, squashing and in-plane twisting (parasitic motion), and its centre of rotation moves as it bends (Seymour et al. 2021)
- **special_behaviour**: 
  - none of the listed behaviours in the basic joint: it simply bends like a hinge and springs back toward flat (US 9,157,497)
  - one-way (moves freely one way, locks the other): membrane-enhanced LET joints can be made as 'one-way joints that can ensure origami-based mechanisms emerge from their flat state ... into the desired configuration' (Chen, Magleby and Howell 2018)
- **holding_principle**: not a holding joint (it moves or passes on motion): it is a hinge; the sheet is one piece, so nothing needs holding together
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: the joint is part of the sheet and cannot be taken apart
- **tools_needed**: To use: none. *(unverified parts omitted)*
- **seal**: none: the slots go right through the sheet, so it leaks air, water and light
- **load**: light: it is designed to rotate easily, not to carry force. It is weakest against pushing or pulling along the sheet across the joint and against in-plane twisting, which bend the torsion bars; 'they are not suitable for high precision applications if these types of loads are applied' (Chen, Magleby and Howell 2018). Example: a 0.81 mm spring-steel outside LET joint needs about 0.60 N·m to turn it 20° (US 9,157,497). *(unverified parts omitted)*
- **adjustable**: no: stiffness and range are fixed by the cut pattern and the sheet thickness; change them by recutting with longer, thinner or more torsion bars
- **play_and_precision**: No play or backlash (nothing slides; it is one piece) and it returns to flat repeatably, but its centre of rotation shifts as it bends (Seymour et al. 2021) and it moves sideways, stretches or squashes under loads other than a pure turning moment (Chen, Magleby and Howell 2018). Adding a thin membrane 'increases the stiffnesses of the translation along the y-axis and the rotation around the z-axis by more than 5000 times, while only increasing the rotation stiffness around the x-axis about one time' (Chen, Magleby and Howell 2018).
- **access_needed**: not applicable
- **materials**: Any sheet that can take some twisting: spring steel (AISI 1095), polypropylene and polycrystalline silicon (MEMS) in the original work (US 9,157,497; Jacobsen et al. 2009 abstract); aluminium alloy 7075 and Nitinol in tube-wall versions (Seymour et al. 2021); Baltic birch plywood for a full-size chair (Wasatch Design Collective); wood or acrylic sheet (BYU CMR Printables 'LET Array'); printed PETG (Seymour et al. 2021) and other printed plastics (BYU CMR models); polypropylene with a metallic-glass membrane for M-LET joints (Chen, Magleby and Howell 2018). Brittle acrylic is possible but cracks easily (Deferred Procrastination); for laser-cut flexing patterns makers more often use wood, because it allows 'a significant degree of flex before the material fractures' (Ponoko).
- **maker_difficulty**: moderate: cutting or printing the pattern is easy, but getting a joint that bends far enough without cracking takes a few test pieces, because stiffness and stress depend strongly on the bar thickness, width and length and on the material

### Making it

- **processes**: 
  - laser cut: acrylic, plywood, polypropylene or thin sheet (BYU CMR 'LET Array'; Deferred Procrastination for the related lattice hinge)
  - 3D print (FDM): printed flat in one piece (BYU CMR Printables models; Seymour et al. 2021 printed PETG test joints)
  - micro-fabrication (MEMS): polysilicon joints (US 9,157,497) *(unverified parts omitted)*
- **print_in_place**: yes: the joint is just a pattern in a flat printed sheet, so it works straight off the bed with no assembly (BYU CMR 'Mini LET Joint Box' is 'all printed in one piece'); some folded models add a drop of glue to hold their final shape (BYU CMR 'Mini Flex Chair')
- **making_tips_3d_printing**: 1) Print the sheet flat on the bed; it needs no supports and prints fast (BYU's Mini Flex Chair takes 'about an hour to print'). 3) Stiffness rises with thickness cubed and falls with bar length (k = K·G/L with K roughly w·t³/3; US 9,157,497), so the quickest way to make a joint softer and less stressed is a slightly thinner sheet or longer bars; widening the bar mostly adds stiffness. 4) Research prints used PETG at 100% infill on a Prusa i3 MK2 and measured a bending modulus of about 1.4 GPa, lower than typical datasheet values for moulded plastic, so measure or test your own material (Seymour et al. 2021). 7) To fold further, spread the motion over more bars or several joints side by side, as in BYU's LET arrays and in lattice hinges, where more links in series each twist less (Deferred Procrastination). *(unverified parts omitted)*
- **off_the_shelf_parts**: None: it is a cut pattern, not a bought part. Related bought items: laser-cutting sheet stock (plywood, acrylic, polypropylene, spring-steel shim), and for membrane-enhanced joints a thin, strong film or tape bonded across the joint (the M-LET paper used metallic glass; the related lattice-hinge write-up suggests gluing 'a thinner material across the inside of the hinge to prevent expansion'; *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Joint stiffness: torque T = k_eq × angle (in radians). For a symmetric outside LET joint, k_eq = 2·kT·kB / (kT + 2·kB), where kT is one torsion bar's stiffness and kB one connecting piece's bending stiffness; if the connecting pieces are much stiffer, k_eq = kT, and each bar twists only half the joint angle, 'also reducing the stress by half' (US 9,157,497, eqs. 1-4).
  - Inside LET joint: 1/k_eq = 1/(k1k5/(k1+k5) + k2k6/(k2+k6)) + 1/k9 + 1/(k3k7/(k3+k7) + k4k8/(k4+k8)); with rigid connecting pieces and equal bars it also reduces to k_eq = kT (US 9,157,497, eqs. 5-7; Seymour et al. 2021, eq. 1).
  - One torsion bar: kT = K·G / L, with G the shear modulus, L the bar length and K = w·t³·[1/3 − 0.21·(t/w)·(1 − t⁴/(12·w⁴))]; valid only when the bar's width w is larger than the sheet thickness t (Roark and Young formula, quoted in US 9,157,497, eqs. 8 and 10). Connecting pieces: kB = E·I/L_B with I = w·t³/12 (eq. 13).
  - Maximum twisting (shear) stress in a bar: τmax = T_bar / Q with Q = w²·t² / (3w + 1.8t); it occurs on the surface at the middle of the wide face (US 9,157,497, eqs. 14-15). Keep it below the material's shear yield stress.
  - Worked example: an AISI 1095 spring-steel outside LET joint 0.81 mm thick, with torsion bars 27.7 mm long and 4.9 mm wide and connecting pieces 12.8 mm long and 5.0 mm wide, gives kT = 2.26 N·m/rad, kB = 3.56 N·m/rad and k_eq = 1.72 N·m/rad: 0.60 N·m at 20°, with 303 MPa shear stress in the bars and 547 MPa bending stress in the connecting pieces; tests 'correlated well' with the model (US 9,157,497, Table 1).
  - The planar equations still work for LET joints cut into thin-walled tubes over a limited range of wall-thickness-to-radius ratio (Seymour et al. 2021).
  - Related lattice (laser-cut living) hinges with square links: τmax ≈ 0.676·Θ·G·t / (n·l), so the minimum number of links in series is n = 0.676·Θ·G·t / (τyield·l); for a 90° bend in 3 mm acrylic this gives 22 links of 5 mm, 11 of 10 mm, 6 of 20 mm or 4 of 30 mm - but in tests only the 22-link acrylic sample reached 90°, so the author suggests designing to about 60% of torsional yield for repeated bending (Deferred Procrastination, 'Laser-cut Lattice Living Hinges').

### When to use it

- **everyday_examples**: 
  - The BYU / Wasatch Design Collective 'Flex Chair' folded from a single sheet of Baltic birch plywood (Wasatch Design Collective; BYU CMR 'Mini Flex Chair' model)
  - Laser-cut plywood or acrylic boxes and notebook covers with a flexible 'lattice hinge' panel, a close relative that also works by twisting small links (Deferred Procrastination)
  - Printable fold-up ornaments, boxes and kaleidocycles from BYU's compliant mechanisms lab (BYU CMR Maker Resources)
  - Tiny torsional hinges in MEMS chips, one of the target uses named by BYU (BYU Technology Transfer)
- **when_to_use**: Use a LET joint when you want a hinge in a flat part made from one sheet, with no pins, no assembly and no rubbing, and need it to turn through a large angle in a material that won't bend much on its own, such as plywood, acrylic, sheet metal or a printed plate (BYU Technology Transfer; US 9,157,497). It suits flat-pack and fold-up furniture, pop-up and origami-inspired mechanisms, deployable structures, toys and demonstrators, and small or micro devices where pin hinges are impractical. It is a good choice when off-axis stiffness is 'not as critical' (Jacobsen et al. 2009 abstract); with an added membrane it can also locate more accurately, and an outside LET joint has been used for high-precision positioning in National Ignition Facility target shrouds (Chen, Magleby and Howell 2018).
- **when_not_to_use**: Avoid it where the hinge must carry large pushes, pulls or sideways loads, or must keep an exact pivot line (use a pin hinge, a flexure pivot such as a cross-axis pivot, or a membrane-enhanced LET), where it must hold a folded position without springing back (add a latch, detent or glue), where it must seal, or in a thin, flexible sheet that can simply bend (a plain living hinge or thin-web flexure is simpler). For a gentle curve rather than a sharp fold, a kerf-bending or lattice pattern spreads the bend better. If you plan to sell products using BYU's LET designs, check the patents first: US 9,157,497 covers the LET joint, and BYU's Printables files for its LET arrays are licensed for non-commercial use and state the design is protected under US patents 11852210 and 11549563.
- **environment_limits**: The joint only springs back fully while the twisting stress stays below the material's yield point; beyond it the joint takes a permanent set and fatigues quickly (Deferred Procrastination). Metal and Nitinol joints are the most durable (Seymour et al. 2021; US 9,157,497). *(unverified parts omitted)*
- **safety_notes**: A folded LET structure stores spring energy and snaps back toward flat when released (US 9,157,497), so keep fingers and faces clear when folding large or steel ones. Brittle sheets such as acrylic can snap during bending (Deferred Procrastination) and leave sharp edges; laser-cut or stamped steel edges are sharp. Otherwise none known.
- **common_failures**: Torsion bars crack or snap because they are too short, too thick or too few for the fold angle, or the material is brittle (Deferred Procrastination: acrylic test hinges broke before 90° except the one with the most links); fix by using longer or thinner bars, more bars in series, or a tougher material. The joint stretches, squashes or twists sideways under loads other than a pure turning moment (parasitic motion; Chen, Magleby and Howell 2018); fix with a membrane, better load paths or bracing. The hinge line wanders because the centre of rotation shifts as it bends (Seymour et al. 2021). Real stiffness differs from the model because printed or laser-cut material properties differ from datasheets and the laser kerf is ignored (Seymour et al. 2021; Deferred Procrastination). *(unverified parts omitted)*
- **related**: 
  - Living hinge: a thin web that bends instead of twisting; simpler, but needs a flexible material such as polypropylene, and 3D-printed living hinges are mostly for prototypes (Hubs: SLS ones 'typically last around 30-50 cycles')
  - Kerf bending (laser-cut living hinge): arrays of cuts that let a whole panel curve; lattice versions also work by twisting small links
  - Flexure hinge (notch, leaf-spring and cross-axis pivots): bending flexures that keep a better-defined pivot but usually move through smaller angles
  - Origami mechanisms (waterbomb, Kresling, thick-panel origami): LET joints are often used as the fold lines (surrogate folds) in these
  - Tape-spring hinge (measuring-tape fold): folds and snaps straight again, locking in the deployed position
  - Rolling-contact joint (CORE, Jacob's-ladder hinge): large, low-friction rotation with a steadier pivot, but made of several parts
  - Mechanical metamaterial mechanism (shear-cell hinge arrays): cell patterns that combine many small hinges
  - Ortho-planar spring: another one-piece flat-sheet part whose motion comes out of the plane, but it moves straight up and down
  - Torsional snap fit: also uses a twisting bar, but as a rocker for a snap hook
  - Print-in-place hinge and Knuckle hinge (butt hinge): pin hinges that rotate freely and carry more load but have clearance and friction

### Pictures, videos and models

- **links**: 
  - [Lamina Emergent Torsional (LET) Joint (BYU Technology Transfer, ID 2009-101)](https://techtransfer.byu.edu/lamina-emergent-torsional-let-joint): Four images of LET joints and devices made with them, plus a plain description of the joint and its advantages *(licence: link only)*
  - [Membrane-Enhanced Lamina Emergent Torsional Joints for Surrogate Folds (Chen, Magleby and Howell, J. Mech. Des. 2018; author manuscript on NSF PAR)](https://par.nsf.gov/servlets/purl/10092156): Drawings of outside and inside LET joints and their intended fold (Figs. 2-3), their unwanted stretching and in-plane twisting (Figs. 4-5), membrane-enhanced versions and a polypropylene prototype *(licence: link only (author manuscript; copyright ASME))*
  - [US 9,157,497 B1: Lamina emergent torsional joint and related methods (Magleby, Jacobsen and Howell; Google Patents)](https://patents.google.com/patent/US9157497B1/en): Patent drawings of outside and inside LET joints, their spring diagrams, a spherical mechanism using nine LET joints, and the full stiffness and stress equations *(licence: link only (US patent document))*
  - [LET Chair (Wasatch Design Collective)](https://www.wasatchdesigncollective.com/let-chair): Photos of a reversible chair folded from a single sheet of Baltic birch plywood using LET joints *(licence: link only)*
  - [Laser-cut Lattice Living Hinges (Deferred Procrastination, 2011)](http://marksabino.com/defproc/blog/2011/laser-cut-lattice-living-hinges/): Diagrams of the related lattice hinge showing junctions and twisting 'spring connections' in tension, compression and bending, with stress calculations *(licence: link only (© Deferred Procrastination))*
- **make_it_yourself**: 
  - [Christmas Ornament - Compliant LET Joints (BYU CMR, Printables; linked from BYU CMR Maker Resources)](https://www.printables.com/model/581030-christmas-ornament-compliant-let-joints): A printable ornament whose LET joints curve around and connect to form a sphere; based on Nelson et al. 2016, 'Developable Lamina Emergent Arrays' *(licence: CC BY (Printables listing; BYU says files are for non-commercial use))*
  - [Compact LET Joint Kaleidocycle 4th of July Firework (BYU CMR, Printables; linked from BYU CMR Maker Resources)](https://www.printables.com/model/1769704-compact-let-joint-kaleidocycle-4th-of-july-firewor): A kaleidocycle-style model with LET joints that rolls inwards or outwards on itself *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
  - [BYU CMR Mini Flex Chair (BYU CMR, Printables)](https://www.printables.com/model/569115-byu-cmr-mini-flex-chair): A scale model of the single-sheet plywood LET chair; prints flat in about an hour and is glued into its folded shape *(licence: CC BY-NC)*
  - [LET (Lamina Emergent Torsion) Array (BYU CMR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1058700-let-lamina-emergent-torsion-array): A printable sheet of LET joints showing how torsion bars give large bending and stretching from a stiff sheet; notes the design is protected by US patents 11852210 and 11549563 *(licence: CC BY-NC (non-commercial use only))*
  - [Mini LET Joint Box (BYU CMR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1207504-mini-let-joint-box): A palm-sized fold-up box printed in one piece using LET joints *(licence: CC BY-NC)*
- **diagram_idea**: A top view of an outside LET joint cut in a flat sheet (two panels joined by four long torsion bars and two short end pieces, with slots shaded), next to a 3D view of the same joint folded to about 60° showing each bar twisted by half the angle, and a small spring diagram (two bars and a bending piece in series on each side, the two sides in parallel).
- **sources**: 
  - https://patents.google.com/patent/US9157497B1/en
  - https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/9157497
  - https://scholarsarchive.byu.edu/facpub/1560
  - https://techtransfer.byu.edu/lamina-emergent-torsional-let-joint
  - https://par.nsf.gov/servlets/purl/10284579
  - https://par.nsf.gov/servlets/purl/10092156
  - https://scholarsarchive.byu.edu/facpub/6497/
  - https://en.wikipedia.org/wiki/Lamina_emergent_mechanism
  - https://compliantmechanisms.byu.edu/maker-resources
  - https://www.wasatchdesigncollective.com/let-chair
  - http://marksabino.com/defproc/blog/2011/laser-cut-lattice-living-hinges/
  - https://www.ponoko.com/blog/how-to-make/how-to-design-a-living-hinge/
  - https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, load, making_tips_3d_printing, motion, off_the_shelf_parts, processes, reuse_cycles, tools_needed

## 175 Rolling-contact joint (CORE, Jacob's-ladder hinge)

*compliant mechanisms & flexures.* Two curved surfaces held together by straps or bands so they roll on each other instead of rubbing, giving a low-friction hinge

### What it is

- **plain_name**: A hinge made of two rounded blocks tied together by crossed straps, so the blocks roll over each other instead of turning on a pin, like the flipping wooden blocks of a Jacob's ladder toy
- **term**: Rolling-contact joint (compliant rolling-contact element, CORE)
- **aliases**: 
  - rolling contact joint (RCJ)
  - compliant rolling-contact element (CORE)
  - compliant rolling-contact joint (CRJ)
  - developable or deployable CORE (D-CORE, the version made from one flat sheet)
  - rolling hinge
  - rolamite hinge (wheels held together by wires or bands; name used by Watt and Pellegrino)
  - Jacob's-ladder hinge or ribbon hinge (the toy's crossed ribbons act as a double hinge)
  - double hinge (each block is hinged to the next at either end)
  - ligament joint or crosswise-ligament rolling joint (robot fingers and prosthetic hands)
  - rolling-contact knee or rolling knee joint (prosthetics and braces)
  - Rubik's Magic mechanism (the puzzle uses the same crossed-strand principle) *(unverified parts omitted)*
- **family**: compliant mechanisms & flexures
- **other_families**: hinges & pivots, springs & energy storage, indexing & detents
- **one_liner**: Two curved blocks held against each other by thin crossed straps, bands or cords, so that they roll over each other without sliding, giving a smooth, low-friction hinge with no pin and no play.
- **complexity**: A few parts: two curved blocks (cams or rolling surfaces) and two or more thin flexible straps, bands, wires, cords or ribbons wrapped crosswise between them, plus the anchors that fix each strap end (clamps, screws, crimps, glue or interference-fit holes). In the CORE, CRJ and D-CORE versions the straps and cam faces are cut or printed as flat layers that are then flexed, stacked and pinned or glued together.
- **how_it_works**: Each strap is fixed to one block, wraps around that block's curved face, crosses the line where the two blocks touch and wraps the other block the opposite way; at least one more strap crosses in the other direction. Because the straps are taut and hardly stretch, the blocks cannot slide apart or skid over each other, so the only motion left is rolling, a bit like two gears without teeth (Nature Communications 2018; PNAS 2026). Rolling means there is no rubbing, so friction and wear are very low and no oil is needed (Watt and Pellegrino 2002, describing Hillberry and Hall's 1976 rolling hinge). Unlike a pin hinge, the pivot point moves along with the line of contact as it rolls (BYU CMR), and in a Jacob's ladder the crossed ribbons let each block act as if hinged to its neighbour at either end (Wikipedia).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): a low-friction hinge with no pin, bearing or lubrication
  - store energy: versions whose straps stretch as the blocks roll act as a built-in return spring, e.g. the BYU CORE Bearing designed for a prosthetic knee
  - click into set positions: research versions with stretched or unequal straps have two or more stable positions (Halverson, Howell and Magleby 2010; PNAS 2026)
  - change speed or turning force: tendon-driven versions with non-circular rolling surfaces and pulleys can vary their leverage along the travel (PNAS 2026)
- **motion**: rotate (by rolling): the range depends on how far the straps wrap; an ideal compliant rolling-contact joint can turn almost 360 degrees (Nature Communications 2018), while robot-finger versions add end stops to limit travel (Laschkewitsch). The pivot point moves as it rolls rather than staying fixed (BYU CMR)
- **degrees_of_freedom**: 1: rolling rotation. The crossed straps stop the blocks from sliding apart or skidding, leaving only rolling. With stretchy ligaments some designs deliberately allow a little sideways and twisting give (PNAS 2026)
- **special_behaviour**: 
  - fail-safe or breakaway (gives way instead of breaking): in 3D-printed robot hands an overloaded rolling-contact joint can dislocate (pop apart) instead of breaking (ORCA hand paper, 2025)
  - indexing (clicks into set positions): multi-stable versions with specially stretched or shaped straps rest in two or more positions (Halverson et al. 2010; PNAS 2026)
  - none in the basic free-rolling hinge: its main benefits are very low friction and no backlash rather than a special action
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it is a hinge; the tension in the crossed straps presses the two curved faces together and keeps them rolling without slipping (Watt and Pellegrino 2002; BYU CMR)
- **input_output**: not applicable for a plain hinge. In tendon-driven robot fingers a pull on a tendon turns the joint, and optimised non-circular surfaces and pulleys varied the tip speed from near zero to about 4 times the average of a circular joint (PNAS 2026). Back-drivable: yes, it rolls freely both ways
- **power**: passive (no power needed); robot and prosthetic versions are driven by tendons and motors, but the joint itself needs no power
- **removability**: removable: straps held by screws, crimps or knots can be undone and re-tensioned (Watt and Pellegrino 2002); versions whose strap tabs are glued, like the printed D-CORE, are semi-permanent (BYU CMR)
- **tools_needed**: Depends on the build: none for a ribbon toy; pliers to press in pins or axles (Printables 'Roll gelenk' model); a screwdriver and crimping tool for wire or band anchors (Watt and Pellegrino 2002); superglue for the tabs of BYU's printed D-CORE
- **seal**: none
- **load**: light to medium. Strong when the blocks are pushed together (the curved faces bear on each other) and sideways: printed versions are 'surprisingly stable under sideways loads' (Printables 'Roll gelenk' model, translated), BYU's CORE Bearing has 'high resistance to radial loads', and ETH's Faive robot hand with rolling-contact joints held up to 10 kg in a power grasp (Toshimitsu et al. 2023). Weak in pulling the blocks apart, which is resisted only by the straps (Nature Communications 2018)
- **adjustable**: yes in some designs: Watt and Pellegrino's rolling hinge tensions its wires with a screw and lock nut; in printed or glued versions the strap length is fixed by the design
- **play_and_precision**: Play: none when the straps are taut; the curved faces 'roll on each other without play' (Printables 'Roll gelenk', translated) and rolling-contact joints reduce backlash compared with bearings and gears (PNAS 2026). Repeatability: good while the straps stay tight, but cord ligaments can loosen over time (ORCA hand paper). Misalignment: the axis of rotation moves as it rolls, so it is a poor choice where a fixed axis is required (BYU CMR); stretchy ligaments allow some deliberate off-axis give (PNAS 2026)
- **access_needed**: not applicable: the joint is built as a unit with straps anchored on both blocks, then fixed to the parts it connects
- **materials**: Blocks: 3D-printed plastic such as PETG (Printables 'Roll gelenk'), acetal (Delrin) plate (Watt and Pellegrino 2002), laser-cut PTFE (Teflon) sheet (Nature Communications 2018 prototypes) or wood (Jacob's ladder toy). Straps: ribbon or tape (toys), metal bands (Hillberry and Hall's rolling hinge; the Rolamite uses an S-shaped metal strip), 1 mm nylon-coated stainless-steel wire (Watt and Pellegrino 2002), nylon monofilament (Laschkewitsch), Dyneema fishing line (Hackaday 2024), elastic ligaments (PNAS 2026), or thin flexures printed or cut in the same sheet as the cams (BYU D-CORE, CORE Bearing)
- **maker_difficulty**: moderate: the blocks are easy to print or cut, but the straps must be exactly the right length, evenly tensioned and firmly anchored, and thin cord tends to slip at its anchors (Laschkewitsch; Nature Communications 2018)

### Making it

- **processes**: 
  - 3D print (FDM): blocks with grooves and anchor holes for cord ligaments (robot fingers), or thin-strap layers that are stacked and pinned together (Printables 'Roll gelenk')
  - laser cut: cams and straps cut as flat layers from sheet, e.g. Teflon sheet (Nature Communications 2018) or the one-sheet D-CORE (BYU CMR)
  - CNC: traditionally machined rolling surfaces (PNAS 2026 notes 3D printing, moulding and machining)
  - woodwork: Jacob's ladder toys from wooden blocks and ribbon
  - off-the-shelf part: cord, fishing line, wire rope or metal strip for the straps *(unverified parts omitted)*
- **print_in_place**: partly: printed versions usually need assembly, either stacking printed strap-and-cam layers and pressing in axles (Printables 'Roll gelenk'), folding and gluing a flat D-CORE (BYU CMR), or threading cord ligaments (Laschkewitsch). *(unverified parts omitted)*
- **making_tips_3d_printing**: Orient the part so the thin straps lie flat and their layers run along the strap, and keep layer seams off the thin bands: the maker of the PETG 'Roll gelenk' model (0.2 mm layers) warns the bands will not last long if seams sit on them (Printables 1039873, translated). Watch that print orientation does not put layer lines across the cord anchors, which weakened anchoring in Laschkewitsch's printed finger joint; he used interference-fit holes to grip nylon monofilament, found finer line slipped, and needed guide rails and end stops to limit rotation. Let thin printed flexures cool fully before flexing them: BYU warns that the thin compliant segments of its CORE Bearing are very susceptible to stress relaxation, especially while warm, and lose their springiness if worked too soon; a standard 0.4 mm nozzle is enough, and printing from the STEP file avoids faceted curves. For BYU's D-CORE, a drop of superglue on each tab keeps the flexures secure. Keep the rolling faces convex so the straps stay taut and the faces keep contact (PNAS 2026). Tough, springy filaments such as PETG are the usual choice for printed straps; For higher loads use cord ligaments (nylon monofilament, Dyneema) or metal bands rather than printed straps. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Keep straps thin compared with the cam radius: the bending stress in a band wrapped around a radius R is about E x t / (2R) (E = stiffness of the band material, t = band thickness), so stress rises with thickness and falls with radius (Lee and Jung 2012, bending formula); thin straps also cut the joint's stiffness, friction and hysteresis (Nature Communications 2018)
  - Worked example from a tested joint: laser-cut PTFE layers 3.175 mm thick, cam radius 50 mm and strap thickness 0.6 mm, i.e. cam radius about 83 times strap thickness (Nature Communications 2018)
  - An ideal joint has almost no turning resistance and a range of almost 360 degrees only if the straps are exactly the right length (neither slack nor stretched), perfectly straight before assembly, wrapped on perfectly circular cams, and roll without slipping (Nature Communications 2018)
  - Rolling surfaces must be convex so the ligaments stay taut and the faces keep in contact; use gear teeth instead if you need non-convex faces (PNAS 2026)
  - Running the bands on a smaller radius than the rolling surface increases the force pulling the two halves together, and making some band surfaces smaller than others creates a return (restoring) moment (Hillberry and Hall 1976, as summarised by Watt and Pellegrino 2002)
  - Pretension wires enough that the rolling wheels stay in compressive contact at all times; a tested hinge used 1 mm nylon-coated stainless-steel wire on 28.1 mm radius acetal wheels with screw-and-lock-nut tensioning (Watt and Pellegrino 2002)
  - If your design needs a fixed axis of rotation, a CORE is likely impractical, because its axis moves as it rolls (BYU CMR)

### When to use it

- **everyday_examples**: 
  - Jacob's ladder toy: wooden blocks joined by crossed ribbons that appear to cascade down (Wikipedia)
  - Rubik's Magic puzzle: tiles joined by crossed strands that fold in two directions (Wikipedia)
  - Robot fingers and prosthetic knee designs (research and open-source robot hands such as ETH's Faive Hand) *(unverified parts omitted)*
- **when_to_use**: Use a rolling-contact joint when you want a smooth, silent, low-friction hinge with no play and no lubrication, for example robot fingers, prosthetic or exoskeleton knees that should follow a natural moving pivot, animatronic legs, toys and fold-out panels. It suits small, compact joints because the joint is part of the structure itself (Hackaday 2024), it can take large side and radial loads for its size (BYU CMR), and it can be tuned: non-circular faces let you program the path or leverage (PNAS 2026), and stretched straps can add a built-in return spring or several stable positions.
- **when_not_to_use**: Avoid it where you need a fixed pivot axis, such as a shaft carrying a gear or a pointer that must rotate about one point (BYU CMR); use a pin hinge, knuckle hinge or ball bearing instead. Avoid it where the joint will be pulled apart, since only the straps resist that; a clevis or pin joint is stronger in tension. For simple one-piece printed hinges a living hinge, flexure hinge or print-in-place pin hinge is easier to make. Where cords may stretch or loosen and nobody will re-tension them, a pin joint can be more reliable (ORCA hand paper).
- **environment_limits**: Printed plastic straps and flexures relax (lose tension) over time, faster when warm; BYU warns its printed CORE Bearing's thin segments are very susceptible to stress relaxation, especially while warm. Cord ligaments can loosen over time (ORCA hand paper). *(unverified parts omitted)*
- **safety_notes**: Cut metal strip used for bands has very sharp edges (Naked Scientists, on cut tape-measure steel). *(unverified parts omitted)*
- **common_failures**: Straps or cords slipping at their anchors, especially thin monofilament; fix with interference-fit holes, crimps or clamps (Laschkewitsch). Straps loosening over time, giving play or letting the joint dislocate; add a tensioning screw (Watt and Pellegrino 2002; ORCA hand paper). Thin printed bands cracking at layer seams or where they leave the block; move seams away and round the corners (Printables 'Roll gelenk'; Binding when the rolling profile does not match the strap geometry (Laschkewitsch). Printed flexures losing springiness from stress relaxation if flexed while warm (BYU CORE Bearing). Extra friction and hysteresis when straps are too thick for the cam radius or stretched too much (Nature Communications 2018; PNAS 2026). *(unverified parts omitted)*
- **related**: 
  - Knuckle (butt) hinge or pin-in-hole pivot: a fixed axis and simple to make, but it rubs, needs clearance and so has some play
  - Flexure hinge (notch, leaf-spring or cross-axis pivot): bends instead of rolling; one piece, but limited to small angles and its stiffness rises with angle
  - Living hinge: a single thin flexing strip; simplest one-piece fold, but weak and short-lived in most 3D-printing plastics
  - Rolamite: the linear cousin, with two rollers held in a channel by an S-shaped tensioned metal strip, used as a very low-friction bearing (Wikipedia)
  - Tape-spring hinge: a curved strip that folds and snaps straight; Watt and Pellegrino combined tape springs with a wire-wrapped rolling hinge to guide the fold
  - Geared hinge: uses gear teeth instead of crossed straps to stop the two halves slipping (PNAS 2026 mentions teeth as an alternative)
  - Capstan cable drive: also wraps cable around drums without slipping, but to transmit rotation rather than to form a hinge
  - Virtual-pivot linkage (remote centre of motion): another way to get a pivot that is not at a physical pin
  - Mechanical metamaterial mechanism: whole lattices can be built from compliant rolling-contact joints (compliant rolling-contact architected materials, Nature Communications 2018)

### Pictures, videos and models

- **links**: 
  - [Jacob's Ladder 2.jpg (Wikimedia Commons, from Scientific American 1889)](https://commons.wikimedia.org/wiki/File:Jacob%27s_Ladder_2.jpg): Engraving of the mechanism of a Jacob's ladder: three blocks shown transparent and pulled apart with their crossed tapes labelled a and b *(licence: Public domain)*
  - [Jacob's Ladder toy demonstration (Wikimedia Commons video)](https://commons.wikimedia.org/wiki/File:Jacob%27s_Ladder_toy_demonstration.ogv): Video clip of a Jacob's ladder toy in use, blocks flipping over on their ribbon hinges *(licence: CC BY-SA 3.0)*
  - [Compliant rolling-contact architected materials for shape reconfigurability (Nature Communications, 2018)](https://www.nature.com/articles/s41467-018-07073-5): Open-access paper with a figure of a compliant rolling-contact joint built from four half-cylinder layers and straps, lattices of such joints, and supplementary movies of prototypes changing shape *(licence: CC BY 4.0)*
  - [Stealing biology for tiny robots (Breaking Taps, YouTube)](https://www.youtube.com/watch?v=TQiLLcumqDw): Video on designing small robot legs with rolling contact joints restrained by Dyneema line (as described by Hackaday; title and channel confirmed via YouTube oEmbed, video not watched) *(licence: link only)*
  - [Rolamite.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Rolamite.svg): Diagram of a Rolamite: two rollers in a channel held by an S-shaped tensioned band, the linear relative of the rolling-contact joint *(licence: CC BY-SA 3.0)*
- **make_it_yourself**: 
  - [Developable Compliant Rolling-Contact Element (D-CORE) (BYU CMR, Printables)](https://www.printables.com/model/598201-developable-compliant-rolling-contact-element-d-co): Printable developable CORE hinge made flat with two mounts; tabs can be secured with superglue; includes background, applications and references. Read through the Printables public API *(licence: CC BY-NC)*
  - [CORE Bearing (BYU CMR, Printables)](https://www.printables.com/model/1752131-core-bearing): Fidget-spinner-like bearing made of three COREs arranged like planet gears, giving rotation with a built-in return spring; designed for a prosthetic knee; printing advice on stress relaxation. Read through the Printables public API; link listed on BYU's Maker Resources page *(licence: CC BY-NC)*
  - [Roll gelenk / rolling contact joints (Studi_Ha, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1039873-roll-gelenk-rolling-contact-joints): Simplified knee-like rolling-contact joint from stacked PETG layers with thin integral bands and press-in axles; assembly steps explain how the bands wrap the radii; STEP files included (description in German) *(licence: CC BY)*
  - [Maker Resources (BYU Compliant Mechanisms Research)](https://compliantmechanisms.byu.edu/maker-resources): Index of BYU's free printable compliant mechanisms on Thingiverse and Printables, including the D-CORE and CORE Bearing *(licence: per model (BYU models are CC BY-NC))* *(unverified parts omitted)*
- **diagram_idea**: Side view of two round-ended blocks touching at one point with two crossed straps drawn in contrasting colours (one wrapping over the top of the left block and under the right, the other the reverse), shown in three frames as the right block rolls around the left, with a dot marking how the contact point (the moving pivot) travels.
- **sources**: 
  - https://www.nature.com/articles/s41467-018-07073-5
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12890850/fullTextXML
  - http://www.its.caltech.edu/~sslab/PUBLICATIONS/Tape-spring%20rolling%20hinges%202002.pdf
  - https://www.printables.com/model/598201-developable-compliant-rolling-contact-element-d-co
  - https://www.printables.com/model/1752131-core-bearing
  - https://www.printables.com/model/1039873-roll-gelenk-rolling-contact-joints
  - https://www.printables.com/model/510296-jacobs-ladder-toy-print-in-place-model
  - https://api.printables.com/graphql/
  - https://compliantmechanisms.byu.edu/maker-resources
  - https://en.wikipedia.org/wiki/Jacob%27s_ladder_(toy)
  - https://en.wikipedia.org/wiki/Rolamite
  - https://en.wikipedia.org/wiki/Rubik%27s_Magic
  - https://commons.wikimedia.org/wiki/File:Jacob%27s_Ladder_2.jpg
  - https://commons.wikimedia.org/wiki/File:Jacob%27s_Ladder_toy_demonstration.ogv
  - https://commons.wikimedia.org/wiki/File:Rolamite.svg
  - https://hackaday.com/2024/05/17/emulating-biology-for-robots-with-rolling-contact-joints/
  - https://www.youtube.com/watch?v=TQiLLcumqDw
  - https://alaschke.com/projects/rolling-contact-joint/
  - https://arxiv.org/pdf/2504.04259
  - https://arxiv.org/pdf/2308.02453
  - https://www.scirp.org/html/4-1860054_22195.htm
  - https://kapycad.com/en/academy/machines/rolling-contact-joint
  - https://www.thenakedscientists.com/get-naked/experiments/snap-bracelets-tape-measures-bistable-structures

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, everyday_examples, make_it_yourself, making_tips_3d_printing, off_the_shelf_parts, print_in_place, processes, reuse_cycles, safety_notes

## 176 Mechanical metamaterial mechanism (shear-cell hinge arrays)

*compliant mechanisms & flexures.* A block made of a repeating grid of tiny cells that bend in a planned way, so the whole block works like a mechanism

### What it is

- **plain_name**: A single block of 3D-printed grid cells, some stiff and some that can lean over, laid out so that pushing or turning one part makes another part move, like a door handle and latch made from one piece of rubbery plastic
- **term**: Metamaterial mechanism (shear-cell mechanism with hinge arrays)
- **aliases**: 
  - metamaterial mechanism
  - mechanical metamaterial (the wider family of materials whose behaviour comes from their inner cell structure)
  - architected material or cellular material
  - shear cell or shearing cell (the cell type that lets it move)
  - hinge array (a strip of shear cells acting as one hinge)
  - cell-based mechanism or single-block mechanism
  - programmable mechanical metamaterial
  - digital mechanical metamaterial (versions with bistable spring cells that pass a mechanical signal, e.g. a combination lock)
  - metamaterial door latch (the best-known example)
  - compliant rolling-contact architected material (CRAM, a lattice made of rolling-contact joints)
- **family**: compliant mechanisms & flexures
- **other_families**: print-in-place & 3D-printing joints, motion conversion, springs & energy storage, locks, latches & catches
- **one_liner**: A one-piece block made of a regular grid of tiny cells, where rigid cells act as levers and cells that can shear act as hinges and springs, so the whole block works as a mechanism such as a latch, pliers or linkage with no assembly.
- **complexity**: Single piece: one block of one material built from a grid of cells. Rigid cells have a diagonal brace; shear cells have no brace and are made of small bars joined by tiny living hinges; rows of shear cells form hinge arrays, and blocks of rigid cells form handles, levers and latch bolts (Ion et al. 2016).
- **how_it_works**: Every cell sits on a square grid. A cell with a diagonal brace keeps its shape, while a shear cell can lean over into a parallelogram because its corners are tiny living hinges; its opposite sides stay parallel as it leans (Ion et al. 2016; Ion et al. 2019). Strips of shear cells (hinge arrays) placed between rigid regions let those regions turn or slide relative to each other, so the block behaves like levers joined by pins, for example a four-bar linkage. In the HPI door latch, turning the handle makes a central hinge array shear and pull the latch bolt inwards, while other cells act as the return springs (Ion et al. 2016).

### Finder attributes

- **job**: 
  - change the kind of motion: the metamaterial door latch turns the handle's rotation into the latch's sliding motion (HPI)
  - let it move (turn, slide or bend): hinges, four-bar linkages, pliers and a pantograph made only of cells (Ion et al. 2016)
  - store energy: some cells act as built-in springs that return the handle and latch (Ion et al. 2016)
  - lock, and release by hand: the door latch and the 'digital' combination-lock versions (HPI)
- **motion**: flex: the shear cells lean and their tiny hinges bend, producing a limited turn or short slide of the rigid regions; it cannot produce continuous rotation, so a walker needs a separate axle (Ion et al. 2016)
- **degrees_of_freedom**: Usually 1 for a finished mechanism (one input movement coupled to one output), but it depends on the cell layout: each shear cell adds freedom that neighbouring rigid cells can remove, and HPI count the freedoms with a constraint graph (Ion et al. 2019). Unwanted soft directions, such as bulging out of plane, have to be blocked with support cells (Ion et al. 2016)
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): the door latch converts handle rotation into latch sliding (Ion et al. 2016)
  - over-centre (snaps past a point and stays): 'digital' metamaterial cells contain a bistable spring that discharges and triggers its neighbours, used to build logic and a combination lock (Ion et al. 2017, HPI)
  - none otherwise: most metamaterial mechanisms simply spring back to their rest shape when released
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it is a one-piece mechanism
  - spring force (a spring or springy part presses it in place): in the door latch, springy cells push the latch bolt out and the handle back (Ion et al. 2016)
- **input_output**: Depends on the design: handle rotation -> latch slide (door latch); squeezing handles -> closing jaws (pliers); one pen's movement -> a copied movement (pantograph). The ratio and path are set by the cell layout. Some input energy goes into bending the hinges and adding cells makes it stiffer, so it needs a noticeable operating force (Ion et al. Back-drivable: yes, it is elastic, but pushing the output along its path does not move the input back along the same path (Ion et al. 2019) *(unverified parts omitted)*
- **power**: passive (no power needed); even the 'digital' versions are powered only by bistable springs that the user re-cocks (HPI 2017; Hackaday 2017)
- **removability**: permanent: it is a single piece, so there is nothing to take apart
- **reuse_cycles**: not applicable for assembly (single piece). As a mechanism it can be worked many times if its hinges stay within their elastic range: HPI ran a TPU (NinjaFlex) Jansen walker about 5000 times with a power drill with no visible fatigue (Ion et al. 2016); stiffer ABS copies cracked quickly (ProfHankD, Printables)
- **tools_needed**: none (a 3D printer or laser cutter to make it)
- **seal**: none
- **load**: light: the demos are printed in soft TPU, and a PLA metamaterial-style pair of pliers is 'only useful for relatively gentle work' and easily broken by too much force (ProfHankD, Printables). Weak out of the plane of the cells, where it can buckle unless supported by extra cells (Ion et al. 2016)
- **adjustable**: no: behaviour is fixed by the cell layout and material; changing it means redesigning and reprinting
- **play_and_precision**: Play: none, because it has no pins or sliding parts and moves by bending with virtually no friction (Ion et al. 2016). Precision: modest; HPI's physical test mechanisms followed their simulated paths with a mean error of 8.1% (Ion et al. 2019), and very soft TPU versions flop around under load (ProfHankD). Misalignment: forces in unintended directions and out-of-plane buckling must be resisted by padding cells (Ion et al. 2016)
- **access_needed**: not applicable
- **materials**: Flexible TPU filaments (NinjaFlex, SemiFlex) work best among common 3D-printing materials, better than PLA and some photo-curing resins; spring steel would be ideal but cannot be printed; for 2D laser-cut versions 3 mm rubber foam worked best, while ABS sheet and acrylic were not compliant enough (Ion et al. 2016). Laser-cut acrylic links with TPU hinges were used in Ion et al. 2019. PLA can work if stiff and flexible regions are designed so bending does not overstress their joints (ProfHankD HingePliers). Laser-cut PTFE (Teflon) sheet was used for rolling-contact lattices (Nature Communications 2018)
- **maker_difficulty**: 2016; Ion et al. 2019) *(unverified parts omitted)*

### Making it

- **processes**: 
  - 3D print (FDM): one-piece mechanisms in flexible TPU, printed on an Ultimaker 2 in HPI's work (Ion et al. 2016)
  - laser cut: flat (2D) versions from 3 mm rubber foam (Ion et al. 2016), or acrylic links joined by printed TPU hinges (Ion et al. 2019) *(unverified parts omitted)*
- **print_in_place**: yes: the whole mechanism prints as one working piece with no assembly (Ion et al. 2016); mechanisms that need continuous rotation, such as a walker, need a separate axle added
- **making_tips_3d_printing**: Use a flexible, springy filament: HPI printed all their demos in TPU (NinjaFlex) and found TPU works better than PLA or brittle resins, while ABS and acrylic sheet were too stiff (Ion et al. 2016). Shear cells work best when their internal hinges are thin, which needs a printer that can print fine detail reliably (Ion et al. 2016). Do not rely on a single thin hinge between two cells: it rips off easily, so build hinges as arrays of shear cells, and add a border of rigid cells around hinge arrays so all the little hinges share the load (a stretched array without the border broke at its central hinge) (Ion et al. 2016). Add padding cells around the moving part to stop the block buckling out of plane and to resist pushes in the wrong direction (Ion et al. 2016). Only bend the cells as far as they fully spring back: kept within its elastic range, HPI's TPU Jansen walker survived about 5000 cycles (Ion et al. 2016). If you use stiff PLA instead, design stiff regions and a separate springy flexure so bending never loads the joints between them: ProfHankD's PLA HingePliers print without supports in under an hour, use a 0.75 mm gap between the interlocking hinge surfaces, 0.25 mm layers and at least 25% infill, and warn that some slicers can break the thin spring into fragments, while his ABS copy of HPI's cell pattern cracked and his NinjaFlex version was too floppy (Printables 282608 and 282587). *(unverified parts omitted)*
- **off_the_shelf_parts**: None needed; it is one printed part. Materials to search for: flexible TPU filament (e.g. 2016). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Rigid cells are made rigid by one diagonal brace; a second diagonal is possible but not necessary (Ion et al. 2016)
  - Shear cells keep opposite edges parallel as they lean, and rigid cells also keep their angles, so a whole mechanism can be analysed by following these two constraints across the grid (Ion et al. 2019)
  - Build hinges as arrays of shear cells with a border of rigid cells, not as a single thin living hinge (Ion et al. 2016)
  - More cells make it stiffer, so metamaterial mechanisms are unsuitable for mechanisms that must work with very small forces; they also cannot rotate continuously (Ion et al. 2016)
  - Keep deformation in the elastic range; a TPU walker ran about 5000 cycles at about 120 rpm without visible fatigue (Ion et al. 2016)
  - Driving the output along its path does not retrace the input path, and output paths usually have about the same number of inflection points as the input path (Ion et al. 2019)
  - For stiff PLA designs: 0.75 mm gap between interlocking print-in-place hinge surfaces and at least 25% infill (ProfHankD, HingePliers, Printables)

### When to use it

- **everyday_examples**: 
  - No common household product yet; the best-known example is HPI's one-piece 3D-printed door handle and latch (Ion et al. 2016; Hackaday 2016)
  - HPI's one-piece metamaterial pliers, pantograph and walking Jansen linkage (Ion et al. 2016)
  - A rubber block from a Dutch physics lab that counts to ten, one flipped beam per press (Hackaday 2023)
  - Auxetic 'rotating squares' pads and sheets that get wider when stretched (a related metamaterial, not a mechanism) (Printables 850437)
- **when_to_use**: Use a metamaterial mechanism when you want a whole mechanism, such as a latch, gripper, lever pair, linkage or toy, printed as one piece with no assembly, no pins, no lubrication and no play, and when the forces are small to moderate. It suits flexible-filament printing, soft robots and interactive objects, and it is a good way to explore how hinges and linkages behave, especially with HPI's editor (Ion et al. 2016).
- **when_not_to_use**: Avoid it for continuous rotation (use a shaft and bearing or gears), for heavy loads or anything security-related (use a metal latch or lock), for precise positioning (use a flexure stage or pinned linkage), and for mechanisms that must move with a very light touch, since adding cells makes it stiffer (Ion et al. 2016). If you only need one hinge, a living hinge or flexure hinge is simpler; if you need a springy one-piece tool in PLA, a conventional compliant mechanism with thicker links and one flexure may work better (ProfHankD).
- **environment_limits**: Thin hinges fatigue if bent beyond the elastic range (Ion et al. 2016). Stiff PLA or ABS versions crack at hinge points if over-flexed (ProfHankD). *(unverified parts omitted)*
- **safety_notes**: None known for small demos. Do not use a printed plastic latch or combination lock to secure anything valuable; a Hackaday commenter noted a safe is 'perhaps the worst application for plastics' (Hackaday 2017).
- **common_failures**: A single thin hinge or the central hinge of an array tearing when stretched; fix with hinge arrays and rigid-cell borders (Ion et al. 2016). The block buckling out of plane or moving the wrong way; add padding and support cells (Ion et al. 2016). Stiff materials (ABS, acrylic) cracking or not moving enough, and very soft TPU flopping so the rigid parts are not really rigid (Ion et al. 2016; ProfHankD). Thin hinges printing badly on a low-resolution printer (Ion et al. 2016), or a slicer breaking thin springs into fragments (ProfHankD). The real part moving differently from the simulation, by about 8% on average in HPI's tests (Ion et al. 2019).
- **related**: 
  - Compliant mechanism with flexure hinges: the same bend-instead-of-pivot idea, but designed as a few links and flexures rather than a grid of repeated cells
  - Living hinge: one thin flexing strip; the naive single hinge that metamaterial hinge arrays reinforce (Ion et al. 2016)
  - Bistable compliant mechanism: a single snap-through part; 'digital' metamaterials chain bistable cells to pass a signal
  - Compliant gripper and force amplifier: one-piece bending tools like pliers, usually designed from beams rather than cells
  - Rolling-contact joint: lattices of rolling-contact joints form compliant rolling-contact architected materials with very large, low-stress shape changes (Nature Communications 2018)
  - Origami mechanisms and kerf bending: other ways of turning a pattern in flat material into a moving mechanism
  - Auxetic structures: metamaterials that expand sideways when stretched; a material property rather than a mechanism
  - Lamina emergent torsional (LET) joint: a pattern of cuts in a flat sheet that lets part of it twist out of plane like a hinge

### Pictures, videos and models

- **links**: 
  - [Metamaterial Mechanisms (Hasso Plattner Institute, HCI Lab)](https://hpi.de/baudisch/projects/metamaterial-mechanisms.html): Project page with pictures of the one-piece door latch, pliers, pantograph and Jansen walker, an explanation of the shear cell, and links to the paper, video, editor, source code and printable files *(licence: link only)*
  - [Metamaterial Mechanisms (UIST'16) (HassoPlattnerInstitute HCI, YouTube)](https://www.youtube.com/watch?v=lsTiWYSfPck): Research video of the metamaterial mechanisms (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Metamaterial Mechanisms (Ion et al., UIST 2016, authors' copy PDF)](https://hpi.de/oldsite/fileadmin/user_upload/fachgebiete/baudisch/projects/metamaterial/metamaterial-mechanisms/2016UIST_Metamaterial_Mechanisms__authors_copy_.pdf): Paper with diagrams of rigid cells, shear cells, hinge arrays with rigid borders, the door latch before and after turning, and the editor *(licence: link only (ACM copyright))*
  - [3D Printed Door Latch Has One Moving Part - Itself! (Hackaday, 2016)](https://hackaday.com/2016/09/14/3d-printed-door-latch-has-one-moving-part-itself/): Article with pictures of the TPU door latch and other demos, plus reader discussion of durability and practicality *(licence: link only)*
  - [Compliant rolling-contact architected materials for shape reconfigurability (Nature Communications, 2018)](https://www.nature.com/articles/s41467-018-07073-5): Open-access paper with figures comparing metamaterial building blocks (sharp-tip hinges, notch flexures, buckled beams, creases) and lattices made of rolling-contact joints, with supplementary movies *(licence: CC BY 4.0)*
- **make_it_yourself**: 
  - [HingePliers (a metamaterials experiment) (ProfHankD, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/282608-hingepliers-a-metamaterials-experiment): One-piece PLA long-nose pliers with a print-in-place hinge and built-in spring, plus notes on why ABS and NinjaFlex copies of HPI's cell pattern failed; print settings included *(licence: CC BY)*
  - [Mini HingePliers (a metamaterials experiment) (ProfHankD, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/282587-mini-hingepliers-a-metamaterials-experiment): Smaller, beefier one-piece version of the HingePliers; prints without supports *(licence: CC BY)*
  - [Auxetic structure | Metamaterial (Filip Zitko, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/850437-auxetic-structure-metamaterial): Demonstration samples of an auxetic metamaterial that gets wider when pulled; the star sample needs flexible filament. A related metamaterial rather than a mechanism *(licence: CC BY)* *(unverified parts omitted)*
- **diagram_idea**: A 5 x 5 grid of square cells in which most cells have a diagonal brace (rigid) and one column has none (shear cells), shown before and after a push: the unbraced column leans into parallelograms and the braced block beside it rotates like a lever about the column, with a second frame showing the door latch layout where a turning handle shears the centre column and pulls the bolt in.
- **sources**: 
  - https://hpi.de/baudisch/projects/metamaterial-mechanisms.html
  - https://hpi.de/oldsite/fileadmin/user_upload/fachgebiete/baudisch/projects/metamaterial/metamaterial-mechanisms/2016UIST_Metamaterial_Mechanisms__authors_copy_.pdf
  - https://hpi.de/baudisch/projects/understanding-metamaterial-mechanisms.html
  - https://hpi.de/oldsite/fileadmin/user_upload/fachgebiete/baudisch/publications/2019CHI_Understanding_Metamaterial_Mechanisms.pdf
  - https://hpi.de/baudisch/projects/digital-mechanical-metamaterials.html
  - https://jfrohnhofen.github.io/metamaterial-mechanisms/
  - https://raw.githubusercontent.com/jfrohnhofen/metamaterial-mechanisms/master/README.md
  - https://www.youtube.com/watch?v=lsTiWYSfPck
  - https://hackaday.com/2016/09/14/3d-printed-door-latch-has-one-moving-part-itself/
  - https://hackaday.com/2017/04/06/3d-printed-key-code-is-plastic-digital-logic/
  - https://hackaday.com/2023/07/06/this-block-of-rubber-can-count-to-ten/
  - https://www.thingiverse.com/thing:2082638
  - https://www.printables.com/model/282608-hingepliers-a-metamaterials-experiment
  - https://www.printables.com/model/282587-mini-hingepliers-a-metamaterials-experiment
  - https://www.printables.com/model/850437-auxetic-structure-metamaterial
  - https://api.printables.com/graphql/
  - https://en.wikipedia.org/wiki/Mechanical_metamaterial
  - https://www.nature.com/articles/s41467-018-07073-5

### Other info

- **Fields with unverified parts:** environment_limits, input_output, make_it_yourself, maker_difficulty, making_tips_3d_printing, off_the_shelf_parts, processes

## 177 Tape-spring hinge (measuring-tape fold)

*compliant mechanisms & flexures.* A curved metal or plastic strip that folds with a sharp kink and snaps back straight and stiff, like a tape measure, used in deployable booms

### What it is

- **plain_name**: A short piece of curved metal strip, like the blade of a tape measure, used as a hinge: it folds with a sharp kink when pushed, then springs back straight and stiff on its own and stays locked straight
- **term**: Tape-spring hinge
- **aliases**: 
  - tape spring
  - measuring-tape hinge or carpenter's-tape hinge
  - tape-spring rolling hinge (TSR hinge, a tape-spring hinge guided by rolling wheels and wires)
  - self-deploying, self-locking elastic hinge
  - composite tape-spring hinge (glass, Kevlar or carbon fibre versions)
  - bistable tape spring (a version that stays either rolled up or straight)
  - snap bracelet or slap bracelet (the bistable steel-strip toy that uses the same effect)
  - tape measure antenna (radio antenna elements cut from a tape-measure blade) *(unverified parts omitted)*
- **family**: compliant mechanisms & flexures
- **other_families**: hinges & pivots, springs & energy storage, locks, latches & catches
- **one_liner**: A strip with a curved cross-section, like a tape-measure blade, clamped between two parts so that it folds by buckling into a kink and then unfolds itself and locks straight, giving a hinge with no pin, no friction and no latch.
- **complexity**: A few parts: one or more short strips of curved tape (steel tape-measure blade, beryllium copper, or glass, Kevlar or carbon-fibre composite) clamped at each end to the two parts being joined. Space hinges often use two tapes with their curves facing opposite ways, sometimes with stacked tapes, and the TSR hinge adds acetal rolling wheels held together by tensioned wires to guide the fold (Watt and Pellegrino 2002).
- **how_it_works**: The curve across the strip makes it behave like a shallow gutter, which is very stiff against bending while it is straight; this is why an extended tape-measure blade stays rigid (Wikipedia, Tape measure). Bend it hard enough and the middle of the strip flattens and suddenly snaps through, gathering all the bending into a short kink that is flat across and curved along its length with a radius about equal to the tape's original cross-curve radius; once kinked, only a small, nearly constant moment is needed to keep folding (Seffen and Pellegrino 1997). The bent tape stores elastic energy, so when released it unfolds the hinge by itself, and as it comes straight the cross-curve pops back and the hinge locks straight with no latch (Watt and Pellegrino 2002).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): folds up to about 180 degrees by bending, with no pin or rubbing surfaces
  - store energy: the folded tape stores spring energy that deploys the hinge by itself (Watt and Pellegrino 2002)
  - lock, and release by hand: it snaps and locks straight on its own, and a firm push past its peak moment buckles it to fold again
  - join and hold: once straight it holds the two parts in line and carries a small bending load
- **motion**: flex: folds by forming a local kink; tape-spring hinges have been used to deploy panels through about 180 degrees (Watt and Pellegrino 2002)
- **degrees_of_freedom**: 1 intended (folding about the kink). When folded the hinge is very floppy in other directions too (very low stiffness in the folded configuration, Watt and Pellegrino 2002); when straight it is stiff in all directions
- **special_behaviour**: 
  - over-centre (snaps past a point and stays): once near straight the tape snaps back into its curved section and locks straight without any latch; folding it again needs a push past the peak (buckling) moment (Seffen and Pellegrino 1997)
  - self-aligning or self-centring: elastic latching gives a highly repeatable, accurate deployed position (Watt and Pellegrino 2002) *(unverified parts omitted)*
- **holding_principle**: spring force (a spring or springy part presses it in place): the curved section's own stiffness holds the hinge straight, and the stored bending energy drives it there
- **input_output**: not applicable
- **power**: passive (no power needed). Space versions are held folded by a restraint and then released, e.g. the ISIS CubeSat antenna uses a thermal knife that burns through a wire (cubesatshop.com); power is only needed for that release device, and once released the tape deploys on its own
- **removability**: removable: the tapes are clamped or bolted to the parts (e.g. aluminium clamp blocks in the TSR hinge, Watt and Pellegrino 2002) and can be unscrewed
- **seal**: none
- **load**: light: it locks strongly for its weight but deploys gently; a 135 mm long TSR hinge with one pair of 25.4 mm wide steel tapes needed only 0.1 to 0.3 N m to deploy but locked against 13 N m (Watt and Pellegrino 2002). Strong along the tape and stiff while straight; it resists bending that puts the tape's edges in tension (opposite-sense bending) better than bending the other way (equal-sense bending), which is softer and buckles sooner into a twisted fold (Seffen and Pellegrino 1997); once folded it carries almost no load
- **adjustable**: no after assembly; the deployment and locking moments are set by the tape size, the number of stacked tapes (moments rise roughly in proportion) and the spacing between the tapes (Watt and Pellegrino 2002)
- **play_and_precision**: Play: none; tape-spring hinges have zero friction and backlash. Repeatability: elastic latching gives highly repeatable and accurate positioning (Watt and Pellegrino 2002). Misalignment: tolerates little while folded because it is so floppy, which makes deployment paths uncertain; on latching the panel can rebound and re-buckle the tapes (twice in an undamped test) before finally locking (Watt and Pellegrino 2002)
- **access_needed**: not applicable: the tape is clamped to both parts before use
- **materials**: Steel tape-measure blade: the TSR hinge used 'Contractor Grade' steel tape 25.4 mm wide, 0.1 mm thick with a 15 mm cross-curve radius (Watt and Pellegrino 2002). Heat-treated beryllium copper (CuBe) sheet 0.1 mm thick (Seffen and Pellegrino 1997). Fibre composites (glass, Kevlar, carbon) for space hinges and booms (Roccor video; Kwok and Pellegrino). Plastics such as LDPE can form tape springs but relax during storage and deploy slowly (Kwok and Pellegrino). *(unverified parts omitted)*
- **maker_difficulty**: easy to moderate: cut a strip from an old steel tape measure and clamp its ends to printed, wooden or metal brackets; the tricky parts are covering the razor-sharp cut edges (Naked Scientists), leaving enough free length so the fold does not damage the tape near the clamps (Watt and Pellegrino 2002), and softening the snap on latching

### Making it

- **processes**: 
  - off-the-shelf part: a strip cut from a steel tape-measure blade (Watt and Pellegrino 2002; Naked Scientists)
  - 3D print (FDM): clamps, brackets and couplers that hold tape-measure strips, as in printed tape-measure antenna couplers (Becky Stern, Printables)
  - CNC: machined clamp blocks (aluminium blocks in the TSR hinge, Watt and Pellegrino 2002)
  - composite layup: glass, Kevlar or carbon-fibre tape springs for space use (Roccor video) [advanced] *(unverified parts omitted)*
- **making_tips_3d_printing**: Print the clamps and brackets, not the spring: use a steel tape-measure blade for the tape itself and print blocks that grip each end. Watt and Pellegrino sized their hinge so the tapes would not be damaged during folding, with 88 mm of free tape length for 25.4 mm wide tapes and a smallest workable hinge of 106 x 44 x 21 mm. Clamp two tapes back to back with their curves facing opposite ways so the hinge behaves the same in both fold directions and does not overshoot when it latches (Seffen and Pellegrino 1997). Becky Stern's printed tape-measure antenna couplers were printed at 20% infill (Printables 540996). Avoid printing the spring itself from PLA or other plastics that creep; plastic tape springs lose force during long storage, faster when warm (Kwok and Pellegrino); *(unverified parts omitted)*
- **off_the_shelf_parts**: 'Roccor (brand)'); CubeSat deployable antenna systems with tape-spring elements (e.g. 'ISISPACE (brand)'); sound-damping tape (e.g. '3M 434 (brand)') to soften latching (Watt and Pellegrino 2002). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - To keep the fold elastic (no permanent kink), the tape's cross-curve radius R divided by its thickness t must be at least E / (yield stress x (1 + Poisson's ratio)); for heat-treated beryllium copper this means R/t of at least 85.6 (Seffen and Pellegrino 1997). For comparison, the steel tape-measure blade used by Watt and Pellegrino (R = 15 mm, t = 0.1 mm) has R/t = 150
  - The kink's lengthwise radius is about equal to the tape's cross-curve radius R, so the fold is roughly a cylinder of radius R (Seffen and Pellegrino 1997)
  - Steady folding moment of one tape: (1 + v) x D x a when bent so the edges stretch (opposite sense) and (1 - v) x D x a the other way (equal sense), where D = E t^3 / 12(1 - v^2), v is Poisson's ratio and a is the angle the cross-section subtends in radians; these moments do not depend on tape length (Seffen and Pellegrino 1997)
  - Steady deployment moment of a hinge with one pair of tapes: M = E t^3 a / (6(1 - v^2)); real hinges give a larger, uneven moment because the tapes touch (Watt and Pellegrino 2002)
  - Mount tapes in pairs with their curves on opposite sides: this creates an energy well that traps the moving part's energy at lock-out so it does not overshoot (Seffen and Pellegrino 1997)
  - Stacking two or three tapes raises both the deployment and locking moments roughly in proportion (Watt and Pellegrino 2002)
  - Damping tape on both sides of each tape cut latching shock about six-fold (150 g to 25 g), better than crushable foam (60 g) (Watt and Pellegrino 2002)
  - To make a bistable snap bracelet from a tape measure, bend a 15 to 20 cm length around a radius of about 6 to 10 mm until it just starts to deform (Naked Scientists)

### When to use it

- **everyday_examples**: 
  - A tape measure: the curved steel blade stays rigid when pulled out, a design patented by Hiram Farrand in 1922 (Wikipedia, Tape measure)
  - Snap (slap) bracelets, made of layered bistable steel bands (Wikipedia, Slap bracelet)
  - Bicycle trouser clips made from curved spring strip (Naked Scientists)
  - Tape-measure radio antennas for amateur satellite reception, and tape-spring antennas on CubeSats (Printables 540996; cubesatshop.com ISIS antenna)
- **when_to_use**: Use a tape-spring hinge when something should fold flat for storage and then open by itself and lock straight with no latch, pin or motor: fold-out antennas, booms, panels, flaps, legs, camera or sensor poles, toys and kinetic art. It is light, cheap, has zero friction and backlash, needs no lubrication, and has no moving parts to jam after long storage (Watt and Pellegrino 2002); because it deploys on its own stored strain energy it needs no motor (Communications Engineering 2024).
- **when_not_to_use**: Avoid it where the folded part must be held in a controlled position or carry load while folded (it is very floppy when folded; Watt and Pellegrino 2002); use a detent hinge, friction hinge or knuckle hinge instead. Avoid it where a heavy load could buckle it when it should stay straight; add a locking pin or over-centre lock. Avoid it where a sudden snap would be dangerous or damaging, or where the hinge must move slowly and smoothly under control; use a damped or self-closing spring hinge.
- **environment_limits**: Polymer and composite tape springs relax during storage, so the energy available to deploy drops; deployment slows with longer storage and higher temperature, and in severe cases they stop deploying on their own (Kwok and Pellegrino). *(unverified parts omitted)*
- **safety_notes**: Cut tape-measure steel has very sharp edges; cover them with tough tape (Naked Scientists), and note that slap bracelets were recalled because the steel band could pierce its cover and cut (Wikipedia, Slap bracelet). A folded tape spring stores energy and snaps open suddenly; latching shocks reached about 150 g on an undamped test hinge (Watt and Pellegrino 2002), so keep faces and fingers clear of larger ones.
- **common_failures**: Permanent kink or weakened snap when the tape is folded too tightly or overshoots, because it yields (Seffen and Pellegrino 1997); choose a large enough R/t and add end stops. Rebounding and re-buckling instead of locking on the first try; mount tapes in opposed pairs and add damping tape (Seffen and Pellegrino 1997; Watt and Pellegrino 2002). Tapes damaged near the clamps when the free length is too short (Watt and Pellegrino 2002). Loss of deployment force after long storage in plastic or composite tapes (Kwok and Pellegrino). Buckling sideways into a twisted fold when bent the 'wrong' (equal-sense) way (Seffen and Pellegrino 1997).
- **related**: 
  - Bistable compliant mechanism: a one-piece part with two resting shapes; a bistable tape spring (snap bracelet) is one kind
  - Constant-force spring: another curved steel strip, coiled on a drum, that gives a nearly constant pull, used in spring-return reels
  - Self-closing hinge (spring hinge): a pin hinge with a separate spring; stronger and controllable, but it has friction and parts that can jam
  - Detent hinge (click hinge): holds several set positions rather than folding flat and snapping straight
  - Living hinge and flexure hinge: bend instead of pivoting, but do not lock straight on their own
  - Rolling-contact joint: Watt and Pellegrino's TSR hinge combines tape springs with a wire-wrapped rolling hinge to control the fold
  - Origami mechanisms and deployable structures: fold patterns that also let flat panels deploy
  - Over-centre (toggle) lock: a linkage that snaps past centre to lock a hinge straight, with separate parts

### Pictures, videos and models

- **links**: 
  - [Tape-Spring Rolling Hinges (Watt and Pellegrino, 36th Aerospace Mechanisms Symposium, 2002)](http://www.its.caltech.edu/~sslab/PUBLICATIONS/Tape-spring%20rolling%20hinges%202002.pdf): Photos and drawings of a tape-spring rolling hinge, earlier tape-spring hinge layouts, moment-rotation and deployment graphs, and latching-shock tests *(licence: link only)*
  - [Deployment of a Rigid Panel by Tape-Springs (Seffen and Pellegrino, Cambridge report CUED/D-STRUCT/TR 168, 1997)](http://www.its.caltech.edu/~sslab/PUBLICATIONS/Deployment%20of%20a%20rigid%20panel%20by%20tape-springs_1997.pdf): Perspective drawings of a tape spring bent both ways, the typical moment-rotation curve with its peak and flat folding moment, and a panel deployed by paired tape springs *(licence: link only)*
  - [Slapbracelet-example-2018.webm (Wikimedia Commons video)](https://commons.wikimedia.org/wiki/File:Slapbracelet-example-2018.webm): Short video of a snap bracelet snapping from straight to curled, the bistable tape-spring effect *(licence: CC BY 3.0)*
  - [Roccor Composite Tape Spring Hinges for Spacecraft Deployable Structurues (Roccor, YouTube)](https://www.youtube.com/watch?v=u0His6w7l30): Manufacturer video of composite tape-spring hinges for spacecraft deployables (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Tape-spring Hinge Mechanism Explained (Firgelli Automations)](https://www.firgelliauto.com/blogs/mechanisms/tape-spring-hinge): Animated side-view diagram of a tape-spring hinge deploying and an interactive calculator of tape radius, arc angle, thickness and tape count (vendor explainer without citations; numbers not used here) *(licence: link only)*
- **make_it_yourself**: 
  - [Snap bracelets from tape measures - Bistable structures (The Naked Scientists kitchen-science experiment)](https://www.thenakedscientists.com/get-naked/experiments/snap-bracelets-tape-measures-bistable-structures): Step-by-step home experiment turning a piece of old tape measure into a bistable snap bracelet, with a plain explanation of why the curved tape snaps and a safety warning about sharp edges *(licence: link only)*
  - [Tape Measure Yagi Antenna (Becky Stern, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/540996-tape-measure-yagi-antenna): Printed couplers that clamp tape-measure elements to a PVC mast; a good template for printing clamps that hold tape-spring strips (tutorial linked from the model) *(licence: CC BY-SA)*
  - [120deg tape measure noaa satellite antenna (killowatt, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/676319-120deg-tape-measure-noaa-satellite-antenna): Portable printed antenna mount that holds tape-measure elements for receiving NOAA weather satellites *(licence: CC BY)* *(unverified parts omitted)*
- **diagram_idea**: Three frames of a curved strip clamped between two blocks: straight with its curved cross-section shown as an inset arc, then flattening in the middle at the peak moment, then folded with a short kink of radius R while the rest stays straight, beside a small moment-versus-angle graph showing the high peak and the low flat folding moment, with an arrow showing the snap back to straight.
- **sources**: 
  - http://www.its.caltech.edu/~sslab/PUBLICATIONS/Tape-spring%20rolling%20hinges%202002.pdf
  - http://www.its.caltech.edu/~sslab/PUBLICATIONS/Deployment%20of%20a%20rigid%20panel%20by%20tape-springs_1997.pdf
  - http://www.its.caltech.edu/~sslab/PUBLICATIONS/Kwok-and-Pellegrino.pdf
  - https://en.wikipedia.org/wiki/Tape_measure
  - https://en.wikipedia.org/wiki/Slap_bracelet
  - https://commons.wikimedia.org/wiki/File:Slapbracelet-example-2018.webm
  - https://www.thenakedscientists.com/get-naked/experiments/snap-bracelets-tape-measures-bistable-structures
  - https://www.cubesatshop.com/product/isis-deployable-antenna-system-for-1u-3u-cubesats/
  - https://hackaday.com/2022/08/14/just-how-good-is-a-tape-measure-antenna-anyway/
  - https://www.esa.int/Enabling_Support/Operations/First_MARSIS_boom_successfully_deployed
  - https://www.youtube.com/watch?v=u0His6w7l30
  - https://www.firgelliauto.com/blogs/mechanisms/tape-spring-hinge
  - https://www.nature.com/articles/s44172-024-00163-x
  - https://www.printables.com/model/540996-tape-measure-yagi-antenna
  - https://www.printables.com/model/676319-120deg-tape-measure-noaa-satellite-antenna
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, environment_limits, make_it_yourself, making_tips_3d_printing, materials, off_the_shelf_parts, print_in_place, processes, reuse_cycles, special_behaviour, tools_needed

## 178 Origami mechanisms (waterbomb, Kresling, thick-panel origami)

*compliant mechanisms & flexures.* Fold patterns used as joints so flat sheets or panels fold up, expand or twist in a planned way

### What it is

- **plain_name**: A flat sheet, or a set of flat panels, with a planned pattern of folds so it can fold up small, spring open, or twist and shrink like a paper lantern; the folds themselves act as the joints
- **term**: Origami mechanism (origami-inspired mechanism), including the waterbomb, Kresling and Miura-ori fold patterns and thick-panel (rigid) origami
- **aliases**: 
  - origami-inspired design, origami engineering
  - rigid origami (flat panels that stay flat and only fold along hinge lines; Wikipedia 'Rigid origami')
  - thick origami, thick-panel origami (origami redesigned for panels too thick to treat as paper; Morgan et al. 2016; Liu et al. 2021)
  - Kresling pattern, Kresling-ori, Kresling fold, twist-buckling pattern (named after Biruta Kresling; ORI*lab; Kidambi and Wang 2020); 'Kresling spring' (maker name, 3DPrint.com)
  - waterbomb base, waterbomb pattern, waterbomb tessellation, six-crease waterbomb (Wikipedia 'Waterbomb base'; Liu et al. 2021)
  - Miura fold, Miura-ori (Wikipedia 'Miura fold')
  - Yoshimura pattern (diamond-shaped buckling pattern of a squashed thin cylinder; Wikipedia 'Yoshimura buckling')
  - square twist and flasher (other named fold patterns used as mechanisms; Morgan et al. 2016; Ye et al. 2023)
  - print-on-fabric origami, multiplanar origami (3D-printing methods; Printables; BYU CREATE Lab) *(unverified parts omitted)*
- **family**: compliant mechanisms & flexures
- **other_families**: hinges & pivots, motion conversion, springs & energy storage, print-in-place & 3D-printing joints
- **one_liner**: A sheet or set of panels joined along a planned pattern of fold lines, so that it moves in one controlled way: folding flat, expanding, or shortening while it twists.
- **complexity**: Usually a single piece (one folded sheet) or a small assembly that acts as one unit: flat panels (paper, card, plastic sheet, plywood or printed plates) joined along fold lines. The folds can be thinned creases in the same material (living hinges), a flexible layer such as fabric, nylon mesh, film or TPU that the panels are fixed to, or real hinges between thick panels. Robot versions add something to fold it, such as tendons pulled by a motor, or air or vacuum.
- **how_it_works**: Each fold line acts as a hinge, and where several folds meet at a point they behave like a small linkage, so the pattern decides how the whole sheet can move (Rigid origami is 'a type of mechanical linkage'; Wikipedia). Some patterns can fold with every panel staying flat, such as the Miura fold, which opens in one motion when you pull two ends apart (Wikipedia 'Miura fold'); others, such as the Kresling pattern, only fold because the panels bend a little, which stores spring energy and can make the tube snap between two stable lengths (bistable) while it twists (Wikipedia 'Miura fold'; Kidambi and Wang 2020). A waterbomb pattern is made from points where six creases meet; in paper it has several ways to move, but its thick-panel version has only one, which makes it easy to drive with a single motor (Liu, Maiolino and You 2021). When the material is thick, the hinge lines are moved to the top or bottom faces of the panels, or the panels are offset, tapered or spaced apart, so thick panels do not collide as they fold (Morgan, Lang, Magleby and Howell 2016).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): panels swing about fold lines so a flat sheet folds up, opens out or changes shape in one planned way
  - change the kind of motion: a Kresling tube turns a push along its length into a twist, and a twist into a change of length (Kidambi and Wang 2020; ORI*lab)
  - store energy: bistable patterns such as the Kresling tube or a paper bag snap between two stable shapes and push back like a spring (Wikipedia 'Rigid origami') *(unverified parts omitted)*
- **motion**: multiple: every fold is a small bend (flex) or pivot (rotate), and together they make the whole sheet fold flat, expand, or shorten while it twists; a single fold can travel through up to 180 degrees from flat to fully folded, and some thick-panel methods keep that full 180 degrees (Morgan et al. 2016)
- **degrees_of_freedom**: Often 1 by design: a Miura fold opens and closes in one motion (Wikipedia 'Miura fold'), and a thick-panel waterbomb has one degree of freedom while the paper version has several (Liu et al. 2021). A Kresling tube moves mainly along one path, shortening as it twists, but it can also wobble sideways; research models treat it with six degrees of freedom (Kidambi and Wang 2020). Complex paper patterns with many creases can have many degrees of freedom and need guiding.
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): a Kresling tube couples shortening with twisting; ORI*lab describes one form that 'acts like a screw mechanism' and another that gives net-zero rotation during compression
  - over-centre (snaps past a point and stays): the Kresling pattern can be bistable, resting at two lengths (Kidambi and Wang 2020), and a paper shopping bag snaps into its flat and its open state because its sides bend while folding (Wikipedia 'Rigid origami')
  - self-locking (holds under load, won't back-drive): only in special designs; two thick-panel Miura sheets stacked into a 'self-locking' unit carried over 11,000 times their own weight (Ye et al. 2023), and printed stoppers or latches can lock a folded shape (Hackaday 2024)
  - none of the other behaviours: plain fold patterns are free to fold back the way they came
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): the folds are joints that let the sheet move, not fasteners
  - spring force (a spring or springy part presses it in place): bent panels and creases push bistable patterns such as the Kresling tube into one of their stable shapes (Kidambi and Wang 2020)
  - material bond (glue, solvent or melting): in printed and thick-panel versions the panels are fused or glued to a shared flexible layer (fabric, nylon mesh or TPU) that forms every hinge (Printables 'Popup print on fabric'; Instructables BYU CREATE Lab; Ye et al. 2023)
  - shape (the parts interlock; form-fit): self-locking designs add printed stoppers or latches (Hackaday 2024)
- **input_output**: Mostly used as a joint rather than a transmission. Waterbomb gripper: tendon pull from one motor -> four fingers close together (Liu et al. 2021). Miura sheet: pulling two opposite corners -> the whole sheet unfolds in both directions at once (Wikipedia 'Miura fold'). Liu et al. 2021). *(unverified parts omitted)*
- **power**: passive (no power needed). Robot versions add power to fold them: a motor pulling tendons (Liu et al. 2021) or vacuum pumped out of an outer skin (Botrić and Gregov 2026). *(unverified parts omitted)*
- **removability**: permanent: the folds are part of the sheet, so it is not taken apart; the finished folded piece is fixed to other parts with ordinary fasteners. Thick-panel versions built with separate pin hinges can be unpinned.
- **reuse_cycles**: once (it is one folded piece, not something you take apart). What matters instead is how many times it can fold: paper origami is fragile and fatigues with repeated folding (Liu et al. 2021); 3D-printed thin-plastic living hinges usually last only a few cycles (Hubs); PLA panels wrapped in TPU survived more than 100 fold-unfold cycles without the layers separating (Ye et al. 2023).
- **tools_needed**: none to fold by hand. Making it: a ruler and a scoring tool or craft knife for card or plastic sheet; a 3D printer for printed versions, plus scissors, binder clips, a nylon mesh or fabric and heat-resistant Kapton tape for print-on-mesh methods (Instructables 'How to 3D Print Multiplanar Origami'); glue and fabric for panels on a fabric hinge layer; small hinges and screws for thick wooden panels.
- **seal**: none: creases and gaps between panels leak. To make a sealed or airtight version, the fold pattern is put inside a flexible skin, as in vacuum-driven origami grippers with an elastomer membrane (Botrić and Gregov 2026).
- **load**: light for paper and thin printed sheets: strong in the plane of a panel but weak at the creases. A 22 g TPU thick-panel waterbomb gripper lifted a 524 g mug (10 of 12 tries; Liu et al. 2021); a vacuum-driven paper-and-film waterbomb gripper reached a 70 N holding force (Botrić and Gregov 2026). Medium for engineered thick-panel structures: a stacked self-locking thick-panel Miura unit printed in PLA and TPU carried over 11,000 times its own weight and survived more than 100 cycles of 40% compression (Ye et al. 2023). Weak against loads that push the folds the way they want to fold.
- **adjustable**: Partly: the fold angle can be set anywhere if friction or a lock holds it, and actuated versions are adjusted by how far the tendon or vacuum pulls. Bistable patterns only rest in their two stable shapes. The pattern itself cannot be changed after making.
- **play_and_precision**: noticeable: flexible folds let panels shift. The printed TPU waterbomb gripper's fingertips were within 3 mm of the predicted positions, with small differences between opening and closing paths caused by the TPU's elastic hysteresis (Liu et al. 2021). Kresling tubes are sensitive to small changes in geometry and starting position and can wobble off-axis while deploying (Kidambi and Wang 2020). *(unverified parts omitted)*
- **access_needed**: not applicable
- **materials**: 2023), or a whole mechanism in 95A TPU with thin folds (Liu et al. 2021). Thick panels can be almost any solid material: one thick-origami sculpture used foam board for moving panels and MDF for the base, and a foldable circuit board used PCB panels and a metal plate (Morgan et al. 2016). For thin printed creases, Hubs recommends nylon or a flexible material such as TPU for the hinge. *(unverified parts omitted)*
- **maker_difficulty**: moderate: paper and card versions are easy, but printed or thick-panel versions need hinge design (a flexible layer, offsets or gaps so thick panels don't collide), mid-print pauses to lay in mesh or fabric or a two-material printer, and some trial and error

### Making it

- **processes**: 
  - 3D print (FDM): print the panels flat onto a fabric or nylon mesh layer laid in during a pause, print thin TPU folds, or print rigid panels wrapped in TPU on a two-material printer (Instructables BYU CREATE Lab; Printables 'Popup print on fabric'; Liu et al. 2021; Ye et al. 2023)
  - woodwork: thick panels (foam board, MDF, plywood) with hinges placed using the offset-panel method (Morgan et al. 2016)
  - hand folding: paper, card or plastic film for trying a pattern
  - off-the-shelf part: not sold as a part; built from sheet, fabric, tape and hinges *(unverified parts omitted)*
- **print_in_place**: partly: printed origami comes off the bed flat and already joined, with no assembly, but most methods need a fabric or nylon mesh layer laid in during a print pause (and Kapton tape where layers must not fuse), or a two-material printer; a single-material TPU design with thin folds prints fully in place (Liu et al. 2021)
- **making_tips_3d_printing**: 1) Pick a hinge method. (a) Thin creases in one material: easiest, but Hackaday reports that on complex patterns 'crease lines become weak and overstrained to the point of failure'; Hubs says 3D-printed living hinges usually survive only a few cycles, suggests 0.4-0.6 mm thick with at least two layers, printed as one continuous strand across the hinge, and recommends nylon, or TPU on a two-material printer. (b) A flexible layer inside the print: print two or three layers, pause, lay fabric or nylon mesh flat over the bed and clip it at the corners without stretching it, then keep printing so the next layer bonds through the mesh (Instructables 'How to 3D Print Multiplanar Origami', BYU CREATE Lab, using PLA, 0.2 mm layers and 100% infill because the panels are thin). The 'Popup print on fabric' model uses only four 0.2 mm layers with fabric inserted after the second (Printables). (c) All-TPU: the thick-panel waterbomb gripper was printed in 95A TPU with 10 mm thick panels and folds only 0.2 mm thick and 1-1.2 mm wide, at 0.1 mm layers (Liu et al. 2021). (d) Two materials: wrap rigid PLA panels in TPU rather than just printing TPU on top; the wrapped version folded more than 100 times with no separation while the simply layered one delaminated (Ye et al. 2023). Placing the soft hinge material nearer one face biases that hinge to fold as a mountain or a valley (Hackaday 2024, describing Ye et al.). 2) Stop layers fusing where panels stack on top of each other: lay Kapton tape over those areas during a pause (not over the hinges), keep tape overlaps under a few millimetres and smooth out wrinkles, or print a gap filled with soluble PVA support on a multi-material printer (Instructables). A Kresling tube printed this way needs two mesh layers and one Kapton layer (Instructables). 3) Add the pauses in the slicer (e.g. PrusaSlicer's pause at layer) and make sure the print head is lifted clear and the clips won't hit the printer when it resumes (Instructables). 4) Thick panels need room to fold: put the hinge line on the top or bottom face (axis shift), offset the panels from a shared hinge plane, taper the panel edges, or leave gaps; with panels on a membrane, gaps of at least twice the panel thickness keep the full range of motion (Morgan et al. 2016, Table 1). 5) The simulation tool Origami Simulator can check how a crease pattern folds and export the folded shape as STL or OBJ before you print. 6) Remove Kapton after printing with tweezers or a dental pick, trim excess mesh with scissors or a craft knife, then work the folds gently a few times (Instructables).
- **off_the_shelf_parts**: Nylon tulle or mesh, or thin woven fabric (for print-on-fabric hinges); polyimide tape, sold as Kapton (brand) tape; PVA soluble support filament; TPU flexible filament (e.g. Shore 95A); binder clips; nylon fishing line as tendons (Liu et al. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Thick-panel waterbomb printed in TPU: fold width about 0.1 times the panel side length and fold thickness about 0.02 times the panel thickness, i.e. 0.2 mm thick and 1-1.2 mm wide folds on 10 mm panels, printed at 0.1 mm layers (Liu, Maiolino and You 2021, Frontiers in Robotics and AI).
  - Panels mounted on a flexible membrane keep their full range of motion only if the gaps between panels are at least twice the panel thickness (Morgan et al. 2016, Mechanical Sciences 7, Table 1).
  - Choosing a thick-panel method: the offset-panel technique keeps the paper model's motion and the full 180-degree range but does not unfold flat and may need cutouts; tapered panels keep the motion but limit the range; membrane folds and axis shift keep the range but not the exact motion (Morgan et al. 2016, Table 1).
  - A waterbomb pattern has several degrees of freedom in paper but only one as thick-panel origami with creases on the top and bottom faces (Liu et al. 2021).
  - Only rigid-foldable patterns (e.g. Miura fold) work with truly rigid panels; Kresling and Yoshimura patterns need the panels to bend (Wikipedia 'Miura fold').
  - Print-on-mesh: print 2-3 layers before pausing to lay the mesh, 0.2 mm layers, 100% infill for thin panels, and don't stretch the mesh (BYU CREATE Lab, Instructables).
  - FDM living hinges: 0.4-0.6 mm thick with at least two layers, nylon recommended, or TPU in a two-material print; expect only a few cycles from simple thin strips (Hubs 'How to design living hinges for 3D printing').
  - Wrap rigid panels in the soft hinge material instead of printing the soft layer on top: PLA wrapped in TPU survived over 100 fold cycles without debonding (Ye et al. 2023, Nature Communications).

### When to use it

- **everyday_examples**: A paper shopping bag that folds flat and snaps open (Wikipedia 'Rigid origami'), Twisting a paper tube while pushing the ends together makes the diagonal Kresling folds by themselves (ORI*lab) *(unverified parts omitted)*
- **when_to_use**: Use an origami mechanism when something must pack flat and open out, collapse and expand, or shorten while twisting, all in one planned movement: deployable covers and lampshades, collapsible tubes, bellows, grippers that close around objects, pop-up models, and folding boxes or cases. It is good when you want one printed or cut piece instead of many hinges and pins, when a single motor or pull should drive many joints at once (a one-degree-of-freedom pattern), or when you want a spring that snaps between two shapes (Kresling). Printing a flat sheet that folds into a 3D shape is also much quicker than printing the finished 3D shape (Hackaday 2024).
- **when_not_to_use**: Avoid it for parts that carry heavy or shock loads, need precise positioning, or must fold thousands of times with thin printed plastic creases (use real pin hinges, a print-in-place hinge or a thick-panel design on metal hinges instead). If you only need one fold, a single living hinge or ordinary hinge is simpler. For something that simply extends in a straight line, a scissor linkage or telescoping tube is easier to design and stiffer. For a pattern that needs bending panels (Kresling), don't use thick rigid panels; choose a rigid-foldable pattern such as the Miura fold instead.
- **environment_limits**: Printed versions share their plastics' limits: PLA starts to give at about 60 degrees C, PETG at 80 and ASA at 110 (CNC Kitchen oven test), so a PLA mechanism in a hot car or near a lamp can sag. TPU folds show elastic hysteresis, so opening and closing paths differ slightly (Liu et al. 2021). Paper and card fatigue with repeated folding (Liu et al. Thin printed creases fatigue and crack (Hubs; Hackaday 2025). Fabric or mesh hinges are only as good as the plastic's grip on them. *(unverified parts omitted)*
- **safety_notes**: Few hazards. Laying mesh or tape during a print pause puts your hands close to a hot nozzle and bed; make sure the head has moved clear and clips won't hit the printer when it resumes (Instructables). Trimming mesh and lifting Kapton uses sharp knives and picks. *(unverified parts omitted)*
- **common_failures**: 1) Thin printed creases crack after a few folds: use a flexible layer (fabric, mesh or TPU) or a nylon or TPU hinge instead of thin PLA (Hackaday 2025; Hubs). 2) The soft hinge layer peels off the rigid panels: wrap the panels in the soft material, or let the plastic bond through the mesh (Ye et al. 2023; Instructables). 3) Thick panels collide and the pattern jams before it folds fully: use the offset-panel, tapered-panel or axis-shift method, or leave gaps of at least twice the thickness (Morgan et al. 2016). 4) Stacked panels fuse together: add Kapton tape or a soluble PVA gap between them, but never over a hinge (Instructables). 5) The print head catches on wrinkled mesh or tape, or on a clip: lay everything flat and watch the first layer after each pause (Instructables). 6) A Kresling tube won't stay in its second shape or deploys crookedly: its bistability and straightness are sensitive to small changes in the crease geometry, so test proportions in paper first (Kidambi and Wang 2020). 7) Positions drift or opening and closing differ slightly: a property of flexible folds (Liu et al. 2021); add stops if exact positions matter.
- **related**: 
  - Living hinge: a single thin fold; an origami mechanism is many living hinges arranged in a pattern
  - Lamina emergent torsional (LET) joint: a cut pattern that lets a flat sheet bend where a crease would be too stiff or weak
  - Self-folding print (4D printing): printed sheets that fold themselves when heated instead of being folded by hand or a motor
  - Scissor linkage (lazy tongs): also expands and collapses in one motion, but with pinned bars, which are stiffer and easier to design
  - Iris mechanism: another way to open and close an aperture by twisting
  - Bistable compliant mechanism (snap-through): a flexure designed to have two stable positions, like a bistable Kresling tube
  - Print-in-place hinge: separate pin hinges for thick printed panels
  - Mechanical metamaterial mechanism (shear-cell hinge arrays): grids of printed cells that bend in planned ways *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Miura-ori.gif (Wikimedia Commons, by MetaNest)](https://commons.wikimedia.org/wiki/File:Miura-ori.gif): Animation of a Miura-ori sheet folding and unfolding in one motion *(licence: CC BY-SA 3.0 or GFDL 1.2+ (dual licensed))*
  - [I 3D Printed Origami (YouTube, matthew lim)](https://www.youtube.com/watch?v=FNVBK7-h9Fs): 3D-printed folding sheets with thinned creases, why they fail on complex patterns, and offset panels on alternate sides of the folds; twisting cylinders that contract (as described by Hackaday, December 2025); title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
  - [Towards developing product applications of thick origami using the offset panel technique (Morgan, Lang, Magleby and Howell, Mechanical Sciences 7, 2016)](https://langorigami.com/wp-content/uploads/2016/03/ms-7-69-2016.pdf): Figure 1 compares seven ways to fold thick panels (axis shift, membrane, tapered, offset crease, offset panel and more); photos of a thick-origami kinetic sculpture, foldable circuit board and toolbox *(licence: CC BY 3.0)*
  - [Multimaterial 3D printed self-locking thick-panel origami metamaterials (Ye et al., Nature Communications, 2023)](https://www.nature.com/articles/s41467-023-37343-w): Photos of FDM-printed thick-panel Miura, Kresling and flasher patterns with rigid panels wrapped in TPU hinges, plus supplementary movies of folding and load tests *(licence: CC BY 4.0)*
  - [A 3D-Printable Robotic Gripper Based on Thick Panel Origami (Liu, Maiolino and You, Frontiers in Robotics and AI, 2021)](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2021.730227/full): CAD, photos and figures of a one-piece TPU gripper made of four thick-panel waterbomb units, closed by tendons from one motor *(licence: CC BY)*
- **make_it_yourself**: 
  - [How to 3D Print Multiplanar Origami (Instructables, BYU Create Lab)](https://www.instructables.com/How-to-3D-Print-Multiplanar-Origami/): Step-by-step guide to printing origami in stacked planes on an FDM printer: slicer pauses, laying nylon mesh, Kapton tape between layers, trimming and folding; includes the Kresling pattern. Companion video 'How To 3D Print Multiplanar Origami' (YouTube, BYU Create Lab). Read through the Instructables JSON API. *(licence: CC BY-NC 4.0)*
  - [Multiplanar Kresling Pattern Origami (BYU Create Lab, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1166979-multiplanar-kresling-pattern-origami): Printable Kresling cylinder made in stacked planes, to print with the mesh-and-Kapton method above; also on Thingiverse as thing:6928121 (seen in search results). Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Popup print on fabric Spinning Origami (ateldsign, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/499094-popup-print-on-fabric-spinning-origami): Pop-up spinning origami printed in four 0.2 mm PLA layers with a fabric layer inserted after layer 2 as the hinges; fold along black lines and cut the fabric along red lines. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Origami Simulator (Amanda Ghassaei, with Erik Demaine and others)](https://origamisimulator.org/): Free browser app that folds any crease pattern (SVG or FOLD) at once, with built-in Miura-ori, waterbomb and Huffman waterbomb tessellation examples, strain view, and STL/OBJ export of the folded shape *(licence: MIT (source code, per the project's LICENSE file))*
- **diagram_idea**: Three small panels side by side: (1) a flat square sheet with its waterbomb crease pattern (mountain folds solid, valley folds dashed) folding into a 3D unit; (2) a Kresling tube shown tall and then short, with a curved arrow showing it twists as it shortens; (3) a cross-section of two thick panels showing why a hinge in the middle jams and how moving the hinge line to one face (or offsetting the panels) lets them fold flat against each other.
- **sources**: 
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2021.730227/full
  - https://www.nature.com/articles/s41467-023-37343-w
  - https://langorigami.com/wp-content/uploads/2016/03/ms-7-69-2016.pdf
  - https://www.instructables.com/How-to-3D-Print-Multiplanar-Origami/
  - https://api.printables.com/graphql/
  - https://en.wikipedia.org/wiki/Miura_fold
  - https://en.wikipedia.org/wiki/Rigid_origami
  - https://en.wikipedia.org/wiki/Yoshimura_buckling
  - https://en.wikipedia.org/wiki/Waterbomb_base
  - https://arxiv.org/abs/2003.10411
  - https://orilab.art/natural/kresling
  - https://hackaday.com/2025/12/21/origami-on-another-level-with-3d-printing/
  - https://hackaday.com/2024/12/13/origami-inspired-self-locking-structures-with-3d-printing/
  - https://3dprint.com/322905/3d-printed-origami-by-matthew-lim/
  - https://www.hubs.com/knowledge-base/how-design-living-hinges-3d-printing/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC13406422/
  - https://origamisimulator.org/
  - https://raw.githubusercontent.com/amandaghassaei/OrigamiSimulator/master/LICENSE
  - https://commons.wikimedia.org/wiki/File:Miura-ori.gif
  - https://www.youtube.com/watch?v=FNVBK7-h9Fs
  - https://www.youtube.com/watch?v=9Kdw_rEk18w
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament

### Other info

- **Fields with unverified parts:** aliases, environment_limits, everyday_examples, input_output, job, materials, off_the_shelf_parts, play_and_precision, power, processes, related, safety_notes

