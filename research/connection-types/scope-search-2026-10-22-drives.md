<!-- Saved into the repository on 2026-10-22 from the search agent's working notes (R36, R37). -->
# Scope search 2026-10-22: drives

One of seven web searches for Phase 5 (see `scope-search-2026-10-22-combined.md` for the combined
list and Claude's decisions). The agent's write-up follows unchanged, except this header. Folders
it mentions (`working-notes.md`, `pages/`, `dl/`) were working files and were not kept. Suggestion
numbers below are the agent's own; they map to outline items like this:

| Suggestion | Item | Outline name |
|---|---|---|
| 1 | 448 | Linked lead screws (synchronised Z axis, Z sync belt, screw jack system) |
| 2 | 449 | Line shaft and power take-off (lineshaft, jackshaft, countershaft, PTO) |
| 3 | 450 | Bevel splitter and counter-rotating drive (T-gearbox, three-way bevel gearbox, contra-rotating coaxial shafts) |
| 4 | 451 | Several motors driving one load (dual-motor drive, ganged motors, dual-motor gantry) |
| 5 | 452 | Cable splitter (cable doubler, one-into-two cable junction, dual-control brake splitter) |

---

# Gap search: one-to-many drives and many-to-one (combining inputs) (group `drives`, R36)

Date: 2026-10-22. Raw working notes with longer quotes are in
`working-notes.md` in this folder; downloaded page text is in `dl/`.

## 1. Summary

- **5 new entries** suggested (numbers from 410 to be given later): linked lead screws, line shaft
  and power take-off, bevel splitter and counter-rotating drive, several motors driving one load,
  cable splitter. All fit existing families; **no new family**.
- **17 existing entries to tag** for the new finder answers ("one input, several outputs" and
  "combining inputs"). For this group "tag" means the finder tree, not the "Made of" filter: these
  are jobs, not materials (D45).
- **7 notes additions** suggested (syringe hydraulics, cam and follower, whippletree, spur gear
  train, belt drives, differential, sprag clutch).
- **8 candidates rejected or merged** (whippletree and summing linkage already exist, multi-spindle
  head, transfer case, fluid manifold, RC dual-output gearboxes, PTO and screw jacks merged).
- The draft direction table (scope note §2.1) was checked against sources. Every row holds, with two
  fixes for the guide page:
  1. "An open belt or chain round several pulleys: all the same way" is true only for pulleys
     inside the loop. A pulley driven by the back of the belt turns the other way.
  2. "Each extra gear flips it again" should be explained as counting gears or counting meshes,
     because sources give the odd/even rule both ways round (see §6).

Main finding: the owner's "one shaft turning two shafts the same way or opposite ways" is answered
almost fully by existing entries. Only five arrangements are things makers look up by name and have
no home. The guide page (§8) carries most of the value.

## 2. Suggested new entries (most useful first)

| # | Outline name | Family key | One-line description | Sources opened | Why distinct from nearest existing entries |
|---|---|---|---|---|---|
| 1 | Linked lead screws (synchronised Z axis, Z sync belt, screw jack system) | motion conversion | Two or more lead screws turned together by one motor through a closed toothed belt, a chain, or shafts and right-angle gearboxes, so a printer bed, CNC gantry or lifting platform rises level at every corner | EEVblog forum (Ender 3 Max dual-Z thread); Whadda forum K8200 dual leadscrew; Reddit r/3Dprinting 1bpuytx, 14tvq4s, 1lfmebi (via Arctic Shift); Printables 155117, 229071 (URL from Printables API, page not opened); ZIMM wiki "How are multiple screw jacks mechanically synchronised?"; ZIMM wiki "What is a bevel gearbox" | Lead screw and nut (17) covers one screw. Belt drives (100) covers the belt. Neither covers keeping several screws in step, the main question makers ask (search term "Z sync belt") and the most common one-to-many job on 3D printers. Screw-jack systems are the industrial name for the same idea. |
| 2 | Line shaft and power take-off (lineshaft, jackshaft, countershaft, PTO) | gear trains, gearboxes & transmissions | One long driven shaft with several pulleys, sprockets or gears along it, each taking power off to a different machine or part, as in old workshops, lapidary benches, toy steam-engine workshops and tractor power take-offs | Wikipedia Line shaft; Wikipedia Jackshaft; Wikipedia Power take-off; SawdustZone forum "A One-Motor Shop" | No entry covers one driven shaft feeding many take-offs. "Countershaft" appears only as a gearbox alias in 267. It is the canonical answer to "turn one shaft and drive several in the same direction", and it covers the go-kart and minibike jackshaft. |
| 3 | Bevel splitter and counter-rotating drive (T-gearbox, three-way bevel gearbox, contra-rotating coaxial shafts) | gear trains, gearboxes & transmissions | One bevel gear driving two facing bevel gears, so one input turns two outputs on one line in opposite directions. If one output shaft runs inside the other, it spins two propellers, rotors or discs against each other on the same axis | 507 Mechanical Movements nos. 7, 53, 74; Google Patents US5450714 (rotary cutter counterrotation gearbox); Hackaday.io project 6711 (single-feed contra-rotating hub); Wikipedia Contra-rotating propellers; Wikipedia Coaxial rotors; ZIMM ZK bevel gearbox types; ZIMM bevel gearbox wiki; Printables 120260 kinetic sculpture contra-rotating discs (URL from Printables API, page not opened) | Bevel gears (98) covers a bevel pair turning a corner. The owner's "opposite directions" case needs the three-gear arrangement, the T-gearbox component and the coaxial counter-rotating shaft. These are named things (contra-rotating, counter-rotating gearbox, T-type bevel gearbox) with no home. The differential (97) contains the same gears but frees the outputs; this one keeps them locked. |
| 4 | Several motors driving one load (dual-motor drive, ganged motors, dual-motor gantry) | gear trains, gearboxes & transmissions | Two or more motors geared to the same gear, shaft or axis so they add their power, share the load or hold each other against play, as in two-motor robot gearboxes, CNC gantries driven at both ends and printers with two Z motors | Chief Delphi "designing a three motor gearbox" #17; Motion Control Tips (ATLANTA zero-backlash rack and pinion, electrical preload); V1 Engineering docs "Dual endstops"; EEVblog dual-Z thread; Whadda K8200 thread; Reddit 1bpuytx; KHK Gear Technical Reference §17.1 (load division) | The owner asked for this explicitly (many-to-one). The differential (97) covers two motors making two different motions. The anti-backlash gear (201) is the one-motor mechanical preload. Nothing covers motors sharing one output, keeping them in step, or electrical preload. |
| 5 | Cable splitter (cable doubler, one-into-two cable junction, dual-control brake splitter) | gear trains, gearboxes & transmissions | A small block or lever plate that joins one control cable to two, or two to one, so one lever works two brakes, one throttle opens two carburettors and an oil pump, or either of two levers works the same brake | IHPVA trike page "2 into 1 Brake Handles"; SJS Cycles Problem Solvers Cable Doubler 1.2; SJS Cycles Jtek Double Control splitter; Yamaha-enduros forum "How does the Split-cable junction work?" | Bowden cable (102) has no splitter. Whippletree (91) shares the force equally and lets the travel differ, while a splitter moves every cable the same distance and does not balance force ("It does not provide 'balance' between the brakes", IHPVA). The two-into-one version is an "either input" combiner, a many-to-one case that nothing else covers. |

### Outline-ready blocks

```yaml
  - name: Linked lead screws (synchronised Z axis, Z sync belt, screw jack system)
    category: motion conversion
    description: Two or more lead screws turned together by one motor through a closed toothed belt, a chain, or shafts and right-angle gearboxes, so a 3D-printer bed, CNC gantry or lifting platform rises level at every corner
    notes: "Also covers belt- and chain-linked screws on 3D printers and CNC machines, screw-jack lifting systems linked by shafts and T-shaped bevel gearboxes, where to feed the drive in (the middle of a long shaft line is better than one end), belt tensioners, setting all screws level before tightening the pulleys, and the alternative of one motor per screw (see Several motors driving one load). Safety: a skipped tooth or slipped pulley leaves the axis out of level and can jam it; lifting platforms need self-locking screws or a brake. Also list gear trains, gearboxes & transmissions and sliding, telescoping & linear motion in other_families"
  - name: Line shaft and power take-off (lineshaft, jackshaft, countershaft, PTO)
    category: gear trains, gearboxes & transmissions
    description: One long driven shaft with several pulleys, sprockets or gears along it that each take power off to a different machine or part, as in old workshops, lapidary benches, toy steam-engine workshops and tractor power take-offs
    notes: "Also covers fast and loose pulleys for stopping one machine, stepped pulleys for speed, a clutch on each take-off, twisting a belt to make one output turn the other way, the jackshaft as a middle shaft that changes the ratio (go-karts, minibikes), and the splined PTO shaft. Safety: spinning shafts, belts, set screws and PTO shafts catch hair and loose clothing and cause deaths and amputations; guard every exposed part. Also list clutches & couplings in other_families"
  - name: Bevel splitter and counter-rotating drive (T-gearbox, three-way bevel gearbox, contra-rotating coaxial shafts)
    category: gear trains, gearboxes & transmissions
    description: One bevel gear driving two facing bevel gears, so a single input turns two outputs on one line in opposite directions; with one output shaft running inside the other it spins two propellers, rotors or discs against each other on the same axis
    notes: "Also covers T-type bevel gearboxes with one input and two outputs (a through shaft turns both ends together), reversing an output by flipping the gearbox or by sliding a dog clutch onto the other bevel, planetary contra-rotating hubs, kinetic sculptures with counter-rotating discs, and two-motor coaxial RC helicopters as the electric alternative. Safety: two sets of blades or propellers turning against each other; guard them. Also list motion conversion in other_families"
  - name: Several motors driving one load (dual-motor drive, ganged motors, dual-motor gantry)
    category: gear trains, gearboxes & transmissions
    description: Two or more motors geared to the same gear, shaft or axis so they add their power, share the load or hold each other against play, as in two-motor robot drive gearboxes, CNC gantries driven at both ends and 3D printers with two Z motors
    notes: "Also covers gearing motors so their speed-torque curves match and they share the load, two steppers on one driver versus one driver each, auto-squaring a gantry with two endstops, electrical preload (two pinions on one rack pulling against each other to remove backlash), and one-way clutches that let either a motor or a hand crank drive. Safety: motors fighting each other or out of step can twist a frame, snap a shaft or tear a machine apart; turn the power off before swapping a motor's plug. Also list powered & active connectors in other_families"
  - name: Cable splitter (cable doubler, one-into-two cable junction, dual-control brake splitter)
    category: gear trains, gearboxes & transmissions
    description: A small block or lever plate that joins one control cable to two, or two to one, so one lever works two brakes, one throttle opens two carburettors, or either of two levers works the same brake
    notes: "Also covers motorcycle throttle and oil-pump junction boxes, tandem and trike brake splitters, home-made two-cable brake-lever plates, two-lever dual-control splitters, and setting each cable's slack with barrel adjusters. A splitter moves every cable the same distance but does not even out their pull (compare Whippletree). Safety: if the lever, splitter or shared cable fails, every brake on it fails; some trike race rules require two separate brake systems; a binding junction can hold a throttle open. Also list motion conversion in other_families"
```

Notes on details for the research run (from the sources, so the deep run starts with them):
- Linked lead screws: options listed by a maker (Reddit 1bpuytx) are two steppers on one driver,
  the same with a timing belt, two independent steppers with two Z endstops, or one stepper and a
  timing belt. A forum commenter says K1-series and Bambu printers use one motor, a belt and three
  screws: ⚑ needs confirming. Printables 229071 lists 20T GT2 pulleys with an 8 mm bore and a closed
  GT2 belt of about 1200-1600 mm for a CR-10 Max (URL from Printables API, page not opened). ZIMM
  says every extra gearbox, shaft or bearing adds "small efficiency losses and additional backlash".
- Line shaft: Wikipedia gives line-shaft power loss as "typically 25% and often much higher". The
  jackshaft article records clutches that let "any or all of the dynamos be driven by either or
  both of the engines", which is one-to-many and many-to-one in one part.
- Bevel splitter: Hackaday.io 6711 says most contra-rotating drives "require a gear box between
  engine and propellers using two shafts (typically one inside the other)".
- Several motors: V1 Engineering says the MPCNC and LowRider have "two of the axes ...
  independently powered at each end", and auto-squaring needs "independently wired steppers (5
  driver control board)".
- Cable splitter: the Jtek two-into-one splitter has "Maximum cable travel 12mm" and is made for
  road (short-pull) brakes only, not V-brakes.

## 3. Existing entries to tag for the new finder answers

Tag for "one input, several outputs" (1→n), "combining inputs" (n→1), or both. Evidence is quoted
from each entry's results JSON unless a source is named.

| Item | Name | Tag | Evidence |
|---|---|---|---|
| 267 | Spur gear pair and gear train (simple, compound, idler) | 1→n | "passes rotation from one shaft to a parallel shaft, and can reverse or keep its direction (idler gear)"; Firgelli: a central driver gear drives several equal spindle gears, "One external mesh reverses direction" |
| 100 | Belt drives (timing, round and V-belt) | 1→n | aliases "serpentine belt", "open belt drive (both pulleys turn the same way) / crossed belt drive (they turn opposite ways)"; Wikipedia Serpentine belt: "a single, continuous belt used to drive multiple peripheral devices" |
| 202 | Chain and sprocket drive | 1→n | "driver and driven sprockets turn the same way"; idler sprockets |
| 98 | Bevel gears (incl. mitre and crown gears) | 1→n | the base of the bevel splitter; 507 no. 53: two loose bevels "driven in opposite directions by the third gear" |
| 93 | Planetary gear set (epicyclic gearing) | 1→n | one sun drives several planets; KHK §17.1: "uses two or more planet gears to balance the load evenly" |
| 97 | Differential (bevel gear differential) | both | "adds and averages two rotations ... used to let two motors share one robot wrist"; Wikipedia: third shaft gives "the sum or difference of the two input numbers" |
| 91 | Whippletree (load-equalising lever) | both | "share one pull between four, eight or more points" and "used the other way round, it adds several input movements into one output movement" |
| 84 | Cam and follower (plate, barrel and face cams) | 1→n | alias "camshaft (several cams on one shaft)" |
| 200 | Swashplate and wobble plate | 1→n | "turns rotation into back-and-forth motion of rods around it" (several rods from one shaft) |
| 300 | Syringe hydraulics (hydraulic lever, Pascal's principle) | 1→n | "several outputs on one line, such as a car's brake calipers" (but see §4 and §6) |
| 102 | Bowden cable (push-pull cable) | 1→n (via splitter) | used with the new cable splitter; "a servo in a robot's body moving a finger, eyelid or ear" |
| 10 | Sprag clutch | n→1 | when_to_use: "letting a second motor or a hand crank drive a mac[hine]"; Wikipedia Freewheel: rotor runs on when an engine stops |
| 11 | Roller clutch (one-way bearing) | n→1 | "lets a driven part coast or run faster than its drive (overrunning), e.g. a starter motor or e-bike drive" |
| 201 | Anti-backlash gear (split scissor gear) | n→1 (cross-link) | the one-motor mechanical version of the two-motor electrical preload in new entry 4 (Motion Control Tips: "Mechanically preloaded systems use a split-pinion") |
| 133 | Hose barb (barbed tube fitting) | 1→n (fluid) | aliases "barb tee, barb wye"; a "manifold generator" model |
| 166 | Quick couplers for tubes and hoses | 1→n (fluid) | off-the-shelf parts list "tee, Y" |
| 302 | Switching valve (directional control valve, solenoid valve) | 1→n (fluid) | alias "valve manifold, valve island, sub-base" |

Considered and not tagged (no evidence in their text of one-to-many use): bell crank (199) and
servo horn (82). They could carry several rods, but neither entry says so and I found no source.
Magnetic gear (143) and flexible drive shaft (195) were not tagged either.

## 4. Notes additions for existing entries

1. **300 Syringe hydraulics.** The entry says "several outputs on one line ... all move
   together". That holds only when every output meets the same resistance (brake calipers all stop
   on the disc). Add: "With a tee feeding two cylinders, the one with the lighter load moves first;
   to keep them in step, tie them mechanically (a rack on each rod with the pinions on one shaft) or
   use a flow divider." Sources: Power & Motion, "Book 2 Chapter 11: Flow divider circuits" ("if
   the resistance in all the branches is not identical, flow can vary greatly in each path");
   Power & Motion, "Synchronizing circuits" (rack and pinion on a single shaft; "A chain and
   sprocket arrangement can be used if synchronized motion is required in only one direction");
   HAWE fluid lexicon, "Open loop synchronisation control". The same note fits **301 Air or
   hydraulic cylinder**.
2. **84 Cam and follower.** Add a phased camshaft: "Several identical cams on one shaft, each
   turned a little further round, give a travelling wave, as in automata and wave sculptures (one
   student build used a 20° step between cams)." Source: UT Austin wiki, "Lady Bird Lake Wave
   Generator".
3. **91 Whippletree.** Add the aliases "summing linkage, linkage adder" and one line contrasting
   it with a cable splitter: the whippletree evens out force, the splitter copies distance. Sources:
   Wikipedia Whippletree ("Linkage-type mechanical analog computers use whippletree linkages to add
   and subtract"); IHPVA quote above.
4. **267 Spur gear train.** Add "one central gear driving a ring of gears around it: all the outer
   gears turn the same way as each other and opposite to the centre (multi-spindle drill heads,
   kinetic toys); with an outer ring gear as well, the planets must be spaced to suit the tooth
   counts". Sources: Firgelli multiple drilling machine article; KHK §17.1 Condition No. 2
   ((za + zc)/N = integer for evenly spaced planets) and §17.1 star type ("becomes an ordinary gear
   train").
5. **100 Belt drives.** Add "a pulley driven by the back of the belt turns the opposite way; one
   belt driving everything means one break stops everything". Source: Wikipedia Serpentine belt.
   Also "a crossed belt suits flat and round belts; V and timing belts need a twist between each
   pulley" (Wikipedia Belt (mechanical)).
6. **97 Differential.** Add a line on locked versus free outputs, using the transfer case as the
   everyday example: "front and rear tyres never turn at the same speed", so road-going
   four-wheel-drive needs a centre differential. Source: Wikipedia Transfer case.
7. **10 Sprag clutch.** It already mentions a second motor or hand crank. Add the phrase "either of
   two inputs can drive, and the idle one is not dragged round" so the finder's "combining inputs"
   answer can point to it. Source: Wikipedia Freewheel (rotorcraft).

## 5. Rejected or merged candidates

| Candidate | Decision | Why |
|---|---|---|
| Whiffletree or equaliser bar | Tag existing 91 | Already covers one pull shared between several lines, stacking, brake balance bars, parking-brake equalisers and the summing case. |
| Summing linkage (mechanical adder, differential lever, walking-beam adder) | Merge into 91 (aliases) and 97 | Wikipedia Whippletree: linkage adders are whippletrees; the differential covers rotary adding. A maker rarely searches for a "summing linkage" as such. |
| Differential used to add two inputs | Tag existing 97 | Its JSON already covers adding, averaging and the two-motor wrist. |
| Multi-spindle gear head (gang drive) | Notes in 267; not an entry | An industrial machine head (Firgelli; patents). The maker-relevant part (one gear driving a ring of gears) is a gear-train arrangement. |
| Transfer case or power-split gearbox | Reject (whole-vehicle system); note in 97 | Wikipedia defines it as part of a vehicle drivetrain. Its principle (locked versus differential split) goes in 97 and the guide page. |
| Hydraulic or pneumatic manifold | Reject as an entry; notes in 300 and 301; tag 133, 166 and 302 | The fittings (tee, wye, manifold, valve island) are already aliases. What is missing is behaviour (lightest load moves first; how to synchronise), which belongs in notes and the guide page. Flow dividers are industrial. |
| Screw jack system | Merged into new entry 1 | Same job as linked lead screws (ZIMM). |
| PTO (power take-off) | Merged into new entry 2 | Wikipedia Jackshaft: "the power-transfer shaft connected to it is commonly called a PTO shaft, but is also a jackshaft". |
| Counter-rotating coaxial drive and T-gearbox as two entries | Merged into new entry 3 | Same gears (one bevel driving two facing bevels); the coaxial version only nests one output shaft inside the other. |
| RC dual-output gearboxes, gear splitter boxes | Reject (products) | Kits such as twin-motor gearboxes are product ranges. Their principle sits in 267 and new entries 3 and 4. |
| Pulley block or equaliser pulleys sharing a load | Covered by 206 and 91 | 206's related list already points to the whippletree for sharing a pull. |
| Push-pull rods to several outputs (bell cranks) | No change | No source found showing it as a named arrangement; 199 stays as it is. |
| Shaft-driven multiple outputs in automata (camshafts) | Notes in 84 | 84 has the "camshaft" alias; phasing added as a note. |

## 6. Safety points and figures that disagree

Safety points for the new entries:
- **Line shafts and PTOs.** Wikipedia Power take-off: the PTO and its shafts are "a common cause
  of incidents and injury"; 6% of US tractor-related fatalities in 1997 involved the PTO (National
  Safety Council, as cited there). Wikipedia Line shaft: "The systems were more dangerous", with a
  photo caption about long hair. SawdustZone forum: "Pretty scary ... working among all those
  whirling belts".
- **Several motors on one load.** V1 Engineering: "if driving your steppers the wrong way you can
  rip your machine apart ... completely power off your board before flipping the plug over".
  EEVblog: "Any overload, excessive acceleration or binding will cause loss of sync, resulting in a
  Z axis jam and excessive stress on the mechanism".
- **Cable splitters on brakes.** One lever and one splitter become a single point of failure.
  IHPVA quotes pedal-prix rules that "require two separate braking systems". A seized junction box
  makes a throttle stiff (Yamaha-enduros forum).
- **Serpentine or single belt driving several things.** If it breaks, everything stops at once
  (Wikipedia Serpentine belt).
- **Linked lead screws.** A sync belt that is too tight or misaligned jammed a Tronxy X5SA when
  homing; it homed fine with the belt off (Reddit 14tvq4s).

Figures and statements that disagree:
- **Odd/even rule for gear trains.** DT Online counts gears: "If there are an odd number of gears,
  the output rotation will be the same direction as the input". Course notes found in a search
  summary count meshes ("ODD number = reverse rotation") and were not opened. Both are right
  because n gears in a line make n-1 meshes. The guide page must say which it counts. Suggested
  wording: "count the gears: odd = same way, even = opposite".
- **Syringe hydraulics (300).** It says several outputs on one line "all move together".
  Power & Motion says flow "can vary greatly" between branches unless the resistance is equal.
  Resolve with notes addition 4.1.
- **"An open belt or chain: all the same way" (scope note §2.1).** True for pulleys inside the loop
  (507 no. 1; Notes and Sketches; DT Online). A pulley driven by the back of a belt
  "counter-rotate[s]" (Wikipedia Serpentine belt).
- **Crossed belts.** Line shaft practice twisted belts "180 degrees per leg" to reverse
  (Wikipedia Line shaft). Wikipedia Belt (mechanical) says a crossed drive is "not appropriate for
  timing and standard V-belts unless there is a twist between each pulley". These agree, but the
  table should say "flat or round belts".
- **Two-into-one brake splitter.** Jtek says both levers "operate totally independent of each
  other". IHPVA's one-into-two splitter "does not provide balance". These are not in conflict
  (different directions), but the entry must keep the two cases apart.
- **Dual Z motors.** Some makers say one driver with two motors "works great" (Reddit 1bpuytx
  comment). EEVblog and Whadda posters report loss of sync and prefer a belt. Both are experience
  reports; present both.
- **Printer models using one motor and a belt for three screws** (K1 series, Bambu): a single forum
  comment only. ⚑ needs confirming.

## 7. Every URL opened

Wikipedia (article text read with curl):
- https://en.wikipedia.org/wiki/Gear_train : idler gears, each intermediate gear reverses, ratio unchanged; timing belt or chain keeps camshaft 2:1.
- https://en.wikipedia.org/wiki/Idler-wheel : idler gear, idler pulley and friction idler; friction idler can slip and change the ratio.
- https://en.wikipedia.org/wiki/Belt_(mechanical) : open versus crossed belt; V-belt wraps 3-4 pulleys at most; polygroove serpentine wraps any number; 0.5-1% slip; timing belts no slip.
- https://en.wikipedia.org/wiki/Line_shaft : line shafts, fast and loose pulleys, twisted belts to reverse, losses about 25%, danger.
- https://en.wikipedia.org/wiki/Jackshaft : jackshaft = countershaft; clutches letting engines drive any dynamos; PTO shaft is a jackshaft.
- https://en.wikipedia.org/wiki/Power_take-off : splined PTO shaft; injury statistics.
- https://en.wikipedia.org/wiki/Contra-rotating_propellers : coaxial contra-rotation via planetary or spur gearing; torque cancels; extra noise.
- https://en.wikipedia.org/wiki/Coaxial_rotors : concentric shafts turning opposite ways; small RC helicopters.
- https://en.wikipedia.org/wiki/Bevel_gear : bevel gears in differentials and hand drills (no direction rule found).
- https://en.wikipedia.org/wiki/Whisk : rotary egg beaters mentioned only; no mechanism detail (not cited).
- https://en.wikipedia.org/wiki/Differential_(mechanical_device) : speed of one shaft is the average of the others; analogue sum and difference.
- https://en.wikipedia.org/wiki/Limited-slip_differential : open differential torque always equal at both wheels.
- https://en.wikipedia.org/wiki/Whippletree_(mechanism) : linkage adders in analogue computers and the IBM Selectric.
- https://en.wikipedia.org/wiki/Transfer_case : intermediate gearbox to front and rear axles; need to synchronise front and rear speeds.
- https://en.wikipedia.org/wiki/Freewheel : rotorcraft freewheel lets the rotor outrun the engines.
- https://en.wikipedia.org/wiki/Chain_drive : general chain drive; no direction rule found (not cited).
- https://en.wikipedia.org/wiki/Serpentine_belt : one belt drives many accessories; back-side driven accessories counter-rotate; single point of failure.

Technical references and maker guides:
- https://khkgears.us/media/izojpong/gear_guide1.pdf : KHK Gear Technical Reference. PDF p.7: spur and bevel meshes reverse, internal mesh same direction. p.8: idler. p.58: accumulated backlash in two-stage trains. p.121-122: planetary load division, spacing condition, planetary/solar/star direction rules.
- https://507movements.com/toc.html : index of 507 Mechanical Movements.
- https://507movements.com/mm_001.html : open belt, both pulleys same direction.
- https://507movements.com/mm_002.html : crossed belt reverses; fast and loose pulleys with open and crossed belts.
- https://507movements.com/mm_003.html : quarter-turn belt with guide pulleys.
- https://507movements.com/mm_007.html : belt-shifting reverser with bevel gears.
- https://507movements.com/mm_043.html : opened; no text extracted (not cited).
- https://507movements.com/mm_049.html : ratchet bevel gears turning back-and-forth into continuous rotation (not cited).
- https://507movements.com/mm_053.html : one bevel drives two loose bevels in opposite directions; dog clutch selects.
- https://507movements.com/mm_074.html : mutilated bevel gives intermittent opposite motions to two bevels.
- https://507movements.com/mm_108.html : reversing screw (not relevant; not cited).
- https://507movements.com/mm_495.html : Entwistle's gearing; one bevel fixed, output makes two turns per turn of the shaft.
- https://wiki.dtonline.org/index.php/Idler_Gear : odd number of gears = same direction.
- https://wiki.dtonline.org/index.php/Chain_and_Sprocket : sprockets turn the same way; positive non-slip.
- https://www.notesandsketches.co.uk/Pulleys.html : driver and driven pulleys same direction; flat and V belts slip, toothed belts do not.
- https://www.notesandsketches.co.uk/Gears.html : adjacent gears opposite; idler controls direction.
- https://zimm.com/wiki/how-are-multiple-screw-jacks-mechanically-synchronised/ : one motor, bevel gearboxes and shafts keep jacks in exact step; extra parts add backlash; feed the drive in the middle.
- https://zimm.com/wiki/what-is-a-bevel-gearbox-and-where-is-it-used/ : T-shaped bevel gearboxes along a shaft; flipping the gearbox reverses rotation.
- https://zimm.com/zk-bevel-gearboxes-types-and-versions/ : T type = one input, two outputs; L types one output.
- https://www.powermotiontech.com/hydraulics/hydraulic-valves/article/21885035/synchronizing-circuits : fluid-motor flow divider; series cylinders; rack and pinion or chain ties cylinders.
- https://www.powermotiontech.com/other-technologies/book-2-chapter-11-flow-divider-circuits (redirected to /technologies/other-technologies/article/21883443/...) : tees split flow unevenly unless branch resistance is equal; spool and divider/combiner valves.
- https://www.hawe.com/fluid-lexicon/detail/open-loop-synchronisation-control/ : definition of cylinder synchronisation; flow control valves or rotary flow dividers.
- https://www.motioncontroltips.com/?p=6874 (redirected to /zero-backlash-rack-pinion-drive-systems-from-atlanta-drive-systems/) : split pinion versus two-motor electrical preload on one rack.
- https://docs.v1e.com/electronics/dual-endstops/ : MPCNC and LowRider axes powered at each end; auto-squaring; wrong-direction warning.
- https://www.firgelliauto.com/blogs/mechanisms/multiple-drilling-machine : central driver gear to several spindle gears; one external mesh reverses.
- https://cloud.wikis.utexas.edu/wiki/spaces/RMD/pages/51063223/Introduction+Background+-+WG : wave-generator automaton, one cam per wave, 20° offset.
- https://hackaday.io/project/6711-single-feed-contra-rotating-propeller-hub : single-shaft contra-rotating hub with modified planetary gearing, RC size, printed parts.
- https://patents.google.com/patent/US5450714 : opened with WebFetch (curl got 503). One input drives upper and lower gears in opposite directions on one axis; coaxial counter-rotating blades.
- https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/5450714 : PDF of the same patent; scanned images, no text (not cited).
- https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4887982 : marine counter-rotating propeller patent PDF; scanned images, no text (not cited).

Forums, shops and archives:
- https://www.sawdustzone.org/forum/discussions/around-the-coffee-pot/34806-a-one-motor-shop : Amish one-engine belt shops with a clutch per machine; lapidary benches running several belts off one shaft.
- https://eevblog.com/forum/3d-printing/ender-3-max-with-crealitys-dual-z-motor-upgrade-wont-home-consistently/msg3939151 (redirected to www.eevblog.com) : two Z steppers in parallel lose sync; belt option; set level and mark couplings before power-up.
- https://forum.whadda.com/t/k8200-dual-leadscrew-z-axis-upgrade/12184 : belt and tensioner linking two leadscrews; a belt "absolutely prevents" loss of sync; two-motor alternative.
- https://www.chiefdelphi.com/forums/showthread.php?p=1272300 (redirected to /t/designing-a-three-motor-gearbox/129620/17) : gear motors so their speed-torque curves superimpose to share load.
- https://ihpva.org/Projects/tstrike/building/2into1.htm : two-into-one brake handles; tandem splitter does not balance brakes; race rules on two brake systems.
- https://sjscycles.co.uk/cables/problem-solvers-cable-doubler-12 (redirected) : cable doubler, "Also known as a cable splitter"; one lever, two brakes.
- https://sjscycles.co.uk/cables/jtek-doublecontrol-s (redirected) : two-input, one-output splitter; 12 mm maximum travel; road-pull brakes only.
- https://www.yamaha-enduros.com/index.php/forums/general-discussion/7778-how-does-the-split-cable-junction-work : throttle and oil-pump split-cable junction; binding stops the throttle.
- https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=3Dprinting&query=z%20sync%20belt&limit=15 : Reddit archive search. Posts used:
  - https://www.reddit.com/r/3Dprinting/comments/1bpuytx/dual_zaxis_advice/ : four ways to drive dual Z.
  - https://www.reddit.com/r/3Dprinting/comments/14tvq4s/tronxy_x5sa_pro_gets_stuck_when_homing/ : a sync-belt mod jams homing.
  - https://www.reddit.com/r/3Dprinting/comments/1lfmebi/cr6_se_z_belt/ : factory Z sync belt on the CR-6 SE.
  - https://www.reddit.com/r/3Dprinting/comments/18kzy91/do_i_need_a_timing_belt/ : read, not cited.
- https://arctic-shift.photon-reddit.com/api/comments/search?link_id=1bpuytx&limit=20 : comments on 1bpuytx (Y-splitter cable plus timing belt; one motor, belt and three screws; Klipper z_tilt with independent motors).
- https://api.printables.com/graphql/ : searches for "counter rotating gearbox" (none), "counter rotating", "contra rotating", "coaxial gearbox", "line shaft" (nothing relevant) and "z sync"; model details for 120260, 155117 and 229071. URLs from Printables API, pages not opened:
  - https://www.printables.com/model/120260-kinetic-sculpture-contra-rotating-discs
  - https://www.printables.com/model/155117-cr-10s-pro-dual-z-sync-mod-with-850mm-belt-or-more
  - https://www.printables.com/model/229071-cr-10s-pro-cr-10-max-z-sync-various-belt-length-po
  - https://www.printables.com/model/883528-double-wind-turbine-mk3-counter-rotating

Tried, but blocked or empty (403, 404 or 503); **not cited**:
- brightontoymuseum.co.uk Mamod lineshaft (403, also through WebFetch)
- cyclekartsgb jack shaft (403)
- patents.justia.com/patent/5450714 (403)
- all3dp.com propeller projects (403)
- control.com two drives breaking shaft (403)
- forum.linuxcnc.org dual-motor preload (404)
- cr4.globalspec.com hydraulic cylinders (403)
- reiman.pt GN 3971-T (403)
- myminifactory MicroWave (403)
- makerworld.com Rotax splitter (403)

Opened but not used: rcet.org.in lecture-notes PDF (college notes, possibly copied from a
textbook; avoided).

## 8. Guide page facts: "Driving several things from one" (and combining inputs)

### 8.1 Direction rules (each row checked against a source)

| Arrangement | What the outputs do | Sources |
|---|---|---|
| Two outside gears meshing | Turn opposite ways | KHK Gear Technical Reference p.7 ("the direction of rotation of driver and driven gears are reversed"); Notes and Sketches Gears ("Two adjacent meshed gears will always rotate in opposite directions") |
| A line of gears | Each extra gear flips the direction again. Count the gears: an odd number means the last turns the same way as the first, an even number the opposite way. The middle gears' sizes don't change the overall ratio | Wikipedia Gear train ("the addition of each intermediate gear reverses the direction of rotation of the final gear"); DT Online Idler Gear (odd = same, even = opposite) |
| An idler gear between two gears | Input and output turn the same way; the ratio is unchanged | Wikipedia Gear train; Wikipedia Idler-wheel; KHK p.8 ("an idler, which has no effect on the speed ratio") |
| One central gear with several gears round it | All outer gears turn the same way as each other, opposite to the centre (one mesh each) | Firgelli multiple drilling machine ("One external mesh reverses direction"); KHK p.122 star type ("Input and output axes have opposite rotations") |
| A gear running inside a ring (internal) gear | Same way | KHK p.7 ("In the case of an internal gear mesh ... both gears have the same direction of rotation") |
| Planetary set | Ring held: carrier turns the same way as the sun. Sun held: carrier the same way as the ring. Carrier held: ring opposite to the sun. One sun drives several planets at once, which share the load | KHK p.121-122 (planetary, solar and star types; "uses two or more planet gears to balance the load evenly") |
| Open belt or chain, pulleys inside the loop | All turn the same way | 507 Mechanical Movements no. 1; Notes and Sketches Pulleys; DT Online Chain and Sprocket; Wikipedia Belt (mechanical) |
| Pulley driven by the back (outside) of the belt | Turns the opposite way to the others | Wikipedia Serpentine belt ("Such accessories will counter-rotate vs. the 'normal' pulleys") |
| Crossed (figure-8) belt | Opposite way. Suits flat and round belts; V and timing belts need a twist so the same face meets each pulley | 507 no. 2; Wikipedia Belt (mechanical); Wikipedia Line shaft ("twisted 180 degrees per leg ... to rotate in the opposite direction") |
| One belt round many pulleys | A single V-belt grips at most 3-4 pulleys; a ribbed (serpentine) belt bent round idlers can drive any number | Wikipedia Belt (mechanical) |
| One bevel gear between two facing bevels | The two outputs turn opposite ways on one line; with nested shafts they counter-rotate on one axis | 507 no. 53 ("driven in opposite directions by the third gear"); Google Patents US5450714; Hackaday.io 6711 |
| Flipping a right-angle bevel gearbox end for end | Reverses the output | ZIMM bevel gearbox wiki ("180° rotation to change the direction of rotation") |
| Differential | The carrier's speed is the average of the two outputs; the outputs can turn at different speeds; an open differential always gives both outputs equal torque; hold one output and the other turns at twice the carrier speed | Wikipedia Differential; Wikipedia Limited-slip differential; 507 no. 495 |
| Several outputs that must turn at slightly different speeds but are locked together | They fight each other; vehicles add a differential between front and rear axles | Wikipedia Transfer case |

### 8.2 Keeping several outputs in step

- **Toothed drives stay in step; friction drives creep.** Timing belts, chains and gears are
  positive: Wikipedia Belt (mechanical) says timing belts "have no slippage". DT Online calls chain
  "very positive non-slip". Flat and V belts slip 0.5-1% even in normal running, more under load
  (Wikipedia Belt; Notes and Sketches Pulleys). A friction idler "can ... slip ... which can cause
  the ratio of rotations between the wheels to vary" (Wikipedia Idler-wheel).
- **Timing.** Engines keep the camshaft at exactly half crankshaft speed with a timing belt, a
  timing chain or meshed gears (Wikipedia Gear train).
- **Backlash adds up.** In a two-stage train the play at the output is the sum of each stage's play
  (KHK p.58, §6.4). ZIMM: "Every additional component (gearbox, shaft, bearing) introduces small
  efficiency losses and additional backlash".
- **Phasing several screws or shafts.** Set everything level and mark the couplings before
  tightening, so you can see if one slips (EEVblog dual-Z thread). One motor with a closed belt
  cannot lose sync between screws, which is why makers choose it (Whadda K8200 thread). A belt that
  is too tight or misaligned can jam the axis instead (Reddit 14tvq4s).
- **Long shaft lines.** Feed the drive in near the middle rather than at one end; align every
  gearbox, shaft and bearing exactly (ZIMM screw-jack wiki).
- **Spacing gears round a central gear inside a ring.** Evenly spaced planets need
  (sun teeth + ring teeth) / number of planets = a whole number (KHK p.121, Condition No. 2).
- **Several cams or cranks on one shaft.** Turn each cam a set angle further round to get a
  travelling wave (UT Austin wave generator: 20° per cam).
- **Fluid (hydraulic or pneumatic) splits do not stay in step by themselves.** With tees, "if the
  resistance in all the branches is not identical, flow can vary greatly in each path"; a flow
  divider or a mechanical tie fixes it. "Mechanically tying two cylinders together by installing a
  rack on each piston rod and fastening the pinions to a single shaft works well"; a chain works
  only if sync is needed in one direction (Power & Motion, two articles; HAWE).
- **Rigid copying versus sharing.** A cable splitter moves every output the same distance but does
  not balance their pull (IHPVA). A whippletree shares the pull equally and lets the distances
  differ (Wikipedia Whippletree; entry 91).

### 8.3 Many-to-one: combining inputs and sharing load

- **Adding two motions.** A differential adds or subtracts two rotations (Wikipedia Differential);
  a whippletree (linkage adder) adds straight-line motions (Wikipedia Whippletree).
- **Two motors on one output.** To share the load in proportion to their power, gear them so their
  speed-torque curves lie on top of each other (Chief Delphi #17).
- **Two motors at two ends of one axis.** They must be kept in step electrically or by a belt.
  Steppers can start "up to four steps" apart at power-up (EEVblog). Firmware with two endstops can
  square the axis at each home (V1 Engineering).
- **Using a second motor to remove play.** Two pinions on one rack, one driving and one held back
  against the opposite tooth faces (electrical preload); the one-motor equivalent is a split,
  spring-loaded pinion (Motion Control Tips, ATLANTA).
- **Either input can drive.** One-way clutches let either of two inputs drive without dragging the
  other: a helicopter rotor keeps turning when an engine stops (Wikipedia Freewheel). Clutches on
  jackshaft pulleys let "any or all of the dynamos be driven by either or both of the engines"
  (Wikipedia Jackshaft). A two-into-one cable splitter lets "both brake levers ... operate totally
  independent of each other" (Jtek splitter, SJS Cycles).
- **Load sharing inside one gearbox.** Planetary gearboxes use two or more planets "to balance the
  load evenly", and "load division between planet gears" is one of their design problems (KHK
  §17.1).
