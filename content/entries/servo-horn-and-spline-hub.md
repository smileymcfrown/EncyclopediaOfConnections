---
title: Servo horn and spline hub
description: A servo horn is an arm or disc with a toothed hole that pushes onto the matching toothed (splined) output shaft
  of a hobby servo and is held by a screw into the end of the shaft, so the servo's turning force goes into whatever is bolted
  to the horn.
num: 82
term: Servo horn (servo arm) on a splined servo output shaft; servo hub (spline hub)
plain_name: The little plastic or metal arm (or round disc) that pushes onto the tiny toothed shaft sticking out of a hobby
  servo and is held on by one small screw in the middle, so whatever you fasten to the arm turns with the servo
aliases:
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
- 'ServoBlock (brand): a bearing-supported servo mount'
- servo saver (a spring-loaded horn that gives way in a crash; a variant)
- Servohorn / Servoarm (German shop listings)
family: clutches & couplings
other_families: [motion conversion]
finder:
  job: [join and hold, let it move, line parts up exactly]
  motion: none
  special_behaviour: [indexing, self-aligning or self-centring, fail-safe or breakaway]
  holding_principle: [shape, friction or clamping]
  reuse_cycles: many times
  seal: none
  access_needed: end of a tube or shaft
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, 3D print (resin)]
  connects: [shaft]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [steady turning]
  shaft_layout: [in line]
  overload_response: not applicable
  clicks: clicks
  tools: [hand tools]
  load_max: medium
  usual_process: off-the-shelf part
  adjustable: 'yes'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [input_output, power, reuse_cycles, play_and_precision, materials, processes, making_tips_3d_printing, off_the_shelf_parts,
  everyday_examples, environment_limits, safety_notes, common_failures, make_it_yourself]
diagram_idea: 'A cut-away of a servo''s toothed output shaft with a horn above it, arrows showing the horn pushing down onto
  the teeth and the centre screw going in, then a top view of the horn with two holes marked ''near: more force, less travel''
  and ''far: less force, more travel'', plus a small side view showing a bearing block taking the side load.'
links:
- url: https://commons.wikimedia.org/wiki/File:Futaba_6-Arm_plastic_servo_horn.jpg
  title: Futaba 6-Arm plastic servo horn.jpg (Wikimedia Commons, by Suyash Dwivedi)
  shows: Photo of a typical six-arm plastic servo horn with rows of linkage holes and the toothed centre hole
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Servo_Arm_Attachment.jpg
  title: Servo Arm Attachment.jpg (Wikimedia Commons, by MTomaselli)
  shows: SketchUp drawing with the specifications of a custom arm that attaches to a servo
  license: CC BY-SA 3.0
- url: https://www.servocity.com/glossary
  title: 'ServoCity glossary: servo splines, servo horns, ServoBlock'
  shows: Plain definitions plus a diagram comparing common hobby servo spline sizes, showing that equal tooth counts can be
    different sizes
  license: link only
- url: https://hackaday.com/2015/02/01/spline-thieving-makes-hobby-servos-even-more-useful/
  title: Spline Thieving Makes Hobby Servos Even More Useful (Hackaday, 2015)
  shows: Pictures of a servo spline traced from a photo in CAD and built into printed and milled parts
  license: link only
- url: https://www.youtube.com/watch?v=rQwg55PHdAc
  title: 3d Print an Autodesk Fusion 360 Gear Generation around an SG90 Servo Horn Tutorial (Broadwell Consulting, YouTube)
  shows: Video tutorial modelling a printed gear that wraps around a stock SG90 horn instead of printing the spline
  license: link only (standard YouTube licence)
make_it_yourself:
- url: https://printables.com/model/163224-servo-spline-maker
  title: Servo Spline Maker (Jamie, Printables)
  what_it_is: OpenSCAD customizer that prints a test plate of splines in small diameter steps so you can find the size that
    fits your servo, then exports the chosen spline to build into your own part
  license: CC0 (Creative Commons Public Domain)
