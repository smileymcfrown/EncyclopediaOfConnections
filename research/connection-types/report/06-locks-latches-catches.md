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

*Not researched yet.*

## 160 Mechanical interlock

*locks, latches & catches.* A blocking part that stops one action while another is happening, such as a lid that can't open while a machine runs

*Not researched yet.*

## 161 Pin-tumbler lock (and other tumbler locks)

*locks, latches & catches.* A key lifts spring-loaded pins or levers to exactly the right heights so a plug can turn; the everyday door lock

*Not researched yet.*

## 162 Combination lock (wheel pack)

*locks, latches & catches.* Several wheels with notches that line up only when each is turned to the right number, letting a bar or shackle move

*Not researched yet.*

## 163 Rotary latch (claw latch)

*locks, latches & catches.* A rotating jaw that swings shut around a striker bar and is held by a catch, as in car doors and hatches; releases when a lever or cable trips the catch

*Not researched yet.*

## 164 Folding-blade lock (liner lock, lockback, slip joint)

*locks, latches & catches.* A pivot that locks a folding blade or arm open when a spring bar or rocker drops behind it; a slip joint only holds it with a detent

*Not researched yet.*

## 165 Tamper-evident breakaway bridge (frangible link)

*locks, latches & catches.* Thin plastic bridges that must snap the first time a cap or lid is opened, showing that it has been opened

*Not researched yet.*

## 262 Basic latches (spring latch, slide bolt, hook and eye)

*locks, latches & catches.* The everyday door latch with a sloped spring bolt, a sliding bolt, and a hook in an eye; the latch baseline

*Not researched yet.*

