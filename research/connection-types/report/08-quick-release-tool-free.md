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

*Also covers:* Also covers the quarter-turn bike-computer mount, and threaded lens mounts (S-mount, C-mount, CS-mount) as the screw-in alternative.

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
  - quarter-turn mount / quarter-turn adapter (bike-computer and GPS handlebar mounts, e.g. Garmin (brand)-type)
- **family**: quick-release & tool-free
- **other_families**: locks, latches & catches, locating & alignment, seals & pass-throughs
- **one_liner**: Two round parts that join end to end: push the pins or tabs on one part into notches in the other, twist a short way (typically a quarter turn or less) so they slide under ledges, and a spring or springy bump holds them locked until you push and twist back.
- **complexity**: A few parts: a male part with 1-4 radial pins, lugs or flat tabs (bayonet lugs); a female part with matching notches and L-shaped or J-shaped slots or ledges; and usually something springy that pushes the parts apart so the pins sit in a small locking notch (a coil spring in a lamp holder, a leaf spring or spring-loaded locking pin in a lens mount, a gasket, O-ring or printed flexing bump in lids).
- **how_it_works**: Each pin or tab lines up with an entry notch and slides straight in until it reaches the bottom of the slot. Twisting then carries the pin sideways along the short arm of the L, under a ledge, so the parts can no longer be pulled apart. A spring (or a squashed gasket) pushes the parts apart slightly, which drops the pin into a small hook at the end of the slot (the serif) or against a detent, so it cannot twist back by itself. To separate, you push the parts together against the spring, twist back the other way, and pull apart. A flat version is the quarter-turn mount on bike computers (Garmin (brand)-type): you 'align the tabs on the back' of the device with the notches in the handlebar mount, then 'press down slightly and turn' it clockwise 'until it locks into place'; Garmin calls the mount's part the 'quarter-turn adapter', and a lever adapter can replace it, so the device drops in and a lever snaps closed to lock it (Garmin Out-Front Mount instructions).

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
  - Screw-in lens mounts are the threaded alternative on small cameras. The S-mount (M12 lens) uses an M12 x 0.5 thread and has no flange, so there is no fixed lens-to-sensor distance and the lens must be screwed in or out to focus (Wikipedia, https://en.wikipedia.org/wiki/S-mount_(CCTV_lens)). The C-mount uses a 1-32 UN 2A thread (1 in across, 32 threads per inch) with a flange focal distance of 17.526 mm; the CS-mount has the same thread but 12.526 mm, so a 5 mm spacer ring lets a C-mount lens work on a CS-mount camera (Wikipedia, https://en.wikipedia.org/wiki/C_mount).

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
  - Threaded lens mounts (S-mount, C-mount, CS-mount): screw-in lens mounts on webcams, CCTV and machine-vision cameras; slower to change than a bayonet, but small, cheap and focused simply by screwing the lens in or out (Wikipedia)

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
  - https://www.adorama.com/col/productManuals/GP0101334000.pdf
  - https://en.wikipedia.org/wiki/S-mount_(CCTV_lens)
  - https://en.wikipedia.org/wiki/C_mount

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

*Also covers:* Also covers the twistlock (a shaped head dropped through a slot and turned to lock, as on shipping-container corners and drop-in T-nuts)

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
- **how_it_works**: The plate's two long edges are bevelled like a dovetail (45° on Arca-type plates, Wikipedia 'Tripod head'). The clamp has a fixed jaw and a moving jaw with matching sloped faces. Turning the knob (a screw) or flipping the lever pushes the moving jaw in; the sloped faces act like wedges, squeezing the plate sideways and pulling it down onto the clamp's flat base, so it can't lift, slide or wobble. Loosen the jaw and the plate slides out along its length or lifts out; safety stops at the plate's ends catch it if the clamp is only slightly loose ('the plate moves freely within the channel and comes to a stop at the safety pins', Arca-Swiss USA). Drop-in systems such as the RC2 plate have two bevelled edges and are held by a lever that is 'secured once the QPR is in place, by a secondary smaller lever' (Talk Photography forum). Picatinny and Weaver rails reverse the parts: a long bevelled rail with cross slots sits on the gun or rig, the accessory's clamp grips it, and the clamp's locking screw passes through a slot so the accessory can't slide (Wikipedia 'Weaver rail mount'). A cold shoe is the simplest version: a flat foot slides into a channel with inward lips and is held by leaf-spring friction, sometimes plus a clamping screw or sliding clamp (Wikipedia 'Hot shoe'). Wikipedia describes the shoe as 'an angled metal bracket', shaped like an upside-down, squared-off U, and most have leaf springs under its two 'teeth'; a hot shoe is the same bracket with a metal contact in the middle that fires a flash, and its size is set by ISO 518:2006.

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
  - Tripod and stand screw mount: the single 1/4-20 or 3/8-16 camera screw that fixes a plate to the camera, and the plain alternative when quick swapping isn't needed
  - Clamp-on accessory mount for bars, poles and edges: for fixing a plate, clamp or shoe to a bar, pole, desk edge or camera-rig rod (15 mm rod clamps) rather than to a threaded hole

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

*Also covers:* Also covers VESA screen mounts (the standard square of screw holes on screens and monitor arms).

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
  - VESA mount / VESA hole pattern (Flat Display Mounting Interface, FDMI): the standard square of four screw holes on the back of monitors and TVs, which a wall bracket or a French-cleat plate screws to
- **family**: quick-release & tool-free
- **other_families**: interlocking joints & joinery, sliding, telescoping & linear motion
- **one_liner**: Two gravity-held wall mounts that let an object be lifted on and off without tools: a keyhole slot in the object drops over a screw head in the wall, and a French cleat is a pair of bevelled strips, one on the wall and one on the object, that hook together under the object's weight.
- **complexity**: A few parts. Keyhole slot: a slot with a round entry hole and a narrower undercut channel, cut into the back of the object or provided by a metal keyhole plate, plus a round- or pan-headed screw (or nail) left sticking out of the wall. French cleat: two strips with matching bevelled edges (one screwed to the wall, one to the object), usually plus a plain spacer strip at the bottom of the object; the aluminium Z-clip is the same idea as two small extrusions.
- **how_it_works**: Keyhole slot: the round end of the slot is big enough for the screw head to pass through, and the narrow part only lets the screw's shank through; behind the narrow part there is a hollow pocket for the head. You push the object onto the screw head at the round end, then let it drop, so the head slides behind the narrow part and the object's weight keeps it there. To remove it, lift it up and pull it off. French cleat: the wall strip's bevel faces up and towards the wall, and the object's strip has the opposite bevel facing down. When the object is lowered on, the two slopes hook together, and the weight wedges the object down and in against the wall, so it can't move down or pull outwards ('The bevel stops that from happening', The Honest Carpenter). A plain strip of the same thickness at the bottom keeps the object upright (Stumpy Nubs). To remove it, lift it up and off. Aluminium Z-clips 'wedge together to lock panels in place. Simply lift and remove' (Rockler). Screens use a standard screw pattern instead of a keyhole: the VESA mount (Flat Display Mounting Interface) is four threaded holes 'arranged in a square' on the back of the screen, and a stand, wall bracket or printed French-cleat plate is screwed to them (Wikipedia 'VESA mount').

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
  - VESA screen mounts: four screw holes in a square; the original pattern is 100 x 100 mm and 75 x 75 mm was added for smaller displays; the smaller patterns use 'standard M4 machine screws', while 200 x 200 mm and larger use M6 or M8; if the screen maker supplies screws, use those rather than the bracket's. The standard also sets a maximum screen weight and screw length for each pattern, so check its tables (Wikipedia 'VESA mount').

### When to use it

- **everyday_examples**: 
  - Picture frames and plaques with keyhole slots cut into the back
  - Wi-Fi routers and other gadgets with keyhole slots on the underside for hanging on two screws (stl.parts mentions Asus routers)
  - Kitchen and workshop wall cabinets hung on French cleats
  - Workshop tool walls where tool holders hook onto rows of bevelled cleats, and acoustic panels or signs hung on aluminium Z-clips
- **when_to_use**: Use a keyhole slot for light-to-medium items that should sit flush against a wall with hidden hardware: picture frames, signs, small shelves, routers, printed organisers. Use a French cleat for heavier items and for anything you want to move around or take down often: wall cabinets, shelves, mirrors, tool holders on a cleat wall. The wall side can be screwed into studs wherever they are, and the object is simply lifted on, with no fine manoeuvring and no need to hold its full weight while fixing it (Wikipedia).
- **when_not_to_use**: Avoid gravity-held mounts where the object could be bumped upwards or shaken off (children's rooms, vehicles, boats, earthquake zones, vibrating machines) unless you add a lock screw, cleat lock or bottom fixing (Wikipedia; cyberbobcity). Don't use them where the load pulls the object away from the wall or upwards (a pull-up bar, a hanging hoist); through-bolt instead. Avoid them on ceilings or under shelves. Keyholes in thin or brittle material are poor for heavy items; use a French cleat. For many small items that you reposition constantly, a pegboard or grid system gives more positions. When the item must go back in exactly the same place, use locating pins or a dovetail clamp.
- **environment_limits**: PLA softens above about 60 °C and degrades in UV light, and PETG is suitable to about 80 °C (Prusa), so printed hooks and keyhole lips in hot garages or sunny windows should be PETG. Printed parts under constant load can sag (creep) over time, although one PLA cleat mount carrying a 6.27 kg monitor showed no noticeable sag after six months (Morris Lazootin). Vibration can walk an object up and off a gravity mount; *(unverified parts omitted)*
- **safety_notes**: A heavy object falling is the main hazard: fix the wall side into studs or into anchors rated for the load (Stumpy Nubs; Popular Woodworking), and don't use brittle drywall screws (The Honest Carpenter). Anything hung this way can be knocked upwards and off, so fix the bottom of heavy cabinets to the wall (Wikipedia) or add a cleat lock. Add a bottom spacer so the object can't tip forward (Stumpy Nubs). For screens, use the screws the screen maker supplies and a VESA pattern rated for the screen's weight; a heavier screen needs the next larger pattern (Wikipedia 'VESA mount'). *(unverified parts omitted)*
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
  - Tripod and stand screw mount: the other common standard screw interface (a 1/4-20 or 3/8-16 socket), for screwing a device onto a stand or arm rather than hanging it on a wall

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
  - https://en.wikipedia.org/wiki/VESA_mount

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

*Also covers:* Also covers cam-and-groove (camlock) couplings, plastic thumb-latch lab couplings, and push-fit plumbing reuse and square-cut rules.

### What it is

- **plain_name**: A fitting you just push a tube into: hidden teeth grab the tube and a rubber ring seals it, and it only lets go when you press a collar in (or, on hose couplers, pull a sleeve back)
- **term**: Push-to-connect fitting (push-in or push-fit tube fitting) and quick-disconnect coupling (ball-latching, sleeve-type quick coupler)
- **aliases**: 
  - push-in fitting, push-fit fitting, push-to-connect (PTC) fitting, instant fitting (Bearing Boys)
  - quick connect fitting, push fitting, quick connect coupling (Wikipedia, Quick connect fitting)
  - one-touch fitting (SMC's (brand) catalogue name); push-quick fitting (Clippard's (brand) name)
  - John Guest (brand) or Speedfit (brand) fitting, SharkBite (brand) fitting (plumbing and water filters; Printables 198167 names SharkBite)
  - 3D printing: pneumatic fitting, Bowden coupler, PC4-M6 / PC4-M10 fitting, 'Festo fitting' (Festo (brand); Prusa users' name)
  - quick disconnect (QD), quick coupler, quick-release coupling, air coupler, air-line fitting, pneumatic coupling (Wikipedia, Air-line fitting; Midstate)
  - ball-latching or snap-type coupler; the two halves are the male nipple or plug and the female coupler or socket (Midstate; Wikipedia, Air-line fitting)
  - click-on garden hose connector, Hozelock (brand) or Gardena (brand) connector (Wikipedia, Hose coupling)
  - cam-and-groove coupling, camlock (cam lock) fitting, Type A to F camlocks (letter codes for the male adapter and female coupler ends) (Wikipedia 'Cam and groove'). Name clash: on Printables, 'CAMLOCK' also names a 3D-printed vacuum-hose (dust-extraction) connector system, not this coupling (Printables models 493835 and 624672, read through the Printables API)
  - thumb-latch coupling, plastic quick-disconnect coupling, valved (shut-off) coupling, multi-lumen (twin-tube) coupling; THOMAFLUID (brand) (RCT catalogue page)
  - CPC or Colder (brand) coupling: thumb-latch plastic couplings, with or without valves, from Colder Products Company (Fresh Water Systems CPC page)
- **family**: quick-release & tool-free
- **other_families**: seals & pass-throughs, self-locking & anti-back-drive, hydraulics, pneumatics & vacuum, over-centre, toggle & cam clamps
- **one_liner**: A tube fitting that locks a plastic or soft-metal tube in place and seals it as soon as the tube is pushed in, and releases it by hand when you push its release collar in, or (for hose couplers) a pair of plug-and-socket halves that snap together and come apart when you slide back a spring-loaded sleeve.
- **complexity**: A small assembly that acts as one unit. Push-to-connect fitting: body (often with a threaded stud for a port), collet or gripper ring with stainless-steel teeth, release collar or button, O-ring seal, and a tube stop inside; an optional plastic locking clip stops the collar being pushed in (Clippard; John Guest via US Plastic; Fresh Water Systems). Sleeve-type quick coupler: a female coupler (socket) holding a ring of steel balls, a spring-loaded sliding sleeve, seals and often a shut-off valve, plus a separate male nipple (plug) with a groove round it (Wikipedia, Air-line fitting; Midstate).
- **how_it_works**: Push-to-connect: the tube slides through a ring of angled metal teeth (the collet) and an O-ring until it hits a stop; if the tube is pulled, or pressure pushes it outward, the collet is dragged into a tapered groove that squeezes its teeth into the tube, so it grips harder the more you pull, while the O-ring seals round the outside of the tube (Wikipedia, Quick connect fitting; Fresh Water Systems). Pressing the collar squarely into the body spreads the teeth off the tube so it can be pulled out (John Guest via US Plastic). Sleeve couplers: when the plug is pushed in, spring-loaded balls in the socket drop into a groove on the plug and the sleeve slides over them to trap them; pulling the sleeve back gives the balls room to move out and frees the plug (Wikipedia, Air-line fitting; Midstate). Garden-hose click connectors work the same way, with a spring-loaded outer barrel that locks onto the male end (Wikipedia, Hose coupling). Cam-and-groove (camlock) couplings, used on larger hoses, have two cam levers on the female coupler: swinging them shut pulls the grooved male adapter into the socket against a gasket, and the levers lock by over-centre geometry so they can't open by accident; because the groove runs all the way round, no lining up is needed and the gasket is squeezed the same amount every time (Wikipedia 'Cam and groove'). Small plastic thumb-latch couplings for lab and analyser tubing lock by themselves when the nipple is plugged in and come apart after 'a short thumb pressure on the lock', all with one hand; the nipple seals with an O-ring, and either half can have a shut-off valve so the line stays closed when parted (RCT catalogue page).

### Finder attributes

- **job**: 
  - seal it, or pass cables or fluid through: joins a tube or hose so air, water or other fluid passes without leaking
  - join and hold: holds the tube in against pulling and internal pressure
  - lock, and release by hand: pressing the collar or pulling the sleeve undoes it with no tools
- **motion**: none: the tube or plug is held still once connected. Plumbing push-fit joints stay rotatable after assembly (Wikipedia 'Piping and plumbing fitting'), and elbow and branch versions can be turned to point the right way after connecting but must not be used while turning; for tubes that keep rotating or swinging, rotary (swivel) fittings are used instead (SMC KQG2 manual)
- **degrees_of_freedom**: 0: the tube is locked in place along and around its axis in normal use; the tube moves back slightly when first pulled, as the teeth bite (Clippard: pull the tubing back gently until the gripper ring grips)
- **special_behaviour**: 
  - quick-release (tool-free): press the collar or button in (push-to-connect) or pull the sleeve back (couplers) and the tube or plug comes out (John Guest via US Plastic; Midstate)
  - hand-release only (locks under load, releases when a person operates it): pulling on the tube or pressure inside only makes the teeth bite harder; it lets go only when the collar is pushed in (Wikipedia, Quick connect fitting; Fresh Water Systems)
  - one-way (moves freely one way, locks the other): the tube slides in easily past the angled teeth but cannot slide back out
  - fail-safe or breakaway: only special breakaway couplings, which part on purpose if the hose is pulled too hard (e.g. a truck driving off while refuelling) and seal themselves to prevent a spill (Midstate)
- **holding_principle**: 
  - friction or clamping (force-fit): the collet is wedged into a taper so its teeth squeeze and bite into the tube (Fresh Water Systems)
  - shape (the parts interlock; form-fit): the teeth dig into the tube surface; in sleeve couplers the balls sit in a groove on the plug (Wikipedia, Air-line fitting)
  - spring force (a spring or springy part presses it in place): the springy collet fingers and the spring behind the coupler sleeve keep it engaged (Midstate)
- **input_output**: not applicable: it joins tubes and passes fluid, not motion
- **power**: passive (no power needed)
- **removability**: tool-free quick release: press the release collar in and pull the tube out, or pull back the coupler sleeve; the system must be depressurised first (John Guest via US Plastic; SMC KQG2 manual)
- **reuse_cycles**: many times: the fitting can be re-used (John Guest via US Plastic), but the teeth mark the tube, so cut off the marked end before pushing a used tube back in (SMC KQG2 manual; Clippard); frequent removal gradually scratches the tube until it leaks past the O-ring (Fresh Water Systems). Sleeve-type quick couplers are made for frequent connecting and disconnecting (Midstate); plumbing push-fit ('push-to-pull') fittings 'can easily be removed and re-used' (Wikipedia 'Piping and plumbing fitting')
- **tools_needed**: None to connect or release (a small printed or bought release tool helps with tiny collets; Printables 198167, 285470). A proper tube cutter for a square cut; don't use pliers, nippers or scissors, which squash the tube (SMC KQG2 manual). A spanner to screw a threaded fitting into its port (Clippard; SMC)
- **seal**: airtight or pressure: an O-ring inside the fitting seals round the outside of the tube (Wikipedia, Quick connect fitting). Example ratings: small plastic push-in fittings 0-150 psig and vacuum to 29.5 inHg (Clippard); stainless push-in fittings -100 kPa to 1 MPa, but not for holding a vacuum in a leak tester because they leak slightly (SMC KQG2 manual). Quick couplers seal with O-rings or a compressed tip, and valved (shut-off) couplers close off the flow when parted (Wikipedia, Air-line fitting; Midstate)
- **load**: medium for its size: holds tube pull-out of more than 20 lb (about 9 kg) when not pressurised in a small plastic fitting (Clippard) and full rated pressure. Strong against pulling straight out; weak against side loads, bending close to the fitting, twisting, rotation, vibration and impact, which can crack the fitting or release or burst the tube (SMC KQG2 manual; Fresh Water Systems)
- **adjustable**: no: the grip and seal are set by the fitting and the tube size; elbow fittings can only be swivelled to aim them (SMC KQG2 manual)
- **play_and_precision**: small: the tube shifts back slightly as the teeth bite (Clippard). It tolerates almost no misalignment: push the tube in straight (within about 0-5 degrees) and keep side loads off it (SMC KQG2 manual; Fresh Water Systems). It is not used to locate parts
- **access_needed**: end of a tube or shaft: you need the cut end of the tube and room to push it straight in and to press the release collar with a finger or tool; the fitting body is either inline or screwed into a port
- **materials**: Fittings: plastic body with nickel-plated brass stud, stainless-steel gripper ring and Buna-N (nitrile) seals (Clippard); all-stainless 316 versions with FKM seals for steam (SMC KQG2 manual); quick couplers in carbon steel, brass or stainless (Midstate) or plastics such as acetal, polypropylene, nylon and PEEK (Wikipedia, Quick connect fitting). Tubes: nylon, polyurethane, polyethylene or polypropylene (Clippard); soft copper, brass or mild steel tube if within tolerance, but not hard metal tube (John Guest via US Plastic); fluoropolymer (FEP, PFA, PTFE) tube with an inner sleeve where temperatures swing (SMC KQG2 manual). Soft or thin-walled tubing needs a tube insert (John Guest via US Plastic). 3D printers use 4 mm PTFE tube in PC4 fittings (Printables 529258). Cam-and-groove couplings: stainless steel, aluminium, brass or polypropylene (Wikipedia 'Cam and groove'); plastic thumb-latch couplings: acetal (POM) bodies with nitrile (NBR) seals (RCT catalogue page)
- **maker_difficulty**: easy to fit, hard to make: buy one and print the housing or adapter around it; the hardened teeth and accurate O-ring groove are hard to print, and printed versions are experimental (Printables 1094373 is 'work in progress'; Printables 1572668 warns printed collars hold the tube less well than ones with metal teeth)

### Making it

- **processes**: 
  - off-the-shelf part: push-to-connect straights, elbows, tees, bulkhead and threaded-stud fittings; quick-disconnect coupler and plug pairs; garden-hose click connectors
  - 3D print (FDM): housings, pass-throughs and adapters that hold a bought fitting (e.g. PC4-M10 threads), collet locking clips, release tools, blanking plugs, and experimental printed push-to-connect fittings and garden-hose connectors (Printables 1094373, 1314393, 1255364) *(unverified parts omitted)*
- **print_in_place**: partly: one experimental push-to-connect fitting is designed to print in place and grips the tube, but needs a bought O-ring to hold pressure (Printables 1094373). Most printed designs are separate parts: printed garden-hose couplings need an O-ring (Printables 1255364) and usually a spring (a springless lockable remix exists, Printables 1314393); most makers simply screw a bought fitting into a printed part
- **making_tips_3d_printing**: 1) Best approach: design a printed part that holds a bought fitting (a threaded hole or a heat-set insert for the fitting's M5, M6 or M10 stud, or a clamp), and let the metal-toothed collet do the gripping; one printed PTFE tube joiner comes with printed collars but its designer recommends bought 4 mm collars with metal teeth because printed ones hold less well (Printables 1572668). 2) Threads and plugs for fittings are small: makers print them with fine layers (0.1-0.12 mm) and 100% infill (Printables 233088; Printables 263357, which also recommends a brim). 3) A printed PC4-M10 substitute clamp was printed in PETG for flexibility and the PLA nut kept rigid; the 4 mm hole may need drilling out to fit the tube (Printables 529258). 4) Printed garden-hose connectors: print the gripping fingers facing down with a brim, use PETG outdoors, and fit an O-ring (bought, or printed in TPU); the fingers are fragile (Printables 1255364); orient the part so the O-ring seat is smooth (Printables 1281989). 5) Sliding sleeves, collars and latches need clearance to move: start at about 0.3 mm for moving parts (Prusa Knowledge Base) and tune for your printer. 6) Plastic springs that stay loaded creep and relax, so use a steel spring behind a printed sleeve or latch (DuPont design guide, p. 36). 7) Keep printed fittings for low pressure and room temperature: PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen); an experimental printed push-to-connect fitting is 'not as springy as metal versions' (Printables 1094373). 8) For 3D-printer Bowden tubes, a printed collet clip that slides under the collar stops the collar being pushed in and removes play on retraction (Printables 135121, which halved the retraction distance needed from 4 mm to 2 mm).
- **off_the_shelf_parts**: Search for: 'push-to-connect fitting', 'push-in fitting' or 'instant fitting' (straight union, elbow, tee, Y, bulkhead union, male stud with M5, 1/8 NPT or R1/8 thread, reducer, plug); 'one-touch fitting' (SMC (brand) naming); 'push-quick fitting' (Clippard (brand)); 'rotary one-touch fitting' for tubes that turn (SMC); 'PC4-M6' or 'PC4-M10 pneumatic fitting' and 'collet clip' for 3D-printer Bowden tubes; 'release tool' for small collets; 'tube insert' or 'tube stiffener' for soft tubing (John Guest via US Plastic); 'inner sleeve' for fluoropolymer tube (SMC); 'tube cutter' (e.g. SMC TK-1). Quick couplers: 'quick-disconnect coupling', 'quick coupler' and matching 'nipple' or 'plug' in a named profile such as 'Industrial 1/4 in' (US), 'ARO 210', 'Tru-Flate/Automotive', 'Euro 7.2 (high-flow)', 'Nitto', or 'Rectus 25' (European) (Wikipedia, Air-line fitting); 'ISO 4414 safety coupling'; 'single shut-off' or 'double shut-off'; 'flat-face coupling' (hydraulic) (Midstate). Garden: 'hose quick connector' or 'click-on hose connector' (Hozelock (brand), Gardena (brand)). Tubing: '95A polyurethane tubing', 'nylon tubing', 'polyethylene tubing' by outside diameter (4, 6, 8 mm; 5/32, 1/4, 3/8 in).
- **rules_of_thumb**: 
  - Push-in fittings are sized by the tube's OUTSIDE diameter, hose barbs by the tube's INSIDE diameter (Clippard, Barb Fittings vs. Push-Quick Fittings).
  - Use firm tubing: Clippard recommends 95A polyurethane for push-quick fittings (85A for barbs) and lists minimum hardness Shore A85 for polyurethane and Shore D44 for polyethylene, polypropylene and nylon (Clippard wiki; Clippard Push-Quick datasheet, p. 290).
  - Tube outside diameter must be accurate: +/-0.005 in (about 0.13 mm) for polyurethane and +/-0.004 in (about 0.1 mm) for polyethylene, polypropylene and nylon (Clippard Push-Quick datasheet, p. 290); John Guest lists +0.001/-0.003 in for 5/32-3/16 in tube and +0.001/-0.004 in for 1/4-1/2 in tube (John Guest via US Plastic).
  - Example ratings for small plastic push-in fittings: 0-150 psig at 130 °F, vacuum to 29.5 inHg, 32-140 °F, tube pull-out force over 20 lb unpressurised, burst 350 psig at 75 °F (Clippard Push-Quick datasheet, p. 290). Stainless 316 push-in fittings: -100 kPa to 1 MPa, proof pressure 3.0 MPa, -5 to 150 °C with no freezing (SMC KQG2 manual).
  - Cut the tube square with a tube cutter, not pliers, nippers or scissors (SMC KQG2 manual); the outside must be free of score marks and burrs (John Guest via US Plastic).
  - Push the tube in straight (within about 0-5 degrees) until it stops, then pull it back gently to check it has gripped (SMC KQG2 manual; Clippard). The fitting grips before it seals, so a half-inserted tube can hold but still leak (John Guest via US Plastic).
  - Mark the insertion depth on the tube so you can see it has gone all the way in; Fresh Water Systems suggests a line about 3/4 in from the end for its water-filter fittings (the depth depends on the fitting size; SMC gives it as dimension 'M' in each drawing).
  - Keep the tube's bend near the fitting no tighter than the tube's minimum bending radius, and leave some slack for pressure and length changes (SMC KQG2 manual).
  - Use a tube insert in soft or thin-walled tubing (John Guest via US Plastic), and an inner sleeve in fluoropolymer tubing where the fluid temperature swings a lot (SMC KQG2 manual).
  - To re-use a tube, cut off the part that was inside the fitting first (SMC KQG2 manual; Clippard Push-Quick datasheet).
  - Keep surge (pressure spike) pressure below the maximum working pressure, or the tube may be pushed out (SMC KQG2 manual).
  - Quick-coupler plugs and sockets must share the same profile; mismatched pairs may still latch but seal poorly (Wikipedia, Air-line fitting).
  - Printed moving parts (sleeves, collars, latches): start with at least 0.3 mm clearance (Prusa Knowledge Base, Modeling with 3D printing in mind).
  - Plumbing push-fit: cut the pipe end square so it sits against the stop, and cleanly so it doesn't damage the O-ring as it goes in (Wikipedia 'Piping and plumbing fitting').
  - Example rating for a small twin-tube plastic thumb-latch coupling: -40 to +80 °C and up to 6.9 bar per line at 20 °C (RCT catalogue page, THOMAFLUID multi-lumen coupling).
  - Cam-and-groove couplings are made to interchangeable standards (A-A-59326, which replaced MIL-C-27487; BS EN 14420-7; DIN 2828) in sizes from 1/2 in to 8 in, so halves from different makers fit (Wikipedia 'Cam and groove').

### When to use it

- **everyday_examples**: 
  - The push-in fittings that hold the PTFE tube on Bowden-type 3D printers, often with a small blue collet clip under the release collar (Printables 135121; Printables 529258)
  - Plastic tubing on under-sink water filters and reverse-osmosis units (Fresh Water Systems; Printables 198167)
  - Click-on garden hose connectors (Hozelock (brand) or Gardena (brand) style) (Wikipedia, Hose coupling)
  - Workshop compressed-air hoses snapped onto air tools and tyre inflators with a pull-back-sleeve coupler (Wikipedia, Air-line fitting; Midstate)
- **when_to_use**: Use a push-to-connect fitting when you need to join firm plastic tubing (nylon, polyurethane, polyethylene, PTFE) quickly and neatly for compressed air, vacuum, water or other low-to-medium pressure fluids, and you may want to take it apart again: pneumatic models and robots, water filters and cooling, aquarium and hydroponic setups, and 3D-printer Bowden and filament-guide tubes. It connects with one push and no tools, gives high flow because nothing narrows the bore, and suits frequent reconnection better than a barb (Clippard). Use a sleeve-type quick coupler (plug and socket) when a hose must be connected and unplugged often, one-handed, e.g. swapping air tools, and choose shut-off (valved) couplings so the line doesn't empty when parted (Midstate; Wikipedia, Quick connect fitting). Choose a cam-and-groove (camlock) coupling for large liquid hoses that are swapped often in dirty conditions where threads would clog, such as pump-truck and tanker hoses or drum filling, since it connects without tools and can't be over- or under-tightened (Wikipedia 'Cam and groove'); choose small plastic thumb-latch couplings for lab, analyser and other small-bore tubing that has to be plugged and unplugged one-handed (RCT catalogue page; Fresh Water Systems CPC page).
- **when_not_to_use**: Don't use push-in fittings with soft, stretchy tubing (silicone, soft PVC): use a hose barb with a clamp, or add a tube insert (Clippard; John Guest via US Plastic). Don't use them where the tube rotates, swings, or travels with a moving part: use rotary fittings, coiled tubing, or a cable carrier (SMC KQG2 manual). Avoid heavy vibration or shock, strong side loads, hard metal tubes, very high pressures and pressure spikes: use compression, threaded or crimped fittings (SMC KQG2 manual; John Guest via US Plastic). If you want the cheapest, most leak-free joint that you never undo, a barb is better (Clippard). Don't rely on a 3D-printed push-in fitting for real compressed-air pressure; printed ones are experimental (Printables 1094373). Don't use cam-and-groove couplings for compressed air, steam or other gases (Wikipedia 'Cam and groove'); use an air coupler rated for gas.
- **environment_limits**: Heat and cold: small plastic push-in fittings are rated 32-140 °F (0-60 °C) (Clippard); stainless versions -5 to 150 °C, no freezing (SMC KQG2 manual). Below about 5 °C, water in the line can freeze and damage seals (SMC). Warmer water lowers the pressure rating (Fresh Water Systems). Polyurethane tube swells with pressure and heat, so a used tube may no longer fit back in (SMC). Sunlight, vibration and chemicals: avoid long direct sunlight, heavy vibration or shock, radiant heat, corrosive gases, sea water, and cutting oils or coolants unless the fitting is rated for them (SMC KQG2 manual). Ageing: after many years the O-ring can dry out and drip (Fresh Water Systems). Printed parts: PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen).
- **safety_notes**: Always release the pressure before disconnecting (John Guest via US Plastic; SMC KQG2 manual): a hose or tube freed under pressure can whip about, and ISO 4414 'safety' couplings vent the air in two stages before releasing for this reason (Wikipedia, Air-line fitting). With single shut-off couplings, only one half seals, so the other half may still spray or vent (Midstate). Pressure spikes (surge) above the rating can push the tube out (SMC). Near welding spatter, ordinary plastic fittings and tubing are a fire risk; flame-resistant ones exist (SMC KQG2 manual). Cam-and-groove (camlock) couplings 'are not recommended for any type of compressed gas service, including steam or air' (Wikipedia 'Cam and groove'); keep them for liquids, and fit the lever safety pins where the coupling has them. *(unverified parts omitted)*
- **common_failures**: Leaks because the tube wasn't pushed in far enough to pass the O-ring (the most common cause), a slanted cut, a sharp tube end that nicked the O-ring, or a side load that squashed the O-ring oval (Fresh Water Systems); fix by re-cutting square and pushing fully home with a depth mark. Tube works loose or slips out: tube too soft, undersized or scored (Clippard; John Guest via US Plastic), frequent removal scratching the tube (Fresh Water Systems), pressure surges (SMC), or on 3D printers the constant push-pull of retraction and vibration pushing the release collar in; a collet clip under the collar stops this (Printables 135121). A tube re-used without cutting off the marked end, or swollen polyurethane tube, won't reseal or re-insert (SMC KQG2 manual). Fittings crack if the tube is rotated, levered or vibrated at the fitting (SMC). Quick couplers: mismatched plug profiles latch but leak (Wikipedia, Air-line fitting).
- **related**: 
  - Hose barb: a ridged spigot inside soft tubing; cheaper and seals better on soft tube, but hard to undo (Clippard)
  - Bayonet mount (push-and-twist lock): the idea behind quarter-turn hose couplings such as Storz and GEKA (Wikipedia, Hose coupling)
  - Cam-and-groove (camlock) coupling: covered in this entry as a lever-locked variant for large hoses; two cam arms clamp a grooved adapter against a gasket and lock over-centre (Wikipedia, Hose coupling; Wikipedia 'Cam and groove')
  - Band flange clamp (tri-clamp): a hinged clamp squeezes two flanged ends onto a gasket, for sanitary pipes (Wikipedia, Hose coupling)
  - Quick-release pin (ball-lock pin): uses the same spring-loaded balls to lock a pin instead of a hose plug
  - Slip ring and rotary union: when the tube must keep turning, a rotary joint is needed instead (SMC recommends rotary fittings)
  - Cable gland and strain relief: seals a cable, not a tube, through a wall *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Inside a John Guest Push-Fit Fitting | Cutaway Explanation (Pipe & Skill, YouTube)](https://www.youtube.com/watch?v=GKPDqqOE9Oo): A cut-open plumbing push-fit fitting explaining how the collet grips and the O-ring seals (per the video's title and search listing) *(licence: link only (YouTube))*
  - [Pneumatic push-in fittings (Tameson, YouTube)](https://www.youtube.com/watch?v=wzRT6BrN-tU): How pneumatic push-in fittings are used (per title) *(licence: link only (YouTube))*
  - [Quick release coupling used in hydraulics explained! (Engineering Pod, YouTube)](https://www.youtube.com/watch?v=HUotgU8YAtI): A lecture explaining how a quick-release coupling works (per the video description) *(licence: link only (YouTube))*
  - [File:Rtc-serie-171.08-gruppe.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Rtc-serie-171.08-gruppe.jpg): Pneumatic safety couplings with two-stage release to ISO 4414, with mating nipples (plugs) *(licence: CC BY-SA 4.0 (Shngz))*
  - [File:Gardena hose pistol.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Gardena_hose_pistol.jpg): Garden sprinkler and various click-on hose connectors and adapters (Gardena (brand) plug system) *(licence: CC BY-SA 3.0 (Jarlhelm))*
- **make_it_yourself**: 
  - [Push to connect fitting - 1/4-18 push to connect fitting for pneumatic and liquids (Jay, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1094373-push-to-connect-fitting-14-18-push-to-connect-fitt): Work-in-progress printable push-to-connect fitting with an NPT thread, designed to print in place; grips tube as intended but is 'not as springy as metal versions'; add an O-ring for pressure *(licence: GNU GPL v3.0)*
  - [Collet clip for PTFE tube (REIFY 3D, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/135121-collet-clip-for-ptfe-tube): A clip that sits under the release collar of a Bowden fitting so the tube can't move; in three sizes *(licence: CC BY-SA)*
  - [Pneumatic Push-in Fitting Removal Tool (OliverP, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/285470-pneumatic-push-in-fitting-removal-tool): A printed tool that presses the release collar evenly for 4 mm and 6 mm tubes, including 3D-printer Bowden fittings *(licence: CC BY)*
  - [PC4-M10 fitting printed substitute (Melantech, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/529258-pc4-m10-fitting-printed-substitute): A printed clamp-and-nut stand-in for a PC4-M10 fitting that holds a 4 mm PTFE tube (clamp in PETG, nut in PLA) *(licence: CC BY)*
  - [Garden hose quick connector female, now it doesn't need a spring! (iPa64, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1314393-garden-hose-quick-connector-female-now-it-doesnt-n): A lockable, springless remix of a printable female garden-hose click connector, with STEP files for making your own variants *(licence: CC BY-NC)*
- **diagram_idea**: Two side-by-side cut-aways: (1) a tube pushed into a push-to-connect fitting, showing the angled collet teeth, the O-ring and the tube stop, with an arrow showing that pulling the tube wedges the teeth in harder and a second view with the collar pushed in spreading the teeth; (2) a ball-lock coupler with balls sitting in the plug's groove under the sleeve, and a second view with the sleeve pulled back so the balls can move out.
- **sources**: 
  - https://en.wikipedia.org/wiki/Quick_connect_fitting
  - https://en.wikipedia.org/wiki/Air-line_fitting
  - https://en.wikipedia.org/wiki/Hose_coupling
  - https://www.clippard.com/downloads/PDF_Documents/Product%20Data%20Sheets/Clippard%20Push-Quick%20Ftgs.pdf
  - https://www.clippard.com/cms/wiki/barb-fittings-vs-push-quick-fittings
  - https://www.usplastic.com/knowledgebase/article.aspx?contentkey=761
  - https://static.smc.eu/binaries/content/assets/smc_global/product-documentation/operation-manuals/en/om_kq_oms0022en-b.pdf
  - https://www.freshwatersystems.com/blogs/blog/what-is-a-quick-connect-fitting-and-how-does-it-work
  - https://www.midstate-sales.com/blog-posts/quick-disconnects-101
  - https://www.bearingboys.co.uk/PushIn-Fittings-153-a
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Rtc-serie-171.08-gruppe.jpg
  - https://commons.wikimedia.org/wiki/File:Gardena_hose_pistol.jpg
  - https://www.youtube.com/watch?v=GKPDqqOE9Oo
  - https://www.youtube.com/watch?v=wzRT6BrN-tU
  - https://www.youtube.com/watch?v=HUotgU8YAtI
  - https://api.printables.com/graphql/
  - https://en.wikipedia.org/wiki/Cam_and_groove
  - https://en.wikipedia.org/wiki/Piping_and_plumbing_fitting
  - https://www.rct-online.de/en/tube-hose-connectors/quick-disconnect-couplings-made-of-plastic/multi-lumen-quick-disconnect-couplings/29228/multi-lumen-quick-disconnect-nipple-made-of-pom
  - https://www.freshwatersystems.com/collections/Colder-Products

### Other info

- **Fields with unverified parts:** processes, related, safety_notes

## 167 DIN-rail clip (top-hat rail snap mount)

*quick-release & tool-free.* A spring clip that hooks over one edge of a standard metal rail and snaps onto the other, so modules click on and off

*Also covers:* Also covers terminal blocks, the commonest thing on a DIN rail.

### What it is

- **plain_name**: A clip on the back of a box that hooks over the top edge of a standard metal strip and snaps onto the bottom edge, so the box clicks on and off the strip, like the switches in a fuse box
- **term**: DIN-rail clip (DIN-rail mounting foot or snap foot, for a top-hat rail to IEC/EN 60715)
- **aliases**: 
  - DIN rail mounting clip, DIN rail mounting bracket or plate (Winford Engineering)
  - DIN rail adapter, DIN clip, rail mount, snap foot or 'spring-loaded snap foot' (Phoenix Contact white paper)
  - top-hat rail clip; the rail is called top-hat rail, TH35, TS35 (US), Type O or Omega (Ω) rail, NS 35 or U-rail (Wikipedia, DIN rail; Phoenix Contact white paper)
  - Hutschiene (German for top-hat rail; the Printables and GitHub designs use it)
  - DIN rail latch, release tab or release loop (the sliding part you pull to unclip; Wikipedia, DIN rail; Crestron)
  - G-rail or G32 clip (for the older asymmetric rail) and C-rail (C-section) mounts are related variants (Wikipedia, DIN rail)
- **family**: quick-release & tool-free
- **other_families**: snap & clip fits, sliding, telescoping & linear motion
- **one_liner**: A mounting foot with a fixed hook on one side and a spring-loaded latch on the other, so electrical modules and home-made boxes can be clicked onto, slid along, and unclipped from a standard 35 mm metal top-hat rail.
- **complexity**: A few parts, or a single printed piece. Commercial clip: a moulded or steel body with a fixed hook at the top, a sliding latch (release tab) at the bottom pushed by a spring, and holes or threaded inserts for screwing it to the device (Winford Engineering). Printed clip: one piece with a flexing latch, or a print-in-place slider and zigzag spring (hzeller din-rail-clip-mount). The rail itself: 35 mm wide, 1 mm thick zinc-plated steel strip bent into a top-hat shape (Wikipedia, DIN rail; IEC 60715).
- **how_it_works**: The top-hat rail has two thin lips. The clip's fixed hook goes over the upper lip and carries the weight; you then swing the bottom of the clip toward the rail, the lower lip pushes a sloped spring latch aside, and the latch snaps back behind the lip so the rail is gripped on both edges (Winford Engineering; Crestron). To remove it, pull the latch down (by hand, with a pull tab, or with a small flat screwdriver in its slot) and tilt the bottom of the device away; 'lift and pivot' clips can instead be pushed up against their spring and tilted off without touching the latch (Crestron; Winford Engineering). Once on, the module can be slid along the rail, and end stops (end clamps) keep a row of modules from sliding (Aera Electrical Products).

### Finder attributes

- **job**: join and hold: holds a module, box or circuit board on a standard rail, lock, and release by hand: clicks on and unclips with a finger, pull tab or small screwdriver
- **motion**: slide: once clipped on, a module can be pushed along the rail to position it; otherwise it doesn't move (end stops lock the row in place; Aera Electrical Products)
- **degrees_of_freedom**: 1 while positioning (it can slide along the rail, held only by friction); 0 once end stops or neighbouring modules box it in
- **special_behaviour**: 
  - quick-release (tool-free): snaps on by tilting and unclips by pulling the latch or lifting and pivoting (Winford Engineering; Crestron)
  - hand-release only (locks under load, releases when a person operates it): the fixed top hook takes the weight and the latch stays shut until someone pulls it or lifts the clip (Winford Engineering)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the hook and latch wrap over the rail's two lips
  - spring force (a spring or springy part presses it in place): a spring (or a flexing plastic arm) pushes the latch against the lower lip and takes up the rail's width tolerance (Winford Engineering; hzeller)
- **input_output**: not applicable: it holds a part on a rail and does not pass motion on
- **power**: passive (no power needed)
- **removability**: tool-free quick release: many clips unclip by hand ('lift and pivot', no screwdriver needed; Winford Engineering); others need the latch pulled with a small flat screwdriver (Crestron)
- **reuse_cycles**: many times: made to be clipped on and off repeatedly (Winford Engineering); printed clips with plastic springs may weaken over time (see environment_limits)
- **tools_needed**: None, or a small flat-blade screwdriver to pull the latch (Crestron). A screwdriver to screw the clip to your device (Winford Engineering suggests flat-head screws) and to fix the rail to the backplate
- **seal**: none
- **load**: light to medium: the fixed hook on top bears the weight (Winford Engineering). Strong downward and against pulling straight off; weakest when the device is lifted upward (that is the release movement of lift-and-pivot clips) and against sideways twisting, which can tilt lift-and-pivot clips (Winford Engineering). Heavier modules call for sturdier rail fixing, and the rail can twist under heavy off-centre loads (Phoenix Contact white paper). IEC 60715 Annex B gives permissible rail loads against support spacing (IEC 60715 preview, contents)
- **adjustable**: yes: its position along the rail can be changed by sliding it (then locked with end stops; Aera Electrical Products); clamping force is not adjustable, except in printed designs by changing spring dimensions (hzeller)
- **play_and_precision**: small: the rail is made to +/-0.3 mm width and +/-0.04 mm thickness (IEC 60715 preview, Fig. 2). 'Lift and pivot' clips leave a gap below the rail and can tilt under side loads; 'latch release' clips fit tighter and are more rigid (Winford Engineering). *(unverified parts omitted)*
- **access_needed**: one side only (blind): everything is done from the front; the rail is screwed to a panel and the latch is reached from the front at the bottom edge (Crestron)
- **materials**: Rail: cold-rolled carbon steel, zinc-plated or chromated (Wikipedia, DIN rail); aluminium extruded rails also exist and may fit tighter (Printables 64242). Clips: fibreglass-reinforced nylon 66 (Enable-IT), nylon (Winford Engineering), steel (Winford Engineering); end stops in PA66, aluminium or zinc-coated steel (Aera Electrical Products). Printed clips: PLA, ABS and PETG all give roughly the right spring force in one design (hzeller); another is tested only in ABS/ASA and PETG (Printables 1089827)
- **maker_difficulty**: easy: buy clips for a few coins or print one in a single piece; one open design prints its slider and spring already assembled (hzeller din-rail-clip-mount)

### Making it

- **processes**: 
  - off-the-shelf part: plastic or steel DIN-rail mounting clips and plates, DIN-rail enclosures, end stops
  - 3D print (FDM): one-piece clips with a flexing latch or a print-in-place spring slider (hzeller; Printables 64242, 1089827)
  - sheet metal: steel mounting clips (Winford Engineering) *(unverified parts omitted)*
- **print_in_place**: yes: hzeller's design prints the sliding latch and its zigzag spring in place, ready to clip on (hzeller din-rail-clip-mount), and flexing-latch clips are single parts. Some printed clips add screws or heat-set inserts only for attaching the device (Printables 1089827, 537942)
- **making_tips_3d_printing**: 1) Orientation: print the clip lying flat on its back so the rail profile is extruded in the plane of the layers and the latch or spring bends along the layers rather than across them (in hzeller's design the spring and slider lie in the flat base plate; Prusa: prints are stronger in one direction, so orient structural parts for strength). 2) Fit: make the gap between hook and latch a little smaller than the 35 mm rail so the spring clamps (hzeller uses 35 - 0.5 = 34.5 mm) and allow for 1 mm rail thickness (IEC 60715; hzeller). 3) Print-in-place slider: hzeller uses a 0.25 mm gap; watch the first layer, because elephant's foot can weld the slider, which may need freeing after printing. 4) Spring: hzeller's printed zigzag spring is 1.2 mm thick and 2 mm high and 'depends on the filament, needs experimentation'; tune spring height and thickness for your material. 5) Release: add a screwdriver slot or pull tab on the latch, or print an unlocker tool, because the latch can be hard to reach behind a large board (Printables 95182; Printables 1089827). 6) Settings from one tested low-profile clip: 0.2 mm layers, 4 perimeters, 4 top and bottom layers, 40% infill, ABS/ASA or PETG, with M3 heat-set inserts for the device screws; its release tab has tight tolerances, so calibrate the printer (Printables 1089827). Another parametric mount suggests at least 3 walls and 35% infill (Printables 311970). 7) Material: PLA, ABS and PETG all worked in hzeller's design, but electrical cabinets get warm and PLA starts to give at about 60 °C (CNC Kitchen), so prefer PETG, ABS or ASA there. 8) Insulation: if a bare circuit board sits on the clip, hzeller offers an option with a 0.4 mm closed plastic floor between board and rail. 9) Check your rail: some designs fit only 35 x 7.5 mm rail (Printables 1089827) and aluminium rails can fit tighter (Printables 64242).
- **off_the_shelf_parts**: Search for: 'DIN rail mounting clip', 'DIN rail mounting bracket' or 'DIN rail adapter plate' (plastic, nylon or steel, with through holes, countersunk holes, M3/M4 nuts or threaded inserts), 'DIN rail clip lift and pivot' or 'latch release' types (Winford Engineering); 'universal DIN rail adapter' and 'DIN rail enclosure' or 'DIN rail housing' in module widths (e.g. 1, 2, 3, 4 modules); 'DIN rail end stop', 'end clamp' or 'end bracket' (Aera Electrical Products); the rail itself as 'top hat rail 35 x 7.5', '35 x 15', 'TS35', perforated or unperforated, usually cut from 2 m lengths (Wikipedia, DIN rail; Phoenix Contact white paper); 'miniature top hat rail 15 x 5.5' (TH15); 'G32 rail' or 'C-rail' for older equipment (Wikipedia, DIN rail).
- **rules_of_thumb**: 
  - Standard top-hat rail: 35 mm wide (+/-0.3 mm) from 1 mm sheet (+/-0.04 mm) (IEC 60715:2017 preview, Figure 2), in two depths, 35 x 7.5 and 35 x 15 (Wikipedia, DIN rail). A miniature 15 x 5.5 mm rail and a 75 mm wide rail also exist (Wikipedia, DIN rail).
  - Put the fixed (non-spring) hook on the top edge so it carries the weight, and the spring-loaded latch on the bottom edge (Winford Engineering).
  - To mount: hook the top over the rail, then tilt the bottom in until it snaps; to remove: pull the release down with a small flat screwdriver and tilt the bottom away (Crestron).
  - Choose 'lift and pivot' clips (more gap below the rail) for easy tool-free removal, or 'latch release' clips (tight fit) for rigidity against side loads such as stiff cables (Winford Engineering, steel DIN clips page).
  - Clip width is often counted in 18 mm 'modules' (1 module = 18 mm, 4 modules = 72 mm) (Wikipedia, DIN rail, marked 'citation needed'); for example, Crestron's modules are 3 or 4 modules wide (Crestron).
  - Printed clips: make the hook-to-latch distance about 0.5 mm under 35 mm for clamping (hzeller), give a print-in-place slider a 0.25 mm gap (hzeller), and start at about 0.3 mm clearance for other moving parts (Prusa Knowledge Base).
  - Use end stops (end clamps) at each end of a group of modules where there is vibration or transport, so they can't slide along the rail (Aera Electrical Products; Phoenix Contact white paper).
  - Screw the rail at its ends for light terminal blocks, but fix it at shorter intervals for heavier products (Phoenix Contact white paper).
  - Springs that stay loaded should be steel, not plastic, because plastic springs creep and relax (DuPont General Design Principles, p. 36); a printed spring clip is fine for light, occasionally removed parts.
  - Commercial glass-fibre nylon 66 clip rating example: -20 to 65 °C (Enable-IT).

### When to use it

- **everyday_examples**: 
  - Circuit breakers in a home fuse box or consumer unit (Wikipedia, DIN rail; Wikimedia Commons photos)
  - Terminal blocks, relays, power supplies and controllers in machine and control cabinets (Wikipedia, DIN rail; Phoenix Contact white paper)
  - Home-automation and lighting-control modules in a wall-mounted enclosure (Crestron)
  - The electronics bay of some DIY 3D printers, where boards are clipped onto a rail (Printables 592735 'DIN Rail Clip (Voron Heat Insert)', Voron (brand))
- **when_to_use**: Use a DIN-rail clip when you want several modules or home-made boxes and boards to sit tidily in a row inside a cabinet, enclosure or printer frame, and to be added, moved or swapped later without drilling new holes (Phoenix Contact white paper). It is ideal for relays, power supplies, microcontroller boards, terminal blocks and small sensors, because the standard rail makes parts from different makers interchangeable and a printed clip lets you put almost any board on it (Wikipedia, DIN rail; hzeller). Terminal blocks are what usually go on a rail. The rail itself began in the late 1920s as a way to fit more wire connections closer together than nuts and bolts on a panel allowed: Phoenix Contact and the German power utility RWE gave each porcelain terminal block a 'spring-loaded snap foot' for a mounting rail; today 'a dizzying array of terminal block versions', plus circuit breakers, power supplies, controllers and relays, are made for the 35 mm rail (Phoenix Contact white paper). A row of screw or spring-clamp terminal blocks on a rail is a tidy way to join the wires in a printed or bought enclosure.
- **when_not_to_use**: Don't rely on it for heavy parts, parts that are pulled or levered upward, or heavy vibration and shock without end stops and a well-fixed rail; screw the part directly to the panel or use stronger steel 'latch release' clips (Winford Engineering; Phoenix Contact white paper). It is not a precise locator: use dowel pins or a kinematic mount if the part must return to exactly the same spot. Outdoors or where it must seal, use a sealed enclosure (the clip itself doesn't seal). For a hang-on wall mount with no rail, a keyhole slot or French cleat is simpler.
- **environment_limits**: Heat: electrical cabinets get warm; a printed PLA clip starts to give at about 60 °C (CNC Kitchen) and its plastic spring can slowly relax and loosen under constant load (DuPont General Design Principles, p. 36); a commercial glass-fibre nylon 66 clip example is rated -20 to 65 °C (Enable-IT). Vibration: modules can slide along the rail unless end stops are fitted (Aera Electrical Products); heavy modules need closer rail fixing (Phoenix Contact white paper). *(unverified parts omitted)*
- **safety_notes**: DIN rails usually live in cabinets with mains voltage: switch off and isolate before clipping modules on or off, and follow the electrical codes (Crestron). The rail is metal and may be earthed (Wikipedia, DIN rail), so bare solder joints on a board clipped to it can short; use an insulating floor (hzeller) or standoffs. Leave ventilation holes of modules unblocked (Crestron). *(unverified parts omitted)*
- **common_failures**: Clip fitted upside down, so the spring latch instead of the fixed hook carries the weight (Winford Engineering). Modules slide along the rail under vibration or when cables are pulled: fit end stops (Aera Electrical Products). Lift-and-pivot clips tilt or pop off under side loads or stiff cables: use tight 'latch release' clips (Winford Engineering). The latch can't be reached behind a large board: add a pull tab or use a release tool (Printables 95182). Wrong rail: some clips fit only 35 x 7.5 rail (Printables 1089827), and aluminium rails can be a tighter fit (Printables 64242). Printed clips: slider fused by elephant's foot (hzeller), latch snapped because it bends across the layers, or spring relaxed so the clip rattles (DuPont). If the device doesn't cover the clip, the spring and latch of some commercial clips can fall out (Winford Engineering).
- **related**: 
  - Cantilever snap fit: the flexing latch of a one-piece printed DIN clip is one; a DIN clip is a standard way of using it against a metal rail
  - Hang-on mounts (keyhole slot, French cleat): also hook over an edge, but have no spring latch and are usually screwed to a wall
  - Aluminium-extrusion connectors (T-slot nuts): slide along a rail too, but clamp with a screw, so they are stronger but need a tool
  - Modular grid mounting systems (pegboard, Gridfinity-style grids): hook or clip into a grid of holes or sockets instead of a single rail
  - G-rail mounting: on the older asymmetric G rail, equipment is hooked over the deep lip and rotated until it clips onto the shallow side (Wikipedia, DIN rail)
  - Quick-release plate (dovetail clamp): slides into a dovetail and is clamped, for camera gear
  - Magnet joint: also tool-free, but can slide off under side loads and needs a steel surface
  - Screw terminal: screw terminal blocks are the commonest modules clipped onto a rail (Phoenix Contact white paper)
  - Spring-clamp wire connector: spring-clamp and push-in terminal blocks also snap onto the rail; a spring, not a screw, holds the wire

### Pictures, videos and models

- **links**: 
  - [File:DIN rail rear view.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:DIN_rail_rear_view.JPG): Rear view of a 2-pole circuit breaker clipped on a DIN rail, shown upside down so the sliding latches and release loops can be seen *(licence: CC BY-SA 3.0 (Kae))*
  - [File:DIN-rail-dimensions.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:DIN-rail-dimensions.svg): Cross-section drawing of the 35 mm top-hat rail (EN 50022) *(licence: Public domain (Markus Kuhn))*
  - [File:Din rail.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Din_rail.jpg): A TS35 DIN rail with several electrical modules clipped on *(licence: Public domain (Ulfbastel))*
  - [File:G-type-Din-rail.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:G-type-Din-rail.jpg): Cross-section of the older asymmetric G-type rail with equipment mounted on it *(licence: CC BY-SA 3.0 (d3j4vu))*
  - [Removal of a terminal block from a DIN rail (James Ramsey, YouTube short)](https://www.youtube.com/watch?v=bOMrQ_mIGvM): Unclipping a terminal block from a DIN rail with a small screwdriver (per title and search listing) *(licence: link only (YouTube))*
- **make_it_yourself**: 
  - [din-rail-clip-mount (hzeller, GitHub; README and OpenSCAD file read via raw.githubusercontent.com)](https://github.com/hzeller/din-rail-clip-mount): Parametric OpenSCAD DIN-rail mount for circuit boards and relays, with a spring and slider printed in place that snap onto the rail 'with a satisfying click'; optional insulating floor; printed in PLA, ABS and PETG *(licence: CC BY-SA)*
  - [OpenSCAD customizable din rail mounting clip (Mad Mechatronic, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1145663-openscad-customizable-din-rail-mounting-clip): Fully parametric OpenSCAD clip with a choice of push, pull or double springs and many hole patterns (straight, countersunk, hex or square nut) *(licence: CC BY-SA)*
  - [Din rail clip (Bryan, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/64242-din-rail-clip): A popular one-piece printable DIN-rail clip (over 9,000 downloads) with a tighter fit for aluminium extruded rails *(licence: CC0 (Public Domain))*
  - [Low-profile DIN rail clip (Oseo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1089827-low-profile-din-rail-clip): Low-profile clip with a pull tab release and M3 heat-set inserts; tested in ABS/ASA and PETG; for 35 x 7.5 rail only *(licence: CC BY)*
  - [DIN rail clip unlocker (HD_Creator, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/95182-din-rail-clip-unlocker): A small printed tool that fits the unlock groove of a printed clip to release it even when a board covers the clip *(licence: CC BY)*
- **diagram_idea**: Side cross-section of a top-hat rail with a clip: step 1, the clip's fixed hook goes over the top lip; step 2, the clip swings in and the lower lip pushes the sloped spring latch down; step 3, the latch snaps up behind the lip; step 4, a screwdriver in the latch slot pulls it down so the clip tilts off. Add a small top view showing modules sliding along the rail between two end stops.
- **sources**: 
  - https://en.wikipedia.org/wiki/DIN_rail
  - https://site.ieee.org/npec-sc2/files/2017/06/SC-2Mgt08-2_Att9-WP_DIN-Rail.pdf
  - https://www.sis.se/api/document/preview/8027750/
  - https://www.winford.com/products/dinm15.php
  - https://www.winford.com/products/dinm20.php
  - https://www.winford.com/products/dinm03.php
  - https://docs.crestron.com/en-us/9349/Content/Topics/Installation/DIN-Rail-Installation.htm
  - https://aeraelectricalproducts.com/blog/din-rail-end-clamp
  - https://enableit.com/product/din-rail-mounting-clip/
  - https://raw.githubusercontent.com/hzeller/din-rail-clip-mount/master/README.md
  - https://raw.githubusercontent.com/hzeller/din-rail-clip-mount/master/din-rail-clip-mount.scad
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:DIN_rail_rear_view.JPG
  - https://commons.wikimedia.org/wiki/File:DIN-rail-dimensions.svg
  - https://commons.wikimedia.org/wiki/File:Din_rail.jpg
  - https://commons.wikimedia.org/wiki/File:G-type-Din-rail.jpg
  - https://www.youtube.com/watch?v=bOMrQ_mIGvM
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, play_and_precision, processes, safety_notes

## 168 Indexable clamping lever (ratchet handle)

*quick-release & tool-free.* A clamping handle on a toothed spline that you lift to swing round without turning the screw, then let spring back to tighten again, for tight spaces

### What it is

- **plain_name**: A tightening handle on a screw that you can lift up to swing it back round without turning the screw, then let it drop back onto its teeth and pull again, so you can tighten something in a cramped spot a little at a time
- **term**: Adjustable clamping lever (adjustable handle, indexable clamping handle)
- **aliases**: 
  - adjustable handle, adjustable hand lever, clamping lever, clamping handle (Elesa+Ganter GN 300; Elesa ERX; McMaster-Carr: 'also called clamping handles')
  - adjustable clamping handle; ratchet handle or ratchet lever (Innovative Components: 'also known as ratchet handles or adjustable handles'; POWERTEC (brand) sells them as 'ratchet lever knobs')
  - Klemmhebel (German; Wikipedia de, Klemmhebel); Spannhebel or tension lever are related German/catalogue names (KIPP (brand) groups them as 'Adjustable handle, tension lever, cam lever'; KIPP USA catalogue page) *(unverified parts omitted)*
- **family**: quick-release & tool-free
- **other_families**: indexing & detents, clamping, magnetic & friction connections
- **one_liner**: A lever-shaped handle fitted to a screw or nut through a spring-loaded toothed coupling, so it tightens and loosens the screw by hand but can be lifted off its teeth and swung to a new angle, letting you clamp in tight spaces and leave the lever pointing where you want.
- **complexity**: A small assembly that acts as one unit: lever (handle body), toothed insert with a threaded hole (boss) or threaded stud, matching teeth inside the lever, a return spring, and a retaining screw or pin that holds it together (Elesa+Ganter GN 300; Elesa ERX; Ruland video). Simplest home-made version: a printed lever with a hex pocket, a screw and one or two nuts, with no spring (Printables 86927).
- **how_it_works**: Inside the lever, a ring of teeth (serrations) meshes with teeth on the central insert that is screwed onto or into the part being clamped, and a spring holds the two sets of teeth together, so turning the lever turns the screw (Elesa+Ganter GN 300; Elesa ERX). When there is no room to keep turning, you pull the lever up a few millimetres against the spring; the teeth come apart and the lever swings freely back to a new starting position without turning the screw (Elesa ERX: 'lift the lever to disengage the clamping device teeth and bring it back to start position'). Let go and the spring drops the teeth back into mesh, ready for the next pull, so you can tighten step by step like a ratchet spanner, or park the lever out of the way (Elesa+Ganter GN 300; Innovative Components; Wikipedia de, Klemmhebel).

### Finder attributes

- **job**: 
  - join and hold: tightens a screw or nut by hand to clamp parts together
  - lock, and release by hand: clamps and unclamps with no tools
  - click into set positions: the handle can be parked at any of a set of angles, one tooth apart
- **motion**: multiple: the lever rotates to turn the screw, and lifts a few millimetres along the screw axis to disengage (about 3-5 mm lift on Elesa+Ganter GN 300 levers of 22-108 mm)
- **degrees_of_freedom**: 1 when engaged (lever and screw turn together); 2 when lifted (the lever can slide up and turn freely on the insert); 0 once the clamp is tight and the lever is released
- **special_behaviour**: 
  - indexing (clicks into set positions): the lever can be re-set every tooth, i.e. in steps of 360 degrees divided by the number of teeth (18 to 28 teeth on Elesa ERX handles: steps of about 20 to 13 degrees)
  - quick-release (tool-free): not instant like a cam lever, but tightening and loosening need no tools and the handle can be swung out of the way (Innovative Components; POWERTEC)
  - none of a true ratchet's one-way action: most versions don't click freely backwards; you lift the lever to reset it (Elesa ERX). Some versions use a push button instead of lifting (POWERTEC: 'spring loaded handle and push button ratchet clutch')
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the lever drives the insert through meshing teeth (serrations)
  - spring force (a spring or springy part presses it in place): a return spring keeps the teeth in mesh (Elesa ERX: AISI 302 stainless return spring)
  - friction or clamping (force-fit): the clamped parts are held by the screw's clamping force and thread friction
- **input_output**: Limited back-and-forth swing of the hand lever -> rotation of the screw at 1:1 while the teeth are engaged; lifting the lever disconnects it. The screw thread then turns rotation into clamping force; the lever length (roughly 22-108 mm on standard ranges; Elesa+Ganter GN 300, Elesa ERX) sets the leverage. Shaft arrangement: in line. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: loosened and unscrewed by hand with no tools; the lever itself stays assembled on its insert, held by a retaining screw or pin (Elesa+Ganter GN 300; Elesa ERX)
- **reuse_cycles**: effectively unlimited: made for repeated clamping; an Elesa ERX.78 withstood more than 100,000 tightening cycles at 490 N without yielding (Elesa ERX datasheet)
- **tools_needed**: None to use. *(unverified parts omitted)*
- **seal**: none
- **load**: medium: clamping force comes from the screw, so it depends on thread size (M3 to M16 on GN 300) and how hard you pull; the weak point is the toothed element that carries the torque from lever to insert (Elesa ERX). *(unverified parts omitted)*
- **adjustable**: yes: the lever angle can be re-set one tooth at a time, and the clamping force is set by how far you tighten
- **access_needed**: one side only (blind) when it screws into a tapped hole or onto a fixed stud; both sides if it tightens a through-bolt with a nut behind (Printables 86927 describes both uses)
- **materials**: Handles: zinc die casting with a blackened steel insert, powder coated or chrome plated (Elesa+Ganter GN 300); glass-fibre reinforced polyamide technopolymer with a brass or AISI 303 stainless boss or a zinc-plated or stainless steel stud and a stainless return spring (Elesa ERX); stainless steel, injection-moulded plastic, or a metal core with a plastic cover (Wikipedia de, Klemmhebel); reinforced nylon with black zinc-plated steel inserts (Innovative Components). Home-made: PLA for testing, PETG for use, with a steel screw and nuts (Printables 86927)
- **maker_difficulty**: easy to buy and fit; moderate to make: the simplest printed version uses a hex nut as the 'teeth' and needs only a screw and nuts (Printables 86927), but a spring-return serrated version needs strong teeth, a steel spring and a retaining screw

### Making it

- **processes**: 
  - off-the-shelf part: zinc die-cast, stainless or glass-fibre nylon adjustable handles with threaded stud or threaded bore
  - 3D print (FDM): printed lever with a hex-nut drive (Printables 86927) or a printed serrated ring, plus a bought screw, nut and spring *(unverified parts omitted)*
- **print_in_place**: no: the lever, insert, spring and screw are separate parts that are assembled (Printables 86927; Elesa+Ganter GN 300)
- **making_tips_3d_printing**: 1) Simplest design: give the printed lever a hex pocket that fits over a nut on the screw; lift the lever to clear the nut, swing it back, push it down to re-engage and turn (Printables 86927). A hex gives 6 positions per turn (60-degree steps); a serrated ring gives finer steps (360 / tooth count). 2) Blind hole: screw the bolt tightly into the hole with a single nut on it and let the lever turn the nut; through hole: jam two nuts together on the screw so the lever turns the screw (Printables 86927, which suggests thread locker to keep the nuts jammed). 3) Orientation: print the lever with the handle flat on the bed; PLA is fine for testing but PETG is better for use; 3 perimeters and 20% infill worked for an M4 lever (Printables 86927). 4) Serrations: generate the teeth rather than drawing them, e.g. BOSL2's hirth() makes matching face-tooth rings with chamfered tips and room in the valleys for the parts to seat (BOSL2 joiners.scad); keep teeth fairly few and large in plastic, since commercial handles use 18-28 teeth (Elesa ERX), and remember the toothed element carries all the torque (Elesa ERX). 6) Sliding fit between lever and insert: start at about 0.3 mm clearance (Prusa Knowledge Base). 7) Use a steel compression spring for the return spring, because plastic springs under constant load creep and relax (DuPont design guide, p. 36); commercial ones use stainless steel (Elesa ERX). 8) Hold the lever on with a screw and washer or a pin through the top of the insert, so the spring can't push it off (GN 300 'retaining screw'; ERX 'retaining pin'). 9) Use a metal thread (bolt, nut or heat-set insert), not a printed thread, for the clamping screw (Elesa ERX uses brass or steel bosses and steel studs). 10) Heat: PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'adjustable handle', 'adjustable clamping lever', 'adjustable clamping handle', 'clamping lever with threaded stud' (external thread) or 'with threaded bushing/bore' (internal thread), in M4-M16 or 1/4-20, 5/16-18, 3/8-16; 'ratchet lever' or 'ratchet lever knob' (woodworking suppliers, e.g. POWERTEC (brand)); catalogue families such as Elesa+Ganter (brand) GN 300 (zinc) and Elesa (brand) ERX (technopolymer), KIPP (brand) 'clamping levers' (German: Klemmhebel); stainless-steel versions for wet or food areas; 'adjustable cam lever' for a cam-action version (KIPP video). For home-made ones: socket-head screws, hex nuts, M3/M4 heat-set inserts and small steel compression springs.
- **rules_of_thumb**: 
  - Choose an adjustable lever when the space round the screw stops a full turn, or when the lever must end up in a particular position (Elesa+Ganter GN 300: 'ideal whenever parts have to be clamped in a confined space or in a particular lever position'; Elesa ERX: 'when the lever turning angle is limited owing to lack of space').
  - Lift needed to disengage the teeth ('stroke'): about 3 mm on a 22 mm lever, 3.5 mm on 30-45 mm, 4 mm on 63-92 mm and 5 mm on a 108 mm lever (Elesa+Ganter GN 300 datasheet, stroke column).
  - Step size = 360 degrees / number of teeth; Elesa ERX handles have 18 teeth (30 and 44 mm levers), 20 (63 mm), 24 (78 mm), 26 (95 mm) and 28 (108 mm), i.e. steps of about 20 to 13 degrees (Elesa ERX datasheet).
  - Durability benchmark: an Elesa ERX.78 (glass-fibre nylon) withstood more than 100,000 tightening cycles at 490 N without yielding (Elesa ERX datasheet).
  - Glass-fibre polyamide handles are rated about -30 to +130 °C (Elesa ERX datasheet); plastic handles also insulate the operator electrically and have no visible steel to rust (Elesa ERX).
  - Threaded studs on zinc GN 300 levers are steel of property class 5.8 (Elesa+Ganter GN 300), so don't expect high-strength-bolt clamping loads from them.
  - Springs that stay loaded should be steel, not plastic (DuPont General Design Principles, p. 36).
  - Printed sliding fits: start at about 0.3 mm clearance (Prusa Knowledge Base). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - Fence, featherboard, mitre-gauge stop and T-track jig locks in a woodworking shop, and the tool rests of bench grinders (POWERTEC)
  - Height, angle and position adjusters on machines, lathes and packaging lines (Innovative Components; vxb)
  - Adjusters on (office) furniture, sports and fitness equipment, power tools and medical or rehabilitation equipment (Wikipedia de, Klemmhebel)
- **when_to_use**: Use an adjustable clamping lever when you need to tighten and loosen a screw by hand, often, in a cramped spot where a knob can't be turned far or a fixed lever would hit something (Elesa+Ganter GN 300; Elesa ERX), or when you want the handle to end up pointing a particular way, e.g. tucked out of the way or all levers lined up (Elesa+Ganter GN 300). Typical uses are jigs, fences, stops, featherboards and other adjustable parts of machines and fixtures, where you want a firmer grip than a knob gives but no tools (POWERTEC; Innovative Components; vxb).
- **environment_limits**: Heat and cold: glass-fibre polyamide handles about -30 to +130 °C (Elesa ERX); printed PLA gives at about 60 °C and PETG at about 80 °C (CNC Kitchen). Corrosion and washdown: zinc die-cast handles are powder coated or chrome plated (Elesa+Ganter GN 300); stainless and all-plastic versions avoid rust (Elesa ERX; Wikipedia de, Klemmhebel). Plastic creep: a printed spring or a clamped plastic part can relax over time, so the clamp may need re-tightening (DuPont General Design Principles, p. 36).
- **safety_notes**: Plastic handles give electrical insulation to the operator (Elesa ERX). *(unverified parts omitted)*
- **common_failures**: Worn or stripped teeth between lever and insert, the part that carries all the torque (Elesa ERX); prevented by not over-tightening and choosing metal or glass-fibre handles for heavy use. Lever pops off because the retaining screw or pin has come loose (GN 300 'retaining screw'; ERX 'retaining pin'). On printed levers: the hex pocket or teeth round off, layers split if printed in a weak orientation, or a plastic spring relaxes (Printables 86927; DuPont). On nut-driven printed levers, the jammed nuts can loosen unless locked, e.g. with thread locker (Printables 86927). *(unverified parts omitted)*
- **related**: 
  - Eccentric cam lever (cam clamp, quick-release skewer): clamps with one flip of a cam, faster but with a fixed clamping range; KIPP (brand) also sells 'adjustable cam levers' (KIPP video title)
  - Toggle clamp: an over-centre linkage that snaps shut and stays shut, for fast, repeated clamping
  - Ratchet and pawl (reversible ratchet): a true one-way ratchet that clicks freely one way without lifting the handle; note that McMaster-Carr lists 'Ratchet Handles' ('quickly adjust machine components and valves in tight spaces') as a separate family from 'Adjustable Handles' ('lift and turn ... also called clamping handles')
  - Hirth joint (face spline): the same kind of meshing face teeth, used to lock two parts at a chosen angle, e.g. in camera and light grip heads
  - Servo horn and spline hub: a splined arm re-positioned one tooth at a time
  - Indexing plunger (pull-knob index pin): pull a spring-loaded pin, move, and let it snap into the next hole
  - Dog clutch: spring-loaded teeth that can be pulled out of mesh to disconnect a drive
  - Ratchet-tooth torque limiter (clicking torque-limiting knob): teeth that slip at a set torque instead of being lifted by hand

### Pictures, videos and models

- **links**: 
  - [File:01 Klemmhebel 2012.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:01_Klemmhebel_2012.jpg): A modern stainless adjustable clamping lever with its threaded insert (KIPP (brand) product photo) *(licence: CC BY-SA 3.0 (authorised by the manufacturer))*
  - [File:Klemmhebel 1952.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Klemmhebel_1952.jpg): An early (1952) clamping lever, used in the German Wikipedia article *(licence: CC BY-SA 3.0 (authorised by the manufacturer))*
  - [What Are Adjustable Handles/Clamping Levers? (Ruland Manufacturing, YouTube)](https://www.youtube.com/watch?v=a-n-kABlK50): A product expert explaining adjustable handles and clamping levers (per title and search listing) *(licence: link only (YouTube))*
  - [Only takes a minute to understand! How to Use Clamp Levers (NBK, YouTube)](https://www.youtube.com/watch?v=hMe1-pIIEH4): A short demonstration of lifting, repositioning and tightening a clamp lever (per title) *(licence: link only (YouTube))*
  - [GN 300 Adjustable Hand Levers datasheet (Elesa+Ganter, PDF)](https://www.elesa-ganter.com/siteassets/PDF/EN/GN%20300.pdf): Dimensioned drawings of adjustable hand levers, including the lift stroke, with a description of how the serrations disengage *(licence: link only (drawings copyright Elesa+Ganter))*
- **make_it_yourself**: 
  - [Ratcheting Clamp Lever - M4 (kaje, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/86927-ratcheting-clamp-lever-m4): A printable 'simpler version of commercially available clamping levers': lift the lever to clear a hex nut, reposition, push down and turn; uses an M4 x 30 mm screw and one or two nuts; Onshape CAD linked *(licence: CC0 (Public Domain))*
  - [BOSL2 joiners.scad: hirth() module (OpenSCAD library source)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad): OpenSCAD module that generates matching face-tooth (Hirth) rings with any tooth count, tooth angle, chamfer or rounding, usable for the serrations between a printed lever and its insert *(licence: BSD 2-Clause)*
- **diagram_idea**: Three-step cut-away of the lever on its screw: (1) teeth in mesh, spring pushing down, lever turning the screw; (2) lever lifted a few millimetres, teeth apart, lever swinging back while the screw stays still; (3) lever released, spring snaps the teeth back into mesh at a new angle, with a small top view marking the tooth-by-tooth parking positions.
- **sources**: 
  - https://www.elesa-ganter.com/siteassets/PDF/EN/GN%20300.pdf
  - https://www.elesa.com/siteassets/PDF/PDF_EN/ERX..pdf
  - https://de.wikipedia.org/wiki/Klemmhebel
  - https://catalog.innovative-components.com/viewitems/handles/ratchet-handles
  - https://powertecproducts.com/71075-ratchet-lever-bolt-1-4-20-5pk/
  - https://www.mcmaster.com/products/ratchet-handles/
  - https://www.kippusa.com/en-us/products/METRIC/Adjustable-handle-tension-lever-cam-lever/c/20954
  - https://vxb.com/products/adjustable-clamping-lever-set-m6-thread-push-butto
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:01_Klemmhebel_2012.jpg
  - https://commons.wikimedia.org/wiki/File:Klemmhebel_1952.jpg
  - https://www.youtube.com/watch?v=a-n-kABlK50
  - https://www.youtube.com/watch?v=hMe1-pIIEH4
  - https://www.youtube.com/watch?v=9jrhdVD3Szs
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, input_output, load, making_tips_3d_printing, play_and_precision, processes, rules_of_thumb, safety_notes, tools_needed, when_not_to_use

## 169 Spring bar (spring-loaded telescoping pin)

*quick-release & tool-free.* A tube with spring-loaded ends that pop into holes to hold a strap between two lugs, as on watch straps; quick-release versions have a small lever

### What it is

- **plain_name**: A tiny metal rod with springy ends: you squeeze it a little shorter, slip it between the two prongs on a watch case, and its ends pop into small holes to hold the strap on
- **term**: Spring bar (spring-loaded telescoping pin, watch strap pin)
- **aliases**: 
  - springbar / spring-bar
  - watch pin, strap pin or watch band pin (shop wording)
  - telescopic spring bar / double telescopic spring bar (catalogue wording)
  - double-flange spring bar (two small collars near each tip for the tool's fork to push on)
  - double-shoulder spring bar (smooth tips, for lugs drilled right through)
  - single-shoulder spring bar (sold on forums as 'shoulderless'; Ofrei says the correct name is single shoulder)
  - curved spring bar (bent for extra clearance from the case)
  - fat spring bar / 'Seiko fat bar' (thicker body and tips)
  - quick-release spring bar (QRSB), quick-change strap pin, quick-release pin (watch-strap sense)
  - Federsteg (German)
  - barrette à ressort (French, used in the patent classification)
  - lug bar (loosely; a fixed lug bar welded into the case is a different, non-removable part)
- **family**: quick-release & tool-free
- **other_families**: cord, strap, webbing & textile hardware, hinges & pivots, snap & clip fits
- **one_liner**: A small spring-loaded rod whose two ends push outwards into holes in a pair of lugs, so a strap's loop hangs on it and can be taken off again by pushing one end in, with a small forked tool or, on quick-release versions, a built-in lever.
- **complexity**: A few parts that act as one unit: a thin tube (body), a coil spring inside it, and two sliding end pins (plungers or pivots), usually with one or two small collars (flanges or shoulders) near each tip. A quick-release version adds a small lever (knob) fixed to one pin. It needs two small holes in the inner faces of the lugs and a loop or tunnel in the strap.
- **how_it_works**: A coil spring inside the tube pushes a pin out of each end, so the bar is slightly longer than the gap between the lugs (a 1941 patent describes spring bars as 'a tube or the like containing an ordinary coil spring bearing at each end against a plug projecting from the tube'). To fit it you push one tip in, either with the fork of a spring-bar tool on the flange or with a fingernail on the quick-release lever, line the bar up with the holes and let go, so both tips snap into small holes in the lugs. The strap's loop hangs on the bar and can swing round it, and the pull of the strap is carried by the tips as a sideways (shear) load. Only the spring keeps the tips in their holes, so a weak spring, a bar that is too short, or a hard knock along the bar can let it out (CNS; Smartlet).

### Finder attributes

- **job**: 
  - join and hold: holds a strap, band or bracelet between two lugs
  - let it move (turn, slide or bend): the strap pivots around the bar so it can curve round a wrist
  - lock, and release by hand: quick-release versions come out with a fingernail on a small lever, with no tool
- **motion**: rotate: the strap's loop swings freely around the bar, limited only by the case and strap. When fitting, the tips also slide in and out by about a millimetre (the bar telescopes).
- **degrees_of_freedom**: 1: the strap can only turn around the bar's axis. The bar can also spin in its holes; aBlogtoWatch notes that quick-release bars turn when the lever is used, which can wear the lug holes.
- **special_behaviour**: 
  - quick-release: quick-release versions have a small lever on one pin, so one tip can be pulled in by hand and the strap comes off in seconds without a tool (Helvetus; CNS; JS Watch). Standard bars need a small spring-bar tool. It is not self-locking: only spring force holds the tips in, so a bar whose tips are too thin for the holes can be knocked free (CNS).
- **holding_principle**: 
  - shape (form-fit): the tips sit in holes in the lugs, so the strap's pull is carried by the tips across their width (shear)
  - spring force: only the internal coil spring keeps the tips pushed into the holes; if the spring tires or the bar is the wrong size, the tips can come out (Smartlet; Oak & Oscar)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: standard bars come out with a small forked spring-bar tool (or a pin pushed through drilled lugs); quick-release bars with a lever are a tool-free quick release
- **reuse_cycles**: many times, but the spring and tips wear out: CNS suggests replacing bars every 12-18 months on a strap worn daily, aBlogtoWatch says some suggest every 6-12 months, and careful watchmakers fit new bars after any case service (Smartlet)
- **tools_needed**: Standard bar: a spring-bar tool with a forked tip (pushes on the flange from between the strap and case) and a pin tip (pushes the tip in from outside on drilled lugs); one sold by watch-tools.de has a 4 mm fork, a 0.80 mm pin and a 1.20 mm fork. Quick-release bar: none, a fingernail works the lever. Making your own lugs: a pin vice or small drill with a drill of about 0.8-1.1 mm for the lug holes.
- **seal**: none: it is an open pin joint
- **load**: Light to medium, and sized for a strap on a wrist. ISO 6425 (divers' watches) requires each spring bar or attachment point to take 200 N (about 45 lbf) in opposite directions without damage to the watch or attachment point (Wikipedia 'Diving watch'; Mecmesin). aBlogtoWatch says a good Swiss bar that fits correctly 'will easily handle over 50 pounds of pressure'. Strong against a pull across the bar (tips loaded in shear); weak against a sideways knock along the bar that pushes a tip in, and against lugs being bent apart.
- **adjustable**: no: the length is fixed to the gap between the lugs (lug width), e.g. 20 mm lugs take 20 mm bars, and bars come in 1 mm steps (Helvetus; CNS). Strap length is adjusted elsewhere, e.g. at the buckle.
- **play_and_precision**: Small but deliberate play: Oak & Oscar says tips 'should fit easily into the lug holes with a small, but perceptible amount of play'. Tips that are too thin let the strap move or click and wear the holes oval; tips that are too thick won't seat, or wedge in as a friction fit that is hard to remove (Oak & Oscar; aBlogtoWatch). It tolerates little error in lug width: bars are sold by lug width but are longer when fully extended (Ofrei: a 22 mm bar measures 27 mm end to end). It is not used to locate parts precisely.
- **access_needed**: one side only (blind): the bar is fitted from between the lugs, so the lug holes can be blind (not drilled through). Drilled (through) lugs also let you push a tip in from the outside with the pin end of a tool (Oak & Oscar; Smartlet).
- **materials**: Tube and pins usually 316L or 304L stainless steel, with a stainless or carbon spring-steel coil spring; also titanium, nickel silver (maillechort) and coated bars (aBlogtoWatch; Smartlet; Ofrei). Body (tube) diameters are mostly 1.5 mm or 1.8 mm, with 1.0-1.4, 1.6 and 2.0 mm also sold; tips are about 0.75-1.0 mm (Ofrei; watch-tools.de). It attaches leather, rubber, nylon and TPU straps and metal bracelets to lugs of steel, titanium or plastic, including resin or FDM-printed watch cases in PETG or ABS and printed TPU bands (Siraya Tech).
- **maker_difficulty**: easy: buy standard bars and design the lugs and strap loop around them; the only fiddly step is drilling the tiny (about 1 mm) lug holes accurately and square

### Making it

- **processes**: 
  - off-the-shelf part: the bar itself is always bought (it is a spring inside a precision tube)
  - 3D print (FDM): watch cases, strap adapters and TPU bands with lugs or strap loops for standard bars (several on Printables)
  - 3D print (resin): smooth, detailed watch cases and lugs (Siraya Tech recommends resin for cases)
  - CNC or small-scale metalwork: drilling the lug holes (about 0.8-1.1 mm) in metal cases, brackets or adapters
- **print_in_place**: no: the bar is a bought metal part; you print the lugs or strap with holes and fit a bar afterwards
- **making_tips_3d_printing**: 1) Design around bars you can buy: make the gap between the lugs a standard strap width such as 18, 20 or 22 mm so standard spring bars and shop-bought straps fit (Siraya Tech). 2) Size the lug holes for the bar's tips: about 0.75 mm tips on 1.5 mm bars, 0.90 mm on 1.8 mm bars and 1.00 mm on 2.0 mm bars (Ofrei), with a little clearance so the tip seats with 'a small, but perceptible amount of play' (Oak & Oscar). Holes this small don't print accurately on FDM machines: Hubs says vertical holes print undersized and recommends printing critical holes undersized and drilling them to size, and the maker of a printed Casio 18-to-20 mm strap adapter recommends 'drilling out the holes for the spring bars' and supplies versions for 1.8 and 2.0 mm bars. A pin vice with a small metric or numbered drill works. 3) Make each hole at least as deep as the tip is long; 4) Keep the lugs strong: Siraya Tech recommends case walls of at least 1.5-2 mm, warning that thinner walls can crack when spring bars are inserted, and suggests PETG or ABS at 0.1 mm layer height, 4+ walls and 30-40% infill, printed face down, for FDM cases. 5) For a printed strap, leave a round tunnel slightly bigger than the bar's body (1.5 or 1.8 mm) where the bar passes through; aBlogtoWatch advises choosing the thickest bar that will still slide through the strap's hole. A printed 20 mm band for a Samsung Galaxy Watch 4 (NinjaFlex TPU 85A) added a hole so the original quick-release pins could be reused, and notes they are 'a little hard to get in'. For quick-release bars, leave a notch on the underside of the strap so a fingernail can reach the lever (Helvetus). 6) Materials: TPU (85A-95A) for bands and PETG, ABS or resin for cases (Siraya Tech). PLA softens and deforms above about 60 °C (Prusa), so PLA lugs may loosen in a hot car. 7) After fitting, tug the strap firmly in both directions; any movement or clicking means the tips are not seated or are too thin (aBlogtoWatch; Smartlet). *(unverified parts omitted)*
- **off_the_shelf_parts**: Spring bars sold by lug width (about 6-40 mm) and body diameter (1.0, 1.3, 1.4, 1.5, 1.6, 1.8, 2.0 mm): double-flange, double-shoulder, single-shoulder (for clasps and bracelet links), curved, extra-long telescopic, 'fat' and quick-release (lever) types, in 316L stainless steel or titanium (search terms: 'spring bar', 'double flange spring bar', 'quick release spring bar', 'Federsteg'; suppliers include Ofrei, Esslinger, Jules Borel, watch-tools.de; Bergeon and Horotec (brands) make tools and bars). Assortment boxes of mixed sizes. Spring-bar tools (fork and pin tips, e.g. Bergeon 6767 series (brand)) and spring-bar bending pliers for curved bars. Straps and bands made for spring bars, and quick-release straps with the bars already fitted.
- **rules_of_thumb**: 
  - Length = lug width (the inner gap between the lugs): 20 mm lugs take 20 mm bars; most watch bars run from about 16 to 24 mm in 1 mm steps (Helvetus; CNS). The bar is longer than its listed size when extended so it stays under spring tension (Oak & Oscar; watch-tools.de).
  - Body (tube) diameter: 1.8 mm is the most common thickness, 1.5 mm is used where 1.8 mm won't pass through a bracelet's tube, and 2.0 mm bars are too thick for most bracelets and straps (Ofrei).
  - Tip (pivot) diameter follows body size: 0.75 mm tips on 1.5 mm bars, 0.90 mm on 1.8 mm, 1.00 mm on 2.0 mm, tips about 1.0 mm long (Ofrei Swiss-made listings); Beco Technic bars: 1.4 mm body with 0.75 mm tip, 1.8 mm body with 0.9 mm tip (watch-tools.de). Seiko 'fat bar' tips are about 1.1 mm, too thick for holes made for 0.90 mm tips (Oak & Oscar).
  - Tips should enter the lug holes 'with a small, but perceptible amount of play'; tips too thin wear the holes oval and can pull out, tips slightly too thick can wedge in as a friction fit (Oak & Oscar).
  - Choose the thickest body that still slides through the strap's or bracelet's hole, or that leaves room for a pass-through strap (aBlogtoWatch).
  - ISO 6425 divers' watches: each spring bar or attachment point must withstand 200 N applied in opposite directions without damage (Wikipedia 'Diving watch'; Mecmesin).
  - Printed watch cases: walls at least 1.5-2 mm; thinner walls can crack when spring bars are inserted (Siraya Tech).
  - FDM vertical holes print undersized; for critical small holes, print undersized and drill to size (Hubs FDM design guide).
  - Replace bars regularly: every 12-18 months on a strap worn daily (CNS); some suggest every 6-12 months (aBlogtoWatch).

### When to use it

- **everyday_examples**: 
  - Almost any wristwatch with a replaceable strap: two spring bars hold the strap between the lugs (Wikipedia 'Watch strap'; CNS)
  - Silicone bands on many smartwatches and fitness watches that swap with a small lever on the pin (quick-release spring bars)
  - The clasp or folding buckle of a metal watch bracelet, which uses short, thin spring bars (Ofrei)
  - 3D-printed strap adapters that let a watch take a wider or narrower strap (Printables)
- **when_to_use**: Use a spring bar when a strap, band or small hinged part must hang from two lugs, pivot freely, and be swapped now and then: watch and smartwatch straps, wearable electronics in printed cases, small instrument or tracker cases worn on a band, and strap adapters. Because watch straps are standardised around spring bars, designing lugs for them lets you use any shop-bought strap (Siraya Tech). Choose quick-release bars when straps will be changed often and nobody wants to carry a tool (Helvetus).
- **when_not_to_use**: Don't use a spring bar where the joint must never let go under a hard knock or heavy pull, or where the load is more than a wrist strap: use a screw bar, a fixed (welded or moulded-in) bar, a shoulder screw, or a ball-lock quick-release pin instead (Smartlet; CNS). Avoid it where the lugs can flex apart (thin printed lugs, soft plastics), because the bar only holds while both tips stay in their holes. For a strap that must stay on if a bar fails, add a pass-through strap that runs behind the case and through both bars (Wikipedia 'Diving watch'; CNS). For larger pins through lined-up holes, use a clevis pin with a clip, a snap pin or a ball-lock pin.
- **environment_limits**: Sweat is mildly acidic and contains chlorides, which corrode bars and lug holes over years (Smartlet); bars whose internal spring is not stainless can rust inside (aBlogtoWatch). The spring tires with use: 'Metal fatigue in the internal spring is the usual culprit' (Smartlet). Printed lugs soften with heat: PLA deforms above about 60 °C (Prusa), and PETG suits use below about 80 °C (Prusa). Vibration and knocks can work a loose-fitting bar free if its tips are too thin for the holes (CNS).
- **safety_notes**: The small spring can fire the bar across the room if the tool slips while it is compressed, and the tool can scratch the lugs (Helvetus). When a bar fails, whatever hangs from it falls: check that both tips are fully seated and tug the strap before trusting it (CNS; Smartlet). *(unverified parts omitted)*
- **common_failures**: 1) Spring fatigue: the spring loses force after thousands of cycles and the tips stop seating firmly (Smartlet); replace bars regularly. 2) Worn flanges or tips from repeated fitting reduce the part that sits in the hole (CNS). 3) Wrong size: too short or tips too thin, so the bar can be knocked out; too thick, so it wedges or won't seat (Oak & Oscar; CNS); measure the lug width and tip diameter. 4) Not fully seated: a bar forced in at an angle may look fitted but never lock, and can release weeks later (Smartlet); tug-test it. 5) Oval lug holes from thin tips or a turning quick-release bar (Oak & Oscar; aBlogtoWatch); use the correct tip size and fat bars where holes have worn. 6) Quick-release lever knobs that are only pressed on can fall off (Helvetus); the bar still works but needs a tool. 7) Corrosion from sweat (Smartlet); use 316L stainless bars. 8) Printed lugs cracking or spreading when the bar is inserted (Siraya Tech); make walls at least 1.5-2 mm.
- **related**: 
  - Fixed lug bar and screw bar: a bar welded into the case, or a bar that screws into the lugs; more secure, but the strap is hard or slow to change (Smartlet; CNS)
  - Quick-release pin (ball-lock pin): a much stronger pin pushed through lined-up holes and locked by balls until a button is pressed
  - Spring button lock (snap button): a spring-loaded button that pops through holes in telescoping tubes
  - Snap pin (split-leg push-in pin): a printable pin held in by springy legs
  - Ball detent (spring plunger): a spring-loaded ball that gives a click or light hold rather than carrying a strap
  - Indexing plunger (pull-knob index pin): a spring-loaded pin that drops into set holes and stays attached to one part
  - Clevis joint (fork-and-pin joint): the same two-lugs-and-a-pin layout at larger sizes, usually with a clevis pin and clip
  - Slide-in band connectors (e.g. Apple Watch and Cartier QuickSwitch (brands)): case-side quick-change systems that replace spring bars but only accept matching straps (Helvetus)
  - Pass-through strap (NATO-style, brand-neutral 'one-piece strap'): threads behind the case through both bars as a backup if a bar fails (Wikipedia 'Diving watch'; CNS)
  - Spring pin (roll pin): a split tube pressed into a hole as a permanent pin; it does not telescope and is not meant to be removed by hand

### Pictures, videos and models

- **links**: 
  - [Federsteg.jpg (Wikimedia Commons, by Wela49)](https://commons.wikimedia.org/wiki/File:Federsteg.jpg): A simple drawing of a spring bar 'for fastening a strap to a wristwatch', showing the tube and its two tips *(licence: Public domain)*
  - [Federstege.jpg (Wikimedia Commons, by DerHans04)](https://commons.wikimedia.org/wiki/File:Federstege.jpg): Photo of three different spring bars side by side *(licence: CC BY-SA 3.0 and GFDL 1.2+)*
  - [US 2,308,505 'Spring bar for wrist watches' (A. J. Geoffrion, filed 1941, Google Patents)](https://patents.google.com/patent/US2308505A/en): Patent drawings of a spring bar in a watch, in cross-section and as an exploded view, with the text explaining the tube, spring and plugs *(licence: US patent (public domain text and drawings))*
  - [How to Change a Strap with Traditional Spring Bars (The Watch Collectors' Club, YouTube)](https://www.youtube.com/watch?v=geJNpse5Qmg): Close-up of removing and fitting a strap with a spring-bar tool (title and channel verified via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [All About: Spring Bar Tools - The #1 First Tool for Watch Collectors (Watch off the Cuff, YouTube)](https://www.youtube.com/watch?v=SUjvCixHpyg): The fork and pin ends of spring-bar tools and how they are used on spring bars (title and channel verified via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Casio AE1200WH 18mm to 20mm Strap Adapter (DingusDoingus, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1298153-casio-ae1200wh-18mm-to-20mm-strap-adapter): Printed adapters held on by the watch's spring bars, with files for 1.8 and 2.0 mm bars; the author recommends solid infill, 0.16 mm layers and drilling out the spring-bar holes *(licence: CC BY-NC)*
  - [20mm to 22mm watch strap adapter (Guilherme Bissoli, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1728721-20mm-to-22mm-watch-strap-adapter): Adapter so a 20 mm-lug watch can take 22 mm straps; printed in ABS at 0.12 mm layers and 100% infill *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [Samsung Galaxy Watch 4 watch band (20mm) (Da9L, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/512272-samsung-galaxy-watch-4-watch-band-20mm): A printed TPU (NinjaFlex 85A) band with a hole for the watch's original quick-release spring bars; a worked example of a strap loop sized for spring bars *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [Watchband Spring Bar Remover (alex7786, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/401431-watchband-spring-bar-remover): A printed strap-changing tool that uses cut-down metal spring-bar tool tips, M5/M6 screws and a spring *(licence: CC BY)*
  - [Bergeon Watch Band Spring Bar Tool Handle (leomyeggo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/285139-bergeon-watch-band-spring-bar-tool-handle): A printed handle for Bergeon 6767 spring-bar tool tips (3 mm base) with a captive M3 square nut *(licence: CC BY-NC-SA)*
- **diagram_idea**: Side-by-side cutaways of a watch lug pair: left, the bar squeezed short with a forked tool (arrow pushing the flange inwards) and the tip clear of the hole; right, the spring pushing both tips out into the lug holes, with a strap loop hanging on the bar and curved arrows showing the strap free to swing round it.
- **sources**: 
  - https://en.wikipedia.org/wiki/Watch_strap
  - https://en.wikipedia.org/wiki/Diving_watch
  - https://www.mecmesin.com/publications/force-testing-watch-components-and-attachments
  - https://patents.google.com/patent/US2308505A/en
  - https://www.ablogtowatch.com/how-to-make-sure-you-choose-the-right-spring-bars/
  - https://cnswatchbands.com/blog/spring-bars-the-complete-guide-to-sizes-types-and-fitting/
  - https://smartlet.io/blogs/magazine/spring-bars-history-mechanics-failure-modes-watch-anatomy-2026
  - https://oakandoscar.com/blogs/the-dial/from-the-bench-springbar-specifications
  - https://www.ofrei.com/page1229.html
  - https://www.ofrei.com/page475.html
  - https://www.watch-tools.de/metal-straps/springbars.php
  - https://helvetus.com/blogs/watch-straps/quick-release-spring-bars-explained
  - https://www.jswatch.com/spring-bar
  - https://siraya.tech/blogs/news/3d-printed-watch
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://commons.wikimedia.org/wiki/File:Federsteg.jpg
  - https://commons.wikimedia.org/wiki/File:Federstege.jpg
  - https://api.printables.com/graphql/
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=geJNpse5Qmg&format=json
  - https://www.youtube.com/watch?v=geJNpse5Qmg
  - https://www.youtube.com/watch?v=SUjvCixHpyg

### Other info

- **Fields with unverified parts:** making_tips_3d_printing, safety_notes

## 170 Band flange clamp (V-band clamp, tri-clamp)

*quick-release & tool-free.* A hinged band with a V-shaped groove that wedges two flanged ends together as it is tightened, for quick-disconnect pipes, ducts and brewing kit

*Also covers:* Also covers the grooved pipe coupling (rolled grooves, a gasket and a bolted housing).

### What it is

- **plain_name**: A hinged metal ring with a V-shaped groove inside: you wrap it round two pipe ends that each have a lip, tighten one nut or flip one lever, and the V squeezes the lips together so the joint holds and seals
- **term**: V-band clamp (V-section band clamp, Marman clamp); the food and brewing version is the tri-clamp (sanitary clamp coupling)
- **aliases**: 
  - Marman clamp / Marman ring (after the Marman Products Company)
  - V-band coupling, V-retainer coupling, V-section band clamp (engineering papers)
  - clamp band / clamp band joint (spacecraft separation systems)
  - exhaust V-band, turbo V-band (cars)
  - tri-clamp, Tri-Clamp (brand), tri-clover fitting, Tri-Clover (brand)
  - sanitary fitting, sanitary clamp, hygienic clamp coupling, clamp ferrule, S-clamp fitting, 3A pipe fitting
  - ISO 2852 / DIN 32676 / BS 4825-3 / ASME BPE / SMS 3019 clamp fittings (standards the sizes follow)
  - single pin hinge clamp, double pin hinge clamp, high pressure (bolted) clamp, squeeze clamp (tri-clamp styles)
  - 13MHHM clamp (a common tri-clamp part-number series)
  - KF flange clamp / QF (Quick Flange) / Klein Flansch / NW flange clamp (vacuum-system version with a centring ring and O-ring)
  - clamp-together ducting clip (dust extraction; e.g. Nordfab Quick-Fit (brand))
  - band flange clamp, flange band clamp
  - grooved pipe coupling, grooved coupling, sleeve-clamp fitting (the grooved-pipe cousin for large steel pipe); Victaulic (brand) coupling (Wikipedia 'Victaulic'; Wikipedia 'Piping and plumbing fitting')
- **family**: quick-release & tool-free
- **other_families**: seals & pass-throughs, clamping, magnetic & friction connections, locating & alignment, over-centre, toggle & cam clamps
- **one_liner**: A ring-shaped clamp with a V-shaped groove that wraps round the lipped ends of two pipes or ducts and, as it is tightened by one nut, wing nut or lever, wedges them together face to face so they hold and seal, yet can be undone quickly.
- **complexity**: A few parts: two matching flanged ends (weld-on flanges, 'ferrules' in sanitary work) with sloped backs; a clamp band made of one or more V-section segments, often hinged; one closure (a T-bolt and nut, wing nut, or over-centre lever); and usually a seal between the faces (a flat gasket with beads for tri-clamps, an O-ring on a metal centring ring for KF vacuum flanges, or none for male/female exhaust flanges).
- **how_it_works**: Tightening the nut or lever shortens the band, so the V-shaped groove presses inwards all the way round. The inside faces of the V sit on the sloped backs of the two flanges, and like a wedge they turn that inward squeeze into a push along the pipe that draws the two faces together (Wikipedia 'Marman clamp'; NASA GD-ED-2214). With the common 40° included angle the band gives about an 8.6 to 1 gain in force before friction (Burns Stainless). Because the squeeze acts all round the joint rather than at a few bolts, it presses a gasket or O-ring evenly, and the V also centres the two ends on each other (Burns Stainless; Exoracing). A close cousin for large steel pipe is the grooved pipe coupling: instead of welded-on flanges, a groove is rolled or cut near each pipe end, a gasket is wrapped round both ends, and a coupling housing bolted round the rubber (elastomeric) gasket engages the grooves. The gasket is 'pressure-responsive': pressure inside the pipe presses its lips harder onto the pipe, and the joint comes apart by unbolting the housing (Wikipedia 'Victaulic'; Wikipedia 'Piping and plumbing fitting').

### Finder attributes

- **job**: 
  - join and hold: joins two pipes, ducts, tanks or housings end to end
  - seal it, or pass cables or fluid through: presses a gasket or O-ring (or matched metal faces) to make a leak-tight pipe joint
  - line parts up exactly: the V and male/female flanges or centring rings centre the two ends on each other
  - lock, and release by hand: wing-nut and lever versions are done up and undone by hand
- **motion**: none: it holds the two ends rigidly. Before tightening, the joint can be turned to any angle round the pipe, which helps line up pipework (Exoracing; Burns Stainless).
- **degrees_of_freedom**: 0 when tightened. When loose, 1: the two ends can be turned (clocked) round their common axis before tightening.
- **special_behaviour**: 
  - quick-release: one nut, wing nut or lever replaces a ring of bolts, so the joint comes apart quickly for cleaning or service (Burns Stainless; Get Er Brewed); some clamps have a quick-release latch, and ducting clips use an over-centre spring lever (Nordfab)
  - self-aligning or self-centring: the V wedge and male/female flanges (or a KF centring ring) centre the two ends as the clamp closes (Exoracing; Wikipedia 'Vacuum flange')
  - over-centre (snaps past a point and stays): only in lever-closed versions such as clamp-together ducting clips, which use an 'over-center, spring-lever action' with a safety pin (Nordfab)
- **holding_principle**: 
  - friction or clamping (force-fit): the band tension, turned into end pressure by the wedge, clamps the faces together; twisting and sideways slip are resisted only by friction unless the design adds lips, pins or keys (NASA GD-ED-2214)
  - shape (form-fit): the lips of the V hook behind both flanges, so the ends cannot pull apart without stretching the band
- **input_output**: not applicable
- **power**: passive (no power needed). Spacecraft separation versions are released by pyrotechnic or pin-puller devices and so need power to let go (Wikipedia 'Marman clamp').
- **removability**: tool-free quick release for wing-nut, lever and hinged sanitary clamps; removable (needs a spanner or socket) for T-bolt V-band clamps
- **reuse_cycles**: many times: made for joints that are opened often for cleaning or service (Get Er Brewed; *(unverified parts omitted)*
- **tools_needed**: None for wing-nut and lever clamps (sanitary clamps are 'typically tightened by hand', M.G. Newell); a spanner or socket for nut-and-bolt V-bands, and optionally a torque tool to avoid over-tightening (M.G. Newell). Fitting weld-on flanges or ferrules needs welding (Exoracing); ducting needs a saw and file (Nordfab). Grooved pipe couplings: a roll-grooving or cutting tool for the pipe ends, and a socket or impact wrench for the housing bolts (Wikipedia 'Piping and plumbing fitting').
- **seal**: airtight or pressure: a bead-edged gasket sits in grooves in both ferrule faces (tri-clamp), an O-ring on a metal centring ring (KF vacuum flanges), or matched male/female metal faces that usually need no gasket (exhaust V-bands) (Wikipedia 'ISO 2852' and 'Vacuum flange'; Exoracing). One catalogue lists hinged sanitary clamps at up to 50 bar working pressure for 1-1.5 in sizes at 150 °C, falling to 10 bar at 12 in, and says the rating depends on the seal (Connectors Verbindungstechnik). Clamp-together dust ducting is 'not sold as an airtight system' (Nordfab).
- **load**: Medium to heavy along the pipe (pulling the ends apart) and in bending, which is what the wedge is designed for; weaker in twisting and in sideways sliding across the joint, which rely on friction, so NASA advises lips, pins or splines to carry shear and torsion (NASA GD-ED-2214). Printed plastic versions are light-duty.
- **adjustable**: Partly: the joint can be rotated to any angle before it is tightened, and the clamp's closure can be placed wherever it is easiest to reach (Burns Stainless; Exoracing). Clamp tension is set by the nut; there is no length adjustment (a separate slip sleeve does that in ducting, Nordfab).
- **play_and_precision**: No play once tight, and it re-centres the same way every time it is refitted (male/female flanges, gasket beads or a centring ring). It tolerates very little angular or sideways misalignment: 'Do not use the clamp to drag a badly misaligned exhaust into place' (Exoracing). The V must not bottom out on the flanges before full load, so V-band makers keep an apex gap and foot clearances of about 0.062 in (Burns Stainless).
- **access_needed**: end of a tube or shaft: you need to reach around the outside of the joint to fit the band, but not inside it; the closure can be turned to face whichever side is reachable (Burns Stainless)
- **materials**: Sanitary clamps and ferrules in 304 or 316L stainless steel (M.G. Newell; Connectors); exhaust V-bands in stainless steel (Exoracing); spacecraft clamps with aluminium rings, aluminium, titanium or stainless V-segments and a stainless strap (NASA GD-ED-2214). Gaskets in silicone, EPDM, FKM (Viton (brand)), PTFE or nitrile (Buna-N) (M.G. Newell). Joins metal tube, tanks and housings; printed versions in PETG, polycarbonate-carbon fibre or annealed high-temperature PLA work for light, low-pressure jobs (Printables models).
- **maker_difficulty**: easy with bought parts: buy a matched clamp, ferrules or flanges and gasket, then tighten by hand. Moderate if the flanges must be welded to your pipe, or if you 3D-print adapters and small clamps that must seal.

### Making it

- **processes**: 
  - off-the-shelf part: clamps, ferrules, flanges and gaskets are bought as matched sets
  - sheet metal: welding weld-on flanges or ferrules to stainless tube and exhaust pipe (Exoracing)
  - 3D print (FDM): ferrule adapters, caps and small low-pressure V-band clamps (PETG, PC-CF, annealed HTPLA; Printables) *(unverified parts omitted)*
- **print_in_place**: no: the flanges, band, bolt and seal are separate parts; printed versions still use a bought bolt, nut and O-ring (Printables 'V-band clamp, quick release')
- **making_tips_3d_printing**: 1) Buy the steel clamp and gasket and print only the fitting (ferrule, cap or adapter), sticking to standard ferrule sizes: 1 in and 1.5 in sanitary fittings share a 50.5 mm flange and the same clamp, and 2 in uses 64 mm (Holland gasket chart; Connectors catalogue). A printed DN25 tri-clamp ferrule was drawn with a 50.50 mm flange; its author warns that scaling the model up 'will NOT fit to DIN-Sizes anymore' (Printables, TriClamp DN25). 3) Material: PETG has worked for ferrules and a printed V-band clamp (Printables); PETG suits use below about 80 °C and PLA softens above about 60 °C (Prusa), so keep PLA away from hot wort, steam or cleaning at temperature. Other makers used polycarbonate-carbon fibre, or high-temperature PLA annealed at 110 °C (Printables). 4) A printed V-band clamp by Rick on Printables uses PETG, an M5x50 bolt and nut, and a 31x1.5 mm NBR 70 O-ring; each tube gets two printed interfaces (one with the O-ring groove, printed at the top of the part), and three V-blocks are glued to a band, the same segmented idea as metal clamps with several V-segments (Burns Stainless). 5) If you design your own V, copy the proven geometry: a 40° included angle (20° each side), because shallower angles need very good friction control and steeper ones need much more band tension (Burns Stainless; NASA GD-ED-2214). 6) Tighten by hand and don't over-tighten: over-tightening squeezes the gasket into the bore and can distort clamps and flanges (M.G. Newell; Exoracing). *(unverified parts omitted)*
- **off_the_shelf_parts**: V-band clamp kits: a clamp plus matched male and female weld-on flanges in stainless steel, sold by pipe size (e.g. 2, 2.5, 3, 3.5, 4 in), with nut or quick-release latch (Exoracing; Burns Stainless). Sanitary (tri-clamp) parts: single pin and double pin hinged clamps with wing nuts, high-pressure bolted clamps, squeeze clamps (M.G. Newell), 13MHHM-series clamps (Holland), ferrules for weld or tube, end caps, reducers, tees, elbows and sight glasses (Get Er Brewed), gaskets in silicone, EPDM, FKM, PTFE and nitrile (M.G. Newell). Vacuum KF (QF) flanges, centring rings with O-rings (AS568 sizes) and hinged wing-nut clamps, DN10 to DN50 (Wikipedia 'Vacuum flange'). Clamp-together ducting with rolled edges and lever clips for dust extraction (Nordfab (brand)). Search terms: 'V-band clamp', 'Marman clamp', 'tri-clamp', 'sanitary clamp', 'KF clamp', 'clamp together ducting'.
- **rules_of_thumb**: 
  - V-band flange included angle is usually 40° (range 30-90°); with 40° the band gives about 8.6 to 1 axial force before friction (Burns Stainless).
  - The angle between the joint face and the flange's sloped back is usually 15-20°; less than 15° needs extremely good friction control, and larger angles need a lot more preload (NASA GD-ED-2214).
  - Strap load = wD(tanβ - µ)/(1 + µ tanβ), or wD tanβ with no friction, where w is the line load round the joint, D the ring diameter, β the flange angle and µ the friction coefficient; set the preload so the joint does not gap at the largest expected load (NASA GD-ED-2214).
  - Carry sideways shear and twisting across the joint with lips, pins or splines rather than friction (NASA GD-ED-2214).
  - Keep about 0.062 in clearance at the V's apex and feet so it does not bottom out on the flanges before full load (Burns Stainless).
  - Tri-clamp sizes: 1 in and 1.5 in fittings share a 50.5 mm (2.00 in) flange and one clamp size; 2 in uses 64 mm (2.52 in) (Holland gasket chart).
  - Hinged sanitary clamp (SH type): 1-1.5 in rated 50 bar working at 150 °C (120 bar test), 4 in 35 bar, 12 in 10 bar, depending on the seal; wing nut torque 5 Nm, hex nut 20 Nm (Connectors Verbindungstechnik catalogue).
  - Gasket temperature limits: EPDM 132 °C (briefly 150 °C); silicone, FKM and PTFE 150 °C (Connectors catalogue); nitrile ducting clamp seals 70 °C constant, 90 °C intermittent (158/194 °F, Nordfab).
  - Hand tightening is usually enough for a sanitary clamp; over-tightening pushes the gasket into the bore and under-tightening leaks; check that pressure ratings are for the whole union, not just the clamp (M.G. Newell).
  - Match clamp and flanges as a set, and don't pull misaligned pipes together with the clamp (Exoracing).
  - KF vacuum flanges come in DN10-DN50; DN10/16, DN20/25 and DN32/40 share flange dimensions and clamps (Wikipedia 'Vacuum flange').

### When to use it

- **everyday_examples**: 
  - Tri-clamp fittings on home-brewing fermenters, kettles and stills (Get Er Brewed; Printables models)
  - The V-band joint on a car's turbo outlet or exhaust downpipe (Exoracing)
  - Clip-together metal ducting on workshop dust extraction (Nordfab)
  - Flanged aircraft fuel hoses and bleed-air ducts, and the ring that holds a satellite on top of its rocket (Wikipedia 'Marman clamp')
- **when_to_use**: Use a band flange clamp when two round ends must join strongly and seal, but come apart often or quickly: brewing and food pipework that must be taken apart for cleaning (Get Er Brewed), vacuum lines (KF), dust and fume ducting (Nordfab), exhaust and turbo joints that are hot and hard to reach (Exoracing), and printed adapters that let hobby kit connect to standard sanitary fittings. It is lighter and quicker than a bolted flange (Wikipedia 'Marman clamp') and the closure can be turned to face wherever you can reach (Burns Stainless). Grooved pipe couplings do the same job on large steel pipes in buildings and plants, where they replace flanges and welding (so no hot work is needed on site), and come in flexible types that allow a little angular movement and rigid types that don't (Wikipedia 'Victaulic'; Wikipedia 'Piping and plumbing fitting').
- **when_not_to_use**: Don't use it to pull badly aligned pipes together or to hide poor routing; fix the pipework first (Exoracing). Where the joint must carry big twisting or sideways loads, add lips, pins or keys, or use a bolted flange (NASA GD-ED-2214). For joints that never come apart, welding or a bolted flange is cheaper; for small hoses, a hose clamp, push-fit or threaded fitting is simpler; for square or non-round parts, use a latch or bolted flange. *(unverified parts omitted)*
- **environment_limits**: The seal usually sets the temperature limit: EPDM 132 °C (briefly 150 °C), silicone, FKM and PTFE 150 °C (Connectors catalogue); nitrile ducting seals 70 °C constant (Nordfab). Heat cycles change the band tension because band and rings are often different metals (NASA GD-ED-2214), so re-check exhaust clamps after heat cycling (Exoracing). Printed parts: PLA softens above about 60 °C and PETG is for use below about 80 °C (Prusa). Stainless steel parts resist corrosion; NASA recommends stress-corrosion-resistant materials and avoiding galling metal pairs (NASA GD-ED-2214).
- **safety_notes**: A tensioned band stores energy: NASA warns the stored energy in large clamp straps 'is usually high enough to cause serious injury should failure occur' and recommends protective measures during installation (NASA GD-ED-2214). Exhaust V-bands get very hot. Cut duct edges are sharp (Nordfab). Lever clips on ducting should have their safety pin fitted so the handle can't spring open (Nordfab). In food and brewing use, an over-tightened gasket bulges into the pipe and traps deposits that are hard to clean (M.G. Newell). *(unverified parts omitted)*
- **common_failures**: 1) Leaks from a gasket that is not seated in both ferrule grooves, 'one of the main causes of leaks' (M.G. Newell); seat it before tightening. 2) Over-tightening pinches the gasket into the bore or distorts the clamp and flanges; under-tightening leaks (M.G. Newell; Exoracing). 3) Mismatched clamp and flange profiles from different makers, so the clamp doesn't seat (Exoracing); buy matched sets. 4) Warped or misaligned welded flanges; tack, test-fit, then finish-weld (Exoracing). 5) The V bottoming out on the flanges before full load, so the joint is loose (Burns Stainless). 6) Uneven band tension from friction, so part of the joint is under-clamped; NASA tightens in steps and taps round the band to even it out (NASA GD-ED-2214). 7) Loss of tension after heat cycles (Exoracing; NASA GD-ED-2214). 8) Wrong gasket bore for the pipe, since 1 in and 1.5 in fittings share one flange size (Holland gasket chart).
- **related**: 
  - Bolted flange: a ring of bolts clamps two flanges; stronger in shear and twist but heavier and slower to undo (Wikipedia 'Marman clamp')
  - Hose clamp: a flat band (worm-drive, ear or spring) that squeezes a hose onto a spigot; no wedge action, for low pressure (Wikipedia notes a flat-strap variety for low-pressure use)
  - Bayonet mount: push and twist to lock lugs under ledges; faster, but needs moulded lugs rather than a separate clamp
  - Quick couplers (sleeve-lock hose couplings): push-in couplings held by balls or latches, for hoses that connect and disconnect under a shut-off
  - Draw latch (over-centre latch): the same over-centre lever idea used to pull a lid or case shut
  - Threaded pipe union: a nut that pulls two pipe ends together; needs turning and room to swing a spanner
  - Conflat (CF) and ISO-K/ISO-F vacuum flanges: bolted or claw-clamped vacuum joints used above KF sizes or for ultra-high vacuum (Wikipedia 'Vacuum flange')
  - Slip joint with clamp (exhaust): pipes slide inside each other; adjustable but can leak or seize (Exoracing)
  - Cam latch (quarter-turn cam lock): a quick panel fastener, not a pipe seal

### Pictures, videos and models

- **links**: 
  - [Typical Marman Clamp System (Wikimedia Commons, from NASA guideline GD-ED-2214)](https://commons.wikimedia.org/wiki/File:Typical_Marman_Clamp_System.tif): Cross-section diagram of a Marman clamp: strap, V-segments and the two flanged rings they wedge together *(licence: Public domain (NASA))*
  - [Marman clamp flanges (Wikimedia Commons, by Andy Dingley)](https://commons.wikimedia.org/wiki/File:Marman_clamp_flanges.jpg): Photo of aerospace duct and fuel hose ends with the flanges that Marman clamps grip *(licence: CC BY-SA 3.0)*
  - [Engine research, clamp (Wikimedia Commons, Oak Ridge National Laboratory)](https://commons.wikimedia.org/wiki/File:Engine_research_(9069970928),_clamp.jpg): Close-up photo of a Marman (V-band) clamp, cropped from an Oak Ridge National Laboratory engine-research photo *(licence: CC BY 2.0)*
  - [How to Assemble a Tri-Clamp® Connection (Central States Industrial, YouTube)](https://www.youtube.com/watch?v=IUru_JmA1YU): Putting together two ferrules, a gasket and a hinged clamp (title and channel verified via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [The Tech Behind the V-Band Clamp (Burns Stainless)](https://burnsstainless.com/blogs/articles-1/the-tech-behind-the-v-band-clamp): Illustrated explanation of how band tension becomes axial load, the 40° flange angle, and one-, two-, three- and four-segment clamps *(licence: link only)*
- **make_it_yourself**: 
  - [V-band clamp, quick release (Rick, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1844054-v-band-clamp-quick-release): A printable PETG V-band clamp for joining tubes with an airtight seal: two printed tube interfaces (one with an O-ring groove), a band with three glued-on V-blocks, an M5x50 bolt and nut, and a 31x1.5 mm NBR O-ring *(licence: CC BY-SA)*
  - [TriClamp DN25 (Tomas, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/401121-triclamp-dn25): A printable DN25 tri-clamp ferrule with a 50.50 mm flange, printed in PETG and used with stainless pipes; the author prints it with the 'Seamside' on a flat PEI bed *(licence: CC BY-NC-SA)*
  - [Triclamp 1.5" adapter for Speidel Airlock (irohlfs, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1354955-triclamp-15-adapter-for-speidel-airlock): An adapter that fits a fermentation airlock onto a 1.5 in tri-clamp port on a home-brew fermenter *(licence: CC BY-NC)*
  - [Big Mouth Bubbler Tri-Clamp (JMcK, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/36103-big-mouth-bubbler-tri-clamp): A fully printed 'tri-clamp-ish' collar, adapter ring and pin that holds a fermenter lid on; shows the band-over-flange idea in plastic with no hardware *(licence: CC BY)*
- **diagram_idea**: A cross-section through the joint: two pipe ends with sloped flange backs and a gasket between them, the V-band around them; arrows show band tension going round the ring, turning into inward arrows at the V, and then into arrows along the pipe pressing the faces and gasket together.
- **sources**: 
  - https://en.wikipedia.org/wiki/Marman_clamp
  - https://upload.wikimedia.org/wikipedia/commons/e/ee/Guideline_No._GD-Ed-2214_Marman_Clamp_Systems_Design_Guidelines.pdf
  - https://commons.wikimedia.org/wiki/File:Typical_Marman_Clamp_System.tif
  - https://commons.wikimedia.org/wiki/File:Marman_clamp_flanges.jpg
  - https://commons.wikimedia.org/wiki/File:Engine_research_(9069970928),_clamp.jpg
  - https://burnsstainless.com/blogs/articles-1/the-tech-behind-the-v-band-clamp
  - https://exoracing.co.uk/blog/what-is-a-vband-clamp/
  - https://en.wikipedia.org/wiki/ISO_2852
  - https://en.wikipedia.org/wiki/Vacuum_flange
  - https://traskinstrumentation.com/pdf/app_notes/Tri-Clamp_Connection.pdf
  - https://hollandapt.com/wp-content/uploads/2022/11/1580486715Gasket-Dimensional-Chart.pdf
  - https://www.mgnewell.com/wp-content/uploads/2019/07/A-toast-to-triclamps.pdf
  - https://www.geterbrewed.com/blog/2024/07/03/tri-clamp-fittings-understanding-the-basics/
  - https://www.nordfab.com/en/technical/how-to-install-quick-fit-ducting
  - https://www.nordfab.com/en-US/Technical/nordfab-ducting-general-engineering-specification
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://api.printables.com/graphql/
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=IUru_JmA1YU&format=json
  - https://www.youtube.com/watch?v=IUru_JmA1YU
  - https://en.wikipedia.org/wiki/Victaulic
  - https://en.wikipedia.org/wiki/Piping_and_plumbing_fitting

### Other info

- **Fields with unverified parts:** making_tips_3d_printing, processes, reuse_cycles, safety_notes, when_not_to_use

## 171 Temporary sheet fastener (Cleco-type spring pin)

*quick-release & tool-free.* A spring-loaded pin fitted from one side with pliers that clamps sheets in line through a hole while they are drilled or riveted, then comes out again

### What it is

- **plain_name**: A spring-loaded pin you squeeze with special pliers, push through matching holes in two or more sheets and let go: its split tip spreads out behind the sheets and pulls them tight, keeping the holes lined up until you swap it for a rivet
- **term**: Cleco-type temporary fastener (spring-type sheet holder; Cleco (brand))
- **aliases**: 
  - Cleco / Cleko (brand name used for the whole type; from the Cleveland Pneumatic Tool Company)
  - cleco pin, cleco rivet, temporary rivet (shop wording)
  - sheet holder, sheet metal holder, reusable sheet metal fastener
  - spring-type temporary fastener, plier-operated temporary fastener
  - wing-nut Cleco and hex-nut Cleco (threaded versions that clamp harder)
  - side-grip clamp / Cleco clamp (a small clamp for edges, fitted with the same pliers)
  - Kwik-Lok (brand) temporary fastener
- **family**: quick-release & tool-free
- **other_families**: locating & alignment, clamping, magnetic & friction connections, interlocking joints & joinery
- **one_liner**: A reusable spring-loaded pin, fitted from one side with special pliers, that grips behind two or more drilled sheets and clamps them together with their holes lined up while they are drilled, fitted or riveted, then comes straight out again.
- **complexity**: A small assembly that acts as one unit: a steel cylinder body, a plunger on top, a spring, a pair of step-cut locks (jaws) and a spreader bar between them (FAA-H-8083-31B). It is used with special Cleco pliers, and comes in colour-coded sizes. Threaded versions replace the spring with a wing nut or hex nut.
- **how_it_works**: Squeezing the Cleco pliers pushes the plunger down, which pushes the two stepped jaws out of the body and off the spreader bar so they close together, thin enough to slip through the hole in the stacked sheets. When the pliers are released, the spring pulls the jaws back towards the body; the spreader bar forces them apart, so their steps catch behind the far sheet and the sheets are squeezed between the steps and the end of the body (Wikipedia 'Cleco (fastener)'; EAA). Because the jaws fill the hole snugly, the holes in every sheet stay lined up. Wing-nut and hex-nut versions pull the spreader up with a thread instead of a spring, so they can clamp much harder (Wikipedia; FAA-H-8083-31B).

### Finder attributes

- **job**: 
  - join and hold: holds sheets or parts together temporarily while they are drilled, fitted, glued, welded or riveted
  - line parts up exactly: keeps the holes in all the sheets lined up so the permanent rivets or bolts go in straight
- **motion**: none: it holds the sheets still
- **degrees_of_freedom**: 0 with two or more fitted; a single Cleco still lets the sheets swing round it, which is why several are used along a seam
- **special_behaviour**: 
  - quick-release: goes in and comes out with one squeeze of the pliers, from one side, and can be reused thousands of times on a project (EAA; AFT). It needs its pliers, so it is not tool-free.
  - self-aligning or self-centring: the snug-fitting jaws pull matching holes into line and keep them there (Wikipedia; FAA-H-8083-31B)
- **holding_principle**: 
  - spring force: the internal spring pulls the jaws back and provides the clamping force, which is small (a standard plier-operated Kwik-Lok is rated for about 25 lb, AFT)
  - shape (form-fit): the stepped jaws hook behind the far sheet and fill the hole, so the sheets can't slide or pull apart
- **input_output**: not applicable
- **power**: passive (no power needed); hex-nut versions can be driven by a pneumatic nut runner (FAA-H-8083-31B), but they hold without power
- **removability**: removable: comes out in seconds with the same Cleco pliers, leaving the hole ready for a rivet (V-Twins to V-8s)
- **reuse_cycles**: many times: they are reusable, and one builder says the installs and removals on one aircraft 'must be well into the thousands' (EAA; FAA-H-8083-31B)
- **tools_needed**: Cleco pliers (one type of plier fits all six sizes, FAA-H-8083-31B); a drill with the matching bit (e.g. #30 for 1/8 in, Aircraft Spruce); a deburring tool for the holes. Wing-nut versions are turned by hand; hex-nut versions use a spanner or nut runner (FAA-H-8083-31B).
- **seal**: none
- **load**: Light: it is for holding parts in place, not carrying loads. A standard plier-operated type clamps with about 25 lb (AFT, Kwik-Lok); wing-nut and hex-nut temporary fasteners give up to 300 lb clamping force when more is needed (FAA-H-8083-31B). The pin resists the sheets sliding over each other (shear) enough to keep holes lined up during drilling, but 'Cleco pins are temporary fasteners, not structural hardware' (V-Twins to V-8s).
- **adjustable**: No for spring types: each size grips a set range of thickness, typically 0-1/4 in (Aircraft Spruce), with long-grip types for thicker stacks (Jay-Cee: 0-1/2 in across its range; AFT: 1/4-1/2 in grip Kwik-Lok). Wing-nut types let you set the clamping force by hand from 0 to 300 lb (FAA-H-8083-31B).
- **play_and_precision**: Very little: 'Clecos should fit snugly in their holes to prevent shifting of the workpieces and maintain the alignment of fastener holes which do not have Clecos in them' (Wikipedia). It only works if the hole matches its size (an undamaged silver 3/32 in Cleco passes through a #41 hole, KITPLANES). It tolerates no more misalignment than the hole clearance.
- **access_needed**: one side only (blind): it is fitted and removed from one side, which was the point of the original 1936 patent ('applied to or removed from the work from only one side thereof') (Google Patents US 2,136,875; Wikipedia)
- **materials**: Steel body and jaws with a spring; each size has a colour-coded finish: silver (zinc or cadmium) 3/32 in, copper 1/8 in, black 5/32 in, gold (brass) 3/16 in (Wikipedia; Aircraft Spruce). Mostly used on aluminium aircraft skins; also steel car-body panels before welding (V-Twins to V-8s), and to hold glued parts such as 3D prints with printed backing plates (Printables). AFT mentions larger-footprint types for composites.
- **maker_difficulty**: easy: buy a kit of Clecos and a pair of Cleco pliers; the only skill is drilling round, correctly sized, matching holes

### Making it

- **processes**: 
  - off-the-shelf part: Clecos and their pliers are bought
  - sheet metal: aluminium aircraft skins, car-body panels and enclosures, held while being drilled, riveted or welded
  - 3D print (FDM): printed plates, jigs and holders used with bought Clecos, e.g. plates that bridge a glued seam (Printables)
  - 3D print (resin): the same plates printed in tough or flexible resin (Printables)
- **making_tips_3d_printing**: 1) Use bought Clecos and print accessories. The 'Cleco Plates for gluing seams' model (Printables) is a small plate with two holes: one Cleco goes through each hole into the part on either side of a seam, so the plate holds the two parts together while glue dries. Its author found he could fit more Clecos than clamps along a seam, that they work on round shapes and where clamps can't reach, that plates with 20 mm between hole centres still leave room for the pliers, and recommends cheap filament or a tough or flexible resin, with the Cleco size printed on each plate. 2) Holes: drill each hole to the Cleco's drill size after printing (e.g. #40 for 3/32 in, #30 for 1/8 in, #20 for 5/32 in, #10 for 3/16 in, Aircraft Spruce), because FDM holes print undersized and Hubs recommends printing critical holes undersized and drilling them. A loose hole defeats the point: Clecos must fit snugly (Wikipedia). 3) Keep the whole stack within the Cleco's grip range, typically 0-1/4 in (Aircraft Spruce), or buy long-grip types. 4) The spring force is small (about 25 lb for a standard type, AFT), so it clamps thin parts together but won't pull a warped print flat; for more force use wing-nut Clecos (FAA-H-8083-31B). 6) Printed storage: Gridfinity bins and holders for Clecos, side-grip clamps and Cleco pliers are available (Printables). *(unverified parts omitted)*
- **off_the_shelf_parts**: Spring-type Clecos in 3/32, 1/8, 5/32, 3/16, 1/4 and 3/8 in (FAA-H-8083-31B), also metric (e.g. 3.2 and 4.8 mm, Wikipedia), in standard, long, extra-long, mini and heavy-duty extended-grip series (US Industrial Tool); wing-nut and hex-nut temporary fasteners (FAA-H-8083-31B); side-grip clamps (Cleco clamps), e.g. 1/2 in and 1 in reach (Printables holder; Aircraft Spruce); Cleco pliers; pneumatic Cleco installers and nut runners (FAA-H-8083-31B); Kwik-Lok (brand) plier-operated, miniature and long-grip fasteners (AFT). Search terms: 'cleco fastener', 'sheet holder', 'temporary fastener', 'side grip clamp', 'cleco pliers'.
- **rules_of_thumb**: 
  - Six common sizes: 3/32, 1/8, 5/32, 3/16, 1/4 and 3/8 in, with the size stamped on the fastener and colour coding; one type of plier fits all six (FAA-H-8083-31B, p. 4-29).
  - Drill sizes and colours: 3/32 in silver (cadmium) #40; 1/8 in copper #30; 5/32 in black #20; 3/16 in brass #10; 1/4 in copper, 1/4 in drill; standard material thickness 0-1/4 in (Aircraft Spruce K-series sheet holders).
  - Clecos should fit snugly in their holes to prevent shifting and keep other holes aligned (Wikipedia).
  - Pilot holes: #40 for finished holes over 3/32 in, #41 for 3/32 in fasteners; an undamaged silver Cleco passes through a #41 hole (KITPLANES).
  - While match drilling, keep a Cleco or clamp next to each hole being drilled and a Cleco in every other hole (KITPLANES).
  - Spring Clecos clamp lightly (about 25 lb for a standard plier-operated Kwik-Lok, AFT); use wing-nut or hex-nut temporary fasteners, up to 300 lb, when more clamp-up is needed (FAA-H-8083-31B, p. 4-29).
  - Stacks thicker than about 3/16 in don't reliably guide a drill through existing pilot holes; keep the drill square (KITPLANES).
  - When drilling dissimilar metals, drill through the hardest material first so the softer holes don't wallow out (KITPLANES).
  - For hand-drilling titanium, clamp parts tightly with temporary bolts, Cleco clamps or tooling clamps as close to the drilling as possible (FAA-H-8083-31B, p. 4-85).
  - Printed Cleco plates with 20 mm between hole centres leave room for the pliers (Printables, 'Cleco Plates for gluing seams').

### When to use it

- **everyday_examples**: 
  - Rows of copper and silver pins studding the aluminium skin of a kit aeroplane under construction (Wikipedia photo; EAA)
  - A car restorer pinning a new steel body panel in place before welding it (V-Twins to V-8s)
  - A repair patch (doubler) held on an aircraft skin with Clecos before it is riveted (FAA-H-8083-31B)
  - A maker holding a glued seam together with 3D-printed Cleco plates (Printables)
- **when_to_use**: Use Clecos whenever parts with matching holes must be held together, lined up exactly, and taken apart again before final assembly: riveted sheet-metal work (aircraft, enclosures, trailers, car panels), trial-fitting parts before deburring and riveting (EAA), holding panels flat and in line before welding (V-Twins to V-8s), and clamping glued seams on round or awkward shapes where clamps can't reach (Printables). They are especially useful when you can only reach one side of the work (Wikipedia).
- **when_not_to_use**: Don't use them as permanent or load-carrying fasteners: swap each for a rivet, bolt or screw (V-Twins to V-8s). Where there are no holes, or holes aren't allowed, use side-grip clamps or C-clamps (AFT; FAA-H-8083-31B). Where you need strong clamping (thick or stiff parts, sealant squeeze-out), use wing-nut or hex-nut temporary fasteners or temporary bolts (FAA-H-8083-31B). For a quick-release joint in a finished product, use a ball-lock quick-release pin, snap pin or quarter-turn fastener instead. *(unverified parts omitted)*
- **environment_limits**: A workshop tool: no special limits found. The springs weaken with age and heavy use, so weak ones should be sorted out (a buyer review on Aircraft Spruce reports about 1 in 100 with a weak spring; low-quality source). *(unverified parts omitted)*
- **safety_notes**: Freshly drilled holes and cut sheet edges have sharp burrs; deburr them (EAA; KITPLANES). *(unverified parts omitted)*
- **common_failures**: 1) Wrong-size or oversize holes: the Cleco is loose, the sheets shift and the other holes go out of line (Wikipedia; KITPLANES); drill to the matching size and keep the drill square. 2) Too few Clecos while drilling, so parts creep; put one in every other hole (KITPLANES). 3) Stack thicker than the grip range, so the jaws can't catch (Aircraft Spruce). 4) Burrs left by drilling: builders take the parts apart, deburr the holes and edges, then put them back together with Clecos before riveting (EAA). 5) Weak springs, which clamp poorly (Aircraft Spruce buyer review; V-Twins to V-8s advises avoiding ultra-cheap kits). 6) Too little clamping force for the job (FAA-H-8083-31B); use wing-nut Clecos. *(unverified parts omitted)*
- **related**: 
  - Blind rivet (pop rivet): the permanent one-sided fastener that usually replaces the Cleco
  - Temporary bolt and nut: the older method; clamps harder but needs a person or tool on both sides (EAA; Google Patents US 2,136,875)
  - Wing-nut and hex-nut temporary fasteners: Cleco-type pins pulled tight by a thread for up to 300 lb clamping force (FAA-H-8083-31B)
  - Side-grip clamp (Cleco clamp): a small spring clamp for edges where there are no holes (AFT; Wikipedia)
  - C-clamp (G-clamp): general clamping, but needs room on both sides and can mark soft metal (FAA-H-8083-31B)
  - Quick-release pin (ball-lock pin): a permanent-use pin that locks with balls and releases with a button
  - Snap pin (split-leg push-in pin): a printable pin held in by springy legs
  - Locating pins (dowels): fixed pins that line parts up but don't clamp them together
  - Spring bar: another small spring-loaded pin, but it telescopes between lugs rather than gripping behind sheets

### Pictures, videos and models

- **links**: 
  - [Cleco fastener extended (Wikimedia Commons, by Thermofan)](https://commons.wikimedia.org/wiki/File:Cleco_fastener_extended.jpg): A Cleco with its jaws pushed out next to one with its jaws retracted, showing the stepped jaws and the colour coding *(licence: CC0 1.0 (public domain dedication))*
  - [Cleco Tool for fitting temporary fasteners (Wikimedia Commons, by Thermofan)](https://commons.wikimedia.org/wiki/File:Cleco_Tool_for_fitting_temporary_fasteners.jpg): The special pliers used to fit and remove Clecos *(licence: CC0 1.0 (public domain dedication))*
  - [Cleko Fasteners on RV-12 Wing (Wikimedia Commons, by FlugKerl2)](https://commons.wikimedia.org/wiki/File:Cleko.jpg): Rows of Clecos holding the skin of a kit-aircraft wing during assembly *(licence: CC BY-SA 4.0)*
  - [Cleco fasteners how they work (Matthys Quality Equipment, YouTube)](https://www.youtube.com/watch?v=Z73rnbUEdN8): How a Cleco and its pliers work (title and channel verified via YouTube oEmbed; content not reviewed in detail) *(licence: link only (standard YouTube licence))*
  - [What are Cleco Fasteners And How To Use Them (Omega Technologies, YouTube)](https://www.youtube.com/watch?v=thBy5z0Kanc): A tool supplier's explanation of Cleco types and how to fit them (title and channel verified via YouTube oEmbed; content not reviewed in detail) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Cleco Plates for gluing seams (Weird_Stealth, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/474194-cleco-plates-for-gluing-seams): Small printed plates with two Cleco holes that bridge a seam, so bought Clecos can hold two glued parts together; sized by hole-centre distance (20 mm recommended) and labelled with the Cleco size *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [Gridfinity Holders for Cleco Fasteners (Vase Mode) (Netpackrat, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1049736-gridfinity-holders-for-cleco-fasteners-vase-mode): Gridfinity storage holders for spring Clecos, printed in vase mode, with 6x3 mm magnet pockets *(licence: CC BY-NC-SA)*
  - [Cleco Holder (jeffrey892, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1103509-cleco-holder): A lidded toolbox holder for 40 Clecos of various sizes *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [Cleco Side Grip Clamp holder (mfraz74, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/272245-cleco-side-grip-clamp-holder): Plates holding 1/2 in and 1 in side-grip clamps, with an editable FreeCAD file *(licence: CC BY)*
- **diagram_idea**: Three-step cutaway of a Cleco in two drilled sheets: (1) pliers pressing the plunger, jaws pushed out and closed together above the hole; (2) jaws slipped through both sheets; (3) pliers released, spring pulling the jaws back over the spreader bar so they open and their steps clamp the sheets against the body, with arrows showing the pull and the holes lined up.
- **sources**: 
  - https://en.wikipedia.org/wiki/Cleco_(fastener)
  - https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-31B_Aviation_Maintenance_Technician_Handbook.pdf
  - https://www.aircraftsystemstech.com/p/sheet-metal-holding-devices.html?m=1
  - https://www.aircraftspruce.com/catalog/topages/sheetholder.php
  - https://aft.systems/a-guide-to-using-temporary-fasteners/
  - https://inspire.eaa.org/2018/12/12/i-really-like-clecos/
  - https://patents.google.com/patent/US2136875A/en
  - https://www.kitplanes.com/drilling-holes-for-fasteners/
  - https://vtwinstov8s.com/blogs/tools-and-tips/what-cleco-pins-are-and-why-pros-use-them-for-sheet-metal-work
  - https://www.rivetsonline.com/rivets/cleco-fasteners-temporary-rivetsside-grips
  - https://www.ustool.com/sheet-metal-tools/cleco/fasteners.html
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://commons.wikimedia.org/wiki/File:Cleco_fastener_extended.jpg
  - https://commons.wikimedia.org/wiki/File:Cleco_Tool_for_fitting_temporary_fasteners.jpg
  - https://commons.wikimedia.org/wiki/File:Cleko.jpg
  - https://api.printables.com/graphql/
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=Z73rnbUEdN8&format=json
  - https://www.youtube.com/watch?v=Z73rnbUEdN8
  - https://www.youtube.com/watch?v=thBy5z0Kanc

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, making_tips_3d_printing, print_in_place, safety_notes, when_not_to_use

## 261 Tool-free fasteners (thumbscrew, wing nut, hitch pin and R-clip)

*quick-release & tool-free.* Ordinary fasteners shaped to be done up by hand, as a simple quick-release baseline

### What it is

- **plain_name**: Ordinary screws, nuts and pins made to be done up and undone with your fingers: a screw with a big ridged head, a nut with two 'wings' to twist, and a pin pushed through holes and held by a springy wire clip shaped like an R
- **term**: Tool-free (hand-operated) fasteners: thumbscrew, wing nut, hitch pin and R-clip
- **aliases**: 
  - thumbscrew, thumb screw, knurled thumb screw (high head DIN 464, low head DIN 653; ASME B18.6.8 types A and B) (Wikipedia 'List of screw drives'; AIMS Industrial thumb screw guide)
  - wing nut, wingnut or butterfly nut (ASME B18.6.9 types A-D); wing screw or wing bolt (DIN 316) (Wikipedia 'Wingnut (hardware)'; Wikimedia Commons 'DIN 316 M5x30 Winged Screw')
  - knurled nut or thumb nut; clamping knob, star knob, T-knob or T-head screw (DIN 6336) (Wikipedia 'Knurled nut'; AIMS Industrial; Elesa 'Clamping knobs and thumb screws')
  - captive thumb screw or captive panel screw: a thumbscrew that stays attached to the panel (AIMS Industrial)
  - PC case thumbscrew (#6-32 UNC); D-sub connector jackscrew (#4-40 UNC) (Wikipedia 'Computer case screws')
  - hitch pin, clevis pin with a cross-hole; linch pin or lynch pin (a pin with a spring ring) (McMaster-Carr; Wikipedia 'Linchpin', 'Clevis fastener')
  - R-clip, R-pin, R-key, hairpin cotter (pin), hitch pin clip, bridge pin, spring cotter (pin); single- or double-coil (DIN 11024) (Wikipedia 'R-clip'; Aspen DIN 11024 sheet)
  - RC car 'body clip' (a small R-clip) (Wikipedia 'R-clip')
- **family**: quick-release & tool-free
- **other_families**: clamping, magnetic & friction connections, hinges & pivots, sliding, telescoping & linear motion
- **one_liner**: Everyday fasteners with a shape your fingers can grip, such as a ridged or winged head, a knob, or a pin with a springy wire clip, so that a joint can be done up, adjusted and taken apart again and again without any tools.
- **complexity**: A few parts. Thumbscrew or wing screw: a single screw with a large knurled, flat or winged head, used with a tapped hole or nut. Wing nut or knob: one nut (or a plastic knob with a metal nut or stud moulded in) on an ordinary bolt. Hitch pin and R-clip: a plain pin with a head and a cross-hole near its tip, plus a spring-steel R-shaped wire clip; a linch pin has a spring ring on a hinge instead of a separate clip (Wikipedia 'R-clip', 'Linchpin', 'Wingnut (hardware)', 'List of screw drives').
- **how_it_works**: The threaded ones work exactly like a normal screw or nut. Turning them pulls the parts together and friction in the thread holds them, but the head is made big, ridged or winged so that your fingers can turn it; the wings act as levers that turn finger force into more twisting force (Wikipedia 'Wingnut (hardware)'; AIMS Industrial). A hitch pin works by shape instead: it passes through holes in both parts, so they can't separate. The R-clip's straight leg goes through the hole near the pin's tip, and its curved 'belly' springs round the outside of the pin and grips it, so the clip can't fall out; the angled end helps it slide on (Wikipedia 'R-clip').

### Finder attributes

- **job**: 
  - lock, and release by hand: joins parts that must be opened, adjusted or removed often without a tool, such as covers, guards, jigs, stands and attachments (AIMS Industrial; Wikipedia 'Knurled nut')
  - join and hold: an ordinary clamped joint (thumbscrew, wing nut) or pinned joint (hitch pin) (Wikipedia 'Wingnut (hardware)', 'R-clip')
  - let it move (turn, slide or bend): a hitch or clevis pin is often the pivot of a linkage that can be pulled out by hand; a loosened thumbscrew or wing nut lets a stand or slide be moved and re-clamped (Wikipedia 'Clevis fastener', 'Wingnut (hardware)')
- **motion**: none when done up. A hitch pin or clevis pin used as a pivot gives 'rotate' about the pin; a slot with a thumbscrew or wing nut gives 'slide' while it is loosened.
- **degrees_of_freedom**: 0 when a thumbscrew or wing nut is tightened. 1 (rotation about the pin) when a hitch pin or clevis pin forms a pivot, as in a clevis joint (Wikipedia 'Clevis fastener').
- **special_behaviour**: 
  - quick-release: done up and undone by hand in seconds, with no tool needed and nothing to lose if the fastener is captive or tethered (a double-coil R-clip lets you attach a tether cord) (Wikipedia 'R-clip'; Aspen DIN 11024 sheet; AIMS Industrial)
  - none of the cleverer behaviours: thumbscrews and wing nuts are ordinary threaded fasteners, only shaped for the hand
- **holding_principle**: 
  - friction or clamping (force-fit): thumbscrews, wing nuts and knobs clamp the parts with the bolt's tension, and thread friction holds them (Wikipedia 'Wingnut (hardware)')
  - shape (the parts interlock; form-fit): the hitch pin passes through holes in both parts (Wikipedia 'R-clip', 'Clevis fastener')
  - spring force (a spring or springy part presses it in place): the R-clip's springy belly grips the pin so the clip stays in its hole; a linch pin's spring ring snaps down over the pin's end (Wikipedia 'R-clip'; McMaster-Carr 'Linch Pins')
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release
- **reuse_cycles**: many times: that is their purpose. R-clips 'are easier to remove and are re-usable' compared with split pins (Wikipedia 'R-clip'), and knurled fasteners are used 'where the fasteners will be removed regularly' (Wikipedia 'Knurled nut'). Printed plastic threads and knobs wear faster than metal ones (Hubs).
- **tools_needed**: none. Some knurled nuts and thumbscrews also have a screwdriver slot, so a tool can be used where vibration is a concern or extra tightness is needed (Wikipedia 'Knurled nut', 'List of screw drives').
- **seal**: none
- **load**: Thumbscrews and wing nuts: light to medium clamping only, because your hand limits the torque. Thumbscrews 'are usually not found in structural applications' (Wikipedia 'List of screw drives'). Hitch and clevis pins: strong in shear (sideways across the pin); a vehicle hitch pin carries towing loads, while the R-clip carries almost no load and only stops the pin sliding out (McMaster-Carr 'Hitch Pins'; Wikipedia 'R-clip'). A bolt is a poor substitute for a clevis pin in shear: its strength is set by the smaller diameter at the bottom of its thread (Wikipedia 'Clevis fastener'). *(unverified parts omitted)*
- **adjustable**: yes for thumbscrews, wing nuts and knobs: they clamp at any position along a slot or tube, e.g. drum and cymbal stands (Wikipedia 'Wingnut (hardware)'). Hitch pins: no, or only in steps if the parts have a row of holes.
- **play_and_precision**: Thumbscrew or wing-nut clamps have no play once tight, but they only return to the same position if something else locates the parts; drum kits use a separate 'memory' collar so the stand goes back to the same setting (Wikipedia 'Wingnut (hardware)'). Hitch and clevis pins have noticeable play in their holes; they 'should be closely fitted to the holes in the clevis to limit wear' (Wikipedia 'Clevis fastener').
- **access_needed**: one side only (blind) for a thumbscrew or wing screw into a tapped hole or captive nut; both sides for a wing nut on a loose bolt (unless the bolt head is held captive) and for a hitch pin, whose clip goes on the far side.
- **materials**: Knobs, T-handles and wing nuts are often moulded technopolymer (engineering plastic) with a steel insert or stud, or aluminium, cast iron or A4 stainless steel (AIMS Industrial; Elesa; JW Winco). R-clips are hardened spring-steel wire, harder than split-pin wire, also sold in A4 stainless (Wikipedia 'R-clip'; Aspen DIN 11024 sheet). They join metal, wood and plastic parts; 3D-printed knobs and wings are usually PLA or PETG around a metal nut or bolt head (Printables knob models). *(unverified parts omitted)*
- **maker_difficulty**: easy: buy standard parts, or print a knob or wing that grips an ordinary nut or bolt head (Printables and Thingiverse adapter models).

### Making it

- **processes**: 
  - off-the-shelf part: thumbscrews, wing nuts, knobs, hitch pins and R-clips are cheap catalogue parts
  - 3D print (FDM): knobs, star grips and wing adapters that fit over a standard hex nut, hex bolt head or socket-cap screw; printed wing nuts with printed threads for M5 and larger (Printables 'Screw knob for metric hex and Allen bolt and nuts'; Printables 'Nut and Bolt Adapters'; Hubs)
  - woodwork: bolts through jigs, fences and workbench fixtures clamped with printed or bought knobs and wing nuts (Printables knob model description: 'to mount things like milling fences to my workbench')
  - CNC: turned and knurled thumbscrews and pins, drilled cross-holes for R-clips
- **print_in_place**: partly: a printed knob, star grip or wing adapter prints as one piece but needs a metal nut or bolt head pressed or glued in (Printables knob and adapter models). Fully printed wing nuts and thumbscrews with printed threads are possible, but Hubs advises avoiding FDM-printed threads smaller than M5.
- **making_tips_3d_printing**: 1) Don't print the thread if you can avoid it: print a knob, star grip, T-handle or wing that grips a standard metal hex nut, hex bolt head or socket-cap screw head, so the metal carries the thread (Printables models by trses, bryanpryor and Asa; Thingiverse 'Instant Wingnut Adapter'). Hubs advises against FDM-printed threads smaller than M5; if you do print threads, screw the fastener in and out several times to clean them (Hubs threaded fasteners guide). 2) Pocket fit: Hubs suggests a 0.2 mm offset around the nut (0.1 mm each side) for a loose fit, adjusted by test prints; bryanpryor's parametric knob uses a slight press fit for a 1/4-20 nut or bolt head, with optional glue, and recommends 'at least 4 walls to get more strength under the bolt head/nut' (Hubs; Printables 'Parametric Knob for Nuts'). 3) Leave enough plastic round the corners of the hex pocket: trses rotated the hex cut-out by 30° in his knob 'for better wall thickness' (Printables 'Screw knob for metric hex and Allen bolt and nuts'). 4) Make it big: torque grows with the grip radius, and wings act as levers (AIMS Industrial), so a 50 mm knob gives much more clamping force than a small knurled head; bryanpryor's base knob is 50 mm with a 25 mm version for tight spaces (Printables). 5) Print knobs flat, with the pocket opening facing up or down so no supports are needed; Asa's adapters need 'no supports' and the nut key is printed upside down (Printables 'Nut and Bolt Adapters'). Standard R-clips (DIN 11024) start at pins of about 9 mm diameter (Fixawell DIN 11024 table), so for small printed pins use a split pin, a snap pin or a printed clip instead. 7) A hand-tight clamp on printed parts slowly loses force as the plastic creeps under the nut (FilamentSpecs creep guide); use a large washer and re-tighten from time to time. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search catalogues for: 'knurled thumb screw' (DIN 464 high head, DIN 653 low head), 'wing screw' or 'wing bolt' (DIN 316), 'wing nut' or 'butterfly nut' (ASME B18.6.9), 'knurled nut' or 'thumb nut', 'clamping knob', 'star knob', 'lobe knob', 'T-knob' or 'T-head screw' (DIN 6336), 'captive thumb screw' or 'captive panel screw', 'PC case thumbscrew 6-32' (Wikipedia; AIMS Industrial; Elesa); 'hitch pin' and 'clevis pin' (with a cross-hole), 'linch pin', 'R-clip', 'hairpin cotter pin', 'hitch pin clip', 'spring cotter pin DIN 11024' (single or double coil), and 'quick-release pin' (ball-lock, a separate entry) (Wikipedia 'R-clip'; McMaster-Carr 'Hitch Pins'; Aspen DIN 11024 sheet). Torque-limiting knobs, knurled knobs and wing nuts that 'release after reaching the desired torque' are also sold (JW Winco 'Torque Limiting Knobs'; Elesa 'Clamping knobs and thumb screws').
- **rules_of_thumb**: 
  - Bigger grip, more torque: wings and knobs are lever arms, so choose a wing screw or a large knob rather than a small knurled head when you need more clamping force, or when people wear gloves (AIMS Industrial).
  - R-clip size (DIN 11024) is the diameter of the cross-hole in the pin: size 2.5 (2.25 mm wire) fits pins of 9-11.2 mm, size 3.2 (2.8 mm wire) 11.2-14 mm, size 4 (3.6 mm wire) 14-20 mm, size 5 (4.5 mm wire) 20-26 mm, size 6.3 (5.6 mm wire) 26-34 mm (Fixawell and Boltsfastener DIN 11024 tables; Aspen DIN 11024 sheet).
  - Fit clevis and hitch pins closely in their holes to limit wear; use a real clevis or hitch pin, not a bolt, where the load is sideways across the pin (Wikipedia 'Clevis fastener').
  - Printed threads: avoid FDM-printed threads below M5, and use a metal nut, insert or cut thread instead (Hubs).
  - Nut pocket in a printed knob: start with a 0.2 mm offset for a loose fit (Hubs), or a slight press fit plus at least 4 walls (Printables 'Parametric Knob for Nuts'). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - The ridged thumbscrews holding the side panel of a desktop PC, and the small thumbscrews on each side of a VGA or serial cable plug (Wikipedia 'Computer case screws')
  - Wing nuts and wing bolts on drum-kit and cymbal stands (Wikipedia 'Wingnut (hardware)'), and on old bicycle wheels before quick-release skewers (Wikipedia, citing Sheldon Brown)
  - The pin and R-clip that hold a trailer's tow-bar insert in the car's hitch receiver, or an implement on a tractor's three-point hitch (Wikipedia 'R-clip', 'Linchpin')
  - The knurled levelling knobs under the heated bed of many 3D printers (AIMS Industrial; Thingiverse bed-levelling thumbwheels)
- **when_to_use**: Use tool-free fasteners on anything opened, adjusted or taken apart often, where hunting for a tool would slow you down: access covers and guards, jigs and fixtures, fences on a workbench, lamp, camera, music and drum stands, printer bed levelling, and attachments that are swapped over (AIMS Industrial; Wikipedia 'Knurled nut', 'Wingnut (hardware)'). Knurled heads also discourage over-tightening and stripping (Wikipedia 'Knurled nut'). Choose wing screws or big knobs where people wear gloves or need more clamping force (AIMS Industrial). Use a hitch or clevis pin with an R-clip for a strong pinned joint or pivot that can be pulled apart by hand, e.g. a trailer insert, a removable linkage or a tow bar (Wikipedia 'R-clip').
- **when_not_to_use**: Don't use them for structural or highly loaded bolted joints: hand torque is far below a bolt's normal tightening torque, so use spanner-tightened bolts (Wikipedia 'List of screw drives'; AIMS Industrial). Avoid plain thumbscrews and wing nuts where there is strong vibration: they can back off; use a locknut, a thumbscrew that also takes a screwdriver, or a quarter-turn or cam-lock fastener (Wikipedia 'Knurled nut'; see Thread-locking hardware). If the joint must be opened in one quick movement, a cam lever (quick-release skewer), bayonet, quarter-turn fastener or ball-lock quick-release pin is faster than several turns of a thread; the quick-release skewer was invented because a racer's frozen fingers couldn't undo his wing nuts (Wikipedia 'Wingnut (hardware)', citing Sheldon Brown). Where brush or clothing can snag it, a hairpin R-clip can be pulled out; a properly fitted and bent split pin would not pull out (TractorByNet forum). *(unverified parts omitted)*
- **environment_limits**: Stainless R-clips (A4) suit wet and marine use (Aspen DIN 11024 sheet). Cold or gloved hands can't grip small knurled heads; wings help (AIMS Industrial; Wikipedia 'Wingnut (hardware)'). Vibration loosens hand-tight threads (Wikipedia 'Knurled nut'). *(unverified parts omitted)*
- **safety_notes**: A hand-tight clamp can slip under a heavy or shock load, so don't rely on thumbscrews or wing nuts to hold anything overhead or to carry people. *(unverified parts omitted)*
- **common_failures**: 1) Works loose under vibration because hand torque gives little clamp force (Wikipedia 'Knurled nut'; AIMS Industrial). 2) Printed knob spins on its nut or bolt head because the pocket is too loose or the walls too thin (Printables knob notes; Hubs). 3) Printed threads strip or wear, especially below M5 (Hubs). 5) R-clip or linch pin lost, leaving the pin free to slide out; tie it on with a cord through a double-coil clip (Wikipedia 'R-clip'; Aspen DIN 11024 sheet). 6) Pin holes worn oval because the pin is a loose fit (Wikipedia 'Clevis fastener'). 7) Corroded or frozen wing nuts that fingers can't turn (Wikipedia 'Wingnut (hardware)'). *(unverified parts omitted)*
- **related**: 
  - Eccentric cam lever (cam clamp, quick-release skewer): clamps with a flick of a lever instead of several turns; what replaced wing nuts on bicycle wheels
  - Quick-release pin (ball-lock pin): a pin that locks itself with spring balls and releases with a button, so there is no separate clip to lose
  - Quarter-turn fastener (Dzus-type) and cam latch (quarter-turn cam lock): panel fasteners that open with a quarter turn
  - Bayonet mount (push-and-twist lock): tool-free joining with a push and a short twist
  - Thread-locking hardware (nylon-insert nut, lock washer, split pin): the split pin is the tool-fitted, single-use cousin of the R-clip
  - Clevis joint (fork-and-pin joint): the pivot that a hitch or clevis pin with an R-clip usually forms
  - Indexing plunger (pull-knob index pin) and spring button lock: spring pins that drop into set holes, for adjustable positions without a separate pin and clip
  - Toggle clamp: a lever clamp that gives much more clamping force than a hand-turned knob, for jigs and fixtures
  - Captive nut pocket (nut trap) and heat-set threaded insert: ways to give a 3D print a metal thread for a thumbscrew

### Pictures, videos and models

- **links**: 
  - [Wingnut-hardware.jpg (Muke, cropped by Xoristzatziki, Wikimedia Commons, 2010)](https://commons.wikimedia.org/wiki/File:Wingnut-hardware.jpg): Photo of three wing nuts of different styles *(licence: Public domain)*
  - [HitchPin.jpg (Chris Cross, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:HitchPin.jpg): A hitch pin with an R-clip fitted through the cross-hole near its tip *(licence: Public domain)*
  - [R-Clip.jpg (Chris Cross, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:R-Clip.jpg): Close-up of an R-clip (hairpin cotter), showing the straight leg and the curved 'belly' that grips the pin *(licence: Public domain)*
  - [Thumbscrews pc.jpg (Bloodshedder, Wikimedia Commons, 2006)](https://commons.wikimedia.org/wiki/File:Thumbscrews_pc.jpg): Knurled thumbscrews from an ATX PC case *(licence: CC BY-SA 2.5)*
  - [DIN 316 M5x30 Winged Screw Flügelschraube.jpg (Phiarc, Wikimedia Commons, 2022)](https://commons.wikimedia.org/wiki/File:DIN_316_M5x30_Winged_Screw_Fl%C3%BCgelschraube.jpg): Photo of a stainless-steel M5 x 30 wing screw (DIN 316) *(licence: CC BY-SA 4.0)*
- **make_it_yourself**: 
  - [Screw knob for metric hex and Allen bolt and nuts - knurled and star shape parametric (trses, Printables; URL from search results, page not opened; details read through the Printables API)](https://www.printables.com/model/1116311-screw-knob-for-metric-hex-and-allen-bolt-and-nuts): Parametric OpenSCAD star and knurled knobs for ISO 4017 hex screws, ISO 4762 socket-cap screws and ISO 4032 hex nuts, M3 to M16, with Customizer settings *(licence: CC BY-NC-SA (Creative Commons Attribution-NonCommercial-ShareAlike))*
  - [Nut and Bolt Adapters (wing nut, thumb screw, nut ring) Metric Sizes (Asa, Printables; URL from search results, page not opened; details read through the Printables API)](https://www.printables.com/model/503494-nut-and-bolt-adapters-wing-nut-thumb-screw-nut-rin): Printable adapters, M3 to M12, that turn ordinary nuts and bolts into hand-tightened wing nuts and thumbscrews; no supports needed *(licence: CC BY (Creative Commons Attribution))*
  - [Parametric Knob for Nuts, Threaded Knob (Fusion 360) (bryanpryor, Printables; URL from Printables API, page not opened)](https://www.printables.com/model/625673-parametric-knob-for-nuts-threaded-knob-fusion-360): Parametric 50 mm (and 25 mm) knob that takes a pressed-in nut or bolt head, or prints with its own thread; notes on press fit and wall count *(licence: CC BY (Creative Commons Attribution))*
  - [Instant Wingnut Adapter M3 M4 M5 M6 M8 M10 (MvM, Thingiverse)](https://www.thingiverse.com/thing:2121898): Printable clip-on wings that turn any M3-M10 hex bolt head or nut into a wing nut you can turn by hand *(licence: CC BY-NC 4.0)*
  - [Thumbwheel for M3 standard and nyloc nuts (andygock, Thingiverse)](https://www.thingiverse.com/thing:39459): Printable thumbwheel that fits tightly round an M3 nut, used for hand-levelling a 3D printer bed *(licence: CC BY-SA 4.0)*
- **diagram_idea**: Three small sketches side by side: a thumbscrew and a wing nut with curved arrows showing fingers turning them, with the wing span marked as a lever arm; and a clevis joint with a hitch pin through both parts and an R-clip sliding into the cross-hole, its belly springing round the pin.
- **sources**: 
  - https://en.wikipedia.org/wiki/Wingnut_(hardware)
  - https://en.wikipedia.org/wiki/List_of_screw_drives
  - https://en.wikipedia.org/wiki/Thumbscrew
  - https://en.wikipedia.org/wiki/Knurled_nut
  - https://en.wikipedia.org/wiki/Computer_case_screws
  - https://en.wikipedia.org/wiki/R-clip
  - https://en.wikipedia.org/wiki/Linchpin
  - https://en.wikipedia.org/wiki/Clevis_fastener
  - https://aimsindustrial.com.au/blogs/product-guides/thumb-screw-guide
  - https://www.elesa.com/en/elesab2bstoreus/hand-knobs-and-thumb-screws-us--1
  - https://www.jwwinco.com/en-us/products/2.2-Tensioning-clamping-with-handles/Torque-limiting-knobs
  - https://www.mcmaster.com/products/hitch-pins/
  - https://www.aspenfasteners.com/content/pdf/Metric_DIN_11024_spec.pdf
  - https://www.fixawell.com/din-11024.htm
  - https://www.boltsfastener.com/standards/pins-keys-standard/din-11024.html
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://filamentspecs.com/creep-resistance-3d-printed-parts/
  - https://www.tractorbynet.com/forums/threads/nyla-nuts.430100/post-5823756
  - https://www.thingiverse.com/thing:2121898
  - https://www.thingiverse.com/thing:39459
  - https://api.printables.com/graphql/ (models 1116311, 503494, 625673)
  - https://commons.wikimedia.org/wiki/File:Wingnut-hardware.jpg
  - https://commons.wikimedia.org/wiki/File:HitchPin.jpg
  - https://commons.wikimedia.org/wiki/File:R-Clip.jpg
  - https://commons.wikimedia.org/wiki/File:Thumbscrews_pc.jpg
  - https://commons.wikimedia.org/wiki/File:DIN_316_M5x30_Winged_Screw_Fl%C3%BCgelschraube.jpg
  - https://commons.wikimedia.org/wiki/File:Bicycle_wing_nuts.jpg

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, load, making_tips_3d_printing, materials, rules_of_thumb, safety_notes, when_not_to_use

## 286 Genderless connector (hermaphroditic coupling)

*quick-release & tool-free.* A coupling whose two halves are identical, so any two pieces mate: fire-hose (Storz-type) couplings, modular robot docking ports, or a printed hinge made from two copies of one part

### What it is

- **plain_name**: A connector where both halves are exactly the same, so any piece plugs into any other piece: there is no 'plug' and 'socket', and nothing can be the wrong way round
- **term**: Genderless connector (hermaphroditic or androgynous coupling)
- **aliases**: 
  - hermaphroditic connector / hermaphrodite coupling
  - androgynous connector (used for spacecraft docking systems)
  - sexless coupling
  - ungendered connector (modular robotics)
  - self-mating connector
  - two-way, two-in-one or combination connector (ambiguous; Wikipedia says these should be defined in context)
  - Storz coupling (fire-hose coupling)
  - Guillemin coupling (French fire-hose and pellet-delivery coupling; similar but not completely symmetric)
  - gladhand coupler (truck and railway air-brake hoses)
  - SAE connector (2-pin DC lead) and Anderson Powerpole (brand)
  - GR connector / GR-874 (General Radio hermaphroditic RF connector)
  - Dual Lock (brand): mushroom-head reclosable fastener that mates with itself
  - 'print-twice' part / two identical halves (3D printing)
- **family**: quick-release & tool-free
- **other_families**: hydraulics, pneumatics & vacuum, snap & clip fits, powered & active connectors, hinges & pivots, electrical connections
- **one_liner**: A connector or coupling made of two identical halves, each carrying both the 'male' and the 'female' features, so that any two of the same size and type can be joined, usually by turning one copy round to face the other so that its hooks meet the other's slots.
- **complexity**: Usually a few parts, but every half is the same part. Storz hose coupling: a body with hooked lugs and a slotted flange, plus a rubber gasket, on each hose end. Gladhand: a coupler body with a lug, a slot and a rubber seal (grommet). Anderson Powerpole: a plastic housing and a metal contact, housings clipping side by side. Modular-robot docking port: a face with pins and holes, hooks or a ring of magnets, often with a motor or electro-permanent magnets to latch. Printed version: one part printed twice (e.g. a snap-together hinge leaf, a twist-lock spool half or a box half).
- **how_it_works**: Each half carries both kinds of feature (a hook and a slot, a pin and a hole, or a north and a south magnet) laid out symmetrically, so that a copy turned round to face it presents the opposite feature at every point. Amphenol's hermaphroditic coupler 'will always appear identical when rotated 180 degrees' (US5118303A), and GN's genderless connector mates with an identical one 'rotated 180 degrees about a transversal axis' (US20150079829A1). On a Storz coupling the two faces are pressed together so each hook enters the slots in the other's flange, then turned in opposite directions, usually about a quarter turn, until the gaskets are squeezed into a watertight seal; turning back releases it (Wikipedia 'Storz'; QRFS).

### Finder attributes

- **job**: 
  - join and hold: holds two hoses, cables, modules or parts together
  - lock, and release by hand: most lock with a push and a quarter turn (Storz) or a push and a click, and come apart again by hand
  - seal it, or pass cables or fluid through: hose versions seal water or air with rubber gaskets (Storz, gladhands); electrical versions carry power (Anderson Powerpole, SAE connector)
  - let it move (turn, slide or bend): a printed hermaphroditic hinge is two identical leaves snapped together that then pivot
- **motion**: none: once joined the halves are fixed together; coupling usually takes a push plus about a quarter turn (Storz) or a straight push (Powerpole, Dual Lock). The printed hermaphroditic hinge is the exception: rotate, within swing limits set in the model (DeGroof's parametric hinge)
- **degrees_of_freedom**: 0 when coupled (the two halves are locked solid); 1 for the hinge version, which turns about its pivot
- **special_behaviour**: 
  - quick-release: most join and part by hand in seconds; a Storz hose locks 'with a quarter-turn' where threaded couplings take 'several turns' (Wikipedia 'Storz')
  - self-aligning or self-centring: modular-robot docking faces such as the 3D X-Face are shaped so two faces slide into line when brought together slightly off target (Eckenstein and Yim, ICRA 2014)
  - none of the other listed behaviours: its special feature is having no gender, so any two match and no 'gender changer' adapter is ever needed (Wikipedia 'Gender of connectors and fasteners')
- **holding_principle**: 
  - shape (the parts interlock; form-fit): hooks in slots, lugs behind flanges or pins in holes (Storz, gladhands, robot pin-and-hole faces)
  - friction or clamping (force-fit): the quarter turn draws the faces together and squeezes the gaskets (Storz)
  - magnetic: some robot docking faces and printed boxes use rings of magnets with alternating poles (SMORES-EP; Printables 1811372)
  - powered hold: active robot docking ports latch with motors or electro-permanent magnets (SMORES-EP)
- **input_output**: not applicable: it joins things rather than passing motion on
- **power**: Mostly passive (no power needed): hose couplings, Powerpoles, Dual Lock and printed parts. Many modular-robot docking ports are powered: SMORES-EP's electro-permanent magnets 'can be switched on or off with pulses of current', unlike electromagnets that need a steady current, so they keep their last state (docked or undocked) without power
- **removability**: tool-free quick release for most types; large or stuck fire-hose Storz couplings can be turned with special Storz spanners (Wikipedia 'Storz')
- **reuse_cycles**: many times: Anderson Powerpole contacts are rated for 100,000 no-load insertions and 250 hot-plugs at full load (Wikipedia, marked 'citation needed'); Dual Lock tape can be opened and closed up to about 1,000 times (iTapestore vendor guide); hose couplings last for years with gasket replacement (ca-fire.com)
- **seal**: Depends on the type: watertight for Storz fire-hose couplings ('a watertight connection between the internal packing gaskets', Wikipedia 'Storz'); airtight or pressure for gladhands ('mated rubber grommets provide a positive seal', Wikipedia 'Gladhand connector'); none for electrical connectors, Dual Lock and printed hinges
- **load**: Light to heavy. Printed parts and Dual Lock are light duty; a pair of SMORES-EP docking faces holds up to 90 N; Storz couplings carry pressurised fire-hose water in sizes up to 125 mm and more (Wikipedia 'Storz'); gladhands carry truck brake air, and genderless knuckle couplers join whole trains (Wikipedia). Hook-and-slot types are strong in pull once locked; they resist turning back only by friction and any locking detent (ca-fire.com).
- **adjustable**: No: the halves are identical and fixed. You can chain as many as you like, and Powerpole housings clip side by side and stack to make multi-way connectors (Wikipedia 'Anderson Powerpole')
- **play_and_precision**: Small to noticeable. Hose couplings rely on gaskets rather than precise location. Robot docking faces are judged by their 'area of acceptance', the range of misalignment they can correct while mating; ungendered faces have historically corrected much less than gendered cone-and-funnel (probe-and-drogue) designs, e.g. a score of 0.353 for the best ungendered DRAGON connector against 1.57 for a probe and drogue, until the 3D X-Face reached 2.0 (Eckenstein and Yim, ICRA 2014). SMORES-EP's magnets pull modules together across a 4 mm gap, or 7 mm sideways. Printed snap hinges have whatever clearance you set (DeGroof's parametric hinge).
- **access_needed**: end of a tube or shaft: each hose or cable end carries a half; face-mounted docking ports and Dual Lock pads just press together from one side
- **materials**: Storz: brass or aluminium, cast for general and low-pressure use and forged for firefighting, with rubber gaskets (Wikipedia 'Storz'). Powerpole: plastic housings with metal contacts sized for 15, 30 or 45 A (Wikipedia). Dual Lock: plastic mushroom-head stems on tape. Printed versions: PLA, PETG or ABS; PETG suits parts used outdoors or below about 80 °C, PLA softens above about 60 °C (Prusa). *(unverified parts omitted)*
- **maker_difficulty**: easy to moderate: buying genderless parts (Powerpoles, SAE leads, Storz fittings, Dual Lock) is easy; designing your own is moderate, because the mating face must fit a turned-round copy of itself exactly, so the symmetry has to be built into the CAD model and printed hooks need clearance testing

### Making it

- **processes**: 
  - 3D print (FDM): one part printed twice; printable hermaphroditic hinges, twist-lock spool halves, boxes and connectors exist
  - off-the-shelf part: Storz and gladhand couplings, Anderson Powerpole and SAE connectors, Dual Lock tape *(unverified parts omitted)*
- **print_in_place**: no: genderless parts are printed as separate identical copies and then joined; the whole point is that one file printed twice is enough (DeGroof's hinge, LockSpool V3, Brožek's dodecahedron box)
- **making_tips_3d_printing**: 1) Design for a turned-round copy, not a mirror image: the second half is the same part rotated, so every hook must face a slot and every pin a hole when the part is turned 180 degrees about an axis lying in the joint face (US5118303A; US20150079829A1). Brožek's box stresses that its two halves are 'congruent, not mirrored' (Printables 1811372). A quick CAD check: copy the part, rotate the copy into the mating position and look for clashes. 2) Magnets: in identical halves, half the magnets must face north outwards and half south, placed symmetrically so the rotated copy shows opposite poles; SMORES-EP arranges its magnets in a ring 'with south poles counterclockwise of north', and Brožek's box marks which magnet pockets get 'dot up' and which 'dot down', with the same rule on both halves (Printables 1811372). 3) Put clearance in as a parameter: DeGroof's parametric hermaphroditic hinge has a 'clearance' setting (less for stiffness, more for free movement) and swing-limit angles (Printables 220355); Prusa suggests 'at least 0.3 mm' for movable parts as a starting point. 5) For twist-lock genderless joints, add a snap or detent so the quarter turn can't work loose: LockSpool V3 joins two identical halves 'with a quick twist, with a snap-lock to hold it in place' (Printables 129989), and Storz couplings add a locking detent (ca-fire.com). 6) Print hooks and snap arms so they lie along the layers; 'FFF prints are stronger in one direction than another' (Prusa). 7) Print the two copies in different colours, as both Brožek (Printables 1811372) and Peder (Printables 1816212) suggest; it also makes the orientation easy to see. 8) Never print a coupling meant to hold water or air under pressure; buy a proper metal or rated plastic fitting. *(unverified parts omitted)*
- **off_the_shelf_parts**: Storz couplings (sized by nominal size, e.g. Storz 25, 38, 65, 75, 100, 125, each with its own lug diameter; Wikipedia 'Storz'), Storz spanners and replacement gaskets; GEKA-type garden-hose couplings (brand), which Wikipedia also lists as hermaphroditic; gladhand couplers and their rubber seals; Anderson Powerpole (brand) PP15/30/45 housings and contacts, and the larger keyed SB multipole connectors; 2-pin SAE DC leads; 3M Dual Lock (brand) reclosable fastener in Type 170, 250 and 400; electro-permanent magnets for robot docking. Search terms: 'hermaphroditic connector', 'genderless connector', 'sexless coupling', 'Storz adapter'.
- **rules_of_thumb**: 
  - Make the mating face look the same after a half turn: Amphenol's coupler 'will always appear identical when rotated 180 degrees' (US5118303A), and GN's connector mates with an identical connector 'rotated 180 degrees about a transversal axis' (US20150079829A1).
  - Identical fittings 'can freely mate with any other, without regard for gender (provided that the size and type are already matched)' (Wikipedia 'Gender of connectors and fasteners'): keep one size and one type across a whole system.
  - Physically genderless is not the same as electrically genderless: the SAE connector is 'physically hermaphroditic' but 'NOT electrically hermaphroditic', and on vehicles the exposed terminal goes to the battery's negative so it can't short the battery if it touches the chassis (Wikipedia 'DC connector', SAE section). Anderson Powerpoles use 'cis' connectivity, pin 1 to pin 1, while bullet connectors arranged hermaphroditically 'can be electrically incompatible (reverse polarity damages equipment)' (Wikipedia 'Anderson Powerpole').
  - Hook-and-flange couplings lock in about a quarter turn instead of the several turns of a thread (Wikipedia 'Storz'); add a locking detent so movement can't turn them loose (ca-fire.com).
  - Genderless magnetic faces need alternating poles: SMORES-EP's ring of electro-permanent magnets has 'south poles counterclockwise of north'; a pair of faces holds up to 90 N and pulls together across a 4 mm gap (Liu et al., SMORES-EP).
  - Genderless docking faces usually self-align less than gendered cone-and-funnel ones unless shaped for it: best ungendered DRAGON 0.353 versus probe-and-drogue 1.57, improved to 2.0 by the 3D X-Face (Eckenstein and Yim, ICRA 2014).
  - Genderless connectors let modules join in any order (an undirected graph), while gendered ones impose a direction (a directed graph), which matters when planning modular robot shapes (Liang et al., 2023 survey of modular reconfigurable robots).
  - Dual Lock: Type 250 mated with itself gives a 'secure, balanced hold'; 170 with 250 opens more easily; up to about 1,000 openings (iTapestore vendor guide).

### When to use it

- **everyday_examples**: 
  - Fire hoses with Storz couplings: any hose end fits any other of the same size (Wikipedia 'Storz')
  - The air-brake hose couplings (gladhands) between a lorry and its trailer (Wikipedia 'Gladhand connector')
  - The 2-pin SAE lead on a motorcycle battery charger or small solar panel, and Anderson Powerpole leads on ham radios and FIRST competition robots (Wikipedia)
  - Railway knuckle couplers, which let a wagon join a train at either end without turning it round (Wikipedia 'Gender of connectors and fasteners')
- **when_to_use**: Use it when many identical pieces must join in any order or either way round: hoses, cables or extension leads chained together, so you never have to drag a long hose round because its end is the wrong gender (Wikipedia); modular robots and construction kits where any module face should dock with any other (SMORES-EP; Liang et al.); battery and power distribution where a battery can be a source or a load (Wikipedia, Powerpole); and in 3D printing, whenever one file printed twice can replace two different parts, which halves the design work and means a spare always fits (LockSpool V3; DeGroof's hinge).
- **when_not_to_use**: Avoid it when joining the wrong two things would be dangerous or damaging: where only certain pairs should connect, use keying (poka-yoke) or colour-keyed variants (Anderson's SB multipole connectors are keyed by colour so only like colours mate). When the largest possible self-alignment matters, a gendered cone-and-funnel (probe-and-drogue) dock aligns better unless the genderless face is specially shaped (Eckenstein and Yim). For a permanent joint, use a fixed fitting instead. *(unverified parts omitted)*
- **environment_limits**: Hose couplings depend on rubber gaskets, which compress, harden and crack over time; ca-fire.com says '99% of Storz coupling leaks are gasket problems'. Storz bodies are brass or aluminium (Wikipedia). Dual Lock is sold as working 'in heat, cold, and moisture' (iTapestore vendor guide). Printed PLA parts soften above about 60 °C and degrade in UV light, while PETG suits most outdoor use below about 80 °C (Prusa). Vibration and movement can turn quarter-turn couplings loose unless they have a locking detent (ca-fire.com).
- **safety_notes**: Pressurised hoses: a quarter-turn coupling that is not fully engaged can come apart under pressure and the hose can whip; make sure the locking detent or pin has engaged at the fully connected position (ca-fire.com) and release the pressure before uncoupling; never hold water or air pressure in a 3D-printed coupling. Electrical: physically genderless leads are not always electrically genderless, and a lead wired the wrong way round can reverse polarity or short a battery, which 'could result in a fire or explosion' with a vehicle lead-acid battery (Wikipedia 'DC connector', SAE section). *(unverified parts omitted)*
- **common_failures**: 1) Reverse polarity from leads assembled the wrong way round in genderless housings (Wikipedia 'Anderson Powerpole'; SAE section of 'DC connector'): follow one standard orientation and check with a meter. 2) Leaking hose couplings from nicked, hardened or cracked gaskets (ca-fire.com). 3) Quarter-turn couplings working loose under movement: use the locking detent (ca-fire.com). 4) Printed halves that won't mate because the second half was modelled as a mirror image instead of a rotated copy, or because magnets were fitted with the same pole outwards on both halves (Printables 1811372). 5) Docking fails because the faces were further out of line than the connector's area of acceptance (Eckenstein and Yim). 6) Mixing nearly-compatible variants, e.g. the Guillemin coupling is similar to Storz but not completely symmetric (Wikipedia 'Storz').
- **related**: 
  - Quick couplers for tubes and hoses (push-to-connect, sleeve lock): gendered plug and socket; quick and one-handed, but a plug only fits a socket
  - Bayonet mount (push-and-twist lock): the same push-and-turn locking that Storz uses, but with a male and a female half
  - Keying (one-way-only fit, poka-yoke): the opposite goal, making sure only the right pair can fit
  - Hook-and-loop fastener: two different tapes (hooks and loops); mushroom-head Dual Lock is the self-mating version
  - Snap fits and print-in-place hinges: usually two different parts; a hermaphroditic hinge uses one part twice
  - Gender changer adapter: the other way to join two connectors of the same gender (Wikipedia)
  - Stackable connectors (Arduino shields, stackable banana plugs): male on one face and female on the other, 'often described' as hermaphroditic but not in the strict sense (Wikipedia)
  - Mixed-gender connectors: contain both pins and sockets but still need a matching opposite connector, so they are not truly genderless (Wikipedia)
  - High-current battery plug: gendered XT60-type, Deans-type and bullet plugs for battery packs; the genderless Anderson Powerpole and SAE leads stay in this entry

### Pictures, videos and models

- **links**: 
  - [Festkupplung.jpg (Wikimedia Commons, by Karl Gruber)](https://commons.wikimedia.org/wiki/File:Festkupplung.jpg): Photo of a Storz hose coupling face, showing the hooked lugs and flange slots that mate with an identical coupling *(licence: CC BY-SA 3.0 / GFDL 1.2+)*
  - [Pp01.jpg (Wikimedia Commons, by Cqdx)](https://commons.wikimedia.org/wiki/File:Pp01.jpg): Front view of Anderson Powerpole 15/30/45 A genderless housings and contacts *(licence: CC0 1.0 (public domain dedication))*
  - [Train coupling.jpg (Wikimedia Commons, by Daniel Schwen)](https://commons.wikimedia.org/wiki/File:Train_coupling.jpg): Two identical knuckle (Janney/AAR) railway couplers locked together, seen from above *(licence: CC BY-SA 4.0)*
  - [APAS-75 image cropped and rotated.jpg (Wikimedia Commons, NASA)](https://commons.wikimedia.org/wiki/File:APAS-75_image_cropped_and_rotated.jpg): Androgynous Apollo-Soyuz docking mechanisms under test in 1974: two identical docking rings with petal-shaped guides *(licence: Public domain (NASA))*
- **make_it_yourself**: 
  - [Parametric, Hermaphroditic, Snap-together Hinge (Steve DeGroof, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/220355-parametric-hermaphroditic-snap-together-hinge): Two identical parts snap together to form a working hinge; parameters for number of tabs, thickness, length, leaf width, clearance, swing limits and pivot bump height; can also join flat faces into polyhedra *(licence: Creative Commons Public Domain (per Printables API))*
  - [LockSpool V3: Parametric, reusable (1 part printed twice) (Anachronist, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/129989-lockspool-v3-parametric-reusable-1-part-printed-tw): Filament spool made from one part printed twice, joined with a quick twist and held by a snap-lock; parametric OpenSCAD file included *(licence: CC BY (per Printables API))*
  - [Rhombic Dodecahedron Box: one part printed twice, magnets sealed inside (Miloslav Brožek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1811372-rhombic-dodecahedron-box-one-part-printed-twice-ma): A box whose two congruent (not mirrored) halves snap shut on magnets sealed in during the print, with a clear rule for which magnets face which way *(licence: CC BY (per Printables API))*
  - [Commander Deck Box: Identical Top and Bottom Lid (Peder, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1816212-commander-deck-box-identical-top-and-bottom-lid): Card deck box whose top and bottom lids are the same part: 'Print twice and combine' *(licence: CC BY (per Printables API))* *(unverified parts omitted)*
- **diagram_idea**: Two identical coupling halves drawn side by side, the second rotated 180 degrees, with matching colours showing each hook landing in the other's slot (and, in a second panel, a ring of alternating N and S magnets lining up), next to a gendered plug and socket for comparison and the caption 'one part, printed twice'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Gender_of_connectors_and_fasteners
  - https://en.wikipedia.org/wiki/Storz
  - https://en.wikipedia.org/wiki/Anderson_Powerpole
  - https://en.wikipedia.org/wiki/SAE_connector
  - https://en.wikipedia.org/wiki/DC_connector
  - https://en.wikipedia.org/wiki/Gladhand_connector
  - https://commons.wikimedia.org/wiki/File:Festkupplung.jpg
  - https://commons.wikimedia.org/wiki/File:Pp01.jpg
  - https://commons.wikimedia.org/wiki/File:Train_coupling.jpg
  - https://commons.wikimedia.org/wiki/File:APAS-75_image_cropped_and_rotated.jpg
  - https://arxiv.org/pdf/2104.00800
  - https://arxiv.org/pdf/2310.09743
  - https://www.modlabupenn.org/wp-content/uploads/xface_3d_overlay.pdf
  - https://patents.google.com/patent/US5118303
  - https://patents.google.com/patent/US20150079829
  - https://blog.qrfs.com/16-what-is-a-storz-connection-and-how-does-it-work/
  - https://ca-fire.com/nfpa-1963-storz-couplings/
  - https://www.itapestore.com/3m-dual-lock-introduction-buying-guide/
  - https://api.printables.com/graphql/
  - https://www.thingiverse.com/thing:954434
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135

### Other info

- **Fields with unverified parts:** make_it_yourself, making_tips_3d_printing, materials, processes, safety_notes, tools_needed, when_not_to_use

## 393 Tripod and stand screw mount (tripod socket, camera thread)

*quick-release & tool-free.* A single threaded socket or stud in a standard thread, so a part screws onto any tripod, ball head, light stand, microphone stand or camera, with locating pins, a rubber pad or a lock ring to stop it twisting

*Also covers:* Also covers the 1/4-20 and 3/8-16 camera threads, light-stand spigots, anti-twist pins, thread adapters and putting a metal insert in a print. The thread sizes are linked to, not listed. Safety: gear falls if the thread strips in plastic.

### What it is

- **plain_name**: The small threaded hole (or threaded stud) found under every camera and on top of every tripod, so anything with the same standard thread can be screwed onto a tripod, ball head, light stand, microphone stand or camera rig, with pins, a rubber pad or a locking ring to stop it twisting round
- **term**: Tripod and stand screw mount: a tripod socket or stud in a standard camera thread (1/4-20 UNC or 3/8-16 UNC to ISO 1222 / DIN 4503), with anti-twist features, plus light-stand spigots and microphone-stand threads
- **aliases**: 
  - tripod socket, tripod mount, tripod thread, tripod screw hole, camera thread, camera screw (Wikipedia 'Tripod (photography)'; Sony and Ricoh camera manuals)
  - 1/4-20 UNC (1/4 inch, 20 threads per inch) and 3/8-16 UNC camera threads, to ISO 1222:2010 'Photography - Tripod connections' and DIN 4503 (Wikipedia 'Tripod (photography)'; gewinde-normen.de)
  - older 1/4 in and 3/8 in BSW (Whitworth) tripod threads, close enough to UNC to fit each other (Wikipedia 'Tripod (photography)')
  - head mount (1/4-20 stud on a tripod head) and base mount (3/8-16 stud joining the head to the legs) (Wikipedia 'Tripod head')
  - tripod screw, D-ring screw (a camera screw with a fold-up ring to turn it by hand) (Wikimedia Commons 'Screw Head - Tripod screw-01.jpg')
  - reducer bushing, thread adapter, 3/8-16 to 1/4-20 adapter, 'removable 1/4-20 UNC adapter' (Wikipedia 'Tripod (photography)'; Printables 85177)
  - ARRI-style locating pins, anti-twist pins, ARRI locating holes: two 3 mm pins 60 mm apart beside a 3/8-16 screw, or 10.4 mm apart beside a 1/4-20 screw (Ulanzi, a manufacturer's guide)
  - light-stand spigot, stud, baby pin, 5/8 in (16 mm) stud, spigot adapter; receiver (the socket on a stand) (Kupo; Wikipedia 'C-stand')
  - microphone-stand thread: 5/8-27 UNS (most common), 1/2-12 BSW (older German and European stands), 3/8-16 BSW (outside the US) (Wikipedia 'Microphone stand')
  - heat-set insert 1/4-20, camera-thread insert (Prusa; CNC Kitchen)
- **family**: quick-release & tool-free
- **other_families**: clamping, magnetic & friction connections, locating & alignment
- **one_liner**: A single standard threaded socket or stud, nearly always 1/4-20 or 3/8-16 UNC, that lets any camera, light, phone holder or home-made part be screwed by hand onto any tripod, stand or rig, with locating pins, a lip, a rubber pad or a lock ring added because one screw on its own lets the part twist.
- **complexity**: A few parts: a female threaded socket (in the device, or a metal insert or nut in a printed part) and a male stud or thumbscrew (on the tripod head or plate), often with a rubber or cork pad, one or two locating pins, or a lock ring; adapters add a reducer bushing or a spigot.
- **how_it_works**: The thread does the holding: screwing the stud into the socket pulls the two faces together, and that clamping force plus the friction of the faces holds the device in place (Wikipedia 'Tripod head'). Because both sides use the same standard thread, any device fits any support (ISO 1222 via Wikipedia 'Tripod (photography)'). A single screw only clamps; it 'offers little resistance against the torsional forces' that try to turn the device round the screw (Ulanzi), so mounts add a rubber or cork pad to increase friction (Wikipedia 'Tripod head'), a lip or flange that bears against the camera body, a second screw, or locating pins that drop into holes beside the screw (Wikipedia 'Tripod head'; Ulanzi). Light stands use a plain round stud (spigot) that drops into a socket (receiver) on the stand, and spigot adapters carry camera threads on their ends (Kupo).

### Finder attributes

- **job**: 
  - join and hold: screws a camera, light, phone, sensor or printed part onto a tripod, stand, ball head or rig
  - lock, and release by hand: done up and undone with fingers, a fold-out ring, a knob or a coin, with no tools
  - line parts up exactly: locating pins or a lip fix which way the device faces and stop it twisting (Ulanzi; Wikipedia 'Tripod head')
- **motion**: none once tightened; the device turns on the thread only while being screwed on or off.
- **degrees_of_freedom**: 0 when tight. With a single screw and no pins, the device can still twist about the screw if it isn't tight enough, which is the main weakness; locating pins remove that last freedom (Ulanzi; Wikipedia 'Tripod head').
- **special_behaviour**: 
  - none: it is a plain hand-tightened screw joint (tool-free, but not instant like a quick-release plate). Its value is the standard: one thread size fits thousands of tripods, heads, stands and accessories (Wikipedia 'Tripod (photography)')
- **holding_principle**: 
  - friction or clamping (force-fit): the screw clamps the faces together, and a rubber or cork pad adds friction 'to prevent the head from unscrewing during use' (Wikipedia 'Tripod head')
  - shape (the parts interlock; form-fit): the thread flanks interlock, and locating pins, a lip or a spigot in its receiver stop sideways movement and twisting (Ulanzi; Kupo)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: unscrews by hand with no tools; for faster swaps a quick-release plate is usually added on top of this screw (Wikipedia 'Tripod head').
- **reuse_cycles**: many times with metal threads on both sides (brass insert, nut or metal socket). Threads cut or printed straight into plastic last only a few cycles: 'After disassembling and reassembling it a few times ... they won't hold anymore' (Prusa, heat-set insert page).
- **tools_needed**: none to use (thumbscrew, knob or fold-out D-ring); a coin or flat screwdriver for slotted reducer bushings (Printables 85177); a soldering iron with an insert tip to fit a heat-set insert in a print (CNC Kitchen); a 1/4-20 or 3/8-16 tap to cut a thread in wood, aluminium or a printed hole (taps sold for DIN 4503-1 / ISO 1222, threadingtoolsguide.com).
- **seal**: none
- **load**: Light to medium. Along the screw (pull) a metal thread is strong, and even M3 screws in printed PETG took 86-166 kg to pull out in CNC Kitchen's tests, so pull-out is rarely what fails. The weak directions are twisting about the screw, where a single screw 'offers little resistance' (Ulanzi) and the device can rotate and work loose (Wikipedia 'Tripod head'), and the thread in plastic itself: in the same tests a screw driven straight into printed PETG stripped at only 1 Nm of tightening torque, against 3 Nm for a heat-set insert (CNC Kitchen 'Helicoils, threaded inserts and embedded nuts'). A long lens or heavy rig levering on one small screw adds bending load, which is why lens plates use two screws (Wikipedia 'Tripod head'). *(unverified parts omitted)*
- **adjustable**: yes, partly: with a single screw the device can be set facing any direction before tightening; locating pins fix one orientation instead. *(unverified parts omitted)*
- **play_and_precision**: A tight screw joint has no play, but it only returns to the same orientation if pins, a lip or a flat face locate it. Ulanzi's test for pinned mounts: 'If there is play before the screw is tightened, the system is relying on friction rather than geometry'. Mixed brands of 'ARRI-compatible' parts can wobble or fail to seat because of tolerance stack-up (Ulanzi). UNC and older BSW threads differ in flank angle (60° versus 55°) but fit each other well enough for tripods (Wikipedia 'Tripod (photography)'; threadingtoolsguide.com).
- **access_needed**: one side only (blind): the socket is a blind threaded hole in the device, and the stud screws in from outside, so nothing has to be reached behind it.
- **materials**: Sockets and studs are metal: brass heat-set inserts (Prusa; CNC Kitchen), brass spigot adapters (Kupo), aluminium plates with stainless-steel locating pins (Ulanzi). The thread can be put into PLA, PETG, ASA, nylon or resin prints by an insert or captive nut; into wood with a screw-in threaded insert; or tapped into aluminium. Plastic screws and plastic threads are only for light, low-value items: a printed 1/4-20 screw's designer warns that 'A plastic screw can not replace a metal screw', not even in an emergency (Printables 152911). PLA creeps under a constant load and has 'Low UV and temperature resistance' (Thrinter creep test; Prusa), so it is a poor choice for a mount that stays clamped in a hot car or the sun.
- **maker_difficulty**: easy to moderate: designing a part with a 1/4-20 socket is easy if you melt in a brass insert or trap a nut; printing the thread itself works only for light items, and the hard part is stopping the part twisting, which needs pins, a lip or a pad.

### Making it

- **processes**: 
  - off-the-shelf part: tripod screws, reducer bushings, spigot adapters, threaded inserts and nuts
  - 3D print (FDM): the mount body, with a heat-set insert, captive nut or (for light items) a printed thread
  - 3D print (resin): printed threads or glued-in inserts (Formlabs)
  - CNC: tapped 1/4-20 or 3/8-16 holes in aluminium plates and blocks
  - woodwork: a screw-in threaded insert or tapped hole in a wooden base
- **print_in_place**: partly: the body and even a coarse printed thread can come off the printer ready to use, but for anything heavy or valuable it needs an added metal insert or nut, and the screw itself is a separate part.
- **making_tips_3d_printing**: 1) Put metal in the thread: melt in a 1/4-20 heat-set insert or trap a 1/4-20 nut (see Heat-set threaded insert and Captive nut pocket). Large inserts such as the 1/4 in camera thread 'carry a lot of thermal mass', so use a thick soldering tip, a slightly higher temperature and as much contact with the brass as possible (CNC Kitchen 'Tips and tricks for heat-set inserts'). 2) If you print the thread, 1/4-20 is about the smallest that works: Formlabs says to stick to 'at least 1/4-20 (imperial) or M6' and to use thread profiles designed for plastics (Formlabs). One adapter designer prints threads vertical, without supports, solid, at 0.15 mm layers or less, and offers looser and tighter (1A and 2A class) versions to try; slicer XY or horizontal-size compensation fixes a thread that is too tight (Printables 85177). 3) Leave enough plastic round the thread: at least the screw's diameter in wall thickness, i.e. about 6.4 mm round a 1/4-20 hole (Hubs rule of thumb: wall = fastener diameter). 4) Stop it twisting: add a rubber or cork pad, or a lip that bears against the camera body (Wikipedia 'Tripod head'), or holes for locating pins; for a 3/8-16 mount the pins are 3 mm, 60 mm apart, and for 1/4-20 'mini' mounts 10.4 mm apart (Ulanzi). 5) Mind the screw length: some cameras say to use a tripod screw shorter than 5.5 mm or damage may occur (Sony), while another's socket is 6.7 mm deep (Ricoh), so a printed adapter mustn't let a long screw bottom out in the camera. 7) Choose PETG, ASA or nylon over PLA for mounts that stay loaded, because PLA creeps (Thrinter) and softens in heat (Prusa). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search catalogues for: '1/4-20 tripod screw' or 'camera screw' (with D-ring, knob or coin slot), '3/8-16 to 1/4-20 reducer bushing' (thread adapter), '1/4-20 heat-set insert' and '3/8-16 threaded insert', '1/4-20 hex nut', '5/8 in baby pin' or 'spigot adapter' with 1/4-20 and 3/8-16 male threads (Kupo), '1/4-20 to 5/8-27 microphone thread adapter' (Wikipedia 'Microphone stand' notes such adapters), 'ARRI locating pin' screws and plates, 'cold shoe to 1/4-20 adapter', 'GoPro-style prong to 1/4-20 adapter', and 'lock ring' or 'thumb-wheel lock nut'. Thread size tables: gewinde-normen.de 'Camera mount threads' and 'UNC thread'.
- **rules_of_thumb**: 
  - Thread choice: ISO 1222:2010 calls for 1/4-20 UNC or 3/8-16 UNC; most consumer cameras use 1/4-20, and larger professional cameras and lenses may use 3/8-16 with a removable 1/4-20 adapter (Wikipedia 'Tripod (photography)'). Tripod heads usually sit on the legs with a 3/8-16 screw, or 1/4-20 for small heads and monopods (Wikipedia 'Tripod head'). For thread dimensions, link to a table such as gewinde-normen.de 'Camera mount threads' rather than copying it.
  - Screw length, side by side: Sony tells users of one camera to use 'a tripod with a screw less than 5.5 mm (7/32 inches) long' or 'damage to the camera may occur' (Sony help guide); Ricoh gives its socket as UNC 1/4-20 'with a depth of 6.7 mm' and warns not to over-tighten (Ricoh THETA X FAQ).
  - Stop the twist: cork or rubber on the base face, an anti-rotation lip or flange against the body, and two screws on long lens feet (Wikipedia 'Tripod head'); a small pin in front of the screw on camcorder tripods (Wikipedia 'Tripod (photography)'); or ARRI-style locating pins, 3 mm pins 60 mm apart beside a 3/8-16 screw and pins 10.4 mm apart beside a 1/4-20 screw (Ulanzi).
  - Put a metal thread in plastic: in CNC Kitchen's M3 tests in PETG, screws straight into the plastic stripped at 1 Nm, nuts at 2 Nm and heat-set inserts lasted to 3 Nm, while pull-out was 118 kg (direct), 119 kg (insert), 86 kg (side-pocket nut) and 166 kg (nut in a pocket underneath) (CNC Kitchen); heat-set inserts 'stay the king for connections you open over and over' (CNC Kitchen).
  - Printed threads only at 1/4-20 or M6 and larger (Formlabs), and avoid FDM-printed threads below M5 (Hubs).
  - Minimum wall thickness round a threaded hole equals the fastener diameter (Hubs), about 6.4 mm for 1/4-20 and 9.5 mm for 3/8-16.
  - Light-stand spigot: a round 5/8 in (16 mm) 'baby' stud 'will fit into any 5/8" (16mm) receiver', and spigot adapters carry a 1/4-20 male thread on one end and 3/8-16 on the other (Kupo). Microphone stands most often use 5/8-27 (Wikipedia 'Microphone stand').
  - On stands, set a clamp so the weight of the gear tightens the knob clockwise ('righty tighty'), or the weight will slowly loosen it and drop the gear, and weigh the base down with shot bags or sandbags (Wikipedia 'C-stand').

### When to use it

- **everyday_examples**: 
  - A camera or phone holder screwed onto a tripod (Wikipedia 'Tripod (photography)')
  - A light or flash on a light stand, sitting on the stand's 5/8 in stud (Kupo; Wikipedia 'C-stand')
  - A microphone clip screwed onto a microphone stand's 5/8-27 thread (Wikipedia 'Microphone stand')
  - An action-camera prong mount, webcam or printer camera adapted to a 1/4-20 tripod screw (Printables 481288; Printables 152911)
- **when_to_use**: Use it whenever a home-made device should fit the huge range of photo and video supports: put a 1/4-20 socket under a printed phone holder, sensor box, webcam, lamp, microscope adapter, binocular holder or robot camera so it can go on any tripod, ball head, clamp or magic arm, and a 3/8-16 socket for heavier items or where a tripod head bolts on (Wikipedia 'Tripod (photography)'; 'Tripod head'). Use spigot adapters to put camera-thread items on light stands, and 5/8-27 adapters for microphone stands (Kupo; Wikipedia 'Microphone stand'). Add locating pins or a lip when the item must always face the same way or carries leverage, such as a monitor or handle on a rig (Ulanzi).
- **when_not_to_use**: Not on its own when the item must come off and go back in seconds, or always line up exactly: add a quick-release plate (Arca-type dovetail) on top of the screw (Quick-release plate entry). Not for heavy or valuable gear held by a plastic thread: use a metal insert or nut, or a metal screw; a printed screw 'can not replace a metal screw' (Printables 152911). Not where the item must not twist under leverage and you can't add pins or a lip: use two screws or a clamp. Not for gripping a bar, pole or desk edge: use a clamp-on accessory mount. For action cameras the prong (clevis) mount is the native interface, and for cinema rigs the ARRI rosette (a Hirth joint); adapters exist between them and 1/4-20.
- **environment_limits**: Printed mounts: PLA creeps under constant load, so a clamped PLA mount slowly loosens (Thrinter), and it has 'Low UV and temperature resistance' (Prusa), so avoid it in hot cars or sunlight; PETG or ASA hold up better. Vibration and twisting loosen a single screw: add a pad, pins or a lock ring (Wikipedia 'Tripod head'; 'Jam nut'). Cold: Ulanzi suggests fitting aluminium plates indoors in extreme cold to limit heat loss from the camera battery. *(unverified parts omitted)*
- **safety_notes**: Falling gear: a camera, light or monitor falls if the thread strips in plastic, catches only a few turns, or unscrews by twisting; use a metal insert or nut, screw it fully home, and check it by pulling and twisting before letting go (Ulanzi's 'Tug Test'). A printed screw is only for light cameras, mounts meant to break away (e.g. on drones or RC models), or cameras that won't be moved after mounting (Printables 152911). Too long a screw can damage the camera (Sony); don't over-tighten (Ricoh). Stands: set clamps so the load tightens them and weigh the base with sandbags, or the stand can tip or drop its load (Wikipedia 'C-stand'). *(unverified parts omitted)*
- **common_failures**: The device twists round the screw and works loose: add a rubber or cork pad, a lip, a second screw or locating pins (Wikipedia 'Tripod head'; Ulanzi). The thread strips in a print, or wears out after a few fittings: use a heat-set insert or captive nut (CNC Kitchen; Prusa). A printed thread is too tight or too loose: print the thread vertical at fine layers and use the tolerance version or XY compensation that fits (Printables 85177). A heat-set 1/4-20 insert goes in crooked or won't melt in: use a thick tip, a little more heat and a straight push (CNC Kitchen). A printed mount cracks along its layers or creeps loose over time: thicker walls (Hubs), a better plastic (Thrinter; Prusa) and metal threads. Pins that won't seat or wobble between brands of 'ARRI' parts (Ulanzi). A screw too long for the camera's socket (Sony). A stand clamp set the wrong way round slowly loosening under the load (Wikipedia 'C-stand').
- **related**: 
  - Quick-release plate (camera plate, dovetail clamp): an Arca-type plate is fixed to the camera with this screw and then slides into a clamp for fast swaps
  - Heat-set threaded insert: the usual way to get a strong metal 1/4-20 thread into a print
  - Captive nut pocket (nut trap): a cheaper metal thread, a trapped 1/4-20 nut
  - Printed screw thread: printing the 1/4-20 thread itself, for light items only
  - Screw-in threaded insert (wire thread insert, self-tapping insert): for wood and for repairing stripped sockets
  - Clevis joint (fork-and-pin joint, prong mount): the GoPro-style prong mount, often adapted to 1/4-20
  - Hirth joint (face-spline coupling): the ARRI rosette used on cinema rigs to stop rotation with teeth
  - Ball-and-socket joint (lockable ball head): the tripod ball head that sits on a 3/8-16 stud and carries a 1/4-20 screw
  - Clamp-on accessory mount for bars, poles and edges: for fixing to things with no threaded hole
  - Locating pins and hole-and-slot: the general way to stop a part turning or shifting, as ARRI pins do
  - Thread-locking hardware (nylon-insert nut, lock washer, split pin) and Jam nuts: other ways to stop a screw working loose
  - Tool-free fasteners (thumbscrew, wing nut, hitch pin and R-clip): the thumbscrew on a tripod head is one of these

### Pictures, videos and models

- **links**: 
  - [Screw Head - Tripod screw-01.jpg (Wikimedia Commons, by Andrew Pertsev)](https://commons.wikimedia.org/wiki/File:Screw_Head_-_Tripod_screw-01.jpg): Photo of a tripod screw with a fold-up D-ring for turning it by hand *(licence: CC0)*
  - [Tripod screw to light stand spigot; August 2020.jpg (Wikimedia Commons, by MIKI Yoshihito via Flickr)](https://commons.wikimedia.org/wiki/File:Tripod_screw_to_light_stand_spigot;_August_2020.jpg): Photo of an adapter between a tripod screw and a light-stand spigot *(licence: CC BY 2.0)*
  - [Tripod head (Wikipedia)](https://en.wikipedia.org/wiki/Tripod_head): Photos and description of head and base mounts, Arca-type plates with anti-rotation lips, ball heads and pan-tilt heads *(licence: CC BY-SA 4.0 (text); images per file)*
  - [ARRI Standard Pins: Navigating Professional Mounting Holes (Ulanzi, manufacturer's guide)](https://www.ulanzi.com/blogs/knowledges/arri-standard-pins-professional-mounting-guide): Explains and illustrates anti-twist locating pins beside 3/8-16 and 1/4-20 screws, with pin and hole sizes *(licence: link only)*
  - [Tips and tricks for heat-set inserts (CNC Kitchen)](https://www.cnckitchen.com/blog/tips-and-tricks-for-heat-set-inserts): Photos and video of fitting heat-set inserts in prints, including advice for large 1/4-20 camera-thread inserts *(licence: link only)*
- **make_it_yourself**: 
  - [Tripod adapter 1/4-20 to 3/8" thread (zx82net, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/85177-tripod-adapter-14-20-to-38-thread): Printable reducer bushings in three styles (coin-slot flange, hex flange, embedded with screwdriver slot) and two thread tolerances, also usable to add a clean 1/4-20 thread to another print *(licence: Creative Commons Attribution-NonCommercial)*
  - [Camera (tripod) screw 1/4"-20 UNC (sbuerger, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/152911-camera-tripod-screw-14-20-unc): A printable classic tripod screw (STL and STEP) with printing advice and a clear warning to use it only for light or fixed cameras *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [GoPro Action Camera Mount to 1/4 20 inch Tripod screw (Alekkson, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/481288-gopro-action-camera-mount-to-14-20-inch-tripod-scr): A printed adapter from a 1/4-20 tripod screw to a prong-type action-camera mount, with a pocket for an M5 nut *(licence: Creative Commons Attribution)*
  - [BOSL2 screws.scad (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad): Parametric ISO and UTS screws, nuts and screw holes; UTS sizes are given as e.g. '1/4-20,1', so 1/4-20 and 3/8-16 sockets, studs and nut traps can be modelled with chosen tolerance classes *(licence: BSD 2-Clause)*
- **diagram_idea**: A cut-away of a printed block with a brass 1/4-20 insert, a tripod head's stud screwing into it, and arrows showing the strong direction (pull along the screw) and the weak one (twisting round it), beside three small fixes: a rubber pad, a lip against the device, and two locating pins either side of the screw.
- **sources**: 
  - https://en.wikipedia.org/wiki/Tripod_(photography)
  - https://en.wikipedia.org/wiki/Tripod_head
  - https://en.wikipedia.org/wiki/C-stand
  - https://en.wikipedia.org/wiki/Microphone_stand
  - https://en.wikipedia.org/wiki/Jam_nut
  - https://www.gewinde-normen.de/en/camera-mount.html
  - https://www.gewinde-normen.de/en/unified-coarse-thread.html
  - https://threadingtoolsguide.com/en/blog/tripod-thread-din-4503-1-iso-1222/
  - https://www.ulanzi.com/blogs/knowledges/arri-standard-pins-professional-mounting-guide
  - https://kupogrip.com/kupo-universal-5-8in-16mm-stud-3-8in-16-male-and-1-4in-20-male-threads
  - https://helpguide.sony.net/ilc/2230/v1/en/contents/TP1000669451.html
  - https://support.ricoh360.com/faq/x-specification-002
  - https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/
  - https://www.cnckitchen.com/blog/tips-and-tricks-for-heat-set-inserts
  - https://www.cnckitchen.com/blog/helicoils-threaded-insets-and-embedded-nuts-in-3d-prints-strength-amp-strength-assessment
  - https://www.prusa3d.com/product/heat-set-inserts-1-4-20-pcs/
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/File:Screw_Head_-_Tripod_screw-01.jpg
  - https://commons.wikimedia.org/wiki/File:Tripod_screw_to_light_stand_spigot;_August_2020.jpg
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/screws.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** adjustable, environment_limits, load, making_tips_3d_printing, safety_notes

