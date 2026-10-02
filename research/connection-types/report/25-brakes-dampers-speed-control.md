# brakes, dampers & speed control: Slows it, stops it, or keeps its speed steady

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 211 Friction brake (band, drum or disc brake)

*brakes, dampers & speed control.* Friction pads or a band pressed on a turning drum or disc to slow or hold it; a band brake grips harder the further it wraps round

### What it is

- **plain_name**: Pads, shoes or a strap that press or wrap onto a spinning disc or drum and rub on it to slow it down or hold it still, like the brakes on a bike or car; a strap wrapped further round grips much harder
- **term**: Friction brake (band brake, drum brake, disc brake)
- **aliases**: 
  - band brake, brake band; Prony brake (a band brake used to measure an engine's or motor's torque) (Wikipedia, Band brake)
  - drum brake, shoe brake, internal expanding shoe brake (shoes push outwards on the inside of a drum) (Wikipedia, Brake; Drum brake)
  - block brake or shoe brake (a block pressed on the outside of a wheel) (RoyMech, Brakes)
  - disc brake, caliper brake, brake rotor (US) or brake disc, brake pads (Wikipedia, Disc brake)
  - rim brake, V-brake, coaster brake (back-pedal hub brake) (Wikipedia, Bicycle brake)
  - drag (fishing reels: disc drag, caliper drag) (Wikipedia, Fishing reel)
  - holding brake, parking brake, handbrake (Wikipedia, Drum brake)
  - spool brake, filament brake (3D-printing spool holders; Printables model titles) *(unverified parts omitted)*
- **family**: brakes, dampers & speed control
- **other_families**: clutches & couplings, self-locking & anti-back-drive, tensioning, reels & take-up
- **one_liner**: A device that presses friction material (pads, shoes or a band) against a rotating disc or drum, turning the motion into heat so the part slows down, stops or is held still (Wikipedia, Brake).
- **complexity**: A small assembly: a rotating part (disc, drum or wheel) fixed to the shaft; friction material (pads, shoes, a lined band, or a rubber or TPU strip); something to press it on (a lever, cam, cable, screw, spring, weight or hydraulic piston); a fixed anchor or backing plate that takes the braking torque; and usually a return spring to pull it off (Wikipedia, Drum brake; Disc brake; RoyMech; Thang 'Shaft brake 3').
- **how_it_works**: Pressing a friction surface against a moving one creates a drag force that turns the motion's energy into heat (Wikipedia, Brake). A disc brake pinches a disc between two pads, so the braking torque is roughly 2 × friction coefficient × pad force × disc radius, and the braking follows exactly how hard you squeeze (Engineering ToolBox; Wikipedia, Disc brake). In a drum brake the turning drum drags one or both shoes harder into it ('self-energising'), which adds free extra force but makes it touchier (Wikipedia, Drum brake). A band brake wraps a strap round a drum, anchored at one end and pulled at the other: friction multiplies the pull all the way round, so the tight end can carry e^(μθ) times the slack end's tension, which is why it grips harder the further it wraps (RoyMech, Band Brakes; Wikipedia, Band brake).

### Finder attributes

- **job**: 
  - slow it, stop it or keep its speed steady: the main job, e.g. stopping a wheel or lowering a load slowly
  - lock, and release by hand: parking and holding brakes keep a shaft still until you let them off
  - tighten and hold tension: a light drag on a spool keeps filament, thread or cable from over-running and tangling (Printables spool brakes)
- **motion**: rotate: the braked disc or drum turns (continuous rotation); the pads, shoes or band only move a millimetre or so to touch it. Some brakes act on a straight rail or slider instead (Thang, 'Hand brake for rail cars')
- **degrees_of_freedom**: 1: the braked shaft can still turn about its axis; the brake only resists that turning, and when fully on it holds it (0)
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): a drum brake's leading shoe is dragged into the drum ('self-energising'), and a differential band brake can be arranged so the drum's own pull applies the brake, needing no force at all (Wikipedia, Drum brake; RoyMech, Band Brakes)
  - one-way (moves freely one way, locks the other): a self-locking differential band brake is 'effectively free wheeling in the opposite direction' (RoyMech, Band Brakes); a simple band brake is also much stronger in one direction than the other
  - torque-limiting (slips at a set force/torque): a brake held on by a set spring or screw slips smoothly when the torque passes its limit; fishing-reel drags use this to tire a fish without snapping the line (Wikipedia, Fishing reel)
  - tensioning (takes up slack and holds): spool brakes add steady drag so filament stays taut (Printables 748642, 1536289)
- **holding_principle**: 
  - friction or clamping (force-fit): pads, shoes or a band pressed or wrapped onto the disc or drum
  - spring force (a spring or springy part presses it in place): many holding brakes are pushed on by springs or weights (Thang 'Automatic brake for hoist 1a'; Printables 1536289 uses nut weights)
- **input_output**: not applicable: it doesn't pass motion on; it absorbs it as heat. Braking torque ≈ 2μFr for a two-pad disc brake (Engineering ToolBox) and (T1 − T2) × r for a band brake (RoyMech)
- **power**: passive (no power needed) when worked by hand, foot, a cable, a spring or a weight; powered versions use hydraulics, air, a solenoid or a servo (e.g. a servo-driven RC plane drum brake, Printables 77496). *(unverified parts omitted)*
- **removability**: removable: bolted to a frame and a hub, with pads, shoes or bands that are designed to be replaced as they wear (Wikipedia, Brake: 'Durability')
- **reuse_cycles**: many times: the brake can be taken off and refitted, and applied endlessly, but the friction material and disc or drum wear and need renewing (Wikipedia, Brake)
- **seal**: none: it isn't a sealing part. Enclosed drum and coaster brakes keep rain and mud off the rubbing surfaces, so they work consistently when wet (Wikipedia, Bicycle brake)
- **load**: light to heavy: from a few newton-centimetres on a filament spool to cars and trains. Torque grows with the pressing force, the friction coefficient and the radius (Engineering ToolBox), and a band brake multiplies its pull by e^(μθ) (RoyMech). A shoe pressing on one side pushes the shaft sideways unless the linkage takes that force back to the frame; shoes on opposite sides cancel it (Thang, 'Shaft brake 1', 'Shaft brake 2' and 'Shaft brake 3')
- **adjustable**: yes: set the pressing force with a screw, spring or weights (Printables 208775, 1536289), change the lever ratio, and take up pad wear with an adjuster (self-adjusting drum brakes appeared in the 1950s; Wikipedia, Drum brake)
- **play_and_precision**: not applicable for passing motion; as a holding brake it can hold a shaft at any angle (no teeth, so no steps), but a heavily loaded brake may creep or slip. Needs some clearance when off, or it drags (Wikipedia, Brake: 'Drag')
- **access_needed**: end of a tube or shaft: the disc or drum is fixed onto the shaft (usually slid on from the end or bolted to a hub), and the caliper, shoes or band mount on the frame beside it
- **materials**: Discs and drums: grey cast iron in cars, stainless steel (often drilled or slotted) on motorcycles and bikes, aluminium hats with iron rings, carbon-ceramic in racing (Wikipedia, Disc brake). Typical dry friction: brake material on cast iron about 0.4 dry and 0.2 wet; leather on metal about 0.4 dry and 0.2 greasy (Engineering ToolBox). Maker parts: TPU or rubber strips and O-rings as linings (Printables 748642, 1536289, 77496), PETG linings (Printables 748642), aluminium or hard-drive platter discs (Hackaday.io Braker One). *(unverified parts omitted)*
- **maker_difficulty**: moderate: a light spool or hand brake is easy to print, but anything that gets hot, carries people or holds a load safely needs metal rubbing surfaces and proper linings, so buy a bicycle brake or a commercial holding brake

### Making it

- **processes**: 
  - off-the-shelf part: bicycle caliper, V-brake and cable-operated disc brakes with rotors, drum and band brakes, conveyor and linear-bearing brakes (Wikipedia, Disc brake; McMaster-Carr brakes page)
  - 3D print (FDM): levers, housings, spool brakes and small drums for light duty (Printables 208775, 1536289, 77496) *(unverified parts omitted)*