- url: https://raw.githubusercontent.com/mezger/customizable-servo-arm/main/README.md
  title: customizable-servo-arm (mezger, OpenSCAD generator), README
  what_it_is: Generates printable servo arms with 1-5 arms or just an adapter head, for Futaba 3F (25T), 2F (21T), 1F (15T),
    Hitec A1 (15T) and SG90 (21T) splines, with an adjustable fit gap
  license: not stated in the README [uncertain]
- url: https://raw.githubusercontent.com/hugokernel/OpenSCAD_ServoArms/master/servo_arm.scad
  title: OpenSCAD_ServoArms (hugokernel), servo_arm.scad
  what_it_is: Parametric OpenSCAD servo-arm library with a Futaba 3F 25-tooth spline definition; add new spline arrays for
    other servos
  license: LGPL 2.1 or later (from the file header)
- url: https://www.printables.com/model/149856-servo-horn-round-for-55g-servo-25t-spline
  title: Servo horn round for 55G Servo (25T spline) (ExLoop, Printables)
  what_it_is: Printable round 25T horn with four M3 holes for standard-size servos
  license: CC BY-NC
- url: https://www.printables.com/model/937213-25-servo-horn-template-for-large-servos-includes-f
  title: 25 Servo Horn Template For Large Servos, Includes fusion 360 f3d and STEP files (Forrest, Printables) (URL from Printables
    API, page not opened)
  what_it_is: A basic 25T horn in Fusion 360 and STEP formats to start your own custom horn from; the author says it fits
    Futaba-style 25T 20 kg servos
  license: CC0 (Creative Commons Public Domain)
- url: https://hackaday.io/project/180210/log/200716-parametric-3d-models-to-fit-various-types-of-servo-horns
  title: Parametric 3D models to fit various types of servo horns (hackaday.io log)
  what_it_is: Two parametric OpenSCAD scripts that cut a pocket for a measured stock horn into a printed gear or part
  license: not stated [uncertain]
sources:
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
research: research/connection-types/results/Servo_horn_and_spline_hub.json
glossary: [misalignment, axial--radial, torque, idler, crank, linkage, actuator, fail-safe--fail-secure, clearance, form-fit--force-fit--material-bond,
  spline, heat-set-insert]
---

A servo horn is an arm or disc with a toothed hole that pushes onto the matching toothed (splined) output shaft of a hobby servo and is held by a screw into the end of the shaft, so the servo's turning force goes into whatever is bolted to the horn.

