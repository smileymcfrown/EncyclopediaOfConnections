---
title: Electromagnetic brake
description: Springs press a friction disc on the motor shaft between two plates so the shaft cannot turn, and while the machine
  runs an electric coil pulls the plate back against the springs, so the brake lets go only when powered and grabs automatically
  whenever power is cut.
num: 108
term: Spring-applied electromagnetic brake (power-off brake, electromagnetically released spring-set brake)
plain_name: A brake fitted to a motor that springs shut by itself whenever the power goes off, and is pulled open by an electromagnet
  while the machine is running, so an arm or lift cannot drop
aliases:
- power-off brake / fail-safe brake
- spring-set brake / spring-applied brake / spring-actuated brake
- holding brake / servo motor brake / motor brake
- safety brake (mayr term for its spring-applied brakes)
- non-excited brake / de-energised brake (catalogue terms, e.g. OYOSTEPPER 'Non-excited brake')
- electromagnetically released brake
- stepper motor with brake / brake motor
- solenoid brake (Wikipedia; older name for a spring-engaged, solenoid-released brake)
- Z brake / Z-motor brake (3D-printer community)
- 'ROBA-stop (brand, mayr); variants: permanent-magnet brake, tooth brake'
family: powered & active connectors
other_families: ['brakes, dampers & speed control', self-locking & anti-back-drive]
finder:
  job:
  - hold or release using power
  - slow it, stop it or keep its speed steady
  motion: rotate
  special_behaviour: [fail-safe or breakaway, self-locking, torque-limiting]
  holding_principle: [friction or clamping, spring force, magnetic, shape]
  reuse_cycles: many times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: 'no'
  maker_difficulty: moderate
  processes: [off-the-shelf part, CNC, 3D print (FDM)]
  connects: [not applicable]
  power_source: [electricity]
  power_loss: stays locked
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: slips and keeps going
  clicks: not applicable
  tools: [hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: partly
  removability: removable
  power: powered
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [input_output, making_tips_3d_printing, safety_notes, when_not_to_use, related, off_the_shelf_parts]
diagram_idea: 'Two-frame cutaway of a brake on a motor shaft: frame 1 (power off) shows springs pushing the armature plate
  against the friction disc, which is squeezed against the mounting plate, with a padlock icon on the shaft and a hanging
  load that stays put; frame 2 (power on) shows the coil glowing and pulling the armature back across a labelled 0.2 mm gap,
  springs compressed and the disc spinning free.'
links:
- url: https://commons.wikimedia.org/wiki/File:O-2_electromagnetic-power-off-brake1.gif
  title: O-2 electromagnetic-power-off-brake1.gif (Wikimedia Commons), by Oguraclutch
  shows: Animated diagram of an electromagnetic power-off brake, used in Wikipedia's 'Electromagnetic brake' article
  license: Public domain (released by the copyright holder)
- url: https://www.youtube.com/watch?v=jiJW1bAHvqA
  title: Spring Applied Brakes - How they work (oguraindustrial)
  shows: Animation of the springs, armature and friction disc engaging and releasing (title checked with YouTube oEmbed)
  license: YouTube standard licence; link only
- url: https://www.youtube.com/watch?v=qtQoADEeI6Q
  title: Kendrion Tutorial - What is a spring applied brake? (KendrionVideo)
  shows: Manufacturer tutorial explaining the spring-applied brake principle (title checked with YouTube oEmbed)
  license: YouTube standard licence; link only
- url: https://www.youtube.com/watch?v=GMhGR4yeT_0
  title: Servo Motor Brake - Spring-set type (KEB America)
  shows: A spring-set holding brake of the kind fitted to servo motors (title checked with YouTube oEmbed)
  license: YouTube standard licence; link only
- url: https://en.wikipedia.org/wiki/Electromagnetic_brake
  title: Electromagnetic brake (Wikipedia)
  shows: Article covering power-off spring-applied and permanent-magnet brakes, with diagrams
  license: CC BY-SA 4.0
make_it_yourself:
- url: https://docs.duet3d.com/Duet3D_hardware/Duet_3_family/Duet_3_Expansion_1HCL
  title: Duet 3 Expansion 1HCL documentation (Duet3D)
  what_it_is: 'Wiring and firmware notes for driving a 24 V motor brake from a 3D-printer or CNC controller: a dedicated brake
    output with fast release, PWM voltage control and the M569.7 command that releases the brake when the motor is enabled'
  license: documentation; link only
- url: https://www.printables.com/model/1219484-z-brake-board-model
  title: Z-brake board model, by plainman98 (URL from Printables API, page not opened)
  what_it_is: Outline model for mounting a home-made circuit that slows a falling 3D-printer bed after power loss, an electronic
    alternative to a spring-applied brake (read through the Printables API)
  license: Creative Commons Public Domain
sources:
- https://en.wikipedia.org/wiki/Electromagnetic_brake
- https://en.wikipedia.org/wiki/Solenoid_brake
- https://en.wikipedia.org/wiki/Elevator
- https://www.motioncontroltips.com/what-are-electromagnetic-power-off-brakes-and-where-are-they-used/
- https://www.techbriefs.com/component/content/article/25417-an-inside-look-at-electromechanical-power-off-braking-options
- https://www.electric-brake.com/
- https://www.mayr.com/en/products/more-products/product-glossary/brakes/spring-applied-brakes
- https://www.kendrion.com/en/products-services/industrial-brakes/spring-applied-brakes/servo-line
- https://kendrion.com/en/products/solenoids-actuators/locking-solenoids-door-lock-systems/electromechanic-pin-brake
- https://sepac.com/electromagnetic-brakes/spring-applied-brakes/
- https://www.kebamerica.com/blog/spring-set-brakes-how-it-works/
- https://teknic.com/products/spring-applied-power-off-brakes/
- https://www.oyostepper.com/goods-392-DC-Electromagnetic-Brake-24V-025Nm-354ozin-for-Nema-17-Stepper-Motor.html
- https://docs.rs-online.com/af5b/0900766b804c5ed7.pdf
- https://www.industrialbrakesguide.com/brake-switching
- https://www.machinedesign.com/news/article/21829695/suppression-circuits-for-clutches-and-brakes
- https://www.a-m-c.com/mechanical-servo-motors-failures-and-faults/
- https://docs.duet3d.com/Duet3D_hardware/Duet_3_family/Duet_3_Expansion_1HCL
- https://www.universal-robots.com/manuals/EN/HTML/SW5_20/Content/prod-serv-man/E-series/serv-man-title-no-drive-pwr.htm
- https://www.mobilityscootersdirect.com/blog/diy/how-to-test-a-mobility-scooter-or-power-wheelchair-brake-system-with-a-multimeter/
- https://www.quantumrehab.com/resources/consumer-article-can-you-push-an-electric-wheelchair.asp
- https://help.prusa3d.com/article/pla_2062
- https://commons.wikimedia.org/wiki/File:O-2_electromagnetic-power-off-brake1.gif
- https://www.youtube.com/watch?v=jiJW1bAHvqA (verified via YouTube oEmbed)
- https://www.youtube.com/watch?v=qtQoADEeI6Q (verified via YouTube oEmbed)
- https://www.youtube.com/watch?v=GMhGR4yeT_0 (verified via YouTube oEmbed)
- https://www.youtube.com/watch?v=-39GtYVHS6M (verified via YouTube oEmbed; 'STOP THE DROP! - Project R3D Zmotor Brake Board')
- https://www.printables.com/model/1219484-z-brake-board-model (URL from Printables API, page not opened; read via https://api.printables.com/graphql/)
- https://api.printables.com/graphql/
research: research/connection-types/results/Electromagnetic_brake_poweroff_springapplied.json
glossary: [misalignment, backlash, self-locking, ratchet, freewheel, torque, gear-ratio, solenoid, fail-safe--fail-secure,
  clearance, form-fit--force-fit--material-bond, holding-force, heat-set-insert]
---

Springs press a friction disc on the motor shaft between two plates so the shaft cannot turn, and while the machine runs an electric coil pulls the plate back against the springs, so the brake lets go only when powered and grabs automatically whenever power is cut.

**In plain words:** A brake fitted to a motor that springs shut by itself whenever the power goes off, and is pulled open by an electromagnet while the machine is running, so an arm or lift cannot drop. **Proper term:** Spring-applied electromagnetic brake (power-off brake, electromagnetically released spring-set brake).

**Also called:** power-off brake / [fail-safe](../glossary.md#fail-safe--fail-secure) brake; spring-set brake / spring-applied brake / spring-actuated brake; holding brake / servo motor brake / motor brake; safety brake (mayr term for its spring-applied brakes); non-excited brake / de-energised brake (catalogue terms, e.g. OYOSTEPPER 'Non-excited brake'); electromagnetically released brake; stepper motor with brake / brake motor; [solenoid](../glossary.md#solenoid) brake (Wikipedia; older name for a spring-engaged, solenoid-released brake); Z brake / Z-motor brake (3D-printer community); ROBA-stop (brand, mayr); variants: permanent-magnet brake, tooth brake.

## How it works

With no power, the compression springs push the armature plate against the friction disc and trap it against the mounting plate; the disc is keyed to the shaft through a splined hub, so the shaft is held (Wikipedia, Electromagnetic brake; INTORQ BFK458). Applying DC voltage to the coil makes a magnetic field that pulls the armature across a small air gap (0.2-0.5 mm on INTORQ BFK458 brakes), squeezing the springs and freeing the disc, so the shaft can turn. Cut the power, deliberately or by accident, and the springs clamp again within tens of milliseconds, holding the load. A permanent-magnet version uses magnets instead of springs, and its coil releases the brake by cancelling the magnets' field (Wikipedia; Motion Control Tips); tooth brakes lock with teeth instead of friction (SEPAC).

## Parts

A small assembly that acts as one unit: a coil housing (field or stator) with the electromagnet coil, an armature plate, several compression springs, a friction disc (rotor) with lining, a splined or toothed hub fixed to the shaft, a mounting or friction plate, air-gap adjustment tubes and assembly bolts, and on some models a hand-release lever and a [torque](../glossary.md#torque) adjuster nut (INTORQ BFK458 parts list); plus a DC supply or rectifier and a switch.

## Everyday examples

- Lifts (elevators): the machine brake 'is actuated by spring force and held open electrically; a power failure will cause the brake to engage and prevent the elevator from falling' (Wikipedia, Elevator)
- Power wheelchairs and mobility scooters: 'When power is removed, the brake engages and locks the drivetrain', and a [freewheel](../glossary.md#freewheel) lever releases it by hand for pushing (Mobility Scooters Direct; Quantum Rehab)
- Robot arms and cobots, whose joints hold their pose when switched off (Universal Robots manual; mayr ROBA servostop Cobot)
- Vertical axes on CNC machines and 3D printers, which 'will fall due to gravity if bus power is removed' without a brake (Teknic)

## When to use it

Use it when a motor-driven axis must hold its position if power is switched off or fails: robot arm shoulders and elbows, lifting and Z axes on 3D printers and CNC machines, hoists, winches, lifts, turntables that must not drift, and vehicles that must not roll when parked. Choose it when the motor or gearbox can be back-driven (steppers, BLDC motors, efficient gearboxes) and a dropping load could cause damage or injury.

## When not to use it

Not for repeated stopping from speed: use the motor's own braking or a brake rated for dynamic stopping (Advanced Motion Controls). If the drive already cannot be back-driven (a [self-locking](../glossary.md#self-locking) worm gear or lead screw) a brake may be unnecessary; a worm gear reducer is a common alternative on printer Z axes ⚑ [uncertain: seen only in search summaries]. Where the load is light and some slow drift is acceptable, shorting the motor windings slows a falling axis without a brake, but gives no [holding force](../glossary.md#holding-force) at standstill ⚑ [uncertain: seen only in search summaries of a Duet3D forum thread]. Where there is no electricity at all, use a mechanical brake, [ratchet](../glossary.md#ratchet) or lock.

## Details

- **What it does (jobs):**
  - hold or release using power: holds the shaft whenever power is off, releases only while powered
  - slow it, stop it or keep its speed steady: holds a stopped axis still and can make occasional emergency stops
- **Movement:** rotate: it controls a rotating shaft, which turns freely when the brake is powered and is held when it is not; inside, the armature plate slides only a fraction of a millimetre (0.2-0.5 mm air gap, INTORQ BFK458)
- **Directions it can move (degrees of freedom):** 1 when released (the shaft turns about its axis); 0 when engaged
- **Special behaviour:**
  - fail-safe or breakaway: it engages automatically when power is lost or switched off; 'power off brakes stop or hold a load when electrical power is either accidentally lost or intentionally disconnected' (Ogura, electric-brake.com)
  - self-locking (holds under load, won't back-drive): holds a vertical axis or robot joint against gravity with no power, up to its rated torque (Teknic)
  - torque-limiting (slips or clicks at a set force/torque): above its holding torque it slips; Universal Robots joint brakes include a friction clutch so a jammed arm can be pushed round by hand in an emergency (Universal Robots manual)
- **How it holds:**
  - friction or clamping ([force-fit](../glossary.md#form-fit--force-fit--material-bond)): the friction disc is clamped between the armature and the mounting plate
  - spring force (a spring or springy part presses it in place): compression springs supply the clamping force
  - magnetic: permanent-magnet versions hold by magnets instead of springs (Wikipedia)
  - shape (the parts interlock; form-fit): tooth brakes and solenoid pin arrestors lock with teeth or a pin (SEPAC; Kendrion)
- **Input and output:** Not a transmission; it holds or releases a shaft. Catalogues give the static (holding) torque; the dynamic torque while slipping at speed can be lower (Ogura, electric-brake.com). Back-drivable: no while engaged, up to its rated torque; above it the disc slips. Fitted on the motor side of a gearbox, its holding torque is multiplied by the [gear ratio](../glossary.md#gear-ratio) at the output ⚑ [uncertain: standard gearing arithmetic, not from a brake source].
- **Power:** powered (needs electricity to release, typically 24 V DC; a NEMA 17 add-on brake uses 24 V and 5 W, OYOSTEPPER). When power is lost it locks (engages), which is the point of it. Power can be reduced after the armature has pulled in (Motion Control Tips), e.g. 'brief overexcitation and then... reduced holding voltage' (Kendrion). Permanent-magnet versions also engage when power is off, but if they fail they tend to 'fail open', whereas spring-set brakes 'always fail safely closed' (Thomson, Tech Briefs, 2016).
- **Load:** Light to heavy depending on size, and only in twist (torque) about the shaft: about 0.24 N·m for a NEMA 17 stepper brake (OYOSTEPPER), 0.22-16 N·m for servo-motor brakes (Kendrion Servo Line), and up to 600 N·m holding torque for a large industrial brake (INTORQ BFK458-25). It is not meant to carry side loads.
- **Play and precision:** small: spring-set brakes have a little [backlash](../glossary.md#backlash) from the rotor-to-hub fit and armature [clearance](../glossary.md#clearance) (Thomson, Tech Briefs, 2016; 'some backlash', Motion Control Tips); toothed hubs keep it minimal (Kendrion Servo Line); permanent-magnet brakes have near-zero backlash (Thomson). It tolerates no [misalignment](../glossary.md#misalignment): the disc must slide freely on its hub and the mounting face must be square to the shaft (INTORQ).
- **Taking it apart:** removable: bolted to the motor end or a flange and fixed to the shaft through its hub; its own braking action is automatic, and some models have a hand-release lever (INTORQ; SEPAC)
- **How often it can be reused:** many times: it engages every time the machine stops or loses power; as a holding brake engaged at standstill it wears very little, but every stop from speed wears the lining (Advanced Motion Controls; INTORQ)
- **Sealing:** none: open brakes must be kept clean ('Keep rubbing surfaces free from grease, oil or any other contaminating material', INTORQ BFK458); many servo motors house the brake internally behind an IP65 enclosure (Advanced Motion Controls)
- **Adjustable:** sometimes: industrial brakes let you reset the air gap as the lining wears (INTORQ: turning the adjustment tubes 1/6 turn changes the gap by about 0.15 mm) and 'E' models have a torque adjuster nut that lowers torque in steps; small motor brakes are usually fixed
- **Access needed:** end of a tube or shaft: it fits over a motor's rear shaft (B-face) or front end (A-face) (Kendrion), or on a shaft between motor and gearbox; add-on brakes pass a shaft through (Teknic NEMA 23 and 34 brakes)
- **Materials:** Steel coil housing and armature plate (they must be magnetic), a copper coil, a friction lining on the rotor, a steel or cast-iron mating surface (INTORQ asks for steel or cast iron), steel springs. It is a bought component, not something to print, and it connects to a steel shaft.
- **Heat, cold, water and wear:** INTORQ rates its BFK458 brakes for -20 to +40 °C ambient, warns that with high humidity and low temperature the armature and rotor can freeze together, and says no explosive or aggressive atmospheres; the brake surface can reach 130 °C when stopping loads (INTORQ). Kendrion Servo Line brakes are rated -15 to +120 °C. Oil or grease on the friction faces reduces holding (INTORQ). Permanent-magnet brakes need controlled temperatures and are 'highly sensitive to oxidation', and idle periods can reduce their torque (Thomson, Tech Briefs, 2016). Linings wear with every stop from speed, so the air gap grows over time (INTORQ).

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: always bought, either built into a motor ('stepper motor with brake', 'servo motor with brake') or as an add-on brake
  - 3D print (FDM): brackets, spacers and adapter plates to mount a brake or brake motor
  - CNC: metal mounting flanges and adapter plates that must be square to the shaft (INTORQ)
- **Printing it in one piece (print in place):** no: the brake is a bought electromagnetic assembly; only its mounts can be printed
- **Tools:** hex keys, spanners and a torque wrench to mount it; a feeler gauge to check the air gap (INTORQ BFK458); for wiring, a DC supply, relay or transistor and a suppression diode or varistor
- **Difficulty:** moderate: buy one; fitting a ready-made stepper motor with brake is easy, but powering the 24 V coil through a relay or transistor with the right suppression, and releasing it before the motor moves and engaging it only after the motor stops, takes care; making your own is hard

### 3D printing tips

The brake itself cannot usefully be 3D printed; print only mounts and adapters. A printed mount must carry the full brake torque back into the frame, so make it stiff and bolt it with metal fasteners into [heat-set inserts](../glossary.md#heat-set-insert) or through-holes ⚑ [uncertain: general practice]. Keep the mounting face flat and square to the shaft; INTORQ asks for a steel or cast-iron mating face square to the shaft, so where the rotor rubs against a surface use the brake's own friction plate or flange rather than a printed face. Heat: a brake stopping loads can reach 130 °C at its surface 'under unfavourable conditions' (INTORQ), and PLA softens above about 60 °C (Prusa Knowledge Base), so use a more heat-tolerant plastic or metal near brake motors ⚑ [uncertain: temperature of small holding brakes in hobby use not measured]. Keep grease and oil off the friction surfaces during assembly (INTORQ).

### Buying one (off-the-shelf parts)

Search terms: 'stepper motor with brake' or 'NEMA 17 stepper motor with electromagnetic brake' (e.g. 24 V, 3.7 W brakes on StepperOnline listings seen in search results ⚑ [uncertain: page not opened]); 'DC electromagnetic brake for NEMA 17' (0.24 N·m, 24 V, 5 W, OYOSTEPPER); 'NEMA 23 brake' / 'NEMA 34 brake' (Teknic); 'servo motor with holding brake'; 'spring applied brake', 'power-off brake', 'fail-safe brake', 'holding brake', 'permanent magnet brake', 'tooth brake'; 'hand release' lever kit; 'brake rectifier' (AC supplies); 'flyback diode', 'Zener diode' or 'varistor' (coil suppression); 'relay' or 'logic-level MOSFET'; 'solenoid arrestor' or 'pin brake' (a pin that drops into a gear, Kendrion); 'gear motor with brake'.

## Rules of thumb

- Holding brake, not a stopping brake: 'Only engage brakes when the motor is at a standstill to minimize dynamic wear'; servo brakes 'are not typically designed for frequent stops or repeated emergency stops', so use brakes designed for dynamic stopping where needed (Advanced Motion Controls).
- Control order: release the brake when the motor driver is enabled and engage it when the driver is disabled (Duet3D firmware does this automatically with M569.7; Duet 3 Expansion 1HCL documentation).
- Switching speed: switch the coil on the DC side for fast engagement; switching on the AC side of a rectifier lengthens engagement times by 3-6 times, and 'With falling loads such as hoists, lifts and cranes, it is ESSENTIAL to switch the brake coil on the d.c. side' (INTORQ BFK458 instructions; Transdrive, Industrial Brakes Guide, quotes 3-4 times).
- Suppression: a plain flyback diode across the coil keeps current flowing as the field collapses, which 'delays the response' of the brake; a Zener 'shortens the decay time' (Warner Electric, Machine Design, 2012). Some controllers include a fast brake circuit that dumps the coil's energy for quick engagement (Duet 3 Expansion 1HCL).
- Engagement times are tens to hundreds of milliseconds: about 20 ms for a Warner ERS-42 (Machine Design, 2012); 28 ms (size 06) to 230 ms (size 25) for INTORQ BFK458 with DC switching at the rated air gap.
- Air gap: rated air gap 0.2 mm (small sizes) to 0.5 mm (large) on INTORQ BFK458; as the lining wears the gap grows, and if it grows too large the coil can no longer pull the armature in, so the brake will not release (INTORQ troubleshooting; Thomson: 'air-gap-related failure for them results in the inability to release the brake').
- Supply voltage within -10% to +5% of the rated coil voltage (INTORQ BFK458); Kendrion Servo Line brakes are rated DC 24 V +/-10%. Spring-set brakes are more forgiving of voltage than permanent-magnet brakes, which release only over a narrow window of about 10% of the applied voltage (Thomson, Tech Briefs, 2016).
- Power saving: 'the amount of power supplied to the brake can be reduced once the armature plate is engaged' (Motion Control Tips, 2021); some controllers run a 24 V brake from a 48 V supply by PWM (Duet 3 Expansion 1HCL).
- Burnishing: some new brakes deliver only about 60% of rated torque until the friction faces are run in (Ogura, about its power-on brakes); spring-set brakes 'need little if any additional burnishing' (Thomson, Tech Briefs, 2016).

## Common failures

Brake will not release: air gap too large from wear, supply voltage too low, wrong or failed rectifier, broken wiring, or coil failure (INTORQ troubleshooting); check voltage and reset the gap. Brake drags or overheats: air gap too small or hand release set wrong (INTORQ). Holding torque drops: oil or grease on the lining (INTORQ), glazing from being used to stop a moving shaft (Advanced Motion Controls), lining worn below minimum thickness (INTORQ), or, for permanent-magnet brakes, oxidation after idle periods (Thomson). Slow engagement and a dropping axis: coil switched on the AC side, or only a plain diode used as suppression (INTORQ; Machine Design). Brake released while the motor is unpowered because of wrong control order: make sure firmware engages it whenever the driver is off (Duet3D).

## Safety

A holding brake is not a guarantee: do not stand under a load held only by a brake. Releasing the brake by hand (hand-release lever, wheelchair freewheel lever) lets the load move: release only on level ground or with the load supported (Quantum Rehab: disengaging on an incline can let the chair roll). Universal Robots warns that its joint brakes are 'not designed for manual release' and that doing so 'may result in injuries personnel or damage to equipment'. Coil switching produces voltage spikes that need a suppressor (INTORQ). Brakes on mains-powered motors carry hazardous voltages; work with power off (INTORQ). A 3D printer builder reports that a Z bed dropping at power loss can drive enough back-EMF to damage motor drivers (Printables 1219484) ⚑ [uncertain: single user report].

## Related

- Electromagnetic clutch (power-on): the same coil and armature idea, but powering it connects a drive instead of releasing a brake
- Friction brake (band, drum or disc brake): a hand- or pedal-applied friction brake with no fail-safe spring
- Permanent-magnet power-off brake: magnets instead of springs; zero backlash and compact, but narrow voltage window and fails open (Thomson)
- Tooth brake and solenoid pin arrestor: spring-applied brakes that lock with teeth or a pin dropping into a gear, positive but only at set positions (SEPAC; Kendrion)
- Worm drive and self-locking lead screw: hold a load without power by friction in the gearing, with no brake needed
- Bidirectional anti-back-drive clutch: a purely mechanical way to stop the load driving the motor
- Motor winding short ('electronic Z brake'): shorting a stepper's coils slows a falling axis but gives no holding force at standstill (Project R3D board, YouTube) ⚑ [uncertain: behaviour seen only in search summaries]
- Eddy-current brake: slows a moving shaft without contact but cannot hold it still

## Make it yourself

- [Duet 3 Expansion 1HCL documentation (Duet3D)](https://docs.duet3d.com/Duet3D_hardware/Duet_3_family/Duet_3_Expansion_1HCL): Wiring and firmware notes for driving a 24 V motor brake from a 3D-printer or CNC controller: a dedicated brake output with fast release, PWM voltage control and the M569.7 command that releases the brake when the motor is enabled *(licence: documentation; link only)*
- [Z-brake board model, by plainman98 (URL from Printables API, page not opened)](https://www.printables.com/model/1219484-z-brake-board-model): Outline model for mounting a home-made circuit that slows a falling 3D-printer bed after power loss, an electronic alternative to a spring-applied brake (read through the Printables API) *(licence: Creative Commons Public Domain)*

## Pictures, videos and models

- [O-2 electromagnetic-power-off-brake1.gif (Wikimedia Commons), by Oguraclutch](https://commons.wikimedia.org/wiki/File:O-2_electromagnetic-power-off-brake1.gif): Animated diagram of an electromagnetic power-off brake, used in Wikipedia's 'Electromagnetic brake' article *(licence: Public domain (released by the copyright holder))*
- [Spring Applied Brakes - How they work (oguraindustrial)](https://www.youtube.com/watch?v=jiJW1bAHvqA): Animation of the springs, armature and friction disc engaging and releasing (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
- [Kendrion Tutorial - What is a spring applied brake? (KendrionVideo)](https://www.youtube.com/watch?v=qtQoADEeI6Q): Manufacturer tutorial explaining the spring-applied brake principle (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
- [Servo Motor Brake - Spring-set type (KEB America)](https://www.youtube.com/watch?v=GMhGR4yeT_0): A spring-set holding brake of the kind fitted to servo motors (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
- [Electromagnetic brake (Wikipedia)](https://en.wikipedia.org/wiki/Electromagnetic_brake): Article covering power-off spring-applied and permanent-magnet brakes, with diagrams *(licence: CC BY-SA 4.0)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 8 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Electromagnetic_brake>
- <https://en.wikipedia.org/wiki/Solenoid_brake>
- <https://en.wikipedia.org/wiki/Elevator>
- <https://www.motioncontroltips.com/what-are-electromagnetic-power-off-brakes-and-where-are-they-used/>
- <https://www.techbriefs.com/component/content/article/25417-an-inside-look-at-electromechanical-power-off-braking-options>
- <https://www.electric-brake.com/>
- <https://www.mayr.com/en/products/more-products/product-glossary/brakes/spring-applied-brakes>
- <https://www.kendrion.com/en/products-services/industrial-brakes/spring-applied-brakes/servo-line>
- <https://kendrion.com/en/products/solenoids-actuators/locking-solenoids-door-lock-systems/electromechanic-pin-brake>
- <https://sepac.com/electromagnetic-brakes/spring-applied-brakes/>
- <https://www.kebamerica.com/blog/spring-set-brakes-how-it-works/>
- <https://teknic.com/products/spring-applied-power-off-brakes/>
- <https://www.oyostepper.com/goods-392-DC-Electromagnetic-Brake-24V-025Nm-354ozin-for-Nema-17-Stepper-Motor.html>
- <https://docs.rs-online.com/af5b/0900766b804c5ed7.pdf>
- <https://www.industrialbrakesguide.com/brake-switching>
- <https://www.machinedesign.com/news/article/21829695/suppression-circuits-for-clutches-and-brakes>
- <https://www.a-m-c.com/mechanical-servo-motors-failures-and-faults/>
- <https://docs.duet3d.com/Duet3D_hardware/Duet_3_family/Duet_3_Expansion_1HCL>
- <https://www.universal-robots.com/manuals/EN/HTML/SW5_20/Content/prod-serv-man/E-series/serv-man-title-no-drive-pwr.htm>
- <https://www.mobilityscootersdirect.com/blog/diy/how-to-test-a-mobility-scooter-or-power-wheelchair-brake-system-with-a-multimeter/>
- <https://www.quantumrehab.com/resources/consumer-article-can-you-push-an-electric-wheelchair.asp>
- <https://help.prusa3d.com/article/pla_2062>
- <https://commons.wikimedia.org/wiki/File:O-2_electromagnetic-power-off-brake1.gif>
- <https://www.youtube.com/watch?v=jiJW1bAHvqA (verified via YouTube oEmbed)>
- <https://www.youtube.com/watch?v=qtQoADEeI6Q (verified via YouTube oEmbed)>
- <https://www.youtube.com/watch?v=GMhGR4yeT_0 (verified via YouTube oEmbed)>
- <https://www.youtube.com/watch?v=-39GtYVHS6M (verified via YouTube oEmbed; 'STOP THE DROP! - Project R3D Zmotor Brake Board')>
- <https://www.printables.com/model/1219484-z-brake-board-model (URL from Printables API, page not opened; read via https://api.printables.com/graphql/)>
- <https://api.printables.com/graphql/>
