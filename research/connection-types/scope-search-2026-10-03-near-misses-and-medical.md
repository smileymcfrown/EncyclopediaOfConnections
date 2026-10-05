<!-- Saved into the repository on 2026-10-03 from the search agent's working notes (R22). -->
# Scope search 2026-10-03: Earlier near-misses and medical-field ideas

One of six web searches for R22, the wider scope (see `scope-search-2026-10-03-combined.md` for
the combined list the owner confirmed). The agent's write-up follows unchanged, except this
header. Download folders it mentions were working files and were not kept. Suggestion numbers
below are the agent's own; they map to outline items like this:

| Suggestion | Item | Outline name |
|---|---|---|
| 1 | 399 | In-line swivel (rope swivel, chain swivel, ball-bearing swivel) |
| 2 | 340 | Printed chainmail and tile fabric (print-in-place interlinked fabric) |
| 3 | 400 | Multi-point bolt (espagnolette, crémone bolt, lock rods) |
| 4 | 341 | Strut hub (geodesic dome hub, space-frame node) |
| 5 | 401 | Flywheel (inertia wheel, friction motor) |
| 6 | 345 | Tensegrity (floating struts held by cords) |

---

# Near-misses and medical-field ideas: suggestions (FINISHED)

Agent: nearmiss_medical, 2026-10-03. Group A: the earlier near-misses, judged again under the
2026-10-03 scope. Group B: connection types from medicine, dentistry, orthotics, prosthetics,
lab and assistive equipment, described for non-medical maker use only. Nothing here gives
guidance on using anything on or in people.

**Summary.** Six group A near-misses are worth new entries: the in-line swivel, printed
chainmail fabric, the multi-point bolt, the strut hub, the flywheel and tensegrity. Ten more
fit into existing items' notes (two of them, the central-locking arm and the mangle rack, are
already covered and only need firming up), and four stay out. Group B produced no new top-level types.
The medical ideas checked are either already covered (Luer, stopcock, roller clamp, wheelchair
quick-release axle, tourniquet-style windlass, remote centre of motion) or fit well as notes
(the haemostat handle ratchet, the pyramid alignment adaptor, orthotic hinge locks, lab boss
heads, thumb-latch tubing couplings, central-locking castors, hydraulic motion reduction, and
"voluntary-opening" grippers).

Checked against: outline.yaml (323 items), outline-notes.md, gap-search-2026-09-29.md,
fluid-power-search-2026-09-29.md, flowchart-and-format.md 1.7, preferred-sources.md, and a grep
of all 323 result files. To avoid overlap I also read the sibling scratchpads. `mount_adjust`
proposes Castor, Ball caster, Locking adjustment screws (including adjustable stop screws) and
Clamp-on mount (including rod clamps). `rope_sewn` proposes Printing onto fabric. The cross-links
below point to those proposals rather than repeating them.

---

## 1. Family placement
No new family is needed. Every suggestion fits an existing family key:

| Suggestion | Family (exact key) | Other family |
|---|---|---|
| In-line swivel | `cord, strap, webbing & textile hardware` | `hinges & pivots` |
| Printed chainmail and tile fabric | `print-in-place & 3D-printing joints` | `compliant mechanisms & flexures` |
| Multi-point bolt | `locks, latches & catches` | - |
| Strut hub | `clamping, magnetic & friction connections` (beside 220) | `interlocking joints & joinery` |
| Flywheel | `springs & energy storage` | `brakes, dampers & speed control` |
| Tensegrity | `interlocking joints & joinery` (beside 298 Reciprocal frame, its nearest relative) | `tensioning, reels & take-up` |

All group B ideas go into existing items' notes, so they need no family.

---

## 2. Suggested new types (ranked by usefulness to a hobbyist maker)

### 1. In-line swivel (rope, chain and lead swivel; barrel and ball-bearing swivel)
- **Description:** A small link made of two eyes joined by a free-turning pivot. Put it in a
  line, chain, lead or hanger, and one end can spin without twisting the other: on fishing line,
  dog leads, anchor chain, key rings and hanging signs.
