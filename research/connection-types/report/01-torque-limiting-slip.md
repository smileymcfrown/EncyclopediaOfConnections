# torque limiting & slip: Slips or lets go when overloaded

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). ⚑ marks what needs confirming; corrections are welcome (`research/needs-confirming.md`).

## 2 Ratchet-tooth torque limiter (clicking torque-limiting cap or knob)

*torque limiting & slip.* A cap, knob or screwdriver handle with sloped spring-loaded teeth that turns the part until a set tightness, then clicks and slips so you can't over-tighten (fuel caps, torque-limiting screwdrivers)

### What it is

- **plain_name**: A cap, knob or screwdriver handle that turns the part until it is tight enough, then just clicks and slips so you cannot over-tighten it, but still grips firmly when you undo it
- **term**: Ramp-tooth (saw-tooth) torque-limiting clutch, also called a cam-over torque limiter
- **aliases**: 
  - clicking torque limiter
  - cam-over clutch / cam-over torque limiter
  - saw-tooth (sawtooth) clutch
  - crown-tooth torque limiter (teeth arranged like a crown gear)
  - torque-override cap / torque-limiting fuel cap / 'clicking gas cap'
  - torque-limiting knob / torque limiting clamping knob
  - torque-limiting screwdriver / torque-limiting driver / fixed-torque driver
  - ratchet stop or friction thimble (on a micrometer)
  - tooth-type safety clutch
  - slip clutch (used loosely for this type)
  - VTD torque limiting knob (Elesa+Ganter, brand)
- **family**: torque limiting & slip
- **other_families**: one-way & ratchet, clutches & couplings
- **one_liner**: Two rings of sloped teeth, pressed together by a spring, pass on your turning effort until a set tightness is reached, then ride over each other with a click so the cap, knob or screw cannot be over-tightened.
- **complexity**: A few parts: a driving part with sloped teeth (the knob shell, cap shell or handle), a driven part with matching teeth (a ratchet wheel or lower shank attached to the cap, screw or bit), a spring pressing them together (wave washer, coil spring or disc spring), and often an adjuster (screw, nut or spacer) that sets the spring force, plus a clip or screw holding it together.
- **how_it_works**: Two toothed rings face each other and a spring pushes them together. When you turn, the sloped sides of the teeth press on each other, and part of that push tries to force the rings apart along the axis. Below the set torque the spring wins and everything turns together. Above it, the rings are pushed apart by one tooth height, the teeth ride over each other and snap into the next gap with a click (cam-over), so no more torque reaches the part. The teeth are usually lopsided: gently sloped on the tightening side and steep on the other side, so turning the other way meets flat walls that drive positively and the cap or screw can always be undone. A steeper slope or a stronger spring raises the torque at which it clicks.

### Finder attributes

- **job**: 
  - slip or let go when overloaded: clicks and slips once a set tightness is reached
  - tighten and hold tension (to a set level): tightens a cap, clamp knob or screw to the same tightness every time, so a seal or part is not crushed
- **motion**: rotate: unlimited turns of the knob or handle; inside, the toothed ring also slides along the axis by about one tooth height each time it clicks
- **degrees_of_freedom**: 1 in use (rotation about the axis). Inside, the spring-loaded toothed ring also moves a short way along the axis during each click, but that movement is tied to the rotation, not independent.
- **special_behaviour**: 
  - torque-limiting (slips or clicks at a set force/torque): passes torque up to a limit set by the spring and tooth slope, then clicks and slips
  - one-way (moves freely one way, locks the other): with lopsided teeth it slips only in the tightening direction and drives solidly in the undoing direction, so the part can always be removed
  - indexing (clicks into set positions): each slip ends with the teeth dropping into the next gap, giving the audible and felt click that tells you the limit is reached
  - fail-safe or breakaway: it resets itself instantly, with nothing to replace after an overload
