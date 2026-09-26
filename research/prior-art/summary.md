# Run 1 summary: what already exists, and what to build on

**Date:** 2026-09-25 · **Inputs:** 54 collections researched (`results/*.json`, full detail in
`report.md`) · **Scope:** the Scope section of `PROJECT.md` (clever connection and mechanism
*types* that act as one unit, gear trains, powered connectors and adhesive types; not
standard-hardware catalogues).

How to read this: every claim here comes from the per-item JSON files, which list the pages
the research agents actually opened. Where a fact could not be checked on an opened page, the
JSON marks it `[uncertain]`, and this summary says "unverified" or leaves it out. No URL in
this file was guessed.

**The short version.** Nobody has built what this project wants. The big mechanism
collections (DMG-Lib, Thang's animations, Artobolevsky, the Sourcebook) cover the clever types
well but are organised for engineers who already know the names. The beginner-friendly sources
(school D&T material, LEGO books, maker guides) cover only the basics. None of them has a
plain-language "what do you need it to do?" finder, and almost none can be copied. The
encyclopedia's job is to be the beginner front door: plain-English entries, a guided finder,
and links out to the best existing picture, animation, design guide and printable model for
each type.

---

## 1. The collections most worth building on

Ranked by how much they give this project. "Link" means link to it from entries. "Reuse"
means content can be copied under its licence.

| # | Collection | Why it matters | Use it for | Licence in short |
|---|------------|----------------|------------|------------------|
| 1 | **Nguyen Duc Thang's animated mechanisms** (YouTube `thang010146`, 4,000 mechanisms in a free PDF index) | The largest set of clear, colour-coded animations of exactly the clever types we want: a whole chapter of safety (torque-limiting) clutches, many overrunning clutches, self-locking latches, snap-action and toggle mechanisms, indexing and locking, 57 Geneva variants, gearboxes. Its index is sorted by what the mechanism *does* | The "see it move" link on most mechanical entries (one stable YouTube URL per mechanism); its purpose-based chapters as a checklist for run 2 | No licence stated. Link or embed via YouTube only |
| 2 | **DMG-Lib** (Digital Mechanism and Gear Library) | The biggest catalogue of mechanism types, with animations, videos, permanent IDs, a multilingual thesaurus, and a *faceted mechanism search* (function incl. "locking" and "adjustable", input motion, output motion, degrees of freedom, shaft arrangement). Strong on safety friction clutches, overrunning clutches, ball-click indexes, toggle linkages, self-locking gears, 364 gear-train entries | Permanent per-type links (`handler?mcdsc=<id>`); its search facets as the model for the finder's motion questions; its thesaurus for aliases | All rights reserved, private non-commercial use only. Link only |
| 3 | **Wikipedia + Wikimedia Commons** | The only large, openly licensed source. Wikipedia names and defines most in-scope types (torque limiter, sprag clutch, freewheel, detent, Geneva drive, strain-wave gearing, cycloidal drive, bayonet mount, snap-fit, living hinge, compliant mechanism, adhesive chemistries). Commons has free animations (ratchet, Geneva, harmonic and cycloidal drives, toggle clamps, CV joints, straight-line linkages) | The canonical proper term for each entry and a "read more" link; **reusable images and GIFs** (with credit); the MediaWiki API to pull category lists | CC BY-SA (text); per-file free licences on Commons (CC BY-SA, public domain, GFDL). **Reuse with attribution** |
| 4 | **Mechanism handbooks: Artobolevsky, Sclater & Chironis, Jones's *Ingenious Mechanisms*** | Thousands of drawn mechanisms between them (Artobolevsky alone has about 4,000), grouped by the *job they do*: "stop, detent and locking", "overload relief and automatic safeguards", "indexing", "latching, fastening and clamping", "torque-limiting devices", "one-way drives". The richest source of unusual type names | Run 2's type list; functional group names for the finder; citation by volume and number | All rights reserved (Jones Vol. I, 1930, may now be US public domain, unverified). Cite only; don't link pirated PDFs |
| 5 | **BYU Compliant Mechanisms Research + *Handbook of Compliant Mechanisms*** | The authority on compliant mechanisms and flexures: living hinges, cross-axis pivots, LET joints, bistable switches and latches, compliant ratchets and overrunning clutches, constant-force mechanisms. The Handbook's library splits "elements" (joints) from "mechanisms", and mechanisms into motion (kinematic) and force/energy (kinetic) jobs | The compliant family in run 2; its everyday-object explanations; printable demo models | All rights reserved; model files free for personal non-commercial use (unverified). Link only |
| 6 | **Snap-fit design guides** (Covestro/Bayer, BASF, DuPont) + **3D-printing service guides** (Hubs, Protolabs, Formlabs, Prusa) + **Bonenberger's *First Snap-Fit Handbook*** | The practical source for the project's first priority: snap fits (cantilever, U/L, torsion, annular; releasable vs permanent by return angle), living hinges, print-in-place clearances, inserts, captive nuts, glues for printed plastics, with real numbers (e.g. 0.5 mm FDM clearance). DuPont adds plastic ratchet wheels and torque-limiting gears. Bonenberger gives a snap-fit vocabulary (locators + locks + enhancements; 5 lock styles) | Design-rule citations on each 3D-printing entry; the snap-fit sub-classification | All rights reserved. Link and cite numbers in our own words |
| 7 | **Generators: BOSL2, Boxes.py, HUANGYAN920/Mechanical, PMKS+, Gear Generator** | Let a maker go straight from an entry to working geometry: BOSL2 (snap pins, rabbit clips, print-in-place and living hinges, dovetails, Hirth joints, full gear set), Boxes.py (laser-cut finger joints, flex-cut hinges, bayonet box, spring-latched hatches, gearboxes), HUANGYAN920 (257 parametric mechanism animations in 11 categories), PMKS+ and Gear Generator (shareable linkage and gear-train designs) | A "make it yourself" link per entry; HUANGYAN920 and PMKS+ as embeddable interactive pictures | BOSL2 BSD-2, HUANGYAN920 MIT, PMKS+ MIT: **reusable code and generated images**. Boxes.py GPL-3 (generated drawings free). Gear Generator proprietary (link) |
| 8 | **Model repositories: Printables, Thingiverse, MakerWorld, GrabCAD** | The biggest pool of real, printable examples of nearly every in-scope type (about 4,700 print-in-place results on Printables; ratchets, detents, Geneva drives, cycloidal and strain-wave gearboxes, bistable switches, cam cleats, slip clutches), plus tolerance test prints. Their tags show the words makers actually use | A curated "try it" model per entry; tags as search aliases | Per-model licences (CC0 to all rights reserved). Link; reuse only CC-licensed models with credit |
| 9 | **Public-domain classics: *507 Mechanical Movements*, Hiscox's *1800 Mechanical Movements*, Reuleaux, US Navy *Basic Machines*** | Hundreds of numbered, clearly drawn movements (ratchets, Geneva stops, bayonet joint, toggle joint, clutches, universal joints, epicyclic trains, differential screw) that are out of copyright. 507movements.com has a stable page per movement | **Reusable drawings** for entries (from Internet Archive / Wikisource / Commons scans); 507movements.com as "see it animated" links | Public domain (the books). 507movements.com animations are all rights reserved (link only) |
| 10 | **Adhesive selectors: thisTOthat + manufacturer guides (Henkel/Loctite, 3M, Permabond) + RoyMech's adhesive page + Prusa's glue guide** | thisTOthat is the best beginner UX anywhere in this research: two drop-downs ("attach THIS to THAT"), ranked answers labelled strongest / fastest / least toxic / stays flexible. The manufacturer guides supply the chemistry × material ratings behind it. Prusa and CNC Kitchen cover printed plastics | The adhesive branch of the finder (material × material, then trade-offs); adhesive type entries | All rights reserved. Link and restate facts in our own words |

Close runners-up: **Roth's design catalogues / VDI 2222** and **DIN 8593** (classification
ideas, see section 3), **Mecapedia** (a Spanish university encyclopedia with the same goal,
good model for a lightweight site), **RoyMech** (per-family comparison tables for couplings,
clutches, ratchets and adhesives), **Game Manual 0** (CC BY-NC robotics wiki with a design
trade-offs table), **KHK gear reference** (gear types sorted by shaft arrangement), **supplier
catalogues** (McMaster-Carr, MISUMI, igus: the trade names for torque limiters, index plungers,
toggle clamps, position hinges, solenoids and electromagnetic locks) and the **Wolfram
Demonstrations** (interactive models whose preview snapshots are MIT-licensed).

