<!-- Saved into the repository on 2026-10-03 from the search agent's working notes (R22). -->
# Scope search 2026-10-03: Mounting standards; moving and adjusting basics

One of six web searches for R22, the wider scope (see `scope-search-2026-10-03-combined.md` for
the combined list the owner confirmed). The agent's write-up follows unchanged, except this
header. Download folders it mentions were working files and were not kept. Suggestion numbers
below are the agent's own; they map to outline items like this:

| Suggestion | Item | Outline name |
|---|---|---|
| 1 | 393 | Tripod and stand screw mount (tripod socket, camera thread) |
| 2 | 394 | Clamp-on accessory mount for bars, poles and edges (handlebar clamp, desk clamp, U-bolt) |
| 3 | 327 | Shims, spacers and standoffs (packing, spacer washer) |
| 4 | 395 | Slotted adjustment with a jacking screw (slotted mount, sliding motor plate) |
| 5 | 338 | Cable through a hinge (hollow hinge pin, cable on the pivot axis, service loop) |
| 6 | 396 | Castor (swivel castor, fixed castor, locking castor) |
| 7 | 336 | Locking adjustment screws (push-pull screws, spring-loaded levelling screws) |
| 8 | 397 | Levelling foot (adjustable foot, swivel levelling pad) |
| 9 | 337 | Ball caster (ball transfer unit) |
| 10 | 339 | Expanding internal grip (expanding mandrel, inside gripper) |
| 11 | 398 | Spring clip clamp (clothes-peg clip, spring clamp, clip-on holder) |

---

**FINISHED** (second attempt, 2026-10-03; all sources below re-opened in this attempt)

# Scope search, groups A and B: mounting standards and interfaces; moving and adjusting basics

