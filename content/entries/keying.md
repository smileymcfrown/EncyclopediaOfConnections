---
title: Keying
description: Keying adds a deliberately lopsided feature, such as a notch, an offset pin, a bigger pin or a flat, to two mating
  parts so that they fit only in the one correct position and cannot be assembled backwards, upside down or with the wrong
  partner.
num: 116
term: Keying (polarization; mechanical mistake-proofing, poka-yoke)
plain_name: Deliberately uneven shapes (an extra bump, a notch, one pin bigger or off to one side, a flat on a round shaft)
  that make two parts fit together only the right way round, so nobody can put them together backwards or plug in the wrong
  one
aliases:
- polarization, polarizing feature, polarized plug or connector (stops a connector being turned the wrong way, e.g. 180 degrees)
  (Harwin; Wikipedia 'NEMA connector')
- keyed connector, keyway, key notch, keying feature (Wikipedia 'Electrical connector'; Wikipedia 'DIMM')
- coding or keying between look-alike connectors, so plug A can't go into socket B (Harwin)
- poka-yoke (Japanese, roughly 'mistake-proofing'); older name baka-yoke ('fool-proofing') (Wikipedia 'Poka-yoke')
- mistake-proofing, error-proofing, fool-proofing, idiot-proofing (informal)
- one-way fit, orientation feature, asymmetric feature, 'emphasized asymmetry' (design-for-assembly term) (HKUST DFA notes
  after Boothroyd and Dewhurst)
- pin indexing, pin-index (e.g. the Pin Index Safety System for medical gas cylinders) (Wikipedia)
- non-interchangeable connectors, misconnection prevention (e.g. ISO 80369 small-bore connectors) (Wikipedia 'Luer taper')
- offset lugs or offset pins (e.g. BAY15d two-filament car bulbs) (Wikipedia 'Bayonet mount')
- D-shaft, D-cut or flatted shaft (a flat on a round shaft that lets a knob go on only one way round)
- not to be confused with a shaft key and keyway, which is a separate small bar that passes turning force from a shaft to
  a hub
family: locating & alignment
other_families: [print-in-place & 3D-printing joints]
finder:
  job: [line parts up exactly, join and hold]
  motion: none
  special_behaviour: [self-aligning or self-centring]
  holding_principle: [shape, not a holding joint]
  reuse_cycles: effectively unlimited
  seal: none
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: easy
  processes: [off-the-shelf part, CNC, 3D print (FDM), laser cut, 3D print (resin), sheet metal, woodwork]
  connects: [any solid parts]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [none, hand tools]
  load_max: light
  usual_process: 3D print (FDM)
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming:
  connects:
    kind: best guess
    reason: joins parts, but no specific kind of part found; set to any solid parts
confirmed: []
open_points: []
uncertain_fields: [special_behaviour, load, materials, processes, making_tips_3d_printing, environment_limits, safety_notes,
  common_failures]
diagram_idea: 'Two versions of the same two-part box side by side: on the left four evenly spaced pegs let the lid go on four
  ways (three shown with a red cross in the ''wrong'' positions but still fitting); on the right one peg is moved off the
  pattern, so only the correct position fits and the wrong ones are blocked with the peg hitting solid plastic.'
links:
- url: https://commons.wikimedia.org/wiki/File:Notch_position_between_DDR_and_DDR2.jpg
  title: Notch position between DDR and DDR2 (Wikimedia Commons, by Jérôme Blum / Wagner51)
  shows: Photo comparing the key notch positions on DDR and DDR2 memory modules, which stop the wrong type being fitted
  license: CC BY-SA 3.0, CC BY-SA 2.0 FR or GFDL 1.2+ (multi-licensed)
- url: https://commons.wikimedia.org/wiki/File:HDMI-Connector.jpg
  title: HDMI-Connector.jpg (Wikimedia Commons, by Evan-Amos)
  shows: Close-up of an HDMI plug, whose uneven trapezoid shape only fits one way up (used as the poka-yoke example on Wikipedia)
  license: Public domain
