---
title: Quick-return mechanism
description: A crank turning at steady speed drives a block that slides in a slotted lever, so the lever (and the tool slide,
  or ram, it pushes) moves slowly on the working stroke and returns quickly on the idle stroke, saving time on machines that
  only work in one direction.
num: 196
term: Quick-return mechanism (crank and slotted lever; Whitworth quick-return mechanism)
plain_name: A turning wheel with a pin that slides up and down in a slot of a swinging arm, so the arm pushes a tool forward
  slowly and pulls it back quickly
aliases:
- quick-return motion
- crank and slotted lever mechanism / crank and slotted link mechanism
- slotted-link mechanism; rocker arm (the slotted lever's name on shaping machines)
- shaper mechanism / shaping-machine drive
- Whitworth quick-return mechanism / Whitworth quick return motion (strictly the version whose slotted link turns right round;
  many web pages and printed models use the name for the crank and slotted lever as well)
- coulisse mechanism (the name used in Nguyen Duc Thang's animations and on DT Online)
- offset slider-crank quick return (a different linkage that also returns faster)
- schwingende Kurbelschleife (crank and slotted lever) / umlaufende Kurbelschleife (Whitworth type) (German)
- 转动导杆急回机构 (Chinese, 'rotating guide-bar quick-return mechanism', the Whitworth type); 曲柄导杆刨床机构 (Chinese, 'crank and guide-bar
  shaper mechanism')
family: motion conversion
other_families: ['sliding, telescoping & linear motion']
finder:
  job: [change the kind of motion, change speed or turning force]
  motion: multiple
  special_behaviour: [motion conversion]
  holding_principle: [not a holding joint]
  reuse_cycles: many times
  seal: none
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, woodwork]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [steady turning]
  motion_out: [back-and-forth turning, back-and-forth straight]
  shaft_layout: [parallel]
  overload_response: not applicable
  clicks: not applicable
  tools: [soldering iron, hand tools]
  load_max: heavy
  usual_process: 3D print (FDM)
  adjustable: 'yes'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [motion, input_output, load, play_and_precision, materials, processes, making_tips_3d_printing, rules_of_thumb,
  environment_limits, safety_notes, common_failures, make_it_yourself]
diagram_idea: A crank circle with the slotted lever drawn at its two extreme positions touching the circle, the crank arc
  shaded in two colours (long arc = slow working stroke, short arc = fast return), and a ram below with arrows of different
  lengths showing the slow push and fast return.
links:
- url: https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_1.gif
  title: Quick Return Mechanism 1.gif (Wikimedia Commons, by Arglin Kampling)
  shows: 'Animated quick-return linkage: the input crank (cyan) drives an output link (pink) that returns faster than it goes
    forward; the lead image of Wikipedia''s article'
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_2.gif
  title: Quick Return Mechanism 2.gif (Wikimedia Commons, by Arglin Kampling)
  shows: Animated quick-return linkage captioned on Wikipedia as one of Whitworth's quick return mechanisms
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Shaper.png
  title: Shaper.png (Wikimedia Commons)
  shows: Diagram of a shaping machine's crank and slotted-lever drive; Wikipedia notes the drive arm turns through a smaller
    angle on the return stroke
  license: CC BY-SA 3.0
- url: https://www.youtube.com/watch?v=5cb7D9pLcq4
  title: Shaper with Coulisse mechanism 2 (Nguyen Duc Thang, YouTube thang010146)
  shows: CAD animation of a shaping machine driven by a crank and slotted lever, working stroke slower than return
  license: link only (standard YouTube licence)
- url: https://www.youtube.com/watch?v=CCfre2TgeTk
  title: slow motion whitworth quick return mechanism (Narrow Minded Railworks, YouTube)
  shows: Slow-motion video of a small 3D-printed, motor-driven quick-return model (the video linked from AjaxJones' Printables
    model)
  license: link only (standard YouTube licence)
make_it_yourself:
- url: https://www.printables.com/model/358710-a-simple-3d-printed-whitworth-quick-return-mechani
  title: A Simple 3D Printed Whitworth Quick Return Mechanism (gzumwalt, Printables)
  what_it_is: Motorised printed demonstrator (N20 gear motor, about 15 rpm) whose arm swings about 14 degrees each way, faster
    one way than the other; printed at 0.15 mm, no supports, with assembly notes
  license: CC BY-NC-SA
- url: https://www.printables.com/model/202288-shaper-mechanism-quick-return-mechanism
  title: Shaper Mechanism (quick return mechanism) (Eng. Yehia, Printables)
  what_it_is: Simple shaper prototype for a first-year mechanical engineering course, driven by a continuous-rotation servo,
    with M4 screws and SolidWorks files
  license: CC BY
- url: https://www.printables.com/model/14205-whitworth-quick-return-mechanism
  title: Whitworth quick return mechanism (AjaxJones, Printables) (URL from Printables API, page not opened)
  what_it_is: Small gear-motor-driven model using a 3 mm bolt and 10 mm OD bearing on the connecting rod; video linked above
  license: CC BY
- url: https://www.printables.com/model/263307-whitworth-mechanism
  title: Whitworth mechanism (WayTooManyHobbies, Printables) (URL from Printables API, page not opened)
  what_it_is: Printable hand-operated model using nylon shoulder bolts and heat-set inserts, with a drawing and STEP file
  license: CC BY-NC-SA
- url: https://huangyan920.github.io/Mechanical/
  title: HUANGYAN920/Mechanical interactive mechanism animations
  what_it_is: Browser animations with adjustable crank radius and pivot positions, including a rotating guide-bar quick-return
    (Whitworth type), an offset quick-return and a shaper mechanism (labels mostly in Chinese)
  license: MIT (code)
- url: https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/
  title: Linkage mechanism designer and simulator (David Rector)
  what_it_is: Free Windows program for sketching and animating linkages with pivot and sliding connectors, so a crank, slotted
    lever and ram can be laid out and timed before printing
  license: 'free to download [uncertain: licence terms not checked]'
sources:
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
research: research/connection-types/results/Quickreturn_mechanism_Whitworth_crank_and_slotted_lever.json
---

A crank turning at steady speed drives a block that slides in a slotted lever, so the lever (and the tool slide, or ram, it pushes) moves slowly on the working stroke and returns quickly on the idle stroke, saving time on machines that only work in one direction.

**In plain words:** A turning wheel with a pin that slides up and down in a slot of a swinging arm, so the arm pushes a tool forward slowly and pulls it back quickly. **Proper term:** Quick-return mechanism (crank and slotted lever; Whitworth quick-return mechanism).

**Also called:** quick-return motion; crank and slotted lever mechanism / crank and slotted link mechanism; slotted-link mechanism; rocker arm (the slotted lever's name on shaping machines); shaper mechanism / shaping-machine drive; Whitworth quick-return mechanism / Whitworth quick return motion (strictly the version whose slotted link turns right round; many web pages and printed models use the name for the crank and slotted lever as well); coulisse mechanism (the name used in Nguyen Duc Thang's animations and on DT Online); offset slider-crank quick return (a different linkage that also returns faster); schwingende Kurbelschleife (crank and slotted lever) / umlaufende Kurbelschleife (Whitworth type) (German); 转动导杆急回机构 (Chinese, 'rotating guide-bar quick-return mechanism', the Whitworth type); 曲柄导杆刨床机构 (Chinese, 'crank and guide-bar shaper mechanism').

## How it works

The crank turns at a steady speed and its pin, fitted with a sliding block, runs up and down the slot in the lever while swinging it from side to side. The two ends of the lever's swing happen where the lever just touches the crank-pin circle (is tangent to it), and those two points split each crank turn into a long part and a short part: the long part (more than half a turn) gives the slow forward, working stroke and the short part gives the fast return stroke. A short link turns the lever's swing into straight back-and-forth motion of a ram. In the Whitworth type the crank is longer than the distance between the two fixed pivots, so the slotted link turns right round and a connecting rod drives the ram; the uneven timing comes from the same offset idea (IIT Kharagpur virtual lab; Wikipedia 'Slider-crank linkage', inversions).

## Parts

A small assembly of about five or six parts: a crank (on machines, a large 'bull gear' with a crank pin on an adjustable radial slide); a sliding block on the crank pin; a slotted lever (rocker arm) pivoted to the frame; a short link from the top of the lever to the ram; and the ram (the sliding tool carrier) running in guides. The Whitworth type adds a second crank-like arm because its slotted link turns right round.

## Everyday examples

- The metal shaping machine (shaper) in a school or model-engineering workshop, whose ram cuts slowly forward and snaps back (Wikipedia 'Shaper')
- Slotting machines (vertical shapers) and some power-driven saws (Wikipedia 'Quick return mechanism'; IIT Kharagpur)
- Screw presses and other machines listed by Wikipedia that only do work in one direction
- Printed desk models and classroom demonstrators of the 'Whitworth' mechanism on Printables

## When to use it

Use it when a motor turns steadily but the useful work happens in only one direction of a back-and-forth stroke: pushing a cutter, scraper, punch or pusher slowly and firmly, then pulling it back fast to save time. Examples for makers: a desktop shaper or scraper, a pusher or feeder that moves parts one way (Wikipedia lists cutting machines and package-moving devices as quick-return uses), an automaton that strikes slowly and returns fast, or a classroom model showing why a crank's timing can be uneven. It is simple, all-mechanical, needs no electronics or limit switches, and the stroke length can be made adjustable by moving the crank pin.

## When not to use it

Avoid it when you need the same speed in both directions (use a slider-crank or a Scotch yoke), a constant speed through the stroke or a pause at the ends (use a cam and follower), a long stroke or one that can stop anywhere and reverse on command (use a lead screw and nut, rack and pinion, belt or a linear actuator), or very quiet and play-free motion (the block sliding in the slot wears and rattles). For high forces with adjustable speed, modern shapers use hydraulic cylinders instead (Wikipedia 'Shaper'; The Engineers Post).

## Details

- **What it does (jobs):**
  - change the kind of motion: turns steady rotation into a back-and-forth swing or a back-and-forth straight stroke
  - change speed or turning force: the working stroke is slow and strong, the return stroke fast
- **Movement:** multiple: continuous rotation of the crank in; rocking of the slotted lever (typically well under 90 degrees of swing ⚑ [uncertain]; gzumwalt's printed model swings about 14 degrees each way) and straight back-and-forth sliding of the ram out
- **Directions it can move (degrees of freedom):** 1: the crank angle fixes the position of the block, lever and ram
- **Special behaviour:**
  - motion conversion (e.g. rotary to linear): steady rotation becomes back-and-forth motion whose forward stroke takes longer than its return stroke (quick return)
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it converts rotation into a back-and-forth stroke; the pin, block and slot stay together because they interlock (form-fit)
- **Input and output:** Continuous rotation -> back-and-forth (reciprocating) motion: a rocking lever, or a straight ram stroke when a link and slide are added. Time ratio (working time : return time) = crank angle during the working stroke / crank angle during the return stroke (IIT Kharagpur virtual lab); for the crank and slotted lever it is set by crank radius / distance between the fixed centres, e.g. 75 mm / 150 mm gives 240:120 degrees = 2:1 (ESE 2014 exam question on Testbook). Typical ratios are roughly 1.5:1 to 3:1 ⚑ [uncertain: HUANGYAN920's interactive model is set up for 2-3; no reference range from a design guide found]. Ram speed varies through each stroke (it is not a constant speed) ⚑ [uncertain: Wikipedia claims a constant cutting speed but that article is tagged for rewrite]. Efficiency: no reliable figure found ⚑ [uncertain]; losses come from the block sliding in the slot and the ram sliding in its guides. Shafts: the crank shaft and the lever pivot are parallel. Back-drivable: in principle yes (pushing the ram turns the crank) except at the two ends of the stroke, where the lever is tangent to the crank circle and the push goes straight through the crank (dead points) ⚑ [uncertain]; in practice it is always driven from the crank.
- **Power:** passive (no power needed): it is driven by a motor, line shaft or hand crank; if the drive stops, the ram simply stops where it is
- **Load:** Medium to heavy on metal shaping and slotting machines, where it pushes a cutting tool through metal; printed desktop models are light-duty demonstrators ⚑ [uncertain: no load ratings found]. The crank pin, sliding block, slot walls and lever pivot carry the full working force, and the ram needs its own guides because the linkage also pushes it sideways. Wikipedia warns that forcing the machine to its maximum stress capacity will break it.
- **Play and precision:** Small to noticeable play: clearance between the crank pin or block and the slot, at each pin joint and in the ram guides all add up ⚑ [uncertain]. The ends of the stroke repeat well because they are set by geometry, but the ram's speed changes throughout each stroke, so it is not used where steady speed or exact positioning matters. The crank shaft and lever pivot must be parallel and the ram guides lined up with the lever's motion; it tolerates little misalignment ⚑ [uncertain].
- **Taking it apart:** removable: the crank, lever, links and ram are held by pins, screws or shafts and can be taken apart
- **How often it can be reused:** many times: it can be dismantled and reassembled repeatedly; the limit is wear of the block, slot and pins, not the assembly
- **Sealing:** none: it is an open mechanism and does not seal anything
- **Adjustable:** Yes on shaping machines: moving the crank pin further out along the radial slide on the bull gear lengthens the stroke (ISRO 2022 exam question on Testbook; The Engineers Post describes the radial slide and sliding block). Because the timing depends on crank radius / centre distance, changing the crank radius also changes the time ratio (ESE formula). Printed models are usually fixed.
- **Access needed:** not applicable: it is a mechanism inside a frame, reached wherever the frame opens
- **Materials:** Machine tools use cast-iron frames and steel or iron cranks, levers and blocks ⚑ [uncertain: no materials list found]. Printed models use PLA for all links with metal screws, pins or shoulder bolts as pivots: AjaxJones used a 3 mm bolt and a 10 mm outside-diameter bearing; WayTooManyHobbies used nylon shoulder bolts and heat-set inserts; Eng. Yehia used M4 screws, washers and spacers.
- **Heat, cold, water and wear:** Printed PLA parts soften and deform above about 60 °C and degrade in UV light (Prusa PLA guide), so keep PLA models out of hot cars and sunny windows. Dust and grit in the slot and on the ram guide speed wear, and the sliding surfaces need occasional oil or grease ⚑ [uncertain: general practice; Eng. Yehia oils the ram rail]. The sudden reversals at each end of the stroke shake a light frame at speed ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): several free printable models (gzumwalt, Eng. Yehia, AjaxJones, WayTooManyHobbies)
  - laser cut: ⚑ [uncertain] the crank, lever and links are flat profiles that suit laser-cut acrylic or plywood, but no tested example was found
  - CNC: the traditional way for metal shaping machines
  - woodwork: ⚑ [uncertain] flat links and a slotted lever suit wooden automata and demonstration models, no tested example found
  - off-the-shelf part: bearings, shoulder bolts, dowel pins, a linear slide for the ram and a gear motor or servo
- **Printing it in one piece (print in place):** no: printed models are printed as separate flat parts and assembled with screws, printed axles or shoulder bolts; no print-in-place version was found
- **Tools:** Screwdriver or hex key (and spanner) for pivot screws or shoulder bolts; small files or sandpaper to smooth printed slots; a soldering iron for heat-set inserts in some printed models; a little oil or grease for the slot and ram guides
- **Difficulty:** easy to moderate: only a handful of flat parts that print without supports, but the slot must be smooth, the pivots parallel and the ram guide low-friction (gzumwalt calls his model a low-precision print that still needs trimming and filing)

### 3D printing tips

1) Print the crank, lever and links flat on the bed; gzumwalt printed all parts at 0.15 mm layers, 20% infill and no supports. 2) Leave clearance for moving parts: Prusa suggests starting with at least 0.3 mm for movable parts and adjusting after a test print. 3) Keep a sliding block on the crank pin rather than running a bare pin in the slot: German Wikipedia ('Kurbelschleife') notes wear is lower when the sliding block is kept; a small ball bearing on the pin (AjaxJones uses a 3 mm bolt and a 10 mm OD bearing) rolls instead of rubbing ⚑ [uncertain for a rolling bearing in a slot: it rolls on one wall at a time]. 4) Make the slot walls smooth: file off build-plate 'ooze' (elephant's foot) and any seams, and test-fit, trim, file and sand moving surfaces until they move freely (gzumwalt). 5) Use metal pivots: M3-M4 screws with washers and spacers (Eng. Yehia), nylon shoulder bolts in heat-set inserts (WayTooManyHobbies), or a small bearing (AjaxJones). 6) The ram guide (rail) needs lubrication: Eng. Yehia uses a little machining oil so the rail slides smoothly. 7) Drive it with a slow motor: gzumwalt uses an N20 60 rpm gear motor on 3 V geared 2:1, about 15 rpm; Eng. Yehia uses a continuous-rotation servo. 8) AjaxJones suggests counterweighting the main wheel to balance the heavy connecting rod pivot. 9) PLA is fine for demonstrators; keep it below about 60 °C (Prusa).

### Buying one (off-the-shelf parts)

Gear motor (e.g. 'N20 gear motor', 'TT gear motor') or continuous-rotation servo; ball bearings (e.g. 3 x 10 mm, flanged bearings); shoulder bolts (shoulder screws) or dowel pins as pivots; heat-set threaded inserts; a linear slide, linear guide rail or bushings on a rod for the ram (search 'miniature linear guide', 'linear bushing'); retaining rings (e-clips, circlips); washers and spacers. On old machine tools the parts are called bull gear, crank pin, sliding block, rocker arm and ram.

## Rules of thumb

- Time ratio = time of working (cutting) stroke / time of return stroke = crank angle during the working stroke / crank angle during the return stroke, because the crank turns at constant speed (IIT Kharagpur Mechanisms and Robotics virtual lab).
- Crank and slotted lever: cos(alpha/2) = crank radius / distance between the fixed centres, where alpha is the crank angle for the return stroke; the working stroke uses beta = 360 - alpha degrees. Example: 75 mm crank, 150 mm between centres gives alpha = 120 degrees, beta = 240 degrees, ratio 2:1 (ESE 2014 exam question, worked on Testbook).
- Stroke length = 2 x (slotted lever length) x cos(alpha/2) = 2 x lever length x crank radius / centre distance (Chutia, ADBU Journal of Engineering Technology 4(1), 2016: stroke = 2 AP sin(90 - alpha/2)). So a longer crank (crank pin further out) gives a longer stroke (ISRO 2022 exam question) and also a larger time ratio.
- The crank radius must be smaller than the centre distance for the lever to rock; if the crank is longer than the distance between the fixed pivots, the slotted link turns right round, which is the Whitworth (rotating) form (German Wikipedia 'Kurbelschleife': schwingende vs umlaufende Kurbelschleife; IIT Kharagpur).
- General quick-return linkages: time ratio Q = (180 + beta) / (180 - beta), where beta is the imbalance angle; rearranged, beta = 180 x (Q - 1)/(Q + 1) (Wikipedia 'Four-bar linkage', citing Myszka, Machines and Mechanisms).
- Whitworth type: the ram reaches the ends of its stroke when the crank pin lies on the line through the lever pivot at right angles to the fixed link, so cos(half the return angle) = fixed-link length / crank length ⚑ [uncertain: follows from the geometry described by IIT Kharagpur; the formula itself was found only in a vendor explainer].
- Keep a sliding block between crank pin and slot: wear is lower than with a bare pin in the slot (German Wikipedia 'Kurbelschleife').
- For printed moving parts start with at least 0.3 mm clearance and adjust after a test (Prusa, 'Modeling with 3D printing in mind').

## Common failures

1) Wear and growing play where the pin or block rubs in the slot, causing knocking at each reversal: keep a sliding block (German Wikipedia), lubricate, or use a harder pin. 2) The ram binding in its guides: oil the rail (Eng. Yehia) and line the guides up with the lever. 3) Printed parts sticking because of first-layer 'ooze', seams or stringing: file edges and test-fit, trim and sand moving surfaces (gzumwalt). 4) The lever or crank pin breaking from overloading or running too fast (Wikipedia). 5) Wrong proportions: if the crank is longer than the centre distance the lever cannot rock and must turn right round (Whitworth form), which jams a design laid out as a rocking lever ⚑ [uncertain]. 6) Stalling at a dead point when driven from the ram side ⚑ [uncertain].

