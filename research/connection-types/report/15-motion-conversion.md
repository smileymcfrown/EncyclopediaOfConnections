# motion conversion: Changes one kind of motion into another (cams, linkages, stepping motion)

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 17 Lead screw and nut (incl. anti-backlash nut)

*motion conversion.* A threaded rod turning inside a nut to push something in a straight line; low-friction versions can be back-driven, fine-pitch ones hold their place

### What it is

- **plain_name**: A long threaded rod that you (or a motor) turn so a nut riding on it moves in a straight line; with a gentle, fine thread it stays where it is when you let go
- **term**: Lead screw and nut (power screw, translation screw), including the anti-backlash nut
- **aliases**: 
  - leadscrew
  - power screw
  - translation screw
  - Acme screw / Acme thread (inch sizes)
  - trapezoidal screw / Tr screw (metric), e.g. 'T8' or 'Tr8x8' lead screw on 3D printers
  - jackscrew / screw jack (when used for lifting)
  - feed screw (machine tools)
  - vice screw / bench screw
  - high-helix lead screw (steep, fast, back-drivable version)
  - anti-backlash nut / zero-backlash nut / preload nut / spring-loaded nut
  - dryspin (igus brand of plastic lead screw nuts)
  - OpenBuilds Anti-Backlash Nut Block (brand)
- **family**: motion conversion
- **other_families**: sliding, telescoping & linear motion, self-locking & anti-back-drive
- **one_liner**: Turning a threaded rod (the lead screw) moves a nut that is kept from spinning along the rod in a straight line, trading speed for a lot of pushing force; fine threads hold their place, and a spring-loaded anti-backlash nut removes the wobble when the direction changes.
- **complexity**: A few parts: the threaded rod (screw), the nut (plastic, brass or bronze), bearings or supports at the rod's ends, a handwheel or a motor coupling, and a guide (rails or slides) that stops the nut and carriage from turning with the screw. An anti-backlash nut is a small assembly: two nut parts (or a nut with springy fingers) plus a compression or torsion spring.
- **how_it_works**: The nut is held so it can't turn, so each turn of the screw moves it along by one lead (the distance one thread advances per turn = pitch x number of starts). Because the threads slide on each other, friction is high: with a shallow thread (small lead angle) the friction is greater than the thread's slope, so pushing on the nut cannot spin the screw (self-locking), while steep, multi-start threads are efficient enough that a load can spin the screw backwards (back-drive). There is always a small gap between the nut's and screw's thread faces (backlash), so the nut shifts a little when the direction reverses. An anti-backlash nut splits the nut in two and uses a spring to push the halves apart along the screw, or to squeeze springy fingers inward, so one part always presses on each thread face.

### Finder attributes

- **job**: 
  - change the kind of motion: rotation into straight-line motion (and back again if it is back-drivable)
  - change speed or turning force: a small turning force makes a large push, at slow speed
  - stop it moving back (one-way): fine-lead screws hold their position when you stop turning (self-locking); note it can still be driven both ways from the screw, and the hold is not guaranteed under vibration
- **motion**: rotate+slide: the screw turns and the nut slides in a straight line; travel is limited by the length of the screw
- **degrees_of_freedom**: 1: the nut's travel is locked to the screw's rotation (one lead per turn), so there is only one independent motion
- **special_behaviour**: 
  - motion conversion (rotary to linear): the screw's rotation becomes a straight push or pull on the nut
  - self-locking (holds under load, won't back-drive): true only for fine leads (a rule of thumb is a lead under about 1/3 of the screw diameter, efficiency under 50%); vibration can let even these creep, so add a brake for hanging loads
  - tensioning (takes up slack and holds), anti-backlash nut only: its spring keeps taking up the gap between the threads as the nut wears
- **holding_principle**: 
  - shape (form-fit): the nut's thread interlocks with the screw's thread, so the nut can't slide along the screw without turning it
  - friction or clamping (force-fit): thread friction is what makes a fine-lead screw self-locking
  - spring force: in anti-backlash nuts, a spring presses the nut parts against opposite thread faces
- **input_output**: Rotation -> straight-line motion. Travel per turn = lead (e.g. a Tr8x8 3D-printer screw moves 8 mm per turn; a Tr8x2 moves 2 mm). Efficiency typically 20-80% (PBC Linear; linearmotiontips), 30-50% for jackscrews (Wikipedia); ball screws, by contrast, are about 90%. Shaft arrangement: in line (the nut travels along the screw's axis). Back-drivable: yes when the efficiency is 50% or more, e.g. a 10 mm screw with a 25 mm lead (83%); no when the lead is under about 1/3 of the diameter, e.g. a 10 mm screw with a 2 mm lead (41%) (PBC Linear); vibration can still make a self-locking screw move.
- **power**: passive (no power needed); often motor-driven. If power is lost, a self-locking (fine-lead) screw keeps its last position, while a back-drivable (steep-lead) screw can let a vertical load, such as a 3D printer gantry or bed, drift or drop unless there is a brake or counterweight
- **removability**: removable: the nut unscrews from the end of the screw, and the screw comes out of its end bearings and coupling
- **reuse_cycles**: many times: it can be dismantled and refitted repeatedly; the nut wears in use and is replaceable
- **tools_needed**: Hex keys or screwdrivers for the nut-mounting screws, bearing clamps and coupler set screws; grease for brass and bronze nuts (self-lubricating plastic nuts run dry); a tap (M5 in the OpenBuilds-style printable block) if you print your own nut block
- **seal**: none: the threads and nut are open to the air and dirt; nothing about the joint seals
- **load**: Medium to heavy along the screw's axis in both push and pull (screw jacks lift cars and buildings). Weak against sideways loads and bending: the nut should ride on a separate guide, not carry side loads. Long, thin screws whip (vibrate like a skipping rope) at speed, so the safe speed limit falls as length increases.
- **adjustable**: yes: the position can be set anywhere along the travel just by turning the screw. Anti-backlash nuts have their preload set by a spring (automatic, e.g. torsion-spring twin nuts) or an adjusting screw (e.g. the M5 screw on the OpenBuilds-style block, tightened until the play is gone but the screw still turns easily)
- **play_and_precision**: Plain nut: noticeable backlash (the gap between thread faces), which grows as the nut wears. Anti-backlash nut: small to none; Sienci Labs' spring-loaded POM nut takes up wear automatically. Fine leads give fine position steps, and repeatability is best when the nut approaches a position from the same direction. It tolerates little misalignment: a screw held by the motor coupler plus a nut on a guided carriage is over-constrained, so any bend or offset causes binding and wobble. Let the float happen in the nut mount or guides, not the screw (igus).
- **access_needed**: end of a tube or shaft: the nut is threaded on from an end of the screw, and the screw is fitted from its ends into end bearings and a motor coupling or handwheel
- **materials**: Screw: steel or stainless steel (sometimes brass or aluminium). Nut: bronze (lowest friction of the metals), brass, cast iron, or plastics such as POM (Delrin/acetal) and igus iglide (brand). Thread friction coefficient ranges from about 0.04 to 0.25 depending on the pair and lubrication (Wikipedia). Printed nuts: PLA works, ABS is a bit worse, and Delrin would be ideal (KP's printable OpenBuilds block); nuts printed in nylon and POM were not as good as machined ones (0scar).
- **maker_difficulty**: easy to fit if bought (T8 lead screw and brass nut sets are cheap 3D-printer parts); moderate to print: coarse trapezoidal or buttress threads for jacks and vises print well, but precise small nuts and anti-backlash nuts print worse than machined ones

### Making it

- **processes**: 
  - off-the-shelf part (by far the most common: Acme or trapezoidal screws with brass, bronze or plastic nuts)
  - 3D print (FDM): nuts and nut blocks for metal screws, and coarse printed screws for jacks, vises and clamps
  - CNC: threads cut on a lathe (screw-cutting) or thread-milled
- **print_in_place**: no: the screw and nut are printed separately and screwed together, or a printed nut is used on a metal screw
- **making_tips_3d_printing**: 1) Usually buy the screw and print only the nut holder or nut: a metal Tr8 screw with a brass or POM nut beats a printed screw for precision. 2) Printable nut block (KP's printable version of the OpenBuilds anti-backlash block): 0.4 mm nozzle, 0.2 mm layers, 5 perimeters, 5 solid top and bottom layers, no supports; screw the lead screw in and out a few times to loosen the fit, add grease, then tap the M5 adjusting hole and tighten it gently until the play is gone but the screw still turns easily. Use something hard, low-friction and slow-wearing: PLA works, ABS is a bit worse, Delrin would be ideal. 3) Fine layers make smoother threads: 0scar printed his OpenSCAD anti-backlash nut at 0.12 mm layers (it came out a bit tight) and found nylon and POM prints worse than machined nuts, so treat printed anti-backlash nuts as experiments. 4) For printed screws, a buttress-style profile with a flat load face and a 45-degree back face prints without support if the screw stands upright with the flat faces pointing up. Miloslav Brozek's parametric screw jack (Printables model 1724067, read via the Printables API) uses 0.16-0.2 mm layers, at least 3 walls, and about 0.5 mm radial and 0.4 mm axial clearance for a free-spinning fit that tightens up under load. 5) Generate threads with BOSL2's trapezoidal_threaded_rod()/trapezoidal_threaded_nut() or acme_threaded_rod()/acme_threaded_nut(); its $slop setting adds printer clearance to internal threads, and 'starts' sets multi-start leads. 6) Mount the nut so it can float slightly sideways, or it will fight the guide rails and bind (igus). 7) PLA softens above about 60 °C (Prusa), so keep printed nuts away from motors and heated beds, and don't lift anything dangerous with a printed jack (nightfox90's own warning).
- **off_the_shelf_parts**: Lead screws and nuts in Acme, rounded Acme and metric trapezoidal threads, and 'precision lead screws and nuts' for motor-driven motion (McMaster-Carr); lead screw end supports and collars; T8 (Tr8x8 4-start, Tr8x2) lead screws with brass or POM flange nuts, sold as 3D-printer and CNC parts; anti-backlash nuts: spring-loaded split nuts, twin nuts with a torsion spring (igus zero-backlash and anti-backlash nuts), and adjustable anti-backlash nut blocks (OpenBuilds (brand)); self-lubricating plastic nuts and high-helix screws (igus dryspin (brand)); flexible shaft couplings for the motor; complete lead-screw linear actuator kits (ServoCity (brand), popular in FTC robotics per Game Manual 0).
- **rules_of_thumb**: 
  - Travel per turn = lead = pitch x number of starts; a thread marked 'Tr 60x18(P9)' has an 18 mm lead, a 9 mm pitch and therefore 2 starts (Wikipedia 'Trapezoidal thread form'). So Tr8x8 (P2) is 4-start, moving 8 mm per turn.
  - A screw is self-locking when the friction coefficient is greater than the tangent of the lead angle, but vibration can undo it (Wikipedia 'Leadscrew').
  - Lead screws with 50% or more efficiency will back-drive; if the lead is less than 1/3 of the screw's diameter it won't (PBC Linear; linearmotiontips also gives the 1/3 rule). Example: 10 mm screw, 2 mm lead = 41% efficient (holds); 25 mm lead = 83% (back-drives) (PBC Linear).
  - Efficiency: lead screws about 20-80%, ball screws about 90% (PBC Linear; linearmotiontips); a steeper lead angle is more efficient (Roton: 8 degrees gives 45% forward and -13% backward efficiency, i.e. self-locking; 20 degrees gives 65% forward and 52% backward).
  - Duty cycle: plastic nuts about 50% under rated load, bronze nuts as low as 10% (linearmotiontips).
  - Keep the running speed below about 80% of the screw's critical (whipping) speed, which falls with length and depends on the end supports (Wikipedia 'Leadscrew'). To cure whipping, use a thicker or shorter screw or a lower speed (igus).
  - Support the screw ends firmly (bearings plus clamps); loose end support is only for slow, hand-driven screws; put any needed float in the guides or nut mount, not the screw (igus Engineer's Toolbox).
  - Plastic nut limits: maximum surface pressure about 4 MPa for iglidur J, 5 MPa for W300 and 3.5 MPa for A180; iglidur nuts work from -20 to +150 °C (igus lead screw FAQ).

### When to use it

- **everyday_examples**: 
  - A bench vice: turning the handle drives the jaw with great force, and it doesn't loosen by itself
  - A car scissor jack: turning the crank winds a screw that lifts the car and holds it (a jackscrew)
  - The Z axis of a 3D printer: motors turn T8 lead screws that raise the print head or lower the bed
  - The laser head in a DVD drive or the head of an old floppy drive, moved along a tiny lead screw by a stepper motor
- **when_to_use**: Use one when you need slow, strong, precise straight-line motion from a motor or a handwheel: lifting and holding (jacks, printer Z axes, robot hanging mechanisms), clamping (vices, presses), fine positioning (machine tool slides, CNC axes), or opening and closing things that must stay put with the power off. It is cheap, compact, quiet, works with plastic nuts that need no grease, and a fine lead holds position without a brake.
- **when_not_to_use**: Avoid it for fast or long moves (it is slow, and long screws whip at speed); use a belt, rack and pinion or linear motor. Avoid it for continuous high-duty or high-efficiency work (it wastes energy as heat and the nut wears); use a ball screw. Don't rely on its self-locking to hold heavy vertical loads safely; add a brake or counterweight. Don't use it where sideways loads would hit the nut; add linear guides. For quick coarse moves followed by fine clamping, add a half nut or use a quick-release mechanism.
- **environment_limits**: Vibration can let a self-locking screw creep (Wikipedia; PBC Linear). Lubrication and wear matter over time: worn nut threads raise backlash, and in aircraft jackscrews poor maintenance has been fatal (Wikipedia 'Jackscrew', Alaska Airlines Flight 261). *(unverified parts omitted)*
- **safety_notes**: A back-drivable (steep-lead or low-friction) screw can let a raised load, printer bed or gantry drop when the motor is switched off; use a fine lead, a brake or a counterweight (linearmotiontips). Screw jacks are only safe while the nut threads are in good condition and lubricated (Wikipedia 'Jackscrew'). *(unverified parts omitted)*
- **common_failures**: 1) Nut wear, so backlash grows: use an anti-backlash nut, bronze or POM nuts, and grease metal nuts. 2) Binding and wobble from misalignment or over-constraint: align the screw with the guides and let the nut float slightly (igus). 3) Whipping and noise at high speed: use a shorter or thicker screw, better end supports or a lower speed (igus; Wikipedia). 4) Load dropping when unpowered with a steep lead: switch to a finer lead or add a brake. 5) Anti-backlash nut problems: over-adjusting or wrong assembly binds the screw, and uneven spring forces cause concentrated wear (Sienci Labs); springs that are too weak leave play. 6) Printed nuts coming out too tight: print finer and run the screw in and out to wear the nut in (KP; 0scar).
- **related**: 
  - Ball screw: balls roll between screw and nut, about 90% efficient, fast and precise, but back-drives easily (about 80% backward efficiency per Roton) and costs more
  - Threadless ball screw (rolling-ring drive): tilted bearings on a smooth rod act as the nut; slips instead of jamming when overloaded
  - Half nut (split nut): a nut that can be opened off the screw for quick free sliding, then closed to drive again
  - Worm drive: the same screw friction, but the screw drives a gear wheel instead of a nut
  - Rack and pinion: a gear on a toothed bar; faster, efficient and back-drivable, but doesn't hold position by itself
  - Belt drive (timing belt): fast, long, cheap linear motion with lower force and no self-locking
  - Differential screw: two threads of slightly different pitch for extremely fine adjustment
  - Roller screw: threaded rollers instead of balls, for very high loads

### Pictures, videos and models

