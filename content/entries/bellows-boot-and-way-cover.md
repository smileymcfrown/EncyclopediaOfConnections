---
title: Bellows boot and way cover
description: A flexible, pleated sleeve clamped to a fixed part at one end and to the moving part at the other, so its folds
  open and close as the part slides or bends, keeping dirt, chips and water out and grease in without any rubbing seal.
num: 290
term: Bellows boot (protective bellows, convoluted boot) and way cover bellows; called a gaiter on cars
plain_name: 'A folded, concertina-shaped rubber or fabric sleeve fitted over a moving rod, screw, slide or joint: it stretches
  out and squashes up as the part moves, so dust, grit, metal chips and water stay off the moving parts and the grease stays
  in'
aliases:
- bellows, protective bellows, bellows cover, bellows boot
- gaiter (the usual automotive name, e.g. CV gaiter, steering-rack gaiter, gear-stick gaiter) (Dynatect; Wikipedia)
- CV boot (constant-velocity joint boot), driveshaft or axle boot
- rubber boot, dust boot, rod boot, cylinder rod boot, shock-absorber boot or dust cover
- convoluted boot, convoluted rubber bellows, molded rubber bellows
- way cover, way cover bellows, machine way cover, accordion way cover, concertina cover
- rail cover, linear rail bellows, lead screw or ball screw bellows
- sewn bellows, sewn-folded bellows, heat-sealed bellows, metal-shielded bellows
- zippered bellows (fits without taking the machine apart)
- 'Faltenbalg (German: bellows or gaiter); Achsmanschette (German: axle boot)'
- Gortite (brand, Dynatect)
family: seals & pass-throughs
other_families: [compliant mechanisms & flexures]
finder:
  job:
  - seal it, or pass cables or fluid through
  motion: flex
  special_behaviour: []
  holding_principle: [not a holding joint, friction or clamping, magnetic]
  reuse_cycles: many times
  seal: dust-resistant
  access_needed: end of a tube or shaft
  print_in_place: 'yes'
  maker_difficulty: easy
  processes: [off-the-shelf part, 3D print (FDM)]
  connects: [not applicable]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [hand tools]
  load_max: light
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming:
  tools:
    kind: source uncertain
    reason: '`tools_needed` is marked [uncertain] here: "…tted with the driveshaft removed and secured with special boot clamps
      [uncertain: not checked in an opened sou…"'
  usual_process:
    kind: best guess
    reason: first-listed process is off-the-shelf, but `print_in_place` is yes
confirmed: []
open_points:
- kind: content
  note: '*Bellows boot*: `other_families` lists compliant mechanisms & flexures (the agent''s choice, not asked for in the
    outline notes). Likewise *Bellows and inflatable actuators* adds springs & energy storage.'
uncertain_fields: [degrees_of_freedom, tools_needed]
diagram_idea: 'A lead screw with a moving carriage, drawn twice: carriage at the left with the bellows on its right stretched
  out long, then carriage at the right with the bellows squashed into a short stack, with labels for extended length, retracted
  (stack) length and a vent hole, and grit bouncing off the folds.'
links:
- url: https://commons.wikimedia.org/wiki/File:2008-04-23_Cracked_CV_boot.jpg
  title: 2008-04-23 Cracked CV boot (Ildar Sagdejev; Wikimedia Commons)
  shows: Photo of a cracked rubber CV boot on a car axle, showing how the folds split with age
  license: CC BY-SA 4.0
- url: https://commons.wikimedia.org/wiki/File:Fahrzeugtechnik_Vorderachse.jpg
  title: Fahrzeugtechnik Vorderachse (Btr; Wikimedia Commons)
  shows: Labelled photo of a car's driven front axle, with the axle boot (Achsmanschette, item b) on the driveshaft
  license: CC BY-SA 2.5