Lower value than expected: the GitHub "awesome" lists (they only point elsewhere), the CAD
joint datasets (Fusion 360 Gallery, AutoMate) and PartNet-Mobility (only generic hinge / slider
/ screw joints), the linkage research datasets, Mechanical Design 101 (research linkages) and
the Functional Basis repository (its web interface is gone, though the vocabulary is useful).

---

## 2. Merged list of type names (run 2's starting list)

Every connection or mechanism *type* named across the 54 collections that fits the Scope,
de-duplicated and grouped into the families from `research/prompts/02-connection-types.md`
(plus two families the research suggested and the owner approved: locating/alignment and springs/energy storage).
Names are given as **proper term (aliases)**; run 2 adds the plain-English description for
each. "Found in" names the main sources per family, so run 2 knows where to look first.
Items marked † were only found in one source or only in older books, so check the name.

Standard hardware that appeared (screws, nuts, rivets, circlips, keys, set screws) is kept to
one baseline line per family, as the Scope asks.

### 2.1 Slips or lets go when overloaded (torque limiting & overload protection)
- Torque limiter (safety clutch, overload clutch): friction-disc and friction-cone slip clutch; ball-detent torque limiter; double-spring torque limiter; spring-plunger / bevelled-plunger slip coupling
- Shear-pin coupling (breakable pin, safety coupling that shears)
- Cam-and-spring overload release; spring-and-toggle relief mechanism†; overload relief for worm drives†
- Slipper clutch; slip clutch (e.g. filament spool holder)
- Adjustable-torque knob (slips at a set torque)
- Magnetic coupling and magnetic gear (non-contact; slips or skips poles when overloaded)
- Magnetic particle clutch; eddy-current clutch; fluid coupling (soft-start coupling)
- Torque-limiting plastic gear with flexing spring arms; slip hub on a split plastic gear (DuPont)
- Break-over ("click") torque wrench mechanism
- Centrifugal speed limiter / governor; rotary and linear speed limiter (damper)
- Found in: Thang (Part 3 ch. 14 "Safety clutches"), DMG-Lib, Jones ("overload relief"), Sclater & Chironis ("torque-limiting devices"), Wikipedia, McMaster-Carr, DuPont guide, Printables, Hackaday

### 2.2 Turns or moves one way only (one-way, ratchet & freewheel)
- Ratchet and pawl (rotary; linear ratchet as in cable ties and quick-release bar clamps)
- Double-pawl ratchet; reversible ratchet (lever-type stop with reversible pawl); internal ratchet; face-engagement ratchet clutch
- Silent ratchet; friction ratchet (clamping ratchet: cam, toggle or worm-pawl type); centrifugal ratchet; spring-blade ratchet; magnetic (solenoid) ratchet
- Overrunning clutch (freewheel): sprag clutch; roller clutch (drawn-cup needle-roller clutch, one-way bearing); ball overrunning clutch; ratchet overrunning clutch
- Wrap-spring clutch (spring clutch, one-revolution coiled-spring clutch); one-way spring clutch
- Freewheel hub; coaster-brake freewheel hub (Torpedo hub)
- Backstop (reverse-rotation lock, anti-reverse lock); switchable backstop; "ratchet irreversible lock" (back-driving stopper)
- Compliant (flexure) pawl and ratchet; compliant overrunning clutch; X-bob ratchet†; triggering ratchet†
- Two-way-to-one-way converter (watch-winding "rectifier" gearing)
- Capstan with one-way clutch
- Found in: every major collection; strongest in Thang, DMG-Lib, KMODDL (class N), Jones, Hiscox, 507 Movements, Reuleaux ("click-gear"), BYU/Handbook (compliant versions), RoyMech