- **links**: 
  - [Leadscrew (Wikipedia)](https://en.wikipedia.org/wiki/Leadscrew): Thread-type drawings (square, Acme, buttress), a lead-angle diagram, an efficiency-versus-lead-angle chart, and photos of lead screws in DVD and floppy drives *(licence: Text CC BY-SA 4.0; images per file on Commons)*
  - [Dvd pohon vozika hlavy.jpg (Wikimedia Commons, by Baran Ivo)](https://commons.wikimedia.org/wiki/File:Dvd_pohon_vozika_hlavy.jpg): Photo of a DVD drive's optical head moved by a small lead screw and stepper motor *(licence: Public domain)*
  - [Category:Leadscrews (Wikimedia Commons)](https://commons.wikimedia.org/wiki/Category:Leadscrews): 39 photos and diagrams of lead screws, Acme threads and uses in drives, machines and boat lifts *(licence: Per file (Commons free licences))*
  - [How to assemble a zero or anti-backlash nut (igus Engineer's Toolbox, with video)](https://toolbox.igus.com/4496/how-to-assemble-a-zero-or-anti-backlash-nut): Video demonstration of a twin nut with a torsion spring that takes up the clearance *(licence: link only)*
  - [HUANGYAN920 Mechanical: interactive animations (entries 'SCREW-NUT', 'ACME-SCREW', 'SCREW-JACK', 'FEED-SCREW')](https://huangyan920.github.io/Mechanical/): Adjustable browser animations of a screw driving a nut, a screw jack and a machine feed screw *(licence: MIT)*
- **make_it_yourself**: 
  - [Openbuilds anti-backlash nut block - printable version (KP, Printables)](https://www.printables.com/model/56496-openbuilds-anti-backlash-nut-block-printable-versi): Printable split nut block for a TR8x8 lead screw with an M5 screw that squeezes out the backlash; includes print and set-up instructions *(licence: GNU GPL v3.0)*
  - [Anti Backlash Nut in OpenSCAD (0scar, Printables)](https://www.printables.com/model/832130-anti-backlash-nut-in-openscad): OpenSCAD spring-loaded two-part anti-backlash nut for Tr8 screws (needs a 10 mm ID x 20 mm spring); links to an improved version *(licence: CC BY-NC-SA)*
  - [Screw Jack (nightfox90, Printables)](https://www.printables.com/model/870039-screw-jack): Fully printed screw jack in four sizes that shows a coarse lead screw lifting and holding; prints without supports *(licence: CC BY-ND)*
  - [BOSL2 threading.scad: trapezoidal, Acme, buttress and square threaded rods and nuts (OpenSCAD library)](https://github.com/BelfrySCAD/BOSL2/wiki/threading.scad): Parametric lead-screw threads and matching nuts with a $slop clearance setting for 3D printing and multi-start leads *(licence: BSD 2-Clause)*
- **diagram_idea**: A cutaway of a screw, nut and guided carriage with an arrow showing one turn = one lead of travel, then a zoomed inset of the thread gap (backlash) and the same inset with a spring-loaded two-part nut pressing both thread faces.
- **sources**: 
  - https://en.wikipedia.org/wiki/Leadscrew
  - https://en.wikipedia.org/wiki/Trapezoidal_thread_form
  - https://en.wikipedia.org/wiki/Jackscrew
  - https://en.wikipedia.org/wiki/Lathe
  - https://commons.wikimedia.org/wiki/Category:Leadscrews
  - https://commons.wikimedia.org/wiki/File:Dvd_pohon_vozika_hlavy.jpg
  - https://pbclinear.com/blogs/blog/what-is-lead-screw-efficiency-in-linear-motion
  - https://www.linearmotiontips.com/dont-rule-out-lead-screws/
  - https://www.linearmotiontips.com/how-to-determine-if-a-screw-will-back-drive/
  - https://www.roton.com/screw-university/screw-actions/screw-backdriving-efficiency/
  - https://www.igus.eu/threaded-rod/wiki
  - https://toolbox.igus.com/10819/how-to-secure-a-lead-screw
  - https://toolbox.igus.com/4496/how-to-assemble-a-zero-or-anti-backlash-nut
  - https://www.youtube.com/watch?v=ev-_GomT2nc
  - https://sienci.com/2023/08/16/everything-you-need-to-know-about-the-spring-loaded-anti-backlash-nut/
  - https://sienci.com/2024/02/02/the-saga-of-the-spring-loaded-anti-backlash-nuts/
  - https://gm0.org/en/latest/docs/common-mechanisms/linear-motion-guide/lead-screws.html
  - https://www.mcmaster.com/products/lead-screws/
  - https://www.mecapedia.uji.es/pages/irreversibilidad.html
  - https://help.prusa3d.com/article/pla_2062
  - https://github.com/BelfrySCAD/BOSL2/wiki/threading.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/threading.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://huangyan920.github.io/Mechanical/
  - https://www.printables.com/model/56496-openbuilds-anti-backlash-nut-block-printable-versi
  - https://www.printables.com/model/832130-anti-backlash-nut-in-openscad
  - https://www.printables.com/model/870039-screw-jack
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, safety_notes

## 35 Geneva drive (Maltese cross)

*motion conversion.* A pin on a steadily turning wheel steps a slotted wheel round by a fixed amount, then holds it still until the next step

### What it is

- **plain_name**: A wheel with a pin that turns round and round, and once per turn the pin dips into a slot in a star-shaped wheel and flicks it round one notch; the rest of the time a round disc holds the star wheel still
- **term**: Geneva drive (Geneva mechanism, Maltese cross mechanism)
- **aliases**: 
  - Geneva mechanism
  - Geneva wheel / Geneva gear
  - Maltese cross (mechanism) / Maltese cross drive
  - Geneva stop (the version with one slot blocked, used to stop a watch or clock spring being over-wound)
  - external Geneva / internal Geneva / spherical Geneva (the three layouts)
  - star wheel (loosely; strictly a star wheel is a related mechanism with gear teeth)
  - Malteserkreuzgetriebe (German)
  - croix de Malte (French)
  - 槽轮机构 (Chinese, 'slotted-wheel mechanism')
  - ゼネバ歯車 (Japanese)
- **family**: motion conversion
- **other_families**: indexing & detents, self-locking & anti-back-drive
- **one_liner**: A continuously turning drive wheel carries a pin that enters a slot in a driven wheel and turns it by a fixed step (360 degrees divided by the number of slots), then a raised locking disc on the drive wheel holds the driven wheel still until the next step.
- **complexity**: A few parts: a drive wheel (crank) carrying a pin, often with a small roller on it, and a raised locking disc with a cut-away; a driven wheel with n straight slots and curved notches between them (the 'Maltese cross'); two shafts with bearings held at an exact distance apart.
- **how_it_works**: The drive wheel turns steadily. Once per turn its pin slides into one of the driven wheel's slots, pushes the wheel round by one slot (90 degrees for a 4-slot wheel, 60 for a 6-slot) and slides out again. While the pin is away, the curved edge of the locking disc sits in a matching curved notch of the driven wheel, so the driven wheel cannot turn at all; a cut-away in the locking disc lets the driven wheel swing only while the pin is driving it. In a well-designed Geneva the pin enters and leaves each slot straight along the slot's centre line, so the driven wheel starts and stops smoothly from zero speed, though not with zero jolt.

### Finder attributes

- **job**: 
  - change the kind of motion: turns steady rotation into stop-go steps
  - click into set positions: it moves the output to one of n fixed positions and holds it there during each pause
  - change speed or turning force: on average the output turns n times slower than the input (one step of 360/n degrees per input turn)
- **motion**: rotate: continuous rotation in; stepped rotation out, 360 degrees / n per input turn (for example 90 degrees per step with 4 slots), always in the same direction, with unlimited total rotation (except the Geneva stop version, which is limited to a set number of turns)
- **degrees_of_freedom**: 1: the output's position is fully set by the input crank's angle, either being driven by the pin or held by the locking disc
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): continuous rotation becomes intermittent rotation, with a smooth start and stop of each step
  - indexing (clicks into set positions): the output stops at n equally spaced positions per turn
  - self-locking (holds under load, won't back-drive): during each pause the locking disc blocks the output, so a load on the output cannot turn it and cannot drive the input; RoyMech notes the driven wheel is always under the driver's control, so it can't overrun
  - Geneva stop variant: with one slot closed, the drive wheel can only make a set number of turns, which was used to stop watch springs being over-wound or fully unwound (Wikipedia; 507 Mechanical Movements no. 212)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it converts and passes on rotation
  - shape (the parts interlock; form-fit): during each pause the round locking disc sits in the driven wheel's curved notch, which physically blocks it from turning
- **input_output**: Continuous rotation -> stepped (intermittent) rotation in the same plane. Step = 360 degrees / n, n = 3 to 18 slots in practice, 4 to 8 most common. Timing is fixed by n: an external Geneva moves for 1/2 - 1/n of each input turn (4 slots: moves 25%, rests 75%; 6 slots: moves 33%, rests 67%), an internal Geneva moves for more than half, a spherical one for exactly half. Peak output speed = input speed / (1/sin(180 degrees/n) - 1): about 2.4 times the input speed for 4 slots and equal to it for 6 slots. Shafts: parallel for external and internal types; intersecting at right angles for the rare spherical type. Back-drivable: no during the pause (the locking disc blocks the output); during a step the pin is in control, so the output cannot run ahead. *(unverified parts omitted)*
- **power**: passive (no power needed); it is usually driven by a motor or hand crank, and if power is lost the output simply stays locked where it was during a pause
- **removability**: removable: the two wheels sit on shafts or axles in a frame and can be taken apart (screws, retaining rings or push-fit axles)
- **reuse_cycles**: many times: it can be dismantled and reassembled repeatedly; the limit is wear of the pin, slots and locking surfaces, not the assembly
- **tools_needed**: A screwdriver or hex key for the frame and shaft fixings, or none for push-fit and LEGO-axle printed models; optionally a little lubricant for the pin, slots and axles
- **seal**: none: it is an open mechanism; it does not seal anything
- **load**: Light to heavy depending on size: Bickford notes Genevas range from instrument sizes to machine-tool drives indexing spindle carriers weighing several tons, and quotes an 18-inch Geneva lasting 20 years indexing a one-ton carrier every few seconds. The weak points are the pin and the slot walls, which take a jolt each time the pin enters, and the locking disc during the pause. External Genevas can be smaller and take higher stresses than internal ones (Wikipedia). Printed plastic versions are for light loads and demonstrations.
- **adjustable**: No: the step angle and the move-to-pause timing are fixed by the number of slots once it is designed; only the starting position (phase) is set when assembling
- **play_and_precision**: The output is held during each pause by the locking disc sitting in its notch, so play comes from the clearance between those curved surfaces and between the pin and the slot; Wikipedia notes the locking disc keeps the image steady in film projectors. Centre distance must be held accurately so the locking disc works without jamming (cramping) and the pin meets the slots correctly, and a pin that is loose in its slot can chatter from side to side at speed (Bickford). Heavy machine tools add a separate locating and locking mechanism for exact final position (Bickford, fig. 9-14). It tolerates little misalignment between the shafts.
- **access_needed**: not applicable: it is two wheels on shafts in a frame, reached wherever the frame opens
- **materials**: 3D-printed plastics work for light duty: a Bucharest study printed Genevas in PLA, ABS, PLA with copper, PLA with bronze and acrylic (plexiglass), and found ABS and copper-filled PLA ran with much less noise and vibration (3DPrint.com on Rizescu et al.); osamutake recommends well-dried PETG for accuracy. *(unverified parts omitted)*
- **maker_difficulty**: easy to moderate: free generators calculate the geometry and the parts print flat without supports (some even print already assembled), but the shafts must be held at the right distance and the pin must run smoothly in the slots

### Making it

- **processes**: 
  - 3D print (FDM): many printable demos, counters, clocks and toys, including print-in-place versions
  - CNC: the traditional way to make metal ones; slots and locking arcs are milled
  - off-the-shelf part: Bickford (1972) notes Genevas were sold ready-made by several makers; for hobby builds buy the shafts, bearings, pins and retaining rings *(unverified parts omitted)*
- **print_in_place**: yes: TazaParts' LEGO-compatible Geneva drive prints already assembled without supports, using 0.2-0.3 mm clearances on the moving parts; most printable Genevas are printed as separate flat parts and pushed onto axles
- **making_tips_3d_printing**: 1) Get the geometry from a generator: Ben Brandt's online Geneva Drive Generator takes the crank radius, number of positions, pin diameter and clearance and gives the centre distance, slot length and width and locking-arc sizes, with an animation; tllilleh's OpenSCAD library (needs BOSL2) builds the parts. 2) Print the wheels flat on the bed; they need no supports. 3) Surface finish matters because the pin slides along the slots: osamutake uses 0.1 or 0.08 mm layers and a random seam position so the seams wear in instead of catching, and Shmoee recommends 0.12 mm layers for the Geneva wheel because Z-seams make it rough; sand or file any seam blobs if it sticks. 4) Clearances: 0.2-0.3 mm for print-in-place parts (TazaParts), about 0.15 mm radial clearance for gears on printed shafts (osamutake); 5) Elephant's foot (a squashed first layer) and stringing make holes too tight: file the hole or sand the shaft (osamutake). 6) Use well-dried PETG for accuracy (osamutake); ABS and copper-filled PLA were quieter in the Bucharest study. 7) Smooth axles: flanged ball bearings (Joel uses F6901Z) or metal screws as axles (whlpr uses M3 x 14 screws); a drop of lubricant such as bike chain lube quiets it (TazaParts). 9) Keep the centre distance exact: mount both shafts in one rigid printed frame rather than two separate parts. *(unverified parts omitted)*
- **off_the_shelf_parts**: Shafts or axles (steel rod, LEGO Technic axles (brand)); flanged ball bearings (e.g. Industrial alternatives are sold as cam indexers and rotary index tables (search 'indexing drive', 'rotary indexer'). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Step angle = 360 degrees / n per turn of the drive wheel; n is from 3 to 18 in practice (Wikipedia 'Geneva drive'; Bickford: 'no less than three, and usually no more than 18'); 4, 6 and 8 are common.
  - Centre distance c = a / sin(180 degrees / n), where a is the crank (pin) radius; driven wheel radius b = square root of (c squared - a squared) = a / tan(180 degrees / n) (Ben Brandt's Geneva Drive Generator source code; MechSimulator; French Wikipedia 'Croix de Malte (mecanisme)'). Example: a 20 mm crank with 4 slots needs 28.3 mm between shafts and a 20 mm wheel radius.
  - Slot length along its centre line s = a + b - c; slot width = pin diameter + clearance; locking (stop) arc radius = a - 1.5 x pin diameter, and the locking disc is that minus the clearance (Ben Brandt's Geneva Drive Generator).
  - An external Geneva moves for 1/2 - 1/n of each input turn and rests for the rest (French Wikipedia): the pause is always longer than the move, and longer than half a turn of the input (Bickford). An internal Geneva moves for more than half the turn; a spherical one exactly half (Bickford).
  - Peak output speed = input speed / (1/sin(180 degrees/n) - 1) (French Wikipedia): about 2.4 times input speed with 4 slots, equal to input speed with 6 slots. More slots mean lower peak speed and acceleration of the output (Bickford).
  - The pin must enter and leave each slot exactly along the slot's centre line (the pin's path tangent to the slot); an error of as little as 5 degrees introduces an impact (Bickford, fig. 9-7 to 9-9). Shape the pin so it picks up the wheel as gently as possible (RoyMech).
  - Hold the centre distance accurately so the locking disc works without jamming, and make the pin a good running fit in the slots so it does not chatter (Bickford).
  - Even a perfect Geneva jolts the output at the start and end of each step (infinite jerk), which causes vibration at high speed or with heavy loads; fine at low speed and low inertia (Wikipedia; French Wikipedia).

### When to use it

- **everyday_examples**: 
  - Old cinema film projectors, which pull the film down one frame at a time and hold it still in front of the lens (Wikipedia; Filmmuseum Berlin video)
  - The 'Geneva stop' inside some mechanical watches and clocks that stops the spring being wound too far
  - Tool changers and turret heads on machines, pen changers on plotters, and rotary indexing tables
  - Printed desk toys, flip counters and 'wandering hour' clocks on model sites such as Printables
- **when_to_use**: Use it when a motor or crank turns steadily but you need something to move one step, stop for a while, and move again, always the same amount and the same way: advancing a turntable or carousel between stations, a film or tape frame by frame, a counter or scoreboard digit, a rotating display, a sample tray, a tool or filter wheel, or a clock hand that jumps. It is simple, cheap, holds the output firmly during each pause without a separate brake, and starts and stops each step more gently than an intermittent (part-toothed) gear.
- **when_not_to_use**: Avoid it at high speed or with heavy, fast-moving loads, where its jolt at each start and stop causes vibration and wear; use a cam indexer, which can be shaped for smoother motion. Avoid it when you need only one or two stops per turn, a long move with a short pause, or unequal steps: use an intermittent (part-toothed) gear or a star wheel. When you need to change the step size, go backwards on command or stop anywhere, use a stepper motor or a servo instead. For stepping driven by a back-and-forth lever, use a ratchet and pawl.
- **environment_limits**: Vibration: it causes its own vibration at speed because of the jolt at each step (Wikipedia). *(unverified parts omitted)*
- **safety_notes**: At speed the sudden steps can throw loose items off a carousel. *(unverified parts omitted)*
- **common_failures**: 1) Knocking or clacking at each step because the pin enters the slot at an angle rather than along its centre line, or the centre distance is wrong (Bickford): use a generator and a rigid frame. 2) Jamming or binding during the pause because the locking disc is too tight in its notch or the centre distance is off (Bickford): add clearance. 3) Wobble of the output during the pause from too much clearance or wear: reduce clearance, replace worn parts. 4) Pin chatter from a loose pin in the slot, causing a series of impacts (Bickford). 5) Vibration and wear when run too fast (Wikipedia). 6) Printed parts sticking because of Z-seams, stringing or elephant's foot (Shmoee; osamutake): use fine layers, a random seam and file or sand the fits.
- **related**: 
  - Intermittent gear (mutilated or part-toothed gear): also gives stop-go motion with locking arcs, and can do one or two stops per turn or long moves with short pauses, but it starts and stops abruptly (Bickford; osamutake)
  - Star wheel: combines a Geneva-style smooth start and stop with gear teeth for the middle of the move, giving more design freedom (Bickford; RoyMech)
  - Cam indexer (barrel or globoid cam): shaped cams give fully controlled, smooth steps at high speed, at higher cost; in textile machines and projectors, Genevas and star wheels have been almost entirely replaced by such cam drives or by electric motors (German Wikipedia 'Schrittgetriebe')
  - Ratchet and pawl: steps a wheel one tooth at a time from a back-and-forth input, and can be made to hold against reverse
  - Escapement: lets a wound spring or weight release one step at a time, controlled by a pendulum or balance
  - Stepper motor: electronic stepping whose size, speed and direction can be changed in software

### Pictures, videos and models

- **links**: 
  - [Geneva mechanism 6spoke animation.gif (Wikimedia Commons, by Mike1024)](https://commons.wikimedia.org/wiki/File:Geneva_mechanism_6spoke_animation.gif): Animated six-slot external Geneva drive stepping round, with the locking disc visible *(licence: Public domain)*
  - [Internal Geneva wheel ani.gif (Wikimedia Commons, by Coolhandscot)](https://commons.wikimedia.org/wiki/File:Internal_Geneva_wheel_ani.gif): Animated internal Geneva drive, where the drive wheel sits inside the slotted wheel *(licence: Public domain)*
  - [Filmmuseum Berlin - Oskar Messter Maltese Cross in function.webm (Wikimedia Commons, by SunOfErat)](https://commons.wikimedia.org/wiki/File:Filmmuseum_Berlin_-_Oskar_Messter_Maltese_Cross_in_function.webm): Video of a real Maltese cross mechanism from an early film projector working in a museum display *(licence: CC BY-SA 4.0)*
  - [507 Mechanical Movements, No. 212: the Geneva-stop](https://507movements.com/mm_212.html): 1868 drawing (with an animated version) of the Geneva stop used in Swiss watches to limit winding *(licence: Book public domain; website animation link only)*
  - [Geneva mechanism 15 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=TYRks3vmAlI): CAD animation of a Geneva mechanism *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Lego compatible Geneva drive (print-in-place) (TazaParts, Printables)](https://www.printables.com/model/1092473-lego-compatible-geneva-drive-print-in-place): Geneva drive that prints already assembled with no supports, 0.2-0.3 mm clearances, LEGO Technic compatible; video at youtu.be/cG9SiGAxTPY *(licence: CC BY)*
  - [Educational Gear Examples 2 (osamutake, Printables)](https://www.printables.com/model/1427427-educational-gear-examples-2): Set of small demonstration gear pairs on 80 mm base plates, including an external Geneva drive and a two-layer intermittent gear to compare side by side, with printing advice *(licence: CC BY)*
  - [Single Thumbwheel Counter (00 to 99) using a Geneva Drive (Shmoee, Printables)](https://www.printables.com/model/520907-single-thumbwheel-counter-00-to-99-using-a-geneva-): A practical 00-99 counter where a Geneva drive carries the tens digit *(licence: CC BY-NC)* *(unverified parts omitted)*
- **diagram_idea**: A 4-slot Geneva drawn at four moments (pin entering along the slot, pushing mid-way, leaving, and the locking disc holding the cross), with a timeline bar underneath showing a short 'move' section (25%) and a long 'hold' section (75%) for one turn of the drive wheel.
- **sources**: 
  - https://en.wikipedia.org/wiki/Geneva_drive
  - https://fr.wikipedia.org/wiki/Croix_de_Malte_(m%C3%A9canisme)
  - https://de.wikipedia.org/wiki/Schrittgetriebe
  - https://en.wikipedia.org/wiki/Intermittent_mechanism
  - https://commons.wikimedia.org/wiki/Category:Geneva_drives
  - https://commons.wikimedia.org/wiki/File:Geneva_mechanism_6spoke_animation.gif
  - https://commons.wikimedia.org/wiki/File:Internal_Geneva_wheel_ani.gif
  - https://commons.wikimedia.org/wiki/File:Filmmuseum_Berlin_-_Oskar_Messter_Maltese_Cross_in_function.webm
  - https://roymech.org/Useful_Tables/Cams_Springs/Indexing.html
  - https://www.engineersedge.com/mechanics_machines/geneva_mechanism_design_equations__14919.htm
  - https://ecommons.cornell.edu/handle/1813/57662
  - https://ecommons.cornell.edu/server/api/core/bitstreams/4686812a-7d97-47e4-8f46-1fb663eb41fd/content
  - https://ecommons.cornell.edu/server/api/core/bitstreams/3c2c62ea-1cc9-438a-991f-92b0ad210e0e/content
  - https://507movements.com/mm_212.html
  - https://507movements.com/toc.html
  - https://benbrandt22.github.io/genevaGen/
  - https://benbrandt22.github.io/genevaGen/genevaController.js
  - https://raw.githubusercontent.com/tllilleh/openscad-geneva-drive/master/README.md
  - https://mechsimulator.com/mechanisms/
  - https://mechsimulator.com/tools/geneva-mechanism/
  - https://huangyan920.github.io/Mechanical/
  - https://karakurist.jp/?p=21
  - https://3dprint.com/252811/researchers-study-3d-printed-geneva-mechanisms/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1092473-lego-compatible-geneva-drive-print-in-place
  - https://www.printables.com/model/520907-single-thumbwheel-counter-00-to-99-using-a-geneva-
  - https://www.printables.com/model/1024053-geneva-mechanism-with-f6901z-bearings
  - https://www.printables.com/model/107461-geneva-drive
  - https://www.printables.com/model/1427427-educational-gear-examples-2
  - https://www.printables.com/model/1504642-educational-gear-examples-5-intermittent
  - https://www.youtube.com/watch?v=TYRks3vmAlI
  - https://www.youtube.com/watch?v=cG9SiGAxTPY
  - https://help.prusa3d.com/article/pla_2062

### Other info

- **Fields with unverified parts:** environment_limits, input_output, make_it_yourself, making_tips_3d_printing, materials, off_the_shelf_parts, processes, safety_notes

## 36 Intermittent gear (mutilated or part-toothed gear)

*motion conversion.* A gear with teeth only on part of its rim, so the gear it drives moves in steps with pauses between them

### What it is

- **plain_name**: A gear with most of its teeth missing: while its few teeth go past, they turn the other gear; while its smooth, toothless part goes past, the other gear stops and is held still
- **term**: Intermittent gear (mutilated gear, part-toothed gear)
- **aliases**: 
  - mutilated gear / mutilated gearing
  - part-toothed gear / partial gear
  - incomplete gear (direct translation of the Chinese name 不完全齿轮)
  - teeth-uncompleted gear (Nguyen Duc Thang's name for his animations)
  - intermittent gearing / intermittent gear drive
  - mutilated pinion / transfer pinion (the small carry gear between the digit wheels of a mechanical counter)
  - two-tooth gear (the counter carry gear with all but two teeth removed)
  - mutilated bevel gear / mutilated rack (bevel and straight-line versions)
  - 間欠歯車 (Japanese)
  - 不完全齿轮机构 (Chinese)
- **family**: motion conversion
- **other_families**: gear trains, gearboxes & transmissions, indexing & detents
- **one_liner**: A driving gear with teeth on only part of its rim turns its partner gear while those teeth pass, then a smooth arc on the toothless part slides against the partner and holds it still, so steady rotation becomes stop-go steps.
- **complexity**: A few parts: a driving gear with one or more toothed sections and smooth locking arcs (a holding ring) on the rest of its rim; a driven gear with matching curved locking surfaces between its teeth (or a spring roller detent that holds it instead); two shafts with bearings held at a fixed distance. It is often built in two layers: one layer of teeth that drive and one layer of arcs that lock.
- **how_it_works**: While the toothed part of the driving gear passes, the two gears mesh like ordinary gears and each tooth pushes the driven gear on by one tooth. When the toothless part arrives, the teeth stop meshing and a smooth arc on the driving gear, centred on its own shaft, slides along a matching curved surface on the driven gear, which holds the driven gear still (so it can't be turned or drift) until the teeth come round again. The teeth pick up the driven gear at full speed, so it starts and stops suddenly with a knock, unlike a Geneva drive. Several toothed sections can be placed round the driver, even unevenly, to give several steps per turn with different pauses.

### Finder attributes

- **job**: 
  - change the kind of motion: turns steady rotation into stop-go steps (or, in variants, into back-and-forth motion)
  - click into set positions: the output stops and is held at set positions, as in the digit wheels of a mechanical counter
  - change speed or turning force: while the teeth mesh it works as an ordinary gear pair with the usual gear ratio
- **motion**: rotate: continuous rotation in; stepped rotation out, one step per toothed section, with the step size set by how many teeth are left; variants give stepped rotation in opposite directions (mutilated bevel gears) or back-and-forth straight motion (a part-toothed pinion driving two racks in turn)
- **degrees_of_freedom**: 1: the output is either driven by the teeth or held by the locking arcs, so its position is always tied to the input's angle
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): continuous rotation becomes intermittent rotation; variants turn it into reversing or reciprocating motion (507 Mechanical Movements nos. 74 and 114)
  - indexing (clicks into set positions): the output stops at fixed positions; this is how the carry between digit wheels works in mechanical counters
  - self-locking (holds under load, won't back-drive): during each pause the locking arcs hold the output so a load can't turn it; RoyMech notes the output is always under the input's control
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it converts and passes on rotation
  - shape (the parts interlock; form-fit): during the pause, the smooth arc of the driver sits against a matching curved surface of the driven gear and blocks it *(unverified parts omitted)*
- **input_output**: Continuous rotation -> intermittent rotation (or reversing or reciprocating motion in variants). Output step = (number of teeth in the driver's toothed section / number of teeth on the driven gear) x 360 degrees; for example two teeth turn an 8-tooth gear by two teeth, a quarter turn (woodgears.ca). While meshed, the speed ratio is the ordinary gear ratio (Bickford), and the share of each turn spent moving versus pausing is set by how much of the driver's rim is toothed; it can give long moves with short pauses and one, two or three pauses per output turn, which a Geneva cannot. Shafts: parallel (spur gears), intersecting (bevel gears), or gear to rack for straight motion. *(unverified parts omitted)*
- **power**: passive (no power needed); usually turned by a motor, crank or the previous counter wheel, and if power is lost the output stays where it is
- **removability**: removable: the gears sit on shafts in a frame and can be taken apart (retaining rings, screws or push-fits)
- **reuse_cycles**: many times: it can be dismantled and reassembled repeatedly; the limit is wear of the first teeth and the locking arcs
- **seal**: none: it is an open gear mechanism; it does not seal anything
- **load**: Light: RoyMech says mutilated gears stand up well to the loads found in instruments and counters, but are subject to large impact loads and accelerations at high driving speeds, so Genevas or star wheels are preferred for high speed and power. Bickford says that at high speed or high load 'its name is well deserved'. The weak points are the first tooth of each toothed section, which takes the impact, and tooth tips that can collide (top) if the output is not held properly during the pause. osamutake calls it unsuitable for heavy loads or high speeds.
- **adjustable**: No, once made: the number, size and position of the toothed sections fix the steps and timing; they are chosen at design time and can be spaced unevenly to set any timing you like (osamutake)
- **play_and_precision**: RoyMech credits mutilated gears with good indexing accuracy, since the gears themselves are accurate and the output is always under the input's control. While moving it has the normal backlash of a gear pair; during the pause the locking arcs hold the output, and any clearance there lets it wobble. *(unverified parts omitted)*
- **access_needed**: not applicable: it is a set of gears on shafts in a frame, reached wherever the frame opens
- **maker_difficulty**: moderate: the gears are ordinary and print or cut easily, but you must add locking arcs and get the timing right so the first tooth enters cleanly; copying a working printed model first is the easiest start

### Making it

- **processes**: 3D print (FDM): printable demonstration sets and counters exist, woodwork: a wooden counter with part-toothed carry gears (woodgears.ca) *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Start by printing and studying a working design: osamutake's 'Educational Gear Examples' sets include two-layer intermittent gears, an intermittent lantern gear and an internal Geneva on the same base plates. 2) Always add locking surfaces: make the toothless part of the driver a smooth arc centred on the driver's shaft, and give the driven gear matching curved faces between its engaging teeth, so the output is held during the pause (osamutake; RoyMech; Bickford). A two-layer layout is easiest to print: one layer carries the driving teeth, the other the locking arcs; for a counter carry, cut back every other tooth of the driven gear on one layer (karakurist.jp; woodgears.ca). 4) osamutake's print settings: well-dried PETG for accuracy, 0.1 or 0.08 mm layers for smooth faces, slow speed on overhangs, and 'random' seam position so seams wear in instead of catching. 5) Clearances: about 0.15 mm radial clearance between gears and printed shafts (osamutake); sand off stringing on shafts and widen tight holes with a thin round file if elephant's foot (a squashed first layer) makes them bind. 7) Run it slowly and lightly loaded; a motor at high speed will chip the first teeth. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Always give it holding (locking) surfaces: RoyMech warns that running without holding rings is undesirable at any speed, because the driver's teeth will sooner or later hit the tips of the output's teeth, and since they meet near the line between the centres even a small input torque produces large wedging (toggle) forces that damage the teeth. Bickford agrees that some holding arrangement is essential.
  - Each tooth on the driver's toothed section moves the output on by one tooth, so output step = (teeth in the section / teeth on the output) x 360 degrees; two teeth turn an 8-tooth gear a quarter turn (woodgears.ca).
  - Counter carry example: a 20-tooth driver with an 8-tooth driven gear (every other tooth cut back on one layer) passes motion on for only 1/10 of a turn (36 degrees); a 24-tooth driver gives 1/12 (karakurist.jp).
  - Keep speed and load low; for high speed or high power use a Geneva or star wheel instead (RoyMech; Bickford; osamutake).
  - Unlike a Geneva, which needs at least three (in practice four) pauses per output turn and always pauses longer than it moves, a mutilated gear can give one, two or three pauses per output turn and long moves with short pauses (Bickford, ch. 15).
  - The toothed sections on the driver don't have to be evenly spaced; placing them unevenly sets any timing you want (osamutake).
  - 3D printing: about 0.15 mm radial clearance on printed shafts, well-dried PETG, 0.08-0.1 mm layers (osamutake).

### When to use it

- **everyday_examples**: 
  - The number wheels of mechanical counters, where a small carry gear moves the next digit on once per turn (tally counters, tape counters on old tape decks, older car mileage counters and utility meters; RoyMech says mutilated gears are used in almost all counters)
  - Board-game and scoreboard flip counters printed at home *(unverified parts omitted)*
- **when_to_use**: Use it for simple stop-go motion at low speed and light load, especially counters (carrying one digit wheel to the next), and when a Geneva drive can't do what you want: only one or two stops per turn, long moves with short pauses, unevenly timed steps, or motion that switches between two outputs in turn (for example two sides of a model moving one after the other). It is cheap and can be made from ordinary gears by removing teeth and adding locking arcs.
- **when_not_to_use**: Avoid it at high speed or with heavy or fast-moving loads, because the teeth pick up the output suddenly and cause impacts, noise and chipped teeth; use a Geneva drive or star wheel for a gentler start and stop, or a cam indexer for fully controlled motion. Use a stepper motor if the step size or direction must change on command, and a ratchet and pawl if the input is a back-and-forth lever rather than steady rotation.
- **environment_limits**: Printed PLA softens above about 60 °C (Prusa). *(unverified parts omitted)*
- **safety_notes**: Sudden starts can fling or tip light objects carried on the output. Otherwise none known. *(unverified parts omitted)*
- **common_failures**: 1) Tooth tips colliding (topping) and jamming or breaking when the output isn't held during the pause (RoyMech; Bickford): add locking arcs or a detent. 2) Chipped or worn first teeth from impacts at speed (Bickford; RoyMech): slow it down, trim the first tooth, or use a Geneva. 3) Jamming at the hand-over from teeth to arc because of bad timing (507 Mechanical Movements no. 269 note): adjust the phase or trim the transition teeth. 4) The output drifting or digits misaligning because the locking surfaces are worn or have too much clearance. 5) Stiff running from stringing or elephant's foot on printed parts (osamutake): sand and file the fits.
- **related**: 
  - Geneva drive (Maltese cross): a pin and slots instead of teeth; starts and stops each step smoothly from zero speed, but needs at least three or four stops per turn and always pauses longer than it moves (Bickford; osamutake)
  - Star wheel: combines a Geneva-like smooth start with gear teeth for the middle of the move (Bickford)
  - Cam indexer: shaped cams give smooth, fully controlled steps at high speed
  - Ratchet and pawl: steps a toothed wheel from a back-and-forth input and can stop it turning backwards
  - Spur gear pair: the full-toothed version, which turns continuously
  - Rack and pinion: with a part-toothed pinion driving two racks in turn it gives back-and-forth straight motion (507 Mechanical Movements no. 114)
  - Escapement: releases a spring- or weight-driven wheel one tooth at a time

### Pictures, videos and models

- **links**: 
  - [507 Mechanical Movements, No. 74: mutilated bevel gear](https://507movements.com/mm_074.html): 1868 drawing with an animated version: a mutilated bevel gear gives two bevel gears intermittent rotation in opposite directions *(licence: Book public domain; website animation link only)*
  - [507 Mechanical Movements, No. 114: mutilated pinion and two racks](https://507movements.com/mm_114.html): Drawing with animation of a part-toothed pinion driving a top and bottom rack in turn, giving back-and-forth motion *(licence: Book public domain; website animation link only)*
  - [Transmission with teeth-uncompleted gears 1b (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=8lNxCUpZH8k): CAD animation of an intermittent (part-toothed) gear drive; one of a numbered series of variants *(licence: link only (standard YouTube licence))*
  - [Educational Gear Examples 5 - Intermittent (osamutake, YouTube)](https://www.youtube.com/watch?v=9aCpXa-tHRA): Printed intermittent gears, an intermittent lantern gear and an internal Geneva running side by side *(licence: link only (standard YouTube licence))*
  - [間欠歯車 #1 (Intermittent Gear) (S.CRAFT, YouTube)](https://www.youtube.com/watch?v=6R0ikyHhWHw): A physical intermittent gear model in motion *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Educational Gear Examples 5 - Intermittent (osamutake, Printables)](https://www.printables.com/model/1504642-educational-gear-examples-5-intermittent): Printable demonstration set: two intermittent gear pairs (one with several stops per turn), an intermittent lantern gear and an internal Geneva drive, with detailed print and assembly notes *(licence: CC BY)*
  - [Educational Gear Examples 2 (osamutake, Printables)](https://www.printables.com/model/1427427-educational-gear-examples-2): Includes a two-layer intermittent gear (upper layer drives, lower layer locks) next to a Geneva drive for comparison *(licence: CC BY)*
  - [Intermittent mechanism (Michel, Printables)](https://www.printables.com/model/1434687-intermittent-mechanism): One control gear drives two outputs a full turn each, one after the other, with the idle side blocked; made to simulate traffic taking turns *(licence: Creative Commons Public Domain (per Printables))*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (entry 'INCOMPLETE-GEAR', 不完全齿轮机构)](https://huangyan920.github.io/Mechanical/): Browser animation of a part-toothed gear driving its partner intermittently, held still by a locking arc between steps *(licence: MIT)* *(unverified parts omitted)*
- **diagram_idea**: A driving gear with a short toothed section and a long smooth arc, shown at three moments (teeth meshing and turning the output, hand-over, smooth arc sliding against the output's curved notch and locking it), with a speed graph beneath showing the output's sudden start and stop compared with a Geneva's smooth curve.
- **sources**: 
  - https://roymech.org/Useful_Tables/Cams_Springs/Indexing.html
  - https://ecommons.cornell.edu/handle/1813/57662
  - https://ecommons.cornell.edu/bitstream/handle/1813/57662/002_011.pdf
  - https://ecommons.cornell.edu/server/api/core/bitstreams/3c2c62ea-1cc9-438a-991f-92b0ad210e0e/content
  - https://karakurist.jp/?p=85
  - https://karakurist.jp/?p=21
  - https://woodgears.ca/counter/
  - https://507movements.com/toc.html
  - https://507movements.com/mm_074.html
  - https://507movements.com/mm_114.html
  - https://507movements.com/mm_269.html
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/1504642-educational-gear-examples-5-intermittent
  - https://www.printables.com/model/1427427-educational-gear-examples-2
  - https://www.printables.com/model/1434687-intermittent-mechanism
  - https://www.printables.com/model/1549231-mechanical-counter
  - https://www.youtube.com/watch?v=8lNxCUpZH8k
  - https://www.youtube.com/watch?v=PZ54x2hgU9A
  - https://www.youtube.com/watch?v=9aCpXa-tHRA
  - https://www.youtube.com/watch?v=6R0ikyHhWHw
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/main/README.md
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/main/LICENSE
  - https://en.wikipedia.org/wiki/Intermittent_mechanism
  - https://de.wikipedia.org/wiki/Schrittgetriebe
  - https://help.prusa3d.com/article/pla_2062

### Other info

- **Fields with unverified parts:** environment_limits, everyday_examples, holding_principle, input_output, make_it_yourself, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, print_in_place, processes, safety_notes, tools_needed

## 84 Cam and follower (plate, barrel and face cams)

*motion conversion.* A shaped wheel or drum turns and pushes a follower up and down or side to side in a planned pattern

### What it is

- **plain_name**: A wheel with a lumpy or off-centre edge (or a drum with a wavy groove) that turns and pushes a rod or lever up and down or side to side, in whatever pattern of lifts, pauses and drops its shape has been cut to give
- **term**: Cam and follower (cam mechanism): plate (disc, radial) cam, barrel (cylindrical, drum) cam and face cam
- **aliases**: 
  - cam mechanism / cam and follower
  - plate cam / disc cam / radial cam
  - barrel cam / cylindrical cam / drum cam / grooved cylinder cam
  - face cam / end cam / groove cam (grooved plate cam)
  - eccentric (cam) / eccentric circular cam
  - pear cam, heart cam (heart-shaped cam), snail cam (drop cam), multi-lobe cam
  - linear cam / wedge cam (a cam that slides instead of turning)
  - camshaft (several cams on one shaft)
  - cam follower / tappet / cam roller / track roller
  - knife-edge, roller, flat-faced (mushroom) and curved (spherical) followers
  - swashplate / oblique disc (a tilted-disc face cam)
  - diamond screw / reversing screw (a crossed-groove barrel cam, as in fishing-reel level-winds)
  - Nockenwelle (German, 'camshaft'); came (French)
- **family**: motion conversion
- **other_families**: locks, latches & catches, indexing & detents
- **one_liner**: A cam is a shaped wheel, drum or plate that turns (or slides) and pushes a follower, so steady rotation becomes a back-and-forth or rocking motion with exactly the pattern of rises, pauses (dwells) and falls that the cam's shape was designed to give.
- **complexity**: A few parts: the cam (a shaped disc, a drum with a groove or ridge, or a disc with a shaped face or groove) fixed to a shaft; the follower (a rod or lever with a pointed, flat, rounded or roller tip, or a pin or roller that rides in a groove); a guide or pivot for the follower; and, unless the cam has a groove, something to keep the follower pressed on the cam (a spring, gravity or its own weight).
- **how_it_works**: As the cam turns, the follower rides on its edge, face or groove. Where the cam's radius grows the follower is pushed out (rise), where it stays the same the follower stands still (dwell), and where it shrinks the follower comes back (fall or return) (Wikipedia; RoyMech). A plate cam moves its follower at right angles to the shaft, a barrel cam moves it along the shaft's direction, and a face cam uses a follower running on the flat face of a disc (Wikipedia 'Cam (mechanism)'). With a plain edge the follower must be held against the cam by a spring or gravity (force-closed); with a groove the follower is trapped and driven both ways, so no spring is needed (form-closed) (osamutake; DT Online).

### Finder attributes

- **job**: 
  - change the kind of motion: turns steady rotation into back-and-forth straight motion or rocking motion with a planned pattern
  - slow it, stop it or keep its speed steady: dwells make the follower wait still for a set part of each turn, and a heart cam gives a steady, even traverse (507 Mechanical Movements no. 96)
  - lock, and release by hand: a cam turned by a handle can push a bolt or latch into place, as in sash window locks (Wikipedia) and a printed latching lid (Teaching Tech)
- **degrees_of_freedom**: 1: while the follower stays in contact, its position is set completely by the cam's angle
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): rotation becomes reciprocating (back-and-forth) straight or rocking motion of almost any planned pattern (Wikipedia; osamutake)
  - indexing (clicks into set positions): dwells hold the follower still for a set part of each turn, and cam plates with notches can hold set positions (Teaching Tech's dial with notched cam; Hackaday)
  - one-way (moves freely one way, locks the other): a snail (drop) cam can only rotate in one direction, because turned backwards the follower meets the sudden step (DT Online)
  - quick-release: a snail cam lifts the follower slowly and then lets it drop suddenly once per turn, used for hammers, punches and automata (DT Online)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it converts rotation into follower motion
  - spring force (a spring or springy part presses it in place): plain-edged (force-closed) cams rely on a spring, gravity or other force to keep the follower on the cam (RoyMech; DT Online)
  - shape (the parts interlock; form-fit): grooved (form-closed) plate, face and barrel cams trap the follower so it is driven both ways (osamutake; DT Online 'Cylindrical Cam'); the same is done with a grooved heart cam (507 Mechanical Movements no. 97) or a cam working between two rollers in a yoke, once used to drive steam-engine valves (no. 117)
- **input_output**: Continuous (or hand-turned) rotation -> reciprocating straight-line motion or oscillating (rocking) motion, with any planned pattern of rise, dwell and return. Plate cam: follower moves at right angles to the cam shaft. Barrel (cylindrical) cam: follower moves parallel to the shaft (DT Online; Wikipedia). Face cam: follower runs on the face of a disc; a grooved face captures it so it moves both ways without a spring (Wikipedia). Timing: one follower cycle per lobe per turn; a groove that winds round twice gives one stroke per two turns (osamutake). A constant-lead barrel cam moves its follower in proportion to rotation, like a lead screw (Wikipedia). *(unverified parts omitted)*
- **power**: passive (no power needed); driven by a hand crank or motor. *(unverified parts omitted)*
- **removability**: removable: cams and followers are fixed to shafts and pivots with screws, keys, set screws or push-fit axles, and can be taken apart and swapped
- **reuse_cycles**: many times: the parts can be dismantled and refitted; interchangeable cams are a common teaching design (Rob Ives' interchangeable cam kit; Teaching Tech's three swappable cams)
- **tools_needed**: A screwdriver or hex key for the shaft fixings and follower guides (Teaching Tech's models use M3 and M4 bolts), a spring if the follower isn't held by gravity or a groove, and optionally lubricant for sliding surfaces
- **seal**: none: it is an open mechanism (engine camshafts run inside an oiled housing, but the cam itself seals nothing)
- **load**: Light to heavy depending on size and material: from card automata to engine camshafts and steam hammers (Wikipedia). Strong in the direction the cam pushes; the return force of a spring-closed follower is only as strong as its spring or gravity. Side force on the follower grows with the pressure angle, and above about 30° a translating follower can jam in its guide (UC3M). Plastic cams suit only low loads and low speeds (UC3M).
- **adjustable**: Usually no: the motion is fixed by the cam's shape. Stroke or timing can be changed by swapping cams (Rob Ives; Teaching Tech), by sliding a stepped set of cams of different throw along the shaft (507 Mechanical Movements no. Kelleigh in 1956). *(unverified parts omitted)*
- **play_and_precision**: Precision depends on how accurately the profile is made and how smooth it is; a pointed follower traces fine detail more accurately but is weaker (Rob Ives). Misalignment: a crowned (barrel-shaped) cam-follower roller tolerates up to about 0.5° of misalignment, a cylindrical one only about 0.06° (Wikipedia 'Cam follower'). *(unverified parts omitted)*
- **access_needed**: not applicable: the cam and follower sit on shafts in a frame, reached wherever the frame opens
- **materials**: Industrial cams: hard steels and cast iron, heat-treated; brass, bronze and plastic cams for low-load, low-speed uses (UC3M). Followers: needle-roller or ball-bearing cam followers and track rollers in steel (Wikipedia 'Cam follower'; McMaster-Carr). Maker cams: card and wood for automata (Rob Ives), 3D-printed PLA or PETG (Teaching Tech; osamutake), and self-lubricating 'tribo' filaments for sliding wear parts (igus iglidur I150, claimed up to 50 times more abrasion-resistant than standard printing plastics).
- **maker_difficulty**: easy for simple plate cams (eccentric, pear, snail), which print flat without supports and need only a shaft, a follower guide and gravity or a spring; moderate for grooved face and barrel cams and for designing smooth profiles that don't jam; hard for fast, heavily loaded cams, which need calculated motion curves and hardened metal

### Making it

- **processes**: 
  - 3D print (FDM): plate, groove and barrel cams, followers and frames all print well for light duty (Teaching Tech; osamutake)
  - woodwork: wooden and card cams drive traditional automata and toys (Rob Ives)
  - CNC: industrial cams are milled with rotating cutters on numerically controlled machines and often ground and heat-treated afterwards (UC3M)
  - off-the-shelf part: cam followers and track rollers, shafts, springs and bearings (McMaster-Carr; Wikipedia 'Cam follower') *(unverified parts omitted)*
- **print_in_place**: partly: a few demo models print already assembled (e.g. ForgeFiles' print-in-place pear cam demo on Printables, found through its API), but most printable cams are printed as separate parts and assembled with bolts or pins, and plain-edged cams need a spring or gravity to keep the follower in contact (Teaching Tech; osamutake)
- **making_tips_3d_printing**: 2) Make sliding surfaces smooth: osamutake uses 0.1 or 0.08 mm layers, a 'random' seam position so seams wear in instead of catching, and slow speed for overhangs. 3) For barrel (cylindrical) cams, give the groove a rounded cross-section rather than the usual square one so it prints without support (osamutake). 4) Clearances: osamutake designs 0.15 mm radial clearance on printed shafts and uses well-dried PETG for accuracy; sand stringing off shafts and open elephant's-foot holes with a round file. Teaching Tech found clearance for notched (detent) cam dials hard to get right and suggests trying a TPU cam. 5) Key the cam to its shaft: a flat on the shaft (D-shaft) or a bolt through the cam stops it slipping (osamutake; Teaching Tech). 6) Keep the pressure angle (the slope the follower climbs) under about 30° for a sliding follower and 35° for a lever follower; if it is too steep, make the base circle bigger or spread the rise over more of the turn (UC3M). 8) A pointed follower traces detail well but is weak and gets pushed sideways; a separate follower that slides on the cam and pushes a guided rod helps (Rob Ives). 9) For grooves that cross themselves (a groove winding round twice), use an elongated or crescent-shaped follower that can swivel, so it doesn't take the wrong branch at the crossing (osamutake). 10) For long wear, print sliding parts in a wear-resistant tribo-filament (igus) or add lubricant; PLA softens above about 60 °C (Prusa). *(unverified parts omitted)*
- **off_the_shelf_parts**: Cam followers / track rollers: stud-mount (threaded) cam followers and shaft-mount (yoke) track rollers, needle-roller, crowned, flanged and V-groove versions (Wikipedia 'Cam follower'; *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Keep the pressure angle (between the follower's direction of motion and the push from the cam) below 30° for translating followers and 35° for oscillating followers, or the follower may jam in its guides (UC3M Machine Theory 'Cams design II'; mechref, UIUC). MechSimulator's cam tool flags angles over 30°.
  - To reduce the pressure angle, enlarge the base (prime) circle, add a sideways offset (eccentricity) to the follower, or spread the rise over more degrees of rotation; a smaller cam is cheaper but has steeper angles (UC3M).
  - Keep the cam pitch curve's smallest radius of curvature at least 2-3 times the roller follower's radius; a roller larger than the smallest convex curve 'undercuts' the profile and loses the intended motion (UC3M).
  - Choose a smooth motion law for anything but slow cams: constant velocity gives infinite acceleration at the ends, simple harmonic gives infinite jerk at the joins, and cycloidal or polynomial profiles keep acceleration continuous and jerk finite, which cuts vibration (mechref 'Fundamental Law of Cam Design').
  - A follower must be kept in contact by gravity, a spring, air or hydraulic pressure, or a groove (form closure) (RoyMech; osamutake).
  - At high speed, spring-closed followers can lose contact and hammer back ('follower separation' or jump); the traditional fix is more spring preload or a stiffer spring (Yan & Tsai 2008).
  - Plastic, brass and bronze cams suit low loads and low speeds; heavily loaded cams are hardened steel or cast iron (UC3M).
  - Snail (drop) cams can only run in one direction (DT Online).
  - Crowned cam-follower rollers tolerate about 0.5° misalignment versus 0.06° for cylindrical ones; bushing-type stud followers carry only about 25 % of the load of roller types (Wikipedia 'Cam follower').

### When to use it

- **everyday_examples**: 
  - A car engine's camshaft, whose cams push the valves open (Wikipedia; Wikimedia Commons 'Nockenwelle ani.gif')
  - The level-wind on a baitcasting fishing reel: a crossed-groove screw (a barrel cam) moves a line guide back and forth so line winds evenly (Mike's Reel Repair)
  - A sash window lock, where turning a lever swings a cam that pulls the windows together (Wikipedia)
  - Automata and moving toys, where cams under the base make figures nod, peck or wave (Rob Ives; Teaching Tech)
- **when_to_use**: Use a cam when one steady rotation must produce a specific back-and-forth pattern: lift, wait, drop; several motions timed together from one shaft (a camshaft); a sudden drop or strike once per turn (snail cam); an even to-and-fro traverse (heart cam or barrel cam for winding line or wire evenly); or a lever that locks something by turning (cam lock). Cams are ideal for automata, toys, timers, pumps, stamping and sorting mechanisms, and anywhere a cheap cam can replace an extra motor or actuator (Hackaday on Teaching Tech's guide).
- **when_not_to_use**: If you need to change the motion pattern often, use a servo or stepper under software control instead. For a plain smooth back-and-forth, an eccentric, Scotch yoke or slider-crank is simpler. For long strokes, a lead screw, rack and pinion, belt or linkage suits better than a huge cam. For stepped rotation (index a turntable), use a Geneva drive or intermittent gear. Avoid plastic cams under heavy load or at high speed, where wear, follower jump and noise take over (UC3M; Yan & Tsai); use hardened metal and cycloidal profiles there.
- **environment_limits**: Printed PLA cams soften above about 60 °C (Prusa) and wear if run dry; igus rates its wear-resistant I150 tribo-filament for continuous use up to +149 °F (65 °C). Dirt and grit in grooves and on the follower cause jerky, sticky motion; clean and lightly grease them (Mike's Reel Repair). Bushing-type cam followers are limited to about 200 °F (93 °C) (Wikipedia 'Cam follower'). At speed, spring-closed followers can separate from the cam (Yan & Tsai).
- **safety_notes**: Guard motor-driven camshafts. *(unverified parts omitted)*
- **common_failures**: 1) Follower jams or sticks in its guide because the cam is too steep (pressure angle over about 30°): enlarge the base circle or spread the rise (UC3M). 2) Follower loses contact and bangs back at speed: add spring preload or stiffness, lighten the follower, or slow down (Yan & Tsai). 3) Roller too big for the cam's tight curves, so the motion is wrong (undercutting): keep the curve radius at least 2-3 times the roller radius (UC3M). 4) Rough, noisy motion from a constant-velocity or simple-harmonic profile at speed: use cycloidal or polynomial motion (mechref). 5) Worn flats or grooves on printed cams and followers: use smoother surfaces, a roller follower, a harder or tribo-filament material and some lubricant (osamutake; igus). 6) Snail cam turned backwards jams against its step (DT Online). 7) Pointed follower pushed sideways and tilted in its guide: use a separate follower and push rod, or a roller (Rob Ives). 8) Follower takes the wrong branch where a groove crosses itself: use an elongated, swivelling follower (osamutake). 9) Cam slips on the shaft: key it with a flat, pin or set screw (osamutake). 10) Level-wind style barrel cams jam when the follower (pawl) wears, especially at the groove crossovers (Mike's Reel Repair).
- **related**: 
  - Eccentric cam lever (cam clamp, quick-release skewer): uses a cam's rising edge to clamp and lock rather than to make repeated motion
  - Scotch yoke and slider-crank: turn rotation into back-and-forth motion too, but only a fixed smooth pattern with no dwells
  - Geneva drive and intermittent gear: give stop-go rotation of a wheel rather than a follower's back-and-forth; cam indexers are the smooth high-speed alternative
  - Lead screw and nut: a constant-lead barrel cam acts like a lead screw (Wikipedia); a diamond (reversing) screw turns this into automatic back-and-forth
  - Swashplate (wobble plate): a tilted disc acting as a face cam that drives rods parallel to the shaft (507 Mechanical Movements no. 95; DT Online)
  - Click-pen mechanism and push-push latch: use small cams or heart-shaped cam tracks to step or latch a plunger
  - Linkages (four-bar and others): can make complex paths with pivots only, avoiding sliding contact and springs

### Pictures, videos and models

- **links**: 
  - [Nockenwelle ani.gif (Wikimedia Commons, by Borowski)](https://commons.wikimedia.org/wiki/File:Nockenwelle_ani.gif): Animation of a camshaft whose rotating cams push followers up and down *(licence: Public domain)*
  - [Cam-disc-1 3D animated.gif (Wikimedia Commons, by Silberwolf)](https://commons.wikimedia.org/wiki/File:Cam-disc-1_3D_animated.gif): 3D animation of a cam disc lifting a tappet (flat follower) *(licence: CC BY-SA 2.5)*
  - [Knife edge cam follower.svg (Wikimedia Commons, by Enl public); flat and radiussed versions are in Category:Diagrams of cams](https://commons.wikimedia.org/wiki/File:Knife_edge_cam_follower.svg): Simple diagram of a plate cam with a pointed (knife-edge) follower *(licence: CC BY-SA 3.0)*
  - [Cylindrical Calm and Swash Plate.jpg (Wikimedia Commons, by Aliva Sahoo)](https://commons.wikimedia.org/wiki/File:Cylindrical_Calm_and_Swash_Plate.jpg): Photo of science-exhibit models of a cylindrical (barrel) cam and a swashplate converting motion *(licence: CC BY-SA 4.0)*
  - [Barrel cam mechanism 1 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=JZgez4C2HUQ): CAD animation of a barrel (cylindrical) cam driving a follower *(licence: link only (standard YouTube licence))*
  - [Cams are simple to design but oh so versatile - Guide with examples (Teaching Tech, YouTube)](https://www.youtube.com/watch?v=lm49nYb77HY): Video guide to cam terms and printed examples: lifting, latching, detent dial, dispenser and an automaton *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Cam mechanism examples (Teaching Tech, Printables)](https://www.printables.com/model/490289-cam-mechanism-examples): Printable set: a simple lifter with three swappable cams, a latching lid, a notched dial and a reverse-profile dispenser; prints without supports in PLA; source CAD on Onshape *(licence: CC BY)*
  - [Educational Model of Cylindrical Cam (osamutake, Printables)](https://www.printables.com/model/1504616-educational-model-of-cylindrical-cam): Barrel cam whose groove winds round twice so the follower makes one near-constant-speed stroke per two turns; rounded groove for easy printing; video at youtu.be/tSPfPqlc5QA *(licence: CC BY)*
  - [Educational Model of Groove Cam (osamutake, Printables)](https://www.printables.com/model/1504580-educational-model-of-groove-cam): Grooved plate (face) cam that rocks an output arm with no spring; crescent follower crosses the groove's intersection; video at youtu.be/t_w5ab848ZU *(licence: CC BY)*
  - [Snail Cam (Frozensnakes, Printables)](https://www.printables.com/model/483105-snail-cam): Printable model of a snail (drop) cam *(licence: CC BY)*
  - [Level wind mechanism (baitcasting fishing reel) (C. Yamahata, Sketchfab)](https://sketchfab.com/3d-models/level-wind-mechanism-baitcasting-fishing-reel-0d4a3f6123eb409a9ce6391ddcd72048): Downloadable 3D model of a diamond-screw level-wind, a crossed-groove barrel cam *(licence: CC BY 4.0)* *(unverified parts omitted)*
- **diagram_idea**: Side-by-side sketches of the three types (a plate cam pushing a follower up at right angles to its shaft, a barrel cam sliding a follower along its shaft, and a grooved face cam rocking a lever), each with a small graph underneath showing follower height against cam angle with the rise, dwell and fall sections labelled.
- **sources**: 
  - https://en.wikipedia.org/wiki/Cam_(mechanism)
  - https://en.wikipedia.org/wiki/Cam_follower
  - https://commons.wikimedia.org/wiki/Category:Cams
  - https://commons.wikimedia.org/wiki/Category:Animations_of_cam_discs
  - https://commons.wikimedia.org/wiki/Category:Diagrams_of_cams
  - https://commons.wikimedia.org/wiki/File:Nockenwelle_ani.gif
  - https://commons.wikimedia.org/wiki/File:Cam-disc-1_3D_animated.gif
  - https://commons.wikimedia.org/wiki/File:Knife_edge_cam_follower.svg
  - https://commons.wikimedia.org/wiki/File:Cylindrical_Calm_and_Swash_Plate.jpg
  - https://roymech.org/Useful_Tables/Cams_Springs/Cams.html
  - https://ocw.uc3m.es/pluginfile.php/2605/mod_page/content/13/unit8_cams_design2.pdf
  - https://www.mechref.org/md/Cams/
  - https://www.jstage.jst.go.jp/article/jamdsm/2/1/2_1_12/_article
  - https://www.robives.com/mechanism/cams/
  - https://wiki.dtonline.org/index.php/Category:Cams
  - https://wiki.dtonline.org/index.php/Snail_Cam
  - https://wiki.dtonline.org/index.php/Cylindrical_Cam
  - https://wiki.dtonline.org/index.php/Radial_Cam
  - https://www.notesandsketches.co.uk/Cams.html
  - https://507movements.com/toc.html
  - https://507movements.com/mm_095.html
  - https://507movements.com/mm_096.html
  - https://507movements.com/mm_097.html
  - https://507movements.com/mm_117.html
  - https://507movements.com/mm_150.html
  - https://mechsimulator.com/mechanisms/
  - https://mechsimulator.com/tools/cam-follower/
  - https://hackaday.com/2023/05/31/a-simple-guide-to-cams/
  - https://www.youtube.com/watch?v=lm49nYb77HY
  - https://www.youtube.com/watch?v=JZgez4C2HUQ
  - https://www.youtube.com/watch?v=tSPfPqlc5QA
  - https://www.youtube.com/watch?v=t_w5ab848ZU
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/490289-cam-mechanism-examples
  - https://www.printables.com/model/1504616-educational-model-of-cylindrical-cam
  - https://www.printables.com/model/1504580-educational-model-of-groove-cam
  - https://www.printables.com/model/483105-snail-cam
  - https://raw.githubusercontent.com/KitWallace/openscad/master/cam_profile.scad
  - https://www.mcmaster.com/products/cam-followers/
  - https://www.igus.com/product/iglidur_I150_PF
  - https://www.mikesreelrepair.com/blog/the-levelwind-system-in-baitcasting-reels-a-detailed-technical-examination/
  - https://sketchfab.com/3d-models/level-wind-mechanism-baitcasting-fishing-reel-0d4a3f6123eb409a9ce6391ddcd72048
  - https://help.prusa3d.com/article/pla_2062

### Other info

- **Fields with unverified parts:** adjustable, input_output, make_it_yourself, making_tips_3d_printing, motion, off_the_shelf_parts, play_and_precision, power, processes, safety_notes

## 85 Scotch yoke

*motion conversion.* A pin on a turning wheel slides in a slot in a sliding bar, turning rotation into smooth back-and-forth straight-line motion

### What it is

- **plain_name**: A wheel with a peg near its edge; the peg sits in a straight slot cut across a bar that can only slide, so as the wheel turns, the peg drags the bar smoothly back and forth
- **term**: Scotch yoke (slotted-link mechanism)
- **aliases**: 
  - slotted link mechanism (Wikipedia)
  - sine mechanism (Nguyen Duc Thang's name for it in his animations; 正弦机构 in Chinese)
  - crank with a slotted yoke: 507 Mechanical Movements no. 93 describes it as a 'crank-wrist working in a slotted yoke, thereby dispensing with the oscillating connecting-rod or pitman'
  - yoke drive / Scotch-yoke drive
  - Scotch yoke actuator (the quarter-turn valve actuator version, where a piston drives a pin in a pivoted slotted yoke)
  - yugo escocés (Spanish; Mecapedia)
  - double-slider chain, Scotch-yoke inversion (the same chain also gives the elliptical trammel and the Oldham coupling; MechSimulator)
- **family**: motion conversion
- **one_liner**: A pin on a turning wheel (crank) slides along a slot in a bar that is guided to move only in a straight line, so steady turning becomes a smooth back-and-forth push whose position follows a perfect sine wave; it can also work the other way round.
- **complexity**: A few parts: a crank (a disc or arm) on a shaft carrying an off-centre pin, often fitted with a small roller or a sliding block; a yoke (a bar or frame with a straight slot at right angles to its travel); guides or linear bearings that let the yoke slide in one straight line only; a frame holding the crank shaft and the guides.
- **how_it_works**: The crank turns and carries its pin round in a circle. The pin sits in a slot that runs across the yoke's direction of travel, so the pin slides freely along the slot while pushing the yoke with only the in-line part of its movement. The yoke therefore moves back and forth by exactly twice the pin's distance from the centre (stroke = 2r), and its position is x = r x cos(angle): pure simple harmonic motion, fastest in the middle of the stroke and easing to a stop at each end (Wikipedia; MechSimulator). Pushing the yoke can also turn the crank (as in the Bourke engine and in valve actuators), but at the two ends of the stroke a push gives no turning force (dead centres), so a flywheel or a limited swing is needed.

### Finder attributes

- **job**: 
  - change the kind of motion: turns steady rotation into smooth straight-line back-and-forth motion, or back-and-forth pushing into rotation
  - let it move (turn, slide or bend): the crank turns, the pin slides in the slot and the yoke slides in its guides
- **motion**: rotate+slide: the crank rotates continuously (unlimited turns) and the yoke slides back and forth over a stroke of twice the crank radius; in quarter-turn valve actuators the arrangement is reversed and a straight push swings the slotted yoke through about 90 degrees
- **degrees_of_freedom**: 1: once the crank angle is set, the yoke's position is fixed (x = r x cos angle). DMG-Lib lists the 3-link version as having one degree of freedom, and Wikipedia's mobility formula gives 1 for a single loop of four one-freedom joints (the 4-link version with a sliding block)
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): rotation becomes straight-line back-and-forth motion that is an exact sine wave (simple harmonic motion), with no connecting rod swinging to the side (Wikipedia)
  - variants add other behaviours: a curved (arc-shaped) slot makes the yoke pause (dwell) at one end or in the middle (Nguyen Duc Thang, 'Sine mechanism of curved slot 1'), and a crank whose pin radius can be changed adjusts the stroke (Thang, 'Scotch yoke of adjustable output stroke length'; Bosch reciprocating-saw patent US6357125B1)
- **holding_principle**: not a holding joint (it moves or passes on motion): it converts rotation into straight-line motion; the pin is kept in the slot by shape (form-fit)
- **input_output**: Continuous rotation -> straight-line back-and-forth (reciprocating) motion, or the reverse. One full out-and-back stroke per crank turn; stroke = 2 x crank radius. Position x = r cos(angle), speed v = -r w sin(angle), acceleration a = -r w^2 cos(angle), so top speed r w is at mid-stroke and the highest acceleration r w^2 is at the ends where the speed is zero (MechSimulator; Five Flute). Hamilton Sundstrand patent US10088056B2). Shaft arrangement: the crank shaft is at right angles to the plane in which the yoke slides. Back-drivable: yes, pushing the yoke turns the crank (Bourke engine, steam engines, valve actuators; Wikipedia), except exactly at the two ends of the stroke (dead centres). As a quarter-turn valve actuator (piston pushing a pin in a pivoted slotted yoke) it gives a 90-degree swing with the torque highest at both ends and lowest in the middle, a 'U-shaped' torque curve (Instrumentation Blog). *(unverified parts omitted)*
- **power**: passive (no power needed); usually driven by a motor or hand crank, or by a piston in actuators and engines. If power is lost it simply stops where it is; it does not lock, and a load pushing on the yoke can turn the crank back except at the ends of the stroke
- **removability**: removable: the crank, yoke, guides and pins are held by screws, axles or snap fits and can be taken apart
- **reuse_cycles**: many times: taking it apart does not harm it; its life is limited by wear of the pin and slot, not by assembly
- **tools_needed**: A screwdriver or hex key for the frame, motor mount and axle screws; none for snap-together printed demos (Sidpatchy's model snaps together, and WayTooManyHobbies' version stays together without glue); a little grease or oil for the slot and guides
- **seal**: none: it is an open mechanism; enclosed industrial versions (valve actuators, engines) seal their housing, not the yoke itself
- **load**: Light to heavy depending on how it is built: printed demos move light loads, while steel versions drive pipeline valve actuators and even forging presses (Nguyen Duc Thang's 'Sine mechanism 3: Press' notes presses of this kind giving 2,500 tons at 40 strokes per minute). Weak points: the pin and slot, which touch along a line and wear quickly under high contact pressure (Wikipedia; Five Flute), and the yoke's guides, which take sideways forces and tilting (moment) loads (Five Flute). Strong along the line of travel; weak against twisting the yoke in its guides.
- **adjustable**: Usually no: the stroke is fixed by the crank radius. Special versions let the pin's distance from the centre be changed with a screw or slot to adjust the stroke (Thang, 'Scotch yoke of adjustable output stroke length'); Bosch's jigsaw patent US6357125B1 switches between a long stroke (about 2 in) for soft materials and a short one (about 1 in) for hard ones by reversing the motor.
- **play_and_precision**: Noticeable unless built carefully: any clearance between the pin and the slot shows up as lost motion (backlash) each time the push reverses at the ends of the stroke, and clearance in the guides lets the yoke rock; one printed design with loose pin tolerances rattled and fell apart unless glued (WayTooManyHobbies, Printables). The end positions repeat exactly every turn because the stroke is set by the geometry. *(unverified parts omitted)*
- **access_needed**: not applicable: it is a mechanism built in a frame, reached wherever the frame opens
- **materials**: PLA and PETG for printed demos and light hobby drives (gzumwalt, WayTooManyHobbies and Sidpatchy all printed theirs in PLA). *(unverified parts omitted)*
- **maker_difficulty**: easy: it prints as a few flat parts with no supports and goes together with a pin or screw; the only fiddly part is getting the slot and guide clearances right so it slides freely without rattling

### Making it

- **processes**: 
  - 3D print (FDM): many free printable demos; the parts print flat without supports (gzumwalt, WayTooManyHobbies)
  - CNC: for metal versions; the slot and guides are milled
  - off-the-shelf part: complete Scotch-yoke valve actuators are sold for pipelines; for hobby builds buy the bearings, pins, roller (track roller or cam follower) and guide rods or rails *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Print the crank disc, yoke and base flat on the bed; they need no supports (gzumwalt printed his at 0.15 mm layers, 20% infill, no supports). 2) Clearances: start with at least 0.3 mm between moving parts (Prusa) and up to 0.5 mm for FDM (Hubs); Sidpatchy's snap-together yoke uses 0.5 mm throughout so that it 'should print on any printer'. Too loose and it rattles: WayTooManyHobbies made the clearance the one adjustable parameter in his OpenSCAD file so you can tune it to your printer. 3) Pins: small printed round pins are fragile and need loose tolerances (WayTooManyHobbies); use a metal screw or dowel, or a thick printed threaded axle (gzumwalt uses a printed M8 x 1.25 thread, cleaned up with a tap and die). 4) Make the parts that take the load denser: WayTooManyHobbies prints the yoke and main shaft at 50% rectilinear infill and everything else at 20%. 5) Cut slot friction: fit a small ball bearing on the crank pin as a roller (IridiumTimekeeping's display model uses a 624zz bearing, 13 mm outside, 4 mm bore), or use a sliding block; Five Flute says a bare pin in a slot is only enough for small, light, low-torque uses. Add a little grease. 6) Guide the yoke on long guides so it cannot tilt and jam: keep the pushing force within about twice the guide bearing's length (igus 2:1 rule); smooth steel rods with linear bearings, or a long printed channel, both work. 8) PLA is fine for indoor demos; use PETG or ASA if it gets warm or sits in sunlight (Prusa). 9) For a gentle motorised demo, gzumwalt gears an N20 gear motor down 12:24 to about 15 rpm, a 4-second cycle. *(unverified parts omitted)*
- **off_the_shelf_parts**: Crank pin: shoulder screw (shoulder bolt), dowel pin or machine screw. Roller on the pin: small ball bearing (e.g. 624zz or 608zz) or a track roller / cam follower (threaded-stud type). Crank shaft support: sleeve bearings (bushings), flanged sleeve bearings or ball bearings. Yoke guides: linear ball bearings on smooth rods, plain linear bearings, or a guide rail and carriage. Drive: gear motor (e.g. N20 gear motor) or DC motor with gears. Retaining rings (circlips) and lock nuts. Industrial complete units: pneumatic or hydraulic Scotch-yoke valve actuators (quarter-turn). Names as used in the McMaster-Carr catalogue.
- **rules_of_thumb**: 
  - Stroke = 2 x crank radius, always, and yoke position x = r cos(angle), i.e. pure simple harmonic motion (MechSimulator Scotch yoke simulator; Wikipedia 'Scotch yoke').
  - Top speed = r x w at mid-stroke; highest acceleration = r x w^2 at the ends of the stroke, where the speed is zero (MechSimulator; Five Flute). Because inertia forces grow with the square of speed, run heavy yokes slowly.
  - Slot length >= 2r + pin (or roller) diameter + a little clearance, because the pin moves r either side of the middle of the slot as the crank turns (follows from stroke = 2r; MechSimulator).
  - A bare pin in a slot is fine for small, light, low-torque uses; for heavier loads use a roller bearing on the pin, a pinned slider (sliding block) or linear bearings, and plan for lubrication (Five Flute). A pin free to roll along the slot 'greatly reduces wear' compared with a sliding pin (Hamilton Sundstrand patent US10088056B2).
  - Guide the yoke so the driving force or load acts no further from the guide bearing than about twice the bearing's length, or it may bind or chatter (igus '2:1 rule' for plain linear bearings).
  - Printed moving parts: start with at least 0.3 mm clearance (Prusa) or 0.5 mm (Hubs, FDM interlocking parts) and tune with a test print. *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - Electric jigsaws and reciprocating saws, where a pin on a crank plate drives a slotted yoke attached to the blade holder (background of Bosch patent US6357125B1)
  - Quarter-turn valve actuators on oil and gas pipelines, its most common industrial use (Wikipedia)
  - Some unusual engines (the Bourke engine), steam engines, water pumps and old tide-predicting machines (Wikipedia)
  - Printed desk toys and classroom mechanism models (Printables)
- **when_to_use**: Use it when a motor or hand crank should drive something smoothly back and forth in a straight line, especially in a small space. The output is a clean sine wave, the stroke is set simply by the pin's distance from the centre, it has one joint fewer than a crank and connecting rod, and the push stays in line with the travel, so there is no angled connecting rod pushing the slider sideways (Wikipedia). Good for shakers, stirrers, saw or file drives, small pumps, animated models, and sine-wave motion for demonstrations or test rigs. It also works the other way round when a straight push must give a limited swing with extra force at the ends, as in valve actuators.
- **when_not_to_use**: Avoid it for fast, long-running or heavily loaded machines, where the pin rubbing in the slot wears quickly and wastes power (Wikipedia): use a slider-crank (crank and connecting rod), which has only pin joints. Avoid it when the output must stop and wait at the ends (use a cam and follower, or a curved-slot yoke), when you need a long stroke from a small mechanism (use a rack and pinion, a belt or a lead screw), or when you need to stop anywhere and hold position under load (use a lead screw, a linear actuator or a servo).
- **environment_limits**: Printed PLA softens above about 60 °C and degrades in UV light, so use PETG or ASA near heat or outdoors (Prusa). The mechanism's own shaking grows with the square of speed, and loose clearances rattle (WayTooManyHobbies). *(unverified parts omitted)*
- **safety_notes**: In tools such as jigsaws the moving blade is the main hazard. No special hazards for small hand-cranked demos. *(unverified parts omitted)*
- **common_failures**: 1) The slot wears and the clearance grows because the pin slides under high contact pressure (Wikipedia), giving a knock each time the motion reverses: use a roller or sliding block on the pin, a hard metal pin and lubrication (Five Flute; Hamilton Sundstrand patent). 2) The yoke jams or chatters in its guides because the guides are too short for where the force acts, or not parallel (igus 2:1 rule): lengthen the guides and keep the pin close to them. 3) Printed pins break, or the assembly rattles and falls apart, because loose printed-pin tolerances were needed (WayTooManyHobbies): use metal pins or screws and tune the clearance. 5) Side loads twist the yoke and wear seals or piston rings in piston-driven versions (Hamilton Sundstrand patent; Five Flute). *(unverified parts omitted)*
- **related**: 
  - Slider-crank (crank and connecting rod): does the same job with only pin joints, so it wears less and is used in almost all engines, but its motion is not a pure sine wave and the angled rod pushes the slider sideways (Wikipedia)
  - Cam and follower: can give almost any motion shape, including pauses at the ends, instead of a fixed sine wave
  - Quick-return mechanism (Whitworth, crank and slotted lever): also a crank pin in a slot, but the slotted lever swings so the return stroke is faster than the working stroke
  - Rack and pinion: turns rotation into straight motion that keeps going one way and can be much longer, instead of a fixed back-and-forth stroke
  - Lead screw and nut: slow, strong straight-line motion that holds its position
  - Oldham coupling: another use of the same double-slider chain, passing rotation between offset parallel shafts (MechSimulator)
  - Reuleaux-triangle yoke (507 Mechanical Movements no. 135): a triangular cam in a square yoke that makes the yoke rest briefly at each end of its stroke

### Pictures, videos and models

- **links**: 
  - [Scotch yoke animation.gif (Wikimedia Commons, by BRoys)](https://commons.wikimedia.org/wiki/File:Scotch_yoke_animation.gif): Simple animated Scotch yoke: a crank pin sliding in the slot of a yoke that moves back and forth *(licence: CC BY-SA 2.5)*
  - [Yugo Escocés - Scotch yoke animation.gif (Wikimedia Commons, by Gussisaurio)](https://commons.wikimedia.org/wiki/File:Yugo_Escocés_-_Scotch_yoke_animation.gif): Larger, clearer animation of a Scotch yoke converting rotation into straight-line motion (used on Wikipedia) *(licence: CC BY-SA 4.0)*
  - [507 Mechanical Movements, No. 93: crank motion with the crank-wrist working in a slotted yoke](https://507movements.com/mm_093.html): 1868 drawing, with an animated version, of the Scotch yoke *(licence: Book public domain; website animation link only)*
  - [Scotch yoke of adjustable output stroke length (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=0QwDy1lSFa0): CAD animation of a Scotch yoke whose stroke can be changed by moving the crank pin *(licence: link only (standard YouTube licence))*
  - [Scotch Yoke Mechanism with eccentric disc (DMG-Lib, model from Politehnica University Timisoara)](https://www.dmg-lib.org/dmglib/handler?mcdsc=2613025): A real steel teaching model (1975) with interactive animations, CAD model, videos and drawings *(licence: link only (no licence stated))*
- **make_it_yourself**: 
  - [A Simple 3D Printed Scotch Yoke Mechanism (gzumwalt, Printables)](https://www.printables.com/model/357815-a-simple-3d-printed-scotch-yoke-mechanism): Motorised classroom model (N20 gear motor, AAA battery pack) with about +-15 mm travel; printed in PLA at 0.15 mm layers, no supports; video at youtube.com/watch?v=YWAfiqB5z5o *(licence: CC BY-NC-SA)*
  - [Another Scotch Yoke (WayTooManyHobbies, Printables)](https://www.printables.com/model/314698-another-scotch-yoke): Hand-turned Scotch yoke with an OpenSCAD file whose clearance value can be tuned; parts hold together without glue *(licence: CC BY-NC)*
  - [Scotch Yoke, M.M. #93 (Sidpatchy, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/319576-scotch-yoke): Press-fit, snap-together Scotch yoke based on 507 Mechanical Movements no. 93, designed with 0.5 mm tolerances throughout *(licence: CC BY)*
  - [Reuleaux Triangle Scotch Yoke, M.M. #135 (Sidpatchy, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/319574-reuleaux-triangle-scotch-yoke): Variant with a Reuleaux-triangle cam that makes the yoke pause at each end, plus a normal wheel to compare *(licence: CC BY)*
  - [Scotch Yoke and Double-Slider Chain simulator (MechSimulator)](https://mechsimulator.com/tools/scotch-yoke/): Interactive simulator with adjustable crank radius and speed, live position, speed and acceleration graphs, and an overlay comparing it with a slider-crank *(licence: link only (no licence stated))*
  - [Mechanical mechanism library (HUANGYAN920, web app; listed as 正弦机构, 'sine mechanism')](https://huangyan920.github.io/Mechanical/): Browser library of 257 parametric mechanism animations, including the Scotch yoke, slider-crank and four-bar, with sliders to change dimensions and export to SVG or PNG *(licence: MIT (per the GitHub README))*
- **diagram_idea**: A crank disc with its pin in the vertical slot of a horizontal sliding bar, drawn at four crank angles (0, 90, 180 and 270 degrees) above a graph of the bar's position that traces a sine wave, with the stroke marked as 2r.
- **sources**: 
  - https://en.wikipedia.org/wiki/Scotch_yoke
  - https://en.wikipedia.org/wiki/Linkage_(mechanical)
  - https://www.mecapedia.uji.es/pages/mecanismo_de_yugo_escoces.html
  - https://commons.wikimedia.org/wiki/Category:Scotch_yokes
  - https://commons.wikimedia.org/wiki/File:Scotch_yoke_animation.gif
  - https://commons.wikimedia.org/wiki/File:Yugo_Escocés_-_Scotch_yoke_animation.gif
  - https://507movements.com/mm_093.html
  - https://507movements.com/mm_135.html
  - https://www.dmg-lib.org/dmglib/handler?mcdsc=2613025
  - https://mechsimulator.com/mechanisms/
  - https://mechsimulator.com/tools/scotch-yoke/
  - https://www.fiveflute.com/guide/how-to-design-a-scotch-yoke-mechanism/
  - https://patents.google.com/patent/US10088056B2/en
  - https://patents.google.com/patent/US6357125B1/en
  - https://www.instrumentationblog.in/scotch-yoke-vs-rack-and-pinion-actuator/
  - https://www.igus.com/company/linear-guides-the-2-1-rule-ca
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://www.mcmaster.com/products/cam-followers/
  - https://www.mcmaster.com/products/linear-bearings/
  - https://www.mcmaster.com/products/shoulder-bolts/
  - https://www.mcmaster.com/products/sleeve-bearings/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/357815-a-simple-3d-printed-scotch-yoke-mechanism
  - https://www.printables.com/model/314698-another-scotch-yoke
  - https://www.youtube.com/watch?v=0QwDy1lSFa0
  - https://www.youtube.com/watch?v=VALy2PlBuM4
  - https://www.youtube.com/watch?v=VPZO7txZIZU
  - https://www.youtube.com/watch?v=TZR7ccjy9VQ
  - https://www.youtube.com/watch?v=YWAfiqB5z5o
  - https://cs448m.github.io/lectures/machines/doc/2.pdf
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/main/README.md

### Other info

- **Fields with unverified parts:** environment_limits, input_output, materials, play_and_precision, print_in_place, processes, safety_notes

## 86 Slider-crank

*motion conversion.* A crank and connecting rod that turn rotation into back-and-forth sliding, or the reverse, as in an engine piston

### What it is

- **plain_name**: A turning arm joined by a rod to a block or piston that can only slide in a straight line, so turning the arm pushes the block back and forth, and pushing the block can turn the arm, as in a car engine
- **term**: Slider-crank linkage (crank and connecting rod, crank-slider mechanism)
- **aliases**: 
  - crank-slider mechanism
  - crank and connecting rod (conrod)
  - crank and piston / piston and crankshaft
  - crank and pitman ('pitman' is an old word for the connecting rod; 507 Mechanical Movements)
  - ordinary crank motion (507 Mechanical Movements no. 92)
  - RRRP linkage: three revolute (pin) joints and one prismatic (sliding) joint (Wikipedia)
  - in-line slider-crank / offset slider-crank
  - its inversions: oscillating-cylinder engine, Whitworth quick return and rotary engine, hand pump and bull engine (Wikipedia)
  - 曲柄滑块机构 (Chinese)
- **family**: motion conversion
- **other_families**: over-centre, toggle & cam clamps
- **one_liner**: A crank turns, and a connecting rod joins the crank's outer end to a slider (such as a piston) that moves only in a straight line, turning rotation into back-and-forth sliding or, in an engine, back-and-forth pushes into rotation.
- **complexity**: A few parts: a crank (a disc, arm or crankshaft) on a fixed shaft; a crank pin; a connecting rod with a pivot at each end; a slider or piston with its own pin (wrist pin or gudgeon pin); a straight guide or cylinder for the slider; a frame. Often a flywheel as well.
- **how_it_works**: The crank turns and its pin goes round in a circle. The connecting rod links that pin to the slider, which is held in a straight guide, so the slider is pulled and pushed back and forth. When the slider's line passes through the crank's centre (in-line), the stroke is exactly twice the crank length and the slider's position is x = r cos(a) + sqrt(l^2 - r^2 sin^2(a)) (Wikipedia): close to, but not exactly, a sine wave, because the rod leans to the side as it moves. Pushing the slider can drive the crank round, which is how an engine works, except at the two dead centres, where rod and crank are in line and a push gives no turning force; a flywheel or a second crank set at another angle carries it through (Wikipedia).

### Finder attributes

- **job**: 
  - change the kind of motion: rotation into straight back-and-forth sliding, or back-and-forth pushing into rotation (engines, pumps, compressors)
  - change speed or turning force: near the ends of the stroke (the toggle positions) a small turning force on the crank gives a very large push, which presses and toggle clamps use (Nguyen Duc Thang, 'Toggle clamp 1a')
- **motion**: rotate+slide: the crank rotates continuously (unlimited turns) and the slider moves back and forth over a stroke of 2 x crank length in the in-line version
- **degrees_of_freedom**: 1: the crank angle fixes the positions of the rod and the slider; a single loop of four one-freedom joints has mobility 1 (Wikipedia 'Linkage (mechanical)')
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): rotation into straight back-and-forth motion and back again; an offset slider line gives a quick return, moving faster one way than the other (Wikipedia)
  - over-centre (snaps past a point and stays): at the dead centres the crank and rod line up, where the force gain becomes very large; toggle clamps and presses use this to squeeze hard and lock (Thang, 'Toggle clamp 1a'), and Carnegie Mellon's mechanism notes point out that dead points can be useful for holding work
- **holding_principle**: not a holding joint (it moves or passes on motion); used at its dead centre in a toggle clamp it holds by over-centre locking against a stop
- **input_output**: Continuous rotation <-> straight back-and-forth (reciprocating) motion. In-line stroke = 2 x crank length (Wikipedia); an offset slider gives a quick return with time ratio Q = (180° + b)/(180° - b), where b is the imbalance angle (Wikipedia 'Four-bar linkage'). The motion is a distorted sine wave: the shorter the rod compared with the crank, the more distorted it is and the higher the peak accelerations, which is why the rod should be at least 3 x the crank (Wikipedia). Shaft arrangement: crank shaft at right angles to the plane of motion; the slider moves in that plane. Back-drivable: yes, that is how engines work, except at the two dead centres, where a flywheel, a second crank at another angle, or momentum is needed (Wikipedia). *(unverified parts omitted)*
- **power**: passive (no power needed); driven by a motor or hand crank, or by a piston (steam, gas, air or hydraulic). If power is lost it simply stops; it does not lock, and a load on the slider can drive the crank back unless the crank sits exactly at a dead centre
- **reuse_cycles**: many times: taking the pivots apart does not harm them; life is limited by bearing and guide wear
- **tools_needed**: A screwdriver or hex key and a spanner for the pivot bolts and lock nuts; circlip pliers if retaining rings are used; none for press-fit printed demos; oil or grease for the pivots and slide
- **seal**: none: the linkage itself does not seal; in engines, pumps and compressors the piston rings or seals seal the cylinder, not the linkage
- **load**: Light to very heavy: from printed toys to car engines, compressors and presses. The rod carries the load mainly as a push or pull along its length and the crank in bending; the pivots carry it in shear and bearing pressure. The angled rod also presses the slider sideways against its guide, which in engines wears cylinders into an oval shape (Wikipedia 'Connecting rod'). Very large forces arise near the dead centres when it is used as a toggle press. Weak against loads that twist the slider in its guide.
- **adjustable**: Not in its basic form: the stroke is fixed by the crank length. Variants: a crank with several holes or an adjustable pin changes the stroke, and a rod whose length can be changed with a screw moves where the stroke sits (Thang, 'Slider-crank mechanism for adjusting stroke position 1').
- **play_and_precision**: The end positions repeat exactly each turn. All pivot axes must be parallel and the guide in line with the crank's plane; linkage parts that are not stacked in the same plane bind (Collin_Builds' pantograph notes), and a short slider guide can jam (igus 2:1 rule). *(unverified parts omitted)*
- **access_needed**: not applicable: it is a mechanism built in a frame, reached wherever the frame opens
- **materials**: PLA, PETG, plywood or acrylic for models and light hobby drives, usually with metal screws or pins at the pivots (rackjabbit_'s printed slider-crank uses M3 bolts and nuts at the joints). *(unverified parts omitted)*
- **maker_difficulty**: easy: a crank, a rod and a slider print or cut flat and join with screws; the care needed is in making the slider's guide long and smooth enough not to jam, and the pivots free without wobble

### Making it

- **processes**: 3D print (FDM): many printable demos and model engines; parts print flat, CNC: for metal cranks, rods and guides *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Print the crank, rod and slider flat on the bed, so the layers run along the rod's length; FDM parts are much weaker between layers than along them (Prusa). 2) Pivots: use metal screws, shoulder screws or dowels through printed holes rather than printed pins, put a washer between moving parts, and use lock nuts (nylon-insert) set just loose enough to turn freely (Collin_Builds' printed pantograph uses M5 bolts, washers and nyloc nuts; rackjabbit_'s slider-crank uses M3 bolts and nuts). For long life press a sleeve bearing (bushing) or small ball bearing into the printed hole. 4) Slider: make it long and keep the rod's push within about twice the guide bearing's length (igus 2:1 rule), or run the slider on steel rods with linear bearings. 5) Make the rod at least 3 x the crank length (Wikipedia): less sideways push on the slider and smoother motion. A rod equal to the crank doubles the stroke to 4 x crank but can flip unpredictably unless extra gears guide it (Thang, 'Slider crank mechanism of equal crank and conrod length 1'). 6) If the slider drives (a model engine, a pneumatic cylinder), add a flywheel to carry it through the dead centres (Wikipedia). 7) PLA is fine indoors; use PETG or ASA near motors, heat or sunlight (Prusa). 9) Try the geometry first in a simulator (MechSimulator, PMKS+, Linkage) or generate a printable model with Print a Motion. *(unverified parts omitted)*
- **off_the_shelf_parts**: Crankshaft or crank disc; connecting rod; piston, slider or crosshead; wrist pin (gudgeon pin); shoulder screws (shoulder bolts) as pivot pins; ball-joint rod ends or clevis rod ends for rods whose length can be adjusted; sleeve bearings (bushings) and flanged sleeve bearings; ball bearings (e.g. 608, 624); linear ball bearings on smooth rods, plain linear bearings, or a guide rail and carriage for the slider; nylon-insert lock nuts and washers; retaining rings; gear motor. Names as used in the McMaster-Carr catalogue.
- **rules_of_thumb**: 
  - In-line stroke = 2 x crank length (Wikipedia 'Slider-crank linkage'; MechSimulator).
  - Make the connecting rod at least 3 x the crank length (Wikipedia 'Slider-crank linkage'); engines typically use a rod-to-crank ratio n = l/r of about 2.5 to 5 (MechSimulator). With l = 3r the rod never leans more than about 19.5 degrees (the angle whose sine is 1/3), which keeps the sideways push on the slider modest (own calculation from the geometry).
  - The sideways force on the slider is proportional to the rod's angle, so longer rods reduce side force and wear (Wikipedia 'Connecting rod').
  - Dead centres are at 0 and 180 degrees: there a push on the slider gives no torque on the crank. If the slider drives, add a flywheel or a second crank set at a different angle, as on steam locomotives (Wikipedia 'Slider-crank linkage').
  - Offsetting the slider's line from the crank centre gives a quick return; time ratio Q = (180° + b)/(180° - b), where b is the imbalance angle (Wikipedia 'Four-bar linkage').
  - Equal crank and rod lengths give a stroke of 4 x crank but have unstable positions when the crank axis and the slider pivot line up (Nguyen Duc Thang, 'Slider crank mechanism of equal crank and conrod length 1').
  - Guide the slider so the driving force or load acts no further from the guide bearing than about twice the bearing's length, or it may bind or chatter (igus '2:1 rule').
  - Printed moving parts: at least 0.3 mm clearance (Prusa); 0.5 mm for FDM interlocking parts (Hubs).

### When to use it

- **everyday_examples**: 
  - Car, motorbike and lawnmower engines: pistons, connecting rods and a crankshaft (Wikipedia 'Slider-crank linkage' and 'Connecting rod')
  - Air compressors and reciprocating pumps; old hand pumps use one of its inversions (Wikipedia)
  - Steam locomotive wheels, whose rods on each side are set at different angles so the engine can always start (Wikipedia)
  - Toggle clamps and presses that use the near-dead-centre position to squeeze hard (Nguyen Duc Thang animations)
- **when_to_use**: Use it when a motor should push something back and forth in a straight line and you want simple pin joints that wear slowly: pumps, saw or file drives, shakers, pushers and feeders, push-rods in automata, the piston of a model engine. Also use it when a straight push (a piston or linear actuator) must turn a shaft round and round. It is cheap, compact and copes with high loads and speeds (almost every engine uses it), and the stroke is fixed simply by the crank length. Near the end of its stroke it multiplies force enormously, which makes it good for presses and clamps.
- **when_not_to_use**: Avoid it when you need a pure sine-wave motion in the smallest space (use a Scotch yoke), a pause at the ends of the stroke (use a cam and follower), a long stroke from a small mechanism (use a rack and pinion, a belt or a lead screw), or stopping anywhere and holding under load (use a lead screw or a linear actuator). When the slider is the driver, avoid it if the machine must start by itself from any position, since it can stop on a dead centre unless you add a second crank or a flywheel. Avoid very short rods (less than about 3 x crank), which cause large side forces.
- **environment_limits**: Printed PLA softens above about 60 °C and degrades in UV light, so use PETG or ASA near motors, heat or sunlight (Prusa). Inertia forces grow with the square of speed (Wikipedia 'Connecting rod'), so fast printed linkages shake and loosen their screws; slow them down or balance them. Pivot bearings need lubrication: in engines, rod-bearing failure is usually a lubrication problem (Wikipedia 'Connecting rod'). *(unverified parts omitted)*
- **common_failures**: 1) It stalls on a dead centre when the slider is the driver (Wikipedia): add a flywheel or a second crank at another angle. 2) The slider jams in a guide that is too short (igus 2:1 rule), or the cylinder or guide wears oval from the rod's side thrust (Wikipedia 'Connecting rod'): use a longer rod and a longer guide. 4) Rods break from fatigue or in tension at high speed, and bearings fail through poor lubrication (Wikipedia 'Connecting rod'). 5) With a crank and rod of equal length the linkage can flip the wrong way at the line-up position (Thang). *(unverified parts omitted)*
- **related**: 
  - Scotch yoke: gives a pure sine-wave motion with fewer parts in less space, but the pin slides in a slot and wears faster (Wikipedia 'Scotch yoke')
  - Four-bar linkage: the slider-crank is a four-bar in which the output rocker is replaced by a slide, as if the rocker were infinitely long (Carnegie Mellon notes; Wikipedia)
  - Quick-return mechanism (Whitworth, crank and slotted lever): an inversion of the slider-crank chain that returns faster than it works
  - Over-centre linkage (toggle linkage) and toggle clamp: use the dead-centre position to lock and to multiply force
  - Cam and follower: any motion shape, including pauses
  - Rack and pinion: continuous straight motion instead of a fixed back-and-forth stroke
  - Swashplate and wobble plate: drive several pistons parallel to a shaft instead of across it

### Pictures, videos and models

- **links**: 
  - [Crank Slider.gif (Wikimedia Commons, by Pasimi)](https://commons.wikimedia.org/wiki/File:Crank_Slider.gif): Animated offset crank-slider, simulated in MeKin2D *(licence: CC BY-SA 4.0)*
  - [Steam engine in action.gif (Wikimedia Commons, by Panther)](https://commons.wikimedia.org/wiki/File:Steam_engine_in_action.gif): Animated steam engine: piston, connecting rod, crank and flywheel working together *(licence: GFDL 1.2+ or CC BY-SA 3.0 / 2.5 / 2.0 / 1.0 (choose one))*
  - [4-Stroke-Engine.gif (Wikimedia Commons, by UtzOnBike)](https://commons.wikimedia.org/wiki/File:4-Stroke-Engine.gif): Animated four-stroke engine showing the piston, connecting rod and crankshaft through intake, compression, power and exhaust *(licence: GFDL 1.2+ or CC BY-SA 3.0)*
  - [507 Mechanical Movements, No. 92: ordinary crank motion](https://507movements.com/mm_092.html): 1868 drawing, with an animated version, of the basic crank and connecting rod *(licence: Book public domain; website animation link only)*
  - [Slider-crank mechanism (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=OltIA-Rl86A): CAD animation of a slider-crank; Thang's channel has dozens of variants (adjustable stroke, dwells, equal crank and rod, toggle clamps) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Slider-Crank Mechanism simulator (MechSimulator)](https://mechsimulator.com/tools/slider-crank/): Interactive simulator: set crank radius, rod length and offset, switch between the four inversions, and see position, speed, acceleration and torque graphs, stroke, rod ratio and time ratio *(licence: link only (no licence stated))*
  - [Slider crank mechanism (MarcinPaska, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/864144-slider-crank-mechanism): Simple printable slider-crank demonstration model *(licence: Creative Commons Public Domain (as listed by Printables))*
  - [Slider-Crank Linkage (Cookie Clicker irl cheat code) (rackjabbit_, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/283697-slider-crank-linkage-cookie-clicker-irl-cheat-code): A 12 V motor-driven slider-crank that pushes a metal shaft back and forth, assembled with M3 bolts and nuts *(licence: CC BY)*
  - [Mechanical mechanism library (HUANGYAN920, web app; listed as 曲柄滑块机构)](https://huangyan920.github.io/Mechanical/): Browser library of 257 parametric mechanism animations with presets for standard and offset (quick-return) slider-cranks *(licence: MIT (per the GitHub README))* *(unverified parts omitted)*
- **diagram_idea**: A crank, connecting rod and piston drawn at the top dead centre, 90 degrees and bottom dead centre, with the stroke marked as 2r, the rod's lean angle shaded, and a small arrow showing the sideways push of the rod on the piston.
- **sources**: 
  - https://en.wikipedia.org/wiki/Slider-crank_linkage
  - https://en.wikipedia.org/wiki/Connecting_rod
  - https://en.wikipedia.org/wiki/Four-bar_linkage
  - https://en.wikipedia.org/wiki/Linkage_(mechanical)
  - https://en.wikipedia.org/wiki/Scotch_yoke
  - https://commons.wikimedia.org/wiki/File:Crank_Slider.gif
  - https://commons.wikimedia.org/wiki/File:Steam_engine_in_action.gif
  - https://commons.wikimedia.org/wiki/File:4-Stroke-Engine.gif
  - https://507movements.com/mm_092.html
  - https://507movements.com/mm_158.html
  - https://507movements.com/toc.html
  - https://www.cs.cmu.edu/~rapidproto/mechanisms/chpt5.html
  - https://mechsimulator.com/mechanisms/
  - https://mechsimulator.com/tools/slider-crank/
  - https://www.igus.com/company/linear-guides-the-2-1-rule-ca
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://www.mcmaster.com/products/rod-ends/
  - https://www.mcmaster.com/products/shoulder-bolts/
  - https://www.mcmaster.com/products/sleeve-bearings/
  - https://www.mcmaster.com/products/linear-bearings/
  - https://printamotion.com/
  - https://pmksplus.com/
  - https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/main/README.md
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=OltIA-Rl86A
  - https://www.youtube.com/watch?v=oGlPbZPI2bQ
  - https://www.youtube.com/watch?v=JMIEaNwuMEk
  - https://www.youtube.com/watch?v=dA_j05ut0FE
  - https://cs448m.github.io/lectures/machines/doc/2.pdf
  - https://cs448m.github.io/lectures/machines/doc/4.pdf

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, input_output, make_it_yourself, making_tips_3d_printing, play_and_precision, print_in_place, processes, removability, safety_notes

## 87 Four-bar linkage (incl. parallelogram linkage)

*motion conversion.* Four bars joined in a loop by pivots, which turns one motion into another shaped motion; the basic building block of most linkages

*Also covers:* Also covers the pantograph (a parallelogram linkage that copies motion at a larger or smaller scale)

### What it is

- **plain_name**: Four stiff bars pinned together at their ends in a loop, with one bar held still; moving one bar makes the others turn, swing or carry a part along a set path. When opposite bars are equal (a parallelogram) the moving part stays pointing the same way, like a desk-lamp head, and a pantograph uses one to copy a drawing bigger or smaller
- **term**: Four-bar linkage (incl. parallelogram linkage and pantograph)
- **aliases**: 
  - four-link mechanism / 4-bar / four-bar mechanism
  - quadrilateral linkage, RRRR linkage (four revolute joints; Wikipedia)
  - crank-rocker, double crank (drag link), double rocker: the Grashof types
  - parallelogram linkage / parallel linkage / parallel four-bar
  - antiparallelogram (contra-parallelogram, crossed four-bar)
  - virtual four-bar: the chain or belt version used in robot arms (gm0)
  - pantograph (copying linkage for enlarging and reducing drawings); eidograph (an improved pantograph of 1821; Wikipedia)
  - parallel link coupling (parallelogram linkages passing rotation between parallel shafts; Nguyen Duc Thang)
  - 四连杆机构 / 平行四连杆机构 / 缩放仪 (Chinese: four-bar linkage / parallel four-bar / pantograph)
- **family**: motion conversion
- **other_families**: over-centre, toggle & cam clamps, clutches & couplings
- **one_liner**: Four bars joined by four pivots into a closed loop, one bar fixed, so that turning or swinging one bar moves the rest in a single set way: turning into swinging, swinging into turning, a part kept level (parallelogram), or a drawing traced at a new scale (pantograph).
- **complexity**: A few parts: a fixed base (ground link) with two pivots; an input link (crank or lever); a floating link between the moving ends (coupler); an output link (rocker or follower); four pivot pins, bolts or bearings. A pantograph uses a parallelogram with two arms extended, one fixed pivot, a tracing point and a pen.
- **how_it_works**: Because the four bars form a closed loop, fixing one bar leaves only one way for the others to move: set the input's angle and every other part's position follows (one degree of freedom). The link lengths decide what happens: by Grashof's rule, if the shortest plus the longest bar are no longer than the other two added together, the shortest bar can turn all the way round, giving a crank-rocker (input turns, output swings), a double crank (both turn) or a double rocker (both swing) depending on which bar is shortest (Wikipedia; MechSimulator). Points on the coupler trace curves (coupler curves) ranging from near-straight lines to figure-eights. When opposite bars are equal (a parallelogram) the coupler stays parallel to the fixed bar, so a lamp head, loader bucket or wiper blade keeps its angle (Carnegie Mellon notes; Wikipedia); a pantograph arranges a parallelogram so that a fixed point, a tracing point and a pen stay on one straight line, so the pen copies the tracer's path scaled by the ratio of their distances from the fixed point (Nguyen Duc Thang, 'Bar pantograph 1'; 507 Mechanical Movements no. 246).

### Finder attributes

- **job**: 
  - change the kind of motion: e.g. continuous rotation into swinging (wipers, pumpjacks), swinging into rotation (treadles), or a swing into a shaped path; a pantograph copies motion at a larger or smaller scale
  - let it move (turn, slide or bend): guides a part along a set path, e.g. keeping it level (parallelogram lamps, lifts and robot arms) or as a vehicle suspension or folding mechanism
  - change speed or turning force: the force and speed ratio change through the motion, and near a toggle position the force gain becomes very large (locking pliers, toggle clamps)
  - lock, and release by hand: driven just past a toggle (over-centre) position against a stop it locks, as in toggle clamps and locking pliers, and is released by pulling it back
- **motion**: rotate: every joint is a pivot; the input and output bars either turn fully or swing through a limited angle depending on the link lengths (Grashof), and the coupler moves along a curved path; in a parallelogram the coupler moves without turning. A parallelogram arm used to keep a part level travels less than 180 degrees in total (under 90 degrees either way; gm0)
- **degrees_of_freedom**: 1 for a four-bar with one bar fixed (mobility M = 1; Wikipedia 'Linkage (mechanical)'). A drawing pantograph has 2, because it is anchored at only one pivot so its tracer can go anywhere on the table (Wikipedia lists the pantograph as a four-bar with two degrees of freedom)
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): turns rotation into swinging and back, moves a point along a chosen curve (coupler curve), and a crank-rocker with unequal strokes gives a quick return (time ratio Q; Wikipedia)
  - over-centre (snaps past a point and stays): at toggle (dead) positions, where two links line up, the output cannot drive the input and the force gain is very large; toggle clamps and locking pliers use this, and driving a linkage over centre 'can have some benefits, like making the linkage harder to backdrive' (gm0; Thang, 'Toggle clamp 2a'; Hackaday)
  - parallel motion (a special kind of motion conversion): a parallelogram keeps the moving part at a fixed angle, and a pantograph copies motion at a fixed scale; the catch is that at its change points, where all four bars line up, a parallelogram can flip into a crossed antiparallelogram unless something prevents it (Wikimedia Commons animation 'Parallel 4-bar Linkage 1'; Thang, 'Parallelogram Mechanism 1')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion); when used over-centre against a stop (toggle clamp, locking pliers) it holds by its shape: the load pushes the joint further into the locked position
- **input_output**: Rotation or swinging -> rotation, swinging, or a guided path. Crank-rocker: continuous rotation -> back-and-forth swing whose size is set by the link lengths; double crank: rotation -> rotation at a varying speed; parallelogram: rotation -> equal rotation, so a parallel link coupling passes rotation between parallel shafts with no backlash (Thang, 'Parallel link coupling'); pantograph: tracer motion -> pen motion scaled by k = OE/OC, e.g. 2:1 (Thang, 'Bar pantograph 1'). The force and speed ratios change through the motion; linkages 'generally reach a maximum speed and force when the bars are perpendicular' (gm0), and force passes best when the coupler meets the output bar at 90 degrees (the transmission angle; Carnegie Mellon notes), becoming poor below about 40 degrees (MechSimulator). Shaft arrangement: all pivot axes parallel in the usual flat (planar) linkage; spherical and spatial four-bars also exist (Wikipedia). Back-drivable: usually yes, except at toggle positions, where the output cannot drive the input (Carnegie Mellon notes). *(unverified parts omitted)*
- **power**: passive (no power needed); driven by hand, a motor, a spring, gravity or an actuator. If power is lost it stops or falls under its load unless it is balanced (balanced-arm lamps use springs; Wikipedia) or parked over centre
- **removability**: removable: the pivots are bolts, pins, shoulder screws or snap pins that can be undone
- **reuse_cycles**: many times: taking the pivots apart does not harm them; life is limited by pivot wear
- **tools_needed**: A screwdriver or hex key and a spanner for the pivot bolts and lock nuts; none for snap-together printed demos; optionally a drill or reamer to bring printed pivot holes to size
- **seal**: none: it is an open linkage and does not seal anything
- **load**: Light to heavy: from pantographs and desk lamps to loader buckets, vehicle suspensions and oil-well pumpjacks (Wikipedia; Carnegie Mellon notes). If loads act only at the pivots, each bar is simply pushed or pulled along its length, and the pivots carry the load in shear. Weak spots: the pivots (wear and bending of the pins), positions with a poor transmission angle or close to a toggle position, where forces in the links and bearings rise sharply (MechSimulator), and sideways (out-of-plane) loads, which twist long thin bars.
- **adjustable**: Not usually. Adjustable link lengths (slotted holes, a row of pivot holes, or threaded rod ends) change the output motion; a pantograph's slides or pivot holes change its scale (507 Mechanical Movements no. 246; bce.gatien's printable pantograph copies at 1/2, 1/3, 1/4 or 1/6 scale, or the reverse by swapping pen and tracer).
- **play_and_precision**: Small with good bearings, but each pivot's clearance adds up and is magnified at the end of long links; for a printed pantograph, 'any sloppiness will be transferred to the drawing' (bce.gatien, Printables). Repeatable, because the geometry fixes every position. It needs all pivot axes parallel and the links stacked in their proper planes: a printed pantograph binds if the arms are not stacked in the same vertical plane (Collin_Builds, Printables). *(unverified parts omitted)*
- **access_needed**: not applicable: it is a mechanism assembled from bars and pivots, reached from wherever the bars are
- **materials**: 3D-printed PLA or PETG for demos and light robot arms. Pivots are usually steel bolts, shoulder screws or pins, often with plastic or bronze bushings or ball bearings (vachaj11's printed pantograph uses 608 ball bearings; Collin_Builds' uses M5 bolts, washers and nyloc nuts). The PantoProbe used brass tubing joints or flexible links (Hackaday). *(unverified parts omitted)*
- **maker_difficulty**: easy for a simple linkage or pantograph (flat parts joined with bolts); moderate to design one that gives a particular path or swing, which is easiest with a free simulator such as PMKS+, Linkage or MechSimulator

### Making it

- **processes**: 
  - 3D print (FDM): links print flat; many printable demos and pantographs
  - CNC: for metal links and brackets
  - off-the-shelf part: rod ends, shoulder screws, bushings and bearings for the pivots; aluminium bars or extrusion for the links *(unverified parts omitted)*
- **print_in_place**: no: usually printed as flat links and joined with bolts or pins (bce.gatien's pantograph assembles without hardware; others use bolts or bearings). *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Print links flat on the bed so the layers run along each bar's length; FDM parts are much weaker between layers (Prusa). 2) Pivots: a metal bolt or shoulder screw through the printed holes, a washer between each pair of moving links, and a nylon-insert lock nut tightened only until the joint turns without wobble (Collin_Builds uses M5 bolts, washers and nyloc nuts); for smoother, longer-lasting joints press ball bearings into the links (vachaj11 uses 608 bearings). 3) Clearance: at least 0.3 mm for printed moving parts (Prusa), 0.5 mm to be safe on FDM (Hubs); for precise tools go tighter and test: bce.gatien offers 0.1, 0.2 and 0.3 mm versions and a tolerance test, because any play shows up in the drawing. 4) Keep the links stacked in the right planes; if arms that should line up are offset, the linkage binds (Collin_Builds). 5) Avoid brittle filaments for thin links: bce.gatien advises against silk or brittle PLA and recommends regular or matte PLA, PLA+, PETG or ABS/ASA. 6) Check the geometry first: Grashof's rule for whether a link can turn fully, and keep the transmission angle above about 40 degrees (MechSimulator); a free simulator (PMKS+, Linkage, MechSimulator) or Print a Motion saves reprints. 7) For parallelograms, stop the links before they line up flat, or add a second crank at another angle, so it cannot flip into a crossed shape (Thang, 'Parallelogram Mechanism 1'). 8) Long parallel arms that must travel more than about 180 degrees are awkward; robot builders use a chain or belt 'virtual four-bar' instead (gm0). 9) PLA softens above about 60 °C (Prusa); use PETG or ASA near heat.
- **off_the_shelf_parts**: Pivot pins: shoulder screws (shoulder bolts), clevis pins, dowel pins or plain bolts with nylon-insert lock nuts and washers. Bearings: sleeve bearings (bushings), flanged sleeve bearings, ball bearings (e.g. 608). Adjustable links: ball-joint rod ends or clevis rod ends on threaded rod. Links: flat bar, aluminium extrusion or tube. Balancing: extension springs or gas springs (balanced-arm lamps use extension springs; Wikipedia). Names as used in the McMaster-Carr catalogue.
- **rules_of_thumb**: 
  - Grashof's rule: if shortest + longest <= sum of the other two links, the shortest link can rotate fully; otherwise every link only swings (a triple rocker) (Wikipedia 'Four-bar linkage'; Carnegie Mellon notes; MechSimulator).
  - Which Grashof type you get depends on which link is shortest: shortest link is the crank -> crank-rocker; the fixed base -> double crank (drag link); the coupler -> double rocker; the output -> rocker-crank (MechSimulator).
  - Transmission angle (between the coupler and the output link): best at 90 degrees (Carnegie Mellon notes); keep it above about 40 degrees throughout the motion or force transmission becomes poor and the linkage may struggle to move (MechSimulator).
  - Quick return: time ratio Q = (180° + b)/(180° - b), where b is the imbalance angle (Wikipedia 'Four-bar linkage').
  - Parallelogram: opposite links equal; the coupler keeps its orientation (Carnegie Mellon notes; gm0). A parallelogram arm travels under 180 degrees, less than 90 degrees either way (gm0). At the change points it can flip into an antiparallelogram; extra cranks at other angles get it through (Thang, 'Parallelogram Mechanism 1').
  - Parallel link coupling (several parallelograms sharing a moving frame): all cranks must be the same length and the shaft pattern on the moving and fixed frames identical; keep the moving frame light, as it is unbalanced and unsuitable for high speed (Nguyen Duc Thang, 'Parallel link coupling').
  - Pantograph: the fixed point, tracer and pen must stay on one straight line; scale factor k = distance from fixed point to pen / distance to tracer (Thang, 'Bar pantograph 1'); swap tracer and pen to enlarge instead of reduce (507 Mechanical Movements no. 246; bce.gatien, Printables).
  - Linkage speed and force are not constant and generally peak when the bars are perpendicular (gm0).
  - Printed pivots: start with at least 0.3 mm clearance (Prusa) or 0.5 mm on FDM (Hubs); precise tools such as pantographs need tighter joints (0.1-0.3 mm, bce.gatien) or bearings.

### When to use it

- **everyday_examples**: 
  - Car windscreen wipers, driven from the motor through four-bar linkages, and the parallelogram 'pantograph' wipers on buses (Wikipedia 'Windscreen wiper')
  - Balanced-arm desk lamps, whose parallelogram keeps the lamp head pointing the same way, and ironing boards that stay level as you change the height (Wikipedia 'Balanced-arm lamp'; reSolve Maths)
  - Oil-well pumpjacks, bicycle rear suspensions, door closers, folding chairs and treadle sewing machines (Wikipedia 'Four-bar linkage')
  - Locking pliers, and your own knee joint (Hackaday)
- **when_to_use**: Use a four-bar when you need a part to move along a particular path, swing back and forth from a turning motor, or stay level while it moves, using only pivots, which are cheap, strong and wear slowly. Crank-rockers turn a motor's rotation into a swing (wipers, pumps, walking toys); double rockers make grippers, suspensions and folding mechanisms; parallelograms keep a lamp head, platform, gripper jaw or camera level while it rises and falls; a pantograph copies, enlarges or reduces motion, from drawing aids to precise probes. A four-bar near its toggle position gives a very large force and can lock, as in toggle clamps and locking pliers.
- **when_not_to_use**: Avoid it when you need a long straight-line movement (use a slide, rack and pinion or lead screw) or exact straight lines from pivots only (see the straight-line linkages, Watt, Chebyshev and Peaucellier), when a parallel arm must swing more than about 180 degrees (use a chain or belt 'virtual four-bar'; gm0), when you need a constant speed or force through the whole movement (linkages vary; use gears, belts or screws), or when the motion must change often (use a servo or programmable actuator). A parallelogram run through its line-up positions can flip unless guided; avoid designs that pass through those points.
- **environment_limits**: Printed PLA softens above about 60 °C and degrades in UV light, so use PETG or ASA near heat or outdoors (Prusa). *(unverified parts omitted)*
- **safety_notes**: None known for small hand-moved demos. *(unverified parts omitted)*
- **common_failures**: 1) It locks or will not move because it reaches a toggle (dead) point where the input cannot turn the output (Carnegie Mellon notes), or the transmission angle becomes too small (MechSimulator): change link lengths or add stops. 2) A parallelogram flips into a crossed shape as the bars pass the line-up position (Commons 'Parallel 4-bar Linkage 1'; Thang): add stops or a second crank at another angle. 3) A link was meant to turn fully but only rocks because the lengths break Grashof's rule (Wikipedia): check shortest + longest <= the other two. 4) Wobbly, inaccurate motion from worn or loose pivots, magnified by long links (bce.gatien): use bearings or bushings and tighter clearances. 5) Binding because links are not stacked in their planes or pivots are not parallel (Collin_Builds): check the stacking order and shim with washers. 6) Thin printed links snapping along a layer line or being printed in brittle filament (Prusa; bce.gatien): print flat, use PETG or plain PLA.
- **related**: 
  - Slider-crank: a four-bar with one pivot replaced by a slide, turning rotation into straight back-and-forth motion (Carnegie Mellon notes; Wikipedia)
  - Scotch yoke: straight back-and-forth motion from a pin in a slot, a pure sine wave
  - Straight-line linkages (Watt, Chebyshev, Peaucellier): four-bars and larger linkages whose coupler point traces a (nearly) straight line
  - Scissor linkage (lazy tongs, scissor lift): a chain of crossed links that extends a long way from a small movement
  - Over-centre linkage (toggle linkage) and toggle clamp: a four-bar or slider-crank used at its toggle position to lock
  - Quick-return mechanism (Whitworth, crank and slotted lever): uses a slotted link to make the return faster
  - Virtual-pivot linkage (remote centre of motion): a linkage arranged so a part rotates about a point in empty space
  - Bell crank (angle lever): a single L-shaped lever often used as one link of a linkage
  - Oldham coupling: like a parallel link coupling, passes rotation between offset parallel shafts, but by sliding rather than pivots

### Pictures, videos and models

- **links**: 
  - [Crank-Rocker 4-bar Linkage.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Crank-Rocker_4-bar_Linkage.gif): Animated crank-rocker: one link turns fully while the other rocks back and forth (made in GeoGebra) *(licence: CC BY-SA 4.0)*
  - [Parallel 4-bar Linkage 1.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Parallel_4-bar_Linkage_1.gif): Animated parallelogram, a parallelogram flipping to a contraparallelogram, and a contraparallelogram, side by side *(licence: CC BY-SA 4.0)*
  - [Pantograph animation.gif (Wikimedia Commons, by AlphaZeta)](https://commons.wikimedia.org/wiki/File:Pantograph_animation.gif): Animated pantograph copying a drawing at a different scale *(licence: Public domain)*
  - [507 Mechanical Movements, No. 246: pantograph for copying, enlarging and reducing plans](https://507movements.com/mm_246.html): 1868 drawing, with an animated version, of a drawing pantograph with adjustable slides to change the scale *(licence: Book public domain; website animation link only)*
  - [Parallelogram Mechanism 1 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=prMefg7NCsc): CAD animation of a parallelogram linkage getting past its dead points with extra cranks set at different angles *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Four-Bar Linkage simulator (MechSimulator)](https://mechsimulator.com/tools/four-bar-linkage/): Interactive four-bar: change the four link lengths and see the Grashof class, transmission angle, output speed and a traced coupler curve *(licence: link only (no licence stated))*
  - [Mechanical mechanism library (HUANGYAN920, web app)](https://huangyan920.github.io/Mechanical/): Browser library of 257 parametric mechanism animations, including four-bar, crank-rocker, double crank, double rocker, parallel four-bar, antiparallelogram, pantograph, wiper and pumpjack linkages *(licence: MIT (per the GitHub README))*
  - [Pantograph 200mm, 250mm, 300mm (bce.gatien, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/898021-pantograph-200mm-250mm-300mm): Hardware-free printable pantograph copying at 1/2 to 1/6 scale (or enlarging by swapping pen and tracer), with 0.1/0.2/0.3 mm clearance versions and a tolerance test *(licence: CC BY-SA)*
  - [Sharpie Pantograph (Collin_Builds, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/254344-sharpie-pantograph): Doubling or halving pantograph for teaching ratios, assembled with M5 bolts, washers and nyloc nuts *(licence: CC BY-NC)*
  - [Pantograph for scaling up using 608 bearings (vachaj11, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/15364-pantograph-for-scaling-up-using-608-bearings): Printed pantograph whose pivots run on five 608 ball bearings, with M5 and M3 screws *(licence: CC BY)* *(unverified parts omitted)*
- **diagram_idea**: Three small panels built from the same four bars with one fixed: a crank-rocker (crank turning, rocker swinging, coupler curve traced), a parallelogram (the top bar staying level as it rises, like a lamp arm), and a pantograph (fixed point, tracer and pen on one straight line, with a small star traced and a larger star drawn).
- **sources**: 
  - https://en.wikipedia.org/wiki/Four-bar_linkage
  - https://en.wikipedia.org/wiki/Linkage_(mechanical)
  - https://en.wikipedia.org/wiki/Slider-crank_linkage
  - https://en.wikipedia.org/wiki/Pantograph
  - https://en.wikipedia.org/wiki/Balanced-arm_lamp
  - https://en.wikipedia.org/wiki/Windscreen_wiper
  - https://commons.wikimedia.org/wiki/File:Crank-Rocker_4-bar_Linkage.gif
  - https://commons.wikimedia.org/wiki/File:Parallel_4-bar_Linkage_1.gif
  - https://commons.wikimedia.org/wiki/File:Pantograph_animation.gif
  - https://www.cs.cmu.edu/~rapidproto/mechanisms/chpt5.html
  - https://mechsimulator.com/mechanisms/
  - https://mechsimulator.com/tools/four-bar-linkage/
  - https://gm0.org/en/latest/docs/common-mechanisms/linkages.html
  - https://hackaday.com/2017/03/29/marvelous-mechanisms-the-ubiquitous-four-bar-linkage/
  - https://hackaday.com/tag/four-bar-linkage/
  - https://hackaday.com/2017/10/04/precision-pantograph-probes-pcbs/
  - https://hackaday.com/2018/01/26/amazing-mechanical-linkages-and-the-software-to-design-them/
  - https://resolve.edu.au/v84-sequences/mechanical-linkages-similar-triangles
  - https://507movements.com/mm_246.html
  - https://507movements.com/mm_158.html
  - https://507movements.com/toc.html
  - https://www.youtube.com/watch?v=prMefg7NCsc
  - https://www.youtube.com/watch?v=pkcdVQZubiM
  - https://www.youtube.com/watch?v=9H5hSLaRPTQ
  - https://www.youtube.com/watch?v=Nmp_U-tkoH8
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://cs448m.github.io/lectures/machines/doc/4.pdf
  - https://printamotion.com/
  - https://pmksplus.com/
  - https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/main/README.md
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://www.mcmaster.com/products/rod-ends/
  - https://www.mcmaster.com/products/shoulder-bolts/
  - https://www.mcmaster.com/products/sleeve-bearings/

### Other info

- **Fields with unverified parts:** environment_limits, input_output, make_it_yourself, materials, play_and_precision, print_in_place, processes, safety_notes

## 88 Rack and pinion

*motion conversion.* A gear (pinion) meshing with a toothed straight bar (rack) to turn rotation into straight-line motion or the reverse

### What it is

- **plain_name**: A gear wheel that meshes with a straight bar of teeth: turning the wheel slides the bar along (or makes the wheel roll along a fixed bar), and pushing the bar turns the wheel
- **term**: Rack and pinion (gear rack and pinion)
- **aliases**: 
  - gear rack / toothed rack / linear gear
  - rack drive / rack-and-pinion drive
  - rack and pinion steering (cars)
  - rack railway / cog railway (a train's cog wheel climbs a toothed rail laid between the rails)
  - helical rack (slanted teeth, meshes with a helical pinion)
  - round rack (teeth cut round a round bar)
  - arcuate rack / gear sector (a curved rack, really a slice of a large gear)
  - double rack and pinion (one pinion between two racks, as in pneumatic valve actuators)
  - stroke doubler (pinion running between a fixed rack and a moving rack)
  - CP rack (circular pitch rack, sized so travel per turn is a round number)
  - linear servo (a hobby servo turning a pinion on a rack)
  - Zahnstangengetriebe (German)
- **family**: motion conversion
- **other_families**: gear trains, gearboxes & transmissions, sliding, telescoping & linear motion
- **one_liner**: A round gear (the pinion) meshes with a straight toothed bar (the rack), so every turn of the pinion moves the rack by the distance round the pinion's pitch circle, turning rotation into straight-line motion or straight-line motion back into rotation.
- **complexity**: A few parts: the pinion (a spur or helical gear) on a shaft with bearings, the rack (a straight bar of teeth, which can be several bars joined end to end), a guide that keeps the rack or the moving carriage straight and at the right distance from the pinion (a slot, rails or rollers), and a knob, handle or motor that turns the pinion.
- **how_it_works**: The pinion's teeth mesh with the rack's teeth just like two gears, except that the rack behaves like a gear with an infinitely large radius, so its teeth have straight (flat) sides while the pinion's are curved (involute) (KHK; Wikipedia). Each turn of the pinion moves the rack by the length of the pinion's pitch circle: travel per turn = pi x pitch diameter = pi x module x number of teeth (Gear Solutions). Either part can be the fixed one: a fixed pinion shaft slides the rack (car steering, drill-press feed), while a fixed rack lets a motor-driven pinion drive itself along it (sliding gates, CNC gantries, rack railways). The rolling teeth waste little energy, so it also works backwards: pushing the rack turns the pinion (it is back-drivable).

### Finder attributes

- **job**: 
  - change the kind of motion: rotation into straight-line motion, or straight-line motion into rotation
  - change speed or turning force: a small pinion gives a strong push but little travel per turn; a large pinion gives fast travel but less push
  - let it move (turn, slide or bend): it drives and positions a slide or carriage along a straight path of almost any length
- **motion**: rotate+slide: the pinion turns and the rack slides in a straight line; travel is limited only by the rack's length, and racks can be joined end to end (industrial systems can be longer than 200 ft, per linearmotiontips)
- **degrees_of_freedom**: 1: the rack's position is tied to the pinion's angle, so there is one independent motion; the guide has to stop every other movement
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): the pinion's rotation becomes straight-line travel of the rack, and pushing the rack turns the pinion
  - self-aligning or self-centring (double-rack version only): one pinion between two opposite racks drives them equal distances in opposite directions (Wikipedia), so two jaws, doors or arms stay centred as they open and close
  - none of the holding behaviours: it is not self-locking, so a load on the rack can drive it backwards
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes on motion and does not hold a position by itself
  - shape (the parts interlock; form-fit): the meshing teeth interlock, so the rack can only move if the pinion turns
- **input_output**: Rotation -> straight-line motion (or the reverse). Travel per pinion turn = pi x pitch diameter = pi x module x teeth; e.g. module 2.5 with 20 teeth has a 50 mm pitch diameter and moves 157.08 mm per turn, while a CP10 (10 mm circular pitch) 20-tooth pinion moves exactly 200 mm per turn (Gear Solutions). Push on the rack = pinion torque / pitch radius (the smaller the pinion, the stronger the push). Efficiency: high, like other spur and helical gears: KHK lists 98.0-99.5% for parallel-axis gears, Machine Design quotes up to 98.5% for industrial rack sets, and HUANGYAN920's rack-and-pinion page gives 90-97%. Shaft arrangement: the pinion's shaft is square (at 90 degrees) to the rack's travel and set at a fixed mounting distance = height of the rack's pitch line + pinion pitch radius (KHK). Back-drivable: yes: it works in both directions (Wikipedia contrasts this with a worm drive, which is usually one-way), so a vertical or sloping load will run down by itself unless something holds it.
- **power**: passive (no power needed); turned by hand (knob, crank, feed handle) or by a motor. If a motor loses power the rack and pinion does not hold: a vertical or sloping load can run down unless there is a brake, a self-locking stage (such as a worm gearbox) or a counterweight
- **removability**: removable: the rack is screwed (and often dowel-pinned) to its base and the pinion comes off its shaft or is moved out of mesh, so either can be replaced on its own
- **reuse_cycles**: many times: it can be taken apart and re-meshed repeatedly; the limit is tooth wear, and the mounting distance (and so the backlash) must be set again after each reassembly
- **tools_needed**: Hex keys or spanners for the rack screws and the pinion's set screw or clamp; a drill and dowel pins to lock racks in place (KHK drills rack and base together); a short spare rack used as a joining gauge when butting racks end to end (KHK); grease for metal teeth (self-lubricating plastic racks such as iglidur run dry)
- **seal**: none: the teeth are open to the air and dirt; nothing about the mesh seals
- **load**: Light to heavy depending on size and material: steel industrial racks drive heavy machine gantries, and rack railways climb slopes of up to 48% (Pilatus Railway, Wikipedia), while printed and small plastic racks are light duty. Strong along the rack (push and pull go straight through the teeth). Weak against anything that pushes the pinion away from the rack: the sloping tooth faces create a separating force, and helical racks also push sideways by up to one third of the drive force (linearmotiontips), so a flimsy mount lets the teeth jump out of mesh (gm0 warns that poor support causes mesh failure, and that the Tetrix kit rack fails under medium to high stress). Long unsupported racks also bend.
- **adjustable**: yes: the rack can be stopped anywhere along its travel by turning the pinion; the backlash (gap between teeth) is adjusted by moving the pinion shaft or motor closer to or further from the rack (KHK); special tapered racks and pinions adjust it by sliding the pinion along its shaft (1 mm of axial movement changes the backlash by 0.05 mm on KHK's tapered sets)
- **play_and_precision**: Small to noticeable backlash: there is always a gap between the teeth, so a little travel is lost whenever the direction reverses (Gear Solutions), and KHK says never to run at zero backlash. Accuracy depends mainly on the pitch error of the teeth and on keeping the mounting distance constant along the whole rack (linearmotiontips; KHK); high-grade ground racks reach a cumulative pitch error of +/-12 micrometres over 500 mm, and two preloaded pinions working against each other can cancel backlash (Machine Design). Printed racks have noticeably more play. It tolerates little misalignment: precision drives need the rack aligned within about 25 micrometres (Machine Design), and a rack that is not parallel to its guide gives backlash that changes along the travel, or binds.
- **access_needed**: not applicable: the rack is screwed down along its length and the pinion sits on a shaft in a frame, reached wherever the frame opens
- **materials**: Racks: steel (cut, or induction-hardened and ground for precision), stainless steel, brass and plastics; McMaster-Carr lists brass, plastic, stainless steel and steel racks in modules 0.5-2.5 (diametral pitch 6-64) with 14.5 or 20 degree pressure angles. Self-lubricating plastic racks and 3D-printing materials such as iglidur (igus, brand) need no grease and resist wear. Pinions: steel, brass or plastic. Printed gears: EngineerDog ranks nylon > PLA > ABS > PETG for hobby FDM gears (nylon wears best but absorbs moisture; PLA is stiff but heat-limited).
- **maker_difficulty**: easy: racks and pinions print flat without supports and free tools (e.g. BOSL2's rack()) draw correct teeth; the harder part is a straight, rigid guide that holds the pinion at the right distance all along the rack

### Making it

- **processes**: 
  - off-the-shelf part: metal and plastic spur or helical gear racks with matching pinions, bought by module (metric) or diametral pitch (inch)
  - 3D print (FDM): racks and pinions for models, light-duty slides, focusers, linear servo actuators and print-in-place demonstrators
  - 3D print (SLS powder): igus prints racks and pinions from wear-resistant iglidur powder
  - CNC: industrial racks are cut by hobbing (Wikipedia) or milling, and precision racks are ground
- **print_in_place**: yes: print-in-place rack and pinion demonstrators exist, e.g. SilentYetiDesigns' print-in-place rack-and-pinion box lid (twist the gear once after printing to break it free); most printed racks and pinions are printed as separate parts and assembled on a shaft and guide
- **making_tips_3d_printing**: 1) Orientation: print the rack lying on its side so the tooth outline is traced by continuous perimeters, and print the pinion flat with its axle vertical; Jan-E.de printed both 'on the side to have the teeth as perimeters' in PLA at 0.2 mm layers with no supports. 2) Get the tooth shape right: rack teeth have straight sides (a rack is a gear of infinite radius, KHK). Jan-E.de's first rack copied curved pinion teeth onto a straight bar and had to be redrawn, so use a generator: BOSL2's rack() meshes with any gear of the same pitch (or module) and pressure angle, and a helical rack needs a pinion of the opposite hand. 3) Add clearance: BOSL2's backlash setting thins the teeth (it recommends putting the backlash on the larger part if the pinion is very small, to avoid weakening its teeth), or move the pinion slightly further from the rack. Jan-E.de used 0.1 mm clearance between rack and pinion teeth and for the slide and shaft hole, with 0.2 mm versions for looser printers. 4) Make teeth chunky: EngineerDog suggests a 25 degree pressure angle for printed gears, at least 13 teeth at 20 degrees or 9 at 25 degrees on the pinion, a face width of 3-5 x the circular pitch, and backing walls over the tooth faces; tiny teeth often print with gaps inside even at 100% infill. 5) Material: nylon wears best, PLA is stiff but softens above about 60 C, PETG copes to about 80 C (Prusa); grease helps loaded plastic gears (EngineerDog). 6) Build a stiff guide: the main failure is the pinion being pushed away so the teeth skip (gm0), so hold the rack in a slot or on rollers directly behind the mesh. 7) Long racks: print in sections and join them using a short rack meshed across the joint as a gauge; make the joint pitch slightly short rather than long, as KHK advises for metal racks, because a long joint pitch binds. 8) For a quick demonstrator, try a print-in-place model first, then move to separate parts with a proper guide.
- **off_the_shelf_parts**: Metal spur gear racks, plastic spur gear racks and helical gear racks with matching spur and helical gears (McMaster-Carr categories; also round racks); precision CP (circular pitch) racks and pinions, ground racks, and tapered racks and pinions with adjustable backlash (KHK (brand)); self-lubricating plastic racks and gears (igus iglidur (brand)); rack-and-pinion steering racks; double-rack pneumatic rack-and-pinion rotary actuators for pipeline valves (Wikipedia); sliding-gate opener racks and motors; Tetrix (brand) rack and pinion kits for FTC robotics (gm0).
- **rules_of_thumb**: 
  - Travel per pinion turn = pi x pitch diameter = pi x module x teeth. Module 2.5 with 20 teeth: 157.08 mm per turn, 5.73 turns for 900 mm; CP10 with 20 teeth: exactly 200 mm per turn (Gear Solutions, Brian Dengel, 2018).
  - Mounting distance = height of the rack's pitch line + pitch radius of the pinion; keep it constant along the whole rack (KHK CP racks and pinions catalogue). Example: a module 2.5, 20-tooth pinion sits with its centre 25 mm above the rack's pitch line (Gear Solutions).
  - Rack and pinion must share the same module (or pitch) and pressure angle, and a helical rack needs a pinion of the opposite hand (BOSL2 gears.scad; KHK).
  - Never run at zero backlash; backlash comes from thinning the teeth of the rack and pinion or from increasing the mounting distance (KHK; BOSL2 gears.scad).
  - When joining racks, give the joint a minus pitch tolerance (KHK: -0.05 to -0.25 mm for CP2.5, -0.1 to -0.3 mm for CP5, -0.1 to -0.4 mm for CP10), set it with a short gauge rack meshed across the joint, and dowel-pin racks by drilling rack and base together (KHK).
  - Mounting surface flatness and squareness: 0.01 mm for ground racks, 0.05 mm for cut racks; mounting distance tolerance H7 for ground and H8 for cut racks (KHK).
  - Helical racks produce side forces of up to one third of the linear force, so size the guide and bearings for it (linearmotiontips).
  - Parallel-axis (spur and helical) gearing, which includes racks, runs at 98.0-99.5% efficiency (KHK gear types table).
  - Printed gears: 25 degree pressure angle, pinion of at least 13 teeth at 20 degrees or 9 at 25 degrees, face width 3-5 x circular pitch (EngineerDog).

### When to use it

- **everyday_examples**: 
  - Car steering: turning the steering wheel spins a pinion that slides the steering rack left and right (Wikipedia)
  - A drill press or arbor press: the feed handle turns a pinion that lowers the quill (Wikipedia)
  - A sliding electric gate: the motor's pinion runs along a toothed rack fixed to the gate (Wikipedia)
  - Mountain rack railways such as the Pilatus Railway, which climbs 48% slopes with cog wheels on a rack between the rails (Wikipedia)
- **when_to_use**: Use it when you need fast, efficient straight-line motion from a turning shaft (or the reverse), especially over long distances: gantries and long axes, sliding doors and gates, lifting slides that are held by a motor or brake, steering, feed handles, camera and telescope focusers, and model demonstrators. It is simple, stiff along the travel, can be any length (racks join end to end), and its travel per turn is easy to calculate. Two racks on one pinion make a neat way to move two parts equally in opposite directions.
- **when_not_to_use**: Avoid it when the load must stay put with the power off or the handle released, because it back-drives: use a lead screw with a fine lead or a worm drive, or add a brake. Avoid it for very fine, backlash-free positioning on a budget: a lead screw with an anti-backlash nut or a ball screw is easier to make precise. Don't use it where the frame cannot hold the pinion firmly against the rack (the teeth will skip); a timing belt is often simpler for light, long, fast moves. For extensions with several stages, robot builders prefer belt- or cable-driven slides, because a rack and pinion is essentially single-stage (gm0).
- **environment_limits**: Printed PLA parts soften above about 60 C and degrade in UV light, so keep them out of hot cars and sunlight; PETG copes to about 80 C (Prusa). Metal teeth need lubricating (KHK's start-up checklist asks whether proper lubrication has been supplied), while self-lubricating plastic racks such as iglidur run dry (igus). *(unverified parts omitted)*
- **safety_notes**: The point where the pinion runs into the rack is an in-running nip point that can catch fingers, hair or clothing (OSHA machine guarding eTool); KHK advises a safety cover over exposed gears and not touching them while they turn. Because it back-drives, a raised load, carriage or gate can run down when a motor loses power or a handle is released. Motor-driven racks (gates, gantries) push hard and can crush someone between the moving part and a fixed one.
- **common_failures**: 1) Teeth skip or jump when the pinion is pushed away from the rack: stiffen the mount and support the rack right behind the mesh (gm0). 2) Binding at the joint between rack sections because the pitch across the joint is too long: set it with a gauge rack and a slightly short joint (KHK). 3) Tight spots or play that change along the travel because the rack isn't parallel to the guide: keep the mounting distance constant (KHK). 4) Lost motion when reversing (backlash): compensate in software, use a spring-loaded or preloaded pinion, or two pinions working against each other (Machine Design; Gear Solutions). 5) Worn or broken teeth on printed parts: use larger teeth, a 25 degree pressure angle, nylon and grease (EngineerDog). 6) Rough, notchy meshing because the rack teeth were drawn curved instead of straight (Jan-E.de's model). 7) The load running down when unpowered: add a brake, worm stage or counterweight.
- **related**: 
  - Lead screw and nut: slower, pushes much harder for the same motor, and a fine lead holds its position by itself; rack and pinion is faster, more efficient and back-drivable
  - Worm drive: a large speed reduction that usually can't be driven backwards; a worm can also drive a rack directly
  - Timing belt and pulley: cheap, long, fast straight-line motion with lower stiffness and force
  - Linear ratchet (toothed bar and pawl): a toothed bar with a catch that lets it move only one way, as in cable ties and some jacks
  - Gear sector and rack (arcuate rack): a slice of a large gear, used where only part of a turn is needed
  - Intermittent (part-toothed) pinion between two racks: turns steady rotation into back-and-forth motion of the rack frame (507 Mechanical Movements no. 114)
  - Stroke doubler: a pinion running between a fixed rack and a moving rack moves the second rack twice as far as the pinion (507 Mechanical Movements no. 118)
  - Scotch yoke and slider-crank: turn continuous rotation into back-and-forth sliding with a fixed stroke, where a rack and pinion gives any travel

### Pictures, videos and models

- **links**: 
  - [Rack and pinion animation.gif (Wikimedia Commons, from OSHA's Machine Guarding eTool)](https://commons.wikimedia.org/wiki/File:Rack_and_pinion_animation.gif): Looping animation of a pinion turning and driving a rack sideways *(licence: Public domain (US government work, OSHA))*
  - [Rack and pinion (Wikipedia)](https://en.wikipedia.org/wiki/Rack_and_pinion): Definition, animation, and photos of uses: canal lock gate gear, sliding gate, car steering, rack railway wheelset, double-rack pneumatic valve actuator, crossbow cranequin *(licence: Text CC BY-SA 4.0; images per file on Commons)*
  - [507 Mechanical Movements no. 113: circular into rectilinear motion by rack and pinion](https://507movements.com/mm_113.html): Animated version of Brown's 1868 engraving of a rack and pinion (see also nos. 114 and 118 for a part-toothed pinion with two racks and a stroke doubler) *(licence: Book public domain; website animation link only)*
  - [Rack pinion mechanism 1 (Nguyen Duc Thang, YouTube channel thang010146; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=9hI85qZ5zKA): CAD animation of a pinion driving a rack *(licence: link only)*
  - [HUANGYAN920 Mechanical: interactive animations (entries 'RACK-PINION' no. 28 and 'RACK-VERTICAL' no. 77)](https://huangyan920.github.io/Mechanical/): Adjustable browser animations of a pinion driving a horizontal rack and a vertical lifting rack *(licence: MIT)*
- **make_it_yourself**: 
  - [Rack and Pinion Gear - Educational Model (Jan-E.de, Printables)](https://www.printables.com/model/792603-rack-and-pinion-gear-educational-model): Large, sturdy classroom rack and pinion with crank and bracket; prints without supports, racks supplied with 0.1 mm and 0.2 mm tooth clearance *(licence: CC BY-NC)*
  - [BOSL2 gears.scad: rack() and rack2d() (OpenSCAD library source)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad): Parametric straight, helical and herringbone racks with backlash, clearance and pressure-angle settings that mesh with the library's spur and helical gears *(licence: BSD 2-Clause)*
  - [Print in place Rack and Pinion Lid (SilentYetiDesigns, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/955011-print-in-place-rack-and-pinion-lid-box-file-availa): A box lid whose sliding panels are driven by a rack and pinion, printed already assembled *(licence: CC BY-NC-ND)*
  - [Rack and Pinion Steering (Tooks, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/229023-rack-and-pinion-steering): Simplified working model of car rack-and-pinion steering with steering wheel, column, universal joints and wheels; 0.5 mm tolerances, some gluing *(licence: CC BY)*
- **diagram_idea**: A side view of a pinion on a straight rack with the pitch circle and pitch line drawn, an arrow showing one pinion turn unrolling the pitch circle into one 'pi x d' length of rack travel, and a zoomed inset of the small gap between teeth (backlash) and the mounting distance from pinion centre to rack pitch line.
- **sources**: 
  - https://en.wikipedia.org/wiki/Rack_and_pinion
  - https://commons.wikimedia.org/wiki/File:Rack_and_pinion_animation.gif
  - https://en.wikipedia.org/wiki/Rack_railway
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html
  - https://khkgears.net/pdf/2023/cp-racks-and-pinions.pdf
  - https://gearsolutions.com/departments/tooth-tips/converting-to-linear-motion-using-rack-and-pinion/
  - https://www.machinedesign.com/mechanical-motion-systems/article/21831764/how-do-rack-and-pinion-drives-stack-up-against-other-linear-motion-systems
  - https://www.linearmotiontips.com/top-10-considerations-when-applying-rack-and-pinion-systems/
  - https://gm0.org/en/latest/docs/common-mechanisms/linear-motion-guide/rack-and-pinion.html
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - https://www.igus.com/info/3d-printed-rack-pinion
  - https://www.mcmaster.com/products/gear-racks/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://507movements.com/mm_113.html
  - https://507movements.com/mm_114.html
  - https://507movements.com/mm_118.html
  - https://www.youtube.com/watch?v=9hI85qZ5zKA
  - https://huangyan920.github.io/Mechanical/
  - https://www.printables.com/model/792603-rack-and-pinion-gear-educational-model
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits

## 89 Scissor linkage (lazy tongs, scissor lift)

*motion conversion.* Crossed bars pinned in the middle and at their ends that stretch out a long way from a small movement, as in scissor lifts and extending mirrors

### What it is

- **plain_name**: Criss-crossed bars pinned together like a row of open scissors, so that squeezing or spreading one end makes the whole lattice stretch out a long way or fold up flat
- **term**: Scissor linkage (scissor mechanism, lazy tongs, scissor lift)
- **aliases**: 
  - scissor mechanism / scissors mechanism
  - lazy tongs / lazy-tongs
  - Nuremberg scissors (Nurnberger Schere, German)
  - scissor lift / scissor lift table / lift table
  - scissor jack (car jack driven by a screw across a diamond of four arms)
  - pantograph arm / pantograph mirror / extending mirror arm
  - folding scissor gate / expanding trellis / folding scissor fence
  - scissor arm / X-lift
  - scissor switch (the mechanism under low-profile keyboard keys)
  - lazy-tongs grabber / reacher toy
  - Hoberman sphere (brand of expanding toy built from scissor pairs)
  - double scissor mechanism (two scissor chains in series for a larger ratio)
- **family**: motion conversion
- **other_families**: sliding, telescoping & linear motion
- **one_liner**: Pairs of bars crossed in an X and pinned at their middles and ends form a chain that folds and unfolds as one piece, so a short push, pull or squeeze at one end becomes a much longer extension at the other, as in scissor lifts, car jacks, extending mirrors and grabber toys.
- **complexity**: A small assembly that acts as one unit: equal bars (scissor arms) crossed in X pairs and pinned at their middles, the X's pinned end to end, one end fixed to a base by a pivot and the other end free to slide in a slot or on rollers, and a driver (a lead screw, hydraulic or pneumatic cylinder, electric linear actuator, or handles squeezed by hand). Lifts use two identical scissor stacks side by side, joined by cross-bars, under a platform.
- **how_it_works**: Each X is two bars pinned at their middles like a pair of scissors, and each X is pinned at its ends to the next, so every X is forced to open to the same angle. Closing the angle at the input (pushing the sliding ends together or squeezing the handles) makes every X stretch at once, so the stretch of all the stages adds up: each X of arm length L adds a height of about L x sin(angle), and a few stages turn a short input into a long output (507 Mechanical Movements no. 144). The price is force: the output moves further, so it pushes less, and when the bars are nearly flat a lift needs a very large push to start rising: for the usual layout, pushed sideways at the base, force = n x (load + half the lift's own weight) / tan(bar angle) (Saxena, after Spackman). All the joints move together, so the whole chain has one degree of freedom, and a scissor lift keeps its platform level as it rises.

### Finder attributes

- **job**: 
  - change the kind of motion: a short push, pull or squeeze becomes a long extension (or, used the other way round, a long movement becomes a short, strong one)
  - change speed or turning force: like a lever, it trades force for distance; each extra stage multiplies the travel and divides the force
  - let it move (turn, slide or bend): it raises a platform or reaches out an arm while keeping it level or facing the same way
- **motion**: multiple: every bar rotates about its pins while the sliding end, the platform or the tip moves in a straight line; from folded nearly flat to stretched with the bars nearly upright, although the flattest part of the range needs huge forces and is avoided
- **degrees_of_freedom**: 1: all the X's are tied together, so one input position sets the shape of the whole chain
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): a short straight movement at one end becomes a much longer straight movement at the other (507 Mechanical Movements no. 144); with a screw drive, turning a handle becomes lift
  - self-aligning or self-centring: a scissor lift keeps its platform level and over its base as it rises (Purdue SIGBots), and a pantograph mirror arm keeps the mirror facing the same way as it extends (Commons 'Pantograph Mirror' animation)
  - self-locking (holds under load, won't back-drive), only when driven by a fine-lead screw: a scissor car jack holds its height because its Acme-threaded screw does not unwind under load (Wikipedia 'Jack (device)'); the linkage itself is not self-locking
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): the linkage passes motion on and folds up under load unless its drive (screw, cylinder, actuator or latch) holds it
  - friction or clamping (force-fit), in some hand-set designs: tightening a pivot bolt clamps the arms so the lift stays at the chosen height (JGomezC145's printed mini scissor lift)
- **input_output**: Short straight motion -> long straight motion (or the reverse, for force). Force: for a lift pushed sideways at its sliding base end (the screw-jack layout), force needed = n x (load + half the lift's weight) / tan(theta), where theta is the bar angle from horizontal and n the number of stages (Saxena 2016, building on Spackman 1989): per stage about 5.7 x the load at 10 degrees, 2.7 x at 20 degrees and 1 x at 45 degrees. The motion ratio is the inverse, so a small base movement gives a big height change when the bars are low and a smaller one near the top. Ratios seen in practice: Thang's lazy tongs animations show about 3-4 x travel (or about 3 x force when used the other way round, as in a lazy-tong riveter), and two scissor chains in series reach 10 x (2 x 5). Arrangement: input and output move in straight lines, either along the same line (lazy tongs; same or opposite directions) or at right angles (lift: sideways input, upward output). Back-drivable: yes: a load pushes the drive back unless the drive is self-locking (fine-lead screw) or has a brake or holding valve. *(unverified parts omitted)*
- **power**: passive (no power needed); often powered by a motor-driven screw, an electric linear actuator or a hydraulic or pneumatic cylinder. When power is lost it keeps its last height only if the drive holds it (a fine-lead screw does; hydraulic lifts rely on their safety systems, and OSHA notes that the rare collapses of scissor lifts can be prevented by keeping the systems designed to stop a collapse maintained and not bypassed)
- **removability**: removable: the arms are joined by bolts, shoulder screws, clevis pins with clips or printed snap-pins, and come apart; print-in-place versions are one piece and are not meant to be taken apart
- **reuse_cycles**: many times: bolted or pinned scissor linkages can be dismantled and rebuilt repeatedly; the pivot holes wear, which adds play
- **tools_needed**: Hex keys and spanners for the pivot bolts and nuts (EDGeProjects' printed arms use M12 bolts, nuts and washers); none for snap-pin or print-in-place printed versions (Miloslav Brozek's lazy tongs use printed snap-rivets); circlip pliers for pins with clips
- **seal**: none: it is an open framework of bars and pins; nothing about it seals
- **load**: Light to heavy depending on build: steel lift tables and aerial work platforms carry people and heavy loads; a hobbyist's printed PETG-and-TPU scissor jack took about 400 lb (Hackaday 2026), and an ABS printed jack lifted a car (Hackaday 2015). Strong in the lifting direction once the bars are well opened; weakest when folded flat, where the bar and drive forces become very large (Saxena). Weak sideways and in twist: play in the many joints adds up, so long lazy tongs and tall lifts sway and flop sideways (Chief Delphi), and lifts need two stacks side by side with cross-bracing (Purdue SIGBots).
- **adjustable**: yes: the height or reach can be set anywhere in the stroke by the drive; hand-set designs are held by tightening a pivot bolt or adding a latch; the total stroke is set by the number of stages and the arm length
- **play_and_precision**: Noticeable: every pin has its own clearance and the errors add up along the chain and are multiplied at the far end, so the tip of long lazy tongs or the top of a tall lift wobbles ('all the slop in the many, many joints compound', Chief Delphi). Tight-fitting shoulder bolts or bushings, fewer stages and a wide base help. It tolerates little difference between the two side stacks of a lift: both sides must move in near-perfect unison or it leans and binds (Purdue SIGBots). The lift is not linear: the same drive movement gives more height change low down than high up, which a controller has to allow for (Hackaday commenters on a scissor-lift Z axis).
- **access_needed**: both sides: each pivot pin or bolt passes through the stacked bars and is secured on the far side with a nut, clip or snap-pin head
- **materials**: Steel channel or box section (industrial lift tables, aerial work platforms, car jacks), aluminium, and wood (e.g. the wooden Nuremberg scissors teaching models in Halle University's model collection). 3D printed: PLA arms at 15% infill with M12 bolts (EDGeProjects), an ABS car jack with an M12 threaded rod (Hans Fouche, via Hackaday), rigid PETG arms inside a flexible TPU skin (Hackaday 2026), PETG recommended for printed snap-pins and PLA for the links (Miloslav Brozek). Pivots: steel bolts, shoulder screws, pins and washers.
- **maker_difficulty**: moderate: the arms are simple flat bars that print or cut easily, but a stiff, play-free result needs accurate, tight pivots and good bracing, and a powered lift needs a strong drive because the force needed near the bottom is very large

### Making it

- **processes**: 
  - 3D print (FDM): arms printed flat and joined with bolts or printed snap-pins; fully print-in-place models exist
  - woodwork: wooden lazy tongs and teaching models such as the Nuremberg scissors set in Halle University's collection
  - sheet metal / metal fabrication: steel arms for lift tables and jacks
  - off-the-shelf part: scissor jacks, lift tables, scissor lifts, laboratory jacks and extending mirror arms
- **print_in_place**: yes: WhopperPrinting's Print-in-Place Scissor Lift prints fully assembled, with a working screw drive and wheels and no supports (free the joints by gently pushing the top down and lightly pulling it up repeatedly before using the screw); most printed scissor mechanisms are printed as flat bars and assembled with bolts or printed snap-pins
- **making_tips_3d_printing**: 1) Print the arms flat on the bed (Miloslav Brozek: 'everything flat, no supports'); a long arm can be laid diagonally on a small bed (EDGeProjects printed 250 mm arms on a 220 mm bed). 2) Pivots: use bolts with washers between the layers (EDGeProjects: one M12 bolt, nut and three washers per hole) or printed snap-rivets; Brozek prints the pins standing flange-down, recommends PETG for the pins, and says to print one pin and one link as a fit test first. 3) Offset the two rails of links by one layer thickness so the crossing bars slide past each other (Brozek). 4) Print-in-place versions come off the bed with slightly fused joints: work them free by gently pushing down and pulling up repeatedly before driving them (WhopperPrinting). 5) Don't rely on threads tapped into plastic for the drive screw: Hans Fouche's ABS jack stripped its tapped M12 thread after a day of testing (Hackaday 2015); trap a metal nut instead. 6) Put plastic in compression and steel in tension where you can (a commenter's explanation of why the PETG/TPU jack took about 400 lb, Hackaday 2026). 7) Longer chains are weaker and floppier, so allow for the load (EDGeProjects) and keep the number of stages down. 8) For a lift, build two identical stacks, cross-brace them and drive both sides together (Purdue SIGBots). 9) PLA softens above about 60 C (Prusa), so avoid it for anything left in a hot car or in the sun.
- **off_the_shelf_parts**: Scissor jacks (car jacks), lift tables, scissor lifts and laboratory jacks (McMaster-Carr categories); aerial work platforms; extending (pantograph) mirror arms; keyboard scissor switches; for building your own: shoulder bolts (shoulder screws) as pivots, washers, lock nuts, clevis pins with retaining clips, electric linear actuators, hydraulic or pneumatic cylinders, trapezoidal lead screws and nuts, and linear slides or rollers for the sliding end.
- **rules_of_thumb**: 
  - Force for a lift pushed sideways at its base (screw-jack layout): F = n x (load + half the lift's weight) / tan(theta), theta = bar angle from horizontal, n = number of stages (Saxena, arXiv 1611.10182, following Spackman 1989). So per stage the push is about 5.7 x the load at 10 degrees, 2.7 x at 20 degrees and 1 x at 45 degrees: size the drive for the lowest position and avoid starting from nearly flat.
  - Where the actuator is attached changes the force needed and the stresses in the arms (Saxena: 'Prudent placement of the actuator can greatly reduce the force required'); with an inclined actuator Gurskyi et al. (2025) found the force rose from 1.67 kN at the bottom to 6.45 kN at the top of a 1 m lift, trading a 6.45-fold force reduction for a 2.25-fold gain in travel, so check the whole stroke, not just one end.
  - Travel ratios: Nguyen Duc Thang's lazy-tongs animations give about 3-4 x travel from a few cells, and two scissor chains in series (2 x and 5 x) give 10 x (Thang, 'Double scissor mechanism').
  - Printed examples: EDGeProjects' arms extend about 4.35 : 1 (two sections: 4.25 in collapsed, 18.5 in extended); Cohens Customs' printed 3 x 3 in lift rises from 3 in to 10 in.
  - Both side stacks of a lift must move in near-perfect unison and be cross-braced, or the lift leans and binds (Purdue SIGBots).
  - Outdoor-rated scissor lifts are generally limited to wind speeds below 28 mph (OSHA scaffolding eTool).

### When to use it

- **everyday_examples**: 
  - A car's scissor jack from the spare-wheel kit (Wikipedia 'Jack (device)')
  - A scissor lift or lift table raising workers or goods (Wikipedia 'Scissors mechanism')
  - An extending bathroom or shaving mirror on a folding arm (pantograph mirror)
  - Lazy-tongs grabber toys, which 507 Mechanical Movements already noted in 1868 were 'frequently used in children's toys'
- **when_to_use**: Use it when you need a long reach or a big lift from a small, compact package that folds nearly flat: lift tables and platforms, jacks, extending arms for mirrors and grabbers, folding scissor gates and fences (Thang, 'Folding scissor gate 1'), fold-down machines (Hackaday featured Malte Schrader's portable CoreXY 3D printer whose gantry rides on scissor lifts so it folds flat), and fun motion-amplifying toys. It keeps a platform level and its load over the base, so it is stable in the lifting direction.
- **when_not_to_use**: Avoid it when you need a stiff, precise, wobble-free reach: the play in its many joints adds up (Chief Delphi); use a linear slide, telescoping tubes or an elevator-style lift instead. Avoid starting a lift from nearly flat with a weak actuator, because the force needed is enormous there; add a starting ramp, a different actuator position or a lead screw. For robots with size limits, many experienced FRC teams prefer elevators or telescoping slides, finding scissor lifts heavy, finicky and easily bent (Chief Delphi). For a simple short lift, a lead screw, rack and pinion or a single lever is simpler.
- **environment_limits**: Outdoor scissor lifts are limited by wind (below 28 mph for outdoor-rated machines) and need firm, level ground (OSHA scaffolding eTool). *(unverified parts omitted)*
- **safety_notes**: The crossing arms close like scissors and form pinch and shear points that can trap or cut fingers (OSHA machine guarding eTool describes pinch and shear points on moving parts). Jacks and lifts can collapse or drop: never get under a load held only by a jack (commenters on Hackaday's printed car jack), and the maker of the 400 lb printed jack warns that it 'CAN CREATE A LOT OF FORCE' (Hackaday 2026). Working scissor lifts can tip over on uneven ground or in wind, crush people against fixed objects overhead, and collapse if their safety systems are bypassed (OSHA).
- **common_failures**: 1) Sideways sway and wobble from play adding up in many joints: use tight pins or bushings, fewer stages, a wider base and cross-bracing (Chief Delphi; Purdue SIGBots). 2) Leaning or binding because the two side stacks don't move together: tie them with cross-bars and drive both sides (Purdue SIGBots). 3) Actuator stalls at the bottom because the force needed near flat is huge: size for the lowest angle, move the actuator, or don't fold fully flat (Saxena). 4) Bent arms after impacts (Chief Delphi: 'easily bent'). 5) Stripped threads or broken screws in the drive: a tapped ABS thread stripped (Hackaday 2015) and nylon lead screws broke on FRC lifts (Chief Delphi); use metal nuts and screws. 6) Print-in-place joints fused solid: free them gently before loading (WhopperPrinting). 7) Hydraulic or actuator failure letting the load drop: keep collapse-prevention systems working (OSHA).
- **related**: 
  - Four-bar and parallelogram linkage (pantograph): a scissor chain is a row of linked parallelograms (DMG-Lib files the Nuremberg scissors under parallel crank mechanisms); a pantograph copies motion at a larger or smaller scale
  - Lead screw jack (screw jack): pushes straight up with a screw and holds by itself, but its travel is limited to its screw length; scissor jacks combine both
  - Telescoping tubes and linear slides (elevators): stiffer and more precise for the same reach, but they don't fold as flat
  - Rack and pinion: straight-line motion from rotation over any length, with no motion multiplication
  - Hoberman sphere and other expanding scissor structures: scissor pairs arranged round a sphere or ring so the whole shape grows and shrinks
  - Keyboard scissor switch: a single tiny scissor that keeps a key level as it is pressed
  - Lever and bell crank: a single lever also trades force for distance, with one pivot instead of many

### Pictures, videos and models

- **links**: 
  - [Pantograph Mirror.gif (Wikimedia Commons, by Catsquisher)](https://commons.wikimedia.org/wiki/File:Pantograph_Mirror.gif): Animation of an adjustable mirror on a scissor (pantograph) extension arm that stays facing the same way as it extends *(licence: Public domain)*
  - [TL 2000 scissor lift.jpg (Wikimedia Commons, by Edmolift AB)](https://commons.wikimedia.org/wiki/File:TL_2000_scissor_lift.jpg): Photo of an industrial scissor lift table with its crossed arms visible *(licence: CC BY-SA 3.0 / GFDL 1.2 (choice of licences))*
  - [507 Mechanical Movements no. 144: lazy tongs](https://507movements.com/mm_144.html): Animated version of Brown's 1868 engraving: a short movement of the rod at one end gives a much greater movement at the other *(licence: Book public domain; website animation link only)*
  - [Lazy tong 2 (Nguyen Duc Thang, YouTube channel thang010146; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=UniRkbt0LOY): CAD animation of lazy tongs turning a short slider movement into an output about 3 times longer, with a guide link keeping the tip level (see also 'Double scissor mechanism', https://www.youtube.com/watch?v=zYfj9d2adqg) *(licence: link only)*
  - [HUANGYAN920 Mechanical: interactive animations (entry 'SCISSOR-LIFT', no. 11)](https://huangyan920.github.io/Mechanical/): Adjustable browser animation of a scissor lift platform rising as the base ends close *(licence: MIT)*
- **make_it_yourself**: 
  - [Print-in-Place Scissor Lift (No Support Needed!) (WhopperPrinting, Printables)](https://www.printables.com/model/931664-print-in-place-scissor-lift-no-support-needed): Fully print-in-place scissor lift with a threaded screw drive, working wheels and a snap-on base; no supports or assembly *(licence: CC BY-NC-ND)*
  - [Lazy-Tongs Snapping Dragon - extending scissor grabber (Miloslav Brozek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1782336-lazy-tongs-snapping-dragon-extending-scissor-grabb): Parametric OpenSCAD lazy-tongs grabber (about 135 mm collapsed to 213 mm extended) assembled from 10 flat links and 13 printed snap-pins, no glue or supports *(licence: CC BY-NC)*
  - [Scissor mechanism (EDGeProjects, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/921109-scissor-mechanism): Printable 250 mm scissor arms joined with M12 bolts, nuts and washers, with an assembly diagram; add as many sections as needed *(licence: CC BY-NC)*
  - [SCISSOR LIFT (Cohens Customs, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/543579-scissor-lift): 3 x 3 in printed scissor lift driven by a 1/4-20 bolt, rising from 3 in to 10 in; uses four 1/4-20 socket head cap screws *(licence: CC0 (public domain))*
- **diagram_idea**: Three side views of the same two-stage scissor lift at bar angles of 10, 30 and 60 degrees, each with the sliding base end marked, a height arrow, and a small bar chart of the push needed (about 5.7x, 1.7x and 0.6x the load per stage), showing that it rises fastest but is hardest to push when nearly flat.
- **sources**: 
  - https://en.wikipedia.org/wiki/Scissor_mechanism
  - https://en.wikipedia.org/wiki/Jack_(device)
  - https://commons.wikimedia.org/wiki/File:Pantograph_Mirror.gif
  - https://commons.wikimedia.org/wiki/File:TL_2000_scissor_lift.jpg
  - https://commons.wikimedia.org/wiki/File:Hoberman_sphere.gif
  - https://507movements.com/mm_144.html
  - https://www.youtube.com/watch?v=Zm-4kJLdRcM
  - https://www.youtube.com/watch?v=UniRkbt0LOY
  - https://www.youtube.com/watch?v=cML0xKSmTPM
  - https://www.youtube.com/watch?v=zYfj9d2adqg
  - https://www.youtube.com/watch?v=opSblgV2pSE
  - https://huangyan920.github.io/Mechanical/
  - https://arxiv.org/pdf/1611.10182
  - https://www.extrica.com/article/25338
  - https://wiki.purduesigbots.com/hardware/lifts/scissor-lift
  - https://www.chiefdelphi.com/t/pros-and-cons-of-a-scissor-lift-climber/371049
  - https://www.osha.gov/etools/scaffolding/scissor-lifts
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
  - https://www.dmg-lib.org/dmglib/handler?mcdsc=1869025
  - https://sim.mathematik.uni-halle.de/modellsammlung/models/Ib-022/index.html
  - https://hackaday.com/2015/11/25/a-3d-printed-car-jack-no-seriously/
  - https://hackaday.com/2026/02/17/3d-printed-jack-mixes-two-filaments-for-great-performance/
  - https://hackaday.com/2025/10/19/corexy-3d-printer-has-a-scissor-lift-z-axis-so-it-folds-down/
  - https://www.mcmaster.com/products/scissor-lifts/
  - https://help.prusa3d.com/article/pla_2062
  - https://www.printables.com/model/931664-print-in-place-scissor-lift-no-support-needed
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, input_output

## 90 Iris mechanism

*motion conversion.* Curved blades that swing in together as a ring turns, closing a round opening evenly like a camera aperture

### What it is

- **plain_name**: A ring of thin curved blades that all swing in together when you turn an outer ring, shrinking a round hole in the middle evenly from every side, like the pupil of an eye or the aperture inside a camera lens
- **term**: Iris mechanism (iris diaphragm)
- **aliases**: 
  - iris diaphragm
  - mechanical iris
  - aperture mechanism / adjustable aperture / lens aperture (cameras)
  - diaphragm (optics)
  - iris box / print-in-place iris box (3D-printing favourite)
  - iris door / irising door (science-fiction style door or hatch)
  - iris valve / iris diaphragm valve (powder valve that closes by twisting a fabric sleeve)
  - zero-aperture iris (one that closes completely)
  - Irisblende (German)
- **family**: motion conversion
- **one_liner**: Several thin, curved blades are each pivoted on one ring and steered by a pin in a slot (or a small link or gear) on a second ring, so turning one ring swings all the blades inward or outward together and makes a central round opening smaller or larger.
- **complexity**: A small assembly that acts as one unit: a fixed base ring or housing, several thin curved blades (leaves; 5-10 in most camera lenses, 2-20 in all, per Wikipedia), each with a pivot pin and a second pin or link, an actuating ring that turns (by a lever, knob, gear or motor), and a cover ring, retaining rings or clips that keep the blades flat.
- **how_it_works**: Each blade pivots on a pin fixed to one ring, and a second pin near its outer edge runs in a slot in the other ring; turning one ring against the other makes each slot act like a cam that swings its blade about its pivot, so all the blades move together and their inner edges slide over one another towards the centre (osamutake; Kapy CAD). Each blade typically swings about 20-40 degrees from open to closed (Kapy CAD). The blade edges are curved so the opening stays close to a circle; straight-edged blades give a polygon, and more blades give a rounder hole (Wikipedia). Other versions drive each blade with a small link (Make:), gear teeth (Dynamite's 5-blade model), or slide the leaves in curved tracks on a dome, as in print-in-place iris boxes.

### Finder attributes

- **job**: 
  - change the kind of motion: turning a ring becomes an opening that shrinks or grows evenly from all sides
  - let it move (turn, slide or bend): it opens and closes a round hole, lid or door by any amount, to control light, flow or access
  - click into set positions (some designs): notched stops hold set opening sizes, e.g. the portion sizes on a spaghetti measure (iris-calculator)
- **motion**: multiple: the actuating ring rotates (a powder iris valve's handle swings through 180 degrees, Hapman), each blade swings about its own pivot by roughly 20-40 degrees (Kapy CAD), and the edge of the opening moves straight in towards the centre
- **degrees_of_freedom**: 1: every blade is tied to the one actuating ring, so the ring's angle sets the size of the whole opening
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): the ring's rotation becomes an inward, radial closing of the opening
  - self-aligning or self-centring: the blades close evenly from all sides towards the same centre, so the opening stays centred as it shrinks
  - indexing (clicks into set positions), some designs only: notched stops hold set opening sizes, like the portion marks on a spaghetti measure (iris-calculator)
  - none of the holding behaviours in simple designs: pushing on the blades can open it again; LoboCNC added a lock to his iris box because the original opened when the leaves were pushed
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): a basic iris only passes the ring's motion to the blades
  - shape (the parts interlock; form-fit), in locking designs: LoboCNC's locking iris box stays shut until the outer ring is twisted
  - spring force, in spring-loaded designs: a printed mainspring snaps the leaves of Mechatronics' iris gift box shut
- **input_output**: Efficiency: low to moderate, because the blades slide on each other and on the rings; iris mechanisms 'easily bind in the presence of too much friction' (Mechatronics). Shaft arrangement: in line: the ring turns about the same axis as the opening. Back-drivable: yes in simple designs (pushing the blades apart turns the ring back, as in LoboCNC's first iris box), unless a lock, detent, spring or self-locking drive such as a worm holds it. *(unverified parts omitted)*
- **removability**: removable: rings and blades are held by screws, retaining rings or snap-together covers and can be taken apart; print-in-place iris boxes are single prints and are not meant to come apart (LoboCNC is unsure a replacement leaf can even be fitted)
- **reuse_cycles**: many times for screwed or clipped designs; print-in-place iris boxes are never taken apart
- **tools_needed**: A screwdriver for screwed designs (Make:'s iris uses machine screws with Delrin washers between layers); none for snap-together printed kits; a hobby knife and a small screwdriver to cut away tabs and free a print-in-place iris box (LoboCNC); fine sandpaper or a small round file to ease tight printed fits (osamutake; Mechatronics)
- **seal**: loose: the overlapping blades cover the hole but leave gaps round the blade stack and rings; an iris is 'difficult to seal in any way' (Mechatronics). Industrial iris valves use a twisting fabric or rubber sleeve instead of blades, with two fabric layers for dusty fine powders (Hapman)
- **load**: light: the blades are thin and the closing force is low; Mechatronics notes iris mechanisms are generally kept to low-force jobs such as camera apertures, and that thin printed pivot pins tend to snap. Weakest against anything pushing on the blades from the front or back (out of their plane); iris valves cannot close through a standing column of material or handle heavy abrasive material (Hapman).
- **adjustable**: yes: the opening can be set to any size between fully open and its smallest (or to set sizes with detents); the range itself is fixed by the blade and slot geometry
- **play_and_precision**: Small to noticeable: each blade has play at its pivot and at its pin in the slot, and the blade stack needs just enough vertical room to slide (Kapy CAD suggests 0.25-0.40 mm for printed PLA or PETG). Too little clearance and friction makes it bind (Mechatronics; Kapy CAD). It tolerates little misalignment: the rings must stay concentric, and a wobbly outer ring caused jams in LoboCNC's first iris box until he redesigned it.
- **access_needed**: not applicable: it is a self-contained ring unit fitted into a hole in a panel, door, lid or lens
- **materials**: Hand-built: sheet brass, 1/8 in plywood or acrylic blades with Delrin (acetal) washers (Make:), laser-cut plywood with bamboo-skewer pins (Maker Design Lab). 3D printed: PLA or PETG (osamutake recommends well-dried PETG for accuracy). Kitchen tools: injection-moulded polypropylene (the spaghetti measure, iris-calculator). *(unverified parts omitted)*
- **maker_difficulty**: moderate: the blade edge curve and the positions of the pivots and slots must be right and the fits are tight, so start from a proven model or template; printed kits and laser-cut templates are easy to copy, but print-in-place iris boxes need a clean, well-tuned printer to break free

### Making it

- **processes**: 
  - 3D print (FDM): blades printed flat and snapped or pinned onto printed rings; print-in-place iris boxes
  - laser cut: plywood or acrylic blades and rings (Maker Design Lab; NTT's two-layer iris featured on Hackaday)
  - CNC: routed plywood or cut sheet-brass leaves (Make:)
  - off-the-shelf part: ready-made iris diaphragms (used in cameras, microscopes and telescopes, per Wikipedia) and industrial iris valves (Hapman)
- **print_in_place**: yes: LoboCNC's Print-In-Place Iris Box prints as one piece without supports (cut away the small tabs, then pry and twist the moving parts free); most other printed irises are printed as separate blades and rings and snapped or pinned together
- **making_tips_3d_printing**: 1) Print blades flat, with the layers in the blade's plane, never on edge, for stiffness and smoother sliding faces (Kapy CAD warns upright blades delaminate). 2) Layer height: at most 0.2 mm for print-in-place iris boxes so the internal gaps come out (LoboCNC; Mechatronics); osamutake uses 0.08-0.1 mm for smoother surfaces on his assembled model. 3) Clearances: osamutake designs 0.15 mm radial clearance on shafts; Kapy CAD suggests 0.20-0.30 mm per side for pins in holes and in slots and 0.25-0.40 mm of vertical play in the blade stack for PLA/PETG; LoboCNC enlarged the clearances of emmett's original iris box to make it easier to print. 4) Seams: choose random seam placement, because a seam lined up along an edge leaves ridges that fuse moving parts together or make rotation rough (LoboCNC; osamutake). 5) Material: well-dried PETG gives better dimensional accuracy (osamutake); PLA works but softens above about 60 C (Prusa). 6) Clean up: sand strings off shafts and file out holes narrowed by elephant's foot (osamutake); sand the bottoms of the leaves and the top of the lower ring if it binds (Mechatronics); ironing the top faces or a dry lubricant such as graphite or PTFE reduces friction (Kapy CAD). 7) Use metal pins or screws for blade pivots if it will be used a lot, because thin printed pins snap and wear (Mechatronics; Kapy CAD). 8) Freeing a print-in-place box: cut the tabs under the leaves, work a small screwdriver round the gap above the base ring to free the rotating dome, and slip a thin blade into the gaps between leaves if needed (LoboCNC; Anna Kastlunger's video). 9) Build and test step by step: check the blades swing freely on their pivots before closing the cover (osamutake; Kapy CAD suggests testing the geometry as a static model first).
- **off_the_shelf_parts**: Iris diaphragms (optical irises, lever-operated, including zero-aperture types) for microscopes, telescopes and lab optics; iris valves (iris diaphragm valves) for powders and granules, e.g. Hapman (brand); for building your own: shoulder screws or dowel pins as blade pivots, Delrin (acetal) washers between layers (Make:), retaining rings (osamutake), thin sheet brass or shim stock for blades, a small pinion or crank gear to turn the ring (Make:'s design uses a crank gear with a drawer-pull handle), and a small gear motor with limit switches for motorised versions (Hackaday chicken-coop door).
- **rules_of_thumb**: 
  - Most camera lenses use 5-10 blades (2-20 exist); curved blades give a rounder opening than straight ones (Wikipedia 'Diaphragm (optics)').
  - Each blade swings about 20-40 degrees from open to closed; common layouts are 6 blades 60 degrees apart or 8 blades 45 degrees apart (Kapy CAD).
  - Printed PLA/PETG clearances: 0.20-0.30 mm per side for pins in holes and slots, 0.25-0.40 mm vertical play for the blade stack, blade-to-blade faces just touching (Kapy CAD); osamutake's working model uses 0.15 mm radial clearance on its shafts.
  - Print-in-place iris boxes: 0.2 mm layers maximum and a random seam (LoboCNC; Mechatronics).
  - Choose the type for the space you have (Mechatronics): overlapping thin camera-style leaves keep a round opening but stack up in height, so they must be thin; sliding-triangle irises keep a polygon opening but need an outer size about twice the opening; dome-leaf iris boxes are the most compact but the opening does not stay round.
  - Spring-driven irises: a spiral mainspring's force per degree of turn is inversely proportional to its diameter, so larger boxes need thicker springs (Mechatronics).
  - Iris valves: a 180-degree handle turn twists the sleeve completely shut; they suit gravity-fed powders, granules and pellets but not high-volume continuous flow or heavy abrasive material (Hapman).

### When to use it

- **everyday_examples**: 
  - A camera lens aperture: the blades you can see closing down when you look into a lens (Wikipedia)
  - A spaghetti portion measure whose blades close round a bundle of pasta (Joseph Joseph (brand), described by iris-calculator)
  - Print-in-place iris boxes and iris gift boxes, a favourite 3D-printing show piece
  - Microscope and telescope diaphragms that set how much light passes through (Wikipedia)
- **when_to_use**: Use it when you want a round opening that shrinks evenly from all sides with a single control: controlling light (cameras, microscopes, telescopes), gently controlling the flow of powders and granules (iris valves), measuring round bundles, and eye-catching lids, hatches, doors, boxes and props where the motion itself is the point. It works best for low-force jobs.
- **when_not_to_use**: Avoid it when you need a strong clamp, a real seal, or a simple, compact lid: iris mechanisms are space-inefficient, close with little force, are hard to seal and are often needlessly complicated (Mechatronics); a hinged or sliding lid, a screw cap, a sliding shutter or an ordinary valve is simpler. For heavy, abrasive or high-volume flow, or where it must close through a standing column of material, pick another valve type (Hapman). For gripping round objects hard, a self-centring chuck or collet is better.
- **environment_limits**: Printed PLA softens above about 60 C and degrades in UV light, so keep printed irises out of hot cars and sunlight; PETG copes to about 80 C (Prusa). Print PETG from dry filament for accurate fits (osamutake). *(unverified parts omitted)*
- **common_failures**: 1) Binding from friction or too-tight fits: sand, lubricate with a dry lubricant, increase the clearance, or use metal pins and bearings (Mechatronics; osamutake; Kapy CAD). 2) Blades that collide or don't close fully because the edge curve or the pivot and slot positions are wrong: copy a proven design and test the geometry static first (Kapy CAD). 3) Seam blobs fusing a print-in-place iris solid: use a random seam (LoboCNC). 4) A wobbly outer ring jamming the leaves (LoboCNC's first version). 5) Thin printed pivot pins snapping, and broken leaves being hard to replace in a one-piece box (Mechatronics; LoboCNC). 6) Opening when the blades are pushed: add a lock or detent (LoboCNC). 7) Users twisting the wrong part and jamming the leaves (Mechatronics). 8) Blades printed on edge delaminating (Kapy CAD).
- **related**: 
  - Leaf shutter: similar thin blades in a camera, but opened and closed quickly to time an exposure; osamutake's leaf-shutter model drives them with a four-bar linkage instead of a cam groove
  - Iris valve: a twisting fabric or rubber sleeve instead of rigid blades, used to control powder flow (Hapman)
  - Four-bar (crank-rocker) linkage: DMG-Lib files an iris diaphragm under crank-rocker mechanisms, the building block behind linkage-driven irises
  - Waterhouse stops: fixed-size holes swapped in and out of a lens, the older alternative to an adjustable iris (Wikipedia)
  - Sliding shutter or gate valve: a single plate slid across an opening; simpler and can seal, but closes from one side
  - Self-centring (three-jaw) chuck and collet: also close evenly towards the centre, but grip with great force
  - Scissor (Hoberman) expanding rings: rings of scissor pairs that grow and shrink evenly

### Pictures, videos and models

- **links**: 
  - [Iris Diaphragm.gif (Wikimedia Commons, by Catsquisher)](https://commons.wikimedia.org/wiki/File:Iris_Diaphragm.gif): Animation of a 9-blade camera-lens iris diaphragm opening and closing *(licence: Public domain)*
  - [Diaphragm (optics) (Wikipedia)](https://en.wikipedia.org/wiki/Diaphragm_(optics)): What an iris diaphragm is, blade counts and shapes, history (J. H. Brown's improved iris diaphragm by 1867, Waterhouse stops), with an iris animation, lens photos and a video of a Hasselblad lens aperture *(licence: Text CC BY-SA 4.0; images per file on Commons)*
  - [Kurbelschwinge (Irisblende) / crank-rocker (iris diaphragm) (DMG-Lib mechanism description)](https://www.dmg-lib.org/dmglib/main/portal.jsp?mainNaviState=browsen.mecdesc.viewer&id=246025): Classification of an iris diaphragm as a planar crank-rocker (four-bar) mechanism, with a principle diagram and a photo of a physical model *(licence: link only)*
  - [Iris - Educational Model (osamutake, YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=Q2gan0NM-qo): A printed six-blade iris with pivots on a control ring and pins in cam slots, opening and closing while keeping a round hole *(licence: link only)*
  - [Print-In-Place Iris Box (remix) by LoboCNC ... freeing the mechanism (Anna Kastlunger, YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=oLlPiXsoVfY): How to cut the tabs and free the moving parts of a print-in-place iris box after printing *(licence: link only)*
- **make_it_yourself**: 
  - [Print-In-Place Iris Box (locking) (LoboCNC, Printables)](https://www.printables.com/model/257845-print-in-place-iris-box-locking): One-piece, support-free print-in-place iris box that stays shut until the outer ring is twisted; print at 0.2 mm layers with a random seam *(licence: CC BY-SA)*
  - [Educational Model of Iris (osamutake, Printables)](https://www.printables.com/model/1503716-educational-model-of-iris): Six-blade camera-style iris on an 80 x 80 mm base with pivots, cam slots and retaining rings, designed to show how the round opening is kept *(licence: CC BY)*
  - [Spring-Loaded Iris Gift Box (Mechatronics, Printables)](https://www.printables.com/model/344266-spring-loaded-iris-gift-box): Spring-closed iris gift box in three sizes with a parametric Fusion 360 file and detailed notes on iris types, tolerances and mainspring sizing *(licence: CC BY)*
  - [Iris mechanism based on 3 blades (Dynamite, Printables)](https://www.printables.com/model/270201-iris-mechanism-based-on-3-blades): Easy-to-print three-blade iris that opens and closes smoothly in a circle; plates, shutters and shutter pins assembled by hand *(licence: CC BY-NC-SA)* *(unverified parts omitted)*
- **diagram_idea**: A front view of a six-blade iris with the fixed base ring, the turning actuating ring and its curved slots drawn, three blades shaded, and two frames side by side (ring at 0 and at 25 degrees) showing each blade swinging about its pivot and the hole shrinking, plus a small inset comparing straight-edged blades (hexagonal hole) with curved blades (round hole).
- **sources**: 
  - https://en.wikipedia.org/wiki/Diaphragm_(optics)
  - https://commons.wikimedia.org/wiki/File:Iris_Diaphragm.gif
  - https://www.dmg-lib.org/dmglib/main/portal.jsp?mainNaviState=browsen.mecdesc.viewer&id=246025
  - https://kapycad.com/en/academy/machines/iris-aperture-diaphragm
  - https://makezine.com/projects/mechanical-iris/
  - https://makerdesignlab.com/experiments/mechanical-iris-prototype/
  - https://hackaday.com/tag/mechanical-iris/
  - https://hackaday.com/2014/03/24/mechanical-iris-will-make-you-want-a-laser-cutter-even-more/
  - https://hackaday.com/2017/07/15/irising-chicken-coop-door/
  - https://iris-calculator.com/how-does-joseph-spaghetti-iris-work/
  - https://hapman.com/technical-brief-how-does-an-iris-valve-work/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.printables.com/model/257845-print-in-place-iris-box-locking
  - https://www.printables.com/model/132293-print-in-place-iris-box-remix
  - https://www.printables.com/model/1503716-educational-model-of-iris
  - https://www.printables.com/model/344266-spring-loaded-iris-gift-box
  - https://www.printables.com/model/270201-iris-mechanism-based-on-3-blades
  - https://www.printables.com/model/278726-mechanical-iris-mechanism-with-5-blades
  - https://www.youtube.com/watch?v=Q2gan0NM-qo
  - https://www.youtube.com/watch?v=oLlPiXsoVfY
  - https://www.youtube.com/watch?v=3_1MpSFiJ7A
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, input_output, make_it_yourself, materials, power, safety_notes

## 91 Whippletree (load-equalising lever)

*motion conversion.* A floating bar pulled at its middle that shares the pull equally between its two ends, and can be stacked to share it among many, as in wiper blades and robot hands

### What it is

- **plain_name**: A loose bar that is pulled (or pushed) at its middle and fixed to something at each end, so it tips like a see-saw until both ends pull equally; more bars can hang from its ends to share one pull between four, eight or more points
- **term**: Whippletree (whiffletree; load-equalising lever, equaliser bar)
- **aliases**: 
  - whiffletree / whippletree / whippletree mechanism (Wikipedia)
  - swingletree or singletree (the bar behind one horse) and doubletree (the bar that shares a load between two horses) (Wikipedia; Hansen Wheel)
  - evener, two-horse evener, three-horse evener (farm hitching)
  - leader bar (for the front pair of a four-horse team) and equalizer (Wikipedia)
  - balance bar / bias bar (the pivoting bar between the two brake master cylinders in a race-car pedal box)
  - parking-brake (handbrake) cable equaliser (cars)
  - wiper blade frame, bridge and yokes (a conventional windscreen wiper blade is a whippletree set working in compression)
  - flotation cell / whiffletree mirror cell / 9-point or 18-point cell (telescope mirror supports)
  - whiffletree differential / seesaw differential (underactuated robot and prosthetic hands)
  - whiffletree loading mechanism (aircraft structural testing)
  - mechanical digital-to-analog converter (the IBM Selectric typewriter's whiffletree linkage)
  - equalising beam / equalising lever / compensating beam (a close relative in railway suspension, sharing weight between axles)
- **family**: motion conversion
- **other_families**: gear trains, gearboxes & transmissions, cord, strap, webbing & textile hardware
- **one_liner**: A whippletree is a free-floating bar pulled or pushed at a pivot near its middle, so it tips until the forces at its two ends balance, sharing one force equally (or in a set ratio) between two points, and several bars hung from each other share it between many points.
- **complexity**: A few parts for one bar: the bar itself, a pivot pin, hook or clevis at (or near) its middle, and a pin, hook or cable end at each end. A stacked set is a small assembly that acts as one unit: for example 3 bars share one tendon pull between 4 fingers (Frontiers hand), and an 18-point telescope mirror cell uses 6 triangles balanced on 3 see-saw bars (Fullerscopes). Optional extras: stops that limit how far each bar can tip, locks that stop one output (OpenBionics), and screws or turnbuckles to set cable lengths.
- **how_it_works**: The bar is held only at its middle pivot, so it is free to tip. It settles where the turning effects of its two end forces balance (the lever law): with the pivot in the middle both ends carry half, and with the pivot at one third of the length the short side carries two shares and the long side one, as in a three-horse evener (Rural Heritage). If one end meets more resistance or its cable is shorter, the bar simply tips until the shares are equal again, so it evens out differences in length or position; hanging a second layer of bars from each end splits each share again (1 to 2 to 4 to 8), and in a telescope mirror cell triangles on see-saws spread the weight over 18 points (Wikipedia; Fullerscopes). It keeps sharing only while the bar can still tip: once one end is stopped, for example when one finger of a robot hand touches an object, the other ends keep moving, which is what lets one motor close several fingers round an odd-shaped object (Frontiers).

### Finder attributes

- **job**: 
  - change speed or turning force: it splits one pull or push into equal (or deliberately unequal) shares at two or more points
  - let it move (turn, slide or bend): each output can keep moving after another has stopped, so linked fingers, brake shoes or support pads each settle where they need to
  - change the kind of motion: several inputs can be added into one output movement, as in the IBM Selectric typewriter and linkage-based mechanical computers (Wikipedia)
  - tighten and hold tension: in a parking brake it shares one cable's pull equally between the two rear brakes (MGA Guru)
- **motion**: rotate+slide: each bar tips (rotates) about its middle pivot through a limited angle while the pivot itself moves along the line of the pull; the travel is limited by the bar length and any stops (21 mm of tendon travel in the Frontiers hand, falling to 10 mm when three of the four fingers are blocked)
- **degrees_of_freedom**: 1 extra freedom per bar: besides following the input, each bar can tip, so its two ends can move by different amounts while their (weighted) average follows the input. A tree of 3 bars feeding 4 outputs therefore has 3 of these extra freedoms, which is why one motor can close four fingers that each stop at a different moment (Frontiers)
- **special_behaviour**: 
  - self-aligning or self-centring: the bar tips by itself until the forces at its ends balance, so it automatically evens out unequal cable lengths, horse positions or surface curvature (load equalising)
  - motion conversion (e.g. rotary to linear): used the other way round, it adds several input movements into one output movement (mechanical adding, and the IBM Selectric's mechanical digital-to-analog converter) (Wikipedia; Hackaday)
  - none of the holding behaviours: it floats, so it does not lock or hold a position by itself unless locks are added (the OpenBionics hand adds a lock button for each finger)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes a pull or push on and shares it between its ends
  - shape (the parts interlock; form-fit): its pins, hooks and clevises interlock with the links, cables or traces
- **input_output**: One pull (or push) -> two pulls (or pushes) in roughly the same direction, or many when bars are stacked. Force split: each end carries the total force multiplied by the distance from the pivot to the OTHER end, divided by the bar length, so a centred pivot gives 50/50 and a pivot at one third gives 2:1 (Rural Heritage). Movement: for a centred bar the input moves by the average of the two end movements, so if one end is stopped the other end travels twice as far as the input. Shaft arrangement: not shafts; the input and outputs are forces roughly parallel to the line of pull. Back-drivable: yes; it is a plain lever with nothing to lock it, so pulling on an output moves the input and the other outputs. *(unverified parts omitted)*
- **power**: passive (no power needed); it simply passes on whatever pull or push it is given (from a horse, a hand lever, a brake pedal, a spring or a motor-driven tendon)
- **removability**: removable: each bar is hung on pins, hooks or clevis pins and can be unhooked; brake balance bars and equalisers bolt in
- **reuse_cycles**: effectively unlimited: nothing is deformed when it is unhooked and re-hung; the limit is wear of the pivot holes and pins
- **tools_needed**: None for hook-and-pin versions (farm eveners); spanners or hex keys for bolted pivots, locknuts on a threaded brake balance bar (Street Muscle / Tilton), and turnbuckles or screws to set cable lengths (ASEE test rig used a turnbuckle; the Frontiers hand needs precise tendon tension calibration)
- **seal**: none: it is an open bar and pins; nothing about it seals
- **load**: Light to heavy depending on size: small plastic bars in robot hands (the Frontiers whiffletree failed at 42.8 N per output), steel balance bars in brake pedal boxes, hardwood eveners 42-48 in long for horses (Hansen Wheel), and multi-level whiffletrees that load whole aircraft wings in structural tests (ASEE; SwRI). Weak against sideways pushes and twisting, and it cannot carry any load once an end has run out of travel. *(unverified parts omitted)*
- **adjustable**: yes: the split is set by where the pivot sits. A threaded race-car balance bar moves the pivot by turning it (about 4% change in front/rear brake bias per full turn, up to about 30% in total; Tilton via Street Muscle); farm eveners use different pivot or hitch holes (three-horse evener pivot at one third; Burton, Rural Heritage); the length of each cable or trace is set with screws, turnbuckles or chain links so the bars sit level before they start sharing
- **play_and_precision**: It deliberately does not locate: the bar floats, so it has no fixed position. Play in the pins does not spoil the sharing, but friction does: a binding pivot or a cable that is trapped instead of floating stops it equalising (MGA Guru). The share stays close to the lever ratio only while the bar can still tip; once a bar hits a stop or runs out of travel it stops sharing (Frontiers). It tolerates large misalignment between its outputs by design, but only up to its travel (21 mm total, or 10 mm with three outputs blocked, in the Frontiers hand).
- **access_needed**: not applicable: it hangs in the load path and is pinned at three points, reached wherever the mechanism opens
- **materials**: Hardwood with iron or steel fittings for horse eveners and singletrees (ash doubletree and hickory singletrees, Hansen Wheel; hickory or straight-grained oak, Burton). Steel for brake balance bars (with a spherical bearing at the pivot, Tilton), parking-brake equalisers and wiper-blade frames. Steel pipe cross-members and nylon cord in a university test rig (ASEE). Laser-cut acrylic (Plexiglas) or 3D-printed ABS plates for the OpenBionics hand. Telescope cells use metal triangles and bars with slippery plastic pads under the mirror (Fullerscopes).
- **maker_difficulty**: easy: a single bar with three holes is simple to cut, print or drill; the tricky parts are giving each bar enough free travel, keeping the pivots free of friction, and setting cable lengths so all outputs start together

### Making it

- **processes**: 
  - 3D print (FDM): small bars and stacked trees for grippers, prosthetic hands and models
  - laser cut: flat acrylic or plywood bars (the OpenBionics hand can be laser cut or 3D printed)
  - woodwork: traditional eveners and singletrees in hickory, oak or ash
  - sheet metal: pressed steel wiper-blade frames and equaliser brackets
  - CNC: machined steel or aluminium balance bars and structural-test whiffletrees
  - off-the-shelf part: parking-brake equalisers, brake balance bars, framed wiper blades, horse eveners
- **print_in_place**: no: the bars print flat in minutes but are assembled on separate pins (bolts, dowel pins or a length of filament); no print-in-place whippletree model was found
- **making_tips_3d_printing**: 1) Print each bar lying flat with its pivot holes vertical, so the bending load in the plane of the bar runs along the printed perimeters rather than across layers. 2) Holes print undersized: oversize them in the model or ream them out (EngineerDog suggests about 0.005 in over size), and use metal pins or a short brass tube as a bushing so the bar tips freely; any friction at the pivot stops it sharing (MGA Guru's advice for car equalisers: the arm should swing freely with finger force). 3) Put the three holes on one straight line and use the lever rule for their spacing: equal gaps for 50/50, a pivot one third along for a 2:1 split (Rural Heritage). 4) Give every bar enough room to tip: allow at least the largest difference in travel you expect between outputs (the Frontiers hand allows 21 mm), and stagger or shorten the lower bars in a stack so they cannot collide. 5) For tendon-driven grippers, add a screw or turnbuckle to each tendon so you can set the lengths; the Frontiers team notes that precise tendon tension calibration is needed. 6) If you want to hold a grasp or stop one finger, add a lock per output (OpenBionics uses locking buttons, or a servo-driven cam). *(unverified parts omitted)*
- **off_the_shelf_parts**: Clevis pins with R-clips or hitch pins, shoulder bolts and bronze bushings for pivots; rod ends and spherical plain bearings (a race-car brake balance bar pivots on a spherical bearing, Tilton); motorsport brake balance bars, pedal boxes and remote bias adjusters (e.g. Tilton, OBP (brands)); car parking-brake (handbrake) cable equalisers; framed (conventional) windscreen wiper blades; singletrees, doubletrees and three-horse eveners from harness and wagon suppliers (e.g. Hansen Wheel (brand)); turnbuckles and wire-rope thimbles for setting cable lengths; telescope flotation mirror cells (e.g. RC Optical Systems' 9- and 18-point cells (brand)).
- **rules_of_thumb**: 
  - Equal split: put the pivot exactly in the middle. For a 2:1 split, put the pivot one third of the way along from the end that must carry two shares: in a three-horse evener the single horse's end is twice as far from the hitch point as the two-horse end (Rural Heritage, 'Hitching Three: Adjustments'); the king-pin hole is bored 'at one-third the distance from the end' (Burton, Shop Projects Based on Community Problems, 'Evener and Singletree').
  - In general, each end's share of the force = total force x (distance from the pivot to the other end) / (distance between the two ends); the lever balances when both turning effects are equal (Rural Heritage's 2:1 evener is the case with a 2:1 distance ratio).
  - Stacking: each two-ended bar doubles the number of shares; 3 bars share one tendon between 4 fingers (Frontiers, Gao et al. 2021), and 6 triangles on 3 see-saw bars give an 18-point mirror cell (Fullerscopes).
  - To imitate a spread-out (distributed) load with a whippletree, divide the load into parts and put each pivot at the centroid (resultant) of the loads it carries; the more levels, the closer the imitation (ASEE Advances in Engineering Education, 2009).
  - Allow enough travel: the Frontiers hand's whiffletree gave 21 mm of tendon travel with all fingers free but only 10 mm with three fingers blocked, limited by the length of the upper bars (Gao et al. 2021).
  - Race-car brake balance bar: each full turn of the threaded bar changes the brake bias by roughly 4%, the maximum adjustment is about 30% (beyond that change master-cylinder sizes), and the bar should sit parallel to the firewall when the pedal is loaded (Tilton Engineering via Street Muscle).
  - More support points spread the load better: on RC Optical Systems' 16-inch mirror the calculated peak-to-valley error fell from 0.0179 wave with a 9-point cell to 0.0071 wave with an 18-point cell (RCOS).

### When to use it

- **everyday_examples**: 
  - A conventional (framed) windscreen wiper blade: its bridge and yokes are a series of whippletrees that spread the arm's spring force along the rubber (Wikipedia)
  - A car's parking-brake (handbrake) cable equaliser, which shares one cable's pull between the two rear brakes (MGA Guru)
  - The evener and singletrees behind a team of horses pulling a plough or wagon (Wikipedia)
  - Alexander Calder's hanging mobiles, which are whippletrees in tension (Wikipedia)
- **when_to_use**: Use it when one force has to be shared evenly (or in a fixed ratio) between two or more points whose lengths or positions are not exactly equal: two cables that must pull equally (parking brake), one motor closing several fingers that touch an object at different moments (underactuated grippers and prosthetic hands), pressing a strip evenly onto a curved surface (wiper blade), supporting a thin mirror or plate on many points without bending it (telescope cells), loading a test structure as if the load were spread out (wing tests), or letting several animals or people pull one load fairly. It is simple, light, cheap and works in tension or compression; with an adjustable pivot it also sets a deliberate split, as in a brake balance bar.
- **when_not_to_use**: Avoid it when the outputs must move together exactly: use a rigid link, a linkage or gears. Avoid it when the outputs may need to move very different distances or keep turning: its travel is limited by the bar length, so use a rope-over-pulley differential or a gear differential instead (Frontiers compares these). It floats, so it will not hold a position or a grasp by itself: add locks or use a non-back-drivable drive. It needs free space to tip and translate (Frontiers), so in very tight spaces a pulley or gear differential may fit better. For pressing a wiper evenly, the modern alternative is a pre-curved spring-steel beam blade with no frame (Stoner Car Care).
- **environment_limits**: Framed wiper blades collect ice and snow in their open frame, which spoils the contact (Stoner Car Care). Rusty or dirty pivots stop it equalising: MGA Guru's equaliser arm needs its bronze bushing to move without binding and its cable jacket to float freely. Vibration can loosen the locknuts of a threaded brake balance bar and shift the bias (Tilton via Street Muscle). Printed PLA bars soften above about 60 C and degrade in UV light, so keep them out of hot cars and sunlight; PETG copes to about 80 C (Prusa). Wooden eveners are finished with linseed oil against weather (Burton; Hansen Wheel).
- **safety_notes**: Brake balance bars are safety-critical: a badly set bias can lock the wheels and spin the car under heavy braking (Tilton via Street Muscle). Swinging bars and taut cables create pinch points; heavy structural-test whiffletrees can fall if a link fails. *(unverified parts omitted)*
- **common_failures**: 1) A bar runs out of travel or hits its stop, so it stops sharing and one output takes all the load: give it more room or shorter output differences (Frontiers). 2) A binding pivot, bent pin or trapped cable stops it equalising: keep pivots free and let cable housings float (MGA Guru). 3) Unequal starting lengths mean one side must take up its slack before the other starts pulling: set lengths so the bars sit level (Frontiers' tendon calibration; parking-brake adjustment). 4) Pressure concentrated at the few claws of a framed wiper blade causes uneven wear and streaks (Stoner Car Care). 5) A threaded bias bar creeps out of adjustment when its locknuts are not tightened (Tilton). *(unverified parts omitted)*
- **related**: 
  - Gear differential (bevel or spur): shares torque between two outputs like a whippletree but allows unlimited continuous rotation, at the cost of more parts
  - Rope-over-pulley (tendon) differential: a cable running round a floating pulley shares tension equally with more travel than a bar, but with rope friction (Frontiers compares both)
  - Pulley system (block and tackle): also uses floating parts, but to multiply force rather than to share it
  - Equalising beam (railway suspension): a pivoted beam that shares a vehicle's weight between two axles (Wikipedia)
  - Bell crank: a pivoted lever that turns a pull round a corner rather than splitting it
  - Beam wiper blade: a pre-curved spring-steel strip that replaces the whippletree frame of a conventional wiper blade (Stoner Car Care)
  - Fluidic differential: hydraulic or pneumatic sharing between fingers, without bars but with the risk of leaks (Frontiers)

### Pictures, videos and models

- **links**: 
  - [Whippletree (mechanism) (Wikipedia)](https://en.wikipedia.org/wiki/Whippletree_(mechanism)): Definition, uses in tension and compression, photos of leader bars and a three-horse hitch, a triple-whippletree diagram and a wiper blade *(licence: Text CC BY-SA 4.0; images per file on Commons)*
  - [Triple whippletree set.svg (Wikimedia Commons; Richard New Forest, SVG by McSush)](https://commons.wikimedia.org/wiki/File:Triple_whippletree_set.svg): Sketch of the set of whippletrees that shares a load between three draught animals *(licence: CC BY-SA 3.0, Free Art License or GFDL 1.2+)*
  - [Heckscheibenwischer kl.jpg (Wikimedia Commons; Igelball)](https://commons.wikimedia.org/wiki/File:Heckscheibenwischer_kl.jpg): Photo of a car rear-window wiper whose blade frame is a whippletree set *(licence: GFDL 1.2+ or CC BY-SA 3.0)*
  - [The Whiffletree: A mechanical digital-to-analog converter (engineerguy / Bill Hammack, YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=G_SC7oWL78A): Video explaining how whiffletree linkages add inputs, as in the IBM Selectric typewriter *(licence: link only)*
  - [On Differential Mechanisms for Underactuated, Lightweight, Adaptive Prosthetic Hands (Gao et al., Frontiers in Neurorobotics, 2021)](https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2021.702031/full): Figures of a selectively lockable whiffletree differential for four fingers (Fig. 7) and its automated version, compared with pulley, gear and fluidic differentials *(licence: CC BY)*
- **make_it_yourself**: 
  - [OpenBionics Prosthetic-Hands (GitHub)](https://github.com/OpenBionics/Prosthetic-Hands): Open-source prosthetic hand whose whiffletree-based, selectively lockable differential lets one motor drive four fingers; parametric CAD for laser cutting or 3D printing, assembly guide *(licence: CC BY-SA 4.0 (stated on openbionics.org))*
  - [Evener and Singletree (Burton, Shop Projects Based on Community Problems, via Chest of Books)](https://chestofbooks.com/home-improvement/woodworking/Community-Shop-Projects/Evener-And-Singletree.html): Historic woodworking project: hickory or oak singletree (2 x 2 3/4 x 35 in) and evener (2 1/8 x 4 3/4 x 48 in), with the three-horse evener's pivot hole at one third *(licence: link only (old book; online copy's terms not stated))*
  - [Two Horses Whiffletree drawbar shaft Deichsel (Magig_I3Prusa, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/486617-two-horses-whiffletree-drawbar-shaft-deichsel): Small toy-scale drawbar with whiffletree for hitching two horses to a play wagon *(licence: CC BY-NC)*
  - [Explore Scientific 16" Dobson Mirror Cell Triangle (EleusisT, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/921006-explore-scientific-16-dobson-mirror-cell-triangle): Printed PETG replacement triangle for a telescope flotation (whiffletree) mirror cell, with three pads that stay in place *(licence: CC BY-NC-SA 4.0)*
- **diagram_idea**: Three panels: (1) a single bar pulled at its centre with half the force at each end; (2) the pivot moved to one third, giving a 2:1 split; (3) a three-bar tree feeding four fingers, with one finger stopped on an object and the bars tipping so the other three keep closing.
- **sources**: 
  - https://en.wikipedia.org/wiki/Whippletree_(mechanism)
  - https://en.wikipedia.org/wiki/Windscreen_wiper
  - https://en.wikipedia.org/wiki/Equalising_beam
  - https://commons.wikimedia.org/wiki/File:Triple_whippletree_set.svg
  - https://commons.wikimedia.org/wiki/File:Heckscheibenwischer_kl.jpg
  - https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2021.702031/full
  - https://hackaday.com/tag/whiffletree/
  - https://hackaday.com/2010/11/28/wiffletree-a-mechanical-digital-to-analog-converter/
  - https://hackaday.com/2015/09/20/hackaday-prize-semifinalist-openbionics-affordable-prosthetic-hands/
  - https://raw.githubusercontent.com/OpenBionics/Prosthetic-Hands/master/README.md
  - https://openbionics.org/devices/prosthetic-hands
  - https://ruralheritage.com/hitching-three-adjustments/
  - https://chestofbooks.com/home-improvement/woodworking/Community-Shop-Projects/Evener-And-Singletree.html
  - https://www.hansenwheel.com/two-horse-evener-with-singletrees/
  - https://mgaguru.com/mgtech/brakes/bt103a.htm
  - https://www.streetmusclemag.com/news/adjusting-brake-bias-using-balance-bar-tilton-engineering/
  - https://advances.asee.org/wp-content/uploads/vol01/issue04/papers/aee-vol01-issue04-p04.pdf
  - https://www.swri.org/sites/default/files/static-and-fatigue-testing-of-full-scale-aircraft-structures.pdf
  - https://fullerscopes.blogspot.com/2015/06/plop.html
  - https://rcopticalsystems.com/telescopes/mirror_cell.html
  - https://makezine.com/projects/build-a-backyard-dobsonian-telescope/
  - https://stonercarcare.com/blogs/product-tips/conventional-vs-beam-wipers-which-type-is-right-for-your-car
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.youtube.com/watch?v=G_SC7oWL78A
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, input_output, load, making_tips_3d_printing, safety_notes

## 92 Twisted-string actuator

*motion conversion.* A motor twists two or more strings together so they shorten and pull with great force, giving a cheap, light, very high-ratio linear pull

### What it is

- **plain_name**: Two or more strings joined to a motor at one end and a load at the other: when the motor spins, the strings twist round each other, get shorter and pull the load in very hard, like twisting a rope with a stick to tighten it
- **term**: Twisted-string actuator (TSA; twisted string actuation system)
- **aliases**: 
  - twisted string actuation system / twisted string transmission (research papers and patents)
  - twist drive (Godler and Sonoda's robot hand)
  - strand-muscle actuator (Suzuki's early robots)
  - string-twisting actuator
  - Spanish windlass (the hand-powered version: a stick twisting a loop of rope)
  - overtwisted / two-phase twisted string actuator (runs past the normal twist into coiling for more stroke)
  - dual-mode or two-speed twisted string actuator (can switch between fast pulling and strong twisting)
  - Verdrillantrieb (German)
- **family**: motion conversion
- **other_families**: gear trains, gearboxes & transmissions, tensioning, reels & take-up, cord, strap, webbing & textile hardware
- **one_liner**: A twisted-string actuator turns a motor's rotation into a strong straight-line pull by twisting two or more strings together, so they shorten like a wrung-out cloth and act as a very high, self-changing gear ratio in almost no space.
- **complexity**: A few parts: a small motor (usually a gearmotor with an encoder), a hub on the motor shaft with holes where the strings are tied, two or more strings (often braided UHMWPE such as Dyneema or Spectra, or Vectran), an attachment at the load end, often a separator plate that marks where the twisting zone ends, a thrust bearing so the pull does not go into the motor's own bearings, and a return spring or a second actuator to pull the other way.
- **how_it_works**: The strings start side by side, joined to the motor hub at one end and the load at the other. Each turn of the motor wraps them round each other into a helix, and because the string length stays the same, the straight distance between the ends gets shorter: the twisted length is p = sqrt(L^2 - theta^2 x r^2), where L is the untwisted length, theta the twist angle in radians and r the string (bundle) radius (German Wikipedia 'Verdrillantrieb'; Crosby et al. 2026). At the start the strings barely shorten per turn, so a tiny motor torque gives a huge pull (a pager motor lifted 7 kg, Hizook), and as the twist builds each turn pulls in more but with less force, so the ratio changes as it goes. It can only pull, so a spring or a second actuator has to pull the load back, and because the relationship is non-linear it needs calibration or a position sensor for accurate movement (Hizook).

### Finder attributes

- **job**: 
  - change the kind of motion: turns motor rotation into a straight-line pull
  - change speed or turning force: a very high, variable reduction, so a small fast motor gives a slow, strong pull
  - tighten and hold tension: tensions tendons, cables and straps (as in tensegrity robots, exoskeletons and tourniquet-style windlasses)
- **motion**: rotate+slide: the motor end rotates many turns (tens of turns in the experiments) while the load end moves in a straight line; the pull usually shortens the strings by about 10-35% of their length, and up to about 70-81% with deliberate overtwisting (Tavakoli et al.; Konda et al.)
- **degrees_of_freedom**: 1: the load's position is tied to the motor's angle through the string twist; the strings are flexible sideways, so the load end also needs its own guide or tendon path
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): motor rotation becomes a linear pull, with a transmission ratio that starts very high and falls as the strings twist
  - tensioning (takes up slack and holds): it winds tension into a cable or tendon and holds it while the motor holds its angle *(unverified parts omitted)*
- **holding_principle**: not a holding joint (it moves or passes on motion): it passes motor torque on as a pull, powered hold: the pull is kept only while the motor (or its gearbox) holds the twist
- **input_output**: Continuous rotation (many turns) -> straight-line pull (tension only; it cannot push). Contraction x = L - sqrt(L^2 - theta^2 r^2), so the travel per turn grows as the twist builds and the pull per unit of motor torque shrinks; from the force relation F = torque / (r x tan(alpha)) with tan(alpha) = theta x r / p (German Wikipedia), the ratio is very high near zero twist. Typical stroke: under about 25% of the string length in most published designs, 81% with multi-string overtwisting (Tavakoli et al. 2016). Efficiency: about 79% for the strings alone in a high-power ankle exoskeleton (Tan and Collins 2025); German Wikipedia quotes 90%. Shaft arrangement: in line; the strings run straight out along the motor axis (a TSA does not need the motor mounted at right angles to the cable, unlike a spool; Park and SunSpiral, NASA). *(unverified parts omitted)*
- **power**: powered (needs a motor to twist the strings; the same principle also works by hand, as in the Spanish windlass). *(unverified parts omitted)*
- **removability**: removable: the strings are tied or looped to the motor hub and load and can be untied and replaced; they are a wear part
- **reuse_cycles**: many times: the hardware lasts, but the strings wear out; string life ranges from hundreds of cycles under heavy load in thin line (Tavakoli et al.) to 18,000-190,000 cycles for 1-2 mm Dyneema ropes at 15-25 kg (Nguyen et al. 2025)
- **seal**: none: open strings and an open motor hub; nothing about it seals
- **load**: Light to heavy depending on string and motor: a pager motor lifted 7 kg (Hizook); a 0.35 mm braided fishing line rated 321 N lifted 2 kg with a small 100:1 gearmotor (Tavakoli et al.); a 3 mm Vectran rope (9.5 kN breaking strength) drove an ankle exoskeleton at 43 N.m peak ankle torque and 700 W peak power (Tan and Collins). Strong in pull only; zero strength in push; the strings bend and swing sideways, so the load needs its own guide; the pull along the motor axis must be carried by a thrust bearing, not the motor shaft (Tan and Collins).
- **adjustable**: yes: the pull and position are set by the motor angle; the ratio and stroke are chosen by string radius, number of strings and twisting-zone length (thicker bundles or more strands shorten more per turn, Hackaday / Guzek et al.; Tavakoli et al.); a small pre-twist sets where on the curve it starts; research versions add a clutch to switch between fast direct pulling and strong twisting (dual-mode TSA) or move the string attachment points to vary the ratio continuously
- **play_and_precision**: No gear teeth, so no backlash, but the strings stretch (it is compliant, not rigid; Tavakoli et al.) and the twist-to-length relation is highly non-linear, so precise movement needs careful calibration or a position sensor (Hizook). Published models predicted displacement to within about 2.7-5.9 mm RMS over 60-100 mm of travel (Tavakoli et al.). It tolerates some angle between the strings and the motor axis if bearings take the sideways force (Tan and Collins), but the twisting zone must be kept straight and free of sharp edges.
- **access_needed**: not applicable: it is built into a machine with the motor at one end and the load at the other
- **materials**: Strings: braided UHMWPE (Dyneema, Spectra (brands)) is the most common and has the best tested fatigue life at moderate power (Liros Dyneema SK78 ropes, Nguyen et al.); Vectran (liquid-crystal polymer) survived best at very high power, where Dyneema overheated and split and Kevlar (aramid) frayed (Tan and Collins); braided fishing line (Tavakoli et al.), polyester bowstring (Poon et al.), nylon, aramid and polyethylene strings (Zheng et al.). Hardware: metal or printed motor hubs, separators and mounts, steel bearings.
- **maker_difficulty**: moderate: a demo is easy (a gearmotor, braided fishing line and a printed hub), but a reliable actuator needs a thrust bearing, rounded string paths, a return spring or second actuator, and an encoder with calibration because the pull is non-linear

### Making it

- **processes**: 
  - off-the-shelf part: small gearmotors with encoders, braided Dyneema or Vectran line, ball and thrust bearings, return springs
  - 3D print (FDM): motor mounts, string hubs, separators, guides and housings
  - CNC: machined hubs and housings for high-force designs (e.g. the Tan and Collins ankle exoskeleton used a separate output shaft on radial and thrust bearings) *(unverified parts omitted)*
- **print_in_place**: no: the printed hub, separator and mounts are separate parts, and the motor, strings and bearings are added
- **making_tips_3d_printing**: 1) Never clamp strings under a grub screw or run them over a sharp printed edge: Crosby et al. traced string failures to pinch and bite points and fixed them by rounding every edge the string touches and using loop ties instead of grub screws. 2) Take the pull off the motor: print a hub on its own output shaft carried by a radial bearing and a thrust bearing, so the large axial pull (and any sideways force when the strings are not in line) does not reach the motor shaft (Tan and Collins). 3) Use an even number of strings arranged symmetrically round the hub so their sideways forces cancel on the motor shaft (Tavakoli et al.). 4) A printed separator (a plate with holes a few millimetres apart; 5 mm in Tavakoli et al.) limits where twisting happens, so everything beyond it moves straight; round and smooth its holes, because knots from overtwisting can jam in them. 5) Keep the stroke to about 10-20% of the string length unless you deliberately design for overtwisting: overtwist began at 10-20% contraction in Tavakoli et al.'s tests, and beyond about 55 turns their strings formed knots that would not untwist. 6) Add a return: a spring or a second, opposing actuator, because strings can only pull (Hizook). 7) Fit an encoder or measure the load position and calibrate, since each turn gives a different amount of pull-in. 8) Grease the braid to cut friction heat (Tan and Collins used Krytox) and pick Dyneema or Vectran over nylon monofilament, which suffered torsion fatigue (Crosby et al.). 9) Printed parts near the motor get warm: PETG copes to about 80 C and PLA softens above about 60 C (Prusa).
- **off_the_shelf_parts**: Micro metal gearmotors with encoders (e.g. Pololu 100:1, as in Tavakoli et al.; Maxon DCX16L (brand) in Zheng et al.); braided UHMWPE line and rope (Dyneema, Spectra (brands), e.g. LIROS D-Pro SK78 (brand)); Vectran rope (e.g. single-braid V-12 Vectran (brand), Tan and Collins); braided fishing line (e.g. Vega 'Potenza Braided Line' (brand), Tavakoli et al.); radial ball bearings and thrust bearings; extension springs for the return stroke; load cells and encoders for force and position control; PTFE or perfluoropolyether grease (e.g. Krytox GPL 205 (brand)).
- **rules_of_thumb**: 
  - Contraction: twisted length p = sqrt(L^2 - theta^2 x r^2), with L the untwisted length, theta the twist in radians and r the string (bundle) radius; contraction = L - p (German Wikipedia 'Verdrillantrieb'; Crosby et al., Frontiers in Robotics and AI 2026; Poon et al. 2024 use the same form).
  - Force: load = motor torque / (r x tan(alpha)), where tan(alpha) = theta x r / p; so near zero twist a tiny torque gives a very large pull, and the pull per unit torque falls as the twist grows (German Wikipedia 'Verdrillantrieb').
  - More strands or thicker strands shorten the actuator in fewer turns; fewer or thinner strands need more turns for the same stroke (Hackaday 2015, reporting Guzek et al., ASME J. Mechanisms and Robotics 2012).
  - Normal twisting gives up to roughly a quarter to a third of the string length as stroke: earlier designs reached 12-24% (Tavakoli et al. 2016, Table IV), overtwisting began at 10-20% contraction, and regular twisting reached about 30-35% in Konda et al. (2022); deliberate overtwisting and coiling raised this to about 60-70% (Konda et al.) and 81% with six strings (Tavakoli et al.).
  - Use an even number of strings so the sideways forces on the motor shaft cancel (Tavakoli et al. 2016).
  - String life is set mainly by load: two 0.35 mm braided strings lasted 1,512 cycles at 2 kgf but only 130 cycles at 5 kgf (20 turns per cycle; Tavakoli et al.); in Dyneema SK78 ropes, heavier loads shorten life and larger diameters and more strands lengthen it (18,000-190,000 cycles at 15-25 kg, 1-2 mm; Nguyen et al., Sensors 2025).
  - Support the output on a radial bearing plus a thrust bearing so neither the axial pull nor the sideways force from misaligned strings reaches the motor shaft (Tan and Collins, Wearable Technologies 2025).
  - At very high power, choose Vectran and grease it: Kevlar frayed in under 2 minutes and Dyneema overheated and split in under 3 minutes, while Vectran lasted longest (Tan and Collins 2025).

### When to use it

- **everyday_examples**: 
  - Twisting a stick in a loop of rope to tighten it (a Spanish windlass), as in improvised tourniquets and when pulling vehicles or cattle out of mud (Wikipedia 'Windlass')
  - The button-on-a-string buzzer toy (button whirligig), which runs the idea backwards: pulling the twisted strings spins the button (Wikipedia 'Whirligig')
  - Tendon-driven robot hands and wearable exoskeletons in research labs, such as the DEXMART hand (Tavakoli et al.; German Wikipedia)
- **when_to_use**: Use it when you need a strong, compact, light straight-line pull from a small fast motor, especially for tendons and cables: robot fingers and grippers, prosthetic hands, exoskeletons and haptic devices, tensegrity robots, or pulling a cable along the motor's own axis in a slim limb. It is cheap (a motor and some string), quiet, naturally springy (compliant), which makes it safer around people, and it gives a huge reduction without a gearbox (Tavakoli et al.; Park and SunSpiral).
- **when_not_to_use**: Avoid it when you need to push, a long stroke compared with the actuator's length, fast motion, or millions of cycles: strings wear out after thousands rather than millions of cycles (Hizook), the stroke is usually under a third of the string length, and it is slow near the start of the twist. For precise, rigid positioning use a lead screw or rack and pinion; for long cable travel use a spool (winch) or capstan drive; for a pull that must hold with the power off, add a brake or use a self-locking lead screw or worm drive.
- **environment_limits**: Friction between the twisting strings makes heat: at high power Dyneema exceeded its thermal rating and split within 3 minutes, and grease was needed to spread the heat (Tan and Collins). Life drops sharply with load (Tavakoli et al.; Nguyen et al.). Printed parts near the motor: PLA softens above about 60 C, PETG copes to about 80 C (Prusa). *(unverified parts omitted)*
- **safety_notes**: Twisting strings can catch fingers, hair or clothing like other rotating parts (OSHA machine guarding: rotating shafts can grip hair and clothing). *(unverified parts omitted)*
- **common_failures**: 1) Strings fray or snap at sharp edges, knots or grub screws: round every edge and use loop ties (Crosby et al.). 2) Strings overheat and fuse or split at high power: grease them and choose Vectran (Tan and Collins). 3) Overtwisting forms knots that jam in the separator and will not untwist: limit the number of turns (Tavakoli et al.). 4) The motor's bearings wear from the axial pull and side load: add a thrust bearing (Tan and Collins). 5) Position drifts from the model because the strings stretch and the bundle radius changes: re-calibrate or use closed-loop control (Tavakoli et al.; Hizook). *(unverified parts omitted)*
- **related**: 
  - Spool or winch (cable drum): unlimited cable travel with a constant ratio, but needs a gearbox and a motor at right angles, and slack cable can fall off the spool (Park and SunSpiral, NASA)
  - Capstan cable drive: a zero-backlash cable reduction for rotating joints, rather than a linear pull
  - Lead screw and nut: rigid, can push and pull, and can self-lock, but heavier and less compliant
  - Twisted and coiled polymer (fishing-line) artificial muscle: heat, not a motor, makes a pre-coiled nylon line contract (Hizook; Hackaday.io project)
  - Spanish windlass: the hand-powered ancestor, a stick twisting a rope loop (Wikipedia 'Windlass')
  - Bowden cable: carries the TSA's pull round corners to where it is needed
  - Twisted-winching hybrid: winds the string onto a drum after twisting for more stroke (Poon et al. 2024)

### Pictures, videos and models

- **links**: 
  - [DEXMARTAntrieb.svg (Wikimedia Commons; Benjamin Ehm)](https://commons.wikimedia.org/wiki/File:DEXMARTAntrieb.svg): Diagram of the basic twisted-string actuator: motor, twisting strings and load *(licence: CC BY-SA 4.0)*
  - [Schnurhelix.svg (Wikimedia Commons; Nutzer1 / Benjamin Ehm, Ras67)](https://commons.wikimedia.org/wiki/File:Schnurhelix.svg): A twisted string unrolled into a triangle, showing how twist angle, string radius and length give the shortened length (German labels) *(licence: CC BY-SA 4.0)*
  - [Twisted String Actuators: Surprisingly Simple, Cheap, and High Gear Ratio (Hizook, 2015)](http://www.hizook.com/blog/2015/01/13/twisted-string-actuators-surprisingly-simple-cheap-and-high-gear-ratio): Photos and video links of research TSAs, including the DEXMART hand and a pager motor lifting 7 kg *(licence: link only)*
  - [Robot Gripper and Robot hand using 2-Speed Twisted String Actuation (TSA) (RIM Lab., YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=RxmGPmoC-yg): Video of grippers and a robot hand driven by two-speed twisted-string actuators *(licence: link only)*
  - [Twisted String Actuator-powered Biomimetic Robotic Assistive Glove - RoboSoft 2020 (The Faboratory at Yale University, YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=EutbfHvetRI): Video of a wearable glove whose tendons are pulled by twisted-string actuators *(licence: link only)*
- **make_it_yourself**: 
  - [Twisted-String-Actuator (skalouche, GitHub)](https://github.com/skalouche/Twisted-String-Actuator): Control algorithms for an Arduino-based twisted-string actuator *(licence: MIT)*
  - [A Compact Two-Phase Twisted String Actuation System: Modeling and Validation (Tavakoli, Batista and Neto, arXiv / Mechanism and Machine Theory 2016)](https://arxiv.org/abs/1610.01117): Build reference: a 100:1 micro gearmotor, 0.35 mm braided line, a separator with holes 5 mm apart, measured stroke per turn for 2-8 strings, the contraction model and string life tests *(licence: arXiv non-exclusive distribution licence (read and link))*
  - [TSA-project (Haimlem, GitHub)](https://github.com/Haimlem/TSA-project): Python code and a GUI that estimate twisted-string life from load, string diameter and number of strings (from the Sensors 2025 lifespan paper) *(licence: not stated)*
- **diagram_idea**: Side view of a motor hub and a load joined by two strings, drawn at 0, 10 and 20 turns so the helix tightens and the load rises, with a small graph beside it showing pull-in distance against turns (a curve that starts flat and gets steeper) and force falling as the twist grows.
- **sources**: 
  - https://de.wikipedia.org/wiki/Verdrillantrieb
  - https://commons.wikimedia.org/wiki/File:DEXMARTAntrieb.svg
  - https://commons.wikimedia.org/wiki/File:Schnurhelix.svg
  - http://www.hizook.com/blog/2015/01/13/twisted-string-actuators-surprisingly-simple-cheap-and-high-gear-ratio
  - https://hackaday.com/2015/01/17/twisted-string-actuators/
  - https://arxiv.org/abs/1610.01117
  - https://arxiv.org/pdf/1610.01117
  - https://arxiv.org/abs/2209.11420
  - https://arxiv.org/html/2410.12097v1
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC13080251/
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2026.1761507/full
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC12304788
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC12694270/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC12467424/
  - https://ntrs.nasa.gov/api/citations/20190001767/downloads/20190001767.pdf
  - https://patents.google.com/patent/US9272425B2/en
  - https://hackaday.io/project/157004-material-linear-actuator-for-robotics
  - https://en.wikipedia.org/wiki/Windlass
  - https://en.wikipedia.org/wiki/Whirligig
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.youtube.com/watch?v=RxmGPmoC-yg
  - https://www.youtube.com/watch?v=EutbfHvetRI
  - https://www.youtube.com/watch?v=5NYkDOf0JgQ
  - https://github.com/skalouche/Twisted-String-Actuator
  - https://raw.githubusercontent.com/skalouche/Twisted-String-Actuator/master/README.md
  - https://raw.githubusercontent.com/skalouche/Twisted-String-Actuator/master/LICENSE
  - https://raw.githubusercontent.com/Haimlem/TSA-project/main/README.md

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, input_output, power, processes, safety_notes, special_behaviour, tools_needed

## 196 Quick-return mechanism (Whitworth, crank and slotted lever)

*motion conversion.* A crank driving a slotted lever so the working stroke is slow and the return stroke is fast, as in shaping machines

*Not researched yet.*

## 197 Straight-line linkages (Watt, Chebyshev, Peaucellier)

*motion conversion.* Linkages of pivoted bars arranged so one point moves in a straight or nearly straight line without any slide

*Also covers:* Also covers the Tusi couple (a rolling-circle straight-line mechanism)

*Not researched yet.*

## 198 Escapement (anchor or verge escapement)

*motion conversion.* A rocking catch that lets a spring- or weight-driven wheel advance one tooth at a time in a steady rhythm, as in clocks

*Not researched yet.*

## 199 Bell crank (angle lever)

*motion conversion.* An L-shaped lever on a pivot that turns a push or pull round a corner, and can change its size, as in RC and aircraft controls

*Not researched yet.*

## 200 Swashplate and wobble plate

*motion conversion.* A tilted disc on a shaft that turns rotation into back-and-forth motion of rods around it, or the reverse; also tilts helicopter blades

*Not researched yet.*