- url: https://commons.wikimedia.org/wiki/File:Faltenbalg_ICE3_innen.jpg
  title: Faltenbalg ICE3 innen (Sebastian Terfloth; Wikimedia Commons)
  shows: Convoluted rubber gaiter on an ICE 3 high-speed train, a large concertina cover over a moving joint
  license: CC BY-SA 2.5
- url: https://dynatect.com/product/way-cover-bellows/
  title: Way Cover Bellows (Dynatect)
  shows: Photos of bellows way covers on machine tools, plus design tips on the extended-to-retracted ratio, venting and stiffener
    profiles
  license: link only
- url: https://www.youtube.com/watch?v=UFrWfnwD3aU
  title: 3D Printed TPU Bellows with PLA Interface Layers - Prints Flat! (Functional Print Friday, YouTube)
  shows: Video of printing TPU bellows between peel-away PLA layers on a two-material printer (title and channel confirmed
    via YouTube oEmbed; video not watched; described by Hackaday)
  license: link only
make_it_yourself:
- url: https://www.printables.com/model/246679-camera-bellows-collapsible-customizable-tpu-vase-m
  title: Camera Bellows - Collapsible & Customizable - TPU Vase Mode - F3d Files included (Kiwi Tinkerer, Printables) (URL
    from Printables API, page not opened)
  what_it_is: Customisable Fusion 360 bellows generator that prints in TPU in vase mode with fold angles under 45 degrees
    and 0.8 mm walls; a good starting point for any round or square printed bellows
  license: CC BY
- url: https://www.printables.com/model/1473674-tpu-accordion-ways-cover-for-mini-metal-lathe-no-p
  title: TPU Accordion Ways cover for Mini Metal Lathe - no PLA Supports (erischilde, Printables) (URL from Printables API,
    page not opened)
  what_it_is: One-piece TPU accordion way cover printed folded, with no supports, held on with bar magnets
  license: Public domain
- url: https://www.printables.com/model/82686-steering-rack-gaiter
  title: Steering rack gaiter (Gt6k, Printables) (URL from Printables API, page not opened)
  what_it_is: TPU steering-rack gaiter in thick-walled and vase-mode versions, with notes on folded re-entrant designs and
    print settings
  license: CC BY
- url: https://www.printables.com/model/1791102-toyota-celica-6th-gen-st20x-shock-boot-front
  title: Toyota Celica 6th Gen ST20x shock boot front (Homunculus, Printables) (URL from Printables API, page not opened)
  what_it_is: Replacement shock-absorber boot printed in 85A TPU without supports, with an editable Onshape model
  license: Public domain
- url: https://www.printables.com/model/1381129-tpu-bellows-test-for-multi-tool-printers
  title: TPU Bellows Test for Multi Tool Printers (Darak, Printables) (URL from Printables API, page not opened)
  what_it_is: Test bellows printed in TPU with PLA interface layers, for two-material or tool-changer printers
  license: CC BY-NC
- url: https://www.printables.com/model/1082528-3dsets-cv-boots-for-most-3dsets-models
  title: 3DSets CV Boots for most 3DSets models (Spiderz Hobbies, Printables) (URL from Printables API, page not opened)
  what_it_is: Small TPU (95A) CV boots for printed RC-car driveshafts, packed with grease to keep dirt out
  license: CC BY-NC
