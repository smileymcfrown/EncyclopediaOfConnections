<!-- Saved into the repository on 2026-10-03 from the search agent's working notes (R22). -->
# Scope search 2026-10-03: Heat and fusion joining; pipe and plumbing joints

One of six web searches for R22, the wider scope (see `scope-search-2026-10-03-combined.md` for
the combined list the owner confirmed). The agent's write-up follows unchanged, except this
header. Download folders it mentions were working files and were not kept. Suggestion numbers
below are the agent's own; they map to outline items like this:

| Suggestion | Item | Outline name |
|---|---|---|
| 1 | 342 | Melted plastic weld (plastic welding with a soldering iron, 3D pen or hot-air gun) |
| 2 | 343 | Friction-welded plastic (rotary-tool friction welding, spin welding) |
| 3 | 402 | Tapered pipe thread (NPT, BSPT; PTFE tape, pipe dope) |
| 4 | 403 | Parallel pipe thread with a sealing washer (BSPP, garden-hose thread, pipe union) |
| 5 | 404 | Soldered metal joint (soft soldering of metal parts, sweat-soldered copper pipe) |
| 6 | 328 | Welded metal joint (fusion welding; stick, MIG, TIG and gas welding) |
| 7 | 405 | Brazed joint (brazing, silver soldering, hard soldering) |
| 8 | 344 | Heat-sealed seam (heat-sealed plastic film and coated fabric) |
| 9 | 406 | Spot weld (resistance spot welding) |
| 10 | 407 | Heat-fused plastic pipe (socket fusion, butt fusion, electrofusion) |
| 11 | 408 | Flare fitting (flared tube fitting, double flare) |
| 12 | 409 | Ultrasonic weld (ultrasonic plastic welding, energy director) |

---

# FINISHED: heat and fusion joining (group A) and pipe and plumbing joints (group B), 2026-10-03

Scope search for the Encyclopaedia of Connections. Nothing in the repository was edited.
Checked first: outline.yaml (323 items, 26 families), outline-notes.md, gap-search-2026-09-29.md,
fluid-power-search-2026-09-29.md, flowchart-and-format.md 1.7 (questions 18 and 21), and a
grep of all 323 result files.

## 0. What the existing entries already cover (grep of results/, 2026-10-03)
- **Plastic welding** has no entry. It is only named in `related` lists: 137 Cyanoacrylate
  ("plastic welding with a soldering iron"), 139 Solvent welding (hot-gas, friction and
  ultrasonic welding), 61 Heat staking (ultrasonic welding), 226 Structural acrylic and LSE
  adhesives (which says hot-air or soldering-iron welding is often the best fix for PE and PP).
- **Soldering, brazing and metal welding** have no entry. They are mentioned only in passing:
  210 Compression fitting (soldered "sweat" joint as a related type), 255 Clinching (spot
  welding as the industrial alternative), 254 Bent tab (a spot-welder video), 209 Burn-wire
  release (low-melting solder in fusible links).
- **Shrink fit and induction heating** are already covered in 218 Press fit (aliases, tools and
  a Hackaday induction-heater link). The brief says "Press fit (217)", but 217 is Taper fit and
  218 is Press fit. Nothing new is needed.
- **Solvent-welded PVC, CPVC and ABS pipe** is thoroughly covered in 139: primer, the quarter
  turn, holding for 30 s, cure times, and "never test with compressed air".
- **Push-fit plumbing** is covered in 166 Quick couplers: John Guest, Speedfit and SharkBite
  (brands) as aliases, tube inserts, square cuts, and "grips before it seals". 166 also covers
  click-on garden-hose connectors (Hozelock, Gardena (brands)). Cam-and-groove (camlock)
  couplings are named only in 166's `related` list. Storz couplings are covered in 286
  Genderless connector.
- **Flare fittings** are named only in 210's `related` list.
- **PTFE tape and anaerobic pipe sealants** are named in 229 Anaerobic adhesive. NPT and BSP
  appear only as thread names (134, 289 and others). No entry explains tapered versus
  parallel pipe threads.
- **Bolted pipe flanges** are covered as "flange gasket" in 131 Gasket.
- **Grooved couplings and rubber-sleeve (no-hub) couplings** are not mentioned anywhere.
- **Heat-sealed film** appears only as a material in 305 Bellows (pouch motors) and 306
  Air-logic valve (TPU film sealed through parchment). The rope and sewing group passed
  "heat-welded, RF-welded and ultrasonic fabric seams, heat-sealed TPU film" to this group.
- **JB Weld (brand)**, which makers call a "weld", is only in the 232 and 321 links. It is not an
  alias in 138 Two-part epoxy.

## 1. Family placement

