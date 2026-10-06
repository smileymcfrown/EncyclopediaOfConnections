# motion conversion: Changes one kind of motion into another (cams, linkages, stepping motion)

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). ⚑ marks what needs confirming; corrections are welcome (`research/needs-confirming.md`).

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
- **environment_limits**: Heat: sliding friction heats the nut, which is why plastic nuts are limited to about 50% duty and bronze to about 10% (linearmotiontips). iglidur plastic nuts are rated -20 to +150 °C (igus), but printed PLA nuts soften above about 60 °C (Prusa). ⚑ [uncertain] Dust and grit on an open screw wear the nut, and grease collects dirt; dry-running plastic nuts avoid the grease. Vibration can let a self-locking screw creep (Wikipedia; PBC Linear). Lubrication and wear matter over time: worn nut threads raise backlash, and in aircraft jackscrews poor maintenance has been fatal (Wikipedia 'Jackscrew', Alaska Airlines Flight 261). *(⚑ parts need confirming)*
- **safety_notes**: A back-drivable (steep-lead or low-friction) screw can let a raised load, printer bed or gantry drop when the motor is switched off; use a fine lead, a brake or a counterweight (linearmotiontips). Screw jacks are only safe while the nut threads are in good condition and lubricated (Wikipedia 'Jackscrew'). Printed jacks and nuts have no rated safe load. ⚑ [uncertain] A motor-driven lead screw pushes hard and slowly, so the carriage can trap and crush fingers. *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: press or vice, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, safety_notes

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
- **input_output**: Continuous rotation -> stepped (intermittent) rotation in the same plane. Step = 360 degrees / n, n = 3 to 18 slots in practice, 4 to 8 most common. Timing is fixed by n: an external Geneva moves for 1/2 - 1/n of each input turn (4 slots: moves 25%, rests 75%; 6 slots: moves 33%, rests 67%), an internal Geneva moves for more than half, a spherical one for exactly half. Peak output speed = input speed / (1/sin(180 degrees/n) - 1): about 2.4 times the input speed for 4 slots and equal to it for 6 slots. Efficiency: no reliable figure found ⚑ [uncertain]; losses come from the pin (or roller) sliding in the slot and the locking disc rubbing in its notch during the pause. Shafts: parallel for external and internal types; intersecting at right angles for the rare spherical type. Back-drivable: no during the pause (the locking disc blocks the output); during a step the pin is in control, so the output cannot run ahead. *(⚑ parts need confirming)*
- **power**: passive (no power needed); it is usually driven by a motor or hand crank, and if power is lost the output simply stays locked where it was during a pause
- **removability**: removable: the two wheels sit on shafts or axles in a frame and can be taken apart (screws, retaining rings or push-fit axles)
- **reuse_cycles**: many times: it can be dismantled and reassembled repeatedly; the limit is wear of the pin, slots and locking surfaces, not the assembly
- **tools_needed**: A screwdriver or hex key for the frame and shaft fixings, or none for push-fit and LEGO-axle printed models; optionally a little lubricant for the pin, slots and axles
- **seal**: none: it is an open mechanism; it does not seal anything
- **load**: Light to heavy depending on size: Bickford notes Genevas range from instrument sizes to machine-tool drives indexing spindle carriers weighing several tons, and quotes an 18-inch Geneva lasting 20 years indexing a one-ton carrier every few seconds. The weak points are the pin and the slot walls, which take a jolt each time the pin enters, and the locking disc during the pause. External Genevas can be smaller and take higher stresses than internal ones (Wikipedia). Printed plastic versions are for light loads and demonstrations.
- **adjustable**: No: the step angle and the move-to-pause timing are fixed by the number of slots once it is designed; only the starting position (phase) is set when assembling
- **play_and_precision**: The output is held during each pause by the locking disc sitting in its notch, so play comes from the clearance between those curved surfaces and between the pin and the slot; Wikipedia notes the locking disc keeps the image steady in film projectors. Centre distance must be held accurately so the locking disc works without jamming (cramping) and the pin meets the slots correctly, and a pin that is loose in its slot can chatter from side to side at speed (Bickford). Heavy machine tools add a separate locating and locking mechanism for exact final position (Bickford, fig. 9-14). It tolerates little misalignment between the shafts.
- **access_needed**: not applicable: it is two wheels on shafts in a frame, reached wherever the frame opens
- **materials**: Metal in machine tools, watches and projectors (heavy-duty machine-tool Genevas use replaceable wear shoes and drive rollers, per Bickford) ⚑ [uncertain: specific alloys not found]. 3D-printed plastics work for light duty: a Bucharest study printed Genevas in PLA, ABS, PLA with copper, PLA with bronze and acrylic (plexiglass), and found ABS and copper-filled PLA ran with much less noise and vibration (3DPrint.com on Rizescu et al.); osamutake recommends well-dried PETG for accuracy. *(⚑ parts need confirming)*
- **maker_difficulty**: easy to moderate: free generators calculate the geometry and the parts print flat without supports (some even print already assembled), but the shafts must be held at the right distance and the pin must run smoothly in the slots

### Making it

- **processes**: 
  - 3D print (FDM): many printable demos, counters, clocks and toys, including print-in-place versions
  - laser cut: ⚑ [uncertain] the parts are flat profiles that a laser could cut from acrylic or plywood, no tested example found
  - CNC: the traditional way to make metal ones; slots and locking arcs are milled
  - off-the-shelf part: Bickford (1972) notes Genevas were sold ready-made by several makers; for hobby builds buy the shafts, bearings, pins and retaining rings *(⚑ parts need confirming)*
