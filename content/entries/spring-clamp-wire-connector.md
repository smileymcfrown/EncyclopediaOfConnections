---
title: Spring-clamp wire connector
description: 'A spring-clamp wire connector joins wires, or lands them on a board or terminal block, with a pre-loaded spring
  instead of a screw: each stripped wire has its own spring clamp, opened by a lever or button or simply pushed past by a
  stiff wire, which presses it onto a tinned copper bar with the same force every time, so the joint needs no tool, never
  needs tightening and can be undone and reused.'
num: 349
term: Spring-clamp wire connector (lever connector, push-in wire connector; spring-clamp terminal)
plain_name: 'A small clear plastic block with a spring inside for each wire: you lift a little lever (or, on push-in types,
  just push a stiff wire in), the spring grips the bare copper with its own built-in force, and later you lift the lever (or
  twist and pull) to get the wire out again'
aliases:
- lever connector, lever splicing connector, lever nut; 'Wago' (brand) and 'Lever-Nuts' (WAGO trade name, brand) are often
  used for any lever connector (AutomationDirect WAGO 221 catalogue; Hackaday 2023)
- push-in wire connector, push-in connector, poke-home connector, push wire connector; PUSH WIRE (WAGO, brand) and In-Sure
  (Ideal, brand) are product names (SparkFun 'Connector Basics'; WAGO 'Connection technology'; Ideal In-Sure instructions)
- 'spring terminal, spring-clamp terminal, cage clamp, spring-pressure connection; CAGE CLAMP and Push-in CAGE CLAMP are WAGO
  (brand) names (SparkFun ''Connector Basics'': spring terminals ''a.k.a. push-in, cage-clamp, or poke-home connectors'';
  WAGO)'
- splicing connector, compact splicing connector, junction box connector (Wikipedia 'WAGO 221'; WAGO 'Connection technology')
- PCB spring terminal, push-button terminal block, lever-type PCB terminal (SparkFun 'Spring Terminals - PCB Mount'; Same
  Sky TB0015-500)
- spring speaker terminal, spring-clip speaker terminal (SparkFun 'Speaker Terminal - 4 Spring'); Wikipedia notes speaker
  binding posts that are 'screwed down or held down by a spring' (Wikipedia 'Speaker wire')
- 'Fahnestock clip: the historic one-piece spring clip, patented in 1907 (Wikipedia ''Fahnestock clip'')'
- 'maintenance-free (MF) connector or junction box: UK term for screwless terminals that pass the BS 5733 tests (IET Wiring
  Matters, Spring 2012)'
- screwless terminal (IET Wiring Matters 2012, quoting BS 5733)
family: electrical connections
other_families:
- quick-release & tool-free
- clamping, magnetic & friction connections
finder:
  job: [join and hold, 'lock, and release by hand']
  motion: none
  special_behaviour: [quick-release, hand-release only]
  holding_principle: [spring force, friction or clamping]
  reuse_cycles: many times
  seal: none
  access_needed: one side only
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, 3D print (FDM)]
  connects: [wires]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  electrical_band: up to about 30 A
  tools: [crimper, hand tools]
  load_max: light
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: tool-free quick release
  power: passive
needs_confirming:
  reuse_cycles:
    kind: source uncertain
    reason: '`reuse_cycles` is marked [uncertain] here: "…y times for lever types, which are made to be opened and closed
      again [uncertain:…"'
  load_max:
    kind: best guess
    reason: electrical entry whose mechanical load has no light/medium/heavy band; set to light
confirmed: []
open_points:
- kind: content
  note: '*Spring-clamp wire connector*: no pull-out figure and no rated number of lever open/close cycles could be found ([uncertain]).'
uncertain_fields: [reuse_cycles, load, environment_limits, safety_notes, common_failures]
diagram_idea: 'Three side-by-side cut-aways: a lever connector with the lever up (spring bent open, stripped wire sliding
  in) and lever down (spring pressing the wire onto the copper bar); a push-in connector with a solid wire pushing the spring
  aside and an arrow showing ''twist and pull'' to remove it; and a Fahnestock clip with its tab pressed down to open the
  hole.'
links:
- url: https://commons.wikimedia.org/wiki/File:WAGO_221_mechanism.png
  title: WAGO 221 mechanism.png (Wikimedia Commons, by im_tau)
  shows: 'Diagram of the inside of a lever connector: lever, spring, copper busbar and test contact'
  license: CC BY 4.0
