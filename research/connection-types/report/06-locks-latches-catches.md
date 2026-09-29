# locks, latches & catches: Latches, catches and locks

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 24 Push-push latch (push-to-open, heart-cam latch)

*locks, latches & catches.* Push once to latch, push again to release; a pin follows a heart-shaped track that holds it on alternate pushes (cabinet doors, SD card slots)

### What it is

- **plain_name**: A hidden catch that locks when you push a door, drawer or card in, and lets go and pops it out when you push it again, like a handle-less kitchen cupboard or a phone's memory-card slot
- **term**: Push-push latch (heart-cam latch)
- **aliases**: 
  - push-to-open latch
  - push latch
  - touch latch (also used for the magnetic type)
  - push-push mechanism or push-on/push-off mechanism
  - heart cam or heart-shaped cam groove
  - cardioid (heart-curve) latch
  - push lock mechanism or push-lock switch (latching push-button switches)
  - push-push card connector or push-push eject (SD and microSD card sockets)
  - cam groove latch
  - push-push locking bolt or indexing plunger with push-push lock (industrial standard part, e.g. GN 514)
  - ballpoint-pen principle (German 'Kugelschreiberprinzip')
  - Herzkurve (German: heart curve)
  - Tip-On (brand) for piston-type push-to-open furniture fittings (Deslaurier)
- **family**: locks, latches & catches
- **other_families**: indexing & detents, quick-release & tool-free
- **one_liner**: A spring-loaded catch in which a small pin runs round a closed, heart-shaped track, so the first push parks the pin in the notch of the heart and holds the part in, and the next push frees it so the spring pushes the part back out.
- **complexity**: A small assembly that acts as one unit: a sliding part (plunger, slider or card tray) with a heart-shaped groove or cam, a follower pin on a pivoting arm or springy wire that can swing sideways, a return spring that pushes the slider outward, and a housing; cabinet versions add a strike on the door. In some designs the heart is on the fixed part and the pin moves with the slider.
- **how_it_works**: A spring always pushes the slider outward, and a pin that can swing sideways runs in a closed loop groove shaped like a heart. When you push in past the closed position (overtravel), the pin runs up one side of the heart; when you let go, the angled wall steers it into the notch at the top of the heart, where the spring holds it trapped, so the part stays in (latched). Push again and the pin leaves the notch towards the other side; let go and the spring carries it down the other side of the heart back to the start, pushing the part out (Kapy CAD; Thang, 'Push-push button 2'; DaimlerChrysler/Fischer patent EP1253271A2). Small steps in the groove floor, with the pin pressed into the groove, or offset corners in the track make sure the pin can only go round one way (Kapy CAD; Omron patent US20150107980A1).

### Finder attributes

- **job**: 
  - lock, and release by hand: holds a door, drawer, lid, card or button in, and releases it with a second push
  - click into set positions: alternates between two positions (in and latched, out and released) on each push
  - join and hold: keeps handle-less doors and drawers closed
- **motion**: slide: a short straight in-and-out stroke of the slider (with a small overtravel past the latched position), while the follower pin swings slightly sideways round the heart
- **degrees_of_freedom**: 1: the slider moves along one straight line; the pin's sideways swing is guided by the track and is not a free motion
- **special_behaviour**: 
  - indexing (clicks into set positions): two alternating states; every two pushes send the pin once round the heart
  - quick-release: a push opens it and the spring pops the door, drawer or card out, so no handle or tool is needed
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the pin is trapped in the notch of the heart
  - spring force (a spring or springy part presses it in place): the return spring holds the pin in the notch and pops the part out when released
- **input_output**: Repeated straight pushes -> alternating latched and released states (a push-push toggle); one lap of the heart track per two pushes. In-line: the push and the spring act along the same line. Back-drivable: no; pulling on the latched part does not release it, and pulling hard can break the cam surface or bend the pin (Alps patent US4916276A). A hard shock that pushes the part further in, such as a car crash, can accidentally release it (EP1253271A2).
- **power**: passive (no power needed)
- **removability**: tool-free quick release: the latched part is released with a push; the latch body itself is screwed, pressed or clipped into the cabinet or device
- **reuse_cycles**: many times: designed for everyday use; e.g. push-push SD card connectors rated for more than 10,000 cycles, or 5,000 for an ultra-low-profile microSD version (MoarConn); printed versions wear out sooner as the steps round off
- **seal**: none
- **load**: light: holds a door, drawer, card or button in against small forces only; magnetic push-to-open cabinet latches are rated about 2 to 6 lbf (9 to 27 N) pull (McMaster-Carr); industrial push-push locking bolts cannot take axial load, and their pin retracts only by spring force (Konstruktionspraxis on GN 514). Weak against pulling the latched part out (Alps patent)
- **play_and_precision**: Noticeable: the latched position sits a little short of the fully pushed position, and the part needs room to be pushed further in (overtravel) to latch or release (Kapy CAD; EP1253271A2). The pin-to-groove fit must be free but not loose, like a fine sliding fit: too tight and it seizes, too loose and the pin skips or derails (Kapy CAD). *(unverified parts omitted)*
- **access_needed**: one side only (blind): you just push on the front of the door, drawer or card; the latch is hidden inside
- **materials**: Moulded plastic housings and sliders with steel return springs; metal eject levers carrying the heart groove in card connectors (JAE patent US20020192991A1); polyamide (PA) button and nitrided steel pin on the GN 514 push-push locking bolt (Konstruktionspraxis). Printed versions: PETG or PLA bodies, a metal pen spring or compression spring, and ideally a steel wire (e.g. bent paperclip) as the follower arm (Printables 1601839, 496329)
- **maker_difficulty**: moderate: easy to buy or to print from a proven model, but designing your own needs a crisp track, careful clearances, a metal spring and preferably a metal follower pin, because printed arms and springs creep and wear

### Making it

- **processes**: 
  - off-the-shelf part (push-to-open cabinet latches, push-push card connectors, latching push-button switches, push-push locking bolts)
  - 3D print (FDM): body, slider and track, with a metal spring and wire follower *(unverified parts omitted)*
- **print_in_place**: partly: the body and track print well but most reliable designs add a metal compression or pen spring and often a steel wire follower (Printables 496329, 1601839); fully printed versions with printed springs exist but their springs and arms creep when left latched for days (Printables 534635, 376606)
- **making_tips_3d_printing**: Split the part into a body and a cap that carries the track, so the heart groove is an open channel on a flat face with no internal overhangs (Kapy CAD). The steps in the groove floor that force one-way travel are the mechanism, not decoration: make them several full layers tall, about 0.5 to 1.5 mm, with the blocking face printed vertical so it stays sharp (Kapy CAD). Use a real metal spring with enough force across the whole stroke; printed springs relax and give inconsistent latching (Kapy CAD); one fully printed latch worked many times but its printed springs deformed permanently after being held compressed for several days (Printables 534635). A printed follower arm left bent in the latched position deformed until the case stopped opening, so the designer changed the track so the arm is not bent when closed (Printables 376606, which also recommends PETG for the arm and spring); a bent steel paperclip as the follower is more durable, more precise and allows a smaller mechanism (Printables 1601839, 12 mm x 10 mm with a pen spring). Aim for a free but not loose fit between pin and groove, measure the printed groove, and deepen the track if the pin derails (Kapy CAD). A 0.4 mm nozzle rounds the heart's sharp corners; consider a finer nozzle for small tracks (Kapy CAD). Proven printable examples use PETG with a standard ballpoint pen spring (Printables 496329) or PLA with two small compression springs in a unit about 30 mm x 30 mm (Printables 273742).
- **off_the_shelf_parts**: Search: 'push to open latch', 'push latch', 'touch latch' (mechanical or magnetic), 'push-to-open magnetic latch' (McMaster-Carr), 'push-open drawer fitting', 'push-push card connector' or 'push-push microSD socket' (Hirose, Molex, Amphenol and others), 'push lock switch' or 'latching push button switch', 'indexing plunger with push-push lock' (e.g. GN 514, Ganter/JW Winco), 'heart cam'. Also 'ballpoint pen spring' for printed builds.
- **rules_of_thumb**: 
  - Groove-floor steps several layers tall, about 0.5 to 1.5 mm, with the blocking face vertical; a metal coil spring, not a printed flexure; pin-to-groove clearance like a fine sliding fit (Kapy CAD, 'Push-push latching button with a heart cam')
  - Steps in the groove floor wear with repeated use and let the pin go the wrong way; offsetting the track's corners in the direction of travel restricts direction even when worn (Omron patent US20150107980A1)
  - Don't let a pull on the latched part load the pin and heart directly: Alps separated the driving member from the slider so pulling does not break the cam or bend the pin (US4916276A)
  - Add an inertia lock where a crash or drop could push the part further in and release it, as in car glove boxes and drawers (DaimlerChrysler/Fischer, EP1253271A2)
  - A reliable printed single-spring push latch can be as small as 12 mm x 10 mm using a pen spring and a paperclip follower; making the walls thinner caused failures under spring load (Justin Scroggs, Printables 1601839)
  - Push-push card connectors are rated for thousands of cycles (over 10,000; 5,000 for an ultra-low-profile microSD) and may need a secondary lock in vibrating equipment (MoarConn)

### When to use it

- **everyday_examples**: 
  - Handle-less kitchen cabinets and drawers that open with a push (Deslaurier; McMaster-Carr)
  - SD and microSD card slots that click the card in and push it out again (JAE patent; MoarConn)
  - Car glove boxes, drawers and storage compartments (EP1253271A2)
  - Latching push-button switches that stay in until pushed again (Alps patent; Thang, 'Push-push switch')
- **when_to_use**: Use a push-push latch when you want a clean front with no handle or knob, when the user has only one hand or a fingertip free, or when a small item such as a card, battery tray or lid should click in and pop out: handle-less cabinets and drawers, hidden compartments, printed boxes and cases, card and cartridge slots, and on/off push buttons. It is also a neat way to make a single button toggle between two states.
- **when_not_to_use**: Avoid it where the latched part is pulled or loaded outward, because the pin and heart track are small and can break (Alps patent), and where shocks or vibration could press the part in and release it (EP1253271A2; MoarConn), unless you add a second lock. Avoid it where children or accidental bumps should not open things, since mechanical push-to-open fittings open with a light push (Deslaurier); use a child-resistant latch or a magnetic catch that needs more force. For heavy doors, sink cabinets with little space behind the door, or big corner cabinets, Deslaurier advises against push-to-open latches; use a handle with a ball catch, roller catch or magnetic catch. If you only need a panel to stay shut, a magnetic catch or ball catch is simpler.
- **environment_limits**: Printed plastic springs and follower arms creep when the latch is left closed for days, so the latch stops popping out fully (Printables 534635, 376606); plastic springs always deform permanently under steady load and PLA is a very poor spring material (Hackaday). The groove steps wear with use (Omron patent). Vibration and shocks can unlatch it (MoarConn; EP1253271A2). *(unverified parts omitted)*
- **safety_notes**: The door or drawer pops open by spring force when bumped, which can surprise people or let small children open cupboards; lighter fittings open more easily by accident (Deslaurier). In vehicles, a crash can push a latched drawer or glove box in far enough to release it and throw its contents into the cabin (EP1253271A2). *(unverified parts omitted)*
- **common_failures**: Presses but doesn't latch because the floor steps are too low or rounded, or latches only sometimes because the spring is weak or relaxed (Kapy CAD). Seizes mid-cycle when the groove is too tight; skips or derails when too loose or too shallow (Kapy CAD). Stops latching after much use as the steps wear and the pin goes the wrong way (Omron patent). Cam surface broken or pin bent by someone pulling the latched part (Alps patent). Printed follower arms and springs deforming after being held latched (Printables 376606, 534635). Unwanted release from vibration or shock (MoarConn; EP1253271A2).
- **related**: 
  - Click-pen mechanism (rotating-cam push-push indexer): does the same push-on, push-off job with a toothed cam that turns one step per push instead of a pin running round a heart
  - Magnetic touch latch: a spring plunger with a magnet; holds a little more firmly and needs more force to open, but can't be used on drawers (Deslaurier)
  - Ball catch or roller catch: a spring-loaded ball or roller that simply holds a door shut; needs a handle to pull it open
  - Bistable compliant mechanism: a one-piece springy part with two resting positions, switched by pushing back and forth rather than pushing the same way twice
  - Push-to-close cam latch: latches automatically when a door is pushed shut, but opens with a handle or button rather than a second push (Southco)
  - Compliant one-piece latch: a printed springy latch released by bending a handle
  - Push-push locking bolt (indexing plunger): an industrial pin that extends and retracts with alternate pushes using a heart curve (GN 514)

### Pictures, videos and models

