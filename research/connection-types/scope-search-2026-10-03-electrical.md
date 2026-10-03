<!-- Saved into the repository on 2026-10-03 from the search agent's working notes (R22). -->
# Scope search 2026-10-03: Electrical connections

One of six web searches for R22, the wider scope (see `scope-search-2026-10-03-combined.md` for
the combined list the owner confirmed). The agent's write-up follows unchanged, except this
header. Download folders it mentions were working files and were not kept. Suggestion numbers
below are the agent's own; they map to outline items like this:

| Suggestion | Item | Outline name |
|---|---|---|
| 1 | 324 | Soldered wire joint (soldered splice) |
| 2 | 346 | Wire-to-board plug connectors (pin header and crimp housing) |
| 3 | 347 | Crimp terminals (ring, fork and spade terminals, blade quick-disconnect) |
| 4 | 348 | Crimped butt splice (crimp splice connector) |
| 5 | 349 | Spring-clamp wire connector (lever connector, push-in wire connector) |
| 6 | 350 | Screw terminal (terminal block, barrier strip, connector strip) |
| 7 | 351 | Wire-end ferrule (bootlace ferrule, end sleeve) |
| 8 | 352 | High-current battery plug (bullet connector, polarised battery connector) |
| 9 | 353 | Heat-shrink tubing (heat-shrink sleeve, adhesive-lined heat-shrink) |
| 10 | 354 | Solder sleeve (solder-seal splice) |
| 11 | 329 | Battery holder and battery contacts (spring battery contact, coin-cell holder) |
| 12 | 330 | Pogo pin (spring-loaded contact pin) |
| 13 | 331 | Magnetic connector (magnetic pogo connector, magnetic breakaway power connector) |
| 14 | 355 | Standard plug-and-socket connector (USB, barrel jack, audio jack, RJ45) |
| 15 | 356 | Insulation-displacement connector (IDC, ribbon-cable plug, punch-down, T-tap) |
| 16 | 357 | Binding post and banana plug (test-lead connector, crocodile clip) |
| 17 | 358 | Twist-on wire connector (wire nut) |
| 18 | 359 | Conductive thread (sewn circuit, e-textile stitching) |
| 19 | 360 | Conductive tape (copper foil tape, conductive fabric tape) |
| 20 | 361 | Conductive glue, paint and ink (electrically conductive adhesive, silver epoxy) |
| 21 | 362 | Flat flexible cable and latching connector (FFC with ZIF connector) |
| 22 | 363 | Wire wrap (wire-wrapped connection) |

---

# FINISHED: electrical connections scope search (2026-10-03)

Agent group: electrical connections (a new family). No repository file was edited.
Every URL below was opened in this session (curl copies are in `electrical/v2/`). Commons
licences were read from each file page by script; check them again before reusing an image.
Printables links come from the Printables API and are marked "(Printables API; page not opened)".

## Summary
- The outline has no electrical connection types. Grepping all 323 result files found only
  passing mentions (list in section 0), so this is a gap, not duplication.
- Suggested: a new family **`electrical connections`**, with **22 new types**. The baseline
  entry is *Soldered wire joint*.
- The 41 fields work if this family follows a few writing rules. One new **`job` option** is
  needed (an allowed value, not a field). A new `electrical_rating` field is optional; I
  recommend against it (section 5).

## 0. Existing coverage found in results/ (grep of all 323 files)
None of these is an entry for an electrical joint type:
- 286 Genderless connector: Anderson Powerpole (brand) and the 2-pin SAE lead are already its
  electrical examples (15/30/45 A housings, reverse-polarity warning, Commons photo Pp01.jpg).
- 111 Magnet joint: alias "magnetic breakaway connector, e.g. MagSafe (Apple, brand)".
- 116 Keying: polarised and keyed connectors, blanking pins in pin headers, USB-C reversible.
- 134 Cable gland and strain relief: strain relief for wires and solder joints.
- 135 Slip ring and rotary union: spring brushes carry current across a turning joint.
- 141 Hot-melt adhesive: names adhesive-lined (dual-wall) heat-shrink; printed moulds for
  hot-glue strain relief on JST-XH plugs.
- 167 DIN-rail clip: terminal blocks that clip onto the rail.
- 120 Printed leaf spring, 268 Coil spring: battery contact springs as everyday examples
  (120 already warns: don't use a printed spring for a battery contact that stays pressed).
- 209 Burn-wire release: ring terminals and heat-shrink named as parts.
- 236 Wave and disc springs: Belleville washers on busbar joints.
- 54 Self-folding print: heat-shrink tubing as an everyday example.

## 1. Family placement
**New family.** Key: `electrical connections`.
Label: **"Joins wires, or connects them to boards, batteries and devices"**.

Why a new family is better than spreading these over existing families:
- Every entry shares one job, carrying current reliably, and the same choice questions. How
  much current and voltage? Solid or stranded wire, and what size? Permanent, or plug and
  unplug? Which tools? Is it allowed on mains? No existing family asks these.
- If split up, the entries would land in six families: plugs and lever connectors in
  *quick-release & tool-free*; screw terminals and magnetic plugs in *clamping, magnetic &
  friction connections*; conductive glue in *adhesives & bonding*; heat-shrink in *seals &
  pass-throughs*; pogo pins and battery contacts in *springs & energy storage*; conductive
  thread in *cord, strap, webbing & textile hardware*. The finder could then never offer a
  shortlist for "join two wires" (flowchart section 1.7, question 25, which ended "not covered").
- This follows the precedent of *hydraulics, pneumatics & vacuum*, a family made for one
  medium and cross-listed with `other_families`.

## 2. Suggested new types (ranked by usefulness to a hobbyist maker)
Family for all items: `electrical connections` (other families noted where useful).

### 1. Soldered wire joint (soldered splice; incl. Western Union, lap and T-splices)
- **Description:** Two wires, or a wire and a pin or pad, are twisted, hooked or laid
  together, and melted solder flows between them, making a permanent joint that conducts well.
- **Nearest items:** none in the outline (run 1 left soldering out). Metal-to-metal soldering
  and brazing of PARTS belong to the heat-joining agent; this entry covers wire joints only.
- **Tier:** baseline (the family's basic entry). It is the joint every "I can't solder"
  question measures the others against (Hackaday 2023).
- **Notes to cover:** Western Union (lineman's) splice, lap splice, lash splice, rat-tail
  (pigtail) splice, T-splice, solder cups and lugs on connectors, tinning, and covering the
  joint with heat-shrink. Hand-twisted splices are only ways to hold wires before soldering
  or capping. They are not separate entries.
- **Safety flag:** soldering needs "aggressive cleaning, high heat, and possibly toxic
  solders" (Wikipedia, Crimp). Solder makes the wire stiff at the edge of
  the joint, so it breaks there under vibration: add strain relief. "Neither covering the
  splice with tape only nor soldering the splice are permitted for 110 volts or higher by
  most, or all, North American building electrical codes" (Wikipedia, Rat-tail splice).
- **Rules of thumb found:** NASA tests found soldered Western Union splices never broke at
  the splice (Wikipedia, Western Union splice). Cover a splice with tubing that reaches past
  the splice by at least 2x the largest wire's diameter at each end (NASA-STD-8739.4A
  §19.2.6, p.67). Don't put splices where the cable flexes (§7.2.36). Solder joints are "more
  prone to mechanical failure than crimped joints when subjected to vibration and
  compression" (Wikipedia, Electrical connector).
- **Sources:** https://en.wikipedia.org/wiki/Western_Union_splice (Commons
  https://commons.wikimedia.org/wiki/File:Western_Union_splice.jpg, step-by-step drawing,
  public domain); https://nepp.nasa.gov/files/27631/nstd87394a.pdf (NASA-STD-8739.4A,
  ch. 19 "Splicing", pp. 67-77, with figures of each splice);
  https://learn.sparkfun.com/tutorials/working-with-wire/all ("How to Splice Wires"
  section, with photos); https://en.wikipedia.org/wiki/Rat-tail_splice;
  https://en.wikipedia.org/wiki/T-splice