- url: https://commons.wikimedia.org/wiki/File:Cage_Clamp.jpg
  title: Cage Clamp.jpg (Wikimedia Commons, WAGO design department)
  shows: A spring-force cage clamp with a conductor in it
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:WAGO_2273-200C.JPG
  title: WAGO 2273-200C.JPG (Wikimedia Commons, by Dmitry G)
  shows: Push-in (push wire) splicing connectors
  license: CC BY-SA 3.0 or GFDL 1.2+
- url: https://commons.wikimedia.org/wiki/File:Fahnestock_clip.png
  title: Fahnestock clip.png (Wikimedia Commons, from a 1912 Central Scientific Co. catalogue)
  shows: Drawing of a Fahnestock clip gripping a stripped wire, released by pushing the tab down
  license: Public domain in the US (published before 1923)
- url: https://cdn.automationdirect.com/static/specs/221serieslevernuts.pdf
  title: WAGO 221 Series LEVER-NUTS catalogue pages (AutomationDirect)
  shows: Photos of the open-lever, insert-wire, close-lever steps, correct strip length and insertion seen through the clear
    housing, ratings tables and the gel-filled box
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/1364964-parametric-wago-221-lever-nut-holder
  title: Parametric Wago 221 lever nut holder (Adam, Printables) (URL from Printables API, page not opened)
  what_it_is: OpenSCAD parametric bracket that lever connectors snap into, with screw ears; designer advises test-printing
    one slot first and warns of creep in PLA
  license: Creative Commons Attribution-ShareAlike
- url: https://www.printables.com/model/941104-wago-221-mount-11-variations
  title: WAGO 221 Mount - 11 Variations (VC Design, Printables) (URL from Printables API, page not opened)
  what_it_is: Snug-fit mounts for 3- and 5-way lever connectors, fixed with two M3 bolts, with a poke-through hole to release
    the connector
  license: Creative Commons Attribution
- url: https://www.printables.com/model/551482-wago-221-power-distribution-block
  title: Wago 221 Power Distribution Block (Printables) (URL from Printables API, page not opened)
  what_it_is: Printed block holding several lever connectors to share a power feed, with magnet, screw and hang-tab mounting
    options and STEP files for remixing
  license: Creative Commons Attribution
- url: https://www.printables.com/model/66531-wago-221-mounts
  title: Wago 221 mounts (fns720, Printables) (URL from Printables API, page not opened)
  what_it_is: Simple screw-on mounts for 3- and 5-way lever connectors, with Fusion 360 source
  license: Creative Commons Attribution-NonCommercial-ShareAlike
sources:
- https://en.wikipedia.org/wiki/WAGO_221
- https://en.wikipedia.org/wiki/Fahnestock_clip
- https://en.wikipedia.org/wiki/High_resistance_connection
- https://en.wikipedia.org/wiki/Speaker_wire
- https://learn.sparkfun.com/tutorials/connector-basics/all
- https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
- https://cdn.automationdirect.com/static/specs/221serieslevernuts.pdf
- https://www.wago.com/au/products/electrical-interconnections/connection-technology
- https://www.wago.com/gb/electrical-interconnections/splicing-connectors-221
- https://assets.testequity.com/te1/Documents/pdf/Ideal/Ideal_30-087J_Instructions_0924.pdf
- https://rapidonline.com/21-5768
- https://www.farnell.com/datasheets/4790133.pdf
- https://electrical.theiet.org/media/1534/accessibility-of-connections-and-maintenance-free-junction-boxes.pdf
- https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
- https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303
- https://help.prusa3d.com/article/pla_2062
- https://commons.wikimedia.org/wiki/File:WAGO_221_mechanism.png
- https://commons.wikimedia.org/wiki/File:Cage_Clamp.jpg
- https://commons.wikimedia.org/wiki/File:WAGO_2273-200C.JPG
- https://commons.wikimedia.org/wiki/File:Fahnestock_clip.png
- https://api.printables.com/graphql/
research: research/connection-types/results/Springclamp_wire_connector_lever_connector_pushin_wire_connector.json
image: null
glossary: [tolerance, form-fit--force-fit--material-bond, creep, infill, overhang--bridging]
---

