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

### What it is

- **plain_name**: Rings inside rings, each on a pair of pivots set at right angles to the next, so the thing in the middle can tilt any way, or stay level while its holder rocks about
- **term**: Gimbal (Cardan suspension)
- **aliases**: 
  - Cardan suspension, gimbal suspension (named after Gerolamo Cardano; Wikipedia 'Gimbal')
  - gimbal mount, gimbal ring, gimbaled mount
  - two-axis gimbal / three-axis gimbal (by number of rings or motor axes; Wikipedia; Appropedia)
  - handheld stabiliser, camera gimbal, 3-axis gimbal stabiliser, brushless gimbal (motorised camera versions; Wikipedia; Hackaday; Oscar Liang)
  - gimbal head (a single-axis telephoto lens mount that swings the lens about its centre of gravity; Wikipedia)
  - Steadicam (brand; a mechanical camera stabiliser that pivots at a gimbal; Wikipedia) *(unverified parts omitted)*
- **family**: hinges & pivots
- **other_families**: powered & active connectors
- **one_liner**: A set of two or three nested pivots at right angles to each other, so the object in the middle can tilt freely about each axis, or stay level while whatever holds it rocks.
- **complexity**: A small assembly that acts as one unit: an outer frame or ring fixed to the holder, one or two inner rings, the object (payload) in the middle, and a pair of pivots between each ring and the next (pins, cone points in dimples, or ball bearings on shafts). Motorised camera gimbals add a motor on each axis, a motion sensor (IMU) and a controller board.
- **how_it_works**: Each ring can only turn about one axis on its pair of pivots, and each ring's axis is at right angles to the next one's, so the rotations stack up: two rings let the middle tilt in two directions (pitch and roll), and a third ring adds turning (yaw) (Wikipedia 'Gimbal'). With free pivots, a bottom-heavy object hangs level whatever the holder does, which is why ships' compasses, stoves and drink holders are gimbaled (Wikipedia). A motorised stabiliser instead balances the camera on the pivot axes and uses a motor on each axis, driven by a motion sensor, to hold the camera steady while the operator moves (Wikipedia; Hackaday 2015). If two of the three axes swing into line, the gimbal loses one direction of movement for that moment ('gimbal lock'), although nothing is actually locked (Wikipedia).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): lets an object tilt freely about two or three crossing axes
  - line parts up exactly: keeps an object level or pointing one way while its support rocks (Wikipedia 'Gimbal')
  - hold or release using power: motorised stabilisers use a motor on each axis to hold a camera steady (Wikipedia; Hackaday)
- **degrees_of_freedom**: 2 or 3: each ring adds one rotation, so two rings give two (pitch and roll) and three give three (pitch, roll and yaw) (Wikipedia 'Gimbal'); with three rings, one direction is lost whenever two axes line up (gimbal lock; Wikipedia)
- **special_behaviour**: 
  - self-aligning or self-centring: an object whose weight sits below the pivots hangs level by itself however its support tilts, as with ships' compasses, stoves and drink holders; the Steadicam stays upright by making its bottom slightly heavier than its top (Wikipedia 'Gimbal')
  - none of the locking or clicking behaviours: plain gimbals turn freely. Friction can be added so it stays where it is set, e.g. printed bumpers on a lamp gimbal (Pinshape '2 Axis Gimbal for Directional Lighting')
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): the pivots guide rotation rather than hold it
  - friction or clamping (force-fit): only in versions meant to stay where they are set, e.g. rubbing bumpers or tightened pivots (Pinshape)
  - powered hold: motorised stabilisers hold the camera angle with motors (Wikipedia)
- **input_output**: not applicable: a gimbal lets the middle tilt but does not pass motion on from one shaft to another (that is the job of the universal joint, which uses the same crossed pivots). In motorised stabilisers each axis is turned directly by its own brushless motor (Wikipedia); a balanced payload can be moved by hand when the power is off (DroneTrest), so it is back-drivable.
- **power**: passive (no power needed) for ordinary gimbals. Powered camera stabilisers use three brushless motors with an IMU and control algorithms (Wikipedia 'Gimbal'). If power is lost, the motors stop holding and the camera swings freely: a well-balanced camera stays roughly where it was, while an unbalanced one flops over (DroneTrest balancing guide).
- **removability**: removable: gimbals with pins, bolts or bearings at the pivots can be taken apart and re-assembled; print-in-place gimbals are one captive piece and can't be separated without breaking them
- **reuse_cycles**: many times for gimbals with bolted or pinned pivots; once for print-in-place gimbals, which are never taken apart
- **tools_needed**: none for a print-in-place gimbal (just work the joints loose; Printables 'Universal Travel Coffee Gimbal'); a screwdriver, hex keys or spanner for gimbals assembled with bolts or pins; for motorised camera gimbals also a soldering iron and a computer to set up and tune the controller (Oscar Liang; Hackaday 2019)
- **load**: light to medium for maker builds: loads go through the small pivot pins in shear and bending, so the pivots and the rings' stiffness set the limit. Printed passive gimbals comfortably carry drink cups and coffee cups (Printables models), and a printed stepper-driven dual-axis gimbal carried optical samples (Appropedia). Industrial gimbals carry heavy loads such as rocket engines, which are mounted on a pair of gimbals to steer their thrust (Wikipedia). *(unverified parts omitted)*
- **adjustable**: Yes, in several ways: the payload can usually be slid on its mount to balance it on the pivot axes (Oscar Liang; DroneTrest); friction can be added or sanded away so the angle stays set (Pinshape); motorised gimbals are tuned in software (PID settings; Hackaday 2015).
- **play_and_precision**: small to noticeable, depending on the pivots: bearings or tight pins have little play, while print-in-place pivots need a gap of at least about 0.3 mm (Prusa), which gives some wobble. A 3D-printed stepper-driven two-axis gimbal measured 2.827 degrees accuracy, 1.585 degrees repeatability and 1.237 degrees backlash (Appropedia '3D printed dual axis gimbal system'). For smooth stabilisation, the camera lens must sit on the roll and pitch motor axes (Oscar Liang; Hackaday 2015).
- **access_needed**: not applicable
- **materials**: Rings and frames: metal or plastic; 3D-printed PLA or PETG for passive and light motorised gimbals (the Gimbalotl joystick gimbal used PETG with 4 perimeters and 20% infill; Printables); plywood and styrene sheet with metal brackets for a hand-built camera gimbal (Oscar Liang). *(unverified parts omitted)*
- **maker_difficulty**: easy for a passive print-in-place gimbal such as a cup holder or desk toy (prints in one piece); moderate for a bolted gimbal with bearings; hard for a motorised camera stabiliser, which needs careful balancing, electronics and PID tuning

### Making it

- **processes**: 
  - 3D print (FDM): print-in-place gimbals (cup holders, lamp mounts, toys) or printed rings and arms bolted together with motors (Printables; Pinshape; Hackaday 2019)
  - woodwork: plywood frames with metal brackets (Oscar Liang's hand-held camera gimbal)
  - off-the-shelf part: complete handheld stabilisers and drone gimbals, gimbal heads for long lenses, gimbal motors and controller boards (Wikipedia; Hackaday) *(unverified parts omitted)*
- **print_in_place**: yes for passive gimbals: print-in-place gimbals print already assembled with captive rings, e.g. drink holders and desk toys (Printables; DesignMakeTeach); no for motorised camera gimbals, which are printed as separate arms and bolted to the motors (Hackaday 2019)
- **making_tips_3d_printing**: 1) Print-in-place layout: print the rings nested and lying flat, with the pivots on the rings' horizontal axes. A common pivot is a small cone on the inner ring sitting in a dimple in the next ring, with a gap so the parts don't touch; the inner ring is trapped but free to spin (DesignMakeTeach, describing Bluebie's 'Parametric Gimbal'). Prusa suggests starting with a gap of at least 0.3 mm between parts that must move. 2) Supports: avoid supports inside the gimbal rings, which would glue the joints; the 'Universal Travel Coffee Gimbal' says not to use supports on the gimbal section and to work it back and forth until the joints click loose, and recommends 4 perimeters. The 'Drink Gimbal' prints with its top flat on the bed and only a little support, placed with support enforcers, under the base of the can holder (Printables). A lamp gimbal avoids supports by printing bridges that are snipped off afterwards (Pinshape). 3) Friction: if the gimbal should stay where it is set, add small bumpers that rub, and sand them to tune the friction (Pinshape). 4) Balance: design the payload holder so the object can slide to find its balance point, because weight is hard to predict (Oscar Liang). For a self-levelling holder (cups, compasses), keep the weight below the pivot axes; for a camera gimbal, put the camera's centre of gravity on the axes and the lens in line with the roll and pitch motor shafts (Wikipedia; Oscar Liang; DroneTrest). 5) Stiffness: rings flex under load; thicker rings and more perimeters help, e.g. PETG, 4 perimeters and 20% infill survived rough use in the Gimbalotl joystick gimbal (Printables). 6) Heat: PLA starts to give at about 60 degrees C (CNC Kitchen), so a PLA cup gimbal in a hot car or holding hot drinks may sag; *(unverified parts omitted)*
- **off_the_shelf_parts**: Motorised camera gimbals: brushless gimbal motors (low-kV, e.g. 2206 140 kV; Oscar Liang), a brushless gimbal controller (BGC) such as STorM32 (brand) boards (Hackaday 2019) or Quanum (brand) controllers (Oscar Liang), and an IMU board mounted with the camera (Hackaday 2015). Complete products: handheld 3-axis stabilisers for phones and cameras, drone camera gimbals, gimbal heads for telephoto lenses, and pan-tilt heads. Stepper-driven gimbals: stepper motors and an Arduino-type controller (Appropedia). *(unverified parts omitted)*
- **rules_of_thumb**: 
  - The pivot axes of successive rings must be at right angles (orthogonal); three rings are needed to isolate an object in all three rotations (Wikipedia 'Gimbal').
  - Avoid running a three-ring gimbal where two axes line up: at that point it loses one degree of freedom (gimbal lock; Wikipedia 'Gimbal').
  - Self-levelling: make the payload slightly bottom-heavy below the pivots, as a Steadicam does, so its centre of gravity stays under the gimbal (Wikipedia 'Gimbal').
  - Motorised camera gimbal: balance before powering on or tuning; a balanced camera stays wherever you point it with the power off (DroneTrest), and should face forward, level and upright at rest (Oscar Liang).
  - Put the camera lens in line with the roll and pitch motor shafts for stable video (Oscar Liang; Hackaday 2015).
  - Rebalance whenever the camera's centre of gravity changes, e.g. a zoom lens; fit the battery and memory card before balancing; 14-35 mm lenses suit gimbals (DroneTrest).
  - Start with at least 0.3 mm clearance between moving printed parts (Prusa knowledge base 'Modeling with 3D printing in mind').
  - What to expect from a printed stepper gimbal: about 2.8 degrees accuracy, 1.6 degrees repeatability and 1.2 degrees backlash (Appropedia '3D printed dual axis gimbal system', Bihari et al. 2018).

### When to use it

- **everyday_examples**: 
  - A handheld phone or camera stabiliser, and the camera under a drone (Wikipedia 'Gimbal')
  - A ship's compass, stove or drink holder that stays level while the boat rolls (Wikipedia 'Gimbal')
  - A gyroscope toy, or a print-in-place gyroscope fidget made of nested rings (Printables) *(unverified parts omitted)*
