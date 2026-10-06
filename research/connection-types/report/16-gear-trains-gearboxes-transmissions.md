# gear trains, gearboxes & transmissions: Changes speed or turning force

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). ⚑ marks what needs confirming; corrections are welcome (`research/needs-confirming.md`).

## 16 Worm drive (worm and worm wheel)

*gear trains, gearboxes & transmissions.* A screw-like gear turning a gear wheel at right angles for a big speed reduction; many designs can't be turned backwards from the wheel (self-locking)

### What it is

- **plain_name**: A screw-shaped gear that turns a gear wheel beside it at right angles, slowly and with a lot of force; in many versions the wheel can't turn the screw back, so it stays where you left it
- **term**: Worm drive (worm gear pair: worm and worm wheel)
- **aliases**: 
  - worm gear
  - worm gearing
  - worm and wheel
  - worm and worm wheel
  - worm gear set
  - worm gearbox / worm gear reducer / right-angle worm gearbox
  - worm gear motor (a small motor with a worm stage)
  - endless screw (old name, used in 507 Mechanical Movements)
  - screw gear (loosely; strictly that name means crossed helical gears)
  - globoid or double-enveloping worm (variant with an hourglass-shaped worm)
  - duplex worm / dual-lead worm (variant whose backlash can be adjusted)
  - Schneckengetriebe (German)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: self-locking & anti-back-drive
- **one_liner**: A screw-like gear (the worm) meshes with a gear wheel (the worm wheel) at right angles, giving a large speed reduction and turning-force increase in one step, and in low-angle, single-thread designs the wheel cannot drive the worm backwards.
- **complexity**: A few parts: the worm (a screw-shaped gear on the input shaft), the worm wheel (a gear wheel on the output shaft, often with curved 'throated' teeth that hug the worm), two shafts with bearings (including thrust bearings or washers, because the worm gets pushed along its own axis), and usually a housing that fixes the distance between the shafts and holds the grease or oil.
- **how_it_works**: The worm is a screw with one or more spiral threads (starts). Each full turn of a single-start worm pushes the wheel on by exactly one tooth, so a 20-tooth wheel gives a 20:1 reduction in a single mesh (ratio = wheel teeth divided by worm starts). The teeth slide across each other rather than rolling, which wastes energy as heat, and that same friction is why a worm with a shallow thread angle (lead angle) jams instead of turning when the wheel tries to drive it backwards (self-locking). Worms with more starts have a steeper thread, run more efficiently and can usually be driven backwards.

### Finder attributes

- **job**: 
  - change speed or turning force: a big reduction (typically 5:1 to 75:1, over 100:1 possible) in one small, right-angle step
  - stop it moving back (one-way): single-start, low-angle worms hold the output where it was left when the load tries to turn it back; note the worm itself can still be driven either way, and this hold is not guaranteed
- **motion**: rotate: continuous rotation in at the worm, slower continuous rotation out at the wheel, turned through 90 degrees; unlimited range, either direction
- **degrees_of_freedom**: 1: once the worm and wheel mesh, turning the worm is the only independent motion; the wheel's position is tied to it by the gear ratio
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): with a single-start worm and a small lead angle (about 4 degrees or less), friction stops the wheel from turning the worm, so a lifted load or a robot arm stays put when the motor stops. Makers warn it is not dependable: vibration, smooth ground worms, good lubrication or multi-start worms can let it slip, so add a brake where safety matters
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it transmits rotation
  - friction or clamping (force-fit): its self-locking hold comes from sliding friction between the worm thread and the wheel teeth, not from the parts interlocking
- **input_output**: Continuous rotation -> slower continuous rotation. Ratio = number of wheel teeth / number of worm starts; normal single-stage range 5:1 to 75:1 (RoyMech) or 5:1 to 100:1 for worm gear reducers (KHK), over 100:1 possible in one stage (tec-science), and two worm reducers in series can reach 10,000:1 (KHK). Efficiency is poor because the teeth slide, and sources give different ranges: 30-90% in theory (KHK technical reference), typically 30-60% for cylindrical worms (KHK worm gear page), 60-95% for worm reducers depending on lead angle (KHK reducer page), and from about 98% at the lowest ratios down to about 20% at the highest (RoyMech). Compare 98-99.5% per mesh for spur and helical gears (KHK). Shafts: crossed (at right angles, not intersecting). Back-drivable: no for most single-start, high-ratio worms with a small lead angle (self-locking drives are usually under 50% efficient), but only reliably when there is no vibration; yes for multi-start, steep-lead worms (drives above about 50% efficiency are often not self-locking, per tec-science).
- **power**: passive (no power needed). When it is driven by a motor and the power is lost, a self-locking worm drive keeps its last position (the load cannot turn it back), while a back-drivable (multi-start) one lets the load turn the output
- **removability**: removable: the worm and wheel are separate parts fixed to their shafts (set screws, keys or clamps) inside a frame or housing and can be taken apart and refitted
- **reuse_cycles**: many times: it can be dismantled and reassembled repeatedly; the limit is tooth wear, not the assembly
- **tools_needed**: Hex keys or a screwdriver for set screws and housing screws; grease or oil for metal and most plastic pairs (self-lubricating plastic sets run dry); for a printed throated wheel split in two halves, glue or screws to join the halves
- **seal**: none: the gear mesh itself does not seal anything. Industrial worm gearboxes run in a closed housing that keeps the lubricant in and dirt out, so the housing (not the gears) does the sealing
- **load**: medium to heavy for its size, because the output gets a large torque multiplication. The weak points are the worm wheel's teeth (usually the softer part) and the worm's push along its own axis (axial thrust), which needs thrust bearings or washers. ⚑ [uncertain] Because a self-locking drive cannot give way when the output is hit, shock loads from the output side go straight into the teeth. *(⚑ parts need confirming)*
- **adjustable**: Not in normal running. Backlash (play) can be set by adjusting the distance between the shafts, or, with a duplex (dual-lead) worm, by sliding the worm along its axis without changing the centre distance (KHK quotes 0.02 mm backlash change per 1 mm of axial worm movement)
- **play_and_precision**: Small to noticeable backlash depending on quality; KHK advises keeping some backlash rather than zero, so an oil film can form. The big reduction makes the output position fine and steady. ⚑ [uncertain] It tolerates little misalignment: the centre distance, the 90-degree shaft angle and the wheel's centre plane lining up with the worm axis all matter, or the contact moves to the tooth edges and it binds or wears quickly. *(⚑ parts need confirming)*
- **access_needed**: not applicable: it is a pair of gears mounted on two shafts inside a frame or housing, reached wherever the housing opens
- **materials**: Classic metal pair: a hardened (case-hardened and ground) steel worm with a phosphor-bronze wheel, the pairing RoyMech calls ideal; worms are made harder than wheels to limit wear (KHK). Other wheels: cast iron, aluminium bronze, acetal (POM) and nylon; stainless steel worms for wet places (KHK, McMaster-Carr). Grease-free self-lubricating plastic sets exist (igus iglide (brand)). Old wooden worm drives exist too (museum example at CNAM, Paris). For 3D printing, nylon is the usual first choice; PLA, ABS and PETG work only if greased (Let's Print test via Hackaday; EngineerDog ranks nylon > PLA > ABS > PETG for printed gears).
- **maker_difficulty**: moderate: cheap to buy ready-made, and printable from free generators (BOSL2, wormgear), but the curved (throated) wheel is awkward to print because of overhangs, and the pair needs a rigid, accurate centre distance, a thrust bearing and grease to last

### Making it

- **processes**: 
  - off-the-shelf part (worm gear sets, worm gear motors and worm gearboxes are cheap and common)
  - 3D print (FDM): demo and light-duty drives; best with nylon or greased PLA/PETG
  - CNC: worms are turned and thread-cut or hobbed; the wormgear tool offers a straight-flank (ZA) profile for CNC
  - woodwork: historic wooden worm drives exist (e.g. CNAM museum photo)
- **print_in_place**: yes, as a demo: Tomas Endlicher's 'Worm Gear Drive - Print In Place Test' prints already meshed with 0.4 mm clearances, but it needs supports and the moving parts must be carefully freed afterwards. Working drives are normally printed as separate parts and assembled on shafts.
- **making_tips_3d_printing**: 1) Don't model the teeth by hand: generate a matched pair with BOSL2 (worm() and worm_gear(), with backlash and clearance settings and a choice of starts and pressure angle) or the Python 'wormgear' tool (DIN 3975 geometry, reports efficiency and whether the pair will self-lock, and has a slightly convex ZK profile described as 3D-print-friendly). EngineerDog notes worms are hard to model and suggests starting from a template. 2) The throated worm wheel has overhangs on both faces: split it in half through its middle plane, print both halves flat without supports and join them (Libre Space community advice; DenverDude's 'Filament Spool Winder (Split Worm Gear)' prints flat with no supports this way). 3) ⚑ [uncertain] Print the worm standing upright so its thread is built up like a bolt's, with fine layers for smoother flanks. 4) Layers of 0.2 mm or finer, lots of part cooling and slow perimeters (about 25 mm/s) help the overhangs (Libre Space). 5) Leave clearance: the print-in-place test uses 0.4 mm under the wheel and 0.4-0.6 mm around the axles; in BOSL2 set a small backlash value. 6) Grease it: in Let's Print's test (reported by Hackaday), ungreased PLA, PETG and ABS worm sets failed in under two minutes at 8,000 rpm, while with plastic-safe grease each ran over ten minutes at 12,000 rpm (with almost no load, so treat this as a friction test only). 7) Material: nylon first (low friction, no grease needed, but absorbs water and is harder to print); PLA softens and deforms above about 60 °C (Prusa), and the sliding friction plus a nearby powered stepper motor can get it that hot (Libre Space). 8) EngineerDog suggests a 25-degree pressure angle for stronger printed gear teeth in general, and oversizing shaft holes slightly (about 0.005 in on the diameter) or reaming them. 9) Hold the two shafts rigidly at the right distance and add a thrust washer or bearing at the worm's ends, because the worm is pushed along its axis. 10) Don't count on a printed worm to self-lock under vibration; test it with the real load. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Worm and worm gear sets (specified by module or diametral pitch, number of starts, hand and pressure angle, typically 14.5 or 20 degrees); shaft-mounted worms; worm gears (wheels) in bronze, cast iron, acetal or nylon (McMaster-Carr 'Metal Worms and Worm Gears' and 'Plastic Worm Gears'); worm gear motors (small DC motors with a worm stage, e.g. the 'JGY-370' type seen on Printables); worm gear reducers or right-angle worm gearboxes; grease-free plastic modular worm gears (igus Apiro (brand), ratios 4:1, 32:1, 64:1); LEGO Technic worm gears (brand) for quick experiments; thrust bearings and thrust washers for the worm shaft.
- **rules_of_thumb**: 
  - Ratio = number of wheel teeth / number of worm starts; a single-start worm on a 20-tooth wheel gives 20:1 (Wikipedia 'Worm drive'; tec-science). Worms usually have 1 to 4 starts (tec-science).
  - Normal single-stage range 5:1 to 75:1 (RoyMech); 5:1 to 100:1 for worm gear reducers, and 10,000:1 with two in series (KHK reducer page); KHK stock sets go up to 120:1 (KHK worm gear page).
  - Efficiency: 30-90% theoretical (KHK technical reference), typically 30-60% for cylindrical worms (KHK worm gear page), 60-95% for worm reducers (KHK reducer page); about 98% at the lowest ratios down to about 20% at the highest (RoyMech). Higher ratio and smaller lead angle mean lower efficiency, and phosphor-bronze wheels are more efficient than aluminium-bronze or cast-iron ones (KHK Q&A).
  - Self-locking happens when the lead angle is about 4 degrees or less, but it is unstable because it depends on friction (KHK Q&A). The limit is where the lead angle equals arctan(friction coefficient); use the lower, moving (dynamic) friction value if there is any vibration (RoyMech).
  - Self-locking worm drives are usually below 50% efficient; above 50% they are often not self-locking (tec-science).
  - Don't use a worm as the braking device for safety-critical lifting such as hoists (RoyMech); combine self-locking with another method when reversal must be prevented completely (KHK).
  - Make the worm harder than the wheel; a case-hardened, ground steel worm with a phosphor-bronze wheel is the ideal metal pair (RoyMech; KHK).
  - Keep some backlash; zero backlash is not recommended because it disrupts the oil film and can cause abnormal wear and jamming (KHK worm gear page and Q&A).

### When to use it

- **everyday_examples**: 
  - Guitar and double-bass tuning pegs: turning the small knob slowly turns the string post, and the string's pull can't unwind it
  - Worm-drive hose clamps (Jubilee clip (brand)): a small screw drives the slotted band (the worm here acts on a straight band rather than a wheel)
  - Gate openers, lifts and conveyor drives
  - Car steering boxes (and, historically, some truck rear axles)
- **when_to_use**: Use a worm drive when you need a big slow-down (or a big increase in turning force) in a small space, when the output shaft has to be at right angles to the motor, or when the output should stay put when the motor stops, such as a robot arm joint, a tilting camera or tablet stand, a winch that holds its load, or a rotating table. It is also quiet and smooth, and a single stage replaces several spur gear stages.
- **when_not_to_use**: Avoid it when efficiency matters (battery robots, continuous high-power drives), because a self-locking worm is usually under 50% efficient, so more than half the input turns into heat (tec-science); use a spur, helical or planetary gearbox instead. Avoid it when you need to back-drive the output by hand or let it give way safely, as with compliant robots, things people push, or mechanisms that must not be damaged by knocks; use a back-drivable gearbox with a clutch. Don't rely on it as the only brake for lifting people or heavy loads; add a real brake or a ratchet and pawl. For straight-line motion, use a lead screw or rack and pinion.
- **environment_limits**: Heat: sliding friction makes heat, and metal pairs need an unbroken oil film (KHK); PLA softens and deforms above about 60 °C (Prusa), and a printed worm next to a powered stepper motor can reach that (Libre Space community). igus's grease-free plastic modular worm gear is rated for +5 to +50 °C (igus). Vibration: shocks and vibration can undo static self-locking and let the gearbox start turning under the load (tec-science; RoyMech). Dirt: fully plastic, self-lubricating sets are described as resistant to dirt and dust (igus); greased sets pick up grit.
- **safety_notes**: Self-locking is not a safety brake: a load can creep or drop under vibration, so never stand under a load held only by a worm drive (RoyMech; KHK). The high torque multiplication means a small motor can crush fingers or break parts, and the point where the worm meets the wheel is a pinch point ⚑ [uncertain], so guard it. Worm gearboxes can get hot in continuous use. *(⚑ parts need confirming)*
- **common_failures**: 1) Worn or stripped wheel teeth, since the wheel is the softer part: make it from bronze or nylon, keep it lubricated and don't overload it. 2) Unlubricated plastic worms wear out in minutes: grease them with a plastic-safe grease (Let's Print via Hackaday). 3) Overheating and softening from friction: lower the speed, use a multi-start worm or a better material. 4) Unexpected back-driving under vibration or with a multi-start worm: check the lead angle and add a brake. 5) Binding or rapid wear from zero backlash or a wrong centre distance (KHK). 6) ⚑ [uncertain] The worm walks along its shaft or the housing flexes because the axial thrust isn't carried: add thrust bearings and a stiff frame. *(⚑ parts need confirming)*
- **related**: 
  - Spur or helical gear train: the teeth roll instead of sliding, so each mesh is 98-99.5% efficient (KHK), but a big ratio needs several stages and the shafts stay parallel; ⚑ [uncertain] at modest ratios it is easily turned backwards, so it doesn't hold a load by itself
  - Crossed helical gears (screw gears): also crossed shafts but with both gears helical; 70-95% efficient (KHK) and not suited to high power
  - Bevel gears: turn motion through 90 degrees with the shafts intersecting; 98-99% efficient per mesh (KHK) and used for low ratios
  - Lead screw and nut: the same screw-and-friction idea, but the screw drives a nut in a straight line instead of a wheel
  - Worm gear screw jack: a worm turning a nut or screw to lift loads, combining both
  - Rack and pinion: turns rotation into straight-line motion
  - Planetary or cycloidal (Cyclo) reducer: a large ratio in line with the motor shaft, about 98% efficient for one stage (KHK) and better at taking shock loads than a worm reducer (KHK)
  - Ratchet and pawl or a brake: what to add when the output must never move back *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [Worm Gear.gif (Wikimedia Commons, by Catsquisher)](https://commons.wikimedia.org/wiki/File:Worm_Gear.gif): Animated 4-start worm turning a 50-tooth throated wheel (12.5:1) *(licence: Public domain)*
  - [Schnecke10.gif (Wikimedia Commons, by Quant3)](https://commons.wikimedia.org/wiki/File:Schnecke10.gif): Looping animation of a worm driving a worm wheel *(licence: CC BY-SA 3.0)*
  - [Engrenage a vis creuse, CNAM (Wikimedia Commons, photo by Rama)](https://commons.wikimedia.org/wiki/File:Engrenage_%C3%A0_vis_creuse_CNAM-IMG_0602.jpg): Photo of a wooden worm and worm wheel in the Musee des Arts et Metiers, Paris *(licence: CC BY-SA 2.0 France / CeCILL)*
  - [507 Mechanical Movements, No. 31: worm or endless screw and worm-wheel](https://507movements.com/mm_031.html): Historic 1868 drawing with an animated version *(licence: Book public domain; website animation link only)*
  - [Worm gear drive 1 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=7Fh2OVpHIO4): CAD animation of a worm gear drive *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Worm Gear Drive - Print In Place Test (Tomas Endlicher, Printables)](https://www.printables.com/model/766698-worm-gear-drive-print-in-place-test): Hand-cranked worm and 18-tooth wheel printed already assembled; two versions with 0.4 or 0.6 mm axle clearance; PLA, 0.2 mm layers, supports needed *(licence: CC BY-SA)*
  - [Filament Spool Winder (Split Worm Gear) (DenverDude, Printables)](https://www.printables.com/model/642115-filament-spool-winder-split-worm-gear): A working worm-driven winder whose worm wheel is split in two so it prints flat with no supports *(licence: CC BY-NC)*
  - [BOSL2 gears.scad: worm(), worm_gear(), enveloping_worm() (OpenSCAD library)](https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad): Parametric OpenSCAD modules that generate matching worms and worm wheels, with starts, hand, pressure angle, backlash and clearance settings *(licence: BSD 2-Clause)*
  - [wormgear (Python / build123d worm gear generator by Paul Fremantle), README](https://raw.githubusercontent.com/pzfreo/wormgear/main/README.md): Generates exact worm and wheel STEP models from module and ratio, using DIN 3975 geometry, and estimates efficiency and self-locking; offers a 3D-print-friendly ZK tooth profile *(licence: MIT)*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (entries 'WORM-GEAR', 'WORM-INDEX', 'MULTI-START-WORM', 'WORM-JACK')](https://huangyan920.github.io/Mechanical/): Browser-based parametric animations of worm mechanisms; the listed figures are rough, so check numbers against KHK or RoyMech *(licence: MIT)*
- **diagram_idea**: Side-by-side animation: a single-start worm turning a 20-tooth wheel one tooth per turn (with a turn counter showing 20:1), then a hand trying to turn the wheel backwards and the worm refusing to move, compared with a 4-start worm that spins backwards.
- **sources**: 
  - https://en.wikipedia.org/wiki/Worm_drive
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html
  - https://khkgears.net/new/worm_gear.html
  - https://khkgears.net/new/gear_knowledge/q_and_a_about_gears.html
  - https://khkgears.net/new/gear_knowledge/Types_and_Mechanisms_of_Gear_Reducers.html
  - https://roymech.org/Useful_Tables/Drive/Worm_Gears.html
  - https://www.tec-science.com/mechanical-power-transmission/gear-types/worms-and-worm-gears/
  - https://www.mecapedia.uji.es/pages/irreversibilidad.html
  - https://commons.wikimedia.org/wiki/Category:Worm_gears
  - https://commons.wikimedia.org/wiki/File:Worm_Gear.gif
  - https://commons.wikimedia.org/wiki/File:Schnecke10.gif
  - https://commons.wikimedia.org/wiki/File:Engrenage_%C3%A0_vis_creuse_CNAM-IMG_0602.jpg
  - https://507movements.com/mm_031.html
  - https://www.youtube.com/watch?v=7Fh2OVpHIO4
  - https://www.youtube.com/watch?v=rWnZWvNhi1Y
  - https://hackaday.com/2021/05/12/testing-3d-printed-worm-gears/
  - https://www.youtube.com/watch?v=m4VSxVspLoc
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - https://community.libre.space/t/3d-printing-the-worm-gear/56
  - https://help.prusa3d.com/article/pla_2062
  - https://www.igus.com/robot-components/modular-worm-gear
  - https://www.mcmaster.com/products/worm-gears/
  - https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://raw.githubusercontent.com/pzfreo/wormgear/main/README.md
  - https://huangyan920.github.io/Mechanical/
  - https://www.printables.com/model/766698-worm-gear-drive-print-in-place-test
  - https://www.printables.com/model/642115-filament-spool-winder-split-worm-gear
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: at an angle, crossed
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, load, making_tips_3d_printing, play_and_precision, related, safety_notes

## 93 Planetary gear set (epicyclic gearing)

*gear trains, gearboxes & transmissions.* A central sun gear, planet gears around it and an outer ring gear, giving a compact, strong speed reduction with input and output on the same line

### What it is

- **plain_name**: A small gear in the middle with several gears rolling round it inside a big ring that has teeth on the inside, like planets round the sun; turning the middle gear makes the frame holding the rolling gears turn much more slowly and strongly, on the same centre line
- **term**: Planetary gear set (epicyclic gear train)
- **aliases**: 
  - planetary gearbox / planetary gearhead / planetary reducer / planetary gearmotor
  - epicyclic gearing / epicyclic gear train (Wikipedia)
  - sun gear, planet gears, planet carrier and ring gear (also called the annulus or internal gear)
  - 'planetary', 'solar' and 'star' types (KHK's names for the set with the ring, the sun or the carrier held still)
  - multi-stage planetary gearbox (several sets stacked in one housing)
  - gear bearing (a print-in-place planetary set used as a bearing or fidget toy)
  - compound planetary: meshed-planet, stepped-planet and Ravigneaux sets, as in automatic transmissions (Wikipedia)
  - internal gear hub / hub gear (bicycles)
  - UltraPlanetary (REV Robotics (brand)) and Yellow Jacket (goBILDA (brand)) robot gearmotors
  - Planetengetriebe (German)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: A planetary gear set has a central sun gear, several planet gears that mesh with it and with an outer ring gear, and a carrier holding the planets, so holding one of the three parts still gives a compact, strong speed reduction (or increase) with the input and output on the same line.
- **complexity**: A small assembly that acts as one unit: a sun gear (on the input shaft), usually three planet gears on pins or small bearings, a planet carrier (the frame that holds the planet pins and is usually the output), a ring gear with teeth on the inside (often part of the housing), bearings or bushings, and grease; stacking several such sets gives a multi-stage gearbox.
- **how_it_works**: Each planet meshes with the sun on its inside and the ring on its outside. In the usual gearbox the ring is held still and the motor turns the sun: the planets are forced to roll round inside the ring, dragging the carrier round with them in the same direction but more slowly, so the speed is divided (and the turning force multiplied) by 1 + ring teeth / sun teeth (Wikipedia; KHK). Holding a different part gives a different ratio: with the carrier held the ring turns backwards at ring/sun, and with the sun held the ring drives the carrier with only a small reduction (KHK). Because the load is shared between several planets and their sideways forces cancel, it carries a lot of torque in a small round package with input and output on one axis, and stages can be stacked to multiply the ratio (Wikipedia). With nothing held, the three parts' speeds are linked by one equation, so the set can add two inputs, as in differentials and hybrid-car power-split drives (Wikipedia).

### Finder attributes

- **job**: 
  - change speed or turning force: a compact reduction (usually 3:1 to 10:1 per stage) behind a motor, or several speeds by holding different parts (drills, bicycle hubs, automatic transmissions)
  - let it move (turn, slide or bend): printed as a 'gear bearing', the set itself works as a bearing that carries a rotating part
- **motion**: rotate: continuous rotation of input and output about the same axis, with no limit on the number of turns
- **degrees_of_freedom**: 2 for the bare set, because the speeds of sun, carrier and ring are tied by one equation (N_s x w_s + N_r x w_r = (N_s + N_r) x w_c, Wikipedia), so any two decide the third; 1 once one part is held still, which is how it works as a normal gearbox
- **special_behaviour**: 
  - none: it is not self-locking, torque-limiting or one-way by itself; planetary gearboxes need a separate holding brake to hold a vertical load (TEA)
  - self-aligning or self-centring: with several evenly spaced planets the sideways forces on the sun cancel ('purely torsional reactions', Wikipedia), so the sun is pushed toward the centre rather than off to one side
- **holding_principle**: not a holding joint (it moves or passes on motion): it passes rotation on at a different speed, shape (the parts interlock; form-fit): the meshing teeth interlock
- **input_output**: Rotation -> rotation on the same axis (in line). Ring held, sun in, carrier out: reduction 1 + R/S in the same direction ('planetary' type; 16-tooth sun, 16-tooth planets and 48-tooth ring give 4:1, KHK). Carrier held, sun in, ring out: R/S, reversed ('star' type, -3 with the same gears). Sun held, ring in, carrier out: 1 + S/R ('solar' type, 1.33) (KHK; Wikipedia). Practical single-stage reductions are 3:1 to 10:1, best 4:1-8:1 (Machine Design); stages multiply (two 4:1 stages give 16:1, HowToMechatronics; three stages of Prusament's printed gearbox give 1:64). Efficiency: about 3% lost per stage (Wikipedia), 90-98% per stage (TEA), about 94% for typical two-stage robot gearboxes (gm0); a two-stage 16:1 PLA printed gearbox delivered only about half its theoretical torque because of friction (HowToMechatronics). Back-drivable: yes; planetary gearboxes are never self-locking (TEA), although multi-stage, high-ratio units take a large torque to turn from the output ⚑ [uncertain]. *(⚑ parts need confirming)*
- **power**: passive (no power needed); it passes on power from a motor or hand crank. If the motor loses power, a planetary gearbox does not hold the load by itself; a vertical load needs a separate holding brake (TEA)
- **removability**: removable: a gearhead bolts to the motor face with its sun gear on the motor shaft, and the set can be opened and the gears replaced; print-in-place sets cannot be taken apart
- **reuse_cycles**: many times: bolted gearheads and cartridge systems (e.g. REV UltraPlanetary cartridges, swapped to change the ratio) can be taken apart and rebuilt repeatedly; print-in-place versions are one piece
- **tools_needed**: Hex keys and screws (e.g. M3 screws and nuts in Mognaschi's printed NEMA 17 gearbox); lithium or other grease; for printed gearboxes, bearings, steel pins and sometimes heat-set inserts (HowToMechatronics used M3 threaded inserts); none for print-in-place sets
- **seal**: none for an open gear set; commercial gearheads are closed housings with grease for life (Machine Design), which keeps most dirt out, but the gear set itself does not seal ⚑ [uncertain] *(⚑ parts need confirming)*
- **load**: Medium to heavy: the load is shared between the planets, so torque capacity is high and grows with the number of planets (Wikipedia); robot-kit planetary gearboxes are recommended for high-load uses such as drivetrains and arms, where spur gearboxes break (gm0); a 3D-printed two-stage 16:1 PLA gearbox on a NEMA 17 stepper gave about 2 N.m (20 N at 10 cm; the article writes 200 Nm, which is a unit slip) (HowToMechatronics). Strong in twist; weak points are the small sun gear (which is why ratios over about 10:1 per stage are avoided, Machine Design), the planet pins and bearings (high bearing loads, Wikipedia), and, with helical gears, the thrust they create, which needs bearings that take axial load (Machine Design). Side loads on the output shaft depend on its bearings.
- **adjustable**: no, not continuously: the ratio is fixed by the tooth counts. It can be changed by holding a different part (two-speed drills, bicycle hub gears and automatic transmissions lock or free the ring, sun or carrier) or by swapping or stacking stages (REV UltraPlanetary 3:1, 4:1 and 5:1 cartridges give nominal ratios from 3:1 to 60:1)
- **play_and_precision**: Small backlash: lower than an equivalent spur gearbox (gm0); precision servo planetary gearheads are under 3 arcmin (TEA); a typical commercial unit measured 8 arcmin new and up to 15 arcmin after six months of wear (Machine Design); a well-tuned 3D-printed PLA gearbox measured about 18 arcmin (HowToMechatronics). Repeatability is good once the backlash is taken up. It tolerates little misalignment: the sun, carrier and ring must stay concentric, and imprecise tolerances give uneven load sharing between planets (MetMo); Prusa's extruder gearbox has an alignment procedure after assembly.
- **access_needed**: end of a tube or shaft: the sun gear fits on the end of the motor shaft and the gearbox bolts to the motor's face, with the output shaft on the same line
- **materials**: Hardened steel for industrial and automotive sets; plastic and metal in small gearmotors ⚑ [uncertain]; 3D printing: EngineerDog ranks nylon > PLA > ABS > PETG for printed gears; Prusa makes a demonstration planetary gearbox in PA11 carbon-fibre nylon; Mognaschi's printed NEMA 17 gearbox is designed for engineering (nylon-like) resin on an SLA printer but can be FDM printed; steel pins, bronze bushings and ball bearings for the planets and output *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: it prints well (even in one piece), and free tools calculate the teeth, but the tooth counts must obey the ring = sun + 2 x planet and equal-spacing rules, and a gearbox that carries real torque needs an accurately calibrated printer, bearings and grease

### Making it

- **processes**: 
  - off-the-shelf part: planetary gearmotors and stepper gearheads, precision servo gearheads, cartridge systems for robot kits
  - 3D print (FDM): print-in-place demonstrators and gear bearings, and assembled gearboxes for steppers and robot joints
  - 3D print (resin): small precise gearboxes (Mognaschi's NEMA 17 gearbox is designed for SLA engineering resin)
  - CNC: machined or cut metal gears and housings for high-load gearboxes ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: yes: several models print already assembled and working, e.g. Dangineering's 4.75:1 print-in-place planetary gear and the 'gear bearing' family (Gamma4D's Perfect Gear Bearing, inspired by Emmett's design); gearboxes that carry real load are usually printed as separate parts and assembled with pins, bearings and screws
- **making_tips_3d_printing**: 1) Choose tooth counts that fit: ring teeth = sun teeth + 2 x planet teeth, and (sun + ring) / number of planets must be a whole number or the planets will not all mesh at equal spacing (KHK; Wikipedia; HowToMechatronics). BOSL2's planetary_gears() works out tooth counts, positions and profile shifts for a target ratio. 2) Keep teeth printable: HowToMechatronics chose module 1.5 as about the smallest printable tooth, and EngineerDog suggests a 25 degree pressure angle, at least 13 teeth at 20 degrees or 9 at 25 degrees, and a face width of 3-5 x the circular pitch. 3) Aim for 3:1 to 10:1 per stage; above that the sun gets too small and weak (Machine Design), so stack stages instead. 4) Put planets on steel pins with bushings or bearings and washers on each side rather than plastic on plastic (HowToMechatronics used 6 mm pins, 8 mm bushings and M6 washers), and carry the carrier and output on ball bearings. 5) Tight fits trade friction for backlash: HowToMechatronics' tight PLA gearbox had only about 18 arcmin of play but lost about half its torque to friction, so test the clearance and calibrate horizontal expansion (they used 0.02 mm, and 0.04 mm for holes). 6) Herringbone planets run smoothly and are self-aligning (BOSL2), so they stay in the ring without end plates, but plain helical gears push sideways and need bearings that take thrust (Machine Design). 7) For print-in-place sets use fine layers (0.10-0.15 mm) and turn the gears after printing to break any light fusing (Dangineering); for gear bearings Gamma4D suggests 0% infill and turning off 'ensure vertical shell thickness'. 8) Grease all moving parts generously, e.g. with lithium grease (Mognaschi). 9) Material: nylon wears best (EngineerDog); PLA softens above about 60 C and PETG copes to about 80 C (Prusa), so keep PLA gearboxes away from hot motors. 10) After assembly, align the housing: Prusa's extruder gearbox procedure loosens the cover screws, runs the gears, then tightens the screws in a set pattern.
- **off_the_shelf_parts**: Planetary gearmotors (e.g. goBILDA Yellow Jacket and REV UltraPlanetary with 3:1, 4:1 and 5:1 cartridges (brands)); NEMA 17 stepper motors with planetary gearheads; precision servo planetary gearheads specified in arcmin of backlash; separate sun, planet and internal (ring) gears from gear makers such as KHK (brand); planet pins, bronze bushings and thin-section ball bearings (HowToMechatronics used 6805, 6803 and 6802 bearings); bicycle internal gear hubs (3-, 7- and 11-speed, MetMo); lithium grease.
- **rules_of_thumb**: 
  - Tooth counts: ring teeth = sun teeth + 2 x planet teeth (KHK Gear Technical Reference, 'Planetary gear system', eq. 17.1; HowToMechatronics).
  - Equal spacing: (sun teeth + ring teeth) / number of planets must be a whole number (Wikipedia 'Epicyclic gearing'; HowToMechatronics; BOSL2 gears.scad notes that exact uniform spacing needs sun + ring to be a multiple of the number of planets).
  - Ratios: ring held, sun in, carrier out = 1 + R/S; carrier held = -R/S (output reversed); sun held, ring in = 1 + S/R. Example with 16-tooth sun and planets and a 48-tooth ring: 4, -3 and 1.33 (KHK; Wikipedia).
  - A single stage works best between 4:1 and 8:1; below 3:1 there is no room for the planets and above 10:1 the sun gear becomes too small (Howard Horn, Machine Design, 2012). BOSL2's planetary_gears() only accepts sun-to-carrier ratios larger than 2.
  - Efficiency: about 3% lost per stage (Wikipedia); two-stage robot gearboxes about 94% versus about 85% for spur gearboxes (gm0); 90-98% per stage for industrial units (TEA).
  - More planets carry more load (Wikipedia); helical planetary gearing carries 30-50% more torque than equivalent spur gearing (Machine Design).
  - Backlash: precision servo gearheads under 3 arcmin (TEA); a commercial unit went from 8 to 15 arcmin in six months (Machine Design); a printed PLA gearbox measured about 18 arcmin (HowToMechatronics).
  - Printed gears: 25 degree pressure angle, at least 9 teeth at 25 degrees (13 at 20 degrees), face width 3-5 x circular pitch, nylon best (EngineerDog).
  - Not self-locking: add a holding brake if it must hold a vertical load with the power off (TEA).

### When to use it

- **everyday_examples**: 
  - A cordless drill or electric screwdriver: battery drills typically use a three-stage planetary reduction behind the motor (MetMo)
  - A bicycle with gears inside the rear hub (3-, 7- or 11-speed hubs use epicyclic trains) (Wikipedia; MetMo)
  - A car's automatic transmission, and the power-split drive in hybrid cars (Wikipedia)
  - The extruder gearbox of a Prusa MK4 3D printer (Nextruder), and geared stepper motors in other printers (Prusa; Wikipedia)
- **when_to_use**: Use it when you need a strong speed reduction in a small, round package with the output on the same line as the motor: robot joints and drivetrains (legged-robot joint actuators use single-stage planetary gearboxes of roughly 5:1 to 11:1, Singh et al. 2025), arms, winches, geared stepper motors (a geared-down stepper also gets smaller steps, Wikipedia), extruders, and cordless tools. It carries more torque than spur gears of the same size because several planets share the load, it is efficient, has little backlash, and several stages or different held parts give a wide choice of ratios (Wikipedia; gm0).
- **when_not_to_use**: Avoid it when the load must stay put with the power off: it is not self-locking, so add a brake or use a worm drive or a fine lead screw (TEA). For very high ratios in one step (roughly over 10:1) use more stages, a compound (split-ring) planetary, a strain-wave (harmonic) drive or a cycloidal drive; for near-zero backlash on a budget, strain-wave and cycloidal drives are the usual choices. For small ratios (under about 3:1) or shafts that are far apart, spur gears, belts or chains are simpler (Machine Design). For a turn round a corner use bevel or worm gears. If cost and simplicity matter more than size and strength, a spur gear train is cheaper (gm0).
- **environment_limits**: Needs constant lubrication (Wikipedia): grease can last the life of a sealed gearhead, while oil-filled units need maintenance every few thousand hours (Machine Design). Compact housings have limited ability to shed heat (MetMo). Backlash grows as the teeth wear (Machine Design). Printed PLA gears soften above about 60 C and degrade in UV light; PETG copes to about 80 C (Prusa), and EngineerDog notes PLA wears well only when kept cool.
- **safety_notes**: Meshing gears are in-running nip points that can catch fingers, hair and clothing (OSHA machine guarding), so keep the set enclosed. A small motor with a high-ratio planetary gearbox produces a large, slow torque that can crush or twist fingers. It does not hold a load when the power is lost, so a raised arm or load can fall unless there is a brake (TEA).
- **common_failures**: 1) Planets won't all mesh or the set won't assemble because the tooth counts break the ring = sun + 2 x planet or equal-spacing rules (KHK; Wikipedia). 2) Uneven load sharing from loose tolerances overloads one planet and wears it early (MetMo). 3) Printed gearboxes too tight, fused or grinding, so friction eats much of the torque (HowToMechatronics lost about half), or too loose, giving backlash. 4) Broken or stripped teeth on a too-small sun gear at high ratios (Machine Design's 10:1 limit). 5) Worn planet pins and bearings (high bearing loads, Wikipedia), or motor bearings damaged by the thrust of helical gears (Machine Design). 6) Wear from missing or dried-out grease, and backlash growing over time (Machine Design). 7) A misaligned housing, fixed by re-aligning it (Prusa).
- **related**: 
  - Compound planetary gearbox (split-ring or Wolfrom planetary): two ring gears with slightly different tooth counts for a very high ratio in one stage
  - Strain-wave gear (harmonic drive): very high ratio with almost no backlash in a flat package, but uses a flexing thin ring
  - Cycloidal drive: a lobed disc rolling in a ring of pins; high ratio and shock resistant
  - Differential (bevel gear differential): an epicyclic set used with two outputs that can turn at different speeds
  - Spur gear train: cheaper and simpler, but the output is offset from the input and fewer teeth share the load (gm0)
  - Worm drive: high ratio in one step at a right angle, and often self-locking, but much less efficient (TEA)
  - Gear bearing: a print-in-place planetary set used as a rotating bearing rather than as a reducer

### Pictures, videos and models

- **links**: 
  - [Epicyclic Gearing Stationary Ring.gif (Wikimedia Commons; Jahobr)](https://commons.wikimedia.org/wiki/File:Epicyclic_Gearing_Stationary_Ring.gif): Animation of a planetary set with the ring held still (sun 24, planets 16, ring 56 teeth) and the carrier turning *(licence: CC0 1.0 (public domain))*
  - [Planetary Gear Animation.gif (Wikimedia Commons; Laserlicht, from a CC0 Thingiverse model)](https://commons.wikimedia.org/wiki/File:Planetary_Gear_Animation.gif): 3D animation of a planetary gear set with three planets turning *(licence: CC0 1.0 (public domain))*
  - [Epicyclic gearing (Wikipedia)](https://en.wikipedia.org/wiki/Epicyclic_gearing): Definitions, ratio equations, the assembly rule, several animations, and photos of applications *(licence: Text CC BY-SA 4.0; images per file on Commons)*
  - [Gear systems: planetary gear system (KHK Gear Technical Reference)](https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_systems.html): Diagrams of the planetary, solar and star arrangements with the tooth-count conditions and worked ratio examples *(licence: link only)*
  - [HUANGYAN920 Mechanical: interactive animations (entries 'PLANETARY-GEAR' no. 14, 'EPICYCLIC' no. 74 and 'DOUBLE-PLANET' no. 79)](https://huangyan920.github.io/Mechanical/): Adjustable browser animations of planetary and epicyclic gear trains *(licence: MIT)*
- **make_it_yourself**: 
  - [BOSL2 gears.scad: planetary_gears(), spur_gear() and ring_gear() (OpenSCAD library source)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad): Parametric gear library whose planetary_gears() function finds tooth counts, planet positions and profile shifts for a requested ratio and fixed member *(licence: BSD 2-Clause)*
  - [Planetary Gear Print in Place (4.75:1) (Dangineering, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/273375-planetary-gear-print-in-place-4751): A simple planetary set that prints assembled as one file; print at 0.10-0.15 mm layers and turn it a few times to break it free *(licence: CC0 (public domain))*
  - [Perfect Gear Bearing (Gamma4D, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/114535-perfect-gear-bearing): Print-in-place planetary 'gear bearing' inspired by Emmett's design; 0% infill, 'ensure vertical shell thickness' off *(licence: CC BY-SA)*
  - [NEMA17 Planetary Gearbox (Davide Mognaschi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/281222-nema17-planetary-gearbox): Compact 3.7:1 (1 + 38/14) gearbox for a NEMA 17 stepper, designed for SLA resin but FDM-printable, assembled with M3 screws and greased *(licence: CC BY-NC-SA)*
  - [PA11 Carbon Fiber Planetary Gearbox (Prusament, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/253289-pa11-carbon-fiber-planetary-gearbox): Stackable demonstration planetary gearbox with a crank, designed for PA11 carbon-fibre nylon; three stages give 1:64 *(licence: CC BY-NC)*
  - [How Planetary Gears Work - 3D Printed Planetary Gearbox Design and Test (HowToMechatronics)](https://howtomechatronics.com/how-it-works/how-planetary-gears-work-3d-printed-planetary-gearbox-design-and-test/): Step-by-step design, printing and torque and backlash testing of a two-stage 16:1 PLA gearbox for a NEMA 17 stepper *(licence: link only)*
- **diagram_idea**: Front view of a sun, three planets, carrier and ring, drawn three times with a different part shaded as 'held' (ring, carrier, sun), with arrows showing each part's direction and relative speed and the ratio formula under each (1 + R/S, -R/S, 1 + S/R).
- **sources**: 
  - https://en.wikipedia.org/wiki/Epicyclic_gearing
  - https://commons.wikimedia.org/wiki/File:Epicyclic_Gearing_Stationary_Ring.gif
  - https://commons.wikimedia.org/wiki/File:Planetary_Gear_Animation.gif
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_systems.html
  - https://khkgears.net/new/gear_knowledge/Types_and_Mechanisms_of_Gear_Reducers.html
  - https://www.machinedesign.com/motors-drives/article/21834575/planetary-gears-a-review-of-basic-design-criteria-and-new-options-for-sizing
  - https://gm0.org/en/latest/docs/power-and-electronics/motor-guide/gearbox-anatomy.html
  - https://www.revrobotics.com/rev-41-1600/
  - https://technische-antriebselemente.de/en/guides/worm-vs-planetary-gearbox/
  - https://howtomechatronics.com/how-it-works/how-planetary-gears-work-3d-printed-planetary-gearbox-design-and-test/
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - https://www.metmo.co.uk/blogs/news/planetary-gears-explained-a-design-written-in-the-stars
  - https://help.prusa3d.com/article/gearbox-alignment-core-one-l-core-one-xl-mk4-s-mk3-9-s_465779
  - https://help.prusa3d.com/article/mk4s-glossary_980102
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://huangyan920.github.io/Mechanical/
  - https://arxiv.org/abs/2506.16356
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part ⚑ *needs confirming (best guess): first-listed process is off-the-shelf, but `print_in_place` is yes*
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** input_output, materials, processes, seal

## 94 Compound planetary gearbox (split-ring or Wolfrom planetary)

*gear trains, gearboxes & transmissions.* A planetary set with two ring gears of slightly different tooth counts, giving a very high reduction in one stage; popular in 3D-printed robot actuators

### What it is

- **plain_name**: A flat gearbox where small gears roll round a centre gear inside two toothed rings that are almost, but not quite, the same size: one ring is held still and the tiny difference makes the other ring creep round very slowly, giving a huge slow-down in one step
- **term**: Compound planetary gearbox with two ring gears (split-ring planetary gearbox; Wolfrom planetary gear train, also called a 3K planetary)
- **aliases**: 
  - split-ring planetary gearbox / split ring planetary gear
  - split-ring compound epicyclic gearbox
  - split-ring compound-planet epicyclic gear set
  - split annulus planetary (name used by Hackaday commenters)
  - differential planetary gearbox (maker usage, e.g. Gear Down For What?; KHK lists 'differential planetary gears' as a family)
  - Wolfrom gearbox / Wolfrom planetary gear train (Wolfrom PGT, WPG)
  - 3K planetary gearbox (3K type)
  - Wolfrom-based compound planetary gear train (C-PGT)
  - high-ratio planetary gearbox
  - Wolfromgetriebe / Wolfrom-Planetengetriebe (German)
  - 'mystic gearbox' (nickname reported from Japan because of its surprisingly low efficiency)
  - Bilateral Drive (a research variant of the Wolfrom layout)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: A planetary gear set whose planet gears mesh with two ring gears that differ by only a few teeth; one ring is fixed and the other is the output, so each trip of the planets round the fixed ring nudges the output ring on by the tooth difference, giving reductions from about 30:1 to over 200:1 in one flat stage.
- **complexity**: A small assembly that acts as one unit: a sun gear on the motor shaft; 2 to 6 planet gears (either plain wide gears that reach both rings, or 'compound' double gears with one toothed section for each ring); a fixed ring gear (internal gear) that is part of the housing; a second, turning ring gear that is the output; plus bearings, a planet carrier or spacer plates (some designs have no carrier at all), screws and grease.
- **how_it_works**: The motor turns the central sun gear, which drives the planets round inside the fixed ring, just as in an ordinary planetary gearbox. The planets also mesh with a second ring stacked next to the first that has a few more or fewer teeth. Because the planets turn by the same amount against both rings, each time they go once round the fixed ring the output ring is pushed on by only the difference in tooth count (for example 2 teeth out of 60), so it turns very slowly and with a lot of force. The total ratio is the ordinary sun-to-planet-carrier reduction multiplied by a large extra factor set by that tooth difference (a differential effect).

### Finder attributes

- **job**: change speed or turning force: a very large slow-down and torque increase (hobby builds typically about 30:1 to 200:1) in one flat stage, with the output on the same line as the motor
- **motion**: rotate: continuous rotation in at the sun gear, much slower continuous rotation out at the output ring, on the same axis; unlimited range, either direction
- **degrees_of_freedom**: 1: with one ring held by the housing, turning the sun gear is the only independent motion; the output ring's position is tied to it by the tooth counts (if neither ring were held it would be a two-input differential)
- **special_behaviour**: 
  - none: its job is simply a very large speed reduction. ⚑ [uncertain] High-ratio printed versions can be stiff or impossible to turn from the output, which looks like self-locking, but that comes from friction and is not dependable, so don't use it as a brake; some research designs (the Bilateral Drive, the WOLF actuator) are deliberately made easy to turn backwards *(⚑ parts need confirming)*
- **holding_principle**: not a holding joint (it moves or passes on motion): it transmits rotation, shape (the parts interlock; form-fit): the turning force passes through meshing gear teeth
- **input_output**: Continuous rotation -> slower continuous rotation, shafts in line (coaxial). Ratio for sun input, ring 1 fixed and ring 2 as output: G = (1 + R1/S) / (1 - (R1 x P2)/(P1 x R2)), where S, R1 and R2 are the sun and ring tooth counts and P1, P2 the planet teeth meshing ring 1 and ring 2 (COMPAct paper, Singh et al.). With identical planet halves (P1 = P2) this is (1 + R1/S) / (1 - R1/R2). Examples: 34:1 (WOLF actuator), 40:1 (RR1 robot arm shoulder), about 63:1 (regularfry), almost 100:1 (SirekSBurom, 56- and 58-tooth rings), 160:1 (Gear Down For What?), about 180:1 (Awesci), 275:1 (R2poweR research gearbox) and up to 400:1 (Reflex Torque Amplifier). Direction: from the formula, the output turns the same way as the motor when the output ring has more teeth than the fixed ring, and the opposite way when it has fewer ⚑ [uncertain: the CoolEpicyclicGearing README states the opposite rule, so check with a calculator]. Efficiency: the Wolfrom layout is 'known for bad efficiency' because a large 'blind power' circulates through the ring meshes (Höhn et al. 2020); a calculated i = 100 industrial example is about 90% with standard teeth and about 97% with special low-loss teeth, and a 3D-printed plastic research gearbox reached 85% at 275:1 (Power Transmission Engineering 2023), but ordinary hobby prints are often much less efficient ⚑ [uncertain]. Back-drivable: depends on ratio and design: yes for the 34:1 WOLF actuator ('fully backdriveable') and for the 102:1 Bilateral Drive (89.2% backward efficiency); high-ratio plastic prints are usually hard to back-drive, because friction is multiplied and the motor's inertia felt at the output grows with the square of the ratio ⚑ [uncertain for hobby builds]. *(⚑ parts need confirming)*
- **power**: passive (no power needed). When it is driven by a motor and power is lost, it simply stops being driven; whether the load can then turn it backwards depends on the ratio and friction (see input_output), so add a brake if the load must not move
- **removability**: removable: the gears sit in a screwed-together housing and can be taken apart and refitted; print-in-place demo versions are the exception, as they print as one locked-together assembly
- **reuse_cycles**: many times: it can be opened and reassembled repeatedly; the limits are tooth wear and getting the planets back in the right orientation (phasing)
- **tools_needed**: Hex keys or a screwdriver for the housing screws; often a soldering iron for heat-set inserts, a vice or press for fitting bearings, and grease. Print-in-place demos need no tools beyond perhaps pliers to break the parts free.
- **seal**: none: the gears themselves seal nothing; a closed housing only keeps grease in and dust out
- **load**: medium to heavy for its size. Printed examples: a 160:1 gearbox lifted 260 lb (about 118 kg) turned by a drill (Hackaday on Gear Down For What?), SirekSBurom stress-tested his at 20-40 Nm for 12 hours, and the PLA test build of the WOLF actuator gave about 40.8 Nm continuous. Strong against twisting (torque) because many teeth share the load; weak points are the planets tilting ('leaning') under high output torque, which jams the teeth (CoolEpicyclicGearing), the thin teeth of each half-width ring, and side or tilting loads on the output ring, which need a proper output bearing.
- **adjustable**: No in normal use: the ratio is fixed by the tooth counts. Play can be reduced only at design time, by tightening clearances in CAD or by making the ring gears springy in the radial direction but stiff in twist (LoboCNC's anti-backlash compound planetary gearhead).
- **play_and_precision**: Small to noticeable play (backlash). Play at the motor end is divided by the huge ratio, but play in the ring meshes shows up almost directly at the output, and Hackaday readers doubted that printed plastic can really be 'low backlash'. ⚑ [uncertain] Printed planetary actuators measured in the COMPAct paper had about 0.6 degrees (single-stage) and 2.6 degrees (stepped compound) of no-load backlash; no equivalent figure was found for printed split-ring types. The output moves in very fine, repeatable steps because of the big ratio. It tolerates little misalignment: the planets must stay square to both rings, or they lean and jam (CoolEpicyclicGearing). *(⚑ parts need confirming)*
- **access_needed**: not applicable: it is a self-contained gearbox mounted on the motor; you reach it wherever its housing opens
- **materials**: Industrial: steel gears (the Wolfrom layout is used mainly for specialised high-ratio drives). Printed: PLA (Awesci, the WOLF test build), PETG (regularfry), and carbon-fibre-filled polycarbonate blend recommended for the RR1 robot arm gearbox (surynek); SLS-printed nylon or CNC-machined gears are listed as options for WOLF. Steel dowel pins or linear shafts through the planets, ball bearings, and steel screws for the housing. PLA softens above about 60 °C (Prusa).
- **maker_difficulty**: moderate: it prints well and needs few parts, but the tooth-count maths, the planet phasing and the slightly 'cheated' second ring (different tooth size or stretched teeth) are fiddly, and the printer must be well tuned so the planets mesh with both rings

### Making it

- **processes**: 
  - 3D print (FDM): the usual hobby route; many free models and calculators exist
  - 3D print (SLS nylon) and CNC machining: listed as options for the WOLF actuator
  - CNC: industrial Wolfrom gearboxes are machined steel, but they are rarely made and need tight tolerances (Höhn et al. 2020)
  - off-the-shelf part: ⚑ [uncertain] ready-made split-ring or Wolfrom gearboxes are rare for hobbyists; builders usually print them *(⚑ parts need confirming)*
- **print_in_place**: yes, for demos: tmackay's 'Solid Core Compound Planetary Gearbox (customizable)' and 'Compound Planetary Gears 1:3915' print fully assembled, relying on exactly one layer gap between the two rings; regularfry's herringbone version is 'print-in-two-places' (one ring is printed separately and squeezed on). Working gearboxes are printed as separate parts and assembled with bearings and screws.
- **making_tips_3d_printing**: 1) Don't design by trial and error: pick tooth counts with a calculator such as Pål Saugstad's Split Ring Planetary Gear Calculator or the CoolEpicyclicGearing spreadsheets, and check the ratio with the formula in input_output. 2) Each ring normally has to satisfy ring = sun + 2 x planet teeth for the planets to fit; the second ring breaks this rule, so makers either give the second ring and its planet section a slightly different tooth size (diametral pitch or module) (CoolEpicyclicGearing), or stretch the ring's teeth (tmackay: 'easier to stretch than compress and maintain clearance'), or use the same planets and a slightly adjusted ring, as Awesci's 58- and 60-tooth rings with 24-tooth planets do. 3) Planet phasing: if the ring tooth difference equals the number of equally spaced planets, the two halves of every planet can be printed in line; if the difference is 1 with n planets, each successive planet's halves must be twisted by 1/n of a tooth (CoolEpicyclicGearing; regularfry notes a 1-tooth difference would triple the ratio but makes assembly much harder). Print a number on each planet so you fit them in the right places. 4) Print the gears flat on the bed: CoolEpicyclicGearing says flat printing reduces the planets' tendency to lean and jam under torque. 5) Herringbone (double-helical) teeth keep the planets, sun and rings lined up without a separate carrier (regularfry's remix of the print-in-place gear-bearing idea). 6) Tune clearances: Awesci used PLA at 40% infill with -0.15 mm horizontal expansion so the gears meshed well; print-in-place demos use about 0.2 mm tolerance and need exactly one layer gap between the two rings, checked in the slicer's layer view (tmackay). 7) Support the planets on steel: Gear Down For What? runs 8 mm linear shafts inside the planets and uses long teeth (wide gears) for more wearing surface; RR1 uses 625 ball bearings and bearing balls for a DIY output bearing. 8) Material: PLA works for demos and light loads; for robot joints surynek recommends carbon-fibre-filled PC blend, and WOLF plans SLS nylon gears. 9) Grease the teeth, and consider low-friction sliding surfaces where parts rub (SirekSBurom planned PTFE surfaces). 10) Expect low efficiency and don't count on it to hold a load; test with the real load.
- **off_the_shelf_parts**: Ball bearings (e.g. 625, 16 x 5 mm, used in the RR1 gearbox); bearing balls (e.g. 6 mm or 4 mm) for DIY ring (slew) bearings; crossed-roller bearings (WOLF); steel dowel pins or 8 mm linear shafts for the planets; M3 screws, square nuts and heat-set threaded inserts; NEMA 17 or NEMA 23 stepper motors, small 28BYJ-48 steppers, or brushless (BLDC) motors such as the 8318 size used by WOLF; magnetic angle encoders (e.g. AS5047P); gear grease.
- **rules_of_thumb**: 
  - Ratio (sun in, ring 1 fixed, ring 2 out): G = (1 + R1/S) / (1 - (R1 x P2)/(P1 x R2)) (COMPAct, Singh et al., arXiv 2510.07197, eq. 7-8). The closer the two ring tooth counts, the higher the ratio.
  - The ring tooth counts usually differ by between 1 tooth (extreme ratios) and the number of planets (CoolEpicyclicGearing README).
  - In-phase planets need a ring tooth difference equal to the number of planets; with a 1-tooth difference and n planets, offset each planet's halves by 1/n tooth (CoolEpicyclicGearing README; regularfry on Printables).
  - For an ordinary planetary set the ring must have sun + 2 x planet teeth (woodgears.ca: R = 2 x P + S); split-ring designs deliberately bend this rule for the second ring (tmackay).
  - Efficiency: Wolfrom gearboxes are 'known for bad efficiency' because of high 'blind power' in the ring meshes; in Höhn et al.'s i = 100 example, overall efficiency rises from about 0.9 to 0.97 when low-loss tooth shapes replace standard ones (MATEC Web of Conferences 317, 01001, 2020).
  - In an optimisation for one robot motor, single-stage planetaries were best up to 7.2:1, stepped compound planetaries from 7.2:1 to 15:1, Wolfrom and two-stage planetaries competed from 15:1 to 32:1 (two-stage more efficient), and above 32:1 only the Wolfrom layout was feasible (COMPAct).
  - The motor inertia felt at the output grows with the square of the gear ratio, so very high ratios make a joint hard to back-drive (Power Transmission Engineering, April 2023).
  - Research Wolfrom gearboxes reached 275:1 at 85% load-dependent efficiency with 3D-printed plastic gears (R2poweR) and 102:1 at 89.9% forward and 89.2% backward efficiency (Bilateral Drive) (Power Transmission Engineering, April 2023).

### When to use it

- **everyday_examples**: 
  - The motor units in car power mirrors and actuators for aircraft wing flaps, and some antique clocks (all named by the CoolEpicyclicGearing README)
  - Hobby robot arm joints, e.g. the shoulder of the RR1 desktop robot arm (40:1)
  - DIY star trackers for astrophotography, where one very slow, smooth turn is needed (Awesci's 180:1 gearbox)
  - Portable radar equipment in World War II, according to Wikipedia (marked 'citation needed' there)
- **when_to_use**: Use it when you need a big slow-down (or a big increase in turning force) in a flat, compact package with the output in line with the motor, especially when you are 3D printing: for example a stepper or brushless motor driving a robot arm joint, a camera or telescope mount, a star tracker, a winch or a slow turntable. One split-ring stage can replace two or three ordinary planetary stages, uses few parts, and prints without special tools.
- **when_not_to_use**: Avoid it when efficiency matters most (battery robots, things that run continuously at power), because the ring meshes waste a lot of energy; a two-stage planetary gearbox is often more efficient up to about 30:1 (COMPAct). Avoid it when you need zero play and very accurate positioning under load; a strain-wave gear (harmonic drive) or cycloidal drive does better. For modest ratios (under about 7:1) a simple planetary set is lighter and more efficient. Don't use it as the only thing holding a load that must never drop: add a brake or a ratchet. If you need a right-angle drive or self-locking, use a worm drive.
- **environment_limits**: Heat: PLA softens and deforms above about 60 °C (Prusa), and friction in a high-ratio printed gearbox makes heat; PETG copes with up to about 80 °C (Prusa). Grit gets into greased teeth, so keep it covered. ⚑ [uncertain] Printed plastic gears creep under a constant load, so a gearbox holding a load for long periods may lose position or deform. *(⚑ parts need confirming)*
- **safety_notes**: The huge torque multiplication means even a small motor can crush fingers or break parts, and the gaps between planets and rings are pinch points ⚑ [uncertain], so keep fingers out while it runs. It is not a safety brake: a load may creep or drop. Overloaded PLA parts can break into sharp shards (Prusa). *(⚑ parts need confirming)*
- **common_failures**: 1) Planets lean under high output torque and jam the teeth: print the gears flat, support the planets on steel shafts and bearings, and keep the housing stiff (CoolEpicyclicGearing; Gear Down For What?). 2) It won't assemble or it binds because the planets are out of phase: follow the phasing rule and number the planets (CoolEpicyclicGearing). 3) The two rings fuse together in print-in-place demos: check for exactly one clear layer between them in the slicer (tmackay). 4) Too much friction or binding from printing errors on small teeth: tune the printer, use horizontal expansion, or add flexible ring gears; don't just open up the clearances, which adds play (LoboCNC; Awesci). 5) Very low efficiency and heat: grease it, choose a less extreme ratio, or use a two-stage planetary instead (Höhn et al.; COMPAct). 6) Worn or skipping teeth on the slightly mismatched ring after heavy use ⚑ [uncertain]: use wider gears, stronger material and a proper output bearing. *(⚑ parts need confirming)*
- **related**: 
  - Planetary gear set (epicyclic gearing): the simple version with one ring; lighter and more efficient but only about 3:1 to 7:1 per stage (COMPAct found single-stage feasible up to 7.2:1)
  - Stepped-planet compound planetary: each planet has a large and a small gear but there is only one ring; moderate ratios (COMPAct: up to about 18:1), used in the Rohloff bicycle hub (Wikipedia)
  - Multi-stage planetary gearbox: stack ordinary stages for high ratios; more parts and length but usually more efficient than a split ring at up to about 30:1 (COMPAct)
  - Strain-wave gear (harmonic drive): similar 'small tooth difference' trick using a flexing toothed ring; zero backlash and high ratios, but harder to print (Hackaday readers pointed out that SirekSBurom's 'harmonic' gearbox was really a split ring)
  - Cycloidal drive: a lobed disc wobbling inside a ring of pins; lower ratios per stage but low play, stiff and shock-resistant (Roozing and Roozing 2022)
  - Eccentric small-tooth-difference planetary (a gear wobbling inside a ring with a couple more teeth, output taken off by pins): the gear-toothed cousin of the cycloidal drive (Nguyen Duc Thang, 'Planetary Reduction Gear 2')
  - Worm drive: a high ratio in one step at right angles, often self-locking, but less efficient and not in line

### Pictures, videos and models

- **links**: 
  - [Torque Testing 3D Printed Gearboxes! (Gear Down For What?, YouTube)](https://www.youtube.com/watch?v=tgJUiEC9_-A): 3D-printed differential (split-ring) planetary gearboxes loaded until they fail, and what happens when you try to turn them backwards *(licence: link only (standard YouTube licence))*
  - [You Won't Believe What This 3DP Gearbox Can Do! (Gear Down For What?, YouTube; linked from Hackaday, title checked via YouTube oEmbed)](https://www.youtube.com/watch?v=b6cDOyxub8w): A 160:1 printed split-ring planetary gearbox, driven by a drill, lifting truck tyres and a 120 lb anvil *(licence: link only (standard YouTube licence))*
  - [Unique Planetary Gearbox Can Be Custom Printed For Steppers (Hackaday, 2017)](https://hackaday.com/2017/03/02/unique-planetary-gearbox-can-be-custom-printed-for-steppers/): Photos and explanation of SirekSBurom's printed NEMA 17 gearbox with 56- and 58-tooth rings (almost 100:1) *(licence: link only)*
  - [3D Printed Split-Ring Planetary Gearbox (Awesci)](https://awesci.com/3d-printed-split-ring-planetary-gearbox/): Photos, tooth counts (12-tooth sun, 24-tooth planets, 58- and 60-tooth rings) and a plain explanation of how the two rings create a 180:1 reduction under 1 cm thick *(licence: link only)*
  - [Split Ring Planetary Gear High Torque (Stuff Gets Made, YouTube)](https://www.youtube.com/watch?v=E-GepBIq_Vk): Building and testing a split-ring compound-planet printed gearbox *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Split-Ring Planetary Reduction Gear (regularfry, Printables)](https://www.printables.com/model/68392-split-ring-planetary-reduction-gear): OpenSCAD herringbone split-ring gear, about 63:1, remixed from the print-in-place gear-bearing idea; one ring printed separately and squeezed on (tested in PETG) *(licence: CC BY-NC-SA)*
  - [Solid Core Compound Planetary Gearbox (customizable) (tmackay, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/63415-solid-core-compound-planetary-gearbox-customizable): Customizable print-in-place split-ring gearbox; the author suggests about 50:1 to 100:1 as a practical target and explains stretching the ring teeth to allow more tooth-count choices *(licence: CC BY-SA)*
  - [Split Ring Planetary Gearbox (surynek, Printables)](https://www.printables.com/model/826668-split-ring-planetary-gearbox): 40:1 split-ring gearbox for the shoulder of the RR1 robot arm with a NEMA 23 stepper; 625 bearings, bearing-ball ring bearing; CAD on GitHub *(licence: GNU GPL v2.0)*
  - [WOLF Actuator V1.1 (Wolfrom PGT) (Anthrobotics, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/939980-wolf-actuator-v11-wolfrom-pgt): 3D-printable brushless robot actuator using a carrier-less Wolfrom gear train, 34:1, back-drivable; includes a planet alignment tool *(licence: CC BY-SA)*
  - [Split Ring Planetary Gear Calculator (Pål Saugstad)](https://saugstad.net/gear-animation/calculate.html): Web calculator that searches tooth counts for a wanted split-ring (or split-sun) ratio *(licence: not stated)*
  - [CoolEpicyclicGearing (IdeaPropulsionSystems, GitHub)](https://github.com/IdeaPropulsionSystems/CoolEpicyclicGearing): Spreadsheets, 3D models and a plain-English guide to split-ring compound-planet gear sets, including planet phasing *(licence: not stated)*
- **diagram_idea**: Top-down animation of three planets rolling inside a fixed 58-tooth ring with a 60-tooth output ring drawn as a second, offset circle, a coloured marker tooth on the output ring creeping forward 2 teeth each time the planets go round once, beside a counter showing the sun's turns.
- **sources**: 
  - https://en.wikipedia.org/wiki/Epicyclic_gearing
  - https://www.powertransmission.com/on-the-potential-of-high-ratio-planetary-gearboxes-for-next-generation-robotics
  - https://www.matec-conferences.org/articles/matecconf/pdf/2020/13/matecconf_pt2020_01001.pdf
  - https://arxiv.org/pdf/2510.07197
  - https://api.semanticscholar.org/graph/v1/paper/2de1d6abb21caff2056ee0e7a6e662e68df474eb?fields=title,authors,year,venue,abstract,externalIds,openAccessPdf
  - https://khkgears.net/new/gear_knowledge/Types_and_Mechanisms_of_Gear_Reducers.html
  - https://woodgears.ca/gear/planetary.html
  - https://hackaday.com/2017/03/02/unique-planetary-gearbox-can-be-custom-printed-for-steppers/
  - https://hackaday.com/2017/07/27/3d-printed-gearbox-lifts-an-anvil-with-ease/
  - https://github.com/IdeaPropulsionSystems/CoolEpicyclicGearing
  - https://raw.githubusercontent.com/IdeaPropulsionSystems/CoolEpicyclicGearing/master/README.md
  - https://awesci.com/3d-printed-split-ring-planetary-gearbox/
  - https://saugstad.net/gear-animation/calculate.html
  - https://www.mattieuzhai.com/split-ring-planetary-gearbox
  - https://www.youtube.com/watch?v=tgJUiEC9_-A
  - https://www.youtube.com/watch?v=E-GepBIq_Vk
  - https://www.youtube.com/watch?v=b6cDOyxub8w
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/68392-split-ring-planetary-reduction-gear
  - https://www.printables.com/model/826668-split-ring-planetary-gearbox
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, press or vice, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, input_output, play_and_precision, processes, safety_notes, special_behaviour

## 95 Strain-wave gear (harmonic drive)

*gear trains, gearboxes & transmissions.* An oval part flexes a thin toothed ring inside a slightly larger ring gear, giving a large, backlash-free reduction in a flat package

### What it is

- **plain_name**: A flat gearbox where a spinning oval part squashes a thin, bendy toothed ring so its teeth catch inside a slightly bigger toothed ring at two points; as the oval spins, the bendy ring creeps round a couple of teeth per turn, giving a huge slow-down with no wobble or play
- **term**: Strain-wave gear (strain wave gearing; harmonic drive)
- **aliases**: 
  - harmonic drive (Harmonic Drive is a brand of Harmonic Drive LLC / Harmonic Drive SE, but the name is widely used for the type)
  - harmonic gear / harmonic gearing
  - harmonic reducer / harmonic gearbox
  - strain wave gear / strain wave gearbox
  - wave gear
  - flexspline gear (after its flexible part)
  - cup type, silk hat (hat) type and pancake type harmonic gears (variants named after the flexspline's shape)
  - chain harmonic drive (a roller chain used in place of the flexible gear, shown by Nguyen Duc Thang)
  - Wellengetriebe (German)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: compliant mechanisms & flexures
- **one_liner**: An oval cam with a thin bearing (wave generator) bends a thin-walled toothed sleeve (flexspline) into an oval so its teeth mesh with a rigid internal-toothed ring (circular spline) at two points; because the sleeve has two fewer teeth, each turn of the cam shifts it by two teeth, giving a 30:1 to over 300:1 backlash-free reduction in one flat stage.
- **complexity**: A small assembly that acts as one unit, with three main parts: the wave generator (an oval hub with a thin-raced ball bearing, or bearings or balls round an oval plug, on the motor shaft), the flexspline (a thin, flexible cup, hat or sleeve with teeth on the outside) and the circular spline (a rigid ring with internal teeth). Pancake types add a second ring (dynamic spline). Plus output bearings, a housing, often an Oldham coupling on the motor shaft, and grease.
- **how_it_works**: The flexspline is round when relaxed and has slightly fewer teeth (usually two fewer) than the rigid ring around it. The oval wave generator inside it stretches it into an oval, so its teeth mesh fully with the ring only at the two ends of the long axis. As the motor turns the oval, the two meshing zones travel round like a wave, and after one full turn the flexspline has shifted by only the two-tooth difference relative to the ring. With the ring fixed, the flexspline (the output) therefore turns once for every (flexspline teeth / 2) turns of the motor, in the opposite direction.

### Finder attributes

- **job**: change speed or turning force: a very large slow-down and torque increase (typically 30:1 to 320:1) in one flat, in-line stage, with almost no play
- **motion**: rotate: continuous rotation in at the wave generator, much slower continuous rotation out at the flexspline (or circular spline), on the same axis; unlimited range, either direction
- **degrees_of_freedom**: 1: with one spline held by the housing, turning the wave generator is the only independent motion; the output is tied to it by the tooth counts (all three parts free would make it a differential with 2 inputs)
- **special_behaviour**: 
  - none of the listed behaviours: its special property is near-zero backlash (play) with a very high ratio. It is not reliably self-locking: industrial units can be turned from the output once a 'backdriving torque' is exceeded, and the maker says a fail-safe brake must be used to hold a load (Harmonic Drive CSF/CSG catalogue); some printed ones are reported as not back-drivable (cTallakson on Printables)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it transmits rotation
  - shape (the parts interlock; form-fit): the turning force passes through meshing teeth, held in mesh by the wave generator bending the flexspline
- **input_output**: Continuous rotation -> much slower continuous rotation, shafts in line (coaxial); a hollow centre is possible. Ratio: with the circular spline fixed and the flexspline as output, reduction = flexspline teeth / (circular spline teeth - flexspline teeth), output turning the opposite way (Wikipedia: 200 and 202 teeth give 100:1); with the flexspline fixed and the circular spline as output, reduction = circular spline teeth / tooth difference, same direction (Wikipedia's second formula; Nguyen Duc Thang's chain versions show both cases). Single-stage range 30:1 to 320:1 (Wikipedia) or 30:1 to 350:1 (RoyMech); low ratios are limited by flexspline fatigue (RoyMech). Efficiency: about 70% for large-duty units (RoyMech); it depends on ratio, input speed, load, temperature and lubricant, and drops at loads below rated torque (Harmonic Drive catalogue); Roozing and Roozing (2022) note harmonic drives are 'very inefficient at low speeds and torques'. Back-drivable: yes once the backdriving torque is exceeded, but it is not dependable either way, so never rely on it to hold a load (Harmonic Drive catalogue).
- **power**: passive (no power needed). When it is driven by a motor and power is lost, a load may turn it backwards once the backdriving torque is exceeded, so the maker says to add a fail-safe brake where the load must be held
- **removability**: removable: the component set (wave generator, flexspline, circular spline) bolts into a housing and can be taken apart; printed versions are screwed together. Print-in-place demos are the exception
- **reuse_cycles**: many times: it can be dismantled and reassembled; the real limit is flexspline fatigue, and reassembly must be concentric (off-centre assembly causes early failure)
- **tools_needed**: Hex keys or a screwdriver for mounting and housing screws; grease; for printed versions often a soldering iron for heat-set inserts and a vice or press for bearings. Print-in-place demos need none beyond perhaps a 6 mm hex key to turn the input (eveve05).
- **seal**: none: the gear itself seals nothing; industrial housed units use seals, gaskets or sealant to keep grease and separated oil in (Harmonic Drive installation guide)
- **load**: medium to heavy for its size: industrial units carry high torque for their weight (RoyMech: under 50% of the weight of a conventional gearbox) but are 'not suitable for high power levels above 6 kW' (RoyMech), and their rated torque is set by flexspline fatigue (Harmonic Drive catalogue). Printed examples: about 4 Nm (Brian Brocken, TPU flexspline), 10 Nm repeatedly (3DprintedLife, PLA) and about 35 Nm theoretical (HasslerEngineering, PETG). Weak against overloads while turning (the teeth skip, called ratcheting) and against side loads on the output unless it has its own bearings (Luke's compact 44:1 design needs an extra output bearing).
- **adjustable**: No: the ratio is fixed by the tooth counts and there is nothing to adjust in use; the fit is set at design time (printed designs are tuned by changing the flexspline's size and the wave generator's shape)
- **play_and_precision**: None to very small backlash: the maker says the gear mesh has zero backlash, though the usual Oldham coupling on the motor shaft adds a small amount (Harmonic Drive catalogue). It is springy in twist at low torque (torsional 'wind-up', Wikipedia) and shows a little hysteresis. Very good repeatability and resolution (Harmonic Drive; RoyMech). Printed versions have some play, e.g. from triangular teeth (HasslerEngineering). It tolerates little misalignment: the three parts must stay concentric and square to each other, and an off-centre assembly ('dedoidal') causes noise, vibration and early failure (Harmonic Drive installation guide and catalogue); the Oldham coupling absorbs small motor-shaft misalignment.
- **access_needed**: not applicable: it is a self-contained gearbox mounted on the motor; you reach it wherever its housing opens
- **materials**: Industrial: an alloy steel flexspline cup, steel circular spline and a special thin-raced ball bearing on an oval steel hub (Harmonic Drive), run in grease or oil. Printed: the flexspline is the hard part and makers disagree: TPU worked for Brian Brocken (after his PLA flexspline exploded) and for Roland Daum (TPU flexspline, PLA+ for the other parts), PETG worked for HasslerEngineering (0.75 mm wall), eveve05 and Luke, nylon for Unnecessary Automation (who found PLA 'too stiff and will break' and 95A TPU 'too flexible'); OddHatter used PLA+ at 100% infill but expected PETG to be better. Rigid parts (circular spline, housing) in PLA, PLA+ or ABS, with ball bearings, bearing balls and steel screws.
- **maker_difficulty**: hard: industrial units are expensive precision parts, and printed ones need a well-calibrated printer, fine nozzles or layers, and several tries to get the flexspline's material, wall thickness and fit right; buy one for serious loads

### Making it

- **processes**: 
  - off-the-shelf part: industrial component sets and housed units (the usual choice for precise robot joints)
  - 3D print (FDM): popular DIY builds for NEMA 17 steppers, telescope mounts and robot joints; flexspline in TPU, PETG or nylon
  - 3D print (resin): ⚑ [uncertain] no tested resin build was found
  - CNC: industrial parts are precision machined steel *(⚑ parts need confirming)*
- **print_in_place**: yes, for demos: eveve05's 'Harmonic drive (print in place)' is a 19:1 set (38-tooth ring, 36-tooth flexible gear) printed already assembled in PETG. Working gearboxes are printed as separate parts and assembled with bearings, balls and screws.
- **making_tips_3d_printing**: 1) Choose the flexspline material carefully, and expect to experiment: Brian Brocken's PLA flexspline 'made a few weird noises and pretty much exploded', while TPU worked once the fit was tightened; HasslerEngineering prints the whole gearbox in PETG with a 0.75 mm flexspline wall; Unnecessary Automation prints the flex gear in nylon and found PLA too stiff and 95A TPU too flexible. 2) Make a TPU flexspline tall (long) enough: Jared Fenster found an 8 mm tall TPU flexspline could not drag the rest of itself round and planned 20 mm. 3) Give the wave generator enough contact: Brocken went from 4 to 6 bearings to stop a TPU flexspline slipping; other designs roll a ring of bearing balls round an oval plug (ZeroBacklash; Unnecessary Automation uses 20 x 4 mm balls). Luke found the flexspline deforms into gaps between supports at high load, so support it along the whole oval. 4) Use the usual two-tooth difference (e.g. 50/48, 38/36, 62/60) and keep the teeth small: Luke prints the flexspline and splines with a 0.25 mm nozzle at 0.12 mm layers, Roland Daum at 0.1 mm layers. 5) Calibrate first: Luke stresses tuning flow, pressure or linear advance and the filament's shrink factor, because 'that makes the difference between success and failure'; Roland Daum's model is drawn with about +/-0.25 mm tolerances for an Ender 3 V3 SE. 6) Print the flexspline and wave generator solid (OddHatter used 100% infill); the housing can be 20% infill. 7) Hold the output in ball bearings so the circular spline stays round and can't be pulled out (Luke). 8) Grease the teeth and the wave generator. 9) For TPU, print slowly (Prusa suggests about 20 mm/s, 30-40 mm/s at most) with little or no retraction. 10) Expect fatigue: bending the flexspline twice per input turn wears it out, and HasslerEngineering reports layer separation (delamination), so print spares and test under the real load.
- **off_the_shelf_parts**: Harmonic drive component sets (cup type, silk hat type, pancake type with dynamic spline) and housed gear units, specified by size and ratio (e.g. Harmonic Drive CSF/CSG series (brand)); Oldham couplings; thin-section and deep-groove ball bearings (e.g. 6810-2RS, 606ZZ, 623ZZ, 6805, 6000 series, 7 x 14 x 5 mm); loose bearing balls (e.g. 4 mm, or 6 mm Airsoft BBs in one printed design); NEMA 17 or NEMA 23 steppers or small 28BYJ-48 steppers; heat-set inserts and M3 screws; gear grease.
- **rules_of_thumb**: 
  - The flexspline normally has two fewer teeth than the circular spline, so each turn of the wave generator moves it by two teeth (Harmonic Drive LLC technology page; RoyMech).
  - Ratio (circular spline fixed, flexspline output) = flexspline teeth / tooth difference, output reversed; e.g. 200 and 202 teeth give 100:1 (Wikipedia, 'Strain wave gearing'). RoyMech gives the similar example 80/(80-78) = 40:1.
  - Single-stage ratios are about 30:1 to 320:1 (Wikipedia) or 30:1 to 350:1 (RoyMech); ratios below about 30:1 are limited by flexspline fatigue (RoyMech), and low-ratio harmonic drives are hard to make and inefficient at low speeds and torques (Roozing and Roozing 2022).
  - Efficiency is about 70% for large-duty units (RoyMech) and depends on ratio, input speed, load torque, temperature and lubricant, falling when the load is below rated torque (Harmonic Drive CSF/CSG catalogue).
  - Not suitable above about 6 kW (RoyMech).
  - Rated and repeated-peak torques are based on infinite flexspline fatigue life; excessive torque while running makes the teeth skip (ratcheting), which can leave the flexspline off-centre ('dedoidal') and lead to fatigue failure (Harmonic Drive CSF/CSG catalogue).
  - The S tooth profile puts up to 30% of the teeth in contact, against 15% for the traditional profile, roughly doubling stiffness at low and mid torque (Harmonic Drive CSF/CSG catalogue).
  - Backdriving torque should not be relied on to hold the output; use a fail-safe brake (Harmonic Drive CSF/CSG catalogue).
  - Keep oil temperature below 90 °C, above which it quickly loses its lubricating ability (Harmonic Drive CSF/CSG catalogue).

### When to use it

- **everyday_examples**: 
  - Robot arm joints in factories and research labs (Wikipedia; RoyMech)
  - The wheels of NASA's Apollo 15 Lunar Roving Vehicle, each driven through an 80:1 harmonic drive (Wikipedia)
  - Medical equipment such as patient beds and MRI gantries, and aerospace parts such as antennas and the Hubble Space Telescope (RoyMech)
  - DIY 3D-printed telescope mounts, e.g. the Keen-One harmonic drive equatorial mount shared on Printables
- **when_to_use**: Use it when you need a big slow-down with no play in a thin, light package, with the output in line with the motor, for example a robot arm joint, a camera or telescope mount, a pointing antenna or a precise rotary table. It gives very fine, repeatable positioning from a small motor, and can have a hollow centre for cables.
- **when_not_to_use**: Avoid it for low ratios (below about 30:1) or where you need the joint to be easy to push backwards (compliant or quasi-direct-drive robot legs): use a planetary or low-ratio cycloidal drive instead (Roozing and Roozing 2022). Avoid it for high power (over about 6 kW, RoyMech), for efficiency-critical continuous drives, or where shocks and overloads are frequent; a cycloidal drive handles shock better. Don't rely on it to hold a load; add a brake. If you want an easy first printed high-ratio gearbox, a split-ring planetary or cycloidal drive is more forgiving to print.
- **environment_limits**: Heat: keep lubricating oil under 90 °C, and efficiency falls in the cold as the grease thickens (Harmonic Drive catalogue). Printed parts: PLA softens above about 60 °C and PETG is rated for use below about 80 °C (Prusa). Fatigue: the flexspline bends twice every input turn, so it eventually cracks or, when printed, delaminates (Harmonic Drive catalogue; HasslerEngineering). ⚑ [uncertain] Soft TPU flexsplines may slip or lose grip more as they warm up and age. *(⚑ parts need confirming)*
- **safety_notes**: It is not a brake: the maker says a fail-safe brake must hold the load. The big torque multiplication means a small motor can crush fingers or break parts. A brittle printed flexspline can shatter under load (Brian Brocken's PLA one 'pretty much exploded'), so wear eye protection when testing ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) A PLA or too-stiff flexspline cracks or bursts: use TPU, PETG or nylon with a suitable wall thickness (Brocken; Unnecessary Automation; HasslerEngineering). 2) A soft flexspline slips or skips teeth (ratcheting) under load: tighten the fit, add wave-generator contact points, make the flexspline taller or choose a stiffer material (Brocken; Fenster; Unnecessary Automation). 3) Industrial units overloaded while running ratchet, end up off-centre (dedoidal), vibrate and fail early: keep torque below the ratcheting and peak ratings (Harmonic Drive catalogue). 4) Flexspline fatigue or layer separation after many cycles (HasslerEngineering). 5) Worn wave-generator sliding surfaces: use proper ball bearings rather than sliding contact (HasslerEngineering's earlier versions). 6) Noise and early wear from poor concentricity, burrs or dirt during assembly (Harmonic Drive installation guide).
- **related**: 
  - Split-ring (Wolfrom) compound planetary gearbox: gets a similar huge ratio from two rings with slightly different tooth counts, using rigid gears only; easier to print, but less efficient and with more play
  - Cycloidal drive: a lobed disc wobbling in a ring of pins; lower ratio per stage; Roozing and Roozing (2022) describe cycloidal drives as shock-robust, stiff, strong and efficient, and harmonic drives as very inefficient at low speeds and torques; printed cycloidal drives can be easy to back-drive
  - Planetary gearbox: efficient and back-drivable at low ratios but needs several stages and has more play for big ratios
  - Worm drive: also a big ratio in one step, but at right angles, less efficient and often self-locking
  - Chain harmonic drive: the same wave idea with a roller chain and linkage instead of a flexible gear (Nguyen Duc Thang)
  - Nested or multi-stage strain-wave gearboxes: stages stacked for extreme ratios (e.g. 'Nested Strain Wave Gearbox' on Printables)

### Pictures, videos and models

- **links**: 
  - [Harmonic-drive-explanation.gif (Wikimedia Commons, by LaurensvanLieshout)](https://commons.wikimedia.org/wiki/File:Harmonic-drive-explanation.gif): Animation of a harmonic drive with marks added to explain how the flexspline creeps round relative to the ring *(licence: GFDL 1.2 or later / CC BY-SA 3.0, 2.5, 2.0, 1.0 (choose one))*
  - [Harmonic drive animation.gif (Wikimedia Commons, by LaurensvanLieshout)](https://commons.wikimedia.org/wiki/File:Harmonic_drive_animation.gif): Simple animation of the oval wave generator, flexspline and circular spline turning *(licence: GFDL 1.2 or later / CC BY-SA 3.0, 2.5, 2.0, 1.0 (choose one))*
  - [Strain Wave Gear Technology (Harmonic Drive LLC)](https://www.harmonicdrive.net/technology/harmonicdrive): Manufacturer's illustrated explanation of the wave generator, flexspline and circular spline and the two-tooth creep *(licence: link only)*
  - [My 3D Printed Harmonic Drive is Surprisingly Powerful! (3DprintedLife, YouTube; linked from Hackaday, title checked via YouTube oEmbed)](https://www.youtube.com/watch?v=Emvo3bLT-Z4): Building, test-rig tuning and torque testing of a printed harmonic drive (about 10 Nm) on a NEMA 23 stepper *(licence: link only (standard YouTube licence))*
  - [Chain harmonic drive 1 (Nguyen Duc Thang, YouTube thang010146; title checked via YouTube oEmbed)](https://www.youtube.com/watch?v=VsDJqDnqbw8): CAD animation of an oval wave generator driving a closed roller chain round a 30-tooth gear; Thang notes that merging the chain into one flexible part gives the familiar harmonic drive *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Harmonic drive (print in place) (eveve05, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/273061-harmonic-drive-print-in-place): 19:1 demo printed already assembled: 38-tooth outer ring, 36-tooth flexible gear and oval wave generator; tested in PETG, turned with a 6 mm hex key *(licence: CC BY)*
  - [Strain Wave Gearbox (Unnecessary Automation, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1098371-strain-wave-gearbox): 20:1 printable gearbox for a NEMA 17 stepper with a nylon flex gear and a ball-type wave generator (20 x 4 mm balls) *(licence: CC BY-NC-SA)*
  - [NEMA 17 Harmonic Drive; Strain Wave Gear; Ratio ~49:1 (Roland Daum, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1355057-nema-17-harmonic-drive-strain-wave-gear-wellengetr): Printable 49:1 gearbox with a TPU flexspline and PLA+ parts, six 7 x 14 x 5 bearings, 0.1 mm layers *(licence: Creative Commons Public Domain (as listed by Printables))*
  - [Compact 44:1 Harmonic Drive (Luke, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/467181-compact-441-harmonic-drive): Very compact NEMA 17 harmonic drive with a PETG flexspline printed with a 0.25 mm nozzle; detailed calibration advice and an improved wave generator *(licence: CC BY-NC-SA)*
  - [3D-printable strain wave gearbox - harmonic drive (Brian Brocken, Hackaday.io)](https://hackaday.io/project/187309-3d-printable-strain-wave-gearbox-harmonic-drive/details): Build log of a 50/48-tooth printed strain wave gearbox with belt drive (about 54:1 total, about 4 Nm), including the PLA-to-TPU flexspline change *(licence: not stated)*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (harmonic reducer entry in the gear mechanisms section)](https://huangyan920.github.io/Mechanical/): Browser-based parametric animation of a harmonic reducer among 257 mechanisms; check any numbers against a design guide *(licence: MIT)*
- **diagram_idea**: Animation of a round toothed ring with 2 fewer teeth than the outer ring being pushed into an oval by a spinning cam, with the two meshing zones highlighted and one marked tooth on the flexspline creeping backwards by two teeth each time the cam goes round once.
- **sources**: 
  - https://en.wikipedia.org/wiki/Strain_wave_gearing
  - https://commons.wikimedia.org/wiki/Category:Harmonic_drives
  - https://commons.wikimedia.org/wiki/File:Harmonic-drive-explanation.gif
  - https://commons.wikimedia.org/wiki/File:Harmonic_drive_animation.gif
  - https://www.harmonicdrive.net/technology/harmonicdrive
  - https://www.harmonicdrive.net/technology/installation-considerations
  - https://www.harmonicdrive.net/_hd/content/documents/csf-csg.pdf
  - https://roymech.org/Useful_Tables/Drive/Harmonic_Gears.html
  - https://ris.utwente.nl/ws/portalfiles/portal/295490006/3D_printable_low_reduction_cycloidal_gearing_for_robotics.pdf
  - https://hackaday.io/project/187309-3d-printable-strain-wave-gearbox-harmonic-drive/details
  - https://hackaday.com/2021/05/24/a-high-torque-3d-printed-harmonic-drive/
  - https://hackaday.com/2022/10/31/3d-printed-strain-wave-gearbox/
  - https://hackaday.io/project/196387-strain-wave-gear-robotic-joint/log/231133-flexspline-solved
  - https://hackaday.io/project/120377-3d-printed-strain-wave-gear
  - https://www.youtube.com/watch?v=Emvo3bLT-Z4
  - https://www.youtube.com/watch?v=VsDJqDnqbw8
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/main/README.md
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/main/LICENSE
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://help.prusa3d.com/article/flexible-materials_2057

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, press or vice, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, processes, safety_notes

## 96 Cycloidal drive (cycloidal reducer)

*gear trains, gearboxes & transmissions.* A lobed disc wobbles around inside a ring of pins, turning slowly as it goes, giving a large, shock-resistant reduction

### What it is

- **plain_name**: A gearbox where a wavy-edged disc, pushed round off-centre by the motor, wobbles inside a ring of pins; because the disc has one bump fewer than there are pins, it slowly turns backwards as it wobbles, and pins poking through holes in the disc pick up that slow turn
- **term**: Cycloidal drive (cycloidal speed reducer)
- **aliases**: 
  - cycloid reducer / cycloidal reducer
  - cycloidal gearbox / cycloidal gear reducer
  - Cyclo drive / Cyclo speed reducer (Sumitomo, brand; the original commercial name)
  - pin gear drive / pin-wheel reducer (cycloidal pin-wheel reducer)
  - eccentric planetary reducer with a one-tooth difference (KHK's description)
  - trochoidal curved-plate reducer (after the disc's tooth shape)
  - cycloidal disc drive / lobed disc drive
  - three-phase or three-ring cycloidal drive (a variant with three plates 120 degrees apart)
  - cycloidal drive with intermediate rollers or balls (a variant using rolling elements in a cage)
- **family**: gear trains, gearboxes & transmissions
- **one_liner**: An eccentric cam on the input shaft rolls a lobed disc (cycloidal disc) round inside a fixed ring of pins or rollers; with one lobe fewer than pins, the disc turns backwards by one lobe per input turn, and output pins in oversized holes in the disc turn this slow wobbling spin into a steady output rotation, giving about 10:1 to 100:1 per stage with low play and high shock resistance.
- **complexity**: A small assembly that acts as one unit: input shaft with an eccentric cam and bearing; one, two or three cycloidal discs (lobed plates with holes); a ring of fixed pins or rollers (often ball bearings or roller sleeves) set in the housing; an output disc or flange carrying output pins (often with bearings or rollers) that pass through the disc's holes; output bearing, housing, screws and grease.
- **how_it_works**: The input shaft carries an off-centre cam, so as it spins it pushes the disc round in a small circle (the eccentricity), pressing its lobes against the pins of the fixed ring. The ring has one more pin than the disc has lobes, so as the contact point runs round, the disc is forced to roll backwards by one lobe for every turn of the input, turning slowly in the opposite direction. The disc's holes are bigger than the output pins by exactly twice the eccentricity, so the pins can follow the wobble while picking up only the slow turn. Because about half the lobes touch pins at once and the contacts roll rather than slide, it carries large and shock loads for its size.

### Finder attributes

- **job**: 
  - change speed or turning force: a large slow-down and torque increase (hobby prints typically about 8:1 to 40:1, commercial units up to 119:1 per stage) with the output in line with the motor, low play and good shock resistance
- **motion**: rotate: continuous rotation in, slower continuous rotation out on the same axis (in the usual fixed-pin arrangement the output turns the opposite way); unlimited range, either direction. Inside, the disc wobbles (moves in a small circle) as well as turning
- **degrees_of_freedom**: 1: with the pin ring fixed to the housing, turning the input shaft is the only independent motion; the output is tied to it by the lobe and pin counts
- **special_behaviour**: 
  - none of the listed behaviours: its special properties are low play, stiffness and resistance to shock and overload (KHK; Roozing and Roozing 2022). It is not self-locking: low-ratio printed versions are back-drivable (HowToMechatronics; Roozing and Roozing), so don't use it as a brake
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it transmits rotation
  - shape (the parts interlock; form-fit): the turning force passes through the disc's lobes pressing on the ring pins and through the output pins in the disc's holes
- **input_output**: Continuous rotation -> slower continuous rotation, shafts in line (coaxial). Ratio: with L lobes and P ring pins, reduction = L / (P - L); normally P - L = 1 to maximise contact, so the ratio equals the number of lobes (= pins - 1), and the output turns opposite to the input (Roozing and Roozing 2022; Wikipedia; Nguyen Duc Thang). Examples: 8:1 (Advanced Hobby Lab, 9 pins), 10:1 (Petteri Aimonen's Commons model; osamutake's educational model), 11:1 (Roozing and Roozing), 15:1 (HowToMechatronics, 16 rollers), 40:1 (Mickey666Maus); commercial units up to 119:1 in one stage and 7,579:1 in two (KHK; Wikipedia gives 7,569:1). Efficiency: about 93% single-stage and 86% two-stage (Wikipedia); about 98% for one stage and 94% for three (KHK, for Cyclo reducers); fitting bearings to the pins raises peak efficiency to about 90%, like planetary gears (Roozing and Roozing, citing Sensinger 2013). Printed: 92% measured for Advanced Hobby Lab's 8:1 NEMA 17 gearbox (Hackaday 2026); HowToMechatronics' PLA 15:1 drive gave about 10 times the motor torque (roughly 66% of the ideal). Back-drivable: yes for low-ratio designs (HowToMechatronics' 15:1; Roozing and Roozing's 11:1 demonstrates back-drivability) ⚑ [uncertain] (no source was found on whether high-ratio industrial units can be back-driven). *(⚑ parts need confirming)*
- **power**: passive (no power needed). When it is driven by a motor and power is lost, a low-ratio cycloidal drive can be turned backwards by the load, so add a brake if the load must be held
- **removability**: removable: the discs, pins and bearings sit in a screwed-together housing and can be taken apart and refitted; print-in-place demos are the exception
- **reuse_cycles**: many times: it can be dismantled and reassembled repeatedly; the limits are wear of the pins, holes and disc lobes
- **tools_needed**: Hex keys or a screwdriver for housing and shoulder screws; a vice or press for fitting bearings; often a soldering iron for heat-set inserts; grease. Print-in-place demos need none beyond pliers to free the parts (Ole Brouer).
- **seal**: none: the mechanism seals nothing; a closed housing keeps grease in and dirt out
- **load**: heavy for its size: many lobes share the load at once, so KHK calls it 'very strong against shock and overload for its size'. Printed examples: Roozing and Roozing's PLA 11:1 gearbox was tested to 44 Nm static load and survived impacts at motor accelerations over 6,600 rad/s2; HowToMechatronics' PLA 15:1 drive gave 260 Ncm; Sergei Mishin's 20:1 three-plate drive took 9.8 Nm before skipping. Weak points: printed pins (use steel), the pin ring being pushed outwards (a Hackaday reader suggests a backing ring), the eccentric shaft slipping on the motor shaft (Me Virtuoso), and output side loads without a good output bearing.
- **adjustable**: No in normal use: the ratio is fixed by the lobe and pin counts. Play and friction are set at design time by the clearances; a small preload is easy with plastics (Roozing and Roozing).
- **play_and_precision**: Very small play: industrial units can have zero backlash (Wikipedia); Roozing and Roozing's printed prototypes measured about 0.35 degrees worst-case play (0 and 0.7 degrees on two others), with friction about 1% of maximum torque and stiffness about 633 Nm/rad. However the effective ratio varied by about 9% round a turn (up to 1.8 degrees position error), from output pin and hole tolerances. Repeatable, but under heavy load the printed drive twists noticeably. It needs accurate alignment: the pin ring, input shaft and output must be concentric, and the input shaft is best supported at both ends (Roozing and Roozing).
- **access_needed**: not applicable: it is a self-contained gearbox mounted on the motor; you reach it wherever its housing opens
- **materials**: Industrial: hardened steel discs, pins and rollers, run in grease or oil. Printed: discs and housings in PLA (Roozing and Roozing; HowToMechatronics), ABS, PETG or PLA (Mickey666Maus prints in ABS but suggests PLA or PETG for discs), or resin (a stereolithography cycloidal drive photo on Wikimedia Commons), always with steel pins, dowels or shoulder screws and small ball bearings for the rollers and output pins. Flat discs can also be laser cut from a DXF profile (Me Virtuoso's simulator exports DXF). PLA softens above about 60 °C (Prusa).
- **maker_difficulty**: moderate: the disc profile comes from free generators and prints flat without supports, but it needs accurate holes, steel pins and several small bearings, and the eccentric shaft and tolerances need care to run smoothly

### Making it

- **processes**: 
  - 3D print (FDM): very popular for robot arm and leg joints and telescope mounts; discs print flat
  - 3D print (resin): possible (stereolithography example on Wikimedia Commons)
  - laser cut: flat discs and plates from a DXF profile (Me Virtuoso simulator exports DXF)
  - CNC: industrial discs are ground steel
  - off-the-shelf part: industrial cycloidal reducers and gear motors (e.g. Cyclo (brand))
- **print_in_place**: yes, for demos: Ole Brouer's 'PiP Two Stage Cycloidal Drive' (36:1) prints assembled with 0.15 mm tolerances on a well-tuned printer. Working drives are printed as separate parts and assembled with steel pins and bearings.
- **making_tips_3d_printing**: 1) Generate the disc profile rather than drawing it: Roozing and Roozing's MIT-licensed Python code checks wall thicknesses and collisions, Sergei Mishin's wdirfc script and the cycloidgen app export DXF, and HowToMechatronics draws it from the epitrochoid equations in SOLIDWORKS. Don't confuse these with cycloidal clock-gear generators, which make a different tooth shape (e.g. Hessmer's Cycloidal Gear Builder follows BS 978 Part 2 for clock gears). 2) Use one lobe fewer than pins; with two discs the pin count must be even, so the ratio is odd (Roozing and Roozing). 3) Choose the eccentricity relative to the roller size: HowToMechatronics keeps it below half the roller diameter (1.5 mm with 13 mm rollers); Roozing and Roozing used 0.45 x roller radius and warn that larger values weaken the disc and add inertia, while smaller ones add play. 4) Make each output hole's radius = output pin radius + eccentricity (Roozing and Roozing; Nguyen Duc Thang), and use as many output pins as fit, as far out as possible, to share the load. 5) Use two discs 180 degrees apart to cancel the wobble's vibration and halve the forces (Roozing and Roozing; HowToMechatronics); fast drives use three or more (Wikipedia). 6) Put small ball bearings on the ring pins and output pins (e.g. 686 bearings, 6 x 13 x 5 mm, as rollers) instead of bare printed pins, for efficiency and wear; HowToMechatronics replaced printed pins with metal shafts. 7) Print discs flat on the bed and compensate for size errors: HowToMechatronics used 0.07 mm hole horizontal expansion and 0.02 mm horizontal expansion in PLA. 8) Support the input shaft at both ends (a second bearing inside the output) and add a ring tying the ends of the output pins together for stiffness (Roozing and Roozing). 9) Clamp the eccentric firmly to the motor shaft; a C-clamp style coupling stops it slipping (Me Virtuoso). 10) Tune clearances between low play and low friction; a slight preload is easy in plastic (Roozing and Roozing). 11) Grease the lobes and pins.
- **off_the_shelf_parts**: Small deep-groove ball bearings used as ring rollers and output-pin rollers (e.g. 686-2RS 6 x 13 x 5 mm; 4 x 7 x 2.5 mm), eccentric and input bearings (e.g. 6802-2RS 15 x 24 x 5 mm, 12 x 18 x 4 mm), thin-section or four-point contact output bearings (e.g. 30 x 37 x 4 mm, 40 x 52 x 7 mm), steel dowel pins (e.g. 2 x 20 mm, 3 x 22 mm) and shoulder screws, heat-set inserts, M3 screws and nuts; NEMA 17 steppers or brushless motors (e.g. Tarot 4108, T-Motor 8012), magnetic encoders (AS5048A, AMT102); industrial cycloidal gear reducers and gear motors (Cyclo (brand)).
- **rules_of_thumb**: 
  - Reduction = lobes / (pins - lobes); with a one-lobe difference, ratio = pins - 1, and the output turns opposite to the input (Roozing and Roozing 2022, eq. 1-2; Wikipedia 'Cycloidal drive'; Nguyen Duc Thang 'Pin gear drive 3A').
  - Output hole radius = output pin radius + eccentricity (Roozing and Roozing 2022; Nguyen Duc Thang 'Pin gear drive 3A').
  - About half of the disc's lobes are in mesh at once in theory, against one or two teeth for ordinary (involute) gears, which is why it is strong against shock and overload for its size (KHK).
  - Eccentricity: below half the roller diameter (HowToMechatronics); Roozing and Roozing chose 0.45 x roller radius as a good trade-off between disc strength and play.
  - Use two discs 180 degrees apart to cancel the imbalance and halve the forces; with two discs the number of rollers must be even (Roozing and Roozing 2022). High-speed drives use three or more discs (Wikipedia).
  - Bearings on the pins instead of bushings or loose rollers raise peak efficiency to about 90% (Roozing and Roozing 2022, citing Sensinger 2013).
  - Efficiency about 93% single-stage and 86% two-stage (Wikipedia); about 98% per stage for Cyclo reducers (KHK).
  - Commercial ratios: up to 119:1 in one stage and 7,579:1 in two stages (KHK).
  - A printed PLA 11:1 drive with steel pins and bearings reached more than 40 Nm, 0.35 degrees play and 633 Nm/rad stiffness for about 98 euros of parts (Roozing and Roozing 2022).

### When to use it

- **everyday_examples**: 
  - Robot actuators and joints (Wikipedia), including the Cassie biped robot, reported to use cycloidal drives (Roozing and Roozing 2022)
  - Industrial gear motors sold under the Cyclo name since the 1930s (Wikipedia)
  - DIY 3D-printed robot arms, robot dogs and telescope mounts (e.g. 'Cycloidal Drive Equatorial Mount' on Printables)
  - Classroom and desk models that show the wobbling disc (osamutake's educational model)
- **when_to_use**: Use it when you need a strong, compact, low-play slow-down in line with the motor that can take knocks, for example robot arm, leg or exoskeleton joints, rotating platforms, winches, and telescope or camera mounts. It prints well because the load is spread over many contacts, and low-ratio versions (about 8:1 to 20:1) stay back-drivable, which suits robots that interact with people or the ground.
- **when_not_to_use**: Avoid it for very high ratios in one stage in a small printed package (a strain-wave gear or split-ring planetary goes higher), for high input speeds unless it has two or more balanced discs, or where you need very accurate positioning from the motor encoder alone under heavy load (a printed one twists and its ratio varies slightly round a turn; add an output encoder). For very low ratios (under about 5:1) a simple planetary or belt drive is simpler. Don't use it as a brake or to hold a load; add a brake or ratchet.
- **environment_limits**: Heat: PLA softens and deforms above about 60 °C (Prusa), and PETG is rated for use below about 80 °C (Prusa). Vibration: a single disc wobbles off-centre and shakes at speed; balance it with two or three discs (Roozing and Roozing; Wikipedia). ⚑ [uncertain] Printed plastic discs and pins creep and wear under constant heavy load, so play can grow over time. *(⚑ parts need confirming)*
- **safety_notes**: The torque multiplication means a small motor can crush fingers or break parts, and the wobbling disc and pins are pinch points ⚑ [uncertain]; keep it enclosed. It is not a brake: low-ratio drives let the load run back when power is lost. Overloaded PLA parts can break into sharp shards (Prusa). *(⚑ parts need confirming)*
- **common_failures**: 1) Binding or stiffness from printing tolerances: tune horizontal expansion and clearances, or scale up print-in-place demos (HowToMechatronics; Ole Brouer). 2) Printed pins break or wear: use steel pins, dowels or shoulder screws with bearings (HowToMechatronics; Roozing and Roozing). 3) The eccentric slips on the motor shaft: use a clamping coupling (Me Virtuoso). 4) Vibration and noise at speed from a single disc: use two discs 180 degrees apart (Roozing and Roozing). 5) Skipping over the pins when overloaded (Sergei Mishin's 20:1 drive at 9.8 Nm): add support and stiffness, or choose a larger size. 6) The pin ring bulges outwards under load: back it with a stiff ring (Hackaday reader suggestion). 7) Position error from ratio variation and twist under load: tighten output pin and hole tolerances, stiffen the output, or add an output encoder (Roozing and Roozing).
- **related**: 
  - Eccentric small-tooth-difference planetary gear (a gear wobbling inside an internal gear with a couple more teeth): same idea with ordinary teeth; KHK explains that involute teeth with a one-tooth difference clash at the tips, which is why cycloidal discs use a smooth trochoid profile with round pins
  - Strain-wave gear (harmonic drive): higher ratios and zero backlash in a thin package, but springier, less shock-tolerant and harder to make; Roozing and Roozing note low-ratio harmonic drives are difficult and inefficient
  - Split-ring (Wolfrom) compound planetary gearbox: higher ratios from rigid gears, easy to print, but less efficient and with more play
  - Planetary gearbox: efficient and back-drivable; needs several stages for high ratios; Roozing and Roozing call its shock robustness and backlash more limited
  - Three-phase cycloidal drive: three plates 120 degrees apart with the input and output shafts offset, no bearings needed round the pins (Sergei Mishin, Hackaday 2025)
  - Pin gear or pin-wheel drive: an ordinary gear meshing with a wheel of round pins, the tooth shape from which cycloidal drives grew (Nguyen Duc Thang)
  - Worm drive: a big ratio at right angles, often self-locking but much less efficient

### Pictures, videos and models

- **links**: 
  - [Cycloidal drive.gif (Wikimedia Commons, by Petteri Aimonen)](https://commons.wikimedia.org/wiki/File:Cycloidal_drive.gif): Rendered animation of the eccentric input, wobbling lobed disc, fixed pin ring and output pins *(licence: Public domain)*
  - [Cycloidal drive parts.png (Wikimedia Commons, by Petteri Aimonen)](https://commons.wikimedia.org/wiki/File:Cycloidal_drive_parts.png): Exploded view of the parts of a 1:10 cycloidal speed reducer *(licence: Public domain)*
  - [Stereolithography cycloidal drive.JPG (Wikimedia Commons, by Clemenspool)](https://commons.wikimedia.org/wiki/File:Stereolithography_cycloidal_drive.JPG): Photo of an assembled cycloidal drive made from resin-printed (stereolithography) parts *(licence: CC BY-SA 3.0)*
  - [What is Cycloidal Drive? Designing, 3D Printing and Testing (How To Mechatronics, YouTube)](https://www.youtube.com/watch?v=OsS9-FzKN6s): Animated explanation, CAD design from the profile equations, PLA printing with bearings as rollers, and torque testing of a 15:1 drive *(licence: link only (standard YouTube licence))*
  - [Pin gear drive 3A (Nguyen Duc Thang, YouTube thang010146; title checked via YouTube oEmbed)](https://www.youtube.com/watch?v=h1l82ose0w4): CAD animation of a cycloidal speed reducer: an 8-pin wheel on an eccentric crank inside a 9-tooth ring, output pins in holes (8:1, output reversed) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [2022-cycloidal-drive (W. Roozing and G. Roozing, GitHub README)](https://raw.githubusercontent.com/geez0x1/2022-cycloidal-drive/master/README.md): Python code for choosing and checking cycloidal drive parameters, plus CAD files of the 11:1 printed gearbox from the IROS 2022 paper *(licence: MIT)*
  - [wdirfc: Cycloidal Drive with Intermediate Rollers and Free Cage (Sergei Mishin, GitHub README)](https://raw.githubusercontent.com/mshndev/wdirfc/main/README.md): Python script that animates a cycloidal drive and exports the profiles to DXF *(licence: MIT)*
  - [cycloidgen (Medinstech, GitHub README)](https://raw.githubusercontent.com/medinstech/cycloidgen/main/README.md): Desktop app that designs a cycloidal drive from parameters or requirements, runs self-checks and exports DXF, SVG, STEP, STL and 3MF *(licence: Apache-2.0)*
  - [Educational model of Cycloidal Drive (osamutake, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1453110-educational-model-of-cycloidal-drive): Hand-turned 1:10 demonstration model (10 lobes) on an 80 x 80 mm base *(licence: CC BY)*
  - [PiP Two Stage Cycloidal Drive (Ole Brouer, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1092272-pip-two-stage-cycloidal-drive): Print-in-place two-stage 36:1 demo with 0.15 mm tolerances *(licence: CC BY-NC-SA)*
  - [Nema 17 Cycloidal Gearbox (Advanced Hobby Lab, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1772202-nema-17-cycloidal-gearbox): 8:1 gearbox for a NEMA 17 stepper using dowel pins and ball bearings; measured at 92% efficiency (Hackaday 2026) *(licence: CC BY-NC-SA)*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (cycloidal pin-wheel reducer entry in the gear mechanisms section)](https://huangyan920.github.io/Mechanical/): Browser-based parametric animation of a cycloidal pin-wheel reducer among 257 mechanisms *(licence: MIT)*
- **diagram_idea**: Animation of a 10-lobe disc wobbling inside an 11-pin ring, with a marked lobe that moves back by one pin each time the eccentric cam goes round once, and the output pins sliding round inside their oversized holes while the output disc turns slowly.
- **sources**: 
  - https://en.wikipedia.org/wiki/Cycloidal_drive
  - https://commons.wikimedia.org/wiki/Category:Cycloidal_gears
  - https://commons.wikimedia.org/wiki/File:Cycloidal_drive.gif
  - https://commons.wikimedia.org/wiki/File:Cycloidal_drive_parts.png
  - https://commons.wikimedia.org/wiki/File:Stereolithography_cycloidal_drive.JPG
  - https://khkgears.net/new/gear_knowledge/Types_and_Mechanisms_of_Gear_Reducers.html
  - https://ris.utwente.nl/ws/portalfiles/portal/295490006/3D_printable_low_reduction_cycloidal_gearing_for_robotics.pdf
  - https://raw.githubusercontent.com/geez0x1/2022-cycloidal-drive/master/README.md
  - https://raw.githubusercontent.com/geez0x1/2022-cycloidal-drive/master/LICENSE
  - https://howtomechatronics.com/how-it-works/what-is-cycloidal-driver-designing-3d-printing-and-testing/
  - https://www.youtube.com/watch?v=OsS9-FzKN6s
  - https://hackaday.com/2026/08/01/testing-a-3d-printed-cycloidal-gearbox-design/
  - https://hackaday.com/2025/12/11/designing-a-simpler-cycloidal-drive/
  - https://mevirtuoso.com/projects/cycloidal-drive/
  - https://mevirtuoso.com/cycloidal-drive/
  - http://www.hessmer.org/gears/CycloidalGearBuilder.html
  - https://raw.githubusercontent.com/mshndev/wdirfc/main/README.md
  - https://raw.githubusercontent.com/mshndev/wdirfc/main/LICENSE
  - https://raw.githubusercontent.com/medinstech/cycloidgen/main/README.md
  - https://raw.githubusercontent.com/medinstech/cycloidgen/main/LICENSE
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://www.youtube.com/watch?v=h1l82ose0w4
  - https://huangyan920.github.io/Mechanical/
  - https://raw.githubusercontent.com/HUANGYAN920/Mechanical/main/README.md
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: in line
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: soldering iron, press or vice, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, safety_notes

## 97 Differential (bevel gear differential)

*gear trains, gearboxes & transmissions.* A gear set that lets two output shafts turn at different speeds while sharing the drive, as between the wheels of a car

*Also covers:* Also covers the ball differential used in RC cars and limited-slip types

### What it is

- **plain_name**: A little cage of gears in the middle of an axle that lets the left and right wheels turn at different speeds on a bend, while the motor still drives both
- **term**: Differential (bevel gear differential, open differential)
- **aliases**: 
  - diff
  - open differential
  - bevel differential / bevel gear differential
  - ring-and-pinion differential (with the final drive gear that turns the drive through 90 degrees)
  - spider gears / planet gears / differential pinions (the small bevel gears inside); side gears / sun gears (the ones on the axles)
  - differential gear / differential gearing
  - ball differential / ball diff (RC-car variant with balls between two plates)
  - gear diff / sealed gear differential / oil-filled diff (RC-car variant tuned with silicone oil)
  - limited-slip differential (LSD), 'posi' (from Positraction, a trade name)
  - locking differential / diff lock / locker; spool (permanently locked axle); welded diff
  - Torsen (brand) or torque-sensing differential
  - spur-gear differential; epicyclic or planetary differential (centre diffs in all-wheel drive)
  - Entwistle's gearing (historic name, 507 Mechanical Movements No. 495)
  - Differentialgetriebe / Ausgleichsgetriebe (German)
- **family**: gear trains, gearboxes & transmissions
- **one_liner**: A small gear train, usually bevel gears inside a spinning cage, that splits one input between two output shafts and lets them turn at different speeds (as the inner and outer wheels of a car do on a bend), while always pushing on both with the same turning force.
- **complexity**: A small assembly that acts as one unit. Bevel type: an input gear (the ring gear or crown wheel, driven by a small pinion), a carrier or cage fixed to it, two to four small bevel gears on a cross-pin inside the cage (spider or planet gears), two side gears splined or keyed to the output shafts, plus bearings and usually a housing. Ball type (RC cars): a drive gear or pulley with a ring of holes holding about 2 mm balls, two thrust washers (diff rings or plates), Belleville (dished spring) washers, an adjusting screw or collar, a small thrust bearing and two output cups. Limited-slip types add clutch plates, thick fluid, cams or special worm or spur gears.
- **how_it_works**: The input gear turns the whole cage (carrier). When both outputs meet the same resistance, the spider gears don't spin on their pin; they are carried round like a solid block and both outputs turn at the cage speed. On a bend one output is held back, so the spider gears start rolling round it, taking speed off that side and adding exactly as much to the other: the cage speed is always the average of the two output speeds, so if one output is held still the other turns twice as fast. Because the spider gears push equally on both side gears, both outputs always get the same turning force (torque), which is why an open differential lets one wheel on ice spin while the wheel with grip gets almost nothing; limited-slip and locking types add friction, thick fluid or a lock to stop that. A ball differential does the same job with balls rolling between two plates pressed together by springs, so it also slips a little by design.

### Finder attributes

- **job**: 
  - change speed or turning force: splits one drive between two outputs that may turn at different speeds; the ring-and-pinion input usually also gives a fixed speed reduction and turns the drive through 90 degrees
  - let it move (turn, slide or bend): lets the two output shafts turn relative to each other, e.g. the inner and outer wheels on a bend
  - slip or let go when overloaded: only the friction types; a ball differential or a clutch-type limited-slip differential lets the sides slip against a friction set by springs or an adjusting screw
- **motion**: rotate: continuous rotation in, two continuous rotations out that can differ in speed (one side can even stop or turn backwards); unlimited range, either direction
- **degrees_of_freedom**: 2: the three shafts (input cage and two outputs) are tied by one rule, cage speed = average of the two outputs, so choosing any two speeds fixes the third; a locked differential drops to 1 (both outputs turn together)
- **special_behaviour**: 
  - motion conversion (e.g. rotary to linear): not rotary-to-linear, but it adds and averages two rotations, which is why differentials were used to add and subtract in mechanical analogue computers and are used to let two motors share one robot wrist (both motors the same way = one motion, opposite ways = the other)
  - torque-limiting (slips or clicks at a set force/torque): ball differentials and clutch-type limited-slip differentials hold the two sides together by spring-loaded friction, so they slip above a set turning force; on a ball diff the adjusting screw sets how much (Wikipedia 'Ball differential'; Wikipedia 'Limited-slip differential' on spring preload of the clutches)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it passes rotation from one input to two outputs
  - friction or clamping (force-fit): only in ball differentials and clutch, cone or viscous (thick-fluid) limited-slip differentials, where friction resists the two sides turning at different speeds
- **input_output**: One rotation in -> two rotations out. Speed: cage (ring gear) speed = average of the two output speeds (Wikipedia 'Differential'); hold one output still and the other turns at twice the cage speed (507 Mechanical Movements No. 495: with three equal bevel gears, gear C makes two revolutions for one of shaft D). Torque: an open differential always gives both outputs equal torque, so the gripping side can get no more than the slipping side takes (Wikipedia 'Limited-slip differential'). A Torsen with a 3:1 torque bias ratio can give one side up to three quarters of the torque (Wikipedia 'Torsen'). Ratio: the pinion driving the ring gear usually has fewer teeth, giving a fixed reduction (the 'axle ratio'); one printed RC differential uses 2:1 (Prism08, Printables). Efficiency: each bevel gear mesh is about 98-99% (KHK); ⚑ [uncertain] a complete differential loses a little more in its pins, thrust washers and bearings, and a ball or limited-slip diff loses more to friction when the sides turn at different speeds. Shafts: the input usually meets the outputs at right angles (intersecting, or offset in hypoid final drives), or is in line with them in spur-gear and planetary types; the two outputs are in line with each other. Back-drivable: yes for open differentials; the wheels can drive it back (a Torsen that loses grip completely is freed by using engine braking or the parking brake, per Wikipedia 'Torsen'). *(⚑ parts need confirming)*
- **power**: passive (no power needed). Selectable lockers are switched by air (pneumatic), vacuum, a cable or an electric actuator (Wikipedia 'Locking differential'; Sariel's LEGO diff lock uses a small pneumatic cylinder or a motor), and electronic limited-slip differentials use a computer-controlled clutch. ⚑ [uncertain] What happens if that power is lost depends on the design (many selectable lockers return to open). *(⚑ parts need confirming)*
- **removability**: removable: it is a set of gears on pins inside a carrier held by screws, pins or clips; RC differentials are routinely opened to change oil or rebuild
- **reuse_cycles**: many times: it can be taken apart and rebuilt repeatedly; the limit is wear of the gears, balls, rings and thrust washers
- **tools_needed**: Hex keys or small screwdrivers for the case screws; pliers or a pin punch for cross-pins; grease. RC gear diffs need silicone differential oil; RC ball diffs need diff grease for the balls and rings, a different grease for the thrust bearing, and a tool to set the adjusting screw (RCGuided). Some printed demo models need glue and pliers to assemble (Public Domain Differential, Printables).
- **seal**: none for printed and LEGO differentials. Car differentials run inside a closed, oil-filled axle housing, and RC gear diffs are sealed so their silicone oil stays in (RCGuided mentions O-rings and a sealing grease); the sealing is done by the housing and O-rings, not by the gears. ⚑ [uncertain] Details of the seals vary by model. *(⚑ parts need confirming)*
- **load**: Medium to heavy for its size in metal, because it carries a vehicle's whole drive torque; in plastic the small spider gears and their thin cross-pin are the weak points. Strong in twist. The bevel side gears push outwards along the axles (thrust) and the pinion pushes away from the ring gear, so the carrier and bearings must be stiff (KHK: bevel gears produce axial thrust; mount them close to bearings). Printed demo differentials are for hand turning and light loads only ⚑ [uncertain] (for any particular model). *(⚑ parts need confirming)*
- **adjustable**: Open differentials: no (gear mesh and backlash are set with shims or spacers when assembled ⚑ [uncertain]). RC ball diffs: yes, tightening or loosening the screw changes how much they slip (Wikipedia 'Ball differential'). RC gear diffs: yes, by refilling with thinner or thicker silicone oil (RCGuided starting points: front 5,000-7,000 cSt, centre 5,000-10,000 cSt, rear 3,000-5,000 cSt). Locking differentials can be switched between open and locked (manually, by air, cable or electric actuator). *(⚑ parts need confirming)*
- **play_and_precision**: Noticeable backlash: there are two bevel meshes in series plus the ring and pinion, so the wheels have some free play; a ball differential has no backlash or free play (RC Car Action). It is not a positioning device, although robot-wrist differentials use it to move a joint, so backlash matters there. It needs the two output shafts on one line and the pinion at the correct mounting distance; misalignment gives noise, uneven wear, binding or skipping teeth (KHK miter gear catalogue on bevel mounting errors).
- **access_needed**: not applicable: it is built into an axle or gearbox and reached by opening its housing
- **materials**: Cars and trucks: steel gears in a cast housing running in oil. RC cars: steel or plastic gear diffs; ball diffs with steel, ceramic or tungsten-carbide balls (ceramic lasts longer; softer balls 'flat spot', per Wikipedia 'Ball differential') and hard diff rings. LEGO Technic differentials (brand): ABS plastic. 3D-printed: PLA, PLA+, PETG or nylon gears, often with steel pins and small ball bearings (e.g. MR63ZZ, MR117, 6700ZZ in Prism08's printed RC differentials). EngineerDog ranks nylon > PLA > ABS > PETG for printed gears.
- **maker_difficulty**: moderate: printable demo differentials are easy fidget-style prints (several free models; some need glue or supports), and LEGO Technic differentials cost little; a working one for a robot or RC vehicle needs accurately matched bevel gears, a stiff cage, bearings, a proper cross-pin and grease, and a ball diff needs bought balls, rings, spring washers and a thrust bearing

### Making it

- **processes**: 
  - 3D print (FDM): demonstration models and light RC or robot differentials
  - off-the-shelf part: RC differential kits (gear and ball diffs), LEGO Technic differentials (brand), go-kart, ATV and car differentials
  - CNC: metal gears and carriers for strong custom builds ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: printable differentials are printed as separate parts and assembled, e.g. the 'Differential fidget' is 1 body, 2 side bevel gears, 2 middle (spider) bevel gears, 2 pins and 2 side gears pressed together, and the 'Public Domain Differential' also needs glue. ⚑ [uncertain] A print-in-place differential demo is offered on MyMiniFactory (seen in search results only, not opened). *(⚑ parts need confirming)*
- **making_tips_3d_printing**: 1) Don't draw the teeth by hand: generate matched bevel pairs with BOSL2 bevel_gear() (you give both tooth counts and the shaft angle, because bevel gears only work in designed pairs) or the FreeCAD Gears workbench; spider gears and side gears must share the same tooth size (module) and pressure angle, and all their cone tips (apexes) must meet at the centre of the cage (BOSL2 docs). 2) Use two or four spider gears on a cross-pin; a steel pin or bolt is much stronger than a printed one, although Prism08's printed RC differential #3 gets away with a small PLA axle because the spider gears only turn when the car is turning. 3) Put ball bearings where speed is high: on the cage and the output shafts (Prism08 uses 6700ZZ and MR117 bearings; his limited-slip version adds eight MR63ZZ). 4) Print a test piece first: the Public Domain Differential author suggests printing the drive shaft and gear first to check the fit of the square axle tip; Prusa suggests starting at about 0.3 mm clearance for moving parts. 5) Orientation: print bevel gears flat on their back face ⚑ [uncertain] (general practice rather than a tested rule); axles standing upright may be knocked over by the nozzle, so use gyroid or 3D-honeycomb infill (Public Domain Differential, printed at 0.16 mm layers, 0.4 mm nozzle, three walls in PLA+; it needs supports). Snap-in connectors printed lying horizontally flex better (MoreMorris 'Differential Gears'). 6) Strength: HowToMechatronics found wall count mattered most and recommends 5 or more walls and at least 35% infill for printed gears. 7) Assembly trick (LazyMaker 'Differential fidget'): hold the side gears still, slide both spider gears in from opposite sides at the same time so their holes line up, then press the pins in. 8) Grease lightly: the Public Domain Differential author wipes on a trace of clear grease; EngineerDog suggests white lithium, PTFE or silicone grease for printed gears. 9) Heat: PLA softens and deforms above about 60 C (Prusa), so avoid PLA near hot motors or in a hot car. 10) The side gears push outwards along the axles, so add thrust washers or shoulders and a stiff cage, or the gears will push apart and skip ⚑ [uncertain] (for printed parts; KHK notes bevel gears produce axial thrust and must be fastened so they cannot move). 11) For a printed ball diff, the drive gear with ball holes can be printed (Kent Asplund's HPD Evo ball differential), but balls, rings, Belleville washers and the thrust bearing are bought parts. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: RC differential parts: sealed gear differential (gear diff) sets, silicone differential oil (sold by viscosity in cSt, commonly 3,000-50,000 cSt), ball differential rebuild kits (diff balls, diff rings or plates, thrust bearing, Belleville spring washers, diff grease), spools and one-way diffs. LEGO Technic differential gears (brand) and the transmission driving ring used for diff locks (Sariel). Go-kart, ATV and car differentials, 'spider gear' and side-gear sets. For building your own: miter gears and bevel gears (McMaster-Carr 'Metal Miter Gears', 'Plastic Miter Gears', 'Metal Bevel Gears'), dowel or cross pins, thrust washers, flanged ball bearings (e.g. MR63ZZ, MR117, 6700ZZ, 608).
- **rules_of_thumb**: 
  - Speed rule: the cage (carrier) turns at the average of the two output speeds (Wikipedia 'Differential'); hold one output still and the other turns at twice the cage speed (507 Mechanical Movements No. 495).
  - Torque rule: an open differential always gives both outputs the same torque, so the wheel with grip gets no more than the slipping wheel can take (Wikipedia 'Limited-slip differential', with the example of a wheel on ice spinning at 50 lbf-ft).
  - Torsen torque bias ratio (TBR): 3:1 means one side can take up to three quarters of the torque; with one wheel in the air it acts like an open differential (Wikipedia 'Torsen').
  - Spider gears only rotate on their pin when the two outputs turn at different speeds (Prism08, Printables RC differential #3), so their pin mostly carries torque, not speed.
  - Bevel gears must be designed in pairs for a chosen shaft angle, with matching tooth size and pressure angle, and their cone apexes must coincide (BOSL2 gears.scad docs); mounting-distance, offset and shaft-angle errors cause noise and uneven wear (KHK miter gear catalogue).
  - Each bevel gear mesh is about 98-99% efficient (KHK bevel gears page).
  - RC gear diff oil starting points: front 5,000-7,000 cSt, centre 5,000-10,000 cSt, rear 3,000-5,000 cSt; thicker oil = more locking and on-power traction, thinner = more free differential action (RCGuided).
  - RC ball diff: clean oil off the balls and rings, tighten only until snug, then break it in and tighten a little at a time (RCGuided); ceramic or tungsten balls resist flat-spotting (Wikipedia 'Ball differential').
  - Locked axles and spools scrub tyres and cause understeer and heavier steering (Wikipedia 'Locking differential').

### When to use it

- **everyday_examples**: 
  - The bulge in the middle of a rear-wheel-drive car's or truck's back axle
  - RC cars and LEGO Technic vehicles (the grey or black differential gear case in the axle)
  - Robot arm wrists where two motors share one joint (e.g. Dan Royer's 3D-printed 5+ axis arm on Hackaday.io)
  - Historic machines: mechanical analogue computers and clocks, and Mars rover suspensions (Wikipedia 'Differential')
- **when_to_use**: Use a differential when one motor must drive two wheels on the same axle of a robot or vehicle that has to turn corners without scrubbing its tyres or fighting itself. Also use one to combine two motors into one joint that can move two ways (a pan/roll or pitch/roll robot wrist: both motors turning the same way gives one motion, opposite ways the other), to add or subtract two rotations mechanically, or as a teaching model. Choose a ball diff or a limited-slip type if you want some grip kept on both sides and an adjustable 'feel' (RC racing).
- **when_not_to_use**: Skip it if each wheel has its own motor (skid-steer or differential-drive robots): the controller already sets each wheel's speed ⚑ [uncertain] (wording; standard practice). Go-karts and trams simply use a solid axle and accept some wheel slip (Wikipedia 'Differential'). If both wheels must always drive on loose, slippery or uneven ground (rock crawlers, off-road robots), an open differential will spin the wheel with the least grip; use a locker, spool or limited-slip differential instead (Wikipedia 'Limited-slip differential'; Sariel's LEGO LSD). For a single output shaft use a spur, belt or planetary gearbox, and if the output must hold position under load use a worm drive or a brake, because a differential holds nothing by itself. *(⚑ parts need confirming)*
- **environment_limits**: Printed PLA parts soften and deform above about 60 C (Prusa), so keep printed differentials away from hot motors and hot cars. RC diff oil and grease pick up dirt if the case is open; gear diffs need their oil checked every few months or every few race days (RCGuided). Viscous limited-slip differentials can suffer the 'hump' effect, where heat makes the fluid expand and lock the sides harder (Wikipedia 'Limited-slip differential'). Soft balls in a ball diff flat-spot over time, making it gritty (Wikipedia 'Ball differential'). Plastic miter and bevel gears change size with temperature and humidity (KHK miter catalogue on MC901 nylon gears).
- **safety_notes**: The gear mesh and the spinning cage are pinch points, so keep fingers clear and cover the gears on powered builds ⚑ [uncertain] (general machine safety). Locked or limited-slip axles make a vehicle harder to steer and, with a spool, it may become unmanageable in wet or snowy weather (Wikipedia 'Locking differential'). Ball diffs use tiny 2 mm balls that are easy to lose and could be swallowed by small children ⚑ [uncertain] (general small-parts caution). *(⚑ parts need confirming)*
- **common_failures**: 1) One wheel spins and the vehicle stops when one side loses grip: this is normal for an open differential; add a limited-slip device, a locker or thicker diff oil (Wikipedia; Sariel). 2) Printed spider gears skip or the cross-pin snaps: use a steel pin, larger tooth size, more walls (5+) and a stiff cage that stops the gears pushing apart. 3) Gears bind or wear unevenly because the pinion's mounting distance or the shaft angle is wrong (KHK). 4) Ball diff slips too much: clean oil off the balls and rings and tighten slightly; too tight gives little differential action (RCGuided; Wikipedia 'Ball differential'). 5) Ball diff feels gritty: flat-spotted balls or worn rings; replace with harder (ceramic or carbide) balls (Wikipedia). 6) Gear diff leaks oil and changes its feel: replace O-rings and refill (RCGuided). 7) ⚑ [uncertain] Printed differentials that are over-tightened or glued slightly out of line jam; check that everything turns freely before gluing (Public Domain Differential instructions). *(⚑ parts need confirming)*
- **related**: 
  - Spool or solid axle: both wheels locked together; simplest and strongest, but tyres scrub on turns
  - Locking differential (diff lock, locker): an open differential that can be locked solid when grip is poor
  - Limited-slip differential (clutch, viscous or Torsen gear type): limits how differently the two sides can turn, so the gripping wheel keeps some drive
  - Ball differential: RC variant using friction through balls; no backlash, adjustable slip, but lower power capacity than a gear diff (RC Car Action)
  - Spur-gear or planetary (epicyclic) differential: same speed-averaging job with parallel-shaft gears; planetary ones can split torque unequally front to rear
  - Planetary gear set: a three-shaft gear train like the differential, but used for speed reduction
  - Bevel gears (incl. mitre gears): the parts most differentials are built from
  - Differential screw and differential pulley (hoist): use the 'difference' idea for fine movement or lifting force, not for sharing drive between two outputs

### Pictures, videos and models

- **links**: 
  - [Around the Corner (1937), Jam Handy Organization for Chevrolet (Wikimedia Commons video)](https://commons.wikimedia.org/wiki/File:Around_the_Corner_(1937)_24fps_selection.webm): Classic 7-minute animated and model film explaining step by step why a car needs a differential on a bend and how the bevel gears do it *(licence: Public domain in the United States (published 1931-1963 without copyright renewal); may still be copyrighted in some other countries)*
  - [Differential free.png (Wikimedia Commons, by Wapcaplet)](https://commons.wikimedia.org/wiki/File:Differential_free.png): Colour-coded 3D diagram of a ring-and-pinion differential: ring gear and carrier driving both side gears; paired with 'Differential locked-2.png' showing the planet gear turning on a bend *(licence: GFDL 1.2+ / CC BY-SA 3.0)*
  - [BallDifferential.svg (Wikimedia Commons, by Kivaan)](https://commons.wikimedia.org/wiki/File:BallDifferential.svg): Exploded diagram of an RC-car ball differential *(licence: Public domain)*
  - [Car Differential with Bevel Gears 1 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=YjhzkV5Ya2k): CAD animation of a bevel gear car differential *(licence: link only (standard YouTube licence))*
  - [507 Mechanical Movements, No. 495: Entwistle's patent gearing](https://507movements.com/mm_495.html): Historic 1868 drawing (with an animated version) of a bevel differential with one side gear fixed, so the other turns twice per turn of the carrier shaft *(licence: Book public domain; website animation link only)*
- **make_it_yourself**: 
  - [Public Domain Differential by Stone Age Sculptor (URL from Printables API, page not opened)](https://www.printables.com/model/928398-public-domain-differential): Classroom demonstration differential with knob, crown (ring) gear, four small gears in a case and two wheels; OpenSCAD source script included; printed in PLA+ at 0.16 mm layers; needs supports and a little glue *(licence: Creative Commons Public Domain (CC0))*
  - [Differential fidget by LazyMaker (URL from Printables API, page not opened)](https://www.printables.com/model/232280-differential-fidget): Simple hand-held bevel differential toy: body, 2 side bevel gears, 2 spider gears, 2 pins, 2 side gears, with assembly instructions *(licence: CC BY)*
  - [Differential #5 with limited slip, RC Unimog edition by Prism08 (URL from Printables API, page not opened)](https://www.printables.com/model/679842-differential-5-with-limited-slip-rc-unimog-edition): Working printed differential with limited slip for a 1/10 RC truck, using small ball bearings; see also the author's RC CAR Differential #3 (model 444446) *(licence: CC BY-NC)*
  - [Torsen differential - Limited-slip differential by Dmitrii Tomin (URL from Printables API, page not opened)](https://www.printables.com/model/926631-torsen-differential-limited-slip-differential): Printed showcase model of a Torsen-type limited-slip differential with 608 bearings, 8 mm rods and M4/M5 bolts; assembly guide included *(licence: CC BY-SA)*
  - [BOSL2 gears.scad: bevel_gear() (OpenSCAD library)](https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad): Parametric generator for matched straight, zerol and spiral bevel gear pairs (the parts of a differential), with backlash settings *(licence: BSD 2-Clause)*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (entry 'DIFFERENTIAL-GEAR', no. 44)](https://huangyan920.github.io/Mechanical/): Browser animation of a bevel-gear differential; its parameter notes are brief, so check numbers elsewhere *(licence: MIT)*
- **diagram_idea**: A top-down animated axle going round a bend: the cage turns at 10 rpm while the inner wheel turns at 8 and the outer at 12, with a live readout 'average = 10'; then one wheel drives onto ice and spins at 20 while the other stops, with equal-sized torque arrows on both wheels to show why it gets stuck.
- **sources**: 
  - https://en.wikipedia.org/wiki/Differential_(mechanical_device)
  - https://en.wikipedia.org/w/index.php?title=Differential_(mechanical_device)&action=raw
  - https://en.wikipedia.org/wiki/Limited-slip_differential
  - https://en.wikipedia.org/w/index.php?title=Limited-slip_differential&action=raw
  - https://en.wikipedia.org/wiki/Ball_differential
  - https://en.wikipedia.org/w/index.php?title=Ball_differential&action=raw
  - https://en.wikipedia.org/wiki/Locking_differential
  - https://en.wikipedia.org/wiki/Torsen
  - https://en.wikipedia.org/wiki/Bevel_gear
  - https://www.rccaraction.com/understanding-differentials/
  - https://rcguided.com/how-to-build-a-ball-diff/
  - https://rcguided.com/rc-diff-oil-tuning-simplified/
  - https://sariel.pl/2009/01/limited-slip-differential/
  - https://sariel.pl/2012/05/compact-axle-with-a-differential-lock/
  - https://hackaday.io/project/945/logs?sort=oldest&page=4
  - https://khkgears.net/new/bevel_gears.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html
  - https://khkgears.net/pdf/2025/miter-gears.pdf
  - https://507movements.com/mm_495.html
  - https://507movements.com/toc.html
  - https://commons.wikimedia.org/wiki/File:Around_the_Corner_(1937)_24fps_selection.webm
  - https://commons.wikimedia.org/wiki/File:Differential_free.png
  - https://commons.wikimedia.org/wiki/File:Differential_locked-2.png
  - https://commons.wikimedia.org/wiki/File:BallDifferential.svg
  - https://commons.wikimedia.org/wiki/File:Spur_gear_differential_(Manual_of_Driving_and_Maintenance).jpg
  - https://www.youtube.com/watch?v=YjhzkV5Ya2k
  - https://www.youtube.com/watch?v=0yG46eH_kz0
  - https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://raw.githubusercontent.com/looooo/freecad.gears/master/README.md
  - https://huangyan920.github.io/Mechanical/
  - https://api.printables.com/graphql/
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - https://howtomechatronics.com/how-it-works/how-to-3d-print-gears-the-ultimate-guide/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://www.mcmaster.com/products/bevel-gears/
  - https://www.mcmaster.com/products/miter-gears/

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: at an angle, in line
- **overload_response**: slips and keeps going
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no ⚑ *needs confirming (source uncertain): `adjustable` is marked [uncertain] here: "…(gear mesh and backlash are set with shims or spacers when assembled [uncertain]).…"*
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** adjustable, common_failures, input_output, load, making_tips_3d_printing, power, print_in_place, processes, safety_notes, seal, when_not_to_use

## 98 Bevel gears (incl. mitre and crown gears)

*gear trains, gearboxes & transmissions.* Cone-shaped gears that pass turning force round a corner, usually at a right angle

### What it is

- **plain_name**: Cone-shaped gears that meet at a corner, so a shaft turning one way can turn another shaft set at an angle to it, usually a right angle (like the crank of a hand drill turning the chuck)
- **term**: Bevel gears (bevel gear pair), including mitre gears and crown gears
- **aliases**: 
  - bevel gear / bevel gear pair / bevel gearing
  - mitre gear / miter gear (a 1:1 pair with equal teeth, usually at 90 degrees)
  - angular mitre or angular bevel gears (for shaft angles other than 90 degrees, e.g. 45, 60 or 120 degrees)
  - straight bevel gear; spiral bevel gear; zerol bevel gear (curved teeth with zero spiral angle)
  - hypoid gear (spiral-bevel-like pair with offset shafts, used in car axles)
  - crown gear / face gear / contrate wheel / crown wheel (flat wheel with teeth on its face; meshes with an ordinary spur pinion)
  - planar bevel gear (a bevel gear with a 90-degree pitch angle, also sometimes called a crown gear)
  - crown wheel and pinion / ring and pinion (car final drive)
  - right-angle gearbox / bevel gearbox / angle drive / T-gearbox
  - conical gearing (old name, 507 Mechanical Movements)
  - Kegelrad (German); Kronrad (German for crown gear)
- **family**: gear trains, gearboxes & transmissions
- **one_liner**: Two gears with teeth cut on cones whose tips meet at one point, used to pass rotation between shafts that meet at an angle (usually 90 degrees), either at 1:1 (mitre gears) or with a speed change; a crown gear is a flat version that meshes with an ordinary straight-toothed gear.
- **complexity**: A few parts: the two gears (a small pinion and a larger gear for a speed change, or two identical mitre gears for 1:1; spiral ones come as a left-hand plus right-hand pair), two shafts with bearings, set screws, keys or pins that stop each gear sliding along its shaft, thrust washers or bearings to take the push along each shaft, and usually a frame or housing that holds the shafts at exactly the right angle and distance. A crown gear set is a flat face gear plus an ordinary spur pinion.
- **how_it_works**: Picture two cones rolling on each other with their points touching: the teeth are cut on those imaginary cones (the pitch cones) and get smaller towards the tip, so the gears roll together without slipping even though their shafts meet at an angle. The speed ratio is the number of teeth on one gear divided by the number on the other; equal gears (mitre gears) just carry the drive round the corner. Because the teeth are sloped, the load pushes each gear back along its own shaft, away from the cone tip, so the gears must be fixed in place and the shafts held at the right angle and distance, or the teeth only touch at their ends. A crown gear has teeth standing straight up from a flat face, so a plain spur pinion meshes with it and can even slide along its own axis without spoiling the mesh.

### Finder attributes

- **job**: 
  - change speed or turning force: passes rotation round a corner (usually 90 degrees); mitre gears only change the direction (1:1), bevel pairs also change speed, typically up to about 4:1 or 5:1 in one step, and hypoid pairs up to about 60:1
- **motion**: rotate: continuous rotation in, continuous rotation out on a shaft at an angle to the first (usually 90 degrees; KHK angular mitre gears cover 45 to 120 degrees); unlimited range, either direction
- **degrees_of_freedom**: 1: once the gears mesh, turning one fixes the other's position through the gear ratio
- **special_behaviour**: none: it simply passes rotation round a corner at a fixed ratio (for 'clever' uses, see the differential, which is built from bevel gears)
- **holding_principle**: not a holding joint (it moves or passes on motion): interlocking teeth pass rotation from one shaft to the other
- **input_output**: Continuous rotation -> continuous rotation on a shaft that meets the first at an angle (a crown gear with a spur pinion also works at 90 degrees). Ratio = teeth on the driven gear / teeth on the driving gear; mitre gears are 1:1. Straight bevel pairs are sold in ratios of about 1.5:1 to 4:1 (KHK stock gears; RoyMech 'ratios from 1:2 to 4:1'; McMaster-Carr 3:2 to 5:1); hypoid sets reach 60:1 and more (Wikipedia 'Gear'; KHK MHP hypoid series 15 to 60). Efficiency: 98-99% per mesh (KHK), because the teeth mostly roll rather than slide. Shafts: intersecting (hypoid: crossed with an offset). Back-drivable: yes; like spur gears, the output can drive the input backwards, so a bevel pair will not hold a load by itself ⚑ [uncertain] (inferred from the high rolling efficiency, not stated by a source). *(⚑ parts need confirming)*
- **power**: passive (no power needed)
- **removability**: removable: each gear is fixed to its shaft by a set screw, key, pin or clamp and can be taken off and refitted
- **reuse_cycles**: many times: the limit is tooth wear, not taking it apart
- **tools_needed**: Hex key or screwdriver for set screws; keys or taper pins for heavier drives; shims or spacers to set the mounting distance and backlash; grease or oil (nylon gears such as KHK MC901 can run without lubricant)
- **seal**: none: the gears seal nothing; industrial right-angle bevel gearboxes are enclosed so the housing keeps oil in and dirt out
- **load**: Light to heavy depending on type and size: steel spiral bevel gears carry high loads at high speed (car axles, helicopter drives), straight bevel gears are for lower speeds (Wikipedia: generally below 1000 ft/min at the pitch line, or under 1000 rpm for small gears), and crown gears are for light work only because their teeth must be thin (507 Mechanical Movements No. 26). Weak points: the small inner end of the teeth, and the push along each shaft (thrust) that tries to separate the gears, so shafts must be stiff and gears mounted close to their bearings (KHK).
- **adjustable**: Yes, when assembling: backlash and tooth contact are set by moving one gear along its shaft (with shims or spacers); at a 90-degree shaft angle, moving a gear along its axis by about 1.03 times the wanted change changes the backlash by that amount (KHK mitre gear catalogue: 1.46 times at 60 degrees, 0.84 times at 120 degrees). A crown gear's spur pinion can slide along its own axis without affecting the mesh (BOSL2 docs; tec-science). Not adjustable while running.
- **play_and_precision**: Small to noticeable backlash depending on quality (e.g. KHK ground spiral mitre gears, module 2 to 4: about 0.04-0.15 mm). Little tolerance for misalignment: KHK asks for a mounting distance within +-0.025 mm and a shaft angle within +2 arc-minutes / -0; errors in mounting distance, offset or shaft angle move the contact to the tips, roots, toes or heels of the teeth, causing noise and uneven wear. Under load the contact moves towards the outer end as the shafts flex (KHK). Crown gear plus spur pinion is more forgiving along the pinion's axis.
- **access_needed**: not applicable: the gears sit on shafts inside a frame or housing
- **materials**: Steel (S45C carbon steel, carburised SCM415 alloy steel), stainless steel (SUS303) for rust resistance, sintered metal, MC901 nylon (runs without lubricant) and injection-moulded acetal (Duracon (brand)) for light loads (KHK); McMaster-Carr sells nylon and acetal mitre gears that 'run quieter than metal gears'. Old grain mills used large bevel and crown wheels with wooden teeth (Wikipedia photo, Dordrecht mill). For 3D printing: PLA, PETG, nylon; igus prints bevel gears in iglidur i3 (brand), a self-lubricating polymer. EngineerDog ranks nylon > PLA > ABS > PETG for printed gears.
- **maker_difficulty**: moderate: mitre and bevel gears are cheap to buy and easy to generate and print, but the pair must be designed together and the two shafts held rigidly at exactly the right angle and distance, with something to stop the gears pushing apart

### Making it

- **processes**: 
  - off-the-shelf part: mitre, bevel, spiral bevel and hypoid gears in steel, stainless steel, nylon and acetal; right-angle gearboxes
  - 3D print (FDM): light-duty bevel, mitre and crown gears from generators (BOSL2, FreeCAD Gears)
  - CNC: traditionally cut on special Gleason-type bevel gear machines (RoyMech); 5-axis milling is also used (Wikipedia 'Bevel gear')
  - woodwork: historic mill gearing (bevel and crown wheels with wooden teeth)
- **print_in_place**: no: bevel gears are normally printed as separate gears and assembled on shafts in a frame; ⚑ [uncertain] some fidget toys print meshed gears together, but I found no confirmed print-in-place bevel pair *(⚑ parts need confirming)*
- **making_tips_3d_printing**: 1) Generate the pair, don't draw it: BOSL2 bevel_gear() needs both tooth counts and the shaft angle because bevel gears only work in designed pairs; it also makes spiral, zerol and straight teeth and crown_gear() for a face gear with a spur pinion; the FreeCAD Gears workbench makes spherical-involute bevel and crown gears; on Printables, MeideC's 'Bevel Gear tester with parametric gears' (Fusion 360) exposes module, tooth counts and backlash, and Michael Hathaway's 'Metric Miter Gears 90' gives a ready STEP pair (module 1, 20 teeth, 8 mm shaft, 20 mm mounting distance). 2) Put the cone tips together: the apexes of both pitch cones must meet where the shaft axes cross (BOSL2 docs); place each gear by its mounting distance, not by eye. 3) Keep the face width to about one third of the cone distance or less (RoyMech; BOSL2's default is the smaller of cone distance/3 and 10 x module), otherwise the inner ends of the teeth get too small to print. 4) Orientation: print each gear lying on its flat back with the teeth pointing up, so the tooth flanks are sloping walls rather than overhangs ⚑ [uncertain] (common practice, not a tested rule); Prusa printers print 45-60 degree overhangs cleanly. 5) Add a little backlash (BOSL2 backlash setting) and start around 0.3 mm clearance for moving parts (Prusa). 6) Stop them walking apart: bevel gears push along their shafts, so fix each gear (set screw on a D-flat, captive nut, shoulder or clip), mount it close to a bearing and make the frame stiff (KHK); MeideC's tester puts a bearing inside the larger gear. 7) Choose tooth counts with no common factor for even wear (BOSL2). 8) Strength: 5 or more walls and at least 35% infill (HowToMechatronics); a 20-degree pressure angle is standard for bevel gears (BOSL2), and EngineerDog suggests 25 degrees for stronger small printed gears. 9) Grease lightly with white lithium, PTFE or silicone grease (EngineerDog). 10) If alignment is hard to get right, a crown gear with a spur pinion tolerates the pinion sliding along its axis (BOSL2; tec-science), but it is for light loads (507 Movements No. 26). 11) Hobby generators often approximate the true bevel tooth shape; Wikipedia notes such simplified 'involute bevel gears' can be 10-28% weaker and noisier, which is acceptable for light hobby loads. 12) PLA softens above about 60 C (Prusa), so avoid it next to hot motors. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Mitre gears (miter gears): straight, spiral ('high-power metal miter gears', sold as left/right pairs) and angular mitre gears for 45, 60 and 120 degree shafts; bevel gear pairs sold as large gear + small gear by speed ratio (e.g. 3:2, 2:1, 5:2, 3:1, 4:1, 5:1); high-load spiral bevel gears; hypoid gear sets; plastic (nylon, acetal) mitre and bevel gears; bore types: round bore, round bore with set screw, keyed bore with set screw (McMaster-Carr, KHK). Right-angle gearboxes (bevel gearboxes, T-gearboxes). Crown gear and pinion sets for RC cars. LEGO Technic bevel and crown gears (brand) ⚑ [uncertain]. Thrust washers, flanged ball bearings, shaft collars. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Ratio = teeth on driven gear / teeth on driving gear; mitre gears are a 1:1 pair at 90 degrees (Wikipedia 'Bevel gear'; KHK).
  - Stock ratios: straight bevel about 1.5 to 4 (KHK), 3:2 to 5:1 (McMaster-Carr), 'ratios from 1:2 to 4:1' (RoyMech); hypoid 60:1 and higher in one set (Wikipedia 'Gear').
  - Efficiency 98-99% per mesh (KHK bevel gears page; KHK technical reference: intersecting-axis gears 98.0-99.0%).
  - Straight bevel gears: keep the pitch-line speed under about 1000 ft/min, or under 1000 rpm for small gears; use spiral bevels above that (Wikipedia 'Bevel gear').
  - Face width no more than about one third of the cone distance (RoyMech; BOSL2 default min(cone distance/3, 10 x module)).
  - Bevel gears must be designed as a pair for the shaft angle; one gear works only with its partner (Wikipedia 'Bevel gear'; BOSL2 docs). Straight mitre gears can mate with an identical copy, but spiral mitre gears need a right-hand + left-hand pair (KHK).
  - Mounting accuracy: mounting distance +-0.025 mm and shaft angle +2'/-0 (KHK bevel gears page); correct tooth contact is mid-flank and mid-face, slightly towards the small end (toe) (KHK mitre catalogue).
  - Backlash tuning at 90 degrees: axial movement of about 1.03 x the backlash change (KHK mitre catalogue table).
  - Thrust: bevel gears push away from the cone apex (RoyMech); for spiral bevels the thrust direction changes with spiral hand and direction of rotation (KHK). Mount gears close to bearings, make the housing stiff, and fasten the gears so thrust cannot move them (KHK).
  - Crown gear and spur pinion: the pinion can move along its axis without affecting the mesh and there is no axial force on it (tec-science; BOSL2), but crown-wheel teeth are thin, so use it for light work (507 Mechanical Movements No. 26).

### When to use it

- **everyday_examples**: 
  - A hand (egg-beater) drill: turning the side crank spins the chuck at right angles and faster (Wikipedia 'Bevel gear')
  - The crown wheel and pinion in a car's rear axle, which turn the drive from the prop shaft to the wheels
  - Roller shutter doors, floodgate lifters and old grain mills (photos in Wikipedia 'Bevel gear')
  - Shaft-driven bicycles, with a bevel ring gear at the rear wheel
- **when_to_use**: Use bevel gears when a motor or crank has to drive a shaft that points a different way, in a small space: a motor lying along a robot arm driving a joint at right angles, a vertical motor driving a horizontal axle, a side crank on a winch or toy, a turntable or pan mechanism, or one shaft driving two others in a T. Mitre gears just turn the corner at 1:1; a bevel pair can also give a modest speed change. They are efficient (about 98-99%) and quiet in spiral form, so they suit continuous drives. A crown gear with a spur pinion is the easy option for light, low-speed toys and models, because the pinion's position along its shaft is not critical.
- **when_not_to_use**: For a big reduction at right angles, or when the output must stay put when the motor stops, use a worm drive (worm drives are self-locking but much less efficient). If the shafts don't actually meet (they pass each other), use crossed helical (screw) gears or a worm; for parallel shafts use spur or helical gears or a belt. If you can't hold the two shafts rigidly at the right angle and distance (flexible printed frames), bevel gears will skip and wear; use a crown gear with a spur pinion, a belt, or a universal joint for small angles at 1:1. For high speeds or quiet running, avoid straight bevels and use spiral bevel gears (Wikipedia 'Bevel gear').
- **environment_limits**: PLA gears soften and deform above about 60 C (Prusa). Plastic mitre gears change dimensions (bore, teeth, backlash) with temperature and humidity (KHK mitre catalogue on MC901 nylon). Plain steel gears rust; stainless (SUS303) gears are available for wet places (KHK). Vibration and the gears' own thrust can loosen set screws and let gears walk along their shafts, so fasten them firmly (KHK). Greased open gears pick up dust and grit ⚑ [uncertain] (general experience). *(⚑ parts need confirming)*
- **safety_notes**: The point where the teeth meet is an in-running nip that can trap fingers, hair or clothing; switch off power before working on gears and don't touch rotating gears (KHK safety precautions). A small motor driving through a reduction can produce a lot of turning force. KHK warns that large ring-style bevel gears must be secured with taper pins, as bolts alone are dangerous.
- **common_failures**: 1) The gears push apart and skip or click under load: make the frame and shafts stiffer, put bearings close to the gears and fix the gears so they can't slide (KHK). 2) Noise and uneven wear from the wrong mounting distance, a shaft offset or a wrong shaft angle; the contact pattern moves to the tips, roots, toes or heels (KHK). 3) Gears that were not designed as a pair (different tooth counts, pressure angle or shaft angle) don't mesh properly; bevel gears only work with their designed partner (Wikipedia; BOSL2). 4) Two spiral mitre gears of the same hand won't mesh; buy a left + right pair (KHK). 5) Set screws loosen and the gear walks off: use a flat on the shaft, thread-locker, a key or a pin. 6) Straight bevel teeth break or get noisy at high speed; use spiral bevels (Wikipedia). 7) ⚑ [uncertain] Printed teeth too thin at the inner end break off first; keep the face width to a third of the cone distance or less and use a bigger module. *(⚑ parts need confirming)*
- **related**: 
  - Spur gear pair: the baseline for parallel shafts; can't turn a corner
  - Crown (face) gear with a spur pinion: turns a corner with an ordinary pinion that can slide along its axis; light loads only
  - Spiral bevel, zerol and hypoid gears: bevel variants for smoother, stronger or offset drives (hypoid for large ratios in car axles)
  - Worm drive: also turns 90 degrees, with a much larger reduction and often self-locking, but only about 30-90% efficient (KHK)
  - Crossed helical (screw) gears: for shafts that cross without meeting; quiet but light loads only, 70-95% efficient (KHK)
  - Differential: a cage of bevel gears that splits one drive between two outputs
  - Universal joint: passes rotation at 1:1 between shafts at a smaller, changeable angle

### Pictures, videos and models

- **links**: 
  - [Kegelrad.gif (Wikimedia Commons, by Ralf Pfeifer)](https://commons.wikimedia.org/wiki/File:Kegelrad.gif): Animation of a bevel gear pair showing its key geometric feature, the pitch cones meeting at a point *(licence: GFDL 1.2+ / CC BY-SA 3.0)*
  - [Kronrad1.gif (Wikimedia Commons, by Ralf Pfeifer)](https://commons.wikimedia.org/wiki/File:Kronrad1.gif): Diagram of how crown gears work with a spur pinion, an application example and a comparison with bevel gears *(licence: GFDL 1.2+ / CC BY-SA 3.0)*
  - [507 Mechanical Movements, No. 26: crown-wheel and spur gear](https://507movements.com/mm_026.html): Historic 1868 drawing (with an animated version) of a crown wheel driven by a spur gear, noted as only for light work *(licence: Book public domain; website animation link only)*
  - [How Bevel Gears Work (Daniel Izzo, YouTube; linked from Wikipedia 'Bevel gear')](https://www.youtube.com/watch?v=ymHzbN1oK1w): Video explanation of how bevel gears mesh and turn motion through an angle *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [BOSL2 gears.scad: bevel_gear() and crown_gear() (OpenSCAD library)](https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad): Parametric OpenSCAD generator for matched straight, zerol and spiral bevel gear pairs at any shaft angle, and crown (face) gears with a matching spur pinion, with backlash settings *(licence: BSD 2-Clause)*
  - [FreeCAD Gears workbench (freecad.gears / FCGear), README](https://raw.githubusercontent.com/looooo/freecad.gears/master/README.md): FreeCAD add-on that creates spherical involute bevel gears (including spiral), crown gears, helical and other gears with full parameter control *(licence: GPL-3.0)*
  - [Bevel Gear tester with parametric gears by MeideC (URL from Printables API, page not opened)](https://www.printables.com/model/607786-bevel-gear-tester-with-parametric-gears): Motor-driven bevel gear test rig with Fusion 360 parameters for module, tooth counts and backlash, and a bearing inside the larger gear *(licence: CC BY)*
  - [Metric Miter Gears 90 degrees by Michael Hathaway (URL from Printables API, page not opened)](https://www.printables.com/model/1210377-metric-miter-gears-90deg): Printable 1:1 mitre gear pair with STEP file: module 1, 20 teeth, 20-degree pressure angle, 8 mm shaft, 20 mm mounting distance, M4 set screw *(licence: CC BY-SA)*
  - [Involute Bevel Gear generator by Oryhara (URL from Printables API, page not opened)](https://www.printables.com/model/11954-involute-bevel-gear-generator): Bevel gear generator based on an OpenSCAD gear script; the author reports printed gears mesh properly *(licence: CC BY)*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (entries 'BEVEL-GEAR', 'SPIRAL-BEVEL', 'CROWN-GEAR')](https://huangyan920.github.io/Mechanical/): Browser animations of bevel, spiral bevel and crown gear drives; its quick notes list a 1:1 to 1:5 ratio range, so check numbers against KHK *(licence: MIT)*
- **diagram_idea**: Two see-through cones touching tip to tip where two shafts cross, then teeth 'growing' on the cones; a 20-tooth pinion turns a 40-tooth gear at half speed, with arrows showing each gear being pushed back along its shaft, away from the cone tip.
- **sources**: 
  - https://en.wikipedia.org/wiki/Bevel_gear
  - https://en.wikipedia.org/w/index.php?title=Bevel_gear&action=raw
  - https://en.wikipedia.org/wiki/Crown_gear
  - https://en.wikipedia.org/wiki/Gear
  - https://en.wikipedia.org/wiki/Miter_gear
  - https://khkgears.net/new/bevel_gears.html
  - https://khkgears.net/new/miter_gears.html
  - https://khkgears.net/pdf/2025/miter-gears.pdf
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html
  - https://khkgears.net/new/gear_knowledge/abcs_of_gears-b/gear_types_and_characteristics.html
  - https://khkgears.net/new/gear_knowledge/gear-nomenclature/thrust-forces-acting-on-gears.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_forces.html
  - https://roymech.org/Useful_Tables/Drive/Bevel_Gears.html
  - https://www.tec-science.com/mechanical-power-transmission/gear-types/bevel-gears/
  - https://www.mcmaster.com/products/bevel-gears/
  - https://www.mcmaster.com/products/miter-gears/
  - https://www.igus.com/custom-parts-services/3d-printing/3d-printed-gear
  - https://507movements.com/mm_026.html
  - https://507movements.com/toc.html
  - https://commons.wikimedia.org/wiki/Category:Bevel_gears
  - https://commons.wikimedia.org/wiki/File:Kegelrad.gif
  - https://commons.wikimedia.org/wiki/File:Kronrad1.gif
  - https://www.youtube.com/watch?v=ymHzbN1oK1w
  - https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://raw.githubusercontent.com/looooo/freecad.gears/master/README.md
  - https://huangyan920.github.io/Mechanical/
  - https://api.printables.com/graphql/
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - https://howtomechatronics.com/how-it-works/how-to-3d-print-gears-the-ultimate-guide/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: at an angle, crossed
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, input_output, making_tips_3d_printing, off_the_shelf_parts, print_in_place

## 99 Herringbone and helical gears

*gear trains, gearboxes & transmissions.* Gears with slanted teeth that mesh more smoothly and quietly than straight teeth; herringbone (V-shaped) teeth cancel sideways push and print well

### What it is

- **plain_name**: Gears whose teeth run across them at a slant (helical) or in a V or arrow pattern (herringbone), so they mesh gradually and run smoother and quieter than straight-toothed gears
- **term**: Helical gears and herringbone (double helical) gears
- **aliases**: 
  - helical gear / helical cylindrical gear
  - left-hand and right-hand helical gears (a parallel pair is always one of each)
  - double helical gear (two opposite-hand helical halves, often with a groove between them)
  - herringbone gear (double helical with the halves meeting in a continuous V)
  - chevron gear
  - Wuest-type herringbone gear (halves staggered so tooth tip meets tooth gap)
  - crossed helical gears / screw gears / skew gears (helical gears on shafts that cross without meeting)
  - helical rack (straight toothed bar with slanted teeth)
  - 'dry fixed' gear (old name given in Wikipedia 'Gear')
  - gear bearing / planetary herringbone gear bearing (the classic print-in-place herringbone toy)
  - Schraegstirnrad / Pfeilverzahnung (German for helical gear / herringbone toothing) ⚑ [uncertain] *(⚑ parts need confirming)*
- **family**: gear trains, gearboxes & transmissions
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: Cylindrical gears whose teeth are twisted at an angle (the helix angle) so each tooth engages gradually, making them quieter and stronger than straight spur gears; herringbone gears put a left-hand and a right-hand twist side by side so their sideways pushes cancel, and they are easy to 3D print.
- **complexity**: A few parts: a pair of gears (on parallel shafts they have the same helix angle but opposite hands, one left-hand and one right-hand; herringbone partners are mirror images), their shafts and bearings. Plain helical gears also need thrust bearings, shoulders or collars to take the sideways push along the shaft. With herringbone gears one gear is usually left free to slide a little along its shaft so the pair can centre itself. A printed 'gear bearing' is a small assembly of a herringbone sun gear, several planet gears and a ring gear printed already meshed.
- **how_it_works**: On a straight (spur) gear each new tooth slams into contact across its whole width at once. On a helical gear the teeth are slanted, so contact starts at a point on one edge and sweeps across the tooth; several teeth share the load at once, which makes the drive smoother, quieter and stronger. The slant also turns part of the driving force into a sideways push along the shaft (axial thrust), which grows with the helix angle and must be held by thrust bearings. A herringbone (double helical) gear is two helical halves of opposite hand side by side, so their sideways pushes cancel, and the V-shaped teeth also pull the two gears into line with each other (self-centring and self-retaining). Helical gears can also mesh on shafts that cross without meeting (crossed helical or screw gears), where the angle between the shafts equals the sum of the two helix angles.

### Finder attributes

- **job**: 
  - change speed or turning force: the same ratios as spur gears, but smoother, quieter and able to carry more load for their size
  - let it move (turn, slide or bend): a printed herringbone planetary 'gear bearing' works as a bearing that prints already assembled and holds itself together
- **motion**: rotate: continuous rotation in and out on parallel shafts (or on crossed shafts for screw gears); unlimited range, either direction (a plain helical gear's sideways push reverses when the drive reverses)
- **degrees_of_freedom**: 1: once meshed, turning one gear fixes the other through the gear ratio; a herringbone pair also stops the two gears sliding sideways relative to each other, so it constrains the along-the-shaft direction too
- **special_behaviour**: 
  - self-aligning or self-centring: herringbone (double helical) gears push each other into line along the shaft, so a gear left free to float centres itself on its partner (BOSL2 docs; Wikipedia 'Gear'; RepRap Herringbone Extruder Driver); in a printed planetary gear bearing this also holds the parts together (self-retaining, per EngineerDog)
  - none for plain helical gears: they simply pass rotation more smoothly and quietly than spur gears
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): the teeth pass rotation between shafts
  - shape (the parts interlock; form-fit): only in herringbone gear bearings and self-retaining herringbone sets, where the V-shaped teeth also keep the parts from sliding apart
- **input_output**: Continuous rotation -> continuous rotation. Ratio = teeth on driven gear / teeth on driving gear, as for spur gears (RoyMech gives 1:1 to 1:6 per spur pair; ⚑ [uncertain] assumed similar for helical pairs). Efficiency: 98.0-99.5% for parallel-axis gears including helical (KHK technical reference; KHK's helical gear page says 90-99.5%); crossed helical (screw) gears only 70-95% because the teeth slide (KHK). HowToMechatronics measured slightly more motor power for printed helical and herringbone pairs than for spur (spur 5.36-5.61 W, helical 5.61-5.85 W, herringbone 5.61-6.1 W in one test). Shafts: parallel (opposite hands), or crossed at an angle equal to the sum of the helix angles for same-hand screw gears (Wikipedia 'Gear'; RoyMech). Back-drivable: yes, like spur gears. Axial thrust: a single helical gear pushes along its shaft, more with a larger helix angle (KHK); herringbone halves cancel it. *(⚑ parts need confirming)*
- **power**: passive (no power needed)
- **removability**: removable: gears are fixed to shafts with set screws, keys, clamps or press fits and can be taken apart; print-in-place herringbone gear bearings are one permanent piece
- **reuse_cycles**: many times: the limit is tooth wear (a printed gear bearing is not meant to be taken apart)
- **tools_needed**: Hex key or screwdriver for set screws; thrust washers or bearings for plain helical gears; grease. Herringbone gears must be brought into mesh sideways, not slid in along the shaft; RepRap advice is to leave one gear's grub screw loose, turn the drive a few times so the gears centre themselves, then tighten it.
- **seal**: none: the gears seal nothing; gearboxes use a housing and oil seals
- **load**: Medium to heavy for their size: helical gears 'can bear more load than spur gears' (KHK) because several teeth share it, and herringbone gears carry high torques without net thrust, so they are used in heavy machinery and marine and turbine gearboxes (Wikipedia 'Herringbone gear'; tec-science). In HowToMechatronics' printed test (module 2, 12 mm wide) the herringbone failed at 120 N, spur at 116 N and helical at 112 N. Weakness of plain helical: the axial thrust loads the bearings, so bearing wear is greater than with spur gears (tec-science).
- **adjustable**: No: the centre distance and mesh are fixed by the frame. At the design stage the helix angle changes the pitch diameter (a helical gear is larger than a spur gear with the same teeth by 1/cos of the helix angle), which lets a designer hit an awkward centre distance without changing tooth counts (BOSL2 docs). A herringbone gear is left free to float along its shaft so it centres itself.
- **play_and_precision**: Small backlash; in one printed single-mesh test HowToMechatronics measured about 1.5 mm (helical) and 1.8 mm (herringbone) of play at 10 cm radius against 2.5 mm for spur, although in a two-stage 16:1 printed reducer spur was lowest (151 arc-minutes vs 168 herringbone and 175 helical). The RepRap Herringbone Extruder Driver used herringbone gears because they substantially reduce backlash and run quieter. They need the correct centre distance (KHK recommends H7 or H8 tolerance) and, for herringbone, the two halves in phase; a phasing error gives alternating sideways thrust and vibration (KHK). Herringbone gears with both shafts fixed and slightly misaligned fight each other and can be damaged (RepRap).
- **access_needed**: not applicable: the gears sit on shafts inside a frame or housing
- **materials**: Steel (KHK stock helical gears in S45C and induction-hardened SCM440), cast iron (large old double helical gears, e.g. the Commons photo from Musee Stella Matutina), bronze and plastics. 3D-printed: PLA, ASA, PLA-CF, ABS, PETG and nylon; in HowToMechatronics' spur gear test ASA (120.9 N) and PLA (116.9 N) beat PLA-CF (111 N), ABS (about 90 N) and PETG (87.2 N), while EngineerDog ranks nylon > PLA > ABS > PETG for printed gears overall (nylon for low friction and heat). Boundless 3D printed a print-in-place herringbone set in PETG-CF.
- **maker_difficulty**: easy for printed herringbone and helical gears (free generators make them and they print flat without supports); plain helical gears need thrust bearings; precise metal herringbone gears are hard to machine (they can't be cut on a normal gear hobbing machine), so print them or buy grooved double helical gears

### Making it

- **processes**: 
  - 3D print (FDM): 'by far the easiest way' to make herringbone gears (EngineerDog); also helical gears and print-in-place gear bearings
  - off-the-shelf part: helical gears (parallel pairs and crossed screw gears) and helical racks; double helical gears mostly for industry
  - CNC: helical gears are hobbed or milled; herringbone gears need special shapers (Sykes type) or a central groove for tool run-out (double helical) (Wikipedia 'Herringbone gear')
- **print_in_place**: yes for herringbone planetary gear bearings (Emmett Lalish's 'Gear Bearing', Thingiverse thing 53451, and many remixes such as Henry's 'Fully Parametric Planetary Herringbone Gear Bearing' with 0.25 mm backlash) and simple herringbone pairs in a frame (Boundless 3D's print-in-place example with 0.2 mm or 0.5 mm gaps); helical gear pairs on separate shafts are normally printed separately and assembled
- **making_tips_3d_printing**: 1) Generate, don't draw: BOSL2 spur_gear() takes helical= (positive = left-hand, negative = right-hand) and herringbone=true; the FreeCAD Gears workbench makes helical and double helical gears; bd_warehouse has HelicalGear; Lucas's Printables collection gives ready herringbone STEP files (module 1, 15-degree helix, 14.5-degree pressure angle, prime tooth counts 7-97). 2) Pair hands correctly: on parallel shafts one gear is left-hand and the other right-hand with the same helix angle (KHK; tec-science); a herringbone partner is the mirror image. 3) Use the right centre distance: a helical gear's pitch circle is larger than a spur gear's by 1/cos(helix angle), so use BOSL2 gear_dist() or a = (z1 + z2) x normal module / (2 cos helix angle) (RoyMech) rather than the spur formula. 4) Helix angle: industry uses about 6-20 degrees for single helical and 25-40 degrees for herringbone (RoyMech); HowToMechatronics quotes 15-25 degrees. Printed flat, the tooth faces lean at roughly the helix angle, and Prusa printers manage 45-60 degree overhangs, so angles up to about 45 degrees print without supports ⚑ [uncertain] (reasoning, supported by k's '90-degree Helical Gear Fidget', whose 45-degree gears print fine and are offered with chamfered edges). 5) Print gears flat with the shaft vertical so every layer traces the full tooth outline; the herringbone V needs no support in either half. 6) Fight elephant's foot (a squashed, wider first layer that makes gears bind): HowToMechatronics used a 0.1 mm bed offset and -0.15 mm horizontal expansion; chamfering the bottom edge also helps. 7) Clearance: 0.2 mm between print-in-place parts on a well-tuned printer, 0.5 mm on a less tuned one (Boundless 3D); Prusa suggests starting at 0.3 mm for moving parts. 8) Strength: 5 or more walls and at least 35% infill (HowToMechatronics); 'use herringbone gears whenever possible, and ball bearings that can accept axial forces when using helical gears' (HowToMechatronics). 9) Tooth counts with no common factor spread wear evenly (EngineerDog: 15 and 31 rather than 15 and 30). 10) Assembly: herringbone gears can't be slid into mesh along their shafts, so design the frame so one gear drops in sideways, and let one gear float axially so the pair self-centres (RepRap; EngineerDog notes the self-retaining shape makes installation more work). 11) Gear bearings: Gamma4D's 'Perfect Gear Bearing' is sliced with 0% infill and 'Ensure vertical shell thickness' unticked; free the parts carefully after printing. 12) Grease lightly (white lithium, PTFE or silicone, per EngineerDog); PLA softens above about 60 C (Prusa). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Helical gears for parallel shafts, sold as left-hand and right-hand pairs (McMaster-Carr: 21.5-degree helix, module 1, 20, 30 or 44 teeth; KHK KHG ground helical gears with 21 degree 30 minute helix and SH helical gears); crossed helical gears / screw gears (McMaster-Carr: 45-degree helix; same hand for 90-degree shafts); helical racks; ground helical racks; thrust bearings, angular-contact ball bearings and thrust washers to take the axial load; double helical gears are mainly industrial made-to-order parts ⚑ [uncertain]. 3D-printer extruder kits have used printed herringbone gear sets (Greg's Wade's geared extruder, RepRap). *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Helix angle: usually chosen from 6, 8, 10, 12, 15 or 20 degrees for single helical; 25-40 degrees is fine for double helical because the thrusts cancel (RoyMech). HowToMechatronics quotes 15-25 degrees; tec-science 20-45 degrees depending on the application; KHK stock helical gears use 21 degrees 30 minutes.
  - Axial thrust grows with the helix angle; spur gears have none (KHK 'Helix angle of gears'); fit thrust bearings for single helical gears (KHK helical gears page).
  - A parallel helical pair has the same helix angle and opposite hands (KHK; tec-science).
  - Crossed (screw) gears: shaft angle = helix angle 1 + helix angle 2 for the same hand; they must share pressure angle and normal pitch; contact is little more than a point (RoyMech; Wikipedia 'Gear'); efficiency 70-95%, light loads only (KHK).
  - Speed: spur gears generally run below 10 m/s at the pitch line, helical gears over 50 m/s when accurately made and balanced (RoyMech); Wikipedia counts over 25 m/s as high speed, where helical gears are preferred.
  - Efficiency of parallel helical pairs: 98.0-99.5% (KHK technical reference).
  - Centre distance a = (z1 + z2) x normal module / (2 cos helix angle) (RoyMech).
  - Herringbone halves must be in phase, or they create alternating axial thrust and vibration (KHK helical gears page).
  - Printed gears: 5 or more walls, at least 35% infill, prefer herringbone (HowToMechatronics); print-in-place herringbone gaps of 0.2 mm (tuned printer) to 0.5 mm (loose) (Boundless 3D, Printables).

### When to use it

- **everyday_examples**: 
  - Car gearboxes: the forward gears are helical and quiet, while reverse often uses cheaper straight spur gears, which is why reversing makes a louder whine (tec-science)
  - 3D-printer extruders: herringbone gear sets on Greg's Wade's geared extruder (RepRap wiki)
  - The Citroen car logo, two chevrons that represent herringbone gears (Wikipedia 'Herringbone gear')
  - Printed fidget toys: herringbone planetary 'gear bearings' and helical gear fidgets
- **when_to_use**: Use helical gears instead of spur gears when you want a quieter, smoother drive or more load capacity in the same space, especially at higher speeds, and you can fit bearings that take a sideways push. Use herringbone gears for 3D-printed gear trains in general (HowToMechatronics recommends them whenever possible): they are strong, quiet, have no net sideways push, centre themselves and print without supports. They are also the basis of self-contained print-in-place gear bearings and planetary toys. Use crossed helical (screw) gears to connect two shafts that cross without meeting, for light loads.
- **when_not_to_use**: Avoid plain helical gears if you can't carry the sideways push (no thrust bearings, gear held only by friction on a smooth shaft); use herringbone or spur gears instead. Avoid herringbone gears where gears must slide along their shafts into and out of mesh, as in sliding-gear gearboxes, or where the frame can't let one gear float to centre itself; use spur gears. For the cheapest, simplest drive, or where efficiency matters most in a printed gearbox, spur gears used slightly less power in HowToMechatronics' test. For shafts that meet at an angle use bevel gears; for a big reduction at right angles use a worm drive; crossed helical gears are only for light loads (KHK).
- **environment_limits**: Helical teeth slide more than spur teeth, so they need good lubrication (lubricant additives in industry, per Wikipedia 'Gear') and can run warmer. PLA gears soften above about 60 C (Prusa). Plain helical gears wear their bearings faster than spur gears because of the axial load (tec-science). HowToMechatronics found filament age, moisture and colour changed breaking strength noticeably, so test your own material. ⚑ [uncertain] Vibration can loosen set screws that also have to resist the axial push. *(⚑ parts need confirming)*
- **safety_notes**: The in-running nip where teeth meet can trap fingers, hair or clothing; guard powered gears and switch off before touching them (KHK safety precautions). ⚑ [uncertain] A plain helical gear held only by a set screw can be pushed along its shaft by the axial thrust and come off or jam. *(⚑ parts need confirming)*
- **common_failures**: 1) Single helical gears walk along their shafts or push the motor shaft, causing wear or noise: add thrust bearings or shaft collars, or switch to herringbone (KHK; HowToMechatronics). 2) Gears don't mesh because both have the same hand on parallel shafts: pair a left-hand with a right-hand gear (KHK). 3) Wrong centre distance because spur formulas were used: helical pitch circles are larger by 1/cos(helix angle) (BOSL2; RoyMech). 4) Herringbone pairs fixed on both shafts and slightly out of line bind and get damaged: let one float and tighten it after it centres (RepRap). 5) Vibration from herringbone halves out of phase (KHK). 6) Printed gears bind because of elephant's foot or too little clearance: chamfer edges, compensate the first layer, and use 0.2-0.5 mm gaps (HowToMechatronics; Boundless 3D). 7) Print-in-place gear bearings fused solid: increase clearance or tune the printer (Henry's design specifies 0.25 mm backlash and 'decently tuned tolerances').
- **related**: 
  - Spur gears: straight teeth, no axial thrust and cheapest, but noisier and with more backlash in printed tests
  - Crossed helical (screw) gears: helical gears on crossing shafts; quiet but light-duty and 70-95% efficient (KHK)
  - Worm drive: an extreme helical gear (a helix angle close to 90 degrees) giving a large, often self-locking reduction
  - Spiral bevel gears: the bevel-gear version of slanted teeth, for shafts that meet at an angle
  - Planetary gear set and herringbone gear bearing: herringbone teeth are often used in printed planetary sets so they hold together
  - Rack and pinion: a helical rack with a helical pinion gives smoother straight-line motion

### Pictures, videos and models

- **links**: 
  - [Anim engrenages helicoidaux.gif (Wikimedia Commons, by Sador)](https://commons.wikimedia.org/wiki/File:Anim_engrenages_helicoidaux.gif): 3D animation of a pair of helical gears meshing *(licence: GFDL 1.2+ / CC BY-SA 3.0)*
  - [Double-helical gear.jpg (Wikimedia Commons, by Parchaco)](https://commons.wikimedia.org/wiki/File:Double-helical_gear.jpg): Photo of a cast-iron double helical (herringbone) gear, likely from the Musee Stella Matutina *(licence: CC0 1.0 (public domain dedication))*
  - [Double-helical bevel gear Citroen.jpg (Wikimedia Commons, photo by FDominec)](https://commons.wikimedia.org/wiki/File:Double-helical_bevel_gear_Citroen.jpg): About 2 m herringbone bevel gear made by Citroen around 1927 for the Mirejovice hydropower plant; it ran until 2011 *(licence: CC BY-SA 3.0)*
  - [Herringbone gears / Double helical gears (Chris Maj, YouTube)](https://www.youtube.com/watch?v=U38sXLB7_vk): Video about herringbone and double helical gears (title and channel confirmed via oEmbed; not watched) *(licence: link only (standard YouTube licence))*
  - [The CORRECT Way to Make Herringbone/Helical Gears in Fusion 360 (Christopher's Factory, YouTube)](https://www.youtube.com/watch?v=LTe67iSftPg): CAD tutorial on modelling helical and herringbone gears (title and channel confirmed via oEmbed; not watched) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [BOSL2 gears.scad: spur_gear() with helical= and herringbone=true, gear_dist() (OpenSCAD library)](https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad): Parametric OpenSCAD generator for helical, herringbone and crossed (skew) helical gears, with correct centre distances and backlash *(licence: BSD 2-Clause)*
  - [FreeCAD Gears workbench (freecad.gears / FCGear), README](https://raw.githubusercontent.com/looooo/freecad.gears/master/README.md): FreeCAD add-on making involute and cycloid gears with helical and double helical (herringbone) teeth *(licence: GPL-3.0)*
  - [bd_warehouse gears (build123d Python library): HelicalGear, RackGear](https://bd-warehouse.readthedocs.io/en/latest/gear.html): Python/build123d classes that generate helical gears and helical racks as STEP or STL *(licence: Apache-2.0)*
  - [Herringbone Gear, Print in place example by Boundless 3D (Printables)](https://www.printables.com/model/932245-herringbone-gear-print-in-place-example): Print-in-place herringbone gear set in two versions: 0.2 mm gaps for well-tuned printers and 0.5 mm for less tuned ones *(licence: Creative Commons Public Domain)*
  - [Gear Bearing by emmett, re-upload by dmacnulty (Printables; original at https://www.thingiverse.com/thing:53451)](https://www.printables.com/model/524763-gear-bearing-by-emmett): Emmett Lalish's classic print-in-place herringbone planetary gear bearing *(licence: CC BY-SA (as listed on the Printables re-upload))*
  - [Fully Parametric Planetary Herringbone Gear Bearing by Henry (URL from Printables API, page not opened)](https://www.printables.com/model/395841-fully-parametric-planetary-herringbone-gear-bearin): Parametric Onshape version of the herringbone gear bearing with 0.25 mm backlash and a chamfered lip; STEP included *(licence: CC BY)*
  - [Herringbone Gear Collection with STEP files by Lucas (URL from Printables API, page not opened)](https://www.printables.com/model/866460-herringbone-gear-collection-with-step-files): Ready herringbone gears, module 1, 15-degree helix, prime tooth counts from 7 to 97, with and without NEMA 17 motor bores *(licence: Creative Commons Public Domain)*
  - [90-degree Helical Gear Fidget by k (URL from Printables API, page not opened)](https://www.printables.com/model/1624236-90-degree-helical-gear-fidget): Crossed helical gear toy: 40-tooth, 45-degree helix gears turning a corner, printable without supports *(licence: CC BY-NC)*
  - [HUANGYAN920 Mechanical: interactive mechanism animations (entries 'HELICAL-GEAR', 'HERINGBONE-GEAR', 'CROSSED-HELICAL')](https://huangyan920.github.io/Mechanical/): Browser animations of helical, herringbone and crossed helical gear drives; its quick notes give herringbone efficiency as 95-97%, lower than KHK's 98-99.5%, so treat its numbers as rough *(licence: MIT)*
- **diagram_idea**: Three gears side by side turning slowly: a spur gear whose contact line snaps on across the whole tooth at once, a helical gear whose contact line sweeps diagonally with an arrow showing the gear being pushed along its shaft, and a herringbone gear where two opposite arrows cancel out.
- **sources**: 
  - https://en.wikipedia.org/wiki/Herringbone_gear
  - https://en.wikipedia.org/w/index.php?title=Herringbone_gear&action=raw
  - https://en.wikipedia.org/wiki/Gear
  - https://en.wikipedia.org/w/index.php?title=Gear&action=raw
  - https://khkgears.net/new/helical_gears.html
  - https://khkgears.net/pdf/2023/helical-gears.pdf
  - https://khkgears.net/new/gear_knowledge/gear-nomenclature/helix-angle-of-gears.html
  - https://khkgears.net/new/gear_knowledge/gear-nomenclature/thrust-forces-acting-on-gears.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html
  - https://khkgears.net/new/gear_knowledge/abcs_of_gears-b/gear_types_and_characteristics.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_forces.html
  - https://roymech.org/Useful_Tables/Drive/Helical_Gears.html
  - https://roymech.org/Useful_Tables/Drive/Gears.html
  - https://www.tec-science.com/mechanical-power-transmission/gear-types/helical-gears/
  - https://www.tec-science.com/mechanical-power-transmission/gear-types/herringbone-gears-and-double-helical-gears/
  - https://www.mcmaster.com/products/helical-gears/
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - https://howtomechatronics.com/how-it-works/how-to-3d-print-gears-the-ultimate-guide/
  - https://hackaday.com/2024/06/12/studying-the-finer-points-of-3d-printed-gears/
  - https://reprap.org/wiki/Herringbone_Extruder_Driver
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/Category:Helical_gears
  - https://commons.wikimedia.org/wiki/Category:Animations_of_gears_and_gearboxes
  - https://commons.wikimedia.org/wiki/File:Anim_engrenages_helicoidaux.gif
  - https://commons.wikimedia.org/wiki/File:Double-helical_gear.jpg
  - https://commons.wikimedia.org/wiki/File:Double-helical_bevel_gear_Citroen.jpg
  - https://www.youtube.com/watch?v=U38sXLB7_vk
  - https://www.youtube.com/watch?v=LTe67iSftPg
  - https://github.com/BelfrySCAD/BOSL2/wiki/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://raw.githubusercontent.com/looooo/freecad.gears/master/README.md
  - https://bd-warehouse.readthedocs.io/en/latest/gear.html
  - https://raw.githubusercontent.com/gumyr/bd_warehouse/main/LICENSE
  - https://huangyan920.github.io/Mechanical/
  - https://api.printables.com/graphql/
  - https://www.thingiverse.com/thing:53451

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: parallel, at an angle, crossed
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, input_output, making_tips_3d_printing, off_the_shelf_parts, safety_notes

## 100 Belt drives (timing, round and V-belt)

*gear trains, gearboxes & transmissions.* A loop of belt around two pulleys that passes rotation between shafts; toothed timing belts don't slip, round and V-belts can

### What it is

- **plain_name**: A loop of belt, like a strong rubber band or a toothed strap, wrapped around two wheels so that turning one wheel turns the other; different wheel sizes make the second wheel turn faster or slower
- **term**: Belt drive (belt and pulley drive): toothed timing belt (synchronous belt drive), V-belt drive and round-belt drive
- **aliases**: 
  - belt and pulley
  - pulley belt / drive belt
  - timing belt, toothed belt, synchronous belt, cogged belt (the toothed kind)
  - GT2 belt / 2GT belt (the 2 mm-pitch toothed belt in most 3D printers; PowerGrip GT (brand) is the Gates name for the tooth profile)
  - HTD belt, T2.5 / T5 belt, MXL / XL belt (other toothed-belt profiles)
  - V-belt, vee belt, wedge belt (e.g. SPZ, SPA sections), fan belt
  - poly-V belt, multi-groove or multi-rib belt, serpentine belt (car engines)
  - round belt, O-ring belt, polycord, urethane or polyurethane (PU) round belt
  - flat belt (the older friction type, still in conveyors)
  - open belt drive (both pulleys turn the same way) / crossed belt drive (they turn opposite ways)
  - Zahnriemen (German, toothed belt), Keilriemen (German, V-belt)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: torque limiting & slip, clutches & couplings
- **one_liner**: A flexible loop runs around two or more pulleys and carries rotation from one shaft to another, speeding it up or slowing it down according to the pulley sizes; toothed (timing) belts mesh like gears and never slip, while V-belts and round belts grip by friction and can slip when overloaded.
- **complexity**: A few parts: a driving pulley (on the motor), a driven pulley, the belt loop, and a way to tension the belt (slotted motor mount, adjustable centre distance or an idler pulley). Timing belts use toothed pulleys (sprockets) with side flanges to stop the belt walking off; V-belts use V-grooved pulleys (sheaves); round belts use pulleys with a V or round groove. Plus shafts and bearings to carry the belt's pull.
- **how_it_works**: The belt is stretched tight around the pulleys, so when the driving pulley turns, the belt is pulled along and turns the other pulley. The speed changes by the ratio of the pulley sizes (or tooth counts): a small pulley driving one three times bigger turns the output three times slower with about three times the turning force. A toothed belt's teeth lock into grooves on the pulleys, so it keeps exact step (synchronous) as long as it is tight enough not to jump teeth; a V-belt wedges into its groove and a round or flat belt grips by friction, so they can creep or slip a little, and slip completely if overloaded. Crossing the belt into a figure eight makes the two pulleys turn in opposite directions.

### Finder attributes

- **job**: 
  - change speed or turning force: speeds up or slows down rotation between two shafts that can be far apart (ratio set by pulley sizes or tooth counts)
  - change the kind of motion: an open-ended timing belt clamped to a carriage turns a motor's rotation into straight-line motion, as on the X and Y axes of most 3D printers
  - slip or let go when overloaded: friction belts (V, round, flat) slip instead of breaking things when jammed; toothed belts do not, except by jumping teeth
- **motion**: rotate: continuous rotation in either direction with unlimited range; an open-ended toothed belt can also drive a carriage in a straight line (slide)
- **degrees_of_freedom**: 1: the two pulleys are tied together by the belt, so turning one sets the other's position (exactly for toothed belts, approximately for friction belts that creep or slip)
- **special_behaviour**: 
  - torque-limiting (slips at a set force or torque): V-belts, round belts and flat belts slip when the load gets too high, which helps protect machinery from overload and jams (Wikipedia 'Belt (mechanical)'); the slipping point is not precise and changes with tension and wear. Toothed belts do not slip but can jump teeth (ratchet) when loose or overloaded
  - motion conversion (e.g. rotary to linear): an open-ended toothed belt fixed to a sliding carriage converts pulley rotation into straight-line motion, as in 3D printers, plotters and laser cutters
  - self-aligning or self-centring: a flat belt climbs to the high point of a crowned (slightly barrel-shaped) pulley and stays centred (Wikipedia); toothed belts instead need side flanges
  - quick-release: ⚑ [uncertain] slackening the tension lets the belt be lifted off without taking the shafts apart; Wikipedia notes clutch action can be had by releasing belt tension or shifting the belt onto a free-turning pulley *(⚑ parts need confirming)*
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it transmits rotation
  - shape (the parts interlock; form-fit): toothed timing belts, whose teeth mesh with the pulley grooves
  - friction or clamping (force-fit): V-belts (wedged into the groove), round belts and flat belts, which rely on belt tension and friction
- **input_output**: Continuous rotation -> continuous rotation (or rotation -> straight-line motion with an open-ended toothed belt). Ratio = driven pulley diameter / driving pulley diameter (NotesandSketches), or driven teeth / driving teeth for toothed belts; a 20-tooth GT2 pulley moves the belt 40 mm per turn (meta-matic). Single stages are typically a few to one: the Hackaday.io 'Paper PiKon' telescope drive uses 20:100 tooth stages (5:1) and stacks five stages for 6480:1. Efficiency is high: 90-98%, usually 95% for belts in general (Wikipedia); up to 98% for toothed belts, and 95-98% for well-kept V-belts, dropping 5% or more if poorly maintained (Gates design manual, p. 138). Shaft arrangement: normally parallel; a crossed belt reverses direction; belts can also run with a twist so the shafts need not be parallel (Wikipedia). Back-drivable: yes, freely, in both directions.
- **power**: passive (no power needed); it simply passes on the motor's power. If the motor stops, nothing holds the output: a belt drive will let a load (such as a lifted Z axis) drive the motor backwards
- **removability**: removable: pulleys are clamped to shafts with set screws, clamps or keyed bushings, and the belt comes off once the tension is released
- **reuse_cycles**: many times: belts and pulleys can be taken off and refitted repeatedly; the belt itself wears out (fatigue, tooth wear) and is replaced as a consumable
- **tools_needed**: Hex keys or a screwdriver for pulley set screws and motor mounts; something to measure or judge tension (a printed tension meter, a spring gauge, or the pluck-and-listen test); a cutter for open-ended belts; for welded round belts, a soldering iron, hot blade or butane torch and ideally a clamping jig
- **seal**: none: the belt and pulleys are open. Drives can be enclosed in a guard or cover for safety and to keep debris out, but the belt itself seals nothing
- **load**: Light to heavy depending on type and size: round belts are for relatively low torque only (Wikipedia); small GT2 belts carry light 3D-printer loads; industrial toothed belts carry up to about 150 kW (Wikipedia) and V-belt sets drive large machinery. A belt only works in tension, so the pull on the tight side plus the installation tension loads the shafts and bearings sideways. Toothed belts fail by tooth shear or jumping teeth if overloaded or loose; friction belts slip first.
- **adjustable**: Yes, tension: by sliding the motor in slotted holes, moving one shaft, or moving an idler pulley. The speed ratio is fixed by the pulleys, except on stepped (cone) pulleys where the belt is moved between steps, or variable-speed V-belt drives with split pulleys that change their working diameter (Wikimedia Commons categories 'Cone pulleys', 'Variable speed v-belts')
- **play_and_precision**: Toothed belts: small play (backlash), because the belt teeth need some clearance to enter and leave the grooves; Gates says GT2 backlash lies between trapezoidal-tooth belts (little) and HTD belts (significant), and that belt stretch and tooth deflection add further position error under changing loads (Gates design manual, p. 133). Position repeats well when tension is kept up; Game Manual 0 says a properly tensioned timing belt has essentially no slop. Friction belts: no fixed position relationship, because slip and belt stretch mean the ratio is not exactly constant (Wikipedia). Misalignment: toothed belts should be within 1/4 degree or 1/16 inch per foot (Gates, p. 141); friction belts are more forgiving of misaligned shafts (Wikipedia).
- **access_needed**: end of a tube or shaft: pulleys slide onto the shaft ends, and a closed-loop belt has to be slipped over the pulleys, so you need to get past the shaft ends or move the pulleys closer together; open-ended belts (as on 3D-printer axes) can be threaded in and clamped instead
- **materials**: Toothed belts: rubber (neoprene or EPDM) or polyurethane, reinforced with fibreglass, aramid (Kevlar), steel or carbon cords, with a nylon fabric tooth facing (Wikipedia 'Toothed belt'; Gates). 3D-printer GT2 belts come with glass-fibre or steel cores (steel stretches least) (DHM-online). V-belts: rubber with fabric and cords. Round belts: polyurethane, cut to length and welded (Wikipedia; Hackaday). Pulleys: aluminium, steel, cast or ductile iron, plastic, or 3D-printed PLA, PETG or nylon for light duty. Makers have even printed working GT2-profile belts in TPU running on PLA pulleys (Hackaday.io).
- **maker_difficulty**: easy: belts, pulleys and idlers are cheap off-the-shelf parts, and pulleys print well from free generators; the main skills are holding the right tension and lining the pulleys up. Round belts are the easiest of all to make to any length by heat-welding polyurethane cord.

### Making it

- **processes**: 
  - off-the-shelf part (belts, pulleys, idlers, tensioners)
  - 3D print (FDM): pulleys, idlers, tensioners, round-belt pulleys, even TPU toothed belts for light loads
  - 3D print (resin): small, fine-pitch pulleys ⚑ [uncertain]
  - CNC: machined metal pulleys and sheaves *(⚑ parts need confirming)*
- **print_in_place**: no: the belt is bought (or printed separately in TPU) and fitted over separately printed or bought pulleys, then tensioned
- **making_tips_3d_printing**: 1) Generate pulleys, don't draw teeth by hand: droftarts' OpenSCAD 'Parametric pulley' (and its GitHub copies) covers MXL, XL, T2.5, T5, HTD and GT2 profiles with any tooth count; it has an 'additional_tooth_width' setting you tune 0.1 mm at a time until the belt fits snugly. 2) Print pulleys standing on end, with the pulley axis vertical (along Z), so the tooth outline is traced in each layer; use layers of 0.16 mm or less, a 0.4 mm or smaller nozzle and slow outer walls for accurate teeth (meta-matic GT2 guide). 3) Size the bore 0.1-0.2 mm over the shaft and ream or drill it to fit (meta-matic; RH3D's pulley collection uses 0.1 mm and suggests drilling if too tight). 4) Fix pulleys with an M3 set screw into a captive nut, or a clamping collet, which wobbles less (RH3D). 5) Don't go too small: Hackaday.io's Paper PiKon project used 20 teeth as the smallest GT2 pulley and made sure at least 6 teeth were in mesh (it got 7); a pulley guide suggests 16 teeth as the smallest for GT2 because of the belt's bend radius (meta-matic), and OstrichEngineering warns small printed pulleys make belts slip sooner. 6) Wrap: aim for at least 90 degrees of belt contact on each pulley, better 180 degrees or more (Game Manual 0); Gates asks for at least 60 degrees on each loaded pulley and at least 6 teeth in mesh. 7) Add flanges, at least two on one pulley or one on each pulley on opposite sides; the top flange overhang may need splitting the pulley into two prints (meta-matic; Gates). 8) Materials: PLA or ABS for light work, PETG or nylon for higher loads (meta-matic). 9) Build in a tensioner or slotted mount: a printed frame cannot hold the 0.05-0.08 mm centre-distance accuracy a fixed-centre drive needs (Gates p. 134). 10) Round belts: design a 60-degree V-groove (Wikipedia); for 2 mm or 3/32 inch urethane cord keep pulleys at least 3/4 inch (19 mm) across (Cabaret Mechanical Theatre); weld the cord ends with a hot blade or soldering iron in a printed two-slider clamping jig so the ends stay lined up (Hackaday, JBVCreative), then trim the small bump at the weld. 11) Printed toothed belts: a TPU GT2-profile belt on 20-tooth PLA pulleys has worked for a light gear-motor model (Hackaday.io), but buy a reinforced belt for anything that needs accuracy or strength.
- **off_the_shelf_parts**: GT2 (2GT) timing belt, 2 mm pitch, 6 mm or 9 mm wide, open-ended (sold by the metre) or closed loop, with glass-fibre, steel or aramid cords; GT2 timing pulleys, typically 16 or 20 teeth with a 5 mm bore for NEMA 17 motors; toothed idler pulleys and smooth (flat) idlers with built-in bearings; belt tensioners; larger-pitch toothed belts and pulleys (HTD 3M/5M, GT2/GT3 3 mm and 5 mm, T2.5, T5, MXL, XL, L) used in robotics; V-belts (classical A/B, narrow wedge SPZ/SPA/SPB/SPC, light-duty fractional sizes) and matching V-groove pulleys (sheaves), often with taper-lock or QD bushings; poly-V (multi-rib) belts; polyurethane round belt cord (commonly 2-10 mm diameter) and round-belt pulleys; belt tension gauges. Beware: some 3D-printer vendors sell MXL-profile pulleys labelled as GT2, which causes print artefacts (Filastruder).
- **rules_of_thumb**: 
  - Speed ratio = diameter of driven pulley / diameter of driver pulley; e.g. 50 mm driving 150 mm gives 3:1, so 2100 rpm becomes 700 rpm (NotesandSketches 'Pulleys').
  - GT2 belt travel per pulley turn = number of teeth x 2 mm; a 20-tooth pulley moves the belt 40 mm per turn (meta-matic GT2 guide).
  - Toothed belts: keep at least 6 teeth in mesh with the smaller pulley; the power rating drops 20% for each tooth fewer (Gates PowerGrip GT2 Drive Design Manual, p. 135; RoyMech 'Timing belts' gives the same 6-tooth rule).
  - Each loaded toothed pulley should have at least 60 degrees of belt wrap (Gates, p. 135); Game Manual 0 asks for at least 90 degrees and ideally 180 degrees or more.
  - Flanges: on a two-pulley drive use two flanges on one pulley or one flange on each on opposite sides; flange both pulleys on both sides if the centre distance is more than 8 times the small pulley's diameter; on vertical shafts flange one pulley both sides and the others on the bottom (Gates, p. 134).
  - Idlers go on the slack side; inside idlers should be toothed (up to 40 grooves); outside (backside) idlers should be flat, uncrowned and at least 1.3 times the smallest recommended pulley size; avoid spring-loaded idlers on toothed belts except for light loads, because the belt can overpower the spring and jump teeth (Gates, p. 135).
  - Misalignment of toothed belt drives should not exceed 1/4 degree or 1/16 inch per foot (Gates, p. 141).
  - Don't use a fixed (non-adjustable) centre distance for power drives; for light motion-transfer drives it must be held within about 0.05-0.08 mm, because belt and pulley tolerances can change tension by a factor of 3 or more (Gates, p. 134).
  - Efficiency: toothed belts up to 98%; well-kept V-belts 95-98%; roller chains 92-98% (Gates, p. 138). Belts in general 90-98%, usually 95% (Wikipedia).
  - Toothed belts work unaffected from -34 to 85 C (Gates, p. 136); timing belts last roughly 8,000-12,000 hours (RoyMech).
  - V-belt minimum pulley diameters: SPZ 67 mm, SPA 100 mm, SPB 160 mm, SPC 224 mm; groove angles 34 or 38 degrees depending on pulley size; capacity falls to 0.82 of rated at 120 degrees of wrap (RoyMech 'Vee belts').
  - Round belts run in a pulley with a 60-degree V-groove and are for relatively low torque only (Wikipedia 'Belt (mechanical)').
  - Timing belts need only enough tension to keep the belt in contact with the pulley; friction belts need more (Wikipedia). Prusa's rule of thumb for printer GT2 belts: plucked, they should sound like a low bass note (Prusa Knowledge Base).

### When to use it

- **everyday_examples**: 
  - 3D printers, laser cutters and plotters: GT2 toothed belts move the print head and bed
  - Car engines: a toothed timing belt keeps the camshaft in step with the crankshaft, and a ribbed (poly-V) belt drives the alternator and other accessories
  - Old sewing machines and cassette decks: thin round belts (Wikipedia; Hackaday)
  - Belt-drive record turntables and belt-drive bicycles (Wikimedia Commons categories)
- **when_to_use**: Use a belt when the two shafts are too far apart for gears, when you want quiet, smooth running without lubrication, or when you want a cheap speed reduction that you can change by swapping pulleys. Choose a toothed timing belt when the shafts must stay exactly in step or when you need position control, such as 3D printer and CNC axes, camera sliders, robot joints and reduction stages for stepper motors. Choose a V-belt or round belt when some slip is useful: it cushions shocks and protects the machine if something jams (Wikipedia), for example on lathes, drill presses, grinders, toys, automata and conveyors. Round polyurethane belts are ideal for makers because you can weld them to any length; like other belts they can also run with a twist, so the shafts need not be parallel (Wikipedia).
- **when_not_to_use**: Avoid friction belts (V, round, flat) where position must stay exact or where slip would be dangerous; use a toothed belt, chain or gears. Avoid belts where the load must be held when the motor stops, since belts back-drive freely; use a worm drive, lead screw or a brake. Avoid toothed belts in dirty or dusty places unless they are shielded, because packed debris stops the teeth seating (Gates, p. 135); a V-belt or chain copes better. For very high torque in a small space, or where the shafts are very close, use gears; for shock-loaded, dirty, low-speed drives use a roller chain. If the frame can't be made stiff and adjustable enough to keep tension, a gear train may be simpler.
- **environment_limits**: Heat and cold: toothed belts work normally from -34 to 85 C (Gates, p. 136), and Wikipedia gives -35 to 85 C for belts; one round-belt maker recommends a maximum of 55 C for standard urethane belts, with special high-temperature urethane to 110 C (Dura-Belt FAQ, vendor). Oil and water: excess lubricant or chemicals on a toothed drive make it more likely to jump teeth (Gates), and they make friction belts slip (Dura-Belt FAQ); wet or humid air can rust steel pulleys (Gates). Sunlight and ozone: store belts away from direct sunlight, heat, moisture and ozone (Gates, p. 136). Over time belts stretch and wear, so tension must be re-checked (Wikipedia), and 3D-printed PLA pulleys can creep or soften in heat ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: The point where the belt runs onto a pulley is an in-running nip point that can pull in fingers, hair or loose clothing and crush or sever them; guard it (OSHA woodworking eTool 'Nip points'). Stop and unplug the machine before checking or adjusting tension. Over-tightened belts overload motor and shaft bearings (DHM-online). Belts can build up static electricity, which matters near flammable dust or vapours (Gates, p. 137).
- **common_failures**: 1) Too loose: toothed belts jump teeth (ratchet) and printers show layer shifts, ghosting or distorted shapes; friction belts slip and glaze. Fix: tension properly and re-check after running in (Prusa Knowledge Base; Game Manual 0). 2) Too tight: overloads bearings and motors and shortens belt life (Gates; Game Manual 0). 3) Misaligned pulleys: the belt wears on one edge, rides into the flanges or walks off (Gates, p. 141). 4) Tooth shear or stripped teeth, or the fibre cords delaminating, often after the belt was kinked or crimped during storage or forced over a flange during fitting (Wikipedia 'Toothed belt'; Gates). 5) Too few teeth in mesh or too little wrap on a small pulley: skipping (Gates; Game Manual 0). 6) Wrong pulley profile, e.g. MXL pulleys sold as GT2, causing regular print artefacts (Filastruder). 7) Debris packed into pulley grooves (Gates). 8) Round belts: a lumpy weld that knocks as it passes the pulley; trim it or use a clamping jig (Hackaday). 9) Printed pulleys: a loose bore or set screw that lets the pulley wobble or slip on the shaft (RH3D).
- **related**: 
  - Roller chain and sprockets: also joins distant shafts without slip and handles more torque in dirty places, but is noisier, heavier, needs oil and is 92-98% efficient (Gates)
  - Spur or helical gears: for shafts close together; stiffer and more compact, but printed gears have backlash and are noisier
  - Capstan cable drive: a cable wrapped around a small drum and anchored to a big one; zero backlash but only a limited range of rotation
  - Rope drive: a historic form of round-belt drive using ropes on grooved pulleys (Wikimedia Commons 'Rope drives')
  - Friction wheel drive: two wheels pressed together, with no belt; simpler but slips more easily ⚑ [uncertain]
  - Rack and pinion or lead screw: other ways to turn rotation into straight-line motion, stiffer than an open-ended belt *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [Power transmission belt.gif (Wikimedia Commons, OSHA)](https://commons.wikimedia.org/wiki/File:Power_transmission_belt.gif): Animation of a belt running onto its pulley, showing the in-running nip point *(licence: Public domain (work of the US Department of Labor))*
  - [Belt drives profiles.svg (Wikimedia Commons, by Wittiko)](https://commons.wikimedia.org/wiki/File:Belt_drives_profiles.svg): Cross-sections of a flat belt, V-belt, round belt and poly-V belt in their pulley grooves *(licence: CC BY 4.0)*
  - [Pu-Rundriemen.jpg (Wikimedia Commons, by Seilerei Pflug)](https://commons.wikimedia.org/wiki/File:Pu-Rundriemen.jpg): Photo of polyurethane round belts *(licence: CC BY-SA 3.0)*
  - [507 Mechanical Movements, No. 1: simple pulleys and an open belt](https://507movements.com/mm_001.html): Historic 1868 drawing with an animated version of an open belt drive in which both pulleys turn the same way *(licence: Book public domain; website animation link only)*
  - [3D Printed Pulleys and Round Belts (Polyurethane Belt) (Jesse Parker, YouTube)](https://www.youtube.com/watch?v=j8G0LAX9MVg): Video of 3D-printed pulleys running on polyurethane round belts *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [GT2 Pulley - the big collection updated (RH3D, Printables)](https://www.printables.com/model/333720-gt2-pulley-the-big-collection-updated): Ready-to-print GT2 pulleys in many tooth counts and bore sizes (5-10 mm), with set-screw, nut or collet fixing; bores designed 0.1 mm oversize *(licence: CC BY-NC-SA)*
  - [[OEPU] GT2 Pulley Collection - Parametric (OstrichEngineering, Printables)](https://www.printables.com/model/1183441-oepu-gt2-pulley-collection-parametric (URL from Printables API, page not opened)): Parametric Fusion 360 model plus STLs of GT2 pulleys in many sizes *(licence: GNU GPL v3.0)*
  - [openscad.parametric-pulley (rbuckland's modular version of droftarts' Thingiverse 'Parametric pulley', thing:16627)](https://raw.githubusercontent.com/rbuckland/openscad.parametric-pulley/master/Pulley_T-MXL-XL-HTD-GT2_N-tooth.scad): OpenSCAD script that generates toothed pulleys for MXL, 40DP, XL, H, T2.5, T5, T10, AT5, HTD 3/5/8 mm and GT2 2/3/5 mm belts with any tooth count, flanges and captive nuts *(licence: ⚑ [uncertain] not stated in the repository; the original Thingiverse page could not be opened)*
  - [Tension Meter for the GT2 belts of i3 MK3S+ or Prusa MINI+ (Prusament, Printables)](https://www.printables.com/model/46639-tension-meter-for-the-gt2-belts-of-i3-mk3s-or-prus): Printed flexure gauge that clips on a GT2 belt and shows whether tension is between MIN and MAX; must be printed in Prusament PETG from the supplied G-code *(licence: CC BY-NC-ND)*
  - [6mm Bore Single Groove Pulley for Round Belt (themadjem, Printables)](https://www.printables.com/model/987627-6mm-bore-single-groove-pulley-for-round-belt (URL from Printables API, page not opened)): 34 mm single V-groove pulley for 3-5 mm polyurethane round belts, 6 mm bore with captive M3 nut *(licence: CC BY-SA)*
  - [3D Printed GT2 Profile TPU Belt with PLA Sprockets (Hackaday.io)](https://hackaday.io/project/182852-3d-printed-gt2-profile-tpu-belt-with-pla-sprockets): A 60-tooth, 6 mm wide GT2-profile belt printed in TPU running on two 20-tooth PLA pulleys, driven by an N20 gear motor *(licence: ⚑ [uncertain] not stated on the project page)* *(⚑ parts need confirming)*
- **diagram_idea**: Three side-by-side cut-away pulleys showing a toothed belt locked into grooves, a V-belt wedged into its groove and a round belt sitting in a V-groove, above an animation of a small pulley driving one three times bigger (with rev counters showing 3:1), and a crossed-belt version turning the other way.
- **sources**: 
  - https://en.wikipedia.org/wiki/Belt_(mechanical)
  - https://en.wikipedia.org/wiki/Toothed_belt
  - https://en.wikipedia.org/wiki/Timing_belt_(camshaft)
  - https://roymech.org/Useful_Tables/Drive/Belt_Drives.html
  - https://roymech.org/Useful_Tables/Drive/Timing_belts.html
  - https://roymech.org/Useful_Tables/Drive/Vee_belts.html
  - https://docs.rs-online.com/5016/0900766b8002d3b7.pdf
  - https://www.notesandsketches.co.uk/Pulleys.html
  - https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/belt.html
  - https://help.prusa3d.com/glossary/belt-tension_1597
  - https://help.prusa3d.com/article/adjusting-belt-tension-mk4-s-mk3-9-s-mk3-5-s-mk3-s_112380
  - https://www.filastruder.com/blogs/news/gates-belt-2gt-gt2-gt3-myths-and-legends
  - https://www.dhm-online.com/en/blog/gt2-belts-and-pulleys-for-3d-printers-complete-guide-n240
  - https://meta-matic.com/en/3d/gt2-pulley/guide/
  - https://hackaday.io/project/162982-paper-pikon-with-1000mm-focal-length/log/158387-3d-printed-pulleys
  - https://hackaday.io/project/182852-3d-printed-gt2-profile-tpu-belt-with-pla-sprockets
  - https://hackaday.com/2024/05/15/custom-polyurethane-belts-made-easy/
  - https://cabaret.co.uk/making-urethane-belts-for-automaton-projects-dugs-tips-10/
  - https://durabelt.com/faq.php
  - https://www.durabelt.com/crosssectioncalcinfo.php
  - https://www.osha.gov/etools/woodworking/machine-hazards/nip-points
  - https://commons.wikimedia.org/wiki/Category:Belt_drives
  - https://commons.wikimedia.org/wiki/File:Power_transmission_belt.gif
  - https://commons.wikimedia.org/wiki/File:Belt_drives_profiles.svg
  - https://commons.wikimedia.org/wiki/File:Pu-Rundriemen.jpg
  - https://507movements.com/mm_001.html
  - https://www.youtube.com/watch?v=j8G0LAX9MVg
  - https://raw.githubusercontent.com/rbuckland/openscad.parametric-pulley/master/Pulley_T-MXL-XL-HTD-GT2_N-tooth.scad
  - https://raw.githubusercontent.com/rbuckland/openscad.parametric-pulley/master/README.md
  - https://www.printables.com/model/333720-gt2-pulley-the-big-collection-updated
  - https://www.printables.com/model/46639-tension-meter-for-the-gt2-belts-of-i3-mk3s-or-prus
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning, straight push or pull
- **shaft_layout**: parallel, crossed
- **overload_response**: slips and keeps going
- **clicks**: not applicable
- **tools**: soldering iron, welding or brazing torch, hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, make_it_yourself, processes, related, special_behaviour

## 101 Capstan cable drive (tendon drive)

*gear trains, gearboxes & transmissions.* A cable wrapped several turns around a small drum and anchored to a larger drum, giving a smooth, zero-backlash reduction for robot joints

### What it is

- **plain_name**: A thin rope or cable wound a few times around a small drum on the motor, with both ends fixed to a much bigger drum, so the small drum turns the big one slowly and strongly with no wobble or play, like gears made of string
- **term**: Capstan drive (capstan cable drive, cable reduction)
- **aliases**: 
  - capstan reducer / capstan speed reducer
  - cable drive, cable transmission, cable reduction ('pre-tensioned cable reductions' in the PHANToM haptic arm paper)
  - rope drive / rope-driven reducer ('High Precision Speed Reducer Using Rope')
  - cable-drum drive / rope-on-sheave drive (research papers)
  - capstan gear (maker model name)
  - tendon drive (loosely; strictly, tendon drives pull a joint from a distance, like finger tendons)
  - friction drive or dial-cord drive (the old radio-tuning version, where the cord is not fixed to the small drum and can slip)
- **family**: gear trains, gearboxes & transmissions
- **one_liner**: A cable wrapped several turns around a small input drum and anchored at both ends to a larger output drum turns the large drum at a reduced speed with more turning force, with zero backlash, very low friction and easy back-driving, but only through a limited angle.
- **complexity**: A small assembly: a small input drum (the 'sheave' or capstan) on the motor shaft, usually with a spiral groove; a large output drum or drum sector (the 'pulley') on the joint; one or two cables or ropes; anchors that fix the cable ends to the big drum (often through a hole, knot, ball fitting or clamp); and a tensioner (a screw, lead screw or sliding carriage) to pull the cable tight; plus the frame and bearings that hold the two drums at a fixed distance.
- **how_it_works**: The cable leaves the big drum, wraps three to five times around the small drum and returns to the big drum, where both ends are fixed, so it forms a tight loop. Friction from the wraps grows exponentially with each turn (the capstan equation), so the cable cannot slip on the small drum and the two drums behave like meshing gears; one direction of rotation is carried by the cable on one side and the other direction by the other side. The reduction equals the ratio of the drum diameters measured to the centre of the cable (effective or pitch diameters). Because the cable is always tight there is no gap to cross when the direction reverses, so there is no backlash, but the big drum can only turn until the cable runs out, usually well under one turn.

### Finder attributes

- **job**: change speed or turning force: a single-stage reduction, typically around 8:1 to 10:1, used to amplify a motor's torque at a robot or haptic joint
- **motion**: rotate, limited range: the output drum typically turns 180-270 degrees (Forte paper), e.g. 120 degrees on Aaed Musa's test stand and up to 330 degrees on the Forte arm's base; the input drum turns the ratio times as far
- **degrees_of_freedom**: 1: the two drums are tied together by the tight cable, so turning one sets the other
- **special_behaviour**: 
  - none of the listed clever behaviours: its value is zero backlash, low friction and smooth, quiet, easily back-driven motion. It is not self-locking and not a reliable torque limiter; if the cable is not anchored to the small drum and has too few wraps it can slip, as in old radio dial-cord drives, but in a proper capstan drive the wraps prevent this
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it transmits rotation
  - friction or clamping (force-fit): the cable grips the small drum through the friction of several wraps (capstan effect)
  - shape (the parts interlock; form-fit): the cable ends are anchored to the big drum by knots, ball fittings, clamps or holes
- **input_output**: Limited rotation -> slower limited rotation (the output typically moves 120-330 degrees). Ratio = effective diameter of big drum / effective diameter of small drum, measured to the cable centreline: 8:1 on the Forte arm (19.4 mm and 155.2 mm drums), 8.55:1 on Aaed Musa's test stand (intended 8:1), 8:1 on the CARA robot dog, under 9:1 on the Stanley quadruped (Hackaday). For higher ratios, stages are combined, e.g. a 2.5:1 belt stage feeding a 7.5:1 capstan for 18.75:1 (Forte). Efficiency: about 95% unlubricated and 96% with lubricated synthetic ropes (Sandia, Mazumdar et al. 2017). Shafts: parallel. Back-drivable: yes, easily; this 'torque transparency' is why it is used in haptic devices and legged robots (Hackaday; Sandia). If the big drum is held still and the small drum orbits around it, the ratio becomes D/d + 1 (Forte).
- **power**: passive (no power needed). With the motor off, the output is free to be back-driven by the load, so a lifted arm will fall unless it is balanced or braked
- **removability**: removable: the drums are bolted or pressed onto shafts and the cable can be untensioned and unwound; the cable is usually replaced rather than reused once cut and knotted to length
- **reuse_cycles**: many times for the drums and frame; a few times for the cable, which is cut to length, anchored and pre-stretched in place
- **tools_needed**: Hex keys or a screwdriver for the tensioning screw and drum mounting; a cutter for the rope or cable; for steel cable, crimping or ball-end fittings; a lighter or glue to seal synthetic rope ends ⚑ [uncertain] *(⚑ parts need confirming)*
- **seal**: none: the cable and drums run in the open
- **load**: Light to medium for hobby builds, and up to heavy in research robots: Forte's printed, steel-cable capstan joints are rated up to about 23.6 N m (with a belt stage, calculated from the motor's holding torque) and Sandia's synthetic-rope drives handle about 60 N m peak torques on a biped ankle. The cable only carries pull, the small drum sees the highest stress (Aaed Musa), and the cable ends are usually the weakest point, so extra wraps are used to protect them (Sandia). Bearings must resist the cable pre-tension pulling the two drums together.
- **adjustable**: Yes: cable tension is set with a screw, lead screw or sliding tensioning pulley, and should be re-tightened after a wear-in period of roughly 10-50 cycles and occasionally afterwards; Sandia found no more tensioning was needed after about 1,000 cycles. The ratio is fixed by the drum sizes, and makers fine-tune it by adjusting the big drum's outside diameter (Aaed Musa, CARA)
- **play_and_precision**: None (zero backlash) as long as the cable stays pre-tensioned (Sandia; Hackaday); slack from creep or lost tension brings back play and poor positioning (Aaed Musa). Stiffness comes from cable stretch, so a short, stiff, low-creep cable and good pre-tension matter. Forte, a printed arm with capstan and belt joints, measured repeatability (standard deviation) of 0.29-0.59 mm at the tool. The actual ratio can differ slightly from the drum ratio because the rope's working diameter is hard to measure and it flattens under tension (Aaed Musa). Misalignment: the drums must be parallel and at a fixed spacing; Forte spaces them about 1.5 cable thicknesses apart.
- **access_needed**: not applicable: it is built into a frame between two parallel shafts; you need to reach the tensioning screw and the cable anchors
- **materials**: Cable: stainless steel wire rope (zero creep but needs big drums; failed within 5 hours on Aaed Musa's small drums); synthetic ropes such as Dyneema DM20, Vectran, Kevlar or Zylon, which bend round small drums but may creep (stretch permanently) (Sandia; Aaed Musa). Vectran gave the best mix of low creep and light resistance in Sandia's tests; Aaed Musa chose 2 mm Dyneema DM20 after a two-week endurance test. Drums: machined and polished aluminium in industry and research (Sandia); 3D-printed PLA, PET-CF or polycarbonate in maker builds (Aaed Musa; Stanley on Hackaday.io).
- **maker_difficulty**: moderate: the parts print easily and need no precise gear teeth, but you must choose a low-creep rope, work out the effective diameters, route and anchor the cable neatly and build a tensioner

### Making it

- **processes**: 
  - 3D print (FDM): drums and frame (PLA, PETG, PET-CF, PC)
  - CNC: machined aluminium drums with spiral grooves in research and industrial designs
  - off-the-shelf part: the rope or cable, end fittings, bearings and screws
- **print_in_place**: no: the drums and frame are printed separately, then the cable is wound on, anchored and tensioned by hand
- **making_tips_3d_printing**: 1) Use effective (pitch) diameters: calculate the ratio from the diameters at the centre of the rope, not the drums' outside diameters, or the ratio will be off; Aaed Musa built two test drives slightly above and below 8:1 and interpolated the big-drum size to hit exactly 8:1. 2) Give the small drum a spiral (helical) groove so the wraps sit side by side and don't rub or climb on each other (Aaed Musa; Sandia); make the drum long enough for all the wraps: Forte uses height = cable thickness x ratio + 2 mm tolerance, and places the two drums about 1.5 cable thicknesses apart. 3) Make the small drum the strongest part: it carries the highest stress; CARA printed small drums in PET-CF at 100% infill (other parts 25% gyroid), and the Stanley team found Prusament PC Blend worked where PETG and nylon wore (Hackaday.io). 4) Keep the drum surfaces smooth; Sandia polishes its drums to stop rope abrasion, so sand off rough layer lines where the rope runs ⚑ [uncertain]. 5) Choose the rope for low creep: 2 mm Dyneema DM20 on CARA; ordinary synthetic ropes stretch and go slack, and stainless steel wire broke within 5 hours on small printed drums (Aaed Musa). 6) Wrap 3-5 turns on the small drum; that is enough friction to stop slipping (Aaed Musa); Hackaday's cable maths article says about four wraps is enough to drive a cable directly. 7) Build in a tensioner: Aaed Musa uses a lead screw, Forte passes steel cable through a hollow (vented) screw with a ball fitting and locks it with a nut, and Sandia uses a bolt-driven tensioning pulley on a sliding carriage. Re-tension after the first tens of cycles. 8) Anchor the cable so it leaves the anchor in a straight line and add extra wraps before the anchor to take load off it (Sandia). 9) Stiffen printed shafts and drums with embedded bolts or rods, or epoxy, and point the rope exit toward the output drum to reduce bending on the input shaft (Aaron Newman). 10) Don't lubricate the wraps you rely on for grip (Sandia). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Low-creep synthetic rope (Dyneema DM20 or SK78 braid, Vectran), or 7x19 stainless steel wire rope / aircraft cable with crimped ball or stop sleeves; wire rope crimp sleeves; ball bearings for both drum shafts; set screws, hollow tensioning screws or lead screws for tensioning; brushless 'quasi-direct drive' motors (e.g. 90 KV outrunners) or stepper motors as the input.
- **rules_of_thumb**: 
  - Capstan equation: tension on the loaded side = tension on the holding side x e^(friction coefficient x total wrap angle in radians); with a friction coefficient of 0.5 one full turn multiplies the grip about 23 times (Wikipedia 'Capstan equation').
  - With a friction coefficient of 0.3, two wraps give 6.6 times the friction of one wrap and three wraps 43 times; with 0.2, three wraps give only 12.3 times (Hackaday 'Cable Mechanism Maths'). About four wraps lets the drum drive the cable directly without slip (same article); 3-5 turns is enough in practice (Aaed Musa).
  - Reduction ratio = effective diameter of big drum / effective diameter of small drum, measured to the rope centreline (Aaed Musa, CARA page); if the big drum is fixed and the small drum orbits it, ratio = D/d + 1 (Forte, arXiv 2507.15693).
  - Drum-to-cable diameter (D/d): synthetic ropes can wrap round pulleys at about 8:1, where Vectran keeps about 85% of its strength; steel cables typically need about 18:1 in the 3 mm size range (Sandia, Mazumdar et al. 2017). For steel wire rope in general, suppliers give minimum D/d from 18 to 42 depending on construction, e.g. 26 for 6x19 and 18 for 6x37, and a bigger D/d greatly lengthens rope life (Mazzella).
  - Wrap height on the small drum = cable thickness x ratio + clearance (Forte used 2 mm), and drum spacing about 1.5 x cable thickness (Forte).
  - Force on the cable anchor = torque-induced tension / e^(friction coefficient x anchor wrap angle) + pre-tension; Sandia measured 0.3 friction between Vectran and aluminium and used at least one full wrap on the small drum and half a wrap on the big one before the anchors (Sandia).
  - Re-tension after a wear-in of roughly 10-50 cycles; slack cables cause shock loads that shorten rope life (Sandia).
  - Typical range of motion is 180-270 degrees for most capstan-driven systems (Forte).

### When to use it

- **everyday_examples**: 
  - Old radio tuning dials: a cord wrapped 1.5-2.5 times around the tuning-knob shaft turns a big drum on the tuning capacitor (ChildhoodRadio)
  - Force-feedback (haptic) arms such as the PHANToM, whose motors drive the arm through pre-tensioned cable reductions (Massie and Salisbury, 1994)
  - Hobby and research robot dogs and robot arms (CARA, Stanley, Forte)
  - A ship's capstan or a sailing winch uses the same friction-grip principle, although it only pulls a rope in rather than driving a drum ⚑ [uncertain] *(⚑ parts need confirming)*
- **when_to_use**: Use a capstan drive when you want a moderate speed reduction (about 8:1 in most maker builds) with no backlash at all, very low friction and a joint that you can push back by hand: legged robots that must absorb landings, robot arms that should feel what they touch, force-feedback controllers, camera or telescope mounts, and 3D-printed actuators where printed gears would be rough, noisy and sloppy (Hackaday). It is cheap and quiet (Sandia measured about 60 dBA), and the drums need no precise teeth, so it suits 3D printing.
- **when_not_to_use**: Don't use it for continuous rotation, such as wheels or spindles, since the output can only turn part of a turn (Aaron Newman; Forte); use a belt drive or gears. Don't use it where the load must stay put when the power is off, because it back-drives freely; use a worm drive or brake. For large reductions in one stage (30:1 and up) use a planetary, cycloidal or strain-wave gearbox, or stack a belt stage in front (Forte). Avoid it in tight spaces if you must use steel cable, because steel needs big drums (Sandia), and in dirty places where grit would abrade the rope ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: Creep: most synthetic ropes slowly stretch under constant tension and go slack, so choose low-creep Dyneema DM20 or Vectran and re-tension (Aaed Musa; Sandia). UV light: unprotected Zylon lost more than 70% of its strength after 144 hours of UV, while silicone-treated Vectran lost about 30% after 600 hours (Sandia), so shade synthetic ropes from sunlight. Lubricant on the anchor wraps reduces grip and moves load onto the anchors (Sandia). Fatigue: steel cable round small drums breaks from repeated bending (Aaed Musa; Stanley). Printed drums share the usual heat and creep limits of the plastic ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: The pre-tensioned cable stores energy and can whip if it or an anchor breaks, so keep hands and faces clear when tensioning and testing ⚑ [uncertain]. The drums form pinch points where the cable runs on. Frayed steel wire strands are sharp. Because the drive back-drives freely, a powered-off arm or leg can drop under its own weight. *(⚑ parts need confirming)*
- **common_failures**: 1) Cable goes slack from creep or wear-in, giving play and poor positioning: use low-creep rope and re-tension (Aaed Musa; Sandia). 2) Steel cable fatigue: on small drums it snapped within hours (Aaed Musa) and broke repeatedly once the Stanley quadruped began jumping (Hackaday.io); use bigger drums or synthetic rope. 3) Anchor (termination) failure: in Sandia's tests every tensile sample failed at the termination, and a lubricated anchor area failed early; add extra wraps before the anchor and keep it dry. 4) Ratio not as designed because the rope diameter was ignored (Aaed Musa). 5) Wraps rubbing or crossing because there is no groove or the drum is too short (Sandia; Forte). 6) Printed small drum wearing or breaking under the highest stress: print it stronger or in a tougher material (Aaed Musa; Stanley). 7) Running past the end of travel pulls on the anchors ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Belt drive: also a flexible loop between pulleys, with unlimited rotation, but a toothed belt has some backlash and a friction belt can slip
  - Spur or planetary gearbox: unlimited rotation and bigger ratios, but has backlash and printed gears are noisy
  - Strain-wave (harmonic) drive and cycloidal drive: high-ratio, near-zero-backlash gearboxes that turn continuously but are complex and harder to back-drive
  - Bowden cable / tendon drive: pulls a joint from a distance through a sleeve instead of wrapping around drums; adds friction at every bend
  - Winch or capstan (nautical): uses the same capstan friction to haul rope in, with no fixed return loop
  - Worm drive: large reduction that usually can't be back-driven; the opposite choice when you want the joint to hold still
  - Stopper knots and cord-end anchors: knots, plugs and clamps that anchor a synthetic rope's ends to the big drum, usually the weakest point of the drive
  - Wire-rope terminations: crimped sleeves and ball or stop fittings for anchoring steel cable ends to the drums

### Pictures, videos and models

- **links**: 
  - [High Precision Speed Reducer Using Rope (Aaed Musa, YouTube)](https://www.youtube.com/watch?v=MwIBTbumd1Q): Video explaining and building a 3D-printed capstan drive and testing it in a five-bar drawing robot and a jumping leg *(licence: link only (standard YouTube licence))*
  - [Capstan Drive (Aaed Musa's project page)](https://www.aaedmusa.com/projects/capstandrive): Photos and explanation of an 8.55:1 printed capstan drive test stand, with rope selection notes *(licence: link only)*
  - [Gears Are Old And Busted, Capstans Are Cool (Hackaday)](https://hackaday.com/2024/06/03/gears-are-old-and-busted-capstans-are-cool/): Article with pictures of the printed capstan drive and why it suits 3D printing *(licence: link only)*
  - [Strong, Accurate, and Low-Cost Robot Manipulator (Forte), arXiv 2507.15693](https://arxiv.org/abs/2507.15693): Fig. 2: exploded view of a 3D-printed capstan drive with a stationary capstan and cable routing through the sheave *(licence: CC BY 4.0)*
  - [CS235: Applied Robot Design, Lecture 7 - Introduction to Cable Transmissions (Stanford, YouTube)](https://www.youtube.com/watch?v=jKZIvseA1Nk): University lecture on cable transmissions and capstan drives for robots *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [aaedmusa/Capstan-Drive (GitHub)](https://github.com/aaedmusa/Capstan-Drive): Code and design notes for Aaed Musa's 852 g, PLA, 120-degree, 8.55:1 capstan drive test stand with helical drums and a lead-screw tensioner (README read via raw.githubusercontent.com) *(licence: ⚑ [uncertain] no licence file found in the repository)*
  - [Capstan gear for delta-robot (holgersindbaek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/470672-capstan-gear-for-delta-robot): Printable capstan drive used on a peg-solitaire-playing delta robot; the author suggests reworking the sizes from his published calculations *(licence: CC BY)* *(⚑ parts need confirming)*
- **diagram_idea**: Top view of a small drum and a large drum side by side with one cable coming off the big drum, wrapping three spiral turns round the small drum and returning to the big drum, with arrows showing the small drum turning eight times for one slow sweep of the big drum, and an inset graph of grip rising steeply with each extra wrap.
- **sources**: 
  - https://en.wikipedia.org/wiki/Capstan_equation
  - https://hackaday.com/2021/01/26/cable-mechanism-maths-designing-against-the-capstan-equation/
  - https://hackaday.com/2024/06/03/gears-are-old-and-busted-capstans-are-cool/
  - https://hackaday.com/2021/08/07/capstan-drive-is-pulling-the-strings-on-this-dynamic-quadruped/
  - https://hackaday.com/2025/07/13/from-leash-to-locomotion-cara-the-robotic-dog/
  - https://hackaday.io/project/176726-stanley-the-capstan-based-quadruped
  - https://www.aaedmusa.com/projects/capstandrive
  - https://www.aaedmusa.com/projects/cara
  - https://raw.githubusercontent.com/aaedmusa/Capstan-Drive/main/README.md
  - https://arxiv.org/abs/2507.15693
  - https://arxiv.org/pdf/2507.15693
  - https://www.osti.gov/servlets/purl/1340266
  - http://ai.stanford.edu/~jks/pubs/1994-Massie-salisbury-asme-sohi.pdf
  - https://www.mazzellacompanies.com/learning-center/why-sheave-design-is-critical-to-wire-rope-service-life/
  - https://aaronnewmanb.substack.com/p/capstan-drives-affordable-precision
  - https://childhoodradio.com/dial-string-mechanisms/
  - https://www.youtube.com/watch?v=MwIBTbumd1Q
  - https://www.youtube.com/watch?v=jKZIvseA1Nk
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: back-and-forth turning
- **motion_out**: back-and-forth turning
- **shaft_layout**: parallel
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: crimper, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…g or ball-end fittings; a lighter or glue to seal synthetic rope ends [uncertain]…"*
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, everyday_examples, make_it_yourself, making_tips_3d_printing, safety_notes, tools_needed, when_not_to_use

## 102 Bowden cable (push-pull cable)

*gear trains, gearboxes & transmissions.* An inner wire sliding inside a flexible outer sleeve that carries a pull or push around bends, as in bike brakes and 3D-printer extruders

### What it is

- **plain_name**: A wire that slides inside a bendy tube, so pulling (or pushing) the wire at one end moves something at the other end, even around corners, like a bike brake cable
- **term**: Bowden cable (cable-and-conduit or cable-and-sheath transmission); push-pull control cable when it can also push
- **aliases**: 
  - control cable / mechanical control cable
  - bike brake cable, gear (shifter or derailleur) cable
  - throttle cable, clutch cable, choke cable, handbrake cable
  - push-pull cable, push-pull control (the stiffer kind that pushes as well as pulls)
  - cable and housing, cable and outer, cable and conduit, cable and sheath
  - inner wire and outer casing (bike trade terms)
  - Bowden tube / PTFE tube (3D printers, where the filament itself is the inner 'wire')
  - Bowden extruder (3D printers)
  - tendon sheath drive (robotics)
- **family**: gear trains, gearboxes & transmissions
- **one_liner**: An inner wire sliding inside a flexible outer sleeve that is fixed at both ends carries a pull (and, in push-pull versions, a push) from a lever or motor to a distant part along any curving route, as in bike brakes, car throttles and 3D-printer Bowden extruders.
- **complexity**: A few parts: the inner wire (stranded steel for pull, often solid for push), the outer sleeve (housing or conduit) with a low-friction liner, end caps (ferrules) on the sleeve, fixed stops at each end that the sleeve pushes against, a nipple or clamp fixing the wire at each end, and often a barrel adjuster to take up slack. Pull-only versions also need a return spring at the far end.
- **how_it_works**: Both ends of the outer sleeve are held in fixed stops. When you pull the inner wire at one end, the sleeve is squeezed along its length while the wire slides inside it, so the far end of the wire moves by the same amount, whichever way the sleeve bends between. Because the sleeve carries the reaction force, the parts between the two ends can move freely, for example a handlebar that steers. A plain Bowden cable can only pull, so a spring pulls it back (a bike brake caliper opens by spring force); a push-pull cable has a stiffer core held so snugly by the sleeve that it cannot buckle, so it can push too. Every bend adds friction that grows exponentially with the total bend angle, which is why cables are routed as straight as possible.

### Finder attributes

- **job**: 
  - change the kind of motion: carries a straight pull or push along a bent route to a distant place, changing where and in which direction the motion arrives rather than its type
  - lock, and release by hand: used as a remote release for latches and locks, such as car latch releases (Wikipedia)
  - slow it, stop it or keep its speed steady: the link that works bike and car handbrakes and lawn-mower stop controls (Wikipedia)
- **motion**: slide: the inner wire slides a short distance inside the sleeve (a few millimetres, e.g. 2.9 or 4.5 mm per gear shift on bikes, up to a few centimetres ⚑ [uncertain]), while the whole cable can flex to follow moving parts *(⚑ parts need confirming)*
- **degrees_of_freedom**: 1: the inner wire can only slide along the sleeve; the sleeve's own bending is not a controlled motion
- **special_behaviour**: 
  - tensioning (takes up slack and holds): a barrel adjuster, a hollow screw at the sleeve's end stop, lengthens the sleeve to take up slack in the wire; turning it out tightens the cable (Wikipedia)
  - none of the other listed behaviours: it simply carries a push or pull
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it transmits a pull or push
  - shape (the parts interlock; form-fit): the wire's end nipple sits in a slot in the lever, and the sleeve's ferrules seat in the cable stops
  - friction or clamping (force-fit): the far end of the wire is usually clamped under a pinch bolt
- **input_output**: Straight pull (or push) -> straight pull (or push) at a distant place, travel ratio 1:1 apart from lag and stretch. Efficiency for a 2 m push-pull cable: about 95% when straight, falling to about 85% with 180 degrees of total bending and about 40% with 720 degrees (Frontiers, Grosu et al. 2018); in a gait-orthosis test stand the push-pull cables were 64-76% efficient. Force out = force in / e^(friction coefficient x total bend angle) (Frontiers; Hackaday). No shafts: the ends can be at any angle and position. Back-drivable: yes; pulling on the far end pulls the lever. A pull-only Bowden cable only transmits pull, so the far end needs a return spring (Hackaday's bike-brake example) or a second cable.
- **power**: passive (no power needed); it can be worked by hand or by a motor or servo at one end. If a motor-driven cable loses power, it stays where it is unless a return spring pulls it back
- **removability**: removable: the wire is unclamped at the far end and slid out; the sleeve lifts out of its stops
- **reuse_cycles**: many times for the sleeve and end stops; a few times for the inner wire, because a cut, frayed or end-capped wire end is hard to thread back through the sleeve and is usually replaced
- **tools_needed**: A proper cable and housing cutter (dedicated shear-type cutters for compressionless housing); a pick or awl to reopen the squashed liner after cutting; a hex key or spanner for the pinch bolt; pliers to crimp end caps (or solder to stop fraying) (Park Tool; Sheldon Brown). For 3D-printer PTFE tubes: a square-cut tube cutter ⚑ [uncertain]; push-in fittings need no tools. *(⚑ parts need confirming)*
- **seal**: none: typical bike and DIY cables are open at the ends, so water can get in and even freeze in cold weather (Wikipedia); industrial push-pull controls add end seals against dirt and corrosion, which makes them dust-resistant (Frontiers, Grosu et al. 2018)
- **load**: Light to medium: strong in pull along the wire (bike brake wires are 1.5-1.6 mm steel), weak in push unless it is a push-pull cable with a stiff core and snug sleeve. The sleeve must be held at both ends because it carries the full reaction force in compression. Loads that bend the cable sharply or twist it do not transmit well, and friction rises quickly with every bend.
- **adjustable**: Yes: slack is taken up with a barrel adjuster at a cable stop or lever, or by re-clamping the wire at the pinch bolt (Wikipedia)
- **play_and_precision**: Noticeable: the sleeve compresses slightly and settles in its end caps, and there is a lag in push-pull systems because force must first build up to overcome friction and take up backlash before the output moves (Stanford CS235 notes); friction also causes stick-slip (Frontiers). Indexed bike shifting works only with compressionless (lengthwise-wire) housing, which does not change length as it bends (Sheldon Brown). Misalignment is easily tolerated: that is the point of the flexible sleeve, but tight bends add friction and wear.
- **access_needed**: both sides: each end of the sleeve has to be fixed in a stop, and the wire fixed at both ends, so both ends must be reachable, though nothing in between needs to be
- **materials**: Inner wire: stranded steel (stainless or galvanised) for pull; solid wire for push (lawn mowers, chokes, aircraft push-pull controls) (Wikipedia); nitinol has been suggested for its super-elasticity (Stanford CS235 notes); synthetic ropes are used in robotic Bowden systems (Sandia). Sleeve: a close-wound steel helix (brake housing), lengthwise steel wires (compressionless shift housing), or a braided mix, with a plastic liner and plastic outer jacket (Wikipedia; Park Tool). DIY: PTFE tube with braided stainless wire (e.g. 2 mm PTFE tube with 0.8 mm cable, or 4 mm PTFE tube with a bike brake wire). In 3D printers the sleeve is a PTFE tube, about 1.9-2.0 mm bore for 1.75 mm filament (Capricorn).
- **maker_difficulty**: easy: buy bike brake or gear cables and housing (or PTFE tube and braided wire), and print levers, cable stops and anchors; the only trick is fixing both ends of the sleeve firmly and keeping bends gentle

### Making it

- **processes**: off-the-shelf part (bike cables and housing, push-pull control cables, PTFE tube, push-in fittings), 3D print (FDM): levers, cable stops, sleeve anchors, servo mounts, wire clamps
- **print_in_place**: no: the cable is bought and threaded through printed or bought end fittings after printing
- **making_tips_3d_printing**: 1) Print firm end stops for the sleeve: the sleeve pushes hard on its stop every time the wire is pulled, so give the stop a pocket that the ferrule seats into and enough wall around it; Park Tool notes ferrules stop the housing deforming or digging into stops, which matters even more in plastic. 2) ⚑ [uncertain] Orient printed stops and levers so the pulling load squeezes the layers together rather than peeling them apart, and use generous fillets where the lever pivot and cable slot meet. 3) Clamp PTFE-tube sleeves with a screw, washer and nut (johnbbb's servo mount uses an M3 screw, washer and nut in a clamping lid) or thread in a PC4-M6 push-in fitting, which has a 4 mm opening and an M6 x 1.0 thread (Capricorn). 4) Attach the wire to a servo horn with an RC pushrod connector (johnbbb) or a pinch screw; route it so the wire leaves the stop in a straight line. 5) Keep the route short and the bends wide: friction grows exponentially with the total bend angle, so a 2 m push-pull cable drops from about 95% to 40% efficiency between straight and 720 degrees of total bending (Frontiers); use free-turning pulleys instead of extra sleeve bends where you can, because pulleys add no capstan friction (Hackaday). 6) Make any wheel or pulley the wire wraps around large; Sheldon Brown says a pulley big enough not to fatigue bike cable is at least a couple of inches across. 7) Size small DIY cables to match: Tioh uses 2 mm PTFE tube with a 1 mm bore and 0.8 mm braided stainless cable for puppet eyelids and ears. 8) For pull-only cables, print in a return spring or add one at the far end. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Bicycle brake cable (inner wire about 1.5-1.6 mm) and 5 mm brake housing (spiral wound); shift (derailleur) cable (about 1.1-1.3 mm) and 4 or 5 mm compressionless shift housing (Bike Gremlin; Park Tool); ferrules (end caps) for housing; crimp end caps for wire ends; barrel adjusters; cable stops; pinch-bolt cable anchors; industrial push-pull control cables (solid core, sealed ends, threaded rod ends); throttle and choke cables for small engines; PTFE Bowden tube (4 mm outside, 1.9-2.0 mm bore for 1.75 mm filament; 6.35 mm outside, 3.2 mm bore for 2.85 mm filament) and PC4-M6 or PC4-M10 push-in (pneumatic) fittings (Capricorn); RC pushrod connectors and braided stainless 'nylon-coated' cable for models.
- **rules_of_thumb**: 
  - Friction: force out = force in / e^(friction coefficient x total bend angle), where the total bend angle adds up every bend along the sleeve (Frontiers, Grosu et al. 2018; Hackaday 'Cable Mechanism Maths'); keep push-pull cables as straight as possible, as manufacturers advise (Frontiers).
  - Measured push-pull cable efficiency (2 m): about 95% straight, about 85% at 180 degrees total bend, about 40% at 720 degrees (Frontiers, Grosu et al. 2018).
  - Make unavoidable bends as wide as possible, and housings as short as they can be without tight bends (Sheldon Brown 'Cable installation'); housing that is too short will kink and bind (Park Tool).
  - Use compressionless (lengthwise-wire) housing only for shifting; it can burst under brake loads. Use spiral-wound brake housing for brakes (Park Tool; Sheldon Brown; Bike Gremlin).
  - Bike sizes: shift wire about 1.1-1.3 mm, brake wire about 1.5-1.6 mm; shift housing 4 or 5 mm, brake housing 5 mm outside diameter (Bike Gremlin).
  - Sharp bends make the wire fray; on folding bikes cables can be bent to a radius as small as 4 cm at the hinge, a known fatigue spot (Wikipedia 'Bowden cable').
  - 3D printers: for 1.75 mm filament use PTFE tube with a 1.9 mm (plus or minus 0.05 mm) or 2.0 mm bore (Capricorn); a Bowden extruder needs longer retraction than a direct drive, e.g. 3.2 mm by default on the Prusa MINI against at most 2 mm on the direct-drive MK3/MK4 (Prusa Knowledge Base).

### When to use it

- **everyday_examples**: 
  - Bicycle brake and gear cables
  - Motorcycle clutch and throttle cables, car handbrake (emergency brake) and latch-release cables
  - Lawn-mower throttle and stop (dead man's) controls
  - 3D printers with a Bowden extruder, where the motor pushes filament through a PTFE tube to the moving print head (Prusa MINI)
- **when_to_use**: Use a Bowden cable when you need to work something at a distance or around moving parts without linkages: a hand lever working a brake or latch, a servo in a robot's body moving a finger, eyelid or ear in an animatronic head, a remote release, or taking the weight of a motor off a moving part (as a Bowden extruder takes the extruder motor off a 3D printer's print head). It is cheap, light, easy to route through tight spaces, and lets the motor sit away from the moving part, which is why it is used in wearable robots and exoskeletons (Frontiers).
- **when_not_to_use**: Avoid it for precise positioning or fast, stiff control, because friction, lag and backlash make the output lag the input (Stanford CS235 notes; Frontiers); use a rigid linkage, pushrod, belt or direct-drive motor. Avoid long routes with many bends, where most of the force is lost to friction; use pulleys or a shorter path. For continuous rotation at a distance use a flexible shaft instead; for strong pushing use a rigid pushrod or a proper push-pull cable. On 3D printers, prefer a direct-drive extruder for very flexible filaments such as TPU ⚑ [uncertain]. Where a failed cable would be dangerous, consider hydraulic lines. *(⚑ parts need confirming)*
- **environment_limits**: Water and cold: water in the sleeve can freeze and stop the cable in cold climates, and unlined housings need light oil (Wikipedia). Rust: in wet use a little oil helps as rust prevention (Sheldon Brown). Heat: PTFE tubing starts giving off fumes as it gets hot; the tube's maker lists 170-200 C as completely safe, off-gassing becoming a concern around 225-250 C, about 270 C as the practical maximum for sustained printing, and deformation above about 340 C (Capricorn safety page). Wear: fraying at sharp bends and at barrel adjusters (Wikipedia).
- **safety_notes**: Never use compressionless shift housing for brakes: it can burst and cause a sudden, complete loss of braking (Sheldon Brown; Park Tool; Bike Gremlin). A frayed wire's loose strands can prick fingers (Sheldon Brown). PTFE Bowden tubes and liners in hot ends give off harmful fumes at high temperatures, dangerous to pet birds from about 275 C (and there is evidence of harm even around 202 C), so ventilate and keep birds away (Capricorn safety page). Levers and cable anchors can pinch fingers.
- **common_failures**: 1) High friction or binding from too many or too tight bends, or housing cut too short so it kinks; fix by rerouting with wide, gentle curves (Park Tool; Sheldon Brown). 2) A crushed liner or collapsed end coil after cutting the housing; reopen it with an awl (Park Tool; Sheldon Brown). 3) Frayed or broken wire at sharp bends, barrel adjusters and folding hinges (Wikipedia). 4) Spongy feel and lost travel as the housing compresses and settles into its ferrules; use ferrules at every end and re-adjust after bedding in (Wikipedia; Sheldon Brown). 5) Sluggish or frozen cable from water and rust (Wikipedia). 6) Housing digging into a printed stop and cracking it; seat a ferrule in a strong pocket (Park Tool). 7) Printers: a gap between the tube end and the nozzle or a tube slipping in its fitting causes stringing, blobs or clogs, and debris inside the tube blocks the filament, so inspect it (Prusa Knowledge Base) ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Push-pull control cable: the heavy-duty version with a solid, armoured core that pushes as well as pulls
  - Flexible shaft: a similar sheathed cable that carries rotation instead of a straight pull (covered with push-pull cables in Stanford CS235 lecture 8)
  - Rigid pushrod or linkage: stiffer and more precise, but can't go round corners
  - Capstan cable drive and tendon drives over pulleys: open cables running over free-turning pulleys, with much less friction than a sleeve
  - Hydraulic line (hydraulic brakes): carries force through fluid, with less friction over long routes
  - Belt drive: carries continuous rotation around pulleys rather than a short pull

### Pictures, videos and models

- **links**: 
  - [Bowden.jpg (Wikimedia Commons, by Baran Ivo)](https://commons.wikimedia.org/wiki/File:Bowden.jpg): Cut-away photo of a Bowden cable: plastic outer coating, steel structure, inner low-friction sleeve and inner cable *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [Bowden cable with barrel adjuster.jpg (Wikimedia Commons, by AndrewDressel)](https://commons.wikimedia.org/wiki/File:Bowden_cable_with_barrel_adjuster.jpg): Photo of a bicycle Bowden cable with a barrel adjuster *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [Evaluation and Analysis of Push-Pull Cable Actuation System Used for Powered Orthoses (Grosu et al., Frontiers in Robotics and AI, 2018)](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2018.00105/full): Figure 1: structure of a push-pull control cable; Figure 2: how bend angles add up; Figure 3: efficiency against bend angle *(licence: CC BY)*
  - [Cable Mechanism Maths: Designing Against The Capstan Equation (Hackaday, Sonya Vasquez)](https://hackaday.com/2021/01/26/cable-mechanism-maths-designing-against-the-capstan-equation/): Animations and diagrams of a cable running through bent conduits and how friction adds up *(licence: link only)*
  - [CS235: Applied Robot Design, Lecture 8 - Push-Pull Cable/Sheath, Universal Joints, and Flexible Shafts (Stanford, YouTube)](https://www.youtube.com/watch?v=UPgnfYLZzqE): University lecture demonstrating push-pull cables and sheaths in robots *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Bowden Cable Servo Control for Robotics (johnbbb, Printables)](https://www.printables.com/model/285648-bowden-cable-servo-control-for-robotics (URL from Printables API, page not opened)): Printed enclosure for a standard servo that anchors a 4 mm PTFE tube and pulls a bike brake cable fixed to the servo horn, for animatronics and robotics *(licence: CC BY-NC)*
  - [Bowden cable controls (Tioh, Printables)](https://www.printables.com/model/328383-bowden-cable-controls (URL from Printables API, page not opened)): Hand controller parts for home-made Bowden cables (2 mm PTFE tube, 1 mm bore, with 0.8 mm braided stainless cable) that work eyelids, eyebrows, ears and eyes on 3D-printed puppet heads *(licence: CC BY-NC-SA)*
  - [Animatronic lever for Bowden cable (Tioh, Printables)](https://www.printables.com/model/95964-animatronic-lever-for-bowden-cable (URL from Printables API, page not opened)): Printed hand levers built like a simple bicycle brake lever, for puppet animatronics *(licence: CC BY-NC)*
- **diagram_idea**: A cut-away of a curved cable between a hand lever and a brake caliper, with arrows showing the wire being pulled one way while the sleeve pushes back against its two end stops, and a return spring opening the caliper; beside it a graph of force getting through falling as the total bend angle increases.
- **sources**: 
  - https://en.wikipedia.org/wiki/Bowden_cable
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2018.00105/full
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC7805680/
  - https://hackaday.com/2021/01/26/cable-mechanism-maths-designing-against-the-capstan-equation/
  - https://www.rahulsrajan.com/applied-robotic-stanford-cs235-1c45e3
  - https://www.youtube.com/watch?v=UPgnfYLZzqE
  - https://www.sheldonbrown.com/cables.html
  - https://sheldonbrown.com/cable-installation.html
  - https://www.parktool.com/en-us/blog/repair-help/cutting-and-sizing-cable-housing
  - https://bike.bikegremlin.com/8548/cable-housing-standards/
  - https://www.osti.gov/servlets/purl/1340266
  - https://help.prusa3d.com/glossary/extruder-ptfe-tube-bowden-tube_141953
  - https://help.prusa3d.com/article/stringing-and-oozing_1805
  - https://www.captubes.com/choose.html
  - https://www.captubes.com/fittings.html
  - https://www.captubes.com/safety.html
  - https://commons.wikimedia.org/wiki/File:Bowden.jpg
  - https://commons.wikimedia.org/wiki/File:Bowden_cable_with_barrel_adjuster.jpg
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
- **tools**: crimper, sewing or leather tools, hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…; Sheldon Brown). For 3D-printer PTFE tubes: a square-cut tube cutter [uncertain]; push-in fittings need no to…"*
- **load_max**: medium
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, making_tips_3d_printing, motion, tools_needed, when_not_to_use

## 201 Anti-backlash gear (split scissor gear)

*gear trains, gearboxes & transmissions.* A gear made of two halves sprung against each other so its teeth fill the gaps of the mating gear, removing play

### What it is

- **plain_name**: A gear made of two thin gears stacked side by side and twisted against each other by a spring, so their teeth grip both sides of the other gear's teeth and there is no wobble (play) when the drive changes direction
- **term**: Anti-backlash gear (spring-loaded split gear, scissor gear)
- **aliases**: 
  - scissor gear / scissors gear (KHK Gear Technical Reference; engine trade)
  - split gear / split anti-backlash gear (Wikipedia 'Backlash (engineering)')
  - spring-loaded split gear (Machine Design)
  - anti-backlash spur gear / no-backlash gear / zero-backlash gear (KG Stock Gears catalogue)
  - camshaft scissor gear / preload gear (car-engine trade; Southside Cylinder Heads)
  - anti-lash gear (wording used in some patent titles)
  - control-backlash gear (a non-sprung version whose two halves are turned to close the gap and then bolted; KG ASG type)
  - circular-arc-spring type and coil-spring type (the two spring layouts in KG's BS and BW types)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: locating & alignment, compliant mechanisms & flexures
- **one_liner**: A gear split into two side-by-side halves, one fixed to the shaft and one free to turn a little on it, pulled round against each other by springs so that together they fill the tooth gaps of the mating gear and remove the play (backlash) that otherwise shows up every time the drive reverses.
- **complexity**: A small assembly that acts as one unit: a main gear half fixed to the shaft (usually with a long hub), a second 'free' gear half of the same tooth shape that can turn on that hub, one or more springs between the halves (compression springs in slots, tension springs hooked between pins, a curved 'circular-arc' spring or a torsion spring), and a snap ring (circlip) that keeps the free half on the hub. Engine versions also have a hole for a service bolt or pin that holds the spring wound up while the gear is fitted (Wikipedia 'Backlash (engineering)'; BrightHub Engineering; KG Stock Gears; Southside Cylinder Heads). The mating gear is an ordinary gear (KG).
- **how_it_works**: Ordinary gears are made with a small gap between meshing teeth so they don't jam and have room for oil, and that gap (backlash) lets the output lag or rattle whenever the drive reverses (Wikipedia 'Backlash (engineering)'; KG Stock Gears). An anti-backlash gear is split into two halves, each half the thickness; one half is fixed to the shaft and the other can turn on it but is sprung round relative to the first (Wikipedia). Once meshed, the teeth of the fixed half press on one side of each mating tooth and the teeth of the free half press on the other side, pinching it like the blades of scissors, so the gap is filled (KG Stock Gears; KHK). As long as the turning force (torque) stays below the spring's torque the springs don't give and there is no play in either direction; a larger or sudden load pushes the spring back and the play returns (Wikipedia; KG 'Precaution of usage'; patent EP3230626B1).

### Finder attributes

- **job**: 
  - change speed or turning force: it is still a gear, giving the same speed ratio as an ordinary gear pair
  - line parts up exactly: it removes the lost motion (backlash) so the output returns to the same position when the drive reverses, as needed for a radio tuning dial (Wikipedia 'Backlash (engineering)')
- **motion**: rotate: continuous rotation in both directions, like any gear pair; inside the gear the free half only moves a fraction of a tooth relative to the fixed half
- **degrees_of_freedom**: 1: the output gear turns in step with the input. Inside the anti-backlash gear the free half also has a small, spring-loaded twist relative to the fixed half (part of one tooth spacing in use), which is what takes up the play
- **special_behaviour**: 
  - tensioning (takes up slack and holds): the springs keep the two halves pressed against opposite sides of the mating teeth, taking up the play; Machine Design notes that spring designs hold the gears at a constant (zero) backlash throughout their service life, unlike set-once adjustments that loosen as teeth wear
  - none of the other listed behaviours: it doesn't slip, lock or index; above the spring torque it simply behaves like an ordinary gear with play (Wikipedia 'Backlash (engineering)')
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): springs twist the free half so its teeth stay pressed against the mating teeth
  - shape (the parts interlock; form-fit): the torque itself is passed on by meshing teeth
  - not a holding joint (it moves or passes on motion): it is a gear that passes on rotation
- **input_output**: Continuous rotation -> continuous rotation at the tooth-count ratio of the pair, exactly as for an ordinary spur gear pair. Shafts: usually parallel (spur gears); KHK says splitting a gear into two adjustable parts works for most gear types, but the sprung zero-backlash version is not suitable for worm or screw gears, whose teeth slide a lot and can lose their lubricant film and wear (KHK Gear Technical Reference, section 6.5). Efficiency: probably a little lower than an ordinary pair because the spring preload keeps both tooth flanks rubbing ⚑ [uncertain: no efficiency figure found]. Back-drivable: yes, like any spur gear pair. Play: none while the reversing torque stays below the spring torque; KG says its gears cannot completely remove backlash but greatly minimise it. *(⚑ parts need confirming)*
- **power**: passive (no power needed): the preload comes from springs
- **removability**: removable: the gear fits on its shaft with a set screw or key like any gear, and the two halves are held together by a snap ring and can be separated (KG 'Precaution of usage'); the spring preload must be reset each time it is refitted (Southside Cylinder Heads)
- **reuse_cycles**: many times: it can be removed and refitted repeatedly as long as the preload is reset each time and the springs are not overstretched
- **tools_needed**: Hex key or screwdriver for the set screw; snap-ring (circlip) pliers to take the halves apart; pliers or grips to twist the free half against its spring; and a pin or short bolt to hold the halves wound up while meshing. Southside Cylinder Heads says a 6 x 1 mm bolt 15-20 mm long, finger tight, fits many camshaft scissor gears
- **seal**: none: it is an open gear. Keep dust out from between the two halves (KG 'Precaution of usage') and keep the teeth lubricated, because both tooth flanks are always in contact (KHK)
- **load**: Light. The no-play effect only lasts up to the spring torque: KG's module 0.5-1 catalogue gears keep zero play up to roughly 7-161 N·cm (about 0.07-1.6 N·m), depending on size, material and how many teeth the halves are wound (KG catalogue KG3001, pp. 53-55). Machine Design says split gearing is 'generally used in light-load, low-speed applications'. Each half is only half the width of a normal gear (Wikipedia), so teeth are weaker than a full-width gear of the same size ⚑ [uncertain]. Loads above the spring torque still get through, but with play in that direction (Wikipedia; EP3230626B1). *(⚑ parts need confirming)*
- **adjustable**: Yes. On catalogue gears the preload (and so the torque up to which there is no play) is set at assembly by turning the free half until its teeth line up with the fixed half and then a chosen number of extra teeth (2 or more) before meshing (KG catalogue: 'shifting pitch n'). Non-sprung 'control backlash' versions are adjusted by loosening bolts, turning the halves to close the gap against the mating gear and tightening the bolts again (KG ASG type; Machine Design).
- **play_and_precision**: None (zero backlash) while the torque stays below the spring torque; KG says its gears greatly minimise but cannot completely remove backlash. Reversal repeatability is good because there is no lost motion (Wikipedia: used where precise movements are needed both forwards and backwards). It tolerates small tooth errors and interference because the springs let the halves give (KG: it absorbs interference 'by stretching the spring mechanism'). It only removes the play at its own mesh: in a gear train backlash adds up at every stage (Wikipedia). How much centre-distance or angle misalignment it tolerates was not found ⚑ [uncertain]. *(⚑ parts need confirming)*
- **access_needed**: end of a tube or shaft: the gear slides onto the end of its shaft; you also need room to wind and pin the two halves before meshing
- **materials**: Catalogue gears: carbon steel (C45 / S45C, nitrided), chromium-molybdenum steel, aluminium alloy (AlMg5) and stainless steel (with a PTFE (Teflon) coating to stop scuffing), with steel springs (KG Stock Gears). Engine scissor gears are steel ⚑ [uncertain]. Maker versions: 3D-printed halves in nylon, PLA, ABS or PETG with a metal spring, rubber band or printed flexing spokes; Instructables ranks printed gear materials nylon > PLA > ABS > PETG. *(⚑ parts need confirming)*
- **maker_difficulty**: moderate: printing two matching gear halves is easy, but making a hub for the free half, fitting springs and winding the halves the right number of teeth before meshing takes care; for precision instruments buy a catalogue anti-backlash gear

### Making it

- **processes**: 
  - off-the-shelf part: catalogue anti-backlash (scissor) spur gears, e.g. KG's module 0.5-2 range
  - 3D print (FDM): two printed gear halves plus a metal spring or rubber band, or a one-piece design with flexing spokes (Thingiverse 'Anti-Backlash Gear')
  - 3D print (resin): fine-toothed halves for small instruments ⚑ [uncertain]
  - CNC: machined halves with spring slots, as in industrial and engine gears *(⚑ parts need confirming)*
- **print_in_place**: partly: the two halves are usually printed separately (or joined by printed flexing spokes that act as the spring), and must be wound against each other and pinned before meshing; most designs add a metal spring, rubber band or retaining clip (BrightHub; KG; Thingiverse 'Anti-Backlash Gear' description)
- **making_tips_3d_printing**: 1) Generate both halves with the same gear tool so the teeth match exactly; BOSL2's gears.scad has a backlash setting that narrows the teeth, which is the gap the scissor action will take up. Only one gear of the pair needs to be split; the mating gear is ordinary (KG). 2) Split the gear into two halves each half the face width (Wikipedia). Give the fixed half a long hub that the free half turns on, and a snap ring, circlip or printed clip so the free half can't slide off (BrightHub; KG). 3) Springs: two compression springs in slots between tabs (BrightHub's layout), tension springs hooked between pins (KG BW type), a curved spring (KG BS type) or rubber bands. The spring torque must be larger than the torque the gear has to pass on; below that there is no play (KG 'Precaution of usage'; BrightHub). 4) Wind before meshing: turn the free half until its teeth line up with the fixed half, then at least 2 teeth further (KG catalogue); hold it with a pin through matching holes in both halves, mesh the gears, then pull the pin out (the service-bolt trick from Southside Cylinder Heads). Design those pin holes in. 5) Clearance: printed gears are usually drawn with about 0.4 mm clearance between meshing teeth to stop them locking (Instructables 'A Practical Guide to FDM 3D Printing Gears'); a scissor gear lets you keep that generous clearance and still have no play. 6) Don't overdo the spring: with both flanks always in contact the teeth must stay lubricated or they wear (KHK), and a stronger spring than needed only adds friction ⚑ [uncertain]. Grease the teeth; Instructables suggests white lithium, PTFE or silicone grease. 7) Strength: at least 3 perimeters with rectilinear infill, and a face width of 3-5 times the circular pitch (Instructables); because each half is only half as wide, make the whole gear thicker than a normal printed gear ⚑ [uncertain]. 8) Materials: nylon > PLA > ABS > PETG for printed gears; PLA softens at a low temperature, ABS is better above about 75 °C (Instructables). 9) One-piece printed designs that use flexing spokes as the spring (Thingiverse 'Anti-Backlash Gear' by pauljs75) are simpler, but plastic springs creep and lose preload over time, especially in PLA or when warm ⚑ [uncertain]. 10) Sudden jerks bigger than the spring force push the halves apart (Carlyle, 3dp-ideas group), so size the spring for the jerks your printer or robot makes, not just the steady load. 11) Backlash in a train adds up at every mesh (Wikipedia), so put the anti-backlash gear at the mesh nearest the output, where play matters most ⚑ [uncertain: advice inferred]. *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Anti-backlash spur gear (also sold as scissor gear, split gear or no-backlash gear; e.g. KG 'Anti Backlash Spur Gears' types NS, NSG, NSU with springs and ASG 'control backlash' with bolts); anti-backlash bevel, mitre and worm gears from precision gear makers ⚑ [uncertain: vendor page could not be opened]; small compression springs, extension springs and torsion springs; external retaining rings (snap rings, circlips); set screws and keyed hubs; anti-backlash nut (the lead-screw equivalent); ordinary spur gears as the mating gear. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - The spring torque must be larger than the torque the gear transmits; below it there is no play, above it the play comes back (KG 'Precaution of usage for Anti backlash spur gears'; Wikipedia 'Backlash (engineering)'; BrightHub: the springs should not compress under the normal operating torque).
  - Set the preload by lining up the teeth of both halves and then winding the free half a further 2 or more teeth before meshing; more teeth give more preload (KG catalogue KG3001, p. 51).
  - Catalogue example: a module 0.5, 60-tooth stainless anti-backlash gear keeps zero play up to 9.71 N·cm with a 2-tooth wind, while a module 1, 100-tooth steel one reaches 145.78 N·cm with a 5-tooth wind (KG catalogue KG3001, pp. 53-54).
  - Use spring-loaded split gears for light-load, low-speed drives; for heavy reversing loads use fixed adjustments (shorter centre distance, bolted split gears, tapered gears) that are re-adjusted as the teeth wear (Machine Design, 'Methods to Minimize Gear Backlash').
  - Don't use the sprung zero-backlash principle on worm or screw gears: their teeth slide a lot, the lubricant can be squeezed out and they wear (KHK Gear Technical Reference, section 6.5).
  - Ordinary cut gears are given an average backlash of about 0.04 x module (0.03-0.05 x module), e.g. about 0.04 mm for module 1 (Wikipedia 'Backlash (engineering)'); printed gears are usually drawn with much more, about 0.4 mm clearance between teeth (Instructables).
  - Backlash in a gear train adds up at every mesh (Wikipedia), so one anti-backlash gear only removes the play at its own mesh.
  - Keep dust out from between the two halves, and don't machine an anti-backlash gear after assembly: deformation destroys the anti-backlash function (KG 'Precaution of usage').
  - Engine scissor gears: hold the preload with a service bolt (often 6 x 1 mm, 15-20 mm long, finger tight) while fitting, and remove it before turning the engine over (Southside Cylinder Heads).

### When to use it

- **everyday_examples**: 
  - Analogue radio tuning dials and tuning capacitors, which must turn precisely back and forth (Wikipedia 'Backlash (engineering)'; Aaron Dahlen's tuning-capacitor video)
  - Camshaft gears in many twin-cam car engines, where a scissor gear stops a ticking rattle (Southside Cylinder Heads)
  - Diesel and other engine gear trains driving the fuel-injection pump or accessories, to stop gear rattle (patent EP3230626B1)
- **when_to_use**: When a gear drive must reverse without lost motion and the loads are light: dials and pointers, instrument and positioning drives, small robot joints and machine axes with a gear stage between motor and output, and places where rattle from reversing or pulsing loads is a problem (engine gear trains). It is also a good fix for 3D-printed gears, whose generous tooth clearance otherwise adds noticeable play.
- **when_not_to_use**: Heavy or shock loads, which overpower the springs: use fixed-adjusted gears, a strain-wave (harmonic) drive, a cycloidal drive or a preloaded ball screw instead (Machine Design). Worm and screw gears: use a duplex-lead worm adjusted by shims instead (KHK). If the load always pushes the same way, a weight, torsion spring or small motor loading the last gear preloads the whole train more simply (Machine Design, 'gear train preloading'). Where a little play doesn't matter, an ordinary gear is simpler and a little more efficient. For a stepper-driven screw axis, software backlash compensation or always approaching a position from the same direction may be enough (Wikipedia).
- **environment_limits**: Metal gears and springs cope with normal workshop and engine temperatures; printed halves and printed flexing springs soften and creep with heat: PLA has a low heat distortion temperature and ABS is the better choice above about 75 °C (Instructables). Spring preload may relax over time, especially plastic flexure springs ⚑ [uncertain]. Vibration and torque pulses that exceed the spring force bring the rattle back (EP3230626B1). Dirt between the halves stops the free half moving (KG). Needs lubrication, because both flanks are always in contact (KHK). *(⚑ parts need confirming)*
- **safety_notes**: Pinch points between meshing gears. A wound-up free half stores spring energy and can snap back when the holding pin is pulled or the gear is lifted off its mate, so keep fingers clear ⚑ [uncertain]. On engines, remove the service bolt before turning the engine over, or it will cause significant damage (Southside Cylinder Heads). *(⚑ parts need confirming)*
- **common_failures**: 1) Loads or sudden jerks larger than the spring torque push the free half back and the play returns ('over-travel' on impulse loads: Carlyle, 3dp-ideas group; rattle under impulse loads: EP3230626B1); wind more teeth or use stiffer springs (KG). 2) Preload lost during servicing: camshafts refitted without the service bolt lose preload and tick like a noisy tappet (Southside Cylinder Heads). 3) Too much preload or too little lubricant: both flanks rub all the time, so lubricant is squeezed out and teeth wear (KHK); extra friction also wastes motor torque ⚑ [uncertain]. 4) Free half sticking on its hub because of dust or burrs (KG). 5) Service bolt or pin left in, locking the halves or damaging the engine (Southside Cylinder Heads). 6) Springs relaxing or breaking over time, and printed flexure springs creeping ⚑ [uncertain]. 7) Printed teeth too rough, so the preloaded mesh binds; clean teeth with a blade before use (Instructables). *(⚑ parts need confirming)*
- **related**: 
  - Lead screw and nut (incl. anti-backlash nut): the same idea for a screw thread, two nut halves pushed apart to press on opposite thread flanks (Wikipedia 'Backlash (engineering)')
  - Spur gear train: the plain version, with backlash built in so it doesn't jam
  - Gear train preloading: a torsion spring, weight or auxiliary motor on the last gear keeps all teeth loaded on one side; limited rotation unless a motor is used (Machine Design)
  - Dual-path gear train: two identical gear trains wound against each other, so no special gears are needed but twice as many gears are (Machine Design)
  - Strain-wave gear (harmonic drive): reduces backlash to 1 arc-minute or less, 10-15 arc-minutes more common (Machine Design)
  - Cycloidal drive: preloaded rollers or pins; a printed version splits the housing and twists the halves against each other with a string, the same scissor idea (Hackaday.io 'Anti-Backlash 3D Printed Cycloidal BLDC Actuator')
  - Compound planetary gearbox: printed ring gears made springy in the radial direction take out backlash (LoboCNC, Printables)
  - Capstan cable drive: no teeth at all, so no backlash
  - Herringbone and helical gears: helical gears can be shifted along their axis to adjust backlash (KHK)
  - Worm drive: a duplex-lead worm is shifted along its axis to adjust backlash (KHK)
  - Friction drive: no teeth and no backlash, but it can slip

### Pictures, videos and models

- **links**: 
  - [Gear Backlash, section 6.5 'Method of Reducing Backlash (Zero Backlash Gears)' (KHK Gear Technical Reference)](https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_backlash.html): Diagrams of a gear separated into two fixed parts (Fig. 6.4), tapered and duplex worm adjustments, and a scissors gear with coil springs (Fig. 6.8) *(licence: link only (KHK copyright))*
  - [Anti (Non) Backlash Spur Gear Techniques: Gear Backlash Prevention Method, Scissor Gear (Bright Hub Engineering)](https://www.brighthubengineering.com/machine-design/65169-how-does-an-anti-backlash-gear-works/): Pictures of a CAD model of a scissor gear: a fixed gear with an extended hub, a free gear with tabs in slots, and two compression springs *(licence: link only)*
  - [Eliminating backlash in gear drives 2 (Nguyen Duc Thang, thang010146, YouTube)](https://www.youtube.com/watch?v=c3bjt_8CdKw): CAD animation: a gear pivoted freely on the shaft of its twin and pulled round by a tension spring to eliminate tooth backlash (content from the search-result description; title and channel checked with YouTube oEmbed) *(licence: link only (standard YouTube licence))*
  - [How Split Gears Eliminate Backlash (Demo + Real Tuning Capacitor Example) (Aaron Dahlen, YouTube)](https://www.youtube.com/watch?v=7XxFrbyEJBM): Demonstration of a split gear removing backlash, with a real radio tuning-capacitor example (title and channel checked with YouTube oEmbed; video not watched) *(licence: link only (standard YouTube licence))*
  - [Backlash.svg (Wikimedia Commons, by GearHeads and Slashme)](https://commons.wikimedia.org/wiki/File:Backlash.svg): Diagram of the gap (backlash) between meshing gear teeth, the problem an anti-backlash gear removes *(licence: CC BY-SA 3.0)*
- **make_it_yourself**: 
  - [Anti-Backlash Gear by pauljs75 (Thingiverse) (page opened but its content did not load; description from search results)](https://www.thingiverse.com/thing:2328529): Printable anti-backlash gear made of two halves that interlock and are glued at the hub, with flexing spokes providing the spring tension *(licence: ⚑ [uncertain])*
  - [BOSL2 gears.scad (OpenSCAD library source)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad): Parametric spur, helical, bevel and worm gear generator with a 'backlash' setting that narrows the teeth; use it to make two identical halves for a scissor gear *(licence: BSD 2-Clause)*
  - [Anti-Backlash Compound Planetary Gearhead (LoboCNC, Printables) (URL appeared in search results; details from Printables API)](https://www.printables.com/model/132254-anti-backlash-compound-planetary-gearhead): Printed 38.4:1 compound planetary gearhead for a 35 mm stepper whose ring gears are springy in the radial direction but stiff in twist, taking out backlash: an alternative to scissor gears *(licence: CC BY-NC-SA)*
  - [Anti-Backlash 3D Printed Cycloidal BLDC Actuator (Hackaday.io)](https://hackaday.io/project/165592-anti-backlash-3d-printed-cycloidal-bldc-actuator): 24:1 printed dual cycloidal gearbox with three split housings twisted against each other; tightening a string increases the preload and stops the backlash (files linked at Thingiverse thing 3591512) *(licence: ⚑ [uncertain])* *(⚑ parts need confirming)*
- **diagram_idea**: Exploded side view of a gear split into a fixed half and a free half joined by a small coil spring, then a close-up of the mesh showing the fixed half's tooth pressing on the left side and the free half's tooth pressing on the right side of the mating tooth, with curved arrows showing the spring twisting the halves apart like scissors.
- **sources**: 
  - https://en.wikipedia.org/wiki/Backlash_(engineering)
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_backlash.html
  - https://www.machinedesign.com/mechanical-motion-systems/article/21831618/methods-to-minimize-gear-backlash
  - https://www.kggear.co.jp/en/kg-stock-gears/anti-backlash-spur-gears
  - https://www.kggear.co.jp/wp-content/uploads/KG3001_web_0003.pdf
  - https://www.kggear.co.jp/en/wp-content/themes/bizvektor-global-edition/pdf/2.4_Precaution-of-usage-for-Anti-backlash-spur-gears_TechnicalData_KGSTOCKGEARS.pdf
  - https://www.brighthubengineering.com/machine-design/65169-how-does-an-anti-backlash-gear-works/
  - https://ssch.com.au/camshaft-scissorpreload-gears/
  - https://patents.google.com/patent/EP3230626B1/en
  - https://groups.google.com/g/3dp-ideas/c/DYGXi_2EdY4
  - https://www.instructables.com/A-Practical-Guide-to-FDM-3D-Printing-Gears/
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  - https://hackaday.io/project/165592-anti-backlash-3d-printed-cycloidal-bldc-actuator
  - https://www.thingiverse.com/thing:2328529
  - https://www.printables.com/model/132254-anti-backlash-compound-planetary-gearhead
  - https://api.printables.com/graphql/
  - https://www.youtube.com/watch?v=6NcW02FxIEs
  - https://www.youtube.com/watch?v=c3bjt_8CdKw
  - https://www.youtube.com/watch?v=7XxFrbyEJBM
  - https://commons.wikimedia.org/wiki/File:Backlash.svg

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: parallel
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: light
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, environment_limits, input_output, load, make_it_yourself, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, processes, safety_notes

## 202 Chain and sprocket drive

*gear trains, gearboxes & transmissions.* A roller chain running on toothed wheels (sprockets) to pass strong, non-slipping rotation between shafts some distance apart

### What it is

- **plain_name**: A bicycle-style chain looped round two toothed wheels, so that turning one wheel turns the other without ever slipping, even when the wheels are far apart
- **term**: Roller chain drive (chain and sprocket drive)
- **aliases**: 
  - chain drive
  - roller chain and sprockets, bush roller chain
  - sprocket, sprocket wheel, chainwheel, chain wheel (the toothed wheels)
  - chainring (a bicycle's front sprocket), cog or cassette (a bicycle's rear sprockets)
  - ANSI #25 / #35 / #40 chain (US sizes: 1/4, 3/8 and 1/2 inch pitch)
  - ISO 606 / BS 228 chain, e.g. 05B, 06B, 08B (European sizes, pitch in sixteenths of an inch)
  - simplex, duplex, triplex chain (one, two or three strands side by side)
  - bicycle chain, motorcycle chain (e.g. 420 chain)
  - timing chain (the chain that drives the camshaft in a car engine)
  - master link, connecting link, quick link (the removable joining link)
  - Rollenkette (German, roller chain)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: motion conversion
- **one_liner**: A steel (or plastic) roller chain runs round toothed wheels called sprockets on two parallel shafts, passing strong rotation between them without slipping and changing speed according to the tooth counts.
- **complexity**: A few parts: a driving sprocket, a driven sprocket, a loop of roller chain (made of outer plates, inner plates, pins, bushings and rollers), a way to join the chain (a riveted link or a removable master link), and a way to take up slack (slotted mounts, an adjustable shaft or an idler sprocket). Plus shafts and bearings to carry the sprockets.
- **how_it_works**: The chain is a string of short links joined by pins, so it can bend round a wheel but not stretch. Each roller drops into the gap between two sprocket teeth, so when the driving sprocket turns, its teeth pull the chain along, and the chain's rollers push the teeth of the other sprocket round (a positive, non-slip drive). Both sprockets turn the same way, and the speed changes by the ratio of their tooth counts: a 12-tooth sprocket driving a 36-tooth one turns the output three times slower with about three times the turning force. Because the chain wraps a sprocket as a polygon rather than a circle, its speed ripples slightly as each link comes on (chordal action), which is worst on sprockets with few teeth.

### Finder attributes

- **job**: 
  - change speed or turning force: passes rotation between parallel shafts that can be far apart, faster or slower according to the tooth counts
  - change the kind of motion: a chain fixed to a carriage, lift or conveyor turns a sprocket's rotation into straight-line motion (e.g. continuous chain elevators on competition robots)
- **motion**: rotate: continuous rotation in either direction with unlimited range; driver and driven sprockets turn the same way. A chain run fixed to a carriage can also drive it in a straight line (slide)
- **degrees_of_freedom**: 1: the chain ties the two sprockets together, so turning one sets the position of the other (apart from a little slack and chain stretch)
- **special_behaviour**: 
  - motion conversion (rotary to linear): an open chain run clamped to a carriage, or a conveyor chain, turns rotation into straight-line motion
  - none of the other clever behaviours: it does not slip on purpose (unlike a friction belt), it does not lock, and it can be driven backwards. A loose or worn chain can jump teeth under load, but that is a fault, not a safety slip
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it transmits rotation
  - shape (the parts interlock; form-fit): the chain's rollers sit in the gaps between the sprocket teeth, so the drive cannot slip
- **input_output**: Continuous rotation -> continuous rotation in the same direction (or rotation -> straight-line motion with a chain fixed to a carriage). Ratio = teeth on driven sprocket / teeth on driving sprocket. RoyMech gives a normal single-stage maximum of about 6:1 (up to 114 teeth on the big wheel with 19 on the small one); BSC's 'Chain and Sprockets 101' guide (Bearing Service Pty Ltd) says limit ratios to 7:1. Efficiency: about 98% for well-lubricated roller chain (Wikipedia 'Roller chain'; RoyMech uses 98%), and one bicycle-chain study measured up to 98.6% (Wikipedia 'Bicycle chain'). Shafts: parallel. Back-drivable: yes, the output can drive the input backwards, so a lifted load will run the motor backwards unless there is a brake or a self-locking stage.
- **power**: passive (no power needed); it only passes on the motor's power. If the motor stops or loses power, nothing holds the output, and a load (such as a robot arm or lift) can back-drive the chain
- **removability**: removable: sprockets are fixed to shafts with set screws, keys, hex bores or bolted hubs; the chain comes off by undoing a master link or pressing out a pin with a chain breaker
- **reuse_cycles**: many times: chains and sprockets can be taken apart and refitted repeatedly; the chain itself wears (stretches) and is replaced as a consumable, and removable master links are the least reliable part (Game Manual 0)
- **tools_needed**: A chain breaker (chain tool) to shorten or join chain, or pliers for a master link's spring clip; hex keys or a screwdriver for set screws and hub bolts; a straightedge or level to line up the sprockets; oil or chain lube. Game Manual 0 recommends a chain breaker over master links
- **seal**: none: the chain and sprockets are open. Industrial drives run in closed oil-filled cases (RoyMech), and O-ring chains have rubber rings in each link that keep grease in and dirt out of the joints (Wikipedia 'Roller chain'), but the drive itself seals nothing
- **load**: Medium to heavy: steel roller chain carries high torque in a compact space (RoyMech). Examples: #25 (1/4 inch) chain holds about 930 lb before breaking (Game Manual 0); a single-strand 08B (1/2 inch) chain has a breaking force of 18,000 N (RoyMech table from BS 228 / ISO 606). A chain only works in tension (pull): the tight side pulls the two shafts towards each other, loading their bearings sideways. It is weak against sideways misalignment and twisting, and chains usually fail by wear or fatigue, not by snapping (RoyMech)
- **adjustable**: Yes. Tension: slide one shaft or the motor in slotted holes, or add an idler or spring-loaded tensioner sprocket on the slack side (RoyMech; Game Manual 0). Length: add or remove links with a chain breaker. Ratio: swap sprockets, or use a derailleur and several sprockets as on a bicycle
- **play_and_precision**: Small backlash when properly tensioned (Game Manual 0: 'roller chain doesn't have very much slop'), but play grows as the chain stretches, so an adjustable tensioner is needed. Speed ripples slightly each time a link engages (chordal action): about 4% with an 11-tooth sprocket, 1% with 21 teeth and 0.5% with 30 teeth (BSC guide). Tolerates very little misalignment: the sprockets must be in the same plane and the shafts parallel, or the chain wears, runs rough or comes off (RoyMech; BSC guide)
- **access_needed**: end of a tube or shaft: sprockets slide onto the shaft ends. The chain itself can be broken and rejoined in place, often without removing it from the machine (Game Manual 0)
- **materials**: Chains: high-grade steel for power transmission (RoyMech), also stainless steel and plastic chains that need no oil but carry much less (RoyMech). Sprockets: steel (hardened teeth for small, highly loaded sprockets), cast iron or steel plate for large ones (RoyMech); robotics teams also use plastic and 3D-printed sprockets for light loads. 3D-printed chains and sprockets: PLA, PETG or nylon for light duty (LoboCNC chain; unionfab guide)
- **maker_difficulty**: easy to moderate: chain, sprockets, tensioners and chain tools are cheap standard parts, and sprockets print or laser-cut well from free generators; the main skills are lining the sprockets up, getting the chain length and tension right, and joining the chain

### Making it

- **processes**: 
  - off-the-shelf part (roller chain, sprockets, idler sprockets, tensioners, master links)
  - 3D print (FDM): sprockets for standard metal chain in light-duty uses, idler sprockets, and complete light-duty plastic chains
  - laser cut or CNC: flat plate sprockets from a generated outline (metal, polycarbonate or plywood)
  - 3D print (resin): small display or light-duty sprockets ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: sprockets are printed separately and fitted to shafts; printed chains are printed as separate links that are snapped or bolted together (LoboCNC's chain links snap together; the 'Let's Print' chain used bolts and nuts)
- **making_tips_3d_printing**: 1) Generate the teeth, don't draw them: kresty's OpenSCAD 'Roller Chain Sprockets' module (and Dallen Wilson's GitHub fork with keyways and set-screw holes) makes sprockets for ANSI #25 to #80, motorcycle and bicycle chain from the chain size and tooth count, with 'fudge' settings to loosen the bore and roller seats for your printer; cq_warehouse's Sprocket class has a clearance setting between rollers and teeth. 2) Print the sprocket flat, with the shaft axis vertical, so each layer traces the whole tooth outline (unionfab guide). 3) Make the teeth solid: set enough walls (perimeters) that the teeth have no infill at all (FRC team 3005, whose PLA sprocket survived a season in a low-torque joint); Engineerdog warns that tiny teeth can still have gaps inside at 100% infill. 4) Leave 0.1-0.3 mm clearance on the bore (unionfab) or at least 0.3 mm between moving parts (Prusa); bores tend to print small, so plan to ream or oversize them (Engineerdog). 5) Material: nylon or carbon-fibre nylon for working sprockets, PETG for prototypes; unionfab advises against PLA for loaded sprockets because it is brittle and softens with heat, and Prusa says PLA softens above about 60 C. 6) Fix the hub to the shaft firmly: a hex bore, a set screw on a flat, or a bolted metal hub, with a thick hub wall (Engineerdog). 7) Use at least about 17-19 teeth on the small sprocket where smoothness matters (RoyMech); very small printed sprockets wear the chain faster (Game Manual 0). 8) Printed chains: LoboCNC's 9 mm pitch PLA chain orients each link so the pull runs along the printed lines, prints at 0.2 mm layers, and is rated about 5 kgf working load (22 kgf theoretical yield); the 'Let's Print' tests found printed ABS, PLA and PETG chains worked, but only at minimal load (Hackaday). 9) Typical failures: teeth shearing off along layer lines, bores cracking or slipping on the shaft, and printed teeth wearing into hooks that let the chain jump.
- **off_the_shelf_parts**: Roller chain (ANSI #25 1/4 inch, #35 3/8 inch, #40 1/2 inch; ISO 04B/05B/06B/08B; 8 mm pitch robotics chain as used in FTC); plate sprockets (flat, bolt-on), hub sprockets with set screw or keyway, idler sprockets with built-in bearings; chain tensioners (spring-loaded or screw-adjusted); master links / connecting links / half links (offset links); chain breaker tool (chain tool); O-ring or X-ring chain for dirty places; bicycle chainrings, cogs and cassettes; motorcycle chain and sprockets; chain guards. Search terms: 'roller chain', 'plate sprocket', 'idler sprocket', 'chain tensioner', 'connecting link', 'chain breaker'.
- **rules_of_thumb**: 
  - Speed ratio = teeth on driven sprocket / teeth on driving sprocket, so the ratio is changed by swapping sprocket sizes (Wikipedia 'Chain drive'); driver and driven turn the same way (DT Online 'Chain and Sprocket').
  - Sprocket pitch diameter D = p / sin(180 degrees / z), where p is the chain pitch and z the number of teeth (RoyMech 'Roller chains').
  - Smallest sprocket: about 9 teeth is possible, but normally at least 19, and 23 or more for smooth, fast drives; the big sprocket normally has at most 114 teeth (never more than 150), giving a normal maximum ratio of about 6:1 (RoyMech). BSC guide: limit ratios to 7:1 so a worn chain does not jump teeth on the big sprocket.
  - Chordal speed ripple: about 4% with 11 teeth, 1% with 21 teeth and 0.5% with 30 teeth (BSC guide).
  - Chain wrap on the small sprocket: more than 120 degrees (RoyMech); Game Manual 0 says at least 90 degrees and ideally 180 degrees or more.
  - Centre distance: about 40 chain pitches is recommended (RoyMech); on 1:1 low-ratio drives keep the tooth counts of both sprockets adding up to no more than 50 (RoyMech).
  - Chain length and centre distance: L = 2C/P + (N + n)/2 + P((N - n)/(2 pi))^2 / C, in pitches, where N and n are the tooth counts (Game Manual 0); round L up to a whole, preferably even, number of links, because a full link covers two pitches (RoyMech).
  - Tension: slack-side sag of about 2-4% of the shaft centre distance (BSC guide); Game Manual 0's hand test is that the chain should move slightly under a gentle push without much resistance.
  - Wear limit: replace chain at about 1.5-2% elongation in most industrial drives (Tsubaki); Wikipedia gives 3% on adjustable drives and 1.5% on fixed-centre drives. Bicycle chains: replace before 20 half-links measure 10 1/16 inch (256 mm) instead of 10 inch (Wikipedia 'Bicycle chain').
  - Sizes: ANSI #25 = 1/4 inch, #35 = 3/8 inch, #40 = 1/2 inch pitch (Wikipedia 'Roller chain'); in ISO names like 06B the first two digits are the pitch in sixteenths of an inch (06 = 3/8 inch) and B means the European standard (RoyMech).
  - Strength example: #25 chain breaks at about 930 lb (Game Manual 0); ISO 08B-1 breaks at 18,000 N (RoyMech table).

### When to use it

- **everyday_examples**: 
  - A bicycle: the pedals turn the front chainring, and the chain drives the rear sprocket (Wikipedia 'Sprocket')
  - Motorcycles: most sporty motorcycles use a chain to the back wheel (Wikipedia 'Chain drive')
  - Car engines: a timing chain turns the camshaft (Wikipedia 'Roller chain')
  - Conveyors, farm machinery and printing presses (Wikipedia 'Roller chain'), and student competition robots (Game Manual 0)
- **when_to_use**: Use a chain when you need strong, non-slipping rotation between parallel shafts that are too far apart for gears, especially where there is dirt, shock loads or heavy torque: robot drive trains and arms, go-karts, bikes, lifts and conveyors. It is easy to change the length or the ratio by breaking the chain and swapping sprockets, the parts are cheap and standard, and a chain keeps working for long periods even with little lubrication (RoyMech). It also handles higher power and longer centre distances than belts (RoyMech).
- **when_not_to_use**: Avoid a chain where quiet, smooth, oil-free running matters (3D printers, camera sliders): use a toothed timing belt. Avoid it for precise positioning without a good tensioner, because the chain stretches and adds slop (Game Manual 0): use gears or a timing belt. Avoid it for shafts close together or for big reductions in small spaces, because sprockets are large (Game Manual 0): use spur, planetary or worm gears. Avoid it where the load must hold when the motor stops: add a brake, a worm drive or a lead screw. Avoid it for shafts that are not parallel: use bevel gears, a universal joint or a flexible shaft.
- **environment_limits**: Steel chains need oil and rust if left wet unless they are stainless or coated; dirt mixed with oil speeds up wear, which is why O-ring chains keep dirt out of the joints (Wikipedia 'Roller chain'). RoyMech treats 0-80 C as normal and derates chain capacity above that. Chains stretch with wear over time, so tension must be re-checked (Game Manual 0). Printed plastic sprockets and chains: PLA softens above about 60 C and degrades in sunlight (Prusa); plastic parts under constant load can creep. Vibration can loosen set screws and master-link clips.
- **safety_notes**: The point where the chain runs onto a sprocket is an in-running nip point that can catch fingers, hair, gloves or clothing (OSHA machine guarding eTool); OSHA requires sprockets and chains on powered machinery to be enclosed unless more than 7 feet above the floor. Unguarded chains can cause cuts, punctures and amputations. Switch off and unplug before touching or tensioning a chain, and keep a chain guard on bikes and machines. A chain that breaks under load can whip. Chain oil makes surfaces slippery.
- **common_failures**: 1) Too loose: the chain skips teeth or falls off (Game Manual 0); fix with proper tension, an idler or a spring tensioner. 2) Too tight: burns out motors and wastes power (Game Manual 0). 3) Misaligned sprockets: rough running, side wear and derailing; line sprockets up with a straightedge or level (BSC guide). 4) Chain stretch from wear at the pins and bushings: the chain rides higher on the teeth and eventually jumps; replace chain at the wear limit, and sprockets too if their teeth have worn into hooks (Tsubaki; Wikipedia 'Roller chain'). 5) Master link coming undone: Game Manual 0 reports teams losing matches to failed master links; use a chain breaker and a permanent link where possible. 6) Too few teeth or too little wrap: faster stretch, rough running and skipping (RoyMech; Game Manual 0). 7) No lubrication on steel chain: faster wear and lower capacity (RoyMech). 8) Printed sprockets: teeth shearing off along layer lines, or the hub slipping on the shaft; make teeth solid and use a hex or keyed bore.
- **related**: 
  - Belt drives (timing belt, V-belt): quieter, lighter, no oil, and better for precise positioning; carry less torque and prefer clean places (see Belt drives entry)
  - Spur gear pair: for shafts close together; stiffer and more compact, but no long reach
  - Silent (inverted-tooth) chain: a chain with toothed plates that meshes like a gear; higher power and speed and smoother, but needs lubrication (RoyMech)
  - Leaf chain: a chain of plates for lifting loads over a pulley, as on forklifts; it has no rollers and does not run on toothed sprockets (RoyMech)
  - Lantern gear (pin gear): a wheel with pins meshing directly with a toothed wheel; a sprocket is shaped similarly but the chain wraps round it (Chief Delphi)
  - Belt tensioner (spring-loaded idler): the usual way to keep a chain tight when the shafts can't move
  - Cable carrier (drag chain): looks like a chain but only carries cables and hoses; it passes on no power
  - Rigid chain actuator (push chain): a chain whose links lock into a column so it can push as well as pull
  - Shaft drive: a spinning shaft with bevel gears, used on some bicycles and touring motorcycles instead of a chain (Wikipedia 'Chain drive')

### Pictures, videos and models

- **links**: 
  - [Chain.gif (Wikimedia Commons, OSHA)](https://commons.wikimedia.org/wiki/File:Chain.gif): Animation of a chain running onto a sprocket, highlighting the in-running nip point where they meet *(licence: Public domain (work of the US Department of Labor, OSHA))*
  - [Roller Chain.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Roller_Chain.svg): Labelled diagram of a roller chain: outer plate, inner plate, pin, bushing and roller *(licence: Attribution (free use with credit to the copyright holder, M. Roeder; SVG by Hk kng))*
  - [Rollenketten.gif (Wikimedia Commons, Kettentechnik Roeder GmbH)](https://commons.wikimedia.org/wiki/File:Rollenketten.gif): Animated roller chain *(licence: Public domain (released by the copyright holder))*
  - [Roller chain (Wikipedia)](https://en.wikipedia.org/wiki/Roller_chain): Photos of roller chain and sprocket, chain construction, Leonardo da Vinci's roller chain sketch, and a layout diagram *(licence: Text CC BY-SA 4.0; images per file)*
  - [Roller Chain (Game Manual 0)](https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/chain.html): Photos of chain drives on student robots, a disassembled master link, and good chain wrap with tensioners *(licence: link only ⚑ [uncertain])* *(⚑ parts need confirming)*
- **make_it_yourself**: 
  - [Roller Chain and Sprockets (LoboCNC, Printables)](https://www.printables.com/model/283151-roller-chain-and-sprockets): A fully printable 9 mm pitch roller chain whose links snap together, plus STL and STEP sprockets from 8 to 30 teeth; PLA recommended, about 5 kgf working load *(licence: CC BY-SA)*
  - [420 roller chain, modular, with chain lock and sprockets (Hartvik Line, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/407208-420-roller-chain-modular-with-chain-lock-and-sproc): A printed copy of 420-size motorcycle chain with a chain lock, in several lengths, plus 9-48 tooth sprockets *(licence: CC BY-SA)*
  - [Educational Gear Examples 3 - Lantern (osamutake, Printables)](https://www.printables.com/model/1451958-educational-gear-examples-3-lantern): A set of small printable demonstration models including a chain and sprocket, lantern gears and a pin rack, with an explanation of why sprocket teeth are shaped the way they are *(licence: CC BY)*
  - [Roller Chain Sprockets OpenSCAD Module (kresty / Shawn Steele, Thingiverse) (from search results; page loads only with scripts)](https://www.thingiverse.com/thing:197896): OpenSCAD module that generates sprockets for ANSI #25-#80, motorcycle and bicycle chain from chain size, tooth count and bore *(licence: MS-PL (stated in the Sprockets.scad header))*
  - [OpenSCAD-Sprockets (Dallen Wilson, GitHub)](https://github.com/dallenwilson/OpenSCAD-Sprockets): Fork of the Sprockets.scad module that adds keyways, set-screw holes and printer 'fudge' settings; tested with ANSI chain *(licence: Sprockets.scad MS-PL; threads.scad GPL-3)*
  - [cq_warehouse sprocket (and chain) generator](https://cq-warehouse.readthedocs.io/en/latest/sprocket.html): Python/CadQuery classes that generate parametric sprockets (chain pitch, roller diameter, tooth count, clearance) and a chain wrapped round a set of sprockets, exportable to STEP *(licence: Apache 2.0)*
- **diagram_idea**: A side view of a small sprocket driving a large one through a chain, with one roller highlighted dropping into a tooth gap, rev counters showing both wheels turning the same way at a 1:3 ratio, a sagging slack side and tight top side labelled, and an inset showing the polygon the chain makes on a small sprocket.
- **sources**: 
  - https://en.wikipedia.org/wiki/Roller_chain
  - https://en.wikipedia.org/wiki/Chain_drive
  - https://en.wikipedia.org/wiki/Sprocket
  - https://en.wikipedia.org/wiki/Bicycle_chain
  - https://roymech.org/Useful_Tables/Drive/Chain_Drives.html
  - https://roymech.org/Useful_Tables/Drive/Roller_chain.html
  - https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/chain.html
  - https://raw.githubusercontent.com/gamemanual0/gm0/main/source/docs/common-mechanisms/power-transmission/chain.rst
  - https://partners.bsc.com.au/Content/+2332
  - https://www.ustsubaki.com/resources/knowledge-center/chain-wear-indicator-kit/
  - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.219
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
  - https://wiki.dtonline.org/index.php/Chain_and_Sprocket
  - https://507movements.com/mm_254.html
  - https://hackaday.com/2021/05/15/putting-3d-printed-chain-through-its-paces/
  - https://www.unionfab.com/blog/2025/06/3d-print-sprocket
  - https://www.chiefdelphi.com/t/3005-robochargers-cad-release-2025/504887
  - https://www.chiefdelphi.com/t/geometry-correct-lantern-gears-in-onshape/473561
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://commons.wikimedia.org/wiki/Category:Roller_chains
  - https://commons.wikimedia.org/wiki/File:Chain.gif
  - https://commons.wikimedia.org/wiki/File:Roller_Chain.svg
  - https://commons.wikimedia.org/wiki/File:Rollenketten.gif
  - https://api.printables.com/graphql/
  - https://raw.githubusercontent.com/dallenwilson/OpenSCAD-Sprockets/master/README.md
  - https://raw.githubusercontent.com/dallenwilson/OpenSCAD-Sprockets/master/Sprockets.scad
  - https://cq-warehouse.readthedocs.io/en/latest/sprocket.html
  - https://cq-warehouse.readthedocs.io/en/latest/chain.html
  - https://raw.githubusercontent.com/gumyr/cq_warehouse/main/LICENSE

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning, straight push or pull
- **shaft_layout**: parallel
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: off-the-shelf part
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** links, processes

## 203 Non-circular gears

*gear trains, gearboxes & transmissions.* Oval or oddly shaped gears that mesh while turning, so the output speeds up and slows down during each turn

### What it is

- **plain_name**: Oval or oddly shaped gears that stay meshed as they turn, so when you turn one at a steady speed the other speeds up and slows down during every turn
- **term**: Non-circular gears (noncircular gears, NCG)
- **aliases**: 
  - oval gears
  - elliptical gears, elliptic gears, elliptical spur gears
  - eccentric gears (a round gear turning about an off-centre point)
  - lobed gears (gears with two, three or more bulges)
  - variable-ratio gears, variable-speed gears
  - irregular gears, odd-shaped gears (square, triangular or heart-shaped gears)
  - oval gear meter rotors (the gears inside an oval gear flow meter)
  - oval chainring, Biopace (Shimano brand, 1983-1993) (a non-circular bicycle sprocket)
  - Wild Gears (brand; non-circular drawing gears)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: motion conversion
- **one_liner**: A pair of gears whose outlines are not circles (ovals, ellipses or lobed shapes), designed to roll on each other without slipping so that a steady input turn becomes an output that repeatedly speeds up and slows down.
- **complexity**: A few parts: two gears designed as a matched pair (a drive gear and its mating gear), two shafts or pins held at a fixed distance apart, and bearings or bushings; often a base plate or frame and clips (retaining rings) to hold the gears on their pins
- **how_it_works**: Each gear rolls on an imaginary outline (pitch curve) instead of a circle. At every moment the distances from the two shafts to the point where the gears touch add up to the fixed distance between the shafts, and the output speed equals the input speed times the drive gear's distance divided by the driven gear's distance (Wikipedia 'Non-circular gear'). Because those distances change as the gears turn, the speed ratio changes all the time: where the drive gear reaches out far and the driven gear is 'short', the output races; half a turn later it crawls. The mating shape is worked out from the first gear so that the two roll together without slipping, and teeth are then added along each outline (piellardj; osamutake).

### Finder attributes

- **job**: 
  - change speed or turning force: the speed ratio (and so the turning force) changes in a set pattern during every turn
  - change the kind of motion: turns steady rotation into rotation that speeds up and slows down in a planned way, e.g. a slow working stroke and a fast return
- **motion**: rotate: continuous rotation, unlimited range; an external pair turns in opposite directions like ordinary gears
- **degrees_of_freedom**: 1: the output angle is fixed by the input angle through the gears' shapes
- **special_behaviour**: 
  - motion conversion: steady rotation in, non-steady (varying-speed) rotation out. Engineers use pairs designed for a chosen 'law of motion' so a machine part follows a set speed pattern (Maláková 2019; Litvin et al.)
  - none of the locking, slipping or indexing behaviours: it does not slip, lock or stop; for stop-and-go motion use an intermittent gear or Geneva drive instead
- **holding_principle**: not a holding joint (it moves or passes on motion): it transmits rotation, shape (the parts interlock; form-fit): the teeth mesh, so the gears cannot slip
- **input_output**: Continuous rotation -> continuous rotation whose speed varies periodically. Ratio at any instant = driving radius / driven radius, with the two radii always adding up to the centre distance (Wikipedia). For two identical ellipses each turning about one focus (centre distance = the ellipse's long axis, Maláková), the output speed swings between (1 - e)/(1 + e) and (1 + e)/(1 - e) times the input, where e is the ellipse's eccentricity; e.g. e = 0.5 gives one third to three times input speed (worked out from the ellipse's geometry, not quoted from a source). Over a whole turn an equal-perimeter pair averages 1:1; other pairs can be designed so the driver makes N turns while the follower makes M (Otvinta). Efficiency: ⚑ [uncertain] probably close to ordinary spur gears when accurately made, lower for printed ones; no source found. Shafts: parallel. Back-drivable: yes, like spur gears, but the turning force needed at the input changes through each turn. *(⚑ parts need confirming)*
- **power**: passive (no power needed); it only passes on the motor's power. If the motor stops nothing holds the output
- **removability**: removable: the gears slide off their pins or shafts once clips, set screws or hubs are undone
- **reuse_cycles**: many times: the gears can be taken off and refitted as often as needed; refit them at the same relative angle (see tools_needed)
- **tools_needed**: A screwdriver or hex key for hubs, or none for gears held on pins with snap-on retaining rings (osamutake's model needs no glue). Design software or an online generator is needed to make the pair. When assembling, mesh the gears at their designed relative angle (mark matching teeth): because the two radii must always add up to the centre distance, a pair meshed one tooth off will bind or gap (follows from the fixed-centre rule in Wikipedia) ⚑ [uncertain] *(⚑ parts need confirming)*
- **seal**: none: open gears. In an oval gear flow meter the gears run in a closely fitting chamber and the fluid is carried round in the pockets between gears and chamber wall, but that is the meter housing, not the gears (Silver Automation Instruments)
- **load**: Light to medium: made accurately in metal they carry industrial loads (presses, hydraulic motors, pumps; Wikipedia), but home-made printed or laser-cut ones are for light loads, models and kinetic art. Teeth near the sharp ends of a pointed oval are small and undercut, so they are the weak spot (osamutake). Strong in twist (torque) along the direction of rotation; like other spur gears they push the shafts apart and need a stiff frame to keep the centre distance
- **adjustable**: no: the speed pattern is fixed by the gears' shapes and the centre distance is fixed; to change the pattern you make a new pair (or change the relative starting angle, which shifts when the fast and slow parts happen)
- **play_and_precision**: Small backlash, like spur gears, if made accurately. Very little tolerance for a wrong centre distance or phase: the shapes are matched only at one spacing and one relative angle (Wikipedia; Maláková). osamutake's printed model uses 0.15 mm radial clearance between gears and their shafts and warns that elephant's foot or stringing makes them bind. Repeatable: the output angle always returns to the same place for a given input angle
- **access_needed**: end of a tube or shaft: the gears slide onto pins or shafts
- **materials**: Industrial ones are steel or other metals, usually spur gears made by moulding or electrical discharge machining rather than normal gear cutting (Wikipedia). Maker versions: PETG (osamutake recommends well-dried PETG), PLA for toys, acrylic, MDF or plywood when laser cut (MyLaserTools exports layered SVG for laser cutting as well as STL/3MF)
- **maker_difficulty**: moderate: easy to make once a generator has drawn the pair (print or laser-cut it), but hard to design by hand, because every tooth is a different shape and the mate has to be calculated

### Making it

- **processes**: 
  - 3D print (FDM)
  - 3D print (resin): fine teeth for small models ⚑ [uncertain]
  - laser cut (acrylic, MDF, plywood)
  - CNC or wire EDM (industrial metal gears; Wikipedia mentions moulding and electrical discharge machining)
  - off-the-shelf part: rarely; mostly found inside products such as oval gear flow meters and oval bicycle chainrings ⚑ [uncertain] *(⚑ parts need confirming)*
- **print_in_place**: no: the two gears are printed separately and fitted on pins or shafts, then clipped in place (osamutake's model uses snap-on retaining rings)
- **making_tips_3d_printing**: 1) Use a generator: Otvinta's Non-Circular Gear Calculator takes a polar equation for gear 1, a turn ratio N/M and a tooth count and computes both outlines (N/M times the number of lobes must be a whole number, and the tooth count must divide by both N and M); MyLaserTools' free Gear Generator solves the mate of an ellipse numerically and exports SVG, STL and 3MF; piellardj's MIT-licensed web demo builds mates for ellipse, heart, triangle and other shapes. 2) Keep the shape gentle: the pitch curve should be smooth, closed and not cross itself (Otvinta); very pointed ellipses give tight curves where teeth are undercut and weak, and hollow (concave) stretches on the mate get teeth like an internal gear (osamutake). 3) Tooth shape: proper non-circular involute teeth change with the local curvature (osamutake), but for FDM Hirnschall suggests round (circular) teeth so every tooth is the same size, since printed gears are not highly loaded. 4) Print flat with the shaft axis vertical so each layer traces the full outline (Prusa's advice to orient parts for strength in the loaded direction). 5) osamutake's settings for smooth running: well-dried PETG for accuracy, 0.1 or 0.08 mm layers, slow overhangs, random seam position, and 0.15 mm radial clearance on the shafts; sand off stringing and file out elephant's foot if the gears feel tight. 6) Mark the meshing teeth before separating the gears, so you can reassemble them in phase. 7) For moving parts Prusa suggests starting at 0.3 mm clearance; PLA softens above about 60 C (Prusa).
- **off_the_shelf_parts**: Mostly custom-made. Parts you can buy: steel pins or shoulder bolts as axles, ball bearings or bushings, retaining rings (e-clips), a base plate. Products that contain non-circular gears: oval gear flow meters (positive displacement meters), oval gear pumps, oval bicycle chainrings (e.g. Rotor Q-Rings, brand; Shimano Biopace, brand, discontinued), Wild Gears (brand) drawing sets
- **rules_of_thumb**: 
  - Fixed-shaft rule: the two contact radii always add up to the centre distance, r1 + r2 = a, and the gears roll without slipping, r1 dθ1 = r2 dθ2 (Wikipedia 'Non-circular gear').
  - Identical elliptical gears turn about a focus, not the centre, and the centre distance equals the long (major) axis of the ellipse (Maláková 2019: the half major axis is half the axial distance).
  - How much the speed varies is set by the ratio of the ellipse's long and short axes (507 Mechanical Movements no. 33); a rounder ellipse gives a gentler variation.
  - For one turn of the driver to give exactly one turn of the follower, both pitch curves must have the same length (osamutake); more generally N/M times the number of lobes must be a whole number and the tooth count must divide by N and M (Otvinta).
  - Pitch curves must be closed, smooth and non-self-intersecting (Otvinta), and should stay convex with a large enough radius of curvature to avoid undercut teeth (osamutake; Liu et al., Scientific Reports 2022, give convexity and undercut conditions for elliptical gears).
  - Tooth shape depends only on the local curvature of the pitch curve, not on the distance from the shaft (osamutake).

### When to use it

- **everyday_examples**: 
  - Oval gear flow meters on fuel, oil and grease dispensers: two meshing oval gears pass a fixed volume of liquid per turn (Silver Automation Instruments)
  - Oval bicycle chainrings such as Shimano's Biopace (brand), which change the effective gear during each pedal stroke (Wikipedia 'Biopace')
  - Spirograph-style drawing toys with non-round gears, e.g. Wild Gears (brand)
  - Printing presses, packaging machines and textile machines (Maláková 2019; Wikipedia)
- **when_to_use**: Use non-circular gears when a constant-speed motor must drive something whose speed has to rise and fall in a set pattern every turn: a slow working stroke with a quick return, matching the speed of a cutter or printing roll to a moving web, or a positive-displacement pump or flow meter (Maláková 2019; Wikipedia). They are compact, need no springs or followers, and keep an exact angle relationship. They are also great for kinetic art, desk toys and teaching models, because the changing speed is easy to see.
- **when_not_to_use**: Don't use them when you just need a constant speed change: use ordinary spur gears. If the output must stop and wait, use an intermittent gear or Geneva drive. If the ratio must be changed while running, use a friction drive or CVT. A four-bar linkage can give a very similar varying motion with simple bars and pins (an antiparallelogram linkage behaves like a pair of elliptical gears, Wikimedia Commons animation), and a cam gives freer control of a back-and-forth output. Avoid printed non-circular gears for heavy or fast-running loads, because the output speeds up and slows down every turn, which shakes heavy parts ⚑ [uncertain]. *(⚑ parts need confirming)*
- **environment_limits**: The same limits as other gears of the same material: PLA softens and deforms above about 60 C and degrades in sunlight (Prusa); moisture in PETG filament spoils accuracy (osamutake recommends well-dried filament). Plastic gears wear, and the teeth near sharp ends wear or break first. Oval gear flow meters need clean liquids, because particles damage the closely fitting gears (Silver Automation Instruments).
- **safety_notes**: Meshing gears form in-running nip points that can trap fingers, hair or clothing (OSHA machine guarding eTool); with non-circular gears the gap between the gears also opens and closes as they turn. Guard powered gears. Small printed gears and clips are a choking hazard for small children.
- **common_failures**: 1) Assembled out of phase or at the wrong centre distance: the gears bind in one place and rattle in another; keep the designed spacing and mark the meshing teeth ⚑ [uncertain]. 2) Undercut, weak teeth at the pointed ends of an oval break or skip (osamutake). 3) Printing faults: elephant's foot and stringing make gears tight on their shafts (osamutake). 4) A shape that is too extreme or has hollow sections that the generator cannot mesh properly (Otvinta requires closed, smooth, non-crossing curves). 5) Motor stalling or the output jerking because the torque needed changes through each turn ⚑ [uncertain]. *(⚑ parts need confirming)*
- **related**: 
  - Spur gear pair and gear train: round gears with a constant speed ratio
  - Intermittent gear (mutilated gear) and Geneva drive: give stop-and-go motion instead of smoothly varying speed
  - Four-bar linkage (antiparallelogram): can give the same varying rotation with bars and pins (Wikimedia Commons 'Antiparallelogram and Elliptical Gears' animation)
  - Cam and follower: another way to make a set motion pattern, usually back-and-forth rather than rotation
  - Eccentric gear: a round gear turning off-centre, the simplest non-circular pair
  - Chain and sprocket drive with an oval chainring: a non-circular sprocket gives a varying ratio through a chain
  - Friction drives and CVTs: change the ratio smoothly while running, but by friction and on command rather than in a fixed pattern
  - Scotch yoke and slider-crank: turn rotation into back-and-forth motion

### Pictures, videos and models

- **links**: 
  - [Antiparallelogram and Elliptical Gears.gif (Wikimedia Commons, Arglin Kampling)](https://commons.wikimedia.org/wiki/File:Antiparallelogram_and_Elliptical_Gears.gif): Animation of two elliptical gears turning about their foci next to the equivalent antiparallelogram four-bar linkage *(licence: CC BY-SA 4.0)*
  - [EllipticalGeard.gif (Wikimedia Commons, Sababer)](https://commons.wikimedia.org/wiki/File:EllipticalGeard.gif): Animation of an elliptical gear pair and its equivalent mechanism *(licence: CC BY-SA 4.0 and GFDL 1.2 or later)*
  - [507 Mechanical Movements no. 33: Elliptical spur-gears](https://507movements.com/mm_033.html): Animated historic drawing of elliptical spur gears giving rotary motion of varying speed *(licence: Book public domain (1868); website animation link only)*
  - [Non-circular gears (Jérémie Piellard, interactive web demo)](https://piellardj.github.io/non-circular-gears/): Live animation of an odd-shaped gear (ellipse, heart, triangle, square and more) with mating gears generated around it; you can add gears and show teeth *(licence: MIT (code))*
  - [Non-Circular Gear Basics (Wild Gears, YouTube)](https://www.youtube.com/watch?v=SQXxEbdPU1Y): Video introduction to non-circular gears *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Educational Model of Non-circular Gears (osamutake, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1504479-educational-model-of-non-circular-gears): A printable 80 x 80 mm demonstration: an eccentric ellipse driving its calculated mate, with involute-style teeth, printing settings and a video (https://youtu.be/AjaNT3_8q5M) *(licence: CC BY)*
  - [Elliptical gears (MarcinPaska, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/864137-elliptical-gears): A printable pair of elliptical gears *(licence: CC0 (public domain))*
  - [Elliptical Gear with no center pivot (JGowins, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1533767-elliptical-gear-with-no-center-pivot): A remix of PerryT's elliptical gear set with the gears pivoting off-centre *(licence: CC BY-SA)*
  - [Non-Circular Gear Calculator (Otvinta)](https://www.otvinta.com/noncircular.html): Online calculator that computes the outlines of two meshing non-circular gears from a polar equation, turn ratio and tooth count *(licence: ⚑ [uncertain] free online tool; no licence shown)*
  - [Gear Generator (MyLaserTools)](https://www.mylasertools.com/gear-generator): Free online gear generator including non-circular gears whose mate is solved numerically; exports layered SVG for laser cutting and STL/3MF for printing *(licence: ⚑ [uncertain] free online tool; no licence shown)*
  - [non-circular-gears (Jérémie Piellard, GitHub)](https://github.com/piellardj/non-circular-gears): Source code of the interactive non-circular gear generator, with an explanation of the no-slip rolling principle and research references *(licence: MIT)* *(⚑ parts need confirming)*
- **diagram_idea**: Two identical ellipses each pinned at one focus, shown at three moments of a turn with the contact point marked and the two contact distances drawn as coloured bars that always add up to the fixed centre distance, plus a small speed-over-one-turn graph showing the output racing and crawling while the input stays steady.
- **sources**: 
  - https://en.wikipedia.org/wiki/Non-circular_gear
  - https://en.wikipedia.org/wiki/Biopace
  - https://sjsutst.polsl.pl/archives/2019/vol104/095_SJSUTST104_2019_Malakova.htm
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC9561629/
  - https://arxiv.org/abs/1905.02642
  - https://books.google.com/books/about/Noncircular_Gears.html?id=8DHzDAEACAAJ
  - https://507movements.com/mm_033.html
  - https://www.otvinta.com/noncircular.html
  - https://www.mylasertools.com/gear-generator
  - https://blog.hirnschall.net/gears-for-3d-printing/
  - https://piellardj.github.io/non-circular-gears/
  - https://raw.githubusercontent.com/piellardj/non-circular-gears/master/README.md
  - https://raw.githubusercontent.com/piellardj/non-circular-gears/master/LICENSE
  - https://www.silverinstruments.com/support/oval-gear-flow-meter-working-principle.html
  - https://commons.wikimedia.org/wiki/File:Antiparallelogram_and_Elliptical_Gears.gif
  - https://commons.wikimedia.org/wiki/File:EllipticalGeard.gif
  - https://www.youtube.com/watch?v=SQXxEbdPU1Y
  - https://www.youtube.com/watch?v=AjaNT3_8q5M
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: parallel
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…ff will bind or gap (follows from the fixed-centre rule in Wikipedia) [uncertain]…"*
- **load_max**: medium
- **usual_process**: 3D print (FDM)
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** common_failures, input_output, make_it_yourself, processes, tools_needed, when_not_to_use

## 204 Lantern gear (pin gear)

*gear trains, gearboxes & transmissions.* A gear made of pins between two discs, easy to make from dowels or laser-cut sheet, used in mills and simple machines

*Also covers:* Also covers the mangle wheel (steady turning into back-and-forth turning).

### What it is

- **plain_name**: A gear made of a ring of round pins (like dowels) held between two discs, like the bars of a round birdcage, which meshes with a toothed wheel
- **term**: Lantern gear (lantern pinion, cage gear)
- **aliases**: 
  - lantern pinion
  - cage gear
  - pin gear, pin wheel, pinwheel gear
  - trundle wheel, trundle gear (the pins are called trundles, staves or rungs)
  - wallower (the lantern on a mill's upright shaft)
  - lantern rack, pin rack (the straight version: a row of pins)
  - roller pinion (a modern industrial version with pins on bearings; e.g. Nexen RPS, brand)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: motion conversion
- **one_liner**: A pinion whose 'teeth' are round pins set between two discs, driven by a wheel with specially shaped (cycloidal) teeth; it is easy to make by drilling holes and pushing in dowels or steel pins, and was used for centuries in mills and clocks.
- **complexity**: A few parts: the lantern (two discs, a ring of pins or dowels between them, and a shaft or hub), and a mating wheel with teeth shaped for that exact number of pins (or a flat rack with such teeth). Optional: bushings or small bearings over the pins so they roll instead of slide
- **how_it_works**: The pins sit on the lantern's pitch circle, and each tooth of the mating wheel pushes one pin at a time round, like a finger pushing the bars of a turning birdcage (Wikipedia 'Gear'). The wheel's tooth shape is the path the centre of a pin traces as the two pitch circles roll on each other (an epicycloid), moved inwards by the pin's radius, which gives smooth, steady motion (tec-science; Chief Delphi tutorial). Speed changes by the ratio of teeth to pins, as with any gear. Because each pin is held at both ends, even a lantern with very few pins is strong, and dirt can fall through between the pins instead of packing into tooth roots (Wikipedia; Chief Delphi). The mangle wheel is the round cousin of the mangle rack: it 'converts continuous rotary motion of pinion into reciprocating rotary motion of wheel' (507 Mechanical Movements no. 36). In no. 194 the wheel carries a single ring of pins and a toothed pinion runs round the inside of the ring and then the outside, its shaft guided 'by a groove in the wheel' and fitted with a universal joint so it can swing, so the 'speed is equal in both directions'; in no. 192 the teeth and groove are set off-centre, so the 'speed varies in every part of a revolution' (507 Mechanical Movements nos. 192 and 194).

### Finder attributes

- **job**: 
  - change speed or turning force: a wheel with many teeth and a lantern with few pins gives a big reduction or step-up in one stage
  - change the kind of motion: with a straight row of pins (pin rack) or a toothed rack it turns rotation into straight-line motion
- **motion**: rotate: continuous rotation, unlimited range, as with ordinary gears; slide when a lantern pinion runs along a rack (or a toothed pinion along a pin rack)
- **degrees_of_freedom**: 1: the output angle follows the input angle through the mesh
- **special_behaviour**: 
  - motion conversion (rotary to linear): with a pin rack or toothed rack; 507 Mechanical Movements no. 199 uses a part-pinned lantern to push a frame back and forth (a mangle rack)
  - none of the other clever behaviours: it does not lock, slip or index by itself
- **holding_principle**: not a holding joint (it moves or passes on motion): it transmits rotation, shape (the parts interlock; form-fit): the wheel's teeth push the pins
- **input_output**: Continuous rotation -> continuous rotation (or rotation -> straight-line motion with a rack). Ratio = number of teeth on the wheel / number of pins on the lantern. Shafts: parallel with a spur-type wheel; at right angles when a wheel with teeth on its face or rim drives the lantern, as with a mill's pit wheel driving the wallower on the upright shaft (Wikipedia 'Glossary of mill machinery'; Pede's Mill). Efficiency: ⚑ [uncertain] Wikipedia claims cage gears are more efficient than solid pinions but gives no source; pins that turn on bearings give rolling instead of sliding contact (osamutake), and an industrial rack-and-roller-pinion system is claimed at over 99% (Nexen, via Linear Motion Tips; vendor claim). Contact ratio is fairly low, because the pins mesh mostly on one side of the pitch point (tec-science). Back-drivable: yes, though clock tradition says the lantern should be the driven part, not the driver (Wikipedia 'Gear'; Malcolm Wild via Model Engineer forum); other clockmakers call this rule 'likely a myth'. Mangle wheel: continuous rotation of the pinion -> back-and-forth rotation of the wheel (507 Mechanical Movements nos. 36, 192 and 194). *(⚑ parts need confirming)*
- **power**: passive (no power needed); it only passes on the power put into it. If the drive stops, nothing holds the output
- **removability**: removable: the lantern and wheel slide off their shafts; pins can be knocked out and replaced one at a time
- **reuse_cycles**: many times: the gears can be taken apart and refitted repeatedly, and worn pins (or worn wooden cogs on the mating wheel) can be replaced individually (Pede's Mill; NAWCC forum)
- **tools_needed**: A drill (ideally a drill press with an indexing jig to space the pin holes evenly) and a saw, scroll saw, laser cutter or 3D printer for the discs and the mating wheel; a hammer or vice to press in pins; hex keys for set screws. NAWCC clockmakers note a lantern needs no special gear cutter, only the indexing fixture used to drill the holes
- **seal**: none: it is open, and deliberately lets dirt fall through between the pins (Wikipedia 'Gear')
- **load**: Light to heavy depending on material: wooden lanterns drove millstones, and modern lantern pinions with low-friction pins drive heavy, slow loads such as large telescopes (tec-science). Each pin is held at both ends and loaded in shear rather than bent like a gear tooth, so a lantern can have fewer 'teeth' than an involute pinion (Chief Delphi, CHAOS 131). Strong in twist (torque); the pins' joint with the discs and the thin tips of the mating wheel's teeth are the weak points. Best at low speeds; tec-science says it is not suitable for high-precision drives
- **adjustable**: Partly: the centre distance (depthing) can be set by moving one shaft, and clockmakers correct it to bring the contact to the pitch point (AWCI). The ratio is fixed by the pin and tooth counts
- **play_and_precision**: Noticeable backlash is common: Hessmer's builder follows a British horological standard with clearances that leave visible gaps, and the FRC tutorial notes that extra clearance prevents binding but adds backlash (Model Engineer forum; Chief Delphi). Speed is not perfectly smooth because of the low contact ratio (tec-science). Tolerant of depthing errors, wear and dirt, which is why it suited mills and turret clocks (NAWCC forum; Wikipedia), but the mating wheel's tooth shape only suits the pin count it was designed for (Chief Delphi, CHAOS 131)
- **access_needed**: end of a tube or shaft: the lantern and wheel slide onto shafts; individual pins can be driven out from the side
- **materials**: Historically wood (staves or trundles in wooden discs) and later cast-iron pins, often meshing with wooden cogs so only the cheap, replaceable wooden cogs wear (Pede's Mill); brass or steel rod in clocks (Model Engineer forum). For makers: hardwood dowels, steel dowel pins or shoulder bolts, bushings or small bearings over pins; discs of plywood, MDF, acrylic, aluminium plate or 3D-printed plastic (Chief Delphi; osamutake)
- **maker_difficulty**: easy: the lantern is just two drilled discs and some dowels or pins, and free generators draw the mating wheel for laser cutting, CNC or printing; the only care needed is even hole spacing and the right centre distance

### Making it

- **processes**: 
  - laser cut (discs and mating wheel from plywood, MDF or acrylic)
  - woodwork (drilled discs with dowels; scroll-sawn mating wheel)
  - 3D print (FDM): discs and mating wheel, with printed or metal pins
  - CNC router or mill (aluminium or polycarbonate plate gears)
  - off-the-shelf part: dowels, dowel pins, shoulder bolts and bearings for the pins; industrial roller pinions
- **print_in_place**: no: the lantern and its mating wheel are separate parts fitted on shafts. The lantern itself can be printed as one piece with its pins, but many makers press steel dowel pins, shoulder bolts or bearings into printed or cut discs instead (Chief Delphi)
- **making_tips_3d_printing**: 1) Generate the mating wheel: Rainer Hessmer's free Lantern Gear Builder (MIT licence) outputs SVG for CAD or Inkscape (then DXF); the Chief Delphi tutorial shows how to draw it by hand in CAD (trace the pin centre's epicycloid path, offset it by the pin radius), and team CHAOS 131 shared an Onshape generator for lantern gears, ring gears, racks and pin wheels. 2) Design the wheel for the exact number of pins on its lantern; a wheel for a 5-pin lantern will not run with a 15-pin one (Chief Delphi). 3) Use metal pins where you can: printed discs with pressed-in steel dowel pins are far stronger than printed pins, and bushings or small bearings over the pins make the mesh roll smoothly (Chief Delphi; osamutake notes rotating pins give pure rolling contact). 4) Print discs and the mating wheel flat, with the shaft axis vertical, so each layer traces the full outline (Prusa's guidance on orienting for strength). 5) Clearance: osamutake's printed lantern set uses 0.15 mm radial clearance on the shafts, well-dried PETG, 0.1 or 0.08 mm layers and a random seam; Prusa suggests starting at 0.3 mm between moving parts. The FRC tutorial adds a small extra offset to the tooth outline to prevent binding, at the cost of backlash. 6) Set the centre distance to the sum of the two pitch radii (AWCI) and check it by turning by hand. 7) Laser cutting: the kerf changes the tooth fit, so compensate or test first (Hackaday). 8) PLA softens above about 60 C (Prusa); for loaded mechanisms use PETG, nylon or cut plate with steel pins.
- **off_the_shelf_parts**: Hardwood dowels; steel dowel pins (e.g. 1/8 inch or 3 mm); shoulder bolts; flanged bushings or miniature ball bearings to slip over pins as rollers; retaining rings (e-clips); shafts with set-screw hubs. Industrial versions: roller pinions and matching racks (e.g. Nexen Roller Pinion System, brand), pin racks and pin gear drives. Search terms: 'lantern pinion', 'pin gear', 'pin rack', 'roller pinion', 'dowel pin'.
- **rules_of_thumb**: 
  - Pins sit on the lantern's pitch circle; the mating tooth outline is the epicycloid traced by a pin centre, offset inwards by the pin radius (tec-science; Chief Delphi tutorial).
  - Pitch diameters: D = number of pins (or teeth) x module, or number x pitch / pi, exactly as for ordinary gears (Chief Delphi tutorial).
  - Centre distance = sum of the two pitch radii; contact should cross the line of centres at the pitch point, and depthing that is too shallow or too deep gives rough running (AWCI clockmaking standard).
  - Clock practice for cycloidal lantern pinions: pin diameter about 1.05 x module for 10 pins or fewer, and 1.25 x module for more than 10 pins (Malcolm Wild's book, after W.O. Davis, quoted on the Model Engineer forum).
  - The mating wheel's tooth shape depends on the lantern's pin count, so design each pair together (Chief Delphi, CHAOS 131).
  - For CNC routing, the pins must be larger than the end mill used to cut the wheel's tooth gaps, and choose a pitch that makes the wheel's teeth about as thick as the pins (Chief Delphi, CHAOS 131).
  - Lantern gears have a relatively low contact ratio (tec-science), so keep speeds low and don't expect precision.
  - Clock tradition: let the wheel drive the lantern, not the other way round (Wikipedia 'Gear'; Malcolm Wild via Model Engineer forum) ⚑ [uncertain] (other experienced clockmakers on the same forum call this 'likely a myth').
  - A straight 'rack' of pins driving a gear gives involute-shaped teeth on the gear (tec-science). *(⚑ parts need confirming)*

### When to use it

- **everyday_examples**: 
  - Old windmills and watermills: the wallower on the upright shaft, driven by the pit wheel (Wikimedia Commons 'Cage Gear.png' from Pantigo Windmill; Pede's Mill)
  - Old turret clocks and cheap American clock movements (Wikipedia 'Gear'; Wikimedia Commons turret clock of 1608)
  - Pascal's mechanical calculator of 1642 (Wikimedia Commons file description)
  - Traditional water-lifting irrigation wheels (photos in Wikimedia Commons category 'Lantern gears')
- **when_to_use**: Use a lantern gear when you want a gear you can make with a drill and some dowels or pins, without a gear cutter: laser-cut or woodwork projects, wooden clocks and automata, school models, and robot mechanisms cut from plate (Chief Delphi; NAWCC forum). It suits slow, strong drives, dirty or dusty places (dirt falls through the pins), very few 'teeth' on the small gear, and designs where worn pins or teeth should be easy to replace (Wikipedia; Pede's Mill; tec-science). With bearings on the pins it gives smooth rolling contact.
- **when_not_to_use**: Avoid it for high speeds or precise positioning: it has a low contact ratio and usually some backlash (tec-science); use involute spur or helical gears, or a timing belt. Avoid it where you want to swap in stock gears, because each wheel is designed for one pin count; use standard spur gears. For a long reach between shafts use a chain and sprocket. For very large reductions in a small space use a worm drive or planetary gearbox.
- **environment_limits**: Very tolerant of dirt and dust; millers ran wooden cogs against iron pins with little grease because grease would cause problems in a dusty mill (Pede's Mill). Wooden parts swell and shrink with humidity, which changes the mesh ⚑ [uncertain]. Printed plastic parts: PLA softens above about 60 C and degrades in sunlight (Prusa). Pins pressed into plastic or wood can work loose under vibration. *(⚑ parts need confirming)*
- **safety_notes**: Meshing gears form in-running nip points that can trap fingers, hair or clothing (OSHA machine guarding eTool); the open cage of pins adds more places to catch fingers. Guard powered drives. Small pins and dowels are a choking hazard for small children.
- **common_failures**: 1) Wrong centre distance (depthing): too shallow and the contact points never meet properly; too deep and the gears bind or run rough (AWCI). 2) Mating wheel designed for a different pin count: it jams or runs unevenly (Chief Delphi). 3) Pins loosening, bending or wearing grooves; use hard steel pins, support them at both ends, or fit bushings or bearings so they roll. 4) Wooden or plastic teeth wearing quickly; in mills the wooden cogs were meant to be the replaceable wearing part (Pede's Mill). 5) Uneven hole spacing: drill with an indexing jig or cut the holes by laser or CNC. 6) Laser kerf making teeth too thin or too fat (Hackaday). 7) Too much backlash from generous clearance; reduce the offset once the pair runs freely (Chief Delphi tutorial).
- **related**: 
  - Spur gear pair: involute teeth on both gears; smoother and interchangeable, but needs cut or generated teeth on both
  - Cycloidal gearing: the lantern pinion is a special case of the cycloidal tooth form (tec-science)
  - Chain and sprocket drive: a sprocket's teeth look like a lantern-mating wheel, but the chain wraps round it; a Chief Delphi user found #35 sprockets roughly compatible with a generated lantern gear
  - Rack and pinion: a lantern pinion can run on a rack, or a toothed pinion on a pin rack (Chief Delphi; tec-science)
  - Cycloidal drive: its fixed ring of pins or rollers works like an internal lantern gear
  - Peg wheels (cog-and-rung gearing): pegs meshing with pegs or rungs; the oldest form of gear, tolerant but high-friction (NAWCC forum)
  - Geneva drive: also uses pins, but to give stop-and-go motion
  - Pin-wheel and slotted pinion (507 Mechanical Movements no. 208): pins on the face of a wheel drive a slotted pinion, giving three speeds by sliding the pinion between three circles of pins
  - Roller pinion (e.g. Nexen RPS, brand): an industrial lantern pinion with rollers on bearings running on a special rack, with zero backlash (Linear Motion Tips)
  - Intermittent gear: a part-toothed gear whose driven gear moves in steps with pauses; the mangle wheel and mangle rack (covered here) instead turn steady rotation into back-and-forth motion

### Pictures, videos and models

- **links**: 
  - [Cage Gear.png (Wikimedia Commons, Historic American Buildings Survey)](https://commons.wikimedia.org/wiki/File:Cage_Gear.png): Photo of the wooden lantern (cage) gear inside Pantigo Windmill, Long Island *(licence: Public domain (US National Park Service work))*
  - [Lantern gear - Turret clock from 1608.jpg (Wikimedia Commons, Ezrdr)](https://commons.wikimedia.org/wiki/File:Lantern_gear_-_Turret_clock_from_1608.jpg): Close-up of the lantern pinions in a turret clock of 1608 *(licence: CC BY-SA 3.0)*
  - [Lantern pinion as a special case of cycloidal gear (tec-science)](https://www.tec-science.com/mechanical-power-transmission/cycloidal-gear/lantern-pinion/): Animations of a lantern pinion driving its wheel, how the wheel's tooth outline is constructed, the line of action, and a pin rack giving involute teeth *(licence: link only)*
  - [507 Mechanical Movements no. 199: mangle-rack with lantern pinion](https://507movements.com/mm_199.html): Animated historic drawing of a part-pinned lantern pinion turning continuously and pushing a frame back and forth *(licence: Book public domain (1868); website animation link only)*
  - [Category: Lantern gears (Wikimedia Commons)](https://commons.wikimedia.org/wiki/Category:Lantern_gears): 39 photos of lantern gears in windmills, watermills, clocks, irrigation wheels, a well pump and a mint *(licence: per file (Commons free licences))*
- **make_it_yourself**: 
  - [Lantern Gear Builder (Dr Rainer Hessmer)](http://hessmer.org/gears/LanternGearBuilder.html): Free online tool that generates a lantern pinion and its mating gear by simulating the pins cutting into the wheel; downloads SVG for CAD, Inkscape, laser cutting or 3D printing *(licence: MIT)*
  - [Educational Gear Examples 3 - Lantern (osamutake, Printables)](https://www.printables.com/model/1451958-educational-gear-examples-3-lantern): Printable demonstration set with four kinds of lantern gears (external, rack, internal), a chain and sprocket, and a multiple trammel gear, with explanations and print settings *(licence: CC BY)*
  - [Lantern Gear Design Tutorial (Chief Delphi forum)](https://www.chiefdelphi.com/t/lantern-gear-design-tutorial/394915): Step-by-step CAD method for drawing a lantern pinion and its mating gear, with the pitch formulas and a worked example using 1/8 inch steel dowel pins *(licence: link only)*
  - [Geometry Correct Lantern Gears - In Onshape! (Chief Delphi forum, CHAOS 131)](https://www.chiefdelphi.com/t/geometry-correct-lantern-gears-in-onshape/473561): Thread sharing an equation-driven Onshape generator for lantern gears, lantern ring gears, lantern racks and pin wheels, with design tips and a printed demo *(licence: link only ⚑ [uncertain] (Onshape document licence not checked))* *(⚑ parts need confirming)*
- **diagram_idea**: A cut-away of a birdcage-like lantern (two discs, eight pins) meshing with a larger toothed wheel, with the dotted looping path of one pin's centre drawn on the wheel and the tooth outline shown as that path moved in by the pin's radius, plus labels for the two pitch circles touching at the pitch point.
- **sources**: 
  - https://en.wikipedia.org/wiki/Lantern_gear
  - https://en.wikipedia.org/w/index.php?title=Gear&action=raw
  - https://en.wikipedia.org/wiki/Glossary_of_mill_machinery
  - https://www.tec-science.com/mechanical-power-transmission/cycloidal-gear/lantern-pinion/
  - http://www.hessmer.org/blog/2017/02/19/online-lantern-gear-builder/
  - http://hessmer.org/gears/LanternGearBuilder.html
  - https://www.chiefdelphi.com/t/lantern-gear-design-tutorial/394915
  - https://www.chiefdelphi.com/t/geometry-correct-lantern-gears-in-onshape/473561
  - https://www.awci.com/clockmaking-standard/lantern-pinion-depthing/
  - https://www.model-engineer.co.uk/forums/topic/lantern-pinion/
  - https://mb.nawcc.org/threads/use-a-lantern-gear-in-modern-clocks.3053/
  - https://mb.nawcc.org/threads/wooden-peg-gear-clocks.1229/
  - http://www.pedesmolen.com/en_the_pit_wheel.php
  - https://507movements.com/mm_199.html
  - https://507movements.com/mm_208.html
  - https://507movements.com/toc.html
  - https://commons.wikimedia.org/wiki/Category:Lantern_gears
  - https://commons.wikimedia.org/wiki/File:Cage_Gear.png
  - https://commons.wikimedia.org/wiki/File:Lantern_gear_-_Turret_clock_from_1608.jpg
  - https://hackaday.com/2018/08/02/lasercut-gears-a-learning-experience/
  - https://www.linearmotiontips.com/enhanced-roller-pinion-system-from-nexen/
  - https://api.printables.com/graphql/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://help.prusa3d.com/article/pla_2062
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
  - https://507movements.com/mm_036.html
  - https://507movements.com/mm_192.html
  - https://507movements.com/mm_194.html

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning, straight push or pull
- **shaft_layout**: parallel, at an angle
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: drill and tap, press or vice, power tools, hand tools
- **load_max**: heavy
- **usual_process**: laser cut
- **adjustable**: partly
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, make_it_yourself, rules_of_thumb

## 205 Friction drives and CVTs (friction wheel, variator)

*gear trains, gearboxes & transmissions.* A wheel or roller pressed against a disc, cone or another wheel that drives it by friction with no teeth, so it has no backlash, slips when overloaded and, on cones or discs, can change ratio smoothly

### What it is

- **plain_name**: A wheel, often with a rubber tyre, pressed hard against another wheel, a disc or a cone so it turns it by grip alone, with no teeth; slide the wheel across the disc or along the cone and the output speed changes smoothly
- **term**: Friction drive (friction wheel drive, traction drive) and friction continuously variable transmission (CVT, variator)
- **aliases**: 
  - friction wheels / friction gearing (507 Mechanical Movements #32 and #45)
  - friction roller drive / rolling-contact drive (Nguyen Duc Thang)
  - traction drive (usually hardened steel rollers running in a special traction oil; Wikipedia 'Friction drive'; NASA/Loewenthal)
  - idler-wheel drive / rim drive (record-player turntables; Korf Audio)
  - bottle dynamo / sidewall dynamo (bicycle generator driven by a roller on the tyre)
  - friction-disc transmission / disc-and-wheel drive (early cars such as the Lambert and Metz; snow blowers; Wikipedia)
  - brush-wheels (a disc driving a wheel at a variable radius; 507 Mechanical Movements #28)
  - ball-and-disk integrator (the same disc-and-wheel drive used as a mechanical calculator)
  - cone drive / Evans friction cone / cone-ring transmission
  - variator / speed variator / friction disk, cone, ball or sphere variator (Thang)
  - toroidal CVT (e.g. Nissan Extroid (brand))
  - tilting-ball variator / Kopp variator; NuVinci or Enviolo (brand) bicycle hub
  - infinitely variable transmission (IVT), when the ratio range passes through zero
  - belt CVT / variable-pulley drive / Variomatic (brand) (a V-belt between cone-shaped pulleys: a close relative covered under belt drives)
- **family**: gear trains, gearboxes & transmissions
- **other_families**: torque limiting & slip, clutches & couplings, motion conversion, clamping, magnetic & friction connections
- **one_liner**: A wheel or roller pressed against a wheel, disc, cone, ring or ball passes on rotation purely by friction, so it is smooth, quiet and free of play (backlash), slips instead of breaking when overloaded and, when the contact point can be moved across a disc or cone, gives a smoothly variable speed ratio (a continuously variable transmission).
- **complexity**: A few parts to a small assembly: a driving wheel or roller (often rubber-tyred or with an O-ring), the driven wheel, disc, cone, ring or ball, shafts and bearings, and something that presses them together (a spring, weight, screw or a load-sensing cam or pivot). A variator adds a slide, screw or tilting cage that moves the contact point; industrial traction drives use hardened steel rollers in a sealed case of traction oil (Thang, '2700 Animated Mechanical Mechanisms' sections 1.4 and 1.13; Wikipedia 'Friction drive'; Loewenthal, NASA).
- **how_it_works**: Two smooth rolling surfaces are pressed together, and the grip (friction, or 'traction' when an oil film is involved) at the contact passes the turning force from one to the other; the most force it can pass on is the pressing force times the friction coefficient (Loewenthal, NASA; Wikipedia 'Friction drive'). The speed ratio is the ratio of the rolling radii at the contact, e.g. a 1 mm motor shaft driving a 50 mm rubber-rimmed disc gives 1:50 (Wikipedia). If a wheel presses on the flat face of a disc, the disc's surface moves faster the further out the wheel sits, so sliding the wheel along its shaft changes the ratio smoothly, to zero at the centre and into reverse beyond it; cones, rings, tilting balls and toroidal discs do the same thing with other shapes (Wikipedia 'Friction drive' and 'Continuously variable transmission'; Thang section 1.13). If the load gets too big the contact slips instead of breaking, and the surfaces always creep a little, so the output isn't exactly in step with the input (Wikipedia).

### Finder attributes

- **job**: 
  - change speed or turning force: a small roller driving a big wheel gives a large speed reduction without fine teeth (Wikipedia 'Friction drive')
  - slip or let go when overloaded: the contact slips instead of breaking, which protects the mechanism (Wikipedia)
  - change the kind of motion: a wheel rolling on a track or a rod turns rotation into straight movement (Wikipedia 'Friction drive', wheel and track)
- **motion**: rotate: continuous rotation for fixed-ratio drives; rotate+slide for variators, where the wheel or ring slides across a disc or along a cone (or balls or rollers tilt) to change the ratio while running
- **degrees_of_freedom**: 1 for a fixed-ratio drive: the output turns with the input (apart from small creep and slip). A variator adds a second, separate input (the position of the wheel or the tilt of the balls) that sets the ratio
- **special_behaviour**: 
  - torque-limiting (slips or clicks at a set force/torque): it slips when the load exceeds the grip, set by the pressing force (Wikipedia 'Friction drive'); but early friction drives were also vulnerable to slip damage in an overload, because their pressing force was fixed at assembly (Loewenthal)
  - motion conversion (e.g. rotary to linear): a driven wheel pressed on a track, belt or smooth rod moves it in a straight line (Wikipedia, wheel and track)
  - one-way (moves freely one way, locks the other): some wedge-loaded idler layouts drive only in one direction and freewheel in the other (Thang, 'Friction roller drive 6' and '7')
  - quick-release: lifting the wheel away stops the drive, so it doubles as a clutch; a bicycle bottle dynamo can be completely disengaged (Wikipedia 'Bottle dynamo'; Thang 'Friction roller drive 8': 'can be used as a controllable clutch')
- **holding_principle**: friction or clamping (force-fit): torque passes only through the grip at the pressed contact, not a holding joint (it moves or passes on motion): it is a drive, not a fastening
- **input_output**: Continuous rotation -> continuous rotation (or rotation -> straight line for a wheel on a track or rod). Ratio: fixed, set by the rolling radii (e.g. 1:50 for a 1 mm shaft on a 50 mm rubber rim; Wikipedia), or continuously variable on disc, cone, ball and toroidal variators, including through zero to reverse on disc types (Wikipedia 'Continuously variable transmission'). Efficiency: dry rubber-tyred drives lose energy in the squashed tyre and in slip ⚑ [uncertain: no figure found]; well-designed oil-film traction contacts can reach 99% or more if spin and misalignment are kept small (Loewenthal, NASA); tilting-ball CVTs are typically 70-89% (Wikipedia 'NuVinci'); a belt CVT is about 88% (Wikipedia 'CVT'). Shafts: parallel (cylinders side by side), intersecting (wheel on a disc face or a cone), or in line (toroidal, ball and planetary traction drives). Back-drivable: yes for plain wheel pairs, since friction works both ways; wedge-loaded idler layouts drive only one way (Thang). *(⚑ parts need confirming)*
- **power**: passive (no power needed) in itself; it is usually driven by a motor, and the ratio of a variator can be set by hand, by a screw or by a servo (James Bruton's ball CVT tilts its spheres with servos; Hackaday)
- **removability**: removable: wheels, discs and cones sit on shafts with set screws, keys or press fits and can be taken apart; rubber tyres and O-rings are replaced when worn (Korf Audio)
- **reuse_cycles**: many times for the rigid parts; the rubber or polyurethane tyre is a wear part that hardens, cracks and flattens with age and gets replaced (Korf Audio; Loewenthal)
- **tools_needed**: Hex keys or screwdrivers for set screws and mounting; a way to set the pressing force (spring, adjusting screw or nut); for printed versions, bearings, bolts and O-rings pressed on by hand
- **seal**: none for dry friction drives, which must be kept clean and dry; oil-lubricated traction drives and CVTs run in a closed, oil-filled housing ⚑ [uncertain] *(⚑ parts need confirming)*
- **load**: Light to heavy depending on type. Dry drives with leather, rubber or plastic tyres are for light duty (record players, lawn mowers, hand tools, snow blowers) because the soft tyre's wear and heat limit the power; oil-lubricated hardened steel rollers carry at least ten times more (Loewenthal, NASA), up to e.g. a 373 kW traction reducer for a torpedo and a 75 kW planetary traction drive (Loewenthal). Strong only in the rolling direction; the pressing force loads the shafts and bearings sideways (Korf Audio), and misalignment turns part of the grip into useless side force (Loewenthal).
- **adjustable**: Yes: the pressing force can be set with a spring, screw or nut (507 Mechanical Movements #413 squeezes a rubber disc outward with a nut to increase grip; Thang), and on variators the ratio is adjusted continuously while running by moving the wheel, ring or balls (Thang section 1.13).
- **play_and_precision**: No play (backlash) at all, since there are no teeth (Loewenthal, NASA), and very smooth. But the contact always creeps slightly and slips when overloaded, so it can't be used for exact positioning unless a sensor measures the output (Wikipedia 'Friction drive'). Sensitive to misalignment: shafts that are not parallel cause scraping, side loads and lost grip (Korf Audio; Loewenthal). Out-of-round wheels cause speed flutter (Korf Audio).
- **access_needed**: end of a tube or shaft: wheels, discs and cones slide onto shaft ends; you also need room for the pressing spring or adjuster
- **materials**: Driving wheels faced with rubber, polyurethane, leather, fibre or (historically) paper, running on metal or plastic; 507 Mechanical Movements #32 recommends leather or, better, vulcanised rubber facing. Oil-lubricated traction drives use hardened bearing steel rollers with a traction fluid (Loewenthal). Maker versions: PLA or PETG hubs, discs and cones with an O-ring, rubber band, printed TPU tyre or cast polyurethane tyre (Hackaday tyre tests; Printables CVT models).
- **maker_difficulty**: easy to moderate: a spring-pressed rubber-tyred wheel is easy to make and print; a smooth, reliable variable-ratio drive takes care with alignment, pressing force and tyre material; high-power traction drives are hard, so buy one

### Making it

- **processes**: 
  - 3D print (FDM): hubs, discs, cones and frames, with an O-ring, rubber band or TPU tyre for grip (Printables 'Beltless CVT', 'Simple Model CVT Transmission')
  - laser cut: flat discs and wheel cores ⚑ [uncertain]
  - woodwork: discs and wheels for demonstration models ⚑ [uncertain]
  - off-the-shelf part: rubber-tyred drive wheels, O-rings, bottle dynamos, bike friction-drive kits, belt CVT pulleys, industrial variators and traction drives *(⚑ parts need confirming)*
- **print_in_place**: no: the wheel, disc or cone are printed separately and assembled on shafts and bearings with a spring for pressure and an elastomer tyre for grip (Printables 'Beltless CVT' bill of materials: 608 bearings, linear bearings, a T8 lead screw and motors)
- **making_tips_3d_printing**: 1) Don't rely on bare printed plastic for grip: slick printed plastic is useless for all but the most basic wheels (Hackaday, 2019). Give the driving wheel an elastomer tyre: an O-ring or rubber band in a groove, a printed TPU tyre, or a cast polyurethane tyre. Hackaday (2024) reported a test of PLA, TPU, sprayed-rubber and cast-urethane tyres; readers summarising the video in the comments say cast urethane did best, printed TPU next, and bare PLA and sprayed rubber were poor ⚑ [uncertain]. 507 Mechanical Movements #32 gives the same advice: face one wheel with leather or, better, rubber. 2) Press the wheels together with a spring rather than a fixed screw: springs give fairly constant pressure despite manufacturing errors (Thang, 'Friction roller drive 1'). Better still, pivot the driving wheel so the load pulls it harder into contact (Thang, 'Friction roller drive 9'); industrial traction drives use a torque-sensing loading mechanism for the same reason (Loewenthal). 3) Carry the shafts on ball bearings (e.g. 608 skate bearings), because the pressing force pushes the shafts sideways (Printables 'Beltless CVT'; Korf Audio). 4) Keep shafts parallel or truly square: misalignment causes scraping, side loads and lost grip (Korf Audio; Loewenthal). 5) On disc and cone variators keep the wheel's contact edge narrow or rounded: the inner and outer edges of a wide wheel scrub on the disc, wearing it and wasting power (Wikipedia 'Friction drive'; Loewenthal on 'spin'). 6) Move the wheel with a lead screw or a slider on linear bearings (Printables 'Beltless CVT' uses a T8 lead screw, LM8UU bearings and a stepper motor; Thang's variators use a screw). 7) Make shafts strong: in 'Simple Model CVT Transmission' a printed cone shaft broke along the layer lines and the designer went to 4 walls; a steel shaft through the printed part is safer. 8) Keep the contact clean and dry: oil and grease cut friction (RoyMech's table lists leather on clean metal at 0.6 and on wet metal at 0.4), and many oil additives markedly reduce traction (Loewenthal). 9) Don't leave a rubber wheel pressed on when stopped for long: permanently loaded idler tyres develop flat spots (Korf Audio). 10) Print discs and cones so the contact face is smooth and round; out-of-round wheels make the speed pulse (Korf Audio) ⚑ [uncertain: best print orientation not found]. 11) If it slips, replace a worn or hardened tyre rather than just pressing harder, which overloads bearings (Korf Audio). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: O-rings (nitrile rubber), rubber-tyred wheels and rollers, polyurethane-tread wheels and drive rollers, turntable idler wheels, drive-roller kits for bicycles (friction-drive motor kits), bottle (sidewall) dynamos, ball bearings (608 and similar), linear bearings and lead screws for moving the wheel, compression and extension springs, belt CVT (variable-pitch) pulleys and belts from scooters, industrial speed variators and traction drives, traction fluid ⚑ [uncertain]. *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - The largest force the contact can pass on = friction (traction) coefficient x pressing force; transmitted torque = that force x rolling radius (Loewenthal, NASA: traction coefficient = traction force / normal load). Example arithmetic: with a coefficient of 0.5 you need to press with at least 2 N for every 1 N of drive force.
  - Design with a friction coefficient 20-30% below the highest measured value, as a margin against slip (Loewenthal, NASA).
  - Speed ratio = ratio of the rolling radii at the contact; e.g. a 1 mm motor shaft on a 50 mm rubber-rimmed disc gives 1:50 (Wikipedia 'Friction drive'). On a disc, output speed is proportional to the wheel's distance from the disc centre, zero at the centre and reversed beyond it (Wikipedia 'Continuously variable transmission'; 'Ball-and-disk integrator').
  - Don't over-press: the rolling-contact fatigue life falls with the cube of the contact load (Loewenthal, NASA).
  - Oil-lubricated hardened steel rollers carry at least ten times the load of rubber or reinforced plastic running dry on cast iron (Loewenthal, NASA).
  - For a wedge-type self-loading idler (a free roller wedged between input and output), it only drives if tan((a+b)/2) is less than the friction coefficient, where a and b are the wedge angles (Thang, 'Friction roller drive 6').
  - Efficiency guide: traction contacts with little spin and misalignment can exceed 99% (Loewenthal, NASA); tilting-ball CVTs are typically 70-89% (Wikipedia 'NuVinci continuously variable transmission'); belt CVTs about 88% (Wikipedia 'Continuously variable transmission').
  - Approximate dry friction coefficients: leather on clean metal about 0.6 (0.4 wet), polystyrene on steel 0.3-0.35, nylon on nylon 0.15-0.25; RoyMech warns these are guidance values only (RoyMech 'Coefficients of Friction').
  - Never raise the pressing force to cure slip from a worn or glazed tyre; replace the tyre (Korf Audio).

### When to use it

- **everyday_examples**: 
  - A bicycle bottle dynamo, whose small roller is driven by the side of the tyre (Wikipedia 'Bottle dynamo')
  - Old idler-wheel record players, where a rubber-tyred wheel links the motor shaft to the platter rim (Korf Audio; Loewenthal)
  - Snow blowers and some self-propelled lawn mowers with a friction-disc drive (Wikipedia 'Continuously variable transmission'; Loewenthal)
  - Motorised bicycles, where a rubber-coated roller on the motor drives the bike wheel, and friction-drive scooters such as Go-Peds (Wikipedia 'Friction drive')
- **when_to_use**: When you want a smooth, quiet, backlash-free drive and don't need exact positioning: driving a turntable, a spool or a wheel from a small motor; big speed reductions from a small shaft without fine gears; drives that should slip rather than break when jammed (toys, feeders, winders); a clutch you can engage by pressing the wheels together; and when you want to change speed smoothly while running (disc, cone or ball variator) (Wikipedia 'Friction drive'; Loewenthal). It is also an easy way to drive something round with no shaft access, such as a tyre or a rim.
- **when_not_to_use**: Where exact positioning or timing matters: use gears, a toothed timing belt or a chain instead, or add a sensor on the output (Wikipedia 'Friction drive'). Where high torque must pass through a small, dry printed drive: use gears. In wet, oily or dusty places that ruin grip: use gears or a toothed belt. For a stepped speed choice, step pulleys or a gearbox are simpler and more efficient than a variator. For high-power variable speed, a belt CVT or an electric motor speed controller is usually more practical than a home-made friction variator.
- **environment_limits**: Water, oil and grease reduce grip (RoyMech: leather on metal about 0.6 dry, 0.4 wet), and many oil additives markedly reduce traction (Loewenthal). Rubber tyres age: they harden, crack, warp and lose grip, and last about a decade in record players (Korf Audio); soft friction materials lose flexibility and wear, and their heat and wear limits set the power (Loewenthal). Sustained overloads can break down the oil film in traction drives and cause failure (Loewenthal). Printed PLA parts soften in heat and creep under the constant pressing force ⚑ [uncertain]. Dust on the contact causes slip ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Strong in-running pinch points where the wheel meets the disc or tyre: keep fingers, hair and loose clothing away ⚑ [uncertain]. Pressing springs store energy. A slipping drive can suddenly grip again, and a variator set to zero ratio may start moving when the setting is changed ⚑ [uncertain]. *(⚑ parts need confirming)*
- **common_failures**: 1) Slip from a worn, glazed, hardened or oily tyre; replace the tyre rather than pressing harder (Korf Audio). 2) Flat spots on rubber tyres left pressed on while stopped (Korf Audio). 3) Scraping, squeaking and bearing wear from misaligned shafts or worn idler bearings (Korf Audio). 4) Worn, overheated edges on disc drives because the wheel's inner and outer edges scrub (Wikipedia 'Friction drive'). 5) Slip damage after an overload, because a pressing force set once at assembly can't follow the load (Loewenthal); fix with a load-sensing pivot or cam. 6) Pitting (surface fatigue) of hard rollers that are pressed too hard (Loewenthal). 7) Speed flutter from out-of-round wheels or platters (Korf Audio). 8) Printed shafts snapping along layer lines (Printables 'Simple Model CVT Transmission'). 9) A plastic belt or wheel slipping on smooth plastic cones (Hackaday, Lego CVT).
- **related**: 
  - Belt drives (timing, round and V-belt): pass rotation by friction too (except toothed belts), between shafts further apart; a belt CVT uses cone-shaped pulleys whose gap changes (Wikipedia 'Continuously variable transmission')
  - Spur gear train: positive drive with no slip but with backlash and tooth noise
  - Friction slip clutch (slip coupling): uses friction on purpose as an overload slip
  - Friction clutch (plate or cone clutch): friction to connect and disconnect, not to change ratio
  - Threadless ball screw (rolling-ring drive): tilted rolling rings pressed on a smooth shaft turn rotation into straight motion by friction
  - Capstan cable drive: a zero-backlash drive using a cable wrapped on drums instead of pressed wheels
  - Magnetic coupling and magnetic gear: pass torque with no contact at all
  - Planetary gear set: used in 'eCVT' hybrid transmissions to vary the ratio with gears and a motor (Wikipedia)
  - Anti-backlash gear: another way to remove backlash while keeping teeth
  - Rack and pinion: the toothed way to make straight motion from rotation, where a roller on a bar can slip

### Pictures, videos and models

- **links**: 
  - [TEZ-Reibradgetriebe 7271.JPG (Wikimedia Commons, by Karl Gruber)](https://commons.wikimedia.org/wiki/File:TEZ-Reibradgetriebe_7271.JPG): Photo of a friction-wheel transmission (Reibradgetriebe) on a textile machine at the Textilzentrum Haslach, Austria *(licence: CC BY-SA 4.0)*
  - [28. Brush-wheels (507 Mechanical Movements)](https://507movements.com/mm_028.html): 1868 drawing and animation of a wheel driven by the face of a disc, with the speed changed by moving the wheel towards or away from the centre; notes that facing with india-rubber increases grip *(licence: book public domain; website animation link only)*
  - [Friction cone variator 1 (Nguyen Duc Thang, thang010146, YouTube)](https://www.youtube.com/watch?v=nCav0rm53uc): CAD animation of a spring-pressed roller moved along a friction cone by a screw to change output speed (description from Thang's '2700 Animated Mechanical Mechanisms' PDF, section 1.13) *(licence: link only (standard YouTube licence))*
  - [Tilting ball variator.svg (Wikimedia Commons, by Sleske)](https://commons.wikimedia.org/wiki/File:Tilting_ball_variator.svg): Schematic of a tilting-ball variator, as used in a type of CVT *(licence: CC BY-SA 3.0)*
  - [Evans friction cone - Hagley Aug 2009.jpg (Wikimedia Commons, by Ukexpat)](https://commons.wikimedia.org/wiki/File:Evans_friction_cone_-_Hagley_Aug_2009.jpg): Photo of an Evans friction cone speed changer: two opposed cones with a movable belt, driven from a water turbine in the Hagley Museum machine shop *(licence: CC BY-SA 3.0 (also GFDL 1.2 or later))*
- **make_it_yourself**: 
  - [Beltless CVT (cndewil, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1290012-beltless-cvt): Motorised CVT demo that uses a wheel instead of a belt, moved by a T8 lead screw on linear bearings, with 608 bearings, a DC gear motor and a NEMA 17 stepper *(licence: CC BY)*
  - [Simple Model CVT Transmission (cakeman435, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1003262-simple-model-cvt-transmission): 99% printed hand- or drill-driven cone CVT: a rubber band between two opposed cones is slid up and down to change the output speed *(licence: CC BY-NC)*
  - [Friction wheel for small stepper motor 24(28)-BYJ-48 (mnentwig, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1565754-friction-wheel-for-small-stepper-motor-2428-byj-48): Parametric friction wheel (FreeCAD Python macro included) to couple a small stepper motor loosely to another wheel *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [HUANGYAN920 Mechanical: interactive mechanism library (entries FRICTION-WHEEL no. 43 and FRICTION-DISK no. 97)](https://huangyan920.github.io/Mechanical/): Browser animations with sliders for a friction-wheel drive and a friction-disc variable-speed drive *(licence: MIT (code))*
  - [Ball CVT Drives Robot From A Constant Speed Motor (Hackaday, about James Bruton's build)](https://hackaday.com/2021/06/29/ball-cvt-drives-robot-from-a-constant-speed-motor/): See-it-built article and video of a tilting-sphere CVT on an RC vehicle: 1:1 at 45 degrees, reverse by tilting the other way, and neutral through a hole in the sphere *(licence: link only)*
- **diagram_idea**: A small rubber-tyred wheel pressing on the flat face of a large disc, shown in three positions (near the rim: fast; halfway: slower; at the centre: stopped; past the centre: reversed), with a spring pushing the wheel onto the disc and an arrow showing the slip that happens when the load is too big.
- **sources**: 
  - https://en.wikipedia.org/wiki/Friction_drive
  - https://en.wikipedia.org/wiki/Continuously_variable_transmission
  - https://en.wikipedia.org/wiki/Ball-and-disk_integrator
  - https://en.wikipedia.org/wiki/Bottle_dynamo
  - https://en.wikipedia.org/wiki/NuVinci_continuously_variable_transmission
  - https://ntrs.nasa.gov/api/citations/19830011852/downloads/19830011852.pdf
  - https://507movements.com/mm_028.html
  - https://507movements.com/mm_032.html
  - https://507movements.com/mm_045.html
  - https://507movements.com/mm_413.html
  - https://507movements.com/toc.html
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://www.youtube.com/watch?v=nCav0rm53uc
  - https://www.youtube.com/watch?v=HJutD78Av4A
  - https://www.youtube.com/watch?v=V1Y7ayNun-4
  - https://www.youtube.com/watch?v=HkjnM-g-dQ0
  - https://www.youtube.com/watch?v=04jEqln4SRI
  - https://www.youtube.com/watch?v=KXb1gDpeq-Y
  - https://korfaudio.com/blog94
  - https://roymech.org/Useful_Tables/Tribology/co_of_frict.html
  - https://hackaday.com/2024/10/24/3d-printed-tires-by-the-numbers/
  - https://hackaday.com/2019/01/30/3d-printed-wheels-get-some-much-needed-grip/
  - https://hackaday.com/2021/06/29/ball-cvt-drives-robot-from-a-constant-speed-motor/
  - https://hackaday.com/tag/cvt/
  - https://commons.wikimedia.org/wiki/File:TEZ-Reibradgetriebe_7271.JPG
  - https://commons.wikimedia.org/wiki/File:Evans_friction_cone_-_Hagley_Aug_2009.jpg
  - https://commons.wikimedia.org/wiki/File:Tilting_ball_variator.svg
  - https://huangyan920.github.io/Mechanical/
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning, straight push or pull
- **shaft_layout**: parallel, at an angle, in line
- **overload_response**: slips and keeps going
- **clicks**: silent
- **tools**: hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, input_output, making_tips_3d_printing, off_the_shelf_parts, processes, safety_notes, seal

## 206 Pulley system (block and tackle, differential hoist)

*gear trains, gearboxes & transmissions.* Ropes running over several pulleys so a small pull lifts a big load; a differential chain hoist also holds the load by itself

*Also covers:* Also covers low-friction rings as a pulley with no moving parts.

### What it is

- **plain_name**: A rope run back and forth between two sets of pulley wheels, so pulling a long length of rope gently lifts a heavy load a short way; a chain version (chain hoist) holds the load by itself when you let go
- **term**: Block and tackle (compound pulley system, tackle or purchase); differential chain hoist (Weston differential pulley)
- **aliases**: 
  - tackle / purchase / pulley system / compound pulley (Wikipedia 'Block and tackle')
  - pulley block / block (a frame holding one or more pulley wheels, called sheaves)
  - gun tackle (2:1), luff tackle (3:1), double tackle (4:1), gyn tackle (5:1), threefold purchase (6:1) (Wikipedia)
  - haul system / mechanical advantage (MA) system, e.g. '3:1 haul system' (rope rescue and climbing; Petzl)
  - snatch block / swing-cheek block (opens to take a rope in mid-line; Wikipedia)
  - fiddle block, becket block (sailing block types) ⚑ [uncertain]
  - differential pulley / Weston differential pulley / differential hoist / chain fall / dumb pulley (Wikipedia 'Differential pulley')
  - chain hoist / chain block / manual chain hoist (today usually geared, with a load brake; Global Industrial manual)
  - polyspast (European name, e.g. German 'Flaschenzug'; Printables 'Pulley block Z-axis (Polispast)') ⚑ [uncertain] *(⚑ parts need confirming)*
- **family**: gear trains, gearboxes & transmissions
- **other_families**: tensioning, reels & take-up, cord, strap, webbing & textile hardware, self-locking & anti-back-drive, one-way & ratchet, brakes, dampers & speed control
- **one_liner**: Two blocks of pulleys with one rope threaded back and forth between them, so the load hangs on several rope parts and a pull of only a fraction of its weight lifts it (at the cost of pulling that many times more rope); the differential chain hoist uses two joined chain wheels of slightly different size to get a very large gain and, because its friction is high, holds the load by itself.
- **complexity**: A small assembly: a fixed (standing) block and a moving (running) block, each with one or more sheaves (grooved pulley wheels) on an axle between side plates (cheeks), with a hook, shackle, eye or becket for tying the rope end, plus the rope itself. A differential hoist has an upper block with two chain wheels of slightly different size joined together, a lower block with one pulley and a hook, and an endless chain (Wikipedia 'Differential pulley'). A modern manual chain hoist has a hand chain and hand wheel, a gear reduction, a load-chain sprocket, welded load chain, hooks with latches, and a load brake made of friction plates, a ratchet disc and a pawl (Global Industrial manual chain hoist manual).
- **how_it_works**: The rope tension is the same all along the rope, so if the moving block and its load hang from n parts of the rope, each part carries 1/n of the load and you only need to pull with 1/n of the weight; in exchange you pull n metres of rope for every metre the load rises (Wikipedia 'Block and tackle'; Petzl). Friction in each sheave eats some of this gain, so real tackles give less than n (Wikipedia; CMC). In a differential hoist an endless chain runs round a big and a slightly smaller chain wheel fixed together and down round a hanging pulley; each turn winds in chain on the big wheel while letting out almost as much from the small one, so the load rises only by half the difference, giving a gain of 2R/(R - r) (Wikipedia 'Differential pulley'). Because this gain comes with a lot of friction (efficiency below 50%), the load can't run the hoist backwards, so it stays put when you let go (Wikipedia; NPTEL 'Reversibility of a machine'). Modern chain hoists get the same result with gears and a load brake that clamps shut and catches on a ratchet whenever you stop pulling (Global Industrial manual). Where weight and cost matter more than efficiency, a low-friction ring can stand in for a pulley: a smooth, grooved ring that the rope simply slides round, with no moving parts. Round a 180-degree bend Practical Sailor measured 80-83% efficiency with a small 12-plait Dyneema line but only 50-60% with a fat polyester double braid, against about 95-97% for ball-bearing blocks (Practical Sailor 'Sizing Up Improvements In Low Friction Rings').

### Finder attributes

- **job**: 
  - change speed or turning force: trades a long, light pull for a short, strong one (the 'force' version of a speed change)
  - tighten and hold tension: hauling lines and rigging tight, e.g. on boats (Wikipedia 'Block and tackle')
  - stop it moving back (one-way): a differential hoist holds its load by friction, and a chain hoist's ratchet and pawl stop the load running down (Wikipedia 'Differential pulley'; Global Industrial manual)
  - slow it, stop it or keep its speed steady: a chain hoist's load brake lets a load down under control (Global Industrial manual)
- **motion**: rotate+slide: the sheaves (pulley wheels) turn while the rope or chain, the moving block and the load travel in straight lines; the moving block can travel until the two blocks meet
- **degrees_of_freedom**: 1: the height of the load is tied to how much rope or chain has been pulled (ignoring rope stretch and the load swinging)
- **special_behaviour**: 
  - self-locking (holds under load, won't back-drive): a differential hoist whose pulley sizes are close enough keeps the load in place until the chain is pulled (Wikipedia 'Differential pulley'); any lifting machine with an efficiency below 50% is self-locking (NPTEL)
  - one-way (moves freely one way, locks the other): in a geared chain hoist a pawl drops into the ratchet disc as soon as you stop pulling (Global Industrial manual)
  - hand-release only (locks under load, releases when a person operates it): to lower, you pull the hand chain the other way, which releases the ratchet and friction plates (Global Industrial manual)
  - tensioning (takes up slack and holds): a plain block and tackle only holds if the rope is tied off, cleated or caught by a rope grab ('progress capture'; Alpinesavvy)
  - quick-release: a snatch (swing-cheek) block opens so it can be put on a rope in mid-line without threading the end (Wikipedia 'Block and tackle')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it multiplies a pull
  - friction or clamping (force-fit): the rope is held by a cleat, knot or rope clamp; a chain hoist's brake uses friction plates; a differential hoist holds by its own internal friction (Global Industrial manual; Wikipedia)
  - shape (the parts interlock; form-fit): chain links sit in pockets of the chain wheels, and the pawl locks into ratchet teeth (Wikipedia 'Differential pulley'; Global Industrial manual)
- **input_output**: Straight pull on the rope or hand chain -> straight lift or haul of the load (linear to linear). Ideal force gain = number of rope parts supporting the moving block, and the rope moves that many times faster than the load (Wikipedia 'Block and tackle'); common tackles give 2:1 to 6:1. Efficiency: every sheave loses some force; Petzl says pulley efficiencies range from about 50% to 98%, a carabiner used as a pulley is about 50% (CMC), and a 3:1 system with 85%-efficient pulleys really gives about 2.57:1 (CMC). Using Wikipedia's sheave friction factor K = 1.04 (roller-bearing sheaves) a 4:1 tackle works out about 91% efficient (real gain about 3.6); with K = 1.09 (plain-bearing sheaves, wire rope) about 81% (real gain about 3.2) (calculated from the Wikipedia formula). Differential hoist: ideal gain 2R/(R - r), e.g. 30:1 with 15- and 14-pocket chain wheels (Wikipedia 'Differential pulley'). Geared hand chain hoists: e.g. a 1 t hoist needs 310 N on the hand chain and a 5 t hoist 400 N (Global Industrial manual), an effective gain of roughly 32:1 and 120:1 (arithmetic). Shafts: not applicable; extra fixed pulleys change the direction of pull ('rove to disadvantage') at the cost of more friction (Wikipedia). Back-drivable: a plain block and tackle yes, the load runs back unless the rope is held (though a very high-friction tackle may not release easily; Wikipedia); a differential hoist no if its efficiency is below 50% (NPTEL; Wikipedia); a geared chain hoist no, its brake holds (Global Industrial manual).
- **power**: passive (no power needed): pulled by hand; powered hoists (electric, air or hydraulic) do the same job (Wikipedia 'Hoist (device)')
- **removability**: removable: blocks hang from hooks, shackles, carabiners or slings and the rope is tied or clipped on, so everything comes apart; a snatch block can be taken off without unthreading the rope (Wikipedia)
- **reuse_cycles**: effectively unlimited for the blocks with inspection; ropes, chains and hooks wear and are inspected and replaced: retire a cut or heavily abraded rope (CERTEX), replace stretched, bent or worn chain and hooks, never repair the load chain (Global Industrial manual)
- **tools_needed**: None to rig a rope tackle beyond knots (Printables 'Block and Tackle' uses a buntline hitch to tie the rope to the blocks); shackles, carabiners or slings to hang it; spanners for bolted or printed blocks; none to operate a chain hoist
- **seal**: none: open sheaves and rope; chain hoists keep their brake dry inside a housing and oil only the chain (Global Industrial manual)
- **load**: Light to heavy. Maker-printed blocks have been tested with about 50-120 kg (Printables 'Block and Tackle': 50 kg many times, noises at 100 kg; 'Strong Single and Double Pulley': tested with 120 kg); manual chain hoists are sold from 0.5 to 20 t (Global Industrial manual). Strong only in straight tension along the rope; avoid side pulls and off-centre loads and always lift vertically (Global Industrial manual). The anchor holding the fixed block carries the load plus the hauling force: a single pulley holding 100 kg with the rope pulled downwards carries 200 kg (Petzl).
- **adjustable**: Yes: the load height or line tension is set by how much rope is hauled in; the force gain can be changed by re-reeving with more or fewer rope parts, or swapping which block is fixed ('rove to advantage' or 'to disadvantage') (Wikipedia 'Block and tackle').
- **play_and_precision**: Not a precision device. Rope stretch lets the load bounce and sink: nylon stretches a lot, polyester and high-modulus fibres much less (CERTEX), and friction makes the load stick and then jump ⚑ [uncertain]. Rope must run straight into the sheave groove: groove width at least 1.1 x rope diameter (ANSI/ASSP A10.48, via Inside Towers). On chain hoists pull the hand chain in the plane of the wheel, never at a slant, and lift vertically (Global Industrial manual). *(⚑ parts need confirming)*
- **access_needed**: not applicable: it needs a strong anchor point above or ahead of the load and room for the rope; nothing has to reach through a panel
- **materials**: Rope: polyester, nylon, polypropylene, aramid (Kevlar) or high-modulus polyethylene (Spectra) fibre rope, or steel wire rope (CERTEX; Mazzella). Blocks: wood, steel, aluminium or plastic, with sheaves on plain bushes or on ball or roller bearings (Wikipedia gives friction factors for both). Chain hoists: welded hardened steel load chain (Global Industrial manual). Maker versions: PLA or PETG printed blocks with 608 skate bearings and M5 or M8 bolts, with 4 mm paracord or 6-12 mm rope (Printables models).
- **maker_difficulty**: easy: printed blocks with skate bearings and bolts work well for light loads such as garage storage or demonstrations; for lifting heavy things, or anything over people, buy rated blocks or a chain hoist

### Making it

- **processes**: 
  - 3D print (FDM): blocks, cheeks and sheaves, usually with 608 ball bearings and steel bolts (Printables 'Block and Tackle', 'Strong Single and Double Pulley')
  - woodwork: traditional wooden blocks ⚑ [uncertain]
  - CNC: machined aluminium sheaves and side plates ⚑ [uncertain]
  - off-the-shelf part: pulley blocks, rescue pulleys, snatch blocks, manual chain hoists, lever hoists, rope and chain *(⚑ parts need confirming)*
- **print_in_place**: partly: fully printed pulleys exist, such as a block and tackle with printed herringbone gear-bearing pulleys (Printables, DrJones) and a 100% printed pulley (Printables, Meister Edel), but they have more friction than ball-bearing sheaves; printed bearings were 'not effective for any meaningful loads' in one parametric design (Printables 'Block and Tackle'). Most designs use 608 bearings and bolts. Whether the gear bearings are printed already assembled was not checked ⚑ [uncertain] *(⚑ parts need confirming)*
- **making_tips_3d_printing**: 1) Use real ball bearings in the sheaves: in Vincent Sanders' parametric 'Block and Tackle' (Printables) printed bearings worked but had very high friction, while 608 bearings let a 4:1 double tackle with 4 mm paracord hold 50 kg several times. DrJones's printed gear-bearing 4:1 tackle needed 5.1 kg of pull to lift 15 kg, only about 3:1 in practice (Printables). 2) Print strong: Sanders used PLA, 0.2 mm layers, 6 perimeters, 6 top and bottom layers and 15% cubic infill; floano's pulley (PETG, 0.2 mm layers, 5 walls) was tested with 120 kg; Meister Edel suggests about 6 perimeters and 100% infill (all Printables). 3) Let steel bolts take the load and make the plastic squeeze towards the bolt rather than tear out at the end of a hole (floano, Printables); print the side plates lying flat, which needs no supports. 4) Size the groove for the rope: the rope must sit fully inside the sheave (Sanders); groove width at least 1.1 x rope diameter, and sheave diameter at least 6 x rope diameter for double-braid and kernmantle rope or 10 x for three-strand rope (ANSI/ASSP A10.48, via Inside Towers). Sanders thinks a larger bearing (6002 or 6003) suits 6 mm rope better than a 608. 5) Reeve carefully: in a threefold purchase the blocks end up at 90 degrees to each other, which avoids wear and friction when they are pulled close together (Sanders). Add a sheave guard so the rope can't jump off (an option in Sanders' design). 6) For printed plain bearings add oil holes and use oil (Meister Edel used bike chain oil). 7) PLA is fine for short loads; use PETG or a stronger material for loads that stay on (Meister Edel), because PLA creeps ⚑ [uncertain]. 8) Tie off with a secure knot such as a buntline hitch (Sanders), remembering that knots reduce rope strength (CERTEX). 9) Printed blocks come with no guarantee: test them well above your load and never use them over people (Sanders; Global Industrial manual). *(⚑ parts need confirming)*
- **off_the_shelf_parts**: Pulley blocks (single, double and triple sheave), snatch blocks (swing-cheek blocks), fiddle and becket blocks ⚑ [uncertain], rescue or rope pulleys with ball bearings, pulleys with built-in rope grabs (progress capture pulleys), rope clamps and ascenders, cam cleats and clam cleats, manual chain hoists (chain blocks), lever hoists (come-alongs), shackles, carabiners, round slings, wire rope and wire rope clips, polyester double-braid or kernmantle rope, 608 bearings and M5 or M8 bolts for printed blocks. Low-friction rings (LFRs) as a light, cheap substitute for blocks on rarely adjusted lines (Practical Sailor). *(⚑ parts need confirming)*
- **rules_of_thumb**: 
  - Ideal force gain = number of rope parts supporting the moving block; you pull that many metres of rope for each metre of lift (Wikipedia 'Block and tackle'; Petzl: 3 m of rope for 1 m of lift on a 3:1).
  - Friction adds up with every sheave: efficiency = (K^N - 1) / (K^S x N x (K - 1)), with N the ideal gain, S the number of sheaves and K about 1.04 for roller-bearing sheaves or 1.09 for plain-bearing sheaves with wire rope (Wikipedia 'Block and tackle'). Adding sheaves beyond a point doesn't help (Wikipedia).
  - Real pulleys are about 50-98% efficient (Petzl); a carabiner used instead of a pulley is about 50% (CMC); a 3:1 with 85% pulleys gives 2.57:1 (CMC).
  - Differential hoist gain = 2R / (R - r) = 2 x P1 / (P1 - P2), where P1 and P2 are the pocket counts of the two chain wheels; 15 and 14 pockets give 30:1 (Wikipedia 'Differential pulley').
  - A lifting machine holds its load by itself (self-locking) if its efficiency is below 50%, and runs back if it is above 50% (NPTEL 'Reversibility of a machine').
  - Sheave pitch diameter at least 6 x rope diameter for double-braid and kernmantle rope, 10 x for three-strand; groove width at least 1.1 x rope diameter (ANSI/ASSP A10.48, via Inside Towers).
  - Wire rope lasts much longer on bigger sheaves: raising D/d from 26 to 35 nearly doubles its bending life (relative life 17 to 32), and reverse bends between sheaves speed up fatigue (Mazzella).
  - Rope safe working load = minimum breaking strength / safety factor, with factors of 5 to 12 for non-critical uses, reduced further for lifting over people, shock or sustained loads; knots lower the strength significantly (CERTEX, citing the Cordage Institute).
  - The anchor for the fixed block carries the load plus your pull, e.g. 200 kg for a 100 kg load pulled down through one pulley (Petzl).
  - Low-friction rings instead of sheaves: because of their friction, about 8:1 is the practical limit for a ring tackle with Dyneema line and 4:1 with polyester; for more purchase, build the first 4:1 with rings and pull its tail with a small ball-bearing tackle (Practical Sailor 'Sizing Up Improvements In Low Friction Rings'). Rings 'have no place in sheet tackles or other lines that are adjusted frequently through a wide range' (Practical Sailor 'Low-friction Rings').

### When to use it

- **everyday_examples**: 
  - Sailing boats, where tackles trim sails and haul lines (Wikipedia 'Block and tackle')
  - A garage chain hoist lifting a car engine (Wikipedia 'Differential pulley')
  - A crane hook hanging from many parts of wire rope (Wikipedia 'Block and tackle': cranes and drilling rigs)
  - Ceiling storage lifts and clothes airers raised by rope and pulleys (Printables 'Pulley system with drill powered winch -> ceiling storage')
- **when_to_use**: When you need to lift or haul something much heavier than you can pull, slowly and over a short distance, and there is a strong anchor above or ahead of the load: lifting an engine, hauling a boat or a log, tensioning a line, raising storage or a hammock. Use a chain hoist when the load must stay put when you let go. Use a rope tackle with a cleat or rope grab when you want something light and portable, and ball-bearing pulleys to keep the friction low.
- **when_not_to_use**: Don't lift people or loads over people with it unless it is rated equipment used by trained people (Global Industrial manual: never lift people; Petzl: specific training required). It is a poor choice for long lifts at high gain, because the rope length multiplies (Wikipedia), and for precise positioning (use a lead screw or rack instead). For long hauls a winch or windlass that stores the rope on a drum is easier; for pulling horizontally a lever hoist (come-along) is handy; for small tension adjustments a turnbuckle or ratchet strap is simpler.
- **environment_limits**: All synthetic ropes degrade in sunlight, and polypropylene far more than polyester or nylon; store ropes out of direct sun and away from strong acids and alkalis (CERTEX). Keep a chain hoist's brake dry: no oil or grease on the friction surfaces (Global Industrial manual). Printed blocks: PLA only for short loads, PETG or stronger for loads that stay on (Printables, Meister Edel). Wire rope fatigues on small sheaves (Mazzella). How much nylon rope loses when wet was not checked ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Never stand or walk under a suspended load, and never lift people with a hoist (Global Industrial manual). A rope that breaks under load snaps back at high speed; stay out of its path (CERTEX). The anchor carries more than the load (Petzl), so check it. Keep fingers, gloves and hair away from where the rope runs onto a sheave (pinch point) ⚑ [uncertain]. Don't leave a load hanging in the air and check the brake before each lift (Global Industrial manual). Printed blocks carry no warranty (Printables, Sanders). Printed rope rings are 'for light rigging and organization, not life-safety loads' (MarineLab3D, Printables). *(⚑ parts need confirming)*
- **common_failures**: 1) Too much friction, so the real gain is far below the rope count (printed bearings, carabiners as pulleys, many sheaves): use ball-bearing sheaves (Printables; CMC; Wikipedia). 2) Rope jumping off a sheave or rubbing on the cheeks from side pulls or a groove that's too narrow: add a sheave guard and size the groove (Printables, Sanders; ANSI/ASSP A10.48). 3) Rope wear and chafe when the blocks twist or are pulled together (chocked); reeve so the blocks sit at 90 degrees (Sanders). 4) Printed blocks cracking near their limit (noises at about 100 kg with 6 mm rope; Sanders). 5) Chain hoist brake slipping because the friction plates are oily, glazed or worn: keep the brake dry and check it for slippage before each use (Global Industrial manual). 6) Twisted chain or a jammed chain wheel from off-angle pulling or letting the load touch the hoist (Global Industrial manual). 7) Stretched or cracked hooks and worn or stretched chain (Global Industrial manual). 8) Knot slipping or weakening the rope (CERTEX). 9) Anchor failure from the extra load of the hauling force (Petzl).
- **related**: 
  - Capstan and windlass (incl. differential windlass): wind rope onto a drum instead of multiplying rope parts; the Chinese windlass is the rope version of the differential hoist (Wikipedia 'Differential pulley')
  - Belt drives: pulleys used to pass rotation between shafts rather than to multiply a pull
  - Cam cleat and clam cleat: hold the tail of the rope once the load is lifted
  - Rope grab and ascender (cam rope clamp): 'progress capture' so a haul system doesn't slip back (Alpinesavvy)
  - Ratchet and pawl: the one-way catch inside chain hoists
  - Worm drive: a self-locking gear used in some hoists and winches ⚑ [uncertain]
  - Multistage slide rigging (cascade and continuous string rigging): uses the same pulley-and-cable principle to move telescoping slides
  - Whippletree (load-equalising lever): shares a pull between several points, as a moving pulley shares the load between rope parts
  - Spring balancer (gravity compensation): holds a load's weight with a spring instead of multiplying a pull
  - Bowden cable: carries a pull round bends with a sleeve instead of pulleys
  - Tensioning and adjustable hitches: the trucker's hitch ties a rope pulley into the line itself, giving a pulley-like gain with no blocks *(⚑ parts need confirming)*

### Pictures, videos and models

- **links**: 
  - [Tackles.png (Wikimedia Commons, by Welkinridge)](https://commons.wikimedia.org/wiki/File:Tackles.png): Diagram of common ways of rigging a tackle with their names (gun, luff, double, gyn tackle, threefold purchase) *(licence: CC BY-SA 3.0 (also GFDL 1.2 or later))*
  - [Chain hoist.svg (Wikimedia Commons, by Cmglee)](https://commons.wikimedia.org/wiki/File:Chain_hoist.svg): Diagram of the principle of a differential chain hoist, with the two joined chain wheels and the hanging pulley *(licence: CC BY-SA 3.0 (also GFDL 1.2 or later))*
  - [Pulley system (Walter Fendt, Apps on Physics HTML5)](https://www.walter-fendt.de/html5/phen/pulleysystem_en.htm): Interactive simulation: choose the number of pulleys and the weight, raise the load with the mouse and see a spring balance show the rope tension *(licence: link only)*
  - [Chain Hoists - How they work - Differential - Chain Fall - Lever/Roller Chain (Eight Wheels Rollin', YouTube)](https://www.youtube.com/watch?v=sC3jY-4E_A8): Video explaining differential chain falls and lever/roller-chain hoists (title and channel checked with YouTube oEmbed; video not watched) *(licence: link only (standard YouTube licence))*
  - [Three snatch blocks.jpg (Wikimedia Commons, by DuaneDuane2)](https://commons.wikimedia.org/wiki/File:Three_snatch_blocks.jpg): Photo of three snatch blocks on the ship Star of India, one shown open to take a rope in mid-line *(licence: CC BY-SA 4.0)*
- **make_it_yourself**: 
  - [Block and Tackle (Vincent Sanders, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/612084-block-and-tackle): Parametric OpenSCAD block and tackle with standing and running blocks, sheaves on 608 bearings, sheave guards and a labelled nomenclature diagram; 4:1 and 6:1 examples tested to 50 and 100 kg *(licence: CC BY)*
  - [pulley system (block and tackle) with gear bearing pulleys (DrJones, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/283735-pulley-system-block-and-tackle-with-gear-bearing-p): Fully printed 4:1 block and tackle with herringbone gear-bearing pulleys and printed screw bolts; lifting 15 kg took 5.1 kg of pull *(licence: CC BY)*
  - [Strong Single and Double Pulley for rope (608 bearings) (floano, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/440677-strong-single-and-double-pulley-for-rope-608-beari): Single and double pulleys for rope up to 12 mm with two 608 bearings per wheel and M8 bolts; tested with 120 kg *(licence: CC BY-NC-SA)*
  - [Project: Pulley systems V2 (Michal Fanta, Printables) (URL appeared in search results; details from Printables API)](https://www.printables.com/model/6380-project-pulley-systems-v2): Classroom project: parametric single or multiple printed pulleys with a planetary gear bearing, for demonstrating how pulley blocks change the force needed *(licence: CC BY)*
  - [HUANGYAN920 Mechanical: interactive mechanism library (entry ROPE-PULLEY no. 225)](https://huangyan920.github.io/Mechanical/): Browser animation of a fixed and moving pulley set lifting a load *(licence: MIT (code))*
  - [Low-Friction Rope Ring / Lashing Thimble - Sized to Your Line (Parametric) (MarineLab3D, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1772939-low-friction-rope-ring-lashing-thimble-sized-to-yo): A printable grooved low-friction ring (soft-shackle or lashing-thimble style); the default fits 4-16 mm line; the designer suggests CF-nylon or nylon PA12 (PETG for light loads), 4 or more walls, 60-100% infill and 0.2 mm layers, and notes printed rings are 'for light rigging and organization, not life-safety loads'. Read through the Printables public API. *(licence: CC BY-NC-ND (Creative Commons Attribution-NonCommercial-NoDerivatives))*
- **diagram_idea**: Side-by-side drawings of a 1:1 single fixed pulley, a 2:1 moving pulley and a 4:1 double tackle, with each supporting rope part labelled with its share of the load (e.g. 25 kg each for 100 kg) and a ruler showing 4 m of rope pulled for 1 m of lift, plus an inset of a differential chain hoist's two joined chain wheels of slightly different size.
- **sources**: 
  - https://en.wikipedia.org/wiki/Block_and_tackle
  - https://en.wikipedia.org/wiki/Pulley
  - https://en.wikipedia.org/wiki/Differential_pulley
  - https://en.wikipedia.org/wiki/Hoist_(device)
  - https://www.petzl.com/US/en/Professional/How-to-calculate-mechanical-advantage?ActivityName=Technical-rescue
  - https://www.cmcpro.com/actual-ma-systems/
  - https://www.alpinesavvy.com/blog/introduction-to-ma-systems
  - https://insidetowers.com/cell-tower-news-rope-and-rigging-compatibility-part-two-of-two/
  - https://www.mazzellacompanies.com/learning-center/why-sheave-design-is-critical-to-wire-rope-service-life/
  - https://www.certex.com/fiber-rope/general-information-rope-safety/
  - https://static.globalindustrial.com/products/pdf/4615-global/241638_Manual.pdf
  - https://archive.nptel.ac.in/content/storage2/courses/112103109/chap2/slides/lec3_slides/slide16.htm
  - https://www.walter-fendt.de/html5/phen/pulleysystem_en.htm
  - https://www.youtube.com/watch?v=sC3jY-4E_A8
  - https://commons.wikimedia.org/wiki/File:Tackles.png
  - https://commons.wikimedia.org/wiki/File:Chain_hoist.svg
  - https://commons.wikimedia.org/wiki/File:Three_snatch_blocks.jpg
  - https://www.printables.com/model/6380-project-pulley-systems-v2
  - https://www.printables.com/model/677445-strong-pulley-100-3d-printable-scaleable-durable
  - https://huangyan920.github.io/Mechanical/
  - https://api.printables.com/graphql/
  - https://www.practical-sailor.com/sails-rigging-deckgear/sizing-up-improvements-in-low-friction-rings/
  - https://www.practical-sailor.com/sails-rigging-deckgear/low-friction-rings/
  - https://api.printables.com/graphql/ (model 1772939, read 2026-10-06)

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: straight push or pull
- **motion_out**: straight push or pull
- **shaft_layout**: not applicable
- **overload_response**: not applicable
- **clicks**: clicks ⚑ *needs confirming (best guess): the text uses both clicking and silent words*
- **tools**: none, hand tools
- **load_max**: heavy
- **usual_process**: 3D print (FDM)
- **adjustable**: yes
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** aliases, environment_limits, making_tips_3d_printing, off_the_shelf_parts, play_and_precision, print_in_place, processes, related, safety_notes

## 267 Spur gear pair and gear train (simple, compound, idler)

*gear trains, gearboxes & transmissions.* Straight-toothed gears on parallel shafts, alone or in chains, as the baseline way to change speed and turning force

### What it is

- **plain_name**: Two or more toothed wheels with straight teeth, on parallel shafts, that mesh so turning one turns the next: a small wheel driving a big one turns it slower but with more force, a big one driving a small one turns it faster with less force
- **term**: Spur gear pair and spur gear train (simple, compound and idler gear trains)
- **aliases**: 
  - spur gears / straight-cut gears / straight-toothed gears (Wikipedia)
  - gear pair / gear set / gear mesh
  - pinion and wheel / pinion and gear (the smaller gear is the pinion, the larger the wheel)
  - driver gear and driven gear / input gear and output gear
  - cog / cogwheel (informal)
  - gear reduction / reduction gear / step-down gearing; step-up gearing / overdrive
  - simple gear train (one gear per shaft)
  - compound gear train / double reduction gear / multi-stage reducer / cluster gear / layshaft or countershaft gearbox
  - idler gear / intermediate gear / reverse idler
  - wheel train / going train (clocks and watches: wheels, pinions and arbors)
  - gearbox / gear reducer / speed reducer
  - Stirnradgetriebe (German)
- **family**: gear trains, gearboxes & transmissions
- **one_liner**: Meshing gears with straight teeth pass rotation between parallel shafts, changing speed and turning force in proportion to their tooth counts, reversing direction at each mesh, and multiplying their ratios when several pairs are chained on shared shafts.
- **complexity**: A few parts per stage: two gears, each fixed to a shaft (or turning on an axle), two or more bearings per shaft, and a frame or housing that holds the shafts parallel at the right distance. A compound train adds shared intermediate shafts carrying a large and a small gear fixed together; an idler adds one extra gear on its own axle.
- **how_it_works**: Each gear's teeth are shaped (as involute curves) so the two gears behave like two circles (the pitch circles) rolling on each other without slipping (Wikipedia 'Gear train'; EngineerDog). The gear with fewer teeth turns faster: speed ratio = teeth on driven gear / teeth on driver, and the turning force (torque) is multiplied by the same ratio, minus a small friction loss (Wikipedia; DT Online). Two meshing outside gears turn in opposite directions (KHK). An idler gear in between makes the output turn the same way as the input without changing the ratio (Wikipedia; KHK); a compound train puts a big and a small gear together on a middle shaft (layshaft), so the stage ratios multiply (DT Online; KHK), e.g. two 3:1 stages give 9:1.

### Finder attributes

- **job**: 
  - change speed or turning force: slows a fast, weak motor down to a slow, strong output (reduction) or speeds a slow input up (step-up)
  - let it move (turn, slide or bend): passes rotation from one shaft to a parallel shaft, and can reverse or keep its direction (idler gear)
- **motion**: rotate: continuous rotation in either direction, unlimited turns
- **degrees_of_freedom**: 1: in any gear train all the gears' angles are tied together by the teeth, so choosing the angle of one gear fixes all the others (plus a little free play from backlash)
- **special_behaviour**: 
  - none: a spur gear train is not self-locking, one-way or torque-limiting; it simply passes motion in both directions. Very high compound ratios become practically impossible to turn from the output end (e.g. a 262,144:1 printed demonstration gearbox, 'The Engineering Teacher', Printables), but that is friction, not a true lock.
- **holding_principle**: not a holding joint (it moves or passes on motion), shape (the parts interlock; form-fit): the teeth interlock, so the gears cannot slip relative to each other as a belt or friction wheel can
- **input_output**: Continuous rotation -> continuous rotation. Ratio of one stage = driven teeth / driver teeth (e.g. 13 to 42 teeth gives 3.23:1, Wikipedia); compound trains multiply stage ratios (e.g. four 2:1 stages = 16:1, HowToMechatronics; nine 4:1 stages = 262,144:1, 'The Engineering Teacher'). Idler gears do not change the ratio. Direction: reversed at each external mesh; an idler or a two-stage train makes input and output turn the same way (KHK). Efficiency: 98.0-99.5% per spur mesh, not counting bearing and lubricant losses (KHK gear types table), so losses add up stage by stage. Shaft arrangement: parallel. Back-drivable: yes (you can turn the input by turning the output), though very high ratios become effectively stuck from the output side because of friction.
- **power**: passive (no power needed); driven by a motor, crank or spring. If the motor loses power the train does not hold a load (it back-drives), unless the ratio is so high that friction holds it
- **removability**: removable: gears come off their shafts by undoing set screws, clamp hubs, keys or retaining rings, and the housing comes apart
- **reuse_cycles**: many times: gear trains are repeatedly disassembled for maintenance; limits are tooth wear and the hub-to-shaft joint (see the shaft-to-hub entry)
- **tools_needed**: Hex keys, screwdrivers or spanners for hubs, shafts and housing; circlip pliers for retaining rings; grease (lithium, PTFE or silicone for printed gears, EngineerDog); a feeler gauge or paper strip to check backlash ⚑ [uncertain] *(⚑ parts need confirming)*
- **seal**: none: the gears themselves seal nothing; a closed gearbox housing (often with shaft seals) keeps grease or oil in and dirt out
- **load**: Light to heavy: from clock and toy gears to steel industrial gearboxes. Tooth strength rises with tooth size (module) and face width: doubling the width roughly doubles the strength (EngineerDog). Each tooth is loaded like a small cantilever and can snap at its root under shock loads (EngineerDog; KHK 'Damage to gears'). Spur gears create no axial (end) thrust (Wikipedia 'Gear'), but the tooth force pushes the two shafts apart, more so at higher pressure angles (BOSL2; EngineerDog), so shafts and housing must be stiff. Printed PLA spur gears of module 1.5 broke at about 117 N on a test arm (about 35 N·m) in one test (HowToMechatronics).
- **adjustable**: no for the ratio of a given set (change gears to change ratio; 'change gears' and sliding-gear gearboxes do this); backlash can be adjusted by moving one shaft slightly closer or further (larger centre distance = more backlash, KHK) or by profile shifting in design
- **play_and_precision**: Backlash: small to noticeable. Some backlash is necessary for smooth running (KHK); it increases if the centre distance grows and vanishes (gears jam) if it shrinks (KHK). Printed trains have noticeable play: a four-stage 16:1 printed spur gearbox measured about 151 arcminutes (about 2.5 degrees) of backlash at the output (HowToMechatronics). Precision: gears track rotation precisely apart from backlash, which is why they are used in watches (Wikipedia 'Gear'). Misalignment: low tolerance; shafts must be parallel and at the correct centre distance, or teeth contact only at one edge, causing noise, wear and breakage (KHK 'Mounting accuracy').
- **access_needed**: end of a tube or shaft: gears slide onto their shafts from the free end, and the train is assembled by opening the frame or housing
- **materials**: Steel, cast iron (quieter than steel, KHK), brass (clocks), and plastics: acetal (POM, Duracon) and nylon (MC Nylon) run with little or no lubrication but change size with heat and moisture (KHK 'Design of plastic gears'). Printed gears: EngineerDog ranks nylon > PLA > ABS > PETG; in HowToMechatronics' break test PLA and ASA were strongest and PETG and a poor nylon weakest; igus prints gears in self-lubricating iglide polymers that lasted five times longer than milled POM gears in its rack test (igus). Wood and plywood gears are made from printed templates (EngineerDog lists Matthias Wandel's gear template generator).
- **maker_difficulty**: easy to moderate: free generators draw correct involute teeth and gears print flat without supports, but holding the shafts parallel at the exact centre distance, and fixing gears firmly to shafts, take care

### Making it

- **processes**: 
  - off-the-shelf part: metal and plastic spur gears bought by module (metric) or diametral pitch (inch), and complete gearmotors and gearboxes
  - 3D print (FDM): gears of module about 1 and up, demonstration trains, reducers and toy gearboxes
  - 3D print (SLS powder): wear-resistant printed gears (igus iglide)
  - 3D print (resin): small, fine-toothed gears ⚑ [uncertain]
  - laser cut: flat gears from acrylic or plywood using a generated profile (e.g. Gear Generator exports)
  - CNC: hobbing, shaping or milling metal gears; industrial gears are cut by generating tools such as hobs (Gear Solutions)
  - woodwork: wooden gears cut from paper templates (EngineerDog links Matthias Wandel's gear template generator) *(⚑ parts need confirming)*
- **print_in_place**: yes: print-in-place spur gear demonstrators exist (e.g. ForgeFiles' 'Gear Train Demonstration Kit, Print in Place, 4 Meshing Spur'), but working and load-bearing trains are usually printed as separate gears and mounted on metal shafts or pins
- **making_tips_3d_printing**: 1) Don't draw teeth by hand: use a generator (BOSL2 spur_gear(), Onshape 'Spur Gear' FeatureScript, Gear Generator) so the involute shape is right; meshing gears must share the same module (tooth size) and pressure angle (KHK; BOSL2). 2) Centre distance = module x (teeth1 + teeth2) / 2 (KHK), e.g. module 3 with 12 and 24 teeth sits 54 mm apart; then add clearance by thinning teeth or offsetting the profile rather than guessing. HowToMechatronics used -0.15 mm horizontal expansion in the slicer and a 0.1 mm Z offset to stop 'elephant's foot' distorting the first layers. 3) Print gears flat on the bed with the axle vertical; holes print undersize, so oversize the bore about 0.13 mm (0.005 in) or ream it, and clean teeth with a blade (EngineerDog). 4) Make teeth big and wide: avoid tiny teeth (gaps appear inside them even at 100% infill), use at least 13 teeth at 20 degrees or 9 at 25 degrees (EngineerDog), face width 3-5 x circular pitch (EngineerDog), at least 35% infill and 5 or more walls (HowToMechatronics); its module tests (modules 1 to 2.5 at a fixed 50 mm centre distance) confirmed that bigger teeth and wider gears are stronger, and that old or damp filament can spoil the result (HowToMechatronics). 5) Choose 'hunting' tooth counts with no common factor (15 and 31 rather than 15 and 30) so wear spreads over all teeth (EngineerDog; Wikipedia 'Gear train'). 6) Support shafts close to the gears and use ball bearings; flexing mounts open up the centre distance and load only the tooth tips (HowToMechatronics saw bolts bend in its test rig). 7) Fix gears to shafts with a D-flat or hex bore, a captive-nut set screw or a clamp, not a press fit on a smooth bore (EngineerDog; see the shaft-to-hub entry). 8) Material: PLA is stiff and wears well but softens above 60 C (Prusa); PETG is fine below 80 C (Prusa) but softer; nylon wears best but absorbs water; grease loaded gears with lithium, PTFE or silicone grease (not WD-40) (EngineerDog). 9) Expect spur gears to be the loudest of the printed types (about 77 dB vs 74-75 dB for helical and herringbone in one test) but the most efficient, to vibrate more than helical or herringbone gears in a multi-stage reducer, and to have noticeable backlash (HowToMechatronics).
- **off_the_shelf_parts**: Spur gears (steel, stainless, brass, plastic; plain bore, set-screw hub or clamp hub) by module, e.g. KHK (brand) stock gears; plastic spur gears in acetal (Duracon) and MC Nylon (KHK); internal gears; gear racks; hobby servo and gearmotor gearboxes (a small motor driving a train of reduction gears, Wikipedia 'Servo (radio control)'); clock wheel and pinion sets; school and construction-kit gear sets such as Meccano, K'Nex and Engino (brands; DT Online buyers' guide); shafts, bearings, spacers and retaining rings to mount them.
- **rules_of_thumb**: 
  - Gears only mesh if they have the same module (tooth size) and the same pressure angle; 20 degrees is standard, 14.5 is the old standard (KHK 'Involute gear profile'; BOSL2 gears.scad).
  - Speed ratio = driven teeth / driver teeth; torque is multiplied by the same ratio (Wikipedia 'Gear train'; DT Online). Stage ratios multiply in a compound train; idler gears don't change the ratio but reverse direction (Wikipedia; KHK 'Gear trains').
  - Standard spur gear dimensions (KHK Table 4.1): pitch diameter d = module x teeth; centre distance a = m(z1 + z2)/2; tip diameter = d + 2m; tooth depth = 2.25m; root diameter = d - 2.5m. Example: m = 3, 12 and 24 teeth gives a = 54 mm (KHK 'Calculation of gear dimensions').
  - Undercut: at 20 degrees pressure angle a standard spur gear needs at least 17 teeth to avoid undercut, though 16 or fewer can still be usable; at 14.5 degrees it is 32 (Gear Solutions 'Addendum modification and undercut'; BOSL2 gears.scad). BOSL2 cites a rule of thumb that 14 teeth is fine at 20 degrees, and profile shifting fixes undercut on smaller pinions (BOSL2; KHK).
  - Printed gears: at least 13 teeth at 20 degrees or 9 at 25 degrees; face width 3-5 x circular pitch; doubling width about doubles strength (EngineerDog).
  - Efficiency of a spur mesh: 98.0-99.5% (not counting bearings and lubricant) (KHK 'Gear types and terminology', Table 1.1).
  - Some backlash is required; a larger centre distance increases backlash and a smaller one can jam the gears (KHK 'Gear backlash' and 'Mounting accuracy of gears').
  - Use tooth counts with no common factor (a hunting set, e.g. 15 and 31) to spread wear (EngineerDog; Wikipedia 'Gear train').
  - Printed gear settings from one test series: horizontal expansion about -0.15 mm, infill at least 35%, 5 or more walls (HowToMechatronics; test your own printer).
  - Plastic gears grow with heat and moisture: KHK's example uses MC Nylon's expansion coefficient of 9 x 10^-5 per C, so a 1010 mm nylon rack lengthens about 1.8 mm for a 20 C rise (about 0.09 mm per 100 mm per 10 C); nylon also swells as it absorbs water, so allow extra backlash (KHK 'Design of plastic gears').

### When to use it

- **everyday_examples**: 
  - A mechanical clock or wind-up watch: its 'wheel train' of large wheels driving small pinions (Wikipedia 'Wheel train')
  - A hobby servo or small gearmotor: a tiny fast motor driving a train of reduction gears (Wikipedia 'Servo (radio control)')
  - A car's manual gearbox, where a reverse idler gear is slid in to make the car go backwards (Wikipedia 'Gear train')
  - Construction and school gear kits such as Meccano, K'Nex or Engino gear sets (brands), used to build and feel gear trains (DT Online buyers' guide)
- **when_to_use**: Use spur gears whenever you need a fixed, exact speed or torque change between parallel shafts: slowing a small motor down for a robot arm, winch, turntable or clock, speeding up a hand crank, keeping two shafts exactly in step, or reversing direction with an idler. They are the simplest, cheapest and most efficient gears (about 98-99.5% per mesh, KHK), easy to design with free generators, easy to print, and create no end thrust, so plain bearings or simple ball bearings are enough. Chain several stages (compound train) for big ratios in a small space.
- **when_not_to_use**: Avoid spur gears for fast, quiet drives: they are noisy at high speed (Wikipedia 'Gear'); use helical or herringbone gears. For large reductions in one compact step use a planetary, worm, cycloidal or strain-wave gearbox; for a drive that must hold a load when the motor stops use a worm drive or add a brake; for shafts far apart use a belt or chain instead of a long chain of idlers (Wikipedia 'Gear train'); for zero backlash use anti-backlash gears or a strain-wave drive; for shafts at an angle use bevel or worm gears; if an overload must not break teeth, add a slip clutch.
- **environment_limits**: Heat: printed PLA gears soften above 60 C; PETG is fine below 80 C (Prusa); ABS softens around 105 C (EngineerDog). Plastic gears in general lose strength as temperature rises, expand much more than steel with heat, change size when they absorb moisture (especially nylon), and become brittle at about -30 to -50 C (KHK 'Design of plastic gears'). Lubrication: metal gears need grease or oil; lack of lubrication causes wear and pitting (KHK 'Damage to gears'); dust in open gears speeds up wear. Plastic gears under constant load may creep and lose tooth shape over time ⚑ [uncertain]. *(⚑ parts need confirming)*
- **safety_notes**: Meshing gears create an in-running nip point that can catch fingers, hair and clothing (OSHA machine guarding); cover them, especially with motors. High-ratio gearboxes multiply a small motor's torque enough to crush fingers or break things at the output. A geared lift or arm can back-drive and drop its load when power is removed unless there is a brake. Breaking plastic teeth can fling small fragments.
- **common_failures**: 1) Teeth skip or jam because the centre distance is wrong or the frame flexes: check centre distance = m(z1 + z2)/2 plus clearance, and stiffen supports (KHK; HowToMechatronics). 2) Broken teeth from shock loads, small teeth or too narrow a face: use a larger module, wider gears and more walls or infill (EngineerDog; HowToMechatronics). 3) Rapid wear, noise and heat from poor lubrication or bad alignment (KHK 'Damage to gears'; 'How to reduce gear noise'). 4) Rough, jerky meshing from badly drawn teeth or 'elephant's foot' on the first layers: use a generator and correct the first layer (EngineerDog; HowToMechatronics). 5) Undercut, weak teeth on small pinions: use at least 17 teeth at 20 degrees or a profile shift (Gear Solutions; BOSL2). 6) Gear slipping on its shaft (really a hub failure): use a D-flat, hex, clamp or key (EngineerDog). 7) Too much backlash in a multi-stage printed gearbox: fewer stages, bigger printed accuracy, or anti-backlash gears (HowToMechatronics). 8) Plastic gears binding when warm or damp: allow extra backlash (KHK).
- **related**: 
  - Herringbone and helical gears: slanted teeth, quieter and stronger at speed; helical gears push sideways along the shaft, herringbone cancels that
  - Rack and pinion: a spur gear driving a straight toothed bar, turning rotation into sliding
  - Bevel gears (incl. mitre and crown gears): for shafts that meet at an angle
  - Worm drive (worm and worm wheel): large reduction in one step and usually not back-drivable, but less efficient
  - Planetary gear set (epicyclic gearing): spur gears arranged around a sun gear for high ratios with input and output in line
  - Compound planetary gearbox, cycloidal drive and strain-wave gear (harmonic drive): compact very-high-ratio reducers
  - Belt drives and chain and sprocket drive: pass rotation between shafts that are far apart; belts can slip, chains stretch
  - Friction drives and CVTs: smooth wheels pressed together; can slip, but ratio can vary
  - Anti-backlash gear (split scissor gear): removes the backlash of a spur pair
  - Intermittent gear and non-circular gears: special spur-like gears that give stop-go or varying speed
  - Lantern gear (pin gear): a simple pin-and-disc gear that is easy to make from dowels
  - Differential (bevel gear differential): lets two outputs turn at different speeds
  - Shaft-to-hub joints (key, set screw, D-flat, clamp hub): how each gear is fixed to its shaft

### Pictures, videos and models

- **links**: 
  - [Animated two spur gears 1 2.gif (Wikimedia Commons, by Jahobr)](https://commons.wikimedia.org/wiki/File:Animated_two_spur_gears_1_2.gif): A 14-tooth gear driving a 28-tooth gear (2:1 ratio), turning in opposite directions *(licence: CC0 1.0 (public domain))*
  - [Animated 3 Gear Row.gif (Wikimedia Commons, by Jahobr)](https://commons.wikimedia.org/wiki/File:Animated_3_Gear_Row.gif): Three gears in a row (14, 28 and 42 teeth), showing how the middle gear passes motion along and the speeds change *(licence: CC0 1.0 (public domain))*
  - [Example of a Compound Gear Train.png (Wikimedia Commons, by Manuel Bieling)](https://commons.wikimedia.org/wiki/File:Example_of_a_Compound_Gear_Train.png): Diagram of connected gears in a gearbox forming a compound gear train *(licence: CC0 1.0 (public domain))*
  - [Gear train (Wikipedia)](https://en.wikipedia.org/wiki/Gear_train): Gear ratio, torque, idler gears (with a worked farm-machinery example), double reduction and hunting gear sets, with animations *(licence: Text CC BY-SA 4.0; images per file on Commons)*
  - [IDLER Spur Gear - Animation (Drivetrain Hub, YouTube; title verified via YouTube oEmbed)](https://www.youtube.com/watch?v=JTdSBcmtmsk): Animation of an idler gear between input and output spur gears *(licence: link only)*
- **make_it_yourself**: 
  - [BOSL2 gears.scad (OpenSCAD library source)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad): Parametric involute spur, helical and ring gears with automatic profile shifting, backlash and clearance settings, and gear_dist() to compute the centre distance *(licence: BSD 2-Clause)*
  - [Gear Generator (Abel Vincze)](https://geargenerator.com/): Browser-based involute gear designer and simulator: set teeth and module, add gears to a train, animate it and export (EngineerDog notes STL/CSV export became paid) *(licence: free online tool; exports may require payment)*
  - [Reduction Gearbox (262,144:1 Gear Ratio) (The Engineering Teacher, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1123635-reduction-gearbox-2621441-gear-ratio): Compound gear train of nine 32/8-tooth (4:1) compound gears with a crank at each end, to feel how ratios multiply; gears can be swapped for shims to lower the ratio *(licence: CC BY-NC)*
  - [Gear Ratio Demonstration Gear Box (Jpxfrd, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1374188-gear-ratio-demonstration-gear-box): Printed 5:1 demonstration gearbox with handles, spacers and printed C-clips used as shaft collars *(licence: CC0 (public domain))*
  - [Gear fidget + Trolerance test (EmilH, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/516218-gear-fidget-trolerance-test): Gear fidget that doubles as a tolerance test, to find the gear clearance your printer can manage *(licence: CC BY)*
- **diagram_idea**: Three panels: a small gear driving a big one with pitch circles drawn and arrows showing opposite rotation and 'slower but stronger'; the same pair with an idler in between showing same-direction output and unchanged ratio; and a compound train where a big and a small gear share a middle shaft, with the stage ratios written as 3:1 x 3:1 = 9:1.
- **sources**: 
  - https://en.wikipedia.org/wiki/Gear_train
  - https://en.wikipedia.org/wiki/Gear
  - https://en.wikipedia.org/wiki/Wheel_train
  - https://en.wikipedia.org/wiki/Servo_(radio_control)
  - https://commons.wikimedia.org/wiki/File:Animated_two_spur_gears_1_2.gif
  - https://commons.wikimedia.org/wiki/File:Animated_3_Gear_Row.gif
  - https://commons.wikimedia.org/wiki/File:Example_of_a_Compound_Gear_Train.png
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear-trains.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_types_terminology.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/involute_gear_profile.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/calculation_gear_dimensions.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/gear_backlash.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/mounting_accuracy_of_gears.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/design-of-plastic-gears.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/how_to_reduce_gear_noise.html
  - https://khkgears.net/new/gear_knowledge/gear_technical_reference/damage_to_gears.html
  - https://gearsolutions.com/departments/tooth-tips/addendum-modification-and-undercut/
  - https://wiki.dtonline.org/index.php/Gear_Train
  - https://wiki.dtonline.org/index.php/Idler_Gear
  - https://www.notesandsketches.co.uk/Gears.html
  - https://engineerdog.com/2017/01/07/a-practical-guide-to-fdm-3d-printing-gears/
  - https://howtomechatronics.com/how-it-works/how-to-3d-print-gears-the-ultimate-guide/
  - https://www.igus.com/custom-parts-services/3d-printing/3d-printed-gear
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  - https://geargenerator.com/
  - https://www.osha.gov/etools/machine-guarding/introduction/hazardous-motions-actions
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://www.youtube.com/watch?v=JTdSBcmtmsk
  - https://api.printables.com/graphql/

### Finder tags

- **connects**: not applicable
- **power_source**: none
- **power_loss**: not applicable
- **motion_in**: steady turning
- **motion_out**: steady turning
- **shaft_layout**: parallel
- **overload_response**: not applicable
- **clicks**: not applicable
- **tools**: hand tools ⚑ *needs confirming (source uncertain): `tools_needed` is marked [uncertain] here: "…gears, EngineerDog); a feeler gauge or paper strip to check backlash [uncertain]…"*
- **load_max**: heavy
- **usual_process**: off-the-shelf part ⚑ *needs confirming (best guess): first-listed process is off-the-shelf, but `print_in_place` is yes*
- **adjustable**: no
- **removability**: removable
- **power**: passive

### Other info

- ⚑ **Fields with parts that need confirming:** environment_limits, processes, tools_needed

