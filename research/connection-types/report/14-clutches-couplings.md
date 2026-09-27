# clutches & couplings: Connects shafts, or engages and disengages drive

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 77 Oldham coupling

*clutches & couplings.* Three discs with tongue-and-groove slots at right angles that join two shafts which are slightly out of line, while still passing turning force

### What it is

- **plain_name**: A sandwich of three discs that joins two shafts which sit side by side but not quite in line: the middle disc has a ridge on each face at right angles, and it slides about in slots in the two outer discs while they all turn together
- **term**: Oldham coupling (Oldham coupler)
- **aliases**: 
  - Oldham coupler
  - Oldham's coupling
  - Oldham clutch (older name; e.g. the Wikimedia Commons diagram title)
  - Oldham mechanism (Nguyen Duc Thang's animation titles)
  - Oldham ring / Oldham-type coupling (the anti-rotation ring in scroll compressors)
  - three-piece coupling with a floating centre disc (hub, disc, hub)
  - Z-axis Oldham coupler / leadscrew-nut Oldham adapter (3D-printer upgrade that lets the leadscrew nut float sideways)
  - Oldham coupling disk / centre disc (the replaceable plastic middle part)
  - Sprzęgło Oldhama (Polish; from the Commons diagram description)
- **family**: clutches & couplings
- **other_families**: torque limiting & slip
- **one_liner**: Two hubs, each with a slot (or tongue) across its face, are joined by a floating middle disc whose two tongues cross at right angles, so the disc slides to take up any sideways offset between two parallel shafts while passing turning force at exactly the same speed.
- **complexity**: A few parts: two hubs (one clamped or set-screwed on each shaft end, each with a slot or tongue across its face) and one centre disc with a tongue or slot on each face at 90 degrees to each other; the hubs are fixed with clamp screws or set screws.
- **how_it_works**: Each hub can only push the middle disc sideways across its own slot, and the two slots are at right angles, so between them the disc can slide in any sideways direction but cannot turn relative to either hub; whatever angle the input hub turns, the output hub turns by exactly the same angle (Wikipedia 'Coupling'; osamutake's educational model notes). When the shafts are offset, the centre of the middle disc travels round a small circle twice per revolution and the tongues slide back and forth in their slots by the offset each turn (Wikipedia 'Coupling'). The maximum sliding speed of each tongue is the offset times the shaft's angular speed (v = r x omega) (IIT Kharagpur Virtual Lab). In mechanism theory it is an inversion of the double-slider crank chain, the same family as the Scotch yoke and the elliptical trammel (IIT Kharagpur Virtual Lab).

### Finder attributes

- **job**: 
  - join and hold: connects two shafts end to end so they turn together
  - let it move (turn, slide or bend): lets the two shafts sit side-by-side out of line (parallel offset) without forcing them into line
  - slip or let go when overloaded: in commercial couplings the plastic disc acts as a 'mechanical fuse' that shears on overload and stops the drive (Ruland data via PIB Sales; Design World)
- **motion**: rotate+slide: the shafts turn continuously (unlimited turns, 1:1), while inside the coupling the middle disc slides back and forth by the shaft offset once per turn in each slot
- **degrees_of_freedom**: Between the two shafts: 0 in the turning direction (they are locked together in rotation) but 2 free sideways movements (parallel offset in any direction), plus a little end float (axial) and a very small tilt (angular) from clearance in the slots (Ruland data via PIB Sales: about 0.5 degree angular and a few thousandths of an inch axial). As a mechanism the three rotating parts all turn at the same angular speed at every instant (IIT Kharagpur Virtual Lab).
- **special_behaviour**: 
  - fail-safe or breakaway: the plastic centre disc is the weak link; on overload or a jam it shears cleanly and the hubs stop driving each other, protecting the rest of the machine (Ruland data via PIB Sales; Design World 2007). This is the opposite of a jaw coupling, which keeps driving metal-on-metal if its spider fails
  - quick-release (partly): the hubs come apart simply by sliding the disc out of its slots, and the disc can be replaced to restore the original performance (PIB Sales; Motion+Drives)
  - none of the other behaviours: it is not self-locking, one-way or torque-limiting at a set value
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the tongues sit in the slots, so turning force is carried by contact, not friction
  - friction or clamping (force-fit): each hub is held on its shaft by a clamp screw or set screws; Slocum calls a circumferential clamp 'the best alternative' and warns against set screws without a keyway
- **input_output**: Continuous rotation -> the same continuous rotation, 1:1, at constant velocity (no speed wobble in theory, unlike a single universal joint) (IIT Kharagpur Virtual Lab; osamutake). Shaft arrangement: parallel shafts, in line or offset sideways (it is especially suited to parallel offset, up to about 10% of the hub outside diameter: Ruland data via PIB Sales). Slocum notes that simple pin-in-slot couplings such as Oldham couplings can still add a small sinusoidal angle error in real machines, at most about the shaft offset divided by the coupling radius. Back-drivable: yes, it passes turning force equally in both directions. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: loosen the hub clamp screws or set screws to slide the hubs off; the hubs separate simply by sliding the centre disc out, and discs are sold as replacement parts (PIB Sales on Ruland)
- **reuse_cycles**: many times: hubs last indefinitely; the plastic disc is a wear part that is replaced when worn or after it has sheared as a fuse (Motion+Drives: 'Disk is replaceable, restoring the original performance characteristics')
- **tools_needed**: A hex key (Allen key) for the hub clamp screws or set screws; nothing to assemble the three parts, which just slide together. Grease or oil for the sliding faces is recommended on the 3D-printer leadscrew-nut version (TH3D).
- **seal**: none: open sliding slots
- **load**: Light to medium torque, limited by the plastic centre disc: small brass/nylon couplings are rated only 20-100 oz-in (about 0.14-0.7 N m) (Renbrandt TINYMITE), while larger aluminium/acetal servo couplings carry more. It handles sideways offset with low reaction forces on the shaft bearings ('large amounts of parallel misalignment with light bearing loads': Design World 2007). *(unverified parts omitted)*
- **adjustable**: No adjustment once fitted, apart from the hub positions on the shafts. Behaviour is chosen by disc material: acetal for high torsional stiffness and near-zero backlash, nylon for damping and quiet running, PEEK for high temperature (up to about 300 °F / 150 °C) and cleanrooms (Ruland data via PIB Sales).
- **play_and_precision**: Small to none: with an acetal disc Oldham couplings run with 'virtually zero backlash' (PIB Sales on Ruland), and springs are often used to take out backlash (Wikipedia 'Coupling'); worn or loose-fitting slots add play. Misalignment tolerance: very good for parallel (sideways) offset, up to about 10% of hub outside diameter; angular only about 0.5 degree; axial a few thousandths of an inch (Ruland data via PIB Sales). Small loose-fit nylon versions claim more angle (3-5 degrees) and 1/32-1/16 in offset (Renbrandt TINYMITE). Repeatability: it passes angle 1:1 in theory, but Slocum warns of a small sinusoidal following error in pin-in-slot couplings.
- **access_needed**: end of a tube or shaft: each hub slides onto a shaft end and is clamped from the side; the two shafts must be brought end to end with the disc between them
- **materials**: Hubs: black-anodised aluminium, stainless steel (washdown and food machines) or nickel-plated brass; centre disc: acetal (POM), nylon, PEEK or polycarbonate (PIB Sales; Renbrandt; Motion+Drives). The plastic disc also electrically isolates the two shafts (Design World; Renbrandt quotes 6,000 V insulation). 3D-printed versions: PETG or PLA hubs, with a low-friction disc such as iglidur (brand) or nylon (PA) filament, or PETG/ABS/ASA (Printables makers michelegz and TMP NFT).
- **maker_difficulty**: easy: three simple parts that print flat without supports and just slide together (Printables educational models), or buy one cheaply; the only fiddly part is getting a sliding fit that is free but not sloppy

### Making it

- **processes**: 
  - 3D print (FDM): hubs and disc print flat; widely used for 3D-printer Z-axis and demonstration models
  - CNC: hubs with milled slots or tenons and a turned or moulded disc (commercial couplings)
  - off-the-shelf part: complete couplings with clamp or set-screw hubs, replacement discs, and 3D-printer leadscrew-nut Oldham adapters *(unverified parts omitted)*
- **print_in_place**: no: the two hubs and the disc are printed as separate flat parts and stacked together by hand; osamutake's and Miloslav Brozek's printable models both assemble after printing
- **making_tips_3d_printing**: 1) Print every part flat on the bed with the tongues and slots facing up; Rajkumar's and Miloslav Brozek's models print with no supports (Miloslav: 0.2 mm layers, 3+ walls, PLA is fine for a demonstrator). 2) Clearance: osamutake's educational model uses 0.15 mm radial clearance on its shaft bores and suggests sanding stringing and filing out elephant's foot if parts bind; michelegz designs 'just a little clearance' and files and sands until the parts 'move freely but without backlash'; Miloslav's OpenSCAD model makes all clearances adjustable. 3) Surface finish: use well-dried PETG, fine layers (0.08-0.1 mm) and a random seam for smoother sliding (osamutake). 4) Disc material: make the sliding middle part from a low-friction material such as iglidur (brand) or nylon (michelegz), or PETG/ABS/ASA with PLA outer parts (TMP NFT, who also uses 5 walls and about 50% infill and XY size compensation). 5) A dovetail-shaped tongue stops the parts falling apart vertically (michelegz's 'Oldham dovetail coupling'). 6) Grease the sliding faces (TH3D recommends oil or lithium grease on its leadscrew-nut version). 7) Clamp to metal shafts with metal screws and nuts, not printed threads; Slocum warns set screws need a keyway or thread-locker. 8) Keep printed Z-axis couplers away from heat: PLA softens above about 60 °C (Prusa), PETG is fine below about 80 °C (Prusa). *(unverified parts omitted)*
- **off_the_shelf_parts**: Oldham couplings with clamp hubs or set-screw hubs, inch or metric bores (typical ranges 1/8 in to 2 1/4 in or 3 mm to 57 mm: Design World; small brass/nylon 'TINYMITE' sizes from Renbrandt (brand)); replacement Oldham coupling discs in acetal, nylon or PEEK (Ruland (brand)); stainless-steel hub versions for washdown; 3D-printer leadscrew-nut Oldham couplers for T8 leadscrews (e.g. TH3D (brand), for Creality and Sovol (brands) printers); related off-the-shelf offset couplings such as the Schmidt coupling for larger offsets.
- **rules_of_thumb**: 
  - Parallel offset: up to about 10% of the coupling's outside diameter; angular up to about 0.5 degree; axial only a few thousandths of an inch (Ruland data quoted by PIB Sales).
  - Speed: aluminium/acetal servo couplings are balanced for about 4,500-6,000 rpm (PIB Sales; Motion+Drives); small nylon/brass ones are limited to 2,500 rpm and 175 °F (about 80 °C) (Renbrandt TINYMITE).
  - Maximum sliding speed of each tongue in its slot = shaft offset x angular speed (IIT Kharagpur Virtual Lab), so bigger offsets and higher speeds mean more wear.
  - The middle disc's centre orbits a small circle twice per shaft revolution (Wikipedia 'Coupling').
  - Choose acetal for stiffness and zero backlash, nylon for damping and quiet running, PEEK for heat (to about 300 °F) or cleanrooms (Ruland data quoted by PIB Sales).
  - Largest angle error in pin-in-slot couplings is about the shaft offset divided by the coupling radius (Slocum, FUNdaMENTALs of Design, Topic 5, p. 5-28).
  - Attach hubs with a circumferential clamp; avoid set screws, or use a keyway with them (Slocum, Topic 5, p. 5-28).
  - Printed demonstrator: about 0.15 mm radial clearance on shaft bores (osamutake, Printables).

### When to use it

- **everyday_examples**: 
  - The Z-axis of many hobby 3D printers, where an Oldham-style adapter between the leadscrew nut and the carriage stops a bent or misaligned leadscrew wobbling the print (TH3D)
  - Laser printers: Canon describes an Oldham coupling that drives the developing roller in a removable cartridge despite slight misalignment (patent US11662686B2)
  - Home air-conditioner and heat-pump scroll compressors, where an Oldham-type coupling stops the orbiting scroll from rotating (Wikipedia 'Scroll compressor')
  - Motorised telescope mounts, e.g. between the motor and the worm shaft on a Losmandy G11 (brand) mount (Wikimedia Commons photo)