- **print_in_place**: no: it needs separate friction material (TPU, rubber, O-rings or pads) and usually screws, springs or weights to set the force (Printables 748642, 1536289, 77496)
- **making_tips_3d_printing**: 1) Keep heat low: PLA starts to give at about 60 °C, PETG at 80 °C and ASA at 110 °C (CNC Kitchen), so printed rubbing surfaces only suit light, slow, occasional braking such as spool drag; for real stopping, rub on metal (a steel or aluminium disc, or a hard-drive platter as in Hackaday.io Braker One). 2) Use a separate friction material: a TPU brake lining (a very soft 40D TPU at 2.2 mm thick worked in Printables 748642; PETG linings 0.8-1 mm also tested), a TPU 95A strip (Printables 1536289), or O-rings on a printed drum (Printables 77496). 3) Make the force adjustable: an M3 screw (Printables 1804380), a threaded knob (Printables 208775) or stackable M8-nut weights (Printables 1536289), because friction varies from filament to filament and spool to spool. 4) Balance the shoes: put pads on opposite sides so the brake doesn't push the shaft sideways into its bearings (Thang, 'Shaft brake 2'). 5) Give servo-worked brakes enough leverage: one RC designer used the servo's full 90° travel with a sized cam because the servo was weak (Printables 77496). 6) Print levers and cams solid enough (e.g. 7) Threads on printed brake knobs may come out loose in some specialty filaments; PLA or PLA+ printed well (Printables 208775). *(unverified parts omitted)*
- **off_the_shelf_parts**: Sources: Wikipedia, Disc brake, Bicycle brake, Band brake; McMaster-Carr brakes page. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Band brake tensions: T1/T2 = e^(μθ), where μ is the friction coefficient and θ the wrap angle in radians; braking torque M = (T1 − T2) × r (RoyMech, Band Brakes; Wikipedia, Band brake; the same law as the capstan equation, Wikipedia).
  - Worked example (our calculation from the formula above and Engineering ToolBox's μ ≈ 0.4 for brake material on cast iron): the tight end can carry about 3.5× the slack-end pull at 180° wrap, 6.6× at 270° and 12× at a full turn. At the wet value μ ≈ 0.2 the 270° figure drops to about 2.6×, which shows how sensitive band brakes are.
  - A large μθ makes a band brake powerful for a light pull but very sensitive: light rust can make it grab or chatter, water can make it slip, and heat can make it lose force (Wikipedia, Band brake).
  - A differential band brake is self-locking when b2 × T2 = b1 × T1 (lever arms times tensions), and then freewheels in the other direction (RoyMech, Band Brakes).
  - Disc brake torque with two pads: T = 2 μ F r, where F is the force on each pad and r the mean radius to the pad centre (Engineering ToolBox, Disk Brakes).
  - Friction coefficient: brake material on cast iron about 0.4 dry and 0.2 wet, so water can halve braking (Engineering ToolBox, Friction coefficients); water between shoe and drum acts as a lubricant until it evaporates (Wikipedia, Drum brake).
  - Drum brakes are self-energising, so they need less effort but are harder to modulate and fade more when hot; disc brakes have no self-servo action, so braking is proportional to applied force, and they cool better and recover faster after getting wet (Wikipedia, Drum brake; Disc brake).
  - Arrange shoes symmetrically (on opposite sides of the drum) so the braking force doesn't load the shaft sideways (Thang, 'Shaft brake 2' and 'Shaft brake 3').

### When to use it

- **everyday_examples**: 
  - Bicycle rim, disc and back-pedal (coaster) brakes (Wikipedia, Bicycle brake)
  - Car disc brakes at the front and drum brakes, with the handbrake, at the back (Wikipedia, Drum brake)
  - The chain brake on a chainsaw and the brake on a winch drum, both band brakes (Wikipedia, Band brake)
  - The drag knob on a fishing reel, which presses friction discs together (Wikipedia, Fishing reel)
  - A spring or weight-loaded pad that stops a 3D-printer filament spool over-running (Printables 1536289, 208775)
- **when_to_use**: Use a friction brake to slow, stop or hold anything that turns: wheels, winch drums, spools, turntables, robot joints or a hand-cranked hoist. It works at any speed, including zero, so unlike an eddy-current brake it can hold something still, and at any angle, unlike a ratchet with teeth. Choose a disc brake for smooth, controllable braking that copes with heat and water (Wikipedia, Disc brake); a band brake for a simple, compact, high-grip brake worked by a light pull (Wikipedia, Band brake); a drum brake when the rubbing surfaces should be enclosed from dirt and rain (Wikipedia, Bicycle brake). A light, adjustable drag brake is the usual fix for spools that over-run and tangle. A band brake round a pulley (Prony brake) is also a simple way to measure a motor's torque (Wikipedia, Band brake).
- **when_not_to_use**: Don't use it where you need wear-free, silent, contactless slowing: use an eddy-current brake or a damper. Don't rely on a hand-set friction brake to hold a load safely if power or a person fails: use a spring-applied (power-off) brake, a self-locking worm drive or a ratchet. If you only need to stop motion in one direction, a ratchet or one-way clutch holds positively without wear. For long, continuous slowing (long descents, heavy loads), small brakes overheat and fade; coaster brakes, for example, lack heat dissipation for long descents (Wikipedia, Bicycle brake). For a precise, repeatable torque limit, use a purpose-made slip clutch or torque limiter.
- **environment_limits**: Heat: brakes lose grip as they heat up (brake fade), drum and band brakes more than discs (Wikipedia, Drum brake; Band brake); printed parts soften from about 60 °C for PLA (CNC Kitchen). Water: can halve friction (Engineering ToolBox) and rim brakes perform poorly with wet rims (Wikipedia, Bicycle brake). Oil and grease on the friction surfaces cut friction sharply (Engineering ToolBox gives leather on metal 0.4 dry and 0.2 greasy). Rust on a drum can make a band brake grab or chatter (Wikipedia, Band brake). Pads and discs wear with use (Wikipedia, Brake). *(unverified parts omitted)*
- **safety_notes**: Discs, drums and pads get hot enough to burn after hard use (Wikipedia, Brake). Old drum-brake linings may contain asbestos; don't blow out or sand old brake dust (Wikipedia, Drum brake). Self-energising brakes can grab suddenly, and a broken return spring can let shoes lock a wheel (Wikipedia, Drum brake; Band brake). For anything that carries people or holds a hanging load, use a commercial brake rated for the job, not a printed one. *(unverified parts omitted)*
- **common_failures**: Fade from overheating (Wikipedia, Brake fade; Drum brake); slipping when wet, oily or greasy (Engineering ToolBox; In printed brakes: softened or melted plastic, linings that are too hard or too soft, and threads that loosen (Printables 748642, 208775). Avoid them by using metal rubbing surfaces, adjustable force, balanced shoes and keeping oil away. *(unverified parts omitted)*
- **related**: 
  - Eddy-current brake: a magnet drags on a metal disc without touching, so no wear, but it can't hold still
  - Electromagnetic (power-off, spring-applied) brake: a friction disc brake held on by springs and released by a coil, so it holds when power fails; a home-built CNC 4th-axis version clamps an aluminium disc with Belleville-washer stacks and releases with a hand-wound coil, holding about 90 N·m (Hackaday.io, DIY CNC 4th Axis with Brake)
  - Friction clutch (plate or cone clutch): the same pads and discs, but both sides turn and it passes drive on instead of stopping it
  - Friction slip clutch: a spring-loaded friction joint that slips at a set torque to protect a drive
  - Dampers: oil or air slows a movement smoothly instead of rubbing surfaces
  - Speed governor (fly fan or centrifugal governor): keeps a speed steady rather than stopping
  - Ratchet and pawl, sprag clutch: hold positively in one direction without relying on friction
  - Wrap-spring clutch and capstan: use the same wrap-angle friction law as a band brake

### Pictures, videos and models

- **links**: 
  - [File:Band brake.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Band_brake.png): Diagram of a band brake: a band wrapped round a drum, tightened by a lever *(licence: CC BY-SA 3.0 (SIDDHARTHSB.MECH))*
  - [File:Hydraulic disc brake diagram.gif (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Hydraulic_disc_brake_diagram.gif): Animation of a hydraulic disc brake: pressure pushes the pads onto the spinning disc *(licence: CC BY-SA 3.0 (KDS444))*
  - [File:Tipologia tamburo.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Tipologia_tamburo.svg): Several drum brake shoe layouts, with the braking force distribution shown in black *(licence: CC BY-SA 4.0 (A7N8X))*
  - [File:Broms, fig 3, Nordisk familjebok.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Broms,_fig_3,_Nordisk_familjebok.png): Old encyclopedia drawing of a band brake worked by a lever *(licence: Public domain (Nordisk familjebok))*
  - [Shaft brake 1 (Nguyen Duc Thang, YouTube channel thang010146)](https://www.youtube.com/watch?v=Yn6FK7_5VjI): CAD animation of a lever and linkage pressing a brake shoe onto a drum to brake a shaft (see also 'Shaft brake 2' and 'Motorcycle brake 1') *(licence: link only)*
- **make_it_yourself**: 
  - [Large spool holder - wall mount, friction brake (Homunculus, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1536289-large-spool-holder-wall-mount-friction-brake): Spool holder for 1-5 kg spools with a TPU-strip friction brake whose force is set by adding M8 nuts as weights; all parts support-free *(licence: CC0 (Public Domain))*
  - [Filament Spool Brake (Nickc47, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/208775-filament-spool-brake): Screw-adjustable printed brake that presses on a spool to stop it spinning too freely *(licence: CC BY)*
  - [Spool Brake for Bambu Lab Filament Spool Switcher & Donor Spool Frame 2 (STORM DESIGN, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/748642-spool-brake-for-bambu-lab-filament-spool-switcher): Brake with printed TPU or PETG linings in several thicknesses, or an anti-vibration mat, to keep filament tight while rewinding *(licence: CC BY-NC-SA)*
  - [Servo-driven drum-brake for Freewing Avanti EDF-plane (Lonsan, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/77496-servo-driven-drum-brake-for-freewing-avanti-edf-pl): Printed wheel with an internal drum brake using O-rings as friction material, worked by a small servo and cam *(licence: CC BY-NC-SA)* *(unverified parts omitted)*
- **diagram_idea**: Three side-by-side sketches of the same spinning drum: a disc pinched by two pads, shoes pushed outwards inside a drum (arrow showing the leading shoe dragged in harder), and a band wrapped 270° with the anchored tight end labelled T1 and the lever-pulled slack end T2, plus a small bar chart showing how T1/T2 grows from 90° to 360° wrap.
- **sources**: 
  - https://en.wikipedia.org/wiki/Brake
  - https://en.wikipedia.org/wiki/Band_brake
  - https://en.wikipedia.org/wiki/Drum_brake
  - https://en.wikipedia.org/wiki/Disc_brake
  - https://en.wikipedia.org/wiki/Bicycle_brake
  - https://en.wikipedia.org/wiki/Brake_fade
  - https://en.wikipedia.org/wiki/Capstan_equation
  - https://en.wikipedia.org/wiki/Fishing_reel
  - https://roymech.org/Useful_Tables/Drive/Brakes.html
  - https://roymech.org/Useful_Tables/Drive/Band_Brakes.html
  - https://roymech.org/Useful_Tables/Drive/Drum_Brakes.html
  - https://www.engineeringtoolbox.com/friction-coefficients-d_778.html
  - https://www.engineeringtoolbox.com/disk-brakes-d_1808.html
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.mcmaster.com/products/brakes/
  - https://cs448m.github.io/lectures/machines/doc/3.pdf
  - https://www.youtube.com/watch?v=Yn6FK7_5VjI
  - https://www.youtube.com/watch?v=TGLrUAvWDP4
  - https://www.youtube.com/watch?v=RwI1PthoGEY
  - https://hackaday.io/project/171924-braker-one-robot
  - https://hackaday.io/project/169807-diy-cnc-4th-axis-with-brake
  - https://commons.wikimedia.org/wiki/File:Band_brake.png
  - https://commons.wikimedia.org/wiki/File:Hydraulic_disc_brake_diagram.gif
  - https://commons.wikimedia.org/wiki/File:Tipologia_tamburo.svg
  - https://commons.wikimedia.org/wiki/File:Broms,_fig_3,_Nordisk_familjebok.png
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, make_it_yourself, making_tips_3d_printing, materials, off_the_shelf_parts, power, processes, safety_notes, tools_needed

## 212 Eddy-current brake (magnetic brake)

*brakes, dampers & speed control.* A magnet near a moving metal plate that drags on it without touching, more strongly the faster it moves; smooth but can't hold anything still

### What it is

- **plain_name**: A strong magnet held very close to a moving plate or spinning disc of copper or aluminium (metals a magnet doesn't stick to); without touching, it drags on the metal, harder the faster it moves, so it slows things smoothly but can't hold them still
- **term**: Eddy-current brake
- **aliases**: 
  - induction brake, Faraday brake, electric brake, electric retarder (Wikipedia, Eddy current brake)
  - magnetic brake (common name, but ambiguous: on railways a 'magnetic brake' can also mean a magnet that pulls a friction shoe onto the rail; Wikipedia, Eddy current brake)
  - magnetic damping, eddy-current damper (Wikipedia, Magnetic damping)
  - eddy-current absorber (on engine and chassis dynamometers; Wikipedia, Eddy current brake)
  - Waltenhofen's pendulum (the classic classroom demonstration; Wikipedia, Eddy current)
  - Wirbelstrombremse (German; Wikipedia) *(unverified parts omitted)*
- **family**: brakes, dampers & speed control
- **other_families**: powered & active connectors
- **one_liner**: A contactless brake in which a magnet (permanent or electromagnet) induces swirling electric currents (eddy currents) in a nearby moving conductor, and those currents' own magnetic field drags against the motion, turning it into heat, with a force that grows with speed and vanishes at standstill (Wikipedia, Eddy current brake).
- **complexity**: A few parts: one or more magnets (permanent neodymium magnets, or an electromagnet coil on an iron core), a conductive but non-magnetic plate, disc or rail (usually copper or aluminium), and a frame that holds the magnet at a small, fixed gap; often magnets on both sides of the disc, and a way to move the magnet or change the current to vary braking (Wikipedia, Eddy current brake; K&J Magnetics).
- **how_it_works**: As the metal moves past the magnet, the magnetic field through each part of it changes, which induces circular currents (eddy currents) in the metal (Faraday's law) (Wikipedia, Eddy current brake). By Lenz's law these currents make their own magnetic field that opposes the change: the metal is pushed back at the magnet's leading edge and pulled back at its trailing edge, so either way the motion is resisted. The energy goes into heating the metal. When the metal stops, the field stops changing, the currents die away and the braking force disappears, which is why it can't hold anything still (Wikipedia, Eddy current brake).

### Finder attributes

- **job**: slow it, stop it or keep its speed steady: slows a moving or spinning part smoothly, and limits how fast something can fall or spin (it settles at a steady 'terminal' speed; K&J Magnetics)
- **motion**: rotate: in a disc brake the conductor spins past the magnet; linear versions slide along a rail or track instead (Wikipedia, Eddy current brake)
- **degrees_of_freedom**: 1: the disc or plate keeps its one way of moving (turning or sliding); the brake only resists it and never locks it
- **special_behaviour**: 
  - fail-safe or breakaway: permanent-magnet versions need no power, so roller coasters use them to avoid the risk of power cuts (Wikipedia, Eddy current brake)
  - none of the other listed behaviours: its special trait is that the drag grows with speed, like a fluid damper, and falls to zero at standstill (Wikipedia, Eddy current brake; Magnetic damping)
- **holding_principle**: 
  - magnetic: the force comes from the magnet acting on currents it induces in the metal (no contact)
  - not a holding joint (it moves or passes on motion): it has no holding force when stationary (Wikipedia, Eddy current brake)
- **input_output**: not applicable: it absorbs motion as heat rather than passing it on. At low speeds the drag force is roughly proportional to speed, F ≈ a·σ·d·B²·A·v (K&J Magnetics); at high speeds it peaks at a 'critical speed' and then falls (OpenAlex abstract of Chen et al. 2019; German Wikipedia on the ICE 3 brake)
- **power**: passive (no power needed) with permanent magnets; powered with electromagnets, whose braking can be turned on, off or varied by the current. If power is lost, an electromagnet brake stops braking, which is why roller coasters use permanent magnets (Wikipedia, Eddy current brake)
- **removability**: removable: the magnets and the disc or plate are separate parts, screwed, clamped or press-fitted in place (Printables 743728 press-fits its magnets)
- **reuse_cycles**: effectively unlimited: nothing touches, so there are no brake shoes to wear or replace (Wikipedia, Eddy current brake)
- **seal**: none: it doesn't seal anything; it works across an air gap (and even through non-magnetic walls, as in a magnet falling inside a copper pipe; Wikipedia, Eddy current brake)
- **load**: light to heavy depending on size: hobby versions give a gentle drag (K&J Magnetics' eight 2 × 1 × 1/2 in block magnets only slow a sliding aluminium plate), while train brakes reach about 10 kN per brake unit (German Wikipedia, ICE 3). *(unverified parts omitted)*
- **adjustable**: yes: move the magnet closer or further (a bigger gap means weaker braking; German Wikipedia; girogeek), add or remove magnets, change the current in an electromagnet (Wikipedia, Eddy current brake), or swing the magnets away by a linkage, as power-tool brakes do (Wikipedia, Eddy current brake). Old electricity meters used an adjustable permanent-magnet brake (Wikimedia Commons, KWh meter magnetic brake.jpg)
- **play_and_precision**: not applicable: it doesn't locate anything. Because nothing touches, it tolerates some wobble, but braking changes with the gap, so keep the gap small and constant (German Wikipedia; K&J Magnetics)
- **access_needed**: not applicable: nothing is fastened through the moving part; you need room to fix the disc to its shaft and to mount the magnet a few millimetres from the disc or plate
- **materials**: Conductor: copper (about 59.6 MS/m) or aluminium (about 35.5 MS/m) are best; brass is about 56% of copper's conductivity, carbon steel about 7 MS/m and stainless steel only about 1.45 MS/m (Wikipedia, Electrical resistivity and conductivity). Induced current, and so braking, is directly proportional to conductivity, so a copper disc brakes harder than an identical steel one (German Wikipedia). The plate is usually copper or aluminium rather than iron or steel, which a magnet would simply attract (Wikipedia, Eddy current brake), though some dynamometer absorbers use high-inertia steel rotors (Wikipedia, Eddy current brake). Magnets: neodymium (NdFeB) permanent magnets, or electromagnets. Printed plastic can only hold the magnets and frame; it doesn't conduct, so it can't be the braking plate.
- **maker_difficulty**: easy: glue or press neodymium magnets into a printed holder next to an aluminium or copper disc or plate; getting strong braking is harder, because it needs strong magnets, a thick conductor, a tiny gap and enough speed (Hackaday.io, Braker One 'Eddy current brake failure'; K&J Magnetics)

### Making it

- **processes**: 
  - off-the-shelf part: neodymium magnets, aluminium or copper plate and discs, copper pipe; industrial eddy-current and hysteresis brakes
  - 3D print (FDM): magnet holders, frames, gap adjusters and pendulum or drop-tube demos (Printables 1644230, 743728)
  - woodwork: a simple wooden mount for magnets beside an aluminium roller (girogeek) *(unverified parts omitted)*
- **print_in_place**: no: it needs separate magnets and a metal conductor; printed parts only hold them (magnets can be pressed into printed pockets, as in Printables 743728, or sealed in mid-print)
- **making_tips_3d_printing**: 1) The braking plate must be metal: use aluminium or copper; plastic doesn't conduct (Wikipedia, Electrical resistivity and conductivity). 2) Alternate the magnets' poles along the path (N, S, N, S) as K&J Magnetics did with its row of block magnets, and as the eddy-current bike light on Printables 455016 does ('Insert the magnets into the rotor with alternating polarity'). 3) Keep the gap tiny and rigid: K&J used about 1/8 in (3 mm), a DIY roller trainer used 1-2 mm (girogeek), and a bigger gap weakens the maximum braking (German Wikipedia). Magnets on both sides of the disc, facing each other across a small gap, give a stronger, more even field (K&J Magnetics). 4) Magnet pockets: press-fit pockets with a small hole behind each one let you push magnets out again with a hex key (Printables 564712; Printables 743728 press-fitted its magnets without glue). 5) Heat: the disc warms up in use (Wikipedia, Eddy current brake); keep PLA holders from touching it, since PLA gives at about 60 °C (CNC Kitchen), and keep magnets below their rated temperature (about 80 °C for a typical N42 magnet in K&J Magnetics' example). 6) Don't cut slots or radial gaps in the disc: they stop the current loops forming and reduce braking (German Wikipedia). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'neodymium block magnet' or 'neodymium disc magnet' (N42, N52; Sources: Wikipedia, Eddy current brake; K&J Magnetics; Magtrol hysteresis brake manual; RoyMech Brakes. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Drag force at low speed: F ≈ a·σ·d·B²·A·v, so braking grows with the conductor's conductivity σ, its thickness d, the magnet's pole area A and the speed v, and with the square of the field strength B, so doubling the field gives about four times the braking (K&J Magnetics, Eddy Current Brakes).
  - Braking is proportional to speed at low speeds, so a falling or spinning load settles at a steady terminal speed where drag equals the driving force (K&J Magnetics; Wikipedia, Magnetic damping), and there is no holding force at standstill (Wikipedia, Eddy current brake).
  - The force doesn't rise forever: it peaks at a 'critical speed' and then falls because of the skin effect (Chen et al. 2019, abstract via OpenAlex); the ICE 3 train's eddy-current brake gives its greatest force, about 10 kN per brake shoe, at 75 km/h and less above that (German Wikipedia, Wirbelstrombremse).
  - Conductor choice (Wikipedia conductivity table): copper 59.6 MS/m, aluminium 35.5 MS/m, carbon steel 7 MS/m, stainless steel 1.45 MS/m, so copper brakes about 1.7× harder than aluminium of the same thickness (our calculation), and stainless barely works.
  - Keep the magnetic field at right angles to the plate for the strongest braking, keep the gap small, and don't slot the disc (German Wikipedia, Wirbelstrombremse).
  - Linear train eddy-current brakes run about 7 mm from the rail (Wikipedia, Eddy current brake); hobby builds use 1-3 mm (girogeek; K&J Magnetics).
  - Heat reduces braking: copper's resistance rises about 0.4% per °C (Wikipedia conductivity table), so a disc 50 °C hotter conducts about 17% less (our calculation); disc brakes get hotter than linear ones because the same metal passes the magnet again and again (Wikipedia, Eddy current brake).
  - Neodymium magnets lose some strength reversibly as they warm and lose it permanently above their maximum operating temperature: about 80 °C for K&J's N42 example, 150 °C for N42SH, 220 °C for N35AH (K&J Magnetics, Temperature and Neodymium Magnets).

### When to use it

- **everyday_examples**: 
  - The magnetic brakes that stop roller coaster cars smoothly at the end of the ride (Wikipedia, Eddy current brake)
  - A strong magnet falling slowly down a copper pipe in a science lesson (Wikipedia, Eddy current brake)
  - The spinning aluminium disc in an old electricity meter, slowed by a permanent magnet (Wikipedia, Eddy current brake; Wikimedia Commons photo)
  - Old analogue car and bike speedometers, where a spinning magnet drags a cup against a spring (Wikipedia, Magnetic damping; German Wikipedia)
  - Zip-line brakes and power-tool blade brakes that stop a circular saw quickly (Wikipedia, Eddy current; Eddy current brake)
- **when_to_use**: Use it when you want smooth, silent, wear-free slowing that automatically gets stronger at higher speed: limiting how fast a weight falls or a spool unwinds, damping wobble in a pointer, balance or pendulum (Wikipedia, Magnetic damping), adding adjustable resistance to a trainer or exercise machine (girogeek), stopping a spinning blade or wheel without dust, or as a fail-safe speed limiter with permanent magnets that needs no power (Wikipedia, Eddy current brake). It also works where you can't touch the moving part, e.g. through an air gap or a non-magnetic wall.
- **when_not_to_use**: Don't use it to hold anything still or park a load: it has no holding force at zero speed, so combine it with a friction brake, ratchet or spring-applied brake (Wikipedia, Eddy current brake; Eddy current). It is weak at low speeds (Wikipedia, Eddy current brake), and small magnets on a thin plate may give almost no braking: one maker's coil-and-chain-link brake on a thin aluminium disc at 450 rpm gave none, and he switched to mechanical calipers (Hackaday.io, Braker One). For speed-independent drag, or drag at standstill, use a hysteresis brake, which gives full torque independent of slip speed (Magtrol manual), or a friction brake. Keep strong magnets away from magnetic sensors and electronics: German railways found eddy-current brakes can disturb trackside equipment such as axle counters (German Wikipedia).
- **environment_limits**: Heat: the conductor heats up and its resistance rises, reducing braking (Wikipedia conductivity table); neodymium magnets lose strength when hot, permanently above their maximum operating temperature (about 80 °C for a typical N42 magnet; K&J Magnetics), and their coercivity drops sharply above 100 °C (Wikipedia, Neodymium magnet). Printed holders soften from about 60 °C in PLA (CNC Kitchen). Moisture: neodymium magnets corrode unless plated or coated (Wikipedia, Neodymium magnet). Vibration can shift magnets and change the gap. *(unverified parts omitted)*
- **safety_notes**: Strong neodymium magnets can pinch skin and even break bones when they snap together or onto steel, can chip and throw sharp fragments, and are very dangerous if a child swallows more than one (Wikipedia, Neodymium magnet). They can also damage magnetic cards and some electronics (Wikipedia, Neodymium magnet). Never rely on an eddy-current brake to hold a load or stop something completely; electromagnet versions stop braking if power fails (Wikipedia, Eddy current brake). The disc or plate can get hot after heavy braking.
- **common_failures**: Too little braking: magnets too weak or too few, gap too big, conductor too thin or a poor conductor (steel or stainless), or speed too low (K&J Magnetics; German Wikipedia; Hackaday.io, Braker One). Poor magnet arrangement (not alternating poles) or a slotted disc that breaks up the current loops (German Wikipedia). Braking fades as the disc heats up (Wikipedia conductivity table), and magnets weaken or are permanently demagnetised by heat (K&J Magnetics). Expecting it to stop completely: it only slows, and theoretically never quite reaches standstill (German Wikipedia). *(unverified parts omitted)*
- **related**: 
  - Friction brake: pads rub on a disc or drum, so it can hold still, but it wears, heats unevenly and can fade or grab
  - Hysteresis brake: also contactless, but gives nearly the same torque at any speed, including standstill (Magtrol manual)
  - Magnetic particle brake: a coil makes magnetic powder lock a rotor, adjustable by current (RoyMech, Brakes)
  - Magnetic coupling and magnetic gear: magnets pass turning force through a gap instead of braking it
  - Electromagnetic (power-off) brake: uses a magnet to work a friction brake, so it can hold a load
  - Regenerative and dynamic braking: a motor used as a generator (for example with its leads shorted or fed to a resistor) brakes in a similar speed-dependent way (Wikipedia, Brake)
  - Dampers (oil or air) and speed governors (air vanes): other speed-dependent ways to slow or steady motion

### Pictures, videos and models

- **links**: 
  - [File:Eddy current brake diagram.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Eddy_current_brake_diagram.svg): A disc eddy-current brake: a spinning metal disc between magnet poles, with the induced current loops and the resulting drag *(licence: CC0 (Chetvorno))*
  - [File:Eddy currents due to magnet.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Eddy_currents_due_to_magnet.svg): A metal sheet moving under a magnet, with the swirling currents ahead of and behind the magnet and their opposing fields *(licence: CC0 (Chetvorno))*
  - [File:What can you do with a Neodymium magnet and a copper pipe-.webm (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:What_can_you_do_with_a_Neodymium_magnet_and_a_copper_pipe-.webm): Video of a neodymium magnet falling slowly through a copper pipe (Lenz's law and eddy currents) *(licence: CC BY 3.0 (Avichal Sharma))*
  - [File:KWh meter magnetic brake.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:KWh_meter_magnetic_brake.jpg): Adjustable permanent-magnet eddy-current brake on the aluminium disc of a 1973 electricity meter *(licence: CC0 (Olli Niemitalo))*
  - [Eddy Current Brakes (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/eddy-current-brakes): Photos and graphs of magnet trolleys and an alternating-pole magnet row braking an aluminium plate on a ramp, with the drag-force formula *(licence: link only)*
- **make_it_yourself**: 
  - [Dual-Tube Lenz's Law Visualizer (Jonathan L, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1644230-dual-tube-lenzs-law-visualizer): Printed end caps for a copper tube (magnet falls slowly) beside a clear tube (steel weight free-falls), to compare eddy-current braking with free fall *(licence: CC BY-NC-SA)*
  - [Eddy Currents (K&J Magnetics blog)](https://www.kjmagnetics.com/blog/eddy-currents): Simple experiment: a 1 in × 1/8 in disc magnet sliding down a 1/8 in thick aluminium strip, slowed by eddy currents *(licence: link only)* *(unverified parts omitted)*
- **diagram_idea**: Top view of an aluminium disc spinning between a pair of magnets, with two swirling current loops (one ahead of the magnet, one behind), arrows showing the drag opposing rotation, and beside it a small graph of drag force against speed that starts at zero, rises in a straight line, peaks and then slowly falls, labelled 'no force when stopped'.
- **sources**: 
  - https://en.wikipedia.org/wiki/Eddy_current_brake
  - https://en.wikipedia.org/wiki/Eddy_current
  - https://en.wikipedia.org/wiki/Magnetic_damping
  - https://en.wikipedia.org/wiki/Lenz%27s_law
  - https://de.wikipedia.org/wiki/Wirbelstrombremse
  - https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity
  - https://en.wikipedia.org/wiki/Neodymium_magnet
  - https://en.wikipedia.org/wiki/Brake
  - https://en.wikipedia.org/wiki/Fishing_reel
  - https://www.kjmagnetics.com/blog/eddy-current-brakes
  - https://www.kjmagnetics.com/blog/eddy-currents
  - https://www.kjmagnetics.com/blog/temperature-and-neodymium-magnets
  - https://www.magtrol.com/wp-content/uploads/hbmanual.pdf
  - https://roymech.org/Useful_Tables/Drive/Brakes.html
  - https://api.openalex.org/works/doi:10.3390/en12132622
  - https://hackaday.io/project/171924-braker-one-robot
  - https://hackaday.io/project/171924-braker-one-robot/log/179881-eddy-current-brake-failure
  - http://girogeek.blogspot.com/2009/11/so-i-decided-that-in-order-to-gain-some.html
  - https://www.instructables.com/Eddy-Current-Brake-Experiment/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://commons.wikimedia.org/wiki/File:Eddy_current_brake_diagram.svg
  - https://commons.wikimedia.org/wiki/File:Eddy_currents_due_to_magnet.svg
  - https://commons.wikimedia.org/wiki/File:What_can_you_do_with_a_Neodymium_magnet_and_a_copper_pipe-.webm
  - https://commons.wikimedia.org/wiki/File:KWh_meter_magnetic_brake.jpg
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, load, make_it_yourself, making_tips_3d_printing, off_the_shelf_parts, processes, tools_needed

## 213 Speed governor (fly fan, centrifugal governor)

*brakes, dampers & speed control.* Air vanes or flyweights that keep a spring- or weight-driven mechanism running at a steady speed, as in music boxes and clock chimes

### What it is

- **plain_name**: A little fan or a set of swinging weights, geared up to spin very fast, that stops a wound-up spring or a falling weight from letting a mechanism race away, so a music box plays in time and a clock chimes at a steady pace
- **term**: Speed governor: fan fly (air-brake governor, 'fly') and centrifugal friction governor (flyweight or flyball brake governor)
- **aliases**: 
  - fly, fan fly, fly fan, fly governor (striking and chiming clocks)
  - air brake, air governor, fan governor, vane governor (music boxes)
  - music-box governor, music-movement governor (the ready-made unit in cuckoo clocks and music boxes)
  - regulator (of a striking train)
  - centrifugal governor, centrifugal regulator, flyball or fly-ball governor, flyweight governor
  - centrifugal brake, or 'moderator' (Maxwell's 1868 name for a governor that brakes the motion instead of throttling the power supply)
  - gramophone governor, phonograph governor, rotary-dial governor
  - Pickering governor (weights mounted on flat springs)
  - Windfang, Windflügel or Windflügelregler (German)
- **family**: brakes, dampers & speed control
- **one_liner**: A speed governor is a small fan or a set of spinning weights at the fast end of a spring- or weight-driven gear train that brakes harder the faster it turns, so the whole mechanism settles at a steady running speed instead of running away.
- **complexity**: A small assembly that acts as one unit. Fan fly: thin fan blades (vanes) on a light spindle (arbor), driven by a gear or by a steep worm; in clocks the fan is held on its arbor by a small friction spring. Centrifugal friction governor: two or three weights on flat springs or hinged arms on a fast spindle, plus a friction pad, cup or brake disc that they rub against, and often an adjusting lever or stop. Both need a step-up gear train (many gears, or a worm) between the slow drum or barrel and the governor.
- **how_it_works**: The spring or weight tries to spin the gear train, and the governor sits on the fastest, lowest-force shaft. A fan fly beats the air: air drag grows with the square of speed, so the fan barely resists at first but brakes strongly once it is spinning fast, and the train settles where the drag balances the driving force (Wikipedia 'Striking clock'; engineerguy). In a centrifugal friction governor the weights fly outwards as speed rises and press a pad or disc against a friction surface, so the faster it turns the harder the brake is applied (Wikipedia 'Rotary dial'; Hackaday on Wintergatan's governor). Unlike an escapement it does not tick or keep time; it only limits speed, which still drifts a little as the spring runs down.

### Finder attributes

- **job**: 
  - slow it, stop it or keep its speed steady: lets a wound spring or a falling weight run down at an even, sensible speed (music box tempo, clock strike rhythm, rotary-dial pulse rate, gramophone turntable speed)
- **motion**: rotate: continuous fast rotation of the fan or weight spindle (a toy music box's fan turns at about 3,600 rpm; engineerguy); in the centrifugal type the weights also swing or bow outwards by a few millimetres as speed rises
- **degrees_of_freedom**: 1: the fan or weight spindle turns with the gear train it is geared to; the outward swing of centrifugal weights is set by the speed, not a separate input. A friction-fit clock fly can also slip round its arbor briefly when the train stops.
- **special_behaviour**: 
  - none of the listed behaviours exactly: its trick is speed-dependent braking (negative feedback), weak at low speed and strong at high speed, so the mechanism finds a steady speed on its own
  - torque-limiting (slips or clicks at a set force/torque): in clocks the fan is a spring friction fit on its arbor, so it does not slip while running but can slip a little when the striking train is stopped suddenly, easing the shock on the teeth and stop pin (NAWCC forum; de.wikipedia 'Windfang (Uhr)')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it soaks up energy as air drag or friction heat
  - friction or clamping (force-fit): centrifugal types brake by rubbing pads on a drum or disc; clock flies are held on their arbor by a friction spring
- **input_output**: Input: torque from a wound spring or falling weight, passed through a large step-up gear train (a toy music box multiplies 2,400 times, so one turn of the first gear spins the fan 2,400 times; engineerguy). Output: no useful work: all the power reaching it is turned into air drag or friction heat, which fixes the running speed of everything upstream. Shafts: parallel when the governor is driven by spur gears (Western Electric dial) or crossed at right angles when driven through a worm (music boxes, Automatic Electric dial); unusually, here the wheel drives the worm, which needs a very steep worm thread of about 45 degrees (Wikipedia 'Rotary dial'). Back-drivable: not relevant; the governor is the last shaft and only absorbs energy. *(unverified parts omitted)*
- **power**: passive (no power needed): runs from the same spring or weight that drives the mechanism; nothing happens when it stops except that the train stops
- **removability**: removable: a music-box or cuckoo-clock governor is a separate unit screwed to the frame and can be swapped for a replacement with the same pinion tooth count; a clock fly slides off its arbor for cleaning (NAWCC forum)
- **reuse_cycles**: many times: governors are routinely removed, cleaned, bushed and refitted during clock and music-box servicing
- **tools_needed**: Small screwdrivers; pliers or tweezers to adjust the fly's friction spring or bend the governor frame to set the gear mesh; clock oil; for printed versions usually only printed pins or small screws and bearings
- **seal**: none: an open mechanism; a centrifugal type often has a cup or cover around the weights, but it seals nothing
- **load**: Light: it only ever handles the small torque at the fast end of the gear train (the fly is 'high speed but low torque, easier to stop'; NAWCC forum), and an air fan's braking force is small (US patent 4,458,573). It carries no structural load. The worm and the plastic drive gear in cheap music-box governors are the weak parts.
- **adjustable**: Yes. Fan fly: a bigger or more steeply angled fan runs slower (one restorer slowed a clock's strike by about a third with a larger fan; NAWCC forum), and the fan's grip on its arbor must be tight enough not to slip while running. Some tower-clock flies have vanes that open outwards against return springs as speed rises, and the spring tension sets the behaviour (de.wikipedia 'Windfang (Uhr)'). Centrifugal friction type: a lever or stop that limits how far the weights can move, or that moves the friction pad, sets the speed; this is the speed control on a wind-up gramophone (Wikimedia Commons descriptions of 'Grammoantrieb.jpg' and 'Regulador mecánico.png').
- **play_and_precision**: It does not locate anything; what matters is how steady the speed is. A plain fan's speed swings about an average and drifts as the spring runs down, so it is not used for telling the time (de.wikipedia 'Windfang (Uhr)'; NAWCC: 'few governed so well that speed doesn't change thru the power range'). A rotary-dial governor was good enough to give about 10 pulses per second, and exchanges accepted about 9 to 13 (Wikipedia 'Rotary dial'). Gear-mesh depth at the worm matters: worn pivot holes or a cracked drive gear make it click or jam (NAWCC forum).
- **access_needed**: not applicable: it sits inside the mechanism's frame and is reached by opening the case
- **materials**: Traditionally thin brass or steel sheet vanes on a steel arbor, with a polished steel worm (music boxes; James Riser made his worm arbor from stainless steel); cheap modern cuckoo-clock governors use a plastic gear that drives a metal worm (NAWCC forum). Centrifugal types: steel or brass weights on flat spring-steel strips, rubbing on friction pads or shoes (Wikipedia 'Rotary dial'; Commons 'Regulador mecánico.png'). Printed versions use PLA or PETG for fans, gears and weights, with steel pins or small ball bearings.
- **maker_difficulty**: moderate: a printed fan is trivial, but a governor only works on a very low-friction, high step-up gear train (thousands to one in a music box), and the worm must be smooth and run with little friction; the centrifugal friction type also needs springs and a friction surface that can be tuned

### Making it

- **processes**: 
  - 3D print (FDM): fans, step-up gear trains, weights and frames; printed rotary dials and hand-cranked record players with printed governors exist (Moeya 3D Designs; akajes on Thingiverse)
  - sheet metal: thin brass or aluminium shim for fan vanes, cut with snips
  - CNC: a lathe for a smooth, polished worm arbor and pivots (James Riser)
  - woodwork: wooden-gear clocks and automata can use a card, wood or thin-plastic fan
  - off-the-shelf part: complete music movements, music-box and cuckoo-clock governors, and gramophone spring motors with governors
- **print_in_place**: no: a governor is printed as separate parts (fan or weights, arbor, worm, gears, frame) and assembled on pins or bearings; the centrifugal type usually also needs metal springs or a friction pad
- **making_tips_3d_printing**: 1) Put the governor on the fastest shaft and gear it up a lot: fan drag grows with the square of speed (Wikipedia 'Drag (physics)'), so a slowly turning fan does almost nothing; a toy music box runs its fan at about 3,600 rpm through a 2,400:1 train (engineerguy). 2) Keep the fan light: thin vanes and a low moment of inertia let it reach its working speed quickly (de.wikipedia 'Windfang (Uhr)'). Print vanes flat on the bed, thin but at least two perimeters thick, and balance them so the fast shaft does not shake. 3) If the fan is driven through a worm, the wheel must drive the worm: use a steep, multi-start worm (about 45 degrees, as in music boxes and rotary dials; Wikipedia 'Rotary dial') and make the thread as smooth as possible; James Riser notes a music-box air brake 'will not work if the threads are left rough and unpolished'. 4) Spread the load: Riser cut his wheel so three teeth engage the worm at once to cut friction. 5) Use steel pins or small ball bearings for the fast shafts rather than printed axles, and check the whole train spins freely by hand before fitting the spring. 6) Tune by changing fan size or vane angle rather than by adding friction; a bigger fan slows the train (NAWCC forum). 7) For a centrifugal friction governor, make the weights' outward travel adjustable (a stop screw or movable friction pad), as on gramophone governors (Commons 'Grammoantrieb.jpg', 'Regulador mecánico.png'); 8) Let the fan slip a little on its shaft (a light friction fit, or an O-ring or spring clip) if the train stops suddenly against a stop, so the fan's momentum does not break teeth (NAWCC forum; de.wikipedia). 9) Stop and start the train at the fan end where possible: the fan is fast but weak, so a small wire or lever can hold it (NAWCC music-box governor thread). *(unverified parts omitted)*
- **off_the_shelf_parts**: Wind-up music movement (e.g. 22/28/36-note 'music box movement', which includes its own air-brake governor); replacement music-box governor or 'music movement governor' (specified by the pinion tooth count that meshes with the pin drum; NAWCC forum); cuckoo-clock music-box governor; clock 'fly' or 'fan fly' for striking trains; wind-up gramophone or phonograph spring motor with centrifugal governor (CLPGS); miniature ball bearings; worm and worm-wheel sets (use a steep multi-start worm); flat spring-steel strip; felt or leather friction pad; small neodymium magnets and an aluminium or copper disc if you prefer a non-contact eddy-current brake instead.
- **rules_of_thumb**: 
  - Air drag on a fan grows with the square of speed at normal speeds, and the power it absorbs with the cube, so a fan governor only works when geared up to high speed (Wikipedia 'Drag (physics)'; engineerguy 'How a Wind Up Music Box Works': air resistance 'swiftly increases' above 3,000 rpm).
  - Gearing: a toy music box steps up 2.75 x 5.75 x 6.3 x 24 (about 2,400:1) from the spring's first gear to the fan, which spins at about 3,600 rpm (engineerguy).
  - Salisbury Cathedral's medieval clock: 64:1 from great wheel to fly, so the fly turns 8 times per strike (Wikipedia 'Salisbury Cathedral clock'); the fly always goes on the fastest-turning shaft of the striking train (Wikipedia 'Striking clock').
  - Fan vanes should be as thin and light as possible so the fan reaches speed quickly; a plain fan's speed still swings about an average, so it is never used as a timekeeper (de.wikipedia 'Windfang (Uhr)').
  - A worm driven by its wheel needs a very steep thread, about 45 degrees to the axis, and a highly polished surface (Wikipedia 'Rotary dial'; James Riser, 'A1 - the Air Brake or Governor').
  - Clock fly friction: tight enough that it does not slip while the train is running, loose enough to slip slightly at the stop; a quick test is that you can turn the fly while holding the pinion, but only with obvious effort (NAWCC 'Fly adjustment' thread).
  - Rotary-dial governors were set for about 10 pulses per second, with 9 to 13 accepted by exchanges (Wikipedia 'Rotary dial').

### When to use it

- **everyday_examples**: 
  - A wind-up music box, whose little whirring fan on a worm sets the tempo of the tune (engineerguy; Wikipedia 'Governor (device)')
  - A striking or chiming clock, including cuckoo clocks, whose whirring 'fly' spins while the hours are struck (Wikipedia 'Striking clock')
  - An old rotary-dial telephone: the dial returns at a steady speed because of a small centrifugal governor inside (Wikipedia 'Rotary dial')
  - A wind-up gramophone, whose three weights on springs rub a friction pad to hold the turntable speed (Wikimedia Commons 'Grammoantrieb.jpg'; CLPGS)
- **when_to_use**: Use it when a spring, a falling weight or a hand crank drives something that should run at a roughly steady speed with no electricity: a music box, a chime or strike train, an automaton, a marble machine, a wind-up toy, a slowly lowering display, or a returning dial. It is smooth and nearly silent (air fans), needs no timing accuracy, and is self-regulating: it brakes lightly at low speed and hard at high speed, so the mechanism starts easily but cannot run away. A centrifugal friction governor suits jobs that need a firmer, adjustable speed, such as a turntable or a hand-cranked machine (Wintergatan uses a gramophone-style flyball governor with a disc brake to keep a hand-cranked music machine in time; Hackaday).
- **when_not_to_use**: Don't use it for timekeeping: speed drifts as the spring runs down; use an escapement with a pendulum or balance wheel instead. Don't use it to hold something still: it only resists motion, so a load will still creep down; use a ratchet, a worm drive or a brake. For a single slow, smooth close (a lid or drawer), a rotary or linear damper is simpler. For a motor-driven project, control the motor electronically. If a whirring noise matters, a non-contact eddy-current brake (a magnet near an aluminium disc) can replace a fly, as one clockmaker did (Model Engineer forum).
- **environment_limits**: Air fans depend on air density, so they run slightly differently at altitude or temperature extremes; small-engine air-vane governors are affected by air density (Wikipedia 'Governor (device)'). Old oil and dirt add friction and slow the train, while worn pivots change the worm mesh (NAWCC forum). *(unverified parts omitted)*
- **safety_notes**: The main hazard is the spring or weight that drives it: if a governor fails or is removed, the train runs away at high speed, which can break teeth and damage parts (a music-box pin drum spinning without its governor can break the tuned comb teeth; NAWCC forum). Keep fingers and hair clear of fast-spinning fans and weights. *(unverified parts omitted)*
- **common_failures**: 1) Fly loose on its arbor, so the strike or chime runs much too fast; about 90% of fast strikes, according to one experienced restorer (NAWCC forum). Tighten the friction spring rather than soldering or gluing the fly, because a fixed fly can shear the stop pin or strip teeth when the train stops (NAWCC). 2) Cracked plastic drive gear in cuckoo-clock music-box governors, heard as a repeated click and causing jams; replace the gear or the governor (NAWCC music-box governor thread). 3) Worn pivot holes that let the worm mesh too shallow or too deep; bush the holes or replace the unit (NAWCC). 4) Rough or unpolished worm thread, so the wheel hangs up (James Riser). 5) Train overpowered by too strong a mainspring, so even a good fan cannot hold the speed down (NAWCC). 6) Speed drifting as the spring runs down: expected with a plain fan; use a centrifugal friction type or a gentler spring. 7) Noise: the fly's pinion and warning wheel whirr; a little grease on the fast pinion quietens gramophone motors (CLPGS).
- **related**: 
  - Escapement (anchor or verge escapement): lets a spring or weight run down in exact, countable steps for timekeeping; a governor gives smooth but inexact speed
  - Eddy-current brake (magnetic brake): a non-contact drag that also grows with speed; can replace a fly, and is used in some clocks and meters
  - Dampers (rotary and linear soft-close dampers): oil- or air-filled parts that slow a single movement, such as a lid closing, rather than a continuously running train
  - Centrifugal clutch: the same flying-weights idea, but used to connect a drive above a set speed instead of braking it
  - Friction brake (band, drum or disc brake): a centrifugal friction governor is an automatic friction brake applied by the flyweights
  - Inertia-locking reel (seatbelt lock, centrifugal catch): uses flying weights to lock at a set speed instead of braking smoothly
  - Worm drive: the governor is usually driven through a worm run backwards (wheel driving worm) with a steep thread

### Pictures, videos and models

- **links**: 
  - [L-Uhr9.png (Wikimedia Commons, from Otto Lueger's Lexikon der gesamten Technik)](https://commons.wikimedia.org/wiki/File:L-Uhr9.png): Labelled drawing of a rack-striking clock mechanism with the fan fly (K) on the fastest shaft of the striking train; used in Wikipedia's 'Striking clock' article *(licence: Public domain)*
  - [How a Wind Up Music Box Works (engineerguy, Bill Hammack), video on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:How_a_Wind_Up_Music_Box_Works_engineerguy.webm): Video showing the spring, the 2,400:1 step-up gear train, the worm and the air-brake governor of a toy music box, including a slow-motion view of the spinning fan *(licence: CC BY 3.0)*
  - [Regulador mecánico.png (Wikimedia Commons, by Wiki LIC)](https://commons.wikimedia.org/wiki/File:Regulador_mec%C3%A1nico.png): Diagram of a phonograph spring motor's centrifugal governor at rest and running: the weights lift a disc against friction shoes, and moving the shoe arm sets the speed *(licence: CC BY-SA 4.0)*
  - [Grammoantrieb.jpg (Wikimedia Commons, by Ulfbastel)](https://commons.wikimedia.org/wiki/File:Grammoantrieb.jpg): Photo of a gramophone drive: spring barrel behind, and a centrifugal governor with three weights in front, with the lever that limits the governor's travel to set the maximum speed *(licence: CC BY-SA 4.0)*
  - [How Gramophones play Tight Music - The Flyball Governor (Wintergatan, YouTube; embedded in Hackaday's 25 Feb 2025 article)](https://www.youtube.com/watch?v=jJkoZgKVEx8): Video of a flyball governor pushing a disc brake harder as a hand-cranked music machine speeds up, with a prototype demonstration *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [KIT Record Player/Centrifuge/Governor (akajes, Thingiverse)](https://www.thingiverse.com/thing:2006756): Fully printed kit that can be built as a hand-cranked vinyl player 'with a governor speed limiter and stabilizer', or as a centrifuge; includes a stand-alone governor build *(licence: CC BY-NC-SA 4.0)*
  - [Hartnell Governor - Work in Progress (3DMason, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1291229-hartnell-governor-work-in-progress): Printable model of a Hartnell spring-loaded centrifugal governor (an engine-type governor) to see flyweights move outwards against a spring; marked as a work in progress *(licence: CC BY-NC-SA)*
  - [507 Mechanical Movements no. 287: Pickering's governor](https://507movements.com/mm_287.html): Animated historic drawing of a governor whose balls are carried on flat springs, the same layout used in gramophone and telephone-dial governors *(licence: book public domain; website animation link only)* *(unverified parts omitted)*
- **diagram_idea**: Side-by-side: (left) a spring barrel driving a chain of ever-smaller gears up to a worm and a two-bladed fan, with curved air-drag arrows that grow bigger as a speed dial rises; (right) a centrifugal version whose two weights on flat springs bow outwards at speed and press a disc onto a felt pad, with a small graph of braking force against speed rising steeply for both.
- **sources**: 
  - https://en.wikipedia.org/wiki/Centrifugal_governor
  - https://en.wikipedia.org/wiki/Governor_(device)
  - https://en.wikipedia.org/wiki/Striking_clock
  - https://en.wikipedia.org/wiki/Rotary_dial
  - https://en.wikipedia.org/wiki/Salisbury_Cathedral_clock
  - https://en.wikipedia.org/wiki/Drag_(physics)
  - https://de.wikipedia.org/wiki/Windfang_(Uhr)
  - https://commons.wikimedia.org/w/index.php?title=TimedText:How_a_Wind_Up_Music_Box_Works_engineerguy.webm.en.srt&action=raw
  - https://commons.wikimedia.org/wiki/File:How_a_Wind_Up_Music_Box_Works_engineerguy.webm
  - https://commons.wikimedia.org/wiki/File:L-Uhr9.png
  - https://commons.wikimedia.org/wiki/File:Regulador_mec%C3%A1nico.png
  - https://commons.wikimedia.org/wiki/File:Grammoantrieb.jpg
  - https://commons.wikimedia.org/wiki/File:Centrifugal_governor.png
  - https://patents.google.com/patent/US4458573A/en
  - https://jamesriser.com/Magic/A1/A1Page5.html
  - https://mb.nawcc.org/threads/purpose-of-the-fly-in-a-striking-clock.105829/
  - https://mb.nawcc.org/threads/how-can-i-slow-down-a-clock-chime.5863/
  - https://mb.nawcc.org/threads/fly-adjustment.148022/
  - https://mb.nawcc.org/threads/music-box-governor-problems.156063/
  - https://www.model-engineer.co.uk/forums/topic/striking-clock-fly-adjustment/
  - https://www.model-engineer.co.uk/forums/topic/alternative-to-a-fly-for-braking-a-clock-striking-train/
  - https://www.clpgs.org.uk/the-spring-motor.html
  - https://507movements.com/mm_147.html
  - https://507movements.com/mm_161.html
  - https://507movements.com/mm_287.html
  - https://hackaday.com/2025/02/25/taking-cues-from-a-gramophone-to-make-a-better-marble-music-machine/
  - https://hackaday.com/2026/03/11/a-rotary-dial-the-3d-printed-way/
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=jJkoZgKVEx8&format=json
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=uo3RUD5v5Es&format=json
  - https://www.thingiverse.com/thing:2006756
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, input_output, make_it_yourself, making_tips_3d_printing, safety_notes

## 214 Dampers (rotary and linear soft-close dampers)

*brakes, dampers & speed control.* Parts filled with oil or air that slow a movement down, so lids, drawers and doors close gently instead of slamming

### What it is

- **plain_name**: A small sealed part filled with thick oil or air that pushes back harder the faster you move it, so a lid, drawer or door drifts shut gently instead of slamming
- **term**: Damper (dashpot): rotary damper and linear damper, as used for soft-close
- **aliases**: 
  - dashpot, viscous damper, hydraulic damper, oil damper
  - rotary damper, rotational damper, rotary speed limiter (McMaster-Carr's name), rotary dashpot
  - vane damper or partial rotation angle damper (limited swing, high torque)
  - continuous rotation damper, gear damper, barrel damper (spins endlessly, often with a small gear)
  - one-way damper, uni-directional damper (built-in one-way clutch)
  - linear damper, soft-close damper, drawer damper, door damper, cabinet door buffer, speed limiter
  - air dashpot, pneumatic damper, air damper
  - soft-close hinge, damped hinge, soft-down lid support, slow-close toilet seat hinge
  - door closer (a spring plus an oil damper)
  - BLUMOTION (Blum brand) soft-close
- **family**: brakes, dampers & speed control
- **other_families**: hinges & pivots, sliding, telescoping & linear motion, hydraulics, pneumatics & vacuum
- **one_liner**: A damper is a sealed oil- or air-filled part whose resistance grows with speed, fitted at a hinge or along a slide so that a falling lid, a sprung drawer or a closing door slows down and settles quietly instead of slamming.
- **complexity**: A small sealed assembly that acts as one unit. Rotary damper: a housing, a shaft with a rotor or vane, silicone oil, O-ring seals and a cap; often a small gear on the shaft, and sometimes a one-way clutch inside the rotor (TOK; ACE). Linear damper: a cylinder, a piston with a tiny hole or gap (orifice), a rod, oil or air, seals and often a return spring and a check valve (Wikipedia 'Dashpot'; Airpot). In furniture it is usually paired with a spring or catch that pulls the part shut.
- **how_it_works**: Moving the shaft or rod forces oil (or air) to squeeze through a narrow gap or hole, or shears a thin film of oil between a spinning rotor and the housing; this fluid friction turns the motion's energy into a little heat, and the faster you push, the harder it pushes back (Wikipedia 'Dashpot'; ACE rotary damper catalogue). A spring, or the lid's own weight, still does the closing: the damper only limits how fast it happens, so it cannot hold anything still. Many dampers work in one direction only, using a check valve (linear) or a one-way clutch (rotary), so the part opens freely and only closing is slowed (Wikipedia 'Dashpot'; TOK).

### Finder attributes

- **job**: slow it, stop it or keep its speed steady: slows a closing lid, drawer or door so it arrives gently and quietly, and soaks up bumps at the end of travel
- **motion**: rotate (rotary dampers: vane or partial-angle types work over a limited swing, basically 110 degrees for toilet-seat dampers, with other models up to 180 to 290 degrees; continuous types turn endlessly; TOK) or slide (linear dampers); a rotary damper with a gear on a rack also damps sliding motion (TOK)
- **degrees_of_freedom**: 1: the shaft turns or the rod slides along its axis; the damper only resists speed, it does not add or remove a way of moving
- **special_behaviour**: 
  - one-way (moves freely one way, locks the other): many versions damp only one direction, using a check valve (linear) or a one-way clutch (rotary), so the lid lifts or the door opens with no extra effort and only the closing is slowed (Wikipedia 'Dashpot'; TOK one-way rotary damper; Airpot push or pull dampers). It never locks: it only slows.
  - none of the other listed behaviours: its trick is speed-dependent resistance (force rises with speed), so slow motion is easy and fast motion is resisted
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it resists speed only, so a steady load still creeps through it; the housing and shaft are fixed to the two parts with screws, clips or a keyed (D or square) shaft
- **input_output**: Input: rotation of the shaft (rotary) or push or pull of the rod (linear). Output: a resisting torque or force that rises with speed; ideally force = c x speed, but real dampers follow force = c x speed to a power between 0.2 and 2 (Wikipedia 'Dashpot'). Rated torque is quoted at a set speed and temperature, e.g. 20 rpm and 23 °C (ACE). Gearing: a continuous damper driven through a gear multiplies its torque by the gear ratio and divides the lid's speed by the same ratio (TOK example: 11-tooth pinion on a 22-tooth segment gear doubles the torque). Efficiency: not the point; all the absorbed energy becomes heat. Shaft arrangement: in line with the hinge axis (rotary), or at right angles through a rack and pinion. Back-drivable: yes, it never locks; the load can always move it slowly.
- **power**: passive (no power needed): works purely from fluid friction; a spring or gravity does the moving
- **removability**: removable: screwed, clipped or pressed onto its shaft and housing mounts; clip-on soft-close units click onto some cabinet hinges (Blum). The damper itself is sealed and cannot be refilled or repaired (ACE FDT instructions).
- **reuse_cycles**: many times for fitting and removal; the damper's own working life is finite, e.g. 50,000 cycles with at least 80% of the original torque left for ACE FDT dampers (ACE), while glass-and-graphite air dashpots can last hundreds of millions of cycles (Airpot)
- **tools_needed**: Usually a screwdriver; none for clip-on and press-fit types; for a DIY oil damper a syringe, silicone oil, an O-ring and glue (Printables 'Rotary Damper v1.0')
- **seal**: none: it does not seal the joint it sits in. Internally it is sealed with O-rings and a cap to keep its oil in; over-rotating it can make it leak (TOK)
- **load**: Light to medium, and only in the direction of motion. Small rotary dampers range from about 0.002 N·m to over 5 N·m (TOK product selector); flat disc-brake types reach 2 to 8.7 N·m (ACE FDT). Small air dashpots work best up to about 30 lb (about 130 N) (Airpot). Weak points: sideways (radial) and end (axial) loads on the shaft, and use as a support or end stop; 'Do not use rotary dampers as supports' (ACE).
- **adjustable**: Sometimes. Air dashpots and door closers have a needle valve or adjusting screw that sets the orifice size (Airpot; Wikipedia 'Door closer'); McMaster-Carr sells adjustable-torque rotary speed limiters with a control knob. Most small rotary dampers have a fixed torque: change the damper, the gear ratio, or (in a DIY damper) the oil viscosity. Blum lets you switch off the soft-close on one hinge of a light door (Blum hinge specifications).
- **play_and_precision**: not applicable for locating; what matters is fitting it the right way round and at the right angle. A rotary damper must be installed at the closed position of the lid and in the correct turning direction (CW or CCW), or the lid feels heavy to open and slams shut (TOK installation mistakes). A one-way clutch type reacts immediately when the direction reverses (TOK). The shaft must not carry side or end loads, so the moving part needs its own hinge or guide (ACE).
- **access_needed**: not applicable: the housing screws to the fixed part and the shaft or rod to the moving part, usually at the hinge axis or inside the drawer runner
- **materials**: Housings in PBT plastic, zinc die-cast or steel with nylon shaft sleeves (TOK; ACE), filled with silicone oil because it is thick, very shear-resistant and keeps its viscosity over temperature (TOK uses 3,000 to 4.5 million mm²/s); air dashpots with a carbon-graphite piston in a borosilicate glass cylinder and no seals (Airpot). Printed dampers: PLA or PETG housings with an O-ring and RC-car silicone shock oil (Printables 'Rotary Damper v1.0'), or a PLA/PETG air piston wrapped in tape for a smooth, quiet fit (Printables 'Soft Close Door Damper').
- **maker_difficulty**: easy to fit a bought damper (screw it on, the right way round); moderate to make one: a printed air dashpot or a silicone-oil rotary damper works, but needs an O-ring, a leak-tight housing and some trial and error with oil thickness or orifice size

### Making it

- **processes**: 
  - off-the-shelf part: the usual route; rotary dampers, gear dampers, linear soft-close dampers, air dashpots, soft-close hinges and drawer runners
  - 3D print (FDM): brackets, adapters and gears to fit bought dampers; DIY air dashpots and silicone-oil rotary dampers (Printables examples)
  - CNC: machined housings and pistons for custom dampers
  - woodwork: fitting soft-close hinges, lid supports and door dampers into cabinets and boxes *(unverified parts omitted)*
- **print_in_place**: no: a working damper needs a separate rotor or piston, a seal and a fluid, so it is printed in parts and assembled (the Printables DIY rotary damper glues its lid on after filling with oil)
- **making_tips_3d_printing**: 1) Buying is easiest: design printed brackets or gears around a bought rotary or gear damper, fixing the housing to the fixed part and the shaft to the moving part (TOK). 2) Size it: needed torque = half the lid length x lid weight x cos(angle), largest when the lid is horizontal (ACE; TOK). Too little torque and it still slams; too much and a light lid stops half way (TOK). Gear a weak continuous damper up with a printed segment gear (TOK). 3) DIY silicone-oil rotary damper (Printables 'Rotary Damper v1.0', public domain): PLA housing and rotor, an 8 x 1.5 mm O-ring on the shaft, about 3 ml of silicone oil filled with a syringe, leave about 0.5 mm unfilled so glue can hold the lid, then superglue the lid; the maker used 30,000 cSt as the minimum and got good results with 500,000 cSt RC shock oil. 4) DIY air dashpot (Printables 'Soft Close Door Damper', CC BY-NC-ND): PLA or PETG, a pencil spring for return, one or two layers of office tape around the piston for a smooth, quiet seal, and a screw-in plug to set the resistance. 5) Make oil housings leak-tight: at least 3 to 4 perimeters, nozzle 5 to 10 °C hotter, 5 to 10% more extrusion, 0.15 to 0.2 mm layers, and 25 to 35% infill-perimeter overlap if it still leaks (Prusa 'Watertight prints'). 6) Keep the fluid clean and avoid dried residue in air dashpots (Airpot). 7) Never let the damper be the end stop: add a hard stop so the piston or vane never bottoms out (Airpot; ACE). 8) Carry the lid on its own hinge; the damper shaft should not take side loads (ACE). 9) Mark the direction and the closed position on printed mounts so it cannot be fitted wrongly (TOK suggests colour or groove poka-yoke).
- **off_the_shelf_parts**: Rotary damper (search 'rotary damper', 'rotary speed limiter', 'vane damper', 'lid damper', 'barrel damper', 'gear damper' or 'damper with gear' for CD-tray style parts, 'one-way rotary damper', 'continuous rotation damper', 'adjustable torque rotary damper'); linear damper (search 'linear damper', 'soft close damper', 'cabinet door damper' or 'door buffer', 'drawer damper', 'air dashpot', 'hydraulic speed limiter', 'adjustable air damper'); furniture versions: 'soft close hinge' (35 mm cup hinge), 'soft close adapter' or clip-on damper, 'soft close drawer slide', 'soft-down lid support' or 'soft close lid stay', 'soft close toilet seat hinge'; door closers; RC-car silicone shock oil (for DIY dampers, sold by viscosity in cSt).
- **rules_of_thumb**: 
  - Torque for a lid: T = (L / 2) x W x cos(theta), where L is the lid length from the pivot, W its weight and theta its angle above horizontal; the worst case is the horizontal position (ACE rotary damper catalogue p. 5; ACE FDT instructions; TOK torque calculator).
  - Choose by speed as well as torque: if the lid closes too fast pick the next higher torque, if too slow the next lower (ACE catalogue p. 5). Rated torques are measured at 20 rpm and 23 °C; torque rises with speed and falls as temperature rises (ACE).
  - Two dampers on one lid should have equal torque, or split the torque by the centre-of-gravity position (a lid whose centre of gravity is 50 mm off-centre on a 300 mm width: 4 N·m and 2 N·m instead of 3 and 3), or the lid twists (TOK).
  - Gearing a continuous-rotation damper: torque multiplies and speed divides by the gear ratio (TOK example: a small lid needing about 57.6 mN·m uses an 11-tooth pinion on a 22-tooth segment gear, so a damper of about 28.8 mN·m is enough; they chose a 30 mN·m model, and the lid closes at half the damper's speed).
  - Vane (partial-angle) dampers give higher torque in a smaller size but only over a limited angle (toilet-seat types about 110 degrees); continuous types spin endlessly but give less torque for their size (TOK).
  - Air dashpot pull damping works by vacuum, so it can never exceed atmospheric pressure (14.7 psi) x piston area, e.g. 4.5 lbf for a 0.309 in² piston (Airpot FAQ).
  - Never use a damper as a stop; leave clearance at both ends of travel, at least 1 mm for Airpot's Airpel (Airpot FAQ).
  - Real dampers follow force = c x speed^alpha with alpha between 0.2 and 2, not a perfectly straight line (Wikipedia 'Dashpot').

### When to use it

- **everyday_examples**: 
  - A soft-close toilet seat, slowed by a small rotary damper inside the hinge (TOK)
  - Soft-close kitchen cabinet hinges and drawer runners (Blum BLUMOTION; Wikimedia Commons hinge photo)
  - A piano fallboard or step-bin lid that lowers itself slowly (TOK)
  - A door closer on a public building door, which is a spring plus an oil damper with adjustable valves (Wikipedia 'Door closer')
- **when_to_use**: Use a damper when something closes by gravity or a spring and you want it to arrive slowly and quietly: box and case lids, printer or enclosure doors, flaps, drawers, toilet-seat style hinges, spring-rewind reels (a one-way rotary damper lets a tape measure pull out lightly and rewind slowly; TOK), and the end of travel of a slide or arm. Pick a rotary damper when you have a hinge axis and little room; a linear damper when there is space for a stroke or the motion is straight (TOK). Pick a one-way damper so opening stays easy. Dampers also make good mechanical timers (a viscous rotary timer releases a model glider's dethermaliser; Thingiverse) and settle wobbly or bouncing parts.
- **when_not_to_use**: Don't use a damper to hold a lid open or stop something drifting: it only slows motion and a steady load will still creep; use a friction hinge, a lid stay, a gas spring or a detent instead. Don't use it as an end stop or as the hinge itself (ACE; Airpot). For a mechanism that must run at a steady speed for a long time (a music box), use a speed governor. For smooth braking without fluids or wear, an eddy-current brake is an alternative. For soaking up vibration rather than slowing a motion, use rubber isolation mounts.
- **environment_limits**: Oil dampers get stiffer and slower in the cold and faster in the heat because oil viscosity changes: ACE rates its small dampers for 0 to 50 °C operation (storage -20 to 60 °C) and the FDT for -10 to +50 °C; Blum's soft-close hinges are designed for 65 to 85 °F (about 18 to 29 °C), with closing speed changing outside that range but no damage (ACE; Blum hinge specifications). Torque falls slowly with wear (at least 80% after 50,000 cycles for ACE FDT). Seals can leak if the damper is over-rotated (TOK). *(unverified parts omitted)*
- **safety_notes**: A heavy lid or flap can crush fingers while you fit or remove its damper: support it first (ACE). Where a failure could hurt someone, add a separate safety device, because a damper that loses its oil gives no warning until the lid slams (ACE; TOK). Gas springs and door closers store spring energy. Silicone oil is slippery if spilled; dispose of dampers as oil-containing parts (ACE).
- **common_failures**: 1) Fitted in the wrong direction: the lid is heavy to open and slams shut; fit the CW or CCW version for the closing direction (TOK). 2) Fitted at the wrong angle, so the working range does not match the lid's travel and it will not open fully or does not damp (TOK). 3) Turned beyond its angle limit: internal damage or oil leak and no damping (TOK). 4) Wrong torque: too low and it still slams, too high and a light door stops short (TOK; Blum lets you disable one hinge's damper on light doors). 5) Used as a stop or support, or side-loaded: the piston, vane or shaft breaks (Airpot; ACE). 6) Uneven dampers on a wide lid: it twists (TOK). 7) Cracked plastic mounting lugs or actuators (a broken tape-transport dashpot on Wikimedia Commons; a printed replacement actuator for drawer dampers on Printables). 8) Worn out: torque fades after tens of thousands of cycles; replace the unit (ACE). 9) DIY oil dampers leak at the lid or shaft: use an O-ring and watertight print settings (Printables; Prusa).
- **related**: 
  - Speed governor (fly fan, centrifugal governor): keeps a continuously running spring or weight drive at a steady speed, rather than slowing one closing movement
  - Eddy-current brake (magnetic brake): drag that grows with speed but with no fluid or contact; cannot hold still either
  - Friction hinge (torque hinge): constant friction that holds a lid at any angle, instead of speed-dependent resistance
  - Lid and flap stays (folding stay, friction stay): hold a lid open; some 'soft-down' stays include a damper
  - Self-closing hinges (spring hinge, rising butt hinge): provide the closing force that a damper then slows
  - Gas spring (gas strut): pushes a lid open or holds it up; some add small holes for extra damping (Wikipedia 'Gas spring')
  - Elastomer isolation mount (rubber bobbin mount): soaks up vibration with rubber rather than slowing a movement
  - Shock absorber: a heavy-duty linear damper used with a spring in vehicle suspensions (Wikipedia 'Shock absorber')