### 2.3 Holds against load until released (self-locking & anti-back-drive)
- Self-locking worm drive (non-back-drivable worm)
- Self-locking lead screw / power screw (irreversibility, *Selbsthemmung*); screw jack
- Self-locking wedge (wedging joint); wedge clamp and wedge force booster
- Self-clamping friction systems: wrap-band (wrap-spring) brake†; clamping backstop
- Over-centre linkage used to resist back-driving (see 2.5)
- Cam cleat (rope held by toothed cams, released by lifting)
- Centrifugal safety catch (fall-arrest check hooks); Otis-style safety stop for hoists
- Self-locking gear† (DMG-Lib term); anti-backlash split gear (spring-loaded, not a lock but related)
- Thread locking (baseline): thread-locking compound (anaerobic), nylon-insert nut, castle nut and split pin, tab washer, lock wire
- Found in: Mecapedia ("Irreversibilidad"), MechSimulator, Slocum, Navy *Basic Machines*, KHK/SDP-SI (worm self-locking conditions), Roth catalogues, DMG-Lib, Thang, German Wikipedia, RoyMech

### 2.4 Tightens and holds tension (tensioning, reels & take-up)
- Ratcheting dial / reel closure (knob that tightens a lace or strap, locks, and releases by pulling or turning) — **not found in any collection** (a gap the encyclopedia would fill)
- Turnbuckle; adjustable chain link
- Belt and chain tensioners (spring-loaded idler, turnbuckle tensioner); eccentric bushing (adjusts centre distance)
- Fusee (constant-torque cone for clocks)
- Constant-force spring and constant-force retractor; constant-force (compliant) mechanism
- Windlass; differential (Chinese) windlass; differential pulley; block and tackle; capstan
- Found in: 507 Movements, Hiscox, Jones, McMaster-Carr, gm0, BYU, Printables. Weak coverage overall

### 2.5 Snaps past a dead point and stays (over-centre, toggle & cam clamps)
- Toggle joint / toggle linkage (over-centre linkage); toggle press
- Toggle clamp: horizontal hold-down, vertical, push-pull, squeeze-action (plier), auto-adjusting
- Draw latch (over-centre latch: snap-down, turn-to-open)
- Eccentric cam clamp (cam lock, cam lever); lever-type eccentric-cam clamp
- Bistable (snap-through) mechanism: bistable switch, bistable hinge, bistable latch, bistable-to-monostable magnetic hinge; tristable and multistable compliant mechanisms
- Snap-action (toggle) switch mechanism; push-push switch (mechanical T flip-flop)
- Compliant toggle cord lock
- Hatch dog (lever plus wedge); four-bar locking lever
- Found in: Thang ("Toggle linkages", "Snap motions"), DMG-Lib, Artobolevsky ("gripping, clamping"), Jones, Wikimedia Commons (toggle clamp animations), McMaster-Carr, BYU/Handbook (bistable), gm0, Roth (flip-flops)

### 2.6 Latches, catches and locks
- Spring latch (lever and spring latch); gravity latch; cam-guided latch; self-locking gate latch
- Push-to-close latch; push-to-open (push-push) latch; cam latch; lift-and-turn cam latch
- Magnetic catch / magnetic latch
- Compliant latch; one-piece metamaterial door latch (turn the handle, the latch retracts)
- Snap-fit catch clasp; push-to-release snap (see 2.9)
- Pelican hook (quick-release hook); three-ring release (parachute); wire-gate carabiner
- Tripping / trip mechanisms; releasing and disengaging hooks
- Interlock (interlocking devices that stop two actions happening together)
- Lock mechanisms as types: lever-tumbler (Chubb), pin-tumbler (Yale), Bramah lock; screw chain with automatic release†
- Combined indexing and locking mechanism (see 2.7)
- Found in: Thang (latches, 15.3 locking mechanisms), DMG-Lib, Jones, Sclater & Chironis (latching chapter), KMODDL (N13-N15 locks), Reuleaux (locks as ratchet trains), HPI Metamaterial Mechanisms, McMaster-Carr, Navy, Handbook of Compliant Mechanisms

### 2.7 Clicks into set positions or moves in steps (indexing, detents & intermittent motion)
- Ball detent (ball-click index, spring-loaded ball); spring plunger (ball-nose) used as a detent; indexing (retractable) plunger with pull ring or L-handle; detent roller and spring
- Detent hinge; position hinge (incremental-angle, set-angle, lever-lock, friction hinge); detent turntable
- Geneva drive (Maltese cross): external, internal, spherical, double; star-wheel indexing; Geneva stop (watch stop)
- Intermittent gearing: mutilated (part-toothed) gears, stop-motion gears, cycloidal intermittent gearing; mangle wheel and mangle rack
- Indexing cam (globoid / barrel cam indexer); indexing plate; worm indexing table
- Hirth joint (face spline) as a fixed-angle index
- Escapements: verge and foliot, Graham anchor, power escapement
- Step mechanism; pilgrim-step mechanism; dwell mechanisms (dwell cam, dwell linkage); film-camera claw pull-down
- Infinite stepper mechanism† (LEGO)
- Found in: all the big collections; Wikipedia ("Detent"), IFToMM ("step mechanism", "pawl [click, detent]"), McMaster-Carr (plungers, position hinges), Artobolevsky ("indexing mechanisms"), Thang (57 Geneva entries), Wikimedia Commons, Printables (about 180 "detent" models)