- url: https://en.wikipedia.org/wiki/File:Pin_index_dimensions.JPG
  title: Pin index dimensions (English Wikipedia file, by Onionmon)
  shows: Technical drawing of the Pin Index Safety System hole and pin positions on a medical gas cylinder valve
  license: Public domain (released by the author; hosted on English Wikipedia, not yet on Commons)
- url: https://www.harwin.com/blog/what-are-polarization-and-keying-in-connectors
  title: What are Polarization and Keying in Connectors? (Harwin blog)
  shows: Illustrations comparing a polarized connector with a keyed one, and how blanking pins key simple pin headers
  license: link only
- url: https://www.youtube.com/watch?v=kqJsiAS5Q5Q
  title: POKA-YOKE / Mistake Proofing – Concept, History and Approaches explained with examples (YouTube, Quality HUB India)
  shows: Video explaining poka-yoke with examples of devices that prevent or signal mistakes (title and channel checked via
    YouTube oEmbed; not watched)
  license: link only (standard YouTube licence)
make_it_yourself:
- url: https://www.printables.com/model/1412697-parametric-d-shaft-knob
  title: Parametric D-Shaft Knob (darthrax, Printables) (URL from Printables API, page not opened)
  what_it_is: A parametric knob with a D-shaped bore (default 6 mm shaft, 4.2 mm across the flat) that only fits the shaft
    one way round, with an editable Onshape model. Read through the Printables public API.
  license: CC BY-SA (Creative Commons Attribution-ShareAlike)
- url: https://help.prusa3d.com/article/cut-tool_1779
  title: PrusaSlicer Cut tool (free slicer)
  what_it_is: Cuts a model and adds plug, dowel or snap connectors that you place by clicking on the cut face; placing them
    unevenly keys the pieces so they only go together one way
  license: PrusaSlicer is AGPL-3.0 open-source software
sources:
- https://en.wikipedia.org/wiki/Poka-yoke
- https://en.wikipedia.org/wiki/Electrical_connector
- https://www.harwin.com/blog/what-are-polarization-and-keying-in-connectors
- https://en.wikipedia.org/wiki/Pin_Index_Safety_System
- https://en.wikipedia.org/wiki/NEMA_connector
- https://en.wikipedia.org/wiki/DIMM
- https://en.wikipedia.org/wiki/USB_hardware
- https://en.wikipedia.org/wiki/Bayonet_mount
- https://en.wikipedia.org/wiki/Luer_taper
- https://www.eekmechanical.com/help/diesel-vs-petrol-nozzles
- http://machinedesign.com/archive/poka-yoke-designs-make-assemblies-mistakeproof
- https://www.macrofab.com/blog/poka-yoke-improve-pcba-design-process
- https://www.fiveflute.com/guide/design-for-assembly-dfa-best-practices/
- https://ieda.ust.hk/dfaculty/ajay/courses/ielm317/lecs/dfm/dfm.pdf
- https://www.carrlane.com/product/locating-pins/locating-pins/bullet-nose-pins
- https://help.prusa3d.com/article/cut-tool_1779
- https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
- https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/
- https://hackaday.com/2023/04/29/alternatives-to-pins-and-holes-for-3d-printed-assemblies/
- https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament
- https://commons.wikimedia.org/wiki/File:Notch_position_between_DDR_and_DDR2.jpg
- https://commons.wikimedia.org/wiki/File:HDMI-Connector.jpg
- https://en.wikipedia.org/wiki/File:Pin_index_dimensions.JPG
- https://raw.githubusercontent.com/prusa3d/PrusaSlicer/master/LICENSE
- https://api.printables.com/graphql/
- https://www.youtube.com/watch?v=kqJsiAS5Q5Q
- https://en.wikipedia.org/wiki/Pin_header
- https://en.wikipedia.org/wiki/Coaxial_power_connector
- https://en.wikipedia.org/wiki/EIAJ_connector
- https://en.wikipedia.org/wiki/Programmable_magnet
research: research/connection-types/results/Keying_onewayonly_fit_pokayoke.json
---