Date: 2026-10-03. Checked against `outline.yaml` (323 items, 26 families), `outline-notes.md`,
`gap-search-2026-09-29.md`, `fluid-power-search-2026-09-29.md`, `review-notes.md`, `flowchart-and-format.md`
1.2 and 1.7, `PROJECT.md` (R22), and a grep of all 323 result files. No repository file was edited.
Every URL below was opened in this attempt (the earlier, cut-off attempt's downloads were used only as leads),
unless it is labelled "(Printables API; page not opened)". Printables model IDs come from `searchPrints2` on
https://api.printables.com/graphql/, run again in this attempt.

**Summary.** Most "attach it to X" standards are already covered, or are size catalogues. Picatinny rails
and cold shoes are in 41, action-camera prongs in 67, the ARRI rosette in 34, servo splines in 82, MOLLE in 43.
Ten new types are worth adding (eleven with the optional spring clip): two from group A (a standard screw mount
for tripods and stands, and a clamp-on mount for bars and edges), eight from group B. Group B also needs a new
family; group A does not.

---

## 1. Family placement

### Group A (mounting): no new family (recommended)
- **New items go into existing families.**
  - *Tripod and stand screw mount* goes in `quick-release & tool-free`, beside 41 *Quick-release plate*.
  - *Clamp-on accessory mount* and the optional *Spring clip clamp* go in
    `clamping, magnetic & friction connections`, beside 113 and 220.
- **Why not a new family:** nearly everything that would belong there already exists and fits its present
  family well: 41, 42, 43 and 167 (quick-release & tool-free), 67 (hinges & pivots), 34 (indexing & detents),
  113 and 220 (clamping). An item has only one main family, so a new family would mean moving about six
  researched entries for only two new ones. Tagging them in `other_families` and widening one finder answer
  gives the same help with no churn.
- **Finder change:** the *Hold together* answer *"Something onto a wall, rail, desk or grid"* (17 entries) is
  widened to *"Something onto a wall, desk, bar, tripod, rail or grid"*. It then asks *"What is it going onto?"*:
  - a wall: 42, 43, 142, 216, 230;
  - the edge of a desk or shelf: new clamp-on mount;
  - a bar, pole or handlebar: new clamp-on mount, 22, 220, 37 (quarter-turn bike mounts);
  - a tripod, camera, light stand or camera rig: new screw mount, 41, 67, 34;
  - a rail, extrusion or grid: 41, 43, 113, 167;
  - a screen or monitor arm: the VESA note in 42 and the new screw mount.
- **Optional field (recommended):** `fits_standard`, a list of the standard interfaces an entry serves. Examples:
  - camera and stands: 1/4-20 tripod thread, light-stand spigot, Arca-type dovetail, Picatinny or NATO rail,
    cold shoe, GoPro-type prongs, ARRI rosette;
  - frames, rails and walls: VESA, DIN rail, 2020 T-slot, strut channel, pegboard, Gridfinity;
  - robot kits and motors: goBILDA hole grid, NEMA 17 face, 25T servo spline.

  This keeps catalogue standards searchable without turning them into entries. Run 2 suggested a "standards and
  ecosystems" field but did not add it (`outline-notes.md`).
- **If the owner still wants a family:** key `mounting standards & interfaces`, label *"Fits a standard mount
  (tripod, camera rig, screen, rail, bike bar)"*.

### Group B (adjusting): one new family (recommended)
- **Proposed key:** `adjusters, levellers & spacers`. **Label:** *"Sets, fine-tunes or levels a position, height
  or gap, then holds it"*.
- **New members:** *Shims, spacers and standoffs* (the baseline), *Slotted adjustment with a jacking screw*,
  *Locking adjustment screws* and *Levelling foot*.
- **Existing items to tag in `other_families`:**
  - 129 *Eccentric adjuster* (consider making this its main family);
  - 188 *Differential screw* and 150 *Turnbuckle*;
  - 146 *Self-locking wedge* (it has the alias "tapered shim");
  - 235 *Exact-constraint mounting* (three-point levelling);
  - 73 *Dovetail slide with gib strip*.
- **Why a new family is better:**
  - Adjusters are split across four families today: tensioning (129, 150), sliding (188), locating (114, 235) and
    self-locking (146).
  - A beginner asking "my bed isn't level", "I need to move this motor 1 mm" or "my table wobbles" has no single
    branch to follow, though the vision promises things that "adjust".
  - `locating & alignment` is the nearest family, but it means returning to the same place *without* adjusting.
    The Eccentric adjuster result sums up Kinematic coupling as "locates parts exactly without any adjustment".
- **Finder change, keeping the `job` list as it is** (the owner kept the fixed `job` options on 2026-09-30):
  - Map the new family to the existing job *"line parts up exactly"*, together with the `adjustable` field.
  - Widen first-question answer 6 from *"Line parts up exactly, every time"* (7 entries) to *"Line parts up
    exactly, or adjust and level them"*, with one follow-up question: *Return to the same place every time /
    Set a height, gap or position and hold it / Fine-tune a tilt or tension*.
- **Fallback:** put the four new items in `locating & alignment` and rename it `locating, alignment &
  adjustment` (*"Locates parts exactly, or adjusts and fine-tunes their position"*).

### Group B, other items: existing families
- *Castor* and *Ball caster* go in `hinges & pivots`, with `sliding, telescoping & linear motion` as their other
  family. Bearings already live in hinges & pivots (264, 69), and the finder path is *Let it move → Spin round
  and round → A wheel or part on a fixed axle or table* (only 5 entries today).
- *Cable through a hinge* goes in `seals & pass-throughs`, with `hinges & pivots` as its other family. That
  family's label already says "carries cables and fluid across a joint". Its finder leaf is *"Get cables
  through a wall or past a moving joint"*.
- *Expanding internal grip* goes in `clamping, magnetic & friction connections`, with `powered & active
  connectors` as its other family (robot and bladder versions). It fills the finder's *Something to grip →
  A robot or machine* list, which has no inside gripper (run 3, question 9).

### Which group A standards are types, and which are catalogue data (decided)

| Standard | Decision | Where |
|---|---|---|
| 1/4-20 and 3/8-16 UNC camera threads | **Type**: a single-screw accessory mount, with its own design issues (anti-twist, adapters, thread in plastic). The thread sizes themselves are catalogue data | New item 1 |
| Light-stand spigot (5/8 in baby pin), 5/8-27 microphone thread | Variants | Notes of new item 1 |
| GoPro-type prong mount | Already a type | 67 (no change) |
| VESA screen holes | **Catalogue** (a pattern of tapped holes; the joint is screws, 257) | Notes of 42 and new item 1 |
| Handlebar, pole and desk-edge clamps | **Type** (220 only builds frames) | New item 2 |
| Quarter-turn bike-computer mounts | A bayonet variant | Notes of 37 |
| Picatinny, NATO and Weaver rails, cold and hot shoes | Already covered as aliases and "how it works" in 41 | Leave as notes in 41 |
| ARRI rosette | Already covered | 34 |
| ARRI anti-twist locating pins | Variant | Notes of new item 1 |
| Keyhole slot, French cleat, Z-clip | Already covered | 42 |
| 15 mm and 19 mm camera rods | Catalogue (rod spacing); the rod clamp is a variant | Notes of new item 2 |
| M12 (S-mount), C- and CS-mount lens threads | Catalogue | Notes of 37 |
| NEMA motor face patterns | Catalogue; the useful idea is the centring spigot | Notes of 234 |
| Servo spline sizes | Catalogue, already listed | 82 |
| Robot-kit hole grids (goBILDA, Actobotics, Meccano) | Catalogue or ecosystem; the joint is a bolt | Notes of 113 and 257 |
| Strut channel | A relative of T-slot extrusion | Notes of 113 |
| 19-inch rack | Catalogue and a whole system; its cage nut is a type variant | Notes of 173 |
| Bike bottle-cage bosses (M5 × 0.8) | Catalogue | Notes of new items 1 and 2 |

---

## 2. Suggested new types (ranked by usefulness to a hobbyist maker)

### 1. Tripod and stand screw mount (tripod socket; 1/4-20 and 3/8-16 UNC camera thread; stand spigot)
- **Description:** A single threaded socket or stud in a standard thread, so a part screws onto any tripod, ball
  head, light stand, microphone stand or camera. Locating pins, a rubber pad or a lock ring stop it twisting.
- **Nearest items and why it's distinct:**
  - 41 *Quick-release plate*: its result names this screw only as the thing that holds the plate under the
    camera (a "1/4-20 UNC D-ring screw"); 41 itself is the dovetail clamp.
  - 257 *Ordinary screw joint* is the general case.
  - 56 *Heat-set insert* and 57 *Captive nut pocket* show how to get the thread into a print; their results
    already mention 1/4 in camera-thread inserts and 1/4-20 nut pockets.
  - 67 *Clevis* (GoPro-type prongs) and 34 *Hirth* (ARRI rosette) are the other camera interfaces.
  - It is the universal accessory interface, and "how do I put this on a tripod?" has no entry.
- **Design issues the entry would cover:**
  - Which thread to use: ISO 1222:2010 calls for 1/4-20 UNC or 3/8-16 UNC. Larger cameras use 3/8-16 "plus a
    removable 1/4-20 UNC adapter" (Wikipedia).
  - A single screw lets the part twist. The ARRI-style answer is "a 3/8"-16 central screw with two 3mm locating
    pins spaced exactly 60mm apart"; a "mini" 1/4-20 version spaces the pins 10.4 mm apart (Ulanzi).
  - How to anchor the thread in plastic: links to 56 and 57.
- **Notes for the entry:**
  - Reducer bushings (3/8-16 to 1/4-20), captive D-ring screws, lock rings, and prong-to-1/4-20 and
    shoe-to-1/4-20 adapters.
  - **Light-stand spigot:** the "baby pin" is a 5/8 in (16 mm) round stud that "will fit into any 5/8" (16mm)
    receiver", often with 1/4-20 and 3/8-16 male threads on its ends (Kupo). C-stands carry "a baby pin on top"
    (Wikipedia).
  - **Microphone stands:** "most commonly a 5/8-27 threaded hole"; older German and European stands use 1/2-12
    BSW, and 3/8-16 BSW is used outside the US, with adapters between sizes (Wikipedia).
  - Other standard threaded points: the VESA screen pattern (see the note for 42), and bike bottle-cage
    "braze-ons" "threaded to accept an M5 × 0.8 bolt" (Wikipedia).
- **Family:** quick-release & tool-free. **Other families:** clamping, magnetic & friction connections; locating
  & alignment.
- **Tier:** 2. It isn't unusual, but makers design around it constantly.
- **Safety:** a camera or light falls if the thread strips in plastic or catches only a few turns. Use a metal
  insert or nut for heavy or valuable gear [uncertain: general advice, no source opened].
- **Sources:**
  - https://en.wikipedia.org/wiki/Tripod_(photography) (section "Bolt threads")
  - https://www.ulanzi.com/blogs/knowledges/arri-standard-pins-professional-mounting-guide (anti-twist pins; a
    manufacturer's blog)
  - https://kupogrip.com/kupo-universal-5-8in-16mm-stud-3-8in-16-male-and-1-4in-20-male-threads (spigot; a
    supplier page)
  - https://en.wikipedia.org/wiki/C-stand
  - https://en.wikipedia.org/wiki/Microphone_stand
  - https://en.wikipedia.org/wiki/Bottle_cage
  - Printables 481288 "GoPro Action Camera Mount to 1/4 20 inch Tripod screw" (737 downloads) and 648100 "DJI
    Osmo Pocket Multi Holder (GoPro/Arca-Swiss/Tripod/1/4"-20/Cold shoe)" (Printables API; pages not opened)

### 2. Clamp-on accessory mount for bars, poles and edges (handlebar clamp, split bar clamp, U-bolt, desk clamp, pipe clamp)
- **Description:** A clamp that grips something already there, such as a handlebar, pole, tube, lighting pipe or
  the edge of a desk or shelf, so an accessory can be fixed on, moved or removed without drilling. Rubber pads
  let one clamp fit several sizes.
- **Nearest items and why it's distinct:**
  - 220 *Clamp-on tube fittings* builds frames from tees and elbows held by set screws. Its result mentions
    "adding a crossbar or mount to an existing tube frame with split or two-piece clamps", but its subject is
    structural fittings, and it says to avoid set-screw fittings on "bike or tent tubing" and "use split clamps
    ... instead". No entry describes those clamps.
  - 22 *Eccentric cam lever* is a quick way to close such a clamp; the finder already counts it for run 3's
    question 13 (the bike-light cam clamp).
  - 266 *Shaft-to-hub joints* is the same split clamp on a turning shaft. 20 *Toggle clamp* includes U-bolt
    latch clamps.
  - It answers "how do I attach this to my handlebar, mast, tripod leg or desk?".
  - **Alternative:** widen 220 to "Clamp-on tube fittings and bar clamps". But 220 is already researched, and
    attaching an accessory is a different job from building a frame.
- **Notes for the entry:**
  - **Split or hinged ring clamps with a screw.** A bike-computer out-front mount (Garmin (brand)) uses "the
    thicker pad" for a 25.4 mm bar and "the thinner pad" for 31.8 mm, with a "maximum torque specification of 7
    lbf-in. (0.8 N-m)".
  - **U-bolts:** from pipe support, so "U-bolt sizes are given in pipe measurements" (Wikipedia).
  - **Stage-lighting C-clamps (pipe clamps):** the open end goes over the pipe and "a bolt (the 'clamp bolt') is
    tightened"; a freely turning spigot carries the light, and a pan bolt locks the spigot (Wikipedia).
  - **Desk-edge C-clamps** for monitor and microphone arms. Cardellini-type jaw clamps grip "round, square, or
    rectangular tubing; or ... flat objects" (Wikipedia).
  - **15 mm camera-rod clamps:** lightweight-support rods are 15 mm across "spaced 60mm apart"; 19 mm studio rods
    are 104 mm apart (OCON).
  - **Frame clamps where there are no threaded bosses:** for a bike bottle cage, "clamps are necessary on bicycles
    not so equipped" (Wikipedia).
  - **Strap, band and cable-tie mounts** (see 8 *Linear ratchet*, and the hose clamp in the hardware group's
    list) [uncertain: no source opened beyond Printables 655215 "Wahoo Ziptie Stem & Handlebar Mount" (Printables
    API; page not opened)].
- **Family:** clamping, magnetic & friction connections. **Other family:** quick-release & tool-free.
- **Tier:** 2. It is widely printed.
- **Safety:**
  - On bikes and scooters the mount must not slip into the steering, brakes or wheel. Garmin says to choose a
    location that "does not interfere with the safe operation of your bike" and to "check the tightness of the
    screw periodically".
  - Over-tightening can crush thin-walled tube [uncertain for carbon bars].
- **Sources:**
  - https://www.adorama.com/col/productManuals/GP0101334000.pdf (Garmin Out-Front Mount instructions, hosted by a
    retailer: pads, torque, safety)
  - https://en.wikipedia.org/wiki/U-bolt
  - https://en.wikipedia.org/wiki/C-clamp_(stagecraft)
  - https://en.wikipedia.org/wiki/Clamp_(tool) (Cardellini clamp)
  - https://www.ocon.com/inspiration/labs/rod-standards-explained/
  - Printables 156668 "Yet Another Garmin/Wahoo Quarter Turn Bike Handlebar Mount" (1,836 downloads) and 1221789
    "Desk Clamp Mount (Microphone or Light arm)" (Printables API; pages not opened)