### 2.8 Joins and comes apart without tools (quick-release & tool-free)
- Bayonet mount / bayonet joint (twist-lock, push-and-turn); bayonet lid (bayonet box); bayonet-finger snap
- Quarter-turn fastener (Dzus); turn-lock connector
- Interrupted-screw lock (breech-plug type)
- Quick-release pin: push-button (ball-lock) and expanding-diameter
- Quick-release plate (camera plate type, e.g. Manfrotto RC2); quick-release linkage; quick-release bearing†
- Union coupling (pipe union); hose couplers
- Collet (spring collet); chuck; expanding mandrel
- Found in: 507 Movements (no. 245 bayonet joint), Hiscox, DIN 8593 (*Einrenken*), Boxes.py, BOSL2, Wikipedia (Bayonet mount, Dzus fastener), Navy, McMaster-Carr, Printables

### 2.9 Snaps or clips together (snap & clip fits)
- Cantilever snap hook (straight, tapered thickness, tapered width); U-shaped snap; L-shaped snap
- Torsion snap (snap on a torsion bar, press one end to release)
- Annular snap (continuous, e.g. pen cap; discontinuous / slotted); cylindrical snap of a shaft into a hub
- Bonenberger's lock styles: cantilever, planar, trap (compressive trap), torsional, annular; also cantilevered hole, leaf-spring snap, window snap, post-and-socket snap, hooks-and-loops
- Push-to-release snap; positive-locking segmented undercut; back-up lock
- Snap pin (split snap pin, fixed or free-turning); rabbit clip (with optional locking flanges); click-on lid; blind snap-fit fastener; battery-cover clip; Swiss picture clip
- Locators that pair with snaps: lug, tab, wedge, cone, pin, catch, living-hinge locator
- Baseline: retaining ring (circlip), E-clip
- Found in: Covestro/BASF/DuPont guides, Hubs/Protolabs/Formlabs, Bonenberger, Messler, BOSL2, Boxes.py, Wikipedia (Snap-fit), DIN 8593 (*federnd Einspreizen*)

### 2.10 Bends instead of hinging (compliant mechanisms & flexures)
- Living hinge (FDM single-strand, nylon, multi-material TPU); flex-cut (kerf-bent) living hinge for sheet
- Flexure hinges: notch (circular or elliptical), cross-axis flexural pivot (cross-strip / crossed-spring pivot), cartwheel hinge, lamina emergent torsional (LET) joint, split-tube flexure, Flex-16, wire and blade (leaf) flexures, two-axis flexure hinge, spherical flexure joint
- Parallel leaf-spring flexure (linear flexure stage); four-bar flexure linkage; large-displacement straight-line flexure
- Compliant rolling-contact element (CORE) and CORE bearing; rolling joint (Simpson rolling joint)
- Ortho-planar spring; wave spring; constant-force compliant mechanism
- Compliant force amplifier (compliant pliers, crimper); compliant gripper
- Compliant clutches: centrifugal, overrunning, pin clutch
- Flexure couplings: disc (diaphragm), bellows, beam (helical-slot)
- Lamina emergent, origami-inspired and developable mechanisms; SORCE thick-origami joint†
- Metamaterial (shear-cell) mechanisms and hinge arrays
- Magnetic hinges (MaLO / MaLDO)†
- Found in: BYU CMR, Handbook of Compliant Mechanisms, Smith's *Flexures*, Hopkins' FACT, Slocum, IFToMM chapter 16, HPI Metamaterial Mechanisms, Hackaday, Printables, Wikipedia

### 2.11 Printed already assembled, or made for 3D printing (print-in-place & 3D-printing joints)
- Print-in-place hinge (interlocking cones); print-in-place geared hinge; print-in-place indexing (locking) hinge
- Print-in-place chain links (chain mail); print-in-place planetary gear set; print-in-place vise; print-in-place cam bag clip; print-in-place wire connector
- Heat-set threaded insert; tap-in (press-fit) insert; screw-to-expand insert; captive (embedded) hex nut in a nut pocket; self-tapping screw into plastic; printed thread
- Magnets embedded with a mid-print pause
- Cantilever-spring press fit (SpringFit mount) and kerf-canceling bearing, as alternatives to tight press fits
- Tolerance / clearance test prints (not a type, but linked from every fitted joint)
- Found in: Hubs, Formlabs, Prusa, Protolabs, BOSL2, Hackaday, Printables/Thingiverse/MakerWorld, HPI (SpringFit, kerf-canceling), KMODDL (early pre-assembled prints)

### 2.12 Unusual hinges and pivots
- Knuckle hinge with filament or screw pin; flat hinge with filament pin; double hinge; folding hinge with snap lock
- Rising butt hinge; chest hinge; cabinet (multi-eye) hinge
- Friction hinge; lever-lock hinge (see 2.7 for position hinges)
- Ball-and-socket joint; gimbal; universal ball-socket joint
- Lazy tongs (scissor linkage); Hoberman / deployable scissor structures; iris mechanism
- Virtual-pivot linkage (e.g. virtual four-bar, virtual-pivot steering)
- Found in: BOSL2, Boxes.py, NopSCADlib, Thang (hinges), 507 Movements, Wikimedia Commons, gm0, LEGO books, McMaster-Carr

### 2.13 Slides, telescopes and locks in place (sliding, telescoping & linear motion)
- **Gap:** telescoping tubes that lock (twist lock, lever clamp, spring button) did not appear as named types in any collection
- Drawer slide; extrusion slide; V-groove rail and slider; dovetail slide
- Cascade and continuous elevator rigging
- Rigid (zip) chain actuator; cable drag chain (energy chain)
- Lead screw; ball screw; planetary roller screw; differential screw (fine adjustment); double reversed (diamond-thread) traverse screw
- Found in: gm0, BOSL2, NopSCADlib, 507 Movements, Hackaday, igus, Chinese collections