- **Nearest items and why it's distinct:**
  - 135 *Slip ring and rotary union* passes power or fluid across a turning joint (its results
    already list the telephone-cord untangler and the BMX detangler).
  - 291 *Anti-twister mechanism* feeds a cable through a full turn by a geared mechanism.
  - 69 *Turntable bearing* is a flat plate bearing.
  - 156 *Spring-gate hook* and 155 *Quick-release hooks* only mention a swivel eye as an extra.
  - None of these is the plain in-line link that stops twist building up under tension, which
    beginners ask for by name.
- **What to cover:**
  - Wikipedia lists three designs: a rod turning in a support and kept in by a nut, washer or
    thickened end; a sphere turning in a support; and a rod inside a slightly larger hollow
    rod, held by flanges.
  - Pipe swivel joints are a threaded variant; they are already covered by 135.
  - Seabreeze compares barrel, box and crane swivels with ball-bearing swivels. A barrel
    swivel's "stoppers" press against the barrel when the line is pulled, so the friction can
    "stop the swivel from doing its job". Ball-bearing swivels "twist freely when it is under
    pressure" and cost more.
  - Print-in-place swivels exist, e.g. Printables 983933 "Swivel Carabiner", described as
    "Print in place carabiner with a swivel" (Printables API; page not opened).
- **Tier:** 2 (common hardware, also printable).
- **Safety:** yes, for load-bearing use. A swivel can be the weakest link. On anchor chain,
  sideways loads can pry its jaws open, and stainless-steel shafts corrode out of sight in wet,
  low-oxygen gaps (Wikipedia). Don't use a printed swivel to hold anything overhead or any
  person.
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Swivel (images: "A swivel in a chain link", "Stainless steel anchor swivel")
  - https://www.seabreeze.com.au/Articles/Fishing/Learning-more-about-swivels-Part-1

### 2. Printed chainmail and tile fabric (print-in-place interlinked fabric)
- **Description:** A flat sheet of small links or tiles, printed already linked together. It
  bends and drapes like cloth in every direction. Used for cosplay armour, flexible covers, bag
  panels and fidget toys.
- **Nearest items and why it's distinct:**
  - 55 *Print-in-place hinge* is a single hinge with one axis.
  - 66 *Posable segmented arm* is a 1-D chain that holds its shape.
  - 136 *Cable carrier* is a chain that bends in one plane.
  - 281 *Multi-material interlock* bonds two printed materials together.
  - The `rope_sewn` proposal "Printing onto fabric" embeds real fabric in a print; this entry is
    the all-printed alternative, and the two should cross-link.
