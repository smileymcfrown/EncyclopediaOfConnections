# indexing & detents: Clicks into set positions

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 25 Click-pen mechanism (rotating-cam push-push indexer)

*indexing & detents.* The retractable-pen mechanism, where each push turns a toothed cam one step so it alternately holds the tip out and lets it back in

### What it is

- **plain_name**: The clicky button on a retractable pen: push once and the tip pops out and stays out, push again and it goes back in
- **term**: Rotating-cam push-push mechanism (click-pen mechanism, rotary ratchet cam indexer)
- **aliases**: 
  - click pen mechanism / clicky pen mechanism
  - retractable pen mechanism / retractable ballpoint mechanism
  - protract-retract mechanism (patent wording, US 3,137,276)
  - rotating-ratcheting mechanism (patent wording for flashlight clicker switches, US 4,827,385)
  - clicker switch / clicky tail switch (flashlights)
  - alternate-action mechanism / push-on push-off (latching push-button switches)
  - push-push switch or push-push button (Nguyen Duc Thang's animation names)
  - barrel cam for 180 deg. rotation (Thang's name for the cylindrical-cam version)
  - thrust device, cam body, rotator, plunger (names for its parts)
  - rotary cam indexer / push-to-index (when each push is used to step a dial round)
- **family**: indexing & detents
- **other_families**: locks, latches & catches, motion conversion, one-way & ratchet
- **one_liner**: A push button, a spring and a small toothed part that turns a fixed step every time you push, so the same push alternately locks a part out and lets it spring back in (or steps a dial round by one position).
- **complexity**: A small assembly that acts as one unit, usually 3 moving parts plus a spring: (1) a push button (plunger) with sloped saw teeth on its lower end; (2) a turning part (the rotator, cam body or cam follower) with lugs or teeth, sitting on the refill or shaft; (3) a fixed tube (the barrel or housing) whose inside wall has ribs separated by channels of two kinds, long deep channels and short shallow notches; (4) a return spring that pushes the rotator back up. The Sketchfab cutaway by C. Yamahata names the three main parts as push button (with ratchet), follower (spring-loaded by the ink cartridge) and cam.
- **how_it_works**: When you push the button, its sloped teeth drive the rotator down past the ends of the fixed ribs inside the tube. Pressed against those slopes by the spring, the rotator twists a little. When you let go, the spring pushes it back up and it slides along the sloped top of the nearest rib, twisting a little more, until its lugs drop into the next gap. The gaps alternate: a shallow notch catches the lugs and holds the tip out, while a deep channel lets the lugs slide all the way up so the spring pulls the tip back in (US 3,137,276; Thang, 'Barrel cam for 180 deg. rotation': 'Key factor is different depths of the cam groove'). Because the rotator always turns the same way by one step per push, every push swaps between the two states, and the clicks you hear are the rotator snapping onto the ledges (Pen Vibe; Make:).

### Finder attributes

- **job**: 
  - click into set positions: each push steps the rotator round one position and it stops there
  - lock, and release by hand: the first push locks the tip out against writing pressure, the next push releases it
  - change the kind of motion: a straight push becomes a stepped turn (used to rotate a dial or switch contacts)
- **motion**: rotate+slide: the button slides a few millimetres; the rotator slides in and out and turns one step (a fraction of a turn) per push, always in the same direction
- **degrees_of_freedom**: 1 as the user sees it: the button only slides in and out. Inside, the rotator both slides and turns, but the cam teeth tie the two together, so the push alone decides where it goes
- **special_behaviour**: 
  - indexing (clicks into set positions): the rotator steps round one position per push and rests on a ledge or in a channel
  - one-way (moves freely one way, locks the other): the sloped teeth only ever turn the rotator in one direction, like a ratchet
  - hand-release only (locks under load, releases when a person operates it): once the tip is out, writing pressure pushes the lugs harder onto the ledges, so only another push on the button retracts it
  - motion conversion (e.g. rotary to linear): a straight push becomes a stepped rotation; flashlight clicker switches, the Hackaday 'signspinner' indicator and Thang's 'Push-push switch' use that rotation to turn contacts or a dial
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the rotator's lugs sit on the ledges (shallow notches) of the fixed ribs
  - spring force (a spring or springy part presses it in place): the return spring keeps the lugs pressed onto the ledges or up the channels
- **input_output**: Linear push (a stroke of a few mm) -> alternating two-position output along the same axis (tip out / tip in), plus a stepped rotation of the rotator. One full out-and-in cycle takes two pushes. Shafts in line. Efficiency is low because every click slides plastic over plastic against the spring. Back-drivable: no; pushing on the tip or pulling the button does not change state, only another full push does. *(unverified parts omitted)*
- **power**: passive (no power needed); electrical switches built on it (flashlight clicky switches, latching push buttons) use it to open and close contacts but do not need power to move it
- **removability**: removable: pens and printed demos unscrew or pull apart so the refill and spring can be replaced; the mechanism itself is not a joining method
- **tools_needed**: none to use; to build a printed one you need the printed parts, a spring (a spare ballpoint-pen spring is common) and sometimes grease or fine sandpaper (Printables models 695673 and 114490)
- **seal**: none: nothing in it seals, and dirt or lint in the teeth can make it stick
- **load**: Light. It only has to hold the tip against writing pressure, which pushes the lugs straight onto the ledges (strong direction). *(unverified parts omitted)*
- **adjustable**: no: the number of positions and the stroke are fixed by the tooth and channel layout; to change them you redesign or reprint
- **play_and_precision**: Small axial play: the lugs come to rest in the same place each time because they sit on fixed ledges. Rotation is repeatable to one step. It needs the parts to be concentric; if the button or rotator wobbles in the tube, the teeth can miss and it jams or skips.
- **access_needed**: end of a tube or shaft: the parts slide into the end of a tube (a pen barrel or switch housing) and the button sticks out of that end
- **materials**: Moulded plastic in pens and switches: US 3,137,276 notes that the push button and rotating lug member 'can also be constituted by injection molded pieces'. Printed demos work in PLA with a steel pen spring (Printables 695673, 127961); a printed spring needs PETG or ABS rather than PLA (Hackaday signspinner). It is a mechanism, not a way of joining materials. *(unverified parts omitted)*
- **maker_difficulty**: moderate: the parts are small and the sloped teeth must meet cleanly, so pen-sized versions are hard to print well; makers print it larger (120-150% scale on one Printables model), grease or sand the sliding faces, and expect the first clicks to 'grind in'

### Making it

- **processes**: 
  - 3D print (FDM): works best when printed larger than pen size; several free demo and complete-pen models exist
  - 3D print (powder bed, SLS or MJF nylon): one designer made a complete working click pen as a single printed piece that only powder-bed printers can make (Printables 1191787)
  - injection moulding: how commercial pens and clicker switches are made (US 3,137,276)
  - off-the-shelf part: a spare retractable pen, its refill and spring, or a latching push-button switch already contain the mechanism *(unverified parts omitted)*
- **print_in_place**: no for FDM: the button, rotator and tube are printed separately and slid together with a metal spring (or a printed PETG spring or a rubber band). The exception is a single-piece click pen designed for SLS or MJF powder-bed printing, which is fully working straight off the printer apart from the refill (Printables 1191787).
- **making_tips_3d_printing**: Size: pen-sized teeth are at the edge of what FDM can print; one designer recommends printing their mechanism at 120-150% scale and says their smallest version 'is difficult to print easily' (Printables 114490). Orientation: print the tube and rotator standing up so the teeth and ribs are round and centred, and print without supports where the model allows (all the Printables demos opened print without supports); keep slopes at or below about 45-60 degrees from vertical so they print cleanly (Prusa). Layers: 0.15-0.2 mm layers give smoother slopes (Printables 695673 uses 0.15 mm, 2 perimeters, 20% infill, PLA; the rorys3D 'CLICK pen' uses 0.2 mm and PLA). Clearance: leave about 0.3 mm between parts that slide or turn (Prusa); too tight and the rotator will not twist, too loose and the lugs miss the ledges. Finishing: remove any brim, clean the tips of the plunger teeth, and grease or lightly sand the sloped faces; the first few clicks grind the parts in (Printables 695673, 127961, 1051321). Spring: use a steel pen spring (Printables 695673 uses a 4 mm x 20 mm spring from a ballpoint pen) because plastic springs held compressed creep and weaken (DuPont design guide, pp. 36-37); if you must print the spring, use PETG or ABS, not PLA (Hackaday signspinner; Hackaday 2026 on printed springs). Typical failures: the rotator sticks half-way (burrs, elephant's foot or too little clearance), it skips straight through without locking (rounded ledge tips, weak spring, wrong scale), or it wears after many clicks (use PETG or nylon for the rotator and grease it).
- **off_the_shelf_parts**: Search terms: 'retractable pen refill' and 'pen spring' (to reuse in printed pens); 'latching push button switch', 'alternate action push button switch' or 'push-on push-off switch' (switches with the mechanism built in); 'clicky tail switch' or 'forward clicky' / 'reverse clicky' switch (flashlight parts). A cheap retractable pen is the easiest source of a working mechanism to study.
- **rules_of_thumb**: 
  - The fixed ribs inside the tube are separated by two kinds of gap: deep channels that let the rotator's lugs slide right up (tip in) and shallow ones that stop them (tip out). Deep and shallow gaps alternate round the tube (US 3,137,276; Thang, 'Barrel cam for 180 deg. rotation 1b/2b': 'Key factor is different depths of the cam groove').
  - One patented layout uses four lugs on the push button and four on the rotating member (US 3,137,276, Weisser, filed 1955).
  - Pen Vibe's explanation of the Parker Jotter: the cam body turns 45 degrees as the button is pushed and another 45 degrees as it is released, giving two clicks per push.
  - Printed demos: print at 120-150% scale if the teeth are small, and grease the sliding faces (Printables 114490, Gamma4D); 0.15 mm layers, 2 perimeters, no supports, PLA, lubricate or sand the bevelled faces (Printables 695673).
  - Start with at least 0.3 mm clearance between moving printed parts; slopes print cleanly up to about 45-60 degrees overhang (Prusa Knowledge Base, Modeling with 3D printing in mind).
  - Do not use PLA for the spring: PLA 'makes for a very poor spring material' (Hackaday, 2026), and the signspinner maker used PETG for the printed spring because PLA would not survive being compressed.
  - Plastic springs held under constant deflection creep; use a metal spring for anything that stays compressed (DuPont General Design Principles, Module I, pp. 36-37).
  - Clicker switches are 'very inexpensive' and give tactile feedback, but are 'relatively mechanically complex, having a spring-loaded rotating ratcheting mechanism, and so tend to be less reliable than is desired' (US 7,880,100, Streamlight).

### When to use it

- **everyday_examples**: 
  - A retractable ballpoint or gel pen (the classic example; the Parker Jotter is the one Bill Hammack takes apart)
  - A flashlight with a clicky tail switch: US 4,827,385 describes its switch as 'of the rotating-ratcheting type used extensively in retractable ball point pens'
  - A maker's dishwasher 'clean/dirty' sign that turns a quarter turn on each push (Hackaday, 2019) *(unverified parts omitted)*
- **when_to_use**: Use it when one button, pushed the same way every time, should switch between two states: out and in, on and off, open and locked. It fits neatly inside a tube or round housing, so it suits pens, torches, retractable tools, pop-out buttons and hidden compartments. It is also a compact way to step something round by a fixed amount per push, such as a status dial, a counter or a rotary switch, without a motor.
- **when_not_to_use**: Avoid it for anything that carries real load or must never slip (use a ball-lock pin, index plunger or ratchet and pawl). Avoid it in a flat panel with little depth, where a heart-cam push-push latch or a slide latch fits better. Avoid it where the user must be able to see or set the state directly (a toggle switch or slide switch shows its position). Avoid it in dusty, gritty or sticky places, where grit in the small teeth makes it jam, and where very high reliability is needed (Streamlight's patent calls clicker switches less reliable than desired). If you need many positions rather than two, use a detent or ratchet indexer.
- **environment_limits**: Grit, lint, dried ink or glue in the teeth make it stick. Plastic return springs lose force over time if held compressed (DuPont, pp. 36-37), so use a metal spring. *(unverified parts omitted)*
- **safety_notes**: Low hazard. The spring can jump out when you take one apart. Small printed parts and springs are a choking hazard for young children.
- **common_failures**: Sticks half-way or will not turn: burrs, elephant's foot or too little clearance; clean and grease the sloped faces, sand lightly, or reprint with more clearance. Clicks but will not stay out: the tips of the ledges are rounded or worn, the spring is weak, or the parts are too small to print accurately; print larger and use a fresh metal spring. Turns but jams on the next push: the parts are not concentric or the lugs are too loose in the channels. Wears out after many clicks: small plastic teeth rub on every push; use PETG or nylon and grease, or buy a moulded mechanism. Printed spring goes weak: PLA springs creep; use PETG or a steel spring.
- **related**: 
  - Push-push latch (heart-cam latch): the flat version; a pin follows a heart-shaped track instead of a turning part stepping round a tube
  - Ratchet and pawl: also turns one way by one tooth at a time, but is driven round by a lever or handle and does not alternate between two held states
  - Geneva drive and other stepping mechanisms: turn continuous rotation (not a push) into steps
  - Bistable compliant mechanism (snap-through switch): two stable states from one springy printed part, but it is flipped back and forth rather than pushed the same way each time
  - Ball detent or compliant detent: clicks into set positions but you choose the direction; nothing makes it alternate
  - Sideways-shifting cam (US 2,865,331, Paper Mate, 1958): an early retractable-pen design where the follower moves sideways between two bores instead of turning
  - Twist-action pens: a helical cam turned by hand instead of pushed

### Pictures, videos and models

- **links**: 
  - [How a Retractable Ballpoint Pen Works (engineerguy, Bill Hammack)](https://www.youtube.com/watch?v=MhVw-MHGv4s): A Parker Jotter taken apart, with an animation (from about 1:50) of the cam body slipping on and off the stop members (Make: and Hackaday descriptions; title checked with YouTube oEmbed) *(licence: YouTube standard licence; link only)*
  - [Click pen mechanism, by C. Yamahata (Sketchfab)](https://sketchfab.com/3d-models/click-pen-mechanism-09101179ca374ecb8d1dfae7c13d0dd6): Rotatable 3D cutaway of a retractable pen showing the push button with ratchet, the spring-loaded follower and the cam; downloadable *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Barrel cam for 180 deg. rotation 2b (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=ML31YEnlODk): CAD animation of a push-push barrel cam: 'Each push makes blue cam shaft go down and turn 180 deg. when going up', with the unrolled cam groove shown beside it (Thang, 2700 Animated Mechanical Mechanisms, Part 3, p. 15) *(licence: link only)*
  - [Push-push switch (Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=qXnld2Yqf7I): CAD animation of the same barrel cam used to switch electrical contacts on and off with each push (Thang, Part 3, p. 15) *(licence: link only)*
  - [Ballpoint pen's click mechanism (Latch mechanism V3), by Adam (Printables)](https://www.printables.com/model/695673-ballpoint-pens-click-mechanism-latch-mechanism-v3): Enlarged see-through printable model of the pen click mechanism with an animated GIF of its working (details read through the Printables public API because the web page blocks automated access) *(licence: Creative Commons Public Domain)*
- **make_it_yourself**: 
  - [Ballpoint pen's click mechanism (Latch mechanism V3), by Adam](https://www.printables.com/model/695673-ballpoint-pens-click-mechanism-latch-mechanism-v3): Printable demonstrator of the click mechanism; needs 3 M3 screws and a 4 x 20 mm spring from a ballpoint pen; 0.15 mm layers, PLA, no supports; grease or sand the bevelled faces (read through the Printables API) *(licence: Creative Commons Public Domain)*
  - [clicky pen mechanism, by Gamma4D](https://www.printables.com/model/114490-clicky-pen-mechanism): Printable clicky-pen mechanism in several versions, driven by a rubber band; prints without supports and includes tolerances; print at 120-150% scale and use grease (read through the Printables API) *(licence: Creative Commons Attribution (CC BY))*
  - [CLICK pen, by rorys3D](https://www.printables.com/model/127961-click-pen): A complete working printable pen with the real retractable click mechanism (barrel, tip, plunger and cam printed; add a pen refill and spring); assembly video at https://www.youtube.com/watch?v=8p4-5Gi62YA (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives)*
  - [Single piece functional click pen for MJF or SLS, by marc kerger](https://www.printables.com/model/1191787-single-piece-functional-click-pen-for-mjf-or-sls): A click pen printed as one piece, springs and click-and-release mechanism included, that can only be made on support-free powder-bed printers (SLS or MJF); add a refill (read through the Printables API) *(licence: Creative Commons Attribution-NonCommercial-NoDerivatives)*
  - [Clicky Button Pen Mechanism Fidget, by Endless](https://www.printables.com/model/1684314-clicky-button-pen-mechanism-fidget): A four-part printed clicky button using the pen mechanism and any standard pen spring (read through the Printables API) *(licence: Creative Commons Public Domain)*
- **diagram_idea**: Show the inside of the tube 'unrolled' flat as a strip of ribs with alternating deep channels and short ledges, and trace one lug's zig-zag path over four pushes: down onto the button's sloped teeth, up onto a ledge (tip out), down again, then up a deep channel (tip in), with a small pen outline beside each step.
- **sources**: 
  - https://en.wikipedia.org/wiki/Retractable_pen
  - https://hackaday.com/2015/09/22/how-retractable-pens-work/
  - https://www.youtube.com/watch?v=MhVw-MHGv4s
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=MhVw-MHGv4s&format=json
  - https://penvibe.com/how-pens-work/
  - https://makezine.com/article/craft/retractable-pen-work/
  - https://sketchfab.com/3d-models/click-pen-mechanism-09101179ca374ecb8d1dfae7c13d0dd6
  - https://patents.google.com/patent/US3137276A/en
  - https://patents.google.com/patent/US2865331A/en
  - https://patents.google.com/patent/US7880100B2/en
  - https://patents.google.com/patent/US4827385A/en
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.youtube.com/watch?v=ML31YEnlODk (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=qXnld2Yqf7I (verified via YouTube oEmbed)
  - https://hackaday.com/2019/08/05/clicky-signspinner-works-just-like-a-retractable-pen/
  - https://www.printables.com/model/695673-ballpoint-pens-click-mechanism-latch-mechanism-v3 (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/114490-clicky-pen-mechanism (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/127961-click-pen (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1191787-single-piece-functional-click-pen-for-mjf-or-sls (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1051321-ballpoint-pen-mechanism (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1684314-clicky-button-pen-mechanism-fidget (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=8p4-5Gi62YA (verified via YouTube oEmbed)
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://hackaday.com/2026/04/27/the-challenges-of-3d-printing-reliable-springs/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf

### Other info

- **Fields with unverified parts:** environment_limits, everyday_examples, input_output, load, materials, processes, reuse_cycles

## 30 Ball detent (spring plunger)

*indexing & detents.* A spring-loaded ball presses into dimples so a part clicks into set positions and holds there until pushed on with enough force

*Also covers:* Also covers cabinet ball catches and roller catches

### What it is

- **plain_name**: A little spring-pushed ball that drops into a dimple with a click and holds a part in place until you push or pull it hard enough to pop the ball out again
- **term**: Ball detent (spring plunger, ball plunger; on doors: ball catch, and its roller version, the roller catch)
- **aliases**: 
  - spring plunger / ball plunger / ball-nose spring plunger
  - detent ball / index ball / spring-loaded ball
  - ball point set screw / ball-ended grub screw
  - press-fit (push-fit) ball plunger
  - federndes Druckstück (German trade term)
  - ball catch / door ball catch / Bales catch
  - bullet catch (small round ball catch drilled into a door edge)
  - double ball catch (two balls gripping a tongue on the door)
  - roller catch / adjustable roller catch / double roller catch (rollers instead of balls)
  - friction catch (roller catches that grip a tongue)
  - click stop / detent position
- **family**: indexing & detents
- **other_families**: locks, latches & catches, locating & alignment
- **one_liner**: A spring presses a ball (or a roller) against the other part, so when a dimple, hole or groove lines up the ball drops in with a click and holds the part there, until a firm enough push forces the ball back into its hole so the part can move on.
- **complexity**: A few parts, often sold as one unit: a body (a threaded or smooth sleeve), a ball or rounded nose, a small coil spring behind it, and a lip or crimp that keeps the ball from falling out; plus the dimples, holes, cone-shaped countersinks or grooves in the mating part. Door catches add a strike plate with a dip or tongue; roller catches use a spring-loaded roller or two sprung rollers that grip a tongue.
- **how_it_works**: The ball sits in a bore with a spring behind it, and the bore's lip lets only part of the ball stick out. When the moving part slides or turns so a dimple lines up with the ball, the spring pushes the ball part-way into it: you feel and hear a click, and the part is held there. Pushing the part sideways makes the sloped side of the dimple push the ball back into its bore against the spring; once the ball is fully in, the part moves freely until the next dimple. How hard you have to push depends on the spring force and on how steep the dimple's sides are: steep, deep dimples hold hard, shallow ones let go easily.

### Finder attributes

- **job**: 
  - click into set positions: gives a knob, slide, lever or hinge a set of positions you can feel and that hold
  - lock, and release by hand: door ball catches and roller catches hold a door shut until you pull it open
  - line parts up exactly: spring plungers push parts against stops or into a position in jigs and fixtures
- **motion**: multiple: the ball moves in and out of its bore (slide, a small fraction of its diameter) while the part it holds keeps its own motion, which may be rotate (knobs, rotary switches, hinges, e.g. every 60° for six dimples) or slide (drawer, slide, selector rod, door closing)
- **degrees_of_freedom**: The detent itself adds no new movement: the held part keeps its 1 (turning or sliding) but gets preferred positions. Inside, the ball has 1 (in and out of its bore) and can also roll.
- **special_behaviour**: 
  - indexing (clicks into set positions): the part settles into each dimple with a click and stays there
  - self-aligning or self-centring: the sloped sides of the dimple pull the part into the centre of each position
  - torque-limiting (slips or clicks at a set force/torque): it lets go when pushed harder than the spring can resist, so it holds against light knocks but cannot jam; the same idea, with stronger springs, is the ball-detent torque limiter
  - quick-release: door ball catches and roller catches open with a firm pull and close with a push, with no handle or button to work
- **holding_principle**: spring force (the spring presses the ball into the dimple) combined with shape (the ball sits in the dimple; a form-fit that can be overcome, because the dimple's sides are sloped)
- **input_output**: not applicable (it holds positions rather than passing motion on; see the ball-detent torque limiter for the version that passes on turning)
- **power**: passive (no power needed)
- **removability**: tool-free quick release for the held part (push or pull past the click); the plunger itself is removable (threaded) or semi-permanent (pressed, glued or staked in)
- **tools_needed**: Threaded plungers: drill, tap and a screwdriver or hex key (slotted or hex drive), sometimes a thread-locking compound (many are sold with a locking patch already). Press-fit plungers: drill and a vice, press or mallet. Door ball catches: drill or chisel to recess them, and a flat screwdriver to adjust the tension on adjustable types. Printed detents: a steel ball, a spring, and a set screw, cap or print pause to trap them.
- **seal**: none
- **load**: light (medium for heavy-force plungers): the holding force is limited by the spring. Available plungers range from about 0.125 lbf (light mini plungers) to about 200 lbf (heavy duty), and the push needed to move the part is roughly the spring force divided by tan(half the dimple's cone angle). Ball plungers don't do well with heavy loads, and spring plungers are not for heavy side loads. It resists movement across the ball's axis but gives way on purpose when pushed past its limit.
- **adjustable**: Partly. Threaded plungers can be screwed in or out to change how far the ball sticks out and so how firmly it clicks, but the spring's end force can't be changed after fitting, so choose a light, standard or heavy version instead (Vlier). Door double-ball catches and many roller catches have a screw or slot to set the tension or how far the ball or roller sticks out.
- **play_and_precision**: It tolerates little sideways misalignment between ball and dimple; the ball needs a close but free fit in its bore. Door bullet catches are fussy and sensitive to doors warping with humidity; double-ball catches are more forgiving. *(unverified parts omitted)*
- **access_needed**: one side only (blind): the plunger screws or presses into a hole from one side; the dimples are on the mating part
- **materials**: Bodies in steel (zinc-plated or black-oxide), stainless steel or plastic; balls usually hardened chrome steel (often 52100, 60-66 HRC), stainless steel, silicon nitride for harsh conditions, or plastic noses (POM/Delrin, which is self-lubricating and won't mark the surface; nylon, below about 82 °C). Door ball and bullet catches use a spring-loaded steel ball (Fine Homebuilding); roller catches have smooth plastic rollers (Rockler). Dimples can be in metal, wood or plastic; printed parts use PETG, ABS/ASA or nylon with a real steel ball and metal spring.
- **maker_difficulty**: easy: buy a ball plunger and screw it into a tapped or printed hole, or trap a steel ball and spring behind a set screw in a printed part; getting the click strength right takes a little trial and error

### Making it

- **processes**: 
  - off-the-shelf part: threaded and press-fit ball plungers and spring plungers, door ball catches and roller catches
  - 3D print (FDM): housings and dimpled parts, with a bought steel ball and metal spring; also replacement parts for door ball catches
  - CNC: drilled and tapped holes for plungers, and countersunk dimples in metal parts
  - woodwork: recessed ball and bullet catches in doors and cabinets
- **print_in_place**: partly: the housing and the dimpled part can be printed, but the steel ball and metal spring are dropped in during a print pause or trapped afterwards with a set screw or cap. Fully printed clicking detents without a ball use a springy printed arm instead (see compliant detent).
- **making_tips_3d_printing**: Use a real steel ball: a printable six-position detent (Printables 1063083) is built for a 6 mm ball bearing, and its maker warns that a printed ball will not click as smoothly. Use a metal spring or a bought ball plunger: plastic springs under constant load relax and creep (DuPont design guide, p. 36). Keep the ball in: close the top of the bore to a lip smaller than the ball (print it, or stake or peen metal), or hold ball and spring in with a set screw; you can also drop them in during a print pause, with the pocket snug so they can't jump to the nozzle (Prusa). Dimples: a cone-shaped countersink works well; a 90° cone releases at about the spring force, and a shallower (wider-angle) cone releases more easily (S&W Manufacturing). A notch depth of roughly 25-30% of the ball diameter is a common starting point (Firgelli, secondary). For a hand-turned knob, about 5-15 N at the ball is suggested (Firgelli, secondary). A printed roller latch maker recommends PETG or ABS/ASA because PLA may lose tension over time (Printables 1707986). Buying a threaded ball plunger and screwing it into a printed or heat-set threaded hole gives the most consistent click. A replacement door ball-catch retainer printed with thicker walls lasted a year of daily use (Printables 125991; slotted side up, 0.15-0.2 mm layers for the thread). *(unverified parts omitted)*
- **off_the_shelf_parts**: Ball plungers and ball-nose spring plungers (threaded, slotted or hex drive, with or without thread-locking patch; stainless; light, standard and heavy end force); press-fit (push-fit) ball plungers; long-nose and hex-nose spring plungers; tight-hold ball plungers with an O-ring; retractable (knob-grip, T-handle, L-handle) spring plungers, which are really index plungers; ball point set screws; small ready-made ball detents sold for gluing into 3D-printed parts (e.g. 6 x 7 mm stainless or 5 x 6 mm POM plungers for printed toy blasters); loose chrome-steel balls and compression springs; door ball catches, bullet catches and double ball catches with strike plates; adjustable roller catches and double roller catches. Supplier vocabulary: 'spring plunger', 'ball plunger', 'ball-nose spring plunger', 'press-fit spring plunger' (e.g. McMaster-Carr).
- **rules_of_thumb**: 
  - Push needed to move the part (side force) = end force / tan(half the countersink angle); use the middle of the plunger's initial and final end forces. Example: a plunger with 4 lb initial and 9 lb final end force in a 90° countersink needs about 6.5 lb to release. Shallower dimples (wider angle) release more easily (S&W Manufacturing, https://www.swmanufacturing.com/resources/design-guidelines-for-ball-plungers/). Friction adds to this (steel on steel about 0.15-0.20, more if dirty; https://www.firgelliauto.com/blogs/mechanisms/detent, secondary).
  - For threaded plungers: countersink the hole 90° slightly larger than the thread, tap enough full threads for the plunger's length (bottom tap or tap right through), and don't over-tighten, because the body is hollow (S&W Manufacturing, same page).
  - Initial end force is the force to start pushing the ball in; final end force is the force with the ball fully pushed in, and it is always higher (OneMonroe, https://monroeengineering.com/info-spring-plunger-terminology.php). Choose by the force at the working position, not the catalogue peak; standard plungers can't be adjusted after fitting (Vlier, https://www.vlier.com/blog/spring-loaded-devices-guide/).
  - Available end forces run from about 0.125 lbf (light mini plungers) to about 200 lbf (heavy duty) (Vlier, same page).
  - Ball plungers have a shallow ball that moves in and out easily but don't do well with heavy loads; spring plungers are not suitable for heavy side loads (JW Winco, https://www.jwwinco.com/en-us/technical/engineering-tips/selecting-spring-loaded-devices; OneMonroe).
  - Nylon noses are limited to below about 82 °C; Delrin (POM) noses are self-lubricating and don't mark surfaces (JW Winco, same page).
  - Starting geometry (secondary source): notch depth about 25-30% of the ball diameter with a 90° seat, and about 5-15 N at the ball for a hand-turned knob (https://www.firgelliauto.com/blogs/mechanisms/detent).
  - Plastic springs under constant load creep and relax; use steel springs (DuPont General Design Principles, Module I, p. 36, https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf).

### When to use it

- **everyday_examples**: 
  - the ball catch at the top of a closet or pantry door that holds it shut with a click
  - the spring-loaded ball on a ratchet wrench's square drive that holds the socket on
  - the click positions of a fan-speed or rotary switch knob, or the centre click of a balance knob
  - the gear-selector detents inside a car gearbox, and the detent that keeps some folding knife blades closed
- **when_to_use**: When a part should stop at set positions you can feel, and stay there against light knocks, but still move by hand without a button: rotary knobs and switches, adjustable arms, tilting stands, fold-out legs, slides, and tool-free accessory mounts. One maker's printed mitre-fence knob has 120 slots under it and a spring-loaded detent, giving positive stops every 0.5° (Hackaday). For cabinet and closet doors that should stay shut but open with a simple pull (ball, bullet and roller catches). In jigs and fixtures to push a part against a stop, or to hold a lever in place.
- **when_not_to_use**: Not where the part must be positively locked against a strong or steady load: use an indexing plunger (pull-knob pin) or a quick-release pin that must be pulled out first. Not as the only thing carrying weight or a heavy side load. Not where you need an overload clutch on a driven shaft: use a purpose-made ball-detent torque limiter. For a fully printed click with no loose parts, a compliant (springy-arm) detent is simpler. On doors that warp or move with humidity, a magnetic catch is more forgiving than a bullet catch.
- **environment_limits**: Dirt and grit can jam the ball in its bore (Model Engineer forum). Vibration can make a lightly sprung detent skip positions. Corrosion: use stainless or plastic-nosed plungers in wet places. Plastic springs or printed spring arms relax over time (DuPont); PLA roller latches may lose tension (Printables 1707986). *(unverified parts omitted)*
- **safety_notes**: None known beyond the usual: small steel balls and springs can fly out when a plunger is taken apart, and are a choking hazard for small children. A detent is not a lock, so don't rely on it to hold something that could fall or swing and hurt someone.
- **common_failures**: (1) Too weak a click, or it skips under vibration: use a stronger spring, a steeper or deeper dimple, or a heavy-force plunger. (2) Too stiff, or it needs two hands: use a lighter spring or a shallower (wider-angle) dimple. (3) Spring loses force (takes a set) over time: replace it; use steel springs, not plastic. (4) Dimples wear or dent, making the click mushy, especially in soft metals or printed plastic: use harder seats or a metal insert, or a plastic-nosed plunger on soft surfaces. (5) Ball jams from dirt or a too-tight printed bore: leave clearance and keep it clean. (6) Plunger unscrews and changes the setting: use one with a thread-locking patch or a lock nut. (7) Door catch won't hold or is hard to open because the strike has moved or the door has warped: re-adjust the tension or reposition the strike.
- **related**: 
  - Indexing plunger (pull-knob index pin): a spring-loaded pin that positively locks until you pull the knob; stronger, but must be operated by hand
  - Compliant detent (flexure click arm): a printed springy arm with a bump does the same job in one piece, with no ball or spring
  - Detent hinge (click hinge): a hinge with built-in click positions, often using the same ball-and-dimple idea
  - Ball-detent torque limiter: the same balls and dimples with stronger springs, used to pass on turning and let go when overloaded
  - Quick-release pin (ball-lock pin): spring-backed balls hold a pin in a hole until a button releases them
  - Spring button lock (snap button): a sprung button that pops into a hole in a tube and must be pressed to release
  - Magnet joint (magnetic catch): holds a door shut by magnetic pull, with no moving parts to wear or adjust
  - Push-push latch (touch latch): a door catch that opens and closes by pushing rather than pulling
  - Ratchet and pawl: also clicks through positions, but only lets the part move one way

### Pictures, videos and models

- **links**: 
  - [Federndes Druckstück 2.tif (Wikimedia Commons, Heinrich Kipp Werk KG, 2016)](https://commons.wikimedia.org/wiki/File:Federndes_Druckst%C3%BCck_2.tif): Picture of three spring plungers (federnde Druckstücke) *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Schalthebelarretierung.tif (Wikimedia Commons, Heinrich Kipp Werk KG, 2016)](https://commons.wikimedia.org/wiki/File:Schalthebelarretierung.tif): Diagram of the working principle of a spring plunger holding (arresting) a lever in position *(licence: CC BY-SA 4.0 (reuse with credit))*
  - [Spring-loaded Detents, alright! (This Old Tony, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=pO5g5pJANEc): Workshop video about spring-loaded detents *(licence: link only)*
  - [Ball and Detent (mech explanations, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=reJnue4V7GA): Explainer video of the ball-and-detent mechanism *(licence: link only)*
  - [What's the Difference: Cabinet Door-catch Mechanisms (Fine Homebuilding, 2007)](https://www.finehomebuilding.com/2007/10/05/whats-the-difference-cabinet-hardware): Photos and short comparisons of roller (friction) catches, magnetic catches, touch latches, bullet catches and double-ball catches *(licence: link only)*
- **make_it_yourself**: 
  - [Ball detent mechanism by Ragesh (Printables 1063083; details read via the Printables public API)](https://www.printables.com/model/1063083-ball-detent-mechanism): Printable six-position (60°) rotary ball detent like the one in a fan-regulator switch: 4 printed parts, a 6 mm steel ball, a spring, an M3 screw and nut *(licence: CC BY)*
  - [Door ball catch by Juliet_Lima_Zulu (Printables 125991; details read via the Printables public API)](https://www.printables.com/model/125991-door-ball-catch): Printed replacement for the threaded, tension-adjusting ball retainer of a door ball catch; reported to last a year of daily use on a pantry door *(licence: CC BY-SA)*
  - [3D Printable Roller Latch / Friction Catch by Aziz Vicentini (Printables 1707986; details read via the Printables public API)](https://www.printables.com/model/1707986-3d-printable-roller-latch-friction-catch): Fully printable roller catch for cabinet doors and drawers, with single and double receivers; PETG or ABS/ASA recommended *(licence: CC BY-NC)*
  - [Print-in-place Rotary Fidget Detent Knob by Y Ibrahim (Printables 274563; details read via the Printables public API)](https://www.printables.com/model/274563-print-in-place-rotary-fidget-detent-knob-with-dete): Print-in-place clicking knob in three detent strengths with no ball or spring (a compliant detent), useful to compare with a ball detent *(licence: CC BY-SA)*
- **diagram_idea**: A cross-section of a threaded ball plunger pressing its ball into a cone-shaped dimple in a sliding plate, in three frames: seated (click, held), part pushed sideways (the dimple's slope pushes the ball up into the body, compressing the spring), and sliding between dimples (ball fully in, part moves freely), with an arrow showing that steeper dimples need more push.
- **sources**: 
  - https://en.wikipedia.org/wiki/Ball_detent
  - https://en.wikipedia.org/wiki/Detent
  - https://en.wikipedia.org/wiki/Spring_plunger
  - https://www.swmanufacturing.com/resources/design-guidelines-for-ball-plungers/
  - https://www.jwwinco.com/en-us/technical/engineering-tips/selecting-spring-loaded-devices
  - https://www.vlier.com/blog/spring-loaded-devices-guide/
  - https://monroeengineering.com/info-spring-plunger-terminology.php
  - https://monroeengineering.com/info-plunger-ball-plungers-how-they-function-in-detent-applications.php
  - https://www.mcmaster.com/products/spring-plungers/
  - https://www.firgelliauto.com/blogs/mechanisms/detent
  - https://www.model-engineer.co.uk/forums/topic/making-a-spring-loaded-detent-ball/
  - https://outofdarts.com/products/ball-bearing-detent
  - https://hackaday.com/tag/detent/
  - https://www.finehomebuilding.com/2007/10/05/whats-the-difference-cabinet-hardware
  - https://www.diydata.com/carpentry/catches/catches.php
  - https://www.rockler.com/double-roller-catch-with-spring
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://help.prusa3d.com/article/insert-pause-or-custom-g-code-at-layer_120490
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://commons.wikimedia.org/wiki/File:Federndes_Druckst%C3%BCck_2.tif
  - https://commons.wikimedia.org/wiki/File:Schalthebelarretierung.tif
  - https://www.youtube.com/watch?v=pO5g5pJANEc (verified via YouTube oEmbed)
  - https://www.youtube.com/watch?v=reJnue4V7GA (verified via YouTube oEmbed)
  - https://www.printables.com/model/1063083-ball-detent-mechanism (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/125991-door-ball-catch (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/1707986-3d-printable-roller-latch-friction-catch (read via https://api.printables.com/graphql/)
  - https://www.printables.com/model/274563-print-in-place-rotary-fidget-detent-knob-with-dete (read via https://api.printables.com/graphql/)
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, making_tips_3d_printing, play_and_precision, reuse_cycles

## 31 Indexing plunger (pull-knob index pin)

*indexing & detents.* A spring-loaded pin that you pull out, move the part to a new hole, and let snap back in to lock the position

### What it is

- **plain_name**: A spring-loaded pin with a knob on the end: pull the knob to draw the pin out of a hole, move the part to the next hole, let go, and the spring snaps the pin back in to lock the part there
- **term**: Indexing plunger (index plunger)
- **aliases**: 
  - index plunger
  - indexing pin / index pin
  - index bolt (Rencol's name for its all-metal version)
  - pull pin / pull-pin knob / spring pull pin
  - pop pin (the usual name on gym and fitness equipment)
  - spring pin or spring-loaded locking pin (gym trade name; not to be confused with a roll pin, which is also called a spring pin)
  - manual locating plunger (Rencol)
  - detent pin (Ganter uses this word for its indexing plungers; the same name is also used for ball-lock quick-release pins)
  - indexing plunger with rest position / lock-out pop pin / lock-open pop pin (a version that stays pulled out when you twist the knob)
  - cam-action indexing plunger (a version pulled back by turning a lever 180°)
  - ring-pull plunger (a version with a pull ring instead of a knob)
  - chamfered-pin indexing plunger (a version that latches by itself when an edge pushes past it)
  - GN 617 / GN 817 indexing plunger (Ganter (brand) catalogue numbers)
- **family**: indexing & detents
- **other_families**: locks, latches & catches, quick-release & tool-free, locating & alignment, sliding, telescoping & linear motion
- **one_liner**: A hand-pulled, spring-returned steel pin that drops into one of a row or circle of holes to lock a sliding or turning part at a chosen position, and holds until you pull it out again.
- **complexity**: A small assembly that acts as one unit: a body or sleeve (threaded, weld-on or flange-mounted), a hardened steel pin (the plunger), a compression spring inside the body, a knob, pull ring or lever on the end, and usually a lock nut (Rencol design guide; Ganter). The part it locks carries a matching plate, disc or bar with a row or circle of holes, sometimes lined with hardened positioning bushings (Carr Lane; McMaster-Carr).
- **how_it_works**: The spring inside the body pushes the pin out, so it pokes into a hole in the part you want to hold. The pin, not the spring, carries the load: the part can't move sideways because it would have to cut through the pin (Ganter: 'the shear strength of the locking pin is decisive'). To move the part you pull the knob, which lifts the pin out of the hole against the spring; you move the part along until the next hole lines up and let go, and the spring pushes the pin in with a clunk (Ganter; Sam's Fitness). 'Rest position' or 'lock-out' versions have a notch under the knob: pull and twist the knob 90° and it stays pulled out, leaving both hands free, then twist back to let it drop in (Rencol Model 02 IP; exercise-equipment-parts.com).

### Finder attributes

- **job**: 
  - click into set positions: locks a sliding or turning part at one of several holes (indexing)
  - lock, and release by hand: it holds until someone pulls the knob
  - line parts up exactly: a pin in a close-fitting hole or hardened bushing puts the part back in exactly the same place (McMaster-Carr; Carr Lane)
  - join and hold: a pin through a hole can also hold two separate parts together as a quick-release connection (Ganter lists 'detachable quick connections')
- **motion**: slide: the pin slides in and out along its own axis (e.g. a 3/8-inch gym pop pin sticks out about 16 mm when locked and about 6 mm when held in its lock-out position; exercise-equipment-parts.com). The part it locks can turn or slide between hole positions while the pin is pulled out.
- **degrees_of_freedom**: 0 while the pin is in a hole: the locked part can't move across the pin. 1 while the pin is pulled out: the part can turn or slide along its track to the next hole. The pin itself has 1 (in and out).
- **special_behaviour**: 
  - indexing (clicks into set positions): the pin drops into the next hole as soon as it lines up
  - hand-release only (locks under load, releases when a person operates it): a sideways load on the part can't push the pin out; only pulling the knob releases it
  - quick-release: pull, move, let go; no tools
  - self-aligning or self-centring: only in tapered-pin versions, whose 15° taper guides the part into line, removes play and stops the pin binding when pulled (Carr Lane)
  - one-way (moves freely one way, locks the other): only the chamfered-pin variant, whose pin has a slope on one side and a flat locking face on the other, so an edge moving one way pushes it back and it latches automatically when the edge passes (Ganter GN 824 / GN 724, American Fastener Journal)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the pin sitting in the hole blocks movement; the strength comes from the pin in shear or bending
  - spring force (a spring or springy part presses it in place): the spring only keeps the pin in the hole; it carries no working load
- **input_output**: not applicable
- **power**: passive (no power needed) for hand-operated versions. Pneumatically operated versions (Ganter GN 817.7) and versions with a sensor that reports whether the pin is in or out (GN 817.6) exist for machines.
- **removability**: tool-free quick release: pulling the knob releases the moving part with no tools. The plunger itself is screwed in and held by a lock nut (removable with a spanner), bolted on by a flange, or welded on (permanent) (Ganter; Rencol).
- **tools_needed**: None to use. To fit: a spanner for the lock nut on threaded types; screws and a screwdriver or hex key for flange types; a welder for weld-on types; a drill and tap (or a nut or threaded insert in a printed or wooden part) for the threaded hole.
- **seal**: none
- **load**: Medium to heavy across the pin, because a steel pin is strong: before any safety factor, a 6 mm stainless pin in clean shear holds about 13,100 N before bending permanently, but when there is a gap between the plunger body and the locked part the pin bends like a small cantilever and a 5 mm steel pin holds only about 3,430 N with a 2 mm gap and 2,290 N with a 3 mm gap (Elesa+Ganter technical data 10.17). Weak along its own axis: the spring pushes with only a few newtons to a few tens of newtons (e.g. 6-35 N in Rencol's Model 02 IP range), so it must never carry a load that pulls the pin out.
- **adjustable**: Yes, in steps: you choose one of the holes, so the number and spacing of holes set the positions available. Threaded bodies can also be screwed further in or out and fixed with the lock nut to set how far the pin reaches into the holes.
- **play_and_precision**: small: play equals the clearance between pin and hole. A straight pin in a matching hardened bushing gives slightly better position accuracy, while a 15° tapered pin in a tapered bushing removes play and makes alignment easier (Carr Lane). The hole must line up with the pin before it can drop in, so you may have to wiggle the part (Thang, 'Positioning device 15': 'Move the slider slightly if the blue pin on the slider has not faced a base hole'). Chamfered holes or pins tolerate small misalignment (Ganter). *(unverified parts omitted)*
- **access_needed**: one side only (blind): the plunger is fitted and pulled from one side of the fixed part; its pin reaches into holes in the moving part behind it
- **materials**: Pins and bodies of steel (zinc-plated or blackened) or stainless steel for wet, outdoor or hygienic places; zinc die-cast housings; plastic, steel or stainless knobs (Ganter; Rencol). Acetal plastic plungers exist (Rencol). Elesa+Ganter's strength tables are for C45Pb steel and AISI 303 stainless pins. The hole plate or index disc can be steel, aluminium, wood, plywood or printed plastic; precision fixtures press hardened steel positioning bushings into the holes (Carr Lane; McMaster-Carr).
- **maker_difficulty**: easy: buy a ready-made plunger and screw it into a tapped hole or captured nut, then drill or print a row or circle of holes; making the plunger itself (pin, spring, sleeve and stop) is moderate

### Making it

- **processes**: 
  - off-the-shelf part: the usual choice; steel or stainless indexing plungers from about M6 to M24 thread (Ganter), with pins around 5-8 mm for M10-M16 bodies (Rencol)
  - 3D print (FDM): brackets, knobs, index plates and hole patterns around a bought metal plunger or a steel dowel pin
  - woodwork: jigs and fixtures with drilled index holes, e.g. lathe index wheels
  - CNC: precise index plates, discs and brackets
  - sheet metal: slotted or holed brackets and adjustment rails
- **print_in_place**: no: an indexing plunger needs a spring and a pin that slides in a sleeve, so it is printed as separate parts (if at all) and assembled, usually with a metal spring and a metal pin. Printed-spring latches exist (e.g. 'Spring pin lock' by Santacrab, which uses printed elliptical springs to hold a mushroom-shaped pin; Printables API), but they are latches rather than load-bearing index pins.
- **making_tips_3d_printing**: 1) Easiest and strongest: buy a small metal indexing plunger and print only the parts around it. Give it a threaded hole, a tapped hole or a captured hex nut; one maker paused the print, dropped a hex nut into its pocket and printed over it to trap it inside a knob (Printables 'South Bend 13" Lathe Spindle Indexing Attachment', JoeT139). 2) Keep the gap between the plunger body and the part it locks as small as possible: with a gap, the pin bends instead of shearing and holds much less (a 5 mm steel pin: about 3,430 N with a 2 mm gap, 2,290 N with a 3 mm gap; Elesa+Ganter). So put the plunger right against the moving plate. 3) Size the index holes with clearance: start with about 0.3 mm for moving parts (Prusa) to 0.5 mm (Protolabs/Hubs FDM tolerance) larger than the pin, print a small test strip of holes first, and chamfer the hole entrance so the pin finds it. 4) Printed holes wear oval under repeated loads; for accuracy or heavy use, press a metal sleeve or bushing into each hole (the idea behind positioning bushings; 5) If you print the pin itself, lay it flat so the layer lines run along the pin: in CNC Kitchen's PLA test, parts printed standing up broke at about half the stress of flat ones (31 vs 63 MPa), and a pin printed standing up would snap along a layer line. Better still, use a steel dowel pin or the plain shank of a bolt. 6) Use a metal compression spring: plastic springs kept compressed creep and relax (DuPont design guide, p. 36), and PLA creeps most of the common filaments (thrinter creep test). 7) Add a stop so the pin can't fall out when pulled, and, if you need both hands free, a notch the knob can be twisted into to hold the pin out (the 'rest position'). 8) Prefer PETG, ASA or nylon for brackets that stay loaded or sit in the sun: PLA started to give at 60 °C and PETG at 80 °C in CNC Kitchen's heat test. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'indexing plunger' or 'index plunger' (with or without 'rest position', 'lock-out' or 'locking'), 'pop pin' or 'pull pin knob' (fitness equipment spares), 'cam-action indexing plunger', 'ring-pull plunger', 'weld-on indexing plunger', 'flange-mount indexing plunger', 'indexing plunger with chamfered pin', 'positioning bushing' (hardened sleeves for the holes), 'index plate' or 'dividing plate'. For a home-made one: 'dowel pin', 'compression spring', 'shoulder bolt'. Makers: Ganter / Elesa+Ganter GN 613, GN 617, GN 817 series (brand), KIPP (brand), Carr Lane (brand), Rencol (brand), McMaster-Carr 'index plungers'.
- **rules_of_thumb**: 
  - The strength comes from the pin: shear strength is taken as about 0.8 x tensile strength, F = (pi x d^2 / 4) x 0.8 x Rm; for a lasting (no permanent bend) rating use the yield strength Re instead. Example: 6 mm stainless pin (Re = 580 N/mm2) about 13,120 N (Elesa+Ganter Technical Data 10.17, p. A42).
  - With a gap l between the plunger body and the locked part, the pin bends like a cantilever: F = (sigma_b x pi x d^3) / (32 x l). Example: 5 mm steel pin, 2 mm gap, about 3,430 N; the same pin with a 3 mm gap only about 2,290 N (Elesa+Ganter Technical Data 10.17, p. A43). Keep the gap small.
  - Apply a safety factor: 1.2-1.5 for a steady load, 1.8-2.4 for a pulsing load, 3-4 for a load that reverses back and forth (Elesa+Ganter Technical Data 10.17).
  - Typical sizes and spring forces: M10 body with 5 mm pin, M12 with 6 mm, M16 with 8 mm; about 6-17 N to start pulling the pin and 15-35 N to pull it fully back (Rencol Model 02 IP data table).
  - A 15° tapered pin in a matching tapered bushing makes alignment easier and stops the pin binding when pulled; a straight pin gives slightly better position accuracy (Carr Lane).
  - Rest-position (lock-out) versions hold the pin pulled out after a 90° (sometimes 180°) twist of the knob (Rencol design guide; American Fastener Journal).
  - For printed holes, start with about 0.3 mm clearance for moving fits (Prusa knowledge base); Protolabs/Hubs quote 0.5 mm as the FDM tolerance for joints.

### When to use it

- **everyday_examples**: 
  - Gym machines and adjustable weight benches: the pull knob (pop pin) that sets seat height, back angle or cable-pulley height (Sam's Fitness; exercise-equipment-parts.com)
  - Seat adjustment rails and height-adjustable stands (Rencol design guide; Ganter lists 'height adjustments')
  - Workshop jigs and fixtures that swing or slide a part to set stations (Rencol design guide) *(unverified parts omitted)*
- **when_to_use**: Use an indexing plunger when a part must be moved to one of a few set positions and then held firmly there, and a person will do the moving: seat and table heights, swivelling arms and brackets, rotating fixtures, telescoping tubes, a lathe or dividing head that needs even steps, or a panel that must be locked open. It is strong for its size, because the load goes across a steel pin, it can't be pushed out by the load, it locates the part accurately in a close-fitting hole, and it needs no tools. Pick a rest-position (lock-out) version if you need both hands to move the part.
- **when_not_to_use**: Don't use it when the part should click through positions just by pushing it (use a ball detent or a compliant detent), when you need an infinite range of positions (use a clamp, a friction hinge or a telescoping twist or lever lock), when the load pulls along the pin's axis (the spring will let it out; use a bolt or a ball-lock quick-release pin), or when the part must be removed completely and often (a quick-release pin is quicker). For fine angle steps that lock with no play, a Hirth joint suits better; for a hinge that simply clicks at set angles, use a detent hinge.
- **environment_limits**: Steel versions rust outdoors; use stainless steel for wet, outdoor, food or hygiene settings (Rencol; Ganter). Printed brackets and hole plates soften in heat (PLA started to give at 60 °C and PETG at 80 °C in CNC Kitchen's test) and creep under constant load (PLA most; thrinter test). *(unverified parts omitted)*
- **safety_notes**: Pulling the pin releases whatever it was holding: a seat, table or arm can drop or swing suddenly, so support the load first. A lock-out (rest-position) plunger left pulled out doesn't lock anything. On a lathe, remove the index pin before switching on, or it can break inside the machine (Printables 'Wood Lathe Index pin'). Fingers can be pinched between the plate and the body as the part moves. *(unverified parts omitted)*
- **common_failures**: The pin bends or shears when there is a large gap between the plunger body and the locked part, or when it is overloaded without a safety factor (Elesa+Ganter). The pin doesn't line up with a hole and sits on the edge instead of dropping in (Thang, 'Positioning device 15'). A lock-out plunger is left pulled out by mistake. Avoid most of these with a short gap, chamfered holes or a tapered pin, hardened bushings for heavy use, and stainless steel outdoors. *(unverified parts omitted)*
- **related**: 
  - Ball detent (spring plunger): a spring pushes a ball or rounded pin into dimples; the part clicks through positions just by being pushed, but holds much less
  - Quick-release pin (ball-lock pin): a separate pin pushed through holes and held by small balls; comes right out instead of being retracted by a spring
  - Spring button lock (snap button): a spring-loaded button pokes through holes in telescoping tubes; you press it in instead of pulling a knob
  - Hirth joint: two toothed faces locked by a bolt; many fine angle steps and no play, but you loosen and re-tighten the bolt
  - Detent hinge: a hinge that clicks and holds at set angles by itself, but holds far less than a pin through a hole
  - Compliant detent: a springy printed arm clicking into notches; no metal, light holding only
  - Clevis pin with a clip, or a dowel or locating pin: the same pin-in-hole locking, but with no spring to hold it in
  - Geneva drive: steps a wheel round and locks it between steps automatically instead of by hand

### Pictures, videos and models

- **links**: 
  - [KIPP indexing plunger actuation types at a glance (YouTube, KIPP)](https://www.youtube.com/watch?v=T1JqJjTb22k): Video of the different ways indexing plungers are operated (knob, lever, pull ring, rest position and so on) *(licence: link only (standard YouTube licence))*
  - [Indexing Plungers GN 823 with Operating Lever | Fast Locking and Secure Positioning | Ganter (YouTube, Otto Ganter GmbH & Co KG)](https://www.youtube.com/watch?v=_t5eR_RLZgE): Video of lever-operated indexing plungers locking and positioning parts *(licence: link only (standard YouTube licence))*
  - [Positioning device 15 (YouTube, Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=3Rn80vPBaVo): CAD animation: press a lever to lift a spring-loaded pin, slide the part to a new hole and release; shows the pin dropping into the base holes *(licence: link only (standard YouTube licence))*
  - [Technical Data 10.17: Strength of indexing plungers (Elesa+Ganter PDF)](https://www.elesa-ganter.com/static/technicaldata/files/Load_rating_Indexing_EN.pdf): Drawings of an indexing plunger pin loaded in shear and in bending with a gap, plus load tables by pin diameter *(licence: link only (copyright Elesa+Ganter 2018; they ask for the source to be named when drawings are reproduced))*
  - [Indexing plungers (Ganter product overview)](https://www.ganternorm.com/en/products/3.1-Indexing-locking-blocking-with-pins-and-ball-shaped-elements/Indexing-plungers): Photos and drawings of many indexing plunger types: knob, lever, pull ring, rest position, weld-on, flange-mount, chamfered pin *(licence: link only)*
- **make_it_yourself**: 
  - [Wood Lathe Index pin (Dimbulb, Printables)](https://www.printables.com/model/489599-wood-lathe-index-pin): A simple printed index pin (6.25 mm pin, 10 mm knurled handle) that drops into the index holes of a wood lathe; no spring, but shows the pin-in-hole indexing idea. Details read through the Printables public API because the web page blocks automated access. *(licence: CC BY-NC-SA)*
  - [South Bend 13" Lathe Spindle Indexing Attachment (JoeT139, Printables)](https://www.printables.com/model/968492-south-bend-13-lathe-spindle-indexing-attachment): Printed bracket, interchangeable index rings and a lock pin (turned aluminium with a printed cap) for dividing a lathe spindle by hand; includes the captured-nut trick. Read through the Printables public API. *(licence: CC BY-NC)*
  - [Parametric Indexing Plates for Rotary Table (Projunk, Printables)](https://www.printables.com/model/1260586-parametric-indexing-plates-for-rotary-table): Standard and custom printable index plates (rings of holes) for use with an index pin or plunger. Read through the Printables public API. *(licence: CC BY-SA)*
  - [Spring pin lock (Santacrab, Printables)](https://www.printables.com/model/736627-spring-pin-lock): An all-printed pin lock whose spring action comes from small printed ellipses gripping a mushroom-shaped pin; a way to try a printed spring-held pin. Read through the Printables public API. *(licence: CC BY-NC)*
- **diagram_idea**: Cut-away side view of a plunger screwed into a fixed bracket, its spring pushing the pin into one of a row of holes in a sliding bar; second frame shows a hand pulling the knob, the spring compressed and the bar sliding to the next hole; a small inset shows the pin bending when there is a gap between bracket and bar.
- **sources**: 
  - https://www.ganternorm.com/en/products/3.1-Indexing-locking-blocking-with-pins-and-ball-shaped-elements/Indexing-plungers
  - https://www.elesa-ganter.com/en/TechnicalDataIND/1017-strength-of-indexing-plungers-td-001-art-044
  - https://www.elesa-ganter.com/static/technicaldata/files/Load_rating_Indexing_EN.pdf
  - https://www.rencol.com/news/index-plungers-a-design-engineers-guide/
  - https://www.rencol.com/products/indexing-plungers-bolts-ball-cam-plungers/spring-loaded-index-plunger-with-locking-rest-position-model-02-ip/
  - https://fastenerjournal.com/indexing-plungers-with-chamfered-pins/
  - https://www.carrlane.com/product/spring-loaded-devices/index-plungers
  - https://www.mcmaster.com/products/indexing-plungers/
  - https://en.wikipedia.org/wiki/Spring_plunger
  - https://en.wikipedia.org/wiki/Detent
  - https://www.exercise-equipment-parts.com/lockout-pop-pin.html
  - https://samsfitness.com.au/equipment/gym-spare-parts/spring-pop-pins/
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.youtube.com/watch?v=3Rn80vPBaVo
  - https://www.youtube.com/watch?v=T1JqJjTb22k
  - https://www.youtube.com/watch?v=_t5eR_RLZgE
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/489599-wood-lathe-index-pin
  - https://www.printables.com/model/968492-south-bend-13-lathe-spindle-indexing-attachment
  - https://www.printables.com/model/1260586-parametric-indexing-plates-for-rotary-table
  - https://www.printables.com/model/736627-spring-pin-lock
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-design-interlocking-joints-fastening-3d-printed-parts/
  - https://www.cnckitchen.com/blog/stop-printing-flat-the-45-secret-for-stronger-parts
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, everyday_examples, making_tips_3d_printing, play_and_precision, reuse_cycles, safety_notes

## 32 Compliant detent (flexure click arm)

*indexing & detents.* A springy printed arm or bump that clicks into notches, giving positive click positions in knobs, dials and hinges without any metal parts

*Also covers:* Also covers the star wheel and jumper spring detent (as in clocks and rotary switches)

### What it is

- **plain_name**: A springy plastic arm (or bump) that rubs over a ring or row of notches and drops into each one with a click, so a knob, dial, slider or hinge stops at set positions, with no metal spring or ball
- **term**: Compliant detent (flexure detent); in clocks, watches and switches: star wheel and jumper spring (detent wheel and detent spring)
- **aliases**: 
  - flexure click arm / click arm
  - detent arm / detent spring / detent beam
  - printed detent, clicky knob, clicker knob (maker names)
  - leaf-spring detent (when the springy arm is a strip of spring steel)
  - jumper or jumper spring (watch and clock term: a springy lever whose tip rests between the points of a star wheel)
  - star wheel and jumper (a wheel with pointed teeth held in each position by a jumper)
  - sautoir (French watchmaking term for the jumper; literally 'neck chain', as used by Horopedia)
  - detent wheel (the notched wheel of a rotary switch or scroll wheel)
  - haptic detent (term used in interface-design research such as FlexHaptics and Shape-Haptics)
- **family**: indexing & detents
- **other_families**: compliant mechanisms & flexures, print-in-place & 3D-printing joints, one-way & ratchet, snap & clip fits
- **one_liner**: A notched wheel or track plus a springy arm made as part of the plastic (or a thin steel jumper spring) that drops into each notch, giving a turning or sliding part positive click positions without separate springs, balls or pins.
- **complexity**: Single piece (print-in-place knobs) or a few parts: a notched wheel, ring or strip (the star or detent wheel), and a springy arm, beam or ring with a rounded or V-shaped tip, moulded or printed as part of the other component. Watch and clock versions: star wheel, steel jumper spring, and the post or screw it pivots on, often an eccentric post for adjustment (AWCI); a single stamped jumper with two springy arms can hold both the day and date wheels (Suwa Seikosha patent US3688490A, 1972). Snap-together printed knobs: knob, base and printed spring (Printables 'Clicker Knob').
- **how_it_works**: The springy arm presses its tip against the notched wheel or track. As you turn or slide the part, a tooth pushes the tip outwards and bends the arm; once the tip passes the tooth's crest it springs back into the next notch, which you feel and hear as a click, and it then holds the part there until you push hard enough to bend the arm again (Wikipedia 'Detent'; Shape-Haptics, Zheng et al. 2022). The sideways force needed to leave a notch grows with the arm's spring force and the steepness of the notch sides (Engineers Edge: R = P tan α). In clocks and watches the same pair is called a star wheel and jumper: the jumper sits in the V between two star points and keeps a date, day or counter wheel in exact position between jumps, then lets it snap forward one tooth at a time (Horopedia; AWCI). If the notches are saw-shaped (steep on one side, gentle on the other), the same arm lets the part turn one way only and becomes a ratchet.

### Finder attributes

- **job**: 
  - click into set positions: the main job (knobs, dials, sliders, selector switches, counters)
  - let it move (turn, slide or bend): the part still turns or slides freely between clicks
  - stop it moving back (one-way): only when the notches are saw-toothed; e.g. Y Ibrahim's print-in-place detent knob 'also acts as a handy basic one-way ratchet' (Printables)
- **motion**: multiple: rotate (knobs, dials, star wheels, hinges; any number of turns or a limited arc) or slide (sliders, drawers); the arm itself flexes a little, about the depth of a notch, at each click
- **degrees_of_freedom**: 1: turning about the knob's axis or sliding along the track; the arm's small bending is an internal motion that lets the teeth pass
- **special_behaviour**: 
  - indexing (clicks into set positions): the defining behaviour; click spacing = 360° divided by the number of notches (e.g. a rotary switch clicking every 30° has 12 positions; Wikipedia 'Rotary switch')
  - self-aligning or self-centring: a V-shaped notch pulls the part into the middle of each position, e.g. a stereo balance control that clicks into its centre position (Wikipedia 'Detent') and a watch jumper that lines the hand up with the dial marks (AWCI)
  - one-way (moves freely one way, locks the other): only with saw-toothed notches (then it is a compliant ratchet)
  - torque-limiting (slips or clicks at a set force/torque): in a rough sense, because pushing hard always pushes the arm out of the notch rather than breaking it; the release force is set by the arm and notch shape but is not precise
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the bent arm presses the tip into the notch
  - shape (the parts interlock; form-fit): only partly, because the notch sides slope, so enough force always pushes the tip out
- **input_output**: not applicable (it holds positions rather than passing motion on). In watch and clock star-wheel-and-jumper pairs the drive pushes the star forward, and the jumper finishes each step by snapping the star into the next exact position (Horopedia).
- **power**: passive (no power needed)
- **removability**: permanent when the arm is printed or moulded as part of the knob or housing (print-in-place knobs); removable in snap-together or screwed versions (e.g. Printables 'Clicker Knob' is pressed together, and a watch jumper is held by a screw and post)
- **reuse_cycles**: many times: snap-together and screwed versions can be taken apart and refitted; how many clicks it survives depends on how far the arm bends; plastic springs work well in intermittent action but must not be stressed beyond the material's fatigue limit (DuPont design guide, p. *(unverified parts omitted)*
- **tools_needed**: none (print-in-place or press-fit); a screwdriver for screwed-on arms or watch jumpers
- **seal**: none
- **load**: light: meant to hold against fingertip forces, knocks and vibration, not working loads. Shape-Haptics laser-cut POM springs push with about 0.75-3 N at up to 4 mm of bending, and the authors describe their mechanisms as covering light force feedback of 0-5 N for hands and fingers (Zheng et al. 2022). *(unverified parts omitted)*
- **adjustable**: Usually no: click strength is fixed by the arm's thickness, length and the notch depth. Ways to change it: print a stiffer or softer arm (Y Ibrahim's knob comes in three detent strengths; Printables), fit a different spring (the 'Clicker Knob' stacked counter uses two spring strengths so one ring clicks while the next holds), or move the spring's post (watch jumpers are adjusted on an eccentric post; AWCI). Loosening the screws of a laser-cut side spring added play and a sharper click (Shape-Haptics).
- **play_and_precision**: small: a V-notch pulls the part to the same spot each time, but a soft plastic arm allows a little wobble within each position and a weak arm can let the part sit slightly off-centre or skip under shock; a watch jumper that is too weak lets the hand move on a shock or advance by more than one tooth (AWCI). Rough laser-cut or printed edges give uneven friction and click feel (Shape-Haptics).
- **access_needed**: not applicable: it is built into the part
- **materials**: Best plastics for springy arms are tough and resilient: acetal (POM, Delrin (brand)) and polyester elastomer (Hytrel (brand)) are the best unreinforced plastics for springs (DuPont, p. 36); Shape-Haptics used 3 mm POM sheet (Sustarin (brand)) because laser-cut acrylic loses strength and plywood's strength depends on grain direction. For FDM printing, tough, ductile ABS, PETG and nylon suit flexing features better than brittle PLA (Protolabs/Hubs snap-fit guide), although PLA works for light fidget knobs. Watch jumpers and rotary-switch detent springs are spring steel (Wikipedia 'Detent': 'a piece of spring steel that snaps into position').
- **maker_difficulty**: easy to moderate: a clicking knob prints in one piece, but getting the right click strength and making the arm last usually takes a few test prints

### Making it

- **processes**: 
  - 3D print (FDM): print-in-place or snap-together knobs, dials and sliders with printed arms
  - 3D print (resin): possible for small precise detents, but standard resins are brittle for flexing arms (Protolabs/Hubs snap-fit guide notes standard SLA resins are less suitable)
  - laser cut: flat POM (acetal) springs and notched sliders or wheels (Shape-Haptics)
  - sheet metal: stamped spring-steel jumper and detent springs (watches, clocks, rotary switches)
  - off-the-shelf part: rotary switches and detented knobs or encoders that already contain a star-wheel detent *(unverified parts omitted)*
- **print_in_place**: yes: e.g. Y Ibrahim's 'Print-in-place Rotary Fidget Detent Knob' prints assembled with no supports and in three detent strengths (Printables). Other designs print as separate knob, base and spring and are pressed together (Printables 'Clicker Knob', 'Super Clicky Fidget Knob').
- **making_tips_3d_printing**: 1) Lay the arm flat on the bed so it bends within the layers, not across them: Protolabs/Hubs advise avoiding snap-fit cantilevers built vertically in the Z direction, because layers peel apart; PLA printed standing up reached only about half the strength of flat-printed PLA in CNC Kitchen's test (31 vs 63 MPa). 2) Round the arm's root with a fillet of at least half the arm thickness, taper the arm towards its tip and, where you can, make it at least 5 mm wide (Protolabs/Hubs snap-fit guide); avoid sharp inside corners (DuPont, p. 36). 3) Design the arm so it is relaxed (unbent) when the tip sits in a notch and only bends while passing a tooth: plastic springs work for intermittent action but creep and relax if kept bent (DuPont, pp. 36 and 47, which also notes plastic ratchets work 'providing the springs are not held in the loaded position for a long period of time'); PLA creeps the most of the common filaments (thrinter test). 4) Shape the tip with equal slopes on both sides (Shape-Haptics used 45° slopes) so it clicks the same in both directions; make one side steep and the other shallow for a one-way ratchet. 5) Tune the click with notch depth and arm stiffness rather than guesswork: the sideways force to escape rises with the arm's push and the steepness of the notch sides (Engineers Edge R = P tan α); print two or three strengths side by side, as the fidget-knob designer did. 6) Use PETG, ABS or nylon for arms that click often; PLA is brittle (Protolabs/Hubs) and softens from about 60 °C (CNC Kitchen). 8) Stair-stepped layer lines on curved notches make the click rough; a little grease helps (the 'Clicker Knob' designer suggests a tiny amount on the notches and spring tips), and pressing snap-together parts in warm water makes assembly easier (Printables 'Clicker Knob'). 9) Keep plenty of teeth for fine steps but not so shallow that the tip skips: 12 or 24 clicks per turn on a 20 mm knob work in the 'Clicker Knob' design. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'rotary switch' (star-wheel detent built in, positions every 30°, 45°, 60° or 90°; *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Click spacing = 360° / number of notches; rotary switches typically click every 30°, 45°, 60° or 90° (Wikipedia 'Rotary switch').
  - Holding (escape) force rises with spring force and notch angle: R = P tan α, and more with friction (Engineers Edge 'Plunger Detent Mechanism').
  - Plastic springs are fine for intermittent action; springs under constant load or deflection should be spring steel, because plastics creep and relax (DuPont 'General Design Principles for Engineering Polymers', p. 36). Plastic ratchet springs work if not held loaded for long periods (same guide, p. 47).
  - Give the arm a root fillet of at least 0.5 x its base thickness, a width of at least 5 mm where possible, a taper towards the tip, and don't build it vertically in Z (Protolabs/Hubs snap-fit guide for 3D printing).
  - Laser-cut POM springs: 1 mm minimum wall; springs with 1.0-2.5 mm walls, up to 4 mm deflection and about 0.75-3 N contact force; tip with 45° slopes on both sides (Zheng et al., Shape-Haptics, CHI 2022).
  - A watch jumper must be strong enough to stop shocks moving the wheel but weak enough not to rob the drive of energy; it sits on two teeth and is set with an eccentric post (AWCI 'Minute Counter Jumper Springs').
  - Moving printed parts need at least about 0.3 mm clearance (Prusa knowledge base).

### When to use it

- **everyday_examples**: 
  - Selector knobs and rotary switches that click from one position to the next, e.g. a toy stove knob (Printables 'Clicky Knob'; Wikipedia 'Rotary switch')
  - The date window and chronograph minute counter in a mechanical watch, held between jumps by a jumper spring (AWCI; Horopedia)
  - A stereo balance control that clicks into its centre position (Wikipedia 'Detent') *(unverified parts omitted)*
- **when_to_use**: Use a compliant detent when you want a knob, dial, slider, lid or small hinge to feel clicky and stop at set positions but don't need it to hold a real load: menu or mode selectors, counters, adjusters that shouldn't drift with vibration, fidget toys and printed enclosures. It is ideal for 3D printing and laser cutting because the spring is part of the plastic, so there are no balls, pins or metal springs to buy, it can often be printed in place, and the click strength is set by the geometry. The metal star-wheel-and-jumper version suits precise small mechanisms (clocks, counters, switches) where a wheel must sit exactly between steps.
- **when_not_to_use**: Avoid it when the part carries a load or must stay locked against a push (use an indexing plunger or a pin), when it must stay at one position under constant load for months (a plastic arm kept bent creeps; use a metal spring or a ball detent), when you need hundreds of thousands of crisp clicks (use a ball detent or a steel detent spring with hardened parts), in hot places with PLA, or when you need any angle rather than set steps (use a friction hinge or clamp). For one-way motion use a proper ratchet; for exact angles under load use a Hirth joint.
- **environment_limits**: PLA arms soften from about 60 °C and PETG from about 80 °C (CNC Kitchen), so a PLA detent left in a hot car may lose its click. Plastic arms held bent creep and relax, weakening the click over time (DuPont; thrinter PLA creep test). Acetal (POM) has good resistance to moisture, solvents and oils (DuPont, p. 36). Shock and vibration can make a weak detent skip a notch (AWCI, for watch jumpers). *(unverified parts omitted)*
- **safety_notes**: Generally none known for plastic detents. Metal jumper springs in watches can fly off when removed. *(unverified parts omitted)*
- **common_failures**: The arm cracks at its root, usually from a sharp inside corner, printing it standing up (layers peel), or too much bending for a brittle material like PLA (Protolabs/Hubs; DuPont). The arm takes a permanent set (creeps) if it rests bent, so the click gets weaker (DuPont; thrinter). The arm is too stiff, making the knob hard to turn or wearing it quickly, or too weak, so it skips under vibration or overshoots by a notch (AWCI, for watch jumpers). Rough printed or laser-cut edges give an uneven click (Shape-Haptics). Fixes: fillet and taper the arm, print it flat, let it rest straight in each notch, choose PETG or nylon, add a dab of grease, and test a few stiffnesses. *(unverified parts omitted)*
- **related**: 
  - Ball detent (spring plunger): a metal spring pushes a ball into dimples; stronger, longer-lasting and more consistent, but needs bought parts
  - Compliant ratchet (flexure pawl): the same springy arm with saw-toothed notches, so it turns one way only
  - Cantilever snap fit: the same bending beam with a hook, but made to click together once and stay locked
  - Torque-limiting gear with flexing spring arms: springy arms in notches designed to slip at a set torque rather than to give click positions
  - Printed leaf spring: a flat printed spring that can press a separate detent tip or ball
  - Detent hinge: a hinge with a built-in detent that holds a lid or leg at set angles
  - Indexing plunger: a pulled pin in holes; locks firmly rather than clicking
  - Hirth joint: toothed faces clamped together for firm, play-free angle steps
  - Geneva drive: steps a wheel round and locks it positively between steps, rather than holding it with a spring

### Pictures, videos and models

- **links**: 
  - [Positioning device 7 (YouTube, Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=pRVqH-dwAzc): CAD animation of a leaf-spring detent holding a part in set positions; Thang notes 'A leaf spring provides limited holding power' *(licence: link only (standard YouTube licence))*
  - [Spring toggle mechanism 6a (YouTube, Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=YydcGLWbuZg): CAD animation of a spring indexing device that snaps a lever into five positions and holds it there *(licence: link only (standard YouTube licence))*
  - [FlexHaptics: A Design Method for Passive Haptic Inputs Using Planar Compliant Structures (YouTube, ACM SIGCHI)](https://www.youtube.com/watch?v=bWCiSvidCUY): Video of 3D-printed compliant modules giving resistance, detent or bounce feel along linear, rotary and ortho-planar paths *(licence: link only (standard YouTube licence))*
  - [3d printed 3 position detent mechanism (YouTube, Jesse Schoch)](https://www.youtube.com/watch?v=QnqAtSeqRPo): A 3D-printed detent clicking between three positions *(licence: link only (standard YouTube licence))* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Print-in-place Rotary Fidget Detent Knob with detent strength options (Y Ibrahim, Printables)](https://www.printables.com/model/274563-print-in-place-rotary-fidget-detent-knob-with-dete): A clicky knob that prints already assembled, no supports, in three detent strengths; also works as a basic one-way ratchet. Details read through the Printables public API because the web page blocks automated access. *(licence: CC BY-SA)*
  - [Clicker Knob (Jack, Printables)](https://www.printables.com/model/902861-clicker-knob): Snap-together knobs with 12 or 24 clicks per turn, marked dials and a stackable counter version with two spring strengths; includes OpenSCAD scripts to change size and markings. Read through the Printables public API. *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
  - [Clicky Knob (RoboBear Designs, Printables)](https://www.printables.com/model/280920-clicky-knob): A toy-stove knob with a detent at each mark so it clicks when turned. Read through the Printables public API. *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
- **diagram_idea**: A notched wheel with a springy plastic arm growing from the housing: frame 1 the arm's rounded tip rests straight in a notch; frame 2 the wheel turns, a tooth bends the arm outwards (arrow showing spring force P and notch angle α); frame 3 the tip drops into the next notch with a 'click', with a small inset of a watch star wheel and jumper doing the same thing.
- **sources**: 
  - https://en.wikipedia.org/wiki/Detent
  - https://en.wikipedia.org/wiki/Rotary_switch
  - https://www.engineersedge.com/mechanics_machines/plunger_detent_mechanism_14924.htm
  - https://arxiv.org/abs/2202.10655
  - https://arxiv.org/pdf/2202.10655
  - https://api.semanticscholar.org/graph/v1/paper/DOI:10.1145/3491102.3502113?fields=title,abstract,authors,year,venue,openAccessPdf,externalIds
  - https://www.youtube.com/watch?v=bWCiSvidCUY
  - https://www.youtube.com/watch?v=QnqAtSeqRPo
  - https://www.youtube.com/watch?v=pRVqH-dwAzc
  - https://www.youtube.com/watch?v=YydcGLWbuZg
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.cnckitchen.com/blog/stop-printing-flat-the-45-secret-for-stronger-parts
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.awci.com/watchmaking-excellen/minute-counter-jumper-springs/
  - https://horopedia.org/star-wheel/
  - https://horopedia.org/jumping-hour/
  - https://beyondthebezel.substack.com/p/az-horology-terminology-list
  - https://patents.google.com/patent/US3688490A/en
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/274563-print-in-place-rotary-fidget-detent-knob-with-dete
  - https://www.printables.com/model/902861-clicker-knob
  - https://www.printables.com/model/280920-clicky-knob
  - https://www.printables.com/model/308024-super-clicky-fidget-knob

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, everyday_examples, links, load, making_tips_3d_printing, off_the_shelf_parts, processes, reuse_cycles, safety_notes

## 33 Detent hinge (click hinge, position hinge)

*indexing & detents.* A hinge that clicks and holds at set angles, like a laptop stand or folding table leg

### What it is

- **plain_name**: A hinge that clicks and stays put at one or more set angles, such as a cabinet door that clicks open at 90° or a sofa headrest that clicks up a notch at a time
- **term**: Detent hinge (positioning hinge)
- **aliases**: 
  - click hinge
  - position hinge / positioning hinge (Southco's category name, which also covers friction hinges)
  - hinge with indexing function (Elesa+Ganter)
  - ratchet hinge / ratchet fitting (furniture: sofa headrests, armrests, backrests)
  - adjustable hinge fitting (reclining chairs and folding stands; patent US3232136)
  - angle-adjustable hinge (patent EP2389839)
  - bistable hinge (a detent variant with a spring that drives the door to its open or closed position; Southco)
  - locking hinge (maker name, often for a hinge that locks at one angle)
  - click hinge or locking hinge plate (LEGO (brand) hinge plates that click through set positions)
- **family**: indexing & detents
- **other_families**: hinges & pivots, one-way & ratchet, compliant mechanisms & flexures
- **one_liner**: A hinge with a built-in click mechanism (a spring pressing a ball, wedge, tooth or springy arm into notches, or a pawl in a toothed segment) that holds a lid, door, leg or backrest at preset angles until it is pushed firmly on.
- **complexity**: A small assembly that acts as one unit: two hinge leaves joined by a pin or knuckle, plus a detent inside the knuckle. Common detents: a spring pushing a ball, roller, wedge or toothed part into notches (Elesa: 'an applied force from the internal spring'); a steel detent tube (Southco C6); spring wires pushing toothed floating wedges against gear teeth (patent EP2389839); or a pawl and toothed segment (furniture ratchet fittings). Printed versions: two leaves plus a flexible (TPU) toothed ring or a springy printed arm (Printables 'Clicking Hinge').
- **how_it_works**: Two main kinds exist. In a click-stop detent hinge, a spring presses something (a ball, roller, wedge, toothed ring or springy arm) against notches that turn with the other leaf; at each preset angle it drops into a notch and holds the door there, and pushing the door firmly bends or compresses the spring so it rides out and on to the next notch, in either direction (Southco: 'opens and locks into place at a pre-set angle, usually with a distinctive click'; Elesa). In a ratchet-fitting hinge (sofas, headrests, reclining chairs), a pawl clicks over teeth as you raise the part so it holds at each step and can't fold back down; to lower it you move it all the way past the last step, where a projection knocks the pawl out of the teeth and a spring holds it clear, so the part can swing freely back to its starting position (Lear headrest patent US5236245A; US3232136 describes a similar release at the end of travel). A bistable variant uses a spring that pushes the door to one of two end positions (Southco).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): it is still a hinge that swings
  - click into set positions: holds the lid, door or backrest at preset angles
  - stop it moving back (one-way): ratchet-fitting types hold against folding back down until they are reset at the end of travel
- **motion**: rotate, usually within about 180° (e.g. Southco C6/G6 detent hinges: 180° range of motion with detents at 80°, 115°, 150° or 120° and 170°; Elesa: detents at -90°, 0°, +70° and +115°)
- **degrees_of_freedom**: 1: rotation about the hinge pin
- **special_behaviour**: 
  - indexing (clicks into set positions): holds at preset angles with a click you can feel
  - one-way (moves freely one way, locks the other): ratchet-fitting hinges click up but won't fold down until reset (US5236245A)
  - over-centre (snaps past a point and stays): bistable hinges drive the door to a preset open or closed position by themselves (Southco)
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): click-stop types; the holding torque is set by the spring and notch shape
  - shape (the parts interlock; form-fit): ratchet-fitting types, where the pawl's locking face sits against a tooth
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: screwed, bolted or riveted to the two parts like an ordinary hinge (rivets make it semi-permanent)
- **reuse_cycles**: many times: can be unscrewed and refitted; commercial detent hinges are tested for tens of thousands of open-close cycles, e.g. more than 20,000 (Elesa) and up to 20,000 (Southco C6/G6)
- **tools_needed**: screwdriver or hex key (or a rivet tool); none to operate
- **seal**: none
- **load**: light to medium: the hinge pin carries the door's weight well, but the detent only resists a small turning force; e.g. 0.70 Nm forward and reverse detent torque for a Southco C6-227 and around 3 Nm for Elesa detent hinges. *(unverified parts omitted)*
- **adjustable**: Only between the built-in positions: the detent angles are fixed by the design (e.g. 80°, 115°, 150° or 120° and 170° in Southco's C6 range). Holding strength is chosen when buying (Southco offers three positioning torque ratings in the C6 series; printed designs can swap a softer or harder detent ring, Printables 'Clicking Hinge').
- **access_needed**: one side only (blind) when the leaves are screwed into thick parts; both sides when bolts and nuts go through thin panels
- **materials**: Technopolymer (glass-filled nylon), zinc die-cast and stainless steel (Elesa); acetal copolymer leaves with a stainless steel detent tube, polyamide and zinc alloy (Southco); zinc-plated steel for furniture ratchet hinges (redesignstore). Printed versions: PLA or PETG leaves with a TPU (flexible) detent gear (Printables 'Clicking Hinge').
- **maker_difficulty**: easy to moderate: easy to buy and screw on, or to print a small clicking hinge with a flexible insert; moderate to make one that holds a heavy lid firmly for many cycles

### Making it

- **processes**: 
  - off-the-shelf part: detent hinges, positioning hinges and ratchet fittings in plastic, zinc and steel
  - 3D print (FDM): small clicking hinges for boxes, stands and enclosures, often with a TPU detent insert
  - woodwork: fitting bought detent or ratchet hinges to cabinets, lids and furniture
  - sheet metal: stamped steel ratchet fittings for furniture *(unverified parts omitted)*
- **print_in_place**: partly: several printed designs need assembly, e.g. BaGooN's 'Clicking Hinge' (Printables) has a separately printed flexible TPU inner gear that is snapped into a two-part case; some print-in-place hinges lock at a single angle by sliding along their axis (chandler's 'Locking Hinge 90' and 'Locking Hinge 180', Printables), which is a lock rather than a multi-click detent.
- **making_tips_3d_printing**: 1) Easiest printable detent: make the detent part flexible. BaGooN's clicking hinge prints its toothed inner gear in TPU and the leaves in PLA or PETG at 0.3 mm layers, 2 perimeters and 15% infill with no supports, and offers a harder gear for stronger holding (Printables 'Clicking Hinge'). 2) Or use a springy printed arm pressing on a notched ring inside the knuckle (a compliant detent); lay the arm flat on the bed, fillet its root to at least half its thickness and avoid building it vertically in Z (Protolabs/Hubs snap-fit guide). 3) Make the arm or spring sit relaxed (unbent) at each detent position, because plastic springs held bent creep and relax (DuPont design guide, pp. 36 and 47) and PLA creeps most (thrinter test); otherwise the hinge will slowly lose its hold. 4) Work out the turning load the detent must resist: the lid's weight times the sideways distance from the hinge pin to its centre of gravity; a light but long lid can need as much holding as a heavy short one (Southco). 5) Print the leaves flat with the knuckle axis horizontal so the knuckle's layers aren't split by bending loads (layer adhesion is roughly half the in-plane strength; 6) For print-in-place pins, keep at least about 0.3 mm clearance (Prusa) to 0.5 mm (Protolabs/Hubs FDM) between moving surfaces; the first movements may be stiff and loosen with use (chandler, Printables 'Locking Hinge 90'). 7) PETG is a good all-round choice for leaves (used by several of these designs); PLA softens from about 60 °C (CNC Kitchen), so avoid it for hinges in cars or sunny windows. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'detent hinge', 'positioning hinge', 'hinge with detent', 'hinge with indexing function', 'bistable hinge', 'ratchet hinge' or 'ratchet fitting' (sofa or headrest hinge, lift-up support), 'adjustable angle hinge', 'friction hinge' or 'torque hinge' (holds at any angle instead), 'lid stay'. Makers: Southco C6/G6 series (brand), Elesa CFA-F and Elesa+Ganter detent hinges (brand); CAD models of detent plastic hinges on TraceParts (via Printables).
- **rules_of_thumb**: 
  - Choose a detent hinge for preset angles with a click, a constant-torque (friction) hinge for any angle, and a free-swinging hinge only for panels light enough to fall open under gravity (Southco 'How to Improve Function with Torque Hinges').
  - Detent hinges are usually set at 90° for cabinet doors and access panels (Southco).
  - Typical commercial holding torque per hinge: about 0.70 Nm (Southco C6-227) to about 3 Nm (Elesa); tested for more than 20,000 cycles (Elesa) or up to 20,000 (Southco C6/G6).
  - The load the detent must hold depends on the lid's weight and how far its centre of gravity is from the hinge axis: a light lid with a far centre of gravity can feel like a heavier lid with a near one (Southco 'How to Select the Right Level of Torque').
  - Southco C6/G6 detent hinges are rated from -40 °C to 80 °C (Southco product page).
  - Plastic springs used continuously under load creep and relax; springs under constant load should be steel (DuPont, p. 36).

### When to use it

- **everyday_examples**: 
  - Sofa headrests, armrests and footrests that click through several angles (angle-adjustable sofa hinge, patent EP2389839), and seat headrests that click forward in steps and release when tilted fully forward (Lear patent US5236245A)
  - Reclining chairs and folding stands with a backrest that clicks to set angles (US3232136)
  - Cabinet doors, machine covers and access panels that click open and stay at 90° (Southco; Elesa) *(unverified parts omitted)*
- **when_to_use**: Use a detent hinge when a lid, door, flap, leg or backrest should stop and stay at one or a few known angles without a separate stay or catch, and when a click that tells the user 'this is the right position' is helpful: equipment covers opened for service, display stands, folding supports, adjustable headrests and backrests. It is quicker than tightening a knob and more repeatable than a friction hinge. For 3D-printed boxes and stands, a detent hinge with a flexible insert or springy arm adds positions without metal parts.
- **when_not_to_use**: Avoid it when the user needs any angle in between (use a friction or torque hinge), when the lid is heavy or long, because the detent may be overcome and the lid drop (use a counterbalance hinge, gas strut or lid stay), when the position must be locked against being knocked (use an indexing plunger through the hinge or a locking brace), or when you need fine, play-free angle steps under load (use a Hirth joint clamped by a bolt). For a single end position that must hold firmly, a latch or over-centre lock is better.
- **environment_limits**: Southco's C6/G6 detent hinges are rated for -40 °C to 80 °C. Printed PLA leaves soften from about 60 °C (CNC Kitchen), and plastic springs or detent arms kept under load creep and lose their hold (DuPont; thrinter). Stainless steel and technopolymer versions suit wet, food and pharmaceutical settings (Elesa). *(unverified parts omitted)*
- **safety_notes**: Hinges are pinch points, especially ratchet fittings with teeth and moving pawls. On reclining furniture the reset action matters: early backrests could collapse under a seated person, which the ratchet fitting in US3232136 was designed to prevent. Moving a ratchet-fitted headrest to the end of its travel releases the pawl, so it will then swing freely back (US5236245A). *(unverified parts omitted)*
- **common_failures**: The lid is too heavy or too long for the hinge's holding torque, so it won't stay open (Southco's centre-of-gravity point). The flexible TPU insert wears or is too soft, fixed by printing a harder version (Printables 'Clicking Hinge'). A ratchet fitting doesn't reset, or releases unexpectedly at the top of its travel (US5236245A). Avoid these by checking the torque needed, using two hinges or a stay for big lids, letting springs rest unloaded in each position, and choosing tough materials. *(unverified parts omitted)*
- **related**: 
  - Friction hinge (torque hinge): holds at any angle by friction, with no clicks
  - Ratchet and pawl: the one-way toothed mechanism inside ratchet-fitting hinges
  - Compliant detent: a springy arm clicking into notches, which can be built into a printed hinge
  - Ball detent (spring plunger): a spring-loaded ball in dimples, a common detent inside hinges and levers
  - Indexing plunger: a pull-knob pin through holes in the hinge knuckle locks positions far more firmly
  - Hirth joint: toothed faces clamped by a bolt, for many fine, firmly locked angles
  - Bistable compliant mechanism: a one-piece flexure that snaps to one of two stable positions
  - Print-in-place hinge: a plain printed hinge with no holding positions
  - Folding-blade lock (slip joint): a spring bar gives a pocket-knife blade detent positions at open and closed
  - Clevis joint with thumbscrew: holds any angle by clamping, as on action-camera mounts

### Pictures, videos and models

- **links**: 
  - [C6 / G6 Detent Hinges (Southco)](https://southco.com/en_us_int/hinges/positioning-hinges/c6-g6-detent-hinges): Product photos and drawings of plastic and stainless detent hinges with detent angles of 80°, 115°, 150° and 120°/170° *(licence: link only)*
  - [Friction and detent hinges (Elesa)](https://www.elesa.com/en/elesab2bstoreuk/friction-and-detent-hinges): Photos of technopolymer, zinc and stainless detent and friction hinges; describes four detent positions (-90°, 0°, +70°, +115°) *(licence: link only)*
  - [EP2389839A1 Angle-adjustable hinge (Koyo Giken, Google Patents)](https://patents.google.com/patent/EP2389839): Patent drawings of a sofa hinge in which spring wires push toothed wedges against gear teeth to give click-stop angles *(licence: link only)*
  - [Spring toggle mechanism 6b (YouTube, Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=VftCJ6mScNQ): CAD animation of a spring indexing device that snaps a pivoting lever into three positions and holds it there, the principle of a click-stop hinge *(licence: link only (standard YouTube licence))* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Clicking Hinge (BaGooN, Printables)](https://www.printables.com/model/180362-clicking-hinge): A snap-together hinge that clicks and holds its angle, using a toothed inner gear printed in flexible TPU (soft or hard version) inside a PLA or PETG case. Details read through the Printables public API because the web page blocks automated access. *(licence: CC BY)*
  - [Locking Hinge 90 - Scharnier mit 90° Fixierung (chandler, Printables)](https://www.printables.com/model/1111666-locking-hinge-90-scharnier-mit-90deg-fixierung): A print-in-place PETG hinge that locks a door at 90° when slid sideways along its axis (a 180° version also exists, model 1751227); a single-position lock rather than a multi-click detent. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Detent plastic hinges (TraceParts, Printables)](https://www.printables.com/model/201486-detent-plastic-hinges): CAD/STL models of commercial detent plastic hinges, useful for sizing a bought hinge into a design. Read through the Printables public API. *(licence: CC BY)*
  - [Lego Compatible (60471.dat) Hinge Plate 1 x 2 Locking 9-Position with Dual Finger on Side (thall72, Printables)](https://www.printables.com/model/923826-lego-compatible-60471dat-hinge-plate-1-x-2-locking): A printable copy of a toy click hinge that steps through set positions. Read through the Printables public API. *(licence: CC0 / public domain (Printables: Creative Commons Public Domain))*
- **diagram_idea**: Side view of a lid on a hinge with a cut-away knuckle: a spring-loaded ball (or springy arm) sitting in one of three notches marked 0°, 90° and 120°; a second panel shows a furniture ratchet fitting, with the pawl clicking up the teeth and being knocked clear at the top so the backrest folds down.
- **sources**: 
  - https://southco.com/en_us_int/resources/Key-Decision-Points-in-Hinge-Hardware-for-Design-Engineers
  - https://southco.com/en_us_int/resources/Determining-the-Right-Level-of-Torque-When-Specifying-Hinges
  - https://southco.com/en_us_int/hinges/positioning-hinges/c6-g6-detent-hinges
  - https://southco.com/en_us_int/c6-227
  - https://southco.com/en_any_int/hinges/positioning-hinges
  - https://www.elesa.com/en/elesab2bstoreca/friction-and-detent-hinges-us--1
  - https://www.elesa.com/en/elesab2bstoreuk/friction-and-detent-hinges
  - https://www.elesa-ganter.com/en/www/hinges-with-indexing-function
  - https://patents.google.com/patent/US5236245A/en
  - https://patents.google.com/patent/US3232136
  - https://patents.google.com/patent/EP2389839
  - https://redesignstore.com/products/adjustable-steel-ratchet-hinge
  - https://www.youtube.com/watch?v=VftCJ6mScNQ
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/180362-clicking-hinge
  - https://www.printables.com/model/1111666-locking-hinge-90-scharnier-mit-90deg-fixierung
  - https://www.printables.com/model/1751227-locking-hinge-180-scharnier-mit-180deg-fixierung
  - https://www.printables.com/model/201486-detent-plastic-hinges
  - https://www.printables.com/model/923826-lego-compatible-60471dat-hinge-plate-1-x-2-locking
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.cnckitchen.com/blog/stop-printing-flat-the-45-secret-for-stronger-parts
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135

### Other info

- **Fields with unverified parts:** common_failures, environment_limits, everyday_examples, links, load, making_tips_3d_printing, play_and_precision, processes, safety_notes

## 34 Hirth joint (face-spline coupling)

*indexing & detents.* Two faces with radial teeth that mesh to lock parts at a chosen angle; loosen, turn to the next tooth, tighten (adjustable arms, camera mounts)

*Also covers:* Also covers the ARRI rosette used on film and camera accessories

### What it is

- **plain_name**: Two discs with a ring of pointed teeth on their faces that mesh together; loosen the middle screw, turn to the next tooth, tighten, and it locks solid at that angle
- **term**: Hirth joint (Hirth coupling, Hirth serration; a type of face spline)
- **aliases**: 
  - Hirth coupling
  - Hirth serration / Hirth serration ring
  - Hirth ring
  - face spline (the name used by the BOSL2 OpenSCAD library)
  - face-tooth coupling / frontal-teeth coupling
  - rosette (film, camera and lighting trade name for the toothed disc)
  - ARRI rosette (ARRI (brand) standard: 31.8 mm, 60 teeth, M6 screw)
  - Manfrotto rosette (Manfrotto (brand) tripod and light-stand version)
  - serrated discs (the toothed knuckle of a C-stand grip head or gobo head)
  - angle adjustment discs (maker term)
  - Curvic coupling (close relative with curved teeth)
  - Hirth-Verzahnung / Hirth-Gelenk (German)
- **family**: indexing & detents
- **other_families**: clutches & couplings, locating & alignment, hinges & pivots
- **one_liner**: Two parts with matching rings of V-shaped teeth on their end faces are clamped together by a central screw, so they lock at any of a fixed set of angles with no play, and can be loosened, turned by a tooth or more, and locked again.
- **complexity**: A few parts: two toothed discs or rings (on the ends of the two parts being joined; for the common symmetric tooth shape the two halves are identical), one central clamping screw or bolt (a thumbscrew, knob, T-handle or ordinary bolt) and a threaded hole, nut or threaded insert for it. Camera and lighting versions often add a spring and a push button so the halves pop apart for adjusting.
- **how_it_works**: Each face carries a ring of straight, V-shaped teeth that all point at the centre, like the spokes of a wheel. When a screw pulls the two faces together, the sloping sides of the teeth (tapered flanks) wedge into each other, which removes all play (zero backlash) and pulls the two parts onto the same centre (self-centring). Because the flanks slope, any turning force also tries to push the halves apart, so the clamping force of the screw is what keeps the teeth seated. To change the angle, you loosen the screw until the teeth clear each other, turn to the next tooth (each tooth is 360 degrees divided by the number of teeth), and tighten again.

### Finder attributes

- **job**: 
  - click into set positions: it locks at any of n fixed angles (for example 60 positions, 6 degrees apart, on an ARRI rosette)
  - lock, and release by hand: tighten the screw or knob to lock, loosen it to adjust
  - join and hold: industrial Hirth rings join shafts, discs, rotors and crankshaft sections so they turn as one
  - line parts up exactly: the tapered teeth centre the two parts on each other and return to the same position every time
- **motion**: rotate (for adjusting only): when loosened, one half can be turned through a full 360 degrees in steps of 360 degrees divided by the number of teeth; once tightened there is no motion at all
- **degrees_of_freedom**: 0 when clamped (the teeth and screw lock every direction); when loosened and lifted apart it has 1 useful freedom, turning about the screw, but only in whole-tooth steps
- **special_behaviour**: 
  - indexing (clicks into set positions): it can only lock at whole-tooth angles, so a setting is easy to find again and cannot slowly creep round under load the way a plain friction clamp can
  - self-aligning or self-centring: the tapered teeth pull the two parts onto the same centre, which is why turbine and machine-tool makers use it (Wikipedia; Voith)
  - hand-release only (locks under load, releases when a person operates it): it holds any load its teeth and screw can take until someone loosens the screw or presses the release button
  - quick-release: camera 'push-button rosettes' replace the thumbscrew with a button, so you press, turn the grip and let go, one-handed (CineD on Wooden Camera (brand))
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the teeth interlock, so turning force is carried by tooth contact, not by friction
  - friction or clamping (force-fit): the screw's clamping force keeps the teeth pressed into mesh; without it the sloping teeth would ramp apart under torque
- **input_output**: When used as a shaft coupling: rotation in -> the same rotation out (1:1, rigid, shafts in line), with no play (zero backlash). Nothing slides once it is clamped, so it wastes essentially no power. Back-drivable: yes, it is a rigid connection that passes turning force both ways. When used as an adjustable joint on an arm or mount it does not pass motion on at all; it just holds an angle.
- **power**: passive (no power needed): held by the screw's clamping force; nothing changes if any powered equipment on it loses power
- **removability**: removable: loosen the screw and the halves separate; camera and lighting versions with thumbscrews, knobs or push buttons are adjusted and removed without tools (tool-free), while industrial couplings use bolts
- **reuse_cycles**: many times: Voith describes Hirth serrations as easily detachable and wear-free; grip heads on rental film equipment use deep serrations so they keep gripping after years of re-tightening (Matthews Studio Equipment). Plastic (3D-printed) teeth wear and round over sooner.
- **tools_needed**: None for thumbscrew, knob or push-button versions (camera rosettes, grip heads); a hex key or spanner for bolted versions. For 3D-printed versions, a screw or bolt with a nut or heat-set threaded insert.
- **seal**: none: the teeth leave open gaps between them; it does not seal anything
- **load**: Heavy for its size in twisting (torque), because every tooth around the ring shares the load and capacity grows with diameter; Voith's standard rings are rated up to 15,000 kNm. Also stiff against bending and side loads. It is weak in pull-apart (axial) direction: only the screw holds the halves together, and torque itself pushes them apart, so an under-tightened joint slips. 3D-printed versions are light to medium duty, limited by the plastic teeth and how much the screw can clamp without crushing or creeping the plastic.
- **adjustable**: Yes, in fixed steps: loosen, turn by one or more teeth, retighten. Step size = 360 degrees / number of teeth (60 teeth gives 6 degrees; Joe Federer's 31-ridge printed disc gives about 11.6 degrees). More teeth give finer steps but smaller, weaker teeth.
- **play_and_precision**: No play once clamped (zero backlash), because the tapered teeth wedge together (Wikipedia). Very repeatable: precision industrial rings index to 1-2 seconds of arc with repeat accuracy under 0.001 mm (Voith). It tolerates almost no misalignment by design: the teeth force the two parts onto one centre and one angle. Friction matters: Croccolo et al. traced a machine tool that lost its positioning accuracy to friction between the teeth, and showed that if friction rises too high (wear, rust) the joint stops centring itself. A printed joint with slightly wrong tooth geometry rocks instead of seating flat (lendres, Printables).
- **access_needed**: one side only (blind): a thumbscrew or bolt through one half screws into a threaded hole or insert in the other (ARRI rosettes have an M6 female thread), so after the threaded half is mounted you only need to reach the screw side
- **materials**: Industrial rings: alloyed steels (Cr-Ni and Cr-Mo) or carbon steel, often case-hardened and ground (Croccolo et al.); camera rosettes: stainless steel and aluminium (Kupo; Wooden Camera). Printed: PETG or PLA for indoor mounts (Joe Federer prints in PETG and says PLA is fine); a heat-resistant material such as carbon-fibre nylon for hot studio lights (diystrument). Works between any two rigid parts that can carry a toothed face and a clamping screw.
- **maker_difficulty**: easy to moderate: free generators (BOSL2 hirth(), mechadense's OpenSCAD library, lendres's Fusion 360/SolidWorks files) make the tricky tooth geometry for you and it prints without supports teeth-up, but the teeth must be geometrically correct and the screw needs a strong thread (nut or insert) to clamp hard enough

### Making it

- **processes**: 
  - 3D print (FDM): very common for maker mounts, arms and camera or light brackets
  - CNC: industrial teeth are milled and then ground in matched pairs (KAPP NILES grinding video); a hobby CNC can mill them
  - off-the-shelf part: ARRI-standard rosettes, rosette handles and arms, C-stand grip heads, Voith Hirth serration rings *(unverified parts omitted)*
- **print_in_place**: no: the two toothed halves are printed as separate parts and joined by a screw; they have to be able to lift apart to re-index, so printing them already meshed defeats the purpose
- **making_tips_3d_printing**: 1) Generate the teeth, don't draw them by eye: BOSL2 hirth(n, id, od, tooth_angle) makes identical mating halves (same tooth count needed; if you cone the teeth, use opposite cone angles on the two halves), and mechadense's OpenSCAD library and lendres's parametric Fusion 360/SolidWorks files do the same. lendres warns that many Hirth models online are geometrically wrong, so the mating faces are not parallel and the joint rocks; mechadense notes the trick is to build the teeth so they radiate from the centre (spherical rather than cylindrical coordinates). 2) Chamfer or round the tooth tips: BOSL2 chamfers the valleys by half as much as the tips so there is room for the parts to seat, which also hides small printing errors. 4) Tooth count: more teeth give finer steps but smaller teeth; 5) Clamping: use a metal bolt with a nut, captive nut or heat-set insert, not a thread printed in plastic; diystrument's studio-light replacement swaps the original plastic pins, which fatigued and broke especially when over-tightened, for M5 countersunk screws, and warns that any screw head sticking out stops the joint seating. 6) Heat: PLA softens and deforms above about 60 °C (Prusa); diystrument recommends a filament with a heat deflection temperature of at least 70 °C near studio lights. 8) PETG works well (Joe Federer); PLA is fine for light indoor use. *(unverified parts omitted)*
- **off_the_shelf_parts**: ARRI-standard rosette parts (ARRI (brand) standard: 31.8 mm diameter, 60 teeth, M6 female thread): bolt-on rosettes (e.g. with 3/8"-16 or M6 fixing and ARRI-standard locating pins), rosette handles, rosette extension arms, rosette brackets and push-button rosettes (sold by Kupo, SmallRig, Wooden Camera and others (brands)); Manfrotto (brand) rosette fittings; C-stand grip heads (gobo heads) with serrated discs and a T-handle; industrial Hirth serration rings, 24-720 teeth, 50-900 mm diameter (Voith (brand)); thumbscrews, wing knobs and T-handles in M6, 1/4"-20 or 3/8"-16; heat-set threaded inserts; spring washers.
- **rules_of_thumb**: 
  - Step angle = 360 degrees / number of teeth; the ARRI rosette has 60 teeth, so it locks every 6 degrees, on a 31.8 mm disc with an M6 thread (Kupo product page).
  - Tooth profile angle is 60 or 90 degrees (Wikipedia 'Hirth joint'); Croccolo et al. (2018) treat it as fixed at 60 degrees for Hirth rings.
  - Torque pushes the halves apart: with 60-degree teeth, the axial separating force is about tan 30 degrees = 0.58 times the tangential tooth force (Fa = Fu x tan(pi/6), friction ignored, where Fu = torque / mean tooth radius), so the bolt must clamp harder than that (Croccolo et al. 2018, Actuators 7:79, CC BY 4.0).
  - Put the teeth on a ring at the largest diameter available and leave the centre untoothed, because torque capacity grows with diameter (Wikipedia 'Hirth joint').
  - Nominal bending stress allowed in steel teeth (Matzke, quoted by Croccolo et al.): 90 MPa for carbon steel with no shocks, 50 MPa with shocks, 35 MPa with shocks plus torsional vibration; tooth root radius over 0.3 mm.
  - Both halves need the same tooth count; symmetric teeth are best for registration and loads in either direction, and coned teeth need opposite cone angles on the two halves (BOSL2 hirth() documentation).
  - There is no ISO, DIN or AGMA standard for Hirth rings; they are designed and made as mating pairs (Croccolo et al. 2018; Wikipedia).
  - Industrial reference points: 24-720 teeth, 50-900 mm diameter, indexing accuracy 1-2 seconds of arc, repeat accuracy under 0.001 mm (Voith Hirth serrations page).
  - Hang the load so its weight tightens the clamp handle, not loosens it: 'handle on the right, load on the right' for a grip head (Matthews Studio Equipment).

### When to use it

- **everyday_examples**: 
  - Film and video camera handles and extension arms that lock onto an ARRI rosette, a toothed disc with a thumbscrew in the middle
  - The toothed knuckle (grip head) on top of a C-stand light stand, locked with a T-handle
  - Tilting yokes on studio lights, which use a rosette (Hirth) joint to hold the lamp's angle
  - Some bicycle cranksets, whose parts are joined by a Hirth joint (Campagnolo Ultra-Torque (brand); Specialized S-Works (brand) mountain-bike cranks)
- **when_to_use**: Use it for any adjustable arm, bracket or mount that must hold its angle firmly under load, where set steps are fine and you want to find the same setting again: camera and phone mounts, light and monitor arms, sensor or webcam brackets, tripod and tool attachments, folding stands, or rotating fixtures on a workbench. It is also a strong, play-free way to join two shaft pieces or a hub to a shaft that must come apart for servicing, and to make a rotating table lock precisely at fixed positions.
- **when_not_to_use**: Avoid it when you need any angle, not steps (use a friction clamp, a lockable ball head or a clamping hub), when the joint must move freely while in use (use a hinge or bearing), or when you need quick snap-to-position clicks without a screw (use a ball detent or detent hinge). Don't rely on it where a person can't retighten it and it could loosen through vibration without a locking method; add a thread-locking screw or spring. For a one-way ratchet feel use a face ratchet, and for drive that engages and disengages while running use a dog clutch.
- **environment_limits**: Heat: PLA softens and deforms above about 60 °C (Prusa), so use PETG, ASA or nylon near lamps and in cars; diystrument recommends a heat deflection temperature of at least 70 °C for studio lights. Plastic under a constant clamping force slowly creeps and loses some clamp (in Thrinter's test none of the printed clips fully recovered their shape after a day under stress), so printed joints may need retightening. Rust, dirt and wear raise the friction between the teeth, which stops them centring properly (Croccolo et al.). Vibration: if the clamp is loose the teeth can rub and wear (fretting); Wikipedia notes tightness can be restored by retightening. Water, UV and chemicals: no limits beyond those of the material used.
- **safety_notes**: A joint that is not fully tightened, or has worn teeth or a stripped thread, can let go suddenly and drop what it holds; film-set grip heads that slip can swing a flag onto an actor (Matthews Studio Equipment). *(unverified parts omitted)*
- **common_failures**: 1) Slipping or jumping a tooth under load because the screw is too loose, the teeth are worn, or the thread is stripped (Matthews Studio Equipment): tighten fully, replace worn parts, use metal threads or inserts. 2) Rocking or not seating flat because the printed tooth geometry is wrong (lendres): generate teeth with a proper tool. 4) Printed pins or thin sections breaking from fatigue, especially when over-tightened (diystrument): use metal fasteners and thicker walls. 5) Plastic creep or heat softening loosening the clamp: choose a heat-resistant material and retighten. 6) Loss of centring accuracy from high friction caused by wear or rust (Croccolo et al.). 7) Mismatched halves (different tooth counts or cone angles) that never mesh (BOSL2). *(unverified parts omitted)*
- **related**: 
  - Face ratchet (star ratchet): also teeth on the end faces, but saw-shaped so it turns one way and clicks over the other; a Hirth joint's symmetric teeth lock both ways
  - Dog clutch (claw clutch): a few chunky face teeth with gaps, meant to engage and disengage drive; it has play, while a clamped Hirth joint has none
  - Curvic coupling: the same idea with curved teeth, used in high-speed turbines (Wikipedia)
  - Spline shaft and servo spline hub: the teeth are on the side of a shaft instead of its end face, so parts can slide along it but there is usually a little clearance
  - Indexing plunger (pull-knob index pin): a single pin dropping into a ring of holes; fewer positions and some play, but no screw to undo
  - Ball detent or detent hinge: clicks into positions but can be forced past them, so it does not lock
  - Lockable ball head (ball-and-socket joint): holds any angle in several directions by friction, but can slip under heavy load
  - Kinematic coupling (balls in V-grooves): also returns to exactly the same position when refitted, but uses only three contact points and is not for torque

### Pictures, videos and models

- **links**: 
  - [Hirth Verzahnungsringe.JPG (Wikimedia Commons, by Pfedelbacher)](https://commons.wikimedia.org/wiki/File:Hirth_Verzahnungsringe.JPG): Photo of a pair of Hirth coupling rings showing how the radial teeth mesh *(licence: Copyrighted free use (any use, including commercial, with no conditions))*
  - [Hirth joint.jpg (Wikimedia Commons, by AndrewDressel)](https://commons.wikimedia.org/wiki/File:Hirth_joint.jpg): Photo of the Hirth joint in the middle of a taken-apart bicycle crankset (Campagnolo Ultra-Torque (brand)) *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [Tete revolver ETR36 mecanisme 3d.svg (Wikimedia Commons, by Cdang)](https://commons.wikimedia.org/wiki/File:Tete_revolver_ETR36_mecanisme_3d.svg): Cutaway diagram of a CNC machine-tool turret head, which uses a Hirth coupling to lock each tool position *(licence: Public domain)*
  - [How to design a perfectly-meshing Hirth joint/coupling (That can actually be manufactured!) (Project Hydra, YouTube)](https://www.youtube.com/watch?v=tbBrf8WJM5o): CAD walkthrough of correct Hirth tooth geometry, with the meshing teeth shown *(licence: link only (standard YouTube licence))*
  - [ZE / ZP - grinding a Hirth coupling (EN) (KAPP NILES, YouTube)](https://www.youtube.com/watch?v=Ln_RCAz2qmY): Industrial grinding of Hirth coupling teeth, showing the real part up close *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [BOSL2 joiners.scad: hirth() module (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad): Parametric Hirth face spline generator: tooth count, inner and outer diameter, tooth angle, cone angle, skew, chamfer or rounding, base and cropping; both halves are identical *(licence: BSD 2-Clause)*
  - [scad-lib-hirthjoints (mechadense, OpenSCAD library), also on Printables as 'OpenSCAD Hirth Joints'](https://raw.githubusercontent.com/mechadense/scad-lib-hirthjoints/master/README.md): Minimal OpenSCAD library for geometrically correct flat or conical Hirth joints, with the half-tooth trick for printing teeth on the bottom without supports *(licence: LGPL-3.0 (per the Printables listing))*
  - [Hirth Joint with Source Files and Documentation (lendres, Printables)](https://www.printables.com/model/114737-hirth-joint-with-source-files-and-documentation): Geometrically correct Hirth joint with editable Fusion 360 and SolidWorks source files, documentation, a Manfrotto-rosette-compatible STL (25 mm, 25 teeth, 60 degrees) and a large demonstration joint *(licence: CC BY)*
  - [Hirth Disk - rotary lock (Joe Federer, Printables)](https://www.printables.com/model/1417161-hirth-disk-rotary-lock): 40 mm, 31-ridge printable locking disc with a 1/4-20 centre hole and screw holes for mounting; printed in PETG *(licence: CC BY)*
  - [Godox SL150 Rosette Hirth Joint Replacement (diystrument, Printables)](https://www.printables.com/model/1600591-godox-sl150-rosette-hirth-joint-replacement-studio): Replacement rosette for a studio light's tilt joint, with notes on heat-resistant filament, supports and swapping plastic pins for M5 screws *(licence: CC BY-NC)*
- **diagram_idea**: Two toothed discs shown apart and then pressed together by a centre screw, with arrows showing the sloping teeth wedging and centring; then a 'loosen, lift, turn one tooth (360/n degrees), tighten' sequence on an arm, with a small inset showing how torque tries to push the discs apart.
- **sources**: 
  - https://en.wikipedia.org/wiki/Hirth_joint
  - https://en.wikipedia.org/wiki/Curvic_coupling
  - https://commons.wikimedia.org/wiki/Category:Hirth_joints
  - https://commons.wikimedia.org/wiki/File:Hirth_Verzahnungsringe.JPG
  - https://commons.wikimedia.org/wiki/File:Hirth_joint.jpg
  - https://commons.wikimedia.org/wiki/File:Tete_revolver_ETR36_mecanisme_3d.svg
  - https://www.voith.com/corp-en/products-services/connection-components-couplings/hirth-serrations.html
  - https://pdfs.semanticscholar.org/0d6d/a308374fab7b707f9f2587c84987ca048b48.pdf
  - https://kupogrip.com/kupo-arri-rossette-bolt-on-mount-m6/
  - https://woodencamera.com/products/bolt-on-arri-rosette-3-8-16
  - https://www.cined.com/wooden-camera-push-button-arri-rosette-thumbscrew-required/
  - https://dslrvideoshooter.com/wooden-camera-rosette-gear-review/
  - https://www.msegrip.com/blogs/learn/grip-head-explained
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/joiners.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://raw.githubusercontent.com/mechadense/scad-lib-hirthjoints/master/README.md
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/114737-hirth-joint-with-source-files-and-documentation
  - https://www.printables.com/model/430589-openscad-hirth-joints
  - https://www.printables.com/model/1417161-hirth-disk-rotary-lock
  - https://www.printables.com/model/1600591-godox-sl150-rosette-hirth-joint-replacement-studio
  - https://www.printables.com/model/202276-hirth-joint-for-20x20-extrusions
  - https://www.youtube.com/watch?v=tbBrf8WJM5o
  - https://www.youtube.com/watch?v=Ln_RCAz2qmY
  - https://www.youtube.com/watch?v=jiHUEhja9V0
  - https://help.prusa3d.com/article/pla_2062
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/

### Other info

- **Fields with unverified parts:** common_failures, making_tips_3d_printing, processes, safety_notes