### 2.14 Connects two shafts or engages and disengages (clutches & couplings)
- Clutches: dog (claw) clutch; cone clutch; multi-plate friction clutch; centrifugal clutch; pin clutch; wrap-spring clutch; one-revolution clutch; electromagnetic clutch (see 2.17); fluid coupling
- Couplings: Oldham; Schmidt (offset) coupling; Hooke's universal joint (Cardan) and double universal joint; constant-velocity joint (Thompson coupling); jaw / spider coupling; grid-spring (Bibby) coupling; beam, disc and bellows couplings (see 2.10); sleeve coupling; coil-spring coupling; Hobson's joint; cone-wedge coupling; fast-and-loose pulley
- Shaft-hub connections (baseline): key and keyway, Woodruff key, spline, taper-lock bush, set screw and shaft collar, hex shaft
- Found in: RoyMech (comparison tables), DMG-Lib, KMODDL (P, Z classes), Thang, Hiscox, 507 Movements, Wolfram, Wikipedia, Making Things Move ("attaching things to a motor shaft")

### 2.15 Changes one kind of motion into another (motion conversion)
- Cams: plate, barrel (cylindrical), face, grooved, wedge, snail (drop) cam, heart cam, eccentric, desmodromic, constant-breadth (Reuleaux triangle)
- Scotch yoke; slider-crank; quick-return (Whitworth); crank-rocker four-bar; bell crank; reverse-motion and parallel-motion linkages; push-pull linkage
- Straight-line linkages: Watt, Chebyshev, Peaucellier, Roberts, Hoekens, Hart, Sarrus, Kempe
- Pantograph; elliptic trammel; swash plate; toggle as force multiplier
- Walking linkages: Jansen, Klann
- Rack and pinion (also in 2.16)
- Found in: every mechanism collection; MechSimulator and Mecapedia (motion-conversion tables), Wikimedia Commons, DT Online / NotesandSketches (school level), Wolfram, MotionGen / Linkage / PMKS+

### 2.16 Changes speed or turning force (gear trains, gearboxes & transmissions)
- Gear types by shaft arrangement: spur, helical, herringbone (double helical), internal (ring), rack and pinion; straight, spiral and zerol bevel, miter, crown (face) gear; worm and worm wheel, enveloping (hourglass / globoid) worm, crossed-helical (screw) gear, hypoid, spiroid; non-circular (elliptical) gears; lantern (cage) gear
- Gear trains: simple, compound (multi-stage), idler; planetary (epicyclic) incl. compound planetary, few-tooth-difference planetary, ball planetary; sun-and-planet; Ferguson's paradox
- Strain-wave gear (harmonic drive); chain harmonic drive; harmonic pin-ring gearing
- Cycloidal drive (Cyclo reducer, pin-wheel reducer); hypocycloid (one-tooth-difference) mechanism
- Differential: open (bevel), planetary, limited-slip; differential used as adder/subtractor
- Gearboxes: sliding-mesh, driving-ring, sequential; spur vs planetary gearbox; right-angle gearbox; modular worm gear joint (robot joint)
- Continuously variable transmissions (variators): friction, planetary, ratcheted
- Belt and chain drives: timing (synchronous) belt, V-belt, flat belt, round polycord belt, roller chain and sprocket; cable (capstan) drive; friction-wheel drive
- Magnetic gear (also 2.1)
- Found in: KHK and SDP/SI (classification by shaft arrangement), DMG-Lib (364 entries), BOSL2, cq/bd_warehouse, Gear Generator, LEGO books, gm0, Hackaday (strain-wave vs cycloidal), Wikipedia, Chinese collections

### 2.17 Needs power to hold or to let go (powered & active connectors)
- Electromagnet (holding / surface-contact electromagnet); electromagnetic door holder; electromagnetic (magnetic) lock
- Electro-permanent magnet (switches on or off with a pulse, holds with no power)
- Solenoid (push/pull linear solenoid) used as a latch or trip; solenoid-operated trip mechanism; electromagnetic trip controller†
- Electromagnetic clutch and brake; magnetic particle clutch
- Shape-memory alloy (nitinol "muscle wire") actuator used as a release
- Bimetal (thermostatic) actuator; piezoelectric actuator
- Remote-release gas spring
- Vacuum (suction) gripper; electromagnetic chuck; pneumatic gripper; electrostatic clamping (Johnsen-Rahbek effect)†
- Materials that switch between holding and releasing: shape-memory polymer, magnetorheological fluid or elastomer (stiffens in a magnetic field), fusible alloy (melts to release)†
- Electrically debondable (releasable) adhesive; stretch-release adhesive strip
- **Gaps:** motorised locks, electric strikes and servo latches did not appear as types in any collection; only as shop products
- Found in: Hackaday (electro-permanent magnet, solenoids, nitinol), NopSCADlib (OpenGrab EPM), McMaster-Carr, Slocum, Making Things Move, Artobolevsky Vol. 5, Sclater & Chironis, Wikipedia, Hiscox (electric devices), TRIZ effects database

### 2.18 Holds by magnet or friction (magnetic & friction connections)
- Embedded permanent magnets; magnetic catch; magnetic coupling
- Press (interference) fit; taper fit; crimp joint
- Clamping joint; collet; expanding mandrel; cone-wedge coupling
- Found in: Hubs/Prusa, NopSCADlib, DIN 8593 (*Anpressen, Einpressen*), Chinese collections, DMG-Lib

### 2.19 Rope, cord, strap and webbing hardware
- Cam cleat; compliant toggle cord lock; pelican hook; three-ring release; wire-gate carabiner
- Hook-and-loop fastener; zipper (slide fastener)
- **Gaps:** ladder locks, cam buckles for webbing, side-release buckles and cord locks are barely covered by any collection (only maker models and shop catalogues). Run 2 will need outdoor-gear and sewing sources for these
- Found in: Printables, Hackaday, Handbook of Compliant Mechanisms, Navy, Wikimedia Commons

