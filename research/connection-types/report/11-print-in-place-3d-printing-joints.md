# print-in-place & 3D-printing joints: Made for 3D printing

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 54 Self-folding print (4D printing)

*print-in-place & 3D-printing joints.* A flat print with stresses built into its layers, or a dissolvable lock holding back a spring, that folds itself into shape when heated or wetted

### What it is

- **plain_name**: A flat 3D print that folds itself up into a 3D shape when you drop it in hot water (or wet it), because stretch was 'frozen' into its layers while printing, or because a dissolvable catch was holding a springy hinge open
- **term**: Self-folding print (4D printing)
- **aliases**: 
  - 4D printing or 4D print
  - self-folding 3D print or self-folding structure
  - self-morphing or shape-morphing print
  - shape-shifting print
  - self-assembling print
  - active origami (Wikipedia alias of 4D printing)
  - Thermorph (Carnegie Mellon research name for heat-triggered self-folding FDM prints)
  - programming via printing or strain-trapping print (research terms)
  - shape-memory print or shape-memory polymer (SMP) print
  - hygromorph (moisture-driven versions)
  - dissolvable-lock or water-triggered self-deploying hinge
- **family**: print-in-place & 3D-printing joints
- **other_families**: compliant mechanisms & flexures, springs & energy storage
- **one_liner**: A print made flat on the bed that bends its own hinges into a planned 3D shape when triggered by heat or water, then stays in that shape.
- **complexity**: Single piece in the heat-triggered form: stiff flat panels joined by hinge strips made of a shrinking (active) layer, usually PLA, on a non-shrinking (constraint) layer, usually TPU. The dissolvable-lock form is a few parts printed together: rigid PLA panels, springy TPU hinges or springs, and water-soluble PVA locks that hold the hinges open.
- **how_it_works**: When a printer lays down PLA, the hot plastic is pulled and stretched and then cools so fast that the stretch is locked in; heating it again above its softening point (glass transition, about 60 to 65 degrees C) lets it relax and shrink along the printing direction (An et al. 2018). If a shrinking PLA layer is printed on top of a layer that doesn't shrink (TPU), the pair bends like a bimetallic strip, and printing faster locks in more stretch and gives a bigger fold, so each hinge's angle can be set by its print speed, direction and length (An et al. 2018; Bodaghi et al. 2019). Dropping the flat print into hot water makes every hinge fold at once into the planned shape, which stays when it cools. In the other version, a hinge made from springy TPU is printed bent open and held there by a lock made of water-soluble PVA; when water dissolves the lock, the spring snaps the hinge to its natural position (Teaching Tech, via Hackaday 2022).

### Finder attributes

- **job**: 
  - join and hold: flat panels fold up and stay in the finished 3D shape
  - let it move (turn, slide or bend): each hinge bends once, by itself, when triggered
  - store energy: stretch frozen into the layers, or a spring held back by a lock, stores the energy that does the folding
  - hold or release using power: a one-off release triggered by heat or water rather than electricity
- **motion**: flex: a one-time fold of each hinge when triggered; fold angles can be programmed anywhere from -180 to 180 degrees, and curved folds, twists and coils are possible (An et al. 2018)
- **degrees_of_freedom**: 0 once folded (it becomes a fixed shape); during folding each hinge bends about one line (1 each), but the motion can't be steered once started except by holding parts or changing heat
- **special_behaviour**: 
  - none (of the listed behaviours): its special trick is that it assembles itself once, when heated or wetted, and PLA versions keep a shape memory, so if a folded part is bent while hot it springs back to its folded shape when reheated (An et al. 2018; Hackaday 2025)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): once cooled, the folded hinges are frozen in their new shape, and folded panels can wrap or lock around each other
  - spring force (a spring or springy part presses it in place): in the dissolvable-lock version, the TPU spring holds the hinge in its folded position