- **links**: 
  - [Push-push button 2 (Nguyen Duc Thang, YouTube channel thang010146)](https://www.youtube.com/watch?v=5JzjSsxSsb8): CAD animation of a pin on a pivoted bar running clockwise round a heart-shaped groove as the button is pushed and released (described in Thang's 2700 animated mechanisms index, part 3; title confirmed via YouTube oEmbed) *(licence: link only)*
  - [Push-push button 3 (Nguyen Duc Thang, YouTube channel thang010146)](https://www.youtube.com/watch?v=kJ0BlovBWtk): CAD animation of a compact push-push latch with a spring-loaded lever running in a groove of varying depth, 'used for locking small cabinet windows' (per Thang's index; title confirmed via YouTube oEmbed) *(licence: link only)*
  - [PUSH LATCH Mechanisms (DIY!) (This Old Tony, YouTube)](https://www.youtube.com/watch?v=3_wPH904a_8): Machinist video about push latch mechanisms and building one (title and channel confirmed via YouTube oEmbed; content not viewed) *(licence: link only)*
  - [Push-push latching button with a heart cam (Kapy CAD)](https://kapycad.com/en/learn/joints/push-push-latching-button): Illustrated step-by-step explanation of the heart track (rest, pressed, latched, released) with 3D-printing design rules and a failure table *(licence: link only)*
  - [US4916276A Push lock mechanism (Alps Electric, Google Patents)](https://patents.google.com/patent/US4916276A/en): Patent drawings of a heart-shaped cam groove, driving pin and springs in a push-lock switch *(licence: link only (patent document))*
- **make_it_yourself**: 
  - [Push-push Mechanism (Steve DeGroof, Printables)](https://www.printables.com/model/496329-push-push-mechanism): Simple push-on, push-off mechanism using a standard ballpoint pen spring; works well in PETG; versions with an actuator arm, a click-fidget enclosure and a robust enclosure with M3 mounting tabs. Read through the Printables public API because the web page blocks automated access *(licence: CC BY)*
  - [Ultra-Compact Push Latch Mechanism (Paperclip + Pen Spring) (Justin Scroggs, Printables)](https://www.printables.com/model/1601839-ultra-compact-push-latch-mechanism-paperclip-pen-s): Push-push latch as small as 12 mm x 10 mm using a bent paperclip as the follower and a pen spring, with single- and multi-spring versions. Read through the Printables public API *(licence: CC BY-NC-SA)*
  - [Push Latch Mechanism (c_bot, Printables)](https://www.printables.com/model/273742-push-latch-mechanism): Compact push latch unit about 30 mm x 30 mm, printed in PLA with two small compression springs, used to store and release portable hard drives. Read through the Printables public API *(licence: CC BY)*
  - [Push Latch Case (Adam Cook, Printables)](https://www.printables.com/model/376606-push-latch-case): Printed case with a push-push latch and printed spring; its update notes show how a printed follower arm creeps when held latched and how the track was redesigned to avoid it. Read through the Printables public API *(licence: CC BY-NC-SA)*
- **diagram_idea**: A heart-shaped loop groove with the pin shown at four numbered positions (1 rest at the bottom, 2 fully pushed on one side, 3 latched in the notch at the top, 4 pushed again on the other side), arrows showing the one-way path, a spring pushing the slider outward, and a small side section showing the steps in the groove floor.
- **sources**: 
  - https://kapycad.com/en/learn/joints/push-push-latching-button
  - https://patents.google.com/patent/US4916276A/en
  - https://patents.google.com/patent/US20150107980A1/en
  - https://patents.google.com/patent/US20020192991A1/en
  - https://patents.google.com/patent/EP1253271A2/de
  - https://www.konstruktionspraxis.vogel.de/verriegelt-nach-dem-kugelschreiberprinzip-a-261590/
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.youtube.com/watch?v=5JzjSsxSsb8
  - https://www.youtube.com/watch?v=kJ0BlovBWtk
  - https://www.youtube.com/watch?v=qXnld2Yqf7I
  - https://www.youtube.com/watch?v=3_wPH904a_8
  - https://www.youtube.com/watch?v=jB9ymoAkcQ4
  - https://www.mcmaster.com/products/push-to-open-latches/
  - https://www.deslaurier.com/en-us/learning-centre/comparing-kitchen-cabinet-latches-tip-on-vs.-touch-latch
  - https://www.moarconn.com/blog/Push-Push-and-Beyond-The-Evolution-and-Inner-Workings-of-SD-Card-Connector-Mechanisms_b15649
  - https://southco.com/en_us_int/resources/Push-to-Close-Latching-The-Secret-of-Simple-Operation
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://www.printables.com/model/496329-push-push-mechanism
  - https://www.printables.com/model/1601839-ultra-compact-push-latch-mechanism-paperclip-pen-s
  - https://www.printables.com/model/273742-push-latch-mechanism
  - https://www.printables.com/model/376606-push-latch-case
  - https://www.printables.com/model/534635-fully-3d-printable-push-latch-mechanism-wip
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** adjustable, environment_limits, play_and_precision, processes, safety_notes, tools_needed

## 26 Sear and trigger (trip release mechanism)

*locks, latches & catches.* A small catch holds back a large stored force (spring, weight) and a light touch on the trigger releases it, as in mousetraps, crossbows and launchers

### What it is

- **plain_name**: A tiny catch that holds back a strong spring or stretched band, so that a light touch on a trigger lets it all go at once
- **term**: Sear and trigger (trip mechanism, trip latch, catch-and-trigger release)
- **aliases**: 
  - trigger mechanism / trigger release
  - trip release / trip latch / trip mechanism (circuit breakers)
  - catch and trigger / latch and cocking lever ('snap motion' in Nguyen Duc Thang's catalogue)
  - sear (the catch itself); the notch it sits in is called the 'bent' in British usage
  - nut and trigger lock / rolling nut (medieval crossbows)
  - nuji, 'crossbow mechanism' (ancient Chinese bronze three-piece trigger)
  - bait pedal / treadle trigger / trip (mousetraps and snap traps)
  - release hook / releasing grip (heavy lifting)
  - hair trigger (a very light, sensitive release)
- **family**: locks, latches & catches
- **other_families**: springs & energy storage, quick-release & tool-free, powered & active connectors
- **one_liner**: A small hooked catch (the sear) holds a part that is loaded by a big spring, band or weight, and a trigger lever pulls the catch off with a light touch, releasing all the stored energy in an instant.
- **complexity**: A few parts: (1) the frame or stock; (2) the loaded part that stores or holds the energy (a hammer, striker, mousetrap bar, crossbow nut, catapult arm or hook jaw) with a notch or ledge; (3) the sear, a small catch that sits in that notch; (4) the trigger, a lever that moves the sear (sometimes the trigger is the sear); (5) light springs that push the sear and trigger back into place; (6) the main energy store (coil or torsion spring, rubber band, bow). Some designs add an extra lever between trigger and sear to lighten the pull, like the three-piece Chinese bronze lock (hook, sear, trigger).
- **how_it_works**: The main spring pushes the loaded part against the sear's small hooked face. The faces are shaped so that this big push points almost straight into the sear's pivot, so it barely tries to turn the sear; the sear is held in place by its own light spring and by friction. The trigger is a long lever, so a small finger force at its end makes a larger force at the sear, enough to slide the sear off the notch. The moment the contact slips past the edge, nothing holds the loaded part and it snaps free (Wikipedia, Sear; Crossbow Building Wiki). Adding a second lever stage, or a roller at the contact, cuts the needed force further, which is how circuit breakers release a large stored spring with a small solenoid (US 5,508,487; US 5,713,459).

### Finder attributes

- **job**: 
  - lock, and release by hand: holds a loaded part until someone (or something) pulls the trigger
  - store energy: keeps a spring, band or bow loaded and ready
  - hold or release using power: servo- or solenoid-tripped versions let a small electric actuator release a large load
- **motion**: multiple: the sear and trigger pivot (rotate) through a few degrees; the released part then swings or slides freely (a mousetrap bar rotates about half a turn; a crossbow nut rotates; a plunger slides)
- **degrees_of_freedom**: 1 per lever: the trigger, the sear and the loaded part each swing about their own pivot pin. While cocked, the chain is locked (0); after release the loaded part is free to move in its one direction
- **special_behaviour**: 
  - hand-release only (locks under load, releases when a person operates it): it holds the full stored force until the trigger is pulled
  - quick-release: release is instant, with no unwinding or unscrewing
  - self-locking (holds under load, won't back-drive): only when the catch faces are shaped correctly; if they slope the wrong way the load pushes the sear out and it fires by itself (Crossbow Building Wiki)
  - fail-safe or breakaway: trip devices use it to let go automatically, for example a mousetrap's bait pedal or a circuit breaker's trip latch released by a bimetal strip or solenoid when a fault occurs (Wikipedia, Circuit breaker)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the sear's hook sits in a notch on the loaded part
  - friction or clamping (force-fit): friction at the contact helps hold the sear in and sets how hard the trigger feels
  - spring force (a spring or springy part presses it in place): light springs keep the sear and trigger engaged
- **input_output**: Not a motion transmission. It works as a force amplifier and time-release: a small, short trigger movement releases a large stored force. Back-drivable: no while cocked, provided the catch faces are shaped correctly. *(unverified parts omitted)*
- **power**: passive (no power needed) in traps, crossbows and toys. Powered versions use a servo, solenoid or bimetal strip to move the sear, e.g. a servo-released bungee plane launcher (Printables 413432) and circuit breakers (Wikipedia). *(unverified parts omitted)*
- **removability**: tool-free quick release: it is a release mechanism; you re-cock (reset) it by hand or with a cocking lever
- **reuse_cycles**: many times: it is re-cocked after each release, but the small contact faces wear; a mild-steel crossbow trigger bearing on a hardened nut wore badly 'within a few hundred shots' at about 300 lb draw (Crossbow Building Wiki)
- **tools_needed**: none to operate or reset; building one needs pivot pins or screws and springs
- **seal**: none
- **load**: Light to heavy, depending on material: hardened steel sears hold crossbows of hundreds of pounds and industrial loads; printed plastic versions suit rubber-band toys and small launchers (a PET-printed launcher trigger was tested at 10 kg pull, Printables 413432; the printed Chinese crossbow-trigger model 'is unlikely to carry any real load'). Strong in the direction the load pushes into the hook; weak if the faces are chipped, rounded or loaded from the side, and the small contact area sees very high contact stress.
- **adjustable**: Sometimes: better designs let you change how deep the sear overlaps the notch or how much the faces slope, which changes trigger weight and 'creep' (Wikipedia, Sear: larger sear engagement gives more creep, shorter gives a crisper release). Simple printed or wooden versions are not adjustable; you file or reprint the faces.
- **play_and_precision**: Not a locating joint. The trigger usually moves a little before release ('creep'), more with deeper engagement (Wikipedia, Sear). Release timing is repeatable if the faces are hard and clean, but wear, dirt and grease change the feel over time.
- **access_needed**: not applicable: it is a mechanism worked by its trigger, which can be placed wherever a finger, a string pull or an actuator can reach
- **materials**: PLA, PETG or PET for printed toys and demonstrators. It is a mechanism, not a way of joining materials. *(unverified parts omitted)*
- **maker_difficulty**: moderate: easy to print a working toy, but getting a light, reliable release that never fires by itself takes careful shaping of the catch faces, hard contact surfaces and trial and error, and the stored energy makes testing hazardous

### Making it

- **processes**: 
  - 3D print (FDM): the usual maker method for toys, catapults, slingshots and demonstrators
  - CNC or laser cut: flat metal sears and triggers can be cut from plate (the 'Basic Trigger Mechanism for Releasing a String' is suggested for a CNC laser, plasma or wire EDM, Printables 1784755)
  - woodwork: crossbow stocks and wooden traps, with metal or horn contact parts
  - sheet metal: mousetrap hold-down bars and catches are bent wire and pressed sheet
  - off-the-shelf part: a spring mousetrap is a ready-made spring, bar and trip; release hooks and RC servos are sold separately *(unverified parts omitted)*
- **print_in_place**: no in most designs: the housing, sear and trigger print as separate flat parts joined by pins, plus a separate spring or rubber band. One exception is a printed 'walk the plank' mouse trap whose springy latch and plank are a single PLA piece (Printables 132235).
- **making_tips_3d_printing**: Orientation: print the hook, sear and trigger lying flat so the catch edge is built from continuous perimeters in the plane of the bed and the load never tries to split layers; the Chinese crossbow-trigger model prints the teeth, sear and trigger flat, and the slingshot trigger model prints each part 'in various orientations (to maximise inter-layer strength)' (Printables 1578360, 1625652). Pins: an integrated pin printed lying flat is weak, so thicken its walls or give it 100% infill, or use a metal pin or screw (Printables 1578360; the slingshot uses 2.9 mm screws). Clearance: 0.2 mm on mating faces and pins worked for the crossbow-trigger model, which also adds 1 mm chamfers to avoid elephant's foot; sand the pin holes so parts turn freely (Printables 1578360). Infill: raise infill locally where the load goes in (the slingshot uses 30% gyroid with 40-60% modifiers at the stressed ends; Printables 1625652). Catch faces: shape them so pulling the trigger lets the loaded part move very slightly forward (light pull) rather than backwards (stiff pull), but not so far that it fires by itself (Crossbow Building Wiki). Springs: use separate light springs for the trigger return and for the sear; one designer found that linking both with one spring made the trigger 'noticeably heavier' (Printables 1625652). Use metal springs or rubber bands for the main energy store; plastic springs left loaded creep and lose force (DuPont, Module I, pp. 36-37). Do not leave a printed mechanism cocked for long, because the plastic catch can creep and either jam or let go. Test at low power first, wear safety glasses, and fire into something soft (Printables 1625652). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'torsion spring', 'compression spring', 'extension spring' (sear and trigger returns); 'dowel pin' or 'shoulder bolt' (pivots); 'latex tubing' or 'rubber band' (energy store); 'mouse trap' (a cheap ready-made spring and trip, as used in mousetrap cars); 'release hook', 'quick release hook' or 'cargo hook' (ready-made load-release hooks); 'RC servo' or 'push-pull solenoid' (to trip it electrically).
- **rules_of_thumb**: 
  - Alignment of the catch faces decides the feel: if pulling the trigger drags the string (or hammer) slightly backwards, the pull is very stiff; if it lets it move slightly forwards, the pull is comfortable; taken too far, the crossbow 'may shoot spontaneously' (Crossbow Building Wiki, Designing medieval nut and trigger crossbow locks).
  - When one contact surface is much harder than the other, make the harder one rounded so it does not cut the softer one; better, make both hard (Crossbow Building Wiki).
  - Misfires (failure to release) come from friction in the nut's socket, a heavy nut and badly placed nut fingers; fix with a round, loose but stable fit and oil (Crossbow Building Wiki).
  - The force to push a catch off a sloped face grows with the slope and friction: force = P x (mu + tan a) / (1 - mu tan a), where P is the force pressing the faces together and a is the face angle (Covestro snap-fit design guide, pp. 12-14; the same wedge rule applies to a sear by analogy). Plastic-on-steel friction coefficients range from about 0.2-0.35 for POM (acetal) to 0.5-0.65 for ABS, and are higher for plastic on the same plastic (Covestro, Table 3, p. 15).
  - A two-stage trip latch 'requires less force to move the latch than a simple one stage solid finger design' (US 5,508,487, ABB circuit breaker); a roller at the latch face minimizes friction (US 5,713,459, Eaton).
  - Larger sear engagement gives more creep in the trigger pull; shorter engagement gives a crisper release (Wikipedia, Sear (firearm)).
  - Plastic is a poor material for any spring that stays loaded or must store energy; 'any spring which will be under a constant load or deflection, or which is required to store energy, should be made of a lower creep material such as metal' (DuPont General Design Principles, Module I, p. 37). *(unverified parts omitted)*

### When to use it

- **everyday_examples**: 
  - A spring mousetrap: a hold-down bar keeps the wire striker cocked by resting on a small catch on the bait pedal, and 'the slightest pressure on the trigger' releases it (US 528,671, Hooker, 1894)
  - A crossbow: the rotating nut holds the drawn string and the trigger lets it roll free (Wikipedia, Crossbow)
  - A household circuit breaker: stored spring energy opens the contacts when the trip latch is released by a bimetal strip or solenoid (Wikipedia, Circuit breaker)
  - Toy catapults, rubber-band guns and slingshots with a trigger (many printable examples on Printables)
- **when_to_use**: Use it when you need to hold a big stored force steady for a while and then let it go instantly and on demand, with only a light touch: traps, launchers (glider and bungee plane launchers, catapults, slingshots, rubber-band toys), drop and release mechanisms (servo payload drops), kinetic art and chain-reaction machines, and safety trips that must let go automatically when something happens.
- **when_not_to_use**: Avoid it when the load should be released slowly or controllably: use a brake, damper, winch or lead screw instead. Avoid printed plastic sears for large forces or for holding cocked for long periods, because the small catch creeps, wears and can fire by itself; use hardened metal faces. Never use a home-made release to hold loads over people; use rated, certified release hooks. Where accidental release is dangerous, add a separate safety catch. If you only need a lid or door to stay shut, a simple latch or over-centre catch is safer, because it does not store energy.
- **environment_limits**: Plastic catches and springs creep under constant load (DuPont, pp. 36-37), so a printed mechanism left cocked may slowly deform, jam, or let go on its own. Shocks, drops and vibration can jolt a shallow or worn sear off its notch. *(unverified parts omitted)*
- **safety_notes**: Stored energy: treat a cocked mechanism as loaded; keep fingers, face and other people out of the path of whatever it releases, and uncock it before carrying, storing or taking it apart. Wear safety glasses when testing and fire into something soft (Printables 1625652). Mousetraps and strong springs can injure fingers. Add a safety catch that blocks the trigger when needed; ancient Chinese crossbow locks sometimes had one (ATARN), and industrial release hooks use a two-motion safety detent (FIRGELLI blog). Printed parts can shatter under shock. Making or modifying trigger parts for firearms is tightly regulated and illegal in many places; this entry covers traps, toys, launchers and release devices only.
- **common_failures**: Fires by itself (spontaneous release): too little overlap, faces sloped so the load pushes the sear out, a worn or rounded edge, a weak sear spring, or a knock; restore a crisp edge, increase engagement a little, strengthen the sear spring, and add a safety. Will not release or feels gritty and heavy: faces sloped so the trigger must drag the load back, too much overlap, rough plastic-on-plastic contact, dirt or thick grease; reshape, smooth and lubricate, add leverage or a second stage. Trigger pull creeps upward over time: contact faces wearing or getting dented (FIRGELLI blog). Soft face worn away by a harder one: make the harder face rounded, or harden both (Crossbow Building Wiki). Pivot pins bend or holes wear oval: use metal pins and support both sides. Printed catch deforms while left cocked (creep): do not store it cocked; use metal inserts.
- **related**: 
  - Ratchet and pawl: a pawl is a similar catch, but it holds one way at every tooth instead of releasing a single stored shot
  - Escapement: releases stored energy in small repeated steps instead of all at once
  - Over-centre latch (toggle latch): holds by pushing past a dead point; it clamps rather than releasing stored energy
  - Rotary latch (claw latch): a car-door latch whose jaw is held by a pawl that is tripped by a lever or cable, a close cousin
  - Ball-lock pin and release pin: you pull a pin to let a load go; simpler, but needs a larger pull under load
  - Shear-pin coupling (breakaway link): lets go automatically by breaking at a set load instead of being tripped
  - Solenoid or electromagnetic latch: a powered catch that holds or lets go on a signal
  - Push-push latch: releases on a second push rather than by a separate trigger

### Pictures, videos and models

- **links**: 
  - [Snap motion 1 (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=7y-Oez0v2l8): CAD animation of a spring-loaded latch holding a cocking lever and releasing it when the latch is moved (Thang, 2700 Animated Mechanical Mechanisms, Part 3, p. 31; title checked with YouTube oEmbed) *(licence: link only)*
  - [Noix corde carreau arbalette.svg (Wikimedia Commons), by Christophe Dang Ngoc Chan](https://commons.wikimedia.org/wiki/File:Noix_corde_carreau_arbalette.svg): Labelled diagram of a medieval crossbow lock: the nut, the string, the bolt (quarrel) and the trigger *(licence: GFDL 1.2+ and CC BY-SA 3.0/2.5/2.0/1.0)*
  - [Han crossbow trigger mechanism.jpg (Wikimedia Commons), photo by Gary Lee Todd](https://commons.wikimedia.org/wiki/File:Han_crossbow_trigger_mechanism.jpg): Photo of Han dynasty bronze crossbow trigger mechanisms (the three-piece hook, sear and trigger lock) *(licence: CC0 1.0 (public domain))*
  - [US 528,671: Mouse trap (William C. Hooker, 1894), Google Patents](https://patents.google.com/patent/US528671A/en): Patent drawings of the classic spring-bar mousetrap: wire spring and jaw, locking bar and hinged bait trigger with its catch *(licence: patent document; link only)*
  - [bungee plane launcher trigger mechanism (f2knpw)](https://www.youtube.com/watch?v=WiMVHB2DOCs): A printed crossbow-style trigger for a bungee plane launcher, released by an RC servo (title checked with YouTube oEmbed; linked from Printables 413432) *(licence: YouTube standard licence; link only)*
- **make_it_yourself**: 
  - [Ancient Chinese Crossbow Trigger (nuji), by ParableOfTheVase](https://www.printables.com/model/1578360-ancient-chinese-crossbow-trigger-nu-ji-nu-ji): Educational printable model of the three-piece bronze crossbow lock (housing, two-part hook, sear, trigger, pins) that resets by pulling back the hook's spur; 0.2 mm clearances, 1 mm chamfers, parts printed flat; 'unlikely to carry any real load' (read through the Printables API) *(licence: Creative Commons Attribution (CC BY))*
  - [Slingshot - lock and load trigger, by Rosti](https://www.printables.com/model/1625652-slingshot-lock-and-load-trigger): A printed slingshot built to explore a light but reliable trigger lock that re-cocks trigger and bolt in one motion, with detailed notes on print orientation, infill modifiers, screws and springs, and safety (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives)*
  - [Catapult with trigger, by choosingcolours](https://www.printables.com/model/927796-catapult-with-trigger): A flat-printed toy catapult whose arm locks into a trigger when pulled back and fires when the base is pulled apart; no supports (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [trigger mechanism for bungee plane launcher, by freedom2000](https://www.printables.com/model/413432-trigger-mechanism-for-bungee-plane-launcher): A servo-released, crossbow-style trigger printed in PET from plastic bottles, tested with a 10 kg pull; needs a metal spring for the lock (read through the Printables API) *(licence: Creative Commons Attribution (CC BY))*
  - [One-Piece Mouse Trap, by LoboCNC](https://www.printables.com/model/132235-one-piece-mouse-trap): A single-piece printed 'walk the plank' trap: a springy latch lets the plank tip when the mouse reaches the end, then it resets itself; the spring is tuned for PLA (read through the Printables API) *(licence: Creative Commons Attribution-ShareAlike)*
- **diagram_idea**: Side view of a mousetrap-style catch in two frames: frame 1 shows a big spring arrow pushing a bar against a small hooked sear, with the contact force arrow pointing almost straight through the sear's pivot and a long trigger lever beside it; frame 2 shows a small finger arrow on the trigger's far end, the sear slipping off the edge, and the bar snapping free with a motion blur.
- **sources**: 
  - https://en.wikipedia.org/wiki/Sear_(firearm)
  - https://en.wikipedia.org/wiki/Mousetrap
  - https://patents.google.com/patent/US528671A/en
  - https://en.wikipedia.org/wiki/Crossbow
  - https://crossbow.fandom.com/api.php?action=parse&page=Designing_medieval_nut_and_trigger_crossbow_locks&prop=wikitext&format=json
  - https://atarn.org/chinese/bjng_xbow/bjng_xbow.htm
  - https://commons.wikimedia.org/wiki/File:Noix_corde_carreau_arbalette.svg
  - https://commons.wikimedia.org/wiki/File:Han_crossbow_trigger_mechanism.jpg
  - https://en.wikipedia.org/wiki/Circuit_breaker
  - https://patents.google.com/patent/US5508487A/en
  - https://patents.google.com/patent/US5713459A/en
  - https://www.firgelliauto.com/blogs/mechanisms/releasing-grip
  - https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.youtube.com/watch?v=7y-Oez0v2l8 (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=WiMVHB2DOCs (verified via YouTube oEmbed)
  - https://www.printables.com/model/1578360-ancient-chinese-crossbow-trigger-nu-ji-nu-ji (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1625652-slingshot-lock-and-load-trigger (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/927796-catapult-with-trigger (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/413432-trigger-mechanism-for-bungee-plane-launcher (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/132235-one-piece-mouse-trap (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1784755-basic-trigger-mechanism-for-releasing-a-string (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, input_output, making_tips_3d_printing, materials, power, processes, rules_of_thumb

## 27 Compliant one-piece latch (flexure latch)

*locks, latches & catches.* A latch made as one springy printed part, where bending the handle pulls the catch back, with no pins or separate springs

### What it is

- **plain_name**: A springy plastic hook that is part of the lid or box itself: it clicks shut on its own, and you press or lift its tab to bend the hook out of the way and open it, with no pins or metal springs
- **term**: Compliant latch (flexure latch)
- **aliases**: 
  - flexure latch
  - one-piece latch / integral latch / monolithic latch
  - compliant hook latch / compliant clasp
  - releasable (separable) cantilever snap fit with a release tab
  - press-to-release tab / squeeze-to-release latch
  - spring latch or snap latch (maker names for printed versions, some of which use a separate printed spring)
  - latch with integral spring / molded-in spring latch
  - print-in-place latch
  - metamaterial door latch (HPI research name for a latch made from a grid of flexing cells)
- **family**: locks, latches & catches
- **other_families**: compliant mechanisms & flexures, snap & clip fits, print-in-place & 3D-printing joints, quick-release & tool-free
- **one_liner**: A latch whose hook, spring and release handle are all one flexible piece of plastic: closing the lid bends the hook over a lip until it snaps behind it, and pressing the handle bends the same springy beam the other way to let go.
- **complexity**: Single piece, plus the part it catches on. The latch piece has: a hook (catch) with a sloped front face and a steep back face; a thin springy beam (the flexure) that carries the hook and acts as both hinge and spring; a handle, tab or thumb pad that bends the beam; and a thick root where it joins the lid or box. The other part has a lip, slot or ledge (the keeper or strike) for the hook to catch behind.
- **how_it_works**: When you close the lid, the sloped front of the hook slides over the keeper and bends the springy beam aside; once the hook passes the lip the beam springs straight again and the hook drops behind it with a click. Pulling on the lid now pushes against the steep back face of the hook, which does not bend the beam, so it stays shut. To open, you press or lift the handle, which bends the same beam and pulls the hook clear of the lip. Because the bending beam replaces the pin and the spring of an ordinary latch, the whole latch is one moulded or printed part (Wikipedia, Compliant mechanism; Covestro snap-fit guide, pp. 3-5). A research version from the Hasso Plattner Institute goes further: a single block of cells turns the rotation of a door handle into the straight-line motion of the latch bolt (HPI, Metamaterial Mechanisms, UIST 2016).

### Finder attributes

- **job**: join and hold: keeps a lid, door, cover or two housing halves shut, lock, and release by hand: stays latched until someone presses or lifts the tab
- **motion**: flex: the hook moves a few millimetres in and out as the beam bends; the latched parts themselves do not move
- **degrees_of_freedom**: 1 inside the latch (the hook bends in and out along one direction); 0 between the two latched parts once it is shut
- **special_behaviour**: 
  - hand-release only (locks under load, releases when a person operates it): pulling on the lid pushes on the steep back of the hook and cannot open it; only bending the handle does
  - quick-release: one press or flick of the tab opens it, and it latches itself again when pushed shut (a 'compliant hook latch that auto-locks when closed', Printables 1366490)
  - fail-safe or breakaway: optional; if the back face of the hook is sloped instead of square, a hard enough pull pops it open instead of breaking it (a separable snap fit; DuPont p. 73, Covestro p. 14)
- **holding_principle**: shape (the parts interlock; form-fit): the hook sits behind the lip, spring force (a spring or springy part presses it in place): the springy beam keeps the hook pushed into place
- **input_output**: not applicable: it is a holding joint, not a motion converter (the HPI metamaterial latch is an exception: handle rotation -> straight-line bolt travel inside one printed block)
- **power**: passive (no power needed)
- **removability**: tool-free quick release
- **reuse_cycles**: many times, if the beam is designed for repeated bending: plastics makers allow only about a half to a third of the one-time bending strain for snap arms that are opened frequently (DuPont Table 10.06; Covestro Table 2 suggests about 60%). *(unverified parts omitted)*
- **tools_needed**: none: it is part of the printed or moulded part and is worked by hand
- **seal**: none by itself: a latch alone leaves a gap; it can hold a lid against a gasket, but a plastic latch that is kept bent to squeeze a seal will creep and loosen (DuPont, p. 36)
- **load**: Light to medium. Strongest when the pull comes straight against a square back face of the hook; weaker with a sloped back face (it is meant to pop open), when pried from the side, or when the handle is knocked. The beam root is the weak point, and FDM prints are weakest if the beam is built up layer by layer in the height direction (Hubs).
- **adjustable**: no: the holding force is set by the beam thickness and length, hook depth and face angles; parametric models let you change them before printing (e.g. the LatchCutoutAngle parameter of Printables 782128, where lower is tighter)
- **play_and_precision**: Small to noticeable: the parts need a clearance to go together (about 0.3 mm for printed moving parts, Prusa; 0.5 mm for FDM snap fits, Hubs), so a latched lid can rattle slightly unless the latch is designed to pull it in. The sloped lead-in face tolerates a little misalignment when closing.
- **access_needed**: one side only (blind): the handle or tab is on the outside; some hidden versions are released by pressing through a hole or slot
- **materials**: Injection moulded: acetal (POM, e.g. Delrin), nylon (PA) and other tough thermoplastics (DuPont; Covestro). 3D printed: PETG, ABS or nylon; SLS nylon (PA12) is the best performer, while PLA and standard SLA resins are brittle and best avoided (Hubs); one maker recommends PETG 'so the hook doesn't deform over time' (Printables 1366490). Flexible TPU (NinjaFlex) was used for HPI's one-piece door latch (Hackaday, 2016).
- **maker_difficulty**: moderate: it prints in one piece with the box or lid, but getting the beam stiffness, hook depth and clearance right usually needs a small test print; using a proven model makes it easy

### Making it

- **processes**: 
  - 3D print (FDM): the usual maker method; the latch prints as part of the box or lid
  - 3D print (resin): use tough or durable resins for functional snap latches; standard resins are brittle (Formlabs; Hubs)
  - 3D print (SLS or MJF nylon): the most durable printed option (Hubs)
  - injection moulding: how commercial one-piece latches, snap arms and buckles are made (DuPont; Covestro) *(unverified parts omitted)*
- **print_in_place**: yes: the springy beam, hook and handle are printed as part of the box or lid, often together with print-in-place hinges (e.g. the parametric 'Latching Box' prints in place with zero assembly, Printables 782128). Some makers print the latch separately and glue it on (Printables 1469656).
- **making_tips_3d_printing**: Orientation: lay the part out so the springy beam bends within the plane of the print bed, so its layers run along the beam and bending never pulls layers apart; avoid a beam that is built up vertically (Z), because layer bonding lowers strength (Hubs). Beam shape: make it at least 5 mm wide (Hubs), taper it towards the hook (Covestro: tapering linearly to half thickness allows more than 60% more deflection; DuPont Fig. 10.22 tapers to three-quarters), and prefer a longer, thinner beam to a short, thick one, because a longer hook reduces stress at the base (Formlabs; DuPont Figs. 10.20-10.21). Root: add a fillet at least half the beam thickness where it joins the part (Hubs). Walls: print the beam solid with enough perimeters (3D Printy's spring latch; Printables 146100); one printed spring latch uses a 1.2 mm thick spring (Printables 1510729). Hook: a lead-in slope of about 30-45 degrees makes it close easily (DuPont Fig. 10.22 and p. 73); a square (90 degree) back face holds firmly, a 45 degree back face lets it pop open under a hard pull (DuPont p. 73). Keep the undercut shallow so the beam bends only a little; for a latch that is opened often, design for the 'used frequently' strain values (DuPont Table 10.06). Rest state: the beam should be straight and unstressed when latched (Covestro p. 3); do not rely on a permanently bent beam to hold a lid tight, because plastic springs held bent creep (DuPont p. 36). Clearance: start at 0.3 mm (Prusa) to 0.5 mm (Hubs) around the hook and handle, and test your printer with a print-in-place tolerance test first (Printables 782128). Material: PETG, ABS or nylon for many cycles; PLA works for occasional use (several PLA models) but is a poor spring material (Hackaday, 2026). Typical failures: the beam cracks at its root (add a fillet, taper it, reduce the hook depth, use PETG or nylon), the hook fuses to the keeper (more clearance, fix elephant's foot), or the latch is too stiff or too loose (tune the hook depth, beam thickness or cut-out angle with small test prints).
- **off_the_shelf_parts**: Usually none: the latch is part of the printed or moulded piece. Ready-made alternatives and search terms: 'side release buckle' (a one-piece compliant catch for straps), 'plastic snap latch', 'push button latch', 'cabinet catch', 'magnetic catch'. To make the spring more durable, some designs swap the plastic beam for a metal one: search 'flat spring', 'leaf spring' or 'spring steel strip'.
- **rules_of_thumb**: 
  - Allowable strain for snap arms (used once / used frequently): acetal Delrin 100: 8% / 2-4%; Delrin 500: 6% / 2-3%; nylon Zytel 101 dry: 4% / 2%, at 50% RH: 6% / 3%; Hytrel elastomer: 20% / 10% (DuPont General Design Principles, Module I, Table 10.06, p. 75).
  - For frequent separation and rejoining, use about 60% of the single-assembly strain limit (Covestro, Snap-Fit Joints for Plastics, Table 2, p. 12; e.g. PC 4%, PC/ABS 2.5% for one assembly).
  - An arm whose thickness tapers linearly to half at the tip allows more than 60% more deflection than a straight arm (Covestro, p. 12).
  - Cantilever lug: taper from t to about 3/4 t with a 30-45 degree lead-in (DuPont Fig. 10.22); for cylindrical snap fits a 45 degree return angle suits separable joints and 90 degrees makes them permanent, with a 30 degree lead-in (DuPont p. 73).
  - The force to open or close over a sloped face is W = P x (mu + tan a) / (1 - mu tan a), with the lead angle for closing and the return angle for opening; friction coefficients against steel are about 0.20-0.35 for POM, 0.30-0.40 for PA and 0.50-0.65 for ABS, and higher between two parts of the same plastic (Covestro, pp. 14-15).
  - After latching, snap features should return to a stress-free state (Covestro, p. 3); plastic springs suit intermittent action, and springs under constant deflection should be spring steel (DuPont, p. 36).
  - 3D-printed snap fits: minimum width 5 mm, root fillet at least 0.5 x beam thickness, about 0.5 mm clearance for FDM (0.3 mm for SLA, SLS and MJF), don't build the beam in the Z direction, use tough materials such as ABS, PETG or nylon and avoid PLA and standard resins (Hubs, How to design snap-fit joints for 3D printing).
  - Start with at least 0.3 mm clearance between printed moving parts; walls thinner than one perimeter (about 0.45 mm with a 0.4 mm nozzle) cannot be printed (Prusa Knowledge Base).
  - For FDM snap-fit enclosures Formlabs suggests a conservative tolerance of 1.5-2.0 mm, versus 0.4 mm for its SLA and SLS printers, and says a longer hook and a lower hook height reduce stress (Formlabs, Designing 3D printed snap-fit enclosures).

### When to use it

- **everyday_examples**: 
  - The clip on an Ethernet (RJ45) plug: 'a plastic tab on the plug locks against a ridge in the socket' and you press the tab to release it (Wikipedia, Modular connector)
  - Backpack buckles and other plastic side-release buckles, whose springy prongs you squeeze to release (Wikipedia, Compliant mechanism lists backpack latches)
  - Snap-on equipment covers whose snap arms 'can be released by pressing on the two tongues' (Covestro snap-fit guide, Fig. 3)
  - Printed boxes and cases with a built-in springy clasp (e.g. BYU's compliant-latch treasure chest)
- **when_to_use**: Use it for lids, doors, battery covers, cases, drawers and enclosures that you open by hand now and then and that should click shut by themselves, when you want no screws, pins or metal springs and the whole thing to print or mould in one go. It suits light loads, low cost, quick assembly and designs that must stay tidy and flush.
- **when_not_to_use**: Avoid it for heavy loads, anything that must not open if dropped or pried, and security or child-resistant closures: use a draw (over-centre) latch, a metal spring latch or a lock. Avoid it where the latch must press a lid hard against a seal all the time, because the bent plastic creeps and loosens: use a draw latch or screws. Avoid PLA versions for latches opened many times a day or used in hot places: use PETG, ABS or nylon, or a latch with a metal spring. If the catch must hold without any bending at all, a magnetic catch or ball catch may be simpler.
- **environment_limits**: Plastic springs creep and lose force if kept bent, and temperature and chemicals change their spring properties (DuPont, p. 36). Nylon's allowable strain changes with moisture (Zytel 101: 4% dry, 6% at 50% relative humidity, for one-time assembly; DuPont Table 10.06). *(unverified parts omitted)*
- **safety_notes**: Low hazard. A cracked latch can let a lid fall open unexpectedly, so do not use one to hold anything heavy overhead or anything that must stay shut for safety. Small printed parts are a choking hazard for young children.
- **common_failures**: Beam cracks at its root after some openings (fatigue at the stress concentration where flexures bend; Wikipedia, Compliant mechanism): add a fillet, taper the beam, make it longer, reduce the hook depth, and use PETG, ABS or nylon. Beam takes a set so the latch goes loose or won't catch (creep): don't leave it bent; make it rest straight when latched. Snaps on the first bend: the beam is printed with layers across it, the hook is too deep, or the material is brittle (PLA, standard resin); reorient and reduce strain. Won't open, or opens too easily: change the back-face angle or the hook depth. Hook or handle fused to the box: too little clearance or elephant's foot. Lid rattles: add a small preload or a locating lip, accepting some creep.
- **related**: 
  - Cantilever snap fit: the same springy hook, but usually meant to join parts once or rarely, with no release handle
  - Side-release buckle: a compliant catch for straps, released by squeezing two prongs
  - Draw latch (over-centre latch): pulls a lid tight and holds it by passing a dead point; stronger and better for seals, but has several parts
  - Spring-loaded slide or bolt latch: a separate bolt pushed by a metal spring; stronger and longer lived, more parts
  - Printed spring latch with a separate spring and button (e.g. Printables 1510729): all printed but in three parts, so the spring can be swapped
  - Push-push latch: opens and closes by pushing, with no handle
  - Magnetic catch and ball catch: hold a door by magnet or spring ball with no hook, and release when pulled hard enough
  - Compliant detent (flexure click arm): the same springy-arm idea used to click into set positions instead of locking

### Pictures, videos and models

- **links**: 
  - [3D Printed Door Latch Has One Moving Part - Itself! (Hackaday, 2016)](https://hackaday.com/2016/09/14/3d-printed-door-latch-has-one-moving-part-itself/): Write-up with pictures of HPI's one-piece door handle and latch printed in NinjaFlex on an Ultimaker 2 *(licence: link only)*
  - [Snap-Fit Joints for Plastics: A Design Guide (Covestro)](https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf): Illustrated design guide; Fig. 3 (p. 5) shows a cover held by snap arms that are released by pressing two tongues, and later pages show tapered arm shapes and lead and return angles *(licence: link only)*
  - [3D Printed Springs 'n Things (3D Printy)](https://www.youtube.com/watch?v=Zlntza52REA): Video linked from 3D Printy's printable spring latch, showing printed springs and latches working (title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Compliant Top-Mount Hook Latch, by Michaël Fortin](https://www.printables.com/model/1366490-compliant-top-mount-hook-latch): A simple one-piece compliant hook latch that locks itself when the container is closed; PETG suggested so the hook doesn't deform over time (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
  - [Latching Box, Parametric Print in Place, by Windrose](https://www.printables.com/model/782128-latching-box-parametric-print-in-place): A parametric Fusion 360 case with print-in-place hinges and a latching clasp, no assembly; default 0.3 mm tolerance and a LatchCutoutAngle parameter to tune tightness (read through the Printables API) *(licence: Creative Commons Attribution (CC BY))*
  - [Treasure Chest (St. Patrick's Day Box), by BYU Compliant Mechanisms Research (BYU CMR)](https://www.printables.com/model/598104-st-patricks-day-box): A self-opening printed chest that stores spring energy in lenticular folds and uses a compliant latch to stay closed (linked from BYU's Maker Resources page; details read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial)*
  - [Small hinged box with compliant latch, by Vlado83](https://www.printables.com/model/1469656-small-hinged-box-with-compliant-latch): A small print-in-place hinged box with a separately printed compliant latch glued on lightly with CA glue (read through the Printables API) *(licence: Creative Commons Attribution (CC BY))*
  - [Compliant Self Latching Door Stop with Release, by jesslax32](https://www.printables.com/model/626238-compliant-self-latching-door-stop-with-release): A one-piece door holder that latches the door and releases when you flex the stop with your toe; PLA, 3 walls, printed on its side (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial)*
- **diagram_idea**: Three side-view frames of a lid edge and box lip: (1) closing, the sloped hook face rides over the lip and the thin beam bends outward; (2) latched, the beam is straight and a pull arrow on the lid meets the square back of the hook; (3) opening, a thumb presses the tab, the beam bends and the hook lifts clear, with the beam's root fillet highlighted as the place to make strong.
- **sources**: 
  - https://hpi.de/baudisch/projects/metamaterial-mechanisms.html
  - https://hackaday.com/2016/09/14/3d-printed-door-latch-has-one-moving-part-itself/
  - https://en.wikipedia.org/wiki/Compliant_mechanism
  - https://en.wikipedia.org/wiki/Modular_connector
  - https://compliantmechanisms.byu.edu/maker-resources
  - https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://formlabs.com/blog/designing-3d-printed-snap-fit-enclosures/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://www.youtube.com/watch?v=Zlntza52REA (verified via YouTube oEmbed)
  - https://www.printables.com/model/1366490-compliant-top-mount-hook-latch (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/782128-latching-box-parametric-print-in-place (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/598104-st-patricks-day-box (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1469656-small-hinged-box-with-compliant-latch (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/626238-compliant-self-latching-door-stop-with-release (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/146100-spring-latch (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1510729-universal-3d-printable-spring-latch-mechanism-no-s (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, links, processes, reuse_cycles

## 28 Hidden latches (magnetic-key latch, puzzle lock)

*locks, latches & catches.* A latch hidden inside a door, drawer or box that is released by holding a magnet in the right spot outside, or by tilting or spinning the box so hidden pins move

### What it is

- **plain_name**: A catch you can't see from outside, that only lets go when you hold a magnet in the right spot, or tip, spin or tap the box in the right way so loose pins or balls inside move out of the way
- **term**: Hidden latch (concealed magnetic lock, magnetic-key latch; in puzzle boxes: gravity lock, centrifugal lock, inertia or knock lock)
- **aliases**: 
  - concealed magnetic lock
  - magnetic secret latch
  - hidden magnetic cabinet lock / magnetic child-safety lock
  - magnetic cabinet lock with magnetic key
  - Tot-Lok (brand), MagLock (brand) magnetic child locks
  - secret compartment lock
  - puzzle box lock / trick lock / trick-opening box
  - secret box / himitsu-bako (Japanese puzzle box, opened by sliding panels)
  - gravity lock / gravity pin / gravity weight
  - centrifugal lock / spin-to-open box
  - inertia lock / knock lock / tap lock
  - sequential discovery puzzle (puzzle-box term for boxes where you use a found part, e.g. a magnet, on the box)
- **family**: locks, latches & catches
- **other_families**: clamping, magnetic & friction connections
- **one_liner**: A latch hidden inside a door, drawer or box that stays locked until a secret action moves it: a magnet held against the outside pulls the catch back, or tilting, spinning or tapping the box makes hidden weights (balls, pins or bolts) slide out of the way.
- **complexity**: A few parts. Magnetic-key version: a latch or bolt that slides or pivots, a return spring (or a springy printed arm, gravity, or a small reset magnet), a magnet or steel piece on the latch, a catch or strike on the frame, and a separate key magnet. Gravity, centrifugal or knock version: a lid or panel with holes, loose weights (steel balls, pins, bolts or dowels) in hidden channels, and sometimes a small magnet that holds a weight until it is knocked free.
- **how_it_works**: The locking part (a bolt, hook or pin) sits inside where nobody can see or reach it, and blocks the door or lid. In a magnetic-key latch a spring, a springy arm or a reset magnet keeps the bolt in the locked position; a strong magnet held on the outside at the right spot pulls a magnet or steel piece on the bolt through the wood or plastic, moving the bolt clear so the door opens. In puzzle boxes the blocking parts are loose weights: tilting the box lets a ball or pin roll or drop out of the way (gravity lock), spinning it fast throws pins outwards into pockets (centrifugal lock), and a sharp tap knocks a pin off a small magnet that was holding it (inertia or knock lock). Closing the door or lid usually lets the latch drop back or spring back, so it locks itself again.

### Finder attributes

- **job**: lock, and release by hand: holds a door, drawer or lid shut until someone who knows the secret action (or has the magnet key) releases it
- **motion**: multiple: the hidden bolt slides or pivots a few millimetres; in puzzle boxes the loose pins, balls or bolts slide or roll inside channels while the whole box is tilted, spun or knocked; the door or lid then opens on its own hinge or slide
- **degrees_of_freedom**: 0 between door and frame while locked. Inside, the bolt or each loose weight has 1 (it slides along its channel or swings on its pivot). Once released, the door, drawer or lid has its normal 1 (hinge, slide or lift-off).
- **special_behaviour**: 
  - hand-release only (locks under load, releases when a person operates it): the lock holds against pulling and only lets go when the person applies the secret action (magnet key in the right place, or the right tilt, spin or knock); most magnetic cabinet locks and spring latches also lock themselves again when the door is shut
- **holding_principle**: shape (a hidden bolt, pin or ball blocks the door or lid; form-fit), kept in the locked position by spring force (a spring, a springy printed arm or a reset magnet), by gravity, or by magnetic force (a small magnet holding a pin); opened by magnetic force or by inertia
- **input_output**: not applicable
- **power**: passive (no power needed): permanent magnets, springs, gravity and inertia do all the work. Electronic hidden latches (solenoid or servo latches worked by RFID, a keypad or an app) are covered in the powered latch entries.
- **removability**: tool-free quick release: opens by hand as soon as you use the magnet key or the secret move; the latch hardware itself is screwed, glued or printed in and can be removed from the inside
- **tools_needed**: To fit: drill and screwdriver (commercial magnetic cabinet locks screw or stick on the inside of the door and cabinet); for printed versions, a print pause to drop magnets, steel balls or bolts into their pockets, and glue. To open: the magnet key (keep a spare) or nothing but your hands for gravity, spin and knock locks.
- **seal**: none
- **load**: light: enough to stop a toddler or a curious visitor, not a burglar. Strong only in the direction the bolt blocks; a door can often be flexed or pried, adhesive-mounted locks can pull off, and a strong enough magnet or a lucky shake can defeat it. *(unverified parts omitted)*
- **adjustable**: Mostly no: position is set when fitting. Some commercial units have a self-adjusting magnetic pin that suits a range of door thicknesses (Tot-Lok, 1/2 to 1-9/16 in). You can add or swap magnets to make it stronger or more sensitive.
- **play_and_precision**: not applicable (it does not locate parts). Some play is normal and helpful: DIY magnetic latches use slightly oversize guide holes so the bolt slides freely, but the latch and catch must line up closely or it may fail to lock.
- **access_needed**: both sides: it is fitted from the inside (hidden), but opened from the outside only, with no hole or handle showing
- **materials**: Neodymium magnets (discs, blocks, rods); steel pins, dowels, bolts or ball bearings as moving weights or magnet targets; plastic latch housings (commercial child locks are hard white plastic); wood, MDF, plywood or 3D-printed PLA or PETG for the box or door. The magnetic field has to pass through the panel: commercial locks work through wood, particleboard, plastic and glass (Tot-Lok also lists metal), and one guide says glass doors are not suitable for stick-on locks because the adhesive fails. Use non-magnetic (e.g. brass or stainless) screws near the latch so they don't attract the key or latch magnet.
- **maker_difficulty**: easy to moderate: commercial magnetic cabinet locks are cheap and screw or stick on; printed boxes with embedded magnets or spin-to-open pins are easy prints but need a print pause, correct magnet polarity and careful alignment; designing a reliable gravity or centrifugal lock that can't be opened by shaking takes trial and error

### Making it

- **processes**: 
  - off-the-shelf part: magnetic child-safety cabinet locks and hidden magnetic furniture locks with a magnetic key
  - 3D print (FDM): boxes, shelves and latches with pockets for magnets, steel balls, pins or bolts inserted during a print pause
  - woodwork: secret drawers and compartments with a dowel or bolt latch moved by a magnet; puzzle boxes with nail or pin locks *(unverified parts omitted)*
- **print_in_place**: partly: the box and latch can be printed in one go, but magnets, steel balls, pins or bolts have to be dropped in during a print pause (or glued in afterwards), and the key magnet is separate
- **making_tips_3d_printing**: Magnets: pause the print at the layer that closes the pocket and drop the magnets in. Make the pockets a snug fit or add a drop of superglue, because a loose magnet will jump up and stick to the print head as it passes (Prusa). Check the polarity of every magnet before assembly, so the key attracts rather than repels (the Printables 'Box with a Secret Magnetic Lock' makes this point). Keep the wall between the key and the latch magnet as thin as practical, because magnetic pull drops quickly with distance (K&J Magnetics). Remember that the sideways (sliding) force between two magnets is only about half their listed pull force (K&J Magnetics). Latch return: a springy printed arm works for occasional use (one design relies on PLA's own springiness to spring the latch back), but plastic held bent all the time creeps and relaxes, so use a metal spring, gravity or a small reset magnet when the latch stays loaded (DuPont design guide, p. 36). Bolt guides: make the holes slightly oversize so the bolt slides freely (K&J). Examples of moving weights in printed boxes: four M6 bolts screwed into printed pins as centrifugal weights, inserted at a print pause (Printables 751961); a 5 x 20 mm steel dowel that a 5 x 3 mm magnet in the lid holds until the box is knocked (Printables 687754); three 6.35 x 25.4 mm rod magnets in 7.5 mm holes that are lifted by three key magnets (Printables 467795). Use PETG rather than PLA for anything that will sit in a warm place, because PLA softens above about 60 °C (Prusa). Test that shaking or tipping the box in ordinary handling does not open it, and that it locks again reliably when closed (one maker notes a rare-earth magnet can also pull the balls of a spin-to-open box outwards, bypassing the spin, Make:). *(unverified parts omitted)*
- **off_the_shelf_parts**: Magnetic child-safety cabinet locks and drawer locks (latch, catch and magnetic key; sold as 'magnetic cabinet lock', 'adhesive magnetic lock', 'hidden magnetic lock'); spare magnetic keys; hidden magnetic furniture latches operated by a magnetic knob; neodymium disc, block, ring (countersunk) and rod magnets; steel balls (ball bearings), steel dowel pins; non-magnetic brass or stainless screws; magnetic keyed padlocks and cylinder locks (magnet-coded tumblers) for visible locks.
- **rules_of_thumb**: 
  - The force two magnets give when one slides past the other (sliding or shear force) is about half their listed pull force, so size the latch magnet with that in mind; keep the gap between key and latch magnet as small as possible and use non-magnetic screws nearby (K&J Magnetics, https://www.kjmagnetics.com/blog/diy-magnetic-lock).
  - In K&J's tests a sliding dowel latch worked through about 3/4 in of wood with about 0.15 lb of sliding force, and a rotating latch worked through 1-1/8 in of wood with about 0.3-0.4 lb of pull (https://www.kjmagnetics.com/blog/diy-magnetic-lock).
  - Commercial hidden magnetic cabinet locks suit doors from about 1/2 in to 1-9/16 in thick (Tot-Lok, https://www.rockler.com/tot-lok-lock-mechanism); most systems are designed for doors up to about 1.5 in thick (https://babyproofme.com/es/blogs/the-parenting-journal/do-magnetic-cabinet-locks-work-on-all-cabinet-types).
  - A bigger key magnet works from further away: a TotLok opened at about 1/2 in with its own key, but a large cylinder magnet opened it from about 2-1/8 in, so a strong magnet can defeat a magnetic lock (K&J Magnetics, https://www.kjmagnetics.com/blog/magnetic-locks).
  - Neodymium magnets lose some strength when warm (typically 5-10%, recovered on cooling) up to their maximum operating temperature; above it they lose strength for good. The safe temperature depends on the magnet's grade and shape (K&J Magnetics, https://www.kjmagnetics.com/blog/temperature-and-neodymium-magnets).
  - Plastic springs held under constant load or bending relax and creep; use spring steel for springs that stay loaded (DuPont General Design Principles, Module I, p. 36, https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf).

### When to use it

- **everyday_examples**: 
  - magnetic child-safety locks inside kitchen and bathroom cupboards, opened with a magnetic key held on the outside of the door
  - secret drawers or compartments in furniture and floating shelves that open with a magnet hidden in a knob or ornament
  - puzzle boxes and trick boxes that open when spun, tilted or tapped (Japanese secret boxes, himitsu-bako, use a sequence of sliding panels instead)
- **when_to_use**: When you want a door, drawer or lid to look plain, with no keyhole or handle, and to stay shut against children, pets or casual snooping: baby-proofing cupboards, hiding a compartment in furniture or a shelf, gift and puzzle boxes, escape-room props, or a 'safe' for small valuables. Good when you can reach the inside to fit it and the outside panel is thin enough for a magnet to work through.
- **when_not_to_use**: Not for real security against a determined adult: a strong magnet, prying or shaking may open it, so use a proper keyed lock (pin-tumbler or combination lock) or a lockable safe. Not for medicines or poisons as the only protection (use child-resistant containers too). Avoid gravity or spin locks on things that get carried or bumped a lot, as they may open or jam by accident. If you need it to open from a phone or keypad, use a solenoid or servo latch instead. *(unverified parts omitted)*
- **environment_limits**: Heat: neodymium magnets weaken when warm and can lose strength permanently above their maximum operating temperature (K&J Magnetics); PLA parts soften above about 60 °C and PETG is fine below about 80 °C (Prusa). Plastic spring arms relax over time if left bent (DuPont). Adhesive-mounted child locks can let go over time under repeated pulling, and stick-on locks don't hold well on glass (Baby Proof Me). Vibration and knocks can accidentally shift gravity or knock-lock weights. *(unverified parts omitted)*
- **safety_notes**: Small strong magnets are a serious swallowing hazard: two or more swallowed magnets (or a magnet and a steel part) can pinch the intestines together, causing holes, blockage and even death (US CPSC), so fix magnets in securely and keep the key away from children. Losing the magnetic key can lock you out, so keep a spare somewhere safe; some commercial locks have a way to disable them. Child locks are not childproof: in 2012 one brand of magnetic locks was recalled after children as young as 9 months opened them (Baby Proof Me). Keep poisons and medicines out of reach as well.
- **common_failures**: (1) Won't lock or won't open because the latch and catch are misaligned: fit carefully, use slotted holes to fine-tune. (2) Key too weak or panel too thick: use a thinner panel, a stronger key magnet, or move the latch magnet closer. (3) Magnet fitted the wrong way round, so the key pushes instead of pulls: check polarity before gluing or printing in. (4) Printed spring arm has crept and no longer springs back: use a metal spring, gravity or a reset magnet. (5) Bolt sticks because the guide holes are too tight, swollen or dirty: oversize the holes. (6) Adhesive pad lets go: screw it in instead. (7) Gravity or spin lock opens by accident when shaken, or jams: add an anti-pick feature or test many times. (8) Magnet falls out of its pocket or jumps to the nozzle during printing: make a snug pocket and use glue.
- **related**: 
  - Magnet joint (magnetic catch): holds a door shut by magnetic pull alone, with nothing hidden to unlock; pull harder and it opens
  - Push-push latch (touch latch): also hidden and handle-free, but anyone can open it by pushing the door
  - Compliant one-piece latch: a springy printed catch like the arm in some magnetic-key boxes, but opened by pressing a visible handle
  - Solenoid latch and servo or motorised latch: hidden latches moved by electricity (keypad, RFID, app) instead of a magnet key
  - Magnetic keyed lock: a normal-looking lock whose tumblers are moved by coded magnets in the key rather than by its shape
  - Pin-tumbler and combination locks: visible locks that give real security against adults
  - Inertia-locking reel (seat-belt lock): uses the same inertia and centrifugal effects, but to lock when jerked rather than to hide a latch
  - Sliding-panel puzzle boxes (himitsu-bako): hidden, but opened by a sequence of sliding panels rather than a latch

### Pictures, videos and models

- **links**: 
  - [Magnetic safety lock.jpg (Wikimedia Commons, Nhujs ntus, 2017)](https://commons.wikimedia.org/wiki/File:Magnetic_safety_lock.jpg): Photo of a magnetic child-safety lock fixed inside a cabinet door *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Magnetic Locks (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/magnetic-locks): Photos of the insides of two magnetic child-safety locks (a steel-standoff type and a four-bar linkage with spring and disc magnet) and tests of how far away different key magnets work *(licence: link only)*
  - [DIY Magnetic Lock (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/diy-magnetic-lock): Photos of home-made hidden magnetic latches: a sliding dowel latch and rotating latches worked through wooden panels, with measured forces *(licence: link only)*
  - [Secret Magnetic Lock Box (Rodrigo Menendez, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=Aq5H139B--M): Video of a 3D-printed box whose springy printed latch is pulled open by a magnet key *(licence: link only)*
  - [Secret Drawer Locking Mechanism And Hookless Key Storage - How To (Woodshop Junkies, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=o9lVZDH3GPM): Woodworking how-to video of a hidden drawer lock with a magnetic key *(licence: link only)*
- **make_it_yourself**: 
  - [Box with a Secret Magnetic Lock! by Rodrim (Printables 262244; details read via the Printables public API)](https://www.printables.com/model/262244-box-with-a-secret-magnetic-lock): Printable box whose thin printed latch is bent open by a magnet key and springs back by PLA's own springiness; uses 12 x 2.7 mm neodymium magnets and filament-pin hinges *(licence: CC BY-NC-SA)*
  - [Secret shelf with invisible magnetic lock by AWSW (Printables 467795; details read via the Printables public API)](https://www.printables.com/model/467795-secret-shelf-with-invisible-magnetic-lock): Wall shelf with a hidden compartment: three rod magnets (6.35 x 25.4 mm) inserted at a print pause drop into holes to lock the lid; three more magnets held on top lift them to unlock *(licence: CC BY-NC)*
  - [Secret Box - Centrifugal Opening by Curtis Humphreys (Printables 751961; details read via the Printables public API)](https://www.printables.com/model/751961-secret-box-centrifugal-opening-3d-print-files): Spin-to-open box: printed pins weighted with four M6 bolts (inserted at a print pause) are thrown outwards when the box is spun, freeing the lid *(licence: CC BY-SA)*
  - [Dovetail Box - secret magnetic lock by Oliver Gewinner (Printables 687754; details read via the Printables public API)](https://www.printables.com/model/687754-dovetail-box-secret-magnetic-lock): Knock-to-open (inertia) box: turned upside down, a 5 x 20 mm steel dowel sticks to a 5 x 3 mm magnet in the lid and locks it until the box is tapped bottom-down *(licence: Public domain (CC0))*
  - [Magnetic Combination Lock Puzzle Box by Osprey (Printables 258188; details read via the Printables public API)](https://www.printables.com/model/258188-magnetic-combination-lock-puzzle-box): Storage box where magnets embedded in printed buttons shift hidden tumblers so the bolt can be pulled back; needs fifteen 8 x 3 mm magnets *(licence: CC BY)*
- **diagram_idea**: Two side-by-side cut-away views: (1) a cupboard door with a spring-loaded hook inside that catches on the frame, and a hand holding a key magnet on the outside pulling the hook back through the wood; (2) a box lid held by pins in side channels, shown still (pins block the lid) and spinning (pins flung outwards, lid lifts free).
- **sources**: 
  - https://www.kjmagnetics.com/blog/diy-magnetic-lock
  - https://www.kjmagnetics.com/blog/magnetic-locks
  - https://www.kjmagnetics.com/blog/temperature-and-neodymium-magnets
  - https://en.wikipedia.org/wiki/Child_safety_lock
  - https://en.wikipedia.org/wiki/Magnetic_keyed_lock
  - https://en.wikipedia.org/wiki/Puzzle_box
  - https://en.wikipedia.org/wiki/Secret_compartment
  - https://www.rockler.com/tot-lok-lock-mechanism
  - https://babyproofme.com/es/blogs/the-parenting-journal/do-magnetic-cabinet-locks-work-on-all-cabinet-types
  - https://www.lucieslist.com/guides/baby-proofing/cabinet-locks/
  - https://patents.google.com/patent/US5485733A
  - https://patents.google.com/patent/US5944311
  - https://makezine.com/2014/12/09/a-3d-printed-centrifugal-puzzle-box/
  - https://www.robspuzzlepage.com/disassembly.htm
  - https://kubiyagames.com/blogs/mechanical-puzzles-blog/the-hidden-mechanics-of-wooden-puzzles-unlocking-their-secrets
  - https://tea-sip.com/how-to-open-a-puzzle-box-a-complete-guide-from-frustration-to-mastery/
  - https://hackaday.com/2016/03/21/just-when-you-thought-magnets-werent-magic-magnets-are-mechanisms/
  - https://www.cpsc.gov/content/cpsc-warns-high-powered-magnets-and-children-make-a-deadly-mix
  - https://help.prusa3d.com/article/insert-pause-or-custom-g-code-at-layer_120490
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://commons.wikimedia.org/wiki/File:Magnetic_safety_lock.jpg
  - https://www.youtube.com/watch?v=Aq5H139B--M (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=o9lVZDH3GPM (verified via YouTube oEmbed)
  - https://www.printables.com/model/262244-box-with-a-secret-magnetic-lock (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/467795-secret-shelf-with-invisible-magnetic-lock (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/751961-secret-box-centrifugal-opening-3d-print-files (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/687754-dovetail-box-secret-magnetic-lock (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/258188-magnetic-combination-lock-puzzle-box (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, load, making_tips_3d_printing, processes, reuse_cycles, when_not_to_use

## 29 Push-and-turn child-resistant cap

*locks, latches & catches.* A cap that only unscrews when pushed down while turning, because its lugs slip over ratchet teeth unless pressed into them

### What it is

- **plain_name**: A bottle cap that just spins and clicks if you only twist it, and only unscrews if you press it down hard while you turn
- **term**: Push-and-turn child-resistant closure (push-down-and-turn cap)
- **aliases**: 
  - child-resistant cap / CR closure / CRC
  - childproof cap / child-proof lid (common but inaccurate: regulators say child-resistant, not child-proof)
  - safety cap
  - push down and turn cap / push & turn closure
  - push-and-twist cap
  - palm-and-turn cap / Palm N Turn (historical name of the first design, 1967)
  - double-shell closure / two-piece closure (outer cap or over cap, and inner cap)
  - special packaging (US legal term for child-resistant, senior-friendly packaging)
- **family**: locks, latches & catches
- **other_families**: one-way & ratchet, clutches & couplings, seals & pass-throughs
- **one_liner**: A two-layer screw cap whose loose outer shell only grips the threaded inner cap when you press down while turning, so a child who just twists it gets nothing but spinning and clicking, while an adult who knows the trick can open it.
- **complexity**: A few parts moulded as a two-piece cap: an outer cap (over cap) with drive lugs or teeth inside its top or skirt and springy fingers or leaf springs; an inner cap with the screw thread, matching lugs or ratchet ramps on its top or outside, and a liner or plug seal; plus the bottle neck with its outer thread.
- **how_it_works**: Only the inner cap is screwed onto the bottle; the outer cap sits loosely over it, pushed up by small springy fingers so their teeth or lugs don't mesh. Turning to close, the springy fingers or sloped ratchet teeth catch on the inner cap and drive it round, so the cap always tightens. Turning to open without pressing, the fingers or teeth just ride up and slip over the ramps with a clicking sound, so the inner cap never turns. Pressing down squashes the springs and pushes the outer cap's lugs into slots or teeth on the inner cap, like engaging a dog clutch, so the push and the turn together unscrew the cap.

### Finder attributes

- **job**: 
  - lock, and release by hand: keeps a screw cap from being undone by a single simple twist, while an adult can open it by pushing and turning
  - join and hold: screws the cap onto the bottle
  - seal it, or pass cables or fluid through: a liner or plug seal in the inner cap seals the bottle
- **degrees_of_freedom**: Outer cap relative to inner cap: 2 (it turns, and it slides a little up and down). Cap relative to bottle: 0 when screwed tight; 1 while unscrewing (turning and rising together along the thread).
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): without pressure the outer cap drives the inner cap in the tightening direction but slips over it in the opening direction, like a ratchet
  - hand-release only (locks under load, releases when a person operates it): it needs two different motions at once (push down and turn), which young children rarely manage but most adults can
- **holding_principle**: shape (the screw thread holds the cap on, and the lugs interlock only when pushed together; form-fit), with spring force (springy fingers keep the lugs apart until pressed)
- **input_output**: Works like a push-engaged one-way clutch: turning the outer cap to close drives the inner cap at 1:1; turning to open drives it only while pushed down, otherwise the torque passed on is near zero (it slips and clicks). In line (coaxial). Not a power drive, so efficiency is not relevant.
- **power**: passive (no power needed)
- **removability**: tool-free quick release: unscrews by hand (push down and turn) and screws back on
- **tools_needed**: none to use. Making real caps needs injection or compression moulding tools; printed versions need only a printer.
- **load**: light: it only has to hold a screw cap on a bottle. Twisting alone, however hard, just slips; the weak points are a strong push-and-turn, prying or biting the cap, or leaving the cap loose. Pulling straight off is resisted by the screw thread.
- **adjustable**: no
- **play_and_precision**: noticeable play by design: the outer cap rattles and spins freely on the inner cap and has some up-and-down travel; the cap is not a locating part
- **access_needed**: end of a tube or shaft: it screws onto the neck (end) of a bottle or jar
- **materials**: Polypropylene (PP) and high-density polyethylene (HDPE) for both shells, sometimes with recycled (PCR) resin; liners of foam or other sealing materials; the bottle can be plastic or glass. For printing: PETG or nylon are less brittle than PLA for the springy fingers and teeth.
- **maker_difficulty**: hard: you need two closely fitting printed shells with a screw thread, springy fingers and small ratchet teeth, and it will not be tested or certified; buy certified caps and bottles for real medicines or chemicals. Printing one as a demonstrator or for a non-hazardous stash box is a good moderate project.

### Making it

- **processes**: off-the-shelf part: certified child-resistant caps sold with matching bottles by closure makers, 3D print (FDM): demonstrators and non-certified containers, printed as separate inner and outer caps *(unverified parts omitted)*
- **making_tips_3d_printing**: Threads: bottle threads are large and coarse, which suits printing; follow the rule of M6 or bigger, a rounded (semi-circular) thread profile and about 0.1 mm offset between cap and neck (Formlabs). To fit real bottles, the BOSL2 OpenSCAD library has standard bottle-neck and cap threads (PCO-1810/1881 drink bottles, SPI bottle and jar threads, mason jars). Springy fingers and ratchet teeth: print the outer cap top-down so the fingers and teeth lie flat in the layers, and don't build flexing parts standing up in the Z direction, because they snap between layers (Hubs). Give sliding and snapping parts about 0.5 mm clearance on FDM, and add a fillet at least half the finger thickness where each finger joins the cap (Hubs). Use PETG, ABS or nylon rather than PLA, which is brittle and breaks into shards (Hubs, Prusa). The fingers are only bent while you push, so plastic springs are acceptable here; springs that stay bent all the time relax and creep (DuPont design guide, p. 36). A similar printed design uses a thumb lever instead of a push (Printables 1109394); its maker found the printed lever stiffer than the moulded original and that it bends slightly with use but still works. Do not rely on a printed cap for real medicines or poisons: it has not been tested with children, and FDM surfaces are not food-safe (same maker). *(unverified parts omitted)*
- **off_the_shelf_parts**: Child-resistant push-and-turn closures in standard neck sizes (e.g. 18, 22, 25, 28, 32, 40 and 50 mm are listed by one maker) with matching bottles or vials; 'CR caps', 'CRC closures', 'push down and turn caps', 'child-resistant screw caps'; related types: squeeze-and-turn caps, line-up-the-arrows snap caps, reversible (two-way) prescription vial caps, press-tab (lever) vial caps; liners and induction seals. Note that a closure only counts as child-resistant when it has been certified together with a specific container (Aptar).
- **rules_of_thumb**: 
  - US 'special packaging' must stop at least 85% of children without a demonstration and at least 80% after a demonstration, must be opened and properly closed by at least 90% of senior adults, and must keep working for the openings and closings customary for its contents (16 CFR 1700.15, https://www.law.cornell.edu/cfr/text/16/1700.15).
  - The test uses panels of 50 children aged 42-51 months who get 5 minutes, then a demonstration, then 5 more minutes; senior adults aged 50-70 must open it within 5 minutes and re-close it properly within 1 minute (16 CFR 1700.20, https://www.law.cornell.edu/cfr/text/16/1700.20).
  - A closure is only qualified as child-resistant together with the specific containers it was certified with (Aptar, https://aptar.com/en-us/products/push-turn-child-resistant-closure).
  - Most child-resistant closures work by needing two different motions at once, such as push-and-turn (https://en.wikipedia.org/wiki/Child-resistant_packaging).
  - For printed threads, prefer M6-sized or larger threads, a semi-circular profile and about 0.1 mm offset (Formlabs, https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/).
  - Don't build flexing features vertically in Z; use about 0.5 mm clearance on FDM and a root fillet of at least 0.5 times the thickness (Hubs, https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/).

### When to use it

- **everyday_examples**: aspirin and painkiller bottles marked 'push down & turn to open', prescription and over-the-counter medicine bottles, household-chemical and personal-care bottles (closure makers list these uses)
- **when_to_use**: On containers of medicines, chemicals or other harmful contents that adults open often, where a simple screw cap would be too easy for a young child. Also as a fun demonstrator of a push-engaged clutch, or on a stash box or spare-parts jar where you just want a lid that doesn't come off with a casual twist.
- **when_not_to_use**: Not for people with arthritis, weak hands or poor grip, who may struggle with it; US pharmacists can dispense in ordinary (non-child-resistant) packaging on request, and a lever or easy-open cap may suit better. Not as your only protection: it is child-resistant, not child-proof, so store poisons out of reach too. Not for anything that needs a certified child-resistant package unless the cap and container were tested together. If you only need a lid that stays shut when knocked, a plain screw cap, snap lid or bayonet lid is simpler.
- **environment_limits**: Plastic springy fingers that are left pressed down would relax (DuPont), but in normal use they are only pressed briefly. *(unverified parts omitted)*
- **safety_notes**: It slows children down; it does not make a container safe. Many poisonings happen because the cap was left off or not screwed back on properly, or the contents were moved to an ordinary container (US CPSC). Always screw it back on fully until it is tight. Reversible caps (with a child-resistant and an ordinary side) are discouraged by the CPSC, because people tend to leave them on the easy side. A home-printed cap is not tested or certified and should not be relied on for medicines or poisons.
- **common_failures**: (1) Cap left loose or not re-closed: the child-resistant feature does nothing; tighten until the cap drives the inner cap tight. (2) Adults can't open it and leave it off or swap it for an ordinary lid: choose an easier certified design or ask for non-child-resistant packaging. (3) Worn, cracked or flattened springy fingers: the outer cap no longer lifts clear, so it opens with a plain twist, or the teeth skip when you try to open it. (4) Cracked inner cap or stripped thread from over-tightening. (5) Dirt or dried contents (syrup, powder) jamming the gap between the shells. (6) On printed caps: fingers snapping between layers, or ratchet teeth too small to grip; print flat and use a tougher plastic.
- **related**: 
  - Squeeze-and-turn cap: you squeeze two sides of the cap while turning instead of pushing down
  - Line-up-the-arrows snap cap: a tab has to be lined up with a mark before the cap can be pushed off
  - Press-tab or lever cap: a tab or lever on the cap or bottle has to be pressed while turning (as on some pharmacy vials)
  - Ratchet-tooth torque limiter (clicking cap or knob): the same clicking ramp teeth, but they slip above a set torque rather than until pushed
  - Dog clutch (claw clutch): the same 'push lugs into mesh to connect the drive' idea, used on shafts
  - Bayonet mount (push-and-twist lock): also push-and-turn, but with pins in L-shaped slots instead of a screw thread and a slip clutch
  - Tamper-evident breakaway bridge: often added to caps to show they have been opened, but does not stop opening
  - Face ratchet: the one-way teeth on the cap's top are a small face ratchet

### Pictures, videos and models

- **links**: 
  - [Aspirin1.jpg (Wikimedia Commons, Mosesofmason, 2005)](https://commons.wikimedia.org/wiki/File:Aspirin1.jpg): Photo of an aspirin bottle with a child-resistant cap marked 'push down & turn to open' *(licence: CC BY-SA 3.0 or GFDL 1.2+ (reuse with credit); the brand name is a trademark)*
  - [Palmnturn.JPG (Wikimedia Commons, unknown author)](https://commons.wikimedia.org/wiki/File:Palmnturn.JPG): Image of the original Palm N Turn child-proof cap *(licence: Public domain in the United States (published 1931-1977 without a copyright notice); may still be copyrighted elsewhere)*
  - [Guide to Child Resistant Caps & Closures (Paramount Global)](https://www.paramountglobal.com/knowledge/child-resistant-closures/): Plain explanation of push-and-turn, squeeze-and-turn and snap child-resistant closures, with images *(licence: link only)*
  - [3D Printed Dram Pill Bottles With Child Protection Mechanism (Pixel Precision, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=nzEkMZeIeP8): Demonstration and assembly of a printed pill bottle with a lever-type child-resistant cap (a close relative of push-and-turn) *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Dram Pill Bottle With Protective Cap Mechanism by reavenk (Printables 1109394; details read via the Printables public API)](https://www.printables.com/model/1109394-dram-pill-bottle-with-protective-cap-mechanism): Printable pill bottles and caps that fit real pharmacy dram vials; the cap won't unscrew until a thumb lever is pressed (a press-tab variant rather than a push-down cap); includes a Blender source file *(licence: CC BY)*
  - [BOSL2 bottlecaps.scad (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/bottlecaps.scad): Parametric caps and necks for standard PCO-1810/1881 drink bottles, SPI bottles and jars and mason jars; a starting point for the threaded inner cap of a home-made push-and-turn closure *(licence: BSD 2-Clause)*
- **diagram_idea**: A cut-away of a two-piece cap on a bottle neck in two frames: (1) just twisting, with the springy fingers holding the outer cap up so its teeth ride over the inner cap's ramps (curved arrow, 'click click'); (2) pressing down, with the outer cap's lugs dropped into the inner cap's slots so both turn together and unscrew.
- **sources**: 
  - https://en.wikipedia.org/wiki/Child-resistant_packaging
  - https://en.wikipedia.org/wiki/Child_safety_lock
  - https://www.law.cornell.edu/cfr/text/16/1700.15
  - https://www.law.cornell.edu/cfr/text/16/1700.20
  - https://www.cpsc.gov/s3fs-public/PoisonPreventionPackagingAGuideforHealthcareProfessionals.pdf?VersionId=vz7Fa (pp. 3, 5-6, 14)
  - https://patents.google.com/patent/US4394916A/en
  - https://patents.google.com/patent/US6450352B1/en
  - https://patents.google.com/patent/US20120138561A1/en
  - https://www.paramountglobal.com/knowledge/child-resistant-closures/
  - https://aptar.com/en-us/products/push-turn-child-resistant-closure
  - https://packagingschool.com/lessons/child-resistant-closures
  - https://jadex.com/press-media/cpsc-child-resistant-safety-caps
  - https://formlabs.com/blog/adding-screw-threads-3d-printed-parts/
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/bottlecaps.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://commons.wikimedia.org/wiki/File:Aspirin1.jpg
  - https://commons.wikimedia.org/wiki/File:Palmnturn.JPG
  - https://www.youtube.com/watch?v=nzEkMZeIeP8 (verified via YouTube oEmbed)
  - https://www.printables.com/model/1109394-dram-pill-bottle-with-protective-cap-mechanism (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, links, making_tips_3d_printing, motion, print_in_place, processes, reuse_cycles, seal

## 159 Cam latch (quarter-turn cam lock)

*locks, latches & catches.* A knob or key turns a flat arm (cam) behind a panel so it hooks over the frame and holds a door or lid shut

### What it is

- **plain_name**: A knob, key or slot on the front of a door that turns a flat metal arm behind it, so the arm swings over the edge of the frame and holds the door shut
- **term**: Cam latch (quarter-turn cam lock)
- **aliases**: 
  - cam lock (usually the key-operated version)
  - quarter-turn latch / quarter-turn cam latch / 1/4-turn latch
  - cabinet lock, drawer lock, mailbox lock, locker lock (everyday names)
  - wing-knob, T-handle or L-handle cam latch
  - tool-operated cam latch (slotted, hex, triangle, square or double-bit key)
  - compression latch / compression cam latch (the cam also pulls the door tight); VISE ACTION (Southco brand)
  - push-to-close cam latch; spring-cam latch
  - the arm itself: cam, tongue or pawl
  - Not to be confused with camlock hose couplings, Camlock electrical connectors or flat-pack furniture cam fasteners, which share the name (Wikipedia 'Camlock' disambiguation)
- **family**: locks, latches & catches
- **other_families**: quick-release & tool-free, over-centre, toggle & cam clamps
- **one_liner**: A latch fitted through a single hole in a door or lid, whose knob, key or tool turns a flat arm (the cam) a quarter turn so that it hooks behind the frame and holds the door closed.
- **complexity**: A few parts: a body (a threaded barrel with a head or flange on the front, often holding a key cylinder); a mounting nut, and sometimes a sealing washer, O-ring or gasket; the drive (wing knob, T- or L-handle, key cylinder, or a slot, hex, triangle or square recess for a tool); the cam (a flat steel arm, which may be straight, offset or cranked, hooked, spring-wire or ramped); a screw that holds the cam on the square end of the spindle; and a stop (often a stop washer) that limits the turn to 90° or 180°. Some have a detent spring or a push-to-close spring.
- **how_it_works**: The body goes through one hole in the door, shaped with flats so it can't spin, and a nut clamps it from behind. The cam is screwed to the back of the spindle. Turning the knob, key or tool a quarter turn swings the cam from alongside the door edge (open) to behind the lip of the frame (closed), where a stop halts it. Pulling on the door then presses the cam flat against the frame, so the pull goes straight into the cam and doesn't try to turn it; that is why it stays shut. Cranked (offset) cams set how far behind the door the cam sits (the grip); ramped cams ride up slightly as they close to take up slack; and in a compression latch the first 90° swings the cam behind the frame and the rest of a half turn draws it back to squeeze the door onto a gasket (Southco E3).

### Finder attributes

- **job**: 
  - lock, and release by hand: keeps a door, drawer, lid or access panel shut until someone turns the knob, key or tool
  - join and hold: holds a hinged or lift-off panel against its frame
  - seal it, or pass cables or fluid through: sealed and compression versions squeeze a gasket to keep out dust and water (NEMA 4 / IP65 with the gasket fitted, Southco)
- **motion**: rotate: a quarter turn (90°) for most; some cam locks turn 180° (set by stop washers, SPEP; McMaster-Carr lists quarter-turn and half-turn). Compression versions are rotate+slide: a half turn in which the cam also pulls back 4.3-6.4 mm (Southco E3).
- **degrees_of_freedom**: 1: the cam turns with the knob (plus a short pull-in on compression types). When latched, the door has 0 freedom at the latch; the hinge or other latches hold the rest.
- **special_behaviour**: 
  - hand-release only (it holds against pulling on the door and only opens when someone turns the knob, key or tool)
  - self-locking (a pull on the door presses the cam flat against the frame instead of turning it, so vibration and pulling don't open it)
  - quick-release (a quarter turn by hand on wing-knob, T- and L-handle versions)
  - indexing (optional detent housings click the cam into place at the open and closed positions so it can't move by accident; Southco E5)
  - tensioning (compression latches and ramped cams pull the door tight against the frame or gasket, removing rattle)
- **holding_principle**: shape (the cam overlaps the lip of the frame; form-fit), plus friction or clamping (force-fit) in ramped and compression cams that pull the door tight, and spring force in spring-wire cams, detents and push-to-close versions
- **input_output**: not applicable
- **power**: passive (no power needed). Electronic cam locks also exist: the electronic key powers the lock through three contacts, the lock checks the key's ID, and then it can be turned (Wikipedia 'Latch'); with no valid key it stays locked.
- **removability**: tool-free quick release for wing-knob, T- and L-handle versions; removable with a key or tool for keyed and tool-operated versions; the latch itself unbolts from the door with its nut
- **tools_needed**: To use: none (wing, T- or L-handle), a key, or a tool (flat screwdriver, hex key, or a triangle, square or double-bit key; Southco E5 head styles). To fit: a drill and file or a panel punch for the shaped hole, a spanner for the mounting nut, and a screwdriver for the cam screw.
- **seal**: none for a plain cam lock; sealed versions with an internal O-ring and a gasket reach watertight splash protection, NEMA 4 / IP65 (dust-tight and protected against water jets) (Southco E5 and CM sealed types; IP code from Wikipedia). Compression latches keep that seal tight by squeezing the door onto the gasket (Southco E3).
- **load**: light to medium: Southco rates its CM cam lock cam at an average ultimate load of 180 N (about 18 kg), zinc E5 latches at 330 N maximum static load, stainless E5 at 550-670 N and the mini E5 at 130 N; E3 compression latches 300-450 N. Strong against the door being pulled straight open (the cam bears on the frame lip). Weaker if the door is prised or bent, because the cam bends or slips off the lip. Use several latches on large doors and don't use them as structural joints.
- **adjustable**: yes, in steps: you set the grip by choosing the cam offset and length, and adjustable-grip versions have a threaded cam position with a jam nut (Southco E5); washers can shim the cam (Printables mailbox cam); cams can be fitted either way round to change which way it turns (Wikipedia: offset cams are reversible; Southco CM 'cam forward / cam reversed')
- **play_and_precision**: small to noticeable: a flat cam on a fixed grip leaves a small gap and may rattle; Southco's E5 cams each cover a 2 mm band of grip (+2/-0 mm) and 'provide vibration resistance and grip variation tolerance'; compression latches remove the play entirely. It doesn't locate the door precisely. *(unverified parts omitted)*
- **access_needed**: one side only (blind) to open and close; fitting the nut and cam needs the back of the door, which you can reach while it is open
- **materials**: Bodies: die-cast zinc alloy (chrome plated or black powder coated), 304 or 316 stainless steel, or glass-filled nylon; cams: zinc-plated steel or stainless steel (Southco; Rencol). Doors and panels: sheet steel or aluminium, plastic, plywood, MDF or printed plastic; Southco's E5 suits doors 1-6 mm thick. Printed latches: ABS or PETG rather than PLA (1944GPW).
- **maker_difficulty**: easy for a bought latch: cut one shaped hole and tighten one nut; moderate to print your own, because the cam must be solid and printed in a tough plastic to take the load

### Making it

- **processes**: 
  - off-the-shelf part: the usual choice (cam locks and cam latches are cheap and come in many grips)
  - sheet metal: cabinet and enclosure doors, with the shaped hole punched or cut
  - laser cut: acrylic or plywood doors, with the D-shaped or square hole cut accurately so the body can't spin
  - woodwork: cabinet doors and boxes (drill the hole and file or chisel the flats)
  - 3D print (FDM): knobs, replacement cams and whole light-duty latches for boxes and enclosures
- **print_in_place**: no: the body, cam and knob are separate parts that are assembled through the door; one printable design prints all three parts together on a sprue for convenience, but they are cut apart and assembled
- **making_tips_3d_printing**: Use 100% (solid) infill for the cam and spindle, and ABS or PETG rather than PLA, which is more brittle (1944GPW's printed quarter-turn battery-door latch, which fits a 10 mm hole in a 1.5 mm box wall, can be glued with CA or screwed on, and has small detent dimples that hold the arm in position). Make the hole in the door the same shape as the body (a flat or two flats, or a square) so the body can't spin, and drive the cam from the spindle with a square or flat rather than a round shaft. Keep a real screw holding the cam on (Southco's CM cams use a screw and lock washer; a printed Rittal replacement holds its cam with an M4 screw). A printed replacement cam for a mailbox lock was made thicker to be as strong as the metal one and came with spare washers to shim it into line with the frame edge (Zer0s). To replace a broken enclosure lock, a printed copy of Rittal's standard cam lock (cylinder, body, cam and retaining ring) fits a 22 mm square hole and is interchangeable with the original parts (snd). Test the grip: turn the cam by hand with the door shut and add or remove washers until it just slides behind the frame lip without binding. *(unverified parts omitted)*
- **off_the_shelf_parts**: Cam locks (flat-key, tubular-key or tool-operated; keyed alike or keyed differently; fixed or removable core), quarter-turn cam latches (wing knob, T-handle, L-handle, flush wing, slotted, hex, triangle, square and double-bit heads; fixed or adjustable grip; sealed or non-sealed; detented), compression latches, push-to-close cam latches, spring-cam latches, and loose cams (straight, offset or cranked, hooked; in several lengths and offsets), stop washers, sealing washers and gaskets, and keeper brackets. McMaster-Carr lists 'Wing-Handle Cam Latches', 'L-Handle Cam Latches' and 'T-Handle Cam Latches', with compression, padlockable and spring-cam versions. Search terms: 'quarter-turn cam latch', 'cam lock', 'compression latch', 'cam lock cam offset', 'triangle key cam latch', 'mailbox lock'.
- **rules_of_thumb**: 
  - Work out the total grip first: everything between the latch's mounting face and the point where the cam touches the frame, including door thickness, compressed seals and gaskets, accessories and frame offset; then pick the cam for that grip (Southco E5 catalogue, p. 151, https://media.southco.com/media/static/Literature/E5.en.pdf).
  - Southco E5 cams come in 2 mm steps of grip, each covering +2/-0 mm; they are 45 mm long and fit doors 1-6 mm thick through a 22.5 mm hole trimmed by a 20.1 mm square so the body can't turn (same catalogue, p. 152).
  - Maximum static loads for Southco E5: 330 N for zinc, 550 N for 304 stainless, 670 N for 316 stainless and 130 N for the mini size; mounting nut torque up to 10 N·m (zinc) or 20 N·m (stainless) (same catalogue, pp. 152-158).
  - Southco CM cam locks fit a 19 ± 0.2 mm hole with two flats 16.25-16.35 mm apart (a double-D hole); tighten the nut to 5 N·m and the cam screw to 4 N·m; cams come with 0, 3.2, 6.4 or 9.5 mm offset and 19, 31.8 or 44.5 mm length; average ultimate load on the cam 180 N (Southco CM catalogue, pp. 196-199, https://media.southco.com/media/static/Literature/CM.en.pdf).
  - Compression latches use a half turn: the first 90° swings the cam behind the frame and the rest pulls the door in by 4.3-6.4 mm (depending on model) to squeeze the gasket; maximum static load 300 N for fixed grip and 450 N for adjustable grip on the E3 (Southco E3 catalogue, pp. 90-91, https://media.southco.com/media/static/Literature/E3.en.pdf).
  - Cam locks can be set to turn 90° or 180° with removable stop washers and usually fit a double-D hole; quarter-turn latches turn 90° only and fit a square hole with rounded corners (SPEP, https://spep.com/blog/comparison-of-cam-locks-and-quarter-turn-latches/).
  - Offset cams are reversible, so one cam can serve two grips or turn directions by flipping it (Wikipedia, 'Latch', Cam lock section, https://en.wikipedia.org/wiki/Latch).

### When to use it

- **everyday_examples**: 
  - the lock on a letterbox or mailbox door
  - filing cabinets, desk drawers, lockers and tool chests
  - electrical and control cabinet doors opened with a triangle or square key
  - small battery doors on electronics boxes opened with a coin or screwdriver
- **when_to_use**: For a hinged door, drawer or lid on a box, cabinet or enclosure that needs to stay shut and open with a simple turn, by hand, key or tool. It fits through one hole, sits almost flush on the outside, keeps its moving parts inside, and can be keyed or tool-operated to keep people out. Choose a compression version when the door must press onto a gasket to keep out water and dust or stop rattling.
- **when_not_to_use**: Not for real security: cam locks give light to medium security (use a proper lock, hasp and padlock, or a safe). Not for heavy or structural loads (use bolts or several latches). Not for removable panels with no hinge (use quarter-turn fasteners, Dzus-type, or captive screws). Not for pulling a lid tight from outside without drilling the lid (use a draw latch). Not for round lids (use a bayonet mount or thread). Where the door must open with just a push, use a push-push latch or magnetic catch.
- **environment_limits**: Plated zinc suits indoor use; for outdoor, marine or washdown use choose 304 or 316 stainless steel (Southco offers corrosion-resistant materials). Sealed versions with gaskets reach NEMA 4 / IP65 (Southco). Vibration can shift a cam that has no detent or ramp; detented housings stop accidental movement (Southco E5). Printed PLA latches are brittle and soften with heat; use ABS or PETG (1944GPW). *(unverified parts omitted)*
- **safety_notes**: Tool-operated or keyed heads keep untrained people out of electrical enclosures and machinery (Southco sells tool-operated versions 'for security'); use them where a panel hides live parts or moving machinery. A lost key or a broken lock cylinder can leave a door stuck shut (a printed Rittal replacement notes the lock 'usually breaks in the lock cylinder'); keep spare keys and don't use a keyed latch on anything someone might need to open in an emergency. *(unverified parts omitted)*
- **common_failures**: (1) Wrong grip: the cam misses the frame lip or binds before it finishes turning; measure the total grip including any gasket, then pick the cam offset or use washers (Southco; Zer0s). (2) The body spins in the door: use a D-shaped or double-D hole, or a square one, matching the latch (Southco CM, E5). (3) The cam screw loosens and the cam turns on its spindle or drops off: tighten it to the stated torque (4 N·m on Southco CM). (4) The door rattles or the cam creeps open with vibration: use a detented, ramped or compression version (Southco). (6) The lock cylinder breaks (snd, printed Rittal replacement). (7) Printed cams snap: print solid in ABS or PETG and make the arm thicker (1944GPW; Zer0s). *(unverified parts omitted)*
- **related**: 
  - Quarter-turn fastener (Dzus-type): a stud in a removable panel that twists into a spring or cam on the frame; for lift-off panels rather than hinged doors
  - Compression latch: a cam latch whose cam also pulls back to squeeze a gasket (covered in this entry)
  - Draw latch (over-centre latch): mounted on the outside and pulls a lid tight with a lever; no hole through the lid
  - Turn button (cupboard turn): a flat bar screwed onto the frame that you swing over the door edge; the simplest surface-mounted relative
  - Push-push latch (push-to-open): opens with a push, with no knob or key
  - Magnet joint (magnetic catch): holds a light door shut with no turning, but gives no security
  - Pin-tumbler lock: the key mechanism often built into a cam lock's body
  - Bayonet mount (push-and-twist lock): the same short-twist idea for joining two round parts end to end

### Pictures, videos and models

- **links**: 
  - [Electronic-cam-lock.jpg (Wikimedia Commons, Chole Wu, 2020)](https://commons.wikimedia.org/wiki/File:Electronic-cam-lock.jpg): Photo of a cam lock showing the threaded body, mounting nut and flat cam arm (an electronic-key version) *(licence: CC BY-SA 4.0)*
  - [E5 Cam Latches catalogue pages (Southco)](https://media.southco.com/media/static/Literature/E5.en.pdf): Dimensioned drawings of quarter-turn cam latches: how grip is measured, the shaped panel hole, head styles, cams in 2 mm grip steps and push-to-close versions *(licence: link only)*
  - [CM Cam Locks catalogue pages (Southco)](https://media.southco.com/media/static/Literature/CM.en.pdf): Exploded drawing of a key cam lock (housing, nut, stop washer, cam, screw), the double-D panel hole, and straight, offset and hooked cams *(licence: link only)*
  - [E3 VISE ACTION Compression Latch catalogue pages (Southco)](https://media.southco.com/media/static/Literature/E3.en.pdf): Drawings of the two-stage compression latch: the first 90° swings the cam behind the frame, then the cam pulls the door tight *(licence: link only)*
  - [Quarter turn square drive cam latch (IRS Australia, YouTube; title and channel confirmed via YouTube oEmbed, not watched)](https://www.youtube.com/watch?v=e1S9bHh9xog): Product video of a quarter-turn cam latch opened with a square-drive key *(licence: link only)*
- **make_it_yourself**: 
  - [Quarter turn electronic equipment box battery door latch / clasp by 1944GPW (Printables 165350; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/165350-quarter-turn-electronic-equipment-box-battery-door): A small printed quarter-turn latch with a turning arm, retainer and clip that holds a battery door shut; customisable for hole size and wall thickness; ABS or PETG at 100% infill *(licence: CC BY)*
  - [CAM lock latch (mailbox) by Zer0s (Printables 187251; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/187251-cam-lock-latch-mailbox): A strengthened printed replacement cam for a mailbox cam lock, reshaped to turn the other way, with spacer washers to adjust its position *(licence: CC BY-NC)*
  - [Rittal Cam Lock replacement by snd (Printables 536652; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/536652-rittal-cam-lock-replacement): A printable copy of Rittal's standard cabinet cam lock (cylinder, body, cam and retaining ring) that fits a 22 mm square hole and swaps with the original parts *(licence: CC BY-NC)*
- **diagram_idea**: A view from behind an open cabinet door in two frames: (1) the cam lying alongside the door edge (open) with a curved 90° arrow from the knob; (2) the cam swung out behind the frame lip (closed), with a small side section showing the grip distance from the latch face to the cam's contact face.
- **sources**: 
  - https://en.wikipedia.org/wiki/Latch (Cam lock section; Cam_lock_(latch) redirects here; read as raw wikitext)
  - https://en.wikipedia.org/wiki/Camlock (disambiguation page; read as raw wikitext)
  - https://en.wikipedia.org/wiki/IP_code (read as raw wikitext)
  - https://media.southco.com/media/static/Literature/E5.en.pdf
  - https://media.southco.com/media/static/Literature/CM.en.pdf
  - https://media.southco.com/media/static/Literature/E3.en.pdf
  - https://spep.com/blog/comparison-of-cam-locks-and-quarter-turn-latches/
  - https://www.rencol.com/news/cam-locks-a-technical-guide-for-design-engineers-product-specifiers/
  - https://www.mcmaster.com/products/cam-latches/
  - https://www.printables.com/model/165350-quarter-turn-electronic-equipment-box-battery-door (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/187251-cam-lock-latch-mailbox (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/536652-rittal-cam-lock-replacement (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=e1S9bHh9xog (title confirmed via YouTube oEmbed)
  - https://commons.wikimedia.org/wiki/File:Electronic-cam-lock.jpg

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, making_tips_3d_printing, play_and_precision, reuse_cycles, safety_notes

## 160 Mechanical interlock

*locks, latches & catches.* A blocking part that stops one action while another is happening, such as a lid that can't open while a machine runs

### What it is

- **plain_name**: A blocking part that stops you doing one thing while another thing is happening, or until something else is in a safe position: a lid that can't open while the machine runs, two levers that can't both be pulled, or a switch that can't be turned on while a door is open
- **term**: Mechanical interlock (interlocking device; in machine safety: guard interlock, with or without guard locking; trapped-key interlock)
- **aliases**: 
  - interlock / safety interlock
  - interlocking device (ISO 14119 term)
  - guard interlock / interlocking guard / guard locking device
  - door interlock, lid interlock (microwave ovens, food processors, washing machines)
  - trapped-key interlock / key interlock / key-transfer system; often called Castell, Kirk, Bourre or Trayvou keys after makers (brands)
  - mutual lock / either-or lock / cross-locking
  - gearbox interlock / shift-rail interlock / interlock pin (stops two gears being selected at once)
  - drawer interlock / anti-tip interlock (only one drawer opens at a time)
  - generator interlock kit / breaker interlock (main breaker and generator breaker can't both be on)
  - railway interlocking / locking bed / tappet locking (signal-box lever frames)
- **family**: locks, latches & catches
- **other_families**: powered & active connectors
- **one_liner**: A mechanical interlock is a bar, pin, ball, plate or key that physically blocks one part from moving until another part is in the right (safe) position, so things can only happen in a safe order.
- **complexity**: A few parts. The simplest is a single sliding plate or pin plus notches in the two parts it controls. Typical parts: a blocking member (bolt, pin, row of balls, sliding plate, locking bar or cam), notches or grooves in the moving parts it blocks, a guide or housing, and often a spring or gravity to push the blocker into place. Trapped-key versions add a lock cylinder, a cam and a sliding bolt in a housing, plus a key that is transferred between locks. Guard-locking versions add a solenoid and a switch.
- **how_it_works**: Two (or more) moving parts each have a notch, groove or gap, and a blocking part sits between them. When one part moves away from its safe position, its solid surface pushes the blocker into the notch of the other part, so the second part can't move until the first comes back; this is how gearbox interlock pins stop two gears being selected and how a row of balls lets only one plunger or drawer move at a time. A sliding-plate interlock covers one switch or handle whenever another is on, as in a generator interlock kit. A trapped-key interlock does the same job with a key: the key can only be removed from a switch when the switch is off, and the same key is needed to open the access door, where it stays trapped until the door is shut again.

### Finder attributes

- **job**: 
  - lock, and release by hand: blocks a door, lid, lever or switch until another part is moved to its safe position, and releases as soon as it is
  - hold or release using power: guard-locking versions keep a guard locked with a spring or solenoid until the machine has stopped (see power)
- **motion**: multiple: the blocking bolt, pin, ball or plate slides (or pivots) a few millimetres; the parts it controls may rotate (shafts, hinged lids, levers) or slide (drawers, gear rails, breaker handles)
- **degrees_of_freedom**: The blocking part has 1 (it slides or swings in its guide). Each controlled part keeps its own normal motion (usually 1), but the interlock takes it down to 0 while the other part is out of its safe position. Taken together the group can only move one part at a time.
- **special_behaviour**: 
  - fail-safe or breakaway: a good interlock rests in the blocked (safe) state and should stay blocked if a spring or part breaks; safety switches use 'positive' action, where rigid parts force the contacts open instead of relying on a spring
  - hand-release only (locks under load, releases when a person operates it): the blocked part is freed only when a person moves the other part (or turns and transfers the key) back to its safe position
- **holding_principle**: shape (form-fit): a bolt, pin, ball or plate physically sits in the way. ISO 14119 requires mechanical guard locking to use direct blocking by shape, not friction or force alone. The blocker is often pushed into place by spring force or gravity, or driven directly by a cam on the moving part.
- **input_output**: not applicable (it blocks motion rather than passing it on)
- **power**: passive (no power needed) for purely mechanical interlocks (pins, balls, sliding plates, trapped keys). Powered guard-locking versions exist: in a 'spring lock, solenoid unlock' device the guard stays locked when power is lost and has a manual release; in a 'solenoid lock, spring unlock' device the guard unlocks when power is lost. Some trapped-key units have a solenoid that holds the key until the power circuit is off.
- **removability**: tool-free quick release for the controlled part (it is freed by hand as soon as the other part is in its safe position); the interlock hardware itself is deliberately semi-permanent: fixed with tool-only, one-way screws, rivets or welding so it can't easily be removed or bypassed
- **reuse_cycles**: effectively unlimited for everyday use: e.g. a commercial guard-locking safety switch is rated for 1 million switching cycles (Banner SI-LS42 manual). *(unverified parts omitted)*
- **tools_needed**: To fit: drill, screwdriver or spanner, often tamper-resistant (one-way or security) screws, rivets, thread-locking compound or lock washers; generator interlock kits are fitted to the breaker-panel cover and may need holes drilled. To use: none (or the trapped key).
- **seal**: none (the interlock itself does not seal; commercial safety switches housing the mechanism can be IP67)
- **load**: light to heavy depending on build. Strong only in the direction the blocker is loaded in shear or compression across the notch; weak against prying, bending the guard, or removing the part that carries it (e.g. taking off the breaker-panel cover defeats a cover-mounted generator interlock). Example: a commercial guard-locking switch holds up to 1500 N (337 lbf) of pull on its actuator when locked. Printed interlocks are light-duty.
- **adjustable**: Only at installation: mounting slots are for initial alignment, after which the device should be fixed through round holes or pinned so its position can't shift. It is not meant to be adjusted in use.
- **play_and_precision**: Some play is fine and helps it work smoothly, but the blocker must engage the notch deeply enough that it can't be forced past, and the actuator must line up with its slot (manufacturers give a minimum door-swing radius and warn against sideways forces on the actuator). It is not a locating device.
- **access_needed**: both sides: the blocker sits on the fixed frame and the notch or actuator on the moving part, usually inside the machine or behind a panel, so you need to reach inside to fit and adjust it; panel-cover generator kits fit from the front only
- **materials**: For demonstrators and low-risk home projects: PETG or PLA printed plates, pins and bars, with metal springs or dowels. *(unverified parts omitted)*
- **maker_difficulty**: easy to moderate for a simple sliding-plate or blocking-pin interlock on a jig, cabinet or toy (prints or cuts in a few parts); hard to make one that is genuinely safe for a real hazard, so for machinery, mains electricity or lasers buy certified interlock switches or listed kits

### Making it

- **processes**: 
  - 3D print (FDM): demonstrators, sliding plates, blocking bars and notched parts for low-risk projects
  - sheet metal: steel sliding plates and brackets (generator interlock kits)
  - CNC: machined pins, notched shafts and locking bars
  - off-the-shelf part: safety interlock switches, guard-locking switches, trapped-key interlocks, generator interlock kits *(unverified parts omitted)*
- **print_in_place**: partly: a blocking bar sliding in a printed guide can be printed in place with clearance, but reliable interlocks usually need an added metal spring, dowel pin or steel balls, and the controlled parts are separate; the railway interlocking model found is printed as separate parts and assembled
- **making_tips_3d_printing**: Design it so the resting (safe) state is blocked: if a spring breaks or a part falls out, the other part should stay locked rather than free. Prefer driving the blocker directly with a cam or a solid surface on the moving part (positive action) instead of relying on a printed spring; if you need a return spring, use a metal one, because plastic held bent all the time creeps and relaxes (DuPont design guide, p. 36). Give sliding blockers at least 0.3 mm clearance in their guides as a starting point (Prusa), and test-fit before final assembly. Make the notch and blocker deep enough that the blocker is loaded in shear or compression across its full width, and orient parts so layer lines don't run along the plane where the blocker would shear off (prints are stronger in one direction, like wood; Prusa). Don't make the interlock the thing that stops the door or lever at the end of its travel; add a separate stop (Banner). Use PETG or better for anything that sits near a warm motor, as PLA softens above about 60 °C (Prusa). Fix the interlock with screws that need a tool, or glue or rivet it, so it can't simply be unclipped. A printed interlock is fine for jigs, toys, puzzles and teaching models, but not as the only protection against a real hazard.
- **rules_of_thumb**: 
  - Mechanical guard locking must block by shape ('direct mechanical blocking due to form'); friction and force alone must not be relied on (ISO 14119:2013 as summarised in WSPS seminar slides, slide 14, https://www.safe-machines-at-work.org/fileadmin/user_upload/pdf/control_devices/Seminars_Functional_Safety_and_Validation/ISO_14119_-_Understanding_Different_Types_of_Interlocking_Devices.pdf).
  - Closing a guard must not by itself start the dangerous motion; a separate start action is needed (ISO 14119 definitions, WSPS slides 9-10; Banner SI-LS42 manual, https://info.bannerengineering.com/cs/groups/public/documents/literature/155400.pdf).
  - If the guard can be opened at any time (no guard locking), the time it takes to reach the danger must be longer than the time the machine takes to stop; otherwise keep the guard locked until motion has stopped (WSPS slides 12-13).
  - Use positive action: at least one switch mounted in 'positive mode', with contacts forced open by rigid parts, not springs, when the guard opens (Banner SI-LS42 manual).
  - Never use the interlock or its actuator as the mechanical end stop; limit the guard's travel separately (Banner SI-LS42 manual).
  - Make it hard to defeat: mount it out of reach or behind an obstruction, use fasteners that need a tool, and use one-way screws, rivets or welding; use slotted holes only for first adjustment, then fix through round holes or add dowels (Banner SI-LS42 manual).
  - Microwave ovens need at least two interlocks, and at least one must not be operable by any part of the body or by an object with a straight insertable length of 10 cm, and must be concealed; interlock failure must be monitored (21 CFR 1030.10, https://www.law.cornell.edu/cfr/text/21/1030.10).
  - In a trapped-key system the key is released only in the safe position and is trapped otherwise, so duplicate keys must be tightly controlled (Wikipedia, https://en.wikipedia.org/wiki/Trapped-key_interlocking).
  - ISO 14119 sorts interlocking devices into Type 1 (uncoded mechanical: cam, hinge), Type 2 (coded mechanical: shaped actuator), Type 3 (uncoded non-contact: plain magnet, inductive) and Type 4 (coded non-contact: coded magnet, RFID); preventing actuator substitution is one of the listed anti-defeat measures (ReeR, https://www.reersafety.com/en/academy/industrial-safety-guide/en-iso-14119safety-of-machinery/).
  - A commercial guard-locking switch gives an idea of scale: up to 1500 N holding force when locked, 1 million mechanical cycles, -25 to +70 °C, IP67 (Banner SI-LS42 specifications).
  - Springs under constant load or deflection should be metal; plastic springs creep and relax (DuPont General Design Principles, Module I, p. 36, https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf).
  - Start with at least 0.3 mm clearance for printed parts that must move (Prusa, https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135).

### When to use it

- **everyday_examples**: 
  - a microwave oven or food processor that won't run unless the door or lid is shut and locked
  - a manual car gearbox, where interlock pins stop two gears being selected at once
  - a generator interlock plate on a home breaker panel that stops the main breaker and the generator breaker being on together *(unverified parts omitted)*
- **when_to_use**: When two actions must never happen together, or must happen in a set order: a lid, door or guard that must stay shut while something dangerous moves or is powered; two levers, valves or switches that must never both be on; a machine that must be switched off before its door can be opened (trapped key); drawers that must not all open at once; a jig or toy where you want to force the right sequence of steps. It is also a nice way to make puzzles and teaching models of railway signal boxes and gearboxes.
- **when_not_to_use**: Don't rely on a home-made or 3D-printed interlock as the only protection against serious hazards such as machinery that can cut or crush, mains electricity, or laser cutters; use certified safety interlock switches, listed interlock kits, lockout-tagout and proper guards instead. Don't use an easily defeated design (a plain cam switch or a plain magnet) where people will be tempted to bypass it. If you only need a door to stay shut, use a latch or lock; if you need a part to go in only one way round, use keying (poka-yoke); if the condition to check is electrical (speed, temperature), an electrical or software interlock may be simpler, but keep a mechanical one where failure would be dangerous.
- **environment_limits**: Commercial safety switches are specified for roughly -25 to +70 °C and IP67 (Banner SI-LS42). Printed PLA parts soften above about 60 °C; PETG is fine below about 80 °C (Prusa). Plastic springs relax over time if kept bent (DuPont). Vibration can loosen fixings, so manufacturers recommend lock washers or thread-locking compound (Banner). *(unverified parts omitted)*
- **safety_notes**: Never bypass or defeat an interlock (taping switches, wedging lids, printing 'bypass keys'); OSHA accident summaries often involve operators who bypassed an interlock while working on machinery (Wikipedia, Interlock (engineering)). An interlock is part of a safety system, not a replacement for lockout-tagout. Guard locking needs an escape release that works from inside the guarded area if a person can get inside (ISO 14119 via WSPS slides). A spring-locked guard stays locked if power fails, so it needs a manual release. Cover-mounted generator interlocks are defeated by removing the panel cover, and some kits are not UL-listed, so some inspectors won't accept them; mains wiring work should be done by a qualified electrician (Wikipedia, Generator interlock kit). Watch for pinch points between sliding plates and bars.
- **common_failures**: (1) Deliberately bypassed: make it hard to defeat (concealed, coded, tool-only fixings) and make the safe way easy to use. (2) Blocker doesn't fully engage because of misalignment or a loose mounting: fix through round holes, pin it, use lock washers. (3) Return spring breaks or relaxes and the part is left unblocked: use positive (directly driven) action and metal springs. (4) Actuator or switch used as the end stop and gets broken: add a separate stop. (5) Cover or part carrying the interlock is removed, defeating it (panel-cover generator kits): mount the interlock on the parts themselves where possible. (7) In gearbox-style designs, you must bring everything back to the neutral position before changing which part may move; forgetting this makes it feel stuck (Thang's interlocking-shaft notes). *(unverified parts omitted)*
- **related**: 
  - Basic latches (spring latch, slide bolt, hook and eye): hold one door shut, but don't link the state of two parts
  - Pin-tumbler lock: a trapped-key interlock is built around a keyed lock cylinder; the lock alone only checks the key, not the state of another part
  - Combination lock (wheel pack): also uses a bar that can only drop into aligned notches, but the condition is a secret number, not the position of another part
  - Keying (one-way-only fit, poka-yoke): stops parts going together the wrong way, rather than stopping two actions happening at once
  - Solenoid latch and holding electromagnet (maglock): powered locks often used for guard locking; they can fail open or fail locked
  - Ratchet and pawl: a pawl that drops into notches, but to allow motion one way rather than to link two parts
  - Geneva drive: its locking arc stops the output turning between steps, a built-in interlock inside a stepping mechanism
  - Ball detent (spring plunger): a ball in a groove that only holds position; an interlock ball wedges a second part instead

### Pictures, videos and models

- **links**: 
  - [Trapped key interlock switchgear door.JPG (Wikimedia Commons, Wtshymanski)](https://commons.wikimedia.org/wiki/File:Trapped_key_interlock_switchgear_door.JPG): Photo of a trapped-key interlock on an electrical switchgear cabinet door, fixed with one-way security screws *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Interlocking machine locking bed.jpg (Wikimedia Commons, JonRoma)](https://commons.wikimedia.org/wiki/File:Interlocking_machine_locking_bed.jpg): Photo of the steel-bar locking bed under a railway signal-box lever frame, where notched bars cross-lock conflicting levers *(licence: CC BY-SA 2.5 (reuse with credit))*
  - [Interlocking shafts 1 (Nguyen Duc Thang, thang010146, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=5yr9OeGqnYo): CAD animation: a pin in a fixed hole lets only one of two shafts turn at a time *(licence: link only)*
  - [Interlocking shafts 6a (Nguyen Duc Thang, thang010146, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=YtbEjL9oOjE): CAD animation: a row of balls lets only one of several plungers go down its full stroke at a time *(licence: link only)*
  - [How the Gearbox Selectors and Detents Work (Nick's Land Rover)](https://www.nickslandrover.co.uk/how-the-gearbox-selectors-and-detents-work/): Photos of a real gearbox's selector shafts, detents and interlock ('inhibitor') bars holding the unused shafts in neutral *(licence: link only)*
- **make_it_yourself**: 
  - [Mechanical railway signal box interlocking model by Robin Wilson (Printables 1033405; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/1033405-mechanical-railway-signal-box-interlocking-model): Printable three-lever tappet interlocking (British Railways 1943 pattern): pulling one tappet locks or frees the others so conflicting signals and points can't be set *(licence: Standard Digital File License (not Creative Commons))*
- **diagram_idea**: Two parallel sliding rods, each with a notch, and a short pin in a hole between them: with both rods in their 'off' position either one can slide, but as soon as one moves its solid side pushes the pin into the other rod's notch and locks it, shown in three frames (both free, left moved and right locked, right moved and left locked).
- **sources**: 
  - https://en.wikipedia.org/wiki/Interlock_(engineering)
  - https://en.wikipedia.org/wiki/Trapped-key_interlocking
  - https://en.wikipedia.org/wiki/Interlocking
  - https://en.wikipedia.org/wiki/Generator_interlock_kit
  - https://en.wikipedia.org/wiki/Lever_frame
  - https://www.safe-machines-at-work.org/fileadmin/user_upload/pdf/control_devices/Seminars_Functional_Safety_and_Validation/ISO_14119_-_Understanding_Different_Types_of_Interlocking_Devices.pdf
  - https://info.bannerengineering.com/cs/groups/public/documents/literature/155400.pdf
  - https://www.reersafety.com/en/academy/industrial-safety-guide/en-iso-14119safety-of-machinery/
  - https://www.law.cornell.edu/cfr/text/21/1030.10
  - https://help.na.panasonic.com/answers/how-to-use-the-safety-lock-on-the-food-processor/
  - https://www.govinfo.gov/content/pkg/FR-2023-05-04/pdf/2023-08997.pdf
  - https://www.nickslandrover.co.uk/how-the-gearbox-selectors-and-detents-work/
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.youtube.com/watch?v=5yr9OeGqnYo (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=YtbEjL9oOjE (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=U7MBaIPoPZ4 (Manual Transmission Interlock Pin Explained, DrivelineMaster; verified via YouTube oEmbed)
  - https://commons.wikimedia.org/wiki/File:Trapped_key_interlock_switchgear_door.JPG
  - https://commons.wikimedia.org/wiki/File:Interlocking_machine_locking_bed.jpg
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.printables.com/model/1033405-mechanical-railway-signal-box-interlocking-model (URL from Printables API, page not opened; details read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, everyday_examples, materials, off_the_shelf_parts, processes, reuse_cycles

## 161 Pin-tumbler lock (and other tumbler locks)

*locks, latches & catches.* A key lifts spring-loaded pins or levers to exactly the right heights so a plug can turn; the everyday door lock

### What it is

- **plain_name**: The everyday key lock: a row of little spring-loaded pins (or flat plates or levers) jams the lock until a key with the right bumps lifts every one to exactly the right height, and then the core can turn
- **term**: Pin-tumbler lock (cylinder lock); other tumbler locks: wafer tumbler lock, lever tumbler lock, disc-detainer lock, tubular pin-tumbler lock
- **aliases**: 
  - Yale lock (name taken from the Yale inventors and brand)
  - cylinder lock / lock cylinder / keyed cylinder
  - Euro cylinder / euro-profile cylinder (DIN profile), oval cylinder, rim cylinder (night-latch cylinder), mortise cylinder, key-in-knob cylinder
  - tumbler lock / keyed lock
  - dimple lock (pin tumbler with the cuts on the flat side of the key)
  - wafer lock / wafer tumbler lock / plate tumbler (desk, locker and car locks)
  - lever lock / lever tumbler lock / detainer lock / mortice lock, e.g. 'five-lever lock' (UK)
  - disc-detainer lock / disc tumbler lock / rotating-disc lock; Abloy (brand)
  - tubular lock / circle pin tumbler / radial lock; Ace lock (trade name)
  - padlock (a portable lock that usually contains one of these mechanisms)
- **family**: locks, latches & catches
- **one_liner**: A tumbler lock uses several small movable blockers (pins, wafers, levers or discs) that each have to be moved to one exact position by the matching key before the lock's core can turn or its bolt can slide.
- **complexity**: A small assembly that acts as one unit. Pin-tumbler: outer housing (shell or cylinder, whose top part holding the pin chambers is called the bible), rotating plug with a keyway, usually five or six pin stacks each made of a key pin, a driver pin and a spring, a retaining clip or cam at the back, and the key. Wafer lock: plug, single-piece spring-loaded wafers, housing. Lever lock: bolt with a stump, a stack of flat levers each with a gate, lever springs, case, and a bit key. Disc-detainer: stack of slotted rotating discs, sidebar, housing, key; no springs.
- **how_it_works**: In a pin-tumbler lock a plug sits inside a housing, and holes run through both. Each hole holds a key pin (touching the key) and a driver pin pushed down by a spring; with no key the driver pins sit across the join between plug and housing (the shear line), so the plug can't turn. The right key lifts each pin pair by exactly the amount that puts the gap between key pin and driver pin on the shear line, so the plug turns and a cam at its back moves the bolt; a wrong key leaves at least one pin straddling the line. The other tumbler locks use the same 'every blocker to exactly the right place' idea (lifting too far is as bad as not far enough): flat wafers that must sit flush with the plug, levers that must be lifted so a gate lines up with the bolt stump, or discs the key rotates until their notches line up and a sidebar can drop in.

### Finder attributes

- **job**: lock, and release by hand: keeps a door, drawer, box, padlock shackle or cabinet locked until someone turns the matching key
- **motion**: multiple: the pins, wafers or levers slide or pivot a millimetre or so; the plug then rotates (often a quarter turn to a full turn; a disc-detainer key is turned about 90 degrees) and works a cam that slides the bolt or releases a padlock shackle
- **degrees_of_freedom**: Locked: 0 between plug and housing. Unlocked: the plug has 1 (rotation about its own axis). Inside, each pin, wafer or lever has 1 (it slides or pivots in its own chamber).
- **special_behaviour**: hand-release only (locks under load, releases when a person operates it): it stays locked however hard you push or turn without the key, and opens only when the matching key sets every tumbler
- **holding_principle**: shape (form-fit): pins, wafers, levers or a sidebar physically block the plug or bolt; spring force (a small spring behind each pin or wafer) returns them to the locked position; disc-detainer locks use no springs
- **input_output**: not applicable as a transmission; in use, turning the key rotates the plug, and a cam or tailpiece converts that into the short straight travel of the bolt or the release of a shackle
- **power**: passive (no power needed). Electronic and motorised locks are separate entries.
- **removability**: tool-free quick release for the thing it locks (just turn the key); the lock itself is removable: a euro cylinder comes out after loosening one set screw so it can be changed without changing the rest of the lock, and padlocks simply unhook
- **reuse_cycles**: effectively unlimited for normal use: the European cylinder standard EN 1303 grades durability at 25,000, 50,000 or 100,000 test cycles (Lockwiki summary of EN 1303). *(unverified parts omitted)*
- **tools_needed**: To use: the key. To rekey: a plug follower and a pinning kit (locksmith tools). For printed locks: sandpaper or files, and ballpoint-pen springs or small compression springs. *(unverified parts omitted)*
- **seal**: none; at best dust-resistant: some padlocks have a spring-loaded cover over the keyhole to keep dirt out (Wikipedia, Padlock), and disc-detainer locks, having no springs, cope better with harsh outdoor conditions
- **load**: medium: strong against turning and pulling on the plug without the key but weaker than the door or hasp around it. EN 1303 requires keys to survive 2.5 N·m of torque, and plug torque resistance of 2.5 to 15 N·m depending on security grade (up to 20-30 N·m in the attack-resistance grades). Common weak points are lock snapping of euro cylinders with pliers, drilling, and, for luggage locks, thin shackles. 3D-printed locks are light-duty toys and demonstrators.
- **adjustable**: Yes, by rekeying: a locksmith (or a careful maker) changes the key pins (and driver or spacer pins) to suit a new key, or swaps the whole cylinder. Master keying adds spacer pins so a second key also works. Lever locks are harder to master-key; some safe lever locks can be reset with a change key.
- **play_and_precision**: High precision is what makes it secure. Real key cuts differ by fractions of a millimetre (e.g. Kwikset keys step in 0.023 in, about 0.58 mm); binding between the pins, plug and housing, which depends on manufacturing tolerances, is what lets a picker set pins one at a time (Lockwiki, Binding and Pin-tumbler). *(unverified parts omitted)*
- **access_needed**: both sides: a door cylinder goes right through the door and is fixed from the door edge or inside; a padlock needs no fitting (not applicable)
- **materials**: Printed demonstrators: PLA or PETG bodies and plugs, printed or metal-dowel pins (e.g. 5 mm steel dowels), ballpoint-pen springs. *(unverified parts omitted)*
- **maker_difficulty**: moderate: a scaled-up, 3- to 5-pin printed demonstrator works with a well-tuned printer, some sanding and pen springs; a lock that is actually secure needs precise machining and hardened parts, so buy one

### Making it

- **processes**: 
  - off-the-shelf part: lock cylinders, padlocks, cabinet cam locks (often wafer locks), mortice lever locks, tubular locks
  - 3D print (FDM): scaled-up working pin-tumbler, wafer, lever and disc-detainer demonstrators and lock boxes *(unverified parts omitted)*
- **print_in_place**: no: the plug, housing, pins, key and springs are printed or bought separately and assembled (springs are usually metal pen springs)
- **making_tips_3d_printing**: Start from a proven model and print it bigger than a real lock; real key steps are well under a millimetre, too fine for FDM. Plug and housing: one maker printed them in PLA at 0.2 mm layers with 10% infill and printed the small driver and key pins at finer 0.1 mm layers (Ceravyn's model, via 3DPrint.com). Print the plug and housing with the pin holes vertical, because the big round plug is easier to sand than the small pin holes (Spoolpin, Printables 586683). Print the key lying flat, for strength and so the layer lines let it slide in smoothly (LockManipulator, Printables 975759). Clearances: start with at least 0.3 mm between parts that move (Prusa) and test-fit; one OpenSCAD model warns that it has many close-fitting parts and needs a well-tuned printer, and needed supports for the body, core and key (SquidgyPlastic, Printables 519939). Pins: metal dowels (e.g. 5 mm steel dowels of various lengths) slide far better than printed pins (Rocco's Vault with Pin Tumbler Lock). Springs: pen springs cut to length work (Ceravyn; SquidgyPlastic used 24 x 4.5 mm pen springs); weak springs are better than strong ones: Rocco's vault used springs of 4 mm outside diameter, 0.3 mm wire, 20 mm free length and 0.25 N/mm, and found most stronger springs made the key hard to insert. Lever locks: levers and spacers that have to flex should be printed in PETG (Rocco's Mini Vault with Lever Tumbler Lock). Use PETG rather than PLA for anything left in a hot car or sun, since PLA softens above about 60 °C (Prusa). *(unverified parts omitted)*
- **off_the_shelf_parts**: Euro-profile cylinder (single, double, thumb-turn; anti-snap rated to TS007 3 star or Sold Secure SS312 Diamond), rim cylinder (night-latch cylinder), mortise cylinder, key-in-knob cylinder, keyed-alike and master-keyed cylinder sets, padlocks (laminated or solid body), cabinet cam lock (quarter-turn, wafer or pin cylinder), tubular (radial) cam lock, five-lever mortice deadlock to BS 3621, disc-detainer padlock, pinning kit and plug follower (for rekeying), PTFE lock lubricant, compression springs (pen springs), steel dowel pins.
- **rules_of_thumb**: 
  - Most pin-tumbler cylinders have five or six pin stacks (Wikipedia, Pin tumbler lock, https://en.wikipedia.org/wiki/Pin_tumbler_lock).
  - EN 1303 cylinder grades: at least 5 movable detainers (pins) for key-security grades 3-4 and 6 for grades 5-6, with at least 15,000 to 100,000 effective key differs; durability grades of 25,000, 50,000 or 100,000 cycles; keys must survive 2.5 N·m; temperature grades must still turn with at most 1.5 N·m of key torque at -25 °C and +65 °C (Lockwiki summary of EN 1303, https://www.lockwiki.com/index.php/EN_1303).
  - Real key cuts are tiny: a Kwikset .023 key steps its cut depths in 0.023 in (about 0.58 mm), spaces cuts 0.150 in (about 3.8 mm) apart, allows at most 4 steps between neighbouring cuts (MACS) and has a plug diameter of 0.498 in (Key Bitting Specifications, T. J. Thomas, 2025, p. 57, https://lsamichigan.org/Tech/KeyBittingSpecifications-TylerJThomas.pdf), so printed demonstrators are scaled up.
  - A good tumbler must block when lifted too far as well as too little (double-acting detainer, Barron 1778; Wikipedia, Lever tumbler lock, https://en.wikipedia.org/wiki/Lever_tumbler_lock). Early single-pin locks could be opened by lifting everything high.
  - UK insurers usually ask for a five-lever mortice lock to BS 3621 on wooden outside doors; BS 3621:2007 requires a 20 mm bolt throw (Wikipedia, Lever tumbler lock).
  - Lubricate locks sparingly with a PTFE lock lubricant every 3-6 months (every 3 months in dusty or corrosive places) and never with dry graphite or silicone (Master Lock care guide, https://www.masterlock.com/cms/locker/care).
  - For printed locks, weak springs work best: 0.25 N/mm, 4 mm OD, 20 mm free length pen-type springs worked in Rocco's printed pin-tumbler vault, while stronger ones made the key hard to insert (https://www.printables.com/model/820936-vault-with-pin-tumbler-lock, URL from Printables API, page not opened; details read via the API).
  - Start with at least 0.3 mm clearance for printed parts that must move (Prusa, https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135).

### When to use it

- **everyday_examples**: 
  - a front-door cylinder lock (euro cylinder or rim cylinder) and most key padlocks: pin tumblers
  - desk drawers, office cabinets, lockers, electrical panels and car locks: wafer tumbler locks
  - UK wooden front doors (five-lever mortice locks) and safe-deposit boxes: lever tumbler locks
  - vending machines, lifts and bike locks with a round key: tubular pin-tumbler locks
- **when_to_use**: When something should open only for people who hold a physical key: doors, boxes, cabinets, lockers, padlocked gates and chests. Buy real locks for anything that matters. Print one to learn how locks work, as a fun lock box or puzzle, or as a teaching model; keyed-alike or master-keyed cylinders suit a workshop where one key should open several doors.
- **when_not_to_use**: Don't use a 3D-printed lock to protect anything valuable; any printed lock is weak (Hackaday) and easy to pick. Where keys get lost or shared a lot, a combination lock or an electronic keypad lock avoids handing out keys. For a child-proof cupboard that should look plain, use a hidden magnetic latch. For locks exposed to grit and harsh weather, a disc-detainer lock (no springs) or a covered keyhole copes better. If you only need to stop two actions happening together, use an interlock (a trapped-key interlock uses a keyed lock for this).
- **environment_limits**: EN 1303 temperature grades test that a cylinder still turns with at most 1.5 N·m of key torque at -25 °C and +65 °C (Lockwiki). Water can freeze inside; regular lubrication helps minimise freezing, and dusty or corrosive locations need cleaning and lubricating every 3 months (Master Lock). Disc-detainer locks, having no springs, are better in harsh conditions (Wikipedia). Printed PLA locks soften above about 60 °C; PETG is fine below about 80 °C (Prusa). Plastic springs relax if held compressed, so use metal springs for pins (DuPont, p. 36).
- **safety_notes**: Few physical hazards; the main risks are lockouts (keep a spare key somewhere safe) and false security. Locks can be picked, bumped, snapped or drilled, and a clear photo of a key can be enough to copy it (the TSA luggage master keys were reproduced from published images; Wikipedia, Luggage lock). Only pick locks you own or have permission to pick. *(unverified parts omitted)*
- **common_failures**: (1) Key stiff or won't turn because of dirt, a worn key or frozen water: blow out the keyway and use a little PTFE lock lubricant; avoid graphite build-up and silicone (Master Lock). (3) Euro cylinder snapped with pliers: fit an anti-snap cylinder (TS007 3 star or SS312 Diamond; Wikipedia). (4) Key breaks in the lock: don't use the key as a lever; print keys flat and thick. (5) Printed lock binds: pin holes too tight, elephant's foot or rough layer lines; sand, print pins at finer layers and give more clearance. (6) Printed springs or overly strong springs make the key hard to insert: use weaker metal springs (Rocco). (7) Tumblers mis-assembled (pins in the wrong holes, wafers upside down): lay parts out in order and follow the model's diagram. *(unverified parts omitted)*
- **related**: 
  - Warded lock: an older, low-security key lock where fixed obstructions (wards) only check the key's outline; there are no movable tumblers, so a skeleton key can open it
  - Combination lock (wheel pack): the same 'line every blocker up' idea but set by numbers instead of a key; nothing to lose, but the code can be forgotten or watched
  - Magnetic keyed lock: tumblers moved by coded magnets in the key instead of by its shape
  - Cam latch (quarter-turn cam lock): the latch that a small cabinet lock cylinder often turns
  - Basic latches (spring latch, slide bolt): the bolt that a key-operated cylinder usually retracts
  - Mechanical interlock: trapped-key interlocks use keyed locks to force a safe order of operations
  - Ratchet and pawl: Reuleaux described key locks as ratchet trains in which the tumbler acts as a locking pawl (Kinematics of Machinery, pp. 466-467)
  - Hidden latches (magnetic-key latch, puzzle lock): no visible keyhole at all
  - Solenoid latch and servo or motorised latch: electrically released locks for keypads, cards and apps

### Pictures, videos and models

- **links**: 
  - [Pin tumbler no key.svg (Wikimedia Commons; original by GWirken, vector by Pbroks13)](https://commons.wikimedia.org/wiki/File:Pin_tumbler_no_key.svg): Cut-away diagram of a pin-tumbler lock with no key: driver pins pushed across the shear line block the plug *(licence: CC BY-SA 3.0 and GFDL 1.2+ (reuse with credit))*
  - [Pin tumbler with key.svg (Wikimedia Commons; original by Wapcaplet, vector by Pbroks13)](https://commons.wikimedia.org/wiki/File:Pin_tumbler_with_key.svg): The same lock with the correct key inserted: every pin gap sits on the shear line *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Lever tumbler lock animation.gif (Wikimedia Commons, Joram van Hartingsveldt, 2008)](https://commons.wikimedia.org/wiki/File:Lever_tumbler_lock_animation.gif): Animation of a key lifting the levers of a lever tumbler lock so the bolt stump passes through their gates *(licence: CC BY-SA 3.0 and GFDL 1.2+ (reuse with credit))*
  - [Deviant's Lock Diagrams and Animations (TOOOL US)](https://toool.us/deviants-lock-diagrams-animations/): Pin-tumbler diagrams and animations: basics, security (spool and mushroom) pins, bumping, snapping, impressioning and master keying *(licence: free for non-commercial use with attribution, derivatives must keep the same freedom (Creative Commons style, variant not named))*
  - [How locks work - Animation | How Pin Tumbler Locks Work (How it Works?, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=oGiV0mYNk0s): 3D animation of a pin-tumbler lock with and without the right key *(licence: link only)*
- **make_it_yourself**: 
  - [Pin Tumbler Lock by SquidgyPlastic (Printables 519939; page appeared in search results, details read via the Printables public API)](https://www.printables.com/model/519939-pin-tumbler-lock): OpenSCAD script (Customizer settings) that generates a working, oversized pin-tumbler lock and key; needs five pen springs (24 x 4.5 mm); printed in PETG *(licence: CC BY-SA)*
  - [Cutaway pin tumbler lock (easy print, no supports) by LockManipulator (Printables 975759) (URL from Printables API, page not opened)](https://www.printables.com/model/975759-cutaway-pin-tumbler-lock-easy-print-no-supports): Three-pin cutaway lock and key that prints without supports, for seeing the pins move *(licence: Public domain (CC0))*
  - [Vault with Pin Tumbler Lock by Rocco's Stuff (Printables 820936) (URL from Printables API, page not opened)](https://www.printables.com/model/820936-vault-with-pin-tumbler-lock): Printed lock box with a working pin-tumbler lock using 5 mm steel dowels as pins and small compression springs; prints without supports in PLA or PETG *(licence: CC BY-NC-SA)*
  - [Mini Vault with Lever Tumbler Lock by Rocco's Stuff (Printables 1059790) (URL from Printables API, page not opened)](https://www.printables.com/model/1059790-mini-vault-with-lever-tumbler-lock): All-printed lock box with a working lever tumbler lock; flexing levers and spacers printed in PETG *(licence: CC BY-NC-SA)*
  - [Wafer Lock by zbzzn (Printables 576652) (URL from Printables API, page not opened)](https://www.printables.com/model/576652-wafer-lock): Printable cutaway wafer tumbler lock, with an Onshape model for making more keys *(licence: CC BY)*
- **diagram_idea**: A side cut-away of a plug inside its housing with five pin stacks, shown three ways: no key (driver pins cross the shear line, a red 'blocked' mark), wrong key (one pin too high, one too low), and right key (all gaps exactly on the shear line, the plug turning), with the shear line drawn as a bold dashed line.
- **sources**: 
  - https://en.wikipedia.org/wiki/Pin_tumbler_lock
  - https://en.wikipedia.org/wiki/Lever_tumbler_lock
  - https://en.wikipedia.org/wiki/Wafer_tumbler_lock
  - https://en.wikipedia.org/wiki/Disc_tumbler_lock
  - https://en.wikipedia.org/wiki/Tubular_pin_tumbler_lock
  - https://en.wikipedia.org/wiki/Warded_lock
  - https://en.wikipedia.org/wiki/Padlock
  - https://en.wikipedia.org/wiki/Luggage_lock
  - https://en.wikipedia.org/wiki/Bitting_(key)
  - https://www.lockwiki.com/index.php/Pin-tumbler
  - https://www.lockwiki.com/index.php/Wafer
  - https://www.lockwiki.com/index.php/Lever
  - https://www.lockwiki.com/index.php/Binding
  - https://www.lockwiki.com/index.php/EN_1303
  - https://lsamichigan.org/Tech/KeyBittingSpecifications-TylerJThomas.pdf
  - https://www.masterlock.com/cms/locker/care
  - https://en.wikisource.org/wiki/Page:The_Kinematics_of_Machinery.djvu/488
  - https://en.wikisource.org/wiki/Page:The_Kinematics_of_Machinery.djvu/489
  - https://3dprint.com/76671/3d-printed-pin-tumbler-lock/
  - https://hackaday.com/2019/03/21/3d-printing-a-combination-lock/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://commons.wikimedia.org/wiki/File:Pin_tumbler_no_key.svg
  - https://commons.wikimedia.org/wiki/File:Pin_tumbler_with_key.svg
  - https://commons.wikimedia.org/wiki/File:Lever_tumbler_lock_animation.gif
  - https://toool.us/deviants-lock-diagrams-animations/
  - https://www.youtube.com/watch?v=oGiV0mYNk0s (verified via YouTube oEmbed)
  - https://www.printables.com/model/519939-pin-tumbler-lock (appeared in search results; read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/975759-cutaway-pin-tumbler-lock-easy-print-no-supports (URL from Printables API, page not opened)
  - https://www.printables.com/model/586683-cutaway-pin-tumbler-lock (URL from Printables API, page not opened)
  - https://www.printables.com/model/820936-vault-with-pin-tumbler-lock (URL from Printables API, page not opened)
  - https://www.printables.com/model/1059790-mini-vault-with-lever-tumbler-lock (URL from Printables API, page not opened)
  - https://www.printables.com/model/576652-wafer-lock (URL from Printables API, page not opened)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** common_failures, making_tips_3d_printing, materials, play_and_precision, processes, reuse_cycles, safety_notes, tools_needed

## 162 Combination lock (wheel pack)

*locks, latches & catches.* Several wheels with notches that line up only when each is turned to the right number, letting a bar or shackle move

### What it is

- **plain_name**: A lock with no key: a stack of wheels, each with a notch, that only lets the bar or shackle move when every wheel has been turned to the right number so all the notches line up
- **term**: Combination lock (wheel-pack lock): multiple-dial (number-wheel) lock, or single-dial rotary combination lock
- **aliases**: 
  - permutation lock / keyless lock / code lock
  - word lock / letter combination lock; Wordlock (brand)
  - rotary combination lock / dial lock / combination padlock (school locker padlock); Master Lock (brand)
  - safe lock / vault lock / mechanical safe combination lock; Sargent & Greenleaf (brand)
  - number-wheel lock / multiple-dial lock / thumbwheel lock
  - luggage lock / suitcase lock / briefcase combination latch / TSA lock (with a key override for security staff)
  - combination bike lock / combination cable lock
  - cryptex (a cylinder puzzle box with letter wheels, from the novel The Da Vinci Code)
  - resettable (set-your-own) combination lock
- **family**: locks, latches & catches
- **one_liner**: A combination lock holds a bar, bolt or shackle in place with a stack of notched wheels, and releases it only when each wheel has been turned to its secret number so all the notches line up in a row.
- **complexity**: A small assembly that acts as one unit. Multiple-dial lock: several number wheels, each on an inner sleeve or hub, a shackle or locking pin with teeth, springs or detents that make the wheels click, a case, and often a reset button. Single-dial lock: dial and spindle, drive cam with a drive pin, a wheel pack of usually three (sometimes four) wheels, each with a gate (notch), a drive pin and a fly, spacing washers and a tension washer, a lever with a fence and a nose, a lever spring, a bolt or shackle, and a case; safe locks add relockers and a change-key wheel.
- **how_it_works**: Each wheel has a notch (gate) in its rim or bore. A bar with teeth (the shackle pin in a luggage lock, or the fence on a lever in a dial lock) rests against the wheels: while any wheel is at the wrong number its solid rim blocks the bar, and when every notch is lined up the bar drops into the notches and the lock opens. In a multiple-dial lock you turn each numbered wheel directly. In a single-dial lock the dial turns a drive cam whose drive pin picks up the first wheel, which then picks up the next through its own pin and fly; turning left and right a set number of times parks each wheel at its number in turn, and once all the gates are under the fence the lever drops, catches the cam, and further turning pulls the bolt back.

### Finder attributes

- **job**: lock, and release by hand: keeps a shackle, bolt or lid locked until someone who knows the number sequence dials it in
- **motion**: multiple: the wheels and dial rotate (many full turns, back and forth, for a dial lock; less than one turn per wheel for number-wheel locks); the shackle, bolt or pin then slides a few millimetres to a few centimetres to open
- **degrees_of_freedom**: Each wheel has 1 (rotation about the shared axle); the lever or fence has 1 (it pivots or slides a little); once released the shackle or bolt has 1 (it slides, and a padlock shackle can also swing). Locked, the shackle or bolt has 0.
- **special_behaviour**: 
  - hand-release only (locks under load, releases when a person operates it): pulling on the shackle or bolt can't open it; it opens only when a person dials the right numbers
  - indexing (clicks into set positions): number wheels on luggage, bike and many printed padlocks have small spring detents so each number clicks into place; a safe lock's bolt is held in position by a ball detent
- **holding_principle**: shape (form-fit): the wheel rims physically block the fence or toothed pin; spring force pushes the lever and fence against the wheels and works the detents; a tension (spring) washer adds light friction so the wheels don't drift
- **input_output**: not applicable as a transmission; inside a dial lock, the dial's rotation is passed from wheel to wheel by drive pins and flys with some free play (lost motion) before each wheel is picked up, and the drive cam finally converts rotation into the straight travel of the bolt
- **power**: passive (no power needed). Electronic combination locks and keypads are separate; some electronic safe locks power themselves from a tiny generator spun by the dial (Wikipedia, Combination lock).
- **removability**: tool-free quick release for what it locks (just dial the numbers); a padlock simply unhooks; a safe lock is screwed to the inside of the door and should only be serviced by a safe technician
- **reuse_cycles**: Safe-lock makers advise a service by a qualified technician every year, more often in dusty or humid places (Sargent & Greenleaf). *(unverified parts omitted)*
- **tools_needed**: To use: none. To change the code: a change key (safe locks) or the lock's reset button or shackle-press procedure (luggage padlocks). To fit: screwdriver (safe locks mount with four 1/4-20 screws and a dial ring), sometimes tools to cut and file the dial spindle to length. Printed locks: optional glue, sometimes an M3 screw and nut, tweezers and a file for small parts.
- **seal**: none
- **load**: light to heavy depending on type. Luggage and cheap bike locks are light: their thin shackles are easy to cut and many can be decoded by feel. Combination padlocks are medium. Safe locks only guard the combination; the safe's own boltwork carries the load, and relockers fire if the lock is attacked. Strong in the direction the fence or teeth are loaded; weak against cutting the shackle or prying the case. 3D-printed locks are light-duty toys.
- **adjustable**: Yes, the code can usually be changed: safe locks with a change key (the key frees the wheel centre from the wheel case so it can be set to a new number); resettable padlocks and luggage locks by setting the new code while the shackle is pressed in or a reset button is held; printed locks by printing different wheels or moving the drive nubs.
- **play_and_precision**: Real dial locks have a dialing tolerance of about ±0.75 to ±1.25 numbers on a 100-number dial, so there may be only about 40 truly different positions per wheel (Matt Blaze). A printed three-wheel dial lock can be forgiving to about ±3 numbers (LoboCNC's kit card). The wheels must be kept apart by spacing washers so one wheel doesn't drag the next.
- **access_needed**: both sides: a safe lock's case is fitted inside the door with the dial on the outside, joined by a spindle through the door; padlocks and luggage locks need no fitting (not applicable)
- **materials**: Printed locks: PLA, PLA+ or PETG; PETG is preferred for thin flexing rings, and some PLAs are too brittle (Feynman's dial lock box). *(unverified parts omitted)*
- **maker_difficulty**: moderate for a number-wheel padlock or cryptex printed from a proven model; hard for a single-dial wheel-pack vault lock (its designer warns it is not for beginners, because small tolerance errors add up)

### Making it

- **processes**: 
  - off-the-shelf part: combination padlocks, resettable luggage locks, combination bike locks, briefcase latches, mechanical safe locks
  - 3D print (FDM): number-wheel padlocks, cryptexes, dial-lock boxes and vault doors *(unverified parts omitted)*
- **print_in_place**: partly: most printed combination locks are separate wheels, shackle and case pieces that you assemble (and the code is set by how you assemble or which wheels you print); one padlock prints its detent springs in place in the body and you snap them free after printing, and one kit card prints flat and snaps together without glue
- **making_tips_3d_printing**: Start from a proven design and test-print one or two wheels before printing them all, because small tolerance errors add up across a stack of wheels (Rocco's Vault with Combination Lock). Give moving parts at least 0.3 mm clearance to start with (Prusa). Tiny parts need a well-tuned printer: LoboCNC's kit card asks for PLA at exactly 0.2 mm layers, a 0.4 mm or smaller nozzle, near-perfect bed levelling, no elephant's foot and tuned pressure advance so corners aren't over-extruded. Make the parts that take load solid: BCaron's padlock prints the shackle and tumblers with 10 or more walls and 100% infill (PLA+), with supports only under the detents and never inside the print-in-place springs. Check that the drive nubs don't rub on the face of the next wheel, or they will drag it along and scramble the code; file them down if they do (LoboCNC). Install the wheels in the right order and the right way round (Rocco). Rotate stacked tumblers against each other to smooth the sliding faces, and adjust detent spring tension after a test (BCaron). A little candle wax on the inner rings makes a printed dial lock run smoother and last longer (Feynman's dial lock box). After closing, spin the dial or wheels so the code is scrambled (LoboCNC). Use PETG for thin rings that must flex, and anything left in a warm place, since PLA softens above about 60 °C (Prusa).
- **off_the_shelf_parts**: Combination padlock (single-dial, 3-number), resettable (set-your-own) 3- or 4-digit combination padlock, TSA-accepted luggage lock (Travel Sentry), combination cable bike lock, briefcase or case combination latch, mechanical safe lock (UL 768 Group 2, 2M, 1 or 1R) with dial, dial ring, spindle and change key, key-locking dial, spy-proof dial, mechanical push-button combination lock or key lock box; for prints: M3 screw and nut, small compression springs.
- **rules_of_thumb**: 
  - A 100-number dial with three numbers suggests 1,000,000 combinations, but a dialing tolerance of ±0.75 to ±1.25 numbers leaves only about 40 to 67 distinct positions per wheel and roughly 51,200 to 242,406 usable combinations in practice; UL Group 2 locks need at least 1,000,000 combinations and at most ±1.25 tolerance, and CEN Class A locks need at least 80,000 usable combinations (Matt Blaze, Safecracking for the computer scientist, pp. 5-6, https://www.mattblaze.org/papers/safelocks.pdf).
  - A number-wheel lock with n wheels of d symbols has d to the power n codes: e.g. 3 wheels of 6 digits give 216, and 4 wheels of 10 digits up to 10,000 (BCaron's printed padlocks, https://www.printables.com/model/490983-combination-padlock and https://www.printables.com/model/682893-combination-padlock-v2, URLs from Printables API, pages not opened; details read via the API).
  - Dial a three-wheel safe lock left four times to the first number, right three times to the second, left twice to the third, then right until it stops; each extra wheel adds one more turn at the start; if you pass a number, start again (Sargent & Greenleaf Mechanical Safe Lock Guide, pp. 4 and 9, https://cdn2.hubspot.net/hubfs/5825267/SargentAndGreenleaf_May2019/pdf/book_mech_locks.pdf).
  - A movable fly's travel is typically 10 to 12 dial numbers, equal to twice the fly's width plus the drive pin's width, which lets every number be used (Sargent & Greenleaf guide, p. 12).
  - When choosing a code: don't make all numbers end in 0 or 5, don't use a rising or falling sequence, keep at least 10 numbers between neighbouring numbers, and (on that lock) keep the last number out of 95-99 and 0-20 so the bolt can relock (Sargent & Greenleaf guide, p. 3).
  - After changing a combination, try it at least three times with the door open before closing it; a good setting also opens half a number either side (Sargent & Greenleaf guide, pp. 4 and 18).
  - Heavy petroleum lubricants can swell acetal (Delrin, Celcon) parts; use only a very thin film of a suitable lubricant (Sargent & Greenleaf guide, p. 22).
  - Start with at least 0.3 mm clearance for printed parts that must move (Prusa, https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135).

### When to use it

- **everyday_examples**: 
  - a school or gym locker padlock with a single numbered dial
  - a suitcase, briefcase or bike cable lock with a row of number wheels
  - the dial on a safe or bank vault door
  - cryptex puzzle boxes and escape-room props with letter wheels
- **when_to_use**: When several people need to open something without carrying keys, when keys would get lost, or when you want to change who can get in just by changing the code: shared lockers, gym bags, bikes, luggage, toolboxes, gift and puzzle boxes, geocaches and escape-room props. Printing one is a great way to learn how the wheel pack works, and a cryptex or dial box makes a memorable gift.
- **when_not_to_use**: Don't use cheap number-wheel locks or any printed lock for real security: many multiple-dial locks can be opened by feeling for slight machining irregularities, and thin shackles can be cut (Lockwiki; Wikipedia, Luggage lock). Where people must be able to get in quickly in the dark or in an emergency, a key or lever lock is faster. If the code will be watched or shared widely, an electronic keypad with changeable user codes may suit better. Use a pin-tumbler lock if you'd rather carry a key than remember a number.
- **environment_limits**: Safe locks should be serviced every year, more often in dusty, dirty or humid places (Sargent & Greenleaf). Padlocks in dusty or corrosive places should be cleaned and lubricated every 3 months; regular lubrication also helps stop freezing (Master Lock). Heavy petroleum lubricants swell acetal wheel parts (Sargent & Greenleaf). Safe locks carry a thermal relocker tab that melts at about 165 °F (74 °C) to lock the bolt during a torch attack (Sargent & Greenleaf). Printed PLA softens above about 60 °C; PETG is fine below about 80 °C (Prusa).
- **safety_notes**: The main risk is being locked out: record your combination somewhere safe, since once set there may be no way to open the lock without it (Master Lock), and never close a safe door until a new combination has been tried at least three times with the door open (Sargent & Greenleaf). Printed locks are weak and shouldn't guard anything of real value (Hackaday). *(unverified parts omitted)*
- **common_failures**: (1) Mis-dialling, e.g. passing a number and turning back, or reading the dial at an angle: start again from the beginning and look straight at the dial (a very high share of safe lockouts; Sargent & Greenleaf). (2) Shifted or loose dial ring changes all the numbers; the number-one cause of safe lockouts (Sargent & Greenleaf). (3) Stuck fly, broken drive pin or a slipping wheel (often the wheel next to the drive cam, after snapping the dial hard); last number set in the 'forbidden zone' causes a lock-in (Sargent & Greenleaf). (4) Pushing a padlock shackle back in can jolt the wheels out of line so it relocks (Wikipedia, Rotary combination lock), and a number-wheel lock left on its code is open to anyone: scramble the wheels after closing. (5) Printed locks: drive nubs rubbing the next wheel so wheels drag, wheels fitted in the wrong order or upside down, tolerance errors adding up, detent springs too weak or too strong; test-fit and adjust (LoboCNC, Rocco, BCaron). (6) Cheap multi-dial locks can be decoded by feel; buy a better lock for real security (Lockwiki).
- **related**: 
  - Pin-tumbler lock (and other tumbler locks): the same 'every blocker in line' idea, but set by the shape of a key instead of by numbers
  - Disc-detainer lock: rotating slotted discs and a sidebar, like a wheel pack, but the key turns the discs
  - Mechanical interlock: a bar that can only drop into aligned notches, but the notches line up because other parts are in safe positions, not because of a secret code
  - Hidden latches (magnetic-key latch, puzzle lock): the secret is where to hold a magnet or how to tip the box, not a number
  - Push-button (mechanical keypad) combination lock: buttons move internal wheels or sliders instead of turning a dial; some accept the code in any order
  - Solenoid latch and servo or motorised latch: electronic keypads and code locks that release with power
  - Ball detent (spring plunger): the small detent that makes each number wheel click into place

### Pictures, videos and models

- **links**: 
  - [Combination discs.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Combination_discs.png): Exploded view of the notched discs of a number-wheel lock set to 9-2-4 (companion images Combination unlocked.png and Combination locked.png show the toothed pin free and blocked) *(licence: CC BY-SA 3.0 (reuse with credit))*
  - [Rotary combination lock (internal).svg (Wikimedia Commons, Mliu92, 2021)](https://commons.wikimedia.org/wiki/File:Rotary_combination_lock_(internal).svg): Labelled diagram of a single-dial safe lock: wheels with gates, drive cam, fence, lever and bolt *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [How does a Combination Lock work? (Jared Owen, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=sftkP4CjjZs): 3D animation of a dial combination padlock's wheel pack, drive pins and shackle release *(licence: link only)*
  - [Safecracking for the computer scientist (Matt Blaze, University of Pennsylvania, 2004 draft)](https://www.mattblaze.org/papers/safelocks.pdf): Photos and explanation of a safe lock's dial, cam, lever, fence and wheel pack, plus keyspace and tolerance numbers *(licence: link only (all rights reserved by the author))*
  - [Sargent and Greenleaf Mechanical Safe Lock Guide (2006)](https://cdn2.hubspot.net/hubfs/5825267/SargentAndGreenleaf_May2019/pdf/book_mech_locks.pdf): Manufacturer's illustrated glossary of wheel pack parts (wheels, flys, drive pins, drive cam, lever, fence, relocker), dialing and combination-changing instructions and lockout troubleshooting *(licence: link only)*
- **make_it_yourself**: 
  - [3-Digit Combination Padlock Kit Card by LoboCNC (Printables 524569) (URL from Printables API, page not opened)](https://www.printables.com/model/524569-3-digit-combination-padlock-kit-card): Flat-printed kit that snaps together (no glue) into a working single-dial, three-wheel padlock; you set the code by where you fit the drive nubs *(licence: CC BY-SA)*
  - [Combination Padlock v2 by BCaron (Printables 682893) (URL from Printables API, page not opened)](https://www.printables.com/model/682893-combination-padlock-v2): Locker-sized number-wheel padlock with 3 or 4 tumblers of 6 or 10 digits, spring detents (printed in place or separate) and SolidWorks source files *(licence: CC BY-SA)*
  - [Vault with Combination Lock by Rocco's Stuff (Printables 740370; page appeared in search results, details read via the Printables public API)](https://www.printables.com/model/740370-vault-with-combination-lock): Printed vault door with a working three-wheel dial combination lock; needs 5 mm steel dowels and a thin-section bearing; the designer warns it is not for beginners *(licence: CC BY-NC)*
  - [Cryptex (5, 6, 7, 8 or 10 letter wheels) by Cees (Printables 28937) (URL from Printables API, page not opened)](https://www.printables.com/model/28937-cryptex-5-6-7-8-or-10-letter-wheels): Letter-wheel cryptex with a changeable code, designed to print without supports *(licence: CC BY-NC-SA)*
  - [Feynman's Dial Combination Lock Box by vaclavh (Printables 1041701) (URL from Printables API, page not opened)](https://www.printables.com/model/1041701-feynmans-dial-combination-lock-box): One-knob dial combination lock box with a removable shield so you can watch the wheels line up; designed for PETG *(licence: CC BY)*
- **diagram_idea**: An exploded side view of a three-wheel dial lock: dial and drive cam on the left, three wheels each with a drive pin and fly, and a lever with a fence resting on the wheel rims; then an end view showing the fence blocked by one wrong wheel, and a second end view with all three gates lined up and the fence dropped in.
- **sources**: 
  - https://en.wikipedia.org/wiki/Combination_lock
  - https://en.wikipedia.org/wiki/Rotary_combination_lock
  - https://en.wikipedia.org/wiki/Luggage_lock
  - https://en.wikipedia.org/wiki/Padlock
  - https://en.wikipedia.org/wiki/Disc_tumbler_lock
  - https://www.lockwiki.com/index.php/Combination
  - https://www.lockwiki.com/index.php/Binding
  - https://www.mattblaze.org/papers/safelocks.pdf
  - https://cdn2.hubspot.net/hubfs/5825267/SargentAndGreenleaf_May2019/pdf/book_mech_locks.pdf
  - https://www.masterlock.com/support/instructions/4680_TSA_instruction_sheet
  - https://www.masterlock.com/cms/locker/care
  - https://hackaday.com/2019/03/21/3d-printing-a-combination-lock/
  - https://hackaday.com/tag/combination-lock/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://commons.wikimedia.org/wiki/File:Combination_discs.png
  - https://commons.wikimedia.org/wiki/File:Rotary_combination_lock_(internal).svg
  - https://www.youtube.com/watch?v=sftkP4CjjZs (verified via YouTube oEmbed)
  - https://www.printables.com/model/740370-vault-with-combination-lock (appeared in search results; read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/524569-3-digit-combination-padlock-kit-card (URL from Printables API, page not opened)
  - https://www.printables.com/model/682893-combination-padlock-v2 (URL from Printables API, page not opened)
  - https://www.printables.com/model/490983-combination-padlock (URL from Printables API, page not opened)
  - https://www.printables.com/model/28937-cryptex-5-6-7-8-or-10-letter-wheels (URL from Printables API, page not opened)
  - https://www.printables.com/model/1041701-feynmans-dial-combination-lock-box (URL from Printables API, page not opened)
  - https://www.printables.com/model/177104-combination-lock (URL from Printables API, page not opened)
  - https://www.printables.com/model/1829473-working-combination-padlock-choose-your-own-code (URL from Printables API, page not opened)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** materials, processes, reuse_cycles, safety_notes

## 163 Rotary latch (claw latch)

*locks, latches & catches.* A rotating jaw that swings shut around a striker bar and is held by a catch, as in car doors and hatches; releases when a lever or cable trips the catch

### What it is

- **plain_name**: A hidden, spring-loaded hook that snaps shut around a metal bar or pin on the frame when you push a door or lid closed, and stays shut until someone pulls a handle, button or cable that lets it go (the latch inside a car door)
- **term**: Rotary latch (claw latch)
- **aliases**: 
  - claw latch; claw-style rotary latch (supplier name for the version whose claw engages a striker peg or loop)
  - rotary slam latch; slam latch (the wider family of latches you close by pushing or slamming; Wikipedia 'Latch', IQS Directory)
  - rotary pawl latch; jaw latch; fork latch; fork-bolt latch
  - single-stage rotary latch; two-stage rotary latch (has a 'secondary' or 'safety' catch position); single-rotor and double (dual) rotor rotary latch
  - car door latch; bonnet (hood) latch; boot (trunk) or deck-lid latch; tailgate latch
  - remote-release rotary latch; cable-release latch; electronic or electromechanical rotary latch
  - the rotating hook: rotor, claw, jaw, catch or fork-bolt (FMVSS 206 calls it the fork-bolt; Antonescu et al. call it the catch)
  - the part that holds the hook shut: pawl, detent lever, trigger, or 'ratchet' (car-latch papers use 'ratchet' and 'pawl' for this same part, and sometimes 'ratchet' for the claw, so check the drawing)
  - the bar it grabs: striker, striker bolt, striker pin, striker peg, U-striker, wire-form striker, keeper; 'Nader bolt' is a nickname for the striker bolt on car doors (Wikipedia 'Latch')
- **family**: locks, latches & catches
- **other_families**: quick-release & tool-free, one-way & ratchet, powered & active connectors
- **one_liner**: A latch in which a spring-loaded rotating hook (the claw or rotor) swings shut around a striker bar as the door is pushed closed and is then held by a small catch (the pawl), so the door stays shut until a handle, button, cable or motor lifts the catch.
- **complexity**: A small assembly that acts as one unit: a housing (usually two steel plates, with mounting holes or threaded studs); the claw (rotor) on one pivot pin; the pawl (catch) on a second pivot pin; a spring that swings the claw open and a spring that pushes the pawl against the claw; a release lever or trigger with a hole or slot for a cable or rod; and often a rubber bumper. A separate striker (a bolt with washer and O-ring, a bent wire loop or a U-shaped bracket) bolts to the other part. A full system adds an actuator (paddle, T-handle, pull handle, push button, key lock or electronic actuator) and a cable or rod to connect it (Southco; Machine Design).
- **how_it_works**: As the door closes, the striker bar slides into the V-shaped mouth of the claw and pushes on its inner face, so the claw turns and its hook wraps round the striker. Meanwhile the spring-loaded pawl rides along the claw's outer edge and drops into a notch, blocking the claw from turning back (Antonescu et al.: the pawl 'follows the catch exterior profile' until it blocks the catch in the fully latched condition). When someone pulls on the door, the claw presses on the pawl, but the contact is placed so that this push hardly turns the pawl: the turning effect it has about the pawl's pivot is smaller than the pawl spring's, so pulling or shaking does not open it (Antonescu et al.). To open, a handle, button, key, cable, rod or motor lifts the pawl out of the notch, and the claw spring swings the claw open and releases the striker. A two-stage latch has a second notch that catches the claw part way, so a door that was not pushed fully shut is still held (the 'secondary latched position') but rattles until it is pushed home (Machine Design; FMVSS 206).

### Finder attributes

- **job**: 
  - lock, and release by hand: holds a door, lid, hood or hatch shut until someone pulls a handle, presses a button or pulls a cable
  - join and hold: keeps a door or panel pressed against its frame against pulling, vibration and (in cars) crash loads
  - hold or release using power: electronic versions release the pawl with a motor or solenoid, for key fobs, card readers or remote buttons (Southco; Machine Design)
- **motion**: rotate: inside the latch the claw swings through part of a turn to wrap round the striker, and the pawl swings a small amount to drop into its notch; the striker itself enters the slot in a nearly straight line as the door closes. No source gave the claw's angle of turn.
- **degrees_of_freedom**: While closing: 1 (the claw's turn is tied to how far the striker has gone into the slot). Once latched: 0 at the latch, because the striker is trapped in the claw and the claw is blocked by the pawl, apart from the small play a bumper or door seal takes up. The pawl is a separate part with 1 freedom (its own swing) that is used only to hold and release.
- **special_behaviour**: 
  - self-locking (pulling on the door presses the claw against the pawl in a way that does not push the pawl out of its notch, so pulls and vibration do not open it; Antonescu et al.)
  - hand-release only (it opens only when a handle, button, cable, key or motor lifts the pawl)
  - quick-release (closing is 'push-to-close': just push or slam the door; opening takes one pull or push on the actuator; Southco; Machine Design; SPEP)
  - one-way (the claw turns freely in the closing direction and is caught by the pawl, but cannot turn back open until released; the claw and pawl work like a short ratchet and pawl)
  - indexing (a two-stage latch clicks into a secondary 'safety' position and then the fully latched position; Southco; FMVSS 206)
  - self-aligning or self-centring (the V-shaped mouth guides the striker in; double-rotor latches give the most tolerance for misalignment, and McMaster-Carr sells self-aligning versions whose 'slanted edges help misaligned doors close smoothly')
- **holding_principle**: shape (the claw's hook wraps round the striker and the pawl blocks the claw; form-fit), plus spring force (springs keep the pawl in its notch and swing the claw open on release)
- **input_output**: not applicable (it is a holding joint; the release cable or rod only moves the pawl)
- **power**: passive (no power needed): it latches by the push of the door and releases by hand through a cable, rod or handle. Electronic and electromechanical rotary latches also exist (Southco R4-EM range and 'electronic and mechanical access options'; Machine Design mentions key fobs and internal electronic actuators): an electric actuator lifts the pawl. *(unverified parts omitted)*
- **removability**: tool-free quick release: open with the handle, button or cable and close by pushing the door; the latch and striker themselves are bolted on and can be removed
- **tools_needed**: To use: none (or a key for locking actuators). To fit: a drill for the mounting holes and the striker hole, a screwdriver or spanner for the two mounting screws (for example, the small Southco R4-05 takes M4 or 8-32 screws or 4.5 mm through-bolts) and for the striker bolt (M5 or 10-24 thread), plus cable cutters or crimping tools for the release cable if it is cut to length.
- **seal**: none: the latch does not seal by itself; a separate door gasket does that. A built-in rubber bumper traps the striker against the rotor to stop rattle and noise (Machine Design; Southco R4 'integrated bumper for anti-vibration').
- **load**: medium to heavy for its size. Southco rates its R4 range at up to 2,600 N (R4-05, 46 x 22 mm), 3,600 N (R4-10), 8,000 N (R4-20), 14,000 N (R4-30, FMVSS 206 compliant with a support plate) and 18,000 N (R4-50, double rotor) (Southco rotary brochure). A claw-style rotary latch rig-tested at over 6.0 kN transverse load (direct pull), but is 'NOT for use with passenger restraint doors' (Weston Body, via Industrial Hardware Distributors). US car door latches must not separate under 11,000 N pulling straight away from the latch face and 9,000 N in the fork-bolt opening direction when fully latched, 4,500 N in the secondary position, and 30 g inertia loads (FMVSS 206). Single-rotor latches suit rigid doors; flexible doors that twist need double-rotor latches (Southco). *(unverified parts omitted)*
- **adjustable**: The latch itself has no adjustment. *(unverified parts omitted)*
- **play_and_precision**: small play: the claw holds the striker loosely unless a rubber bumper or the door seal presses them together (Machine Design: the bumper 'traps the striker between a rubber bumper and the rotor'). It does not locate a door precisely. Misalignment tolerance depends on type: light-duty single-rotor latches are 'best for rigid door applications with minimal misalignment concerns', medium and large single-rotor latches 'allow for considerable misalignment', and double-rotor latches give 'maximum accommodation for misalignment' (Southco brochure).
- **access_needed**: one side only (blind) for use: the latch is hidden inside the door or cabinet and is released remotely through a cable or rod; fitting it needs access to the inside face of the door and the frame where the latch and striker bolt on
- **materials**: Latch: steel with zinc, zinc-nickel or black zinc-nickel plating, or 304 stainless steel (Southco R4); stainless for maximum corrosion resistance (Southco brochure). Strikers: plated or stainless steel bolts and wire forms, or moulded strikers (Southco R4). Actuators: plastic, or zinc or aluminium die-cast; cables: stainless steel with a vinyl coating and an acetal liner (Machine Design). Doors: sheet metal, composite, plastic or wooden panels. *(unverified parts omitted)*
- **maker_difficulty**: easy to fit a bought one (two screws, a striker bolt and a cable to a handle); moderate to hard to make your own, because the claw and pawl notches must be shaped accurately and be strong, and it needs pivot pins and two springs, so a printed one suits only light doors and demonstrations

### Making it

- **processes**: 
  - off-the-shelf part: the usual choice; rotary latches, strikers, cables and actuators are sold as a system (Southco; McMaster-Carr)
  - woodwork: fitting bought latches in wooden cabinets, van and camper storage, and boxes *(unverified parts omitted)*
- **making_tips_3d_printing**: Printed rotary latches are only for light doors, demonstrations and learning; buy a steel one for anything that carries real load or protects people. FDM parts, 'like wood', are stronger in one direction than the other (Prusa knowledge base), and a hook printed standing up would snap along a layer line. (2) Sandwich the claw and pawl between two housing plates, as bought latches do, so each pivot pin is supported on both sides; use steel pins or bolts (for example M3 or M4) as pivots and a steel bolt as the striker. (3) Use a small torsion or compression spring to open the claw and another to push the pawl in; printed springs lose force over time. (4) Shape the pawl so that the claw's push on it points close to the pawl's pivot, so the pawl spring can hold it (the latch holds because the claw's turning effect on the pawl is smaller than the spring's; Antonescu et al.); test by pulling hard on the striker and checking the pawl does not creep out. (5) Use PETG, ABS or nylon rather than PLA for parts under constant spring load or in a warm place, and solid infill around the hook and notches. (6) Add a soft pad (for example printed TPU) where the striker stops, to stop rattle, as the integrated bumpers on bought latches do (Southco; Machine Design). (7) Allow clearance on the pins and test-fit first, since FDM parts need tuned tolerances (Prusa). (8) Route the release cable with gentle bends and a clip or clamp on its end fitting. *(unverified parts omitted)*
- **off_the_shelf_parts**: Rotary latches (single-stage or two-stage; single or double rotor; left-hand or right-hand; hand, bottom, top, direct or dual-trigger actuation; with or without an integrated bumper; mechanical or electronic); striker bolts (with hex washer and O-ring), wire-form strikers (single-hole or slot mount), U-strikers, moulded strikers and striker mounting brackets; release cables with end fittings (barrel, L, Z, ball, eyelet or bare cable) and retainer clips; actuators (paddle handles, T-handles, flush or surface pull handles, push buttons, key-locking and electronic actuators; cable splitters for several latches) (Southco; Machine Design). McMaster-Carr families: 'Remote-Release Rotary Latches (with Safety Catch)', 'Remote-Release Rotary Latches with Cable and Handle', 'Rotary Latches with Handle', 'Electronic Remote-Release Rotary Latches' and 'Self-Aligning Remote-Release Rotary Latches with Safety Catch'. Search terms: 'rotary latch', 'claw latch', 'rotary slam latch', 'two-stage rotary latch', 'striker bolt', 'rotary latch cable', 'paddle latch actuator'.
- **rules_of_thumb**: 
  - Pick the latch by the load it must hold: the Southco R4 range runs from 2,600 N for the 46 x 22 mm R4-05 to 18,000 N for the double-rotor R4-50 (Southco 'Rotary Latching Systems' brochure, pp. 7-8, https://media.southco.com/media/static/documents/brochures/20200717-BR-Rotary-WEB.pdf).
  - Use a two-stage latch where a door must never be left falsely latched: the secondary position holds a door that was not pushed fully shut, and it rattles until pushed home (Machine Design, https://www.machinedesign.com/automation-iiot/cables-connectors-enclosures/article/21832079/how-to-get-the-best-rotary-latches; Southco brochure p. 6).
  - Match the rotor to the door: light-duty single-rotor latches for rigid doors with little misalignment, larger single-rotor for 'considerable misalignment', double-rotor for flexible doors and the most misalignment (Southco brochure p. 6).
  - Reference strength for doors that carry people: in the fully latched position a US car door latch must not separate under 11,000 N pulling straight away from the latch face or 9,000 N in the fork-bolt opening direction, 4,500 N in the secondary position, and must stay latched under a 30 g inertia load (FMVSS 206, 49 CFR 571.206, https://www.law.cornell.edu/cfr/text/49/571.206).
  - For remote release, use stainless steel cable with an acetal liner inside a coated jacket; L-shaped cable ends need a retaining clip and resist vibration, while Z-shaped ends need no clip but resist vibration less (Machine Design).
  - The latch holds because the pawl spring's turning effect is larger than the turning effect the claw's push has about the pawl pivot; releasing it means applying a force to the pawl (or its lever) that overcomes that spring (Antonescu et al., 'Automotive door latch mechanisms', 2020, https://www.utgjiu.ro/rev_ing/pdf/2020-2/03_L.pdf).

### When to use it

- **everyday_examples**: 
  - car side doors: the latch in the door edge grabs a striker bolt on the door pillar
  - a car bonnet (hood), released by a lever inside the car pulling a cable (Machine Design; Antonescu et al.)
  - a car boot (trunk) lid or tailgate
  - storage lockers on camper vans, trucks and boats that open with a paddle or push button (Machine Design)
- **when_to_use**: When a door, lid, hatch or panel should close just by pushing it shut and open with one pull or button press, with no visible latch on the outside. Good for vehicle, van and boat doors, machine guards and enclosure doors, and anything that shakes or is bumped, because it holds against vibration. It also lets you put the handle somewhere different from the latch (remote release by cable or rod), use one handle to open several latches on a wide panel, and hide the latch completely for security (SPEP; Machine Design). Choose a two-stage version where a half-closed door would be dangerous.
- **when_not_to_use**: Not needed for light cabinet doors: use a magnetic catch, a push-push latch or a ball catch. Not when the lid must be pulled tight against a seal from outside: use a draw latch or compression latch. Not where you want a key or knob turned through the door itself: use a cam latch. Not as security on its own: add a locking actuator or a padlock hasp. A home-printed claw is not suitable for doors that people ride behind or that hold heavy loads: buy a certified steel latch (FMVSS 206-compliant for vehicle doors). And avoid it where there is no room behind the door face for the latch body and the striker.
- **environment_limits**: Plain zinc-plated steel suits indoor or covered use; for outdoor, marine or wash-down use choose zinc-nickel plating or stainless steel (Southco offers stainless 'for maximum corrosion resistance'). Vibration is handled well, but use a version with a rubber bumper to stop rattle (Southco; Machine Design). Railway applications may need latches that meet the EN 45545-3 fire standard (Southco brochure). Cables can stretch or corrode: stainless cable with a liner resists both (Machine Design). Printed plastic claws and springs will creep and weaken under constant spring load, especially in a hot vehicle; *(unverified parts omitted)*
- **safety_notes**: A broken or stretched release cable can leave a door stuck shut: car hood latches have a second release lever for exactly this (Antonescu et al.), so give any enclosure you might need to open in an emergency a second release, and never use a latch that only opens from outside on anything a person or animal could be shut inside. Exposed push buttons that open a latch can be triggered by knocks: Wikipedia's 'Car door' article describes doors opening in crashes when outside push buttons were struck, which is why car handles are pulled rather than pushed. Doors that carry people need certified latches (FMVSS 206 in the US; elsewhere, regulation No. 11 on door latches and door retention components, per Wikipedia 'Car door'). *(unverified parts omitted)*
- **common_failures**: (1) False latching: the door catches only on the secondary position or is not fully closed, and rattles; push it home, and use a two-stage latch so a half-closed door is at least held (Machine Design). (2) The door will not latch, or needs slamming: the striker is out of line with the claw's mouth; reposition the striker (slot-mount strikers) or use a larger single-rotor or a double-rotor latch that accepts more misalignment (Southco). (3) The latch will not release, or releases only sometimes: cable stretch, a kinked or corroded cable, or the wrong end fitting; use stainless cable with a liner, gentle bends and a clipped L-fitting (Machine Design). (4) The release cable breaks and the door is stuck shut: provide a second release path (Antonescu et al.). (5) Rattle and noise: fit a latch with an integrated bumper (Southco). *(unverified parts omitted)*
- **related**: 
  - Draw latch (over-centre latch): mounted outside, pulls a lid tight against a seal with a lever, but cannot be slammed shut and is visible
  - Push-push latch (push-to-open, heart-cam latch): also closes with a push, but opens with a second push; for light cabinet doors, with no remote release
  - Cam latch (quarter-turn cam lock): a knob or key through the door turns an arm behind the frame; no push-to-close
  - Sear and trigger (trip release mechanism): the same idea of a small catch holding back a larger force; the pawl in a rotary latch acts as a sear
  - Ratchet and pawl: the claw's notches and the pawl work like a short ratchet; a two-stage latch has two teeth
  - Solenoid latch (solenoid lock, electric strike) and servo or motorised latch: powered alternatives; electronic rotary latches combine a rotary latch with a powered release
  - Bowden cable (push-pull cable): the cable used to release a rotary latch from a distant handle
  - Magnet joint (embedded magnets, magnetic catch): push-to-close too, but only light holding force
  - Spring latch bolt (house door latch): a sloped bolt that the strike plate pushes back as the door closes; the house-door equivalent of push-to-close (Wikipedia 'Latch')
  - Compliant one-piece latch (flexure latch): a printed one-piece catch with no separate springs, for much lighter duty

### Pictures, videos and models

- **links**: 
  - [Rotary Latching Systems brochure (Southco)](https://media.southco.com/media/static/documents/brochures/20200717-BR-Rotary-WEB.pdf): Page 6 shows photos of a single-stage latch (unlatched, fully latched) and a two-stage latch (unlatched, secondary latched, fully latched), and single-rotor vs double-rotor latches; later pages show the R4 range with load ratings *(licence: link only)*
  - [Southco | R4 Rotary Latch System Animation (Fix 8 Films, Vimeo, 85 s; title and description confirmed via Vimeo oEmbed, not watched)](https://vimeo.com/240646729): Product animation of a rotary latch system with its latch, cable and actuator *(licence: link only)*
  - [R4 Rotary Latch catalogue pages (Southco)](https://media.southco.com/media/static/Literature/r4-r.en.pdf): Dimensioned drawings of small rotary latches, their release levers and pull direction, striker bolts, wire-form strikers and mounting brackets *(licence: link only)*
  - [Rotary Latches: The Complete Guide (IQS Directory, YouTube; title and channel confirmed via YouTube oEmbed, not watched)](https://www.youtube.com/watch?v=u4kbrPenG8E): Overview video of rotary latch types and uses *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Spring-loaded latching mechanism by ConceivablyEngineering (Printables 130253; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/130253-spring-loaded-latching-mechanism): A related printed latch 'inspired by a slam latch' but using spring-loaded sliding pins rather than a rotating claw: you press the pins to open and to close it, so it cannot be slammed; fits M3 screws at 100% scale, and the printed spring needs thick walls (over 3 mm) and slow printing *(licence: CC BY-SA)* *(unverified parts omitted)*
- **diagram_idea**: Three side views of one latch: (1) open, with the claw's V-shaped mouth facing an incoming striker pin and the pawl resting on the claw's rim; (2) closing, with the striker pushing into the mouth and turning the claw while the pawl rides along; (3) latched, with the claw wrapped round the striker and the pawl dropped into its notch, and an arrow showing a cable lifting the pawl to release it; a small inset marks the extra 'safety' notch of a two-stage latch.
- **sources**: 
  - https://www.utgjiu.ro/rev_ing/pdf/2020-2/03_L.pdf
  - https://www.law.cornell.edu/cfr/text/49/571.206
  - https://media.southco.com/media/static/documents/brochures/20200717-BR-Rotary-WEB.pdf
  - https://media.southco.com/media/static/Literature/r4-r.en.pdf
  - https://www.machinedesign.com/automation-iiot/cables-connectors-enclosures/article/21832079/how-to-get-the-best-rotary-latches
  - https://spep.com/blog/a-guide-to-rotary-latch-systems/
  - https://us.tchweb.com/blogs/access-hardware/rotary-latch
  - https://www.iqsdirectory.com/articles/latch/rotary-latches.html
  - https://www.industrialhwe.com/rotary-latches/weston-body-rotary-latch-claw-style.asp
  - https://www.mcmaster.com/products/rotary-latches/ (read via WebFetch summary)
  - https://en.wikipedia.org/wiki/Latch (read via the Wikipedia API)
  - https://en.wikipedia.org/wiki/Car_door (read via the Wikipedia API)
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://vimeo.com/240646729 (title confirmed via Vimeo oEmbed)
  - https://www.youtube.com/watch?v=u4kbrPenG8E (title confirmed via YouTube oEmbed)
  - https://www.printables.com/model/130253-spring-loaded-latching-mechanism (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** adjustable, common_failures, environment_limits, links, load, make_it_yourself, making_tips_3d_printing, materials, power, print_in_place, processes, reuse_cycles, safety_notes

## 164 Folding-blade lock (liner lock, lockback, slip joint)

*locks, latches & catches.* A pivot that locks a folding blade or arm open when a spring bar or rocker drops behind it; a slip joint only holds it with a detent

### What it is

- **plain_name**: The catch in a folding pocket knife or tool that holds the blade open: a springy strip or rocker in the handle drops in behind the blade's heel so it cannot fold back until you push the catch aside; the simplest kind has no catch and just holds the blade with spring pressure
- **term**: Folding-blade lock (liner lock, lockback, slip joint)
- **aliases**: 
  - lock-blade knife; clasp knife; locking folder (knives that lock open; Wikipedia 'Pocketknife')
  - liner lock; locking liner; Linerlock (trademark of knifemaker Michael Walker; brand)
  - frame lock; integral lock; Reeve Integral Lock or R.I.L. (the frame itself is the spring; named after Chris Reeve)
  - lockback; back lock; spine lock; mid lock; rocker-bar lock; 'buck knife' used loosely for any lockback (Wikipedia)
  - slip joint; slipjoint; spring-back knife; backspring knife (non-locking; may have a 'half-stop')
  - friction folder (no spring and no lock; e.g. higonokami)
  - related lock types, often brand names: Tri-Ad lock (Cold Steel; brand), Compression Lock and Ball Bearing Lock (Spyderco; brand), AXIS lock (Benchmade; brand), button lock or plunge lock, collar lock or twist lock (Opinel; brand)
  - parts: tang (the blade's heel), lock face, lock bar or leaf spring, rocker bar, backspring, stop pin, pivot pin, detent ball, overtravel stop or lockbar stabiliser, lockbar insert
- **family**: locks, latches & catches
- **other_families**: hinges & pivots, indexing & detents, compliant mechanisms & flexures
- **one_liner**: A pivot joint for a folding blade or arm in which, once it is swung fully open, a spring-loaded bar (a split strip of the handle liner, the handle frame itself, or a rocker along the spine) drops in behind the blade's heel and blocks it from folding until the bar is pushed aside, while a slip joint only holds the blade with spring pressure and a detent.
- **complexity**: A few parts: the blade with a shaped heel (tang) turning on a pivot pin; the handle sides (scales, often with thin metal liners inside, or a solid metal frame); a stop pin that sets the fully open position; and the catch: in a liner or frame lock, a strip cut in the liner or frame and bent inwards to act as a leaf spring, usually with a small detent ball; in a lockback, a rocker bar pinned in the middle of the spine and a backspring (or torsion bar) that presses it; in a slip joint, just a backspring bearing on the tang.
- **how_it_works**: Liner and frame lock: one handle liner (or the metal frame) is split lengthwise and bent inwards so it springs across the handle; while the blade is closed or partly open, the heel of the blade holds this strip to the side, and when the blade reaches fully open the strip snaps across behind the heel. Pressure on the cutting edge then pushes the heel end-on into the strip, which cannot fold, so the blade stays open until you push the strip back with your thumb (Wikipedia 'Liner lock'; Knife Informer). The heel's contact face is ground at a small angle so the strip wedges in and moves further across as the faces wear, which makes the lock 'self-adjusting for wear' (Wikipedia). A small ball set in the strip drops into a dimple in the blade to hold it closed (the 1990 Walker patent, US 4,896,424). Lockback: a rocker bar along the spine pivots on a pin in the middle; a spring pushes its front end down, and when the blade opens a hook on the rocker drops into a notch on top of the heel; pressing the exposed rear end of the rocker lifts the hook out (Wikipedia 'Pocketknife'; Knife Informer). Slip joint: the same backspring presses on flat faces on the heel, so the blade snaps to closed, open (and sometimes a 'half-stop') positions, but firm pressure on the back of the blade folds it, because nothing actually blocks it (Knife Informer).

### Finder attributes

- **job**: 
  - lock, and release by hand: holds a folding blade or arm open until the catch is pushed aside
  - click into set positions: slip joints and detent balls snap the blade into the closed, half-open (half-stop) and open positions
  - let it move (turn, slide or bend): the pivot lets the blade fold away into the handle for carrying
- **degrees_of_freedom**: 1 while unlocked (the blade turns about its pivot); 0 once locked open, because the stop pin stops it opening further and the lock stops it folding. A slip joint always keeps its 1 freedom but resists movement with spring force.
- **special_behaviour**: 
  - hand-release only (liner, frame and lockback locks hold against any force on the edge and open only when the catch is pushed aside)
  - self-locking (with the right angle on the heel's contact face, pressure on the blade pushes the lock bar end-on and does not push it out; knifemakers report that too shallow an angle makes the lock stick and too steep an angle lets it slip; KnifeDogs forum)
  - indexing (a slip joint snaps into closed, half-stop and open positions; the detent ball in a liner or frame lock holds the blade closed; Knife Informer; Benchmade)
  - quick-release (a liner lock 'can be opened and closed with one hand without repositioning the knife in the hand'; Wikipedia 'Liner lock')
- **holding_principle**: shape (the lock bar or rocker hook physically blocks the blade's heel; form-fit), plus spring force (a springy strip, frame or backspring keeps the catch engaged); in liner and frame locks the bar also wedges against a slightly sloped face, so friction helps it stay put; a slip joint holds by spring force only
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release: the blade folds and unfolds by hand; taking the tool apart needs a screwdriver or Torx or hex key for the pivot and handle screws (printed designs use small wood screws or M3 screws; Printables 664449 and 713924)
- **reuse_cycles**: many times: it is opened and closed daily for years, but the locking faces wear, giving blade play or 'lock rock', especially in lockbacks and titanium frame locks (Knife Informer; AllOutdoor)
- **tools_needed**: To use: none. To adjust: a Torx, hex or slotted driver for the pivot screw to take out side-to-side play (Knife Informer). To make: files, a disc or belt sander set to the lock-face angle, stones or abrasive paper to finish the lock faces, and a torch or heat gun to bend a metal lock bar (KnifeDogs); for printed ones, a heat source to bend the printed lock bar (Printables 831782) and small screws or pins.
- **seal**: none
- **load**: light to medium: plenty for cutting and normal hand forces, but 'never subject a folding knife to the same kind of stress that a fixed-blade knife can handle' (KnivesShipFree). Strong when the edge is pushed towards the closed position, because the lock bar or rocker takes the load end-on; weakest against sideways twisting, blows on the back of the blade (the 'spine whack'), and wear that lets the bar walk off the heel. Liner locks are 'not normally suited for heavy-duty use due to the thin nature of the liner'; frame locks and lockbacks have thicker bars (Knife Informer). A slip joint only resists with spring pressure and folds under a firm push on the spine. *(unverified parts omitted)*
- **adjustable**: partly: the pivot screw on many knives can be tightened to remove side-to-side play; the lock engagement itself is set by grinding and fitting the lock face, and some frame locks have replaceable steel lockbar inserts (Knife Informer). Printed designs may need their pin size adjusted to your printer (Printables 144600).
- **play_and_precision**: small play when new: the stop pin sets a repeatable open position (Walker's refinement 'to align the blade in the open position', Wikipedia). Play grows with wear: 'vertical blade play' on lockbacks and 'lock rock' on titanium frame and liner locks (Knife Informer; AllOutdoor); side-to-side play depends on pivot tension. Little tolerance for misalignment: parts must be made accurately; one maker says 'you have maybe a thou or two' (about 0.03-0.05 mm) to get a liner lock's face right (KnifeDogs).
- **access_needed**: not applicable: the lock is built into the handle and is worked with the thumb (liner and frame locks) or by pressing the back of the handle (lockbacks)
- **materials**: Blades: hardened steel. Liners and frames: titanium alloy or steel (Wikipedia 'Liner lock'); titanium frame locks often have a hardened steel lockbar insert, and some use a ceramic ball at the lock face (Knife Informer). Detent balls: steel or ceramic. Handle scales: many materials. Printed training and fidget knives: ABS holds the frame lock's spring tension better than PLA; PETG and PLA are also used; one printed lockback is made in ABS at 100% infill (Printables 144605, 144600, 713924).
- **maker_difficulty**: moderate for a printed, blunt training or fidget knife (a few printed parts, a pin or screws, and a printed lock bar that has to keep its spring); hard for a real knife lock, which needs hardened steel, a lock-face angle held to a degree or so, careful finishing and heat treatment

### Making it

- **processes**: 
  - off-the-shelf part: buy a knife, multitool or folding utility knife, or a knife kit
  - CNC, waterjet or laser cutting: liners and frames are cut from titanium or steel sheet (one maker has liners and frames waterjet cut; KnifeDogs)
  - sheet metal: the liner lock bar is a split, bent strip of sheet (Wikipedia; Walker patent)
  - 3D print (FDM): blunt training knives, fidget toys and prototypes to test blade shape and lock geometry (Printables 203389, 664449, 144605)
  - woodwork: handle scales
- **print_in_place**: no: printed folding knives are printed as separate parts (blade halves, frame, pin) and assembled with a pin or screws; one frame-lock design needs supports so the printed lock strip does not fuse to the rest of the frame (Printables 144605)
- **making_tips_3d_printing**: Keep printed versions blunt: use them as training knives, fidgets or prototypes (Printables 664449 'not intended cutting or use'; 193429 rounded, unsharpened blade for a child; 387356 warns a printed utility-blade folder 'is not recommended for use'). Material: ABS 'will hold spring tension better' than PLA for a printed frame lock; if the frame is PLA, store the knife open so the lock strip does not lose its tension over time (creep) (Printables 144605, 144600). Preload the printed lock bar by heating and bending it inwards ('heat & bend method'; Printables 831782). Print the frame with supports under the lock strip so it does not fuse to the frame, then free it with a sharp spatula or knife (Printables 144605). Print the blade as two mirror-image halves and glue them, and scale the pivot pin slightly if it is too tight, since a forced pin can crack an ABS frame (Printables 144605, 144600). A printed lockback karambit uses ABS, 100% infill, 0.2 mm layers and M3 screws and nuts (Printables 713924). A parametric slip-joint model at 100% infill lets you try blade length, drop and 'kick' before making a real one (Printables 203389). *(unverified parts omitted)*
- **off_the_shelf_parts**: Folding knives, multitools and folding utility knives with liner, frame, lockback or slip-joint mechanisms; knife kits; pivot screws and pivot washers (bronze or plastic), thrust bearings for smoother pivots (used in the Benchmade Lowden; Benchmade), stop pins, detent balls, steel lockbar inserts and overtravel stops or 'lockbar stabilisers' (Knife Informer), handle screws. Search terms: 'liner lock', 'frame lock', 'lockback', 'slip joint', 'lockbar insert', 'detent ball', 'knife pivot washer', 'knife kit'.
- **rules_of_thumb**: 
  - Grind the blade heel's lock face at about 7.5-10 degrees; one maker finds 8 degrees or less sticks and more than 10.5 degrees slips, and another reports Bob Terzuola's book uses 8.5 degrees on a 2 inch wheel (KnifeDogs forum thread 'Liner lock lockup angle', knifemakers' practice, https://knifedogs.com/threads/liner-lock-lockup-angle.51197/).
  - One maker aims for about 30% lock-up (the share of the lock bar's width that engages the blade heel) on a finished frame lock, though makers disagree about leaving extra engagement for future wear; a tiny chamfer (3-4 thousandths of an inch) on the lock bar's engaging corner stops it crushing and loosening (same KnifeDogs thread).
  - An 'early' lock-up (the bar engaging close to its own side) is much safer than a 'late' one, because force on the blade tends to push the bar away from the lock side and a late bar can slide off the heel (Knife Informer, https://knifeinformer.com/pocket-knife-lock-types/).
  - Use a stop pin to set the open position and take the opening shock, so the lock bar only has to hold the blade from folding (Walker's refinement, Wikipedia 'Liner lock'; Tri-Ad lock, Knife Informer).
  - If a new liner lock sticks, check the lock bar is not bent too far (too much pressure) and that too much of its face is not engaging; lightly sanding both faces fixed one maker's sticky lock (KnifeDogs thread 'Liner lock problem', https://knifedogs.com/threads/liner-lock-problem.17018/).
  - UK law: a folding pocketknife with a cutting edge of 3 inches (about 7.6 cm) or less that is not a lock knife may be carried in public without a good reason; lock knives need a good reason (GOV.UK, https://www.gov.uk/buying-carrying-knives).

### When to use it

- **everyday_examples**: 
  - a Swiss Army knife (slip joint; the Swiss soldier knife of 2008 adds liner locks; Wikipedia; Wikimedia Commons)
  - a classic lockback hunting knife that you close by pressing the back of the handle (a style popularised by Buck Knives in the 1960s; Wikipedia 'Pocketknife')
  - a pocket knife with a thumb-pushed liner or frame lock
  - a folding utility (box-cutter) knife that locks open (Wikipedia 'Latch')
- **when_to_use**: For a blade, tool arm or bracket that must fold away for carrying or storage but must not fold back while in use: pocket knives, multitool blades, folding utility knives. Choose a liner or frame lock for one-handed opening and closing, a lockback for a simple, ambidextrous and strong lock, and a slip joint where a light hold is enough or where locking knives are restricted. The same idea (a springy bar that drops in behind a folding part's heel) can lock printed folding arms, stands and levers open.
- **when_not_to_use**: Not for prying, chopping or heavy work: use a fixed blade, since even good locks can fail (KnivesShipFree; Wikipedia 'Pocketknife'). Not where locking knives are restricted (for example, carrying one in public in the UK without good reason): use a slip joint with a blade of 3 inches or less (GOV.UK). If you want your fingers out of the blade's path when closing, choose a crossbar lock (AXIS-type), compression lock or button lock instead of a liner lock or lockback (Knife Informer; Benchmade). In dusty, linty pockets lockbacks can fill with lint; open-backed designs stay cleaner (AllOutdoor; Knife Informer). For a part that must hold at many angles, use a detent hinge, friction hinge or Hirth joint instead.
- **environment_limits**: Pocket lint and dirt collect in a lockback's notch and can stop it locking; one reviewer's lockback was 'foiled twice by pocket lint' (AllOutdoor; Knife Informer). Knives kept in bags or pockets can corrode and stiffen, so oil the pivot and clean out dirt (Knife Informer). Titanium lock faces rub against steel and can gall, causing 'lock stick'; steel inserts or ceramic balls prevent this (Knife Informer). Printed PLA lock strips lose their spring over time (creep), so store printed knives open or print in ABS (Printables 144605). *(unverified parts omitted)*
- **safety_notes**: A sharp blade folding onto your fingers is the main hazard. When closing a liner lock, frame lock or lockback, your fingers are in the blade's path (Knife Informer; Benchmade), and a lockback's spring snaps the blade shut past a certain point (Knife Informer). A slip joint can fold if pushed on the back of the blade. A lock that engages 'late' or is worn can slip off and let the blade close (Knife Informer). Knife carry is regulated: in the UK, carrying a lock knife in public without a good reason can lead to up to 4 years in prison, an unlimited fine or both (GOV.UK); US rules vary by place (Wikipedia 'Pocketknife'). Printed knives fitted with real blades are dangerous; the designers themselves advise against using them (Printables 387356).
- **common_failures**: (1) Lock stick: the lock bar jams hard against the heel, from too shallow an angle, rough faces or titanium galling; fix by correcting the angle, finishing the faces, or fitting a steel insert (KnifeDogs; Knife Informer). (2) Lock slip or the bar walking off the heel: too steep an angle, late lock-up or worn faces; check engagement and replace worn parts (KnifeDogs; Knife Informer). (3) Blade play and lock rock from wear on the locking faces, especially in lockbacks and titanium frame locks (Knife Informer; AllOutdoor). (4) Lint or dirt in the notch stops a lockback or slip joint engaging fully; clean it out (Knife Informer; AllOutdoor). (5) The lock bar is pushed too far when released and fatigues; overtravel stops prevent this (Knife Informer). (6) Printed lock strips lose their spring (PLA creep) or fuse to the frame during printing (Printables 144605). (7) Crossbar-type locks can break their thin springs (Knife Informer).
- **related**: 
  - Detent hinge (click hinge, position hinge): holds at set angles with spring detents only, like a slip joint
  - Ball detent (spring plunger): the small detent ball that holds a liner-lock blade closed is a tiny ball detent
  - Compliant detent (flexure click arm): a printed springy arm that clicks into notches, like a slip joint's backspring
  - Compliant one-piece latch (flexure latch): the liner-lock bar is a one-piece springy latch cut from the handle
  - Spring button lock (snap button, push-button tube lock): a spring pops a button into a hole to lock a tube; the same 'spring drops in and blocks' idea
  - Indexing plunger (pull-knob index pin): a spring pin that you pull out to move a part to a new position
  - Friction hinge (torque hinge): held by friction only, like a friction-folder knife
  - Over-centre linkage (toggle linkage): folding table legs and stands often lock open by going past centre instead
  - Sear and trigger (trip release mechanism): automatic knives use a trigger-released catch (button lock) that also holds the blade open

### Pictures, videos and models

- **links**: 
  - [Folding knife locking mechanisms.svg (Wikimedia Commons, Waerloeg, 2013)](https://commons.wikimedia.org/wiki/File:Folding_knife_locking_mechanisms.svg): Simplified cutaway diagrams of a lockback (stop pin, rocker bar, rocker pin, torsion bar, pivot pin), a sliding bolt lock with spring, and a liner lock (leaf spring cut from the liner, with top views), each shown open and being released *(licence: CC BY-SA 3.0 (also GFDL))*
  - [WalkerLinerlock2.jpg (Wikimedia Commons; knife by Michael Walker, photo by Jim Cooper)](https://commons.wikimedia.org/wiki/File:WalkerLinerlock2.jpg): Close-up photo of the locking mechanism of a Linerlock knife *(licence: CC BY-SA 4.0)*
  - [Liner Lock.jpg (Wikimedia Commons, Hustvedt)](https://commons.wikimedia.org/wiki/File:Liner_Lock.jpg): The frame lock on a Gerber STL 2.0 knife (the file is named 'Liner Lock' but shows a frame lock) *(licence: CC BY-SA 3.0)*
  - [Lock Back Safety schematics.gif (Wikimedia Commons; drawings from a US patent)](https://commons.wikimedia.org/wiki/File:Lock_Back_Safety_schematics.gif): Patent schematics of a lockback knife mechanism with an added safety *(licence: Public domain)*
  - [Soldatenmesser 08 dual liner lock system.JPG (Wikimedia Commons, Francis Flinch, 2009)](https://commons.wikimedia.org/wiki/File:Soldatenmesser_08_dual_liner_lock_system.JPG): The dual liner locks on the Swiss Army soldier knife of 2008 *(licence: CC BY 3.0)*
- **make_it_yourself**: 
  - [Flip knife with frame lock (Printables 144605; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/144605-flip-knife-with-frame-lock): A printed fidget folding knife with a working printed frame lock: supports stop the lock strip fusing to the frame, ABS holds the spring better than PLA, and PLA versions should be stored open *(licence: CC BY)*
  - [3" Lockback Training Knife by infinitevalence (Printables 664449; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/664449-3-lockback-training-knife): A blunt printed lockback knife for teaching knife safety, held together with four #4 1/2" countersunk screws *(licence: CC BY-NC)*
  - [Parametric slipjoint folding knife by jhobson (Printables 203389; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/203389-parametric-slipjoint-folding-knife): A parametric, non-cutting slip-joint knife model for trying blade length, drop and kick before making a real one; printed at 100% infill *(licence: CC BY)*
  - [OBERTECH NSP-02 KARAMBIT folding utility knife by Edu08 (Printables 713924; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/713924-obertech-nsp-02-karambit-folding-utility-knife): A printed folding utility-blade holder with a working back lock (lockback), printed in ABS at 100% infill and assembled with M3 screws and nuts *(licence: CC BY-SA)*
  - [Folding Knife Fidgit by divided joy (Printables 831782; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/831782-folding-knife-fidgit): A printed frame-lock fidget knife; the printed frame lock is preloaded with a 'heat & bend' step *(licence: CC BY-NC-SA)*
- **diagram_idea**: Three side-by-side cutaways of the same folding blade: (1) liner lock, with a top view showing the split liner strip springing across behind the blade heel and a thumb arrow pushing it back; (2) lockback, with the rocker's hook dropping into a notch on top of the heel and an arrow pressing the rocker's tail; (3) slip joint, with the backspring pressing on a flat on the heel and an arrow showing the blade folding under firm pressure.
- **sources**: 
  - https://en.wikipedia.org/wiki/Liner_lock (read via the Wikipedia API)
  - https://en.wikipedia.org/wiki/Pocketknife (read via the Wikipedia API)
  - https://en.wikipedia.org/wiki/Latch (read via the Wikipedia API)
  - https://knifeinformer.com/pocket-knife-lock-types/
  - https://www.benchmade.com/blogs/beyond-the-bench/knife-mechanisms-guide
  - https://knifedogs.com/threads/liner-lock-lockup-angle.51197/
  - https://knifedogs.com/threads/liner-lock-problem.17018/
  - https://www.alloutdoor.com/2013/10/01/analyze-lock-strength-folding-knives/
  - https://www.knivesshipfree.com/knife-knowledge/faq-whats-the-strongest-lock-on-a-folding-knife/
  - https://knivesadvisor.com/frame-lock-vs-liner-lock/
  - https://www.freepatentsonline.com/4896424.html (Walker, US 4,896,424, 1990)
  - https://www.gov.uk/buying-carrying-knives
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://commons.wikimedia.org/wiki/File:Folding_knife_locking_mechanisms.svg
  - https://commons.wikimedia.org/wiki/File:WalkerLinerlock2.jpg
  - https://commons.wikimedia.org/wiki/File:Liner_Lock.jpg
  - https://commons.wikimedia.org/wiki/File:Lock_Back_Safety_schematics.gif
  - https://commons.wikimedia.org/wiki/File:Soldatenmesser_08_dual_liner_lock_system.JPG
  - https://www.printables.com/model/144605-flip-knife-with-frame-lock (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/144600-folding-knife-frame-lock-kizer-begleiter (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/664449-3-lockback-training-knife (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/203389-parametric-slipjoint-folding-knife (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/713924-obertech-nsp-02-karambit-folding-utility-knife (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/831782-folding-knife-fidgit (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/387356-inspire-m3-folding-utility-knife (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/193429-blunted-folding-knife (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, load, making_tips_3d_printing, motion

## 165 Tamper-evident breakaway bridge (frangible link)

*locks, latches & catches.* Thin plastic bridges that must snap the first time a cap or lid is opened, showing that it has been opened

### What it is

- **plain_name**: A plastic ring at the bottom of a bottle cap, joined to the cap by a row of tiny plastic threads that snap the first time you unscrew it, so the gap or loose ring shows that the bottle has been opened
- **term**: Tamper-evident breakaway bridge (frangible link; tamper-evident band with frangible bridges)
- **aliases**: 
  - tamper-evident band; TE band; tamper band; tamper ring; tamper-indicating band
  - pilfer-proof band; pilfer band; pilfer-proof ring
  - frangible bridges; breakable bridges; breakable connectors; weakened tabs; frangible straps (US patents 5,450,972 and 4,904,435)
  - tethered cap (a cap whose band also has one or more thicker bridges that do not break, so the cap stays attached; US 11,685,575; EU Single-Use Plastics Directive)
  - break-off seal; plastic padlock seal; pull-tight seal; meter seal (separate one-time security seals with a built-in break point; Wikipedia 'Security seal')
  - micro-joint; tab (laser and CNC cutting: thin uncut bridges that hold parts in the sheet until snapped out; OSH Cut)
  - breakaway feature; sacrificial link; stress-concentration notch (engineering terms for a part designed to break at a set point) *(unverified parts omitted)*
- **family**: locks, latches & catches
- **other_families**: snap & clip fits, hinges & pivots
- **one_liner**: A deliberately weak link of thin plastic bridges between a cap and a ring (or between any two parts) that survives making, filling and shipping but snaps the first time the item is opened, so anyone can see it has been opened.
- **complexity**: Single piece: the cap (a top and a threaded skirt), the band and the bridges are injection-moulded as one part, usually in polyethylene (PE) or polypropylene (PP) (US 6,705,479). The band has an inward rib or flaps that catch under a bead (retaining flange) on the bottle neck. Tethered caps add one or two thicker bridges that do not break (US 11,685,575).
- **how_it_works**: When the cap is first screwed on, the band's inward rib is forced over the bead on the bottle neck and snaps underneath it; the bridges are designed to bend or be shielded here rather than break (inclined bridges, US 6,705,479; bumpers between the band and cap, US 4,904,435). When the cap is unscrewed, it rises up the thread but the rib catches under the bead, so the bridges are pulled apart and break 'sequentially or one or more at a time', leaving the separated band on the container as evidence that the cap has been removed (US 5,450,972). Bridges are made either by moulding gaps into the band, or by moulding a thin continuous wall and then slitting it with a notched blade so the uncut bits become the bridges (US 4,904,435; ENGEL's 'slit concept' and 'bridge concept'). A tethered cap leaves one wider, thicker bridge unbroken, which then works as a hinge so the cap stays on the bottle (US 11,685,575).

### Finder attributes

- **job**: 
  - join and hold: holds the ring to the cap until first opening, and holds the ring on the bottle neck afterwards
  - slip or let go when overloaded: here it lets go once, by design: the bridges snap at the force of a normal first twist and cannot be rejoined, which is the evidence
- **motion**: none: it is a fixed one-piece link. Opening the cap (turning it, which also lifts it along the thread) is what breaks it.
- **degrees_of_freedom**: 0 while intact (band and cap are one piece). After it breaks, the cap is free (1 turn plus 1 lift along the thread, coupled by the thread) and the band is left loose on the neck; on a tethered cap the unbroken bridge then acts roughly as a 1-freedom hinge (US 11,685,575).
- **special_behaviour**: 
  - fail-safe or breakaway: the bridges snap at a designed force on first opening and cannot be put back, so the broken bridges or the separated ring show that the container has been opened (US 5,450,972)
  - one-way (in a limited sense): inclined bridges bend and survive while the cap is screwed on, then straighten and tear when it is unscrewed, 'which serves to concentrate the forces tending to rupture the bridges' at their ends (US 6,705,479)
- **holding_principle**: shape (the band's inward rib catches under the bead on the bottle neck; form-fit); the bridges themselves are simply thin, unbroken plastic from the same moulding, designed to tear rather than to hold
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: semi-permanent (can be undone but may damage parts): opening always breaks the bridges; after that the cap screws on and off normally but the band stays broken
- **reuse_cycles**: once
- **tools_needed**: None to open (a hand twist). Industrially it is made by injection moulding, sometimes followed by a slitting machine that cuts the bridges (US 4,904,435). Printed versions need no tools, apart from a knife or spatula to clean up support material.
- **seal**: none: the bridges and band do not seal; sealing comes from a liner or a sealing lip or rib inside the cap top (Wikipedia 'Bottle cap'; US 6,705,479)
- **load**: light, by design. The link must survive capping, shipping and display ('shall remain intact when handled in a reasonable manner during manufacture, distribution, and retail display'; FDA 21 CFR 211.132) but snap under a normal hand twist. The band holds strongly against being pulled up over the neck bead, which is exactly what tears the bridges; the bridges are weakest when pulled apart (tension and tearing) and are meant to be. For comparison, a 3D-printed breakaway link in a robot feeding spoon was tuned to break at 65 N (arXiv 2502.17774). *(unverified parts omitted)*
- **adjustable**: no: it is a one-time link; its breaking force is set when it is designed (number, width and thickness of bridges, or for printed parts the notch depth and wall count)
- **play_and_precision**: not applicable (it does not locate parts or pass on motion); the band's rib must fit under the neck bead, and breaks in the rib let the band stretch over the bead without breaking the bridges (US 6,705,479)
- **access_needed**: not applicable
- **materials**: Caps, bands and bridges: polyethylene (PE) or polypropylene (PP), injection-moulded in one piece (US 6,705,479; Wikipedia 'Bottle cap'); bottles in PET or glass. Plastic security seals: plastics such as polycarbonate for meter seals; high-security seals are metal (Wikipedia 'Security seal'). Printed breakaway links: PLA or PLA+ (arXiv 2502.17774), and printed one-time seals work in PETG and PLA (Printables 625502).
- **maker_difficulty**: moderate: it is easy to print a thin snap-off link as part of a part, but hard to make it break reliably at the right force, because printed strength depends heavily on print orientation, layer bonding and wall count; plan to test and adjust (arXiv 2502.17774)

### Making it

- **processes**: 
  - 3D print (FDM): one-time seals, break-to-open boxes and breakaway links printed as part of the part (Printables 289978, 22100; arXiv 2502.17774)
  - laser cut: micro-joints (tabs) are thin uncut bridges that hold parts in the sheet until they are snapped out (OSH Cut)
  - off-the-shelf part: plastic security seals, tamper-evident labels and tape, and tamper-evident caps for standard bottle necks (Wikipedia 'Security seal'; ENGEL) *(unverified parts omitted)*
- **print_in_place**: yes: the weak link is printed as part of the same piece (the robot-spoon study 'integrated the failure point directly into the 3D-printed shaft'; arXiv 2502.17774), so it is complete straight off the printer; a printed one-time seal, once locked, has to be destroyed to open (Printables 289978)
- **making_tips_3d_printing**: Orient the part so the layer lines run parallel to the line where it should break: the break then happens cleanly between layers at the intended place. With layer lines across the break line the link is stronger but breaks raggedly and unpredictably (arXiv 2502.17774, PLA+ on a Bambu Lab X1C). Use a notch or slot to concentrate stress at exactly one point, and tune the breaking force with notch depth and the number of walls (perimeters): thicker walls make it stronger, thinner walls weaker; in that study a 1 mm slot with three wall loops broke at the target 65 N, using 15% grid infill (arXiv 2502.17774). Test several prints, because FEA can only guide printed parts (arXiv 2502.17774). Make several evenly spaced bridges rather than one, so the band tears progressively (US 5,450,972). Protect the bridges while the part is fitted: moulded caps use bumpers or angled bridges so pushing the band over the bead does not load them (US 4,904,435; US 6,705,479). Printed one-time seals print fast (about 13 minutes on a Prusa MK3S) and work in PETG and PLA (Printables 625502). For a sealed container that must be broken to open, you can pause the print, drop in the item and print the lid over it (Printables 1595516: 4 perimeters, 5-6 top and bottom layers, PETG or ASA). *(unverified parts omitted)*
- **off_the_shelf_parts**: Plastic security seals: adjustable-length pull-tight seals, fixed-length seals, padlock seals and meter seals, many numbered or bar-coded; metal cable, bolt and ball seals (ISO 17712 levels); tamper-evident labels and security tape that show 'VOID' or tear when removed (Wikipedia 'Security seal'; 'Tamper-evident technology'). Packaging: tamper-evident screw caps with TE bands, tethered caps for standard beverage necks (ENGEL expects many producers to move from 1810/1811 cap types to 26 mm caps as they change to tethered caps), induction seals, shrink bands and tear strips (Wikipedia 'Closure (container)'). Search terms: 'tamper evident cap', 'tamper band', 'pull tight security seal', 'plastic padlock seal', 'tamper evident label', 'tethered cap'.
- **rules_of_thumb**: 
  - In moulded caps whose bridges are cut by slitting, the wall that is slit is only about 0.008-0.025 inch (about 0.2-0.64 mm) thick, and the process can run at over 600 caps per minute without breaking bridges (US 4,904,435, The West Company, https://www.freepatentsonline.com/4904435.html).
  - A tether bridge that must not break is made wider and thicker than the frangible ones: at least 1.5 mm wide and 0.5 mm thick in one example, and 2-10 mm wide (for example 6-7 mm) in the general description (US 11,685,575 B2, Obrist Closures, 2023, https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11685575).
  - Space frangible bridges 'circumferentially and equally' around the band (US 5,450,972, https://www.freepatentsonline.com/5450972.html); inclining them lets them bend safely while the cap is screwed on and concentrates the tearing force at their ends when it is unscrewed (US 6,705,479, https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6705479).
  - Split the band's retaining rib into segments (about 85% of the circumference in one example; at least 65% in the claims) so it can stretch over the bottle bead without straining the bridges (US 6,705,479).
  - A tamper-evident feature must give visible evidence when breached yet stay intact through manufacture, distribution and retail display (FDA 21 CFR 211.132, https://www.law.cornell.edu/cfr/text/21/211.132).
  - For printed breakaway links, align layer lines with the break line and tune the force with notch depth and wall count (arXiv 2502.17774, https://arxiv.org/abs/2502.17774).
  - In the EU, plastic caps on single-use drink containers up to 3 litres must stay attached during use from 3 July 2024 (Directive (EU) 2019/904, Article 6, as summarised by Wikipedia), which is why caps now combine frangible bridges with a tether.

### When to use it

- **everyday_examples**: 
  - the ring left on the neck of a plastic drink bottle after the cap is first unscrewed
  - EU drink bottles whose caps stay hinged to the neck after opening (tethered caps; Wikimedia Commons photos of a Coca-Cola Zero bottle)
  - plastic padlock seals on airline duty-free trolleys, which snap off at a built-in break point (Wikipedia 'Security seal')
  - sealed gas and electricity meters and fire-alarm break-glass points (Wikipedia 'Tamper-evident technology')
- **when_to_use**: When you need to see whether something has been opened, rather than to stop it being opened: containers, lids and caps, emergency key boxes, first-aid kits, sealed electronics or warranty seals, and prints that should be opened only once. The same weak-link idea holds parts together until first use: printed parts on breakaway tabs, and laser-cut parts held in the sheet by micro-joints (OSH Cut).
- **when_not_to_use**: Not as a lock: it only shows that something was opened and is easy to break (use a real lock or a locking latch). Not for anything opened repeatedly (use a reusable closure, or a numbered reusable seal). Not where normal handling or vibration could break it by accident, which would give false alarms. Not as a structural joint (use a snap fit or screws). If the aim is to protect a machine from overload rather than show tampering, use a shear-pin coupling (breakaway link), which is designed for load, not evidence.
- **environment_limits**: PE and PP caps are used for drinks, so they tolerate water and normal storage (Wikipedia 'Bottle cap'). Heat can defeat some tamper-evident features: warming a 'VOID' label with a hair dryer lets it be peeled off and put back (Wikipedia 'Tamper-evident technology'). Meter seals are made to withstand sunlight and a wide temperature range (Wikipedia 'Security seal'). *(unverified parts omitted)*
- **safety_notes**: Tamper evidence is not tamper proof: tests at Argonne National Laboratory showed some seals 'can be quickly defeated by a trained person using low-tech methods' (Wikipedia 'Tamper-evident technology'), so do not rely on one seal for medicines or security; use several layers. The FDA requires tamper-evident packaging for over-the-counter medicines sold to the public (21 CFR 211.132). A sealed container that has to be broken open (for example a print-sealed tracker case) is lost if the contents fail; one designer warns to change the battery before sealing (Printables 1595516). *(unverified parts omitted)*
- **common_failures**: (1) Bridges break while the cap is being screwed on or during shipping, giving a false 'opened' signal: use inclined bridges, bumpers or lugs that take the load while capping and in transit (US 6,705,479; US 4,904,435; US 5,450,972). (2) The band can be prised up over the bead without breaking the bridges, defeating the seal: inward projections stop a knife blade being slid round under the band (US 6,705,479). (4) Printed breakaway links break raggedly or at the wrong force: align layers with the break line and test (arXiv 2502.17774). (6) Labels peeled off with heat and reapplied (Wikipedia 'Tamper-evident technology'). *(unverified parts omitted)*
- **related**: 
  - Shear-pin coupling (breakaway link): also breaks at a designed load, but to protect a machine from overload rather than to show tampering
  - Annular snap fit: the band's inward rib snapping under the bottle's neck bead is an annular snap fit
  - Living hinge: tethered and flip-top caps use a thin hinge that must bend many times without breaking, the opposite of a frangible bridge
  - Push-and-turn child-resistant cap: makes a cap hard for children to open, often used alongside a tamper-evident band
  - Linear ratchet (cable-tie ratchet): pull-tight security seals use a one-way ratchet and must be cut or broken off
  - Mid-print embedding (captive nuts, magnets and bearings): sealing an object inside a print so that it must be broken to open
  - Cantilever snap fit: a clip that can be undone; a tamper-evident link is designed not to be undone

### Pictures, videos and models

- **links**: 
  - [Pulloon kiinnitetty pullonkorkki 3.JPG (Wikimedia Commons, MKFI, 2024)](https://commons.wikimedia.org/wiki/File:Pulloon_kiinnitetty_pullonkorkki_3.JPG): A tethered cap on a Coca-Cola Zero bottle unscrewed but not lifted: the tamper-evident band stays on the neck and the strap that keeps the cap attached is visible *(licence: Public domain)*
  - [Tamper evident seal on OTC pharmaceutical.jpg (Wikimedia Commons, Rlsheehan, 2018)](https://commons.wikimedia.org/wiki/File:Tamper_evident_seal_on_OTC_pharmaceutical.jpg): A tear-open seal on a bottle of capsules (another kind of tamper-evident feature, for comparison) *(licence: CC BY-SA 4.0)*
  - [Design of a Breakaway Utensil Attachment for Enhanced Safety in Robot-Assisted Feeding (Chang, Yow, Lim and Ang, arXiv 2502.17774)](https://arxiv.org/abs/2502.17774): Photos of a 3D-printed breakaway part: print orientations with layer lines across and along the break line, and the clean versus ragged breaks they give *(licence: arXiv non-exclusive distribution licence (link only))* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Tamper evident lock by Printer Go Brrr (Printables 289978; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/289978-tamper-evident-lock): A printed one-time lock or seal: once locked it has to be destroyed to open, which is plainly visible *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [FASTER PRINT tamper evident lock / seal by Tim Fechner (Printables 625502; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/625502-faster-print-tamper-evident-lock-seal): A slimmer, faster-printing version of the one-time seal (about 13 minutes on a Prusa MK3S); tested in PETG and PLA *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [Brake to open tamper proof launch code card holder by Koda Mason (Printables 22100; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/22100-brake-to-open-tamper-proof-launch-code-card-holder): A break-to-open case for business-card-sized notes, such as emergency passwords; case printed in ABS, tray in PETG *(licence: CC BY-NC)*
  - [PermaTag - Tamper-Proof AirTag Case Sealed During Print by sthpi (Printables 1595516; details read via the Printables public API) (URL from Printables API, page not opened)](https://www.printables.com/model/1595516-permatag-tamper-proof-airtag-case-sealed-during-pr): A case sealed during printing by pausing the print and dropping the item in; it can only be opened by breaking it *(licence: CC BY-NC-SA)*
- **diagram_idea**: A side view of a bottle neck and cap in three frames: (1) the new cap with a row of thin bridges joining it to the band, and the band's inner rib hooked under the neck bead; (2) the cap turning and rising while the rib catches under the bead, with the bridges stretched and snapping; (3) the cap removed and the broken ring left on the neck, plus a small inset of a tethered cap whose one thick bridge stays whole and acts as a hinge.
- **sources**: 
  - https://en.wikipedia.org/wiki/Tamper-evident_technology (read via the Wikipedia API)
  - https://en.wikipedia.org/wiki/Bottle_cap (read via the Wikipedia API)
  - https://en.wikipedia.org/wiki/Closure_(container) (read via the Wikipedia API)
  - https://en.wikipedia.org/wiki/Security_seal (read via the Wikipedia API)
  - https://en.wikipedia.org/wiki/Directive_(EU)_2019/904_(Single-Use_Plastics_Directive) (read via the Wikipedia API)
  - https://www.freepatentsonline.com/5450972.html
  - https://www.freepatentsonline.com/4904435.html
  - https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11685575
  - https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6705479
  - https://www.law.cornell.edu/cfr/text/21/211.132
  - https://www.engelglobal.com/en/us/blog/requirements-for-the-production-of-tethered-caps
  - https://www.intravis.com/en/blog/eu-directive-tethered-caps
  - https://arxiv.org/pdf/2502.17774
  - https://arxiv.org/abs/2502.17774
  - https://www.oshcut.com/design-guide/understanding-micro-joints
  - https://commons.wikimedia.org/wiki/File:Pulloon_kiinnitetty_pullonkorkki_3.JPG
  - https://commons.wikimedia.org/wiki/File:Pulloon_kiinnitetty_pullonkorkki_1.JPG
  - https://commons.wikimedia.org/wiki/File:Tamper_evident_seal_on_OTC_pharmaceutical.jpg
  - https://www.printables.com/model/289978-tamper-evident-lock (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/625502-faster-print-tamper-evident-lock-seal (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/22100-brake-to-open-tamper-proof-launch-code-card-holder (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1595516-permatag-tamper-proof-airtag-case-sealed-during-pr (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, links, load, making_tips_3d_printing, processes, safety_notes

## 262 Basic latches (spring latch, slide bolt, hook and eye)

*locks, latches & catches.* The everyday door latch with a sloped spring bolt, a sliding bolt, and a hook in an eye; the latch baseline

### What it is

- **plain_name**: The everyday catches that keep a door, gate or lid shut: a sloped, spring-loaded tongue that clicks into the frame by itself when you push the door closed and is pulled back when you turn the handle; a bar that you slide by hand into a loop on the frame; and a hook that you swing into a screw-in ring
- **term**: Latch (catch): spring latch (latch bolt), slide bolt (barrel bolt, tower bolt) and hook-and-eye latch (cabin hook)
- **aliases**: 
  - catch; sneck (Northern England and Scotland; Wikipedia)
  - latch bolt or latchbolt, spring bolt (the sloped, spring-loaded bolt of a door lockset; Wikipedia, Lockset)
  - passage set, passage function (a knob or lever latch with no lock: 'latch bolt operated by handle from either side at all times'; Wikipedia, Lockset)
  - cylindrical (bored) latch or mortise latch (how a lockset's latch is fitted into the door; Wikipedia, Lockset)
  - deadlatch or deadlocking latch bolt (a latch bolt with a guard bolt so it can't be slipped back with a card; Wikipedia, Latch)
  - night latch or spring bolt lock (a keyed spring latch fitted on the surface of the door; Wikipedia)
  - slam latch (a rugged spring latch that catches when the door is slammed; Wikipedia)
  - spring-loaded bolt latch, spring shoot bolt (industrial gate versions; Kirmell)
  - slide bolt, sliding bolt, barrel bolt, tower bolt (UK), straight bolt, draw bolt, crossbar
  - necked bolt or cranked bolt (offset bolt for a door that is not flush with its frame; Suffolk Latch Company, RS)
  - flush bolt (set into the edge or face of the door, usually on the fixed leaf of double doors; Suffolk Latch Company, RS)
  - aldrop (a draw bolt with a slot in its handle so it can be padlocked; Wikipedia)
  - lift-and-drop barrel slide-bolt latch (the knob drops into a notch; McMaster-Carr)
  - keeper, staple, strike, strike plate, catch plate (the part on the frame that the bolt or hook enters; Wikipedia)
  - hook and eye, gate hook and eye, swinging-hook latch (McMaster-Carr), cabin hook (Wikipedia), screen-door hook
  - safety hook and eye (a hook with a spring keeper; gatelatchusa), tight-hold swinging-hook latch (McMaster-Carr)
  - hook-and-eye closure (the small sewn garment fastener, e.g. on bras; Wikipedia) - same idea at clothing scale *(unverified parts omitted)*
- **family**: locks, latches & catches
- **other_families**: quick-release & tool-free, snap & clip fits
- **one_liner**: A latch holds a door, gate or lid shut by pushing a bolt or hook on one part into a catch on the other, and lets it open again as soon as a person pulls the bolt back or lifts the hook.
- **complexity**: A few parts. Spring latch: a bolt with one sloped face, a spring, a case, a spindle or lever that the handle turns to pull the bolt back, and a strike plate on the frame. Slide bolt: a bolt, the barrel or plate it slides in, a knob, and a keeper (staple) on the frame. Hook and eye: a hook that swings on a screw eye or plate, and an eye or staple on the other part; the safety version adds a spring keeper.
- **how_it_works**: All three hold by shape: a bar or hook fixed to the door goes into a hole, loop or pocket on the frame, so the door can't swing until the bar or hook is pulled back out (Wikipedia, Latch). In a spring latch the bolt has one sloped face and one square face; as the door closes, the slope rides over the lip of the strike plate and pushes the bolt in against its spring, then the spring shoots it into the strike hole once the door is shut, and only turning the handle, which pulls the bolt back through the lockset, lets the door open again (Wikipedia, Latch and Lockset). A slide bolt has no spring: you push it by its knob into a keeper, and on lift-and-drop types the knob drops into a notch so the bolt can't creep back (McMaster-Carr). A hook and eye is a hook pivoting on one part that you swing into an eye on the other; it stays in by the shape of its curve, and the safety version adds a spring that must be pressed before the hook can come out (gatelatchusa; McMaster-Carr).

### Finder attributes

- **job**: 
  - lock, and release by hand: holds a door, gate or lid shut until a person turns the handle, slides the bolt back or lifts the hook
  - join and hold: keeps a door and its frame, or a lid and its box, together against pushes, wind and rattling
- **motion**: multiple: the spring-latch bolt and the slide bolt slide in a straight line (a standard door latch bolt sticks out 1/2 in, about 13 mm; Schlage), while the hook of a hook and eye swings on its pivot. Once latched, the door itself can't move (none).
- **degrees_of_freedom**: 0 between door and frame once latched: the hinges allow only swinging, and the bolt blocks that. The moving part of each latch has 1: the bolt slides in and out, or the hook turns on its eye. The bolt needs some room in its strike or keeper, so a latched door can still rattle a little.
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): the spring latch's sloped face lets the door push past the strike as it closes, but the square face stops it opening, so it latches itself when you shut the door (Wikipedia, Latch and Lockset). Slide bolts and hooks do not do this; you have to close them by hand
  - hand-release only (locks under load, releases when a person operates it): pushing or pulling on the door does not open any of the three; only turning the handle, sliding the bolt back or lifting the hook does
  - quick-release: all three open by hand in a moment, with no tools
  - self-aligning or self-centring: only in special versions, e.g. self-aligning slide-bolt latches whose strikes have angled ends to cope with a misaligned door (McMaster-Carr)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the bolt or hook sits in a hole, loop or pocket, so the door can't swing
  - spring force (a spring or springy part presses it in place): a spring keeps the latch bolt pushed out, and the spring keeper of a safety hook stops the hook lifting out. Plain slide bolts and hooks stay put only by gravity, friction or a notch
- **input_output**: not applicable: a latch holds a door shut rather than passing motion on. (Inside a lockset the handle's turn is changed into the bolt's pull-back, but that is part of the latch, not something it drives.)
- **power**: passive (no power needed). Electrically released versions are separate entries (solenoid latch and electric strike, servo or motorised latch).
- **removability**: tool-free quick release: the latch itself opens and closes by hand; the hardware is removable with a screwdriver
- **reuse_cycles**: effectively unlimited: latches are made to be opened and shut many thousands of times; a Grade 1 bored lock or latch must pass one million opening and closing cycles with a 10 lb axial load (ANSI/BHMA A156.2-2022 summary). Springs and printed parts wear out sooner (Kirmell: worn springs)
- **tools_needed**: To fit: a screwdriver and drill for surface-mounted slide bolts and hook-and-eye latches; for a knob or lever latch, a hole saw (to bore through the door) plus a chisel for the latch plate, or a mortise cut into the door edge for a mortise lock (Wikipedia, Lockset). To use: none.
- **seal**: none: a latch holds a door shut but does not seal it; any sealing comes from a separate weatherstrip or gasket
- **load**: Light to medium. Fairly strong against the door being pushed or pulled open, because the bolt is loaded sideways (in shear) across the gap between door and frame; the weak points are usually the screws pulling out of the wood or a thin keeper bending (Kirmell lists poor alignment, weak fixing points, worn springs, corrosion, overloading and repeated impact as causes of failure). A hook and eye is light duty only (gatelatchusa lists screen doors, window sashes and child or pet gates). None of them is a lock: an ordinary latch bolt can be pushed back with a thin card unless it is a deadlocking latch (Wikipedia, Latch).
- **adjustable**: Only slightly: the strike plate or keeper can be moved, or its hole filed, to line up with the bolt; extended-lip strikes are available (Schlage); necked (cranked) bolts cope with a door that is not level with its frame (Suffolk Latch Company). Otherwise no. *(unverified parts omitted)*
- **play_and_precision**: It tolerates small misalignment, because the sloped bolt of a spring latch finds its way into the strike and self-aligning slide bolts have angled strike ends (McMaster-Carr), but a door that sags or a frame that moves soon stops it catching (Kirmell: poor alignment). Not used for locating parts precisely. *(unverified parts omitted)*
- **access_needed**: one side only (blind) for surface-mounted slide bolts and hook-and-eye latches, which screw onto the inside face of the door and frame; both sides for a knob or lever spring latch, which needs a hole bored through the door for the handles and spindle (Wikipedia, Lockset).
- **materials**: Bought latches: zinc-plated or galvanised steel, stainless steel, brass and zinc castings (Kirmell: zinc-plated or stainless; gatelatchusa: stainless steel, solid brass, and brass with a type 304 stainless spring; RS: brass resists corrosion but is weaker, steel is strong and weather-resistant). Printed latches: PLA, PETG, ABS or ASA with a metal spring, a rubber band or a printed spring (Printables 236902, 1663963, 1510729). Fits wood, metal, printed and laser-cut parts; the screws need solid material to bite into.
- **maker_difficulty**: easy: a hook and eye or a slide bolt screws on in minutes, and many printable slide bolts and spring latches print in one piece or need only one spring (Printables 1663963, 236902); moderate for a knob or lever latch in a real door, which needs accurate boring and chiselling.

### Making it

- **processes**: 
  - off-the-shelf part: door latches and passage sets, night latches, slam latches, slide bolts, barrel and tower bolts, flush bolts, spring shoot bolts, hook-and-eye and safety hook latches, thumb latches
  - 3D print (FDM): printed slide bolts, spring latches with printed or metal springs, and latches built into boxes and enclosures (Printables 934602, 1663963, 1510729)
  - woodwork: wooden crossbars, turn buttons and thumb latches on gates and cupboards (Wikipedia: crossbar, Suffolk latch) *(unverified parts omitted)*
- **print_in_place**: partly: some spring slide-bolt latches print in place as one working assembly with a printed spring, 'a single assembly that automatically latches' (Printables 1663963), and a parametric latch prints in place apart from its separate locking arm (Printables 967712); most printed latches are separate parts with an added metal spring or rubber band (Printables 236902).
- **making_tips_3d_printing**: 1) Choose the spring. One designer offers three versions: a metal spring (very reliable, no maintenance), a rubber band (smooth and strong, but it goes brittle and must be replaced) and a printed spring (no extra parts, but less smooth and less strong) (Printables 236902). A universal printable spring latch uses a printed spring 1.2 mm thick, printed in the direction that gives the best layer strength, with side heads that lock it into its housing (Printables 1510729). 2) Printed springs: use enough perimeters that the flexing arms are solid (Printables 146100); avoid springy arms built up vertically (Z), where layer bonding makes them weak, and add a fillet at the root at least half the arm's thickness (Hubs). Plastics creep under constant load (Hubs), so design the spring to be relaxed when the latch is shut, not held bent all the time. 3) Clearance: at least 0.3 mm between parts that must move (Prusa); 0.5 mm is Hubs' figure for FDM snap parts. If a printed spring feels loose, one design offers a frame with half the clearance (Printables 146100). 4) Orientation: follow the tested orientation in the designer's project files; a popular barrel bolt needs supports and the bolt must be cleaned up with a deburring tool, sandpaper or a knife (Printables 934602). 5) Gravity: sliding bolts mounted vertically tend to open by themselves (Printables 236902); add a spring, a 'locked open' notch (Printables 934602) or a lift-and-drop knob that falls into a notch (McMaster-Carr). 6) Material: for outdoor use, PETG, ABS or high-temperature PLA (Printables 1663963); PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen). 7) Size it to the screws: one design scales the whole latch with the wood screw size, small for 3 mm screws, x1.15 for 3.5 mm and x1.3 for 4 mm (Printables 236902); a tested barrel-bolt family runs from 50 mm long with an 8.9 mm bolt to 100 mm long with an 18 mm bolt (Printables 934602). 8) Fixing: sink screw heads flush so they don't catch the moving parts, and glue a printed latch to a printed part with a strong glue (Printables 146100). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'passage lever set' or 'passage knob' (a latch with no lock), 'latchbolt' in 2-3/8 in (60 mm) or 2-3/4 in (70 mm) backset, 'strike plate' or 'ANSI curved lip strike', 'extended lip strike' (Schlage), 'deadlatch' or 'deadlocking latch', 'night latch', 'slam latch'; 'spring-loaded slide-bolt latch', 'lift-and-drop barrel slide-bolt latch', 'padlockable slide-bolt latch', 'self-aligning slide-bolt latch', 'long-reach slide-bolt latch', 'foot-operated slide-bolt latch' (McMaster-Carr); 'tower bolt', 'barrel bolt', 'necked bolt' or 'cranked bolt', 'flush bolt', 'spring shoot bolt' or 'heavy-duty shoot bolt' (Kirmell); 'swinging-hook latch', 'tight-hold swinging-hook latch' (a bushing in the eye resists vibration), 'spring tight-hold swinging-hook latch' (McMaster-Carr), 'safety hook and eye' (2, 2-1/2 and 3 in), 'hook and eye' (1 to 12 in hooks; gatelatchusa), 'cabin hook', 'screw eye', 'Suffolk latch' or 'Norfolk latch' (thumb latches).
- **rules_of_thumb**: 
  - Door latch bolt throw (how far it sticks out): 1/2 in (13 mm) standard; 3/4 in throw for pairs of doors (Schlage ND Series specification).
  - Fire doors must have an active latch bolt; the minimum throw is set by the door's listing and is typically 1/2 to 3/4 in (I Dig Hardware, Allegion).
  - Backset (door edge to the centre of the handle): 2-3/4 in (70 mm) standard on Schlage's commercial ND lock, with 2-3/8, 3-3/4 and 5 in options (Schlage).
  - Grade 1 bored locks and latches are cycle-tested one million times with a 10 lb axial load (ANSI/BHMA A156.2-2022 summary, BHMA).
  - Pool gates: self-closing and self-latching, opening away from the pool; if the latch release is less than 54 in (1.37 m) above the bottom of the gate, put it on the pool side at least 3 in below the top, with no opening bigger than 1/2 in within 18 in of it (CPSC Safety Barrier Guidelines for Residential Pools).
  - Door bolts: 4-inch bolts suit typical internal doors, 6-inch bolts larger and heavier doors; use a bolt outdoors only if it is sold as suitable for exterior use (Suffolk Latch Company).
  - Printed latches: at least 0.3 mm clearance between moving parts (Prusa Knowledge Base); for springy arms, a root fillet at least 0.5 x the arm thickness and a width of at least 5 mm (Hubs snap-fit guide).

### When to use it

- **everyday_examples**: 
  - The sloped tongue that clicks shut when you push an ordinary room door closed (latch bolt of a passage set; Wikipedia, Lockset)
  - A barrel or tower bolt on a shed door or garden gate (Suffolk Latch Company; RS)
  - A hook and eye on a screen door, window sash or pet gate (gatelatchusa)
  - A cabin hook holding a door open against a wall, as on ships (Wikipedia, Latch)
- **when_to_use**: Use a spring latch when a door or lid should catch by itself every time it is pushed shut and open with one turn of a handle, such as room doors, gates that must never be left unlatched, and boxes and enclosures that should click closed. Use a slide bolt for a firm, simple manual hold that you set on purpose, such as sheds, gates, the fixed leaf of double doors, or a bolt on the inside of a door; it is cheap, strong for its size and easy to fit on one face. Use a hook and eye for light, quick, low-cost holding, such as keeping a screen door or light gate shut, or holding a door open against a wall (a cabin hook). All three are the simplest starting point before choosing a more special latch.
- **when_not_to_use**: Not for security: a latch is not a lock (Wikipedia), so use a deadbolt or a keyed lock (see Pin-tumbler lock). Not for pulling a lid down tight against a seal: use a draw (over-centre) latch or a toggle clamp. Not on a chest or box a child could climb into, where a self-latching lid can trap them (CPSC); use a lid stay and a catch that opens from inside, or no latch at all. A hook and eye is a poor choice where vibration can shake it loose (use a tight-hold or spring hook; McMaster-Carr) or where a gate must stay closed around small children (pool gates must be self-closing and self-latching with the release out of reach; CPSC). For cabinet doors that should simply stay shut, a magnetic catch or ball catch is simpler; for a handle-free look, use a push-push latch; for remote or electric release, use a solenoid latch.
- **environment_limits**: Plain steel rusts outdoors: choose zinc-plated, galvanised or stainless steel, or brass (Kirmell; RS), and use a bolt outside only if it is rated for exterior use (Suffolk Latch Company); corrosion and worn springs are common causes of failure (Kirmell). Printed latches: PLA starts to soften at about 60 °C and PETG at about 80 °C (CNC Kitchen), so a PLA latch on a sunny gate or in a hot car can sag; rubber-band springs go brittle and need replacing (Printables 236902); plastic springs kept under constant load creep and lose force (Hubs). Vibration can shake a plain hook out of its eye; tight-hold hooks have a bushing in the eye to stop this (McMaster-Carr).
- **safety_notes**: Lids that latch themselves can trap children: CPSC has reports of 34 deaths since 1996 of children who climbed into storage and toy chests that latched shut, and it advises disabling or removing automatic latches on such chests. Gates to pools must be self-closing and self-latching, with the release out of a small child's reach (CPSC). Watch for pinch points where the door meets the frame and around the knob of a slide bolt. A latch is not a lock, so don't rely on it for security.
- **common_failures**: The door sags or the frame moves, so the bolt no longer lines up with the strike and the door won't catch (Kirmell: poor alignment); fix it by moving the strike or tightening the hinges. Screws pull out of soft wood or thin panels (Kirmell: weak fixing points); use longer screws or fix into solid timber. Springs wear, rust or break (Kirmell), and slamming damages the latch over time (Kirmell: repeated impact). Slide bolts mounted vertically slide open by themselves (Printables 236902); use a lift-and-drop or spring-loaded bolt. Plain hooks jiggle out of their eyes with vibration (McMaster-Carr). An ordinary latch bolt can be slipped back with a card (Wikipedia; a deadlatch prevents this). Printed latches: spring arms snap at sharp inside corners (Hubs), print-in-place parts fuse if the clearance is too small, and PLA sags in the heat (CNC Kitchen).
- **related**: 
  - Draw latch (over-centre latch): hooks over a catch and pulls a lid down tight, as on toolboxes and cases
  - Rotary latch (claw latch): a rotating jaw grabs a striker bar; stronger and harder to shake open, as in car doors
  - Cam latch (quarter-turn cam lock): a knob or key turns a flat arm behind the frame instead of sliding a bolt
  - Push-push latch: push once to latch and again to release; no handle needed
  - Magnet joint (magnetic catch): holds a cabinet door by magnetism with no moving parts, but more weakly
  - Compliant one-piece latch (flexure latch): the spring is built into one bending printed part
  - Pin-tumbler lock: adds a key so the bolt can't be pulled back by just anyone; a deadbolt has no slope and can't be pushed back
  - Solenoid latch (electric strike): an electrically released spring latch
  - Spring-gate hook (carabiner, snap hook): a hook with its own spring gate, like a safety hook and eye in one piece
  - Indexing plunger (pull-knob index pin): a spring-loaded pin, like a spring shoot bolt, used to lock parts at set positions
  - Tool-free fasteners (hitch pin and R-clip): a pin pushed through holes and clipped, used as a simple removable bolt

### Pictures, videos and models

- **links**: 
  - [File:Öffnen eines Riegels.gif (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:%C3%96ffnen_eines_Riegels.gif): Animation of opening a captured draw-bolt (slide bolt) latch *(licence: CC BY-SA 4.0 (Joho345))*
  - [File:Spring latch.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Spring_latch.jpg): Door latch bolts with the crescent-shaped bar from the knob that pulls the sloped bolt back; one version with a lock, one without *(licence: CC BY-SA 4.0 (Numbersinstitute))*
  - [File:Bolt lock.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Bolt_lock.jpg): Photo of a slide bolt (Commons description: Russian 'shpingalet', a slide bolt), filed in the Commons category 'Door bolts' *(licence: CC BY 2.0 (Dave & Lynne Slater))*
  - [File:Red latch.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Red_latch.JPG): A cabin hook: a hooked bar that swings into an eye to hold a door *(licence: CC BY 2.5 (Moralist))*
  - [How does a Door Handle work? (Jared Owen, YouTube; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=WX8NG0275R4): 3D animation of the inside of a door handle and its spring latch: handle, rose, latch and locking mechanism *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Spring Loaded Slide Bolt Latch (3D Printing World, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1663963-spring-loaded-slide-bolt-latch): A spring-loaded slide-bolt catch that prints in place as one assembly and latches itself when the door closes; tested in PLA and PETG *(licence: Standard Digital File License (Printables))*
  - [Spring latch sliding door bolt lock: rubber band, metal spring, 3D printed spring (Meister Edel, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/236902-spring-latch-sliding-door-bolt-lock-rubber-band-me): A sliding door bolt that stays shut in any position, in three sizes and three spring versions (rubber band, metal spring, printed spring) *(licence: CC BY-NC-SA)*
  - [Barrel Gate Bolt | Sliding Latch Lock | Multiple Sizes (moWerk, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/934602-barrel-gate-bolt-sliding-latch-lock-multiple-sizes): A printed barrel bolt in six tested sizes (50 to 100 mm long) with a 'locked open' position and threaded handle *(licence: CC BY-SA)*
  - [Universal 3D-Printable Spring Latch Mechanism (No Supports, Fully Modular) (Iker Libano, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1510729-universal-3d-printable-spring-latch-mechanism-no-s): A click-to-close, press-to-open latch with a 1.2 mm printed spring and a housing you merge into your own CAD model *(licence: CC0 (Creative Commons Public Domain))*
  - [Spring Latch (3D Printy, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/146100-spring-latch): A simple printed spring latch with tight and loose spring options and a tighter-clearance frame, to use alone or remix into models *(licence: CC BY)*
  - [Parametric Latch (Layered Restraints, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/967712-parametric-latch): A Fusion 360 parametric latch printed on its side; the print-in-place version works with a separately printed locking arm *(licence: CC0 (Creative Commons Public Domain))*
- **diagram_idea**: Top view of a door closing onto its frame in three frames: the sloped face of the spring-latch bolt meets the strike lip, the bolt is pushed in against its spring, then snaps out into the strike hole, with an arrow showing the square back face stopping the door opening; beside it, small side views of a slide bolt entering its keeper and a hook dropping into its eye.
- **sources**: 
  - https://en.wikipedia.org/wiki/Latch
  - https://en.wikipedia.org/wiki/Lockset
  - https://en.wikipedia.org/wiki/Glossary_of_locksmithing_terms
  - https://en.wikipedia.org/wiki/Hook-and-eye_closure
  - https://en.wikipedia.org/wiki/Revolute_joint
  - https://commons.wikimedia.org/wiki/File:%C3%96ffnen_eines_Riegels.gif
  - https://commons.wikimedia.org/wiki/File:Spring_latch.jpg
  - https://commons.wikimedia.org/wiki/File:Bolt_lock.jpg
  - https://commons.wikimedia.org/wiki/File:Red_latch.JPG
  - https://commons.wikimedia.org/wiki/File:Door_hook.jpg
  - https://commons.wikimedia.org/wiki/File:Latches_Suffolk_Norfolk.svg
  - https://commons.wikimedia.org/wiki/File:Gate_latch_mechanism,_simple.JPG
  - https://commons.wikimedia.org/wiki/File:Mortise-lock.jpg
  - https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A1562-2022-Locks-and-Latches
  - https://commercial.schlage.com/en/products/mechanical-locks/nd-series-grade-1-cylindrical-locks.html
  - https://idighardware.com/2025/10/fire-door-latching-2/
  - https://www.poolsafely.gov/wp-content/uploads/2016/04/Safety-Barrier-Guidelines-for-Residential-Pools.pdf
  - https://www.cpsc.gov/Newsroom/News-Releases/2014/CPSC-Warns-Consumers-of-the-Deadly-Dangers-of-Storage-and-Toy-Chests
  - https://www.kirmell.co.uk/choosing-the-right-spring-latch-for-gates-machine-guards-and-industrial-enclosures/
  - https://www.suffolklatchcompany.com/blogs/news/how-to-choose-the-right-door-bolt
  - https://uk.rs-online.com/web/content/discovery/ideas-and-advice/door-bolts-guide
  - https://gatelatchusa.com/hook-and-eyes.html
  - https://www.mcmaster.com/products/slide-bolts/
  - https://www.mcmaster.com/products/hook-and-eye-latches/
  - https://www.mcmaster.com/products/gate-latches/
  - https://www.youtube.com/watch?v=WX8NG0275R4
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** adjustable, aliases, making_tips_3d_printing, play_and_precision, processes