### 2. Wire-to-board plug connectors (pin headers and crimp housings; Dupont-type, JST-type, Molex-type (brands))
- **Description:** Rows of small metal pins on a board, with a plastic plug of crimped
  sockets on the wires that pushes on, often latched and shaped so it only fits one way.
  These are the white and black plugs on servos, sensors, 3D-printer boards and battery
  balance leads.
- **Nearest items:** 116 Keying covers only the "one way only" feature; 286 Genderless
  connector covers only genderless plugs.
- **Tier:** 2 (common, but used in every robot and printer, so research it early).
- **Notes to cover:** pitch (2.54, 2.50 and 2.00 mm look alike but don't mate), male and
  female headers, shrouded box headers, latching versus friction plugs, crimp contacts and
  their own crimp tools, jumper ("Dupont") wires and solderless breadboards, board-to-board
  stacking headers and card-edge connectors, and IC sockets. The term "JST" is often used
  loosely for any small white plug (Wikipedia).
- **Safety flag:** low current only (e.g. JST XH is listed at 3 A, 250 V; Wikipedia JST
  table). Reversed or offset plugs can damage boards.
- **Sources:** https://en.wikipedia.org/wiki/Pin_header (Commons
  https://commons.wikimedia.org/wiki/File:6_Pin_Header.jpg, CC BY-SA 2.0);
  https://en.wikipedia.org/wiki/JST_connector (series table with pitch, current and voltage;
  Commons https://commons.wikimedia.org/wiki/File:Balancer_Buchse_XH.JPG, CC BY 3.0);
  https://learn.sparkfun.com/tutorials/connector-basics/all (terminology: gender, pitch,
  mating cycles, strain relief); https://en.wikipedia.org/wiki/Jump_wire;
  https://en.wikipedia.org/wiki/Breadboard. Printable: Printables 219847 "Connector housing
  Dupont/Jumper 4Pin", https://www.printables.com/model/219847-connector-housing-dupontjumper-4pin
  (Printables API; page not opened)

### 3. Crimp terminals for screws and tabs (ring, fork and spade terminals; blade quick-disconnects)
- **Description:** A metal end squeezed onto a stripped wire with a crimping tool, ending in
  a ring or fork that goes under a screw, or a flat blade or sleeve that pushes onto a tab.
- **Nearest items:** none. 209 Burn-wire release only mentions ring terminals as parts.
- **Tier:** 2.
- **Notes to cover:** insulated and bare types; colour code for wire size (red, blue,
  yellow; DIN 46245, per Wikipedia); open-barrel versus closed-barrel crimps; the second crimp
  that grips the insulation for strain relief; FASTON (brand) or quick-disconnect blades;
  bullet terminals (cross-link to item 8); earth (ground) ring terminals under a toothed
  washer; heavy cable lugs.
- **Safety flag:** a crimp made with the wrong tool or terminal size pulls out (Hackaday
  2023). Loose or poor joints heat up and can start fires (Wikipedia, High resistance
  connection).
- **Sources:** https://en.wikipedia.org/wiki/Electrical_connector (sections "Crimp-on
  connectors", "Ring and spade connectors", "Blade connectors"; Commons
  https://commons.wikimedia.org/wiki/File:Kabelschuh_verschiedene_commons.jpg, ring, spade,
  blade and bullet terminals, CC BY-SA 3.0/GFDL);
  https://commons.wikimedia.org/wiki/File:Kabelschuh_detailfoto_2.jpg (before and after
  crimping, CC BY-SA 3.0);
  https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/;
  https://en.wikipedia.org/wiki/FASTON_terminal

### 4. Crimped butt splice (crimp splice connector)
- **Description:** A short metal tube, usually inside a plastic or heat-shrink sleeve. One
  wire goes in each end and both are squeezed with a crimping tool, joining two wires
  end-to-end with no heat.
- **Nearest items:** none. Unlike item 3 it joins wire to wire, not wire to a screw or tab.
- **Tier:** 2.
- **Notes to cover:** heat-shrink butt splices lined with glue (crimp, then heat to seal);
  parallel (end) splices and closed-end splices; NASA's "crimp ferrule splice"; why a good
  crimp is gas-tight and cold-welded.
- **Safety flag:** wrong tool or wrong size gives pull-outs (Hackaday 2023). A Hackaday
  commenter advises a pull test on every crimp.
- **Sources:** https://en.wikipedia.org/wiki/Crimp_(electrical) (redirects to "Crimp
  (joining)"; covers gas-tight crimps, closed and open barrels);
  https://nepp.nasa.gov/files/27631/nstd87394a.pdf (§19 "Crimped Splices", "Butt Splice",
  Figs 19-28 and 19-29, pp. 74-77);
  https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/;
  https://learn.sparkfun.com/tutorials/working-with-wire/all ("How to Crimp")