sources:
- https://en.wikipedia.org/wiki/Bellows
- https://en.wikipedia.org/wiki/Constant-velocity_joint
- https://joycedayton.com/sites/default/files/pdfs/current-catalog/BellowsProductLine.pdf
- https://dynatect.com/product/way-cover-bellows/
- https://dynatect.com/categories/bellows-covers/
- https://dynatect.com/categories/machine-tool-protection/machine-way-covers/
- https://rubber-group.com/molded-rubber-bellows/
- https://www.cqm-inc.com/molded-rubber-bellows.html
- https://hackaday.com/2025/05/08/3d-printed-tpu-bellows-with-pla-interface-layers/
- https://www.youtube.com/watch?v=UFrWfnwD3aU
- https://help.prusa3d.com/article/flexible-materials_2057
- https://api.printables.com/graphql/
- https://www.printables.com/model/246679-camera-bellows-collapsible-customizable-tpu-vase-m
- https://www.printables.com/model/1473674-tpu-accordion-ways-cover-for-mini-metal-lathe-no-p
- https://www.printables.com/model/82686-steering-rack-gaiter
- https://www.printables.com/model/1791102-toyota-celica-6th-gen-st20x-shock-boot-front
- https://www.printables.com/model/1381129-tpu-bellows-test-for-multi-tool-printers
- https://www.printables.com/model/1082528-3dsets-cv-boots-for-most-3dsets-models
- https://www.printables.com/model/1610336-adjustable-gear-stick-cover-adjustable-bellow
- https://commons.wikimedia.org/wiki/File:2008-04-23_Cracked_CV_boot.jpg
- https://commons.wikimedia.org/wiki/File:Fahrzeugtechnik_Vorderachse.jpg
- https://commons.wikimedia.org/wiki/File:Faltenbalg_ICE3_innen.jpg
research: research/connection-types/results/Bellows_boot_and_way_cover_gaiter.json
---

A flexible, pleated sleeve clamped to a fixed part at one end and to the moving part at the other, so its folds open and close as the part slides or bends, keeping dirt, chips and water out and grease in without any rubbing seal.

**In plain words:** A folded, concertina-shaped rubber or fabric sleeve fitted over a moving rod, screw, slide or joint: it stretches out and squashes up as the part moves, so dust, grit, metal chips and water stay off the moving parts and the grease stays in. **Proper term:** Bellows boot (protective bellows, convoluted boot) and way cover bellows; called a gaiter on cars.

**Also called:** bellows, protective bellows, bellows cover, bellows boot; gaiter (the usual automotive name, e.g. CV gaiter, steering-rack gaiter, gear-stick gaiter) (Dynatect; Wikipedia); CV boot (constant-velocity joint boot), driveshaft or axle boot; rubber boot, dust boot, rod boot, cylinder rod boot, shock-absorber boot or dust cover; convoluted boot, convoluted rubber bellows, molded rubber bellows; way cover, way cover bellows, machine way cover, accordion way cover, concertina cover; rail cover, linear rail bellows, lead screw or ball screw bellows; sewn bellows, sewn-folded bellows, heat-sealed bellows, metal-shielded bellows; zippered bellows (fits without taking the machine apart); Faltenbalg (German: bellows or gaiter); Achsmanschette (German: axle boot); Gortite (brand, Dynatect).

## How it works

Each end of the boot is sealed to a part: one fixed, one moving. When the moving part travels, the folds (convolutions) open out or stack up like an accordion, so the cover always spans the gap without sliding over anything, and a round boot can also bend with a joint such as a car's CV joint (Wikipedia 'Constant-velocity joint'; Dynatect). Because its volume changes as it moves, air must get in and out: fast or long bellows have vent holes, otherwise trapped air makes them bulge or buckle (Joyce/Dayton; Dynatect). Even fully squashed, the folds take up some length, so the machine must leave room for the compressed bellows (Dynatect).

## Parts

Single piece, or a few parts: the folded sleeve itself (molded rubber; coated fabric sewn, welded or vulcanised into folds; or printed TPU), with a collar or flange at each end, held by hose clamps on round collars, by bolts or Velcro strips on flat flanges, or by magnets on some printed covers. Long way covers add plastic stiffeners or guides inside the folds, sewn tabs, vent holes, zips, and grommets running on a guide wire (Joyce/Dayton; Dynatect; Printables).

## Everyday examples

- The ribbed rubber boot over a car's driveshaft joint (CV boot), and the gaiters on the ends of a steering rack (Wikipedia; Printables)
- The pleated gaiter round a car's gear stick, and the rubber boot over a car's shock absorber (Printables)
- The rubber concertina joint between the two halves of an articulated bus or tram (Wikipedia 'Bellows'; Commons ICE 3 gaiter photo)
- Pleated covers over the slides of lathes and milling machines (Wikipedia 'Bellows'; Joyce/Dayton)