Keying adds a deliberately lopsided feature, such as a notch, an offset pin, a bigger pin or a flat, to two mating parts so that they fit only in the one correct position and cannot be assembled backwards, upside down or with the wrong partner.

**In plain words:** Deliberately uneven shapes (an extra bump, a notch, one pin bigger or off to one side, a flat on a round shaft) that make two parts fit together only the right way round, so nobody can put them together backwards or plug in the wrong one. **Proper term:** Keying (polarization; mechanical mistake-proofing, poka-yoke).

**Also called:** polarization, polarizing feature, polarized plug or connector (stops a connector being turned the wrong way, e.g. 180 degrees) (Harwin; Wikipedia 'NEMA connector'); keyed connector, keyway, key notch, keying feature (Wikipedia 'Electrical connector'; Wikipedia 'DIMM'); coding or keying between look-alike connectors, so plug A can't go into socket B (Harwin); poka-yoke (Japanese, roughly 'mistake-proofing'); older name baka-yoke ('fool-proofing') (Wikipedia 'Poka-yoke'); mistake-proofing, error-proofing, fool-proofing, idiot-proofing (informal); one-way fit, orientation feature, asymmetric feature, 'emphasized asymmetry' (design-for-assembly term) (HKUST DFA notes after Boothroyd and Dewhurst); pin indexing, pin-index (e.g. the Pin Index Safety System for medical gas cylinders) (Wikipedia); non-interchangeable connectors, misconnection prevention (e.g. ISO 80369 small-bore connectors) (Wikipedia 'Luer taper'); offset lugs or offset pins (e.g. BAY15d two-filament car bulbs) (Wikipedia 'Bayonet mount'); D-shaft, D-cut or flatted shaft (a flat on a round shaft that lets a knob go on only one way round); not to be confused with a shaft key and keyway, which is a separate small bar that passes turning force from a shaft to a hub.

## How it works

Most parts that are round, square or evenly spaced will fit in several positions, and people (or machines) will sooner or later pick the wrong one. Keying breaks that symmetry: one part gets a bump, pin or ridge and the other a matching notch, hole or groove, placed so that they only line up in the correct position; in every other position the bump hits solid material and the parts won't go together (Wikipedia 'Electrical connector': keying 'prevents mating in an incorrect orientation'). The same trick can stop the wrong partner being fitted: each variant gets its key in a different place, as with the different notch positions on DDR and DDR2 memory sticks or the unique pin positions for each medical gas cylinder (Wikipedia 'DIMM', 'Pin Index Safety System'). In poka-yoke terms this is a 'control' device that physically prevents the mistake, rather than a 'warning' device such as a label or colour that only draws attention to it (Wikipedia 'Poka-yoke'). On circuit boards the commonest cases are pin headers: a shrouded (box) header has a square notch in its plastic wall, so the ribbon-cable plug, which has a bump on one side, can't go on the wrong way round; plain headers are keyed by removing or clipping one pin and blocking the matching hole in the plug, so the wrong header or a turned plug hits the block (Wikipedia 'Pin header'). Keyed headers like these are 'very commonly used' on computer motherboards (Wikipedia 'Pin header').

## Parts

Single piece or a few parts: usually just a shape moulded, printed or machined into parts that are being joined anyway, e.g. a rib and matching slot, a notch and matching bump, pins and holes in an uneven pattern, a pin of a different size, a D-shaped flat, or a missing pin with a blocked socket hole. Add-on versions use blanking pins or keying plugs pushed into a connector (Harwin).

## Everyday examples

- A USB-A plug or an HDMI plug, which only goes in one way up (Wikipedia 'USB hardware'; Wikipedia 'Poka-yoke'), and inside the computer the notched shrouded headers and the front-panel and USB headers with one pin missing and that hole blocked in the plug (Wikipedia 'Pin header')
- Computer memory sticks, whose notch is in a different place for each generation so the wrong kind won't fit the slot (Wikipedia 'DIMM')
- A North American mains plug with one blade wider than the other, or a three-pin plug (Wikipedia 'NEMA connector')
- Car tail-light bulbs with offset lugs, and petrol-station nozzles of different sizes (Wikipedia 'Bayonet mount'; EEK Mechanical)