- **What to cover:**
  - The popular "NASA chainmail" (Printables 205674, about 13,000 likes) prints well at 0.15 or
    0.20 mm layers. A "coned center section" replaced the tiny dots that "often failed".
  - Thicker links (1.8 mm instead of 1.2-1.5 mm) were "more than twice as strong" with nearly the
    same flexibility (Printables 373566).
  - Modular tiles can be printed in different colours and joined (Printables 288 "Chainmail
    2.0": "print a small chainmail to test your 3D printer", 0.4 mm nozzle, 0% infill).
  - Supportless designs rely on bridges ("no supports needed, everything bridges nicely";
    Printables 304968).
  - The idea came from JPL's metal "space fabric", "strung together from a series of
    articulated metallic tiles" made by 3D printing (Space.com).
- **Tier:** 1.
- **Safety:** none special. Treat it as decorative or light-duty: it is not armour against
  anything sharp.
- **Sources:**
  - https://www.space.com/36719-nasa-chain-mail-space-fabric.html (opened; JPL image of the fabric)
  - Printables 205674 "Nasa chainmail", 373566 "Ideal NASA Chainmail Hex for FDM", 304968
    "Tetrahedron chainmail fabric" and 288 "Chainmail 2.0 - Modular 3D Printable Fabric"
    (Printables API; pages not opened)

### 3. Multi-point bolt (espagnolette, crémone bolt, lock rods)
- **Description:** One handle drives two or more bolts at once, through a turning rod with hooks
  or a rack and pinion. A tall door, a big lid or a pair of cabinet doors is then locked at top
  and bottom (or all round) with one movement.
- **Nearest items and why it's distinct:**
  - 262 *Basic latches* (slide, tower and flush bolts) lock at one point each.
  - 160 *Mechanical interlock* stops one action until another is done.
  - 21 *Draw latch* and 163 *Rotary latch* catch at one point.
  - The defining feature here is a linkage that spreads one handle movement to several bolts.
    The same idea locks every castor at once (central-locking castors, group B).
- **What to cover:**
  - **Espagnolette:** a handle turns a vertical round rod whose hooked ends catch pins at the
    head and sill, so "tall sashes [are] locked at both ends simultaneously". Truck trailer and
    shipping-container doors use the same idea as lock rods (Wikipedia).
  - **Crémone bolt:** a knob or lever turns a pinion that drives two racks, pushing half-round
    rods up and down "at the same time" (Wikipedia, with a labelled photo of the gearbox).
  - Printable as rack-and-pinion bolts for large printed boxes and enclosures.
  - Cross-link: 88 *Rack and pinion*.
- **Tier:** 2.
- **Safety:** low; mind the pinch points at the gearbox.
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Espagnolette (numbered photo of the parts)
  - https://en.wikipedia.org/wiki/Cr%C3%A9mone (photo of the rear of the gearbox)

### 4. Strut hub (geodesic dome hub, space-frame node)
- **Description:** A connector that joins three to six sticks, dowels, tubes or wooden struts
  at set angles in one node. Used to build domes, frames and trusses from straight pieces.
- **Nearest items and why it's distinct:**
  - 220 *Clamp-on tube fittings* joins round tubes, mostly at right angles (Kee Klamp and
    printed 3-way connectors).
  - 298 *Reciprocal frame* has no connector at all.
  - 242 *Cross-halving slot joint* joins flat sheet.
  - A hub fixes many members at compound angles in one part; that is what beginners need for
    a dome or a stick frame. If the owner prefers, this can instead go in 220's notes.
- **What to cover:**
  - Wikipedia names the "hub-and-strut dome", where steel hubs tie the struts together.
  - Conduit domes have the strut ends flattened and drilled, with "a single bolt" securing each
    vertex (the usual way to build dome climbing frames).
  - Space frames use ball-shaped node joints (MERO).
  - Printed hubs come in 5-way and 6-way versions for popsicle sticks, skewers or 50 x 25 mm
    wood. One model has an OpenSCAD hub generator for 1V-6V domes and recommends PETG
    (Printables 601680).
  - Hub sockets can be tuned for a snug fit with XY size compensation; over-tight sockets can
    break sticks (Printables 370482).
- **Tier:** 1 (printed hubs are a common maker project).
- **Safety:** large domes are structures: don't climb or load printed hubs, and test one hub
  first.
- **Sources:**
  - https://en.wikipedia.org/wiki/Geodesic_dome (opened; methods of construction)
  - https://en.wikipedia.org/wiki/Space_frame (opened; MERO node joints)
  - Printables 601680 "1V 2V 3V 4V 5V 6V Connector for Geodesic Dome with customizer" and 370482
    "Geodesic Dome hubs for popsicle sticks" (Printables API; pages not opened)

### 5. Flywheel (inertia wheel, friction motor)
- **Description:** A heavy spinning wheel that stores energy as spin. It smooths out jerky
  turning (carrying a crank past its dead points) and keeps a toy or machine going after the
  push stops.
- **Nearest items and why it's distinct:**
  - 238 *Spiral power spring* stores energy in a wound spring (pull-back cars).
  - 213 *Speed governor* limits speed with air drag or weights.
  - 294 *Tuned mass damper* absorbs vibration.
  - 86 *Slider-crank* and 85 *Scotch yoke* say "add a flywheel" but don't explain one.
- **What to cover:**
  - A flywheel "smooths sufficiently small deviations" in speed. It is used to smooth
    reciprocating engines and to drive the "friction motor" in toy cars (Wikipedia).
  - Put the mass near the rim for more inertia per gram.
  - Lead flywheels in toys are inefficient but never near bursting speed (Wikipedia).
  - The friction motor is a large flywheel geared fast to the wheels; pushing the toy
    repeatedly spins it up (Wikipedia).
  - A printable coin-weighted flywheel car snaps together with no glue or screws (Printables
    973796).
  - Flywheel dart blasters are projectile launchers, which are out of scope, so leave them out.
- **Tier:** 2.
- **Safety:** yes. When hoop stress exceeds the material's tensile strength, "the flywheel will
  break apart" (Wikipedia), so never over-speed printed flywheels and guard any motor-driven
  one. A flywheel keeps turning after the power is cut.
- **Sources:**
  - https://en.wikipedia.org/wiki/Flywheel (opened)
  - https://en.wikipedia.org/wiki/Friction_motor (opened; photo inside a friction motor)
  - Printables 973796 "Coin Flywheel Toy Car" (Printables API; page not opened)

### 6. Tensegrity (floating struts held by cords)
- **Description:** A structure in which rigid struts don't touch each other and are held in
  place only by tensioned cords or chains. Used for "floating" tables, shelves and sculptures.
- **Nearest items and why it's distinct:**
  - 298 *Reciprocal frame* is also self-supporting, but its sticks press on each other; its
    results name tensegrity as left out of scope.
  - 150 *Turnbuckle* only tensions a single line.
- **Why add it now:** it is one of the most-printed mechanisms. Printables 243319 "Print In
  Place Tensegrity" has about 10,000 likes and 37,000 downloads. It is described as "using
  chains as the tension element, with built-in tensioner".
- **What to cover:** Wikipedia: "isolated members held in place by tension". The simplest is
  the T3 prism: three struts, each end held by three cables.
- **Tier:** 1, but last in this list, because it is mostly decorative. If the owner still sees
  it as a structure rather than a joint, put it in 298's notes instead.
- **Safety:** low. It collapses suddenly if a cord breaks, so keep loads light.
- **Sources:**
  - https://en.wikipedia.org/wiki/Tensegrity (opened; animation File:Tensegrity simple 4.gif is
    linked from the article)
  - Printables 243319 (Printables API; page not opened)