**In plain words:** The little plastic or metal arm (or round disc) that pushes onto the tiny toothed shaft sticking out of a hobby servo and is held on by one small screw in the middle, so whatever you fasten to the arm turns with the servo. **Proper term:** Servo horn (servo arm) on a splined servo output shaft; servo hub ([spline](../glossary.md#spline) hub).

**Also called:** servo arm; servo horn / servo disc / round horn / servo wheel; single-arm, double-arm, cross (4-arm) and star (6-arm) horns; servo hub / spline hub / clamping servo hub; clamping servo horn / clamp horn; servo spline / output spline / servo output shaft; 25T, 24T, 23T, 21T spline (named by tooth count); Futaba-style 25T spline, Hitec C1 24T spline (brands; names beginners will meet in shops); servo-to-shaft coupler / servo shaft adapter; [idler](../glossary.md#idler) horn (a free-turning dummy horn on the back of a robot servo), e.g. Dynamixel (brand) idler horn; ServoBlock (brand): a bearing-supported servo mount; servo saver (a spring-loaded horn that gives way in a crash; a variant); Servohorn / Servoarm (German shop listings).

## How it works

The servo's output shaft has a ring of fine straight teeth (a spline, a bit like a tiny gear), and the horn's hole has the same number of matching grooves. Pushed together, the teeth interlock, so the horn cannot turn on the shaft (a shape-locked joint), and the centre screw stops it sliding off the end. The horn's arms carry rows of holes at different distances from the centre: a pushrod or part fixed further out moves further but with less force, one fixed closer in moves less but with more force. Clamping horns and hubs also squeeze the spline with a slit and side screws to take out the last bit of play.

## Parts

A few parts: the servo's splined output shaft (the top of its last gear), the horn or hub with a matching toothed hole, and one small retaining screw into the shaft's tapped end (Futaba uses M2.6; M2.5 hex-head replacements fit Hitec and Futaba). Optional extras: side clamp screws on clamping horns and hubs, a bearing block (ServoBlock-style) or idler horn to carry side loads, and the screws that fasten your part to the horn's holes.

## Everyday examples

- The steering servo of a radio-controlled car, whose horn pushes the steering [linkage](../glossary.md#linkage) ([Axial](../glossary.md#axial--radial))
- Radio-controlled aircraft, where a pushrod runs from a servo horn to a wing flap or tail surface (DU-BRO)
- Hobby robot kits with wheels or arms pressed onto micro servos (Pololu servo wheels)
- Desktop robot arms, animatronic props and camera pan-tilt heads built from hobby servos with aluminium disc horns ⚑ [uncertain: general maker practice]

## When to use it

Use a horn or spline hub whenever you attach anything to a hobby servo: a pushrod to move a flap, steering or a latch; an arm or bracket for a robot joint; a wheel on a continuous-rotation servo; a gear or pulley. Choose a stock plastic horn for light jobs and prototypes, an aluminium or clamping horn or hub for robot joints and higher-torque servos, and pick the hole distance to trade travel against force.

## When not to use it

Don't hang heavy arms or wheels straight on the servo's output shaft: side loads and bending should go into a bearing (ServoBlock-style mount, idler horn or your own bearing), with the horn only passing on the twist. Where the linkage can be hit (RC car steering, legs, grippers), add a servo saver, a slip clutch or a series-elastic coupling so shocks don't strip the gears. For continuous heavy-duty rotation or high [torque](../glossary.md#torque), use a gear motor with a keyed, D-shaped or hex shaft and a proper shaft coupling or clamping hub instead of a hobby-servo spline. Never force a horn made for another brand's spline: it will wobble or strip.

## Details

- **What it does (jobs):**
  - join and hold: fixes an arm, disc, wheel or bracket to a servo's output shaft
  - let it move (turn, slide or bend): passes the servo's turning motion on to the attached part
  - line parts up exactly: the teeth set the horn's angle in fixed steps, so a horn refitted on the same tooth returns to the same angle
- **Movement:** none (horn and shaft are locked together); the pair as a whole rotates with the servo, typically limited to about 180° on a standard hobby servo (US patent 7,285,884 background) or continuous on a continuous-rotation servo
- **Directions it can move (degrees of freedom):** 0 between horn and shaft once the screw is in (it cannot turn, slide or tilt on the shaft); the servo's output itself gives the attached part 1 (rotation about the shaft)
- **Special behaviour:**
  - indexing (clicks into set positions): the horn can only be fitted in whole-tooth steps of 360° divided by the tooth count (14.4° for a 25-tooth spline, 15° for 24 teeth), which fixes its starting angle
  - self-aligning or self-centring: the spline teeth centre the horn on the shaft, so it runs true without adjustment
  - [fail-safe](../glossary.md#fail-safe--fail-secure) or breakaway: only in the servo-saver variant, where a spring lets the horn give way when the wheels or linkage are hit, then springs back (Tamiya; DU-BRO); a plain horn has no such behaviour
- **How it holds:**
  - shape (the parts interlock; [form-fit](../glossary.md#form-fit--force-fit--material-bond)): the spline teeth carry the turning force
  - friction or clamping (force-fit): the centre screw clamps the horn onto the shaft end so it cannot slide off, and clamping horns and hubs also squeeze the spline (Axial; goBILDA)
- **Input and output:** Rotation -> rotation, 1:1, in line: the horn turns exactly with the servo shaft. At the horn's holes the rotation becomes an arc, and the force available at a hole = servo torque / hole radius (servo torque is quoted as the weight the servo can lift hanging from a pulley of a given radius, Wikipedia 'Servo (radio control)'), so a servo rated 10 kg·cm pushes with about 10 kg-force at 1 cm and 5 kg-force at 2 cm. Joined to a pushrod, the horn becomes the [crank](../glossary.md#crank) of a crank-and-rod linkage that turns rotation into push-pull motion. Efficiency: the spline itself wastes almost nothing ⚑ [uncertain: no figure found]. Back-drivable: the joint passes force both ways; whether a load on the horn can turn the servo depends on the servo's gearbox, and forcing the horn risks stripping the servo's gears (servo-saver articles: Tamiya, DU-BRO).
- **Power:** passive (the joint itself needs no power). The servo it sits on is powered; how well an unpowered servo holds its position depends on its gearbox friction ⚑ [uncertain]
- **Load:** Light to medium. Strong in twist, where the many small teeth share the load; weak against being pulled off (only one small screw holds it on) and against side (radial) loads and bending, which go straight into the servo's output shaft and its small bushing or bearing. For arms that carry weight or take side loads, support the output with a bearing-supported shaft such as a ServoBlock, which 'greatly increases the servo's load-bearing capability' (ServoCity glossary; goBILDA), or with an idler horn on the back of the servo. Plastic horns and printed splines are the weakest link; aluminium horns are stiffer.
- **Play and precision:** Small play when the right spline is used and the screw is tight; noticeable wobble, slipping or stripped teeth if the tooth count or spline size is wrong or worn. Clamping horns and hubs remove the spline's own small play (Axial; goBILDA). Most of the play felt at the end of an arm comes from the servo's gear train rather than the spline ⚑ [uncertain]. Refitted on the same tooth, it returns to the same angle. It tolerates no [misalignment](../glossary.md#misalignment): the horn must sit fully down and square on the shaft.
- **Taking it apart:** removable: undo the centre screw (and any clamp screws) and pull the horn straight off
- **How often it can be reused:** many times: stock horns can be pulled off and refitted many times, though a plastic spline wears a little each time ⚑ [uncertain]; non-marring clamping couplers are designed to be removed and installed 'as many times as you need' (goBILDA)
- **Sealing:** none: it is an open mechanical joint and seals nothing
- **Adjustable:** Yes, in two ways. Angle: pull the horn off and refit it one tooth round (a 14.4° step on a 25-tooth spline), then fine-tune electronically with trim or sub-trim in the radio or an offset in the code (Axial sets trim and sub-trim to zero before fitting a horn). Leverage: choose a hole further out for more travel and less force, or closer in for more force and less travel.
- **Access needed:** end of a tube or shaft: the centre screw goes in along the axis of the servo's output shaft, so you must be able to reach straight down onto it; leave a screwdriver hole over the screw in any part that covers the horn
- **Materials:** Stock horns are moulded plastic ⚑ [uncertain: exact plastic not stated in sources opened]; upgrade horns and hubs are aluminium (Savox SH81/SH82 (brand), goBILDA hubs and couplers in clear-anodised aluminium, REV aluminium horns); screws are steel or stainless steel (AndyMark). The servo's own spline is part of its output gear, plastic or metal depending on the servo; REV sells replacement gear sets for when 'the gears or spline' are damaged. Printed horns have been made successfully in PETG (Prusa forum; mezger); PLA softens above about 60 °C (Prusa).
- **Heat, cold, water and wear:** Heat: PLA parts soften above about 60 °C and degrade in UV light (Prusa), so printed horns in a hot car or outdoors should be PETG, ASA or nylon. Vibration: the centre screw can work loose; Axial suggests a new screw first and then a little medium-strength thread locker, never high-strength. Wear: plastic splines wear each time they are refitted or overloaded, and a slipping horn quickly rounds off its teeth ⚑ [uncertain]. Water: the horn joint itself does not mind water, but the servo may unless it is a waterproof type ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: plastic horns come with every servo; aluminium horns, clamping horns, spline hubs, servo-to-shaft couplers and bearing blocks are sold by tooth count (ServoCity, goBILDA, REV)
  - 3D print (FDM): printed parts that hold the stock horn in a matching pocket, or printed horns with their own spline after test-fitting (Servo Spline Maker; Prusa forum; mezger generator)
  - 3D print (resin): ⚑ [uncertain] fine enough for small teeth, but no tested example found in the sources opened
  - CNC: metal horns and hubs are machined; Hackaday's 'spline thieving' article describes tracing a servo spline in CAD and milling it into metal parts
  - laser cut: ⚑ [uncertain] flat plywood or acrylic arms screwed to the holes of a stock horn; no tested example opened
- **Printing it in one piece (print in place):** no: the horn is a single part that is pushed onto the servo and screwed; nothing is printed already assembled
- **Tools:** A small Phillips screwdriver or a 2 mm hex key for the centre screw (Axial; AndyMark), a 1.5 mm hex key for the side screws on clamping horns (Axial), and a powered servo tester or controller to centre the servo before fitting the horn (Axial)
- **Difficulty:** easy if you use the horn that came with the servo or buy a matching metal hub and screw your part to its holes; moderate if you 3D print your own spline, because the teeth are only a few tenths of a millimetre tall and need test prints to get a tight fit (Prusa forum; Servo Spline Maker)

### 3D printing tips

1) Easiest and strongest: don't print the spline at all. Design your part with a pocket shaped like the stock horn and screw through the horn's holes; manufacturers don't agree on spline dimensions, so one hackaday.io builder measured his horns with calipers and fed the numbers into a parametric OpenSCAD script instead (hackaday.io log 200716). 2) If you print the spline, count the teeth exactly and measure the outside diameter first; the same tooth count can come in different sizes (ServoCity glossary: A15T and D15T both have 15 teeth but D15T is much larger). Common sizes: 25 teeth (Futaba-style, Savox, Traxxas and most 'standard' hobby servos), 24 teeth (Hitec C1), 23 teeth (JR, KO, Sanwa, Airtronics, Spektrum) and 21 teeth at about 4.8 mm for micro servos (RobotDigg chart; Pololu); SG90-style 21-tooth splines vary from about 4.7 mm (Tower Pro) to 4.9 mm (clones) (mezger README). 3) Print a test plate of splines in 0.2 mm diameter steps, sliced with the same settings as the final part, and pick the one that is tight but goes on; the best size may lie between two steps (Servo Spline Maker). 4) The smallest feature a printer can make is about one extrusion width, so a 0.25 mm nozzle resolves teeth better than a 0.4 mm one (Prusa forum). One user made a working 25T horn with a 0.4 mm nozzle in PETG at 255 °C by scaling the print to 103-105 %; the teeth looked 'slightly wavy' but locked firmly (Prusa forum). 5) The mezger OpenSCAD generator's 'servo head gap' of 0.1 mm fitted perfectly with PETG on a Bambu Lab P1S; increase it for shrink-prone materials such as ABS or less well-calibrated printers (mezger README). 6) Print the horn lying flat, with the spline hole's axis vertical, so each layer's outline traces the teeth ⚑ [uncertain: common practice, no tested source opened]. 7) Alternative: heat-set the spline salvaged from a scrapped servo's output gear into a PLA part with a soldering iron at about 300 °C, like a [heat-set insert](../glossary.md#heat-set-insert) (Arduino forum); or trace a photo of the spline in CAD ('spline thieving', Hackaday). 8) Leave a [clearance](../glossary.md#clearance) hole above the centre screw so it can be tightened after assembly, and a recess for the screw head. 9) PLA softens above about 60 °C and degrades in UV (Prusa), so use PETG or better for horns in hot or sunny places.

### Buying one (off-the-shelf parts)

Servo horns / servo arms (single, double, cross, star, disc), sold by spline tooth count (25T, 24T, 23T, 21T), e.g. replacement plastic horn sets for 25-spline standard servos, which 'will not fit' micro servos (Adafruit); aluminium servo horns (e.g. Savox SH81 double-sided and SH82 single-sided, brand); clamping servo horns (Axial heavy-duty clamp horns, brand); servo hubs / spline hubs (e.g. goBILDA 1906 low-profile and 1908 32 mm servo hubs on a 16 mm hole pattern, brand); servo hub shafts; clamping servo-to-shaft couplers (25T spline to 6 mm or 8 mm bore, goBILDA); servo shaft adapters (25T to 5 mm hex socket, REV-41-1558, brand); ServoBlock bearing mounts (brand); idler horn sets for robot servos (e.g. ROBOTIS HN11-I101 for Dynamixel XL430, brand); servo horn screws (M2.6 x 5 Futaba, M2.5-0.45 x 8 hex head); servo wheels that press onto the spline (Pololu 21T micro-servo wheels); servo savers; pushrods and clevises for the horn holes ⚑ [uncertain: not checked in a catalogue].

## Rules of thumb

- The horn's spline must match the servo's exactly: same tooth count AND same size. Common families: 25T (Futaba, Savox, Traxxas, Power HD and many others), 24T (Hitec), 23T (JR, KO, Sanwa, Airtronics, Spektrum) (RobotDigg spline chart); 21T x 4.8 mm micro servos (Pololu). Identify a spline by counting teeth and measuring its outside diameter (Robot Smashing League; ServoCity glossary).
- The Futaba-style 25T spline is about 5.9 mm across (5.92 mm head diameter in the OpenSCAD_ServoArms library's FUTABA_3F_SPLINE definition, LGPL 2.1).
- Force at a horn hole = servo torque / distance from the centre (from the torque definition in Wikipedia 'Servo (radio control)'): halve the radius to double the force and halve the travel.
- One tooth of repositioning = 360° / tooth count: 14.4° on 25 teeth, 15° on 24 teeth, about 17° on 21 teeth; fine-tune the rest with trim, sub-trim or a software offset (Axial).
- Centre the servo with power on and trims at zero before fitting the horn (Axial).
- Don't use thread locker on the horn screw; if it keeps working loose even with a new screw, use a little medium-strength thread locker, never high-strength (Axial).
- For printed splines, print a test plate stepping 0.2 mm in diameter and choose the tightest one that fits (Servo Spline Maker); scaling a 0.4 mm-nozzle PETG print to 103-105 % gave a tight fit in one test (Prusa forum).
- Take side loads and weight on a bearing (a ServoBlock-style bearing-supported shaft or an idler horn), not on the servo's own output shaft (ServoCity glossary; goBILDA; ROBOTIS idler horn).

## Common failures

1) Horn slips or strips because the spline is the wrong tooth count or size, or a plastic horn was overloaded: match the spline exactly, or upgrade to an aluminium or clamping horn. 2) Horn works loose because the centre screw backs out: use a fresh screw, then medium-strength thread locker if needed (Axial); hex-head screws are less prone to stripping than Phillips (AndyMark). 3) Horn not fully seated on the shaft, so it wobbles and the screw takes the load ⚑ [uncertain]. 4) Servo shaft, bushing or case worn or cracked by side loads from a long arm: support the output on a bearing (ServoBlock, idler horn) (ServoCity glossary). 5) Stripped servo gears after a crash or impact because nothing could give: fit a servo saver (Tamiya; DU-BRO). 6) Printed splines too loose (slips) or too tight (splits the hub): print a test plate and adjust in 0.2 mm steps or scale by a few percent (Servo Spline Maker; Prusa forum). 7) Arm fitted at the wrong angle so the linkage binds at the ends of travel: centre the servo first, then fit the horn (Axial).