### 5. Spring-clamp wire connector (lever connector, push-in connector, spring terminal; Wago (brand), "Lever-Nuts" (brand))
- **Description:** A spring inside a clear plastic body grips each stripped wire. Lift a
  lever, or just push a solid wire in, and the spring sets the clamping force itself, so it
  never needs tightening and can be undone and reused.
- **Nearest items:** item 6 (screw terminal) holds the wire with a screw the user tightens;
  167 DIN-rail clip is only the mounting.
- **Tier:** 2. Very useful to makers: a Printables search finds many printed Wago mounts,
  including ones made for Voron 3D printers' wiring.
- **Notes to cover:** wire-to-wire splicing connectors (lever and push-in types); PCB spring
  terminals (lever or push button); spring speaker terminals; the Fahnestock clip as the
  historic one-piece version; which conductors suit which type (push-in types are for solid
  wire; lever types also take stranded and fine-stranded wire); test ports.
- **Safety flag:** in mains wiring, follow local law (see item 17). WAGO 221 is rated for
  low-voltage installations up to 450/600 V depending on the certification (Wikipedia, WAGO
  221). The AutomationDirect catalogue lists 20 A and 30 A models.
- **Rules of thumb found:** 221 small housing: 0.2-4 mm² (24-12 AWG), strip length 11 mm;
  large housing 0.5-6 mm² (20-10 AWG), strip length 12-14 mm (AutomationDirect catalogue p.2).
  Spring terminals cope better than screw terminals with vibration and with temperature
  cycling (SparkFun).
- **Sources:** https://en.wikipedia.org/wiki/WAGO_221 (design, housing sizes, mechanism
  drawing); https://cdn.automationdirect.com/static/specs/221serieslevernuts.pdf
  (catalogue pages with ratings and wire ranges);
  https://learn.sparkfun.com/tutorials/connector-basics/all ("Spring Terminals" section);
  https://en.wikipedia.org/wiki/Fahnestock_clip. Printable: Printables 354122 "Wago mount",
  https://www.printables.com/model/354122-wago-mount (Printables API; page not opened)

### 6. Screw terminal (terminal block, barrier strip, connector strip or "chocolate block", PCB screw terminal)
- **Description:** A stripped wire is clamped by tightening a screw, either directly under
  the screw head or under a plate. Used on boards, power supplies and connector strips to
  join or land wires so they can be undone later with a screwdriver.
- **Nearest items:** 257 Ordinary screw joint is mechanical only; 167 DIN-rail clip mounts
  the blocks.
- **Tier:** 2.
- **Notes to cover:** clamping-plate versus screw-head types; barrier strips used with
  ring or fork terminals; pluggable two-part terminal blocks (Euroblock); connector-strip
  enclosures (Chocbox (brand)); terminal strips with busbars for sharing power; ferrules
  (item 7).
- **Safety flag:** don't tin wire ends with solder before clamping them. "The soft metal will
  cold flow, resulting in a loose connection and possible fire hazard" (Wikipedia, Screw
  terminal). Screws loosen with vibration. In the UK, screw connector strips are not approved
  for joints that can't be reached for inspection (Wikipedia, Screw terminal). Melted
  terminal blocks are "a common complaint with many DIY 3D printer kits", from thick
  stranded wire jammed into screw terminals (Hackaday 2018).
- **Sources:** https://en.wikipedia.org/wiki/Screw_terminal (Commons
  https://commons.wikimedia.org/wiki/File:Terminal_Blocks_01CJC.png, CC BY-SA 3.0/GFDL;
  https://commons.wikimedia.org/wiki/File:Screw_Terminals._Basic_and_Compression_Types..jpg,
  CC BY-SA 3.0); https://learn.sparkfun.com/tutorials/connector-basics/all ("Screw
  Terminals": a dab of hot glue stops wires working loose);
  https://en.wikipedia.org/wiki/Euroblock; https://en.wikipedia.org/wiki/Chocbox

### 7. Wire-end ferrule (bootlace ferrule, end sleeve)
- **Description:** A thin metal tube, usually with a coloured plastic collar, crimped onto
  the end of a stranded wire so the strands can't splay apart in a screw or spring terminal.
- **Nearest items:** 210 Compression fitting (also called a "ferrule fitting") is a
  plumbing ferrule, not this. Item 6 is the terminal it goes into. It could be folded into
  item 6's notes, but "tin it or ferrule it?" is a frequent beginner question, which argues
  for its own entry.
- **Tier:** 2 (3D printers: board and power-supply terminals).
- **Notes to cover:** colour codes (DIN 46228, though makers' colours differ); twin-wire
  ferrules; square versus hexagonal crimp shapes; ferrules are required for CE-marked
  equipment but rare in the US (Hackaday).
- **Safety flag:** stranded wire that splays in a terminal makes a poor, hot joint
  (Hackaday 2018, after a 3D-printer fire report).
- **Sources:** https://en.wikipedia.org/wiki/Wire_ferrule (redirects to "Electric wire
  ferrule"; Commons https://commons.wikimedia.org/wiki/File:Aderendhuelsen.jpg, public domain
  as shown); https://hackaday.com/2018/04/12/to-ferrule-or-not-to-ferrule/

### 8. High-current battery plug (XT60-type, Deans/T-plug-type, bullet connectors, Tamiya-type, EC-type (brands))
- **Description:** Chunky two-pin plugs with large gold-plated contacts in a shaped,
  polarised housing. They carry tens of amps between a battery, a speed controller and a
  charger in drones, RC models, robots and e-bikes.
- **Nearest items:** 286 Genderless connector already covers Anderson Powerpole and SAE
  leads as genderless examples: cross-link it and list them here in notes.
- **Tier:** 2 (robotics and battery packs; common rather than unusual).
- **Notes to cover:** sizes and ratings depend on the wire as well as the plug; anti-spark
  versions; MC4 solar connectors (sealed and locking) and Anderson SB as larger cousins;
  bullet connectors.
- **Safety flag:** strong. The plug and the wire must both suit the current; Holybro advises
  changing both plug type and wire size for higher currents. Reversed polarity and shorted
  contacts on lithium packs are a fire and burn risk. The T-plug's shape is meant to stop
  reversed connection and the "LiPo flash" burns it causes (Wikipedia, DC connector).