- **when_to_use**: Use a gimbal when something must tilt freely in two or three directions about one fixed point, or stay level or pointing the same way while its support moves: cup holders on bikes, prams, cars and boats, compasses and spirit-level instruments, lamps and cameras you want to aim, sensor or test mounts, joysticks, and motorised camera stabilisers. It is also good when the tilting part must stay open in the middle (a cup or camera sits inside the rings).
- **when_not_to_use**: If you need to pass turning motion from one shaft to another at an angle, use a universal (Hooke's) joint instead. If you only need something to tilt and lock in place, a ball-and-socket joint or lockable ball head is more compact. If only one tilt direction is needed, a single hinge or trunnion is simpler. Avoid a three-ring gimbal where two axes may line up (gimbal lock). *(unverified parts omitted)*
- **environment_limits**: Printed PLA gimbals soften from about 60 degrees C (CNC Kitchen), so a PLA cup holder left in a hot car may sag; PETG and ASA last longer. *(unverified parts omitted)*
- **safety_notes**: Otherwise, none known. *(unverified parts omitted)*
- **common_failures**: 1) Print-in-place pivots fused solid: the gap was too small or supports got inside the joint; use at least about 0.3 mm gap, no supports in the gimbal section, and work the joints loose (Prusa; Printables 'Universal Travel Coffee Gimbal'). 2) The payload won't stay level: its weight is not below (passive) or on (motorised) the pivot axes; slide it to balance (Oscar Liang; DroneTrest). 3) A motorised gimbal jitters or drifts: unbalanced camera or poor PID tuning; balance first, then tune (Oscar Liang; Hackaday 2015). 4) The angle won't stay set: add friction bumpers or tighten the pivots (Pinshape). 5) Sudden loss of control when two axes line up: gimbal lock; keep the working range away from that position (Wikipedia). *(unverified parts omitted)*
- **related**: 
  - Universal joint (Hooke's joint, Cardan joint): the same two crossed pivots, but used to pass rotation between two shafts at an angle
  - Ball-and-socket joint (lockable ball head): tilts in all directions in one compact joint, but relies on friction and has a limited angle
  - Trunnion and clevis pivots: a single pivot axis; one ring of a gimbal is essentially a trunnion mount
  - Pan-tilt mount: two stacked motorised pivots used to aim cameras or lights; a gimbal without the rings
  - Slip ring and rotary union: passes power or signals through a joint that turns all the way round
  - Canfield joint: a parallel-link joint for pointing things, listed by Wikipedia alongside the gimbal *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Gimbal 3 axes rotation.gif (Wikimedia Commons, by Lookang)](https://commons.wikimedia.org/wiki/File:Gimbal_3_axes_rotation.gif): Animation of three nested gimbal rings turning about pitch, roll and yaw axes while the centre stays fixed *(licence: CC BY-SA 3.0)*
  - [Gimbal Lock Plane.gif (Wikimedia Commons, by Drummyfish)](https://commons.wikimedia.org/wiki/File:Gimbal_Lock_Plane.gif): Animation of an aircraft in colour-coded roll, pitch and yaw gimbal rings, showing two axes lining up (gimbal lock) *(licence: CC0 1.0 (public domain))*
  - [Gimbal (Wikipedia)](https://en.wikipedia.org/wiki/Gimbal): Definition, history (Philo of Byzantium, Ding Huan's incense burner, Villard de Honnecourt's sketch) and uses, with the animations above and photos of a smartphone gimbal and camera stabiliser *(licence: CC BY-SA 4.0 (text); images per file)*
  - [DIY Brushless Camera Gimbal - Handheld & Mini Quadcopter (Oscar Liang)](https://oscarliang.com/build-brushless-camera-gimbal-handheld-quadcopter/): Photos and video of a hand-made two-axis brushless camera gimbal in plywood, with notes on aligning the lens with the motor axes and balancing *(licence: link only)*
  - [2 Axis Gimbal for Directional Lighting (Pinshape, by Barry Maxwell)](https://pinshape.com/items/54386-3d-printed-2-axis-gimbal-for-directional-lighting): Printable two-axis gimbal with print-in-place joints and friction bumpers, holding a GU10 lamp socket *(licence: CC BY)*
- **make_it_yourself**: 
  - [Drink Gimbal - no spill can holder - print in place (Caleb Kraft, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/48659-drink-gimbal-no-spill-can-holder-print-in-place): Print-in-place gimbal can holder; print with the top flat on the bed and a little support under the base. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [Universal Travel Coffee Gimbal (mobiobi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/129329-universal-travel-coffee-gimbal): Fully printed gimbaled to-go cup holder that clamps to a 20-30 mm bar; no supports on the gimbal section, work the joints loose; STEP and Fusion 360 files included for editing. Read through the Printables public API. *(licence: CC BY-NC (Creative Commons Attribution-NonCommercial))*
  - [2 Axis Gimbal for Directional Lighting (Barry Maxwell, Pinshape)](https://pinshape.com/items/54386-3d-printed-2-axis-gimbal-for-directional-lighting): Print-in-place two-axis lamp gimbal with sandable friction bumpers; one version prints without supports using snip-off bridges *(licence: CC BY)*
  - [3D Design: Personalize a Gimbal (DesignMakeTeach, Tinkercad tutorial)](http://designmaketeach.com/2014/05/06/3d-design-personalize-a-gimbal/): Beginner tutorial for customising Bluebie's print-in-place 'Parametric Gimbal' in Tinkercad, with a cut-away view of the cone-and-dimple pivots; the resulting 'MOM Gimbal' is on Printables (model 294480, CC BY-SA) *(licence: link only (tutorial); model CC BY-SA)*
  - [3D printed dual axis gimbal system (Appropedia; Bihari, Dash, Dhankani and Pearce 2018)](https://www.appropedia.org/3D_printed_dual_axis_gimbal_system): Open-source, 3D-printable two-axis gimbal driven by two stepper motors and an Arduino-based controller, for optical measurements; links to the STL files, CAD and source code *(licence: CC BY-SA 3.0)*
- **diagram_idea**: An exploded then assembled view of a two-ring gimbal: the fixed outer frame with a horizontal pivot axis (arrow A), the middle ring with a vertical axis at right angles (arrow B), and a cup in the centre; then the frame tilted 30 degrees while the cup stays level, with a dot marking the cup's centre of gravity below the pivots.
- **sources**: 
  - https://en.wikipedia.org/wiki/Gimbal
  - https://commons.wikimedia.org/wiki/File:Gimbal_3_axes_rotation.gif
  - https://commons.wikimedia.org/wiki/File:Gimbal_Lock_Plane.gif
  - https://oscarliang.com/build-brushless-camera-gimbal-handheld-quadcopter/
  - https://www.dronetrest.com/t/balancing-your-brushless-gimbal/55
  - https://hackaday.com/2015/03/28/resourceful-diy-brushless-hand-held-camera-gimbal/
  - https://hackaday.com/2019/08/19/diy-gimbal-for-the-raspberry-pi-camera/
  - https://www.appropedia.org/3D_printed_dual_axis_gimbal_system
  - https://pinshape.com/items/54386-3d-printed-2-axis-gimbal-for-directional-lighting
  - http://designmaketeach.com/2014/05/06/3d-design-personalize-a-gimbal/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, everyday_examples, load, making_tips_3d_printing, materials, motion, off_the_shelf_parts, processes, related, safety_notes, seal, when_not_to_use

## 181 Clip-on concealed hinge (cup hinge)

*hinges & pivots.* A hidden cabinet hinge that sits in a round pocket in the door and clips on and off its mounting plate without tools, with adjusting screws

### What it is

- **plain_name**: The hidden kitchen-cupboard hinge: a round metal cup sunk into the back of the door, joined by a folding arm to a plate on the cabinet side, that clicks on and off without tools and has little screws for lining the door up
- **term**: Concealed hinge (cup hinge, European or Euro hinge), clip-on type
- **aliases**: 
  - cup hinge
  - Euro hinge / European hinge (developed in Europe and uses metric installation standards; Wikipedia 'Hinge')
  - concealed hinge / hidden hinge / invisible cabinet hinge
  - 35 mm hinge (after the usual cup-hole diameter)
  - pot hinge (translation of German 'Topfscharnier' or 'Topfband')
  - four-joint or multi-joint cup hinge (German 'Viergelenk-Topfscharnier'; the usual kind)
  - clip-on hinge / clip hinge / tool-free hinge (the clip-on version, as opposed to slide-on or screw-on versions)
  - soft-close hinge (versions with a built-in damper)
  - full overlay / half overlay (cranked, twin) / inset hinge (the three main door positions)
  - face-frame hinge vs frameless (Euro-style) cabinet hinge
  - CLIP top, CLIP top BLUMOTION (Blum (brand)); Sensys (Hettich (brand)); Salice and Grass (brands)
- **family**: hinges & pivots
- **other_families**: quick-release & tool-free, over-centre, toggle & cam clamps, motion conversion
- **one_liner**: A cabinet-door hinge that hides inside a 35 mm round pocket drilled in the back of the door, clips onto a plate on the cabinet so the door can be lifted off without tools, and has three screws to shift the door sideways, up and down, and in and out until the gaps line up.
- **complexity**: A small assembly that acts as one unit, in two separable halves. 1) The hinge: a cup (sunk into the door), a hinge arm, two links joining cup and arm in a four-bar (four-pivot) linkage, a closing spring, often a soft-close damper in the cup, a side-adjusting screw and a depth-adjusting cam screw, and a spring-loaded clip catch with a release lever. 2) The mounting plate on the cabinet side (screwed, or pressed in with plastic dowels), often with a height-adjusting cam. Plus wood screws or pre-fitted dowels (Wikipedia 'Hinge': cup and arm plus mounting plate; Blum H002 kit and spec sheet; German Wikipedia 'Scharnier').
- **how_it_works**: The cup sits in a flat-bottomed 35 mm hole bored into the back of the door, so the hinge's pivots are sunk into the door's thickness and nothing shows from the front when it is closed (German Wikipedia 'Scharnier'; Rockler). Most cup hinges are four-bar linkages: two pivots in the cup and two on the arm, joined by two links, so the door edge does not swing on a simple circle but moves out and away from the cabinet as it opens; this lets doors sit only a few millimetres from their neighbours without colliding (German Wikipedia 'Scharnier'). The arm hooks over the front of the mounting plate and you press its back down until a spring catch clicks; pulling a small release lever lets it come off again (Blum H002). A spring pulls the door shut and, past a certain angle, helps hold it open, and screws or cams on the arm and plate move the door about 2 mm each way sideways and up or down, and in or out, so the gaps can be evened up after fitting (German Wikipedia; Blum H002).

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): it is the pivot for a cupboard door, flap or lid
  - lock, and release by hand: the arm clips onto its mounting plate and a release lever lets the door come off without tools (Blum H002)
  - line parts up exactly: three adjusting screws or cams move the door sideways, up/down and in/out to even out the gaps (Blum H002)
  - slow it, stop it or keep its speed steady: soft-close versions have a damper in the cup so the door does not slam (Blum spec sheet; Woodcraft)
- **motion**: rotate: most cup hinges open 105° to 120°, wide-angle ones up to 170° (Woodcraft); Blum CLIP top is offered at 107°, 110°, 120° and 170° (Blum product page), and a clip can limit a 110° hinge to 86° (Blum spec sheet). Because it is a four-bar linkage, the door also moves outward as it swings (German Wikipedia 'Scharnier').
- **degrees_of_freedom**: 1: the door can only swing; the four links force the swing and the small outward movement to happen together, so there is still only one independent motion (German Wikipedia 'Scharnier'). The adjusting screws are set-and-forget position changes, not free movements.
- **special_behaviour**: 
  - quick-release: the hinge arm clips onto the mounting plate and comes off by pulling a release lever, so doors can be removed for cleaning or refinishing without tools (Blum H002; Rockler; Blum: 'Doors can be attached and removed quickly without tools - they snap on and off')
  - over-centre (snaps past a point and stays): the built-in spring holds the door shut; past a certain opening angle the spring's pull changes direction and helps hold the door open, and on closing the door pulls itself shut after a certain angle (German Wikipedia 'Scharnier', describing a leaf-spring cup hinge)
  - motion conversion: the four-bar makes the door move out and away from the cabinet as it swings, so its edge clears neighbouring doors even with small gaps (German Wikipedia 'Scharnier') *(unverified parts omitted)*
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the arm hooks over the mounting plate and a catch snaps behind it; Blum says three-point contact keeps them firmly connected (Blum spec sheet)
  - spring force (a spring or springy part presses it in place): the clip catch is spring-loaded, and a closing spring holds the door shut (German Wikipedia 'Scharnier')
  - friction or clamping (force-fit): wood screws (or expanding dowels) clamp the cup into the door and the plate onto the cabinet
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release: the door unclips from the mounting plates by hand (Blum H002); the cup and plate themselves are screwed in and removable with a screwdriver
- **reuse_cycles**: many times: the clip is made for repeated removal; Blum cycle-tests all CLIP hinges to 200,000 opening and closing cycles (Blum spec sheet). Screw holes in MDF or particleboard wear out if screws are repeatedly removed and re-driven (Woodcraft; This Old House).
- **tools_needed**: To fit: drill with a 35 mm Forstner (flat-bottomed) bit, ideally in a drill press or with a jig; a 1/8 in (3 mm) bit for pilot holes; #2 Phillips or Pozidriv screwdriver (Blum H002; Wikipedia 'Concealed hinge jig'). Press-in versions need a knock-in tool or press (Blum spec sheet). To remove or refit the door: none. To adjust: a #2 Phillips or Pozidriv screwdriver.
- **seal**: none
- **load**: medium, for cabinet-sized doors: Blum suggests 2 hinges for doors of 4-6 kg and 3 hinges for 6-12 kg, for doors up to 600 mm wide (Blum EASY ASSEMBLY blog). Blum's tests include a 67 lb (30 kg) static load applied ten times at 45° opening and an 11 lb (5 kg) extra weight for 100,000 cycles (Blum spec sheet). *(unverified parts omitted)*
- **adjustable**: yes: side adjustment (front screw, about ±2 mm), height adjustment (cam on the mounting plate, about ±2 mm) and depth adjustment (rear cam screw, +3 mm/-2 mm) on Blum CLIP top (Blum H002). Blum's depth cam gives 5 mm of travel in 1¾ turns without loosening a fixing screw, and its side screw gives 4 mm with a stop so it can't be screwed out (Blum spec sheet). Face-frame cup hinges often adjust only sideways and up/down (Woodcraft).
- **play_and_precision**: The adjusters absorb small drilling errors of about 2 mm (Blum H002), but the cup hole must still be bored square to the door, which is why jigs are used (Wikipedia 'Concealed hinge jig'). *(unverified parts omitted)*
- **access_needed**: one side only (blind): the cup and the mounting plate both screw on from the inside of the door and cabinet, and nothing goes through to the front face
- **materials**: They fit wood, plywood, MDF and particleboard doors; in MDF and particleboard use versions with pre-fitted plastic dowels or inserts, because ordinary screws hold poorly there (Woodcraft; Blum spec sheet). 26 mm cup versions exist for glass doors and small doors (German Wikipedia 'Scharnier'). *(unverified parts omitted)*
- **maker_difficulty**: moderate: buy the hinge (you can't practically make one); fitting is easy with a jig, but the 35 mm cup hole must be drilled square, to the right depth and at the right distance from the edge, and you have to pick the right overlay type

### Making it

- **processes**: 
  - off-the-shelf part: the hinge itself is always bought (Blum, Hettich, Salice, Grass and generic makes)
  - woodwork: bore the 35 mm cup hole with a Forstner bit, ideally in a drill press or with a hinge jig; screw the plate to the cabinet side (Woodcraft; Blum H002)
  - 3D print (FDM): drilling jigs and templates, spacers, angle-limiting clips, and printed doors or blocks with the cup pocket modelled in; fully printed concealed four-bar hinges also exist *(unverified parts omitted)*
- **print_in_place**: no: real clip-on cup hinges are metal parts you buy. As a printed alternative, SigmaT4's 'Print in place concealed hinge mechanism' prints its linkage already assembled (small built-in support pillars snap free on first use) and press-fits onto two screwed-on mounts, but it is not a clip-on cup hinge (Printables).
- **making_tips_3d_printing**: 1) Don't try to print the hinge; print the tools and parts around it. Printed drilling jigs are popular: e.g. Agustin Bonini's 'Drill Jig for 35mm Hinge' puts the hole centre 22 mm from the door edge (public domain), Uenbzsto's parametric OpenSCAD drill guide aligns the cup hole, door screws and carcass screws and has STLs for several Blum hinges, and SimonM's parametric template handles inset doors of different thicknesses (all on Printables). Check the jig's centre distance against your hinge's table: Blum's cup centre runs from 20.5 mm to 24.5 mm from the door edge depending on the overlay (Blum H002). 2) Fitting a cup hinge to a printed door or panel: model the 35 mm pocket, 13 mm deep, instead of drilling it; Blum rates CLIP top BLUMOTION for doors 16 to 26 mm thick, so a printed door needs at least that thickness at the hinge, or a printed boss there (Blum H002). 4) Doors too thin for a 13 mm deep cup: Billiam's printed 1.5 mm spacer lets Blum CLIP top soft-close hinges go on doors that can't be drilled 13 mm deep (Printables). 5) To stop a door hitting a wall, print an angle-restriction clip: Erik Stenborg's copy of Blum part 74.1103 limits a 107° hinge to 86° and worked in PLA; print it with the flat J-shaped side down (Printables). 6) If you want a fully printed hidden hinge for a printed box or enclosure, use a design made for printing: SigmaT4's print-in-place concealed linkage hinge (left-hand files, mirror for right; allows up to 21 mm of overlap), or ragnarokpw's 180° concealed hinge printed in PETG with pieces of 1.75 mm filament as pins (Printables). For any printed moving joint, start with at least 0.3 mm clearance (Prusa). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'concealed hinge 35mm', 'cup hinge', 'European hinge', 'clip-on hinge', 'soft close hinge', and the door position: 'full overlay', 'half overlay' (also 'twin' or 'cranked'), 'inset' hinge; 'face frame' vs 'frameless' hinge; opening angle ('110°', '170° wide angle'); 'mini hinge 26mm' for small or thin doors; 'glass door hinge'. Mounting plates: 'mounting plate 0 mm / 3 mm' (plate height changes overlay), 'wing' or 'cruciform' plate, 'inline' plate, 'face frame adapter plate', 'cam height adjustable plate'; fixings: 'screw-on', 'press-in (Ø8 dowels)', 'EXPANDO', 'INSERTA' (Blum (brand) expanding dowels). Accessories: 'angle restriction clip' (e.g. 86°), 'hinge cover cap', 'soft close adapter' or 'BLUMOTION add-on' (Blum (brand)), 'push-to-open' hinges. Tools: '35mm Forstner bit', 'concealed hinge jig' or 'hinge boring jig' (Blum spec sheet; Woodcraft; Rockler; Wikipedia 'Concealed hinge jig').
- **rules_of_thumb**: 
  - Cup hole: 35 mm diameter, 13 mm (1/2 in) deep, for doors 16 to 26 mm thick (Blum H002 kit instructions for CLIP top BLUMOTION 110°). Other cup sizes exist: 40, 32 and 26 mm, with 26 mm used for glass doors (German Wikipedia 'Scharnier').
  - Hole position is set by the boring distance, measured from the rim of the hole to the door edge, not the centre (Woodcraft). Blum: cup centre 20.5 to 24.5 mm from the edge for overlays of 14 to 18 mm (Blum H002); overlay = fixed distance + boring distance - mounting-plate height (Blum spec sheet).
  - Mounting plate on a frameless cabinet: centreline 37 mm back from the front edge of the cabinet side, screws 16 mm above and below the plate centreline, 3 mm (1/8 in) pilot holes (Blum H002).
  - Keep the cup centre at least 3 to 4 in (about 75 to 100 mm) from the top and bottom of the door (Blum H002); a common choice is 3 in from top and bottom (Woodcraft).
  - The distance between the top and bottom hinges must be greater than the width of the door (Blum H002; Blum spec sheet); doors should be taller than they are wide (Blum EASY ASSEMBLY blog).
  - Number of hinges: 2 for doors of 4-6 kg, 3 for 6-12 kg, valid for widths up to 600 mm; add a hinge for doors up to 650 mm wide; count handles in the weight; use 3 on tall narrow doors for stability (Blum EASY ASSEMBLY blog).
  - Adjustment range to expect: side ±2 mm, height ±2 mm, depth +3/-2 mm (Blum H002).
  - Half-overlay doors cover a little under half the side panel (typically 5/16 in), so two doors on a 3/4 in partition leave a 1/8 in gap (Rockler).
  - Most cup hinges open 105° to 120°; choose up to 170° for corner cupboards, or an angle-limiting hinge or clip where the door would hit a wall (Woodcraft; Blum spec sheet).
  - In MDF or particleboard, choose hinges and plates with barbed plastic inserts or pre-fitted dowels, because ordinary screws lose strength there (Woodcraft; Blum spec sheet).
  - Blum's soft-close (BLUMOTION) closes best between 65 and 85 °F (about 18 to 29 °C); colder or hotter only changes the closing speed (Blum spec sheet).

### When to use it

- **everyday_examples**: 
  - Kitchen cupboard doors (the round cup is visible on the back of the door when it is open)
  - Bathroom vanity and wardrobe doors
  - Flat-pack furniture doors that you adjust with a screwdriver after assembly
  - Built-in fridge and freezer doors hidden behind a cabinet panel use related multi-joint hinges (German Wikipedia 'Scharnier')
- **when_to_use**: Use cup hinges for cupboard, wardrobe, cabinet and enclosure doors where you want no hinge visible from the front, doors that sit close to their neighbours, and the ability to line up the gaps after fitting. They suit flat panel doors 16 to 26 mm thick in wood, plywood, MDF or particleboard (Blum H002), let you lift doors off for cleaning or painting (Rockler), and come in versions for full-overlay, half-overlay and inset doors, face-frame or frameless cabinets, wide opening angles, soft close and push-to-open. Makers use them on wooden 3D-printer enclosures and workshop cabinets.
- **when_not_to_use**: Avoid them on thin doors or lids that can't take a 13 mm deep, 35 mm hole (use a 26 mm mini cup hinge, a butt or knuckle hinge, a print-in-place hinge, or an invisible barrel (Soss-type) hinge for thicker lids); on heavy full-height room doors (use door hinges or Soss-type invisible hinges); outdoors, because Blum designs its concealed hinges for indoor use (Blum spec sheet; use stainless or marine hardware instead); where you need the door to open a full 180° flat (most open 105-120°; use a 170° cup hinge, a Soss-type hinge or a piano hinge); and on doors with no room for the cup behind the front (glass: use a glass-door hinge). For a fully 3D-printed box, a printed hinge is simpler than fitting metal cup hinges.
- **environment_limits**: Designed for indoor use (Blum spec sheet). Soft-close dampers slow down in the cold and speed up in the heat; Blum quotes 65-85 °F (about 18-29 °C) for best action, with no damage outside that range (Blum spec sheet). Woodcraft for re-screwing). *(unverified parts omitted)*
- **safety_notes**: Pinch point between door and cabinet edge as the spring pulls the door shut; keep fingers clear, especially with non-soft-close hinges. A door that isn't fully clipped on can drop off the plates: check each arm clicks home (Blum H002). The loose parts are a choking hazard for small children (Blum kit warning). Take the weight of a large door before unclipping the last hinge.
- **common_failures**: Door sags or gaps go uneven as screws loosen with use; re-tighten and re-adjust the three screws (This Old House; Blum H002). Screws strip out of particleboard or MDF, often after repeated removal; repair by gluing in wood slivers or toothpicks and re-driving the screw (This Old House), or use hinges with plastic dowel inserts (Woodcraft). Door falls off because the arm was not pushed on until it clicked (Blum H002: make contact at the front point, then press until it clips). Cup hole drilled off-square, too deep, or at the wrong distance from the edge, which spoils the door face or the gaps: use a jig and a depth stop, and check the boring-distance table for your overlay (Wikipedia 'Concealed hinge jig'; Blum H002). Wrong hinge type (overlay vs inset, face frame vs frameless) so the door won't sit right (Rockler; Woodcraft). Soft-close too slow in a cold room (Blum spec sheet). Door hits a wall or appliance: fit an angle-restriction clip (Blum spec sheet).
- **related**: 
  - Knuckle hinge (butt hinge): a simple visible pin hinge on the outside; cheaper and thinner, but no adjustment and not hidden
  - Invisible barrel hinge (Soss-type): also hidden, but sunk into the door edge and frame edge rather than the back face; opens 180° and suits thicker doors and lids; no adjustment or clip-off
  - Self-closing hinges (spring hinge, rising butt hinge): hinges whose main job is swinging the door shut; cup hinges usually include a closing spring too
  - Dampers (rotary and linear soft-close dampers): the soft-close part on its own, which can be added to ordinary cup hinges
  - Push-push latch (push-to-open): pairs with no-spring cup hinges for handle-less doors
  - Four-bar linkage: the mechanism inside a multi-joint cup hinge
  - Virtual-pivot linkage (remote centre of motion): the idea behind the cup hinge's moving pivot, where the door turns about a point with no pin
  - Lift-off hinges and knock-down fittings: other ways to make doors or panels removable, but with tools or with visible hardware
  - Print-in-place hinge: a printed alternative for small printed boxes and lids

### Pictures, videos and models

- **links**: 
  - [Scharnier 06.gif: 'Topfscharnier als Mehrgelenkscharnier' (Manfredgoellner, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Scharnier_06.gif): Animation of a cup hinge working as a multi-joint (four-bar) hinge, showing how the door moves out as it opens *(licence: CC BY-SA 4.0)*
  - [Topfscharnier.jpg (Pavel Krok, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Topfscharnier.jpg): Photo of a cup hinge with its mounting plate (German Wikipedia caption: multi-joint cup hinge, adjustable in three axes) *(licence: CC BY-SA 2.5)*
  - [KIT INSTRUCTIONS - H002 CLIP top BLUMOTION 110° (soft close) hinge (Blum)](https://d2.blum.com/services/BEC003/cme198264_ma_dok_bus_$sen-us_$aof_$v1.pdf): Step-by-step drawings: boring the 35 mm x 13 mm cup hole, positioning the mounting plate 37 mm from the front edge, clipping on and off with the release lever, and the three adjustment screws *(licence: link only)*
  - [Cup Hinges: How to Choose, Install & Adjust (Woodcraft)](https://www.woodcraft.com/blogs/cabinetry-furniture-making/try-cup-hinges-for-your-next-cabinets-learn-how-to-choose-install-and-adjust-these-engineered-marvels): Photos and drawings of cup hinges in frameless and face-frame cabinets, boring with a Forstner bit in a drill press, a marking jig, and arrows for each adjustment direction *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Drill Jig for 35mm Hinge (Agustin Bonini, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1276350-drill-jig-for-35mm-hinge): A printed drilling jig for 35 mm cup holes with the hole centre 22 mm from the door edge. Read through the Printables public API. *(licence: Public domain (Printables: 'Creative Commons — Public Domain'))*
  - [Universal Customizable Euro Cabinet Hinge Drill Guide (Uenbzsto, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/271058-universal-customizable-euro-cabinet-hinge-drill-gu): OpenSCAD parametric drill guide that aligns the cup hole, door screws and carcass screws; self-aligning dovetails, prints flat without supports; STLs for nine Blum hinge types. Read through the Printables public API. *(licence: CC BY)*
  - [Parametric Blum hinge template (SimonM, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/61793-parametric-blum-hinge-template): OpenSCAD drilling template for Blum inset hinges; adjust the 'inset' variable for door thickness; STLs for 18 and 22 mm doors. Read through the Printables public API. *(licence: CC BY-SA)*
  - [Blum hinge spacer (1.5mm) (Billiam, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/5066-blum-hinge-spacer-15mm): A 1.5 mm printed spacer for Blum CLIP top soft-close hinges on doors too thin to drill 13 mm deep. Read through the Printables public API. *(licence: CC BY)*
  - [Blum Hinge Angle Limiter 86 deg (Erik Stenborg, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1124557-blum-hinge-angle-limiter-86-deg): A printed copy of Blum part 74.1103 that limits a 107° hinge to 86°; printed fine in PLA. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Print in place concealed hinge mechanism + fidget toy (SigmaT4, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1176854-print-in-place-concealed-hinge-mechanism-fidget-to): A fully printed, print-in-place concealed linkage hinge that press-fits onto two screwed-on trapezoid mounts; allows up to 21 mm overlap; left-hand files (mirror for right). Read through the Printables public API. *(licence: CC BY-SA)*
- **diagram_idea**: Top view of a cabinet corner with the door closed, then half open, then fully open: the cup sunk in the back of the door, two crossing links to the arm clipped on the plate, and a dotted curve showing the door edge moving out and away from the cabinet instead of on a circle; inset labels for the 35 mm x 13 mm cup hole, the boring distance from the door edge, and the three adjustment arrows (sideways, up/down, in/out).
- **sources**: 
  - https://en.wikipedia.org/wiki/Hinge
  - https://de.wikipedia.org/wiki/Topfscharnier
  - https://de.wikipedia.org/wiki/Scharnier
  - https://commons.wikimedia.org/wiki/File:Scharnier_06.gif
  - https://commons.wikimedia.org/wiki/File:Topfscharnier.jpg
  - https://en.wikipedia.org/wiki/Concealed_hinge_jig
  - https://www.woodcraft.com/blogs/cabinetry-furniture-making/try-cup-hinges-for-your-next-cabinets-learn-how-to-choose-install-and-adjust-these-engineered-marvels
  - https://www.rockler.com/learn/choosing-the-right-hinge-for-your-project
  - https://ea.blum.com/en/number-of-hinges/
  - https://www.blum.com/us/en/products/hingesystems/clip-top/programme/
  - https://cabinotch.us/media/wysiwyg/FAQ/BlumHingeSpecifications.pdf
  - https://d2.blum.com/services/BEC003/cme198264_ma_dok_bus_$sen-us_$aof_$v1.pdf
  - https://www.thisoldhouse.com/cabinets/21097094/how-to-fix-loose-cabinet-door-hinges
  - https://www.youtube.com/watch?v=wmHhg8WvFT4
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** environment_limits, links, load, making_tips_3d_printing, materials, play_and_precision, processes, special_behaviour

## 182 Invisible barrel hinge (Soss-type)

*hinges & pivots.* A hinge made of folding links that hides completely inside the edges of the door and frame when closed

### What it is

- **plain_name**: A hinge that disappears completely when the door is shut: its two halves sit in deep slots cut into the edge of the door and the edge of the frame, and a stack of folding metal links between them unfolds as the door opens
- **term**: Invisible hinge (Soss-type concealed hinge, crossed-link hinge); drilled cylindrical version: invisible barrel hinge
- **aliases**: 
  - Soss hinge (after SOSS (brand), the original maker, from 1903)
  - invisible hinge / concealed invisible hinge / hidden hinge
  - cross hinge (translation of German 'Kreuzscharnier')
  - hidden door hinge / secret door hinge / bookcase door hinge (maker and trade wording)
  - invisible barrel hinge / concealed barrel hinge / barrel hinge (the small cylindrical, drilled-in version for boxes and lids)
  - wrap-around invisible hinge (SOSS 500 series (brand), stops at 92°, for hidden doors)
  - invisible closer hinge (spring-closing version, SOSS (brand))
  - Hercules hinge (SOSS (brand) heavy-duty steel version) *(unverified parts omitted)*
- **family**: hinges & pivots
- **other_families**: motion conversion
- **one_liner**: A hinge made of two metal bodies sunk into matching pockets in the door edge and the frame, joined by folding links, so that when the door is shut nothing at all shows on either side and when it opens it swings a full 180°.
- **complexity**: A small assembly that acts as one unit: two hinge bodies (each sunk into a stepped pocket, or mortise), two pairs of flat, roughly triangular links stacked alternately and joined in the middle by a pivot pin, two end pivot pins that hold one end of each link pair to a body, and two guide pins that slide in slots in the bodies, plus wood or machine screws (US patent 4,875,252). German references describe it as a five-joint hinge with two sliding joints, usually two stacked pairs of arms made of stacked stampings (German Wikipedia 'Scharnier', Kreuzscharnier). The drilled 'invisible barrel hinge' is simpler: two metal cylinders pushed into drilled holes, joined by brass links, with screws that expand the cylinders to lock them in (SOSS barrel hinge page; Family Handyman).
- **how_it_works**: Each half of the hinge is a metal body that fits into a deep pocket cut into the door edge and the frame edge, so both halves face each other when the door is shut (SOSS catalogue). Between them, two pairs of flat links cross like an X and are pinned together in the middle; one end of each pair pivots on a pin in one body, and the other end carries a pin that slides along slots in the other body (US 4,875,252). As the door closes, the links fold together into the pockets of the two bodies, so nothing is visible from either side; as it opens, they unfold out of the pockets and the door can swing to 180° (US 4,875,252; SOSS FAQ). The door turns about a pivot point that moves inside the hinge during the swing rather than about a fixed pin, which also means there is no pinch point on the hinge side of the door (SOSS catalogue; Hardware Source).

### Finder attributes

- **job**: let it move (turn, slide or bend): a door, lid, flap or panel swings up to 180° with the hinge completely hidden when closed (SOSS FAQ)
- **motion**: rotate, up to 180° in one direction only (SOSS FAQ); SOSS 500-series wrap-around hinges stop at 92° (SOSS catalogue p. 27). The door also shifts slightly as it swings, because the pivot moves inside the hinge.
- **degrees_of_freedom**: 1: the door can only swing; the links and sliding pins make the swing and the small shift of the pivot happen together
- **special_behaviour**: 
  - none: the standard hinge just swings. Variants add behaviour: the SOSS Invisible Closer is a spring hinge with an adjustable spring that swings the door shut (but does not cushion it), and SOSS makes power-transfer versions that carry wires (SOSS FAQ PDF)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it lets the door swing
  - shape (the parts interlock; form-fit): each body sits in a deep, full mortise that helps the screws carry the door, giving a stiffer installation (Hardware Source); the drilled barrel version is locked in its hole by expanding the cylinder with a screw (Family Handyman)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: screwed into the door edge and jamb (SOSS instructions), but the screws are only reachable with the door open, and the riveted hinge pin can't be removed, so the door can't be lifted off the hinges (SOSS catalogue)
- **reuse_cycles**: many times as a hinge (long-lived: SOSS says the hinges never need adjusting and cites century-old installations; *(unverified parts omitted)*
- **tools_needed**: Router with a guide bushing and a hinge router template, extra-long router bits and a drill (SOSS instructions), or by hand with a drill, Forstner bits and a chisel (Rockler video with Michael Alm); screwdriver to fit. The drilled barrel type needs a drill with an exact metric bit and a small screwdriver to expand the barrels (Family Handyman).
- **seal**: none
- **load**: light to heavy depending on size: tiny models suit jewellery boxes, large ones full-size entrance doors (SOSS catalogue). SOSS gives no load rating per hinge; the number and size of hinges come from the door's width, weight and thickness, e.g. a wood door 30 in wide, 200 lb and 1-3/4 in thick needs four #218 hinges (SOSS FAQ; catalogue p. 45). Heavy-duty steel 'Hercules' versions halve the count: a 150 lb, 80 x 36 x 1-3/4 in door needs four #218 or two #218H (catalogue p. 29). The drilled barrel type is 'not recommended for vertical or load bearing applications', i.e. use it for lids and fold-down flaps rather than hanging doors (SOSS barrel hinge page; Family Handyman).
- **adjustable**: no: SOSS invisible hinges have no adjustment (SOSS adjustment guide: 'don't have pins and never need adjusting'); fit is set entirely by how accurately the mortises are cut. Drilled barrel hinges likewise have 'no opportunity to adjust the hinges for fit' (Family Handyman). Only the spring-closer version has an adjusting screw (for spring tension) (SOSS FAQ PDF).
- **play_and_precision**: small play when well made (the door's weight rests on a stack of interlocking steel plates; SOSS adjustment guide), but the installation tolerates almost no error: the door edge passes within about 1/64 in (0.4 mm) of the frame as it opens (SOSS catalogue p. 39), so mortises must be accurately placed and the right depth. Material added to the door face beyond the hinge's 'E' dimension makes the door bind, or open only 90° (SOSS FAQ PDF).
- **access_needed**: one side only (blind): everything is fitted from the door edge and the face of the frame; no access to the back of the frame is needed, but the screws can only be reached with the door open
- **materials**: SOSS invisible hinges: die-cast metal bodies with stacked steel links (SOSS adjustment guide; Hercules versions have solid alloy-steel links and bodies (catalogue p. 29); invisible barrel hinges are solid brass with brass links (SOSS barrel hinge page). They suit solid wood, stave-core and solid-core doors and metal doors (SOSS FAQ PDF; steel door brackets are sold); hollow-core doors are not recommended (Reeb). Printed versions: PETG, ASA or carbon-fibre PC links with 3 mm steel pins (Printables, Michal Fanta). *(unverified parts omitted)*
- **maker_difficulty**: moderate to hard: buying the hinge is easy, but the stepped mortises must be cut very accurately (router with a template, or careful drilling and chiselling) and there is no adjustment to correct mistakes; printed versions are moderate if you can ream pin holes accurately

### Making it

- **processes**: 
  - off-the-shelf part: SOSS and many generic invisible hinges and barrel hinges
  - woodwork: stepped mortises cut with a router and template, or drilled and chiselled by hand (SOSS instructions; Rockler)
  - sheet metal: SOSS sells steel brackets for fitting the hinges to metal doors and small models for metal cabinets (SOSS FAQ PDF)
  - 3D print (FDM): printed Soss-style link hinges with steel pins, and printed router templates for cutting the mortises *(unverified parts omitted)*
- **print_in_place**: no: printed Soss-style hinges are printed as separate links and bodies and assembled with steel pins (Michal Fanta's '180° Stealth Concealed Hinge') or fitted together from zero-tolerance parts (BPengu's '180° Concealed Barrel Hinge') (Printables).
- **making_tips_3d_printing**: 1) Use metal pins, not printed ones: Michal Fanta's '180° Stealth Concealed Hinge' (Printables, very popular) uses 3 mm steel dowel pins (one 14.4 mm, two 18 mm, two 40-58 mm long), and the holes must be reamed to exactly 3 mm. It can be scaled down 33.3% for 2 mm pins or 66.7% for 1 mm pins, at the cost of stiffness. 2) Material and settings from the same designer: PETG, ASA or carbon-fibre-filled PC; 3-4 wall loops (walls matter more than infill around pin holes); 20% or more infill; no supports needed. His simpler 'Concealed Hinge for Folding Table Tops' recommends PETG (PLA only for light duty), 0.2 mm layers, 4+ perimeters, 30-50% infill, printing flat as oriented, and hole compensation or reaming if holes print tight (Printables). 3) Leave a small gap between the two panels so they don't rub as they rotate, and use several hinges spaced out for bigger panels (Michal Fanta, Printables). 4) BPengu's '180° Concealed Barrel Hinge' is modelled with zero tolerance, so expect to sand or deburr to fit, print in PETG with at least 20% infill, and lubricate once assembled (Printables). For your own designs, start with at least 0.3 mm clearance between moving printed parts (Prusa). 5) Print the pocket into the printed part: model a pocket to house each hinge body and fix it with screws (Fanta's simple version uses 4 mounting screws). Printed pockets avoid the hardest part of the woodworking job, the accurate stepped mortise. 6) For real SOSS hinges in wood, print a router template: Zdeněk's set on Printables covers every standard SOSS size, with depth gauges for the shallow (leaf) and deep (barrel) cuts, for a 17 mm bushing and 8 mm bit or a 16 mm bushing and 8 mm bit; he prints it in PLA because it bends less than PETG. *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'invisible hinge', 'Soss hinge' (SOSS (brand) model numbers such as #101, #203, #204, #208, #212, #216, #218, #220), 'concealed invisible hinge', 'hidden door hinge', 'secret door hinge', 'wrap-around invisible hinge' (hides the reveal line of a secret door), 'invisible closer hinge' (spring closing), 'fire-rated invisible hinge' (20-180 minutes), 'power transfer hinge' (carries wires), 'Hercules hinge' (heavy duty); for boxes: 'invisible barrel hinge' or 'barrel hinge' in metric sizes (e.g. SOSS BH085 to BH244, 8 to 24 mm diameter), 'mini barrel hinge'. Tools: 'SOSS router guide template' (e.g. 204IT, 218IT), 'router guide system', 'template guide bushing', long 3/8 in or 1/2 in router bits (SOSS catalogue; SOSS instructions; SOSS FAQ PDF). Printed alternatives use 'steel dowel pin' or 'cylindrical pin' 3 mm.
- **rules_of_thumb**: 
  - Pick by door thickness first: each hinge has a minimum material thickness, e.g. #101: 1/2 in (12.7 mm); #203 and #204: 3/4 in (19 mm); #208: 1 in (25.4 mm); #212: 1-1/8 in; #216: 1-3/8 in; #218: 1-3/4 in; #220: 2 in (SOSS 2024 catalogue pp. 33-34; SOSS FAQ PDF).
  - Use the largest hinge model that the door thickness allows, and at least one hinge for every 30 in (762 mm) of door height: a 90 in door needs three, a 91 in door four; heavier or wider doors need more per the sizing chart (SOSS catalogue p. 45).
  - There is no load rating per hinge: size from width, weight and thickness, e.g. a wood door 30 in wide, 200 lb, 1-3/4 in thick takes four #218 (SOSS FAQ PDF; catalogue p. 45).
  - Hinge spacing: put the 'centre' hinge halfway between the middle of the door and the top hinge, and with more than four hinges put more in the upper half, because the top hinge carries extra leverage (SOSS router guide instructions).
  - Mortise depths come from the maker's table, e.g. #204: 3/8 in starter hole 27/32 in deep, shallow mortise 1/4 in, deep mortise 25/32 in; #218: shallow 13/32 in, deep 1-21/32 in (SOSS router guide instructions, tables A-C). With a template, 'the only critical dimension is the depth of the shallow mortise' (SOSS catalogue p. 42).
  - The mortise is not centred in the door's thickness: its thin side goes to the inside face of the door (SOSS router guide instructions).
  - Don't add facing material (laminate, mirror, trim) beyond the hinge's 'E' dimension, or the door will not open, or only to 90° (SOSS FAQ PDF; catalogue p. 39).
  - Don't mix SOSS hinges with other hinge types, or the spring closer with non-SOSS hinges, on one door, because their swing radius differs (SOSS FAQ PDF).
  - Drilled barrel hinges: drill an exact metric hole to match the barrel, e.g. 14 mm barrel for a 3/4 in door, and use them for lids and flaps, not load-bearing or vertically hung doors (SOSS barrel hinge page; Family Handyman).
  - Practise on scrap of the same wood before routing the real door (SOSS router guide instructions).

### When to use it

- **everyday_examples**: 
  - Hidden 'secret' doors behind bookcases or wall panels (SOSS catalogue)
  - Jewellery boxes and small wooden boxes with lids that show no hinge (SOSS catalogue; Family Handyman)
  - Flush floor and wall access panels, and fold-down tray tables on trains (SOSS catalogue)
  - Flush interior doors in modern or high-end buildings, e.g. Frank Lloyd Wright's Fallingwater (SOSS catalogue)
- **when_to_use**: Use it when no hinge may show from either side: flush 'invisible' doors, secret doors, flush access panels, fine boxes and lids, fold-out table leaves and desks, and cabinet doors in solid wood. It opens a full 180° so a lid or leaf can fold right back (SOSS FAQ PDF), it can't be tampered with or unpinned from outside (SOSS catalogue), and it has no external pinch point on the hinge side (Hardware Source). Printed versions suit printed boxes and enclosure doors where a visible knuckle would spoil the look.
- **when_not_to_use**: Avoid it on thin doors and lids (below the minimum thickness, e.g. under 1/2 in for the smallest; SOSS catalogue), on hollow-core doors (Reeb), and where you can't cut accurate mortises or may need to adjust the door later (no adjustment: use clip-on cup hinges, which have three-way adjustment, or ordinary butt hinges which can be shimmed). For heavy doors, don't use the small drilled barrel hinges, which are not for load-bearing or vertical use (SOSS; Family Handyman). Where a thick facing or mirror is added to the door front, check the 'E' dimension or choose a wrap-around or special model (SOSS FAQ PDF). For quick, cheap, removable doors, use lift-off or cup hinges instead.
- **environment_limits**: Fire-rated versions are rated 20 to 180 minutes for doors 1-3/8 in to 2 in thick (SOSS FAQ PDF). Wood swelling and shrinking with humidity can make a tightly fitted door bind because the gap at the hinge side is tiny (about 1/64 in near closing; Printed hinges: PLA creeps and softens when warm; use PETG or ASA (Michal Fanta recommends PETG, ASA or PCCF). *(unverified parts omitted)*
- **safety_notes**: No pinch point on the hinge side, because the pivot stays inside the hinge (SOSS catalogue), but the leading edge of the door still pinches like any door. Large invisible hinges on heavy doors: routing deep mortises needs eye protection and SOSS recommends 1/2 in shank router bits unless using its specified bits (SOSS router guide instructions). *(unverified parts omitted)*
- **common_failures**: Door binds or won't close because a mortise is too deep, too shallow or out of position (the hinge body must sit flush: 'If the hinge body extends above the jamb ... verify that the mortises have been routed to the proper depths'; SOSS router guide instructions). Door won't open fully after a laminate, mirror or trim is added to its face (exceeds the 'E' dimension; SOSS FAQ PDF). Too few or too small hinges for the door, so they wear and the door drops; follow the sizing chart and use the largest model the door allows (SOSS catalogue). Screws pull out of hollow-core doors (Reeb: not recommended). Drilled barrel hinges fail when used as load-bearing door hinges, or bind when holes are drilled to the wrong depth, since nothing can be adjusted afterwards (Family Handyman). Printed hinges: loose pins or wobbly links from oversize holes (ream to size), cracking at pin holes (use 3-4 walls), stiffness from zero-tolerance parts (sand and lubricate) (Printables designers).
- **related**: 
  - Clip-on concealed hinge (cup hinge): hidden behind the door instead of in its edge; adjustable in three directions and removable without tools, but usually opens 105-120° and needs a 35 mm pocket in the back face
  - Knuckle hinge (butt hinge): the ordinary visible hinge; easy to fit and shim, but the knuckle shows and it can be unpinned
  - Print-in-place hinge: printed ready-assembled; simpler but visible
  - Living hinge: a thin bendy strip; invisible-looking on boxes but only in plastic and with limited life
  - Geared hinge (continuous gear hinge): a heavy-duty full-length hinge, visible along the edge
  - Virtual-pivot linkage (remote centre of motion): the general idea of a door turning about a pivot that moves or lies outside the hardware
  - Concealed four-bar door hinges (German 'verdecktes Viergelenkscharnier'): another hidden hinge for flush doors, built as a four-bar linkage (German Wikipedia 'Scharnier')
  - Self-closing hinges: add a spring; the SOSS Invisible Closer is the spring version of this type

### Pictures, videos and models

- **links**: 
  - [Scharnier 11.gif: 'Funktionsprinzip eines Kreuzscharniers' (Manfredgoellner, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Scharnier_11.gif): Animation of how a cross hinge (Soss-type) works: two crossing arms with sliding pins fold into the door and frame *(licence: CC BY-SA 4.0)*
  - [SOSS Door Hardware 2024 catalogue (PDF hosted by a distributor)](https://static.charlesmcmurray.com/publications/vendor/PDF/2024%20SOSS%20Catalog.pdf): Photos of invisible hinges open and closed, dimension drawings, sizing charts, installed examples in secret doors and access panels, and door path and clearance diagrams *(licence: link only)*
  - [Instructions for Prepping an Opening for SOSS Invisible Hinges (SOSS)](https://www.soss.com/wp-content/uploads/2015/01/Router-Guide-Installation-Instructions-2015.pdf): Figures of the router guide template on door and jamb, hinge spacing on the door, and tables of drill sizes and mortise depths *(licence: link only)*
  - [Installing INVISIBLE HINGES with Hand Tools | SOSS (YouTube, Michael Alm (ALM FAB))](https://www.youtube.com/watch?v=kua6rANnTYo): Fitting SOSS hinges with a drill, Forstner bits and chisel (title confirmed via YouTube oEmbed; steps summarised on Rockler's page for the same video) *(licence: link only (standard YouTube licence))* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [180° Stealth Concealed Hinge (Michal Fanta, Printables) (page appeared in search results; details read through the Printables public API)](https://www.printables.com/model/1533729-180deg-stealth-concealed-hinge): A printed Soss-style link hinge that hides inside the material and opens 180°; four printed arms and two bodies, assembled with 3 mm steel pins; support-free *(licence: CC BY-NC)*
  - [Simple Concealed Hinge for Folding Table Tops / Panels (Low-Profile) (Michal Fanta, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1558489-simple-concealed-hinge-for-folding-table-tops-pane): A simpler printed concealed hinge that sits in a pocket for folding table leaves, desks and lids; two 3 mm x 30 mm pins and four screws. Read through the Printables public API. *(licence: CC BY-NC)*
  - [180° Concealed Barrel Hinge (BPengu, Printables) (page appeared in search results; details read through the Printables public API)](https://www.printables.com/model/198679-180deg-concealed-barrel-hinge): Printed hidden barrel hinges, invisible from either side when closed, 180° range, scalable; zero-tolerance parts that need sanding and lubrication *(licence: CC BY)*
  - [Stronger_180° Stealth Concealed Hinge (Андрей Никитин, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1556151-stronger_180deg-stealth-concealed-hinge): A remix with doubled working parts and built-in support, assembled with 3 mm wire trimmed to length. Read through the Printables public API. *(licence: CC BY-NC)*
  - [SOSS Hidden Hinge Mortise Router Template – All sizes! (Zdeněk, Printables) (page appeared in search results; details read through the Printables public API)](https://www.printables.com/model/1341292-soss-hidden-hinge-mortise-router-template-all-size): Printed router jigs with depth gauges for every standard SOSS hinge size, for 17 mm or 16 mm guide bushings and an 8 mm bit *(licence: CC BY)*
- **diagram_idea**: Three top-view frames of a door edge meeting a frame: closed (two hinge bodies face to face in their pockets, links folded flat and hidden), half open (the X of links swinging out, guide pins sliding in their slots), and fully open at 180°; with a side inset of the stepped mortise showing the shallow cut for the face plate and the deep cut for the body.
- **sources**: 
  - https://www.soss.com/product/barrel-hinge/
  - https://www.soss.com/invisible-hinge-product-overview/
  - https://www.soss.com/the-joseph-soss-story/
  - https://static.charlesmcmurray.com/publications/vendor/PDF/2024%20SOSS%20Catalog.pdf
  - https://www.soss.com/wp-content/uploads/2015/01/Router-Guide-Installation-Instructions-2015.pdf
  - https://www.soss.com/wp-content/uploads/2018/05/SOSS_Invisible_Hinges_FAQ.pdf
  - https://www.soss.com/faqs/
  - https://www.soss.com/guide-how-to-adjust-door-hinges/
  - https://learn.reeb.com/knowledge-base/soss-hinges/
  - https://www.hardwaresource.com/a/blog/post/all-about-soss-invisible-hinges
  - https://www.rockler.com/learn/video-installing-soss-hinges
  - https://www.familyhandyman.com/article/everything-to-know-about-barrel-hinges/
  - https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4875252
  - https://de.wikipedia.org/wiki/Scharnier
  - https://commons.wikimedia.org/wiki/File:Scharnier_11.gif
  - https://commons.wikimedia.org/wiki/File:Scharnier_18.gif
  - https://www.youtube.com/watch?v=kua6rANnTYo
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, environment_limits, links, making_tips_3d_printing, materials, processes, reuse_cycles, safety_notes

## 183 Virtual-pivot linkage (remote centre of motion)

*hinges & pivots.* A linkage that makes a part rotate about a point in empty space where there is no actual pin, as in some robot wrists and folding mechanisms

### What it is

- **plain_name**: An arrangement of arms and pivots that makes a part swing around a point where there is nothing at all, as if an invisible hinge pin floated in the air beside it
- **term**: Virtual-pivot linkage; remote centre of motion (RCM) mechanism when the point stays fixed
- **aliases**: 
  - remote center of motion (US spelling); RCM mechanism
  - virtual pivot / virtual pivot point / virtual centre of rotation
  - instant centre (instantaneous centre of rotation, ICR) of a linkage; the path it moves along is the centrode (Wikipedia 'Instant centre of rotation')
  - imaginary axis (German 'gedachte Achse', for multi-joint furniture and fridge hinges)
  - polycentric joint / four-bar knee (prosthetic and orthotic knees)
  - double-parallelogram RCM (surgical robots)
  - circular-arc (curved-rail) guide / goniometer stage / goniometric stage (rotates about a point above the stage)
  - remote centre compliance, RCC (a springy version used in robot wrists for peg-in-hole assembly)
  - crossed-flexure or cross-axis flexural pivot (a bendy version whose pivot is where the blades cross) *(unverified parts omitted)*
- **family**: hinges & pivots
- **other_families**: motion conversion, compliant mechanisms & flexures, locating & alignment
- **one_liner**: A set of links, a curved track or bending strips arranged so that a part rotates about a point out in empty space, such as a surgeon's incision, the tip of a peg, a person's knee or the corner of a folding door, where no real pin could be placed.
- **complexity**: A small assembly that acts as one unit. Linkage versions: a base, two or more links, pins or bearings, and the moving part (a four-bar has four links including the base; a double-parallelogram RCM has two linked parallelograms, i.e. about six to eight links). Track version: a curved rail and a carriage (goniometer stage). Springy versions: crossed flexure blades, or angled elastomer-and-metal shear pads between two plates (RCC device) (Zhou et al. 2018; Taylor et al. US 5,397,323; PFA RCC manual).
- **how_it_works**: In any four-bar linkage the moving part (the coupler) is, at each instant, turning about the point where the lines drawn through the two side links cross (Wikipedia 'Instant centre of rotation'). Angle the side links so those lines meet away from the parts, and the part swings about that empty point; as the linkage moves, the point drifts along a curve, which is fine for knees, bike suspension and cabinet or fridge hinges whose door edges swing about 'imaginary axes' (Wikipedia 'Instant centre of rotation'; German Wikipedia 'Scharnier'; BikeRadar). When the point must stay put over the whole movement, as for a surgical tool pivoting at the incision, designers use two linked parallelograms, a curved rail whose centre is the pivot, or a spherical linkage whose axes all pass through one point (Zhou et al. 2018; Taylor et al. US 5,397,323). Springy versions do the same by bending: crossed flexure blades pivot about their crossing point, which shifts slightly as they bend (C-Flex design guide), and a remote centre compliance (RCC) device uses angled rubber-and-metal pads so that a gripped peg tilts and slides about a point at its tip and slips into a hole instead of jamming (PFA RCC manual; Wikipedia 'Remote center compliance').

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): a part rotates about a point where no pin can go
  - line parts up exactly: goniometer stages tilt a sample about a fixed point, and RCC wrists let a peg self-align into a hole (linearmotiontips; PFA RCC manual)
  - change the kind of motion: with a moving pivot, the part swings and shifts at once, e.g. a cabinet door that moves outward as it opens, or a bike axle path (German Wikipedia 'Scharnier'; BikeRadar)
- **motion**: rotate about a remote point, usually through a limited arc: goniometer stages from a few arc-seconds up to about 90° (linearmotiontips); linkages are limited by links colliding at extreme angles (Zhou et al. 2018). Surgical RCM mechanisms give two rotations (pitch and yaw) about the same point, often plus an in-out slide, i.e. multiple (Zhou et al. 2018).
- **degrees_of_freedom**: Usually 1 for a single planar virtual-pivot linkage, crossed flexure or goniometer; 2 rotations about one point for surgical RCM mechanisms (stacked goniometers do the same; linearmotiontips), with the instrument having 4 in total (pitch, yaw, roll and in-out; Zhou et al. 2018); an RCC device floats a little in several directions, held by springs (PFA RCC manual)
- **special_behaviour**: 
  - self-aligning or self-centring: an RCC places the centre of compliance at the peg's tip so contact forces steer the peg into the hole instead of jamming it (Wikipedia 'Remote center compliance'; PFA RCC manual)
  - motion conversion: in moving-pivot designs the part rotates and translates together along a designed path (e.g. four-bar knees place the instant centre where it keeps the knee stable; Phoengsongkhro et al. 2023)
  - none: a pure double-parallelogram or arc-guide RCM just rotates about its fixed point
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion)
  - spring force (a spring or springy part presses it in place): only the compliant versions (flexures, RCC shear pads) spring back to their rest position
- **input_output**: rotation of an input link, or travel of a carriage along a curved rail -> rotation of the output about a remote point. Axes are parallel for planar linkages and all pass through one point for spherical linkages (Zhou et al. 2018). *(unverified parts omitted)*
- **power**: passive (no power needed) as a mechanism; robots drive it with motors. A mechanical RCM keeps the pivot constraint even if power or electronics fail, which is why surgical robots prefer it over a software 'virtual RCM' (Zhou et al. 2018).
- **removability**: removable: linkages are pinned or bolted together and can be taken apart; RCC devices and goniometer stages bolt on as units
- **reuse_cycles**: effectively unlimited as a moving joint if the pins or bearings don't wear; RCC elastomer devices are quoted at 3 to 6 million operating cycles with no lubrication (PFA RCC manual)
- **tools_needed**: hex keys or screwdrivers for bolted pivots; a reamer or drill to size pin holes in printed links; none to operate
- **seal**: none
- **load**: light to medium: the long reach to the remote point turns small forces there into large twisting loads on the pins. Parallelogram RCMs are rigid but bulky; circular-arc and spherical ones are compact but less rigid and mainly carry light instruments (Zhou et al. 2018). An RCC with soft CR35 pads carries about 25 lb (11 kg) hanging vertically and only about 3 lb (1.4 kg) sideways, 60 lb and 8 lb with stiffer CR55 pads (PFA RCC manual).
- **adjustable**: Depends on design: adjusting link lengths moves the remote point and working radius (Taylor et al. US 5,397,323 uses links adjustable in length); in four-bars, changing pivot positions moves the instant centre and its path; RCC devices are chosen or ordered so the centre of compliance lands at the part's tip (PFA RCC manual).
- **play_and_precision**: noticeable unless well made: any play in the pins is magnified at the distant pivot point, and link-length errors make the point wander. A research RCM prototype kept its pivot within 2 mm, with the remaining error mainly from backlash in the hinge points due to machining and assembly errors (Zhou et al. 2018). Moving-pivot four-bars drift by design (Wikipedia 'Instant centre of rotation'), and crossed-flexure pivots shift more the further they turn, with no shift at their centre position (C-Flex design guide).
- **access_needed**: not applicable
- **materials**: 3D-printed PLA or PETG links with metal screws, nylon-insert lock nuts and small ball bearings for maker builds (e.g. M3 screws and 693ZZ bearings in Digirig's virtual-pivot Morse key); spring steel or printed PETG for flexure versions; neoprene, natural rubber or silicone laminated with metal for RCC shear pads (PFA RCC manual). *(unverified parts omitted)*
- **maker_difficulty**: moderate: a four-bar whose pivot is in empty space is easy to print and bolt together, but a pivot point that truly stays fixed needs exact, equal link lengths and low-play bearings, so plan it in a linkage simulator first

### Making it

- **processes**: 
  - 3D print (FDM): links, flexures and demonstrators, with metal pins, bolts or small bearings at the joints
  - off-the-shelf part: goniometer stages, RCC devices and cup hinges already contain these mechanisms *(unverified parts omitted)*
- **print_in_place**: partly: compliant versions and some linkage hinges print in place, e.g. SigmaT4's print-in-place concealed linkage hinge, and BYU's cross-axis flexure pivot is two printed parts clipped together (Printables); most pinned linkages are printed as separate links and joined with bolts, pins or bearings.
- **making_tips_3d_printing**: 1) Design it first in a free linkage simulator: PMKS+ runs in the browser and is free and open source; Linkage (rectorsquid) is free for Windows and can draw the path of any joint during simulation. Draw lines through the two side links: where they cross is the instant pivot (Wikipedia 'Instant centre of rotation'), so you can see how far it drifts over the stroke. 2) Precision is everything, because play at the pins is multiplied at the distant pivot (Zhou et al. 2018 blamed backlash from machining and assembly errors for most of their error). Use metal pins, shoulder bolts or small ball bearings rather than printed pins: Digirig's printed 'Virtual Pivot Point Straight Morse Key' uses M3 socket screws, nylon-insert lock nuts, thin washers and 693ZZ (3 x 8 x 4 mm) bearings at the link pivots (Printables). 5) Check for collisions at the extreme angles: parallelogram bars close up and overlap near their limits, so they must be spaced apart, which makes the mechanism bulky (Zhou et al. 2018). 6) For a springy version, print crossed flexure blades in PETG (BYU's cross-axis flexure pivot on Printables; a double-parallelogram flexure demo recommends PETG with at least two continuous perimeters so the hinges don't crack), and keep the rotation small, since the pivot shifts more as it turns (C-Flex design guide). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'goniometer stage' or 'goniometric stage' (tilts about a point above the stage; stack two for two axes), 'tilt stage', 'curved rail' or 'arc guide', 'remote center compliance' or 'RCC compliance device' (e.g. PFA Accommodator (brand)), 'compliance unit', 'cross-axis flexural pivot' or 'flexural pivot bearing' (e.g. C-Flex (brand)), 'polycentric knee joint' (prosthetics and knee braces). For DIY linkages: 'shoulder bolt', '693ZZ bearing', 'flanged ball bearing', 'nylon-insert lock nut', 'dowel pin', 'rod end'.
- **rules_of_thumb**: 
  - A four-bar's moving part turns, at each instant, about the point where the lines through its two side links cross; as the linkage moves this point traces a curve (the centrode) (Wikipedia 'Instant centre of rotation'). In bike suspension this 'virtual pivot' moves through the travel (BikeRadar).
  - For a pivot that stays fixed, use a double parallelogram, a circular arc or a spherical linkage. Parallelograms: large range, simple, rigid, but bulky, and the RCM position depends on the relative positions of the bars. Arcs and spherical linkages: compact but need high machining and assembly precision and are less rigid (Zhou et al. 2018).
  - Expect some wander: a research RCM prototype held its pivot within 2 mm, limited mainly by backlash from machining and assembly errors (Zhou et al. 2018).
  - Crossed-flexure pivots: the pivot shift grows with rotation angle and with the size of the pivot, and is zero at the centre position (C-Flex design guide).
  - RCC for insertion: put the centre of compliance at the leading edge of the part being inserted, where contact first occurs, and make the chamfer bigger than the expected sideways misalignment (PFA RCC manual).
  - Goniometers: stack two stages designed to share the same centre height to rotate about one point in two axes (linearmotiontips).
  - Prosthetic four-bar knees are designed to place the instant centre in a 'stability zone', which makes them more stable than single-axis knees (Phoengsongkhro et al., Sci. Rep. 2023).
  - Mechanical RCM keeps patients safe if power or control fails, unlike a software-generated 'virtual RCM' (Zhou et al. 2018).

### When to use it

- **everyday_examples**: 
  - Kitchen cabinet cup hinges and built-in fridge door hinges, whose doors swing about imaginary axes so they clear their neighbours (German Wikipedia 'Scharnier')
  - Full-suspension mountain bikes with linkage rear suspension (virtual pivot / instant centre) (BikeRadar)
  - Four-bar (polycentric) prosthetic knees (Phoengsongkhro et al. 2023)
  - Surgical robot arms, such as the da Vinci system, that pivot instruments about the incision (Zhou et al. 2018)
- **when_to_use**: Use a virtual-pivot linkage when the natural turning point is somewhere you can't put a pin: inside a person's joint (a knee brace, or a Morse key knob that follows the wrist), at an incision or opening that a tool passes through, at the tip of a peg being inserted (RCC), at a sample or lens that must tilt without moving sideways (goniometer), or at the corner of a door or panel that must fold without hitting its neighbour (cabinet and fridge hinges). Also use it when a hinge must be hidden behind a panel, or when you want a part to follow a special path (rotate and shift at once).
- **when_not_to_use**: If a real pin can go at the pivot, use a plain pivot or knuckle hinge: it is simpler, stiffer and more precise. For large angles (beyond roughly 90-120°) linkages run into their limits and links collide (Zhou et al. 2018): use a real axle, a ring bearing or a gimbal. For heavy loads at long reach, the long levers make it flexible and wear the pins; use a curved rail with rollers or a real bearing. For exact positions without play, use a flexure (small angles) or a goniometer stage. If a small drift of the pivot doesn't matter, a simple four-bar is enough; if it must not move, use a double parallelogram or arc.
- **environment_limits**: Elastomer RCC pads have temperature limits: neoprene about -29 to 82 °C, natural rubber -40 to 82 °C, silicone -54 to 177 °C; severe cutting fluids can degrade them (PFA RCC manual). Gear-based RCMs need lubrication, which conflicts with sterilisation (Zhou et al. 2018). *(unverified parts omitted)*
- **safety_notes**: Parallelogram and four-bar links close together like scissors: keep fingers out of the gaps between moving links. In robotics, a mechanical RCM stays safe if power fails, whereas a software RCM does not (Zhou et al. 2018). *(unverified parts omitted)*
- **common_failures**: Pivot point wanders because link lengths are unequal or pins have play (magnified at the remote point); fix with bearings, reamed holes and identical links (Zhou et al. 2018). Links collide at the ends of travel; space parallelogram bars apart or limit the angle (Zhou et al. 2018). Crossed flexures crack when over-rotated, and their pivot shifts at large angles; add hard stops (C-Flex design guide). RCC insertion still jams if parts have no chamfer or the misalignment is larger than the chamfer, or if the payload is over the pads' rating (PFA RCC manual). A four-bar designed without checking its centrode swings about the wrong point for part of its travel; simulate first (Wikipedia 'Instant centre of rotation').
- **related**: 
  - Plain pivot and rolling bearing: a real pin at the pivot; use it whenever you can reach the pivot point
  - Four-bar linkage (incl. parallelogram linkage): the basic building block; its coupler turns about a moving virtual pivot
  - Flexure hinge (cross-axis pivot): a bending joint whose pivot is the point where its blades cross, with no pin
  - Rolling-contact joint (CORE, Jacob's-ladder hinge): two curved surfaces rolling on each other, so the pivot moves along the contact point
  - Gimbal: two real crossed axes that meet at one point; an RCM gives similar motion with nothing at the centre
  - Ball-and-socket joint: a real sphere at the centre of rotation
  - Clip-on concealed hinge (cup hinge): an everyday four-bar with a moving virtual pivot
  - Invisible barrel hinge (Soss-type): a hidden hinge whose pivot moves inside the hinge during the swing
  - Scissor linkage and straight-line linkages: other multi-bar linkages that shape a path rather than a rotation point

### Pictures, videos and models

- **links**: 
  - [Scharnier 02.gif: 'Animation eines Mehrgelenkscharniers für einen Kühlschrank' (Manfredgoellner, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Scharnier_02.gif): Animation of a built-in fridge's multi-joint hinge; the door and panel edges swing about imaginary axes where there is no pin *(licence: CC BY-SA 4.0)*
  - [Mechanism analysis.png (VanBuren, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Mechanism_analysis.png): Diagram of a four-bar linkage with velocity arrows and the instant centre P where the lines through the two side links cross *(licence: CC BY-SA 3.0 or GFDL 1.2+)*
  - [Remote Center of Compliance.svg (Arne Nordmann, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Remote_Center_of_Compliance.svg): Diagram of a remote centre compliance device yielding to tilt and sideways offset during a peg-in-hole insertion *(licence: CC BY-SA 3.0/2.5/2.0/1.0 or GFDL 1.2+)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Virtual Pivot Point Straight Morse Key (Digirig, design by K0TX, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1853041-virtual-pivot-point-straight-morse-key): A printed Morse key whose knob follows the natural path of the wrist using a virtual-pivot linkage; M3 screws, nylon lock nuts and 693ZZ bearings; build video https://www.youtube.com/watch?v=miGSeoow_kU. Read through the Printables public API. *(licence: CC BY-NC-SA 4.0)*
  - [Cross-Axis Flexure Pivot (BYU CMR, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/576067-cross-axis-flexure-pivot): Two printed parts clipped together to make crossed flexures that rotate about their crossing point without a pin. Read through the Printables public API. *(licence: CC BY-NC)*
  - [Print in place concealed hinge mechanism + fidget toy (SigmaT4, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1176854-print-in-place-concealed-hinge-mechanism-fidget-to): A print-in-place concealed linkage hinge whose door turns about a moving virtual pivot; a working version and a fidget toy. Read through the Printables public API. *(licence: CC BY-SA)*
  - [PMKS+ (planar linkage designer and simulator)](https://pmksplus.com/): Free, open-source, browser-based tool for designing and simulating planar linkages, with kinematic and force analysis *(licence: free and open source (licence not stated on the page))*
  - [Linkage – Mechanism Designer and Simulator (rectorsquid)](https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/): Free Windows program for prototyping linkages; can draw the path of any joint during simulation *(licence: free (licence type not stated))*
- **diagram_idea**: Side view of a crossed four-bar: a fixed base, two angled links and a moving plate, with the two links extended as dashed lines that meet at a star in empty space above the plate; ghosted copies of the plate at several angles all turning about the star (and the star drifting slightly); beside it, a double parallelogram arm whose tool line always passes through a fixed star at a 'doorway' in a wall.
- **sources**: 
  - https://en.wikipedia.org/wiki/Instant_centre_of_rotation
  - https://en.wikipedia.org/wiki/Remote_center_compliance
  - https://en.wikipedia.org/wiki/Positioning_goniometer
  - https://de.wikipedia.org/wiki/Scharnier
  - https://commons.wikimedia.org/wiki/File:Scharnier_02.gif
  - https://commons.wikimedia.org/wiki/File:Mechanism_analysis.png
  - https://commons.wikimedia.org/wiki/File:Remote_Center_of_Compliance.svg
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC6245885/
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6245885/fullTextXML
  - https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10739707/fullTextXML
  - https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/5397323
  - https://www.pfa-inc.com/user-guides/remote-center-compliance-application-manual.pdf
  - https://c-flex.com/wp-content/uploads/2024/10/DESIGN-GUIDE.pdf
  - https://www.linearmotiontips.com/what-are-goniometer-stages-and-where-are-they-used/
  - https://www.bikeradar.com/advice/buyers-guides/the-ultimate-guide-to-mountain-bike-rear-suspension-systems
  - https://www.youtube.com/watch?v=yBJPLY4xukU
  - https://www.youtube.com/watch?v=miGSeoow_kU
  - https://pmksplus.com/
  - https://blog.rectorsquid.com/linkage-mechanism-designer-and-simulator/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, environment_limits, input_output, links, making_tips_3d_printing, materials, processes, safety_notes

## 184 Self-closing hinges (spring hinge, rising butt hinge)

*hinges & pivots.* Hinges that swing a door or lid shut by themselves, using a spring or a sloping knuckle that lifts the door as it opens

### What it is

- **plain_name**: A hinge that swings a door, gate or lid shut by itself after you let go, either with a spring hidden in the hinge or with a sloping hinge knuckle that lifts the door as it opens so the door's own weight brings it back down
- **term**: Self-closing hinge: spring hinge (spring-loaded hinge) and rising butt hinge (cam-lift hinge)
- **aliases**: 
  - self-closing hinge
  - spring hinge / spring-loaded hinge / spring-loaded door hinge
  - single-action spring hinge (the door swings one way only)
  - double-action spring hinge / double-acting hinge / saloon hinge / cafe door hinge (swings both ways and springs back to the middle; IQS Directory)
  - Bommer hinge (brand; Dutch 'Bommerveerscharnier', a double-acting spring hinge with two axes; Dutch Wikipedia 'Scharnier')
  - closer hinge / door closer hinge / hydraulic self-closing hinge (a spring hinge with a built-in speed brake or oil damper, e.g. Waterson (brand))
  - rising butt hinge / rising butt / rising hinge / rise-and-fall hinge (UK names)
  - cam-lift hinge (US name)
  - spring-less self-closing hinge / gravity-closing hinge (descriptive wording, e.g. the Wikimedia Commons photo title)
  - hinge cam riser / door-closing cam (on refrigerator doors)
  - self-closing gate hinge / pool gate hinge
- **family**: hinges & pivots
- **other_families**: springs & energy storage, brakes, dampers & speed control
- **one_liner**: A hinge that stores some of the effort you use to open a door, in a coiled spring or by lifting the door up a sloping knuckle, and gives it back to swing the door shut when you let go.
- **complexity**: A small assembly that acts as one unit. Spring hinge: two leaves whose knuckles form a barrel, a hinge pin, a coiled spring inside the barrel with one end held by one leaf and the other by an adjusting collar at the top, and a small tension pin that locks the collar in one of several holes (Doorware adjustment guide; Wikipedia 'Door closer'). Closer hinges add a speed brake or oil (hydraulic) damper at one end of the barrel and sometimes a hold-open catch (Waterson). Rising butt: just two leaves whose knuckles meet on a sloping spiral face, and a pin (Cooke Brothers; DoorwaysPlus). Maker versions: printed knuckles, a steel pin or bolt and a bought metal torsion spring, or a printed springy arm.
- **how_it_works**: Spring hinge: opening the door winds up a coiled spring in the hinge barrel, and the spring pushes back with a turning force that grows the further it is twisted (a torsion spring's torque is proportional to its twist; Wikipedia 'Torsion spring'), so when you let go it swings the door shut. The spring is wound a few extra notches while the door is shut (preload) so there is still enough push at the end to close and latch it (Doorware; Family Handyman). Rising butt: the two halves of the knuckle meet on a spiral ramp, so as the door swings open it climbs the ramp and rises a few millimetres; when you let go, the door's own weight slides it back down the ramp, which turns it shut (Cooke Brothers; DoorwaysPlus). Closer hinges add a friction brake or oil damper so the door closes at a controlled speed instead of slamming (Waterson; Wikipedia 'Hinge').

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): it is a hinge the door or lid swings on
  - store energy: the spring (or the door lifted up the ramp) stores the opening effort and uses it to close the door
  - slow it, stop it or keep its speed steady: closer hinges have a friction brake or oil damper that sets the closing and latching speed (Waterson)
- **motion**: rotate: single-action spring hinges swing one way (about 90 to 180 degrees depending on the door), double-action hinges up to 90 degrees each way, 180 degrees in all (IQS Directory). Rising butts: rotate+slide, because the door rises a few millimetres as it swings (Cooke Brothers)
- **degrees_of_freedom**: 1: the door can only swing about the pin. In a rising butt the lift is tied to the swing, like a screw thread, so it is still one movement, not two
- **special_behaviour**: 
  - self-aligning or self-centring: the hinge always returns the door to one rest position; double-action spring hinges bring the door back to the middle from either side (IQS Directory; Dutch Wikipedia 'Scharnier')
  - motion conversion (e.g. rotary to linear): a rising butt turns part of the swing into a small upward lift, which clears carpets and stores the energy that closes the door (Cooke Brothers)
  - fail-safe or breakaway: only in the sense that the door returns to shut when released, which is why self-closing gates are required round pools (Wikipedia 'Pool fence'); note that a rising butt is not accepted as a fire-door closer (Express Doors Direct; Direct Doors; DoorwaysPlus)
  - indexing (clicks into set positions): only hold-open versions, e.g. Waterson's SB type holds the door open at 85 degrees (Waterson), and fridge-door hinge cams that hold the door partly open and pull it shut once nearly closed (Printables 'Fridge door hinge cam riser')
- **holding_principle**: 
  - spring force (a spring or springy part presses it in place): the spring keeps pushing the door shut and holds it against its stop
  - shape (form-fit): like any knuckle hinge, the pin through the interlocking knuckles holds the two leaves together
  - not a holding joint (it moves or passes on motion): a rising butt keeps the door shut only by the door's own weight (gravity), which is not a positive hold
- **input_output**: not applicable (it does not pass motion on to anything else); inside a rising butt the swing is turned into a lift of a few millimetres (Cooke Brothers)
- **power**: passive (no power needed): the person opening the door supplies the energy
- **removability**: removable: screwed on like an ordinary hinge, usually set into shallow recesses (mortises) in the door edge and frame
- **reuse_cycles**: many times: can be unscrewed and refitted; springs do wear out, but that can take many years (Family Handyman)
- **tools_needed**: screwdriver, and a chisel to cut the hinge recesses; for spring hinges a tension lever tool or hex (Allen) key to wind the spring and pliers for the tension pin, where a 2 to 3 in (50 to 75 mm) finishing nail can stand in for the lever tool (Doorware; Family Handyman); for rising butts a plane to bevel (ease) the top edge of the door on the hinge side (Era product page; DIY Doctor forum)
- **seal**: none
- **load**: light to heavy depending on size: from small spring hinges for cabinet doors and box lids to commercial door hinges; the most durable self-closing hinges handle doors up to 440 lb (about 200 kg) (Wikipedia 'Door closer'), and Waterson's closer hinges start at 4 x 4 in. Rising butts suit lighter internal doors (Cooke Brothers); US guidance for cam-lift hinges is at least 4 x 4 in for doors up to 200 lb and 4 1/2 x 4 1/2 in for 201 to 400 lb, with a door closer for anything heavier (DoorwaysPlus). Like any hinge it is strong against the door's weight hanging on the pin (shear); its closing force is small and can be overcome by wind or a hand
- **adjustable**: Spring hinges: yes; the spring tension is changed by turning the adjusting collar at the top of the barrel with a lever tool or hex key and locking it with the pin in the next hole (Doorware; Family Handyman); closer hinges also have separate adjusters for swing speed (from 90 to 20 degrees) and latch speed (from 20 to 0 degrees) (Waterson). Rising butts: no; the closing force comes from the door's weight and the slope of the ramp
- **play_and_precision**: small, like any butt hinge; the door's closed position is set by the door stop and latch, not by the hinge. All hinges on a door must turn about one line: rising butts must be fitted exactly in line (co-axially) with all hinges sharing the load, or they bind (Era product page), and mixing rising and standard hinges on one door causes binding, uneven wear and poor latching (DoorwaysPlus)
- **access_needed**: one side only (blind): the leaves screw into the door edge and the frame, reached with the door open; spring tension is adjusted from the top of the barrel, so spring hinges must be fitted with the adjuster at the top (Doorware)
- **materials**: Steel, stainless steel, brass and bronze leaves (IQS Directory), with a coiled steel spring inside spring hinges. Stainless steel is preferred for rising (cam-lift) hinges in damp places, because plated steel can pit or flake in the cam area and start to bind (DoorwaysPlus). Maker versions: PETG, ASA or nylon printed knuckles with a steel pin and a metal torsion spring; plastic springs only for light or occasional loads (DuPont design guide, p. 36)
- **maker_difficulty**: easy to buy and fit (like any hinge, plus setting the spring tension); moderate to make: printing knuckles around a bought torsion spring works well, but a printed plastic spring that is always held wound up slowly loses force (DuPont design guide, p. *(unverified parts omitted)*

### Making it

- **processes**: 
  - off-the-shelf part: single- and double-action spring hinges, closer hinges, rising butt or cam-lift hinges, self-closing gate hinges, self-closing cabinet hinges
  - woodwork: fitting hinges to doors, gates and box lids (cutting the recesses; easing the top of the door for rising butts)
  - 3D print (FDM): printed knuckles with a metal torsion spring or a printed springy arm (flexure); printed replacement cams (Printables) *(unverified parts omitted)*
- **print_in_place**: partly: a print-in-place hinge can have printed springy arms that return it to the centre (Jack's 'Spring hinge' on Printables, public domain), but a hinge that is held wound up all the time needs a metal spring, which means printing the knuckles as separate parts and assembling them round the spring (DuPont design guide, p. 36)
- **making_tips_3d_printing**: 1) Use a metal spring for the closing force. DuPont's design guide says springs under constant load or deflection should be made of spring steel, because plastics creep and relax (p. 36), and a self-closing hinge's spring stays partly wound even when the lid is shut. PLA creeps most and PETG less (thrinter creep test); the designer of a printed-spring lens cap recommends ASA for the spring for the same reason (Printables 'Camera lens lid with 3D printed springs'). 2) Buy a small torsion spring or wind your own from spring-steel wire on a printed jig (Printables 'Metal Torsion Spring Maker', which uses 2.5 mm stainless rod; wear eye and cut-resistant hand protection). Give each spring leg a slot or hole in its own leaf, and add a stop so the spring is already slightly wound when the lid is shut (preload), so it still pushes at the closed position. 3) Use a steel pin (a bolt, nail or length of rod) through printed knuckles, with at least 0.3 mm clearance for moving parts (Prusa knowledge base). 4) Orient the knuckles so the spring's twisting load doesn't try to split the layers apart: printed layers bond at only about half of the flat-printed strength (PLA 55% and PETG 46% in CNC Kitchen's hook test). 5) Heat: PLA starts to give way at about 60 C and PETG at about 80 C (CNC Kitchen), and springs creep faster when warm, so avoid PLA near a printer enclosure or in a car. 6) A spring-less (gravity) version needs a helical ramp between the knuckles with smooth, hard, low-friction faces; one maker's printed fridge-door cam failed straight away, and the real cam profile turned out not to be a simple sine curve (Printables 'Fridge door hinge cam riser'). 7) A flexible TPU part can be the spring on a dual-material printer (Printables 'Spring clamp (Print in-place with built in hinge and spring)'), but expect it to be weak. *(unverified parts omitted)*
- **off_the_shelf_parts**: Parts for DIY versions: 'torsion spring' (chosen by leg angle, wire size and wind direction), 'music wire' or 'spring steel wire', 'shoulder bolt' or 'clevis pin' for the pivot. Brands a beginner may meet: Waterson, Bommer (brands) *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Spring hinge tension: install with the adjuster at the top, set tension with the door shut, and don't wind more than 3 holes of tension for a door that swings 180 degrees or 4 holes for a 90-degree swing (Doorware single-action spring hinge guide).
  - Adjust in small steps and test after each: too loose and the door won't close or latch, too tight and it slams (Family Handyman; Doorware).
  - Closer hinge placement (Waterson): the top and bottom hinges 5 in +/- 1/8 in (127 +/- 3 mm) from the door edges; a third hinge goes next to the top one, with pivot centres at least 10.95 in (278 mm) apart; a purely mechanical system uses three hinges.
  - Rising butts: all hinges on the door must be rising type, because mixing them with standard hinges causes binding (DoorwaysPlus); they are handed (left or right, clockwise or anticlockwise) (Cooke Brothers; Express Doors Direct).
  - Rising butts: place about 150 mm from the top and bottom of the door (Express Doors Direct); three per door is recommended to reduce warping (Era product page).
  - Rising butts: the top of the door must be bevelled (eased) on the hinge side so it clears the frame head as it rises (Era product page; Direct Doors); forum advice is a bevel from nothing to about 3 mm or more across the top on the rebate side (DIY Doctor forum, unverified by a manufacturer).
  - Cam-lift hinge sizing (DoorwaysPlus): at least 4 x 4 in for doors up to 200 lb, 4 1/2 x 4 1/2 in for 201 to 400 lb, and a door closer for heavier doors; hinge count 2 for doors up to 60 in tall, 3 for 61 to 90 in, 4 for 91 to 120 in.
  - Rising butts are not a fire-door closer: UK building regulations don't allow them on fire doors or escape routes (Express Doors Direct), and in the US they are not listed closers under NFPA 80 (DoorwaysPlus).
  - Hydraulic closer hinges can be damaged if the door is pushed beyond 120 degrees (Waterson).
  - Springs under constant load or deflection should be spring steel; plastics creep and relax (DuPont design guide, p. 36).
  - Printed moving parts: start with at least 0.3 mm clearance (Prusa knowledge base).

### When to use it

- **everyday_examples**: 
  - Screen and storm doors that swing shut by themselves (DoorwaysPlus; Wikipedia 'Door closer')
  - Swinging cafe, saloon and restaurant-kitchen doors that swing both ways and return to the middle (IQS Directory)
  - Pool-fence gates, which must close and latch by themselves (Wikipedia 'Pool fence')
  - A fridge door that pulls itself shut once nearly closed, thanks to a cam on the bottom hinge (Printables 'Fridge door hinge cam riser')
  - Toilet-cubicle doors and cottage doors on rising butts that lift clear of the carpet (Cooke Brothers)
- **when_to_use**: Use a self-closing hinge when a door, gate or lid should always end up shut without anyone remembering to close it: gates that keep pets or children in, screen doors, cupboard and cabinet doors, access flaps and printer-enclosure doors, and box lids that should snap shut. A spring hinge is the compact choice when there is no room for a separate door closer, and its force can be adjusted; pick a double-action hinge for a door that swings both ways, and a closer hinge (with a speed brake) where slamming matters. Use rising butts on light internal doors that must clear a carpet or uneven floor and should drift shut gently, without visible springs (Cooke Brothers).
- **when_not_to_use**: Avoid it where the door or lid should stay open (use a friction hinge, detent hinge or lid stay instead); for heavy or fire-rated doors, which need a rated door closer or listed hardware (rising butts are not accepted on fire doors; DoorwaysPlus, Express Doors Direct, Direct Doors); on busy doors that cycle hundreds of times a day, where cam-lift surfaces wear quickly (DoorwaysPlus); where the closing must be slow and controlled (add a damper, or use a door closer or soft-close hinge); and where small children could trap fingers in a door that closes by itself. For a printed project, don't rely on a plastic spring that is held wound up all the time; use a metal spring (DuPont).
- **environment_limits**: Outdoors or in damp places use stainless steel or other corrosion-resistant hinges; plated steel can pit in a rising hinge's cam area and start to bind (DoorwaysPlus). Hinges squeak and wear without occasional lubrication (IQS Directory). A rising butt's closing force is small and inconsistent, so draughts, wind or pressure differences can stop it closing fully (Direct Doors). Printed parts: PLA gives way at about 60 C and PETG at about 80 C (CNC Kitchen); plastic springs held under load creep and lose force over time, faster when warm (DuPont design guide, p. 36; thrinter creep test). Metal springs slowly tire (spring hinges wear out, but that can take many years; Family Handyman).
- **safety_notes**: A door that closes by itself is a pinch and slam hazard at both the hinge side and the closing edge, especially for small children's fingers; set the tension no higher than needed, or add a damper. When winding a spring hinge, the spring pushes hard on the lever tool or hex key; keep a firm grip and fit the tension pin before letting go (Doorware steps). Don't treat a self-closing hinge as fire-safety hardware unless it is listed or rated for that use (DoorwaysPlus; Direct Doors). A spring-closed lid on a printed box can snap onto fingers.
- **common_failures**: Spring too loose, so the door stops short of the latch, or too tight, so it slams (Family Handyman); fix by adjusting one notch at a time. Uneven tension between hinges, or a missing tension pin. The door still won't close after adjusting because it is badly hung in the frame (Family Handyman). Rising butts: the door jams against the frame head because the top wasn't bevelled (Era product page; Direct Doors); binding because rising and plain hinges were mixed (DoorwaysPlus); cam faces worn by heavy traffic, or dented by hitting the knuckles with a hammer, which destroys the closing action (DoorwaysPlus). Squeaking and stiffness from lack of lubrication (IQS Directory). Printed versions: plastic springs creep and lose their push, and knuckles split along layer lines; use a metal spring and a steel pin.
- **related**: 
  - Knuckle hinge (butt hinge): the plain version, which swings freely with no closing force
  - Friction hinge: holds a lid at any angle instead of closing it
  - Detent hinge (click hinge): clicks into set angles and holds there
  - Lid and flap stays: hold a lid or flap open rather than closing it
  - Dampers (rotary and linear soft-close dampers): slow a closing door; closer hinges build one in
  - Door closer (overhead arm, floor spring): a separate spring-and-oil unit that does the same job for heavier doors (Wikipedia 'Door closer')
  - Gas spring: pushes a lid open or holds it up, the opposite job
  - Clip-on concealed hinge (cup hinge): cabinet hinges often have a spring that pulls the door shut or holds it fully open (Wikipedia 'Hinge' gallery)
  - Living hinge: a bent plastic hinge also springs back a little, but can lose force over time (Protolabs)
  - Torsion spring and other springs (springs & energy storage family): the spring parts themselves
  - Spring-open hinge: the reverse, pushes a lid open (Cooke Brothers lists 'sprung open' hinges)

### Pictures, videos and models

- **links**: 
  - [Door hinge with spring less self closing mechanism (Tobias ToMar Maier, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Door_hinge_with_spring_less_self_closing_mechanism.jpg): Photo of a rising (spiral-knuckle) hinge on a door in Augsburg; description: the door closes on its own because the hinge has a spiral shape that turns under gravity *(licence: CC0 1.0 (public domain dedication))*
  - [Self closer hinge on arch-top (SevenH, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Self_closer_hinge_on_arch-top.jpg): Photo of a self-closing (closer) hinge fitted on an arch-top door, used in Wikipedia's 'Door closer' article *(licence: CC BY-SA 4.0)*
  - [Bommerscharnier (Sindala, Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Bommerscharnier.JPG): Close-up photo of a double-acting spring hinge (Bommer type), used in Dutch Wikipedia's hinge article *(licence: Public domain)*
  - [Rising Butt Door Hinge Dimensions & Drawings (Dimensions.com)](https://www.dimensions.com/element/rising-butt-door-hinge): Dimensioned drawings of a rising butt hinge open and closed, with typical sizes *(licence: link only)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Spring hinge (Jack, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/759250-spring-hinge): A print-in-place hinge with printed springs that returns to the centre position (or can be made bistable); low clearance, so scale up if needed; spray with silicone oil or PTFE. Read through the Printables public API. *(licence: Creative Commons Public Domain (as listed on Printables))*
  - [Camera lens lid with 3D printed springs (Enijat, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/873841-camera-lens-lid-with-3d-printed-springs): A spring-closed lens cap for a 54 mm lens with a printed spring; the designer recommends printing the spring in ASA because it creeps less under constant load. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Fridge door hinge cam riser (Ryan Steele, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/540830-fridge-door-hinge-cam-riser): Customisable OpenSCAD model of the pair of cams on a fridge's lower hinge pin that hold the door open at one point and pull it shut once nearly closed; the designer notes his printed version failed quickly, a useful lesson in cam wear. Read through the Printables public API. *(licence: CC BY)*
  - [Metal Torsion Spring Maker (adjective, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1004393-metal-torsion-spring-maker): A printed handle-and-jig for bending your own torsion springs from spring-steel or stainless rod, for putting a real metal spring into a printed hinge; warns to wear eye and hand protection. Read through the Printables public API. *(licence: CC BY)* *(unverified parts omitted)*
- **diagram_idea**: Two side-by-side cutaways: on the left a spring hinge barrel with a coiled spring, one end fixed to the lower knuckle and the other to a notched collar held by a pin, with an arrow showing the spring winding up as the door opens; on the right a rising butt whose two knuckles meet on a spiral ramp, showing the door leaf climbing a few millimetres as it opens and sliding back down under its own weight.
- **sources**: 
  - https://en.wikipedia.org/wiki/Hinge
  - https://en.wikipedia.org/wiki/Door_closer
  - https://en.wikipedia.org/wiki/Torsion_spring
  - https://en.wikipedia.org/wiki/Pool_fence
  - https://nl.wikipedia.org/wiki/Scharnier
  - https://www.cookebrothers.co.uk/latest-news/2025/09/30/benefits-of-rising-butt-hinges/
  - https://www.doorwaysplus.com/blog/our-blog-1/cam-lift-hinges-and-the-self-closing-door-problem-when-the-hinge-does-the-work-instead-of-the-closer-463
  - https://www.familyhandyman.com/article/how-to-adjust-a-self-closing-spring-hinge-yourself/
  - https://www.doorware.com/specials/help-center/adjusting-spring-hinges.cfm
  - https://www.iqsdirectory.com/articles/hinges/spring-hinges.html
  - https://watersonusa.com/self-closing-hinge/door-closer-mechanism
  - https://www.directdoors.com/blogs/news/are-there-any-issues-using-rising-butt-hinges
  - https://www.expressdoorsdirect.co.uk/internal-doors/rising-door-hinges-what-why-and-how
  - https://forums.diydoctor.org.uk/fitting-rising-butt-hinges-t14286.html
  - https://www.eraeverywhere.com/default/door-components/entrance-doors/door-hinges/traditional-butt-hinges/rising/rising-door-butt-hinge-right-hand/
  - https://www.dimensions.com/element/rising-butt-door-hinge
  - https://commons.wikimedia.org/wiki/Category:Door_hinges
  - https://commons.wikimedia.org/wiki/File:Door_hinge_with_spring_less_self_closing_mechanism.jpg
  - https://commons.wikimedia.org/wiki/File:Self_closer_hinge_on_arch-top.jpg
  - https://commons.wikimedia.org/wiki/File:Bommerscharnier.JPG
  - https://www.youtube.com/watch?v=MB7sd8PkYwc
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.protolabs.com/resources/design-tips/how-to-design-3d-printed-hinges/
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** links, make_it_yourself, maker_difficulty, making_tips_3d_printing, off_the_shelf_parts, processes

## 185 Lid and flap stays (folding stay, friction stay)

*hinges & pivots.* Arms that hold a lid or flap open: a folding stay locks just past straight, a sliding stay holds by adjustable friction

### What it is

- **plain_name**: An arm fitted inside a box, desk or window that props a lid or flap open so it can't fall shut: either an arm with an elbow that folds and locks when it goes straight, or a bar that slides through a clamp and holds by rubbing
- **term**: Lid stay (lid support, flap stay): folding stay and sliding (friction) stay
- **aliases**: 
  - lid stay / lid support / lid support hinge
  - flap stay / drop-front support / fall-front support / desk flap stay (holds a writing flap level)
  - folding stay / folding lid stay / knuckle stay (two arms with an elbow joint, like a folding ruler)
  - sliding stay / friction stay / friction lid stay / adjustable friction stay (a slotted bar sliding through a block with a screw)
  - telescopic friction stay (tube sliding inside a tube; historically the 'Monarch casement stay')
  - casement stay / peg stay / peg-and-bar stay (a bar with holes dropped over a peg, for windows)
  - window friction stay / friction hinge (a four-bar window hinge with an adjustable friction slider)
  - restrictor stay (limits how far a window opens)
  - soft-down stay / soft-close lid stay (with an oil or air damper)
  - lift-assist stay / piston stay / gas strut lid support (see 'Gas spring')
  - torque lid stay / free-stop lid stay (friction holds the lid at any angle)
  - locking lid stay (locks when fully open; lift the lid or press a button to release)
  - toy box lid support / toy chest lid hinge (spring-loaded, holds the lid in any position)
  - lid chain or cord (the simplest stay)
- **family**: hinges & pivots
- **other_families**: over-centre, toggle & cam clamps, clamping, magnetic & friction connections, brakes, dampers & speed control, locks, latches & catches
- **one_liner**: A folding or sliding arm between a lid (or flap, or window) and its box or frame that holds the lid open, either by locking straight just past its dead point or by squeezing a sliding bar so friction holds it at any angle.
- **complexity**: A few parts. Folding stay: two flat arms riveted together at an offset 'elbow' joint, with a swivelling mounting foot at each end (Whitechapel). Sliding stay: a bar (often slotted) with a pivoting foot at one end and a stop rivet at the other, plus a second pivoting foot that the bar slides through, with a friction screw or thumbscrew (Whitechapel; Rockler). Telescopic stay: a tube sliding in a tube, held by friction blocks (Wikipedia 'Casement stay'). Window friction stay: a track, several arms, and a plastic slider shoe with a friction adjustment screw (Era; Mila). Soft-down and lift-assist stays add a rotary damper, a spring or a gas strut (Sugatsune catalogue; Rockler).
- **how_it_works**: Folding stay: the two arms are hinged in the middle like an elbow; as the lid opens the arm straightens, and the offset joint lets it open slightly more than 180 degrees against a stop (Whitechapel). Once just past straight, the lid's weight pushes the joint harder against its stop instead of folding it (over-centre), so the lid stays up until someone pushes or pulls the joint back through straight (Whitechapel; Rockler). Sliding (friction) stay: a bar fixed to the lid slides through a pivoting block on the box; a screw squeezes the bar so friction holds the lid wherever you leave it, and loosening it slightly lets the lid sink slowly (Rockler); a stop rivet at the bar's end sets the maximum opening. Window friction stays work the same way, with a screw in the slider setting the friction (Era).

### Finder attributes

- **job**: 
  - lock, and release by hand: a folding stay locks the lid open until you nudge the joint; locking stays release when you lift the lid, press a button or slide a lever (Whitechapel; Sugatsune catalogue)
  - slow it, stop it or keep its speed steady: friction stays hold a lid at any angle and let it down gently; soft-down stays use a damper to stop slamming (Rockler; Sugatsune catalogue)
  - click into set positions: peg-and-bar casement stays hold a window at a few set openings (Wikipedia 'Casement stay')
  - store energy: lift-assist stays use a spring or gas strut to help lift the lid (Rockler)
- **motion**: multiple: the arms turn at their pivots and, in sliding stays, the bar also slides (rotate+slide). The lid itself turns on its own hinges, typically to a little more than 90 degrees for a chest lid or to level for a desk flap (Whitechapel); bent-arm window friction stays can let a window open to 180 degrees (Wikipedia 'Casement stay')
- **degrees_of_freedom**: Installed with the lid's hinges, the lid, stay and box move together with 1 degree of freedom (the lid's swing); a locked folding stay or a tightened friction stay takes that to 0. A sliding stay on its own has 2 (the bar slides and pivots); a folding stay's two arms have 1 between their feet
- **special_behaviour**: 
  - over-centre (snaps past a point and stays): a folding stay opens slightly past straight so the lid's weight holds it locked (Whitechapel; Rockler)
  - hand-release only (locks under load, releases when a person operates it): folding stays and locking lid stays hold until you push the joint, lift the lid, press a button or slide a lever (Whitechapel; Sugatsune catalogue pp. 143-145)
  - torque-limiting (slips or clicks at a set force/torque): a friction stay is a slip joint; it holds until pushed harder than its set friction, then slides smoothly (Rockler)
  - one-way (moves freely one way, locks the other): some torque lid stays have friction only in the closing direction, so the lid opens freely but stays where it is left (Sugatsune catalogue p. 136); they resist rather than lock
  - indexing (clicks into set positions): peg-and-bar window stays set a few fixed openings (Wikipedia 'Casement stay')
- **holding_principle**: 
  - shape (form-fit): a locked folding stay holds because its joint sits against a stop just past straight; peg stays hold by a peg in a hole
  - friction or clamping (force-fit): sliding, telescopic and window friction stays hold by a screw or friction blocks squeezing the sliding part (Rockler; Wikipedia 'Casement stay'; Era)
  - spring force (a spring or springy part presses it in place): spring-loaded toy-box lid supports and lift-assist stays (CPSC; Rockler)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: removable: screwed to the underside of the lid and the inside of the box or frame (Whitechapel; HingeOutlet)
- **reuse_cycles**: many times: can be unscrewed and refitted; commercial damper stays are recognised by LGA for 30,000 to 40,000 cycles (Sugatsune catalogue pp. 106, 112 and 117)
- **tools_needed**: screwdriver and drill or bradawl to fit; a combination square to line the stay up square to the back of the box (HingeOutlet); a screwdriver to adjust friction on sliding and window friction stays (Rockler; Era)
- **seal**: none (telescopic tube stays do keep dirt and water out of the sliding parts; Wikipedia 'Casement stay')
- **load**: light to medium. Chosen by the lid's turning load (moment): lid depth x lid weight / 2, in inch-pounds (Rockler), e.g. a 25 in deep, 14 lb lid needs about 175 in-lb (HingeOutlet); Sugatsune writes the same formula as door height x 1/2 x door weight, and one friction lid stay holds 0 to 71 kgf-cm (0 to 61.7 lbf-in) per piece (Sugatsune catalogue pp. 111 and 136). The arm is strong along its length (propping the lid) but weak sideways and in twist, and folding stays can be released by a bump; heavy lids and overhead doors need gas (piston) stays (Rockler)
- **adjustable**: Sliding friction stays: yes, a screw sets the friction; tighten to hold the lid anywhere, loosen slightly for a slow soft-down (Rockler). Window friction stays: yes, a screw in the slider, in quarter turns (Era). Some soft-down stays have an adjustable speed (Sugatsune catalogue p. 111). Folding stays: no, they lock at one opening. Peg stays: choose a hole (Wikipedia 'Casement stay')
- **play_and_precision**: noticeable: riveted pivots have some play, and peg stays rattle in the wind (Wikipedia 'Casement stay'). A folding stay always locks at the same opening; a friction stay holds anywhere but can creep as the friction fades (Rockler). Mounting must be precise: a badly placed folding stay contorts or won't lock (Whitechapel), and stays must be square to the back and parallel to the side wall (HingeOutlet; Sugatsune catalogue p. 145)
- **access_needed**: one side only (blind): everything is screwed on from inside the open box, desk or window
- **materials**: Steel, brass, zinc alloy, nickel-plated and aluminium arms and bars (Wikipedia 'Casement stay'); traditional folding stays in solid or plated brass (Rockler; Whitechapel); commercial stays in zinc-alloy bodies with steel arms, or 304 stainless steel (Sugatsune catalogue pp. 136 and 143); window friction stays in steel with a plastic slider shoe (Era; Mila). Printed stays: PLA or PETG arms with a metal pin, e.g. 3.15 mm welding wire as the axle (Printables 'Creality K1 MAX folding lid support')
- **maker_difficulty**: easy to buy and fit, as long as the stay is placed precisely (Whitechapel); easy to moderate to print a simple prop or folding stay with a metal pin; moderate to make a friction stay that keeps its grip, because squeezed plastic relaxes (DuPont design guide, p. 36)

### Making it

- **processes**: 
  - off-the-shelf part: folding, sliding, telescopic, locking, soft-down and lift-assist lid stays; window friction stays
  - woodwork: fitting stays to chests, toy boxes, desks and cabinets
  - 3D print (FDM): props, folding stays and locking stays for boxes and printer-enclosure lids (Printables) *(unverified parts omitted)*
- **print_in_place**: no: printed stays are printed as separate arms and joined with a metal pin or screw (e.g. 'Simple Lid Stay' is split into its parts in the slicer; the K1 MAX folding lid support uses a welding-wire axle; Printables)
- **making_tips_3d_printing**: 1) Print the arms lying flat so the layers run along the arm; bending across layer lines is weak (vertically printed PLA hooks held 55% and PETG 46% of the flat-printed load; CNC Kitchen). 2) Use a metal pin for every pivot (a bolt with a nylon-insert lock nut, a clevis pin or a piece of steel wire; the K1 MAX folding lid support uses 3.15 mm welding wire; Printables) and leave at least 0.3 mm clearance for moving parts (Prusa knowledge base). 3) For a folding stay, design a stop face at the elbow so the joint stops a few degrees past straight (slightly over 180 degrees, like commercial folding stays; Whitechapel); the lid's weight then holds it locked. Test that it releases with a light push and that the stop is thick enough to take a bump. 4) For a friction (sliding) stay, don't rely on a tight printed fit: plastic held squeezed slowly relaxes (DuPont design guide, p. 36; thrinter creep test). Use a screw with a spring washer or rubber washer to keep the squeeze on, and expect to re-tighten it now and then, as with bought friction stays (Rockler; CPSC). 5) Material: printer-enclosure lids get warm; PLA starts to give way at about 60 C and PETG at about 80 C under load (CNC Kitchen), so use PETG or ASA there. 7) Commercial stays are handed (left or right); mirror a printed design for the other side (Rockler; Printables 'Flashforge 5M Pro Small Folding Lid Prop'). 8) Heavier printed enclosure lids are better lifted by gas springs on printed brackets (Printables 'Hinged lid with gas spring for Original Prusa Enclosure' uses two 120 N gas springs, M6 pivot screws with nylon-insert nuts and aluminium profiles to stiffen the lid). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search for: 'lid stay', 'lid support', 'folding lid stay', 'sliding lid stay' or 'friction lid stay', 'telescopic friction stay', 'drop front support' or 'flap stay', 'soft-down lid stay' or 'soft close lid support', 'lift assist lid stay', 'torque lid stay' or 'free stop lid stay', 'locking lid stay', 'toy box lid support' (spring-loaded, holds the lid in any position), 'casement stay' and 'window friction stay' / 'friction hinge' (by stack height, 13 or 17 mm, and length; Mila), 'gas strut' with 'ball stud' ends. Makers a beginner may see: Sugatsune, Rockler, Whitechapel (brands)
- **rules_of_thumb**: 
  - Size a lid stay by the lid's moment: inch-pounds = lid depth (in) x lid weight (lb) / 2, measured front to back for a chest lid or the closed height for an upward-opening door (Rockler); e.g. 25 in x 14 lb / 2 = 175 in-lb (HingeOutlet). Sugatsune writes it as torque = door height x 1/2 x door weight (Sugatsune 'Lid Supports' catalogue, p. 111).
  - A too-weak stay can't hold the lid; a too-strong one makes the lid hard to close (HingeOutlet).
  - Folding stays are made to open slightly more than 180 degrees, which is what locks them (Whitechapel).
  - Small folding stays should fold away from the hinges (forward-folding); on a slant-front desk a folding stay only works if the desk front is at 60 degrees or steeper (Whitechapel).
  - Sliding stays need clear space inside the box for the arm's whole travel (Rockler; Whitechapel); folding stays need no more room than their closed size (Whitechapel).
  - Lockable sliding stays are a poor choice for chest lids because they can release unexpectedly; use them for setting angles, e.g. drafting tables and windows (Whitechapel).
  - A lid near children needs a support that holds the lid open in any position, and it must be checked and re-tightened periodically (CPSC Publication 5099).
  - Window friction stays: turn the adjustment screw a quarter turn at a time, never more than three quarter turns in total, and adjust top and bottom stays equally (Era Horizon friction stay instructions); standard stack heights are 13 mm and 17 mm (Mila fitting instructions).
  - Telescopic friction stays typically extend from 11 to 16 in (Wikipedia 'Casement stay').
  - Commercial damper (soft-down) stays are designed for room temperature, 0 to 40 C (Sugatsune catalogue, pp. 106 and 112).
  - Mount stays square to the back of the box and parallel to the side wall (HingeOutlet; Sugatsune catalogue p. 145).

### When to use it

- **everyday_examples**: 
  - Toy chests and blanket chests with a support that stops the lid falling (CPSC; Rockler)
  - Drop-front (secretary) desks whose writing flap is held level by stays (Rockler; Whitechapel)
  - Upward-opening kitchen cabinet doors held open by a stay (Rockler)
  - Casement windows held open by a peg stay or a friction stay (Wikipedia 'Casement stay'; Era)
  - 3D-printer enclosure lids propped open by a folding stay (Printables 'Creality K1 MAX folding lid support')
- **when_to_use**: Use a stay when a hinged lid, flap or window must stay open by itself and must not fall: chest and toy-box lids (so they can't drop on hands or heads), drop-front desk flaps that must hold weight level, overhead cabinet doors, printer-enclosure lids, tool-case lids and casement windows. Choose a folding stay for a compact, positive lock at one opening, especially where space inside is tight (fall-front desks; Whitechapel). Choose a friction (sliding or telescopic) stay to hold any angle and let the lid down softly, which is the safer choice around children (Whitechapel; CPSC). Choose a soft-down or lift-assist stay for heavier lids, and a gas stay for large overhead doors (Rockler).
- **when_not_to_use**: Avoid folding stays where small children could release them by accident and have the lid fall (Whitechapel); use a friction stay or a spring-loaded lid support that holds at any position (CPSC). Avoid lockable sliding stays on chest lids (Whitechapel). Don't use a stay alone for very heavy lids or overhead doors that could lift out of reach; use gas stays or lift-assist hardware (Rockler). For small jewellery boxes, a 90-degree stop hinge or quadrant hinge is simpler (Rockler). If the lid should hold at any angle with no visible arm, use a friction (torque) hinge instead; if it should close by itself, use a self-closing hinge or a soft-down stay.
- **environment_limits**: Mostly for indoor furniture; damper (soft-down) stays are designed for 0 to 40 C (Sugatsune catalogue). Window friction stays live outdoors: lubricate the moving parts with light, non-acidic mineral oil twice a year and keep them clean (Era). Friction stays lose grip over time and need periodic tightening (Rockler; CPSC). Printed stays: PLA starts to give way at about 60 C and PETG at about 80 C (CNC Kitchen), and squeezed plastic friction parts relax, faster when warm (DuPont design guide, p. 36).
- **safety_notes**: Falling lids are a real hazard: the US CPSC knows of children killed or brain-damaged when toy-chest lids fell on their heads or necks, and recommends a lid support that holds the lid open in any position, checked and re-tightened regularly (CPSC Publication 5099). Folding stays have a pinch point at the elbow and can be released accidentally (Rockler; Whitechapel). Overhead doors that lift out of reach need a stay that holds the position you leave them in (Rockler). Over-turning a window friction stay's adjustment screw strips its thread and damages the hinge (Era), and replacing stays means handling heavy sashes and glass (Mila).
- **common_failures**: The friction fades, so the lid drifts down or drops; re-tighten the screw regularly (Rockler; CPSC). A folding stay is fitted in slightly the wrong place, so it twists, won't lock or won't fold (Whitechapel). A sliding stay's arm hits things inside the box because there wasn't enough clearance (Rockler). The wrong hand (left or right) was bought (Rockler; Mila). The stay was undersized for the lid's weight and depth, or so strong the lid is hard to close (HingeOutlet). The stay isn't square or parallel, so it binds (HingeOutlet; Sugatsune catalogue). A window friction stay's screw is over-tightened and strips (Era). Printed versions: arms snap along layer lines, plastic pivot holes wear oval, and friction parts relax.
- **related**: 
  - Friction hinge: puts the friction inside the hinge itself, so no separate arm is needed
  - Gas spring (gas strut): lifts and holds heavier lids; lockable types hold at any length
  - Dampers (rotary and linear soft-close dampers): the part inside a soft-down stay that stops slamming
  - Self-closing hinges: close a lid or door instead of holding it open
  - Over-centre linkage (toggle linkage): the principle that locks a folding stay just past straight
  - Detent hinge: holds a lid at set click positions inside the hinge
  - Telescoping tube locks (twist lock, lever lock): lock a telescoping tube at any length, like a lockable telescopic stay
  - Stop hinge or quadrant hinge: a hinge with a built-in stop, enough for light jewellery-box lids (Rockler)
  - Torsion lid hinge: a hinge with a built-in spring that holds the lid where you leave it (Rockler)
  - Chain or cord stay: the simplest way to stop a lid falling backwards (Whitechapel; Rockler)

### Pictures, videos and models

- **links**: 
  - [Lid Support/Lid Stay Buying Guide (Rockler)](https://www.rockler.com/learn/lid-support-lid-stay-buying-guide): Photos and explanations of folding, sliding (friction) and piston lid stays, their uses on chests, drop-front desks and overhead doors, and the inch-pound sizing formula *(licence: link only)*
  - [Stays (Whitechapel Ltd)](https://whitechapel-ltd.com/stays): Pictures and descriptions of folding, sliding, telescoping friction and casement (peg) stays, with safety advice for chests *(licence: link only)*
  - [Folding Lid Stays: installation (Whitechapel Ltd)](https://whitechapel-ltd.com/folding-lid-stays): Installation drawings of folding stays on a chest lid and on fall-front desks, and why they lock slightly past 180 degrees *(licence: link only)*
  - [Horizon Friction Stay Adjustment Instructions (ERA, PDF)](https://www.eraeverywhere.com/globalassets/era/data-sheets/10757_adjustment-instructions.pdf): Diagrams of a window friction stay with and without friction applied, and where the adjustment screw sits in the slider *(licence: link only)*
  - [George H. Johnson & Fred Bottner Trunk Lid Support, 1871 patent drawing (US National Archives via Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:George_H._Johnson_%26_Fred_Bottner_Trunk_Lid_Support_-_DPLA_-_c52e19270d05551ecae0e6621daffa03_(page_1).jpg): A historic US patent drawing of a trunk lid support *(licence: Public domain in the United States)* *(unverified parts omitted)*
- **make_it_yourself**: 
  - [Simple Lid Stay (Stached, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/321117-simple-lid-stay): A very simple printed stay to hold a chest or box lid open; split into its parts in the slicer; printed in PLA with 4 perimeters and 20% infill. Read through the Printables public API. *(licence: CC BY)*
  - [Chest/Trunk Lid Stay (oublue, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/648577-chesttrunk-lid-stay): A pair of printed stays that stop a chest lid opening too far; one catches automatically when fully open to stop the lid falling on fingers, and is lifted to release; fixed with #6 wood screws. Read through the Printables public API. *(licence: CC BY-NC-SA)*
  - [Creality K1 MAX folding lid support (Jan Kurek, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/993062-creality-k1-max-folding-lid-support): A folding support that locks a printer's lid lifted at 132 mm and flips up out of the way when closed; printed in PETG with a 3.15 mm welding-wire axle. Read through the Printables public API. *(licence: CC BY-NC)*
  - [Hinged lid with gas spring for Original Prusa Enclosure (MW, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/563065-hinged-lid-with-gas-spring-for-original-prusa-encl): Printed brackets that lift an enclosure lid with two 120 N gas springs, pivoting on M6 screws with nylon-insert nuts; shows the piston-stay alternative. Read through the Printables public API. *(licence: GNU GPL v3.0)*
- **diagram_idea**: Side view of an open chest: a folding stay with its elbow shown a few degrees past straight and an arrow showing the lid's weight pressing the joint into its stop (locked), next to a sliding friction stay whose bar passes through a pivoting block with a friction screw, with the inch-pound formula (lid depth x weight / 2) beside the lid.
- **sources**: 
  - https://www.rockler.com/learn/lid-support-lid-stay-buying-guide
  - https://whitechapel-ltd.com/stays
  - https://whitechapel-ltd.com/folding-lid-stays
  - https://en.wikipedia.org/wiki/Casement_stay
  - https://en.wikipedia.org/wiki/Casement_window
  - https://www.cpsc.gov/s3fs-public/5099.pdf
  - https://www.hingeoutlet.com/blogs/news/how-to-install-lid-support-hinges-and-stays
  - https://www.sugatsune.com/content/page-files/product-literature/catalog-300-099-157-lid-supports.pdf
  - https://www.eraeverywhere.com/globalassets/era/data-sheets/10757_adjustment-instructions.pdf
  - https://www.milasecure.com/uk/en/documents/fitting-instructions/window-hardware/friction-stay-fitting-instructions/Standard%20Friction%20Stay%20Fitting%20Instructions.pdf
  - https://commons.wikimedia.org/wiki/File:George_H._Johnson_%26_Fred_Bottner_Trunk_Lid_Support_-_DPLA_-_c52e19270d05551ecae0e6621daffa03_(page_1).jpg
  - https://www.youtube.com/watch?v=j6s0zpPYchw
  - https://www.distrupol.com/General_Design_Principles_for_Engineering_Polymers.pdf
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** links, making_tips_3d_printing, processes

## 263 Knuckle hinge (butt hinge)

*hinges & pivots.* Two leaves joined by a pin through interlocking knuckles; the ordinary door hinge

### What it is

- **plain_name**: The ordinary door hinge: two flat plates, one screwed to the door and one to the frame, joined along one edge by a row of rings with a pin through them, so the door can swing
- **term**: Butt hinge (knuckle hinge; called a mortise hinge when it is set into shallow recesses)
- **aliases**: 
  - knuckle hinge
  - mortise hinge, half-mortise hinge (only one leaf set into a recess) (Wikipedia, Hinge)
  - barrel hinge (a sectional barrel, the knuckle, turning on a pin; Wikipedia says most hinges work this way)
  - loose-pin hinge and fixed-pin hinge (whether the pin can be taken out; Popular Woodworking)
  - swaged and non-swaged butts (leaves bent in toward the barrel, or flat and in line with it; Popular Woodworking)
  - ball-bearing hinge (standard weight with 2 bearings, heavy weight with 4) and plain-bearing hinge (I Dig Hardware)
  - NRP hinge (non-removable pin, locked by a set screw) and security-stud hinge (DoorwaysPlus)
  - lift-off hinge or flag hinge (one leaf carries the pin, the other has the hole, so the door lifts off; Wikipedia)
  - continuous hinge or piano hinge (a knuckle hinge running the full length of a lid or door; Wikipedia)
  - case hinge (a small, decorative butt hinge for boxes and cases; Wikipedia)
  - butterfly hinge or applied hinge (a decorative knuckle hinge screwed onto the surface, not recessed; Popular Woodworking)
  - pin also called a pintle; leaf, knuckle, gauge, end play, pitch (Wikipedia hinge terminology)
  - revolute joint, pin joint or hinge joint (the engineering name for any one-axis turning joint; Wikipedia) *(unverified parts omitted)*
- **family**: hinges & pivots
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: Two leaves with interlocking rings (knuckles) along one edge share a single pin, so a door, lid or flap can swing about that pin while the hinge carries its weight.
- **complexity**: A few parts: two leaves (flat plates with screw holes), the knuckles (rolled or cast rings along one edge of each leaf that interleave), one pin through all the knuckles, and screws. Some add ball bearings between knuckles (I Dig Hardware), decorative tips (finials) on the pin, or a set screw that locks the pin in (DoorwaysPlus).
- **how_it_works**: Each leaf has knuckles along one edge; the knuckles of the two leaves alternate and interlock, and a pin runs through all of them, so the leaves can only turn about the pin: one degree of freedom (Wikipedia, Hinge). One leaf is screwed to the frame and the other to the door, usually each set into a shallow recess (mortise) so the door closes with a small, even gap; how deep the recesses are sets that gap (Popular Woodworking). The door's weight rests on the knuckle ends and the pin, and because that weight hangs out to one side, the top hinge is pulled away from the frame and the bottom hinge pushed into it (FineWoodworking forum). Heavy commercial and fire doors use ball-bearing hinges, with bearings in 2 or 4 of the knuckles (I Dig Hardware).

### Finder attributes

- **job**: let it move (turn, slide or bend): lets a door, lid, flap or panel swing, join and hold: carries the door's weight on its frame and keeps it in line
- **motion**: rotate: usually somewhere between 90 and 180°, limited by where the leaves, door and frame meet; a parametric printed butt hinge is modelled from +180° (folded shut) to -90° (Printables 307580).
- **degrees_of_freedom**: 1: turning about the pin (Wikipedia, Hinge). Unwanted extra movement comes from end play (the leaves sliding along the pin through the gaps between knuckles) and from clearance between pin and knuckles, which lets the leaves wobble (Wikipedia calls loose angular movement 'doorstop'). Loose-pin and lift-off hinges let the door come off entirely.
- **special_behaviour**: 
  - none: an ordinary butt hinge swings freely and holds no particular position (spring, rising, friction and detent hinges are separate entries)
  - quick-release: loose-pin hinges come apart when the pin is tapped out, and lift-off (flag) hinges when the door is lifted, so doors can be taken off without unscrewing (Wikipedia; Popular Woodworking)
- **holding_principle**: 
  - shape (the parts interlock; form-fit): the pin through the interleaved knuckles keeps the two leaves together
  - not a holding joint (it moves or passes on motion): its job is to let the door turn; screws in the leaves hold it to the door and frame
- **input_output**: not applicable: a hinge lets a door or lid turn; it does not pass motion on.
- **power**: passive (no power needed)
- **removability**: removable: unscrew the leaves, or tap out a loose pin; a non-removable-pin (NRP) hinge's set screw can only be reached with the door open, so it comes apart only from the inside (DoorwaysPlus)
- **reuse_cycles**: effectively unlimited: hinges swing hundreds of thousands of times; hinges on fire doors that are not ball-bearing types must pass at least 350,000 cycles to ANSI/BHMA A156.1 (I Dig Hardware). *(unverified parts omitted)*
- **tools_needed**: Screwdriver and drill for pilot holes; marking gauge, knife and chisel (or a router with a hinge jig) to cut the recesses (Popular Woodworking); a screwdriver and mallet, or a hammer and punch, to tap out a loose pin (Popular Woodworking; DoorwaysPlus).
- **seal**: none
- **load**: Medium to heavy for its size in the direction it is built for: carrying the weight of a door, shared between two or more hinges (NFPA 80, via I Dig Hardware: two hinges for doors up to 60 in tall, plus one for every extra 30 in). The pin carries the weight across it (in shear) and the knuckle ends take the downward push. Weak against the door being levered away from the frame, because the top hinge's screws are pulled out, and against twisting; the screws in the wood are usually the weak point (FineWoodworking forum worked example: a 50 lb, 3 ft wide door makes a 75 ft-lb turning effect, which with hinges 6 ft apart pulls the top hinge out with about 12 lb; a 150 lb person swinging on the door raises this to about 87 lb).
- **adjustable**: Not built in: the door's position is set by how deep the recesses are cut, which sets the gap around the door (Popular Woodworking), by packing thin shims behind a leaf, or, on surface-mounted butterfly hinges, by moving a screw to the spare third hole to pull the door up or down (Popular Woodworking). Unlike concealed cup hinges, butt hinges have no adjusting screws.
- **play_and_precision**: small: the pin needs a little clearance in the knuckles and there is end play between knuckles, so a door can drop slightly; Popular Woodworking notes that many surface-mounted butterfly hinges have sloppy-fitting pins, one with 'a lot of vertical play' that had to be allowed for when fitting the screws. Printed hinges have more play, since they need 0.3 to 0.5 mm clearance (Printables 307580). *(unverified parts omitted)*
- **access_needed**: one side only (blind): each leaf is screwed on from its own face, so nothing has to reach through; you need the door open to reach the screws. On a door that swings outward the pin ends face the outside, where they can be tapped out unless NRP hinges or security studs are used (DoorwaysPlus).
- **materials**: Steel (plain, plated or stainless), solid brass and bronze; quality hinges are extruded and machined rather than cheap stamped ones (Popular Woodworking); standard-weight commercial hinges are 0.134 in thick and heavy-weight ones 0.180 in (I Dig Hardware). Printed hinges in PLA, PETG or ASA with a metal pin, a screw or a length of 1.75 mm filament as the pin (BOSL2). Joins wood, metal, plastic and printed parts.
- **maker_difficulty**: moderate: screwing on a hinge is easy, but lining several hinges up on one straight axis, cutting neat recesses and getting an even gap round the door takes care (Popular Woodworking); printed hinges need a clearance test print first (Printables 894447).

### Making it

- **processes**: 
  - off-the-shelf part: butt, ball-bearing, loose-pin, lift-off, piano (continuous) and case hinges
  - woodwork: hinges mortised into doors, cabinets and boxes (Popular Woodworking)
  - 3D print (FDM): separate leaves with a filament, screw or metal pin, or print-in-place versions with a fused pin or interlocking cones (BOSL2; Printables 307580, 484877) *(unverified parts omitted)*
- **print_in_place**: yes: print-in-place versions work straight off the bed, either with a pin fused to one leaf (Printables 307580, which prints in one step by default) or with interlocking cones instead of a pin (BOSL2 knuckle_hinge with in_place=true); many makers instead print the two leaves separately and push in a separate pin for strength, which is not print-in-place.
- **making_tips_3d_printing**: 1) Clearance: a popular parametric butt hinge recommends 0.3 mm between parts for a tight fit up to 0.5 mm for easier movement; below 0.3 mm it often locks up so the leaves break before the knuckles free, while 0.4 mm or more releases easily (Printables 307580). A tolerance test with gaps from 0.1 to 0.5 mm worked at 0.2 and 0.3 mm on one printer, fused at 0.1 mm and was too loose at 0.4 mm and above (Printables 894447). Prusa's starting point for moving parts is at least 0.3 mm. Print a test on your own printer first. 2) Pin: BOSL2's knuckle_hinge() defaults to a piece of 1.75 mm filament as the pin, a 4 mm knuckle diameter and a 0.2 mm gap between segments; it can instead make a clearance hole for a screw (e.g. M3) through most knuckles with a self-tapping hole in the last one (BOSL2 hinges.scad). A metal pin is stronger: the parametric hinge lets you leave out its fused pin 'in the case where a metal pin is preferred for the sake of strength' (Printables 307580). Pins thinner than 5 mm print weakly, so use an off-the-shelf pin in a drilled hole (Hubs). 3) Holes: holes printed upright come out undersized; print them small and drill to size (Hubs). For holes lying flat, use a teardrop or octagonal hole so the top prints without support (BOSL2). 4) Closing fully: raise the pin axis by a layer or two (BOSL2 'clearance', default 0.15 mm) so the leaves don't rub at the edge, or cut a curved recess for the other part's knuckles (BOSL2 knuckle_clearance). 5) Orientation: printed flat, the pin axis lies horizontal; printed standing up, set the hinge partly closed (about 120°) so it stays stable (Printables 307580). One vertically printed hinge uses 4 perimeters and 50% infill and needs working back and forth to free it (Printables 334697). 6) Strength: add gussets where the knuckles meet the leaves (Printables 307580); an odd number of segments puts the outer leaf's knuckles at both ends (BOSL2 example). 7) Material: PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen), so use PETG or ASA for anything warm or outdoors.
- **off_the_shelf_parts**: Search for: 'butt hinge' (sizes such as 3-1/2, 4 and 4-1/2 in), 'mortise hinge', 'ball bearing hinge' (standard weight, 2 bearings; heavy weight, 4 bearings; I Dig Hardware), 'plain bearing hinge', 'loose pin hinge' or 'fixed pin hinge', 'NRP hinge' (non-removable pin) and 'security stud hinge' (DoorwaysPlus), 'swaged' or 'non-swaged' butt, 'ball-tip hinge' (a finial on the pin; Popular Woodworking), 'lift-off hinge' or 'flag hinge', 'rising butt hinge', 'continuous hinge' or 'piano hinge', 'case hinge' or 'box hinge', 'H hinge' (Wikipedia), 'hinge pin', 'hinge mortise jig' or template.
- **rules_of_thumb**: 
  - Number of hinges: two for a door up to 60 in (1.52 m) tall, plus one more for each extra 30 in (0.76 m) or part of it, e.g. three for a 90 in door (NFPA 80, explained by I Dig Hardware).
  - Size: a steel hinge on a 3 ft x 7 ft fire door must be at least 4-1/2 in high and 0.134 in thick (NFPA 80 table, via I Dig Hardware); heavy-weight hinges are 0.180 in thick with 4 bearing housings instead of 2 (I Dig Hardware).
  - Non-swaged butts set into both door and frame: cut each recess just under half the barrel's thickness; however far the gauge stops short of the pin's centre is half the gap you'll get around the door (Popular Woodworking).
  - Swaged loose-pin hinges: recess each to the thickness of one leaf, with the whole barrel clear of the door edge so the pin can be tapped out, and fit them so the pin drops in from above (Popular Woodworking).
  - Cabinet doors: pick a hinge about as tall as the door's bottom rail and line it up with the rail's inside edge (Popular Woodworking).
  - Brass screws: drive a steel screw of the same size first, because steel is stronger and less likely to break (Popular Woodworking).
  - Printed hinges: 0.3 mm (tight) to 0.5 mm (easy) clearance (Printables 307580); BOSL2's defaults are a 0.2 mm gap between knuckles and a 1.75 mm filament pin (BOSL2 hinges.scad).

### When to use it

- **everyday_examples**: 
  - Ordinary room doors, usually hung on two or three butt hinges (NFPA 80 counts, via I Dig Hardware)
  - Doors on older cupboards and furniture with hinges set into the door edge (Popular Woodworking)
  - Small brass hinges on a wooden jewellery or keepsake box (case hinges; Wikipedia)
  - Long piano hinges on piano lids, toolbox lids and fold-down flaps (Wikipedia)
- **when_to_use**: Use a knuckle (butt) hinge whenever a door, lid or flap simply needs to swing about one edge: room doors, cupboard doors, box lids, access panels, folding flaps. It is cheap, strong for its size, carries a door's weight well when two or more are used, and is easy to understand and replace. Choose a long piano hinge to spread the load along a lid, loose-pin or lift-off hinges when the door must come off easily, and ball-bearing hinges for heavy or busy doors (fire doors must have them unless another tested anti-friction type is used; I Dig Hardware). In 3D printing it is the go-to hinge for boxes and enclosures, either with a metal pin or printed in place.
- **when_not_to_use**: When the hinge must be invisible, use a concealed cup hinge or an invisible barrel (Soss-type) hinge. When the lid must stay at any angle, use a friction hinge or a lid stay; at set angles, a detent hinge. When it must close itself, use a self-closing (spring or rising butt) hinge. On an outward-opening door where security matters, don't use plain loose-pin hinges; use NRP hinges or security studs (DoorwaysPlus). For thin one-piece plastic lids, a living hinge avoids the pin altogether; for a printed box you don't want to assemble, use a print-in-place hinge; where both leaves must move evenly or carry heavy loads along a long edge, a geared continuous hinge.
- **environment_limits**: Printed hinges: PLA starts to soften at about 60 °C and PETG at about 80 °C (CNC Kitchen), so a PLA hinge in a hot car or in sun can sag. Printed pins and knuckles wear, and plastic under a door's constant weight slowly creeps (Hubs: constant loading causes creep in plastics). Fire doors need ball-bearing hinges or a tested anti-friction type (I Dig Hardware). *(unverified parts omitted)*
- **safety_notes**: Support a heavy door or lid before tapping out its pins, because it drops free once the last pin is out. On outward-opening doors, exposed pins can be knocked out to lift the door off and bypass the lock (DoorwaysPlus), so use NRP hinges or security studs where that matters. *(unverified parts omitted)*
- **common_failures**: The door sags because the top hinge's screws strip or pull out of the frame; fit all the screws and use longer ones in the top hinge (FineWoodworking forum). Hinges with sloppy pins and vertical play let the door sag unless this is allowed for when fitting (Popular Woodworking, on butterfly hinges). Brass screws snap if driven without first cutting the thread with a steel screw (Popular Woodworking). Printed hinges fuse solid if the clearance is too small and the leaves break before they free (Printables 307580), crack where the knuckle meets the leaf (gussets help; Printables 307580), or sag in the heat (CNC Kitchen). *(unverified parts omitted)*
- **related**: 
  - Print-in-place hinge: a knuckle hinge printed already assembled, with no separate pin
  - Living hinge: a thin flexible strip instead of knuckles and a pin; one piece, but only in suitable plastics
  - Geared hinge (continuous gear hinge): the two leaves roll on meshing teeth so both move evenly
  - Self-closing hinges (spring hinge, rising butt hinge): a knuckle hinge with a spring or sloping knuckle that closes the door
  - Friction hinge (torque hinge): holds any angle you leave it at
  - Detent hinge (click hinge): clicks into set angles
  - Clip-on concealed hinge (cup hinge): hidden, adjustable cabinet hinge
  - Invisible barrel hinge (Soss-type): folding links hidden inside the edges
  - Clevis joint (fork-and-pin joint): the same fork-tongue-pin idea used as a single strong pivot
  - Plain pivot and rolling bearing: the general pin-in-hole or ball-bearing way to make parts turn
  - Lid and flap stays: added to a hinged lid to hold it open

### Pictures, videos and models

- **links**: 
  - [File:Butt Hinge annotated.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Butt_Hinge_annotated.jpg): An annotated photo of a butt hinge with its parts labelled; also used to illustrate a revolute joint *(licence: CC BY-SA 4.0 (JonRichfield, from Hinge3P.jpg by Audrius Meskauskas))*
  - [File:Basic hinge.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Basic_hinge.svg): Simple drawing of a basic hinge, used on Wikipedia next to the hinge terminology list *(licence: CC0 (A loose necktie))*
  - [File:Hamburgerpaumelle.JPG (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Hamburgerpaumelle.JPG): A barrel (lift-off) door hinge, used on Wikipedia's Hinge article *(licence: Public domain (Sindala))*
  - [How to fit a butt hinge - Easy Visual Fitting Tutorial (Cast in Style Ltd, YouTube; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=bneQMFes-p4): Step-by-step fitting of a butt hinge to a door *(licence: link only (standard YouTube licence))*
  - [Paul Sellers | Dovetail box (part 4 of 4) - setting hinges (YouTube; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=gcQATQLzDuw): Hand-tool fitting of small butt hinges on a wooden box *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [BOSL2 hinges.scad: knuckle_hinge() (OpenSCAD library)](https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad): Parametric knuckle hinges with a hole for a filament, pin or screw (self-tapping last knuckle), teardrop or octagonal holes, or print-in-place interlocking cones *(licence: BSD 2-Clause)*
  - [Parametric hinge (FM, Printables; credits Thingiverse 'Parametric Hinge' by rohingosling) (URL from Printables API, page not opened)](https://www.printables.com/model/307580-parametric-hinge): OpenSCAD parametric butt hinge: prints in one step with a fused pin, or leave the pin out and use a metal one; clearance, knuckle gussets, throw angle and screw holes are all adjustable *(licence: CC BY)*
  - [Hinge tolerance test (build-in-place) (Atoi, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/894447-hinge-tolerance-test-build-in-place): Print-in-place hinges with gaps from 0.1 to 0.5 mm, printed lying down and standing up, to find the gap your printer needs *(licence: CC BY-SA)*
  - [Print In Place Butt Hinge (Fusion 360 File Included) (Andrew Nelson, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/484877-print-in-place-butt-hinge-fusion-360-file-included): A 40 x 50 mm print-in-place butt hinge with M4 countersunk holes, in 0.50 mm and 0.25 mm clearance versions, with the Fusion 360 file to change the gap *(licence: CC BY-SA)*
  - [Parametric hinge (vertically printed) (sh, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/334697-parametric-hinge-vertically-printed): A tight, stable hinge printed standing up, in any length and width with any number of screw holes *(licence: CC BY-ND)* *(unverified parts omitted)*
- **diagram_idea**: Exploded view of two leaves with alternating knuckles and a pin sliding down through them, then the assembled hinge swinging through 180° with a curved arrow; a small inset of a door on two hinges with arrows showing the top hinge pulled away from the frame and the bottom one pushed in.
- **sources**: 
  - https://en.wikipedia.org/wiki/Hinge
  - https://en.wikipedia.org/wiki/Revolute_joint
  - https://commons.wikimedia.org/wiki/File:Butt_Hinge_annotated.jpg
  - https://commons.wikimedia.org/wiki/File:Basic_hinge.svg
  - https://commons.wikimedia.org/wiki/File:Hinge3P.jpg
  - https://commons.wikimedia.org/wiki/File:Hamburgerpaumelle.JPG
  - https://idighardware.com/2016/07/decoded-nfpa-80-requirements-for-hinges/
  - https://idighardware.com/2024/08/whats-that-ball-bearing-hinges/
  - https://doorwaysplus.com/blog/our-blog-1/nrp-hinges-on-outswing-doors-when-the-pin-is-the-vulnerability-105
  - https://www.popularwoodworking.com/techniques/how-to-install-butt-hinges/
  - https://www.popularwoodworking.com/techniques/8-common-hinges/
  - https://www.finewoodworking.com/forum/forces-on-a-door-hinge
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/hinges.scad
  - https://raw.githubusercontent.com/BelfrySCAD/BOSL2/master/LICENSE
  - https://www.thingiverse.com/thing:2187167
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://www.hubs.com/knowledge-base/how-design-snap-fit-joints-3d-printing/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.youtube.com/watch?v=bneQMFes-p4
  - https://www.youtube.com/watch?v=gcQATQLzDuw
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, make_it_yourself, play_and_precision, processes, reuse_cycles, safety_notes

## 264 Plain pivot and rolling bearing (pin in hole, shoulder bolt, ball bearing)

*hinges & pivots.* A shaft or pin turning in a hole, or in a ball bearing, as the basic way to make something rotate

### What it is

- **plain_name**: The basic way to make something turn: a pin, bolt or shaft through a hole, either rubbing straight on the hole (or on a slippery sleeve pushed into it), or running in a ball bearing, a ring with steel balls inside, so it spins more easily
- **term**: Revolute joint (pin joint) made with a plain bearing (pin in a hole or bushing, shoulder bolt) or a rolling-element bearing (ball bearing)
- **aliases**: 
  - pin joint, hinge joint, turning pair (revolute joint; Wikipedia)
  - pivot, pivot pin, axle, pintle
  - plain bearing, sliding bearing, sleeve bearing, journal bearing, friction bearing ('simply a shaft rotating in a hole'; Wikipedia)
  - bush or bushing, flanged bushing, split bushing; thrust washer (the flat version that takes end thrust) (Wikipedia, Plain bearing)
  - oil-impregnated sintered bronze bushing, SAE 841 bronze, Oilite (brand) (Wikipedia)
  - self-lubricating plastic bushing; iglidur and iglide (igus brands)
  - shoulder bolt, shoulder screw, stripper bolt (Machine Design)
  - rolling-element bearing, rolling bearing, anti-friction bearing (Wikipedia; I Dig Hardware uses 'antifriction bearing')
  - ball bearing, deep-groove ball bearing, Conrad bearing (the usual construction; Wikipedia)
  - 608 bearing or skateboard bearing (8 mm bore, 22 mm outside, 7 mm wide; Wikipedia, 123bearing)
  - pillow block (a housing that holds a bushing or bearing; GM0) *(unverified parts omitted)*
- **family**: hinges & pivots
- **other_families**: print-in-place & 3D-printing joints
- **one_liner**: A pin or shaft passes through a hole so one part can turn on the other, sliding directly in the hole or a sleeve (plain bearing), or rolling on balls between two rings (ball bearing) for less friction.
- **complexity**: A few parts for a plain pivot: a pin, bolt or shaft, the hole it turns in (often lined with a bushing), and something to stop it sliding out (a head and nut, a shoulder, a retaining ring or a shaft collar), usually with washers. A ball bearing is a small assembly that acts as one unit: inner ring, outer ring, balls, a cage that keeps them spaced, grease, and often shields or seals (Wikipedia, Rolling-element bearing and Ball bearing).
- **how_it_works**: In a plain pivot the pin simply turns in the hole, sliding on its surface. The pin must be a little smaller than the hole to move, so it really touches along a line, and friction and wear depend on the two materials and on lubrication (Wikipedia, Revolute joint and Plain bearing). Pairing a hard, smooth pin with a softer, slippery sleeve (bronze, oil-filled sintered bronze, or a plastic such as nylon or acetal) makes it run smoothly and puts the wear on the cheap sleeve, which is replaced when worn (Wikipedia, Plain bearing). A ball bearing swaps sliding for rolling: balls roll between grooved inner and outer rings, so friction is much lower (Wikipedia, Rolling-element bearing; GM0). The ring that turns relative to the load is fitted tight on its shaft or in its housing so it can't slip round, and the other ring is a looser fit (NSK).

### Finder attributes

- **job**: let it move (turn, slide or bend): lets a lever, arm, wheel, pulley or shaft turn, join and hold: holds the turning part in place on its support, taking the load across the pin
- **motion**: rotate: unlimited continuous turning (wheels, shafts, spools) or any part of a turn (levers, arms, linkages). A loose pin in a plain hole can also slide along its length unless a head, shoulder, collar or retaining ring stops it (rotate+slide).
- **degrees_of_freedom**: 1 when the pin or shaft is held at both ends along its length: turning about its axis (Wikipedia, Revolute joint). A loose pin in a hole also lets the part slide along the pin (2) and wobble through the clearance. A single ball bearing allows a little tilt (Wikipedia, Ball bearing), so a shaft is normally held by two bearings spaced apart.
- **special_behaviour**: 
  - none: it just lets parts turn, with less friction when a ball bearing is used
  - self-aligning or self-centring: only special self-aligning ball bearings, whose outer ring has a spherical track, tolerate a shaft that is not quite in line (Wikipedia, Ball bearing)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it lets parts turn
  - shape (the parts interlock; form-fit): the pin through the hole stops every movement except turning; a head, nut, shoulder, collar or retaining ring stops it sliding out (GM0: retain the shaft in both directions)
  - friction or clamping (force-fit): bearings and bushings are usually held by a press (interference) fit (NSK; igus)
- **input_output**: not applicable: a pivot or bearing supports a turning part rather than changing motion. A shaft running in bearings passes rotation straight along itself (in line, 1:1). Ball bearings waste less energy than bushings (GM0).
- **power**: passive (no power needed)
- **removability**: removable: pull the pin or undo the bolt or shoulder screw; pressed-in bushings and bearings are harder to remove and may be damaged when pressed out
- **tools_needed**: Hex key or spanner for a bolt or shoulder screw; circlip pliers for retaining rings; a vice, arbor press or clamp with a flat punch to press in bushings and bearings (igus: use a flat press, not a centring pin); a drill or reamer to bring printed holes to size (Hubs). None for a pin held by a clip.
- **seal**: none: a pin in a hole does not seal. Bearings come with metal shields (2Z) or rubber seals (2RS) that keep dirt out of the bearing itself and hold its grease in; seals add friction (Wikipedia, Rolling-element bearing)
- **load**: Light to heavy, depending on size and material. Plain bearings are the cheapest, most compact type and carry high loads for their size (Wikipedia, Plain bearing). A 608-2Z ball bearing is rated 3.45 kN dynamic and 1.37 kN static (SKF data via 123bearing). Strongest across the pin or shaft (radial load); deep-groove ball bearings also take some push along the shaft, about 50% of their radial rating, or 25% for small or light bearings (Wikipedia, citing SKF). Weak against tipping loads on a single bearing: a sideways twist can distort the outer ring until the balls escape (Wikipedia, Ball bearing), so use two bearings spaced apart. *(unverified parts omitted)*
- **adjustable**: No for a basic pivot. End float is set with washers or shims; a pair of ball bearings can be preloaded against each other to take out their internal play (Wikipedia, Ball bearing). Eccentric bushings let a pivot's position be adjusted (see Eccentric adjuster).
- **play_and_precision**: Plain pivot: small to noticeable play, because the clearance needed for movement means the pin only touches along a line (Wikipedia, Revolute joint); printed pins in printed holes need at least 0.3 mm clearance (Prusa) and so wobble noticeably, while precision shoulder screws are made 0.013 to 0.038 mm under size for a close but free fit in bearings and pulleys (Machine Design). Ball bearing: small play that can be removed by preloading a pair (Wikipedia), good repeatability, and some tolerance of misalignment (Wikipedia, Ball bearing), though self-aligning types are needed for more.
- **access_needed**: both sides for a through-bolt with a nut; one side only (blind) for a shoulder screw or bolt screwed into a tapped hole or threaded insert; end of a tube or shaft for sliding a bearing, bushing, collar or retaining ring onto a shaft.
- **materials**: Pins and shafts: steel, hardened and polished to run in bushings, or stainless steel (Wikipedia, Plain bearing). Bushings: bronze, oil-impregnated sintered bronze (SAE 841 / Oilite), cast iron, graphite, and plastics such as nylon, acetal, PTFE, UHMWPE and PEEK (Wikipedia, Plain bearing); even self-lubricating wood (lignum vitae) in clocks (Wikipedia). Ball bearings: chrome steel (608-2Z; 123bearing), stainless steel or plastic. Printed housings in PLA, PETG, ASA or wear-resistant 'tribo' filaments (igus claims up to 50 times the abrasion resistance of ordinary filament). Joins almost anything.
- **maker_difficulty**: easy: a bolt through a drilled hole, or a ball bearing pressed into a printed pocket, is one of the first mechanisms most makers build; getting a snug bearing press fit in a print usually takes one or two test prints (Hackaday; Printables 1293573).

### Making it

- **processes**: 
  - off-the-shelf part: ball bearings (608 and other ISO 15 sizes), bushings, thrust washers, shoulder screws, dowel pins, shafts, collars, retaining rings
  - 3D print (FDM): printed housings with pressed-in bearings or bushings and metal pins, or fully printed bearings and bushings (Printables 276409, 693434)
  - CNC: machined holes, shafts and bearing seats for accurate fits
  - woodwork: dowel or bolt pivots in wood; piano keys pivot on centre pins in felt bushings (Wikipedia, Plain bearing) *(unverified parts omitted)*
- **print_in_place**: partly: most printed pivots are a printed part plus an added bolt, pin, bushing or ball bearing. Whole 608-size bearings can be printed in place after calibrating two tolerances (Printables 276409; Hackaday), and ball-less printed bushings print as one piece and are squeezed free with pliers (Printables 693434).
- **making_tips_3d_printing**: 1) Use metal for the pin: printed pins under 5 mm are weak, so insert an off-the-shelf pin into a drilled hole (Hubs). If a bolt is the pin, let its smooth shank, not its threads, sit in the hole; threads in the hole cause fretting wear (Wikipedia, Bolt). A shoulder screw is made for this: its shoulder is the pivot and the thread clamps it down (Machine Design). 2) Hole size: holes printed upright come out undersized, so print them slightly small and drill or ream to size (Hubs); for parts that move, start with at least 0.3 mm clearance (Prusa). 3) Bearing pockets: a 0.1 mm difference noticeably changes a press fit (Hackaday); crush ribs, small ridges inside the pocket that squash as the bearing goes in, make the fit far more forgiving (Hackaday). Print a quick tolerance tester at your final settings and scale up or down in 0.1 mm steps (Printables 1293573). To trap a bearing inside a part, see Mid-print embedding. 4) Printed bearings: calibrate the radial and 'tenon' tolerances by halving the range each test (binary search); the designer got the best results in PLA at 0.16 mm layers with grease, and warns against filling the bed with copies, which prints differently from one part (Hackaday; Printables 276409). 5) Hold the shaft in both directions, with a washer that touches only the bearing's inner ring so nothing rubs (GM0). 6) Use two bearings spaced apart for any shaft or arm with a sideways load; one bearing can be wrecked by tipping (Wikipedia, Ball bearing). 7) Lubricate printed bushings with a plastic-safe grease or spray such as PTFE or silicone (Hackaday; Printables 693434), or print sliding parts in a wear-resistant filament (igus, manufacturer's claim). *(unverified parts omitted)*
- **off_the_shelf_parts**: 6 to 24 mm commercial shoulders; Machine Design), 'precision shoulder screw', 'dowel pin', 'clevis pin', 'shaft collar' (clamping or set-screw), 'retaining ring' or 'E-clip', 'pillow block' (GM0), 'shim washer'. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Pick a bushing material by PV (pressure on the projected area x sliding speed): maximum PV about 1.75 MPa·m/s for SAE 841 oil-impregnated bronze, 0.11 for nylon, 0.09 for acetal and 0.04 for plain PTFE (Wikipedia, Plain bearing, from McMaster-Carr catalogue data).
  - Plastic plain bearings (igus): housing hole H7, shaft at least h9, press-fit oversize up to 2% of the inside diameter; press in with a flat punch, not a centring pin (igus iglidur tolerances).
  - Deep-groove ball bearings take axial (end) loads of about 50% of their radial rating, or 25% for small or light bearings (Wikipedia, Ball bearing, citing SKF).
  - Tight fit on the ring that turns relative to the load, looser fit on the other ring; too loose and the ring creeps round in its seat, too tight and it can crack or lose its internal clearance and overheat (NSK).
  - 608 bearing: 8 mm bore, 22 mm outside diameter, 7 mm wide; SKF 608-2Z rated 3.45 kN dynamic, 1.37 kN static (123bearing); the usual skateboard wheel bearing (Wikipedia).
  - Precision shoulder screws: shoulder 0.013 to 0.038 mm under nominal and shoulder length 0.013 to 0.063 mm over nominal (metric), so a part of nominal size turns freely; commercial shoulder lengths are only +/-0.125 mm, so a full-width part can bind (Machine Design).
  - Bolt as a pivot: make the smooth (unthreaded) grip length about equal to the thickness of the parts and washers it passes through (Wikipedia, Bolt).
  - Printed pivots: at least 0.3 mm clearance for moving parts (Prusa); drill critical upright holes to size, and use off-the-shelf pins below 5 mm diameter (Hubs).

### When to use it

- **everyday_examples**: 
  - Skateboard and inline-skate wheels, each running on two 608 ball bearings (Wikipedia, Ball bearing)
  - Fidget spinners, built around ball bearings (Wikipedia, Ball bearing)
  - The lever of a door handle turning on its spindle (Wikipedia, Revolute joint photo) *(unverified parts omitted)*
- **when_to_use**: Use a plain pivot (a bolt, shoulder screw or pin in a hole, ideally with a bushing) for levers, arms, linkages, folding parts and anything that turns slowly, occasionally or back and forth: it is cheap, compact and strong for its size (Wikipedia, Plain bearing). A shoulder screw is the neat choice when a part must turn on a bolt without being clamped (Machine Design). Use ball bearings for anything that spins continuously or fast, such as wheels, pulleys, spools, fans and drive shafts, where low friction and accurate location matter; robotics guides recommend bearings for drivetrains and high speeds and bushings for low loads or tight budgets (GM0).
- **when_not_to_use**: Don't run a plain printed pin in a printed hole fast and continuously under load: it heats and wears (see the PV limits); use a ball bearing or a bronze or plastic bushing. Don't hang a tipping load on a single ball bearing; use two spaced apart, or a turntable bearing for a wide, flat turning platform. Ball bearings that only rock back and forth over a small angle, or sit still while vibrating, suffer false brinelling (Wikipedia), so a bushing may be better there. For tiny angles with no play and no wear, use a flexure hinge; for straight-line motion, use linear guides; for a pivot that must also tilt, use a ball-and-socket joint or rod end.
- **environment_limits**: Plastic bushings: nylon is listed for about -29 to 121 °C and acetal about -29 to 82 °C, while SAE 841 bronze is listed to about 104 °C (Wikipedia, Plain bearing table, converted from °F). Plastic bearings creep, expand with heat and soften when warm (Wikipedia, Plain bearing), and absorb moisture; igus sizes its bushings to cope with humidity up to 70% (igus). Printed PLA starts to give at about 60 °C and PETG at about 80 °C (CNC Kitchen). Ball bearings: grit and water in the lubricant greatly shorten their life, and seals help but add friction (Wikipedia, Rolling-element bearing); vibration while standing still presses the grease out (false brinelling; Wikipedia). *(unverified parts omitted)*
- **safety_notes**: Spinning parts on bearings can catch hair, loose clothing or fingers. *(unverified parts omitted)*
- **common_failures**: Ball bearings: a ring fitted too loosely creeps round in its seat and wears it, and one fitted too tightly cracks or runs hot (NSK); dirt and water ruin them (Wikipedia); a single bearing under a sideways twist collapses (Wikipedia, Ball bearing). Printed parts: pockets come out too tight or too loose (Hackaday, crush ribs), and printed bearings fuse or bind unless their tolerances are calibrated (Printables 276409). *(unverified parts omitted)*
- **related**: 
  - Clevis joint (fork-and-pin joint): a pin supported on both sides by a fork, so it is loaded in double shear
  - Knuckle hinge (butt hinge): a pin pivot spread along a door edge through interleaved knuckles
  - Turntable bearing (lazy-Susan bearing, slewing ring): a thin, wide ring bearing for platforms and tipping loads
  - Roller clutch (one-way bearing): a bearing that turns freely one way and locks the other
  - Flexure hinge: bends instead of sliding or rolling; no play and no wear, but only a small angle
  - Rolling-contact joint (CORE, Jacob's-ladder hinge): two curved surfaces roll on each other instead of turning on a pin
  - Linear guides: bushings and bearings for straight-line motion
  - Press fit (interference fit): how bearings and bushings are usually held in place
  - Retaining ring (circlip, E-clip): stops a pin or shaft sliding out
  - Shaft-to-hub joints (key, set screw, D-flat, clamp hub): fix a gear or wheel to the turning shaft
  - Mid-print embedding: trapping a bearing inside a printed part
  - Rod end and ball link, Ball-and-socket joint: pivots that also allow tilt

### Pictures, videos and models

- **links**: 
  - [File:BallBearing.gif (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:BallBearing.gif): Animation of a ball bearing turning, with the balls rolling between the rings *(licence: CC BY-SA 3.0 (PlusMinus))*
  - [File:Radial-deep-groove-ball-bearing din625-t1 2rs 120.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Radial-deep-groove-ball-bearing_din625-t1_2rs_120.png): Cut-away drawing of a deep-groove ball bearing with rubber seals on both sides (2RS) and a riveted steel cage *(licence: CC BY 2.5 (Silberwolf))*
  - [File:Revolute Pin Joint.png (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Revolute_Pin_Joint.png): Cut-away view of a pin joint with shoulders (a pin turning in a hole) *(licence: CC BY-SA 4.0 (I.Elgamal))*
  - [File:Bearing Spacer Proper Length - inline skate wheel assembly - with labels.svg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Bearing_Spacer_Proper_Length_-_inline_skate_wheel_assembly_-_with_labels.svg): Labelled cross-section of an inline-skate wheel on two ball bearings with a spacer between them *(licence: CC BY-SA 4.0 (Fred Hsu))*
  - [How Ball Bearings Work | 3D Animation | Working Principle (saVRee, YouTube; title confirmed through YouTube oEmbed, video not watched)](https://www.youtube.com/watch?v=lIEHscqWJAk): 3D animation of the parts of a ball bearing and how they work *(licence: link only (standard YouTube licence))*
- **make_it_yourself**: 
  - [Ultimate 608 Bearing with Calibration Kit V2 (Matvey Kukuy, Printables) (URL linked from the Hackaday article; page not opened, details read through the Printables API)](https://www.printables.com/model/276409-ultimate-608-bearing-with-calibration-kit): Print-in-place 608-size bearings plus 64 calibration models and a test tool to find the radial and tenon tolerances that work on your printer *(licence: CC0 (Creative Commons Public Domain))*
  - [608 bearing tolerance tester (Handy Maker, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1293573-608-bearing-tolerance-tester): Small test prints of a 608 bearing's outer and inner fits in 0.1 mm steps, to find how to scale your bearing pockets *(licence: CC BY-SA)*
  - [3D Printed Bearing (without balls) / Bushings (SabLei, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/693434-3d-printed-bearing-without-balls-bushings): Print-in-place ball-less bearings (bushings) in many standard bearing sizes, freed by squeezing with pliers and lubricated with PTFE or silicone spray *(licence: CC BY-NC-SA)*
- **diagram_idea**: Side-by-side cut-aways of the same arm on a pivot: left, a shoulder screw through a bronze bushing with the sliding contact line highlighted; right, the arm on a ball bearing with the balls rolling between inner and outer rings, arrows showing the radial load, and a note that the ring turning relative to the load gets the tight fit.
- **sources**: 
  - https://en.wikipedia.org/wiki/Revolute_joint
  - https://en.wikipedia.org/wiki/Plain_bearing
  - https://en.wikipedia.org/wiki/SAE_841
  - https://en.wikipedia.org/wiki/Rolling-element_bearing
  - https://en.wikipedia.org/wiki/Ball_bearing
  - https://en.wikipedia.org/wiki/Bolt_(fastener)
  - https://commons.wikimedia.org/wiki/File:BallBearing.gif
  - https://commons.wikimedia.org/wiki/File:Radial-deep-groove-ball-bearing_din625-t1_2rs_120.png
  - https://commons.wikimedia.org/wiki/File:Revolute_Pin_Joint.png
  - https://commons.wikimedia.org/wiki/File:Bearing_Spacer_Proper_Length_-_inline_skate_wheel_assembly_-_with_labels.svg
  - https://commons.wikimedia.org/wiki/File:Deep_Groove_Ball_Bearing_Structure.png
  - https://commons.wikimedia.org/wiki/File:Pivotement_charge_radiale.svg
  - https://www.123bearing.com/bearing-housing/deep-groove-bearing/single-row/608-2z-skf
  - https://www.nsk.com/tools-resources/abc-bearings/fits-and-internal-clearance/
  - https://www.machinedesign.com/fastening-joining/article/21834322/the-basics-of-shoulder-screws
  - https://www.igus.eu/plain-bearing/wiki/tolerances
  - https://blog.igus.eu/tribo-filament-iglidur-i150-in-wear-test-test-video/
  - https://gm0.org/en/latest/docs/hardware-components/kit-and-hardware-guide/kit-glossary.html
  - https://gm0.org/en/latest/docs/common-mechanisms/power-transmission/shaft-retention.html
  - https://idighardware.com/2016/07/decoded-nfpa-80-requirements-for-hinges/
  - https://hackaday.com/2022/09/17/3d-printable-bearings-that-actually-work-no-cad-tweaking-required/
  - https://hackaday.com/2020/10/15/adding-crush-ribs-to-3d-printed-parts-for-a-better-press-fit/
  - https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - https://www.youtube.com/watch?v=lIEHscqWJAk
  - https://api.printables.com/graphql/

### Other info

- **Fields with unverified parts:** aliases, common_failures, environment_limits, everyday_examples, load, making_tips_3d_printing, off_the_shelf_parts, processes, reuse_cycles, safety_notes

## 285 Multi-turn rotation limiter (travelling-nut and stacked-ring stops)

*hinges & pivots.* A hard stop that lets a shaft turn more than one full turn and then halts it, for example so a robot turret can't wind its cables off

*Also covers:* Also covers stop work on clock mainsprings; the Geneva stop is covered under Geneva drive

### What it is

- **plain_name**: A stop that lets a shaft, knob or turret go round several full turns and then stops it dead at each end, so the wires, hoses or spring attached to it can't be wound up too far
- **term**: Multi-turn rotation limiter (multi-turn stop, shaft rotation limiter)
- **aliases**: 
  - multi-turn stop / multiturn stop
  - multi-turn limit stop / rotary travel limit stop (patent wording)
  - shaft rotation limiter (Nguyen Duc Thang's animations)
  - travelling-nut stop (traveling nut, running nut; 'jam nut limit stop' when the nut jams against the end)
  - stacked-ring stop / stacked-washer stop / pinned-disc stop (a stack of washers 'each with an extending ear')
  - hunting-tooth stop / differential gear stop (two gears with slightly different tooth counts)
  - stop work / stopwork / winding stops (watch and clock mainsprings; German 'Stellung')
  - Maltese-cross or Geneva stop work (the Geneva-stop version is covered under Geneva drive)
  - geared stop work (IWC, 1904)
  - zero stop (rifle-scope adjustment turrets)
  - hard stop for a joint that turns more than a single revolution (robotics)
  - mechanical stopper for a robot rotary joint
- **family**: hinges & pivots
- **other_families**: seals & pass-throughs, springs & energy storage, brakes, dampers & speed control, locating & alignment
- **one_liner**: A turn-counting end stop: a nut that travels along a thread, a stack of rings that pick each other up one turn at a time, or a pair of gears that slowly drift out of step lets a shaft turn freely for a set number of turns (more than one) and then blocks it solidly, in both directions.
- **complexity**: A few parts. Travelling-nut type: a threaded section on the shaft, a nut that is kept from turning (by a guide rod or slot), and two end stops (frame faces, collars, or a pin on the nut meeting a finger on the shaft). Stacked-ring type: a driving pin or lug on the shaft, a stack of loose rings or discs each with its own pin or lug, and one fixed stop on the frame. Gear type: a small gear on the shaft driving a larger gear or worm wheel that carries a stop pin, or two gears with slightly different tooth counts each carrying a stop. Clock and watch stop work: a finger piece on the mainspring barrel arbor and a Maltese-cross wheel, or a wheel with one tall tooth. In Thang's examples the whole thing is driven through a friction slip clutch.
- **how_it_works**: Each design counts turns mechanically and only blocks the shaft when the count reaches either end of the range. In the travelling-nut type (traveling nut), the shaft's thread pushes a nut that cannot turn along the shaft by one thread lead per turn, until the nut reaches a stop at one end or the other. In the stacked-ring type (stacked washers or pinned discs), a lug on the shaft picks up the first ring after nearly one turn, that ring picks up the next ring on the following turn, and so on until the last ring hits a fixed stop, so every ring adds almost one more turn. In gear types, a reduction gear (or two gears with slightly different tooth counts, a hunting-tooth stop) turns a stop so slowly that it only meets its partner after many turns; clock stop work does the same with a Maltese cross that has one wider, blocking arm, or a wheel with one extra-tall tooth that jams in one shallow notch.

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): the shaft, knob or turret turns freely for a set number of turns
  - slow it, stop it or keep its speed steady: it gives a solid end stop (hard stop) at each end of that range, in both directions
  - seal it, or pass cables or fluid through: by stopping a turret or robot joint before the cables or hoses running through it are twisted off, it lets a simple cable loop or cable chain do the job of a slip ring (US10661437B2; Chief Delphi)
- **motion**: rotate: more than one turn but a limited number, in both directions between two hard ends. Examples: between 360 and 720 degrees for a Disney robot joint (US20170138447A1), more than ±360 and less than ±540 degrees for a robot wrist (US10661437B2), about 3 to 17 turns in Thang's six animated limiters, and fifty or more turns between limits for gear-type instrument stops (US3203262A)
- **degrees_of_freedom**: 1: the shaft only turns about its own axis; the nut, rings or gears inside the stop are driven by the shaft and add no independent movement of their own
- **special_behaviour**: 
  - none of the listed behaviours exactly: its trick is counting turns, so it allows several full turns before it blocks rotation, which a simple pin-and-lug stop cannot do
  - motion conversion (e.g. rotary to linear): in the travelling-nut type the shaft's turning becomes slow sliding of the nut along the thread, and it is the nut's travel that reaches the stop
  - fail-safe or breakaway: on robots it is a mechanical backup that still stops the joint if the software limits, encoder or limit switch go wrong; one Chief Delphi team said their mechanical stop 'has already saved our energy chain during software tuning'
  - torque-limiting (slips or clicks at a set force/torque): not built in, but every one of Thang's six shaft rotation limiters drives the shaft through a friction clutch, so the motor can keep turning when the stop is reached
- **holding_principle**: 
  - shape (the parts interlock; form-fit): at the end of the range a pin, lug, tooth or the nut itself butts against a solid stop
  - not a holding joint (it moves or passes on motion): between the two ends the shaft turns freely; it does not hold any position in between
- **input_output**: Not applicable: it does not pass motion on to anything else. Inside, the travelling-nut type moves the nut one thread lead along the shaft per turn (lead is 'the amount of distance travelled per rotation', Wikipedia 'Leadscrew'); the stacked-ring type adds one ring per turn; gear types count turns through a reduction (e.g. a 20-tooth gear driving a 60-tooth stop gear, or a single-start worm driving a 20-tooth worm wheel, Thang). It blocks the shaft in both directions; the stop itself is not a drive, so back-driving does not apply.
- **power**: passive (no power needed): it is purely mechanical, so it still stops the shaft if the motor controller, encoder or limit switch fails. In roller-shutter tube motors the same turn-counting idea works cams and switches that stop the motor instead (Walter Motor)
- **removability**: removable: it is assembled onto the shaft with collars, pins, screws or retaining rings and can be taken off again; clock stop work is held by a screw and can be removed, which lets the mainspring run fully down (NAWCC forum)
- **reuse_cycles**: many times: it is taken apart and reassembled like any shaft fitting; the limit is wear or damage at the impact points, not the assembly
- **seal**: none: it is an open mechanism and seals nothing, although it is often hidden inside a turret base or housing
- **load**: Light to heavy. Instrument stops protect 'delicate low torque instruments' such as precision multi-turn potentiometers, which 'can be damaged if driven into their internal light duty stops' (US3293925A; US3203262A), while robot joints and aircraft actuators use metal stops that take the full drive torque (US10661437B2; Sundstrand's US4932511A). At the moment of impact the whole motor torque and the turret's momentum land on one small pin, lug, tooth or nut face, so that is the weak point. It is only strong in twisting (the direction it stops); side and end loads must be carried by the shaft's bearings.
- **adjustable**: Yes, in most designs. Roller-shutter tube motors set their two limits with adjustment screws that move cams (Walter Motor); the number of turns of a stacked-ring stop changes by about one for each ring added or removed (Thang, 'Shaft rotation limiter 6'); Gear-type stops are fixed by their tooth counts. *(unverified parts omitted)*
- **play_and_precision**: Noticeable end-position play. A travelling nut's end point depends on the thread's backlash, and a nut that runs into a flat face 'can jam so tightly that a large torque is required to move the shaft from its stopped position' (Thang). Gear-finger stops can wedge if the fingers meet close to the line joining the gear centres (US3662610A). *(unverified parts omitted)*
- **access_needed**: end of a tube or shaft: the nut, rings or gears slide onto the shaft, usually at its end or inside the turret base, so you need to reach the shaft end or open the housing
- **materials**: Thang's travelling-nut example uses a rubber ring and an oil-impregnated metal sleeve (grommet) where the nut slides on its guide rod, to soften the impact. Printed versions suit light duty: PETG is tough and fine below about 80 °C, while PLA softens above about 60 °C (Prusa). *(unverified parts omitted)*
- **maker_difficulty**: moderate: the parts are simple (threaded rod and nut, flat rings with pins, or a pair of gears) and print or machine easily, but the stop must survive the full motor torque and the turret's momentum, so you also need a slip clutch or motor current limit and strong metal pins at the impact points

### Making it

- **processes**: 
  - CNC: the traditional way to make metal stops for instruments, robots and actuators (turned rings, milled lugs, cut gears)
  - off-the-shelf part: threaded rod and nuts, shaft collars, dowel pins and a friction slip clutch; the turn-counting mechanism also comes ready-made inside roller-shutter tube motors and as rotary limit switches *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Pick the type: the stacked-ring type is the easiest to print because every ring is a flat washer with one lug or pin; total turns are about (number of loose rings + 1) x (angle each ring can swing) / 360 (Thang, 'Shaft rotation limiter 6'). Use a travelling nut for many turns (more than about 10-20, where a ring stack gets too long, US3203262A), and a gear stop when there is little room along the shaft. 2) Print rings and discs flat on the bed so each lug is built within the layers rather than across them; 4) Give each ring running clearance on the shaft and between neighbouring rings; Prusa suggests starting at 'at least 0.3 mm' for movable parts, so print one test ring first. 5) For a travelling nut, use a metal threaded rod and a metal nut held in a printed carrier that slides along a guide rod or slot, rather than a printed thread; make the stop a sideways pin on the nut that meets a finger on the shaft (a radial stop) instead of letting the nut face jam against a flat end. Keep the pin-to-finger overlap shorter than the thread pitch so the pin clears the finger on the first reverse turn (Thang, 'Shaft rotation limiter 2'). 6) Drive it through a friction slip clutch or set a low motor current limit: all six of Thang's limiters put a friction clutch between the driving pulley and the shaft. 7) Add a rubber ring or soft bumper where the stop hits, as in Thang's 'Shaft rotation limiter 2', to reduce the shock. 8) Use PETG rather than PLA near warm motors or outdoors (PLA softens above about 60 °C and degrades in UV; PETG is fine below about 80 °C; Prusa). 9) Before fitting cables, turn it by hand to each end, count the turns, and check that it backs off easily from both stops. *(unverified parts omitted)*
- **off_the_shelf_parts**: Threaded rod (studding) or a lead screw and nut for the travelling-nut type; set-screw or clamp-type shaft collars as end stops; dowel pins, shoulder screws or spring (roll) pins as stop lugs; flat or thrust washers between stacked rings; a friction slip clutch (friction torque limiter) between motor and shaft; microswitches (limit switches) or a rotary limit switch for an electrical cut-off as well; and, for the cables the stop protects, a cable carrier (drag chain) or spiral (clock-spring) cable, or a slip ring if unlimited turns are needed instead. *(unverified parts omitted)*
- **rules_of_thumb**: 
  - Stacked rings (pinned discs): total turns = (N + 1) x α / 360, where N is the number of idle discs and α is the angle each disc can turn before its pin meets the next one, which depends on the pin diameter and its distance from the shaft centre; 7 idle discs allowed 7.1 turns (Thang, 2700 Animated Mechanical Mechanisms part 1, p. 121, 'Shaft rotation limiter 6').
  - Stacked washers get too long beyond about 10-20 turns: 'the axial length of the stop assembly becomes excessive when more than ten or twenty turns are necessary', and 'where a large number of revolutions, such as fifty or more, are required between limits, more complex arrangements are usually necessary' (US3203262A).
  - Travelling nut: turns available = distance the nut can travel ÷ thread lead (lead = distance travelled per rotation; Wikipedia 'Leadscrew'). Thang's two travelling-nut examples allow about 14 and about 12 turns (Thang part 1, p. 120).
  - Don't let a travelling nut jam against a flat face: it 'can jam so tightly that a large torque is required to move the shaft from its stopped position' (Thang p. 120; US3293925A says the running nut 'actually becomes jammed or wedged against the stops'). Put a stop pin on the nut that meets a rotating finger instead, with the pin-finger engagement shorter than the thread pitch so it clears on the first reverse turn (Thang, 'Shaft rotation limiter 2', p. 120).
  - Single gear stop: the shaft can make fewer turns than the gear ratio allows the stop gear to make one turn; a 20-tooth gear driving a 60-tooth gear with a fixed pin gives about 3 turns, so many turns need a large ratio (Thang 'Shaft rotation limiter 3', p. 120). A single-start worm driving a 20-tooth worm wheel allowed 17 turns (Thang 'Shaft rotation limiter 5', p. 121).
  - Two gears with nearly equal tooth counts (hunting-tooth or differential stop): turns ≈ Z1 / (Z2 - Z1); 30 and 32 teeth give about 15 turns without needing a large ratio (Thang 'Shaft rotation limiter 4', p. 120). Old clock 'Geneva stop works' with one extra-tall tooth and one shallow notch work the same way: the stop jams only when the tall tooth finally lands in the shallow notch (NAWCC forum, 2013).
  - Watch and clock stop work: the finger moves the Maltese cross one step per turn, and a wider arm on the cross locks against the finger, in winding and unwinding alike (Vintage Watch Straps; NAWCC forum). Watch winding mechanisms mostly use a five-slot star wheel (German Wikipedia 'Malteserkreuzgetriebe').
  - Fit a friction clutch or torque limit between the drive and the stopped shaft: all six of Thang's shaft rotation limiters drive the shaft through a friction clutch (Thang pp. 120-121).
  - Gear-finger stops on a high-ratio pair can wedge when the fingers meet close to the straight line joining the gear centres (US3662610A), and stacked-finger or travelling-nut stops on a fast shaft 'add considerable inertia to the power train' (US3662610A).

### When to use it

- **everyday_examples**: 
  - Wind-up clocks and older pocket watches with 'stop work' (a little Maltese cross or star wheel on the spring barrel) that stops the mainspring being wound too tight (Vintage Watch Straps; NAWCC forum)
  - Electric roller shutters and blinds, whose tube motors count turns of the tube with a geared limit mechanism to stop at the top and bottom (Walter Motor)
  - Rifle-scope adjustment turrets with a 'zero stop', which allow nearly 360 degrees with one pin in one track, or nearly 720 degrees with two pins in two tracks (WO2017132316A1)
  - Robot arm wrists and competition-robot turrets that turn more than a full turn but must not twist their cables off (US10661437B2; Chief Delphi)
- **when_to_use**: Use it when something must turn more than one full turn, but not forever: a robot turret, camera pan head, rotating sensor or arm joint whose cables, air hoses or fibres pass through the joint without a slip ring; a multi-turn knob or precision potentiometer you want to protect from being forced past its own light internal stops; a winding drum or spring winder that must stop after a set number of turns; or a clock mainspring. It is cheap, needs no power, and still works if the software or a limit switch fails, so it makes a good backup to software limits, and the stop can also give a known starting position when a machine is switched on (Chief Delphi teams combine hard stops with soft limits and homing).
- **when_not_to_use**: Don't use it when the part must keep turning in one direction forever (a wheel, a fan, a spinning lidar): use a slip ring or rotary union instead. Don't rely on it for accurate positioning: use an encoder, a limit switch or a stepper motor, with the hard stop only as a backup. For less than one full turn, a simple fixed pin-and-lug end stop is simpler. Don't drive a heavy turret into it at full speed with a strong motor: slow down under software control first and fit a slip clutch, or the pin will shear or the nut will jam. If you want the motor switched off rather than the shaft physically blocked, use a rotary limit switch or a travelling-nut limit switch, as in roller-shutter motors.
- **environment_limits**: Printed PLA parts soften above about 60 °C and degrade in UV light; PETG suits most indoor and outdoor use below about 80 °C (Prusa), so avoid PLA near hot motors or in sunlight. *(unverified parts omitted)*
- **safety_notes**: The stop takes the whole motor torque and the turret's momentum at once; a weak pin can shear suddenly and let the cables be torn, so fit a slip clutch or current limit and use metal pins. A travelling nut jammed against its end can release suddenly when forced. *(unverified parts omitted)*
- **common_failures**: 1) A travelling nut jams hard against a flat end face and needs a large torque to free it (Thang; US3293925A): use a sideways pin-and-finger stop. 2) Gear-finger stops wedge instead of stopping cleanly when the fingers meet near the line between the gear centres (US3662610A). 3) A stop pin or lug shears or bends under the motor's full torque and the turret's momentum: use metal pins, a soft bumper and a slip clutch (Thang). 4) The stack gets too long for many turns: beyond about 10-20 turns switch to a travelling nut or gear stop (US3203262A). 7) Roller-shutter limits set with the wrong screw or in the wrong direction, since the screw symbols and directions vary between motors (Walter Motor). *(unverified parts omitted)*
- **related**: 
  - Geneva drive (Geneva stop): a Maltese cross with one slot closed limits winding to a few turns; covered in its own entry (507 Mechanical Movements no. 212)
  - Slip ring and rotary union: lets a shaft turn endlessly while passing power, signals or fluid, so no stop is needed, but it costs more and has sliding contacts
  - Cable loop, spiral (clock-spring) cable or twisting cable chain: carries cables across a turning joint for a limited angle; a multi-turn stop keeps the rotation inside that limit
  - Simple end stop (pin and lug, single-turn stop): blocks rotation after less than one turn; simpler, but can't allow a full turn or more (US3662610A describes fingers that 'limit rotation after slightly less than one turn')
  - Rotary limit switch (as in roller-shutter tube motors): the same turn counting, but it switches the motor off with cams rather than blocking the shaft (Walter Motor)
  - Lead screw and nut: the same thread-and-nut idea, used to move a load rather than to count turns
  - Friction slip clutch: usually fitted with a hard stop so the drive can slip when the stop is reached (Thang)
  - Recoiling click: in watches, a ratchet click with a slotted pivot that lets the barrel back off slightly at full wind; it replaced stop work as a cheaper solution (Vintage Watch Straps)
  - Magnetic rotary hard stop: repelling magnets instead of a solid hit stop a robot axis turning more than 360 degrees without contact noise or wear (CN102458778B)
  - Spring-finger-and-ramp stop: a springy finger rides up onto a raised tang so the part can turn a little more than one full turn before a tab stops it; used on adjustable recessed lights (US10066778B2)

### Pictures, videos and models

- **links**: 
  - [Shaft rotation limiter 6 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=3airCg2Xd-4): CAD animation of the stacked pinned-disc type: 7 idle discs let the shaft turn about 7.1 turns before stopping, driven through a friction clutch *(licence: link only (standard YouTube licence))*
  - [Shaft rotation limiter 1 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=BBYfNYadt0w): CAD animation of a travelling nut moving along a threaded shaft until the frame stops it after 14 turns *(licence: link only (standard YouTube licence))*
  - [Shaft rotation limiter 4 (Nguyen Duc Thang, YouTube thang010146)](https://www.youtube.com/watch?v=go3LyVKVZoA): CAD animation of a two-gear (30 and 32 teeth) differential stop whose stoppers collide after about 15 turns *(licence: link only (standard YouTube licence))*
  - [507 Mechanical Movements, No. 213: another kind of stop for winding watches](https://507movements.com/mm_213.html): 1868 drawing, with an animated version, of a watch winding stop; nos. 212, 214 and 215 show the Geneva stop and other variants *(licence: Book public domain; website animation link only)*
  - [Geneva stop.PNG (Wikimedia Commons, from a 1908 book on clockwork by H. Bock)](https://commons.wikimedia.org/wiki/File:Geneva_stop.PNG): Drawing of a five-spoke Maltese-cross stop work on the barrel of a spring-driven clock *(licence: Public domain in the United States (may not be public domain in some other countries, per the file page))*
- **diagram_idea**: Three small cutaways side by side: a nut walking along a threaded shaft between two stops; a stack of four rings, each with a pin that picks up the next, with a counter reading 'turn 1, 2, 3, 4, stop'; and two gears of 30 and 32 teeth whose stop pins only meet after 15 turns. Above them, a robot turret with a cable loop that stays untangled because the stop halts it.
- **sources**: 
  - https://cs448m.github.io/lectures/machines/doc/1.pdf
  - https://www.youtube.com/watch?v=BBYfNYadt0w
  - https://www.youtube.com/watch?v=bZXCfSEa-OU
  - https://www.youtube.com/watch?v=MVkAum9f_qI
  - https://www.youtube.com/watch?v=go3LyVKVZoA
  - https://www.youtube.com/watch?v=c1Xlah1sOEI
  - https://www.youtube.com/watch?v=3airCg2Xd-4
  - https://en.wikipedia.org/wiki/Mainspring
  - https://de.wikipedia.org/wiki/Malteserkreuzgetriebe
  - https://en.wikipedia.org/wiki/Leadscrew
  - https://www.vintagewatchstraps.com/blogstopwork.php
  - https://mb.nawcc.org/threads/french-striking-carriage-clock-wont-let-down-mainspring.204790/
  - https://mb.nawcc.org/threads/geneva-stop-works-on-a-st-wall-clock.100656/
  - https://507movements.com/toc.html
  - https://507movements.com/mm_212.html
  - https://507movements.com/mm_213.html
  - https://507movements.com/mm_214.html
  - https://commons.wikimedia.org/wiki/File:Geneva_stop.PNG
  - https://www.chiefdelphi.com/t/turret-homing-hard-stop-limit-switch-or-absolute-encoder/516456
  - https://www.chiefdelphi.com/t/questions-about-building-a-turret/510986
  - https://patents.google.com/patent/US3662610A/en
  - https://patents.google.com/patent/US3293925A/en
  - https://patents.google.com/patent/US3203262A/en
  - https://patents.google.com/patent/US4932511
  - https://patents.google.com/patent/US10661437B2/en
  - https://patents.google.com/patent/US20170138447A1/en
  - https://patents.google.com/patent/WO2017132316A1/en
  - https://patents.google.com/patent/CN102458778B/en
  - https://patents.google.com/patent/US10066778
  - https://www.waltermotor.com/tubular-motor/limit-switch/
  - https://help.prusa3d.com/article/pla_2062
  - https://help.prusa3d.com/article/petg_2059
  - https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135

### Other info

- **Fields with unverified parts:** adjustable, common_failures, environment_limits, making_tips_3d_printing, materials, off_the_shelf_parts, play_and_precision, print_in_place, processes, safety_notes, tools_needed

## 296 Knife-edge and jewel pivots (low-friction point pivots)

*hinges & pivots.* A hard sharp edge, or a pointed pin in a hard cup (a jewel), that lets a part rock or turn with almost no friction, as in balance scales and meters

### What it is

- **plain_name**: A part that rocks on a hard, sharp edge resting on a hard flat or groove (like the beam of a balance scale), or spins on a needle-sharp steel point sitting in a tiny hard cup of sapphire or glass (like a compass needle or the pointer of a dial meter), so it moves with almost no friction
- **term**: Knife-edge pivot (knife-edge bearing) and jewel bearing (pivot and jewel, vee jewel bearing)
- **aliases**: 
  - knife edge, knife-edge bearing, fulcrum (of a balance) (Wikipedia 'Weighing scale')
  - pivot and bearing (weighing-scale trade terms); pivot shapes: teardrop (pear-shaped or pippin-shaped) pivot, square (diamond) pivot, block (pentagonal) pivot, triangular knife edge (Rice Lake 'Understanding pivots and bearings')
  - agate plane or agate bearing: the hard flat stone a knife edge rests on (Wikipedia 'Kater's pendulum')
  - jewel bearing, jewelled bearing, jewel pivot, ruby or sapphire bearing (Wikipedia 'Jewel bearing')
  - vee jewel (V jewel) or cup jewel with a cone pivot (conical pivot) (Bird Precision)
  - hole jewel, ring jewel, olive (bombe) jewel, cap jewel, capstone or endstone (Wikipedia 'Jewel bearing'; Bird Precision)
  - pivot-and-jewel meter movement, as opposed to the taut-band movement (Wikipedia 'Galvanometer')
  - Incabloc (brand): a shock-protection system for watch jewels (Wikipedia 'Jewel bearing', see also) *(unverified parts omitted)*
- **family**: hinges & pivots
- **one_liner**: A pivot in which a hardened sharp edge or a fine pointed pin rests on a very hard, smooth seat (agate, steel, sapphire, ruby or glass), touching only along a line or at a point, so a beam, needle or pointer can rock or turn under tiny forces with very low and very consistent friction.
- **complexity**: A few parts. Knife-edge pivot: a hard wedge (the knife edge or 'pivot') fixed to the moving beam, a hard flat or V-shaped seat (the 'bearing') on the stand, and end stops (anti-friction plates) that stop the beam sliding sideways (Rice Lake). Jewel pivot: a hardened shaft ground to a cone point at each end (cone pivots) and two tiny vee jewels of sapphire, ruby or glass, usually set in fine-thread jewel screws, one of them often spring-loaded (Bird Precision 'Vee jewel').
- **how_it_works**: An ordinary pin in a hole rubs all round its surface, and that rubbing (friction) makes the part stick before it moves. A knife edge instead rests on a hard surface along a single line, and as the beam tilts the edge rocks on its tiny rounded tip instead of sliding, so very little resists small movements; 'a knife edge is the traditional solution' for an almost friction-free balance (Wikipedia 'Weighing scale'; Rice Lake). A jewel pivot does the same for a turning shaft: a sharp cone point sits in a hard cone-shaped cup, touching at a tiny spot right on the axis, so the rubbing happens at almost no distance from the centre and the turning resistance is tiny; sapphire's friction against steel is also low and very steady over years (Bird Precision; Wikipedia 'Jewel bearing'). Neither type is clamped together: the weight of the part, or a light spring, keeps the edge or point seated, so they only suit light, gently handled loads.

### Finder attributes

- **job**: 
  - let it move (turn, slide or bend): lets a beam, pointer, needle or small shaft rock or turn with almost no friction, so tiny forces (a few milligrams on a balance, a small current in a meter, the Earth's magnetism on a compass needle) can move it
- **motion**: rotate. Knife edges rock through a small angle; wear increases rapidly if the swing is more than about 5 degrees (Rice Lake). Jewel pivots allow continuous rotation, as in compass needles, meter movements, wind-speed indicators, turbine flow meters and watch wheels (Bird Precision; Wikipedia 'Jewel bearing').
- **degrees_of_freedom**: 1: rotation about the edge line or the pivot axis. Nothing positively holds the parts together: the load presses the edge into its seat, end stops (anti-friction plates) stop sideways sliding (Rice Lake), and in a jewel pivot the two jewels plus a small set end play stop movement along the axis (Bird Precision).
- **special_behaviour**: 
  - self-aligning or self-centring: a knife edge settles back into the bottom of a V-shaped seat ('a sharp V-shaped pivot seated in a shallower V-shaped bearing', Wikipedia 'Weighing scale'), and a cone pivot centres itself in a vee jewel, whose cone-shaped entry also allows 'a small amount of misalignment, without binding' (Bird Precision)
- **holding_principle**: 
  - not a holding joint (it moves or passes on motion): it only supports and locates a moving part
  - shape (the parts interlock; form-fit): the V-shaped seat or cone-shaped jewel cup locates the edge or point, while gravity or a light spring keeps it seated (Wikipedia 'Weighing scale'; Bird Precision)
- **input_output**: not applicable
- **power**: passive (no power needed)
- **removability**: tool-free quick release for knife edges: a balance beam or a Kater's pendulum is simply lifted off its knife edges (sci-toys microgram balance; Wikipedia 'Kater's pendulum'). Removable for jewel pivots: back off a jewel screw to free the shaft (Bird Precision).
- **reuse_cycles**: many times: nothing is fastened, but each handling risks knocking the edge or point; small pivot points can be flattened by shock (Bird Precision)
- **tools_needed**: None to set a beam on its edges. A small screwdriver to set a jewel pivot's end play with its fine-thread screw (Bird Precision). For making: glue to fix razor-blade edges (sci-toys), a fine stone or a soft-metal lap to hone an edge, never a file (Rice Lake), and a drill to clean out pivot holes (Printables 'Ratio-reading Balance Scale').
- **seal**: none
- **load**: light. Jewel bearings usually carry under 1 g, though sizes up to 10 mm can take about 500 g (Wikipedia 'Jewel bearing'); a small pivot point can be flattened by 50 g under shock or vibration (Bird Precision). Knife edges range from home-made microgram balances (sci-toys) to precision balances up to 5 kg (triangular knife edges; Rice Lake), and hardened heavy versions carry platform and truck scales (Rice Lake). They take only a downward push: no pull at all (the part lifts off) and little sideways force without end stops.
- **adjustable**: yes, slightly. Jewel end play is set with a fine-thread screw to about 0.003-0.004 in (0.08-0.1 mm), about a quarter turn on a 100-thread-per-inch screw (Bird Precision). A balance's sensitivity is set by moving a small weight up or down relative to the edge (a 'gravity ball' or a nut) (Rice Lake; sci-toys). Scale technicians hone a pivot's side to move the edge and correct the lever ratio (Rice Lake).
- **play_and_precision**: Knife edge: no play in the loaded direction and very repeatable if the edges are hard, sharp and parallel; pivots that are not parallel in both planes cause friction, poor repeatability and inconsistent readings (Rice Lake). Jewel pivot: a small deliberate end play (about 0.08-0.1 mm) so the points never lock up, and the vee's cone accepts a little angular misalignment (Bird Precision); hole jewels have a hole slightly larger than the shaft (Wikipedia 'Jewel bearing').
- **access_needed**: both sides for jewel pivots: the shaft is held between two jewel screws, one at each end (Bird Precision). Not applicable for a knife-edge beam, which is simply set down onto its seats from above.
- **materials**: Jewels: synthetic sapphire or ruby (corundum, Mohs hardness 9), hard Pyrex glass or tungsten carbide (Wikipedia 'Jewel bearing'; Bird Precision). Pivots: Niva alloy (a non-magnetic chrome-cobalt alloy, RC 62 or harder), tungsten carbide, 440C or 420F stainless steel (Bird Precision). Maker substitutes: single-edged razor blades as knife edges (sci-toys; Instructables razor-blade balance). *(unverified parts omitted)*
- **maker_difficulty**: easy for a simple knife-edge balance made from razor blades and a threaded rod (sci-toys); hard for precision pivots, because grinding hard edges and polishing pivot points is specialist work, so buy jewels, cone pivots and jewel screws

### Making it

- **processes**: 
  - off-the-shelf part: vee jewels, ring jewels, cone pivots and jewel screws (Bird Precision stocks over 100 vee sizes from 1 to 3 mm outside diameter); single-edged razor blades as maker knife edges (sci-toys)
  - 3D print (FDM): the beam, stand, pans and pointer, with steel edges or jewels glued or clamped in (Printables 'Ratio-reading Balance Scale' prints all the parts and adds steel wire pivots)
  - woodwork and simple metalwork: home-made balances on threaded rod, washers and razor blades (sci-toys; Instructables razor-blade beam balance)
  - CNC and precision grinding: heavy scale pivots are hardened, ground and lapped (Rice Lake)
- **print_in_place**: Print-in-place balance scales exist but use ordinary printed pin pivots instead (Printables 'Functional Print-in-Place Balance Scale', not a knife edge). *(unverified parts omitted)*
- **making_tips_3d_printing**: 1) Print the beam, stand and pans, but make the edge and the seat from hard materials: a razor blade or ground steel edge resting on hard steel, glass or stone. 2) Copy the sci-toys layout: two razor blades glued edge-up into slotted screws on the stand, and a third razor blade clamped across the beam between washers and nuts, so edge rests across edge (sci-toys). 3) Put the edge just above the beam's centre of gravity: the closer, the more sensitive; if a pushed-down end stays down, the pivot is below the centre of gravity and must be raised (sci-toys). Make the edge height or a counterweight adjustable with a screw and nut (sci-toys; Rice Lake 'gravity ball'). 4) Keep the beam light and stiff ('Lighter is better', Printables 'Ratio-reading Balance Scale'); print long beams flat with a brim for bed adhesion (Printables balance models). 5) Make both edges and seats parallel and level: print the edge slots in the same print as the beam so they line up, and level the seats (Rice Lake: pivots must be parallel in two planes). 6) Add end stops so the beam can't slide sideways: a small plate touching the tapered end of the edge at a single point (Rice Lake anti-friction plate). 7) For a pointer or needle that turns, buy a cone pivot and a vee jewel and press the jewel into a printed or drilled seat, with the other end in an adjustable screw so you can set a tiny end play (Bird Precision). 9) Shield it from drafts and keep it away from foot traffic: sensitive balances are disturbed by air currents and people walking past (sci-toys). *(unverified parts omitted)*
- **off_the_shelf_parts**: Search: 'vee jewel bearing' (sapphire or glass), 'cone pivot' or 'conical pivot' (single cone and double-ended), 'jewel screw' (fixed or spring-loaded), 'ring jewel', 'olive jewel', 'endstone' or 'cap jewel' (Bird Precision; Wikipedia 'Jewel bearing'). For scales: 'scale pivots and bearings' (teardrop, block, square pivots; anti-friction plates) (Rice Lake). Maker substitutes: 'single-edge razor blades' (sci-toys). Related ready-made instruments: watch movements (17 jewels in a typical fully jewelled time-only watch) and moving-coil panel meters with sapphire vee bearings (Wikipedia; Bird Precision).
- **rules_of_thumb**: 
  - Edge and seat angles: the knife edge must be sharp enough and the seat's angle open enough (obtuse) to give the needed swing and tolerate dirt; a blunter edge lasts longer; wear increases rapidly if the rocking angle is more than about 5 degrees (Rice Lake 'Understanding pivots and bearings', section 2.2).
  - Hardness: knife edges must stand pressures 'on the order of 22 tons/cm2'; make the pivot as hard as its bearing, and harden only the edge and contact point, because a fully hardened part becomes brittle and can crack under extreme loads (Rice Lake, sections 2.2-2.3).
  - Seat shape: for highest accuracy, a sharp V-shaped pivot sits in a shallower V-shaped bearing (Wikipedia 'Weighing scale'); for shock-loaded scales use round-bottom V bearings, not sharp-bottom ones, which the edge jams into as it wears (Rice Lake, section 2.4.2).
  - Alignment: the pivots on a lever must be parallel both in spacing and in level; a tapered pivot end should touch its anti-friction plate at only one point (Rice Lake, sections 2.4.2 and 2.5).
  - Sensitivity: put the pivot very close to, but above, the moving part's centre of gravity; the closer, the more sensitive (sci-toys), and the more mass below the pivot, the less sensitive (Rice Lake, section 3.1). The sci-toys razor-blade balance resolves less than a milligram and, with care, about 10 micrograms.
  - Vee jewels: cone angle typically 85 degrees with a 55-degree pivot cone, which allows a little misalignment (Bird Precision 'Vee jewel').
  - Point radius ratio: make the jewel's tip radius about 3 times the pivot point's radius, e.g. a 0.002-0.003 in (0.05-0.08 mm) point in a 0.006-0.009 in (0.15-0.23 mm) vee; too high a ratio gives over-sensitivity, poor repeatability and easy damage, too low a ratio gives a 'sticky' movement (Bird Precision 'Vee bearing design considerations'; 'Vee jewel').
  - Load: glass vees for moving parts under 200 mg, sapphire above that; small points of 0.0008-0.002 in (0.02-0.05 mm) can be flattened by 50 g or more, so heavier parts need points of about 0.005-0.007 in (0.13-0.18 mm) (Bird Precision).
  - Contact pressure: 40 g on a 60-degree steel pivot with a 0.002 in point gives about 1,237 kg/mm2, but a 0.0032 in point cuts it to 131 kg/mm2; a bigger point lasts longer but adds friction (Bird Precision, paraphrasing V. Stott, 'The Use of Pivots and Jewels in Instruments and Meters').
  - Pivot finish and hardness: points hardened to RC 45 or better and polished to about 4 micro-inch (about 0.1 micrometre) (Bird Precision).
  - End play: about 0.003-0.004 in (0.08-0.1 mm), roughly a quarter turn on a 100-thread-per-inch jewel screw; never lock the points up (Bird Precision).
  - Size and friction: jewel bearing bores are typically under 1 mm for loads under 1 g (up to about 10 mm and 500 g); static friction of sapphire on steel is 0.10-0.15 against 0.35 for brass on steel (Wikipedia 'Jewel bearing'); Bird quotes about 0.12.

### When to use it

- **everyday_examples**: 
  - A traditional two-pan balance scale, and old shop and platform scales, whose beams rock on knife edges (Wikipedia 'Weighing scale'; Rice Lake)
  - The needle of an analogue (moving-coil) panel meter, whose coil turns on cone pivots in sapphire vee jewels (Bird Precision, figure 1; Wikipedia 'Galvanometer')
  - A compass needle balanced on a pivot (Bird Precision lists compasses and dip needles)
  - A mechanical watch marked '17 jewels', which has synthetic ruby bearings for its wheels and balance (Wikipedia 'Jewel bearing')
- **when_to_use**: Use a knife edge or jewel pivot when tiny forces must move something reliably and repeatably: balances and weighing beams, pointers and meter needles, compass and dip needles, wind vanes and wind-speed cups (Bird Precision's anemometer example), and pendulums (Kater's pendulum hung on knife edges on agate plates; Wikipedia). They give very low and, importantly, very consistent friction (sapphire has 'highly consistent static friction', Wikipedia 'Jewel bearing'), which matters more than strength in measuring instruments. Knife edges suit small rocking movements; jewel pivots suit small shafts that turn continuously under very light load. Jewels can even run without oil and in corrosive surroundings (Wikipedia).
- **when_not_to_use**: Don't use them for heavy, shock or vibrating loads, for parts that get carried and dropped, or where the joint must resist a pull: jewels are brittle (Wikipedia) and small points flatten under shock (Bird Precision); use a plain pin pivot or a ball bearing instead. Don't use a knife edge for large swings: wear rises fast beyond about 5 degrees (Rice Lake); use a ball bearing. Ball bearings, though, have their own starting resistance in tiny, slow, oscillating movements (Bird Precision says miniature ball bearings have starting-torque problems 'due to detent of the balls'), so for small angles with no friction and no wear consider a flexure hinge, and for rugged meters a taut band, which replaced jewel pivots and hairsprings because it is 'more rugged for field use' (Wikipedia 'Galvanometer'). If you can't make the edge and seat from hard materials, a well-made pin pivot in a drilled printed hole is a fair compromise (Printables balance models use steel wire or nails as pins).
- **environment_limits**: Rust is the main enemy of steel pivots and bearings: they are nickel-plated for storage and greased in service (Rice Lake). Dirt build-up stops edges seating, which is one reason seats are given an open angle (Rice Lake). Sensitive balances are upset by drafts, vibration and people walking by (sci-toys), and analytical balances sit inside a draft shield (Wikipedia 'Weighing scale'). Sapphire jewels have good temperature stability and can run without lubrication and in corrosive environments, but are brittle (Wikipedia 'Jewel bearing'). In compasses and meters, pivots should be non-magnetic and corrosion-resistant (Bird Precision). *(unverified parts omitted)*
- **safety_notes**: Razor blades and ground knife edges are very sharp: sci-toys warns to be 'very careful' when cutting a notch in a razor blade and keeps the cardboard guards on the base blades until the beam is fitted (sci-toys). *(unverified parts omitted)*
- **common_failures**: Edge or point dulled, flattened or chipped by overload or shock: a truck-scale knife edge flattens on first loading, and small instrument points flatten at 50 g under shock; use a bigger point radius or spring-loaded jewels (Rice Lake; Bird Precision). A groove worn into a seat that is softer than the edge, so the edge binds (Rice Lake). Pivots not parallel, so the beam rubs, sticks and gives inconsistent readings (Rice Lake). Rust or dirt in the contact (Rice Lake). Beam sliding sideways and rubbing its frame without end stops (Rice Lake). Jewel end play screwed down too tight, locking and damaging the points (Bird Precision). Brittle jewels cracked by knocks (Wikipedia). A balance that tips and stays over because its pivot is below the centre of gravity, or is sluggish because too much mass hangs below the pivot (sci-toys; Rice Lake). Drafts and vibration making a sensitive balance wander (sci-toys).
- **related**: 
  - Plain pivot and rolling bearing (pin in a hole, ball bearing): stronger and holds against pull, but with more friction and, in ball bearings, a 'detent' at very small movements
  - Flexure hinge (notch, leaf-spring or cross-spring pivot): bends instead of rocking, so it has no friction or wear and no lubrication, but only turns a small angle and has a springy return force
  - Taut-band suspension: a thin metal strip under tension replaces jewel pivots and hairsprings in rugged meters (Wikipedia 'Galvanometer')
  - Rolling-contact joint: two curved surfaces rolling on each other, another low-friction pivot without a pin
  - Kinematic coupling (balls in V-grooves): also uses hard point contacts on hard seats, but to locate parts exactly rather than to let them turn
  - Escapement: the watch and clock mechanism whose pallets and wheels usually run in jewel bearings *(unverified parts omitted)*

### Pictures, videos and models

- **links**: 
  - [Kater pendulum (Wikimedia Commons, drawing from William Watson's 'A Textbook of Physics', 1920)](https://commons.wikimedia.org/wiki/File:Kater_pendulum.png): Labelled drawing of a Kater's pendulum with two opposing knife-edge pivots (a), adjustment weights, bob and pointers *(licence: Public domain)*
  - [Watch jewel bearing.svg (Wikimedia Commons, by Chetvorno)](https://commons.wikimedia.org/wiki/File:Watch_jewel_bearing.svg): Cross-section of a watch hole jewel: a doughnut-shaped synthetic ruby pressed into the plate, with an oil cup holding oil round the shaft *(licence: Public domain)*
  - [Watch jewel bearing and capstone.svg (Wikimedia Commons, by Chetvorno)](https://commons.wikimedia.org/wiki/File:Watch_jewel_bearing_and_capstone.svg): Cross-section of a hole jewel with a capstone (cap jewel) on the end, so the pivot tip, not its shoulder, bears on the jewel *(licence: Public domain)*
  - [Vee Jewel: Sapphire and glass vee jewels, design considerations (Bird Precision, PDF)](https://catalog.birdprecision.com/Asset/vee_jewel--1-.pdf): Cutaway of a moving-coil meter movement on sapphire vee bearings, vee jewel nomenclature, end-play adjustment and spring-loaded shock protection drawings *(licence: link only)*
  - [Technical Support: Understanding Pivots and Bearings (Rice Lake Weighing Systems, PDF)](https://www.ricelake.com/media/a4vbatqa/2026_technical_support.pdf): Drawings of teardrop, square, block and triangular knife-edge pivots, anti-friction plates, worn versus new pivots, and parallel pivot alignment *(licence: link only)*
- **make_it_yourself**: 
  - [A Homemade Microgram Balance (sci-toys.com)](https://sci-toys.com/scitoys/scitoys/mathematics/microgram_balance/balance.html): Step-by-step build of a balance from a threaded rod, washers, nuts, soda-can pans and three single-edged razor blades used as knife edges; resolves less than a milligram *(licence: not shown on page)*
  - [Razor Blade Equal-Arm Beam Balance Micro Scale (Instructables, 2013)](https://www.instructables.com/Razor-Blade-Equal-Arm-Beam-Balance-Micro-Scale/): Build of a 24-inch equal-arm micro balance on an aluminium level base, with razor blades as knife edges on adjustable threaded support rods *(licence: not shown on page)*
  - [Ratio-reading Balance Scale (Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/171329-ratio-reading-balance-scale): Fully printable balance that reads the ratio of two weights; uses 1.5-2 mm steel wire as pin pivots in drilled-out holes and a bolt as counterweight, a useful comparison with a knife edge *(licence: CC BY-NC-SA)*
- **diagram_idea**: Two close-up cross-sections side by side: a balance beam's triangular knife edge rocking in a wider V-shaped agate seat, and a cone-pointed shaft end sitting in a cone-shaped sapphire cup, each with a magnified circle showing the tiny rounded tip touching at a line or point, compared with a pin rubbing all round in a hole.
- **sources**: 
  - https://en.wikipedia.org/wiki/Weighing_scale
  - https://en.wikipedia.org/wiki/Jewel_bearing
  - https://en.wikipedia.org/wiki/Kater%27s_pendulum
  - https://en.wikipedia.org/wiki/Galvanometer
  - https://www.ricelake.com/media/a4vbatqa/2026_technical_support.pdf
  - https://catalog.birdprecision.com/Asset/vee_jewel--1-.pdf
  - https://cdn.thomasnet.com/ccp/00400419/38872.pdf
  - https://sci-toys.com/scitoys/scitoys/mathematics/microgram_balance/balance.html
  - https://www.instructables.com/Razor-Blade-Equal-Arm-Beam-Balance-Micro-Scale/
  - https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
  - http://thrinter.com/creep-abs-pla-petg-alloy-910/
  - https://www.printables.com/model/171329-ratio-reading-balance-scale
  - https://www.printables.com/model/1465894-balance-scale
  - https://www.printables.com/model/1029836-educational-balance-scale
  - https://www.printables.com/model/1766744-functional-print-in-place-balance-scale-with-weigh
  - https://commons.wikimedia.org/wiki/File:Kater_pendulum.png
  - https://commons.wikimedia.org/wiki/File:Watch_jewel_bearing.svg
  - https://commons.wikimedia.org/wiki/File:Watch_jewel_bearing_and_capstone.svg

### Other info

- **Fields with unverified parts:** aliases, environment_limits, making_tips_3d_printing, materials, print_in_place, related, safety_notes