## Safety

Servos can move suddenly to their commanded position at power-up, and horns and linkages form pinch points ⚑ [uncertain: general practice]; keep fingers clear and test with power limited. Forcing a powered servo's horn by hand can strip its gears (servo-saver articles: Tamiya, DU-BRO). The tiny screws are easy to lose and are a choking hazard for small children ⚑ [uncertain].

## Related

- Servo saver (sprung horn): a horn with a spring that lets the linkage give way under shock, protecting the servo's gears; covered with the torque-limiting gear entry
- Series-elastic coupling (series elastic [actuator](../glossary.md#actuator)): puts a deliberate spring between the servo or gearbox and the output, and measures its stretch to control force
- Hirth joint (face-spline coupling): also joins parts with interlocking teeth, but on flat faces and much larger, for precise heavy-duty indexing
- Splined shaft (mechanical spline) in general: the same tooth-locked idea used on car driveshafts and bicycle freehubs, carrying more torque than a single key (Wikipedia 'Spline (mechanical)')
- Clamping hub or shaft collar on a D-shaft or hex shaft: the usual way to fix parts to motor shafts that have no spline
- Bearing-supported servo mount (ServoBlock-style) and idler horn: not alternatives but add-ons that carry side loads so the horn only passes on twist
- Friction slip clutch: slips smoothly at a set torque to protect the servo, instead of a rigid horn

## Make it yourself

- [Servo Spline Maker (Jamie, Printables)](https://printables.com/model/163224-servo-spline-maker): OpenSCAD customizer that prints a test plate of splines in small diameter steps so you can find the size that fits your servo, then exports the chosen spline to build into your own part *(licence: CC0 (Creative Commons Public Domain))*
- [customizable-servo-arm (mezger, OpenSCAD generator), README](https://raw.githubusercontent.com/mezger/customizable-servo-arm/main/README.md): Generates printable servo arms with 1-5 arms or just an adapter head, for Futaba 3F (25T), 2F (21T), 1F (15T), Hitec A1 (15T) and SG90 (21T) splines, with an adjustable fit gap *(licence: not stated in the README ⚑ [uncertain])*
- [OpenSCAD_ServoArms (hugokernel), servo_arm.scad](https://raw.githubusercontent.com/hugokernel/OpenSCAD_ServoArms/master/servo_arm.scad): Parametric OpenSCAD servo-arm library with a Futaba 3F 25-tooth spline definition; add new spline arrays for other servos *(licence: LGPL 2.1 or later (from the file header))*
- [Servo horn round for 55G Servo (25T spline) (ExLoop, Printables)](https://www.printables.com/model/149856-servo-horn-round-for-55g-servo-25t-spline): Printable round 25T horn with four M3 holes for standard-size servos *(licence: CC BY-NC)*
- [25 Servo Horn Template For Large Servos, Includes fusion 360 f3d and STEP files (Forrest, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/937213-25-servo-horn-template-for-large-servos-includes-f): A basic 25T horn in Fusion 360 and STEP formats to start your own custom horn from; the author says it fits Futaba-style 25T 20 kg servos *(licence: CC0 (Creative Commons Public Domain))*
- [Parametric 3D models to fit various types of servo horns (hackaday.io log)](https://hackaday.io/project/180210/log/200716-parametric-3d-models-to-fit-various-types-of-servo-horns): Two parametric OpenSCAD scripts that cut a pocket for a measured stock horn into a printed gear or part *(licence: not stated ⚑ [uncertain])*

## Pictures, videos and models

- [Futaba 6-Arm plastic servo horn.jpg (Wikimedia Commons, by Suyash Dwivedi)](https://commons.wikimedia.org/wiki/File:Futaba_6-Arm_plastic_servo_horn.jpg): Photo of a typical six-arm plastic servo horn with rows of linkage holes and the toothed centre hole *(licence: CC BY-SA 4.0)*
- [Servo Arm Attachment.jpg (Wikimedia Commons, by MTomaselli)](https://commons.wikimedia.org/wiki/File:Servo_Arm_Attachment.jpg): SketchUp drawing with the specifications of a custom arm that attaches to a servo *(licence: CC BY-SA 3.0)*
- [ServoCity glossary: servo splines, servo horns, ServoBlock](https://www.servocity.com/glossary): Plain definitions plus a diagram comparing common hobby servo spline sizes, showing that equal tooth counts can be different sizes *(licence: link only)*
- [Spline Thieving Makes Hobby Servos Even More Useful (Hackaday, 2015)](https://hackaday.com/2015/02/01/spline-thieving-makes-hobby-servos-even-more-useful/): Pictures of a servo spline traced from a photo in CAD and built into printed and milled parts *(licence: link only)*
- [3d Print an Autodesk Fusion 360 Gear Generation around an SG90 Servo Horn Tutorial (Broadwell Consulting, YouTube)](https://www.youtube.com/watch?v=rQwg55PHdAc): Video tutorial modelling a printed gear that wraps around a stock SG90 horn instead of printing the spline *(licence: link only (standard YouTube licence))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 17 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Servo_(radio_control)>
- <https://en.wikipedia.org/wiki/Spline_(mechanical)>
- <https://patents.google.com/patent/US7285884>
- <https://www.robotdigg.com/news/168/RC-Servo-Spline-Chart>
- <https://robotsmashingleague.com/combat-robot-cookbook/servo-spline-sizing-guide>
- <https://www.servocity.com/glossary>
- <https://www.servocity.com/servo-horns/>
- <https://www.gobilda.com/servoblock-standard-size-25-tooth-spline-hub-shaft/>
- <https://www.gobilda.com/4001-series-clamping-servo-to-shaft-coupler-25-tooth-spline-to-6mm-round-bore/>
- <https://docs.revrobotics.com/ion-build/motion/servos>
- <https://www.pololu.com/product/4910>
- <https://www.adafruit.com/product/4250>
- <https://www.generationrobots.com/en/403206-hn11-i101-horn-set.html>
- <https://www.axialadventure.com/axi-blog-archive-servo-and-servo-horn-replacement.html>
- <https://andymark.com/products/servo-horn-replacement-screw-m2-5-0-45-x-8-mm>
- <https://wheelspinmodels.co.uk/i/futaba-servo-horn-screw-m2.6-x-5-10pc-372587/>
- <https://tamiyamodel.com/how-does-a-servo-saver-work/>
- <https://www.dubro.com/blogs/du-bro-101/du-bro-101-how-to-install-a-servo-saver>
- <https://hackaday.com/2015/02/01/spline-thieving-makes-hobby-servos-even-more-useful/>
- <https://forum.prusa3d.com/forum/original-prusa-how-do-i-print-this-printing-help/printing-servo-horn-25t/>
- <https://forum.arduino.cc/t/using-servo-output-spline-as-an-insert-for-custom-horns/1384332>
- <https://hackaday.io/project/180210/log/200716-parametric-3d-models-to-fit-various-types-of-servo-horns>
- <https://raw.githubusercontent.com/mezger/customizable-servo-arm/main/README.md>
- <https://raw.githubusercontent.com/hugokernel/OpenSCAD_ServoArms/master/servo_arm.scad>
- <https://raw.githubusercontent.com/hugokernel/OpenSCAD_ServoArms/master/README.md>
- <https://api.printables.com/graphql/>
- <https://printables.com/model/163224-servo-spline-maker>
- <https://www.printables.com/model/149856-servo-horn-round-for-55g-servo-25t-spline>
- <https://commons.wikimedia.org/wiki/File:Futaba_6-Arm_plastic_servo_horn.jpg>
- <https://commons.wikimedia.org/wiki/Category:Servo_motor_parts>
- <https://commons.wikimedia.org/wiki/File:Servo_Arm_Attachment.jpg>
- <https://www.youtube.com/watch?v=rQwg55PHdAc>
- <https://help.prusa3d.com/article/pla_2062>
