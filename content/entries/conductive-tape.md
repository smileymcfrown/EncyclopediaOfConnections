---
title: Conductive tape
description: Conductive tape is a thin copper foil or metal-plated fabric with a peel-off sticky back, laid down as flat 'wires'
  on paper, card, fabric or a 3D print so that LEDs, batteries and other small parts can be taped, soldered, glued or sewn
  onto it; the same copper tape is used to line boxes and guitar cavities as an electrical shield.
num: 360
term: Conductive tape (copper foil tape, conductive fabric tape)
plain_name: Sticky metal ribbon (thin copper foil, or fabric coated with metal) that you stick onto paper, card, fabric or
  a 3D print as a flat wire, then tape, solder, glue or sew small parts such as LEDs onto it
aliases:
- copper tape / copper foil tape (Wikipedia 'Copper tape'; Chibitronics 'Getting Started with Copper Tape')
- copper foil tape with conductive adhesive (conducts through the glue, e.g. 3M 1181, brand product number) versus copper
  foil tape with non-conductive adhesive (only the top face conducts, e.g. 3M 1194, brand product number) (3M data sheets;
  Chibitronics)
- EMI shielding tape / copper shielding tape / RF shielding tape (3M 1181 and 1194 data sheets; SparkFun product page; guitar-cavity
  shielding tape sold by guitar suppliers)
- slug tape / snail barrier tape (garden copper tape, which usually has non-conductive glue) (Wikipedia 'Copper tape'; Chibitronics)
- copper foil for stained glass (Tiffany-lamp foil, soldered along its length) (Wikipedia 'Copper tape'; SparkFun product
  page)
- conductive fabric tape / conductive nylon fabric tape / Ni/Cu/Co fabric tape (nickel, copper and cobalt plated fabric) (SparkFun
  'Great Big Guide to Paper Circuits'; Adafruit product 3961)
- paper circuit / paper electronics / circuit sketchbook traces (SparkFun; Chibitronics, brand)
- z-axis tape (a double-sided tape that conducts only through its thickness, used to stick parts onto traces) (SparkFun 'Great
  Big Guide to Paper Circuits')
- circuit stickers (LED stickers with conductive glue on their pads; Chibitronics, brand) (SparkFun; Chibitronics)
- metal tape / aluminium foil tape (a related tape; Wikipedia 'Copper tape' lists it under 'See also')
family: electrical connections
other_families: [adhesives & bonding]
finder:
  job: [join and hold, glue or bond]
  motion: none
  special_behaviour: []
  holding_principle: [shape, friction or clamping, material bond]
  reuse_cycles: once
  seal: none
  access_needed: one side only
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, 3D print (FDM), woodwork]
  connects: ['strap, cord or fabric', wires]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  glue_traits: []
  bonds_well: [nylon, acrylic or polycarbonate, metal, fabric or leather]
  bonds_poorly: [PLA, wood, paper or card]
  electrical_band: up to about 3 A
  tools: [soldering iron, sewing or leather tools, hand tools]
  load_max: light
  usual_process: off-the-shelf part
  adjustable: partly
  removability: semi-permanent
  power: passive
needs_confirming:
  glue_traits:
    kind: best guess
    reason: no glue traits found
  bonds_well:
    kind: source uncertain
    reason: '`materials` is marked [uncertain] here: "…s); aluminium tape can''t be soldered with ordinary electronics solder
      [uncertain: not on an opened page].…"'
  bonds_poorly:
    kind: source uncertain
    reason: '`materials` is marked [uncertain] here: "…s); aluminium tape can''t be soldered with ordinary electronics solder
      [uncertain: not on an opened page].…"'
  electrical_band:
    kind: source uncertain
    reason: '`load` is marked [uncertain] here: "Electrical: up to about 3 A [uncertain: no maker publishes a current…"'
  load_max:
    kind: best guess
    reason: electrical entry whose mechanical load has no light/medium/heavy band; set to light
confirmed: []
open_points:
- kind: sources
  note: '*Conductive tape*: guitar-shielding facts come from a vendor page (guitaranatomy.com) because StewMac and Madinter
    were blocked.'
- kind: content
  note: '*Conductive tape*: no maker publishes a current rating, so its ''up to about 3 A'' lead-in is [uncertain]; copper
    tape''s 0.08 Ω/m is labelled calculated.'
uncertain_fields: [seal, load, materials, print_in_place, making_tips_3d_printing, when_not_to_use, environment_limits, safety_notes,
  common_failures]
