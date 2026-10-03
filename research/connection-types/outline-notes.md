# Run 2 outline: how it was built

**Date:** 2026-09-26, items 275-299 added 2026-09-29, items 300-323 on 2026-09-30, items 324-409 on 2026-10-03 · **Files:** `outline.yaml` (409 items, 31 families), `fields.yaml`
(41 fields), `preferred-sources.md` (run 1's collections for the research agents)

## Steps
1. **Starting list:** run 1's merged type list (`research/prior-art/summary.md` section 2),
   condensed into distinct types. Variants were kept as separate items only where a beginner
   would need to tell them apart (e.g. cantilever / annular / torsional snap fit; ratchet and
   pawl / sprag / roller / wrap-spring one-way clutch). Close relatives are folded into one
   entry and listed in its `notes`.
2. **Web-search pass** (one agent, 98 pages opened) looked for missing types. It suggested
   74. About 55 were added or folded in as notes; the rest are listed below.
3. **Fields:** all 27 existing fields kept with their allowed values; 14 new fields added
   (see `fields.yaml`, marked NEW). The same fields were merged into
   `research/fields/connection-types.fields.yaml`.

## Tiers (research order)
| Tier | Items | What |
|------|-------|------|
| 1 | 1-142 | Unusual types that can be 3D printed or are useful in robotics |
| 2 | 143-256 | Other unusual types; joinery (wood, sheet, panels) last |
| 3 | 257-274 | One generic baseline entry per family |
| added | 275-299 | Added 2026-09-29 with `/research-add-items`: tier 1 types first (275-290), then tier 2 (291-299, joinery last) |
| added | 300-323 | Added 2026-09-30: the new *hydraulics, pneumatics & vacuum* family (2 baselines, then tier 1 302-309, then tier 2 310-323) |
| added | 324-409 | Added 2026-10-03 (R22, wider scope): the five new families' baselines (324-328), then tier 1 (329-345, joinery last), then tier 2 (346-409) |

At 18 items per batch (6 agents × 3 items), tier 1 takes 8 batches and all 274 items take 16.

## Family changes
- **New (2026-10-03): electrical connections; everyday fasteners & fixings; knots, lashings &
  sewn joints; adjusters, levellers & spacers; welding, brazing & soldering.** See the section on
  items 324-409 below. The cord family kept its key, but its label is now *Hardware for rope,
  cord, straps, fabric and leather*.
- **New (2026-09-30): hydraulics, pneumatics & vacuum.** See the section on items 300-323 below.
- **New: seals & pass-throughs.** The `seal` finder field had no entries that actually seal
  (O-ring, gasket, labyrinth seal, hose barb, cable gland, compression fitting), plus slip
  rings and cable carriers.
- **New: brakes, dampers & speed control.** Friction and eddy-current brakes, governors,
  dampers and vibration mounts had no home.
- **Renamed:** sliding & telescoping locks → *sliding, telescoping & linear motion*;
  magnetic & friction connections → *clamping, magnetic & friction connections*;
  cord, strap & webbing hardware → *cord, strap, webbing & textile hardware*;
  springs, dampers & energy storage → *springs & energy storage* (dampers moved out).

## What the web search added
- **Tier 1:** O-ring seal, gasket, labyrinth seal, hose barb, cable gland, slip ring,
  cable carrier, hidden (magnetic-key) latches, half nut, modular grid mounting systems,
  self-folding (4D) prints, posable segmented arm, clevis joint, rod end and ball link,
  turntable bearing, dovetail slide with gib, threadless ball screw, reversing (diamond-thread)
  screw, multi-stage slide rigging, series-elastic coupling, whippletree, twisted-string
  actuator, granular jamming gripper, aluminium-extrusion connectors, keying (one-way-only fit),
  printed leaf spring.
- **Tier 2:** tolerance ring, woven self-tightening grip, shock-corded pole, rotary latch,
  folding-blade lock, tamper-evident breakaway bridge, indexable clamping lever, spring bar,
  band flange clamp, temporary sheet fastener (Cleco-type), spring-steel push-on fasteners,
  tape-spring hinge, origami mechanisms, self-closing hinges, lid stays, Schmidt coupling,
  flexible drive shaft, bell crank, swashplate, pulley system, compression fitting, friction
  brake, eddy-current brake, speed governor, elastomer isolation mount, clamp-on tube
  fittings, internal tube anchors, blind threaded fixings (rivet nut, well nut), epoxy putty.
- **Tier 3:** basic strap and garment closures, tongue-and-groove joint.
- **Folded into existing entries as notes:** servo saver, kinematic tool changer, snap
  shackle, Luer taper, ARRI rosette, double D-ring and G-hook, cabinet ball catch, Picatinny
  rail and cold shoe, star-wheel detent, counterweight, hex shaft and cross axle, pantograph,
  Tusi couple, shaft collar, ball differential, motion rectifier; friction-wheel drive was
  merged with the CVT entry.

## Added on 2026-09-29 (`/research-add-items`)
- **Suggested by the run 2 agents** (`review-notes.md`): iris valve (twisted-sleeve valve),
  twisted-and-coiled polymer muscle, Bernoulli gripper (items 275-277).
- **Found by a web-search gap pass** (one agent; Wikipedia's mechanism categories, Thang's four
  index PDFs, *507 Mechanical Movements*; checked against all 274 result files): 22 types, all
  added (items 278-299): tendon-driven joint, walking linkage, magnetic detent, multi-material
  interlock, elastic band springs, soft pneumatic actuator, scroll mechanism, multi-turn rotation
  limiter, genderless connector, gearless right-angle drive, pneumatic artificial muscle, check
  valve, bellows boot, anti-twister, weight-activated tongs, variable-radius pulley, tuned mass
  damper, radial lip seal, knife-edge and jewel pivots, hand-mouldable thermoplastic, reciprocal
  frame, housing and rebate joints. Details, sources and the near-misses it rejected are in
  `gap-search-2026-09-29.md`.
- **Notes added**: pinch valve (in *Iris valve*), festoon cable system (in *Cable carrier*) and
  twistlock (in *Quarter-turn fastener*). *Cable carrier* and *Quarter-turn fastener* were
  already researched, so their entries only cover these if redone.
- **Not added**: a *Motion conversion* baseline (owner's choice; the family already has basic
  entries such as slider-crank and cam and follower). Check valve, soft pneumatic actuator and
  pneumatic muscle need an air or water supply; run 1 had put hydraulic and pneumatic circuits
  out of scope, but the owner chose to include these single components.

## Added on 2026-09-30: new family *hydraulics, pneumatics & vacuum*
- **Why:** run 1 had put hydraulic and pneumatic circuits out of scope. After the 2026-09-29 gap
  search added three air-powered items, the owner chose to add a full 26th family (R20). Key
  `hydraulics, pneumatics & vacuum`, label *Moves, holds or lets go using air or liquid pressure, or
  suction*: suction types belong here too, and beginners don't think of suction as pneumatics.
- **Items 300-323** (all 24 found by a web search of Wikipedia's fluid-power categories, Thang's
  hydraulic, pneumatic and pump sections, maker sources and HSE safety guides): syringe hydraulics
  and air or hydraulic cylinder (the baselines); switching valve, peristaltic pump, venturi vacuum
  generator, bellows and inflatable actuators, air-logic valve, Tesla valve, vacuum-driven muscle,
  syringe pump (tier 1); diaphragm pump, air tank and accumulator, pressure regulator, relief valve,
  speed-control valve, shut-off valve, vacuum table, gear pump, rotary air actuator, float valve,
  hydraulic ram pump, air bearing, centrifugal pump, bell siphon (tier 2; the last two are
  borderline and were kept at the owner's choice).
- **Moved in:** *Soft pneumatic bending actuator* (283), *Pneumatic artificial muscle* (288) and
  *Check valve* (289), which weren't researched yet. *Bernoulli gripper* (277) stays beside the other
  air grippers in powered & active connectors.
- **Tagged:** the new family was added to `other_families` in 12 researched entries (vacuum gripper,
  granular jamming gripper, suction cup, iris valve, quick couplers, hose barb, compression fitting,
  O-ring seal, slip ring and rotary union, gas spring, dampers, taper fit). Items 277 and 295 have a
  note to list it too.
- **Not changed:** the fixed `job` options (see `review-notes.md`). Near-misses the search rejected
  (compressors, air motors, air cannons and more) are in `fluid-power-search-2026-09-29.md`.

## Added on 2026-10-03 (R22): wider scope, five new families
- **Why:** the owner asked how far the scope could go while staying focused on the main goal,
  then chose to bring in every near-scope group: electrical connections; standard hardware as
  types; heat and fusion joining; rope, knots and sewn joints; mounting standards; pipe and
  plumbing joints; moving and adjusting basics; earlier near-misses; and ideas from the medical
  field that makers can reuse. Kept out: catalogues of sizes and part numbers, whole machines and
  systems, making processes that don't join anything, projectile launchers, and medical use (the
  scope test and the medical rule are in `PROJECT.md`, Scope).
- **How:** one web-search agent per group (six in all), each checking its candidates against all
  323 result files and the earlier near-miss lists. The owner confirmed one combined list:
  `scope-search-2026-10-03-combined.md`. Each group's full write-up, with every page opened, is in
  `scope-search-2026-10-03-<group>.md` (electrical, hardware, rope-and-sewing,
  mounting-and-adjusting, near-misses-and-medical, heat-and-pipe).
- **Items 324-409** (86): 22 electrical connections; 14 hardware types (9 in the new fasteners
  family, plus hose clamp, screw-in insert, edge trim, shackle and tamper-resistant fasteners in
  existing families); 21 rope, knot and sewing types (14 in the new knots family, 5 in the cord
  family, plus printing onto fabric and iron-on fusible web); 11 mounting and adjusting types (4
  in the new adjusters family); 6 earlier near-misses (in-line swivel, printed chainmail,
  multi-point bolt, strut hub, flywheel, tensegrity); 12 heat and pipe types (9 in the new
  welding family, 3 pipe joints in seals & pass-throughs). The medical search found no new
  top-level types; its ideas go into notes.
- **Moved:** *Eccentric adjuster* (129) into *adjusters, levellers & spacers*; its result file's
  `family` was changed and its old family added to `other_families`.
- **Tagged** in `other_families` of researched entries: electrical connections (286, 135);
  everyday fasteners & fixings (257, 260, 222, 274); adjusters, levellers & spacers (188, 150,
  146, 235, 73); welding, brazing & soldering (139, 141, 297, 56, 61); knots, lashings & sewn
  joints (154, 153, 121, 122, 149, 155).
- **Notes additions to researched entries (about 70) are not in the outline yet.** The report
  shows outline notes as "Also covers", so adding them before the entries are updated would claim
  content the entries don't have. They are listed in section 7 of the combined file and are
  applied in an update pass after items 324-409 are researched.
- **New research rules** (`fields.yaml`): electrical connections (no mains instructions; a fixed
  rating lead-in in `load`), heat joining (burns, fire, fumes, arc light), knots (grouped by job,
  ABOK numbers through Wikipedia, tying steps linked out) and mounting standards (named, not
  copied).
- **Not changed:** the 15 fixed `job` options. Electrical entries use the existing options, and
  the finder gets a new first-question answer, "Connect wires or power", routed by family. No new
  field: an `electrical_rating` field and a `fits_standard` field were both considered and left
  out, because every one of the finished result files would need them.

## Suggested but left out (easy to add later with `/research-add-items`)
- *Brought in on 2026-10-03 (R22):* everything this list held before then except tension rods,
  either as an entry (electrical joints, plastic welding, hose clamps, hollow-wall anchors, spring pins, threaded
  rod, swivels, Chicago screws, eyelets and grommets, crimped wire-rope sleeves, flywheels,
  printed chainmail, iron-on fusible web, multi-point locks, strut hubs) or as a notes addition
  for the update pass (electroadhesion grippers, programmable magnets, magnetic springs,
  central-locking arms, lost motion). What the R22 searches rejected is listed in each
  `scope-search-2026-10-03-*.md` file and, in short, in the combined file.
- **Still left out:** tension rods, which no R22 search covered as a type (threaded rod used as a
  tie rod is in 371).

## Fields suggested but not added
cost band, size range, maintenance, standards and ecosystems (and, on 2026-10-03, `fits_standard`
and `electrical_rating`), trade names (brand names go in
`aliases`, marked as brands), Wikidata/Wikipedia ID (goes in `links`), fit clearances (goes in
`making_tips_3d_printing` and `rules_of_thumb`), operation (one-handed, click feedback).