## Safety

Motor-driven versions have shear and pinch points between the crank, the slotted lever, the ram and the frame, and the ram moves fastest on its return, so keep fingers, hair and loose items clear and guard the moving parts ⚑ [uncertain: general machine-guarding practice]. Do not push the mechanism to its maximum stress or speed; Wikipedia warns the machine will break.

## Related

- Slider-crank (crank and connecting rod): same family (the quick-return mechanisms are inversions of the slider-crank chain), but an in-line slider-crank takes equal time each way; offsetting the slider line gives a milder quick return (Wikipedia 'Slider-crank linkage')
- Scotch yoke: also a crank pin in a slot, but the slotted yoke slides straight and gives equal, sine-wave strokes with no quick return
- Four-bar linkage (crank-rocker or drag-link): can also be laid out with an imbalance angle to give a quick return, using only pin joints (Wikipedia 'Four-bar linkage')
- Cam and follower: can give any motion shape, including a slow push, a fast return and a pause at the ends
- Rack and pinion, or lead screw and nut: long straight strokes that can stop anywhere and reverse on command
- Hydraulic or electric linear actuator: modern replacement on shapers, with adjustable speed and force
- Geneva drive and intermittent gears: other ways of getting uneven (stop-go) timing from steady rotation

## Make it yourself