### 3. Shims, spacers and standoffs (packing, spacer washers, standoffs)
- **Description:** Thin packing pieces, washers or tubes put between parts to fill a gap, set a height or
  spacing, or lift a circuit board clear of a surface. This is the simplest way to adjust a fit.
- **Nearest items and why it's distinct:**
  - 146 *Self-locking wedge* has "shim / tapered shim" as an alias; tapered shims and folding wedges should stay
    there.
  - 144 *Tolerance ring* has "elastic shim" as an alias.
  - 264 *Plain pivot* says end float is "set with washers or shims".
  - Shims and spacers come up in dozens of results, but only as tools or parts (33 result files mention shims and
    42 mention spacers). Flat shims, spacer tubes and threaded standoffs have no entry of their own, yet they are
    the default answer to "it's slightly too low, loose or out of line", and standoffs are the standard way to
    mount a circuit board.
- **Notes for the entry:**
  - Shim stock, and laminated shims, which are "stacked foil that can be peeled off one layer at a time"
    (Wikipedia).
  - Spacer washers and tubes; printed step shims.
  - Male-female and female-female threaded standoffs. "Insulating standoffs keep two parts from touching each
    other, thereby preventing electrical shorts" (Wikipedia).
  - A "machinist's jack": "a threaded spacer with a bolt in it" (Wikipedia, Jackscrew).