diagram_idea: A flat card with two copper-tape lines from a coin-cell flap to an LED, with a close-up of the fold-back corner
  in three steps, and a side-by-side cross-section of conductive-adhesive tape (particles in the glue linking two overlapped
  pieces) versus non-conductive-adhesive tape (glue layer blocking the overlap, so the end must be folded or soldered).
links:
- url: https://commons.wikimedia.org/wiki/File:5mm_copper_tape.jpg
  title: 5mm copper tape.jpg (Wikimedia Commons, by Mosborne01)
  shows: A roll of adhesive-backed copper tape for making paper electronics
  license: CC BY-SA 3.0 (reuse with credit)
- url: https://commons.wikimedia.org/wiki/File:Paper_circuit_ninja_card.jpg
  title: Paper circuit ninja card.jpg (Wikimedia Commons, by Mosborne01)
  shows: A light-up card made with copper tape and LEDs
  license: CC BY-SA 3.0 (reuse with credit)
- url: https://commons.wikimedia.org/wiki/File:CopperTapeShieldedCable.jpg
  title: CopperTapeShieldedCable.jpg (Wikimedia Commons, by Nova ryan)
  shows: A 15 kV power cable shielded with a wrapped 5 mil copper tape, showing tape used as an electrical shield
  license: CC BY-SA 4.0 (reuse with credit)
- url: https://learn.sparkfun.com/tutorials/paper-circuit-pin/all
  title: Paper Circuit Pin (SparkFun Learn)
  shows: Step-by-step photos of folding copper tape round corners, a copper-tape battery flap round a coin cell, and LED legs
    held down with clear tape
  license: link only
- url: https://chibitronics.com/copper-tape/
  title: Getting Started with Copper Tape (Chibitronics, by Jie Qi)
  shows: Video and photos comparing conductive and non-conductive adhesive tape, and the flip-and-fold method for sharp corners
    and curves
  license: link only
make_it_yourself:
- url: https://learn.sparkfun.com/tutorials/paper-circuit-pin/all
  title: Paper Circuit Pin (SparkFun Learn)
  what_it_is: 'A beginner project with a printable template: copper-tape lines with folded corners, an LED, a coin-cell flap
    and a binder-clip switch'
  license: link only
- url: https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all
  title: The Great Big Guide to Paper Circuits (SparkFun Learn)
  what_it_is: Comparison of copper tape, fabric tape, paint and ink traces, with ways to attach LEDs, SMD parts and batteries
    (clear tape, z-axis tape, conductive glue, soldering)
  license: link only
- url: https://www.printables.com/model/1785446-3d-prited-555-timer-circuit-made-with-copper-foil
  title: 3D prited 555 timer circuit - made with copper foil tape (Printables 1785446; URL from Printables API, page not opened)
  what_it_is: A printed circuit board with raised traces to lay copper foil tape on and solder to; printed at 0.12 mm layers
  license: CC0 / Public Domain (Printables 'Creative Commons — Public Domain')
- url: https://hackaday.com/2026/01/28/using-3d-printing-and-copper-tape-to-make-pcbs/
  title: Using 3D Printing And Copper Tape To Make PCBs (Hackaday, 2026)
  what_it_is: 'Write-up of the raised-trace method: design in KiCad, raise traces 0.6 mm, print, cover with copper tape and
    cut it to the traces'
  license: link only
sources:
- https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all
- https://learn.sparkfun.com/tutorials/paper-circuit-pin/all
- https://www.sparkfun.com/copper-tape-5mm-50ft.html
- https://chibitronics.com/copper-tape/
- https://chibitronics.com/tapes/
- https://chibitronics.com/troubleshooting/
- https://www.adafruit.com/product/1128
- https://www.adafruit.com/product/1127
- https://www.adafruit.com/product/3961
- https://www.farnell.com/datasheets/530748.pdf
- https://static.rapidonline.com/pdf/524067_v1.pdf
- https://www.farnell.com/datasheets/1635465.pdf
- https://en.wikipedia.org/wiki/Copper_tape
- https://en.wikipedia.org/wiki/Electromagnetic_shielding
- https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity
- https://en.wikipedia.org/wiki/Button_cell
- https://hackaday.com/2026/01/28/using-3d-printing-and-copper-tape-to-make-pcbs/
- https://help.prusa3d.com/article/pla_2062
- https://guitaranatomy.com/product/copper-shielding-tape-for-guitar-cavities-pickguards/
- https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
- https://commons.wikimedia.org/wiki/File:5mm_copper_tape.jpg
- https://commons.wikimedia.org/wiki/File:Paper_circuit_ninja_card.jpg
- https://commons.wikimedia.org/wiki/File:CopperTapeShieldedCable.jpg
- https://commons.wikimedia.org/wiki/File:Corroded_copper_tape.jpg
- https://api.printables.com/graphql/
research: research/connection-types/results/Conductive_tape_copper_foil_tape_conductive_fabric_tape.json
image: null
glossary: [clearance, form-fit--force-fit--material-bond, peel-vs-shear]
---