### 2.20 Interlocking joints (puzzle, dovetail, woodwork and CNC joinery)
- Dovetail (straight, tapered, sliding, shouldered, double); jigsaw / puzzle joint; hooked jigsaw halving
- Finger (box) joint incl. spring, barb and snap finger styles; angled finger joint
- Mortise and tenon; loose (inserted) tenon; pegged or draw-key-locked tenon; hammer tenon; catch tenon (detachable)
- Halving (lap) joints; scarf joints (hooked scarf, scarf with dovetail keys); bow-tie (butterfly) key
- Japanese joints: gooseneck splice (*kama tsugi*), dovetail splice (*ari tsugi*), four-way tenon splice, pegs (*sen*), wedges (*kusabi*) and draw keys (*shachi-sen*)
- CNC and flat-pack joints: tab-and-slot, slotting (tool-free shelf) joint, knock-down (KD) fittings, WikiHouse bow-tie connector, dogbone and T-bone corner reliefs
- Laser-cut sheet joints: loop-insert, hem, tab-insert, interlocking flaps, cantilever-spring finger / cross / T joints (SpringFit)
- Interlocking partition seams (jigsaw, hammerhead, sawtooth); Hirth joint
- Found in: Gros's *50 Digital Wood Joints*, Japanese joinery books and The Joinery animations, Tsugite, WikiHouse, IBOIS, Boxes.py, Joinery (Zheng), SpringFit, BOSL2, Hubs/Formlabs (printed interlocking joints)

### 2.21 Glues (adhesive types, by how they harden)
- Cyanoacrylate (superglue, instant adhesive): extra-thin (capillary), thin, gel, rubber-toughened, odourless / foam-safe, surface-insensitive (for wood and leather), with polyolefin primer (for PE/PP), UV-cure; CA debonder (undoes it)
- Epoxy: two-part (5-minute and standard), flexible, toughened, metal-filled, epoxy putty; one-part heat-cure
- Structural acrylic (methacrylate / MMA, second-generation acrylic): two-part, two-step no-mix, low-surface-energy (LSE) acrylic for PE/PP
- UV / light-curing adhesive (acrylic)
- Polyurethane: two-part; one-part moisture-curing (foaming); reactive polyurethane hot melt (PUR)
- Hot melt (glue gun): EVA, polyamide, polyolefin
- PVA (polyvinyl acetate): white glue, yellow (aliphatic resin) wood glue, water-resistant (Type II) and waterproof (Type I) grades, flexible PVA (fabric, bookbinding)
- Contact adhesive (contact cement: polychloroprene or natural rubber, solvent- or water-based); spray adhesive
- Elastomeric solvent-based "rubbery" glues (the Goop / E6000 family)
- Silicone (RTV) adhesive and sealant; MS polymer (silane-modified polymer) hybrid
- Anaerobic adhesives: threadlocker, retaining compound (metal only)
- Solvent cement (solvent welding): acetone for ABS/ASA, MEK and polystyrene modeller's cement for polystyrene, dichloromethane for acrylic and polycarbonate, PVC pipe cement, limonene for HIPS, isopropyl alcohol for PVB; "ABS juice" (plastic dissolved in solvent as a filler glue)
- Pressure-sensitive adhesive (tapes, labels, removable adhesives)
- Construction adhesive; plastisol
- Natural glues: hot and liquid animal (hide) glue (reversible with heat and water), casein, starch and dextrin paste
- Wood-industry glues: resorcinol, urea-formaldehyde
- For resin prints: UV-curing resin used as glue
- Techniques that combine types: CA tack points plus epoxy fill; glue plus screws, inserts or magnets
- Special: electrically debondable adhesive; stretch-release adhesive strips; dry (gecko-style) adhesive
- Joint shapes for glued joints: butt, lap, scarf, single and double strap
- Found in: Henkel/Loctite, 3M, Permabond guides; ASC and the ASC-CATIA-FEICA classification manual; Wikipedia ("Adhesive", "List of glues"); thisTOthat; RoyMech; Prusa; CNC Kitchen; Woodcraft and Rockler glue guides; DT Online; Slocum; McMaster-Carr

### 2.22 Locates parts exactly (locating & alignment) — added by the owner, R13
- Kinematic coupling (three-groove), quasi-kinematic coupling, kinematic mount
- Elastic averaging (many small compliant features averaging out errors)
- Exact-constraint design; nesting force (what holds a part against its locating points)
- Locating features: dowel pin, locating lug and tab, cone, V-guide, jig pin
- Found in: Slocum, Blanding's *Exact Constraint*, Hopkins' FACT, BYU, Bonenberger (locators), Functional Basis ("guide", "position")

### 2.23 Stores energy (springs & energy storage) — added by the owner, R13
- Constant-force spring; ortho-planar spring; wave spring; torsion spring; leaf spring; gas spring; volute and disc springs
- Moulded-in plastic springs (on ratchet wheels, snap arms)
- Found in: Slocum, BYU, Hiscox, McMaster-Carr, DuPont, RoyMech

### Types that are in the collections but outside the Scope
Whole machines (walking robots, drivetrains with wheel counts, suspensions, pinsetters,
engines, pumps), hydraulic and pneumatic circuits, standard fastener ranges (screws, bolts,
nuts, washers, rivets, pins), welding and soldering, knots and textile joining. These can come
back later as baseline entries or new families if the owner wants them.

---

## 3. Classification schemes, and which ideas suit a beginner flow chart