## When to use it

Use a bellows boot whenever a sliding or bending part has to work among dust, chips, coolant or weather: over lead screws, ball screws, linear rails and guide rods on CNC machines, the piston rods of air and hydraulic cylinders, steering racks, shock absorbers, and CV or universal joints (Joyce/Dayton; Dynatect; Wikipedia). It keeps grease in and grit out without rubbing, so it adds no friction the way a wiper or sliding seal does, it copes with bending as well as stretching, and it also covers pinch points (Dynatect). A printed TPU boot is a handy fix for a cracked rubber boot that is no longer sold (Printables shock boot and steering-rack gaiter).

## When not to use it

Avoid it where there's no room for the squashed bellows (a roll-up cover is lower-profile), where hot chips, sparks, weld spatter or dropped tools would cut or burn it (use telescopic steel covers or metal-shielded bellows), or where it would need to hold pressure (use a sealed bellows actuator, a lip seal or an O-ring) (Dynatect). For a rotating shaft that doesn't move along its axis, a radial lip seal, O-ring or labyrinth seal is simpler. For long horizontal travel, plan guides to stop the bellows sagging (Joyce/Dayton).

## Details

- **What it does (jobs):**
  - seal it, or pass cables or fluid through: keeps dust, chips, coolant, grit and water off moving rods, screws, rails and joints, and keeps lubricating grease in (Dynatect; Wikipedia 'Constant-velocity joint'; Wikipedia 'Bellows')
- **Movement:** flex: the folds open and close along the axis as the covered part slides (stretching and squashing), and round boots also bend and allow some sideways offset, as on a CV joint or steering rack; how far it can travel is set by its extended-to-retracted ratio (Dynatect)
- **Directions it can move (degrees of freedom):** 1 for a way cover or rod boot (stretching and squashing along the travel); round molded boots also bend and shift sideways, so in practice up to about 3 ⚑ [uncertain: no source gives a count]
- **Special behaviour:**
  - none: it is a passive cover that simply follows the movement. It also covers pinch points between moving parts (Dynatect), and some molded rubber boots have a 'closed' resting shape that springs back to its short length when released (Dynatect)
- **How it holds:**
  - not a holding joint (it moves with the part it protects)
  - friction or clamping (force-fit): round collars are held by hose clamps; flanges are screwed on or held with Velcro strips (Joyce/Dayton)
  - magnetic: some printed lathe way covers are held on by bar magnets slid into their ends (erischilde, Printables)