- **Rules of thumb found:** XT60 with 12 AWG wire: 30 A continuous, 60 A for under one
  minute; XT90 with 10 AWG: 45/90 A (Holybro, quoting AMASS ratings).
- **Sources:** https://docs.holybro.com/power-module-and-pdb/power-module/connector-and-wire-rating;
  https://en.wikipedia.org/wiki/DC_connector (sections on Tamiya, Deans T-plug, Powerpole,
  SAE, Anderson SBS, MC4; Commons https://commons.wikimedia.org/wiki/File:T-plug.jpg, CC BY-SA
  3.0); https://en.wikipedia.org/wiki/Tamiya_connector;
  https://en.wikipedia.org/wiki/MC4_connector;
  https://en.wikipedia.org/wiki/Anderson_Powerpole. Printable: Printables 1041347 "XT60
  Holder/Mount" (Printables API; page not opened; slug not fetched, so no URL given)

### 9. Heat-shrink tubing (heat-shrink sleeve; incl. adhesive-lined, dual-wall heat-shrink)
- **Description:** A plastic tube slid over a joint before it is made. Heating it makes it
  shrink tightly around the joint, insulating it and protecting it from rubbing. Glue-lined
  types also seal out water.
- **Nearest items:** 141 Hot-melt adhesive names glue-lined heat-shrink only as a related
  product; 54 Self-folding print uses heat-shrink as an example of shape memory. It is a
  covering, not a joint, but every wire joint above needs a covering, and choosing one is a
  real decision.
- **Tier:** 2. Other family: seals & pass-throughs.
- **Notes to cover:** shrink ratio; materials (polyolefin most common, PVC, silicone,
  fluoropolymers); black for outdoors (UV); end caps; cold-shrink tubing; electrical
  (vinyl) tape; self-amalgamating (self-fusing) silicone tape; hot glue as a quick
  insulator. Heat-shrink with a solder ring inside is item 10.
- **Safety flag:** heat gun burns. PVC tubing burns if touched with an iron (Wikipedia).
- **Sources:** https://en.wikipedia.org/wiki/Heat-shrink_tubing (Commons animation
  https://commons.wikimedia.org/wiki/File:Schrumpfschlauch_animated_modified.gif, CC BY-SA
  2.0 DE); https://en.wikipedia.org/wiki/Cold_shrink_tubing;
  https://en.wikipedia.org/wiki/Self-amalgamating_tape;
  https://en.wikipedia.org/wiki/Electrical_tape

### 10. Solder sleeve (solder-seal connector, solder-seal splice)
- **Description:** A clear heat-shrink tube with a ring of solder in the middle and rings of
  meltable glue at each end. Heating it with a hot-air gun solders, insulates and seals a
  splice in one step, with no soldering iron.
- **Nearest items:** item 1 (needs an iron and skill); item 9 (covering only); item 4
  (crimped, not soldered).
- **Tier:** 2.
- **Notes to cover:** the solder-in-the-middle design "was specified by Daimler-Benz for
  automotive electrical repairs" (Wikipedia, Heat-shrink tubing); NASA uses solder sleeves
  for shield terminations; inspect the joint through the clear tube.
- **Safety flag:** it still is soldering, so the same vibration and mains-code limits as item
  1 apply. Hackaday commenters doubted inspectors would accept them in building wiring.
  Overheating chars the tube before cheap low-melt solder has flowed [uncertain: forum
  opinion only].
- **Sources:** https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  (how it works, US patent date 1988); https://en.wikipedia.org/wiki/Heat-shrink_tubing
  ("Types": solder sleeves with sealant rings);
  https://nepp.nasa.gov/files/27631/nstd87394a.pdf (Fig. 19-3, lap splice with solder sleeve)

### 11. Battery holder and battery contacts (spring and leaf-spring battery contacts, coin-cell holder, battery snap)
- **Description:** A box or clip that holds cells and presses metal contacts (a coiled
  spring at one end and a flat or springy tab at the other) onto the battery ends, so cells
  can be swapped without soldering.
- **Nearest items:** 268 Coil spring and 120 Printed leaf spring mention battery springs
  only as examples; 116 Keying covers reverse-polarity shapes.
- **Tier:** 1 (printable holders with bought springs are a popular 3D-printing project).
- **Notes to cover:** fixed versus flexible contacts; nickel-plated contacts to avoid galvanic
  corrosion; reverse-polarity protection (recessed positive contact, 9 V snap); coin-cell
  holders; zinc-air cells need air holes; vehicle battery posts and clamps. For packs, cells
  are joined by spot-welded nickel strip. That is welding, so cross-link to the heat-joining
  agent's entry.
