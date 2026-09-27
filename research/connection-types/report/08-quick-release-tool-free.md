# quick-release & tool-free: Joins and comes apart without tools

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 18 Half nut (split nut, quick-action nut)

*quick-release & tool-free.* A nut split in two that opens away from a screw so the part can slide freely, then closes to be driven by the screw again, as in quick-release vices

### What it is

- **plain_name**: A nut cut in half lengthwise that can be lifted off a threaded rod so the part slides freely along it, then clamped back on so turning the rod drives the part again
- **term**: Half nut (split nut)
- **aliases**: 
  - split nut
  - half-nuts (plural, on lathes: 'engage the half-nuts')
  - half-nut lever (the lathe control that closes them)
  - quick-release nut / quick-action nut
  - quick-release vice (vise) / quick-action vice mechanism
  - pivoting nut (a single half nut that swings on and off the screw, as in some bench vices)
  - push-button quick-release nut / push-button easy-adjust nut (McMaster-Carr)
  - slip-on twist-close split nut (McMaster-Carr)
  - quick release screw or knob with retracting thread segments (e.g. GN 6336 by JW Winco (brand))
- **family**: quick-release & tool-free
- **other_families**: clutches & couplings, motion conversion, sliding, telescoping & linear motion
- **one_liner**: A nut split lengthwise into two halves that can be opened away from a lead screw so a carriage or vice jaw slides freely to a new position, then closed again so the screw drives or clamps it, as in quick-release vices, lathe carriages and syringe pumps.
- **complexity**: A small assembly that acts as one unit: the lead screw, two nut halves (or a single half nut pressed against the screw from one side), a slide or pivot that lets the halves move only towards and away from the screw, and something to open and close them (a lever with a cam, a trigger with a spring and bar, or a part-turn of the handle helped by gravity or a spring).
- **how_it_works**: Each half carries part of an internal thread. When the halves are pressed onto the screw they act as an ordinary nut, so turning the screw moves the nut and whatever it is fixed to. When a lever, cam or trigger pulls them apart, the threads no longer touch, so the part can slide along the screw without the screw turning. Closing them again drops the threads into the nearest groove, and the ends of the halves are chamfered (bevelled) so they find the groove easily. Sloping thread faces push the halves apart under load, so the closing mechanism must hold them shut firmly, or the thread's loaded face must be nearly square (buttress thread) so there is little opening force.

### Finder attributes

- **job**: 
  - lock, and release by hand: engage or free the drive in a moment with a lever, trigger or part-turn
  - change the kind of motion: when closed, the screw's rotation drives a straight-line motion
  - let it move (turn, slide or bend): when open, the part slides freely for quick, coarse positioning
- **motion**: multiple: the halves move a few millimetres sideways to open and close; when open, the carriage or jaw slides freely along the screw; when closed, the screw's rotation moves it in a straight line
- **degrees_of_freedom**: Closed: 1 (the screw's rotation, which sets the travel). Open: 2 (the carriage slides and the screw turns independently). The halves add one small open-and-close motion of their own.
- **special_behaviour**: 
  - quick-release: frees a screw-driven part in a moment so it can be slid to a new position instead of wound there
  - hand-release only (locks under load, releases when a person operates it): once closed, the vice jaw or carriage stays driven by the screw until someone works the lever, trigger or handle
  - motion conversion (rotary to linear): while closed it works as a lead screw nut
  - self-locking (holds under load, won't back-drive): when closed on a fine-lead screw, the clamping force can't push the jaw back
- **holding_principle**: 
  - shape (form-fit): the nut halves' threads interlock with the screw's threads
  - spring force: many designs use a spring to hold the halves closed (or open); some rely on gravity or an over-centre cam instead
  - friction or clamping (force-fit): thread friction keeps a fine-lead screw from being back-driven while clamped
- **input_output**: Engaged: screw rotation -> straight-line travel of the nut, carriage or vice jaw, at one lead per turn, with the same sliding-thread efficiency as a plain lead screw nut (see the lead screw entry); shafts in line; back-drivable only if the lead screw itself is. Disengaged: no drive, so the part slides freely by hand.
- **power**: passive (no power needed): operated by hand, even when the screw itself is motor-driven (lathes, syringe pumps)
- **removability**: tool-free quick release: the drive is engaged and released by hand in a moment, many times over; the assembly itself is fitted and removed with ordinary tools
- **reuse_cycles**: many times: it is designed to open and close constantly; wear on the thread edges, bent actuating parts and trapped dirt slowly reduce its grip
- **tools_needed**: None to operate. Spanners or screwdrivers to install. For a home-made wooden vice, an angle grinder with a cut-off disc to split a steel nut in half, plus woodworking tools (ibuildit.ca build). For a printed vice, none (LoboCNC's design uses no fasteners).
- **seal**: none: it is an open thread; dirt or metal shavings in the halves stop them closing fully
- **load**: Medium to heavy along the screw when properly closed: quick-release vices clamp hard, and lathe half-nuts drive the carriage while it cuts threads. The weak point is the force that pushes the halves apart: with V or trapezoid threads the load tries to wedge the nut open, so a worn or loose closing mechanism lets it slip. Buttress threads, with a nearly square loaded face, create little opening force.
- **adjustable**: yes: the part can be set anywhere along the screw, coarsely by sliding it while open and finely by turning the screw while closed. In some vices the depth of engagement can also be adjusted by moving the actuating bar or lever; in the wobblycogs repair, moving the bar one position changed it from slipping to too stiff to release.
- **play_and_precision**: Noticeable: it has the backlash of any lead screw nut, plus any looseness in the halves' guides. Re-engaging lands the thread in the nearest groove, so positions come in whole-thread steps; lathes use a threading dial to show when to close the half-nuts so the tool follows the same groove on every pass. It tolerates little misalignment: if the halves don't close fully they ride on the edge of the thread and slip under load.
- **access_needed**: not applicable: it is operated from one side by a lever, trigger or handle; because the halves close around the screw from the side, a split nut can even be fitted anywhere along a rod without reaching its end (McMaster-Carr's slip-on twist-close split nuts)
- **materials**: Lathe half-nuts are bronze or steel parts running on the lathe's lead screw (Canadian Hobby Metal Workers forum). Bench vices use cast iron or steel. Commercial quick nuts are black-oxide or zinc-plated steel or 18-8 stainless steel (McMaster-Carr). DIY wooden vices use a steel nut cut in half, set into hard maple (ibuildit.ca). Fully printed vices use PLA (LoboCNC; Doschen).
- **maker_difficulty**: moderate: fully printed half-nut vices exist and print without supports (LoboCNC), and a steel nut can be cut in half for a wooden vice, but the halves need a precise guide and a firm closing mechanism, and the ibuildit.ca builder calls fitting the nut the trickiest, most precise step

### Making it

- **processes**: 
  - 3D print (FDM): complete quick-adjust vices with printed screw and half nut
  - woodwork: wooden vice jaws holding a steel nut cut in half, on a steel threaded rod
  - CNC: bronze or brass half-nut pairs machined for lathes
  - off-the-shelf part: quick-release vices and vice screws, push-button and twist-close quick nuts, replacement lathe half-nuts
- **print_in_place**: no: the printed half-nut vices (LoboCNC; Doschen) are printed as separate parts and snapped or slid together without fasteners
- **making_tips_3d_printing**: 1) Use an asymmetric thread whose loaded face pulls the screw into the half nut rather than pushing it out: LoboCNC calls this 'the secret' of his Quick-Adjust Half-Nut Vise, which lets you lift the screw out of the half nut, slide the jaw and drop it back in. A buttress-style profile (flat load face, sloping back face) does this; Wikipedia notes the square face of a buttress thread creates minimal disengagement force. 2) A 45-degree back face prints without supports when the screw stands upright with the flat faces pointing up (Miloslav Brozek's parametric screw jack, Printables model 1724067, read via the Printables API). 3) LoboCNC printed all parts in PLA at 0.2 mm layers and 0.4 mm line width, without supports, in the supplied orientations; the updated version uses 4 perimeters and 35% infill for a rigid body. 4) Get the first layer right when printing the screw: elephant's foot, or poor bed adhesion, stops it working smoothly (LoboCNC). 5) Doschen's lever-release vice uses 0.15 mm layers and 20% infill, with a brim strongly recommended on the main screw. 6) Chamfer the ends of the half nut (Wikipedia gives 60 degrees to the axis for metal split nuts) so the threads find their groove as it closes. 7) Make the closing latch or wedge stiff; a flexible printed lever lets the halves ride up and slip. 8) Generate the matching screw and nut threads with BOSL2's buttress_threaded_rod() and buttress_threaded_nut(), using $slop for clearance, then cut the nut in half in CAD. 9) PLA softens above about 60 °C (Prusa), so don't leave a printed vice in a hot car.
- **off_the_shelf_parts**: Quick-release woodworking vices (front vice and end vice), e.g. Rockler's steel quick-release vices with a pivoting nut that engages or releases with a 1/4 turn of the handle; quick-release vice screws and vice hardware kits for DIY benches; Acme or trapezoidal lead screws to run them on. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Split nuts work best with trapezoidal threads (Wikipedia 'Split nut', citing Bhandari, Introduction to Machine Design, p. 619).
  - Chamfer the two halves' ends at 60 degrees to the axis to help the threads find engagement, and keep them oiled to limit wear (Wikipedia 'Split nut').
  - For one-way loads such as vices, a buttress thread's load face is square or up to about 7 degrees, and the trailing face is often 45 degrees; the square face gives minimal disengagement force (Wikipedia 'Buttress thread').
  - Quick-release woodworking vices engage or release with a half-turn of the handle (Wikipedia 'Vise'), or a quarter-turn on some designs (Rockler).
  - On lathes, interlock the half-nut lever and the power feed so both can't be engaged at once (lathe.com, 6500 lathe carriage page).
  - Lathe threading dial: for even-numbered threads per inch you may engage the half-nuts at any mark; for odd numbers (7, 11, 13 TPI) only at marks 1 or 2; for half-numbered threads always at the same mark (lathe.com). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - A quick-release woodworking bench vice: squeeze the trigger or give the handle a half-turn, slide the jaw open, then tighten
  - The half-nut lever on a metal lathe, which locks the carriage to the lead screw for cutting threads
  - Syringe pumps for medicine: the plunger pusher is freed from the lead screw to load a new syringe, then clamped back on
  - Push-button 'quick nuts' that slide straight along a threaded rod and then tighten with less than a turn
- **when_to_use**: Use a half nut when a screw-driven part must travel a long way quickly and then be driven or clamped precisely: vice jaws, clamps, camera or tool slides, syringe-pump plungers, lathe carriages, adjustable fixtures on threaded rod. It keeps the strong, self-holding clamp of a screw but removes the tedious winding.
- **when_not_to_use**: Avoid it where the load must never be released by accident (lifting, holding people), unless the closing mechanism is positively latched. Avoid it where you need zero backlash or exact positions (the halves' guides add play), and in very dirty places where swarf or sawdust stops the halves closing. If you only need quick, light clamping, a ratchet bar clamp, cam clamp or toggle clamp is simpler. For motor-driven motion that never needs free sliding, use a plain or anti-backlash lead screw nut.
- **environment_limits**: Dirt and metal shavings in the half nut stop it seating properly (wobblycogs found one full of metal shavings from manufacture). Gravity-release designs only work the right way up; spring or cam-and-follower designs also work upside down (Sawmill Creek forum). Keep the threads oiled to reduce wear (Wikipedia 'Split nut'). Printed PLA versions soften above about 60 °C (Prusa).
- **safety_notes**: A half nut that is only partly engaged can slip suddenly under load, so the jaw or carriage jumps and the workpiece drops (wobblycogs). On a lathe, the half-nuts and power feed are interlocked so they can't both drive the carriage at once (lathe.com). *(unverified parts omitted)*
- **common_failures**: 1) Half nut catching only the edge of the thread and slipping free under load (wobblycogs): check that it closes fully, and adjust or replace the actuating bar. 2) Bent actuating bar or linkage, making it slip or so stiff it won't release (wobblycogs). 3) Dirt or swarf in the threads: clean and oil it. 5) Gravity-drop designs failing to release when mounted at an angle or upside down (Sawmill Creek). 6) Printed versions: elephant's foot or poor bed adhesion on the printed screw makes it stick (LoboCNC). *(unverified parts omitted)*
- **related**: 
  - Lead screw and nut: the same screw drive without the ability to open, so you wind the full distance
  - Anti-backlash nut: also split into two parts, but the parts are pushed along the screw by a spring to remove play, not opened away from it
  - Quick-release screw or knob with retracting thread segments: the male version, where thread segments pull into a pin when a button is pressed
  - Interrupted-thread (breech-lock) screw: threads with gaps that engage in a part-turn instead of opening sideways; buttress threads are used in screw-type breechblocks (Wikipedia)
  - Dog clutch or other engage-disengage clutch: also connects and disconnects a drive, but between two rotating shafts
  - Ratchet bar clamp (one-handed quick clamp): quick sliding plus one-way grip, with no screw
  - Rack and pawl or indexing pin: quick coarse positioning in fixed steps without a screw

### Pictures, videos and models