- **Overlap:** the standard-hardware group may also list standoffs or washers; merge into one entry.
- **Family:** new `adjusters, levellers & spacers` (fallback: locating & alignment). **Tier:** baseline.
- **Sources:**
  - https://en.wikipedia.org/wiki/Shim_(spacer) ("used to fill small gaps ... support, adjust for better fit, or
    provide a level surface")
  - https://en.wikipedia.org/wiki/Spacers_and_standoffs (a standoff is "a threaded separator of defined length";
    photo of a standoff holding a circuit board)
  - Printables 355004 "Step Shim" and 601883 "M3 Standoff Spacer Female-Female Polygon 4-30mm" (Printables API;
    pages not opened)

### 4. Slotted adjustment with a jacking screw (slotted mount, sliding motor plate, adjustable centres)
- **Description:** Screws pass through slots instead of round holes, so a part such as a motor can slide to a new
  position, often pushed by a separate screw, and is then locked by tightening the screws.
- **Nearest items and why it's distinct:**
  - The results for 129 *Eccentric adjuster* and 128 *Belt tensioner* both list "Slotted mount or jacking screw
    (adjustable centres)" as the alternative with a longer, straight range. 129 says to use it "When you need
    more travel than about twice the offset". There is no entry for them to point to.
  - 257 *Ordinary screw joint* says only that parts "can be shifted ... along slotted holes" before tightening.
  - 234 *Hole-and-slot* uses a slot to locate a part, not to adjust it.
  - 17 *Lead screw* is a drive, not a set-and-lock adjuster.
- **Example:** on Prusa's MK3S+ to MK4 X axis you "slightly release all the screws holding the motor ... the motor
  must be able to move", tighten "the screw on the rear side of the X-end-motor" to tension the belt, then tighten
  the motor screws again.
- **Family:** new `adjusters, levellers & spacers` (or tensioning, reels & take-up). **Tier:** 2.
- **Sources:**
  - https://help.prusa3d.com/article/adjusting-belt-tension-mk4-s-mk3-9-s-mk3-5-s-mk3-s_112380 (photo steps; the
    older address .../adjusting-belt-tension-mk4-mk3-9_112380 redirects here)
  - https://en.wikipedia.org/wiki/Jackscrew (sections "Machinist's jacks" and "In electronic connectors" explain
    the word; the article mainly covers lifting screw jacks)

### 5. Cable through a hinge (hollow hinge pin or shaft, cable on the pivot axis, slack loop or flat flex cable)
- **Description:** Ways to carry wires, a ribbon cable or a tube across a hinge, or a pivot that turns less than
  a full turn, without pinching or breaking them:
  - through a hollow hinge pin or shaft;
  - along the pivot axis, so the cable only twists;
  - as a slack loop, a flexible flat cable wrapped round the hinge, or a spiral flat cable (clock spring) for a
    few turns.
- **Nearest items and why it's distinct:**
  - 135 *Slip ring* covers endless turning with brushes, and names the clock spring only as an alias. 291
    *Anti-twister* covers endless turning without brushes.
  - 285 *Multi-turn rotation limiter* lets "a simple cable loop or cable chain do the job of a slip ring", but
    only for turrets.
  - 136 *Cable carrier* is for straight-line axes, and 134 *Cable gland* for a wall that doesn't move.
  - 263 *Knuckle hinge* and 64 *Friction hinge* don't cover cables.
  - This is run 3's question 10 (a flip-up screen hinge hiding its ribbon cable), and it is common in robot
    elbows and laptop-style lids.
- **Rules to include:**
  - "Put a cable on the rotation axis of a joint and it only ever twists. Move it 30 mm off the axis and every swing
    of the joint also bends it, stretches it and drags it" (humanoid.guide).
  - Hollow-shaft friction hinges "allow wires, cables, tubing, and connectors to pass directly through the pivot
    point center" (Reell).
  - A harness crossing moving parts should "have sufficient length to allow for full travel without tension", and
    may need extra clamp points so the slack isn't "pinched when the equipment is retracted or closed" (Lectromec,
    quoting FAA guidance).
  - Flexible circuits suit assemblies that must "flex during [their] normal use, such as folding cell phones", and
    "single-sided circuits are ideal for dynamic or high-flex applications" (Wikipedia).
  - A clockspring is "a flat multicore cable wound in a spiral shape", as behind a car's steering wheel
    (Wikipedia).
- **Family:** seals & pass-throughs (other family: hinges & pivots). **Tier:** 1 (printable and robotics).
- **Safety:** wire flexed again and again can break inside its insulation, giving intermittent faults or shorts.
  Don't route mains wiring through home-made hinges [uncertain: general caution, no source opened].