### Possible extra entry (owner's choice): Handle ratchet lock (haemostat-style locking forceps)
Group B's best candidate. I recommend notes of 8 *Linear ratchet* (see section 3); it would only
need its own entry if the owner wants the clamp-handle version to show up separately in the
finder.

---

## 3. Notes additions to existing items

### Group A (earlier near-misses)
- **66 Posable segmented arm:** central-locking arms are already covered ("Cable-locked holding
  arm"). Add the magnetic dial-indicator stand as an everyday example: its "Arm has 3
  articulating joints that can be locked with the single hand knob" (Protool; Penn Tool). The
  camera "magic arm" alias still has no opened source and stays [uncertain].
- **87 Four-bar linkage** and **285 Multi-turn rotation limiter:** add **lost motion**
  (deliberate free play before the driven part is picked up).
  - Thang part 2 p. 119, "Motion delay mechanism 1": "pink rack that moves only after the blue
    gear makes around two revolutions"; the crank "rotates idly", and adding cranks lengthens
    the delay.
  - 285's stacked-ring stops use the same principle.
  - The straight pin-in-slot link version is general knowledge [uncertain: no linear example
    page opened].
- **110 Granular jamming gripper:** add **layer jamming**.
  - "Layer jamming structures can be formed by placing a stack of paper inside an airtight
    plastic envelope"; under vacuum the friction couples the layers "into a coherent beam with
    a far greater bending stiffness" (Aktaş and Howe 2019).
  - Ordinary paper or plastic sheets can't follow a curved surface without wrinkling (Mitsuda
    and Tanaka 2023).
  - Also list `compliant mechanisms & flexures` (lockable flexures).
- **111 Magnet joint:** add **programmable (correlated, coded) magnet arrays**.
  - Patterns of alternating-polarity magnets "can be programmed to interact only with other
    magnetic structures that have been coded to respond". They can be made "from discrete
    permanent magnets" (so a maker can glue disc magnets in a pattern) and give "stronger shear
    resistance" (Wikipedia).
  - The four functions are "align, attach, latch, and spring".
  - Polymagnet (brand).
  - Cross-link to 116 *Keying*.