- **links**: 
  - [Half nuts for lathes 1 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=yqYd2-52R5U): CAD animation of lathe half-nuts opened and closed on the lead screw by a slotted face cam *(licence: link only (standard YouTube licence))*
  - [Richards Wilcox Wood Vise Restoration - How the Half Nut Quick Release System Works (thesergeant, YouTube)](https://www.youtube.com/watch?v=kC4tG0uVEoM): A real quick-release bench vice taken apart to show its half-nut mechanism *(licence: link only (standard YouTube licence))*
  - [Converting a Quick Release Vice into a Regular Vice (Wobblycogs Workshop)](https://www.wobblycogs.co.uk/repairs/2016/07/20/converting-a-quick-release-vice-into-a-regular-vice/): Photos of a trigger-operated quick-release vice: trigger, spring, bar and half nut, and why it slipped *(licence: link only)*
  - [Homemade Quick Release Vise (ibuildit.ca)](https://ibuildit.ca/projects/homemade-quick-release-vise/): Step-by-step photos of a wooden vice built around a steel nut cut in half, with a lever-operated release *(licence: link only)*
  - [Split nut (Wikipedia)](https://en.wikipedia.org/wiki/Split_nut): Short definition, the chamfered-end detail and lathe use (text only, no images) *(licence: CC BY-SA 4.0 (text))*
- **make_it_yourself**: 
  - [Quick-Adjust Half-Nut Vise (LoboCNC, Printables)](https://www.printables.com/model/195692-quick-adjust-half-nut-vise): A fully printed hobby vice with no fasteners: lift the screw out of the half nut, slide the jaw and drop it back in; the asymmetric thread pulls the screw into the nut under load. An updated version with a desk clamp also exists *(licence: CC BY-SA)*
  - [BOSL2 threading.scad: buttress_threaded_rod() and buttress_threaded_nut() (OpenSCAD library)](https://github.com/BelfrySCAD/BOSL2/wiki/threading.scad): Parametric buttress and trapezoidal threads with a $slop clearance setting, for designing your own screw and cutting the nut in half *(licence: BSD 2-Clause)* *(unverified parts omitted)*
- **diagram_idea**: End-on view of a lead screw with two nut halves on slides and a cam lever: first frame closed (threads meshed, arrow shows the screw turning and the jaw moving), second frame open (halves pulled apart, jaw sliding freely), with an inset showing a buttress thread's square face resisting the load without pushing the halves apart.
- **sources**: 
  - https://en.wikipedia.org/wiki/Split_nut
  - https://en.wikipedia.org/w/index.php?title=Split_nut&action=raw
  - https://en.wikipedia.org/wiki/Nut_(hardware)
  - https://en.wikipedia.org/wiki/Vise
  - https://en.wikipedia.org/wiki/Woodworking_vise
  - https://en.wikipedia.org/wiki/Buttress_thread
  - https://en.wikipedia.org/wiki/Trapezoidal_thread_form
  - https://en.wikipedia.org/wiki/Leadscrew
  - https://www.lathe.com/6500_carriage.htm
  - https://canadianhobbymetalworkers.com/threads/half-nut-engagement.9747/
  - https://www.wobblycogs.co.uk/repairs/2016/07/20/converting-a-quick-release-vice-into-a-regular-vice/
  - https://sawmillcreek.org/threads/silly-question-about-quick-release-vices.162472/
  - https://gallivantingcraftsman.com/what-is-a-quick-release-feature-in-a-vise/
  - https://ibuildit.ca/projects/homemade-quick-release-vise/
  - https://www.rockler.com/heavy-duty-quick-release-front-vise
  - https://www.mcmaster.com/products/quick-release-nuts/
  - https://fastenerjournal.com/secure-parts-in-seconds-without-tools-with-quick-release-solutions/
  - https://patents.google.com/patent/US4424720A/en
  - https://patents.google.com/patent/US5954697A/en
  - https://www.youtube.com/watch?v=yqYd2-52R5U
  - https://www.youtube.com/watch?v=rLwTm9gmMWI
  - https://www.youtube.com/watch?v=kC4tG0uVEoM
  - https://www.printables.com/model/195692-quick-adjust-half-nut-vise
  - https://www.printables.com/model/845717-quick-release-vise-on-balljoint-100-3d-printed-no
  - https://api.printables.com/graphql/
  - https://github.com/BelfrySCAD/BOSL2/wiki/threading.scad
  - https://help.prusa3d.com/article/pla_2062

### Other info

- **Fields with unverified parts:** common_failures, make_it_yourself, off_the_shelf_parts, rules_of_thumb, safety_notes

## 37 Bayonet mount (push-and-twist lock)

*quick-release & tool-free.* Push in and twist a short way so pins or lugs slide under ledges and lock; used on camera lenses, light bulbs and lids

### What it is

- **plain_name**: Push the two round parts together, give a short twist, and pins or tabs slide under little ledges and lock; push and twist back to take it apart
- **term**: Bayonet mount (bayonet joint, bayonet coupling)
- **aliases**: 
  - bayonet joint / bayonet coupling / bayonet connector / bayonet catch
  - bayonet fitting / bayonet cap (BC) for light bulbs, e.g. B22d, BA15d, BA15s, GU10
  - twist-lock / twist-and-lock / twist'n'click (3D-printing slang for a printed bayonet lid)
  - push-and-twist lock / push-and-turn joint
  - L-slot and pin joint (pins in L-shaped slots)
  - bayonet lens mount (camera lenses, using flat tabs or flanges instead of pins)
  - BNC connector (Bayonet Neill-Concelman, a bayonet-locking coax connector)
  - twist-on lid (pressure cookers)
- **family**: quick-release & tool-free
- **other_families**: locks, latches & catches, locating & alignment, seals & pass-throughs
- **one_liner**: Two round parts that join end to end: push the pins or tabs on one part into notches in the other, twist a short way (typically a quarter turn or less) so they slide under ledges, and a spring or springy bump holds them locked until you push and twist back.
- **complexity**: A few parts: a male part with 1-4 radial pins, lugs or flat tabs (bayonet lugs); a female part with matching notches and L-shaped or J-shaped slots or ledges; and usually something springy that pushes the parts apart so the pins sit in a small locking notch (a coil spring in a lamp holder, a leaf spring or spring-loaded locking pin in a lens mount, a gasket, O-ring or printed flexing bump in lids).
- **how_it_works**: Each pin or tab lines up with an entry notch and slides straight in until it reaches the bottom of the slot. Twisting then carries the pin sideways along the short arm of the L, under a ledge, so the parts can no longer be pulled apart. A spring (or a squashed gasket) pushes the parts apart slightly, which drops the pin into a small hook at the end of the slot (the serif) or against a detent, so it cannot twist back by itself. To separate, you push the parts together against the spring, twist back the other way, and pull apart.

### Finder attributes

- **job**: 
  - join and hold: holds two round parts end to end (lens to camera, bulb to lamp holder, lid to container)
  - lock, and release by hand: push-and-twist on, push-and-twist off, no tools
  - line parts up exactly: the lugs set the rotational position, and uneven lug spacing or one odd-sized tab lets it fit only one way round
  - seal it, or pass cables or fluid through: with a gasket or O-ring squeezed by the lugs it can seal (pressure cooker lids, bayonet hose fittings, connectors)
- **motion**: rotate+slide: a short straight push, then a twist, typically about 30° (pressure cooker lids) to 90° (BNC connectors), then a small spring-back into the locking notch
- **degrees_of_freedom**: 0 when locked (the pins are trapped in the notches, held there by the spring). While fitting, the pins follow the L-shaped path, so the joint has one guided movement at a time: first sliding in, then twisting.
- **special_behaviour**: 
  - quick-release (joins and comes apart in one short push-and-twist, much faster than a screw thread and it cannot cross-thread)
  - self-aligning or self-centring (the lugs and slots bring the parts to the same rotational position every time, which is why camera lenses use bayonets to line up their mechanical and electrical contacts)
  - hand-release only (versions with a spring-loaded locking pin or button, such as camera lens mounts, only unlock when you press the button while twisting back)
- **holding_principle**: shape (the pins or tabs sit under ledges, so the parts interlock; form-fit), with spring force (a spring, gasket or springy bump pushes the pin into the locking notch so it cannot twist back)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release: push and twist back, then pull apart
- **tools_needed**: none to use. Making: a 3D printer, or a lathe and mill (or a slotting file) for metal parts; off-the-shelf bayonet parts (lamp holders, connectors) are fitted with ordinary tools.
- **seal**: none on its own (the entry notches leave gaps); with a gasket or O-ring squeezed by the lugs it can be watertight, or even airtight or pressure-tight, as on twist-on pressure cooker lids
- **load**: light to medium in plastic, medium to heavy in metal. Strong against pulling apart (the lugs carry the pull in shear and bending) and against side loads when the engaged length is long; weak against being twisted back, which is resisted only by the spring and locking notch or button.
- **adjustable**: no: the locked position is fixed by the slots
- **play_and_precision**: small play when a spring or gasket preloads the joint (without preload the pins rattle in the slots); very repeatable rotational position, which is why camera lenses use it; little tolerance for misalignment while fitting, because each pin must first line up with its entry notch (chamfered notch mouths help).
- **access_needed**: end of a tube or shaft: the two parts meet end to end along a common axis, so you need to reach the end, not the inside
- **materials**: Metal (brass, steel, aluminium) for lens mounts, lamp caps and connectors; plastics (PP, ABS, nylon, acetal) for lids, appliance bowls and hose fittings. For 3D printing, PETG, ABS/ASA or nylon suit the lugs and any springy detent better than brittle PLA. Joins round parts of almost any material.
- **maker_difficulty**: easy: two printed parts and parametric generators exist; getting a snug fit with a satisfying click usually takes one or two test prints to tune the clearance

### Making it

- **processes**: 
  - 3D print (FDM): the most common maker version (container lids, tube and pole couplings, accessory mounts)
  - 3D print (resin): smaller, finer bayonets with tighter clearances
  - CNC: turned parts with milled L-slots for metal couplings
  - off-the-shelf part: bayonet lamp holders and bulbs, BNC and other bayonet connectors, lens-mount adapters, bayonet hose and dust-extraction fittings *(unverified parts omitted)*
- **making_tips_3d_printing**: Give radial lugs and ledges a 45° chamfer underneath so they print without supports. Clearance: Formlabs suggests about 0.5 mm for FDM interlocking joints and about 0.2 mm (up to 0.4 mm for larger parts) for resin; the bayonet-lock-scad OpenSCAD library uses a 0.2 mm allowance in its example. Print a short test ring first and adjust the clearance until the twist is smooth but not loose. Geometry: the twist angle must be smaller than the gap between neighbouring lugs (less than 360° divided by the number of lugs for evenly spaced lugs); three lugs centre the parts well; space them unevenly (as a BA15d lamp cap does) if the part must only fit one way round. Locking: add something springy, such as a small flexing bump or arm that clicks into a notch at the end of the twist, a printed spring, or an O-ring or gasket that is squashed when the lugs ride down a slight ramp, otherwise the joint rattles and can twist loose. Keep flexing features out of the Z direction, give their roots a fillet of at least half their thickness, and use tough plastics (PETG, ABS, nylon) rather than PLA (Hubs). Add a solid end stop so the twist cannot overshoot, and chamfer the entry notches so the pins find them easily. *(unverified parts omitted)*
- **off_the_shelf_parts**: Bayonet lamp holders and bulbs (B22d / BC, BA15d, BA15s, GU10); BNC, C and ST (fibre-optic) bayonet connectors and other bayonet circular connectors; camera lens-mount adapters and bayonet lens hoods; bayonet dust-extraction and hose fittings; bayonet quick-connect couplings. Search terms: 'bayonet mount', 'bayonet coupling', 'bayonet connector', 'bayonet lamp holder', 'twist lock coupling'.
- **rules_of_thumb**: 
  - The twist (sweep) angle must be smaller than the smallest gap between neighbouring pins, i.e. under 360°/number of pins for even spacing; an uneven pin pattern keys the joint to one locked position, as a BA15d lamp cap's two offset pins do (bayonet-lock-scad README, https://raw.githubusercontent.com/CameronBrooks11/bayonet-lock-scad/main/README.md).
  - Camera lens bayonets usually have three or four tabs, often with one a different size so the lens fits only one way; a spring-loaded pin locks it after a small twist (Wikipedia, https://en.wikipedia.org/wiki/Lens_mount).
  - A spring pushes the pin into the small hook (serif) at the end of the L-slot to lock it; to release, push the parts together and twist the other way (Wikipedia, https://en.wikipedia.org/wiki/Bayonet_mount).
  - BNC connectors use two lugs in slots and lock with a quarter turn of the coupling nut (Wikipedia, https://en.wikipedia.org/wiki/BNC_connector).
  - Twist-on pressure cooker lids lock by twisting about 30° so slots in the lid engage flanges on the pot (Wikipedia, https://en.wikipedia.org/wiki/Pressure_cooking).
  - Printed interlocking joints: about 0.5 mm clearance for FDM; about 0.2 mm for small resin parts, up to 0.4 mm for larger ones (Formlabs, https://formlabs.com/blog/how-to-3d-print-interlocking-joints/).
  - Springy locking features: don't build them standing up in Z, fillet the root at 0.5 times the thickness or more, allow about 0.5 mm FDM clearance, and use PETG, ABS or nylon rather than PLA (Hubs, https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/).

### When to use it

- **everyday_examples**: 
  - a camera lens clicking onto an interchangeable-lens camera
  - a push-and-twist (B22 bayonet cap) light bulb in UK, Irish, Australian and Indian lamps, and BA15 bulbs in car lights
  - a BNC cable connector on an oscilloscope or video equipment
  - a twist-on pressure cooker lid
- **when_to_use**: When two round parts meet end to end and need to be joined and separated often and quickly, without tools: container lids, tube, pole and hose couplings, lens and accessory mounts, quick-change tool heads, lamp and connector fittings. Good when the parts must always end up in the same rotational position, when a screw thread would take too many turns or might cross-thread, and when the joint sees vibration (with a spring in the lock it resists shaking loose better than a push fit or a plain screw).
- **when_not_to_use**: Not for large pulling loads in plastic, because only a few small lugs carry the load: use a full screw thread or an interrupted thread (more contact area), or bolts. Not when you need to clamp to an adjustable tightness (use a screw thread or a cam clamp). Not for flat panels (use quarter-turn fasteners or latches). Not for pressure vessels unless it has a proper safety interlock. Without a spring, gasket or detent it will rattle and can work loose; add one or choose a snap fit.
- **environment_limits**: Metal bayonets handle heat and vibration well; the spring preload is what stops them shaking loose (Wikipedia). Printed PLA softens above about 60 °C and is not suited to outdoor or technical use; PETG is fine for most indoor and outdoor use below about 80 °C (Prusa). Printed springy detents that stay bent all the time lose their force; design them so they only flex while locking (Hubs). Grit or dried food in the slots makes it stiff or stops it locking fully.
- **safety_notes**: Pressure cookers: never force a twist-on lid open while there is pressure inside; modern cookers have an interlock that blocks this (Wikipedia, Pressure cooking). Light bulbs: switch off and let the bulb cool before pushing and twisting it out. Otherwise none known.
- **common_failures**: (1) Lugs snap or shear off, especially small printed ones: make them thicker and chamfered, print with the axis vertical, and use more lugs. (2) Rattles or twists loose because there is no spring preload or the detent has relaxed: add an O-ring, gasket or springy bump. (3) Only partly twisted, so the lugs sit on the edge of the ledge: add a positive end stop and a click so you can feel when it is locked. (4) Too tight or won't go in on printed parts: over-extrusion or elephant's foot; tune the clearance with a test print. (5) Fits in the wrong orientation: key it with unevenly spaced or different-sized lugs. (6) Worn, rounded lugs or ledges after many cycles, giving play.
- **related**: 
  - Interrupted-screw lock (breech lock): threads with sections cut away, so much more of the circumference carries load; stronger, and the twist also pulls the parts together
  - Quarter-turn fastener (Dzus-type): a small stud that locks a flat panel with a quarter turn, rather than joining two round parts end to end
  - Push-and-turn child-resistant cap: also needs a push while turning, but it is a screw cap with a slipping clutch
  - Ordinary screw thread: clamps to any tightness and carries more load, but needs many turns and can cross-thread
  - Breech-lock ring lens mount (e.g. early Canon FD): a turning collar locks the lens so the lens itself doesn't rotate
  - Snap fit: clicks together with a push only, but is often harder to undo
  - Hang-on mounts (keyhole slot): a head slides into a slot and drops down, a flat-panel cousin of the L-slot

### Pictures, videos and models

- **links**: 
  - [Bayonet-mount-01.svg (Wikimedia Commons, Iainf, 2006)](https://commons.wikimedia.org/wiki/File:Bayonet-mount-01.svg): Diagram of a bayonet mount before insertion: pins on the male part lined up with the L-shaped slots *(licence: CC BY 2.5 (reuse with credit))*
  - [Bayonet-mount-02.svg (Wikimedia Commons, Iainf, 2006)](https://commons.wikimedia.org/wiki/File:Bayonet-mount-02.svg): The same bayonet mount after insertion and twisting, with the pins locked in the slots *(licence: CC BY 2.5 (reuse with credit))*
  - [Bayonet lightbulb and socket (Wikimedia Commons, Jnestorius, 2009)](https://commons.wikimedia.org/wiki/File:Bayonet_lightbulb_and_socket.jpg): Photo of a bayonet-cap light bulb next to its lamp holder, showing the two pins and the L-slots *(licence: CC BY-SA 3.0 or GFDL 1.2+ (reuse with credit))*
  - [Bayonet joint, movement 245 (507 Mechanical Movements, Henry T. Brown, 1868; 507movements.com)](https://507movements.com/mm_245.html): Historic drawing and an animated version of a bayonet joint: a part turned in an L-shaped slot and withdrawn *(licence: book public domain; website animation link only)*
  - [How to Design a 3D Printed Twist Lock Lid in Fusion 360 (Send to Print, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=C6kF1huqRMU): Video tutorial modelling a printable twist-lock (bayonet) lid *(licence: link only)*
- **make_it_yourself**: 
  - [bayonet-lock-scad by Cameron Brooks (OpenSCAD library; repository https://github.com/CameronBrooks11/bayonet-lock-scad, README read)](https://raw.githubusercontent.com/CameronBrooks11/bayonet-lock-scad/main/README.md): Parametric OpenSCAD bayonet connector that makes both halves, with any number of pins, pins pointing in or out, clockwise or anticlockwise twist, adjustable clearance (allowance) and keyed uneven pin spacing; a rewrite of xavierasx's Thingiverse bayonet library *(licence: MIT (original Thingiverse library CC BY))*
  - [T-Lock Bayonet Joint by scottvader (YouMagine)](https://youmagine.com/designs/t-lock-bayonet-joint): Printable male and female parts with a double row of T-shaped features that lock with a quick twist 'like the bayonet mount on a camera lens'; PLA or ABS *(licence: CC BY-SA)*
  - [Container sets with bayonet lock by DrJones (Printables 1168046; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/1168046-container-sets-with-bayonet-lock): Nesting sets of round containers whose lids use a bayonet lock with springy elements for a click, so only a short twist is needed *(licence: CC BY-SA)*
  - [Twist-lock connector by aiannazzone (Printables 193397; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/193397-twist-lock-connector): Modular male and female twist-lock ends to add to your own models, with and without a positive stop; STEP and STL files *(licence: CC BY)*
- **diagram_idea**: Three frames of a cut-away tube: (1) a pin lined up with the mouth of an L-shaped slot, (2) the pin pushed to the bottom of the slot against a spring, (3) the pin twisted along the short arm and pushed by the spring up into the small hook, with arrows for 'push', 'twist' and 'spring holds it'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Bayonet_mount
  - https://en.wikipedia.org/wiki/Lens_mount
  - https://en.wikipedia.org/wiki/BNC_connector
  - https://en.wikipedia.org/wiki/Pressure_cooking
  - https://en.wikipedia.org/wiki/Canon_FD_lens_mount
  - https://en.wikipedia.org/wiki/Breech-lock
  - https://507movements.com/mm_245.html
  - https://commons.wikimedia.org/wiki/File:Bayonet-mount-01.svg
  - https://commons.wikimedia.org/wiki/File:Bayonet-mount-02.svg
  - https://commons.wikimedia.org/wiki/File:Bayonet_lightbulb_and_socket.jpg
  - https://raw.githubusercontent.com/CameronBrooks11/bayonet-lock-scad/main/README.md
  - https://raw.githubusercontent.com/CameronBrooks11/bayonet-lock-scad/main/LICENSE
  - https://youmagine.com/designs/t-lock-bayonet-joint
  - https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.youtube.com/watch?v=C6kF1huqRMU (verified via YouTube oEmbed)
  - https://www.printables.com/model/1168046-container-sets-with-bayonet-lock (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/193397-twist-lock-connector (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** making_tips_3d_printing, print_in_place, processes, reuse_cycles

## 38 Interrupted-screw lock (interrupted thread, breech lock)

*quick-release & tool-free.* A thread with gaps cut in it, so the parts push together and lock with a fraction of a turn instead of many turns

### What it is

- **plain_name**: A screw with stripes of thread cut away, and a hole with matching stripes cut away, so it slides straight in and then locks with a small twist instead of many turns
- **term**: Interrupted screw (interrupted thread)
- **aliases**: 
  - interrupted thread / slotted thread / segmented thread
  - breech lock / breech-lock closure (pressure vessels, reloading presses) and breech screw or breech plug (guns)
  - sectional screw / dissected screw breech (19th-century names)
  - stepped interrupted screw / Welin breech block (a version with several thread steps)
  - de Bange type breech
  - hit-and-miss thread or lug closure
  - lug finish and lug cap / twist-off cap (glass jars with short thread segments that seal in about a quarter turn)
  - quick-opening closure (pressure vessels)
  - Breech Lock (brand, Lee Precision quick-change die bushings for reloading presses)
- **family**: quick-release & tool-free
- **other_families**: seals & pass-throughs, locating & alignment, locks, latches & catches
- **one_liner**: A screw thread with alternate sections removed from both the plug and the hole, so the plug pushes straight in past the gaps and a fraction of a turn (1/4 down to 1/16) engages the remaining thread sections and locks it.
- **complexity**: A few parts: a plug or screw with threaded and plain sectors; a socket or ring with matching threaded and plain sectors; usually a handle or lever, an end stop, a catch, pin or O-ring that stops it turning back, and a gasket or seal. Stepped (Welin) versions have several rings of thread at different diameters.
- **how_it_works**: Both the screw and its hole have their thread cut away in matching sectors, so when the threaded sectors of the screw line up with the smooth sectors of the hole it slides straight in. Turning it by one sector's width (a quarter turn with two pairs of sectors, 1/6 with three, 1/8 with four) moves the thread sections into mesh, and because the thread is still a slight spiral the turn also pulls the parts together and presses a seal. A catch, pin, detent or squeezed O-ring stops it turning back, and reversing the turn lines the gaps up again so it can be pulled straight out. Stepped versions put rings of thread at several diameters so more of the circumference is threaded while still needing only a small turn.

### Finder attributes

- **job**: 
  - join and hold: holds a plug, cap, door or tool in a hole against large pulling or pressure loads
  - lock, and release by hand: slide in and give a fraction of a turn; turn back and pull out
  - seal it, or pass cables or fluid through: pulls a gasket or seal tight (gun breeches, diving helmets, pressure vessels, jar lids)
  - line parts up exactly: returns to the same position every time (quick-change reloading dies, breech-lock lens mounts)
- **motion**: rotate+slide: slides straight in, then turns a fraction of a turn, typically 90° (two sector pairs) down to 45° (four pairs, e.g. diving helmets) or 22.5° (1/16 turn on some pressure vessel doors)
- **degrees_of_freedom**: 0 when locked and seated. While fitting, one guided movement at a time: first a straight slide in, then a short screwing turn.
- **special_behaviour**: 
  - quick-release (joins and comes apart with a fraction of a turn instead of many turns, and cannot cross-thread)
  - self-aligning or self-centring (the long threaded plug centres itself in the hole and seats at the same depth and angle every time)
  - hand-release only (many versions add a safety catch, locking pin or interlock that must be released before it can be turned back, as on diving helmets, reloading-press bushings and pressure vessels)
- **holding_principle**: shape (the thread sections interlock; form-fit), plus friction or clamping (the small screwing turn squeezes a gasket or O-ring, and that friction helps stop it turning back)
- **input_output**: not applicable
- **power**: passive (no power needed); large gun breeches and pressure-vessel doors may be turned by a motor or hydraulics, but the lock itself needs no power
- **removability**: tool-free quick release: turned by hand, a handle or a lever, then pulled straight out
- **reuse_cycles**: many times: made for repeated opening (gun breeches, dies swapped in seconds, jar lids), but the thread sections wear, and load sharing between them depends on machining quality and wear (Kezar Engineering)
- **tools_needed**: none to use (a handle or lever on big ones). Making: a lathe to cut the thread and a mill, rotary table or CNC to cut away the sectors; or a 3D printer for plastic versions.
- **seal**: airtight or pressure: the thread itself doesn't seal, but the small turn pulls the parts together onto a gasket, pad or obturator, giving a gas-tight gun breech, a watertight diving helmet (leather gasket) or a pressure vessel door (O-rings or spring seals)
- **load**: heavy: used for artillery breeches and pressure vessels rated from 100 to 2000 bar (KW Designed Solutions). Very strong against pulling out or internal pressure; only the threaded sectors carry load, so each one carries more than twice the load of a full thread and the sector ends concentrate stress (Platts patent). Weak against turning back, which is resisted only by friction, a detent or a lock.
- **adjustable**: no: the seated depth and angle are fixed by the thread sections; in quick-change die bushings the tool's own height is set on a separate ordinary thread and kept each time it is swapped
- **play_and_precision**: none to small when a gasket or O-ring preloads it (the Lee patent uses a squashed O-ring for friction against turning back); very repeatable seating, which is why reloading presses and early Canon FD lenses use breech locks; the plug must be lined up in angle with the gaps before it will go in, and needs little sideways misalignment.
- **access_needed**: end of a tube or shaft: it closes the end of a bore, barrel, tube, jar neck or vessel from one side
- **materials**: Steel (gun breeches, pressure vessel closures, press bushings), brass and bronze (diving helmets), glass jars with steel or tinplate lug caps, and plastics for moulded and printed versions (PETG, ABS, nylon for printing).
- **maker_difficulty**: moderate: easy to 3D print once you can model a thread (make a normal thread and cut away sectors), but hard to machine in metal, because the sectors must be milled away after threading and every sector end needs cleaning up

### Making it

- **processes**: 
  - 3D print (FDM): large, coarse threads with sectors removed, e.g. jar lids, tube couplings, tool holders
  - 3D print (resin): smaller interrupted threads with finer detail
  - CNC: turn the full thread on a lathe, then mill away the plain sectors on a mill with a rotary table or on a CNC machine
  - off-the-shelf part: lug caps and lug-finish jars, quick-change die bushings for reloading presses, pressure-vessel breech-lock closures
- **making_tips_3d_printing**: Model a normal coarse thread first (the BOSL2 OpenSCAD library's threaded_rod and threaded_nut work well), then cut away equal sectors from both parts: with n threaded sectors on each part the lock needs 1/(2n) of a turn (2 sectors, 1/4 turn; 3 sectors, 1/6 turn; 4 sectors, 1/8 turn). Every sector end is a new thread start, so trim thin partial thread wedges (BOSL2's 'blunt start' or Higbee cut) because partial threads are weak and break easily; DuPont also recommends ending moulded threads at least 0.78 mm from the end to reduce fretting and cross-threading. Use big threads: M6 or larger, a rounded (semi-circular) or trapezoidal profile, and about 0.1 mm offset for resin (Formlabs); allow more clearance for FDM (Formlabs suggests about 0.5 mm for FDM interlocking joints). Add a solid end stop at the end of the turn and something to stop it turning back: an O-ring or gasket that is squeezed as it tightens (as in the Lee breech-lock patent), a small detent bump, or a locking pin. Use PETG, ABS or nylon; PLA is brittle, softens above about 60 °C and creeps under constant load. *(unverified parts omitted)*
- **off_the_shelf_parts**: Lug caps (twist-off caps) and lug-finish glass jars; continuous-thread (CT) caps for comparison; quick-change breech-lock die bushings and presses for ammunition reloading (Lee Breech Lock is a brand); breech-lock (quick-opening) closures and pressure vessels; breech-lock lens adapters for old Canon FD lenses. Search terms: 'interrupted thread', 'breech lock closure', 'quick opening closure', 'lug cap', 'lug finish'.
- **rules_of_thumb**: 
  - Turn needed = sector width: two 90° sectors need 1/4 turn, three 60° sectors 1/6 turn, four 45° sectors 1/8 turn (typical of diving helmets) (Wikipedia, https://en.wikipedia.org/wiki/Interrupted_screw).
  - A simple interrupted screw threads only half its circumference; Welin's stepped screw threads a fraction steps/(1 + steps) of it, about 75% with three steps, while still locking in less than 90° (Wikipedia, https://en.wikipedia.org/wiki/Welin_breech_block).
  - All interrupted lug and thread types more than double the load per length of thread compared with a full thread, and the abrupt load changes at each sector end cause stress concentrations and local deformation (Platts, US patent 4102474A, https://patents.google.com/patent/US4102474A/en).
  - Quick-change die bushing: three interrupted thread sections lock with about a 60° turn, and a compressed O-ring adds friction against turning back (Lee, US patent 8234963, https://patents.google.com/patent/US8234963).
  - Standard diving helmets fit the breastplate with a 1/8-turn interrupted thread onto a leather gasket, plus a safety lock at the back so it can't turn back underwater (Wikipedia, https://en.wikipedia.org/wiki/Standard_diving_dress).
  - Breech-lock pressure vessel closures open or close with a 1/8 to 1/16 turn and have an integral safety interlock (KW Designed Solutions, https://www.kwdesign.co.uk/products/pressure-vessel-closures/breech-lock-closure-vessels/); the design must stop the vessel being pressurised when only partly turned and should include rotation stops and locking confirmation (Kezar Engineering, https://kezareng.com/articles/pressure-vessel-quick-opening).
  - Lug caps on jars seal in about a quarter turn, where a continuous-thread cap needs about one and a half turns (Container & Packaging, https://www.containerandpackaging.com/resources/the-multithreaded-world-of-container-finishes/).
  - Printed threads: M6 or larger, semi-circular profile, about 0.1 mm offset (Formlabs, https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/); end threads at least 0.78 mm from the end (DuPont design guide, p. 11, https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf).

### When to use it

- **everyday_examples**: 
  - a twist-off lid on a jar of jam or pasta sauce (a lug cap on short thread segments)
  - an old brass diving helmet that locks onto its breastplate with an eighth of a turn
  - the breech of an artillery gun in a museum
  - quick-change die bushings on a home ammunition-reloading press
- **when_to_use**: When a plug, cap or door has to carry a big pulling or pressure load but must also be opened and closed quickly and often: pressure and vacuum vessel doors, tube and pipe end caps, quick-change tool holders, lids that should seal in a fraction of a turn. It carries far more load than a bayonet with a few pins, because whole sections of thread share the load, and the small screwing turn pulls a seal tight.
- **when_not_to_use**: Not for light, low-load joints where a simpler bayonet mount or snap fit is enough. Not where you need to clamp to a chosen tightness or adjust the position (use a full screw thread). Not for pressure vessels unless it has a safety interlock that stops it being opened, or pressurised, when not fully locked. If it will be shaken or vibrated, add a locking pin, catch or detent, because on its own only friction stops it turning back.
- **environment_limits**: Metal versions handle heat and high pressure (KW Designed Solutions lists -50 °C to +300 °C and up to 2000 bar for its vessels). Printed PLA softens above about 60 °C and PETG should stay below about 80 °C (Prusa). Plastic threads creep and relax over time under steady load or temperature swings, especially where plastic meets metal (DuPont design guide, p. 12). Grit or dried contents in the threads stop it turning smoothly. Vibration can turn it back unless it is locked.
- **safety_notes**: Pressure vessels, autoclaves and pressure cookers with quick-opening doors are dangerous if opened, or left not fully locked, while under pressure: doors have been blown off and operators killed; the door must only unlock once the pressure has been released (National Board of Boiler and Pressure Vessel Inspectors article). Keep hands clear of the gap when swinging and turning heavy doors. *(unverified parts omitted)*
- **common_failures**: (1) Not turned all the way, so only part of each thread section is engaged: add a positive end stop and a lock that only engages when fully turned. (2) Sector ends crack or wear because the load changes sharply there: round or trim the ends and use tough material. (3) Thin partial threads at the sector ends snap off on printed parts: use blunt-start ends. (4) Turns back under vibration: add a catch, locking pin, detent or O-ring friction. (5) Won't slide in because the gaps are too narrow or the threads too tight: widen the plain sectors a few degrees and check the clearance. (6) Worn thread sections or seals give play and poor sealing: inspect and replace.
- **related**: 
  - Bayonet mount (push-and-twist lock): a few pins in L-slots instead of thread sections; simpler and quicker but carries far less load
  - Ordinary screw thread: full contact all round and adjustable tightness, but needs many turns and can cross-thread
  - Half nut (split nut, quick-action nut): the nut opens away from the thread instead, so the part slides freely and then engages anywhere along the thread
  - Breech-lock ring lens mount (early Canon FD): a separate collar is turned to lock the lens, so the lens itself doesn't rotate and the mating faces don't wear
  - Quarter-turn fastener (Dzus-type): a small stud with a spiral slot for flat panels rather than a large threaded plug
  - Continuous-thread (CT) cap versus lug cap: the everyday comparison of a full thread and an interrupted one *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Interrupted screw of M109A6 self-propelled howitzer (Wikimedia Commons video, William Espinosa, US National Guard, 2025)](https://commons.wikimedia.org/wiki/File:Interrupted_screw_of_M109A6_self-propelled_howitzer.webm): 14-second video of a real howitzer breech plug swinging in and turning to lock *(licence: Public domain (US government work))*
  - [Figure414 Interrupted-screw breech block (Wikimedia Commons, from US Army TM 9-3305, 1981)](https://commons.wikimedia.org/wiki/File:Figure414_Interrupted-screw_breech_block.png): Technical drawing of an interrupted-screw breech block with its threaded and plain sectors *(licence: Public domain (US government work))*
  - [Interrupted breech screw (Wikimedia Commons, from a US Army technical manual)](https://commons.wikimedia.org/wiki/File:Interrupted_breech_screw.jpg): Picture of an interrupted-screw breech plug *(licence: Public domain (US government work))*
  - [Breech 122m10 Hämeenlinna (Wikimedia Commons, Balcer, 2006)](https://commons.wikimedia.org/wiki/File:Breech_122m10_hameenlinna_2.jpg): Photo of a howitzer barrel and modified breech (Russian 122 mm M1910) set up as a museum demonstration piece; used on Wikipedia to illustrate the interrupted screw *(licence: CC BY 2.5, CC BY-SA 3.0 or GFDL 1.2+ (reuse with credit))* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [BOSL2 threading.scad (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/threading.scad): Parametric threaded rods and nuts with blunt-start (Higbee) thread ends; model a coarse thread and subtract matching sectors from rod and nut to make an interrupted thread (the sector cutting is our suggestion, not a built-in feature) *(licence: BSD 2-Clause)*
  - [How to CAD Model a Welin Interrupted Screw? (Model Engineer & Workshop forum, 2019)](https://www.model-engineer.co.uk/forums/topic/how-to-cad-model-a-welin-interrupted-screw/): Forum walk-through of ways to model a stepped interrupted screw in Fusion 360 (sweeping each thread segment and patterning, or stepping cylinders), plus notes on how the real ones were machined *(licence: link only)* *(unverified parts omitted)*
- **diagram_idea**: An end-on view and a side view of a plug and socket, each with threaded and smooth sectors shaded differently: frame 1 shows the plug's threaded sectors lined up with the socket's smooth sectors sliding straight in; frame 2 shows a 1/4-turn arrow bringing the threads into mesh, with a small arrow showing the gasket being pressed.
- **sources**: 
  - https://en.wikipedia.org/wiki/Interrupted_screw
  - https://en.wikipedia.org/wiki/Welin_breech_block
  - https://en.wikipedia.org/wiki/Standard_diving_dress
  - https://en.wikipedia.org/wiki/Breech-lock
  - https://en.wikipedia.org/wiki/Canon_FD_lens_mount
  - https://patents.google.com/patent/US4102474A/en
  - https://patents.google.com/patent/US8234963
  - https://www.kwdesign.co.uk/products/pressure-vessel-closures/breech-lock-closure-vessels/
  - https://kezareng.com/articles/pressure-vessel-quick-opening
  - https://www.nationalboard.org/index.aspx?pageID=164&ID=183
  - https://www.containerandpackaging.com/resources/the-multithreaded-world-of-container-finishes/
  - https://www.hobby-machinist.com/threads/how-to-machine-interrupted-thread.119806/
  - https://www.model-engineer.co.uk/forums/topic/how-to-cad-model-a-welin-interrupted-screw/
  - https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/
  - https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf (DuPont design guide, pp. 11-12)
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/threading.scad
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://commons.wikimedia.org/wiki/Category:Interrupted_screw_breeches
  - https://commons.wikimedia.org/wiki/File:Interrupted_screw_of_M109A6_self-propelled_howitzer.webm
  - https://commons.wikimedia.org/wiki/File:Figure414_Interrupted-screw_breech_block.png
  - https://commons.wikimedia.org/wiki/File:Interrupted_breech_screw.jpg
  - https://commons.wikimedia.org/wiki/File:Breech_122m10_hameenlinna_2.jpg
  - https://www.youtube.com/watch?v=KGB7GiCBG9w (verified via YouTube oEmbed)
  - https://www.printables.com/model/838562-spooler-hub-with-a-quick-thread-design (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** links, make_it_yourself, making_tips_3d_printing, print_in_place, related, safety_notes

## 39 Quarter-turn fastener (Dzus-type)

*quick-release & tool-free.* A stud that locks a panel in place with a quarter turn, by a spiral slot riding over a spring or a cross pin

### What it is

- **plain_name**: A button-headed stud in a removable panel that you turn a quarter of the way round to lock the panel on, and a quarter back to let it go
- **term**: Quarter-turn fastener (turnlock fastener, Dzus-type spiral cam fastener)
- **aliases**: 
  - Dzus fastener / Dzus button (brand, now Southco; the inventor's name is pronounced 'zoose')
  - turnlock or turn-lock fastener
  - 1/4-turn fastener / quarter-turn panel fastener
  - quick-action, quick-opening or quick-access panel fastener
  - stressed panel fastener (heavy-duty versions that carry structural loads)
  - cowl or cowling fastener (aircraft)
  - spiral cam fastener / spring-and-button fastener
  - Camloc (brand, cross-pin and cam receptacle type)
  - Airloc (brand, cross-pin type)
  - Dzus Dart (brand, plastic version)
- **family**: quick-release & tool-free
- **other_families**: over-centre, toggle & cam clamps, self-locking & anti-back-drive
- **one_liner**: A captive stud in a removable panel whose spiral slot (or cross pin) rides over a spring or cam in a receptacle on the frame, so a quarter turn pulls the panel tight and snaps it into a locked position that vibration can't undo.
- **complexity**: A few parts: a stud (a button with a slotted, hex, wing, knob or bail head, and either a spiral slot or a cross pin in its shank); a grommet or retainer that keeps the stud captive in the removable panel; and a receptacle fixed behind the frame (a steel wire spring riveted across a hole for the Dzus type, or a spring-steel or cam-shaped receptacle for Camloc and Airloc types). Options: an ejector spring that pops the stud out when unlocked, and wear washers.
- **how_it_works**: The stud is pushed through the panel and frame holes until its tip meets the receptacle. In the Dzus type a wire spring stretches across the hole, and turning the stud makes the spiral slot in its tip act like a cam, drawing the spring up the slot and pulling the panel tight against the frame. At the end of the quarter turn the spring clicks past a bump into a recess, an over-centre lock, so vibration tends to push it back into the locked position rather than undo it. In Camloc and Airloc types a cross pin through the stud rides up a cam in the receptacle, compressing a spring to give a set clamping force, then hits a stop and drops into a locking dip (detent). Turning back the other way releases it.

### Finder attributes

- **job**: join and hold: holds removable panels, covers, cowlings and access doors onto a frame, lock, and release by hand: a quarter turn locks and a quarter turn back releases, with no loose parts to lose
- **motion**: rotate, a quarter turn (about 90°); the stud also moves a little along its axis as the cam pulls the panel tight
- **degrees_of_freedom**: 0 when locked (the panel is clamped to the frame). While fastening, the stud turns and moves a little along its axis, following the cam, so 1 guided movement.
- **special_behaviour**: 
  - quick-release (a quarter turn on or off, and the stud stays captive in the panel)
  - over-centre (the spring or cross pin rides over a bump into a recess at the end of the turn and stays there; Wikipedia calls it an over-centre lock)
  - self-locking (holds under panel loads and vibration; small disturbances push it back into the locked position instead of loosening it)
  - hand-release only (it only opens when someone turns the stud back the other way)
- **holding_principle**: shape (the spring wire or cross pin sits in a recess in the stud's slot or the receptacle's cam; form-fit), with spring force (the spring supplies the clamping force and holds the lock)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release: wing, knob and bail heads turn by hand; slotted, recessed or hex heads need a quarter turn with a screwdriver, Dzus key or hex key, but nothing comes loose
- **reuse_cycles**: Airloc cross pins must be replaced, never reused, once removed from a stud (FAA) *(unverified parts omitted)*
- **tools_needed**: To use: none, or a flat screwdriver, Dzus key or hex key. To fit: a drill (and a file to fit holes), a riveter for rivet-on receptacles and sometimes a grommet or press tool; snap-in, clip-on and press-in receptacles fit without rivets.
- **seal**: none: it only clamps a panel; add a gasket under the panel for dust or water resistance (Southco's stud-length formulas include a compressed gasket in the total material thickness)
- **load**: light to medium per fastener, used in rows: Southco's small series is rated at a maximum static load of 440 N (100 lb) each. Strong in shear across the panel and against the panel lifting off; heavy-duty 'stressed panel' versions carry structural loads (FAA). Weak or unreliable if the stud length doesn't suit the panel thickness.
- **play_and_precision**: small: the preload pulls the panel tight so it doesn't rattle. Floating receptacles tolerate some misalignment between panel and frame holes (FAA); rigid ones need well-aligned holes. It locates the panel only roughly; use pins or dowels if exact positioning matters.
- **access_needed**: one side only (blind) to open and close; fitting a rivet-on receptacle needs the back of the frame, but press-in and snap-in receptacles can be fitted blind from the front
- **materials**: Studs and springs of cadmium-plated or stainless steel, aluminium grommets, high-carbon steel receptacles (FAA); plastic versions with acetal receptacles and glass-filled nylon studs (Southco Dzus Dart). Panels: sheet aluminium or steel, fibreglass, polycarbonate, plywood or printed plastic. Printed versions: PETG or tougher.
- **maker_difficulty**: easy to fit bought ones (drill holes, rivet or snap in the receptacle, pick the right stud length); moderate to print your own, because the thin cam sections break if printed with the layers the wrong way

### Making it

- **processes**: 
  - off-the-shelf part: the usual choice (studs, receptacles and retainers bought as a set in the right length)
  - sheet metal: the panels and frames they usually fasten
  - 3D print (FDM): printed studs and receptacles in PETG or tougher plastics for light panels, enclosures and replacement parts
  - laser cut: acrylic, polycarbonate or plywood panels drilled or cut for the studs
  - CNC: machining the panels and fixing holes
- **making_tips_3d_printing**: Orientation matters most. One maker who reverse-engineered plastic Dzus Dart parts in PETG first printed the receptacles with the cam face upward, and they broke at both ends in use because layer adhesion across the thin section was poor; printing them on their side ran the extrusion lines along the stress and worked much better. Print the stud standing on its head; both parts needed supports (McSail, Printables 1537263). The originals were acetal receptacles and glass-filled nylon studs, so use PETG, PETG-CF, nylon or PC rather than PLA. For a simple printed panel stud, another maker used PETG with 4 perimeters and 0.2 mm layers, put the Z seam at the head away from the high-stress end, and drilled 3 mm polycarbonate panels at 9/32 in (about 7.1 mm), then filed the holes oval until the studs just pressed through so they stay captive when the panel is off (John S, Printables 12418). Match the stud length to the total thickness of panel, frame and any gasket, because too short a stud won't lock and too long a stud won't clamp. If you print the springy part, keep it flexing within the layers, not across them, and fillet its root (Hubs). *(unverified parts omitted)*
- **off_the_shelf_parts**: Quarter-turn fastener studs (slotted, oval, flush, wing, hex-recess, knob and bail heads; standard or self-ejecting), receptacles (rivet-on spring, snap-in, clip-on, press-in, weld-on; rigid or floating), retainers and grommets, ejector springs, wear washers, Dzus keys and installation tools. McMaster-Carr sells quarter-turn captive panel screws with rivet-mount, clip-on and press-fit receptacle nuts in steel or acetal. Search terms: 'quarter-turn fastener', 'Dzus button and spring', 'Camloc 4002 receptacle', 'Airloc fastener', 'quarter-turn captive panel screw', 'race car body fasteners'.
- **rules_of_thumb**: 
  - A quarter turn clockwise locks the stud; it can only be unlocked by turning it anticlockwise (FAA Airframe and Powerplant Mechanics General Handbook, via avstop.com, http://avstop.com/ac/apgeneral/turnlockfasteners.html).
  - Dzus stud markings give body diameter in sixteenths of an inch and length in hundredths of an inch, measured from the head to the bottom of the spring hole; Airloc studs are stamped with the total material thickness they lock, in thousandths of an inch (same FAA source).
  - Never reuse an Airloc cross pin once it has been removed from the stud; fit a new one (same FAA source).
  - Choose the stud length from the total material thickness (panel + frame + compressed gasket or gap + washer allowances); each stud length covers a band of only about 1.27 mm (0.05 in) (Southco Dzus Dart D1 catalogue pages, https://media.southco.com/media/static/Literature/D1.en.pdf).
  - Southco small-series quarter-turn fasteners are rated at a maximum static load of 440 N (100 lb); add 0.8 mm to the panel thickness when using an ejector spring and 0.5 mm for a wear washer (Southco catalogue pages hosted by Aircraft Spruce, https://www.aircraftspruce.com/catalog/pdf/fastener%20literature.pdf).
  - In cross-pin types, a turn of about 90° makes the pin ride up a cam to apply a controlled preload, then reach a positive stop and drop into a locking detent (Howmet Camloc, via HFS Industrial, https://www.hfsindustrial.com/news/post/how-quarter-turn-fasteners-work).

### When to use it

- **everyday_examples**: 
  - the round buttons holding body panels on race cars and karts
  - engine cowlings and inspection panels on light aircraft
  - plastic trim and trunk panels in cars, and guards on lawn tractors
  - removable side panels on electronics racks, machines and 3D-printer enclosures
- **when_to_use**: For flat panels, covers and access doors that must come off often and quickly, especially on things that vibrate (vehicles, aircraft, machines, printer enclosures). The stud stays in the panel so nothing gets lost, a row of them shares the load, and they don't shake loose the way plain screws can.
- **when_not_to_use**: Not for joining round parts end to end (use a bayonet mount or interrupted thread). Not for heavy structural joints unless you buy rated heavy-duty (stressed panel) types; otherwise use bolts. Not where you need an adjustable clamping force or a seal on its own (use screws with a gasket, or draw latches). Where a single panel must open with no tool at all, choose wing or bail heads, a draw latch or a quarter-turn cam latch.
- **environment_limits**: Plated or stainless steel versions suit vibration, weather and engine-bay heat; they were designed for high-vibration aircraft and helicopter panels. Printed PETG parts should stay below about 80 °C and PLA softens above about 60 °C (Prusa). *(unverified parts omitted)*
- **safety_notes**: Ejector springs pop the stud out when released. Don't use light-duty panel fasteners to carry structural or safety-critical loads. *(unverified parts omitted)*
- **common_failures**: (1) Stud too short for the panel stack, so it barely engages and can break or pop out; measure the total material thickness and pick the right length (karting forum reports of short studs breaking). (3) Brittle or over-hardened heads cracking when struck. (4) Panel holes wearing oval in fibreglass or plastic; add a grommet or wear washer. (5) Misaligned holes stop it engaging; use floating receptacles. (6) Printed parts snapping across thin layers; print with the layers along the stress. *(unverified parts omitted)*
- **related**: 
  - Bayonet mount (push-and-twist lock): the same short-twist idea, but joining two round parts end to end
  - Interrupted-screw lock (breech lock): partial thread for a large, heavily loaded round plug
  - Captive panel screw: a screw that stays in the panel but needs several turns
  - Quick-release pin (ball-lock pin): a push-button pin through aligned holes instead of a turning stud
  - Draw latch (over-centre latch): pulls a lid or panel tight with a lever, fully tool-free
  - Hang-on mounts (keyhole slot): the panel hangs on heads and lifts off, with no locking action *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Dzus fastener, from US Patent 1955740 (Wikipedia file page)](https://en.wikipedia.org/wiki/File:Dzus_fastener,_from_US_Patent_1955740.png): Patent drawing of the original Dzus fastener: the stud with its spiral slot and the wire spring across the hole *(licence: Public domain in the US (US patent drawing))*
  - [RRKestrelHind.JPG (Wikimedia Commons, Nimbus227, 2008)](https://commons.wikimedia.org/wiki/File:RRKestrelHind.JPG): Photo of the engine cowling on a 1930s Hawker Hind biplane with rows of Dzus fasteners *(licence: Public domain (released by the author))*
  - [Clever Hardware Design: Quarter-Turn Dzus Fasteners (Core77, Rain Noe, 2022)](https://www.core77.com/posts/112210/Clever-Hardware-Design-Quarter-Turn-Dzus-Fasteners): Photos of different quarter-turn heads (driver, wing, pivoting bail, self-ejecting) and an embedded installation video *(licence: link only)*
  - [US1955740 Fastening device (William Dzus, 1934; Google Patents)](https://patents.google.com/patent/US1955740): Full patent drawings and text explaining how the spiral slots act as cams on the wire spring *(licence: link only (US patent drawings are generally public domain))*
  - [D1 Dzus Dart quarter-turn fasteners catalogue pages (Southco)](https://media.southco.com/media/static/Literature/D1.en.pdf): Dimensioned drawings of plastic studs, receptacles (rivet-on, snap-in, clip-on) and retainers, with stud-length tables *(licence: link only)*
- **make_it_yourself**: 
  - [Quick Release Fastener - Dzus Dart replacement by McSail (Printables 1537263; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/1537263-quick-release-fastener-dzus-dart-replacement-as-on): Printable copies of a plastic quarter-turn stud, receptacle and retainer (reverse-engineered Dzus Dart parts for lawn tractor guards), printed in PETG, with notes on print orientation *(licence: CC BY-NC)*
  - [3030 Quarter Turn Fastener by John S (Printables 12418; URL seen in search results, details read via the Printables public API)](https://www.printables.com/model/12418-3030-quarter-turn-fastener): Printed quarter-turn stud for holding 3 mm polycarbonate panels onto 3030 aluminium extrusion, for a 3D-printer enclosure; PETG, no supports *(licence: CC BY)*
  - [Fixing screw for a bajonett fastener by H3dSprint (Printables 354565; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/354565-fixing-screw-for-a-bajonett-fastener): Printed PETG stud that fits standard Camloc 2600/2700-series receptacles, used to hold a plexiglass window against a rubber seal *(licence: CC BY-NC)*
- **diagram_idea**: A cut-away through a panel and frame with a stud and a wire spring across the receptacle hole, in two frames: (1) the stud pushed in with the spring at the mouth of its spiral slot; (2) after a quarter-turn arrow, the spring drawn up the slot into the end recess and the panel pulled tight, with a small 'click' at the over-centre bump.
- **sources**: 
  - https://en.wikipedia.org/wiki/Dzus_fastener
  - https://en.wikipedia.org/wiki/File:Dzus_fastener,_from_US_Patent_1955740.png
  - https://commons.wikimedia.org/wiki/File:RRKestrelHind.JPG
  - https://patents.google.com/patent/US1955740
  - https://www.hfsindustrial.com/news/post/how-quarter-turn-fasteners-work
  - https://www.aircraftspruce.com/catalog/pdf/fastener%20literature.pdf (Southco quarter-turn catalogue pages 269-286)
  - https://media.southco.com/media/static/Literature/D1.en.pdf
  - https://media.southco.com/media/static/Literature/81-82-85.en.pdf
  - https://www.mcmaster.com/products/quarter-turn-fasteners/
  - https://www.core77.com/posts/112210/Clever-Hardware-Design-Quarter-Turn-Dzus-Fasteners
  - https://4cycle.com/karting/threads/dzus-fasteners-breaking.21312/
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.printables.com/model/1537263-quick-release-fastener-dzus-dart-replacement-as-on (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/12418-3030-quarter-turn-fastener (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/354565-fixing-screw-for-a-bajonett-fastener (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/ *(unverified parts omitted)*

### Other info

- **Fields with unverified parts:** adjustable, common_failures, environment_limits, making_tips_3d_printing, print_in_place, related, reuse_cycles, safety_notes, sources

## 40 Quick-release pin (ball-lock pin)

*quick-release & tool-free.* A pin with small balls near its tip that lock it in a hole until you press a button on the end to let the balls retract

### What it is

- **plain_name**: A metal pin with a button on its handle and two little balls near its tip: push it through lined-up holes and the balls pop out on the far side, so it can't slide back out until you press the button
- **term**: Ball lock pin (positive-locking quick-release pin)
- **aliases**: 
  - quick-release pin (QR pin)
  - ball-lock pin / ball lock pin
  - push-button quick-release pin
  - positive-locking pin / positive lock pin
  - self-locking pin (catalogue wording)
  - rapid-release pin (JW Winco catalogue wording)
  - Ball-Lok pin (Avibank (brand))
  - Kugelsperrbolzen (German)
  - T-handle, L-handle, ring-handle, button-handle or knob-handle quick-release pin (named after the handle)
  - single-acting pin (release by pushing the button) and double-acting pin (release by pushing or pulling the handle)
  - NAS1333-NAS1346 (single-acting) and MIL-P-23460 (double-acting) pins (US aerospace/military standards)
  - quick-release axle (the same idea used as a wheelchair wheel axle)
  - Bimini top pin (name used for marine quick-release pins sold for boat covers)
  - detent pin / ball detent pin (the simpler push-pull cousin: a spring-loaded ball, no button, not positively locked)
- **family**: quick-release & tool-free
- **other_families**: locks, latches & catches, locating & alignment, hinges & pivots
- **one_liner**: A pin that slides through lined-up holes in two or more parts and locks itself there with small spring-controlled balls, holding the parts together (and in line) until someone presses the button on its handle and pulls it out, with no tools.
- **complexity**: A small assembly that acts as one unit: a hollow, precision-ground shank (pin body); two (sometimes four) hardened steel balls sitting in holes near the tip; an inner rod (spindle) with a narrow groove; a spring; a push button; and a handle (T, L, ring, button or knob). Often supplied with a split ring for a lanyard or retaining cable, and sometimes used with a receiving bushing (receptacle).
- **how_it_works**: The shank is hollow and an inner rod (spindle) runs down its middle. A spring holds the rod so that its full-thickness part sits right behind the balls and pushes them out through holes near the tip; in this state the balls can't be pushed back in, so the pin can't be pulled out (positive locking). Pressing the button pushes the rod forward until a groove lines up with the balls, so the balls can drop inwards and the pin slides in or out freely; letting go of the button springs the rod back and pushes the balls out again beyond the far face of the parts (Carr Lane data sheet: 'the center spindle forward to allow the locking balls to retract into a radial groove'). A double-acting version also releases when you pull the handle ('Pulling on the handle releases the balls and removes the pin in one motion', Carr Lane). The simpler detent pin has no button: a spring pushes a ball straight out, it holds only by spring force and friction, and a firm pull pops it out (Pivot Point).

### Finder attributes

- **job**: 
  - join and hold: pins two or more parts together through lined-up holes
  - lock, and release by hand: it stays locked until the button is pressed, then pulls straight out
  - line parts up exactly: the precision-ground shank also works as a removable locating (alignment) pin
  - let it move (turn, slide or bend): used as a removable hinge or pivot pin, the parts can swing around it
- **motion**: none: it holds parts still. When used as a removable hinge or clevis pin, the joined parts can rotate around it (rotate)
- **degrees_of_freedom**: 1 with a single pin: the parts can still swing around the pin like a hinge. 0 when two pins, or one pin plus a flat stop, are used. Along the pin there is a little end float, because the grip length has to be at least as long as the stack of parts.
- **special_behaviour**: 
  - quick-release: press the button and pull; no tools, and it goes back in the same way
  - hand-release only (locks under load, releases when a person operates it): the balls can't retract until the button moves the inner rod, so pulling on the pin or vibration won't free it (Pivot Point: 'the balls cannot retract'); the push-pull detent pin does NOT have this behaviour
- **holding_principle**: 
  - shape (form-fit): the solid pin fills the holes and carries sideways (shear) loads; the balls, sticking out past the far face, stop it sliding out
  - spring force: a spring holds the inner rod in the locked position; in a plain detent pin the spring pushes the ball directly and the pin is held only by spring force and friction
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release: press the button and pull it out
- **reuse_cycles**: many times: designed for joints that are taken apart often (sold as a replacement for cotter pins 'where frequent removal is necessary', Teknipart), but springs weaken and balls deform after many cycles (AFT)
- **tools_needed**: None to insert or remove. To fit: a drill and ideally a reamer (or a bought bushing) to make holes of the right size; optionally a lanyard or retaining cable so the pin can't be lost.
- **seal**: none: dirt, sand, grease or metal shavings can get into the hollow shank and jam the balls (AFT); sealed designs exist for dirty places
- **load**: Heavy in shear (a force trying to slice across the pin), weak along its length. Carr Lane data: a 1/4 in steel pin carries 4,000 lbf in double shear but only 230 lbf pull-out; a 6 mm pin 17,500 N in double shear but 890 N pull-out (values given with a 2:1 safety factor). Ganter GN 113.5 stainless pins: about 21 kN (6 mm), 38 kN (8 mm) and 60 kN (10 mm) double-shear breaking strength. Twisting around the pin is not resisted (it is round). Use it for sideways loads, not to hold a pull along the pin, except special four-ball lifting pins (Runsom).
- **adjustable**: no, as a rule: the grip length is fixed. Adjustable-grip-length pins exist (Avibank, Halder list them), and a row of holes lets you choose between set positions (step adjustment).
- **play_and_precision**: Small: the shank is precision ground slightly under its nominal size (for example 4.92-4.96 mm for a 5 mm pin, Fixtureworks; -0.04/-0.08 mm, Ganter) and the hole is nominal to +0.1 mm (Carr Lane) or H11 (Ganter), so there is a few hundredths to under 0.2 mm of sideways play. It returns parts to the same place each time, but tolerates almost no misalignment: the holes must line up before the pin will go in. Along the pin there is end float if the stack is thinner than the grip length.
- **access_needed**: one side only (blind): the pin is inserted and released from the handle side; you don't need to reach the far side, but there must be open space (or a receptacle with room) beyond the far face for the tip and balls. Avibank sells receptacles for blind applications.
- **materials**: Shank: heat-treated 4130 alloy steel (zinc or cadmium plated), 17-4PH stainless steel, 303/304 stainless or titanium; balls 440C stainless steel; spring 302 or 17-7PH stainless or music wire; handles anodised aluminium, stainless steel or plastic (polyamide knobs rated to 80 °C, Ganter) (Carr Lane; Fixtureworks; Ganter; Halder). It pins together metal plates, tubes, brackets and clevises, and wood or 3D-printed parts if the holes are accurate and preferably lined with a metal bushing.
- **maker_difficulty**: easy to fit, hard to make: buy the pin; fitting only needs accurately drilled or reamed holes and a stack thickness that matches the pin's grip length. The ball-and-spindle mechanism itself needs small, precise, hardened parts.

### Making it

- **processes**: 
  - off-the-shelf part: the pin is almost always bought
  - CNC or metalwork: drilling and reaming the holes, or machining a bushing (receptacle), for the pin
  - 3D print (FDM): brackets, hinges and modules that a bought pin passes through; also printed look-alike 'quick-release pins' that hold by springy tension instead of balls
  - woodwork: through-holes in wooden parts, ideally lined with a metal bushing (Wixroyd suggests 'locating flanges or bushings' where a part has no suitable hole)
- **print_in_place**: no: a real ball lock pin needs steel balls, a spring and a precise inner rod, so it is bought. Printed 'quick-release pins' on Printables are one-piece pins that hold by tension (Hellforge Actual's MMS pins) rather than a ball lock.
- **making_tips_3d_printing**: 1) Buy the pin and print the parts it goes through. Carr Lane recommends a hole from exactly the nominal size to +0.1 mm (metric) or +0.004 in (inch), for example 6.0-6.1 mm for a 6 mm pin; Ganter specifies H11. FDM prints vertical holes undersized, so Hubs recommends printing the hole undersized and drilling it to size; a hand reamer or a pressed-in metal bushing gives a longer-lasting, accurate hole. 2) Print important holes with their axis vertical: horizontal holes sag at the top unless the bridge is under about 5 mm (Hubs). 3) Design the stack thickness around a pin you can buy. Grip length is measured from under the handle to the top of the locking balls (Fixtureworks), and standard lengths run from about 1/2 to 6 in or 10 to 100 mm, so the combined thickness of your parts must be just under it or the balls stay inside the hole and don't lock. 4) Leave space beyond the far face for the tip and balls to pop out, for example a counterbore or open pocket. 5) Put the pin in double shear where you can (a fork on one part either side of a tongue on the other) and give the printed lugs plenty of perimeters around the hole, because the plastic is far weaker than the steel pin. 6) A ball lock pin makes a secure, removable hinge pin for printed parts: Sean Kane's Prusa enclosure-lid hinge remix uses 3/16 in (4.8 mm) marine 'Bimini top' quick-release pins with a 22 mm usable length, because they are 'less likely to work their way out'. 7) If you print a look-alike pin instead, print it lying flat: Hellforge Actual warns 'Printing Vertical Makes Them Weak', and 3DS3 recommends at least 5 walls, at least 50% cubic or gyroid infill and printing flat with build-plate supports; Hubs warns printed pins under 5 mm diameter are all perimeter and weak, so use a metal pin there. 8) Printed parts around the pin creep and soften with heat: PLA deforms above about 60 °C, and PETG suits use below about 80 °C (Prusa). 9) Add an eye or hole for a lanyard so the pin stays with the part.
- **off_the_shelf_parts**: Ball lock pins (quick-release pins) with T-handle, L-handle, ring handle, button handle, domed or mushroom knob; single-acting (push button) and double-acting (push or pull) types; heavy-duty, adjustable-grip-length and four-ball lifting pins; marine stainless and titanium versions (catalogue search terms: 'ball lock pin', 'quick-release pin', 'positive locking pin', 'Kugelsperrbolzen'; e.g. McMaster-Carr 'quick-release pins', Ganter GN 113 series, Carr Lane, Halder, Avibank Ball-Lok (brands)). Detent pins (push-pull, spring-loaded ball). Receptacles, liners and bushings for the mating hole; end caps; lanyards, ball chains and retaining cables (e.g. GN 111 series). Wheelchair quick-release axles. Aerospace-standard pins to NAS1333-NAS1346 (single-acting) and MIL-P-23460 (double-acting).
- **rules_of_thumb**: 
  - Hole size: nominal to nominal +0.004 in for inch pins (1/4 in pin: 0.2500-0.2540 in) and nominal to +0.1 mm for metric pins (6 mm pin: 6.0-6.1 mm) (Carr Lane ball lock pin technical information, Harcourt copy).
  - Ganter GN 113.5: location bore H11; the pin itself is 0.04-0.08 mm under nominal (Ganter GN 113.5 data sheet).
  - Pull-out strength is only a small fraction of shear strength: a 1/4 in steel pin is rated 4,000 lbf double shear but 230 lbf pull-out; 1/2 in: 16,000 lbf vs 1,160 lbf; values quoted with a 2:1 safety factor (Carr Lane data). Load pins sideways, not along their length.
  - Pins with grip lengths over 8 in are not heat treated (to keep them straight), and their double shear strength drops by about 20-50% (Carr Lane strength data page).
  - Grip length is measured from the bottom of the handle to the top of the locking balls, and must match the total thickness of the parts being pinned (Fixtureworks catalogue).
  - Ganter GN 113.5 stainless pins, double-sided shear breaking strength to DIN 50141: about 14 kN (5 mm), 21 kN (6 mm), 38 kN (8 mm), 60 kN (10 mm), 87 kN (12 mm); Ganter calls these values theoretical and indicative only.
  - Choose a positive-locking ball lock pin over a detent pin when the joint sees higher axial loads or significant vibration, or when accidental disengagement is not acceptable (Pivot Point).
  - In FDM prints, pins under 5 mm diameter are made only of perimeters and are weak: drill a hole and fit an off-the-shelf pin instead (Hubs FDM design guide).

### When to use it

- **everyday_examples**: 
  - Wheelchair wheels that come off with a push of the button in the middle of the hub (quick-release axle pins with two balls)
  - Gym machines, stage lighting and audio rigging, and pop-up displays, where parts are set up and taken down often (Wixroyd)
  - Boat-cover (Bimini top) and deck fittings held by stainless quick-release pins
  - Aircraft ground equipment and military vehicle hatches and cargo racks (AFT)
- **when_to_use**: Use a ball lock pin when parts must be joined strongly but taken apart often and quickly by hand: removable hinge pins, swappable robot or rig modules, folding frames and stands, jigs and fixtures that must go back in exactly the same place, adjustable legs with a row of holes, wheels and axles that come off for transport. It is ideal where the load is sideways across the pin (shear) and where the pin must not fall out on its own from vibration.
- **when_not_to_use**: Don't use it to hold a pull along the pin (tension): its pull-out strength is a small fraction of its shear strength, so use a bolt, a threaded rod or a rated four-ball lifting pin instead. Don't use it where holes can't be made accurately or don't line up well (use a clamp, a bolt through a slot, or an indexing plunger). For light-duty printed projects a printed snap pin, or a hitch pin and R-clip, is cheaper. For a joint that never comes apart, a bolt or rivet is simpler. For a joint that needs to click into set positions while moving, use an indexing plunger. Avoid it in very dirty places unless it is a sealed design (AFT).
- **environment_limits**: Salt water, hydraulic fluid, jet fuel and big temperature swings corrode and degrade pins, so marine-grade stainless steel or titanium are used there (AFT). Sand, grit, grease and swarf in the shank can jam the balls (AFT). Plastic knob handles are rated to about 80 °C (Ganter GN 113.5). Positive-locking pins resist vibration, but an improperly locked pin can work loose under sideways forces (AFT). Printed parts around the pin soften above about 60 °C in PLA (Prusa).
- **safety_notes**: A pin that is not fully engaged can look locked when it isn't (AFT): check that the balls have popped out beyond the far face and give it a tug. Don't use an ordinary ball lock pin for lifting or other pulls along its length. Published strengths are breaking strengths or include a safety factor depending on the maker (Carr Lane quotes a 2:1 safety factor; Ganter gives breaking strength and calls it indicative only), so add your own margin. *(unverified parts omitted)*
- **common_failures**: 1) Not fully engaged, giving a false sense of security (AFT): check that the balls are visible past the far face. 2) Debris in the shank jamming the balls (AFT): clean pins that are used often and choose sealed pins in dirty places. 3) Corrosion (AFT): use stainless steel or titanium outdoors and near salt water. 4) Wear and fatigue: weak or broken springs and deformed balls after many cycles (AFT): inspect and replace. 6) Holes too tight (the pin binds) or worn oversize (the joint rattles and the balls can slip back through): size the holes to the maker's tolerance, and use bushings in soft materials such as plastic or wood. 7) Overloading along the pin's length (pull-out far below shear rating, Carr Lane). *(unverified parts omitted)*
- **related**: 
  - Detent pin (ball detent pin): a spring pushes a ball straight out, with no button; it holds by spring force and friction and pulls out with enough force, so it is lighter duty and not positively locked (Pivot Point)
  - Snap pin (split-leg push-in pin, rabbit clip): a printable pin whose springy legs hold it in; cheaper but weaker, and pops out under a firm pull
  - Tool-free fasteners (hitch pin and R-clip): a plain pin kept in by a separate spring clip; very cheap, but you need both hands and the clip can be lost
  - Clevis joint (fork-and-pin joint): the fork-and-tongue joint that a quick-release pin is often used in
  - Indexing plunger (pull-knob index pin): a spring-loaded pin fixed to one part that drops into holes to lock set positions; it stays attached and isn't pulled right out
  - Ball detent (spring plunger): a spring-loaded ball that gives a click or light hold; the same ball idea but not a pin through holes
  - Spring button lock (snap button, push-button tube lock): a spring button that pops through holes in telescoping tubes
  - Temporary sheet fastener (Cleco-type spring pin): a spring pin for holding sheets together temporarily before riveting
  - Quick couplers for tubes and hoses (sleeve lock): use the same trapped-ball idea, but a sliding sleeve instead of a button locks the balls
  - Bayonet mount and quarter-turn fastener: other tool-free locks that twist instead of using a pin through holes
  - Locating pins and hole-and-slot: fixed pins for alignment only, with no locking

### Pictures, videos and models

- **links**: 
  - [Quick Release Ball Lock Pin. How it works. 3D Printed Cutaway Model / Animation (Jay Gould, YouTube)](https://www.youtube.com/watch?v=GPmNklsSE7w): A 3D-printed cutaway model and animation showing the balls, inner rod and button of a ball lock pin locking and releasing (title and channel verified via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [Kugelsperrbolzen Funktionsprinzip (Wikimedia Commons, by Heinrich Kipp Werk KG)](https://commons.wikimedia.org/wiki/File:Kugelsperrbolzen_Funktionsprinzip.tif): Diagram of how a ball lock pin works (German labels), used on the German Wikipedia article 'Kugelsperrbolzen' *(licence: CC BY-SA 4.0)*
  - [How Do Ball Lock Pins Work? The Ultimate Guide (Carr Lane Mfg.)](https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/ball-lock-pin-technical-information): Illustrated explanation of single- and double-acting pins, handle styles (ring, T, L), materials and strength tables *(licence: link only)*
  - [Halder Ball Lock Pins (Erwin Halder, YouTube)](https://www.youtube.com/watch?v=qLTZiNngk9c): Manufacturer video of ball lock pins being used for quick fastening, locking and adjusting *(licence: link only (standard YouTube licence))*
  - [How Quick- Release Detent Pins are made (Pivot Point Incorporated, YouTube)](https://www.youtube.com/watch?v=fgiiHIQu9Sk): How the simpler push-pull detent pin is made and how its spring-loaded ball is kept in the pin, for comparison *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Original Prusa Enclosure Lid Hinge for Quick Release Locking Pin (Sean Kane, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1253863-original-prusa-enclosure-lid-hinge-for-quick-relea): Printed hinge parts redesigned so a bought 3/16 in (4.8 mm) marine quick-release pin with a 22 mm usable length becomes a removable hinge pin; a practical example of designing printed parts around a ball lock pin *(licence: GNU GPL v3.0)*
  - [MMS/Picatinny Quick Release Pins (Hellforge Actual, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/213156-mmspicatinny-quick-release-pins): Printed push pins that are 'held in by tension' and release with a moderate push, from a modular mounting system that began in school robotics competitions; must be printed horizontally. A light-duty printable alternative, not a ball lock *(licence: CC BY-NC)* *(unverified parts omitted)*
- **diagram_idea**: Two side-by-side cutaways of a ball lock pin through two plates: left, button released, the thick part of the inner rod pushing both balls out past the far plate (arrow: 'can't pull out'); right, button pressed, the groove lined up with the balls so they drop in (arrow: 'slides out'); plus a small inset with a big sideways 'shear' arrow and a small 'pull-out' arrow to show which way it is strong.
- **sources**: 
  - https://www.harcourt.co/overview_documents/Ball%20Lock%20Pins%20Technical%20Info.pdf
  - https://www.carrlane.com/engineering-resources/technical-information/manual-workholding/ball-lock-pin-technical-information
  - https://www.carrlane.com/engineering-resources/technical-information/ball-lock-pins-engineering-application/ball-lock-pin-strength-data
  - https://www.fixtureworks.com/store/pc/catalogpdfs/Quick_Release_Pins_Fasteners.pdf
  - https://www.elesa-ganter.com/siteassets/PDF/EN/GN%20113.5.pdf
  - https://www.pivotpins.com/products/quick-release-pins.html
  - https://www.avibank.com/products/ball-lok-quick-release-pins/
  - https://aft.systems/common-problems-with-ball-lok-pins-and-how-to-avoid-them/
  - https://aft.systems/different-types-of-avibank-ball-lok-pins-in-military-and-aerospace-applications/
  - https://www.jwwinco.com/en-us/products/3.1-Indexing-locking-blocking-with-pins-and-ball-shaped-elements/Rapid-release-pins
  - https://www.wixroyd.com/wx/pageid/ball-lock-pins-from-wixroyd
  - https://www.teknipart.co.uk/tp/pageid/quick-release-pins
  - https://www.halderusa.com/PM/Standard-Parts/Machine-and-Fixture-Elements/Ball-Lock-Pins
  - https://www.runsom.com/blog/guide-to-quick-release-pins/
  - https://livingspinal.com/quick-release-axle-pins-for-wheelchairs/
  - https://de.wikipedia.org/wiki/Kugelsperrbolzen
  - https://commons.wikimedia.org/wiki/File:Kugelsperrbolzen_Funktionsprinzip.tif
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://api.printables.com/graphql/
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=GPmNklsSE7w&format=json
  - https://www.youtube.com/watch?v=GPmNklsSE7w
  - https://www.youtube.com/watch?v=qLTZiNngk9c
  - https://www.youtube.com/watch?v=fgiiHIQu9Sk

### Other info

- **Fields with unverified parts:** common_failures, make_it_yourself, safety_notes

## 41 Quick-release plate (camera plate, dovetail clamp)

*quick-release & tool-free.* A plate with angled edges slides or drops into a matching clamp and is locked by a lever or knob, as on camera tripods

*Also covers:* Also covers Picatinny-style rails and camera cold shoes

### What it is

- **plain_name**: A small plate screwed under a camera (or any gadget) with sloping edges that slides or drops into a matching clamp, where a knob or lever locks it; open the knob or lever and the gadget lifts or slides straight off
- **term**: Quick-release plate and dovetail clamp (Arca-Swiss-type quick-release system)
- **aliases**: 
  - quick-release plate (QR plate), camera plate, tripod plate
  - Arca-Swiss plate / Arca-type / Arca-compatible plate (named after Arca-Swiss (brand), now a de-facto standard)
  - F38 plate (38 mm-wide Arca-type plate)
  - dovetail plate, dovetail bar, dovetail rail
  - quick-release clamp, dovetail clamp, grabber plate, receiver (tripod-head side); saddle (telescope-mount side)
  - lever-release clamp / screw-knob clamp
  - L-bracket and lens plate (lens foot) (Arca-type plates for turning the camera or holding a long lens)
  - RC2 / 200PL drop-in plate (Manfrotto (brand) system)
  - DIN 4503 quick-release plate (square plates with sloping sides used by some tripod makers)
  - Vixen-style (V-series) and Losmandy-style (D-series) telescope dovetail bars (brand-derived standards)
  - Picatinny rail (MIL-STD-1913, also STANAG 4694 'NATO accessory rail')
  - NATO rail and NATO clamp (camera-rig version)
  - Weaver rail
  - 11 mm and 3/8 in dovetail (air-rifle and rimfire scope rails)
  - accessory shoe / cold shoe (camera shoe without electrical contacts; ISO 518 size) and hot shoe (with flash contacts)
- **family**: quick-release & tool-free
- **other_families**: clamping, magnetic & friction connections, locating & alignment, sliding, telescoping & linear motion, over-centre, toggle & cam clamps
- **one_liner**: A two-part mount in which a plate or rail with bevelled (dovetail) edges is trapped and squeezed by a matching clamp, so a camera, light, sight or instrument can be locked on in the same position in seconds and released by hand.
- **complexity**: A few parts: the plate (a bar with bevelled long edges, usually with a camera screw such as a 1/4-20 UNC D-ring screw); the clamp body with one fixed jaw and one moving jaw; a knob screw or cam lever that closes the moving jaw; and often safety stops (screws or pins at the ends of the plate). Drop-in systems add a sprung latch lever and a second safety catch. Rails (Picatinny, NATO, Weaver) are long plates fixed to the gun or rig, with the clamp on the accessory. A cold shoe is just a channel with two inward lips and a leaf spring.
- **how_it_works**: The plate's two long edges are bevelled like a dovetail (45° on Arca-type plates, Wikipedia 'Tripod head'). The clamp has a fixed jaw and a moving jaw with matching sloped faces. Turning the knob (a screw) or flipping the lever pushes the moving jaw in; the sloped faces act like wedges, squeezing the plate sideways and pulling it down onto the clamp's flat base, so it can't lift, slide or wobble. Loosen the jaw and the plate slides out along its length or lifts out; safety stops at the plate's ends catch it if the clamp is only slightly loose ('the plate moves freely within the channel and comes to a stop at the safety pins', Arca-Swiss USA). Drop-in systems such as the RC2 plate have two bevelled edges and are held by a lever that is 'secured once the QPR is in place, by a secondary smaller lever' (Talk Photography forum). Picatinny and Weaver rails reverse the parts: a long bevelled rail with cross slots sits on the gun or rig, the accessory's clamp grips it, and the clamp's locking screw passes through a slot so the accessory can't slide (Wikipedia 'Weaver rail mount'). A cold shoe is the simplest version: a flat foot slides into a channel with inward lips and is held by leaf-spring friction, sometimes plus a clamping screw or sliding clamp (Wikipedia 'Hot shoe').

### Finder attributes

- **job**: 
  - join and hold: mounts a camera, light, sensor, sight or instrument on a support
  - lock, and release by hand: a knob or lever locks and frees it without tools
  - line parts up exactly: the plate goes back in the same place and at the same angle every time
  - let it move (turn, slide or bend): with the clamp loosened, the plate or accessory slides along the rail to balance it or reposition it
- **motion**: none when locked; with the clamp loosened (but the plate still trapped under the jaws) it can slide along the rail to a new position (slide)
- **degrees_of_freedom**: 0 when clamped. 1 when the clamp is loosened but the plate is still captured: it can slide along the rail but not lift or twist.
- **special_behaviour**: 
  - quick-release: flick a lever or turn a knob a little and the plate comes out; no tools
  - self-aligning or self-centring: the sloping jaws pull the plate down and against the fixed jaw, so it seats in the same place each time; Picatinny slots are evenly spaced (10.01 mm centres), so accessories go back to the same slot
  - hand-release only (locks under load, releases when a person operates it): pulling on the camera doesn't open the clamp; drop-in systems add a second catch so the main lever can't be flicked open by accident
- **holding_principle**: 
  - shape (form-fit): the bevelled edges are trapped under the jaws' sloping lips, so the plate can't lift out even if the clamp is a bit loose; safety stops or a bolt in a rail cross-slot stop it sliding out
  - friction or clamping (force-fit): the jaws squeeze the plate so it can't slide or rock; along the rail, a screw clamp without stops holds by friction only
  - spring force: cold-shoe leaf springs, and the sprung latch levers of drop-in clamps
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release: the clamp opens by hand; the plate itself stays screwed to the camera or device (with a D-ring screw, coin or hex key)
- **reuse_cycles**: many times: made for constant on and off use; metal plates and clamps last years, but printed jaws, knob threads and cold-shoe springs wear, and printed compliant clamps can sag
- **tools_needed**: None to clamp or release. A coin, hex key or D-ring screw to fix the plate to the camera. DIY printed clamps need a few bolts and nuts: the Strong Arca Swiss Clamp uses one M6x80 hex bolt, one M6 nut, two 3.5x50 wood screws cut to length and a pen spring, plus a file and a saw.
- **seal**: none
- **load**: Light to medium, depending on size: cameras, lenses, lights, sights, sensors and telescopes. Strong against lifting off and twisting (the jaws trap the plate); sliding along the rail is resisted only by clamp friction plus any stops or cross-slot bolts. Wider bars carry more: telescope Losmandy-style D bars are about 3 in wide for heavier scopes, while Vixen-style V bars are about 44 mm wide (Farpoint Astro). Printed cold-shoe feet are very weak ('very light duty even when printed 100% infill', burtworks). A printed PETG Arca clamp holds consumer cameras such as a Sony A6400 and Canon 700D without failure for years (Ag.3).
- **adjustable**: yes: loosen the clamp and slide the plate along it to balance a camera and lens or reposition an accessory (long plates and rails). Picatinny accessories move in 10.01 mm slot steps (Wikipedia). Screw-knob clamps also adjust to small differences in plate width (Wikipedia 'Tripod head').
- **play_and_precision**: None when clamped: the wedge action takes up all play, and safety stops or a lip give a repeatable end position. How much variation it tolerates depends on the clamp: screw-knob clamps can take up small width differences, while lever-release clamps have 'much lower tolerances' and are 'only guaranteed to be compatible with plates from the same brand' (Wikipedia 'Tripod head'; Ulanzi). Weaver-rail accessories fit Picatinny rails but not always the other way round (Wikipedia 'Picatinny rail').
- **access_needed**: one side only (blind): the plate slides in from the end or drops in from above, and the knob or lever is on the side of the clamp; the plate's own screw needs access to the underside of the camera
- **materials**: Plates and clamps: machined aluminium, with 1/4-20 hex screws for Arca-type plates (Wikipedia 'Tripod head'); often a rubber or cork pad on top to grip the camera. Rails: aluminium, steel or both (Wikipedia 'Picatinny rail'). Cold shoes: metal or plastic. DIY versions: PETG or PLA prints (Ag.3; nmattia; Catja), or milled aluminium.
- **maker_difficulty**: moderate: a plate is easy to print (its 45° edges print without supports) or to mill, but it must closely match commercial clamps; a clamp needs stiff jaws and a screw or cam. For heavy or expensive gear, buy metal clamps.

### Making it

- **processes**: 
  - 3D print (FDM): Arca-type plates, clamps, adapters, Picatinny rails and clamps, cold-shoe mounts
  - CNC: machined aluminium plates, clamps and rails
  - off-the-shelf part: plates, clamps, L-brackets, rails, NATO clamps, cold-shoe adapters and camera screws
- **print_in_place**: partly: a plate prints in one piece (with a bought or printed camera screw), and there is a print-in-place quick-release Picatinny mount (FileForge) and a one-piece compliant Arca clamp that uses springy plastic instead of a screw (antonok), but most printed clamps need a bolt, nut and spring (Ag.3)
- **making_tips_3d_printing**: 1) Plates: nmattia prints the Arca plate upside down (as supplied) with no supports and says the settings are 'not very important'; a printed camera screw needs 0.2 mm layers or smaller, 100% infill, printed flat. 2) Bevels: 45° faces print without supports, because FDM can usually print overhangs up to 45° (Hubs). 3) Clamps: orient the jaws so their layer lines run across the clamping stress, so tightening doesn't pull the layers apart; Ag.3's Strong Arca Swiss Clamp uses PETG, 0.2 mm layers, 8 perimeters, 50% infill, no supports, a washer to spread the knob's load across the moving jaw, and two mounting bolts that also hold the body together if it delaminates. 4) Compliant (screwless) clamps: antonok's one-piece PETG clamp is printed 'as a single extrusion' so 'all spring forces are applied orthogonally to the layer lines'; the spring sizes suit a 0.6 mm nozzle and PETG and need retuning for other nozzles or materials, and it shouldn't be left engaged long term because the plastic can sag. 5) Other plate standards: Catja's Velbon plate (square, 42x42 mm base with a 30° slope, described as DIN 4503) prints without supports and is best in PETG with extra perimeters. 6) Picatinny rails: use a parametric model (e.g. Bike Cyclist's OpenSCAD rail and clamp) and keep the standard slot size (5.23 mm wide, 10.01 mm centres, 3.00 mm deep, Wikipedia); that model chamfers the slot edges 'to avoid unprintably thin corners'. 7) Cold shoes: the foot is only about 2 mm thick (ISO 518), so printed feet snap easily: burtworks calls theirs 'very light duty even when printed 100% infill' and prints spares; K2_Kevin uses 0.16-0.2 mm layers, 4 perimeters, 50% infill and a captive 1/4-20 nut rather than a printed thread. 8) Test-fit printed plates in the actual clamp: screw-knob clamps forgive small width errors, while lever clamps may not. 9) Add safety stops (screw heads or bumps at both ends) so a loose clamp can't drop the plate. 10) Heat: PLA softens above about 60 °C (Prusa), so a PLA camera mount in a hot car can creep; PETG is suitable to about 80 °C.
- **off_the_shelf_parts**: Arca-type quick-release plates (universal plates, lens plates, L-brackets), Arca-type clamps (screw-knob, lever-release, dual-channel), and Arca-type plate-and-clamp sets for phones and action cameras; drop-in plate systems (e.g. Manfrotto RC2 / 200PL (brand)); DIN 4503 plates; telescope dovetail bars and saddles (Vixen-style V, about 44 mm; Losmandy-style D, about 3 in); Picatinny/Weaver rails and rail clamps; NATO rails and NATO clamps for camera cages; cold-shoe mounts, cold-shoe to 1/4-20 adapters, hot-shoe covers; camera screws in 1/4-20 UNC and 3/8-16 UNC (D-ring screws) and 3/8-16 to 1/4-20 reducing bushings.
- **rules_of_thumb**: 
  - Arca-type plates are 38 mm wide with a 45° dovetail on each side (Wikipedia 'Tripod head'; Ulanzi gives 38.1 mm). Arca-Swiss also makes a 26 mm system for monoballFix plates and view-camera monorails (Arca-Swiss USA).
  - Lever-release clamps have much tighter tolerances than screw clamps and are only guaranteed with same-brand plates (Wikipedia 'Tripod head'), so use screw-knob clamps for mixed or home-made plates (Ulanzi).
  - Stop plates rotating and falling out: use plates with a lip or flange, two screws on lens feet, and small stops on the plate that run in grooves on the clamp (Wikipedia 'Tripod head').
  - Camera threads: 1/4-20 UNC on most consumer cameras, and 3/8-16 UNC on larger professional gear, which often takes a removable 1/4-20 adapter (ISO 1222, via Wikipedia 'Tripod (photography)'). Arca-type plates fix to the camera with 1/4-20 screws; tripod heads usually sit on a 3/8-16 screw.
  - Picatinny (MIL-STD-1913) slot: 0.206 in (5.23 mm) wide, centres 0.394 in (10.01 mm) apart, 0.118 in (3.00 mm) deep (Wikipedia 'Picatinny rail'). Weaver slots are 0.180 in (4.57 mm) wide with inconsistent spacing, so Weaver accessories fit Picatinny rails but not always the reverse (Wikipedia 'Weaver rail mount').
  - Camera accessory shoe (ISO 518:2006): the channel is 18.6 mm (+0.2/-0) wide and 2 mm (+0.15/-0) high inside, with 12.5 mm (+0.4/-0) between the two lips (Wikipedia 'Hot shoe').
  - Telescope dovetails: Vixen-style (V) about 44 mm wide, Losmandy-style (D) about 3 in wide; the two are not interchangeable (Farpoint Astro).
  - FDM overhangs up to about 45° print without supports, so 45° dovetails print cleanly (Hubs). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - The plate under a camera that clicks or clamps onto a tripod head
  - The rail on top of a telescope tube, or under it, that clamps into the mount
  - The slotted Picatinny rail on airsoft guns and foam-dart blasters for adding sights, lights and grips (Wikipedia)
  - The cold shoe on top of a camera or phone rig for a microphone or small light
- **when_to_use**: Use it when a device must be moved between supports quickly and go back in exactly the same place: cameras between a tripod, slider and gimbal; lights, microphones and monitors on rigs; sensors and cameras on robots or test fixtures; telescopes on mounts; accessories on a rail anywhere along its length. It is a good choice when you want to slide an item along to balance it, and for fixed-orientation mounting that won't twist the way a single screw can.
- **when_not_to_use**: Avoid it for permanent structural joints (bolt them). Don't rely on a friction-only screw clamp with no safety stops where knocks or vibration could slide the plate out. Avoid mixing brands with lever clamps. Avoid printed plastic mounts for heavy or expensive equipment, or under constant load for long periods (antonok). For hanging things on a wall, a French cleat or keyhole slot is simpler; for a quick twist-on joint, use a bayonet mount; for tilting and aiming, add a ball head; for positions that repeat to a very high accuracy, use a kinematic coupling.
- **environment_limits**: PLA softens above about 60 °C and degrades under UV light, and PETG is suitable to about 80 °C (Prusa), so printed camera mounts shouldn't be left in hot cars or strong sun. Printed compliant clamps can sag over time under load (antonok). *(unverified parts omitted)*
- **safety_notes**: The main hazard is expensive gear falling: seat the plate fully, tighten the clamp, and give it a tug before letting go. A mismatched plate can 'touch in a way that seems secure for a moment' without being properly clamped (Ulanzi). Keep safety stops fitted (Wikipedia 'Tripod head'; Arca-Swiss USA). *(unverified parts omitted)*
- **common_failures**: 1) Plate from one brand not seating in another brand's lever clamp, only touching on its edges (Ulanzi; Wikipedia): use a screw-knob clamp or matched parts. 2) Plate twisting on its single camera screw: use a plate with an anti-twist lip or flange, or two screws (Wikipedia). 3) Clamp loosening and the plate sliding out: fit safety stops (Wikipedia; Arca-Swiss USA). 4) Printed clamp jaws cracking or splitting along layer lines: print with the layers across the stress and use a washer to spread the load (Ag.3), and replace any cracked part. 5) Printed cold-shoe feet snapping (burtworks): print spares, use PETG, or use a metal shoe. 6) Printed compliant clamps sagging over time (antonok). 7) Weaver-sized accessories being loose, or Picatinny ones not fitting, on the other rail type (Wikipedia). *(unverified parts omitted)*
- **related**: 
  - Dovetail slide with gib strip (dovetail ways): the same bevelled shape used to guide a sliding machine part, adjusted by a tapered strip instead of clamped quickly
  - Sliding dovetail (woodworking): the same shape as a permanent or knock-down wood joint
  - Hang-on mounts (keyhole slot, French cleat): also bevel-hooked, but held by gravity instead of a clamp
  - Eccentric cam lever (cam clamp): the lever mechanism inside many lever-release clamps
  - Aluminium-extrusion connectors (T-slot nuts and brackets): accessories clamp anywhere along a profiled rail, but with tools
  - Bayonet mount (push-and-twist lock): tool-free and repeatable too, but twist-on rather than slide-in (e.g. camera lenses)
  - Kinematic coupling (balls in V-grooves): repeats position far more exactly, for precision instruments
  - DIN-rail clip (top-hat rail snap mount): snaps modules onto a standard rail without a clamp
  - Magnet joint (embedded magnets, magnetic catch): even quicker for light items, but weaker and less positive
  - Modular grid mounting systems (pegboard, Gridfinity-style grids): many fixed positions instead of one sliding rail

### Pictures, videos and models

- **links**: 
  - [Arca Swiss Profile (Wikimedia Commons, by Phiarc)](https://commons.wikimedia.org/wiki/File:Arca_Swiss_Profile.svg): Cross-section drawing of the de-facto standard Arca-Swiss quick-release plate profile (made in FreeCAD), used in the Wikipedia 'Tripod head' article *(licence: CC BY-SA 4.0)*
  - [Picatinny rail (Wikipedia)](https://en.wikipedia.org/wiki/Picatinny_rail): Dimensioned cross-section and side-view drawings of the MIL-STD-1913 rail, with its recoil grooves *(licence: text CC BY-SA 4.0; check each image's own licence on Commons)*
  - [Hot shoe (Wikipedia)](https://en.wikipedia.org/wiki/Hot_shoe): Photos of camera hot shoes and an older cold shoe (Minolta SRT101), with the ISO 518 dimensions *(licence: text CC BY-SA 4.0; check each image's own licence on Commons)*
  - [The Arca-Swiss quick release mounting system. (Wimberley Inc, YouTube)](https://www.youtube.com/watch?v=9G27wH-xhRg): A maker of tripod heads demonstrating Arca-Swiss plates and clamps and their advantages *(licence: link only (standard YouTube licence))*
  - [Arca Swiss - What is it? Plus Quirks, Pros, and Cons (Marcus Hutsell, YouTube)](https://www.youtube.com/watch?v=4ESNT3DTDMs): Explanation of the Arca-Swiss standard, compatibility quirks, and the pros and cons of lever and knob clamps *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Strong Arca Swiss Clamp (Ag.3, Printables)](https://www.printables.com/model/251614-strong-arca-swiss-clamp): A printed Arca-type screw clamp (PETG, 8 perimeters) using an M6 bolt, nut and pen spring, designed with layer lines across the clamping stress; takes Peak Design and other Arca-style plates *(licence: CC BY-NC)*
  - [Arca-Swiss Quick Release plate (with screw) (nmattia, Printables)](https://www.printables.com/model/654666-arca-swiss-quick-release-plate-with-screw): A printable Arca-type plate that takes a 1/4-20 screw, or a printed screw (100% infill) *(licence: CC BY-NC)*
  - [Compliant Arca-Swiss quick-release clamp (antonok, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1258735-compliant-arca-swiss-quick-release-clamp): A one-piece screwless Arca clamp that grips with a springy printed flexure ('hook and pull'); FreeCAD source included *(licence: Creative Commons Public Domain (as labelled on Printables))*
  - [Parametric NATO/Picatinny Rail and Clamp (Bike Cyclist, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/53215-parametric-natopicatinny-rail-and-clamp): OpenSCAD generator for Picatinny/NATO rails with any number of slots, plus a matching female clamp (Weaver-compatible) *(licence: CC BY-NC)*
  - [Quick release Picatinny rail mount (Print-In-Place) (FileForge, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/465579-quick-release-picatinny-rail-mount-print-in-place): A quick-release rail clamp that prints fully assembled, with no extra parts *(licence: CC BY-SA)*
  - [Tripod Mounts: Cold Shoe and Ram Ball Mounts with 1/4 20 Thread (K2_Kevin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/228915-tripod-mounts-cold-shoe-and-ram-ball-mounts-with-1): Printable cold-shoe mounts with a printed thread or a captive 1/4-20 nut, plus a blank base for your own accessory mounts *(licence: CC BY-SA)*
- **diagram_idea**: End-on cross-section of an Arca-type plate between a fixed jaw and a moving jaw, with arrows showing the knob pushing the moving jaw sideways and the 45° faces turning that push into a downward clamp onto the base; a second small view shows the same shape turned around as a Picatinny rail with a clamp bolt sitting in a cross-slot, and a third shows a cold-shoe foot sliding under two lips.
- **sources**: 
  - https://en.wikipedia.org/wiki/Tripod_head
  - https://en.wikipedia.org/wiki/Tripod_(photography)
  - https://en.wikipedia.org/wiki/Dovetail_rail
  - https://en.wikipedia.org/wiki/Picatinny_rail
  - https://en.wikipedia.org/wiki/Weaver_rail_mount
  - https://en.wikipedia.org/wiki/Hot_shoe
  - https://commons.wikimedia.org/wiki/File:Arca_Swiss_Profile.svg
  - https://arca-swiss-usa.com/pages/quick-release
  - https://www.ulanzi.com/blogs/knowledges/arca-swiss-compatibility-f38-plates
  - https://www.talkphotography.co.uk/threads/quick-release-plate-confusion.709757/
  - https://farpointastro.com/pages/telescope-dovetails
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://api.printables.com/graphql/
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=9G27wH-xhRg&format=json
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=4ESNT3DTDMs&format=json

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, rules_of_thumb, safety_notes

## 42 Hang-on mounts (keyhole slot, French cleat)

*quick-release & tool-free.* A head slides into a keyhole-shaped slot, or two bevelled rails hook together, so things hang securely and lift off without tools

### What it is

- **plain_name**: Ways to hang something on a wall so it just lifts on and off: a keyhole-shaped hole on the back that drops over a screw head, or two strips with sloping edges that hook over each other
- **term**: Keyhole slot (keyhole hanger) and French cleat (interlocking bevelled cleat)
- **aliases**: 
  - keyhole slot, keyhole hanger, keyhole hanging slot
  - keyhole mounting plate / keyhole plate / keyhole escutcheon (a metal insert with the slot already made)
  - T-slot keyhole (the undercut slot cut by a keyhole router bit)
  - keyhole negative / keyhole modifier (3D-printing term for a keyhole cut into a model in the slicer)
  - French cleat, interlocking cleat, bevelled (beveled) cleat, hanging cleat
  - cleat wall / French cleat tool wall / cleat rail
  - Z-clip, Z-bar, panel clip, interlocking hanging clip (extruded aluminium version of the French cleat)
  - aluminium French cleat / hanging rail / wall mounting bracket
- **family**: quick-release & tool-free
- **other_families**: interlocking joints & joinery, sliding, telescoping & linear motion
- **one_liner**: Two gravity-held wall mounts that let an object be lifted on and off without tools: a keyhole slot in the object drops over a screw head in the wall, and a French cleat is a pair of bevelled strips, one on the wall and one on the object, that hook together under the object's weight.
- **complexity**: A few parts. Keyhole slot: a slot with a round entry hole and a narrower undercut channel, cut into the back of the object or provided by a metal keyhole plate, plus a round- or pan-headed screw (or nail) left sticking out of the wall. French cleat: two strips with matching bevelled edges (one screwed to the wall, one to the object), usually plus a plain spacer strip at the bottom of the object; the aluminium Z-clip is the same idea as two small extrusions.
- **how_it_works**: Keyhole slot: the round end of the slot is big enough for the screw head to pass through, and the narrow part only lets the screw's shank through; behind the narrow part there is a hollow pocket for the head. You push the object onto the screw head at the round end, then let it drop, so the head slides behind the narrow part and the object's weight keeps it there. To remove it, lift it up and pull it off. French cleat: the wall strip's bevel faces up and towards the wall, and the object's strip has the opposite bevel facing down. When the object is lowered on, the two slopes hook together, and the weight wedges the object down and in against the wall, so it can't move down or pull outwards ('The bevel stops that from happening', The Honest Carpenter). A plain strip of the same thickness at the bottom keeps the object upright (Stumpy Nubs). To remove it, lift it up and off. Aluminium Z-clips 'wedge together to lock panels in place. Simply lift and remove' (Rockler).

### Finder attributes

- **job**: join and hold: hangs an object on a wall, panel or board, lock, and release by hand: lift it up to take it off, then drop it back on; no tools
- **motion**: none once hung; the object is lifted up and off to remove it, and on a French cleat it can be slid sideways along the rail before it settles
- **degrees_of_freedom**: Keyhole on one screw: 1 (the object can swing around the screw); two keyholes: 0 in normal use. French cleat: 1 (it can slide sideways along the cleat, held only by friction) unless it is stopped or screwed. In every case lifting the object frees it, because only gravity holds it down.
- **special_behaviour**: 
  - quick-release: lift up and off, and drop it back on
  - self-aligning or self-centring: gravity pulls the screw head to the top of the keyhole slot, or wedges the 45° bevels together and pulls the object in against the wall, so no fine manoeuvring is needed (Wikipedia 'French cleat')
- **holding_principle**: 
  - shape (form-fit): the screw head is trapped behind the narrow slot, or the bevelled strips hook over each other; the object's own weight (gravity) keeps them engaged
  - friction or clamping (force-fit): only in a small way: the weight pressing the bevels together gives some friction that resists sliding sideways
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release: the object lifts off by hand; the wall-side screw or cleat is fitted with tools and stays in place
- **reuse_cycles**: many times: made to be lifted on and off, and cleat walls are meant to be rearranged often (Wikipedia 'French cleat'); printed slots with thin lips and soft wall anchors wear or crack sooner
- **tools_needed**: None to hang or remove. To install: a drill-driver, spirit level, stud finder or suitable wall anchors. Keyhole slots are cut with a router and a keyhole router bit (or a CNC router), fitted as a metal keyhole plate with #6 flat-head screws, or printed into a 3D-printed part. French cleats are ripped on a table saw, or with a circular saw guided by a straight edge, with the blade at 45°.
- **seal**: none
- **load**: Keyhole slot: light to medium; a steel keyhole mounting plate is rated 'up to 30 lbs (13.6 kg) when properly mounted' (Craftparts). It is limited by the screw's hold in the wall and by the thin lip of material around the slot, and weak against a pull straight away from the wall. French cleat: heavy, suitable for wall cabinets and tool walls; strong downwards (the screws into studs carry the weight in shear) and against tipping outwards (the bevel), but weak against a push upwards, which simply lifts it off. On a Sawmill Creek forum, one woodworker estimated that #10 screws driven 2 in into sound studs hold 'at least 200 pounds ... and maybe as much as 1000 lb' (forum opinion, not a test).
- **adjustable**: yes: a French cleat wall strip slightly shorter than the cabinet lets the cabinet slide left and right after hanging (Wikipedia 'French cleat'), and cleat walls let holders be moved anywhere along the rails. For keyholes, how far the screw head sticks out sets how tightly the object sits against the wall (Fine Woodworking), and one long horizontal slot allows side-to-side levelling (Fine Woodworking reader comment).
- **play_and_precision**: Small to noticeable: position is only roughly repeatable. A keyhole leaves a gap around the screw head, so the object can rattle or shift if the head is not set to the right depth. A French cleat sits tight under the object's weight but can slide sideways and lift. Aluminium Z-clips need a 1/4 to 3/4 in 'lift-off' gap above to be removed (0 in for a special zero-lift design) (Monarch Metal). It tolerates wavy walls well, and a cleat tolerates sideways misplacement of the wall screws.
- **access_needed**: one side only (blind): the wall part is fixed first, then the object is hung from the front; the back of the object never has to be reached once it is hung
- **materials**: French cleats: 3/4 in (19 mm) plywood is recommended; solid wood can split along the grain under heavy load (Stumpy Nubs; The Honest Carpenter). Z-clips: extruded aluminium or stainless steel (Monarch Metal; Rockler). Keyhole plates: zinc-plated steel (Craftparts). Printed versions: PLA or PETG. Screws: strong screws such as deck screws into studs, not brittle drywall screws (The Honest Carpenter); #6 or #8 pan- or round-head screws for printed keyhole slots (Brainanator).
- **maker_difficulty**: easy: a French cleat is two 45° saw cuts; a keyhole slot is one router-bit cut, a bought metal plate, or a cavity added to a 3D print in the slicer; the only critical part is fixing the wall side securely

### Making it

- **processes**: 
  - woodwork: French cleats ripped at 45° on a table saw; keyhole slots routed with a keyhole bit
  - CNC: keyhole slots cut with a keyhole bit (pre-clear with a small end mill); cleats and holders cut from sheet
  - 3D print (FDM): keyhole slots cut into prints with a negative volume, French-cleat hooks, holders and brackets, cleat locks
  - off-the-shelf part: keyhole mounting plates, aluminium Z-clips and hanging rails, keyhole router bits
- **print_in_place**: yes: the object's half (a keyhole cavity, or a cleat hook or strip) prints as one solid piece with no assembly; the wall screw, or the wall cleat, is separate
- **making_tips_3d_printing**: 1) Keyhole slots: add a ready-made keyhole shape as a negative volume or modifier in the slicer. Brainanator's version is 8 mm across the hole, 4 mm across the slot and 8 mm long, with about 3 mm of room for the screw head; it suits #6 screws, #8 screws are tight unless scaled up, and a 10-minute test slug checks the fit. Layer.works' version has an 8.8 mm hole, a 4.4 mm slot, a 1 mm lip and 1 mm of space behind for a nail head; it cuts 2 mm deep, so the part must be thicker than 2 mm, and heavier objects need a thicker part. 2) Print the keyhole with its opening face down, without supports: the roof over the head pocket bridges fine in PETG, and supports inside the cavity are very hard to remove (TheWebMachine). Stringy materials such as TPU may droop inside the keyhole. 3) The lip that holds the screw head is the weak point: thicken it (and add perimeters around it) for anything heavier than a light frame. 4) French-cleat holders: Morris Lazootin prints his cleat mount 'vertically, with one side of the cleat flat' on the bed so the perimeters, not the layer bonds, take the load; he recommends at least 5 perimeters with a 0.4 mm nozzle, uses only 45° angles so no supports are needed, and adds a 20 mm spacer at the bottom to keep the monitor vertical. His PLA mount held a 6.27 kg monitor with 'no noticeable sag' after six months and was still up two years later, though he suggests PETG for heat. 5) Match the cleat size of your wall, e.g. holders designed for 3/4 in cleats (FVP1992) or 3.5 in by 3/4 in strips (3DDIY); many holders print upside down with no supports. 6) Brackets that carry shelves need strong settings: randybell used 6 walls and 25% infill. 7) Add a cleat lock so holders can't be knocked up and off: cyberbobcity's swiveling lock is printed in PLA at 0.2 mm and 20% infill and fixed with a #6 flat-head screw. 8) A fully printed cleat system can bolt holders on with M4 screws and nuts (amprint); holes on overhangs may not come out perfect but work. 9) PLA softens above about 60 °C (Prusa), so use PETG (about 80 °C) in hot garages, sheds or sunny windows.
- **off_the_shelf_parts**: Keyhole slot router bits (e.g. 3/8 in and 1/2 in cutting diameter, 1/4 in shank; Rockler); keyhole mounting plates / keyhole hangers (steel, fixed with #6 flat-head screws, e.g. 1-3/4 in plate rated to 30 lb); aluminium Z-clips (e.g. 2 in clip sets with 0.20 in holes) and Z-clip rail kits with a stated lift-off clearance; aluminium French-cleat hanging rails; pan-head, round-head and washer-head screws; deck or structural screws; wall anchors rated for the load.
- **rules_of_thumb**: 
  - French cleat bevel: usually 45°, but it can be as low as 30° (The Honest Carpenter; Wikipedia 'French cleat' gives 45°).
  - Make cleats from 3/4 in (19 mm) plywood (Stumpy Nubs; The Honest Carpenter), at least 3 in wide so there is enough flat surface against the wall (Stumpy Nubs). Popular Woodworking rips a 5 in wide piece of 3/4 in plywood in half at 45° to make a matching pair.
  - Always screw the wall cleat into studs (Stumpy Nubs). Use strong screws such as deck screws, not drywall screws, which 'are very brittle and will snap under loads' (The Honest Carpenter). If studs aren't possible, use drywall anchors (Popular Woodworking).
  - Add a non-bevelled spacer strip of the same thickness near the bottom of the object, or it will tip forward (Stumpy Nubs).
  - For heavy loads, double the cleats (The Honest Carpenter).
  - Printed keyhole for a #6 screw: 4 mm slot, 8 mm hole, 8 mm long, about 3 mm head depth (Brainanator, Printables model 146312).
  - A steel keyhole mounting plate with #6 flat-head screws is rated up to 30 lb (13.6 kg) when properly mounted (Craftparts).
  - Leave enough space above a Z-clip-hung panel to lift it off: 1/4 to 3/4 in depending on the clip (Monarch Metal).
  - Two vertical keyholes are the simplest and most secure layout (Carbide 3D community forum).
  - FDM overhangs up to about 45° print without supports, so 45° cleats print cleanly (Hubs).

### When to use it

- **everyday_examples**: 
  - Picture frames and plaques with keyhole slots cut into the back
  - Wi-Fi routers and other gadgets with keyhole slots on the underside for hanging on two screws (stl.parts mentions Asus routers)
  - Kitchen and workshop wall cabinets hung on French cleats
  - Workshop tool walls where tool holders hook onto rows of bevelled cleats, and acoustic panels or signs hung on aluminium Z-clips
- **when_to_use**: Use a keyhole slot for light-to-medium items that should sit flush against a wall with hidden hardware: picture frames, signs, small shelves, routers, printed organisers. Use a French cleat for heavier items and for anything you want to move around or take down often: wall cabinets, shelves, mirrors, tool holders on a cleat wall. The wall side can be screwed into studs wherever they are, and the object is simply lifted on, with no fine manoeuvring and no need to hold its full weight while fixing it (Wikipedia).
- **when_not_to_use**: Avoid gravity-held mounts where the object could be bumped upwards or shaken off (children's rooms, vehicles, boats, earthquake zones, vibrating machines) unless you add a lock screw, cleat lock or bottom fixing (Wikipedia; cyberbobcity). Don't use them where the load pulls the object away from the wall or upwards (a pull-up bar, a hanging hoist); through-bolt instead. Avoid them on ceilings or under shelves. Keyholes in thin or brittle material are poor for heavy items; use a French cleat. For many small items that you reposition constantly, a pegboard or grid system gives more positions. When the item must go back in exactly the same place, use locating pins or a dovetail clamp.
- **environment_limits**: PLA softens above about 60 °C and degrades in UV light, and PETG is suitable to about 80 °C (Prusa), so printed hooks and keyhole lips in hot garages or sunny windows should be PETG. Printed parts under constant load can sag (creep) over time, although one PLA cleat mount carrying a 6.27 kg monitor showed no noticeable sag after six months (Morris Lazootin). Vibration can walk an object up and off a gravity mount; *(unverified parts omitted)*
- **safety_notes**: A heavy object falling is the main hazard: fix the wall side into studs or into anchors rated for the load (Stumpy Nubs; Popular Woodworking), and don't use brittle drywall screws (The Honest Carpenter). Anything hung this way can be knocked upwards and off, so fix the bottom of heavy cabinets to the wall (Wikipedia) or add a cleat lock. Add a bottom spacer so the object can't tip forward (Stumpy Nubs). *(unverified parts omitted)*
- **common_failures**: 1) Holders knocked up and off a cleat wall (cyberbobcity): add a cleat lock or screw. 2) Cabinet tipping forward because there is no bottom spacer (Stumpy Nubs). 3) Solid-wood cleat splitting along the grain (Stumpy Nubs): use plywood. 4) Drywall screws snapping (The Honest Carpenter): use deck or structural screws into studs. 5) Keyhole screw head set too far out (the object rattles) or not far enough (it won't engage): adjust the screw depth (Fine Woodworking). 6) With two keyholes, one screw engages first and the object levers on it and scratches the wall (Carbide 3D forum): space the screws with a template and use vertical slots. 7) A thin printed lip cracking and letting the screw head pull through (layer.works uses a 1 mm lip; thicken it for heavier items). 8) Chatter and poor slots when routing keyholes: pre-clear with a smaller end mill and cut slowly (Carbide 3D forum).
- **related**: 
  - Modular grid mounting systems (pegboard, Gridfinity-style grids): many hang-on positions on a grid instead of one rail or screw
  - Quick-release plate (camera plate, dovetail clamp): the same bevelled hook shape, but clamped tight instead of held by gravity
  - Sliding dovetail (woodworking): a permanent or knock-down joint with the same wedge shape
  - Bayonet mount (push-and-twist lock): a keyhole slot is like a straight-line bayonet; a bayonet locks by twisting instead of dropping
  - Aluminium-extrusion connectors (T-slot nuts and brackets): clamp anywhere on a rail, with tools
  - Double-sided foam tape and stretch-release adhesive strips: glue-on hanging with no holes, but weaker and not easily repositioned; can be combined with cleats (Carbide 3D forum)
  - Magnet joint (embedded magnets, magnetic catch): tool-free for light items on steel surfaces
  - Basic latches (spring latch, slide bolt, hook and eye): hooks and eyes are the simplest hang-on joint
  - DIN-rail clip (top-hat rail snap mount): hooks over a standard rail and snaps on, so it can't be lifted off by accident

### Pictures, videos and models

- **links**: 
  - [French cleat (Wikimedia Commons, by Tenbergen)](https://commons.wikimedia.org/wiki/File:French_cleat.jpg): Photo of a French cleat on a wall (left) and the matching cleat on a shelf to be hung (right) *(licence: CC BY-SA 3.0 or GFDL 1.2+ (dual licensed))*
  - [French cleat (Wikipedia)](https://en.wikipedia.org/wiki/French_cleat): Short explanation with photos of a cleat and of shelves hung on cleats *(licence: text CC BY-SA 4.0)*
  - [How to Make French Cleats | Tricks of the Trade (Popular Woodworking, YouTube)](https://www.youtube.com/watch?v=xFvced0deZ8): Making a pair of cleats with a 45° rip and hanging a cabinet on them *(licence: link only (standard YouTube licence))*
  - [Cutting Keyhole Slots for Hanging Pictures and Plaques (WoodworkersJournal, YouTube)](https://www.youtube.com/watch?v=t5TXVzlAuzw): Routing keyhole slots with a keyhole bit *(licence: link only (standard YouTube licence))*
  - [Using a Keyhole Router Bit (Fine Woodworking)](https://www.finewoodworking.com/2015/08/18/using-a-keyhole-router-bit): Photos of drilling a starter hole and routing a keyhole slot in the back of a frame with a trim router and edge guide *(licence: link only)*
- **make_it_yourself**: 
  - [Keyhole Slot for Wall Hanging (Brainanator, Printables)](https://www.printables.com/model/146312-keyhole-slot-for-wall-hanging): A keyhole shape to add as a negative volume in the slicer (4 mm slot, 8 mm hole, for #6 screws; scale up for #8) *(licence: CC BY-NC-SA)*
  - [Keyhole Hanger - Negative Volume (layer.works, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/314932-keyhole-hanger-negative-volume): OpenSCAD-made keyhole negative (8.8 mm hole, 4.4 mm slot, 1 mm lip) to subtract from any model in PrusaSlicer or OpenSCAD *(licence: CC BY-NC)*
  - [Keyhole Hanger Modifier (TheWebMachine, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/197340-keyhole-hanger-modifier): An 8x16x2 mm keyhole modifier for the PrusaSlicer gallery, printed opening-face-down without supports *(licence: Creative Commons Public Domain (as labelled on Printables))*
  - [VESA 100x100 Low Profile French Cleat Wall Mount (Morris Lazootin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/447758-vesa-100x100-low-profile-french-cleat-wall-mount): A printed 20 mm, 45° French cleat and wall rail for a monitor, with print-orientation advice and a bottom spacer *(licence: CC BY-NC)*
  - [french cleat system (massively extensible) (amprint, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/51352-french-cleat-system-massively-extensible): A fully printable cleat, hooks and wedges that bolt to your own holders with M4 screws and nuts; DXF of mounting distances included *(licence: CC BY-NC-SA)*
  - [Swiveling French Cleat Lock (cyberbobcity, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/161421-swiveling-french-cleat-lock): A small swivelling catch, screwed to a holder, that stops it being knocked up and off a cleat wall *(licence: CC BY-NC)* *(unverified parts omitted)*
- **diagram_idea**: Two side-view cross-sections: left, a keyhole slot shown from the back and in section, with a screw head passing through the round end and then dropping behind the narrow slot (arrow: gravity); right, a French cleat with the wall strip's bevel facing up and the object's strip hooked over it, arrows showing the weight wedging it down and in, plus the bottom spacer strip.
- **sources**: 
  - https://en.wikipedia.org/wiki/French_cleat
  - https://en.wikipedia.org/w/index.php?title=French_cleat&action=raw
  - https://commons.wikimedia.org/wiki/File:French_cleat.jpg
  - https://www.popularwoodworking.com/techniques/french-cleat/
  - https://www.stumpynubs.com/shop-vlog/french-cleats
  - https://www.thehonestcarpenter.com/blog/french-cleats-explained
  - https://www.monarchmetal.com/monarch-z-clips-and-hanging-systems/
  - https://www.rockler.com/2-z-clips
  - https://www.rockler.com/hanging-slot-router-bits-router-bits
  - https://www.craftparts.com/products/1-3-4-keyhole-mounting-plate
  - https://www.finewoodworking.com/2015/08/18/using-a-keyhole-router-bit
  - https://toolstoday.com/learn/using-a-keyhole-router-bit
  - https://benchnotes.com/Keyhole%20Slot%20Guide/Keyhole_Slot_Guide.html
  - https://community.carbide3d.com/t/hanging-with-key-hole-slots/36734
  - https://sawmillcreek.org/threads/keyhole-slots.268118/
  - https://stl.parts/shape/keyhole-wall-mount/
  - https://www.woodworkersjournal.com/video-cutting-keyhole-slots/
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://api.printables.com/graphql/
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=xFvced0deZ8&format=json
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=t5TXVzlAuzw&format=json

### Other info

- **Fields with unverified parts:** environment_limits, make_it_yourself, safety_notes

## 43 Modular grid mounting systems (pegboard, Gridfinity-style grids)

*quick-release & tool-free.* Boards or baseplates with a regular grid of holes or sockets that hooks, bins and holders snap, twist, peg or magnet into anywhere on the grid

*Also covers:* Types, not products: cover the common grid ideas (pegboard hooks, locking pegboard hooks, baseplate-and-bin grids with magnets, snap-and-thread boards)

### What it is

- **plain_name**: A board full of evenly spaced holes or sockets (or a tray with a grid of pockets) where hooks, holders and bins hang, click, twist, screw or stick by magnet into any spot, so you can rearrange them by hand without tools
- **term**: Modular grid mounting system (grid-pattern pegboard or baseplate storage system)
- **aliases**: 
  - pegboard / peg board / perforated hardboard ('Peg-Board' began as a Masonite trademark and became a generic name; Wikipedia)
  - pegboard hooks / peg hooks / L-hooks / J-hooks / double-prong hooks
  - locking pegboard hooks, peg locks, pegboard hook locks (plastic clips that stop hooks lifting out)
  - metal pegboard / slotted pegboard / tool board (e.g. Wall Control (brand))
  - DuraHook (brand): screw-locked pegboard hooks
  - SKÅDIS (brand): IKEA pegboard with vertical slots on a 40 mm grid
  - baseplate-and-bin system, grid drawer organiser, Clickfinity / CLICKbase (latching Gridfinity baseplates, maker names)
  - Multiboard / MultiBuild (brand): 25 mm printed tiles with snaps and threads; Multiconnect (maker connector)
  - openGrid: open 28 mm printed wall and desk grid with push-in snaps; Underware (cable channels for it)
  - Honeycomb Storage Wall (HSW): printed hexagonal grid with inserts
  - Assortment System (Alexandre Chappel): the earlier bin system that inspired Gridfinity (gridfinity.xyz)
  - tool wall, storage wall, modular wall organiser
  - slatwall / slotwall (grooved-panel version, used in shops)
  - PALS / MOLLE webbing (textile grid version on bags and vests) *(unverified parts omitted)*
- **family**: quick-release & tool-free
- **other_families**: snap & clip fits, clamping, magnetic & friction connections, locating & alignment, print-in-place & 3D-printing joints
- **one_liner**: A board or baseplate with a regular grid of identical holes, slots or sockets, so any hook, holder or bin made to the same spacing can be hung, clicked, twisted, screwed or held by magnet in any position and moved again by hand.
- **complexity**: A few parts: the board or baseplate (hardboard, wood or steel pegboard, a slotted panel, or printed tiles and baseplates), the add-ons that fit it (wire or printed hooks, holders, shelves, bins, snaps, threaded bolts), optional locking parts (peg locks, screws and locking tabs, magnets, printed spring latches), and the wall fixings (screws, anchors, and furring strips or spacers that hold a pegboard off the wall).
- **how_it_works**: Every hole or socket has the same shape and the same spacing (1 inch on classic pegboard, 25 mm on metric pegboard and Multiboard, 28 mm on openGrid, 40 mm on SKÅDIS, 42 mm on Gridfinity), so anything made to that spacing fits anywhere on the grid. On a pegboard, the bent top of a wire hook goes through a hole and catches behind the board, and the weight on the hook levers its lower leg against the board face; this holds by shape and leverage, but a plain hook can lift out when you pull a tool off, so locking versions add a clip across neighbouring holes (peg lock), a screw and tab in a second hole (DuraHook (brand)), or a slot shape that needs a deliberate up-and-down movement (Wall Control (brand) 'double offset'). Baseplate grids such as Gridfinity work lying down: each bin has a stepped, chamfered foot that drops into a matching socket whose walls stop it sliding, with optional 6 x 2 mm magnets or printed spring latches to stop it lifting out. 'Snap-and-thread' printed boards such as Multiboard and openGrid have holes that take push-in snaps (small cantilever snap fits), twist-lock snaps or printed screw threads, plus small holes for ordinary pegboard-style hooks.

### Finder attributes

- **job**: 
  - join and hold: hangs tools and holders on a wall or keeps bins in place in a drawer
  - lock, and release by hand: accessories lift, unclip or twist off and go back anywhere on the grid
  - line parts up exactly: only loosely, in that everything sits on a fixed grid so layouts line up and bins sit neatly side by side
- **motion**: none: an accessory stays fixed once placed; you move it by hand to a new grid position
- **degrees_of_freedom**: 0 once placed: the hook or bin is held in every direction, although plain pegboard hooks and Gridfinity bins without magnets or latches are only held down by gravity and leverage, so they can be lifted straight out
- **special_behaviour**: 
  - quick-release (tool-free): hooks, holders and bins come off and go back by hand, which is the whole point of the system
  - indexing (clicks into set positions): in a loose sense, items can only sit at grid positions, e.g. every 25.4 mm on pegboard or every 42 mm on Gridfinity
  - self-aligning or self-centring: Gridfinity sockets have 45° stepped walls that guide a bin foot into place (Gridfinity Rebuilt base profile; unofficial specification)
  - hand-release only: locking hooks (peg locks, DuraHook, Wall Control slotted hooks) and latching baseplates stay put when you pull a tool off and need a deliberate movement to release (Wall Control; Ugly Duckling House)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): hooks hook through holes, bins sit in shaped sockets, threaded bolts screw into holes
  - spring force (a spring or springy part presses it in place): push-in snaps, peg-lock clips and latching baseplates such as CLICKbase hold with springy printed or moulded parts
  - magnetic: optional 6 x 2 mm magnets in the corners of Gridfinity bin feet and baseplates (unofficial Gridfinity specification)
  - friction or clamping (force-fit): tight-fit lock plugs in SKÅDIS slots and Wall Control's bent stabilising tabs press the hook against the board
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release: hooks, holders and bins come off by hand; the board itself is removable (screwed to the wall, to furring strips or to studs)
- **tools_needed**: none to place or move accessories (a coin turns an openGrid Lock Snap; pliers bend Wall Control stabilising tabs; a screwdriver fits DuraHook screws); a drill, screws and wall anchors, plus furring strips or spacers for pegboard, to mount the board; pressing or gluing magnets into Gridfinity parts
- **seal**: none
- **load**: light to medium. Wall Control suggests 5-10 lb (about 2-4.5 kg) per single-slot hook, 10-15 lb (4.5-7 kg) per double-slot hook, 10-20 lb per shelf, and 100 lb (45 kg) per panel on drywall anchors or 200 lb (90 kg) screwed into studs; Strongest for downward load close to the board (shear); weak against pulling straight out or lifting unless the hooks are locked; long hooks put more leverage on the holes. *(unverified parts omitted)*
- **adjustable**: yes: any accessory can be moved to another grid position by hand, in steps of the grid spacing (1 in, 25 mm, 28 mm, 40 mm or 42 mm); SKÅDIS's tall slots let a hook sit at slightly different heights (Pegboardly); Wall Control's stabilising tabs can be bent to make a hook tighter
- **play_and_precision**: noticeable on plain pegboard, where loose wire hooks wobble and can lift out (Ugly Duckling House); small on Gridfinity, where a 41.5 mm bin sits in a 42 mm socket (0.25 mm gap each side) and drops back into exactly the same place every time (Printables 'Gridfinity Specification'); printed snaps and threads are firm. *(unverified parts omitted)*
- **access_needed**: one side only (blind): accessories go in from the front; pegboard needs a gap of about 1/2 inch or more behind it for hook tips (Hunker; The Whittling Guide), and openGrid boards can be fixed to the wall entirely from the front (opengrid.world)
- **materials**: Boards: tempered hardboard (classic pegboard, baked with linseed oil for water and impact resistance), perforated wood or plywood (can warp or splinter under heavy loads), or steel (metal pegboard) (Wikipedia 'Perforated hardboard'); laser-cut or CNC sheet (Boxes.py suggests 5 mm material for a SKÅDIS-style board); 3D-printed plastic tiles and baseplates (Gridfinity, Multiboard, openGrid, HSW). Printed parts: PLA is fine for bins and plain baseplates, but use PETG, ABS, ASA or nylon for springy latches (CLICKbase notes) and for anything in a hot garage or car. Magnets: 6 x 2 mm neodymium discs (Gridfinity). *(unverified parts omitted)*
- **maker_difficulty**: easy: buy pegboard and hooks, or print a baseplate and bins from free files or a generator; the only fiddly steps are tuning print tolerances for snaps, plugs and threads, and fitting magnets

### Making it

- **processes**: 
  - off-the-shelf part: hardboard, wood or metal pegboard and wire hooks; IKEA SKÅDIS (brand) boards and accessories; slatwall panels
  - 3D print (FDM): Gridfinity baseplates and bins, Multiboard, openGrid and Honeycomb Storage Wall tiles, snaps, hooks and holders
  - laser cut: SKÅDIS-style pegboards and Gridfinity bases from sheet (Boxes.py 'SkadisBoard' and 'GridfinityBase' generators)
  - sheet metal: steel pegboard panels with formed mounting flanges (Wall Control) *(unverified parts omitted)*
- **print_in_place**: no: boards, hooks, snaps and bins are printed separately and fitted together; a few parts, such as openGrid's Lock Snap, print in place with a working rotating lock (opengrid.world), and Gridfinity magnets are pressed or glued in after printing
- **making_tips_3d_printing**: 1) Stick exactly to a published grid and profile (Gridfinity 42 x 42 x 7 mm; openGrid 28 mm; Multiboard 25 mm) and start from an existing generator or library such as Gridfinity Rebuilt in OpenSCAD or Boxes.py rather than redrawing the profile, so your parts fit everyone else's. 2) Print hooks lying on their side so the layer lines run along the hook and not across its bend: upright PLA test pieces reached only 31 MPa against 63 MPa printed flat (CNC Kitchen), and the SKÅDIS lock-plug designer prints hooks on their side. 3) Big flat baseplates curl off the bed: Zack Freedman's Gridfinity tips say no brims or supports are needed, any filament with a 0.6 mm or smaller nozzle works, but wide plates can curl, so maximise bed adhesion (quoted in the 'Gridfinity Magnet Light Baseplate' remix). 4) Magnet pockets: Gridfinity uses 6 x 2 mm magnets; 5) Don't print springy latches or snaps in PLA: it creeps under constant load and the latch loses grip (CLICKbase notes); use PETG, ABS, ASA or nylon. 6) Tight-fit plugs and snaps are sensitive to layer height and printer tuning: the SKÅDIS lock plugs come in 'loose' and 'tight' versions and fit tighter at 0.20 mm than at 0.15 mm layers, so print a few test pieces first. 7) The squashed first layer (elephant foot) makes bin feet and tile edges slightly wide; PrusaSlicer's elephant-foot compensation of about 0.2 mm usually fixes it (Prusa). 8) Board print settings from the designers: openGrid boards at 0.2 mm layers and 15-20% infill (opengrid.world); Honeycomb Storage Wall at 0.25-0.3 mm layers with 3 or more perimeters (RostaP, Printables). 9) PLA softens at about 60 °C (CNC Kitchen), so print hooks for a hot garage, shed or car in PETG or ASA. 10) Printed systems use a lot of filament: lightweight 'lite' or skeletonised baseplates and boards save material (e.g. 'Gridfinity Magnet Light Baseplate' uses about 60% less filament than the weighted original). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'pegboard' or 'perforated hardboard' (1/8 in board with 3/16 in holes, or 1/4 in board with 1/4 in holes, both on 1 in centres; metric 25 mm), 'metal pegboard' or 'slotted pegboard', 'pegboard hooks' (L-hooks, J-hooks, double-prong hooks), 'pegboard hook locks' or 'peg locks', 'locking pegboard hooks' (e.g. DuraHook (brand)), 'pegboard spacers' or '1 x 2 furring strips', IKEA SKÅDIS (brand) boards and hooks, 'slatwall panel' and 'slatwall hooks', '6 x 2 mm neodymium disc magnets' (Gridfinity), 'M3 screws' (Gridfinity baseplate screw holes), 'M3 / M4 / M5 nuts' (Honeycomb Storage Wall inserts).
- **rules_of_thumb**: 
  - Pegboard holes are on 1 in (25.4 mm) centres: 1/8 in (3.2 mm) board has 3/16 in (4.8 mm) holes and 1/4 in (6.4 mm) board has 1/4 in holes; metric board uses 25 mm spacing in 4 or 6 mm board (Wikipedia 'Perforated hardboard').
  - Leave a gap of 1/2 in (about 13 mm) or more behind a pegboard so hooks can go in, using 1 x 2 furring strips on the studs or spacers (Hunker 'How To Hang Pegboard'; The Whittling Guide). Wall Control's steel panels have a built-in 3/4 in mounting flange and mounting holes at 16 in stud spacing (Wall Control how-to).
  - Wall Control load guidance: 5-10 lb per single-slot hook, 10-15 lb per double-slot hook, 10-20 lb per shelf, 100 lb per panel on drywall anchors, 200 lb per panel screwed into studs; 1/8 in peg hooks 'do not work well' in its combo panels (Wall Control how-to/FAQ).
  - Gridfinity: 42 x 42 mm grid and 7 mm height units; bin feet are 41.5 mm square (0.25 mm gap each side); the socket wall is about 4.65 mm tall with a stepped 45° profile (Printables 'Gridfinity Specification'; Gridfinity Rebuilt constants: 0.8 mm at 45°, 1.8 mm vertical, 2.15 mm at 45°).
  - Gridfinity magnets are 6 mm across and 2 mm thick, ideally in all four corners of every unit so bins fit in any rotation; M3 screws can be used instead (unofficial Gridfinity specification; Zack Freedman's tips).
  - SKÅDIS: vertical slots about 5 mm wide and 15 mm tall on a 40 mm grid, with every other column dropped 20 mm, in a board about 5 mm thick (Pegboardly, community-measured); Boxes.py: 'Inner distance between slots are 35 + n * 40 mm', 'Best cut from 5mm material to match the original'.
  - Multiboard: 25 mm grid; large holes take Snaps and Large Threads, small holes take Small Threads, 'Peg Click' hooks and 'non-3D-printed pegboard accessories' (MultiBuild Knowledge Hub).
  - openGrid: 28 mm grid; full board 6.8 mm thick, lite board 4 mm with 3.4 mm lite snaps; board-to-board pegs are only for alignment, not strength (opengrid.world).
  - Grids don't mix: SKÅDIS accessories don't fit 1/4 in pegboard (Just Hanging), and Multiboard's 25 mm grid doesn't match openGrid's 28 mm (opengrid.world); openGrid's 28 mm is two-thirds of Gridfinity's 42 mm, which is why it calls itself Gridfinity-compatible.
  - PALS webbing (the textile grid on MOLLE bags): 1 in (25 mm) webbing rows 1 in apart, stitched every 1.5 in (38 mm) (Wikipedia 'MOLLE').

### When to use it

- **everyday_examples**: 
  - A garage or workshop pegboard with wire hooks holding hand tools (Wikipedia 'Perforated hardboard')
  - Shop displays with long peg hooks or slatwall holding packaged goods (Wikipedia 'Perforated hardboard' and 'Slatwall')
  - An IKEA SKÅDIS (brand) pegboard above a desk with clip-in hooks, cups and shelves
  - A 3D-printed Gridfinity drawer insert whose bins lift out and swap around (Wikimedia Commons photo 'Gridfinity drawer and bin')
- **when_to_use**: Use a grid system when you want to rearrange storage often without tools: tool walls, desk organisers, workbench drawers, electronics parts, craft and hobby supplies. Choose plain pegboard for a cheap, large wall of hanging tools; a locking-hook or slotted metal system if hooks keep falling out when you grab a tool; a baseplate-and-bin grid such as Gridfinity for drawers and benches where small parts live in bins you lift out and carry to the job; and a snap-and-thread printed board such as Multiboard or openGrid if you have a 3D printer and want to design your own holders that lock firmly. Following an existing open grid gives you thousands of free compatible designs.
- **when_not_to_use**: Avoid it for heavy or valuable items that must never fall (use shelf brackets, a French cleat or screwed-on mounts), for places with vibration or knocks such as vans and machines (use locked hooks, screws or a proper latch), and for oddly shaped items where a fixed grid wastes space: a review quoted by Wikipedia found Gridfinity's baseplate 'unnecessarily restrictive and material-consuming' and its fixed sizes wasteful for odd-sized objects, so use a custom-fitted insert or plain shelf instead. Large printed walls take a lot of filament and print time. Don't mix grids: SKÅDIS accessories don't fit 1/4 in pegboard, and Multiboard and openGrid parts are not interchangeable without adapters.
- **environment_limits**: Printed PLA softens from about 60 °C (PETG about 80 °C, ASA about 110 °C; CNC Kitchen), so PLA hooks and bins in a hot garage, shed or car can sag; PLA springs and latches creep under constant load and lose grip (CLICKbase notes; thrinter creep test). Standard N35 neodymium magnets are rated to about 80 °C and can corrode and crumble if their plating is damaged (Wikipedia 'Neodymium magnet'). Bumps and vibration knock unlocked hooks out (Wall Control; Wallwerx). *(unverified parts omitted)*
- **safety_notes**: Small neodymium magnets used in bin grids are dangerous if a child swallows more than one: they attract each other through the gut wall and can cause perforation, blockage or death (US CPSC, 2022). Hooks that lift out with a tool can drop sharp or heavy tools, so lock hooks that hold chisels, saws or heavy items. Overloaded boards can pull their fixings out of plasterboard: screw heavy boards into studs (Wall Control), and toggle bolts may pull the drywall out (The Whittling Guide). *(unverified parts omitted)*
- **common_failures**: Hooks lift out or fall when a tool is pulled off, or wobble because they are too thin for the holes (Ugly Duckling House; Wall Control): fix with peg locks, screw-locked or double-prong hooks, zip ties or wire, or a slotted locking system, and match hooks to 1/8 in or 1/4 in board. Pegboard fixed flat against the wall, so hooks can't be inserted (it needs a 1/2 in gap). Board pulled off the wall by overloaded drywall fixings. Printed hooks snap along layer lines because they were printed standing up. Large printed baseplates curl or warp during printing. Printed latches and snaps loosen over time through creep (PLA). Parts from different grids, or prints that are slightly oversize, don't fit; tight plugs and snaps vary with layer height and printer tuning.
- **related**: 
  - Hang-on mounts (keyhole slot, French cleat): hang things anywhere along a bevelled rail instead of at fixed grid holes; stronger for heavy items
  - Aluminium-extrusion connectors (T-slot nuts and brackets): clamp anywhere along a slot instead of into a grid of holes
  - Slatwall: horizontal grooves instead of holes, so hooks slide sideways to any position (Wikipedia 'Slatwall')
  - DIN-rail clip (top-hat rail snap mount): modules click onto one standard rail at any point along it
  - Cantilever snap fit: the springy hook that push-in snaps on printed boards use
  - Magnet joint (embedded magnets, magnetic catch): the magnets that hold Gridfinity bins down
  - Printed screw thread: the threads used by Multiboard-style bolts
  - Bayonet mount (push-and-twist lock): the push-then-twist idea behind twist-lock snaps
  - PALS / MOLLE webbing (cord, strap, webbing & textile hardware): a fabric grid that pouches weave into (Wikipedia 'MOLLE')

### Pictures, videos and models

- **links**: 
  - [Pegboard.jpg (Wikimedia Commons, Dave Pape)](https://commons.wikimedia.org/wiki/File:Pegboard.jpg): Close-up of pegboard (perforated hardboard) with 1/4 in holes on 1 in spacing *(licence: public domain (released by the author))*
  - [Gridfinity drawer and bin (Wikimedia Commons, Sandstein, 2026)](https://commons.wikimedia.org/wiki/File:Gridfinity_drawer_and_bin.jpg): A 3D-printed drawer with a 4 x 3 Gridfinity baseplate and a 1 x 3 Gridfinity bin holding toothpicks *(licence: CC0 1.0 (public domain dedication))*
  - [Gridfinity: Your Ultimate Modular Workshop is FREE! (YouTube, Zack Freedman)](https://www.youtube.com/watch?v=ra_9zU-mnl8): The original Gridfinity video: baseplates, bins dropping into the grid, magnets and stacking *(licence: link only (standard YouTube licence))*
  - [Triton DuraHook: Pegboard Hooks That Screw Into Pegboard (ToolGuyd, 2015)](https://toolguyd.com/triton-durahook-pegboard-hooks/): Photos of locking pegboard hooks that use one hole for a locking tab and the next for a screw *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Gridfinity Rebuilt in OpenSCAD (documentation; code by kennetek)](https://kennetek.github.io/gridfinity-rebuilt-openscad/): A parametric OpenSCAD library for Gridfinity bins and baseplates of any size, with options for magnet and screw holes, supportless magnet holes, lite and vase-mode bins *(licence: MIT (per the project README))*
  - [Gridfinity Rebuilt in OpenSCAD (kennetek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/274917-gridfinity-rebuilt-in-openscad): Printables page for the same parametric Gridfinity generator, with ready-made files *(licence: CC BY-SA (Printables listing))*
  - [openGrid - Wall/Desk mounting framework and ecosystem (David D, Printables)](https://www.printables.com/model/1214361-opengrid-walldesk-mounting-framework-and-ecosystem): The printable 28 mm openGrid boards, snaps and modelling files; read through the Printables public API *(licence: CC BY (Printables listing))*
  - [Honeycomb storage wall (RostaP, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/152592-honeycomb-storage-wall): Hexagonal printed wall tiles with inserts, hooks, boxes and holders; some hooks screw into inserts with M3 or M4 screws *(licence: CC BY-NC (Printables listing))*
  - [IKEA Skadis pegboard - Lock plugs and secure hooks (JayKeyStk, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/52120-ikea-skadis-pegboard-lock-plugs-and-secure-hooks): Printed plugs that lock the original metal SKÅDIS hooks in place, in loose-fit and tight-fit versions, plus printed secure hooks and a removal tool *(licence: CC BY-NC-SA (Printables listing))*
  - [CLICKbase: a no-magnet, latching Gridfinity baseplate (John Hall, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/982173-clickbase-a-no-magnet-latching-gridfinity-baseplat): Gridfinity baseplates with printed spring latches instead of magnets, joined with small clips; the designer advises PETG, ABS, ASA or nylon rather than PLA because PLA springs creep *(licence: CC BY-NC-SA (Printables listing))* *(unverified parts omitted)*
- **diagram_idea**: Three side-by-side cross-sections on a labelled grid pitch: a wire pegboard hook through a hole with a peg-lock clip across the neighbouring holes and an arrow showing how an unlocked hook lifts out; a Gridfinity bin foot dropping into its stepped 45° socket with a small magnet in the corner; and a printed snap pushing into a Multiboard or openGrid hole with its springy fingers flexing.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pegboard
  - https://commons.wikimedia.org/wiki/File:Pegboard.jpg
  - https://www.hunker.com/13715151/how-to-hang-pegboard/
  - https://thewhittlingguide.com/guides/pegboard-furring-strips/
  - https://wallcontrol.com/blogs/wall-storage-organization-blog/the-ultimate-beginners-guide-to-hanging-a-pegboard
  - https://www.wallcontrol.com/pegboard-how-to
  - https://www.wallcontrol.com/pegboard-hooks-accessories/
  - https://toolguyd.com/triton-durahook-pegboard-hooks/
  - https://www.uglyducklinghouse.com/tip-how-to-secure-loose-pegboard-hooks/
  - https://www.wallwerx.com/blogs/blog-1/why-your-pegboard-hooks-keep-falling-out-and-how-to-fix-it
  - https://pegboardly.com/skadis/skadis-sizes-and-dimensions
  - https://www.justhangingpegboards.com/blogs/blog/ikea-skadis-vs-1-4-pegboard-which-should-you-choose
  - https://boxes.hackerspace-bamberg.de/?language=en
  - https://boxes.hackerspace-bamberg.de/SkadisBoard?language=en
  - https://boxes.hackerspace-bamberg.de/GridfinityBase?language=en
  - https://gridfinity.xyz/
  - https://gridfinity.xyz/specification/
  - https://raw.githubusercontent.com/gridfinity-unofficial/specification/main/README.md
  - https://en.wikipedia.org/wiki/Gridfinity
  - https://commons.wikimedia.org/wiki/File:Gridfinity_drawer_and_bin.jpg
  - https://hackaday.com/2022/04/18/gridfinity-3d-printed-super-quick-tool-storage-and-retrieval/
  - https://www.youtube.com/watch?v=ra_9zU-mnl8
  - https://raw.githubusercontent.com/kennetek/gridfinity-rebuilt-openscad/main/README.md
  - https://raw.githubusercontent.com/kennetek/gridfinity-rebuilt-openscad/main/src/core/standard.scad
  - https://kennetek.github.io/gridfinity-rebuilt-openscad/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/417152-gridfinity-specification
  - https://www.printables.com/model/1214361-opengrid-walldesk-mounting-framework-and-ecosystem
  - https://docs.multibuild.io/beginner-section/core-parts-documentation
  - http://multiboard.stonekeep.com/glossary.html
  - https://multibuild.io/
  - https://www.opengrid.world/
  - https://www.opengrid.world/guides/snaps/
  - https://www.opengrid.world/guides/board/
  - https://en.wikipedia.org/wiki/Slatwall
  - https://en.wikipedia.org/wiki/MOLLE
  - https://www.cpsc.gov/Newsroom/News-Releases/2022/CPSC-Approves-New-Federal-Safety-Standard-for-Magnets-to-Prevent-Deaths-and-Serious-Injuries-from-High-Powered-Magnet-Ingestion
  - https://en.wikipedia.org/wiki/Neodymium_magnet
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.cnckitchen.com/blog/stop-printing-flat-the-45-secret-for-stronger-parts
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://help.prusa3d.com/article/elephant-foot-compensation_114487
  - https://raw.githubusercontent.com/florianfesti/boxes/master/LICENSE.txt

### Other info

- **Fields with unverified parts:** aliases, environment_limits, links, load, make_it_yourself, making_tips_3d_printing, materials, play_and_precision, processes, reuse_cycles, safety_notes

## 166 Quick couplers for tubes and hoses (push-to-connect, sleeve lock)

*quick-release & tool-free.* Fittings that grip a tube when it is pushed in and release when a collar is pressed or a sleeve is pulled back

*Not researched yet.*

## 167 DIN-rail clip (top-hat rail snap mount)

*quick-release & tool-free.* A spring clip that hooks over one edge of a standard metal rail and snaps onto the other, so modules click on and off

*Not researched yet.*

## 168 Indexable clamping lever (ratchet handle)

*quick-release & tool-free.* A clamping handle on a toothed spline that you lift to swing round without turning the screw, then let spring back to tighten again, for tight spaces

*Not researched yet.*

## 169 Spring bar (spring-loaded telescoping pin)

*quick-release & tool-free.* A tube with spring-loaded ends that pop into holes to hold a strap between two lugs, as on watch straps; quick-release versions have a small lever

*Not researched yet.*

## 170 Band flange clamp (V-band clamp, tri-clamp)

*quick-release & tool-free.* A hinged band with a V-shaped groove that wedges two flanged ends together as it is tightened, for quick-disconnect pipes, ducts and brewing kit

*Not researched yet.*

## 171 Temporary sheet fastener (Cleco-type spring pin)

*quick-release & tool-free.* A spring-loaded pin fitted from one side with pliers that clamps sheets in line through a hole while they are drilled or riveted, then comes out again

*Not researched yet.*

## 261 Tool-free fasteners (thumbscrew, wing nut, hitch pin and R-clip)

*quick-release & tool-free.* Ordinary fasteners shaped to be done up by hand, as a simple quick-release baseline

*Not researched yet.*