- **print_in_place**: yes: TazaParts' LEGO-compatible Geneva drive prints already assembled without supports, using 0.2-0.3 mm clearances on the moving parts; most printable Genevas are printed as separate flat parts and pushed onto axles
- **making_tips_3d_printing**: 1) Get the geometry from a generator: Ben Brandt's online Geneva Drive Generator takes the crank radius, number of positions, pin diameter and clearance and gives the centre distance, slot length and width and locking-arc sizes, with an animation; tllilleh's OpenSCAD library (needs BOSL2) builds the parts. 2) Print the wheels flat on the bed; they need no supports. 3) Surface finish matters because the pin slides along the slots: osamutake uses 0.1 or 0.08 mm layers and a random seam position so the seams wear in instead of catching, and Shmoee recommends 0.12 mm layers for the Geneva wheel because Z-seams make it rough; sand or file any seam blobs if it sticks. 4) Clearances: 0.2-0.3 mm for print-in-place parts (TazaParts), about 0.15 mm radial clearance for gears on printed shafts (osamutake); PETG usually needs a little more clearance than PLA ⚑ [uncertain]. 5) Elephant's foot (a squashed first layer) and stringing make holes too tight: file the hole or sand the shaft (osamutake). 6) Use well-dried PETG for accuracy (osamutake); ABS and copper-filled PLA were quieter in the Bucharest study. 7) Smooth axles: flanged ball bearings (Joel uses F6901Z) or metal screws as axles (whlpr uses M3 x 14 screws); a drop of lubricant such as bike chain lube quiets it (TazaParts). 8) Make the pin round and smooth, and consider a metal pin or a small bearing as a roller for longer life ⚑ [uncertain]. 9) Keep the centre distance exact: mount both shafts in one rigid printed frame rather than two separate parts. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Shafts or axles (steel rod, LEGO Technic axles (brand)); flanged ball bearings (e.g. F6901Z); machine screws and nuts as axles (M3); retaining rings (circlips) or e-clips to hold wheels on shafts; a dowel pin or shoulder screw for the drive pin, optionally with a small ball bearing or track roller on it to reduce friction ⚑ [uncertain]; a gear motor or hand crank to drive it. Industrial alternatives are sold as cam indexers and rotary index tables (search 'indexing drive', 'rotary indexer'). *(⚑ parts need confirming)*
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
- **environment_limits**: Printed PLA softens above about 60 °C (Prusa), so keep PLA models away from heat; dust or grit in the slots and on the locking surfaces speeds wear ⚑ [uncertain]; running dry makes it noisy, and a little lubricant quiets it (TazaParts). Vibration: it causes its own vibration at speed because of the jolt at each step (Wikipedia). *(⚑ parts need confirming)*
- **safety_notes**: In motor-driven builds, the pin, slots and wheels form pinch and shear points that can trap fingers ⚑ [uncertain]; guard them. Because the locking disc holds the output firmly, forcing the output by hand can break the pin or locking surfaces ⚑ [uncertain]. At speed the sudden steps can throw loose items off a carousel. *(⚑ parts need confirming)*
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
  - [Geneva Drive Generator (Ben Brandt, web app)](https://benbrandt22.github.io/genevaGen/): Enter crank radius or wheel radius, number of positions, pin diameter and clearance; it calculates centre distance, slot length and width and locking-arc sizes, draws the parts and animates them *(licence: not stated ⚑ [uncertain])*
  - [openscad-geneva-drive (tllilleh, OpenSCAD library), README](https://raw.githubusercontent.com/tllilleh/openscad-geneva-drive/master/README.md): OpenSCAD library that generates Geneva drive parts; needs the BOSL2 library *(licence: not stated in the README ⚑ [uncertain])*
  - [Lego compatible Geneva drive (print-in-place) (TazaParts, Printables)](https://www.printables.com/model/1092473-lego-compatible-geneva-drive-print-in-place): Geneva drive that prints already assembled with no supports, 0.2-0.3 mm clearances, LEGO Technic compatible; video at youtu.be/cG9SiGAxTPY *(licence: CC BY)*
  - [Educational Gear Examples 2 (osamutake, Printables)](https://www.printables.com/model/1427427-educational-gear-examples-2): Set of small demonstration gear pairs on 80 mm base plates, including an external Geneva drive and a two-layer intermittent gear to compare side by side, with printing advice *(licence: CC BY)*
  - [Single Thumbwheel Counter (00 to 99) using a Geneva Drive (Shmoee, Printables)](https://www.printables.com/model/520907-single-thumbwheel-counter-00-to-99-using-a-geneva-): A practical 00-99 counter where a Geneva drive carries the tens digit *(licence: CC BY-NC)*
  - [Geneva Mechanism simulator (MechSimulator)](https://mechsimulator.com/tools/geneva-mechanism/): Interactive animation for 3 to 8 slots with live graphs of output speed and acceleration *(licence: link only ⚑ [uncertain])* *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steps
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: clicks ⚑ *needs confirming (best guess): the text uses both clicking and silent words*
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, make_it_yourself, making_tips_3d_printing, materials, off_the_shelf_parts, processes, safety_notes

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
  - shape (the parts interlock; form-fit): during the pause, the smooth arc of the driver sits against a matching curved surface of the driven gear and blocks it
  - spring force (a spring or springy part presses it in place): in the roller-detent version, a detent holds the output during the pause instead of a locking ring (Bickford) ⚑ [uncertain: spring not described] *(⚑ parts need confirming)*
- **input_output**: Continuous rotation -> intermittent rotation (or reversing or reciprocating motion in variants). Output step = (number of teeth in the driver's toothed section / number of teeth on the driven gear) x 360 degrees; for example two teeth turn an 8-tooth gear by two teeth, a quarter turn (woodgears.ca). While meshed, the speed ratio is the ordinary gear ratio (Bickford), and the share of each turn spent moving versus pausing is set by how much of the driver's rim is toothed; it can give long moves with short pauses and one, two or three pauses per output turn, which a Geneva cannot. Efficiency: RoyMech calls mutilated gears efficient; no figure found ⚑ [uncertain], and the locking arcs add some sliding friction during the pause. Shafts: parallel (spur gears), intersecting (bevel gears), or gear to rack for straight motion. Back-drivable: no during the pause (the arcs lock the output); while the teeth are meshed it behaves like any gear pair ⚑ [uncertain]. *(⚑ parts need confirming)*
- **power**: passive (no power needed); usually turned by a motor, crank or the previous counter wheel, and if power is lost the output stays where it is
- **removability**: removable: the gears sit on shafts in a frame and can be taken apart (retaining rings, screws or push-fits)
- **reuse_cycles**: many times: it can be dismantled and reassembled repeatedly; the limit is wear of the first teeth and the locking arcs
- **tools_needed**: A screwdriver or hex key for the frame; pliers for retaining rings (osamutake's printed models are held with retaining rings) ⚑ [uncertain: tool not named]; for wooden versions, woodworking tools (Matthias Wandel cut away teeth with a Forstner bit on a drill press and shaped them on a strip sander) *(⚑ parts need confirming)*
- **seal**: none: it is an open gear mechanism; it does not seal anything
- **load**: Light: RoyMech says mutilated gears stand up well to the loads found in instruments and counters, but are subject to large impact loads and accelerations at high driving speeds, so Genevas or star wheels are preferred for high speed and power. Bickford says that at high speed or high load 'its name is well deserved'. The weak points are the first tooth of each toothed section, which takes the impact, and tooth tips that can collide (top) if the output is not held properly during the pause. osamutake calls it unsuitable for heavy loads or high speeds.
- **adjustable**: No, once made: the number, size and position of the toothed sections fix the steps and timing; they are chosen at design time and can be spaced unevenly to set any timing you like (osamutake)
- **play_and_precision**: RoyMech credits mutilated gears with good indexing accuracy, since the gears themselves are accurate and the output is always under the input's control. While moving it has the normal backlash of a gear pair; during the pause the locking arcs hold the output, and any clearance there lets it wobble. It tolerates little error in the centre distance or in the timing (phase) of the first tooth meeting the output ⚑ [uncertain], because a late or early tooth hits a tooth tip instead of a gap. *(⚑ parts need confirming)*
- **access_needed**: not applicable: it is a set of gears on shafts in a frame, reached wherever the frame opens
- **materials**: Ordinary gear materials: metals and plastics for instruments and counters ⚑ [uncertain: specific alloys and plastics not found]; wood works for demonstrations (Matthias Wandel built a counter's carry gears from plywood and hardwood); for 3D printing, osamutake recommends well-dried PETG. *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: the gears are ordinary and print or cut easily, but you must add locking arcs and get the timing right so the first tooth enters cleanly; copying a working printed model first is the easiest start

### Making it

- **processes**: 
  - 3D print (FDM): printable demonstration sets and counters exist
  - woodwork: a wooden counter with part-toothed carry gears (woodgears.ca)
  - CNC: ⚑ [uncertain] ordinary gear-cutting then removing teeth, no specific example opened
  - laser cut: ⚑ [uncertain] flat gear profiles could be cut from acrylic or plywood, no tested example found
  - off-the-shelf part: ⚑ [uncertain] complete mechanical counters contain them; separate part-toothed gears are not a common catalogue item *(⚑ parts need confirming)*
- **print_in_place**: no ⚑ [uncertain]: every printable example found was printed as separate gears and assembled on shafts (osamutake holds them with retaining rings); a print-in-place version should be possible like other printed gear sets, but none was found *(⚑ parts need confirming)*
- **making_tips_3d_printing**: 1) Start by printing and studying a working design: osamutake's 'Educational Gear Examples' sets include two-layer intermittent gears, an intermittent lantern gear and an internal Geneva on the same base plates. 2) Always add locking surfaces: make the toothless part of the driver a smooth arc centred on the driver's shaft, and give the driven gear matching curved faces between its engaging teeth, so the output is held during the pause (osamutake; RoyMech; Bickford). A two-layer layout is easiest to print: one layer carries the driving teeth, the other the locking arcs; for a counter carry, cut back every other tooth of the driven gear on one layer (karakurist.jp; woodgears.ca). 3) Check the hand-over by turning it slowly by hand: 507 Mechanical Movements' animators had to alter a few rack teeth to stop the gears jamming at the transition points, so trim or round the first and last tooth of each toothed section if they catch ⚑ [uncertain: trimming amount]. 4) osamutake's print settings: well-dried PETG for accuracy, 0.1 or 0.08 mm layers for smooth faces, slow speed on overhangs, and 'random' seam position so seams wear in instead of catching. 5) Clearances: about 0.15 mm radial clearance between gears and printed shafts (osamutake); sand off stringing on shafts and widen tight holes with a thin round file if elephant's foot (a squashed first layer) makes them bind. 6) Print gears flat so the teeth are built from full layers ⚑ [uncertain]. 7) Run it slowly and lightly loaded; a motor at high speed will chip the first teeth. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Shafts or axles, ball bearings or bushings, retaining rings (circlips or e-clips); ordinary spur or bevel gears that you modify by removing teeth, as Matthias Wandel did on wooden 8-tooth gears; complete mechanical counters (search 'mechanical counter', 'revolution counter', 'tally counter') which contain this mechanism ⚑ [uncertain]; a gear motor or hand crank to drive it. *(⚑ parts need confirming)*
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
  - Board-game and scoreboard flip counters printed at home
  - Toys and automata where something moves, stops, and moves again ⚑ [uncertain] *(⚑ parts need confirming)*
- **when_to_use**: Use it for simple stop-go motion at low speed and light load, especially counters (carrying one digit wheel to the next), and when a Geneva drive can't do what you want: only one or two stops per turn, long moves with short pauses, unevenly timed steps, or motion that switches between two outputs in turn (for example two sides of a model moving one after the other). It is cheap and can be made from ordinary gears by removing teeth and adding locking arcs.
- **when_not_to_use**: Avoid it at high speed or with heavy or fast-moving loads, because the teeth pick up the output suddenly and cause impacts, noise and chipped teeth; use a Geneva drive or star wheel for a gentler start and stop, or a cam indexer for fully controlled motion. Use a stepper motor if the step size or direction must change on command, and a ratchet and pawl if the input is a back-and-forth lever rather than steady rotation.
- **environment_limits**: Printed PLA softens above about 60 °C (Prusa). Abrasive filaments (matte, glow-in-the-dark, fibre- or metal-filled) wear small printed counter mechanisms quickly (Chirimorin, Printables) ⚑ [uncertain: general advice for printed counters]. Dust and grit on the locking arcs increase wear and friction ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: In motor-driven builds the meshing teeth and locking arcs are pinch points ⚑ [uncertain]; guard them. Sudden starts can fling or tip light objects carried on the output. Otherwise none known. *(⚑ parts need confirming)*
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
  - [Building a mechanical counter (Matthias Wandel, woodgears.ca)](https://woodgears.ca/counter/): Step-by-step build of a wooden mechanical counter whose carry uses an 8-tooth gear with four teeth cut back and a two-tooth gear with a locking disc *(licence: not stated ⚑ [uncertain])*
  - [Intermittent mechanism (Michel, Printables)](https://www.printables.com/model/1434687-intermittent-mechanism): One control gear drives two outputs a full turn each, one after the other, with the idle side blocked; made to simulate traffic taking turns *(licence: Creative Commons Public Domain (per Printables))*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (entry 'INCOMPLETE-GEAR', 不完全齿轮机构)](https://huangyan920.github.io/Mechanical/): Browser animation of a part-toothed gear driving its partner intermittently, held still by a locking arc between steps *(licence: MIT)* *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steps, back-and-forth straight
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: clicks ⚑ *needs confirming (best guess): the text uses both clicking and silent words*
- **tools**: drill and tap, power tools, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…ning rings (osamutake's printed models are held with retaining rings) [uncertain: tool not named]; for wooden…"*
- **load_max**: light
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, everyday_examples, holding_principle, input_output, make_it_yourself, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, print_in_place, processes, safety_notes, tools_needed

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
- **motion**: multiple: the cam rotates (continuously, or back and forth by a handle) and the follower slides (translating follower) or rotates through a small angle (oscillating or rocking follower); strokes range from millimetres in toys to engine valve lifts ⚑ [uncertain: no typical figure found] *(⚑ parts need confirming)*
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
- **input_output**: Continuous (or hand-turned) rotation -> reciprocating straight-line motion or oscillating (rocking) motion, with any planned pattern of rise, dwell and return. Plate cam: follower moves at right angles to the cam shaft. Barrel (cylindrical) cam: follower moves parallel to the shaft (DT Online; Wikipedia). Face cam: follower runs on the face of a disc; a grooved face captures it so it moves both ways without a spring (Wikipedia). Timing: one follower cycle per lobe per turn; a groove that winds round twice gives one stroke per two turns (osamutake). A constant-lead barrel cam moves its follower in proportion to rotation, like a lead screw (Wikipedia). Efficiency: roller followers have 'the least friction' (mechref, UIUC) ⚑ [uncertain: no efficiency figure found]; losses grow with the pressure angle (UC3M). Back-drivable: generally no in useful terms, since pushing the follower tends to jam it in its guide rather than turn the cam, especially at high pressure angles (UC3M) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **power**: passive (no power needed); driven by a hand crank or motor. If the drive stops, the follower stays where the cam leaves it (a spring-closed follower may push the cam round a little on a falling slope ⚑ [uncertain]) *(⚑ parts need confirming)*
- **removability**: removable: cams and followers are fixed to shafts and pivots with screws, keys, set screws or push-fit axles, and can be taken apart and swapped
- **reuse_cycles**: many times: the parts can be dismantled and refitted; interchangeable cams are a common teaching design (Rob Ives' interchangeable cam kit; Teaching Tech's three swappable cams)
- **tools_needed**: A screwdriver or hex key for the shaft fixings and follower guides (Teaching Tech's models use M3 and M4 bolts), a spring if the follower isn't held by gravity or a groove, and optionally lubricant for sliding surfaces
- **seal**: none: it is an open mechanism (engine camshafts run inside an oiled housing, but the cam itself seals nothing)
- **load**: Light to heavy depending on size and material: from card automata to engine camshafts and steam hammers (Wikipedia). Strong in the direction the cam pushes; the return force of a spring-closed follower is only as strong as its spring or gravity. Side force on the follower grows with the pressure angle, and above about 30° a translating follower can jam in its guide (UC3M). Plastic cams suit only low loads and low speeds (UC3M).
- **adjustable**: Usually no: the motion is fixed by the cam's shape. Stroke or timing can be changed by swapping cams (Rob Ives; Teaching Tech), by sliding a stepped set of cams of different throw along the shaft (507 Mechanical Movements no. 150), by moving the follower's pivot or linkage ⚑ [uncertain], or with a specially designed adjustable cam (Wikipedia: patented by Waldo J. Kelleigh in 1956). *(⚑ parts need confirming)*
- **play_and_precision**: Force-closed (spring or gravity) followers have no play while contact is kept, and the follower repeats the same motion every turn; grooved cams need running clearance, so the follower can shift slightly when its direction reverses ⚑ [uncertain]. Precision depends on how accurately the profile is made and how smooth it is; a pointed follower traces fine detail more accurately but is weaker (Rob Ives). Misalignment: a crowned (barrel-shaped) cam-follower roller tolerates up to about 0.5° of misalignment, a cylindrical one only about 0.06° (Wikipedia 'Cam follower'). *(⚑ parts need confirming)*
- **access_needed**: not applicable: the cam and follower sit on shafts in a frame, reached wherever the frame opens
- **materials**: Industrial cams: hard steels and cast iron, heat-treated; brass, bronze and plastic cams for low-load, low-speed uses (UC3M). Followers: needle-roller or ball-bearing cam followers and track rollers in steel (Wikipedia 'Cam follower'; McMaster-Carr). Maker cams: card and wood for automata (Rob Ives), 3D-printed PLA or PETG (Teaching Tech; osamutake), and self-lubricating 'tribo' filaments for sliding wear parts (igus iglidur I150, claimed up to 50 times more abrasion-resistant than standard printing plastics).
- **maker_difficulty**: easy for simple plate cams (eccentric, pear, snail), which print flat without supports and need only a shaft, a follower guide and gravity or a spring; moderate for grooved face and barrel cams and for designing smooth profiles that don't jam; hard for fast, heavily loaded cams, which need calculated motion curves and hardened metal

### Making it

- **processes**: 
  - 3D print (FDM): plate, groove and barrel cams, followers and frames all print well for light duty (Teaching Tech; osamutake)
  - laser cut: ⚑ [uncertain] plate cams are flat profiles that suit plywood or acrylic, no tested example opened
  - woodwork: wooden and card cams drive traditional automata and toys (Rob Ives)
  - CNC: industrial cams are milled with rotating cutters on numerically controlled machines and often ground and heat-treated afterwards (UC3M)
  - off-the-shelf part: cam followers and track rollers, shafts, springs and bearings (McMaster-Carr; Wikipedia 'Cam follower') *(⚑ parts need confirming)*
- **print_in_place**: partly: a few demo models print already assembled (e.g. ForgeFiles' print-in-place pear cam demo on Printables, found through its API), but most printable cams are printed as separate parts and assembled with bolts or pins, and plain-edged cams need a spring or gravity to keep the follower in contact (Teaching Tech; osamutake)
- **making_tips_3d_printing**: 1) Print plate cams flat on the bed: Teaching Tech's cam set is oriented to print without supports, in PLA, with 15-20 % infill because 'strength is not important' in demos; use more walls and infill for loaded cams ⚑ [uncertain]. 2) Make sliding surfaces smooth: osamutake uses 0.1 or 0.08 mm layers, a 'random' seam position so seams wear in instead of catching, and slow speed for overhangs. 3) For barrel (cylindrical) cams, give the groove a rounded cross-section rather than the usual square one so it prints without support (osamutake). 4) Clearances: osamutake designs 0.15 mm radial clearance on printed shafts and uses well-dried PETG for accuracy; sand stringing off shafts and open elephant's-foot holes with a round file. Teaching Tech found clearance for notched (detent) cam dials hard to get right and suggests trying a TPU cam. 5) Key the cam to its shaft: a flat on the shaft (D-shaft) or a bolt through the cam stops it slipping (osamutake; Teaching Tech). 6) Keep the pressure angle (the slope the follower climbs) under about 30° for a sliding follower and 35° for a lever follower; if it is too steep, make the base circle bigger or spread the rise over more of the turn (UC3M). 7) Use a roller follower where you can, e.g. a small ball bearing on a pin ⚑ [uncertain: no tested maker source], and keep the cam's tightest convex curve at least 2-3 times the roller's radius to avoid undercutting (UC3M). 8) A pointed follower traces detail well but is weak and gets pushed sideways; a separate follower that slides on the cam and pushes a guided rod helps (Rob Ives). 9) For grooves that cross themselves (a groove winding round twice), use an elongated or crescent-shaped follower that can swivel, so it doesn't take the wrong branch at the crossing (osamutake). 10) For long wear, print sliding parts in a wear-resistant tribo-filament (igus) or add lubricant; PLA softens above about 60 °C (Prusa). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Cam followers / track rollers: stud-mount (threaded) cam followers and shaft-mount (yoke) track rollers, needle-roller, crowned, flanged and V-groove versions (Wikipedia 'Cam follower'; McMaster-Carr 'Track Rollers'); small ball bearings as DIY rollers ⚑ [uncertain]; compression and extension springs for follower return; D-profile or keyed shafts, set-screw shaft collars and hubs; linear bushings or guide blocks for follower rods; bearings for the camshaft; gear motors or hand cranks; for industrial stepping, ready-made cam indexers ⚑ [uncertain: not checked in a catalogue]. *(⚑ parts need confirming)*
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
- **safety_notes**: The gap between a turning cam and its follower is a pinch point, and snail cams drop the follower suddenly, as in hammers and punches (DT Online); keep fingers out from under the follower of powered cams ⚑ [uncertain: general practice]. Compressed follower springs store energy and can fly out during disassembly ⚑ [uncertain]. Guard motor-driven camshafts. *(⚑ parts need confirming)*
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
  - [Cam & Follower simulator (MechSimulator)](https://mechsimulator.com/tools/cam-follower/): Interactive cam profile tool: choose motion law (SHM, cycloidal, uniform velocity or acceleration), base circle, lift and follower type; shows the profile, displacement, velocity and acceleration graphs and flags pressure angles over 30° *(licence: link only ⚑ [uncertain])*
  - [cam_profile.scad (Kit Wallace, OpenSCAD)](https://raw.githubusercontent.com/KitWallace/openscad/master/cam_profile.scad): Short OpenSCAD script that builds a cam from radius-and-angle control points (example: a snail cam) and extrudes it for printing *(licence: not stated ⚑ [uncertain])*
  - [Cams (Rob Ives, paper-automata mechanism page)](https://www.robives.com/mechanism/cams/): Beginner explanation of cams and followers for card automata, with a downloadable interchangeable cam kit to try different profiles *(licence: not stated ⚑ [uncertain])*
  - [Level wind mechanism (baitcasting fishing reel) (C. Yamahata, Sketchfab)](https://sketchfab.com/3d-models/level-wind-mechanism-baitcasting-fishing-reel-0d4a3f6123eb409a9ce6391ddcd72048): Downloadable 3D model of a diamond-screw level-wind, a crossed-groove barrel cam *(licence: CC BY 4.0)* *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: back-and-forth turning, back-and-forth straight
- **shaft_layout**: parallel, at an angle
- **overload_response**: not applicable
- **clicks**: clicks
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** adjustable, input_output, make_it_yourself, making_tips_3d_printing, motion, off_the_shelf_parts, play_and_precision, power, processes, safety_notes

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
- **input_output**: Continuous rotation -> straight-line back-and-forth (reciprocating) motion, or the reverse. One full out-and-back stroke per crank turn; stroke = 2 x crank radius. Position x = r cos(angle), speed v = -r w sin(angle), acceleration a = -r w^2 cos(angle), so top speed r w is at mid-stroke and the highest acceleration r w^2 is at the ends where the speed is zero (MechSimulator; Five Flute). Efficiency: no reliable figure found ⚑ [uncertain]; losses come mostly from the pin sliding in the slot and the yoke sliding in its guides, which is why heavier versions put a roller or bearing on the pin (Five Flute; Hamilton Sundstrand patent US10088056B2). Shaft arrangement: the crank shaft is at right angles to the plane in which the yoke slides. Back-drivable: yes, pushing the yoke turns the crank (Bourke engine, steam engines, valve actuators; Wikipedia), except exactly at the two ends of the stroke (dead centres). As a quarter-turn valve actuator (piston pushing a pin in a pivoted slotted yoke) it gives a 90-degree swing with the torque highest at both ends and lowest in the middle, a 'U-shaped' torque curve (Instrumentation Blog). *(⚑ parts need confirming)*
- **power**: passive (no power needed); usually driven by a motor or hand crank, or by a piston in actuators and engines. If power is lost it simply stops where it is; it does not lock, and a load pushing on the yoke can turn the crank back except at the ends of the stroke
- **removability**: removable: the crank, yoke, guides and pins are held by screws, axles or snap fits and can be taken apart
- **reuse_cycles**: many times: taking it apart does not harm it; its life is limited by wear of the pin and slot, not by assembly
- **tools_needed**: A screwdriver or hex key for the frame, motor mount and axle screws; none for snap-together printed demos (Sidpatchy's model snaps together, and WayTooManyHobbies' version stays together without glue); a little grease or oil for the slot and guides
- **seal**: none: it is an open mechanism; enclosed industrial versions (valve actuators, engines) seal their housing, not the yoke itself
- **load**: Light to heavy depending on how it is built: printed demos move light loads, while steel versions drive pipeline valve actuators and even forging presses (Nguyen Duc Thang's 'Sine mechanism 3: Press' notes presses of this kind giving 2,500 tons at 40 strokes per minute). Weak points: the pin and slot, which touch along a line and wear quickly under high contact pressure (Wikipedia; Five Flute), and the yoke's guides, which take sideways forces and tilting (moment) loads (Five Flute). Strong along the line of travel; weak against twisting the yoke in its guides.
- **adjustable**: Usually no: the stroke is fixed by the crank radius. Special versions let the pin's distance from the centre be changed with a screw or slot to adjust the stroke (Thang, 'Scotch yoke of adjustable output stroke length'); Bosch's jigsaw patent US6357125B1 switches between a long stroke (about 2 in) for soft materials and a short one (about 1 in) for hard ones by reversing the motor.
- **play_and_precision**: Noticeable unless built carefully: any clearance between the pin and the slot shows up as lost motion (backlash) each time the push reverses at the ends of the stroke, and clearance in the guides lets the yoke rock; one printed design with loose pin tolerances rattled and fell apart unless glued (WayTooManyHobbies, Printables). The end positions repeat exactly every turn because the stroke is set by the geometry. The yoke guides must be parallel to the travel and the crank shaft square to the slot; it tolerates little misalignment ⚑ [uncertain]. *(⚑ parts need confirming)*
- **access_needed**: not applicable: it is a mechanism built in a frame, reached wherever the frame opens
- **materials**: Steel cranks, pins and yokes in engines, saws and valve actuators, often with a roller or ball bearing on the pin so it rolls rather than slides (Hamilton Sundstrand patent US10088056B2) ⚑ [uncertain: specific alloys not found]. PLA and PETG for printed demos and light hobby drives (gzumwalt, WayTooManyHobbies and Sidpatchy all printed theirs in PLA). Plywood or acrylic for hand-cranked models ⚑ [uncertain]. *(⚑ parts need confirming)*
- **maker_difficulty**: easy: it prints as a few flat parts with no supports and goes together with a pin or screw; the only fiddly part is getting the slot and guide clearances right so it slides freely without rattling

### Making it

- **processes**: 
  - 3D print (FDM): many free printable demos; the parts print flat without supports (gzumwalt, WayTooManyHobbies)
  - laser cut: ⚑ [uncertain] the crank, yoke and frame are flat shapes that would suit acrylic or plywood; no tested example was opened
  - woodwork: ⚑ [uncertain] hand-cranked wooden automata use it; no tested example was opened
  - CNC: for metal versions; the slot and guides are milled
  - off-the-shelf part: complete Scotch-yoke valve actuators are sold for pipelines; for hobby builds buy the bearings, pins, roller (track roller or cam follower) and guide rods or rails *(⚑ parts need confirming)*
- **print_in_place**: no: printed as separate parts (crank, yoke, base, pins or axle) and snapped, screwed or pinned together (gzumwalt, Sidpatchy, WayTooManyHobbies); no print-in-place version was found ⚑ [uncertain] *(⚑ parts need confirming)*
- **making_tips_3d_printing**: 1) Print the crank disc, yoke and base flat on the bed; they need no supports (gzumwalt printed his at 0.15 mm layers, 20% infill, no supports). 2) Clearances: start with at least 0.3 mm between moving parts (Prusa) and up to 0.5 mm for FDM (Hubs); Sidpatchy's snap-together yoke uses 0.5 mm throughout so that it 'should print on any printer'. Too loose and it rattles: WayTooManyHobbies made the clearance the one adjustable parameter in his OpenSCAD file so you can tune it to your printer. 3) Pins: small printed round pins are fragile and need loose tolerances (WayTooManyHobbies); use a metal screw or dowel, or a thick printed threaded axle (gzumwalt uses a printed M8 x 1.25 thread, cleaned up with a tap and die). 4) Make the parts that take the load denser: WayTooManyHobbies prints the yoke and main shaft at 50% rectilinear infill and everything else at 20%. 5) Cut slot friction: fit a small ball bearing on the crank pin as a roller (IridiumTimekeeping's display model uses a 624zz bearing, 13 mm outside, 4 mm bore), or use a sliding block; Five Flute says a bare pin in a slot is only enough for small, light, low-torque uses. Add a little grease. 6) Guide the yoke on long guides so it cannot tilt and jam: keep the pushing force within about twice the guide bearing's length (igus 2:1 rule); smooth steel rods with linear bearings, or a long printed channel, both work. 7) FDM parts are weakest between layers (Prusa), so orient the crank and pin so the pin is not snapped off along a layer line ⚑ [uncertain: best orientation not tested]. 8) PLA is fine for indoor demos; use PETG or ASA if it gets warm or sits in sunlight (Prusa). 9) For a gentle motorised demo, gzumwalt gears an N20 gear motor down 12:24 to about 15 rpm, a 4-second cycle. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Crank pin: shoulder screw (shoulder bolt), dowel pin or machine screw. Roller on the pin: small ball bearing (e.g. 624zz or 608zz) or a track roller / cam follower (threaded-stud type). Crank shaft support: sleeve bearings (bushings), flanged sleeve bearings or ball bearings. Yoke guides: linear ball bearings on smooth rods, plain linear bearings, or a guide rail and carriage. Drive: gear motor (e.g. N20 gear motor) or DC motor with gears. Retaining rings (circlips) and lock nuts. Industrial complete units: pneumatic or hydraulic Scotch-yoke valve actuators (quarter-turn). Names as used in the McMaster-Carr catalogue.
- **rules_of_thumb**: 
  - Stroke = 2 x crank radius, always, and yoke position x = r cos(angle), i.e. pure simple harmonic motion (MechSimulator Scotch yoke simulator; Wikipedia 'Scotch yoke').
  - Top speed = r x w at mid-stroke; highest acceleration = r x w^2 at the ends of the stroke, where the speed is zero (MechSimulator; Five Flute). Because inertia forces grow with the square of speed, run heavy yokes slowly.
  - Slot length >= 2r + pin (or roller) diameter + a little clearance, because the pin moves r either side of the middle of the slot as the crank turns (follows from stroke = 2r; MechSimulator).
  - A bare pin in a slot is fine for small, light, low-torque uses; for heavier loads use a roller bearing on the pin, a pinned slider (sliding block) or linear bearings, and plan for lubrication (Five Flute). A pin free to roll along the slot 'greatly reduces wear' compared with a sliding pin (Hamilton Sundstrand patent US10088056B2).
  - Guide the yoke so the driving force or load acts no further from the guide bearing than about twice the bearing's length, or it may bind or chatter (igus '2:1 rule' for plain linear bearings).
  - Printed moving parts: start with at least 0.3 mm clearance (Prusa) or 0.5 mm (Hubs, FDM interlocking parts) and tune with a test print.
  - As a quarter-turn actuator, torque is highest at both ends of the 90-degree swing, where valves need it to break free or seat; Instrumentation Blog quotes roughly 20% more breakaway torque than a same-size rack-and-pinion actuator ⚑ [uncertain: blog figure, not checked against a manufacturer]. *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - Electric jigsaws and reciprocating saws, where a pin on a crank plate drives a slotted yoke attached to the blade holder (background of Bosch patent US6357125B1)
  - Quarter-turn valve actuators on oil and gas pipelines, its most common industrial use (Wikipedia)
  - Some unusual engines (the Bourke engine), steam engines, water pumps and old tide-predicting machines (Wikipedia)
  - Printed desk toys and classroom mechanism models (Printables)
- **when_to_use**: Use it when a motor or hand crank should drive something smoothly back and forth in a straight line, especially in a small space. The output is a clean sine wave, the stroke is set simply by the pin's distance from the centre, it has one joint fewer than a crank and connecting rod, and the push stays in line with the travel, so there is no angled connecting rod pushing the slider sideways (Wikipedia). Good for shakers, stirrers, saw or file drives, small pumps, animated models, and sine-wave motion for demonstrations or test rigs. It also works the other way round when a straight push must give a limited swing with extra force at the ends, as in valve actuators.
- **when_not_to_use**: Avoid it for fast, long-running or heavily loaded machines, where the pin rubbing in the slot wears quickly and wastes power (Wikipedia): use a slider-crank (crank and connecting rod), which has only pin joints. Avoid it when the output must stop and wait at the ends (use a cam and follower, or a curved-slot yoke), when you need a long stroke from a small mechanism (use a rack and pinion, a belt or a lead screw), or when you need to stop anywhere and hold position under load (use a lead screw, a linear actuator or a servo).
- **environment_limits**: Printed PLA softens above about 60 °C and degrades in UV light, so use PETG or ASA near heat or outdoors (Prusa). Grit or dust in the slot and guides speeds up wear and needs cleaning and fresh lubricant ⚑ [uncertain]. The mechanism's own shaking grows with the square of speed, and loose clearances rattle (WayTooManyHobbies). *(⚑ parts need confirming)*
- **safety_notes**: Motor-driven versions have pinch and shear points where the yoke runs in its guides and where the pin passes the ends of the slot; keep fingers clear and add a guard ⚑ [uncertain]. In tools such as jigsaws the moving blade is the main hazard. No special hazards for small hand-cranked demos. *(⚑ parts need confirming)*
- **common_failures**: 1) The slot wears and the clearance grows because the pin slides under high contact pressure (Wikipedia), giving a knock each time the motion reverses: use a roller or sliding block on the pin, a hard metal pin and lubrication (Five Flute; Hamilton Sundstrand patent). 2) The yoke jams or chatters in its guides because the guides are too short for where the force acts, or not parallel (igus 2:1 rule): lengthen the guides and keep the pin close to them. 3) Printed pins break, or the assembly rattles and falls apart, because loose printed-pin tolerances were needed (WayTooManyHobbies): use metal pins or screws and tune the clearance. 4) When the yoke is the input (engine style), it can stop at a dead centre at the end of the stroke: add a flywheel ⚑ [uncertain for small printed builds]. 5) Side loads twist the yoke and wear seals or piston rings in piston-driven versions (Hamilton Sundstrand patent; Five Flute). *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: back-and-forth straight
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, input_output, making_tips_3d_printing, materials, play_and_precision, print_in_place, processes, rules_of_thumb, safety_notes

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
- **input_output**: Continuous rotation <-> straight back-and-forth (reciprocating) motion. In-line stroke = 2 x crank length (Wikipedia); an offset slider gives a quick return with time ratio Q = (180° + b)/(180° - b), where b is the imbalance angle (Wikipedia 'Four-bar linkage'). The motion is a distorted sine wave: the shorter the rod compared with the crank, the more distorted it is and the higher the peak accelerations, which is why the rod should be at least 3 x the crank (Wikipedia). Efficiency: no reliable figure found; one mechanism-demo site quotes 85-92% ⚑ [uncertain]; losses come from the three pivot bearings and from the slider being pressed sideways against its guide, a force that grows with the rod's angle (Wikipedia 'Connecting rod'). Shaft arrangement: crank shaft at right angles to the plane of motion; the slider moves in that plane. Back-drivable: yes, that is how engines work, except at the two dead centres, where a flywheel, a second crank at another angle, or momentum is needed (Wikipedia). *(⚑ parts need confirming)*
- **power**: passive (no power needed); driven by a motor or hand crank, or by a piston (steam, gas, air or hydraulic). If power is lost it simply stops; it does not lock, and a load on the slider can drive the crank back unless the crank sits exactly at a dead centre
- **removability**: removable: pins, bolts or shoulder screws at the pivots; engine connecting rods have a bolted cap on the big end so they can be taken off the crankshaft ⚑ [uncertain] *(⚑ parts need confirming)*
- **reuse_cycles**: many times: taking the pivots apart does not harm them; life is limited by bearing and guide wear
- **tools_needed**: A screwdriver or hex key and a spanner for the pivot bolts and lock nuts; circlip pliers if retaining rings are used; none for press-fit printed demos; oil or grease for the pivots and slide
- **seal**: none: the linkage itself does not seal; in engines, pumps and compressors the piston rings or seals seal the cylinder, not the linkage
- **load**: Light to very heavy: from printed toys to car engines, compressors and presses. The rod carries the load mainly as a push or pull along its length and the crank in bending; the pivots carry it in shear and bearing pressure. The angled rod also presses the slider sideways against its guide, which in engines wears cylinders into an oval shape (Wikipedia 'Connecting rod'). Very large forces arise near the dead centres when it is used as a toggle press. Weak against loads that twist the slider in its guide.
- **adjustable**: Not in its basic form: the stroke is fixed by the crank length. Variants: a crank with several holes or an adjustable pin changes the stroke, and a rod whose length can be changed with a screw moves where the stroke sits (Thang, 'Slider-crank mechanism for adjusting stroke position 1').
- **play_and_precision**: Small if the pivots have good bearings, but each of the three pivots and the slide adds its own clearance, and that play shows up as a knock where the force reverses near the ends of the stroke ⚑ [uncertain]. The end positions repeat exactly each turn. All pivot axes must be parallel and the guide in line with the crank's plane; linkage parts that are not stacked in the same plane bind (Collin_Builds' pantograph notes), and a short slider guide can jam (igus 2:1 rule). *(⚑ parts need confirming)*
- **access_needed**: not applicable: it is a mechanism built in a frame, reached wherever the frame opens
- **materials**: Steel, cast iron or aluminium cranks and rods, with plain (bushed) or rolling bearings and hardened steel pins, in engines, compressors and pumps ⚑ [uncertain: specific alloys not researched]. PLA, PETG, plywood or acrylic for models and light hobby drives, usually with metal screws or pins at the pivots (rackjabbit_'s printed slider-crank uses M3 bolts and nuts at the joints). *(⚑ parts need confirming)*
- **maker_difficulty**: easy: a crank, a rod and a slider print or cut flat and join with screws; the care needed is in making the slider's guide long and smooth enough not to jam, and the pivots free without wobble

### Making it

- **processes**: 
  - 3D print (FDM): many printable demos and model engines; parts print flat
  - laser cut: ⚑ [uncertain] flat cranks, rods and frames suit acrylic or plywood; no tested example was opened
  - woodwork: ⚑ [uncertain] traditional in wooden automata and treadle machines (507 Mechanical Movements no. 158 shows a treadle driving a crank)
  - CNC: for metal cranks, rods and guides
  - off-the-shelf part: buy the pivot pins (shoulder screws), bearings, rod ends, linear bearings and guide rods; complete model-engine crankshafts and pistons also exist ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: normally printed as separate flat parts and joined with screws, pins or snap pins; print-in-place pin joints need about 0.3 mm or more clearance (Prusa) but no tested print-in-place slider-crank was opened ⚑ [uncertain] *(⚑ parts need confirming)*
- **making_tips_3d_printing**: 1) Print the crank, rod and slider flat on the bed, so the layers run along the rod's length; FDM parts are much weaker between layers than along them (Prusa). 2) Pivots: use metal screws, shoulder screws or dowels through printed holes rather than printed pins, put a washer between moving parts, and use lock nuts (nylon-insert) set just loose enough to turn freely (Collin_Builds' printed pantograph uses M5 bolts, washers and nyloc nuts; rackjabbit_'s slider-crank uses M3 bolts and nuts). For long life press a sleeve bearing (bushing) or small ball bearing into the printed hole. 3) Clearance: at least 0.3 mm for printed moving parts (Prusa), 0.5 mm to be safe on FDM (Hubs); holes tend to print a little small, so drill or ream them to size ⚑ [uncertain]. 4) Slider: make it long and keep the rod's push within about twice the guide bearing's length (igus 2:1 rule), or run the slider on steel rods with linear bearings. A printed piston in a printed cylinder needs generous clearance and smooth walls and will not seal ⚑ [uncertain]. 5) Make the rod at least 3 x the crank length (Wikipedia): less sideways push on the slider and smoother motion. A rod equal to the crank doubles the stroke to 4 x crank but can flip unpredictably unless extra gears guide it (Thang, 'Slider crank mechanism of equal crank and conrod length 1'). 6) If the slider drives (a model engine, a pneumatic cylinder), add a flywheel to carry it through the dead centres (Wikipedia). 7) PLA is fine indoors; use PETG or ASA near motors, heat or sunlight (Prusa). 8) Lubricate the slide and pivots; a dry printed slide squeaks and wears ⚑ [uncertain]. 9) Try the geometry first in a simulator (MechSimulator, PMKS+, Linkage) or generate a printable model with Print a Motion. *(⚑ parts need confirming)*
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
- **environment_limits**: Printed PLA softens above about 60 °C and degrades in UV light, so use PETG or ASA near motors, heat or sunlight (Prusa). Inertia forces grow with the square of speed (Wikipedia 'Connecting rod'), so fast printed linkages shake and loosen their screws; slow them down or balance them. Pivot bearings need lubrication: in engines, rod-bearing failure is usually a lubrication problem (Wikipedia 'Connecting rod'). Dust or grit on the slide speeds up wear ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Pinch and shear points between crank, rod and frame and at the ends of the slider's stroke, where the force is multiplied near dead centre and can crush a finger ⚑ [uncertain]; guard motor-driven builds. A flywheel stores energy and keeps turning after the power is cut ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) It stalls on a dead centre when the slider is the driver (Wikipedia): add a flywheel or a second crank at another angle. 2) The slider jams in a guide that is too short (igus 2:1 rule), or the cylinder or guide wears oval from the rod's side thrust (Wikipedia 'Connecting rod'): use a longer rod and a longer guide. 3) Printed pivot holes wear oval and the linkage starts to knock ⚑ [uncertain]: use metal pins with bushings or bearings. 4) Rods break from fatigue or in tension at high speed, and bearings fail through poor lubrication (Wikipedia 'Connecting rod'). 5) With a crank and rod of equal length the linkage can flip the wrong way at the line-up position (Thang). 6) Pivot nuts loosen from vibration: use lock nuts ⚑ [uncertain]. *(⚑ parts need confirming)*
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
  - [Print a Motion (Saltire Software, web app)](https://printamotion.com/): Define a crank-rocker, crank-slider or inverted crank-slider and download a 3D model of it to print *(licence: not stated ⚑ [uncertain])*
  - [PMKS+ (Planar Mechanism Kinematic Simulator, web app, WPI)](https://pmksplus.com/): Free, open-source browser tool for designing and simulating planar linkages with kinematic and force analysis *(licence: free and open source (licence not named on the page) ⚑ [uncertain])*
  - [Linkage mechanism designer and simulator (David Rector, Windows program)](https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/): Free program to sketch and animate linkages with pivots and sliding connectors, export images, video and 1:1 printouts *(licence: free to use (licence not stated) ⚑ [uncertain])*
  - [Slider crank mechanism (MarcinPaska, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/864144-slider-crank-mechanism): Simple printable slider-crank demonstration model *(licence: Creative Commons Public Domain (as listed by Printables))*
  - [Slider-Crank Linkage (Cookie Clicker irl cheat code) (rackjabbit_, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/283697-slider-crank-linkage-cookie-clicker-irl-cheat-code): A 12 V motor-driven slider-crank that pushes a metal shaft back and forth, assembled with M3 bolts and nuts *(licence: CC BY)*
  - [Mechanical mechanism library (HUANGYAN920, web app; listed as 曲柄滑块机构)](https://huangyan920.github.io/Mechanical/): Browser library of 257 parametric mechanism animations with presets for standard and offset (quick-return) slider-cranks *(licence: MIT (per the GitHub README))* *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: back-and-forth straight
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, input_output, make_it_yourself, making_tips_3d_printing, materials, play_and_precision, print_in_place, processes, removability, safety_notes

## 87 Four-bar linkage (incl. parallelogram linkage)

*motion conversion.* Four bars joined in a loop by pivots, which turns one motion into another shaped motion; the basic building block of most linkages

*Also covers:* Also covers the pantograph (a parallelogram linkage that copies motion at a larger or smaller scale). Also covers lost motion (deliberate free play before the driven part is picked up).

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
- **how_it_works**: Because the four bars form a closed loop, fixing one bar leaves only one way for the others to move: set the input's angle and every other part's position follows (one degree of freedom). The link lengths decide what happens: by Grashof's rule, if the shortest plus the longest bar are no longer than the other two added together, the shortest bar can turn all the way round, giving a crank-rocker (input turns, output swings), a double crank (both turn) or a double rocker (both swing) depending on which bar is shortest (Wikipedia; MechSimulator). Points on the coupler trace curves (coupler curves) ranging from near-straight lines to figure-eights. When opposite bars are equal (a parallelogram) the coupler stays parallel to the fixed bar, so a lamp head, loader bucket or wiper blade keeps its angle (Carnegie Mellon notes; Wikipedia); a pantograph arranges a parallelogram so that a fixed point, a tracing point and a pen stay on one straight line, so the pen copies the tracer's path scaled by the ratio of their distances from the fixed point (Nguyen Duc Thang, 'Bar pantograph 1'; 507 Mechanical Movements no. 246). A mechanism can also be given deliberate lost motion (free play before the driven part is picked up), so the output waits while the input moves: in Nguyen Duc Thang's 'Motion delay mechanism 1' a crank 'rotates idly' on its gear's shaft, so the output rack 'moves only after the blue gear makes around two revolutions', and adding more idle cranks lengthens the delay (Thang, 2700 Animated Mechanical Mechanisms part 2, p. 119).

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
- **input_output**: Rotation or swinging -> rotation, swinging, or a guided path. Crank-rocker: continuous rotation -> back-and-forth swing whose size is set by the link lengths; double crank: rotation -> rotation at a varying speed; parallelogram: rotation -> equal rotation, so a parallel link coupling passes rotation between parallel shafts with no backlash (Thang, 'Parallel link coupling'); pantograph: tracer motion -> pen motion scaled by k = OE/OC, e.g. 2:1 (Thang, 'Bar pantograph 1'). The force and speed ratios change through the motion; linkages 'generally reach a maximum speed and force when the bars are perpendicular' (gm0), and force passes best when the coupler meets the output bar at 90 degrees (the transmission angle; Carnegie Mellon notes), becoming poor below about 40 degrees (MechSimulator). Efficiency: high with good pivot bearings because nothing slides, but no reliable figure was found ⚑ [uncertain]. Shaft arrangement: all pivot axes parallel in the usual flat (planar) linkage; spherical and spatial four-bars also exist (Wikipedia). Back-drivable: usually yes, except at toggle positions, where the output cannot drive the input (Carnegie Mellon notes). *(⚑ parts need confirming)*
- **power**: passive (no power needed); driven by hand, a motor, a spring, gravity or an actuator. If power is lost it stops or falls under its load unless it is balanced (balanced-arm lamps use springs; Wikipedia) or parked over centre
- **removability**: removable: the pivots are bolts, pins, shoulder screws or snap pins that can be undone
- **reuse_cycles**: many times: taking the pivots apart does not harm them; life is limited by pivot wear
- **tools_needed**: A screwdriver or hex key and a spanner for the pivot bolts and lock nuts; none for snap-together printed demos; optionally a drill or reamer to bring printed pivot holes to size
- **seal**: none: it is an open linkage and does not seal anything
- **load**: Light to heavy: from pantographs and desk lamps to loader buckets, vehicle suspensions and oil-well pumpjacks (Wikipedia; Carnegie Mellon notes). If loads act only at the pivots, each bar is simply pushed or pulled along its length, and the pivots carry the load in shear. Weak spots: the pivots (wear and bending of the pins), positions with a poor transmission angle or close to a toggle position, where forces in the links and bearings rise sharply (MechSimulator), and sideways (out-of-plane) loads, which twist long thin bars.
- **adjustable**: Not usually. Adjustable link lengths (slotted holes, a row of pivot holes, or threaded rod ends) change the output motion; a pantograph's slides or pivot holes change its scale (507 Mechanical Movements no. 246; bce.gatien's printable pantograph copies at 1/2, 1/3, 1/4 or 1/6 scale, or the reverse by swapping pen and tracer).
- **play_and_precision**: Small with good bearings, but each pivot's clearance adds up and is magnified at the end of long links; for a printed pantograph, 'any sloppiness will be transferred to the drawing' (bce.gatien, Printables). Repeatable, because the geometry fixes every position. It needs all pivot axes parallel and the links stacked in their proper planes: a printed pantograph binds if the arms are not stacked in the same vertical plane (Collin_Builds, Printables). It tolerates little misalignment between pivots ⚑ [uncertain]. *(⚑ parts need confirming)*
- **access_needed**: not applicable: it is a mechanism assembled from bars and pivots, reached from wherever the bars are
- **materials**: Steel and aluminium bars and extrusions for machines and vehicles; wood, plywood and acrylic for models, lamps and pantographs ⚑ [uncertain]; 3D-printed PLA or PETG for demos and light robot arms. Pivots are usually steel bolts, shoulder screws or pins, often with plastic or bronze bushings or ball bearings (vachaj11's printed pantograph uses 608 ball bearings; Collin_Builds' uses M5 bolts, washers and nyloc nuts). The PantoProbe used brass tubing joints or flexible links (Hackaday). *(⚑ parts need confirming)*
- **maker_difficulty**: easy for a simple linkage or pantograph (flat parts joined with bolts); moderate to design one that gives a particular path or swing, which is easiest with a free simulator such as PMKS+, Linkage or MechSimulator

### Making it

- **processes**: 
  - 3D print (FDM): links print flat; many printable demos and pantographs
  - laser cut: ⚑ [uncertain] flat links in acrylic or plywood suit linkages well; no tested example was opened
  - woodwork: pantographs, treadles and lamp arms are traditional wooden linkages ⚑ [uncertain]
  - CNC: for metal links and brackets
  - off-the-shelf part: rod ends, shoulder screws, bushings and bearings for the pivots; aluminium bars or extrusion for the links *(⚑ parts need confirming)*
- **print_in_place**: no: usually printed as flat links and joined with bolts or pins (bce.gatien's pantograph assembles without hardware; others use bolts or bearings). Print-in-place pivots are possible with at least about 0.3 mm clearance (Prusa), but no tested print-in-place four-bar was opened ⚑ [uncertain] *(⚑ parts need confirming)*
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
- **environment_limits**: Printed PLA softens above about 60 °C and degrades in UV light, so use PETG or ASA near heat or outdoors (Prusa). Pivot clearance grows as holes wear, adding play (bce.gatien notes play shows directly in a pantograph's drawing); dust and lack of lubrication speed this up ⚑ [uncertain]. Balancing springs lose some force over time and must be re-adjusted ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Scissor-like closing gaps between links are pinch points, especially in motor- or spring-driven arms, and parallelogram arms with balancing springs store spring energy that can snap the arm when a link or pivot is removed ⚑ [uncertain]. Toggle and over-centre positions multiply force and can crush fingers ⚑ [uncertain]. None known for small hand-moved demos. *(⚑ parts need confirming)*
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
  - Multi-turn rotation limiter: its stacked-ring stops use the same lost-motion idea, each ring turning idly until it picks up the next

### Pictures, videos and models

- **links**: 
  - [Crank-Rocker 4-bar Linkage.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Crank-Rocker_4-bar_Linkage.gif): Animated crank-rocker: one link turns fully while the other rocks back and forth (made in GeoGebra) *(licence: CC BY-SA 4.0)*
  - [Parallel 4-bar Linkage 1.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Parallel_4-bar_Linkage_1.gif): Animated parallelogram, a parallelogram flipping to a contraparallelogram, and a contraparallelogram, side by side *(licence: CC BY-SA 4.0)*
  - [Pantograph animation.gif (Wikimedia Commons, by AlphaZeta)](https://commons.wikimedia.org/wiki/File:Pantograph_animation.gif): Animated pantograph copying a drawing at a different scale *(licence: Public domain)*
  - [507 Mechanical Movements, No. 246: pantograph for copying, enlarging and reducing plans](https://507movements.com/mm_246.html): 1868 drawing, with an animated version, of a drawing pantograph with adjustable slides to change the scale *(licence: Book public domain; website animation link only)*
  - [Parallelogram Mechanism 1 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=prMefg7NCsc): CAD animation of a parallelogram linkage getting past its dead points with extra cranks set at different angles *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Four-Bar Linkage simulator (MechSimulator)](https://mechsimulator.com/tools/four-bar-linkage/): Interactive four-bar: change the four link lengths and see the Grashof class, transmission angle, output speed and a traced coupler curve *(licence: link only (no licence stated))*
  - [PMKS+ (Planar Mechanism Kinematic Simulator, web app, WPI)](https://pmksplus.com/): Free, open-source browser tool for designing and simulating planar linkages with kinematic and force analysis *(licence: free and open source (licence not named on the page) ⚑ [uncertain])*
  - [Linkage mechanism designer and simulator (David Rector, Windows program)](https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/): Free program to sketch and animate linkages, then export images, video, DXF (per Hackaday) and 1:1 printouts to use as templates *(licence: free to use (licence not stated) ⚑ [uncertain])*
  - [Print a Motion (Saltire Software, web app)](https://printamotion.com/): Define a crank-rocker (or crank-slider) and a coupler point, then download a 3D model of that exact linkage to print *(licence: not stated ⚑ [uncertain])*
  - [Mechanical mechanism library (HUANGYAN920, web app)](https://huangyan920.github.io/Mechanical/): Browser library of 257 parametric mechanism animations, including four-bar, crank-rocker, double crank, double rocker, parallel four-bar, antiparallelogram, pantograph, wiper and pumpjack linkages *(licence: MIT (per the GitHub README))*
  - [Pantograph 200mm, 250mm, 300mm (bce.gatien, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/898021-pantograph-200mm-250mm-300mm): Hardware-free printable pantograph copying at 1/2 to 1/6 scale (or enlarging by swapping pen and tracer), with 0.1/0.2/0.3 mm clearance versions and a tolerance test *(licence: CC BY-SA)*
  - [Sharpie Pantograph (Collin_Builds, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/254344-sharpie-pantograph): Doubling or halving pantograph for teaching ratios, assembled with M5 bolts, washers and nyloc nuts *(licence: CC BY-NC)*
  - [Pantograph for scaling up using 608 bearings (vachaj11, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/15364-pantograph-for-scaling-up-using-608-bearings): Printed pantograph whose pivots run on five 608 ball bearings, with M5 and M3 screws *(licence: CC BY)* *(⚑ parts need confirming)*
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
  - https://cs448m.github.io/lectures/machines/doc/2.pdf

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: back-and-forth turning
- **motion_out**: back-and-forth turning
- **shaft_layout**: parallel, at an angle
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, make_it_yourself, materials, play_and_precision, print_in_place, processes, safety_notes

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
- **environment_limits**: Printed PLA parts soften above about 60 C and degrade in UV light, so keep them out of hot cars and sunlight; PETG copes to about 80 C (Prusa). Metal teeth need lubricating (KHK's start-up checklist asks whether proper lubrication has been supplied), while self-lubricating plastic racks such as iglidur run dry (igus). Vibration can shift racks unless they are dowel-pinned (KHK). ⚑ [uncertain] Open teeth collect dust and grit, which speeds up wear, and plastic racks under a constant load may creep over time. *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part ⚑ *needs confirming (best guess): first-listed process is off-the-shelf, but `print_in_place` is yes*
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits

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
- **input_output**: Short straight motion -> long straight motion (or the reverse, for force). Force: for a lift pushed sideways at its sliding base end (the screw-jack layout), force needed = n x (load + half the lift's weight) / tan(theta), where theta is the bar angle from horizontal and n the number of stages (Saxena 2016, building on Spackman 1989): per stage about 5.7 x the load at 10 degrees, 2.7 x at 20 degrees and 1 x at 45 degrees. The motion ratio is the inverse, so a small base movement gives a big height change when the bars are low and a smaller one near the top. Ratios seen in practice: Thang's lazy tongs animations show about 3-4 x travel (or about 3 x force when used the other way round, as in a lazy-tong riveter), and two scissor chains in series reach 10 x (2 x 5). Efficiency: every pin rubs, so friction losses grow with the number of joints ⚑ [uncertain: no figures found]. Arrangement: input and output move in straight lines, either along the same line (lazy tongs; same or opposite directions) or at right angles (lift: sideways input, upward output). Back-drivable: yes: a load pushes the drive back unless the drive is self-locking (fine-lead screw) or has a brake or holding valve. *(⚑ parts need confirming)*
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
- **environment_limits**: Outdoor scissor lifts are limited by wind (below 28 mph for outdoor-rated machines) and need firm, level ground (OSHA scaffolding eTool). Printed PLA softens above about 60 C (Prusa). ⚑ [uncertain] Pivot holes in printed or wooden arms wear and plastic creeps under a constant load, which adds play and sag over time; outdoor steel lifts need their pins greased and kept free of rust. *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: something to grip ⚑ *needs confirming (best guess): worked out from its name, but joining parts is not one of its two main jobs*
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: straight push or pull
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output

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
- **input_output**: Ring rotation -> radial closing or opening of a round hole (each blade swings roughly 20-40 degrees, Kapy CAD); the relation between ring angle and hole size is set by where the pivots and slots are placed and is generally not a straight line ⚑ [uncertain]. Efficiency: low to moderate, because the blades slide on each other and on the rings; iris mechanisms 'easily bind in the presence of too much friction' (Mechatronics). Shaft arrangement: in line: the ring turns about the same axis as the opening. Back-drivable: yes in simple designs (pushing the blades apart turns the ring back, as in LoboCNC's first iris box), unless a lock, detent, spring or self-locking drive such as a worm holds it. *(⚑ parts need confirming)*
- **power**: passive (no power needed): usually turned by hand with a lever, ring or knob, or snapped shut by a spring; can be motor-driven, e.g. the Arduino-controlled irising chicken-coop door that uses limit switches to stop the motor (Hackaday). ⚑ [uncertain] A motor-driven iris keeps its last opening after a power cut only if the drive holds it (friction, a worm gear or a brake) *(⚑ parts need confirming)*
- **removability**: removable: rings and blades are held by screws, retaining rings or snap-together covers and can be taken apart; print-in-place iris boxes are single prints and are not meant to come apart (LoboCNC is unsure a replacement leaf can even be fitted)
- **reuse_cycles**: many times for screwed or clipped designs; print-in-place iris boxes are never taken apart
- **tools_needed**: A screwdriver for screwed designs (Make:'s iris uses machine screws with Delrin washers between layers); none for snap-together printed kits; a hobby knife and a small screwdriver to cut away tabs and free a print-in-place iris box (LoboCNC); fine sandpaper or a small round file to ease tight printed fits (osamutake; Mechatronics)
- **seal**: loose: the overlapping blades cover the hole but leave gaps round the blade stack and rings; an iris is 'difficult to seal in any way' (Mechatronics). Industrial iris valves use a twisting fabric or rubber sleeve instead of blades, with two fabric layers for dusty fine powders (Hapman)
- **load**: light: the blades are thin and the closing force is low; Mechatronics notes iris mechanisms are generally kept to low-force jobs such as camera apertures, and that thin printed pivot pins tend to snap. Weakest against anything pushing on the blades from the front or back (out of their plane); iris valves cannot close through a standing column of material or handle heavy abrasive material (Hapman).
- **adjustable**: yes: the opening can be set to any size between fully open and its smallest (or to set sizes with detents); the range itself is fixed by the blade and slot geometry
- **play_and_precision**: Small to noticeable: each blade has play at its pivot and at its pin in the slot, and the blade stack needs just enough vertical room to slide (Kapy CAD suggests 0.25-0.40 mm for printed PLA or PETG). Too little clearance and friction makes it bind (Mechatronics; Kapy CAD). It tolerates little misalignment: the rings must stay concentric, and a wobbly outer ring caused jams in LoboCNC's first iris box until he redesigned it.
- **access_needed**: not applicable: it is a self-contained ring unit fitted into a hole in a panel, door, lid or lens
- **materials**: Hand-built: sheet brass, 1/8 in plywood or acrylic blades with Delrin (acetal) washers (Make:), laser-cut plywood with bamboo-skewer pins (Maker Design Lab). 3D printed: PLA or PETG (osamutake recommends well-dried PETG for accuracy). Kitchen tools: injection-moulded polypropylene (the spaghetti measure, iris-calculator). Iris valve sleeves: nylon, Terylene (polyester), PTFE, urethane, nitrile (Buna-N) or natural rubber (Hapman). ⚑ [uncertain] Camera and laboratory irises use very thin metal blades, such as steel, in a metal housing. *(⚑ parts need confirming)*
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
- **environment_limits**: Printed PLA softens above about 60 C and degrades in UV light, so keep printed irises out of hot cars and sunlight; PETG copes to about 80 C (Prusa). Print PETG from dry filament for accurate fits (osamutake). Friction is the enemy: anything that adds friction makes the blades bind (Mechatronics). ⚑ [uncertain] Dust, grit, swelling of wooden parts in damp air, or slight warping of the thin blades can jam the blade stack. *(⚑ parts need confirming)*
- **safety_notes**: The closing blades form a scissor-like pinch and shear point; hand and spring-driven toy irises have little force (Mechatronics says a finger in his spring-loaded box barely feels it), but a motor-driven iris door can trap fingers or animals, so use a weak, slow drive with limit switches (as on Hackaday's chicken-coop door). ⚑ [uncertain] Thin metal blades can have sharp edges, and freeing a print-in-place box with a hobby knife calls for cutting away from your fingers. *(⚑ parts need confirming)*
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
  - [Iris mechanism based on 3 blades (Dynamite, Printables)](https://www.printables.com/model/270201-iris-mechanism-based-on-3-blades): Easy-to-print three-blade iris that opens and closes smoothly in a circle; plates, shutters and shutter pins assembled by hand *(licence: CC BY-NC-SA)*
  - [Make an Awesome Mechanical Iris (Chris Schaie, Make:)](https://makezine.com/projects/mechanical-iris/): Step-by-step build of a 5-leaf, linkage-driven iris in sheet brass or plywood, cut on a CNC router or laser cutter, with downloadable DXF and CRV files *(licence: not stated ⚑ [uncertain])*
  - [Making a Mechanical Iris - Laser Cut Wood (Maker Design Lab)](https://makerdesignlab.com/experiments/mechanical-iris-prototype/): Laser-cut plywood iris with press-fitted bamboo-skewer or plywood pins; templates in PDF, SVG and DXF *(licence: not stated ⚑ [uncertain])* *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: back-and-forth turning
- **shaft_layout**: in line
- **overload_response**: not applicable
- **clicks**: clicks
- **tools**: hand tools
- **load_max**: light
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, make_it_yourself, materials, power, safety_notes

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
- **input_output**: One pull (or push) -> two pulls (or pushes) in roughly the same direction, or many when bars are stacked. Force split: each end carries the total force multiplied by the distance from the pivot to the OTHER end, divided by the bar length, so a centred pivot gives 50/50 and a pivot at one third gives 2:1 (Rural Heritage). Movement: for a centred bar the input moves by the average of the two end movements, so if one end is stopped the other end travels twice as far as the input. Efficiency: close to lossless apart from pivot friction; no measured figure was found ⚑ [uncertain]. Shaft arrangement: not shafts; the input and outputs are forces roughly parallel to the line of pull. Back-drivable: yes; it is a plain lever with nothing to lock it, so pulling on an output moves the input and the other outputs. *(⚑ parts need confirming)*
- **power**: passive (no power needed); it simply passes on whatever pull or push it is given (from a horse, a hand lever, a brake pedal, a spring or a motor-driven tendon)
- **removability**: removable: each bar is hung on pins, hooks or clevis pins and can be unhooked; brake balance bars and equalisers bolt in
- **reuse_cycles**: effectively unlimited: nothing is deformed when it is unhooked and re-hung; the limit is wear of the pivot holes and pins
- **tools_needed**: None for hook-and-pin versions (farm eveners); spanners or hex keys for bolted pivots, locknuts on a threaded brake balance bar (Street Muscle / Tilton), and turnbuckles or screws to set cable lengths (ASEE test rig used a turnbuckle; the Frontiers hand needs precise tendon tension calibration)
- **seal**: none: it is an open bar and pins; nothing about it seals
- **load**: Light to heavy depending on size: small plastic bars in robot hands (the Frontiers whiffletree failed at 42.8 N per output), steel balance bars in brake pedal boxes, hardwood eveners 42-48 in long for horses (Hansen Wheel), and multi-level whiffletrees that load whole aircraft wings in structural tests (ASEE; SwRI). Strong along the line of pull; the bar itself is loaded in bending, highest at the centre pivot, so it needs to be deepest there ⚑ [uncertain]. Weak against sideways pushes and twisting, and it cannot carry any load once an end has run out of travel. *(⚑ parts need confirming)*
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
- **making_tips_3d_printing**: 1) Print each bar lying flat with its pivot holes vertical, so the bending load in the plane of the bar runs along the printed perimeters rather than across layers. 2) Holes print undersized: oversize them in the model or ream them out (EngineerDog suggests about 0.005 in over size), and use metal pins or a short brass tube as a bushing so the bar tips freely; any friction at the pivot stops it sharing (MGA Guru's advice for car equalisers: the arm should swing freely with finger force). 3) Put the three holes on one straight line and use the lever rule for their spacing: equal gaps for 50/50, a pivot one third along for a 2:1 split (Rural Heritage). 4) Give every bar enough room to tip: allow at least the largest difference in travel you expect between outputs (the Frontiers hand allows 21 mm), and stagger or shorten the lower bars in a stack so they cannot collide. 5) For tendon-driven grippers, add a screw or turnbuckle to each tendon so you can set the lengths; the Frontiers team notes that precise tendon tension calibration is needed. 6) If you want to hold a grasp or stop one finger, add a lock per output (OpenBionics uses locking buttons, or a servo-driven cam). 7) Material: PETG or nylon cope with heat and constant load better than PLA, which softens above about 60 C (Prusa); make the bar deepest around the centre hole, where bending is greatest ⚑ [uncertain]. *(⚑ parts need confirming)*
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
- **safety_notes**: Brake balance bars are safety-critical: a badly set bias can lock the wheels and spin the car under heavy braking (Tilton via Street Muscle). If one end's cable or link breaks, the bar swings to its stop and the remaining end may suddenly carry the whole load or none of it, so size every link for the full load ⚑ [uncertain]. Swinging bars and taut cables create pinch points; heavy structural-test whiffletrees can fall if a link fails. *(⚑ parts need confirming)*
- **common_failures**: 1) A bar runs out of travel or hits its stop, so it stops sharing and one output takes all the load: give it more room or shorter output differences (Frontiers). 2) A binding pivot, bent pin or trapped cable stops it equalising: keep pivots free and let cable housings float (MGA Guru). 3) Unequal starting lengths mean one side must take up its slack before the other starts pulling: set lengths so the bars sit level (Frontiers' tendon calibration; parking-brake adjustment). 4) Pressure concentrated at the few claws of a framed wiper blade causes uneven wear and streaks (Stoner Car Care). 5) A threaded bias bar creeps out of adjustment when its locknuts are not tightened (Tilton). 6) Printed or wooden bars crack at the centre hole, where bending is greatest ⚑ [uncertain]. *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: straight push or pull
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, input_output, load, making_tips_3d_printing, safety_notes

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
  - tensioning (takes up slack and holds): it winds tension into a cable or tendon and holds it while the motor holds its angle
  - none of the locking behaviours: the tension always tries to untwist the strings, so it is not self-locking ⚑ [uncertain] *(⚑ parts need confirming)*
- **holding_principle**: not a holding joint (it moves or passes on motion): it passes motor torque on as a pull, powered hold: the pull is kept only while the motor (or its gearbox) holds the twist
- **input_output**: Continuous rotation (many turns) -> straight-line pull (tension only; it cannot push). Contraction x = L - sqrt(L^2 - theta^2 r^2), so the travel per turn grows as the twist builds and the pull per unit of motor torque shrinks; from the force relation F = torque / (r x tan(alpha)) with tan(alpha) = theta x r / p (German Wikipedia), the ratio is very high near zero twist. Typical stroke: under about 25% of the string length in most published designs, 81% with multi-string overtwisting (Tavakoli et al. 2016). Efficiency: about 79% for the strings alone in a high-power ankle exoskeleton (Tan and Collins 2025); German Wikipedia quotes 90%. Shaft arrangement: in line; the strings run straight out along the motor axis (a TSA does not need the motor mounted at right angles to the cable, unlike a spool; Park and SunSpiral, NASA). Back-drivable: yes in principle, since the load's pull always tries to untwist the strings and turn the motor backwards, but a high-ratio gearmotor's friction may hold it ⚑ [uncertain]. *(⚑ parts need confirming)*
- **power**: powered (needs a motor to twist the strings; the same principle also works by hand, as in the Spanish windlass). If power is lost, the load tries to untwist the strings and run back unless the motor's gearbox friction or a brake holds the twist ⚑ [uncertain]. *(⚑ parts need confirming)*
- **removability**: removable: the strings are tied or looped to the motor hub and load and can be untied and replaced; they are a wear part
- **reuse_cycles**: many times: the hardware lasts, but the strings wear out; string life ranges from hundreds of cycles under heavy load in thin line (Tavakoli et al.) to 18,000-190,000 cycles for 1-2 mm Dyneema ropes at 15-25 kg (Nguyen et al. 2025)
- **tools_needed**: Scissors and knots (or loop ties) for the strings; small screwdriver or hex key for the motor hub and mounts; a lighter or heat sealer for synthetic string ends ⚑ [uncertain]; grease (Tan and Collins massaged Krytox grease into their Vectran braid) *(⚑ parts need confirming)*
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
  - 3D print (resin): small, smooth string hubs and separators ⚑ [uncertain]
  - CNC: machined hubs and housings for high-force designs (e.g. the Tan and Collins ankle exoskeleton used a separate output shaft on radial and thrust bearings) *(⚑ parts need confirming)*
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
- **environment_limits**: Friction between the twisting strings makes heat: at high power Dyneema exceeded its thermal rating and split within 3 minutes, and grease was needed to spread the heat (Tan and Collins). Life drops sharply with load (Tavakoli et al.; Nguyen et al.). Synthetic strings stretch and may creep under a constant load, changing the calibration over time, and aramid and some polymers weaken in sunlight ⚑ [uncertain]. Printed parts near the motor: PLA softens above about 60 C, PETG copes to about 80 C (Prusa). *(⚑ parts need confirming)*
- **safety_notes**: The strings carry a large tension from a small motor: a string that snaps can drop the load or whip back, so keep it enclosed and do not stand under a lifted load ⚑ [uncertain]. Twisting strings can catch fingers, hair or clothing like other rotating parts (OSHA machine guarding: rotating shafts can grip hair and clothing). A load may run back if the motor loses power or the twist is released ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) Strings fray or snap at sharp edges, knots or grub screws: round every edge and use loop ties (Crosby et al.). 2) Strings overheat and fuse or split at high power: grease them and choose Vectran (Tan and Collins). 3) Overtwisting forms knots that jam in the separator and will not untwist: limit the number of turns (Tavakoli et al.). 4) The motor's bearings wear from the axial pull and side load: add a thrust bearing (Tan and Collins). 5) Position drifts from the model because the strings stretch and the bundle radius changes: re-calibrate or use closed-loop control (Tavakoli et al.; Hizook). 6) With no load or return spring the strings go slack and may snarl round each other ⚑ [uncertain]. *(⚑ parts need confirming)*
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

### Finder tags

- **connects**: not applicable
- **power_source**: electricity ⚑ *needs confirming (source uncertain): `power` is marked [uncertain] here: "…n back unless the motor's gearbox friction or a brake holds the twist [uncertain].…"*
- **power_loss**: lets go ⚑ *needs confirming (source uncertain): `power` is marked [uncertain] here: "…n back unless the motor's gearbox friction or a brake holds the twist [uncertain].…"*
- **motion_in**: steady turning
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…or hub and mounts; a lighter or heat sealer for synthetic string ends [uncertain]; grease (Tan and Collins mas…"*
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: powered

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, input_output, power, processes, safety_notes, special_behaviour, tools_needed

## 196 Quick-return mechanism (Whitworth, crank and slotted lever)

*motion conversion.* A crank driving a slotted lever so the working stroke is slow and the return stroke is fast, as in shaping machines

### What it is

- **plain_name**: A turning wheel with a pin that slides up and down in a slot of a swinging arm, so the arm pushes a tool forward slowly and pulls it back quickly
- **term**: Quick-return mechanism (crank and slotted lever; Whitworth quick-return mechanism)
- **aliases**: 
  - quick-return motion
  - crank and slotted lever mechanism / crank and slotted link mechanism
  - slotted-link mechanism; rocker arm (the slotted lever's name on shaping machines)
  - shaper mechanism / shaping-machine drive
  - Whitworth quick-return mechanism / Whitworth quick return motion (strictly the version whose slotted link turns right round; many web pages and printed models use the name for the crank and slotted lever as well)
  - coulisse mechanism (the name used in Nguyen Duc Thang's animations and on DT Online)
  - offset slider-crank quick return (a different linkage that also returns faster)
  - schwingende Kurbelschleife (crank and slotted lever) / umlaufende Kurbelschleife (Whitworth type) (German)
  - 转动导杆急回机构 (Chinese, 'rotating guide-bar quick-return mechanism', the Whitworth type); 曲柄导杆刨床机构 (Chinese, 'crank and guide-bar shaper mechanism')
- **family**: motion conversion
- **other_families**: sliding, telescoping & linear motion
- **one_liner**: A crank turning at steady speed drives a block that slides in a slotted lever, so the lever (and the tool slide, or ram, it pushes) moves slowly on the working stroke and returns quickly on the idle stroke, saving time on machines that only work in one direction.
- **complexity**: A small assembly of about five or six parts: a crank (on machines, a large 'bull gear' with a crank pin on an adjustable radial slide); a sliding block on the crank pin; a slotted lever (rocker arm) pivoted to the frame; a short link from the top of the lever to the ram; and the ram (the sliding tool carrier) running in guides. The Whitworth type adds a second crank-like arm because its slotted link turns right round.
- **how_it_works**: The crank turns at a steady speed and its pin, fitted with a sliding block, runs up and down the slot in the lever while swinging it from side to side. The two ends of the lever's swing happen where the lever just touches the crank-pin circle (is tangent to it), and those two points split each crank turn into a long part and a short part: the long part (more than half a turn) gives the slow forward, working stroke and the short part gives the fast return stroke. A short link turns the lever's swing into straight back-and-forth motion of a ram. In the Whitworth type the crank is longer than the distance between the two fixed pivots, so the slotted link turns right round and a connecting rod drives the ram; the uneven timing comes from the same offset idea (IIT Kharagpur virtual lab; Wikipedia 'Slider-crank linkage', inversions).

### Finder attributes

- **job**: 
  - change the kind of motion: turns steady rotation into a back-and-forth swing or a back-and-forth straight stroke
  - change speed or turning force: the working stroke is slow and strong, the return stroke fast
- **motion**: multiple: continuous rotation of the crank in; rocking of the slotted lever (typically well under 90 degrees of swing ⚑ [uncertain]; gzumwalt's printed model swings about 14 degrees each way) and straight back-and-forth sliding of the ram out *(⚑ parts need confirming)*
- **degrees_of_freedom**: 1: the crank angle fixes the position of the block, lever and ram
- **special_behaviour**: motion conversion (e.g. rotary to linear): steady rotation becomes back-and-forth motion whose forward stroke takes longer than its return stroke (quick return)
- **holding_principle**: not a holding joint (it moves or passes on motion): it converts rotation into a back-and-forth stroke; the pin, block and slot stay together because they interlock (form-fit)
- **input_output**: Continuous rotation -> back-and-forth (reciprocating) motion: a rocking lever, or a straight ram stroke when a link and slide are added. Time ratio (working time : return time) = crank angle during the working stroke / crank angle during the return stroke (IIT Kharagpur virtual lab); for the crank and slotted lever it is set by crank radius / distance between the fixed centres, e.g. 75 mm / 150 mm gives 240:120 degrees = 2:1 (ESE 2014 exam question on Testbook). Typical ratios are roughly 1.5:1 to 3:1 ⚑ [uncertain: HUANGYAN920's interactive model is set up for 2-3; no reference range from a design guide found]. Ram speed varies through each stroke (it is not a constant speed) ⚑ [uncertain: Wikipedia claims a constant cutting speed but that article is tagged for rewrite]. Efficiency: no reliable figure found ⚑ [uncertain]; losses come from the block sliding in the slot and the ram sliding in its guides. Shafts: the crank shaft and the lever pivot are parallel. Back-drivable: in principle yes (pushing the ram turns the crank) except at the two ends of the stroke, where the lever is tangent to the crank circle and the push goes straight through the crank (dead points) ⚑ [uncertain]; in practice it is always driven from the crank. *(⚑ parts need confirming)*
- **power**: passive (no power needed): it is driven by a motor, line shaft or hand crank; if the drive stops, the ram simply stops where it is
- **removability**: removable: the crank, lever, links and ram are held by pins, screws or shafts and can be taken apart
- **reuse_cycles**: many times: it can be dismantled and reassembled repeatedly; the limit is wear of the block, slot and pins, not the assembly
- **tools_needed**: Screwdriver or hex key (and spanner) for pivot screws or shoulder bolts; small files or sandpaper to smooth printed slots; a soldering iron for heat-set inserts in some printed models; a little oil or grease for the slot and ram guides
- **seal**: none: it is an open mechanism and does not seal anything
- **load**: Medium to heavy on metal shaping and slotting machines, where it pushes a cutting tool through metal; printed desktop models are light-duty demonstrators ⚑ [uncertain: no load ratings found]. The crank pin, sliding block, slot walls and lever pivot carry the full working force, and the ram needs its own guides because the linkage also pushes it sideways. Wikipedia warns that forcing the machine to its maximum stress capacity will break it. *(⚑ parts need confirming)*
- **adjustable**: Yes on shaping machines: moving the crank pin further out along the radial slide on the bull gear lengthens the stroke (ISRO 2022 exam question on Testbook; The Engineers Post describes the radial slide and sliding block). Because the timing depends on crank radius / centre distance, changing the crank radius also changes the time ratio (ESE formula). Printed models are usually fixed.
- **play_and_precision**: Small to noticeable play: clearance between the crank pin or block and the slot, at each pin joint and in the ram guides all add up ⚑ [uncertain]. The ends of the stroke repeat well because they are set by geometry, but the ram's speed changes throughout each stroke, so it is not used where steady speed or exact positioning matters. The crank shaft and lever pivot must be parallel and the ram guides lined up with the lever's motion; it tolerates little misalignment ⚑ [uncertain]. *(⚑ parts need confirming)*
- **access_needed**: not applicable: it is a mechanism inside a frame, reached wherever the frame opens
- **materials**: Machine tools use cast-iron frames and steel or iron cranks, levers and blocks ⚑ [uncertain: no materials list found]. Printed models use PLA for all links with metal screws, pins or shoulder bolts as pivots: AjaxJones used a 3 mm bolt and a 10 mm outside-diameter bearing; WayTooManyHobbies used nylon shoulder bolts and heat-set inserts; Eng. Yehia used M4 screws, washers and spacers. *(⚑ parts need confirming)*
- **maker_difficulty**: easy to moderate: only a handful of flat parts that print without supports, but the slot must be smooth, the pivots parallel and the ram guide low-friction (gzumwalt calls his model a low-precision print that still needs trimming and filing)

### Making it

- **processes**: 
  - 3D print (FDM): several free printable models (gzumwalt, Eng. Yehia, AjaxJones, WayTooManyHobbies)
  - laser cut: ⚑ [uncertain] the crank, lever and links are flat profiles that suit laser-cut acrylic or plywood, but no tested example was found
  - CNC: the traditional way for metal shaping machines
  - woodwork: ⚑ [uncertain] flat links and a slotted lever suit wooden automata and demonstration models, no tested example found
  - off-the-shelf part: bearings, shoulder bolts, dowel pins, a linear slide for the ram and a gear motor or servo *(⚑ parts need confirming)*
- **print_in_place**: no: printed models are printed as separate flat parts and assembled with screws, printed axles or shoulder bolts; no print-in-place version was found
- **making_tips_3d_printing**: 1) Print the crank, lever and links flat on the bed; gzumwalt printed all parts at 0.15 mm layers, 20% infill and no supports. 2) Leave clearance for moving parts: Prusa suggests starting with at least 0.3 mm for movable parts and adjusting after a test print. 3) Keep a sliding block on the crank pin rather than running a bare pin in the slot: German Wikipedia ('Kurbelschleife') notes wear is lower when the sliding block is kept; a small ball bearing on the pin (AjaxJones uses a 3 mm bolt and a 10 mm OD bearing) rolls instead of rubbing ⚑ [uncertain for a rolling bearing in a slot: it rolls on one wall at a time]. 4) Make the slot walls smooth: file off build-plate 'ooze' (elephant's foot) and any seams, and test-fit, trim, file and sand moving surfaces until they move freely (gzumwalt). 5) Use metal pivots: M3-M4 screws with washers and spacers (Eng. Yehia), nylon shoulder bolts in heat-set inserts (WayTooManyHobbies), or a small bearing (AjaxJones). 6) The ram guide (rail) needs lubrication: Eng. Yehia uses a little machining oil so the rail slides smoothly. 7) Drive it with a slow motor: gzumwalt uses an N20 60 rpm gear motor on 3 V geared 2:1, about 15 rpm; Eng. Yehia uses a continuous-rotation servo. 8) AjaxJones suggests counterweighting the main wheel to balance the heavy connecting rod pivot. 9) PLA is fine for demonstrators; keep it below about 60 °C (Prusa). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Gear motor (e.g. 'N20 gear motor', 'TT gear motor') or continuous-rotation servo; ball bearings (e.g. 3 x 10 mm, flanged bearings); shoulder bolts (shoulder screws) or dowel pins as pivots; heat-set threaded inserts; a linear slide, linear guide rail or bushings on a rod for the ram (search 'miniature linear guide', 'linear bushing'); retaining rings (e-clips, circlips); washers and spacers. On old machine tools the parts are called bull gear, crank pin, sliding block, rocker arm and ram.
- **rules_of_thumb**: 
  - Time ratio = time of working (cutting) stroke / time of return stroke = crank angle during the working stroke / crank angle during the return stroke, because the crank turns at constant speed (IIT Kharagpur Mechanisms and Robotics virtual lab).
  - Crank and slotted lever: cos(alpha/2) = crank radius / distance between the fixed centres, where alpha is the crank angle for the return stroke; the working stroke uses beta = 360 - alpha degrees. Example: 75 mm crank, 150 mm between centres gives alpha = 120 degrees, beta = 240 degrees, ratio 2:1 (ESE 2014 exam question, worked on Testbook).
  - Stroke length = 2 x (slotted lever length) x cos(alpha/2) = 2 x lever length x crank radius / centre distance (Chutia, ADBU Journal of Engineering Technology 4(1), 2016: stroke = 2 AP sin(90 - alpha/2)). So a longer crank (crank pin further out) gives a longer stroke (ISRO 2022 exam question) and also a larger time ratio.
  - The crank radius must be smaller than the centre distance for the lever to rock; if the crank is longer than the distance between the fixed pivots, the slotted link turns right round, which is the Whitworth (rotating) form (German Wikipedia 'Kurbelschleife': schwingende vs umlaufende Kurbelschleife; IIT Kharagpur).
  - General quick-return linkages: time ratio Q = (180 + beta) / (180 - beta), where beta is the imbalance angle; rearranged, beta = 180 x (Q - 1)/(Q + 1) (Wikipedia 'Four-bar linkage', citing Myszka, Machines and Mechanisms).
  - Whitworth type: the ram reaches the ends of its stroke when the crank pin lies on the line through the lever pivot at right angles to the fixed link, so cos(half the return angle) = fixed-link length / crank length ⚑ [uncertain: follows from the geometry described by IIT Kharagpur; the formula itself was found only in a vendor explainer].
  - Keep a sliding block between crank pin and slot: wear is lower than with a bare pin in the slot (German Wikipedia 'Kurbelschleife').
  - For printed moving parts start with at least 0.3 mm clearance and adjust after a test (Prusa, 'Modeling with 3D printing in mind'). *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - The metal shaping machine (shaper) in a school or model-engineering workshop, whose ram cuts slowly forward and snaps back (Wikipedia 'Shaper')
  - Slotting machines (vertical shapers) and some power-driven saws (Wikipedia 'Quick return mechanism'; IIT Kharagpur)
  - Screw presses and other machines listed by Wikipedia that only do work in one direction
  - Printed desk models and classroom demonstrators of the 'Whitworth' mechanism on Printables
- **when_to_use**: Use it when a motor turns steadily but the useful work happens in only one direction of a back-and-forth stroke: pushing a cutter, scraper, punch or pusher slowly and firmly, then pulling it back fast to save time. Examples for makers: a desktop shaper or scraper, a pusher or feeder that moves parts one way (Wikipedia lists cutting machines and package-moving devices as quick-return uses), an automaton that strikes slowly and returns fast, or a classroom model showing why a crank's timing can be uneven. It is simple, all-mechanical, needs no electronics or limit switches, and the stroke length can be made adjustable by moving the crank pin.
- **when_not_to_use**: Avoid it when you need the same speed in both directions (use a slider-crank or a Scotch yoke), a constant speed through the stroke or a pause at the ends (use a cam and follower), a long stroke or one that can stop anywhere and reverse on command (use a lead screw and nut, rack and pinion, belt or a linear actuator), or very quiet and play-free motion (the block sliding in the slot wears and rattles). For high forces with adjustable speed, modern shapers use hydraulic cylinders instead (Wikipedia 'Shaper'; The Engineers Post).
- **environment_limits**: Printed PLA parts soften and deform above about 60 °C and degrade in UV light (Prusa PLA guide), so keep PLA models out of hot cars and sunny windows. Dust and grit in the slot and on the ram guide speed wear, and the sliding surfaces need occasional oil or grease ⚑ [uncertain: general practice; Eng. Yehia oils the ram rail]. The sudden reversals at each end of the stroke shake a light frame at speed ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Motor-driven versions have shear and pinch points between the crank, the slotted lever, the ram and the frame, and the ram moves fastest on its return, so keep fingers, hair and loose items clear and guard the moving parts ⚑ [uncertain: general machine-guarding practice]. Do not push the mechanism to its maximum stress or speed; Wikipedia warns the machine will break. *(⚑ parts need confirming)*
- **common_failures**: 1) Wear and growing play where the pin or block rubs in the slot, causing knocking at each reversal: keep a sliding block (German Wikipedia), lubricate, or use a harder pin. 2) The ram binding in its guides: oil the rail (Eng. Yehia) and line the guides up with the lever. 3) Printed parts sticking because of first-layer 'ooze', seams or stringing: file edges and test-fit, trim and sand moving surfaces (gzumwalt). 4) The lever or crank pin breaking from overloading or running too fast (Wikipedia). 5) Wrong proportions: if the crank is longer than the centre distance the lever cannot rock and must turn right round (Whitworth form), which jams a design laid out as a rocking lever ⚑ [uncertain]. 6) Stalling at a dead point when driven from the ram side ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Slider-crank (crank and connecting rod): same family (the quick-return mechanisms are inversions of the slider-crank chain), but an in-line slider-crank takes equal time each way; offsetting the slider line gives a milder quick return (Wikipedia 'Slider-crank linkage')
  - Scotch yoke: also a crank pin in a slot, but the slotted yoke slides straight and gives equal, sine-wave strokes with no quick return
  - Four-bar linkage (crank-rocker or drag-link): can also be laid out with an imbalance angle to give a quick return, using only pin joints (Wikipedia 'Four-bar linkage')
  - Cam and follower: can give any motion shape, including a slow push, a fast return and a pause at the ends
  - Rack and pinion, or lead screw and nut: long straight strokes that can stop anywhere and reverse on command
  - Hydraulic or electric linear actuator: modern replacement on shapers, with adjustable speed and force
  - Geneva drive and intermittent gears: other ways of getting uneven (stop-go) timing from steady rotation

### Pictures, videos and models

- **links**: 
  - [Quick Return Mechanism 1.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_1.gif): Animated quick-return linkage: the input crank (cyan) drives an output link (pink) that returns faster than it goes forward; the lead image of Wikipedia's article *(licence: CC BY-SA 4.0)*
  - [Quick Return Mechanism 2.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_2.gif): Animated quick-return linkage captioned on Wikipedia as one of Whitworth's quick return mechanisms *(licence: CC BY-SA 4.0)*
  - [Shaper.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Shaper.png): Diagram of a shaping machine's crank and slotted-lever drive; Wikipedia notes the drive arm turns through a smaller angle on the return stroke *(licence: CC BY-SA 3.0)*
  - [Shaper with Coulisse mechanism 2 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=5cb7D9pLcq4): CAD animation of a shaping machine driven by a crank and slotted lever, working stroke slower than return *(licence: link only (standard YouTube licence))*
  - [slow motion whitworth quick return mechanism (Narrow Minded Railworks, YouTube)](https://www.youtube.com/watch?v=CCfre2TgeTk): Slow-motion video of a small 3D-printed, motor-driven quick-return model (the video linked from AjaxJones' Printables model) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [A Simple 3D Printed Whitworth Quick Return Mechanism (gzumwalt, Printables)](https://www.printables.com/model/358710-a-simple-3d-printed-whitworth-quick-return-mechani): Motorised printed demonstrator (N20 gear motor, about 15 rpm) whose arm swings about 14 degrees each way, faster one way than the other; printed at 0.15 mm, no supports, with assembly notes *(licence: CC BY-NC-SA)*
  - [Shaper Mechanism (quick return mechanism) (Eng. Yehia, Printables)](https://www.printables.com/model/202288-shaper-mechanism-quick-return-mechanism): Simple shaper prototype for a first-year mechanical engineering course, driven by a continuous-rotation servo, with M4 screws and SolidWorks files *(licence: CC BY)*
  - [Whitworth quick return mechanism (AjaxJones, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/14205-whitworth-quick-return-mechanism): Small gear-motor-driven model using a 3 mm bolt and 10 mm OD bearing on the connecting rod; video linked above *(licence: CC BY)*
  - [Whitworth mechanism (WayTooManyHobbies, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/263307-whitworth-mechanism): Printable hand-operated model using nylon shoulder bolts and heat-set inserts, with a drawing and STEP file *(licence: CC BY-NC-SA)*
  - [HUANGYAN920/Mechanical interactive mechanism animations](https://huangyan920.github.io/Mechanical/): Browser animations with adjustable crank radius and pivot positions, including a rotating guide-bar quick-return (Whitworth type), an offset quick-return and a shaper mechanism (labels mostly in Chinese) *(licence: MIT (code))*
  - [Linkage mechanism designer and simulator (David Rector)](https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/): Free Windows program for sketching and animating linkages with pivot and sliding connectors, so a crank, slotted lever and ram can be laid out and timed before printing *(licence: free to download ⚑ [uncertain: licence terms not checked])* *(⚑ parts need confirming)*
- **diagram_idea**: A crank circle with the slotted lever drawn at its two extreme positions touching the circle, the crank arc shaded in two colours (long arc = slow working stroke, short arc = fast return), and a ram below with arrows of different lengths showing the slow push and fast return.
- **sources**: 
  - https://en.wikipedia.org/wiki/Quick_return_mechanism
  - https://en.wikipedia.org/wiki/Shaper
  - https://en.wikipedia.org/wiki/Four-bar_linkage
  - https://en.wikipedia.org/wiki/Slider-crank_linkage
  - https://de.wikipedia.org/wiki/Kurbelschleife
  - https://mr-iitkgp.vlabs.ac.in/exp/quick-return-mechanism/theory.html
  - https://mm2-nitk.vlabs.ac.in/exp/crank-slotted-mechanism/theory.html
  - https://testbook.com/question-answer/in-a-crank-and-slotted-lever-quick-return-motion--5ef9d5d8551232229809e98a
  - https://testbook.com/question-answer/stroke-length-of-ram-in-shaper-can-be-increased-by--6303476d26d8b0d9daacd182
  - https://journals.dbuniversity.ac.in/ojs/index.php/AJET/article/download/195/pdf_33
  - https://www.theengineerspost.com/shaper-machine-mechanism/
  - https://wiki.dtonline.org/index.php/Whitworth_Quick_Return_Mechanism
  - https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_1.gif
  - https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_2.gif
  - https://commons.wikimedia.org/wiki/File:Shaper.png
  - https://www.youtube.com/watch?v=5cb7D9pLcq4
  - https://www.youtube.com/watch?v=RvyKFLZi2SM
  - https://www.youtube.com/watch?v=dqt1jkwLgs0
  - https://www.youtube.com/watch?v=CCfre2TgeTk
  - https://huangyan920.github.io/Mechanical/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/358710-a-simple-3d-printed-whitworth-quick-return-mechani
  - https://www.printables.com/model/202288-shaper-mechanism-quick-return-mechanism
  - https://www.printables.com/model/14205-whitworth-quick-return-mechanism
  - https://www.printables.com/model/263307-whitworth-mechanism
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: back-and-forth turning, back-and-forth straight
- **shaft_layout**: parallel
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, input_output, load, make_it_yourself, making_tips_3d_printing, materials, motion, play_and_precision, processes, rules_of_thumb, safety_notes

## 197 Straight-line linkages (Watt, Chebyshev, Peaucellier)

*motion conversion.* Linkages of pivoted bars arranged so one point moves in a straight or nearly straight line without any slide

*Also covers:* Also covers the Tusi couple (a rolling-circle straight-line mechanism)

### What it is

- **plain_name**: A few bars joined by pivots and arranged so that one point on them travels in a straight (or very nearly straight) line, with no slide or rail to guide it
- **term**: Straight-line linkage (straight-line mechanism): approximate types such as Watt's, Chebyshev's, Roberts' and Hoecken's linkages; exact types such as the Peaucellier-Lipkin linkage, Hart's inversors and the Sarrus linkage; and the rolling-circle Tusi couple (Cardan gear)
- **aliases**: 
  - straight-line mechanism
  - parallel motion (the 18th- and 19th-century name, e.g. Watt's parallel motion)
  - Watt's linkage
  - Chebyshev (Tchebicheff) linkage; Chebyshev lambda linkage; Chebyshev's plantigrade machine
  - Roberts linkage
  - Hoecken (Hoekens) linkage
  - Peaucellier-Lipkin linkage / Peaucellier cell / Peaucellier-Lipkin inversor
  - Hart's inversor (Hart's W-frame or antiparallelogram; Hart's A-frame)
  - Sarrus linkage (a folding 3D straight-line linkage)
  - inversor, inversor cell (the exact straight-line linkages)
  - Tusi couple (Tusi's mechanism)
  - Cardan gear / Cardan's movement / hypocycloidal straight-line mechanism
  - Lenkergeradführung (German, 'linkage straight-line guide')
  - 直线机构 (Chinese, 'straight-line mechanism'), e.g. 瓦特直线导向机构 (Watt) and 切比雪夫直线机构 (Chebyshev)
- **family**: motion conversion
- **other_families**: sliding, telescoping & linear motion
- **one_liner**: Pivoted bars (or, in the Tusi couple, a gear rolling inside a ring gear twice its size) are proportioned so that one point moves in a straight line, turning rotation or rocking into straight-line motion, or the reverse, without any sliding guide.
- **complexity**: A few parts. Watt's, Chebyshev's, Roberts' and Hoecken's linkages are four-bar linkages: three moving bars plus the frame and four pivots. The Peaucellier linkage has seven bars (two long ones, a diamond (rhombus) of four equal short ones, and one extra bar) meeting at six pivot points, most shared by two or three bars; Hart's inversor needs five bars (Kempe, 1877). The Sarrus linkage is two plates joined by two pairs of hinged plates or bars. The Tusi couple / Cardan gear is a fixed ring gear, a gear half its size, and a crank arm carrying that gear.
- **how_it_works**: In the approximate linkages two swinging arms move their ends along circles that curve in opposite directions, and a point halfway along the bar joining them has the two curves cancel out, so near the middle of its travel it moves almost straight (Kempe; Watt described it as 'a certain point in the connecting-lever which has very little sensible variation from a straight line'). A four-bar linkage can never give a perfectly straight line without a slide (Wikipedia 'Straight-line mechanism'). The exact linkages use geometric inversion: in the Peaucellier cell the product of two distances from the fixed pivot stays constant, so when one corner of the diamond is made to move on a circle passing through the fixed pivot, the opposite corner is forced along a perfectly straight line. In the Tusi couple a small circle rolls inside one twice its diameter, and every point on the small circle's rim moves back and forth along a diameter of the large one.

### Finder attributes

- **job**: 
  - change the kind of motion: turns rotation or rocking into straight-line motion (or straight-line motion into rocking)
  - let it move (turn, slide or bend): guides a point or a platform along a straight line using only pivots, instead of a slide or rail
- **motion**: multiple: the bars rotate or rock through limited angles (for example the Chebyshev linkage's input bar works between about 37 and 102 degrees, per Wikipedia); the traced point slides along a straight line of limited length. The Tusi couple / Cardan gear takes continuous rotation and gives an endless back-and-forth straight stroke.
- **degrees_of_freedom**: 1: one input angle fixes the whole linkage (the Sarrus linkage counts as 0 by the usual formula, but because its constraints overlap its top plate keeps 1 freedom to move straight up and down; Wikipedia 'Sarrus linkage')
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): rocking or rotation becomes straight-line motion, exactly (Peaucellier, Hart, Sarrus, Tusi couple) or approximately (Watt, Chebyshev, Roberts, Hoecken), and the reverse
  - none of the other listed behaviours: it neither locks nor slips; it just guides
- **holding_principle**: not a holding joint (it moves or passes on motion): it guides a point along a line, shape (the parts interlock; form-fit): each pivot pin sits in its hole, which is what constrains the path
- **input_output**: Rocking or rotation -> straight-line motion, or straight-line motion -> rocking (Wikipedia: 'or vice versa'). Stroke is limited by the bar lengths; approximate linkages are only straight over part of their travel (for example the Chebyshev lambda linkage stays within 1% of a line for over half its cycle; Wikipedia). The Tusi couple / Cardan gear gives a stroke equal to the ring gear's pitch diameter and a pure sine-wave (simple harmonic) motion, which produces no second-order shaking forces and so is easy to balance (Wikipedia 'Straight-line mechanism'). Efficiency: high, since there are only turning pivots and no sliding guide; Kempe reported the 'ease of working and absence of friction and noise' of Peaucellier linkages on the Houses of Parliament ventilation engines; no number found ⚑ [uncertain]. Shafts: all pivot axes parallel in the planar linkages; two sets of hinge axes at an angle in the Sarrus linkage. Back-drivable: yes, the straight-moving point can drive the linkage back, except near positions where two bars line up (toggle or dead positions), where the linkage can lock or push hard sideways (the Scott Russell article warns of this for its slider) ⚑ [uncertain as a general rule]. *(⚑ parts need confirming)*
- **power**: passive (no power needed): it is moved by hand, a motor, a piston or the load; nothing happens when power is lost except that it stops
- **removability**: removable: the bars are joined by pins, screws or shoulder bolts and can be taken apart
- **reuse_cycles**: many times: it can be dismantled and reassembled repeatedly; the limit is wear of the pivot holes
- **tools_needed**: Screwdriver or hex key for pivot screws; a drill bit used by hand to ream printed pivot holes to size (Ubrch); a vice or soft-jawed clamp to press in small ball bearings (Ubrch); pliers; a soldering iron to press nuts into printed parts (Namako's walker)
- **seal**: none: it is an open mechanism and does not seal anything
- **load**: Light to heavy depending on build: these linkages guided the piston rods of steam engines (Watt's parallel motion), locate the rear axles of some cars sideways (Watt's linkage) and carry the jibs of level-luffing dockside cranes (Chebyshev 'horse-head' design) (Wikipedia). Printed versions are light-duty guides (e.g. for a soldering iron in a heat-set insert press). Planar linkages are strong in their own plane but weak against sideways (out-of-plane) forces and twisting, which the pivots must resist ⚑ [uncertain]; forces rise sharply near toggle positions where two bars line up ⚑ [uncertain]. *(⚑ parts need confirming)*
- **adjustable**: Usually no: the bar lengths fix the path, and changing them makes the line curved. Prototypes can use slotted or multi-hole bars to find good proportions ⚑ [uncertain]; the Tusi couple has no adjustment. *(⚑ parts need confirming)*
- **play_and_precision**: Approximate types have a built-in error that grows with stroke: the Watt linkage is only nearly straight near its middle position and traces a figure-8 overall (Kempe; Wikipedia); a Hoeken-type linkage optimised for straightness stays within 0.096% over half the crank's turn (Norton, Design of Machinery 3rd ed., Table 3-1). Exact types are perfect in theory, but every pivot adds clearance, and the Peaucellier linkage has six pivot points joining seven bars, so real accuracy depends on tight, low-play joints and accurate bar lengths ⚑ [uncertain]. The pivots must be parallel; misaligned pivots bind. Kovács (kovzol) notes that even the pen refill's up-and-down play affects LEGO linkage drawings. *(⚑ parts need confirming)*
- **access_needed**: not applicable: it is a mechanism in a frame, reached wherever the frame opens
- **materials**: Historically cast and wrought iron and steel on steam engines. For models Kempe (1877) used cardboard links with catgut rivets, or tin-plate links with bootmaker's eyelets as pivots. LEGO Technic beams and pins (brand) work well (kovzol/lego-linkages). Printed versions use PLA or PLA-CF bars with 2 mm steel dowel pins and small ball bearings (Ubrch), or 1.75 mm filament as hinge pins (Illmilliner's Sarrus press). Tusi couples use printed involute gears (Kladrie: 64-tooth gear in a 128-tooth ring).
- **maker_difficulty**: easy to moderate: Watt's, Chebyshev's and Roberts' linkages are just four bars and four pins; the Peaucellier and Hart linkages need more bars with accurate lengths and low-play pivots, and the Tusi couple needs a printed internal (ring) gear exactly twice the size of its partner

### Making it

- **processes**: 
  - 3D print (FDM): bars, frames and gears print flat; examples include heat-set insert presses based on the Peaucellier and Sarrus linkages, a Chebyshev walking robot and a Tusi couple toy
  - laser cut: ⚑ [uncertain] the bars are flat profiles that suit acrylic, plywood or card, but no tested laser-cut example was found; Kempe built his models from hand-cut card and tin-plate
  - woodwork: card, thin wood or tin-plate with eyelets as pivots (Kempe, 1877)
  - CNC: metal links for heavy-duty uses such as vehicle suspension
  - off-the-shelf part: LEGO Technic beams and pins (brand), shoulder bolts, dowel pins, small ball bearings, rod ends *(⚑ parts need confirming)*
- **print_in_place**: no: printed straight-line linkages are printed as separate bars and joined with pins (steel dowels, screws or lengths of filament); the designer of a printed Sarrus insert press was considering a print-in-place version but had not released one
- **making_tips_3d_printing**: 1) Get the proportions right first: sketch the linkage in a simulator (PMKS+, Linkage, or HUANGYAN920's animations) or build it from LEGO Technic or card and pins (kovzol; Kempe), then print. 2) Use real pins for pivots: Ubrch's Peaucellier insert press uses 2 mm steel dowels in interference-fit holes and small ball bearings; printed 2 mm holes were not accurate enough, so he reamed them by hand with a drill bit held in a chuck (a 5/64 in bit, slightly under 2 mm). 3) Ubrch prints the bars so the pivot holes run along the Z axis (vertical), adds extra walls on long load-bearing bars, uses a randomised seam position, and sands the undersides so the bars slide past each other smoothly. 4) Cheap pin option: Illmilliner's Sarrus insert press uses lengths of 1.75 mm filament as hinge pins. 5) For moving fits start with at least 0.3 mm clearance and tune (Prusa); for pivots, less play means a straighter line, so prefer pins in reamed holes or bearings over loose printed pins ⚑ [uncertain]. 6) Namako's Chebyshev walker uses M2 screws with washers and nuts pressed in with a soldering iron, and drills holes to size (2, 3 and 5 mm). 7) Tusi couple: Kladrie printed a 64-tooth gear running inside a 128-tooth ring gear in PLA at 0.2 mm layers without supports; the tooth counts must be exactly 1:2. 8) Keep bars stiff and lay them in separate planes so they don't collide as they cross ⚑ [uncertain]. 9) PLA softens above about 60 °C (Prusa), which matters for insert presses that hold a hot soldering iron nearby. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Dowel pins (e.g. 2 mm or 3 mm steel dowel pins); shoulder bolts (shoulder screws); miniature and flanged ball bearings; e-clips or retaining rings; rod ends (rose joints) for heavy-duty links such as a car's Watt's link; LEGO Technic beams and pins (brand) for quick prototypes; for a Cardan gear, a spur gear and an internal (ring) gear with exactly twice as many teeth of the same module ⚑ [uncertain: none checked in a catalogue]. For long, stiff straight motion the off-the-shelf alternative is a linear guide or linear bushings on rods. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Watt's linkage: two equal swinging bars; the connecting bar's length is chosen so that when the swinging bars are parallel it is at right angles to them; the tracing point is halfway along the connecting bar. The path is only nearly straight close to the middle position (Kempe, How to Draw a Straight Line, 1877).
  - Chebyshev's linkage: swinging bars 5 units long, fixed pivots 4 units apart, connecting bar 2 units, tracing point at its middle; the point moves parallel to the line between the fixed pivots, and is exactly on the line at the middle and above each fixed pivot (Kempe, 1877; Wikipedia 'Chebyshev linkage'). Input bar range about 36.9 to 101.5 degrees (Wikipedia).
  - Roberts' linkage: equal swinging bars; fixed pivots twice as far apart as the two pivots on the moving piece; tracing point on the moving piece at a distance from those pivots equal to the swinging-bar length (Kempe, 1877).
  - Chebyshev lambda linkage: crank 1, distance between fixed pivots 2, rocker 2.5, and a coupler 5 long with the tracing point at its far end (rocker joined at its middle); it stays within 1% of a straight line for over half the cycle, at nearly constant speed (Wikipedia 'Chebyshev lambda linkage').
  - Hoeken-type four-bar (Norton, Design of Machinery 3rd ed., p. 134, Table 3-1): for a straight portion lasting half the crank's turn, ground link / crank = 2.2 and coupler / crank = 2.8 give 0.096% straightness error but 35% speed variation; for near-constant speed over 60 degrees of crank, 2.025 and 2.538 give 0.387% straightness error and 0.106% speed variation. You cannot have best straightness and steadiest speed at once.
  - Peaucellier linkage: two equal long bars from the fixed pivot O to opposite corners of a diamond (rhombus) of four equal short bars; an extra bar, pivoted to the frame at a distance from O equal to its own length, makes a third corner move on a circle through O; the fourth corner then moves exactly straight (Kempe, 1877; Wikipedia). Distance(O, B) x distance(O, D) = long bar squared - short bar squared, a constant (Wikipedia).
  - A four-bar linkage can only approximate a straight line; exact straight lines need at least a six-bar inversor (Peaucellier, Hart) or a slide (Wikipedia 'Straight-line mechanism'; Kempe: 'impossible to solve the problem with three moving links').
  - Tusi couple / Cardan gear: the rolling gear's pitch diameter must be exactly half the ring gear's (tooth ratio 1:2); any point on the small gear's pitch circle then moves along a diameter of the ring gear, so the stroke equals the ring's pitch diameter (Wikipedia 'Straight-line mechanism'); points inside the pitch circle trace ellipses (Wikipedia 'Tusi couple').
  - Tusi couple without a ring gear (Goodman's version): a fixed gear, an idler on a rotating arm, and an output gear with half the teeth of the fixed gear; an output arm of length d (equal to the distance between the fixed and output gears) moves its tip along a straight line of length 2d (Wikipedia 'Tusi couple').
  - Scott Russell linkage: keep the slider well away from the short link's pivot; as they approach, the straight-line constraint weakens and sideways forces on the slider rise (Wikipedia 'Scott Russell linkage').

### When to use it

- **everyday_examples**: 
  - The rear axle of some cars, held sideways by a Watt's linkage instead of a Panhard rod (Wikipedia 'Watt's linkage')
  - Level-luffing dockside cranes with a 'horse-head' jib, which use a Chebyshev-type linkage to keep the load at a constant height (Wikipedia 'Chebyshev linkage')
  - Beam engines in steam museums, whose piston rods are guided by Watt's parallel motion (Wikipedia; 507 Mechanical Movements no. 343)
  - Maker-built heat-set insert presses that guide a soldering iron straight down with a Peaucellier or Sarrus linkage instead of a linear rail (Printables)
- **when_to_use**: Use one when a point, pen, tool or platform must move in a straight line but a slide or rail would be expensive, hard to make straight, prone to wear, or poor when 3D printed: pivots are easy to make accurately and have little friction (Kempe explains that sliding guides must be made truly straight and suffer wear, friction and temperature distortion). Good uses: guiding a tool straight up and down (heat-set insert press, drill or punch guide), drawing or plotting straight lines, keeping an axle or piston rod moving straight, the feet of walking robots and rover wheels (the Chebyshev lambda linkage, per Wikipedia), a compact straight-lifting platform (Sarrus), or turning continuous rotation into a smooth, easily balanced straight stroke (Tusi couple / Cardan gear). Also a classic, satisfying desk demonstration.
- **when_not_to_use**: Avoid them for long strokes, where the linkage becomes huge (use a linear guide, lead screw, rack and pinion or belt); for motion that must be stiff against side loads and twisting (use linear guides or bushings on rods); for very small, very precise motions (use a parallel leaf-spring flexure stage, which has no play at all); and for approximate types, whenever you need the line to stay straight beyond the linkage's good range (use an exact type or a slide). If you only need a platform to stay level while it moves, a parallelogram four-bar or scissor linkage is simpler.
- **environment_limits**: Printed PLA softens and deforms above about 60 °C and degrades in UV light (Prusa PLA guide); keep printed insert-press linkages away from the hot soldering-iron tip. Pivot holes wear over time, which adds play and bends the line ⚑ [uncertain]. Kempe notes linkages avoid the temperature distortion that plagues long sliding guides. Outdoors or on vehicles, pivots need sealed bushings or rod ends to keep grit out ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Crossing bars close like scissors and can pinch fingers ⚑ [uncertain: general]. Insert presses built on these linkages hold a soldering iron at around 200+ °C, so treat them as a burn hazard ⚑ [uncertain: typical insert-setting temperature not checked]. Kladrie's Tusi toy uses small neodymium magnets and steel balls, which must be kept from small children ⚑ [uncertain: general magnet safety]. Don't modify a vehicle's suspension linkage without proper engineering; it carries large loads. *(⚑ parts need confirming)*
- **common_failures**: 1) Using an approximate linkage beyond its straight range, so the point wanders off the line (the Watt linkage traces a figure-8; Kempe). 2) Wrong proportions or inaccurate bar lengths, giving a curved path: lay it out in a simulator or with card first (Kempe; PMKS+). 3) Play in loose pivot holes adding up across many joints: ream holes to size and use steel dowels or bearings (Ubrch). 4) Binding because pivot axes or hinges are not parallel, especially in the Sarrus linkage's hinge pairs ⚑ [uncertain]. 5) Locking up or pushing hard sideways near toggle positions where two bars line up (Wikipedia 'Scott Russell linkage'). 6) In a Tusi couple, gears that are not exactly 1:2 or not concentric make the point trace a thin ellipse instead of a line ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Four-bar linkage (incl. parallelogram linkage): the parent mechanism of the approximate straight-line linkages; a parallelogram keeps a part level but does not move a point straight
  - Linear guides (bushings on rods, wheels or carriages on rails) and dovetail slides: the usual way to get straight motion; longer strokes and stiffer, but they slide, need straight rails and wear
  - Parallel leaf-spring flexure (linear flexure stage): nearly straight motion over tiny distances with no pivots and no play
  - Scissor linkage (lazy tongs, scissor lift): a chain of crossed bars that also lifts a platform straight, with one sliding end
  - Scotch yoke and slider-crank: turn rotation into straight motion but need a slide; the Scotch yoke's sine-wave motion matches the Tusi couple's, and both relate to the double-slider trammel (Wikipedia 'Straight-line mechanism')
  - Rack and pinion, lead screw and nut: long straight strokes from rotation
  - Virtual-pivot linkage (remote centre of motion): the rotary counterpart, a linkage whose part turns about a point in empty space
  - Scott Russell linkage: turns a straight motion through a right angle; often combined with a straight-line linkage (Wikipedia)

### Pictures, videos and models

- **links**: 
  - [Watts Linkage.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Watts_Linkage.gif): Animated Watt's linkage tracing its nearly straight line (and figure-8 ends); dimensions given in the description *(licence: CC BY-SA 4.0)*
  - [Peaucellier-Lipkin Inversor.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Peaucellier-Lipkin_Inversor.gif): Animated Peaucellier-Lipkin linkage drawing an exact straight line, with bar lengths in the description *(licence: CC BY-SA 4.0)*
  - [Chebyshev Lambda Linkage.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Chebyshev_Lambda_Linkage.gif): Animated Chebyshev lambda linkage: crank 1, rocker 2.5, coupler 5, fixed pivots 2 apart, with a long flat section of its path *(licence: CC BY-SA 4.0)*
  - [Cardano's hypocyclic gears.gif (Wikimedia Commons, by Bryllig)](https://commons.wikimedia.org/wiki/File:Cardano%27s_hypocyclic_gears.gif): Animated Cardan gear (Tusi couple made with gears): pins on a gear rolling inside a ring gear twice its size move back and forth along straight diameters *(licence: CC BY-SA 4.0)*
  - [Sarrus Linkage.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Sarrus_Linkage.gif): Animated Sarrus linkage made of hinged plates: the top plate moves straight up and down *(licence: CC BY-SA 4.0)*
- **make_it_yourself**: 
  - [lego-linkages (Zoltán Kovács, GitHub), README](https://raw.githubusercontent.com/kovzol/lego-linkages/master/README.md): Building instructions for LEGO Technic linkages that draw with a pen refill: Watt's linkage, Chebyshev's linkage and lambda linkage, Peaucellier's linkage (with an optional 3D-printed 4-hole beam) and Hart's A-frame *(licence: GPL-3.0)*
  - [Heat Set Insert Press, only weird and complicated (Ubrch, Printables)](https://www.printables.com/model/610004-heat-set-insert-press-only-weird-and-complicated): A working heat-set insert press whose soldering-iron holder is guided straight down by a Peaucellier-Lipkin linkage; detailed notes on 2 mm dowel pivots, reaming holes and print orientation *(licence: CC BY-NC-SA)*
  - [Heat Set Insert Press (Sarrus Linkage) (Illmilliner, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1209178-heat-set-insert-press-sarrus-linkage): An almost all-printed insert press using a Sarrus linkage instead of rails, with 1.75 mm filament as hinge pins (work in progress) *(licence: CC BY-NC)*
  - [Tusi Couple illusion mechanism (Kladrie, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1757607-tusi-couple-illusion-mechanism): Motorised Tusi couple: a 64-tooth gear inside a 128-tooth ring gear carries magnets that drag steel balls along straight lines *(licence: CC BY-SA)*
  - [Chebyshev Linkage walker Unit for OTTO (Namako, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/427797-chebyshev-linkage-walker-unit-for-otto): Servo-driven walking unit for the OttoDIY robot using Chebyshev linkages (work in progress) *(licence: CC BY-NC-SA)*
  - [PMKS+ web linkage analysis tool](https://pmksplus.com/): Free, open-source browser tool to build and animate planar linkages, share them by URL and run kinematic analysis; useful for checking straight-line proportions before printing *(licence: free and open source ⚑ [uncertain: licence not checked])*
  - [HUANGYAN920/Mechanical interactive mechanism animations](https://huangyan920.github.io/Mechanical/): Browser animations with adjustable bar lengths, including Watt, Chebyshev, Roberts, Hart and a Peaucellier-type straight-line mechanism (labels mostly in Chinese; its Peaucellier entry is mislabelled as an ellipsograph) *(licence: MIT (code))* *(⚑ parts need confirming)*
- **diagram_idea**: Side-by-side sketches of Watt's linkage (two arms curving opposite ways, midpoint staying straight) and the Peaucellier cell (diamond plus two long arms, one corner on a circle, the opposite corner on a line), each with its traced path drawn in colour, plus a small inset of a gear rolling inside a ring gear twice its size with one rim point sliding along a diameter.
- **sources**: 
  - https://en.wikipedia.org/wiki/Straight-line_mechanism
  - https://en.wikipedia.org/wiki/Watt%27s_linkage
  - https://en.wikipedia.org/wiki/Parallel_motion_linkage
  - https://en.wikipedia.org/wiki/Chebyshev_linkage
  - https://en.wikipedia.org/wiki/Chebyshev_lambda_linkage
  - https://en.wikipedia.org/wiki/Roberts_linkage
  - https://en.wikipedia.org/wiki/Hoecken_linkage
  - https://en.wikipedia.org/wiki/Peaucellier%E2%80%93Lipkin_linkage
  - https://en.wikipedia.org/wiki/Hart%27s_inversors
  - https://en.wikipedia.org/wiki/Sarrus_linkage
  - https://en.wikipedia.org/wiki/Scott_Russell_linkage
  - https://en.wikipedia.org/wiki/Tusi_couple
  - https://en.wikipedia.org/wiki/Murray%27s_Hypocycloidal_Engine
  - https://de.wikipedia.org/wiki/Geradf%C3%BChrung
  - https://www.gutenberg.org/files/25155/25155-pdf.pdf
  - http://www.designofmachinery.com/DOM/Chap_03_3ed_p134.pdf
  - https://507movements.com/mm_329.html
  - https://507movements.com/mm_339.html
  - https://507movements.com/mm_343.html
  - https://commons.wikimedia.org/wiki/File:Watts_Linkage.gif
  - https://commons.wikimedia.org/wiki/File:Peaucellier-Lipkin_Inversor.gif
  - https://commons.wikimedia.org/wiki/File:Chebyshev_Linkage.gif
  - https://commons.wikimedia.org/wiki/File:Chebyshev_Lambda_Linkage.gif
  - https://commons.wikimedia.org/wiki/File:Cardano%27s_hypocyclic_gears.gif
  - https://commons.wikimedia.org/wiki/File:TusiCouple.gif
  - https://commons.wikimedia.org/wiki/File:Goodman_Tusi_Couple.webm
  - https://commons.wikimedia.org/wiki/File:Sarrus_Linkage.gif
  - https://www.youtube.com/watch?v=P31fzSIGrl0
  - https://raw.githubusercontent.com/kovzol/lego-linkages/master/README.md
  - https://raw.githubusercontent.com/kovzol/lego-linkages/master/LICENSE
  - https://makezine.com/article/maker-news/the-peaucelliers-cell-dra/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/610004-heat-set-insert-press-only-weird-and-complicated
  - https://www.printables.com/model/1209178-heat-set-insert-press-sarrus-linkage
  - https://www.printables.com/model/1757607-tusi-couple-illusion-mechanism
  - https://www.printables.com/model/427797-chebyshev-linkage-walker-unit-for-otto
  - https://pmksplus.com/
  - https://huangyan920.github.io/Mechanical/
  - https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: back-and-forth turning
- **motion_out**: back-and-forth turning, straight push or pull
- **shaft_layout**: parallel, at an angle
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, drill and tap, press or vice, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** adjustable, common_failures, environment_limits, input_output, load, make_it_yourself, making_tips_3d_printing, off_the_shelf_parts, play_and_precision, processes, safety_notes

## 198 Escapement (anchor or verge escapement)

*motion conversion.* A rocking catch that lets a spring- or weight-driven wheel advance one tooth at a time in a steady rhythm, as in clocks

### What it is

- **plain_name**: A rocking catch that lets a wound-up clock's toothed wheel slip forward one tooth at a time, in step with a swinging pendulum, which is what makes a clock tick
- **term**: Escapement (anchor or recoil escapement, deadbeat or Graham escapement, verge or crown-wheel escapement)
- **aliases**: 
  - anchor escapement / recoil escapement
  - deadbeat escapement / Graham escapement
  - verge escapement / crown-wheel escapement / verge and foliot
  - grasshopper escapement (John Harrison's low-friction version)
  - pin-pallet, pin-lever or Roskopf escapement (cheap alarm clocks and kitchen timers)
  - lever escapement / Swiss lever escapement (most mechanical watches)
  - runaway escapement (no pendulum or hairspring: the rate is set only by the inertia of the rocking part; used in toys and simple timers)
  - escape wheel and pallets; anchor; pallet fork
  - Hemmung, Ankerhemmung (German); échappement (French)
  - 擒纵机构 (Chinese)
- **family**: motion conversion
- **other_families**: brakes, dampers & speed control
- **one_liner**: An escapement lets a spring- or weight-driven wheel turn only in small, regular steps, releasing one tooth at a time each time a pendulum or balance wheel swings, while giving that swinging part a small push to keep it going.
- **complexity**: A few parts: an escape wheel with sloping, saw-like teeth; an anchor (or verge rod) carrying two pallets that catch the teeth; a crutch and fork linking the anchor to the pendulum; and the timekeeper itself (pendulum, balance wheel or foliot bar). It only works as part of a clock-like assembly with a power source (wound spring or hanging weight) and a gear train.
- **how_it_works**: The spring or weight tries to spin the gear train, and the escape wheel at its end is blocked by one of the two pallets. As the pendulum swings, it rocks the anchor so that pallet lets go; the wheel jumps forward, and a tooth on the other side lands on the second pallet, which has just moved into its path. Each time a tooth slides off a pallet's sloping face it gives the pendulum a small push that replaces the energy lost to friction, and each sudden stop makes the 'tick'. In the anchor (recoil) type the pendulum pushes the wheel slightly backwards after each catch; in the deadbeat type the pallets have curved 'dead' faces centred on the anchor's pivot, so the wheel stays still until released; in the verge type two flag-like pallets on a rod work against a crown-shaped wheel, and the pendulum or foliot must swing widely (Wikipedia 'Escapement', 'Anchor escapement', 'Verge escapement').

### Finder attributes

- **job**: 
  - slow it, stop it or keep its speed steady: lets a wound spring or falling weight run down slowly at a steady, countable rate
  - change the kind of motion: turns a wheel's continuous urge to spin into regular step-by-step motion, and keeps a pendulum or balance swinging
- **motion**: multiple: the escape wheel turns in small steps (half a tooth per tick; with a 30-tooth wheel and a seconds pendulum that is 6 degrees per tick and one turn per minute), while the anchor or verge rocks back and forth: the pendulum swings about 4 to 6 degrees with an anchor and 80 to 100 degrees with a verge (Wikipedia)
- **degrees_of_freedom**: 1 while a pallet is touching the wheel (the pendulum's position controls the wheel); between release and catch the wheel briefly runs free for a small amount called the 'drop' (Goodrich, The Modern Clock, 1905)
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): a steady driving force becomes regular, step-by-step rotation, and in the other direction the wheel's pushes keep the oscillator swinging
  - indexing (clicks into set positions): the wheel advances exactly one tooth for every full swing (half a tooth per tick), so the hands move by a fixed amount each time
  - self-locking (holds under load, won't back-drive): between releases a pallet blocks the wheel, so the spring or weight cannot run away; the train moves only when the swinging pendulum lets it
- **holding_principle**: 
  - shape (the parts interlock; form-fit): a pallet sits in front of a tooth and physically blocks it (the 'lock')
  - not a holding joint (it moves or passes on motion): its purpose is to meter motion, not to hold parts together
- **input_output**: Input: steady torque from a wound spring or falling weight, passed through a gear train to the escape wheel (the lightest, fastest wheel in the clock). Output: step-by-step rotation of the escape wheel and small pushes (impulses) that keep the pendulum or balance swinging. Ratio: set by the tooth count and the swing rate; a seconds pendulum with a 30-tooth wheel turns the wheel once a minute (Wikipedia 'Anchor escapement'; Goodrich). Efficiency: low and not the point; the tiny energy per tick goes into friction and air drag; Steve Peterson calculated only about 0.035 oz (about 1 g) of force at his printed clock's escape wheel. Shafts: parallel for anchor, deadbeat and grasshopper types; crossed at right angles in the verge (crown-wheel axis at 90 degrees to the verge rod). Back-drivable: no, the pendulum cannot rewind the spring; but in recoil types (anchor and verge) the pendulum pushes the wheel and the whole train slightly backwards on every tick, while the deadbeat has no recoil (Wikipedia).
- **power**: passive (no power needed): no electricity, but it needs stored energy from a wound spring or raised weight; when that runs out it simply stops. Anchor and deadbeat escapements are not self-starting, so the pendulum must be given a push to start; the watch lever escapement is self-starting (Wikipedia).
- **removability**: removable: the escape wheel and anchor run on arbors or pins between frame plates and can be taken out for cleaning or adjustment
- **reuse_cycles**: many times: clocks are routinely dismantled, cleaned, re-oiled and reassembled; wear of pallets and teeth is the limit
- **tools_needed**: Screwdrivers; small files and fine sandpaper to finish printed pallets and teeth (tomas38 provides a printed pallet-shaping tool); a vice or press for fitting bearings; pliers and side cutters for steel pins; a spirit level for setting the beat; clock oil or dry PTFE lubricant
- **seal**: none: it is an open mechanism; a clock case keeps dust off, but the escapement itself does not seal anything
- **load**: Very light: it is a control device, not a load-carrying joint. Tooth forces are tiny (about the weight of a house fly at the escape wheel of Steve Peterson's 8-day printed clock), and tooth tips and pallet faces are delicate; if a clock is moved with its pendulum swinging freely, the pallets can hit the teeth hard, which is one reason anchor teeth slant backwards (Wikipedia 'Anchor escapement').
- **adjustable**: Yes: the rate by the pendulum's length (a nut under the bob; lowering the bob slows the clock; SP1 notes: 0.025 in, about 0.6 mm, changes his clock by about a minute a day); the beat (even tick and tock) by rotating or bending the crutch relative to the anchor or by levelling the case (Wikipedia 'Pendulum clock'; SP1 notes; tomas38); in runaway escapements the rate by the rocking mass (Ticking Turn Timer: heavier coins tick slower). Some clocks also allow the anchor's depth into the wheel to be set ⚑ [uncertain]. *(⚑ parts need confirming)*
- **play_and_precision**: Working clearances matter: the 'drop' (free run between release and catch) should be as small as safe locking allows, and the 'lock' (how far a pallet overlaps a tooth) must be safe but not too deep (Goodrich; his seconds-pendulum layout allows 6 degrees of wheel drop). The anchor is tolerant of errors in its shape; the deadbeat is less tolerant of inaccuracy and wear (Wikipedia). Timekeeping: verge-and-foliot clocks erred by hours a day, pendulums improved this to minutes a day (Wikipedia 'Verge escapement'); printed deadbeat clocks keep about 1-2 minutes a week (Steve Peterson) or 30 seconds a week or better (tomas38). The clock must be level and 'in beat', or it may stop.
- **access_needed**: not applicable: it sits between the clock's plates and is reached by opening the case or removing a plate
- **materials**: Traditionally brass escape wheels and hardened steel pallets; precision clocks and watches use jewel pallets of synthetic sapphire or ruby, with only 10-20% of metal-on-metal friction (Wikipedia 'Escapement'); Harrison's grasshopper pallets were wood and needed no oil. 3D-printed clocks use PLA for wheels, frames and pallets with steel shafts (1/16 in steel rod, 1.4 mm steel pins or nails), brass or stainless bushings and 608 ball bearings (SP1 notes; tomas38); printed springs should be PETG or ABS because PLA creeps and takes a permanent set (Ticking Turn Timer; Piercet's ABS escapement spring).
- **maker_difficulty**: moderate to hard: a ticking demonstrator is an easy print, but a clock that keeps running and keeps time needs very low friction through the whole gear train, carefully finished pallet faces, correct depth and a pendulum set in beat (tomas38; Steve Peterson's SP1 build notes)

### Making it

- **processes**: 
  - 3D print (FDM): many working printed clocks, escapement demonstrators and runaway-escapement toys
  - 3D print (resin): tomas38 supplies an 'exact' pallet for SLA or machining, as FDM pallets need hand finishing
  - laser cut: possible in plywood, but Elias Lundgaard's laser-cut clock never got its escapement running reliably within his project
  - woodwork: wooden gear clocks are a traditional hobby project; Harrison made grasshopper pallets from wood
  - CNC: metal escape wheels and pallets for precision clocks
  - off-the-shelf part: complete mechanical clock movements, bearings, steel rod and pendulum suspension springs
- **print_in_place**: no: escapements are printed as separate parts (escape wheel, anchor or pallets, frame, pendulum) and assembled on pins or shafts; even the no-hardware Ticking Turn Timer is seven printed parts snapped together
- **making_tips_3d_printing**: 1) Start with a stand-alone escapement and pendulum before building a whole clock (jattie; Hackaday's 2018 escapement article). 2) Print gears and small parts at low layer heights (0.12 or 0.1 mm) and not too fast; check the toolpath so perimeters don't cross and cause stringing; turn off thin-wall detection if it spoils teeth; tune elephant's-foot compensation, because a squashed first layer changes tooth shape and adds friction (tomas38). 3) Make sure escape-wheel teeth are not wider at the tip; if the escapement won't work, thin or sharpen the teeth with a file (tomas38). 4) The pallet faces need real finishing: smooth, flat and burr-free; tomas38 provides a shaping tool, or print the 'exact' pallet in resin. 5) Friction is everything: SP1's 6.4 lb weight gives only about 0.035 oz at the escape wheel, so use steel axles instead of printed ones, brass or stainless bushings, and bearings with the grease cleaned out (SP1 notes; tomas38). 6) Lubrication: SP1 uses a tiny amount of dry PTFE (Teflon) lubricant on bushings and on the pallets, since oil holds dust that scrapes surfaces; test that a lubricant doesn't attack your filament. 7) Use at least 4-5 perimeters on frames so they don't bend under the weight, and at least 4 on printed pendulum springs (tomas38); print springs in PETG, not PLA, which creeps (Ticking Turn Timer), or replace a printed pendulum suspension with thin hardened steel (tomas38). 8) The two crutch pins that hold the pendulum rod must not leave a gap, or the crutch 'knocks' and wastes energy (tomas38). 9) Set the beat by ear ('tick...tock...' not 'tick-tock...pause') and give at least 3 degrees of swing each side for a margin against draughts; about 1 degree each way is the minimum to run (SP1). 10) Runaway (pendulum-less) escapements: if the wheel locks solid the pallet pins go too deep; if it free-runs they are too shallow; heavier rocking masses slow it down (Ticking Turn Timer). 11) Keep PLA clocks below about 60 °C and out of sunlight (Prusa).
- **off_the_shelf_parts**: 608 ball bearings (with grease removed for low friction); miniature bearings (e.g. 3 x 8 x 3 mm, 1/8 x 3/8 in); steel rod or pins for arbors (e.g. 1/16 in or 1.4-2 mm); brass or stainless tube as bushings; nylon fishing line or cord and a weight (lead shot, steel balls, washers) for the drive; M6 threaded rod and nut for the pendulum rating nut; thin spring steel for the pendulum suspension spring; dry PTFE lubricant or clock oil; complete mechanical clock movements (search 'mechanical pendulum clock movement', 'regulator movement').
- **rules_of_thumb**: 
  - Pendulum length sets the rate: a 'seconds pendulum' (1 s per swing, 2 s period) is about 0.994 m (roughly 1 m from pivot to centre of bob); a half-second pendulum is about 25 cm (Wikipedia 'Pendulum clock'). Small-swing formula: period = 2 x pi x square root(length / g) (tomas38 uses it to set his pendulum).
  - A 30-tooth escape wheel on a seconds pendulum turns once a minute, so the second hand can sit on its arbor (Wikipedia 'Anchor escapement'; Goodrich, The Modern Clock, 1905).
  - Anchor layout: the pallets span about 7.5 teeth (90 degrees) of a 30-tooth wheel; with 90 degrees between the pallets the anchor's pivot sits about 1.4 x (square root of 2) the wheel radius from the wheel's centre (Wikipedia 'Anchor escapement'; Goodrich draws tangents from radii 45 degrees each side of the centre line).
  - Deadbeat layout for a seconds pendulum (Goodrich): 4 degrees of pendulum swing is usual, giving 2 degrees of lift on each pallet; lifting planes at 60 degrees to the radii; about 6 degrees of drop left for safety; keep the drop as small as safe locking allows and never lock too deep.
  - Keep the swing small: the anchor needs only about 4-6 degrees versus 80-100 degrees for a verge (Wikipedia); a change of amplitude from 4 to 3 degrees shortens the period by about 0.013%, a gain of about 12 s a day, so a steady driving force matters (Wikipedia 'Escapement').
  - Verge: the crown wheel must have an odd number of teeth, or two opposite teeth hit the pallets at once and jam it; the pallets are usually 90-105 degrees apart (Wikipedia 'Verge escapement').
  - Tooth shape: recoil (anchor) escape-wheel teeth slant backwards against the direction of rotation and the pallets are slightly convex; deadbeat teeth are radial or slant forwards (Wikipedia 'Anchor escapement'; Goodrich).
  - Give the impulse evenly either side of the bottom of the swing (the clock is 'in beat'); impulses before or after the bottom make the rate depend on the driving force (Wikipedia, Airy condition).
  - Printed clocks: aim for about 3 degrees of swing each side for reliability; about 1 degree is the minimum for the escapement to work (Steve Peterson, SP1 build notes).

### When to use it

- **everyday_examples**: 
  - A grandfather (longcase) clock, whose tick-tock and second hand come from an anchor or deadbeat escapement and a seconds pendulum (Wikipedia)
  - A mechanical wristwatch, which uses a lever escapement and a balance wheel (Wikipedia 'Escapement')
  - A wind-up kitchen timer or old alarm clock, which uses a cheap pin-pallet escapement (Wikipedia 'Pin-pallet escapement')
  - A mechanical metronome, which runs from a spring-wound clockwork escapement; manual typewriters also used an escapement to step the carriage one letter at a time (Wikipedia)
- **when_to_use**: Use it when a wound spring or falling weight must be let down slowly, steadily and in countable steps without electricity: a mechanical clock or timer, a metronome, a slow-moving automaton or a spring-driven toy car that should creep rather than race (gzumwalt's runaway-escapement car). It is also the right choice for a teaching model that shows how clocks keep time, and for anything that should advance one step per event with a stop in between (the typewriter carriage). With a pendulum or balance it gives surprisingly good timekeeping from purely printed parts.
- **when_not_to_use**: Don't use it to transmit useful power: it passes only tiny forces. For precise timing, a quartz crystal or microcontroller is far more accurate and cheaper. For smooth, silent slowing of a spring or falling load, use a speed governor (fly fan or centrifugal governor) or a damper. For stepping driven by a motor, use a Geneva drive, ratchet and pawl or a stepper motor. If a wide swing is unacceptable, avoid the verge; if you can't make accurate parts, prefer the forgiving anchor over the deadbeat.
- **environment_limits**: Heat lengthens a metal pendulum rod so the clock loses time in summer; wooden rods expand less, and precision clocks use compensated pendulums (Wikipedia 'Pendulum clock'). Moving a pendulum clock from sea level to 4000 ft makes it lose about 16 s a day (Wikipedia). Oil ages, dries and collects dust, changing the rate and eventually stopping the clock (Wikipedia 'Escapement'; Goodrich; SP1 notes). Printed PLA softens above about 60 °C and degrades in UV (Prusa), and PLA springs creep and take a permanent set under constant load (Ticking Turn Timer). A pendulum clock must stand level and steady; draughts, bumps and vibration can stop it, and non-self-starting escapements will not restart on their own.
- **safety_notes**: Wound mainsprings store a lot of energy and can whip out or cut fingers if released carelessly ⚑ [uncertain: general clockmaking caution]; don't over-wind printed springs (the Ticking Turn Timer sets 2.5 turns as its spring's stress limit). Drive weights of 1.5-3 kg (tomas38; SP1's 6.4 lb) can fall if a cord, knot or wall fixing fails: hang the clock on a screw in a wall stud (SP1) and keep feet and small children clear ⚑ [uncertain]. Coins, small pins and bearings in desk toys are swallowing hazards for small children ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) Out of beat (uneven tick-tock), which easily stops the clock and is one of the most common reasons for repair calls: level the case or adjust the crutch (Wikipedia 'Pendulum clock'). 2) Runs a while then stops: too much friction or too light a weight; check every gear turns freely, add weight, or fix a crutch that knocks on the pendulum rod (tomas38). 3) Escapement won't work at all: teeth too wide or pallet shape wrong; thin the teeth with a file and check the pallet (tomas38); a first printed design that slipped teeth needed tighter tolerances (jattie). 4) Teeth butting on the pallets' sloping faces because the lock is too shallow or the drop too great (Goodrich). 5) Wear of tooth tips from recoil, and pallets worn into grooves (Wikipedia; Goodrich), which is why pallets were made convex. 6) Old oil drying or trapping dust: clean and re-lubricate; high-quality watch oils last over five years (Wikipedia). 7) Worn verge escapements run fast, sometimes by hours a day (Wikipedia 'Verge escapement'). 8) Runaway escapement locks solid (pallet pins too deep) or free-runs (too shallow) (Ticking Turn Timer).
- **related**: 
  - Geneva drive (Maltese cross): also gives step-by-step rotation, but driven by a turning crank rather than released by a swinging pendulum, and it locks the output between steps
  - Ratchet and pawl: a toothed wheel and catch that allow motion one way only; an escapement is like a ratchet whose catch is rocked in and out by a pendulum to meter the motion
  - Speed governor (fly fan, centrifugal governor): slows a spring or weight smoothly and silently, used in music boxes and chiming trains, but does not keep accurate time
  - Dampers (rotary and linear soft-close dampers): slow motion smoothly without steps
  - Intermittent gear (mutilated or part-toothed gear): stop-go motion from a steadily turning drive
  - Stepper motor: electrical step-by-step rotation that can be commanded to any rate

### Pictures, videos and models

- **links**: 
  - [Anchor escapement animation 217x328px.gif (Wikimedia Commons, by Chetvorno)](https://commons.wikimedia.org/wiki/File:Anchor_escapement_animation_217x328px.gif): Animated anchor escapement: pendulum, anchor and escape wheel ticking one tooth at a time (the lead image of Wikipedia's Escapement article) *(licence: CC0 (public domain dedication))*
  - [VergeEscapementCycle.gif (Wikimedia Commons, by AlienAtSystem)](https://commons.wikimedia.org/wiki/File:VergeEscapementCycle.gif): Animated verge escapement: a crown wheel stepping round as the verge rod's two pallets rock *(licence: CC BY-SA 4.0)*
  - [Graham Escapement.svg (Wikimedia Commons, after F. J. Britten, derivative by McSush)](https://commons.wikimedia.org/wiki/File:Graham_Escapement.svg): Labelled drawing of a deadbeat (Graham) escapement with the concentric locking faces marked *(licence: Public domain)*
  - [Grasshopper-escapement colored.gif (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Grasshopper-escapement_colored.gif): Animated grasshopper escapement, Harrison's low-friction design with hinged pallets *(licence: CC BY-SA 3.0)*
  - [3D printed clock (Steve Peterson, YouTube)](https://www.youtube.com/watch?v=imYTm0Vh5TA): Video of Steve Peterson's 3D-printed 8-day pendulum clock with a deadbeat escapement running (linked from its Hackaday.io project page) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Pendulum Clock (tomas38, Printables)](https://www.printables.com/model/69659-pendulum-clock): Fully mechanical wall clock with a seconds pendulum, Graham (deadbeat) escapement and one-week run time; detailed print, finishing and troubleshooting notes *(licence: CC BY-NC-SA)*
  - [3D Printed Pendulum Clock (Steve Peterson, Hackaday.io)](https://hackaday.io/project/163814-3d-printed-pendulum-clock): 8-day printed pendulum clock with a deadbeat escapement, accurate to about 1-2 minutes a week; also on Printables (model 2508, CC BY) with full build notes *(licence: CC BY on Printables; not stated on Hackaday.io ⚑ [uncertain])*
  - [3D Printed Pendulum Clock SP1 Build Notes (Steve Peterson, March 2019)](https://cdn.hackaday.io/files/1638147008618176/SP1_Build_Notes_2019_Mar.pdf): 32-page build guide covering friction, lubrication, escapement assembly, setting the beat and adjusting the rate *(licence: not stated ⚑ [uncertain])*
  - [Ticking Turn Timer - wind-up escapement, no electronics, no metal parts (Miloslav Brožek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1794344-ticking-turn-timer-wind-up-escapement-no-electroni): Seven-part printed runaway pin-pallet escapement with a printed PETG spiral spring and a foliot bar weighted with two coins; includes a tuning guide *(licence: CC BY)*
  - [Mechanical Clock Escapement with Balance-Wheel (bene, Printables)](https://www.printables.com/model/69711-mechanical-clock-escapement-with-balance-wheel): Printable balance-wheel escapement with a small power reserve, to see how watches tick; PLA, no supports *(licence: CC BY-NC-SA)*
  - [Runaway Escapement Mechanism With Optional Windup Car (gzumwalt, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1406983-runaway-escapement-mechanism-with-optional-windup): Printed runaway escapement spring motor, optionally built into a wind-up car that creeps along *(licence: CC BY-NC-SA)*
  - [50mm Pendulum Clock Escapement (jattie, Printables)](https://www.printables.com/model/936249-50mm-pendulum-clock-escapement): Small stand-alone test rig for a Graham escapement and pendulum, documented through several failed and improved versions *(licence: GPL-3.0)*
  - [HUANGYAN920/Mechanical interactive mechanism animations](https://huangyan920.github.io/Mechanical/): Browser animation of an escapement (擒纵机构) among 250+ mechanisms *(licence: MIT (code))* *(⚑ parts need confirming)*
- **diagram_idea**: Four frames of an anchor escapement (left pallet locking a tooth; pendulum swinging right and the tooth sliding down the pallet's slope giving a push; the wheel dropping; the right pallet catching the next tooth), with a small energy arrow from the hanging weight to the pendulum and a timing arrow back from the pendulum to the wheel.
- **sources**: 
  - https://en.wikipedia.org/wiki/Escapement
  - https://en.wikipedia.org/wiki/Anchor_escapement
  - https://en.wikipedia.org/wiki/Verge_escapement
  - https://en.wikipedia.org/wiki/Grasshopper_escapement
  - https://en.wikipedia.org/wiki/Pendulum_clock
  - https://en.wikipedia.org/wiki/Pin-pallet_escapement
  - https://en.wikipedia.org/wiki/Metronome
  - https://de.wikipedia.org/wiki/Hemmung_(Uhr)
  - https://www.gutenberg.org/files/61494/61494-0.txt
  - https://507movements.com/mm_234.html
  - https://507movements.com/mm_288.html
  - https://commons.wikimedia.org/wiki/File:Anchor_escapement_animation_217x328px.gif
  - https://commons.wikimedia.org/wiki/File:VergeEscapementCycle.gif
  - https://commons.wikimedia.org/wiki/File:Graham_Escapement.svg
  - https://commons.wikimedia.org/wiki/File:Grasshopper-escapement_colored.gif
  - https://commons.wikimedia.org/wiki/File:Anchor_escapement.jpg
  - https://www.youtube.com/watch?v=imYTm0Vh5TA
  - https://www.youtube.com/watch?v=fC8D_KzMGrk
  - https://wiki.dtonline.org/index.php/Ratchet
  - https://hackaday.com/2018/06/21/clock-this-a-3d-printed-escapement-mechanism/
  - https://hackaday.com/2016/11/15/the-little-mechanism-that-made-precise-time-keeping-possible/
  - https://hackaday.io/project/163814-3d-printed-pendulum-clock
  - https://cdn.hackaday.io/files/1638147008618176/SP1_Build_Notes_2019_Mar.pdf
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/69659-pendulum-clock
  - https://www.printables.com/model/2508-pendulum-clock
  - https://www.printables.com/model/1794344-ticking-turn-timer-wind-up-escapement-no-electroni
  - https://www.printables.com/model/1406983-runaway-escapement-mechanism-with-optional-windup
  - https://www.printables.com/model/69711-mechanical-clock-escapement-with-balance-wheel
  - https://www.printables.com/model/936249-50mm-pendulum-clock-escapement
  - https://www.printables.com/model/33481-abs-printable-escapement-spring-for-3d-printed-mec
  - https://www.eliaslundgaard.com/posts/lasercut-mechanical-clock/
  - https://huangyan920.github.io/Mechanical/
  - https://help.prusa3d.com/article/pla_2062

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning ⚑ *needs confirming (best guess): read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form*
- **motion_out**: steps, back-and-forth turning, straight push or pull ⚑ *needs confirming (best guess): read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form*
- **shaft_layout**: parallel, at an angle, crossed ⚑ *needs confirming (best guess): read from the "Input: ... Output: ..." wording of `input_output`, not the usual "in -> out" form*
- **overload_response**: not applicable
- **clicks**: clicks ⚑ *needs confirming (best guess): the text uses both clicking and silent words*
- **tools**: press or vice, hand tools
- **load_max**: light
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** adjustable, make_it_yourself, safety_notes

## 199 Bell crank (angle lever)

*motion conversion.* An L-shaped lever on a pivot that turns a push or pull round a corner, and can change its size, as in RC and aircraft controls

### What it is

- **plain_name**: An L-shaped (or straight) lever on a pin that takes a push or pull coming from one direction and sends it off in another direction, and can make the movement bigger or smaller on the way
- **term**: Bell crank (bellcrank, bell-crank lever)
- **aliases**: 
  - bellcrank / bell-crank lever (Wikipedia; Sheldon Brown)
  - angle lever
  - elbow lever ('the bell-crank or elbow-lever', 507 Mechanical Movements no. 156)
  - right-angled or rectangular lever ('a rectangular lever in the form of a crank', Chambers's 1908 dictionary)
  - 90-degree bellcrank and 180-degree bellcrank (the two common forms; Wikipedia)
  - rocker / suspension rocker (race-car pushrod and pullrod suspensions; Formula 1 Dictionary)
  - control horn (on a light-aircraft rudder, where the bellcrank pivots on the rudder hinge; Wikipedia)
  - steering bellcrank (RC cars, e.g. Traxxas and Tamiya TT02 models on Printables)
  - 'clickbox' (the bell-crank gear-change unit on a Shimano Nexus 3-speed hub (brand); Wikimedia Commons)
- **family**: motion conversion
- **other_families**: gear trains, gearboxes & transmissions
- **one_liner**: A bell crank is a lever that rocks on a pivot at its corner, so a rod or cable pulling one arm makes the other arm push or pull in a different direction (usually at 90 degrees), with the arm lengths setting how much the movement and force are scaled up or down.
- **complexity**: A few parts: the lever itself (an L-, T- or straight plate with a pivot hole at the corner and a hole or several holes near the end of each arm), a pivot pin or shoulder bolt with a bushing or small ball bearing, and the two rods or cables with their end fittings (clevises, ball links, Z-bends or cable eyes). In plain words: 'lever, pivot bolt, bushing, two pushrods or cables, two clevises'. Steel control-line bellcranks come with a brass bushing, lock washer, screw and nut (Brodak); a Tamiya TT02 printed version uses an 11x5x4 mm ball bearing (Printables 1110254).
- **how_it_works**: The lever can only turn about its fixed pin. When a rod or cable pulls or pushes one arm, the lever rotates a little and its other arm moves its own rod along a new line set by the angle between the arms: 90 degrees in the classic L-shape, anything from a small angle up to a straight 180-degree bar that simply reverses the direction (Wikipedia; Rob Ives). Both arms turn through the same angle, so the arm ends move in proportion to their distance from the pivot: if the arms are equal the output moves as far as the input, otherwise the movement and force are traded against each other like any lever (load x load arm = effort x effort arm) (DT Online; Government Polytechnic Vaishali lever notes). This ratio holds only near the middle of the swing: as the lever turns further, each rod pulls less squarely on its arm, so the motion becomes non-linear; designers either keep the swing small with the arms square to the rods at neutral, or use the effect on purpose, for example to make ailerons move further up than down (Wikipedia; RC Airplane World).

### Finder attributes

- **job**: 
  - change the kind of motion: it turns a push or pull round a corner (usually 90 degrees) or reverses it (a straight 180-degree bellcrank), and turns the swing of a servo arm, pedal or hand lever into a push or pull somewhere else
  - change speed or turning force: unequal arm lengths make the output move further with less force, or less far with more force (mechanical advantage)
  - let it move (turn, slide or bend): it is the pivot point that lets a linkage of rods or cables swing
- **motion**: rotate: the lever rocks about its pivot through a limited angle, while the rods or cables on its arms move back and forth (push-pull). The useful swing is kept to a fraction of a turn so the rods stay roughly square to the arms; the rods should stay above a 40-degree angle to the arm they drive (transmission angle rule, MechSimulator)
- **degrees_of_freedom**: 1: the lever can only turn about its pivot pin. Together with its rods and the frame it forms a one-freedom linkage (a four-bar linkage when both rods are rigid), so one input position gives exactly one output position
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): it changes the direction of a push or pull (507 Mechanical Movements no. 126: 'used for changing the direction of any force') and can scale it up or down; with an offset (off-centre) pick-up point it deliberately gives unequal travel in the two directions, which RC modellers use for aileron differential (RC Airplane World)
  - none of the holding behaviours on its own: it does not lock, click or slip. If it is swung until an arm lines up with its rod it reaches a dead point where it can jam or flip over; this is avoided in control linkages but used on purpose when a bell crank is part of a toggle clamp (DT Online, Thang's 'Toggle clamp 2b' animation)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes a push or pull on and redirects it
  - shape (the parts interlock; form-fit): pins, bolts, Z-bends and clevis pins through its holes keep the rods attached
- **input_output**: Push or pull (or the swing of a lever or servo arm) -> push or pull along another line, usually at 90 degrees; any angle from about 0 to 180 degrees is possible, and a straight 180-degree bar reverses the direction (Wikipedia). Ratio: output travel / input travel = output arm length / input arm length, and the force ratio is the inverse (W x l_w = P x l_e, Polytechnic Vaishali notes). Typical sizes: Du-Bro's nylon micro bellcrank has 0.625 in (15.9 mm) from the centre hole to the outer holes (Du-Bro); control-line stunt planes use 3 to 4 in bellcranks with the pushrod hole 0.6 to 1.25 in from the pivot (Model Aviation); race-car rockers are often set so 1 cm of wheel travel gives about 2.5 cm of damper travel (Formula 1 Dictionary). Efficiency: high, since the only losses are pivot friction; no measured figure was found ⚑ [uncertain]. Shaft arrangement: not shafts; the input and output lines lie in one plane at the arm angle, and the pivot axis is square to that plane. Back-drivable: yes; pushing on the output rod moves the input, because nothing in a plain bellcrank locks. *(⚑ parts need confirming)*
- **power**: passive (no power needed); it passes on whatever push or pull it is given by a hand, foot, cable, servo or actuator
- **removability**: removable: the pivot bolt or screw undoes and the rods come off their clevises, ball links or cable ends; a Z-bend can only come off once the arm is removed from its pivot (FlyRC)
- **reuse_cycles**: effectively unlimited: nothing is deformed when it is taken apart; the limit is wear of the pivot hole and pins
- **tools_needed**: Screwdriver or hex key and a spanner for the pivot bolt and nut; pliers or Z-bend pliers to bend and fit wire pushrods (FlyRC); small screwdriver for adjustable clevises or E/Z connectors; in full-size aircraft cable systems, turnbuckles with fork ends that fit over the bellcrank (AN161) and the tools to rig them (EAA). Blue thread-locker helps keep small screws from vibrating loose (FlyRC).
- **seal**: none: it is an open lever on a pin; nothing about it seals
- **load**: Light to heavy depending on how it is built: injection-moulded nylon micro bellcranks for indoor RC planes (Du-Bro), steel control-line bellcranks with a brass bushing (Brodak), machined aluminium rockers in racing-car suspensions (Formula 1 Dictionary; the FSAE-based Printables 708756), cast or forged levers in machinery such as railway signalling and governors (Polytechnic Vaishali notes). Strong for forces in its own plane that turn it about the pivot. The pivot pin carries the combined (vector) sum of both rod forces, which for a 90-degree bellcrank is sqrt(W^2 + P^2), more than either rod force alone (Polytechnic Vaishali notes), so the pin and its mounting must be sized for that. Weak against sideways (out-of-plane) forces and twisting, which bend the pin and wear the hole; Model Airplane News warns that when an arm's travel is not in line with its pushrod 'you have extra stress'.
- **adjustable**: yes: several holes along each arm change the ratio and how quickly the output responds (Model Aviation: pushrod throw of about 0.6 in for slow response to 1.25 in for very fast response); adjustable clevises, threaded rod ends or turnbuckles set each rod's length so the lever sits at neutral (FlyRC; EAA); moving the pick-up hole ahead of or behind the centre line gives more travel one way than the other (RC Airplane World). In a race car the ratio can only be changed by fitting a different rocker (Formula 1 Dictionary).
- **play_and_precision**: Small but cumulative play: each pivot and each rod end adds a little, and linkages with many levers always have some slop and drag; ball bearings at the pivots reduce it, but even bearings have some radial play and it adds up through the system (RCHelicopterFun on mechanical mixing linkages). Full-size aircraft cable systems are adjusted so there is no backlash, both for precise control and to help prevent control-surface flutter (EAA). Repeatability is good when the pivots are tight. It tolerates very little misalignment out of its plane: the rods should lie in the plane the lever swings in, or the pin binds and wears.
- **access_needed**: both sides: the pivot is usually a bolt with a nut, so you need to reach both faces of the mount; one side only when the lever turns on a shoulder screw threaded into its mount, or in a moulded bracket such as Du-Bro's in-wing mount
- **materials**: Injection-moulded nylon (Du-Bro micro bellcrank); steel plate with a brass bushing (control-line bellcranks, Brodak); aluminium, often CNC-machined (race-car rockers; Printables 708756 generative-design bellcrank based on FSAE dimensions); cast iron or steel with a 2-3 mm brass bush in the pivot boss in heavy machinery (Polytechnic Vaishali notes); 3D-printed ABS or PETG for RC-car steering bellcranks (Printables 1110254); thin card for teaching models (Rob Ives); wood, plywood or acrylic for hobby linkages.
- **maker_difficulty**: easy: it is a flat plate with three holes that can be printed, laser cut or cut from sheet; the tricky parts are making the pivot run freely without play and getting the geometry right (arms square to the rods at neutral, enough swing without reaching a dead point)

### Making it

- **processes**: 
  - 3D print (FDM): flat printed plates, e.g. RC-car steering bellcranks in ABS or PETG (Printables 1110254)
  - 3D print (resin): small levers for models, though resin is brittle at the pivot boss ⚑ [uncertain]
  - CNC: aluminium or steel rockers and bellcranks (race cars, FSAE)
  - laser cut: plywood, acrylic or thin sheet levers
  - sheet metal: steel bellcranks cut and drilled from plate (control-line bellcranks)
  - woodwork: wooden levers for toys and automata; card for paper mechanisms (Rob Ives)
  - off-the-shelf part: RC aircraft bellcranks (Du-Bro), control-line bellcranks (Brodak), RC-car steering bellcranks *(⚑ parts need confirming)*
- **print_in_place**: no: a bellcrank is printed as a flat part and fitted onto a metal pivot bolt, bushing or bearing; no print-in-place bellcrank model was found in this search
- **making_tips_3d_printing**: 1) Print the lever lying flat with the pivot hole vertical, so the bending in the plane of the lever runs along the printed lines; FFF prints, like wood, are stronger in one direction than another (Prusa). 2) Don't use the printed hole as the bearing for anything that matters: put a metal bolt or shoulder screw through a brass bushing (as in control-line bellcrank kits, Brodak) or press in a small ball bearing (the Printables TT02 bellcrank uses an 11x5x4 mm bearing and is printed in ABS or PETG with all walls and no sparse infill). 3) For moving parts start with at least 0.3 mm clearance and adjust after a test print (Prusa); holes usually print slightly small, so ream or drill them to size. 4) Geometry: set each arm square to its rod at mid-travel; ArduPilot's setup guide sets the servo arm perpendicular to the link at the midpoint of its travel, and Model Airplane News notes that an arm whose travel is not in line with the pushrod adds stress. Keep the angle between rod and arm above about 40 degrees over the whole swing (MechSimulator transmission-angle rule) so it cannot reach a dead point. 5) Put two or three holes along each arm so you can change the ratio later (Model Aviation's throw choices). 6) Make the pivot boss beefy: the pin carries the vector sum of both rod forces (sqrt(W^2 + P^2) for a 90-degree crank), and machine-design notes size a metal lever's boss at about twice the pin diameter (Polytechnic Vaishali notes); treat this as a starting point for plastic ⚑ [uncertain]. 7) Material: PETG, ABS/ASA or nylon rather than PLA for anything warm or under steady load: in CNC Kitchen's oven test PLA gave at 60 C, PETG at 80 C and ASA at 110 C. 8) Keep the rods in the lever's plane, add a washer each side of the lever, and use a locknut tightened only until the lever swings without wobble. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: RC aircraft bellcranks, e.g. Du-Bro 'Micro 90° Bellcrank System' (brand; nylon, with mounting hardware); control-line bellcranks with brass bushing, e.g. 'Perfect Bellcrank Large' 3 3/8 in sold by Brodak (brand); RC-car steering bellcranks and bellcrank bearing kits; clevises (e.g. Kwik-Link (brand)), ball links, E/Z connectors, pushrods and Z-bend pliers (FlyRC; Du-Bro catalogue categories); shoulder bolts, bronze flanged bushings and small ball bearings for pivots; turnbuckles with AN161 fork ends that fit over a bellcrank, for full-size aircraft control cables (EAA); rod ends and clevis forks for bigger linkages; bicycle hub gear bell-crank units ('clickbox', Shimano (brand)).
- **rules_of_thumb**: 
  - Lever balance: load x load-arm length = effort x effort-arm length (W x l_w = P x l_e), so travel scales with arm length and force with its inverse (Government Polytechnic Vaishali, 'Levers and its design' notes; DT Online: equal arms give equal movement).
  - Pivot load for a right-angled bell crank: the fulcrum reaction is R_F = sqrt(W^2 + P^2), bigger than either arm force (Government Polytechnic Vaishali notes).
  - Metal bell-crank lever proportions from machine-design notes: fulcrum pin length about 1.25 x pin diameter, pivot boss outside diameter about 2 x pin diameter, and a 2-3 mm brass bush in the boss so wear can be renewed (Government Polytechnic Vaishali notes).
  - Set the arm at 90 degrees to its link at mid-travel (ArduPilot traditional-helicopter swashplate setup: servo arm perpendicular to the pitch link at the midpoint of servo travel) and keep the link-to-arm (transmission) angle above about 40 degrees over the whole swing (MechSimulator).
  - Control-line stunt models (.35-.60 engines): use at least a 3 in bellcrank, 3.5-4 in strongly recommended; pushrod hole about 0.6 in from the pivot for slow response, about 0.9 in, up to about 1.25 in for very fast response; elevator horn 0.6-1.0 in and flap horn about 1.0 in from its pivot (Ted Fancher, 'Control Line: Aerobatics', Model Aviation, May 1985).
  - Aileron differential with one servo: pick-up holes set ahead of or behind the centre line give less travel on the pulling side; typically about half as much down as up, or start a radio differential mix at 30% (RC Airplane World) or 30-40% (Model Airplane News).
  - Race-car rocker example: 1 cm of wheel movement giving about 2.5 cm of damper movement, the damper arm being the longer one (Formula 1 Dictionary).

### When to use it

- **everyday_examples**: 
  - Bicycle brakes: in a caliper brake the pull from the handlebar lever is turned through 90 degrees to squeeze the brake block against the rim (DT Online)
  - The gear-change unit on a Shimano 3-speed hub bicycle, which turns a pull on the gear cable into a push on a rod inside the axle (Sheldon Brown)
  - Car throttle and brake-pedal linkages (Wikipedia), and the steering linkage of many RC cars
  - Old servants' bell pulls, and the levers at the top of the stairs in old San Francisco houses that open the front door remotely (Wikipedia)
- **when_to_use**: Use a bell crank when a push or pull has to go round a corner or change direction inside a tight space, such as a cable from a pedal turned to move a rudder, a servo in a wing driving an aileron, a lever at the top of a staircase opening a door below, or a wheel's up-and-down movement turned sideways to a spring and damper lying flat in a car. It is also the simplest way to scale a movement up or down (longer arm = more travel, less force), which is why hobby servos usually drive their loads through a bellcrank and pushrod rather than a linear actuator (Wikipedia, 'Servo (radio control)'). It is cheap, light, precise, easy to adjust with extra holes and threaded rods, and works in both directions with rigid rods (or with cables when two cables pull against each other, as in control-line models).
- **when_not_to_use**: Avoid it when the path has many bends or has to flex: a push-pull (Bowden) cable follows curves without levers. Avoid it when the output must turn a lot or keep turning: it only rocks through a limited angle, so use bevel gears, a belt or chain, or a rack and pinion for continuous or large rotations. Avoid it when the output must stay exactly proportional over a large swing: the motion becomes non-linear, so use a pulley and cable (pull-pull) or gear sector instead. Don't rely on it to hold a position against a load: it back-drives, so add a lock, a non-back-drivable drive (worm gear or lead screw) or a toggle clamp that goes over centre. For sharing one pull evenly between two points use a whippletree (floating lever) rather than a fixed-pivot crank.
- **environment_limits**: Printed PLA levers soften at about 60 C (CNC Kitchen), so keep them out of hot cars and away from motors; PETG copes to about 80 C and ASA to about 110 C. Dirt, rust and dried grease at the pivot cause stiffness and wear; bronze bushings or sealed bearings last longer. Vibration loosens small screws and nuts, which is why RC builders add thread-locker and lock nuts (FlyRC). In aircraft, any play that develops in the control linkage can allow control-surface flutter (EAA). Plastic levers under a constant spring load may creep over time ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Pinch points between the arms, rods and frame when the linkage moves, especially if it is driven by a motor, servo or spring. Bellcranks in brake, throttle, steering or flight-control linkages are safety-critical: a cracked arm, a lost pivot nut or a clevis that pops open disconnects the control, so use locknuts or safety pins and sleeve clevises (FlyRC recommends silicone tubing on clevises to stop them opening). Parts for full-size aircraft must be the specified certified hardware (AN/MS parts; EAA), not home-printed replacements.
- **common_failures**: 1) Worn pivot hole or rod ends give play (slop) that makes the control vague and, in aircraft, can allow flutter: use bushings or bearings and replace worn parts (EAA; RCHelicopterFun). 2) Binding: rods not in the lever's plane, a pivot bolt over-tightened, or a hole printed undersize; check that it swings freely under finger force. 3) Over-travel past a dead point: the arm lines up with its rod and the linkage jams or flips; limit the swing and keep the transmission angle above about 40 degrees (MechSimulator). 4) Unequal or wrong throws because the arm was not square to the rod at neutral (ArduPilot; RC Airplane World). 5) Cracks at the pivot boss or where an arm joins it in printed or thin parts, since that is where bending is greatest ⚑ [uncertain]. 6) Loose screws, pushrods pulling out of connectors or clevises opening under vibration; use thread-locker, Z-bends or keepers (FlyRC). *(⚑ parts need confirming)*
- **related**: 
  - Servo horn and spline hub: the arm on a servo output that usually drives the pushrod to a bellcrank; a bellcrank is a separate free-pivoting lever placed elsewhere in the linkage
  - Four-bar linkage: a bellcrank with two rigid rods is one link of a four-bar linkage, and the same transmission-angle and dead-point rules apply
  - Whippletree (load-equalising lever): a floating lever that shares one pull between two points instead of redirecting it round a fixed pivot
  - Bowden (push-pull) cable: carries a push or pull round curves without levers, at the cost of friction and some lost motion
  - Toggle clamp and over-centre linkage: a bellcrank and link driven past the dead point on purpose so they lock
  - Slider-crank and Scotch yoke: turn continuous rotation into straight-line motion, whereas a bellcrank only rocks through a limited angle
  - Bevel gears or a rack and pinion: change direction for continuous or large rotations, with more parts and some backlash
  - Rod end and ball link: the joints usually used at each arm of a bellcrank to allow small misalignments

### Pictures, videos and models

- **links**: 
  - [Bellcrank (Wikipedia)](https://en.wikipedia.org/wiki/Bellcrank): Definition, 90-degree and 180-degree forms, mechanical advantage and non-linearity, uses in aircraft, cars, suspensions and bicycle hubs; an old dictionary drawing and a photo of bellcranks in a sports-car suspension *(licence: Text CC BY-SA 4.0; images per file on Commons)*
  - [Bell-Crank Steering Linkage.gif (Wikimedia Commons; Pasimi, simulated with MeKin2D)](https://commons.wikimedia.org/wiki/File:Bell-Crank_Steering_Linkage.gif): Animation of a vehicle steering linkage in which a bell crank turns a push-pull into movement of the track rods *(licence: CC BY-SA 4.0)*
  - [Chambers 1908 Bell Crank.png (Wikimedia Commons; from Chambers's Twentieth Century Dictionary, 1908)](https://commons.wikimedia.org/wiki/File:Chambers_1908_Bell_Crank.png): Simple drawing of the classic right-angled bell crank used to change the direction of bell wires *(licence: Public domain)*
  - [507 Mechanical Movements, no. 126: bell-crank lever (Brown, 1868; animated website)](https://507movements.com/mm_126.html): Animated and original drawing of 'a bell-crank lever, used for changing the direction of any force' *(licence: Book public domain; website animation link only)*
  - [Transmission of linear displacement 3b (Nguyen Duc Thang, thang010146, YouTube; shown as '90° Bell Crank' on DT Online; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=e51sMAdGS40): CAD animation of a 90-degree bell crank passing a straight push-pull round a corner *(licence: link only)*
- **make_it_yourself**: 
  - [HUANGYAN920 Mechanical: interactive mechanism animations (choose BELL-CRANK, no. 231)](https://huangyan920.github.io/Mechanical/): Browser-based parametric animation of an L-shaped bell crank (Chinese interface with English names), useful for trying arm angles and lengths before building *(licence: MIT (code on GitHub))*
  - [Four-Bar Linkage Simulator (MechSimulator)](https://mechsimulator.com/tools/four-bar-linkage/): Free online simulator that shows the transmission angle in real time; model the servo arm, pushrod, bellcrank and frame as a four-bar linkage to check the swing stays clear of dead points *(licence: link only)*
  - [TT02 Ball Bearing Bell Crank (Kyle Villacorta, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1110254-tt02-ball-bearing-bell-crank): Printable RC-car steering bellcrank with an 11x5x4 mm ball bearing at the pivot; printed in ABS or PETG with all walls and no sparse infill; Fusion 360 file included for resizing *(licence: CC BY)*
  - [Traxxas Rustler 2WD Steering Bellcrank (DR 3D, Printables; appeared in search results)](https://www.printables.com/model/518385-traxxas-rustler-2wd-steering-bellcrank): Printable replacement steering bellcrank that attaches to the servo on several Traxxas 2WD RC cars *(licence: CC BY-NC)*
  - [Generative Design Bellcrank (Ariel G., Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/708756-generative-design-bellcrank): Fusion 360 generative-design bellcrank based on Formula Student (FSAE) CNC aluminium bellcrank dimensions; shows how material gathers round the three holes *(licence: CC BY)*
  - [Bell Crank paper mechanism (Rob Ives)](https://www.robives.com/project/bell-crank-mechanism-ready-to-download/): Downloadable card model (print on thin card, cut, glue with PVA) that demonstrates a bell crank changing the direction of movement *(licence: Paid download (5 GBP); personal use ⚑ [uncertain])* *(⚑ parts need confirming)*
- **diagram_idea**: An L-shaped lever on a centre pin with a rod pulled to the left on the short vertical arm and a longer horizontal arm pushing a rod upwards twice as far, with arcs showing both arm ends turning through the same angle and a small inset showing a straight 180-degree version that simply reverses the push.
- **sources**: 
  - https://en.wikipedia.org/wiki/Bellcrank
  - https://en.wikipedia.org/wiki/Servo_(radio_control)
  - https://commons.wikimedia.org/wiki/File:Bell-Crank_Steering_Linkage.gif
  - https://commons.wikimedia.org/wiki/File:Chambers_1908_Bell_Crank.png
  - https://commons.wikimedia.org/wiki/File:Bell_Crank.gif
  - https://commons.wikimedia.org/wiki/File:Shimano_Nexus_3_bell_crank_clickbox.jpg
  - https://507movements.com/mm_126.html
  - https://507movements.com/mm_156.html
  - https://wiki.dtonline.org/index.php/Bell_Crank
  - https://www.youtube.com/watch?v=e51sMAdGS40
  - https://www.robives.com/mechanism/bell-crank/
  - https://www.robives.com/project/bell-crank-mechanism-ready-to-download/
  - https://library.modelaviation.com/article/control-line-aerobatics-102
  - https://www.eaa.org/eaa/aircraft-building/builderresources/while-youre-building/building-articles/control-systems/controlling-your-aircraft
  - https://www.eaa.org/~/media/c74169461db442a7a7a0302a07b02c76.ashx
  - https://www.modelairplanenews.com/aileron-differential-why-its-so-important-and-how-to-set-it-up/
  - https://www.modelairplanenews.com/total-control-the-right-way-to-set-up-servos/
  - https://www.rc-airplane-world.com/aileron-differential
  - https://www.flyrc.com/beginners-guide-to-pushrods-and-connectors-2/
  - https://www.sheldonbrown.com/gloss_ba-n.html
  - https://www.gpvaishali.org/gpv/download/Unit%202%20-%20design%20of%20joints%20&%20lever.pdf
  - https://www.dubro.com/products/micro-90-degree-bellcrank-system
  - https://brodak.com/control-line-parts/bellcranks/perfect-bellcrank-large.html
  - https://www.formula1-dictionary.net/f1-suspension-rockers/
  - https://ardupilot.org/copter/docs/traditional-helicopter-swashplate-setup.html
  - https://mechsimulator.com/tools/four-bar-linkage/
  - https://www.rchelicopterfun.com/ccpm.html
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://huangyan920.github.io/Mechanical/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/518385-traxxas-rustler-2wd-steering-bellcrank

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: back-and-forth turning, straight push or pull
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, input_output, make_it_yourself, making_tips_3d_printing, processes

## 200 Swashplate and wobble plate

*motion conversion.* A tilted disc on a shaft that turns rotation into back-and-forth motion of rods around it, or the reverse; also tilts helicopter blades

### What it is

- **plain_name**: A tilted disc on a spinning shaft: as the shaft turns, the edge of the disc rises and falls, pushing a ring of rods in and out one after another (or the rods push the disc round); on a helicopter the same idea tilts and lifts the spinning blades
- **term**: Swashplate (swash plate) and wobble plate (nutating plate)
- **aliases**: 
  - swash plate / swashplate (Wikipedia)
  - slant disk / slant disc (Wikipedia)
  - wobble plate / wobbler / wobble-spider (non-rotating version; Douglas Self)
  - nutator, nutating plate, Z-crank drive (the wobble-plate engine family; Wikipedia 'Cam engine')
  - oblique disc or inclined disc
  - cam plate / sine-wave swashplate (when the face is wavy rather than flat, giving several strokes per turn; Douglas Self, Wikipedia 'Axial engine')
  - yoke or hanger (the movable swash plate in variable-displacement hydraulic pumps; Wikipedia 'Axial piston pump')
  - helicopter swashplate: stationary (outer) and rotating (inner) swashplate, 'Taumelscheibe' in German (Wikipedia 'Swashplate (aeronautics)')
  - CCPM swashplate (cyclic/collective pitch mixing, e.g. H3-120, H3-140, H4-90 types on RC helicopters; RCHelicopterFun, ArduPilot)
  - axial piston pump or motor, swash-plate compressor, wobble-plate compressor, barrel engine, axial engine (machines built round it)
- **family**: motion conversion
- **other_families**: gear trains, gearboxes & transmissions
- **one_liner**: A swashplate is a disc fixed at a slant to a shaft, so turning the shaft makes rods or pistons arranged in a ring round it move back and forth parallel to the shaft (or the pistons turn the shaft); a wobble plate does the same without spinning, and a helicopter swashplate uses a tilting, sliding pair of plates to change the pitch of spinning rotor blades.
- **complexity**: A small assembly that acts as one unit. Pump or engine: shaft, slanted disc (swashplate) or a non-rotating wobble plate on a bearing on a Z-shaped shaft, a ring of pistons or rods, and the followers between them (slipper pads or shoes, rollers or ball-ended connecting rods), plus an anti-rotation guide for a wobble plate. Helicopter: a stationary (outer) ring moved by three or four servo pushrods, a rotating (inner) ring on a bearing, a centre ball or spherical bearing that lets it tilt and slide on the mast, an anti-rotation link for each ring, and pitch links with ball joints to each blade (Wikipedia 'Swashplate (aeronautics)'). A printable RC swashplate uses a GE5C spherical bearing, a 15x32x9 mm (6002) ball bearing and seven 3 mm ball studs (Printables 274330).
- **how_it_works**: Picture a disc mounted at a slant on a shaft. Seen from the side, a point on its rim moves back and forth along the shaft as the shaft turns, so a rod or piston that rests against the disc near its rim (but does not turn with it) is pushed in and out once per turn; the bigger the slant, the longer the stroke (Wikipedia 'Swashplate'). The piston's movement is a smooth sine wave, and with several pistons in a ring each one reaches its peak in turn (Wikipedia 'Axial piston pump'). In a swashplate the disc turns with the shaft, so the pistons touch it through slipper pads or rollers that slide over its face; in a wobble plate the plate sits on a bearing on a bent (Z-shaped) shaft and only wobbles (nutates) without turning, so the connecting rods can be joined to it with ball joints, but it needs a guide to stop it creeping round (Douglas Self; Wikipedia 'Cam engine'). Run backwards, pistons pushing on the plate turn the shaft, as in swashplate engines and hydraulic motors. A helicopter swashplate is a stationary ring that the pilot's controls tilt and raise, with a spinning ring on a bearing above it: tilting it makes each blade's pitch rise and fall once per turn (cyclic), raising it changes all blades at once (collective) (Wikipedia 'Swashplate (aeronautics)').

### Finder attributes

- **job**: 
  - change the kind of motion: continuous rotation of a shaft into back-and-forth motion of several rods parallel to it, or the reverse (pistons turning a shaft)
  - change speed or turning force: in variable-displacement pumps and compressors, changing the plate angle changes how much each turn pumps, like a stepless gearbox (e.g. hydrostatic transmissions)
  - let it move (turn, slide or bend): a helicopter swashplate passes tilt and up-down control from the still airframe to the spinning rotor
- **motion**: multiple: the shaft (and a swashplate) rotates continuously while the rods or pistons slide back and forth parallel to the shaft; a wobble plate only rocks (nutates). A helicopter swashplate tilts in any direction and slides up and down the mast while its inner ring spins with the rotor (Wikipedia 'Swashplate (aeronautics)')
- **degrees_of_freedom**: Pump or engine with a fixed angle: 1 (shaft rotation); every piston's position follows from the shaft angle. Variable-displacement units add 1 (the plate angle). Helicopter swashplate: 3 controlled freedoms for the stationary ring (tilt fore-and-aft, tilt side-to-side, slide up and down), plus the inner ring's spin with the mast, which is why three servos (or four) drive it (Wikipedia; ArduPilot)
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): rotation to reciprocating motion of several pistons at once, or the reverse (Wikipedia 'Swashplate')
  - none of the holding behaviours: it does not lock, click or slip; it simply transmits motion, and in pumps and compressors a pressure-controlled plate angle is what regulates output (Wikipedia 'Axial piston pump'; Rick's Free Auto Repair Advice)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it converts and transmits motion
  - shape (the parts interlock; form-fit): ball joints, slipper shoes and bearings keep the rods on the plate; small pumps use springs or inlet pressure to keep pistons against the plate (Wikipedia 'Axial piston pump')
- **input_output**: Continuous rotation -> back-and-forth (reciprocating) motion of several rods or pistons parallel to the shaft, once per turn, following a sine wave; or the reverse in engines and hydraulic motors. Stroke = 2 x r x tan(plate angle), where r is the radius of the ring of pistons (L = 2 r tan alpha; Nature Scientific Reports 2025, swash-plate compressor model). Plate angle: up to about 18 degrees in conventional swash-plate machines, limited by room for the shaft and by sideways forces that tilt the pistons in their guides (US patent 6,206,650). Efficiency: losses are mainly sliding friction between slippers and plate, which rises with plate angle, so small angles are more efficient but give shorter strokes (Nature Scientific Reports 2025); no general efficiency figure was found ⚑ [uncertain]. Shaft arrangement: in line; the pistons lie parallel to the shaft in a ring round it. Back-drivable: yes; pistons pushing on the plate turn the shaft (swashplate engines, hydraulic motors); a helicopter swashplate feeds blade loads back to the servos, which must hold it. *(⚑ parts need confirming)*
- **power**: passive (no power needed) as a mechanism; it needs its shaft turned by a motor or engine, or its pistons pushed by fluid or gas. In variable-displacement car air-conditioning compressors a control valve (often electronically controlled) sets the plate angle through crankcase pressure, so the compressor can run all the time and 'de-stroke' to near-zero output when little cooling is needed (Rick's Free Auto Repair Advice)
- **removability**: removable: it is assembled from bearings, pins, circlips and ball links and can be taken apart for service; RC swashplates come off the mast once the ball links are unclipped
- **reuse_cycles**: many times: bearings, ball links and slipper pads wear and are replaced, but the parts can be taken apart and refitted repeatedly
- **tools_needed**: Hex keys and screwdrivers for RC swashplates, ball-link pliers for the pitch links, and a swashplate levelling tool or a magnet-and-nail gauge to set it level (ArduPilot); bearing pullers or a press for bearings; for printed parts a tap for ball-stud holes (Printables 274330) and a needle file for sliding slots (Printables 1470117)
- **seal**: none: the swashplate itself does not seal; in pumps and compressors the pistons run in sealed cylinders, the whole assembly runs in oil, and a valve plate or check valves direct the flow (Wikipedia 'Axial piston pump'; Michael Smith Engineers on Hydra-Cell)
- **load**: Light to very heavy: RC helicopter swashplates carry blade-pitch loads of a few newtons ⚑ [uncertain]; axial piston pumps power jet-aircraft hydraulics (the F-14's 9-piston pump gave 3000 psi and up to 84 US gal/min) and a 500 hp swashplate engine drives the Mark 48 torpedo (Wikipedia 'Axial piston pump', 'Axial engine'). Strong along the shaft, the direction in which the pistons push on the plate. The weak points are the sliding contact between slippers and plate, which needs a film of oil, and the sideways forces on the pistons, which grow with the plate angle (US 6,206,650). *(⚑ parts need confirming)*
- **adjustable**: yes: in variable-displacement pumps and compressors the plate angle is changed while running, from zero (no stroke, no flow) to maximum, by a lever, a servo control or a pressure-compensating valve (Wikipedia 'Axial piston pump'); car air-conditioning compressors change their stroke through a control valve (Rick's Free Auto Repair Advice). On helicopters the pilot or servos tilt and raise it continuously; on RC models the pitch-link and servo-link lengths are adjusted so the plate sits level (ArduPilot; RCHelicopterFun).
- **play_and_precision**: Precise when new, but play accumulates: every ball link and bearing in a helicopter control system adds a little slop, which is why electronic mixing (CCPM) with fewer linkages gives more precise control (RCHelicopterFun). A four-servo swashplate can bind because four points over-constrain a plane (ArduPilot). Pumps need very fine clearances between pistons and cylinders and a near-perfect seal between the turning cylinder block and valve plate (Wikipedia 'Axial piston pump'). A wobble plate's friction on its shaft tends to turn it, which spoils its alignment with the pistons unless it is guided (Douglas Self).
- **access_needed**: end of a tube or shaft: it is threaded onto the shaft or mast and fitted from one end; the ball links round it are reached from the side
- **materials**: Steel pistons, shafts and plates with bronze or coated slipper pads in hydraulic pumps and compressors ⚑ [uncertain]; metal rings with ball bearings in full-size and RC helicopters; RC helicopter swashplates often combine aluminium or plastic rings with ball bearings and steel ball studs ⚑ [uncertain]; printed demonstration swashplates and engines in PLA or PETG (Printables 274330, 934945, 1470117); a spherical plain bearing (GE5C) and a 6002 ball bearing in a printed RC swashplate (Printables 274330). *(⚑ parts need confirming)*
- **maker_difficulty**: moderate for a demonstration model (printable engines and rotor heads exist, some needing no extra hardware); hard for a working flying swashplate or pump: it needs bearings, low-slop ball links, careful levelling and, for pumps, very fine piston clearances, so buy the swashplate or pump and build round it

### Making it

- **processes**: 
  - 3D print (FDM): demonstration engines and rotor heads, printed swashplate rings built round standard bearings (Printables 274330, 934945, 1470117)
  - 3D print (resin): small precise parts such as ball-link cups ⚑ [uncertain]
  - CNC: metal rings, plates and hubs for RC and full-size helicopters and pumps
  - off-the-shelf part: RC helicopter swashplates and ball links, axial piston pumps and motors, car air-conditioning compressors, wobble-plate diaphragm pumps *(⚑ parts need confirming)*
- **print_in_place**: no: it is printed as separate parts and assembled round bearings and ball joints; fully printed demonstration engines exist, but as separate parts that snap or bolt together (Printables 934945, 'no additional hardware')
- **making_tips_3d_printing**: 1) Put a real ball bearing between the spinning ring and the still ring, and a spherical bearing or ball in the centre so it can tilt; one printable RC swashplate uses a GE5C spherical bearing, a 15x32x9 mm (6002) ball bearing and seven 3 mm ball studs screwed into tapped holes (Printables 274330). Its designer found a zero-tolerance version too tight and added a small bearing clearance in a later version (0.01, units not stated). 2) Printed ball joints and swashplate links tend to be sloppy or stick at some angles: the NAVI coaxial drone builder gave up on printed swashplate linkages and used commercial ones, and a commenter reported the same problem (Hackaday.io NAVI). If you print them, sand away support marks so the balls are round (Printables 1470117). 3) Stop the still ring turning and make the spinning ring turn with the shaft (anti-rotation links; Wikipedia); a wobble plate needs a guide such as an arm in a slot (Douglas Self). 4) Keep the plate angle modest: stroke is 2 r tan(angle) (Nature Scientific Reports 2025), and conventional swash-plate machines stay below about 18 degrees because sideways forces on the pistons grow with the angle (US 6,206,650). 5) Pistons must be pulled back as well as pushed: use two rollers or shoes, one each side of the plate (Douglas Self), a spring behind each piston, or ball-ended rods on a wobble plate (Wikipedia 'Axial piston pump'). 6) Grease the sliding face and pick slippery, heat-tolerant plastics (PETG, nylon or POM) for sliding parts; PLA gives at about 60 C (CNC Kitchen). 7) Print rings flat for roundness; support-heavy parts such as rotor-head frames print with tree supports and may need the slots filing (Printables 1470117). 8) Level the finished swashplate; printable levelling tools for many RC helicopters are shared on Printables.
- **off_the_shelf_parts**: RC helicopter swashplate assemblies (sold to fit each helicopter size, from about '400-size' electrics upwards; RCHelicopterFun), ball links and ball studs, pitch links, swashplate levelling tools (Printables has many printable ones, e.g. 'OMP M4 Swashplate Leveler'), anti-rotation guides; spherical plain bearings (e.g. GE5C) and deep-groove ball bearings (e.g. 6002-2RS) for printed builds (Printables 274330); flybarless controllers with CCPM mixing (RCHelicopterFun); axial piston pumps and motors (swash-plate type, fixed or variable displacement); swash-plate and wobble-plate car air-conditioning compressors (MACS); wobble-plate diaphragm pumps, e.g. Hydra-Cell (brand; Michael Smith Engineers) and 12 V RV fresh-water pumps (RV Lifestyle).
- **rules_of_thumb**: 
  - Stroke of each piston = 2 x r x tan(alpha), where r is the radius of the ring of pistons and alpha the plate angle; piston position follows X = r tan(alpha) sin(theta) as the shaft turns (Nature Scientific Reports, 'Modeling, analysis, and experimental validation of a swash plate compressor for automotive air conditioning', 2025).
  - A smaller plate angle cuts slipper-friction losses and shaft power but also cuts stroke and output, so the angle is a trade-off between efficiency and capacity (Nature Scientific Reports 2025).
  - Conventional swash-plate machines limit the plate angle to about 18 degrees, because of room for the shaft and sideways forces on the pistons (US patent 6,206,650 B1, TCG Unitech).
  - At zero plate angle there is no stroke and no flow; variable-displacement pumps move the plate between zero and maximum to control flow or hold a set pressure (Wikipedia 'Axial piston pump').
  - Axial piston pumps usually have an odd number of pistons; typical pistons are under about 13 mm (half an inch) in diameter with a similar stroke, turning at around 3000 rpm (Wikipedia 'Axial piston pump').
  - Car air-conditioning compressors: opposed swash-plate types usually have six or ten pistons, single-row wobble-plate types five, six or seven (MACS).
  - A swashplate needs two rollers or shoes per piston, one each side, if it must both push and pull the piston (Douglas Self, 'Axial Internal-Combustion Engines').
  - RC helicopter swashplates: the most common electronic mixing uses three servos 120 degrees apart; 140-degree and 135-degree layouts even out the geometry, and four-servo 90-degree layouts are used on big models (RCHelicopterFun); four-servo plates can bind and need extra care (ArduPilot).
  - Set each servo arm perpendicular to its link at mid-travel and level the swashplate before setting pitch ranges (ArduPilot traditional helicopter setup).

### When to use it

- **everyday_examples**: 
  - The air-conditioning compressor in most cars, which uses a swash plate or wobble plate to drive its pistons (Wikipedia; MACS)
  - The rotor head of a helicopter or RC model helicopter, where the ring below the blades tilts to steer (Wikipedia)
  - A campervan or boat fresh-water pump, where an off-centre part on the motor shaft presses three diaphragms in turn (RV Lifestyle); industrial Hydra-Cell pumps use a true wobble plate for up to five diaphragms (Michael Smith Engineers)
  - Some pressure washers (e.g. several Kärcher (brand) models) and the hydraulic drive motors of small earth-moving machines such as skid loaders, which use axial piston pumps and motors (Wikipedia)
- **when_to_use**: Use it when you need several pistons or rods driven from one shaft in a compact, round package with everything parallel to the shaft: pumps, compressors, hydraulic motors and barrel-shaped engines (axial engines were chosen for small frontal area and good balance; Douglas Self). It is the natural choice when output must be varied smoothly while running, since changing the plate angle changes the stroke from zero to maximum (Wikipedia). On helicopters and some thrust-vectoring models it is the classic way to pass tilt and lift commands to spinning blades. As a demonstration model it shows rotary-to-reciprocating conversion very clearly.
- **when_not_to_use**: For one or two pistons a crank and connecting rod (slider-crank), an eccentric or a Scotch yoke is simpler. For several strokes per turn or a custom motion profile use a cam (plate, barrel or face cam). For engines, the crankshaft has won: swashplate and wobble-plate engines have repeatedly failed commercially, partly because of wear and reliability problems in the plate mechanism and poor maintenance access (Douglas Self). For flying machines, multirotors avoid the swashplate by varying motor speeds, and a 'virtual swashplate' can replace it with hinged blades and a motor whose speed varies within each turn (Hackaday). If a printed model needs precise low-slop control, buy commercial ball links rather than printing them (Hackaday.io NAVI).
- **environment_limits**: Pumps and hydraulic motors are limited by their fluid, typically to about 120 C, and rely on the fluid to lubricate the sliding faces (Wikipedia 'Axial piston pump'). Printed demonstration parts soften at about 60 C in PLA and 80 C in PETG (CNC Kitchen). Dust and grit wear the ball links and sliding faces. Blowing compressed air through an RV water system to winterize it can damage a wobble-plate pump's diaphragms (RV Lifestyle). Vibration loosens ball links and servo-arm screws on model helicopters ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Spinning rotor blades on a helicopter or RC model can cause serious injury: disconnect power before adjusting the swashplate or linkages ⚑ [uncertain]. Hydraulic pumps and motors run at high pressure (e.g. 3000 psi in jet-aircraft systems; Wikipedia), and a pinhole leak can inject fluid into skin; car air-conditioning systems hold refrigerant under pressure and should be serviced by trained people (MACS offers Section 609 certification). Exposed pistons and plates on demonstration engines are pinch points. *(⚑ parts need confirming)*
- **common_failures**: 1) Wear or scuffing of the sliding face between slippers and plate when lubrication is poor; lubricating this face is one of the main design problems (Wikipedia 'Axial piston pump'). 2) A wobble plate creeping round with the shaft because of friction, which spoils its alignment with the pistons; guide it (Douglas Self). 3) Slop from worn ball links and bearings, giving vague control or vibration in helicopters (RCHelicopterFun). 4) Binding in four-servo swashplates or badly adjusted links (ArduPilot). 5) An unlevel swashplate giving unequal blade pitch; level it with a tool or magnet-and-nail gauge (ArduPilot). 6) In variable car air-conditioning compressors, most faults are in the control valve that sets the plate angle rather than in the compressor itself (Rick's Free Auto Repair Advice). 7) Printed ball joints and linkages that stick at some angles (Hackaday.io NAVI).
- **related**: 
  - Cam and follower (face and barrel cams): a swashplate is a flat face cam; a wavy 'cam plate' gives several strokes per turn (Douglas Self)
  - Slider-crank and crankshaft: the usual way to turn rotation into piston motion, one crank throw per cylinder
  - Scotch yoke: another crankless way to get sine-wave straight-line motion, but for one axis
  - Nutating disc engine or meter: a disc that wobbles without being turned into reciprocating motion (Wikipedia 'Swashplate')
  - Bent-axis piston pump: tilts the whole cylinder block instead of using a slanted plate
  - Universal joint: the joint used in some swashplate mechanisms instead of a centre ball (Wikipedia 'Swashplate (aeronautics)')
  - Stewart platform (hexapod): an alternative way to tilt and raise a stationary swashplate (Wikipedia 'Swashplate (aeronautics)')
  - Rod end and ball link: the joints that connect servo pushrods and pitch links to a helicopter swashplate
  - Wobble-plate diaphragm pump: uses the same wobble to flex diaphragms instead of sliding pistons (Michael Smith Engineers; RV Lifestyle)

### Pictures, videos and models

- **links**: 
  - [Swashplate (Wikipedia)](https://en.wikipedia.org/wiki/Swashplate): Definition and uses in engines, axial piston pumps, car air-conditioning compressors and helicopters, with an animation of a rotating swashplate driving six rods *(licence: Text CC BY-SA 4.0; images per file on Commons)*
  - [Swashplate anim metal.gif (Wikimedia Commons; Van helsing)](https://commons.wikimedia.org/wiki/File:Swashplate_anim_metal.gif): Animation: a slanted plate turning with its shaft pushes six rods in and out one after another *(licence: CC BY 2.5)*
  - [HelicopterSwashPlate Tilted.gif (Wikimedia Commons; Richard Wheeler, Zephyris)](https://commons.wikimedia.org/wiki/File:HelicopterSwashPlate_Tilted.gif): Animation of a tilted helicopter swashplate changing each blade's pitch as it goes round (cyclic control); companion files show the flat and raised positions *(licence: CC BY-SA 3.0)*
  - [Axialkolbenpumpe - einfache Animation.gif (Wikimedia Commons; MichaelFrey)](https://commons.wikimedia.org/wiki/File:Axialkolbenpumpe_-_einfache_Animation.gif): Simple animation of an axial piston pump: pistons in a turning cylinder block running against a slanted swash plate *(licence: CC BY-SA 4.0)*
  - [Axial Internal-Combustion Engines (Douglas Self, The Museum of RetroTechnology)](http://www.douglas-self.com/MUSEUM/POWER/unusualICeng/axial-ICeng/axial-IC.htm): Side-by-side animations (by Bill Todd) of a wobble-plate motor and a swash-plate motor, explaining why one rotates and the other does not, plus a gallery of historic barrel engines *(licence: link only)*
- **make_it_yourself**: 
  - [Helicopter Swashplate (SemperDiscere, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/274330-helicopter-swashplate): Printable swashplate 'for a 4 rotor helicopter' built round a GE5C spherical bearing, a 15x32x9 mm ball bearing and seven 3 mm ball studs *(licence: CC BY)*
  - [Helicopter main rotor with swash plate (gbombadon, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1470117-helicopter-main-rotor-with-swash-plate): Demonstration helicopter rotor head with turning blades, a swash plate, adjustable pitch links and collective; printed with tree supports and snapped together *(licence: CC BY-NC-SA)*
  - [Swash Plate Engine (No Extra Hardware Needed) (KillerBees, Printables; appeared in search results)](https://www.printables.com/model/934945-swash-plate-engine-no-extra-hardware-needed): Fully printed, turnable cut-away model of a swash-plate engine based on the INNengine e-REX, showing the pistons moving; fits a 220 x 220 x 250 mm build volume *(licence: Standard Digital File License (Printables))*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (choose PLUNGER-PUMP, no. 142, the axial piston pump)](https://huangyan920.github.io/Mechanical/): Browser-based parametric animation of an axial piston pump in which a slanted swash plate drives rotating pistons (Chinese interface with English names) *(licence: MIT (code on GitHub))*
  - [Mars Ingenuity Helicopter (Nick Rehm, Hackaday.io)](https://hackaday.io/project/178091-mars-ingenuity-helicopter): Build log of a 1:1-scale flying copy of NASA's Ingenuity Mars helicopter, 3D-printing as many parts as possible, including the swashplate and transmission assemblies *(licence: ⚑ [uncertain] not stated on the page)* *(⚑ parts need confirming)*
- **diagram_idea**: A side view of a shaft with a disc on it at a slant and four pistons in cylinders parallel to the shaft, shown at four moments a quarter-turn apart so the reader sees each piston pushed in and let out in turn, with a small second panel showing the non-rotating wobble plate on a Z-shaped shaft and a third showing a helicopter swashplate tilting the blades.
- **sources**: 
  - https://en.wikipedia.org/wiki/Swashplate
  - https://en.wikipedia.org/wiki/Swashplate_(aeronautics)
  - https://en.wikipedia.org/wiki/Cam_engine
  - https://en.wikipedia.org/wiki/Axial_piston_pump
  - https://en.wikipedia.org/wiki/Axial_engine
  - https://en.wikipedia.org/wiki/Cyclic/collective_pitch_mixing
  - https://commons.wikimedia.org/wiki/File:Swashplate_anim_metal.gif
  - https://commons.wikimedia.org/wiki/File:HelicopterSwashPlate_Tilted.gif
  - https://commons.wikimedia.org/wiki/File:HelicopterSwashPlate_Raised.gif
  - https://commons.wikimedia.org/wiki/File:Axialkolbenpumpe_-_einfache_Animation.gif
  - https://commons.wikimedia.org/wiki/File:Axial_piston_pump_labeled.svg
  - https://commons.wikimedia.org/wiki/File:Taumel_142_b.png
  - https://commons.wikimedia.org/wiki/File:Taumelscheibe_08.gif
  - http://www.douglas-self.com/MUSEUM/POWER/unusualICeng/axial-ICeng/axial-IC.htm
  - https://www.nature.com/articles/s41598-025-27318-w
  - https://patents.google.com/patent/US6206650B1/en
  - https://macsmobileairclimate.org/2010/10/20/compressor-week-continues-swash-and-wobble-plate-compressors/
  - https://ricksfreeautorepairadvice.com/how-a-variable-displacement-ac-compressor-works/
  - https://www.michael-smith-engineers.co.uk/resources/useful-info/hydra-cell-wobble-plate-design
  - https://rvlifestyle.com/mysteries-rv-water-pump/
  - https://www.rchelicopterfun.com/ccpm.html
  - https://www.rchelicopterfun.com/swashplate-setup.html
  - https://ardupilot.org/copter/docs/traditional-helicopter-swashplate-setup.html
  - https://hackaday.com/2020/06/25/building-and-flying-a-helicopter-with-a-virtual-swashplate/
  - https://hackaday.com/tag/swashplate/
  - https://hackaday.io/project/20793-navi-hey-listen
  - https://hackaday.io/project/178091-mars-ingenuity-helicopter
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://huangyan920.github.io/Mechanical/
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/934945-swash-plate-engine-no-extra-hardware-needed

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: back-and-forth straight
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: press or vice, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, load, make_it_yourself, materials, processes, safety_notes

## 278 Tendon-driven joint (cable-pulled finger or tentacle)

*motion conversion.* A string pulled from a distance bends a chain of hinged or flexible segments, as in printed robot hands and tentacles, with elastic cord or a second string pulling them back

*Also covers:* Different from the Bowden cable (only the sleeve) and the Posable segmented arm (not driven). Also covers spring-closed (voluntary-opening) versus cable-closed (voluntary-closing) grippers, described for maker use only.

### What it is

- **plain_name**: A finger or tentacle made of small hinged or bendy pieces with a string running through them: pull the string from a distance and the pieces curl up, let go and an elastic cord, a springy hinge or a second string straightens them again
- **term**: Tendon-driven joint (cable-driven finger or tendon-driven continuum segment)
- **aliases**: 
  - cable-driven finger, tendon-actuated finger or string-pulled finger
  - tendon-driven robot (TDR) (Wikipedia)
  - cable-driven tentacle, mechanical tentacle or animatronic tentacle
  - tendon-driven continuum robot or snake arm (a bendy backbone pulled by several tendons)
  - underactuated finger (one tendon bending several joints, as in the Yale OpenHand)
  - body-powered or wrist-driven 3D-printed prosthetic hand (e-NABLE designs such as Raptor Reloaded and Phoenix)
  - flexor tendon (the pulling string) and extensor tendon or elastic return (the opening side)
  - agonist-antagonist tendons (two strings pulling opposite ways)
  - printed cable-driven mechanism, e.g. Xstrings (research project name)
- **family**: motion conversion
- **other_families**: cord, strap, webbing & textile hardware, compliant mechanisms & flexures, hinges & pivots, print-in-place & 3D-printing joints
- **one_liner**: A tendon-driven joint bends a chain of hinged or flexible segments by pulling a string anchored near the tip and threaded past each joint a little way off its pivot, so a straight pull from a distant motor, lever or wrist becomes a curling motion, while elastic cord, springy hinges or a second string pull it back.
- **complexity**: A small assembly that acts as one unit: (1) segments (finger bones or tentacle 'vertebrae'), printed or cut; (2) joints between them: pins, flexible flexure hinges, or a continuous bendy backbone; (3) one or more tendons, usually braided fishing line or thin wire rope, anchored at the tip; (4) routing holes, guide pins, small pulleys or a sleeve that keep each tendon a set distance from each joint; (5) a return: elastic cord or rubber bands, the springiness of the hinges, or a second (antagonist) tendon; (6) a tensioner (screw, pin or spring) to take up slack; (7) the puller: a servo or winch with a pulley, the user's wrist (e-NABLE hands) or a hand lever or joystick (Frontiers 2021; Yale OpenHand; InMoov; Thingiverse 'Animatronic Tentacle MK III').
- **how_it_works**: Each tendon runs along the segments a small distance from each joint's pivot (its moment arm), so pulling it produces a turning force at that joint equal to the tension times that distance (OpenHand measures the moment arm from the tendon hole to the flexure centreline). Shortening the tendon path makes the joints bend; in a Raptor Reloaded finger, 15 mm of pull at 22.2 N curled both joints to 90 degrees (Frontiers 2021). One tendon passing several joints drives them all at once (underactuation), so the finger keeps closing round an object until every segment touches it; the order in which joints close is set by their relative stiffness (OpenHand). Because strings can only pull, something must pull the other way: elastic cords, rubber bands or springy flexures open the finger, or cables are used in pairs so the joint can be pulled both ways (Hackaday, Vasquez 2021); a tentacle or continuum robot has several tendons spaced round a bendy backbone and pulled from outside the body (Wikipedia 'Continuum robot'). A gripper worked by one cable also needs a choice that body-powered prosthetic hooks make: spring-closed (voluntary opening, 'pull to open'), where elastic bands or springs give the grip and pulling the cable opens it, so once closed it holds 'like a passive vice' with no pull needed; or cable-closed (voluntary closing, 'pull to close'), where the grip follows the pull and needs 'constant tension to grip', but can be much stronger and lets the operator feel how hard it is squeezing (Wikipedia 'Prosthesis').

### Finder attributes

- **job**: 
  - change the kind of motion: turns a straight pull on a string into the bending of a finger or tentacle
  - let it move (turn, slide or bend): the segments hinge or flex while the tendon controls how far
  - hold or release using power: a servo or winch keeps the tendon tight to hold a grip and lets go to release it (InMoov; Yale OpenHand)
- **motion**: multiple: each joint rotates (typically up to about 90 degrees per joint in printed fingers, Frontiers 2021) and a tentacle or flexure finger flexes continuously along its length
- **degrees_of_freedom**: One per hinge, but fewer tendons than joints are often used: a printed finger has 2-3 joints driven by one tendon (underactuated), and a whole e-NABLE hand has at least 10 joints driven by one wrist movement (Frontiers 2021); a tentacle segment bends in 2 directions, commonly using three or four tendons spaced round it ⚑ [uncertain]. Fully controlling n joints with pull-only strings needs at least n+1 tendons (arXiv 2507.17163), or 2n with one opposing pair per joint. *(⚑ parts need confirming)*
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): a straight pull (often from a motor turning a pulley) becomes bending of a chain of joints
  - self-aligning or self-centring: an underactuated finger, or several fingers sharing one pull through a whippletree or floating pulley, wraps round and conforms to an odd-shaped object without sensors (Yale OpenHand; e-NABLE Phoenix)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes a pull on into bending
  - powered hold: the grip lasts only while the actuator or the user keeps the tendon tight
  - spring force (a spring or springy part presses it in place): elastic cords, rubber bands or flexures return the segments to their rest position (Frontiers 2021)
- **input_output**: Straight pull (tendon travel and tension) -> bending of one or more joints. Torque at a joint = tendon tension x moment arm (OpenHand used 9 mm moment arms). A larger moment arm gives more torque per newton but needs more tendon travel for the same angle. Example: a Raptor Reloaded finger flexed 45 degrees with 5.7 mm of pull at 8.9 N and 90 degrees with 15 mm at 22.2 N (Frontiers 2021). Tendon force from a motor = motor torque / pulley radius: a 7.3 N m servo with a 10 mm pulley gives a theoretical 365 N per finger in the four-finger OpenHand. Efficiency falls with every bend the tendon rubs round: by the capstan equation the tension needed rises exponentially with the total bend angle, while free-turning pulleys add almost no friction (Hackaday, Vasquez 2021). Arrangement: the tendon runs alongside the segments and can be led round corners through sleeves or over pulleys. Back-drivable: yes if the puller is back-drivable (the finger springs back when released); with a non-back-drivable actuator the locked tendon lets the fingers resist much larger forces than they can actively exert (OpenHand).
- **power**: passive or powered: body-powered versions are pulled by the user's wrist (e-NABLE hands) or by hand through a lever or joystick (Thingiverse 'Cable Mechanism Joystick'); robot versions use a servo, winch or other motor turning a pulley (InMoov; Yale OpenHand) or an artificial muscle. If power is lost, what happens depends on the actuator: a non-back-drivable gearmotor or locked tendon keeps the last position (OpenHand), whereas a back-drivable drive lets the elastic return open the finger ⚑ [uncertain]. *(⚑ parts need confirming)*
- **removability**: removable: tendons are knotted (often with a drop of glue) or clamped and can be cut and re-tied, and segments are held by pins or screws (InMoov; e-NABLE)
- **reuse_cycles**: many times: tendons and elastic cords are cheap wear parts that can be re-tied or replaced; the printed segments themselves eventually fatigue, e.g. a PLA finger loaded to 10 N was predicted to last about 300,000 cycles (about 16 years at 50 grips a day), an ABS one about 70,000 (Frontiers 2021)
- **tools_needed**: Scissors or side cutters, a lighter or glue for line ends, cyanoacrylate glue for the knots (InMoov), small screwdriver or hex key for servo pulleys, tensioner screws and pins, pliers, a drill to clear tendon holes, and for wire-rope tentacles a wire-rope cutter, crimping or swaging tool and ferrules (Thingiverse 'Animatronic Tentacle MK III'); e-NABLE hands also use a heat gun to thermoform the gauntlet (e-NABLE Phoenix).
- **seal**: none: open strings and holes; nothing seals
- **load**: Light to medium: printed prosthetic fingers are designed for about 22 N of grasping force (Frontiers 2021) and the Yale OpenHand measured 10 N grip with a servo able to put a theoretical 365 N into each tendon. Tendons themselves are strong (the braided line in Frontiers 2021 was rated 440 N, far above the 28 N tested), so the limits are the printed segments, pins and tendon holes. Strong only in the direction the tendon pulls; the opening side is only as strong as the elastic return; weak sideways and in twist, especially flexure fingers, which have the lowest twisting stiffness (OpenHand).
- **adjustable**: yes: tendon tension and the finger's resting position are set by re-tying knots, turning tensioner screws or pins, or moving the servo pulley's zero position (InMoov; e-NABLE Phoenix); the closing sequence is set by the stiffness ratio of the joints (flexure thickness) and the moment arms (OpenHand); a sprung tensioner can absorb small changes in path length (InMoov)
- **play_and_precision**: Noticeable: tendons stretch, which costs strength and smoothness (Wikipedia 'Tendon-driven robot'), ordinary nylon line stretches too much (InMoov), slack and friction in the holes cause dead band and hysteresis, and moving other joints changes the tendon path length (turning the InMoov wrist tightens or slackens the finger tendons; in multi-segment tentacles the tendons of the far segments pass through the near ones, coupling their motion, arXiv 2507.17163). It is very tolerant of misalignment and knocks because it is compliant, but accurate positioning needs sensors or careful calibration.
- **access_needed**: not applicable: it is built into the mechanism; when assembling you need to thread each tendon through every segment from the tip to the puller
- **materials**: Segments: PLA, ABS or PETG prints, with flexible joints in TPU or Filaflex, or flexures cast in urethane inside the print (Frontiers 2021 Table 2; Yale OpenHand). Tendons: braided UHMWPE fishing line such as Dyneema or Spectra (brands), typically 100-200 pound test (OpenHand; InMoov), not plain nylon monofilament, which stretches (InMoov); thin wire rope (1/16 inch) for bigger tentacles (Thingiverse MK III); nylon cables printed in place inside PLA parts (Hackaday, Xstrings). Returns: 3 mm elastic shock cord, orthodontic or other rubber bands, or flexible joints (Frontiers 2021). Guides: steel pins, small tubes, brake-cable housing, or a speedometer cable as a tentacle backbone (OpenHand; InMoov; Thingiverse MK III).
- **maker_difficulty**: easy to moderate: printing the segments and threading fishing line is easy, but getting the tension right (e-NABLE call improper tensioning 'the most common mistake'), keeping friction low and stopping tendons cutting through the plastic takes care

### Making it

- **processes**: 
  - 3D print (FDM): fingers, hands, tentacle vertebrae and pulley blocks (e-NABLE, InMoov, Yale OpenHand)
  - 3D print (resin): small, smooth finger parts and tendon guides ⚑ [uncertain]
  - off-the-shelf part: braided fishing line, elastic cord, steel pins, servos, wire rope, ferrules and cable housing
  - CNC: metal tentacle vertebrae or pulleys for heavy-duty versions ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: partly: hinged fingers can be printed already assembled, but the tendon is normally threaded in afterwards; research has shown fully printed-in-place nylon cables inside PLA mechanisms, which needed special settings to stop the cable sticking or delaminating (Hackaday 2025, Xstrings)
- **making_tips_3d_printing**: 1) Keep the tendon path smooth and low-friction: the force needed rises exponentially with the total angle the tendon wraps round fixed surfaces, so remove unnecessary bends and use free-turning pulleys at sharp turns (Hackaday, Vasquez 2021; Yale OpenHand). 2) Stop the tendon sawing through the plastic: braided line under load 'can wear and cut through the rapid-prototype material', so OpenHand press-fitted 3.18 mm steel guide pins at the rubbing points, InMoov slides the line through a small piece of tube, and Frontiers 2021 names tearing from friction between cable and plastic as the likely tendon failure. 3) Make tendon holes and tunnels generous and rounded: e-NABLE's Phoenix Reborn widened all cable tunnels and runs the elastic cord in tunnels from fingertip into the palm. 4) Use braided UHMWPE line, not nylon monofilament, and secure the tip with several knots plus a drop of cyanoacrylate glue (InMoov); UHMWPE is slippery and holds knots poorly (Wikipedia 'UHMWPE'). 5) Design in a tensioner (a screw, a tensioning pin or a sprung slider) because tension is the hardest thing to get right (e-NABLE; InMoov). 6) Prefer elastic cord to rubber bands where it gets hot: e-NABLE replaced all rubber bands for hands used in the tropics (Phoenix Reborn). 7) Choose joint types deliberately: flexures adapt to awkward contacts and survive knocks but twist easily; pin joints are stiffer and more repeatable; OpenHand suggests a pin joint at the base and a flexure at the tip, and sets the closing order with flexure thickness (stiffness ratio 2.5 in its prototype). 8) Make pins a snug fit: Phoenix Reborn resized pins for this. 9) Do not twist or tangle tendons where they run together through the wrist or base (InMoov). 10) Print segments so the tendon load and pin load do not pull layers apart; OpenHand oriented parts to be stiffest in the loading direction.
- **off_the_shelf_parts**: Braided UHMWPE fishing line (e.g. Dyneema, Spectra (brands)) of 100-200 pound test (OpenHand; InMoov); elastic shock cord about 3 mm (Frontiers 2021), orthodontic elastics or loom bands (Printables 5611 e-Nable remake); steel dowel pins (3.18 mm in OpenHand); M3 screws; small PTFE or plastic tube for guides; extension springs for tensioners (InMoov uses 0.5 mm wire, 1 cm long); hobby servos with printed pulleys (InMoov) or smart servos such as Dynamixel MX-64 (brand) (OpenHand); 1/16 inch wire rope, barrel ferrules, wire-rope clamps, 5 mm brake-cable housing and speedometer cable for tentacles (Thingiverse MK III and joystick); assembly kits for e-NABLE hands (sold by 3D Universe (brand), e-NABLE Phoenix page).
- **rules_of_thumb**: 
  - Capstan equation: the tension the puller must supply is the tension at the far end times e^(mu x theta), where theta is the total bend angle (in radians) of every fixed surface the tendon rubs round, added together even if the bends go opposite ways; with mu = 0.3, two full wraps give 6.6 times the friction of one (Hackaday, Vasquez 2021; Wikipedia 'Capstan equation'). The same exponential friction applies joint by joint in tendon-driven robots (arXiv 2507.17163).
  - Joint torque = tendon tension x moment arm (distance from the tendon hole to the joint centre); OpenHand fingers used 9 mm moment arms and gave 10 N of grip (Ma et al., ICRA 2013).
  - Tendon force from a motor = motor torque / pulley radius: a 7.3 N m servo on a 10 mm diameter pulley can theoretically put 365 N into each of four finger tendons (Ma et al., ICRA 2013).
  - A typical printed finger (Raptor Reloaded) needs about 15 mm of tendon travel and 22.2 N to close fully to 90 degrees (Frontiers 2021).
  - Pull-only tendons: at least n+1 tendons are needed to control n joints independently (arXiv 2507.17163); a single tendon plus a spring return controls one motion, and underactuated fingers accept that the joints share one tendon.
  - e-NABLE wrist-driven hands: tension the non-flexible cords so the palm sits about 30-45 degrees to the gauntlet at rest (e-NABLE Phoenix page).
  - Sprung tensioners must be at rest (not stretched) when you set the tendon tension, otherwise they do nothing (InMoov).
  - Printed finger life at 10 N: about 300,000 cycles in PLA and 70,000 in ABS by fatigue analysis; ABS failed at 15 N and above (Frontiers 2021).
  - UHMWPE line creeps under constant load and should not be used above about 90 C for long periods (Wikipedia 'UHMWPE').
  - Spring-closed or cable-closed: a spring-closed (pull-to-open) gripper keeps holding with no pull, but its grip is limited to what its springs or bands give, 'usually below 20 pounds' (about 90 N) for body-powered split hooks, while a cable-closed (pull-to-close) one grips as hard as it is pulled and lets go when the pull stops (Wikipedia 'Prosthesis').

### When to use it

- **everyday_examples**: 
  - Your own fingers: muscles in the forearm pull long tendons that run through small pulleys to bend the finger joints (Printables 'finger model with both tendons and pulley systems' shows them)
  - 3D-printed e-NABLE prosthetic hands, which close their fingers through fishing-line tendons when the wearer bends the wrist (e-NABLE)
  - The popular printed 'robotic hand' fidget toy, whose fingers curl when you pull rings on their strings (Printables 1534503)
  - Animatronic tentacles and creature effects in films and props, worked by cables from servos or a joystick (Thingiverse 'Animatronic Tentacle MK III')
- **when_to_use**: Use it when you want the moving part light and slim and the motor somewhere else: robot and prosthetic hands, grippers that wrap round odd shapes, animatronic tentacles, tails and puppets, snake-like arms that reach into tight spaces, and wearable devices (Wikipedia 'Continuum robot'; Yale OpenHand; Frontiers 2021). One motor can close a whole hand through underactuation, it is cheap (fishing line and printed parts), naturally compliant and gentle when it bumps into things, and it can be powered by a person's own wrist with no electronics (e-NABLE).
- **when_not_to_use**: Avoid it when you need stiff, precise, repeatable positions, high forces in both directions, or very long service life: tendons stretch and creep, friction and slack cause hysteresis, and moving one joint can disturb another (Wikipedia 'Tendon-driven robot'; InMoov; arXiv 2507.17163). For a precise joint use a servo or gearmotor at the joint, or a linkage; for a stiff bendable arm that holds a pose without power use a posable segmented arm; for gentle gripping without strings use a fin-ray finger or a soft pneumatic actuator; to carry a pull round many bends use a Bowden cable (sleeve) rather than bare holes.
- **environment_limits**: Heat: rubber bands perish in hot climates, which is why e-NABLE replaced them with elastic cord for the tropics (Phoenix Reborn); UHMWPE line should not be used above about 90 C for long (Wikipedia); PLA segments soften above about 60 C (Prusa), e.g. in a hot car. Creep: UHMWPE tendons slowly stretch under constant load (Wikipedia 'UHMWPE') and printed parts creep, so re-tension from time to time. Dirt and grit in the tendon holes increase friction and wear ⚑ [uncertain]. Water and sunlight: printed PLA and elastic cords age outdoors ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Finger joints and the gap between fingers and palm are pinch points, and a servo-driven hand can squeeze hard; hobby servos pulling against friction-heavy tendons all day can overheat and burn out (InMoov forum note). A snapping tendon lets the finger spring open suddenly. e-NABLE devices are given 'as is' and its page warns they are not for commercial use; the Raptor Reloaded design is now recommended only for testing or research because its grip is weaker than later designs (Thingiverse 596966). Wire-rope ends are sharp, and annealing them with a torch (Thingiverse MK III) is a burn and fire risk. The spring-closed versus cable-closed comparison above is taken from prosthetic hooks only as a design idea for robot and hobby grippers; this entry is not guidance on making or fitting prostheses.
- **common_failures**: 1) Wrong tension, so the fingers do not close fully or stay half-closed: e-NABLE call this the most common assembly mistake; add a tensioner and follow the 30-45 degree palm rule. 2) Tendon frays or cuts through the plastic at sharp edges: round the holes, add steel pins or tube liners (OpenHand; InMoov; Frontiers 2021). 3) Knots slip in slippery braided line: use several knots plus a drop of glue (InMoov; Wikipedia 'UHMWPE'). 4) Too much friction from tight bends, so the motor stalls or the finger moves jerkily: reduce total wrap angle and use pulleys (Hackaday, Vasquez 2021). 5) Turning the wrist or bending an earlier segment tightens or slackens the tendons and disturbs the fingers: route tendons near the wrist axis or add sprung tensioners (InMoov; arXiv 2507.17163). 6) Fingers will not open fully because the elastic return is too weak, perished or rubbing, or a cover rubs the palm (InMoov forum; e-NABLE). 7) Twisted or tangled tendons where they bundle together jam the mechanism (InMoov). 8) Printed segments or pins crack from repeated load (Frontiers 2021 fatigue estimates).
- **related**: 
  - Bowden cable: only the sleeve that carries a pull round bends; a tendon-driven joint is the jointed part at the end that the pull actually bends, and it often uses a Bowden sleeve to reach it
  - Capstan cable drive: wraps a cable round drums to drive a single rotating joint with no backlash, rather than threading a tendon past a chain of joints
  - Posable segmented arm (snap-together ball chain, gooseneck): looks similar but is bent by hand and holds by friction; its cable-locked version uses a central cable only to lock the joints, not to move them
  - Whippletree (load-equalising lever) and floating-pulley differential: share one pull between several fingers so each closes until it touches (e-NABLE; Yale OpenHand)
  - Twisted-string actuator and twisted-and-coiled polymer muscle: compact ways to make the pull on a tendon, from a motor or from heat
  - Elastic band and elastic cord springs: the usual return spring that reopens tendon-driven fingers
  - Linkage-driven finger (four-bar linkage): rigid bars instead of a string; stiffer and more precise, but bulkier and less adaptable
  - Fin-ray gripper and soft pneumatic bending actuator: bend to wrap round objects without any tendon, passively or by air pressure
  - Rolling-contact joint: a hinge made of two rolling surfaces held by straps, often combined with tendons in robot fingers
  - Stopper knots and cord-end anchors: the knot, crimped stop or clamp that anchors each tendon at the fingertip so it can't pull through
  - Wire-rope terminations: crimped sleeves (ferrules) and clamps for thin wire-rope tendons, as used in bigger tentacles

### Pictures, videos and models

- **links**: 
  - [E-NABLE Raptor Reloaded prosthetic hand and arm, Design Museum London (Wikimedia Commons; Daderot)](https://commons.wikimedia.org/wiki/File:E-NABLE_Raptor_Reloaded_prosthetic_hand_and_arm,_designed_by_Ivan_Owen_et_al,_2013-2015_-_Design_Museum,_Kensington_-_London_-_DSC01581.jpg): Photo of a 3D-printed tendon-driven prosthetic hand whose fingers are closed by strings when the wrist bends *(licence: CC0)*
  - [Suitability of the Openly Accessible 3D Printed Prosthetic Hands for War-Wounded Children (Cabibihan et al., Frontiers in Robotics and AI, 2021)](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2020.594196/full): Diagrams of the cable and elastic-cord routing in a printed finger, a table of open-source printed hands and their tendon and return materials, grasp photos and stress plots *(licence: CC BY (article licence))*
  - [Capstan equation diagram.svg (Wikimedia Commons; Krishnavedala)](https://commons.wikimedia.org/wiki/File:Capstan_equation_diagram.svg): Diagram of a line wrapped round a fixed cylinder, showing why tension builds up with every bend a tendon rubs round *(licence: CC0)*
  - [Xstrings: 3D Printing Cable-Driven Mechanism for Actuation, Deformation, and Manipulation (ACM SIGCHI, YouTube; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=xk_EUOnGtAg): Video of fully printed cable-driven mechanisms, including a gripping tentacle, a bird's claw and a walking lizard robot *(licence: link only)*
  - [Mechanical Tentacle test (FlightlessHuman, YouTube; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=EVMatHNgC6s): Video of a cable-pulled mechanical tentacle bending (linked from Make: magazine's 'Printable Tentacle Parts') *(licence: link only)*
- **make_it_yourself**: 
  - [Unlimbited Phoenix Hand by Team_UnLimbited (Thingiverse)](https://www.thingiverse.com/thing:1674320): Customizer-scaled version of the wrist-driven e-NABLE Phoenix hand, with a thermoformed gauntlet; its printed fingers are closed by non-stretch cords when the wearer bends the wrist (e-NABLE Phoenix page) *(licence: CC BY-NC 4.0)*
  - [Animatronic Tentacle MK III by Dinoman217 (Thingiverse)](https://www.thingiverse.com/thing:2899978): Printed tentacle vertebrae on a speedometer-cable backbone, pulled by 1/16 inch wire rope through brake-cable housing, in two stages *(licence: CC BY-SA 4.0)*
  - [Cable Mechanism Joystick by Dinoman217 (Thingiverse)](https://www.thingiverse.com/thing:2901550): A printed joystick with clothesline pulleys for puppeteering cable-driven tentacles by hand *(licence: CC BY 4.0)*
  - [Yale OpenHand Project](https://www.eng.yale.edu/grablab/openhand/): Open-source CAD for tendon-driven, underactuated robot hands with flexure joints cast into 3D-printed fingers and a pulley or whippletree differential *(licence: CC BY-NC 3.0)*
  - [Robotic Hand with independently moving fingers by BenjaminCucumberpatch (URL from Printables API, page not opened)](https://www.printables.com/model/1534503-robotic-hand-with-independently-moving-fingers): Remix of the popular printed robotic hand toy whose fingers curl when their strings are pulled by rings *(licence: CC BY-NC)*
  - [Parametric Ball-Joints for Continuum Robots (Onshape Toolbox) by Alex_Repairs (URL from Printables API, page not opened)](https://www.printables.com/model/1333309-parametric-ball-joints-for-continuum-robots-onshap): Ready-to-print snap-fit ball joints for continuum (snake or tentacle) robots plus an Onshape toolbox to resize them; the author notes they can be adapted for tendon driving *(licence: CC BY-NC-SA)*
- **diagram_idea**: Side view of a three-segment finger with a red tendon running along the palm side through small holes a few millimetres below each hinge and tied at the fingertip, and a green elastic cord along the back; one panel shows the finger straight, the second shows a hand pulling the red tendon a short distance so all three joints curl, with the moment arm marked at one joint.
- **sources**: 
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2020.594196/full
  - https://hackaday.com/2025/05/03/3d-printed-cable-driven-mechanisms-some-strings-attached/
  - https://hackaday.com/2021/01/26/cable-mechanism-maths-designing-against-the-capstan-equation/
  - https://en.wikipedia.org/wiki/Continuum_robot
  - https://en.wikipedia.org/wiki/Tendon-driven_robot
  - https://en.wikipedia.org/wiki/Capstan_equation
  - https://en.wikipedia.org/wiki/Ultra-high-molecular-weight_polyethylene
  - https://enablingthefuture.org/phoenix-hand/
  - https://inmoov.fr/hand-and-forarm/
  - https://inmoov.fr/lining-and-tighting-the-tendons/
  - https://www.eng.yale.edu/grablab/openhand/
  - https://www.eng.yale.edu/grablab/pubs/ma_icra2013.pdf
  - https://arxiv.org/pdf/2507.17163
  - https://www.thingiverse.com/thing:1674320
  - https://www.thingiverse.com/thing:596966
  - https://www.thingiverse.com/thing:2899978
  - https://www.thingiverse.com/thing:2901550
  - https://commons.wikimedia.org/wiki/File:E-NABLE_Raptor_Reloaded_prosthetic_hand_and_arm,_designed_by_Ivan_Owen_et_al,_2013-2015_-_Design_Museum,_Kensington_-_London_-_DSC01581.jpg
  - https://commons.wikimedia.org/wiki/File:Capstan_equation_diagram.svg
  - https://api.crossref.org/works/10.1145/3706598.3714282
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/pla_2062
  - https://www.youtube.com/watch?v=xk_EUOnGtAg
  - https://www.youtube.com/watch?v=EVMatHNgC6s
  - https://en.wikipedia.org/wiki/Prosthesis

### Finder tags

- **connects**: not applicable
- **power_source**: electricity ⚑ *needs confirming (source uncertain): `power` is marked [uncertain] here: "…whereas a back-drivable drive lets the elastic return open the finger [uncertain].…"*
- **power_loss**: not applicable ⚑ *needs confirming (best guess): `power` mentions losing power, but none of the three outcomes*
- **motion_in**: straight push or pull
- **motion_out**: bending
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: crimper, heat gun, drill and tap, hand tools
- **load_max**: medium
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: both

### Other info

- ⚑ **Fields with parts that need confirming:** degrees_of_freedom, environment_limits, power, processes

## 279 Walking linkage (Jansen and Klann leg mechanisms)

*motion conversion.* A linkage of bars driven by one turning crank whose foot traces a flat stride and then lifts, so a machine walks instead of rolling (as in Theo Jansen's wind-walking sculptures)

### What it is

- **plain_name**: A leg made of bars and pins that a single turning handle or motor drives, so that the foot pushes along the ground in a flat, steady stroke, lifts up, swings forward and comes down again: the machine walks instead of rolling
- **term**: Walking linkage (leg mechanism), especially Jansen's linkage (the Strandbeest leg) and the Klann linkage
- **aliases**: 
  - leg mechanism
  - walking mechanism
  - Jansen's linkage / Jansen linkage / Jansen mechanism / Theo Jansen mechanism
  - Strandbeest leg or Strandbeest linkage ('strandbeest' is Dutch for 'beach beast'; plural strandbeesten)
  - 'holy numbers' (Jansen's own name for his set of bar lengths)
  - Klann linkage / Klann mechanism
  - Mechanical Spider linkage (Klann's own walker name) and 'walking device' (the title of Klann's US patent 6,260,862)
  - crank-driven leg / single-degree-of-freedom (1-DoF) walking linkage
  - planar leg mechanism (all its bars move in one flat plane)
  - Koppelgetriebe (German for linkage; the German Wikipedia uses it for the Strandbeest legs)
  - 詹森步行机构 (Chinese, 'Jansen walking mechanism') and 克兰步行机构 (Chinese, 'Klann walking mechanism')
  - Mini Strandbeest / Mini Beest (Gakken, brand: a plastic desk kit of the Jansen leg)
- **family**: motion conversion
- **one_liner**: A planar linkage of bars and pin joints, driven by one continuously turning crank, that moves a foot around a closed loop with a long, nearly flat ground stroke and a lifted return, so that several legs on a shared crankshaft make a machine walk.
- **complexity**: A small assembly that acts as one unit. One Jansen leg has a crank plus six more moving bars, joined by ten pin joints to each other and to a fixed frame (Wang 2026 counts seven moving bodies and ten revolute joints; Wikipedia counts eight links per leg including the frame); the lower bars form rigid triangles, one of which carries the foot. A Klann leg has six links: the frame, a crank, two rockers pivoted on the frame (upper and lower) and two coupling bars, one of which is the bent leg with the foot (Wikipedia). A walker adds a frame, a shared crankshaft with the cranks set at different angles, 4 to 12 or more legs, and a drive: a hand crank, a geared motor, or (Jansen) a wind turbine or sails.
- **how_it_works**: The crank turns in a full circle, and the bars around it can only move in one way for each crank angle, so the whole leg has a single degree of freedom (Wikipedia 'Jansen's linkage'). The bar lengths are chosen so that for about half a turn of the crank the foot moves backwards along an almost straight, level line, pushing the body forward, and for the rest of the turn it lifts, swings forward and comes back down (Klann's patent: the foot stays on the ground in a substantially straight line for about half of each crank revolution). Several legs on the same crankshaft, set out of step with each other, take turns carrying the body, so it moves along level instead of bobbing up and down. Jansen found his proportions by evolving them with a computer; Klann built his from the curves traced by four-bar linkages (Burmester curves).

### Finder attributes

- **job**: 
  - change the kind of motion: turns the continuous rotation of one crank (from a motor, a hand crank or the wind) into a walking step
  - let it move (turn, slide or bend): carries a vehicle, robot or sculpture over sand, rough ground, kerbs or small obstacles where wheels would sink or get stuck
- **motion**: multiple: the crank rotates continuously (360 degrees); the other bars rock back and forth through limited angles; the foot travels round a closed loop (a long flat bottom stroke along the ground and a raised return), so it moves both horizontally and vertically.
- **degrees_of_freedom**: 1: one crank angle fixes the position of every bar and of the foot, so one motor or one hand crank drives each leg, or all the legs on a shared crankshaft (Wikipedia 'Jansen's linkage'; Wang 2026 checks it with Gruebler's count: 3 x 7 - 2 x 10 = 1)
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): the crank's rotation becomes an almost straight, level foot stroke on the ground followed by a lifting return, in other words a walking step
  - none of the other listed behaviours: it does not lock, slip, click or hold; it only passes motion on
- **holding_principle**: not a holding joint (it moves or passes on motion): it is a mechanism that converts motion, shape (the parts interlock; form-fit): every joint is a pin or shaft turning in a hole or bushing
- **input_output**: Continuous rotation -> walking motion: each turn of the crank moves each foot through one stride. Klann's patent leg steps about 0.54 of its stride length high (step height 0.5424 x stride) and keeps the foot on the ground in a nearly straight line for about half the crank turn; his walking-chair version has a 12 in (about 305 mm) stride, a 7.5 in (about 190 mm) step height and stays within +/-0.33 in of a straight line (US 6,260,862). Jansen's leg gives a long, nearly flat ground stroke and a high return arc (Wang 2026). The foot's horizontal speed is not constant: in both the Klann and Strandbeest linkages it slows towards each end of the ground stroke, which gives a slightly halting gait on grippy ground (DIYwalkers). Efficiency: lower than a wheel on flat ground, because the feet speed up and slow down, slip and lift the body slightly (a Hackaday commenter says the Klann linkage wastes more energy this way than Jansen's); no measured figure found ⚑ [uncertain]. Motors usually need gearing down: DIYwalkers' LEGO walkers use reductions such as 5:1, and only their Strider linkage could walk at 1:1 without the motors stalling. Shaft arrangement: all pivots and the crank axle are parallel (a planar mechanism). Back-drivable: the legs can in principle turn the crank backwards, for example when the walker is pushed, except near dead points where bars line up; at a dead point Jansen's knee joint can 'flip' into the wrong position (DIYwalkers) ⚑ [uncertain as a general rule]. *(⚑ parts need confirming)*
- **power**: passive (no power needed): the linkage itself has no power source, but something must turn the crank: a geared electric motor, a hand crank, or the wind (Jansen's Strandbeests are moved by the wind, and some store air pressure to keep walking when there is no wind; Wikipedia). If the drive stops, the walker simply stops where it is.
- **removability**: removable: the bars are joined by pins, screws, shafts with snap clips or LEGO Technic pins (brand) and can be taken apart; snap-together printed and kit versions come apart by hand, while Jansen's large sculptures are tied with cable ties
- **reuse_cycles**: many times: a pinned walker can be dismantled and rebuilt repeatedly; the practical limit is wear of the pivot holes and pins (DIYwalkers found LEGO leg pins wear out after a dozen or so hours of walking)
- **tools_needed**: None for snap-together kits and the print-in-place Easy Strandbeest (apart from a razor blade to free stuck printed joints and a drop of light oil); a needle file to remove burrs from printed holes and shafts (nablu.com); a screwdriver or hex key and pliers for screwed or pinned joints; glue for a few parts of some printed kits (e.g. gears onto shafts in Wright4TheJob's desk model); a soldering iron and basic electronics tools if motorised
- **seal**: none: it is an open mechanism of bars and pins and seals nothing
- **load**: Light to heavy depending on scale. Desk models carry only themselves; Klann-type walkers have been built big enough to ride: the Mondo Spider carries one person at up to about 1.2 m/s (Wikipedia), DIYwalkers mention the 14,000 lb (about 6.4 t) Klann-based Walking Beast, and four 6 lb TrotBot legs carried a 450 lb machine (DIYwalkers). The legs are strong in their own plane but weak against sideways forces and twisting, which can 'snap the legs like twigs', especially when the walker turns on the spot (DIYwalkers). Pin forces are much higher than the foot load: in Wang's model of a Jansen leg pressed down with 20 N, the most loaded frame pivot carries about 48 N.
- **adjustable**: Usually no: the bar lengths fix the foot path. The step height and stride can be changed only by changing pivot positions or bar lengths (Klann's patent; DIYwalkers move the Klann leg's lower rockers towards the centre for a higher step), so prototypes are often built from LEGO Technic beams (brand) or bars with several holes, and checked in a simulator first. Speed and direction are adjusted by the drive: running the left and right leg sets from separate motors lets the walker steer (Hackaday printed Strandbeest; Wikipedia 'Leg mechanism').
- **play_and_precision**: Play: noticeable, because each leg has about ten pin joints and the clearance of every one adds up at the foot ⚑ [uncertain: no measurement found]. Repeatability: the foot follows the same loop every turn, but not a perfect line; Klann's walking chair is designed to stay within +/-0.33 in over a 12 in stride. Wang (2026) found in a tolerance study that some bar lengths strongly affect ground clearance and need tight manufacturing tolerances. Misalignment: pivots must be parallel and the bars must lie in separate, neighbouring planes or they rub and bind; DIYwalkers advise that each leg part should connect to parts in an adjacent plane, and nablu.com warns that built-in spacer washers with burrs stack up and squeeze the bars together. *(⚑ parts need confirming)*
- **access_needed**: not applicable: it is a mechanism in an open frame, reached from the side
- **materials**: Jansen builds his Strandbeests from yellow PVC tubing, cable ties (zip ties), wood, nylon thread, adhesive tape and fabric sails (Wikipedia, English and German). Desk kits (Gakken Mini Strandbeest, brand) are injection-moulded plastic with a metal shaft and a rubber band (Maker Project Lab). Printed walkers use PLA or PETG; PETG is better for snap-fit shafts because PLA is brittle and its layers split (nablu.com). LEGO Technic beams (brand) are used for quick prototypes, with 3/16 in metal rods as axles (DIYwalkers). Large walkers use steel legs (Mondo Spider) or laser-cut, anodised aluminium (an underwater Klann walking robot pictured in Wikipedia's 'Klann linkage' article), with bushings or bearings at every joint (Klann's patent).
- **maker_difficulty**: moderate: a desk-sized walker prints or laser-cuts easily and the proportions are published, but it has many joints that all need low friction, legs must be stacked in the right order and phase on the crankshaft, and large walkers become a real structural-engineering job

### Making it

- **processes**: 
  - 3D print (FDM): the most common maker route; bars, triangles, frames and crankshafts print flat (examples: LoboCNC's Easy Strandbeest, Anachronist's parametric OpenSCAD Strandbeest, Maker 101's motorised Strandbeest on Hackaday)
  - laser cut: flat bars in acrylic, plywood or aluminium suit the planar legs; Wikipedia's 'Klann linkage' article pictures an underwater walking robot with laser-cut, anodised aluminium Klann legs
  - woodwork: Jansen's Lignatum-era beests were wood-based (Wikipedia); simple wooden bars and dowel pins suit large slow models ⚑ [uncertain: no wooden build guide opened]
  - sheet metal: steel or aluminium bars for large or ride-on walkers such as the Mondo Spider's eight steel legs (Wikipedia)
  - off-the-shelf part: LEGO Technic beams and pins (brand) for prototypes (DIYwalkers) and ready-made kits such as the Gakken Mini Strandbeest (brand) *(⚑ parts need confirming)*
- **print_in_place**: partly: LoboCNC's Easy Strandbeest prints each leg unit pre-assembled with working pivots (they must be cracked free and worked loose after printing), and its crankshaft prints as one piece, but the legs, side rods, end pieces and crankshaft are then clipped together; most other printed walkers are printed as separate bars and pinned or snapped together
- **making_tips_3d_printing**: 1) Get the geometry right first: try the proportions in a simulator (the DIYwalkers Klann and Strandbeest optimisers, HUANGYAN920's animations) or build a LEGO version, then print (DIYwalkers warn that a good simulation still needs tinkering). 2) Orientation: print shafts and pins standing up so they come out round; nablu.com notes that a snap clip printed vertically is 'the absolute worst orientation' because snapping it in pulls the layers apart, so print snap-fit shafts in PETG (sticky, not brittle) or a PLA with good layer adhesion; shiny silk PLA broke the clips. Snap-fit parts should be printed horizontally whenever possible. 3) Clean up: file burrs out of hub holes and ridges off shafts, and make sure built-in spacer washers are flat, because the tolerances stack up along a crankshaft carrying many bars (nablu.com). Print a few sample parts first to check bearing fit and clip strength. 4) Print-in-place legs: LoboCNC recommends PLA for stiffness, slows the small-perimeter speed so thin vertical shafts bond well, needs supports only under the crankshaft's overhanging shafts, and frees each joint by gently cracking it, working it back and forth, running a razor blade into tight gaps and adding a drop of light oil; with 8 legs driven by a fan, 'you can tolerate very little friction'. 5) Cheap pins: Wright4TheJob's desk model holds its joints with lengths of PLA filament ('PLA spikes') and snap fits. 6) Assembly order and phase: connecting arms must go onto each crank section in a set order, and opposite legs must be half a turn apart (diywalkers: crank of 3 units needs a centre crank of 6 to put the outer legs 180 degrees out of phase; Maker Project Lab: each successive arm stacks closest to you). 7) Keep each bar in its own layer (plane) next to the parts it joins, so bars do not collide or bind (DIYwalkers). 8) Gear the motor down and use one motor per side if you want to steer (Hackaday printed Strandbeest uses two DC gear motors). 9) PLA softens above about 60 °C and degrades in UV light (Prusa), so use PETG (fine below about 80 °C and outdoors, Prusa) for a walker left in the sun.
- **off_the_shelf_parts**: Gakken Mini Strandbeest kit (brand) for a ready-made Jansen walker; LEGO Technic beams, pins and axles (brand) for prototypes; small DC gear motors (geared DC motors) with a motor driver, such as the Arduino L293D shield used in Maker 101's printed Strandbeest; spur gears for gearing down; steel rod or silver-steel shafting for crankshafts and support rods (DIYwalkers used 3/16 in rod); for larger walkers, flanged bushings or plain bearings at every pivot (as Klann's patent shows), shoulder bolts (shoulder screws), dowel pins, washers and retaining clips (E-clips) ⚑ [uncertain: these fastener names are generic suggestions, not checked against a specific build]. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Jansen's proportions (the 'holy numbers', lengths in the same units, crank = m): a = 38.0, b = 41.5, c = 39.3, d = 40.1, e = 55.8, f = 39.4, g = 36.7, h = 65.7, i = 49.0, j = 50.0, k = 61.9, l = 7.8, m = 15.0. Here m is the crank radius and a and l are the horizontal and vertical distances from the crank axle to the fixed frame pivot (Wikimedia Commons 'Strandbeest Leg Proportions.svg'; Wang 2026, Table 1). Scale them all together to change the size; changing them separately changes the gait.
  - Klann's patent leg (US 6,260,862): for a stride of 1 unit the crank is 0.267949 units (so the stride is about 3.7 crank lengths), the step height is 0.5424 units, and the leg is about 2 units long with a 150 degree bend at the knee; the foot can clear obstacles about 54% of the stride length high. DIYwalkers redraw the same leg scaled to crank = 3 and describe the knee bend as 30 degrees.
  - Klann's walking-chair version: 12 in stride, 7.5 in step height, foot within +/-0.33 in of a straight line, front and rear leg sets 60 in apart for stability (US 6,260,862).
  - Each foot should be on the ground for at least half of the crank turn in a two- or four-legged group, or at least a third of the turn in a three- or six-legged group, so the body is always supported (Wikipedia 'Leg mechanism', design goals). Klann's foot is on the ground for about half the turn (patent).
  - Pair legs half a turn (180 degrees) apart on the crankshaft; 12-legged walkers need cranks 120 degrees apart; the crank must be keyed (square or hex shaft, or keyed axle) so the legs stay in phase (DIYwalkers).
  - Foot-path shape: for rough ground, prefer a high, oval foot path; triangular paths are high only in the middle and catch obstacles at the ends, and teardrop paths can leave the walker unable to reverse out; adding a claw-like 'heel' helps a Klann leg clear obstacles (DIYwalkers).
  - Small walkers can manage with three feet on the ground; large walkers should keep four feet down at all times, like a four-wheeled car (DIYwalkers).
  - Scale: weight grows with size cubed but strength only with size squared, and forces from swinging feet grow with size to the fourth power, so the bigger the walker, the smoother its gait and the more trussed (triangulated) its legs and frame must be (DIYwalkers).
  - The pins carry more than the foot load: in Wang's (2026) Jansen model a 20 N foot load gives up to about 48 N at the most loaded frame pivot and peak crank torque of 0.24 N m at 1 rev/s; the crank bearings turn a full circle every step and wear regardless of bar lengths, so give the crank and the frame pivot the best bearings.
  - LEGO prototypes: a bar of length n needs a beam with n + 1 holes, because the first hole counts as zero (DIYwalkers).

### When to use it

- **everyday_examples**: 
  - Theo Jansen's Strandbeests: large PVC-tube sculptures that walk along Dutch beaches in the wind (Wikipedia), also seen in a 2007 BMW TV advert (German Wikipedia) and a 2016 episode of The Simpsons (Wikipedia)
  - The Gakken Mini Strandbeest desk kit (brand), which walks across a table when you blow on its little wind turbine or point a desk fan at it (Maker Project Lab)
  - The Mondo Spider, a ride-on eight-legged walking machine using Klann linkages, shown at Burning Man (Wikipedia)
  - Printed and LEGO walking robots and toys built from Strandbeest or Klann legs (DIYwalkers; Printables)
- **when_to_use**: Use a walking linkage when you want a machine to walk using only one motor (or one motor per side for steering), with no computer control of individual joints: for kinetic sculptures, toys and desk demonstrations; for small robots that must cross sand, gravel, carpet edges, kerbs or debris where small wheels sink or catch (Klann's patent claims kerbs, steps, mud, snow and sand); and when you want lifelike movement (Jansen's linkage looks especially organic). Jansen's linkage gives the flatter, smoother ground stroke; Klann's uses fewer bars per leg (six against eight) and steps higher, so it is easier to build and better at clearing obstacles (Wikipedia; Hackaday commenter).
- **when_not_to_use**: Avoid it on smooth, flat ground where speed and efficiency matter: wheels or tracks are simpler, faster and waste less energy. Avoid it when you need to change stride length or step height while moving, walk sideways, or place feet precisely: use legs with two or three servo motors each, or hydraulic legs (Wikipedia 'Leg mechanism' notes stride control is not practicable with a crank-based leg). Avoid it for heavy machines unless you can engineer trussed legs and frames (DIYwalkers). If you just need a point to move in a straight line, use a straight-line linkage or slide instead; if you just want a rough-terrain wheel, consider whegs (spoked wheel-legs).
- **environment_limits**: Printed PLA softens above about 60 °C and degrades in UV light, so a PLA walker left in a hot car or the sun can warp; PETG is fine for most outdoor use below about 80 °C (Prusa). Sand and grit getting into the many pin joints increase friction and wear ⚑ [uncertain: no measurement found]; Jansen designs his beests to survive sand, storms and water and some anchor themselves when a storm comes (Wikipedia). Joint wear limits the life of any walker (Wang 2026), and plastic pins wear out (DIYwalkers: LEGO leg pins after a dozen or so hours). Long legs bend sideways under turning loads, worse with heavy payloads (DIYwalkers). *(⚑ parts need confirming)*
- **safety_notes**: Crossing bars and the crank close like scissors and can pinch fingers while the walker is running ⚑ [uncertain: general advice]. A jammed linkage driven by a strong motor can strip gears (DIYwalkers), so use a motor no stronger than needed or add a slipping clutch. Large walkers are heavy machines: DIYwalkers wear bike helmets when testing their rideable TrotBot, and ride-on walkers like the Mondo Spider need engineering checks before anyone rides. Wind-driven models can run away in strong wind (Jansen's beests anchor themselves in storms; Wikipedia). *(⚑ parts need confirming)*
- **common_failures**: 1) Feet catch on an obstacle and the linkage jams, which can grind or strip the gears (DIYwalkers): give the foot path enough height, prefer an oval path, add a heel, and protect the drive. 2) A joint 'flips' at a dead point, especially Jansen's knee (DIYwalkers): add a stop to block the wrong position, or check the design in a simulator. 3) Too much friction for the drive: with many legs every stiff joint adds up; free each joint, deburr holes and shafts, and oil lightly (LoboCNC; nablu.com). 4) Printed snap-fit shafts break along the layers when pressed in (nablu.com): use PETG, print snap features horizontally when possible, and press only on the two mating parts. 5) Arms clipped onto the crankshaft in the wrong order or phase, so legs fight each other (LoboCNC; Maker Project Lab). 6) Legs bend or snap sideways and support rods sag, especially when turning on the spot (DIYwalkers): make legs wider or trussed, and brace rods with tensioned cables or a truss. 7) Halting, skidding gait because the foot slows at the ends of its stroke (DIYwalkers): add hinged feet with curved bottoms that rock, or feet that slide. 8) Underpowered motor: gear it down (DIYwalkers). 9) Worn pins and holes add play and make the walk sloppy: use metal pins or bushings at the most loaded pivots (Klann's patent; Wang 2026).
- **related**: 
  - Four-bar linkage (incl. parallelogram linkage): the simplest walking legs use a four-bar coupler curve as the foot path; Klann's linkage grew out of four-bar double-rocker curves (Wikipedia)
  - Straight-line linkages (Watt, Chebyshev, Peaucellier): give the flat part of the stride; Chebyshev's Plantigrade Machine (1878), built from his lambda linkage, was an early walking machine (Wikipedia)
  - Slider-crank: the simplest crank-driven toy legs use inverted slider-cranks (patents listed in Wikipedia 'Leg mechanism')
  - TrotBot and Strider linkages (DIYwalkers): later crank-driven leg linkages designed for steadier foot speed and higher, more obstacle-proof steps
  - Whegs (wheel-legs, listed by DIYwalkers) and single rotating-crank legs (e.g. US patent 6,481,513, 'Single Actuator per Leg Robotic Hexapod', listed in Wikipedia 'Leg mechanism'): simpler rough-terrain alternatives with fewer joints
  - Servo-driven legged robots: each joint has its own motor, so gait, stride and direction can change, at the cost of electronics and control
  - Mechanical metamaterial mechanism: HPI printed a working Jansen walker as one block of flexible cells instead of bars and pins
  - Gear trains and gearboxes: usually needed between the motor and the crankshaft to slow it down
  - Cam and follower: another way to make a part follow a chosen path from a rotating shaft, used in automata

### Pictures, videos and models

- **links**: 
  - [Strandbeest-Walking-Animation.gif (Wikimedia Commons, by MichaelFrey)](https://commons.wikimedia.org/wiki/File:Strandbeest-Walking-Animation.gif): Animation of one Jansen leg turning through a full crank cycle, with the foot tracing its flat-bottomed path *(licence: CC BY-SA 4.0)*
  - [Strandbeest Leg Proportions.svg (Wikimedia Commons, by MichaelFrey)](https://commons.wikimedia.org/wiki/File:Strandbeest_Leg_Proportions.svg): Labelled diagram of the Jansen leg with the 'holy number' bar lengths a to m *(licence: CC BY-SA 3.0)*
  - [F4-motion.gif (Wikimedia Commons, by Joseph Klann)](https://commons.wikimedia.org/wiki/File:F4-motion.gif): Animation of a set of Klann linkage legs walking, with the pivots marked and the near legs outlined *(licence: Public domain)*
  - [Strandbeest, TrotBot, Strider, Klann Linkages.gif (Wikimedia Commons, by WadeVagle)](https://commons.wikimedia.org/wiki/File:Strandbeest,_TrotBot,_Strider,_Klann_Linkages.gif): Side-by-side animation comparing the foot paths of the Strandbeest (Jansen), TrotBot, Strider and Klann leg linkages *(licence: CC BY-SA 4.0)*
  - [Strandbeest walking with six legs.gif (Wikimedia Commons, by MichaelFrey)](https://commons.wikimedia.org/wiki/File:Strandbeest_walking_with_six_legs.gif): Animation of six Jansen legs on one crankshaft taking turns to carry the body *(licence: CC BY-SA 4.0)*
- **make_it_yourself**: 
  - [Easy Strandbeest (LoboCNC, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/853015-easy-strandbeest): Wind-driven 8-leg Jansen walker with print-in-place leg units and a one-piece printed crankshaft; detailed notes on freeing and oiling the joints and on assembly order *(licence: CC BY-SA)*
  - [Theo Jansen Strandbeest Desktop Mechanism (Wright4TheJob, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/194176-theo-jansen-strandbeest-desktop-mechanism): Hand-cranked desk model of one pair of Jansen legs, driven through a 2:1 gear set, with joints held by PLA filament pins and snap fits *(licence: CC BY-SA)*
  - [Building a strandbeest (nablu.com, by Anachronist)](https://www.nablu.com/2020/05/building-strandbeest.html): Step-by-step build article for a parametric OpenSCAD Strandbeest whose parts all snap together without supports, with lessons on PLA versus PETG snap fits and deburring (the models are on Printables, model 129102, 'Parametric strandbeest in OpenSCAD') *(licence: Printables model CC BY-NC (from Printables API); article licence not stated ⚑ [uncertain])*
  - [Crawler Mechanism (DigiKey, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1081125-crawler-mechanism): A custom, easier-to-assemble Klann-linkage crawling robot by Odd Jayy, with a link to full build instructions and Arduino code *(licence: CC BY)*
  - [Klann Linkage Optimizer (DIYwalkers)](https://www.diywalkers.com/klann-linkage-optimizer.html): Interactive Scratch simulator to change Klann bar lengths and see the foot path and foot speed; includes Klann's patent proportions and LEGO-friendly versions; Python and Scratch code downloadable *(licence: not stated ⚑ [uncertain])*
  - [LEGO Strandbeest Optimizer (DIYwalkers)](https://www.diywalkers.com/strandbeest-optimizer-for-lego.html): Interactive Jansen-linkage calculator with Jansen's proportions scaled to crank = 3, LEGO approximations, foot-speed plots and tips on dead points and leg planes *(licence: not stated ⚑ [uncertain])*
  - [HUANGYAN920/Mechanical interactive mechanism animations](https://huangyan920.github.io/Mechanical/): Browser animations that include a Klann walking linkage (no. 228, 克兰步行机构) and a Jansen walking linkage (no. 229, 詹森步行机构); labels mostly in Chinese *(licence: MIT (code))* *(⚑ parts need confirming)*
- **diagram_idea**: Side view of one Jansen leg and one Klann leg next to each other, each with the crank circle at the top, the bars drawn as coloured lines, and the foot's loop traced underneath (flat bottom stroke in green marked 'pushing on the ground', raised return in grey marked 'lifting and swinging forward'), plus a small strip showing four legs on one crankshaft taking turns.
- **sources**: 
  - https://en.wikipedia.org/wiki/Jansen%27s_linkage
  - https://en.wikipedia.org/wiki/Klann_linkage
  - https://en.wikipedia.org/wiki/Leg_mechanism
  - https://en.wikipedia.org/wiki/Theo_Jansen
  - https://de.wikipedia.org/wiki/Theo_Jansen
  - https://en.wikipedia.org/wiki/Mondo_spider
  - https://en.wikipedia.org/wiki/Chebyshev_lambda_linkage
  - https://arxiv.org/abs/2606.22129
  - https://arxiv.org/pdf/2606.22129
  - https://patents.google.com/patent/US6260862B1/en
  - https://www.diywalkers.com/walker-abcs.html
  - https://www.diywalkers.com/klanns-linkage-plans.html
  - https://www.diywalkers.com/klann-linkage-optimizer.html
  - https://www.diywalkers.com/strandbeest.html
  - https://www.diywalkers.com/strandbeest-optimizer-for-lego.html
  - https://hackaday.com/2025/01/16/building-a-3d-printed-strandbeest/
  - https://www.nablu.com/2020/05/building-strandbeest.html
  - https://www.makerprojectlab.com/mini-strandbeest-kit-review/
  - https://raw.githubusercontent.com/wrongu/strandbeest/master/README.md
  - https://raw.githubusercontent.com/garyhodgson/strandbeest/master/README.md
  - https://hpi.de/baudisch/projects/metamaterial-mechanisms.html
  - https://huangyan920.github.io/Mechanical/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://commons.wikimedia.org/wiki/File:Strandbeest-Walking-Animation.gif
  - https://commons.wikimedia.org/wiki/File:Strandbeest_Leg_Proportions.svg
  - https://commons.wikimedia.org/wiki/File:Jansen%27s_Linkage.svg
  - https://commons.wikimedia.org/wiki/File:F4-motion.gif
  - https://commons.wikimedia.org/wiki/File:Strandbeest,_TrotBot,_Strider,_Klann_Linkages.gif
  - https://commons.wikimedia.org/wiki/File:Strandbeest_walking_with_six_legs.gif
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/853015-easy-strandbeest (URL from Printables API, page not opened)
  - https://www.printables.com/model/194176-theo-jansen-strandbeest-desktop-mechanism (URL from Printables API, page not opened)
  - https://www.printables.com/model/129102-parametric-strandbeest-in-openscad (URL from Printables API, page not opened)
  - https://www.printables.com/model/1081125-crawler-mechanism (URL from Printables API, page not opened)

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: parallel
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: none, soldering iron, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, make_it_yourself, off_the_shelf_parts, play_and_precision, processes, safety_notes