- **178 Origami mechanisms:** replace the [uncertain] kirigami line with sourced text.
  - "A thin, perforated sheet can be transformed into a foldable 3D structure by simply
    stretching the cut material" (Harvard SEAS 2017).
  - Kirigami grippers "deform to surround an object and lift it" (Hackster on NC State).
  - Cross-link to 244 *Kerf bending* and 176 *Mechanical metamaterial mechanism*.
- **190 Spline shaft:** add the **Bendix drive** as the helical-spline example. "The inertia of
  the drive pinion" makes it slide along a helically splined shaft into mesh, and it is thrown
  back out when the engine overruns it (Wikipedia). It is mostly an automotive curiosity, so
  give one line.
- **204 Lantern gear:** the mangle rack is already there (507 no. 199). Add the **mangle wheel**:
  507 no. 192, "speed varies in every part of a revolution", and no. 194, "speed is equal in both
  directions", where "the pinion-shaft is guided ... by a groove in the wheel". Cross-link to 36
  *Intermittent gear*.
- **214 Dampers:** add **one-shot crush absorbers**.
  - Crash cushions use "crushable materials (like various kinds of foam)", flatten corrugated
    rail, split a steel box beam, or use friction (Wikipedia, Impact attenuator).
  - Racing cars use aluminium or carbon honeycomb or foam attenuators (Wikipedia, Crumple zone).
  - Maker use: drone and robot bumpers, egg-drop capsules.
  - Must be replaced after one hit, unlike 215 *Elastomer isolation mount*.
- **268 Coil spring:** add the **repelling-magnet (magnetic) spring** as an alternative.
  - K&J's pogo-stick test: the force "doesn't increase in a straight line like the spring. It's
    very weak ... When it finally does, it increases very quickly". Two magnets stored under
    0.32 J against 1.65 J for the coil spring, and adding magnets cuts the travel.
  - Magnets "can act across an air gap".
  - Cross-link to 280 (it already mentions magnetic springs).
- **109 Vacuum (suction) gripper** and **277 Bernoulli gripper:** keep electroadhesion as the
  alternatives line, and add a source and a safety note.
  - An open-source PCB needs "upwards of 500V DC" from a voltage multiplier and holds about "a
    piece of paper"; "there is still obviously a lot of potential danger" (Hackster).
  - Safety: high voltage.

### Group B (medical, dental, orthotic, prosthetic, lab and assistive ideas)
- **8 Linear ratchet (cable-tie ratchet):** add the **handle ratchet of locking
  forceps (haemostat)**.
  - It is "a series of interlocking teeth, a few on each handle, that allow the user to adjust
    the clamping force". When locked, the tips press with about 40 N (Wikipedia, Hemostat).
  - Non-medical use: printed locking clamps for soldering, gluing and fly-tying.
  - Printables 475661 "Hobby Locking Forceps - Single Piece with Compliant Joints": PETG works
    better than PLA, it survived "over 150" open-close cycles, and keep layer seams off the four
    flexing joints.
  - Printables 920228 is a wide-range "hemostat locking plier" that clamps 0-8 mm; Printables
    1405899 is a print-in-place self-locking version.
  - All three Printables models: Printables API; pages not opened.
- **33 Detent hinge:** add the three classic orthotic hinge locks as general hinge-lock
  ideas:
  - the **drop-ring lock**, "a sliding ring ... lowered into engagement with the pivot joint to
    lock it and ... lifted to release";
  - the **bail (French) lock**, one lever that releases both side hinges at once;
  - the **dial lock** (variable-position locking joint), toothed parts locked at a chosen angle.
  - Manual drop rings without a spring can be "shaken out of engagement", which is why a
    spring-loaded release is better.
  - Sources: EP0016268 (opened) and the "Orthotic knee joints" slides (opened).
