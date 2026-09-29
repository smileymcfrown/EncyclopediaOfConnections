# Gap search: connection and mechanism types missing from outline.yaml

> **Outcome (2026-09-29):** the owner chose to add all 22 suggestions and the three notes
> additions below, but no *Motion conversion* baseline. With the three agent-suggested items
> (iris valve, twisted-and-coiled polymer muscle, Bernoulli gripper) they are items 275-299 in
> `outline.yaml`. Research agents for those items: the sources below were opened by the search
> agent and are a good starting point, but open each page yourself before citing it.

Date: 2026-09-29. Checked against `research/connection-types/outline.yaml` (274 items),
the "Suggested but left out" list in `outline-notes.md`, the owner's declined list (electrical
joints, plastic welding of prints), and the three items already being added (iris valve,
twisted-and-coiled polymer muscles, Bernoulli gripper).

## How the gaps were found
- Scanned the preferred mechanism indexes for names the outline lacks: Wikipedia
  *Category:Mechanisms (engineering)* and 14 of its subcategories (actuators, brakes, clutches,
  linkages, gears, valves, shock absorbers, straight-line mechanisms, simple machines and more);
  the four tables of contents in Nguyen Duc Thang's *2700 Animated Mechanical Mechanisms*
  (Stanford course-site copies of his free PDFs), plus the sections on rotation limits, gear
  shifting, clamping and centring, folding, opening and closing, joints and springs; and the
  index of *507 Mechanical Movements*.
- Before suggesting anything, searched all 274 finished result files in
  `research/connection-types/results/` for each candidate. Anything already named there
  (as a variant, alias or "related" entry) was moved to the near-miss list.
- Checked that printable versions exist through the Printables GraphQL API (`searchPrints2`
  and `print(id)`). Printables page URLs were **not** opened: only model IDs and titles are
  given below, labelled "(Printables API; page not opened)".
- Thang's PDFs were read from the Stanford course-site copies (the same copies run 2 used).
  When publishing, prefer Thang's own download link or the videos. YouTube titles were
  confirmed through YouTube's oEmbed service; the videos were not watched.
- Every URL below was opened in this session unless it is marked otherwise.

## Suggestions, ranked by usefulness to a hobbyist maker

### 1. Tendon-driven joint (cable-pulled finger or tentacle with elastic return)
- **category:** motion conversion (or gear trains, gearboxes & transmissions, beside Bowden cable and capstan drive)
- **description:** A string or cable pulled from a distance bends a chain of hinged or flexible segments, as in 3D-printed robot hands and tentacles, while an elastic cord or a second cable pulls them back.
- **nearest items and why it's distinct:** *Bowden cable* is only the sleeve that carries the pull. *Capstan cable drive* winds a cable on drums (its own entry says "strictly, tendon drives pull a joint from a distance, like finger tendons"). *Whippletree* shares one pull between fingers. *Posable segmented arm* holds a pose by friction and has no actuation. None covers how the joint itself is strung, routed and returned, which is the most common printed robotics mechanism.
- **tier:** 1
- **sources:**
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2020.594196/full (table of open-source printed hands: "non-elastic cables" flex the fingers, "elastic cords" or "orthodontic rubber bands" extend them)
  - https://hackaday.com/2025/05/03/3d-printed-cable-driven-mechanisms-some-strings-attached/ (fully printed cable-driven bending parts, gripping tentacle, print-in-place nylon cables)
  - also https://en.wikipedia.org/wiki/Continuum_robot