- **Input and output:** not applicable
- **Power:** passive (no power needed)
- **Load:** light: it is a cover, not a structural part, and carries no load. Long or horizontal bellows must be supported by stiffener guides or by grommets on a guide wire, or they sag onto the part they protect (Joyce/Dayton; Dynatect crane case study), and a build-up of chips can push a cover right off its rails (Dynatect)
- **Play and precision:** not applicable (it doesn't locate parts or pass on motion); round boots tolerate some bending and sideways offset, and way-cover stiffeners can be shaped to fit a particular rail or dovetail (Dynatect)
- **Taking it apart:** removable: hose-clamped collars, screwed flanges and Velcro come undone easily (Joyce/Dayton). A one-piece boot normally has to be slid off the end of the rod or shaft, so it may mean taking the machine apart; zippered bellows avoid this (Joyce/Dayton)
- **How often it can be reused:** many times: clamps and flanges can be undone and refitted many times; the bellows itself flexes through very many cycles until the material cracks, wears or ages, which happens faster in harsh conditions (Dynatect FAQ)
- **Sealing:** dust-resistant to watertight, depending on construction: sewn fabric bellows have stitch holes and vented bellows let air through, so they keep out dust and chips; 'sealed' constructions (seamless molded rubber, or seams joined by heat or vulcanising) also keep out liquids (Dynatect FAQ; Joyce/Dayton). A printed TPU gaiter was watertight in its maker's test (Gt6k, Printables). It is not a pressure seal, since it normally has to breathe as it moves
- **Adjustable:** no: its length simply follows the movement; the collar position and clamps can be moved when fitting
- **Access needed:** end of a tube or shaft: a one-piece boot slides over the end of the rod, screw or shaft; zippered bellows wrap round from the side when the machine can't be taken apart (Joyce/Dayton)
- **Materials:** Coated fabrics (Joyce/Dayton): neoprene-coated nylon (the standard; -51 to 121 C), Hypalon-coated nylon (corrosive chemicals; to 149 C), silicone-coated fibreglass (to 232 C), PTFE (Teflon)-coated fibreglass (to 260 C; stiff, not for very small bellows), aluminised fibreglass (to 288 C; reflects heat), and vinyl-coated polyester (-34 to 70 C; mainly for platform skirts); Joyce/Dayton says coated-fabric bellows are more durable and abrasion-resistant than molded boots. Molded rubber: nitrile (oil- and abrasion-resistant), neoprene (good against sunlight, ozone and weather), silicone (wide temperature range but poor abrasion and oil resistance) and natural rubber (Rubber Group); also EPDM, and molded boots are typically nitrile (CQM). Polyurethane films; stainless steel plates over fabric folds where hot chips fly (Dynatect). Printed: TPU of about 85A-95A Shore hardness (Printables makers)
- **Heat, cold, water and wear:** Temperature limits of common coated fabrics: neoprene-coated nylon -51 to 121 C, Hypalon-coated nylon to 149 C, silicone-coated fibreglass to 232 C, vinyl-coated polyester -34 to 70 C (Joyce/Dayton). Chemicals: neoprene is attacked by strong oxidising acids, esters, ketones and some hydrocarbons (Joyce/Dayton); silicone isn't for oils or petrol, and nitrile resists oil but has poor flame resistance (Rubber Group). Sunlight and ozone: neoprene resists them well (Rubber Group). Ageing: long exposure to extreme heat or cold degrades bellows faster (Dynatect FAQ), and rubber CV boots crack and split with age and damage (Wikipedia). Printed TPU stays flexible in the cold and resists many solvents, but absorbs moisture (Prusa).

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: molded rubber boots and bellows, and sewn, heat-sealed or vulcanised fabric bellows and way covers (Joyce/Dayton; Dynatect; Rubber Group; CQM)
  - 3D print (FDM): TPU boots, gaiters and accordion covers, printed in vase mode, as folded shapes, or with PLA interface layers on a two-material printer (Printables; Hackaday)
  - sewing: fabric bellows sewn from coated fabric, often with plastic stiffeners at each fold (Joyce/Dayton; Dynatect)
  - molding: rubber bellows made by injection, transfer or compression molding (Rubber Group)
- **Printing it in one piece (print in place):** yes: a TPU bellows prints as one piece and works straight off the printer (vase-mode or folded designs, Printables); the alternating TPU-and-PLA method needs the PLA layers peeled out afterwards (Hackaday)
- **Tools:** a screwdriver or nut driver for hose clamps and flange screws; often none for Velcro, zips or magnets (Joyce/Dayton; Printables). Car CV boots are usually fitted with the driveshaft removed and secured with special boot clamps ⚑ [uncertain: not checked in an opened source]
- **Difficulty:** easy to buy and fit (standard round boots and bellows come in many sizes and lengths); moderate to print in TPU, because flexible filament is slow and fussy, the folds are overhangs, and tall thin parts wobble under the nozzle (Prusa; Gt6k and Homunculus, Printables)

### 3D printing tips

1) Material: TPU of about 85A-95A; softer is more flexible but harder to print (Prusa; Homunculus, Printables). Print slowly with low or no retraction, keep the filament dry, and keep part cooling off (Prusa). 2) Vase mode (a single continuous wall): keep fold overhangs shallower than 45 degrees, aim for about 0.8 mm walls, print the big end on the bed, and use a brim inside and out; with a 0.4 mm nozzle Kiwi Tinkerer used 0.1 mm layers (Printables camera bellows). 3) Folded (re-entrant) designs stop a gaiter going floppy; 0.2 mm layers at about 30 mm/s worked, thicker layers made the overhangs porous, and the tall part wobbled under the nozzle, so slow down travel moves or brace it with blocks halfway up; the result stretched to about twice its printed length (Gt6k, Printables steering-rack gaiter). 4) Print accordion covers in their folded (squashed) shape for more coverage and better springback, with no supports and skins only one line wide (Arachne) on a 0.4 mm nozzle; print with the edges down, and the folds may stick together a little until pulled apart (erischilde, Printables lathe way cover). 5) A two-material printer can print a flat stack of TPU folds separated by PLA interface layers, peeled out afterwards; different TPU brands behaved differently, and feeding TPU through an automatic material changer made it brittle (Hackaday; Darak, Printables). 6) Tall boots print better on a CoreXY printer than on a bed-slinger, where the moving bed shakes the part (Homunculus, Printables shock boot). 7) Print one boot at a time to limit stringing; a printed CV boot can be packed with grease (Spiderz Hobbies, Printables). 8) If the boot moves quickly, leave a small vent so air can get in and out (Joyce/Dayton; Dynatect).