## When to use it

Use keying whenever a part could physically go together more than one way but only one way is right, especially when the wrong way would damage something, be dangerous or be hard to spot: battery holders, power and signal connectors, parts with a visible 'front', lids with hinges or labels, split prints that must be glued in the right order, and kits that other people will assemble. Also use it to stop look-alike parts being swapped, by keying each variant differently (Harwin; Wikipedia 'DIMM'; Wikipedia 'Pin Index Safety System'). It costs almost nothing when designed in from the start (Machine Design 1998).

## When not to use it

Don't key a part when any orientation would work: making it fully symmetrical is even better, because it can't be put in wrongly and needs no thought (HKUST DFA notes; USB-C is reversible, Wikipedia 'USB hardware'). Don't rely on keying where people may force parts or modify them: keys can be broken or removed, so for safety-critical connections add a second check such as different sizes, colours or labels (Wikipedia 'Pin Index Safety System'). Don't make keys so subtle that the right way isn't obvious, or users will keep trying the wrong way first (MacroFab warns against subtle top-bottom differences). Keying doesn't hold or locate precisely by itself: combine it with locating pins, a cone, or a latch.

## Details

- **What it does (jobs):**
  - line parts up exactly: allows only the one correct orientation, and often only the correct partner
  - join and hold: only as part of another joint (a connector, bayonet, peg joint or knob) that it makes foolproof; the key itself doesn't hold anything
- **Movement:** none: it is a static shape. During assembly the parts slide or turn together only in the permitted way.
- **Directions it can move (degrees of freedom):** Not a separate joint: keying doesn't take away a direction of movement so much as it removes the wrong choices (for example turning a plug 180 degrees). The joint it belongs to usually ends up with 0 degrees of freedom once assembled; a flat on a D-shaft also stops the knob slipping round the shaft.
- **Special behaviour:**
  - none of the listed behaviours exactly: its special job is mistake-proofing (the part cannot be fitted wrongly), which the list doesn't include
  - self-aligning or self-centring: only when the key has sloped lead-ins, so it turns the part round to the right angle as it goes in ⚑ [uncertain]
- **How it holds:**
  - shape (the parts interlock; form-fit): the key blocks wrong positions by shape
  - not a holding joint (it moves or passes on motion): the key only decides how parts go together; clips, screws, friction or a latch hold them