- **65 Ball-and-socket joint (lockable ball head):** add the **pyramid alignment
  adaptor**.
  - An inverted four-sided "pyramid" sits in a ring with four set screws, giving "360° rotation
    ±5° angular" adjustment that the screws then lock (Blatchford 938373PK2; Ottobock
    Wikipedia: patented 1969, "allows static corrections as well as the exchange of the
    modules").
  - Maker use: a compact, screw-locked tilt joint between two modules (robot legs, sensor
    mounts).
  - Cross-link to `mount_adjust`'s proposed *Locking adjustment screws*.
- **151 Capstan and windlass:** the results already list the **Spanish windlass** as an alias.
  - Make it explicit in the outline notes as the tourniquet-style twist tensioner for
    non-medical use: "a device for tightening a rope or cable by twisting it using a stick as a
    lever ... pulling the two points toward each other", e.g. to move a post or free a car from
    mud (Wikipedia, Windlass).
  - Cross-link to 92 *Twisted-string actuator* (same principle, motor-driven).
- **166 Quick couplers for tubes and hoses:** add small **plastic thumb-latch couplings** for
  lab, medical-device and analyser tubing. They are "self-locking when the nipple is
  plugged-in", "a short thumb pressure on the lock" releases them, and they work one-handed;
  valved versions seal when parted (RCT page for the THOMAFLUID couplings). CPC (brand) as an
  alias [uncertain: CPC brand page not opened].
- **220 Clamp-on tube fittings:** add **rod-to-rod cross clamps**.
  - The lab **boss head** (clamp holder): two jaws and thumbscrews lock a rod and a clamp "at any
    height or angle", with swivel and all-position versions, and "in some cases it can be used
    to attach support rods together" (Wikipedia, Clamp stand).
  - The **external-fixator frame idea**: pins joined to an outside rod by ball-and-socket clamps
    that are adjusted and then locked (Wikipedia, External fixation; describe only as a
    frame-building idea, never for use on people).
  - Scaffold swivel couplers are already named in 220.
  - Cross-link to `mount_adjust`'s Clamp-on mount (camera-rod clamps) and to the new *Strut hub*.