### Buying one (off-the-shelf parts)

Round molded rubber bellows and dust boots (sold by inside diameters and stroke); CV boots and CV boot kits; steering-rack gaiters; shock-absorber dust boots; gear-stick gaiters; sewn round bellows with collar or flange ends (supplied with stainless hose clamps); square, rectangular, U-shaped and C-shaped way covers with stiffeners; zippered bellows; bellows accessories such as vents, internal guides, wire supports, grommets and flange plates; alternatives such as telescopic steel way covers, telescopic spring covers for ball screws, roll-up covers and way wipers (Joyce/Dayton; Dynatect; CQM)

## Rules of thumb

- Design the machine around the bellows' extended-to-retracted ratio: the most common mistake is fixing the rail travel first and leaving no room for the fully squashed bellows, which causes interference and early wear (Dynatect; Joyce/Dayton design tips)
- Allow space for the retracted bellows in the overall design, because adding bellows always increases the space needed (Joyce/Dayton)
- Add vents for fast cycling: holes in one or more folds, or in the stiffeners and guides, let air in and out; otherwise pressure builds up and the cover bulges (a 'caterpillar' effect) or buckles (Joyce/Dayton; Dynatect)
- Support long or horizontal bellows with internal stiffener guides or grommets on a guide wire so they don't sag onto the screw or rail; sewn tabs stabilise long-travel bellows and relieve stress on the seams (Joyce/Dayton)
- Zippered bellows can be fitted without dismantling the machine, but they make the closed length longer (Joyce/Dayton)
- Match the material to heat and dirt: neoprene-coated nylon -51 to 121 C, silicone-coated fibreglass to 232 C, aluminised fibreglass to 288 C, vinyl only -34 to 70 C (Joyce/Dayton); use metal-shielded bellows or telescopic steel covers where hot chips, sparks or dropped tools hit them (Dynatect)
- For molded rubber, choose nitrile for oil, neoprene for sunlight, ozone and weather, and silicone for wide temperatures but not oil or petrol (Rubber Group)
- Inspect and clear chips regularly: built-up chip loads can push a bellows right off its rails (Dynatect)
- Printed TPU bellows: fold overhangs under 45 degrees and walls about 0.8 mm for vase mode (Kiwi Tinkerer, Printables); about 0.2 mm layers at 30 mm/s for a folded gaiter (Gt6k, Printables)

## Common failures