- **Sources:**
  - https://reell.com/products/hollow-shaft-hinges (a manufacturer page)
  - https://humanoid.guide/hollow-shaft-cable-routing-humanoid-joints/ (opened as https://humanoid.guide/?p=18804,
    which redirects here; it has a hollow-shaft table)
  - https://lectromec.com/blog/in-aircraft-wire-systems-how-much-slack-should-i-give-a-wire/
  - https://en.wikipedia.org/wiki/Flexible_electronics
  - https://en.wikipedia.org/wiki/Clockspring

### 6. Castor (swivel castor, fixed castor, locking castor)
- **Description:** A wheel in a bracket under a cart, robot or piece of furniture so it can be rolled. A swivel
  castor's wheel sits a little behind its pivot, so it swings round to follow the direction of travel. Locking
  castors brake the wheel, the swivel or both.
- **Nearest items and why it's distinct:**
  - 264 *Plain pivot and rolling bearing* covers a wheel on an axle, with no swivel or offset.
  - 221 *Internal tube anchors* names the expanding stems that hold castors in tube legs.
  - 211 *Friction brake* lists "caster brake" as an alias.
  - 321 *Air caster* floats on air instead of rolling.
  - No result covers the trailing offset, flutter, or the choice between a wheel lock and a total lock.
- **Notes for the entry:**
  - "If there is no offset, the wheel will not rotate if not facing the correct direction".
  - A "total lock caster, has an additional rotational lock on the vertical shaft".
  - Flutter (shimmy) depends on load and "trailing distance, and increasing this distance can eliminate flutter
    at moderate speeds" (all from Wikipedia).
- **Family:** hinges & pivots (other family: sliding, telescoping & linear motion). **Tier:** 2.
- **Safety:** a cart can run away or tip on a slope, so lock the castors and respect each castor's rated load
  [uncertain: general advice]. At high speed flutter "can cause a vehicle to suddenly move in an unwanted
  direction" (Wikipedia).
- **Sources:**
  - https://en.wikipedia.org/wiki/Caster (photos of a swivel castor and a wheel lock, a 1505 drawing, a flutter
    section)
  - Printables 53619 "Swivel Caster Wheel Replacement v2" and 1033755 "One Bolt Swivel Caster Mount for Ikea Bror
    Shelf" (Printables API; pages not opened)

### 7. Locking adjustment screws (push-pull screw pairs, spring-loaded levelling screws, adjustable stop screws)
- **Description:** Screws that set the tilt, height or end position of a part and then hold it there. One screw
  pushes while its partner (or a spring) pulls, so the part is clamped firmly at the chosen setting, as in
  telescope mirror cells and 3D-printer bed levelling.
- **Nearest items and why it's distinct:**
  - 188 *Differential screw* is the extra-fine-pitch trick, a different principle.
  - 114 *Kinematic coupling* (a "bed levelled on three spherical-headed screws") and 235 *Exact-constraint* cover
    where the screw tips sit, not how the screws hold.
  - 260 *Thread-locking hardware* (the "Nylock mod" on bed screws) and 261 *Tool-free fasteners* (knurled
    levelling knobs) mention the hardware, but not the push-against-pull principle.
  - A single screw on its own drifts or rattles. Rehorst: "strong springs pushed the bed plate up against the screw
    heads ... the springs were replaced with nuts (if you allow something to move, it will!)".
  - The 2026-09-29 gap search rejected plain hard stops as too basic, so the adjustable stop screw (locked by a
    nut) fits here as a variant.
- **Notes for the entry:**
  - Push-pull pairs: the Mak150 mirror cell has "3 sets ... Every set of screws includes a push screw and a pull
    screw", turned "NO MORE THAN ¼ TURN" at a time.
  - Spring-loaded bed screws, and solid spacers or nuts once the bed is set.
  - Adjustable fixture stops: "suitable for positioning workpieces", set with a hex key (AMF).
- **Family:** new `adjusters, levellers & spacers` (or locating & alignment). **Tier:** 1 (printers, optics,
  robot sensors).
- **Sources:**
  - https://astronomics.com/cdn/shop/files/6101_MAK150_Collimation.pdf (with figures of the screw sets)
  - https://drmrehorst.blogspot.com/2017/07/3-point-print-bed-leveling-vs-4-point.html
  - https://www.amf.de/en_us/stop-adjustable-75663 (a supplier page with little detail)
  - Printables 577841 "Ender3/Ender3 Pro bed levelling column / bed springs replacement" (Printables API; page not
    opened)

### 8. Levelling foot (adjustable foot, swivel levelling pad)
- **Description:** A threaded stud with a pad, screwed into the bottom of a leg or machine. Turning it raises or
  lowers that corner, and a ball joint often lets the pad sit flat on an uneven floor.
- **Nearest items and why it's distinct:**
  - 221 *Internal tube anchors* (threaded tube inserts for levelling feet), 65 *Ball-and-socket* ("levelling feet
    with swivel balls"), 215 *Elastomer isolation mount* ("levelling mount") and 58 *Printed screw thread* each
    mention it only in passing.
  - It is the standard adjustable support, and answers "my printer table or cabinet wobbles".
- **Notes for the entry:**
  - The ball joint "adapts to mounting surfaces that are uneven or not perpendicular to the screw axis" and
    "prevents the clamping surface from rotating" (Ganter).
  - A lock nut to hold the setting is common [uncertain: not seen on an opened page].
  - Three feet never rock, but four need adjusting (see 235).
- **Family:** new `adjusters, levellers & spacers`. **Tier:** 2 (widely printed).
- **Sources:**
  - https://www.elesa-ganter.in/en/ind/Levelling-elements--Ball-Jointed-Leveling-Feet--GN638-ST (a manufacturer
    page with drawings)
  - Printables 1340235 "Cabinet Leveling Foot - Small" (about 2,270 likes) and 367208 "Not-Official Bambu Labs
    P1P X1 X1C Adjustable Leveling Foot For Vibration Dampening and Stuff" (Printables API; pages not opened)