- [A Simple 3D Printed Whitworth Quick Return Mechanism (gzumwalt, Printables)](https://www.printables.com/model/358710-a-simple-3d-printed-whitworth-quick-return-mechani): Motorised printed demonstrator (N20 gear motor, about 15 rpm) whose arm swings about 14 degrees each way, faster one way than the other; printed at 0.15 mm, no supports, with assembly notes *(licence: CC BY-NC-SA)*
- [Shaper Mechanism (quick return mechanism) (Eng. Yehia, Printables)](https://www.printables.com/model/202288-shaper-mechanism-quick-return-mechanism): Simple shaper prototype for a first-year mechanical engineering course, driven by a continuous-rotation servo, with M4 screws and SolidWorks files *(licence: CC BY)*
- [Whitworth quick return mechanism (AjaxJones, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/14205-whitworth-quick-return-mechanism): Small gear-motor-driven model using a 3 mm bolt and 10 mm OD bearing on the connecting rod; video linked above *(licence: CC BY)*
- [Whitworth mechanism (WayTooManyHobbies, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/263307-whitworth-mechanism): Printable hand-operated model using nylon shoulder bolts and heat-set inserts, with a drawing and STEP file *(licence: CC BY-NC-SA)*
- [HUANGYAN920/Mechanical interactive mechanism animations](https://huangyan920.github.io/Mechanical/): Browser animations with adjustable crank radius and pivot positions, including a rotating guide-bar quick-return (Whitworth type), an offset quick-return and a shaper mechanism (labels mostly in Chinese) *(licence: MIT (code))*
- [Linkage mechanism designer and simulator (David Rector)](https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/): Free Windows program for sketching and animating linkages with pivot and sliding connectors, so a crank, slotted lever and ram can be laid out and timed before printing *(licence: free to download ⚑ [uncertain: licence terms not checked])*

## Pictures, videos and models

- [Quick Return Mechanism 1.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_1.gif): Animated quick-return linkage: the input crank (cyan) drives an output link (pink) that returns faster than it goes forward; the lead image of Wikipedia's article *(licence: CC BY-SA 4.0)*
- [Quick Return Mechanism 2.gif (Wikimedia Commons, by Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_2.gif): Animated quick-return linkage captioned on Wikipedia as one of Whitworth's quick return mechanisms *(licence: CC BY-SA 4.0)*
- [Shaper.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Shaper.png): Diagram of a shaping machine's crank and slotted-lever drive; Wikipedia notes the drive arm turns through a smaller angle on the return stroke *(licence: CC BY-SA 3.0)*
- [Shaper with Coulisse mechanism 2 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=5cb7D9pLcq4): CAD animation of a shaping machine driven by a crank and slotted lever, working stroke slower than return *(licence: link only (standard YouTube licence))*
- [slow motion whitworth quick return mechanism (Narrow Minded Railworks, YouTube)](https://www.youtube.com/watch?v=CCfre2TgeTk): Slow-motion video of a small 3D-printed, motor-driven quick-return model (the video linked from AjaxJones' Printables model) *(licence: link only (standard YouTube licence))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 19 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Quick_return_mechanism>
- <https://en.wikipedia.org/wiki/Shaper>
- <https://en.wikipedia.org/wiki/Four-bar_linkage>
- <https://en.wikipedia.org/wiki/Slider-crank_linkage>
- <https://de.wikipedia.org/wiki/Kurbelschleife>
- <https://mr-iitkgp.vlabs.ac.in/exp/quick-return-mechanism/theory.html>
- <https://mm2-nitk.vlabs.ac.in/exp/crank-slotted-mechanism/theory.html>
- <https://testbook.com/question-answer/in-a-crank-and-slotted-lever-quick-return-motion--5ef9d5d8551232229809e98a>
- <https://testbook.com/question-answer/stroke-length-of-ram-in-shaper-can-be-increased-by--6303476d26d8b0d9daacd182>
- <https://journals.dbuniversity.ac.in/ojs/index.php/AJET/article/download/195/pdf_33>
- <https://www.theengineerspost.com/shaper-machine-mechanism/>
- <https://wiki.dtonline.org/index.php/Whitworth_Quick_Return_Mechanism>
- <https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_1.gif>
- <https://commons.wikimedia.org/wiki/File:Quick_Return_Mechanism_2.gif>
- <https://commons.wikimedia.org/wiki/File:Shaper.png>
- <https://www.youtube.com/watch?v=5cb7D9pLcq4>
- <https://www.youtube.com/watch?v=RvyKFLZi2SM>
- <https://www.youtube.com/watch?v=dqt1jkwLgs0>
- <https://www.youtube.com/watch?v=CCfre2TgeTk>
- <https://huangyan920.github.io/Mechanical/>
- <https://api.printables.com/graphql/>
- <https://www.printables.com/model/358710-a-simple-3d-printed-whitworth-quick-return-mechani>
- <https://www.printables.com/model/202288-shaper-mechanism-quick-return-mechanism>
- <https://www.printables.com/model/14205-whitworth-quick-return-mechanism>
- <https://www.printables.com/model/263307-whitworth-mechanism>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://help.prusa3d.com/article/pla_2062>
- <https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/>