1) Cracks, splits and tears from age, heat, chemicals or damage, letting dirt in and grease out, after which the protected joint wears quickly or fails (Wikipedia 'Constant-velocity joint'; Commons cracked CV boot photo). 2) Not enough room to squash fully, causing interference and early wear: plan for the extended-to-retracted ratio (Dynatect). 3) Trapped air making the cover bulge or buckle on fast moves ('caterpillar' effect): add vents (Dynatect; Joyce/Dayton). 4) Long horizontal bellows sagging and rubbing on the screw or rail: add stiffener guides or guide wires (Joyce/Dayton; Dynatect crane case study). 5) Seams worn out by long travel: sewn tabs limit how far each fold flexes (Joyce/Dayton). 6) Chip build-up pushing the cover off its rails (Dynatect). 7) Printed TPU: porous overhangs from thick layers, floppy folds, and the part wobbling during printing (Gt6k, Printables).

## Safety

Low risk in itself; a bellows usually improves safety by covering pinch points between moving parts (Dynatect). Things to watch: 1) A split boot hides trouble: grit gets in and grease gets out, and the joint or screw underneath wears fast or fails, as with a CV joint (Wikipedia); inspect boots regularly. 2) Hot chips, sparks and weld spatter can burn through fabric covers; use heat-resistant or metal-shielded covers (Dynatect; Joyce/Dayton). 3) Chips piling up can push a cover off its rails into the moving machine (Dynatect).

## Related

- Bellows and inflatable actuators: the same folded shape, but sealed and pumped up so it pushes or lifts instead of just covering
- Gasket and O-ring seal: seal parts that hardly move relative to each other
- Radial lip seal (rotary shaft seal): seals a spinning shaft where it leaves a housing, using a rubbing lip
- Labyrinth seal: a winding, non-contact path that slows dirt and water, with no flexible cover
- Telescopic steel way covers, roll-up covers and way wipers: tougher or lower-profile alternatives for machine slides (Dynatect)
- Cable carrier (drag chain): guides moving cables and hoses rather than covering a moving part
- Cable gland and strain relief: seals where a cable passes through a wall
- Bellows coupling: a metal bellows that joins two shafts and carries turning force; not a cover
- Constant-velocity joint, ball screw and lead screw: common parts that a boot protects

## Make it yourself