- **275 Iris valve (pinch valve notes):** the results already cover the **roller clamp** ("a wheel
  rolled along a ramp to squeeze a drip or aquarium tube", with Printables models) and Mohr's
  pinchcock. Add both names to the outline notes, which today say only "pinch valve". The drip
  rate is "controlled by a clamp on the infusion tubing" (Wikipedia, Drip chamber).
- **278 Tendon-driven joint:** add the **voluntary-opening versus voluntary-closing** design
  choice from body-powered prosthetic hooks.
  - Voluntary-opening: elastic bands or springs give the grip and the cable opens it, so "they
    operate like a passive vice".
  - Voluntary-closing: the cable closes it, grip is proportional to the pull, and it "require[s]
    constant tension to grip" (Wikipedia, Prosthesis).
  - Maker use: deciding whether a cable gripper should be spring-closed or cable-closed.
- **300 Syringe hydraulics:** add **hydraulic motion reduction for fine positioning**.
  Micromanipulators reduce movement "hydraulically using pistons of different diameters
  connected by tubing containing non-compressible fluid" (Wikipedia). Maker use: fine remote
  XYZ probing of circuit boards under a microscope. The micromanipulator itself is a whole
  device and stays out.
- **Castor** (new item proposed by `mount_adjust`, if accepted): add **central locking**.
  - "A central lock mechanism engaged by a rigid ring encircling each swivel caster", or "a
    rotating cam in the center of each vertical caster shaft", locks every castor at once.
  - "Total lock" stops both swivel and wheel; locking only the swivel makes a "directional
    caster" (Wikipedia, Caster, with a photo of a central-locking mechanism on a stretcher).
  - Hospital-bed castors offer three pedal modes: "Motion straight ahead", "free mobility of all
    casters" and "Full locking of all four casters" (Colson MedCaster catalogue).
  - Cross-link to the new *Multi-point bolt* (one control, many locks).
- **Already covered, nothing to add:** Luer taper and Luer lock (217 notes; Keck clips are in
  217's results), three-way stopcock (315 results), wheelchair quick-release axle (40 results),
  syringe hydraulics (300), syringe pump (309, with its "never on people" note), peristaltic pump
  (303), pneumatic artificial muscle (288), remote centre of motion and polycentric knee (183),
  child-resistant cap (29), whippletree in prosthetic hands (91 results), magnetic stirrer (143
  results), compliant surgical grippers (52 results).

---

## 4. Near-misses rejected (one line each)
- **Gecko-style dry adhesive:** still out; lab-made microstructures with no practical DIY route found.
- **Fluid coupling, viscous coupling:** still out; vehicle drivetrain parts, already named in 145,
  97 and 214.
- **Magnetorheological damper, magnetic-particle clutch:** still out; niche industrial, and the
  magnetic-particle brake is already named in 212.
- **Plain hard end stop:** still out as its own entry; too basic. `mount_adjust` puts adjustable
  stop screws under its *Locking adjustment screws*, and 285 covers clever multi-turn stops.
- **Surgical stapler:** out; staples are standard hardware (the `hardware` agent) and clinching
  is in 255.
- **Sutures:** out; stitching and knots belong to the `rope_sewn` agent.
- **Dental articulator:** out; a whole jig, not a connection.
- **Micromanipulator:** out as a whole device; its hydraulic reduction goes in 300's notes.
- **External fixator itself:** out (medical device); only the clamp idea goes in 220's notes.
- **Prosthetic pin (shuttle) lock:** out; only named on Wikipedia, with no mechanism source
  opened. It is a variant of 8 or 72 anyway.
- **Flywheel dart blasters:** out; projectile launchers.
- **Weight-activated (stance-control) brakes and braked stool castors:** not added; no
  non-medical source opened. Could be a later note for 211 *Friction brake* or the Castor item.
- **Chicago screws, eyelets and grommets, crimped wire-rope sleeves:** skipped as the brief asked
  (the `rope_sewn` agent covers them).

---

## Sources and references (opened this session unless marked)
1. https://en.wikipedia.org/wiki/Swivel : swivel designs, anchor-swivel weak-link concerns
2. https://www.seabreeze.com.au/Articles/Fishing/Learning-more-about-swivels-Part-1 : barrel, box, crane and ball-bearing swivels
3. https://en.wikipedia.org/wiki/Flywheel : smoothing, friction motor, burst limit, rim mass
4. https://en.wikipedia.org/wiki/Friction_motor : toy flywheel drive
5. https://www.space.com/36719-nasa-chain-mail-space-fabric.html : JPL 3D-printed "space fabric" of articulated tiles
6. https://en.wikipedia.org/wiki/Espagnolette : rod-and-hook multi-point lock, lock rods
7. https://en.wikipedia.org/wiki/Cr%C3%A9mone : rack-and-pinion crémone bolt
8. https://en.wikipedia.org/wiki/Geodesic_dome : hub-and-strut domes, flattened-conduit single-bolt vertices
9. https://en.wikipedia.org/wiki/Space_frame : MERO ball node joints
10. https://en.wikipedia.org/wiki/Tensegrity : definition, T3 prism
11. https://en.wikipedia.org/wiki/Programmable_magnet : coded magnet arrays
12. https://kjmagnetics.com/blog/magnetic-springs : magnet versus coil-spring force and energy test
13. https://www.protool-ltd.co.uk/collections/asimeto-articulating-arm-magnetic-bases-602-series : single-knob lock for three joints
14. https://www.penntoolco.com/asimeto-articulating-arm-magnetic-base-w-176-lbs-hold-power-602-03-1-57-020-755/ : same wording
15. https://cs448m.github.io/lectures/machines/doc/2.pdf : Thang part 2, p. 119 "Motion delay mechanism 1"
16. https://cs448m.github.io/lectures/machines/doc/4.pdf : Thang part 4, p. 104 "Swivel caster 1/2" (castor trail; supports `mount_adjust`)
17. https://par.nsf.gov//servlets/purl/10126137 : Aktaş and Howe 2019, flexures with layer jamming
18. https://br.ci.ritsumei.ac.jp/AdvEngMatr2023preprint.pdf : Mitsuda and Tanaka 2023, mesh layer jamming (preprint)
19. https://seas.harvard.edu/news/new-pop-strategy-inspired-cuts-not-folds : kirigami pop-up by stretching
20. https://www.hackster.io/news/these-robotic-grippers-are-delicate-enough-to-lift-egg-yolk-3cc82a9f0937 : kirigami gripper
21. https://www.hackster.io/news/this-electrostatic-adhesion-plate-is-better-than-magnets-2dd84b713a97 : DIY electroadhesion, 500 V+
22. https://en.wikipedia.org/wiki/Impact_attenuator : crush cushions
23. https://en.wikipedia.org/wiki/Crumple_zone : honeycomb and foam attenuators
24. https://en.wikipedia.org/wiki/Bendix_drive : inertia-engaged pinion on a helical spline
25. https://507movements.com/mm_192.html , https://507movements.com/mm_194.html , https://507movements.com/mm_199.html : mangle wheels and mangle rack
26. https://en.wikipedia.org/wiki/Hemostat : interlocking handle teeth, about 40 N
27. https://en.wikipedia.org/wiki/Ottobock : pyramid adapter patented 1969
28. https://www.blatchfordmobility.com/media/iiupykot/938050pk3-iss1.pdf : female pyramid adapter, four pyramid set screws, angular and rotational adjustment
29. https://www.blatchfordmobility.com/media/ir1ilehd/938373pk2-iss1.pdf : "360° rotation ±5° angular"
30. https://www.college-park.com/media/wysiwyg/pdf/instructions/components/CPI-INS-4HPR.pdf : 4-hole pyramid receiver, four M8 set screws
31. https://data.epo.org/publication-server/rest/v1.2/patents/EP0016268NWB1/document.html : lockable orthopaedic hinge; drop-ring and bar locks
32. https://www.slideshare.net/slideshow/orthotic-knee-joints/233011007 : drop-ring, bail and dial locks
33. https://en.wikipedia.org/wiki/Retort_stand (redirects to Clamp stand) : boss head clamp holder
34. https://en.wikipedia.org/wiki/External_fixation : pins joined by an outside rod with ball-and-socket joints
35. https://en.wikipedia.org/wiki/Spanish_windlass (redirects to Windlass, Spanish windlass section)
36. https://en.wikipedia.org/wiki/Micromanipulator : hydraulic movement reduction
37. https://www.rct-online.de/en/tube-hose-connectors/quick-disconnect-couplings-made-of-plastic/multi-lumen-quick-disconnect-couplings/29228/multi-lumen-quick-disconnect-nipple-made-of-pom (the /en/fittings/ address redirects here) : thumb-latch plastic couplings
38. https://en.wikipedia.org/wiki/Caster : total lock, directional lock, central locking
39. https://resources.colsongroup.com/medcaster/pdfs/series/124-125_MedCasterCatalog_2012_Rhombus_391.pdf : three-mode central-locking pedal
40. https://en.wikipedia.org/wiki/Drip_chamber : flow set by a clamp on the tubing
41. https://en.wikipedia.org/wiki/Prosthesis : voluntary-opening versus voluntary-closing hooks
42. https://en.wikipedia.org/wiki/Orthotics : stance-control knee joints (background only)
43. Printables API (pages not opened): 983933 Swivel Carabiner; 205674, 373566, 304968, 288 chainmail; 601680, 370482 geodesic hubs; 243319 Print In Place Tensegrity; 973796 Coin Flywheel Toy Car; 475661, 920228, 1405899 locking forceps

## Conflicts and caveats
- The Space.com article does not say the JPL fabric was printed "in one piece"; some search
  summaries do. Don't repeat that claim without another source.
- The Seabreeze swivel article is a fishing-retailer magazine piece. Its friction claims are
  practice, not test data.
- The orthotic lock descriptions come from a patent and student slides (prosthetics
  references). Use them only to describe hinge-lock ideas in general terms.
- The Tente and Fallshaw central-locking pages were blocked (404 or 403); the Wikipedia and
  Colson sources were used instead.