- **Input and output:** not applicable
- **Power:** passive (no power needed)
- **Load:** light: keys are meant to guide, not to carry load. A small plastic key can be broken or bent if someone forces the part the wrong way; the pins of the Pin Index system are 4 mm in diameter by 6 mm long (Wikipedia 'Pin Index Safety System'). A D-flat on a shaft also carries the turning force of a knob ⚑ [uncertain].
- **Play and precision:** The key only needs to block the wrong positions, so it can have more clearance than the locating features; it doesn't have to set the position accurately. It must still be big enough that the difference between right and wrong is far larger than any looseness or manufacturing error, or the wrong way may be forced in (design-for-assembly advice to 'emphasize asymmetry', HKUST notes).
- **Taking it apart:** removable: keying doesn't change how easily the parts come apart; that depends on the joint it is part of (plug, bayonet, screwed joint and so on). Add-on keying plugs and blanking pins are usually pressed in to stay (Harwin).
- **How often it can be reused:** effectively unlimited if the key isn't forced; plastic keys can be worn, broken or deliberately removed (Wikipedia 'Pin Index Safety System': the system can be bypassed if pins are 'removed, damaged or corroded')
- **Sealing:** none: keying doesn't seal. (In the Pin Index system, the pins must line up before the cylinder can press on its sealing washer, so the wrong cylinder won't seal) (Wikipedia 'Pin Index Safety System').
- **Adjustable:** usually no. Some connector families have several built-in keying positions to choose from, or accept add-on keys, so look-alike connectors can be given different codes (Harwin).
- **Access needed:** not applicable: the key is built into the mating faces
- **Materials:** Any: the key is made in the same material as the part (moulded plastic for connectors and memory sticks, brass or steel for gas-cylinder pins and valves, printed PLA, PETG or ABS for home-made parts). Tougher, less brittle plastics such as PETG survive being forced better than PLA ⚑ [uncertain].
- **Heat, cold, water and wear:** The key is only as tough as the part: printed plastic keys soften with heat (in CNC Kitchen's test PLA began to give at about 60 °C, PETG at about 80 °C and ASA at about 110 °C). Metal keys can corrode: the Pin Index system can be bypassed when pins are corroded (Wikipedia 'Pin Index Safety System'). Otherwise keying isn't affected by water, sunlight or vibration beyond the effect on the material itself ⚑ [uncertain].

## Making it

- **Ways to make or get it:**
  - 3D print (FDM): add the key in CAD, or place slicer cut connectors off-centre (PrusaSlicer Cut tool lets you click connectors anywhere on the cut face)
  - 3D print (resin): fine keys and notches print accurately ⚑ [uncertain]
  - CNC: uneven hole patterns, flats on shafts and keyed slots
  - laser cut: uneven tab spacing so a panel only fits one way round ⚑ [uncertain]
  - woodwork: uneven dowel spacing or an asymmetric tenon ⚑ [uncertain]
  - sheet metal: uneven tabs and slots ⚑ [uncertain]
  - off-the-shelf part: keyed or polarized connectors, D-shaft components, blanking pins and keying plugs (Harwin)
- **Printing it in one piece (print in place):** no: keying is a feature of separate parts that are assembled later.
- **Tools:** none to use. Adding keying to plain pin headers: pliers or cutters to remove one pin and a blanking pin to block the matching socket hole (Harwin).
- **Difficulty:** easy: add an offset pin, a bigger pin, a notch or a flat in CAD before printing; no extra parts needed

### 3D printing tips

1) Break every symmetry, not just one: a square peg still fits four ways and a triangle three ways; use pins at uneven spacing, pins of two different sizes, one round and one square peg, or a single peg placed off-centre (Machine Design: use 'nonsymmetrical hole patterns'). 2) Exaggerate the difference: make the right and wrong options obviously different to the eye and the hand (HKUST DFA notes after Boothroyd and Dewhurst: 'emphasized asymmetry'). FDM parts are only accurate to about 0.2 mm and moving fits need 0.3 mm or more (Prusa), so pins of 5.0 and 5.3 mm are not a reliable key; use sizes that differ by several millimetres, or clearly different shapes. 3) Make the key touch first: put the key where it meets its slot before anything delicate touches, such as connector pins, snap hooks or thin walls, so a wrong attempt is stopped harmlessly ⚑ [uncertain]. 4) Make keys sturdy: printed pins under about 5 mm diameter are weak and snap off (Hubs), which would defeat the key; chamfered fins and slots are stronger than thin pins and print without support (Hackaday on Slant 3D). Consider which way the layers run: a key standing upright can break along its layer lines ⚑ [uncertain]. 5) Chamfer the key and the entry of its slot so the right way slides in easily (Hackaday on Slant 3D; Hubs recommends a 45-degree chamfer on edges touching the bed to avoid elephant's foot). 6) D-shaped holes for knobs: print the hole vertically for roundness; one parametric D-shaft knob adds chamfers to the inside corners of the shaft relief so it 'should print and fit better' (Printables 'Parametric D-Shaft Knob', darthrax). 7) Split prints: in PrusaSlicer's Cut tool, connectors are placed by clicking on the cut face, so placing pegs unevenly keys the two halves (Prusa 'Cut tool'). 8) Add a visual cue as well (an arrow, dot or text moulded in), because machined-in or printed pictures 'cannot wear off' (Machine Design); this is the 'warning' kind of poka-yoke that backs up the physical key. 9) If orientation really doesn't matter, consider the opposite approach: make the part fully symmetrical so any way is right (HKUST DFA notes; USB-C is reversible, Wikipedia 'USB hardware').

