# New family: hydraulics, pneumatics & vacuum (suggestions for the owner to approve)

> **Outcome (2026-09-30):** the owner added the new family with the key
> `hydraulics, pneumatics & vacuum`, all 24 suggested types (items 300-323 in `outline.yaml`,
> baselines first), the three moves (283, 288 and 289 now in this family), the suggested notes for
> *Check valve* and *Soft pneumatic bending actuator*, and the new family in `other_families` of the
> 12 researched entries listed in section 3(b). The `job` field was left unchanged (see
> `review-notes.md`). Research agents: the sources below were opened by the search agent and are a
> good starting point, but open each page yourself before citing it.

Date: 2026-09-29. Checked against `research/connection-types/outline.yaml` (299 items, 25 families),
`outline-notes.md`, `gap-search-2026-09-29.md` and the finished result files in
`research/connection-types/results/` (searched for venturi, syringe, solenoid valve, cylinder,
peristaltic, Tesla valve, vacuum table and similar, so nothing below repeats an existing entry).
No repository file was edited.

## How the list was built
- **Indexes scanned:** Wikipedia categories *Fluid power*, *Hydraulics*, *Pneumatics*, *Valves*,
  *Plumbing valves*, *Safety valves*, *Air valves*, *Pumps*, *Vacuum pumps*, *Liquid-piston pumps*,
  *Actuators*, *Hydraulic actuators*, *Hydraulic machinery*, *Compressed air power*, *Nozzles*,
  *Hydraulic tools*, *Pneumatic tools* (category pages and about 45 articles opened).
- **Nguyen Duc Thang**, *2700 Animated Mechanical Mechanisms* (Stanford course-site copies of his
  free PDFs, as used in run 2): part 3 section 24 "Hydraulic and pneumatic mechanisms" (pp. 165-170:
  swinging and rotary cylinders, fixed-piston cylinder, floating and three-position cylinders,
  telescopic single- and double-acting cylinders, self-sealing pipe connection, rotary fluid
  connectors, tank float valve, liquid dispensers) and part 4 section 30.1 "Pumps" (pp. 94-101:
  eccentric, vane, flexible-impeller, gear, gerotor, scroll, piston and wobble-plate pumps).
  The YouTube links in his PDFs were not opened.
- **Maker and robotics sources:** Exploratorium, Hackaday, Make:, FRC Zero (robotics team guide),
  the Printables GraphQL API (`searchPrints2`, `print(id)`) to confirm printable versions exist.
  Printables pages were **not** opened: models are given as ID and title, marked
  "(Printables API; page not opened)".
- **Supplier and teaching explainers:** Tameson (valves), LibreTexts NWTC fluid power course
  (CC BY 4.0), The Instrument Guru, OFERA (bell siphon).
- **Safety:** UK HSE hydraulic injection bulletin and HSE guide HSG39 *Compressed air safety*
  (free PDF, read in full text).
- Could not be opened (403, bot check or 503), so not cited: Soft Robotics Toolkit, Hackster,
  uswaterrockets.com, aircommandrockets.com, Harvard Whitesides group PDF, MDPI, Stanford Report.

## 1. Family label and key

- **Label (flow chart):** *Moves, holds or lets go using air or liquid pressure, or suction*
- **Suggested key:** `hydraulics, pneumatics & vacuum`. Reason: a large share of the maker-side
  types work by suction (venturi generator, vacuum muscle, vacuum table, and the existing vacuum
  gripper, jamming gripper and suction cup), and beginners don't think of suction as
  "pneumatics". The style matches keys such as `clamping, magnetic & friction connections`.
  `hydraulics & pneumatics` also works if you prefer it short. The proper umbrella term is
  *fluid power* (Wikipedia: "the use of fluids under pressure to generate, control, and transmit
  power"), but it's less plain.

## 2. Suggested new types, ranked

Order: the two baseline ideas first, then tier 1 (unusual, printable or robotics) ranked by
usefulness to a hobbyist maker, then tier 2 ranked the same way. "Safety" is flagged where it
is a real issue. Where a source page shows an animation or diagram, its Wikimedia file name is
given as seen on that page (the Commons file pages themselves were not opened).

### Baseline

#### 1. Syringe hydraulics (hydraulic lever, Pascal's principle; master and slave cylinders)
- **Description:** Two syringes joined by a water-filled tube, so pushing one plunger pushes the
  other; a small syringe driving a big one trades distance for force, as in school hydraulic arms,
  car jacks and bike brakes.
- **Nearest items and why distinct:** *Bowden cable* (102) carries a push or pull through a
  sleeve but can't change the force. *Whippletree* and *Bell crank* change force with bars. Nothing
  in the outline covers hydraulics at all; this is the family's starting idea (pressure is the
  same everywhere in the liquid, so force scales with piston area).
- **Tier:** baseline. **Other families:** gear trains, gearboxes & transmissions (beside Bowden cable).
- **Notes to cover:** water vs air (air is springy, so air syringes feel spongy and bubbles must be
  removed); hydraulic jack and press (Wikipedia: "the hydraulic equivalent of a mechanical lever");
  car and bike brake master and slave cylinders; Disney Research's rolling-diaphragm "hydrostatic
  transmission" for low-friction robot arms; Luer-lock syringe tips (already a note in *Taper fit*).
