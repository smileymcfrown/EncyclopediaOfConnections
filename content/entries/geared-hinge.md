---
title: Geared hinge
description: Two hinge leaves with meshing gear teeth along their edges, held together by a cap, so they turn together evenly
  and share the load along the whole length of the hinge.
num: 63
term: Geared hinge (geared continuous hinge, continuous gear hinge)
plain_name: A hinge whose two halves have gear teeth along their edges that mesh like two cogs, so when you swing one half
  the other half turns with it by the same amount; there is no single pin, and it can be 3D printed already assembled
aliases:
- geared continuous hinge (Wikipedia 'Geared continuous hinge')
- continuous gear hinge, aluminium (aluminum) continuous geared hinge (door-hardware names; Wikimedia Commons file 'ALUMINUM_CONTINUOUS_GEARED_HINGE.jpg')
- gear hinge, gear-tooth hinge (maker names; e.g. Printables 'Print in place mini gear hinge assortment')
- print-in-place geared hinge, herringbone gear hinge (3D-printing names; Printables and Hackaday)
- full-length hinge or continuous hinge (the wider family; the geared kind is one of two types, the other being pin-and-barrel;
  Locksmith Ledger)
- Roton hinge (brand; appears as a Wikimedia Commons category name) [uncertain as a common search term]
family: hinges & pivots
other_families: [print-in-place & 3D-printing joints]
finder:
  job: [let it move, join and hold]
  motion: rotate
  special_behaviour: [self-aligning or self-centring]
  holding_principle: [not a holding joint]
  reuse_cycles: many times
  seal: none
  access_needed: one side only
  print_in_place: 'yes'
  maker_difficulty: easy
  processes: [off-the-shelf part, 3D print (FDM), 3D print (resin)]
  connects: ['lid, door or cover']
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [drill and tap, hand tools]
  load_max: heavy
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points: []
uncertain_fields: [aliases, motion, reuse_cycles, load, play_and_precision, materials, processes, environment_limits, common_failures]
diagram_idea: 'A top-down view looking along the hinge axis: two leaves each ending in a toothed disc, held by a small cap;
  an animation swings the left leaf open and shows the right leaf turning by the same amount as the teeth mesh, with a side-view
  inset of the V-shaped herringbone teeth that stop the leaves sliding up or down.'
links:
- url: https://commons.wikimedia.org/wiki/File:GEARED_HINGES.JPG
  title: GEARED HINGES.JPG (Wikimedia Commons, by Austin R. Baer)
  shows: Photo of aluminium continuous geared hinges showing the gear-toothed leaves, by the inventor of the modern design
  license: Public domain (released by the author)
- url: https://commons.wikimedia.org/wiki/File:ALUMINUM_CONTINUOUS_GEARED_HINGE.jpg
  title: ALUMINUM CONTINUOUS GEARED HINGE.jpg (Wikimedia Commons, by Austin R. Baer)
  shows: Illustration of the design and origin of the aluminium continuous geared hinge
  license: Public domain (released by the author)
- url: https://hackaday.com/2022/01/24/one-piece-geared-hinge-can-take-the-weight/
  title: One-piece Geared Hinge Can Take The Weight (Hackaday, January 2022)
  shows: Photos of E. Soderberg's print-in-place herringbone geared hinge and its load test with weights
  license: link only
- url: https://www.printables.com/model/120766-print-in-place-geared-hinge
  title: Print in Place Geared Hinge (E. Soderberg, Printables)
  shows: Model page with photos of the printed hinge and of two hinges holding 95 kg; URL found in search results, details
    read through the Printables public API
  license: CC BY-SA (Creative Commons Attribution-ShareAlike)
make_it_yourself:
- url: https://www.printables.com/model/120766-print-in-place-geared-hinge
  title: Print in Place Geared Hinge (E. Soderberg, Printables)
  what_it_is: Printable one-piece herringbone geared hinge, tested to 95 kg with two hinges in PLA; includes a double-height
    version for heavier loads. URL found in search results; details read through the Printables public API.
  license: CC BY-SA (Creative Commons Attribution-ShareAlike)