### Pictures, videos and models

- **links**: 
  - [Dashpot.svg (Wikimedia Commons, by Egmason)](https://commons.wikimedia.org/wiki/File:Dashpot.svg): Simplified cutaway diagram of a dashpot: a piston in a fluid-filled cylinder *(licence: CC BY-SA 3.0)*
  - [Hinge on kitchen cabinet with soft closing mechanism.jpg (Wikimedia Commons, by Shixart1985)](https://commons.wikimedia.org/wiki/File:Hinge_on_kitchen_cabinet_with_soft_closing_mechanism.jpg): Photo of a kitchen cabinet cup hinge with its soft-close damper *(licence: CC BY 2.0)*
  - [Revox B215 - tape transport - broken dashpot 01.jpg (Wikimedia Commons, by Retired electrician)](https://commons.wikimedia.org/wiki/File:Revox_B215_-_tape_transport_-_broken_dashpot_01.jpg): A small two-part plastic dashpot (about 18.5 mm across) from a cassette deck, with its cracked mounting lug *(licence: CC0)*
  - [Rotary Dampers | How Does It Work? (TOK, Inc.)](https://rotarydamper-tok-inc.com/technicalinformation-4/): Where a rotary damper mounts on a lid, CW and CCW types, and GIF animations of a lid closing with and without a damper *(licence: link only)*
  - [ACE Controls Rotary Dampers catalogue (revised 04/2017)](https://www.acecontrols.com/media/acedownloads/ACE_Catalog_Rotary_Damper_US_2017.pdf): Cutaway diagrams of a continuous rotary damper (rotor in silicone oil) and a vane damper, the lid-torque formula, torque vs speed and temperature curves, and mountings to avoid *(licence: link only)*
- **make_it_yourself**: 
  - [Rotary Damper v1.0 for Mark Ayton's Speedbrake and Flaps mechanism (Günther Tomschik, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1637307-rotary-damper-v10-for-mark-aytons-speedbrake-and-f): Printed silicone-oil rotary damper with a gear: PLA housing and rotor, 8 x 1.5 mm O-ring, about 3 ml of RC shock oil (30,000 to 500,000 cSt), lid superglued on *(licence: Creative Commons Public Domain (as listed by Printables))*
  - [Soft Close Door Damper (Settable Resistance) (Wilko_SLO, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/623995-soft-close-door-damper-settable-resistance): Printed air dashpot for cabinet doors with a pencil spring, tape-wrapped piston and a screw plug to set the resistance *(licence: CC BY-NC-ND)*
  - [Rotary damper viscous timer for free flight dethermalizer (concifederico, Thingiverse)](https://www.thingiverse.com/thing:4761649): 0.92 g printed viscous rotary damper used as a timer; a pin axle, a disk in a thick fluid (the maker found an epoxy component worked best) and a glued cap *(licence: CC BY 4.0)*
  - [HUANGYAN920/Mechanical interactive mechanism animations](https://huangyan920.github.io/Mechanical/): Browser animation of a hydraulic buffer damper (液压缓冲器, no. 146): a piston throttled through a small hole *(licence: MIT (code))*
- **diagram_idea**: Two panels: (left) a lid on a hinge with a rotary damper at the pivot, speed arrows short near the end and a curve of resisting torque rising with speed; (right) a linear damper cutaway showing oil squeezing through a tiny hole in the piston as it moves in, and a one-way check valve letting it spring back out freely.
- **sources**: 
  - https://en.wikipedia.org/wiki/Dashpot
  - https://en.wikipedia.org/wiki/Door_closer
  - https://en.wikipedia.org/wiki/Gas_spring
  - https://en.wikipedia.org/wiki/Shock_absorber
  - https://rotarydamper-tok-inc.com/mechanism/
  - https://rotarydamper-tok-inc.com/technicalinformation-1/
  - https://rotarydamper-tok-inc.com/technicalinformation-2/
  - https://rotarydamper-tok-inc.com/technicalinformation-4/
  - https://rotarydamper-tok-inc.com/technicalinformation-7/
  - https://rotarydamper-tok-inc.com/technicalinformation-10/
  - https://rotarydamper-tok-inc.com/technicalinformation-15/
  - https://rotarydamper-tok-inc.com/technicalinformation-17/
  - https://rotarydamper-tok-inc.com/technicalinformation-19/
  - https://rotarydamper-tok-inc.com/technicalinformation-21/
  - https://rotarydamper-tok-inc.com/torque-calculation/
  - https://www.acecontrols.com/media/acedownloads/ACE_Catalog_Rotary_Damper_US_2017.pdf
  - https://www.acecontrols.com/media/msimages/pdf/ACE_FDT_Operating-Mounting_EN_21_22_0019.pdf
  - https://www.airpot.com/faqs/
  - https://www.mcmaster.com/products/rotary-dampers/
  - https://www.mcmaster.com/products/dampers/
  - https://www.blum.com/us/en/products/motion-technologies/blumotion/overview/
  - https://cabinotch.us/media/wysiwyg/FAQ/BlumHingeSpecifications.pdf
  - https://help.prusa3d.com/article/watertight-prints_112324
  - https://api.printables.com/graphql/
  - https://www.thingiverse.com/thing:4761649
  - https://huangyan920.github.io/Mechanical/
  - https://commons.wikimedia.org/wiki/File:Dashpot.svg
  - https://commons.wikimedia.org/wiki/File:Hinge_on_kitchen_cabinet_with_soft_closing_mechanism.jpg
  - https://commons.wikimedia.org/wiki/File:Revox_B215_-_tape_transport_-_broken_dashpot_01.jpg

### Other info

- **Fields with unverified parts:** environment_limits, processes

## 215 Elastomer isolation mount (rubber bobbin mount, isolator grommet)

*brakes, dampers & speed control.* Rubber blocks, grommets or bobbins between a part and its frame that soak up vibration and noise, as under 3D-printer motors and fans

### What it is

- **plain_name**: A squashy rubber block, ring or button placed between a buzzing part (a motor, fan or pump) and the frame it is bolted to, so the shaking and humming soak into the rubber instead of spreading through the whole machine
- **term**: Elastomer vibration isolation mount (anti-vibration mount): rubber bobbin (cylindrical) mount, sandwich mount, isolator grommet or bushing
- **aliases**: 
  - anti-vibration mount, AV mount, vibration isolator, vibration-damping mount, shock mount
  - rubber bobbin, bobbin mount, cylindrical mount (Type A male-male, B male-female, C female-female, D single male, E single female)
  - sandwich mount, rubber-metal mount, bonded rubber mount, silentblock or silent block
  - isolator grommet, vibration-damping grommet, rubber grommet, rubber bushing, isolation bushing
  - fan mount, silicone fan pin, fan gasket, anti-vibration fan screw
  - stepper motor damper, NEMA 17 damper (a rubber layer between two metal plates)
  - rubber feet, anti-vibration feet, bumper, rubber buffer, levelling mount
  - engine mount, motor mount, suspension bushing (vehicles)
  - gel pad, foam pad, Sorbothane (brand) pad or mount
  - soft mount (drones and flight controllers)
- **family**: brakes, dampers & speed control
- **other_families**: compliant mechanisms & flexures, seals & pass-throughs
- **one_liner**: An elastomer isolation mount holds a part to its frame through a piece of rubber or similar springy, lossy material, so vibration and shock from the part (or from the frame) are soaked up instead of being passed straight through as noise and shaking.
- **complexity**: Single piece or a few parts. Grommet: one moulded rubber ring that sits in a hole, with a screw (sometimes with a metal sleeve or shoulder washer) through its middle. Bobbin or sandwich mount: a rubber cylinder bonded to two metal end plates with threaded studs or holes (AVMR; AV Products). Stepper damper: two metal plates joined by a rubber layer (Let's Print 3D). Pads and feet: a rubber, gel, foam or printed TPU piece under the part.
- **how_it_works**: The rubber acts as a soft spring, so the part and its mount form a mass-on-a-spring with a low natural frequency; vibration well above that frequency is poorly transmitted, because the rubber flexes instead of passing the force on (Penn State 'Vibration Isolation'; Wikipedia 'Vibration isolation'). Rubber also turns some of the motion into heat (damping), which stops the part bouncing wildly when it passes through its natural frequency during start-up (Barry Controls isolator guide). The catch: close to or below the natural frequency the mount does nothing or even makes the shaking worse, and any rigid path around it (a tight screw, a stiff cable or pipe) bypasses it.

### Finder attributes

- **job**: 
  - join and hold: fixes a motor, fan, pump, drive or circuit board to a frame, with rubber in between
  - slow it, stop it or keep its speed steady: soaks up vibration and shocks (vibration isolation and damping), so less shaking and noise reach the frame, table or floor
- **motion**: flex: only small elastic movements, usually well under a few millimetres, in all directions; softer sideways (shear) than along the squash direction (compression) (Barry Controls)
- **degrees_of_freedom**: 0 intended: it is meant to hold the part in place; in practice the rubber allows small springy movements in all 6 directions, which is exactly what isolates vibration
- **special_behaviour**: 
  - none of the listed behaviours in its basic form: its trick is being springy and lossy, so it filters out fast vibration while still holding the part
  - fail-safe or breakaway: 'fail-safe' mounts interlock their metal parts so the load stays captive even if the rubber tears (McMaster-Carr fail-safe bolt-down mounts); plain bobbins and grommets are not fail-safe
- **holding_principle**: 
  - material bond (glue, solvent or melting): bobbin and sandwich mounts have the rubber bonded to their metal end plates (AVMR)
  - shape (the parts interlock; form-fit): a grommet's groove grips the edge of its hole
  - friction or clamping (force-fit): bolts and nuts clamp the mount to each part
- **input_output**: not applicable (it does not pass on motion; it is meant to block vibration)
- **power**: passive (no power needed)
- **removability**: removable: bolted, screwed, pushed in or stuck on; bonded bobbins are replaced as a whole unit
- **reuse_cycles**: many times, though rubber ages, takes a permanent squash (compression set) and grommets can tear when levered out, so worn mounts should be replaced
- **tools_needed**: Screwdriver or spanners for bolted mounts and stepper dampers; none for push-in fan pins and stick-on pads; pliers to pull grommets into holes
- **seal**: none: it is not meant to seal, although a snug rubber grommet does close the gap around a screw or cable
- **load**: Light to heavy depending on size: standard bobbins cover about 1 kg to 2,500 kg static load (AVMR). Strong in compression, softer in shear, and not meant for tension: bobbins 'are not intended for use in tension' and will fail early if hung from (AVMR). Keep continuous strain below about 10 to 15% in compression and 25 to 50% in shear (Barry Controls).
- **adjustable**: Not usually. Stiffness is set by the rubber hardness (durometer), the shape (waisted and hollow bobbins deflect more than plain cylinders; AVMR) and the number of mounts. Over-tightening a screw through a grommet or strap squashes it solid and cancels the isolation (ArduPilot: don't fasten straps 'so securely that it interferes with the damping'). Levelling mounts add height adjustment.
- **play_and_precision**: Noticeable compliance by design: the mounted part can move slightly relative to the frame, so it tolerates small misalignment but loses positioning stiffness. That is fine for fans, pumps and printer X/Y motors, but a damped extruder motor can cause under-extrusion, ringing and stringing (Let's Print 3D), and a flight controller's mount should not allow more movement than the vibration amplitude (ArduPilot).
- **access_needed**: usually both sides: each part needs its own bolt, nut or stud; push-in fan pins, grommets with a screw from one side, and stick-on pads or feet can be fitted from one side
- **materials**: Natural rubber (the standard for bobbins, 35 to 90 Shore A), neoprene (chloroprene), EPDM, nitrile, butyl, silicone and polyurethane; metal parts usually zinc-plated mild steel (AVMR; AV Products). Viscoelastic urethane such as Sorbothane (brand) for soft pads (Wikipedia 'Sorbothane'). Thermoplastic damping compounds for fan mounts (E-A-R/Aearo ISODAMP). Makers also use printed TPU, squash balls, foam and even a concrete paver on foam under a printer (Hackaday; Printables).
- **maker_difficulty**: easy: buy standard mounts, grommets or stepper dampers and bolt them in, or print TPU gaskets and feet; choosing a mount that is soft enough for a light part (so it actually isolates) takes some trial and error

### Making it

- **processes**: 
  - off-the-shelf part: bobbin, sandwich and bolt-down mounts, grommets, bushings, fan pins, stepper dampers, rubber feet, Sorbothane pads
  - 3D print (FDM): TPU gaskets, feet, grommets and pads; springy PETG feet; holders for squash balls or bought dampers (Printables examples)
  - woodwork: cutting rubber, cork or foam pads for machine bases (Wikipedia 'Vibration isolation' lists cork, dense foam and rubber sheets) *(unverified parts omitted)*
- **print_in_place**: partly: a TPU gasket, foot or grommet prints as one working piece, but it needs screws, washers or a rigid holder to be fitted; bonded rubber-metal bobbins cannot be printed
- **making_tips_3d_printing**: 1) Print isolators in a flexible filament such as TPU; a 2 mm thick TPU fan gasket printed at 0.2 mm layers with 100% infill is a simple starting point (Printables 'Fan Gasket 40mm for TPU'). 2) Softer isolates better: make the part flex by shape (thin walls, hollow or waisted forms deflect more than solid cylinders; AVMR) or, for rigid filaments, use a springy hollow shape; one popular printed foot uses 3 perimeters, no infill and no top or bottom layers in PETG, noting PLA is stiffer (Printables 'Anti-vibration feet'). 3) Size it for the load: aim for roughly 10 to 15% squash under the part's weight, not more, or it will creep (Barry Controls); squash-ball feet needed extra supports to stop the balls deforming over time (Printables 'SquashBall ... Vibration Damper'). 4) Don't short-circuit it: a screw clamped hard through a grommet, a tight cable, a rigid bracket or a stiff pipe bypasses the rubber (Penn State 'Vibration Isolation'; ArduPilot); use shoulder screws or sleeves so the screw stops before squashing the rubber, and leave slack loops in wires. 5) Stepper motors: dampers on X and Y motors are fine, but don't isolate the extruder motor, and add a heatsink because the rubber cuts heat flow into the frame (Let's Print 3D). 6) Very light parts need very soft mounts: a drone flight controller weighs under 2 oz (about 57 g), while most off-the-shelf pad and stud mounts are designed for 5 to 10 times that mass (ArduPilot). 7) Mount the whole machine on isolators plus mass if the table is the noise source: foam plus a concrete paver cut a printer's noise by almost 8 dBA (Hackaday on CNC Kitchen).
- **off_the_shelf_parts**: Search for: 'anti-vibration mount', 'rubber bobbin' or 'cylindrical rubber mount' (Type A male-male, B male-female, C female-female, D single male, E single female; metric M3 to M20 threads), 'waisted bobbin', 'sandwich mount', 'bolt-down mount' and 'fail-safe mount', 'vibration-damping grommet', 'rubber grommet', 'isolation bushing', 'rubber bumper' or 'rubber buffer', 'levelling mount', 'wire rope isolator', 'spring mount' (McMaster-Carr; AV Products; AVMR); 'NEMA 17 stepper motor damper'; 'anti-vibration fan pins', 'silicone fan mount' or 'fan gasket'; 'hard drive silicone grommets'; 'Sorbothane (brand) pad' by durometer; 'anti-vibration gel pad' or 'flight controller soft mount' (drones); squash balls (a maker favourite for printer feet).
- **rules_of_thumb**: 
  - Isolation only starts when the vibration frequency is more than about 1.4 times (the square root of 2) the mount's natural frequency; below that the mount passes on or amplifies the vibration, so aim for the natural frequency to be as far below the disturbing frequency as possible (Penn State 'Vibration Isolation'; Barry Controls).
  - Natural frequency from static squash: 0.5 in (12.7 mm) gives 4.43 Hz, 1 in (25.4 mm) gives 3.13 Hz (Penn State table); in general about 15.8 / square root of (squash in mm) Hz, so 1 mm of squash is about 16 Hz and 4 mm about 8 Hz (converted from the same formula). Rubber's dynamic stiffness is higher than its static stiffness, so the real natural frequency is somewhat higher than this estimate (Barry Controls).
  - Damping ratio is about 0.05 to 0.10 for rubber versus 0.005 to 0.01 for steel springs (Penn State); natural rubber and neoprene about 0.05, butyl about 0.12, a high-damping silicone about 0.15 (Barry Controls). More damping calms the start-up resonance but slightly reduces isolation at high frequency (Wikipedia 'Vibration isolation').
  - Don't continuously strain elastomers more than 10 to 15% in compression or 25 to 50% in shear, or they creep (Barry Controls).
  - Soft viscoelastic pads (Sorbothane): maximum static compression depends on shape factor (loaded area of one face divided by the free bulging side area): shape factor up to 1.0 allows 20%, 1.0 to 1.6 allows 10%, 1.6 to 2.0 allows 5%, above 2.0 only 3% (Sorbothane 'How to Choose the Correct Durometer and Shape').
  - Load bobbins in compression or compression plus shear, never tension; use a bracket to turn a hanging load into a compressive one (AVMR).
  - Use equally loaded mounts spread wide, keep the machine level, restrain sideways sway with snubbers, and provide a fail-safe support in case a mount fails (Penn State).

### When to use it

- **everyday_examples**: 
  - Rubber stepper-motor dampers and anti-vibration feet on 3D printers (Let's Print 3D; Printables)
  - Silicone grommets and fan pins that hold hard drives and fans in quiet PCs (Wikipedia 'Grommet'; Wikimedia Commons 'Silent PC-silicone grommets.JPG')
  - Car engine mounts and suspension bushings; Chrysler's 1932 Plymouth made rubber engine mounts famous (Wikipedia 'Bushing (isolator)')
  - Rubber feet under washing machines, pumps and air-conditioning units (Wikipedia 'Vibration isolation')
- **when_to_use**: Use it when something that hums, buzzes or shakes (a motor, fan, pump, compressor, speaker or 3D-printer stepper) makes a panel, frame or table ring and amplify the noise, or when something delicate (a drone's flight controller, a camera, a hard drive, a sensor) needs protecting from vibration and knocks. It is cheap, passive and easy to retrofit: swap a rigid screw fixing for a grommet or bobbin, or stand the machine on rubber feet or foam. It works best against fast vibration (tens of hertz and above) and when the part sits on the mount's weight rating.
- **when_not_to_use**: Don't put rubber in a path that must stay stiff and precise: a printer extruder, a leadscrew nut, a robot joint or a camera that must not wobble (Let's Print 3D; ArduPilot: do not shock-mount a drone's motor arms). Don't use it to slow a lid or drawer; use a rotary or linear damper. Don't hang loads from bobbins in tension (AVMR). For very low-frequency vibration (a few hertz, such as a building or floor sway), rubber is too stiff; use springs, air springs or a heavy inertia block (Penn State). For isolating a shaft drive, use a flexible coupling with an elastomer spider instead.
- **environment_limits**: Heat, cold, oil and sunlight matter (Barry Controls table): natural rubber and neoprene are rated to about 180 °F (82 °C), silicone to about 300 °F (149 °C); natural rubber and neoprene get about 10 times stiffer at -65 °F (-54 °C) while silicone stiffens less than 2 times; natural rubber has poor oil, ozone and sunlight resistance, neoprene good to very good, silicone excellent for ozone and sunlight. Soft gels can fail in heat: ArduPilot notes one gel pad failing above 100 °F (38 °C). Rubber creeps and takes a permanent set under constant load if over-strained (Barry Controls; Printables squash-ball feet). Stepper dampers make motors run hotter because the rubber blocks heat flow into the frame (Let's Print 3D).
- **safety_notes**: If the rubber tears or perishes, a plain mount lets go: use fail-safe (captive) mounts or a mechanical backstop for anything heavy, overhead or hanging (McMaster-Carr fail-safe mounts; Penn State 'fail safe operation'). Never hang loads from bobbins in tension (AVMR). Motors on rubber can overheat; check their temperature and add heatsinks (Let's Print 3D). A 'wobbly' mounted machine can walk or tip if the mounts are too soft or too narrow; restrain sideways movement (Penn State).
- **common_failures**: 1) Short-circuited isolation: a rigid conduit, pipe, stiff cable, bracket or fully tightened screw bypasses the rubber (Penn State shows a conduit bypassing a chiller's isolators; ArduPilot warns against over-tight straps). 2) Wrong stiffness: too stiff for a light part (most off-the-shelf mounts suit masses 5 to 10 times heavier than a flight controller; ArduPilot) or so soft the part wobbles and bottoms out ('too much is just as bad as too little'; ArduPilot). 3) Running near resonance, so the vibration is amplified instead of reduced (Penn State). 4) Creep and permanent set from overloading, so the part sags and the mount hardens (Barry Controls; Printables squash-ball feet). 5) Tearing when bobbins are loaded in tension (AVMR). 6) Rubber perishing from heat, oil, ozone or sunlight (Barry Controls table); a failed rubber bush on an outboard propeller is a typical example (Wikimedia Commons 'Propeller rubber bush failed.jpg'). 7) Print defects when the extruder motor is isolated, and overheated steppers (Let's Print 3D).
- **related**: 
  - Dampers (rotary and linear soft-close dampers): oil- or air-filled parts that slow one movement; isolation mounts filter continuous vibration with rubber
  - Jaw coupling (spider coupling): an elastomer spider between two shaft hubs that also soaks up shocks and vibration in a drive line
  - Flexible beam coupling (helical-slot coupling): isolates misalignment in a shaft but passes vibration on more than rubber does
  - Series-elastic coupling: a deliberately springy link in a robot drive, used to measure and control force rather than to block vibration
  - Grommets in cable glands and strain reliefs: the same rubber ring used to protect and seal a cable passing through a panel
  - Crush ribs and compliant press fits: springy features that hold parts snugly rather than isolate them
  - Double-sided foam tape (acrylic foam tape): bonds parts while adding some damping
  - Spring mounts, wire-rope isolators and air springs: for heavier loads or lower frequencies than rubber can reach (McMaster-Carr; Penn State)

### Pictures, videos and models

- **links**: 
  - [Silent PC-silicone grommets.JPG (Wikimedia Commons, by DonES)](https://commons.wikimedia.org/wiki/File:Silent_PC-silicone_grommets.JPG): Silicone grommets isolating a hard drive from a PC case (Antec P180) *(licence: CC BY-SA 3.0 / GFDL)*
  - [Schwingungsdämpfer Aufbau.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Schwingungsd%C3%A4mpfer_Aufbau.jpg): Cutaway of a rubber anti-vibration mount: metal cover, natural rubber core, sleeve with tear-off protection and metal base plate *(licence: CC BY-SA 4.0)*
  - [Passvib3.jpg (Wikimedia Commons, by Sdv1120)](https://commons.wikimedia.org/wiki/File:Passvib3.jpg): Transmissibility curves for different amounts of damping: the resonance peak and the isolation region above it (used in Wikipedia 'Vibration isolation') *(licence: CC BY-SA 3.0)*
  - [Home-Built Vibration Isolation Platform using Squash Balls.jpg (Wikimedia Commons, by Quirkipedia)](https://commons.wikimedia.org/wiki/File:Home-Built_Vibration_Isolation_Platform_using_Squash_Balls.jpg): A maker-style isolation platform standing on squash balls *(licence: CC0)*
  - [Seriously the BEST $2 3D printer upgrade! (CNC Kitchen, YouTube; embedded in Hackaday's 20 May 2020 article)](https://www.youtube.com/watch?v=y08v6PY_7ak): Noise and print tests of a 3D printer on its stock feet versus on foam and a concrete paver *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Fan Gasket 40mm for TPU (br34ker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/435170-fan-gasket-40mm-for-tpu): 2 mm TPU gasket between a 40 mm fan and its case to stop vibration transfer; sister models for 30, 80, 120 and 140 mm fans; STEP file included to change thickness *(licence: CC BY)*
  - [Anti-vibration feet for Prusa MK3/S/S+, MK4 and Prusa Mini/+ (schuetzi99, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1727-anti-vibration-feet-for-prusa-mk3ss-mk4-and-prusa-): Springy printed feet (3 perimeters, no infill, PETG preferred) that stop a printer's vibration reaching a hollow table; optional bicycle inner-tube insert against slipping *(licence: CC BY-NC-ND)*
  - [SquashBall MK3s/MK3s+/MK4 Vibration Damper V3.0 (Rui do Carmo, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/59947-squashball-mk3smk3smk4-vibration-damper-v30): PETG clips that stand a printer frame on squash balls; notes on adding extra supports to reduce the balls' creep *(licence: CC BY-NC)*
  - [Sorbothane Design Guide Vibration Calculator (Sorbothane, Inc.)](https://www.sorbothane.com/technical-data/design-guide-calculators/vibration-calculator/): Online calculator: enter pad shape, size, durometer, load per isolator and vibration frequency to get static deflection, natural frequency, transmissibility and percent isolation, with shape-factor warnings *(licence: free online tool (link only))*
- **diagram_idea**: Left: a motor bolted straight to a thin panel with big vibration arrows spreading into the panel; right: the same motor on four rubber bobbins with the arrows shrinking, plus a small transmissibility graph showing a peak at the natural frequency, a crossover at 1.4 times it, and falling transmission beyond (the 'isolation zone').
- **sources**: 
  - https://en.wikipedia.org/wiki/Vibration_isolation
  - https://en.wikipedia.org/wiki/Bushing_(isolator)
  - https://en.wikipedia.org/wiki/Grommet
  - https://en.wikipedia.org/wiki/Sorbothane
  - https://www.vibrationdata.com/tutorials_alt/vibiso12.pdf
  - https://hutchinsonai.com/wp-content/uploads/2020/01/IsolatorsSelection.pdf
  - https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/08/Barry-isolators-selection-guide.pdf
  - https://www.sorbothane.com/technical-data/articles/how-to-choose-the-correct-sorbothane-durometer-and-shape/
  - https://www.sorbothane.com/technical-data/design-guide-calculators/vibration-calculator/
  - https://avmr.com/blogs/resources/what-are-rubber-bobbin-mounts
  - https://www.avproductsinc.com/cylindrical-bobbin/mounts.html
  - https://www.mcmaster.com/products/vibration-damping-mounts/
  - https://www.rathbun.com/e-a-r/fan-mounts
  - https://ardupilot.org/copter/docs/common-vibration-damping.html
  - https://letsprint3d.net/how-to-install-stepper-motor-dampers-ender-3/
  - https://hackaday.com/2020/05/20/bricking-your-3d-printer-in-a-good-way/
  - https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=y08v6PY_7ak&format=json
  - https://api.printables.com/graphql/
  - https://commons.wikimedia.org/wiki/File:Silent_PC-silicone_grommets.JPG
  - https://commons.wikimedia.org/wiki/File:Schwingungsd%C3%A4mpfer_Aufbau.jpg
  - https://commons.wikimedia.org/wiki/File:Passvib3.jpg
  - https://commons.wikimedia.org/wiki/File:Home-Built_Vibration_Isolation_Platform_using_Squash_Balls.jpg
  - https://commons.wikimedia.org/wiki/File:Propeller_rubber_bush_failed.jpg

### Other info

- **Fields with unverified parts:** processes

## 294 Tuned mass damper (vibration absorber)

*brakes, dampers & speed control.* A weight on a spring tuned to the same shaking rate as the part it hangs on, so it swings the opposite way and cancels the vibration

### What it is

- **plain_name**: A weight on a spring (or a weight hanging like a pendulum) fixed to something that shakes, tuned to wobble at the same rate so that it swings against the shaking and calms it down
- **term**: Tuned mass damper (TMD), also called a dynamic vibration absorber
- **aliases**: 
  - harmonic absorber, seismic damper (Wikipedia 'Tuned mass damper')
  - mass damper (the term used for the Renault Formula 1 device, Wikipedia); 'batteur' on the Citroen 2CV wheels (Wikipedia)
  - pendulum damper or pendulum tuned mass damper (Taipei 101's 'wind damper'; Maurer MTMD-P)
  - Stockbridge damper: the dumbbell-shaped tuned mass damper hung on power lines (Wikipedia 'Stockbridge damper')
  - tuned liquid damper or tuned liquid column damper: a water tank that sloshes instead of a solid weight (Wikipedia)
  - harmonic damper, harmonic balancer, crankshaft damper or torsional damper: the rubber-and-ring version on a car engine's crankshaft pulley; centrifugal pendulum absorber is a related rotating type (Wikipedia 'Harmonic damper' and 'Tuned mass damper')
  - Schwingungstilger (German; Wikimedia Commons file name) *(unverified parts omitted)*
- **family**: brakes, dampers & speed control
- **one_liner**: An extra weight on a spring, fixed to a part or structure that keeps shaking at one particular rate, tuned so that it swings the opposite way to the shaking and soaks up its energy, making the structure move much less while weighing much less than it.
- **complexity**: A few parts: the extra weight (the tuned mass, e.g. a steel block, bolts and nuts, concrete or a water tank), a spring that lets it move (a coil spring, a springy rod or steel cable, a leaf of spring steel or plastic, or a pendulum cord), something that soaks up energy (a damping element: rubber, friction plates, an oil dashpot or a magnet near metal), and a clamp or bracket that fixes it to the vibrating part (Wikipedia 'Tuned mass damper'; Maurer; Wikipedia 'Stockbridge damper').
- **how_it_works**: Every springy structure has a rate at which it likes to wobble (its natural frequency, or resonance), and if something pushes it at that rate the wobble grows large. The tuned mass damper is a second, much smaller wobbler whose own rate is set (tuned) to match. When the structure shakes at that rate, the small weight swings strongly and out of step with it (about 180 degrees out of phase), so its spring pulls the structure back against its own motion, while the damping element turns the energy into heat (Wikipedia 'Tuned mass damper'; Gavin, Duke notes). The catch is that the pair now has two new resonances, one just below and one just above the old one, so the damper only helps over a band of frequencies around its tuning and can make things slightly worse well outside it (Wikipedia).

### Finder attributes

- **job**: slow it, stop it or keep its speed steady: calms down shaking, swaying or ringing at one troublesome rate (a resonance) in a frame, panel, cable, bridge, building or engine
- **motion**: multiple: the added weight moves back and forth relative to its mount, by sliding on springs, swinging as a pendulum, or bending on a springy rod or cable (Maurer MTMD-V, MTMD-H, MTMD-P; Wikipedia 'Stockbridge damper'). Its travel is small: millimetres in a small damper, though Taipei 101's 660-tonne ball swung 1 m in a typhoon (Wikipedia 'Taipei 101').
- **degrees_of_freedom**: 1 per direction it is tuned for: the weight moves relative to the structure in one direction (a weight on a leaf spring or springs). A pendulum can swing in any horizontal direction, so it has 2. Each one adds a new way for the whole structure to vibrate (a second 'normal mode'), which is why the old single peak splits into two (Wikipedia; Gavin, Duke notes).
- **special_behaviour**: 
  - none: it does none of the listed tricks. Its clever side is tuning: a weight on a spring that resonates at the same rate as the structure moves out of step with it and cancels most of the motion at that rate, using a weight much lighter than the structure (Wikipedia 'Tuned mass damper')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it doesn't join parts. Its weight is held by spring force (springs, a springy cable or a pendulum), and the whole unit is bolted or clamped to the vibrating part (Maurer; Wikipedia 'Stockbridge damper')
- **input_output**: not applicable (it does not pass motion on; it soaks up vibration at one frequency)
- **power**: passive (no power needed). Adaptive versions that adjust their tuning and damping while running need power and sensors; Maurer says these give 60-80% better vibration reduction than passive ones (Maurer). *(unverified parts omitted)*
- **removability**: removable: it is bolted or clamped on and can be taken off or moved; Stockbridge dampers are even fitted to live power lines with insulated hot-stick tools (Wikipedia 'Stockbridge damper').
- **reuse_cycles**: many times: nothing is damaged by removing and refitting it, though it must be retuned if moved to a different structure
- **tools_needed**: A spanner or screwdriver to mount it, plus something to measure the shaking rate: Practical Engineering's model used an ADXL345 accelerometer board and an Arduino (Instructables 'Tuned Mass Damper Demonstration'); a stopwatch is enough for slow sway (measure the period). For printed versions, a tap to thread holes for bolts used as weights (Printables 'Stockbridge Damper').
- **seal**: none
- **load**: light to heavy, depending on size: it carries no useful load, only its own weight plus the back-and-forth (inertial) force of the swinging mass. The mount must hold that force without loosening (shear and pull at the fixing). Building dampers are huge: Taipei 101's is 660 tonnes (Wikipedia 'Taipei 101'); maker ones are a few bolts or nuts (Printables 'Stockbridge Damper').
- **adjustable**: yes, and it has to be: tune it by changing the weight (add or remove washers or nuts), moving the weight along a springy arm, changing the spring, or changing a pendulum's length (a pendulum's rate depends only on its length; Maurer MTMD-P, Wikipedia 'Pendulum (mechanics)'). Commercial dampers allow about plus or minus 10% frequency adjustment with springs and up to plus or minus 15% with pendulums (Maurer). Damping is adjusted by changing the rubber, friction or oil element.
- **play_and_precision**: not applicable for locating parts. What matters is tuning accuracy: an undamped absorber is 'very sensitive to mis-tuning errors' and only suits a precisely known, unchanging forcing frequency; a damped one works over a wider band but with less cancellation at the centre (Gavin, Duke CEE 541 notes).
- **access_needed**: one side only (blind): it is bolted or clamped to the outside of the vibrating part, at the spot that moves most
- **materials**: Weights: steel, cast iron or concrete blocks (Wikipedia), steel plates welded into a ball (Taipei 101), metal bells on Stockbridge dampers, or water in a tank. Springs: steel coil springs (Maurer MTMD-V/H), steel messenger cable (Stockbridge), pendulum cables. Damping: rubber bands or blocks, friction plates (Maurer MTMD-P), hydraulic dashpots (Wikimedia 'Tuned mass damper.gif'). For makers: a printed frame or springy arm in PETG or similar plus steel bolts, nuts or washers as the weight (Printables 'Stockbridge Damper'; Microsoft Hacking STEM model uses washers on a dowel pendulum).
- **maker_difficulty**: moderate: easy to build (a weight on a springy arm or a pendulum), but it only works if tuned, so you need to measure the problem frequency and adjust by trial and error

### Making it

- **processes**: 
  - 3D print (FDM): the springy arm, frame or holder, with bolts, nuts or washers added as the weight (Printables 'Stockbridge Damper' for 3D-printer panel noise)
  - woodwork: demonstration models of a swaying 'building' with a pendulum damper (Practical Engineering and Microsoft Hacking STEM Instructables)
  - off-the-shelf part: Stockbridge dampers for cables, commercial tuned mass dampers for buildings, bridges and machines (Maurer), and crankshaft harmonic dampers for engines (Wikipedia 'Harmonic damper')
- **print_in_place**: partly: the springy arm and holder can be one printed piece, but it needs added metal weights (bolts, nuts or washers) and usually a damping element (Printables 'Stockbridge Damper' adds M6 bolts as weights)
- **making_tips_3d_printing**: 1) Measure first: find the rate at which the part rings or sways before designing anything. Practical Engineering locked the damper, set the model swaying and worked out its natural period from accelerometer data (ADXL345 board and Arduino; Instructables). A slow sway can be timed with a stopwatch. 2) Use printed plastic only for the spring and holder, and metal for the weight: the printed Stockbridge damper on Printables has side holes tapped M6 for bolts as weights, and its author warns to clamp the part while tapping to stop layers splitting (Printables 'Stockbridge Damper'). 3) Build in adjustment, because you will not hit the tuning first time: a slot or threaded rod so the weight can slide along the arm, nuts that can be added or removed, or an adjustable pendulum length. Commercial dampers allow about plus or minus 10-15% (Maurer). 4) For a pendulum damper, the rate depends only on length: length in metres is about (period in seconds) squared divided by 4, so a 1 s sway needs about a 25 cm pendulum (Wikipedia 'Pendulum (mechanics)', rule of thumb section). 6) Give it some damping, or it will create two new sharp resonances either side of the old one: rubber or TPU pads, foam, friction, or a magnet close to a copper or aluminium plate (eddy-current damping) (Wikipedia; Gavin, Duke notes). 7) Avoid PLA for the spring if the part stays warm or under constant load: PLA starts to soften at about 60 C and PETG at about 80 C (CNC Kitchen), and PLA creeps under constant stress (Thrinter), which slowly changes the tuning; 8) Fix it rigidly to the spot that moves most (an antinode); Stockbridge dampers are placed at the nearest antinodes either side of a clamp (Wikipedia 'Stockbridge damper'). 9) Test with and without: lock the weight (tape or a wedge) and compare, as in the Practical Engineering demo. 10) Expect a modest gain: the printed Stockbridge damper's author says it is 'purely empirical' and 'reduced noise for my printer some' (Printables). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search terms: 'tuned mass damper', 'dynamic vibration absorber', 'Stockbridge damper' (vibration damper for overhead conductors), 'harmonic balancer' or 'crankshaft damper' (engines), 'pendulum damper'. Industrial makers such as Maurer build custom TMDs (MTMD-V vertical, MTMD-H horizontal, MTMD-P pendulum) (Maurer). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Simple (undamped) tuning: make the damper's own natural frequency, from the square root of spring stiffness divided by mass, equal to the forcing frequency. It then stops the structure's motion at that frequency, but it is 'very sensitive to mis-tuning errors' and only suits a precisely known frequency that does not vary (Gavin, Duke CEE 541 'Tuned Mass Dampers', eq. 6 and text).
  - Best tuning for a damped damper (Den Hartog): set the damper's natural frequency to 1/(1 + mass ratio) times the structure's natural frequency, where the mass ratio is damper mass divided by structure mass; e.g. about 0.95 times for a 5% mass (Gavin, Duke notes, eq. 10; 0.95 worked from the formula).
  - With that tuning and the best damping, the worst-case motion is the square root of (2 + mass ratio)/(mass ratio) times the static deflection: about 6.4 times for a 5% mass and 3.3 times for a 20% mass (Gavin, Duke notes, eq. 11; numbers worked from the formula). A heavier damper therefore gives a bigger reduction.
  - Best damping (Den Hartog, in Gavin's notation where damping is measured against the main structure): damping ratio = square root of (3 x mass ratio cubed)/(8 x (1 + mass ratio) cubed) (Gavin, Duke notes, eq. 12). In practice the damper needs moderate damping: too little leaves two sharp peaks, and infinite damping simply locks the weight to the structure (Gavin, Duke notes, figures 3-4).
  - Bigger mass ratio (damper mass divided by the structure's modal mass) gives more vibration reduction, a wider working band and less travel of the damper mass (Maurer). Slender structures have only about 0.5-1% damping of their own, which is why they need one (Maurer).
  - A damper of 10% of the main mass cut the peak response in Wikipedia's example from 9 to 5.5 units, but the system then vibrated somewhat more than before at frequencies well below and well above the old peak (Wikipedia 'Tuned mass damper').
  - Pendulum dampers are tuned by length, not weight: length (m) is about period (s) squared divided by 4 (Wikipedia 'Pendulum (mechanics)'; Maurer: 'Vibration frequency is determined by the length of the pendulum').
  - Put it where the structure moves most: Stockbridge dampers go at the nearest antinodes (points of largest movement) either side of a clamp, normally two per span (Wikipedia 'Stockbridge damper'); building dampers go near the top (Taipei 101: 88th-92nd floors; Wikipedia).
  - Allow tuning range: commercial spring dampers can be adjusted about plus or minus 10% in frequency and pendulum dampers up to plus or minus 15% (Maurer).

### When to use it

- **everyday_examples**: 
  - The giant golden ball hanging inside the Taipei 101 skyscraper, a 660-tonne pendulum damper visitors can see (Wikipedia 'Taipei 101')
  - The small dumbbell-shaped weights clamped to overhead power lines near the towers (Stockbridge dampers) (Wikipedia 'Stockbridge damper')
  - The pulley on the front of a car engine's crankshaft, which has a heavy outer ring on a thin band of rubber (harmonic damper) (Wikipedia 'Tuned mass damper' and 'Harmonic damper')
  - The dampers fitted under London's Millennium Bridge after it wobbled under crowds of walkers (Wikipedia 'Tuned mass damper')
- **when_to_use**: Use one when a part or structure has one clear problem resonance that keeps getting excited: a tall, springy frame, a long arm or boom, a panel that hums at certain motor speeds, a cable that sings in the wind, or a footbridge that bounces. It is a good fix when stiffening the structure or adding damping directly is difficult or expensive (Wikipedia 'Tuned mass damper'), and when the shaking rate is fairly steady and known, because the damper must be tuned to it. It adds very little weight compared with the structure (Wikipedia) and needs no power.
- **when_not_to_use**: Don't use one when the shaking covers a wide or changing range of frequencies, or is random shocks: a single tuned damper only works in a band around its tuning and makes things slightly worse outside it (Wikipedia); use damping material, stiffening, or an adaptive damper (Maurer) instead. To stop vibration passing from a machine into a bench or floor, use isolation instead: rubber feet or an elastomer isolation mount (Hackaday: foam plus a concrete paver cut a 3D printer's noise by almost 8 dBA; Tom's 3D: anti-vibration feet beat a heavy paver for print quality). For 3D-printer ringing, firmware input shaping (Klipper) is the usual fix, and a very low ringing frequency (below about 20-25 Hz) calls for mechanical stiffening first (Klipper docs). To slow a single movement such as a closing lid, use a damper (dashpot). If the structure's frequency drifts with temperature, humidity or load, a fixed passive damper loses effect and needs a robust design or retuning (Wikipedia).
- **environment_limits**: The tuning drifts if either part changes: tall buildings' natural frequencies change with wind speed, temperature and humidity, so dampers must be designed to be robust to this (Wikipedia 'Tuned mass damper'). Printed springs change too: PLA starts to soften at about 60 C and PETG at about 80 C (CNC Kitchen), and PLA creeps under constant stress (Thrinter), so a printed spring can sag and detune in a warm enclosure. Constant vibration can fatigue springs and fixings; on power lines, vibration fatigue of conductor strands is exactly what Stockbridge dampers are fitted to prevent (Wikipedia 'Stockbridge damper'). *(unverified parts omitted)*
- **safety_notes**: A big damper stores a lot of moving energy: Taipei 101's 660-tonne ball moved 1 m in a typhoon (Wikipedia), so large dampers need travel stops and clear space around them. A badly tuned damper can increase vibration at other speeds (Wikipedia). Never try to fit anything to power lines; Stockbridge dampers are fitted by line workers using insulated hot-stick tools (Wikipedia 'Stockbridge damper'). *(unverified parts omitted)*
- **common_failures**: Mistuned: tuned to the wrong frequency, so it does little, or shifts the problem to another speed; measure the real frequency and make the damper adjustable (Gavin; Wikipedia). Too little damping: two new sharp peaks appear either side of the old one; add rubber, friction or eddy-current damping (Gavin, figure 3). Too much damping or a jammed weight: the weight just moves with the structure and adds mass but no cancellation (Gavin: infinite damping 'links' the absorber to the structure). Fitted at a still spot (a node) instead of the point of largest motion (Wikipedia 'Stockbridge damper'). The structure's frequency drifts, or a printed spring creeps or softens, so the tuning wanders (Wikipedia; Thrinter; CNC Kitchen). Weight too small for the job: a bigger mass ratio gives more reduction and a wider band (Maurer). *(unverified parts omitted)*
- **related**: 
  - Elastomer isolation mount (rubber bobbin mount): stops vibration passing between a machine and its frame instead of cancelling a resonance; works over a wide frequency range
  - Damper (dashpot, rotary or linear soft-close damper): resists any movement in proportion to speed; often used as the damping element inside a tuned mass damper (Wikimedia 'Tuned mass damper.gif' shows hydraulic cylinders)
  - Eddy-current brake: a magnet near a moving metal plate makes a contact-free damping element for a small tuned mass damper
  - Coil spring and printed leaf spring (flat cantilever spring): the spring part of a tuned mass damper
  - Harmonic damper (crankshaft damper) and centrifugal pendulum absorber: rotating versions that calm twisting vibration in engine crankshafts (Wikipedia)
  - Tuned liquid damper: uses sloshing water in a tank instead of a solid weight (Wikipedia, e.g. Sydney Tower and Comcast Center)
  - Input shaping (firmware): the software alternative for 3D printers and machines, which shapes the motion commands so they don't excite the resonance (Klipper docs)
  - Speed governor (fly fan, centrifugal governor): also in the 'slows it down' family, but controls speed rather than vibration

### Pictures, videos and models

- **links**: 
  - [Tuned mass damper.gif (Wikimedia Commons, by Anarchemitis)](https://commons.wikimedia.org/wiki/File:Tuned_mass_damper.gif): Animation of a skyscraper swaying with and without a tuned mass damper at the top; green marks the hydraulic cylinders that damp the motion *(licence: Public domain)*
  - [Tuned mass damper - Taipei 101 (Wikimedia Commons, photo by Guillaume Paumier)](https://commons.wikimedia.org/wiki/File:Tuned_mass_damper_-_Taipei_101_-_Wikimania_2007_0224.jpg): Photo of the huge steel pendulum ball damper inside Taipei 101 *(licence: CC BY-SA 2.5 / CC BY-SA 3.0 / GFDL 1.2+)*
  - [Stockbridge damper new with ruler (Wikimedia Commons, photo by Alex P. Kok)](https://commons.wikimedia.org/wiki/File:Stockbridge_damper_new_with_ruler.jpg): A new Stockbridge damper next to a ruler: a small weight on a short cable, a larger weight on a longer cable, and the clamp in the middle; almost half a metre long *(licence: CC BY-SA 4.0)*
  - [Tuned Mass Dampers, CEE 541 Structural Dynamics (H.P. Gavin, Duke University, 2016)](https://people.duke.edu/~hpgavin/StructuralDynamics/TunedMassDamper.pdf): Diagram of the Den Hartog absorber and graphs of the structure's response with an untuned, undamped and optimally damped tuned mass damper *(licence: CC BY-NC-ND (link only))*
  - [Tuned Mass Damper Demonstration (Instructables, by practicalengineering, 2016)](https://www.instructables.com/Tuned-Mass-Damper-Demonstration/): Photos and accelerometer graphs of a wobbly wooden model building with a pendulum damper, locked and unlocked *(licence: not shown on page (link only))*
- **make_it_yourself**: 
  - [Tuned Mass Damper Demonstration (Instructables, practicalengineering)](https://www.instructables.com/Tuned-Mass-Damper-Demonstration/): Build guide for a scrap-wood swaying 'building' on dowels with a pendulum damper and an ADXL345 accelerometer on an Arduino to record the sway; the demo locks the pendulum, sets the model swaying and measures its natural period *(licence: not shown on page)*
  - [Microsoft Hacking STEM: Tuned Mass Damper (Instructables)](https://www.instructables.com/Microsoft-Hacking-STEM-Tuned-Mass-Damper/): Classroom build of a model tower from paper plates and dowels, with a pendulum made from a dowel carrying about 20 metal washers *(licence: not shown on page)*
  - [Stockbridge Damper (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/609697-stockbridge-damper): Printed Stockbridge-style tuned mass damper to reduce noisy back-panel resonance on a 3D printer; M4 bolt mounting hole, side holes tapped M6 for bolts as weights; the author calls it purely empirical but says it reduced noise somewhat *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- **diagram_idea**: Side-by-side animation of a tall springy post shaking at its resonance, first alone (big sway) and then with a small weight on a spring at its top swinging the opposite way (small sway), with a frequency graph underneath showing one tall peak turning into two lower ones.
- **sources**: 
  - https://en.wikipedia.org/wiki/Tuned_mass_damper
  - https://en.wikipedia.org/wiki/Stockbridge_damper
  - https://en.wikipedia.org/wiki/Taipei_101
  - https://en.wikipedia.org/wiki/Harmonic_damper
  - https://en.wikipedia.org/wiki/Pendulum_(mechanics)
  - https://people.duke.edu/~hpgavin/StructuralDynamics/TunedMassDamper.pdf
  - https://www.nature.com/articles/s41598-025-98320-5
  - https://www.maurer.eu/en/buildings/tuned-mass-damper/
  - https://www.instructables.com/Tuned-Mass-Damper-Demonstration/
  - https://www.instructables.com/Microsoft-Hacking-STEM-Tuned-Mass-Damper/
  - https://hackaday.com/2019/12/08/controlling-tremors-as-they-happen/
  - https://hackaday.com/2020/05/20/bricking-your-3d-printer-in-a-good-way/
  - https://toms3d.org/2022/05/30/wobbly-3d-printer-makes-for-better-parts/
  - https://www.klipper3d.org/Resonance_Compensation.html
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.printables.com/model/609697-stockbridge-damper
  - https://commons.wikimedia.org/wiki/File:Tuned_mass_damper.gif
  - https://commons.wikimedia.org/wiki/File:Tuned_mass_damper_-_Taipei_101_-_Wikimania_2007_0224.jpg
  - https://commons.wikimedia.org/wiki/File:Stockbridge_damper_new_with_ruler.jpg

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, making_tips_3d_printing, off_the_shelf_parts, power, safety_notes