### 9. Ball caster (ball transfer unit)
- **Description:** A large ball resting on small balls or rollers in a cup, so a load can roll in any direction
  without turning first. It is used ball-down as the third wheel of small robots, and ball-up in tables that heavy
  things slide across.
- **Nearest items and why it's distinct:**
  - Castor (above): before ball transfer units, "inverted casters" were used, but casters "recognise a trail,
    meaning that the wheels had to align before directional change could be achieved" (Wikipedia).
  - 69 *Turntable bearing*, 264 *Rolling bearing* and 321 *Air caster* are the other related supports.
  - No result mentions ball casters or ball transfer units.
  - Beginners building a two-wheeled robot choose between this and a swivel castor, so it needs its own card. It
    could be merged into the Castor entry if the owner prefers.
- **Notes for the entry:**
  - Ball-down use "is restricted by load-bearing limitations and the type of floor" (Wikipedia).
  - Pololu says a 1 in caster with three plastic rollers suits "a third contact point for wheeled,
    differential-drive robots weighing up to around ten pounds".
- **Family:** hinges & pivots (other family: sliding, telescoping & linear motion). **Tier:** 1 (robotics;
  printable).
- **Sources:**
  - https://en.wikipedia.org/wiki/Ball_transfer_unit (a cross-section image)
  - https://www.pololu.com/product/2691 (a dimension drawing; a supplier page)
  - Printables 205888 "Ball Caster V2" (Printables API; page not opened)

### 10. Expanding internal grip (expanding mandrel, inside gripper, expansion gripping)
- **Description:** A plug or a set of fingers pushed into a hole, ring or tube that grows outward to grip it from
  the inside, and shrinks again to let go. It can be driven by a cone or wedge, a screw-driven linkage or an
  inflated bladder.
- **Nearest items and why it's distinct:**
  - 219 *Collet* names the "expanding collet (grips the inside of a bore, like an expanding mandrel)" only as a
    variant.
  - 221 *Internal tube anchors* uses expansion plugs as permanent fixings, not as grippers.
  - 284 *Scroll chuck* can open its jaws inside a bore.
  - 197 holds the Sarrus linkage, the confirmed answer to run 3's question 9.
  - Run 3 found that the finder's gripper shortlist has no inside gripper. Makers use these in robot contests
    (question 9) and as spool holders.
  - The 2026-09-29 gap search rejected "expanding mandrel" as already named; run 3 then showed the finder can't
    reach it.
- **Notes for the entry:**
  - "Original expanding mandrels have a slightly tapered wedge that will expand to hold the item" (Wikipedia).
  - "Expansion gripping works by applying outward pressure against the internal diameter of a hollow part"; it is
    useful because the robot moves parts "without touching or damaging" their outside (Ozobot classroom guide).
  - Robot inside grippers come in two main types. One is "an actuator connected by a linkage with a series of
    fingers which can be moved outward"; the other is "the inflatable bladder gripper" (US 4,770,456).
- **Family:** clamping, magnetic & friction connections (other family: powered & active connectors).
  **Tier:** 1.
- **Safety:** an air- or power-driven inside gripper can drop its part when pressure or power is lost
  [uncertain: inferred, no source opened]. The Ozobot guide stresses keeping "constant outward force" while moving
  the part.
- **Sources:**
  - https://en.wikipedia.org/wiki/Mandrel
  - https://classroom.ozobot.com/wp-content/uploads/2026/07/ORA-Expansion-Gripping-Getting-a-Grip-from-Within-Student-Guide.MOzGTDjKRv6effhDH6GTlwxO.pdf
    (a classroom robot-arm lab)
  - https://patents.google.com/patent/US4770456 (opened with WebFetch; a direct download returned 503)
  - Printables 346075 "Ankermake M5 - Spoolholder - Expanding Mandrel" and 936777 "Expanding gripper" (Printables
    API; pages not opened)

### 11. (Optional) Spring clip clamp (clothes-peg clip, spring clamp, clip-on holder)
- **Description:** Two jaws on a pivot, squeezed shut by a spring. You pinch the handles to open it and let go to
  clamp, as in clothes pegs, spring clamps and clip-on phone or lamp holders.
- **Nearest items and why it's distinct:**
  - 20 *Toggle clamp* is over-centre, not sprung, and 44 *Cantilever snap fit* is a catch, not a clamp.
  - 156 *Spring-gate hook* and 268 *Coil spring* are the other near items.
  - 171 *Temporary sheet fastener* names a small spring clamp only as a related item.
  - No entry covers spring-jaw clamps, the commonest clip-on mount.
- **Family:** clamping, magnetic & friction connections (other family: springs & energy storage). **Tier:** 2.
  Lower confidence: it may overlap the standard-hardware group's list.
- **Sources:**
  - https://en.wikipedia.org/wiki/Clothespin ("two prongs connected by a fulcrum, plus a spring")
  - https://en.wikipedia.org/wiki/Clamp_(tool) (spring clamps among temporary clamps)
  - Printables 617245 "Rubber Band Spring Clamp" and 9024 "Spring Clamp" (Printables API; pages not opened)

---

## 3. Notes additions to existing items