- **input_output**: not applicable as a transmission: a one-off stimulus (hot water at about 70 degrees C, or plain water for PVA locks) -> a planned fold
- **power**: powered, but only once: it needs heat (hot water, a heat gun or oven) or water to trigger the fold. After folding it holds its shape with no energy. *(unverified parts omitted)*
- **removability**: permanent: once folded it stays folded; PLA versions can be softened with heat and reshaped, but they tend to return to their programmed folded shape when reheated (An et al. 2018)
- **reuse_cycles**: once: the fold happens one time; PLA shape-memory versions can be deformed and recovered a few times with heat (An et al. *(unverified parts omitted)*
- **seal**: none
- **load**: light: thin self-folded parts are small and flexible at the hinges; a 0.8 mm thick 1:100 model chair held about 350 g with less than 5 degrees of bending, and the authors estimate about 3 mm thickness for a full-size chair (An et al. 2018). Weakest at the hinges, especially if reheated
- **adjustable**: no, after folding: the fold angle is programmed at print time by print speed, direction and hinge length (An et al. 2018); it can be partly reshaped by reheating (shape memory) but tends to spring back to its programmed shape
- **play_and_precision**: Play: none (one piece). Precision: low to moderate; gravity, collisions between folding panels and differences between filaments make the finished angles differ from the plan, which researchers fix by holding a central face, changing folding order or tweaking print speed (An et al. 2018). Five printed roses folded consistently (An et al. 2018)
- **access_needed**: not applicable
- **materials**: PLA (the active, shrinking layer) with TPU (the constraint layer) for Thermorph-style prints (An et al. 2018; CNC Kitchen used dasFilament PLA and Fiberlogy 40D TPU); PLA alone with speed or layer-graded stretch (Bodaghi et al. 2019; Iqbal et al. 2026); ABS and nylon suggested for tougher, hotter-triggered versions (An et al. 2018); PLA, firm TPU and water-soluble PVA for dissolvable-lock hinges (Teaching Tech); water-swelling or shape-memory resins on multi-material industrial printers in research (Wikipedia, 4D printing; MIT Self-Assembly Lab)
- **maker_difficulty**: moderate: single-material PLA versions are easy, but reliable Thermorph folds need PLA and TPU in one print (a multi-material printer or a filament swap) and control of print speed; the dissolvable-lock version needs three materials (PLA, TPU and PVA) or locks printed separately and fitted afterwards

### Making it

- **processes**: 
  - 3D print (FDM): PLA and TPU heat-triggered hinges; PLA-only speed-programmed prints; PLA, TPU and PVA dissolvable-lock hinges
  - 3D print (resin): shape-memory and water-swelling photopolymers on multi-material industrial printers (research)
- **print_in_place**: yes: Thermorph-style prints come off the bed as one flat piece and fold when heated (An et al. 2018); partly for dissolvable-lock versions, where Teaching Tech printed the PVA locks separately and fitted them afterwards (Hackaday 2022)
- **making_tips_3d_printing**: Start from a tested model (CNC Kitchen's Thermorph hinge, rose, ring and snake, which fold in 70 degrees C water; Printables) before designing your own. For each hinge (actuator), print the PLA lines across the fold line, because the hinge bends in the direction the lines run, and extend the PLA 1 mm into the neighbouring panels so it bonds (An et al. 2018). Use about three PLA layers as the active layer and one TPU layer as the constraint layer; printing the PLA first, on the cool bed, gives a bigger bend than printing it on top of the TPU, and swapping the order flips the fold direction (An et al. 2018). Print hinge PLA fast to lock in more stretch (e.g. 5000 mm/min, up to 9000 mm/min for narrow hinges, versus the usual 3000 mm/min) and print the panels slowly or with a pattern that stays flat (CNC Kitchen used Hilbert-curve fill for stress-free panels; Hackaday 2025). The researchers used a 0.4 mm nozzle, 0.2 mm layers, PLA at 210 and TPU at 230 degrees C (An et al. 2018). For PLA-only folds, faster speeds (20 to 70 mm/s tested) give larger bends and the top layer holds the most stretch (Bodaghi et al. 2019). Trigger in water a little above PLA's softening point: 70 degrees C for about 15 seconds to 2 minutes (An et al. 2018; CNC Kitchen), up to 85 degrees C in Bodaghi's tests. Fold large shapes under water so their weight doesn't distort them, and hold the central panel still (An et al. 2018). For PVA locks, warm water speeds up dissolving, but hot water also softens PLA panels, so shape the locks to dissolve quickly (Teaching Tech, via Hackaday 2022). *(unverified parts omitted)*
- **off_the_shelf_parts**: None needed; it is made from ordinary filaments: PLA, TPU (e.g. Shore 40D), and water-soluble PVA support filament. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Heat PLA above its glass transition (60 to 65 degrees C) but well below its melting point (173 to 178 degrees C) to trigger folding; Thermorph prints were triggered at 70 degrees C for about 2 minutes (roses in 15 seconds) (An et al., CHI 2018)
  - Hinge build-up: 1 layer of TPU plus 3 layers of PLA; printing PLA first gives the larger bend (An et al., CHI 2018)
  - Faster PLA printing and longer hinges give bigger fold angles; fold angles from -180 to 180 degrees are programmable (An et al., CHI 2018)
  - Designs of up to about 40 faces folded well on a 25 x 15 cm bed; the method saved 60 to 87% of print time compared with printing the 3D shape directly (An et al., CHI 2018)
  - Thickness for strength: 0.8 mm held about 350 g in a 1:100 chair; about 3 mm is estimated for a full-size load-bearing version (An et al., CHI 2018)
  - PLA-only: higher print speed (20 to 70 mm/s) gives larger bending, and pre-strain is highest in the last-printed layer; activation at 85 degrees C water, Tg 66 degrees C (Bodaghi et al., Materials 2019)
  - Single-material desktop FDM prints can trap up to 50% tensile strain in chosen areas (Iqbal et al., arXiv 2026)
  - Water-swelling printed materials can swell up to 150% while rigid parts set the fold angles (Tibbits and Stratasys, via Wikipedia, 4D printing)

### When to use it

- **everyday_examples**: 
  - Heat-shrink tubing, stretched during manufacture so it shrinks to one-half to one-sixth of its diameter when heated (Wikipedia, Heat-shrink tubing)
  - Shrink art sheets ('Shrinky Dinks', brand) of pre-stretched polystyrene that shrink to about one-third size in the oven (Wikipedia, Shrinky Dinks)
  - A bimetallic strip in a thermostat, which bends when heated because its two layers expand differently, the same bilayer idea (Wikipedia, Bimetallic strip) *(unverified parts omitted)*
- **when_to_use**: Use a self-folding print to make hollow or curved shapes much faster and with less plastic than printing them in 3D (An et al. report 60 to 87% time savings), to ship or store parts flat and fold them on site, for decorative pieces (flowers, lampshades), educational demonstrations, one-time deployable parts such as a hinge that opens or closes when it gets wet, or moulds and prototypes where exact angles don't matter (An et al. 2018; CMU News 2018; Wikipedia, 4D printing).
- **when_not_to_use**: Avoid it where you need exact dimensions or angles (print the 3D shape directly or use a print-in-place hinge with stops), where a joint must move back and forth many times (use a print-in-place hinge or living hinge), for load-bearing parts (use thicker printed parts or proper joints), for parts that will get hot in use (a PLA fold softens and can move again above about 60 degrees C), and if you have no way to print two materials (use a single-material PLA method or a manual fold with a living hinge).
- **environment_limits**: PLA versions soften above about 60 to 65 degrees C (An et al. 2018), so a folded PLA part can sag or re-shape in a hot car or dishwasher, and it will try to return to its programmed shape if reheated (shape memory; An et al. 2018). The hot water used for PVA locks can also deform PLA panels (Teaching Tech, via Hackaday 2022). Gravity distorts large prints folding in air (An et al. 2018). *(unverified parts omitted)*
- **common_failures**: Folds too little or too much because filament brand, fan cooling or print speed differ from the design: test a single hinge first and adjust print speed or hinge length (An et al. 2018). Panels warp or curl as well as the hinges because they were printed fast or with stretch locked in: print panels slowly or with a stress-free fill (Hackaday 2025). Parts sag or collide while folding: fold under water, hold the centre panel, or change the fold order (An et al. 2018). PLA and TPU layers peel apart at the hinge edges: overlap the PLA 1 mm into the panels (An et al. 2018). Small holes appear at the ends of hinges, a side effect of the unfolding method (An et al. 2018). PVA locks dissolve too slowly or the hot water warps PLA: redesign locks to expose more PVA surface (Teaching Tech, via Hackaday 2022).
- **related**: 
  - Print-in-place hinge: moves freely many times but must be folded by hand
  - Living hinge: a thin bending hinge you fold yourself; self-folding hinges are living hinges that fold themselves
  - Origami mechanisms (waterbomb, Kresling, thick-panel origami): the fold patterns that self-folding prints often follow
  - Bistable compliant mechanism: snaps between two shapes when pushed, repeatedly, instead of changing once when heated
  - Mid-print embedding: pausing a print to add parts; the dissolvable-lock version often uses multi-material or separately printed locks
  - Heat staking: also uses heat to reshape plastic, but by melting a post into a rivet head rather than releasing stored stretch
  - Shape-memory alloy actuators (nitinol wire): metal that changes shape when heated, usable many times, but powered by electricity

### Pictures, videos and models

- **links**: 
  - [4D Printing - Mobile.gif (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:4d_printing_-_Mobile.gif): Animation of a 4D-printed object changing shape in reaction to water, used on the Wikipedia article 4D printing *(licence: CC BY 4.0 (Matthew Young))*
  - [4D Printing - gripper.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:4D_Printing_-_gripper.jpg): Time-lapse photos of a 4D-printed shape-memory gripper grabbing and releasing an object (Ge et al. 2016) *(licence: CC BY 4.0)*
  - [Flat to Folded: The Science of Shape-Shifting 3D Prints (CNC Kitchen, YouTube)](https://www.youtube.com/watch?v=5rnD4DyFmNs): Video of PLA and TPU prints folding themselves in hot water, based on Morphing Matter Lab research (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [4D Printing at home - Self assembling magic (Teaching Tech, YouTube)](https://www.youtube.com/watch?v=yNZ2mqYNLYI): Video of designing PLA, TPU and PVA dissolvable-lock hinges that spring into shape in water (title and channel confirmed via YouTube oEmbed; video not watched) *(licence: link only)*
  - [Thermorph (Morphing Matter Lab)](https://morphingmatter.org/projects/thermorph): Project page with animated GIFs of flat prints folding into a rose, boat, chair and bunny *(licence: link only)*
- **make_it_yourself**: 
  - [Standard Hinge Thermorph (CNC Kitchen, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1207080-standard-hinge-thermorph): Simple self-folding test hinge; put into 70 degrees C water; printed in PLA and 40D TPU *(licence: CC0 (Public Domain))*
  - [Rose Flower Thermorph (CNC Kitchen, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1207087-rose-flower-thermorph): Flat print that folds into a rose in 70 degrees C water *(licence: CC BY)*
  - [Twist Ring Thermorph (CNC Kitchen, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1203906-twist-ring-thermorph): Self-twisting ring demonstrator, PLA and TPU, triggered at 70 degrees C *(licence: CC BY)*
  - [Snake Thermorph (CNC Kitchen, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1207074-snake-thermorph): Self-coiling snake demonstrator, PLA and TPU, triggered at 70 degrees C *(licence: CC0 (Public Domain))*
  - [4D printing test piece (Teaching Tech, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/324474-4d-printing-test-piece): Dissolvable-lock self-assembling piece: PLA body, firm TPU corners and PVA locks; needs a three-material printer *(licence: CC BY)*
- **diagram_idea**: A three-step strip cartoon: a flat print with a hinge made of a stretched PLA layer on a TPU layer (arrows showing locked-in stretch), the print dropped into 70 degrees C water with the PLA shrinking, and the hinge curled up into a fold, with an inset of a PVA lock dissolving to release a bent TPU spring.
- **sources**: 
  - https://en.wikipedia.org/wiki/4D_printing
  - https://morphingmatter.org/s/thermorph.pdf
  - https://morphingmatter.org/projects/thermorph
  - https://morphingmatter.org/projects/a-line
  - https://www.cmu.edu/news/stories/archives/2018/april/self-folding-materials.html
  - https://hackaday.com/2022/11/29/diy-self-assembling-4d-printing/
  - https://hackaday.com/2025/02/27/thermorphs-self-folding-3d-prints/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC6515691/
  - https://arxiv.org/abs/2603.27152
  - https://selfassemblylab.mit.edu/4d-printing
  - https://commons.wikimedia.org/wiki/File:4d_printing_-_Mobile.gif
  - https://commons.wikimedia.org/wiki/File:4D_Printing_-_gripper.jpg
  - https://en.wikipedia.org/wiki/Heat-shrink_tubing
  - https://en.wikipedia.org/wiki/Shrinky_Dinks
  - https://en.wikipedia.org/wiki/Bimetallic_strip
  - https://www.youtube.com/watch?v=5rnD4DyFmNs
  - https://www.youtube.com/watch?v=yNZ2mqYNLYI
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, everyday_examples, making_tips_3d_printing, off_the_shelf_parts, power, reuse_cycles, safety_notes, tools_needed

## 55 Print-in-place hinge

*print-in-place & 3D-printing joints.* A hinge printed already assembled, with cone-shaped pins and a small gap so it moves straight off the print bed

### What it is

- **plain_name**: A hinge that comes off the 3D printer already put together and able to swing: two flaps with interleaved rings (knuckles) around a built-in pin, printed with a tiny gap between the moving surfaces so they don't stick together
- **term**: Print-in-place hinge (non-assembly knuckle hinge, usually with cone-shaped pins)
- **aliases**: 
  - cone hinge or conical hinge (Printables 'Print-in-Place Hinge Clearance Tester' calls them 'print-in-place conical hinges')
  - print-in-place knuckle hinge (BOSL2 OpenSCAD library: knuckle_hinge() with in_place=true makes 'interlocking cones instead of leaving a hole for an inserted pin')
  - print-in-place butt hinge (Printables 'Print In Place Butt Hinge'; rohingosling's 'Parametric Butt Hinge')
  - non-assembly hinge or non-assembly revolute joint (research term: Anghel et al., 'A New Approach to Optimize the Relative Clearance for Cylindrical Joints Manufactured by FDM 3D Printing', Processes 2021)
  - integrated assembly (Formlabs' term for parts printed already assembled)
  - ball-and-socket print-in-place hinge (a variant with balls instead of cones; Greg Zumwalt's parametric hinged container on Hackaday.io) *(unverified parts omitted)*
- **family**: print-in-place & 3D-printing joints
- **other_families**: hinges & pivots
- **one_liner**: A hinge printed in one go with its pin already inside the knuckles and a small gap all round, so it turns as soon as it comes off the print bed with no assembly or metal pin.
- **complexity**: A few parts that print as one job: two leaves (flaps), each with alternating knuckles (the rings that form the barrel), and a built-in pin. In the common cone design each knuckle carries a cone-shaped bump that sits inside a cone-shaped socket in the next knuckle of the other leaf, so the two leaves are trapped together (BOSL2 hinges.scad). Other designs fuse a solid pin to one leaf and print the other leaf's knuckles around it with a gap (rohingosling's Parametric Butt Hinge), or use balls in sockets (Greg Zumwalt, Hackaday.io). Usually has screw holes in each leaf, or is printed straight onto a box and its lid.
- **how_it_works**: The designer leaves a small, even gap (clearance), typically 0.2-0.5 mm, between every surface that must move: between neighbouring knuckles and between each pin and its socket (BOSL2; Prusa; Printables hinge models). The printer builds both leaves at the same time, and because the gap is wider than the plastic squashes out sideways, the two leaves never fuse. Cones are used instead of a straight pin because the underside of a cone slopes at about 45 degrees, which a printer can build without support material (overhang), whereas a straight pin inside a hole would have to be printed over thin air (BOSL2; Prusa 'Modeling with 3D printing in mind'). The cones point along the hinge line, so the leaves can turn but cannot pull apart.

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): lets a lid, door, flap or arm swing open and shut
  - join and hold: keeps the two leaves permanently attached to each other, because the cones are trapped in their sockets
- **motion**: rotate: usually up to about 180 degrees for a flat butt-style hinge; some designs open further, e.g. 285 degrees in total (Printables 'Parametric hinge - horizontally printed - print-in-place') or 'more than 180 degrees' (Printables 'Parametric Hinges (print in place)'). A hinge printed onto a box usually stops when the lid hits the box.
- **degrees_of_freedom**: 1 intended: turning about the hinge line. The printed gap gives a little extra wobble and sideways shift, so in practice there is a small amount of unwanted movement in the other directions (see play_and_precision).
- **special_behaviour**: none: a basic print-in-place hinge just turns freely; it does not click, lock or limit force. Variants add click positions (see the entry 'Detent hinge') or gears (see 'Geared hinge')
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the cone pins sit inside cone sockets, so the leaves cannot be pulled apart along or across the hinge line
  - not a holding joint (it moves or passes on motion): its job is to let the two parts turn
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent: the two leaves are trapped together as printed and can only be separated by breaking a knuckle or pin. The hinge as a whole is fixed to a project with screws (removable) or is printed as part of the object (permanent).
- **reuse_cycles**: not applicable to taking apart (it never comes apart). *(unverified parts omitted)*
- **tools_needed**: none to assemble. A screwdriver is needed only for mounting screws. *(unverified parts omitted)*
- **seal**: none: the gap around the knuckles is open; the hinge does not seal
- **load**: light to medium: fine for box lids, covers, small doors and toys. The weak points are the small printed pins or cones and the layer lines through the knuckles; the gap also means the load rests on only a few small contact points. Some designs are sold as strong enough for furniture doors and chest lids when printed in PETG or ASA (designer's claim, Printables 'Print in Place Hinge - PETG/ASA - High Strength 300'), and a print-in-place geared hinge, which spreads the weight along the length of its gear teeth, held about 210 lb of dumbbells (Hackaday 'One-piece Geared Hinge Can Take The Weight'). *(unverified parts omitted)*
- **adjustable**: No: the gap is fixed when the part is designed and printed. Parametric models let you change the clearance before printing (BOSL2 gap parameter; Fusion 360 parameters in Printables 'Print-in-Place Hinge Clearance Tester' and 'Print In Place Butt Hinge').
- **play_and_precision**: small to noticeable play: the leaves can wobble by about the printed gap (typically 0.2-0.5 mm), more than a metal hinge. It is not a precise pivot, and it tolerates no misalignment of its own parts, because they are fixed by the print. *(unverified parts omitted)*
- **access_needed**: not applicable: it is made as part of the print. If it is screwed onto something, the screws go in from the front of each leaf (one side only).
- **materials**: Printed in the same plastic as the rest of the part. PLA is the most common for FDM (e.g. Printables 'Print in Place Hinge' by remotelove, printed in PLA; Greg Zumwalt's hinged container, PLA), but one designer warns PLA is too brittle and wears or deforms over time and designs his strong hinges for PETG or ASA only (Printables 'LR Basics' 300-series hinge). Powder-bed nylon (SLS) suits print-in-place parts well because the loose powder supports the parts and no support structures are needed (Formlabs 'How to 3D Print Interlocking Parts and Assemblies'). Resin (SLA) print-in-place hinges are possible with a wider 0.5 mm gap so liquid resin can be washed out (Formlabs 'Beyond Build Volume'), although Formlabs does not generally recommend printed-assembled parts in SLA for that reason.
- **maker_difficulty**: easy: it prints in one piece with no supports and no assembly; the catch is that it only works if the printer is well calibrated (first layer, flow) and the clearance suits your printer, so print a clearance test first

### Making it

- **processes**: 
  - 3D print (FDM): the usual way; the hinge prints in one job with no supports
  - 3D print (resin): possible with a gap of about 0.5 mm so uncured resin can be washed out of the joint (Formlabs 'Beyond Build Volume'); Formlabs otherwise advises against printed-assembled parts in SLA because trapped resin is hard to clean (Formlabs 'How to 3D Print Interlocking Parts')
  - 3D print (SLS or MJF powder-bed nylon): well suited, because the loose powder holds the parts apart and no supports are needed (Formlabs 'How to 3D Print Interlocking Parts')
  - not suited to CNC, laser cutting or woodwork, which cannot make parts already assembled; those make separate leaves and add a pin
- **print_in_place**: yes: both leaves and the pin print together and the hinge works straight off the print bed (Printables 'Print-in-Place Simple Hinge (no supports needed)': 'two parts that print in a single STL file and work right off the print bed').
- **making_tips_3d_printing**: 1) Print a clearance test first. Suggested starting gaps: 0.2 or 0.3 mm (Printables 'Print-in-Place Hinge Clearance Tester'), at least 0.3 mm for moving parts on a Prusa (Prusa knowledge base 'Modeling with 3D printing in mind'), 0.2 mm (BOSL2 knuckle_hinge default gap), or 0.5 mm, which 'should work on just about any printer' (Printables 'Print In Place Butt Hinge'). 2) Don't scale a finished print-in-place model in the slicer: scaling changes the gap too, so a scaled-up hinge gets loose and a scaled-down one fuses. Change the size in the CAD model instead (Greg Zumwalt, 'Designing a Parametric Print in Place Hinged Container', Hackaday.io). 3) Use cones (or balls) rather than a straight pin so every surface can be printed without support: BOSL2's default cones slope at 45 degrees, and a steeper, pointier cone is harder to print (BOSL2 hinges.scad); printers cleanly print overhangs of 45-60 degrees (Prusa). 4) Orientation: most hinges are printed lying flat with the hinge line parallel to the bed. One guide says this makes the plastic strands run along the pin, giving the most strength, while a pin printed standing upright is a stack of thin discs that can snap along a layer line (Snapmaker blog '3D Printed Hinges'). 5) Watch the first layer: the first layer is squashed wider than designed (elephant's foot), which can close the gap at the bottom of the hinge and weld the knuckles together. Turn on elephant-foot compensation (about 0.2 mm for a 0.4 mm nozzle, Prusa knowledge base 'Elephant foot compensation'), check the nozzle height, or add a small chamfer to the bottom edges of the knuckles (Snapmaker blog). 6) Over-extrusion also fills the gap; lowering the flow by 2-5% is one suggested fix (Snapmaker blog). 7) Slicer settings from one tested PETG/ASA hinge: 0.4 mm nozzle, 0.2 mm layers, 3 perimeters, 15% infill, 'Fill gaps' off and 'Avoid crossing perimeters' on (Printables 'Print in Place Hinge - PETG/ASA - High Strength 300'). 8) Nozzle and layer height matter, so use the settings the designer tested: one PLA hinge was designed for a 0.6 mm nozzle at 0.2 mm layers, with 0.2 mm the likely minimum layer height (Printables 'Print in Place Hinge' by remotelove). 10) For a stronger hinge that carries real weight, consider a print-in-place geared hinge (Hackaday). *(unverified parts omitted)*
- **off_the_shelf_parts**: None needed for the hinge itself. Screws to mount it, depending on the design: M3 button-head screws (Printables, remotelove), M4 countersunk screws (Printables, Andrew Nelson), 4.5-5 mm countersunk wood screws (Printables, Metikumi), or #6/#8 screws (Printables, EcoDad). Alternatives if you'd rather assemble a hinge: print the leaves separately and use a length of 1.75 mm filament, a metal rod or a screw as the pin (BOSL2's regular knuckle hinge defaults to a 1.75 mm pin hole and can take a screw such as M3 or #6); or buy a metal 'butt hinge' or 'piano hinge' ('continuous hinge').
- **rules_of_thumb**: 
  - Start with a gap of at least 0.3 mm between parts that must move on a well-calibrated FDM printer (Prusa knowledge base 'Modeling with 3D printing in mind').
  - BOSL2's print-in-place knuckle hinge uses a 0.2 mm default gap between hinge segments, 45-degree interlocking cones by default, and a cone base diameter 1 unit smaller than the knuckle diameter; a pointier cone gives a smaller gap for the same setting (BOSL2 hinges.scad).
  - Cone-hinge clearance tests suggest starting at 0.2-0.3 mm and adjusting (Printables 'Print-in-Place Hinge Clearance Tester', Ed Johnson); a 0.5 mm gap 'should work on just about any printer', with 0.25 mm for tighter hinges (Printables 'Print In Place Butt Hinge', Andrew Nelson).
  - Interlocking FDM parts in general need about 0.5 mm clearance, SLA and SLS about 0.2 mm, material jetting about 0.1 mm (Hubs 'How to design interlocking joints for 3D printed parts').
  - Print-in-place clearance for SLS: 0.3 mm for small features and 0.6 mm for larger ones; SLA integrated assemblies are not recommended because resin is trapped between the parts (Formlabs 'How to 3D Print Interlocking Parts and Assemblies').
  - Resin (SLA) print-in-place hinges need about 0.5 mm clearance so uncured resin can be washed out of the joint; otherwise the hinge sets solid when cured (Formlabs 'Beyond Build Volume: Designing and 3D Printing Foldable and Retractable Parts').
  - FDM printers cleanly print overhangs of 45-60 degrees without supports, which is why cone pins are sloped at about 45 degrees (Prusa knowledge base 'Modeling with 3D printing in mind'; BOSL2 hinges.scad).
  - Elephant-foot compensation of about 0.2 mm suits a 0.4 mm nozzle; without it the squashed first layer can fill small gaps near the bed (Prusa knowledge base 'Elephant foot compensation').
  - Never scale a print-in-place model; scaling scales the clearance too (Greg Zumwalt, Hackaday.io 'Designing a Parametric Print in Place Hinged Container', which uses a 0.4 mm 'Tolerance' parameter for most printers).

### When to use it

- **everyday_examples**: 
  - Printed boxes, lockets and pill boxes with a hinged lid, sold or shared as 'print-in-place' models (e.g. Printables 'Disposal Box with Print in Place Hinge', 'Secret compartment / Hex Cross Locket <Print in Place Hinge>')
  - Folding fidget cubes, whose cube sections are joined by print-in-place hinges (Wikimedia Commons photo 'Print in place Fidget Cube')
  - Replacement doors and hinges people print for their 3D printers and cabinets (e.g. Printables 'Print In Place K1 Max 270 Door Hinges w/Door Latch')
  - It looks and works like the metal door hinge (butt hinge) on a house door: two leaves, interleaved knuckles and a pin (Wikipedia 'Hinge')
- **when_to_use**: Use it when you want a real turning hinge in a 3D-printed project without buying hardware or assembling anything: box and case lids, flaps over ports, small cabinet doors, folding stands, toys and fidgets, and prototypes. It lasts much longer than a printed living hinge in stiff plastics such as PLA or PETG, because it turns instead of bending. It is ideal when the hinge can be printed as part of the object itself, so the whole thing comes off the printer ready to use.
- **when_not_to_use**: Avoid it when the hinge must be precise or free of wobble (use a metal hinge, or a printed hinge with a metal pin), when it must carry heavy or shock loads (use a metal hinge, or a print-in-place geared hinge that spreads the load), when you can't calibrate your printer or tune the clearance, when it needs to come apart for cleaning or replacement (use a snap-together or pin hinge), or when printing in resin without a way to wash liquid resin out of the joint. For a thin one-piece lid that folds only now and then in a bendy plastic, a living hinge is simpler.
- **environment_limits**: Limited by the printing plastic. In an oven test under load, PLA started to give at 60 °C and failed at about 65 °C, PETG gave at 80 °C and ASA held until about 110 °C (CNC Kitchen 'Comparing PLA, PETG & ASA'), so a PLA hinge left in a hot car or in sunlight behind glass can sag or seize. *(unverified parts omitted)*
- **safety_notes**: None known beyond ordinary pinch points between the leaves when closing. Breaking a stuck hinge free by force can snap it and leave sharp edges.
- **common_failures**: 1) Fused solid: the gap was too small for the printer, the first layer squashed out (elephant's foot), or the printer over-extruded; fix with a larger gap, elephant-foot compensation, a chamfer on the bottom edges or slightly lower flow (Snapmaker blog; Prusa knowledge base). 2) Too loose and wobbly: the gap was too big or the model was scaled up in the slicer (Hackaday.io, Greg Zumwalt). 3) Pin or cone snaps: the hinge was printed so the pin runs up through the layers, or the material is too brittle; print it lying flat and use PETG or ASA for heavy use (Snapmaker blog; Printables 'LR Basics' hinge). 4) Rough or sticky movement from sagging overhangs and strings inside the gap: 'some roughness between the horizontal overhanging surfaces' was noted on a printed fidget cube (Wikimedia Commons 'Print in place Fidget Cube'); keep overhangs at about 45 degrees (BOSL2; Prusa). 5) Resin hinges set solid because uncured resin stayed in the joint; use at least 0.5 mm gap and wash well (Formlabs). 6) Screw holes cracking when the mounting screws are overtightened; tighten by hand (Printables 'LR Basics' hinge).
- **related**: 
  - Living hinge: bends a thin strip of plastic instead of turning on a pin; no play at all, but in PLA or PETG it cracks after a few dozen folds
  - Geared hinge (continuous gear hinge): two toothed edges roll on each other and can also print in place; spreads the load along its length, so it is stronger and moves both leaves evenly
  - Detent hinge (click hinge): adds bumps and notches so the hinge clicks and holds at set angles
  - Friction hinge (torque hinge): stays at whatever angle you leave it; a print-in-place hinge normally swings freely
  - Snap-together or pin hinge printed as separate parts: leaves printed apart and joined with a snap-in pin, filament or metal rod; can be taken apart and has less play when a metal pin is used
  - Flexure hinge: a precise, play-free pivot made by bending, for small angles only *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Print in place Fidget Cube (Wikimedia Commons, photo by Gary C Martin, 2014)](https://commons.wikimedia.org/wiki/File:Print_in_place_Fidget_Cube.jpg): Photo of a 3D-printed folding fidget cube printed on an Ultimaker 2; the author notes that the print-in-place hinges work well, with some roughness on horizontal overhanging surfaces *(licence: CC BY 2.0)*
  - [Basic hinge diagram (Wikimedia Commons, by A loose necktie)](https://commons.wikimedia.org/wiki/File:Basic_hinge.svg): Simple diagram of a hinge, used on Wikipedia's 'Hinge' article to name the pin, knuckles and leaves; a print-in-place hinge has the same parts *(licence: CC0 1.0 (public domain dedication))*
  - [How to design 3D Printable Hinges - Make moving parts! (YouTube, Maker's Muse)](https://www.youtube.com/watch?v=7JhjhgjchfM): Video demonstrating several printable hinge types, including snap-together, print-in-place and living hinges (as described by the Raspberry Pi Official Magazine article '3D Printed Hinges'); title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
  - [Learn 15 Print-in-Place Mechanisms in 15 Minutes (YouTube, Slant 3D)](https://www.youtube.com/watch?v=AAKsl8zW-Ds): Video covering printed springs, flexures and print-in-place hinges (as described by Hackaday, 11 May 2025); title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Print-in-Place Hinge Clearance Tester (Ed Johnson, Printables)](https://www.printables.com/model/379256-print-in-place-hinge-clearance-tester): Quick test prints of print-in-place conical hinges in vertical and horizontal orientations, with Fusion 360 source whose parameters set the clearance and size; the author suggests starting at 0.2 or 0.3 mm. URL from search results; details read through the Printables public API. *(licence: Creative Commons Public Domain)*
  - [BOSL2 hinges.scad: knuckle_hinge(in_place=true) (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad): Parametric OpenSCAD module that makes a knuckle hinge; with in_place=true it builds interlocking cones for a print-in-place hinge, with adjustable gap (default 0.2 mm), cone angle (default 45 degrees) and cone diameter *(licence: BSD 2-Clause)*
  - [Print In Place Butt Hinge (Fusion 360 File Included) (Andrew Nelson, Printables)](https://www.printables.com/model/484877-print-in-place-butt-hinge-fusion-360-file-included): A 40 x 50 mm print-in-place butt hinge with no supports and M4 countersunk holes, in 0.50 mm and 0.25 mm clearance versions, with a Fusion 360 file showing how to change the gap. URL from search results; details read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Hinge Print In Place - Parametric (VC Design, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1074101-hinge-print-in-place-parametric): A widely downloaded print-in-place hinge supplied with a STEP file for customising; printed flat. Details read through the Printables public API. *(licence: CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives))* *(unverified parts omitted)*
- **diagram_idea**: A cut-away view along the hinge line showing five alternating knuckles from two leaves (two colours), with cone-shaped bumps on one colour sitting in cone-shaped sockets in the other and a thin highlighted gap (0.3 mm) around every contact; a small inset shows the print-bed side view with the 45-degree cone underside printing without support, and a second inset shows a squashed first layer (elephant's foot) bridging the gap and welding the knuckles.
- **sources**: 
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/elephant-foot-compensation_114487
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
  - https://formlabs.com/blog/beyond-build-volume-designing-and-3d-printing-foldable-and-retractable-parts/
  - https://www.snapmaker.com/blog/3d-printed-hinges/
  - https://hackaday.io/project/163849-designing-a-parametric-print-in-place-hinged-con
  - https://hackaday.com/2025/05/11/learn-15-print-in-place-mechanisms-in-15-minutes/
  - https://hackaday.com/2022/01/24/one-piece-geared-hinge-can-take-the-weight/
  - https://magazine.raspberrypi.com/articles/3d-printed-hinges
  - https://en.wikipedia.org/wiki/Hinge
  - https://commons.wikimedia.org/wiki/File:Basic_hinge.svg
  - https://commons.wikimedia.org/wiki/File:Print_in_place_Fidget_Cube.jpg
  - https://commons.wikimedia.org/wiki/File:CreativeTools.se_-_PackshotCreator_-_Hinge_v01_(4668460409).jpg
  - https://www.youtube.com/watch?v=7JhjhgjchfM
  - https://www.youtube.com/watch?v=AAKsl8zW-Ds
  - https://api.printables.com/graphql/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://raw.githubusercontent.com/rohingosling/OpenSCAD/master/README.md
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.3390/pr9060925

### Other info

- **Fields with unverified parts:** aliases, environment_limits, links, load, make_it_yourself, making_tips_3d_printing, play_and_precision, related, reuse_cycles, tools_needed

## 56 Heat-set threaded insert

*print-in-place & 3D-printing joints.* A knurled brass insert pressed into a plastic hole with a hot soldering iron, giving strong, reusable metal threads in a printed part

### What it is

- **plain_name**: A small ridged brass sleeve with a screw thread inside that you melt into a hole in a 3D print with a hot soldering iron, so the plastic part gets proper metal threads that screws can go in and out of many times
- **term**: Heat-set threaded insert (heat-staking insert)
- **aliases**: 
  - heat-set insert, heat insert (common maker names; Hubs, CNC Kitchen)
  - heatfit insert (name used in the NopSCADlib OpenSCAD library)
  - heat-staking insert (PEM and Protolabs)
  - ultrasonic insert (the same kind of insert installed by ultrasonic vibration instead of a hot tip; PEM 'Ultrasonic/Heat-Set Inserts')
  - threaded insert, insert nut or threaded bushing (the general term; Wikipedia 'Threaded insert')
  - tapered heat-set insert, straight heat-set insert, any-orientation (symmetrical) heat-set insert, male heat-set insert (catalogue variants; McMaster-Carr, PEM) *(unverified parts omitted)*
- **family**: print-in-place & 3D-printing joints
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A knurled metal nut-like sleeve pressed into a plain hole with a hot soldering iron, so the melted plastic grips it and the part gets strong, reusable metal threads.
- **complexity**: A few parts: the insert (a short brass sleeve, knurled or ridged outside and threaded inside), the printed part with a plain hole sized for it, and the screw or bolt that later goes into it. Installing it needs a soldering iron, ideally with a matching insert tip.
- **how_it_works**: The hole is printed slightly smaller than the outside of the insert. A hot soldering iron heats the insert, which melts a thin layer of the plastic it touches as it is pushed down into the hole (Wikipedia 'Threaded insert'; Hubs). The softened plastic flows into the knurls and grooves on the outside of the insert, and when it cools it hardens around them, locking the insert against both turning and pulling out; many inserts use left- and right-hand knurls on different bands to resist both (PEM). Screws then go into the insert's metal thread instead of into plastic, so they can be tightened harder and removed many times without wearing the thread out (CNC Kitchen; Hubs).

### Finder attributes

- **job**: join and hold: gives a printed or plastic part a strong, reusable metal screw thread so another part can be bolted on and taken off again
- **motion**: none
- **degrees_of_freedom**: 0: once set, the insert cannot move, and the screw clamps the parts together rigidly
- **holding_principle**: 
  - shape (the parts interlock; form-fit): melted plastic sets around the knurls and grooves of the insert, so it can't turn or pull out (PEM; Wikipedia 'Threaded insert')
  - friction or clamping (force-fit): the screw that goes into it clamps the two parts together
- **input_output**: not applicable
- **power**: passive (no power needed). A soldering iron is needed only to install it.
- **removability**: removable: the screw can be taken out and put back many times. The insert itself is semi-permanent: it can be heated and pulled back out with a screw and a hot extractor tool (CNC Kitchen 'How to use our Threaded-Insert Removal Tool'), but it is meant to stay in.
- **reuse_cycles**: many times: metal threads allow repeated assembly and disassembly (Hubs 'How to assemble 3D printed parts with threaded fasteners'); CNC Kitchen calls heat-set inserts 'the king for durable connection that you want to use over and over'. A removed insert can often be reused in prototypes, but not moved from a PLA part into a PETG part because of the old plastic stuck to it (CNC Kitchen removal-tool article).
- **tools_needed**: soldering iron, ideally temperature-controlled, with a matching insert tip or a conical tip; something flat (a screwdriver, tweezers or a flat plate) to press the insert flush; optionally a heat-set press or a drill-press-style jig to keep it straight. Afterwards a screwdriver or hex key for the screws.
- **seal**: none: it doesn't seal; water or air can pass along the screw thread
- **load**: medium: much stronger than screwing straight into plastic when twisted, and at least as strong when pulled. CNC Kitchen's tests of M3 inserts: in PLA, good inserts held 157-181 kg before pulling out (screwing directly into the plastic held 142 kg, and a cheap insert with straight knurls only 39 kg), and they survived 3-4 Nm of twisting until the screw head sheared, against about 1 Nm for a screw in plastic ('Threaded Inserts for 3D Prints - Cheap VS Expensive', 2019). In PETG an insert held 119 kg pull and 3 Nm twist, against 118 kg and 1 Nm for direct screwing ('Helicoils, Threaded Insets and Embedded Nuts in 3D Prints', 2020). Pull-out strength depends mostly on the plastic around the insert, so thin walls or few perimeters make it weaker.
- **adjustable**: no: it is a fixed threaded anchor; any adjustment comes from the screw or the parts being joined
- **play_and_precision**: small: the metal thread fits screws like any metal nut. The main precision issue is getting the insert in straight and flush; a tilted insert makes the screw go in at an angle and the mating part may not sit flat (CNC Kitchen 'Tips & Tricks for Heat-Set Inserts').
- **access_needed**: one side only (blind): the insert goes into a hole from its open face, and the screw goes in from the same side, so the back of the part never needs to be reached
- **materials**: Inserts are usually brass; stainless steel and aluminium versions also exist (McMaster-Carr 'Heat-Set Inserts'). They suit thermoplastics that melt and re-harden: PLA, PETG, ABS and ASA prints (CNC Kitchen) and powder-bed nylon (SLS and MJF; Protolabs). Amorphous plastics are the most forgiving; semi-crystalline plastics need more energy; thermosets cannot take them at all (PEM). Resin prints (SLA) are heat-sensitive thermosets, so inserts are glued in with thick superglue or two-part epoxy instead (CNC Kitchen tips), or screw-to-expand inserts are set in epoxy (Protolabs).
- **maker_difficulty**: easy: needs only a soldering iron, though getting inserts straight, flush and without a plastic burr underneath takes a few practice pieces and the right hole size

### Making it

- **processes**: 
  - 3D print (FDM): the most common use; print a plain hole and melt the insert in afterwards
  - 3D print (SLS or MJF nylon): tapered heat-staking inserts pressed in with a soldering iron (Protolabs)
  - 3D print (resin): not melted in; glue inserts in with thick superglue or epoxy (CNC Kitchen), or use screw-to-expand inserts set in epoxy (Protolabs)
  - injection-moulded and machined thermoplastic parts: installed in industry by heat-staking or ultrasonic machines (PEM; Wikipedia)
  - off-the-shelf part: the insert itself is always bought
- **print_in_place**: partly: the part prints with a plain hole ready for the insert, and the bought metal insert is melted in after printing. (Inserts can also be dropped into a pocket mid-print; see the entry 'Mid-print embedding'.)
- **making_tips_3d_printing**: 1) Hole size: follow the insert maker's size, but remember printed holes come out small. CNC Kitchen measured printed holes about 0.25 mm smaller than drawn and recommends drawing the hole 0.2-0.3 mm larger than the nominal size, e.g. 4.2 mm in CAD for an M3 insert whose drilled-hole size is 4.0 mm; the insert should just pre-seat with a bit of resistance ('Are Our Heat-Set Insert Datasheets Wrong?', 2026). Print a hole-size test block first (CNC Kitchen 'Hole Size Test for Heat-Set Inserts'). 2) Hole shape: straight, not tapered, and normally with no chamfer at the top (CNC Kitchen tips), unless you use tapered inserts, which are easier to line up in the hole (McMaster-Carr). 3) Hole depth: make blind holes about 1 mm deeper than the insert so melted plastic has somewhere to go; through-holes should be no longer than the insert (CNC Kitchen tips). 4) Walls: give the insert plenty of plastic around it; print with at least 3-4 perimeters around the hole (CNC Kitchen hole-test instructions). Hubs' general rule is a wall at least as thick as the screw diameter (e.g. 5 mm around an M5 thread), and Protolabs suggests about 6.35 mm (0.25 in) of space around an insert that is surrounded on all sides. 5) Temperature: set the iron 10-20 °C above the printing temperature: about 225 °C for PLA, 245 °C for PETG and 265 °C for ABS (CNC Kitchen tips); others use lower settings, e.g. 200 °C with a conical bit (NopSCADlib) or 210 °C (CNC Kitchen's 2019 test). 6) Technique: sit the insert on the hole, put the tip in it and push gently; melt it in only about 90% of the way, then press the last bit flush with a flat tool (a screwdriver, tweezers or a flat-faced 'insert straightener') and hold it for a few seconds until the plastic sets, because inserts tend to creep back up (CNC Kitchen tips). Use as little force as possible; if the hole is too tight, enlarge it in 0.1 mm steps (CNC Kitchen tips). 7) Keep it straight: a proper insert tip has a centring pin that fits the insert's bore so it goes in square rather than at an angle, and a flat shoulder that pushes on the insert, not the plastic (CNC Kitchen tips); a press or drill-press-style jig also helps. Large inserts (M5, 1/4 in camera thread) need a thick tip and a slightly higher temperature because they soak up a lot of heat (CNC Kitchen tips). 8) If the screw is hard to turn after installing, a burr of melted plastic has formed under the insert: make the next hole slightly larger (CNC Kitchen tips). 9) Choose good inserts: inserts with knurls in two directions and a chamfered lead-in installed more easily and held about four times better than cheap ones with only straight knurls (CNC Kitchen 'Cheap VS Expensive'). 10) Print hole-size tests in each orientation you use, because holes printed on their side come out a different size from holes printed upright (CNC Kitchen tips mention testing 'in various printing orientations'). 11) Inserts that are too long can be shortened by cutting between two knurl bands with a hacksaw (CNC Kitchen tips). 12) Heat-set inserts suit 'virtually all thermoplastics', i.e. everything normally printed on an FDM printer (CNC Kitchen tips).
- **off_the_shelf_parts**: Search supplier catalogues for 'heat-set inserts for plastic', 'heat-staking inserts', 'ultrasonic inserts' or 'threaded inserts for 3D printing'. Variants: tapered, straight, 'any-orientation' (symmetrical, install either way up), flanged, and male (threaded stud) heat-set inserts (McMaster-Carr; PEM tapered IUA/IUB/IUC, straight piloted IUTA/IUTB/IUTC and symmetrical ISA/ISB/ISC families). Sizes run from about M1.4 to M8 and 0-80 to 3/8-16 (Protolabs). Common maker sizes: M3 inserts about 3-5.8 mm long and 4.6 mm across the top for a 4.0 mm hole, M4 for a 5.6 mm hole and M5 for a 6.4 mm hole (NopSCADlib inserts.scad). Screws: ordinary machine screws (e.g. M3 socket-head cap screws). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Draw the hole 0.2-0.3 mm larger than the insert's nominal hole size, because printed holes come out about 0.25 mm small; for M3 inserts 4.2 mm in CAD kept about 90% of the maximum strength with no burr (CNC Kitchen 'Are Our Heat-Set Insert Datasheets Wrong?', 2026).
  - M3 insert pull-out strength reached about 1400 N (roughly 150 kg) in tight holes and fell sharply once the hole was too big (CNC Kitchen 'Are Our Heat-Set Insert Datasheets Wrong?').
  - Soldering iron 10-20 °C above printing temperature: about 225 °C PLA, 245 °C PETG, 265 °C ABS; melt in 90% of the way, then press flush and hold (CNC Kitchen 'Tips & Tricks for Heat-Set Inserts', 2021).
  - Blind holes about 1 mm deeper than the insert; straight, untapered holes; normally no chamfer (CNC Kitchen tips).
  - Minimum wall around a threaded hole equal to the screw diameter, e.g. 5 mm for M5 (Hubs 'How to assemble 3D printed parts with threaded fasteners').
  - About 6.35 mm (0.25 in) of space around an insert that is surrounded by features on all sides (Protolabs 'Threading and Inserts for 3D Printing').
  - Industrial heat-staking sets the tool about 20 °C (50 °F) above the plastic's melting temperature; thermosets cannot take heat-set or ultrasonic inserts (PEM 'Ultrasonic/Heat-Set Inserts').
  - In M3 tests inserts took 3-4 Nm of twisting before the screw head sheared, against about 1 Nm for screws straight into PLA or PETG (CNC Kitchen 2019 and 2020 tests); even 1 Nm on an M3 screw gives more than 1500 N of clamping force, which is plenty for most printed assemblies (CNC Kitchen 2020).
  - Hole sizes used by the NopSCADlib library: 3.2 mm for M2, 4.0 mm for M2.5 and M3, 5.6 mm for M4 and 6.4 mm for M5 inserts (NopSCADlib vitamins/inserts.scad).

### When to use it

- **when_to_use**: Use heat-set inserts when a printed part will be screwed together and taken apart more than a few times, when a screw must be tightened firmly without stripping, or when you need a small metric thread (M2-M5) that would be too fine to print or would wear out if screwed straight into plastic: electronics enclosures, printer parts, jigs, mounts and anything serviced regularly. They need only one side of the part to be reachable.
- **when_not_to_use**: Skip them for parts screwed together only once or twice, where a self-tapping screw into a plain hole is simpler; for resin (SLA) prints and other thermosets, where you should glue inserts in or use a nut trap; for very thin walls with no room for the insert (use a nut trap, a through-bolt and nut, or a press-fit insert); and for large coarse threads such as jar lids, which can be printed directly (see 'Printed screw thread'). If you have no soldering iron, a captive nut pocket (nut trap) gives metal threads with no tools.
- **environment_limits**: The insert holds only as well as the plastic around it. PLA started to give at 60 °C and failed at about 65 °C in an oven test, PETG at 80 °C and ASA at 110 °C (CNC Kitchen 'Comparing PLA, PETG & ASA'), so an insert in a PLA part near a motor, heater or in a hot car can loosen, tilt or pull out. Brass itself is unaffected by the temperatures a printed part can survive. *(unverified parts omitted)*
- **safety_notes**: The soldering iron tip (about 200-265 °C) and the freshly set insert are hot enough to burn; hold inserts with tweezers, not fingers. Overheating the plastic gives off fumes, so don't use more heat than needed and work in a ventilated space (CNC Kitchen removal-tool article warns that too much heat 'risks generating harmful fumes').
- **common_failures**: 2) Insert not flush or springs back up: finish the last 10% with a flat tool and hold until it cools (CNC Kitchen tips). 3) Plastic burr under the insert makes the screw stiff or blocks it: the hole was too small; enlarge it slightly next time (CNC Kitchen tips). 4) Insert spins or pulls out: hole too large, too little wall or too few perimeters, too much heat that melted the surrounding plastic, or a cheap insert with only straight knurls, which rotated in softer ASA (CNC Kitchen 'Cheap VS Expensive'; 'Are Our Heat-Set Insert Datasheets Wrong?'). 5) A bulge of plastic around the insert: the hole was undersized; a flat-faced tool flattens it, and the next hole should be larger (CNC Kitchen tips). 6) Molten plastic pushed into the thread: hole too small or too shallow; blind holes need about 1 mm extra depth (CNC Kitchen tips). *(unverified parts omitted)*
- **related**: 
  - Captive nut pocket (nut trap): a hex pocket that holds an ordinary nut; needs no soldering iron and is strong when the nut is pulled against solid plastic, but needs a pocket bigger than the screw and access to insert the nut
  - Press-fit and expanding inserts (tap-in insert): pushed or tapped in cold and held by barbs or expansion; no heat needed, usually weaker in plastic
  - Self-tapping screw into plastic (thread-forming screw): screws straight into a plain hole; simplest, but in CNC Kitchen's tests only about 1 Nm of twisting before the plastic thread stripped and it wears out after a few uses
  - Mid-print embedding (captive nuts, magnets and bearings): pause the print and drop a nut or insert in, then print over it so it is trapped for good
  - Printed screw thread: threads printed straight into the part; fine for large coarse threads, but Hubs advises avoiding FDM threads smaller than M5
  - Thread repair coil (helical insert, e.g. Helicoil (brand)): in CNC Kitchen's PETG tests it was no stronger than screwing straight into the plastic
  - Heat staking (melted plastic rivet): uses the same soldering-iron heat to melt a plastic post into a rivet head, instead of setting a metal insert
  - Ordinary screw joint (bolt and nut): the baseline; the insert turns a plastic hole into the 'nut'

### Pictures, videos and models

- **links**: 
  - [Tips & Tricks for Heat-Set Inserts used in 3D printing (CNC Kitchen, 2021)](https://www.cnckitchen.com/blog/tips-and-tricks-for-heat-set-inserts): Illustrated installation guide: iron temperatures, pressing flush, hole depth, straightening and burr problems; CNC Kitchen also sells inserts (vendor) *(licence: link only)*
  - [Threaded Inserts for 3D Prints - Cheap VS Expensive (YouTube, CNC Kitchen)](https://www.youtube.com/watch?v=G-UF4tv3Hvc): Video installing and pull-testing and torque-testing three kinds of M3 insert against a screw straight into PLA; title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
  - [Are Our Heat-Set Insert Datasheets Wrong? (YouTube, CNC Kitchen)](https://www.youtube.com/watch?v=B5g7R53hcH4): Video testing how hole size changes insert strength and burr formation; embedded in the CNC Kitchen article of the same name; title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
  - [Press-in Insert (Wikimedia Commons, by Dhruvvasoya91)](https://commons.wikimedia.org/wiki/File:Press-in_Insert.png): Photo of a knurled threaded insert machined from free-cutting brass, the same general shape as a heat-set insert (the file is labelled press-in, not heat-set) *(licence: CC BY-SA 4.0)*
  - [A better way to add threads to your 3D prints (YouTube, Made with Layers (Thomas Sanladerer))](https://www.youtube.com/watch?v=HgEEtk85rAY): Video comparing heat-set inserts with self-tapping screws, printed threads, thread repair inserts, embedded and slotted nuts and self-forming threads (as described by Hackaday, 'Comparing Ways To Add Threads To Your 3D Prints', January 2025); title confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Hole Size Test for Heat-Set Inserts (CNC Kitchen, Printables)](https://www.printables.com/model/1648510-hole-size-test-for-heat-set-inserts): Test blocks with a range of hole sizes to find the right CAD diameter for your printer; print with 3-4 perimeters and choose the hole the insert's pilot just slips into. Made for CNC Kitchen inserts. URL from search results; details read through the Printables public API. *(licence: CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives))*
  - [Heat-Set Insert Test Block with Graduated Hole Sizes (Vladimir Gamalyan, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1444127-heat-set-insert-test-block-with-graduated-hole-siz): Parametric OpenSCAD block with a row of holes stepping up in 0.1 mm increments and guide tubes to keep the insert straight; recommends PETG or ABS for heat-set tests. Read through the Printables public API. *(licence: Creative Commons Public Domain)*
  - [NopSCADlib insert.scad and inserts.scad (OpenSCAD library by nophead)](https://raw.githubusercontent.com/nophead/NopSCADlib/master/vitamins/insert.scad): OpenSCAD modules that draw heat-fit inserts and cut the matching holes, with a table of insert lengths, diameters and hole sizes for M2-M5 inserts (including CNC Kitchen sizes); notes they can be pushed in with a conical soldering bit at 200 °C *(licence: GPL-3.0 or later)*
- **diagram_idea**: Three side-view frames of a printed block cut in half: (1) the brass insert sitting on a slightly smaller hole with a soldering iron tip inside it; (2) the insert halfway down, with arrows showing melted plastic flowing into its knurls; (3) the insert flush and cool with a screw threaded in, plus a small inset showing the 'wrong' result: a hole drawn too small leaving a plastic burr under the insert.
- **sources**: 
  - https://www.cnckitchen.com/blog/tips-and-tricks-for-heat-set-inserts
  - https://www.cnckitchen.com/blog/are-our-heat-set-insert-datasheets-wrong
  - https://www.cnckitchen.com/blog/threaded-inserts-for-3d-prints-cheap-vs-expensive
  - https://www.cnckitchen.com/blog/helicoils-threaded-insets-and-embedded-nuts-in-3d-prints-strength-amp-strength-assessment
  - https://www.cnckitchen.com/blog/how-to-use-our-threaded-insert-removal-tool
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.protolabs.com/resources/blog/threading-and-inserts-for-3d-printing/
  - https://www.pemnet.com/products-overview/products-threaded-inserts/threaded-inserts-ultrasonic-heat-staking-inserts/
  - https://www.mcmaster.com/products/heat-set-inserts/
  - https://en.wikipedia.org/wiki/Threaded_insert
  - https://commons.wikimedia.org/wiki/Category:Threaded_inserts
  - https://commons.wikimedia.org/wiki/File:Press-in_Insert.png
  - https://hackaday.com/2025/01/11/comparing-ways-to-add-threads-to-your-3d-prints/
  - https://www.youtube.com/watch?v=G-UF4tv3Hvc
  - https://www.youtube.com/watch?v=B5g7R53hcH4
  - https://www.youtube.com/watch?v=HgEEtk85rAY
  - https://raw.githubusercontent.com/nophead/NopSCADlib/master/vitamins/insert.scad
  - https://raw.githubusercontent.com/nophead/NopSCADlib/master/vitamins/inserts.scad
  - https://api.printables.com/graphql/
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, everyday_examples, off_the_shelf_parts, special_behaviour

## 57 Captive nut pocket (nut trap)

*print-in-place & 3D-printing joints.* A hexagonal pocket or side slot in a printed part that holds a nut so a bolt can be tightened without a spanner

### What it is

- **plain_name**: A six-sided hole or a side slot in a 3D print that an ordinary nut drops into and can't turn in, so you can tighten a bolt into it from the other side with just a screwdriver or hex key, and no spanner holding the nut
- **term**: Nut trap (captive nut pocket)
- **aliases**: 
  - nut trap (the usual 3D-printing and RepRap term; used by the NopSCADlib library's nut_trap() and BOSL2's nut_trap_side() and nut_trap_inline())
  - captive nut or captured nut (general term; Wikipedia 'Threaded insert' uses 'captive nut' for nuts held in a part, including cage nuts)
  - nut pocket, hex pocket or hex nut pocket
  - embedded nut (Hubs; CNC Kitchen)
  - nut boss (Hubs: 'a nut-shaped cavity (often referred to as a nut boss)')
  - side nut trap, nut slot or side-loading nut trap (the nut slides in from the side; BOSL2 nut_trap_side())
  - inline nut trap (pocket in line with the bolt; BOSL2 nut_trap_inline())
  - square nut slot (the same idea with a square nut, as used throughout Prusa printers; Prusa 'M3nS' nuts)
  - buried nut (a nut sealed in by printing over it mid-print; nophead, HydraRaptor blog; covered in its own entry 'Mid-print embedding')
- **family**: print-in-place & 3D-printing joints
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A hexagonal or square pocket shaped to hold a standard nut so it can't spin, giving a printed part a strong metal thread for a bolt at almost no cost.
- **complexity**: A few parts: the printed part with a hex (or square) pocket or side slot and a clearance hole for the bolt, a standard nut, and a bolt or machine screw. Optional extras: a small 'poke hole' behind a side slot for pushing the nut back out (BOSL2 nut_trap_side), and a one-layer 'sacrificial bridge' over the pocket so the hole above it prints without support, drilled or poked through afterwards (NopSCADlib nut_trap 'supported'; Hackaday 'Sacrificial Bridge Avoids 3D Printed Supports').
- **how_it_works**: The pocket is shaped to the nut's flats, only a few tenths of a millimetre bigger, so the nut slides in but cannot turn: its flat sides press on the flat walls of the pocket (Hubs; BOSL2). When the bolt is screwed in from the other side, the pocket holds the nut still, and as the bolt is tightened it pulls the nut hard against the solid plastic behind it, clamping the parts together. The pull is spread over the nut's whole face instead of the thin plastic threads a screw would cut, which is why a nut pulled against a solid face held more than screwing straight into the plastic in CNC Kitchen's tests. A pocket that opens on a face is filled from that face; a side slot lets the nut slide in from the side where the back can't be reached.

### Finder attributes

- **job**: join and hold: gives a printed part a strong, reusable metal thread so another part can be bolted on and taken off again
- **motion**: none
- **degrees_of_freedom**: 0: once the bolt is tight, the joined parts can't move. Before tightening, the nut can shift slightly inside its pocket by the clearance.
- **special_behaviour**: none: it just holds a nut still while a bolt is tightened. (A nylon-insert lock nut (nyloc) in a deeper pocket adds resistance to shaking loose; Wikipedia 'Nut (hardware)')
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the nut's flats sit against the pocket's flat walls, so it can't turn, and the pocket floor or wall stops it pulling through
  - friction or clamping (force-fit): the bolt and nut then clamp the parts together
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: the bolt screws out and back in, and the nut usually stays in its pocket; a nut in a side slot can be pushed back out, especially if the design has a poke hole behind it (BOSL2 nut_trap_side). A nut buried by printing over it mid-print is permanent (see 'Mid-print embedding').
- **reuse_cycles**: many times: the bolt runs in the nut's metal thread, so the thread doesn't wear like a printed or self-tapped plastic thread. Hubs lists embedded nuts with inserts as the most popular methods partly for their 'ease of repeated assembly and disassembly'; CNC Kitchen calls nuts 'a cheap and viable alternative' to heat-set inserts. The pocket can be damaged if the nut is allowed to spin or is overtightened.
- **tools_needed**: a screwdriver or hex key for the bolt; no spanner on the nut. Helpful extras: a longer, fully threaded screw to pull a tight nut into its pocket (Prusa's 'screw pulling technique'), a piece of tape to stop a nut falling out of a side slot, a 2 mm hex key or a pin to line up a nut in a slot (Prusa MINI+ assembly manual), and a drill bit or pin to open a sacrificial bridge layer (Hackaday).
- **seal**: none
- **load**: medium: in CNC Kitchen's M3 tests in PETG, a nut in a pocket underneath the part (pulled against solid plastic) held 166 kg before pulling out, the best result, compared with 118 kg for a screw straight into the plastic and 119 kg for a heat-set insert; a nut in a side pocket was weakest at 86 kg. Both nut versions took 2 Nm of twisting before the PETG was crushed, against 3 Nm for a heat-set insert and 1 Nm for a plain screw ('Helicoils, Threaded Insets and Embedded Nuts in 3D Prints', 2020). Strongest when the bolt pulls the nut into thick, solid plastic; weakest when the load pushes the nut towards an open slot or a thin wall.
- **adjustable**: no: it is a fixed anchor point for a bolt. (A nut trap at the end of a long bolt can be used as a simple screw adjuster, e.g. a printed C-clamp whose screw runs in a trapped nut; Printables 'Nut-trap C-Clamp')
- **play_and_precision**: small: the nut can move by the pocket clearance (typically 0.1-0.2 mm each side) until the bolt is tightened, so hole positions may be off by that much. Once tightened it is rigid. *(unverified parts omitted)*
- **access_needed**: both sides: you need to reach the pocket opening to put the nut in (the back face, or the side for a side slot) and the front to put the bolt in, but once the nut is in place the bolt is tightened from the front only, with no tool on the nut. CNC Kitchen notes the method 'can't always be used if you don't have access from the back and from the side'.
- **materials**: Standard steel, stainless-steel, brass or nylon hex or square nuts (NopSCADlib draws steel, brass and nylon nuts). The pocket can be printed in any printable plastic (PLA, PETG, ABS/ASA, nylon, resin). *(unverified parts omitted)*
- **maker_difficulty**: easy: it is just a hexagonal hole in the model and a nut you already own; the only fiddly parts are getting the pocket size right for your printer and designing it so the nut can be inserted

### Making it

- **processes**: 
  - 3D print (FDM): the usual way; the pocket is modelled into the part
  - laser cut: the equivalent is a T-shaped slot that holds a square or hex nut in the edge of a sheet (see the separate entry 'T-slot joint (captive nut and bolt joint)')
  - off-the-shelf part: the nut and bolt *(unverified parts omitted)*
- **print_in_place**: partly: the pocket prints as part of the object, and a standard nut is pushed or pulled in afterwards (or dropped in during a pause and printed over; see 'Mid-print embedding').
- **making_tips_3d_printing**: 1) Size the pocket from the nut's width across the flats, not across the corners: measure your nuts or use the standard sizes (M3 nuts are 5.5 mm across the flats and 2.4 mm thick; Wikipedia 'Nut (hardware)'). Across the corners is about 1.155 times the width across the flats (NopSCADlib computes flat radius = corner radius x cos 30 degrees), e.g. about 6.35 mm for M3. 2) Clearance: Hubs suggests starting with a 0.2 mm offset all round (0.1 mm each side) for a loose fit, more for nuts bigger than M12; BOSL2 enlarges its nut traps by 2 x $slop, a setting you tune for your printer. Print a strip of test pockets first (e.g. Printables 'Nut Fit Test Generator'). 3) Depth: typically just below flush with the surface (Hubs); NopSCADlib uses 3 mm deep traps for M3 and 4 mm for M4. Lock nuts with a nylon ring (nyloc) are thicker and need a deeper pocket. 4) Put the pocket where the bolt will pull the nut into solid plastic: a pocket underneath the part held nearly twice as much as a side pocket in CNC Kitchen's tests (166 kg vs 86 kg). Keep at least a screw-diameter's thickness of plastic around it (Hubs rule: wall at least equal to the screw diameter). 5) The hole above a nut pocket starts in mid-air when printed upside down or in a slot. Either leave one solid layer over the pocket (a sacrificial bridge) and drill or poke through it afterwards (Hackaday 'Sacrificial Bridge Avoids 3D Printed Supports'; NopSCADlib nut_trap supported option), or use stepped bridging layers that shrink the opening layer by layer so the hole prints cleanly with no drilling (nophead, HydraRaptor 'Buried nuts and hanging holes'; Hackaday 'Look Ma, No Support For My Floating Holes!'). 6) Side slots: the flat roof of the slot is bridged by the printer; keep it short. When the pocket's axis lies sideways (horizontal), holes and pockets sag slightly at the top, so NopSCADlib makes horizontal nut traps a quarter of a layer height larger. 7) Add a poke hole behind a side slot so the nut can be pushed out again (BOSL2 nut_trap_side poke_len). 8) Fitting the nut: if it's tight, don't hammer it; use a fully threaded screw (e.g. M3x10 or M3x18) from the other side to pull it in, then remove the screw (Prusa MINI+ assembly manual, 'screw pulling technique'). 9) If a nut keeps falling out, hold it with a piece of tape until the bolt is in (Prusa). Hubs suggests a drop of superglue on the back of the nut, but Prusa advises against glue because it can run into the thread and stop the screw tightening properly; if you glue, keep it off the thread. 10) Don't overtighten: in PETG both nut designs failed at about 2 Nm when the plastic under the nut was crushed (CNC Kitchen), yet 1 Nm on an M3 bolt already gives more than 1500 N of clamping (CNC Kitchen). *(unverified parts omitted)*
- **off_the_shelf_parts**: Standard metric hex nut sizes: M2 4 mm across the flats x 1.6 mm thick, M3 5.5 x 2.4, M4 7 x 3.2, M5 8 x 4, M6 10 x 5, M8 13 x 6.5 (Wikipedia 'Nut (hardware)'). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Start with a pocket 0.2 mm larger than the nut all round (0.1 mm per side) for a loose fit, and more for nuts larger than M12; make the pocket just below flush (Hubs 'How to assemble 3D printed parts with threaded fasteners').
  - Minimum wall around a threaded fastener equals the fastener diameter, e.g. 5 mm for M5 (Hubs).
  - Metric hex nut sizes across the flats x thickness: M3 5.5 x 2.4 mm, M4 7 x 3.2 mm, M5 8 x 4 mm, M6 10 x 5 mm (Wikipedia 'Nut (hardware)'); across the corners is the width across the flats divided by cos 30 degrees, about 1.155 times (geometry, as used in NopSCADlib nut.scad).
  - NopSCADlib's defaults: nut trap depth 3 mm for M3 and 4 mm for M4; horizontal traps a quarter of a layer height larger in radius; an optional one-layer 'supported' roof over the trap (NopSCADlib vitamins/nuts.scad and nut.scad).
  - BOSL2 nut traps are enlarged by 2 x $slop (default 0, set for your printer); side traps can have a poke hole whose diameter defaults to the nut thickness (BOSL2 screws.scad).
  - M3 nut in PETG, pull-out: 166 kg with the nut in a pocket underneath, 86 kg in a side pocket; both twisted out at 2 Nm when the plastic crushed (CNC Kitchen, 2020).
  - A tight nut is pulled into its pocket with a fully threaded screw from the opposite side (typically M3x10 or M3x18), not hammered; tape, not glue, holds a loose one (Prusa Original Prusa MINI+ kit assembly manual, step 10).
  - Holes starting above a nut pocket can be printed without support by stepped bridging: two parallel bridges, then crossing bridges forming a square, then an octagon, each one layer thick (nophead, HydraRaptor 'Buried nuts and hanging holes', 2014).

### When to use it

- **everyday_examples**: 
  - Hobby 3D printers built partly from printed parts, such as the Original Prusa MINI+, whose assembly manual has builders pull M3 nuts into printed nut traps and slide square nuts into slots (Prusa MINI+ kit assembly manual)
  - Plastic star knobs and clamp knobs with a nut pressed into a hex recess (e.g. Printables 'Captive Nut Star Knob 1/4-20')
  - Laser-cut plywood and acrylic boxes held together with a nut in a T-shaped slot, the flat-sheet cousin (see 'T-slot joint') *(unverified parts omitted)*
- **when_to_use**: Use a nut trap when you want strong, reusable metal threads in a printed part with no extra tools or special parts: just a hex pocket and a nut you already have. It is ideal for parts that are bolted together and taken apart now and then, for bolts that will be tightened hard, for places you can't get a spanner onto the nut, and for larger sizes, where big heat-set inserts soak up a lot of heat and are harder to melt in (CNC Kitchen 'Tips & Tricks for Heat-Set Inserts'). It is strongest when the bolt pulls the nut into a thick, solid part.
- **when_not_to_use**: Avoid it where you can't reach the pocket to put the nut in (use a heat-set insert, which needs only the front face), where the part is too thin to fit a nut-sized pocket with enough plastic around it (use a heat-set insert or a through-bolt with the nut outside), where the nut would sit in a side slot with the load pushing it out (put the pocket behind the part instead), or for parts assembled once and never opened, where a self-tapping screw is simpler. If the nut must never fall out or be lost, bury it during printing (see 'Mid-print embedding') or use a heat-set insert.
- **environment_limits**: The metal nut is unaffected, but the plastic around it softens with heat: PLA started to give at 60 °C and failed at about 65 °C in an oven test, PETG at 80 °C and ASA at 110 °C (CNC Kitchen 'Comparing PLA, PETG & ASA'), so a nut trap in PLA near a motor, heater or in a hot car can let the nut pull in or spin. Vibration can shake an ordinary nut loose; nylon-insert lock nuts resist this (Wikipedia 'Nut (hardware)'). *(unverified parts omitted)*
- **safety_notes**: None known for the joint itself. If you embed nuts by pausing a print, keep fingers away from the hot nozzle and bed (see 'Mid-print embedding'). *(unverified parts omitted)*
- **common_failures**: 1) Nut won't go in: the pocket prints small; pull it in with a screw from the other side (Prusa) and make the next pocket slightly bigger (Hubs). 2) Nut spins when tightening: the pocket is too big, printed oval, or its corners have been rounded by overtightening; tighten the clearance or print a test strip. 3) Nut keeps falling out of a side slot during assembly: CNC Kitchen found this 'constantly' annoying; hold it with tape (Prusa), add a small bump or tighter fit, or move the pocket to the back of the part. 4) Hole above the pocket is messy or blocked because it was printed in mid-air: use a sacrificial bridge or stepped bridging (Hackaday; nophead). 5) Plastic crushes or cracks around the nut: overtightened or thin walls; in PETG the plastic crushed at about 2 Nm (CNC Kitchen); keep walls at least one screw diameter thick (Hubs). 6) Nut pulls through or the side of the slot breaks out: the load pushes the nut towards the open side of a side slot, which held only 86 kg against 166 kg for a nut pulled into solid plastic (CNC Kitchen). 7) Glue in the thread stops the screw tightening (Prusa).
- **related**: 
  - Heat-set threaded insert: a knurled brass insert melted into a plain hole; needs a soldering iron but only the front face, takes more twisting (3 Nm vs 2 Nm in CNC Kitchen's M3 PETG test) and never falls out
  - Mid-print embedding (captive nuts, magnets and bearings): the nut is dropped in during a print pause and printed over, so it is trapped for good and needs no access later
  - T-slot joint (captive nut and bolt joint): the laser-cut version, with a T-shaped slot holding a square nut in the edge of a sheet
  - Self-tapping screw into plastic (thread-forming screw): no nut at all; simplest, but held only about 1 Nm in CNC Kitchen's tests and wears out after a few uses
  - Press-fit and expanding inserts (tap-in insert): pushed in cold and held by barbs or expansion; no pocket access from behind needed
  - Cage nut: a spring-steel cage that clips a square nut into a square hole in sheet metal, for places that are hard to reach (Wikipedia 'Nut (hardware)')
  - Rivet nut: a threaded blind rivet installed from one side into sheet material (Wikipedia 'Threaded insert')
  - Ordinary screw joint (bolt and nut): the baseline; a nut trap is simply a way of holding the nut so no spanner is needed

### Pictures, videos and models

- **links**: 
  - [Sacrificial Bridge Avoids 3D Printed Supports (Hackaday, 2017)](https://hackaday.com/2017/10/17/sacrificial-bridge-avoids-3d-printed-supports/): Pictures of a hex nut pocket with a thin printed bridge over it so the bolt hole above prints cleanly; the bridge is drilled out afterwards *(licence: link only)*
  - [Buried nuts and hanging holes (nophead, HydraRaptor blog, 2014)](https://hydraraptor.blogspot.com/2014/03/buried-nuts-and-hanging-holes.html): Photos and layer-by-layer images of M4 nuts buried in a printed knob and of the stepped bridging that prints the hole above a nut without support *(licence: link only)*
  - [HELICOIL®, Threaded Insert or Embedded Nut in 3D Prints? (YouTube, CNC Kitchen)](https://www.youtube.com/watch?v=2wRc1KbEAU8): Video testing M3 nuts in side and bottom pockets against heat-set inserts, Helicoils and plain screws in PETG, with pull-out and torque results; title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
  - [3D Print Floating Holes Without Support! (With This One Weird Trick :P ) (YouTube, Maniacal Labs LLC)](https://www.youtube.com/watch?v=W8FbHTcB05w): Video showing stepped bridging layers that let a hole start in mid-air above a counterbore or nut pocket, as described by Hackaday; title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
  - [Hexagon nuts (Wikimedia Commons, photo by Oytun 73, 2007)](https://commons.wikimedia.org/wiki/File:Hexagon_nuts.jpg): Photo of a pile of hex nuts, showing the flats that a hex pocket grips *(licence: Public domain (released by the author))*
- **make_it_yourself**: 
  - [BOSL2 screws.scad: nut_trap_side() and nut_trap_inline() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad): Parametric OpenSCAD masks for hex or square nut traps, either sliding in from the side (with an optional poke hole) or in line with the screw, sized from standard metric or inch nut tables plus a $slop allowance for your printer *(licence: BSD 2-Clause)*
  - [NopSCADlib nut.scad: nut_trap() (OpenSCAD library by nophead)](https://raw.githubusercontent.com/nophead/NopSCADlib/master/vitamins/nut.scad): OpenSCAD module that cuts a nut trap and screw clearance hole, with options for horizontal traps (slightly enlarged, teardrop screw hole) and a one-layer supported roof for printing without support *(licence: GPL-3.0 or later)*
  - [Nut Fit Test Generator (OpenSCAD Parametric) (Brandon Beaumia, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1789534-nut-fit-test-generator-openscad-parametric): OpenSCAD customiser that makes a strip of labelled hex pockets stepping up by a chosen increment, to find the best nut fit for your printer. Read through the Printables public API. *(licence: Creative Commons Public Domain)*
  - [Nut-trap C-Clamp (DaveX, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/295885-nut-trap-c-clamp): Configurable printed C-clamp whose clamping screw runs in a nut held in a nut trap, with nut sizes from M1.6-M12 and #6-32 to 1"-8. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- **diagram_idea**: A cut-away side view of a printed block with a bolt coming in from the top and a hex nut sitting in a pocket at the bottom, arrows showing the bolt pulling the nut up against solid plastic; beside it a view from below showing the hexagon with a thin clearance gap (0.1 mm per side) and a second small drawing of a side slot with the nut sliding in and a poke hole behind it.
- **sources**: 
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.cnckitchen.com/blog/helicoils-threaded-insets-and-embedded-nuts-in-3d-prints-strength-amp-strength-assessment
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://help.prusa3d.com/wp-content/uploads/generated/original-prusa-mini-kit-assembly_1215_en_2025-03-25.pdf
  - https://hydraraptor.blogspot.com/2014/03/buried-nuts-and-hanging-holes.html
  - https://hackaday.com/2017/10/17/sacrificial-bridge-avoids-3d-printed-supports/
  - https://hackaday.com/2020/05/17/look-ma-no-support-for-my-floating-holes/
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/constants.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://raw.githubusercontent.com/nophead/NopSCADlib/master/vitamins/nut.scad
  - https://raw.githubusercontent.com/nophead/NopSCADlib/master/vitamins/nuts.scad
  - https://en.wikipedia.org/wiki/Nut_(hardware)
  - https://en.wikipedia.org/wiki/Threaded_insert
  - https://commons.wikimedia.org/wiki/File:Hexagon_nuts.jpg
  - https://www.youtube.com/watch?v=2wRc1KbEAU8
  - https://www.youtube.com/watch?v=W8FbHTcB05w
  - https://api.printables.com/graphql/
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.cnckitchen.com/blog/tips-and-tricks-for-heat-set-inserts

### Other info

- **Fields with unverified parts:** environment_limits, everyday_examples, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, processes, safety_notes

## 58 Printed screw thread

*print-in-place & 3D-printing joints.* Threads modelled and printed directly into the parts, for jar lids, caps and coarse screws, with extra clearance so they turn

### What it is

- **plain_name**: A screw thread that is drawn into the 3D model and printed as part of the object, so a lid screws onto a jar or a printed bolt screws into a printed nut, with a little extra gap so the two halves turn freely
- **term**: Printed screw thread (modelled thread, as-printed thread)
- **aliases**: 
  - 3D-printed thread, printed-in thread
  - modelled (modeled) thread: Fusion's 'Modeled' checkbox turns a picture-only (cosmetic) thread into real printable geometry (Product Design Online)
  - as-printed thread (Protolabs' term for threads printed without tapping)
  - integrated thread (CNC Kitchen's 'M3 - M10 3D Printed Thread Test')
  - screw-top, screw cap, screw-on lid (the everyday container versions; Wikipedia 'Screw cap')
  - trapezoidal thread (Acme thread), buttress thread (sawtooth thread), knuckle or round thread, square thread: thread shapes (thread forms) often chosen for printing instead of the sharp 60-degree V thread (BOSL2 threading.scad; Wikipedia 'Screw thread')
  - multi-start thread (double-start, triple-start): several threads side by side, used on quick-closing lids (Wikipedia 'Screw thread')
  - blunt-start thread (Higbee thread): a thread whose first turn is cut off square so it can't cross-thread; the default in the BOSL2 library
  - bottle-neck finish, e.g. PCO 1881 or SPI 38-400 (standard bottle and jar threads that printed caps can be made to fit; BOSL2 bottlecaps.scad)
- **family**: print-in-place & 3D-printing joints
- **other_families**: quick-release & tool-free, motion conversion
- **one_liner**: A spiral ridge (thread) modelled straight into two printed parts so they screw together by hand or with a tool, with extra clearance added so printing errors don't make it jam.
- **complexity**: A few parts: an outside thread (external thread, e.g. a bolt, jar neck or bottle neck) and a matching inside thread (internal thread, e.g. a nut, threaded hole or lid). Optional extras: a rubber seal ring (gasket or O-ring) under a lid, or a real metal bolt screwed into a printed threaded hole.
- **how_it_works**: The thread is a ridge wound around a cylinder like a spiral staircase (helix); turning one part makes it climb along the other, so turning is changed into a straight push that clamps the parts together (Wikipedia 'Screw thread'). Once tight, friction on the sloping thread faces stops it unscrewing by itself under a straight pull (self-locking). Because printed plastic comes out slightly larger or smaller than drawn, the outside thread is made a little thinner or the inside thread a little bigger (a clearance or offset of roughly 0.1-0.2 mm per face) so the two will turn (Product Design Online; BOSL2 $slop). Coarse, rounded or flat-topped thread shapes print more cleanly than fine sharp ones because their sloping faces are gentler overhangs (DurbansPoison Fusion-360-FDM-threads README; BOSL2).

### Finder attributes

- **job**: 
  - join and hold: screws two printed parts together, or lets a metal bolt screw straight into a printed hole
  - seal it, or pass cables or fluid through: a screw-on lid closes a jar or bottle; it seals well only with a gasket, O-ring or pressed lip
  - tighten and hold tension: clamp screws and knobs press parts together and stay put
  - change the kind of motion: a printed clamp or lifting screw turns a twist into a straight push
- **motion**: rotate+slide: while being done up the part turns and moves along the thread at the same time (one lead per turn); once tightened there is no motion (none)
- **degrees_of_freedom**: 1 while screwing: turning and sliding are locked together, so they count as one movement (a helical joint). 0 once tightened down.
- **special_behaviour**: 
  - motion conversion (rotary to linear): when used as a printed clamp or vice screw, turning the handle pushes the jaw forward
  - none of the other clever behaviours: it does not click, slip at a set force or release quickly *(unverified parts omitted)*
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the thread ridges hook behind each other, so the parts can't be pulled straight apart
  - friction or clamping (force-fit): once tightened, friction on the thread faces keeps it from undoing
- **input_output**: Only when used as a drive screw (printed clamp, vice or adjuster): continuous rotation -> straight-line movement of one lead per turn, where lead = pitch x number of starts (Wikipedia 'Screw thread'); shaft arrangement in line. For lids and fasteners: not applicable (it holds rather than passes on motion). *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: unscrew it; coarse lid threads can be opened and closed by hand as often as you like, small fastener threads wear faster
- **tools_needed**: none for jar lids, caps and knobs; a screwdriver or spanner for printed bolts and for metal bolts in printed holes; optionally a metal tap or die of the same size to clean up rough printed threads (Meshra blog), or simply screw the parts in and out several times to clear them (Hubs)
- **seal**: loose on its own (the spiral gap between threads leaks); watertight when a gasket, O-ring, rubber band or pressed lip is added, as on laboratory screw caps with a built-in seal (Wikimedia Commons 'Duran Group GL45 screw caps') and printed jars with rubber-band grooves (Printables 'Threaded jar with a rubber seal'). *(unverified parts omitted)*
- **load**: light to medium. Strongest when pulled along the thread axis with plenty of threads engaged: an M8 thread printed in SLS nylon (PA12) pulled out at about 3.41 kN, close to a heat-set insert's 3.83 kN (Śliwka and Wójcik 2025), and M3 threads printed in resin held 106-121 kg, more than tapped holes (CNC Kitchen). Weak against over-tightening (the plastic threads shear or strip) and, for FDM bolts printed standing up, against pulling, because the pull tries to separate the layers (ThirtyThreeDown prints bolts lying down for this reason).
- **adjustable**: yes: how tight it is, and where it sits along the thread, can be changed at any time by turning it; this is why printed threads suit clamp screws, adjusting knobs and levelling feet
- **play_and_precision**: noticeable: printed threads need deliberate clearance (about 0.1-0.2 mm per thread face, i.e. roughly 0.2-0.4 mm on the diameter), so a printed nut wobbles slightly on its bolt until tightened (Product Design Online; Meshra blog). Not a precision locating joint; a lid or clamp settles wherever the thread stops. Tolerates a little misalignment at the start, especially with a chamfer or blunt start.
- **access_needed**: end of a tube or shaft: a lid or nut goes on over the end of the threaded part. A metal or printed bolt into a printed threaded hole needs access from one side only (blind).
- **materials**: FDM: PLA gives the crispest threads but is brittle when twisted; PETG, ABS and ASA are better for threads that are tightened hard or opened often (Snapmaker blog; Meshra blog). Resin (SLA/DLP) gives the finest, strongest small threads (Formlabs; CNC Kitchen: printed M3 threads in resin beat tapped holes). Powder-bed nylon (SLS, MJF) works for M6 and larger (Śliwka and Wójcik 2025). Mating parts can be printed or metal: a steel bolt into a printed hole, or a printed cap onto a glass or plastic bottle. *(unverified parts omitted)*
- **maker_difficulty**: moderate: generators and CAD tools (BOSL2, Fusion 360 modelled threads) make the shape in seconds, but getting a smooth, snug fit usually takes one or two test prints to tune the clearance for your printer, and threads smaller than about M6 are hard to print well in FDM

### Making it

- **processes**: 
  - 3D print (FDM): the usual maker method for jars, caps, knobs and coarse screws (M6/M8 and up)
  - 3D print (resin): SLA and DLP print fine threads, down to M3, well (Formlabs; CNC Kitchen)
  - 3D print (powder-bed SLS or MJF nylon): works for larger threads; Protolabs advises tapping or inserts if the thread is critical
  - 3D print (metal DMLS): as-printed threads are 'rarely functional' and are usually machined afterwards (Protolabs)
  - other: injection moulding (the normal way to make plastic bottle caps and jar lids), CNC turning, or cutting threads into a printed hole with a tap
- **print_in_place**: no: the two threaded halves (jar and lid, bolt and nut) are printed as separate parts and screwed together afterwards
- **making_tips_3d_printing**: 1) Size: in FDM keep printed threads at M6 (1/4 in) or larger; below M5 use a heat-set insert, a self-tapping screw or a nut instead (Hubs; Formlabs; Thomas Sanladerer). Beginners are advised to start even bigger, around M12-M16 with a 2 mm pitch, until they know their printer's clearance (Product Design Online). 2) Turn on real geometry: in Fusion tick 'Modeled' in the thread dialog, otherwise the thread is only a picture (Product Design Online); Onshape needs the ThreadLab add-in (Thomas Sanladerer); OpenSCAD users can use BOSL2 threading.scad. 3) Add clearance: Fusion's default 0.1 mm is too tight for printing; use Offset Face (Q) to move each thread face by about -0.15 to -0.2 mm, on both flanks and on both parts (Product Design Online). In BOSL2 set $slop, which adds 4 x $slop to internal threads; calibrate it with the library's slop test print (BOSL2 constants.scad). A blog guide suggests about 0.2-0.4 mm oversize on the inside thread and 0.1-0.2 mm undersize on the outside thread, 'start looser than feels right' (Meshra). 4) Pick a print-friendly shape: the overhang of a vertically printed thread face is 90 degrees minus half the thread angle (DurbansPoison README), so a standard 60-degree V thread has steep 60-degree overhangs; a 90-degree or trapezoidal thread gives 45-degree faces that print cleanly (BOSL2), and a rounded (semicircular) profile wears better (Formlabs). 5) Pitch: use a coarse pitch, at least about 1.0 mm for a 0.4 mm nozzle and 1.5-2 mm to be comfortable (Meshra blog); fine pitches merge into a ramp. 6) Orientation: print threaded parts standing up (thread axis vertical) so the thread is round and needs no support (Snapmaker blog; Meshra blog). Exception: a printed bolt that must take a strong pull is stronger lying down, because the pull no longer separates the layers; one maker trims a flat along the bolt (1/6 of the diameter) so it lies flat on the bed and uses a trapezoidal thread with a 0.12 mm offset on all faces (ThirtyThreeDown). 7) Layers and walls: use thin layers (0.12-0.16 mm) and 3-4 perimeters so the thread is cut from solid plastic rather than infill (Snapmaker blog); keep at least as much wall around a threaded hole as the thread diameter, e.g. 5 mm around an M5 (Hubs). 8) Start of the thread: add a 45-degree chamfer to the first turn of the outside thread and the mouth of the inside thread (Snapmaker; Meshra) or use a blunt start, which BOSL2 makes by default, so it starts straight and the squashed first layer (elephant's foot) doesn't jam it. 9) Use multi-start threads for lids you want to close in less than a turn (Wikipedia 'Screw thread'). 10) After printing, screw the parts together and apart several times to clean the thread (Hubs; Printables 'Threaded Jar'), or run a metal tap through a rough internal thread (Meshra blog). 11) Print a small test pair before a big container: e.g. CNC Kitchen's M3-M10 thread test or a small 20 mm container (Printables 'Parametric Screw Top Container').
- **off_the_shelf_parts**: Usually none; the threads are part of the print. Useful extras: metal bolts and machine screws (ISO metric, M6 and up) to screw into printed threaded holes; a metric tap and die set to clean up printed threads; O-rings, flat silicone gaskets or rubber bands to seal lids; standard bottles and jars with known neck finishes (PCO 1881 drink bottles, SPI finishes such as 38-400, mason jars) for which BOSL2 can generate matching caps. Alternatives to buy instead when threads must be small or reused a lot: heat-set threaded inserts, Helicoil-type wire thread inserts, hex nuts in a nut pocket.
- **rules_of_thumb**: 
  - Smallest practical size: avoid FDM-printed threads below M5 (Hubs 'How to assemble 3D printed parts with threaded fasteners'); Formlabs recommends 1/4 in-20 or M6 and larger, as does Thomas Sanladerer ('A better way to add threads to your 3D prints'); in SLS PA12 printed threads were accurate enough only above M6 (Śliwka and Wójcik, Polymers 2025).
  - Wall around a printed threaded hole at least equal to the thread diameter, e.g. 5 mm for M5 (Hubs).
  - Clearance in Fusion 360: default 0.1 mm is not enough; offset each thread face by -0.15 to -0.2 mm on both flanks and both parts; a 2 mm pitch on M16 is a good first test (Product Design Online, 'Model 3D printed threads in Fusion 360').
  - BOSL2 adds 4 x $slop of clearance to internal threads; its examples use $slop values of 0.05-0.2 mm, found with the library's slop calibration print (BOSL2 threading.scad and constants.scad).
  - Overhang of a thread printed with its axis vertical = 90 degrees - (thread angle / 2): about 60 degrees for a standard 60-degree thread, 45 degrees for a 90-degree thread; trapezoidal FDM profiles with root and crest flats 1/4 of the pitch are robust (DurbansPoison Fusion-360-FDM-threads README; BOSL2).
  - Lead = pitch x number of starts; multi-start threads close faster, which is why they are used on bottle caps and jar lids (Wikipedia 'Screw thread').
  - Standard drink-bottle necks are 28 mm across; PCO 1881 has a 17 mm thread height, 2.7 mm pitch and 650 degrees of thread travel, the older PCO 1810 21 mm, 3.18 mm and 810 degrees (BOSL2 bottlecaps.scad).
  - Printed vs insert strength (SLS PA12, M8): printed thread 3.41 kN pull-out, heat-set insert 3.83 kN (+12%), Helicoil 4.78 kN (+40%); all failed by pulling out of the plastic (Śliwka and Wójcik 2025).
  - Resin (M3): printed threads held 106 kg (Prusament Tough resin) and 121 kg (Elegoo), versus 55 kg and 104 kg for tapped holes; modelling and printing the thread is the best choice in resin unless it will be screwed in and out often (CNC Kitchen, 'How to use threaded inserts in resin 3D prints').
  - A rounded (semicircular) thread profile with a 0.1 mm offset improves engagement and wear in printed parts (Formlabs 'Adding screw threads to 3D printed parts').
  - For general moving fits on a Prusa printer start from at least 0.3 mm clearance; the printer is accurate to about 0.2 mm (Prusa Knowledge Base 'Modeling with 3D printing in mind').

### When to use it

- **everyday_examples**: 
  - A screw-top jar lid or a plastic drink-bottle cap (Wikipedia 'Screw cap'; PCO 1881 bottle standard)
  - A laboratory bottle cap with a built-in rubber seal (Wikimedia Commons 'Duran Group GL45 thread PBT screw caps')
  - A garden-hose connector (BOSL2 includes a garden hose thread generator)
  - The screw of a bench vice or a G-clamp (Wikipedia 'Buttress thread' mentions vices); makers print whole clamps with printed threads (Printables 'Thread test' by Wilko)
- **when_to_use**: Use a printed thread when you want parts that screw together by hand without buying anything: screw-top boxes and jars, caps for bottles, lens and pipe adapters (Hackaday 'printed threads' tag), knobs, clamp screws, levelling feet and large coarse screws. It is quickest to design (a checkbox in Fusion or one line in OpenSCAD), needs no extra steps after printing (Hubs) and works well for sizes from about M6 upward in FDM, and down to about M3 in resin. It is a good choice when the thread will be done up by hand rather than tightened hard.
- **when_not_to_use**: Avoid it for small threads (below about M5-M6 in FDM), for screws that must be tightened hard or undone many times, and for anything critical: use a heat-set threaded insert, a Helicoil-type insert, a nut in a nut pocket or a self-tapping screw instead (Hubs; Protolabs; Thomas Sanladerer). Avoid it where a lid must be airtight or watertight without a gasket, and for high-load threaded rods in FDM, where a steel threaded rod or bolt is much stronger. For precise positioning (lead screws in a machine) buy a metal lead screw and nut.
- **environment_limits**: Printed threads soften with heat like the rest of the part: in CNC Kitchen's oven test PLA started to give at 60 °C, PETG at 80 °C and ASA at about 110 °C, so a PLA jar in a hot car or dishwasher can deform and seize or loosen. Plastics slowly relax under constant load, so a tightened plastic thread loses some clamping force over time (DuPont design guide: plastics creep and stress-relax; 3D-printed PLA lost about 11-13% of its stress within 500 seconds in tests by Bertocco et al. 2022). Metal parts screwed into plastic expand differently with temperature (DuPont). Dust or grit in coarse FDM threads makes them bind; UV and chemical limits are those of the chosen plastic.
- **safety_notes**: Few hazards. Take normal care with a tap or die (sharp edges). *(unverified parts omitted)*
- **common_failures**: Too tight or seized: not enough clearance, elephant's foot on the first layers, or blobs and stringing in the thread; fix with more offset (about 0.1-0.2 mm per face), a chamfer or blunt start, and by screwing in and out to clean it. Too loose or wobbly: too much clearance or a worn thread. Stripped or sheared threads: thread too small, too fine a pitch, too few perimeters, or over-tightening; use M6 and larger, 3-4 walls and a coarse trapezoidal or rounded profile. Cross-threading at the start: add a lead-in chamfer or blunt start (BOSL2). Printed bolts snapping between layers when pulled: print them lying down (ThirtyThreeDown) or use a metal bolt. Leaks: add a gasket or O-ring. Rough, droopy threads when printed with the axis horizontal: print standing up (Snapmaker blog; Meshra blog).
- **related**: 
  - Heat-set threaded insert: a brass insert melted into the print gives strong, reusable metal threads, better for small sizes and frequent use
  - Captive nut pocket (nut trap): a metal nut held in a printed hex pocket; metal-on-metal threads that last, at the cost of a slot or pocket in the part
  - Self-tapping screw into plastic (thread-forming screw): no thread is modelled; the screw forms its own in a plain hole; simple but wears out after a few uses
  - Press-fit and expanding inserts (tap-in insert): metal threads pushed into a hole without heat
  - Bayonet mount (push-and-twist lock) and interrupted-screw lock: quicker to close than a full thread, often used instead of threads on lids and camera mounts
  - Push-and-turn child-resistant cap: a screw cap with an extra locking layer
  - Lead screw and nut: a thread designed to move something precisely rather than to hold it
  - Ordinary screw joint (bolt and nut): the metal baseline that printed threads imitate

### Pictures, videos and models

- **links**: 
  - [Lead and pitch in screws (Wikimedia Commons, from Oberg et al., Screw Thread Cutting, 1910)](https://commons.wikimedia.org/wiki/File:Lead_and_pitch_in_screws.png): Diagram of single-start and multi-start threads showing that the lead (distance moved per turn) equals the pitch times the number of starts *(licence: Public domain (published in the USA before 1923))*
  - [Screw thread forms (Wikimedia Commons, from C. L. Svenson, Essentials of Drafting, 1919)](https://commons.wikimedia.org/wiki/File:Screw_thread_forms.png): Cross-sections of seven common thread shapes (V, square, Acme/trapezoidal, buttress, knuckle and others), useful for choosing a print-friendly profile *(licence: Public domain in the USA (published 1919); may not be public domain in some other countries)*
  - [Duran Group GL45 thread PBT screw caps with PTFE coated seal (Wikimedia Commons, by Lucasbosch)](https://commons.wikimedia.org/wiki/File:Duran_Group_GL45_thread_PBT_screw_caps_with_PTFE_coated_seal.jpg): Close-up photo of plastic screw caps showing the internal thread and the separate seal ring that makes a screw cap watertight *(licence: CC BY-SA 3.0)*
  - [A better way to add threads to your 3D prints (YouTube, Made with Layers / Thomas Sanladerer)](https://www.youtube.com/watch?v=HgEEtk85rAY): Video comparing ways to add threads to prints (printed threads, self-tapping, heat-set inserts, nuts, self-forming threads) with strength ratings; summarised by Hackaday on 2025-01-11 and written up on toms3d.org *(licence: link only (standard YouTube licence))*
  - [3D Printed Threads - Model Them in Fusion 360 (Product Design Online, Practical Prints #2)](https://productdesignonline.com/fusion-360-tutorials/3d-printed-threads-model-them-in-fusion-360/): Step-by-step tutorial with screenshots and video: turning on modelled threads, offsetting the thread faces for clearance, and filleting thread edges *(licence: link only)*
- **make_it_yourself**: 
  - [M3 - M10 3D Printed Thread Test (CNC Kitchen, Printables)](https://www.printables.com/model/81211-m3-m10-3d-printed-thread-test): Test block with printed threads from M3 to M10 to find which sizes your printer and filament can print well enough to take a metal bolt. Details read through the Printables public API; URL seen in search results. *(licence: CC BY (Creative Commons Attribution))*
  - [Thread test (Wilko, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/9184-thread-test): Test pieces for trying different thread types and offsets, with the Fusion 360 file included; used by the designer for printed screw clamps and G-clamps. Printed without supports at 0.2 mm layers. *(licence: CC BY (Creative Commons Attribution))*
  - [Parametric Screw Top Container (jq910, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/257973-parametric-screw-top-container): Fusion 360 parametric screw-top container; default 0.75 mm thread parameters for 0.2 mm layers; the designer printed them in PLA with 0.2 mm tolerance and advises printing a small 20 x 10 mm container first to tune the tolerance. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Threaded Jar (Tom, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/29293-threaded-jar): Small screw-top jars (30 mm and 60 mm wide) printed without supports; the designer advises screwing the lid back and forth a few times to wear the thread in. Blender file included. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [BOSL2 threading.scad (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/threading.scad): Parametric threaded rods and nuts: ISO/UTS, trapezoidal (Acme), buttress, square, pipe, garden-hose and ball-screw threads, with blunt starts, multi-start threads and printer clearance ($slop) *(licence: BSD 2-Clause)*
  - [BOSL2 bottlecaps.scad (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/bottlecaps.scad): Generators for caps and necks that fit standard PCO 1810/1881 drink bottles, SPI bottles and jars, and mason jars, plus bottle-to-bottle adapters *(licence: BSD 2-Clause)*
  - [Fusion-360-FDM-threads (Daniel Sherman, GitHub)](https://github.com/DurbansPoison/Fusion-360-FDM-threads): Custom thread definitions for Fusion 360 made for FDM printing: trapezoidal profiles with 50-90 degree thread angles and clearance classes named by their offset in mm (e.g. 0.100e / 0.100i). README read on raw.githubusercontent.com. *(licence: BSD 3-Clause)*
- **diagram_idea**: A cut-away of a printed lid on a jar neck: frame 1 shows the thread ridges with a small coloured gap (clearance) between them and the layer lines stacked horizontally; frame 2 compares a sharp 60-degree thread (steep, droopy overhang) with a 90-degree or trapezoidal thread (45-degree faces); frame 3 shows a chamfered, blunt-start first turn guiding the lid on straight, and a gasket ring under the lid for sealing.
- **sources**: 
  - https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/
  - https://www.protolabs.com/resources/blog/threading-and-inserts-for-3d-printing/
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://productdesignonline.com/fusion-360-tutorials/3d-printed-threads-model-them-in-fusion-360/
  - https://toms3d.org/2025/01/14/a-better-way-to-add-threads-to-your-3d-prints/
  - https://hackaday.com/2025/01/11/comparing-ways-to-add-threads-to-your-3d-prints/
  - https://hackaday.com/tag/printed-threads/
  - https://www.youtube.com/watch?v=HgEEtk85rAY
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC12787388/
  - https://www.cnckitchen.com/blog/how-to-use-threaded-inserts-in-resin-3d-prints
  - https://www.cnckitchen.com/blog/helicoils-threaded-insets-and-embedded-nuts-in-3d-prints-strength-amp-strength-assessment
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC9147248/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.snapmaker.com/blog/3d-printing-threads/
  - https://meshra.ai/blog/design-3d-printed-threads
  - https://thirtythreedown.com/2026/07/16/we-had-almost-solved-3d-printed-threads-i-took-them-to-the-finish-line/
  - https://en.wikipedia.org/wiki/Screw_thread
  - https://en.wikipedia.org/wiki/Buttress_thread
  - https://en.wikipedia.org/wiki/Screw_cap
  - https://commons.wikimedia.org/wiki/File:Lead_and_pitch_in_screws.png
  - https://commons.wikimedia.org/wiki/File:Screw_thread_forms.png
  - https://commons.wikimedia.org/wiki/File:Duran_Group_GL45_thread_PBT_screw_caps_with_PTFE_coated_seal.jpg
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/threading.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/bottlecaps.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/constants.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://raw.githubusercontent.com/DurbansPoison/Fusion-360-FDM-threads/master/README.md
  - https://raw.githubusercontent.com/DurbansPoison/Fusion-360-FDM-threads/master/LICENSE
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/81211-m3-m10-3d-printed-thread-test

### Other info

- **Fields with unverified parts:** input_output, materials, reuse_cycles, safety_notes, seal, special_behaviour

## 59 Crush ribs and spring-fit features (compliant press fit)

*print-in-place & 3D-printing joints.* Small ribs or springy tabs that squash or flex as a part is pushed in, giving a tight fit even when printer or laser sizes vary

### What it is

- **plain_name**: Little ridges or bendy tabs inside a hole that squash or flex when you push a part in, so a bearing, magnet, peg or panel ends up held tight even if your printer or laser cutter made the hole a bit too big or too small
- **term**: Crush ribs and spring-fit features (compliant press fit)
- **aliases**: 
  - crush ribs (injection-moulding term; Protolabs, RapidDirect)
  - compression ribs, press-fit ribs (Hackaday 'Adding crush ribs to 3D printed parts')
  - nodes or bumps: little bumps in the slots of laser-cut parts that squash to take up kerf and thickness variation (Ponoko)
  - cantilever-based mounts and joints, SpringFit (spring-fit): a thin springy arm that presses the part in place, from Hasso Plattner Institute's SpringFit tool for laser cutting
  - magnet crush ribs, wavy magnet pocket (Gridfinity generators' press-fit magnet holes)
  - transition-fit crush ribs vs press-fit crush ribs (AON3D's two versions)
  - compliant pin, eye-of-the-needle press-fit pin (the electronics version: a split pin that springs against a circuit-board hole; ConnectorTips)
  - tolerance ring (a bought wavy metal band that does the same job; separate entry)
- **family**: print-in-place & 3D-printing joints
- **other_families**: clamping, magnetic & friction connections, compliant mechanisms & flexures, interlocking joints & joinery
- **one_liner**: A press fit made forgiving: instead of the whole hole gripping the part, a few narrow ribs squash or a thin springy arm bends, so the grip stays about right over a much wider range of sizes.
- **complexity**: Single piece plus the part being held: the ribs or springy tabs are printed, moulded or cut as part of the holder (a hole, pocket or slot), and a separate part is pushed in (a ball bearing, magnet, metal pin, printed peg, button or plywood panel). Laser-cut spring mounts often add two small fixed bumps opposite the spring so the part sits in a stable triangle (SpringFit paper).
- **how_it_works**: In a plain press fit the whole hole is a little smaller than the part and the surrounding material must be squeezed; that material is very stiff, so a tiny size error means either no grip or so much force that the part cracks (SpringFit paper, UIST 2019). Crush ribs make only a few thin lines touch the inserted part: the ribs are narrow, so they deform (and in FDM prints the thin walls behind them bend) instead of the whole wall, and the fit tolerates small size errors (Hackaday; Protolabs; Printables 'Test Print - Crush Ribs' by kaje). Spring-fit features go further: a long, thin arm (cantilever spring) bends to press on the part, and because bending is much softer than squeezing, it keeps a useful holding force over a much wider range of sizes; making the arm longer lets it take up more variation (SpringFit paper).

### Finder attributes

- **job**: 
  - join and hold: holds a bearing, magnet, pin, shaft, button or panel in a hole or slot by friction, with no glue or screws
  - line parts up exactly: three or more evenly spaced ribs centre a round part in its hole (Protolabs: ribs keep a tight fit and alignment; Creative3DP blog: the fit self-centres)
- **motion**: none: it is a fixed fit; the ribs squash or the tab flexes only while the part is pushed in
- **degrees_of_freedom**: 0: once pushed home the part cannot move (unless pulled out with enough force)
- **special_behaviour**: 
  - self-aligning or self-centring: evenly spaced ribs push equally from all sides, so a bearing or pin centres itself in the hole (Protolabs; Creative3DP blog)
  - none of the other clever behaviours; its real trick, absorbing size errors, is not in the list: it keeps working when printer, laser cutter or material changes (SpringFit paper; Hackaday)
- **holding_principle**: 
  - friction or clamping (force-fit): the squashed ribs or pressed tab create a gripping force, and friction holds the part
  - spring force (a spring or springy part presses it in place): in spring-fit (cantilever) versions a bending arm keeps pushing on the part
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: semi-permanent for crush ribs: the part can be pushed out again, but the ribs stay squashed and grip less next time (AON3D: press-fit crush ribs are for one-time assembly). Removable for spring-fit tabs and for tapered 'transition-fit' crush ribs, which do not deform permanently (AON3D; SpringFit).
- **tools_needed**: none for small parts (push in by hand; *(unverified parts omitted)*
- **seal**: none: the gaps between the ribs are open
- **load**: light to medium: it holds only by friction, and only the rib lines touch the part, so heavy or pounding loads can crush the ribs further until a bearing works loose (New Screwdriver; Hackaday commenters). Spring mounts come apart more easily than a hard press fit hammered in with a rubber mallet (SpringFit paper). Strongest against slipping along the hole when there are more and longer ribs; weakest against being pulled straight out.
- **adjustable**: no: the grip is set by the rib height or spring stiffness; to change it you reprint or recut the part
- **play_and_precision**: none to small once fitted: the part is held tight. Its exact position is a little less predictable than in a perfect round hole, because it rests on a few rib lines (New Screwdriver). Tolerates size variation: crush ribs typically about 0.2-0.3 mm proud (AON3D; kaje); SpringFit mounts handled holes eroded by 0.2 mm and a button 0.3 mm larger, and long springs up to 1.5 mm (SpringFit paper).
- **access_needed**: one side only (blind): the part is pushed in from the open side of the hole or slot
- **materials**: Holder: injection-moulded thermoplastics such as ABS, PC, nylon and POM (RapidDirect); 3D prints in PLA, PETG, ABS/ASA or nylon; laser-cut plywood and MDF, where little bumps compress well (Ponoko says nodes work best in wood); acrylic is brittle and tends to crack in a plain press fit, which is where cantilever springs help (SpringFit paper). Inserted part: steel ball bearings, neodymium magnets, metal dowel pins and shafts, printed pegs, arcade buttons.
- **maker_difficulty**: easy: a few small ridges or a slot-cut spring arm are quick to add in CAD, print or cut with the part, and save the trial-and-error of tuning an exact hole size for every printer

### Making it

- **processes**: 
  - injection moulding: where crush ribs come from; they let a drafted (tapered) hole still grip a part tightly (Protolabs)
  - 3D print (FDM): ribs or flexible tabs printed inside holes for bearings, magnets and pegs (Hackaday; New Screwdriver)
  - laser cut: bumps (nodes) in slots and cantilever-spring mounts and joints in plywood, MDF and acrylic (Ponoko; SpringFit)
  - CNC: rounded ribs are cut into moulds with an end mill (Protolabs) *(unverified parts omitted)*
- **print_in_place**: no: the ribs or spring tabs print as part of the holder, and the bearing, magnet or other part is pushed in after printing
- **making_tips_3d_printing**: 1) Why: printed holes usually come out 0.1-0.3 mm undersize and vary between printers and filaments, so a plain press fit tuned on one printer fails on another (Creative3DP blog; Hackaday); crush ribs let one file work on many printers (Marginally Clever). 2) Make the hole a little larger than the part (a clearance fit) and add at least three narrow ribs, evenly spaced, running along the hole in the direction the part is pushed in (Protolabs; AON3D). In FDM, ribs standing about 0.2 mm proud of the hole are common (AON3D; Creative3DP blog); kaje's tests used four 0.3 mm ribs around an 8 mm peg. 3) Choose press-fit or transition-fit: straight 0.2 mm ribs along the full length make a true press fit for one-time assembly; tapering the hole by about 2 degrees plus 0.2 mm ribs gives a snug fit that can be taken apart and refitted (AON3D). In kaje's tests a hole tapered by 1 degree gave a good firm fit, 0.5 degree was very tight and 2 degrees was loose. 4) Rounded or half-round rib tips crush more predictably than sharp ones (Protolabs recommends rounded ribs for moulding). 6) Add a small 45-degree chamfer or lead-in at the mouth, e.g. 0.8 mm (Gridfinity layout tool), or 0.5 mm x 45 degrees on a 22 mm bearing pocket (Creative3DP blog), so the part starts straight and doesn't shave the ribs off. 7) For magnets, a wavy pocket works well: eight ribs forming a wave between the nominal diameter and 0.6 mm under it (Gridfinity layout tool); for plain holes, one maker found 6.05-6.15 mm holes held 6 x 2 mm magnets by hand in PLA (Printables, sk7fast). 8) Give the ribs somewhere to go: thin walls behind the ribs that can bend a little help, since kaje found the peg walls bending inward did more of the work than the ribs crushing; but keep enough solid material and extra perimeters around bearing pockets so the housing doesn't split. 9) Spring tabs: make a slot beside the hole to leave a thin arm that presses on the part; a longer arm tolerates more size error, a thicker one grips harder (stiffness rises with thickness cubed and falls with length cubed; SpringFit paper). 10) Don't count on ribs alone for heavy or long-term loads: add a shoulder, a clip or glue as backup (Creative3DP blog; DuPont). *(unverified parts omitted)*
- **off_the_shelf_parts**: Parts commonly pushed into crush-rib holes: deep-groove ball bearings such as 608 (8 x 22 x 7 mm) and 623 (New Screwdriver), neodymium disc magnets such as 6 x 2 mm, steel dowel pins, arcade buttons. Bought alternatives that do the same job: a tolerance ring (wavy metal band), compliant press-fit pins (eye-of-the-needle pins) for circuit boards, and press-fit or knurled inserts.
- **rules_of_thumb**: 
  - Use three or more undrafted crush ribs along the hole; rounded ribs are cheaper to cut into a mould than sharp V ribs (Protolabs 'Crush rib design guidelines for injection molding').
  - Moulding sizes: ribs about 2.5 mm (0.1 in) across with about 0.25 mm (0.01 in) interference; rib thickness 40-60% of the wall thickness; spacing about twice the wall thickness; at least three ribs per fitting (RapidDirect 'Crush ribs in injection molding').
  - 3D printing: 0.2 mm ribs along the full hole length for a one-time press fit; a 2-degree taper plus 0.2 mm ribs for a reusable transition fit (AON3D 'Engineering fits').
  - Test data (PLA, 8 mm peg, four 0.3 mm ribs): hole taper 0.5 degree = very tight, 1 degree = good firm fit, 2 degrees = loose (kaje, Printables 'Test Print - Crush Ribs - Version02').
  - Magnet pockets: eight-rib wavy bore between the nominal diameter and 0.6 mm under it, with a 45-degree, 0.8 mm lead-in chamfer (andymai gridfinity-layout-tool pull request 4316).
  - A cantilever spring's stiffness rises 8 times if its thickness is doubled or its length halved; a spring designed for about 0.1 mm of kerf variation at 10 N can be made longer (and thicker) to accept up to 1.5 mm, 7.5 times more (Roumen et al., 'SpringFit', UIST 2019).
  - Plain laser-cut press fits leave little margin: about 0.001-0.002 in (0.025-0.05 mm) of overlap for acrylic and 0.002-0.004 in for MDF (University of Pennsylvania MEAM 'Laser cutting fits'); this is why bumps or springs are added.
  - Plastics creep and stress-relax, so any press fit loosens somewhat over time; test at the expected temperatures and apply a safety factor of 1.5-2 to the maximum interference (DuPont 'General Design Principles for Engineering Polymers', Module I, press fitting, pp. 68-71).

### When to use it

- **everyday_examples**: 
  - Magnet pockets in Gridfinity-style storage bins and baseplates made with the generators' 'crush ribs' option (Extrabold Gridfinity baseplate generator)
  - Laser-cut plywood kits whose slots have little bumps so the pieces hold without glue (Ponoko 'nodes')
  - Ball bearings pushed into 3D-printed rover and robot parts, e.g. Sawppy the Rover (New Screwdriver)
  - Connector pins pressed into computer circuit boards without solder (eye-of-the-needle compliant pins; ConnectorTips)
- **when_to_use**: Use crush ribs or spring features whenever something must be pushed into a printed, moulded or laser-cut hole and stay put without glue or screws, especially when you will share the file and other people's printers, lasers or materials will make the hole a slightly different size: bearings in printed housings, magnets in bins, pins and pegs, buttons and switches in panels, and slot-together plywood or acrylic parts. Transition-fit ribs and spring tabs suit parts you may need to remove again.
- **when_not_to_use**: Avoid relying on them alone for heavy, hammering or vibrating loads, precision bearing seats, or hot places where plastic creeps; add a shoulder, retaining clip, screw or glue, or use a metal housing. For parts that must come out often, use a snap fit, a clip or a screw instead of squashable ribs. For very brittle materials (standard resin, acrylic) prefer a longer spring tab or a clearance hole with glue over a tight rib fit. If you need a sealed or airtight joint, use an O-ring or glue.
- **environment_limits**: Friction fits in plastic loosen over time as the plastic creeps and relaxes, faster when warm (DuPont design guide); 3D-printed PLA lost about 11-13% of its stress in 500 seconds in stress-relaxation tests (Bertocco et al., Materials 2022). PLA begins to soften at about 60 °C, PETG at about 80 °C and ASA at about 110 °C (CNC Kitchen oven test), so a bearing or magnet in a PLA part left in a hot car may loosen or shift. Metal parts in plastic expand less with heat, so temperature swings change the grip (DuPont). Vibration and shock loads can crush ribs further (New Screwdriver).
- **safety_notes**: Small neodymium magnets are a serious hazard if swallowed by children, and magnets snapping together can pinch skin or shatter (Wikipedia 'Neodymium magnet'). *(unverified parts omitted)*
- **common_failures**: Too tight: the holder splits along a layer line or the part won't go in; plain round interference holes concentrate stress and crack along layer lines, which ribs reduce (Creative3DP blog). Too loose: ribs too small or the hole too big, so the part falls out. Ribs shaved off rather than squashed when the part enters crooked; fix with a chamfered lead-in. Ribs flattened after several insertions, so the fit gets looser each time (AON3D). Heavily loaded bearings working loose as the ribs crush further (New Screwdriver). Spring tabs cracking where they join the part, or weakening the structure around them (SpringFit paper limitation). A peg snapping when being pulled back out of a tight rib fit (kaje's tests).
- **related**: 
  - Press fit (interference fit): the plain version, a whole hole slightly smaller than the part; stronger but needs exact sizes
  - Tolerance ring (wavy-band press fit): a bought metal band with springy waves that does the same job between a shaft and a hole
  - Elastic averaging (many-feature alignment): many small springy contacts that together locate a part accurately
  - Cantilever snap fit and annular snap fit: springy features that hook behind a lip instead of just gripping by friction
  - Mid-print embedding (captive nuts, magnets and bearings): traps the part inside the print instead of pushing it into a hole
  - Heat-set threaded insert and press-fit and expanding inserts: other ways of holding metal parts in plastic
  - Magnet joint (embedded magnets, magnetic catch): what the magnets in rib pockets are often used for
  - Kerf-canceling mechanisms (HPI): laser-cut wedge designs that stay tight whatever the cutter's kerf, a cousin of SpringFit

### Pictures, videos and models

- **links**: 
  - [Adding Crush Ribs To 3D Printed Parts For A Better Press Fit (Hackaday, Donald Papp, 2020)](https://hackaday.com/2020/10/15/adding-crush-ribs-to-3d-printed-parts-for-a-better-press-fit/): Photos of crush ribs inside printed bearing holes and the embedded video from Dan Royer (Marginally Clever Robots) *(licence: link only)*
  - [Why Crush Ribs are great! (YouTube, Dan Royer / Marginally Clever Robots)](https://www.youtube.com/watch?v=0h6dCeATkrU): Video explaining where crush ribs come from, why they make press fits work on any printer, and how to model them *(licence: link only (standard YouTube licence))*
  - [SpringFit: Joints and Mounts that Fabricate on Any Laser-Cutter (YouTube, Hasso Plattner Institute HCI)](https://www.youtube.com/watch?v=NO_UBPPEX1c): Video demo of cantilever-spring mounts and finger, notch and T-joints in laser-cut plywood and acrylic, compared with press fits that fail *(licence: link only (standard YouTube licence))*
  - [Crush Rib Design Guidelines for Injection Molding (Protolabs)](https://www.protolabs.com/resources/design-tips/adding-crush-ribs-to-molded-parts/): Illustrations of traditional sharp V crush ribs and Protolabs' recommended rounded ribs in a drafted hole *(licence: link only)*
  - [SpringFit project page (Hasso Plattner Institute, Baudisch lab)](https://hpi.de/baudisch/projects/springfit.html): Pictures of laser-cut models before and after conversion to cantilever-spring mounts and joints, with links to the paper and video *(licence: link only)*
- **make_it_yourself**: 
  - [Test Print - Crush Ribs - Version02 (kaje, Printables)](https://www.printables.com/model/43599-test-print-crush-ribs-version02): An 8 mm peg and a block of holes with four 0.3 mm ribs and different tapers (0.5, 1 and 2 degrees) and depths, with the designer's fit results; Onshape CAD included. URL seen in search results; details read through the Printables public API. *(licence: Creative Commons Public Domain)*
  - [Test Print - Crush Ribs - Version04 (kaje, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/43636-test-print-crush-ribs-version04): Square peg-and-hole version of the crush-rib test; the designer found the peg walls bending inward did much of the gripping. *(licence: Creative Commons Public Domain)*
  - [Press fit tolerance test for 6 x 2 mm magnets (sk7fast, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1759114-press-fit-tolerance-test-for-6-x-2-mm-magnets): Quick test of hole sizes for pushing 6 x 2 mm magnets in by hand; 6.05-6.15 mm worked in PLA at 0.2 mm layers; print upright and upside down. *(licence: Creative Commons Public Domain)* *(unverified parts omitted)*
- **diagram_idea**: Two top-down views side by side: left, a plain round hole slightly too small, with red arrows showing the whole wall stretched and a crack starting along a layer line; right, a slightly larger hole with three or four small ribs, a bearing pushed in, and the rib tips shown squashed; a third inset shows a laser-cut slot beside a hole leaving a thin springy arm that bends to press a round button against two fixed bumps.
- **sources**: 
  - https://www.protolabs.com/resources/design-tips/adding-crush-ribs-to-molded-parts/
  - https://www.rapiddirect.com/blog/crush-ribs/
  - https://hackaday.com/2020/10/15/adding-crush-ribs-to-3d-printed-parts-for-a-better-press-fit/
  - https://hackaday.com/tag/crush-ribs/
  - https://www.marginallyclever.com/2020/09/have-you-heard-of-crush-ribs/
  - https://www.youtube.com/watch?v=0h6dCeATkrU
  - https://newscrewdriver.com/2020/12/31/accommodate-3d-printer-variation-with-crush-ribs/
  - https://www.aon3d.com/applications/engineering-fits-how-to-design-for-3d-printed-assemblies/
  - https://tools.creative3dp.com/blog/press-fit-tolerances-3d-printing/
  - https://formlabs.com/global/blog/3D-printing-tolerances-for-engineering-fit/
  - https://hpi.de/baudisch/projects/springfit.html
  - https://hpi.de/oldsite/fileadmin/user_upload/fachgebiete/baudisch/projects/springFit/Roumen-Shigeyama-springfit-joints-and-mounts-that-fabricate-on-any-laser-cutter-UIST2019
  - https://www.youtube.com/watch?v=NO_UBPPEX1c
  - https://hpi.de/baudisch/projects/kerf-canceling-mechanisms.html
  - https://help.ponoko.com/en/articles/4527166-interlocking-3d-laser-cut-designs
  - https://www.ponoko.com/blog/how-to-make/how-to-make-glue-less-interlocking-parts/
  - https://medesign.seas.upenn.edu/index.php/Guides/LaserCuttingFits
  - https://github.com/andymai/gridfinity-layout-tool/pull/4316
  - https://www.extrabold.tools/docs/gridfinity-baseplate
  - https://en.wikipedia.org/wiki/Interference_fit
  - https://www.connectortips.com/use-compliant-pins-connector-designs/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC9147248/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://en.wikipedia.org/wiki/Neodymium_magnet
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/43599-test-print-crush-ribs-version02

### Other info

- **Fields with unverified parts:** make_it_yourself, making_tips_3d_printing, processes, reuse_cycles, safety_notes, tools_needed

## 60 Mid-print embedding (captive nuts, magnets and bearings)

*print-in-place & 3D-printing joints.* Pausing a print to drop in a nut, magnet or bearing and then printing over it, so the part is trapped inside for good

### What it is

- **plain_name**: Stopping the 3D printer halfway, dropping a metal nut, magnet, bearing or steel balls into a pocket in the part, then letting it print the roof over them so they are sealed inside for good
- **term**: Mid-print embedding (pause-and-insert; embedded nuts, magnets and bearings)
- **aliases**: 
  - pause at height, pause at layer (Cura's 'Pause at Height' post-processing script)
  - Insert pause print (M601) (PrusaSlicer's menu item; M601 is the pause command)
  - Add Pause (Bambu Studio's layer-slider option)
  - embedded nut, fully captive nut, encapsulated nut
  - embedded or hidden magnets
  - embedded ball bearing; BB bearing (printed bearing with steel or airsoft BBs dropped in during a pause)
  - embedding hardware, inserting hardware while printing (Hackaday; JanTec Engineering)
  - gap-cap technique (a printed lid placed over the inserted part before printing resumes; DigiKey, Hackaday) *(unverified parts omitted)*
- **family**: print-in-place & 3D-printing joints
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A way of trapping a nut, magnet, bearing or other metal part completely inside a 3D print by pausing the printer at the right layer, inserting the part, and printing over it.
- **complexity**: A few parts: the printed body with a pocket (cavity), the inserted part or parts (hex nut, disc magnet, ball bearing, steel balls, weights, rods or electronics) and, optionally, a drop of superglue or a small printed lid (gap-cap) over the insert.
- **how_it_works**: The part is designed with a pocket the exact shape of the insert, whose top lines up with a layer boundary. In the slicer a pause is added at the layer that will close the pocket; the printer stops before that layer, parks the nozzle and keeps it hot (Prusa Knowledge Base). You drop the insert in and resume, and the next layers bridge over the pocket and seal it in (Prusa; Printables 'Embedded Nut Test 1'). The insert is then held by shape (form-fit) with plastic on every side, so it can't fall out or turn; a hole left in line with a nut lets a bolt reach it, and a magnet or bearing works through the thin plastic skin or through an opening.

### Finder attributes

- **job**: 
  - join and hold: a sealed-in nut gives strong metal threads for a bolt; a sealed-in magnet makes a hidden magnetic catch or mount
  - let it move (turn, slide or bend): a bearing or ring of steel balls trapped in a printed wheel or race lets it spin (Printables '608 Bearing using BBs')
- **motion**: none for embedded nuts, magnets and weights; rotate (unlimited) for embedded bearings and ball races
- **degrees_of_freedom**: 0 for a sealed-in nut or magnet (it is locked in place); 1 (turning) for an embedded bearing or ball race
- **special_behaviour**: none: the technique simply traps the part; any clever behaviour comes from what is embedded, e.g. a magnet that makes a hidden catch
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the insert is completely surrounded by plastic, so it is held by shape, not friction
  - magnetic: when magnets are embedded, the resulting joint between two parts holds magnetically
- **input_output**: not applicable (an embedded bearing lets a part spin but does not change speed or motion)
- **power**: passive (no power needed)
- **removability**: permanent: the insert can only be removed by cutting or breaking the print; parts with embedded electronics can't be recovered if the electronics fail (Additive Inn). A bolt screwed into an embedded nut can still be undone.
- **reuse_cycles**: once for the embedding itself; a bolt in an embedded nut can be undone many times because the threads are metal on metal (Thomas Sanladerer rates inserted nuts 5 of 5 for durability)
- **tools_needed**: a slicer that can insert a pause (PrusaSlicer, Cura, Bambu Studio); tweezers or pliers to place parts; a marker to mark magnet poles (Rapid Elevation); optionally superglue (cyanoacrylate) to hold inserts still (Prusa; Hubs); a bolt to screw into the finished nut
- **load**: medium: a nut backed by solid plastic resists being pulled out far better than threads in plastic. In CNC Kitchen's M3 tests in PETG (4 perimeters, 100% infill) a nut seated in a pocket and loaded against the plastic (pushed in, not embedded mid-print, but loaded the same way as an embedded nut) held about 166 kg before tearing a crater out, against 86 kg for a nut in a side slot and 118 kg for a screw straight into plastic; turning force was limited to about 2 N m by the plastic crushing. Magnets hold only as hard as the magnet allows, weakened by the plastic skin between them; bearings carry what the plastic housing allows.
- **adjustable**: no: position is fixed by the pocket once printed over
- **play_and_precision**: small: the pocket needs about 0.1-0.3 mm of clearance so the insert drops in (Hubs; DPHacks; Rapid Elevation), so the insert can rattle slightly unless it is a tight fit or glued; its position is otherwise set as accurately as the printer prints the pocket
- **access_needed**: not applicable for fitting (it is done during printing, from above); in use, a bolt reaches an embedded nut from one side only (blind)
- **materials**: Printed body: any FDM filament (PLA, PETG, ABS/ASA, nylon). Inserts: steel hex and square nuts, neodymium (NdFeB) disc and cylinder magnets such as 6 x 2 mm and 10 x 3 mm (Rapid Elevation), ball bearings, steel BBs (4.4 mm) or 6 mm airsoft BBs, carbon-fibre rods, bolts, weights, and small electronics such as LEDs, PCBs and sensors (Additive Inn; JanTec via Hackaday). Avoid magnets if your nozzle or hotend is ferromagnetic (e.g. hardened steel), because the magnet may jump to it (Hackaday/Lost In Tech).
- **maker_difficulty**: easy to moderate: adding a pause is a right-click in the slicer, but you must design the pocket depth to match a layer boundary, pick the right layer, and be at the printer when it pauses

### Making it

- **processes**: 3D print (FDM): the usual method; any printer whose firmware can pause (e.g. M601 on Prusa, M0 on Marlin) (Prusa; Cura PauseAtHeight script) *(unverified parts omitted)*
- **print_in_place**: partly: the part prints around an added part (nut, magnet, bearing or balls) that you insert during a pause
- **making_tips_3d_printing**: 1) Design the pocket: make it the insert's shape plus clearance, about 0.2 mm on the width for a nut (0.1 mm each side), more for nuts over M12 (Hubs); for magnets start around 0.1 mm (DPHacks) to 0.2-0.3 mm on the diameter (Rapid Elevation). A snug pocket stops magnets being pulled out by the nozzle (Prusa). 2) Depth: make the pocket top a whole number of layer heights from the bed and put the insert's top at or slightly below it, never sticking up, or the nozzle will hit it (DPHacks; FettesPS). E.g. with 0.2 mm layers, sit the magnet 0.4 mm below the top surface so two layers cover it (DPHacks); Hackaday/Lost In Tech advise at least 2 layers (0.4-0.6 mm) over magnets. 3) Leave 2-3 solid layers under the pocket and keep it 1-2 mm from outside walls (Rapid Elevation). 4) Choose the pause layer carefully: PrusaSlicer and Bambu Studio pause before the layer you select, so select the first layer that covers the pocket (Prusa Knowledge Base; FettesPS); Cura's 'Pause at Height' script set 'By Layer' asks for the last layer to finish before the pause, and 'By Height' pauses at the start of the layer at or above that height (Cura PauseAtHeight.py). Check the preview. Several pauses can go in one print (Prusa). 5) At the pause the hotend stays hot and the nozzle parks (Prusa); drop the insert in, press it flat, check it is below the surface, and resume. A drop of superglue on the back of a nut or magnet keeps it still (Hubs; Prusa). 6) Magnets: mark the north face of every magnet and test pairs before sealing them in, because a reversed magnet can't be fixed (Rapid Elevation; DPHacks); make sure the nozzle and hotend are not magnetic, and keep strong magnets away from a magnetic print sheet, which they can damage or which can push them out of the pocket (Hackaday/Lost In Tech; DPHacks). Neodymium N-grade magnets lose strength above about 80 °C (Wikipedia), so they must never touch the hot nozzle. 7) Covering the insert: the first layer over metal is a bridge because plastic doesn't stick to metal; small nuts bridge fine, but for large or uneven inserts press a small pre-printed lid (gap-cap) flush into the pocket so the printer has a flat plastic surface to print on (DigiKey 'Embedding objects inside a 3D print'; Hackaday). 10) Try a test piece first, such as a nut test block (Printables 'Embedded Nut Test 1', pause at layers 51 and 54 with 0.2 mm layers; 'Vertically inserted M6 hex nut test piece', pause at layer 63 = 12.6 mm). *(unverified parts omitted)*
- **off_the_shelf_parts**: Hex nuts (ISO 4032 / DIN 934) and thin square nuts; neodymium disc or cylinder magnets (N35, N52 grades; common sizes 6 x 2 mm and 10 x 3 mm) (Rapid Elevation); deep-groove ball bearings such as 608 (22 mm outside, 8 mm bore, 7 mm thick); steel BBs (4.4 mm) or 6 mm airsoft BBs for printed ball races (Printables '608 Bearing using BBs'); carbon-fibre rods, bolts and steel weights for reinforcement or ballast (JanTec via Hackaday); cyanoacrylate glue.
- **rules_of_thumb**: 
  - Pick the layer that closes the cavity; PrusaSlicer pauses before the selected layer, with the hotend kept hot (Prusa Knowledge Base 'Insert pause or custom G-code at layer').
  - Cura's Pause at Height script 'By Layer' takes the number of the last layer to finish before the pause, not the covering layer (Cura PauseAtHeight.py, UltiMaker).
  - Nut pocket clearance: about 0.2 mm on the nut's size (0.1 mm per side) as a starting loose fit, more for nuts larger than M12; a drop of superglue holds the nut (Hubs 'How to assemble 3D printed parts with threaded fasteners').
  - Magnet pockets: 0.2-0.3 mm larger than the magnet diameter, 2-3 solid layers below, 1-2 mm from outer walls (Rapid Elevation 'Magnets in prints'); with 0.2 mm layers put the magnet top 0.4 mm below the surface so 2 layers cover it (DPHacks).
  - Cover embedded magnets with at least 2 layers (0.4-0.6 mm) of plastic (Hackaday 'Ways to embed magnets in 3D prints and not ruin printers', 2026, on Lost In Tech's video).
  - Standard N-grade neodymium magnets work up to about 80 °C; M, H, SH, UH and EH grades up to 230 °C; they lose all magnetism near 320 °C (Wikipedia 'Neodymium magnet').
  - M3 nut in PETG: nut seated in a pocket and loaded against the plastic about 166 kg pull-out; nut in a side slot about 86 kg; screw directly into plastic about 118 kg; nut torque limit about 2 N m (CNC Kitchen 'Helicoils, threaded inserts and embedded nuts').
  - Printed 608-size BB bearing: 10 Daisy BBs (4.40 mm), pause at 4.60 mm for the tight version or 4.80 mm for the loose one; grease quietens it (Printables '608 Bearing using BBs', breeden).

### When to use it

- **everyday_examples**: Filament-spool rollers made with printed bearings whose steel BBs were dropped in during a pause (Printables '608 Bearing using BBs') *(unverified parts omitted)*
- **when_to_use**: Use mid-print embedding when an insert must never fall out or be seen: hidden magnets for lids, catches and wall mounts; nuts deep inside a part where a side slot would weaken it or where there is no room for a heat-set insert; ball bearings or balls that must be trapped in a printed wheel or race; weights, steel rods or carbon-fibre rods to make a print heavier or stronger (JanTec Engineering reports up to 10 times stronger prints, via Hackaday); and LEDs or small electronics sealed into a shape. It gives strong metal threads without the weak slot of an ordinary nut trap (Thomas Sanladerer).
- **when_not_to_use**: Avoid it when you can't stay with the printer, when printing many copies or a whole plate at once (each pause needs a person), when the insert may need replacing (electronics, batteries) or when the part may be recycled; use a captive nut pocket with a side slot, a heat-set insert, a press-fit or glued magnet pocket (e.g. crush ribs) instead. Don't embed strong magnets if your nozzle or hotend is magnetic or your print sheet is magnetic without testing. Don't use it for parts that must survive high heat, because the magnet or the plastic may give up first.
- **environment_limits**: The plastic around the insert limits it: PLA begins to soften at about 60 °C, PETG at 80 °C and ASA at 110 °C (CNC Kitchen oven test), so an embedded nut in PLA can pull or twist loose in a hot car. *(unverified parts omitted)*
- **safety_notes**: The nozzle and bed stay hot during the pause (Prusa), so use tweezers and keep fingers clear. Small neodymium magnets are dangerous if swallowed, especially two or more, and strong magnets can pinch skin or shatter when they snap together (Wikipedia 'Neodymium magnet'); keep loose magnets away from children and seal them in well. A magnet that jumps onto a steel nozzle or a strong magnet near a magnetic bed can damage the printer (Hackaday/Lost In Tech).
- **common_failures**: Nozzle hits an insert that sits proud of the layer and knocks it out or causes a layer shift: make the pocket deeper than the insert and a whole number of layers deep. Pause in the wrong place: one layer too late and the pocket is already covered, too early and the insert sticks up; remember that PrusaSlicer and Bambu pause before the chosen layer while Cura's layer setting means the last layer before the pause. Magnet pulled out by the nozzle: tighter pocket or glue (Prusa). Magnet sealed in backwards: mark and test poles first. First layer over the insert sags or doesn't stick: use a flat gap-cap or keep the span small (DigiKey). Forgetting to insert the part before resuming. Insert rattles: pocket too loose; glue it. *(unverified parts omitted)*
- **related**: 
  - Captive nut pocket (nut trap): a hex pocket or side slot the nut is pushed into after printing; no pause needed and the nut can be replaced, but a side slot is a weak spot (Thomas Sanladerer)
  - Heat-set threaded insert: a brass insert melted into a hole after printing; strong threads without pausing the print
  - Magnet joint (embedded magnets, magnetic catch): the joint that embedded magnets are usually used to make
  - Crush ribs and spring-fit features (compliant press fit): hold a magnet or bearing in an open pocket after printing, so it can be removed
  - Turntable bearing (lazy-Susan bearing, slewing ring): printed versions often trap airsoft BBs with this technique
  - Plain pivot and rolling bearing: the ordinary way to fit a bought bearing into a housing
  - Printed screw thread: no metal part at all, but weaker for small sizes

### Pictures, videos and models

- **links**: 
  - [Insert pause or custom G-code at layer (Prusa Knowledge Base)](https://help.prusa3d.com/article/insert-pause-or-custom-g-code-at-layer_120490): Screenshots of PrusaSlicer's layer slider and the 'Insert pause print (M601)' menu, with advice on choosing the layer that closes the cavity *(licence: link only)*
  - [Stronger 3D Prints by Inserting Hardware While Printing (YouTube, JanTec Engineering)](https://www.youtube.com/watch?v=b1JfzW8GPZo): Video of pausing prints to insert bolts, metal shapes, carbon-fibre rods and other fillers, and testing how much stronger the parts become (summarised by Hackaday, 2025-12-21) *(licence: link only (standard YouTube licence))*
  - [Magnets in 3D Prints: How to ruin your printer edition (YouTube, Lost In Tech)](https://www.youtube.com/watch?v=xTfytJBLEn4): Video on ways to embed magnets, and how magnets can stick to a ferromagnetic nozzle or damage a magnetic print bed (summarised by Hackaday, 2026-06-04) *(licence: link only (standard YouTube licence))*
  - [Embedding Objects Inside a 3D Print (DigiKey Maker blog, Don Johanneck, 2025)](https://www.digikey.com/en/maker/blogs/2025/embedding-objects-inside-a-3d-print): Photos of a slot with a stepped floor, an LED strip dropped in during a pause, and the printed gap-cap pressed flush before printing resumes *(licence: link only)*
  - [Use A Gap-Cap To Embed Hardware In Your Next 3D Print (Hackaday, 2026)](https://hackaday.com/2026/03/27/use-a-gap-cap-to-embed-hardware-in-your-next-3d-print/): Pictures and explanation of the gap-cap method for sealing larger or uneven inserts inside a print *(licence: link only)*
- **make_it_yourself**: 
  - [Embedded Nut Test 1 (Jordy's Prints, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/173849-embedded-nut-test-1): A small test block for embedding nuts; slice at 0.2 mm layers and add pauses at layers 51 and 54, before the printer bridges over each hole *(licence: Creative Commons Public Domain)*
  - [Vertically inserted M6 hex nut test piece (M601) (hmk, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1325800-vertically-inserted-m6-hex-nut-test-piece-m601): Test piece for sealing an M6 hex nut inside a print; pause at layer 63 (12.6 mm) with 0.2 mm layers; FreeCAD model included *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [608 Bearing using BBs (breeden, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/66530-608-bearing-using-bbs): A printed 608-size ball bearing (22 x 8 x 7 mm) made by pausing at 4.60 mm (tight) or 4.80 mm (loose) and dropping in 10 steel BBs of 4.40 mm *(licence: Creative Commons Public Domain)*
  - [Embedded Magnets Negative Volume Generator for PrusaSlicer: cylinder magnets (layer.works, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/222274-embedded-magnets-negative-volume-generator-for-pru): Ready-made negative-volume shapes for 12 common magnet sizes, plus the OpenSCAD script, to cut flush or embedded magnet pockets into any model in PrusaSlicer, with pause instructions *(licence: GNU GPL v2.0)*
  - [Cura 'Pause at Height' post-processing script (UltiMaker Cura source)](https://raw.githubusercontent.com/Ultimaker/Cura/main/plugins/PostProcessingPlugin/scripts/PauseAtHeight.py): The script behind Cura's Extensions > Post Processing > Pause at Height: pause by layer or height, park and lift the print head, standby temperature and beep options *(licence: LGPL-3.0 or later)*
- **diagram_idea**: A three-step side cut-away of a print: step 1, the printer has built up to the top of a hexagonal pocket and paused with the nozzle parked; step 2, a hand drops a nut (or magnet) into the pocket so its top sits just below the last printed layer; step 3, printing resumes and the next layers bridge across, sealing the nut in, with a bolt hole left above it and a label showing 'pause before this layer'.
- **sources**: 
  - https://help.prusa3d.com/article/insert-pause-or-custom-g-code-at-layer_120490
  - https://raw.githubusercontent.com/Ultimaker/Cura/main/plugins/PostProcessingPlugin/scripts/PauseAtHeight.py
  - https://raw.githubusercontent.com/Ultimaker/Cura/main/LICENSE
  - https://www.fettesps.com/how-to-add-a-pause-when-printing-in-bambu-studio/
  - https://github.com/bambulab/BambuStudio/issues/1596
  - https://hackaday.com/2026/06/04/ways-to-embed-magnets-in-3d-prints-and-not-ruin-printers/
  - https://www.youtube.com/watch?v=xTfytJBLEn4
  - https://hackaday.com/2026/03/27/use-a-gap-cap-to-embed-hardware-in-your-next-3d-print/
  - https://www.digikey.com/en/maker/blogs/2025/embedding-objects-inside-a-3d-print
  - https://hackaday.com/2025/12/21/pause-print-add-hardware-and-enjoy-strength/
  - https://www.youtube.com/watch?v=b1JfzW8GPZo
  - https://www.additiveinn.com/blog/embedding-in-3d-prints
  - https://rapidelevation.com/article-07-magnets-in-prints.html
  - https://dphacks.com/2025/11/02/how-to-add-hidden-magnets-to-3d-prints/
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.cnckitchen.com/blog/helicoils-threaded-insets-and-embedded-nuts-in-3d-prints-strength-amp-strength-assessment
  - https://toms3d.org/2025/01/14/a-better-way-to-add-threads-to-your-3d-prints/
  - https://hackaday.com/2025/01/11/comparing-ways-to-add-threads-to-your-3d-prints/
  - https://en.wikipedia.org/wiki/Neodymium_magnet
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, everyday_examples, making_tips_3d_printing, processes, seal

## 61 Heat staking (melted plastic rivet)

*print-in-place & 3D-printing joints.* A plastic post pushed through a hole and melted over with heat to form a rivet head that holds the parts together

### What it is

- **plain_name**: A plastic peg on one part pokes through a hole in the other part, and you melt its tip flat with a hot tool so it spreads into a mushroom-shaped head, like a rivet made of the part's own plastic, and the parts can no longer pull apart
- **term**: Heat staking (thermal staking, thermoplastic staking)
- **aliases**: 
  - thermal staking (name used in Branson's 'Thermal Staking Design Guidelines')
  - thermoplastic staking (Wikipedia 'Staking (manufacturing)', which says it is also called heat staking)
  - hot punch staking or thermal punch staking (Wikipedia lists 'thermal punch (hot punch)' as one staking technology)
  - hot air cold staking or hot-air cold upset (the post is softened with hot air and shaped with a cold tool; Wikipedia, Extol, ASSEMBLY magazine)
  - ultrasonic staking or ultrasonic riveting (the post is melted by vibration instead of a hot tip; Dukane 'Ultrasonic Staking Configurations')
  - infrared staking and impulse staking (other ways of heating the post; Wikipedia, Extol, ASSEMBLY magazine)
  - plastic riveting, melted plastic rivet (plain descriptions; Dukane calls the stud a 'plastic rivet')
  - heat-staked mortise and tenon, heat-staked pins or fins (maker names for the 3D-printed version; Hackaday, Richard Sewell's GitHub notes)
  - stake, boss, stud or post (names for the peg before it is melted) and dome, rosette, hollow, knurled or flush stake (names for the head shapes; Branson, Dukane, Extol)
  - cold staking or cold forming (a related method that squashes the post without heating it; Wikipedia, ASSEMBLY magazine)
- **family**: print-in-place & 3D-printing joints
- **other_families**: interlocking joints & joinery
- **one_liner**: A post on one plastic part is pushed through a hole in another part and its end is melted and pressed into a head, locking the parts together for good with no screw, rivet or glue.
- **complexity**: A few parts, but no separate fastener: (1) the plastic part with one or more posts (studs or bosses) moulded or printed on it, (2) the part to be held, with a hole for each post, often with a countersink or chamfer to receive the melted plastic, and (3) a heated tool (a soldering iron at home, or a shaped hot tip, hot air, infrared or ultrasonic horn in a factory) that forms the head (Branson; Wikipedia; Richard Sewell's heat-staking notes).
- **how_it_works**: The post is made a little longer than the stack it passes through, so its tip sticks out beyond the part it has to hold. A hot tip presses on the end of the post; the plastic softens and, under steady pressure, flows to fill the shaped cavity in the tip (or a countersink in the hole), forming a head wider than the hole (Branson 'Thermal Staking Design Guidelines'). When it cools and hardens, the head cannot pull back through the hole, so the parts are held by shape, much like a metal rivet, and the post itself stops the parts sliding sideways (Wikipedia 'Staking (manufacturing)'; Hackaday). Because only the plastic post melts, the held part can be metal, a circuit board, fabric or a different plastic (Wikipedia; Branson).

### Finder attributes

- **job**: 
  - join and hold: permanently fixes a plastic part to another part (plastic, metal, circuit board, fabric)
  - line parts up exactly: the posts pass through holes, so they also locate the parts before and after melting (Richard Sewell's notes say separate staked parts can be more accurate than one complex print)
- **motion**: none: the joint is rigid once the head is formed
- **degrees_of_freedom**: 0: the post stops sideways sliding and turning (with two or more posts, or a square or finned post), and the melted head stops the parts pulling apart
- **special_behaviour**: 
  - none: it is a plain permanent fixing. (A hollow post can later be drilled out and replaced by a self-tapping screw for repair, but that is a repair trick, not a behaviour of the joint; Branson; Dukane)
- **holding_principle**: shape (the parts interlock; form-fit): the melted head is wider than the hole, like a rivet head, and the post fills the hole so the parts can't slide (Branson; Wikipedia)
- **input_output**: not applicable
- **power**: passive (no power needed): heat is only needed while making the joint; the finished joint needs no power
- **removability**: permanent: the head has to be cut, drilled or melted off to separate the parts, which usually destroys the post (Fictiv calls it nearly irreversible; Jeff Epler notes you can't remove a staked circuit board without destroying the print). Exception: hollow stakes can be drilled out and the part re-fixed with a self-tapping screw (Branson; Dukane).
- **reuse_cycles**: once
- **tools_needed**: At home: a soldering iron, ideally with a broad flat tip (Jeff Epler used heat-set insert tips) or using the side of the barrel, plus a piece of Kapton (polyimide) tape so the plastic doesn't stick to the iron (Hackaday; Jeff Epler; Richard Sewell). Helpful: a vice to hold the parts tightly, side cutters to trim over-long pins and a needle file to clean holes (Richard Sewell). In industry: heat-staking machines with shaped heated tips, hot-air, infrared or ultrasonic staking machines, or a hand-held heat-staking 'pencil' for small batches (Wikipedia; Extol; Plastic Assembly Systems video).
- **seal**: none: the head holds the parts together but does not seal the hole or the joint line
- **load**: Light to medium. Twisting is resisted by using two or more posts, square or rectangular posts, fins, or knurled or ribbed posts (Fictiv; Extol; Richard Sewell). Published strength data for 3D-printed heat-staked joints are scarce: Richard Sewell notes he has done no strength comparison tests. *(unverified parts omitted)*
- **adjustable**: no: position and clamping are fixed when the head is formed
- **play_and_precision**: small: the hole is made slightly bigger than the post so the parts go together (Richard Sewell adds 0.1 mm all round for prints; Extol advises holes 10-25% larger than the boss; Fictiv gives +0.05-0.15 mm), and melting then presses the head down onto the part. *(unverified parts omitted)*
- **access_needed**: one side only (blind): the hot tool only needs to reach the tip of the post on the far side of the held part; nothing is needed on the other side once the parts are pushed together (Fictiv notes it works in restricted-access areas)
- **materials**: The post must be a thermoplastic (a plastic that softens when heated): e.g. ABS, polycarbonate, polypropylene, polyethylene and nylon (polyamide) (ASSEMBLY magazine; Fictiv). Filled plastics work: Branson recommends dome stakes for crystalline plastics such as 33% glass-filled grades and for abrasive fillers, and rosette stakes for low-density unfilled plastics; Dukane says pointed studs work best with plastics that soften gradually such as ABS, and rosette studs with plastics that melt sharply such as nylon. The held part can be almost anything that doesn't melt at the staking temperature: metal, circuit boards, other plastics, fabric (Wikipedia; Branson; Richard Sewell). 3D printing: ASA and TPU (Richard Sewell), PETG (Jeff Epler); other FDM plastics are expected to work (Richard Sewell). *(unverified parts omitted)*
- **maker_difficulty**: easy: needs only a soldering iron and Kapton tape, and the posts and countersunk holes are simple to add in CAD; getting a neat, strong head takes a few practice pieces

### Making it

- **processes**: 
  - 3D print (FDM): print the posts or fins on one part and the holes in the other, then stake with a soldering iron (Richard Sewell; Jeff Epler; Hackaday)
  - injection moulding: the usual industrial route, with posts moulded on and heads formed by staking machines (Branson; Fictiv; ASSEMBLY magazine)
  - laser cut, CNC or sheet metal for the held part: a laser-cut sheet, fabric, metal bracket or circuit board with holes can be staked onto a plastic part (Wikipedia; Richard Sewell) *(unverified parts omitted)*
- **print_in_place**: no: the parts are printed separately, assembled and then staked. The posts are printed as part of one piece, so no extra fastener is printed or bought.
- **making_tips_3d_printing**: 1) Post size and shape: round or square pegs 3-4 mm across, or fins 2 mm wide and at least 10 mm long; 5 mm pegs in 5 mm plates were very easy, but 2 mm pins did not work because printing inaccuracies made the fit too poor (Richard Sewell's heat-staking notes). Hubs also advises FDM pins of at least 5 mm diameter, or off-the-shelf pins for anything smaller. 2) Print the post lying flat, not standing up: 'vertical 3mm pins are ridiculously weak' because the layers run across the pin; if a pin must be vertical, print it as a separate piece lying down (Richard Sewell). Square pegs are easiest to print horizontally (Richard Sewell; Hackaday). 3) Give the melt somewhere to go: a 1 mm chamfer or countersink around the hole on the staking side, and let the post stick out 1-1.5 mm through the hole so there is enough plastic to fill it; the finished head then sits flush (Richard Sewell). For a fat 5 mm pin, a counterbore in the end of the pin means you only melt a 1 mm ring (Richard Sewell). Jeff Epler's rule: a post sticking up 1.6 x the hole diameter flattens to a head about 2 x the hole diameter and 0.5 x the hole diameter high. 4) Clearance: make holes 0.1 mm bigger all round than the post (0.2 mm on the width), and add a 0.5 mm countersink on the assembly side of the hole to clear the small fillet the printer leaves at the base of the post (Richard Sewell). 5) Add a shoulder of 1-2 mm, on at least two sides, so the part can't slide down the post (Richard Sewell). 6) Staking: clamp the parts together tightly (a vice helps), cover the pin end with Kapton tape, press with the side of the iron and roll it slightly as the plastic melts into the countersink; little force is needed; peel off the tape once it has set, and reuse it (Richard Sewell, iron at 300 °C for ASA; Jeff Epler, lowest iron setting of '280 C' for PETG). Hackaday suggests the iron's barrel, or a broad chisel tip for small joints, to spread the heat and force. 7) Use it to combine materials: flexible TPU parts can be staked onto rigid ASA plates to make hinges, belts and flexures (Richard Sewell). 8) Expect some CAD work and slightly rough-looking heads; dovetail-shaped and square tenons worked best in Richard Sewell's tests.
- **off_the_shelf_parts**: None needed for the joint itself. Supplies: Kapton (polyimide) tape; a temperature-controlled soldering iron with a broad flat or heat-set-insert tip (Jeff Epler). For production or larger batches, search for a 'heat staking tip' or 'heat staking tool', a 'hand-held heat staking pencil' (Plastic Assembly Systems video) or 'heat staking machine', 'hot air staking' or 'ultrasonic staking' equipment (Extol; Dukane; Sonitek).
- **rules_of_thumb**: 
  - Dome stake, high profile: finished head about 2 x the post diameter across and 0.75 x the post diameter high; total post height = thickness of the held part + 1.75 x the post diameter. Low profile: head 1.5 x the post diameter across, 0.375 x high, post height = held thickness + 0.45 x diameter. Dome stakes suit posts up to about 0.25 in (6.35 mm) diameter (Branson 'Thermal Staking Design Guidelines', pages 1-2).
  - Rosette stakes suit posts from 0.063 in (1.6 mm) diameter up, with head 2 x the post diameter; hollow posts are best from 0.156 in (4 mm) outside diameter, with the bore half the outside diameter, a head 2 x the outside diameter and post height = held thickness + 1.5 x diameter; a hollow stake can later be re-fixed with a self-tapping screw (Branson, page 3).
  - Flush stake: the held part needs a 45° countersink about 0.38 x the post diameter deep, and the post sticks out 0.5 x its diameter above the held part (Branson, page 4).
  - Ultrasonic stakes: for a post of diameter 2r the head is typically 4r across (twice the post diameter) and r high (half the post diameter), with the post sticking out between about 1.2r and 3.1r depending on head shape; match the post volume to the head volume to fill the head without excess flash (Dukane 'Ultrasonic Staking Configurations').
  - Make the hole 10-25% larger than the post diameter; a mating surface square to the post is ideal (Extol 'How to design for plastic staking').
  - Posts at least 2 mm diameter and 1.5-2 x as tall as they are wide; hole 0.05-0.15 mm larger than the post; 0.5-1° draft on moulded posts (Fictiv).
  - Posts can sit as close as 1 mm from a wall; for cold forming keep the post no longer than twice its diameter or it may buckle (ASSEMBLY magazine 'Staking for Plastic Parts Assembly').
  - Home 3D-printed version: 3-4 mm pegs or 2 mm x 10 mm fins, 1 mm countersink, 1-1.5 mm stick-out, 0.1 mm clearance all round, iron around 300 °C with Kapton tape (Richard Sewell's heat-staking notes); post 1.6 x the hole diameter tall forms a head 2 x the hole diameter across (Jeff Epler).

### When to use it

- **everyday_examples**: 
  - Circuit boards and switch parts held inside plastic cases by little melted posts instead of screws (Jeff Epler, inspired by tactile switches; Fictiv lists housings, circuit boards and buttons)
  - Car interior parts: door panels, instrument panels, cup holders and fog-lamp housings (ASSEMBLY magazine; Fictiv)
  - Household appliance parts and medical device casings (ASSEMBLY magazine; Fictiv)
- **when_to_use**: Use heat staking when you want a small, neat, permanent joint between a plastic part and something else, with no screws, nuts or glue to buy: fixing a circuit board, metal bracket, fabric, flexible TPU part or second plastic part to a printed or moulded part. It is useful for 3D prints when splitting a design into separately printed pieces lets each piece be printed in its strongest orientation or without supports, and for joining different materials, such as soft TPU to rigid ASA (Richard Sewell). It is quick and cheap, needs access from one side only, and many posts can hold a part evenly.
- **when_not_to_use**: Don't use it when the parts must come apart for servicing (use screws into heat-set inserts, a snap fit or a push-in plastic rivet instead), when the part carrying the post isn't a thermoplastic (thermoset resin prints, wood, metal), when the joint must carry big loads or stay tight when hot (use metal screws or rivets), or when you need a watertight joint (use gaskets, solvent welding or glue). Very thin pins (about 2 mm or less) printed on an FDM printer fit poorly and are weak (Richard Sewell). Avoid it right next to heat-sensitive electronics unless the heat is well controlled (ASSEMBLY magazine).
- **environment_limits**: The head is made of the part's own plastic, so the joint is only as heat-resistant as that plastic: in CNC Kitchen's oven test, PLA started to give at about 60 °C, PETG at about 80 °C and ASA at about 110 °C. Heads formed without enough heat (cold-formed posts) tend to spring back and can show fine surface cracking (crazing) and chemical attack; hot-formed heads have lower built-in stress (ASSEMBLY magazine). *(unverified parts omitted)*
- **safety_notes**: The soldering iron or staking tip is hot enough to burn skin. Melting plastic gives off fumes (Jeff Epler notes melting PETG releases 'nasty fumes'), so work in a well-ventilated place. Heat can damage nearby electronic parts on a board being staked (ASSEMBLY magazine).
- **common_failures**: Head too small or incomplete because the post was too short to supply enough plastic, so it pulls through the hole; or too much plastic, leaving flash: match post volume to head volume (Branson; Dukane). Post snaps at its base because it was printed standing up with layers across it; print pins lying flat or as separate horizontal pieces (Richard Sewell). Poor fit with tiny pins or rough holes; use 3 mm or bigger pegs, 0.1 mm clearance and a file to clean the holes (Richard Sewell). Melted plastic sticks to the iron and leaves a rough head; use Kapton tape (Hackaday; Jeff Epler). Overheating degrades or warps the plastic and gives weak stakes (Fictiv). Joint left loose because the head sprang back before it cooled under pressure; hold the tool until the plastic sets (ASSEMBLY magazine). Long posts buckle under the tool (ASSEMBLY magazine).
- **related**: 
  - Heat-set threaded insert: uses the same soldering iron, but melts a brass insert into the plastic to give reusable screw threads instead of a permanent head
  - Push-in plastic rivet (fir-tree clip, push rivet): a separate plastic rivet that pushes in and can often be removed, instead of melting part of the part itself
  - Blind rivet (pop rivet): a metal rivet set from one side; stronger, but a separate part
  - Cantilever snap fit: a moulded or printed hook that clicks in and can be undone, instead of a permanent melted head
  - Solvent welding and ultrasonic welding: fuse two plastic surfaces together (material bond) instead of forming a mechanical head
  - Hot-melt adhesive (glue gun): also melted plastic, but used as a separate glue rather than reshaping the part
  - Mid-print embedding: traps a nut, magnet or bearing inside the print instead of fixing it on afterwards
  - Clinching and bent tabs through slots: the sheet-metal cousins that deform the material cold to lock parts together
  - Split-part joints for large prints: heat staking is one of the ways to fix split pieces together

### Pictures, videos and models

- **links**: 
  - [Heat-staked joints for assembling 3D prints (Richard Sewell, 'jarkman', GitHub, November 2023)](https://github.com/jarkman/makevember-23-heat-staking): Step-by-step photos of printed pins pushed through holes, Kapton tape and a soldering iron, and the finished flush staked joints, plus design rules and STL/3MF/Fusion 360 test pieces *(licence: CC0 1.0 (public domain dedication))*
  - [Tricky 3D Printed Joinery Problem? Give Heat Staking A Try (Hackaday, February 2024)](https://hackaday.com/2024/02/03/tricky-3d-printed-joinery-problem-give-heat-staking-a-try/): Photo of a heat-staked 3D-printed mortise-and-tenon joint and a plain explanation of the soldering-iron method *(licence: link only)*
  - [Thermal Staking Design Guidelines (Branson / Emerson technical information sheet)](https://www.branson.emerson.com/is/content/emerson/en/corporate/branson/documents/thermal-staking-design-guide-pgs.pdf): Dimensioned cross-section drawings of dome (high and low), rosette (high and low), hollow, knurled and flush stakes before and after forming *(licence: link only)*
  - [Heat staking close up example - Sonitek (YouTube, SonitekCorp)](https://www.youtube.com/watch?v=r5LH1H1qd7s): Close-up video of a heated tip forming a plastic post into a head (title checked via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [Heat Staking - Hand Held Heat Staking Pencil by Plastic Assembly Systems (YouTube)](https://www.youtube.com/watch?v=BIE6XcfOs_Y): A hand-held heat-staking tool used for low-volume staking (title checked via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [makevember-23-heat-staking (Richard Sewell, GitHub)](https://github.com/jarkman/makevember-23-heat-staking): STL and 3MF test pieces (round, square, triangular and dovetail tenons, fins, TPU-to-ASA flexures, hinges, a bag and a pencil case) and Fusion 360 source files for trying heat-staked joints *(licence: CC0 1.0 (public domain dedication))*
  - [heat stake and ultrasonic welding test (winchcable22, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/833859-heat-stake-and-ultrasonic-welding-test): A printed test stake for pull-testing heat-staked or ultrasonically welded printed posts; the author reports ASA, ABS and PA6-CF passing a JIS K 7161 pull test when welded to moulded polypropylene. Read through the Printables public API. *(licence: Creative Commons Public Domain)*
  - [Heat-staking in 3D prints (Jeff Epler's blog)](https://emergent.unpythonic.net/01612362040): Short how-to for holding a circuit board in a printed part with heat-staked bosses, with a sizing rule and tool tips *(licence: link only (copyright Jeff Epler))*
- **diagram_idea**: A three-step side cut-away: (1) a printed plate with a post pushed through a countersunk hole in a second plate, the post sticking out a little; (2) a soldering iron with Kapton tape pressing on the post tip as it softens; (3) the finished mushroom head filling the countersink, with arrows showing that pulling the plates apart is blocked by the head and sliding is blocked by the post.
- **sources**: 
  - https://en.wikipedia.org/wiki/Heat_staking
  - https://en.wikipedia.org/wiki/Staking_(manufacturing)
  - https://www.branson.emerson.com/is/content/emerson/en/corporate/branson/documents/thermal-staking-design-guide-pgs.pdf
  - https://www.ultrasonic-resonators.org/misc/references/articles/Dukane__'Ultrasonic_Staking_Configurations'.pdf
  - https://www.dukane.com/resources/blog/item/thermal-heat-vs-ultrasonic-staking
  - https://blog.extolinc.com/how-to-design-for-plastic-staking
  - https://blog.extolinc.com/comparing-plastic-staking-technologies
  - https://www.fictiv.com/articles/heat-staking-for-productdevelopment
  - https://www.assemblymag.com/articles/94465-staking-for-plastic-parts-assembly
  - https://www.sonitek.com/design-guides-for-heatstaking-ultrasonic-welding/
  - https://hackaday.com/2024/02/03/tricky-3d-printed-joinery-problem-give-heat-staking-a-try/
  - https://github.com/jarkman/makevember-23-heat-staking
  - https://raw.githubusercontent.com/jarkman/makevember-23-heat-staking/main/README.md
  - https://raw.githubusercontent.com/jarkman/makevember-23-heat-staking/main/LICENSE
  - https://emergent.unpythonic.net/01612362040
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=r5LH1H1qd7s
  - https://www.youtube.com/watch?v=BIE6XcfOs_Y

### Other info

- **Fields with unverified parts:** environment_limits, load, materials, play_and_precision, processes

## 62 Split-part joints for large prints (dovetail keys, puzzle joints, alignment pins)

*print-in-place & 3D-printing joints.* Ways to cut a model too big for the printer into pieces that slide, lock or peg back together accurately

### What it is

- **plain_name**: Ways to cut a model that's too big for your printer into smaller pieces, with pegs and holes, sliding wedge-shaped tabs or jigsaw-puzzle edges on the cut faces, so the pieces line up exactly and lock or glue back together
- **term**: Split-part joints for large prints (model segmentation with connectors: alignment pins or dowels, dovetails and puzzle joints)
- **aliases**: 
  - cut connectors: plug, dowel and snap connectors (names used by the PrusaSlicer and Bambu Studio Cut tools)
  - alignment pins, locating pins, pegs and sockets, peg-and-socket joints (Bambu Studio wiki; Prusa knowledge base)
  - dowel pins, dowels (Bambu Studio and PrusaSlicer 'Dowel' connector; Wikipedia 'Dowel')
  - dovetail joint, dovetail cut, sliding dovetail, tapered dovetail (PrusaSlicer and Bambu Studio 'Dovetail' mode; BOSL2 dovetail(); Wikipedia 'Dovetail joint')
  - puzzle joint, jigsaw joint, tongue joint (T, I and finned tongues) (Formlabs; BOSL2 'jigsaw' cut path)
  - hammerhead, finger (comb) and sawtooth joints (other interlocking cut-path shapes in BOSL2 partitions.scad)
  - model splitting, model segmentation or partitioning (Chopper, SIGGRAPH Asia 2012; IEOM 2024 study)
  - interlocking joints for 3D printed parts (Hubs; Formlabs) *(unverified parts omitted)*
- **family**: print-in-place & 3D-printing joints
- **other_families**: interlocking joints & joinery, locating & alignment, snap & clip fits
- **one_liner**: A big model is cut into printable pieces and the cut faces are given matching pegs, holes, dovetails or puzzle shapes, so the pieces go back together in exactly the right place and are then glued, clipped or simply slid together.
- **complexity**: A few parts: the printed pieces themselves, with matching features on each cut face (a peg on one face and a hole in the other; holes in both faces plus a separate loose pin; a dovetail tail and groove; or a wavy puzzle edge), plus, if used, separate pins (printed dowels, pieces of 1.75 mm filament, wooden dowels or steel pins) and glue, screws or magnets (PrusaSlicer and Bambu Studio cut tools; Prusa forum; Maker.io).
- **how_it_works**: The model is cut along a flat plane in CAD or in the slicer's Cut tool, and matching features are added to both cut faces (Prusa knowledge base 'Cut tool'; Bambu Lab wiki). Pegs and holes, or loose dowels in holes on both faces, stop the pieces sliding or twisting against each other and put them back in the same place every time; a dovetail's wedge-shaped tail slides into a matching groove and resists being pulled apart in every direction except the one it slides in; a puzzle or jigsaw edge works the same way within a flat plane (Bambu Lab wiki; BOSL2 joiners.scad and partitions.scad). The features mainly line the pieces up and take sideways (shear) loads; glue, a tight friction fit, a snap catch or screws then hold the pieces together (Maker.io; Hubs).

### Finder attributes

- **job**: join and hold: rebuilds one large object from several printed pieces, line parts up exactly: pegs, dowels and dovetails set the position of each piece so seams match
- **motion**: none: the finished joint is rigid (a dovetail slides in one direction only while being assembled)
- **degrees_of_freedom**: 0 once assembled and glued. Before gluing, pegs and dowels leave only the pull-apart direction free, and a dovetail leaves only its sliding direction free (BOSL2 joiners.scad).
- **special_behaviour**: 
  - self-aligning or self-centring: pegs, dowels, tapered dovetails and chamfered edges guide the pieces into the right position as they are pushed together; a tapered dovetail slides freely until fully closed and then wedges tight (BOSL2 dovetail())
  - none of the other behaviours: it is a static joint
- **holding_principle**: 
  - shape (the parts interlock; form-fit): dovetails and puzzle edges lock against pulling apart in the plane; pegs and dowels stop sliding
  - material bond (glue, solvent or melting): most split prints are finally glued, e.g. superglue for PLA and two-part epoxy for PETG or ABS (Bambu Lab wiki)
  - friction or clamping (force-fit): tight pins or dovetails, or screws and bolts through the pieces (Maker.io)
  - spring force (a spring or springy part presses it in place): snap connectors from the slicer's Cut tool, or a dovetail with a snap catch (PrusaSlicer 'Snap' connector; Printables 'Dovetail Joint with Snap Fit Connector')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: permanent when glued, which is the usual finish for statues and props (Bambu Lab wiki; Prusa knowledge base). Removable or tool-free when the joint is left dry: dovetails and puzzle joints often need no glue and can be taken apart, and bolted or magnetic joints are easy to undo (Maker.io).
- **tools_needed**: A CAD program or a slicer with a Cut tool that adds connectors (PrusaSlicer, Bambu Studio); glue (superglue for PLA, two-part epoxy for PETG or ABS), clamps, sandpaper or a file (start at 220 grit) to ease tight pegs and holes, and filler putty and primer to hide seams (Bambu Lab wiki). Optional: a drill to size pin holes exactly, since printed holes come out small (Prusa forum; Hubs), and screws, nuts or magnets for removable joints (Maker.io).
- **load**: Light to medium: the seam is usually the weakest place in the finished model (Maker.io says flat glued joints have lower structural integrity than the original part). Pegs, dowels and dovetails are good in shear (sideways sliding); dovetails and puzzle edges also resist pulling apart within the cut plane, while glue, screws or snaps carry the pull straight across the seam. Bending across the seam is the weak case: in a study of PLA segments, adding superglue made round screw joints much stronger in bending but made flat dovetail joints weaker (Melhem, Jaradat and Abdelall, IEOM 2024). Small printed pins under about 5 mm diameter are weak (Hubs).
- **adjustable**: no: the connectors fix the pieces' positions; fit can only be eased by sanding before gluing
- **play_and_precision**: none to small: well-fitted pins and dovetails give very repeatable alignment, with a little play set by the clearance (e.g. 0.15 mm on the 'Python' dovetails, Printables); a tapered dovetail wedges tight with no play (BOSL2). Printed parts are only accurate to about 0.2 mm (Prusa knowledge base), so seams may still need filling and sanding. Tolerates little misalignment: warped pieces or ones printed in different orientations or layer heights leave visible ridges (Bambu Lab wiki).
- **access_needed**: not applicable: the pieces are pushed or slid together by hand. A sliding dovetail needs free space at one end of its groove for the tail to slide in (BOSL2 dovetail() 'entry_slot_length').
- **materials**: Any printing material: PLA, PETG, ABS and ASA on FDM printers (Hubs prefers ABS to PLA for FDM interlocking joints), resin (Formlabs: dovetails suit SLA's sharp edges, but standard resin parts can be brittle unless a tough resin is used; Hubs), and nylon by SLS or material jetting, which Hubs rates best for interlocking joints. Snap-type connectors need a springy plastic such as PETG; in PLA the snap arms may break (Printables 'Dovetail Joint with Snap Fit Connector'). Loose pins can be printed, cut from 1.75 mm filament, or be wooden dowels or 2 mm steel roll pins (Prusa forum; Wikipedia 'Dowel'). Glue: superglue (cyanoacrylate) for PLA, two-part epoxy for PETG or ABS (Bambu Lab wiki).
- **maker_difficulty**: easy: PrusaSlicer and Bambu Studio can cut a model and add pegs, dowels, snaps or dovetails automatically; getting a good fit needs a calibrated printer (correct flow) and usually a small test print

### Making it

- **processes**: 
  - 3D print (FDM): the main use; cut in the slicer or CAD and print each piece in its best orientation (Prusa knowledge base; Bambu Lab wiki)
  - 3D print (resin): SLA suits dovetails with sharp edges; allow about 0.4 mm assembly clearance (Formlabs)
  - 3D print (SLS, material jetting): the most accurate printed interlocking joints (Hubs)
  - off-the-shelf part: wooden dowels, steel dowel or roll pins, screws and magnets as the connectors (Prusa forum; Maker.io) *(unverified parts omitted)*
- **print_in_place**: no: the pieces are printed separately (often on separate plates) and assembled afterwards; with 'dowel' connectors the slicer even prints the pins as extra separate objects (PrusaSlicer Cut tool).
- **making_tips_3d_printing**: 1) Plan the cuts: cut where there is plenty of flat area to glue and room for pegs, not through fine details or at the thinnest points (Gambody); splitting also lets each piece be printed in its best orientation with fewer supports, which can improve both looks and strength (Prusa knowledge base; Bambu Lab wiki). Number or letter the pieces (Gambody; Bambu Lab wiki). 2) Use the slicer: in PrusaSlicer or Bambu Studio open the Cut tool (C key in Bambu Studio), choose Planar or Dovetail mode, and add connectors: Plug (a peg on one side and a hole on the other), Dowel (holes on both sides plus separate printed pins) or Snap (a snap-fit catch); set shape, depth, size and tolerance, then choose 'place on cut' so each cut face lies flat on the bed (Prusa knowledge base; Bambu Lab wiki). Dovetail settings are depth, width, flap angle and groove angle (Bambu Lab wiki). 3) Clearance: allow for your process: Hubs gives 0.5 mm for FDM, 0.2 mm for SLA and SLS and 0.1 mm for material jetting; Formlabs recommends at least 0.4 mm for SLA assemblies and 0.2 mm (small) to 0.4 mm (large) for SLS; a proven FDM dovetail design uses 0.15 mm and should slide together 'with little effort', not with a mallet (Printables 'Python - Dovetail Test Pieces'). Print a small test joint first (Printables dovetail test pieces). 4) Calibrate flow: over-extrusion is the usual reason dovetails won't go together (Printables 'Python - Dovetail Test Pieces'). 5) Pins: FDM pins thinner than about 5 mm are weak, so use off-the-shelf pins in printed holes instead (Hubs); a neat trick is to model 1.75 mm holes in both faces and use short pieces of filament as pins, or 2 mm steel roll pins in 2.1 mm holes, drilling the holes to size because printed holes come out small (Prusa forum; Hubs). 6) Chamfer or round the edges of pegs and holes so they slide together easily, and avoid sharp corners that concentrate stress (Prusa knowledge base; Hubs). 7) Keep supports off the cut faces and connectors, and use the same orientation, layer height and settings for all pieces so the seams match (Bambu Lab wiki). Use a brim if pieces warp, as warping causes misalignment (Bambu Lab wiki). 8) Assemble: dry-fit first; sand tight pegs or holes (start at 220 grit) rather than forcing them, which can crack the part; glue with superglue for PLA or two-part epoxy for PETG and ABS, hold or clamp for 30-60 seconds, then fill seams with putty or superglue, sand and prime (Bambu Lab wiki). Make sure glued surfaces are smooth and free of grease and dirt (Prusa knowledge base). 9) For long sliding joints use a slightly tapered dovetail, which slides freely until the last moment and then wedges tight (BOSL2 dovetail()). 10) For joints that must come apart, use a dry dovetail, snap connectors, bolts with nuts, or magnets instead of glue (Maker.io).
- **off_the_shelf_parts**: Search for: 'dowel pins' (steel, hardened and ground, for precise alignment) and 'wooden dowels' (Wikipedia 'Dowel'); 'spring pins' or 'roll pins' (a 2 mm roll pin in a printed hole was suggested on the Prusa forum); 'neodymium disc magnets' for removable joints (Maker.io); machine screws with nuts or heat-set inserts for bolted joints (Maker.io); 'cyanoacrylate glue' (superglue) and 'two-part epoxy' (Bambu Lab wiki); 'filler putty' and 'filler primer' for hiding seams (Bambu Lab wiki).
- **rules_of_thumb**: 
  - Clearance for interlocking joints: FDM 0.5 mm, SLA 0.2 mm, SLS 0.2 mm, material jetting 0.1 mm (Hubs 'How to design interlocking joints for fastening 3D printed parts').
  - Resin (SLA) assemblies: at least 0.4 mm clearance; SLS: 0.2 mm for small features (under 20 mm²) and 0.4 mm for larger ones (Formlabs 'How to 3D print interlocking joints').
  - Typical FDM accuracy is about 0.2 mm; start movable fits at 0.3 mm or more; add pegs to help alignment and strength when splitting a model (Prusa knowledge base 'Modeling with 3D printing in mind').
  - FDM pins need a diameter of at least 5 mm to print reliably; for smaller pins, insert off-the-shelf pins into printed holes; vertical holes print undersized, so drill critical holes to size (Hubs 'How to design parts for FDM 3D printing').
  - Oversize holes by about 0.15 mm for pins; 2 mm steel roll pins go in 2.1 mm printed holes that are then drilled (Prusa forum 'Adding alignment pins in Slicr?', February 2020).
  - A 0.15 mm dovetail clearance lets well-calibrated printed parts slide together with little effort (humebeam, Printables 'Python - Dovetail Test Pieces').
  - BOSL2's dovetail() defaults to a 1:6 slope (standard woodworking slopes are 1:4, 1:6 and 1:8) and its $slop setting adds the clearance gap on each of the three contact faces (BOSL2 joiners.scad).
  - Superglue made PLA round screw joints stronger in bending but made flat dovetail joints weaker, so test before relying on glue plus dovetail (Melhem, Jaradat and Abdelall, 'A Study of the Flexural Behavior of 3D-Printed PLA Dovetail and Screw Joints Considering Chemical Adhesive Usage', IEOM 2024).

### When to use it

- **everyday_examples**: 
  - Wooden dowels that line up and join the panels of flat-pack furniture and cabinets (Wikipedia 'Dowel')
  - Dovetailed corners of wooden drawers (Wikipedia 'Dovetail joint')
  - Jigsaw-puzzle pieces, the shape behind 'puzzle' or 'jigsaw' joints (BOSL2 'jigsaw' cut path)
  - Large printed statues, helmets and props printed in several pieces and glued, such as the Venus de Milo example in Bambu Lab's guide
- **when_to_use**: Use split-part joints when a model is bigger than your printer in any direction, when a tall or slender model would be risky to print in one go, or when splitting lets each piece print flat, in a better orientation, with fewer supports or in different colours and materials (Bambu Lab wiki; Prusa knowledge base; Hubs). Choose pegs or dowels for simple alignment before gluing, dovetails or puzzle edges when you want the pieces to lock without glue or to come apart again, snap connectors for quick tool-free assembly in a springy material, and bolts or magnets when the parts must be taken apart often (Maker.io).
- **when_not_to_use**: Avoid splitting a part that carries a heavy or bending load across the seam: print it in one piece on a larger printer, turn it so the load runs along the layers, or join the pieces with bolts or a metal reinforcing bar instead. Don't rely on thin printed pins (under about 5 mm) for strength; use metal pins (Hubs). Don't cut through fine details or thin walls (Gambody). For watertight or pressure parts, a glued seam is unreliable; use a one-piece print or a gasketed, bolted joint. If the pieces must come apart repeatedly, avoid glue and use screws with heat-set inserts, a dry dovetail, snaps or magnets.
- **environment_limits**: The joint is only as heat-resistant as the plastic and glue: in CNC Kitchen's oven test PLA started to give at about 60 °C, PETG at about 80 °C and ASA at about 110 °C, so a glued PLA model left in a hot car may sag at the seams. *(unverified parts omitted)*
- **safety_notes**: Forcing tight parts together can crack them suddenly (Bambu Lab wiki); sand them instead. *(unverified parts omitted)*
- **common_failures**: Parts won't go together: over-extrusion, elephant's foot or printer inaccuracy makes pegs too fat or holes too small; calibrate flow, chamfer the edges, sand or drill to fit, and test-print a sample joint first (Printables 'Python - Dovetail Test Pieces'; Hubs; Prusa forum). Supports printed onto the cut faces or connectors spoil the fit (Bambu Lab wiki). Misaligned seams from warped pieces or from cutting without connectors; add connectors and use a brim (Bambu Lab wiki). Visible ridges at the seam from pieces printed in different orientations or layer heights; keep settings identical and fill and sand (Bambu Lab wiki). Thin printed pins snap (Hubs), and snap connectors printed in PLA may break (Printables 'Dovetail Joint with Snap Fit Connector'). A seam that looks fine but breaks in bending, because the joint is weaker than solid plastic (IEOM 2024; Maker.io).
- **related**: 
  - Dovetail joint (through and half-blind) and sliding dovetail: the woodworking originals of the dovetail connector
  - Dowel and biscuit joints: the woodworking version of alignment pins
  - Locating pins and hole-and-slot: precise engineering alignment with hardened pins, where one pin locates and a slot takes up the error
  - Butterfly key (bow-tie key): a separate wedge-shaped key set across the seam instead of shapes cut on the faces
  - Heat staking: printed pins melted over to join split pieces permanently without glue
  - Captive nut pocket and heat-set threaded insert: for bolting split pieces together so they can come apart
  - Cantilever snap fit: the catch used by slicer 'snap' connectors
  - Solvent welding and cyanoacrylate (superglue): the glues usually used to finish split joints
  - Tab-and-slot joint and Japanese interlocking joints: other ways of locking pieces by shape

### Pictures, videos and models

- **links**: 
  - [Cut tool (Prusa Knowledge Base)](https://help.prusa3d.com/article/cut-tool_1779): Screenshots of PrusaSlicer's Cut tool: planar and dovetail cuts, and plug, dowel and snap connectors with their settings *(licence: link only)*
  - [Cut Tool (Bambu Lab Wiki)](https://wiki.bambulab.com/en/software/bambu-studio/cut-tool): Screenshots and an animated GIF of dovetail depth, width, flap angle and groove angle, and the plug, dowel and snap connectors *(licence: link only)*
  - [Joinery-slidingdovetail.gif (Wikimedia Commons, by SilentC)](https://commons.wikimedia.org/wiki/File:Joinery-slidingdovetail.gif): Animated diagram of a sliding dovetail joint sliding together *(licence: CC BY-SA 3.0 or GFDL 1.2+ (dual licensed))*
  - [Chopper: Partitioning Models into 3D-Printable Parts (Luo, Baran, Rusinkiewicz and Matusik, SIGGRAPH Asia 2012)](https://gfx.cs.princeton.edu/pubs/Luo_2012_CPM/index.php): Project page with an image of a chair model cut into printable parts with connectors, printed and assembled, plus a 4-minute video and the paper *(licence: link only)*
  - [Autodesk Fusion: Split a Model to Fit Your 3D Printer (Add Alignment Keys) (YouTube, What Make Art)](https://www.youtube.com/watch?v=-PtARBZEu5g): Video tutorial on splitting an oversized model in CAD and adding alignment keys (title checked via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [PrusaSlicer Cut tool (free slicer)](https://help.prusa3d.com/article/cut-tool_1779): Cuts any model with a plane or a dovetail and adds plug, dowel or snap connectors with adjustable shape, size, depth and tolerance *(licence: PrusaSlicer is AGPL-3.0 open-source software)*
  - [BOSL2 partitions.scad: partition(), partition_mask() and partition_cut_mask() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/partitions.scad): Parametric modules that cut an object in two with matched interlocking edges: flat, sawtooth, sinewave, comb, finger, dovetail, hammerhead or jigsaw cut paths *(licence: BSD 2-Clause)*
  - [BOSL2 joiners.scad: dovetail(), joiner() and snap_pin() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad): Parametric dovetails (straight or tapered, chamfered or rounded like a puzzle piece), screw-together joiners and snap pins for joining separately printed parts, with a $slop setting for fit *(licence: BSD 2-Clause)*
  - [Python - Dovetail Test Pieces (humebeam, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1134808-python-dovetail-test-pieces): About 6 g of test pieces with 0.15 mm dovetail clearance, to check your flow and fit before printing a large dovetailed assembly. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Dovetail Joint with Snap Fit Connector (thczv, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1224537-dovetail-joint-with-snap-fit-connector): A dovetail joint whose male part ends in a snap catch, for joining pieces such as a game board; recommended in PETG. Read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Print Bed Scraper - Split Model with Alignment Holes (MakerIke, Printables)](https://www.printables.com/model/596251-print-bed-scraper-split-model-with-alignment-holes): A small tool split into two halves with pegs and holes for alignment when gluing, as a simple example of the technique. URL found in search results; details read through the Printables public API. *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))* *(unverified parts omitted)*
- **diagram_idea**: An exploded view of a tall statue cut into two pieces, with three close-ups of the cut face: (a) a peg on one face entering a hole in the other, (b) loose dowels in holes on both faces, (c) a dovetail tail sliding sideways into its groove, with arrows showing which directions each one blocks.
- **sources**: 
  - https://help.prusa3d.com/article/cut-tool_1779
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://forum.prusa3d.com/forum/original-prusa-i3-mk3s-mk3-hardware-firmware-and-software-help/adding-alignment-pins-in-slicr/
  - https://wiki.bambulab.com/en/software/bambu-studio/cut-tool
  - https://wiki.bambulab.com/en/bambu-studio/manual/3d-print-large-files
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
  - https://www.digikey.com/en/maker/blogs/2024/how-to-split-and-join-large-3d-prints
  - https://www.gambody.com/blog/how-to-split-a-model-in-half-secrets-of-large-scale-3d-printing/
  - https://gfx.cs.princeton.edu/pubs/Luo_2012_CPM/index.php
  - https://ieomsociety.org/proceedings/2024tokyo/224.pdf
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/partitions.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://raw.githubusercontent.com/prusa3d/PrusaSlicer/master/LICENSE
  - https://en.wikipedia.org/wiki/Dovetail_joint
  - https://en.wikipedia.org/wiki/Dowel
  - https://commons.wikimedia.org/wiki/File:Joinery-slidingdovetail.gif
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=-PtARBZEu5g

### Other info

- **Fields with unverified parts:** aliases, environment_limits, make_it_yourself, processes, reuse_cycles, safety_notes, seal

## 179 Press-fit and expanding inserts (tap-in insert)

*print-in-place & 3D-printing joints.* Threaded inserts that are pushed or tapped into a hole and held by barbs, or expand as the screw goes in, as an alternative to heat-set inserts

### What it is

- **plain_name**: A small ridged or barbed metal sleeve with a screw thread inside that you push, squeeze or tap cold into a plain hole, so a plastic or wooden part gets metal threads without heating anything; some types are split and spread outwards to grip harder when the screw goes in
- **term**: Press-in threaded insert (press-fit insert), including the expansion insert (screw-to-expand insert) and the tap-in or hammer-in insert
- **aliases**: 
  - press-fit insert, press-in insert (Wikipedia 'Threaded insert'; PEM; McMaster-Carr)
  - cold-pressed insert, cold-press insert (PEM; SPIROL)
  - expansion insert, slotted press-in insert (PEM 'Four Ways To Tackle Threaded Inserts For Plastics'; Stratasys)
  - screw-to-expand insert, screw-to-expand press-in threaded insert (Formlabs; Protolabs; McMaster-Carr)
  - tap-in insert (Hubs 'How to assemble 3D printed parts with threaded fasteners')
  - hammer-in insert nut, knock-in nut (for wood and particle board; Wikipedia 'Threaded insert')
  - hammer-in tee nut, prong nut (four-pronged flange for wood; McMaster-Carr; Hackaday 2024)
  - barbed press-in insert, hex press-in insert, twist-resistant press-in insert, strong-grip screw-to-expand insert (catalogue variants; McMaster-Carr; PEM)
  - E-Z Press (brand) insert (E-Z LOK)
- **family**: print-in-place & 3D-printing joints
- **other_families**: clamping, magnetic & friction connections, interlocking joints & joinery
- **one_liner**: A metal threaded sleeve pushed or tapped cold into a slightly smaller hole, held by its barbs or knurls biting into the wall, and sometimes spread wider by the screw, to give a plastic or wooden part reusable metal threads without heat.
- **complexity**: A few parts: the insert (a short brass, aluminium or stainless steel sleeve, threaded inside, with knurls, barbs, fins or a hex shape outside; expansion types have a slot down the side), the part with a plain hole sized for it, and the screw that later goes into it. Installing it needs only an arbor press, vice or hammer.
- **how_it_works**: The hole is slightly smaller than the outside of the insert, so pushing it in makes a tight interference fit, and its knurls or barbs dig into the hole wall so it can't turn or pull out (PEM; Wikipedia 'Threaded insert'). Because nothing melts, this pressure alone holds it, which is why it is weaker than a heat-set insert and why too much force can crack the plastic (PEM 'Press-In Inserts'). Expansion inserts have a slot, so they squeeze inwards and go in easily, even with finger pressure; when the screw is threaded in it forces the sides back out and pushes the knurls into the hole wall, much like an expanding wall anchor (PEM 'Four Ways'; E-Z LOK). Tap-in and hammer-in inserts for wood work the same way, with barbs or prongs that are driven in with a hammer (Hubs; Wikipedia).

### Finder attributes

- **job**: join and hold: gives a plastic, printed or wooden part a strong, reusable metal screw thread so another part can be bolted on and taken off again, without a soldering iron
- **motion**: none
- **degrees_of_freedom**: 0: once pressed in (and, for expansion types, once the screw is in), the insert cannot move, and the screw clamps the parts together rigidly
- **special_behaviour**: 
  - grips harder when screwed: in expansion (screw-to-expand) inserts the screw spreads the slotted sleeve outwards (PEM; E-Z LOK); SPIROL's helical knurls are angled so that tightening the screw tends to drive the insert further into the hole, not twist it out (SPIROL design guide, p. 3) *(unverified parts omitted)*
- **holding_principle**: 
  - friction or clamping (force-fit): the insert is a tight interference fit in the hole, and press-in inserts 'rely entirely on the interference fit to provide pull-out and torque-out resistance' (PEM 'Press-In Inserts'); expansion inserts add outward pressure when the screw goes in
  - shape (the parts interlock; form-fit): knurls, barbs, fins, undercuts or a hex body bite into the hole wall so the insert can't turn or pull out (PEM 'SI Threaded Inserts for Plastic'; McMaster-Carr)
- **input_output**: not applicable
- **power**: passive (no power needed); nothing needs heating, only a press, vice or hammer to install it
- **removability**: removable: the screw can be taken out and put back many times, which is the point of the insert (PEM 'Press-In Inserts': metal threads 'can still be reliably disassembled and reassembled'). *(unverified parts omitted)*
- **reuse_cycles**: many times for the screw (metal threads, so the plastic thread does not wear; Hubs; PEM). *(unverified parts omitted)*
- **tools_needed**: a drill (to open printed or moulded holes to an accurate size; Hubs, Stratasys) and an arbor press, a bench vice or a hammer with a flat punch to push or tap it in flush (Stratasys; SPIROL; Hubs; Accu). Expansion inserts can be pushed in by hand (PEM). Afterwards a screwdriver or hex key for the screw.
- **seal**: none: it doesn't seal; water or air can pass along the thread and around the knurls
- **load**: light to medium: weaker than heat-set or moulded-in inserts but still gives metal threads that take normal tightening. SPIROL's catalogue values in nylon 6/6 for M3 (4-40) inserts: press-in about 330 N pull-out and 2 N m torque, against about 1,000-2,000 N and 3-4 N m for heat or ultrasonic inserts and about 2,650 N pull-out for self-tapping inserts (SPIROL design guide, p. 21; 'a general comparative guide' only). PEM: cold pressed-in inserts 'may not perform as well' as heat-staked, ultrasonic or moulded-in inserts, and press-in inserts are 'not as secure' but quick and cheap. Formlabs rates screw-to-expand inserts as a 'very good hold' in 3D prints, with heat-set inserts giving 'improved security and strength'. Longer inserts resist pulling out better and wider ones resist twisting better (PEM 'Four Ways'). *(unverified parts omitted)*
- **adjustable**: no: it is a fixed threaded anchor; any adjustment comes from the screw or the parts being joined
- **play_and_precision**: small: the metal thread fits screws like any nut. The main precision issue is getting the insert in straight and flush: a pilot on the insert 'only slightly smaller than the hole' helps it go in straight (SPIROL, p. 3), the insert should be pressed with a flat tool so it sits square (Stratasys), and it should end up flush, because an insert left below the surface can be pulled up ('jack-out') when the screw is tightened (SPIROL, p. 5).
- **access_needed**: one side only (blind): press-in, expansion and tap-in inserts go into a hole from its open face and the screw goes in from the same side. *(unverified parts omitted)*
- **materials**: Inserts: usually brass; lead-free aluminium for light parts; stainless steel for hex-bodied types (too stiff for slotted ones) (PEM 'Press-In Inserts'). Hammer-in insert nuts for wood are steel, brass or nylon (Wikipedia). Host materials: softer plastics (SPIROL), thermosets, where heat-set and ultrasonic inserts can't be used (PEM), both thermoplastics and thermosets for slotted expansion inserts (E-Z LOK), FDM nylon 12 as the best printed material for interference-fit inserts, while polycarbonate prints keep surface stress and suit glue or heat-set better (Stratasys), resin (SLA) and SLS prints with screw-to-expand inserts (Formlabs; Protolabs, which set them in epoxy), wood and particle board for hammer-in insert nuts (Wikipedia), soft metals such as aluminium and dense composites with special press-in inserts (McMaster-Carr).
- **maker_difficulty**: easy: needs only a drill and a vice, press or hammer, with no heat; the only skill is getting the hole size right, so test in a scrap piece first (E-Z LOK)

### Making it

- **processes**: 
  - 3D print (FDM): print the hole slightly undersize and drill or ream it to the insert maker's size, then press the insert in (Hubs; Stratasys)
  - 3D print (resin): screw-to-expand inserts in SLA and SLS parts, fitted before post-curing or set in epoxy (Formlabs; Protolabs)
  - woodwork: hammer-in insert nuts and tee nuts in wood and particle board (Wikipedia; McMaster-Carr)
  - injection-moulded parts: pressed into moulded holes, the industrial use (PEM; SPIROL)
  - off-the-shelf part: the insert itself is always bought *(unverified parts omitted)*
- **print_in_place**: partly: the part prints with a plain hole ready for the insert, and the bought metal insert is pressed or tapped in afterwards
- **making_tips_3d_printing**: 1) Hole size is everything: 'A hole that is too large will allow the insert to spin... A hole that is too small will compress the insert so much that the fastener cannot be installed' (E-Z LOK), and in solid-body inserts an undersized hole can crack the plastic (SPIROL, p. 5). Use the insert maker's hole size, and because printed holes are not exact, print slightly small and drill or ream to size (Hubs: 'an accurate pilot hole is required, so drilling is recommended'; Stratasys: 'Drill or ream the hole'). Test in scrap first (E-Z LOK), for example with a printed graduated-hole test block. 2) Hole depth: make it deeper than the insert, at least the insert length plus two thread pitches, so the screw never bottoms out and pushes the insert up (SPIROL, p. 5). 3) Walls: SPIROL's optimum boss diameter is 2-3 times the insert diameter, and cold-pressed inserts need even thicker walls because pressing them in stresses the plastic more (SPIROL, pp. 5-6); Hubs' minimum for any threaded hole in a print is a wall as thick as the screw diameter. 4) Pressing: line the insert up with its pilot in the hole, then push it in with an arbor press, a vice or a drill press used as a press, using a flat surface so it goes in square, until it is flush (Stratasys; Accu); tap-in inserts are tapped in gently with a hammer (Hubs). Don't press at an angle (Accu). Expansion inserts are pushed in by hand until flush, then the screw is tightened slowly to spread them (PEM; Accu). 7) For more grip, add a drop of superglue (CA) or epoxy when pressing in; Formlabs says this works in thermoplastic prints 'but won't have as strong a hold as a true heat-set installation'. In CNC Kitchen's tests, knurled brass (heat-set type) inserts glued cold into resin prints with thick CA held 52 kg on average ('How To use Threaded Inserts in Resin 3D Prints'). 8) Resin (SLA) prints: install screw-to-expand inserts after washing but before post-curing, with a screw in place, to reduce the chance of cracking the resin (Formlabs); Protolabs sets them in epoxy. 9) Avoid tapered inserts in thin walls or where the load pulls the insert through the part; they can crack the plastic (SPIROL, p. 6). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search supplier catalogues for 'press-in threaded inserts for plastic', 'press-fit inserts', 'screw-to-expand inserts', 'expansion inserts', 'tap-in inserts' or, for wood, 'hammer-in insert nuts', 'knock-in nuts' and 'tee nuts'. McMaster-Carr variants: screw-to-expand press-in inserts (also a flanged through-hole version), strong-grip screw-to-expand inserts with fins, twist-resistant hex-body press-in inserts, barbed press-in inserts, press-in inserts for soft metal and for composites, and hammer-in tee nuts with a four-pronged flange. PEM families: NFPA/NFPC hexagonal press-in inserts; PPA/PPB slotted brass; PFLA/PFLB flange-head slotted brass; PKA/PKB straight-knurl slotted brass. SPIROL Series 50 (symmetrical, with pilot) and Series 51 (headed) press-in inserts. E-Z Press (brand) slotted inserts (E-Z LOK). Screws: ordinary machine screws. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Hole size is critical: larger holes lower the holding strength, smaller holes cause stress and cracks; for plastics with 15% or more filler make the hole 0.08 mm larger, and 0.15 mm larger at 35% or more (SPIROL Inserts for Plastics design guide, p. 5).
  - Optimum boss diameter or wall: 2-3 times the insert diameter, the multiple falling as the insert gets bigger; cold-pressed inserts need bigger bosses or thicker walls than heat-installed ones (SPIROL design guide, pp. 5-6).
  - Minimum hole depth for pressed or heat-installed inserts: insert length plus two thread pitches (1.2 times the length for self-tapping inserts); the screw must never bottom out (SPIROL design guide, p. 5).
  - Install flush: no more than 0.13 mm (0.005 in) standing proud, and not below flush, which invites jack-out (SPIROL design guide, p. 5).
  - M3 comparative values in nylon 6/6: press-in 330 N pull-out and 2 N m torque; heat or ultrasonic 1,000-2,000 N and 3-4 N m; self-tapping 2,650 N pull-out (SPIROL design guide, p. 21, 'a general comparative guide' only).
  - Knurl choice: straight knurls resist twisting best, grooves between knurl bands resist pulling out, diamond knurls resist both; longer inserts resist pull-out more and wider inserts resist torque more (PEM 'Four Ways To Tackle Threaded Inserts For Plastics').
  - Minimum wall around any threaded hole in a 3D print equal to the screw diameter, e.g. 5 mm for M5 (Hubs 'How to assemble 3D printed parts with threaded fasteners').
  - For FDM parts, drill or ream the hole before press-fitting, and prefer nylon 12 for interference-fit inserts; avoid them in polycarbonate (Stratasys 'FDM Best Practice: Inserting Hardware Post-Build').

### When to use it

- **everyday_examples**: 
  - Car dashboard and centre-console electronics, where lightweight aluminium press-in inserts hold buttons, screens and circuit boards to plastic or composite frames (PEM 'Press-In Inserts')
  - An expanding wall plug or sleeve anchor, which works the same way as an expansion insert (PEM compares expansion inserts to 'the sheathed lag bolts you'd find at the hardware store') *(unverified parts omitted)*
- **when_to_use**: Use a press-in or expansion insert when you want metal threads in a plastic, resin or wooden part but have no soldering iron or can't use heat: resin (SLA) prints and other thermosets that won't melt, parts that would warp near a hot iron, wood and particle board, or quick jobs where a vice or hammer is all you have. They suit screws that are taken in and out several times but don't carry big loads, such as covers, lids, electronics mounts and light brackets.
- **when_not_to_use**: For strong or heavily loaded joints in thermoplastic prints (PLA, PETG, ABS, nylon), a heat-set insert holds several times better (SPIROL; PEM; Formlabs). Avoid tight press-fit inserts in thin walls, brittle plastics or polycarbonate prints, which can crack (SPIROL; Stratasys); use a heat-set insert, a glued insert or a captive nut pocket instead. Avoid them where the part gets hot, as screw-to-expand inserts may loosen at high temperatures (Formlabs). For screws fitted only once or twice, a self-tapping screw straight into the plastic is simpler; for the highest pull-out strength after moulding or printing, self-tapping (screw-in) inserts are stronger (SPIROL).
- **environment_limits**: The insert holds only as well as the plastic gripping it. Formlabs warns that screw-to-expand inserts 'may loosen at elevated temperatures'. PLA starts to give at about 60 degrees C, PETG at 80 and ASA at 110 (CNC Kitchen oven test), so an insert in a PLA part in a hot car or near a motor can loosen. Brass itself is unaffected by normal temperatures and damp. *(unverified parts omitted)*
- **safety_notes**: Some brass contains lead, and makers now offer lead-free brass, aluminium or stainless inserts (PEM; *(unverified parts omitted)*
- **common_failures**: 2) The screw won't go in or binds: the hole was so small that it squeezed an expansion insert shut (E-Z LOK). 3) The plastic cracks or bulges around the insert: hole too small, walls too thin, a tapered insert in a thin boss, or a brittle material (SPIROL, pp. 5-6; PEM; Stratasys). 4) The insert pulls up out of the hole when tightening ('jack-out'): it was left below the surface, or the screw bottomed out in a hole that was too shallow (SPIROL, p. 5). 5) The insert went in crooked: use the insert's pilot, a press or vice, and a flat surface to push it square (SPIROL; Stratasys; Accu). 6) It works loose over time or in heat: an interference fit relies on the plastic staying tight (Formlabs); use a heat-set or glued insert for hot or vibrating parts. 7) Resin part cracks when the screw expands the insert: install the insert and screw before post-curing (Formlabs). *(unverified parts omitted)*
- **related**: 
  - Heat-set threaded insert: melted in with a soldering iron; holds several times better in thermoplastic prints but needs heat and doesn't work in resin
  - Captive nut pocket (nut trap): an ordinary nut in a printed hex pocket; no special insert needed, strong when the nut is pulled against solid plastic
  - Self-tapping (screw-in) threaded insert: has an outside thread that cuts into the hole; SPIROL rates it the strongest insert fitted after moulding
  - Thread repair coil (helical insert, e.g. Helicoil (brand)): needs a tapped hole
  - Rivet nut (rivnut): a threaded insert squeezed from one side to clamp a thin sheet
  - Crush ribs and spring-fit features (compliant press fit): printed ribs that crush to hold a part in a hole without an insert
  - Mid-print embedding (captive nuts, magnets and bearings): drop a nut in during a print pause so it is trapped for good
  - Self-tapping screw into plastic (thread-forming screw): simplest, but plastic threads wear out after a few uses

### Pictures, videos and models

- **links**: 
  - [Press-in Insert (Wikimedia Commons, by Dhruvvasoya91)](https://commons.wikimedia.org/wiki/File:Press-in_Insert.png): Photo of a knurled press-in threaded insert machined from free-cutting brass *(licence: CC BY-SA 4.0)*
  - [Press-In Threaded Inserts (PEM / PennEngineering)](https://www.pemnet.com/products-overview/products-threaded-inserts/threaded-inserts-press-in-inserts/): Vendor page with an animation of the press-in installation process and pictures of slotted, flanged and hex press-in inserts *(licence: link only)*
  - [SPIROL Inserts for Plastics design guide (PDF)](https://www.spirol.com/assets/files/SPIROL-Inserts-for-Plastics-us.pdf): Drawings of press-in, heat, self-tapping and moulded-in inserts, knurl types, correct and incorrect installation depth, and boss and hole design, plus comparative pull-out and torque tables *(licence: link only)*
  - [FDM Best Practice: Inserting Hardware Post-Build (Stratasys, PDF)](https://www.sys-uk.com/wp-content/uploads/2016/01/BP_FDM_InsertingHardwarePostBuild.pdf): Photos of knurled and expansion inserts in FDM parts and pressing with an arbor press, with step-by-step press-fit, glue and heat-set methods *(licence: link only)*
  - [These threaded inserts aren't made for 3D prints (but work amazingly well) (YouTube, Made with Layers (Thomas Sanladerer))](https://www.youtube.com/watch?v=lYXTiJo_FQQ): Video comparing M5 rivet nuts, hex-socket wood inserts, helical inserts, self-tapping inserts and tee nuts (prong nuts) in 3D prints (as described by Hackaday, April 2024); title and channel confirmed via YouTube oEmbed, video not watched *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Heat-Set Insert Test Block with Graduated Hole Sizes (Vladimir Gamalyan, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1444127-heat-set-insert-test-block-with-graduated-hole-siz): Parametric OpenSCAD block with a row of holes stepping up in 0.1 mm increments and guide tubes; its description lists 'testing hole tolerance for press-fit or interference-fit parts'. Print flat with 100% infill. Read through the Printables public API. *(licence: Creative Commons Public Domain)* *(unverified parts omitted)*
- **diagram_idea**: Side-by-side cut-away views: (1) a solid knurled insert above a slightly smaller hole, then pressed flush by a vice jaw, with small arrows where the knurls bite into the wall; (2) a slotted expansion insert pushed in loosely, then a screw going in and arrows showing the slotted sides spreading outwards; (3) a hammer-in tee nut in wood from the back face with its prongs; plus a small 'wrong' inset showing a crack from a hole that is too small and a spinning insert in a hole that is too big.
- **sources**: 
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

### Other info

- **Fields with unverified parts:** access_needed, common_failures, environment_limits, everyday_examples, load, make_it_yourself, making_tips_3d_printing, off_the_shelf_parts, processes, removability, reuse_cycles, safety_notes, special_behaviour

## 258 Self-tapping screw into plastic (thread-forming screw)

*print-in-place & 3D-printing joints.* A screw that cuts or forms its own thread in a plain hole in a printed or moulded part; simple but wears out after a few uses

### What it is

- **plain_name**: A pointed or coarse-threaded metal screw driven straight into a plain, slightly-too-small hole in a plastic or 3D-printed part, so the screw makes its own thread as it goes in; quick and cheap, but the plastic thread wears out if you undo it many times
- **term**: Self-tapping screw into plastic (thread-forming or thread-cutting screw for plastics, driven into a pilot hole or screw boss)
- **aliases**: 
  - self-tapping screw, self-tapper (Wikipedia 'Self-tapping screw'; Hackaday)
  - thread-forming screw (pushes the plastic aside, no chips) and thread-cutting screw (has a cutting flute, removes material) (Wikipedia 'Self-tapping screw'; Assembly Magazine)
  - screw for plastics, plastic screw, PT screw; brand names include EJOT DELTA PT (brand), Plastite (brand) and Taptite (brand) (a trilobular thread-forming screw) (ATF/EJOT brochure; Assembly Magazine; Wikipedia 'Pentalobular screw thread')
  - sheet-metal screw, PK screw (after Parker-Kalon (brand)), type B (blunt-tip) tapping screw (Wikipedia 'Self-tapping screw')
  - screwing a machine screw directly into an undersized printed hole ('self tap' hole in BOSL2; 'direct screwing' in CNC Kitchen tests)
  - screw boss (the moulded post with a hole that the screw goes into) (Assembly Magazine; EJOT)
  - lobular or trilobular screw; self-forming thread with three lobes in the hole (Wikipedia 'Pentalobular screw thread'; Hackaday on Thomas Sanladerer)
- **family**: print-in-place & 3D-printing joints
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A hardened screw with a sharp, widely spaced thread forms or cuts its own mating thread in a plain pilot hole in plastic, clamping a part on without any nut, insert or tapping, at the cost of a thread that wears each time it is undone.
- **complexity**: A few parts: the screw (usually case-hardened steel, often with a coarse thread and a pointed or blunt tip) and a plain pilot hole in the plastic part, usually in a thick-walled post (screw boss); a washer or large head spreads the load (Wikipedia 'Self-tapping screw'; EJOT/ATF brochure).
- **how_it_works**: The pilot hole is smaller than the screw's thread, so as the screw is turned its thread pushes the plastic aside (thread-forming) or shaves it away (thread-cutting) and leaves a matching thread in the hole wall (Wikipedia 'Self-tapping screw'). Screws made for plastics have a narrower thread angle (about 30-48 degrees instead of 60) so they push less outwards on the boss and are less likely to split it (Assembly Magazine). Once the head is down, tightening stretches the screw and clamps the parts together as in any screw joint, but the clamping force is limited by the strength of the plastic thread, which strips if over-tightened (Kolver). Each time the screw is removed and driven again, the plastic thread is worn or a new one is cut, so it gradually loosens (Hubs; Hackaday).

### Finder attributes

- **job**: 
  - join and hold: fastens a lid, cover, bracket or circuit board to a plastic or printed part without a nut or insert
  - tighten and hold tension: clamps the parts together, up to what the plastic thread can take (Kolver)
- **motion**: none: the parts are clamped and don't move.
- **degrees_of_freedom**: 0 when tightened.
- **special_behaviour**: none: it simply clamps. (Screws made for plastics resist vibration loosening better than standard ones because of their thread shape, but that is not a special behaviour) (ATF/EJOT brochure)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the screw thread sits in the thread it formed in the plastic
  - friction or clamping (force-fit): the tightened screw clamps the parts; a formed thread also grips the screw tightly (Kolver; Assembly Magazine)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable, but the plastic thread wears each time: Hubs says self-tapping screws are 'not suited for applications where parts will regularly be assembled/disassembled'; thread-cutting screws 'cannot be installed and removed repeatably' (Assembly Magazine).
- **reuse_cycles**: a few times: CNC Kitchen calls direct screwing 'a viable option if you want to connect something only once'; Thomas Sanladerer uses three-lobed self-forming holes for parts screwed down 'once or twice' (Hackaday 2025). *(unverified parts omitted)*
- **tools_needed**: screwdriver (manual or powered, ideally with a torque limit or clutch); optionally a drill to open the pilot hole to size after printing (Hubs). Industry uses torque-controlled electric screwdrivers at about 300-1000 rpm (Kolver; ATF/EJOT brochure).
- **load**: Light to medium. Pull-out can be surprisingly good: M3 screws driven into slightly undersized holes in printed PETG held 118 kg on average, about the same as a heat-set insert (119 kg), and in an earlier PLA test 142 kg (CNC Kitchen). Weak in twisting: the plastic thread stripped at about 1 Nm of tightening torque on M3, against 3-4 Nm for a heat-set insert, though 1 Nm already gives more than 1500 N of clamping force (CNC Kitchen). Clamping force is limited by the plastic's stripping strength and falls over time as the plastic relaxes (Kolver; ATF/EJOT brochure). Bosses next to walls or in corners resist pull-out better than free-standing ones (Assembly Magazine).
- **adjustable**: no: only the tightness can be changed, and re-tightening risks stripping the thread.
- **play_and_precision**: No play in the thread once formed. Location of the clamped part depends on its clearance hole, as for any screw joint. A screw driven in at an angle cuts a crooked thread, so drive it straight (Hubs). *(unverified parts omitted)*
- **access_needed**: one side only (blind): the screw is driven into a hole in the far part from the near side.
- **materials**: Screws: hard steel, often case-hardened, with a thread running the full length (Wikipedia 'Self-tapping screw'). Suitable plastics: tough, ductile thermoplastics suit thread-forming screws (Assembly Magazine: plastics with a flexural modulus up to about 200,000 psi (about 1.4 GPa), or up to 400,000 psi with a larger hole); hard, brittle or glass-filled plastics and thermosets need thread-cutting screws or they crack (Assembly Magazine). Works in FDM prints (PLA, PETG, ABS, nylon, PC) and resin prints (Lost In Tech pilot-hole calculator lists these materials). Related screw types exist for wood (wood screws) and thin sheet metal (sheet-metal screws) (Wikipedia 'Self-tapping screw').
- **maker_difficulty**: easy: design a slightly undersized hole, then drive the screw in; the only skill is finding the right hole size for your printer and material with a quick test print (Hubs; Hackaday).

### Making it

- **processes**: 
  - 3D print (FDM): the most common maker use; print the pilot hole into the part (Hubs; Hackaday)
  - off-the-shelf part: moulded plastic housings with screw bosses, and the screws themselves
  - woodwork: the same idea with wood screws, which are technically self-tapping (Wikipedia 'Self-tapping screw')
  - sheet metal: sheet-metal self-tapping screws in punched or drilled holes (Wikipedia 'Self-tapping screw') *(unverified parts omitted)*
- **print_in_place**: no: the screw is added after printing; the printed part only needs a plain pilot hole.
- **making_tips_3d_printing**: 1) Hole size: printed holes come out undersized, so test first (CNC Kitchen; Hubs). A simple start from Hackaday is to make the lower hole the diameter of the screw's core (shaft without thread) and the upper part's hole big enough for the thread to pass. Screws for plastics are usually given a hole of about 0.8 x the thread diameter (EJOT/ATF brochure). For a machine screw driven straight into a print, BOSL2's 'self tap' hole is the nominal diameter minus about 0.72 x the pitch (e.g. about 2.64 mm for M3) and has a bevelled top to help the screw start. 2) Depth: give at least 1-1.5 x the screw diameter of thread engagement, more in plastics (Lost In Tech calculator; Field Fastener); moulding guides use 2 x (EJOT) to 2-3 x (Assembly Magazine). 3) Wall: make the wall around the hole at least one screw diameter thick (Hubs), i.e. a boss about 2-3 x the screw diameter across (EJOT; Assembly Magazine); thin walls bulge, split or delaminate (Hubs). More perimeters around the hole help; CNC Kitchen's test parts used four perimeters and 100% infill. 5) Add a small counterbore or chamfer (about screw diameter) at the entry so the edge doesn't crack and the screw starts straight (EJOT; Assembly Magazine; BOSL2). 6) Three lobes: a hole with three small ribs that the screw forms into lowers the stress on the part (Thomas Sanladerer, via Hackaday). 7) Drive slowly and straight and stop as soon as it is snug; don't use a pointed countersunk head, which wedges the plastic apart (Hubs; Assembly Magazine). 8) To reuse, turn the screw backwards until it drops into the old thread before tightening (Kolver). *(unverified parts omitted)*
- **off_the_shelf_parts**: Thread-forming screws for plastics (e.g. 30-degree 'PT' style or trilobular screws; brands include EJOT DELTA PT (brand), Plastite (brand) and Taptite (brand)) (ATF/EJOT brochure; Assembly Magazine; Wikipedia 'Pentalobular screw thread'); DIN 7981 tapping screws, which a Hackaday reader recommends as a consistent standard to buy; type B (blunt-tip) tapping screws for pilot holes; ordinary M2-M4 machine screws driven into undersized holes (CNC Kitchen; BOSL2); washers or flanged heads to spread the load (Wikipedia 'Self-tapping screw'; ATF/EJOT brochure; Hackaday).
- **rules_of_thumb**: 
  - Screws for thermoplastics: pilot hole 0.8 x the screw's nominal diameter (up to 0.88 x for filled or stronger plastics), boss outside diameter 2 x, screw engagement depth 2 x, and a counterbore of 1.05 x diameter at the entry; keep draft in the core hole below 0.5 degrees per side (ATF / EJOT DELTA PT brochure, 2017, p. 11).
  - Boss outside diameter 2-3 x the screw thread diameter; thread engagement 2-3 x the screw diameter; add a relief bore equal to the screw's outside diameter; thread-forming screws suit plastics with a flexural modulus up to 200,000 psi (up to 400,000 psi with a larger hole), harder plastics need thread-cutting screws; avoid conical (countersunk and oval) heads (Assembly Magazine 'Beware the Boss', 2004).
  - If the screw maker gives no pilot-hole size, aim for 75-80% thread engagement; wall thickness around the hole at least the screw diameter (e.g. 5 mm for M5) (Hubs 'How to assemble 3D printed parts with threaded fasteners').
  - Engagement length at least 1 x the screw diameter, 1.5 x recommended for plastics; pilot diameter = major diameter x material factor x engagement correction, divided by your printer's hole shrinkage (Lost In Tech 'FDM pilot hole calculator').
  - Thread-forming screws need at least 1-1.5 x the screw diameter engaged even in steel, and more in softer materials such as plastic (Field Fastener 'Rules of Thumb for Thread Engagement').
  - For a machine screw driven straight into plastic, make the hole the nominal diameter minus 0.72 x pitch for pitches below 1 mm, minus 0.6 x pitch above 1.5 mm (BOSL2 screws.scad, 'self tap' tolerance).
  - M3 screw straight into a slightly undersized printed hole: pull-out 118 kg in PETG (142 kg in an earlier PLA test), but it strips at about 1 Nm; a heat-set insert takes 3-4 Nm (CNC Kitchen).
  - Tightening torque when fastening into plastic: the lower of 3 x the seating torque or halfway between seating and stripping torque; start at about 300 rpm if the screw maker gives no speed; when re-tightening into an existing thread, turn the screw backwards until it drops into the thread, engage about a quarter turn by hand, and use a lower torque (Kolver 'Fastening into Plastics').

### When to use it

- **everyday_examples**: 
  - Printed project enclosures and camera mounts held together with self-tappers instead of heat-set inserts (Hackaday, Jenny List's turret camera project)
  - Screwing into wood (wood screws) and thin sheet metal (sheet-metal screws) uses the same idea (Wikipedia 'Self-tapping screw') *(unverified parts omitted)*
- **when_to_use**: Use it for printed or moulded plastic parts that are put together once, or opened only occasionally (for repair or battery changes): enclosures, lids, brackets, mounting a circuit board or a small motor. It needs no nut, insert, soldering iron or tap, and goes in from one side, so it is the quickest and cheapest way to fasten into plastic (Hubs; Hackaday). Pull-out strength can match heat-set inserts (CNC Kitchen).
- **when_not_to_use**: Avoid it when the part will be taken apart often, when you need high tightening torque or clamping force, or when the joint must stay tight at high temperature: use heat-set inserts, a captive nut or a bolt and nut instead (Hubs; CNC Kitchen). *(unverified parts omitted)*
- **environment_limits**: Plastic around the screw relaxes and creeps, so the clamping force drops over time, faster when warm (Kolver; ATF/EJOT brochure; filamentspecs). In one test an M6 bolt clamping printed PETG lost about 11.5% of its undoing torque in a week at room temperature, PLA about 3% (Amza et al. 2021, bolted joint rather than self-tapper). PLA softens above about 60 °C, so screws in PLA can loosen in a hot car or near a heater (Prusa knowledge base). Vibration can loosen screws in plastic; screws designed for plastics resist this better (ATF/EJOT brochure).
- **safety_notes**: Otherwise none known. *(unverified parts omitted)*
- **common_failures**: Stripped thread from over-tightening or using a power driver without a clutch; stop when snug, or set a torque below the stripping torque (Hackaday; Kolver). Cracked or bulging boss, or layers splitting, from a hole that is too small, a wall that is too thin or a screw that is too aggressive for the plastic; enlarge the hole, thicken the wall, add a counterbore, or use a screw made for plastics (Hubs; Assembly Magazine; EJOT). Loose screw after reassembly because it cut a new thread; turn it backwards until it drops into the old thread first (Kolver; Hackaday comments). Joint slowly loosening from creep and stress relaxation; use a larger head or washer, lower torque, or an insert (Kolver; filamentspecs). Hole too big so the thread doesn't grip; test-print hole sizes (Hackaday; Lost In Tech).
- **related**: 
  - Heat-set threaded insert: a brass insert melted into the hole; takes 3-4 times the torque and can be reused many times, but needs a soldering iron
  - Captive nut pocket (nut trap): a standard nut in a printed pocket; stronger and reusable, but needs space and access for the nut
  - Press-fit and expanding inserts (tap-in insert): metal threads pushed or tapped in cold
  - Printed screw thread: threads printed straight into the part; only practical above about M5 (Hubs)
  - Ordinary screw joint (bolt and nut, machine screw): the baseline, reusable almost without limit
  - Push-in plastic rivet (fir-tree clip, push rivet): no thread at all, pushed in by hand
  - Heat staking (melted plastic rivet): a plastic post melted over, permanent
  - Blind threaded fixings (rivet nut, well nut): give a reusable thread in thin sheet or panels

### Pictures, videos and models

- **links**: 
  - [Screw types.jpg (Wikimedia Commons, by Ssawka)](https://commons.wikimedia.org/wiki/File:Screw_types.jpg): Photo of several screw types including self-drilling and self-tapping screws beside wood screws *(licence: CC BY-SA 3.0)*
  - [Závitořezný.png (thread-cutting screw) (Wikimedia Commons, by Juniperbushman)](https://commons.wikimedia.org/wiki/File:Z%C3%A1vito%C5%99ezn%C3%BD.png): Drawing of a thread-cutting self-tapping screw *(licence: CC BY-SA 4.0)*
  - [Well, it turns out you CAN use screws in 3D Prints! But... (YouTube, Lost In Tech)](https://www.youtube.com/watch?v=8F4G-OyXHJs): Video comparing screw types for plastics in 3D-printed parts, with thermal-camera shots and torque tests (per Hackaday's write-up; title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [A better way to add threads to your 3D prints (YouTube, Made with Layers (Thomas Sanladerer))](https://www.youtube.com/watch?v=HgEEtk85rAY): Video comparing ways to add threads to prints, including self-tapping screws and three-lobed self-forming holes (per Hackaday's write-up; title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [No Need For Inserts If You're Prepared To Use Self-Tappers (Hackaday, Jenny List, 2025)](https://hackaday.com/2025/09/02/no-need-for-inserts-if-youre-prepared-to-use-self-tappers/): Photo of a printed camera project using self-tappers, and a render and OpenSCAD code for the two-hole design *(licence: link only)*
- **make_it_yourself**: 
  - [Metric self tap hole test - M2/M2.5/M3/M4 (1 to 5 mm) (PPat, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1338667-metric-self-tap-hole-test-m2m25m3m4-1-to-5-mm): Test print with a range of hole sizes from 1 to 5 mm to find which hole suits M2-M4 screws on your printer; parametric Fusion file included *(licence: Creative Commons Attribution)*
  - [Screw hole tests and sizing tests (lostintech, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1629282-screw-hole-tests-and-sizing-tests): The 3.5 mm screw test parts used in Lost In Tech's screws-in-3D-prints video *(licence: Creative Commons Public Domain)*
  - [BOSL2 screws.scad, screw_hole(tolerance="self tap") (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad): Makes a correctly undersized, bevelled hole for driving a machine screw straight into a printed part *(licence: BSD 2-Clause)* *(unverified parts omitted)*
- **diagram_idea**: A cut-away of a printed screw post (boss) before and after driving the screw: a plain pilot hole about 0.8 x the screw diameter with a small entry counterbore, then the screw in place with the plastic pushed into a thread around it, labels for boss diameter (about 2 x screw) and engagement depth (about 2 x screw), and a small inset showing a stripped thread from over-tightening.
- **sources**: 
  - https://en.wikipedia.org/wiki/Self-tapping_screw
  - https://en.wikipedia.org/wiki/Pentalobular_screw_thread
  - https://en.wikipedia.org/wiki/Screw
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.cnckitchen.com/blog/helicoils-threaded-insets-and-embedded-nuts-in-3d-prints-strength-amp-strength-assessment
  - https://www.cnckitchen.com/blog/threaded-inserts-for-3d-prints-cheap-vs-expensive
  - https://www.assemblymag.com/articles/83662-beware-the-boss
  - https://www.ejot-atf.com/wp-content/uploads/2017/02/ATFDELTAPT2017LowRes.pdf
  - https://kolver.com/us/blog-detail/fastening-into-plastics
  - https://www.fieldfastener.com/blog/2018/03/13/rules-of-thumb-for-thread-engagement
  - https://hackaday.com/2025/09/02/no-need-for-inserts-if-youre-prepared-to-use-self-tappers/
  - https://hackaday.com/2025/01/11/comparing-ways-to-add-threads-to-your-3d-prints/
  - https://hackaday.com/2026/04/10/using-metal-screws-in-plastic-parts/
  - https://lostintech3d.github.io/fdm-pilothole/pilot_hole_calc.html
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8659210/fullTextXML
  - https://filamentspecs.com/creep-resistance-3d-printed-parts/
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:Screw_types.jpg
  - https://commons.wikimedia.org/wiki/File:Z%C3%A1vito%C5%99ezn%C3%BD.png
  - https://www.youtube.com/watch?v=8F4G-OyXHJs
  - https://www.youtube.com/watch?v=HgEEtk85rAY
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** everyday_examples, make_it_yourself, making_tips_3d_printing, off_the_shelf_parts, play_and_precision, processes, reuse_cycles, safety_notes, seal, when_not_to_use