A spring-clamp wire connector joins wires, or lands them on a board or terminal block, with a pre-loaded spring instead of a screw: each stripped wire has its own spring clamp, opened by a lever or button or simply pushed past by a stiff wire, which presses it onto a tinned copper bar with the same force every time, so the joint needs no tool, never needs tightening and can be undone and reused.

**In plain words:** A small clear plastic block with a spring inside for each wire: you lift a little lever (or, on push-in types, just push a stiff wire in), the spring grips the bare copper with its own built-in force, and later you lift the lever (or twist and pull) to get the wire out again. **Proper term:** Spring-clamp wire connector (lever connector, push-in wire connector; spring-clamp terminal).

**Also called:** lever connector, lever splicing connector, lever nut; 'Wago' (brand) and 'Lever-Nuts' (WAGO trade name, brand) are often used for any lever connector (AutomationDirect WAGO 221 catalogue; Hackaday 2023); push-in wire connector, push-in connector, poke-home connector, push wire connector; PUSH WIRE (WAGO, brand) and In-Sure (Ideal, brand) are product names (SparkFun 'Connector Basics'; WAGO 'Connection technology'; Ideal In-Sure instructions); spring terminal, spring-clamp terminal, cage clamp, spring-pressure connection; CAGE CLAMP and Push-in CAGE CLAMP are WAGO (brand) names (SparkFun 'Connector Basics': spring terminals 'a.k.a. push-in, cage-clamp, or poke-home connectors'; WAGO); splicing connector, compact splicing connector, junction box connector (Wikipedia 'WAGO 221'; WAGO 'Connection technology'); PCB spring terminal, push-button terminal block, lever-type PCB terminal (SparkFun 'Spring Terminals - PCB Mount'; Same Sky TB0015-500); spring speaker terminal, spring-clip speaker terminal (SparkFun 'Speaker Terminal - 4 Spring'); Wikipedia notes speaker binding posts that are 'screwed down or held down by a spring' (Wikipedia 'Speaker wire'); Fahnestock clip: the historic one-piece spring clip, patented in 1907 (Wikipedia 'Fahnestock clip'); maintenance-free (MF) connector or junction box: UK term for screwless terminals that pass the BS 5733 tests (IET Wiring Matters, Spring 2012); screwless terminal (IET Wiring Matters 2012, quoting BS 5733).

## How it works

Inside, a flat spring is pre-loaded so it presses toward a tinned copper bar. Lifting the lever (or pressing a button or tab with a screwdriver or pen tip on board-mounted types) bends the spring open; you push the stripped wire in to the stop and close the lever, and the spring pinches the wire against the bar (Wikipedia 'WAGO 221'; SparkFun 'Connector Basics'). Push-in types have no lever: a stiff wire pushes the spring aside as it goes in ('The conductor rigidity is used to offset the clamping force'), and it can't be pulled straight out; you free it by 'simultaneously twisting and pulling', or with a release tool (WAGO 'Connection technology'; Ideal In-Sure instructions). Because the spring, not your hand, sets the force, 'the tension is automatically adjusted to the wire gauge', and the spring follows the wire as it expands and contracts with temperature (SparkFun 'Connector Basics'). A Fahnestock clip works the same way in one piece: press its tab to open a hole, slip the wire in and let go (Wikipedia 'Fahnestock clip').

## Parts

A small assembly that acts as one unit: a transparent plastic housing (polycarbonate on WAGO 221), one spring-steel clamp per wire, a tinned copper current bar linking them, and on lever types one nylon lever per wire; many have holes for meter probes (test ports) (Wikipedia 'WAGO 221'; WAGO 'Connection technology'; AutomationDirect catalogue). PCB versions have a push button or small lever per way (Same Sky TB0015-500; SparkFun). A Fahnestock clip is a single bent strip of springy metal (Wikipedia 'Fahnestock clip').

## Everyday examples

- Clear lever connectors joining the wires of a ceiling light or inside a junction box (Wikipedia 'WAGO 221'; Hackaday 2023)
- The spring clips on the back of home stereo speakers and amplifiers (SparkFun 'Speaker Terminal - 4 Spring')
- Small push-tab terminals on hobby boards that you press with a pen to release the wire (SparkFun: gamer:bit)
- Fahnestock clips on school electricity kits and home-made crystal radios (Wikipedia 'Fahnestock clip')
- Lever connectors in printed mounts inside 3D printers and Voron-style printer wiring (Printables)

## When to use it