- url: https://www.printables.com/model/124967-print-in-place-mini-gear-hinge-assortment
  title: Print in place mini gear hinge assortment (E. Soderberg, Printables) (URL from Printables API, page not opened)
  what_it_is: Smaller print-in-place herringbone gear hinges with clearances fixed for the smaller size, plus a PDF of dimensions.
    Read through the Printables public API.
  license: CC BY-SA (Creative Commons Attribution-ShareAlike)
- url: https://www.printables.com/model/105612-geared-hinge
  title: Geared Hinge (E. Soderberg, Printables)
  what_it_is: Earlier two-part geared hinge with pins pressed into the gears, and long- and short-tab leaves that can be mixed.
    URL found in search results; details read through the Printables public API.
  license: CC BY-SA (Creative Commons Attribution-ShareAlike)
- url: https://www.printables.com/model/885139-parametic-gear-hinge
  title: Parametic Gear Hinge (I.Hawel, Printables) (URL from Printables API, page not opened)
  what_it_is: A customisable gear hinge where gear diameter, height, number of teeth, helix angle, leaf length and screw holes
    can be changed. Read through the Printables public API.
  license: CC BY-SA (Creative Commons Attribution-ShareAlike)
- url: https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
  title: 'BOSL2 gears.scad: spur_gear() with herringbone=true (OpenSCAD library)'
  what_it_is: Parametric involute spur, helical and herringbone gears that can be used to model your own geared hinge
  license: BSD 2-Clause
sources:
- https://en.wikipedia.org/wiki/Geared_continuous_hinge
- https://en.wikipedia.org/wiki/Hinge
- https://en.wikipedia.org/wiki/Herringbone_gear
- https://commons.wikimedia.org/wiki/File:GEARED_HINGES.JPG
- https://commons.wikimedia.org/wiki/File:ALUMINUM_CONTINUOUS_GEARED_HINGE.jpg
- https://commons.wikimedia.org/wiki/Category:Geared_hinge
- https://www.locksmithledger.com/door-hardware/article/11288026/upgrading-to-continuous-hinges
- https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A15626-2021-Continuous-Hinges
- https://www.calibredoorclosers.com/a1562.php
- https://hackaday.com/2022/01/24/one-piece-geared-hinge-can-take-the-weight/
- https://blog.google/products-and-platforms/devices/pixel/pixel-10-pro-fold-gearless-hinge-design/
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad
- https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
- https://api.printables.com/graphql/
research: research/connection-types/results/Geared_hinge_continuous_gear_hinge.json
image: null
glossary: [backlash, detent, torque, living-hinge, clearance, tolerance, creep, perimeters, print-in-place, overhang--bridging]
---

Two hinge leaves with meshing gear teeth along their edges, held together by a cap, so they turn together evenly and share the load along the whole length of the hinge.

**In plain words:** A hinge whose two halves have gear teeth along their edges that mesh like two cogs, so when you swing one half the other half turns with it by the same amount; there is no single pin, and it can be 3D printed already assembled. **Proper term:** Geared hinge (geared continuous hinge, continuous gear hinge).

**Also called:** geared continuous hinge (Wikipedia 'Geared continuous hinge'); continuous gear hinge, aluminium (aluminum) continuous geared hinge (door-hardware names; Wikimedia Commons file 'ALUMINUM_CONTINUOUS_GEARED_HINGE.jpg'); gear hinge, gear-tooth hinge (maker names; e.g. Printables 'Print in place mini gear hinge assortment'); [print-in-place](../glossary.md#print-in-place) geared hinge, herringbone gear hinge (3D-printing names; Printables and Hackaday); full-length hinge or continuous hinge (the wider family; the geared kind is one of two types, the other being pin-and-barrel; Locksmith Ledger); Roton hinge (brand; appears as a Wikimedia Commons category name) ⚑ [uncertain as a common search term].

## How it works

Each leaf ends in a row of gear teeth, and a cap or link holds the two toothed edges side by side so the teeth stay meshed (Wikipedia; Locksmith Ledger). When you swing one leaf, its teeth push on the other leaf's teeth, so both leaves turn by the same amount and the hinge opens symmetrically about the cap, the same trick small gears use to keep the two halves of a folding phone moving evenly (Google 'Pixel 10 Pro Fold gearless hinge'). Because the leaves are screwed on along their full length, the door's weight is spread along the whole hinge instead of hanging on two or three knuckles, so heavy doors don't sag; bearings (door hardware) or V-shaped herringbone teeth (printed versions) carry the weight along the axis (Wikipedia; Locksmith Ledger; E. Soderberg; Hackaday).

## Parts

A small assembly that acts as one unit. Door-hardware version: two extruded aluminium leaves with gear teeth along their inner edges, a full-length cap (cover channel) that holds the teeth in mesh and covers them, bearings that carry the door's weight and keep the leaves lined up, and a row of screws (Wikipedia; Locksmith Ledger). 3D-printed version: two leaves each ending in a toothed column (herringbone gear) plus the pieces that hold the two columns together, all printed in one go; an earlier two-part version used separate pins pressed into the gears (E. Soderberg's Printables models).