- **Safety flag:** strong for lithium cells: shorting, crushing or heating them causes fires.
  Spot welding is used "to keep the battery from getting too hot, as might happen if
  conventional soldering were done" (Wikipedia, Spot welding). Printed plastic springs relax
  over time, so use metal contact springs (see item 120's existing note).
- **Sources:** https://en.wikipedia.org/wiki/Battery_holder (design considerations: contacts,
  plating, polarity; Commons https://commons.wikimedia.org/wiki/File:DuracellBatteryBHD-2.jpg,
  CC BY-SA 3.0/GFDL); https://en.wikipedia.org/wiki/Battery_terminal (Commons
  https://commons.wikimedia.org/wiki/File:BatTerminal-SideBar.jpg, public domain as shown);
  https://en.wikipedia.org/wiki/Spot_welding. Printable: Printables 110321 "AA / AAA / C /
  18650 battery holder with integrated spring",
  https://www.printables.com/model/110321-aa-aaa-c-18650-battery-holder-with-integrated-spri
  and 341489 "Print in place spring loaded 18650 Battery cell holder",
  https://www.printables.com/model/341489-print-in-place-spring-loaded-18650-battery-cell-ho
  (both Printables API; pages not opened; their printed-spring designs need checking against
  item 120's warning)

### 12. Pogo pin (spring-loaded contact pin)
- **Description:** A tiny gold-plated plunger in a tube with a spring behind it. It presses
  onto a flat pad to make contact without plugging in, for charging docks, test and
  programming jigs, and parts that clip or dock together.
- **Nearest items:** 135 Slip ring (sliding brushes on a turning joint); 30 Ball detent and
  the spring plunger family (the same plunger shape, but mechanical only).
- **Tier:** 1 (robotics docking and tool changers, printed programming jigs).
- **Notes to cover:** target pads (flat or cupped); about 1 N contact force (Wikipedia); a
  dense array as a "bed of nails" tester; other pressure contacts: leaf-spring contact
  fingers, elastomeric ("Zebra" (brand)) strips in calculators and displays, fuzz buttons
  (aerospace, mention only); blind-mate connectors.
- **Safety flag:** none special at low voltage.
- **Sources:** https://en.wikipedia.org/wiki/Pogo_pin (sectional drawing on Commons
  https://commons.wikimedia.org/wiki/File:Federkontaktstift.svg, CC BY 3.0; photo
  https://commons.wikimedia.org/wiki/File:Pogo_Pin_Connectors.jpg, CC BY-SA 4.0);
  https://en.wikipedia.org/wiki/Elastomeric_connector. Printable: Printables 1238779
  "reMarkable 2 Pogo Pin Jig", https://www.printables.com/model/1238779-remarkable-2-pogo-pin-jig
  (Printables API; page not opened)

### 13. Magnetic connector (magnetic pogo connector, magnetic breakaway power connector; MagSafe (brand))
- **Description:** Spring-loaded contact pins and flat pads, with magnets either side that
  pull the two halves together, line them up and let go safely if the cable is yanked.
  In some designs the magnets repel if you offer the plug the wrong way round.
- **Nearest items:** 111 Magnet joint (it only holds; it already has the MagSafe alias, so
  cross-link it); item 12 Pogo pin (no magnets); 104 Electro-permanent magnet (switchable
  docking in modular robots such as SMORES-EP, already in 286).
- **Tier:** 1 (printed modular robots and wearables; DIY kits sold).
- **Safety flag:** small strong magnets can be swallowed (cross-reference 111's safety note).
- **Sources:** https://www.adafruit.com/product/5360 ("DIY Magnetic Connector - Right Angle
  Three Contact Pins": magnets attract, pogos make contact, "If you try to connect the
  contacts backwards, they will repel!"); https://en.wikipedia.org/wiki/Pogo_pin (section
  "Combination with magnets"); https://en.wikipedia.org/wiki/MagSafe. Printable: Printables
  70240 "Magnetic connector for a 3 pins spring loaded pogo",
  https://www.printables.com/model/70240-magnetic-connector-for-a-3-pins-spring-loaded-pogo
  (Printables API; page not opened)

### 14. Standard plug-and-socket connector (USB, barrel jack, audio jack, RJ45 and similar)
- **Description:** A ready-made plug and socket built to a published standard, so cables and
  chargers from anywhere fit. You choose by what the other device already has, how many
  times it will be plugged in, and whether it must latch or seal.
- **Nearest items:** 116 Keying covers why these only fit one way; 37 Bayonet mount covers
  bayonet-locking connectors mechanically.
- **Tier:** 2. One entry only: the standards themselves are a catalogue (link to
  Wikipedia's lists rather than listing them).
- **Notes to cover:** gender (plug/jack); panel, PCB and cable mounting; mating cycles;
  latching (screw-lock, push-pull, bayonet); sealed circular connectors (M12) and IP
  ratings; barrel jacks come in look-alike sizes (5.5 x 2.1 vs 2.5 mm) and centre-positive
  or negative polarity; switched jacks.
- **Safety flag:** a reversed-polarity barrel plug can damage circuits "even if the voltage
  is correct" (Wikipedia, DC connector). Keying exists partly to prevent dangerous mix-ups
  "such as plugging an audio cable into a power outlet" (Wikipedia, Electrical connector).
- **Sources:** https://en.wikipedia.org/wiki/Electrical_connector (sections "Plug and socket
  connectors", "Jacks and plugs", "Circular connectors", "Locking mechanisms");
  https://en.wikipedia.org/wiki/Coaxial_power_connector (Commons
  https://commons.wikimedia.org/wiki/File:Klinken-_und_Hohlstecker.jpg, licence shown as
  GFDL/CC BY-SA 2.0 DE); https://learn.sparkfun.com/tutorials/connector-basics/all (USB,
  audio, barrel, IEC, RF sections, with photos);
  https://en.wikipedia.org/wiki/Gender_of_connectors_and_fasteners

### 15. Insulation-displacement connector (IDC; ribbon-cable plug, punch-down, T-tap and Scotchlok (brand))
- **Description:** A forked metal blade is pressed onto an insulated wire, so the blade cuts
  through the plastic and grips the copper, with no stripping. It can join many ribbon-cable
  wires in one squeeze, or tap a new wire into an existing one.
- **Nearest items:** none. Item 2 is the header an IDC ribbon plug often pushes onto.
- **Tier:** 2.
- **Notes to cover:** ribbon cable and pin 1 marking; punch-down blocks for network cable;
  RJ45 and phone plugs; gel-filled telecom splices; the historic vampire tap; solderless
  LED-strip clips (they clamp onto the strip's pads; Adafruit guide).
- **Safety flag:** cheap fold-over taps cut or chew through wire and fail, especially with
  movement or the wrong wire size. Hackaday: "If you find these in a car's wiring harness…
  buy a different car". IDCs are mainly for small signal wires. Wires carrying "more than a
  few amperes" are better terminated another way (Wikipedia, Electrical connector).
- **Sources:** https://en.wikipedia.org/wiki/Insulation-displacement_connector (redirects to
  "IDC (electrical connector)"; Commons
  https://commons.wikimedia.org/wiki/File:Flachbandkabel.jpg, CC BY-SA 3.0/GFDL);
  https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/;
  https://en.wikipedia.org/wiki/Punch-down_block;
  https://learn.adafruit.com/solderless-rgb-led-clips

### 16. Binding post and banana plug (test-lead connectors; incl. crocodile clips)
- **Description:** A threaded post with a screw-down cap that clamps a bare wire, spade or
  plug, and the spring-pin "banana" plug that pushes into it. These are the coloured
  terminals on bench power supplies, meters and speakers. Crocodile clips grab anything for
  a quick temporary test.
- **Nearest items:** item 6 (screw terminal, for wires that stay put).
- **Tier:** 2.
- **Notes to cover:** five-way binding posts; 4 mm and 2 mm banana plugs; stackable plugs;
  19 mm (3/4 in) spacing for double plugs; shrouded safety banana plugs; crocodile
  (alligator) clips, test hooks and battery jump-lead clamps; the Fahnestock clip (also in
  item 5).
- **Safety flag:** ordinary binding posts are not insulated well enough for dangerous
  voltages (Wikipedia, Binding post); use shrouded safety plugs.
- **Sources:** https://en.wikipedia.org/wiki/Binding_post (Commons
  https://commons.wikimedia.org/wiki/File:BindingPostRed.jpg, CC BY-SA 4.0);
  https://en.wikipedia.org/wiki/Banana_connector;
  https://en.wikipedia.org/wiki/Crocodile_clip

### 17. Twist-on wire connector (wire nut, Marrette (brand))
- **Description:** A plastic cap with a tapered metal coil inside. It is screwed by hand onto
  the twisted, stripped ends of two or more wires, pulling them together and insulating them.
  This is the usual splice in North American house wiring.
- **Nearest items:** item 5 (spring connector, often replacing it); the rat-tail splice in
  item 1's notes (the twist it caps).
- **Tier:** 2.
- **Safety flag:** strong. Mains work must follow local law (see section 5 note). Not
  certified in most European countries; not for damp or vibrating places (vehicles,
  trailers) unless a gel-filled type; not generally recommended for aluminium wire in the US
  (CPSC); rarely used above AWG 10 (all from Wikipedia, Twist-on wire connector). Hackaday
  commenters report wires pulling out. Give no mains instructions; describe the type and
  link to local rules.
- **Sources:** https://en.wikipedia.org/wiki/Twist-on_wire_connector (Commons
  https://commons.wikimedia.org/wiki/File:Array_of_twist-on_wire_connectors_aka_wire_nuts_in_different_sizes.jpg,
  CC0/public domain as shown; https://commons.wikimedia.org/wiki/File:Gebruik_lasdop.jpg,
  cut-open connector showing the coil, CC BY-SA 4.0)