When you want a joint that is quick, needs no special tool or skill, and can be opened again: prototypes, test rigs, 3D-printer and robot wiring that will change, and joining different wire types, e.g. solid to flexible ('By using a seperate lever and contact for each wire to be joined, the Wago connector can be used to join different wire types and gauges quite easily', Hackaday 2023). Good where screws would loosen with vibration or temperature cycling (SparkFun 'Connector Basics'). The clear body lets you check strip length and insertion, and test ports let you probe without opening it (Wikipedia 'WAGO 221'; WAGO 221 page). Push-in types are the fastest for solid wire; PCB spring terminals suit boards whose wires are changed often (SparkFun). In UK buildings, screwless connectors in boxes certified maintenance-free (marked MF to BS 5733) may go where they can't be reached later, unlike screw connector strips (IET Wiring Matters 2012).

## When not to use it

Not inside a slim cable or where size and weight matter: it is far bulkier than a Crimped butt splice or Soldered wire joint, which suit permanent in-line joins. Not for flexible (fine-stranded) wire in a push-in type, which can't push the spring open and isn't reusable there (Ideal; WAGO): use a lever type or fit ferrules. Not outdoors, buried or in damp places unless inside a gel-filled or sealed box (AutomationDirect: Gelbox for 'Wet locations, outdoor, moisture-prone'). Not on aluminium wire without the maker's approval and paste (Wikipedia 'WAGO 221'; Ideal: 'Do Not Use on Aluminum wire'). Not as the cable's anchor: fix the cable separately (IET Wiring Matters 2012, BS 7671 reg. 522.8.5). Not above its temperature rating, e.g. next to heaters; standard WAGO 221 connectors have 'a maximum operating temperature of 85 °C' (Wikipedia 'WAGO 221'). For a cheap, compact row of board connections where vibration isn't a worry, a Screw terminal does the same job.

## Details

- **What it does (jobs):**
  - join and hold: joins two, three, five or more wires in one block, or lands a wire on a circuit board or terminal block, without tools (AutomationDirect catalogue); the finder reaches it through the 'electrical connections' family
  - lock, and release by hand: lever types let go of a wire when the lever is lifted and grip it again when it is closed
- **Movement:** none once wired; the lever only moves while you fit or remove a wire.
- **Directions it can move (degrees of freedom):** 0: the clamped wires can't move.
- **Special behaviour:**
  - quick-release: lever types open and close by hand: 'Lever-operated termination — no tools required' (AutomationDirect catalogue). The spring also sets its own clamping force for each wire size, so there is nothing to tighten (SparkFun 'Connector Basics')
  - hand-release only: push-in types hold a wire against a pull and let go only when you twist it while pulling, or press the release with a tool: 'An operating tool is always required to remove the conductor' from a Push-in CAGE CLAMP terminal (WAGO 'Connection technology'; Ideal In-Sure instructions)