| Item | What to add |
|---|---|
| **37 Bayonet mount** | (a) The **quarter-turn bike-computer mount** (Garmin (brand)-type): "Align the tabs on the back of the Edge device with the bike mount notches", "Press down slightly and turn ... clockwise until it locks into place"; a lever adapter adds a latch (Garmin PDF, item 2). (b) **Threaded lens mounts** as the screw-in alternative. The S-mount (M12 × 0.5) has no flange, so lenses "must be adjusted to focus" (https://en.wikipedia.org/wiki/S-mount_(CCTV_lens)). The C-mount is "1-32 UN 2A" with a 17.526 mm flange distance; CS-mount is 12.526 mm (https://en.wikipedia.org/wiki/C_mount). |
| **41 Quick-release plate** | Keep Picatinny, NATO and Weaver rails and cold or hot shoes here: the result already has them as aliases and in "how it works", and a shoe is "an angled metal bracket" (https://en.wikipedia.org/wiki/Hot_shoe). Link to new items 1 and 2 (15 mm rod clamps). |
| **42 Hang-on mounts** | **VESA screen mounts:** "four screw-holes arranged in a square". The original was 100 mm, and 75 × 75 mm was added for smaller displays; variants B-E use "standard M4 machine screws", while 200 × 200 and up use M6 or M8. Use the screen maker's screws if supplied. Printed VESA-to-French-cleat adapters are common; the result already lists a "VESA 100x100 ... French Cleat" model. Source: https://en.wikipedia.org/wiki/Flat_Display_Mounting_Interface. |
| **34 Hirth joint** | C-stand grip heads (serrated discs, already an alias): set the load "to one side of the grip head such that the weight causes the locking knob to tighten clockwise"; otherwise the weight slowly loosens it (https://en.wikipedia.org/wiki/C-stand). Link to new item 1 for ARRI anti-twist pins. |
| **173 Spring-steel push-on fasteners** | **Cage nut (rack nut):** "a (usually square) nut in a spring steel cage" whose wings snap into square holes, as in 19-inch rack rails, where the hole pattern "repeats every 1.75 inches (44.45 mm)". Sources: https://en.wikipedia.org/wiki/Cage_nut and https://en.wikipedia.org/wiki/19-inch_rack. |
| **113 Aluminium-extrusion connectors** | (a) **Strut channel** (Unistrut (brand)-type): steel channel with inward lips, joined by "a bolt, threaded into a channel nut, that may have a spring to ease installation"; punched versions have holes or slots at fixed centres (https://en.wikipedia.org/wiki/Strut_channel). (b) **Fixed-pitch hole-grid kits** as the stepped alternative to a continuous T-slot: Meccano perforations "at a standard 1⁄2 inch (12.7 mm) spacing" (https://en.wikipedia.org/wiki/Meccano); goBILDA (brand) uses "4mm holes on 8mm grid, M4 screws", and Actobotics (brand) is its imperial relative (https://game-manual-0.readthedocs.io/en/latest/docs/hardware-basics/kit-and-hardware-guide/gobilda.html). Printed parts are designed to the grid (e.g. Printables 424688 "Logitech C270 Camera mount (Gobilda pattern)"; Printables API, page not opened). |
| **257 Ordinary screw joint** | It already names Meccano as an everyday example; add the robot-kit hole grids above and a link to 113. |
| **234 Locating pins and hole-and-slot** | **Spigot or register (pilot boss):** a short round boss in a matching bore centres a motor face, flange or chuck, so the screws only clamp. "Threads are considered non-self centering so you need something to make it run concentric, the register" (https://www.hobby-machinist.com/threads/register.82685/, forum). Example: NEMA 17 brackets fit a "Max collar diameter 22 mm" with "31mm center-to-center hole spacing" (https://vxb.com/products/42mm-nema-17-stepper-motor-mounting-bracket-with-m, a supplier). The result already has the alias "concentric locator". |
| **219 Collet** | Link the "expanding collet" variant to new item 10. |
| **221 Internal tube anchors** | Link to *Castor* and *Levelling foot*; it already names castor stems and levelling-foot inserts. |
| **146 Self-locking wedge** | Keep tapered shims and folding wedges here; link flat shims and spacers to new item 3. |
| **129 Eccentric adjuster** and **128 Belt tensioner** | Point their related item "Slotted mount or jacking screw (adjustable centres)" at new item 4. Tag the new family, and consider making it 129's main family. |
| **188 Differential screw** | Link to new item 7; tag the new family. |
| **64 Friction hinge** | Hollow-shaft friction hinges that pass wires through the pivot (Reell); link to new item 5. |
| **135 Slip ring**, **291 Anti-twister** and **285 Multi-turn rotation limiter** | Link to new item 5 for joints that turn less than a full turn. |
| **264 Plain pivot and rolling bearing** | Link to *Castor* and *Ball caster*. |
| **220 Clamp-on tube fittings** and **22 Eccentric cam lever** | Link to new item 2, so 220's "use split clamps ... instead" advice has somewhere to point. |
| **65 Ball-and-socket**, **215 Elastomer isolation mount** and **58 Printed screw thread** | Link to *Levelling foot*. |
| **67 Clevis joint**, **82 Servo horn**, **43 Modular grid** | No change needed: GoPro-type prongs, 25T/24T servo splines and MOLLE/PALS are already covered. Add a link from 67 to new item 1, since the result already lists a "1/4-20 mounting finger adapter". |

---

## 4. Near-misses rejected

- **Picatinny, NATO and Weaver rails, cold and hot shoes:** already covered in 41; promoting them would
  duplicate 41.
- **ARRI rosette:** already in 34 (31.8 mm, 60 teeth, M6).
- **GoPro-type prong mount:** already in 67 (aliases "prong mount", "mounting fingers").
- **VESA patterns:** a catalogue of hole sizes; the joint is an ordinary screw joint (257). Note added to 42.
- **NEMA motor face patterns:** a catalogue; the useful idea (a spigot) is a note in 234.
- **Servo spline sizes:** a catalogue, already listed in 82.
- **M12 (S-mount), C- and CS-mount lens threads:** a catalogue; note added to 37.
- **15 mm and 19 mm camera rods:** a catalogue of spacings; covered in new item 2.
- **Robot-kit hole grids (goBILDA, Actobotics, Meccano):** a catalogue or ecosystem, and the joint is a bolt
  (257); notes in 113 and 257. *(The earlier attempt suggested this as a new item and said no result mentions
  Meccano; 257's result does.)*
- **19-inch rack:** a catalogue and a whole system; its cage nut is a note in 173.
- **Strut channel as its own item:** a close relative of 113; note added there.
- **Quarter-turn bike mount:** not a distinct type (a bayonet); note added to 37.
- **MOLLE/PALS webbing:** already in 43.
- **LEGO-style stud clutch:** covered by 233 *Elastic averaging* ("the way LEGO bricks click together").
- **Plain wheels:** covered by 264. Omni and mecanum wheels were rejected before as locomotion layouts.
- **Adjustable stop as its own item:** folded into new item 7. Plain hard stops were rejected on 2026-09-29 as
  too basic; 285 covers multi-turn stops, and shaft collars (266 notes) act as stop collars.
- **Woodworking flip stops:** a jig accessory (a tool), not a connection.
- **Service loop on its own:** part of new item 5.
- **Wedge levelling mounts:** already in 146.
- **Micrometer heads:** already in 188 (differential micrometer heads).
- **Hex-shank quick-change bit holders:** already in 219's related list.
- **Magnetic phone mounts:** 111 *Magnet joint* covers the type.
- **Stick-on action-camera mounts:** covered by 142 *Double-sided foam tape* (its result names the VHB pad
  under an action-camera mount).
- **Articulated "magic arms":** covered by 66 and 65; central-locking arms were already on run 2's left-out list.
- **Power-tool battery slide mounts:** brand-specific; a dovetail slide plus a latch (41, 73, 24, 44).
- **Furniture glides (slide pads under legs):** too basic, and no source opened beyond Printables 414281 "Simple
  furniture glide" (Printables API; page not opened). It could be a one-line note in *Castor* or *Levelling
  foot*.
- **Wall plugs and hollow-wall anchors** ("attach it to a wall"): standard hardware outside groups A and B, and
  on run 2's left-out list. The hardware group's scratchpad shows it is covering them, along with hose clamps
  (also usable as band mounts), cable ties, U-bolts and standoffs, so merge with its list.

---

## Sources and references (all opened in this attempt)

**Group A: mounting standards**
1. https://en.wikipedia.org/wiki/Tripod_(photography): tripod threads, ISO 1222:2010
2. https://www.ulanzi.com/blogs/knowledges/arri-standard-pins-professional-mounting-guide: ARRI anti-twist pins
3. https://kupogrip.com/kupo-universal-5-8in-16mm-stud-3-8in-16-male-and-1-4in-20-male-threads: 5/8 in spigot
4. https://en.wikipedia.org/wiki/C-stand: baby pin, grip-head safety rule
5. https://en.wikipedia.org/wiki/Microphone_stand: 5/8-27 and other mic threads
6. https://en.wikipedia.org/wiki/Bottle_cage: M5 braze-ons, clamps when there are none
7. https://www.adorama.com/col/productManuals/GP0101334000.pdf: Garmin Out-Front Mount instructions (pads,
   torque, quarter-turn, safety)
8. https://en.wikipedia.org/wiki/U-bolt
9. https://en.wikipedia.org/wiki/C-clamp_(stagecraft): pipe clamp for lights
10. https://en.wikipedia.org/wiki/C-clamp: points to the stagecraft page
11. https://en.wikipedia.org/wiki/Clamp_(tool): Cardellini clamp, spring clamps
12. https://www.ocon.com/inspiration/labs/rod-standards-explained/: 15 mm and 19 mm rods
13. https://en.wikipedia.org/wiki/Flat_Display_Mounting_Interface: VESA mount
14. https://en.wikipedia.org/wiki/S-mount_(CCTV_lens)
15. https://en.wikipedia.org/wiki/C_mount
16. https://en.wikipedia.org/wiki/Hot_shoe
17. https://vxb.com/products/42mm-nema-17-stepper-motor-mounting-bracket-with-m: NEMA 17 spacing and collar
18. https://www.hobby-machinist.com/threads/register.82685/: register (spigot) explained
19. https://en.wikipedia.org/wiki/19-inch_rack
20. https://en.wikipedia.org/wiki/Cage_nut
21. https://en.wikipedia.org/wiki/Strut_channel
22. https://en.wikipedia.org/wiki/Meccano
23. https://game-manual-0.readthedocs.io/en/latest/docs/hardware-basics/kit-and-hardware-guide/gobilda.html

**Group B: moving and adjusting**
24. https://en.wikipedia.org/wiki/Caster
25. https://en.wikipedia.org/wiki/Ball_transfer_unit
26. https://www.pololu.com/product/2691: robot ball caster
27. https://www.elesa-ganter.in/en/ind/Levelling-elements--Ball-Jointed-Leveling-Feet--GN638-ST
28. https://en.wikipedia.org/wiki/Shim_(spacer)
29. https://en.wikipedia.org/wiki/Spacers_and_standoffs
30. https://en.wikipedia.org/wiki/Jackscrew
31. https://help.prusa3d.com/article/adjusting-belt-tension-mk4-s-mk3-9-s-mk3-5-s-mk3-s_112380
32. https://astronomics.com/cdn/shop/files/6101_MAK150_Collimation.pdf: push-pull screws
33. https://drmrehorst.blogspot.com/2017/07/3-point-print-bed-leveling-vs-4-point.html
34. https://www.amf.de/en_us/stop-adjustable-75663
35. https://reell.com/products/hollow-shaft-hinges
36. https://humanoid.guide/hollow-shaft-cable-routing-humanoid-joints/
37. https://lectromec.com/blog/in-aircraft-wire-systems-how-much-slack-should-i-give-a-wire/
38. https://en.wikipedia.org/wiki/Flexible_electronics
39. https://en.wikipedia.org/wiki/Clockspring
40. https://en.wikipedia.org/wiki/Mandrel
41. https://classroom.ozobot.com/wp-content/uploads/2026/07/ORA-Expansion-Gripping-Getting-a-Grip-from-Within-Student-Guide.MOzGTDjKRv6effhDH6GTlwxO.pdf
42. https://patents.google.com/patent/US4770456 (WebFetch; curl got 503)
43. https://en.wikipedia.org/wiki/Clothespin
44. https://api.printables.com/graphql/: model IDs above (pages not opened)

**Tried but not usable (not cited):** insights.globalspec.com (403); Google Patents by curl (503).
