# hinges & pivots: Unusual hinges and pivots

[Back to the index](../report.md). Entries are numbered as in the index (research-priority order). Unverified parts are left out; see the index page.

## 63 Geared hinge (continuous gear hinge)

*hinges & pivots.* A hinge where two meshing gear-toothed edges roll on each other, so both leaves move together evenly; can be printed in place

### What it is

- **plain_name**: A hinge whose two halves have gear teeth along their edges that mesh like two cogs, so when you swing one half the other half turns with it by the same amount; there is no single pin, and it can be 3D printed already assembled
- **term**: Geared hinge (geared continuous hinge, continuous gear hinge)
- **aliases**: 
  - geared continuous hinge (Wikipedia 'Geared continuous hinge')
  - continuous gear hinge, aluminium (aluminum) continuous geared hinge (door-hardware names; Wikimedia Commons file 'ALUMINUM_CONTINUOUS_GEARED_HINGE.jpg')
  - gear hinge, gear-tooth hinge (maker names; e.g. Printables 'Print in place mini gear hinge assortment')
  - print-in-place geared hinge, herringbone gear hinge (3D-printing names; Printables and Hackaday)
  - full-length hinge or continuous hinge (the wider family; the geared kind is one of two types, the other being pin-and-barrel; Locksmith Ledger) *(unverified parts omitted)*
- **family**: hinges & pivots
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: Two hinge leaves with meshing gear teeth along their edges, held together by a cap, so they turn together evenly and share the load along the whole length of the hinge.
- **complexity**: A small assembly that acts as one unit. Door-hardware version: two extruded aluminium leaves with gear teeth along their inner edges, a full-length cap (cover channel) that holds the teeth in mesh and covers them, bearings that carry the door's weight and keep the leaves lined up, and a row of screws (Wikipedia; Locksmith Ledger). 3D-printed version: two leaves each ending in a toothed column (herringbone gear) plus the pieces that hold the two columns together, all printed in one go; an earlier two-part version used separate pins pressed into the gears (E. Soderberg's Printables models).
- **how_it_works**: Each leaf ends in a row of gear teeth, and a cap or link holds the two toothed edges side by side so the teeth stay meshed (Wikipedia; Locksmith Ledger). When you swing one leaf, its teeth push on the other leaf's teeth, so both leaves turn by the same amount and the hinge opens symmetrically about the cap, the same trick small gears use to keep the two halves of a folding phone moving evenly (Google 'Pixel 10 Pro Fold gearless hinge'). Because the leaves are screwed on along their full length, the door's weight is spread along the whole hinge instead of hanging on two or three knuckles, so heavy doors don't sag; bearings (door hardware) or V-shaped herringbone teeth (printed versions) carry the weight along the axis (Wikipedia; Locksmith Ledger; E. Soderberg; Hackaday).

### Finder attributes

- **job**: let it move (turn, slide or bend): lets a door, lid or flap swing open and shut, join and hold: keeps the two parts connected and carries their weight without sagging
- **degrees_of_freedom**: 1: there are two turning axes (one per toothed edge), but the meshing teeth tie them together, so there is only one independent motion, the opening angle
- **special_behaviour**: 
  - self-aligning or self-centring: in printed geared hinges the herringbone (V-shaped) teeth lock the leaves against sliding along the hinge axis and hold the vertical weight on the tooth faces (E. Soderberg; Hackaday). The side thrust of the two halves of a herringbone gear cancels out (Wikipedia 'Herringbone gear') and herringbone gears are self-aligning (BOSL2 gears.scad)
  - none of the other listed behaviours: it does not lock, click or limit force. Its other useful trait, both leaves moving together evenly (synchronised motion), is not in the list
- **holding_principle**: not a holding joint (it moves or passes on motion): it lets the parts swing; the cap, pins or printed links keep the leaves together by shape
- **input_output**: not applicable: it is a hinge, not a drive. Inside, the two equal toothed edges couple the leaves 1:1 so they turn by equal amounts (Google on gear-synchronised hinges); either leaf can drive the other.
- **power**: passive (no power needed)
- **removability**: removable: each leaf is screwed to its part and can be unscrewed; the hinge itself stays assembled (a print-in-place hinge can't be taken apart)
- **reuse_cycles**: many times (it can be unscrewed and refitted). Wear life is very long for door-hardware versions: the BHMA continuous-hinge standard cycle-tests Grade 1 hinges to 2.5 million openings (Builders Hardware Manufacturers Association), and geared continuous hinges passed 25 million cycles in ANSI testing in 2005 (Wikipedia). *(unverified parts omitted)*
- **tools_needed**: screwdriver and drill for the mounting screws; nothing to assemble a print-in-place hinge, which only needs working back and forth to free it on first use (E. Soderberg). The older two-part printed version needs a firm press to seat its pins (E. Soderberg).
- **seal**: none: there are gaps at the teeth and along the hinge line; the full-length cap covers the teeth but is not a seal
- **load**: Heavy for its size. Two print-in-place PLA geared hinges held 95 kg (210 lb) with no sign of failure or sagging (E. Soderberg; Hackaday). Door-hardware versions are rated for doors of about 200-450 lb (90-200 kg) and heavy-duty ones up to about 600 lb (270 kg) (Locksmith Ledger). Strong for vertical (along-the-axis) weight and for sagging loads because the load is spread along the full length (Wikipedia; *(unverified parts omitted)*
- **adjustable**: no: the hinge action is fixed. Some printed designs add slotted mounting holes so the position can be adjusted when fitting (Printables 'Adjustable Geared Hinge with Screws').
- **play_and_precision**: Door-hardware hinges use bearings to keep the leaves aligned, and a door settles about 1/16 in (1.6 mm) after fitting (Locksmith Ledger). Print-in-place versions start tight and loosen after the first few turns (E. Soderberg). *(unverified parts omitted)*
- **access_needed**: one side only (blind): each leaf is screwed on from its face; through-bolted printed versions also need access to the back for nuts (Printables 'Adjustable Geared Hinge with Screws')
- **materials**: Door hardware: extruded architectural aluminium, usually anodised black, bronze or clear, with self-lubricating nylon bearings; fire-rated versions exist (Wikipedia; Locksmith Ledger). 3D printed: PLA is proven (E. Soderberg's 95 kg test; Adam L's remix in PLA); *(unverified parts omitted)*
- **maker_difficulty**: easy: download a print-in-place model and print it in one piece with no supports; moderate if you design your own, because the gear teeth and clearances must be right and a model scaled down in size may fuse or bind (E. Soderberg)

### Making it

- **processes**: 3D print (FDM): print-in-place designs print as one assembled piece (E. Soderberg; Hackaday), off-the-shelf part: extruded aluminium geared continuous hinges for doors (Wikipedia; Locksmith Ledger) *(unverified parts omitted)*
- **print_in_place**: yes: E. Soderberg's 'Print in Place Geared Hinge' prints as a single working assembly with no supports; an earlier version was printed as separate leaves and pins and pressed together (Printables, read through the API; Hackaday).
- **making_tips_3d_printing**: 1) Orientation: print with the gear columns (the hinge axis) standing vertical, so each layer is a clean slice through the teeth; the model file may open upside down, so flip it (E. Soderberg). A remix was re-oriented so its helical teeth print without droopy overhangs (REIFY 3D, Printables). 2) Settings used for the 95 kg test: PLA, 0.4 mm nozzle, 0.16 mm layers, no supports, and 7 perimeters (walls), 'probably overkill for most needs'; the mini versions used 4 perimeters (E. Soderberg). 3) Freeing it: even a clean print takes a good bit of force to turn the first time, then swings freely (E. Soderberg). If yours is fused, try a version with looser clearances (REIFY 3D's 'Remixed Print in Place Geared Hinge v2' loosened the tolerances). 4) Don't simply scale the model down: people who did ran into clearance problems, so use the purpose-made mini and super-mini versions (E. Soderberg 'Print in place mini gear hinge assortment'). 5) Clearance for your own designs: Prusa suggests starting at 0.3 mm or more between parts that must move. 6) Small hinges can pop off the bed during printing; use a brim or glue stick (Adam L, Printables). 7) Mounting: countersunk holes suit wood screws and spread the clamping force so the leaf is less likely to split (Adam L's countersunk remix). Use two hinges per door to share the load (E. Soderberg's test used two). 8) For the two-part version, print the pins flat side down and lying parallel to the bed, and the leaves with the gears as upright columns (E. Soderberg 'Geared Hinge'). 9) To design your own, BOSL2's spur_gear() can make herringbone gears (herringbone=true), and parametric geared-hinge models exist (Printables 'Parametic Gear Hinge').
- **off_the_shelf_parts**: Search door-hardware suppliers for a 'geared continuous hinge', 'continuous gear hinge' or 'aluminum geared hinge' (Wikipedia; Locksmith Ledger). Mounting styles include full surface, half surface, concealed or edge mount, half edge mount and swing clear (Calibre Door Closers, citing ANSI/BHMA A156.26), plus toilet-partition models (Wikipedia). Standard door lengths are 83, 95 and 119 in (Locksmith Ledger). Look for the standard 'ANSI/BHMA A156.26' and its grade. For small projects, printable geared hinges are the usual choice (Printables).
- **rules_of_thumb**: 
  - Cycle-test grades in ANSI/BHMA A156.26 (continuous hinges): Grade 1 2,500,000 cycles, Grade 2 1,500,000, Grade 3 350,000 (Calibre Door Closers, summarising A156.26-2006); the standard also includes abuse, overload, vertical wear, strength and salt-spray tests (Builders Hardware Manufacturers Association).
  - Leave about 5/16-3/8 in (8-10 mm) gap along the hinge edge when fitting a geared continuous hinge, and expect the door to settle about 1/16 in (1.6 mm) (Locksmith Ledger 'Upgrading to Continuous Hinges').
  - Two print-in-place PLA geared hinges (0.4 mm nozzle, 0.16 mm layers, 7 perimeters, printed with the gear columns vertical) held 95 kg (210 lb) without failure or sagging (E. Soderberg, Printables; Hackaday, January 2022).
  - Herringbone teeth cancel each other's side thrust, so the gear needs no thrust bearing and centres itself along its axis (Wikipedia 'Herringbone gear'; BOSL2 gears.scad).
  - Start print-in-place clearances at 0.3 mm or more between moving surfaces (Prusa knowledge base 'Modeling with 3D printing in mind').

### When to use it

- **everyday_examples**: 
  - The full-length aluminium hinge on busy entrance doors of schools, hospitals, hotels, airports and shops (Wikipedia 'Geared continuous hinge')
  - Toilet-cubicle doors fitted with full-length geared hinges (Wikipedia lists toilet-partition models)
  - Folding phones, where small gears in the hinge keep both halves turning evenly (Google, 'Pixel 10 Pro Fold gearless hinge')
  - 3D-printer enclosure doors and add-ons fitted with printed geared hinges (Printables models for Creality K1 side braces and Sonic Pad mounts)