### 2. Walking linkage (Jansen and Klann leg mechanisms)
- **category:** motion conversion
- **description:** A one-motor linkage of bars and pins whose "foot" traces a flat stride and then lifts, so a turning crank makes a machine walk, as in Theo Jansen's Strandbeest.
- **nearest items and why it's distinct:** *Four-bar linkage* and *Straight-line linkages* are the building blocks, but Jansen and Klann are named, different leg mechanisms that makers build and confuse (Klann has fewer links and a higher step, but a less flat foot path, according to a Hackaday commenter). Run 1's list had "Walking linkages: Jansen, Klann" under motion conversion, but the outline dropped them. Jansen appears only as an example in *Mechanical metamaterial mechanism* (HPI's TPU walker).
- **tier:** 1
- **sources:**
  - https://en.wikipedia.org/wiki/Jansen%27s_linkage and https://en.wikipedia.org/wiki/Klann_linkage
  - https://hackaday.com/2025/01/16/building-a-3d-printed-strandbeest/ (printed build; commenters argue whether it is really a Jansen or a Klann linkage, which shows why beginners need both). Printables model 194176 "Theo Jansen Strandbeest Desktop Mechanism" (Printables API; page not opened).

### 3. Magnetic detent (magnet click stops)
- **category:** indexing & detents
- **description:** Small magnets in a knob or slider and its base pull it into set positions, giving firm, contact-free clicks that never wear out.
- **nearest items and why it's distinct:** *Ball detent*, *Compliant detent* and *Detent hinge* all click by springy contact. *Magnet joint* holds parts together but doesn't index. None of the result files mentions magnetic detents. They feel different (a snap-in "thunk"), need no spring, don't wear, and are very popular in printed fidgets, knobs and flight-sim throttles.
- **tier:** 1
- **sources:**
  - https://hackaday.io/project/169563-mostly-3d-printed-push-button ("creating detents by having strategically placed magnets attract the moveable slider or knob to predefined positions ... they replace a spring")
  - Printables models 1780603 "Rotating Magnetic Detent Fidget Coin" and 1786954 "Tactile Magnetic Rotary Encoder (Heavy Detents)" (Printables API; pages not opened)

### 4. Multi-material interlock (co-printed rigid and flexible parts, material interlocking)
- **category:** print-in-place & 3D-printing joints
- **description:** When a printer prints two materials that won't stick to each other (such as TPU and PLA), the slicer weaves small beams of each material into the other at the seam, so the parts are locked together by shape.
- **nearest items and why it's distinct:** *Living hinge* and *Print-in-place hinge* use one material. *Split-part joints* and *Mid-print embedding* join separate parts. This is the only way to make a single print with a rubbery hinge or grip fused into a rigid body, and it is now a built-in slicer setting ("Generate Interlocking Structure" in Cura 5.3 and later, "Beam Interlocking" in Bambu Studio).
- **tier:** 1
- **sources:**
  - https://ultimaker.com/learn/unlock-true-multi-material-printing-with-ultimaker-cura-5-3/ (a CPE and TPU clip; the "alternating overlapping pattern physically 'locks' the two materials together")
  - https://wiki.bambulab.com/en/software/bambu-studio/beam-interlocking (TPU and PLA "don't bond well"; beam width, direction, layers and depth settings, with before and after images)

### 5. Elastic band and elastic cord springs (elastomer springs)
- **category:** springs & energy storage
- **description:** Rubber bands, elastic cord, bungee or surgical tubing used as a stretchy spring, for example to pull printed fingers open, reset a latch or power a catapult or toy car.
- **nearest items and why it's distinct:** *Coil spring* names rubber only as an alternative ("softer, cheaper ... but it ages and creeps faster"). *Shock-corded pole* uses elastic only to pull tube joints home. Rubber stretches many times further than steel springs, also damps, creeps and perishes in heat and sunlight, and is the default spring in printed hands and toys, so a beginner needs its own entry for it.
- **tier:** 1
- **sources:**
  - https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2020.594196/full (elastic cords and orthodontic rubber bands as the extension springs in printed hands)
  - https://enablingthefuture.org/phoenix-hand/ (the Phoenix v2 remix replaced "all the rubber bands" because they don't survive tropical heat, and routes elastic cord through tunnels in the fingers)

### 6. Soft pneumatic bending actuator (PneuNet, printed air-powered finger)
- **category:** powered & active connectors
- **description:** A rubbery finger with a row of air chambers along one side that curls when it is pumped up, so a gripper can wrap gently round fragile objects; it can be cast in silicone or printed in TPU.
- **nearest items and why it's distinct:** *Vacuum gripper*, *Granular jamming gripper* and the incoming *Bernoulli gripper* grip by suction or jamming. *Fin-ray gripper* bends only when pushed. None of the result files covers inflatable bending actuators.
- **tier:** 1
- **sources:**
  - https://robomechjournal.springeropen.com/articles/10.1186/s40648-025-00314-5 (open-access 2025 article on an FDM-printed TPU soft pneumatic gripper actuator, with diagrams)
  - https://en.wikipedia.org/wiki/Soft_robotics (fluidic elastomer and pneumatic silicone actuators, including 3D-printed ones). Printables model 11188 "Pillow Soft Robotic Actuator" (Printables API; page not opened).

### 7. Scroll mechanism (self-centring scroll chuck, spiral-slot plate)
- **category:** clamping, magnetic & friction connections (or motion conversion, beside the iris mechanism)
- **description:** Turning one plate with a spiral groove or spiral slots moves three or more jaws in or out together, so they always grip a round part dead centre, as in a lathe's three-jaw chuck.
- **nearest items and why it's distinct:** *Collet (and keyless chuck)* grips by squeezing a slotted sleeve; its entry only mentions the scroll chuck as a comparison. *Iris mechanism* closes blades round an opening but doesn't clamp. The scroll is a distinct motion converter, and printed chucks and grippers use it (Thang also shows a printable-style version with "three eccentric slots").
- **tier:** 1
- **sources:**
  - https://en.wikipedia.org/wiki/Chuck_(engineering) (scroll chuck: "jaws, interconnected via a scroll gear (scroll plate)")
  - https://cs448m.github.io/lectures/machines/doc/4.pdf (Thang part 4, pp. 67-68: three-jaw self-centring chucks 1-4, with YouTube links). Printables model 992137 "C-Series Scroll Chuck" (Printables API; page not opened).

### 8. Multi-turn rotation limiter (travelling-nut and stacked-ring stops, stop work)
- **category:** hinges & pivots (a turning part with a hard end stop after more than one turn)
- **description:** A stop that lets a shaft or turret turn a set number of turns, more than one, and then halts it firmly, for example with a nut that travels along a thread or a stack of rings that pick each other up with pins, so cables never wind up too far.
- **nearest items and why it's distinct:** *Geneva drive* already notes the "Geneva stop" (limited turns). *Slip ring* lists the cable alternatives (twister chain, clock spring) but not the stop. The travelling-nut, pinned-disc and differential-gear limiters are a separate, printable type that robot turrets and multi-turn knobs need.
- **tier:** 1
- **sources:**
  - https://cs448m.github.io/lectures/machines/doc/1.pdf (Thang part 1, pp. 120-121: "Shaft rotation limiter" 1-6, travelling nut, pinned idle discs, two-gear differential stop). Video https://www.youtube.com/watch?v=3airCg2Xd-4 "Shaft rotation limiter 6" (title confirmed by oEmbed, not watched).
  - https://www.chiefdelphi.com/t/turret-homing-hard-stop-limit-switch-or-absolute-encoder/516456 (robotics teams using mechanical hard stops on turrets)

### 9. Genderless connector (hermaphroditic or androgynous coupling)
- **category:** quick-release & tool-free
- **description:** A connector whose two halves are identical, so any two can join together, as in Storz fire-hose couplings, docking ports on modular robots and printed snap-together hinges made from two copies of one part.
- **nearest items and why it's distinct:** *Quick couplers for tubes and hoses* notes Storz only as a bayonet idea. *Bayonet mount* and *Keying* are male-female. Being genderless is a design principle in its own right (no mismatched pairs, print one part twice) and a central topic in modular robot docking.
- **tier:** 1
- **sources:**
  - https://en.wikipedia.org/wiki/Gender_of_connectors_and_fasteners (section "Genderless (hermaphroditic)": identical fittings "can freely mate with any other")
  - https://arxiv.org/pdf/2104.00800 (SMORES-EP paper: "The SINGO connector ... is genderless (there is no polarity and any two connectors can be mated)"). Printables model 220355 "Parametric, Hermaphroditic, Snap-together Hinge" (Printables API; page not opened).

### 10. Gearless right-angle drive (Hobson's joint, elbow mechanism)
- **category:** clutches & couplings (beside the universal joint and CV joint)
- **description:** A ring of L-shaped bent rods sliding in holes in two hubs turns rotation round a 90-degree corner with no gears, as in right-angle socket adapters and "elbow engine" curiosities.
- **nearest items and why it's distinct:** *Bevel gears* use teeth. *Universal joint* and *CV joint* are normally used at smaller angles. Hobson's joint is a separate, constant-velocity type (it was in run 1's coupling list but not the outline), and a popular print.
- **tier:** 1
- **sources:**
  - https://en.wikipedia.org/wiki/Hobson%27s_joint ("rods bent 90° are able to transmit torque around a corner")
  - https://cs448m.github.io/lectures/machines/doc/1.pdf (Thang part 1, pp. 97-98: "Angular transmission (90 degrees)", "Hobson's joint", "Gearless right-angle socket adapter"). Printables model 777614 "90 degree power transmission (Gearless)" (Printables API; page not opened).

### 11. Pneumatic artificial muscle (McKibben muscle)
- **category:** powered & active connectors
- **description:** A rubber tube inside a braided sleeve that gets shorter and pulls hard when filled with air, like a muscle.
- **nearest items and why it's distinct:** *Woven self-tightening grip* already names it as a relative (same braid, used the other way round). *Shape-memory-alloy wire*, *Twisted-string actuator* and the incoming *twisted-and-coiled polymer muscle* are pulling actuators driven by heat or a motor, not by air. Beginners need to know the braid-angle rule (below 54.7 degrees it contracts, above it extends).
- **tier:** 1
- **sources:**
  - https://en.wikipedia.org/wiki/Pneumatic_artificial_muscle (McKibben 1957; braid angle below the 54.7° "critical locking angle" contracts)

### 12. Check valve (one-way valve: flap, ball or duckbill)
- **category:** seals & pass-throughs
- **description:** A valve that lets air or water flow one way only, using a flap, a (sometimes spring-loaded) ball, or a rubber "duckbill" that pressure opens and back-pressure squeezes shut.
- **nearest items and why it's distinct:** *Hose barb* and *Quick couplers* only mention check valves in passing. The incoming *iris valve* opens and closes by twisting, not by flow direction. It is the "one-way" idea for fluids and is essential in soft robots, pumps and water projects. Scope note: run 1 put "hydraulic and pneumatic circuits" out of scope, but this is a single component like the iris valve, so the owner should decide.
- **tier:** 1 (or 2 if valves stay borderline)
- **sources:**
  - https://en.wikipedia.org/wiki/Check_valve (flapper, ball check, duckbill; "cracking pressure")
  - https://en.wikipedia.org/wiki/Duckbill_valve. Printables model 243964 "Print in Place Check-Valve!" (Printables API; page not opened).

### 13. Bellows boot and way cover (gaiter)
- **category:** seals & pass-throughs
- **description:** A folded, concertina-like flexible cover that stretches and squashes with a moving part, keeping dust and grit off rails, lead screws and joints (for example a CV-joint boot or a CNC way cover).
- **nearest items and why it's distinct:** *Gasket* and *O-ring* seal parts that don't move much. *Labyrinth seal* has no cover. *Bellows coupling* is a shaft coupling, not a cover. Boots are only mentioned in passing inside *CV joint* and *Ball screw*. They can be printed in TPU.
- **tier:** 1 (printable in TPU) or 2
- **sources:**
  - https://hackaday.com/2025/05/08/3d-printed-tpu-bellows-with-pla-interface-layers/ (TPU bellows printed between peel-away PLA layers; "lathe way covers")
  - https://en.wikipedia.org/wiki/Bellows ("used by extension for a flexible bag whose volume can be changed", e.g. a folding camera's bellows)

### 14. Anti-twister mechanism (twist-free cable feed without slip rings)
- **category:** seals & pass-throughs
- **description:** A cable runs up, over and onto a spinning disc, and its loop is swung round at exactly half the disc's speed, so the disc can spin forever without the cable ever twisting and without sliding contacts.
- **nearest items and why it's distinct:** *Slip ring* uses brushes, and its limited-turn alternatives (twister chain, clock spring) stop after a few turns. The anti-twister allows endless turning with a continuous cable, so there's no brush noise and no wear. It is a famous clever mechanism (Dirac's belt trick) with printable demonstrators. It could instead go in the *Slip ring* notes if the owner prefers.
- **tier:** 2
- **sources:**
  - https://en.wikipedia.org/wiki/Anti-twister_mechanism ("the plane of this cable is rotated at exactly half the rate of the disk so the cable experiences no net twisting")
  - Printables model 1128267 "4pi Spin-½ Symmetry Demonstrator Anti-Twister Mechanism" (Printables API; page not opened)

### 15. Weight-activated gripping tongs (lifting tongs, lewis)
- **category:** self-locking & anti-back-drive
- **description:** Scissor tongs or a wedge anchor whose grip gets tighter the heavier the load, because the lifting pull itself squeezes the jaws, as in stone and ice tongs and the stonemason's lewis.
- **nearest items and why it's distinct:** *Woven self-tightening grip* (braid), *Rope grab* (cam on a rope) and *Binding-plate lock* are the closest self-tightening types, but none uses the load's own weight working through a lever or scissor to clamp an object. *Compliant gripper* multiplies an applied force instead. It's useful for claw grabbers and lifting fixtures.
- **tier:** 2
- **sources:**
  - https://507movements.com/mm_494.html ("Tongs for lifting stones ... The greater the weight the harder the tongs bite")
  - https://en.wikipedia.org/wiki/Lewis_(lifting_appliance) (the weight of the stone acts on the long lever arms); also https://507movements.com/mm_493.html

### 16. Variable-radius pulley (fusee, compound-bow cam)
- **category:** springs & energy storage (or gear trains, gearboxes & transmissions)
- **description:** A cone- or cam-shaped pulley whose winding radius changes as the cord winds on, so the leverage changes during the pull, evening out a spring's force (fusee) or making a heavy pull easier at full stretch (compound-bow "let-off").
- **nearest items and why it's distinct:** *Spiral power spring* mentions the fusee only as an add-on. *Non-circular gears* do the same job with teeth. *Spring balancer* uses a plain pulley. A shaped pulley is a distinct way to tailor a force curve (constant force, gravity balancing) with a cord.
- **tier:** 2
- **sources:**
  - https://en.wikipedia.org/wiki/Fusee_(horology) ("a cone-shaped pulley with a helical groove ... equalizing the uneven pull of the mainspring")
  - https://en.wikipedia.org/wiki/Compound_bow (cams and "let-off"); also https://507movements.com/mm_046.html

### 17. Tuned mass damper (vibration absorber)
- **category:** brakes, dampers & speed control
- **description:** A small weight on a spring, tuned to shake at the same speed as a wobbly structure, that soaks up the wobble so the structure moves much less.
- **nearest items and why it's distinct:** *Elastomer isolation mount* stops vibration passing between parts. *Dampers* slow a single movement. A tuned mass damper cancels a resonance by adding a tuned mass, which is a different principle (Wikipedia: used in power transmission, cars and buildings). Maker uses such as tall, springy frames are [uncertain].
- **tier:** 2
- **sources:** https://en.wikipedia.org/wiki/Tuned_mass_damper

### 18. Radial lip seal (rotary shaft seal, oil seal)
- **category:** seals & pass-throughs
- **description:** A rubber ring with a thin, spring-backed lip that wipes round a spinning shaft to keep oil in and water or dirt out.
- **nearest items and why it's distinct:** *O-ring*, *Gasket* and *Labyrinth seal* name lip seals only as the thing to use for a spinning shaft in oil. The lip seal is the standard seal for turning shafts (Wikipedia: pump, axle and power-steering seals), and a beginner needs to know it apart from a static O-ring.
- **tier:** 2
- **sources:** https://en.wikipedia.org/wiki/Radial_shaft_seal

### 19. Knife-edge and jewel pivots (low-friction point pivots)
- **category:** hinges & pivots
- **description:** A pivot that rocks on a hardened sharp edge in a V-shaped seat, or a fine pin in a hard jewel hole, for almost friction-free swinging, as in balance scales, pendulums and watches.
- **nearest items and why it's distinct:** *Plain pivot and rolling bearing* covers ordinary pins and bearings. *Flexure hinge* mentions knife edges only as an alternative. These pivots are the go-to type for sensitive balances and weather vanes.
- **tier:** 2
- **sources:**
  - https://en.wikipedia.org/wiki/Weighing_scale ("a knife edge is the traditional solution"; "a sharp V-shaped pivot seated in a shallower V-shaped bearing")
  - https://en.wikipedia.org/wiki/Jewel_bearing

### 20. Hand-mouldable thermoplastic (polycaprolactone, Polymorph (brand), InstaMorph (brand))
- **category:** adhesives & bonding
- **description:** Plastic pellets that go soft like putty in hot water (about 60 °C) and set hard and tough as they cool, used to mould custom grips, mounts and repairs round parts, and remelted to reuse.
- **nearest items and why it's distinct:** *Hot-melt adhesive* needs a gun and is weak. *Epoxy putty* is permanent once it sets. *Silicone* notes mention mouldable silicone glue. Mouldable plastic is reusable and holds mainly by its shape, which is a different option for makers.
- **tier:** 2
- **sources:** https://en.wikipedia.org/wiki/Polycaprolactone ("softens to a putty-like consistency at only 60 °C ... by immersing in hot water"; hobby trade names listed)

### 21. Reciprocal frame (self-supporting stick bridge, "Leonardo bridge")
- **category:** interlocking joints & joinery
- **description:** Three or more beams that each rest on the next in a closed loop, so they hold each other up with no central support, as in reciprocal roofs and the self-supporting stick bridge credited to Leonardo da Vinci.
- **nearest items and why it's distinct:** *Cross-halving slot joint* and *Japanese interlocking joints* lock two or three members at one node. A reciprocal frame is a load-sharing arrangement of many members, popular as printed and laser-cut models.
- **tier:** 2 (joinery, so low priority)
- **sources:**
  - https://en.wikipedia.org/wiki/Reciprocal_frame
  - Printables models 844202 "Leonardo da Vinci's self-supporting bridge" and 906462 "Exercise model for reciprocal frameworks" (Printables API; pages not opened)

### 22. Housing and rebate joints (dado, rabbet)
- **category:** interlocking joints & joinery
- **description:** A three-sided slot cut across a board (dado or housing) or a two-sided step cut along its edge (rabbet or rebate), which a shelf, back panel or other board sits into.
- **nearest items and why it's distinct:** *Tongue-and-groove* joins boards edge to edge. *Butt and lap* and *Sliding dovetail* mention dados only in passing. These are among the most common cabinet and box joints (Wikipedia: dados hold shelves in cabinets; rabbets take back panels and glass).
- **tier:** 2 (joinery, lowest priority)
- **sources:** https://en.wikipedia.org/wiki/Dado_(joinery) and https://en.wikipedia.org/wiki/Rabbet

## Suggested notes (fold into existing or incoming items)
- **Pinch valve → notes of the incoming *Iris valve (twisted fabric-sleeve valve)*.** A soft tube squeezed shut by a clamp or air pressure; it's the plain relative of the twisted-sleeve valve. Source: https://en.wikipedia.org/wiki/Pinch_valve
- **Festoon cable system → notes of *Cable carrier*.** Cables hung in zigzag loops from trolleys running along a track, as an alternative to a drag chain for long travel. Source: https://cs448m.github.io/lectures/machines/doc/3.pdf (Thang part 3, p. 137, "Festooning cable system")
- **Twistlock → notes of *Quarter-turn fastener* (or *Bayonet mount*).** A head pushed through an oval slot and turned 90° so it can't come out, as on shipping-container corners and in drop-in T-nuts. Source: https://en.wikipedia.org/wiki/Twistlock
- **Gearless right-angle socket adapter** is a real hand tool that uses Hobson's joint. Add it as an alias or example in suggestion 10, not as a separate item.

## Near-misses considered and rejected
- Geneva stop: already a variant in *Geneva drive* (suggestion 8 covers the other rotation limiters).
- Single-revolution (one-turn) clutch: already an alias in *Wrap-spring clutch*.
- Remote centre compliance (RCC) wrist: already an alias in *Virtual-pivot linkage*.
- Print-in-place bearing and gear bearing: already in *Planetary gear set* and *Plain pivot and rolling bearing*.
- Adjustable three-point bed-levelling and kinematic mirror mounts: already in *Kinematic coupling* and *Exact-constraint mounting*.
- Rolamite: already "the linear cousin" in *Rolling-contact joint*.
- Hoberman sphere: already in *Scissor linkage*. Sarrus linkage and elliptic trammel: already in *Straight-line linkages*.
- Two-speed or shifting gearbox: already covered by *Dog clutch* (selecting gears in robot gearboxes).
- Snap-on C-clip for rods and pipes: already a variant in *Annular snap fit*.
- Shock absorber and coil-over: already named in *Dampers*.
- Rigid belt and Spiralift columns: already in *Rigid chain actuator*.
- Loose tenon, bridle joint, mitre joint, shrink fit, expanding mandrel, lift-off or piano hinge, horn cleat, duplex worm, multi-start thread, bulkhead fitting: already named in the matching entries.
- Compliant constant-force mechanism and developable mechanisms: already in *Constant-force spring*, *LET joint* and *Rolling-contact joint*.
- Stewart platform (hexapod) and Canfield joint: parallel manipulators built from many actuators, so closer to whole machines.
- CoreXY/H-bot belt layouts, mecanum and omni wheels: machine layouts or locomotion, which run 1 put out of scope with drivetrains.
- Syringe hydraulics and hydraulic or pneumatic cylinders: run 1 put "hydraulic and pneumatic circuits" out of scope (it could come back as a family).
- Knots, splices and sewn seams: run 1 put "knots and textile joining" out of scope.
- Soldering and brazing: run 1 excluded welding and soldering.
- Gecko-style dry adhesive: lab-made and not yet practical for hobbyists; the related electroadhesion gripper was already declined.
- Fluid coupling, viscous coupling, magnetorheological damper, magnetic particle clutch: niche industrial parts with little maker use.
- Bendix (inertia-engaging) starter drive: niche automotive part, combining a dog clutch with a helical spline.
- Automatic hoist brake (Weston load brake) and cone irreversible lock (Thang): covered in principle by *Bidirectional anti-back-drive clutch* and *Friction brake*.
- Revolution counter and odometer wheels: a whole instrument rather than a connection.
- Mangle rack and mangle wheel (507 Movements): historic and niche.
- ABENICS active ball joint: a recent research prototype.
- Tensegrity: a structural arrangement rather than a connection.
- Layer jamming (vacuum-locked stacked sheets): could go in the *Granular jamming gripper* notes, but no source was opened this session.
- Kirigami (cut-and-fold sheet): Wikipedia's page is craft-only. Stretchy cut patterns are already covered by *Kerf bending* and *Mechanical metamaterial mechanism*.
- Plain hard end stops: too basic to be a type (suggestion 8 covers the clever multi-turn stops).
- Crumple or crush energy absorbers: mostly whole-vehicle design, and nothing found at component level.

## Other notes for the owner
- *Motion conversion* has no tier-3 baseline entry. A "Lever and crank (simple lever, crank handle)" baseline would give the flow chart something to compare against. This is optional and the owner's call.
- Suggestions 6, 11 and 12 (soft actuator, pneumatic muscle, check valve) all need air or water supplies. If the owner later brings back "hydraulic and pneumatic circuits" as a family, those three plus syringe hydraulics would fit there.