## Everyday examples

- The full-length aluminium hinge on busy entrance doors of schools, hospitals, hotels, airports and shops (Wikipedia 'Geared continuous hinge')
- Toilet-cubicle doors fitted with full-length geared hinges (Wikipedia lists toilet-partition models)
- Folding phones, where small gears in the hinge keep both halves turning evenly (Google, 'Pixel 10 Pro Fold gearless hinge')
- 3D-printer enclosure doors and add-ons fitted with printed geared hinges (Printables models for Creality K1 side braces and Sonic Pad mounts)

## When to use it

Choose a geared hinge when a door or lid is heavy or used a lot and must not sag: the load is shared along the whole length and the teeth wear slowly (Wikipedia; Locksmith Ledger). For 3D printing it is a strong, low-friction print-in-place hinge that needs no metal pin, prints without supports and can carry real weight, such as a printer-enclosure door, a cabinet door or a folding stand (E. Soderberg; Hackaday). It also suits anything where both halves should open evenly by the same amount.

## When not to use it

Don't use one where it must be thin or hidden (use a concealed cup hinge or an invisible barrel hinge), where it must hold its angle (use a friction or [detent](../glossary.md#detent) hinge), or for a light lid that only needs to flex (a [living hinge](../glossary.md#living-hinge) is simpler). Exposed printed teeth collect dust and can pinch fingers, so for dirty places or small children choose a covered hinge. For a simple, cheap printed hinge that only carries a small lid, a pin-and-knuckle print-in-place hinge is easier.

## Details

- **What it does (jobs):**
  - let it move (turn, slide or bend): lets a door, lid or flap swing open and shut
  - join and hold: keeps the two parts connected and carries their weight without sagging
- **Movement:** rotate: the door or lid swings about the hinge; commercial and printed geared hinges typically open to about 180° ⚑ [uncertain], limited by the leaves hitting each other or the frame
- **Directions it can move (degrees of freedom):** 1: there are two turning axes (one per toothed edge), but the meshing teeth tie them together, so there is only one independent motion, the opening angle
- **Special behaviour:**
  - self-aligning or self-centring: in printed geared hinges the herringbone (V-shaped) teeth lock the leaves against sliding along the hinge axis and hold the vertical weight on the tooth faces (E. Soderberg; Hackaday). The side thrust of the two halves of a herringbone gear cancels out (Wikipedia 'Herringbone gear') and herringbone gears are self-aligning (BOSL2 gears.scad)
  - none of the other listed behaviours: it does not lock, click or limit force. Its other useful trait, both leaves moving together evenly (synchronised motion), is not in the list
- **How it holds:**
  - not a holding joint (it moves or passes on motion): it lets the parts swing; the cap, pins or printed links keep the leaves together by shape