- **holding_principle**: shape (the sloped teeth interlock; form-fit) held together by spring force (a spring presses the toothed rings into each other); friction on the tooth slopes adds to the torque it can carry
- **input_output**: Continuous rotation -> the same rotation at 1:1 until the set torque, then the output stops while the input keeps clicking round. Nearly lossless while engaged (a solid tooth drive) ⚑ [uncertain: no efficiency figure published]. In line (coaxial). Back-drivable: yes; below the limit it behaves like a solid coupling, and in the undo direction lopsided teeth drive positively with no limit. *(⚑ parts need confirming)*
- **power**: passive (no power needed)
- **removability**: removable: the cap or knob screws on and off by hand (tool-free), and the limiter inside is a unit held by a clip or screw that can be taken apart for service; moulded fuel caps are usually not meant to be opened ⚑ [uncertain] *(⚑ parts need confirming)*
- **reuse_cycles**: many times: one maker's torque-limiting knobs were tested to 60,000 tightening cycles with unchanged torque values; disposable medical torque-limiting drivers are made for single or limited use
- **tools_needed**: none to use. Assembly: screwdriver, circlip pliers or a snap fit; adjustable versions need a screwdriver, hex key or spacer to set the spring force
- **seal**: none by itself. In a fuel or radiator cap the separate O-ring gasket seals; the limiter stops that gasket being crushed by over-tightening
- **load**: light (hand torques). Examples: disposable medical drivers about 1 to 100 ounce-inches (about 0.007 to 0.7 Nm); clamping knobs 2, 3, 4 or 6 Nm; printed hobby drivers about 0.1 to 3 Nm. Strong in the undo direction (steep tooth faces); in the tightening direction it can never carry more than its set torque. Weak spots are tooth tips wearing or chipping and the spring losing force.
- **adjustable**: depends on the design: fixed-torque caps, knobs and disposable drivers are set at the factory; adjustable screwdrivers change the spring preload with a screw, nut, cap or spacer (more preload = higher click torque). Some patent designs also allow the torque to be set by changing tooth slope.
- **play_and_precision**: small play: a little backlash between the tooth flanks and some axial float. Trip torque repeats well on metal-mechanism products (e.g. unchanged over 60,000 cycles in one maker's test) but depends on friction, lubrication and wear; printed plastic versions vary with filament brand and print settings. It needs the two toothed rings to be coaxial on one shaft and does not tolerate misalignment.
- **access_needed**: one side only (blind): you turn it from the outside; a cap goes on the end of a filler neck or bottle, and a driver goes on the head of a screw
- **materials**: Teeth: rigid, heat-stable plastics (acetal/POM, nylon) in moulded caps, or hardened steel in industrial knobs. Knob bodies: glass-fibre reinforced polyamide (PA). Springs: steel wave washers, coil springs or disc springs. Medical drivers: moulded plastic bodies. Printed versions: PETG, ABS or nylon toothed plates with a metal coil spring; PLA is too brittle and deforms under steady spring pressure.
- **maker_difficulty**: easy to moderate: two printed saw-tooth discs, a metal spring and a screw make a working limiter, but getting a known, repeatable torque needs calibration (a weight on an arm) and re-checking as plastic teeth wear

### Making it

- **processes**: 
  - 3D print (FDM): toothed clutch plates plus a bought metal spring
  - 3D print (resin) ⚑ [uncertain: resin teeth may chip]
  - CNC (metal toothed rings for durable tools)
  - off-the-shelf part: torque-limiting knobs, caps and screwdrivers *(⚑ parts need confirming)*
- **print_in_place**: no: the two toothed plates, the handle/housing and the adjuster are printed separately and assembled with a bought metal spring, because a printed spring left permanently preloaded slowly loses force
- **making_tips_3d_printing**: A proven layout is Printables 30226 'Torque Limiting Screw Driver' (public domain): two printed handle halves, two printed saw-tooth clutch plates and a coil spring, taking any 1/4 in hex bit, with a spacer that adds spring preload to raise the maximum torque. Its author says it is best for low torques. Material: several printed torque tools recommend PETG. One maker found PLA too brittle and prone to deforming under pressure and printed with 5 walls, 5 top and bottom layers and 30% infill ('Tunable torque wrench', Printables 115459). Others recommend PETG, ABS or nylon, printed with a 0.4 mm nozzle, 3 perimeters and 0.2 mm layers ('TORQUEY', Printables 1244374). Tooth faces: print the plates flat with the teeth facing up and use fine layers, because the sloped faces come out as small steps that change the click torque. Sand off burrs and grease the teeth; the tunable wrench author also sands the gears and adds grease. Spring: use a metal spring, not a printed one. DuPont's design guide warns that moulded plastic springs in ratchets and torque-limiting gears must not stay in the loaded position for long periods. One printed-wrench author also says to back the preload off to zero when the tool is stored. Calibrate: fit an arm, hang a known weight and loosen the spring until it just slips; torque = weight force x arm length. The tunable wrench's arm gives 0.5 Nm per 1 kg. Expect the torque to vary with filament brand and print settings. Test each print against a real torque tool before trusting it.
- **off_the_shelf_parts**: Torque-limiting clamping knobs (e.g. Elesa+Ganter VTD, brand: 2, 3, 4 or 6 Nm, thread M5-M12); cam-over torque screwdrivers and fixed-torque (preset) drivers; disposable torque-limiting drivers (medical); torque-limiting fuel/radiator caps (vehicle-specific); micrometers with a ratchet stop. Hardware for DIY: compression springs, wave springs (wave washers), disc springs (Belleville washers), 1/4 in hex bits and bit holders, thrust washers.
- **rules_of_thumb**: 
  - Click torque rises with spring force, tooth radius and tooth steepness. Wedge rule: tangential force to push a spring-loaded part up a slope = spring force x tan(ramp angle + friction angle), so torque is about spring force x mean tooth radius x tan(ramp angle + friction angle). The same form is given for detents as F_release = F_spring x tan(alpha/2 + phi) (https://www.firgelliauto.com/blogs/mechanisms/detent). A patent confirms that making the torque-transmitting tooth face steeper raises the force needed to skip the teeth (US8757035B2, https://patents.google.com/patent/US8757035B2/en).
  - Make the teeth lopsided: a sloped face for limited tightening and an upright face for a positive drive when removing, so a cap can always be undone (Stant torque-override cap patent US5110003A, https://patents.google.com/patent/US5110003).
  - Spread the load over many teeth, with as many driven teeth as drive teeth, to reduce fatigue on each tooth (US5110003A, https://patents.google.com/patent/US5110003).
  - Do not rely on plastic spring fingers held in constant preload: they relax, especially when warm. The Stant patent replaced flexible polymer fingers with rigid teeth and a wave-washer spring (US5110003A), and DuPont advises that plastic ratchet springs should not be left in the loaded position for long and that an extra metal spring is used where torque must be held for a long time (DuPont General Design Principles, Module I, printed pages 47-48, https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf).
  - A cam-over tool re-slips every time you try to go past the set torque, so it cannot be over-tightened by pushing harder, unlike a click wrench that only signals (Mountz, https://blog.mountztorque.com/a-guide-to-torque-wrench-delivery-mechanisms/).
  - Commercial reference points: disposable medical drivers are about 1 to 100 ounce-inches and are set by the depth of a locking screw (US7762164B2, https://patents.google.com/patent/US7762164B2/en); clamping knobs have been tested to 60,000 cycles with unchanged torque (https://www.elesa-ganter.com/en/www/clamping-knobs--torque-limiting-knobs--vtd).

### When to use it

- **everyday_examples**: 
  - a car fuel cap that clicks when it is tight enough
  - the ratchet stop (friction thimble) on the end of a micrometer, which slips at a set torque so every measurement uses the same pressure
  - torque-limiting screwdrivers and disposable drivers packed with medical implants
  - torque-limiting clamping knobs on lab machines and sharpening jigs
- **when_to_use**: When a person tightens something by hand and must not over-tighten it: caps with a rubber seal (fuel, radiator, bottles), small screws in plastic, carbon or electronics, clamping knobs on jigs and lab kit, measuring tools, and printer nozzles. Also when you want the click as feedback that the right tightness has been reached, and when the part must still come off easily (lopsided teeth give a solid grip in the undo direction). Cheap, compact, needs no power, and resets itself at once.
- **when_not_to_use**: Not for continuous slipping under power: the teeth hammer and wear, so for a motor drive that may jam use a ball-detent torque limiter (clean disengagement, can trip a switch) or a friction slip clutch (smooth, silent slip). Not where you need an accurate, certified torque on safety-critical bolts: use a calibrated torque wrench or screwdriver. Not where torque must be limited equally in both directions with a solid undo grip at the same time; that needs symmetric teeth or a ball or friction design. Printed versions are not for more than a few Nm.
- **environment_limits**: Heat: plastic spring fingers relax and stop working near hot engines, which is why rigid, heat-stable teeth and a metal wave washer were used in a fuel-cap patent. Printed PLA softens and deforms above about 60 °C, while PETG is fine below about 80 °C. Fuel caps: the rubber gasket hardens and cracks from petrol, heat and weather, and dirt or sand on the threads spoils the seal. Wear: every click rubs the tooth slopes, so the torque drifts as plastic teeth wear or as grease dries or gets dirty ⚑ [uncertain: no drift figures for plastic versions]. Water or vibration: no specific limits found ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: A clicking limiter is not a calibrated tool. Printed ones vary with filament and print settings, and one maker found that a printed nozzle wrench did not tighten enough and let filament leak. Use a calibrated tool for safety-critical fasteners such as brakes and structural bolts. A fuel cap that no longer clicks may leak fuel vapour and trigger a check-engine light, so replace it. Adjustable versions store some spring energy, so open them carefully. Otherwise no special hazards are known.
- **common_failures**: (1) Teeth wear or round off, so it clicks early or slips at a lower torque; use harder materials (acetal, nylon, steel), more teeth and grease. (2) The spring relaxes, especially plastic spring fingers or springs left preloaded in storage, so the torque falls; use metal springs and store adjustable tools at zero preload. (3) It will not click at all (broken pawl, jammed teeth or debris); clean it or replace the unit. (4) Cross-threading or a damaged gasket makes a cap feel wrong or leak even though it clicks. (5) Tooth chips in brittle prints (PLA, some resins); use PETG or nylon with more walls. (6) Torque set too low for the job, like the printed nozzle wrench that let filament leak; calibrate against a real torque tool.
- **related**: 
  - Ball-detent torque limiter: steel balls in dimples instead of teeth; smoother, more accurate, and can disengage fully and trip a switch, but has more parts
  - Friction slip clutch: spring-pressed friction discs slip smoothly and silently at any angle, with no clicks, but wear and heat up when slipping
  - Face ratchet (star ratchet): the same saw-tooth face rings, but designed to drive one way and freewheel the other rather than to limit torque
  - Ratchet and pawl: one-way catch; the Wikipedia 'pawl and spring' torque limiter is a close cousin where a sprung pawl leaves a notch at overload
  - Compliant slip hub / flexing-fin torque wrench: one-piece printed hubs whose springy fins snap over a lip, with no separate spring
  - Shear pin: breaks at overload and must be replaced; does not reset
  - Push-and-turn child-resistant cap: also uses ratchet teeth that slip, but to stop opening unless pushed, not to limit tightness
  - Click-type torque wrench: only signals the set torque (click and small deflection) and does not stop you going further

### Pictures, videos and models

- **links**: 
  - [Safety clutch 7 (Nguyen Duc Thang, YouTube channel thang010146; title confirmed via YouTube oEmbed and his catalogue)](https://www.youtube.com/watch?v=ynfwLNaXU08): CAD animation of a torque limiter made from a cylinder cut at an angle: a spring clamps the angled faces together and they ride apart under overload *(licence: link only)*
  - [Torque Limiting Screw Driver by Oaklandishh (Printables 30226)](https://www.printables.com/model/30226-torque-limiting-screw-driver): CAD section image showing two saw-tooth clutch plates pressed by a spring inside a printed screwdriver handle, plus a proof-of-concept photo *(licence: Creative Commons Public Domain)*
  - [US5110003A - Torque-override cap (Stant, 1992)](https://patents.google.com/patent/US5110003): Patent drawings of a clicking fuel cap: shell with drive teeth, ratchet wheel with sloped driven teeth, and wave-washer spring *(licence: link only (patent document))*
  - [US7762164B2 - Torque-limiting device (ECA Medical Instruments, 2010)](https://patents.google.com/patent/US7762164B2/en): Patent drawings of a disposable torque-limiting driver with crown-gear teeth on upper and lower shanks and a spring *(licence: link only (patent document))*
  - [VTD Torque limiting knobs (Elesa+Ganter product page)](https://www.elesa-ganter.com/en/www/clamping-knobs--torque-limiting-knobs--vtd): Product photos and data for clamping knobs that click and release at 2-6 Nm when tightening and unlock when turned anticlockwise *(licence: link only)*
- **make_it_yourself**: 
  - [Torque Limiting Screw Driver by Oaklandishh (Printables 30226; details read via the Printables public API)](https://www.printables.com/model/30226-torque-limiting-screw-driver): Printable adjustable hex-bit driver: 2x handle halves and 2x saw-tooth clutch plates with a coil spring, plus a spacer to raise the spring force; demo video 'TorqueDriverUse' at https://www.youtube.com/watch?v=Fa3U4Y24wLA *(licence: Creative Commons Public Domain)*
- **diagram_idea**: Two rings of lopsided saw teeth pressed together by a spring, shown unrolled flat: in the tightening direction the sloped faces push the upper ring up against the spring until it hops over a tooth (click); in the undo direction the upright faces meet squarely and drive solidly.
- **sources**: 
  - https://en.wikipedia.org/wiki/Torque_limiter
  - https://en.wikipedia.org/wiki/Torque_screwdriver
  - https://en.wikipedia.org/wiki/Micrometer_(device)
  - https://patents.google.com/patent/US5110003
  - https://patents.google.com/patent/US8757035B2/en
  - https://patents.google.com/patent/US7762164B2/en
  - https://www.elesa-ganter.com/en/www/clamping-knobs--torque-limiting-knobs--vtd
  - https://www.elesa.com/en/elesab2bstoreoc/torque-limiting-knobs--1
  - https://blog.mountztorque.com/a-guide-to-torque-wrench-delivery-mechanisms/
  - https://engineerfix.com/why-wont-my-gas-cap-click/
  - https://www.firgelliauto.com/blogs/mechanisms/detent
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.youtube.com/watch?v=ynfwLNaXU08 (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=Fa3U4Y24wLA (verified via YouTube oEmbed)
  - https://www.printables.com/model/30226-torque-limiting-screw-driver (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/ (Printables models 30226, 115459 'Tunable torque wrench', 1244374 'TORQUEY', 30074 'Overcomplicated Variable Torque Wrench Ratchet', 242447 and 188754 nozzle torque wrenches)
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: clicks or pops out and resets
- **clicks**: clicks
- **tools**: none, hand tools
- **load_max**: light
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: parts clamped together
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal, carbon fibre or composites

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, processes, removability

## 3 Ball-detent torque limiter

*torque limiting & slip.* Spring-loaded balls sit in dimples between two plates and carry the drive until the load gets too high, then pop out so the drive slips instead of breaking something

### What it is

- **plain_name**: A shaft connector where spring-pressed steel balls sit in little dimples and carry the drive; if something jams, the balls pop out of their dimples and the drive lets go instead of breaking
- **term**: Ball-detent torque limiter (ball-detent overload clutch, ball-detent safety coupling)
- **aliases**: 
  - ball detent torque limiter
  - ball-type torque limiter / ball torque limiter
  - overload clutch
  - safety clutch
  - safety coupling (when combined with a flexible shaft coupling)
  - mechanical torque limiter
  - roller detent torque limiter (version with rollers instead of balls)
  - drill clutch / torque clutch / clutch collar (on cordless drill-drivers)
  - torque-limiting sprocket or pulley hub (when it carries a sprocket, gear or pulley)
- **family**: torque limiting & slip
- **other_families**: clutches & couplings, indexing & detents
- **one_liner**: Spring-loaded steel balls sitting in dimples between two plates pass on the drive until the torque gets too high, then roll out of their dimples so the drive side spins free (or clicks round) instead of breaking the gears, motor or workpiece.
- **complexity**: A small assembly that acts as one unit: a hub, a drive flange or plate with detents (dimples or cone-shaped pockets), hardened steel balls (or rollers) held in a cage or holes, springs (usually disc springs, also called Belleville washers, or coil springs), a pressure (actuation) ring, an adjusting nut or ring to set the torque, a support bearing, and often a switch plate that a sensor can watch.
- **how_it_works**: Balls sit partly in holes in one part and partly in shallow dimples in the other, and springs press the two parts together so the balls stay seated. When turning, the sloped sides of the dimples push on the balls, and part of that force tries to push the pressure ring back against the springs. Below the set torque the springs win and the whole thing turns as one solid piece with no play. Above it, the balls roll up and out of their dimples, the ring moves back a little (which can trip a switch to stop the motor) and the torque passed on drops to almost nothing. Depending on the design, the balls drop into the next dimple and reset by themselves (multi-position), can only drop back in at one position per turn so timing is kept (single-position), or the springs flip over centre and stay apart until someone resets them by hand (full disengagement).

### Finder attributes

- **job**: 
  - slip or let go when overloaded: disconnects the drive within milliseconds when a jam or crash overloads it
  - join and hold: below the limit it couples two shafts, or a gear, sprocket or pulley to a shaft, solidly and with no backlash
- **motion**: rotate: turns continuously with its shaft; on overload the two halves turn relative to each other, and the pressure ring slides a few millimetres along the shaft
- **degrees_of_freedom**: 0 between input and output while engaged: they turn as one piece. After tripping, 1: the halves can turn freely relative to each other, and the pressure ring moves axially, tied to that disengagement.
- **special_behaviour**: 
  - torque-limiting (slips or clicks at a set force/torque): the spring preload sets the torque at which the balls leave their dimples
  - fail-safe or breakaway: acts as a mechanical fuse that disconnects in about 3-5 ms, faster than electronic current limiting can react
  - indexing (clicks into set positions): multi-position types re-engage at the next dimple; single-position (synchronous) types re-engage at only one position per turn so machine timing is kept; full-disengagement types stay apart after tripping until pushed back in by hand
- **holding_principle**: shape (the balls interlock with the dimples; form-fit), held in place by spring force (disc springs or coil springs press the balls into the dimples)
- **input_output**: Continuous rotation -> the same rotation at 1:1 until the trip torque, then the torque passed on drops to near zero. Works the same in both directions (a drill clutch limits torque equally both ways). Backlash-free while engaged in industrial designs; efficiency close to 100% while engaged ⚑ [uncertain: no figure published]. In line (coaxial), or a gear, sprocket or pulley mounted on the limiter hub. Back-drivable: yes, below the trip torque it is a solid coupling, so the output can drive the input. *(⚑ parts need confirming)*
- **power**: passive (no power needed). Many industrial units carry a switch plate that a proximity sensor or limit switch reads to cut the motor power after a trip; the limiter itself needs no power.
- **removability**: removable: mounts on a shaft with keyways, set screws or clamping hubs and can be taken off and refitted
- **reuse_cycles**: effectively unlimited: it resets after each overload (automatically, or by hand for full-disengagement types), unlike a shear pin, as long as it is not left ratcheting for long
- **tools_needed**: hex keys or spanners to mount on the shaft; a spanner (pin) wrench to turn the adjusting ring on industrial units; none to adjust a drill clutch (turn the collar). Printed versions: screwdriver and the hardware for the springs
- **seal**: none as a seal; industrial units are greased for life and are designed to keep dirt away from the balls ⚑ [uncertain how well sealed each type is] *(⚑ parts need confirming)*
- **load**: light to heavy: from the clutch in a cordless drill to large industrial units on machine tools, packaging lines and conveyors ⚑ [uncertain: exact largest ratings not verified]. Strong in twist up to the trip torque in both directions; needs the manufacturer's radial-load and misalignment limits kept, so side loads from belts or misaligned shafts should be carried by bearings. *(⚑ parts need confirming)*
- **adjustable**: yes: the trip torque is set by compressing the springs, turning an adjusting nut or ring on industrial units (within a marked range) or the numbered collar on a drill; changing the number or rate of springs changes the range
- **play_and_precision**: none to very small play: industrial designs transmit torque backlash-free. Trip accuracy is about ±5% (versus about ±20% for shear pins), with ±5-10% quoted for repeated trips. Single-position types return to exactly the same angle after reset. Tolerates little misalignment on its own, so pair it with a flexible coupling (a 'safety coupling') or support bearings.
- **access_needed**: end of a tube or shaft: it slides onto a shaft end, or sits between two shaft ends as a coupling
- **materials**: Hardened steel balls (e.g. 52100 chrome steel), hardened steel detent plates, steel disc springs, steel or aluminium housings; drill clutches use steel balls in a plastic or metal gearbox housing ⚑ [uncertain which parts are plastic]. DIY/printed versions use PETG, ABS or nylon bodies with real steel balls (e.g. 6 mm bearing balls) and metal coil springs. *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: steel balls and springs are cheap and a printed body works for light loads (small robots, printer mechanisms, spool drives), but plastic dimples wear and dent with repeated trips and the trip torque has to be calibrated; buy an industrial unit for real machine protection

### Making it

- **processes**: 
  - 3D print (FDM): body and detent plates, with bought steel balls and metal springs, for light duty
  - CNC: hardened steel detent plates and hubs for durable units
  - off-the-shelf part: industrial ball-detent torque limiters and torque-limiting sprocket hubs
- **print_in_place**: no: the steel balls and metal springs must be added and the torque set during assembly, so the parts are printed separately and assembled
- **making_tips_3d_printing**: Use real steel balls. A printable ball-detent demonstrator (Printables 1063083) is built for a 6 mm ball bearing, and its author warns that a printed ball will not detent as smoothly. Use metal springs, because plastic springs held under constant load relax (DuPont design guide). Detent shape: a common starting point for detents is a 90° cone-shaped seat about 25-30% of the ball diameter deep. The holding force follows spring force x tan(half the seat angle + friction angle), so a shallower seat or a weaker spring trips at lower torque (secondary source). Put the balls in holes spaced round a circle in one printed plate, with the dimples in the facing plate, and spring the pressure plate along the shaft with an adjusting nut so you can tune the trip torque. Printed holes usually come out undersize, so test-fit the balls ⚑ [uncertain: no measured clearance]. Choose the reset style: equally spaced dimples reset themselves but click round until the jam clears, which wears plastic fast; an irregular spacing re-engages once per turn and keeps position timing, useful for a robot joint. Material: PETG (fine below about 80 °C) or nylon rather than PLA, which softens above about 60 °C and is brittle. Hardened balls will dent plastic seats under high spring force ⚑ [uncertain: no test data], so keep the torque low or press in metal seats (washers, bushings) where the balls run ⚑ [uncertain]. Calibrate with a weight on an arm (torque = weight force x arm length) and re-check after some trips. If a motor drives it, add a microswitch that the pressure plate presses when it lifts, to cut power after a trip ⚑ [uncertain: DIY adaptation of the industrial sensor plate]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Ball-detent torque limiters in single-position (synchronous), multi-position, load-holding and full-disengagement (free-wheeling) versions; torque-limiter couplings combined with flexible (elastomer spider or bellows) couplings, sold as 'safety couplings'; torque-limiting sprocket, gear or pulley hubs (listed as 'chain and belt torque limiters' in supplier catalogues); spring plungers and ball plungers; hardened chrome-steel balls; disc springs (Belleville washers); proximity sensors or limit switches for trip detection. Supplier vocabulary: 'torque limiter', 'overload clutch', 'safety coupling', 'ball detent torque limiter' (e.g. McMaster-Carr 'Torque Limiters').
- **rules_of_thumb**: 
  - Set the trip torque above normal running torque with a service factor: trip torque = service factor x running torque, with about 1.25 for normal duty and 1.5 for heavy shock loads (https://www.motioncontroltips.com/three-torque-limiter-options-compared-and-trip-torque-explained/).
  - Pick a unit whose adjustment range runs from the operating torque up to about 2-3 times that value, and set it below the torque at which damage could occur (R+W, https://blog.rw-america.com/blog/bid/261935/Basic-Application-of-Ball-Detent-Torque-Limiters).
  - Expect about ±5% trip accuracy, against about ±20% for shear pins (R+W, same page); ±5-10% for repeated trips is also quoted (https://www.motioncontroltips.com/three-torque-limiter-options-compared-and-trip-torque-explained/).
  - On high-speed shafts (about 2500 rpm or more), use a full-disengagement type, because repeated re-engagement attempts can damage the balls and detents, and re-engage only at low speed. One such unit re-engages every 60° (six positions) (Nexen installation manual L-21219-F-0719, pages 4-5, https://www.nexengroup.com/media/gated_content/LitPDF/21219.pdf).
  - Multi-position types keep tripping ('ratcheting') until the overload is removed, which wears the plates and detents; use the axially moving switch plate and a sensor to stop the drive (https://www.motioncontroltips.com/how-do-ball-detent-torque-limiters-work-and-when-are-they-used/; Nexen manual page 4).
  - Mechanical units disconnect in about 3-5 ms, faster than electronic current limits can stop the stored energy of a rotating mass (R+W video tutorial summary, https://www.techbriefs.com/component/content/article/47046-video-tutorial-on-ball-detent-safety-couplings).
  - Detent geometry (secondary source): release force = spring force x tan(alpha/2 + phi), where alpha is the included seat angle and phi is the friction angle. A 90° seat about 25-30% of the ball diameter deep is typical, and hardened 52100 balls (60-66 HRC) prevent denting (https://www.firgelliauto.com/blogs/mechanisms/detent).

### When to use it

- **everyday_examples**: 
  - the numbered clutch collar on a cordless drill-driver, which slips and ratchets when the screw is tight enough
  - manual torque screwdrivers in which steel balls roll between indented plates pressed by a spring
  - servo axes on machine tools, robots, woodworking and packaging machines, where it protects against crashes and jams
- **when_to_use**: When a motor or gearbox could jam or crash and you want the drive to let go cleanly, quickly and repeatably, then carry on after the jam is cleared. Examples: robot arms and joints, CNC and 3D-printer axes, conveyors, packaging and printing lines, winders and spool drives. Use it when you need no backlash while running (positioning systems), when you want a switch to shut the motor off after a trip, or when timing must be kept after a reset (single-position type).
- **when_not_to_use**: Not for continuous controlled slipping, such as keeping tension on a spool or a slip-to-hold function: use a friction slip clutch or a magnetic (hysteresis) clutch, which slip smoothly and steadily. Not for very high torques at low cost where occasional replacement is acceptable: a shear pin is simpler. Not where the limiter would have to carry large side loads or misalignment by itself. For a hand-turned cap or knob, a simpler ramp-tooth (clicking) limiter is enough. It is not a safety guard for people, because it protects the machine, not fingers.
- **environment_limits**: Heat: spring force falls as springs warm. Music-wire springs lose about 3% of their rate per 100 °C (secondary source), and disc springs can take a set over time, lowering the trip torque. Printed bodies: PLA softens above about 60 °C and PETG is fine below about 80 °C (Prusa). Dirt and grit in the balls and dimples change the trip torque and speed up wear, so industrial units are greased for life ⚑ [uncertain: sealing level varies]. Vibration can make lightly set detents skip. High speed: repeated re-engagement above about 2500 rpm can damage balls and detents, so re-engage at low speed. *(⚑ parts need confirming)*
- **safety_notes**: Self-resetting types re-engage as soon as the load drops, so switch off and lock out the motor before clearing a jam, or the machine may start moving again. Disc springs store energy: take units apart carefully (one maker requires installation by a qualified technician, and warns that dismantling voids the warranty). Full-disengagement types must be pushed back in by hand, at low speed only. A limiter protects the machine, not people, so keep guards in place. Small steel balls are a swallowing hazard for children.
- **common_failures**: (1) Wear of balls and detents from long ratcheting after a jam; add a sensor that stops the motor, or use a full-disengagement type. (2) Denting (brinelling) of seats with soft balls or seats, especially in printed plastic; use hardened balls and hard seats. (3) Springs lose force or take a set, so it trips early; check the setting and keep it away from heat. (4) Set too low, giving nuisance trips on start-up shock; use a service factor. Set too high, so it gives no protection; set it below the damage torque. (5) Dirt or dried grease makes the trip torque erratic. (6) Side loads or misalignment wear the internal bearing; add a flexible coupling or support bearings. (7) Re-engaging at high speed damages the detents.
- **related**: 
  - Ratchet-tooth (cam-over) torque limiter: sloped teeth instead of balls; simpler and cheaper, used in caps, knobs and hand drivers, but it keeps clicking and is less accurate
  - Friction slip clutch: spring-pressed friction discs slip smoothly and can slip continuously, but wear, heat up when slipping and keep dragging instead of disconnecting
  - Shear pin: a weak pin breaks at overload; very simple, but must be replaced and is less accurate (about ±20%)
  - Pawl-and-spring and roller-detent torque limiters: a sprung pawl or rollers leave notches instead of balls
  - Ball detent (spring plunger) indexing: the same ball-in-dimple idea used to click into set positions, with lower spring force
  - Magnetic torque limiter (synchronous magnetic coupling): magnets carry the drive through an air gap and slip with no contact or wear
  - Compliant slip hub / servo saver: one-piece springy arms give way under shock, with no separate balls or springs
  - Ball-ramp release: in one animated safety clutch, balls in cone-shaped holes push a disc to open a friction clutch at overload

### Pictures, videos and models

- **links**: 
  - [Torque limiter with balls Make Ringspann.JPG (Wikimedia Commons, S.J. de Waard, 2013)](https://commons.wikimedia.org/wiki/File:Torque_limiter_with_balls_Make_Ringspann.JPG): Photo of an industrial ball-type torque limiter on display at Europort 2013 *(licence: CC BY-SA 3.0 and GFDL 1.2+ (reuse with credit))*
  - [Ikea Fixa - torque limiter and motor (Wikimedia Commons, Raimond Spekking, 2024)](https://commons.wikimedia.org/wiki/File:Ikea_Fixa_-torque_limiter_and_motor-1227.jpg): A cordless drill's gearbox and motor taken out of the tool, with the numbered torque-limiter (clutch) collar; the inside of the clutch is not visible, so it is not confirmed that this model uses balls ⚑ [uncertain] *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [R+W ST Series Industrial Torque Limiters (R+W Coupling Technology, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=VLEFE714iPQ): Manufacturer video of industrial ball-detent torque limiters *(licence: link only)*
  - [Nexen Mechanical Torque Limiter installation, operation and maintenance manual (L-21219-F-0719)](https://www.nexengroup.com/media/gated_content/LitPDF/21219.pdf): Numbered cut-away drawing (balls, detents, disc springs, actuation ring, adjusting ring, proximity sensor) and engaged/disengaged diagrams for single-position, multi-position and full-disengagement types *(licence: link only)*
  - [Ball detent torque limiters: How do they work and when are they used? (Motion Control Tips)](https://www.motioncontroltips.com/how-do-ball-detent-torque-limiters-work-and-when-are-they-used/): Plain explanation with product images of how balls, detents and disc springs work, and of multi-position vs single-position reset *(licence: link only)* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Ball detent mechanism by Ragesh (Printables 1063083; details read via the Printables public API)](https://www.printables.com/model/1063083-ball-detent-mechanism): Printable six-position (60°) rotary ball detent in 4 printed parts, using a 6 mm steel ball, a spring and an M3 screw and nut. It shows the ball-in-dimple principle; with a stiffer spring and a drive shaft, the same layout behaves as a multi-position torque limiter ⚑ [uncertain: not tested as a limiter] *(licence: Creative Commons Attribution (CC BY))* *(⚑ parts need confirming)*
- **diagram_idea**: A side section through two plates with a steel ball half in a hole and half in a cone-shaped dimple, disc springs pushing from behind. Show three frames: normal drive (the ball pushes on the dimple slope and the springs hold), overload (the ball rolls up the slope and the pressure plate moves back, tripping a switch), and reset (the ball drops into the next dimple, or the only matching one on single-position types).
- **sources**: 
  - https://en.wikipedia.org/wiki/Torque_limiter
  - https://en.wikipedia.org/wiki/Ball_detent
  - https://en.wikipedia.org/wiki/Torque_screwdriver
  - https://www.motioncontroltips.com/how-do-ball-detent-torque-limiters-work-and-when-are-they-used/
  - https://www.motioncontroltips.com/three-torque-limiter-options-compared-and-trip-torque-explained/
  - https://blog.rw-america.com/blog/bid/261935/Basic-Application-of-Ball-Detent-Torque-Limiters
  - https://www.machinedesign.com/automation-iiot/article/21138651/preventing-torque-overloads-with-mechanical-limiters
  - https://www.nexengroup.com/media/gated_content/LitPDF/21219.pdf
  - https://www.techbriefs.com/component/content/article/47046-video-tutorial-on-ball-detent-safety-couplings
  - https://www.firgelliauto.com/blogs/mechanisms/detent
  - https://www.mcmaster.com/products/torque-limiters/
  - https://commons.wikimedia.org/wiki/File:Torque_limiter_with_balls_Make_Ringspann.JPG
  - https://commons.wikimedia.org/wiki/File:Ikea_Fixa_-torque_limiter_and_motor-1227.jpg
  - https://www.youtube.com/watch?v=VLEFE714iPQ (verified via YouTube oEmbed)
  - https://www.printables.com/model/1063083-ball-detent-mechanism (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Finder tags

- **connects**: any solid parts ⚑ *needs confirming (best guess): joins parts, but no specific kind of part found; set to any solid parts*
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: clicks or pops out and resets
- **clicks**: clicks
- **tools**: drill and tap, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, links, load, make_it_yourself, making_tips_3d_printing, materials, seal

## 4 Friction slip clutch (slip coupling, slipper clutch)

*torque limiting & slip.* Spring-pressed friction discs pass turning force until a set torque, then slip smoothly; protects gears in robot arms, RC cars and filament spool holders

### What it is

- **plain_name**: A spring squeezes rubbing plates together so the drive turns normally, but the plates slide over each other instead of breaking something when the load gets too heavy
- **term**: Friction slip clutch (friction torque limiter)
- **aliases**: 
  - slip clutch
  - slip coupling
  - slipper clutch (RC cars: the spring-loaded pads on the spur gear)
  - friction torque limiter
  - friction plate torque limiter
  - safety friction clutch
  - friction safety clutch
  - overload clutch (general name for all torque limiters)
  - torque limiter (general name)
  - drag (on fishing reels and filament spool holders)
  - slipping clutch
  - clutch gear (LEGO Technic (brand) name for a gear that slips on its axle)
  - Rutschkupplung (German)
  - limiteur de couple (French, general term for torque limiter)
  - Note: on motorcycles 'slipper clutch' means a back-torque limiter that slips when the rear wheel drives the engine, which is a different device
- **family**: torque limiting & slip
- **other_families**: clutches & couplings, brakes, dampers & speed control
- **one_liner**: Two or more friction surfaces held together by an adjustable spring pass turning force like a solid joint until a set torque, then slide smoothly and keep sliding for as long as the overload lasts, resetting by themselves afterwards.
- **complexity**: A small assembly that acts as one unit: hub (fixed to the shaft), friction discs or pads, the driven part (gear, sprocket, pulley or plate) sandwiched between them, a pressure plate, a spring (coil spring, wave washer or disc spring), and an adjusting nut; industrial versions add a plain bearing inside the driven part
- **how_it_works**: A spring pushes the friction faces together, and friction between them carries the turning force from one side to the other (plain friction clutch principle). The most torque it can carry is roughly spring force x friction coefficient x mean radius of the rubbing ring x number of rubbing face pairs. When the load asks for more than that, the faces start to slide: the input keeps turning, the output slows or stops, and the extra energy turns into heat. When the overload goes away the faces grip again, so nothing has to be reset or replaced; tightening the nut squeezes the spring harder and raises the slip torque.

### Finder attributes

- **job**: 
  - slip or let go when overloaded: protects gears, motors and belts from jams, crashes and shock loads
  - slow it, stop it or keep its speed steady: used as a steady drag, e.g. a fishing-reel drag or a filament spool holder that keeps the filament under light tension
- **motion**: rotate: passes continuous rotation 1:1 while gripping; the two halves rotate relative to each other (unlimited turns) while slipping
- **degrees_of_freedom**: 0 while gripping (the two halves turn as one); 1 while slipping (rotation of one half relative to the other about the shaft)
- **special_behaviour**: 
  - torque-limiting: slips smoothly at a set, adjustable torque instead of breaking gear teeth or stalling a motor, and keeps passing that torque while it slips (it does not disconnect completely)
  - Resets itself: grips again as soon as the overload ends; nothing to replace (unlike a shear pin)
- **holding_principle**: 
  - friction or clamping (force-fit): the drive is carried only by friction between the pressed faces
  - spring force (a spring or springy part presses it in place): a coil, wave or disc spring provides the clamping force and sets the slip torque
- **input_output**: continuous rotation -> the same continuous rotation, ratio 1:1 while gripping; limited to the set slip torque when overloaded (the output then turns slower or stops while the input keeps turning). Efficiency close to 100% while gripping; while slipping, all the power passing through the slipping faces becomes heat. Shafts in line (as a shaft-to-shaft coupling) or a gear, sprocket or pulley mounted on a hub on one shaft (ComInTec style). Back-drivable: yes; it slips at about the same torque in either direction, so a load can drive it backwards once it exceeds the slip torque (for example an arm sagging under gravity)
- **power**: passive (no power needed); the spring provides the clamping force. Electromagnetic and magnetic-particle clutches that do the same job are covered elsewhere
- **removability**: removable: slides off the shaft after undoing the adjusting nut (or a circlip on small ones)
- **reuse_cycles**: effectively unlimited: it can slip and re-grip over and over and can be taken apart many times, though the friction faces wear and the torque setting drifts, so it needs checking and occasional new pads
- **tools_needed**: A spanner (wrench) or screwdriver for the adjusting nut; circlip pliers for small units whose spring is held by a circlip (Commons photo notes the circlip is 'a little tricky to fit'); sometimes a hex key for the hub's set screw
- **seal**: none: it is an open mechanism; oil, grease or water on the friction faces changes the slip torque, so it should be kept dry and clean or covered
- **load**: Light to heavy depending on size: hobby versions carry light loads (a few N·cm in a toy clutch gear to about 1 N·m in printed designs ⚑ [uncertain]); industrial friction torque limiters are sold from about 1 N·m up to 23,000 N·m (ComInTec range quoted in CDA). Strong in twist up to its set slip torque by design; it is not meant to carry large side loads or thrust on its own, so the shaft needs its own bearings *(⚑ parts need confirming)*
- **adjustable**: yes: turning the adjusting nut changes how hard the spring presses (industrial units: tighten until it no longer slips in normal running, then a further half turn; RC slipper clutches are adjusted in 1/8-turn steps). Changing the spring or adding friction discs changes the range
- **play_and_precision**: No backlash while gripping if the friction plate is mounted rigidly; if the plate slides on a spline to follow the spring, the spline adds backlash, and Slocum advises mounting the plate on a thin flexible disc (diaphragm) for precision work. Repeatability of the slip torque is modest (industrial units about +/-15%). After any slip the output has lost its angular position relative to the input, so a robot joint needs re-homing if its position sensor is on the motor side. It does not tolerate much shaft misalignment; use a flexible coupling as well if the shafts are not in line
- **access_needed**: end of a tube or shaft: the parts slide onto a shaft end and are clamped by a nut or circlip on that end
- **materials**: Industrial: steel hub and pressure plates, bonded friction rings (organic lining material ⚑ [uncertain]), steel disc springs, a bronze or plastic plain bearing inside the driven part. Maker versions: printed plates or gears (PETG is preferred over PLA because slipping makes heat and the parts must flex slightly), a metal compression spring or wave washer, a lock nut on a threaded rod or bolt, and optionally friction pads such as felt, cork, leather or rubber O-rings between printed faces ⚑ [uncertain]. Oil and grease must be kept off the friction faces *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: easy to print and assemble with a bolt, a spring and a lock nut, but getting a steady slip torque takes trial and error (spring choice, friction material, and printed parts that soften or creep); ready-made friction torque limiters and RC slipper clutches can be bought instead

### Making it

- **processes**: 
  - 3D print (FDM): plates, gear with friction faces, pressure plate and spool hubs; add a metal spring and nut
  - 3D print (resin): possible for small clock or instrument clutches ⚑ [uncertain]
  - CNC or lathe: metal hubs and pressure plates
  - laser cut: flat friction discs from acrylic, plywood, cork or felt sheet ⚑ [uncertain]
  - off-the-shelf part: industrial friction torque limiters (hub type for sprockets and pulleys, or coupling type), RC slipper clutch assemblies and pads, toy-kit clutch gears *(⚑ parts need confirming)*
- **print_in_place**: no: the plates, spring and nut are separate parts that are assembled, and the spring and nut are normally bought metal parts; this is what allows the torque to be adjusted
- **making_tips_3d_printing**: Print the rubbing plates flat on the bed so the friction faces are smooth top or bottom surfaces, not layer edges. Use PETG (or ASA, nylon) rather than PLA for parts that slip or flex: the RC slipping-gear designer on Printables says the clutch 'needs to flex and accept some heat - so PETG is better than PLA', and the Printables clock friction clutch 'does not work printed in PLA' and needs a tolerance-calibrated PETG profile. PLA softens and deforms above about 60 °C (Prusa), which slipping can reach. Let a metal coil spring, wave washer or disc spring provide the clamping force rather than squeezed plastic, because plastic springs and clamped plastic lose force over time (stress relaxation, DuPont). Key alternate discs to input and output the simple way shown in Thang's 'Safety clutch 4': square holes locking some discs to one shaft and round holes riding on a square rod for the others. Use a lock nut (nylon insert) on a threaded rod or bolt so the setting does not unwind; the Printables spool holder runs on an 8 mm or 5/16 in threaded rod. Expect the first hours of use to change the torque as the faces bed in, and test the slip torque with a drill on its lowest clutch setting, as the RC slipping-gear designer suggests. Keep all grease away from the friction faces, but lubricate any separate bearing surfaces
- **off_the_shelf_parts**: Friction torque limiter (hub type, carries a sprocket, gear or pulley between two friction rings, with disc springs and an adjusting nut); torque limiter coupling; slip clutch; RC slipper clutch assembly, slipper pads and slipper spring; spur gear with slipper hub; disc springs (Belleville washers); wave washers; compression springs; nylon-insert lock nuts; threaded rod; plain bearings or 608 ball bearings for spool holders; toy-kit clutch gears (e.g. LEGO Technic (brand) 24-tooth clutch gear). Supplier category names: 'torque limiters', 'slip clutches', 'friction torque limiters'
- **rules_of_thumb**: 
  - Slip torque T = n x mu x W x R, where W is the spring's clamping force, mu the friction coefficient, R the mean radius of the rubbing ring and n the number of pairs of rubbing faces; for worn-in faces R = (outer radius + inner radius) / 2; with n1 discs on one shaft and n2 on the other, n = n1 + n2 - 1 (University of Mustansiriyah lecture 'Friction Clutches', eqs. 16-19 and General Notes). Worked examples there use mu = 0.25 to 0.33 for dry friction faces
  - A cone (tapered) friction face multiplies the slip torque by 1 / sin(half-angle) for the same spring force, e.g. a 30° half-angle doubles it (same lecture, eqs. 10 and 15)
  - Industrial friction torque limiters are not precision devices: the slip torque typically varies by about +/-15% (CDA Magazine / ComInTec)
  - Setting: tighten the adjuster until it no longer slips in normal running, then add a further half turn (CDA Magazine / ComInTec); RC slipper clutches are adjusted in 1/8-turn steps (PetitRC; RCexplained)
  - Mount it on the slow side of a gearbox (the output) if it may slip for long, because continuous slipping at speed causes heat and wear; stop the drive if it slips for long (CDA Magazine / ComInTec). Remember the trade-off: torque at the output = clutch slip torque x the gear ratio between the clutch and the output, which is why a clutch gear placed right after the driving gear takes more output torque before it slips (Sariel's gears tutorial)
  - Keep oil and grease off the friction faces: they cause a dramatic drop in slip torque, and contaminated friction rings must be replaced; water gives a temporary drop (CDA Magazine / ComInTec)
  - Use a spring with a flat force curve (e.g. a disc spring worked in its flat range) so the torque stays steady as the faces wear (German Wikipedia 'Rutschkupplung'; CDA Magazine)
  - If the friction plate slides on a spline there will be backlash; for precision mount the plate on a diaphragm (Slocum, FUNdaMENTALs of Design, Topic 5, 'Wheels: Clutches & Differentials')

### When to use it

- **everyday_examples**: 
  - The drag on a fishing reel: a big hand nut sets how hard the line can pull before the spool slips (Wikipedia 'Torque limiter')
  - The slipper clutch on a hobby RC car's spur gear, which slips on hard launches and landings to protect the gears (PetitRC)
  - A filament spool holder with a built-in slip clutch that keeps gentle tension on the filament (Printables spool holder by Riskable)
  - The friction clutch that lets you move a clock's hands to set the time without stopping the movement (Printables 'Friction Clutch for Clock'); also the LEGO Technic (brand) clutch gear used so a motor can keep running when steering hits its end stop (Sariel)
- **when_to_use**: When a motor or gearbox could jam or hit an end stop and you want it to slip safely and carry on afterwards without replacing anything: robot arm joints and grippers (Slocum: a clutch keeps gear teeth from being sheared off when a driven part hits a rigid object), RC car drivetrains, conveyor and winch drives, window-blind and curtain drives, knobs that must not over-drive a mechanism at its end stops, clock hand-setting. Also when you want a steady, adjustable drag, such as a spool holder or fishing reel. Good when overloads may happen often, because it resets by itself
- **when_not_to_use**: Not when the load must be held against gravity or position must never be lost, because a slipping clutch lets the load move and the output loses its position (use a worm drive, brake or other self-locking drive, or a ball-detent limiter that snaps back to the same position). Not where it would slip for long periods at speed, since heat and wear build up (stop the motor using current sensing, or use a magnetic or hysteresis coupling). Not where an exact trip torque is needed, since friction limiters vary by about +/-15% (use a ball-detent torque limiter). Not where you need the drive fully disconnected on overload (use a disconnect-type ball-detent limiter or a shear pin). Not in oily places unless it is sealed or oil-rated
- **environment_limits**: Oil or grease on the faces causes a large torque drop and water a temporary one (CDA Magazine / ComInTec). Heat from slipping raises temperature; printed PLA parts soften and deform above about 60 °C (Prusa PLA guide), PETG is rated for use below about 80 °C (Prusa PETG guide). Plastic parts that are clamped lose force over time through stress relaxation (DuPont design guide), so use a metal spring. Slip torque drifts as the faces wear, bed in, glaze or pick up dirt, so recheck the setting now and then; long periods without slipping can change the first slip torque ⚑ [uncertain] *(⚑ parts need confirming)*
- **safety_notes**: It limits torque but does not make a machine finger-safe: the set torque can still pinch or crush, and the input side keeps turning while the output is stalled. On a lifting axis or robot arm, an overload can let the load drop or sag. Slipping parts can get hot. The spring is preloaded, so undo the nut carefully. Disconnect power (or remove the spark plug lead on engines) before adjusting
- **common_failures**: Set too tight: it never slips, and gears or motors break anyway; set too loose: it slips in normal use, overheats and wears or burns out the pads (RCexplained; PetitRC). Oil, grease or water on the faces makes it slip early (ComInTec). Printed parts soften, glaze or wear from heat when they slip for long; printed or clamped plastic springs relax so the torque falls over time (DuPont). The nut unwinds and changes the setting (use a lock nut). Wear on the faces lowers the spring force and the torque unless the spring has a flat force curve. Avoid these by using a metal spring and lock nut, keeping it clean and dry, sizing it so it only slips on real overloads, and checking the setting regularly
- **related**: 
  - Ball-detent torque limiter: spring-loaded balls pop out of dimples at the set torque; more precise and can re-engage at the same angle, but clicks and hammers while overloaded instead of slipping smoothly
  - Ratchet-tooth torque limiter (clicking torque-limiting cap or knob): sloped teeth click over each other at a set torque; one-directional, noisy, cheap to mould or print
  - Torque-limiting gear with flexing spring arms (compliant slip hub): the same slipping-by-friction idea, but the spring is built into a one-piece plastic gear or hub, so it has no separate parts and is not adjustable
  - Shear-pin coupling (breakaway link): a weak pin breaks at the set load and disconnects completely; very predictable and cheap, but must be replaced after every overload
  - Magnetic coupling: magnets pass torque without touching and slip with no wear, but the torque is lower and it has more springiness (backlash)
  - Tolerance ring: a wavy steel band press fit that slips at a set torque; very compact but not adjustable
  - Friction clutch (plate or cone clutch): the same parts, but made to be engaged and disengaged on purpose, as in a car
  - Motorcycle slipper clutch (back-torque limiter): a main clutch with ramps that slips only when the wheel drives the engine; a different device despite the shared name

### Pictures, videos and models

- **links**: 
  - [Slipping Clutch parts (Wikimedia Commons photo by tony_duell)](https://commons.wikimedia.org/wiki/File:Slipping_Clutch_parts.jpg): Photo of the separate parts of a small real slipping clutch that sits between a gearbox and a chart roller *(licence: CC BY 2.0 (reuse with credit))*
  - [Slipping Clutch assembled (Wikimedia Commons photo by tony_duell)](https://commons.wikimedia.org/wiki/File:Slipping_Clutch_assembled.jpg): The same slipping clutch assembled, with its spring retained by a circlip *(licence: CC BY 2.0 (reuse with credit))*
  - [Safety clutch 4 (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/Rrpg253rWto): CAD animation: friction discs pressed together by an adjustable spring; square discs locked to one shaft and round discs to the other, slipping when overloaded *(licence: link only (YouTube, all rights reserved))*
  - [Safety Friction Clutch (DMG-Lib, Artobolevsky mechanism collection no. 452)](https://www.dmg-lib.org/dmglib/handler?mcdsc=3847025): Drawing of a safety friction clutch from Artobolevsky's mechanism collection, with a permanent DMG-Lib link *(licence: link only (DMG-Lib conditions of use))*
  - [Limiteur de couple (Wikimedia Commons diagram by Jean-Jacques Milan)](https://commons.wikimedia.org/wiki/File:Limiteur_de_couple.png): Simple diagram of a torque limiter pressed by disc springs (the file page does not state which type is drawn ⚑ [uncertain]) *(licence: GFDL 1.2+ or CC BY-SA 3.0 (reuse with credit))* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Parametric Hangable Any-Direction Continuous Slip Clutch with optional Auto-Rewind Universal Spool Holder (Riskable, Printables)](https://www.printables.com/model/24154-parametric-hangable-any-direction-continuous-slip-): Parametric OpenSCAD filament spool holder with an adjustable continuous slip clutch that keeps tension on the filament, on an 8 mm or 5/16 in threaded rod with skate bearings; video at https://www.youtube.com/watch?v=kHT3rltCInU (web page bot-blocked here; details read through the Printables API) *(licence: CC BY-NC)*
  - [Friction Clutch for Clock (jattie, Printables)](https://www.printables.com/model/948932-friction-clutch-for-clock): Adjustable friction clutch for a printed pendulum clock so the hands can be set without disconnecting the drivetrain; Fusion 360 source included; needs a tolerance-calibrated PETG profile (details read through the Printables API) *(licence: GPL 3.0)*
  - [Repbox Integrated Auto-Rewinder Spool Holder (w/ slip clutch) (mikedmor, Printables model id 548003)](https://api.printables.com/graphql/): Remixed auto-rewinding spool holder for a filament storage box with an integrated slip clutch, using two 608 bearings (read through the Printables public API; the model's web page could not be opened here) *(licence: CC BY)*
- **diagram_idea**: Cut-away side view of a gear sandwiched between two friction pads on a hub, with a coil spring and nut pushing them together, animated so the gear turns with the shaft, then stops against a jam while the shaft keeps turning and a heat glow appears at the pads.
- **sources**: 
  - https://en.wikipedia.org/wiki/Torque_limiter
  - https://de.wikipedia.org/wiki/Rutschkupplung
  - https://en.wikipedia.org/wiki/Slipper_clutch
  - https://www.controlsdrivesautomation.com/page_562391.asp
  - https://uomustansiriyah.edu.iq/media/lectures/5/5_2021_12_11!08_29_17_PM.pdf
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://site.petitrc.com/setup/HowToSlipper/
  - https://www.radiocontrolinfo.com/what-is-the-purpose-of-a-slipper-clutch-on-an-rc-car/
  - https://sariel.pl/2009/09/gears-tutorial/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://commons.wikimedia.org/wiki/Category:Torque_limiters
  - https://commons.wikimedia.org/wiki/File:Slipping_Clutch_parts.jpg
  - https://commons.wikimedia.org/wiki/File:Slipping_Clutch_assembled.jpg
  - https://commons.wikimedia.org/wiki/File:Limiteur_de_couple.png
  - https://commons.wikimedia.org/wiki/File:Slip_clutch.svg
  - https://www.dmg-lib.org/dmglib/handler?mcdsc=3847025
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://youtu.be/Rrpg253rWto
  - https://www.printables.com/model/490489-slipping-gear-clutch-gear-for-rc-cars
  - https://www.printables.com/model/24154-parametric-hangable-any-direction-continuous-slip-
  - https://www.printables.com/model/948932-friction-clutch-for-clock
  - https://www.youtube.com/watch?v=kHT3rltCInU
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: shaft ⚑ *needs confirming (best guess): worked out from its name, but joining parts is not one of its two main jobs*
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: slips and keeps going
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: steady speed or level
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, fabric, leather or cord

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, links, load, materials, processes

## 5 Torque-limiting gear with flexing spring arms (compliant slip hub)

*torque limiting & slip.* A one-piece plastic gear or hub whose built-in springy arms grip the shaft and let it slip when overloaded, with no separate parts

*Also covers:* Also covers the RC "servo saver" (a sprung servo horn that gives way under shock)

### What it is

- **plain_name**: A plastic gear or hub with springy arms built into it that hug the shaft tightly enough to drive it, but let the gear slip round when something jams; the RC 'servo saver' is a spring-loaded servo arm that gives way when the wheels are knocked and then springs back
- **term**: Compliant torque-limiting gear (compliant slip hub, flexure slip clutch)
- **aliases**: 
  - compliant slip hub
  - flexure slip clutch
  - torque limiting gear (DuPont design guide term)
  - gear with sliding coupling / split-hub coupling (DuPont design guide term)
  - slip gear
  - slipping gear
  - clutch gear
  - friction hub
  - spring-arm clutch
  - gear saver or motor saver (maker term) ⚑ [uncertain]
  - friction-type torque limiter with a split resin sleeve (printer paper-feed parts)
  - servo saver (RC cars: a sprung or flexible servo arm)
  - adjustable servo saver
  - flexible servo arm / flexible servo horn *(⚑ parts need confirming)*
- **family**: torque limiting & slip
- **other_families**: compliant mechanisms & flexures, print-in-place & 3D-printing joints, clutches & couplings
- **one_liner**: A gear or hub whose own flexible arms grip the shaft by spring force, so it drives normally but slips instead of stripping teeth when overloaded, with no separate springs, balls or nuts.
- **complexity**: Single piece: a gear or hub with built-in spring arms (split hub fingers or curved flexures), plus the shaft or inner ring it grips; long-life versions add one part, a metal ring spring or O-ring around the split hub. The servo saver is a few parts: an inner hub on the servo spline, an outer arm, a spring (coil or torsion spring, or the flexible plastic itself), a sleeve and a collar or nut
- **how_it_works**: The hub is split into several springy arms or fingers that are made slightly too small for the shaft (or an inner ring), so they have to bend outwards to fit; their spring-back presses on the shaft, and friction carries the turning force. When the load needs more torque than that grip can carry, the arms slide round the shaft (or flex enough to hop out of small notches) and the gear slips, then grips again once the overload ends. A servo saver does the same job on a servo's arm: the two halves of the arm are held in line by a preloaded spring or by flexible plastic, so a knock on the wheels makes the arm give instead of the servo's gears, and the spring pulls it back to centre.

### Finder attributes

- **job**: slip or let go when overloaded: protects plastic gear teeth, small motors and servos, join and hold: it also holds the gear on its shaft, with no key or set screw
- **motion**: rotate: 1:1 rotation while gripping; unlimited slipping rotation when overloaded. Servo saver: rotate, a limited give of some degrees that springs back to centre (exact angle not found ⚑ [uncertain]) *(⚑ parts need confirming)*
- **degrees_of_freedom**: 0 while gripping (gear and shaft turn together); 1 while slipping (the gear turns relative to the shaft). Servo saver: 1 (the arm can turn a little relative to the servo shaft against a spring)
- **special_behaviour**: 
  - torque-limiting: slips (or gives, for a servo saver) at a torque set by the stiffness and pre-bend of its arms
  - self-aligning or self-centring: the servo saver's spring pulls the arm back into line after a knock, so steering returns to centre
  - Resets itself: nothing to replace after an overload, unlike a shear pin
- **holding_principle**: 
  - friction or clamping (force-fit): the arms press on the shaft and friction carries the torque
  - spring force (a spring or springy part presses it in place): the arms are the spring; a servo saver uses a coil or torsion spring or flexible TPU
  - shape (form-fit): some versions have arm tips that sit in notches and hop over them when overloaded, like a detent ⚑ [uncertain] *(⚑ parts need confirming)*
- **input_output**: continuous rotation -> the same rotation, ratio 1:1, until the slip torque; then the output stops or slows while the input keeps turning. Efficiency close to 100% while gripping; slipping power becomes heat. Gear or hub mounted on a shaft (shafts in line or the gear meshing with parallel shafts). Back-drivable: yes, it slips at roughly the same torque in both directions. Servo saver: servo arm angle -> steering link angle 1:1, with springy give under shock
- **power**: passive (no power needed)
- **removability**: removable: the gear or hub pushes or snaps onto the shaft and can be pulled off; a servo saver screws onto the servo's splined output
- **reuse_cycles**: many times: it can slip, and be fitted and removed, many times, but plastic arms slowly relax and wear so the slip torque falls; printed ones are cheap to reprint
- **tools_needed**: none for most (push on by hand; a vice or small press for tight fits); a screwdriver for the screw that holds a servo saver on the servo; a spanner for an adjustable servo saver's collar or nut
- **seal**: none
- **load**: light (to medium for larger moulded gears): suited to small instrument, dial, toy and printer drives and RC steering. DuPont suggests torque-limiting gears for plastic gear drives in meat grinders, can openers and hand drill presses, and says split-hub couplings are fine where the required torque is very low. Strong only in twist up to the slip torque; side loads must be carried by the shaft and its bearings
- **adjustable**: mostly no: the slip torque is fixed by the arm thickness, length, material and how much they are pre-bent; to change it, reprint with a different fit or height, or add an O-ring or metal ring spring around a split hub. Some servo savers have a threaded collar that sets the spring preload (tamiyamodel.com: adjustable types let you adjust the spring tension)
- **play_and_precision**: Little or no play while gripping (DuPont even uses springy flexing gear parts to remove backlash). After it slips the output loses its angular position, so re-home anything with a position sensor on the motor side. A servo saver adds some play (steering 'slop'), and some models add a slight delay in steering response (tamiyamodel.com). Because the arms flex it tolerates small variations in shaft diameter ⚑ [uncertain] *(⚑ parts need confirming)*
- **access_needed**: end of a tube or shaft: it slides or snaps onto the shaft end
- **materials**: Moulded: acetal (POM, e.g. Delrin (brand)) gears on nylon shafts (DuPont examples); a resin sleeve with axial slits squeezed by a metal ring spring (printer torque limiter patent). 3D printed: PETG (flexes and tolerates heat, preferred by Printables designers), nylon, ABS, or TPU for flexible servo arms; avoid PLA for flexing arms because it is brittle and relaxes under constant load. Servo savers: plastic or aluminium arms with a steel coil spring, metal sleeve and nut. Works best gripping a smooth metal shaft ⚑ [uncertain] *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: it prints in one piece with no extra hardware, but the grip depends on a tiny amount of interference (a fraction of a millimetre) and on the material, so expect several test prints and tuning; ready-made RC servo savers are easy to buy and fit

### Making it

- **processes**: 
  - 3D print (FDM): PETG, nylon, ABS or TPU gears, hubs and flexible servo arms
  - 3D print (resin): tough or flexible resins for small gears ⚑ [uncertain]
  - injection moulding (industrial): acetal and nylon gears with moulded-in springs (DuPont)
  - CNC: flexural elements machined into a gear's hub (Slocum)
  - off-the-shelf part: RC servo savers, printer-type friction torque limiters, toy-kit clutch gears *(⚑ parts need confirming)*
- **print_in_place**: yes: the gear or hub with its spring arms prints as one finished, working piece that simply pushes onto a shaft. Long-life designs add a separate metal ring spring or O-ring around the split hub, which makes them 'partly'
- **making_tips_3d_printing**: Print the gear flat on the bed so the spring arms lie in the layer plane and bend within the layers; do not build flexing arms vertically in Z, because layer bonds are weak (Hubs snap-fit guide). Make each arm at least 1 mm thick at its root and add a fillet of at least half the arm thickness where it joins the hub (Hubs). Use PETG, nylon, ABS or TPU rather than PLA: the Printables RC slipping-gear designer prints the clutch part in PETG because it 'needs to flex and accept some heat', while PLA is fine for the other parts; Hubs calls PLA too brittle for repeated flexing; the flexure slip clutch on Thingiverse also recommends PETG because its springs keep their tension over time ⚑ [uncertain]. Make the grip parametric (interference and hub height) and print two or three versions: the Printables designer's first version would not slip at all, and he then offered a 'slips quite easily' part and a stronger part. Test the slip with a drill on its lowest torque setting holding the gear, as that designer suggests. Do not let the arms stay bent when not needed: DuPont's torque-limiting gear uses three pivoting springs so they do not remain loaded by accident, and plastic springs lose force under constant load (stress relaxation), so for a steady torque over a long time add a metal ring spring around the hub (DuPont). For a flexible servo arm, the Printables TPU servo saver was printed at 0.1 mm layers, 230 °C nozzle, 60 °C bed, 20 mm/s, retraction off, in two stiffnesses. Slipping makes heat; PLA softens above about 60 °C (Prusa) *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Servo saver (RC car steering), adjustable servo saver, aluminium servo saver, servo saver spring; servo horn (servo arm) for the servo's spline; friction-type torque limiter for office equipment (split resin sleeve with coil or C-ring spring, as in US patent application US20030050121A1); toy-kit clutch gears (e.g. LEGO Technic (brand) 24-tooth clutch gear); O-rings or spring-steel C-rings to add grip around a split hub; tolerance rings (a metal alternative)
- **rules_of_thumb**: 
  - Torque-limiting devices are very useful on plastic gears to stop tooth damage on overload, e.g. in meat grinders, can openers and hand drill presses; the springs must not remain accidentally in the loaded position, which DuPont's example achieves with three pivoting springs (DuPont Design Guide Module I, ch. 8 'Gears', pp. 47-48, Fig. 8.05)
  - A split hub used as a slipping coupling is fine where the torque is very low (e.g. a small dial setting device); if a constant torque must be carried for a long time, add a metal spring around the hub to keep the force constant (DuPont Module I, p. 48, Fig. 8.06)
  - Plastic interference fits on shafts only suit low torque, because stress relaxation of the plastic can let them slip over time (DuPont Module I, p. 63): design the slip torque with margin and expect it to fall
  - Machine or mould flexural elements into the gear's hub to keep a steady preload between gear and shaft, rather than relying on a plain press fit as the clutch (Slocum, FUNdaMENTALs of Design, Topic 5, 'Wheels: Clutches & Differentials')
  - Flexing arms for FDM: root thickness at least 1 mm, root fillet radius at least 0.5 x the thickness, never build them vertically in Z; prefer ABS, nylon or TPU (Hubs, 'How to design snap-fit joints for 3D printing')
  - Slip torque is roughly friction coefficient x total pressing force of all arms x shaft radius (the friction clutch rule T = mu x W x R applied to a hub; derived, not from a design guide ⚑ [uncertain])
  - Servo saver setting: stiff enough that normal steering does not make it give, loose enough to give on impacts ⚑ [uncertain] *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - The servo saver on the steering of a hobby RC car, which protects the steering servo when the front wheels hit something (tamiyamodel.com)
  - Toy gearboxes with a small clutch inside a gear, e.g. a push-along toy dog whose broken internal clutch stopped it gripping (Printables 'replacement gear with clutch for toy')
  - Printer paper-feed rollers that use a one-piece resin torque limiter (split sleeve with a ring spring) (US patent application US20030050121A1)
  - Dial and clock setting knobs that turn with a light, slipping grip (DuPont Fig. 8.06)
- **when_to_use**: When you want simple, built-in overload protection in a printed or moulded part with no extra hardware: toy and hobby gear drives, small robot grippers, pan-tilt heads and end-stop protection for small geared motors, settable dials and knobs, and servo protection in RC cars and small robots. Good when part count, size and cost matter more than an exact or adjustable slip torque
- **when_not_to_use**: Not for high or precisely known torques, or where the torque must stay the same for years under constant load, because plastic arms relax and wear (use an adjustable friction slip clutch with a metal spring, or a ball-detent torque limiter). Not where the part must hold its position or hold a load against gravity. Not where it may slip for long periods or in hot places (plastic softens). For servos in robots, lowering the servo's torque or current limit in software is another option ⚑ [uncertain] *(⚑ parts need confirming)*
- **environment_limits**: Plastic springs lose force over time under constant load (stress relaxation), faster when warm, so the slip torque drops (DuPont Module I, pp. 47-48 and 63). PLA softens and deforms above about 60 °C (Prusa PLA guide); PETG is rated for use below about 80 °C (Prusa PETG guide). Heat from slipping adds to this. Cold makes plastic arms more brittle and more likely to snap ⚑ [uncertain]. Grease or oil on the shaft lowers the grip ⚑ [uncertain] *(⚑ parts need confirming)*
- **safety_notes**: Low risk. It limits torque but does not make a mechanism finger-safe. A printed arm can crack and fall into a gearbox. None known beyond the usual pinch points of gears and steering linkages
- **common_failures**: Too tight: it never slips and the teeth strip anyway (the Printables RC slipping-gear designer's first version would not slip). Too loose, or loosened over time by stress relaxation: it slips in normal use (DuPont). Arms crack at the root if they are thin, have no fillet, are printed vertically or are made of brittle PLA (Hubs). Long slipping heats and wears the hub and shaft. Printed servo savers can be weaker than the moulded originals and break often (Printables HPI servo saver replacement). Servo saver too soft: vague steering ('slop'). Avoid by tuning with test prints, using PETG, nylon or TPU, adding fillets, and adding a metal ring spring where the torque must stay steady
- **related**: 
  - Friction slip clutch (slip coupling, slipper clutch): the same slip-by-friction idea with a separate metal spring and nut, so it is adjustable and steadier, but has more parts
  - Ratchet-tooth torque limiter: sloped teeth on springy arms click over each other at a set torque; one-direction, noisy
  - Ball-detent torque limiter: spring-loaded balls pop out of dimples; more precise and re-engages at the same angle
  - Tolerance ring (wavy-band press fit): a metal wavy band does the same gripping-and-slipping job between a shaft and a hole, with less relaxation than plastic
  - Servo horn and spline hub: the plain, rigid way to attach an arm to a servo, with no protection
  - Series-elastic coupling: a deliberate spring between motor and output that gives under shock but does not slip
  - Compliant ratchet and overrunning clutch (flexure pawl): printed spring arms that give one-way motion instead of torque limiting
  - Shear-pin coupling (breakaway link): breaks instead of slipping; some printed servo savers are simply designed to break at a set point

### Pictures, videos and models

- **links**: 
  - [General Design Principles for DuPont Engineering Polymers (Design Guide Module I), ch. 8 'Gears', p. 48](https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf): Line drawings Fig. 8.05 'Torque limiting gear' (gear with pivoting moulded-in springs) and Fig. 8.06 'Gear with sliding coupling' (split hub acting as a slipping coupling), plus Fig. 8.02 hub-to-rim flexible web *(licence: link only (© 2000 DuPont; cite facts in our own words))*
  - [Safety clutch 6 (spring arm) (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/KJ4pp4CCnTc): CAD animation: a pin on a springy arm drives a slotted shaft and jumps out of the slot when overloaded *(licence: link only (YouTube, all rights reserved))*
  - [Safety clutch 14 (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/Apye3XXRpYU): CAD animation: two parts of an arm held in line by a leaf spring that bends and lets them rotate apart when the machine crashes, the same idea as an RC servo saver *(licence: link only (YouTube, all rights reserved))*
  - [US20030050121A1 'Torque limiter and rotary member with the torque limiter' (Google Patents)](https://patents.google.com/patent/US20030050121A1/en): Patent drawings of a one-piece resin gear boss with a slit sleeve squeezed onto a shaft by a ring spring, used in printer paper feeds *(licence: link only (patent document))*
- **make_it_yourself**: 
  - [Slipping gear / clutch gear for RC cars (Prism08, Printables)](https://www.printables.com/model/490489-slipping-gear-clutch-gear-for-rc-cars): Printable slipping gear (20-tooth helical, module 1.5) made of a gear, a ring and a clutch part that must flex (exact arm geometry not seen ⚑ [uncertain]); two versions, one that slips easily and a stronger one, plus a test axle for a drill; clutch printed in PETG (web page bot-blocked here; details read through the Printables API) *(licence: CC BY-NC)*
  - [Flexure slip clutch (yehar, Thingiverse)](https://www.thingiverse.com/thing:6734746): Parametric OpenSCAD flexure-spring friction clutch to use as a torque limiter or gear/motor saver; torque set by a 'tight' parameter and the height; PETG recommended (page opened but its content loads by JavaScript; details from a search-engine summary ⚑ [uncertain]) *(licence: Creative Commons Public Domain Dedication ⚑ [uncertain])*
  - [Orlandoo Hunter OH32X02 Servo Saver (Aspengt, Printables model id 383115)](https://api.printables.com/graphql/): Replacement servo arm for a micro RC truck printed in TPU so the arm itself flexes and acts as a servo saver, in two stiffnesses (read through the Printables public API; the web page could not be opened here) *(licence: CC BY-NC-SA)*
  - [Servo Saver Replacement for HPI Firestorm RC Truggy (Timo, Printables model id 74078)](https://api.printables.com/graphql/): Printable PETG servo saver that reuses the original spring, metal sleeve and nut; the designer notes it is weaker than the original and also offers a solid version whose protection is breaking (read through the Printables public API) *(licence: CC BY-NC-SA)* *(⚑ parts need confirming)*
- **diagram_idea**: Front view of a gear whose hub is cut into three curved spring arms pressing on a round shaft, animated so the gear drives the shaft normally, then the shaft is blocked and the gear keeps turning with the arms sliding round it; beside it, a servo arm split in two halves joined by a spring that bends when a wheel is knocked and springs back.
- **sources**: 
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://pergatory.mit.edu/resources/FUNdaMENTALs%20Book%20pdf/FUNdaMENTALs%20Topic%205.PDF
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://patents.google.com/patent/US20030050121A1/en
  - https://tamiyamodel.com/how-does-a-servo-saver-work/
  - https://rcraces.com/what-is-a-servo-saver/
  - http://rc4beginners.blogspot.com/p/lesson-4-steering-system_06.html
  - https://en.wikipedia.org/wiki/Torque_limiter
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://youtu.be/KJ4pp4CCnTc
  - https://youtu.be/Apye3XXRpYU
  - https://www.printables.com/model/490489-slipping-gear-clutch-gear-for-rc-cars
  - https://www.thingiverse.com/thing:6734746
  - https://api.printables.com/graphql/
  - https://uomustansiriyah.edu.iq/media/lectures/5/5_2021_12_11!08_29_17_PM.pdf

### Finder tags

- **connects**: shaft
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: parallel, in line
- **overload_response**: slips and keeps going
- **clicks**: not applicable
- **tools**: none, press or vice, hand tools
- **load_max**: light
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: part onto a shaft
- **printable**: yes
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, holding_principle, make_it_yourself, making_tips_3d_printing, materials, motion, play_and_precision, processes, rules_of_thumb, when_not_to_use

## 6 Shear-pin coupling (breakaway link)

*torque limiting & slip.* A deliberately weak pin or link that snaps at a set load, sacrificing itself to protect the rest of the machine; replaced after it breaks

### What it is

- **plain_name**: A deliberately weak pin or thin link that carries the drive normally but snaps cleanly when something jams, so the cheap pin breaks instead of the expensive gears; afterwards you fit a new pin
- **term**: Shear-pin coupling (shear-pin torque limiter, mechanical fuse)
- **aliases**: 
  - shear pin
  - shear bolt (snowblower augers)
  - shear-pin coupling
  - shear-pin hub
  - shear-pin sprocket
  - roller chain shear pin coupling
  - breakaway link
  - weak link
  - mechanical fuse
  - sacrificial pin (sacrificial part)
  - fuse pin (aircraft engine mountings)
  - nylon shear pin / shear screw (model rocketry)
  - safety pin (as some snowblower owners call the auger shear bolt)
  - frangible link (a related one-shot breaking part)
- **family**: torque limiting & slip
- **other_families**: clutches & couplings
- **one_liner**: A pin, bolt or thin section sized to break at a set force or torque, so it disconnects the drive (or lets a joint go) before anything more valuable is damaged, and is replaced afterwards, like an electrical fuse.
- **complexity**: A few parts: a hub or collar and a shaft (or two coupling halves or flanges) with holes that line up, the shear pin or shear bolt (often with a narrowed neck or groove where it should break), and a keeper such as a split (cotter) pin, nut or circlip. A breakaway link can also be a single printed or moulded part with a deliberately thin neck
- **how_it_works**: The pin passes through both parts, for example a propeller hub and its shaft, so it locks them together by shape and carries all the turning force across one or two cut planes (it is loaded in shear). Its diameter, neck and material are chosen so it breaks at a known force that is lower than what the gears, shaft or motor can take. When a jam or impact exceeds that force the pin cuts cleanly, the two parts are free to turn separately (an outboard engine races with no thrust), and the rest of the machine is saved; the broken pieces are knocked out and a new pin is fitted. The same trick is used to hold something until a set force is reached, such as nylon screws holding a rocket's nose cone on until the ejection charge fires, or the plastic seal on a fire extinguisher's pull pin.

### Finder attributes

- **job**: 
  - slip or let go when overloaded: it breaks and disconnects the drive at a set torque or force (one time only)
  - join and hold: until it breaks it is simply a solid pin joint (it can also be used to hold parts together until a set force releases them)
- **motion**: none: a rigid joint until the pin breaks; afterwards the parts rotate (or separate) freely until a new pin is fitted
- **degrees_of_freedom**: 0 while intact (the hub and shaft are locked together); after breaking, 1 for a rotating coupling (free rotation) or the parts come apart completely for a straight-pull breakaway link
- **special_behaviour**: 
  - fail-safe or breakaway: breaks at a set load to protect the rest of the machine, like an electrical fuse
  - torque-limiting: one-shot, and it disconnects completely rather than slipping (Wikipedia lists it as a 'disconnect type' torque limiter)
- **holding_principle**: shape (the parts interlock; form-fit): the pin through both parts carries the load
- **input_output**: continuous rotation -> the same rotation, ratio 1:1, with no slip and close to 100% efficiency until the pin breaks; afterwards no drive at all (little or no torque reaches the load). Shafts in line (shear-pin coupling) or a hub on a shaft (sprocket, propeller, auger, pulley). Back-drivable: yes while intact (it is a rigid joint)
- **power**: passive (no power needed)
- **removability**: removable: the pin is held by a split pin, nut or circlip and is knocked out and replaced; the pin itself is single-use
- **reuse_cycles**: once: each pin works only once and must be replaced after it breaks (the hub or coupling around it is reused many times)
- **tools_needed**: Pliers for the split pin, a spanner for the prop or bolt nut, and a hammer and punch to drive out the broken pieces (JLM Marine; YouRepair); a drill (and sometimes a tap) to make the cross hole; a thread tap for screw-in nylon rocket shear pins in hard tubes (Apogee)
- **seal**: none
- **load**: Light to heavy depending on the pin: one 2-56 nylon rocketry pin breaks at roughly 21 lb (about 95 N) (Apogee: three pins take 64.24 lb); industrial roller-chain shear pin couplings are rated from 738 to 66,504 in-lb (about 83 to 7,500 N·m) (Dalton). Strong in twist up to its breaking torque; it is loaded in shear, and the hub and shaft carry any bending or side loads
- **adjustable**: no: to change the breaking load you fit a different pin (diameter, neck size, material) or a different number of pins
- **play_and_precision**: Little or no play if the pin fits its holes closely; it keeps the exact angular position until it breaks. The breaking torque can be quite accurate when the neck diameter and material are closely controlled (Dalton), but fatigue, wear, corrosion and material batch all shift it. It tolerates no misalignment, since it is a rigid joint
- **access_needed**: both sides: the pin passes right through the hub and shaft and the broken pieces have to be driven out from one side to the other (screw-in nylon rocket pins need only one side)
- **materials**: Pins: metals chosen and tempered to be brittle (so they snap rather than bend) and resistant to fatigue (Wikipedia 'Shear pin'), such as brass (a 6 mm brass pin in a stand-mixer pasta-roller attachment, per a Printables repair model), stainless steel (316 for salt water, JLM Marine), specified low-strength bolts (snowblowers), and nylon screws (rocketry). Hubs and coupling halves are made harder than the pin; Dalton hardens its coupling halves to 45-50 HRC. Printed breakaway links: PLA snaps cleanly but softens with heat; PETG and nylon tend to bend before breaking ⚑ [uncertain] *(⚑ parts need confirming)*
- **maker_difficulty**: easy to make (drill a cross hole and fit a softer pin, or print a part with a thin neck) but hard to calibrate: the breaking load of small pins and printed parts varies, so make spares and test-break several

### Making it

- **processes**: 
  - off-the-shelf part: shear pins and shear bolts made for the machine, outboard propeller shear pins, nylon shear screws, shear-pin hubs and sprockets, shear-pin couplings
  - drilling (metal or woodwork): cross-drill the hub and shaft together so the holes line up
  - CNC or lathe: pins with an accurately turned neck
  - 3D print (FDM): printed weak links, breakaway arms and test pins
  - laser cut: thin breakaway tabs in acrylic or plywood ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the pin is a separate, replaceable part by design. A one-piece printed breakaway link (a part with a deliberately thin neck) is possible, but then the whole part is reprinted after it breaks
- **making_tips_3d_printing**: A printed part can be the weak link, e.g. a printed PLA servo saver made at 100% infill that is designed to break at a marked point on impact and was tested to do so (Printables servo saver for a DT-03 buggy), or a printed pin through a metal hub. Print orientation decides where it breaks: layers are the weakest direction, so either put the intended break across the layers deliberately, or print pins lying down and put the weak neck in the geometry. In a shear test of upright-printed 10 mm PLA pins, pins built from concentric perimeters broke predictably at about 46 MPa shear stress, while zig-zag infill gave random failures (Birosz et al., Polymers 2022), so use concentric infill or all perimeters for repeatable pins. Keep the same material, printer and settings for every copy, test-break at least a few, and keep printed spares. PLA softens above about 60 °C (Prusa) and creeps under steady load, so a PLA link can break early in a hot place or after long loading. Do not swap a machine's specified metal shear pin for a printed one on powered equipment (a Printables snowblower shear bolt printed in PLA exists) unless you have tested that it breaks at the right load, because a pin that is too weak breaks in normal use and one that is too strong protects nothing
- **off_the_shelf_parts**: Shear pin, shear bolt (snowblower auger shear bolts, commonly 1/4 in or 5/16 in, per YouRepair), outboard propeller shear pin with split (cotter) pin, shear-pin hub, shear-pin sprocket, roller chain shear pin coupling, nylon shear pins (2-56 nylon machine screws for rocketry), split pins, nylon-insert lock nuts; replacement shear pins are sold for each shear-pin hub size
- **rules_of_thumb**: 
  - Average shear stress in a pin cut on two planes (double shear) is F / (2 x pi x d^2 / 4) (Engineers Edge, 'Bolt or Pin in Double Shear'); so a pin through a shaft of radius r breaks at roughly torque = 2 x (pi x d^2 / 4) x (shear strength of the pin material) x r (derived from that formula)
  - An accurate release torque comes from precision machining of the pin's neck diameter and from the pin material; the coupling halves are hardened (45-50 HRC) so only the pin breaks (Dalton Gear, roller chain shear pin coupling)
  - Choose and temper the pin so it is brittle (snaps rather than bends) and resists fatigue, otherwise it may break early in normal running (Wikipedia 'Shear pin')
  - Never replace a shear pin or shear bolt with a stronger pin or ordinary hardened bolt; use the part the manufacturer specifies (JLM Marine; YouRepair)
  - Three 2-56 nylon shear pins need about 64 lb (about 285 N) in total to shear, i.e. roughly 21 lb (95 N) each; they are consumable and replaced after every flight (Apogee Components)
  - Upright-printed 10 mm PLA pins sheared at about 46 MPa; concentric infill gave more predictable failure than zig-zag infill (Birosz, Andó and Safranyik, 'Layer Adhesion Test of Additively Manufactured Pins: A Shear Test', Polymers 14(1):55, 2022)

### When to use it

- **everyday_examples**: 
  - The shear bolts on a snowblower's auger, which snap if it hits a rock or ice chunk (Wikipedia 'Shear pin'; YouRepair)
  - The shear pin behind an outboard motor's propeller: hit something and the engine revs with no thrust (JLM Marine)
  - The brass shear pin inside a stand-mixer pasta-roller attachment that breaks if the rollers jam (Printables repair model)
  - The plastic seal that holds a fire extinguisher's pull pin until you tug it (Wikipedia 'Shear pin'), and the nylon screws that hold a model rocket's nose cone on until the ejection charge fires (Apogee)
- **when_to_use**: When overloads are rare but would be expensive (a rock in an auger, a propeller strike, a robot arm crash), when you want the drive fully disconnected on overload, and when you need a cheap, compact, very simple protector that transmits the normal load with no slip or backlash. Also when something must hold firmly until a clear force is reached and then let go completely: rocket nose cones, tamper seals, breakaway mounts, and printed weak links that protect an expensive servo or gearbox
- **when_not_to_use**: Not when overloads happen often, because every trip means stopping and fitting a new pin (use a friction slip clutch or a resettable ball-detent torque limiter). Not in a lifting or load-holding path where losing the drive would let a load fall or run back, unless that is safe. Not with vibrating or repeatedly reversing loads near the limit, which fatigue the pin so it breaks early. Not where an operator is likely to 'fix' repeated breaking by fitting a stronger bolt
- **environment_limits**: Fatigue from repeated loads lowers the breaking force, which is why pins are made fatigue-resistant (Wikipedia 'Shear pin'). Corrosion can weaken a pin or seize it in its hole; stainless (316) pins and marine grease are used on boats (JLM Marine). Printed PLA links soften above about 60 °C (Prusa) and creep under steady load. Nylon changes strength as it absorbs moisture, and plastics become more brittle in the cold ⚑ [uncertain] *(⚑ parts need confirming)*
- **safety_notes**: When the pin breaks the drive suddenly runs free: the motor races, and anything it was holding can drop or run back. Stop the engine or motor and remove the spark plug lead or unplug it before replacing a pin (JLM Marine; YouRepair). Never fit a stronger bolt in place of a shear pin: it removes the protection and can wreck the gearbox or bend the auger (YouRepair; JLM Marine). Pieces can fly when testing pins to failure, so wear eye protection ⚑ [uncertain]. Rocketry shear pins are part of a pyrotechnic system; follow rocketry safety rules *(⚑ parts need confirming)*
- **common_failures**: Breaks too early in normal running because of fatigue, corrosion, a notch or scratch, or worn oval holes (Wikipedia on fatigue; the worn-hole cause is ⚑ [uncertain]). Never breaks because a stronger bolt was fitted, so the gearbox or shaft is damaged instead (YouRepair; JLM Marine). Bends instead of snapping if the pin is too ductile, which can jam the hub (Wikipedia on brittleness). Printed pins vary with print settings and orientation (Birosz et al.). Avoid these by using the specified pin, keeping spares, greasing against corrosion, and testing printed links *(⚑ parts need confirming)*
- **related**: 
  - Friction slip clutch (slip coupling, slipper clutch): slips and keeps going, then resets by itself; nothing to replace, but less exact and gets hot if it slips for long
  - Ball-detent torque limiter: disconnects or clicks at a set torque and resets itself, so it suits frequent overloads, but it costs more and is bigger
  - Torque-limiting gear with flexing spring arms (compliant slip hub) and the RC servo saver: plastic springs that give or slip instead of breaking
  - Magnetic coupling: slips with no contact and resets automatically; lower torque
  - Tamper-evident breakaway bridge (frangible link): thin bridges that break the first time a cap is opened, to show it has been opened rather than to protect a machine
  - Breakaway clasp (e.g. a printed safety lanyard clasp that pulls apart at about 20 lb and clips back together): a reusable, snap-apart cousin

### Pictures, videos and models

- **links**: 
  - [Shear pin (Wikipedia)](https://en.wikipedia.org/wiki/Shear_pin): Plain explanation of shear pins as mechanical fuses and as 'hold until a set force' devices (snowblowers, propellers, aircraft fuse pins, fire extinguishers), with a photo of a sailor measuring a shear pin *(licence: text CC BY-SA 4.0 (reuse with credit); photo public domain)*
  - [US Navy photo: machinery repairman checks the outside diameter of a shear pin (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:US_Navy_110406-N-OY799-152_Machinery_Repairman_3rd_Class_Heather_Fogle,_from_Midlothian,_Texas,_checks_the_outside_diameter_of_a_shear_pin_in_the_m.jpg): Photo of a machined shear pin being measured with a micrometer in a ship's machine shop *(licence: public domain (US Navy work))*
  - [Shear pin, Unit 24, Gorge Powerhouse (Historic American Engineering Record photo, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:SHEAR_PIN,_UNIT_24_GORGE_POWERHOUSE._THE_WICKET_GATES_ON_THE_TURBINE_ARE_EACH_EQUIPPED_WITH_A_SHEAR_PIN_AND_OIL_PRESSURE_GAUGE._IF_A_GATE_JAMS,_THE_PIN_SMEARS_AND_THE_CHANGE_HAER_WASH,37-NEHA.V,1-B-18.tif): Photo of a shear pin on a hydro turbine's wicket-gate linkage; each gate has a shear pin so a jammed gate breaks its pin instead of the linkage *(licence: public domain (US National Park Service / HAER))*
  - [Safety clutch 1 (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/IUZAmjjQ7MA): CAD animation: a toggle-operated blade shears a soft pin so that clamping jaws open and release an excessive load *(licence: link only (YouTube, all rights reserved))*
  - [Safety clutch 2 (Nguyen Duc Thang, YouTube thang010146)](https://youtu.be/trfFKC7xnTw): CAD animation: two bars fixed together by a bolt; when the slider crashes the bolt breaks and the bars become a free pivot, protecting the other parts *(licence: link only (YouTube, all rights reserved))*
- **make_it_yourself**: 
  - [Servo saver for Tamiya Neo Fighter DT 03 Buggy (DT07, Printables model id 858648)](https://api.printables.com/graphql/): Printable one-piece PLA servo saver (100% infill) designed to break at marked points on impact, tested by the designer; a printed breakaway link protecting a servo (read through the Printables public API; the web page could not be opened here) *(licence: CC BY-NC)*
  - [Kitchenaid Pasta Roller shear pin replacement (Flex, Printables model id 1298480)](https://api.printables.com/graphql/): Repair model for a stand-mixer pasta-roller attachment, whose 6 mm brass shear pin breaks before the mixer does if the rollers jam; explains how the original pin works and a bolt-based repair (read through the Printables public API) *(licence: CC BY-NC-SA)*
  - [Small Nylon Shear Pins, 20 pack (Apogee Components)](https://www.apogeerockets.com/Building-Supplies/Misc-Hardware/Nylon-Shear-Pins-20-pack): Ready-made 2-56 x 1/4 in nylon screws used as shear pins, with step-by-step fitting instructions and the force to shear three pins; a cheap way to try shear pins *(licence: link only (product page))*
- **diagram_idea**: Side cut-away of a gear hub on a shaft joined by one cross pin with a narrowed neck at the shaft surface, animated so the drive turns normally, then the output hits a rock, the pin snaps at the neck, the shaft spins freely inside the stopped hub, and a new pin is tapped in.
- **sources**: 
  - https://en.wikipedia.org/wiki/Shear_pin
  - https://en.wikipedia.org/wiki/Torque_limiter
  - https://commons.wikimedia.org/wiki/File:US_Navy_110406-N-OY799-152_Machinery_Repairman_3rd_Class_Heather_Fogle,_from_Midlothian,_Texas,_checks_the_outside_diameter_of_a_shear_pin_in_the_m.jpg
  - https://commons.wikimedia.org/wiki/File:SHEAR_PIN,_UNIT_24_GORGE_POWERHOUSE._THE_WICKET_GATES_ON_THE_TURBINE_ARE_EACH_EQUIPPED_WITH_A_SHEAR_PIN_AND_OIL_PRESSURE_GAUGE._IF_A_GATE_JAMS,_THE_PIN_SMEARS_AND_THE_CHANGE_HAER_WASH,37-NEHA.V,1-B-18.tif
  - https://catalog.daltongear.com/viewitems/-overload-safety-devices-torque-limiters-couplings/dalton-roller-chain-shear-pin-coupling-rcspc-
  - https://jlmmarine.com/blogs/outboard-101/sheared-propeller-pin-how-to-replace-it-on-the-water
  - https://www.yourepair.com/730/how-to-replacing-snow-blower-shear-pin-blade-shaft-bolts.html
  - https://www.engineersedge.com/material_science/bolt_double_shear_calcs.htm
  - https://www.apogeerockets.com/Building-Supplies/Misc-Hardware/Nylon-Shear-Pins-20-pack
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC8747663/
  - https://help.prusa3d.com/article/pla_2062
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://youtu.be/IUZAmjjQ7MA
  - https://youtu.be/trfFKC7xnTw
  - https://youtu.be/YJbl6bSFY4U
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: shaft
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: breaks or lets go once
- **clicks**: not applicable
- **tools**: drill and tap, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: shaft to shaft, part onto a shaft
- **printable**: no ⚑ *needs confirming (best guess): set by Claude (R33) as the follow-up answer after the check gave this entry the answer before it*
- **shaft_alignment**: exactly in line
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, materials, processes, safety_notes

## 143 Magnetic coupling and magnetic gear

*torque limiting & slip.* Magnets on two parts pass turning force through a gap or a wall without touching, and simply slip if overloaded

### What it is

- **plain_name**: Two spinning parts fitted with magnets, where turning one makes the other turn too without touching, even through a sealed wall, and if the other side gets stuck the magnets just slip instead of breaking anything
- **term**: Magnetic coupling (magnetic drive coupling) and magnetic gear
- **aliases**: 
  - magnetic drive coupling
  - magnetic shaft coupling
  - magnetic disc coupling (face-to-face type)
  - co-axial (radial) magnetic coupling, canned or containment-shell coupling
  - synchronous magnetic coupling
  - mag-drive, magnetically coupled drive, sealless drive (pumps)
  - magnetic torque coupler
  - linear magnetic coupler (straight-line version)
  - eddy-current coupling or drag cup (asynchronous version that always slips a little)
  - magnetic gear, magnetic gearbox, magnetic transmission
  - coaxial magnetic gear, flux-modulated (flux-modulation) magnetic gear, 'vernier' magnetic gear
  - magnetic spur gear (magnets in place of teeth)
  - magnetic stirrer (the best-known example)
  - magnetic fidget gear (toy)
- **family**: torque limiting & slip
- **other_families**: clutches & couplings, gear trains, gearboxes & transmissions, seals & pass-throughs
- **one_liner**: Rings or discs of permanent magnets on a driving part and a driven part lock together magnetically across an air gap or a thin non-magnetic wall, so turning force passes without contact (at 1:1 in a coupling, or with a speed change in a magnetic gear) and the parts slip harmlessly past each other if the load gets too high.
- **complexity**: A few parts, or a small assembly: a driving hub and a driven hub, each carrying a ring of magnets with alternating north and south poles and each turning on its own shaft and bearings; optionally a steel backing plate behind the magnets, a thrust bearing to take the magnets' pull, and a thin wall between the halves (a boat hull, a tank or pump 'can' of stainless steel, plastic or glass). A coaxial magnetic gear adds a stationary ring of steel pole pieces (bars or screws) between an inner and an outer magnet ring
- **how_it_works**: Opposite poles attract, so each magnet on the driving hub pulls the nearest opposite pole on the driven hub; when the driver turns, the follower is dragged round and stays in step (synchronous), with the magnetic field reaching through air or any non-magnetic wall (Magnetic Technologies; K&J Magnetics). Under load the follower lags a few degrees behind, like a stiff spring; if the load needs more torque than the magnets can give, the poles slide past each other and the follower drops out of step and slips, protecting the motor, and a synchronous coupling usually has to be stopped and restarted to lock in again (K&J Magnetics; Michael Smith Engineers). A magnetic gear uses magnets instead of teeth: either two magnet wheels side by side like spur gears, or a coaxial design in which a ring of steel pole pieces between an inner rotor with few poles and an outer rotor with many poles 'modulates' the field so the rotors turn at different speeds (Wikipedia 'Magnetic gear'; Som et al.). A related 'eddy-current' coupling spins a magnet next to a copper or aluminium disc or cup; induced currents drag the disc along with a smooth, speed-dependent slip, as in an old car speedometer (Wikipedia 'Speedometer').

### Finder attributes

- **job**: 
  - slip or let go when overloaded: the magnets slip past each other when the torque limit is reached, with no parts to break or wear
  - seal it, or pass cables or fluid through: passes turning motion through a sealed, unbroken wall so no shaft seal is needed (pumps, boat hulls, sealed tanks)
  - change speed or turning force: magnetic gears give a speed ratio (e.g. 3:1, 4.25:1, 12:1) without contact
  - let it move (turn, slide or bend): as a flexible, contact-free shaft coupling that tolerates misalignment and isolates vibration
- **motion**: rotate: continuous rotation in either direction (linear versions slide instead)
- **degrees_of_freedom**: Between the two halves: effectively 0 while running in step (held at a fixed angle by a magnetic 'spring'), 1 (free relative rotation) once it slips; the halves are not mechanically joined at all, so each needs its own shaft and bearings
- **special_behaviour**: 
  - torque-limiting (slips or clicks at a set force/torque): slips when the load exceeds the magnetic pull-out torque, and nothing breaks (Wikipedia 'Magnetic coupling', 'Magnetic gear')
  - fail-safe or breakaway: an overload or jam disconnects the drive instead of damaging the motor or gears; note that a synchronous coupling usually stays slipping until the motor is stopped and restarted (Michael Smith Engineers)
  - self-aligning or self-centring: accepts more shaft misalignment than mechanical couplings (Wikipedia 'Magnetic coupling') and transmits less vibration (K&J Magnetics)
  - quick-release: face-to-face types simply pull apart with no fasteners (e.g. lifting a beaker off a magnetic stirrer) ⚑ [uncertain] *(⚑ parts need confirming)*
- **holding_principle**: magnetic: attraction between opposite poles (or eddy currents induced in a conductor) carries the torque; not a holding joint in the usual sense, since it passes motion on
- **input_output**: Continuous rotation -> continuous rotation. Coupling: 1:1, in step with no slip below the torque limit (synchronous). Magnetic gears: side-by-side 'spur' magnetic gears give small whole-number ratios (Wikipedia 'Magnetic coupling'); coaxial flux-modulated gears give ratio = number of steel pole pieces / pole pairs on the fast rotor when the outer rotor is held (e.g. 17 pieces and 4 pole pairs = 4.25:1, Som et al.), with ratios from 1.01:1 to 1000:1 reported (Wikipedia 'Magnetic coupling'); printed examples 3:1 (Forge, Printables) and 12:1 with reversal (William Fraser, via Hackaday). Efficiency: no rubbing apart from bearings, so high when running in step through air or plastic ⚑ [uncertain]; a metal wall adds eddy-current losses that rise with the square of speed and the square of the drive radius (Michael Smith Engineers); variable-ratio (field-coil) magnetic gears are below 75% (Wikipedia 'Magnetic gear'). Eddy-current couplings always slip a little, so the output runs slower than the input. Shaft arrangement: in line (face or coaxial types), parallel (spur-type magnetic gears), or at an angle (first-order gears) (Wikipedia 'Magnetic gear'). Back-drivable: yes *(⚑ parts need confirming)*
- **power**: passive (no power needed) with permanent magnets. Electromagnet versions exist (e.g. variable-ratio magnetic gears and powered stirrers): they transmit nothing when power is lost
- **removability**: tool-free quick release for face-to-face and stirrer types (the halves just lift apart); removable for shaft-mounted couplings (each hub comes off its shaft with the usual set screw or key)
- **reuse_cycles**: effectively unlimited: nothing touches, so only the bearings wear (Wikipedia 'Magnetic gear': 'wear is limited to bearings')
- **tools_needed**: To build: glue (superglue or epoxy) or a press fit to fix magnets in their pockets, bearings, and the usual screwdriver or hex keys for hubs; a paperclip or rod to push out a wrongly placed magnet (Forge, Printables). To separate: none
- **seal**: airtight or pressure: the big advantage is that the wall between driver and follower stays unbroken, so a pump or tank needs no rotating shaft seal and cannot leak along the shaft (Wikipedia 'Magnetic coupling'; Wikipedia 'Centrifugal pump', magnetically coupled pumps). The seal is made by the wall or 'can', not by the coupling itself
- **load**: Light for home-made ones, up to heavy in industry. K&J Magnetics estimate a boat coupling with six 5/16 in disc magnets at a 1/8 in gap slips at about 1.08 in-lb (about 0.12 N·m). One maker's co-axial couplings range from 1 in-lb (0.11 N·m) nominal (1.75 in-lb peak) to 2,000 in-lb (about 226 N·m) nominal (Magnetic Technologies). A research coaxial magnetic gear (4.25:1) measured 82.8 N·m peak output torque, 112 N·m per litre (Som et al.). Face-type couplings also pull the two halves together hard, so the bearings must take this axial force (Wikipedia 'Magnetic coupling'). Weak spot: torque is much lower than a toothed gear or rigid coupling of the same size, and it falls quickly as the gap widens (K&J Magnetics; povsky, Printables: 'generally only used for very low torque applications')
- **adjustable**: yes, at build time or with a screw: the slip torque rises with stronger or more magnets and a smaller gap, so changing the gap or the number of magnets changes it (K&J Magnetics removed magnets from their boat coupling to reduce drag). Not usually adjustable while running
- **play_and_precision**: No hard backlash, but 'springy backlash' (Wikipedia 'Magnetic gear'): the follower winds up a few degrees behind the driver in proportion to the load until it slips, so it is poor for exact positioning under changing loads. Tolerates more shaft misalignment than mechanical couplings (Wikipedia 'Magnetic coupling'); end float changes the gap and therefore the torque. Commercial co-axial couplings run with a radial air gap of up to about 7 mm (0.275 in) (Magnetic Technologies)
- **access_needed**: end of a tube or shaft: each half fits on the end of its own shaft. For a through-wall drive one half sits on each side of the wall, but nothing has to pass through the wall
- **materials**: Magnets: sintered neodymium-iron-boron (NdFeB) for strength (standard grades up to about 80 °C, special grades to 230 °C) or samarium-cobalt (SmCo) for heat (Wikipedia 'Neodymium magnet'; Michael Smith Engineers). Steel backing (back iron) behind the magnets strengthens the field (K&J Magnetics). Flux-modulator pole pieces must be magnetic steel: printed magnetic gears specify steel, 'NOT STAINLESS', set screws (povsky; Forge, Printables). Walls and 'cans' between the halves must be non-magnetic: plastics (polypropylene, PVDF, PTFE, PFA), fibreglass, glass or stainless steel/Hastelloy (metal walls add eddy-current losses) (Michael Smith Engineers; Magnetic Technologies). Hobby hubs: 3D-printed PLA, PETG or ABS (Forge's gearbox tested in ABS and PLA). Eddy-current couplings use a copper or aluminium disc or cup (Wikipedia 'Speedometer')
- **maker_difficulty**: moderate: prints easily and uses cheap off-the-shelf magnets and bearings, but you must get the magnet polarities right, glue brittle magnets in securely, carry the strong pull between the halves on bearings, and accept low torque; industrial through-wall couplings are bought

### Making it

- **processes**: 
  - 3D print (FDM): magnet carriers, hubs and gear rings with pockets for disc or block magnets
  - off-the-shelf part: neodymium magnets, magnetic stirrer bars and drives, magnetic-drive pumps, industrial co-axial magnetic couplings
  - CNC: metal hubs and thin non-magnetic walls or cans
  - laser cut: acrylic or plywood discs holding magnets ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: partly: the carriers and gear rings can be printed (even as a print-in-place assembly), but the magnets, and steel pole pieces for a magnetic gear, must be added, e.g. by pausing the print or pressing them in afterwards; a printed 0.2 N·m magnetic torque wrench prints in place and then has two magnets inserted (Printables 587851)
- **making_tips_3d_printing**: Arrange the magnets in a ring with poles alternating north and south facing the other half, which K&J Magnetics found gives the most strength, and match the same pattern on the other half. Check which way each magnet faces before gluing it in (the drybox coupling designer warns that mixing them up does happen), and add small holes behind the pockets so a misplaced magnet can be pushed out with a paperclip (Forge, 3:1 Magnetic Gearbox). Fix magnets with a press fit or superglue; BYU CMR's printed magnetic gears may need superglue depending on printer tolerance. Keep the gap as small as the wall allows, because torque falls fast with distance, and estimate slip torque before printing with the K&J method (pull force of one magnet pair at your gap x 0.44 x radius x number of magnets). A face-to-face coupling pulls the halves together: support it with a thrust bearing (Wikipedia) or use fewer magnets, as K&J did when too much attraction made their boat's propeller drag on the hull. A steel washer or plate behind the magnets boosts the field (K&J). For a coaxial magnetic gear, the pole pieces must be magnetic (plain steel, not stainless) and their number should equal the sum of the inner and outer pole pairs (Som et al.; povsky and Forge specify steel grub screws). Small magnet pockets need fine detail: povsky's mini gear needs a 0.25 mm or smaller nozzle and a brim; Forge used 3 walls, 13% infill and a 0.4 mm nozzle. For a smooth slip clutch, one maker runs magnets against an iron washer rather than against other magnets, because magnet-to-magnet gives a jerky, stepping slip (GRAVITY magnetic clutch, Printables) ⚑ [uncertain]. Keep it cool: PLA softens above about 60 °C (Prusa) and standard NdFeB magnets are rated to about 80 °C (Wikipedia), so keep motors and hot parts away. Magnets are brittle: don't file or drill them, and keep their plating intact or they corrode (drybox coupling, Printables; Wikipedia 'Neodymium magnet') *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Neodymium (NdFeB) disc, block and ring magnets (e.g. 6 x 3 mm or 5/16 in discs; nickel-plated), samarium-cobalt magnets for heat, magnetic stirrer bars (stir bars, 'fleas') and stirrer drive magnets, magnetic-drive (mag-drive, sealless) pumps, co-axial and face (disc) magnetic couplings, eddy-current and hysteresis clutches and brakes, deep-groove ball bearings (608, 6082RS, 5 x 10 x 4 mm), thrust bearings, steel (not stainless) grub screws or bars as pole pieces, steel washers or plates as back iron
- **rules_of_thumb**: 
  - Estimate slip torque: find the straight-line pull between one magnet pair at your gap (from a pull-force calculator), multiply by 0.44 to get the sideways (shear) force, then by the distance from the magnet centre to the axis, then by the number of magnets on one side; e.g. two 5/16 in x 1/4 in discs 1/8 in apart pull 1.03 lb, giving about 0.45 lb x 0.4 in x 6 magnets = about 1.08 in-lb (0.12 N·m). K&J say this is only a rough starting point: test it (K&J Magnetics, 'Magnetic Couplers Powering a Boat')
  - Coaxial (flux-modulated) magnetic gear: number of steel pole pieces = inner pole pairs + outer pole pairs, and with the outer rotor held, ratio = pole pieces / inner pole pairs, e.g. 4 inner pole pairs, 13 outer pole pairs and 17 pieces give 4.25:1 (Som, Li, Kadel, Wright, Modaresahmadi, Bird and Williams, 'Analysis and Testing of a Coaxial Magnetic Gearbox with Flux Concentration Halbach Rotors', OSTI 1505685)
  - Using the difference of the pole pair counts as the number of pole pieces instead makes the output turn the same way as the input (Wikipedia 'Magnetic gear': 20 and 14 magnets with 17 pieces give 10:7 reversed, with 3 pieces 10:7 same direction)
  - Side-by-side magnetic 'spur' gears always have ratios of small whole numbers (Wikipedia 'Magnetic coupling')
  - Losses in a metal wall between the halves rise with the square of speed and the square of the drive radius, so use a non-metallic wall where you can (Michael Smith Engineers, 'Magnetic Couplings')
  - If a synchronous coupling decouples, the load cannot be picked up again until the motor is stopped and restarted (Michael Smith Engineers); start stirrers slowly, since a stir bar jumps about if driven too fast (Wikipedia 'Magnetic stirrer')
  - Commercial co-axial couplings work across a radial gap of up to about 7 mm (0.275 in), with peak (slip) torque roughly 1.2-1.75 times the nominal rating in one maker's table (Magnetic Technologies, MTC range; ratio derived from their table)
  - Standard NdFeB grades are rated up to about 80 °C and high-temperature grades up to 230 °C; coercivity falls steeply above about 100 °C (Wikipedia 'Neodymium magnet')
  - A research coaxial magnetic gear measured 112 N·m per litre, 27% below its predicted torque because its air gap ended up larger than designed, showing how sensitive torque is to the gap (Som et al., OSTI 1505685)

### When to use it

- **everyday_examples**: 
  - A laboratory magnetic stirrer, where a spinning magnet under the table drives a plastic-coated stir bar inside the beaker (Wikipedia 'Magnetic stirrer')
  - Aquarium and garden-fountain pumps whose impeller is driven through the sealed pump body by a magnet on the motor (Wikipedia 'Magnetic coupling'; 'Centrifugal pump')
  - The needle of an old mechanical car speedometer, dragged round by a spinning magnet next to an aluminium cup (an eddy-current coupling) (Wikipedia 'Speedometer')
  - Magnetic gear fidget toys and desk spinners, where one magnet wheel turns another without touching (Printables magnetic gear models)
- **when_to_use**: When you need to turn something on the other side of a wall without drilling a hole or fitting a seal: a pump or stirrer in a sealed tank, a propeller through a boat or submarine hull, a mixer in a sealed container, a fan or roller inside a filament drybox. When you want a drive that slips harmlessly on overload or a jam and never needs a part replaced. When shafts are hard to line up exactly, or you want to stop vibration and noise passing from motor to load. For quiet, contact-free, wear-free drives in dirty, wet or vacuum environments, and for magnetic gear toys and demonstrations
- **when_not_to_use**: Not for high torque in a small space: toothed gears, belts or rigid couplings carry far more for their size (use a planetary gear set, belt or jaw coupling). Not for holding a load against gravity, since it can slip and let the load drop or run back (use a worm drive or a brake). Not where the output angle must be exact under changing loads, because it winds up like a spring (use a rigid coupling or gears). Not in hot places with standard NdFeB magnets or PLA parts, near compasses, magnetic cards or steel swarf, or where small magnets could reach young children. If you need a slip clutch that re-engages by itself at speed, a friction slip clutch or ball-detent torque limiter may suit better, because a synchronous magnetic coupling usually needs stopping to re-lock
- **environment_limits**: Heat: magnets weaken as they warm and can be permanently demagnetised above their rated temperature (Michael Smith Engineers); standard NdFeB grades are rated to about 80 °C, high-temperature grades to 230 °C, and samarium-cobalt higher (Wikipedia 'Neodymium magnet'). When a coupling with a metal wall slips out of step, eddy currents heat the wall (Michael Smith Engineers). Printed PLA carriers soften above about 60 °C (Prusa). Water: sintered NdFeB corrodes and can crumble unless plated or coated, so underwater couplings need coated or sealed magnets (Wikipedia 'Neodymium magnet'). Magnets pick up steel dust and swarf in the gap ⚑ [uncertain]. Vibration: the air gap isolates vibration rather than passing it on (K&J Magnetics; Wikipedia 'Magnetic coupling'). No creep or wear in the coupling itself; permanent magnets lose only a little strength over time at normal temperatures ⚑ [uncertain] *(⚑ parts need confirming)*
- **safety_notes**: Strong neodymium magnets can snap together and pinch or even break fingers, and can chip or shatter, throwing sharp fragments (wear eye protection); swallowed small magnets can pinch the intestines together and have killed children, so keep them away from young children and secure them well in toys (Wikipedia 'Neodymium magnet'). Strong fields can wipe magnetic cards and upset nearby sensors (Wikipedia 'Neodymium magnet'). Because the coupling slips on overload, a motor may keep spinning while the load stops; never rely on it to hold a raised load. Pumps: a decoupled drive can overheat a metal containment shell (Michael Smith Engineers)
- **common_failures**: Slips too easily because the gap is too big, the magnets are too small or too few, or the start-up acceleration is too high; and then stays slipping until the motor is stopped (K&J Magnetics; Michael Smith Engineers; Wikipedia 'Magnetic stirrer'). Too much pull between face-to-face halves, so bearings or the parts rub and the motor stalls (K&J Magnetics' boat demo). One or more magnets glued in the wrong way round, which weakens and roughens the drive (drybox coupling tip, Printables). Magnets pulling out of printed pockets or cracking (they are brittle). Pole pieces made of stainless steel in a magnetic gear, which doesn't work because most stainless is not magnetic enough (povsky: use steel, 'NOT STAINLESS'). Magnets weakened by heat or corroded by water (Michael Smith Engineers; Wikipedia 'Neodymium magnet'). Printed carriers softening near a hot motor
- **related**: 
  - Friction slip clutch (slip coupling, slipper clutch): also slips on overload, but by rubbing friction plates, which wear and heat up; it re-grips on its own as soon as the load drops
  - Ball-detent torque limiter: carries more torque for its size and resets itself at a precise torque, but has contacting, wearing parts and no sealed-wall option
  - Shear-pin coupling (breakaway link): breaks once at the limit and must be replaced; magnetic couplings just slip and recover
  - Eddy-current brake (magnetic brake): the same eddy-current effect used to slow something down instead of drive it
  - Magnet joint (embedded magnets, magnetic catch): uses magnets to hold parts together rather than to pass on turning
  - Planetary gear set (epicyclic gearing): the toothed relative of the coaxial magnetic gear, much stronger for its size but with contact, wear and backlash
  - Jaw coupling (spider coupling) and Oldham coupling: mechanical ways to join slightly misaligned shafts, with more torque but no gap and no slip
  - Slip ring and rotary union: another way to pass something (electricity or fluid) across a rotating joint
  - Series-elastic coupling: deliberately springy coupling for force control; a magnetic coupling is also springy until it slips
  - Torque-limiting gear with flexing spring arms (compliant slip hub): a printable one-piece slip hub with plastic springs instead of magnets

### Pictures, videos and models

- **links**: 
  - [Magnetic coupling (Wikipedia)](https://en.wikipedia.org/wiki/Magnetic_coupling): Plain explanation of magnetic couplings, face-to-face aquarium pump couplings, overload protection and uses, with a photo of a magnetic drive coupling *(licence: text CC BY-SA 4.0 (reuse with credit); photo File:Magnetic coupling.jpg by Benzhongo, CC BY-SA 4.0)*
  - [Magnetgetriebe (Wikimedia Commons, by Petitebiscotte)](https://commons.wikimedia.org/wiki/File:Magnetgetriebe.png): Cross-section diagram of a coaxial magnetic gear: inner and outer magnet rotors with the ring of ferromagnetic pole pieces between them *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Magnetic Couplers Powering a Boat (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/magnetic-coupling): Photos and diagrams of a 3D-printed toy boat whose motor drives the propeller through the hull with a six-magnet face coupling, plus a torque-estimate diagram *(licence: link only)*
  - [Magnetic gears : Axial drivetrain proof of concept (William Fraser, YouTube)](https://www.youtube.com/watch?v=m4qPSm_8P1E): Home-made coaxial magnetic gear with a wooden stator holding twelve bolts as pole pieces, giving a 12:1 reversed ratio and slipping under heavy load (described by Hackaday; title confirmed through YouTube oEmbed; not watched) *(licence: link only (YouTube, all rights reserved))*
  - [3D Printed Magnetic Gear (Andrew Lipovsky, YouTube)](https://www.youtube.com/watch?v=GbQCNUltI1g): Assembly and demonstration of a 3D-printed magnetic gear built from household magnets, bearings and screws (title and channel confirmed through YouTube oEmbed; not watched) *(licence: link only (YouTube, all rights reserved))*
- **make_it_yourself**: 
  - [Mini 3D Printed Magnetic Gear (povsky, Printables)](https://www.printables.com/model/42412-mini-3d-printed-magnetic-gear): Fully printed coaxial magnetic gear needing about 50 small 3 x 2 mm magnets, 12 steel (not stainless) set screws as pole pieces and 3 small bearings; prints without supports but needs a 0.25 mm or finer nozzle (read through the Printables public API; URL seen in search results) *(licence: CC BY)*
  - [3:1 Magnetic Gearbox (Forge, Printables)](https://www.printables.com/model/276863-31-magnetic-gearbox): 3:1 'vernier flux modulation' magnetic gearbox using 6 x 3 mm magnets (24 minimum, 64 for maximum torque), steel grub screws and two 608 bearings, with optional Halbach magnet layout; tested in ABS and PLA (read through the Printables public API; URL seen in search results) *(licence: CC BY-SA)*
  - [Magnetic Torque Wrench 0,2Nm (Print in place) (Matyáš Moudrý, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/587851-magnetic-torque-wrench-02nm-print-in-place): Print-in-place 0.2 N·m torque-limiting driver for 1/4 in hex bits in which two 20 x 6 x 2 mm magnets slip past each other at the set torque; a hands-on magnetic torque limiter *(licence: CC BY-SA)*
  - [Magnetic coupling system for rc subs/boats (ItsRaptor59802, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1691539-magnetic-coupling-system-for-rc-subsboats): Parametric (Onshape) through-hull magnetic coupling for RC boats and submarines, set up for 5 mm spherical magnets and a 3 mm shaft, resizable for other magnets *(licence: CC BY)*
- **diagram_idea**: Two discs face to face on either side of a glass wall, each with a ring of alternating red (N) and blue (S) magnets: the driver turns and the follower follows a few degrees behind; then a hand grabs the follower, it lags further, the poles jump past each other and it stutters to a stop while the driver keeps turning (inset: a coaxial magnetic gear with its ring of steel pole pieces).
- **sources**: 
  - https://en.wikipedia.org/wiki/Magnetic_coupling
  - https://en.wikipedia.org/wiki/Magnetic_gear
  - https://en.wikipedia.org/wiki/Centrifugal_pump
  - https://en.wikipedia.org/wiki/Magnetic_stirrer
  - https://en.wikipedia.org/wiki/Speedometer
  - https://en.wikipedia.org/wiki/Neodymium_magnet
  - https://commons.wikimedia.org/wiki/File:Magnetic_coupling.jpg
  - https://commons.wikimedia.org/wiki/File:Magnetgetriebe.png
  - https://commons.wikimedia.org/wiki/File:Magnetic_Stirrer.JPG
  - https://www.kjmagnetics.com/blog/magnetic-coupling
  - https://www.duramag.com/techtalk/magnetic-couplers/an-overview-of-magnetic-torque-and-linear-couplers/
  - https://magnetictech.com/magnetic-couplings-co-axial-type/
  - https://www.michael-smith-engineers.co.uk/resources/useful-info/magnetic-couplings
  - https://hackaday.com/2020/04/13/simple-demo-shows-the-potential-of-magnetic-gears/
  - https://www.osti.gov/servlets/purl/1505685
  - https://help.prusa3d.com/article/pla_2062
  - https://www.youtube.com/watch?v=m4qPSm_8P1E
  - https://www.youtube.com/watch?v=GbQCNUltI1g
  - https://www.youtube.com/watch?v=nZX33zNqwGQ
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/42412-mini-3d-printed-magnetic-gear
  - https://www.printables.com/model/276863-31-magnetic-gearbox

### Finder tags

- **connects**: shaft ⚑ *needs confirming (best guess): worked out from its name, but joining parts is not one of its two main jobs*
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: parallel, at an angle, in line
- **overload_response**: slips and keeps going
- **clicks**: not applicable
- **tools**: press or vice, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: tool-free quick release
- **power**: passive
- **printed_take_apart**: not applicable
- **threaded**: not applicable
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: not applicable
- **printable**: not applicable
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, wood, metal, glass or mirror

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, making_tips_3d_printing, processes, special_behaviour

## 144 Tolerance ring (wavy-band press fit)

*torque limiting & slip.* A wavy spring-steel band squeezed between a shaft and a hole that holds by friction, soaks up loose sizes and heat growth, and slips at a set torque

### What it is

- **plain_name**: A thin, springy steel band with a row of bumps, squeezed into the gap between a shaft and the hole it sits in, which grips both by friction so you don't need a perfectly sized hole, keeps gripping as things heat up, and lets the shaft slip if it is twisted too hard
- **term**: Tolerance ring (corrugated spring-steel frictional fastener)
- **aliases**: 
  - tolerance ring
  - corrugated ring, wavy band, wave ring ⚑ [uncertain] (note: 'wave ring' is also used for wave spring washers)
  - bearing tolerance ring, bearing shim (McMaster-Carr wording)
  - elastic shim
  - frictional fastener
  - AN / ANL ring or HV / HVL ring (waves facing inward, fitted into a housing bore: 'housing variable')
  - BN ring or SV ring (waves facing outward, fitted over a shaft: 'shaft variable')
  - tabbed, flanged, multiplex and crown rings (variants)
  - Rencol ring (Saint-Gobain brand)
  - Toleranzring (German) *(⚑ parts need confirming)*
- **family**: torque limiting & slip
- **other_families**: clamping, magnetic & friction connections, clutches & couplings, locating & alignment
- **one_liner**: A thin spring-steel strip with a row of waves, curled into a ring and pressed between a shaft and a bore, where every wave acts as a small stiff spring, so the joint holds by friction, copes with loose machining and different heat growth, centres the parts, and slips at a predictable torque instead of breaking.
- **complexity**: Single piece: one corrugated (wavy) strip of spring steel or stainless steel, cut to length and curled into an open ring. It works between two parts you already have: a shaft (or the outside of a bearing, gear hub or knob) and a bore (a housing, gear, pulley or hub), often with a shallow groove or shoulder to keep the ring in place
- **how_it_works**: The gap between the shaft and the bore is made smaller than the height of the waves, so pushing the parts together squashes every wave a little; each wave then acts like a stiff spring pressing outwards on the bore and inwards on the shaft (USA Tolerance Rings; Wikipedia 'Tolerance ring'). The total spring force times the friction between the metal surfaces resists twisting and sliding, so the joint carries torque, end loads and side loads without keys, set screws or glue. Because the waves are springs rather than a solid interference fit, the grip changes only a little if the hole is slightly large or small or grows with heat, and the waves centre the shaft in the hole. If the twisting force exceeds the friction, the parts slip past each other inside the ring and grip again when the overload passes, so the same ring can be designed as a cheap slip clutch (torque limiter) or as a joint that slides along at a set force (Saint-Gobain RENCOL brochure; Machine Design).

### Finder attributes

- **job**: 
  - join and hold: fixes bearings, gears, pulleys, fans and knobs onto shafts or into housings by friction
  - slip or let go when overloaded: slips at a set torque (or a set sliding force) to protect gears and motors, then keeps holding
  - line parts up exactly: the evenly compressed waves centre the shaft in the bore
- **motion**: none: a fixed joint in normal use; when overloaded the parts rotate or slide relative to each other (rotate, or slide in collapsible steering columns)
- **degrees_of_freedom**: 0 while holding; when the slip torque or slip force is exceeded, 1 (rotation, or sliding along the shaft) and up to 2 if both are exceeded
- **special_behaviour**: 
  - torque-limiting (slips or clicks at a set force/torque): 'The application slips at a predetermined torque level controlled by the design characteristics of the Tolerance Ring', acting as 'an inexpensive slip clutch' (Saint-Gobain RENCOL brochure); used this way in angle-grinder gear mounts, hedge trimmers and car seat-height adjusters (Machine Design)
  - self-aligning or self-centring: the waves press evenly all round, keeping about 0.0008 in (0.02 mm) concentricity for parts up to 2 in (50 mm) diameter (USA Tolerance Rings FAQ) and accepting up to 1/2° of misalignment (USA Tolerance Rings catalogue; McMaster-Carr)
  - fail-safe or breakaway: in a collapsible steering column the ring lets the shaft slide at a set force in a crash, and in a steering lock it lets the shaft turn inside the lock under heavy force instead of breaking it (Wikipedia 'Tolerance ring')
- **holding_principle**: 
  - friction or clamping (force-fit): the squashed waves press the parts together and friction carries the load
  - spring force (a spring or springy part presses it in place): each wave is a small radial spring, which keeps the grip as sizes change with tolerance and temperature
- **input_output**: Continuous rotation -> the same rotation, ratio 1:1, with zero backlash while holding (Saint-Gobain RENCOL appliance brochure: 'Zero backlash system as parts are physically connected through tolerance ring'); when the slip torque is exceeded the output stops or slips while the input keeps turning. Close to 100% efficient while holding (no sliding) ⚑ [uncertain]. Shaft arrangement: in line (a hub, gear or bearing on a shaft). Back-drivable: yes *(⚑ parts need confirming)*
- **power**: passive (no power needed)
- **removability**: removable: unlike glue or a heavy press fit it can be pressed apart for rework or repair (USA Tolerance Rings FAQ: 'allowing for future disassembly of components'; Saint-Gobain: 'Allows rework'), but it needs a press or puller, and a ring flattened or scratched by a crooked fit should be replaced ⚑ [uncertain] *(⚑ parts need confirming)*
- **reuse_cycles**: a few times: the joint can be taken apart and re-assembled (Saint-Gobain appliance brochure: 'Allows easy and repeatable disassembly and re assembly'); each overload slip and each re-assembly can wear or damage the waves and surfaces, so performance may drop (USA Tolerance Rings catalogue); how many times is not stated ⚑ [uncertain] *(⚑ parts need confirming)*
- **tools_needed**: An arbor press (or a vice or bench press for small rings) and a fixture to push the parts together squarely; hammering or aligning by hand risks crushing waves on one side (USA Tolerance Rings catalogue). Very light rings can be pushed in by hand. A lathe, reamer or accurate drill to make the bore and shaft, with a rounded or chamfered lead-in
- **seal**: none: the gaps between the waves leave open channels along the joint
- **load**: Medium to heavy for its size: e.g. a V-belt pulley on a 30 mm shaft held by one ring transfers at least 88 N·m (about a 4.3 kW motor at 1,400 rpm with a safety factor of 3) (Bosch Rexroth tolerance ring catalogue); rings range from 'strong enough for off-road equipment' to 'delicate enough to hold miniature ball bearings' (USA Tolerance Rings FAQ). Carries twist (torque), end pull (axial) and side (radial) loads together, but the highest torque and the highest radial capacity cannot both be had at once: torque is highest at the tightest fit, while radial capacity falls at the tightest fit (USA Tolerance Rings catalogue). Weak against shocks in the 'free' arrangement; a shoulder close to the mating part protects the ring (USA Tolerance Rings catalogue)
- **adjustable**: no: the slip torque is fixed by the ring design (material, thickness, wave pitch and height) and by the chosen shaft and bore sizes. Rings can be stacked side by side, separated by flanges, for more capacity (Euro-Bearings; Bosch Rexroth)
- **play_and_precision**: No backlash while holding (Saint-Gobain). Centres well: about 0.0008 in (0.02 mm) concentricity for parts up to 2 in diameter, depending on how accurately the shaft and bore themselves are made (USA Tolerance Rings FAQ). Tolerates up to 1/2° draft or misalignment (USA Tolerance Rings catalogue; McMaster-Carr) and much wider machining tolerances than a press fit. Under side load the shaft can move slightly on the springy waves unless a shoulder or stepped diameter limits it (centred arrangement); the free arrangement may sit slightly off-centre and loses about 20% of catalogue torque (Bosch Rexroth)
- **access_needed**: end of a tube or shaft: the ring and the mating part slide on from the end of the shaft or into the open end of the bore
- **materials**: Rings: hardened carbon spring steel (higher spring rate and load) or 301 stainless steel (better corrosion resistance and heat stability); 18-8 stainless for wet and outdoor use; Hastelloy C-276 and Monel K-500 for very hot or corrosive places (USA Tolerance Rings FAQ; McMaster-Carr; Euro-Bearings). Mating parts: steel or non-ferrous metal shafts and housings (catalogue ratings assume steel on steel or steel on many non-ferrous metals) (Bosch Rexroth); common in aluminium housings with steel bearings, silicon carbide sleeves and glass-filled plastic impellers (USA Tolerance Rings catalogue), and used to mount ball bearings in moulded plastic housings (Machine Design), though plastic housings bring creep and relaxation concerns (USA Tolerance Rings blog). Test any pairing that differs a lot from steel in strength (Bosch Rexroth)
- **maker_difficulty**: moderate: you buy the ring (e.g. from McMaster-Carr or a tolerance ring maker) rather than make it, and you need a bore and shaft of the right size with a lead-in chamfer and a way to press the parts together squarely; the slip torque varies with surfaces and must be tested

### Making it

- **processes**: 
  - off-the-shelf part: the ring itself (stamped and rolled spring or stainless steel strip)
  - CNC: lathe-turned or machined bores, shafts, grooves and lead-in chamfers
  - 3D print (FDM): a printed housing, hub or knob can take a steel ring, with care (plastic creeps)
  - woodwork, laser cut, sheet metal: not suitable (they can't hold a round bore to the needed size) ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the steel ring is a separate bought part pressed in after the housing or hub is made
- **making_tips_3d_printing**: The ring can't usefully be printed (its waves must be hard spring steel), but a steel ring can be fitted into a printed housing or hub: tolerance rings are used to mount ball bearings in moulded plastic housings, where they cope with size variation and heat growth (Machine Design), and the classic use is saving a hole that came out oversize (USA Tolerance Rings catalogue). Expect lower and less lasting grip than in metal, because plastic housings 'introduce creep and relaxation concerns' (USA Tolerance Rings blog) and catalogue torque values only apply to steel-on-steel or non-ferrous pairs up to 100 °C (Bosch Rexroth). Keep printed parts well below PLA's softening point of about 60 °C (Prusa), or use PETG, ABS, ASA or nylon. Make the bore to the ring maker's table for that ring (bore = shaft diameter + twice the wave height, minus the compression) and print it undersize then drill or ream it, since printed holes come out small and faceted ⚑ [uncertain]. Print the bore with its axis vertical so it is round ⚑ [uncertain]. Add a generous radius or a shallow 15-20° chamfer on the entry edge (USA Tolerance Rings; Bosch Rexroth) and ideally a groove with square walls to trap the ring (the 'centred' arrangement), which also lets a shoulder take shock loads instead of the waves. Press the parts together squarely in a vice or press rather than hammering. For a printable, all-plastic alternative, use crush ribs or flexing fingers designed into the print (see Related) *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Tolerance ring (AN/HV type for a housing bore, BN/SV type for a shaft, ANL/HVL light-duty for small bearings), bearing tolerance ring or bearing shim (sold by bearing size, e.g. R2 to 6316; McMaster-Carr), tabbed tolerance ring (resists walking out under vibration), flanged tolerance ring, multiplex and crown rings (Saint-Gobain RENCOL brochure); Bosch Rexroth series R0810 (AN), R0820 (BN), R0801 (ANL), R0804 (slanted-edge, for large bearings in light-metal housings); ball bearings, pulleys, fan hubs and knobs designed for tolerance-ring mounting
- **rules_of_thumb**: 
  - Slip torque estimate: T = 0.5 x d x (friction coefficient) x (total wave spring force), where the total force = wave compression x single-wave stiffness x number of waves; single-wave stiffness k ≈ c x E x w x (t/p)^3 with c about 3-7; steel on steel friction about 0.15; waves stay elastic up to roughly 10-18% compression. Use only as an order-of-magnitude guide (USA Tolerance Rings, 'Tech Information on Tolerance Rings')
  - Axial holding force ≈ 2 x catalogue torque / ring diameter, and assembly (pressing) force ≈ 7 x catalogue torque / ring diameter, as guide values (Bosch Rexroth tolerance ring catalogue R999000491, p. 13; the first matches USA Tolerance Rings' T = 0.5 x d x F)
  - Safety factor on catalogue torque: 2.5-3 for fixing pulleys, 6 for reversing motion; allow 20% less torque in the 'free' arrangement (plain bore and shaft, no groove) than in the 'centred' (grooved) arrangement (Bosch Rexroth catalogue, pp. 10-13)
  - Shaft tolerance up to ISO h9 and bore up to H9 (h11/H11 in exceptional cases), compared with a tolerance range of about 0.0005 in (0.013 mm) needed to mount a bearing without a ring; with a ring, a range of .002 in, and up to .006 in on large diameters, is acceptable (Bosch Rexroth, p. 12; USA Tolerance Rings catalogue)
  - Round the entry edge of the part that slides over the waves with a generous radius or a shallow chamfer: 15° (USA Tolerance Rings) or 20° if the recommended radii can't be made (Bosch Rexroth); sharp edges dig into the ring
  - Retaining groove: corner radius no more than 0.010 in for diameters under 2 in (0.020 in above), and groove width at least 3 x corner radius + ring width (USA Tolerance Rings catalogue)
  - Tolerates up to 1/2° of misalignment (draft angle) (USA Tolerance Rings catalogue; McMaster-Carr)
  - Heat: a 2 in ball bearing held in aluminium by a 0.0012 in interference fit needed 500 lb to press in and came loose at 170 °F; with a tolerance ring it needed 320 lb and still held 230 lb at 270 °F (USA Tolerance Rings catalogue). Similarly a 200 mm bearing's press-out force fell to zero at 80 °C without a ring but was still 2,000 N at 170 °C with one (Bosch Rexroth)
  - As an overload slip clutch it suits slow rotation, short slips and a broad break-away torque range; it is not a precise, continuous-slipping clutch (USA Tolerance Rings catalogue: it 'may replace shear pins' in such cases)
  - To carry more load, fit two or more rings side by side, separated by flanges or webs so they cannot slide over each other (Euro-Bearings; Bosch Rexroth)

### When to use it

- **everyday_examples**: 
  - Inside a computer hard disk drive, where a tolerance ring holds the pivot bearing of the arm that carries the read/write heads (USA Tolerance Rings catalogue; Wikipedia 'Tolerance ring')
  - A car's steering-column lock, which lets the steering shaft slip inside the lock if someone forces the wheel, instead of breaking (Wikipedia 'Tolerance ring'; USA Tolerance Rings catalogue)
  - The bevel gear inside an angle grinder and the blade drive of a hedge trimmer, which slip rather than break if the tool jams (Machine Design)
  - A car's powered tailgate motor and a fold-down armrest pivot, where the ring slips if you push against the motor or holds the armrest in place with a set feel (Wikipedia 'Tolerance ring')
- **when_to_use**: When you need to fix a bearing, gear, pulley, fan or knob to a shaft or into a housing without keys, set screws, splines or glue, and without machining to a very tight press-fit size. When the two parts are different materials that grow differently with heat (a steel bearing in an aluminium or plastic housing). When you want a compact, zero-backlash drive that slips at a set torque to protect a motor or gearbox from jams and shock loads, or a telescoping part that slides at a set force. To rescue a worn or oversize bore (open it up to fit a ring). When you may want to take the joint apart again later
- **when_not_to_use**: Not as a clutch that slips often or for long: continuous slipping wears the surfaces and changes the torque (use a friction slip clutch, a ball-detent torque limiter or a magnetic coupling). Not where the release torque must be exact (a ball-detent torque limiter is more precise). Not for very high torque on a small shaft where a key, spline or keyless locking bush would be stronger. Not in soft or thin-walled plastic parts that will creep and loosen (use a screw clamp hub, crush ribs designed for plastic, or glue). Not where you can't press the parts together squarely, or need a seal along the joint
- **environment_limits**: Heat: ratings differ between makers. Carbon-steel rings: about 120 °C continuous (Euro-Bearings), 250 °F / 121 °C (USA Tolerance Rings) or 200 °C continuous with brief peaks to 250 °C (Bosch Rexroth). Stainless (301) rings: 250 °C continuous, brief peaks to 300 °C (Bosch Rexroth; Euro-Bearings), or 450 °F / 232 °C (USA Tolerance Rings). Monel K-500 rings have been used to 600 °F (316 °C) and Hastelloy C-276 to 900 °F (482 °C) (USA Tolerance Rings FAQ). Catalogue torque values apply up to 100 °C (Bosch Rexroth). Corrosion: carbon steel rusts; stainless resists water and outdoor use (McMaster-Carr; USA Tolerance Rings FAQ). Vibration: rings can 'walk out' in high vibration, which tabbed rings prevent (Saint-Gobain RENCOL brochure); rings behave as springs and shift vibration frequencies rather than damping them, which can reduce or increase noise (USA Tolerance Rings FAQ), although Wikipedia and McMaster-Carr describe them as damping vibration. Creep: plastic housings creep and relax, lowering grip over time (USA Tolerance Rings blog)
- **safety_notes**: Thin stamped steel rings can have sharp edges; handle with gloves. Press parts together with a proper press and fixture rather than hammering. As a torque limiter it lets the drive slip, so a motor may keep turning while the load stops, and a slipping joint should not be relied on to hold a raised load. Its torque can drift with wear, heat and plastic creep, so don't use it as the only safety device where slipping too late or too early could hurt someone ⚑ [uncertain] *(⚑ parts need confirming)*
- **common_failures**: Waves crushed on one side because the parts were pushed together at an angle or hammered, or cut by a sharp entry edge, which lowers the grip (USA Tolerance Rings catalogue). Slips in normal use because the fit was on the loose side of the tolerances, a shock or start-up load was higher than expected, or a plastic housing crept (USA Tolerance Rings catalogue and blog). Performance drops after repeated overload slips (USA Tolerance Rings catalogue: 'degradation of performance may result'). Ring walks out of a plain bore under vibration (use a groove or a tabbed ring) (Saint-Gobain). Torque changes with heat because the parts grow apart or together (USA Tolerance Rings blog). Excessive pressing force or a cracked brittle part if the fit is too tight ⚑ [uncertain]. Avoid by designing for worst-case tolerances, using chamfers and grooves, pressing squarely and testing the slip torque *(⚑ parts need confirming)*
- **related**: 
  - Press fit (interference fit): solid metal-to-metal grip that needs much tighter machining, can crack brittle parts and loosens when parts grow differently with heat
  - Crush ribs and spring-fit features (compliant press fit): the printable plastic version of the same idea, with small ribs or flexing fingers moulded into the hole
  - Friction slip clutch (slip coupling, slipper clutch): an adjustable spring-loaded friction clutch built for repeated slipping; bigger but made to slip
  - Ball-detent torque limiter: releases at a more exact torque and resets itself, but costs more and takes more space
  - Shear-pin coupling (breakaway link): breaks once at the limit and must be replaced; a tolerance ring slips and carries on
  - Keyless locking bush (taper-lock bush, shaft locking device): clamps a hub on a shaft much harder with screws and tapered rings, and can be adjusted and released
  - Shaft-to-hub joints and rigid couplings (key, set screw, D-flat, clamp hub): the usual ways to fix a hub; they need keyways or flats and can have backlash
  - Friction hinge (torque hinge): uses a similar controlled friction to hold a lid or arm at any angle
  - Magnetic coupling: slips without contact or wear, but carries far less torque for its size
  - Torque-limiting gear with flexing spring arms (compliant slip hub): a one-piece printed plastic slip hub for light loads

### Pictures, videos and models

- **links**: 
  - [USA Tolerance Rings catalogue (Rev. 08-28-2013)](http://www.usatolerancerings.com/uploads/PDFs/USA%20Tolerance%20Rings_Catalogue_Rev.08-28-13_A.pdf): Drawings of AN, ANL and BN rings, the free, piloted and centred mounting arrangements, the hard-disk actuator-arm bearing mount, lead-in chamfer and groove details, a graph of torque and radial capacity against fit, and application photos *(licence: link only (manufacturer document))*
  - [Tech Information on Tolerance Rings (USA Tolerance Rings)](https://usatolerancerings.com/resources/tolerance-rings-101/): Photos and labelled drawings of ring parts and wave nomenclature, cross-sections of rings between shaft and bore, and the spring-and-friction formulas for holding force and slip torque *(licence: link only)*
  - [Tolerance Rings - Guide and Technical Information (Euro-Bearings Ltd)](https://www.euro-bearings.com/tol1.htm): Photos of AN (housing) and BN (shaft) tolerance rings with a plain-English FAQ on choosing, fitting and slipping *(licence: link only)*
  - [Bosch Rexroth Tolerance rings catalogue R999000491 (2004)](https://automation-control.meggroup.com.au/wp-content/uploads/sites/4/2023/11/Bosch-Rexroth-Tolerance-Rings-catalogue.pdf): Drawings of ring series, free and centred arrangements, a V-belt pulley and tandem-mounted rings, required radii and chamfers, and a graph of bearing retention against temperature with and without a ring *(licence: link only (manufacturer document))*
  - [An Introduction to Tolerance Rings Webinar (USA Tolerance Rings, YouTube)](https://www.youtube.com/watch?v=48arfVE4BzU): Manufacturer's introductory webinar on how tolerance rings work and where they are used (title and channel confirmed through YouTube oEmbed; not watched) *(licence: link only (YouTube, all rights reserved))*
- **make_it_yourself**: 
  - [Bearing Tolerance Rings (McMaster-Carr)](https://www.mcmaster.com/products/bearing-tolerance-rings/): Catalogue of stock 18-8 stainless bearing tolerance rings sized by bearing (R2 to 6316), so you can buy one and try it with a bearing in a printed or machined housing *(licence: link only (supplier page))*
  - [Tolerance ring design formulas (USA Tolerance Rings)](https://usatolerancerings.com/resources/tolerance-rings-101/): Formulas to estimate single-wave stiffness, radial force, axial retention, slip torque and radial capacity of a ring before you buy or test one (order-of-magnitude guide only) *(licence: link only)*
- **diagram_idea**: An end-on cut-away of a shaft inside a bore with a wavy ring between them: first the ring loose with its waves tall, then the shaft pushed in so every wave flattens a little with small arrows pushing outwards and inwards; finally a torque arrow on the shaft grows until the shaft spins inside the ring while the housing stays still, labelled 'slips at set torque'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Tolerance_ring
  - http://www.usatolerancerings.com/uploads/PDFs/USA%20Tolerance%20Rings_Catalogue_Rev.08-28-13_A.pdf
  - http://usatolerancerings.com/uploads/images/White%20Paper/US-Tolerance-Rings-FAQ-(MD)-1-25-18-v2.pdf
  - https://usatolerancerings.com/resources/tolerance-rings-101/
  - https://usatolerancerings.com/blog/how-to-specify-a-tolerance-ring/
  - https://www.euro-bearings.com/tol1.htm
  - https://automation-control.meggroup.com.au/wp-content/uploads/sites/4/2023/11/Bosch-Rexroth-Tolerance-Rings-catalogue.pdf
  - https://techniekgids.nl/wp-content/uploads/doc-Saint-Gobain-rencol-tolerancerings-brochure.pdf
  - https://theengineer.markallengroup.com/production/content/uploads/2012/03/Appliance-Rencol.pdf
  - https://www.machinedesign.com/archive/article/21818364/tolerance-rings-do-double-duty-as-shims-or-slip-clutches
  - https://www.mcmaster.com/products/bearing-tolerance-rings/
  - https://help.prusa3d.com/article/pla_2062
  - https://www.youtube.com/watch?v=48arfVE4BzU

### Finder tags

- **connects**: 3D-printed part, shaft
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: slips and keeps going
- **clicks**: not applicable
- **tools**: drill and tap, press or vice, power tools, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive
- **printed_take_apart**: yes
- **threaded**: no
- **sheet_material**: not applicable
- **carries_fluid**: not applicable
- **shaft_joint**: part onto a shaft
- **printable**: yes, no
- **shaft_alignment**: not applicable
- **cord_use**: not applicable
- **knot_use**: not applicable
- **cord_part**: not applicable
- **opens_by**: not applicable
- **locks_out**: not applicable
- **mounts_on**: not applicable
- **wall_hold**: not applicable
- **gripped_by**: not applicable
- **weld_material**: not applicable
- **wire_use**: not applicable
- **plugs_in**: not applicable
- **holds_position**: not applicable
- **drive_does**: not applicable
- **slide_kind**: not applicable
- **flex_does**: not applicable
- **move_kind**: not applicable
- **one_way_kind**: not applicable
- **clicks_do**: not applicable
- **holds_for**: not applicable
- **over_centre_use**: not applicable
- **slows_by**: not applicable
- **straight_drive**: not applicable
- **push_by**: not applicable
- **tightens**: not applicable
- **tension_hold**: not applicable
- **adjusts**: not applicable
- **spring_kind**: not applicable
- **seal_use**: not applicable
- **seal_material**: not applicable
- **hose_join**: not applicable
- **fluid_does**: not applicable
- **powered_does**: not applicable
- **also_under**: not applicable
- **turns**: not applicable
- **drive_split**: not applicable
- **made_of**: 3D prints, plastic sheet, tube or moulded parts, metal

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, common_failures, input_output, making_tips_3d_printing, processes, removability, reuse_cycles, safety_notes