Conductive tape is a thin copper foil or metal-plated fabric with a peel-off sticky back, laid down as flat 'wires' on paper, card, fabric or a 3D print so that LEDs, batteries and other small parts can be taped, soldered, glued or sewn onto it; the same copper tape is used to line boxes and guitar cavities as an electrical shield.

**In plain words:** Sticky metal ribbon (thin copper foil, or fabric coated with metal) that you stick onto paper, card, fabric or a 3D print as a flat wire, then tape, solder, glue or sew small parts such as LEDs onto it. **Proper term:** Conductive tape (copper foil tape, conductive fabric tape).

**Also called:** copper tape / copper foil tape (Wikipedia 'Copper tape'; Chibitronics 'Getting Started with Copper Tape'); copper foil tape with conductive adhesive (conducts through the glue, e.g. 3M 1181, brand product number) versus copper foil tape with non-conductive adhesive (only the top face conducts, e.g. 3M 1194, brand product number) (3M data sheets; Chibitronics); EMI shielding tape / copper shielding tape / RF shielding tape (3M 1181 and 1194 data sheets; SparkFun product page; guitar-cavity shielding tape sold by guitar suppliers); slug tape / snail barrier tape (garden copper tape, which usually has non-conductive glue) (Wikipedia 'Copper tape'; Chibitronics); copper foil for stained glass (Tiffany-lamp foil, soldered along its length) (Wikipedia 'Copper tape'; SparkFun product page); conductive fabric tape / conductive nylon fabric tape / Ni/Cu/Co fabric tape (nickel, copper and cobalt plated fabric) (SparkFun 'Great Big Guide to Paper Circuits'; Adafruit product 3961); paper circuit / paper electronics / circuit sketchbook traces (SparkFun; Chibitronics, brand); z-axis tape (a double-sided tape that conducts only through its thickness, used to stick parts onto traces) (SparkFun 'Great Big Guide to Paper Circuits'); circuit stickers (LED stickers with conductive glue on their pads; Chibitronics, brand) (SparkFun; Chibitronics); metal tape / aluminium foil tape (a related tape; Wikipedia 'Copper tape' lists it under 'See also').

## How it works

The copper foil (or the metal plating on fabric tape) carries current along its length like a flat, uninsulated wire, and the sticky back holds it to the surface (Adafruit: 'the tape itself can carry current just like a wire'). Whether current also passes through the sticky layer depends on the glue: in tape with conductive adhesive, 'conductive particles in the adhesive provide the electrical path between the application substrate and the foil backing' (3M 1181 data sheet), so a piece stuck on top of another connects; tape with non-conductive adhesive 'is only conductive on the top', so overlaps must be soldered, or the end folded back so bare copper faces both ways (Chibitronics). Parts are connected by pressing their legs or pads onto the foil under clear tape, by soldering (copper only), with conductive glue or paint, or by sewing through fabric tape with conductive thread (SparkFun). Laid as a continuous sheet connected to the circuit's ground, the same foil acts as an electrical shield that blocks interference (3M data sheets; Wikipedia 'Electromagnetic shielding').

## Parts

Single piece (the tape: copper foil or metal-plated fabric, a pressure-sensitive acrylic glue layer and a peel-off paper liner, 3M; Adafruit) used with a few small parts: LEDs or LED stickers, a coin cell, clear sticky tape to hold component legs down, solder for copper tape, conductive fabric patches, conductive glue or conductive thread for fabric tape, and a binder clip or folded tape flap as a switch and battery holder (SparkFun 'Paper Circuit Pin'; SparkFun 'Great Big Guide to Paper Circuits'; Chibitronics).

## Everyday examples

- light-up greeting cards, badges and pop-up cards with copper-tape paper circuits (SparkFun 'Paper Circuit Pin'; Wikimedia Commons 'Paper circuit ninja card.jpg')
- copper tape round plant pots or tree trunks to keep slugs and snails off (Wikipedia 'Copper tape')
- copper foil wrapped round the edges of glass pieces and soldered in Tiffany-style stained-glass lamps (Wikipedia 'Copper tape'; SparkFun product page)
- copper shielding tape lining the control cavity of an electric guitar to cut hum (guitaranatomy.com shielding tape page), and the copper tape shield wrapped round some power cables (Wikimedia Commons 'CopperTapeShieldedCable.jpg')

## When to use it