### Group A: a new family is clearer than renaming adhesives
- **Proposed key:** `welding, brazing & soldering`
- **Proposed label:** "Joins by melting: welds, brazes, solders and heat seals"
- **Members (new):** suggestions 1, 2, 5, 6 (baseline), 7, 8, 9, 10 and 12 below.
- **Why a new family is better than renaming `adhesives & bonding`:**
  1. Adhesives already has 19 entries arranged by glue chemistry and material pair. Adding
     about 9 heat entries would make it the biggest family. It would also mix two different
     questions: "glue it" (the finder's *I just want to glue it* branch) and "melt it together".
  2. Heat joining has its own rules. It only joins the same or compatible metals or
     thermoplastics, it needs a heat tool (iron, torch, welder or sealer), and its safety
     risks are different: burns, fire, UV light and fumes. Glue joins across materials and
     needs no hot work.
  3. The data model already gives both families the same holding principle ("material bond
     (glue, solvent or melting)"), so nothing is lost by keeping them apart.
  4. The heat items already in the outline stay where they are: 139 Solvent welding,
     141 Hot-melt and 297 PCL stay in adhesives, and 56 Heat-set insert and 61 Heat staking
     stay in print-in-place. Each lists the new family in `other_families`.
- **Fallback if the owner wants fewer families:** rename `adhesives & bonding` to
  `adhesives, welding & bonding`, with the label "Glues and welds: joins that stick or fuse the
  material".

### Group B: keep pipe joints in `seals & pass-throughs`
- Its label already says "carries cables and fluid across a joint", and 133 Hose barb and
  210 Compression fitting already live there. Put suggestions 3, 4 and 11 there, and list
  `hydraulics, pneumatics & vacuum` in their `other_families`.
- The heat-fused pipe joint (10) goes in the new heat family, with seals listed in
  `other_families`. This matches how solvent-welded pipe sits in adhesives.
- **Considered and not recommended (yet):** a new `pipe, tube & hose fittings` family
  ("Joins pipes, tubes and hoses without leaks"). It would hold about 9 items, but it would mean
  moving four researched entries (133, 166, 170, 210) and pulling 166 and 170 out of
  quick-release. A finder shortcut, "Join pipes, tubes or hoses", in branch 8 gives the same
  way in.

## 2. Suggested new types, ranked by usefulness to a hobbyist maker

### 1. Melted plastic weld (plastic welding with a soldering iron, 3D pen or hot-air gun and filler rod)
- **Description:** Two plastic parts are joined by melting their edges together and running in
  a bead of the same plastic as filler, using a soldering iron, a 3D pen or a hot-air welder
  with a welding rod.
- **Nearest items and why it is distinct:**
  - 61 Heat staking melts a post into a rivet head, which is a mechanical lock, not fused faces.
  - 139 Solvent welding dissolves the plastic instead of melting it, and fails on PE and PP.
  - 141 Hot-melt adds a different, low-melting glue.
  - 226 already says plastic welding is often the better fix for PE and PP.
  - This entry fuses the same plastic into one piece, and it is the answer run 3 found missing
    for question 21: weld a PETG watering reservoir with a soldering iron, then seal it.
- **Family:** `welding, brazing & soldering`; other_families `print-in-place & 3D-printing
  joints`, `seals & pass-throughs`. **Tier:** 1.
- **Notes to cover:**
  - Soldering-iron "trench" welding with filament as filler (Hackaday 2023 comments).
  - HDPE sheet "spot welding" through a PTFE BBQ mat (Hackaday 2018).
  - 3D pens, and a DIY welder built from a printer hot-end. In tests it gave a stronger bond
    than a normal 3D pen and "a much, much stronger join than the usual superglue". Hot-air
    welding was stronger still, but risky on thin-walled prints (Hackaday 2026; the
    video is by half-baked-research).
  - PLA sticks in a high-temperature (up to 208 °C) glue gun. A hobby gun only softened the PLA
    (Hackaday 2018).
  - Hot-air welding with a filler rod, either freehand or with a speed tip. Used on PE, PP and
    PVC tanks and on car bumper repair (Wikipedia 'Plastic welding'; 'Hot gas welding').
  - Extrusion welding is the method for material over 6 mm thick (Wikipedia).
  - Hot staples or stainless mesh can be melted in across cracks. The filler must match the base
    plastic, so check the moulded code (PP, TPO, ABS) (Rick's Free Auto Repair Advice 2019).
- **Safety: yes.**
  - Burns, and the risk of fire.
  - Fumes: ventilate, and keep a separate iron tip for plastic. Hackaday 2018 warns of "the
    health risks present when heating up different types of plastic". Wikipedia says melting
    urethane "has been known to give off toxic cyanide gasses".
- **Sources (opened):**
  - https://hackaday.com/2026/03/07/diy-3d-pen-is-born-to-weld/ (article with an embedded strength-test video)
  - https://commons.wikimedia.org/wiki/File:Kunststoffziehschweissen_Schweissschuh.jpg (photo: heat gun with a speed-tip shoe and 4 mm PP welding rod, CC0)

### 2. Friction-welded plastic (friction welding with a rotary tool, spin welding)
- **Description:** A piece of filament spun in a rotary tool, or a round part spun against
  another, rubs until friction melts the plastic and the parts fuse into one.
- **Nearest items and why it is distinct:** Suggestion 1 heats the plastic from outside; here
  the heat comes from rubbing, using a Dremel-type tool or a drill press. Spin welding only
  works on round joints. Neither is a glue (139, 141).
- **Family:** `welding, brazing & soldering`; other_families `print-in-place & 3D-printing
  joints`. **Tier:** 1.
- **Notes to cover:**
  - Fit 1.75 mm filament in a 1/16 in collet and 3 mm filament in a 1/8 in collet, and run the
    tool as slowly as possible (Scorchworks).
  - Strength: "shockingly strong, vastly superior to glued plastic for some joints" (Hackaday
    2014). Parts tend to break "near the joint" rather than at it (Vaasa Hacklab 2016).
  - Printed friction-welding tips: Printables 692350 and 737519, the second called "friction
    stir welding tips" (Printables API; page not opened).
  - Lab friction-stir welding of PLA prints on a mill reached 106-124 % of the base print's
    strength (Koçar et al., Polymers 2024). [Corrected 2026-10-05: that compares the weld with a
    20%-infill print; the best weld, 17.83 MPa, is about a third of a solid PLA+ print (42-53 MPa).]
  - Spin welding round parts on a drill press at 1400 rpm (Popular Science 2019).
  - Mattel's 1970s "Spinwelder" toy (Wikipedia 'Spin welding of polymers').
  - Industrial linear and orbital vibration welding of plastics, and metal friction welding,
    go in the notes only.
- **Safety: yes.**
  - Eye protection: "you're spinning a molten plastic melt, wear goggles" (Printables 737519).
  - Friction burns: wear thin rubber gloves, never heavy gloves near a spinning chuck (Popular
    Science).
  - Ventilate when welding ABS.
- **Sources (opened):**
  - https://www.scorchworks.com/Blog/?p=442 (photos and a video)
  - https://www.popsci.com/how-to-spin-weld-at-home/ (step photos)

### 3. Tapered pipe thread (NPT, BSPT; sealed with PTFE tape or pipe dope)
- **Description:** A pipe thread that gets wider along its length, so screwing it in wedges
  the threads tight, while tape or paste fills the tiny gaps so it doesn't leak.
- **Nearest items and why it is distinct:**
  - 257 Ordinary screw joint uses a parallel thread that holds but doesn't seal.
  - 210 Compression fitting seals on a ring and needs no tape.
  - 229 Anaerobic adhesive names pipe sealant only as a variant.
  - This is the commonest thread on pumps, valves, taps and air fittings, and "Tapered pipe
    threads always need a sealant" (Swagelok MS-13-77, p. 21).
- **Family:** `seals & pass-throughs`; other_families `hydraulics, pneumatics & vacuum`.
  **Tier:** 2.
- **Notes to cover:**
  - PTFE tape: wrap it in the same direction the female part turns to tighten. Too much tape
    stops the threads engaging, and loose bits "may ... slough off" and jam a valve seat. Tape
    is "generally not considered appropriate in fluid power systems" (Wikipedia 'Thread seal
    tape').
  - Yellow "gas tape" (Wikipedia). Pipe dope and anaerobic thread sealant. Petroleum-based dope
    damages PVC, CPVC and ABS threads (Wikipedia 'Pipe dope').
  - NPTF (Dryseal) is made to seal without tape (Wikipedia 'National pipe thread').
  - 1/2 and 3/4 in NPT and BSPT "can be difficult to identify because they are very close in
    design" (Swagelok p. 23). The 55° and 60° thread forms mean you shouldn't mix them.
  - BSP names: R is a male taper, Rc a female taper and Rp a female parallel thread. In Europe a
    taper male often goes into a parallel female (Wikipedia 'British Standard Pipe').
  - "There is no standard for torque or number of turns" (Swagelok p. 21).
  - Printed NPT threads and thread gauges: Printables 231377, 1345884 and 1057747 (Printables
    API; page not opened).
- **Safety:** pressure (see 311). Overheated PTFE gives off a toxic gas (Wikipedia 'Thread seal
  tape'), so keep a torch away from taped joints.
- **Sources (opened):**
  - https://www.swagelok.com.cn/downloads/webcatalogs/en/MS-13-77.pdf (illustrated thread ID guide; pp. 21, 23, 27)
  - https://commons.wikimedia.org/wiki/File:Teflon_tape_wound_around_threaded_pipe.jpg (photo, CC0)

### 4. Parallel pipe thread with a sealing washer (BSPP/G, garden-hose thread, bonded seal, pipe union)
- **Description:** A straight pipe thread only holds the parts together, while a rubber washer,
  bonded seal or O-ring squeezed against a flat face does the sealing, as on garden hoses and
  tap connectors.
- **Nearest items and why it is distinct:**
  - It looks like suggestion 3 but seals in a different way. With straight threads "the seal
    must be made with a gasket, O-ring, or some metal to metal contact. A sealant is not
    required or recommended" (Swagelok p. 27).
  - "Parallel threads may not seal effectively with or without tape" (Wikipedia 'Thread seal
    tape').
  - 130 O-ring and 131 Gasket are the seal itself, not the threaded joint.
- **Family:** `seals & pass-throughs`; other_families `hydraulics, pneumatics & vacuum`.
  **Tier:** 2.
- **Notes to cover:**
  - BSP "jointing" (taper) threads versus "longscrew" (parallel) threads; G is the ISO 228
    parallel thread (Wikipedia 'British Standard Pipe').
  - Bonded seals (a metal washer with a rubber lip, DIN 3852) (Swagelok p. 40). NPS and NPSM
    straight threads (Wikipedia 'National pipe thread').
  - The US garden-hose thread (GHT) is 1-1/16 in with 11.5 threads per inch and is sealed by a
    hose washer. Most other countries use 3/4 in BSP with 14 threads per inch. The two "are not
    compatible, and attempting to connect" them "will damage the threads" (Wikipedia 'Garden
    hose').
  - Fire-hose NH threads use a gasket (Wikipedia 'Hose coupling').
  - A pipe union is a nut that pulls two ends together so pipework can be undone without turning
    the pipes. Dielectric unions separate copper from steel (Wikipedia 'Piping and plumbing
    fitting').
  - Printed BSP adapters: Printables 1184644 and 1335440 (Printables API; page not opened).
- **Safety:** none special beyond pressure.
- **Sources (opened):**
  - https://www.swagelok.com.cn/downloads/webcatalogs/en/MS-13-77.pdf (pp. 27, 40)
  - https://en.wikipedia.org/wiki/Garden_hose
- **Option:** suggestions 3 and 4 could be merged into one "Threaded pipe joint (tapered vs
  parallel threads)" entry. I recommend keeping two entries, because they seal by different
  principles, need different parts, and mixing them up is a classic cause of leaks.

### 5. Soldered metal joint (soft soldering of metal parts; includes sweat-soldered copper pipe)
- **Description:** Metal parts are joined by melting a low-melting tin alloy (solder) into a
  tight gap with a soldering iron or a small gas torch, as in copper water pipes, tin toys,
  stained glass and brass models.
- **Nearest items and why it is distinct:**
  - Wire joints belong to the electrical group and should only be cross-referenced.
  - 209 Burn-wire uses solder as a deliberate weak link.
  - Suggestion 7 (brazing) is hotter and stronger.
  - Soft solder melts below about 450 °C. It "does not make a strong joint and is unsuitable for
    mechanical load-bearing applications" (Wikipedia 'Soldering'), so beginners must not mistake
    it for brazing or welding.
- **Family:** `welding, brazing & soldering`; other_families `seals & pass-throughs` (pipes),
  plus the electrical family if one is created. **Tier:** 2.
- **Notes to cover:**
  - Copper, brass, zinc, silver and gold are easy to solder; stainless steel and aluminium are
    hard.
  - Acid paste flux is used for plumbing and rosin flux for electronics.
  - Copper pipe capillary ("sweat") fittings come as end-feed or solder-ring (Yorkshire) types.
    They are heated with a propane or MAPP torch, or with an electric pipe-soldering tool for
    8-22 mm pipe. Drinking water needs lead-free solder. Badly placed heat leaves voids
    (Wikipedia 'Soldering').
  - "Sweating" flat parts: tin each face first, then reheat them together.
  - Low-melting bismuth solders.
- **Safety: yes.**
  - Rosin flux fume "is a top cause of occupational asthma": use fume extraction and keep your
    head out of the plume (HSE).
  - Lead: use lead-free solder where children may touch it and outdoors (Wikipedia).
  - Open flames are a fire risk in buildings (Wikipedia 'Piping and plumbing fitting'). Burns.
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Soldering (pipe soldering, solder fittings, soldering vs brazing)
  - https://commons.wikimedia.org/wiki/Category:Solder_fittings (photos of end-feed and solder-ring fittings)
  - Safety: https://www.hse.gov.uk/asthma/solderers.htm
- **Option:** add a separate "Soldered copper pipe joint (capillary or sweat fitting)" entry in
  `seals & pass-throughs` if the owner wants every plumbing choice as its own card. I recommend
  covering it in the notes here instead.

### 6. Welded metal joint (fusion welding: stick, MIG, TIG and gas)
- **Description:** The edges of two metal parts are melted together, usually with added filler
  metal, by an electric arc or a gas flame, so that they cool as one piece of metal.
- **Nearest items and why it is distinct:**
  - Brazing (7) doesn't melt the parts.
  - 255 Clinching and 274 Blind rivet are cold mechanical joints for sheet metal.
  - 266 Shaft-to-hub joints cover the options run-3 question 18 was really asking about.
  - This is the strongest permanent metal joint, for the same or compatible metals.
- **Family:** `welding, brazing & soldering`. **Tier:** baseline (the family's basic entry).
- **One entry or several:** make it one entry, with the processes in its notes as a comparison
  table. To a maker the joint itself (a fused bead) is the same whichever process makes it; the
  choice of process depends on the metal, its thickness, where you work and your budget.
  Spot welding (9) gets its own entry, because it is a different joint (overlapping sheets, no
  bead, no filler) with a different tool and different uses.
- **Notes to cover:**
  - The five basic joints: butt, lap, corner, edge and T (Wikipedia 'Welding').
  - Process comparison (Miller):
    - MIG is the "easiest to learn". A small 120 V unit welds 24 gauge to 3/16 in mild steel.
    - Flux-cored wire needs no gas and works outdoors and on dirty metal.
    - Stick is "the most economical", works outdoors, and is limited to metal "no thinner than
      18 gauge".
    - TIG suits thin steel, stainless, aluminium and copper, but is harder to master.
    - Rule of thumb: about 1 A per 0.001 in of thickness.
  - Gas (oxy-acetylene) welding also heats, bends and cuts metal (Wikipedia). Forge welding;
    tack welds.
  - Run-3 question 18 (welding a flange onto a gearmotor shaft): commenters advised clamping the
    earth so the current doesn't pass through the bearings, taking the shaft out of the gearbox,
    or using a D-flat, key, roll pin or retaining compound instead (Arctic Shift archive of the
    thread).
- **Safety: yes (major).**
  - UV light causes "arc eye" and skin burns: use a filtered or auto-darkening helmet, and
    screens for bystanders.
  - Burns and fire: it is "hot work". Don't wear synthetic clothing.
  - Electric shock, gas cylinders, and noise over 100 dB(A) (Wikipedia 'Welding').
  - Fumes: HSE now treats mild-steel welding fume as a carcinogen and "will no longer accept any
    welding undertaken without any suitable exposure control". That means extraction indoors and
    a respirator (RPE) outdoors (HSE STSU1-2019).
  - Stainless steel gives off hexavalent chromium (Wikipedia). Galvanised steel gives off zinc
    fume, causing metal fume fever (Wikipedia 'Metal fume fever').
- **Sources (opened):**
  - https://commons.wikimedia.org/wiki/File:Common_joint_types.png (diagram: butt, V-butt, lap and T joints, CC BY-SA 3.0)
  - https://www.millerwelds.com/resources/article-library/buying-your-first-welder-a-practical-informative-guide-for-doityourselfers
  - Safety: https://www.hse.gov.uk/safetybulletins/mild-steel-welding-fume.htm

### 7. Brazed joint (brazing and silver soldering, hard soldering)
- **Description:** Metal parts are heated red-hot with a torch and a brass or silver alloy is
  melted into a close-fitting gap, giving a strong, leak-proof joint without melting the parts
  themselves.
- **Nearest items and why it is distinct:**
  - Soft solder (5) is cooler and weak. Welding (6) melts the parts.
  - Brazing is done above 450 °C. Its joints "are normally leakproof, will withstand vibration,
    tensile and torsional loading" (HSE EIS31).
  - It joins dissimilar metals (steel to brass, carbide tips to steel).
- **Family:** `welding, brazing & soldering`. **Tier:** 2.
- **Notes to cover:**
  - Gap of 0.03-0.08 mm for capillary flow (Wikipedia 'Brazing').
  - Silver-solder grades (easy, medium, hard) are named by melting point, not strength
    (Wikipedia 'Soldering').
  - Braze welding: a bronze fillet with no capillary flow, for steel and cast-iron repairs.
  - Copper-phosphorus rods braze copper without flux. Carbide saw tips are brazed on. Induction
    brazing.
  - Zinc "aluminium welding" rods work at about 388 °C with a propane torch. They are "not
    properly a weld" and are really a solder (Wikipedia 'Soldering').
- **Safety: yes.**
  - Cadmium-bearing silver solders give off cadmium oxide fume, which harms the lungs and kidneys
    (kidney damage can be irreversible). Cadmium is now banned in EU brazing fillers, so use
    cadmium-free alloys (HSE EIS31).
  - Flux fumes, burns, fire and gas cylinders.
- **Sources (opened):**
  - https://commons.wikimedia.org/wiki/File:Brazing_welding_tee_joint.svg (diagram of a fillet braze, CC BY-SA 3.0 / GFDL)
  - https://www.hse.gov.uk/pubns/eis31.pdf (HSE information sheet EIS31)

### 8. Heat-sealed seam (heat sealing and welding of plastic film and coated fabric)
- **Description:** Two layers of plastic film, or fabric coated with plastic such as
  TPU-coated nylon, are pressed together with a hot bar, an iron or a heated wire until the
  plastic melts into an airtight, waterproof seam.
- **Nearest items and why it is distinct:**
  - Suggestion 1 joins rigid parts with filler.
  - Sewn seams (rope and sewing group) leak through the needle holes.
  - 305 Bellows and 306 Air-logic valve use heat-sealed pouches, but don't explain the joint.
  - This is the joint behind pouch motors, inflatables, dry bags and vacuum bags.
- **Family:** `welding, brazing & soldering`; other_families `seals & pass-throughs`, `cord,
  strap, webbing & textile hardware`. **Tier:** 1 (for soft robotics; 2 otherwise).
- **Notes to cover:**
  - Impulse sealers: the nichrome wire heats "only when current flows". Also hot-bar sealers,
    and hot-wire cut-and-seal (Wikipedia 'Heat sealer').
  - A soldering iron or a household iron through a release layer such as a PTFE BBQ mat
    (Hackaday 2018) or parchment (306).
  - A 3D-printer nozzle used as a heat-sealing plotter on bag film. It gave "decent seams at
    around 180 °C", but the film bunched up (Hackaday 2020).
  - High-frequency (RF) welding of PVC, and hot-air seam welding of tarps (Wikipedia 'Plastic
    welding').
  - Rope-end sealing stays with the rope group.
- **Safety:** burns and fumes (ventilate, especially with PVC).
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Heat_sealer
  - https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/

### 9. Spot weld (resistance spot welding)
- **Description:** Two overlapping metal sheets or strips are squeezed between copper
  electrodes, and a short burst of very high current melts a small button of metal between
  them, as on car bodies, steel boxes and battery packs.
- **Nearest items and why it is distinct:**
  - Welding (6) runs a bead with an arc or flame.
  - 255 Clinching and 274 Blind rivet are the cold alternatives for sheet metal.
  - Spot welding works on lap joints only, for sheets of about 0.5-3 mm, uses no filler, and
    takes about 10-100 ms (Wikipedia 'Spot welding').
  - It is the way to fix nickel strip to battery cells, because "Spot welding can keep the
    battery from getting too hot, as might happen if conventional soldering were done".
- **Family:** `welding, brazing & soldering`; other_families `interlocking joints & joinery`,
  plus the electrical family if one is created. **Tier:** 2.
- **Notes to cover:**
  - Building battery packs from 18650 cells. Cheap MOSFET battery welders "seem not to deliver",
    so buy "a more traditional spot welder" (Hackaday 2021).
  - Seam welding with wheel electrodes (Wikipedia).
  - The tin-toy tab repair video that 254 already links.
- **Safety: yes.**
  - Sparks and burns: wear eye protection.
  - Lithium cells catch fire if shorted or overheated (Hackaday 2021 commenters).
- **Sources (opened):**
  - https://commons.wikimedia.org/wiki/File:Spot_welding_1anim.gif (animation, public domain)
  - https://hackaday.com/2021/06/16/review-battery-spot-welders-why-you-should-buy-a-proper-spot-welder/

### 10. Heat-fused plastic pipe (socket fusion, butt fusion and electrofusion of PE and PP-R pipe)
- **Description:** Polyethylene or polypropylene pipes are joined by melting the pipe end and
  the fitting on a hot tool, or with a fitting that has a heating wire built in, and pushing
  them together so they set as one piece.
- **Nearest items and why it is distinct:**
  - 139 Solvent welding works on PVC and ABS but not on PE or PP.
  - 210 Compression and 166 Push-fit fittings are mechanical.
  - Suggestion 1 is guided by hand and adds filler.
  - Fusion uses a dedicated heated tool or fitting and no filler. It is the standard joint for
    PE water and gas mains and for PP-R plumbing.
- **Family:** `welding, brazing & soldering`; other_families `seals & pass-throughs`,
  `hydraulics, pneumatics & vacuum`. **Tier:** 2.
- **Notes to cover:**
  - Socket fusion: an iron at "around 500° F", the insertion depth marked on the pipe, heating for
    5-24 s depending on size, and "DO NOT TWIST" the pipe. Hold still for 30-90 s, then let it
    cool (NIBCO/Webstone sheet based on the Aquatherm manual).
  - Butt fusion is hot-plate welding of faced pipe ends (Wikipedia 'Hot plate welding').
  - Electrofusion runs at about 40 V for a set time (Wikipedia).
- **Safety: yes.** Burns from the iron. Molten PE can "spurt out of the edge of a mis-aligned
  weld", and gas-line work needs trained, qualified fitters (Wikipedia 'Electrofusion').
- **Sources (opened):**
  - https://res.cloudinary.com/dzhpkjoqj/Nibco/PP-R-Pro-IOM-Manual.pdf (step-by-step socket-fusion sheet with a timing table)
  - https://commons.wikimedia.org/wiki/File:Electrofusion_fitting.jpg (photo, CC0)

### 11. Flare fitting (flared tube fitting, double flare)
- **Description:** The end of a soft metal tube is spread into a cone with a flaring tool and
  clamped by a nut against a matching cone, giving a metal-to-metal seal, as on car brake
  lines, gas pipes and air-conditioner pipes.
- **Nearest items and why it is distinct:** 210 Compression fitting looks the same from outside,
  but uses a ring and doesn't reshape the tube. The two "are generally not interchangeable"
  (Wikipedia 'Piping and plumbing fitting'). Flare angles don't mix either: 45° SAE versus 37°
  JIC and AN fittings "are incompatible" (Wikipedia 'Flare fitting').
- **Family:** `seals & pass-throughs`; other_families `hydraulics, pneumatics & vacuum`.
  **Tier:** 2. (If the owner prefers fewer entries, put it in 210's notes instead.)
- **Notes to cover:**
  - Double flares for high pressure, to avoid cracking.
  - Brass 45° flares for propane and natural gas copper tube (US fuel gas code).
  - The flaring tool and the flare-nut wrench. Flares are used in brake systems because they are
    "more secure against leaks and sudden failure".
- **Safety: yes.** Brake and gas lines are safety-critical, so follow the local code and use the
  right flare type.
- **Sources (opened):**
  - https://commons.wikimedia.org/wiki/File:Flare_Fitting_2.jpg (photo of a flared copper tube and brass fitting, CC BY-SA 4.0)
  - https://en.wikipedia.org/wiki/Flare_fitting

### 12. Ultrasonic weld (ultrasonic plastic welding, energy director)
- **Description:** A tool vibrating at 15-40 kHz presses two plastic parts together, and the
  vibration melts a small ridge between them in a moment, sealing them shut with no screws or
  glue, as in many sealed chargers, toys and blister packs.
- **Nearest items and why it is distinct:**
  - 61 Heat staking and 56 Heat-set insert already list "ultrasonic staking" and "ultrasonic
    insert" as aliases, but not the welded seam.
  - Suggestion 2 (friction welding) uses slower, bigger rubbing.
  - This entry answers "why won't this gadget open?". Its joint features (the energy director,
    the shear joint) can be printed into parts.
- **Family:** `welding, brazing & soldering`. **Tier:** 2.
- **Notes to cover:**
  - An energy director is "a small, raised feature", usually triangular and "0.25-0.75mm tall",
    and gives a strength-only bond. A shear joint (a moulded interference fit) "provides the best
    path to a leak-free assembly" and suits semicrystalline plastics (Dukane).
  - Printed ASA, ABS and PA6-CF test stakes ultrasonically welded to moulded PP passed a tensile
    test (Printables 833859, Printables API; page not opened).
  - Industrial cousins to mention in the notes only: laser transmission welding (one part must be
    laser-clear), infrared and hot-plate welding, and high-frequency (RF) welding of PVC
    (Wikipedia 'Plastic welding').
- **Safety: yes.** Operators "must never place hands or arms near the welding tip". 15-20 kHz
  machines give off a "potentially damaging high-pitched squeal", so wear hearing protection
  and safety glasses (Wikipedia 'Ultrasonic welding').
- **Sources (opened):**
  - https://en.wikipedia.org/wiki/Ultrasonic_welding
  - https://www.dukane.com/resources/blog/item/choosing-the-right-join-design-for-ultrasonic-plastic-bonding

## 3. Notes additions to existing items
- **166 Quick couplers:**
  - Add the cam-and-groove (camlock) coupling as a variant. Cam levers pull a grooved male
    adapter onto a gasket and lock by over-centre geometry, so add `over-centre, toggle & cam
    clamps` to other_families. It is "not recommended for any type of compressed gas service,
    including steam or air" (Wikipedia 'Cam and groove').
  - Name clash: Printables "CAMLOCK" adapters are for a dust-extraction hose system, not
    cam-and-groove (Printables 493835, 624672; Printables API; page not opened). This is on top
    of the clashes already noted in 159 and 250.
  - Plumbing push-fit ("push-to-pull") fittings can still turn after fitting and can be reused.
    The pipe needs a square, clean cut so it doesn't damage the O-ring (Wikipedia 'Piping and
    plumbing fitting').
- **133 Hose barb:** add PEX crimp and clamp rings over barbed inserts (fitted with a crimping
  tool), PEX expansion fittings (fitted with an expander tool) and PEX plugs (Wikipedia 'PEX';
  'Piping and plumbing fitting').
- **210 Compression fitting:**
  - Add the slip-joint nut and washer on sink traps (done up by hand; the pipe needn't be cut to
    an exact length).
  - Add press (crimp) fittings: an O-ring sleeve pressed with a powered tool, which is permanent
    (Wikipedia 'Piping and plumbing fitting'; https://commons.wikimedia.org/wiki/Category:Press_fittings).
  - Add that compression joints belong in accessible places and are "prohibited in concealed
    locations such as the interiors of walls".
  - Link to the new flare entry (or expand the flare notes here if suggestion 11 isn't added).
- **170 Band flange clamp:** add the grooved pipe coupling. A groove is rolled near each pipe
  end, a pressure-responsive gasket goes over the joint, and a bolted housing locks into the
  grooves; it comes in flexible and rigid types. Alias: Victaulic (brand) (Wikipedia
  'Victaulic'; 'Piping and plumbing fitting').
- **Hose clamp (if the hardware group adds it), otherwise 170:** add the rubber-sleeve
  ("no-hub") coupling: a rubber sleeve clamped with stainless worm-drive bands over plain pipe
  ends, used on drains. It tolerates slight misalignment and is hard to reuse once deformed
  (Wikipedia 'Piping and plumbing fitting').
- **139 Solvent welding:** the pipe practice is already complete (checked against the Oatey
  catalogue, pp. 32-33). Only add the new family to other_families and a `related` link to
  suggestion 10 (PE and PP pipe, which solvent can't weld).
- **229 Anaerobic adhesive:** add a `related` link to suggestion 3, where anaerobic pipe-thread
  sealant is actually used.
- **138 Two-part epoxy:** add "JB Weld (brand), often called a 'weld'" as an alias. Makers
  suggested it instead of welding in the run-3 question 18 thread.
- **266 Shaft-to-hub joints:** add welding, brazing or soldering a hub on as permanent options,
  with the point from question 18 (take the shaft out, or earth next to the weld). Note roll
  pins, which belong to the hardware group.
- **227 Silicone sealants and 232 Epoxy putty:** add a `related` link to suggestion 1 for
  watertight printed tanks (weld the seams, then seal; question 21).
- **56 Heat-set insert and 61 Heat staking:** add the new family to other_families and link to
  suggestion 1 (the same soldering iron).
- **141 Hot-melt adhesive:** add PLA "glue sticks" in a high-temperature (up to 208 °C) glue
  gun, used to join PLA prints with PLA (Hackaday 2018); link to suggestion 1.
- **226 Structural acrylic and LSE adhesives:** link its plastic-welding advice to suggestions
  1 and 2.
- **254 Bent tab and 255 Clinching:** link to suggestion 9. **209 Burn-wire:** link to
  suggestion 5.
- **305 Bellows and 306 Air-logic valve:** link to suggestion 8.
- **218 Press fit:** no change needed; shrink fit and induction heating are already covered.
- **Electrical group (cross-reference only):** soldered wire joints link to suggestion 5, and
  battery tabs to suggestion 9. That group is fetching heat-shrink tubing; its mechanical uses
  belong in that entry, not here.

## 4. Near-misses rejected
- Laser transmission welding and infrared welding of plastics: industrial machines (one part
  must be laser-clear); notes in 12 only.
- High-frequency (RF, dielectric) welding of PVC: industrial; a note in 8.
- Hot-plate, extrusion and injection plastic welding as their own entries: variants, noted in
  10 and 1.
- Metal friction, inertia and linear friction welding, and friction-stir welding of metal:
  industrial; noted in 2.
- Laser-beam and electron-beam welding of metal, including hand-held fibre-laser welders:
  costly, with a serious laser eye hazard (Wikipedia 'Laser beam welding'); at most a line in 6.
- Thermite and exothermic welding: rail and earthing conductors, not maker joint types (a
  possible note for the electrical group).
- Explosion welding, diffusion bonding and cold (pressure) welding: industrial or lab only.
- Forge welding, tack welds, weld joint preparations and weld symbols: notes in 6.
- Braze welding, cast-iron "welding" and aluminium "welding" rods: notes in 7.
- Shrink fit and induction shrink fitting: already in 218.
- Heat-shrink tubing: the electrical group.
- Wave, reflow and dip soldering: electronics production processes, not joint types.
- Soldering irons, welding machines and welding helmets: tools, not joints.
- Bolted pipe flanges: already in 131 Gasket.
- Hose clamps: the hardware group (a run-3 gap).
- PEX crimp and expansion fittings, and press fittings: notes in 133 and 210.
- Push-fit plumbing: already in 166. Solvent-welded PVC and ABS pipe: already in 139.
- Garden-hose threads: notes in 4. Click-on hose connectors: already in 166. Storz couplings:
  already in 286.
- Grooved couplings: a note in 170, not a new item (large commercial pipework and fire
  sprinklers, the same idea as a clamp).
- Pipe union and dielectric union: notes in 4.
- Leaded (lead and oakum) cast-iron hub joints: historic.
- NPT, BSP, SAE, JIC and AN size and thread tables: catalogues; link to them only.
- Active brazing of ceramics and glass-to-metal seals: niche.

## 5. Sources opened this session
- **Wikipedia,** read as plain text through the API or WebFetch:
  - Soldering; Brazing; Welding; Spot welding; Spin welding of polymers; Ultrasonic welding.
  - Hot gas welding; Plastic welding; Friction welding; Hot plate welding; Heat sealer;
    Laser beam welding; Oxy-fuel welding and cutting; Metal fume fever.
  - British Standard Pipe; National pipe thread; Thread seal tape; Pipe dope; Garden hose.
  - Flare fitting; Hose coupling; Cam and groove; Victaulic; Piping and plumbing fitting;
    Cross-linked polyethylene (PEX); Electrofusion.
- **Wikimedia Commons file and category pages:**
  - Files: Spot_welding_1anim.gif; Common_joint_types.png; Brazing_welding_tee_joint.svg;
    Kunststoffziehschweissen_Schweissschuh.jpg; Teflon_tape_wound_around_threaded_pipe.jpg;
    Electrofusion_fitting.jpg; Flare_Fitting_2.jpg; Flare_koppeling.png.
  - Categories: Spot_welding; Weld_seam_types; BSP_threads; Fittings; Solder_fittings;
    Press_fittings; Thread seal tape (through the API).
- **HSE:**
  - https://www.hse.gov.uk/safetybulletins/mild-steel-welding-fume.htm
  - https://www.hse.gov.uk/asthma/solderers.htm
  - https://www.hse.gov.uk/PUBNS/eis31.htm and https://www.hse.gov.uk/pubns/eis31.pdf
- **Manufacturers:**
  - Swagelok MS-13-77: https://www.swagelok.com.cn/downloads/webcatalogs/en/MS-13-77.pdf
  - Miller: https://www.millerwelds.com/resources/article-library/buying-your-first-welder-a-practical-informative-guide-for-doityourselfers
  - NIBCO/Webstone PP-R sheet: https://res.cloudinary.com/dzhpkjoqj/Nibco/PP-R-Pro-IOM-Manual.pdf
  - Oatey catalogue pp. 32-33: https://www.cooneybrothers.com/userfiles/ad/documents/Oatey_30850_Specification_Sheet.pdf
  - Dukane joint-design blog (above)
- **Maker sources:**
  - Hackaday: https://hackaday.com/2014/12/30/3d-printing-technique-friction-welding/,
    https://hackaday.com/2018/08/05/spot-welding-plastic/,
    https://hackaday.com/2018/02/05/3d-printering-printing-sticks-for-a-pla-hot-glue-gun/,
    https://hackaday.com/2020/05/14/fusing-plastic-sheets-with-a-3d-printer-sort-of/,
    https://hackaday.com/2021/06/16/review-battery-spot-welders-why-you-should-buy-a-proper-spot-welder/,
    https://hackaday.com/2023/05/15/zippy-plastic-welding/,
    https://hackaday.com/2026/03/07/diy-3d-pen-is-born-to-weld/
  - https://www.scorchworks.com/Blog/?p=442
  - https://vaasa.hacklab.fi/2016/06/15/friction-welding-3d-prints
  - https://www.popsci.com/how-to-spin-weld-at-home/
  - https://ricksfreeautorepairadvice.com/avoid-bondo-learn-the-right-way-to-fix-a-cracked-bumper/
  - https://blog.prusa3d.com/the-great-guide-to-gluing-and-assembling-3d-prints_44908/ (it has no
    welding guidance; welding comes up only in readers' comments)
- **Research:** Koçar, Anaç and Baysal, Polymers 2024, https://pmc.ncbi.nlm.nih.gov/articles/PMC11244055/
- **Run-3 questions,** read through the Arctic Shift archive (no usernames recorded):
  - Question 18: https://arctic-shift.photon-reddit.com/api/posts/ids?ids=1kcikdx and
    https://arctic-shift.photon-reddit.com/api/comments/tree?link_id=t3_1kcikdx&limit=200
  - Question 21: https://arctic-shift.photon-reddit.com/api/posts/ids?ids=1g4byc1 and
    https://arctic-shift.photon-reddit.com/api/comments/tree?link_id=t3_1g4byc1&limit=200
- **Printables:** read through its API only (pages not opened): 692350, 737519, 833859, 493835,
  624672, 231377, 1345884, 1057747, 1184644, 1335440.
- **Could not open:** All3DP (403), copper.org pages (401, 404 and 502), Polymaker (403),
  hackster.io (403), Instructables step pages (they render no text), and the DOAJ record (403).
  No claims depend on them.