### Buying one (off-the-shelf parts)

Search for: 'polarized connectors' and 'keyed connectors' (Wikipedia 'Electrical connector'); 'blanking pins', 'keying plugs' or 'polarizing keys' for pin headers and sockets (Harwin); 'D-shaft' or 'flatted shaft' potentiometers, rotary encoders and motors with matching 'D-bore' knobs and wheels (Printables D-shaft models); 'bullet-nose round pin' plus 'bullet-nose diamond pin' to locate a part from two holes (Carr Lane); 'offset-lug bayonet bulbs' (e.g. type 1157) (Wikipedia 'Bayonet mount'); 'pin-index yoke' valves for medical gases (Wikipedia 'Pin Index Safety System'). For ribbon cables: 'shrouded header' or 'box header', whose notch keys the plug (Wikipedia 'Pin header').

## Rules of thumb

- Design parts that cannot be installed incorrectly: (a) add projections that block wrong assembly; (b) make mating features asymmetrical; (c) or make parts symmetrical so orientation doesn't matter; (d) if two parts can still go together wrongly, make a later part impossible to fit; (e) if all else fails, add assembly markers. Maximise symmetry, or emphasise asymmetry so the right orientation is found faster (HKUST course notes 'Design for Manufacturing/Assembly', after Boothroyd and Dewhurst's Product Design for Assembly).
- Avoid symmetry when a particular orientation is critical, e.g. with nonsymmetrical hole patterns; give each connector a different number of pins so they 'cannot join others' (Paul Dvorak, 'Poka-Yoke Designs Make Assemblies Mistakeproof', Machine Design, 10 March 1998).
- Polarization stops a connector pair being mated the wrong way round; keying stops look-alike connector pairs being mated with the wrong partner (Harwin 'What are polarization and keying in connectors?').
- Medical gas cylinders: two holes in gas-specific positions below the outlet accept pins 4 mm in diameter by 6 mm long on the yoke (e.g. oxygen positions 2 and 5, nitrous oxide 3 and 5) (Wikipedia 'Pin Index Safety System', standard EN ISO 407).
- Polarized North American plugs: the neutral blade is 7.9 mm (5/16 in) wide, 1.6 mm wider than the live blade, 'so the plug can be inserted only one way'; on three-pin plugs the earth pin enforces polarity (Wikipedia 'NEMA connector').
- Fuel nozzles: diesel nozzles are about 25 mm and petrol nozzles about 21 mm across, so a diesel nozzle won't fit a petrol filler, but a petrol nozzle still fits a diesel filler; a size key only blocks one direction of mistake (EEK Mechanical).
- Some two-filament bulbs such as the 1157 have slightly offset lugs so they go in only one way; some special bulbs use 3 pins 120 degrees apart so they only fit their own socket (Wikipedia 'Bayonet mount').
- Small printed pins under about 5 mm diameter are weak (Hubs 'How to design parts for FDM 3D printing'); FDM accuracy is about 0.2 mm and movable fits start at 0.3 mm (Prusa 'Modeling with 3D printing in mind').
- Size keys for power plugs: round barrel (coaxial) power plugs fit at any angle, so they need no orientation key, but the Japanese EIAJ RC-5320A standard gives each voltage range its own plug size (Wikipedia 'Coaxial power connector'), because 'higher voltages should be supplied via larger plugs to prevent equipment damage. A larger plug will not go into a smaller jack' (Wikipedia 'EIAJ connector'). Like fuel nozzles, a size key only blocks one direction of mistake; link to the EIAJ table for the sizes rather than copying it.

## Common failures