For flat, low-power circuits on paper, card, books, posters, fabric or the surface of a print: light-up cards, art, classroom circuits, simple capacitive touch pads and quick prototypes where wires would be bulky (SparkFun; Chibitronics; Adafruit). Choose copper tape when you want to solder parts on for a stronger joint and for the lowest resistance; choose conductive fabric tape where the circuit is folded again and again (cards that open, accordion books) or must be sewn (Chibitronics). Use copper tape with conductive adhesive to line enclosures, cable shields or guitar cavities against interference and to make ground connections (3M 1181 data sheet), and in printed-board experiments where a quick single-sided board is enough (Hackaday 2026).

## When not to use it

For anything above small currents or above extra-low voltage: use a Soldered wire joint, a proper printed circuit board, or Wire-to-board plug connectors. Not for mains, ever. For copper tape that will be folded back and forth, which cracks: use conductive fabric tape or Conductive thread (Chibitronics). For clothing that is washed and worn: use Conductive thread or wires sewn in. For many signals through a hinge or into a moving part: use a Flat flexible cable and latching connector (FFC with ZIF connector) or the methods in Cable through a hinge. Where you can't solder and the tape has non-conductive glue, don't rely on overlapped pieces: use one continuous piece, fold the ends, or add a conductive fabric patch or Conductive glue, paint and ink (Chibitronics). Outdoors or in damp places, bare copper tarnishes and paper swells ⚑ [uncertain].

## Details

- **What it does (jobs):**
  - join and hold: flat sticky 'wires' carry current between parts on paper, card, fabric or a print and hold the parts flat (the finder reaches this entry through the 'electrical connections' family)
  - glue or bond: the tape sticks itself down, and tape with conductive glue (or fabric tape) joins to another piece just by being stuck on top (Chibitronics)
- **Movement:** none: the tape is stuck down flat. Conductive fabric tape 'does not break when folded repeatedly', so it can cross a card crease or book hinge; copper tape 'will crack if folded repeatedly' (Chibitronics 'Guide to Conductive Tapes')
- **Directions it can move (degrees of freedom):** 0: once pressed down, the tape and the parts taped or soldered to it don't move; a fold line in fabric tape can act as a hinge, but that is the card or paper moving, not the joint
- **Special behaviour:**
  - none: it is a passive flat conductor. Its useful trick is that tape with conductive glue (and fabric tape) makes a connection simply by being stuck on top of another piece, so branches and repairs can be added anywhere (Chibitronics)