### 18. Conductive thread (sewn circuit, e-textile stitching)
- **Description:** Thread spun from stainless steel or silver-coated fibres, sewn through
  the holes of sew-on boards and battery holders so the stitches themselves are the wires in
  clothing, bags and soft toys.
- **Nearest items:** the rope and sewing families (being scoped by another agent) cover
  sewing as a mechanical joint; the twisted-and-coiled polymer muscle (item 276) uses
  conductive thread only as a heater.
- **Tier:** 2. Other family: cord, strap, webbing & textile hardware.
- **Notes to cover:** resistance per length (Adafruit's 3-ply stainless thread: about 10
  ohms per foot, for parts drawing under about 100 mA); knotting and sealing knots;
  sew-on snaps as plug-and-unplug connectors (Adafruit sells sewable snaps beside its
  thread); conductive fabric for touch pads and switches (Wikipedia, E-textiles); washability (stainless doesn't oxidise; silver can).
- **Safety flag:** loose thread tails and crossing stitches cause short circuits, most often
  next to the battery holder; small coin-cell projects only warm up, but "higher voltage
  projects or power sources could be dangerous" (SparkFun e-sewing).
- **Sources:** https://learn.adafruit.com/conductive-thread/overview;
  https://learn.sparkfun.com/tutorials/lilypad-basics-e-sewing/all (knots, glueing parts
  down, sewing techniques, photos); https://en.wikipedia.org/wiki/Conductive_thread
  (redirects to "Conductive textile"); https://en.wikipedia.org/wiki/E-textiles

### 19. Conductive tape (copper foil tape, conductive fabric tape)
- **Description:** Thin copper or metal-coated fabric tape with sticky backing, laid on
  paper, card or a print as flat "wires". Parts are taped, soldered or glued onto it.
- **Nearest items:** 142 Double-sided foam tape (adhesive only).
- **Tier:** 2.
- **Notes to cover:** whether the adhesive conducts (many hardware-store copper tapes, sold
  to repel slugs, don't, so the layers won't connect through it); folding corners rather
  than cutting; copper tape can be soldered, fabric tape needs conductive glue or thread;
  copper tape is also used for electromagnetic shielding (Wikipedia).