- **Safety:** low at syringe scale (it's a school activity), but see item 2 once pressures rise.
- **Sources:**
  - https://www.exploratorium.edu/snacks/hydraulic-arm (photos; "Since the water is confined and incompressible, Pascal's principle comes into play"; CC BY-NC-SA 4.0)
  - https://en.wikipedia.org/wiki/Pascal%27s_law (diagram File:Working_principle_of_a_hydraulic_jack.svg); also https://en.wikipedia.org/wiki/Hydraulic_press and https://phys.org/news/2014-10-hybrid-fluid-transmission-enabling-swift.html (rolling-diaphragm cylinder pairs "much like the master cylinder and slave cylinder of the brakes on a car")
  - Printables models 1037944 "Hidraulic shovel with sringe" and 632421 "Control panel for hydraulic tools with syringes" (Printables API; pages not opened)

#### 2. Air or hydraulic cylinder (pneumatic cylinder, hydraulic ram; single- and double-acting)
- **Description:** A piston in a tube that pushes a rod out when air or oil is let in behind it;
  a single-acting cylinder returns by a spring or gravity, a double-acting one is driven both ways.
- **Nearest items and why distinct:** *Gas spring* (237) is a sealed cylinder that always pushes;
  *Dampers* (214) only resist motion; *Lead screw* (17) and *Solenoid latch* (105) are electric
  linear movers. There is no powered fluid cylinder in the outline.
- **Tier:** baseline. **Other families:** sliding, telescoping & linear motion; powered & active connectors.
- **Notes to cover:** telescopic, rodless, cable, through-rod and cushioned cylinders (Wikipedia);
  the air gripper (a cylinder driving jaws); ways to feed air to a moving cylinder (Thang: a
  swinging cylinder fed through its pivot, a fixed piston fed through a hollow rod, a
  three-position cylinder); printed cylinders (PVC tube, printed end caps and piston, steel rod and
  O-rings, Hackaday); pneumatic animatronics (Wikipedia: the Disney Tiki Room puppets use air so
  no fluid drips on visitors).
- **Safety: yes.** Crush and pinch points. A stopped air cylinder can still move when a pipe is
  undone, because trapped air expands (HSE HSG39, para. 139). Hydraulic oil leaks can inject
  fluid under the skin: HSE says serious cases occurred above 100 bar, and "anecdotal evidence
  suggests hydraulic injection injury may occur at pressures as low as 7 bar".
- **Sources:**
  - https://en.wikipedia.org/wiki/Pneumatic_cylinder (animations File:Einfachwirkender_Zylinder_funktionsprinziep.gif and File:Doppelwirkender_Zylinder_Funktionsprinziep.gif)
  - https://hackaday.com/2023/12/23/diy-pneumatic-actuator-does-great-in-action/ (printed double-acting cylinder, 10,000-cycle test)
  - https://cs448m.github.io/lectures/machines/doc/3.pdf (Thang part 3, pp. 165-166)
  - Safety: https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm and https://www.hse.gov.uk/pubns/priced/hsg39.pdf

### Tier 1: unusual, printable or robotics (ranked)

#### 3. Switching valve (directional control valve, solenoid valve: 2/2, 3/2, 5/2, 5/3)
- **Description:** A valve that sends air or liquid to one port or another when switched by an
  electric coil (solenoid), a hand lever, a foot pedal or air pressure; a 3/2 valve drives a
  single-acting cylinder and a 5/2 valve a double-acting one.
- **Nearest items and why distinct:** *Check valve* (289) is opened by the flow itself; the
  pinch valve in *Iris valve* (275) only squeezes a soft tube shut; *Solenoid latch* (105) moves a
  bolt, not a flow. This is how every powered cylinder, soft finger or vacuum cup is switched.
- **Tier:** 1 (robotics). **Other families:** powered & active connectors.
- **Notes to cover:** normally open vs normally closed; direct-acting vs pilot-operated (Wikipedia:
  pilot-operated valves "will not work without a sufficient pressure differential", a common trap
  with cheap water solenoid valves); single solenoid with spring return vs double solenoid that
  stays put (FRC Zero); 5/3 valves that stop a cylinder mid-stroke (Tameson); spool, poppet and
  rotary valves; valve manifolds; printed and servo-driven valves.
- **Safety:** a valve that snaps shut on flowing water causes water hammer (Wikipedia: "commonly
  occurs when a valve closes suddenly"); trapped pressure (see item 2).
- **Sources:**
  - https://tameson.com/pages/directional-control-valve-pneumatic-cylinder (diagrams of 3/2, 5/2 and 5/3 valves with cylinders)
  - https://en.wikipedia.org/wiki/Solenoid_valve (diagram File:Solenoid_Valve.svg)
  - also https://www.frczero.org/pneumatics/pneumatic-control/ (single vs double solenoids in robots). Printables models 245125 "Pneumatic-mechanical 4/2-way valve" and 154217 "RC servo solenoid valve" (Printables API; pages not opened)

#### 4. Peristaltic pump (tube pump, roller pump)
- **Description:** Rollers on a turning rotor squeeze a soft tube against a curved housing and
  push the liquid along it, so the liquid only ever touches the tube and each turn moves a set
  amount, which makes it good for dosing.
- **Nearest items and why distinct:** the pinch valve (in *Iris valve*, 275) squeezes a tube only
  to shut it; the *Iris valve* results already mention peristaltic pumps only as a contrast.
  Unlike other pumps it has no valves, and the tube is the only wetted part.
- **Tier:** 1 (printable; plant feeders, drink robots, lab dosing).
- **Notes to cover:** linear peristaltic pumps; stepping part-turns for small doses (Wikipedia);
  tube wear changes the flow rate and tubes go flat when left idle (Hackaday commenters).
- **Safety:** low (pinch point at the rollers).
- **Sources:**
  - https://en.wikipedia.org/wiki/Peristaltic_pump (animation File:Peristaltic_pump.gif)
  - https://hackaday.com/2018/10/27/the-bolt-on-peristaltic-pump/ (printed rotor with ball bearings on a NEMA-14 stepper)
  - Printables model 1556845 "V2 -- Nema 17 Peristaltic Pump / Water Pump / measuring Pump" (about 1,470 likes; Printables API; page not opened)

#### 5. Venturi vacuum generator (vacuum ejector, aspirator, jet pump)
- **Description:** A T-shaped nozzle where a fast jet of compressed air or tap water drags air in
  through the side port, making suction with no moving parts.
- **Nearest items and why distinct:** *Vacuum (suction) gripper* (109) names a "venturi vacuum
  gripper" only as an alias and is about the cup; *Bernoulli gripper* (277) blows air to hold a
  part without contact. The generator is its own printable component, also used for fume
  extraction and lab filtering, and it feeds jamming grippers and vacuum muscles too.
- **Tier:** 1 (printable, robotics). **Other families:** powered & active connectors.
- **Notes to cover:** water-tap aspirator ("filter pump"); airlift pump (bubbles of compressed air
  lift water, as in aquarium filters, another no-moving-parts pump, https://en.wikipedia.org/wiki/Airlift_pump).
  Maker figures [uncertain, model descriptions only]: a printed venturi "works with the pressure of
  2-6 bars" and makes "up to 300mBars of underpressure" (Printables 128131); a printed venturi
  gripper lifted 11.4 g at 6 bar (Printables 223266).
- **Safety:** low (noise; uses a lot of compressed air).
- **Sources:**
  - https://en.wikipedia.org/wiki/Vacuum_ejector (diagram File:Ejector_or_Injector.svg; "due to Bernoulli's principle results in it having low pressure, thus generating a vacuum")
  - https://hackaday.com/2019/02/08/a-crash-course-in-3d-printed-venturi-pumps/ (printed venturi used to pull fumes from a PCB etching station)
  - Printables models 223266 "Compressed Air Vaccum Gripper (Prototype)" and 128131 "Venturi nozzle / Vacuum generator / Atomizer" (Printables API; pages not opened)

#### 6. Bellows and inflatable actuators (soft bellows actuator, air bag, air spring)
- **Description:** A folded or balloon-like chamber that gets longer or lifts when pumped full of
  air (or shorter when the air is sucked out), giving a straight push with no sliding seals; it
  can be printed in TPU.
- **Nearest items and why distinct:** *Bellows boot* (290) is the same shape used passively as a
  dust cover; *Soft pneumatic bending actuator* (283) curls; *Pneumatic artificial muscle* (288)
  shortens because of its braid; the *cylinder* (item 2) has a sliding piston and seals.
- **Tier:** 1 (printable, soft robotics). **Other families:** compliant mechanisms & flexures;
  powered & active connectors.
- **Notes to cover:** vehicle air springs (air suspension bellows); lifting bags; vacuum-driven
  bellows; Kresling (twisting origami) bellows; the everting "vine robot", a plastic tube folded
  inside itself that grows from its tip when pumped with air (robohub); printing TPU bellows
  between peel-away PLA layers (Hackaday).
- **Safety:** moderate: an over-inflated bag or printed bellows bursts, so feed it through a
  regulator and relief valve (items 13-14).
- **Sources:**
  - https://www.nature.com/articles/s41598-024-79084-w (open-access paper on a 3D-printed soft bellows actuator, with figures of two- and three-bellows grippers, driven by negative pressure in its simulations)
  - https://hackaday.com/2025/05/08/3d-printed-tpu-bellows-with-pla-interface-layers/
  - also https://robohub.org/stanford-researchers-develop-a-new-type-of-soft-growing-robot/ ("a tube of soft material folded inside itself, like an inside-out sock")

#### 7. Air-logic valve (pneumatic logic gate, soft bistable valve, air oscillator)
- **Description:** Valves that are switched by air pressure instead of electricity, which can be
  joined into AND, OR and NOT gates, memories and oscillators so a soft robot walks or grips with
  no electronics at all.
- **Nearest items and why distinct:** the *switching valve* (item 3) is switched electrically or by
  hand; *Bistable compliant mechanism* (23) snaps mechanically; *Check valve* (289) reacts only to
  flow direction. This is the "brain" of electronics-free soft robots, and it is now printable on
  ordinary filament printers.
- **Tier:** 1 (printable, robotics). **Other families:** compliant mechanisms & flexures.
- **Notes to cover:** shuttle valve (an air "OR" valve that passes whichever input has pressure,
  https://en.wikipedia.org/wiki/Shuttle_valve); air-piloted valves; snap-through membrane valves.
- **Safety:** low (low pressures); the printed walker ran on CO2, so see item 12.
- **Sources:**
  - https://www.sciencedaily.com/releases/2024/02/240201121800.htm (University of Freiburg: "two pressurised chambers. A 3D-printed channel runs between these chambers. By compressing the channel ... regulate it like a valve"; printed "using conventional printing material")
  - https://arxiv.org/abs/2110.01743 (3D-printed bistable valve; switching pressure tunable from 15.3 to 65.2 kPa)
  - Printables model 245125 "Pneumatic-mechanical 4/2-way valve" (air-switched valve used in a pneumatic Turing machine; Printables API; page not opened)

#### 8. Tesla valve (valvular conduit, no-moving-parts one-way channel)
- **Description:** A channel with looping side pockets that lets liquid or air through easily one
  way and turns it back on itself the other way, with no moving parts; it only slows backflow, so
  it always leaks a little.
- **Nearest items and why distinct:** *Check valve* (289) actually seals, with a flap, ball or
  duckbill. The *Labyrinth seal* result mentions the Tesla valve only as a related idea. Beginners
  print Tesla valves expecting a true one-way valve, so they need to know the difference.
- **Tier:** 1 (printable), **or fold into the notes of *Check valve* (289)** if you prefer fewer items.
  **Other families:** one-way & ratchet; print-in-place & 3D-printing joints.
- **Safety:** none.
- **Sources:**
  - https://en.wikipedia.org/wiki/Tesla_valve (cross-section File:Tesla_valve_cross-section.png; "a fixed-geometry passive check valve"; Tesla's patent calls it "a slightly leaking valve")
  - https://makezine.com/article/digital-fabrication/3d-printing-workshop/the-tesla-valve-one-way-flow-with-no-moving-parts/ (patent drawing, printed nylon valve)
  - Printables model 158643 "3D Tesla Valve" (about 1,300 downloads; Printables API; page not opened)

#### 9. Vacuum-driven artificial muscle (origami vacuum muscle, FOAM)
- **Description:** A folded skeleton (origami plastic or a spring) sealed inside a thin bag;
  sucking the air out collapses the bag onto the skeleton so it contracts, bends or twists with
  great force.
- **Nearest items and why distinct:** *Pneumatic artificial muscle* (288) uses positive pressure
  and a braid; *Granular jamming gripper* (110) uses vacuum to stiffen, not to move;
  *Origami mechanisms* (178) fold passively.
- **Tier:** 1 (cheap, maker-buildable, soft robotics). **Other families:** compliant mechanisms &
  flexures; powered & active connectors.
- **Safety:** low. Wyss: "powered by a vacuum, a feature that makes them safer than most of the
  other artificial muscles".
- **Sources:**
  - https://wyss.harvard.edu/news/artificial-muscles-give-soft-robots-superpowers/ (video; "constructed within ten minutes using materials that cost less than $1"; lift "up to 1,000 times their own weight")

#### 10. Syringe pump (syringe driver)
- **Description:** A motor turns a screw that pushes a syringe plunger at a slow, exact rate, to
  dispense or draw small, measured amounts of liquid.
- **Nearest items and why distinct:** *Syringe hydraulics* (item 1) moves parts by hand;
  the *peristaltic pump* (item 4) runs continuously and pulses; *Lead screw and nut* (17) is the
  drive inside. Very common open-source lab and 3D-printer hardware.
- **Tier:** 1 (printable). **Other families:** sliding, telescoping & linear motion.
- **Safety:** low. The encyclopedia should say never to use a DIY one on people (a medical syringe
  driver is an infusion device).
- **Sources:**
  - https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0107216 (open-source RepRap-printed syringe pump; stepper motor and lead screw; figures; CC BY)
  - https://en.wikipedia.org/wiki/Syringe_driver (photo)
  - Printables model 162989 "Mini syringe pump from optical drive parts" (Printables API; page not opened)

### Tier 2: other types (ranked)

#### 11. Diaphragm pump and squeeze bulb (membrane pump, micro air pump)
- **Description:** A rubber disc or bulb flexed in and out between two one-way valves, as in
  aquarium air pumps, the small 3.7-6 V air and vacuum pumps used for soft robots and suction cups,
  and hand squeeze bulbs.
- **Nearest items and why distinct:** *Check valve* (289) is the part inside it; the
  *peristaltic pump* has no valves; the actuators (items 6, 9) are what it drives. It is the usual
  air source for small soft robots (the *Vacuum gripper* result lists these micro pumps as parts).
- **Tier:** 2. **Notes to cover:** piston hand pumps (bike pump, a syringe with two check valves;
  Thang part 4 pp. 100-101); bellows pumps.
- **Safety:** low.
- **Sources:**
  - https://en.wikipedia.org/wiki/Diaphragm_pump (animation File:Diaphragm_pump_animated.gif; "A pair of non-return check valves prevent reverse flow")
  - Printables model 1133240 "TPU Check/One-Way Valves- No Moving Parts!- and a Demonstration Keyboard Duster (Hand Pump)" (printed squeeze-bulb pump with printed duckbill valves; Printables API; page not opened)

#### 12. Air tank and hydraulic accumulator (pressure reservoir)
- **Description:** A container that stores air (or oil pushed by trapped gas, a spring or a
  weight) under pressure, so a small pump can drive short, fast bursts of motion, as in robot air
  tanks, water rockets and CO2 cartridges.
- **Nearest items and why distinct:** *Gas spring* (237) keeps its pressure sealed inside a
  strut; the springs family stores energy mechanically. This is the stored-pressure source that
  most compressed-air projects start from.
- **Tier:** 2, but important for safety. **Other families:** springs & energy storage.
- **Notes to cover:** PET-bottle tanks (Printables 498472 "PET & Sigg bottle pneumatic air tank
  adapters for fischertechnik", Printables API; page not opened); water-rocket bottles and their
  launch releases (the uswaterrockets.com release tutorials could not be opened); hose-rupture
  valves ("air fuses", HSG39).
- **Safety: big.** HSG39: "vessels containing compressed air, even at comparatively low pressure,
  can explode violently once their integrity is lost", and a burst or uncoupled hose can "whip"
  and "snake". FRC Zero: tanks "must be rated for higher than 125 PSI"; hazards listed include
  "Tank Shattering". Wikipedia *Water rocket*: launchers use long hoses, gauges and safety valves
  "to avoid over-pressurizing rockets and having them explode". My own advice, not from a source:
  never hold stored pressure in a 3D-printed part.
- **Sources:**
  - https://www.hse.gov.uk/pubns/priced/hsg39.pdf (HSE HSG39 *Compressed air safety*, free; landing page https://www.hse.gov.uk/pubns/books/hsg39.htm)
  - https://en.wikipedia.org/wiki/Hydraulic_accumulator (diagram File:Hydraulic_accumulator.svg)
  - also https://www.frczero.org/pneumatics/pneumatic-components/, https://www.frczero.org/pneumatics/pneumatic-safety/ and https://en.wikipedia.org/wiki/Water_rocket (animation File:Water_rocket.gif)

#### 13. Pressure regulator (pressure-reducing valve)
- **Description:** A spring-and-diaphragm valve that turns a high supply pressure (from a tank or
  compressor) down to a steady working pressure that you set, and holds it there as air is used.
- **Nearest items and why distinct:** the *relief valve* (item 14) only opens in an emergency;
  the *speed-control valve* (item 15) sets speed, not pressure. Beginners mix the two up, but
  every robot air system has both (FRC Zero lists a regulator and a pressure-release valve).
- **Tier:** 2.
- **Safety:** protects soft actuators and printed parts from full tank pressure.
- **Sources:**
  - https://en.wikipedia.org/wiki/Pressure_regulator (schematics File:Pressure_regulators_schematic.png and File:Single-stage-regulator.svg; "a normally-open valve and is installed upstream of pressure-sensitive equipment")
  - https://www.frczero.org/pneumatics/pneumatic-components/

#### 14. Pressure relief valve (safety valve, pop-off valve)
- **Description:** A spring-held valve that pops open and lets pressure out when it goes above a
  set value, so tanks, pumps and soft actuators can't burst.
- **Nearest items and why distinct:** *Check valve* (289) opens at a small "cracking pressure" to
  let flow one way (https://en.wikipedia.org/wiki/Check_valve); the regulator (item 13) works all the time. It is the fluid version of a
  torque limiter.
- **Tier:** 2 (a safety device). **Other families:** torque limiting & slip.
- **Notes to cover:** rupture (burst) disc, a one-use membrane
  (https://en.wikipedia.org/wiki/Rupture_disc); vacuum relief valves that stop a cyclone
  dust-collector bin being crushed (popular prints).
- **Safety: yes:** never block, remove or screw down a relief valve.
- **Sources:**
  - https://en.wikipedia.org/wiki/Relief_valve (diagram File:Relief_Valve.png); also https://en.wikipedia.org/wiki/Safety_valve
  - Printables models 456366 "Pressure Relief Valve (Stronger)" and 213603 "Pressure Relief Valve for Cyclone Dust Extractor (Parametric)" (Printables API; pages not opened)

#### 15. Speed-control valve (flow control valve, needle valve)
- **Description:** An adjustable narrow gap (a tapered needle in a seat) that limits flow,
  usually built together with a one-way bypass, so a cylinder can be set to move slowly one way
  and freely the other.
- **Nearest items and why distinct:** *Dampers* (214) are sealed units that slow a movement the
  same way (their result mentions needle-valve adjusters on air dashpots); *Check valve* is only
  one-way; the *switching valve* is only on or off. Setting cylinder speed is one of the first
  things beginners ask about.
- **Tier:** 2. **Other families:** brakes, dampers & speed control.
- **Notes to cover:** meter-out (restrict the air leaving the cylinder) is the usual method for air
  cylinders (LibreTexts); the quick exhaust valve dumps the exhaust at the cylinder to make it
  faster (https://theinstrumentguru.com/quick-exhaust-valve/).
- **Safety:** low.
- **Sources:**
  - https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_1:_Fluid_Power_and_Pneumatics_(NWTC)/14:_Flow_Control_Valves/14.02:_Flow_Control_Valves ("essentially a combination of a needle valve and a check valve"; schematics; CC BY 4.0)
  - https://en.wikipedia.org/wiki/Needle_valve (photo)

#### 16. Shut-off valve (tap, ball valve, stopcock)
- **Description:** A hand valve that simply opens or closes a pipe; a ball valve turns a drilled
  ball a quarter turn, and its handle shows at a glance whether it is open.
- **Nearest items and why distinct:** the *switching valve* routes flow between ports; the pinch
  valve in *Iris valve* (275) squeezes a soft tube; the *speed-control valve* sets flow rather than
  shutting it.
- **Tier:** 2 (or a third baseline, for valves). **Other families:** seals & pass-throughs.
- **Notes to cover:** gate, globe and plug valves, garden and aquarium taps.
- **Safety:** closing a tap fast on a long water pipe causes water hammer.
- **Sources:**
  - https://en.wikipedia.org/wiki/Ball_valve (diagrams; "When turned 90 degrees, the solid side of the ball blocks the flow entirely")
  - Printables model 294860 "Simple Water Ball Valve, Hose and Gardena Fittings (print in place)" (low-pressure, prints assembled; Printables API; page not opened)

#### 17. Vacuum hold-down table (vacuum table, vacuum workholding)
- **Description:** A flat plate with holes or grooves over a sealed chamber that a vacuum pump
  empties, so air pressure pins sheets flat for CNC milling, laser cutting or PCB making without
  clamps or tape.
- **Nearest items and why distinct:** *Suction cup* (216) and *Vacuum gripper* (109) hold with
  small cups; the gripper's result names "vacuum clamping" only as a related type. *Toggle clamp*
  and *Double-sided foam tape* hold by force or glue.
- **Tier:** 2. **Other families:** clamping, magnetic & friction connections.
- **Safety:** low.
- **Sources:**
  - https://en.wikipedia.org/wiki/Vacuum_table (photo)
  - https://hackaday.com/2019/01/28/diy-vacuum-table-enhances-pcb-milling/ ("the board is pulled completely flat and held secure without any need for external fasteners or adhesives")

#### 18. Gear pump (incl. gerotor)
- **Description:** Two meshing gears in a close-fitting case carry liquid round from the inlet to
  the outlet; it is the standard pump in small hydraulics, and many can also run backwards as a
  hydraulic motor.
- **Nearest items and why distinct:** *Spur gear pair* (267) passes rotation, not fluid; the
  *peristaltic* and *diaphragm* pumps suit thin liquids and air. Gear pumps are the popular printed
  pump (drill-driven).
- **Tier:** 2 (printable). **Other families:** gear trains, gearboxes & transmissions.
- **Notes to cover:** internal (crescent) gear pump, gerotor (trochoid), vane, lobe and
  flexible-impeller pumps (Thang part 4 pp. 94-99).
- **Safety:** low (priming and leaks).
- **Sources:**
  - https://en.wikipedia.org/wiki/Gear_pump (animations File:Gear_pump_animation.gif and File:Internal_gear_pump.gif)
  - https://cs448m.github.io/lectures/machines/doc/4.pdf (Thang part 4, p. 99: trochoid, external, three-gear and internal gear pumps)
  - Printables model 277351 "Drill gear pump" (about 1,140 likes; Printables API; page not opened)

#### 19. Rotary air actuator (vane or rack-and-pinion rotary actuator)
- **Description:** An air- or oil-powered unit that turns a shaft back and forth through a set
  angle, either with a vane swinging in a round chamber or with pistons driving a rack and pinion.
- **Nearest items and why distinct:** *Rack and pinion* (88) is the mechanism inside one type;
  the *cylinder* (item 2) gives straight motion; *Servo horn and spline hub* (82) is the electric
  equivalent. Used for quarter-turn valves, animatronic heads and grippers.
- **Tier:** 2. **Other families:** powered & active connectors; motion conversion.
- **Notes to cover:** printed pneumatic stepper motors (Printables 218779 "M-45 multipurpose
  pneumatic stepper motor", Printables API; page not opened); vacuum-powered vane actuators
  (Wikipedia).
- **Safety:** pinch points.
- **Sources:**
  - https://en.wikipedia.org/wiki/Rotary_actuator (diagram File:Verin_rotatif_principe.svg; "a linear piston and cylinder mechanism is geared to produce rotation ... and those where a rotating asymmetrical vane swings")
  - https://en.wikipedia.org/wiki/Pneumatic_actuator (photo File:Pneumatic_Rack_and_Pinion_Actuators.JPG)

#### 20. Float valve (ballcock)
- **Description:** A float on a lever that closes the water inlet as the level rises, keeping a
  tank topped up without overflowing, as in toilet cisterns, animal drinkers and plant reservoirs.
- **Nearest items and why distinct:** *Check valve* reacts to flow direction; a float switch
  (https://en.wikipedia.org/wiki/Float_switch) is electrical. It's a clever passive level control
  (the water level moves the lever that shuts the valve).
- **Tier:** 2.
- **Safety:** low.
- **Sources:**
  - https://en.wikipedia.org/wiki/Ballcock (diagrams File:Portsmouth-Valve-Closed.svg and File:Portsmouth-Valve-Open.svg)
  - https://cs448m.github.io/lectures/machines/doc/3.pdf (Thang part 3, p. 168, "Water tank automatic valve": the arm angle sets the highest water level)

#### 21. Hydraulic ram pump (water-hammer pump)
- **Description:** A pump with no motor: water rushing down a pipe slams a valve shut, and the
  pressure surge (water hammer) pushes part of the water up higher than where it came from.
- **Nearest items and why distinct:** it is built from two self-acting valves (see *Check valve*),
  but it is a distinct unit that turns flowing water into lift. A classic off-grid maker build,
  now fully printable.
- **Tier:** 2 (printable).
- **Safety: yes:** water hammer pressure spikes can burst pipes and fittings
  (https://en.wikipedia.org/wiki/Hydraulic_shock: "Water hammers have caused accidents and
  fatalities").
- **Sources:**
  - https://en.wikipedia.org/wiki/Hydraulic_ram (animation File:Hydraulic_Ram.gif; "uses the water hammer effect to develop pressure")
  - Printables model 289108 "Hydraulic Ram Water Pump - WORKING" (PLA with TPU seals and valves; Printables API; page not opened)

#### 22. Air bearing and air caster (air-cushion bearing)
- **Description:** A pad that floats on a thin film of air blown out through small holes, so a
  part slides with almost no friction, as on an air-hockey table or when moving heavy machines on
  air casters.
- **Nearest items and why distinct:** *Bernoulli gripper* (277) uses airflow to hold a part near
  a pad; *Linear guides* (265) and *Plain pivot and rolling bearing* (264) touch and rub.
- **Tier:** 2. **Other families:** sliding, telescoping & linear motion; hinges & pivots.
- **Safety:** low.
- **Sources:**
  - https://en.wikipedia.org/wiki/Air_bearing ("3-D printers are now used to make air-bearing–based attitude simulators for CubeSat satellites") and https://en.wikipedia.org/wiki/Air_caster (animation File:Aircaster.gif)
  - https://hackaday.com/2024/10/20/diy-air-bearings-no-machining-required/ (printed jigs, epoxy on float glass, plaster of Paris as the flow restrictor)

#### 23. Centrifugal pump (impeller pump)
- **Description:** A spinning impeller flings water outwards into a spiral casing, giving lots of
  flow at low pressure; it is the usual fountain, aquarium and submersible pump, but it has to be
  full of water (primed) to start.
- **Nearest items and why distinct:** the gear, diaphragm and peristaltic pumps are
  positive-displacement pumps that push a fixed amount each turn or stroke (Wikipedia, *Gear pump*),
  and the printed peristaltic model describes itself as self-priming; a centrifugal pump instead
  trades pressure for flow and must sit below the water or be primed. Beginners buy this type most.
- **Tier:** 2, **or fold into the notes of the diaphragm pump (item 11)** as the comparison.
- **Safety:** low.
- **Sources:**
  - https://en.wikipedia.org/wiki/Centrifugal_pump ("All centrifugal pumps require liquid in the liquid casing to prime")
  - Printables model 444761 "Centrifugal impeller style water pump- drill powered" (Printables API; page not opened)

#### 24. Automatic siphon (bell siphon)
- **Description:** A bell-shaped cap over a standpipe that starts siphoning when the water reaches
  the top and stops when air gets in at the bottom, so a grow bed or tank floods and drains by
  itself.
- **Nearest items and why distinct:** the *float valve* fills; this empties, with no moving parts.
  Popular printed part in aquaponics.
- **Tier:** 2, **borderline**: it moves the water rather than a part. Drop it if the family should
  stay about moving, holding or releasing parts.
- **Safety:** none.
- **Sources:**
  - https://en.wikipedia.org/wiki/Siphon (section on automatic, intermittent siphons)
  - https://ofera.at/en-us/blogs/ofera-blog/wie-funktioniert-ein-aquaponik-bell-siphon (sectional diagram; vendor page). Printables model 507051 "Bell syphon for aquaponics" (Printables API; page not opened)

### Suggested notes (fold into existing items)
- ***Check valve* (289):** tyre valves: the Schrader valve's core "is a poppet valve assisted by a
  spring" that a pin opens, and the Presta valve is held shut by air pressure and a small nut
  (https://en.wikipedia.org/wiki/Schrader_valve, https://en.wikipedia.org/wiki/Presta_valve).
  These are how makers fill bottles and tanks. Reed (flap) valves
  (https://en.wikipedia.org/wiki/Reed_valve). One-piece printed TPU duckbill and cross-slit valves
  (Printables 1133240, Printables API; page not opened). The Tesla valve too, if item 8 isn't added.
- ***Soft pneumatic bending actuator* (283):** fibre-reinforced soft actuators (FREEs), where
  thread wound round the rubber sets whether it bends, twists or extends
  (https://arxiv.org/abs/1912.07380, a thesis on FREEs as soft pneumatic actuators for manipulators;
  the fibre-layout detail is [uncertain] there, as the Soft Robotics Toolkit page was blocked).
  Printed soft grippers: Printables 386241 "Soft Robotic Gripper With Exoskeleton" and 232284
  "PneuNet actuator molds" (Printables API; pages not opened).
- The pinch valve (already in *Iris valve*, 275), rotary fluid unions (already in *Slip ring and
  rotary union*, 135) and self-sealing couplings (already in *Quick couplers*, 166) need no
  change. Thang part 3 pp. 166-168 shows all three if those entries are redone.

## 3. Existing items

### (a) Move into the new family (unresearched items only)
| Item | Move? | Also list in `other_families` |
|------|-------|-------------------------------|
| 283 Soft pneumatic bending actuator | **Yes** | powered & active connectors; compliant mechanisms & flexures |
| 288 Pneumatic artificial muscle | **Yes** | powered & active connectors |
| 289 Check valve | **Yes** (it is the family's one-way valve) | seals & pass-throughs; one-way & ratchet |
| 277 Bernoulli gripper | **No, keep** beside *Vacuum gripper* (109) and *Granular jamming gripper* (110), which stay in powered & active connectors, so the three air grippers can be compared in one place | add the new family |
| 290 Bellows boot | No: it's a passive dust cover | none needed (item 6 is the powered relative) |
| 295 Radial lip seal | No: it's a shaft seal | add the new family (it seals pumps and hydraulic motors) |

### (b) Keep where they are, but add the new family to `other_families`
- 109 Vacuum (suction) gripper; 110 Granular jamming gripper; 216 Suction cup (held by air pressure)
- 275 Iris valve (also covers the pinch valve)
- 166 Quick couplers for tubes and hoses; 133 Hose barb; 210 Compression fitting
- 130 O-ring seal (the main seal in cylinders and valves)
- 135 Slip ring and rotary union (the rotary union carries fluid across a turning joint)
- 237 Gas spring; 214 Dampers (oil and air dashpots)
- 217 Taper fit (its notes cover Luer-lock syringe fittings, used in syringe hydraulics)
- **Don't list:** 134 Cable gland (it seals cables, not fluid); 290 Bellows boot (see above).
  170 Band flange clamp (tri-clamp) is optional: it joins pipes but isn't about pressure.

## 4. Near-misses considered and rejected
- **Air compressor, hydraulic power pack, vacuum pump as a machine:** whole machines (the small
  diaphragm pump in item 11 covers what makers buy).
- **Air motor and hydraulic motor (vane motor, the popular printed "compressed air engines"):** a
  continuous-rotation power source like an electric motor, and the outline has no motor entries;
  printed air engines are whole engines. Their swinging-cylinder port trick is a note in item 2.
- **Scroll compressor:** a machine; the scroll idea is already *Scroll mechanism* (284).
- **Hydraulic jack, hydraulic press, bottle jack:** whole tools; covered in item 1's notes.
- **Air cannons, T-shirt and spud guns, quick-dump piston valves:** projectile launchers with a
  serious safety risk (FRC Zero: "Never use compressed air to propel a projectile"); the water
  rocket stays as a note in item 12.
- **Pneumatic tube (capsule) transport:** a whole system.
- **Proportional and servo valves (electrohydraulic servo valve):** industrial and costly.
- **Hydraulic intensifier (pressure booster):** niche industrial.
- **Hose-rupture valve, air fuse, hydraulic fuse:** industrial safety parts; mentioned in item 12's safety notes.
- **Filter, lubricator and silencer (air preparation units):** accessories, not mechanisms.
- **Pressure gauge, pressure switch, pressure sensor, sip-and-puff switch:** instruments and sensors.
- **Hose clamps, banjo fittings, JIC and BSP thread standards:** standard hardware or plumbing
  catalogues (hose clamps were already declined in `outline-notes.md`).
- **Quick exhaust valve and shuttle valve as their own items:** small variants; notes in items 15 and 7.
- **Air gripper (pneumatic parallel gripper):** a cylinder driving jaws; note in item 2.
- **Rolling-diaphragm cylinder:** niche; note in item 1 (Disney hydrostatic transmission).
- **Pneumatic stepper motor:** research niche (MRI-safe robots); note in item 19.
- **Everting "vine robot":** closer to a whole robot; note in item 6.
- **Fibre-reinforced soft actuator:** a variant of item 283; note there.
- **Pouch motor (heat-sealed inflatable film actuator):** no page opened this session; could be added to item 6's notes later.
- **Layer jamming:** still no page opened; would go in *Granular jamming gripper* notes.
- **Inflatable (pneumatic) seal:** niche industrial.
- **Airlift pump as its own item:** note in item 5.
- **Fluidic oscillator and sweeping-jet nozzle; Heron's fountain:** niche or demonstration only.
- **Fluid coupling, viscous coupling, MR damper:** rejected in the last gap search as niche; still true.
- **Hovercraft skirt:** a whole vehicle; the air caster in item 22 covers the idea.
- **Vacuum forming and vacuum bagging:** making processes, not connections.
- **Tesla turbine and other water turbines:** machines.
- **LEGO and fischertechnik pneumatics:** brand kits; aliases or examples only (items 1-3).

## 5. Other notes for the owner
- **Finder fields:** the `job` list has no plain job for this family. Consider adding "move or hold
  using air or liquid pressure, or suction". `power` already fits ("powered (needs electricity or
  another energy source)": compressed air counts), and `holding_principle` already has
  "suction or air pressure".
- **Family-wide safety:** worth a short safety box on the family page: stored air can burst tanks
  and whip hoses; never point air at skin (FRC Zero: "Even air at a pressure of 15 psig can cause
  serious injury"; HSG39: at high pressure it "can penetrate the skin"); hydraulic leaks can
  inject oil; trapped air can move a stopped cylinder; valves shutting quickly cause water hammer;
  vacuum is the safest option.
- **Research order:** at 18 items per batch, the 24 suggestions plus the three moved items make
  about 1.5 batches.

## Sources opened this session
Wikipedia (CC BY-SA 4.0): category pages Fluid power, Hydraulics, Pneumatics, Valves, Plumbing
valves, Safety valves, Air valves, Pumps, Vacuum pumps, Liquid-piston pumps, Hydraulic rams,
Hydraulic accumulators, Actuators, Fluid-powered actuators, Hydraulic actuators, Pneumatic
actuators, Hydraulic machinery, Compressed air power, Nozzles, Hydraulic tools, Pneumatic tools,
Soft robotics (https://en.wikipedia.org/wiki/Category:Fluid_power and siblings); articles
Fluid_power, Pneumatic_cylinder, Single-_and_double-acting_cylinders, Hydraulic_cylinder,
Hydraulic_press, Pascal%27s_law, Miniature_hydraulics, Solenoid_valve, Four-way_valve,
Needle_valve, Flow_control_valve, Relief_valve, Safety_valve, Pressure_regulator, Rupture_disc,
Hydraulic_accumulator, Peristaltic_pump, Diaphragm_pump, Gear_pump, Centrifugal_pump,
Vacuum_ejector, Injector, Airlift_pump, Tesla_valve, Rotary_actuator, Pneumatic_actuator,
Pneumatic_gripper, Pneumatic_motor, Air_bearing, Air_caster, Hydraulic_ram, Hydraulic_shock,
Ballcock, Check_valve, Float_switch, Schrader_valve, Presta_valve, Reed_valve, Shuttle_valve, Pilot_valve,
Ball_valve, Siphon, Vacuum_table, Water_rocket, Syringe_driver, Hydraulic_manifold,
Hydraulic_intensifier, Air_spring (redirects to Air suspension), Pneudraulics
(all at https://en.wikipedia.org/wiki/<Article>).

Other pages:
1. https://cs448m.github.io/lectures/machines/doc/3.pdf and https://cs448m.github.io/lectures/machines/doc/4.pdf (Thang parts 3 and 4; parts 1 and 2 were also scanned)
2. https://www.exploratorium.edu/snacks/hydraulic-arm
3. https://hackaday.com/2023/12/23/diy-pneumatic-actuator-does-great-in-action/
4. https://hackaday.com/2018/10/27/the-bolt-on-peristaltic-pump/
5. https://hackaday.com/2019/02/08/a-crash-course-in-3d-printed-venturi-pumps/
6. https://hackaday.com/2025/05/08/3d-printed-tpu-bellows-with-pla-interface-layers/
7. https://hackaday.com/2024/10/20/diy-air-bearings-no-machining-required/
8. https://hackaday.com/2019/01/28/diy-vacuum-table-enhances-pcb-milling/
9. https://makezine.com/article/digital-fabrication/3d-printing-workshop/the-tesla-valve-one-way-flow-with-no-moving-parts/
10. https://tameson.com/pages/directional-control-valve-pneumatic-cylinder
11. https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Fluids_1:_Fluid_Power_and_Pneumatics_(NWTC)/14:_Flow_Control_Valves/14.02:_Flow_Control_Valves
12. https://theinstrumentguru.com/quick-exhaust-valve/
13. https://ofera.at/en-us/blogs/ofera-blog/wie-funktioniert-ein-aquaponik-bell-siphon
14. https://www.frczero.org/pneumatics/pneumatic-components/, https://www.frczero.org/pneumatics/pneumatic-safety/, https://www.frczero.org/pneumatics/pneumatic-control/
15. https://www.hse.gov.uk/safetybulletins/hydraulic-injection-injury.htm
16. https://www.hse.gov.uk/pubns/books/hsg39.htm and https://www.hse.gov.uk/pubns/priced/hsg39.pdf
17. https://www.sciencedaily.com/releases/2024/02/240201121800.htm
18. https://arxiv.org/abs/2110.01743 and https://arxiv.org/abs/1912.07380
19. https://wyss.harvard.edu/news/artificial-muscles-give-soft-robots-superpowers/
20. https://www.nature.com/articles/s41598-024-79084-w
21. https://robohub.org/stanford-researchers-develop-a-new-type-of-soft-growing-robot/
22. https://phys.org/news/2014-10-hybrid-fluid-transmission-enabling-swift.html
23. https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0107216
24. https://api.printables.com/graphql/ (model searches and details; no Printables pages opened)
