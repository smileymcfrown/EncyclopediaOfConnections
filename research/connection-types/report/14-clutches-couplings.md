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

### What it is

- **plain_name**: A clutch that connects itself: weighted shoes on a spinning hub are held in by springs at low speed, then fly outwards as the engine speeds up and rub against a surrounding drum until they grip it and drive it round. Slow down and the springs pull the shoes back in, so the engine can idle without driving the wheels, chain or blade
- **term**: Centrifugal clutch (automatic shoe clutch)
- **aliases**: 
  - automatic clutch / auto-clutch (Wikipedia; Wikipedia 'Motorcycle transmission')
  - shoe clutch; the shoes are also called flyweights, weights or clutch shoes, and the drum is called the clutch bell or clutch drum (BLM Automatic Clutch; Wikipedia)
  - go-kart clutch / mini-bike clutch / dry centrifugal clutch (Go Kart Supply)
  - chainsaw clutch (the chain sprocket is part of the clutch drum) (Wikipedia)
  - centrifugal pulley clutch (belt-drive version) (Go Kart Supply)
  - floating-opposing-arm (FOA) clutch or compliant centrifugal clutch (spring-less one-piece shoe design from BYU) (Crane thesis; BYU CMR)
  - 'traffic clutch' (1930s Talbot (brand) car name) (Wikimedia Commons)
  - Saxomat (brand; automatic clutch system listed under 'See also' on Wikipedia)
  - frizione centrifuga (Italian; Wikimedia Commons file name), Fliehkraftkupplung (German)
- **family**: clutches & couplings
- **other_families**: torque limiting & slip, brakes, dampers & speed control
- **one_liner**: A clutch that engages by itself as it speeds up: spinning weights are flung outwards against a drum and drive it by friction, and they let go again when the speed drops.
- **complexity**: A small assembly that acts as one unit: a hub (spider) fixed to the engine or motor shaft, two to six shoes (weights) lined with friction material, springs that pull the shoes inwards (or springy arms in one-piece compliant designs), and a drum (bell) that turns freely on a bushing or bearing and carries the output sprocket or pulley. Some racing-kart versions use weighted arms that squeeze a stack of friction discs instead of shoes (Wikipedia).
- **how_it_works**: The shoes are fixed to the input shaft so they always turn with the engine, while the drum around them is free to turn on its own. The faster they spin, the harder the shoes pull outwards (centrifugal force, which grows with the square of the speed); below a set speed the springs win and the shoes stay clear of the drum, but above it they touch the drum, slip at first and then grip it fully (lock up) so the drum turns with the engine (Wikipedia; LNCT lecture notes). If the load drags the engine speed down, the shoes pull back in and the clutch slips or lets go, which stops the engine stalling (Wikipedia; Go Kart Supply). It works like a drum brake turned inside out (Wikipedia).

### Finder attributes

- **job**: 
  - hold or release using power: it connects the drive automatically once the engine or motor is spinning fast enough, and disconnects it at idle, with no lever or pedal (Go Kart Supply: 'the throttle becomes the single control')
  - slip or let go when overloaded: if the load slows the engine too much, the shoes slip or retract so the engine does not stall (Wikipedia; Go Kart Supply)
  - join and hold: once locked up it joins the engine shaft to the output sprocket, pulley or shaft so they turn as one
- **motion**: rotate: continuous rotation; the shoes also move outwards a small distance (just enough to close the gap to the drum) as speed rises
- **degrees_of_freedom**: Below engagement speed: 1, the drum turns freely relative to the hub. Once locked up: 0 between hub and drum (they turn together). Each shoe has its own small outward sliding or swinging movement.
- **special_behaviour**: 
  - fail-safe or breakaway: it disengages by itself at idle and when the engine is dragged down by an overload, so the engine does not stall and the drive stops when the throttle is released (Wikipedia; Go Kart Supply; Michigan chainsaw rule)
  - torque-limiting (slips or clicks at a set force/torque): while engaging it slips, and the torque it can pass rises with speed, so it acts as a soft start and a speed-dependent slip clutch rather than a fixed-torque limiter (LNCT lecture notes; SUCO)
  - one-way in a special sense: the engine can drive the output, but at idle the output cannot drive the engine, so there is no engine braking when coasting (Wikipedia 'Motorcycle transmission')
- **holding_principle**: 
  - friction or clamping (force-fit): the shoes press on the drum and the drive passes by friction
  - spring force (a spring or springy part presses it in place): springs (or springy arms in compliant designs) hold the shoes away from the drum until the set speed is reached; this sets when it engages rather than holding the drive
- **input_output**: Continuous rotation in -> the same rotation out (1:1) once locked up, nothing out at idle, and slipping rotation in between. Shafts: in line (the drum sits concentrically around the shoes on the same shaft axis). Torque capacity rises with the square of the speed above engagement: T = n x mu x m x r x (w^2 - w1^2) x R (LNCT lecture notes). Back-drivable: no at idle (the wheels or chain cannot turn the engine, so it freewheels downhill); yes only while the engine is already above lock-up speed, which then gives engine braking (Wikipedia 'Motorcycle transmission'). *(unverified parts omitted)*
- **power**: passive (no power needed): it is driven purely by the speed of the input shaft and needs no external power or control; industrial makers stress it needs no power supply (SUCO). If the engine or motor stops, the clutch simply disengages.
- **removability**: removable: it bolts onto a keyed shaft end (for example with a bolt into the tapped crankshaft end, a key and set screws) and comes off with ordinary tools (Go Kart Supply)
- **reuse_cycles**: effectively unlimited: it engages and disengages every time the engine speeds up and slows down; the friction shoes and the drum bushing wear and are replaced as parts (Go Kart Supply; BLM Automatic Clutch)
- **tools_needed**: To fit: spanner or socket, hex key for set screws, the shaft key, and a way to stop the crankshaft turning while tightening the bolt; for chain drives a chain tool (Go Kart Supply). To operate: none.
- **load**: Light to medium: typical go-kart clutches suit 3 to 8 horsepower engines (Go Kart Supply), and centrifugal clutches have been replaced in cars by fluid couplings and torque converters (Wikipedia). Strong in twist once locked up; weak at low speed, because the torque it can pass falls quickly as speed drops. It is not meant to carry side loads: the drum runs on a bushing or bearing on the shaft.
- **adjustable**: yes, by changing parts rather than a knob: stronger springs or lighter shoes raise the engagement speed, weaker springs or heavier shoes lower it (follows from the balance of spring force and m x w^2 x r; LNCT lecture notes). Many off-the-shelf clutches are preset (Max-Torque (brand) engages at about 2,200 rpm; Go Kart Supply). The engine's idle speed must be set below the engagement speed (Michigan chainsaw rule; BLM).
- **play_and_precision**: not applicable for positioning: it slips while engaging, so it does not keep an exact angle between input and output. Once locked up there is no backlash between hub and drum. *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: it slides onto the end of the engine or motor shaft and is held by a bolt, key or set screws
- **materials**: Steel or cast hub and drum; sintered-metal or bonded friction-lined shoes (Max-Torque (brand) uses six sintered metal shoes; Go Kart Supply); music-wire or stainless-steel springs (stainless tolerates more heat; Go Kart Supply). The BYU compliant clutch was first milled from steel and is also offered as a 3D-printable model (BYU CMR on Printables). Printed demonstration models use PLA or similar with rubber bands as return springs (Printables model 982812).
- **maker_difficulty**: moderate: fitting an off-the-shelf go-kart or pulley clutch to a small engine is easy, and a printed demonstrator is easy to make, but a home-made clutch that carries real power is hard because the friction surfaces get hot and must be balanced and strong at speed

### Making it

- **processes**: 
  - off-the-shelf part: go-kart, mini-bike, pulley, chainsaw, scooter and industrial centrifugal clutches are cheap and widely sold
  - 3D print (FDM): demonstration models and light-duty spring-less compliant clutches (BYU CMR, Pinshape, Printables)
  - CNC: milled steel hubs, shoes and drums; the BYU FOA clutch was originally milled from steel (BYU CMR on Printables) *(unverified parts omitted)*
- **print_in_place**: no: printed versions are separate parts (a hub, a shoe piece and a drum, plus bearings) that are assembled; spring-less compliant designs avoid adding separate springs (BYU CMR: 'only two components' for hub and shoes; Pinshape model: shoe pulley, bell pulley and bearing bracket)
- **making_tips_3d_printing**: 1) Start from a spring-less compliant design, where the shoes are joined by thin flexible links that act as the springs, such as BYU's floating-opposing-arm (FOA) clutch: only two printed parts for the hub and shoes, works in either direction of rotation (BYU CMR on Printables). 2) Remember the physics: outward force = shoe mass x radius x (speed)^2, so heavier shoes or shoes further out engage at lower speed; the spring (or flexure) force sets the speed where engagement starts (LNCT lecture notes). 4) Hand-cranked demonstrators work at 'humanly possible' speeds and can use rubber bands as the return springs and 20 mm bore ball bearings to carry the shafts (Printables model 982812 by Mortal 2020). 5) Expect supports on some designs: the Pinshape spring-less clutch prints in about 8 hours with full supports (RONRAYSING on Pinshape). 6) Heat is the enemy: slipping makes heat, PLA softens above about 60 C and PETG is good to about 80 C (Prusa), so do not let a printed clutch slip for long under load; *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'centrifugal clutch' with bore size (5/8 in, 3/4 in, 1 in) and sprocket teeth and chain size (#35, #40/41, #420) for go-karts and mini-bikes (Max-Torque (brand), Hilliard (brand), Noram (brand), Comet (brand); Go Kart Supply); 'centrifugal pulley clutch' for belt drives (Go Kart Supply); 'clutch bushing' and 'clutch spring' spares; 'chainsaw clutch' and 'clutch drum' (rim or spur sprocket); scooter CVT 'clutch bell' and 'clutch shoes'; nitro RC car 'clutch shoes', 'clutch springs' and 'clutch bell'; industrial 'centrifugal clutches and brakes' (SUCO (brand), BLM Automatic Clutch (brand)). For compliant designs, the BYU FOA clutch is patented (US 6,736,249) and licensed through BYU (BYU CMR on Printables).
- **rules_of_thumb**: 
  - Torque capacity: each shoe presses on the drum with its centrifugal force minus the spring force, Pc - Ps, where Pc = m x w^2 x r and the spring is set so Ps = m x w1^2 x r (w1 = speed where engagement starts). Total torque T = n x mu x (Pc - Ps) x R, so torque rises with the square of speed above w1 (LNCT Group of Colleges, ME403 Unit 4 clutch notes).
  - In the textbook worked example, engagement begins at 3/4 of running speed, and a lining pressure of about 0.1 N/mm^2 is used 'to ensure reasonable life' when sizing the shoes (LNCT lecture notes).
  - Idle speed must be below engagement speed so the output stops at idle: Michigan's chainsaw rule requires that releasing the throttle drops idle below clutch engagement so the chain comes to a complete stop (Mich. Admin. Code R 408.13882). Go-kart engines idle at about 1,650 +/- 200 rpm (Go Kart Supply).
  - Typical go-kart clutch: starts to engage around 2,000 rpm and locks up around 2,600 rpm; suits 3 to 8 hp engines; gear about 1:6 between clutch sprocket and axle sprocket (e.g. 12 teeth to 72); wheels no taller than 15 in; kart plus driver no more than about 400 lb (Go Kart Supply).
  - Don't let it slip for long: drive at full throttle so it locks up; slipping 'causes tremendous heat' that dries the bushing and can anneal (soften) the spring (Go Kart Supply).
  - Spring heat limits quoted from the Spring Manufacturers Institute: music-wire springs about 250 F (121 C), 302 stainless-steel wire about 550 F (288 C) (Go Kart Supply).

### When to use it

- **everyday_examples**: 
  - Chainsaws and petrol string trimmers: the chain or line only moves when you squeeze the throttle (Wikipedia; BYU CMR on Printables)
  - Go-karts and mini-bikes: the kart sits still at idle and moves off as you press the accelerator (Wikipedia; Go Kart Supply)
  - Mopeds, automatic scooters and step-through motorcycles such as the Honda Super Cub (brand) (Wikipedia 'Motorcycle transmission')
  - Lawn mowers and fuel-powered model cars (Wikipedia)
- **when_to_use**: Use it when an engine or motor must start and idle without load, then pick up the load smoothly by itself as it speeds up: small petrol engines driving a chain, belt or blade (go-karts, mini-bikes, chainsaws, trimmers), and electric drives that need a soft, load-free start so a smaller motor can be used (SUCO). It also protects the engine from stalling when the output jams or is overloaded, since the slowing engine lets the clutch slip (Wikipedia; Go Kart Supply). Choose it when you want a single control (the throttle) and no clutch lever (Go Kart Supply).
- **when_not_to_use**: Avoid it when the drive must engage at low speed or hold a load at standstill (it cannot hold anything when stopped; use a dog clutch, a one-way clutch or a brake), when you need engine braking or to hold back a vehicle going downhill (it freewheels at idle; Wikipedia 'Motorcycle transmission'), when the load is heavy for the engine, such as big wheels, heavy riders or hills, because it will slip and overheat (use a torque converter, the belt-type variable-ratio drive Go Kart Supply recommends for bigger karts), or when you need a precise, fixed torque limit (use a ball-detent or friction slip clutch). For cars it has been replaced by fluid couplings, torque converters and automated manual gearboxes (Wikipedia).
- **environment_limits**: Heat is the main limit: long slipping overheats the shoes and drum, dries the oil-soaked bushing and can anneal the spring; shoes turning purple is a sign the clutch is ruined (Go Kart Supply); heat damage is not covered by warranty (BLM Automatic Clutch). Music-wire springs are rated to about 250 F and stainless to about 550 F (Go Kart Supply, citing the Spring Manufacturers Institute). Stainless springs don't rust (Go Kart Supply). Printed clutches: PLA softens above about 60 C and PETG is suitable below about 80 C (Prusa). Dirt and old lubricant in the bushing make it drag and can make it engage at idle (Go Kart Supply).
- **safety_notes**: If the idle speed is set too high the clutch engages at idle, so a kart can move off or a chain can run by itself: be ready to switch the engine off when starting (Go Kart Supply), and chainsaws must be set so the chain stops at idle (Michigan chainsaw rule). There is no engine braking at idle, so a kart or scooter can run away downhill (Wikipedia 'Motorcycle transmission'). The drum and guard get hot after slipping (Go Kart Supply). Spinning drums, chains and belts are pinch and entanglement hazards: keep guards on (Michigan chainsaw rule requires the clutch to be guarded). *(unverified parts omitted)*
- **common_failures**: 1) Slipping and overheating from driving slowly or with part throttle, stop-start use, riding the brake, bigger tyres, too much weight or the wrong gearing; it smells of burning lining and can end up ruined (Go Kart Supply; BLM). Fix: gear it correctly, keep weight down and use full throttle so it locks up. 2) Engages at idle because the idle speed is set too high or the springs are weak, worn or annealed by heat (BLM; Go Kart Supply). Fix: lower the idle with a tachometer, replace springs. 3) Won't engage because the engine can't reach the clutch's engagement speed (BLM). Fix: change the spring or the engine speed. 4) Worn or dry bushing between drum and shaft, from not oiling it (Go Kart Supply says oil it at least every two hours of driving) or from cleaning it with brake cleaner. 5) Chain and sprocket wear from wrong chain tension or misalignment (Go Kart Supply).
- **related**: 
  - Friction clutch (plate or cone clutch): engaged by a lever or pedal instead of by speed; can hold at any speed you choose
  - Torque converter / belt variable-ratio drive (CVT): used on bigger go-karts; also changes the gear ratio as speed rises (Go Kart Supply); scooters combine a CVT with a centrifugal clutch
  - Fluid coupling: an oil-filled automatic coupling that replaced centrifugal clutches in cars (Wikipedia)
  - Speed governor (fly fan, centrifugal governor): uses the same flung-out weights, but to keep speed steady instead of to connect a drive
  - Centrifugal brake: the same flyweights pressing on a fixed drum, used to limit speed, e.g. for descending loads or fire doors (SUCO)
  - Friction slip clutch: slips at a set torque regardless of speed; a centrifugal clutch's slip torque depends on speed
  - Dog clutch (claw clutch): teeth that lock with no slip, but must be engaged by hand and only at matched speed
  - Inertia-locking reel (seat-belt lock): uses a flung-out weight to catch ratchet teeth and lock, instead of to create friction

### Pictures, videos and models

