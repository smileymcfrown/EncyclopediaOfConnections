# Run 2 outline: how it was built

**Date:** 2026-09-26, items 275-299 added 2026-09-29 · **Files:** `outline.yaml` (299 items, 25 families), `fields.yaml`
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

At 18 items per batch (6 agents × 3 items), tier 1 takes 8 batches and all 274 items take 16.

## Family changes
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

## Suggested but left out (easy to add later with `/research-add-items`)
- **Borderline scope (owner to decide):** electrical joints (crimp terminals, conductive
  adhesives, adhesive-lined heat-shrink); plastic welding of prints (friction/spin welding),
  since welding is out of scope.
- **Standard hardware:** hose and band clamps, hollow-wall anchors, spring (roll) pins, tension rods.
- **Niche or near-duplicates:** swivels, Chicago screws, eyelets and grommets, crimped wire-rope
  sleeves, electroadhesion grippers, programmable (correlated) magnets, magnetic springs,
  flywheels, print-in-place chainmail, central-locking articulated arms, iron-on fusible web,
  multi-point (espagnolette) locks, lost-motion pin-in-slot links, geodesic strut hubs.

## Fields suggested but not added
cost band, size range, maintenance, standards and ecosystems, trade names (brand names go in
`aliases`, marked as brands), Wikidata/Wikipedia ID (goes in `links`), fit clearances (goes in
`making_tips_3d_printing` and `rules_of_thumb`), operation (one-handed, click feedback).