### 3.1 The schemes found
| Scheme | Used by | How it sorts | Beginner fit |
|--------|---------|--------------|--------------|
| **Kinematic pairs and chains** (Reuleaux): lower pairs (surface contact: turning, sliding, screw) vs higher pairs (line or point contact: gears, cams); form-closed vs force-closed | Reuleaux, KMODDL (Voigt classes A–Z), DMG-Lib, IFToMM | By how two parts touch and move | Idea good, words bad. Use as "does it turn, slide, screw, roll?" |
| **Degrees of freedom** (rigid, revolute/hinge, slider, cylindrical, pin-slot, planar, ball) | Fusion 360, Onshape, build123d, PartNet-Mobility, Slocum | By which motions are left free | Very good: a short, fixed motion vocabulary CAD users already know |
| **By input → output motion** (rotation → oscillation, rotation → straight line, continuous → intermittent) | Thang (Parts 1–2), DMG-Lib search, MechSimulator, Mecapedia, UK D&T (4 motion types: linear, rotary, reciprocating, oscillating) | By what goes in and what comes out | Very good for the motion-converter and gear branches |
| **By the job it does** (stop / detent / lock; overload relief; indexing; clamping; one-way drive; safety) | Artobolevsky (functional table), Jones, Sclater & Chironis, Thang (Part 3), RoyMech (17 groups from Uicker/Shigley), Handbook of Compliant Mechanisms (kinematic vs kinetic jobs) | By purpose | **Best fit for this project**, because makers know what they need, not what it's called |
| **By structure** (link-containing, cam, gear, friction, wedge, screw, belt/chain, pressurised medium, step) | DMG-Lib (9 groups), Artobolevsky (volumes), Chinese collections (11 groups) | By what it is made of | Useful as a second axis ("which kind of parts can you make?") |
| **By how it holds** (shape / form-fit, friction / force-fit, material bond) and **whether it can be undone** (releasable, conditionally releasable, permanent) | DIN 8593 / German Wikipedia (*Formschluss, Kraftschluss, Stoffschluss*), Roth catalogues, Messler (rigid / elastic / plastic) | By holding principle and removability | Very good. Maps onto the existing `removability` finder field |
| **By assembly motion** (lay on, insert, slide in, hook in, twist-lock, spring in) | DIN 8593 group 4.1, Bonenberger (engage direction, assembly motion) | By how the parts go together | Good plain verbs for a "how do the parts go together?" question |
| **By shaft arrangement** (parallel, intersecting, crossed / skew, coaxial) | KHK, SDP/SI, gear reducers | By geometry | Good first question in the gear branch |
| **By function verbs** (couple, join, guide, allow DOF, secure, position, stop, transmit, change) | Functional Basis (NIST), TRIZ effects | By verb + flow | Good wording source for finder questions and synonyms |
| **By material pair** (this × that) and **how the glue hardens** (dries, cools, stays tacky, reacts: two-part, moisture, no air, UV, heat) | thisTOthat, manufacturer guides (chemistry × substrate), ASC / Wikipedia | By materials, then chemistry | Excellent for the adhesive branch |
| **Snap-fit shape** (cantilever, U/L, torsion, annular) and lock style (Bonenberger's 5) | Covestro, BASF, DuPont, Bonenberger | By what flexes | Good inside the snap-fit family |
| **Joint position** (frame / board / carcass × lengthening / corner / cross / T / slot); Japanese *tsugite* vs *shiguchi* | Gros, Japanese joinery | By what meets what | Good inside the joinery family |
| **Freedom and constraint** (FACT's 50 types; exact constraint) | Hopkins, Blanding | By wanted motion | Idea good ("which directions should it move?"), maths too hard |

### 3.2 Ideas to use in the beginner flow chart
Proposed order of questions, each idea taken from the collections above:

1. **"What do you need it to do?"** (the job; TRIZ's verb + object pattern, e.g. "hold +
   a solid part"), with plain buttons: join and hold, let it move,
   stop it moving back, let go when overloaded, click into positions, lock and release by
   hand, change speed or force, change the kind of motion, hold with power, glue it. (From
   Artobolevsky, Jones, Sclater & Chironis, Thang Part 3, Functional Basis verbs.)
2. **"Should it move? How?"** with arrow icons: doesn't move, turns, slides, turns and slides,
   swivels, bends, moves in steps. (Degrees-of-freedom vocabulary, UK D&T motion types,
   LEGO Idea Book pictograms.)
3. **"How often will you take it apart?"**: never, sometimes with tools, often by hand. (DIN
   releasable / permanent split, snap-fit return angle, Messler.)
4. **"What holds it together?"**: its shape, friction or clamping, glue, a magnet or power.
   (*Formschluss / Kraftschluss / Stoffschluss*, Reuleaux closure.)
5. **"How will you make it?"**: 3D print (FDM / resin), laser-cut sheet, CNC wood, buy the part.
   (Existing `processes` field; NopSCADlib's "printed vs vitamin" split.)
6. Branch-specific questions: for gears, "are the shafts parallel, crossing or offset?" (KHK);
   for glue, "attach THIS to THAT" then "strongest / fastest / flexible / fills gaps / can be
   undone" (thisTOthat, 3M's "choose for the hardest material first"); for snap fits, "is a
   snap fit right here at all?" (Bonenberger's Step 0).
7. **Screen, then compare.** Ask a few elimination questions, show the survivors, then give
   each survivor a standard one-page card. This is how the industrial joining selectors work
   (Swift & Booker's matrix then PRIMA sheet; Ashby's screen, rank, then datasheet in Granta
   EduPack), and their shared questions translate well: what are the two parts made of, must
   it come apart, how many will you make, which way is it loaded (pulled, sheared, peeled,
   twisted), heat or water, what tools do you have.
8. **Result page = a shortlist, not one answer**, laid out as a comparison table per family
   (RoyMech's coupling and clutch tables, gm0's design trade-offs table), each row linking to
   an entry.

Entry-page ideas that came up again and again:
- A looping animation at the top (Commons, Thang, The Joinery, 507movements.com). Colour-code
  the parts and refer to colours in the text (Thang).
- State input → output and, for moving joints, the motion range (MechSimulator, PartNet-Mobility).
- Several variants of one idea side by side (Hiscox, Jones, Thang's numbered variants).
- One number per making method (e.g. FDM clearance), and "rules as multiples of wall or sheet
  thickness" (Hubs, Boxes.py).
- "Try it" links: a printable demo model, a clearance test print, and a generator with the
  settings filled in (Printables, BOSL2, Boxes.py, Gear Generator share URLs).
- Everyday examples before theory (BYU's ketchup-lid hinge, Navy *Basic Machines*, DT Online:
  cable tie = linear ratchet).
- Proper term plus aliases as a field, and a synonym table mapping beginner words to entries
  (IFToMM's "PAWL [CLICK, DETENT]", Functional Basis "correspondents", DMG-Lib thesaurus,
  Printables tags).
- A lightweight site built from one data file listing every entry (Mecapedia's `db.js`,
  HUANGYAN920's single JavaScript object), which suits a free static host.

---

## 4. Licensing: what can be linked, and what can be reused

**Linking is fine for everything found.** A plain link to a public page needs no permission.
Don't link to pirated copies (unofficial PDFs of the Sourcebook, Sandin and Artobolevsky
circulate on file-sharing sites) or to third-party mirrors when an official copy exists (for
example, link the SDP/SI gear handbook on sdp-si.com, not the mirror it was read from).

**Reusable content, with conditions:**

| Source | Licence | What we can reuse | Conditions |
|--------|---------|-------------------|------------|
| Wikipedia text | CC BY-SA 4.0 | Definitions (adapted), category lists | Credit, and our adapted text must also be CC BY-SA |
| Wikimedia Commons | Per file: CC BY-SA, CC BY, public domain, GFDL | Animations and diagrams (ratchet, Geneva, harmonic and cycloidal drives, toggle clamps, CV joints, FACT chart, torque limiter and compliant-mechanism images) | Check each file's licence; credit the author; share-alike where stated |
| *507 Mechanical Movements*, Hiscox, Reuleaux (1876), US Navy *Basic Machines* | Public domain | Engravings and descriptions (from Internet Archive, Wikisource and Commons scans) | None legally; crediting the scan source is good practice. Not the 507movements.com animations |
| Jones, *Ingenious Mechanisms* Vol. I (1930) | Possibly US public domain since 2026 (unverified) | Drawings, if confirmed | Check before use. Vol. II (1936) only if its copyright wasn't renewed (not checked); Vols. III–IV are in copyright |
| BOSL2 | BSD-2-Clause | Code and generated renders | Keep the copyright notice |
| HUANGYAN920/Mechanical | MIT | The mechanism list, text and exported SVGs | Keep the copyright notice (new, unvetted project) |
| PMKS+, Joinery (Zheng), HPI Metamaterial Mechanisms editor, IBOIS tools | MIT | Code; images we generate with them | Keep the copyright notice |
| Wolfram Demonstrations | CC BY-NC-SA 3.0; preview snapshots also MIT | Snapshots freely; demos non-commercially | Credit; non-commercial and share-alike for the demos themselves |
| Boxes.py | GPL-3 (code); generated drawings not covered | Drawings we generate | Code reuse must stay GPL |
| Game Manual 0, DT Online, UArk open textbook, Gros's *50 Digital Wood Joints* | CC BY-NC (gm0 2.0; UArk, version unverified); CC BY-NC-SA (DT Online 3.0, Gros 3.0/4.0) | Text and images, non-commercially | Credit; non-commercial; share-alike where stated. Only safe if the encyclopedia stays non-commercial |
| WikiHouse | CC BY-SA 4.0 | Joint drawings and guides | Credit; share-alike |
| AutoMate dataset; awesome-openscad and awesome-3d-printing | CC0 | Anything | None |
| MechVerse dataset | CC BY 4.0 | Clips and data | Credit, say what changed |
| Printables / Thingiverse models | Per model | Only models under CC or similar | Follow each model's licence; credit the designer |

**Link only (all rights reserved or unclear):** DMG-Lib, Thang's videos, KMODDL (mixed per
item, unverified), BYU CMR and the Handbook, all the printed handbooks (Artobolevsky, Sclater &
Chironis, Sandin, Bonenberger, Messler, Roth, Smith, Blanding, Howell, Petrie, LEGO books,
*Making Things Move*), all manufacturer and service guides (Covestro, BASF, DuPont, Hubs,
Protolabs, Formlabs, Henkel, 3M, Permabond, KHK, SDP/SI), supplier catalogues, RoyMech,
Mecapedia, Mechanical Design 101, Hackaday, thisTOthat, Slocum's *FUNdaMENTALs*, IFToMM
dictionary, DIN standards, FRCDesign.org, The Joinery GIFs, MotionGen and Gear Generator.

**Facts are free.** Type names, numbers from design guides (clearances, strain limits), which
glue suits which material, and classification ideas can be restated in our own words with a
citation, whatever the source's licence. What we must not do is copy the wording, tables or
pictures.

**Project licence (decided 2026-09-26: CC BY-SA, R14):** since the encyclopedia will
use CC BY-SA material (Wikipedia, most of Commons, WikiHouse), CC BY-SA for our own content is
the right fit. Using the non-commercial sources (gm0, DT Online, Gros, Wolfram demos) would
also tie the project to non-commercial use, so prefer linking to them over copying.

---

## 5. Gaps and notes for run 2

- **Missing types:** ratcheting dial / reel closures, webbing buckles (cam buckle, ladder
  lock, side-release), cord locks, motorised locks and electric strikes, and solenoid latches
  as latches. No collection covers these as types, so they are the encyclopedia's clearest
  gap to fill. Run 2 will need outdoor-gear, sewing and access-control sources for them.
- **Adhesives for 3D-printing plastics** (PLA, PETG, resin) are only covered by maker guides
  (Prusa, CNC Kitchen), not by the industry references.
- **No existing finder** chooses between mechanical connection types for beginners. The real
  selectors are for glue (thisTOthat, 3M's chart, Woodcraft's avoid/try lists), for mechanisms
  by motion (DMG-Lib's faceted search, MechSimulator's table), for industrial joining processes
  (TWI, Swift & Booker, Granta EduPack, mostly welding) and for physical effects (TRIZ, an
  unranked list). The flow chart is new work, but it can borrow their question sets.
- **Name conflicts to settle in run 2:** "detent" (IFToMM uses it as a synonym of pawl; most
  sources mean a spring-loaded click position); "torque limiter" vs "safety clutch" vs "slip
  clutch"; "overrunning clutch" vs "freewheel" vs "one-way clutch"; old book names ("mutilated
  gear", "clutch-box", "click") vs modern ones.
- **Sources that could not be opened** (blocked or bot-checked in this environment): Zhihu,
  CSDN, the Wayback Machine, Printables and MakerWorld web pages, Xometry, sdp-si.com, parts of
  Cornell's Digital Collections, nostarch.com, AccessEngineering. Facts depending on them are
  marked `[uncertain]` in the JSON.