- **Input and output:** not applicable: it is a hinge, not a drive. Inside, the two equal toothed edges couple the leaves 1:1 so they turn by equal amounts (Google on gear-synchronised hinges); either leaf can drive the other.
- **Power:** passive (no power needed)
- **Load:** Heavy for its size. Two print-in-place PLA geared hinges held 95 kg (210 lb) with no sign of failure or sagging (E. Soderberg; Hackaday). Door-hardware versions are rated for doors of about 200-450 lb (90-200 kg) and heavy-duty ones up to about 600 lb (270 kg) (Locksmith Ledger). Strong for vertical (along-the-axis) weight and for sagging loads because the load is spread along the full length (Wikipedia; Locksmith Ledger); prying the leaves apart is resisted only by the cap or printed links ⚑ [uncertain].
- **Play and precision:** small: meshing gear teeth always need a little [clearance](../glossary.md#clearance) ([backlash](../glossary.md#backlash)), so there is slight free movement ⚑ [uncertain]. Door-hardware hinges use bearings to keep the leaves aligned, and a door settles about 1/16 in (1.6 mm) after fitting (Locksmith Ledger). Print-in-place versions start tight and loosen after the first few turns (E. Soderberg).
- **Taking it apart:** removable: each leaf is screwed to its part and can be unscrewed; the hinge itself stays assembled (a print-in-place hinge can't be taken apart)
- **How often it can be reused:** many times (it can be unscrewed and refitted). Wear life is very long for door-hardware versions: the BHMA continuous-hinge standard cycle-tests Grade 1 hinges to 2.5 million openings (Builders Hardware Manufacturers Association), and geared continuous hinges passed 25 million cycles in ANSI testing in 2005 (Wikipedia). Life of printed versions is not published ⚑ [uncertain].
- **Sealing:** none: there are gaps at the teeth and along the hinge line; the full-length cap covers the teeth but is not a seal
- **Adjustable:** no: the hinge action is fixed. Some printed designs add slotted mounting holes so the position can be adjusted when fitting (Printables 'Adjustable Geared Hinge with Screws').
- **Access needed:** one side only (blind): each leaf is screwed on from its face; through-bolted printed versions also need access to the back for nuts (Printables 'Adjustable Geared Hinge with Screws')
- **Materials:** Door hardware: extruded architectural aluminium, usually anodised black, bronze or clear, with self-lubricating nylon bearings; fire-rated versions exist (Wikipedia; Locksmith Ledger). 3D printed: PLA is proven (E. Soderberg's 95 kg test; Adam L's remix in PLA); PETG, ASA and nylon should also work ⚑ [uncertain].
- **Heat, cold, water and wear:** Door-hardware versions are anodised aluminium for corrosion resistance, and fire-rated versions are rated up to three hours (Wikipedia). Printed hinges share their plastic's limits: in CNC Kitchen's oven test PLA started to give at about 60 °C, PETG at about 80 °C and ASA at about 110 °C. Plastic under a constant load [creeps](../glossary.md#creep), so a printed hinge holding a heavy door permanently may slowly sag (a concern raised by Hackaday commenters) ⚑ [uncertain]. Dust and grit caught between gear teeth make the motion rough over time (Google on gear hinges in folding phones).

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): print-in-place designs print as one assembled piece (E. Soderberg; Hackaday)
  - off-the-shelf part: extruded aluminium geared continuous hinges for doors (Wikipedia; Locksmith Ledger)
  - 3D print (resin) and CNC: possible in principle but no maker examples found ⚑ [uncertain]
- **Printing it in one piece (print in place):** yes: E. Soderberg's 'Print in Place Geared Hinge' prints as a single working assembly with no supports; an earlier version was printed as separate leaves and pins and pressed together (Printables, read through the API; Hackaday).
- **Tools:** screwdriver and drill for the mounting screws; nothing to assemble a print-in-place hinge, which only needs working back and forth to free it on first use (E. Soderberg). The older two-part printed version needs a firm press to seat its pins (E. Soderberg).
- **Difficulty:** easy: download a print-in-place model and print it in one piece with no supports; moderate if you design your own, because the gear teeth and clearances must be right and a model scaled down in size may fuse or bind (E. Soderberg)

### 3D printing tips

1) Orientation: print with the gear columns (the hinge axis) standing vertical, so each layer is a clean slice through the teeth; the model file may open upside down, so flip it (E. Soderberg). A remix was re-oriented so its helical teeth print without droopy [overhangs](../glossary.md#overhang--bridging) (REIFY 3D, Printables). 2) Settings used for the 95 kg test: PLA, 0.4 mm nozzle, 0.16 mm layers, no supports, and 7 [perimeters](../glossary.md#perimeters) (walls), 'probably overkill for most needs'; the mini versions used 4 perimeters (E. Soderberg). 3) Freeing it: even a clean print takes a good bit of force to turn the first time, then swings freely (E. Soderberg). If yours is fused, try a version with looser clearances (REIFY 3D's 'Remixed Print in Place Geared Hinge v2' loosened the [tolerances](../glossary.md#tolerance)). 4) Don't simply scale the model down: people who did ran into clearance problems, so use the purpose-made mini and super-mini versions (E. Soderberg 'Print in place mini gear hinge assortment'). 5) Clearance for your own designs: Prusa suggests starting at 0.3 mm or more between parts that must move. 6) Small hinges can pop off the bed during printing; use a brim or glue stick (Adam L, Printables). 7) Mounting: countersunk holes suit wood screws and spread the clamping force so the leaf is less likely to split (Adam L's countersunk remix). Use two hinges per door to share the load (E. Soderberg's test used two). 8) For the two-part version, print the pins flat side down and lying parallel to the bed, and the leaves with the gears as upright columns (E. Soderberg 'Geared Hinge'). 9) To design your own, BOSL2's spur_gear() can make herringbone gears (herringbone=true), and parametric geared-hinge models exist (Printables 'Parametic Gear Hinge').

### Buying one (off-the-shelf parts)

Search door-hardware suppliers for a 'geared continuous hinge', 'continuous gear hinge' or 'aluminum geared hinge' (Wikipedia; Locksmith Ledger). Mounting styles include full surface, half surface, concealed or edge mount, half edge mount and swing clear (Calibre Door Closers, citing ANSI/BHMA A156.26), plus toilet-partition models (Wikipedia). Standard door lengths are 83, 95 and 119 in (Locksmith Ledger). Look for the standard 'ANSI/BHMA A156.26' and its grade. For small projects, printable geared hinges are the usual choice (Printables).

## Rules of thumb

- Cycle-test grades in ANSI/BHMA A156.26 (continuous hinges): Grade 1 2,500,000 cycles, Grade 2 1,500,000, Grade 3 350,000 (Calibre Door Closers, summarising A156.26-2006); the standard also includes abuse, overload, vertical wear, strength and salt-spray tests (Builders Hardware Manufacturers Association).
- Leave about 5/16-3/8 in (8-10 mm) gap along the hinge edge when fitting a geared continuous hinge, and expect the door to settle about 1/16 in (1.6 mm) (Locksmith Ledger 'Upgrading to Continuous Hinges').
- Two print-in-place PLA geared hinges (0.4 mm nozzle, 0.16 mm layers, 7 perimeters, printed with the gear columns vertical) held 95 kg (210 lb) without failure or sagging (E. Soderberg, Printables; Hackaday, January 2022).
- Herringbone teeth cancel each other's side thrust, so the gear needs no thrust bearing and centres itself along its axis (Wikipedia 'Herringbone gear'; BOSL2 gears.scad).
- Start print-in-place clearances at 0.3 mm or more between moving surfaces (Prusa knowledge base 'Modeling with 3D printing in mind').

## Common failures

Print-in-place hinge fused or too stiff: clearances too tight for the printer; use a looser remix, check flow and orientation, and work it free (E. Soderberg; REIFY 3D). Scaling a model down so the gaps close up (E. Soderberg). Small hinges lifting off the bed mid-print (Adam L). Mounting leaves split by over-tightened screws; use countersunk holes (Adam L). Slow sag or tooth wear in plastic hinges under constant heavy load ⚑ [uncertain]. Grit in the teeth making it rough (Google). Door-hardware hinges: incorrect gap or shimming when fitting (Locksmith Ledger).

## Safety

Pinch points: fingers can be caught between the meshing teeth of an exposed printed hinge and in the gap along the hinge line (pinch hazard raised by Hackaday commenters). Heavy doors on any hinge can trap fingers at the hinge side.

## Related

- Print-in-place hinge: a printed pin-and-knuckle hinge; simpler and thinner, but the leaves don't move together and it carries less load
- Piano hinge (pin-and-barrel continuous hinge): also full-length, but the leaves turn on one long pin instead of meshing teeth
- Knuckle hinge (butt hinge): carries the load on two or three knuckles, so heavy doors can sag
- Living hinge: a thin bendy strip; no parts, but only for light lids and limited fold life in prints
- Rolling-contact joint (CORE, Jacob's-ladder hinge): two curved surfaces roll on each other held by straps or bands, instead of gear teeth
- Friction hinge ([torque](../glossary.md#torque) hinge) and detent hinge: hold their angle, which a geared hinge doesn't
- Spur gear pair and herringbone gears: the gear types the toothed edges are based on

## Make it yourself

- [Print in Place Geared Hinge (E. Soderberg, Printables)](https://www.printables.com/model/120766-print-in-place-geared-hinge): Printable one-piece herringbone geared hinge, tested to 95 kg with two hinges in PLA; includes a double-height version for heavier loads. URL found in search results; details read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- [Print in place mini gear hinge assortment (E. Soderberg, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/124967-print-in-place-mini-gear-hinge-assortment): Smaller print-in-place herringbone gear hinges with clearances fixed for the smaller size, plus a PDF of dimensions. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- [Geared Hinge (E. Soderberg, Printables)](https://www.printables.com/model/105612-geared-hinge): Earlier two-part geared hinge with pins pressed into the gears, and long- and short-tab leaves that can be mixed. URL found in search results; details read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- [Parametic Gear Hinge (I.Hawel, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/885139-parametic-gear-hinge): A customisable gear hinge where gear diameter, height, number of teeth, helix angle, leaf length and screw holes can be changed. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- [BOSL2 gears.scad: spur_gear() with herringbone=true (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad): Parametric involute spur, helical and herringbone gears that can be used to model your own geared hinge *(licence: BSD 2-Clause)*

## Pictures, videos and models

- [GEARED HINGES.JPG (Wikimedia Commons, by Austin R. Baer)](https://commons.wikimedia.org/wiki/File:GEARED_HINGES.JPG): Photo of aluminium continuous geared hinges showing the gear-toothed leaves, by the inventor of the modern design *(licence: Public domain (released by the author))*
- [ALUMINUM CONTINUOUS GEARED HINGE.jpg (Wikimedia Commons, by Austin R. Baer)](https://commons.wikimedia.org/wiki/File:ALUMINUM_CONTINUOUS_GEARED_HINGE.jpg): Illustration of the design and origin of the aluminium continuous geared hinge *(licence: Public domain (released by the author))*
- [One-piece Geared Hinge Can Take The Weight (Hackaday, January 2022)](https://hackaday.com/2022/01/24/one-piece-geared-hinge-can-take-the-weight/): Photos of E. Soderberg's print-in-place herringbone geared hinge and its load test with weights *(licence: link only)*
- [Print in Place Geared Hinge (E. Soderberg, Printables)](https://www.printables.com/model/120766-print-in-place-geared-hinge): Model page with photos of the printed hinge and of two hinges holding 95 kg; URL found in search results, details read through the Printables public API *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 9 sentences on this page marked [uncertain].

## Sources

- <https://en.wikipedia.org/wiki/Geared_continuous_hinge>
- <https://en.wikipedia.org/wiki/Hinge>
- <https://en.wikipedia.org/wiki/Herringbone_gear>
- <https://commons.wikimedia.org/wiki/File:GEARED_HINGES.JPG>
- <https://commons.wikimedia.org/wiki/File:ALUMINUM_CONTINUOUS_GEARED_HINGE.jpg>
- <https://commons.wikimedia.org/wiki/Category:Geared_hinge>
- <https://www.locksmithledger.com/door-hardware/article/11288026/upgrading-to-continuous-hinges>
- <https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A15626-2021-Continuous-Hinges>
- <https://www.calibredoorclosers.com/a1562.php>
- <https://hackaday.com/2022/01/24/one-piece-geared-hinge-can-take-the-weight/>
- <https://blog.google/products-and-platforms/devices/pixel/pixel-10-pro-fold-gearless-hinge-design/>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad>
- <https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE>
- <https://api.printables.com/graphql/>