- [Camera Bellows - Collapsible & Customizable - TPU Vase Mode - F3d Files included (Kiwi Tinkerer, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/246679-camera-bellows-collapsible-customizable-tpu-vase-m): Customisable Fusion 360 bellows generator that prints in TPU in vase mode with fold angles under 45 degrees and 0.8 mm walls; a good starting point for any round or square printed bellows *(licence: CC BY)*
- [TPU Accordion Ways cover for Mini Metal Lathe - no PLA Supports (erischilde, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1473674-tpu-accordion-ways-cover-for-mini-metal-lathe-no-p): One-piece TPU accordion way cover printed folded, with no supports, held on with bar magnets *(licence: Public domain)*
- [Steering rack gaiter (Gt6k, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/82686-steering-rack-gaiter): TPU steering-rack gaiter in thick-walled and vase-mode versions, with notes on folded re-entrant designs and print settings *(licence: CC BY)*
- [Toyota Celica 6th Gen ST20x shock boot front (Homunculus, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1791102-toyota-celica-6th-gen-st20x-shock-boot-front): Replacement shock-absorber boot printed in 85A TPU without supports, with an editable Onshape model *(licence: Public domain)*
- [TPU Bellows Test for Multi Tool Printers (Darak, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1381129-tpu-bellows-test-for-multi-tool-printers): Test bellows printed in TPU with PLA interface layers, for two-material or tool-changer printers *(licence: CC BY-NC)*
- [3DSets CV Boots for most 3DSets models (Spiderz Hobbies, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1082528-3dsets-cv-boots-for-most-3dsets-models): Small TPU (95A) CV boots for printed RC-car driveshafts, packed with grease to keep dirt out *(licence: CC BY-NC)*

## Pictures, videos and models

- [2008-04-23 Cracked CV boot (Ildar Sagdejev; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:2008-04-23_Cracked_CV_boot.jpg): Photo of a cracked rubber CV boot on a car axle, showing how the folds split with age *(licence: CC BY-SA 4.0)*
- [Fahrzeugtechnik Vorderachse (Btr; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Fahrzeugtechnik_Vorderachse.jpg): Labelled photo of a car's driven front axle, with the axle boot (Achsmanschette, item b) on the driveshaft *(licence: CC BY-SA 2.5)*
- [Faltenbalg ICE3 innen (Sebastian Terfloth; Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Faltenbalg_ICE3_innen.jpg): Convoluted rubber gaiter on an ICE 3 high-speed train, a large concertina cover over a moving joint *(licence: CC BY-SA 2.5)*
- [Way Cover Bellows (Dynatect)](https://dynatect.com/product/way-cover-bellows/): Photos of bellows way covers on machine tools, plus design tips on the extended-to-retracted ratio, venting and stiffener profiles *(licence: link only)*
- [3D Printed TPU Bellows with PLA Interface Layers - Prints Flat! (Functional Print Friday, YouTube)](https://www.youtube.com/watch?v=UFrWfnwD3aU): Video of printing TPU bellows between peel-away PLA layers on a two-material printer (title and channel confirmed via YouTube oEmbed; video not watched; described by Hackaday) *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 2 sentences on this page marked [uncertain].
- ⚑ Finder value `tools` = hand tools (source uncertain): `tools_needed` is marked ⚑ [uncertain] here: "…tted with the driveshaft removed and secured with special boot clamps ⚑ [uncertain: not checked in an opened sou…"
- ⚑ Finder value `usual_process` = off-the-shelf part (best guess): first-listed process is off-the-shelf, but `print_in_place` is yes
- ⚑ Research note: *Bellows boot*: `other_families` lists compliant mechanisms & flexures (the agent's choice, not asked for in the outline notes). Likewise *Bellows and inflatable actuators* adds springs & energy storage.

## Sources

- <https://en.wikipedia.org/wiki/Bellows>
- <https://en.wikipedia.org/wiki/Constant-velocity_joint>
- <https://joycedayton.com/sites/default/files/pdfs/current-catalog/BellowsProductLine.pdf>
- <https://dynatect.com/product/way-cover-bellows/>
- <https://dynatect.com/categories/bellows-covers/>
- <https://dynatect.com/categories/machine-tool-protection/machine-way-covers/>
- <https://rubber-group.com/molded-rubber-bellows/>
- <https://www.cqm-inc.com/molded-rubber-bellows.html>
- <https://hackaday.com/2025/05/08/3d-printed-tpu-bellows-with-pla-interface-layers/>
- <https://www.youtube.com/watch?v=UFrWfnwD3aU>
- <https://help.prusa3d.com/article/flexible-materials_2057>
- <https://api.printables.com/graphql/>
- <https://www.printables.com/model/246679-camera-bellows-collapsible-customizable-tpu-vase-m>
- <https://www.printables.com/model/1473674-tpu-accordion-ways-cover-for-mini-metal-lathe-no-p>
- <https://www.printables.com/model/82686-steering-rack-gaiter>
- <https://www.printables.com/model/1791102-toyota-celica-6th-gen-st20x-shock-boot-front>
- <https://www.printables.com/model/1381129-tpu-bellows-test-for-multi-tool-printers>
- <https://www.printables.com/model/1082528-3dsets-cv-boots-for-most-3dsets-models>
- <https://www.printables.com/model/1610336-adjustable-gear-stick-cover-adjustable-bellow>
- <https://commons.wikimedia.org/wiki/File:2008-04-23_Cracked_CV_boot.jpg>
- <https://commons.wikimedia.org/wiki/File:Fahrzeugtechnik_Vorderachse.jpg>
- <https://commons.wikimedia.org/wiki/File:Faltenbalg_ICE3_innen.jpg>