- **links**: 
  - [CentrifugalClutch.jpg (Wikimedia Commons, by Fletcher6)](https://commons.wikimedia.org/wiki/File:CentrifugalClutch.jpg): Close-up photo of a chainsaw's centrifugal clutch: three shoes on a star-shaped hub, held in by coil springs, inside the drum *(licence: CC BY-SA 3.0)*
  - [Dry clutch02.JPG (Wikimedia Commons, by StNick at Bulgarian Wikipedia)](https://commons.wikimedia.org/wiki/File:Dry_clutch02.JPG): Photo of a Stihl (brand) three-shoe centrifugal clutch with numbered labels on the shoes, springs and hub *(licence: Public domain)*
  - [Centrifugal clutch 1 (Nguyen Duc Thang, YouTube)](https://www.youtube.com/watch?v=QpwWZloh-cw): 17-second CAD animation: sliders on the input shaft move outwards as speed rises and press on the inside of the output drum *(licence: link only)*
  - [3D Printed Compliant Centrifugal Clutch (BYU Compliant Mechanisms Research Group, YouTube)](https://www.youtube.com/watch?v=qANs9G38rzA): Video of BYU's printed spring-less floating-opposing-arm clutch (linked from the model's Printables page; title verified, video not reviewed) *(licence: link only)*
  - [US Patent 598314 detail centrifugal clutch.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:US_Patent_598314_detail_centrifugal_clutch.png): Drawing from an 1898 US patent for an electric car, highlighting its centrifugal clutch *(licence: Public domain)*
- **make_it_yourself**: 
  - [Compliant Centrifugal Clutch (BYU CMR, Printables)](https://www.printables.com/model/581039-compliant-centrifugal-clutch): Printable version of BYU's floating-opposing-arm clutch: two components, shoes joined by flexible segments so no springs are needed, works in either direction (details read via the Printables API) *(licence: Creative Commons Attribution-NonCommercial (as listed on Printables))*
  - [Centrifugal Clutch hand-cranked educational model (Mortal 2020, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/982812-centrifugal-clutch-hand-cranked-educational-model): Hand-cranked teaching model using 20 mm bore bearings, wooden supports and rubber bands as the return springs *(licence: Creative Commons Attribution-NonCommercial (as listed in the Printables API))*
  - [Two Way Rotation Spring-less Centrifugal Clutch (RONRAYSING, Pinshape)](https://pinshape.com/items/36916-3d-printed-two-way-rotation-spring-less-centrifugal-clutch): Printable spring-less clutch in three parts (shoe pulley, bell pulley, bearing bracket) that engages in either direction and freewheels when the motor stops; about 8 hours to print with supports *(licence: CC BY-SA (as listed on Pinshape))* *(unverified parts omitted)*
- **diagram_idea**: End-on view of a hub with three spring-held shoes inside a drum, shown at three speeds: idle (gap, drum still), engaging (shoes touching, arrows showing slip and heat) and locked up (drum turning with hub), with a small graph of torque rising with speed squared above the engagement speed.
- **sources**: 
  - https://en.wikipedia.org/wiki/Centrifugal_clutch
  - https://en.wikipedia.org/wiki/Motorcycle_transmission
  - https://commons.wikimedia.org/wiki/Category:Centrifugal_clutches
  - https://commons.wikimedia.org/wiki/File:CentrifugalClutch.jpg
  - https://commons.wikimedia.org/wiki/File:Dry_clutch02.JPG
  - https://commons.wikimedia.org/wiki/File:Talbot_%27Traffic_Clutch%27_automatic_centrifugal_clutch_(Autocar_Handbook,_13th_ed,_1935).jpg
  - https://commons.wikimedia.org/wiki/File:US_Patent_598314_detail_centrifugal_clutch.png
  - https://www.gokartsupply.com/clutches.htm
  - https://lnct.ac.in/wp-content/uploads/2020/04/ME403_Unit4_Clutches.pdf
  - https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-408-13882
  - https://www.centrifugalclutches.com/blog/centrifugal-clutches-common-problems-solutions/
  - https://www.suco.de/en/transmission-technology/centrifugal-clutches-and-brakes
  - https://scholarsarchive.byu.edu/etd/79/
  - https://www.printables.com/model/581039-compliant-centrifugal-clutch
  - https://api.printables.com/graphql/
  - https://pinshape.com/items/36916-3d-printed-two-way-rotation-spring-less-centrifugal-clutch
  - https://www.youtube.com/watch?v=QpwWZloh-cw
  - https://www.youtube.com/watch?v=qANs9G38rzA
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Other info

- **Fields with unverified parts:** input_output, make_it_yourself, making_tips_3d_printing, play_and_precision, processes, safety_notes, seal

## 190 Spline shaft (sliding spline)

*clutches & couplings.* A shaft with lengthwise ridges fitting a matching hub, passing turning force while letting the hub slide along the shaft

*Also covers:* Also covers hex shafts and LEGO-style cross axles

### What it is

- **plain_name**: A shaft with ridges running along its length (or simply a six-sided or cross-shaped shaft) that fits into a hole of the same shape, so a gear, wheel or sleeve on it must turn with the shaft but can still slide along it
- **term**: Spline shaft (splined shaft and hub; sliding spline or slip spline when the hub is meant to slide)
- **aliases**: 
  - splined shaft / spline shaft; splined hub or spline bushing (the matching part with the grooves inside)
  - sliding spline, slip spline, slip joint, slip yoke (the sliding spline in a vehicle drive shaft)
  - spline coupling / splined coupling
  - involute spline (curved gear-like teeth, standards ISO 4156, ANSI B92.1, DIN 5480)
  - straight-sided spline / parallel-key spline / parallel spline (standard ISO 14)
  - serrations / serrated shaft (small fine V-shaped teeth, e.g. knob shafts and servo outputs)
  - helical spline (grooves that spiral round the shaft)
  - ball spline / rotary ball spline (balls roll in the grooves for low-friction sliding under torque)
  - hex shaft / hexagonal shaft (a six-sided shaft in a hex bore, the simplest spline for robots)
  - rounded hex shaft ('ThunderHex' (brand) in FRC robotics), MAXSpline (brand, REV Robotics)
  - cross axle / Technic axle (LEGO Technic (brand) cross-shaped axle and 'axle hole')
  - master spline / blind spline (one wider tooth so the part fits only one way round)
  - Keilwelle, Zahnwelle (German); 花键轴 (Chinese)
- **family**: clutches & couplings
- **other_families**: sliding, telescoping & linear motion, locating & alignment
- **one_liner**: A shaft with lengthwise ridges or flat sides that fits a hub with a matching hole, so turning force passes between them while the hub stays free to slide along the shaft.
- **complexity**: A few parts: the splined, hex or cross-shaped shaft (external spline); the hub, gear, sleeve or yoke with the matching hole (internal spline); and usually something to hold the hub in place along the shaft when it should not slide (shaft collar, retaining ring (circlip) or set screw). The rolling version (ball spline) adds a nut full of recirculating balls.
- **how_it_works**: The ridges (teeth) on the shaft sit in matching grooves in the hub, so when the shaft turns, the sides of the teeth push on each other and the hub must turn too; this is a shape lock (form fit), not friction. Because the teeth run along the shaft, nothing stops the hub sliding lengthwise, so a spline can pass turning force while a drive shaft changes length or a gear or clutch ring slides into a new position (Wikipedia 'Spline (mechanical)'). Many teeth share the load, so a spline carries much more turning force for its size than a single key in a keyway. A hex shaft in a hex hole or a LEGO cross axle in a cross hole works the same way with fewer, flatter 'teeth'.

### Finder attributes

- **job**: 
  - join and hold: locks a gear, wheel, pulley, lever or coupling to a shaft so they turn together (Wikipedia; Slocum)
  - let it move (turn, slide or bend): lets a part slide along a turning shaft, e.g. a drive shaft that changes length as suspension moves, a sliding gear or dog-clutch ring, or a clutch disc that must move to engage (Wikipedia; Tom Wood's Custom Drive Shafts; Thang 'Friction clutch 3')
  - line parts up exactly: keeps two parts at a fixed angle to each other (angular correspondence); a master spline or a keyed shape lets the part go on only one way round (Wikipedia)
- **motion**: rotate+slide: the hub and shaft always turn together, but the hub (or the inner half of a telescoping shaft) can slide along the shaft, as far as the splined length allows
- **degrees_of_freedom**: 1 when free to slide: the hub can only move along the shaft; turning relative to the shaft is blocked apart from a little play (backlash). 0 when the hub is clamped or held by a collar or retaining ring.
- **special_behaviour**: 
  - self-aligning or self-centring: on involute side-fit splines the sloping tooth faces push the hub to the centre of the shaft when torque is applied (Gear Solutions, 'A Brief Overview of Splines')
  - none of the other listed behaviours: it doesn't slip, click or lock one way; its trick is carrying turning force while still letting the hub slide
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the teeth or flats of the shaft sit in the matching grooves of the hub, so turning force passes by the tooth sides pushing on each other
  - not a holding joint (it moves or passes on motion): along the shaft it holds nothing on its own; a collar, retaining ring, set screw or clamp is needed if the hub must not slide
- **input_output**: Rotation in -> the same rotation out (1:1) in line on one axis, while also allowing a sliding (plunging) movement along the axis. Linear Motion Tips). Back-drivable: yes, it drives both ways and in both directions of turning. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: the hub slides off the end of the shaft once any collar, retaining ring or set screw is removed; tight or corroded vehicle splines may need a puller
- **reuse_cycles**: many times: it can be slid on and off repeatedly; plastic bores (printed or LEGO) loosen with repeated fitting (Pololu warns that repeated removal of its tight-fitting hex adapter may loosen the connection)
- **tools_needed**: None to slide it on and off; hex keys or circlip pliers for the collar or retaining ring that holds the hub along the shaft. Making true splines needs a hob, gear shaper, broach or milling machine (Wikipedia; RoyMech), which is why makers usually buy splined or hex shaft and hubs, broach or print hex holes, or 3D print the spline.
- **load**: Heavy for its size in twist: many teeth share the load, so it carries significantly more torque for its size than a keyed joint and has a longer fatigue life (Wikipedia); RoyMech's worked example needs a key 70 mm long but a spline only 10 to 25 mm long for the same job. No hold at all along the shaft (it slides), and bending and sideways loads must be carried by the shaft and its bearings, not the spline. Plastic bores are weak: printed hex bores wear round under high or reversing torque (FRCDesign; Chief Delphi).
- **adjustable**: yes: the hub can be fixed anywhere along the splined length (with a collar or clamp), and its angle can be changed in steps of one tooth by sliding it off and back on; not adjustable when a master spline allows only one angle
- **play_and_precision**: Small play: sliding (side-fit) splines need a little clearance between the teeth, which shows up as backlash in both turning directions; Slocum warns that a clutch plate sliding on a spline brings backlash, so it is not suited to precision drives. Major-diameter-fit splines centre the hub more accurately on its outside diameter, while side-fit splines centre themselves under load (Gear Solutions). Repeatability of angle: exact to one tooth pitch. Misalignment: very little in plain splines; crowned splines are shaped to tolerate some angle (Wikipedia). Hex and cross shafts in printed or moulded holes have noticeable play unless tightly fitted.
- **access_needed**: end of a tube or shaft: the hub has to be slid on from the end of the shaft
- **materials**: Steel (often hardened) for vehicle, machine and aerospace splines; steel or aluminium hex shaft (FRC and FTC robotics, 1/2 in, 3/8 in and 5 mm across the flats); stainless and PTFE-coated sleeve splines for wet or dirty places (McMaster-Carr); moulded plastic for LEGO Technic cross axles; 3D-printed PLA, PETG, nylon or Onyx for maker hubs and splines, often with a metal hex insert or pressed-in hex tube to stop wear (FRCDesign; Chief Delphi).
- **maker_difficulty**: easy for hex shafts and LEGO-style cross axles: buy hex shaft or LEGO axles and print or broach the matching hole; moderate for true involute or straight-sided splines: they print well but need tuning of clearance and print orientation, and machining them needs special tools, so buy a splined shaft and hub for heavy loads

### Making it

- **processes**: 
  - 3D print (FDM): hex bores, cross (LEGO) holes and splines in gears, pulleys and adapters; printed hex shafts and splined shafts for light loads
  - CNC: broached hex holes, milled or hobbed splines, turned round sections on hex shaft for bearings (Slocum; Wikipedia)
  - laser cut: hex or cross holes cut in plates that are stacked or pressed into printed parts (Chief Delphi team using laser-cut aluminium plates as hex inserts)
  - off-the-shelf part: spline shafts and splined hubs, ball splines, hex shaft and hex-bore gears, bearings and collars, LEGO Technic axles and gears *(unverified parts omitted)*
- **print_in_place**: no: the shaft and the hub are separate parts printed apart and slid together (a printed spline shaft can be printed in one piece, but it is not an assembly)
- **making_tips_3d_printing**: 1) Clearance: start with about 0.5 mm total clearance for FDM parts that fit into each other and about 0.2 mm for resin (Hubs); FRCDesign suggests 0.1 to 0.5 mm depending on the fit wanted, and warns that holes print smaller than drawn. For a sliding fit aim for the loose end; for a fixed fit go tighter: the Dominator-Parts printed spline joint had play at 0.15 mm clearance and was reduced to 0.05 mm (Dominator-Parts README). Print a short test piece first (e.g. the SplineXS tolerance test on Printables). 2) Print orientation of shafts: a printed shaft stood upright tends to snap between layers where it steps down in size, because the layers lie across the shaft; print shafts lying down so the layers run along them. The Dominator-Parts shafts are printed as two flat halves glued together, and the Tarmo 4 RC drive shaft was changed to a hex shape printed lying flat, which its designer found carried clearly more torque even in PLA. A hex shape prints lying on a flat face with no supports, which is one reason printed shafts are often hexagonal (Tarmo 4 model notes). 4) Stop printed bores wearing round: use extra walls (5 to 6 perimeters) or solid material around the bore, dry filament and a slightly tight fit, or better, press in a metal hex insert or a piece of hex tube; high torque from a hex shaft, especially rounded hex, turns a printed hex hole round (FRCDesign; Chief Delphi thread 'Onyx 3D printed gears - hex wear'). 5) Material: PETG or nylon over PLA for parts that take shock or get warm; PLA softens above about 60 °C and breaks into shards on impact (Prusa). 6) LEGO-compatible holes: LEGO gives Technic holes as 4.9 mm while LDraw models use 4.8 mm, so printed parts from LDraw files are very tight; scale slightly to get the grip you want, and avoid thin fragile features in the axle hole (LDraw forum). 7) For sliding under load, keep the teeth long, lubricate them, and if friction is still too high use a ball spline or a plunging CV joint instead (NTN). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'spline shaft' / 'splined shaft' and 'splined hub' or 'spline bushing' (McMaster-Carr lists fully parallel splined, partially parallel splined and fully involute splined rotary shafts); 'ball spline' or 'rotary ball spline' (low-friction sliding, e.g. THK (brand)); 'sleeve spline' (PTFE-coated, for wet or dirty places); 'involute spline shaft' with the standard (ISO 4156, ANSI B92.1, DIN 5480); 'hex shaft' (1/2 in or 3/8 in for FRC, 5 mm for FTC, 3 mm on Tamiya (brand) hobby gearboxes), 'rounded hex shaft', 'hex bore bearing', 'hex bore gear', 'hex shaft collar'; 'D-shaft' with set screw hubs as the cheaper alternative; LEGO Technic (brand) 'axle' in lengths 2M, 3M, 4M and so on; adapters such as Pololu's '3mm hexagonal shaft adapter for LEGO wheels' and Adafruit's 'TT motor to LEGO cross axle adapter'; drive shaft 'slip yoke'; 'retaining ring' (circlip) and 'shaft collar' to hold hubs in place.
- **rules_of_thumb**: 
  - A spline carries significantly more torque for its size than a key and keyway and has a longer fatigue life (Wikipedia 'Spline (mechanical)'). In RoyMech's worked example for a 25 mm shaft carrying about 64 N·m (10 kW at 1500 rpm), a key needed to be 70 mm long, a six-tooth straight-sided spline 25 mm long and a module-1, 24-tooth involute spline only 10 mm long, each with a safety factor of roughly 2.3 to 3.5 (RoyMech 'Key/Spline Strength Calculations').
  - Quick first sizing of an ISO involute spline: pitch diameter = outside diameter minus one module, and number of teeth = pitch diameter / module; e.g. a 50 mm spline with module 2 has a 48 mm pitch diameter and 24 teeth (RoyMech 'ISO Involute Spline').
  - Involute splines come in 30°, 37.5° and 45° pressure angles; 30° is by far the most common (Gear Solutions; RoyMech).
  - Side-fit splines have clearance at the top and bottom of the teeth and centre themselves under load through the sloping tooth faces; major-diameter-fit splines are centred by their outside diameters but may carry torque on only some teeth (Gear Solutions, 'A Brief Overview of Splines').
  - Sliding splines need lubrication: poor lubrication leads to wear and fretting corrosion, and ideally oil should flow through the splines to carry the wear particles away (Gear Solutions). RoyMech's calculations derate sliding splines with a wear factor (0.7 in its example).
  - Keep enough spline in engagement at full stretch: for vehicle drive shafts, at least 2 in (about 50 mm) of the slip yoke should stay engaged at all times, so usable travel = spline length minus 2 in (Tom Wood's Custom Drive Shafts).
  - For a robot or maker project, the simplest spline is a hex shaft through a broached hex hole, with parts of the shaft turned round to run in bearings (Slocum, FUNdaMENTALs of Design, Topic 5, PDF pp. 34 and 54); FRC robots use 1/2 in and 3/8 in hex measured across the flats, and rounded hex can run in round bearings (FRCDesign; gm0 Kit Glossary).
  - Printed hex bores wear round under high torque, especially on rounded hex; metal hex inserts or pressed-in hex tube fix it (FRCDesign 'Design for 3D Printing'; Chief Delphi).
  - 3D-print fit: about 0.5 mm clearance for FDM and 0.2 mm for resin interlocking parts (Hubs); 0.1 to 0.5 mm as a starting tolerance depending on the fit (FRCDesign).
  - A LEGO cross axle turns freely in a round hole but locks in a cross (axle) hole; axles are coloured by length, even lengths black and odd lengths grey (LEGO TECHNIC 101).
  - A master spline (one wider tooth or groove) makes the part fit only one way round, as on bicycle cassettes and some aircraft propellers (Wikipedia).
  - Conflicting advice on tooth shape: RoyMech says involute splines are stronger than straight-sided ones, while McMaster-Carr says straight-sided (parallel) teeth transmit more torque and involute teeth handle misalignment and reduce vibration and wear; for a maker either works, and the difference matters only in heavily loaded designs. *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - The drive shaft under a rear-wheel-drive car or truck, whose splined slip yoke slides in and out of the gearbox as the suspension moves (Tom Wood's Custom Drive Shafts; Wikipedia)
  - A tractor's telescoping power take-off (PTO) shaft, where one part of the shaft slides inside another (eXtension ag-safety PTO guidance)
  - A bicycle cassette sliding onto the splined freehub, with one wider groove so it fits only one way (Wikipedia)
  - LEGO Technic cross axles, which spin freely in round holes but grip gears and wheels with cross-shaped holes (LEGO TECHNIC 101)
- **when_to_use**: Use it when a gear, pulley, wheel, lever or coupling must be locked firmly to a shaft for turning force, especially if it also has to slide: a drive shaft whose length changes as a suspension or linkage moves, a telescoping drive, a gear or dog-clutch ring that slides into mesh, a clutch disc that must move to engage, or a sliding carriage driven from a turning shaft. It is also the neatest way to make parts that can be slid off and refitted at a set angle, like servo horns and knobs. For robots and maker projects, hex shaft with hex-bore gears, pulleys and bearings is the easy version: no keys, no set screws that loosen (Slocum). LEGO-style cross axles are ideal for quick, rebuildable mechanisms.
- **when_not_to_use**: Avoid a plain sliding spline when it must slide easily while carrying heavy torque (friction between loaded teeth makes it stick and judder); use a ball spline or a plunging CV joint instead (NTN; Linear Motion Tips). Don't rely on it to hold anything along the shaft: add a collar, retaining ring or clamp. For precise, backlash-free positioning use a clamping hub, a keyless locking bush, an interference fit or a Hirth joint (Slocum lists interference fits and circumferential clamps as alternatives). For low-cost light-duty drives a D-shaft with a set screw or a clamping collar is simpler, and a key and keyway is the usual industrial alternative when splines are too expensive (Slocum). For shafts that are not in line, add a universal joint or CV joint, or a flexible coupling.
- **environment_limits**: Metal splines need grease or oil; without it sliding splines wear and suffer fretting corrosion (Gear Solutions), and rusted splines can seize so they no longer slide. Dirt caught in the teeth speeds wear. Plastic parts: PLA softens above about 60 °C and PETG is rated to about 80 °C (Prusa), and printed hex or spline bores slowly creep and wear round under constant or reversing torque (Chief Delphi; FRCDesign). *(unverified parts omitted)*
- **safety_notes**: Rotating shafts can catch clothing, hair and loose cords and wrap a person round them; guard long exposed shafts (ag-safety PTO guidance). A telescoping shaft that pulls apart while turning can swing wildly and strike anyone nearby, so keep enough spline engaged and hold the ends in place (ag-safety; Tom Wood's). *(unverified parts omitted)*
- **common_failures**: 1) Wear and fretting of sliding splines, which grows play and roughness; lubricate and keep dirt out (Gear Solutions). 2) Sticking or juddering when sliding under load; lubricate, add engagement length, or use a ball spline or plunging CV joint (NTN). 3) Pulling apart when a telescoping shaft extends too far; keep the minimum engagement (about 2 in for vehicle drive shafts, Tom Wood's). 4) Cracks starting at the ends of the teeth or at sharp steps (Wikipedia); chamfer or run out the splines gradually. 5) Printed or aluminium hex bores 'wallowing out' into a round hole; use steel shafts, tight fits, thicker walls and metal inserts (Chief Delphi; FRCDesign). 6) Printed shafts snapping along layer lines when printed upright; print them lying down (Dominator-Parts README; Tarmo 4 model notes). 7) LEGO-style parts too tight to assemble or too loose to grip because of print size errors; scale and test (LDraw forum).
- **related**: 
  - Key and keyway (keyed shaft): a single square key carries the torque; cheaper and common in industry, but weaker for its size and gives no sliding under load (Wikipedia; Slocum)
  - D-shaft with set screw or clamping hub: cheap and common on hobby motors, but set screws loosen and mark the shaft (gm0; Slocum)
  - Servo horn and spline hub: a fine serrated spline on a hobby servo output, clamped by a screw so it doesn't slide
  - Hirth joint (face spline): teeth on the flat end faces instead of along the shaft, clamped together for a precise, play-free fixed joint
  - Ball spline: balls roll in the grooves so the hub slides easily even under high torque; used in SCARA robots (Linear Motion Tips)
  - Constant-velocity joint, plunging type (tripod or double-offset joint): allows angle and length change in one part with much less sliding friction than a slide spline (NTN)
  - Universal joint: joins shafts at an angle; drive shafts usually combine two universal joints with a sliding spline (Wikipedia)
  - Dog clutch (claw clutch): its sliding ring runs on a spline or hex section
  - Keyless locking bush (taper-lock bush): clamps a hub to a plain round shaft with no teeth, play-free, but does not slide
  - Lobed (polygon) shaft and hub, or an interference fit: other ways to lock a hub without keys (Slocum)
  - Telescoping tube with a slot and pin or a square tube: simpler non-round sliding joints for slow, light drives
  - LEGO Technic (brand) driving ring on a ridged axle joiner: a toy-scale sliding spline that slides along to engage or disengage functions (Technicopedia)

### Pictures, videos and models

- **links**: 
  - [Cardan-joint spline-shaft 3D animated.gif (Wikimedia Commons, by Silberwolf)](https://commons.wikimedia.org/wiki/File:Cardan-joint_spline-shaft_3D_animated.gif): Animated 3D view of a drive (cardan) shaft with a universal joint at each end and an exposed splined section in the middle where the shaft can change length *(licence: CC BY-SA 2.5)*
  - [Zahnwelle.jpg (Wikimedia Commons, by S. Wetzel)](https://commons.wikimedia.org/wiki/File:Zahnwelle.jpg): Cross-section drawings of spline shaft and hub with the three main tooth shapes: involute, straight-sided (parallel) and serrated (pointed) *(licence: CC BY-SA 4.0)*
  - [Spline-shaft.png (Wikimedia Commons, by Silberwolf)](https://commons.wikimedia.org/wiki/File:Spline-shaft.png): 3D view of a splined shaft and its matching hub, used in Wikipedia's 'Spline (mechanical)' article *(licence: CC BY-SA 2.5)*
  - [Cassetteandfreehub.jpg (Wikimedia Commons, by Rado bladteth Rzeznicki)](https://commons.wikimedia.org/wiki/File:Cassetteandfreehub.jpg): Photo of a bicycle cassette and the splined freehub it slides onto, with the wider master spline visible *(licence: Public domain)*
  - [Spline Shafts 101 — All You Need to Know (Grob, Inc., YouTube)](https://www.youtube.com/watch?v=AOAUTCEj6r0): Explainer video from a spline-making company on what spline shafts are and where they are used *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [HUANGYAN920 Mechanical: 'SPLINE-COUPLING' (渐开线花键联轴, no. 167) and 'BALL-SPLINE' (滚珠花键, no. 187)](https://huangyan920.github.io/Mechanical/): Interactive, adjustable browser animations of an involute spline coupling that passes torque while sliding, and of a ball spline *(licence: MIT)*
  - [Tarmo 4 Drive shaft upgrade (Pilote NEXUS, Printables)](https://www.printables.com/model/994638-tarmo-4-drive-shaft-upgrade): A hexagonal RC-car drive shaft redesigned to print lying flat with 10 perimeters and no supports; the designer reports much higher torque than the original even in PLA (details read via the Printables API) *(licence: CC BY)*
  - [FRC 20DP Gears - 1/2" HEX Bore (ultimate_hecker, Printables)](https://www.printables.com/model/964317-frc-20dp-gears-12-hex-bore): Printable robot gears with 1/2 in hex bores and extra tolerance for common printers, for light and medium loads (details read via the Printables API) *(licence: CC BY-NC)*
  - [SplineXS (WCP-1021) Tolerance Test MM (Denbot, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1126509-splinexs-wcp-1021-tolerance-test-mm): A tolerance test print for fitting printed parts onto a small robot-motor spline *(licence: CC BY-NC)*
  - [PTO shaft (Radek Š., Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/355826-pto-shaft): Printable PLA teaching model of a propeller (PTO) shaft *(licence: CC BY)*
  - [Driveshaft #4 Unimog RC edition (Prism08, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/678504-driveshaft-4-unimog-rc-edition): Printed RC drive shaft with two universal joints and a sliding yoke that lets it change length between 57 and 59 mm as the suspension moves, with about 25° of angle *(licence: CC BY-NC)*
  - [Lego Compatible (3706.dat) Technic Axle 6L (thall72, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/365395-lego-compatible-3706dat-technic-axle-6l): Printable LEGO-compatible cross axle, part of a series of printable Technic axles in many lengths *(licence: CC Public Domain)* *(unverified parts omitted)*
- **diagram_idea**: A cut-away of a splined shaft and hub: first an end view showing the teeth locked in the grooves with arrows showing turning force passing across the tooth sides, then a side view with the hub sliding along the shaft, followed by small end-view thumbnails comparing a straight-sided spline, an involute spline, a hex shaft and a LEGO cross axle.
- **sources**: 
  - https://en.wikipedia.org/wiki/Spline_(mechanical)
  - https://commons.wikimedia.org/wiki/Category:Spline_shafts
  - https://commons.wikimedia.org/wiki/File:Cardan-joint_spline-shaft_3D_animated.gif
  - https://commons.wikimedia.org/wiki/File:Zahnwelle.jpg
  - https://commons.wikimedia.org/wiki/File:Spline-shaft.png
  - https://commons.wikimedia.org/wiki/File:Cassetteandfreehub.jpg
  - https://www.youtube.com/watch?v=AOAUTCEj6r0
  - https://roymech.org/Useful_Tables/Keyways/Splines_Inv.html
  - https://roymech.org/Useful_Tables/Keyways/key_strength.html
  - https://gearsolutions.com/departments/tooth-tips-a-brief-overview-of-splines/
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
  - https://www.mcmaster.com/products/spline-shafts/
  - https://www.linearmotiontips.com/what-are-ball-splines/
  - https://www.ntnglobal.com/en/products/catalog/pdf/5603E.pdf
  - https://4xshaft.com/blogs/faq/how-much-of-my-spline-should-be-showing
  - https://ag-safety.extension.org/power-take-off-safety/
  - https://gm0.org/en/latest/docs/hardware-components/kit-and-hardware-guide/kit-glossary.html
  - https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/shaft-retention.html
  - https://frcdesign.org/learning-course/stage1/1b/shafts-bearings/
  - https://frcdesign.org/design-handbook/structure/design-for-3d-printing/
  - https://www.chiefdelphi.com/t/onyx-3d-printed-gears-hex-wear/395167
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://medesign.seas.upenn.edu/uploads/Courses/TECHNIC_101.pdf
  - https://www.technicopedia.com/fundamentals.html
  - https://forums.ldraw.org/thread-28663.html
  - https://www.pololu.com/product/1011
  - https://www.adafruit.com/product/3810
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/master/README.md
  - https://raw.githubusercontent.com/sweetlilmre/Dominator-Parts/main/README.md
  - https://www.printables.com/model/994638-tarmo-4-drive-shaft-upgrade
  - https://www.printables.com/model/964317-frc-20dp-gears-12-hex-bore
  - https://api.printables.com/graphql/
  - https://cs448m.github.io/lectures/machines/doc/1.pdf

### Other info

- **Fields with unverified parts:** environment_limits, input_output, make_it_yourself, making_tips_3d_printing, processes, rules_of_thumb, safety_notes, seal

## 191 Constant-velocity joint (CV joint)

*clutches & couplings.* A joint that drives a shaft at an angle without the speed wobble of a simple universal joint, using balls in curved tracks

### What it is

- **plain_name**: A bendy joint for a spinning shaft, usually a ball-shaped joint with steel balls rolling in curved grooves, that passes turning force round a bend while keeping the output turning perfectly smoothly, with none of the speeding up and slowing down a simple cross-type universal joint gives
- **term**: Constant-velocity joint (CV joint, homokinetic joint)
- **aliases**: 
  - CV joint; CV axle or half-shaft (a drive shaft with a CV joint at each end); CV boot or CV gaiter (its rubber cover)
  - homokinetic joint; Gleichlaufgelenk (German); 等速万向节, 球笼万向节 (Chinese)
  - Rzeppa joint (six balls in a cage between two grooved ball-shaped races)
  - Birfield joint (a Rzeppa with offset tracks, the common outer joint on cars); ball fixed joint / BJ, EBJ (NTN (brand) names)
  - fixed CV joint (outboard or wheel-side joint, large angle) and plunging or sliding CV joint (inboard, also lets the shaft change length)
  - tripod joint / tripode joint (three rollers on a three-pointed spider in a three-groove cup; a plunging joint)
  - double offset joint (DOJ) and cross-groove joint (plunging ball joints)
  - Weiss joint / Bendix-Weiss joint (four balls in crossed grooves, no cage)
  - Tracta joint (two interlocking swivels, used on 1920s-30s front-wheel-drive cars)
  - double Cardan joint (two universal joints back to back; constant speed only when both angles are equal)
  - Thompson coupling (two Cardan joints nested inside each other with a control yoke)
  - CVD / 'CV-style driveshaft' (RC car term; a universal-joint variant, not a true CV joint, per RC Car Action)
  - LEGO Technic (brand) 'steering / CV joint' parts
- **family**: clutches & couplings
- **other_families**: sliding, telescoping & linear motion
- **one_liner**: A joint between two spinning shafts that lets them meet at an angle, even a changing one, while the output shaft turns at exactly the same speed as the input at every moment of each turn.
- **complexity**: A small assembly that acts as one unit. Rzeppa (ball) type: an inner race (a grooved ball fixed to one shaft), an outer race or cup (a grooved bowl on the other shaft), usually six steel balls, a cage with windows that holds the balls, grease, and a rubber boot with clamps. Tripod type: a three-pointed spider with three barrel-shaped rollers, a cup with three straight grooves, grease and a boot.
- **how_it_works**: In a simple cross-type universal joint the output speeds up and slows down twice each turn when the shafts are at an angle. A CV joint avoids this because the parts that carry the drive (the balls) are always kept in the plane that exactly halves the angle between the two shafts (the bisecting or homokinetic plane), so the geometry looks the same from both shafts and their speeds stay equal (Wikipedia; Thang's 'Rzeppa joint 1' and 'Birfield joint 1'). In a Rzeppa joint the balls sit half in grooves on the inner ball and half in grooves in the outer bowl, and a cage keeps them in that halfway plane as the joint bends. A tripod joint's rollers slide in straight grooves instead, so it also lets the shaft slide in and out (plunge), though over a smaller angle (Wikipedia).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): passes rotation from one shaft to another at an angle that can change while it turns, e.g. to a steered, bouncing car wheel (Wikipedia)
  - let it move (turn, slide or bend): plunging types (tripod, double-offset) also let the shaft change length, replacing a separate sliding spline (NTN catalogue)
- **motion**: rotate: continuous rotation passed through an angle; the shafts can swivel relative to each other up to about 45-48° (Rzeppa or Birfield fixed joints, some to 54°) or about 20-26° for plunging joints, which also slide in and out about 50 mm (rotate+slide) (Wikipedia; NTN)
- **degrees_of_freedom**: Fixed CV joint: 2 (the output shaft can tilt in any direction, up and down or side to side), while turning is locked so both shafts rotate together at the same speed. Plunging CV joint: 3 (the same two tilts plus sliding in and out along the shaft).
- **special_behaviour**: 
  - self-aligning or self-centring: the cage or track geometry automatically keeps the balls in the plane halfway between the two shafts as the angle changes, which is what makes the speed constant (Wikipedia; Thang)
  - none of the other listed behaviours: it doesn't slip, lock or index; its special trick is constant output speed through a bend
- **holding_principle**: 
  - shape (the parts interlock; form-fit): turning force passes from the grooves of one race through the balls (or rollers) to the grooves of the other
  - not a holding joint (it moves or passes on motion): it is a drive joint, free to bend and, in plunging types, to slide
- **input_output**: Continuous rotation in -> continuous rotation out at the same speed (1:1) with no speed ripple, between shafts that intersect at an angle of 0° up to about 45-48° for fixed ball joints or about 20-26° for plunging joints (Wikipedia; NTN). NTN reports newer ball joints cut the torque loss of older designs by 30 to over 50% (NTN Technical Review 89). Back-drivable: yes, it drives equally well in either direction and from either shaft. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: the joint is usually pushed onto a splined shaft and held by a circlip, and the outer joint's shaft is held by the wheel-bearing nut (Wikipedia), so it can be taken off and refitted; the joint itself is normally replaced as a unit rather than rebuilt (YourMechanic: most CV joints are not serviceable)
- **reuse_cycles**: many times: the joint can be removed from and refitted to its shaft repeatedly; opening the joint itself (balls, cage) is done only occasionally, for cleaning and regreasing
- **tools_needed**: Circlip (retaining ring) pliers, boot-band (clamp) pliers, spanners or sockets for the axle nut or flange bolts, and CV-joint grease. Printed joints: files, a drill bit to clean the tracks, and sometimes glue for printed ball halves (Printables LCD-knob and mini Rzeppa notes).
- **seal**: dust-resistant: the joint is not sealed itself, but a flexible rubber boot (CV boot or gaiter) with clamps covers it to keep dirt and water out and grease in (Wikipedia); NTN says its boot-sealed industrial joints can be used where water splashes, humidity and dust occur, while its open disc-type joints are not fully sealed
- **load**: Heavy in twist: car CV joints carry full engine torque to the front wheels (Wikipedia). The torque it can carry for a given life falls as the working angle rises (NTN uses an operating-angle factor in its life calculation). Fixed joints also hold the two shafts together along their length; plunging joints carry no pull or push along the shaft, they slide. *(unverified parts omitted)*
- **adjustable**: no: nothing is adjusted after assembly; plunging types take up changes in length automatically
- **play_and_precision**: Small or no play: CV joints work 'without an appreciable increase in friction or backlash' (Wikipedia), and the Weiss joint uses two of its four balls to preload the joint so there is no backlash when the load reverses. Angle following is exact (constant velocity), unlike a single universal joint, which gives a small cyclic position error (Slocum). Misalignment tolerance: large angles, from about 5° for NTN coupling-type joints (which also take 3.5-11.5 mm of sideways offset) up to about 45-48° for fixed ball joints; plunging types also take length change (NTN; Wikipedia). A single fixed joint cannot take sideways offset between parallel shafts; that needs a joint at each end of a shaft.
- **access_needed**: end of a tube or shaft: each half fits onto the end of a shaft, usually on a spline with a circlip or a bolted flange
- **materials**: Hardened steel races, cage and balls (NTN changed its outer races from carburised steel to induction-hardened medium-carbon steel), packed with CV-joint grease (molybdenum disulfide grease per Wikipedia; NTN moved from lithium-based to urea-based grease for longer life), under a rubber boot. Maker and RC versions: PLA or PETG printed races and cage with steel balls (about 3 mm in a 15 mm printed Rzeppa, about 6 mm in Tarmo5-style RC joints), or printed balls for light demonstrators (Printables model notes).
- **maker_difficulty**: hard: the curved ball tracks and the cage must be accurate and smooth, so a load-carrying joint is best bought (from a car, RC or industrial supplier); a working demonstrator or light-duty joint can be printed with steel balls, but needs fine layers, careful clean-up and patience to assemble

### Making it

- **processes**: 
  - 3D print (FDM): demonstration joints, LCD and panel knobs, fischertechnik and LEGO-compatible joints, and RC-car CV joints with steel balls (Printables models)
  - off-the-shelf part: car CV joints and axles, RC-car CVD drive shafts, LEGO Technic CV joints, industrial CV joint shafts (NTN) *(unverified parts omitted)*
- **print_in_place**: no: working printed CV joints are printed as separate races, cage and balls and then assembled, often with steel balls; print-in-place 'angular joints' exist but the one checked turned out not to be constant-velocity (Printables 'Print in place angular joint for fischertechnik' note)
- **making_tips_3d_printing**: 1) Use real steel balls where you can: printed balls work in a demonstrator, but the Printables CV LCD-knob designer notes 8 mm steel balls 'roll much better' than printed ones; the 15 mm mini Rzeppa for fischertechnik uses six 3 mm steel balls, and Tarmo5-derived RC CV joints use 6 mm steel balls. 2) Print fine and solid: the mini Rzeppa is printed at 0.12 mm layers or less with 100% infill and a brim if needed, and its tracks are cleaned out with a 3 mm drill, round and flat files and a small ball-shaped rotary file so the balls run freely. 3) The cage is the weakest part: print it in PETG at a high temperature for strength, and when assembling always push it from the outside rather than pulling from inside a hole, or it can break between two windows (mini Rzeppa notes). 4) Clearance: a University of Wisconsin-Madison student project found its first printed Tracta joint had interference at critical dimensions and sliding was stiff because of rough layer lines; they filed the parts and planned more clearance and different print orientations for the next build (UW-Madison ME 514 blog). Print-in-place designs use gaps of about 0.15 to 0.25 mm and fail if the printer over-extrudes (Printables fischertechnik angular joint). 5) Smooth and grease the sliding spheres: sand the spherical surfaces lightly and add a little grease for smoother running (CV LCD-knob notes). If the fit is loose or tight, scale the balls slightly up or down (same notes). 6) Assembly trick: turn the inner race 90° to the cage and feed it in through a cage window, then turn it back; do the same to put the cage into the outer race; then tilt the joint to drop each ball into its track through the cage window (CV LCD-knob notes). 7) Check the design really is constant-velocity: the balls must stay in the halfway plane; a nearby print-in-place angular joint was found not to be CV after a comment (Printables). 8) For RC or robot drives, make the joint's connection to the shaft or wheel strong; one Tarmo 5 builder kept stripping hex connections in plastic and switched to a square drive (Printables 'Rim and Rear CV joint for TARMO 5'). Add a guard to keep dirt out (the Cramer truggy remix adds mudguards for its CV joints). 9) Material: PETG or nylon rather than PLA for anything that gets warm or takes shocks; PLA softens above about 60 °C (Prusa).
- **off_the_shelf_parts**: Search for: 'CV joint', 'CV axle' or 'half shaft' (car parts, sold as inner and outer joints with 'CV boot kit' and 'CV joint grease'); 'Rzeppa joint', 'Birfield joint', 'tripod joint' or 'tripode joint', 'double offset joint (DOJ)', 'cross groove joint'; industrial 'constant velocity joint shafts' (NTN (brand) fixed disc, fixed cup, sliding and coupling types); RC 'CVD drive shaft' or 'universal driveshaft' (note: not true CV); 'double Cardan joint'; LEGO Technic (brand) 'steering CV joint'; steel balls (e.g. 3 mm or 6 mm 'steel ball bearings' / 'loose balls') for printed joints; boot clamps ('CV boot clamp', 'ear clamp').
- **rules_of_thumb**: 
  - Typical Rzeppa (ball) joints allow 45° to 48° of bend, and some special ones 54° (Wikipedia, citing NTN Technical Review 75); NTN's own fixed ball joints went from 42.5° (BJ) to 46.5° (BJ-L), with high-angle versions of 50° and 52° (NTN Technical Review 89).
  - A typical tripod (plunging) joint has up to 50 mm of plunge and 26° of angle; it is cheaper and more efficient than ball joints but has less angle, so it is used at the gearbox end of front-wheel-drive shafts (Wikipedia, citing GKN).
  - NTN industrial CV joints: fixed cup type up to 42° for the bare joint, but only 25° while turning and 38° standing still once a boot is fitted; fixed disc type 14° to 18°; sliding (plunging) type 20° for small sizes and 8° to 10° for large ones; coupling type 5°, with 3.5 to 11.5 mm of sideways offset on short-shaft versions (NTN catalogue 5603E). The allowed angle is limited by the boot and the speed, not just the joint.
  - Plunging CV joints slide by the balls rolling, so their sliding friction under torque is much lower than that of a sliding spline shaft, and they can absorb end-to-end vibration (NTN catalogue 5603E, 'Sliding Type').
  - Why it matters: in a single universal joint the output-to-input speed ratio swings between cos(angle) and 1/cos(angle) twice per turn (Wikipedia 'Universal joint' formula); at 30° that is roughly 0.87 to 1.15 times the input speed. A CV joint keeps the ratio at 1.
  - A double Cardan joint (two universal joints back to back) gives constant speed only if both joint angles are equal; to be truly constant-velocity it needs a centring element (Wikipedia).
  - Real 'nearly CV' designs still have small errors: in Thang's simulations his Rzeppa model's output speed varied by up to 1.5% at 30° and his tripod model by up to 3.4% at 15° (Nguyen Duc Thang, 2700 Animated Mechanical Mechanisms, Part 1, p. 10).
  - Always keep the joint covered and greased: a CV joint is usually lubricated with molybdenum disulfide grease under a rubber boot, and cracks in the boot let dirt in so the joint wears quickly or fails (Wikipedia; YourMechanic).
  - Put fixed CV joints where the angle is largest (the steered wheel end) and plunging joints where the shaft must change length (the gearbox end) (NTN Technical Review 89; Wikipedia).

### When to use it

- **everyday_examples**: 
  - The drive shafts to the front wheels of a front-wheel-drive car, visible behind the wheels as black ribbed rubber boots (Wikipedia; Wikimedia Commons photos)
  - Radio-controlled car drive shafts (though most RC 'CVDs' are really a universal-joint variant, per RC Car Action)
  - LEGO Technic steering CV joints in model cars with steered, driven wheels (Printables LEGO-compatible CV joint parts; Lego Technic Mastery video)
  - Drive shafts in industrial machines such as printing presses, rolling mills and tractor tillers (NTN catalogue applications list)
- **when_to_use**: Use it when a spinning shaft must drive something at an angle, especially a large or changing angle, and the output must turn smoothly: a steered and driven wheel on a robot or vehicle, a wheel on moving suspension, a drive that must bend round an obstacle, or a knob or control turned through an angle (the Printables CV LCD knob). It is the right choice when a single universal joint would cause vibration or jerky motion because the angle is more than a few degrees (Wikipedia). A plunging CV joint is a good choice when the shaft must also change length under torque, because it slides far more easily than a spline (NTN).
- **when_not_to_use**: For very small misalignment between nearly in-line shafts, use a flexible coupling (beam, jaw or Oldham) instead; it is simpler and has no play. For slow drives at small angles, a single universal joint is cheaper and easier to make; for larger angles a pair of universal joints (double Cardan) is easier to print and build than a ball-type CV joint (Printables educational double Cardan model). For a fixed 90° turn use bevel gears. For angles beyond about 45-50°, or bends round corners, use a flexible drive shaft or gears. Avoid ball-type CV joints in harsh, dirty places where the boot can be torn, unless it is protected; an all-metal universal joint inside a housing may be better there (Wikipedia).
- **environment_limits**: Dirt and water are the main enemies: the rubber boot keeps them out and grease in, but boots can crack from age, heat, chemicals or physical damage, after which the joint wears fast (Wikipedia; Commons 'Cracked CV boot' photo; YourMechanic). Boot durability also limits the speed and angle allowed (NTN). Grease type matters for life; NTN switched from lithium to urea grease for longer life. *(unverified parts omitted)*
- **safety_notes**: Spinning drive shafts and joints can catch clothing, hair or cords; keep them guarded (eXtension ag-safety PTO guidance on rotating drivelines). The free end of a plunging joint can slide off its splined shaft when handled, so support it (NTN caution). *(unverified parts omitted)*
- **common_failures**: 1) Torn or cracked boot, grease thrown out and dirt let in, leading to wear, play and a clicking noise when turning (Wikipedia; YourMechanic); inspect boots and replace them early. 2) Running beyond the allowed angle or speed, which damages the boot or makes the joint bind (NTN). 3) Plunging joint pulled apart or bottoming out when the shaft length changes more than it allows (NTN caution on the free side). 4) Printed joints: the cage cracks between windows during assembly (mini Rzeppa notes); parts too tight or rough to slide (UW-Madison); printed balls skid instead of rolling (CV LCD-knob notes); the shaft or wheel connection strips before the joint does (Tarmo 5 rim and CV remix). 5) A design that looks like a CV joint but isn't constant-velocity, which vibrates like a universal joint (Printables fischertechnik angular joint note).
- **related**: 
  - Universal joint (Hooke's or Cardan joint): simpler and strong, but the output speed wobbles twice per turn at an angle and it gets 'notchy' at large angles (Wikipedia)
  - Double Cardan joint: two universal joints back to back; constant speed if both angles are equal; common in steering columns and off-road drive shafts (Wikipedia)
  - Tracta joint: an early CV joint with two interlocking swivels (Wikipedia; Thang 'Tracta joint 1')
  - Weiss (Bendix-Weiss) joint: four balls in crossed grooves with no cage, preloaded for no backlash (Wikipedia)
  - Thompson coupling: two nested Cardan joints with a control yoke; needs at least about 2° of angle to avoid wear (Wikipedia)
  - Spline shaft (sliding spline): lets a drive shaft change length; plunging CV joints do this with far less friction (NTN)
  - Flexible beam, jaw and Oldham couplings: for small misalignment between nearly in-line shafts only
  - Bevel gears: turn drive through a fixed angle, usually 90°, and can change speed too
  - Flexible drive shaft (rotating cable): carries rotation round real bends, but twists under load
  - Ball-and-socket joint: moves in the same directions but passes no turning force
  - RC car dogbone and CVD drive shafts: cheap pin-in-slot or universal-joint variants that bind at extreme angles (RC Car Action)

### Pictures, videos and models

- **links**: 
  - [Simple CV Joint animated.gif (Wikimedia Commons, by Pwld)](https://commons.wikimedia.org/wiki/File:Simple_CV_Joint_animated.gif): Animation of a Rzeppa-type CV joint turning while bent, used at the top of Wikipedia's 'Constant-velocity joint' article *(licence: Public domain)*
  - [CV-Joint-WithTransparency.gif (Wikimedia Commons, by MichaelFrey, made in OpenSCAD)](https://commons.wikimedia.org/wiki/File:CV-Joint-WithTransparency.gif): Animation of a constant-velocity joint drawn partly transparent so the balls and inner parts can be seen *(licence: CC BY-SA 4.0)*
  - [Tripod half axle.png (Wikimedia Commons, by Martin Jediny)](https://commons.wikimedia.org/wiki/File:Tripod_half_axle.png): A tripod joint on a car half axle: the three-pointed spider with rollers on a splined shaft end *(licence: CC BY-SA 4.0)*
  - [2008-04-23 Cracked CV boot.jpg (Wikimedia Commons, by Ildar Sagdejev)](https://commons.wikimedia.org/wiki/File:2008-04-23_Cracked_CV_boot.jpg): Photo of a cracked rubber CV boot on a car axle, the most common start of CV joint failure *(licence: CC BY-SA 4.0)*
  - [Rzeppa joint 1 (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/6thw8xPt6ro): CAD animation of a Rzeppa joint running straight and then at 30°, showing how the balls stay in the halfway plane *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [HUANGYAN920 Mechanical: 'CV-JOINT' (球笼万向节机构, no. 93), 'TRIPOD-JOINT' (三销式等速节, no. 210) and 'BALL-FORK-JOINT' (球叉式等速节, no. 217)](https://huangyan920.github.io/Mechanical/): Interactive, adjustable browser animations of a ball-cage (Rzeppa-type) CV joint, a tripod joint and a ball-fork (Weiss-type) joint *(licence: MIT)*
  - [Constant Velocity Joint LCD-Knob (JBoe, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/243490-constant-velocity-joint-lcd-knob): A fully printable Rzeppa-style CV joint used as a 3D-printer display knob, with printed or 8 mm steel balls, step-by-step assembly instructions and print settings (0.15 mm layers, support only for the cage) *(licence: CC BY-NC)*
  - [Mini Rzeppa constant velocity joint for fischertechnik (juh, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/639420-mini-rzeppa-constant-velocity-joint-for-fischertec): A working 15 mm Rzeppa joint using six 3 mm steel balls, with detailed notes on fine printing, filing the tracks and handling the fragile cage *(licence: CC BY-NC-SA)*
  - [3D Printed RC car Tarmo5 (Engineering Nonsense, Printables)](https://www.printables.com/model/348623-3d-printed-rc-car-tarmo5): A mostly printed 40 mph RC car with printed CV joints (the design remixed in the Cramer truggy below, which uses 6 mm steel balls); build video at https://youtu.be/r2UDc4A8huY (details read via the Printables API) *(licence: CC BY-NC-SA)*
  - [Cramer RC Truggy - upgraded axle / driveshaft / CV joints (shane, Printables)](https://www.printables.com/model/512061-cramer-rc-truggy-upgraded-axle-driveshaft-cv-joint): Remix that swaps binding dogbone drive shafts for Tarmo5-style printed CV joints (PLA races and cages, 6 mm steel balls, TPU torque dampers); the builder reports less binding and no breakages so far (details read via the Printables API) *(licence: CC BY-NC)*
  - [Reproduction Constant velocity joint M.GECIK (NOP21, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/48771-reproduction-constant-velocity-joint-mgecik): Printed PLA reproduction of a linkage-type constant-velocity joint with 13 small bearings and M4 screws; video at https://www.youtube.com/watch?v=T3EsRXmOTlA *(licence: CC BY-NC-ND)*
  - [Educational Model of Double Cardan Universal Joint (osamutake, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1498409-educational-model-of-double-cardan-universal-joint): Printable teaching model of a double Cardan joint, the easier-to-print way to get constant speed at an angle, on an 80 x 80 mm base plate *(licence: CC BY)*
- **diagram_idea**: Side-by-side animation: a single universal joint and a Rzeppa CV joint both driven at a steady speed with the output bent to 30°, each with a pointer on the output shaft and a speed graph underneath (wavy for the universal joint, flat for the CV joint), plus a cut-away of the CV joint showing the balls staying in the plane that halves the angle.
- **sources**: 
  - https://en.wikipedia.org/wiki/Constant-velocity_joint
  - https://en.wikipedia.org/wiki/Universal_joint
  - https://commons.wikimedia.org/wiki/Category:Constant-velocity_joints
  - https://commons.wikimedia.org/wiki/File:Simple_CV_Joint_animated.gif
  - https://commons.wikimedia.org/wiki/File:CV-Joint-WithTransparency.gif
  - https://commons.wikimedia.org/wiki/File:Tripod_half_axle.png
  - https://commons.wikimedia.org/wiki/File:2008-04-23_Cracked_CV_boot.jpg
  - https://www.ntnglobal.com/en/products/catalog/pdf/5603E.pdf
  - https://www.ntnglobal.com/en//products/review/pdf/NTN_TR89_en_11.pdf
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://youtu.be/6thw8xPt6ro
  - https://youtu.be/U5TV5NC5YOg
  - https://youtu.be/OSTdCr-BcPc
  - https://youtu.be/IFQgH73W2Ao
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
  - https://www.yourmechanic.com/article/symptoms-of-a-bad-or-failing-cv-boot
  - https://www.rccaraction.com/drivetrains-driveshafts/
  - https://additive-mfg.me.wisc.edu/?p=968
  - https://additive-mfg.me.wisc.edu/?p=930
  - https://ag-safety.extension.org/power-take-off-safety/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/master/README.md
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/348623-3d-printed-rc-car-tarmo5
  - https://www.printables.com/model/512061-cramer-rc-truggy-upgraded-axle-driveshaft-cv-joint
  - https://www.printables.com/model/877966-rim-and-rear-cv-joint-for-tarmo-5-rc-car
  - https://www.youtube.com/watch?v=T3EsRXmOTlA
  - https://youtu.be/r2UDc4A8huY
  - https://www.youtube.com/watch?v=nYLRZBvCwPE

### Other info

- **Fields with unverified parts:** environment_limits, input_output, load, processes, safety_notes

## 192 Friction clutch (plate or cone clutch)

*clutches & couplings.* Friction surfaces pressed together to connect drive and pulled apart to disconnect it, able to slip gently while engaging

### What it is

- **plain_name**: Two grippy surfaces, flat discs or a cone in a cup, that a spring squeezes together so one spinning shaft drives the other, and that a lever or pedal pulls apart to disconnect the drive; letting them come together slowly lets them slip at first so the drive takes up smoothly
- **term**: Friction clutch (plate or disc clutch, cone clutch)
- **aliases**: 
  - clutch; engageable friction coupling
  - plate clutch / disc (disk) clutch; single-plate and multi-plate (multi-disc) clutch; clutch pack
  - dry clutch (car) and wet clutch (runs in oil, e.g. motorcycles)
  - cone clutch (cone and cup); synchroniser cone or synchro ring (the small cone clutch inside a manual gearbox)
  - basket clutch (motorcycle multi-plate clutch with a slotted basket)
  - clutch disc / friction disc / driven plate, pressure plate, diaphragm spring, release (throw-out) bearing (car clutch parts)
  - handwheel or 'stop-motion' clutch knob (sewing machine friction clutch)
  - Reibungskupplung, Kegelkupplung, Lamellenkupplung (German); 摩擦离合器 (Chinese)
- **family**: clutches & couplings
- **other_families**: torque limiting & slip, brakes, dampers & speed control
- **one_liner**: A clutch that connects a driving shaft to a driven shaft by pressing friction surfaces together and disconnects it by pulling them apart, and that can slip in between so the drive takes up gently.
- **complexity**: A small assembly that acts as one unit: a driving member (a flywheel, plate, cup or basket on the input shaft), one or more friction discs or a cone that can slide along the other shaft on splines, friction linings, a spring (coil springs or a diaphragm spring) that squeezes them together, and a release mechanism (lever, pedal, cable or hydraulics, fork and release bearing) that pushes the spring back to separate them.
- **how_it_works**: A spring presses the friction surfaces together, and the friction between them lets the driving part turn the driven part (Wikipedia 'Clutch'). To disconnect, a lever or pedal pushes the spring back so the surfaces part and the driven shaft can stop while the input keeps turning. While the surfaces are only lightly pressed, they slip, so the driven part is brought up to speed gradually instead of with a bang; the energy lost in slipping becomes heat (Plant Engineering). The torque it can carry depends on the clamping force, the grip of the lining (friction coefficient), the size of the rubbing ring and the number of rubbing faces; a cone clutch wedges its cone into a cup so the same spring force gives more grip (RoyMech 'Cone Clutch').

### Finder attributes

- **job**: 
  - lock, and release by hand: a lever, pedal or knob connects and disconnects the drive while the motor keeps running (Wikipedia; Sailrite sewing-machine clutch)
  - slip or let go when overloaded: it slips instead of breaking something if the load is more than its spring setting allows (Slocum: in robots and machines a clutch often protects gears from overload)
  - change speed or turning force: lets a running motor pick up a stopped load smoothly, and in vehicles lets the gearbox be shifted (Wikipedia)
  - hold or release using power: electromagnetic, hydraulic and pneumatic versions engage or release on a signal (Plant Engineering)
- **degrees_of_freedom**: Engaged and not slipping: 0 between input and output (they turn as one). Disengaged: 1 (the two sides turn independently, like a plain bearing, per Slocum). While slipping: 1, with a friction drag between the sides. The sliding member also has 1 short axial movement for engaging.
- **special_behaviour**: 
  - quick-release: the drive can be disconnected instantly with a lever, pedal or knob, with no tools, even while the motor runs (Wikipedia)
  - torque-limiting (slips or clicks at a set force/torque): if the load torque is more than the clutch's clamp force can carry, it slips smoothly, which protects gears; the slip torque is set by the spring force and can be adjusted with a screw (Slocum)
- **holding_principle**: 
  - friction or clamping (force-fit): turning force passes only by friction between the pressed surfaces
  - spring force (a spring or springy part presses it in place): coil springs, a diaphragm spring or a leaf-spring washer supply the clamping force (Wikipedia; Sailrite)
- **input_output**: Rotation in -> the same rotation out (1:1) when fully engaged; no output when disengaged; while slipping, the output turns slower than the input with torque limited to the clutch's capacity. Shafts in line on one axis. During every engagement the heat produced equals the energy given to the load (Plant Engineering). Back-drivable: yes when engaged; it passes torque in both directions and either shaft can drive. *(unverified parts omitted)*
- **power**: passive (no power needed) for hand, lever, pedal or cable operated clutches. Powered versions exist: electric clutches engaged by an electromagnet and released by springs, or hydraulic and pneumatic ones; an electrically engaged clutch releases when power is lost, while a normally-engaged spring clutch stays engaged when its release power is lost (Plant Engineering; Slocum on normally engaged and normally disengaged clutches)
- **removability**: tool-free quick release: the drive is connected and disconnected by hand with no tools; taking the clutch itself apart needs ordinary tools
- **reuse_cycles**: effectively unlimited: it is made to be engaged and disengaged over and over; the friction linings wear with slipping and are replaced from time to time (Wikipedia; Apex Tech Nation)
- **tools_needed**: None to operate. To build or service: spanners and hex keys, circlip pliers, and for vehicle clutches a clutch alignment (centring) tool to line up the disc with the flywheel (makers print these; several are on Printables). Old clutch dust may contain asbestos, so wet-wipe rather than blow or brush it (US EPA).
- **seal**: none: dry clutches are open inside a cover (a car's bellhousing), and wet clutches run inside the sealed, oil-filled engine or gearbox case (Wikipedia); the clutch itself does not seal anything
- **load**: Medium to heavy in twist, set by the design: slip torque = number of rubbing faces x friction coefficient x clamping force x mean radius of the rubbing ring (Mustansiriyah lecture; RoyMech). Above that torque it slips rather than breaks. The spring's clamping force pushes along the shafts, so the shafts and bearings must carry that thrust and the release force (bearing close to the clutch and well aligned, per the Mustansiriyah lecture). Hand-operated clutches are limited to fairly small sizes because a person can only apply about 75 lb (about 330 N) (Plant Engineering).
- **adjustable**: yes: the slip torque can be adjusted by changing the spring pressure, often with a screw or nut (Slocum); cable-operated vehicle clutches also need their free play adjusted, and the pedal must return fully or the clutch slips (Apex Tech Nation)
- **play_and_precision**: Not a position-holding device: because it can slip, it does not keep a fixed angle between input and output. If the disc slides on a spline there is backlash, so for precise drives Slocum recommends mounting the friction plate on a flexible diaphragm instead. Misalignment tolerance: low; shafts and bearings must be well aligned and the plates must sit flat, or the clutch drags and chatters (Mustansiriyah lecture; Apex Tech Nation on warped discs).
- **access_needed**: end of a tube or shaft: the clutch fits on the ends of two in-line shafts; in use, only the lever, pedal, cable or knob needs to be reached
- **materials**: Linings: organic resin with copper wire, or ceramic, in car clutches (Wikipedia); older and simple clutches used cork, leather, felt or wood against cast iron or steel (RoyMech friction materials table); wet clutches often use paper-based composites (Wikipedia, citation needed). Plates and cones: steel or cast iron. Springs: steel coil springs, a diaphragm (Belleville-type) spring or a leaf-spring washer. Asbestos linings were once common and are no longer acceptable (RoyMech; US EPA). *(unverified parts omitted)*
- **maker_difficulty**: moderate: the friction parts are simple discs or cones, but a clutch that engages smoothly and reliably also needs a spring, a sliding member on a spline or hex, a release lever with a thrust bearing, good alignment, and a facing that grips consistently

### Making it

- **processes**: 
  - 3D print (FDM): plates, cones, hubs and levers for light-duty and demonstration clutches (e.g. the Printables clock friction clutch in PETG and the squeeze-fan clutch)
  - CNC: turned steel or aluminium cones and plates for stronger clutches
  - off-the-shelf part: vehicle clutch discs, pressure plates and release bearings; motorcycle and RC friction plates; industrial and electromagnetic clutches (McMaster-Carr lists 'Clutches' and 'Clutch/Brakes'); Belleville (disc) springs and wave springs for clamping *(unverified parts omitted)*
- **print_in_place**: no: the friction members must be free to separate and need a separate spring, so the parts are printed apart and assembled
- **making_tips_3d_printing**: 1) Size it with the formula: slip torque = n x mu x W x R, with W the spring force, mu the friction coefficient, R the mean radius of the rubbing ring ((outer + inner radius) / 2 once worn in) and n the number of rubbing faces (n = discs on the driving side + discs on the driven side - 1) (Mustansiriyah lecture). A cone multiplies torque by 1 / sin(half-angle) for the same spring force (RoyMech). 2) Don't rely on smooth plastic rubbing on plastic: give it a real friction facing. 4) Use a metal spring for the clamping force (coil, wave or disc spring) rather than squeezed plastic: plastic and even sprung washers relax over time and the clutch starts slipping, as with flattened sewing-machine clutch washers (Sailrite). 5) Material: PETG or nylon over PLA; the Printables clock friction clutch 'does not work printed in PLA' and needs a tolerance-calibrated PETG profile, and PLA softens above about 60 °C (Prusa), which slipping can reach. 6) Keep lubricant off the rubbing faces: the Printables squeeze-fan clutch designer found the clutch could not be greased or it would not grip, and that plastic plates slip under high load; oil on a real clutch causes slipping and chatter (Apex Tech Nation). 7) Let the sliding member run on a hex or spline section so it turns with its shaft but can move along it (Thang 'Friction clutch 3' shows discs 'slidingly splined'); expect a little backlash (Slocum). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'friction clutch', 'plate clutch', 'disc clutch', 'multi-disc clutch' or 'clutch pack', 'cone clutch', 'wet clutch', 'clutch disc' / 'friction disc', 'pressure plate', 'diaphragm spring' or 'Belleville spring' / 'disc spring', 'wave spring', 'release bearing' / 'throw-out bearing', 'clutch fork', 'clutch lever' and 'clutch cable'; 'clutch/brake' units and 'electromagnetic clutch' for powered versions; 'clutch facing' or 'friction material' sheet, cork sheet, 'brake lining'; motorcycle 'friction plates' and 'steel plates'; 'clutch alignment tool'. For overload protection only (not switched on and off), look at 'slip clutch' or 'torque limiter' instead.
- **rules_of_thumb**: 
  - Torque capacity T = n x mu x W x R, where n = number of pairs of rubbing faces, mu = friction coefficient, W = axial clamping force and R = mean radius; for worn-in (uniform wear) faces R = (outer radius + inner radius) / 2; for a multi-disc pack n = n1 + n2 - 1, where n1 and n2 are the discs on the driving and driven shafts (University of Mustansiriyah lecture 'Friction Clutches', General Notes).
  - Cone clutch (uniform wear): T = F x mu x (ro + ri) / (2 x sin alpha), so a small cone angle alpha multiplies the torque; the cone angle is always above 8° and normally 12° to 15°, because below that the clutch is liable to jam in engagement (RoyMech 'Cone Clutches').
  - A plate clutch is the special case of a cone clutch with sin alpha = 1 (Mustansiriyah lecture), and a cone clutch carries more torque than a plate clutch of the same size but is now mostly used for low peripheral speeds (Wikipedia 'Cone clutch'; RoyMech).
  - Friction coefficients against cast iron or steel (dry / oiled): cork 0.3-0.5 / 0.15-0.25, leather 0.3-0.5 / 0.12-0.15, felt 0.22 / 0.18, wood 0.2-0.35 / 0.16, steel on steel 0.15-0.20 / 0.05; maximum temperatures about 100 °C for cork and leather, 140 °C for felt, 300 °C for iron and steel, up to 500 °C for carbon-graphite (RoyMech 'Friction Materials', general values only).
  - Oil cuts the friction coefficient to roughly a quarter to a half of its dry value (RoyMech table), which is why wet clutches stack more discs to avoid slipping (Wikipedia).
  - The heat generated in each engagement equals the energy given to (or taken from) the load, so frequent or long slipping needs a larger clutch or one running in oil (Plant Engineering, 'Selection factors for clutches & brakes'); slipping should be kept short to limit wear (Wikipedia).
  - Hand operation is limited to about 75 lb (about 330 N) of force, so manual clutches are used on small equipment (Plant Engineering).
  - A clutch plate sliding on a spline brings backlash; for precise drives mount the plate on a diaphragm instead (Slocum, FUNdaMENTALs of Design, Topic 5, PDF p. 40).
  - Design with the uniform-wear assumption for clutches that have run in; the uniform-pressure assumption applies only to new linings (RoyMech 'Axial Plate Clutch').
  - Keep oil and grease off the linings: contamination causes slipping and chatter and a soaked disc cannot be cleaned; fix the leak before replacing the disc (Apex Tech Nation).

### When to use it

- **everyday_examples**: 
  - The clutch pedal in a manual car, which pulls a friction disc away from the engine's flywheel (Wikipedia)
  - The hand lever on a motorcycle, which releases a stack of oil-bathed friction and steel plates (Wikipedia)
  - The knob in the middle of a sewing machine's handwheel, loosened to stop the needle while winding a bobbin (Sailrite)
  - The small cone clutches (synchronisers) inside a car's manual gearbox that match speeds before a gear engages (Wikipedia 'Cone clutch')
- **when_to_use**: Use it when you need to connect and disconnect a drive while the motor keeps running, and the pick-up must be smooth rather than a bang: starting a heavy or high-inertia load from a running motor or engine, a winch or conveyor that must start gently, a vehicle or robot drive with a manual disconnect, a mechanism you want to be able to turn by hand without back-driving the motor, or a hand-set mechanism (like a clock's hands or a sewing machine's handwheel) that must be able to slip. It also gives built-in overload protection, since it slips rather than breaks when overloaded.
- **when_not_to_use**: Avoid it when the drive must never slip or must keep an exact angle between input and output (use a dog clutch, which locks by shape, or a solid coupling). If you only need overload protection and never switch it off, a friction slip clutch or ball-detent torque limiter is simpler. If it should engage automatically as a motor speeds up, use a centrifugal clutch; if it should drive one way only, use a sprag, roller or wrap-spring clutch. If it must switch by electrical signal, buy an electromagnetic clutch. For heavy, frequent or long slipping, a small printed clutch will overheat and wear; use a wet (oil-bathed) clutch or a fluid coupling instead (Plant Engineering; Wikipedia).
- **environment_limits**: Heat is the main limit: every engagement turns energy into heat (Plant Engineering), and each lining has a maximum temperature, e.g. cork and leather about 100 °C, felt about 140 °C (RoyMech). Oil, grease or hydraulic fluid on the faces causes slipping and chatter (Apex Tech Nation), and oil or water lowers friction (RoyMech table). Clamping springs lose force with heat cycling and age (Apex Tech Nation on diaphragm springs; Sailrite on flattened spring washers). *(unverified parts omitted)*
- **safety_notes**: Old clutch linings may contain asbestos and you cannot tell by looking; don't blow or brush the dust, use the wet-wipe method, and wash work clothes separately (US EPA). Engaging the clutch starts the driven machine moving, so keep hands clear of the output when engaging. A slipping or disengaged clutch no longer holds a load, so never rely on it to stop a hoist or winch drum from running back; use a brake. *(unverified parts omitted)*
- **common_failures**: 1) Slipping: worn linings, oil contamination, a weak spring or a lever or pedal that does not fully return (Apex Tech Nation); replace linings and springs, fix leaks, adjust the linkage. 2) Chatter or judder while engaging: oil or grease on the faces, glazed or heat-spotted surfaces from long slipping, or broken damper springs (Apex Tech Nation); avoid 'riding' the clutch. 3) Drag (won't fully release): warped disc, air in hydraulics or worn cylinders, seized pilot bearing (Apex Tech Nation), or a misaligned printed assembly. 4) Clamping force fading as sprung washers flatten, so owners over-tighten the knob until it won't release (Sailrite sewing-machine clutch). 5) Printed clutches: plastic faces that slip under high load or can't be lubricated elsewhere (Printables squeeze-fan clutch), PLA parts softening or deforming from slip heat (Prusa), and parts that bind because of tight tolerances (Printables clock friction clutch needs a calibrated PETG profile).
- **related**: 
  - Dog clutch (claw clutch): locks by interlocking teeth, so it never slips, but must be engaged when stopped or at matched speed
  - Friction slip clutch (slip coupling): the same friction discs, always engaged and set to slip only when overloaded, not switched on and off
  - Centrifugal clutch: friction shoes thrown outward by speed engage it automatically as the motor speeds up (Wikipedia)
  - Electromagnetic clutch and clutch/brake: friction or magnetic engagement switched by electricity (Plant Engineering; Wikipedia)
  - Belt clutch: an idler pulley tightens a slack belt to engage drive, as on lawn mowers and snow blowers (Wikipedia; Thang 'Belt clutch 1a')
  - Expanding-shoe or expanding-bush clutch: a wedge expands a sleeve against the inside of a drum (Thang 'Friction clutch 5')
  - Wrap-spring clutch: a coil spring grips the shaft in one direction; also used as a single-revolution clutch (Wikipedia)
  - Synchromesh (synchroniser): a small cone clutch that matches speeds before a dog clutch engages (Wikipedia)
  - Fluid coupling and torque converter: pass drive through oil with smooth slip and no wear (Wikipedia)
  - Magnetic particle, eddy-current and hysteresis clutches: slip smoothly by magnetism, with controllable torque (Plant Engineering)
  - Disc brake: the same friction parts, but holding against a fixed frame instead of connecting two shafts

### Pictures, videos and models

- **links**: 
  - [Cone clutch.svg (Wikimedia Commons, by Sweber.de)](https://commons.wikimedia.org/wiki/File:Cone_clutch.svg): Labelled schematic of a cone clutch: male and female cones, the male cone sliding on splines, the friction material, the return spring and the release control *(licence: CC BY-SA 3.0)*
  - [Car clutch.png (Wikimedia Commons, by Genetics4good)](https://commons.wikimedia.org/wiki/File:Car_clutch.png): 3D model of a dry car clutch, used as the 'Diagram of a dry clutch' in Wikipedia's 'Clutch' article *(licence: CC BY-SA 3.0)*
  - [Basket clutch.png (Wikimedia Commons, by Genetics4good)](https://commons.wikimedia.org/wiki/File:Basket_clutch.png): 3D model of a motorcycle-style multi-plate basket clutch *(licence: CC BY-SA 3.0)*
  - [Friction clutch 3 (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/_mMIk3RcPA0): CAD animation of a spring-loaded multiple-disc clutch with outer discs splined to a drum and inner discs splined to the driven shaft, released by a lever *(licence: link only (standard YouTube licence))*
  - [Friction clutch 4 (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/QqaWJ7PDSg8): CAD animation of a spring-engaged cone clutch that is disconnected by pressing a pedal *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Friction Clutch for Clock (jattie, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/948932-friction-clutch-for-clock): Adjustable printed friction clutch for a pendulum clock, so the hands can be set without disconnecting the drive train; Fusion 360 source included; needs a tolerance-calibrated PETG profile and does not work in PLA *(licence: GPL 3.0)*
  - [Clutch for Squeeze fan (felixlamb, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/536698-clutch-for-squeeze-fan): A first-attempt printed clutch combined with a gear so a hand-squeeze fan can freewheel; the designer's honest notes explain why it slips under high load and can't be lubricated *(licence: CC BY-NC)*
  - [VW Engine - Clutch and Flywheel (bglasford1, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1048257-vw-engine-clutch-and-flywheel): Printable clutch and flywheel parts for a model VW engine, useful for seeing the parts of a car clutch *(licence: CC BY-NC)*
  - [Cone Clutch (ravindra.mohan09, Sketchfab)](https://sketchfab.com/3d-models/cone-clutch-08a6044f319440abbc99dc61e6fa2801): Free downloadable 3D model of a cone clutch that can be viewed and rotated in the browser (details read via the Sketchfab API) *(licence: CC BY)*
- **diagram_idea**: A two-step cut-away of a single-plate clutch: engaged, with the spring squeezing the friction disc between the flywheel and pressure plate and arrows showing turning force passing through; then disengaged, with the lever pushing the release bearing so the plates part and the output stops; add a small inset of a cone in a cup showing how the wedge increases the pressing force.
- **sources**: 
  - https://en.wikipedia.org/wiki/Clutch
  - https://en.wikipedia.org/wiki/Cone_clutch
  - https://commons.wikimedia.org/wiki/File:Cone_clutch.svg
  - https://commons.wikimedia.org/wiki/File:Car_clutch.png
  - https://commons.wikimedia.org/wiki/File:Basket_clutch.png
  - https://roymech.org/Useful_Tables/Drive/Clutches.html
  - https://roymech.org/Useful_Tables/Drive/Axial_Plate_clutch.html
  - https://roymech.org/Useful_Tables/Drive/Cone_Clutch.html
  - https://roymech.org/Useful_Tables/Drive/Brake_Clutch_mat.html
  - https://uomustansiriyah.edu.iq/media/lectures/5/5_2021_12_11!08_29_17_PM.pdf
  - https://www.plantengineering.com/selection-factors-for-clutches-brakes/
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://youtu.be/_FKePQ8PvY0
  - https://youtu.be/_mMIk3RcPA0
  - https://youtu.be/QqaWJ7PDSg8
  - https://youtu.be/JlQ0v77oGtE
  - https://youtu.be/fM-OMJnaLks
  - https://www.sailrite.com/The-Ultrafeed-and-Posi-Pin
  - https://apextechnation.com/articles/clutch-diagnosis-guide
  - https://www.epa.gov/asbestos/current-best-practices-preventing-asbestos-exposure-among-brake-and-clutch-repair-0
  - https://www.mcmaster.com/products/clutches/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://api.printables.com/graphql/
  - https://api.sketchfab.com/v3/models/08a6044f319440abbc99dc61e6fa2801

### Other info

- **Fields with unverified parts:** environment_limits, input_output, making_tips_3d_printing, materials, motion, processes, safety_notes

## 193 Keyless locking bush (taper-lock bush, shaft locking device)

*clutches & couplings.* Tapered rings squeezed by screws that grip a smooth shaft and hub by friction, fixing a pulley or gear without keys or flats

### What it is

- **plain_name**: A set of metal sleeves that you slide into the gap between a smooth shaft and the hole in a pulley or gear; tightening a ring of screws squeezes the sleeves so they grip both parts hard enough to turn together, with no key or flat needed. Loosen the screws and you can slide or turn the part to a new spot
- **term**: Keyless locking device (keyless bushing, locking assembly, shaft-hub locking device)
- **aliases**: 
  - keyless bushing / keyless bush
  - locking assembly / friction locking assembly (terms used by RINGFEDER (brand) and SKF (brand))
  - shaft locking device; shaft-hub locking device
  - keyless locking device, KLD (Climax (brand) term)
  - taper-lock bush / taper bush / taper-fit bush: the close relative covered in this entry, a split bush with a tapered outside that is pulled into a matching tapered hole in the pulley and is usually fitted with a key; 'Taper-Lock' is a Fenner (brand) name
  - QD bushing (quick-disconnect bushing): a flanged, tapered, keyed relative (Wikipedia 'Key (engineering)'; SKF)
  - single-nut keyless bushing, e.g. Trantorque (brand, Fenner)
  - B-LOC (brand, Fenner), Posi-Lok (brand, Zero-Max), RfN 7012 and similar (brand, RINGFEDER), FX series (brand, SKF), ETP hydraulic bushing (brand, Zero-Max)
  - shrink disc: the outside-clamping version that squeezes a hollow hub onto a shaft
  - screw-clamp bushing; flush-mount, flanged and hub-mount screw-clamp bushings (McMaster-Carr catalogue names)
  - Spannsatz (German, 'clamping set')
- **family**: clutches & couplings
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A set of tapered steel rings that screws draw together so they wedge inward onto a plain shaft and outward into a hub, locking a pulley, gear or sprocket in place by friction without any key or keyway.
- **complexity**: A small assembly that acts as one unit: a split inner ring (grips the shaft), a split outer ring (presses into the hub bore), one or two tapered pressure rings that slide between them, and a circle of high-strength screws (or one large nut on single-nut types); many have tapped 'jacking' holes for removal. The taper-lock bush relative is simpler: one split bush with a tapered outside, two or three grub screws, and usually a key.
- **how_it_works**: Two slopes (tapers) slide over each other like wedges. Tightening the screws pulls the tapered rings together along the shaft, which forces the split inner ring to shrink onto the shaft and the split outer ring to swell against the hub bore (Machine Design; SKF). The very high sideways pressure (radial contact pressure) all round the joint creates enough friction to carry turning force (torque), end-thrust and some bending, like a press fit that can be undone with a spanner (Climax). Undo the screws (and on 'self-locking' shallow tapers, screw some into the jacking holes to push the rings apart) and the grip lets go, so the part can be moved, re-timed or removed (SKF).

### Finder attributes

- **job**: 
  - join and hold: fixes pulleys, sprockets, gears, cams, rollers and couplings to a plain shaft so they turn as one (Machine Design)
  - line parts up exactly: the part can be set anywhere along the shaft and at any angle (timing) before tightening, and self-centring types also centre it on the shaft (SKF; Climax)
- **motion**: none: once tightened nothing moves; before tightening the hub can slide along and turn round the shaft for positioning
- **degrees_of_freedom**: 0 when tightened: the hub is locked to the shaft in every direction, as long as the load stays below the friction limit. While loose: 2 (slide along the shaft and turn round it), which is what allows stepless positioning and timing.
- **special_behaviour**: 
  - self-aligning or self-centring: many series pull the hub concentric with the shaft as they tighten, giving very true running (SKF marks each FX series as self-centring or not; RINGFEDER does the same). Non-self-centring types need a separate pilot fit (centring guide) in the hub (SKF)
  - none of the other listed behaviours: it is a fixed joint. It will slip if overloaded, but it is not a torque limiter: SKF says it is 'Not recommended as a principle overload device', and Climax's ratings include no safety factor. Beware the catalogue word 'self-locking': it means a taper so shallow that the rings stay jammed when the screws are loosened and must be jacked apart (SKF FX61 and FX75; German Wikipedia 'Spannsatz'), not the 'won't back-drive' meaning used in this encyclopedia
- **holding_principle**: 
  - friction or clamping (force-fit): wedge action turns screw force into radial pressure, and friction between the rings, shaft and hub carries the load; German Wikipedia calls it a force-locking shaft-hub connection
  - shape (the parts interlock; form-fit): only in the keyed taper-lock bush relative, where a parallel key in the shaft keyway usually adds a shape lock (RACA Journal: 'a taper lock bush should always be fitted with a key'; Fenner instructions via Industry inMotion treat the key as optional)
- **input_output**: Back-drivable: yes; torque can pass either way, and it resists reversing torque well ('High resistance to alternating torque', SKF). *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: loosen all screws a little at a time in sequence and the rings release; self-locking tapers are pushed apart by moving screws into tapped jacking holes (SKF). A taper-lock bush is released by moving a grub screw into its removal hole and tightening it, which pushes the bush out of the hub (RACA Journal)
- **reuse_cycles**: many times: SKF says that with correct fitting and removal and no damage 'the locking assembly can be re-used indefinitely'. Taper-lock bushes are broken by prising open the split or hammering them off (RACA Journal)
- **tools_needed**: Hex keys and a torque wrench (every screw to the same catalogue torque); a C-spanner or ring spanner for single-nut types; solvent and rags to clean the surfaces. Taper-lock bush: hex key, a hammer with a block or sleeve to tap the bush home, and grease to fill the empty holes (Fenner instructions via Industry inMotion)
- **seal**: none: it is not a seal. Fenner's advice for taper-lock bushes is to fill the empty screw holes with grease to keep dirt out (Industry inMotion)
- **load**: Heavy for its size, and in every direction: an SKF FX10 for a 14 mm shaft carries 180 N·m of torque and 26 kN of end-thrust with eight M6 screws, and the single-nut SKF FX75 for an 8 mm shaft carries 14 N·m (SKF catalogue tables). It also takes bending (rated bending moment 22-35% of rated torque, Climax) and handles shock and reversing loads better than a key (Machine Design). Weak points: it slips if overloaded, oily or under-tightened, and its outward pressure can deform or split a thin or weak hub (Machine Design; Climax).
- **adjustable**: yes: before tightening, the hub can be slid to any position along the shaft and turned to any angle ('infinite axial and angular timing', Climax); later you can loosen, reposition and re-tighten. Within limits the rated torque can be lowered by using a lower screw torque (Climax)
- **play_and_precision**: No play: zero backlash once tightened (SKF; Climax; Machine Design). Self-centring types run very true; non-self-centring types depend on a pilot fit in the hub. Some series push the hub slightly along the shaft while tightening ('axial movement while tightening', SKF), and a taper-lock bush grips the shaft first and then draws the hub onto itself (Industry inMotion), so set the position allowing for this. Misalignment tolerance: none; it is a rigid mounting.
- **access_needed**: end of a tube or shaft: the bush slides onto the shaft from its end together with the hub, and all screws are worked from one face, so the back of the hub need not be reached
- **materials**: Rings of high-carbon or alloy steel with grade 12.9 screws (Climax; SKF); stainless versions exist with lower torque ratings (SKF). Hubs: steel is best; SKF's friction table also covers cast iron and aluminium hubs, and Climax recommends hub steel with a yield strength of at least 45 ksi (310 N/mm²) for shrink discs, with a larger shrink disc for cast-iron hubs. Not suitable for plastic hubs, including 3D-printed ones, except as a separate metal hub that the plastic part is bolted to.
- **maker_difficulty**: moderate: the bush is bought ready-made and fitted with hand tools, but the hub needs an accurately bored, smooth, round hole (typically tolerance H8 and roughness Ra 3.2 µm or better, SKF) in metal thick enough to take the pressure, plus a torque wrench. Without a lathe, buy a pulley or sprocket already bored for the bush

### Making it

- **processes**: 
  - off-the-shelf part: keyless bushings, locking assemblies, single-nut bushings, taper-lock bushes, and pulleys or sprockets pre-bored for taper-lock bushes
  - CNC: lathe-boring a metal hub to the H8-type tolerance and smooth finish the bush needs (SKF), or making a metal adaptor hub
  - 3D print (FDM): experimental only; e.g. Atjornov's untested two-part ABS HTD 5M belt pulley made to take a metal 1108 taper-lock bush, bolted together with M4 screws and meant for about 40 W (Printables). Printing the rings themselves is not realistic
- **print_in_place**: no: the rings are hardened steel bought parts, and a printed hub is generally too weak to take their pressure directly
- **making_tips_3d_printing**: 1) Treat the bush as a metal part you buy; print only the parts around it. 2) Don't press a steel locking assembly straight into a printed hub for real loads: an SKF FX10 for a 14 mm shaft pushes on the hub at 97 N/mm² (SKF table), while printed Prusament PLA yields at about 51-59 MPa and its layers pull apart at about 17 MPa (Prusament datasheet), so a printed hub would crack along the layer lines or creep loose. 5) Remember that a friction grip on plastic loosens as the plastic creeps or softens: Prusament PLA's heat deflection temperature is 55 °C, and Prusa says PLA softens above about 60 °C; re-check tightness after running. 7) To fit an odd-sized shaft, Climax recommends a metal adaptor sleeve (a slit sleeve with a wall no thicker than 12.5% of the shaft diameter) rather than a printed shim. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'keyless bushing', 'keyless locking device', 'locking assembly', 'shaft locking device', 'shaft-hub locking device', 'Spannsatz', 'shrink disc' (outside-clamping version), 'single nut keyless bushing' (e.g. Trantorque (brand)), B-LOC (brand), Posi-Lok (brand), RINGFEDER (brand) locking assemblies (RfN 7061 from 6 mm shaft), SKF (brand) FX series (FX75 from 3 mm shaft), McMaster-Carr categories 'Flush-Mount', 'Flanged', 'Quick-Grip' and 'Hub-Mount Screw-Clamp Bushings' (from 1/4 in shaft), 'Quick-Grip Flanged Hydraulic Bushings' and 'Keyless Locking Rigid Shaft Couplings'. Taper-lock family: 'taper lock bush' / 'Taper-Lock bushing' sizes 1008, 1108, 1210, 1215, 1310, 1610, 1615, 2012, 2517 and larger (McMaster-Carr; smallest bore 1/2 in there), 'taper bore pulley', 'taper lock sprocket', 'QD bushing'. Also needed: a torque wrench, grade 12.9 socket cap screws for replacements, and a parallel key if the shaft has a keyway.
- **rules_of_thumb**: 
  - Tighten the screws in pairs directly across from each other, in stages: first to one-quarter of the specified torque, then to one-half, then to full torque, then check again that none will turn further (Kevin Powers, 'Keyless devices get a grip on shafts', Machine Design, 2000).
  - Every screw must reach the same catalogue torque, in a diametrically opposite sequence, or the device won't carry its rated torque (SKF FX catalogue, installation notes 2.1.3-2.1.4).
  - Taper angle sets the grip: included cone angles range from about 12° (light to medium duty) down to 5° (heavy duty); the smaller the angle, the more torque it can carry (SKF FX catalogue, section 4.1).
  - Friction is the whole trick: catalogue torque ratings assume a friction coefficient of about 0.12 (steel on steel with a thin oil film); dry steel gives about 0.14 and solvent-cleaned about 0.17 (SKF friction table). Never use lubricants containing molybdenum disulphide or silicone (SKF; Machine Design).
  - Makers disagree on oiling, so follow the instructions for the exact product: Machine Design and Climax oil the ring surfaces lightly, SKF oils the internal cones but wants the ring-to-shaft and ring-to-hub faces dry, and taper-lock bushes must be completely free of oil and grease (RACA Journal; Fenner via Industry inMotion). Hobby machinists report single-nut bushings slip unless oily surfaces are degreased (Hobby-Machinist forum).
  - Machine the shaft and bore to about h8/H8 (h11/H11 for some light series) with roughness Ra 3.2 µm or better (SKF FX catalogue p. 13-14); Climax asks for 63-125 µin RMS.
  - The hub must be thick and strong enough not to deform under the outward pressure: Machine Design says consult the maker's hub-size data; Climax gives a formula for the minimum hub outside diameter from the ring's hub pressure and the hub material's yield strength, and SKF gives a table of hub-diameter factors by pressure, hub length and material.
  - Published torque ratings include no safety factor, so expect it to slip above the rated torque; apply a service factor for shock (Climax; SKF service factors 1.0-3.0).
  - Keyways weaken shafts: with keyed bushings the shaft diameter needs to be about 10% larger (SKF), and SKF's ASME-based shaft formula uses an allowable stress of 41 MPa for keyed but 55 MPa for unkeyed commercial steel.
  - Many types can be fitted over an existing empty keyway without derating if the inner ring's slit is placed opposite the keyway and a screw sits over it (Climax).
  - Taper-lock bushes have an 8° taper and grub screws in holes drilled half in the bush and half in the hub: the fixing screws thread into the hub and push on the blind half-hole in the bush, driving it deeper; for removal a grub screw moved into the removal hole reverses the force and pushes the bush out. Use only the correct holes, as some small bushes have an extra hole that is there for balance only (RACA Journal).
  - Taper-lock fitting: tighten the screws gradually and alternately, tap the large end of the bush with a hammer and block, re-tighten, repeat once or twice, check the screws again after the drive has run under load for a short time, and fill empty holes with grease (Fenner instructions via Industry inMotion).
  - Keyed, QD and Taper-Lock bushing systems are not designed for reversing bending loads (e.g. an overhung roll or conveyor pulley); keyless locking assemblies are rated for them (Climax).
  - Small sizes exist for makers: SKF FX75 single-nut bushings start at a 3 mm shaft (2.5 N·m) and an 8 mm shaft in a 14 mm hub bore carries 14 N·m (SKF table); RINGFEDER RfN 7061 starts at 6 mm; McMaster-Carr's screw-clamp bushings start at 1/4 in.

### When to use it

- **everyday_examples**: 
  - The belt pulley on an air-conditioning or ventilation fan or a pump, often held by a taper-lock bush (Industry inMotion)
  - Conveyor pulleys and rollers, and the timing cams and turntables in packaging and bottling machines (Machine Design; Climax)
  - The collet that holds the bit in a Dremel rotary tool or a router: the same wedge idea, a split tapered sleeve squeezed by a nut onto a smooth shank (Wikipedia 'Collet')
  - Taper-lock belt pulleys sold with a bush, as in the Wikimedia Commons photo of a V-belt pulley with its Taperlock bush
- **when_to_use**: Use it to fix a pulley, sprocket, gear, cam or arm to a plain round shaft when you want a strong, play-free grip without cutting keyways or flats, when you need to set the part's exact position or angle (timing) and be able to change it later, when loads reverse or shock (where keys pound loose), or when a keyway would weaken a small shaft. It is also a good way to reuse a shaft that already has a worn keyway (Climax; Machine Design). The taper-lock bush is the everyday industrial choice for belt and chain drives because one pulley size takes bushes for many shaft sizes and comes off easily (SKF; Industry inMotion).
- **when_not_to_use**: Avoid it when the hub is plastic, thin-walled or printed (the ring pressure will crack or creep it; bolt the part to a metal hub, or use a clamp hub or glue instead), when you want the joint to slip safely on overload (use a slip clutch, tolerance ring or ball-detent torque limiter), when the shafts are not in line (use a coupling), when cost and space matter more than strength (a set screw on a D-flat shaft, a clamping collar or a split clamp hub is cheaper and smaller), or for hex or splined shafts, which already lock by shape. For a permanent, cheap joint in mass production a press fit or glue may be simpler.
- **environment_limits**: SKF rates its FX bushings for about -40 to 150 °C with no loss of capacity, and up to 300 °C if all parts are at the same temperature, have similar thermal expansion and the fit tolerances are adjusted; Climax gives 0 to 400 °F (-18 to 204 °C) and warns that parts of different materials expand at different rates. Standard steel rings rust; stainless versions have lower torque ratings (SKF), and Climax offers nickel or thin dense chrome plating. Vibration can loosen screws, so re-check after the first run under load (Fenner via Industry inMotion). Grip depends on clean, correctly lubricated surfaces; oil or contamination makes it slip (Hobby-Machinist; SKF). On a printed hub, creep and heat (PLA's heat deflection temperature is 55 °C, Prusament) make the grip fade over time.
- **safety_notes**: It is part of rotating machinery, so guard it. It is not a safety slip clutch: if overloaded or contaminated it can slip suddenly, dropping or releasing whatever the shaft drives (Climax; SKF). Use the specified grade 12.9 screws and a torque wrench (SKF); over-tightening can strip threads or burst a thin hub, and under-tightening lets it slip. Never prise a taper-lock bush open with a screwdriver in its split or hammer it off; it breaks (RACA Journal). *(unverified parts omitted)*
- **common_failures**: 1) Slipping: surfaces oily or contaminated (especially with molybdenum disulphide or silicone grease), screws under-torqued or tightened out of sequence, or the load above the rating (SKF; Machine Design; Hobby-Machinist). Fix: clean, lubricate only as the maker says, and torque every screw in stages across the circle. 2) Hub deformed or cracked because the hub wall is too thin or the material too weak for the ring pressure (Machine Design; Climax). Fix: check the maker's minimum hub diameter. 3) Hub wobbles or runs out of true: a non-self-centring type used without a pilot fit, or uneven tightening (SKF). 4) Part ends up in the wrong place: some series move the hub along the shaft while tightening (SKF; Industry inMotion). 5) Screws working loose under vibration if not re-checked after running (Fenner via Industry inMotion). 6) Won't come off: self-locking tapers need jacking screws, and taper-lock bushes need the removal hole; hammering or prising splits the bush, which RACA Journal says explains taper-lock bushes found 'broken in half'. 7) Taper-lock bush not seated because a parallel key with no top clearance holds it off the shaft (RACA Journal).
- **related**: 
  - Key and keyway (sunk key): the traditional shape-locked joint; simple and cheap, but it weakens the shaft, needs machining and can pound loose with backlash under reversing loads (SKF; Climax)
  - Taper-lock bush and QD bushing: split tapered bushes pulled into a tapered hub bore, usually with a key; quick to fit and remove, but not rated for reversing bending loads (Climax); covered as close relatives in this entry
  - Shaft-to-hub joints and rigid couplings (set screw, D-flat, clamp hub): cheaper and smaller for light loads, but lower torque and a set screw marks the shaft
  - Shaft collar (clamping collar): a one-screw clamp ring used to stop parts sliding along a shaft rather than to carry torque
  - Tolerance ring (wavy-band press fit): a springy steel band that holds by friction and deliberately slips at a set torque; much lower grip but tolerant of loose sizes
  - Interference fit (press or shrink fit): the same even, play-free grip but needs a press or heat and very close tolerances, and parts can seldom be reused (SKF)
  - Shrink disc: the outside version that clamps a hollow hub down onto a solid shaft (Climax; SKF FX190)
  - Collet: a split tapered sleeve squeezed onto a tool shank; the same wedge principle used to hold bits rather than pulleys (Wikipedia)
  - Self-locking wedge (taper key): a single wedge driven into a slot that stays put by friction
  - Spline shaft and hex shaft: shapes that lock by interlocking rather than friction, allowing sliding along the shaft

### Pictures, videos and models

- **links**: 
  - [Spannsatz-2.jpg (Wikimedia Commons, by Ukko-wc)](https://commons.wikimedia.org/wiki/File:Spannsatz-2.jpg): Cross-section drawing of a locking assembly between a shaft (W) and hub (N), with clamping screw (S) and conical rings (K) *(licence: CC BY-SA 3.0 (also 2.5, 2.0, 1.0) or GFDL 1.2 or later)*
  - [Taperlock Keilriemenscheibe mit Buchse.jpg (Wikimedia Commons, by Ru-go)](https://commons.wikimedia.org/wiki/File:Taperlock_Keilriemenscheibe_mit_Buchse.jpg): Photo of a V-belt pulley fitted with a Taperlock bush *(licence: Copyrighted free use (any use permitted))*
  - [How Locking Assemblies Work - Ringfeder (HVH Industrial Solutions, YouTube)](https://www.youtube.com/watch?v=p1bmVphYmGQ): Explainer on how internal keyless locking assemblies grip between the shaft and the clamped part *(licence: link only (standard YouTube licence))*
  - [BearingShopUK - Fitting and Removal of a Taperlock Bush (BearingShopUK, YouTube)](https://www.youtube.com/watch?v=fT4axK3haQ0): Hands-on fitting and removal of a taper-lock bush in a pulley (per its YouTube description, the same method applies to couplings) *(licence: link only (standard YouTube licence))*
  - [Fastener 5 (Nguyen Duc Thang, thang010146, YouTube)](https://www.youtube.com/watch?v=8MnLVIU4Vuo): CAD animation of a gear fixed to a shaft by a split bush with a tapered outside, pulled in by one pair of screws and pushed out by another (described in Thang's '2100 Animated Mechanical Mechanisms' catalogue) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [HTD 5M pulley for 1108 taper lock bush - NOT TESTED in use (Atjornov, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1325037-htd-5m-pulley-for-1108-taper-lock-bush-not-tested): Two-part printed ABS toothed-belt pulley for a 20 mm HTD 5M belt, made to take a standard metal 1108 taper-lock bush; the halves are glued and bolted with M4 x 35 screws and washers; designer's target is about 40 W continuous and it was untested under load (details read via the Printables API) *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Pulley with taper-lock-bushing (Jan Detlefsen, Printables) (URL from search results; details via Printables API)](https://www.printables.com/model/313590-pulley-with-taper-lock-bushing): Printable pulley model designed around a taper-lock bushing; the listing has no description ('Test upload') *(licence: GNU General Public License v2.0)*
- **diagram_idea**: Half cross-section of a shaft, a keyless bush and a pulley hub, shown twice: first loose with a gap, then with the screw tightened and arrows showing the tapered rings sliding together so the inner ring squeezes inward onto the shaft and the outer ring pushes outward into the hub, with a small inset comparing it to a keyed joint.
- **sources**: 
  - https://www.machinedesign.com/automation-iiot/article/21827133/keyless-devices-get-a-grip-on-shafts
  - https://cdn.skfmediahub.skf.com/api/public/0901d1968008f69c/pdf_preview_medium/0901d1968008f69c_pdf_preview_medium.pdf
  - https://catalog.climaxmetal.com/Asset/Keyless-Locking-Technical-Information.pdf
  - https://www.ringfeder.com/products/locking-assemblies/
  - https://www.mcmaster.com/products/keyless-locking-devices/
  - https://www.mcmaster.com/products/taper-lock-bushings/
  - https://refrigerationandaircon.co.za/working-with-a-taper-bush/
  - https://www.industryinmotion.com.au/australian-industrial-businesses/how-to-make-the-right-shaft-connection-with-fenner-taper-lock/
  - https://www.hobby-machinist.com/threads/well-thats-neat-fenner-manheim-trantorque-bushings.122690/
  - https://en.wikipedia.org/wiki/Key_(engineering)
  - https://de.wikipedia.org/wiki/Spannsatz
  - https://en.wikipedia.org/wiki/Collet
  - https://commons.wikimedia.org/wiki/File:Spannsatz-2.jpg
  - https://commons.wikimedia.org/wiki/File:Taperlock_Keilriemenscheibe_mit_Buchse.jpg
  - https://www.youtube.com/watch?v=p1bmVphYmGQ
  - https://www.youtube.com/watch?v=hh1y2Su4oPo
  - https://www.youtube.com/watch?v=fT4axK3haQ0
  - https://www.youtube.com/watch?v=VU3q0ee4T9U
  - https://www.youtube.com/watch?v=nqVbSI4Qruo
  - https://www.youtube.com/watch?v=8MnLVIU4Vuo
  - https://wiki.dtonline.org/index.php/2100_Animated_Mechanical_Mechanisms
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/313590-pulley-with-taper-lock-bushing
  - https://prusament.com/wp-content/uploads/2022/10/PLA_Prusament_TDS_2021_10_EN.pdf
  - https://help.prusa3d.com/article/pla_2062

### Other info

- **Fields with unverified parts:** input_output, making_tips_3d_printing, safety_notes

## 194 Schmidt coupling (offset coupling)

*clutches & couplings.* Three discs joined by links that pass rotation between two parallel shafts which are well out of line, at constant speed

### What it is

- **plain_name**: Three discs in a row joined by little linking bars, so a motor shaft can drive another shaft that sits well off to one side (centimetres away, not just a fraction of a millimetre) at exactly the same speed and angle; the second shaft can even move sideways while it runs
- **term**: Schmidt coupling (Schmidt offset coupling)
- **aliases**: 
  - Schmidt offset coupling / offset coupling
  - parallel-offset coupling; parallel-link coupling; three-disc link coupling
  - Schmidt coupler (maker usage, e.g. on Printables)
  - Schmidt-Kupplung (German; also the registered name of SCHMIDT-KUPPLUNG GmbH (brand), whose series are Standard S, Power Plus P and Offset Plus V)
  - Zero-Max Schmidt Offset Coupling (brand), L200 and L300 series
  - Schmidt Inline coupling and Schmidt 5-D coupling (brand, Zero-Max): related versions for small offsets
- **family**: clutches & couplings
- **one_liner**: A coupling made of three discs linked in series by sets of equal parallel bars, which passes rotation at exactly constant speed between two parallel shafts that are far out of line, even while that offset changes.
- **complexity**: A small assembly that acts as one unit: an input disc (on hub 1), a free-floating centre disc, an output disc (on hub 2), and two layers ('link levels') of three equal-length links, with a bearing and pin at every link end: 3 discs, 6 links and 12 pivots, plus the two hubs that clamp or key onto the shafts (Wikipedia; Schmidt-Kupplung catalogue).
- **how_it_works**: Each pair of neighbouring discs is joined by three equal links whose pivots sit 120° apart on circles of the same size, so every link forms a parallelogram with the discs (a parallel-crank linkage): the two discs must always turn to exactly the same angle, yet their centres are free to be apart (Wikipedia). The centre disc has no bearing of its own; Schmidt's key discovery was that it 'could in fact assume its own center of rotation' between the two shafts (Wikipedia). Turning force passes through the links as balanced pushes and pulls, so the shaft bearings feel no side load (ABSSAC; Zero-Max). Because the links fix only the angle and not the distance, the offset can be set anywhere between a minimum and a maximum of about twice the link length, and can even change while running, without any change in speed or phase (Wikipedia; Schmidt-Kupplung).

### Finder attributes

- **job**: 
  - join and hold: connects two parallel shafts so they turn together at exactly the same speed and angle
  - let it move (turn, slide or bend): lets the two shafts sit far apart sideways, and lets one shaft move sideways while running, e.g. a coating roller that lifts to take thicker material without stopping the machine (Schmidt-Kupplung)
- **motion**: multiple: the whole coupling rotates continuously, while the output shaft may also shift sideways in any direction within the permitted offset range (e.g. 6-23 mm for the smallest Schmidt-Kupplung S 35), at rest or while running
- **degrees_of_freedom**: Between the two shafts: 2 (the output shaft can shift sideways in both directions across the discs), while the turning itself is locked 1:1. Commercial couplings also accept a little end movement (about 1 mm) and tilt (0.5-0.8°) (Schmidt-Kupplung technical data). Inside, the centre disc floats with 2 sideways freedoms of its own, fixed by the geometry except when the shafts are in line.
- **special_behaviour**: 
  - none of the listed behaviours: its special trick, passing rotation at exactly constant speed and phase across a large, changeable sideways offset without loading the shaft bearings sideways (Wikipedia; Schmidt-Kupplung; Zero-Max), is not in this list. It does not slip, click, lock or release. Its floating centre disc does centre itself, but only while the shafts are offset: in line, the disc has no fixed position (Schmidt-Kupplung)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes rotation from one shaft to another
  - shape (the parts interlock; form-fit): torque passes through pinned links and bearings, so the discs cannot slip relative to each other
  - friction or clamping (force-fit): the end hubs are usually clamped onto the shafts (Schmidt-Kupplung clamping hubs) or keyed and set-screwed (Zero-Max hubs)
- **input_output**: Continuous rotation -> the same continuous rotation (1:1), at constant angular velocity and with no phase shift at any offset (Wikipedia; Schmidt-Kupplung). Shaft arrangement: parallel and offset (never exactly in line). Back-drivable: yes; either shaft can drive the other. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: commercial couplings clamp onto the shafts with clamping hubs (several screws, e.g. M6 at 12 N·m on the smallest Schmidt-Kupplung sizes), or bolt to flanges or keyed hubs, and come off by loosening them (Schmidt-Kupplung installation instructions; Zero-Max hub data)
- **reuse_cycles**: many times: it comes off and goes back on as one unit; what wears out is the pivot bearings with running hours, and Zero-Max treats the needle bearings' B-10 life as the coupling's life
- **tools_needed**: Hex keys and a torque wrench for the hub clamp screws or flange bolts; a grease gun with the specified grease for regreasing (Schmidt-Kupplung). Printed versions: pins, screws or small bearings, perhaps a drill or reamer to true the pivot holes, and a dab of glue for loose clip-together parts (Maltese Canuck, Printables).
- **seal**: none: the links and discs are open; only the needle bearings have built-in seals (Schmidt-Kupplung material list), and the maker recommends a metal cover to shield the coupling from heat, dust, sand and solvents
- **load**: Medium to heavy torque: Schmidt-Kupplung sizes carry 35 to 6,610 N·m (ABSSAC), and Zero-Max L200/L300 offset couplings 637 to 459,000 lbf·in (about 72 N·m to 52 kN·m) (Zero-Max table). Strong in twist, and it puts no side load on the shaft bearings (Zero-Max; Schmidt-Kupplung). Weak against end movement and tilt: about 1 mm axial and 0.5-0.8° angular misalignment (Schmidt-Kupplung table). Torque capacity mainly depends on bearing size, number of bearings and their radius (Zero-Max).
- **adjustable**: yes: the offset can be changed at rest or while running under load, anywhere within the permitted range (Schmidt-Kupplung); the length between shaft ends is set when installing
- **play_and_precision**: Small play: precision needle bearings give very low rotational play (Schmidt-Kupplung), and Zero-Max offers Low and Ultra Low Backlash models; it is torsionally stiff (7 kN·m/rad for the smallest Schmidt-Kupplung S 35). The output keeps exactly the same angle as the input at any offset, so it suits timing and registration drives. Misalignment: very large parallel offset (e.g. 6-23 mm for S 35, up to 275 mm for the largest Offset Plus V (ABSSAC)), but only about 1 mm end float and 0.5-0.8° tilt, and never zero offset.
- **access_needed**: end of a tube or shaft: each end hub fits over a shaft end and is clamped or keyed there; leave clear space round it for the links' swing diameter and room for a grease gun
- **materials**: Commercial: steel discs (St52-3), steel links, hardened steel bolts, needle roller bearings and grease (Schmidt-Kupplung). Maker versions: printed PLA discs and links with pins, screws or 608 ball bearings and 8 mm steel shafts (Printables models).
- **maker_difficulty**: moderate: the discs and links print flat without supports, but it needs 12 accurate pivots with equal link lengths and hole spacings, plus pins or bearings; a printed one is a demonstrator or light drive, so buy one for real torque

### Making it

- **processes**: 
  - 3D print (FDM): popular desk demonstrators and light drives (e.g. Ringarn67's and Maltese Canuck's models on Printables)
  - CNC: steel or aluminium discs and links with bearings
  - off-the-shelf part: Schmidt-Kupplung (brand) and Zero-Max (brand) offset couplings *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Print the discs and links flat on the bed; they are flat plates, so no supports are needed (Maltese Canuck: PLA, no supports, 3 walls, 55% infill). Schmidt-Kupplung stresses that 'All coupling elements for a level must be installed in parallel'. 3) Pivots: printed holes come out undersized, so give pins clearance (Ringarn67 scaled his links to 104% for a looser fit on the pins, printed at 0.20 mm layers and added a 3 mm brim on the pins); for a working drive use steel pins, screws with bushes, or small ball bearings at all 12 pivots. 4) Lubricate the rubbing surfaces, e.g. with graphite from a pencil (Maltese Canuck) or grease. 5) Support the input and output shafts rigidly and parallel, e.g. 8 mm steel shafts in 608 bearings (Maltese Canuck), because the coupling itself tolerates almost no tilt (0.5-0.8° in commercial ones, Schmidt-Kupplung). 6) Keep the shafts at least the minimum offset apart and below the maximum: never let the links of the two layers lie parallel (fully stretched) or the shafts come into line, or the middle disc wobbles (Schmidt-Kupplung; Wikipedia). 8) PLA is fine for a demonstrator but softens above about 60 °C (Prusa); use PETG or nylon for a working drive. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for 'Schmidt coupling', 'Schmidt offset coupling', 'Schmidt-Kupplung' (brand; Standard S, Power Plus P and Offset Plus V series), 'Zero-Max Schmidt offset coupling' (brand; L200/L300 series, e.g. L230C), 'parallel offset coupling'. For small offsets: 'Schmidt Inline coupling' (L400) and '5-D coupling' (L500) (brand, Zero-Max), or an 'Oldham coupling'. For home-made versions: 608 ball bearings, 8 mm steel shafts, dowel pins or shoulder screws, small flanged bearings, clamping hubs or shaft collars, and grease or graphite.
- **rules_of_thumb**: 
  - Never run the shafts in line: at zero offset the centre disc 'would have no definite position in space but would be stimulated to its own movement', so every size has a minimum required offset (Schmidt-Kupplung catalogue 2022, p. 8-10); at high speed, near-in-line shafts cause 'extreme vibration' (Wikipedia).
  - Never run in the fully stretched ('extended') position, where the links of one layer lie parallel to those of the other (Schmidt-Kupplung catalogue p. 10).
  - The maximum offset is about twice the length of the links (Wikipedia).
  - Example sizes: the smallest Schmidt-Kupplung S 35 carries 35 N·m (65 N·m peak), needs at least 6 mm offset, allows up to 23 mm, runs to 3,100 rpm, and takes 1 mm end movement and 0.8° tilt (Schmidt-Kupplung technical data, p. 15). Zero-Max's smallest L230C works from 0.437 in (11 mm) to 1.575 in (40 mm) offset, carries 637 lbf·in (72 N·m) and runs to 2,500 rpm (Zero-Max Schmidt catalogue, p. 6).
  - In both catalogues the minimum offset is roughly a quarter of the maximum (6/23 mm, 13/50 mm and 50/190 mm for Schmidt-Kupplung sizes; 0.437/1.575 in for Zero-Max L230C) [our calculation from the catalogue tables].
  - If the output shaft travels along a straight line, the usable travel ('maximum linear range') is about 2 × √(maximum offset² − minimum offset²), e.g. about 45 mm for the S 35 [our calculation; it matches the catalogue values]. Zero-Max: to use all of it, the line must pass the fixed shaft at the minimum offset, with the travel centred.
  - Size it by torque, speed and bearing life: Schmidt-Kupplung multiplies the drive torque by a performance factor (from speed and desired life) and a load factor from 1.0 (uniform) to 2.25 (heavy shocks) (catalogue p. 12); Zero-Max takes the needle bearings' B-10 life as the coupling's life (catalogue p. 5).
  - Regrease at intervals that shorten as speed rises, only with the specified grease (mixing greases shortens life); the smallest sizes are lubricated for life (Schmidt-Kupplung p. 22-23).
  - For small misalignments (about 0.06 in parallel, ±0.5° angle), Zero-Max's Inline Schmidt coupling, with two pairs of parallel links 90° apart, is used instead; it does create side loads, which Zero-Max charts as a percentage of coupling weight rising with offset and speed (Zero-Max catalogue p. 8, 11).
  - Install it as a complete unit, with all links of a layer parallel, onto clean, dry, burr-free shaft ends, and allow for shaft growth with heat (Schmidt-Kupplung installation instructions, p. 21).

### When to use it

- **everyday_examples**: 
  - Printing presses, where rollers must stay exactly in step (in register) while the spacing between them is adjusted (Zero-Max; Schmidt-Kupplung)
  - Roll-forming, laminating, corrugated-cardboard and paper-making machines (ABSSAC)
  - Coating rollers that lift to handle different material thicknesses, or that can be changed without stopping the machine (Schmidt-Kupplung)
  - 3D-printed desk demonstrators and fidget models shared on Printables and Thingiverse
- **when_to_use**: Use it when two parallel shafts must turn at exactly the same speed and angle but sit well out of line (far more than an Oldham or flexible coupling can take), when the offset has to change while running (adjustable, lifting or tensioning rollers), when there is little length between the shaft ends (Offset Plus V can take a 275 mm offset in a coupling only 284 mm long, ABSSAC), or when you must avoid side loads on bearings. It also makes a satisfying teaching model for parallelogram linkages.
- **when_not_to_use**: Avoid it when the shafts are in line or nearly so (it must not run at zero offset; use a jaw, beam or Oldham coupling), when the offset is small and fixed (an Oldham coupling or an Inline Schmidt coupling is simpler), when the shafts meet at an angle (use a pair of universal joints or a flexible shaft), or when a fixed offset can be bridged more cheaply by a belt, chain or gear pair (a gear pair reverses the direction). Printed versions are for light loads and demonstrations only.
- **environment_limits**: Commercial couplings are all steel with greased needle bearings; shield them from direct heat, dust, sand and solvents with a metal cover, and regrease at intervals that shorten with speed (Schmidt-Kupplung). The coupling is dynamically balanced and absorbs radial vibration (Schmidt-Kupplung; Zero-Max), but running near in-line causes severe vibration (Wikipedia). Printed PLA versions soften above about 60 °C (Prusa). *(unverified parts omitted)*
- **safety_notes**: The links swing round a bigger circle than the discs (the 'swing diameter'), creating pinch and entanglement points; guard it like any rotating equipment (Zero-Max: 'Rotating equipment must be guarded'). The coupling can come apart when lifted or carried, and parts can fall off (Schmidt-Kupplung). Near in-line running at speed, the centre disc can oscillate violently (Wikipedia).
- **common_failures**: 1) Severe vibration from running with the shafts too close to in line (Wikipedia; Schmidt-Kupplung). 2) Jamming or overload when pushed to the fully stretched position beyond maximum offset (Schmidt-Kupplung). 3) Worn pivots and needle bearings from missed regreasing or mixed greases; Schmidt-Kupplung replaces whole link elements rather than single bearings. 4) Extra wear and side loads when the shafts are tilted or pushed together beyond the small angular and axial limits (Zero-Max notes excess misalignment introduces sideloads that cause vibration and bearing failure; Schmidt-Kupplung table). *(unverified parts omitted)*
- **related**: 
  - Oldham coupling: three discs with sliding tongue-and-groove slots; simpler and cheaper, but only for small offsets, and it slides rather than pivots
  - Double universal joint (two Hooke's joints on a middle shaft): can bridge an offset, but Zero-Max notes it causes radial forces at the joints and needs a lot of sideways space
  - Schmidt Inline and 5-D couplings (brand, Zero-Max): two pairs of parallel links 90° apart for small offsets; the 5-D also takes ±5° of tilt
  - Flexible drive shaft: carries rotation round bends and large offsets, but twists under load so the output lags and is not exactly in step
  - Belt, chain or gear drive: bridges a fixed offset cheaply; gears reverse the direction, and changing the offset needs a tensioner or swinging arm
  - Jaw coupling and flexible beam coupling: for nearly in-line shafts only *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [SchmidtCouplingGif.gif (Wikimedia Commons, by Saturnautics)](https://commons.wikimedia.org/wiki/File:SchmidtCouplingGif.gif): Animated CAD model of a Schmidt coupling, made in Onshape, showing the discs and links turning while offset (used in the Wikipedia article) *(licence: CC BY-SA 4.0)*
  - [Schmidt coupling (Nguyen Duc Thang, thang010146, YouTube)](https://www.youtube.com/watch?v=ARs3y3i0enE): Colour-coded CAD animation of rotation passed between parallel shafts, with the centre link disc turning without a fixed bearing while both shafts move (description from Thang's '2100 Animated Mechanical Mechanisms' catalogue) *(licence: link only (standard YouTube licence))*
  - [Zero-Max Schmidt Offset Coupling (zeromaxmotioncontrol, YouTube)](https://www.youtube.com/watch?v=zVt1tvD7rqk): Manufacturer's video on Schmidt offset couplings and how they allow large shaft displacement while keeping constant angular velocity (per its YouTube description; video content not checked frame by frame) *(licence: link only (standard YouTube licence))*
  - [What is a Schmidt Offset Coupling? (Design World, YouTube)](https://www.youtube.com/watch?v=iZUC5Q2kp8E): Introduction to the coupling's parts, how it works and where it is used *(licence: link only (standard YouTube licence))*
  - [Schmidt-Kupplung catalogue 2022, English (SCHMIDT-KUPPLUNG GmbH)](https://www.schmidt-kupplung.com/fileadmin/user_upload/Download/Kataloge_pdf/Katalog_SchmidtKupplung_2022_englisch_ansicht_.pdf): Photos and diagrams of the three discs and two link levels, the minimum-offset rule, the forbidden in-line and extended positions, and the path of the centre disc *(licence: link only (manufacturer's copyright))*
- **make_it_yourself**: 
  - [Schmidt-Coupling (Ringarn67, Printables) (URL from search results; details via Printables API)](https://www.printables.com/model/64462-schmidt-coupling): Printed PLA Schmidt coupling made 'just to understand how it works'; links scaled to 104% for a looser fit on the pins, 0.20 mm layers, 3 mm brim on the pins; Fusion 360 file included *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [Schmidt Coupler (Maltese Canuck, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1698993-schmidt-coupler): Basic clip-together Schmidt coupler with 8 mm input and output shafts for 608 bearings; printed in PLA without supports; pencil graphite suggested as lubricant *(licence: CC BY (Creative Commons Attribution))* *(unverified parts omitted)*
- **diagram_idea**: End view of the three discs, input disc fixed at the left, output disc to the right and shifted downwards, centre disc floating between them, with the three links of each layer drawn as parallel bars; an animation slides the output shaft sideways to show all discs keep turning at the same angle, plus a small panel marking the forbidden 'in line' and 'fully stretched' positions.
- **sources**: 
  - https://en.wikipedia.org/wiki/Schmidt_coupling
  - https://commons.wikimedia.org/wiki/File:SchmidtCouplingGif.gif
  - https://en.wikipedia.org/wiki/Antiparallelogram
  - https://s3.amazonaws.com/www.motionusa.com/zero-max/Schmidt_Couplings.pdf
  - https://www.saddlebrookcontrols.com/wp-content/uploads/8-Zero-Max-Schmidt-Couplings.pdf
  - https://www.schmidt-kupplung.com/fileadmin/user_upload/Download/Kataloge_pdf/Katalog_SchmidtKupplung_2022_englisch_ansicht_.pdf
  - https://www.zero-max.dk/en/schmidt-couplings/
  - https://www.abssac.co.uk/p/Schmidt+Couplings/Schmidt+Offset+Coupling/48/
  - https://www.youtube.com/watch?v=ARs3y3i0enE
  - https://www.youtube.com/watch?v=zVt1tvD7rqk
  - https://www.youtube.com/watch?v=iZUC5Q2kp8E
  - https://www.youtube.com/watch?v=ubtz8d0qGQ4
  - https://wiki.dtonline.org/index.php/2100_Animated_Mechanical_Mechanisms
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/64462-schmidt-coupling
  - https://www.thingiverse.com/thing:4640046
  - https://help.prusa3d.com/article/pla_2062

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, input_output, make_it_yourself, making_tips_3d_printing, print_in_place, processes, related

## 195 Flexible drive shaft (rotating cable)

*clutches & couplings.* Layers of wound wire in a sleeve that carry rotation round bends, as in rotary-tool extensions and speedometer cables

### What it is

- **plain_name**: A bendy cable that spins inside a sleeve, so a motor can turn something round corners or at the end of a hose, like the wobbly extension on a Dremel or the cable that used to drive a car's speedometer
- **term**: Flexible shaft (flexible rotary shaft, flex shaft)
- **aliases**: 
  - flex shaft / flexi-shaft
  - flexible drive shaft; flexible rotary shaft; rotating cable; drive cable
  - speedometer cable / speedo cable; tachometer cable (its spinning part is the 'inner cable' or 'core')
  - power-drive flexible shaft vs remote-control flexible shaft, also called torsion shaft (Elliott; Thonab terms)
  - flex cable (radio-controlled boats)
  - pendant drill / flex-shaft machine (the hanging-motor tool used by jewellers)
  - Flex-Shaft attachment (Dremel (brand) model 225)
  - Foredom (brand), Suhner (brand), S.S. White (brand), Elliott (brand), Willtec (brand)
  - remote direct drive / flex-drive extruder (3D-printing use), e.g. Flex3Drive (brand), Zesty Nimble (brand)
- **family**: clutches & couplings
- **other_families**: gear trains, gearboxes & transmissions
- **one_liner**: A rotating core of wire wound in layers, usually running inside a non-turning sleeve (casing), that carries turning motion or power round bends and between parts that aren't lined up or that move.
- **complexity**: A small assembly that acts as one unit: a core (a centre wire with layers of spring wire wound over it, each layer in the opposite direction), an outer casing (flexible conduit or hose, sometimes with a liner) that doesn't turn, end fittings on the core (often squared ends, a collet or a short solid shaft), and ferrules or threaded nuts that anchor the casing ends (Elliott; Machine Design; Dremel).
- **how_it_works**: The core is made by winding several layers of springy wire round a centre wire, each layer at the opposite slope to the one below (Machine Design 2000). When it is twisted, half the layers try to unwind and swell while the layers between them try to wind tighter and shrink, so they squeeze against each other; that squeeze makes the bundle stiff in twist while it still bends easily, about 100 times stiffer than the layers acting alone (Machine Design 2013). It is strongest when turned the way that tightens the outer layer, because nothing outside that layer stops it loosening the other way (Machine Design 2000). The casing holds the spinning core in a smooth curve, keeps grease in and dirt out, stops the core looping or corkscrewing, and protects hands (Machine Design 2000; Thonab).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): carries turning motion round bends and over distance, to a tool or part that can move about while it runs
  - join and hold: connects a motor to a driven shaft that isn't lined up with it, standing in for bevel gearboxes, chain drives and universal joints (Thonab)
- **motion**: rotate: continuous rotation (small shafts up to about 20,000 rpm, Machine Design 2000); the shaft body also bends (flex), so its ends can be moved and aimed while it turns
- **degrees_of_freedom**: It passes 1 rotation from end to end (locked 1:1 apart from twist under load); otherwise the two ends are free to move and point in different directions within the bend-radius limits (turns of 180° or more, Machine Design 2000), so it is not a joint with a fixed number of freedoms.
- **special_behaviour**: 
  - none of the listed behaviours: it simply carries rotation round bends. Useful side effects: it 'naturally absorbs shock and dampens vibration' (Machine Design 2000; Thonab), removes the need for precise alignment, and its twist under load acts like a soft spring in the drive
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it transmits rotation
  - shape (the parts interlock; form-fit): the core's squared ends drive into square sockets (Machine Design 2000 'integral-form-squared' ends; HowACarWorks; Dremel)
  - friction or clamping (force-fit): some ends are gripped by a collet or clamp, e.g. an RC-boat flex cable held in a collet at the motor (Traxxas)
- **input_output**: Rotation -> the same rotation (1:1 on average), with the output lagging behind the input by the twist under load (torsional deflection, which is proportional to torque and length, Thonab). Shaft arrangement: any: in line, at an angle, offset, or moving, including 180° turns (Machine Design 2000). Efficiency 85-95% (Machine Design 2013) or 90-95% (Machine Design 2000). Back-drivable: yes, torque can pass either way, but a one-direction (unidirectional) shaft is much softer and weaker when turned the wrong way (Machine Design 2000).
- **power**: passive (no power needed): it only carries power from a motor or a hand crank
- **removability**: removable: the core ends usually push into square sockets or a collet and the casing screws or clips on; the Dremel flex shaft screws onto the tool by hand, and an RC-boat flex cable pulls out after loosening its collet (Dremel; Traxxas)
- **reuse_cycles**: effectively unlimited: it can be unplugged and refitted any number of times; what wears out is the core and its ends, from running hours, tight bends and lack of grease
- **tools_needed**: Often none for the casing (threaded ferrules are done up finger tight, HowACarWorks); a small spanner for a collet (Dremel wrench; Traxxas 10 mm wrenches); grease for relubrication
- **seal**: dust-resistant: the casing keeps dirt out and lubricant in (Machine Design 2000; Thonab); it is not watertight by itself, though RC boats pack the stuffing tube round the flex cable with heavy-duty waterproof grease (Traxxas)
- **load**: Light to medium, in twist only: small shafts carry a few N·m (Willtec 6 mm shaft 3 N·m, 20 mm shaft 18.5 N·m, data for 1 m length), a 0.25 in (6.4 mm) shaft about 60 lbf·in (6.8 N·m) continuous, and the largest up to 5,000 lbf·in (565 N·m) (Machine Design 2000). It is strong only in its design direction, and torque capacity falls with tighter bends and higher speed (Thonab). It can't support side or bending loads for the machine; the casing takes push-pull forces (Thonab).
- **adjustable**: no: its length and twist stiffness are fixed; you can re-route it, and the driven end can move while in use
- **play_and_precision**: No gear-type backlash, but noticeable twist (windup) under load that grows with torque and length (Thonab): e.g. Willtec's 6 mm shaft twists about 80° per metre at its 3 N·m rating, and the cable in Piercet's flex-drive extruder winds up about a quarter turn (Printables). Two-direction (bidirectional) shafts twist about the same either way, one-direction shafts much more the wrong way (Machine Design 2000). Misalignment tolerance: huge; offsets of 180° or more, against about 30° for a universal joint and 5° for a flexible coupling (Machine Design 2000).
- **access_needed**: end of a tube or shaft: each end fits onto or into a shaft end, square socket or collet, with the casing anchored beside it
- **materials**: Core: high-tensile carbon spring steel for general use; stainless steel for corrosion and heat to 600 °F (315 °C), phosphor bronze for lowest magnetism, Monel, and Inconel to 1,100 °F (593 °C) (Machine Design 2000). Casings: wound steel conduit, galvanised steel hose, or Rilsan plastic covers that resist oil, grease, dirt and corrosive agents; end fittings of stainless steel (Willtec).
- **maker_difficulty**: easy to fit, hard to make: buy one (a rotary-tool flex shaft or a speedometer cable) and print or make the mounts and end adaptors; winding a good core yourself is not practical

### Making it

- **processes**: 
  - off-the-shelf part: rotary-tool flex shafts, speedometer cables, RC-boat flex cables, and industrial flexible shafts with casings and end fittings
  - 3D print (FDM): holders, stands, routing guides, end adaptors and small gearboxes around a bought shaft (many Printables models)
  - CNC: machined end fittings, couplers and output gearboxes
- **print_in_place**: no: the wound-wire core is a bought part; only the parts around it are printed
- **making_tips_3d_printing**: 1) Buy the core and casing (a rotary-tool flex shaft or a speedometer cable) and print only the mounts, guides, adaptors and gearbox. 2) Put any speed-reducing gearbox at the driven (tool) end, so the cable spins fast with little torque; that keeps twist and load low (Thonab). Flex-shaft 3D-printer extruders use 30:1-40:1 reductions at the hot end (Steemit overview), the Orbiter extruder designer says about 20-30:1 is needed to avoid print artefacts from twist (Hackaday comment), and Piercet's 40:1 NovaPro turns a quarter turn of cable windup into about 1/16 of a gear tooth (Printables). 3) Clamp the casing ends firmly so the casing can't turn or pull out; keep bends gentle, e.g. no bend within 50 mm of either end and at least 150 mm radius elsewhere for a car speedometer cable (HowACarWorks), 6 in (152 mm) minimum for the Dremel 225 (Dremel); check your own cable's minimum bend radius. Print clips and guides with generous curved paths and don't pinch the casing, because a crushed casing makes the drive jerky (HowACarWorks). 5) Mount the motor higher than the working end, as Dremel warns the core can otherwise work loose. 6) Expect windup: boothyboothy abandoned a DIY speedometer-cable extruder because cable twist 'considerably' negated retraction (Printables), while FLEXTRUDER2 17 reached reliable results with a worm drive and the cable at 1,500 rpm (hackaday.io). 7) Printed housings near motors and fast-spinning cable get warm; 8) Leave room to pull the core out for greasing. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for 'flexible shaft', 'flex shaft', 'flexible drive shaft', 'flexible rotary shaft', 'power drive flexible shaft', 'remote control flexible shaft', 'speedometer cable' or 'speedo inner cable', 'tachometer cable', 'rotary tool flex shaft attachment' (e.g. Dremel 225 (brand)), 'pendant drill' or 'flex shaft machine' (e.g. Foredom (brand)), 'RC boat flex cable' and 'stuffing tube', and flex-shaft extruder kits (Flex3Drive (brand), Zesty Nimble (brand)). Industrial makers: S.S. White (brand), Elliott (brand), Suhner (brand), Willtec (brand), with end couplings such as square ends, cylindrical solid or hollow shafts and keyed shafts. Supporting parts: shaft couplers, collets, casing ferrules and clamps, and wheel-bearing grease.
- **rules_of_thumb**: 
  - Turn it in the direction that tightens the outer layer (TOL): that gives the highest stiffness and strength, and the loosen-outer-layer (LOL) direction the lowest (Machine Design 2000). A shaft whose outer layer is wound left-handed carries more torque clockwise; a right-wound one, counter-clockwise (Thonab).
  - A shaft counts as bidirectional only if its stiffness the weak way is at least 40% of the strong way (torsional stiffness ratio, TSR); the best reach 60-65% (Brian Parlato, 'Flexible shafts eliminate obstacles', Machine Design, 2000).
  - Size it for start-up or stall torque, not running torque; below 100 rpm (hand operation) a shaft can take about twice its rated running torque (Machine Design 2000).
  - Speed: shafts up to 0.188 in (4.8 mm) diameter run at up to 20,000 rpm; for 0.25 in (6.4 mm) and larger keep the surface speed under 500 ft/min, i.e. max rpm = 500 × 12 / (π × diameter in inches) (Machine Design 2000). Below 3,000 rpm no special measures are needed (Machine Design 2013).
  - Catalogue torque values apply at about 20% of maximum speed with the shaft straight; the maximum torque falls as speed rises and as bends get tighter, and exceeding it can permanently deform the shaft (Thonab).
  - Twist is proportional to torque and length (Thonab); e.g. a 6 mm Willtec shaft twists 80° per metre at 3 N·m and has a 70 mm minimum bend radius (Willtec TR data sheet).
  - Run the shaft as fast as practical: put a step-up gearbox at the motor end, or a reduction gearbox at the tool end (Thonab).
  - Use a casing for high-speed cores longer than about 5-8 cm (Thonab) and for any shaft over 12-14 in (300-350 mm), which otherwise tends to corkscrew; a casing also raises torque capacity (Machine Design 2000). Casing bore about 1.2 × core diameter (Thonab).
  - Route with the largest possible bends (Thonab): Dremel 225 minimum 6 in (152 mm) radius (Dremel instructions); car speedometer cables, no bend within 50 mm of either end and at least 150 mm radius elsewhere (HowACarWorks).
  - Grease sparingly and regularly: Dremel, a very thin film of wheel-bearing grease every 25-30 hours of use, as too much overheats it (Dremel); industrial cores, clean and grease about every 200 hours, or 50 hours in wet conditions (Thonab); RC boats, regrease the flex cable every three runs, about 15 minutes of running (Traxxas).
  - Flexible shafts are 85-95% efficient, typically better than gears, universal joints and belts (Machine Design 2013).

### When to use it

- **everyday_examples**: 
  - The flexible extension for a Dremel-type rotary tool, or a jeweller's hanging-motor pendant drill (Wikipedia; Dremel 225 instructions)
  - The speedometer cable behind older car and motorbike dashboards (Machine Design 2000; HowACarWorks)
  - A plumber's drain snake and the drive in a string trimmer (Wikipedia; Machine Design 2000)
  - The flex cable that drives the propeller of a radio-controlled boat (Traxxas)
- **when_to_use**: Use it when the motor and the thing it turns can't be lined up, are far apart, sit round a corner, or move relative to each other: a handheld tool driven by a heavier motor hung out of the way, a knob that adjusts something buried inside a machine (remote-control shafts), a light drive to a moving carriage (flex-shaft 3D-printer extruders), or a boat propeller. It saves precise alignment work, weighs about a third as much as the alternatives (Machine Design 2000), soaks up shock and vibration, and can turn 180° or more.
- **when_not_to_use**: Avoid it when you need exact position or no lag under load (it twists; use a rigid shaft with universal joints or gears, or put a stepper or servo motor at the far end), for high torque at low speed (twist and stress rise; add a reduction gearbox at the far end instead, Thonab), where bends would be tighter than its minimum radius (use bevel gears or a right-angle gearbox), or when a one-direction shaft would have to drive hard both ways. To push or pull rather than turn, use a Bowden (push-pull) cable.
- **environment_limits**: Heat: sharp or multiple bends make the jacket and handpiece hot, and too much grease overheats it (Dremel). Special cores handle heat: stainless steel to 600 °F (315 °C), Inconel to 1,100 °F (593 °C) (Machine Design 2000). Water: carbon-steel cores rust, so use stainless or keep them greased; wet conditions shorten greasing intervals to about 50 hours (Thonab), and gearbox oil seeping up a speedometer cable makes the needle sluggish (HowACarWorks). Dust: the casing keeps it out (Thonab). Vibration: it absorbs shock and vibration rather than suffering from it (Machine Design 2000). Over time grease dries and the square ends wear round (HowACarWorks). Printed mounts: PLA softens above about 60 °C (Prusa).
- **safety_notes**: A bare spinning core can catch hair, clothing or skin; keep it in its casing, which also shields the user (Machine Design 2000). Dremel's rules: wear eye protection; hold the handpiece firmly at start-up because the motor's reaction torque twists the shaft; don't use router bits or bits 1 in (25 mm) or larger, which can kick back; and never remove the end ferrule while it runs, or the cable 'will uncontrollably whip or lash around'. Over-bent shafts get hot (Dremel).
- **common_failures**: 1) Broken core, or square ends worn round so they no longer engage their sockets, so the drive stops (HowACarWorks). 2) Kinked, crushed or too sharply bent casing, giving a jerky drive (a twitching speedometer needle) and heat (HowACarWorks; Dremel). 3) Dry or dirty core, heard as tapping and felt as stiffness; clean it and re-grease sparingly (HowACarWorks; Dremel). 4) Overheating from too much grease or sharp bends (Dremel). 5) The shaft disengaging from the tool when the motor sits lower than the working end, or the core coming loose from the handpiece if it is pulled out to engage the driver cap (Dremel). 6) Too much twist (windup) for precise work, e.g. lost 3D-printer retraction (boothyboothy, Printables; Orbiter designer on Hackaday). 7) Permanent deformation from overload, or weakness from running a one-direction shaft the wrong way (Thonab; Machine Design 2000). 8) Long uncased cores looping or corkscrewing (Machine Design 2000; Thonab).
- **related**: 
  - Bowden cable (push-pull cable): the same sleeve-and-core idea, but it carries a pull or push instead of rotation
  - Universal joint (Hooke's joint): rigid and precise with no windup, but only about 30° per joint, and a single joint gives uneven speed (Machine Design 2000)
  - Bevel gears or a right-angle gearbox: an exact, stiff turn through 90°, but needs precise alignment
  - Belt or chain drive: bridges a gap between parallel shafts; needs alignment and tension
  - Schmidt coupling and Oldham coupling: join parallel offset shafts at exactly constant speed, but can't go round bends
  - Flexible beam coupling and jaw coupling: handle only small misalignment between nearly in-line shafts
  - Capstan cable drive (tendon drive): cables over pulleys that pull rather than spin
  - Remote motor with wires: often simpler today, as with electronic speedometer sensors replacing cables (Hackaday)

### Pictures, videos and models

- **links**: 
  - [2008-05-06 1990 Geo Storm GSi speedometer cable.jpg (Wikimedia Commons, by Ildar Sagdejev (Specious))](https://commons.wikimedia.org/wiki/File:2008-05-06_1990_Geo_Storm_GSi_speedometer_cable.jpg): Photo of a car speedometer cable in its casing *(licence: CC BY-SA 4.0 (also 3.0, 2.5, 2.0, 1.0) or GFDL 1.2 or later)*
  - [Flexible shaft motor.jpg (Wikimedia Commons, by Mauro Cateb)](https://commons.wikimedia.org/wiki/File:Flexible_shaft_motor.jpg): A jeweller's flexible-shaft motor (pendant drill) with its hanging motor and flexible shaft; the image used in Wikipedia's 'Flexible shaft' article *(licence: CC BY-SA 3.0)*
  - [Category:Flex shaft drills (Wikimedia Commons)](https://commons.wikimedia.org/wiki/Category:Flex_shaft_drills): 16 photos of flex-shaft drills and craftspeople using them in jewellery and metalwork *(licence: per-file licences (Creative Commons; check each file))*
  - [Flexible shafts eliminate obstacles (Brian Parlato, S.S. White, Machine Design, 2000)](https://www.machinedesign.com/motors-drives/article/21828208/flexible-shafts-eliminate-obstacles): Article with figures of the wire-layer construction and a shaft making a 180° turn, plus selection advice *(licence: link only)*
  - [Dremel Flex-Shaft Attachment Instructions, Model 225 (PDF)](http://pdf.lowes.com/useandcareguides/080596002251_use.pdf): Illustrated instructions including the 6 in minimum bend-radius diagram, fitting the square-ended core, and greasing *(licence: link only (manufacturer's copyright))*
- **make_it_yourself**: 
  - [NovaPro V4 - Flex Shaft Driven Dual Feed Gear Extruder (Piercet, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/33557-novapro-v4-flex-shaft-driven-dual-feed-gear-extrud): Open-source 3D-printer extruder with the motor on the frame driving a 40:1 gearbox at the hot end through a flexible shaft; STEP files and a bill of materials included (details read via the Printables API) *(licence: CC BY-NC-SA)*
  - [FLEXTRUDER2 17: Dual drive remote direct extruder (Luc JOB, hackaday.io)](https://hackaday.io/project/188378-flextruder2-17-dual-drive-remote-direct-extruder): Printed dual-drive extruder for delta printers driven by a flexible shaft from a remote motor through a worm gear; about 30 g at the head *(licence: CC BY-NC-SA)*
  - [Flexible Shaft Direct Drive for Ender 3 CR10S (boothyboothy, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/169204-flexible-shaft-direct-drive-for-ender-3-cr10s): DIY flex-shaft extruder using a speedometer cable; a useful cautionary example, as the designer abandoned it because cable twist undid retraction (details read via the Printables API) *(licence: CC BY-SA)*
  - [Flex Shaft Router (Steamboat Ed, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/194019-flex-shaft-router): Printed router table and fence that holds a Foredom flex-shaft handpiece to rout wood or thin aluminium (details read via the Printables API) *(licence: CC BY)*
  - [Dremel Flex Shaft Routing Guide (M, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/568612-dremel-flex-shaft-routing-guide): Printed router guide that clips onto a Dremel flex-shaft handpiece, e.g. for cutting openings in enclosures (details read via the Printables API) *(licence: CC BY-SA)*
- **diagram_idea**: Cutaway of a flexible shaft showing the centre wire and three wire layers wound in alternating directions inside a casing, with arrows showing that twisting one way tightens the outer layer (strong) and the other way loosens it (weak), plus an inset of a hanging motor driving a handpiece round a U-bend.
- **sources**: 
  - https://en.wikipedia.org/wiki/Flexible_shaft
  - https://www.machinedesign.com/motors-drives/article/21828208/flexible-shafts-eliminate-obstacles
  - https://www.machinedesign.com/motors-drives/article/21833481/flexible-rotary-shaft-operation-uses-and-advances
  - https://www.elliottmfg.com/frequently-asked-questions/
  - http://thonab.se/wp-content/uploads/2015/10/Flexible-shaft.pdf
  - https://www.willtec.de/media/pdf/9d/fe/e1/TR_DB_2022-08-24_EN.pdf
  - http://pdf.lowes.com/useandcareguides/080596002251_use.pdf
  - https://www.itm.com/pdfs/cache/www.itm.com/5000225-01/manual/5000225-01-manual.pdf
  - https://www.howacarworks.com/accessories/fitting-a-new-speedometer-cable
  - https://hackaday.com/2024/08/22/tech-in-plain-sight-speedometers/
  - https://hackaday.com/2020/11/05/a-featherweight-direct-drive-extruder-in-a-class-of-its-own/
  - https://steemit.com/printing3d/@boucaron/3d-printers-remote-direct-drive-extruders-overview
  - https://hackaday.io/project/188378-flextruder2-17-dual-drive-remote-direct-extruder
  - https://traxxas.com/articles/basic-boat-maintenance
  - https://commons.wikimedia.org/wiki/File:2008-05-06_1990_Geo_Storm_GSi_speedometer_cable.jpg
  - https://commons.wikimedia.org/wiki/File:Flexible_shaft_motor.jpg
  - https://commons.wikimedia.org/wiki/Category:Flexible_shafts
  - https://commons.wikimedia.org/wiki/Category:Flex_shaft_drills
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/pla_2062

### Other info

- **Fields with unverified parts:** making_tips_3d_printing

## 266 Shaft-to-hub joints and rigid couplings (key, set screw, D-flat, clamp hub)

*clutches & couplings.* The ordinary ways to fix a gear, pulley or wheel to a shaft, or join two shafts rigidly end to end

*Also covers:* Also covers shaft collars

### What it is

- **plain_name**: The everyday ways to lock a gear, pulley, wheel or knob onto a rod so they turn together, to stop parts sliding along the rod, or to join two rods end to end so they turn as one
- **term**: Shaft-hub connection (shaft-to-hub joint): key, set screw, D-flat or hex shaft, clamp hub; plus shaft collar and rigid shaft coupling
- **aliases**: 
  - keyed joint / key and keyway / keyseat (Wikipedia)
  - parallel key / square key / feather key / Woodruff key / taper key / gib-head key
  - shear key (a deliberately weak key, e.g. brass, that breaks on overload)
  - set screw / grub screw / blind screw / setscrew (cup, cone, flat, dog and knurled-cup points)
  - D-shaft / D-flat / flatted shaft / D-profile shaft / D-bore
  - double-D / double-flat shaft (round shaft with two flats; Shaft Buddy generator supports one or two flats)
  - hex shaft / hex bore (common in robotics kits, e.g. 5 mm hex, gm0; 1/2 in hex)
  - rounded-hex shaft (hex shaft turned round where it runs in bearings, gm0)
  - clamp hub / clamping hub / split hub / clamp-style bore
  - pinned hub / cross-pinned shaft / roll pin or spring pin through hub and shaft; Scotch key / Dutch pin
  - shaft collar / set collar / stop collar / locking collar / clamp collar / quick-clamping collar (lever) / Stellring (German)
  - rigid coupling / rigid shaft coupling / shaft coupler (maker term)
  - sleeve coupling / box coupling / muff coupling
  - clamp coupling / split-muff coupling / one-piece, two-piece and three-piece clamp couplings
  - flange coupling (flanged rigid coupling)
  - step-bore coupling (joins two different shaft sizes)
  - Welle-Nabe-Verbindung (German: shaft-hub connection)
- **family**: clutches & couplings
- **other_families**: clamping, magnetic & friction connections, locating & alignment, torque limiting & slip
- **one_liner**: The hub of a gear, pulley or wheel is locked to its shaft, either by shape (a key, a flat, a hex or a pin) or by squeezing (a set screw or a clamp), so turning force passes between them; the same methods make a collar that stops things sliding along a shaft and a rigid coupling that joins two shaft ends.
- **complexity**: A few parts: the shaft (round, flatted, keyed or hex), the hub (the thick centre of the gear, pulley or wheel) and a locking part: a key in matching slots, one or two set screws in a threaded hole, a clamp screw across a slotted hub, or a pin through both. A shaft collar is a ring with a set screw or clamp screw; a rigid coupling is a sleeve (one piece, or two or three bolted pieces) that clamps or keys onto both shaft ends.
- **how_it_works**: Turning force (torque) has to get from the shaft into the hub. With a shape lock, something sits in the way: a key sits half in a slot in the shaft and half in a slot in the hub, a flat or hex on the shaft matches a flat or hex in the hub, or a pin passes through both, so the parts cannot turn relative to each other (Wikipedia 'Key'). With a friction lock, a screw presses on the shaft: a set screw's point bites into one spot, while a clamp hub or clamp collar has a slot that its screw squeezes shut, gripping all the way round the shaft and holding up to about twice as well without marking it (Machine Design; Wikipedia 'Shaft collar'). A shaft collar uses the same set-screw or clamp grip to act as a stop or spacer on a shaft, and a rigid coupling grips (or keys onto) two shaft ends at once so they turn as one piece.

### Finder attributes

- **job**: 
  - join and hold: fixes a gear, pulley, wheel, cam or knob to a shaft, or joins two shafts end to end
  - line parts up exactly: shaft collars act as stops, spacers and bearing faces that hold parts at a set place along a shaft (Wikipedia 'Shaft collar')
  - slip or let go when overloaded (shear-key and spring-pin versions only): a deliberately weak key or pin breaks to protect the rest of the machine (Wikipedia 'Key')
- **motion**: none: once tightened, the hub and shaft (or the two coupled shafts) turn together as one part; the whole assembly turns continuously in its own bearings. A feather key or hex shaft can be made to let the hub slide along the shaft while still turning with it (Wikipedia 'Key'), which is really a sliding spline.
- **degrees_of_freedom**: 0 between the hub and the shaft (they are locked together); a key alone, a D-flat or a hex still leaves the hub free to slide along the shaft (1), so a set screw, collar, shoulder or retaining ring is added to stop that
- **special_behaviour**: 
  - fail-safe or breakaway (shear keys and spring pins only): a key made of weaker material (e.g. brass in a steel shaft and pulley) or a hollow spring pin shears off under excessive torque, leaving the pulley spinning freely instead of breaking something costlier (Wikipedia 'Key')
  - quick-release (lever collars only): quick-clamping shaft collars open and close with a lever instead of a screw, with no tools (Wikipedia 'Shaft collar')
  - none for ordinary keys, set screws, clamp hubs and rigid couplings: they simply hold
- **holding_principle**: 
  - shape (the parts interlock; form-fit): keys, Woodruff keys, D-flats, hex shafts, splines and cross pins
  - friction or clamping (force-fit): clamp hubs, clamp collars and clamp couplings, and set screws on a plain round shaft
  - material bond (glue, solvent or melting): optional; a retaining compound or thread-locker is often added (Slocum; gm0), see the anaerobic adhesive entry
- **input_output**: Continuous rotation -> the same rotation, 1:1 (no change of speed or turning force). Arrangement: in line (the hub is on the shaft; a rigid coupling joins two shafts on the same axis). Efficiency: no losses of its own, because nothing slides inside the joint. Back-drivable: yes, torque passes both ways. A rigid coupling has zero backlash and very high torsional stiffness but cannot take up any misalignment (PIB Sales Rigid Couplings Guide; Wikipedia 'Coupling').
- **power**: passive (no power needed)
- **removability**: removable for clamp hubs, clamp collars, clamp couplings and keys; semi-permanent for set screws on round shafts (the point raises a burr that makes the hub hard to slide off or move, Machine Design; Wikipedia 'Shaft collar') and for printed hubs pressed onto knurled shafts (cannot be disassembled, EngineerDog)
- **reuse_cycles**: many times for clamp-style hubs, collars and couplings (infinitely adjustable, Machine Design) and for keys; a few times for set screws (each time it bites into the shaft or flat; knurled cup-point set screws should not be reused at all, Wikipedia 'Set screw'); once for pressed-on printed hubs
- **tools_needed**: Hex keys (Allen keys) for socket set screws and clamp screws; screwdriver for slotted set screws; a file or grinder to put a flat on a round shaft (hackaday.io comment; Wikipedia 'Set screw'); a drill (ideally drilling hub and shaft together) for cross pins (Slocum); a broach, keyseater, slotting tool or mill to cut keyways (Wikipedia 'Key'); thread-locker for set screws (gm0); a hacksaw to cut steel shafts (gm0)
- **seal**: none: these joints do not seal anything
- **load**: Light to heavy. Strongest to weakest in turning (twist): interference fit, spline, circumferential clamp, key, pin, and last the set screw (Slocum's ranking). Along the shaft (pull or push), a key or flat holds nothing by itself; the set screw, collar or clamp takes that load. Clamp collars hold well under steady loads but can creep along the shaft under shock loads, so a shaft groove (undercut) with a two-piece collar is used where impacts occur (Machine Design; Wikipedia 'Shaft collar'). Example set screw figures (Unbrako, soft shafts Rc 15-35, plain round shaft): an M3 cup-point set screw holds about 0.71 kN along the shaft and about 1.8 N·m of torque on a 5 mm shaft; an M4 about 1.7 kN and 4.3 N·m on 5 mm. Printed hubs are much weaker, limited by the plastic around the nut or thread (EngineerDog).
- **adjustable**: yes for clamp hubs, clamp collars and clamp couplings: loosen, slide or turn to any position and re-tighten, with no shaft damage (Machine Design). Set-screw hubs and collars can be moved only until the point has marked the shaft; after that the screw tends to pull back into its old mark (Machine Design). Keyed and D-flat hubs can slide along the shaft but always sit at the same angle.
- **play_and_precision**: Play: none for a tight clamp hub or clamp coupling (zero backlash, PIB); small for keys (a worn keyway adds play, Wikipedia 'Coupling' on taper locks); none for a set screw until it slips, then sudden and large; small to noticeable for printed D-flat and hex bores. Repeatability: keys, flats and hexes always return to the same angle; clamps and plain set screws do not. Misalignment: a rigid coupling tolerates essentially none; any angular or parallel misalignment is forced into the shafts and bearings, so rigid couplings are used only where alignment is precise (PIB; Wikipedia 'Coupling'); use a flexible coupling otherwise.
- **access_needed**: end of a tube or shaft for one-piece hubs, set-screw collars, one-piece clamp collars and one-piece couplings, which must slide on over a free shaft end; two-piece clamp collars and two-piece couplings can be fitted from the side without removing other parts, and three-piece couplings let one shaft be removed on its own (Machine Design; PIB Sales)
- **materials**: Shafts: steel (for set-screw grip the shaft should be softer than the screw; Machine Design says point penetration drops when the hardness difference is under 10 HRC), stainless steel, aluminium; hex and D-shafts in robotics kits. Hubs, collars and couplings: steel, stainless steel, aluminium, plastics; printed hubs in PLA, PETG, nylon with a captive steel nut or heat-set insert for the screw (EngineerDog). Keys: steel, or brass as a deliberate shear key (Wikipedia 'Key'). Set screws: case-hardened alloy steel (Wikipedia 'Set screw'). Stainless couplings use patched or coated screws to avoid galling (PIB).
- **maker_difficulty**: easy for set screws, clamp hubs, collars and couplings bought ready-made, and for printed D-flat or hex bores with a captive nut; moderate for pinned hubs (drill hub and shaft together); hard for keyways (need a broach, slotting tool or mill), so buy pre-keyed parts

### Making it

- **processes**: 
  - off-the-shelf part: set-screw and clamp shaft collars, clamping hubs, rigid couplings (one-, two- and three-piece, step-bore), pre-keyed shafts, keys and D- or hex shafts
  - 3D print (FDM): hubs with D-flat, hex or square bores, captive-nut set-screw hubs, printed clamp collars and couplers (usually with metal screws and nuts)
  - CNC: turning hubs, milling flats and keyways, drilling cross-pin holes
  - woodwork: wooden wheels and hubs pinned or wedged onto dowel axles (pinned shape lock) *(unverified parts omitted)*
- **print_in_place**: no: the hub is printed as part of the gear, pulley or wheel and then fitted to a metal shaft with a screw, nut or pin; printed collars and couplers are assembled with metal screws (one printed clamp-collar kit on Printables is a print-in-place hinge-and-screw collar, but it still needs a bolt)
- **making_tips_3d_printing**: 1) Prefer shape over friction: a D-flat, double flat, hex or square bore transmits torque far better than a round hole with a screw; a plain press fit on a smooth printed bore loosens as the plastic creeps (EngineerDog). 2) Holes print undersize: oversize the bore by about 0.13 mm (0.005 in) across, or ream it (EngineerDog); test-print a short ring first. 3) Set screws: don't thread a set screw straight into plastic (the thread strips); trap a nut in a square or hex pocket beside the bore, or use a heat-set insert, and make the hub wall thick, because tightening the screw can split the hub (EngineerDog). Matthew Mead's captive-nut hub for a stepper-motor GT2 gear used an M3 set screw: he measured the nut at 5.44 mm across flats, 6.18 mm across corners and 2.24 mm thick, made the pocket 5.8 x 6.6 x 2.6 mm (about 0.4 mm extra in width and height, 0.2 mm in depth) and the screw hole 3.6 mm, then paused the print to drop the nut in (keep it level with or below the top surface so the nozzle cannot hit it). 4) Aim the set screw at the shaft's flat; Machine Design notes a flat adds little holding but locates the screw, and two screws in line along the shaft almost double the grip, while two screws 60 degrees apart give about 1.75 times. 5) Clamp hubs print well: slot the hub and squeeze it with a screw and nut placed across the slot; keep the screw axis parallel to the layers so it compresses the layers rather than pulling them apart (km98's three-bolt and one-bolt printed collets on hackaday.io). 6) For shafts that came with a pressed-on metal pinion, print a gear-shaped socket with zero clearance and press it over the pinion (hackaday.io). 7) For high torque on a motor shaft, fit one half of a metal jaw (spider) coupling and model a matching socket into the printed part (Hackaday). 8) Use thread-locker on set screws (gm0), but check it is safe for the plastic. 9) PLA hubs soften above 60 C and PETG is fine below 80 C (Prusa), so avoid PLA hubs on warm motors.
- **off_the_shelf_parts**: Set-screw shaft collars and one-piece, two-piece and quick-clamping (lever) clamp collars, including D-bore and hex-bore collars (Wikipedia 'Shaft collar'); clamping hubs (robotics kits: goBILDA, Actobotics, REV (brands), gm0); rigid couplings: set-screw, one-piece clamp, two-piece clamp, three-piece and step-bore couplings, and double-wide collars used as couplings (PIB Sales; Ruland (brand)); socket set screws (grub screws) with cup, cone, flat, dog and knurled-cup points (ISO 4029 for knurled cup, Wikipedia); parallel keys, Woodruff keys and key stock; keyed shafts, D-shafts and hex or rounded-hex shafts (gm0 glossary); spring (roll) pins and dowel pins; keyless locking bushes and taper-lock bushes (see those entries).
- **rules_of_thumb**: 
  - Set screw size: diameter about half the shaft diameter (Machine Design, 'Setscrews').
  - Two set screws: in line along the shaft about doubles holding power; directly opposite (180 degrees) adds only about 30%; 60 degrees apart gives about 1.75 times one screw (Machine Design).
  - A flat on the shaft adds only about 6% torsional holding power and does little to stop small slips, though it helps locate the screw; cone points dig in most and oval points least; point penetration adds up to about 15% (Machine Design).
  - Slotted set screws hold about 45% less than socket set screws because less tightening torque can be applied (Machine Design).
  - Thread engagement for set screws: 1-1.5 x screw diameter in brass, cast iron and aluminium; 0.75-1 x in steel (Machine Design).
  - Typical metric cup-point set screw values on soft shafts (Rc 15-35), no flat: M3 seating torque 0.87 N·m, axial hold 0.71 kN; M4 2.2 N·m, 1.7 kN; M5 4.6 N·m, 2.5 kN; torque hold is roughly axial hold x shaft radius (e.g. M3 on 5 mm shaft about 1.8 N·m) (Unbrako Socket Set Screws - Metric spec sheet; use a safety factor).
  - Clamp collars grip with up to about twice the holding power of set-screw collars; two-piece clamp collars grip slightly more than one-piece (Machine Design, 'Clamp Collars Hold Tight Without Harming Shafts'; Wikipedia 'Shaft collar').
  - Key with a set screw: make the set-screw diameter equal to the key width; the screw then only holds the hub along the shaft and the key carries the torque (Machine Design).
  - Key or pin torque capacity = shear area of the key (or both sides of the pin) x shaft radius x shear strength of the key or pin material; drill cross-pin holes through hub and shaft together, and pin only near a shaft end where there is little bending (Slocum, FUNdaMENTALs Topic 5 p. 5-27).
  - Preference order for attaching a part to a shaft: interference fit, spline, circumferential clamp, key, pin, and last the plain set screw, which 'could be your worst nightmare if it loosens' (Slocum Topic 5 p. 5-27).
  - Tighten paired clamp screws a little at a time, alternating, so the clamp grips evenly (PIB Sales rigid couplings guide). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - A volume or potentiometer knob held on its shaft by a small set screw (Wikipedia 'Set screw' photo)
  - The GT2 pulley on a 3D printer's stepper motor, gripped by grub screws on the motor's D-flat shaft
  - Shaft collars on foosball table rods, home gym equipment and coat racks (Wikipedia 'Shaft collar')
  - A lawnmower or machine pulley on a keyed shaft; some use a soft brass shear key so an overload shears the key instead of the shaft (Wikipedia 'Key')
- **when_to_use**: Every time a rotating part must turn with its shaft or a shaft must be joined end to end. Use a set screw for light, low-cost jobs such as knobs and small pulleys on a D-flat shaft; a clamp hub or clamp collar when you want strong grip, easy adjustment and no shaft damage (gm0 and Machine Design recommend clamping over set screws); a key for heavy, reversing or shock loads with a fixed angle; a hex or D shaft for robots and printed parts (Slocum calls a hex shaft the simplest spline for a robot contest); a pin where torque must be positive and cheap; shaft collars to stop shafts and parts sliding and to hold bearings in place; and a rigid coupling to join two well-aligned shafts with zero backlash (PIB).
- **when_not_to_use**: Don't rely on a plain set screw for drivetrains, reversing loads or anything important: it loosens and marks the shaft (Slocum; gm0); use a clamp hub, key, hex or spline instead, or at least seat the screw in a drilled dimple and add thread-locker. Don't use a rigid coupling between a motor and a shaft that are not perfectly aligned (e.g. a stepper motor and a lead screw in a printed frame): use a flexible (beam, jaw or Oldham) coupling instead. Don't press a printed hub onto a smooth shaft for lasting torque (creep, EngineerDog). Don't use a set screw on a shaft as hard as the screw (it cannot bite, Machine Design). For overload protection use a proper shear pin or slip clutch rather than hoping a set screw slips.
- **environment_limits**: Vibration and reversing loads loosen set screws and clamp screws; use thread-locker (gm0) or knurled-cup set screws, which resist vibration but must not be reused (Wikipedia), and quality couplings with nylon-patched screws (PIB). Shock loads can make clamp collars creep along the shaft (Machine Design). Printed hubs creep under constant clamp or press load and lose grip over time (EngineerDog); PLA softens above 60 C and PETG is fine below 80 C (Prusa). Stainless screws in stainless couplings can gall (seize) without a coated or patched thread (PIB). *(unverified parts omitted)*
- **safety_notes**: Rotating shafts, collars and couplings can catch hair, clothing and gloves; projecting set screws, bolts and keys make this much worse (OSHA machine guarding: rotating motion), which is why modern collars use recessed hex-socket set screws instead of the early square-head screws that dragged workers into line shafting (Wikipedia 'Shaft collar'). Guard exposed couplings and keep screws flush. A set screw that works loose can let a gear or pulley slip suddenly, dropping a load. Metal burrs raised by set screws are sharp.
- **common_failures**: 1) Set screw loosens or slips under vibration or reversing torque, even with a flat (Slocum's student quote): use a clamp, key, hex or pin, or dimple the shaft and use thread-locker. 2) Raised burr from the set screw point stops the hub or collar sliding off, and later adjustments snap back to the old mark: file the burr, or use clamp-style parts (Machine Design; Wikipedia). 3) Stripped plastic threads or a split printed hub when tightening a set screw: use a captive nut or insert and a thicker hub (EngineerDog). 4) Stripped hex or D bore (the bore wears round, gm0 'stripping the bore'): use metal hubs for high torque or a larger shaft. 5) Clamp collar creeping along the shaft under shock: add a shaft groove (undercut) with a two-piece collar (Machine Design). 6) Rigid coupling on misaligned shafts overloading bearings or cracking the coupling: align carefully or use a flexible coupling (PIB; Wikipedia 'Coupling'). 7) Worn keyway giving play: fit a new key or use a taper-lock bush, which removes keyway play (Wikipedia 'Coupling'). 8) Uneven clamping from tightening one screw fully before the other: tighten alternately in small steps (PIB).
- **related**: 
  - Keyless locking bush (taper-lock bush, shaft locking device): clamps a hub with wedging rings, with no keyway, and centres it
  - Taper fit (Morse taper): a cone-in-cone fit that locks and centres by friction
  - Press fit (interference fit): the strongest and simplest-looking, but needs accurate sizes and is hard to undo
  - Spline shaft (sliding spline): many keys at once; transmits high torque and can let the hub slide
  - Servo horn and spline hub: the fine-toothed spline and screw used on hobby servos
  - Collet and keyless chuck: clamp a round shaft with a slotted, tightened sleeve
  - Retaining ring (circlip, E-clip): snaps into a groove to stop sliding, a smaller alternative to a collar (gm0)
  - Shear-pin coupling (breakaway link): a deliberately weak pin, like a shear key, to protect the machine
  - Jaw coupling, Oldham coupling, flexible beam coupling and Schmidt coupling: flexible alternatives to a rigid coupling that tolerate misalignment
  - Anaerobic adhesive (threadlocker, retaining compound): glue that locks set screws or bonds hubs to shafts
  - Captive nut pocket and heat-set threaded insert: how printed hubs get a strong thread for their set screw
  - Tolerance ring (wavy-band press fit): a springy band that makes a press fit forgiving

### Pictures, videos and models

- **links**: 
  - [Parallel keys.png (Wikimedia Commons, by B. Gieseler)](https://commons.wikimedia.org/wiki/File:Parallel_keys.png): Technical drawing of parallel keys and a keyed shaft-hub joint in cross-section *(licence: CC BY-SA 3.0 / GFDL 1.2+ (multi-licensed))*
  - [Stellring.svg (Wikimedia Commons, by Biezl)](https://commons.wikimedia.org/wiki/File:Stellring.svg): Drawing of a one-piece shaft collar secured with a set screw *(licence: Public domain)*
  - [Potentiometer knob with set screw.jpg (Wikimedia Commons, by Petteri Aimonen)](https://commons.wikimedia.org/wiki/File:Potentiometer_knob_with_set_screw.jpg): Photo of a knob fixed to a potentiometer shaft by a set screw *(licence: Public domain)*
  - [Shaft Retention (Game Manual 0)](https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/shaft-retention.html): Pictures of a set-screw collar, a clamping collar and a shaft with an E-clip, with pros and cons for robots *(licence: link only)*
  - [Types of Shaft Keys - Introduction with Animation - Machine Design (Solidworks Fun, YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=F3c6GPAFZMI): CAD animation of the main types of shaft keys and how they fit in keyways *(licence: link only)*
- **make_it_yourself**: 
  - [Customizable Shaft Buddy: A shaft coupler/adapter generator (Tyler Bletsch, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/36584-customizable-shaft-buddy-a-shaft-coupleradapter-ge): OpenSCAD generator for printed couplers and adapters between hex, square, round (with set screws) and single- or double-flat shafts, male or female on each end *(licence: CC BY)*
  - [Parametric Shaft Collar - Clamp Collar (MSB, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/490175-parametric-shaft-collar-clamp-collar): Fusion 360 parametric two-piece clamp collar using M3 cap screws and square nuts, printed in PETG *(licence: CC BY-NC)*
  - [5mm to 8mm Stepper / 775 Motor Z Axis Shaft Coupler / Coupling (BuildModHack, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/272446-5mm-to-8mm-stepper-775-motor-z-axis-shaft-coupler-): Printed clamp-style coupler joining a 5 mm D-shaft motor to an 8 mm lead screw with two M3 screws and lock nuts *(licence: CC BY-NC)*
  - [Stepper motor shafts: Connecting gears/pulleys (hackaday.io project)](https://hackaday.io/project/174013-stepper-motor-shafts-connecting-gearspulleys): Three tested printed ways to attach parts to motor shafts: a zero-clearance press-on socket over a factory pinion, and three-bolt and one-bolt printed clamp collets for smooth shafts *(licence: not stated)*
- **diagram_idea**: A row of five end-on cross-sections of a shaft inside a hub (key in keyway, set screw on a D-flat, hex shaft in hex bore, slotted clamp hub with its screw, cross pin), each with an arrow showing where the turning force passes, plus a side view of a collar as a stop and a sleeve coupling joining two shaft ends.
- **sources**: 
  - https://en.wikipedia.org/wiki/Key_(engineering)
  - https://en.wikipedia.org/wiki/Set_screw
  - https://en.wikipedia.org/wiki/Shaft_collar
  - https://en.wikipedia.org/wiki/Coupling
  - https://commons.wikimedia.org/wiki/File:Parallel_keys.png
  - https://commons.wikimedia.org/wiki/File:Stellring.svg
  - https://commons.wikimedia.org/wiki/File:Potentiometer_knob_with_set_screw.jpg
  - https://commons.wikimedia.org/wiki/Category:Keys_and_keyways
  - https://www.machinedesign.com/fastening-joining/article/21834719/setscrews
  - https://machinedesign.com/what039s-inside/clamp-collars-hold-tight-without-harming-shafts
  - https://www.unbrakousa.com/images/pdf/Socket_Set_Screws_Metric_Spec_Sheet.pdf
  - https://pibsales.com/power-transmission/rigid-couplings-guide/
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
  - https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/shaft-retention.html
  - https://gm0.org/en/latest/_sources/docs/common-mechanisms/power-transmission/shaft-retention.rst.txt
  - https://gm0.org/en/latest/docs/hardware-components/kit-and-hardware-guide/kit-glossary.html
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - http://matthewtmead.com/blog/captive-nut-technique/
  - https://hackaday.io/project/174013-stepper-motor-shafts-connecting-gearspulleys
  - https://hackaday.com/2019/09/02/misuse-this-part-to-attach-3d-printed-stuff-to-a-shaft/
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.youtube.com/watch?v=F3c6GPAFZMI
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, processes, rules_of_thumb

