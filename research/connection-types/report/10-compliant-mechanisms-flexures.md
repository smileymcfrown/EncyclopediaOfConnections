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

*Not researched yet.*

## 175 Rolling-contact joint (CORE, Jacob's-ladder hinge)

*compliant mechanisms & flexures.* Two curved surfaces held together by straps or bands so they roll on each other instead of rubbing, giving a low-friction hinge

*Not researched yet.*

## 176 Mechanical metamaterial mechanism (shear-cell hinge arrays)

*compliant mechanisms & flexures.* A block made of a repeating grid of tiny cells that bend in a planned way, so the whole block works like a mechanism

*Not researched yet.*

## 177 Tape-spring hinge (measuring-tape fold)

*compliant mechanisms & flexures.* A curved metal or plastic strip that folds with a sharp kink and snaps back straight and stiff, like a tape measure, used in deployable booms

*Not researched yet.*

## 178 Origami mechanisms (waterbomb, Kresling, thick-panel origami)

*compliant mechanisms & flexures.* Fold patterns used as joints so flat sheets or panels fold up, expand or twist in a planned way

*Not researched yet.*