- **when_to_use**: Use it when two shafts are parallel but cannot be lined up exactly, and you want them to turn together at exactly the same speed with low sideways force on their bearings: stepper motor to leadscrew or encoder, motor to pump or feed roller, or a drive into a removable module. It is also a good choice when you want the drive to break safely at a plastic disc rather than damage gears, when the two shafts must be electrically isolated, and for teaching or fidget models that show constant-velocity drive across an offset.
- **when_not_to_use**: Avoid it for shafts meeting at an angle (use a universal joint, a double universal joint or a CV joint), for large axial movement (use a spline shaft or a jaw coupling that allows end float), for heavy shocks and vibration damping (use a jaw coupling with a rubber spider), or for high-precision servo drives needing no play and high stiffness with angular misalignment (use a beam or bellows coupling). Avoid it at high speed with large offset, because the sliding wears the disc. For very large parallel offsets, a Schmidt (parallel-link) coupling is designed for that.
- **environment_limits**: The plastic disc sets the limits: nylon/brass TINYMITE couplings are rated to 175 °F (about 80 °C) (Renbrandt); PEEK discs are for high temperature to about 300 °F (PIB Sales on Ruland). Printed PLA parts soften above about 60 °C and PETG is fine below about 80 °C (Prusa). Stainless hubs suit washdown and food machines (PIB Sales). *(unverified parts omitted)*
- **common_failures**: 1) Disc wear from sliding, worst with large offset and high speed (sliding speed = offset x angular speed: IIT Kharagpur Virtual Lab): keep offset small and lubricate. 2) Disc shearing on a jam or shock load, by design (PIB Sales): find the jam, fit a new disc. 3) Binding from too tight a printed fit, stringing or elephant's foot (osamutake): sand or file and allow ~0.15 mm clearance. 4) Backlash and rattle from a loose or worn fit (michelegz aims for 'freely but without backlash'; springs can remove it: Wikipedia). 5) Hubs slipping on shafts when held only by set screws (Slocum): use clamp hubs or a flat or keyway. 6) Parts pulling apart or the disc falling out when the shafts move apart axially (michelegz uses a dovetail to prevent this). 7) Trying to use it for angular misalignment, which it tolerates only about 0.5 degree (PIB Sales).
- **related**: 
  - Jaw coupling (spider coupling): Wikipedia describes the Oldham coupler as 'a form of two-jawed jaw coupling where the centre spider is long'; the jaw coupling's rubber spider damps shocks and takes more angle but much less sideways offset
  - Universal joint (Hooke's joint): for shafts at an angle, but a single one wobbles the output speed; the Oldham coupling handles offset at constant speed
  - Flexible beam coupling (helical-slot coupling): one piece, zero backlash, handles angle better, but gives more side load for large offsets
  - Schmidt coupling (parallel-link offset coupling): links and discs for much larger parallel offsets (Nguyen Duc Thang animation 'Schmidt coupling')
  - Scotch yoke and elliptical trammel: other inversions of the same double-slider chain (IIT Kharagpur Virtual Lab)
  - Dog clutch (claw clutch): face lugs that engage and disengage drive, not meant to run offset
  - Rigid coupling: no misalignment allowed; Slocum warns forcing misaligned shafts together with one destroys bearings

### Pictures, videos and models

- **links**: 
  - [Oldham coupler animated small.gif (Wikimedia Commons, by Van helsing)](https://commons.wikimedia.org/wiki/File:Oldham_coupler_animated_small.gif): Rendered animation of an Oldham coupling turning, with the middle disc sliding in its slots *(licence: CC BY-SA 3.0, GFDL 1.2+ or CC BY 2.5 (choice))*
  - [Klauenkupplung 3.jpg (Wikimedia Commons, by Stahlkocher, reworked by Hohum)](https://commons.wikimedia.org/wiki/File:Klauenkupplung_3.jpg): Photo of a real Oldham coupler taken apart into its two hubs and middle disc *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [Oldham coupler Losmandy G11.jpg (Wikimedia Commons, by Gn842)](https://commons.wikimedia.org/wiki/File:Oldham_coupler_Losmandy_G11.jpg): Photo of an Oldham coupler in a telescope mount: aluminium disc on the motor shaft, nylon centre hub, disc on the worm shaft *(licence: Public domain)*
  - [Oldham clutch-diagram.png (Wikimedia Commons, by Jonasz)](https://commons.wikimedia.org/wiki/File:Oldham_clutch-diagram.png): Simple line diagram of the three parts of an Oldham coupling *(licence: GFDL 1.2+ or CC BY-SA 3.0)*
  - [Oldham coupling 1 (Nguyen Duc Thang, thang010146, YouTube)](https://www.youtube.com/watch?v=VPVxy9uW45E): CAD animation of an Oldham coupling joining offset shafts; the channel also has 'Oldham coupling 2-4' variants *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Educational Model of Oldham Coupling (osamutake, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1503524-educational-model-of-oldham-coupling): Desk demonstrator on an 80 mm base plate with a YouTube introduction video; printing notes on PETG, fine layers, random seam and 0.15 mm clearances *(licence: CC BY)*
  - [Oldham Coupling Fidget - Offset-Shaft Constant-Velocity Demo Toy (Miloslav Brozek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1765815-oldham-coupling-fidget-offset-shaft-constant-veloc): Supportless five-part fidget showing two offset knobs turning 1:1; fully parametric in one OpenSCAD file (offset, sizes and clearances) *(licence: CC BY)*
  - [Oldham dovetail coupling (plus thrust bearing) (michelegz, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/425897-oldham-dovetail-coupling-plus-thrust-bearing): Working printed Oldham coupling for 5 mm shafts with dovetail tongues that stop it coming apart, for a 3D-printer Z axis; advice on low-friction disc material and fitting *(licence: CC BY-NC)*
  - [Oldham Coupling T8 Z-axis (TMP NFT, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/820386-oldham-coupling-t8-z-axis): Printed leadscrew-nut Oldham coupler for T8 leadscrews with print settings (PLA outer parts, PETG/ABS/ASA middle, 5 walls, ~50% infill) *(licence: CC BY-SA)*
  - [Oldham Coupling - Compliant Mechanism - Z Wobble Reducer (PRusty, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/383091-oldham-coupling-compliant-mechanism-z-wobble-reduc): Experimental three-layer flexure version that replaces the sliding disc with springy arms so the leadscrew nut can move in X and Y; printed in PETG *(licence: CC BY)*
- **diagram_idea**: An exploded view of the two slotted hubs and the cross-tongued middle disc, then an end-on animation of two offset shafts turning together while the disc's centre traces a small circle and its tongues slide back and forth in the slots.
- **sources**: 
  - https://en.wikipedia.org/wiki/Coupling
  - https://en.wikipedia.org/wiki/Oldham_coupler
  - https://en.wikipedia.org/wiki/John_Oldham_(engineer)
  - https://en.wikipedia.org/wiki/Jaw_coupling
  - https://en.wikipedia.org/wiki/Scroll_compressor
  - https://commons.wikimedia.org/wiki/File:Oldham_coupler_animated_small.gif
  - https://commons.wikimedia.org/wiki/File:Klauenkupplung_3.jpg
  - https://commons.wikimedia.org/wiki/File:Oldham_coupler_Losmandy_G11.jpg
  - https://commons.wikimedia.org/wiki/File:Oldham_clutch-diagram.png
  - https://mr-iitkgp.vlabs.ac.in/exp/oldham-coupling-mechanism/theory.html
  - https://pibsales.com/bearings/ruland-oldham-couplings-solutions-for-conveyors/
  - https://www.designworldonline.com/couplings-accommodate-parallel-misalignment/
  - https://motion-drives.com/blog/2022/09/28/oldham-couplings-for-food-and-beverage-equipment/
  - https://renbrandt.com/tinymite-oldham-shaft-couplings/
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
  - https://www.th3dstudio.com/product/creality-leadscrew-oldham-coupler-fixes-z-wobble-binding/
  - https://patents.google.com/patent/US11662686B2/en
  - https://www.youtube.com/watch?v=VPVxy9uW45E
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://www.youtube.com/watch?v=Z82Rm35zFKk
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Other info

- **Fields with unverified parts:** environment_limits, input_output, load, making_tips_3d_printing, processes, safety_notes

## 78 Jaw coupling (spider coupling)

*clutches & couplings.* Two hubs with interlocking claws and a rubbery spider between them, joining two shafts while soaking up shocks and small misalignment

### What it is

- **plain_name**: Two metal cups with stubby fingers on their ends that interlock like the fingers of two hands, with a rubbery star-shaped cushion squeezed in between, joining a motor shaft to another shaft
- **term**: Jaw coupling (spider coupling, elastomeric jaw coupling)
- **aliases**: 
  - spider coupling / spider coupler (named after the many-legged rubber insert)
  - Lovejoy coupling (Lovejoy (brand), now part of Timken); L-type or 'L-jaw' coupling (Lovejoy's standard straight-jaw range)
  - plum coupling / plum blossom coupling / plum spider coupler (hobby CNC and 3D-printer listings for small aluminium versions)
  - straight jaw coupling and curved jaw coupling
  - backlash-free jaw coupling / servo jaw coupling (curved jaws with a preloaded spider, e.g. ROTEX GS (brand, KTR))
  - elastomer coupling / flexible jaw coupling
  - element (the formal name of the spider), load cushions, snap-wrap spider, open-centre spider, in-shear jaw coupling
  - SOX (brand) NBR spider, Hytrel (brand) spider
- **family**: clutches & couplings
- **other_families**: brakes, dampers & speed control, quick-release & tool-free
- **one_liner**: Two hubs with interlocking jaws on their faces pass turning force through a rubbery star-shaped insert (the spider) squeezed between the jaws, so the shafts turn together while the spider soaks up shocks, vibration and small misalignment.
- **complexity**: A few parts: two hubs (each fixed to one shaft by a set screw, key or clamp, with two or more stubby jaws on its face) and one elastomer spider (a star- or cross-shaped insert with one leg for each gap between the jaws); some types use separate load cushions or a wrap-around 'snap-wrap' spider held by a ring.
- **how_it_works**: The two hubs face each other with their jaws interleaved, and each gap between a driving jaw and a driven jaw is filled by one leg of the spider (Wikipedia 'Jaw coupling'; Lovejoy). When the motor turns, each driving jaw squeezes a spider leg against the next driven jaw, so all the torque passes through the rubber in compression (Lovejoy). Because rubber gives a little, the shafts can sit slightly out of line and shocks and vibration are cushioned; a harder spider carries more torque and is stiffer, a softer one damps and flexes more (KTR ROTEX GS catalogue). In 'backlash-free' curved-jaw versions the convex spider teeth are squeezed into concave jaws with preload, so there is no play at all (KTR; Wikipedia).

### Finder attributes

- **job**: 
  - join and hold: connects two shafts end to end so they turn together, e.g. a motor to a pump, gearbox or leadscrew
  - let it move (turn, slide or bend): the rubber spider lets the shafts sit slightly out of line (about 1 degree and a few tenths of a millimetre) and allows a little end float
  - slow it, stop it or keep its speed steady (in the sense of damping): the spider soaks up shocks and torsional vibration, which shortens settling time in stop-and-go machines (Wikipedia; Lovejoy)
- **motion**: rotate: continuous, unlimited turns at 1:1; the spider flexes slightly (twists a little under torque and bends to follow small misalignment)
- **degrees_of_freedom**: 0 free movements in the ordinary sense: the shafts are locked together in rotation, with only a small springy twist (torsional wind-up) in the spider. The spider also allows small springy movements in the other directions: end float (e.g. +0.4/-0.2 mm), sideways offset (0.04-0.15 mm) and tilt (0.8-1.2 degrees) on small KTR ROTEX GS sizes, or up to 1 degree and 0.015 in on Lovejoy L-type (KTR catalogue p. 122; Lovejoy).
- **special_behaviour**: 
  - fail-safe or breakaway (fail-safe kind): in the usual compression design, if the spider wears out or breaks, the metal jaws simply meet and keep driving, 'albeit with considerable noise and accelerated wear' (Lovejoy; Wikipedia). In-shear designs are 'not fail-safe': the drive disconnects if the element fails (Wikipedia)
  - quick-release (partly): the two halves just push together axially and pull apart without tools once the hubs are fixed on the shafts; the jaws are chamfered for 'blind assembly' (KTR assembly instructions), and makers use it to plug devices on and off a motor (matyaz, Sketchfab). Snap-wrap spiders can be changed without moving the hubs (Lovejoy)
  - vibration and shock damping (not in the fixed list): NBR spiders give the best damping, Hytrel low, bronze none (Lovejoy)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): torque is carried by the jaws pressing on the spider legs
  - spring force (a spring or springy part presses it in place): the elastomer spider is the spring that carries the load; in backlash-free versions it is preloaded between the jaws (KTR)
  - friction or clamping (force-fit): each hub is held on its shaft by a clamp, set screw or key
- **input_output**: Continuous rotation -> the same rotation, 1:1, shafts in line (tolerating about 1 degree of tilt and about 0.38 mm of sideways offset on Lovejoy L-type; less with hard Hytrel or bronze spiders). Torsionally springy, so it cushions shocks but lets the output lag slightly under load; straight-jaw types may have a little play, while preloaded curved-jaw types are backlash-free (Wikipedia; KTR). Back-drivable: yes, it drives equally in both directions. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: loosen the hub set screws or clamp screws to take the hubs off their shafts; the two halves and spider pull apart axially by hand (KTR); spiders are sold separately as wear parts (Lovejoy)
- **reuse_cycles**: many times: hubs last indefinitely; the spider is a wear part that is inspected and replaced (Lovejoy says replace when its permanent compression set reaches 25%; on non-reversing drives the unworn trailing legs can be turned to the driving side to extend life)
- **tools_needed**: A hex key (Allen key) or screwdriver for set screws or clamp screws (and a key for keyed shafts); a feeler gauge to check play or the gap between hubs; optionally a little mineral-oil-based grease to ease pushing a preloaded spider in (KTR assembly instructions)
- **seal**: none: open between the jaws
- **load**: Medium to heavy torque for its size, carried in compression by several spider legs; standard NBR spiders are the baseline, urethane carries about 1.5 times and Hytrel about 3 times as much (Lovejoy); Lovejoy L-type sizes range from 3.5 in-lb (about 0.4 N m, L035) up to 12,500 in-lb (about 1,400 N m, L276 with a bronze insert), and its jaws are designed to withstand at least 10 times the coupling's torque rating. Weak directions: pulling apart (nothing holds the halves together axially, and too much axial motion lets the coupling come apart: Wikipedia), sideways offset (only tenths of a millimetre; it creates the largest restoring forces on the bearings: KTR), and heat, which softens the spider.
- **adjustable**: Not adjustable once fitted, but you tune it by choosing the spider: soft NBR (80 Shore A) for most damping, urethane (90 Shore A) or hard Hytrel (55-64 Shore D) for more torque and stiffness, or bronze for heat and low speed (Lovejoy; KTR). KTR offers five hardnesses colour-coded soft to hard. The gap between the hubs (KTR 'dimension E') is set at assembly.
- **play_and_precision**: The spider's springiness means the output lags a little under changing load. Misalignment: Lovejoy L-type 1 degree angular and 0.015 in (0.38 mm) parallel with NBR or urethane, 0.5 degree with Hytrel or bronze; small KTR ROTEX GS sizes 0.8-1.2 degrees angular, 0.04-0.15 mm radial, about +0.4/-0.2 mm axial. Slocum notes simple pin-in-slot couplings, including spider couplings, can add a small sinusoidal angle error. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: each hub slides onto a shaft end and is fixed from the side; the halves then plug together along the axis, which can be done 'blind' thanks to chamfered jaws (KTR)
- **materials**: Hubs: sintered iron or cast iron (Lovejoy L-type), steel or aluminium (servo and hobby types). Spiders: NBR rubber (80 Shore A, oil resistant, -40 to 100 °C), urethane (90 Shore A, -34 to 71 °C, resists ozone, sunlight and hydrolysis), Hytrel polyester elastomer (brand; -51 to 121 °C, good oil and chemical resistance), oil-impregnated bronze (rigid, up to 232 °C, max 250 rpm) (Lovejoy); polyurethane 80-98 Shore A and Hytrel 64-72 Shore D in KTR ROTEX GS. Printed versions: PETG hubs with a TPU spider (Tritschi, Printables).
- **maker_difficulty**: easy to fit a bought one (small 'plum' couplings for stepper motors are cheap and common); moderate to print one, because the spider must be printed in flexible TPU, which Prusa recommends 'only for experienced makers', and printed hubs are weaker than metal ones

### Making it

- **processes**: 
  - off-the-shelf part: by far the most common; sized by shaft bores and torque
  - 3D print (FDM): hubs in PETG or similar, spider in TPU; or a printed part shaped to plug straight into one metal jaw hub (Hackaday)
  - CNC: hubs can be turned and milled; spiders are normally moulded *(unverified parts omitted)*
- **print_in_place**: no: the two hubs and the spider are separate parts (the spider in a different, flexible material), pushed together after printing
- **making_tips_3d_printing**: 1) Two materials: print the hubs in a stiff, tough material such as PETG and the spider in TPU (Tritschi's printed motor coupler on Printables, redrawn from a commercial KTR-style coupling). 2) TPU is usually 60A-90A Shore hardness (Prusa), about the same as or softer than industrial NBR (80A) and urethane (90A) spiders (Lovejoy), so a printed spider will twist more and carry less torque; pick the hardest TPU you can print. 3) Print TPU slowly (Prusa suggests about 20 mm/s, 30-40 mm/s maximum) with little or no retraction to avoid clogging. 4) Hubs: fix them with metal screws and nuts (Tritschi's uses clamp screws with captive nuts), not printed threads. 5) Leave a gap between the jaw tips and the opposite hub so the spider can flex (KTR's 'dimension E'); pegs on the KTR spider stop it rubbing flat against the hubs. 7) Alternative: buy one metal jaw hub for the motor shaft and model the matching jaw pocket into your printed gear or wheel, so it simply slides on (Hackaday, 2019); commenters suggest a heat-set insert or a second coupling to stop it sliding off along the shaft. 9) Heat: PETG is fine below about 80 °C (Prusa); keep PLA hubs away from warm motors, since PLA softens above about 60 °C (Prusa). *(unverified parts omitted)*
- **off_the_shelf_parts**: Straight-jaw couplings (L-type / 'L-jaw' hubs and spiders, e.g. Lovejoy (brand)); curved-jaw backlash-free servo couplings (e.g. ROTEX GS (brand, KTR)); small aluminium 'plum' or 'spider' couplings for NEMA 17 stepper motors and CNC and 3D-printer leadscrews; replacement spiders in NBR (SOX (brand)), urethane, Hytrel (brand) or bronze; open-centre spiders for close shaft spacing; snap-wrap spiders with a retaining ring; double-cardanic (DKM) versions for larger offsets (KTR).
- **rules_of_thumb**: 
  - Lovejoy L-type misalignment: 1 degree angular and 0.015 in (0.38 mm) parallel with NBR or urethane spiders; Hytrel and bronze halve the angle to 0.5 degree, bronze allows only 0.010 in parallel (Lovejoy L-type product page).
  - Spider torque relative to NBR: urethane 1.5x, Hytrel 3x; bronze inserts only to 250 rpm (Lovejoy 'Spiders are Key to Jaw Coupling Performance').
  - Spider temperature ranges: NBR -40 to 212 °F (-40 to 100 °C), urethane -30 to 160 °F (-34 to 71 °C), Hytrel -60 to 250 °F (-51 to 121 °C), bronze -40 to 450 °F (Lovejoy).
  - Replace the spider when its permanent compression set reaches 25% (Lovejoy).
  - Jaws are designed to withstand at least 10 times the coupling's torque rating, which is why the coupling stays fail-safe when a spider fails (Lovejoy).
  - Small servo sizes (KTR ROTEX GS sizes 5 and 7): radial 0.04-0.15 mm, angular 0.8-1.2 degrees, axial about +0.4/-0.2 to +0.6/-0.3 mm, with harder spiders allowing less (KTR catalogue p. 122).
  - Harder spider = more torque and stiffness; softer spider = more misalignment allowance and damping (KTR catalogue p. 119).
  - Parallel (radial) offset produces the largest restoring forces; for larger offsets use the double-cardanic (DKM) version, and careful alignment increases service life (KTR catalogue p. 121).
  - Keep the specified gap between hubs (dimension E) so the coupling can take up displacement; never bore hubs beyond their maximum bore or they may burst (KTR assembly instructions KTR-N 45510).
  - Slocum: choose a jaw coupling with an eight-legged spider over an Oldham coupling 'when more torque and misalignment capacity are needed with a more linear response' (FUNdaMENTALs of Design, Topic 5, p. 5-28).

### When to use it

- **everyday_examples**: 
  - The small aluminium 'plum' or 'spider' coupler joining a stepper motor to the leadscrew on hobby CNC routers and some 3D printers (Know Your 3D Printer: The Z Coupler, 2014)
  - Motor-to-pump and motor-to-gearbox drives on industrial machinery, where a jaw coupling with a coloured rubber spider sits between the two shafts (Lovejoy; Wikimedia Commons category 'Jaw couplings' photo of an industrial motor drive)
  - A hydraulic winch drive (Wikimedia Commons category 'Jaw couplings')
- **when_to_use**: Use it as the everyday, general-purpose way to join a motor to a pump, gearbox, leadscrew, conveyor roller or robot drive shaft when the shafts are nearly (but not perfectly) in line and you want shocks and vibration cushioned. It suits drives that must keep running if the rubber fails (fail-safe), machines where you want to unplug a motor or module without tools, and, with a preloaded curved-jaw spider, stop-and-go positioning axes such as machine-vision stages (Wikipedia). It is also handy for makers as a strong way to attach printed parts to a motor shaft (Hackaday).
- **when_not_to_use**: Avoid it when the shafts are noticeably offset sideways (use an Oldham coupling, which handles about 10% of its diameter), or at a large angle (use a universal joint or CV joint). Avoid it where there must be zero play and high stiffness during continuous precise motion (use a beam, bellows or disc coupling; Wikipedia notes curved jaw couplings are less suited to constant scanning motion). If the drive must disconnect when the insert fails, for safety or to protect the machine, the fail-safe behaviour is the wrong choice: use an in-shear jaw coupling, an Oldham coupling (its disc shears) or a torque limiter. Avoid it where hot oils, chemicals or ozone attack the spider unless you pick a resistant spider material.
- **environment_limits**: The spider sets the limits: NBR -40 to 100 °C, urethane -34 to 71 °C, Hytrel -51 to 121 °C, bronze to about 232 °C but only 250 rpm (Lovejoy); KTR's 92 Shore A polyurethane is rated -40 to +90 °C continuous. Aggressive liquids and oils, ozone, and too high or low temperatures physically change the spider and cause early wear (KTR assembly instructions; Wikipedia). Store spare spiders dry, away from ozone sources such as fluorescent lights and high-voltage equipment; they keep their properties up to 5 years in good storage (KTR). Urethane resists ozone, sunlight and hydrolysis; NBR resists oil (Lovejoy). Printed TPU spiders and PETG/PLA hubs have much lower heat limits (PLA softens above about 60 °C, PETG fine below about 80 °C: Prusa). Rubber spiders take a permanent set over time (Lovejoy: replace at 25% compression set).
- **safety_notes**: A spinning coupling can catch fingers, hair and clothing: switch off and secure the motor against accidental switch-on before working on it, never reach in while it runs, and fit a guard or cover (KTR assembly instructions). Because a standard jaw coupling keeps driving metal-on-metal when the spider fails (Lovejoy), a failure may not stop the machine, only make it noisy; check spiders regularly. Overbored hubs can burst and throw fragments (KTR).
- **common_failures**: 1) Spider wear, cracking or melting from misalignment, which also heats the spider (KTR; Wikipedia, citing MPTA): align the shafts carefully and use a double-cardanic version for larger offsets. 2) Spider taking a permanent set so backlash appears (Lovejoy: replace at 25% compression set). 3) Over-torque or shock loads breaking spider legs or even the hub cams (KTR): size the coupling with a service factor. 4) Chemical, ozone or temperature damage to the spider (KTR; Wikipedia): choose the right spider material. 5) Torsional vibration wearing the spider (Wikipedia). 6) Hub set screws or clamp screws working loose (KTR): tighten and secure them. 7) Halves pulling apart from too much axial movement (Wikipedia): keep the specified gap and locate the shafts. *(unverified parts omitted)*
- **related**: 
  - Oldham coupling: a sliding middle disc instead of a rubber spider; takes much more sideways offset and breaks at the disc on overload, but damps less (Wikipedia calls it 'a form of two-jawed jaw coupling where the centre spider is long')
  - Flexible beam coupling (helical-slot coupling): one piece, zero backlash, no rubber to wear, but little damping
  - Dog clutch (claw clutch): similar interlocking lugs but no rubber insert; slides apart to disconnect the drive
  - Tyre coupling / rubber block couplings: other elastomer couplings with larger misalignment capacity (e.g. the improvised tyre-piece coupling in the Wikipedia 'Coupling' photo)
  - Rag joint: another flexible-disc type of coupling listed in Wikipedia's 'Coupling' article
  - Universal joint (Hooke's joint): for shafts at larger angles; no damping
  - Series-elastic coupling: a deliberately soft spring between motor and output whose twist is measured to control force
  - Friction slip clutch or torque limiter: when you want the drive to slip or disconnect at a set torque instead of carrying on

### Pictures, videos and models

- **links**: 
  - [JawConcept2.jpg (Wikimedia Commons, by Aruland)](https://commons.wikimedia.org/wiki/File:JawConcept2.jpg): Computer drawing of a curved jaw coupling (the lead image of Wikipedia's 'Jaw coupling' article) *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [JawConcept.jpg (Wikimedia Commons, by Aruland)](https://commons.wikimedia.org/wiki/File:JawConcept.jpg): A second computer drawing of a curved jaw coupling with its hubs and spider *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [How a Jaw Coupling Works (Mechanical Vision, YouTube)](https://www.youtube.com/watch?v=H1OA0DaGjxw): 3D animation of how the hubs, jaws and spider fit together and carry torque *(licence: link only (standard YouTube licence))*
  - [What Do Different Jaw Coupling Spider Colors Mean? (Ruland Manufacturing, YouTube)](https://www.youtube.com/watch?v=ZMuWioVDryM): Real spiders of different hardnesses and colours and what they are used for *(licence: link only (standard YouTube licence))*
  - [ROTEX GS backlash-free jaw couplings catalogue (KTR (brand), PDF)](https://www.ktr.com/fileadmin/ktr/media/Tools_Downloads/kataloge/03_backlash-free_jaw_couplings_ROTEX_GS.pdf): Cutaway drawings of the preloaded spider, spider hardness colour chart, and diagrams of axial, radial and angular displacement *(licence: link only (manufacturer catalogue))*
- **make_it_yourself**: 
  - [Flexible Motor Coupler (Coupling) (Tritschi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/736166-flexible-motor-coupler-coupling): Printed two-jaw coupling for a stepper motor (10 mm to 5 mm D-shaft): PETG clamp hubs with screws and captive nuts and a TPU spider, redrawn from a commercial KTR-style coupling *(licence: CC BY-NC-SA)*
  - [Parametric Spider Coupling (matyaz, Sketchfab)](https://sketchfab.com/3d-models/parametric-spider-coupling-c28c251dfba241cb8047c747cd4e0a33): Lovejoy-type spider coupling for stepper and other motor shafts, generated parametrically in Python with the open-source CadQuery CAD library *(licence: CC BY 4.0)*
  - [(Mis)use This Part To Attach 3D Printed Stuff To A Shaft (Hackaday, 2019)](https://hackaday.com/2019/09/02/misuse-this-part-to-attach-3d-printed-stuff-to-a-shaft/): Technique: fix one half of a metal spider coupling to the motor shaft and model the matching jaw socket into a printed gear or part so it slides on *(licence: link only)* *(unverified parts omitted)*
- **diagram_idea**: An exploded view of two jawed hubs and the star-shaped spider sliding together, then an end-on view showing the driving jaws squeezing the spider legs against the driven jaws (arrows for compression), with a small inset of slightly tilted shafts to show the rubber taking up misalignment.
- **sources**: 
  - https://en.wikipedia.org/wiki/Jaw_coupling
  - https://en.wikipedia.org/wiki/Coupling
  - https://commons.wikimedia.org/wiki/Category:Jaw_couplings
  - https://commons.wikimedia.org/wiki/File:JawConcept2.jpg
  - https://commons.wikimedia.org/wiki/File:JawConcept.jpg
  - https://www.lovejoy-inc.com/resources/technical-articles/spiders-are-key-to-jaw-coupling-performance/
  - https://www.lovejoy-inc.com/products/jaw-type-couplings/l-type-standard-jaw-coupling/
  - https://www.ktr.com/fileadmin/ktr/media/Tools_Downloads/kataloge/03_backlash-free_jaw_couplings_ROTEX_GS.pdf
  - https://www.ktr.com/dam/jcr:b68865e2-9666-49a8-8b7e-828f77a5cc4e/45510EN000000.PDF
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
  - https://hackaday.com/2019/09/02/misuse-this-part-to-attach-3d-printed-stuff-to-a-shaft/
  - https://sketchfab.com/3d-models/parametric-spider-coupling-c28c251dfba241cb8047c747cd4e0a33
  - https://digitalmeetsworld.wordpress.com/2014/11/13/know-your-3d-printer-the-z-coupler/
  - https://www.youtube.com/watch?v=H1OA0DaGjxw
  - https://www.youtube.com/watch?v=ZMuWioVDryM
  - https://www.youtube.com/watch?v=uCPjqIkI3AU
  - https://api.printables.com/graphql/
  - https://media.printables.com/media/prints/736166/images/5754471_eacd6502-239a-4256-a372-c63109e62223_194d7a2d-4a7a-4e41-aa67-466866369dc2/2024-01-22-5-coupling.jpg
  - https://help.prusa3d.com/article/flexible-materials_2057
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Other info

- **Fields with unverified parts:** common_failures, input_output, make_it_yourself, making_tips_3d_printing, play_and_precision, processes

## 79 Flexible beam coupling (helical-slot coupling)

*clutches & couplings.* A one-piece coupling with a spiral slot cut round it so it bends to join slightly misaligned shafts without backlash (common on 3D-printer leadscrews)

### What it is

- **plain_name**: A short metal (or printed) tube with a spiral slot cut round its middle that joins a motor shaft to another shaft end to end; the slotted part bends like a spring so shafts that don't quite line up can still turn together, without any slack
- **term**: Beam coupling (helical beam coupling, flexible beam coupling)
- **aliases**: 
  - helical coupling (Wikipedia's other main name for it)
  - helical beam coupling / helical-beam shaft coupling
  - flexible beam coupling
  - flexure coupling (Wikipedia)
  - flexible coupling / flexible shaft coupling / flex shaft coupler (general names also used for other flexible types)
  - spiral coupler / spiral-cut coupler (3D-printer and hobby-seller wording)
  - 'aluminium flexible coupling coupler helical shaft 5mm x 8mm' (the usual online listing wording for the 3D-printer size)
  - Z coupler / leadscrew coupler (3D-printer use)
  - single-beam and multi-beam coupling (one spiral cut, or two to six overlapped cuts)
  - parallel-cut or slotted beam coupling (McMaster-Carr name for a stiffer variant with short straight slits)
  - servo coupling (the catalogue family it is sold in)
  - Heli-Cal (brand, Helical Products Company)
- **family**: clutches & couplings
- **other_families**: compliant mechanisms & flexures
- **one_liner**: A one-piece tube with a spiral slot cut through its wall that joins two shafts end to end, bending slightly to cope with small errors in their line-up while turning them together with no play.
- **complexity**: Single piece: one tube with a spiral (helical) slot cut through the middle, a bore at each end for the two shafts (they can be different sizes, e.g. 5 mm and 8 mm), and either set screws (usually two per end, e.g. at 120 degrees apart) or a split clamp with a clamping screw at each end. Printed versions may add captive nuts or heat-set inserts for the screws.
- **how_it_works**: Cutting a spiral slot through the wall of a solid tube leaves a thin spiral strip (the helical beam) joining the two ends. That strip can bend like a coil spring, so the two ends can tilt a few degrees, shift slightly sideways and move a little closer or further apart. Twisting is different: the twisting force has to pass all the way along the strip, which is much stiffer that way, so the two shafts turn together with no slack (zero backlash) and only a slight springy twist under load (wind-up). Because it is one piece there are no parts to wear loose, but its resistance to bending does push sideways on the shafts' bearings (Machine Design, Boehm 2003).

### Finder attributes

- **job**: 
  - join and hold: connects two shafts end to end so they turn together, e.g. a stepper motor to a leadscrew
  - let it move (turn, slide or bend): it bends so that two slightly misaligned shafts can turn without forcing each other or their bearings
- **motion**: flex: the slotted middle bends while the whole coupling turns with the shafts; typical small catalogue couplings allow about 3-5 degrees of angle, 0.25-0.76 mm (0.010-0.030 in) of sideways offset and about 0.2-0.25 mm of end movement (MW Components); special helical-beam universal joints with many coils bend up to 90 degrees (Boehm, Machine Design)
- **degrees_of_freedom**: 0 in the direction that matters: it does not let one shaft turn relative to the other (apart from a slight springy twist under load). As a flexure it gives small springy movement in five directions: tilting two ways, shifting sideways two ways, and stretching or squashing along the shaft
- **special_behaviour**: 
  - self-aligning or self-centring (loosely): it does not pull the shafts into line, but it flexes to accept small line-up errors instead of forcing the shafts and bearings, so it tolerates a less-than-perfect build
  - none of the other listed behaviours: it is a simple, permanent drive connection that does not slip, click, lock or release
- **holding_principle**: 
  - friction or clamping (force-fit): set screws or a clamp screw grip each shaft; McMaster-Carr notes clamp hubs grip evenly without marring and hold tighter than set screws
  - shape (the parts interlock; form-fit): a set screw tightened onto the flat of a D-shaped motor shaft also locks by shape; the turning force itself passes through the continuous one-piece body
- **input_output**: Rotation in -> the same rotation out (1:1), shafts in line (nominally on the same axis, with small angle, offset and end-float allowed). No sliding parts, so almost no power is lost. Zero backlash, but it twists slightly under load (wind-up): from about 5 degrees at full load for flexible designs down to about 0.05 degrees for stiff servo designs (Boehm, Machine Design). Back-drivable: yes, it passes turning force equally in both directions.
- **power**: passive (no power needed)
- **removability**: removable: loosen the set screws or clamp screws with a hex key and slide it off the shafts
- **tools_needed**: A hex key (the common 5 x 8 mm aluminium coupler uses a 2 mm hex key for its set screws, per Adafruit). Printed versions need nuts, set screws or heat-set inserts (and a soldering iron to fit inserts). *(unverified parts omitted)*
- **seal**: none: the slot is open; it does not seal anything
- **load**: Light to medium: made for motion-control jobs (steppers, servos, encoders, leadscrews), not heavy power. Catalogue torque ratings run from about 0.14 N·m to about 63 N·m (1.2-556 in·lb) across MW Components' ranges, and 3-175 in·lbf (0.34-20 N·m) on McMaster-Carr's listing. Strong and stiff in twist within its rating; deliberately soft in bending and along its length; the thin spiral beam is the weak point, and it cracks from fatigue if overloaded by torque spikes, reversing loads or too much misalignment (especially sideways offset for single-beam types).
- **adjustable**: no: once tightened nothing adjusts; you can only choose where along the shafts it sits before tightening the screws
- **play_and_precision**: No play (zero backlash), and it returns to the same position every time because nothing slides; the only 'give' is springy twist under load (wind-up), which is small for multi-beam and stainless designs and larger for long single-beam ones. Misalignment tolerated: about 3-5 degrees of angle, 0.25-0.76 mm sideways offset and 0.2-0.25 mm end float for small catalogue couplings (MW Components). Single-beam types handle angle and end float well but sideways offset poorly, because the single beam has to bend two ways at once (Hewitson, Machine Design 2000). It is also a little springy along its length, which on a 3D printer's Z axis can show up as uneven layers if the carriage weight rests on it (LoboCNC; SoliForum).
- **access_needed**: end of a tube or shaft: it slides over the shaft ends, and you need side access to its set screws or clamp screws with a hex key
- **materials**: Usually aluminium alloy (7075-T6) for low weight and inertia; stainless steel (17-4PH or 303) for about twice the torque and stiffness and for heat or corrosion; also acetal (Delrin), titanium and other plastics for special uses (Wikipedia 'Coupling'; ABSSAC; Hewitson, Machine Design). Joins any metal shafts, typically steel motor shafts and leadscrews of different diameters (e.g. 5 mm to 8 mm). Maker-printed versions in PETG, PLA or nylon work for light loads.
- **maker_difficulty**: easy to fit, and best bought: metal ones are cheap standard parts that just need a hex key. Printing one is moderate: the spiral slot has awkward overhangs and a printed plastic beam is weaker, springier and less durable than aluminium

### Making it

- **processes**: 
  - off-the-shelf part: by far the usual choice (aluminium or stainless beam couplings in many bore-size pairs)
  - CNC: made commercially by turning a bar and machining the spiral slot through the wall
  - 3D print (FDM): possible for light loads; several printable designs exist (LoboCNC, tierra, JoanPeturPetersen) *(unverified parts omitted)*
- **print_in_place**: partly: a printed beam coupling is one piece and works straight off the printer, but it needs added set screws, nuts or heat-set inserts to grip the shafts
- **making_tips_3d_printing**: 1) Consider buying one: a machined aluminium 5 x 8 mm coupler is a cheap standard part and is far stiffer in twist than a printed spiral. 2) If you print one, print it standing up (shaft axis vertical), so the spiral beam builds as a ramp: tierra printed his Anycubic i3 Mega coupler upright with no supports at 100% infill and 0.2 mm layers, but slowly because of the big overhangs; LoboCNC used 0.2 mm layers, 25% infill, no supports and 4 perimeters for strength. 3) Shape the slot for printing: a normal straight-sided spiral slot needs a very steep (high helix angle) cut to avoid overhangs, which makes the coupler stiff in bending and soft in twist, the opposite of what you want; LoboCNC's 'Con-Helical' coupler uses a conical, low-angle helical slot that removes the steep overhang. 4) Stop it acting as a spring on a Z axis: LoboCNC adds a small solid core down the middle so it cannot compress under the Z-carriage weight but can still bend; otherwise small squashing movements show up as ragged layer lines. 5) Grip the shafts with metal: M3 set screws in captive nut slots (or tapped straight into plastic) as in LoboCNC's two versions, M4 nuts and screws as in tierra's, or heat-set inserts. Hubs suggests about 0.5 mm clearance between interlocking FDM parts. 9) An easier-to-print alternative is two rigid printed hubs with a TPU middle (e.g. Pappy's 'Flexible Stepper Coupler' on Printables, PLA-CF hubs with a TPU insert), but that is a jaw-type flexible coupling, not a beam coupling. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'beam coupling', 'helical coupling', 'flexible shaft coupling 5mm x 8mm' (the usual 3D-printer size, about 25 mm long x 18-19 mm diameter), 'set screw beam coupling' and 'clamp beam coupling', 'single-beam', 'four-beam' and 'six-beam' servo couplings (Ruland (brand) sells 4-beam and 6-beam types), 'spiral cut' versus 'parallel cut' couplings (McMaster-Carr), stainless steel beam couplings (Heli-Cal (brand) from Helical Products, MW Components (brand) A/H/W/X/MC series). Related hardware: D-profile (D-flat) motor shafts, cup-point set screws (M3 or M4), thread-locking compound, heat-set threaded inserts. For comparison when choosing: jaw (spider) couplings, Oldham couplings, bellows and disc couplings, rigid couplings.
- **rules_of_thumb**: 
  - Single-beam couplings (one long spiral cut) handle angle and end float well but sideways (parallel) offset poorly, because the single beam must bend two ways at once, which raises stress and causes early failure; multi-beam couplings (two or three overlapped cuts, like a multi-start thread) have shorter beams, more torque and torsional stiffness and better offset capacity, at the cost of somewhat higher bearing loads (Hewitson, 'Sorting out servo couplings', Machine Design 2000; ISC Companies on Ruland (brand) beam couplings).
  - Typical limits for small catalogue beam couplings: 3-5 degrees angle, 0.25-0.76 mm (0.010-0.030 in) parallel offset, about 0.2-0.25 mm (0.008-0.010 in) axial motion, and up to 10,000 rpm (3,600 rpm for the largest sizes) (MW Components beam coupling page).
  - Treat the catalogue 'dynamic' torque as a momentary peak: divide it by 2 for drives that always turn one way and by 4 for drives that reverse (Helical Products engineering data as published by ABSSAC).
  - Stainless steel versions have about twice the torsional strength and stiffness of aluminium ones, but add mass and inertia (Hewitson, Machine Design 2000).
  - Thicker coils raise torsional stiffness and torque rating; a bigger inside diameter makes the coupling more flexible but lowers its torque capacity (Boehm, 'What you need to know about one-piece, helix-curved beams', Machine Design 2003).
  - Wind-up (springy twist) at full load ranges from about 5 degrees for flexible designs down to about 0.05 degrees for stiff servo designs; for servo positioning the torque-to-wind-up relationship must stay linear over the working range (Boehm, Machine Design 2003).
  - Temperature: aluminium beam couplings are rated to about 93 °C (200 °F), stainless steel to about 316 °C (600 °F) (MW Components; ABSSAC).
  - Don't push the shaft ends into the slotted middle: beam couplings have a relieved bore so the shafts don't touch the flexing part (ABSSAC).
  - Clamp-style hubs grip shafts evenly without marring them and hold tighter than set screws (McMaster-Carr beam couplings page).
  - For a printed helical coupler, use a low-angle (conical) slot rather than a steep straight-sided one: steep slots print badly and make the coupler stiff in bending and soft in twist (LoboCNC, 'Con-Helical Flexible Coupler', Printables).
  - The common 3D-printer coupler joins a 5 mm stepper shaft to an 8 mm leadscrew, is about 25 mm long and 18 mm across, and uses two set screws per side tightened with a 2 mm hex key (Adafruit product 1176).

### When to use it

- **everyday_examples**: 
  - The shiny slotted aluminium tube joining the Z-axis motor to the long threaded rod (leadscrew) on many desktop 3D printers and hobby CNC machines
  - The small coupling between a motor or shaft and a rotary encoder (the sensor that counts turns) in automation and robotics equipment (Wikipedia 'Coupling')
  - Stepper-motor linear stages and actuators in maker kits, where the motor turns a leadscrew through a spiral coupler (Adafruit sells it for these uses)
- **when_to_use**: Use it to join two shafts end to end where you need the output to follow the motor exactly, with no slack, but you can't guarantee perfect alignment: a stepper motor driving a leadscrew or threaded rod, a motor turning a potentiometer or encoder, a small robot joint, a turntable or a camera slider. It is compact, needs no lubrication or maintenance, has no parts to wear or rattle, and copes with the small angle and position errors that come from printed or home-made frames. Choose a multi-beam or stainless version when you need more stiffness or torque, or more sideways offset.
- **when_not_to_use**: Avoid it for high torque, shock loads or drives that hit hard stops or jam (use a jaw coupling with a rubber spider, which absorbs shocks, or a rigid or keyed coupling on well-aligned shafts). Avoid single-beam types where the shafts are noticeably offset sideways (use an Oldham coupling, which is designed for offset, or a multi-beam type). For large angles use a universal joint or CV joint; to go round bends use a flexible drive shaft. Don't let it carry the weight of a machine part along its length, such as a heavy 3D-printer gantry hanging on the leadscrew, because it acts as a spring: support that load with a bearing or nut, or use a coupler with a solid core or a stiffer (stainless or multi-beam) type. It also can't fix a bent leadscrew or badly misaligned motor; fix the alignment first.
- **environment_limits**: Heat: aluminium beam couplings are rated to about 93 °C (200 °F) and stainless steel to about 316 °C (600 °F) (MW Components; ABSSAC). Printed PLA softens above about 60 °C, PETG is good to about 80 °C (Prusa), so keep printed couplers away from hot motors and enclosures. Wet or corrosive places and food or medical machines: choose stainless steel, titanium or acetal (Boehm, Machine Design). Fatigue: a metal beam coupling has a very long fatigue life inside its ratings (Boehm), but running beyond its misalignment or torque limits makes it crack. *(unverified parts omitted)*
- **safety_notes**: If it breaks from fatigue or overload the drive is suddenly disconnected, so anything the leadscrew was holding up (a Z gantry, a lift) could drop if it is not held another way. Otherwise none known. *(unverified parts omitted)*
- **common_failures**: 1) Cracking and breaking of the thin spiral beam, often near the middle, from torque spikes (jams, crashes into end stops, emergency stops) or from running beyond its misalignment rating (Power Transmission World; Ruland (brand) video 'Why Are My Beam Couplings Breaking When They Come To A Hard Stop?'). Avoid it by choosing a torque rating with margin (divide the dynamic rating by 2, or by 4 if the drive reverses, per ABSSAC) and aligning the shafts reasonably well. 2) Single-beam coupling failing early under sideways offset, because the beam bends two ways at once (Hewitson, Machine Design): use a multi-beam type or an Oldham coupling. 4) Uneven layers or 'Z banding' on a 3D printer because the springy coupler squashes under the weight of the carriage: a stainless (stiffer) coupler stopped this for one SoliForum user, and LoboCNC's printable design adds a solid core; some RepRap forum users also report that heavy gantries sitting on the coupler make wobble worse. 5) Extra wear on motor and leadscrew bearings, because the coupling pushes back when bent (Boehm, Machine Design): keep misalignment small. 6) Printed couplers splitting along layer lines or softening in heat: use PETG or nylon, thicker beams and metal screws. *(unverified parts omitted)*
- **related**: 
  - Jaw coupling (spider coupling): two claw hubs with a rubber spider between them; absorbs shocks and takes more torque, but the rubber insert gives a little and it is intolerant of end movement (Hewitson)
  - Oldham coupling: three discs with tongue-and-groove slots at right angles; the best simple choice for sideways offset (about 0.6-2.5 mm or more) but allows under 0.5 degrees of angle and is limited to about 4,000 rpm (Hewitson)
  - Bellows coupling: a thin metal bellows instead of a spiral; one of the stiffest in twist, with about 1-2 degrees of angle (Hewitson)
  - Disc coupling: thin flexible metal discs; very stiff in twist and up to about 5 degrees with multiple discs, but delicate (Hewitson)
  - Rigid coupling (sleeve or clamp coupling): no flexibility at all, so it needs the shafts almost perfectly aligned (Wikipedia 'Coupling')
  - Parallel-cut (slotted) beam coupling: short straight slits instead of a long spiral; stiffer, faster and stronger but less tolerant of misalignment (McMaster-Carr)
  - Helical-beam universal joint: the same spiral idea with many coils so it can bend up to 90 degrees (Boehm)
  - Universal joint (Hooke's joint): passes rotation through large angles, but has pins that wear and a single joint makes the output speed wobble
  - Flexible drive shaft (rotating cable): carries rotation round real bends, but twists noticeably under load
  - Flexure hinges and other compliant mechanisms: the same principle of getting movement by bending one piece of material instead of using sliding parts

### Pictures, videos and models

- **links**: 
  - [Beam Coupling - Helical Standard.jpg (Wikimedia Commons, by Helical Products)](https://commons.wikimedia.org/wiki/File:Beam_Coupling_-_Helical_Standard.jpg): Photo of typical one-piece helical beam couplings with the spiral slot clearly visible *(licence: GNU Free Documentation License 1.2 or later)*
  - [Helical U-Joint (Beam Style Coupling) - Angular Misalignment.jpg (Wikimedia Commons, by Helical Products)](https://commons.wikimedia.org/wiki/File:Helical_U-Joint_(Beam_Style_Coupling)_-_Angular_Misalignment.jpg): Helical beam parts bent at an angle, showing that more coils allow more angular misalignment *(licence: GNU Free Documentation License 1.2 or later)*
  - [Abssac Heli-Cal beam shaft coupling animation (ABSSACLTD, YouTube)](https://www.youtube.com/watch?v=u_fWc7U51Gk): Animation of a helical beam coupling flexing as it turns *(licence: link only (standard YouTube licence))*
  - [Why Are My Beam Couplings Breaking When They Come To A Hard Stop? (Ruland Manufacturing (brand), YouTube)](https://www.youtube.com/watch?v=awbFi-0ffgk): Manufacturer's explanation of beam coupling failure from sudden stops (video content not viewed by the agent; title and channel confirmed) *(licence: link only (standard YouTube licence))*
  - [Aluminum Flex Shaft Coupler - 5mm to 8mm (Adafruit product page)](https://www.adafruit.com/product/1176): Photos of the typical 3D-printer and CNC spiral coupler with its set screws, and its dimensions *(licence: link only)*
- **make_it_yourself**: 
  - [Con-Helical Flexible Coupler (LoboCNC, Printables)](https://www.printables.com/model/132287-con-helical-flexible-coupler): Printable 5 mm to 8 mm helical coupler with a conical low-angle slot that prints without supports and a solid core that stops it compressing under a Z carriage; versions with M3 nut slots or plain holes for set screws (details read via the Printables API) *(licence: CC BY-SA)*
  - [Flexible coupling for Anycubic i3 mega z-axis (tierra, Printables)](https://www.printables.com/model/82357-flexible-coupling-for-anycubic-i3-mega-z-axis): Printed spring-type 5 mm to 8 mm coupler that replaced rigid couplers to reduce Z wobble; flexible in bending, stiff in twist; uses M4 nuts and screws; printed upright, 100% infill, no supports (details read via the Printables API) *(licence: CC BY-NC-SA)*
  - [HUANGYAN920 Mechanical: 'FLEX-COUPLING' (柔性联轴器机构, no. 94) interactive animation](https://huangyan920.github.io/Mechanical/): Interactive, adjustable animation of a generic flexible coupling joining two slightly misaligned shafts (not specifically a beam coupling) *(licence: MIT)* *(unverified parts omitted)*
- **diagram_idea**: A side view of two shafts that are slightly tilted and offset, joined by a tube with a spiral slot shown bending smoothly between them; arrows show the tube bending easily but the twist passing straight through, with an inset comparing one long spiral (single-beam) with two short overlapped spirals (multi-beam).
- **sources**: 
  - https://en.wikipedia.org/wiki/Beam_coupling
  - https://en.wikipedia.org/wiki/Coupling
  - https://commons.wikimedia.org/wiki/Category:Beam_couplings
  - https://commons.wikimedia.org/wiki/File:Beam_Coupling_-_Helical_Standard.jpg
  - https://commons.wikimedia.org/wiki/File:Helical_U-Joint_(Beam_Style_Coupling)_-_Angular_Misalignment.jpg
  - https://www.machinedesign.com/automation-iiot/article/21827627/what-you-need-to-know-about-one-piece-helix-curved-beams
  - https://www.machinedesign.com/motors-drives/article/21827544/sorting-out-servo-couplings
  - https://www.mwcomponents.com/beam-couplings-helical-couplings
  - https://www.abssac.co.uk/catalogue/v/helical-beam-shaft-couplings/Helical+Beam+Shaft+Coupling/22/
  - https://www.isccompanies.com/ruland-beam-couplings-designed-couple-stepper-servo-motors-encoders/
  - https://www.powertransmissionworld.com/eight-best-ways-to-wreck-your-coupling-driven-system/
  - https://www.mcmaster.com/products/beam-couplings/
  - https://www.adafruit.com/product/1176
  - http://www.soliforum.com/topic/1910/zbanding-reduction-using-helical-beam-coupling
  - https://reprap.org/forum/read.php?1,305126
  - https://www.electronicsweekly.com/blogs/engineer-in-wonderland/3d-printing-z-wobble-2019-01/
  - https://www.youtube.com/watch?v=u_fWc7U51Gk
  - https://www.youtube.com/watch?v=awbFi-0ffgk
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/132287-con-helical-flexible-coupler
  - https://www.printables.com/model/82357-flexible-coupling-for-anycubic-i3-mega-z-axis
  - https://raw.githubusercontent.com/JoanPeturPetersen/flexible-helical-coupling/master/README.md
  - https://www.thingiverse.com/thing:44078
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/master/README.md
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, make_it_yourself, making_tips_3d_printing, processes, reuse_cycles, safety_notes, tools_needed

## 80 Universal joint (Hooke's joint, Cardan joint)

*clutches & couplings.* A cross-shaped piece between two forks that lets one shaft drive another at an angle

### What it is

- **plain_name**: A joint with a small plus-shaped cross held between two forks, so one spinning shaft can turn another shaft that points off at an angle, like the joint at each end of a car's driveshaft
- **term**: Universal joint (Cardan joint, Hooke's joint)
- **aliases**: 
  - U-joint
  - Cardan joint / cardan (after Gerolamo Cardano)
  - Hooke's joint / Hooke joint (after Robert Hooke)
  - Spicer joint / Hardy Spicer joint (names taken from Spicer (brand) and Hardy Spicer (brand))
  - cross and yoke joint / cross and bearing joint (the cross is also called the spider; its four arms are trunnions)
  - pin and block universal joint (small industrial type with a square block and two pins instead of a cross)
  - needle-bearing universal joint
  - double Cardan joint / double universal joint (two joints in one, for constant speed)
  - cardan shaft / propeller shaft / prop shaft / driveshaft (a shaft with a universal joint at each end)
  - universal joint socket adapter (the wobbly joint in a socket-wrench set)
  - Kardangelenk / Kreuzgelenk (German); junta cardan (Spanish)
- **family**: clutches & couplings
- **other_families**: hinges & pivots
- **one_liner**: Two forks joined by a cross-shaped piece that pivots both ways, so turning one shaft turns another shaft set at an angle to it, even while that angle changes.
- **complexity**: A few parts: two forks (yokes), each fixed to one shaft; one cross (spider) with four short arms (trunnions); and four bearings or bushes where the cross arms sit in the forks (needle-roller bearing cups held by clips in cars, or plain pins). The small industrial pin-and-block type uses a square centre block and two cross pins instead. A double joint adds a second cross and a centre yoke.
- **how_it_works**: Each fork holds opposite arms of the cross, and the two forks sit at right angles to each other, so the joint is really two hinges placed at 90 degrees to each other (Wikipedia). One hinge lets the shafts tilt up and down, the other lets them tilt side to side, so the output shaft can point in any direction within its range, but it cannot twist relative to the input: turning the input fork turns the cross, which turns the output fork. The catch is that at any angle the output does not turn at a steady speed: it speeds up and slows down twice every turn, and the bigger the angle the bigger the wobble. Putting two joints in a row with equal angles and the forks on the middle shaft lined up cancels the wobble (a double Cardan arrangement).

### Finder attributes

- **job**: 
  - join and hold: connects two shafts so they turn together even though they point in different directions
  - let it move (turn, slide or bend): lets the angle between the shafts change while running, e.g. as a car's suspension moves
- **motion**: multiple: passes continuous rotation while the shafts can also tilt relative to each other; common small pin-and-block joints run up to about 25 degrees (Wakefield Thermal/Curtis (brand)), catalogue joints of different types range from 10 degrees up to 136 degrees for special geared types (McMaster-Carr), and for smooth running the angle should be kept small (a few degrees at high speed)
- **degrees_of_freedom**: 2: the two shafts can tilt relative to each other about two perpendicular pins (like a gimbal), but cannot twist relative to each other, which is why rotation is passed on (a spherical joint with a pin)
- **special_behaviour**: 
  - none: its job is simply to pass rotation round an angle. Beginners should know its quirk: a single joint at an angle makes the output speed up and slow down twice per turn (non-constant velocity), which causes vibration; pairs of joints set up correctly cancel this (Wikipedia)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the forks, cross and pins interlock, so turning force passes by parts pushing on each other
  - not a holding joint (it moves or passes on motion): it is a moving joint; the fork hubs are fixed to their shafts separately (set screws, pins, keys, splines or welding)
- **input_output**: Continuous rotation -> continuous rotation at the same average speed (1:1), with the shafts meeting at an angle (intersecting shafts). With a bend angle β the output speed swings between (input speed x cos β) and (input speed / cos β) twice per turn (from Wikipedia's equation): about ±1.5% at 10 degrees, about -6% to +6.4% at 20 degrees and about -13% to +15.5% at 30 degrees. Two joints with equal angles and the forks on the middle shaft lined up give a steady output. Back-drivable: yes, it passes turning force either way. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **reuse_cycles**: many times: the shaft fixings can be undone and redone repeatedly; the joint itself is a wearing part that runs until its bearings wear out (vehicle joints are typically rated for about 3,000 hours, per The Ranger Station)
- **tools_needed**: Printed joints need small metal pins, screws or wire, and sometimes ball bearings. *(unverified parts omitted)*
- **seal**: none for plain joints; dust-resistant when fitted with a rubber boot or sealed bearings: boots on pin-and-block joints keep lubricant in and dirt out (Wakefield Thermal), and sealed needle-bearing joints are sold (McMaster-Carr)
- **load**: Medium to heavy: strong in twist (they carry the full engine torque in car driveshafts and tractor power take-off shafts, and McMaster-Carr lists joints rated from under 1,000 in·lbf (113 N·m) up to over 30,000 in·lbf (about 3,400 N·m)). Capacity and life fall as the angle, speed or load rises: each doubling of angle, speed or load roughly halves the joint's life (The Ranger Station). The pins and their bearings are the weak points. *(unverified parts omitted)*
- **adjustable**: no settings to adjust, but the angle is free to change while it runs; with two joints and a sliding (splined or telescoping) middle shaft it also accepts changes in length and sideways offset (Wikipedia 'Drive shaft'; Wakefield Thermal)
- **play_and_precision**: Even with no play, a single joint at an angle is not an exact copy of the input angle: the output leads and lags by up to about 0.4 degrees at a 10-degree bend, 1.8 degrees at 20 degrees and 4.1 degrees at 30 degrees (worked from Wikipedia's equation tan γ1 = cos β tan γ2). Misalignment: tolerates large angles (its purpose); a single joint accepts no sideways offset or change in length, which needs two joints and a sliding shaft. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: each fork hub fits over (or into) a shaft end and is fixed there
- **materials**: Steel (high-grade alloy steel is standard), with stainless steel, bronze and powdered-metal options (Wakefield Thermal); acetal plastic, zinc alloy, iron and neoprene (boots) also listed by McMaster-Carr. Toy and model versions are plastic (LEGO Technic (brand) has one). Printed versions work in PLA, PETG or nylon, ideally with metal pins or small ball bearings.
- **maker_difficulty**: easy to moderate: small steel universal joints are cheap to buy, and printed ones are simple two-fork-and-cross designs; the hard part is making the pins and fork arms strong enough, so use metal pins, screws or bearings for anything carrying real torque

### Making it

- **processes**: 
  - 3D print (FDM): very common for models, toys, light robot drives and tool accessories
  - CNC: machined steel forks, cross or block for strong joints
  - off-the-shelf part: single and double universal joints, precision miniature joints, automotive cross-and-bearing kits, universal driveshafts *(unverified parts omitted)*
- **print_in_place**: yes: several designs print fully assembled and working, e.g. eversoRAD's 'U-Joint Bit Holder (Print-in-Place)' (PLA, 0.10 mm layers, 4 perimeters, brim) and Triple G Workshop's 'Universal Joint Chain - Print in Place' (joints must be gently loosened after printing). Joints meant to carry real torque are usually printed as separate forks and cross and assembled with metal pins or bearings
- **making_tips_3d_printing**: 1) Use metal where the load goes: the cross arms and pins carry all the torque and a printed pin shears along its layer lines; OEP's tiny joint for 3 mm axles uses bent 1 mm steel wire as pins, John Beale's joint uses M3 screws through four small ball bearings (1/8 x 3/8 in) in the centre ball, and brandido2002's 'Fully printable U-Joint' uses four 608 skateboard bearings. Schaffer.la notes that at larger sizes the holes need support in his orientation, and a brim is needed. 3) Clearance: leave about 0.5 mm between interlocking FDM parts (Hubs; resin about 0.2 mm); print-in-place joints must be freed gently after printing. 4) Strength settings: brandido2002 recommends at least 5 walls and 50% infill if the joint will be loaded; Schaffer.la printed in PLA but says PETG would be more robust. 5) Material: PLA is brittle and softens above about 60 °C; PETG is tougher and handles up to about 80 °C (Prusa). 6) Fix the forks to shafts with metal: set screws into captive nuts or heat-set inserts, or a hex or D-shaped bore that matches the shaft. 7) Keep angles modest and, if the output speed wobble matters, use two joints with equal angles and the middle forks lined up (see rules of thumb). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'single universal joint' and 'double universal joint' (with bore sizes, e.g. 3/32 in to 1 13/16 in, or 10-25 mm metric, per McMaster-Carr), 'pin and block universal joint', 'needle bearing universal joint', 'precision universal joint', 'clamp-on universal joint', 'universal joint boot' (neoprene), 'U-joint cross and bearing kit' (automotive), 'telescoping' or 'adjustable-length' double universal joints, 'constant-velocity universal joint', 'socket universal joint' (for socket wrenches), RC-car 'universal driveshafts', and LEGO Technic (brand) universal joints for models.
- **rules_of_thumb**: 
  - Output speed swings between cos β and 1/cos β times the input speed, twice per turn, where β is the bend angle: about ±1.5% at 10 degrees, about -13% to +15.5% at 30 degrees (worked from the equation in Wikipedia 'Universal joint').
  - Two joints give steady output speed only when the input and output shafts make equal angles with the middle shaft and the two joints are 90 degrees out of phase, i.e. the forks on the middle shaft are lined up in the same plane (Wikipedia 'Universal joint'; Tom Wood's Custom Drive Shafts on phasing).
  - For vehicle driveshafts: keep each joint's operating angle at least 0.5 degrees and no more than 3 degrees for vibration-free running, and the angles at the two ends equal within 1 degree (Spicer (brand) driveline operating angle calculator).
  - Maximum normal operating angle falls as speed rises: about 3.2 degrees at 5,000 rpm, 5.8 degrees at 3,000 rpm and 11.5 degrees at 1,500 rpm (Spicer driveline operating angle calculator).
  - Each doubling of operating angle, speed or load roughly halves the joint's life; as a rule of thumb a driveshaft angle should not exceed about 22 degrees (The Ranger Station, an off-road enthusiast site).
  - Standard pin-and-block joints: up to 25 degrees and 1,750 rpm; heavier versions go higher (Wakefield Thermal, Curtis (brand) universal joints).
  - HUANGYAN920's mechanism library gives an allowable angle of 25 degrees or less for a single universal joint.
  - Catalogue joints span maximum operating angles of 10-136 degrees and speed limits of 1,000-6,000 rpm depending on type (McMaster-Carr universal joints page).
  - Clearance between interlocking printed parts: about 0.5 mm for FDM and 0.2 mm for resin (SLA) (Hubs).

### When to use it

- **everyday_examples**: 
  - The driveshaft (propeller shaft) under a rear-wheel-drive car or truck, which has a universal joint at each end (Wikipedia 'Drive shaft')
  - The steering column in almost every modern car, whose lower section has universal joints so the steering wheel can drive the steering gear at an angle (Wikipedia 'Steering column')
  - A tractor's power take-off (PTO) shaft that drives mowers and other machinery, with a universal joint at each end under a bell-shaped guard (ag-safety.extension.org)
  - The universal joint adapter in a socket-wrench set, which lets you turn a bolt from an angle
- **when_to_use**: Use it when a motor or handle has to turn a shaft that points in a different direction, or when the angle between them changes as something moves: driving the wheels of a model car or robot through suspension, turning a mechanism from a hand crank or knob placed at an awkward angle, linking a motor to a camera pan head or a steering linkage, or joining two shafts that are well out of line (using two joints and a middle shaft). It is simple, strong for its size, easy to buy or print, and handles far larger angles than flexible couplings.
- **when_not_to_use**: Avoid a single joint at a large angle where smooth, steady speed or exact position matters (for example a camera slider or a precision positioning axis), because the output speeds up and slows down twice per turn: use two joints phased correctly, a constant-velocity (CV) joint, or bevel gears. For tiny misalignments between in-line shafts use a flexible coupling (beam, jaw or Oldham) instead, which is cheaper, simpler and has no play. For high speeds at large angles, or for very large angles, use a CV joint or a flexible drive shaft. Don't use it where exposed spinning joints could catch people unless you can guard it.
- **environment_limits**: Lubrication and dirt: the pins or bearings need grease or oil, and boots or sealed bearings keep dirt out; unprotected joints in dirty or wet places wear quickly (Wakefield Thermal; McMaster-Carr lists corrosion-resistant and sealed types for harsh places). Heat: printed PLA softens above about 60 °C and PETG above about 80 °C (Prusa). Vibration: running at too large an angle or out of phase causes vibration that shortens the joint's life (Spicer; The Ranger Station). Wear gradually adds play (Wakefield Thermal). No particular UV or cold limits beyond those of the material.
- **safety_notes**: Spinning universal joints are serious entanglement hazards: on tractor PTO shafts turning at 540 or 1,000 rpm, clothing or a limb can be wrapped round the shaft several times before a person can react, and the uneven shape of the joint is what snags; always keep driveline guards and bell-shaped shields in place (ag-safety.extension.org). Fingers can be pinched between the forks and cross when the joint bends. *(unverified parts omitted)*
- **common_failures**: 1) Worn cross bearings or pins, giving clunks when drive starts or stops and vibration from under a vehicle (Wikipedia 'Drive shaft'; The Ranger Station): keep it greased and replace worn joints. 2) Vibration and short life from running at too large an angle or too high a speed, or with unequal angles at the two ends of a shaft (Spicer; The Ranger Station): keep angles small and equal. 3) Vibration twice per turn from a two-joint shaft that is out of phase (the middle forks not lined up) (Tom Wood's Custom Drive Shafts): assemble the slip joint with the forks in line. 4) Retaining clips failing so the bearing caps come out of the forks (The Ranger Station). 6) Printed joints: the cross arms or pins shear, the fork arms split along layer lines, or print-in-place joints fuse because the gap was too small; use metal pins, lay the forks flat and leave enough clearance. 7) Set screws loosening on the shaft: tighten onto a flat, or use pins or clamp hubs. *(unverified parts omitted)*
- **related**: 
  - Constant-velocity (CV) joint: balls running in curved tracks give steady output speed at large angles, but it is more complex and usually needs a rubber boot and grease
  - Double Cardan joint: two universal joints back to back with a shared centre yoke, giving near-constant speed (Wikipedia)
  - Thompson coupling: a refined double Cardan joint with slightly better efficiency but much more complexity (Wikipedia)
  - Beam coupling and other flexible couplings (jaw, Oldham, bellows): for small misalignment between nearly in-line shafts, with no play, but they can't handle large angles
  - Flexible drive shaft (rotating cable): carries rotation round real bends, but twists under load
  - Bevel gears: turn a shaft through a fixed angle (usually 90 degrees) at a steady speed, and can change speed too, but the angle can't vary
  - Schmidt coupling: joins parallel shafts that are well offset sideways, at constant speed
  - Ball-and-socket joint: also moves in several directions, but it doesn't pass turning force on (it is a pivot, not a drive)
  - Gimbal: the same two-hinges-at-right-angles idea used to hold something level rather than to drive a shaft (Wikipedia notes the gimbal as its ancestor)
  - Spline shaft (sliding spline): often paired with universal joints so a driveshaft can change length

### Pictures, videos and models

- **links**: 
  - [Universal joint.gif (Wikimedia Commons, by Van helsing)](https://commons.wikimedia.org/wiki/File:Universal_joint.gif): 3D animation of a single universal joint turning, showing the forks and cross *(licence: GFDL 1.2 or later, CC BY-SA 3.0, or CC BY 2.5 (choose one))*
  - [Double Cardan Joint (animated).gif (Wikimedia Commons, by Catsquisher)](https://commons.wikimedia.org/wiki/File:Double_Cardan_Joint_(animated).gif): Animation of a double Cardan joint, two universal joints back to back that give steady output speed *(licence: Public domain)*
  - [507 Mechanical Movements, 50 and 51: 'Two kinds of universal joints' (Brown, 1868)](https://507movements.com/mm_051.html): Historic drawing, with an animated version, of two kinds of universal joint *(licence: book public domain; website animation link only)*
  - [HUANGYAN920 Mechanical: 'UNIVERSAL JOINT' (万向联轴节, no. 08) and 'DOUBLE-CARDAN' (双万向节机构, no. 92)](https://huangyan920.github.io/Mechanical/): Interactive animations of a single and a double universal joint *(licence: MIT)*
- **make_it_yourself**: 
  - [Educational Model of Cardan Universal Joint (osamutake, Printables)](https://www.printables.com/model/1458401-educational-model-of-cardan-universal-joint): Printable teaching model on an 80 x 80 mm base that shows how the output of a single Cardan joint speeds up and slows down (details read via the Printables API) *(licence: CC BY)*
  - [Educational Model of Double Cardan Universal Joint (osamutake, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1498409-educational-model-of-double-cardan-universal-joint): Companion teaching model showing how two mirrored Cardan joints give a steady output speed *(licence: CC BY)*
  - [Fully printable U-Joint (brandido2002, Printables)](https://www.printables.com/model/559830-fully-printable-u-joint): Printed universal joint that runs on four 608 bearings; the designer suggests at least 5 walls and 50% infill for use under load (details read via the Printables API) *(licence: CC BY-NC)*
  - [U-Joint Bit Holder (Print-in-Place) (eversoRAD, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1222842-u-joint-bit-holder-print-in-place): Hex-bit holder with a universal joint whose three moving parts print already assembled (PLA, 0.10 mm layers, 4 perimeters, brim) *(licence: CC BY)*
  - [U Joint (Parametric, w/FreeCAD file) (Schaffer.la, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/615805-u-joint-parametric-wfreecad-file): Parametric universal joint driven by a FreeCAD spreadsheet: set the width of the cross and the rest scales *(licence: CC BY-NC-SA)*
- **diagram_idea**: Two shafts meeting at an angle, each ending in a fork, with a plus-shaped cross between them; colour one pair of cross arms to show the up-down hinge and the other for the side-to-side hinge, and add a small graph of output speed rising and falling twice per turn beside a second, phased joint that flattens it.
- **sources**: 
  - https://en.wikipedia.org/wiki/Universal_joint
  - https://en.wikipedia.org/wiki/Drive_shaft
  - https://en.wikipedia.org/wiki/Steering_column
  - https://commons.wikimedia.org/wiki/Category:Universal_joints
  - https://commons.wikimedia.org/wiki/Category:Animations_of_universal_joints
  - https://commons.wikimedia.org/wiki/File:Universal_joint.gif
  - https://commons.wikimedia.org/wiki/File:Double_Cardan_Joint_(animated).gif
  - https://507movements.com/mm_051.html
  - https://mm2-nitk.vlabs.ac.in/exp/universal-joint/theory.html
  - https://spicerparts.com/calculators/driveline-operating-angle-calculator
  - https://www.therangerstation.com/tech/all-about-universal-joints/
  - https://4xshaft.com/blogs/faq/driveshaft-in-phase
  - https://wakefieldthermal.com/industrial-solutions/universal-joints/
  - https://www.mcmaster.com/products/universal-joints/
  - https://ag-safety.extension.org/power-take-off-safety/
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/master/README.md
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1458401-educational-model-of-cardan-universal-joint
  - https://www.printables.com/model/559830-fully-printable-u-joint
  - https://interestingengineering.com/videos/3d-print-this-mesmerizingly-smooth-universal-joint-with-mini-bearings
  - https://youmagine.com/designs/universal-joint
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Other info

- **Fields with unverified parts:** common_failures, input_output, load, making_tips_3d_printing, play_and_precision, processes, removability, safety_notes, tools_needed

## 81 Dog clutch (claw clutch)

*clutches & couplings.* Two parts with interlocking teeth or lugs that slide together to lock drive and apart to disconnect it, with no slipping

### What it is

- **plain_name**: Two parts with chunky teeth (lugs) on their faces: slide one along the shaft until its teeth drop into the gaps in the other and they lock and turn together; slide it back and the drive is disconnected. It never slips, but it should only be engaged when both parts are stopped or turning at nearly the same speed
- **term**: Dog clutch (jaw clutch, positive clutch)
- **aliases**: 
  - claw clutch / claw coupling
  - jaw clutch; square-jaw clutch (both directions) and spiral-jaw clutch (sloping teeth, one direction)
  - positive clutch / positive-engagement clutch (Wikipedia)
  - dog ring, clutch dog, dog gear (Wikipedia); 'dogs' are the teeth or lugs
  - dog box / dog-engagement gearbox (racing gearbox that uses them without synchronisers)
  - dog shifter / dog-shifting gearbox (FIRST Robotics (FRC) term)
  - sliding clutch (Sturmey-Archer (brand) hub-gear term)
  - driving ring and changeover catch (LEGO Technic (brand) terms)
  - clutch dog (outboard motors and winch free-spool clutches)
  - static dog clutch (industrial claw coupling engaged only at rest)
  - Klauenkupplung (German); sprzęgło kłowe (Polish)
- **family**: clutches & couplings
- **other_families**: gear trains, gearboxes & transmissions, one-way & ratchet
- **one_liner**: A clutch that connects and disconnects a drive by sliding a toothed ring into or out of mesh with matching teeth or slots, giving a solid, no-slip connection when engaged.
- **complexity**: A few parts: a fixed toothed half (teeth or lugs on the face of a gear, collar or hub), a sliding toothed half (dog ring or collar) that turns with its shaft but can slide along it on a splined, hex or keyed section, a shift fork or lever riding in a groove round the sliding half, and usually a spring or detent that holds it engaged, in neutral, or disengaged.
- **how_it_works**: One half is locked to its shaft so it must turn with it, but it can slide along the shaft; the other half (often a gear spinning freely on the same shaft) has matching teeth or slots on its face. Push the sliding half along with a fork or lever and its teeth drop into the gaps, so the two lock together by shape and turn at exactly the same speed with no slipping (Wikipedia). Pull it back and the gear spins freely again. Because the teeth can't slip, engaging while the parts turn at different speeds causes a bang (shock), so it is engaged when stopped, at low speed, or after the speeds have been matched.

### Finder attributes

- **job**: 
  - join and hold: when engaged it locks a gear to its shaft, or two shafts together, so they turn as one
  - lock, and release by hand: a lever or fork connects and disconnects the drive, e.g. a winch's free-spool lever or a boat's forward-neutral-reverse control
  - change speed or turning force: in constant-mesh gearboxes it selects which gear pair carries the drive (motorcycles, racing cars, robot two-speed gearboxes, bicycle hub gears)
- **motion**: rotate+slide: the sliding half moves a short distance along the shaft to engage or disengage (about the tooth height plus a small gap), and once engaged the whole thing rotates continuously
- **degrees_of_freedom**: Engaged: 0 between the two halves, apart from a little rotational play (backlash) between the teeth. Disengaged: 1, the two halves turn independently. The sliding half also has 1 freedom along the shaft for shifting.
- **special_behaviour**: 
  - quick-release: the drive can be connected or disconnected in a moment with a lever or fork, with no tools
  - one-way (spiral-jaw version only): with sloping teeth it drives in one direction and tends to ride over and freewheel in the other (Plant Engineering)
  - indexing (single-dog version): with only one dog it can only engage at one angle per turn, so it keeps two shafts in step, as in Gadget Builder's mini-lathe clutch that picks up a thread in the same place every time
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the teeth interlock and turning force passes by the tooth faces pushing on each other, so there is no slipping
  - spring force (a spring or springy part presses it in place): a spring, detent or the shift linkage keeps the sliding half engaged; square faces stay engaged with just a light spring force aided by friction (Jobst Brandt on Sturmey-Archer hubs)
- **input_output**: Rotation in -> the same rotation out (1:1) when engaged, nothing out when disengaged; the two halves are in line on one shaft or on two in-line shafts (a gear and its shaft, or shaft to shaft). Back-drivable: yes when engaged; square jaws drive both ways, spiral jaws only one way. *(unverified parts omitted)*
- **power**: passive (no power needed): the clutch itself is shifted by hand, by a lever, fork, cable or foot pedal. *(unverified parts omitted)*
- **removability**: tool-free quick release: engaging and disengaging the drive needs no tools; taking the parts off their shafts needs ordinary tools
- **reuse_cycles**: effectively unlimited: it is made to be engaged and disengaged over and over, as long as it is engaged at low or matched speeds; shifting at speed or half-engaging it rounds off the tooth edges (Sportsterpedia; SeaSierra)
- **tools_needed**: None to operate. To assemble: hex keys or spanners, circlip pliers for retaining rings, and a way to make the non-round shaft section (hex or splined shaft, or a key and keyway) the sliding half runs on.
- **seal**: none: it is open between the teeth; in gearboxes and outboard motors it runs inside a sealed, oil-filled case
- **load**: Heavy for its size in twist, because the teeth carry the load by shape rather than friction (Wikipedia; Plant Engineering notes toothed clutches are compact for their torque); industrial static claw couplings are made from 0.18 to 206 kN·m (Industrial Clutch Parts). Weak against shock: engaging at a speed difference hammers the teeth. The sliding half must be held in place along the shaft, because worn, rounded or sloping tooth faces push it out of mesh under load (Sportsterpedia; Brandt).
- **adjustable**: no: engagement is either in or out; the shift linkage (cable, fork or lever) often needs adjusting so the teeth engage fully and don't hang on their tips (Sturmey-Archer hubs; Sportsterpedia)
- **play_and_precision**: Small to noticeable play: the dogs are usually narrower than the gaps they drop into, and that deliberate play (backlash) is what lets them find their gaps and engage while the parts turn at slightly different speeds (Technicopedia on the LEGO Technic driving ring; MathWorks Dog Clutch block). Precision claw couplings are made with zero backlash, but then need the shafts perfectly aligned and must be engaged at rest (Industrial Clutch Parts). Position repeats only to within one tooth: n dogs give n possible engagement angles, and a single dog gives just one. Misalignment tolerance: low; the halves must be on the same axis for smooth engagement.
- **access_needed**: end of a tube or shaft: the parts fit onto shafts (the sliding half on a splined, hex or keyed section); in use, only the shift lever, fork or cable needs to be reached
- **materials**: Hardened steel in vehicle, boat and machine gearboxes and industrial claw couplings; plastic in LEGO Technic and toy or model gearboxes; printed PLA+, PETG or nylon in maker models and light robot drives (e.g. Bootjevaarder's printed gearboxes in PLA+).
- **maker_difficulty**: moderate: the toothed parts are easy to print or machine, but you also need a sliding fit on a non-round shaft, a fork or lever, a detent to hold positions, and good alignment, and you must only shift it when nearly stopped

### Making it

- **processes**: 
  - 3D print (FDM): common in model gearboxes, jaw-clutch demonstrators and light robot drives
  - CNC: milled or machined steel dogs for strong clutches
  - off-the-shelf part: jaw clutches, claw couplings, gearbox dog rings, outboard and winch clutch dogs, LEGO Technic driving rings, FRC dog-shifting gearboxes *(unverified parts omitted)*
- **print_in_place**: no: the sliding half and the toothed half must be free to slide apart, so they are printed separately and assembled on a shaft
- **making_tips_3d_printing**: 2) Make the driving faces square or very slightly undercut (tapered so the teeth pull deeper into mesh under load); sloping or rounded driving faces push the halves apart, which is how worn motorcycle and bicycle-hub clutches jump out of gear (Brandt; HP Academy; Sportsterpedia). A small chamfer on the tooth tips helps them find each other, but keep it small: a modelling study found bigger chamfers made successful engagement less likely (Aljawabrah and Lovas 2023). 4) Sliding fit: run the sliding half on a hex or keyed metal shaft with about 0.5 mm clearance for FDM (Hubs); VGallo217 notes some sanding may be needed so a keyed coupling slides freely. Print on a smooth plate and avoid 'elephant's foot' (a squashed, wider first layer), which stops sliding parts moving (Bootjevaarder). 5) Hold positions: add a spring or ball detent, or a spring-loaded fork, so the ring stays engaged or in neutral; always design a neutral between two gears so both can never be locked at once (Chief Delphi). 6) Support the shafts well (VGallo217's printed jaw clutch uses five 608 bearings) so the halves stay on the same axis. 7) Material: PETG or nylon is tougher than PLA, which breaks into shards on impact and softens above about 60 °C (Prusa). 8) Only shift when stopped or turning slowly; printed teeth chip quickly if engaged at speed. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'jaw clutch' ('square jaw clutch', 'spiral jaw clutch'), 'claw coupling' or 'static dog clutch' (Industrial Clutch Parts (brand)), 'multiple-tooth clutch', 'dog ring' and 'dog gear' (gearbox parts), 'clutch dog' (outboard motor and winch spares, e.g. PIERCE (brand) winch clutch dog), 'sliding clutch' (Sturmey-Archer (brand) hub spares), LEGO Technic (brand) 'driving ring' and 'changeover catch', FRC 'dog shifting gearbox' (AndyMark (brand) and others). Supporting parts: 'hex shaft', 'spline shaft', 'shift fork', 'ball detent' or 'spring plunger', retaining (circlip) rings, 608 bearings, pneumatic cylinders or servos for remote shifting.
- **rules_of_thumb**: 
  - Maximum speed difference for engaging while running: about 10 rpm for square-jaw clutches, up to 150 rpm for spiral-jaw clutches (which only drive one way and tend to freewheel the other), and up to 400 rpm for multiple-tooth clutches (Foszcz, 'Selection factors for clutches & brakes', Plant Engineering 1999).
  - Industrial static claw couplings are for occasional engagement with the shafts stopped, and the shafts must be accurately aligned for smooth engagement (Industrial Clutch Parts).
  - Always provide a neutral position between two gears so both can never be locked at once, which would jam and break the gearbox (Chief Delphi, 'Help me understand dog shifting').
  - Cut the driving faces square or with a slight back-taper (undercut) so torque pulls the dogs into mesh; a slight flare and matching slant would have stopped Sturmey-Archer hub clutches slipping out under load (Jobst Brandt, sheldonbrown.com; HP Academy on back-cut dogs).
  - Rounded dog corners reduce contact and the undercut's effect, letting gears hop out of mesh; worn dogs must be replaced (Sportsterpedia, 'Gear Dog Damage').
  - Gaps wider than the dogs (backlash) let the clutch engage while the halves turn at slightly different speeds (Technicopedia on the LEGO Technic driving ring; MathWorks Dog Clutch block).
  - A dog clutch under load can't be pulled out: the torque must be reduced briefly (throttle lift or ignition cut in racing gearboxes) so the dogs can slide apart (HP Academy).
  - A single dog engages at only one angle per turn, which keeps two shafts in step (Gadget Builder mini-lathe dog clutch).
  - Shift outboard motor clutch dogs only at idle; shifting at higher rpm grinds and rounds the teeth (SeaSierra).
  - In a modelling study of face dog clutches, larger tooth chamfer angles reduced the chance of a successful shift (Aljawabrah and Lovas, Design of Machines and Structures, 2023).

### When to use it

- **everyday_examples**: 
  - Motorcycle gearboxes, where dog rings lock the chosen gear to its shaft (Wikipedia; Honda CBR600RR teardown photos on Wikimedia Commons)
  - The forward-neutral-reverse gear of a boat's outboard motor or inboard engine, which makes the 'clunk' you hear when it engages (Wikipedia; SeaSierra)
  - A three-speed bicycle hub gear, where a cross-shaped sliding clutch selects the gear (Wikipedia; Sheldon Brown site)
  - The free-spool lever on a vehicle winch, which slides a clutch dog out so the cable can be pulled off by hand (PIERCE winch parts; Garlway)
- **when_to_use**: Use it when you want to connect or disconnect a drive, or choose between gears, and a solid, no-slip connection matters more than smooth engagement: a two-speed or multi-speed gearbox for a robot or model, forward-neutral-reverse on a small vehicle, a free-wheel or manual-override mode that disconnects a motor so a mechanism can be moved by hand, a winch or crank that can be disengaged, or a mechanism that must re-engage in exactly the same position (use a single dog). It is compact, strong for its size, simple, and doesn't wear from slipping the way friction clutches do.
- **when_not_to_use**: Avoid it when you need to engage while the parts are turning at different speeds or under load (use a friction clutch, which can slip gently while engaging, or a synchronised gearbox), when you want it to slip on overload to protect the mechanism (use a slip clutch, ball-detent torque limiter or shear pin), or when the drive must engage automatically (use a centrifugal clutch, or a one-way sprag or roller clutch). Don't rely on a disengaged dog clutch to hold anything: with it out, the motor and gears no longer hold the load, so a winch drum or robot arm can run back. For a permanent, play-free joint between shafts use a coupling or a Hirth joint instead.
- **environment_limits**: Metal clutches run best lubricated (in oil in gearboxes and outboard lower units); dirt and wear round off the teeth. Vibration and flexing can walk the halves out of mesh if the teeth are worn or slightly skewed, as Jobst Brandt found with shaft deflection in Sturmey-Archer hubs, so good tooth shape and a detent matter. Printed parts: PLA softens above about 60 °C and breaks into shards on impact, PETG handles up to about 80 °C and is tougher (Prusa); plastic teeth wear and deform faster than steel. No particular water, UV or cold limits beyond those of the material.
- **safety_notes**: Engaging a dog clutch connects the drive instantly, so machinery can start moving without warning; keep hands away from gears and moving parts when shifting. Disengaging it removes the braking effect of the gears: never use a winch's free-spool clutch to lower a load, because the drum can run away (Garlway). *(unverified parts omitted)*
- **common_failures**: 1) Rounded tooth corners from shifting at speed, slow or half-hearted shifting, or engaging with the throttle on, which then lets the clutch jump out of engagement under load (Sportsterpedia; SeaSierra): shift promptly, only at low or matched speed, and replace worn dogs. 2) Grinding or clashing when engaging at too high a speed (SeaSierra; Plant Engineering limits of 10 rpm for square jaws). 3) Teeth only half engaged, hanging on their tips, because the shift linkage is out of adjustment or a shift fork is worn or bent (Sportsterpedia; Sturmey-Archer hubs): adjust so it engages fully. 4) Slipping out under high torque because the tooth faces or pins are worn to a slant, skewed or deflected (Jobst Brandt): use square or undercut faces, stiff shafts and a detent. 5) Both gears engaged at once when there is no neutral, jamming the drive (Chief Delphi). 6) Won't engage because the shafts are misaligned (Industrial Clutch Parts) or, in printed parts, because the sliding half sticks from elephant's foot or a tight fit (Bootjevaarder; VGallo217). *(unverified parts omitted)*
- **related**: 
  - Friction clutch (plate or cone clutch): can engage gently at any speed and slips on overload, but can slip under heavy load and wears; a dog clutch never slips
  - Synchromesh (synchroniser): a small friction cone matches the speeds first so the dog teeth can then engage quietly; used in road-car gearboxes (Wikipedia)
  - Spiral-jaw clutch: a dog clutch with sloping teeth that engages at higher speed but drives in one direction only (Plant Engineering)
  - Jaw coupling (spider coupling): claw-shaped hubs that stay permanently meshed through a rubber spider; for joining shafts, not for switching drive on and off
  - Hirth joint: many fine radial teeth clamped by a screw, giving a play-free fixed joint or indexing; a dog clutch has fewer, chunkier teeth with gaps and play
  - Face ratchet (star ratchet): sawtooth face teeth held by a spring, so it drives one way and clicks over the other
  - Ball-detent torque limiter and slip clutch: deliberately let go when overloaded, which a dog clutch never does
  - Sprag clutch and roller clutch (one-way bearing): engage and disengage automatically depending on direction
  - Centrifugal clutch: engages automatically as speed rises
  - Spline shaft (sliding spline) and hex shaft: the shaft the sliding half of a dog clutch runs on
  - Half nut (split nut): another positive, lever-operated engagement, used to connect a lathe carriage to its leadscrew

### Pictures, videos and models

- **links**: 
  - [Claw coupling-tech diagram.png (Wikimedia Commons, by Jonasz)](https://commons.wikimedia.org/wiki/File:Claw_coupling-tech_diagram.png): Simple technical diagram of a claw (dog) clutch with interlocking claws *(licence: CC BY-SA 3.0 or GFDL 1.2 or later)*
  - [Dog Clutch.jpg (Wikimedia Commons, by Ael150)](https://commons.wikimedia.org/wiki/File:Dog_Clutch.jpg): Photo of a dog clutch used to engage and disengage four-wheel drive on a Baja SAE student car *(licence: CC0 1.0 (public domain dedication))*
  - [Honda CBR600RR teardown 2015-10-19 13.44.17.jpg (Wikimedia Commons, by Spheroidite)](https://commons.wikimedia.org/wiki/File:Honda_CBR600RR_teardown_2015-10-19_13.44.17.jpg): Motorcycle gearbox gears with their face dogs, from an engine teardown (used in Wikipedia's 'Dog clutch' article to show a disengaged dog clutch) *(licence: CC BY-SA 4.0)*
  - [Square Jaw Clutch Operation Animation | Claw Clutch | Solidworks (Solidworks Fun, YouTube)](https://www.youtube.com/watch?v=Jkyb5NiFdPY): CAD animation of a square-jaw clutch sliding into and out of engagement *(licence: link only (standard YouTube licence))*
  - [Dog Clutch || Claw clutch (Gear Institute Mechanical Engineering Videos, YouTube)](https://www.youtube.com/watch?v=6LlQX-yoFzk): Explainer video on how a dog (claw) clutch engages and disengages *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Working Jaw Clutch (VGallo217, Printables)](https://www.printables.com/model/177943-working-jaw-clutch): Mostly 3D-printed working jaw clutch demonstrator on a baseplate, with five press-fit 608 bearings and a keyed sliding coupling (details read via the Printables API) *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [Constant Mesh Two Speed Gearbox (Bootjevaarder, Printables)](https://printables.com/model/144943-constant-mesh-two-speed-gearbox): Printable two-speed-plus-neutral gearbox model with a sliding dog clutch on the main shaft, worked by a selector fork; printed in PLA+ at 0.15 mm layers (details read via the Printables API) *(licence: CC BY-NC-ND)*
  - [4 Speed "Constant Mesh" Manual Transmission. 100% 3D Printed! (MW-Mechanical, Printables)](https://www.printables.com/model/407245-4-speed-constant-mesh-manual-transmission-100-3d-p): Fully printed four-speed gearbox in which a ball-joint selector moves racks that engage dog clutch discs with the chosen gear (details read via the Printables API) *(licence: CC BY-NC)*
  - [Manual transmission - 6 speed (Dmitrii Tomin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/928009-manual-transmission-6-speed): Educational printed six-speed gearbox with dog-tooth parts, blocking rings and synchronisers, shift forks and a motor drive, with a PDF assembly guide *(licence: CC BY-SA)*
- **diagram_idea**: Side view of a shaft with a gear spinning freely on it and a toothed ring on a hex section beside it: first apart (gear idles), then the fork slides the ring over so its dogs drop into the gear's slots (gear locked to shaft), with close-ups comparing square, undercut and ramped tooth faces and arrows showing which way torque pushes the ring.
- **sources**: 
  - https://en.wikipedia.org/wiki/Dog_clutch
  - https://en.wikipedia.org/wiki/Clutch
  - https://commons.wikimedia.org/wiki/Category:Dog_clutches
  - https://commons.wikimedia.org/wiki/File:Claw_coupling-tech_diagram.png
  - https://commons.wikimedia.org/wiki/File:Dog_Clutch.jpg
  - https://commons.wikimedia.org/wiki/File:Honda_CBR600RR_teardown_2015-10-19_13.44.17.jpg
  - https://www.plantengineering.com/selection-factors-for-clutches-brakes/
  - https://roymech.org/Useful_Tables/Drive/Clutches.html
  - https://www.industrialclutch.com/icp-dog-clutch-mechanical-coupling.html
  - https://www.mathworks.com/help/sdl/ref/dogclutch.html
  - https://www.hpacademy.com/blog/tech-nugget-how-a-dog-engagement-gearbox-works/
  - https://www.hpacademy.com/blog/clutchless-shifting-dog-engagement-gearboxes-tech-nugget/
  - https://sportsterpedia.com/techtalk:ref:svcproc11l
  - https://www.sheldonbrown.com/brandt/sturmey-archer.html
  - https://www.technicopedia.com/fundamentals.html
  - https://gadgetbuilder.com/Dog_Clutch.html
  - https://www.chiefdelphi.com/t/help-me-understand-dog-shifting/65964
  - https://seasierra.com/blogs/outboard-101/outboard-shifting-problems-hard-to-shift-or-wont-engage
  - https://www.piercearrowinc.com/products/clutch-dog
  - https://garlway.com/faqs/how-does-a-winch-free-spool-work
  - https://ojs.uni-miskolc.hu/index.php/dms/article/view/3247
  - https://www.youtube.com/watch?v=Jkyb5NiFdPY
  - https://www.youtube.com/watch?v=6LlQX-yoFzk
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/177943-working-jaw-clutch
  - https://printables.com/model/144943-constant-mesh-two-speed-gearbox
  - https://www.printables.com/model/407245-4-speed-constant-mesh-manual-transmission-100-3d-p
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Other info

- **Fields with unverified parts:** common_failures, input_output, making_tips_3d_printing, power, processes, safety_notes

## 82 Servo horn and spline hub

*clutches & couplings.* The toothed output shaft (spline) of a hobby servo and the arm or disc that pushes onto it and is held by a screw; how most robot parts attach to a servo

### What it is

- **plain_name**: The little plastic or metal arm (or round disc) that pushes onto the tiny toothed shaft sticking out of a hobby servo and is held on by one small screw in the middle, so whatever you fasten to the arm turns with the servo
- **term**: Servo horn (servo arm) on a splined servo output shaft; servo hub (spline hub)
- **aliases**: 
  - servo arm
  - servo horn / servo disc / round horn / servo wheel
  - single-arm, double-arm, cross (4-arm) and star (6-arm) horns
  - servo hub / spline hub / clamping servo hub
  - clamping servo horn / clamp horn
  - servo spline / output spline / servo output shaft
  - 25T, 24T, 23T, 21T spline (named by tooth count)
  - Futaba-style 25T spline, Hitec C1 24T spline (brands; names beginners will meet in shops)
  - servo-to-shaft coupler / servo shaft adapter
  - idler horn (a free-turning dummy horn on the back of a robot servo), e.g. Dynamixel (brand) idler horn
  - ServoBlock (brand): a bearing-supported servo mount
  - servo saver (a spring-loaded horn that gives way in a crash; a variant)
  - Servohorn / Servoarm (German shop listings)
- **family**: clutches & couplings
- **other_families**: motion conversion
- **one_liner**: A servo horn is an arm or disc with a toothed hole that pushes onto the matching toothed (splined) output shaft of a hobby servo and is held by a screw into the end of the shaft, so the servo's turning force goes into whatever is bolted to the horn.
- **complexity**: A few parts: the servo's splined output shaft (the top of its last gear), the horn or hub with a matching toothed hole, and one small retaining screw into the shaft's tapped end (Futaba uses M2.6; M2.5 hex-head replacements fit Hitec and Futaba). Optional extras: side clamp screws on clamping horns and hubs, a bearing block (ServoBlock-style) or idler horn to carry side loads, and the screws that fasten your part to the horn's holes.
- **how_it_works**: The servo's output shaft has a ring of fine straight teeth (a spline, a bit like a tiny gear), and the horn's hole has the same number of matching grooves. Pushed together, the teeth interlock, so the horn cannot turn on the shaft (a shape-locked joint), and the centre screw stops it sliding off the end. The horn's arms carry rows of holes at different distances from the centre: a pushrod or part fixed further out moves further but with less force, one fixed closer in moves less but with more force. Clamping horns and hubs also squeeze the spline with a slit and side screws to take out the last bit of play.

### Finder attributes

- **job**: 
  - join and hold: fixes an arm, disc, wheel or bracket to a servo's output shaft
  - let it move (turn, slide or bend): passes the servo's turning motion on to the attached part
  - line parts up exactly: the teeth set the horn's angle in fixed steps, so a horn refitted on the same tooth returns to the same angle
- **motion**: none (horn and shaft are locked together); the pair as a whole rotates with the servo, typically limited to about 180° on a standard hobby servo (US patent 7,285,884 background) or continuous on a continuous-rotation servo
- **degrees_of_freedom**: 0 between horn and shaft once the screw is in (it cannot turn, slide or tilt on the shaft); the servo's output itself gives the attached part 1 (rotation about the shaft)
- **special_behaviour**: 
  - indexing (clicks into set positions): the horn can only be fitted in whole-tooth steps of 360° divided by the tooth count (14.4° for a 25-tooth spline, 15° for 24 teeth), which fixes its starting angle
  - self-aligning or self-centring: the spline teeth centre the horn on the shaft, so it runs true without adjustment
  - fail-safe or breakaway: only in the servo-saver variant, where a spring lets the horn give way when the wheels or linkage are hit, then springs back (Tamiya; DU-BRO); a plain horn has no such behaviour
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the spline teeth carry the turning force
  - friction or clamping (force-fit): the centre screw clamps the horn onto the shaft end so it cannot slide off, and clamping horns and hubs also squeeze the spline (Axial; goBILDA)
- **input_output**: Rotation -> rotation, 1:1, in line: the horn turns exactly with the servo shaft. At the horn's holes the rotation becomes an arc, and the force available at a hole = servo torque / hole radius (servo torque is quoted as the weight the servo can lift hanging from a pulley of a given radius, Wikipedia 'Servo (radio control)'), so a servo rated 10 kg·cm pushes with about 10 kg-force at 1 cm and 5 kg-force at 2 cm. Joined to a pushrod, the horn becomes the crank of a crank-and-rod linkage that turns rotation into push-pull motion. Back-drivable: the joint passes force both ways; whether a load on the horn can turn the servo depends on the servo's gearbox, and forcing the horn risks stripping the servo's gears (servo-saver articles: Tamiya, DU-BRO). *(unverified parts omitted)*
- **power**: passive (the joint itself needs no power). *(unverified parts omitted)*
- **removability**: removable: undo the centre screw (and any clamp screws) and pull the horn straight off
- **tools_needed**: A small Phillips screwdriver or a 2 mm hex key for the centre screw (Axial; AndyMark), a 1.5 mm hex key for the side screws on clamping horns (Axial), and a powered servo tester or controller to centre the servo before fitting the horn (Axial)
- **seal**: none: it is an open mechanical joint and seals nothing
- **load**: Light to medium. Strong in twist, where the many small teeth share the load; weak against being pulled off (only one small screw holds it on) and against side (radial) loads and bending, which go straight into the servo's output shaft and its small bushing or bearing. For arms that carry weight or take side loads, support the output with a bearing-supported shaft such as a ServoBlock, which 'greatly increases the servo's load-bearing capability' (ServoCity glossary; goBILDA), or with an idler horn on the back of the servo. Plastic horns and printed splines are the weakest link; aluminium horns are stiffer.
- **adjustable**: Yes, in two ways. Angle: pull the horn off and refit it one tooth round (a 14.4° step on a 25-tooth spline), then fine-tune electronically with trim or sub-trim in the radio or an offset in the code (Axial sets trim and sub-trim to zero before fitting a horn). Leverage: choose a hole further out for more travel and less force, or closer in for more force and less travel.
- **play_and_precision**: Small play when the right spline is used and the screw is tight; noticeable wobble, slipping or stripped teeth if the tooth count or spline size is wrong or worn. Clamping horns and hubs remove the spline's own small play (Axial; goBILDA). Refitted on the same tooth, it returns to the same angle. It tolerates no misalignment: the horn must sit fully down and square on the shaft. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: the centre screw goes in along the axis of the servo's output shaft, so you must be able to reach straight down onto it; leave a screwdriver hole over the screw in any part that covers the horn
- **materials**: The servo's own spline is part of its output gear, plastic or metal depending on the servo; REV sells replacement gear sets for when 'the gears or spline' are damaged. Printed horns have been made successfully in PETG (Prusa forum; mezger); PLA softens above about 60 °C (Prusa). *(unverified parts omitted)*
- **maker_difficulty**: easy if you use the horn that came with the servo or buy a matching metal hub and screw your part to its holes; moderate if you 3D print your own spline, because the teeth are only a few tenths of a millimetre tall and need test prints to get a tight fit (Prusa forum; Servo Spline Maker)

### Making it

- **processes**: 
  - off-the-shelf part: plastic horns come with every servo; aluminium horns, clamping horns, spline hubs, servo-to-shaft couplers and bearing blocks are sold by tooth count (ServoCity, goBILDA, REV)
  - 3D print (FDM): printed parts that hold the stock horn in a matching pocket, or printed horns with their own spline after test-fitting (Servo Spline Maker; Prusa forum; mezger generator)
  - CNC: metal horns and hubs are machined; Hackaday's 'spline thieving' article describes tracing a servo spline in CAD and milling it into metal parts *(unverified parts omitted)*
- **print_in_place**: no: the horn is a single part that is pushed onto the servo and screwed; nothing is printed already assembled
- **making_tips_3d_printing**: 1) Easiest and strongest: don't print the spline at all. Design your part with a pocket shaped like the stock horn and screw through the horn's holes; manufacturers don't agree on spline dimensions, so one hackaday.io builder measured his horns with calipers and fed the numbers into a parametric OpenSCAD script instead (hackaday.io log 200716). 2) If you print the spline, count the teeth exactly and measure the outside diameter first; the same tooth count can come in different sizes (ServoCity glossary: A15T and D15T both have 15 teeth but D15T is much larger). Common sizes: 25 teeth (Futaba-style, Savox, Traxxas and most 'standard' hobby servos), 24 teeth (Hitec C1), 23 teeth (JR, KO, Sanwa, Airtronics, Spektrum) and 21 teeth at about 4.8 mm for micro servos (RobotDigg chart; Pololu); SG90-style 21-tooth splines vary from about 4.7 mm (Tower Pro) to 4.9 mm (clones) (mezger README). 3) Print a test plate of splines in 0.2 mm diameter steps, sliced with the same settings as the final part, and pick the one that is tight but goes on; the best size may lie between two steps (Servo Spline Maker). 4) The smallest feature a printer can make is about one extrusion width, so a 0.25 mm nozzle resolves teeth better than a 0.4 mm one (Prusa forum). One user made a working 25T horn with a 0.4 mm nozzle in PETG at 255 °C by scaling the print to 103-105 %; the teeth looked 'slightly wavy' but locked firmly (Prusa forum). 5) The mezger OpenSCAD generator's 'servo head gap' of 0.1 mm fitted perfectly with PETG on a Bambu Lab P1S; increase it for shrink-prone materials such as ABS or less well-calibrated printers (mezger README). 7) Alternative: heat-set the spline salvaged from a scrapped servo's output gear into a PLA part with a soldering iron at about 300 °C, like a heat-set insert (Arduino forum); or trace a photo of the spline in CAD ('spline thieving', Hackaday). 8) Leave a clearance hole above the centre screw so it can be tightened after assembly, and a recess for the screw head. 9) PLA softens above about 60 °C and degrades in UV (Prusa), so use PETG or better for horns in hot or sunny places. *(unverified parts omitted)*
- **off_the_shelf_parts**: Servo horns / servo arms (single, double, cross, star, disc), sold by spline tooth count (25T, 24T, 23T, 21T), e.g. replacement plastic horn sets for 25-spline standard servos, which 'will not fit' micro servos (Adafruit); aluminium servo horns (e.g. Savox SH81 double-sided and SH82 single-sided, brand); clamping servo horns (Axial heavy-duty clamp horns, brand); servo hubs / spline hubs (e.g. goBILDA 1906 low-profile and 1908 32 mm servo hubs on a 16 mm hole pattern, brand); servo hub shafts; clamping servo-to-shaft couplers (25T spline to 6 mm or 8 mm bore, goBILDA); servo shaft adapters (25T to 5 mm hex socket, REV-41-1558, brand); ServoBlock bearing mounts (brand); idler horn sets for robot servos (e.g. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - The horn's spline must match the servo's exactly: same tooth count AND same size. Common families: 25T (Futaba, Savox, Traxxas, Power HD and many others), 24T (Hitec), 23T (JR, KO, Sanwa, Airtronics, Spektrum) (RobotDigg spline chart); 21T x 4.8 mm micro servos (Pololu). Identify a spline by counting teeth and measuring its outside diameter (Robot Smashing League; ServoCity glossary).
  - The Futaba-style 25T spline is about 5.9 mm across (5.92 mm head diameter in the OpenSCAD_ServoArms library's FUTABA_3F_SPLINE definition, LGPL 2.1).
  - Force at a horn hole = servo torque / distance from the centre (from the torque definition in Wikipedia 'Servo (radio control)'): halve the radius to double the force and halve the travel.
  - One tooth of repositioning = 360° / tooth count: 14.4° on 25 teeth, 15° on 24 teeth, about 17° on 21 teeth; fine-tune the rest with trim, sub-trim or a software offset (Axial).
  - Centre the servo with power on and trims at zero before fitting the horn (Axial).
  - Don't use thread locker on the horn screw; if it keeps working loose even with a new screw, use a little medium-strength thread locker, never high-strength (Axial).
  - For printed splines, print a test plate stepping 0.2 mm in diameter and choose the tightest one that fits (Servo Spline Maker); scaling a 0.4 mm-nozzle PETG print to 103-105 % gave a tight fit in one test (Prusa forum).
  - Take side loads and weight on a bearing (a ServoBlock-style bearing-supported shaft or an idler horn), not on the servo's own output shaft (ServoCity glossary; goBILDA; ROBOTIS idler horn).

### When to use it

- **everyday_examples**: 
  - The steering servo of a radio-controlled car, whose horn pushes the steering linkage (Axial)
  - Radio-controlled aircraft, where a pushrod runs from a servo horn to a wing flap or tail surface (DU-BRO)
  - Hobby robot kits with wheels or arms pressed onto micro servos (Pololu servo wheels) *(unverified parts omitted)*
- **when_to_use**: Use a horn or spline hub whenever you attach anything to a hobby servo: a pushrod to move a flap, steering or a latch; an arm or bracket for a robot joint; a wheel on a continuous-rotation servo; a gear or pulley. Choose a stock plastic horn for light jobs and prototypes, an aluminium or clamping horn or hub for robot joints and higher-torque servos, and pick the hole distance to trade travel against force.
- **when_not_to_use**: Don't hang heavy arms or wheels straight on the servo's output shaft: side loads and bending should go into a bearing (ServoBlock-style mount, idler horn or your own bearing), with the horn only passing on the twist. Where the linkage can be hit (RC car steering, legs, grippers), add a servo saver, a slip clutch or a series-elastic coupling so shocks don't strip the gears. For continuous heavy-duty rotation or high torque, use a gear motor with a keyed, D-shaped or hex shaft and a proper shaft coupling or clamping hub instead of a hobby-servo spline. Never force a horn made for another brand's spline: it will wobble or strip.
- **environment_limits**: Heat: PLA parts soften above about 60 °C and degrade in UV light (Prusa), so printed horns in a hot car or outdoors should be PETG, ASA or nylon. Vibration: the centre screw can work loose; Axial suggests a new screw first and then a little medium-strength thread locker, never high-strength. *(unverified parts omitted)*
- **safety_notes**: Forcing a powered servo's horn by hand can strip its gears (servo-saver articles: Tamiya, DU-BRO). *(unverified parts omitted)*
- **common_failures**: 1) Horn slips or strips because the spline is the wrong tooth count or size, or a plastic horn was overloaded: match the spline exactly, or upgrade to an aluminium or clamping horn. 2) Horn works loose because the centre screw backs out: use a fresh screw, then medium-strength thread locker if needed (Axial); hex-head screws are less prone to stripping than Phillips (AndyMark). 4) Servo shaft, bushing or case worn or cracked by side loads from a long arm: support the output on a bearing (ServoBlock, idler horn) (ServoCity glossary). 5) Stripped servo gears after a crash or impact because nothing could give: fit a servo saver (Tamiya; DU-BRO). 6) Printed splines too loose (slips) or too tight (splits the hub): print a test plate and adjust in 0.2 mm steps or scale by a few percent (Servo Spline Maker; Prusa forum). 7) Arm fitted at the wrong angle so the linkage binds at the ends of travel: centre the servo first, then fit the horn (Axial). *(unverified parts omitted)*
- **related**: 
  - Servo saver (sprung horn): a horn with a spring that lets the linkage give way under shock, protecting the servo's gears; covered with the torque-limiting gear entry
  - Series-elastic coupling (series elastic actuator): puts a deliberate spring between the servo or gearbox and the output, and measures its stretch to control force
  - Hirth joint (face-spline coupling): also joins parts with interlocking teeth, but on flat faces and much larger, for precise heavy-duty indexing
  - Splined shaft (mechanical spline) in general: the same tooth-locked idea used on car driveshafts and bicycle freehubs, carrying more torque than a single key (Wikipedia 'Spline (mechanical)')
  - Clamping hub or shaft collar on a D-shaft or hex shaft: the usual way to fix parts to motor shafts that have no spline
  - Bearing-supported servo mount (ServoBlock-style) and idler horn: not alternatives but add-ons that carry side loads so the horn only passes on twist
  - Friction slip clutch: slips smoothly at a set torque to protect the servo, instead of a rigid horn

### Pictures, videos and models

- **links**: 
  - [Futaba 6-Arm plastic servo horn.jpg (Wikimedia Commons, by Suyash Dwivedi)](https://commons.wikimedia.org/wiki/File:Futaba_6-Arm_plastic_servo_horn.jpg): Photo of a typical six-arm plastic servo horn with rows of linkage holes and the toothed centre hole *(licence: CC BY-SA 4.0)*
  - [Servo Arm Attachment.jpg (Wikimedia Commons, by MTomaselli)](https://commons.wikimedia.org/wiki/File:Servo_Arm_Attachment.jpg): SketchUp drawing with the specifications of a custom arm that attaches to a servo *(licence: CC BY-SA 3.0)*
  - [ServoCity glossary: servo splines, servo horns, ServoBlock](https://www.servocity.com/glossary): Plain definitions plus a diagram comparing common hobby servo spline sizes, showing that equal tooth counts can be different sizes *(licence: link only)*
  - [Spline Thieving Makes Hobby Servos Even More Useful (Hackaday, 2015)](https://hackaday.com/2015/02/01/spline-thieving-makes-hobby-servos-even-more-useful/): Pictures of a servo spline traced from a photo in CAD and built into printed and milled parts *(licence: link only)*
  - [3d Print an Autodesk Fusion 360 Gear Generation around an SG90 Servo Horn Tutorial (Broadwell Consulting, YouTube)](https://www.youtube.com/watch?v=rQwg55PHdAc): Video tutorial modelling a printed gear that wraps around a stock SG90 horn instead of printing the spline *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Servo Spline Maker (Jamie, Printables)](https://printables.com/model/163224-servo-spline-maker): OpenSCAD customizer that prints a test plate of splines in small diameter steps so you can find the size that fits your servo, then exports the chosen spline to build into your own part *(licence: CC0 (Creative Commons Public Domain))*
  - [OpenSCAD_ServoArms (hugokernel), servo_arm.scad](https://raw.githubusercontent.com/hugokernel/OpenSCAD_ServoArms/master/servo_arm.scad): Parametric OpenSCAD servo-arm library with a Futaba 3F 25-tooth spline definition; add new spline arrays for other servos *(licence: LGPL 2.1 or later (from the file header))*
  - [Servo horn round for 55G Servo (25T spline) (ExLoop, Printables)](https://www.printables.com/model/149856-servo-horn-round-for-55g-servo-25t-spline): Printable round 25T horn with four M3 holes for standard-size servos *(licence: CC BY-NC)*
  - [25 Servo Horn Template For Large Servos, Includes fusion 360 f3d and STEP files (Forrest, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/937213-25-servo-horn-template-for-large-servos-includes-f): A basic 25T horn in Fusion 360 and STEP formats to start your own custom horn from; the author says it fits Futaba-style 25T 20 kg servos *(licence: CC0 (Creative Commons Public Domain))* *(unverified parts omitted)*
- **diagram_idea**: A cut-away of a servo's toothed output shaft with a horn above it, arrows showing the horn pushing down onto the teeth and the centre screw going in, then a top view of the horn with two holes marked 'near: more force, less travel' and 'far: less force, more travel', plus a small side view showing a bearing block taking the side load.
- **sources**: 
  - https://en.wikipedia.org/wiki/Servo_(radio_control)
  - https://en.wikipedia.org/wiki/Spline_(mechanical)
  - https://patents.google.com/patent/US7285884
  - https://www.robotdigg.com/news/168/RC-Servo-Spline-Chart
  - https://robotsmashingleague.com/combat-robot-cookbook/servo-spline-sizing-guide
  - https://www.servocity.com/glossary
  - https://www.servocity.com/servo-horns/
  - https://www.gobilda.com/servoblock-standard-size-25-tooth-spline-hub-shaft/
  - https://www.gobilda.com/4001-series-clamping-servo-to-shaft-coupler-25-tooth-spline-to-6mm-round-bore/
  - https://docs.revrobotics.com/ion-build/motion/servos
  - https://www.pololu.com/product/4910
  - https://www.adafruit.com/product/4250
  - https://www.generationrobots.com/en/403206-hn11-i101-horn-set.html
  - https://www.axialadventure.com/axi-blog-archive-servo-and-servo-horn-replacement.html
  - https://andymark.com/products/servo-horn-replacement-screw-m2-5-0-45-x-8-mm
  - https://wheelspinmodels.co.uk/i/futaba-servo-horn-screw-m2.6-x-5-10pc-372587/
  - https://tamiyamodel.com/how-does-a-servo-saver-work/
  - https://www.dubro.com/blogs/du-bro-101/du-bro-101-how-to-install-a-servo-saver
  - https://hackaday.com/2015/02/01/spline-thieving-makes-hobby-servos-even-more-useful/
  - https://forum.prusa3d.com/forum/original-prusa-how-do-i-print-this-printing-help/printing-servo-horn-25t/
  - https://forum.arduino.cc/t/using-servo-output-spline-as-an-insert-for-custom-horns/1384332
  - https://hackaday.io/project/180210/log/200716-parametric-3d-models-to-fit-various-types-of-servo-horns
  - https://raw.githubusercontent.com/mezger/customizable-servo-arm/main/README.md
  - https://raw.githubusercontent.com/hugokernel/OpenSCAD_ServoArms/master/servo_arm.scad
  - https://raw.githubusercontent.com/hugokernel/OpenSCAD_ServoArms/master/README.md
  - https://api.printables.com/graphql/
  - https://printables.com/model/163224-servo-spline-maker
  - https://www.printables.com/model/149856-servo-horn-round-for-55g-servo-25t-spline
  - https://commons.wikimedia.org/wiki/File:Futaba_6-Arm_plastic_servo_horn.jpg
  - https://commons.wikimedia.org/wiki/Category:Servo_motor_parts
  - https://commons.wikimedia.org/wiki/File:Servo_Arm_Attachment.jpg
  - https://www.youtube.com/watch?v=rQwg55PHdAc
  - https://help.prusa3d.com/article/pla_2062

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, everyday_examples, input_output, make_it_yourself, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, power, processes, reuse_cycles, safety_notes

## 83 Series-elastic coupling (series elastic actuator)

*clutches & couplings.* A deliberate spring between a motor gearbox and its output, so the joint absorbs shocks and the spring's stretch can be measured to control force

### What it is

- **plain_name**: A spring deliberately put between a motor's gearbox and the part it moves, so knocks are soaked up by the spring, and by measuring how far the spring has twisted or squashed, the robot can tell (and control) how hard it is pushing
- **term**: Series elastic actuator (SEA); series-elastic coupling
- **aliases**: 
  - SEA
  - series elasticity / series compliance
  - compliant actuator / elastic actuator
  - rotary SEA / linear SEA
  - series elastic servo / compliant servo actuator (hobby-servo versions)
  - torsion-spring coupling (the spring stage on its own)
  - force-controlled or torque-controlled actuator (what the sensing makes it)
  - variable stiffness actuator, VSA (a related version whose spring stiffness can be changed)
  - tendon tensioner with spring (string-driven robot version)
- **family**: clutches & couplings
- **other_families**: compliant mechanisms & flexures
- **one_liner**: A series elastic actuator drives a joint through a purposely soft spring placed after the gearbox, so the spring absorbs shocks and its measured deflection tells the controller the force, letting the motor control force instead of just position.
- **complexity**: A small assembly that acts as one unit: motor; gearbox (planetary, belt or ball screw); the spring (a torsion bar, coil torsion spring, flat spiral or 'planar' torsion spring, pairs of compression springs, fibreglass plate, rubber, or a 3D-printed TPU spring); sensors that measure the spring's deflection (two angle encoders, a magnet and Hall sensor, a potentiometer, or strain gauges); bearings; and a controller running a force (torque) control loop.
- **how_it_works**: The motor and gearbox do not drive the joint directly: 'the motor and gearbox drive a spring, and it's the spring that drives the joint' (Matthew Williamson, in IEEE Spectrum). A spring's force equals its stiffness times how far it is bent or twisted (Hooke's law), so measuring the angle difference across the spring gives the force, and the controller moves the motor to hold the deflection that produces the force it wants (Pratt & Williamson 1995). This turns the hard job of controlling force through noisy, sticky gears into the easier job of controlling a position. The spring also spreads out sudden knocks, lowering the peak force on the gear teeth and giving the controller time to react, and it can store and return energy, as in walking and hopping robots (Hurst & Green).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): it drives a robot joint or linear output through a spring
  - hold or release using power: with its sensor and controller it holds a chosen force or softness rather than a rigid position
  - store energy: the spring stores and gives back energy, e.g. in each step of a legged robot (Hurst & Green)
  - slow it, stop it or keep its speed steady: the spring cushions impacts so the motor can decelerate before force builds up (Hurst & Green)
- **motion**: rotate (rotary SEAs at robot joints; the spring adds a small extra twist, e.g. up to ±20° designed into OpenSEA's spring) or, for linear SEAs driven by a ball screw, slide
- **degrees_of_freedom**: 1 at the output, but 2 inside: the gearbox side and the joint side can differ by the spring's deflection ('an additional degree of freedom is added to the system', OpenSEA paper)
- **special_behaviour**: 
  - torque-limiting (slips or clicks at a set force/torque): not by slipping, but because it measures force, its controller can hold or cap a set force; Baxter's arms sense when they are grabbed and slow down or follow the push (IEEE Spectrum), and James Bruton's prototype stops pushing when it meets resistance (Hackaday)
  - fail-safe or breakaway: the spring gives under a sudden knock and spreads out the shock, protecting the gears, then springs back, with nothing to reset (Pratt & Williamson; Hurst & Green)
  - tensioning (takes up slack and holds): in string (tendon) driven robots a spring in the string keeps it taut and acts as a shock absorber (Printables tendon tensioner)
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): all the force between gearbox and joint passes through the spring
  - not a holding joint (it moves or passes on motion): it is a drive that passes on and measures force
- **input_output**: Rotation -> rotation for rotary SEAs; rotation -> straight push-pull for linear SEAs using a ball screw with springs on either side of the nut (Hurst & Green; MIT-SEA). The spring stage itself is 1:1 on average, in line; the gearing before it sets the ratio (Pratt & Williamson used a 66:1 planetary gearbox; OpenSEA a 3:1 helical planetary; Lee & Oh a 2:1 timing belt). The output lags or leads the gearbox by the spring's deflection. Back-drivable: yes, within the spring's travel, even if the gearbox is locked; beyond that, only if the gearbox itself is back-drivable. With control, it can be made to feel softer or stiffer than the real spring (Pratt & Williamson). *(unverified parts omitted)*
- **power**: powered: needs a motor and, for force control, sensors and a controller. The spring coupling itself is passive. *(unverified parts omitted)*
- **removability**: removable: built from bolted parts, bearings and swappable springs
- **seal**: none: the actuator described in the sources is open; seal it with a housing if needed
- **load**: Light to heavy depending on the design. Hobby and 3D-printed versions carry a few newton-metres (OpenSEA: designed for about ±3 N·m through the spring, with up to 12.36 N·m from its gearbox; a stroke-rehabilitation elbow needs about 3 N·m). A linear electric SEA in one design study carried 450 N (IntechOpen chapter). Hydraulic SEAs give about 100 times the power density of electric ones and suit heavy legged robots (IntechOpen). Strong in the drive direction up to the spring's safe deflection; beyond it the spring yields or hits end stops (Pratt & Williamson list the spring's yield point as a limit). *(unverified parts omitted)*
- **adjustable**: The physical stiffness is fixed by the spring fitted, but springs can be swapped (a hackaday.io printed leg uses swappable springs) or changed on the fly in a variable-stiffness actuator; the controller can make the joint behave softer or stiffer than the spring (Pratt & Williamson). String versions adjust pre-tension with a screw (Printables tendon tensioner).
- **play_and_precision**: Deliberately springy: the output moves under load by the spring's deflection, so holding an exact position is harder; one builder quotes SEAs' 'low stiffness and limited bandwidth that leads to degraded position control performance' (hackaday.io 3D printed robot actuator log). Gear backlash and friction sit inside the force loop and are largely hidden: Baxter's SEAs 'act as filters that help reduce friction and backlash in low-cost gearboxes' (IEEE Spectrum). Printed gear trains add their own springiness: in OpenSEA the printed planetary gears gave 74.9 % of the total 22.22° compliance and the spring only 25.1 %. Force-sensing resolution = spring stiffness x sensor angle resolution (Lee & Oh: 0.3835 mN·m per encoder count).
- **access_needed**: not applicable: it is a self-contained drive unit, reached wherever its housing opens
- **materials**: Springs: steel torsion bar with a cross-shaped section (Pratt & Williamson), spring-steel coil torsion spring (OpenSEA: 2.667 mm wire, 29 mm coil diameter, 7 turns), planar torsion springs with an inner and outer ring joined by flexible spokes (NASA Robonaut 2, via Hurst & Green), steel die springs (MIT-SEA), fibreglass or titanium plates (ATRIAS and other legged robots), rubber and elastomers (Hurst & Green) and 3D-printed TPU (arXiv 2609.19367). Structure: printed PLA housings and gears in OpenSEA (PLA flexural strength 83 MPa), with carbon-fibre-reinforced nylon (175 MPa) suggested for higher torques; metal gearboxes and bearings in larger actuators.
- **maker_difficulty**: moderate to hard: putting a spring between a servo horn and the output is easy, but measuring the deflection and closing a force-control loop needs a sensor, calibration and control code; commercial robot-grade SEAs are expensive precision units, so buy or copy an open design

### Making it

- **processes**: 
  - 3D print (FDM): housings, gear trains, carriers, horns and even TPU springs (OpenSEA; arXiv 2609.19367; hackaday.io compliant servo actuator)
  - off-the-shelf part: springs, bearings, encoders, motors and gearboxes; complete modular SEAs are sold commercially, e.g. ANYdrive, HEBI X-Series, Apptronik P170 Orion (brands, listed by Hurst & Green) *(unverified parts omitted)*
- **print_in_place**: no: it is assembled from printed parts plus a spring, bearings, sensors and a motor
- **making_tips_3d_printing**: 1) Use a metal spring where you can: steel coil or torsion springs are predictable and don't creep. Printed TPU torsion springs can work (one design's torque-twist curve was 'highly linear', within 3 % of simulation, with deviations blamed on FDM anisotropy, i.e. layers being weaker in some directions, arXiv 2609.19367), but elastomers show hysteresis and non-linearity (Hurst & Green). 2) Put the spring after the gearbox, next to the joint (distal elasticity): this decouples the motor's inertia from the output best and measures the force at the joint more directly (Hurst & Green). OpenSEA instead places its torsion spring between the planetary ring gear and the fixed motor bracket, a compact alternative. 3) Measure the spring directly: a magnet and linear Hall-effect sensor across the spring plus an AS5600 magnetic encoder (hackaday.io compliant servo actuator), two potentiometers compared by an Arduino (James Bruton, Hackaday), strain gauges on the spring (Pratt & Williamson) or a high-resolution absolute encoder (Lee & Oh). 4) Printed gears are springy too: in OpenSEA the printed planetary gave three times more twist than the actual spring, so don't estimate force from the motor encoder alone. 5) Infill and walls used by OpenSEA in PLA: 100 % for the coupler, carrier, planet gears and stops; 60 % for sun, ring and bevel gears; 30 % for arm links and brackets; 3 perimeters on everything. For higher torque, use carbon-fibre-reinforced nylon. 7) Leave room to swap springs while tuning (hackaday.io printed leg). 8) For string-driven robots, a small printed tensioner with a ballpoint-pen spring, an M2 screw, fishing line and a PTFE tube guide makes a simple SEA-style shock absorber (Printables tendon tensioner). 9) PLA softens above about 60 °C (Prusa), so keep printed springs and gears away from hot motors. *(unverified parts omitted)*
- **off_the_shelf_parts**: Torsion springs and compression springs (die springs for linear SEAs); magnetic angle encoders (e.g. AS5600), linear Hall-effect sensors and 6 x 3 mm neodymium magnets; potentiometers; strain gauges with an amplifier; absolute encoders; thin-section bearings (e.g. 6809); planetary gearboxes or gear motors; ball screws; hobby servos with a servo controller that has velocity and acceleration limits (Pololu Maestro used by a hackaday.io build); fishing line and PTFE (Bowden) tube for tendon versions; M2/M3 screws, nuts and heat-set inserts; complete modular SEAs from ANYbotics, HEBI Robotics and Apptronik (brands).
- **rules_of_thumb**: 
  - Force = spring stiffness x deflection (torque = torsional stiffness x twist angle); this is how an SEA measures force (Pratt & Williamson 1995; IntechOpen chapter).
  - The spring's stiffness is the key design choice: a softer spring gives better shock tolerance, more accurate force control and a 'softer' feel; a stiffer spring gives faster force changes (higher force bandwidth) and better position holding. 'The spring has to be able to support the loads, but it cannot be too stiff' (IntechOpen chapter); the best value depends on the task (Hurst & Green).
  - Force resolution = stiffness x sensor angle resolution: a 128 N·m/rad spring read by a 19-bit absolute encoder resolves about 0.38 mN·m per count (Lee & Oh 2019).
  - Natural frequency of motor inertia on the spring = square root of (stiffness / inertia): Pratt & Williamson's 34 N·m/rad torsion spring with 0.02 kg·m² of reflected motor inertia gave about 41 rad/s, roughly 7 Hz.
  - Gearing by N:1 multiplies the motor's reflected inertia by N squared, so high-ratio gearboxes suffer most from shocks and gain most from a series spring (Pratt & Williamson; Hurst & Green).
  - Use softer springs and smaller peak torques at light, fast joints (e.g. a wrist) than at heavy ones (e.g. a shoulder); one actuator design is rarely right for every joint (Hurst & Green).
  - Example sizes from published designs: MIT-SEA-type linear SEA with a ball screw and antagonistic die springs (Hurst & Green); an electric linear SEA for 450 N with 40 Hz bandwidth used a 3.27 x 10^4 N/m spring (IntechOpen chapter); Lee & Oh's leg joint achieved 32 Hz closed-loop force bandwidth with a 128 N·m/rad spring.

### When to use it

- **everyday_examples**: 
  - Electric power steering in cars: a torsion bar in the steering column is measured, and the assist motor helps in proportion to its twist (Hurst & Green)
  - A self-propelled walk-behind lawnmower whose spring-loaded handle opens the throttle as you push it (Hurst & Green)
  - The Baxter collaborative robot, whose springy joints let it work beside people and feel when it is grabbed (IEEE Spectrum)
  - The 'servo saver' on an RC car's steering: a spring between servo and steering, the same idea without the measuring (Tamiya)
- **when_to_use**: Use a series spring when a geared motor must touch or push on people, animals or unpredictable objects: robot arms that work beside people, grippers that must squeeze gently, exoskeletons and prosthetics where comfort needs gentle, accurate force, walking and hopping robots that land hard and can reuse energy, haptic controls that must feel like a spring, and any geared drive that keeps breaking teeth on impacts. It also lets cheap, sloppy gearboxes give smooth, accurate force (IEEE Spectrum; Hurst & Green). A simple unmeasured spring coupling is worth adding just to protect a hobby servo from shocks.
- **when_not_to_use**: Avoid it where you need stiff, precise positioning (3D-printer axes, CNC, camera sliders): the spring lets the output move under load, and a rigid drive with a stiff coupling such as a flexible beam or jaw coupling is better. If you only need overload protection, a friction slip clutch, ball-detent torque limiter or servo saver is simpler. If you need fast, strong force changes against a stiff, unmoving object, a stiffer drive with a torque sensor wins (Hurst & Green). And don't add one without a plan for sensing and control if you actually need force control. *(unverified parts omitted)*
- **environment_limits**: Elastomer springs (rubber, TPU) show hysteresis and non-linearity (Hurst & Green). *(unverified parts omitted)*
- **safety_notes**: The spring makes contact gentler but not harmless; a badly tuned force loop can oscillate or push harder than expected (Lee & Oh needed a disturbance observer to keep control robust). Keep fingers out of gear trains and motor pinch points. *(unverified parts omitted)*
- **common_failures**: 1) Spring too stiff: little benefit, poor force resolution. Spring too soft: sluggish, wobbly joint that can't follow fast motions (IntechOpen; Pratt & Williamson). 2) Force readings drift because printed gears or mounts flex more than the spring (OpenSEA: gears gave about three times the spring's twist), or because a printed spring creeps: measure deflection right across the spring and recalibrate. 3) Spring over-twisted and permanently bent (yield): add end stops (Pratt & Williamson list yield as a limit). *(unverified parts omitted)*
- **related**: 
  - Servo saver (sprung servo horn): a spring between servo and linkage that absorbs knocks, but nothing measures it; covered with the torque-limiting gear entry
  - Friction slip clutch and ball-detent torque limiter: protect gears by slipping at a set torque, but give no force control and don't store energy
  - Jaw coupling (spider coupling): its rubber spider soaks up small shocks between shafts, but it is meant to be stiff, not a measured spring
  - Flexible beam coupling: bends to accept misalignment while staying stiff in twist, the opposite of an SEA's deliberate twist
  - Variable stiffness actuator (VSA): an SEA whose spring stiffness can be changed while running, e.g. the University of Pisa VSA-I (Wikimedia Commons)
  - Servo horn and spline hub: the usual rigid way to attach parts to a hobby servo, which a series spring can be added to *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Schematic Diagram of Series Elastic Actuators (Wikimedia Commons, by Manuel Cestari Soto)](https://commons.wikimedia.org/wiki/File:1-a-Schematic-Diagram-of-Series-Elastic-Actuators-44-b-Series-Elastic-Actuator.png): Two-part figure from a study of variable-stiffness exoskeleton joints: (a) a schematic of series elastic actuators and (b) an example SEA *(licence: CC BY-SA 4.0)*
  - [OpenSEA: a 3D printed planetary gear series elastic actuator for a compliant elbow joint exoskeleton (Jenks, Levan, Stefanovic, Frontiers in Robotics and AI, 2025)](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2025.1528266/full): Exploded views of a printed planetary SEA, its coil torsion spring and test results; open access *(licence: CC BY (article))*
  - [An Introduction To Series Elastic Actuators For A Robot (Hackaday, 2015)](https://hackaday.com/2015/12/03/an-introduction-to-series-elastic-actuators-for-a-robot/): James Bruton's simple SEA with a printed lead screw, elastic bands and two potentiometers read by an Arduino, with the video embedded *(licence: link only)*
  - [Avengeres Ultron #4 | Series Elastic Actuators (James Bruton, YouTube)](https://www.youtube.com/watch?v=-deICvHVo5A): Video building and demonstrating a hobby series elastic actuator that senses when it is pushed *(licence: link only (standard YouTube licence))*
  - [Variable Impedance Actuator.jpg: the VSA-I variable stiffness actuator (Wikimedia Commons, Centro di Ricerca E. Piaggio, University of Pisa)](https://commons.wikimedia.org/wiki/File:Variable_Impedance_Actuator.jpg): Photo of a research actuator whose springs' stiffness can be changed (a related variant) *(licence: CC BY-SA 4.0)*
- **make_it_yourself**: 
  - [String Tensioner and Shock Absorber for Robot Tendons (Series Elastic Actuator) (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/605782-string-tensioner-and-shock-absorber-for-robot-tend): A small printed spring tensioner for string-driven robots that clips to a servo arm; uses an M2 screw, a flat M2 nut, a ballpoint-pen spring, fishing line and optional PTFE tube *(licence: CC BY-NC-ND)* *(unverified parts omitted)*
- **diagram_idea**: Three boxes in a row, 'motor + gearbox', a zig-zag spring and 'joint', with an angle dial on each side of the spring and a callout 'force = spring stiffness x (angle difference)'; a second frame shows a hammer hitting the joint and the spring squashing so the gear teeth feel only a gentle push.
- **sources**: 
  - https://fab.cba.mit.edu/classes/865.15/people/rebecca.kleinberger/assets/papers/SEA_Pratt.pdf
  - https://mime.engineering.oregonstate.edu/research/drl/_documents/hurst_2020.pdf
  - https://www.intechopen.com/chapters/51224
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2025.1528266/full
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC11906680/
  - https://raw.githubusercontent.com/COMANDLab/SEA_Exoskeleton/main/README.md
  - https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2019.00017/full
  - https://arxiv.org/abs/2609.19367
  - https://spectrum.ieee.org/rethink-robotics-baxter-robot-factory-worker
  - https://hackaday.com/2015/12/03/an-introduction-to-series-elastic-actuators-for-a-robot/
  - https://www.youtube.com/watch?v=-deICvHVo5A
  - https://hackaday.io/project/183393-compliant-servo-actuator
  - https://hackaday.io/project/157812-3d-printed-robot-actuator/log/154407-series-elastic-actuator-cad
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:1-a-Schematic-Diagram-of-Series-Elastic-Actuators-44-b-Series-Elastic-Actuator.png
  - https://commons.wikimedia.org/wiki/File:Variable_Impedance_Actuator.jpg
  - https://tamiyamodel.com/how-does-a-servo-saver-work/
  - https://help.prusa3d.com/article/pla_2062

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, input_output, load, make_it_yourself, making_tips_3d_printing, power, processes, related, reuse_cycles, safety_notes, tools_needed, when_not_to_use

## 145 Centrifugal clutch

*clutches & couplings.* Weights on a spinning hub fly outwards as speed rises and press against a drum to engage drive automatically, as in go-karts and chainsaws

*Not researched yet.*

## 190 Spline shaft (sliding spline)

*clutches & couplings.* A shaft with lengthwise ridges fitting a matching hub, passing turning force while letting the hub slide along the shaft

*Also covers:* Also covers hex shafts and LEGO-style cross axles

*Not researched yet.*

## 191 Constant-velocity joint (CV joint)

*clutches & couplings.* A joint that drives a shaft at an angle without the speed wobble of a simple universal joint, using balls in curved tracks

*Not researched yet.*

## 192 Friction clutch (plate or cone clutch)

*clutches & couplings.* Friction surfaces pressed together to connect drive and pulled apart to disconnect it, able to slip gently while engaging

*Not researched yet.*

## 193 Keyless locking bush (taper-lock bush, shaft locking device)

*clutches & couplings.* Tapered rings squeezed by screws that grip a smooth shaft and hub by friction, fixing a pulley or gear without keys or flats

*Not researched yet.*

## 194 Schmidt coupling (offset coupling)

*clutches & couplings.* Three discs joined by links that pass rotation between two parallel shafts which are well out of line, at constant speed

*Not researched yet.*

## 195 Flexible drive shaft (rotating cable)

*clutches & couplings.* Layers of wound wire in a sleeve that carry rotation round bends, as in rotary-tool extensions and speedometer cables

*Not researched yet.*

## 266 Shaft-to-hub joints and rigid couplings (key, set screw, D-flat, clamp hub)

*clutches & couplings.* The ordinary ways to fix a gear, pulley or wheel to a shaft, or join two shafts rigidly end to end

*Also covers:* Also covers shaft collars

*Not researched yet.*