- **How it holds:**
  - spring force (a spring or springy part presses it in place): a pre-loaded clamp of 'chrome nickel spring steel' presses the wire onto a tinned copper current bar (WAGO 'Connection technology')
  - friction or clamping ([force-fit](../glossary.md#form-fit--force-fit--material-bond)): the spring's pinch holds the wire by friction; push-in types resist a straight pull and release only when the wire is twisted (WAGO; Ideal; a Hackaday 2023 commenter on WAGO 2273: solid wires 'can not be pulled from those unless you twist them')
- **Input and output:** not applicable
- **Power:** passive (no power needed)
- **Load:** Electrical: up to about 30 A (WAGO 221 lever connectors: 20 A for the 24-12 AWG size and 30 A for the 20-10 AWG size under UL, 'Up to 32A' and 'Up to 41A' under IEC, depending on wire size (AutomationDirect catalogue); WAGO 2273 push-in: 24 A (Rapid Online product page); PCB spring terminal blocks around 10 A UL / 17.5 A IEC (Same Sky TB0015-500)); rated for mains (WAGO 221: 600 V under UL 486C and 450 V under EN 60998 (AutomationDirect); Ideal In-Sure: '600 volts maximum building wire' (Ideal instructions)), but mains work must follow local law, see safety_notes. Mechanical: light to medium: the spring holds the wire firmly against vibration (SparkFun 'Connector Basics'; AutomationDirect: 'vibration-resistant'), but the small plastic body is not meant to carry the cable's weight or a tug, so fix the cables nearby ⚑ [uncertain: no pull-out figure found on an opened page].
- **Play and precision:** not applicable
- **Taking it apart:** tool-free quick release for lever types (lift the lever and pull the wire out); push-in types are removable by twisting and pulling a solid wire, or with an operating tool for Push-in CAGE CLAMP and push-button PCB terminals (WAGO 'Connection technology'; Ideal In-Sure instructions; SparkFun).
- **How often it can be reused:** many times for lever types, which are made to be opened and closed again ⚑ [uncertain: no rated number of cycles found on an opened page]; only a few times for push-in types, and only on solid wire of 'the same wire gage or larger' after cutting and re-stripping; 'DO NOT RE-USE connector on stranded wire' (Ideal In-Sure instructions).
- **Sealing:** none: the wire entries are open. For damp, outdoor or buried use WAGO sells a gel-filled enclosure (Gelbox) with 'IPX8-rated moisture-protection' that is 'Suitable for direct-burial applications' (AutomationDirect catalogue).
- **Adjustable:** no: the spring sets the force, so there is nothing to adjust; on lever types wires can be added, swapped or removed at any time.
- **Access needed:** one side only: on side-entry types all wires go in from one face and the levers are on top; inline types take one wire from each end (Wikipedia 'WAGO 221'; AutomationDirect). Leave room to lift the levers and to see through the clear housing.
- **Materials:** Housing: transparent polycarbonate (flammability UL94 V-2) with nylon levers (Wikipedia 'WAGO 221'; AutomationDirect); clamp: chrome-nickel spring steel; current bar: tinned electrolytic copper (WAGO 'Connection technology'). PCB spring terminals: PA66 nylon housing (UL94 V-0), stainless-steel spring, tinned copper-alloy contacts (Same Sky TB0015-500). Fahnestock clips: phosphor bronze or spring steel, today usually nickel-plated (Wikipedia). WHICH WIRE SUITS WHICH TYPE: lever types take solid, stranded and fine-stranded (flexible) copper wire and can mix them; WAGO 221 takes fine-stranded wire from 0.14 to 4 mm² and solid or stranded from 0.2 to 4 mm² (24-12 AWG) in the small size, and all types from 0.5 to 6 mm² (20-10 AWG) in the large size (WAGO 221 page; Wikipedia 'WAGO 221'). Push-in types rely on the wire being stiff, so they are made for solid wire: WAGO PUSH WIRE takes 'rigid solid and stranded conductors' (WAGO 'Connection technology'); Ideal In-Sure takes 12-20 AWG solid wire (reusable) but stranded wire only in 12-16 AWG with fewer than 19 strands or 18 AWG with 7 strands, and then not reusable (Ideal instructions); WAGO 2273 is listed for solid wire 0.5-2.5 mm² (Rapid Online). Fine-stranded wire needs a lever type, or a ferrule plus a Push-in CAGE CLAMP terminal ('ferruled, fine-stranded conductors can be terminated by simply pushing them in', WAGO). Copper wire only ('For copper conductors only', AutomationDirect; 'COPPER TO COPPER ONLY', Ideal), except WAGO's note that aluminium wire can be used with its Alu-Plus contact paste (Wikipedia 'WAGO 221').
- **Heat, cold, water and wear:** Heat: WAGO 221 surrounding air −40 to +85 °C, continuous up to 105 °C (AutomationDirect; WAGO 221 page: 'T85'); Ex e versions to 105 °C (Wikipedia 'WAGO 221'); Ideal In-Sure '105°C (221°F) maximum' (Ideal instructions); PCB spring terminal blocks −40 to 105 °C (Same Sky TB0015-500). Vibration and temperature cycling: good, because the spring keeps its force (SparkFun; WAGO calls its connections 'vibration-proof'); UK maintenance-free terminals must pass tests for long-term connection, vibration, overload and thermal shock (IET Wiring Matters 2012, BS 5733 §14.5). Water: not sealed; IPX8 only inside a gel box (AutomationDirect). Spring relaxation over the years: makers claim 'maintenance-free' connections (WAGO), but no independent long-term figure was found ⚑ [uncertain]. Flammability: WAGO 221 housing is UL94 V-2 polycarbonate (AutomationDirect).

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: the connector itself is bought; its spring and current bar can't be printed
  - 3D print (FDM): printed mounts, holders, DIN-rail clips, junction boxes and power-distribution blocks for lever connectors are very common (Printables models in make_it_yourself)
- **Printing it in one piece (print in place):** no: the connector is bought; printed holders are separate parts that the connector snaps or screws into.
- **Tools:** Usually only wire strippers; the clear housing lets you check the strip length and that the wire is fully in (AutomationDirect: 'Transparent housing for strip-length inspection and conductor insertion verification'). Push-in CAGE CLAMP terminal blocks need a small screwdriver or operating tool to open the clamp for fine-stranded wire and to release any wire (WAGO 'Connection technology'); PCB push-button and tab terminals can be pressed with 'a ball-point pen or a Phillips head screwdriver' (SparkFun). A ferrule crimper if fine-stranded wire is to go into a push-in terminal (WAGO).
- **Difficulty:** easy: buy them and fit them by hand; just strip to the marked length, push the wire fully home and close the lever.

### 3D printing tips

1) Print holders, not connectors: the spring and tinned bar make the contact, and a printed body carrying current is unsafe. 2) Snap-fit holders depend on your printer's [tolerances](../glossary.md#tolerance) and [bridging](../glossary.md#overhang--bridging); the designer of one parametric OpenSCAD holder recommends 'printing a single-position bracket first and testing the snap fit before printing more' and warns that '[creep](../glossary.md#creep) may be an issue, especially with PLA' (Printables 1364964). 3) Leave room above for the levers to swing fully open, keep the clear sides and test ports visible, and add a hole for pushing the connector out with a screwdriver, as one popular mount does (Printables 941104). 4) Typical mounts use M3 screws and nuts, or clip onto 2020/3030 extrusion or DIN rail; one popular mount prints 'side with the numbers' down at 40% [infill](../glossary.md#infill) (Printables 941104). 5) Use PETG, ABS or ASA for holders near warm power supplies or heated beds: PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa knowledge base 'PLA'), while standard WAGO 221 connectors are rated for surrounding air up to 85 °C (AutomationDirect). 6) Add cable-tie points or clamps so the cables, not the connector, take any pull (IET Wiring Matters 2012, quoting BS 7671 reg. 522.8.5: no 'appreciable mechanical strain on the terminations'). 7) For mains, a printed box is not a certified enclosure: UK junction boxes must be marked as meeting BS EN 60670-22, and BS 5733 'MF' where they will be hidden (IET Wiring Matters 2012); one printed distribution-block designer adds: 'Mains voltage is hazardous… follow the safety codes that apply in your area' (Printables 551482).

### Buying one (off-the-shelf parts)

Lever splicing connectors: WAGO 221-412, 221-413, 221-415 (2, 3 and 5 wires up to 4 mm²), 221-612, 221-613, 221-615 (up to 6 mm²), 221-2401 inline (brands) and generic lever connectors; push-in splicing connectors: WAGO 2273 COMPACT PUSH WIRE, WAGO 2773 PUSHWIRE, Ideal In-Sure (brands); PCB spring terminal blocks with a push button or lever (e.g. Same Sky TB0015-500); DIN-rail spring and push-in terminal blocks (WAGO CAGE CLAMP and Push-in CAGE CLAMP); spring speaker-terminal plates (SparkFun); Fahnestock clips for teaching kits (Wikipedia); gel-filled boxes for wet places (WAGO Gelbox 207 series, AutomationDirect). Search terms: 'lever splicing connector', 'push-in wire connector', 'spring terminal block PCB', 'push-in terminal block', 'speaker terminal spring clip', 'Fahnestock clip'.

## Rules of thumb

- Strip length: 11 mm for WAGO 221 small housings (0.2-4 mm²) and 12-14 mm for large ones (0.5-6 mm²) (AutomationDirect catalogue); 11 mm for WAGO 2273 push-in (Rapid Online); 1/2 inch for Ideal In-Sure (Ideal instructions); 9-10 mm for one 5 mm-pitch PCB push-button terminal (Same Sky TB0015-500). Check through the clear housing that the wire reaches the stop and no bare copper shows outside.
- One wire per clamping point: 'Use only one conductor per port' (Ideal); WAGO's funnel-shaped entry 'prevents connecting multiple conductors in one clamping unit' (WAGO 'Connection technology'). For more wires choose a 3-, 5- or 10-way connector (AutomationDirect).
- Match the type to the wire: push-in for solid (and stiff stranded) wire; lever for fine-stranded, flexible and mixed wires; fit a ferrule if fine-stranded wire must go into a push-in terminal (WAGO 'Connection technology'; Ideal instructions; Hackaday 2023: 'the Wago connector can be used to join different wire types and gauges quite easily').
- WAGO 221 ratings: 20 A (24-12 AWG) or 30 A (20-10 AWG) under UL, 600 V UL / 450 V IEC, surrounding air −40 to +85 °C (AutomationDirect); each side of the housing carries the rating for a different standard (Wikipedia 'WAGO 221'), so read the one that applies where you are.
- Re-using push-in connectors: only on solid wire of the same size or larger, after cutting and re-stripping; never after stranded wire (Ideal In-Sure instructions).
- Spring terminals 'work better in environments with a lot of vibrations (i.e. automotive applications) or when a wire expanding/contracting due to temperature cycling' than screw terminals (SparkFun 'Connector Basics').

## Common failures

Wire not fully inserted, or stripped to the wrong length, so bare copper sticks out or the spring grips the insulation; check through the clear body (AutomationDirect; WAGO 221 page). Fine-stranded wire pushed into a push-in connector, where the strands splay and don't hold (WAGO; Ideal). Two wires forced into one port (Ideal; WAGO). A lever left partly open ⚑ [uncertain: general caution]. Pulling a push-in wire straight out: it won't come; twist while pulling (WAGO; Ideal). Re-using a push-in connector after stranded wire (Ideal). Overloading: a 20 A size used on a bigger load, or the UL and IEC ratings confused (AutomationDirect). Cable weight hanging on the connector instead of being clamped (IET Wiring Matters 2012). Aluminium wire without the maker's paste (Wikipedia 'WAGO 221'). A gel box reopened and reused: AutomationDirect says it 'may be reopened only to add or remove a conductor', and a new connector needs a new Gelbox. Printed PLA mounts creeping or softening near warm parts (Printables 1364964; Prusa 'PLA').

## Safety

MAINS: this entry gives no mains wiring steps, and mains use must follow local law. In England, electrical installation work in homes must meet Part P of the Building Regulations and some of it must be notified (Approved Document P, 2013 edition). Under UK wiring rules (BS 7671 regulation 526.3) every connection must stay accessible for inspection, testing and maintenance unless it falls under an exception such as 'Equipment complying with BS 5733 for maintenance-free accessory and marked with the symbol [MF] and installed in accordance with the manufacturer's instructions' (IET Wiring Matters, Spring 2012). In US workplaces OSHA requires conductors to be joined with 'splicing devices identified for the use' (29 CFR 1910.303(c)(3)). The maker's own warning: 'Contact with electricity can cause electrical fires, personal injury, or death. Shut off power to the circuit before using this product and consult local building codes' (Ideal In-Sure instructions). Use certified connectors within their printed ratings; cheap look-alikes are common and their ratings are unverified ⚑ [uncertain: Hackaday commenters discuss clones, but no test was opened]. POOR CONTACT: a wire not pushed to the stop, stripped too short, or fine-stranded wire in a push-in port makes a poor contact that can overheat; loose or poor connections can start fires that fuses and RCDs 'cannot detect' (Wikipedia 'High resistance connection'). Check every wire through the clear housing (AutomationDirect).

## Related

- Screw terminal (terminal block, barrier strip, connector strip): you set the clamping force by tightening a screw; smaller and cheaper per way, but can work loose
- Twist-on wire connector (wire nut): the hand-twisted North American splice that lever connectors often replace
- Crimped butt splice (crimp splice connector): small, permanent and slim enough for a harness, but needs a crimper
- Soldered wire joint (soldered splice): permanent and compact; needs heat
- Wire-end ferrule (bootlace ferrule, end sleeve): lets fine-stranded wire go into push-in and screw terminals
- Binding post and banana plug (test-lead connector, crocodile clip): screw-cap and spring-plug connections for test leads
- Battery holder and battery contacts: springs pressing on battery ends rather than gripping a wire
- Pogo pin (spring-loaded contact pin): a spring presses a pin onto a pad; no wire is clamped
- Insulation-displacement connector (IDC, ribbon-cable plug, punch-down, T-tap): grips insulated wire without stripping
- DIN-rail clip (top-hat rail snap mount): how rail-mounted spring terminal blocks are fixed

## Make it yourself

- [Parametric Wago 221 lever nut holder (Adam, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1364964-parametric-wago-221-lever-nut-holder): OpenSCAD parametric bracket that lever connectors snap into, with screw ears; designer advises test-printing one slot first and warns of creep in PLA *(licence: Creative Commons Attribution-ShareAlike)*
- [WAGO 221 Mount - 11 Variations (VC Design, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/941104-wago-221-mount-11-variations): Snug-fit mounts for 3- and 5-way lever connectors, fixed with two M3 bolts, with a poke-through hole to release the connector *(licence: Creative Commons Attribution)*
- [Wago 221 Power Distribution Block (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/551482-wago-221-power-distribution-block): Printed block holding several lever connectors to share a power feed, with magnet, screw and hang-tab mounting options and STEP files for remixing *(licence: Creative Commons Attribution)*
- [Wago 221 mounts (fns720, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/66531-wago-221-mounts): Simple screw-on mounts for 3- and 5-way lever connectors, with Fusion 360 source *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*

## Pictures, videos and models

- [WAGO 221 mechanism.png (Wikimedia Commons, by im_tau)](https://commons.wikimedia.org/wiki/File:WAGO_221_mechanism.png): Diagram of the inside of a lever connector: lever, spring, copper busbar and test contact *(licence: CC BY 4.0)*
- [Cage Clamp.jpg (Wikimedia Commons, WAGO design department)](https://commons.wikimedia.org/wiki/File:Cage_Clamp.jpg): A spring-force cage clamp with a conductor in it *(licence: CC BY-SA 4.0)*
- [WAGO 2273-200C.JPG (Wikimedia Commons, by Dmitry G)](https://commons.wikimedia.org/wiki/File:WAGO_2273-200C.JPG): Push-in (push wire) splicing connectors *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
- [Fahnestock clip.png (Wikimedia Commons, from a 1912 Central Scientific Co. catalogue)](https://commons.wikimedia.org/wiki/File:Fahnestock_clip.png): Drawing of a Fahnestock clip gripping a stripped wire, released by pushing the tab down *(licence: Public domain in the US (published before 1923))*
- [WAGO 221 Series LEVER-NUTS catalogue pages (AutomationDirect)](https://cdn.automationdirect.com/static/specs/221serieslevernuts.pdf): Photos of the open-lever, insert-wire, close-lever steps, correct strip length and insertion seen through the clear housing, ratings tables and the gel-filled box *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 5 sentences on this page marked [uncertain].
- ⚑ Finder value `reuse_cycles` = many times (source uncertain): `reuse_cycles` is marked ⚑ [uncertain] here: "…y times for lever types, which are made to be opened and closed again ⚑ [uncertain:…"
- ⚑ Finder value `load_max` = light (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light
- ⚑ Research note: *Spring-clamp wire connector*: no pull-out figure and no rated number of lever open/close cycles could be found ([uncertain]).

## Sources

- <https://en.wikipedia.org/wiki/WAGO_221>
- <https://en.wikipedia.org/wiki/Fahnestock_clip>
- <https://en.wikipedia.org/wiki/High_resistance_connection>
- <https://en.wikipedia.org/wiki/Speaker_wire>
- <https://learn.sparkfun.com/tutorials/connector-basics/all>
- <https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/>
- <https://cdn.automationdirect.com/static/specs/221serieslevernuts.pdf>
- <https://www.wago.com/au/products/electrical-interconnections/connection-technology>
- <https://www.wago.com/gb/electrical-interconnections/splicing-connectors-221>
- <https://assets.testequity.com/te1/Documents/pdf/Ideal/Ideal_30-087J_Instructions_0924.pdf>
- <https://rapidonline.com/21-5768>
- <https://www.farnell.com/datasheets/4790133.pdf>
- <https://electrical.theiet.org/media/1534/accessibility-of-connections-and-maintenance-free-junction-boxes.pdf>
- <https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf>
- <https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.303>
- <https://help.prusa3d.com/article/pla_2062>
- <https://commons.wikimedia.org/wiki/File:WAGO_221_mechanism.png>
- <https://commons.wikimedia.org/wiki/File:Cage_Clamp.jpg>
- <https://commons.wikimedia.org/wiki/File:WAGO_2273-200C.JPG>
- <https://commons.wikimedia.org/wiki/File:Fahnestock_clip.png>
- <https://api.printables.com/graphql/>