Key too small or too subtle, so the part can be forced in the wrong way or users can't tell which way is right (HKUST DFA notes; MacroFab). Symmetry not fully broken: a key that stops one wrong position but leaves another (e.g. a part that can still go in upside down) (fiveflute on 'partial symmetry that allows multiple assembly orientations'). Only one direction of mistake blocked, like fuel nozzles that stop diesel in a petrol car but not petrol in a diesel car (EEK Mechanical). Keys broken off, worn, corroded or deliberately removed (Wikipedia 'Pin Index Safety System'). Key engages too late, so delicate pins or snaps are damaged before it stops the wrong fit ⚑ [uncertain]. On 3D prints, thin key pins snap along layer lines, and over-extrusion or elephant's foot makes the right way too tight, tempting people to force it (Hubs). Look-alikes that aren't keyed at all: barrel power plugs of the same size are used for different voltages and currents, and the outer contact is only 'usually' the ground, so the wrong power supply can fit, and 'use of the wrong power supply may cause severe equipment damage or even fire' (Wikipedia 'Coaxial power connector'); check the voltage and polarity marked on the supply, or use a keyed connector.

## Safety

Keying is often a safety feature, so never file off, cut away or bypass a key to make something fit; the Pin Index system can be defeated by removed or damaged pins, extra washers, or turning the cylinder upside down on some valves, which can connect the wrong gas (Wikipedia 'Pin Index Safety System'). Misconnections between look-alike medical tubing connectors are a known hazard, which is why non-interchangeable connector standards exist (Wikipedia 'Luer taper', ISO 80369). Forcing a keyed plug the wrong way can break it and expose contacts ⚑ [uncertain].

## Related

- Locating pins and hole-and-slot: set the exact position; placing them unevenly also keys the part
- Self-centring cone and socket (taper locator): centres parts but lets them turn, so it is often combined with a key
- Split-part joints for large prints: pegs and dovetails that can be placed unevenly to key the pieces
- Bayonet mount (push-and-twist lock): often keyed with lugs of different sizes or spacing
- Shaft key and keyway, splines and D-shafts: pass turning force from a shaft to a hub; a D-flat also sets the knob's angle
- Interlocks (poka-yoke 'motion-step' devices), e.g. a microwave that won't start with the door open (Wikipedia 'Poka-yoke'): prevent the wrong sequence rather than the wrong fit
- Colour coding and labels: 'warning' poka-yoke that points out the right way but can't stop the wrong one
- Wire-to-board plug connectors: pin headers and crimp housings, the commonest keyed connectors on circuit boards, keyed by a shroud notch, a polarising bump or a blocked pin (Wikipedia 'Pin header')
- Standard plug-and-socket connector: USB, audio-jack, RJ45 and barrel-jack plugs, everyday plugs whose shapes are keyed; barrel power plugs are keyed only by size, if at all (Wikipedia 'Coaxial power connector'; 'EIAJ connector')
- Magnet joint: coded magnet patterns, magnets set in a pattern of alternating poles only mate with a matching pattern, a magnetic way of keying parts (Wikipedia 'Programmable magnet')

## Make it yourself