- **Safety flag:** none special at low voltage.
- **Sources:** https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all
  (tape, paint and ink traces compared, with photos); https://en.wikipedia.org/wiki/Copper_tape
  (Commons https://commons.wikimedia.org/wiki/File:5mm_copper_tape.jpg, CC BY-SA 3.0)

### 20. Conductive glue, paint and ink (electrically conductive adhesive, silver epoxy, conductive paint; incl. conductive filament)
- **Description:** Glue, paint or ink filled with silver, copper, nickel or carbon particles
  that touch each other. It sticks or paints a joint or track where solder won't work: on
  heat-sensitive parts, glass, paper, fabric or plastic prints.
- **Nearest items:** 138 Two-part epoxy and the other adhesives (they insulate; these
  conduct).
- **Tier:** 2. Other family: adhesives & bonding.
- **Notes to cover:** about 80% of an ECA's mass is the conductive filler (Wikipedia); much
  higher resistance than solder, so only small currents; rear-window heater and PCB-track
  repair; paints only conduct when fully dry, and copper paints oxidise (SparkFun); carbon-filled
  3D-printing filament as a printed conductor ("a fair bulk resistance"; Hackaday 2022 also
  says it is less reliable between layers than within a layer [uncertain: the writer's own
  experience, no test cited]).
- **Safety flag:** solvent fumes in some silver paints (the Wikipedia formulation lists
  ethanol, acetone and ethyl acetate). Not for power wiring.
- **Sources:** https://en.wikipedia.org/wiki/Electrically_conductive_adhesive;
  https://en.wikipedia.org/wiki/Conductive_ink;
  https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all
  ("Conductive Paint Traces");
  https://hackaday.com/2022/04/22/add-conductive-traces-on-vacuum-formed-plastic-with-3d-printing/

### 21. Flat flexible cable and latching connector (FFC/FPC with ZIF connector)
- **Description:** A very thin plastic ribbon with flat copper strips, whose bare end slides
  into a low-profile socket and is locked by flipping a tiny latch. It is used for cameras
  and displays, and to carry many signals through hinges and moving heads.
- **Nearest items:** item 15 ribbon cable (round wires, IDC plug); 136 Cable carrier and
  291 Anti-twister (cable routing across motion). It answers the flowchart 1.7 gap "carrying
  a cable through a hinge" (question 10).
- **Tier:** 2. Other family: seals & pass-throughs (cables across a moving joint).
- **Notes to cover:** pitch (0.5 mm and 1.0 mm common); same-side versus opposite-side
  contacts at the two ends (Type A versus Type D, which decides which way up each end goes);
  stiffener at the ends; ZIF (zero insertion force) versus LIF latches; clocksprings (a wound flat cable that lets a steering wheel
  turn) as a cross-link for 135 and 291.
- **Safety flag:** none special.
- **Sources:** https://en.wikipedia.org/wiki/Flexible_flat_cable (Commons
  https://commons.wikimedia.org/wiki/File:Flat-Flex-Cable.jpg, CC BY-SA 3.0/GFDL);
  https://en.wikipedia.org/wiki/Zero_insertion_force; https://en.wikipedia.org/wiki/Clockspring

### 22. Wire wrap (wire-wrapped connection)
- **Description:** Bare solid wire is wound tightly, about seven turns, round a square metal
  post with a small hand tool. The post's sharp corners bite into the wire, making a
  gas-tight joint that can be unwound and redone, with no solder.
- **Nearest items:** item 1 (soldered); item 2 (posts are long pin headers).
- **Tier:** 2 (old, but still used for prototypes and repairs; some makers prefer it to
  solder).
- **Notes to cover:** 30 AWG Kynar-insulated wire; wire-wrap sockets with long square posts;
  the tool's two holes; 1.5 turns of insulated wire for strain relief; "modified" wraps.
- **Safety flag:** none special (low voltage only).
- **Sources:** https://en.wikipedia.org/wiki/Wire_wrap (method, tooling, rules; Commons
  https://commons.wikimedia.org/wiki/File:Wire_Wrap_1.jpg, CC BY-SA 4.0);
  https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
  (commenters on wire wrap)

## 3. Notes additions to existing items
- **111 Magnet joint:** keep the MagSafe alias, but add "for magnetic plugs that also carry
  current, see *Magnetic connector*". Add `electrical connections` to other_families only if
  the new item is not added.
- **286 Genderless connector:** add `electrical connections` to other_families; cross-link
  *High-current battery plug* (Powerpole and SAE stay here as the genderless examples).
- **116 Keying:** cross-link *Wire-to-board plug connectors* and *Standard plug-and-socket
  connector* (pin headers, shrouded headers and polarised barrel plugs are its commonest
  everyday cases).
- **135 Slip ring and rotary union:** add `electrical connections` to other_families; add the
  clockspring (spiral flat cable, Wikipedia "Clockspring") as a limited-rotation
  alternative, cross-linked with 291 Anti-twister.
- **291 Anti-twister mechanism:** cross-link the clockspring and *Flat flexible cable*.
- **134 Cable gland and strain relief:** say that every electrical joint in the new family
  needs strain relief. NASA-STD-8739.4A §7.2.36: splices "shall not be located in areas of
  the cable where flexing may occur". Cross-link *Heat-shrink tubing*.
- **141 Hot-melt adhesive:** cross-link *Heat-shrink tubing* (adhesive-lined) and *Screw
  terminal* (SparkFun suggests a dab of hot glue to stop screw-terminal wires working loose).
- **120 Printed leaf spring / 268 Coil spring:** cross-link *Battery holder and battery
  contacts* and *Pogo pin*.
- **167 DIN-rail clip:** cross-link *Screw terminal* and *Spring-clamp wire connector*
  (terminal blocks are what usually go on the rail).
- **209 Burn-wire release:** cross-link *Crimp terminals* and *Heat-shrink tubing*.
- **104 Electro-permanent magnet:** cross-link *Magnetic connector* (power-free magnetic
  docking of robot modules).
- **60 Mid-print embedding:** optional: pogo pins, magnets and contact springs are often
  embedded mid-print in docks and battery boxes [uncertain: no source opened for this].

## 4. Near-misses rejected
- **Separate entries for USB, HDMI, RJ45, XLR, IEC, D-sub, M12 and similar:** catalogue of
  standards. One *Standard plug-and-socket connector* entry links out to Wikipedia's lists.
- **Separate entries for Deans, EC3/EC5, Tamiya, SAE, MC4, Anderson SB:** variants, in the
  notes of item 8.
- **Separate entries for Western Union, rat-tail, lap, lash and T-splices:** ways of laying
  wires before soldering or capping, so they go in the notes of item 1. A twisted splice with
  only tape is not a safe choice (not permitted at 110 V+ by most North American codes;
  Wikipedia Rat-tail splice), so it belongs under "common failures".
- **Solderless breadboard and jumper wires:** a prototyping board, so notes of item 2.
  Borderline: the owner could add it as its own entry, since beginners do choose
  "breadboard or solder?".
- **Perfboard, stripboard, point-to-point and PCB construction:** ways of building a whole
  circuit (circuit design is out of scope).
- **Surface-mount and reflow soldering:** board-assembly processes, not wire joints.
- **Spot-welded nickel strip, ultrasonic wire welding, brazed lugs:** welding and brazing
  belong to the heat-joining agent; cross-link from item 11.
- **Anisotropic conductive film:** factory bonding of displays; not a hobby choice (a
  one-line mention in item 20 at most).
- **Fuzz buttons, hyperboloid and crown-spring contacts, press-fit (compliant) PCB pins:**
  contact designs inside industrial connectors, not a maker's choice. Fuzz buttons at most
  get a mention in item 12.
- **Vampire tap:** obsolete network tap; one line in item 15.
- **Busbars and distribution blocks:** notes in item 6 (and the existing 236 Belleville
  note).
- **IC sockets, ZIF sockets, card-edge and board-to-board connectors:** notes in items 2
  and 21.
- **Fuses, switches, relays, circuit breakers, RCDs:** components, not connections.
- **Wiring diagrams, mains installation methods, consumer units, earthing systems:** whole
  systems and installation instructions (out of scope by the brief).
- **Wireless (inductive) power and data:** no physical connection; 135 already lists the
  inductive rotary coupler as an alias.
- **Cable ties, harness lacing, cable trays:** cable management (fastening), not electrical
  joints; possibly notes in 134.

## 5. Do the existing 41 fields work?
**Mostly yes, with writing rules for this family. One new `job` option is needed. No new field
is strictly needed.**
- `load`: holds the electrical rating. Rule: begin with a fixed lead-in, for example
  "Electrical: signal only / small power (up to about 3 A) / power (up to about 30 A) / high
  current (above about 30 A); voltage: extra-low voltage only / rated for mains. Mechanical:
  ..." (pull-out strength, which also matters). A fixed lead-in keeps it machine-readable for
  the finder (tree.py already matches on text). The band edges are my suggestion, picked to
  fit the ratings found (JST XH 3 A; WAGO 221 20/30 A; XT60 30 A continuous).
- `seal`: the fixed options fit; put the IP code in the explanation (e.g. MC4's rubber
  ring, gel-filled connectors, glue-lined heat-shrink).
- `materials`: wire types and sizes accepted (solid, stranded, fine-stranded; mm²/AWG),
  contact plating (tin, gold, nickel), and copper versus aluminium wire.
- `reuse_cycles`: mating cycles (SparkFun and Wikipedia both use the term).
- `tools_needed`: crimper with the matching die, stripper, iron, heat gun, wire-wrap tool.
- `holding_principle`: the existing options fit (friction or clamping for crimps and screws;
  material bond for solder and conductive glue; spring force for spring terminals, pogo
  pins and battery contacts; magnetic for magnetic plugs).
- `environment_limits`, `safety_notes`, `common_failures`: vibration, corrosion, creep of
  tinned wire, high-resistance heating, mains law.
- `motion`, `degrees_of_freedom`, `input_output`, `play_and_precision`, `print_in_place`: mostly
  "none" or "not applicable", which the rules already allow.
- **Needed: one new `job` option**, e.g. "make an electrical connection (join wires, or connect
  them to a board, battery or device)". Without it these entries would sit under "join and
  hold" alongside mechanical joints. The hydraulics family was routed by family in tree.py
  without a new job; that is the alternative if the owner prefers not to change the list.