- **when_to_use**: Choose a geared hinge when a door or lid is heavy or used a lot and must not sag: the load is shared along the whole length and the teeth wear slowly (Wikipedia; Locksmith Ledger). For 3D printing it is a strong, low-friction print-in-place hinge that needs no metal pin, prints without supports and can carry real weight, such as a printer-enclosure door, a cabinet door or a folding stand (E. Soderberg; Hackaday). It also suits anything where both halves should open evenly by the same amount.
- **when_not_to_use**: Don't use one where it must be thin or hidden (use a concealed cup hinge or an invisible barrel hinge), where it must hold its angle (use a friction or detent hinge), or for a light lid that only needs to flex (a living hinge is simpler). Exposed printed teeth collect dust and can pinch fingers, so for dirty places or small children choose a covered hinge. For a simple, cheap printed hinge that only carries a small lid, a pin-and-knuckle print-in-place hinge is easier.
- **environment_limits**: Door-hardware versions are anodised aluminium for corrosion resistance, and fire-rated versions are rated up to three hours (Wikipedia). Printed hinges share their plastic's limits: in CNC Kitchen's oven test PLA started to give at about 60 °C, PETG at about 80 °C and ASA at about 110 °C. Dust and grit caught between gear teeth make the motion rough over time (Google on gear hinges in folding phones). *(unverified parts omitted)*
- **safety_notes**: Pinch points: fingers can be caught between the meshing teeth of an exposed printed hinge and in the gap along the hinge line (pinch hazard raised by Hackaday commenters). Heavy doors on any hinge can trap fingers at the hinge side.
- **common_failures**: Print-in-place hinge fused or too stiff: clearances too tight for the printer; use a looser remix, check flow and orientation, and work it free (E. Soderberg; REIFY 3D). Scaling a model down so the gaps close up (E. Soderberg). Small hinges lifting off the bed mid-print (Adam L). Mounting leaves split by over-tightened screws; use countersunk holes (Adam L). Grit in the teeth making it rough (Google). Door-hardware hinges: incorrect gap or shimming when fitting (Locksmith Ledger). *(unverified parts omitted)*
- **related**: 
  - Print-in-place hinge: a printed pin-and-knuckle hinge; simpler and thinner, but the leaves don't move together and it carries less load
  - Piano hinge (pin-and-barrel continuous hinge): also full-length, but the leaves turn on one long pin instead of meshing teeth
  - Knuckle hinge (butt hinge): carries the load on two or three knuckles, so heavy doors can sag
  - Living hinge: a thin bendy strip; no parts, but only for light lids and limited fold life in prints
  - Rolling-contact joint (CORE, Jacob's-ladder hinge): two curved surfaces roll on each other held by straps or bands, instead of gear teeth
  - Friction hinge (torque hinge) and detent hinge: hold their angle, which a geared hinge doesn't
  - Spur gear pair and herringbone gears: the gear types the toothed edges are based on

### Pictures, videos and models

- **links**: 
  - [GEARED HINGES.JPG (Wikimedia Commons, by Austin R. Baer)](https://commons.wikimedia.org/wiki/File:GEARED_HINGES.JPG): Photo of aluminium continuous geared hinges showing the gear-toothed leaves, by the inventor of the modern design *(licence: Public domain (released by the author))*
  - [ALUMINUM CONTINUOUS GEARED HINGE.jpg (Wikimedia Commons, by Austin R. Baer)](https://commons.wikimedia.org/wiki/File:ALUMINUM_CONTINUOUS_GEARED_HINGE.jpg): Illustration of the design and origin of the aluminium continuous geared hinge *(licence: Public domain (released by the author))*
  - [One-piece Geared Hinge Can Take The Weight (Hackaday, January 2022)](https://hackaday.com/2022/01/24/one-piece-geared-hinge-can-take-the-weight/): Photos of E. Soderberg's print-in-place herringbone geared hinge and its load test with weights *(licence: link only)*
  - [Print in Place Geared Hinge (E. Soderberg, Printables)](https://www.printables.com/model/120766-print-in-place-geared-hinge): Model page with photos of the printed hinge and of two hinges holding 95 kg; URL found in search results, details read through the Printables public API *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- **make_it_yourself**: 
  - [Print in Place Geared Hinge (E. Soderberg, Printables)](https://www.printables.com/model/120766-print-in-place-geared-hinge): Printable one-piece herringbone geared hinge, tested to 95 kg with two hinges in PLA; includes a double-height version for heavier loads. URL found in search results; details read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Print in place mini gear hinge assortment (E. Soderberg, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/124967-print-in-place-mini-gear-hinge-assortment): Smaller print-in-place herringbone gear hinges with clearances fixed for the smaller size, plus a PDF of dimensions. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Geared Hinge (E. Soderberg, Printables)](https://www.printables.com/model/105612-geared-hinge): Earlier two-part geared hinge with pins pressed into the gears, and long- and short-tab leaves that can be mixed. URL found in search results; details read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [Parametic Gear Hinge (I.Hawel, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/885139-parametic-gear-hinge): A customisable gear hinge where gear diameter, height, number of teeth, helix angle, leaf length and screw holes can be changed. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
  - [BOSL2 gears.scad: spur_gear() with herringbone=true (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/gears.scad): Parametric involute spur, helical and herringbone gears that can be used to model your own geared hinge *(licence: BSD 2-Clause)*
- **diagram_idea**: A top-down view looking along the hinge axis: two leaves each ending in a toothed disc, held by a small cap; an animation swings the left leaf open and shows the right leaf turning by the same amount as the teeth mesh, with a side-view inset of the V-shaped herringbone teeth that stop the leaves sliding up or down.
- **sources**: 
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

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, load, materials, motion, play_and_precision, processes, reuse_cycles

## 64 Friction hinge (torque hinge)

*hinges & pivots.* A hinge with built-in friction that stays at any angle you leave it, like a laptop screen

### What it is

- **plain_name**: A stiff hinge that stays at whatever angle you leave it, like a laptop screen that doesn't flop back or fall shut
- **term**: Friction hinge (constant torque hinge, torque hinge)
- **aliases**: 
  - torque hinge
  - constant torque hinge (resistance is the same all the way round; Southco's and Design World's term)
  - position control hinge / positioning hinge
  - free-stop hinge (Reell)
  - adjustable friction hinge / hinge with adjustable friction (Elesa CFU series; the squeeze is set with a screw)
  - one-way torque hinge (friction in one direction only, e.g. Sugatsune HG-TQA (brand))
  - laptop hinge / display hinge / monitor tilt hinge
  - clip friction hinge (Reell's patented design with C-shaped clips on a shaft)
  - friction stay (for windows; a sliding version, see 'Lid and flap stays')
  - stay-open hinge or stiff hinge (maker wording)
- **family**: hinges & pivots
- **other_families**: clamping, magnetic & friction connections, torque limiting & slip
- **one_liner**: A hinge with a built-in, controlled amount of rubbing (friction) inside it, so that it holds a lid, screen or door at any angle against its own weight but still turns smoothly when you push it.
- **complexity**: A small assembly that acts as one unit: two leaves or brackets, a shaft (pin), and a friction pack that squeezes the shaft. Common friction packs: a stack of friction washers and dished spring washers clamped by a nut or rivet (laptop type; Canon patent US5652694, Restarters wiki); several stamped metal clips gripping the shaft with an interference fit (Reell clip hinge, USRE37712E1); a curled spring sheet wrapped round the shaft (curl type); or a shaft press-fitted into a tube (pipe type) (Sugatsune; Mansfield). Adjustable versions add a tensioning screw (Elesa CFU). Printed versions: printed knuckles, a metal bolt as the pin, a nylon-insert lock nut and rubber O-rings or a TPU (flexible) core.
- **how_it_works**: Something springy squeezes the hinge's turning surfaces together, so they rub (friction) whenever the hinge turns. The squeeze is set so that the rubbing resists a bit more turning force (torque) than the lid's weight creates, so the lid stays put, but less than a hand can easily apply, so you can still move it. Because rubbing friction hardly changes with angle, the resistance is roughly the same all the way round (constant torque), with no clicks and no spring-back. The squeeze comes from spring washers on the shaft, clips or a curled spring sheet that are slightly too small for the shaft (an interference fit), or an adjusting screw; in Reell's clip design, adding clips adds torque in equal steps (USRE37712E1).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): it is a hinge that swings
  - slow it, stop it or keep its speed steady: the friction holds a lid, screen or door at any angle and stops it falling or swinging shut (one-way types add friction only in the closing direction)
- **motion**: rotate; range depends on the hinge, e.g. up to 275° for Elesa CFU adjustable friction hinges (-95° to +180°), about 180° for most leaf-type hinges
- **degrees_of_freedom**: 1: rotation about the hinge pin; the friction pack only resists that rotation, it does not add any other movement
- **special_behaviour**: 
  - torque-limiting (slips or clicks at a set force/torque): it is really a slip joint; it holds until you push with more than its set turning force (torque), then it slips smoothly
  - one-way (moves freely one way, locks the other): only in one-way torque hinges, which have friction in one direction and turn freely in the other (Sugatsune; Design World); they do not lock, they just resist
  - none of the others: it has no clicks (indexing), no lock and no spring-back (the panel stays where it is put)
- **holding_principle**: 
  - friction or clamping (force-fit): surfaces squeezed together rub and resist turning
  - spring force (a spring or springy part presses it in place): spring washers, clips, a curled spring sheet or a rubber O-ring/TPU core keeps the squeeze on as parts wear
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: screwed or bolted on like an ordinary hinge (e.g. Elesa CFU: pass-through holes for cylindrical head screws); riveted laptop and appliance hinges are semi-permanent
- **reuse_cycles**: many times: can be unscrewed and refitted; commercial hinges are rated for tens of thousands of opening cycles, e.g. 20,000 to 50,000 cycles within torque tolerance (Mansfield), up to 50,000 (Reell) and more than 60,000 with unchanged torque (Elesa CFU)
- **tools_needed**: screwdriver or hex key to fit; a hex key or spanner to adjust the friction on adjustable types (Elesa CFU; laptop retaining nut per Restarters wiki); none to operate
- **seal**: none
- **load**: light to medium: holding turning force (torque) per hinge runs from tenths of a newton-metre to about 20 N·m (Design World); e.g. 1.4 N·m and 4 N·m for the two Elesa CFU sizes and up to 11.3 N·m per hinge (22.6 N·m per pair) for Reell's largest. Like any hinge it is strong against the panel's weight hanging on the pin (shear); the limit is how much turning force it can resist before it slips. Heavy panels (roughly 15 to 500 lb) are better served by counterbalance hinges (Machine Design).
- **adjustable**: Depends on type. Constant torque hinges: no, the torque is set in the factory (Design World; Mansfield). Adjustable torque hinges: yes, turn a screw clockwise to increase friction and anticlockwise to reduce it (Elesa CFU), or tighten the retaining nut on a laptop-style washer hinge (Restarters wiki). Printed hinges: tighten the bolt and lock nut that squeeze the knuckles, or print a tighter or looser part.
- **play_and_precision**: small: no clicks and no spring-back, and it stays wherever it is left, but the holding torque of a hinge varies, e.g. hinges sold with a ±20% torque tolerance (Sugatsune torque calculation page). It does not locate a repeatable angle (use a detent hinge for that). *(unverified parts omitted)*
- **access_needed**: one side only (blind) when the leaves screw into tapped holes or thick parts; both sides when bolted through thin panels with nuts
- **materials**: Commercial: zinc, stainless steel, aluminium or glass-filled nylon bodies (Reell); acetal (POM) technopolymer body with a polycarbonate pin and stainless-steel screw (Elesa CFU); mostly stainless steel (Sugatsune). Friction parts: stamped metal clips (Reell patent), compressible friction washers (Canon patent), metal-on-metal or metal-on-polymer surfaces (Mansfield). Printed: PLA or PETG knuckles with a steel bolt, nylon lock nut and rubber O-rings or a TPU core.
- **maker_difficulty**: easy to moderate: easy to buy and screw on, or to print a hinge that is squeezed by a bolt, lock nut and O-rings; moderate to print one that keeps the same holding force for a long time, because squeezed plastic relaxes (DuPont design guide)

### Making it

- **processes**: 
  - off-the-shelf part: constant torque, adjustable friction and one-way torque hinges, torque inserts (Reell), laptop hinges
  - 3D print (FDM): printed knuckles squeezed by a bolt and lock nut with O-rings or a TPU core, or a printed screw-and-slider friction mechanism
  - woodwork: fitting bought friction hinges to lids, flaps and cabinets *(unverified parts omitted)*
- **print_in_place**: partly: print-in-place hinges can be given friction by adding a bolt and nut to squeeze the knuckles (e.g. KatDelgado's 'Friction Hinge Mechanism' is printed as separate parts (threaded barrel, two caps, threaded slider) and screwed together. *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Don't rely on a tight printed fit for the friction. Plastic that is held squeezed slowly loses its grip (stress relaxation), so a press-fitted or tight hinge loosens, and heat speeds this up (DuPont design guide, pp. 23 and 72). DuPont's advice for plastic friction couplings: if a constant torque must be held for a long time, add a metal spring to keep the force constant (p. 48). PLA creeps most, PETG less (thrinter creep test). 2) Easiest reliable design: print ordinary knuckles with normal clearance (at least 0.3 mm for moving parts, Prusa) and make the friction adjustable: a steel bolt as the pin, a nylon-insert lock nut, and rubber O-rings or a flexible TPU ring pressed between the knuckle faces. The rubber keeps pressing as parts wear, like a spring washer. 3) For a hinge that needs no bolt, KatDelgado's printed 'Friction Hinge Mechanism' turns rotation into sliding: a threaded barrel drives a slider along a hex (later square) shaft, and the rub of the slider on the shaft gives the resistance. The published phone-stand settings were a 0.15 mm per face offset on the shaft and a 14 mm long slider, with threads offset 0.1 mm; the caps must be held so they can't be pushed apart; a square shaft printed lying flat worked more consistently because no layer lines catch (Printables, CC BY). 4) In OpenSCAD, BOSL2's knuckle_hinge() can make the pin hole for a machine screw (pin_diam="M3"), with clearance holes through most knuckles and a self-tapping hole in the last one; its print-in-place option uses interlocking cones whose angle changes how tight the hinge is (BOSL2 hinges.scad). 5) Work out the torque you need before choosing sizes: lid weight times the sideways distance from the hinge pin to the lid's centre of gravity, worst when the lid is horizontal, plus a margin (see rules of thumb). A small printed friction hinge held up a phone in a case (KatDelgado); bigger lids need two hinges, a metal hinge or a stay. 6) Print knuckles so that bending doesn't split the layers: printed layers bond at only about half the in-plane strength (vertical PLA hooks failed at 55% and PETG at 46% of the flat-printed load, CNC Kitchen). 7) Material: PETG or ASA for anything warm; PLA started to give way at 60 °C and PETG at 80 °C in CNC Kitchen's hot-load test, and friction parts creep faster when warm. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'friction hinge', 'torque hinge', 'constant torque hinge', 'position control hinge', 'free-stop hinge', 'adjustable friction hinge', 'one-way torque hinge', 'torque insert' (Reell), 'laptop hinge' (replacement part by model number), 'friction stay' (windows). Parts for DIY friction: 'nylon-insert lock nut' (nyloc), 'spring washer', 'Belleville washer' or 'disc spring', 'wave washer', 'friction washer', 'O-ring', 'shoulder bolt'. Makers: Reell, Southco, Sugatsune, Elesa (brands).
- **rules_of_thumb**: 
  - Torque needed = weight x horizontal distance from the hinge axis to the centre of gravity (Reell; Sugatsune: M = X1 x m, e.g. a 0.8 kg door with its centre of gravity 0.2 m from the axis needs about 1.57 N·m, or 0.79 N·m per hinge when two hinges share it). It is greatest when the panel is horizontal; one guide writes it as weight x distance x cos(angle) (Mansfield).
  - For a plain, even panel the centre of gravity is halfway across, so torque = (distance from hinge to door edge x weight) / 2 (Sugatsune 'The ABC's of Torque Hinges').
  - Add a margin: Sugatsune adds about 20% (with ±20% torque tolerance, the door's moment should be 20% below the hinge's average torque); Design World and Mansfield suggest adding about 30%.
  - Adding hinges shares the load: divide the total torque by the number of hinges (Sugatsune).
  - Typical commercial holding torque: tenths of a N·m up to about 20 N·m per hinge (Design World); Reell's largest hold 11.3 N·m each (Reell).
  - Typical life: 20,000 to 50,000 cycles within torque tolerance (Mansfield); Elesa CFU tested to more than 60,000 cycles with unchanged torque.
  - Standard friction hinges are usually rated about -20 °C to 65 °C; special oven hinges go higher (Mansfield).
  - Plastic friction or spring parts lose force over time by stress relaxation; for a torque that must stay constant for a long time, add a metal spring (DuPont design guide, p. 48).
  - Choose a friction (constant torque) hinge to hold any angle, a detent hinge for set angles with a click, and a counterbalance hinge or gas strut for heavy doors (Machine Design; Design World).

### When to use it

- **everyday_examples**: 
  - A laptop screen that stays at any angle (Design World; aboutmechanics.com)
  - Computer monitors and tablet or display stands that tilt and stay (Reell: 'monitors, laptop lids or automotive mirrors')
  - Car centre-console lids and infotainment screens (Design World)
  - Casement windows on friction stays, which hold the sash open against wind (Thang, 2700 Animated Mechanical Mechanisms, Part 3, p. 149)
  - Medical equipment arms and covers, and aircraft seat headrests (Design World)
- **when_to_use**: Use a friction hinge when a lid, screen, flap, visor or light should stay at any angle you leave it, without a separate stay, catch or knob to tighten: laptop-style lids, display and tablet stands, folding phone stands, instrument covers, camera or lamp arms that tilt, and printer-enclosure doors that shouldn't swing shut. It gives a smooth, quality feel with no clicks and stops lids from slamming. Use a one-way torque hinge when a lid should open easily but close slowly under its own weight.
- **when_not_to_use**: Avoid it for heavy or long doors and hoods, where the needed torque is too high or the hinge would be hard to move (use a counterbalance hinge, torsion spring or gas strut; Machine Design, Design World); when you need exact, repeatable angles (use a detent hinge or an indexing plunger); when the position must not move if bumped or loaded (use a locking stay, a clevis with a thumbscrew or a Hirth joint); when the panel's weight changes a lot (use an adjustable friction hinge; Design World); and in hot or oily places where friction changes (choose a sealed, stainless or high-temperature type).
- **environment_limits**: Standard friction hinges are rated about -20 °C to 65 °C, with special high-temperature types for ovens (Mansfield). Heat, humidity, chemicals and dirt change friction, and metal-on-polymer friction degrades under heat and chemicals (Mansfield); stainless steel and sealed mechanisms resist corrosion (Design World; Sugatsune). Printed hinges: PLA starts to give way at about 60 °C and PETG at about 80 °C under load (CNC Kitchen), and squeezed plastic relaxes over time, faster when warm, so the hinge slowly loosens (DuPont, p. 72; thrinter). *(unverified parts omitted)*
- **safety_notes**: A friction hinge only resists; it doesn't lock. If the torque is too low for the lid, or the lid gets heavier (added parts) or is bumped, it can drop and pinch fingers or hit a head; size the torque with a margin and use a stay for heavy lids. Hinges are pinch points at the knuckle. Adjustable hinges can be set below the holding threshold by mistake (Mansfield). Laptop hinge repairs involve spring-loaded washer stacks and cracked plastic mounts (Restarters wiki).
- **common_failures**: The friction fades as surfaces wear or the plastic squeeze relaxes, so the lid drifts down; fix by tightening an adjustable hinge, fitting a spring washer, or replacing the hinge (DuPont; Restarters). The mounting fails before the hinge: in laptops the plastic around the threaded brass bushes cracks and the bush pulls out, often from stiff hinges (Restarters wiki). The hinge becomes too stiff after liquid damage or corrosion (Restarters). The hinge was sized without the centre-of-gravity distance or a margin, so it can't hold (Sugatsune; Mansfield). Printed hinges: knuckles split along layer lines, or PLA creeps so the hinge loosens (thrinter; CNC Kitchen); prevent by using a bolt, lock nut and O-rings rather than a tight fit.
- **related**: 
  - Detent hinge (click hinge): holds only at set angles, with a click, instead of anywhere
  - Lid and flap stays (friction stay): a sliding friction arm that holds a lid or window, rather than friction in the hinge itself
  - Friction slip clutch: the same controlled-rubbing idea on a turning shaft, used to protect drives
  - Self-closing hinge (spring hinge): a spring swings the door shut rather than holding it
  - Counterbalance hinge / gas strut: cancels most of a heavy lid's weight instead of just resisting it
  - Rotary damper (soft-close hinge): resists speed rather than position, so a lid closes slowly but doesn't stay open
  - Ball-and-socket joint with friction: the same holding idea in every direction (Reell also makes friction spherical joints)
  - Clevis joint with thumbscrew: holds any angle by clamping, which is firmer but needs a knob turned each time
  - Ordinary butt hinge and print-in-place hinge: swing freely with no holding

### Pictures, videos and models

- **links**: 
  - [Lenovo ThinkPad X220 LCD hinges (Siarhei V, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Lenovo_ThinkPad_X220_LCD_hinges_Kashui_FRU_04W2185_vs_Foxconn_FRU_04W1406.jpg): Photos from several angles of two replacement laptop screen friction hinges side by side *(licence: CC BY-SA 4.0)*
  - [How to Calculate Torque (Sugatsune torque hinge resources)](https://www.sugatsune-intl.com/torque-hinges/torque-calculation/): Diagrams of a door's centre of gravity and the torque formula, a worked example, and a chart of torque tolerance *(licence: link only)*
  - [CFU. Hinges with adjustable friction (Elesa)](https://www.elesa.com/en/elesab2bstoreuk/hinges-with-adjustable-friction-cfu): Product photos and drawings of plastic hinges whose friction is adjusted with a screw; 275° range *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Friction Hinge Mechanism (KatDelgado, Printables)](https://www.printables.com/model/658393-friction-hinge-mechanism): A small printed friction hinge (30 mm long, 16 mm diameter) in which a threaded barrel drives a slider along a hex or square shaft; resistance doesn't depend on angle; no supports; strong enough to hold a phone. Read through the Printables public API. *(licence: CC BY)*
  - [Folding Pocket Phone Stand (Updated) (KatDelgado, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/658410-folding-pocket-phone-stand-updated): A folding phone stand that uses the friction hinge mechanism above to hold a phone at any angle; shows the mechanism in a real product. Read through the Printables public API. *(licence: CC BY-SA)*
  - [BOSL2 hinges.scad (knuckle_hinge module, OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad): Parametric knuckle hinge generator; the pin hole can be sized for a machine screw (e.g. M3) so a bolt and lock nut can squeeze the knuckles, or made print-in-place with cones whose angle sets the tightness *(licence: BSD 2-Clause (BOSL2 LICENSE file))* *(unverified parts omitted)*
- **diagram_idea**: Exploded side view of a laptop-style hinge: a shaft through alternating friction washers and dished spring washers, clamped by a nut, with a lid attached; beside it, arrows showing the lid's weight acting at its centre of gravity (distance x from the pin) against the hinge's friction torque, and a note that the hinge torque must be a bit bigger than weight x distance.
- **sources**: 
  - https://mansfieldec.com/feeds/blog/friction-hinge-design
  - https://www.machinedesign.com/fastening-joining/article/21138788/how-much-torque-do-these-hinges-need
  - https://reell.com/resources/constant-torque-hinges-position-control
  - https://reell.com/resources/frequently-asked-questions
  - https://reell.com/resources/friction-hinge-basics
  - https://www.sugatsune.com/blog/the-abcs-of-torque-hinges/
  - https://www.sugatsune-intl.com/torque-hinges/torque-calculation/
  - https://www.designworldonline.com/what-is-a-friction-torque-hinge/
  - https://www.elesa.com/en/elesab2bstoreuk/hinges-with-adjustable-friction-cfu
  - https://patents.google.com/patent/USRE37712E1/en
  - https://patents.google.com/patent/US5652694
  - https://wiki.restarters.net/Fixing_Laptop_Hinges
  - https://en.wikipedia.org/wiki/Hinge
  - https://www.aboutmechanics.com/what-is-a-friction-hinge.htm
  - https://commons.wikimedia.org/wiki/Category:Laptop_hinges
  - https://commons.wikimedia.org/wiki/File:Lenovo_ThinkPad_X220_LCD_hinges_Kashui_FRU_04W2185_vs_Foxconn_FRU_04W1406.jpg
  - https://www.youtube.com/watch?v=h_7l-gslYdo
  - https://www.youtube.com/watch?v=p9Vf0iJaF1s
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/658393-friction-hinge-mechanism
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE

### Other info

- **Fields with unverified parts:** environment_limits, links, make_it_yourself, making_tips_3d_printing, play_and_precision, print_in_place, processes

## 65 Ball-and-socket joint (lockable ball head)

*hinges & pivots.* A ball held in a cup that can swivel in any direction, sometimes with a clamp to lock it; can be printed in place

### What it is

- **plain_name**: A ball held inside a cup so the part on the ball can swivel and tilt any way you like, like a camera tripod head or a car phone mount; often a knob or ring squeezes the cup to lock it
- **term**: Ball-and-socket joint (spherical joint); lockable version: ball head
- **aliases**: 
  - ball joint
  - spherical joint / spherical pair (S pair) (kinematics term)
  - ball head / ballhead (camera tripod head)
  - lockable ball joint / snap-fit ball joint with locking nut (maker terms)
  - friction ball joint / friction spherical joint (Reell lists spherical joints among its friction products)
  - swivel mount / ball swivel
  - ball-and-socket mount or double-socket arm ('RAM mount', RAM Mounts (brand))
  - tow ball and coupling (trailer hitch)
  - Kugelgelenk (German), rotule (French)
  - universal ball joint (maker name on model sites, though a true universal joint is a different mechanism)
- **family**: hinges & pivots
- **other_families**: snap & clip fits, clamping, magnetic & friction connections, print-in-place & 3D-printing joints, quick-release & tool-free
- **one_liner**: A ball on one part sits in a matching cup (socket) on the other so it can turn about any axis through the ball's centre but can't pull out; friction holds it at an angle, and a knob, nut or clamp can squeeze the cup to lock it.
- **complexity**: A few parts. Basic: a ball on a neck or stud, and a socket whose rim wraps past the ball's widest point. Snap-in versions have a socket split by slots into springy fingers (US4607976, Covestro p. 5). Lockable versions add a clamp: a knob screw pushing a friction pad or cone-shaped compression ring against the ball (tripod ball heads; Lensrentals teardown); a threaded union nut or collar that squeezes the slotted socket fingers (printed lockable ball joints); or two half-cups pulled together by one bolt and knob to grip two balls at once, with a spring pushing them apart when loosened (double-socket arm).
- **how_it_works**: The ball's centre stays fixed inside the cup, so the attached part can swing in any direction and spin, but can't move sideways or pull out (a spherical joint: three turning freedoms, no sliding; Wikipedia 'Kinematic pair'). The socket's lip curls past the ball's widest point (an undercut), so the ball either snaps in by bending the socket's slotted fingers or is trapped by a cap or nut. How firmly it holds an angle depends on how hard the cup presses on the ball: a light press gives a stiff 'friction joint' that holds light things in any position; tightening a knob or nut presses harder and locks it (a ball head's bearing cup 'distorts a bit with pressure, exerting more friction at higher pressures', Lensrentals). The tilt is limited by the neck hitting the rim of the cup, so an ordinary spherical joint can't turn through more than 180° (Thang, 2700 Animated Mechanical Mechanisms, Part 3, p. 172).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): swivel and tilt in any direction
  - lock, and release by hand: lockable versions clamp the ball with a knob, nut or lever
  - join and hold: a snap-in ball holds two parts together while still letting them swivel
- **motion**: rotate in any direction (multiple axes through one point): spin all the way round the neck, and tilt within a cone set by the neck and the socket rim, e.g. about 25-30° either side of centre for a printed universal ball joint (DieZopfe, Printables); an ordinary spherical joint can't exceed 180° of tilt (Thang, Part 3, p. 172)
- **degrees_of_freedom**: 3: rotation about three axes through the ball's centre, no sliding (Wikipedia 'Kinematic pair'; Wikipedia 'Ball joint': free rotation in two planes while preventing translation, plus spin). When locked: 0. Versions with a pin in a groove allow only 2 (Thang, 'Pin spherical joint', Part 3, p. 173)
- **special_behaviour**: 
  - self-aligning or self-centring: it takes up angle errors between two parts, which is why suspension and linkage ends use ball joints and bearings use spherical seats (DuPont design guide p. 45: self-aligning bearings)
  - hand-release only (locks under load, releases when a person operates it): lockable versions hold firm until you turn the knob or nut (tripod ball heads; printed lockable ball joints)
  - quick-release: snap-in balls can be pushed in and pulled out by hand, and double-socket arms release both balls with one knob (Mountguys)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the socket wraps past the ball's widest point, so the ball can't pull out
  - friction or clamping (force-fit): the angle is held only by friction between ball and cup; tightening a clamp raises the friction
  - spring force (a spring or springy part presses it in place): springy socket fingers, rubber-coated balls or a spring in the clamp keep a light grip
  - magnetic: some joints hold a steel ball in a seat with a magnet, e.g. the surgical holding-arm joint in US6350076B1
- **input_output**: not applicable (it passes pushes and pulls through the ball but cannot pass on twisting, because the ball spins freely in the cup; for linkages see 'Rod end and ball link')
- **power**: passive (no power needed). Powered versions exist: a pneumatic balloon that presses on the ball to lock it has zero stiffness (goes floppy) when the air is released (Guo et al. 2022, Polymers); a magnet-locked surgical joint uses a permanent magnet or an electromagnet (US6350076B1)
- **removability**: removable, or tool-free quick release for snap-in balls and double-socket arms (loosen the knob and the spring pushes the cups apart; Mountguys)
- **tools_needed**: none for snap-in joints and knob-locked heads; a spanner, screwdriver or hex key for joints locked by a nut or screw; a press or ball-joint puller for car suspension ball joints
- **seal**: none: the joint itself is open. Car ball joints add a rubber boot that keeps dirt out and grease in (Wikipedia 'Ball joint'); spherical pipe joints use a gasket to seal (Thang, 'Pipe movable connection 1', Part 3, p. 166)
- **load**: light to heavy depending on build. Printed friction joints hold tens to hundreds of grams (e.g. 50-100 g depending on pose for 'The Perfect 3D-Printed Ball Joint'); tow balls carry tonnes (2 in ball with 3,500 lb typical capacity; Wikipedia 'Tow hitch'). Strongest pushing the ball into the cup, weaker pulling it out (only the lip holds it), and weakest resisting a turning force on the locked angle, which is held only by friction.
- **adjustable**: yes: the angle can be set in any direction at any time. Friction is adjustable on lockable types: basic ball heads have one tension control; better ones add a separate drag (friction) control and an independent panning base (Wikipedia 'Tripod head'). Printed types: tighten the union nut or bolt, or print a different socket size.
- **play_and_precision**: none to small when locked; a loose snap-in joint can wobble. Not good at returning to an exact angle, since it has no fixed positions; ball heads are 'lacking in terms of precise movements', making exact alignment hard (Wikipedia 'Tripod head'). It tolerates misalignment by design (it is the self-aligning joint).
- **access_needed**: not applicable: it is a joint between two parts rather than a fastener through a panel; snap-in versions are pushed together from one side, lockable ones need a hand on the knob or nut
- **materials**: Steel (car suspension ball joints, tow balls; Wikipedia); aluminium bodies with a firm, low-friction plastic bearing cup (tripod ball heads; Lensrentals); acetal (Delrin) sockets with nylon balls, which wear little even when dry (DuPont design guide p. 45); rubber-coated balls (RAM-style mounts; Mountguys); PA12 nylon (SLS printed, Guo et al. 2022); printed PLA, PETG and TPU 95A (Printables models); polycarbonate or Ultem for surgical arms (US6730020).
- **maker_difficulty**: easy: prints well as a snap-in or print-in-place joint, and lockable printed designs with a threaded ring are common; moderate to make one that locks firmly under a heavy load, where a bought metal ball head or mount is better

### Making it

- **processes**: 
  - 3D print (FDM): snap-in, print-in-place and lockable ball joints (many Printables designs)
  - 3D print (SLS/MJF nylon): print-in-place ball joints with about 0.5 mm clearance (Guo et al. 2022)
  - off-the-shelf part: tripod ball heads, ball-and-socket mounts, ball studs and sockets, levelling feet with swivel balls
  - injection moulding: snap-in plastic ball sockets, e.g. headlamp adjusters (US4607976) *(unverified parts omitted)*
- **print_in_place**: yes: many ball joints print already assembled, e.g. '92mm Fan Mount with Lockable Ball Joint (Print in Place)' (the ball comes loose with a light twist and a printed nut locks it), 'Articulated Ball Joint Foot for M6 Rod – Print in Place', and SLS-printed PA12 joints with 0.5 mm clearance (Guo et al. 2022). Many others are printed as separate ball and socket and snapped together.
- **making_tips_3d_printing**: 1) Pick the build: a snap-in joint (socket with slots so its fingers flex), a print-in-place joint (ball printed inside the cup with a gap), or a lockable joint (a threaded ring or nut squeezes a slotted socket onto the ball). Chris (Aero)Engineering Design's 'Lockable Ball Joint' uses a coupling nut on an M10 thread, and its designer says the chunkier design is stronger and should survive more cycles than designs with a slotted socket; HD_Creator's 'Generic lockable ball joint' uses a 12 mm ball, and an 18 mm (150%) version for a stronger lock (Printables). 2) Clearance: start at about 0.3 mm for moving parts (Prusa); SLS nylon joints used 0.5 mm (Guo et al. 2022). Printers differ, so print a test: Rob C's tolerance ring has 12 mm pockets with balls from 12.0 mm down to 10.9 mm in 0.1 mm steps (Printables). 3) To hold a pose without a lock, make the fit slightly tight or add a flexible material: Foggiest Idea's joints print the ball in TPU 95A, which has the right friction and 'doesn't wear like PLA does', using octagonal sockets that forgive print errors and printing balls solid (Printables). Daniel Vitanza-style 'light' and 'hard' versions of the same part are a good way to tune friction. 4) Orientation: print the ball with its axis vertical so it is round; threads for the locking nut print best standing up with fine layers (0.08-0.1 mm for small threads), 3-4 perimeters and at least 30% infill (Chris (Aero)Engineering Design). Printed threads can make large squeezing forces, so don't over-tighten; one maker cracked a PLA socket by tightening a lock ring with two wrenches (Hackaday 2018). 5) Make the neck thin and the socket rim low enough for the tilt you need; the tilt is limited by the neck hitting the rim (Thang, Part 3, p. 172). 6) Size the undercut (how much of the ball the socket lip wraps past) so the socket's strain stays safe: for an unslotted ring socket the allowed undercut is about the allowed strain times the diameter, and twice that if ball and socket flex equally (Covestro snap-fit guide, p. 20); a slotted socket is sized like cantilever snap arms (Covestro p. 5). 7) Materials: PETG is tougher and works better than PLA for snap-in joints ('The Perfect 3D-Printed Ball Joint'); PLA creeps, so a PLA joint held squeezed slowly loosens (thrinter), and PLA softens at about 60 °C (CNC Kitchen), so don't use it for a car phone mount in the sun. 8) For heavier devices use a real bolt and nut as the clamp: Anachronist's customisable 'Dual ball-joint mount (aka RAM mount)' uses an M6 hex bolt and nut, at least 5 perimeters and 40% cubic infill, and keeps the arm short so it doesn't flex (Printables).
- **off_the_shelf_parts**: Search for: 'ball head' (tripod), 'mini ball head' (1/4-20 thread), 'ball joint mount', 'ball-and-socket mount' and 'double socket arm' (1 in 'B-size', 1.5 in 'C-size' and 2.25 in 'D-size' balls in the RAM-style system; Mountguys), 'ball stud' and 'ball socket' (snap-in plastic, e.g. for gas struts and headlamp adjusters), 'swivel levelling foot' / 'levelling mount', 'spherical bearing' or 'rod end' (for linkages), 'tow ball' (50 mm ISO or 2 in). Makers of friction spherical joints: Reell (brand); ball heads: Manfrotto and many others (brands).
- **rules_of_thumb**: 
  - A ball-and-socket (spherical) joint has 3 rotational degrees of freedom and no sliding (Wikipedia 'Kinematic pair').
  - An ordinary spherical joint cannot turn through more than 180°; for bigger angles use a universal (Hooke's) joint (Thang, 2700 Animated Mechanical Mechanisms, Part 3, p. 172).
  - Allowed undercut for a ring-shaped (annular) snap socket = allowed strain x diameter; if both parts flex equally the undercut can be twice as large (Covestro 'Snap-Fit Joints for Plastics', p. 20). A socket split by slots is dimensioned as cantilever snap arms (Covestro p. 5).
  - Start with about 0.3 mm clearance for moving printed parts (Prusa); SLS nylon print-in-place ball joints used at least 0.5 mm (Guo et al. 2022).
  - Bigger balls hold more: for heavier devices 'go bigger. The penalty for oversizing is small' (Mountguys); HD_Creator scaled a 12 mm lockable joint to 18 mm for a stronger lock (Printables).
  - Keep arms between ball joints short: 'Short arms are best when stability matters most' (Mountguys).
  - A ball head's bearing cup is a firm plastic that grips harder the harder it is pressed; most ball-head failures (about 90% in Lensrentals' repair experience) are stripped friction-knob threads or a bent push rod, not the ball (Lensrentals).
  - Acetal (Delrin) socket with a nylon ball gives low wear even completely dry (DuPont design guide, p. 45).

### When to use it

- **everyday_examples**: 
  - A camera tripod ball head with a locking knob (Wikipedia 'Tripod head')
  - Your hip and shoulder (Wikipedia 'Ball-and-socket joint')
  - A trailer tow ball and coupling (Wikipedia 'Tow hitch') and a car's suspension ball joints (Wikipedia 'Ball joint')
  - Car and bike phone or GPS mounts with a rubber ball and a clamping arm (Mountguys), and doll or action-figure joints (Wikipedia 'Ball joint')
- **when_to_use**: Use a ball-and-socket joint when something must be aimed in any direction from one point: cameras, lights, phones, sensors, fans, mirrors and webcams; levelling feet that must sit flat on an uneven floor; poseable figures and models. Use a friction ball joint when light parts should stay where posed, and a lockable one (knob, union nut or double-socket arm) when the device is heavier or must not drift. It is also the joint to choose when two parts need to line up by themselves despite angle errors (self-aligning).
- **when_not_to_use**: Avoid it when you need movement about one axis only, since a ball lets the part flop sideways too (use an ordinary hinge or pivot); when you need to repeat exact angles (use a detent, indexing plunger or a geared pan-tilt head; ball heads are poor at precise alignment, Wikipedia 'Tripod head'); when twisting must be passed through the joint (use a universal joint or a pin spherical joint); when tilt beyond about 90° each way is needed (use a universal joint or a gimbal); and for heavy loads that must be locked on a small printed ball (use a bought metal ball head or a larger ball).
- **environment_limits**: Printed PLA joints soften from about 60 °C and PETG from about 80 °C under load (CNC Kitchen), so avoid PLA in a hot car; PLA creeps under a constant squeeze, so friction joints loosen (thrinter; DuPont stress relaxation, p. 23). Dirt and water get into open joints: car ball joints use a rubber boot and grease (Wikipedia 'Ball joint'). Vibration can slowly shift a friction-held joint; longer arms and smaller balls make this worse (Mountguys). *(unverified parts omitted)*
- **safety_notes**: In cars a failed suspension ball joint lets the wheel angle go free and can cause loss of control (Wikipedia 'Ball joint'); a trailer coupling must be fully latched on the tow ball. Snapping balls into tight sockets pinches fingers, and overtightening printed lock rings can crack the socket (Hackaday 2018). *(unverified parts omitted)*
- **common_failures**: The joint won't hold its angle because the friction is too low, the socket has worn or relaxed, or the load is too heavy for the ball size (fix: tighten the lock, use a bigger ball or a shorter arm; Mountguys). The ball pops out because the socket lip is too shallow or the fingers have relaxed (make a deeper undercut or add a locking ring). The socket cracks on assembly or when locking because the undercut or clamping force is too large, or layer lines split (Covestro; Hackaday 2018). Knob threads strip or the push rod bends in ball heads (Lensrentals). Print-in-place joints fuse because the gap is too small (use a test ring; Rob C, Printables). Car ball joints wear and click or clunk (Wikipedia 'Ball joint').
- **related**: 
  - Posable segmented arm (ball chain, modular hose): many small ball-and-socket joints in a row
  - Rod end and ball link: a ball joint on the end of a push rod, for linkages
  - Universal joint (Hooke's joint) and gimbal: tilt in two directions and pass on twisting, with a larger angle range
  - Pan-tilt head and clevis joint with thumbscrew: separate axes that can be set precisely one at a time
  - Friction hinge: the same stay-where-you-leave-it friction, but about one axis
  - Spherical plain bearing / self-aligning bearing: a ball-and-socket used to let a shaft or link self-align
  - Magnet joint: a steel ball held in a seat by a magnet, which lets go instead of breaking

### Pictures, videos and models

- **links**: 
  - [KugelgelenkSchnitt.jpg (S. Wetzel, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:KugelgelenkSchnitt.jpg): A ball joint cut in half, showing the ball on a threaded, cone-shaped stud inside its socket *(licence: CC BY-SA 4.0)*
  - [Ball joint cross section (Silverxxx, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Ball_joint_cross_section_(from_English_Wikipedia_to_be_used_in_other_languages).jpg): A car-style ball joint and a cross-section of one *(licence: public domain)*
  - [Manfrotto 488 RC4.jpg (Nebrot, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Manfrotto_488_RC4.jpg): Photo of a camera tripod ball head with its ball-lock knob and panning-lock lever *(licence: CC BY-SA 3.0 or GFDL 1.2+ (dual licence))*
  - [How a Ballhead Works (Roger Cicala, Lensrentals blog, 2013)](https://www.lensrentals.com/blog/2013/04/how-a-ballhead-works/): Teardown photos of a tripod ball head: the ball, plastic bearing cup, cone-shaped compression ring and knob push rods *(licence: link only)*
  - [Sphere joint having undivided outer part 3 (YouTube, Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=4xufc30z-xo): CAD animation of a slotted ball whose four 'wings' squeeze in to snap into a one-piece socket, then a cone-ended screw spreads them so the ball can't come out (Thang, 2700 Animated Mechanical Mechanisms, Part 3, p. 172; title confirmed via YouTube oEmbed) *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Lockable Ball Joint (Chris (Aero)Engineering Design, Printables) (appeared in search results as its /comments page)](https://www.printables.com/model/368218-lockable-ball-joint): A printable ball joint locked by a coupling nut on an M10 thread, with STEP files to adapt; no supports. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Generic lockable ball joint (HD_Creator, Printables)](https://www.printables.com/model/370429-generic-lockable-ball-joint): A slim lockable ball joint with a 12 mm ball (and an 18 mm version) on a printable M10 thread that fits standard M10 nuts; has add-ons such as a GoPro mount and a mini tripod. Read through the Printables public API. *(licence: CC BY)*
  - [92mm Fan Mount with Lockable Ball Joint (Print in Place) (TimeOut@Home, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1197779-92mm-fan-mount-with-lockable-ball-joint-print-in-p): A print-in-place ball joint with a threaded locking nut, used to aim a PC fan; no supports; PLA at 0.2 mm layers *(licence: CC BY-NC-SA)*
  - [Print in place ball joint tolerance test piece, 12mm pockets, 0.1mm undersize balls (Rob C, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1656213-pint-in-place-ball-joint-tolerance-test-piece-12mm): A test ring with twelve 12 mm pockets and balls from 12.0 to 10.9 mm, to find the clearance your printer needs for print-in-place ball joints *(licence: CC BY-NC-SA)*
  - [Dual ball-joint mount (aka RAM mount) (Anachronist, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/807048-dual-ball-joint-mount-aka-ram-mount): Customisable OpenSCAD double-socket arm that clamps two balls of different sizes with an M6 bolt and finger-tightened knob *(licence: CC BY-NC)*
  - [TPU Ball Joint/Hinge Swivel Joint (Foggiest Idea, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/523542-tpu-ball-jointhinge-swivel-joint): Friction joints printed solid in TPU 95A that hold a pose without wearing loose, with octagonal socket cutters to add to your own models *(licence: CC BY)*
  - [Open Source Universal Ball Joint (to reuse!) (DieZopfe, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/164844-open-source-universal-ball-joint-to-reuse): STEP and Fusion 360 source of a ball-and-socket connection with about 25-30° tilt and 360° spin, to reuse in designs *(licence: CC BY-SA)*
- **diagram_idea**: Cross-section of a ball on a neck inside a cup whose rim wraps past the ball's widest point (the undercut), with slots in the cup and a threaded ring around it; arrows show the part tilting within a cone until the neck touches the rim and spinning about the neck; a second frame shows the ring screwed down, squeezing the fingers onto the ball to lock it.
- **sources**: 
  - https://en.wikipedia.org/wiki/Tripod_head
  - https://en.wikipedia.org/wiki/Ball_joint
  - https://en.wikipedia.org/wiki/Kinematic_pair
  - https://en.wikipedia.org/wiki/Ball-and-socket_joint
  - https://en.wikipedia.org/wiki/Tow_hitch
  - https://commons.wikimedia.org/wiki/Category:Spherical_joints
  - https://commons.wikimedia.org/wiki/File:KugelgelenkSchnitt.jpg
  - https://commons.wikimedia.org/wiki/File:Ball_joint_cross_section_(from_English_Wikipedia_to_be_used_in_other_languages).jpg
  - https://commons.wikimedia.org/wiki/File:Manfrotto_488_RC4.jpg
  - https://www.lensrentals.com/blog/2013/04/how-a-ballhead-works/
  - https://www.mountguys.com/ram-mounts-guide/
  - https://reell.com/resources/friction-hinge-basics
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC9460521/
  - https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557218421.pdf
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - https://patents.google.com/patent/US4607976
  - https://patents.google.com/patent/US6350076B1/en
  - https://patents.google.com/patent/US6730020
  - https://hackaday.com/2018/02/08/printed-lockable-ball-and-socket-helping-hands-plus/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://formlabs.com/blog/how-to-3d-print-interlocking-joints/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.youtube.com/watch?v=4xufc30z-xo
  - https://www.youtube.com/watch?v=gWzPxNvG0Dw
  - https://www.youtube.com/watch?v=KfGUpfkucNM
  - https://www.youtube.com/watch?v=95bZU6ylEzw
  - https://www.youtube.com/watch?v=kztZu3uTyvM
  - https://www.youtube.com/watch?v=DwrlPPTBrPA
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/368218-lockable-ball-joint/comments
  - https://www.printables.com/model/370429-generic-lockable-ball-joint
  - https://www.printables.com/model/789688-adjustablelockable-ball-joint-phone-holder-for-pru

### Other info

- **Fields with unverified parts:** environment_limits, processes, reuse_cycles, safety_notes

## 66 Posable segmented arm (snap-together ball chain, gooseneck)

*hinges & pivots.* A chain of small ball-and-socket segments that snap together and hold any shape by friction, like a coolant hose or a flexible phone holder

### What it is

- **plain_name**: A bendy arm made of many little snap-together ball joints (or a coiled metal tube) that you can bend into any shape and it stays there, like the coolant hose on a milling machine, a flexible phone holder or a desk lamp's neck
- **term**: Posable segmented arm (modular ball-and-socket hose; gooseneck)
- **aliases**: 
  - modular hose / modular coolant hose / segmented hose
  - Loc-Line (brand, 'the original modular hose'); Snapline (brand, named on Printables as another system)
  - coolant hose / coolant arm
  - ball-and-socket arm / ball chain arm / snake arm / articulated arm
  - gooseneck / gooseneck arm / gooseneck tubing / flexible gooseneck (the coiled-wire metal type)
  - Stayput tubing (Whitehouse Flexible Tubing's name for spring-steel gooseneck)
  - flexible arm / flexible phone holder / helping hands (soldering)
  - flexible tripod legs, e.g. GorillaPod (brand)
  - Schwanenhals (German)
  - locking arm / holding arm (cable-tensioned versions in surgery)
- **family**: hinges & pivots
- **other_families**: snap & clip fits, clamping, magnetic & friction connections, seals & pass-throughs, print-in-place & 3D-printing joints
- **one_liner**: A chain of identical short segments, each with a ball at one end and a socket at the other, snapped together so every joint can swivel a little and holds its angle by friction; together they make an arm you can bend into any shape and that stays put, often hollow so coolant, air or cables can pass through.
- **complexity**: A small assembly of many identical parts: segments (ball at one end, socket at the other) plus end fittings such as a threaded or magnetic base, nozzles and device holders (Loc-Line catalogue). Variants: segments with a quarter-turn locking nut on every joint (Alex Rich's locking gooseneck); a steel cable threaded through all the segments and a knob that pulls it tight to lock the whole arm (US6730020); and the metal gooseneck, which is not segmented but made of two wires wound together, a round-section spiral inside a triangular- or D-section spiral (Wikipedia 'Gooseneck (fixture)'; Whitehouse).
- **how_it_works**: Each segment's ball is pushed into the next segment's socket, whose lip wraps past the ball's widest point so it snaps in and can't fall out; the fit is tight, so each joint swivels by only a limited angle and holds that angle by friction ('just enough friction to hold position once set, but it can be repositioned by hand', AIMS). Many small bends add up, so the whole arm can be curved into any shape and even turned back on itself (16 joints in Alex Rich's design). In modular hose the segments are hollow and a tapered skirt lets the ball swivel without cutting off the flow (modularhose.com). In a metal gooseneck, bending pushes the tips of the outer triangular wire between the turns of the inner round wire, and friction between them holds the bend (Wikipedia 'Gooseneck (fixture)'). In cable-locked arms, pulling the central cable tight squeezes every ball into its socket so the whole arm goes rigid at once; slackening it lets it bend again (US6730020).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): bend into any shape by hand
  - join and hold: holds a nozzle, lamp, phone, camera or part in the chosen position
  - seal it, or pass cables or fluid through: hollow segments carry coolant, air, vacuum or wires
  - lock, and release by hand: only locking versions (a locking nut on each joint, or a cable pulled tight by a knob)
- **motion**: multiple: each joint swivels and tilts a limited amount (a few tens of degrees), and many joints add up to any curve, including turning back on itself (Alex Rich, hackaday.io); length changes by adding or removing segments
- **degrees_of_freedom**: 3 per joint (each ball-and-socket joint turns about three axes), so an arm of n joints has 3n in total; in practice it behaves like a bendable rod that can take any curve. A cable-locked arm has 0 when locked. A metal gooseneck bends in any direction but hardly twists.
- **special_behaviour**: 
  - none: the basic arm has no clever action; it simply holds any shape by friction in every joint and stays there 'without any spring back' (modularhose.com, a Loc-Line distributor)
  - hand-release only (locks under load, releases when a person operates it): cable-locked arms go rigid when a knob pulls the cable tight and floppy when it is released (US6730020); locking-nut arms lock each joint separately (Alex Rich)
- **holding_principle**: 
  - friction or clamping (force-fit): friction in every joint (or between the gooseneck's wires) holds the shape; a tensioned cable raises the friction to lock it
  - shape (the parts interlock; form-fit): each ball is trapped by its socket's lip, which holds the chain together
  - spring force (a spring or springy part presses it in place): the socket's springy walls keep pressing on the ball; spring-steel wire in goosenecks
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: segments snap apart again by hand or with assembly pliers (Loc-Line); end fittings screw on
- **reuse_cycles**: many times: can be re-shaped endlessly and taken apart and rebuilt; segments that are pulled apart and re-snapped often, or bent many times on a vibrating machine, loosen and should be replaced (AIMS)
- **tools_needed**: none for small (1/4 in) segments and most printed ones; hose assembly pliers for 1/2 in and especially 3/4 in modular hose (AIMS; Loc-Line catalogue); a spanner for locking-nut joints
- **seal**: loose: the tight ball-in-socket contact seals well enough to carry low-pressure coolant, air or vacuum (Loc-Line 1/4 in: 30-50 psi; 1/2 in: 20-30 psi; Spherical pipe joints for higher pressure add a gasket (Thang, 'Pipe movable connection 1', Part 3, p. 166). *(unverified parts omitted)*
- **load**: light: meant for nozzles, lamps, phones, magnifiers and small parts. A printed PLA helping-hands arm with twist-lock joints was 'at the edge of that limit' holding an 83.5 g magnifying glass, although ten joints hung in a chain could carry a drill in tension (Hackaday 2018); an original GorillaPod (brand) was rated for cameras up to 275 g (webBikeWorld); a fully printed phone arm of a different, screw-tightened design holds about 500 g (FunkyArt, Printables). Weak when pulled apart lengthwise: unlocked ball chains 'pop apart too easily' (Alex Rich). *(unverified parts omitted)*
- **adjustable**: yes: re-shape by hand at any time; length adjusted by adding or removing segments ('fully hand adjustable in both position and length', Loc-Line); stiffness by choosing tighter or looser segments (Daniel Vitanza's 'light' and 'hard' printed versions) or by tightening locking nuts, which have several positions to take up wear (Alex Rich).
- **play_and_precision**: noticeable: it is for rough aiming, not precise positioning. Maker claims differ: Loc-Line says it 'stays in position' and 'creep due to machine vibration is eliminated' (Loc-Line catalogue), while a distributor warns of drift and pop-off from vibration and repeated adjustment on high-cycle machines (AIMS). *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: it attaches by its ends, screwing or snapping onto a base fitting at one end and a nozzle or holder at the other
- **materials**: Acetal copolymer (Loc-Line; the same family as Delrin), with acid-resistant polyester versions (Loc-Line; AIMS); spring-steel D-section wire with chrome plating for goosenecks (Whitehouse); hard plastics such as polycarbonate or Ultem with elastomer-coated sockets for cable-locked surgical arms (US6730020); rubber rings on flexible tripod legs (Gizmodo); printed PETG (preferred), PLA (creeps) or TPU.
- **maker_difficulty**: easy: segments print without supports and snap together; moderate to get the friction right for a heavier load, which usually means printing test versions or adding locking nuts or a cable

### Making it

- **processes**: 
  - off-the-shelf part: modular coolant hose kits and nozzles, gooseneck tubing, flexible phone and lamp arms
  - 3D print (FDM): snap-together ball-and-socket segments, modular hose segments, locking-nut arms, parametric OpenSCAD hose libraries
  - sheet metal / wire forming: coiled-wire goosenecks (made by specialist manufacturers) *(unverified parts omitted)*
- **print_in_place**: no: segments are printed separately (usually one per part or many on one plate) and snapped together; Printables also has print-in-place articulated toy animals with ball-socket joints, but posable arms are normally assembled
- **making_tips_3d_printing**: 1) Material: use PETG, not PLA. PLA creeps and 'will creep and get loose over time' in ball-socket tubing (Jack, Printables 'Ball-Socket joint tubing'); PLA showed the most creep in a clip test (thrinter) and softens from about 60 °C (CNC Kitchen). PETG also flexes more than PLA, which helps the segments bend slightly as they snap together (bulbasaur0), and printed PETG links are 'plenty sturdy' (nickcin). 2) Orientation: print each segment standing up with the ball down and the socket up, so the ball is round and supports don't end up inside the socket; add a small brim or brace if tall segments might break off the bed (nickcin 'Snap Ball Socket Joint Link'; Alex Rich). 3) Settings from working designs: 0.2 mm layers, 2 perimeters, 100% infill, no supports, random seam (Daniel Vitanza 'Modular Hoses (Loc-line like)'); walls two perimeters thick (0.8 mm with a 0.4 mm nozzle) for hollow hose segments (bulbasaur0). 4) Tune the friction by printing versions: Vitanza offers 'light' segments that are easy to bend but hold only light electronics and 'hard' ones that hold more but are tougher to move, because grease or lubricant didn't work well for printed segments. 5) Assembly: line the two segments up on the same axis and press hard until the ball is fully inside, then bend each joint once to break in the rough printed surface (Vitanza). For big segments use pliers or a clamp. 6) If it keeps popping apart, add a locking nut on each joint: Alex Rich's design uses a quarter-turn twist-lock nut over a slotted socket, with several lock positions to take up wear (Printables 'Locking ball and socket arm'; hackaday.io). Don't overtighten printed lock rings with tools: one PLA socket cracked (Hackaday 2018). 7) For a whole arm that locks at once, thread a strong cord or cable through a central hole and tighten it with a knob or screw; tension squeezes every joint (US6730020); a 4 mm hole in each segment also lets you run wires for a lamp (nickcin). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'modular hose', 'modular coolant hose', 'coolant hose kit', 'hose assembly pliers', 'flare nozzle', 'round nozzle' and 'hose segments' in 1/4 in, 1/2 in, 3/4 in or 2.5 in (vacuum) sizes (Loc-Line (brand) and compatible brands); 'gooseneck tubing', 'flexible gooseneck', 'stayput tubing'; 'flexible arm phone holder', 'magnetic base flexible arm', 'helping hands'; 'flexible tripod' (GorillaPod (brand)); Note that cheap copies may use incompatible connectors (AIMS). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Modular coolant hose sizes and working pressures: 1/4 in system 30-50 psi; 1/2 in 20-30 psi; 3/4 in 10-20 psi (Loc-Line catalogue, RS Components copy, p. 1).
  - Acetal modular hose: melting point 165 °C, maximum operating temperature 76 °C (Loc-Line catalogue p. 1).
  - Acetal hose resists oils, petrol, greases, alcohol and acetone, but not acids, strong bases or hypochlorite (bleach) solutions (Loc-Line catalogue p. 1).
  - Hand assembly gets harder with size: 1/4 in segments snap together fairly easily, 3/4 in is very difficult without pliers (AIMS).
  - With about 16 joints a ball-socket arm can turn right back on itself (Alex Rich, hackaday.io).
  - A printed PLA ball-and-socket helping-hands arm was at the edge of its limit holding an 83.5 g magnifier, even though ten joints hung in a line held a drill in tension (Hackaday 2018): printed chains are strong when pulled but weak at holding weight out sideways, so plan for tens of grams unless they lock.
  - Keep arms short and balls big for stability: 'The longer the arm, the more movement you introduce' (Mountguys).
  - Metal gooseneck tubing: spring-steel D-section wire, sizes from 4 mm to 19 mm outside diameter, up to 1 m long (Whitehouse 'Stayput & Gooseneck Tubing').

### When to use it

- **everyday_examples**: 
  - The flexible coolant hose that aims cutting fluid on lathes and milling machines (Loc-Line; Wikipedia 'Gooseneck (fixture)')
  - Gooseneck desk lamps and conference microphones (Wikipedia 'Gooseneck lamp'; 'Gooseneck (fixture)')
  - Flexible phone holders and soldering 'helping hands' arms (Hackaday 2018)
  - Bendy tripod legs such as the original GorillaPod (brand), which had nine ball-and-socket joints per leg (webBikeWorld)
- **when_to_use**: Use it when something light has to be aimed or held in an awkward spot and re-aimed often: coolant, air-blast or vacuum nozzles, lights, magnifiers, webcams, phones, sensors, fans, and parts held for soldering. It routes around obstacles, carries fluid, air or cables inside, reaches in 3D without any tools, and is easy to lengthen or shorten. Printed versions are cheap to make in any colour and length. Choose a locking version (locking nuts or a tensioned cable) when it must hold something heavier or survive knocks.
- **when_not_to_use**: Avoid it for heavy loads or long reaches (use a jointed arm with lockable joints, a ball-head mount with a short arm, or a monitor arm); where the position must be exact and repeatable (use a rigid bracket or indexed joints); on machines with hot chips, which melt acetal hose (AIMS), or at high fluid pressure (use metal pipe or proper hose); and where it will be yanked lengthwise, since unlocked chains pop apart (use locking segments). For carrying cables along a machine's moving axis use a cable carrier (drag chain) instead, which bends in one plane and doesn't need to hold a shape.
- **environment_limits**: Acetal modular hose: maximum operating temperature 76 °C (melts at 165 °C); not resistant to strong acids, strong bases or bleach (Loc-Line catalogue); hot chips from machining can melt it, so aim it 30-45° away from where chips fly (AIMS). Acid-resistant polyester versions exist (Loc-Line; AIMS). Vibration and repeated adjusting can make segments drift or pop off over time (AIMS), although the maker says vibration creep is eliminated (Loc-Line). Printed PLA segments creep and loosen and soften from about 60 °C (thrinter; CNC Kitchen; Jack, Printables). Flexible aluminium-core arms can snap if bent back and forth too often, while ball-joint legs are very hard to break (Gizmodo on GorillaPod redesign).
- **safety_notes**: An unlocked arm can pop apart or sag and drop what it holds (Alex Rich, hackaday.io), so don't hang anything heavy, hot or sharp over people or delicate work. On machine tools, keep the hose clear of the cutter and chips; acetal hose won't damage a cutter if touched, unlike metal hose (Loc-Line catalogue), but hot chips melt it (AIMS). Snapping large segments together pinches fingers; use the assembly pliers (AIMS). *(unverified parts omitted)*
- **common_failures**: Joints wear or creep loose so the arm sags or drifts (replace segments, print 'hard' versions, or use PETG instead of PLA; AIMS; Vitanza; Jack). Segments pop apart when pulled or knocked (add locking nuts; Alex Rich). Sockets crack during assembly or when a lock ring is overtightened, especially in PLA (Hackaday 2018). The arm is too long or the load too heavy, so the base joint slips (shorter arm, bigger size; Mountguys). Hot chips melt segments, or long swarf wraps round the hose and pulls it loose (AIMS). Cheap copies don't fit genuine fittings (AIMS). *(unverified parts omitted)*
- **related**: 
  - Ball-and-socket joint (lockable ball head): a single joint of the same kind, usually lockable
  - Gooseneck (coiled-wire tube): holds any shape by friction between wound wires rather than separate joints (covered in this entry)
  - Bendable wire core (e.g. aluminium-core tripod legs): simpler and grippier, but can snap after repeated bending (Gizmodo)
  - Cable-locked holding arm: the same ball chain with a central cable that locks every joint at once (covered in this entry)
  - Articulated arm with lockable hinge joints: fewer, bigger joints that lock firmly, for heavier devices (e.g. HardwareLab's printed arm)
  - Locking profile snake (contour gauge chain): links that go rigid when pressed together on tapered posts (LoboCNC, Printables)
  - Cable carrier (drag chain, energy chain): links that bend in one plane to guide moving cables; it doesn't hold a shape
  - Friction hinge: holds any angle about one axis only

### Pictures, videos and models

- **links**: 
  - [Schwanenhals 2.gif: principle of a gooseneck construction, bent (Salino01, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Schwanenhals_2.gif): Diagram of a bent gooseneck: a round-wire spiral with a triangular-wire spiral wound around it, whose tips slip between the turns when bent (a straight version is File:Schwanenhals_1.gif) *(licence: CC BY-SA 3.0 / 2.5 / 2.0 / 1.0 or GFDL 1.2+ (multi-licence))*
  - [Detail of a gooseneck arm (Phrontis, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Detail_Schwanenhals_Leuchte_waagerecht.jpg): Close-up photo of a lamp's gooseneck arm *(licence: CC BY-SA 3.0)*
  - [Printed It: Do More With Lockable Ball And Socket Helping Hands (Steven Dufresne, Hackaday, 2018)](https://hackaday.com/2018/02/08/printed-lockable-ball-and-socket-helping-hands-plus/): Photos of a printed ball-and-socket arm with slotted sockets and twist-lock rings, used as soldering helping hands and a magnifier holder *(licence: link only)*
  - [Pipe movable connection 1 (YouTube, Nguyen Duc Thang, thang010146)](https://www.youtube.com/watch?v=DwrlPPTBrPA): CAD animation of a spherical joint arranged for tubing, with a gasket for sealing, the principle behind swivelling hose joints (Thang, 2700 Animated Mechanical Mechanisms, Part 3, p. 166; title confirmed via YouTube oEmbed) *(licence: link only (standard YouTube licence))* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Modular Hoses (Loc-line like) (Daniel Vitanza, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/73716-modular-hoses-loc-line-like): Printable modular hose segments in 'light' and 'hard' friction versions, plus nozzles and clip heads; PETG, 100% infill; not compatible with commercial hose *(licence: CC BY-NC)*
  - [Snap Ball Socket Joint Link - Gooseneck Articulated Arm (nickcin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/393094-snap-ball-socket-joint-link-gooseneck-articulated-): A small (about 16 mm) snap-together ball-and-socket link with a 4 mm hole for wires; print ball side down in PETG *(licence: Creative Commons Public Domain (Printables))*
  - [Locking ball and socket arm (Alex R, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/7927-locking-ball-and-socket-arm): Ball-and-socket gooseneck with a quarter-turn twist-lock nut on each joint so it can't pop apart; project write-up at https://hackaday.io/project/5739-locking-ball-and-socket-gooseneck-system *(licence: CC BY-SA)*
  - [Articulated Arm (Jack, Printables)](https://www.printables.com/model/80144-articulated-arm): Parametric OpenSCAD chain of lockable ball joints (e.g. 8 mm balls, 25 mm per link) whose threaded parts are tightened to adjust stiffness or lock them, allowing up to 90° angle; no supports; a little grease on ball and thread is suggested. Read through the Printables public API. *(licence: Creative Commons Public Domain (Printables))*
  - [Ball-Socket joint tubing (Jack, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/350399-ball-socket-joint-tubing): OpenSCAD ball-socket links that chain into a jointed hose (Loc-Line style); the author warns not to use PLA because it creeps and gets loose *(licence: Creative Commons Public Domain (Printables))*
  - [Segmented Modular Hose, Parametric and Customizable (bulbasaur0, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/657275-segmented-modular-hose-parametric-and-customizable): Open-source OpenSCAD library for segmented hose parts (segments, fan and vacuum connectors, magnetic bases); 0.8 mm walls, PETG recommended *(licence: CC BY-SA)*
  - [Locking Profile Snake (LoboCNC, Printables)](https://www.printables.com/model/901942-locking-profile-snake): A snake-like chain that goes from floppy to rigid when the links are pressed together onto tapered posts, avoiding friction joints that loosen over time. Read through the Printables public API. *(licence: CC BY-SA)*
- **diagram_idea**: A cut-away of three hollow segments, each ball snapped into the next socket, bent into a gentle curve with the small tilt at each joint marked and adding up; a coolant stream flowing through the middle; a small inset shows the cable-locked version, with a knob pulling a central cable to squeeze all the joints tight.
- **sources**: 
  - https://en.wikipedia.org/wiki/Gooseneck_(fixture)
  - https://en.wikipedia.org/wiki/Gooseneck_lamp
  - https://commons.wikimedia.org/wiki/File:Schwanenhals_1.gif
  - https://commons.wikimedia.org/wiki/File:Schwanenhals_2.gif
  - https://commons.wikimedia.org/wiki/File:Detail_Schwanenhals_Leuchte_waagerecht.jpg
  - https://flexible-tubing.com/product/stayput-gooseneck-tubing/
  - https://www.loc-line.com/
  - https://docs.rs-online.com/27df/0900766b80d6f905.pdf
  - https://www.modularhose.com/loc-line-world
  - https://aimsindustrial.com.au/blogs/product-guides/loc-line-modular-hose-guide
  - https://hackaday.io/project/5739-locking-ball-and-socket-gooseneck-system
  - https://hackaday.com/2018/02/08/printed-lockable-ball-and-socket-helping-hands-plus/
  - https://patents.google.com/patent/US6730020
  - https://www.webbikeworld.com/gorillapod/
  - https://gizmodo.com/joby-redesigned-the-flexible-legs-on-its-iconic-gorilla-1847808657
  - https://www.mountguys.com/ram-mounts-guide/
  - https://www.youtube.com/watch?v=DwrlPPTBrPA
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/
  - https://www.printables.com/model/80144-articulated-arm
  - https://www.printables.com/model/901942-locking-profile-snake
  - https://www.printables.com/model/1114209-articulated-arm

### Other info

- **Fields with unverified parts:** common_failures, links, load, making_tips_3d_printing, off_the_shelf_parts, play_and_precision, processes, safety_notes, seal

## 67 Clevis joint (fork-and-pin joint, prong mount)

*hinges & pivots.* A fork on one part, a tongue on the other and a pin through both, giving a simple strong pivot; interleaved-prong action-camera mounts tighten it with a thumbscrew to set the angle

### What it is

- **plain_name**: A hinge made from a fork on one part that wraps around a flat tab on the other, with a pin or bolt pushed through both so they can swing; action-camera mounts use the same idea with flat interlocking fingers that a thumb screw squeezes together so they hold any angle
- **term**: Clevis joint (clevis and pin; called a knuckle joint in machine-design textbooks)
- **aliases**: 
  - fork-and-pin joint
  - clevis and tang (the tang or tongue is the piece that sits inside the fork; Wikipedia)
  - fork joint, fork head or clevis fork head (threaded fork ends to DIN 71752 / ISO 8140, used on pneumatic cylinders and gas struts)
  - rod clevis or cylinder clevis
  - knuckle joint (a forked rod end and an eye rod end joined by a knuckle pin; NPTEL machine design course)
  - shackle (a U-shaped clevis together with its pin, as used in rigging; Wikipedia)
  - clevis joint with folding spring bolt, or with bolt and circlip (catalogue names; mbo Osswald, igus)
  - prong mount, finger mount, 2-prong and 3-prong mount (action cameras)
  - GoPro mount (brand) and GoPro's own names 'mounting fingers' and 'mounting buckle'
  - RC clevis (a small metal or nylon clevis on a threaded pushrod that clips onto a control horn; Model Aviation) *(unverified parts omitted)*
- **family**: hinges & pivots
- **other_families**: clamping, magnetic & friction connections, quick-release & tool-free
- **one_liner**: A U-shaped fork on one part and a flat tongue on the other are joined by a pin through both, making a simple, strong pivot that carries push and pull through the pin; on action-camera mounts, interleaved prongs are clamped by a thumbscrew so friction holds whatever angle you set.
- **complexity**: A few parts: the fork (clevis: two parallel ears with matching holes), the tongue (tang, eye or lug) that fits between the ears, the pin (a headed clevis pin, a bolt or a shoulder screw) and something to keep the pin in (split pin, R-clip, circlip or retaining ring, folding spring clip, or a nut). Action-camera version: a two-prong part, a three-prong part, a thumbscrew and a nut held in the outer prong (a domed 'acorn' or cap nut on commercial mounts; an M5 nut in printed ones).
- **how_it_works**: The tongue slides between the two ears of the fork and the pin passes through all three holes, so the parts can only turn about the pin (Wikipedia: it allows rotation in some axes while restricting rotation in others). A pull or push on the joint is shared by the two ears and crosses the pin at two places, so the pin is loaded in shear on two faces at once (double shear), which makes it much stronger than a single-sided (cantilever) pin of the same size (NPTEL; Wikimedia Commons diagram by Cdang). If the pin is loose in the fork it also bends, so a snug pin and stiff ears matter (NPTEL). On action-camera prong mounts, one part's two prongs slide between the other part's three, and a thumbscrew through all five screws into a nut: loose, the joint swings; tight, the screw clamps the prongs together and friction between the touching faces holds the angle (techsparewarehouse; j-h-a go-pro-mounts).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): the tongue swings on the pin
  - join and hold: carries push and pull between a rod, strut or actuator and a bracket
  - lock, and release by hand: tool-free versions use a spring clip, R-clip or quick-release pin; prong mounts are tightened and loosened with a thumbscrew to set the angle or separate the parts
- **motion**: rotate: about the pin only, through an arc limited by where the tongue hits the base of the fork or the parts' shape, e.g. 'about 180 degrees' for a printed 2- and 3-prong adapter (Printables 406853). A clamped prong mount does not move until the thumbscrew is loosened.
- **degrees_of_freedom**: 1: turning about the pin (a clamped prong mount has 0 while tight). The clearance between pin and holes adds a little unwanted wobble. Two prong joints at right angles, as on action-camera extension arms, give two turning axes.
- **special_behaviour**: 
  - quick-release: pins held by a folding spring clip, R-clip or ball-lock pin come out by hand (mbo Osswald; SpringFix), and a prong mount comes apart once the thumbscrew is removed
  - none otherwise: a prong mount holds any angle through ordinary clamping friction, not a special mechanism
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the pin passes through holes in both parts, so they cannot pull apart; the retainer (split pin, clip or nut) only stops the pin sliding out
  - friction or clamping (force-fit): on action-camera prong mounts the thumbscrew squeezes the interleaved prongs so friction holds the angle
- **input_output**: not applicable: it is a pivot. In a linkage it passes push or pull straight through the pin without changing the kind of motion.
- **power**: passive (no power needed)
- **removability**: removable: take out the retainer and slide out the pin, or unscrew the thumbscrew; tool-free quick release when the pin is held by a spring clip, R-clip or ball-lock pin, or clamped by a thumbscrew
- **tools_needed**: None for spring-clip pins, R-clips, quick-release pins and thumbscrews; pliers for split pins, circlip pliers for circlips; a spanner or hex key when the pin is a bolt with a nut. A thumbscrew wrench is sometimes used to give an action-camera mount an extra quarter turn (techsparewarehouse).
- **seal**: none
- **load**: Medium to heavy for its size in push and pull along the rod, because the pin is loaded in double shear and the fork ears and the eye share the load (NPTEL). It resists turning about the other two axes. Weak points: sideways force along the pin (held only by the pin head and retainer), a loose pin bending in a wide fork, and the ears or eye tearing, crushing or shearing out around the hole (NPTEL's failure checks). *(unverified parts omitted)*
- **adjustable**: Plain clevis: only by turning it on its threaded rod; threaded fork heads (DIN 71752) come with right-hand, left-hand and fine threads, so a rod with a fork at each end can be set to length and locked with a nut (JW Winco). Clevises with an elongated (slotted) hole give deliberate free play (mbo Osswald). Prong mount: yes, loosen the thumbscrew, set any angle, retighten.
- **play_and_precision**: It lets the rods swing within the fork's plane (NPTEL: it 'permits angular misalignment of the rods') but does not tolerate twist out of that plane; where that is needed, igus pairs its clevis joints with self-aligning rod ends (igus). A tightened prong mount has no play until the clamping friction is overcome. *(unverified parts omitted)*
- **access_needed**: both sides: the pin goes right through and its retainer sits on the far side (a threaded pin can screw into a tapped ear instead). On a prong mount the thumbscrew goes in from one side into a nut held in the far prong, so you only turn it from one side.
- **materials**: Fork heads in zinc-plated steel (property class 5), stainless steel or aluminium (JW Winco); stainless 1.4305 or seawater-resistant 1.4404 (mbo Osswald); plastic igubal clevis joints in igumid G, a long-fibre-reinforced polymer, rated -40 to +120 °C (igus). Pins in steel or stainless steel. Action-camera mounts are moulded plastic; printed ones are made in PLA, PETG, glass-filled ABS (Printables 1239290) or TPU for crash absorption (UAVMODEL). Joins metal, wood and printed parts; in printed parts use a metal bolt as the pin.
- **maker_difficulty**: easy: a printed or cut fork and tongue with a bolt as the pin is one of the simplest joints to make; moderate for a prong mount that must fit commercial action-camera accessories, because prong thickness and hole size must match (the j-h-a go-pro-mounts build notes involve sanding to fit)

### Making it

- **processes**: 
  - 3D print (FDM): forks, tongues and action-camera prong mounts, usually with a metal bolt as the pin
  - off-the-shelf part: clevis fork heads (DIN 71752 / ISO 8140), clevis pins (ISO 2341), clevis joints with spring-clip or circlip pins, plastic clevis joints, action-camera mounts and thumbscrews *(unverified parts omitted)*
- **print_in_place**: partly: usually the fork and tongue are printed separately and joined with a bolt. Parametric prong mounts can print a pocket for a nut that is dropped in during a pause (Printables 1239290 pauses at layer 98 for an M5 nut). BOSL2's knuckle_hinge() can generate multi-knuckle fork-and-tongue hinges that print in place, with interlocking cones instead of a pin (BOSL2 hinges.scad).
- **making_tips_3d_printing**: 1) Use a metal pin: a bolt, shoulder screw or clevis pin through printed ears is far stronger and wears better than a printed pin. GoPro-style mounts use an M5 x 0.8 thumbscrew (Storyteller Tech); printed adapters also use M4 bolts with a captive nut (Printables 406853). 2) Holes: leave at least 0.3 mm clearance for parts that move (Prusa). For prong mounts the hole is a clearance hole, e.g. 5.3 mm for M5 in the j-h-a OpenSCAD prongs or 5.1 mm in a FreeCAD parametric knob (Printables 897509). When a screw is the pin, BOSL2 makes a clearance hole through most knuckles and a smaller self-tapping hole in the last one (BOSL2 hinges.scad). 3) Nut traps: model the hex pocket with about 0.2 mm extra overall (0.1 mm each side) as a starting point and test; keep at least one fastener diameter of wall around threads (Hubs). Or pause the print and drop the nut in (Printables 1239290). Designers differ: one parametric GoPro mount is printed lying on its side with tree supports, 4 wall loops and 5 top and bottom layers (Printables 1239290). 5) Fit for commercial accessories: one maker's measured GoPro-style prongs are 3 mm thick with a slightly thicker 3.6 mm middle prong, a 14.9 mm round end and 12 mm plate width (j-h-a mounting_prongs.scad); fit is tuned by sanding, and the outer prongs should spring slightly and grip when tightened (j-h-a README). 6) Material: PETG or ASA for mounts used outdoors or in cars; PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen); TPU 95A absorbs crashes on drones (UAVMODEL). 8) Printed thumbscrews and nuts are for light loads only (Printables 139308 and 432185); for strength, glue a metal bolt into a printed knob (j-h-a long thumbscrew: a 50 mm M5 bolt super-glued in). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'clevis pin' (ISO 2341 type A without a hole and type B with a split-pin hole; DIN 1444), 'split pin' or 'cotter pin', 'R-clip' or 'hitch pin clip', 'retaining ring' (DIN 471) or 'locking washer' (DIN 6799), 'clevis joint with folding spring bolt' (mbo Osswald), 'clevis fork head', 'rod clevis' or 'clevis rod end' (DIN 71752 / ISO 8140, M4 to M20, right- or left-hand thread; JW Winco), 'plastic clevis joint' (igus igubal (brand), DIN 71752), 'quick-release pin' or 'ball-lock pin', 'shoulder bolt', 'shackle' (rigging). Action cameras: 'GoPro mount' (brand name used generically), '2-prong' or '3-prong mount', 'mounting buckle', 'M5 thumb screw', 'acorn nut' or 'cap nut', '1/4-20 mounting finger adapter' (to fit tripod threads; GoPro).
- **rules_of_thumb**: 
  - Textbook knuckle-joint proportions for a rod of diameter d: pin diameter d, eye (tongue) thickness 1.25d, eye outside diameter 2d, each fork ear 0.75d thick, pin collar 1.5d in diameter and 0.5d thick, split pin about 0.25d (NPTEL, IIT Kharagpur, Machine Design, Module 4 Lesson 2).
  - Check the pin in double shear: load = 2 x (pi/4) x d^2 x allowable shear stress; also check the eye and the fork ears for crushing, tension across the hole and shear-out, and the pin for bending if it is loose in the fork (NPTEL Module 4 Lesson 2).
  - A pin held on both sides by a fork (clevis) is sheared on two surfaces, a one-sided (cantilever) pin on only one (Wikimedia Commons diagram 'Surfaces contact articulation porteafaux chape.svg').
  - Moving printed parts: start with at least 0.3 mm clearance (Prusa Knowledge Base).
  - Nut traps: start with a 0.2 mm total offset round the nut; walls round any thread at least one fastener diameter thick (Hubs).
  - GoPro-style mounts use an M5 x 0.8 thumbscrew with about 18.5 to 19 mm of thread; a screw that is too long won't clamp the fingers and the mount can wobble or break (Storyteller Tech; GoPro doesn't publish the size).
  - Tighten action-camera thumbscrews by hand; for high vibration add a quarter turn with a thumbscrew wrench, without over-tightening the plastic (techsparewarehouse).
  - Sleeve small RC clevises with silicone tubing or heat-shrink so they can't spring open (flyrc; Model Aviation).

### When to use it

- **everyday_examples**: 
  - Action-camera mounts (GoPro-style), where two and three flat prongs interleave and a thumbscrew clamps them (techsparewarehouse; j-h-a go-pro-mounts)
  - Fork ends on gas struts, pneumatic cylinders and gate hardware (DIN 71752 fork heads; SpringFix)
  - RC plane control rods, where a small clevis on a threaded pushrod clips onto the control horn (Model Aviation)
  - Shackles in sailing rigging and on farm equipment (Wikipedia) *(unverified parts omitted)*
- **when_to_use**: Use a clevis when you need a simple, strong, one-axis pivot that carries push or pull: the end of an actuator, gas strut or linkage, a folding leg or arm, or a tow link, especially when you want to be able to pull the pin out to take it apart. Because the pin is supported on both sides, it is stronger and stiffer than a single-sided pin or a bolt through two overlapping plates. The action-camera prong version is a good choice when you want to set any angle by hand, lock it with a thumbscrew, and use accessories from many makers.
- **when_not_to_use**: Avoid it when the parts must also tilt sideways or twist (use a rod end or ball link, or a ball-and-socket joint), when there must be no play at all (use a preloaded bearing or a flexure hinge), when the angle must be held firmly under large or vibrating loads (a friction prong mount can slip: use a Hirth joint or an indexing pin), or when clicks at set angles are wanted (use a detent hinge). For a long door or lid, a butt or piano hinge spreads the load better. For a joint that must snap on and off and move in every direction, use a ball stud and socket (angle joint).
- **environment_limits**: Metal clevises are fine outdoors if zinc-plated or stainless (stainless 1.4404 is seawater-resistant; mbo Osswald). igubal plastic clevis joints are rated -40 to +120 °C and resist corrosion, chemicals, dirt and UV (igus). Printed PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen), so a PLA mount can sag in a hot car. Vibration can loosen thumbscrews and nuts, and pin retainers should be checked regularly, especially on gates (SpringFix). *(unverified parts omitted)*
- **safety_notes**: Pinch point between fork and tongue as the joint closes. A missing or loose retainer lets the pin walk out and the joint come apart, which matters on gates, trailers and anything overhead; make sure spring clips are fully engaged and inspect them (SpringFix). The cut ends of split pins are sharp. *(unverified parts omitted)*
- **related**: 
  - Plain pivot (pin in hole, shoulder bolt): one pin through overlapping parts; simpler, but the pin is loaded in single shear
  - Rod end and ball link (rose joint): adds a swivelling ball so the joint can also tilt; often screwed onto the same threaded rod as a clevis
  - Ball-and-socket joint: moves in every direction, often with a clamp to lock it
  - Quick-release pin (ball-lock pin): a pin that locks into a clevis with spring-loaded balls and releases at the press of a button
  - Snap pin (split-leg push-in pin): a printed pin that clips through a hinge or clevis without tools
  - Hirth joint: toothed faces clamped by a bolt; holds set angles far more firmly than a friction prong mount
  - Detent hinge: clicks and holds at set angles instead of any angle
  - Friction hinge: holds any angle by built-in friction, with no thumbscrew to tighten
  - Knuckle hinge (butt hinge): the same fork-and-tongue idea repeated along a long edge

### Pictures, videos and models

- **links**: 
  - [File:Clevis.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Clevis.svg): Drawing of a clevis pin through a U-shaped clevis (shackle), held in by a split pin *(licence: CC BY-SA 3.0 (Sakurambo))*
  - [File:Principe articulation chape.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Principe_articulation_chape.svg): Principle drawing of a clevis coupling: fork, tongue and pin *(licence: CC BY-SA 3.0 (Cdang))*
  - [File:Surfaces contact articulation porteafaux chape.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Surfaces_contact_articulation_porteafaux_chape.svg): A cantilever pin joint next to a clevis, with the contact surfaces (blue arrows) and shear surfaces (red lines): one shear plane versus two *(licence: CC BY-SA 3.0 (Cdang))*
  - [Clevises and clevis joints - variants, assembly instructions and applications (YouTube, mbo Osswald EN; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=y5l58xDnPUk): Manufacturer's video of clevis variants, how they are assembled and where they are used *(licence: link only (standard YouTube licence))*
  - [GoPro Mounts README (Jay Abbott, j-h-a/go-pro-mounts on GitHub)](https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/README.md): Photos and build steps for printed three-prong and two-prong action-camera connectors and a long thumbscrew (images hosted on j-h-a.github.io) *(licence: 'Do What You Want Public License' v1 (permissive))*
- **make_it_yourself**: 
  - [mounting_prongs.scad (j-h-a/go-pro-mounts, OpenSCAD)](https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/lib/mounting_prongs.scad): OpenSCAD modules for GoPro-style prongs (3 mm prongs, 3.6 mm middle prong, 5.3 mm hole, pocket for an M5 nut); the repository also has tri-prong, bi-prong and flat connectors and a thumbscrew *(licence: 'Do What You Want Public License' v1)*
  - [BOSL2 hinges.scad: knuckle_hinge() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad): Parametric knuckle hinges (the fork-and-tongue idea with several knuckles) with pin holes, screw pins that self-tap in the last knuckle, or print-in-place interlocking cones *(licence: BSD 2-Clause)*
  - [Go Pro / Camera mount adapter - 2 and 3 prong (jtav1, Printables; details read through the Printables API)](https://www.printables.com/model/406853-go-pro-camera-mount-adapter-2-and-3-prong): Two- and three-prong attachment points to add to your own designs; M4 bolt with captive nut, swivels about 180 degrees; tested in PLA and PETG *(licence: CC0 (Printables: Creative Commons Public Domain))*
  - [GoPro Mount parametric (Thomas Förster, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1239290-gopro-mount-parametric): A FreeCAD-parametric GoPro-style mount with a print-in nut (pause at layer 98 to insert an M5 nut) *(licence: CC BY-NC-SA)*
  - [GoPro action camera mount M5 bolt knob (FreeCAD parametric) (Tol, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/897509-gopro-action-camera-mount-m5-bolt-knob-freecad-par): A parametric printed knob for an M5 bolt to make your own thumbscrew; hole 5.1 mm, bolt-head pocket 8.6 mm across flats *(licence: CC BY-SA)*
  - [Fully Printed GoPro Thumb Screw (rb, Printables; page returned 403, details read through the Printables API)](https://www.printables.com/model/139308-fully-printed-gopro-thumb-screw): A fully printed thumbscrew and nut for light-duty use when no metal parts are to hand *(licence: CC BY-NC-SA)*
- **diagram_idea**: Exploded side view of a fork, tongue and pin with a split pin, with the pin's two shear planes marked in red and pull arrows on each part; beside it, an action-camera mount with two prongs sliding between three, the thumbscrew through all five into a captured nut, and a curved arrow showing the angle being set by hand.
- **sources**: 
  - https://en.wikipedia.org/wiki/Clevis_fastener
  - https://commons.wikimedia.org/wiki/File:Clevis.svg
  - https://commons.wikimedia.org/wiki/File:Principe_articulation_chape.svg
  - https://commons.wikimedia.org/wiki/File:Surfaces_contact_articulation_porteafaux_chape.svg
  - https://archive.nptel.ac.in/content/storage2/courses/112105125/pdf/Module-4_lesson-2.pdf
  - https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/README.md
  - https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/lib/mounting_prongs.scad
  - https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/connector_triprong.scad
  - https://raw.githubusercontent.com/j-h-a/go-pro-mounts/master/LICENSE
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://storytellertech.com/gopro-screw-size/
  - https://techsparewarehouse.com/blogs/news/gopro-mount-screws-the-ultimate-guide
  - https://gopro.com/en/us/shop/mounts-accessories/mounting-finger-adapter/ABTFR-001.html
  - https://www.jwwinco.com/en-us/products/3.6-Moving-transferring-connecting-with-shafts-and-joints/Fork-joints/DIN-71752-Metric-Size-Steel-Clevis-Fork-Heads
  - https://springfixuk.com/blogs/news/clevis-fork-end-fittings-explained-din-71752-sizes-uses-installation-guide
  - https://www.mbo-osswald.de/en/shop/clevises-clevis-joints/
  - https://www.igus.com/spherical-bearings/clevis-rod-ends
  - https://www.igus.in/info/igubal-clevis-joints
  - https://www.modelaviation.com/control-linkage-roundup
  - https://www.flyrc.com/beginners-guide-to-pushrods-and-connectors-2/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://blog.uavmodel.com/3d-printed-drone-parts-tpu-mounts-petg-frames-and-design-for-fpv-accessories-2026/
  - https://www.youtube.com/watch?v=y5l58xDnPUk
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, everyday_examples, load, making_tips_3d_printing, play_and_precision, processes, reuse_cycles, safety_notes

## 68 Rod end and ball link (rose joint, RC ball link)

*hinges & pivots.* A threaded end with a swivelling ball that joins a push rod to a lever, allowing some tilt and letting the rod length be adjusted, as in RC cars and planes

*Also covers:* Also covers RC pushrod ends such as Z-bends, clevises on threaded rods and set-screw pushrod connectors

### What it is

- **plain_name**: A small swivelling ball joint on the end of a push rod, so the rod can push and pull a lever even when the two aren't perfectly lined up; it screws onto the rod, so you can make the rod longer or shorter
- **term**: Rod end (rod end bearing, heim joint or rose joint) and ball link
- **aliases**: 
  - heim joint (North America) and rose joint (UK) (Wikipedia; named after Lewis R. Heim and Rose Bearings)
  - rod end bearing, spherical rod end
  - tie-rod end or tie rod with rod ends (steering links)
  - ball link, ball cup and ball stud, ball end (RC cars, planes and helicopters)
  - turnbuckle (a rod with a right-hand thread at one end and a left-hand thread at the other, carrying two rod ends or ball cups; RC camber and toe links)
  - angle joint or angled ball joint (DIN 71802, made of a ball socket DIN 71805 and a ball stud DIN 71803)
  - ball stud and socket (gas-strut end fitting; SpringFix)
  - RC pushrod ends covered here: Z-bend, L-bend with a keeper (E/Z Link (brand), FasLink (brand)), snake bend, threaded or solder-on clevis (nylon or steel), set-screw pushrod connector (E/Z Connector (brand), Screw-Lock connector (brand)) *(unverified parts omitted)*
- **family**: hinges & pivots
- **other_families**: motion conversion, quick-release & tool-free
- **one_liner**: A threaded end fitting holding a swivelling ball (a spherical bearing) or a snap-on ball cup, fitted at each end of a push rod or tie rod so the rod can pass push and pull between two levers that move out of line, with the rod length set by how far the ends are screwed on.
- **complexity**: A few parts per end. Metal rod end: a housing with a male or female threaded shank, a ball with a hole through it (the swivel), sometimes a liner (PTFE or bronze) between ball and housing, plus a bolt and a lock nut (jam nut) (Wikipedia; SKF). RC ball link: a plastic ball cup screwed onto a threaded rod and snapped over a metal ball stud that is bolted to the lever (flyrc). Industrial angle joint: ball socket, ball stud and a snap ring, with an optional safety clip (Elesa+Ganter; JW Winco). A complete link is a rod or turnbuckle with an end at each end. Simpler RC pushrod ends: a Z-bend in the wire, a clevis on a threaded rod, or a set-screw connector on the servo arm.
- **how_it_works**: The ball has a hole for the bolt and sits in a matching spherical seat in the housing, so the bolt can turn and also tilt within a cone while the housing stays in line with the rod (Wikipedia). Because both ends of the rod can swivel, a rod with a rod end at each end carries force only along its length, pushing or pulling, and cannot carry sideways force or twist (Wikipedia). The threaded shank screws into or onto the rod, so turning it changes the rod's length, and a jam nut locks it (Wikipedia; SKF). RC turnbuckles have opposite threads at their two ends, so turning the rod lengthens or shortens the link without unhooking either end (AMain Hobbies). On a ball link the plastic cup springs over the ball and grips it; on the Z-bend the wire's double bend hooks through a hole in the servo arm so it cannot pull out (flyrc).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): swivels and tilts at each end of a push rod
  - join and hold: connects a rod to a lever, servo arm, control horn or bracket
  - change the kind of motion: as the joints of a push-rod linkage it lets a turning servo arm or lever push and pull a flap, steering arm or suspension part
- **motion**: multiple: turns freely about its bolt and tilts within a cone, e.g. 15° (with safety catch) or 18° (without) for DIN 71802 angle joints (Elesa+Ganter; JW Winco); high-misalignment rod ends with spacers or bushings allow much more, 40° or more (DesignJudges)
- **degrees_of_freedom**: 3: it can turn in all three directions about the ball's centre (a spherical joint), with the tilt limited to a cone. A Z-bend or clevis end has only 1 (it turns about the hole).
- **special_behaviour**: 
  - self-aligning or self-centring: the ball takes up misalignment between the rod and the lever, so the joint doesn't bind as the parts move through their arcs
  - quick-release: RC ball cups and DIN 71802 ball sockets snap on and off a ball stud without tools; a safety clip can be added when the pull-off force is not enough (JW Winco)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the ball is trapped in its housing, so a metal rod end cannot come apart
  - spring force (a spring or springy part presses it in place): plastic ball cups and ball sockets grip the ball through the springiness of the cup or a snap ring, which sets their pull-off force (JW Winco)
  - friction or clamping (force-fit): jam nuts lock the thread, and set-screw pushrod connectors clamp the wire with a screw (flyrc)
- **input_output**: Friction is low (ball links give a 'low-friction, slop-free connection'; Model Aviation). Back-drivable: yes. The levers can be parallel or at an angle, as long as each end stays inside its tilt cone. *(unverified parts omitted)*
- **power**: passive (no power needed)
- **removability**: removable: unbolt the rod end or pop the ball cup off its stud; a Z-bend can only be removed by taking off the servo arm or horn it hooks through (flyrc)
- **reuse_cycles**: many times: metal rod ends and bolts can be refitted again and again; plastic RC ball cups wear and should be replaced when they show wear (Model Aviation); plastic set-screw connector holders should not be reused (flyrc)
- **tools_needed**: Spanners for the jam nut and bolt; a hex key for set-screw connectors, plus threadlocker (flyrc); ball-link pliers or a ball-cup remover to pop RC cups off (Printables 30323 is a printable one); a turnbuckle wrench, usually included with RC models (AMain Hobbies); Z-bend pliers or a wire bender for Z-bends (Model Aviation).
- **load**: Medium to heavy along the shank (push and pull), which is what rod ends are made for (SKF). Weak sideways: the load component at right angles to the shank should never exceed 0.1 of the static load rating C0, because it bends the shank (SKF catalogue). Weak along the bolt: axial loads are typically only about 10% of the radial rating (Aurora Bearing, quoted in Dragzine) or 5-10% (DesignJudges). A link with rod ends at both ends carries force only along its length (Wikipedia). RC plastic ball links, clevises and set-screw connectors are light-duty; flyrc suggests set-screw connectors only on '90-size planes and smaller'.
- **adjustable**: Yes: screw the rod end or ball cup further on or off the threaded rod and lock it with a jam nut (Wikipedia; SKF); turnbuckles with opposite threads adjust length without disconnecting (AMain Hobbies); RC clevises screw along a threaded pushrod (Model Aviation); set-screw connectors slide along the wire and clamp (flyrc). Z-bends and solder-on clevises are not adjustable (flyrc).
- **play_and_precision**: None to small when new: PTFE-lined rod ends have zero clearance, while metal-on-metal ones always have a little (Aurora Bearing via Dragzine); RC ball links are 'slop-free' when new but wear (Model Aviation); igus plastic rod ends deliberately have a large bearing clearance (igus). Misalignment is its strength: it tolerates tilt within its cone (15-18° for DIN 71802, more with high-misalignment spacers; DesignJudges) and small offsets. Slop grows as the ball or cup wears; replace any bearing that develops slop (DesignJudges).
- **access_needed**: both sides when a bolt passes through the ball and takes a nut; one side only when the ball stud screws into a tapped lever and the cup snaps on from the front (RC ball links, DIN 71802 angle joints)
- **materials**: Metal rod ends: steel body, ball and race, heat-treated in the best ones, either PTFE-lined or metal-on-metal (Aurora Bearing via Dragzine); SKF makes steel/steel, steel/bronze and steel/PTFE combinations (SKF). Plastic: igus igubal polymer rod ends, rated -40 to +200 °C and corrosion-resistant (igus). DIN 71802 angle joints: zinc-plated steel or AISI 303 stainless, with a hardened ball (Elesa+Ganter; JW Winco). RC: nylon ball cups and clevises, metal balls, steel wire or threaded rod; steel clevises can rust (Model Aviation). Printed: nylon with carbon fibre (Printables 490568), ABS (Printables 461610), nylon rather than PLA (Printables 160883).
- **maker_difficulty**: easy to fit: buy rod ends or RC ball links and screw them on; moderate to print one that works well: the ball-to-housing gap must be small and even, the material tough, and plastic softens and creeps (the designer of Printables 160883 advises buying one for anything critical)

### Making it

- **processes**: 
  - off-the-shelf part: rod ends, RC ball links, ball studs, turnbuckles, clevises and pushrod connectors are cheap and standard
  - 3D print (FDM): printable rod ends and ball joints, usually in tough materials such as nylon, sometimes printed in place
  - sheet metal: bent wire pushrods with Z-bends or L-bends made with bending pliers (Model Aviation) *(unverified parts omitted)*
- **print_in_place**: partly: print-in-place rod ends exist. One M6 design is printed as one part, then a bolt is pushed through the ball and tapped with a hammer to free it, giving an almost slop-free joint (Printables 160883); another prints the ball inside the housing with a 0.6 mm gap and no supports (Printables 461610). They still need a bolt through the ball and a thread cut or a nut added for the rod.
- **making_tips_3d_printing**: 1) For anything that matters, buy metal rod ends or RC ball links: the designer of a printable heim joint warns that PLA softens at moderate temperatures, creeps over time and is likely to fail in critical uses, and suggests nylon (Printables 160883). 2) Print-in-place: leave a small, even gap between ball and housing, e.g. 0.6 mm (Printables 461610: ABS-based filament, 0.14 mm layers, 50% infill, no supports), then free it by driving a bolt through the ball with light hammer taps (Printables 160883). 3) Print enough perimeters that the ring of the housing round the ball is solid plastic (Printables 160883). 4) Threads: print the shank hole slightly undersize and cut the thread with a tap, e.g. a 4.9 mm hole for M5 and a 5.1 mm hole through the ball for an M5 bolt (Printables 461610); keep the wall round a thread at least one thread diameter thick (Hubs). 5) Lubricate with a little lithium grease or petroleum jelly (Printables 160883). 6) Use tough materials: nylon with carbon fibre (Printables 490568, sized from a Traxxas truck), nylon or ABS; PLA starts to give at about 60 °C (CNC Kitchen). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'rod end', 'rod end bearing', 'heim joint', 'rose joint', 'spherical rod end' (male or female thread, right- or left-hand; steel/steel, steel/bronze or maintenance-free PTFE-lined, e.g. SKF SA and SI series), 'high-misalignment spacer', 'plastic rod end' (igus igubal (brand)), 'angle joint' or 'angled ball joint DIN 71802' (ball socket DIN 71805 plus ball stud DIN 71803, with 'safety clip'), 'ball stud' and 'ball socket' (gas-strut end fittings), 'clevis joint' as the non-swivelling alternative. RC: 'ball link', 'ball cup', 'ball stud', 'turnbuckle', 'clevis' (nylon or steel, threaded or solder-on), 'E/Z Connector (brand)' or 'pushrod connector', 'screw-lock connector', 'E/Z Link (brand)' or 'FasLink (brand)' keeper, 'Z-bend pliers', 'ball link pliers', 'control horn'.
- **rules_of_thumb**: 
  - Rod ends are meant for loads along the shank; any load component at right angles to the shank should never exceed 0.1 x C0 (the static load rating), otherwise choose a bigger rod end (SKF, 'Spherical plain bearings and rod ends' catalogue, 2013, section 'Permissible loads for rod ends', printed p. 44).
  - Lock a rod end on its threaded rod or tube with a counter lock nut tightened against the rod end or tube (SKF catalogue, mounting of rod ends, printed p. 95).
  - Axial load (along the bolt) is typically about 10% of the radial rating (Aurora Bearing, in Dragzine) or 5-10% of the ultimate radial load (DesignJudges).
  - A link with rod ends at both ends transmits force only along its long axis, never sideways or as a twist (Wikipedia, Rod end bearing).
  - DIN 71802 angle joints swivel 15° with a safety catch and 18° without (Elesa+Ganter; JW Winco).
  - Z-bend pliers suit wire up to .062 in (2-56); the E/Z Bender with swappable dies handles up to .093 in (4-40) (Model Aviation, May 2019).
  - Sleeve clevises with silicone tubing, put a washer under the bolt head on a bolt-through ball link, and use threadlocker on set-screw connectors (flyrc; Model Aviation).
  - Don't combine a ball link with a threaded, swinging control horn: the pushrod can twist the horn and change the linkage length (flyrc).
  - Bent rod ends can't be unbent: replace them (DesignJudges).

### When to use it

- **everyday_examples**: 
  - RC car camber links and steering rods: turnbuckles with plastic ball cups on metal ball studs (AMain Hobbies)
  - RC plane and helicopter control rods from the servo arm to the control horn (Model Aviation; Wikipedia)
  - Gas struts on lift-up lids, hatches and gates that clip onto a ball stud (SpringFix)
  - Race car, go-kart and motorcycle steering and suspension links (Wikipedia)
- **when_to_use**: Use rod ends or ball links whenever a push rod joins two levers or arms that don't move in exactly the same plane, or whose mounting points aren't perfectly lined up: RC steering and suspension, control surfaces, linkages driven by a servo or actuator, gas struts and adjustable tie rods. They also let you set the rod length precisely and change it later without making new parts. The snap-on ball-and-socket type is handy where a link must be unclipped quickly without tools.
- **when_not_to_use**: Avoid them where the joint must carry sideways (bending) loads on the shank or large loads along the bolt: use a clevis or a proper bearing, or arrange the mounting so the rod end sees only push and pull (SKF; DesignJudges). Avoid snap-on ball cups where a pull could pop them off, unless you add a safety clip or a washer (JW Winco; flyrc). Where parts move in one plane only and must be stiff, a clevis or plain pin joint has less slop. For long or curved routes use a push-pull cable (Bowden cable). On small, light RC models, Z-bends and set-screw connectors are simpler, but a Z-bend can't be adjusted and a set screw can slip (flyrc).
- **environment_limits**: SKF steel/steel rod ends are rated about -50 to +200 °C (SKF catalogue, table 7); igus plastic igubal rod ends -40 to +200 °C, corrosion-resistant and suited to high-frequency vibration (igus). Steel RC clevises can rust (Model Aviation). Printed PLA starts to give at about 60 °C (CNC Kitchen) and creeps under steady load (Printables 160883). Vibration loosens jam nuts and set screws; use threadlocker (flyrc). *(unverified parts omitted)*
- **safety_notes**: A rod end failing in steering, suspension or flight controls means loss of control: use metal parts, check regularly for play and bends and replace worn or bent ones (DesignJudges), and don't load the shank sideways (SKF). Secure RC clevises and ball cups so they can't pop off in flight (flyrc; Model Aviation). Don't use printed rod ends for anything safety-critical (Printables 160883). *(unverified parts omitted)*
- **common_failures**: Ball cups pop off their studs under load (add a washer, safety clip or a bolt-through ball) (flyrc; JW Winco); the ball or cup wears and develops slop (Model Aviation; DesignJudges); the shank bends or breaks at the thread when loaded sideways (SKF; DesignJudges); jam nuts or set screws work loose, so the length changes or the rod slips (flyrc; Model Aviation); RC clevises spring open (flyrc); metal clevises rust and linkage retainers slip over time (Model Aviation); printed rod ends creep, crack or loosen (Printables 160883).
- **related**: 
  - Clevis joint: a fork and pin on the rod end; stiffer in its one plane but cannot tilt
  - Ball-and-socket joint: the same spherical joint, often lockable, used for posable arms and camera heads rather than push rods
  - Universal joint: passes rotation between shafts at an angle, which a rod end cannot do
  - Spherical plain bearing: the same ball-in-ring bearing pressed into your own housing instead of on a threaded shank (SKF)
  - Push-pull cable (Bowden cable): carries push and pull along a curved path
  - Four-bar linkage: the mechanism that a push rod with a rod end at each end usually forms
  - Servo saver: a sprung servo horn that gives way when the linkage is hit
  - Plain pivot (pin in hole): the simplest joint when there is no misalignment

### Pictures, videos and models

- **links**: 
  - [File:Heim Joint.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Heim_Joint.svg): Labelled drawing of a male-threaded rod end: casing, ball swivel, hole for the bolt and threaded shaft *(licence: CC BY-SA 3.0 (Vladsinger))*
  - [File:Female Heim Joint.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Female_Heim_Joint.png): A female-threaded rod end *(licence: CC BY-SA 4.0 (Masonjan))*
  - [Control Linkage Roundup (Terry Dunn, Model Aviation, May 2019)](https://www.modelaviation.com/control-linkage-roundup): Photos of RC pushrod ends: Z-bends, 90° bends with keepers, nylon and steel clevises, set-screw connectors and ball links *(licence: link only)*
  - [RC Tie Rods And Turnbuckles Explained And How To (YouTube, BigBeard RC; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=pEBCE4HuLhE): RC tie rods and turnbuckles with ball cups, and how to adjust them *(licence: link only (standard YouTube licence))*
  - [E-Z Pushrod Connector RC Basics (YouTube, Tim McKay; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=izBvK_M-5ds): How a set-screw pushrod connector is fitted to a servo arm *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [M6 Heim Joint (tie rod end) (sdfgeoff, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/160883-m6-heim-joint-tie-rod-end): A print-in-place rod end that is freed by tapping a bolt through the ball, with strength-test and steering videos; the designer warns against using PLA for anything critical. Impact test video: https://www.youtube.com/watch?v=S0lcIF6u9uE (title 'Print-in-place heim joint (rod end) impact test', confirmed through YouTube oEmbed) *(licence: CC BY)*
  - [Ball Joint (Rod End) for m5 screws (Adam, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/461610-ball-joint-rod-end-for-m5-screws): A printable rod end with a 5.1 mm ball hole, a 4.9 mm rod hole to tap M5 and a 0.6 mm ball-to-housing gap; no supports *(licence: CC BY-NC)*
  - [Heim joint (lockable) (Jack, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/171525-heim-joint-lockable): A 10 mm snap-together rod end with a twist ring that locks or frees the ball, and a tapered end for chaining *(licence: CC0 (Printables: Creative Commons Public Domain))*
  - [Link rod end ball joint - Traxxas (Loranga, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/490568-link-rod-end-ball-joint-traxxas): A replacement RC ball-link rod end measured from a Traxxas truck, printed in nylon with carbon fibre *(licence: CC BY)*
  - [RC Tools - Ball Cup Remover (THRMLstudios, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/30323-rc-tools-ball-cup-remover): A printable tool with forked openings to pop RC ball cups off and turn 4 to 6 mm turnbuckles *(licence: CC BY-NC)*
- **diagram_idea**: Cut-away of a male rod end: threaded shank with jam nut, housing, and the ball with its bolt hole tilted in its seat, with a shaded cone showing the tilt limit; below it, an RC push rod linking a servo arm to a control horn, with a Z-bend at one end, a threaded clevis at the other, and a turnbuckle with left- and right-hand threads and a double arrow showing length adjustment.
- **sources**: 
  - https://en.wikipedia.org/wiki/Rod_end_bearing
  - https://commons.wikimedia.org/wiki/File:Heim_Joint.svg
  - https://commons.wikimedia.org/wiki/File:Female_Heim_Joint.png
  - https://www.modelaviation.com/control-linkage-roundup
  - https://www.flyrc.com/beginners-guide-to-pushrods-and-connectors-2/
  - https://www.designjudges.com/articles/rod-ends-and-spherical-bearings
  - https://www.dragzine.com/tech-stories/aurora-bearing-talks-about-the-engineering-behind-spherical-bearings/
  - https://cdn.skfmediahub.skf.com/api/public/0901d19680154a05/pdf_preview_medium/0901d19680154a05_pdf_preview_medium.pdf
  - https://www.igus.com/igubal/rod-end-bearings
  - https://www.igus.com/spherical-bearings/clevis-rod-ends
  - https://www.elesa-ganter.com/en/www/Joints--Angled-Ball-Joints--DIN71802
  - https://www.jwwinco.com/en-us/products/3.6-Moving-transferring-connecting-with-shafts-and-joints/Angled-ball-joints/DIN-71802-Steel-Threaded-Ball-Joints-Linkaged-with-Plain-Stud
  - https://springfixuk.com/blogs/news/clevis-fork-end-fittings-explained-din-71752-sizes-uses-installation-guide
  - https://www.amainhobbies.com/understanding-rc-wheel-adjustment-camber-caster-and-toe/cp1132
  - https://www.hubs.com/knowledge-base/how-assemble-3d-printed-parts-threaded-fasteners/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.youtube.com/watch?v=pEBCE4HuLhE
  - https://www.youtube.com/watch?v=izBvK_M-5ds
  - https://www.youtube.com/watch?v=S0lcIF6u9uE
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, environment_limits, input_output, making_tips_3d_printing, processes, safety_notes, seal

## 69 Turntable bearing (lazy-Susan bearing, slewing ring)

*hinges & pivots.* A thin, wide ring bearing that lets a platform turn while carrying weight and tipping loads; printed versions use airsoft BBs as the balls

### What it is

- **plain_name**: A flat, wide ring of balls sandwiched between two plates or rings, which lets a tabletop, display stand or robot turret spin round smoothly while carrying weight
- **term**: Turntable bearing (slewing bearing or slewing ring; lazy-Susan bearing for the light pressed-steel kind)
- **aliases**: 
  - lazy Susan bearing, lazy Susan hardware (square or round pressed-steel plates)
  - swivel base or swivel plate (Rockler calls one a 'low profile 12-in swivel base')
  - slewing ring, slewing bearing, slew ring, turntable bearing (Wikipedia)
  - slewing ring bearing, four-point contact ball slewing ring (Kaydon)
  - polymer slewing ring (igus iglidur PRT (brand)), which uses plastic sliding pads instead of balls
  - aluminium ring lazy Susan bearing (round, used on robot turrets; Chief Delphi)
  - printed BB bearing, airsoft BB bearing, lazy Susan with 6 mm BBs (maker names)
  - thrust bearing (used loosely for a flat lazy Susan bearing; Printables 1610510)
  - lazy Susan, dumbwaiter or dining-table turntable (the rotating tray that sits on the bearing; Wikipedia)
- **family**: hinges & pivots
- **other_families**: print-in-place & 3D-printing joints, gear trains, gearboxes & transmissions
- **one_liner**: A large-diameter, thin ring bearing, with balls (or rollers or plastic pads) running in grooves between two rings or plates, that lets a platform turn about an upright axis while carrying its weight and, in stronger types, tipping loads from off-centre weight.
- **complexity**: A small assembly that acts as one unit: two rings or plates with facing grooves (raceways), a ring of balls or rollers between them, and on industrial slewing rings a ball separator, seals on each side, grease fittings and sometimes gear teeth on one ring (Kaydon; Wikipedia). Lazy Susan hardware: two pressed-steel plates and a ring of steel balls (Craftparts). Printed versions: two printed rings plus 6 mm airsoft BBs, sometimes with a ball spacer or a small bolted 'access port' for loading the balls (Printables 33110, 686261, 172667). igus PRT: aluminium or stainless rings with replaceable plastic sliding pads (igus).
- **how_it_works**: The two rings have facing grooves with a ring of balls between them, so one ring rolls round on the other with little friction. Because the balls sit far from the centre, the bearing resists wobble: weight placed off-centre presses down on the balls on one side and tries to lift the other side, and a slewing ring's raceways and full circle of bolts hold against this tipping (moment) load as well as the plain downward weight (Kaydon). Slewing rings are designed mainly for loads along the axis of rotation that press the rings together, plus the tipping moment; a sideways (radial) load of more than about 10% of the axial load needs a modified design (Kaydon Catalog 390). Cheap lazy Susan plates work the same way but are made of thin pressed steel, so they carry downward weight well but resist sideways and lifting forces poorly (gm0; Chief Delphi). Printed versions use two printed rings with a groove filled with 6 mm airsoft BBs (Printables 33110, 73993).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): lets a platform, tray or turret turn all the way round
  - join and hold: holds the turning part onto the base while carrying its weight and, for slewing rings, tipping loads
- **motion**: rotate: continuous, any number of turns
- **degrees_of_freedom**: 1: turning about the central axis; the balls stop the platform tilting or lifting (well in slewing rings, poorly in thin lazy Susan plates)
- **special_behaviour**: 
  - none: it is a plain rotary bearing. Some slewing rings have gear teeth cut into one ring so a small pinion can drive the platform (Wikipedia; Kaydon), and igus makes PRT rings with a belt tooth profile for belt drive (igus)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it lets the two parts turn
  - shape (the parts interlock; form-fit): the balls sit in grooves in both rings, so the rings can't come apart sideways; each ring is screwed or bolted to its part
- **input_output**: not applicable: it supports a turning part rather than changing motion (on geared slewing rings the gear teeth, not the bearing, pass on the drive)
- **power**: passive (no power needed)
- **removability**: removable: each ring or plate is screwed or bolted to its part
- **reuse_cycles**: many times
- **tools_needed**: Lazy Susan plates: a drill, a 3/4 in bit for the access hole, a screwdriver and #8 x 1/2 in screws (Rockler). Slewing rings: bolts and a torque wrench, tightened in a star pattern in three stages (Kaydon). Printed: none beyond loading the BBs and closing the rings with screws or a snap fit.
- **seal**: none for lazy Susan plates and printed bearings; industrial slewing rings are dust-resistant, with an elastomer seal on each side, and may need an extra shroud in dirty or wet places (Kaydon)
- **load**: From light to very heavy depending on type. Downward weight: good; e.g. a 6 in pressed-steel lazy Susan plate is rated 500 lb and a 12 in one 1,000 lb (Craftparts); igus PRT-01 polymer slewing rings take 15,000 to 150,000 N static axial load for sizes 20 to 300 mm (igus). Tipping (moment) loads: rated for slewing rings, e.g. 100 to 5,000 N·m for PRT-01 sizes 20 to 300 mm (igus); weak for lazy Susan plates, which 'aren't designed to handle lateral forces' (gm0). Sideways (radial) loads are the weakest direction; Kaydon treats radial load over 10% of the axial load as needing a special design. Hanging (suspended) loads concentrate stress round the bolts, so pressing loads are better (Kaydon). Printed: light to medium; a printed 7-roller geared turntable bearing was tested with more than 17 kg (Printables 136844).
- **adjustable**: no: its friction and play are set by how it is made and mounted; in printed versions you can only change the ball count, ball type or lubrication
- **play_and_precision**: Noticeable in lazy Susan plates and printed BB bearings, which rock a little (Printables 686261: printed versions are less smooth than a metal lazy Susan bearing, and the version with balls in separate pockets had less play). Industrial slewing rings have a small internal clearance so small mounting errors don't cause tight spots, and most are not made for accurate positioning (Kaydon Catalog 390); igus lists 0.7 mm axial and 0.9 mm radial clearance for one PRT type (igus PRT catalogue). Misalignment tolerance is low: the mounting faces must be flat and stiff (igus asks for 0.05 mm flatness in the bolting area), otherwise friction rises and life drops (Kaydon).
- **access_needed**: both sides: one ring fixes to the base and the other to the turning part. Lazy Susan plates solve this with an access hole in the lower plate, through which you drive the screws into the top from underneath (Rockler).
- **materials**: Lazy Susan plates: 22-gauge electrogalvanised steel, supplied ungreased (Craftparts); round aluminium ring bearings (Chief Delphi). Slewing rings: 50Mn or 42CrMo steel, surface-hardened (Wikipedia). igus PRT: hard-anodised aluminium or 316 stainless rings with iglidur plastic sliding pads, -50 to +180 °C (igus). Printed: PLA is recommended for hardness, and 'the harder, the better' (Printables 33110); PETG where a snap-fit lid must flex (Printables 1610510). Balls: 6 mm plastic airsoft BBs (often PLA-based biodegradable plastic; Wikipedia), 3/8 in steel balls (Printables 686261) or 6 mm brass BBs (Hackaday, isaac879 camera mount).
- **maker_difficulty**: easy: buy a lazy Susan plate and screw it between two boards, or print a ring bearing that uses airsoft BBs; moderate to make a stiff, wobble-free robot turret; hard to make a precise, heavy-duty slewing ring, so buy one

### Making it

- **processes**: 
  - off-the-shelf part: lazy Susan plates, aluminium ring bearings, steel slewing rings (with or without gear teeth) and polymer slewing rings
  - 3D print (FDM): printed ring bearings with 6 mm airsoft BBs, steel or brass balls, or printed rollers
  - woodwork: lazy Susan tables, display turntables and cabinet carousels fitted with a bought bearing (Rockler)
  - CNC: machining flat, stiff mounting plates and bolt circles for slewing rings (Kaydon: mounting surfaces machined and reinforced)
- **print_in_place**: no: the two rings are printed separately with their grooves facing up, filled with BBs, then closed with screws, a snap fit or a ball-loading plug (Printables 33110, 686261, 1610510); the herringbone roller turntable bearing holds itself together through its tooth shape once assembled (Printables 136844).
- **making_tips_3d_printing**: 1) Balls: use 6 mm airsoft BBs and measure them first (one designer's measured 5.9 mm; Printables 73993). Buy good, heavier BBs (0.30 g or more) without moulding seams (Printables 591895); cheap BBs can have flash and be less round (Wikipedia, Airsoft pellets). For heavier loads use steel balls, e.g. 3/8 in (Printables 686261), or brass BBs (Hackaday, isaac879 camera mount). 2) Test first: print a short test section of each ring; the BBs should roll freely in the groove but be held in by the rim (Printables 73993). 3) Printing: print rings flat with the groove facing up; 0.2 mm layers can work, but use 0.1 mm and slow down if the fit is hard to get; set a minimum layer time so small rings don't deform; use dry filament and a random seam (Printables 33110). 4) Material: harder is better so the races don't wear, and PLA is a good choice (Printables 33110); PETG gives a snap-fit lid a little more flex (Printables 1610510). 5) Fill the groove with as many balls as will fit for the smoothest running (Printables 33110), or use a ball spacer or pockets to need fewer balls; the pocketed version spins less freely but had less play (Printables 686261; Printables 172667). 6) Lubricate with silicone grease (Printables 73993) or a few drops of silicone oil, and run the bearing in under light pressure (Printables 591895). 7) Plan how the balls go in: a bolted access port (Printables 686261, M4 bolts) or a press-fit lid (Printables 1610510). 8) For tipping loads, make the ring as wide as possible and mount it on a flat, stiff plate; industrial practice is a full circle of bolts on both rings (Kaydon) and 0.05 mm flatness in the bolting area for igus PRT rings (igus). 9) Heat: PLA starts to give at about 60 °C (CNC Kitchen), so keep printed turntables out of hot cars and direct sun. 10) Roller alternative: a self-retaining herringbone roller bearing with 7 rollers held more than 17 kg; print at 0.1 mm layers for a smooth rolling surface (Printables 136844). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'lazy Susan bearing', 'lazy Susan hardware', 'turntable bearing' or 'swivel plate' (square pressed-steel plates from about 3 in to 12 in and more, e.g. 6 in rated 500 lb and 12 in rated 1,000 lb; Craftparts), 'round aluminium lazy Susan bearing', 'slewing ring bearing' or 'slewing bearing' (with internal or external gear teeth; Kaydon), 'polymer slewing ring' (igus iglidur PRT (brand), 20 to 300 mm bore), 'thrust ball bearing', 'cam follower' and 'V-groove bearing' (for home-made roller turrets), bearing stacks for custom turrets (gm0), '6 mm airsoft BBs', 'steel balls', silicone grease.
- **rules_of_thumb**: 
  - Kaydon's 'normal application' for a slewing ring: vertical axis, mainly compressive thrust and moment loads, radial load no more than 10% of the thrust load, slow intermittent rotation, periodic lubrication and bolt checks (Kaydon Slewing Ring Bearings Catalog 390, section 2).
  - Pressing (compressive) axial loads spread evenly round the ring; hanging (suspended) loads concentrate near the bolts and must be designed for (Kaydon Catalog 390).
  - A stiff, flat mount matters more than a bigger bearing: don't use a higher-capacity bearing to make up for a flimsy structure, and avoid thin riser plates under the bearing (Kaydon white paper 'How mounting can optimize slewing ring bearing performance', 2016).
  - Bolt a full circle of bolts through both rings (SAE Grade 8 or ISO class 10.9) and tighten in a star pattern in three stages, 30%, 80% and 100% of the final tension, then recheck regularly (Kaydon white paper).
  - igus PRT polymer slewing rings: bolting surface flat to 0.05 mm, screws (class 8.8) engaged at least 2 x d deep, and load ratings only apply on a flat, stable surface (igus iglidur PRT catalogue, 09/2023).
  - Lazy Susan plate sizing: a 6 in plate suits tops of 15 to 30 in and a 12 in plate tops of 20 in and up (Craftparts); Rockler's project uses a 12 in swivel base under a 14.5 in top.
  - Fitting a lazy Susan plate: bore a 3/4 in access hole in the base and drive #8 x 1/2 in screws through the bearing into the top (Rockler).
  - Printed BB bearings: a library of sizes from 20 to 200 mm outside diameter, all 7.1 mm thick, using 6 mm airsoft BBs, e.g. 47 BBs in the 100 mm size (Printables 33110).
  - Lazy Susan plates are not designed for sideways forces, such as the recoil of a robot shooter (gm0, Full Turrets).

### When to use it

- **everyday_examples**: 
  - The spinning tray in the middle of a round restaurant table (Wikipedia, Lazy Susan)
  - Turntables for cake decorating, pottery, sculpture and spray painting (Wikipedia; Printables turntable models)
  - Cranes and excavators, whose whole upper body turns on a huge slewing ring (Wikipedia, Slewing bearing) *(unverified parts omitted)*
- **when_to_use**: Use it when a wide, flat platform must turn about an upright axis while carrying weight that is spread out or off-centre: lazy Susans, display and photo turntables, spray-painting stands, robot and camera turrets, rotating bases for arms or cranes. The large diameter gives stability without a long shaft and leaves a big hole in the middle for cables or a drive. A bought lazy Susan plate is the cheapest choice for furniture-style loads; a printed BB bearing suits light maker projects; a slewing ring (steel, or igus polymer) is the choice when there are real tipping or sideways loads, as in robot arms.
- **when_not_to_use**: Avoid a lazy Susan plate when there are big sideways or lifting forces (a shooter's recoil, a heavy arm reaching out) or when wobble is unacceptable: use a slewing ring, a bearing-stack turret (small bearings round the edge sandwiching a disc) or a design with a centre bearing (gm0; Chief Delphi). For small, fast-spinning parts use an ordinary ball bearing on a shaft. For turning by exact steps use a Geneva drive or an indexing plunger. Don't use printed BB bearings for heavy loads, heat or high speed; use steel balls or buy a metal bearing.
- **environment_limits**: Kaydon steel slewing rings are specified for -40 to +60 °C, indoors or outdoors with indirect moisture; very dirty or wet places need extra seals or shields (Kaydon Catalog 390). igus PRT polymer rings run dry from -50 to +180 °C and are insensitive to dust and dirt (igus). Printed PLA rings start to give at about 60 °C (CNC Kitchen), and cheap airsoft BBs are less round and less impact-resistant than good ones (Wikipedia, Airsoft pellets). *(unverified parts omitted)*
- **safety_notes**: Pinch and crush points between the turning top and the base, especially on motor-driven turrets and heavy turntables. A heavy top loaded far off-centre on a lazy Susan plate can tip or lift, because the plate resists lifting poorly (gm0; Welding on or near a slewing ring can damage it (Kaydon Catalog 390). *(unverified parts omitted)*
- **common_failures**: Wobble and play from a thin plate or a flexible mounting (Kaydon: mount on a stiff, flat structure); lazy Susan plates bent or destroyed by sideways loads (Chief Delphi: one FRC team destroyed at least two 12 in bearings); tight spots and a high turning force from an out-of-flat or out-of-round mounting (Kaydon Catalog 390); bolts working loose (Kaydon: check bolt tension regularly). Printed: poor BBs with seams roll roughly (Printables 591895), warped rings jam (Printables 33110: set a minimum layer time), races wear if softer than the balls (Printables 33110), and a dry race is rough and noisy (Printables 73993: add silicone grease).
- **related**: 
  - Plain pivot and rolling bearing (pin in hole, shoulder bolt, ball bearing): a single small bearing on a shaft; fine for light, centred loads but wobbles under off-centre weight
  - Thrust bearing: a flat bearing for downward load only, usually paired with a separate centring bearing
  - Bearing-stack turret: small bearings round the edge of a disc; custom-sized and better for sideways loads (gm0)
  - Geneva drive: steps a turntable round by fixed amounts and holds it between steps
  - Gimbal: rings pivoted at right angles so the middle can tilt, rather than spin
  - Ball-and-socket joint: turns and tilts, but carries little tipping load

### Pictures, videos and models

- **links**: 
  - [File:Slewing bearing.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Slewing_bearing.jpg): Photo of a slew ring bearing *(licence: CC BY-SA 4.0 (Dkluscious))*
  - [File:Lazy Susan (IMG 0257).jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Lazy_Susan_(IMG_0257).jpg): A black wooden lazy Susan turntable *(licence: CC BY-SA 4.0 (Matti Blume))*
  - [How mounting can optimize slewing ring bearing performance (Kaydon Bearings white paper, 2016)](https://www.kaydonbearings.com/downloads/whitepapers/Kaydon-MountingSlewingWP.pdf): Diagrams of a shrouded slewing ring mounting, gussets near the bolt holes, allowable flatness charts and the star bolt-tightening pattern *(licence: link only)*
  - [3D Printed DSLR Camera Pan Tilt Mount (Arduino/Stepper Driven) 2020 (YouTube, isaac879; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=uJO7mv4-0PY): A printed pan-tilt camera mount built round a large printed ring bearing filled with 6 mm brass BBs (as described by Hackaday) *(licence: link only (standard YouTube licence))*
  - [How Do You Install Lazy Susan Hardware? (Rockler)](https://www.rockler.com/learn/how-to-install-lazy-susan-hardware): How the access hole in the lower plate lines up with the top plate's screw holes so you can screw the top on from underneath *(licence: link only)*
- **make_it_yourself**: 
  - [Bearings Library - Airsoft BBs (ᴜ ɴ ʀ ᴇ ᴀ ʟ, Printables; URL from search results, details read through the Printables API)](https://www.printables.com/model/33110-bearing-library-airsoft-bb-6mm): Ring bearings for 6 mm airsoft BBs from 20 to 200 mm outside diameter, all 7.1 mm thick, with a table of ball counts and STEP files for resizing *(licence: CC BY)*
  - [Lazy Susan carousel bearing (multiple sizes) (Shaun, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/73993-lazy-susan-carousel-bearing-multiple-sizes): 200 mm and 140 mm lazy Susan bearings for 6 mm BBs, with test-print sections and a parametric FreeCAD file *(licence: CC BY-SA)*
  - [Parametric Lazy Susan Bearing (Modern Hobbyist, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/686261-parametric-lazy-susan-bearing): A 5 in printed lazy Susan bearing with a parametric Fusion 360 file (diameter, ball size, gap, ball count), a full-race or pocketed inner ring, and a bolted ball-loading port *(licence: CC BY)*
  - [All-Printed Lazy Susan Bearing (TheBandicoot, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1610510-all-printed-lazy-susan-bearing): A support-free thrust bearing with 10 printed rollers in a cage and a press-fit lid; no hardware needed *(licence: CC BY-NC-SA)*
  - [Herringbone Geared Turntable Roller Bearing (MrCliveMrClive, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/136844-herringbone-geared-turntable-roller-bearing): A self-retaining turntable bearing whose rollers are herringbone gears; with 7 rollers it held more than 17 kg *(licence: CC BY)*
- **diagram_idea**: Cross-section of a turntable bearing: top ring and bottom ring with facing grooves, a row of balls, and bolts through each ring into the platform and the base, with arrows for downward weight, an off-centre weight producing a tipping moment (one side pressed, the other side lifted) and a sideways push; beside it, a square lazy Susan plate seen from below with the access hole lined up over one of the top plate's screw holes.
- **sources**: 
  - https://en.wikipedia.org/wiki/Slewing_bearing
  - https://en.wikipedia.org/wiki/Lazy_Susan
  - https://en.wikipedia.org/wiki/Airsoft_pellets
  - https://commons.wikimedia.org/wiki/File:Slewing_bearing.jpg
  - https://commons.wikimedia.org/wiki/File:Lazy_Susan_(IMG_0257).jpg
  - https://www.kaydonbearings.com/downloads/whitepapers/Kaydon-MountingSlewingWP.pdf
  - https://www.kaydonbearings.com/downloads/catalog390/Kaydon_390_TechInfo.pdf
  - https://www.igus.com/info/slewing-ring-overview
  - https://igus.partcommunity.com/23d-libs/igus/iglidur_gleitlager/iglidur_prt/iglidur_prt_english.pdf
  - https://www.rockler.com/learn/how-to-install-lazy-susan-hardware
  - https://www.rockler.com/learn/lazy-susan-project
  - https://www.craftparts.com/products/lazy-susan-bearings-6
  - https://www.craftparts.com/products/lazy-susan-bearings-12
  - https://gm0.org/en/latest/docs/common-mechanisms/turrets/full-turret.html
  - https://www.chiefdelphi.com/t/lazy-susan-vs-bearing-stack-for-turret/400176
  - https://hackaday.com/2020/06/15/giant-bearing-is-at-the-heart-of-a-camera-mount/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.youtube.com/watch?v=uJO7mv4-0PY
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, everyday_examples, making_tips_3d_printing, safety_notes

## 180 Gimbal

*hinges & pivots.* Rings pivoted at right angles to each other so the object in the middle can tilt freely in two or three directions, as in camera stabilisers

*Not researched yet.*

## 181 Clip-on concealed hinge (cup hinge)

*hinges & pivots.* A hidden cabinet hinge that sits in a round pocket in the door and clips on and off its mounting plate without tools, with adjusting screws

*Not researched yet.*

## 182 Invisible barrel hinge (Soss-type)

*hinges & pivots.* A hinge made of folding links that hides completely inside the edges of the door and frame when closed

*Not researched yet.*

## 183 Virtual-pivot linkage (remote centre of motion)

*hinges & pivots.* A linkage that makes a part rotate about a point in empty space where there is no actual pin, as in some robot wrists and folding mechanisms

*Not researched yet.*

## 184 Self-closing hinges (spring hinge, rising butt hinge)

*hinges & pivots.* Hinges that swing a door or lid shut by themselves, using a spring or a sloping knuckle that lifts the door as it opens

*Not researched yet.*

## 185 Lid and flap stays (folding stay, friction stay)

*hinges & pivots.* Arms that hold a lid or flap open: a folding stay locks just past straight, a sliding stay holds by adjustable friction

*Not researched yet.*

## 263 Knuckle hinge (butt hinge)

*hinges & pivots.* Two leaves joined by a pin through interlocking knuckles; the ordinary door hinge

*Not researched yet.*

## 264 Plain pivot and rolling bearing (pin in hole, shoulder bolt, ball bearing)

*hinges & pivots.* A shaft or pin turning in a hole, or in a ball bearing, as the basic way to make something rotate

*Not researched yet.*