- [Parametric D-Shaft Knob (darthrax, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1412697-parametric-d-shaft-knob): A parametric knob with a D-shaped bore (default 6 mm shaft, 4.2 mm across the flat) that only fits the shaft one way round, with an editable Onshape model. Read through the Printables public API. *(licence: CC BY-SA (Creative Commons Attribution-ShareAlike))*
- [PrusaSlicer Cut tool (free slicer)](https://help.prusa3d.com/article/cut-tool_1779): Cuts a model and adds plug, dowel or snap connectors that you place by clicking on the cut face; placing them unevenly keys the pieces so they only go together one way *(licence: PrusaSlicer is AGPL-3.0 open-source software)*

## Pictures, videos and models

- [Notch position between DDR and DDR2 (Wikimedia Commons, by Jérôme Blum / Wagner51)](https://commons.wikimedia.org/wiki/File:Notch_position_between_DDR_and_DDR2.jpg): Photo comparing the key notch positions on DDR and DDR2 memory modules, which stop the wrong type being fitted *(licence: CC BY-SA 3.0, CC BY-SA 2.0 FR or GFDL 1.2+ (multi-licensed))*
- [HDMI-Connector.jpg (Wikimedia Commons, by Evan-Amos)](https://commons.wikimedia.org/wiki/File:HDMI-Connector.jpg): Close-up of an HDMI plug, whose uneven trapezoid shape only fits one way up (used as the poka-yoke example on Wikipedia) *(licence: Public domain)*
- [Pin index dimensions (English Wikipedia file, by Onionmon)](https://en.wikipedia.org/wiki/File:Pin_index_dimensions.JPG): Technical drawing of the Pin Index Safety System hole and pin positions on a medical gas cylinder valve *(licence: Public domain (released by the author; hosted on English Wikipedia, not yet on Commons))*
- [What are Polarization and Keying in Connectors? (Harwin blog)](https://www.harwin.com/blog/what-are-polarization-and-keying-in-connectors): Illustrations comparing a polarized connector with a keyed one, and how blanking pins key simple pin headers *(licence: link only)*
- [POKA-YOKE / Mistake Proofing – Concept, History and Approaches explained with examples (YouTube, Quality HUB India)](https://www.youtube.com/watch?v=kqJsiAS5Q5Q): Video explaining poka-yoke with examples of devices that prevent or signal mistakes (title and channel checked via YouTube oEmbed; not watched) *(licence: link only (standard YouTube licence))*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 12 sentences on this page marked [uncertain].
- ⚑ Finder value `connects` = any solid parts (best guess): joins parts, but no specific kind of part found; set to any solid parts

## Sources

- <https://en.wikipedia.org/wiki/Poka-yoke>
- <https://en.wikipedia.org/wiki/Electrical_connector>
- <https://www.harwin.com/blog/what-are-polarization-and-keying-in-connectors>
- <https://en.wikipedia.org/wiki/Pin_Index_Safety_System>
- <https://en.wikipedia.org/wiki/NEMA_connector>
- <https://en.wikipedia.org/wiki/DIMM>
- <https://en.wikipedia.org/wiki/USB_hardware>
- <https://en.wikipedia.org/wiki/Bayonet_mount>
- <https://en.wikipedia.org/wiki/Luer_taper>
- <https://www.eekmechanical.com/help/diesel-vs-petrol-nozzles>
- <http://machinedesign.com/archive/poka-yoke-designs-make-assemblies-mistakeproof>
- <https://www.macrofab.com/blog/poka-yoke-improve-pcba-design-process>
- <https://www.fiveflute.com/guide/design-for-assembly-dfa-best-practices/>
- <https://ieda.ust.hk/dfaculty/ajay/courses/ielm317/lecs/dfm/dfm.pdf>
- <https://www.carrlane.com/product/locating-pins/locating-pins/bullet-nose-pins>
- <https://help.prusa3d.com/article/cut-tool_1779>
- <https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135>
- <https://www.hubs.com/knowledge-base/how-design-parts-fdm-3d-printing/>
- <https://hackaday.com/2023/04/29/alternatives-to-pins-and-holes-for-3d-printed-assemblies/>
- <https://www.cnckitchen.com/blog/comparing-pla-petg-amp-asa-feat-prusament>
- <https://commons.wikimedia.org/wiki/File:Notch_position_between_DDR_and_DDR2.jpg>
- <https://commons.wikimedia.org/wiki/File:HDMI-Connector.jpg>
- <https://en.wikipedia.org/wiki/File:Pin_index_dimensions.JPG>
- <https://raw.githubusercontent.com/prusa3d/PrusaSlicer/master/LICENSE>
- <https://api.printables.com/graphql/>
- <https://www.youtube.com/watch?v=kqJsiAS5Q5Q>
- <https://en.wikipedia.org/wiki/Pin_header>
- <https://en.wikipedia.org/wiki/Coaxial_power_connector>
- <https://en.wikipedia.org/wiki/EIAJ_connector>
- <https://en.wikipedia.org/wiki/Programmable_magnet>
