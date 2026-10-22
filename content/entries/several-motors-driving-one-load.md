---
title: Several motors driving one load
description: Several motors are joined to one output, through a shared gear, the same shaft, both ends of one axis or one
  rack, so they add their power, keep a long axis square, back each other up, or pull against each other to take out play.
num: 451
term: Multi-motor drive (dual-motor drive, ganged motors, load sharing; dual-drive gantry; electrical preload)
plain_name: Two or more motors working on the same job, either geared to one shared gear or shaft so their strength adds up,
  or one at each end of a long moving beam so it stays square, or set to pull slightly against each other so there is no wobble
aliases:
- dual-motor drive / twin-motor drive / two-motor gearbox / multi-motor gearbox (e.g. FRC '2-CIM' and three-motor gearboxes)
- ganged motors / motors in tandem / load sharing / torque summing
- dual-drive gantry / gantry driven at both ends / dual Y or dual X axis (MPCNC, LowRider CNC)
- dual Z / dual Z motors / dual lead screw Z axis with two steppers (3D printers)
- auto-squaring / dual endstops / Z stepper auto-alignment (Marlin G34) / z_tilt (Klipper)
- electrical preload / electronic preload / master-slave drive / dual pinion drive (two pinions on one rack; Motion Control
  Tips)
- torque bias / anti-backlash dual motor (industry terms for motors held against each other) [uncertain]
- redundant drive / either-input drive (with freewheels or one-way clutches)
- coax copter / coaxial twin motors (two motors on one axis, turning opposite ways)
family: gear trains, gearboxes & transmissions
other_families: [powered & active connectors]
finder:
  job: [change speed or turning force, line parts up exactly, stop it moving back]
  motion: rotate
  special_behaviour: [self-aligning or self-centring, one-way, tensioning]
  holding_principle: [powered hold, not a holding joint]
  reuse_cycles: many times
  seal: none
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut]
  connects: [not applicable]
  power_source: [electricity]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning, straight push or pull]
  shaft_layout: [parallel]
  overload_response: not applicable
  clicks: silent
  tools: [hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'yes'
  removability: removable
  power: powered
  printed_take_apart: [not applicable]
  threaded: [not applicable]
  sheet_material: [not applicable]
  carries_fluid: [not applicable]
  shaft_joint: [not applicable]
  printable: [not applicable]
  shaft_alignment: [not applicable]
  cord_use: [not applicable]
  knot_use: [not applicable]
  cord_part: [not applicable]
  opens_by: [not applicable]
  locks_out: [not applicable]
  mounts_on: [not applicable]
  wall_hold: [not applicable]
  gripped_by: [not applicable]
  weld_material: [not applicable]
  wire_use: [not applicable]
  plugs_in: [not applicable]
  holds_position: [not applicable]
  drive_does: [not applicable]
  slide_kind: [not applicable]
  flex_does: [not applicable]
  move_kind: [not applicable]
  one_way_kind: [not applicable]
  clicks_do: [not applicable]
  holds_for: [not applicable]
  over_centre_use: [not applicable]
  slows_by: [not applicable]
  straight_drive: [not applicable]
  push_by: [not applicable]
  tightens: [not applicable]
  tension_hold: [not applicable]
  adjusts: [not applicable]
  spring_kind: [not applicable]
  seal_use: [not applicable]
  seal_material: [not applicable]
  hose_join: [not applicable]
  fluid_does: [not applicable]
  powered_does: [move or push something]
  also_under: [not applicable]
  turns: [not applicable]
  drive_split: [combines inputs]
  made_of: [3D prints, 'plastic sheet, tube or moulded parts', wood, metal]
needs_confirming:
  power_loss:
    kind: best guess
    reason: '`power` mentions losing power, but none of the three outcomes'
confirmed: []
open_points:
- kind: content
  note: '*Several motors driving one load* (451): copies of the PLA softening point (about 60 °C) without a citation are [uncertain].'
uncertain_fields: [aliases, making_tips_3d_printing, environment_limits, common_failures]
diagram_idea: 'Three small panels: (1) two motor pinions meshing with one large gear, arrows showing both pushing the same
  way; (2) a CNC gantry seen from above with a motor and an endstop at each end, one end lagging and then both squared after
  homing; (3) two pinions on one rack, one pushing the load and the other gently holding back against the opposite tooth faces.'
links:
- url: https://docs.v1e.com/electronics/dual-endstops/
  title: 'V1 Engineering: Auto Square, Dual EndStops'
  shows: How the MPCNC and LowRider gantries, powered independently at each end, are auto-squared with an endstop per motor,
    with a video of the first auto-squaring test and the calibration steps
  license: CC BY-SA (V1 Engineering docs footer)
- url: https://www.motioncontroltips.com/zero-backlash-rack-pinion-drive-systems-from-atlanta-drive-systems/
  title: Zero-Backlash Rack & Pinion Drive Systems from ATLANTA Drive Systems (Motion Control Tips)
  shows: Explains split-pinion mechanical preload versus two-motor electrical preload on one rack
  license: link only
- url: https://marlinfw.org/docs/gcode/G034-zsaa.html
  title: 'Marlin G34: Z Steppers Auto-Alignment'
  shows: Firmware command that aligns multiple Z stepper motors by probing one point per stepper, with lock and unlock options
    for each motor
  license: MIT (Marlin documentation)
- url: https://www.eevblog.com/forum/3d-printing/ender-3-max-with-crealitys-dual-z-motor-upgrade-wont-home-consistently/msg3939151/
  title: 'EEVblog forum: Ender 3 Max with Creality''s dual Z motor upgrade won''t home consistently'
  shows: A real case of two parallel-wired Z steppers losing sync, with the start-up procedure and the belt and separate-driver
    alternatives
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/1324307-lsd-sovol-sv06-plus-dual-motor-y-axis-upgrade
  title: LSD Sovol SV06 Plus dual motor Y-axis upgrade by TreoWayne (URL from Printables API, page not opened)
  what_it_is: Printed mounts for adding a second Y stepper to one belt axis; the author reports the recommended acceleration
    from Klipper resonance testing rising from 3500 to 8800 mm/s^2 together with frame stiffening
  license: GPL-3.0
- url: https://www.printables.com/model/133406-lowrider-cnc-v2-x-and-dual-y-endstops-and-z-probe
  title: LowRider CNC V2 X and dual Y endstops and Z probe by Tailslide (URL from Printables API, page not opened)
  what_it_is: Printable endstop mounts so each of the LowRider's two Y motors homes to its own switch for auto-squaring
  license: CC BY
- url: https://www.printables.com/model/137273-ender-5-plus-dual-z-endstop
  title: Ender 5 Plus dual Z endstop by MakerIggs (URL from Printables API, page not opened)
  what_it_is: Printed brackets for a second Z endstop so two Z motors can be homed and levelled separately
  license: CC BY-NC-SA
- url: https://www.printables.com/model/564691-dual-motor-duplo-train
  title: Dual motor Duplo train by slayernine (URL from Printables API, page not opened)
  what_it_is: A printed toy locomotive driven by two TT gear motors for more pulling power on slopes
  license: CC BY-NC-SA
sources:
- https://www.chiefdelphi.com/t/designing-a-three-motor-gearbox/129620/17
- https://www.chiefdelphi.com/t/a-curious-situation/111035
- https://ocw.mit.edu/courses/6-270-autonomous-robot-design-competition-january-iap-2005/9958f49654a99c8565dc35abeeff278f_2_motormount.pdf
- https://www.motioncontroltips.com/zero-backlash-rack-pinion-drive-systems-from-atlanta-drive-systems/
- https://docs.v1e.com/electronics/dual-endstops/
- https://www.eevblog.com/forum/3d-printing/ender-3-max-with-crealitys-dual-z-motor-upgrade-wont-home-consistently/msg3939151/
- https://forum.whadda.com/t/k8200-dual-leadscrew-z-axis-upgrade/12184
- https://docs.duet3d.com/User_manual/Connecting_hardware/Motors_connecting
- https://marlinfw.org/docs/gcode/G034-zsaa.html
- https://www.klipper3d.org/Config_Reference.html
- https://arctic-shift.photon-reddit.com/api/comments/search?link_id=1bpuytx&limit=30
- https://en.wikipedia.org/wiki/Freewheel
- https://khkgears.us/media/izojpong/gear_guide1.pdf
- https://zimm.com/wiki/how-are-multiple-screw-jacks-mechanically-synchronised/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://api.printables.com/graphql/
research: research/connection-types/results/Several_motors_driving_one_load_dualmotor_drive_ganged_motors_dualmotor_gantry.json
image: null
pictures: []
glossary: [misalignment, backlash, self-locking, coaxial, freewheel, sprag, torque, gear-ratio, crank, preload, clearance,
  set-screw, repeatability--accuracy, counter-rotating]
---

Several motors are joined to one output, through a shared gear, the same shaft, both ends of one axis or one rack, so they add their power, keep a long axis square, back each other up, or pull against each other to take out play.

**In plain words:** Two or more motors working on the same job, either geared to one shared gear or shaft so their strength adds up, or one at each end of a long moving beam so it stays square, or set to pull slightly against each other so there is no wobble. **Proper term:** Multi-motor drive (dual-motor drive, ganged motors, load sharing; dual-drive gantry; electrical [preload](../glossary.md#preload)).

**Also called:** dual-motor drive / twin-motor drive / two-motor gearbox / multi-motor gearbox (e.g. FRC '2-CIM' and three-motor gearboxes); ganged motors / motors in tandem / load sharing / [torque](../glossary.md#torque) summing; dual-drive gantry / gantry driven at both ends / dual Y or dual X axis (MPCNC, LowRider CNC); dual Z / dual Z motors / dual lead screw Z axis with two steppers (3D printers); auto-squaring / dual endstops / Z stepper auto-alignment (Marlin G34) / z_tilt (Klipper); electrical preload / electronic preload / master-slave drive / dual pinion drive (two pinions on one rack; Motion Control Tips); torque bias / anti-backlash dual motor (industry terms for motors held against each other) ⚑ [uncertain]; redundant drive / either-input drive (with [freewheels](../glossary.md#freewheel) or one-way clutches); coax copter / [coaxial](../glossary.md#coaxial) twin motors (two motors on one axis, turning opposite ways).

## How it works

When two motors turn the same gear or shaft, each pushes on it and their turning forces add, so the output gets roughly the sum of their torque at a shared speed; for them to share fairly, each must be geared so that its speed-versus-torque curve lies on top of the other's (Chief Delphi). When the motors drive separate places on one rigid part, such as both ends of a CNC gantry or two lead screws under a printer bed, they must move exactly together, either by being wired to one driver or by having a driver each and firmware that homes each end to its own switch and squares the axis (V1 Engineering 'Dual endstops'; Marlin G34; Klipper z_tilt). In electrical preload, two motors drive pinions on the same rack, one moving the load and the other gently holding back against the opposite tooth faces so the gear play is always taken up (Motion Control Tips, ATLANTA zero-backlash rack and pinion). With a one-way clutch on each input, whichever input turns faster drives and the other is left behind, as in a helicopter whose rotor can keep turning when an engine stops (Wikipedia 'Freewheel').

## Parts

A small assembly: two or more motors (often identical) with pinions or pulleys, a shared gear, shaft, belt, rack or lead screws, a frame that holds every motor in the right place, and the electronics that make them agree: one driver with motors wired together, or a driver per motor plus firmware, encoders or endstops that keep them in step. Optional: one-way clutches (freewheels or [sprag](../glossary.md#sprag) clutches) so either input can drive without dragging the other, and a controller that sets a small opposing torque for electrical preload.

## Everyday examples

- 3D printers with two Z motors lifting the gantry or bed on two lead screws (EEVblog and Whadda threads; Marlin G34)
- Hobby CNC routers like the MPCNC and LowRider, with a motor at each end of the gantry (V1 Engineering)
- Competition robots with two or three motors in each drive gearbox (Chief Delphi)
- Twin-engine helicopters, where freewheels let the rotor keep turning if one engine stops (Wikipedia 'Freewheel')

## When to use it

Use several motors on one load when one motor is not strong enough and a bigger one is too costly, heavy or hard to fit (robot drive gearboxes, a toy train that must climb a slope, a printer axis that needs higher acceleration, like the dual-Y-motor Sovol mod on Printables); when a long gantry would twist if driven from one end, so a motor at each end drives it evenly (MPCNC, LowRider); when a bed or gantry on two or more lead screws should be levelled automatically by the printer (independent Z motors with Marlin G34 or Klipper z_tilt); when [backlash](../glossary.md#backlash) must be removed from a long rack-and-pinion axis (electrical preload); and when either a motor or a hand [crank](../glossary.md#crank), or either of two motors, should be able to drive the same output (freewheels or sprag clutches on each input).

## When not to use it

If the outputs only need to stay in step and one motor is strong enough, use one motor and a closed toothed belt, chain or shaft to link them (linked lead screws), which 'simply and absolutely' cannot lose sync (Whadda). If the two motors should make two different motions that are added together, use a differential instead. To remove backlash with one motor, use a split anti-backlash (scissor) gear or a spring-loaded split pinion. Don't put two motors on one rigid gear train if you can't be sure they turn the same way and at matched speeds; a single bigger motor is simpler. Don't use two independent steppers on one rigid axis without either a sync belt or an endstop per motor, because they can start several steps apart (EEVblog).

## Details

- **What it does (jobs):**
  - change speed or turning force: adds the torque and power of several motors at one output (two-motor robot gearboxes, dual Y motors on a printer)
  - line parts up exactly: two motors at the two ends of a gantry or bed, each homed to its own switch, square or level the axis automatically; two pinions preloaded against each other remove backlash
  - stop it moving back (one-way): one-way clutches on each input let either a motor or a hand crank drive without dragging the other
- **Movement:** rotate (motors into a shared gear or shaft) or slide (a gantry, bed or rack carriage moved by motors at two places); range as for the driven axis
- **Directions it can move (degrees of freedom):** 1 when the motors are geared rigidly to one output; 2 or more when each motor drives its own end of a gantry or its own lead screw, because then the ends can get out of step and the frame twists unless the electronics keep them together
- **Special behaviour:**
  - self-aligning or self-centring: with a driver and an endstop for each motor, the firmware homes each end separately and squares the gantry or levels the bed every time it homes (V1 Engineering auto-squaring; Marlin G34 'Align multiple Z stepper motors'; Klipper z_tilt)
  - one-way (moves freely one way, locks the other): freewheels or sprag clutches let either of two inputs drive the output without the idle one being dragged round (Wikipedia 'Freewheel')
  - tensioning (takes up slack and holds): in electrical preload the second motor keeps pressing its pinion against the opposite tooth faces of the rack, so the backlash is always taken up (Motion Control Tips)
- **How it holds:**
  - powered hold: the motors hold the output only while energised (stepper holding torque or servo control)
  - not a holding joint (it moves or passes on motion): gears, belts and racks pass the motors' torque to the load
- **Input and output:** Several rotary inputs -> one rotation (shared gear or shaft) or one straight-line motion (gantry, rack, lead screws). Torque adds; the output speed is set by the gearing and is the same for every motor that is rigidly geared to it. To share the load in proportion to each motor's power, choose ratios so their speed-torque curves superimpose (Chief Delphi, 'designing a three motor gearbox' #17). Efficiency is that of the gear, belt or screw stages used; each extra gearbox, shaft or bearing adds small losses and backlash (ZIMM screw-jack wiki). Shafts: parallel motor shafts into a spur gear, or motors at both ends of a gantry, on two lead screws, or two pinions on one rack. Back-drivable: depends on the drive (belts, spur gears and racks yes; lead screws often not); a motor driven backwards by the other acts as a brake or generator.
- **Power:** powered (needs electricity for every motor and driver). If power is lost: stepper and DC motors stop holding and the load can fall or coast unless the drive is [self-locking](../glossary.md#self-locking) or braked; if only one motor or one driver fails, the other may drag the axis out of square or drive into the stalled one. Auto-squaring setups re-square the axis at the next homing (V1 Engineering).
- **Load:** Light to heavy: small robots and toy trains use two hobby gear motors to climb slopes (Printables 'Dual motor Duplo train'); FRC robots gear two or three motors into one gearbox; CNC gantries and printers use two steppers on one axis; industrial gantries use dual pinion drives on one rack (Motion Control Tips). The shared gear, pinion or shaft must carry the summed torque, and the frame must resist the twist when the two motors do not agree. Weak against motors fighting each other: a reversed or out-of-step motor loads the gears and frame with both motors' full torque.
- **Play and precision:** Two independent motors can start up to four full steps apart at power-up and drift further if one stalls (EEVblog dual-Z thread), so the axis is only square or level if it is homed with an endstop per motor or tied by a belt. With auto-squaring, '[repeatability](../glossary.md#repeatability--accuracy) on the order of your endstops resolution, even after powering off' (V1 Engineering). Electrical preload removes rack-and-pinion backlash entirely and keeps positioning accurate when the direction changes (Motion Control Tips). [Misalignment](../glossary.md#misalignment) between motors driving one gear is taken up by the gear mesh; motors at each end of a gantry need the gantry and rails parallel.
- **Taking it apart:** removable: motors bolt to mounts and couple to shafts, pulleys or pinions with [set screws](../glossary.md#set-screw), clamp hubs or keys; plugs and cables come apart (power off first)
- **How often it can be reused:** many times
- **Sealing:** none (the motors may be sealed or not; the arrangement seals nothing)
- **Adjustable:** Yes: endstop offsets are trimmed per motor in firmware (M666 on V1 machines; G34/M422 in Marlin; z_positions in Klipper z_tilt) to square or level the axis; driver current is set per motor; [gear ratios](../glossary.md#gear-ratio) are chosen to balance load sharing; preload torque in electrically preloaded drives is set in the controller (Motion Control Tips).
- **Access needed:** not applicable: motors are mounted to a frame and coupled to shaft ends
- **Materials:** Steel or aluminium frames for CNC gantries and printers; printed PLA, PETG or nylon motor mounts and gear plates for light robots and printers; metal pinions and racks for heavy drives. Motors: brushed DC gear motors, steppers, servos. Suits rigid frames (metal, plywood, printed plastic) that will not twist when the motors disagree; poor in flexible card or foam structures.
- **Heat, cold, water and wear:** Motors and drivers heat up; a motor that is working against the other (out of sync, reversed or binding) draws more current and overheats ⚑ [uncertain] (general experience). Printed motor mounts near hot motors should not be PLA, which softens around 60 C ⚑ [uncertain] (not re-checked in this session). Vibration loosens pulley and pinion set screws, letting one motor slip on its shaft and drop out of step. Endstop offsets change when you move endstops, retension belts or change the spoil board, so re-check them (V1 Engineering).

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: gear motors, stepper motors, multi-motor gearboxes for robots, dual-Z upgrade kits for 3D printers, controller boards with spare stepper drivers, Y-splitter cables, endstop switches, sprag clutches and one-way bearings
  - 3D print (FDM): motor mounts, gear plates, endstop brackets, pulleys and printed gears for light robots and printers
  - CNC: aluminium gearbox plates and gantry end plates
  - laser cut: acrylic or plywood motor plates
- **Printing it in one piece (print in place):** no: motors, gears and frame are separate parts
- **Tools:** Hex keys and screwdrivers for motor mounts and pulleys; a multimeter to check stepper coil pairs (Duet3D shows a test by shorting wire pairs) and wiring; a computer to set firmware (Marlin, Klipper) for separate drivers and endstops; a square or tape measure for checking diagonals when calibrating auto-squaring (V1 Engineering)
- **Difficulty:** moderate: the mechanics are simple, but the motors must be wired to turn the right way, matched in gearing, and kept in step by wiring, a belt or firmware; electrical preload needs an industrial controller and is hard at home

### 3D printing tips

1) Mount both motors on one stiff printed plate or frame so their pinions keep the same mesh with the shared gear; any flex lets one motor's pinion jump teeth ⚑ [uncertain] (general practice). 2) Check every motor's direction on its own before joining them, and fix a reversed one in wiring or software before running under load (Chief Delphi 'A curious situation': one CIM motor turned out to be wired backwards internally, and a team reported a backwards motor 'ended up destroying a toughbox'). 3) Brushed motors often run a little faster one way than the other; mounting two motors so that one runs clockwise and the other anticlockwise evens out the gearbox speed in both directions (MIT 6.270 motor-mount handout). 4) For two steppers on one axis, use 1.2-2.0 A motors in series on one driver, or low-current motors (1.0 A or below) in parallel (Duet3D docs); better, give each motor its own driver and endstop so the firmware can square or level the axis (V1 Engineering; Marlin G34; Klipper z_tilt). 5) Before first power-up of a dual-lead-screw axis, level the gantry, line up and mark the couplings, power up with one coupling loose, jog 1 mm and back, then tighten it so the motors start in step (EEVblog dual-Z thread). 6) Make the first moves small (1 mm), because 'if driving your steppers the wrong way you can rip your machine apart' (V1 Engineering). 7) Print endstop brackets with slots so each switch can be set close to square, then trim the rest in firmware (V1 Engineering suggests moving blocks if the offset exceeds 2 mm). 8) Use 0.3 mm [clearance](../glossary.md#clearance) for printed parts that must move freely (Prusa knowledge base).

### Buying one (off-the-shelf parts)

Brushed DC gear motors (e.g. TT gear motors, CIM and 775-size motors), NEMA 17 and NEMA 23 stepper motors (long-shaft versions for pulleys), servo motors; two-motor or three-motor robot gearboxes (FRC 'ball shifter', 'toughbox' style) and dual-motor gearbox kits (e.g. Pololu (brand) dual motor gearbox); dual-Z upgrade kits (second stepper, lead screw, Y-splitter cable) and Z sync belt kits; controller boards with a spare stepper driver (5-driver boards for auto-squaring); endstop switches; GT2 timing belts and pulleys; racks with dual pinion drives and electronically preloaded master-slave drive systems (industrial); one-way bearings (roller clutches), sprag clutches and freewheels for motor-or-hand-crank drives.

## Rules of thumb

- To make motors share the load in proportion to their power, gear them so their speed-torque curves superimpose (Chief Delphi, 'designing a three motor gearbox' #17).
- Two steppers on one driver: for 1.2-2.0 A motors connect them in series; for motors rated 1.0 A or below connect them in parallel (Duet3D documentation, 'Connecting multiple motors on an axis').
- Two independently powered steppers can start up to four steps apart at power-up; 'Any overload, excessive acceleration or binding will cause loss of sync, resulting in a Z axis jam and excessive stress on the mechanism' (EEVblog dual-Z thread).
- One motor plus a closed belt cannot lose sync between screws: 'The belt version simply and absolutely prevents this' (Whadda forum K8200 dual leadscrew thread).
- Auto-squaring needs independently wired steppers (a 5-driver board on V1 machines) and an endstop per motor; trim offsets with M666 and check squareness by measuring the diagonals of a large rectangle (V1 Engineering 'Dual endstops').
- Marlin G34 aligns multiple Z stepper motors by probing one point per stepper; Klipper's z_tilt adjusts multiple independent Z steppers to correct tilt, and an extra stepper_z1 with its own endstop homes to that endstop (Marlin docs; Klipper Config Reference).
- Electrical preload: two motor and reducer assemblies drive two pinions on the same rack, one driving and one preloaded against the opposite tooth flanks; the mechanical one-motor version is a split, spring-loaded pinion (Motion Control Tips, ATLANTA).
- Planetary gearboxes use two or more planets 'to balance the load evenly', and load division between them is one of their design problems (KHK Gear Technical Reference §17.1): load sharing between parallel paths is never automatic.
- Flip a stepper's direction only with the power completely off (V1 Engineering).

## Common failures

1) Bed or gantry not level or square after each power-up, because two motors on one driver started in different step positions: tie them with a belt, or use a driver and endstop per motor with auto-squaring (EEVblog; V1 Engineering). 2) One motor wired or programmed backwards so the motors fight: test each alone first and invert in wiring or software (Chief Delphi 'A curious situation'). 3) One motor does most of the work because the ratios or motors don't match: gear them so their speed-torque curves superimpose (Chief Delphi #17). 4) Skipped steps or loss of sync from overload, high acceleration or binding (EEVblog). 5) Where a sync belt is added as well, a belt that is too tight or misaligned can jam the axis instead ⚑ [uncertain] (maker reports, not checked on a page opened for this entry). 6) Endstop offsets drift after mechanical changes (V1 Engineering). 7) Too little current for two steppers on one driver: choose series or parallel wiring to suit the motor current, and raise the driver current if needed (Duet3D; EEVblog). 8) In two-motor gearboxes, uneven speed in the two directions from motors that favour one direction: mount them facing opposite ways (MIT 6.270 handout).

## Safety

Motors fighting each other or out of step can twist a frame, snap a shaft, strip gears or tear a machine apart: V1 Engineering warns that 'if driving your steppers the wrong way you can rip your machine apart' and to 'completely power off your board before flipping the plug over'; a team reported that a motor wired backwards 'ended up destroying a toughbox' (Chief Delphi). Never unplug or swap a stepper or motor plug with the power on. Test new wiring with small moves and a hand on the power switch. Two motors make more force than one, so pinch points at gears, belts and gantries are more dangerous; keep hands clear and guard them. If power fails, a vertical axis can drop unless it is self-locking or braked. A Z axis that loses sync can jam and put 'excessive stress on the mechanism' (EEVblog). Mains-powered supplies and motor drivers must be wired to local law.

## Related

- Linked lead screws (Z sync belt): one motor keeps several screws in step mechanically instead of several motors
- Differential: adds two motors' motions so they can make two different outputs (e.g. a robot wrist)
- Anti-backlash gear (split scissor gear): the one-motor, spring-loaded way to remove the play that electrical preload removes with two motors
- Sprag clutch and roller clutch (one-way bearing): let either of two inputs (motor or hand crank) drive without dragging the other
- Planetary gear set: several planets share one load inside one gearbox
- Spur gear pair and gear train: the usual way two motor pinions meet one shared gear
- Rack and pinion: two pinions on one rack for a dual-drive gantry or electrical preload
- Whippletree: shares one pull between several points mechanically, the passive cousin of load sharing
- Bevel splitter and [counter-rotating](../glossary.md#counter-rotating) drive: the one-motor alternative to two motors on coaxial rotors
- Line shaft and power take-off: the reverse case, one motor driving many outputs

## Make it yourself

- [LSD Sovol SV06 Plus dual motor Y-axis upgrade by TreoWayne (URL from Printables API, page not opened)](https://www.printables.com/model/1324307-lsd-sovol-sv06-plus-dual-motor-y-axis-upgrade): Printed mounts for adding a second Y stepper to one belt axis; the author reports the recommended acceleration from Klipper resonance testing rising from 3500 to 8800 mm/s^2 together with frame stiffening *(licence: GPL-3.0)*
- [LowRider CNC V2 X and dual Y endstops and Z probe by Tailslide (URL from Printables API, page not opened)](https://www.printables.com/model/133406-lowrider-cnc-v2-x-and-dual-y-endstops-and-z-probe): Printable endstop mounts so each of the LowRider's two Y motors homes to its own switch for auto-squaring *(licence: CC BY)*
- [Ender 5 Plus dual Z endstop by MakerIggs (URL from Printables API, page not opened)](https://www.printables.com/model/137273-ender-5-plus-dual-z-endstop): Printed brackets for a second Z endstop so two Z motors can be homed and levelled separately *(licence: CC BY-NC-SA)*
- [Dual motor Duplo train by slayernine (URL from Printables API, page not opened)](https://www.printables.com/model/564691-dual-motor-duplo-train): A printed toy locomotive driven by two TT gear motors for more pulling power on slopes *(licence: CC BY-NC-SA)*

## Pictures, videos and models

- [V1 Engineering: Auto Square, Dual EndStops](https://docs.v1e.com/electronics/dual-endstops/): How the MPCNC and LowRider gantries, powered independently at each end, are auto-squared with an endstop per motor, with a video of the first auto-squaring test and the calibration steps *(licence: CC BY-SA (V1 Engineering docs footer))*
- [Zero-Backlash Rack & Pinion Drive Systems from ATLANTA Drive Systems (Motion Control Tips)](https://www.motioncontroltips.com/zero-backlash-rack-pinion-drive-systems-from-atlanta-drive-systems/): Explains split-pinion mechanical preload versus two-motor electrical preload on one rack *(licence: link only)*
- [Marlin G34: Z Steppers Auto-Alignment](https://marlinfw.org/docs/gcode/G034-zsaa.html): Firmware command that aligns multiple Z stepper motors by probing one point per stepper, with lock and unlock options for each motor *(licence: MIT (Marlin documentation))*
- [EEVblog forum: Ender 3 Max with Creality's dual Z motor upgrade won't home consistently](https://www.eevblog.com/forum/3d-printing/ender-3-max-with-crealitys-dual-z-motor-upgrade-wont-home-consistently/msg3939151/): A real case of two parallel-wired Z steppers losing sync, with the start-up procedure and the belt and separate-driver alternatives *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 5 sentences on this page marked [uncertain].
- ⚑ Finder value `power_loss` = not applicable (best guess): `power` mentions losing power, but none of the three outcomes
- ⚑ Research note: *Several motors driving one load* (451): copies of the PLA softening point (about 60 °C) without a citation are [uncertain].

## Sources

- <https://www.chiefdelphi.com/t/designing-a-three-motor-gearbox/129620/17>
- <https://www.chiefdelphi.com/t/a-curious-situation/111035>
- <https://ocw.mit.edu/courses/6-270-autonomous-robot-design-competition-january-iap-2005/9958f49654a99c8565dc35abeeff278f_2_motormount.pdf>
- <https://www.motioncontroltips.com/zero-backlash-rack-pinion-drive-systems-from-atlanta-drive-systems/>
- <https://docs.v1e.com/electronics/dual-endstops/>
- <https://www.eevblog.com/forum/3d-printing/ender-3-max-with-crealitys-dual-z-motor-upgrade-wont-home-consistently/msg3939151/>
- <https://forum.whadda.com/t/k8200-dual-leadscrew-z-axis-upgrade/12184>
- <https://docs.duet3d.com/User_manual/Connecting_hardware/Motors_connecting>
- <https://marlinfw.org/docs/gcode/G034-zsaa.html>
- <https://www.klipper3d.org/Config_Reference.html>
- <https://arctic-shift.photon-reddit.com/api/comments/search?link_id=1bpuytx&limit=30>
- <https://en.wikipedia.org/wiki/Freewheel>
- <https://khkgears.us/media/izojpong/gear_guide1.pdf>
- <https://zimm.com/wiki/how-are-multiple-screw-jacks-mechanically-synchronised/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://api.printables.com/graphql/>