- **Optional new field `electrical_rating`** (current band, voltage class, wire range). The
  case for it: current and voltage are the first thing anyone filters electrical connectors
  by, and putting them in `load` gives the field two meanings. The case against (my
  recommendation): the validator needs every field in every file, so 323 existing files would
  each get "not applicable" for a field only ~22 entries use, and the fixed `load` lead-in gives
  the finder the same information.
- **Research rule to add for this family:** never give mains installation steps; describe
  the type, flag it, and say that mains work must follow local law. Example: in England,
  Approved Document P (2013) covers electrical installation work in homes; some work is
  notifiable, and "replacements, repairs and maintenance anywhere" are not notifiable but
  must still meet the requirement (§2.7). Also say what the type is not allowed for (e.g.
  twist-on connectors are not certified in most European countries).
  Source: https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf

## 6. Suggested baseline entry
Item 1, **Soldered wire joint (soldered splice)**, tier "baseline".
- Draft outline line:
  `name: Soldered wire joint (soldered splice)`;
  `description: Wires (or a wire and a pin or pad) are twisted or laid together and joined with melted solder, making a permanent joint that conducts well but needs heat, skill and strain relief`;
  `notes: Baseline entry for the family. Also covers the Western Union (lineman's), lap, lash, rat-tail and T-splices, solder cups, tinning and covering the joint. Soldering of metal parts belongs with heat joining. Safety: high heat and possibly toxic solders; stiff joints break under vibration; tape-only or soldered splices are not allowed in mains wiring by most North American codes.`
- Why this one: it is the classic default, it covers wire-to-wire and wire-to-pin joints, and
  every alternative (crimp, solder sleeve, spring connector, IDC) is described in relation to
  it. Hackaday's "can't solder" question (flowchart 1.7, no. 25) is literally a request for its
  alternatives.

## Sources and references (all opened 2026-10-03)
Wikipedia: Electrical_connector, Electrical_splice (redirects to Line splice),
Western_Union_splice, Rat-tail_splice, T-splice, Twist-on_wire_connector,
Crimp_(electrical), Wire_ferrule, Screw_terminal, Terminal_block, Euroblock, Chocbox,
WAGO_221, Fahnestock_clip, Binding_post, Banana_connector, Crocodile_clip,
Insulation-displacement_connector, Punch-down_block, Vampire_tap, Pin_header, Box_header,
JST_connector, Molex_connector, Jump_wire, Breadboard, Edge_connector, Coaxial_power_connector,
DC_connector, Anderson_Powerpole, Tamiya_connector, MC4_connector, FASTON_terminal,
Pogo_pin, Elastomeric_connector, Fuzz_button, Blind_mate_connector, MagSafe, Battery_holder,
Battery_terminal, Spot_welding, Wire_wrap, Electrically_conductive_adhesive, Conductive_ink,
Conductive_thread (Conductive textile), E-textiles, Copper_tape, Heat-shrink_tubing,
Cold_shrink_tubing, Electrical_tape, Self-amalgamating_tape, Flexible_flat_cable,
Ribbon_cable, Zero_insertion_force, Clockspring, High_resistance_connection,
Gender_of_connectors_and_fasteners, Soldering, Category:Electrical_connectors,
Category:Electrical_wiring (all at https://en.wikipedia.org/wiki/<name>).
Maker and technical:
- https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
- https://hackaday.com/2018/04/12/to-ferrule-or-not-to-ferrule/
- https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/
- https://hackaday.com/2019/02/28/inside-the-secret-world-of-crimping/
- https://hackaday.com/2018/01/12/bradley-gawthrop-what-you-need-to-know-about-wiring/
- https://hackaday.com/2022/04/22/add-conductive-traces-on-vacuum-formed-plastic-with-3d-printing/
- https://learn.sparkfun.com/tutorials/connector-basics/all
- https://learn.sparkfun.com/tutorials/working-with-wire/all
- https://learn.sparkfun.com/tutorials/lilypad-basics-e-sewing/all
- https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all
- https://learn.adafruit.com/conductive-thread/overview
- https://learn.adafruit.com/solderless-rgb-led-clips
- https://learn.adafruit.com/adafruit-guide-excellent-soldering/tools
- https://www.adafruit.com/product/5360
- https://docs.holybro.com/power-module-and-pdb/power-module/connector-and-wire-rating
- https://cdn.automationdirect.com/static/specs/221serieslevernuts.pdf
- https://nepp.nasa.gov/files/27631/nstd87394a.pdf (NASA-STD-8739.4A, 2016)
- https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
- Commons file pages as listed under each item.
- Printables models via https://api.printables.com/graphql/ (pages not opened): 219847,
  354122, 1041347, 110321, 341489, 1238779, 70240.