- **How it holds:** [material bond](../glossary.md#form-fit--force-fit--material-bond) (glue): a pressure-sensitive acrylic adhesive holds the tape down (3M); parts are held by clear tape pressed over their legs (friction or clamping), by solder (material bond), by conductive glue, or by conductive-thread stitches through fabric tape (shape) (SparkFun 'Great Big Guide to Paper Circuits')
- **Input and output:** not applicable
- **Power:** passive (no power needed): the tape only carries the battery's current
- **Load:** Electrical: up to about 3 A ⚑ [uncertain: no maker publishes a current rating], extra-low voltage only. The solid copper foil 'can carry current just like a wire' (Adafruit product 1128); 1-ounce copper foil is 0.04 mm (1.4 mil) thick (3M 1181 and 1194 data sheets), so a 6 mm tape has a resistance of roughly 0.08 ohm per metre (calculated from copper's resistivity of 1.68 x 10^-8 ohm m, Wikipedia 'Electrical resistivity and conductivity'). The joints, not the foil, set the real limit: conductive adhesive 'can't carry significant current' (Adafruit), taped-over component legs are 'not as reliable as other methods' (SparkFun), and conductive fabric tape has 'around 3-5 ohms of resistance per foot' (Chibitronics), so fabric tape and glue-only or tape-only joints are for signals and small LEDs; soldered copper tape is the only version for more current. Typical use is LEDs on a 3 V coin cell (SparkFun). Never for mains; extra-low voltage means not more than 50 V AC or 120 V ripple-free DC (UK Approved Document P). Mechanical: light. Copper tape breaks at about 44 N per 10 mm of width and sticks to steel with about 3.8-4.4 N per 10 mm of width in a [peel](../glossary.md#peel-vs-shear) test (3M 1181 and 1194 data sheets); it tears at sharp turns and peels off paper easily (Chibitronics).
- **Play and precision:** not applicable
- **Taking it apart:** semi-permanent: the tape can be peeled off but usually wrinkles or tears the paper and is not reused; parts held only by clear tape can be lifted and moved, and fabric-tape patches let a circuit sticker be reused (Chibitronics); soldered parts need desoldering, which Hackaday notes is harder than soldering on tape laid over a 3D print (Hackaday 2026)
- **How often it can be reused:** once for the tape itself; a few times for parts held on with clear tape or conductive fabric patches (Chibitronics: a patch 'makes it possible to reuse a Circuit Sticker many times')
- **Sealing:** none: the top of the foil is bare metal and the tape gives no protection from water ⚑ [uncertain: no opened page discusses waterproofing; covering lines with clear tape or paper also helps stop accidental shorts]
- **Adjustable:** partly: the layout is fixed once stuck down, but new branches can be added anywhere by sticking conductive-adhesive tape or fabric tape on top of an existing line, and weak spots can be patched the same way (Chibitronics)
- **Access needed:** one side only (blind): the tape and the parts all go on the same face; a battery flap or a tape line that wraps over an edge to the back needs both sides (SparkFun 'Paper Circuit Pin')
- **Materials:** Copper tape: 'deadsoft 1-ounce copper foil' 0.04 mm thick with a conductive or non-conductive acrylic pressure-sensitive adhesive, 0.066 mm total (3M 1181, 1194); hobby rolls are about 3 mil (0.07 mm) thick and 5-6 mm wide (SparkFun; Adafruit). The copper is solderable and 'resists oxidation and discoloration' (3M). Conductive fabric tape: nylon fabric plated with nickel, copper and cobalt, with conductive glue (SparkFun; Adafruit product 3961); it 'cannot be soldered' (Chibitronics) but can be sewn (Adafruit). Sticks well to paper and cardstock (SparkFun projects), smooth 3D prints (Hackaday 2026), wood and plastic enclosure walls; wrinkled foil makes poor contact and should be burnished flat (Chibitronics). PLA prints soften above about 60 °C, so soldering onto tape laid over PLA must be quick (Prusa 'PLA'; Hackaday 2026). Garden and hardware-store copper tapes usually have non-conductive adhesive (SparkFun; Chibitronics); aluminium tape can't be soldered with ordinary electronics solder ⚑ [uncertain: not on an opened page].
- **Heat, cold, water and wear:** Heat: the copper and its glue are made for electronics and pass the UL 510 flame test (3M data sheets), but the surface the tape is stuck to usually gives out first: PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa 'PLA'), and paper scorches under a soldering iron ⚑ [uncertain]. Flexing: copper tape 'will crack if folded repeatedly' and 'can accidentally tear at turns'; fabric tape 'does not break when folded repeatedly' (Chibitronics). Surface condition: smooth the copper 'so that it's shiny, bright and has a solid connection' (Chibitronics 'Troubleshooting'); dusty or greasy surfaces hold the glue less well ⚑ [uncertain]. Corrosion: 3M's copper foil 'resists oxidation and discoloration', but bare copper stored for a long time does oxidise (Wikimedia Commons 'Corroded copper tape.jpg' description); polish tarnished foil before soldering ⚑ [uncertain]. Joints between pieces of conductive-adhesive tape become less reliable over time (Chibitronics).

## Making it

- **Ways to make or get it:**
  - off-the-shelf part (copper foil tape, conductive fabric tape, fabric tape patches, circuit stickers)
  - hand-applied papercraft (paper circuits, cards, books; SparkFun; Chibitronics)
  - 3D print (FDM): a printed board with raised traces that copper tape is laid over and trimmed to (Hackaday 2026; Printables 1785446)
  - woodwork, 3D print or sheet enclosures lined with copper tape as a shield (3M; guitar-cavity shielding)
- **Printing it in one piece (print in place):** no: the tape is applied after printing; at most a print can be paused to lay tape between layers ⚑ [uncertain: not tried on an opened page]
- **Tools:** scissors or craft knife (fabric tape 'requires scissors to cut'; copper tape can be torn by hand, Chibitronics), a fingernail, pen or pencil eraser to crease corners and burnish the foil flat (SparkFun; Chibitronics), clear sticky tape, tweezers for small surface-mount parts, a soldering iron and solder for copper tape, a needle and conductive thread or conductive glue for fabric tape (SparkFun), and a multimeter with continuity beeper to find breaks and shorts
- **Difficulty:** easy: peel and stick, 'one of the easiest ways to get started crafting a paper circuit' (SparkFun); the fiddly parts are neat corners, reliable joints between pieces, and soldering on paper without burning it

### 3D printing tips

Tape on a print: put tape on the smoothest face (the top surface or the bed side) and burnish it flat, since wrinkled foil makes poor contact (Chibitronics). Printed 'PCB' method (Hackaday 2026, from QWZ Labs): export the board design from KiCad, raise the traces 0.6 mm in CAD, print, cover with copper tape, cut along the raised edges and peel away the waste; use wide traces (about 2 mm) with plenty of [clearance](../glossary.md#clearance), holes of at least about 1 mm, and the Arachne wall generator to avoid voids. A published example recommends 0.12 mm layers and printing slowly so the holes come out at size (Printables 1785446). Heat: PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa), and Hackaday notes it 'both softens and melts easily' when soldered, so solder quickly with a hot iron, or print the board in a more heat-resistant plastic ⚑ [uncertain: which plastic works best was not tested on an opened page]. Shielding a printed enclosure: line the inside with copper tape that has conductive adhesive (3M 1181), overlap the seams, and connect the foil to the circuit's ground; gaps must be much smaller than the wavelength being blocked (Wikipedia 'Electromagnetic shielding'). Design printed slots or recesses for coin cells so the tape lines can't be pressed onto both faces of the cell at once and short it ⚑ [uncertain].

### Buying one (off-the-shelf parts)

Search terms: 'copper foil tape with conductive adhesive' (e.g. 3M 1181, Adafruit 1128 6 mm and 1127 25 mm, brand product numbers), 'copper foil tape' with non-conductive adhesive (e.g. 3M 1194; SparkFun PRT-10561 5 mm), 'EMI shielding tape', 'copper shielding tape' (guitar cavity), 'conductive fabric tape' or 'conductive nylon fabric tape' (Adafruit 3961 5 mm, 3960 8 mm), 'nylon fabric squares with conductive adhesive', 'Chibitronics circuit stickers' and 'conductive fabric tape patches' (brand), 'z-axis conductive tape', 'CR2032 coin cell', 'sewable coin cell holder' or coin cells with solder tabs (SparkFun), 'binder clip' for a switch, 'conductive thread', 'conductive glue'. Don't buy garden 'slug tape' for circuits unless the label says the adhesive conducts (SparkFun; Chibitronics).

## Rules of thumb

- Check the glue before you buy: tape with conductive adhesive conducts through the glue (3M 1181: 0.005 ohm through the adhesive over 1 square inch at 5 psi, https://www.farnell.com/datasheets/530748.pdf); tape with non-conductive adhesive (3M 1194, https://www.farnell.com/datasheets/1635465.pdf) conducts only on top. Garden copper tape's 'adhesive is probably not conductive' (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all).
- Use one continuous piece of tape between parts and turn corners by folding, not by cutting and overlapping: stick the tape up to the corner, fold it back on itself, crease it, then swing it round the corner and press it flat (SparkFun, https://learn.sparkfun.com/tutorials/paper-circuit-pin/all); or flip it sticky-side-up away from the turn, then flip it back towards the turn and flatten (Chibitronics, https://chibitronics.com/copper-tape/). 'The thinner your tape, the sharper you can make the turns' (Chibitronics).
- If you must join two pieces of non-conductive-adhesive tape, solder them or fold the end so 'exposed copper is on both sides of the tape', then hold it with ordinary tape (Chibitronics, https://chibitronics.com/copper-tape/). Even with conductive adhesive, overlaps 'are still far less durable over time than continuous lines' (Chibitronics); use a large overlap, press hard, or bridge with a conductive fabric patch (Chibitronics, https://chibitronics.com/troubleshooting/).
- Leave gaps in the tape where parts sit, and bridge each gap with the part's legs (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all). 5 mm tape is a good width for craft-sized circuits (SparkFun).
- Resistance compared (figures side by side): conductive fabric tape about 3-5 ohms per foot, about 10-16 ohms per metre (Chibitronics, https://chibitronics.com/tapes/) or 'a few ohms per foot' (Adafruit, https://www.adafruit.com/product/3961); 6 mm copper tape about 0.08 ohm per metre (calculated from 0.04 mm copper, 3M, and copper's resistivity, Wikipedia https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity). So fabric tape is roughly 100-200 times more resistive per length (calculated); keep fabric-tape runs short.
- Copper tape is the only one of the paper-circuit trace materials you can solder to: 'you cannot solder to conductive paints, inks, or most fabrics' (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all). For fabric tape, sew over the leads with conductive thread or use conductive glue (SparkFun).
- Printed board under copper tape: traces raised 0.6 mm, about 2 mm wide with generous clearance, holes at least about 1 mm (Hackaday, https://hackaday.com/2026/01/28/using-3d-printing-and-copper-tape-to-make-pcbs/).
- Shielding: copper tape with conductive adhesive gave 60-80 dB of shielding and the non-conductive-adhesive version 50-60 dB in 3M's far-field test from 30 MHz to 1 GHz (3M 1181 and 1194 data sheets). Holes in a shield must be 'significantly smaller than the wavelength' (Wikipedia, https://en.wikipedia.org/wiki/Electromagnetic_shielding).
- 'Never solder directly to a coin cell battery!': use a holder or a cell with solder tabs (SparkFun, https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all).

## Common failures

(1) Light flickers or stays off because two pieces of tape were overlapped and the glue doesn't conduct; solder the joint, fold the ends so copper faces both ways, or patch it with conductive fabric tape (Chibitronics). (2) Crack or tear at a corner or fold; fold corners instead of cutting, use fabric tape across hinges, or bridge the crack by soldering or with a strip of tape stuck upside-down over it (Chibitronics 'Troubleshooting'). (3) Poor contact under taped-on LEDs because the foil is wrinkled or the part isn't pressed down; burnish the foil flat with a pencil eraser (and clear away the crumbs) and press the pads firmly (Chibitronics). (4) LED in backwards; flip the battery to test (Chibitronics). (5) Short circuit across the battery (Chibitronics). (6) Fabric tape scorched by a soldering iron, since it 'cannot be soldered' (Chibitronics; Adafruit). (7) A shield that doesn't work because overlapped pieces of non-conductive-adhesive tape are not connected to each other or to ground; use conductive-adhesive tape or solder the seams ⚑ [uncertain: inferred from the 3M data sheets and Chibitronics, not from a shielding test]. (8) PLA board warped under the soldering iron (Hackaday 2026).

## Safety

CUTS: 'Copper tape can give you a nasty paper cut, please be careful!' (SparkFun); copper tape has 'sharper edges' than fabric tape (Chibitronics), so fabric tape is the better choice for young children. SHORT CIRCUITS: if the + and - lines touch, 'you will drain power from the battery rather than turning on the light' (Chibitronics 'Troubleshooting'); keep the two battery lines apart and check with a meter. COIN CELLS: 'Button cells are dangerous for small children, as when swallowed they can cause severe internal burns and significant injury or death', and cells 20 mm or more across cause the worst injuries (Wikipedia 'Button cell'): use a holder or tape flap a child can't open, and keep spares away from children. Never solder directly to a coin cell (SparkFun). SOLDERING: the iron can scorch paper and soften PLA (Prusa; Hackaday 2026); work on a heat-proof mat and park the iron in its stand ⚑ [uncertain: general soldering practice]. MAINS: never use conductive tape for mains wiring; it is for extra-low voltage only (not more than 50 V AC or 120 V ripple-free DC, UK Approved Document P), and any mains work must follow local law (in England, Approved Document P covers electrical installation work in homes).

## Related

- Conductive thread (sewn circuit, e-textile stitching): stitched lines instead of taped ones, for soft and washable projects; higher resistance than copper tape
- Conductive glue, paint and ink (electrically conductive adhesive, silver epoxy): painted or drawn traces, and the way to attach parts to fabric tape or ink where solder won't work
- Soldered wire joint (soldered splice): the stronger, lower-resistance way to join wires; copper tape can be soldered the same way
- Double-sided foam tape (acrylic foam pressure-sensitive adhesive): the same kind of sticky backing, but it only holds parts and doesn't conduct
- Battery holder and battery contacts (spring battery contact, coin-cell holder): a proper holder instead of a copper-tape flap round a coin cell
- Flat flexible cable and latching connector (FFC with ZIF connector): the factory-made flat cable for many signals through hinges and into moving parts
- Wire-to-board plug connectors (pin header and crimp housing): the plug-in way to connect wires to a board
- Cable through a hinge (hollow hinge pin, cable on the pivot axis, service loop): how to route a conductor across a moving joint

## Make it yourself

- [Paper Circuit Pin (SparkFun Learn)](https://learn.sparkfun.com/tutorials/paper-circuit-pin/all): A beginner project with a printable template: copper-tape lines with folded corners, an LED, a coin-cell flap and a binder-clip switch *(licence: link only)*
- [The Great Big Guide to Paper Circuits (SparkFun Learn)](https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all): Comparison of copper tape, fabric tape, paint and ink traces, with ways to attach LEDs, SMD parts and batteries (clear tape, z-axis tape, conductive glue, soldering) *(licence: link only)*
- [3D prited 555 timer circuit - made with copper foil tape (Printables 1785446; URL from Printables API, page not opened)](https://www.printables.com/model/1785446-3d-prited-555-timer-circuit-made-with-copper-foil): A printed circuit board with raised traces to lay copper foil tape on and solder to; printed at 0.12 mm layers *(licence: CC0 / Public Domain (Printables 'Creative Commons — Public Domain'))*
- [Using 3D Printing And Copper Tape To Make PCBs (Hackaday, 2026)](https://hackaday.com/2026/01/28/using-3d-printing-and-copper-tape-to-make-pcbs/): Write-up of the raised-trace method: design in KiCad, raise traces 0.6 mm, print, cover with copper tape and cut it to the traces *(licence: link only)*

## Pictures, videos and models

- [5mm copper tape.jpg (Wikimedia Commons, by Mosborne01)](https://commons.wikimedia.org/wiki/File:5mm_copper_tape.jpg): A roll of adhesive-backed copper tape for making paper electronics *(licence: CC BY-SA 3.0 (reuse with credit))*
- [Paper circuit ninja card.jpg (Wikimedia Commons, by Mosborne01)](https://commons.wikimedia.org/wiki/File:Paper_circuit_ninja_card.jpg): A light-up card made with copper tape and LEDs *(licence: CC BY-SA 3.0 (reuse with credit))*
- [CopperTapeShieldedCable.jpg (Wikimedia Commons, by Nova ryan)](https://commons.wikimedia.org/wiki/File:CopperTapeShieldedCable.jpg): A 15 kV power cable shielded with a wrapped 5 mil copper tape, showing tape used as an electrical shield *(licence: CC BY-SA 4.0 (reuse with credit))*
- [Paper Circuit Pin (SparkFun Learn)](https://learn.sparkfun.com/tutorials/paper-circuit-pin/all): Step-by-step photos of folding copper tape round corners, a copper-tape battery flap round a coin cell, and LED legs held down with clear tape *(licence: link only)*
- [Getting Started with Copper Tape (Chibitronics, by Jie Qi)](https://chibitronics.com/copper-tape/): Video and photos comparing conductive and non-conductive adhesive tape, and the flip-and-fold method for sharp corners and curves *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 12 sentences on this page marked [uncertain].
- ⚑ Finder value `glue_traits` =  (best guess): no glue traits found
- ⚑ Finder value `bonds_well` = nylon, acrylic or polycarbonate, metal, fabric or leather (source uncertain): `materials` is marked ⚑ [uncertain] here: "…s); aluminium tape can't be soldered with ordinary electronics solder ⚑ [uncertain: not on an opened page].…"
- ⚑ Finder value `bonds_poorly` = PLA, wood, paper or card (source uncertain): `materials` is marked ⚑ [uncertain] here: "…s); aluminium tape can't be soldered with ordinary electronics solder ⚑ [uncertain: not on an opened page].…"
- ⚑ Finder value `electrical_band` = up to about 3 A (source uncertain): `load` is marked ⚑ [uncertain] here: "Electrical: up to about 3 A ⚑ [uncertain: no maker publishes a current…"
- ⚑ Finder value `load_max` = light (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light
- ⚑ Research note: *Conductive tape*: no maker publishes a current rating, so its 'up to about 3 A' lead-in is [uncertain]; copper tape's 0.08 Ω/m is labelled calculated.

## Sources

- <https://learn.sparkfun.com/tutorials/the-great-big-guide-to-paper-circuits/all>
- <https://learn.sparkfun.com/tutorials/paper-circuit-pin/all>
- <https://www.sparkfun.com/copper-tape-5mm-50ft.html>
- <https://chibitronics.com/copper-tape/>
- <https://chibitronics.com/tapes/>
- <https://chibitronics.com/troubleshooting/>
- <https://www.adafruit.com/product/1128>
- <https://www.adafruit.com/product/1127>
- <https://www.adafruit.com/product/3961>
- <https://www.farnell.com/datasheets/530748.pdf>
- <https://static.rapidonline.com/pdf/524067_v1.pdf>
- <https://www.farnell.com/datasheets/1635465.pdf>
- <https://en.wikipedia.org/wiki/Copper_tape>
- <https://en.wikipedia.org/wiki/Electromagnetic_shielding>
- <https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity>
- <https://en.wikipedia.org/wiki/Button_cell>
- <https://hackaday.com/2026/01/28/using-3d-printing-and-copper-tape-to-make-pcbs/>
- <https://help.prusa3d.com/article/pla_2062>
- <https://guitaranatomy.com/product/copper-shielding-tape-for-guitar-cavities-pickguards/>
- <https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf>
- <https://commons.wikimedia.org/wiki/File:5mm_copper_tape.jpg>
- <https://commons.wikimedia.org/wiki/File:Paper_circuit_ninja_card.jpg>
- <https://commons.wikimedia.org/wiki/File:CopperTapeShieldedCable.jpg>
- <https://commons.wikimedia.org/wiki/File:Corroded_copper_tape.jpg>
- <https://api.printables.com/graphql/>
