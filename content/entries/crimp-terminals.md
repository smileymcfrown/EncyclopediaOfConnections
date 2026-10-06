---
title: Crimp terminals
description: A metal terminal whose barrel is squeezed (crimped) onto a stripped wire end with a crimping tool, giving a ring
  or fork to clamp under a screw or stud, or a blade or receptacle that pushes onto a matching tab, so a wire can be fixed
  to a terminal or unplugged without soldering.
num: 347
term: Crimp terminal (ring, fork and spade terminals; blade quick-disconnect)
plain_name: A small metal end that is squeezed hard onto a stripped wire with a special pliers-like tool; the other end is
  a flat ring or fork that goes under a screw, or a flat blade or sleeve that pushes onto a matching tab
aliases:
- 'ring terminal, ring tongue terminal, eyelet; fork terminal, spade terminal, split-ring terminal (Wikipedia ''Electrical
  connector'': ring and spade ''sometimes called fork or split ring terminals''); flanged spade, hook, flag and rectangular
  tongue terminals (Wikipedia ''Crimp (joining)'')'
- blade connector, blade terminal, quick disconnect, quick connect, tab terminal, spade connector (male tab and female receptacle)
  (Wikipedia 'FASTON terminal', 'Electrical connector')
- FASTON (brand, TE Connectivity), Lucar (brand) (Wikipedia 'FASTON terminal', 'Crimp (joining)'); 6.3 mm or 0.250 in, 4.8
  mm or 0.187 in and 2.8 mm or 0.110 in tabs
- crimp lug, solderless lug, cable lug, tubular lug, battery lug, battery cable terminal (heavy-cable versions; SG Tool Aid
  crimper instructions; Grote catalogue)
- bullet terminal, bullet connector, snap plug (male and female) (Wikipedia 'Crimp (joining)'; Grote catalogue)
- earth (ground) ring terminal, ground lug (Hammond ground kit bulletin)
- insulated (pre-insulated) and non-insulated (bare) terminals; vinyl (PVC) or nylon insulated; fully insulated female disconnects;
  heat-shrink sealed terminals (Grote catalogue)
- open-barrel (F-crimp, B-crimp) and closed-barrel terminals; brazed-seam and butted-seam barrels (Wikipedia 'Crimp (joining)';
  Hackaday 'Good In A Pinch'; Grote catalogue)
- red, blue and yellow terminals (named by their wire-size colour code)
family: electrical connections
other_families: []
finder:
  job: [join and hold]
  motion: none
  special_behaviour: [quick-release]
  holding_principle: [friction or clamping, spring force, shape]
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
  tools: [crimper, heat gun, hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: removable
  power: passive
needs_confirming: {}
confirmed: []
open_points:
- kind: content
  note: '*Crimp terminals*: the wire-size colour code differs (Wikipedia *Crimp* and the Grote catalogue: red 22-18 AWG; Wikipedia
    *FASTON*: red 22-16 AWG; Wikipedia *Electrical connector* gives the metric DIN 46245 code with yellow as ''over 4 to 6
    mm²'', which looks garbled). Toothed washers under earth terminals: a Hammond ground kit uses an internal lock washer,
    but GM TechLink says never to use star washers on vehicle grounds. Both sides are recorded.'
uncertain_fields: [reuse_cycles, making_tips_3d_printing, everyday_examples, when_not_to_use, common_failures]
diagram_idea: Side-by-side drawings of ring, fork, blade (tab and receptacle) and bullet terminals, then a cut-away of an
  insulated terminal before and after crimping showing the wire crimp, the insulation grip, the colour sleeve, and a red arrow
  at the barrel end where an unsupported wire breaks.
links:
- url: https://commons.wikimedia.org/wiki/File:Kabelschuh_verschiedene_commons.jpg
  title: Kabelschuh verschiedene commons.jpg (Wikimedia Commons)
  shows: Insulated ring and spade terminals, FASTON blade tabs and receptacles, and male and female bullet terminals side
    by side
  license: CC BY-SA 3.0 / GFDL
- url: https://commons.wikimedia.org/wiki/File:Kabelschuh_detailfoto_2.jpg
  title: Kabelschuh detailfoto 2.jpg (Wikimedia Commons)
  shows: Close-up of two ring-tongue terminals before and after crimping
  license: CC BY-SA 3.0
- url: https://commons.wikimedia.org/wiki/File:Female_Faston_Style_Terminals.jpg
  title: Female Faston Style Terminals.jpg (Wikimedia Commons)
  shows: Insulated female blade receptacles in three sizes and colours, with a matchstick for scale
  license: CC BY-SA 4.0
- url: https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/
  title: 'Good In A Pinch: The Physics Of Crimped Connections (Hackaday, 2017)'
  shows: Cross-section photo of a good open-barrel F-crimp and an explanation of the wire crimp, the insulation crimp and
    crimp height
  license: link only
- url: https://commons.wikimedia.org/wiki/File:Crimping_tool_04.jpg
  title: Crimping tool 04.jpg (Wikimedia Commons)
  shows: A wire and terminal being crimped in a hand crimping tool
  license: CC BY-SA 3.0
make_it_yourself:
- url: https://www.printables.com/model/1599622-quick-connector-for-spade-terminals
  title: Quick Connector (For Spade Terminals) (Distracted by Design, Printables) (URL from Printables API, page not opened)
  what_it_is: Printed friction-fit two-wire plug and socket that houses standard male and female spade terminals, offset so
    it fits only one way
  license: Creative Commons Attribution-NonCommercial-ShareAlike
- url: https://www.printables.com/model/1306699-wire-ring-terminal-boot-protector
  title: Wire Ring Terminal Boot Protector (tubeless2276, Printables) (URL from Printables API, page not opened)
  what_it_is: Scalable TPU insulating boot for ring terminals on 14-16 AWG wire (scale up for 10-12 AWG)
  license: Creative Commons Attribution-NonCommercial-ShareAlike
- url: https://www.printables.com/model/70578-parkside-x20v_team-battery-connector-with-faston-t
  title: PARKSIDE X20V_Team Battery connector with Faston terminal (Marin, Printables) (URL from Printables API, page not
    opened)
  what_it_is: Printed power-tool battery adapter in which crimped male blade terminals are pressed into grooves and potted
    with epoxy to touch the battery's contacts
  license: Creative Commons Attribution-NonCommercial-ShareAlike
sources:
- https://en.wikipedia.org/wiki/Electrical_connector
- https://en.wikipedia.org/wiki/Crimp_(joining)
- https://en.wikipedia.org/wiki/FASTON_terminal
- https://en.wikipedia.org/wiki/High_resistance_connection
- https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/
- https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/
- https://hackaday.com/tag/design-fail-manufacturing/
- https://hackaday.com/2016/12/07/dont-leave-3d-printers-unattended-they-can-catch-fire/
- https://nepp.nasa.gov/files/27631/nstd87394a.pdf
- https://www.grote.com/file-attachments/ACC_CAT_04_TERMINAL_CONN.pdf
- https://images.toolsid.com/sg-tool-aid/items/pdf/18840-instructions.pdf
- https://www.hammfg.com/files/parts/bulletins/BUL86513.pdf
- https://www.corvetteactioncenter.com/tech/knowledgebase/article/26/1996-2005-corvette-gm-techlink-star-washers-in-grounds-349.html
- https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf
- https://commons.wikimedia.org/wiki/File:Kabelschuh_verschiedene_commons.jpg
- https://commons.wikimedia.org/wiki/File:Kabelschuh_detailfoto_2.jpg
- https://commons.wikimedia.org/wiki/File:Female_Faston_Style_Terminals.jpg
- https://commons.wikimedia.org/wiki/File:Crimping_tool_04.jpg
- https://api.printables.com/graphql/
research: research/connection-types/results/Crimp_terminals_ring_fork_and_spade_terminals_blade_quickdisconnect.json
---

A metal terminal whose barrel is squeezed (crimped) onto a stripped wire end with a crimping tool, giving a ring or fork to clamp under a screw or stud, or a blade or receptacle that pushes onto a matching tab, so a wire can be fixed to a terminal or unplugged without soldering.

**In plain words:** A small metal end that is squeezed hard onto a stripped wire with a special pliers-like tool; the other end is a flat ring or fork that goes under a screw, or a flat blade or sleeve that pushes onto a matching tab. **Proper term:** Crimp terminal (ring, fork and spade terminals; blade quick-disconnect).

**Also called:** ring terminal, ring tongue terminal, eyelet; fork terminal, spade terminal, split-ring terminal (Wikipedia 'Electrical connector': ring and spade 'sometimes called fork or split ring terminals'); flanged spade, hook, flag and rectangular tongue terminals (Wikipedia 'Crimp (joining)'); blade connector, blade terminal, quick disconnect, quick connect, tab terminal, spade connector (male tab and female receptacle) (Wikipedia 'FASTON terminal', 'Electrical connector'); FASTON (brand, TE Connectivity), Lucar (brand) (Wikipedia 'FASTON terminal', 'Crimp (joining)'); 6.3 mm or 0.250 in, 4.8 mm or 0.187 in and 2.8 mm or 0.110 in tabs; crimp lug, solderless lug, cable lug, tubular lug, battery lug, battery cable terminal (heavy-cable versions; SG Tool Aid crimper instructions; Grote catalogue); bullet terminal, bullet connector, snap plug (male and female) (Wikipedia 'Crimp (joining)'; Grote catalogue); earth (ground) ring terminal, ground lug (Hammond ground kit bulletin); insulated (pre-insulated) and non-insulated (bare) terminals; vinyl (PVC) or nylon insulated; fully insulated female disconnects; heat-shrink sealed terminals (Grote catalogue); open-barrel (F-crimp, B-crimp) and closed-barrel terminals; brazed-seam and butted-seam barrels (Wikipedia 'Crimp (joining)'; Hackaday 'Good In A Pinch'; Grote catalogue); red, blue and yellow terminals (named by their wire-size colour code).

## How it works

The stripped wire goes into the barrel and the crimping tool squeezes the barrel so hard that the metal is deformed 'past its yield point'; the copper strands are pressed into a solid, gas-tight mass that keeps out air and moisture, and the springiness of the squeezed barrel keeps gripping the wire by friction (Wikipedia 'Crimp (joining)'; Hackaday 'Good In A Pinch'). A second, lighter crimp grips the wire's insulation (or the insulated sleeve is pressed round it) so bending is taken by the insulation, not the copper (strain relief) (Hackaday 'Good In A Pinch'; Wikipedia 'Electrical connector'). A ring or fork then makes contact through its flat face when a screw or bolt clamps it; a blade receptacle is a springy sleeve that grips a flat tab (Wikipedia 'Electrical connector').

## Parts

A few parts: the terminal (a stamped or tubular copper or brass part with a wire barrel and a ring, fork, blade, receptacle or bullet end), often a plastic or heat-shrink insulating sleeve over the barrel, and the wire; plus the screw, stud, washer and nut, or the matching tab, that it connects to (Wikipedia 'Electrical connector'; Grote catalogue). Open-barrel types have a second set of tabs that grip the insulation (Hackaday 'Good In A Pinch').

## Everyday examples

- Car battery cables, earth straps and the spade terminals on car fuses, relays and speakers (GM TechLink; Wikipedia 'Electrical connector': blades on switches and speaker units)
- Barrier-strip terminal blocks with ring or spade terminals under the screws (Wikipedia 'Electrical connector')
- The heated-bed power wires of a 3D printer fixed with ring terminals (Printables 220863, Prusa MK3)
- Push-on blade terminals on household appliance switches, heaters and thermostats ⚑ [uncertain]

## When to use it

Use crimp terminals to fix a stranded wire to a screw, stud, terminal block, busbar or battery post (ring or fork), or to make a wire that pushes onto a tab on a switch, relay, heater or speaker (blade), especially where the wiring vibrates: crimps are 'highly resistant to vibration and thermal shock' and need no heat (Wikipedia 'Crimp (joining)', 'Electrical connector'). Choose a ring where the screw might loosen, since it can't slide off the screw; a fork where you need to fit or remove it without taking the screw out (Wikipedia 'Electrical connector'); a blade where you want to unplug parts for service; a heavy lug for battery and inverter cables; a sealed heat-shrink terminal outdoors or in boats and vehicles (Grote catalogue).

## When not to use it

Don't use them without the right crimp tool and terminal size: pliers or a mismatched tool give pull-outs and hot joints (Hackaday 2023). Don't crimp onto solid-core house wire in place of the connectors your local rules require, and don't do mains installation work unless allowed (mains work must follow local law; e.g. Approved Document P in England). For wire ends going straight into screw or spring terminal blocks, use a Wire-end ferrule instead of tinning or a fork; for joining two wires end to end use a Crimped butt splice or Soldered wire joint; for small signal wires to a board use Wire-to-board plug connectors; for high-current plug-and-unplug battery leads use a High-current battery plug. Avoid blade terminals where vibration or a cable pull could shake them off unless they have a locking feature or insulating housing ⚑ [uncertain].

## Details

- **What it does (jobs):**
  - join and hold: terminates a wire so it can be screwed to a stud, terminal block or busbar, or pushed onto a tab on a switch, relay, speaker, heater or battery; the finder reaches this entry through the 'electrical connections' family
- **Movement:** none: a fixed connection; the wire next to the terminal should not be flexed repeatedly (Hackaday on the Wanhao recall: crimps failed from 'mechanical stress in the cable drag chain').
- **Directions it can move (degrees of freedom):** 0 once crimped and screwed down or pushed on; a ring can still turn on a loose screw, which is a sign it needs tightening.
- **Special behaviour:**
  - quick-release: blade (quick-disconnect) terminals pull off and push on by hand, and a fork (spade) terminal can be removed or fitted while the screw is 'left partially screwed in' (Wikipedia 'Electrical connector', 'FASTON terminal')
- **How it holds:**
  - friction or clamping (force-fit): the crimp holds the wire by 'a high degree of static friction' from the deformed barrel (Wikipedia 'Crimp (joining)'), and a ring or fork is clamped under a screw head or nut
  - spring force (a spring or springy part presses it in place): a blade receptacle is a sprung sleeve gripping the tab (Wikipedia 'Electrical connector')
  - shape (the parts interlock; form-fit): a ring encircles its screw, so it can't slide off if the screw loosens a little; insulated receptacles and bullets are held in a sleeve
- **Input and output:** not applicable
- **Power:** passive (no power needed).
- **Load:** Electrical: up to about 30 A for ordinary insulated ring, fork and blade terminals (heavy cable lugs go above about 30 A); rated for mains as components (insulated terminals are typically rated 300 V or 600 V; Grote catalogue), but mains work must follow local law (e.g. Approved Document P in England). Blade examples: 6.35 mm (0.250 in) tab 3 A at 22 AWG up to 24 A at 10 AWG; 4.8 mm (0.187 in) tab 10 A at 16 AWG; 2.8 mm (0.110 in) tab 5 A at 16 AWG (Wikipedia 'FASTON terminal'). Mechanical: medium in a straight pull when crimped correctly, e.g. NASA minimum crimp pull strengths 57 N (22 AWG), 142 N (18 AWG), 183 N (16 AWG), 290 N (14 AWG), 459 N (12 AWG), 707 N (10 AWG) and 1281 N (8 AWG) (NASA-STD-8739.4A Table 12-1); weak against repeated bending at the barrel end, and blade terminals can be pulled or shaken off.
- **Play and precision:** not applicable (it doesn't locate parts). Choose a ring or fork whose hole matches the stud or screw size (Grote catalogue gives a stud-size and hole-size chart) so it seats flat under the screw head.
- **Taking it apart:** removable: the ring or fork is unscrewed and a blade pulled off; the crimp itself is permanent, since 'crimped contacts are permanent (i.e. the connectors and wire ends cannot be reused)' (Wikipedia 'Crimp (joining)'), so a bad crimp is cut off and redone.
- **How often it can be reused:** many times for the screw or blade joint; once for the crimp on the wire. Blade receptacles may loosen after many pull-offs ⚑ [uncertain].
- **Sealing:** none: ordinary insulated or bare terminals let in water; heat-shrinkable terminals with an adhesive lining 'protect splices from water, corrosion, salt and moisture' (watertight) (Grote catalogue), and sealing a heavy lug with double-wall adhesive heat-shrink is recommended (SG Tool Aid). The crimp itself is designed to be 'gas-tight' inside (Wikipedia 'Crimp (joining)').
- **Adjustable:** no
- **Access needed:** one side only (blind) for a ring or fork going onto a stud or into a tapped hole, or a blade going onto a tab; both sides when a loose bolt and nut are used.
- **Materials:** Terminals: copper, usually electro tin-plated against corrosion (Grote catalogue); heavy lugs of electrolytic (ETP) copper, with butted or brazed seams or seamless tubes (Grote catalogue); crimp metals generally copper, brass, aluminium or bronze (Hackaday 'Good In A Pinch'). A copper-terminal crimper must not be used on steel terminals (SG Tool Aid). Insulation: vinyl (PVC) rated for 75 °C continuous, nylon for 105 °C, bare terminals 75 °C (Grote catalogue); heat-shrink polyolefin with adhesive for sealed versions (Grote). Wire: stranded copper in the size range marked or colour-coded on the terminal; crimps suit 'cables of both small and large cross-sections' (Wikipedia 'Crimp (joining)').
- **Heat, cold, water and wear:** Heat: vinyl-insulated terminals are rated 75 °C, nylon 105 °C (Grote catalogue). Vibration and flexing: a correct crimp resists vibration (Wikipedia 'Crimp (joining)'), but repeated bending breaks wires at the barrel and screws can loosen; Wikipedia notes closed-barrel crimps are 'less resilient to vibration' than open-barrel (Wikipedia 'Crimp (joining)'). Corrosion: tin plating 'prevents corrosion' (Grote), and sealed adhesive heat-shrink terminals keep out 'water, corrosion, salt and moisture' (Grote); GM found star washers under vehicle ground terminals increase 'the chance for corrosion' (GM TechLink). Loosening: 'terminal screws loosened by vibration, improper tightening' raise resistance, causing heating and 'thermal creep, which will cause the termination to loosen further' (Wikipedia 'High resistance connection').

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: terminals, lugs and crimp tools are bought; the joint is made by hand with a crimping tool
  - 3D print (FDM): covers, insulating boots, holders and keyed housings for spade and blade terminals, and adapters that hold blade terminals against battery contacts (Printables 1599622, 1306699, 70578, 220863)
- **Printing it in one piece (print in place):** no: the terminal is metal and must be crimped; only covers, boots and housings around it are printed.
- **Tools:** Wire strippers; a crimping tool whose die matches the terminal type and size (insulated or non-insulated, colour or wire size), ideally with a full-cycle ratchet that won't open until the crimp is complete (NASA-STD-8739.4A §12.3.1; Wikipedia 'Crimp (joining)'); for heavy lugs a large hex or indent crimper, mechanical or hydraulic, with rotating or swappable dies (SG Tool Aid crimper instructions; Wikipedia 'Crimp (joining)'); a heat gun for heat-shrink terminals (Grote catalogue); a screwdriver or spanner to fit ring and fork terminals.
- **Difficulty:** easy: with the right size terminal and a matching ratcheting crimper a crimp takes seconds, but 'if you use crappy crimp tools or crimps or just mismatch them ... You'll get pullouts and failures' (Hackaday 2023 'What Do You Do When You Can't Solder?'). Heavy lugs need a large crimper and more force (SG Tool Aid).

### 3D printing tips

1) Printed two-way plug for spade terminals: friction fit is enough because spade terminals 'make a solid connection'; offset the terminals to one side so the plug fits only one way; print flat side down with no supports; add grip ribs to pull it apart; heat-shrink over bare crimped spades replaces the insulation sleeve (Printables 1599622). 2) Adapter blocks: press blade terminals into printed grooves, tack with quick glue, then fill round the terminals and wires with two-part epoxy so a tug can't move them (Printables 70578, a power-tool battery adapter). 3) Flexible boots over ring terminals print well in TPU; one design fits 14-16 AWG at 100% and 10-12 AWG at about 115% scale (Printables 1306699). 4) Covers near hot parts, e.g. a 3D-printer heated bed with ring terminals, need a heat-tolerant filament (one designer used a high-temperature PLA) and room for the terminal's bend radius (Printables 220863). 5) Clamp ring terminals metal-to-metal (a metal stud, nut or threaded insert), not directly against printed plastic, because plastic under a screw creeps and the joint loosens and heats up ⚑ [uncertain]. 6) Provide a cable clamp or tie point so pulls and vibration never reach the crimp.

### Buying one (off-the-shelf parts)

Insulated and non-insulated ring terminals (by wire range and stud size), fork/spade terminals (straight and flanged), blade terminals: male tabs, female receptacles, fully insulated receptacles, piggyback and flag types (0.110, 0.187, 0.250 in series), bullet terminals and receptacles, heat-shrink sealed terminals, 'crimp, solder and seal' terminals, heavy copper battery lugs and tubular cable lugs, ratcheting crimpers with colour-coded dies, hex and indent lug crimpers (mechanical or hydraulic), wire strippers, insulating boots and terminal covers, earth (ground) kits with lugs and lock washers (Grote catalogue; Wikipedia 'FASTON terminal', 'Crimp (joining)'; Hammond ground kit bulletin; SG Tool Aid). For sizes, use a catalogue chart (e.g. Grote's wire-size, stud-size and tab-size tables) rather than guessing.

## Rules of thumb

- Colour code by wire size (sources differ slightly, so read the size printed on the pack): red 22-18 AWG, blue 16-14 AWG, yellow 12-10 AWG (Wikipedia 'Crimp (joining)'; Grote catalogue); Wikipedia's FASTON page gives red as 22-16 AWG; in metric, DIN 46245 gives red 0.5-1 mm², blue 1.5-2.5 mm², yellow about 4-6 mm² (Wikipedia 'Electrical connector'). The colours show wire size, not polarity (Wikipedia 'FASTON terminal').
- Insulation temperature ratings: vinyl 75 °C, nylon 105 °C, bare copper 75 °C continuous (Grote catalogue).
- Blade current ratings depend on tab size and wire: 0.250 in tab 3 A (22 AWG), 4 A (20), 7 A (18), 10 A (16), 15 A (14), 20 A (12), 24 A (10); 0.187 in tab up to 10 A (16 AWG); 0.110 in tab up to 5 A (16 AWG) (Wikipedia 'FASTON terminal').
- Insert the stripped wire so its end is flush with the far end of the barrel, with all strands inside, and strip to the terminal maker's length (Wikipedia 'Crimp (joining)'; SG Tool Aid). Leave 0.25-0.75 mm of bare wire between the insulation and the barrel for 20 AWG and smaller (NASA-STD-8739.4A §10.1.4.b).
- A good crimp: all strands cold-flowed into the barrel, force neither too light nor too strong, barrel not over-deformed, no large voids, insulation not pinched or charred (Wikipedia 'Crimp (joining)'); crimp height measured with a micrometer is the key non-destructive check (Hackaday 'Good In A Pinch').
- Pull-test crimps: minimum pull strength 57 N (22 AWG), 142 N (18 AWG), 183 N (16 AWG), 290 N (14 AWG), 459 N (12 AWG), 707 N (10 AWG), 1281 N (8 AWG); otherwise at least 60% of the wire's own tensile strength (NASA-STD-8739.4A Table 12-1, §12.3.5).
- Use a full-cycle ratcheting crimp tool and only the terminal-wire combinations the maker recommends; don't modify terminals or wires to fit (NASA-STD-8739.4A §12.3.1, §12.3.3-12.3.4).
- Heavy lugs: set the crimper's dies for the lug type and wire size, crimp twice if the lug maker says so (first crimp at the open end), pull to check, and seal with double-wall adhesive heat-shrink (SG Tool Aid crimper instructions).
- Earth terminals on painted metal: a lug 'will not ground the enclosure without either removing any exterior paint or installing ground wires' (Hammond ground kit bulletin); one minimum torque given for a 3/8 in brass ground stud is 50 in-lbf (5.6 N·m) (Hammond).

## Common failures

Wire pulls out: wrong die, wrong terminal size or a worn tool; use the matching ratcheting tool and pull-test (Hackaday 2023; NASA-STD-8739.4A §12.3). Poor crimp quality: strands left out, voids, over- or under-crimping, crushed or charred insulation (Wikipedia 'Crimp (joining)'). Wire breaking at the barrel after vibration or repeated flexing: add strain relief and keep crimps out of moving cable runs (Hackaday on the Wanhao recall). Overheated, browned or melted terminal or connector: loose screw, oxidised or poorly crimped joint (Wikipedia 'High resistance connection'; Hackaday 'Don't Leave 3D Printers Unattended'). Earth terminal not making contact because it is clamped on paint (Hammond ground kit bulletin). Corrosion under a vehicle ground terminal fitted with a star washer, which also stops the terminal reaching proper torque (GM TechLink). Blade terminal pulled off by a cable tug. Ring hole too big for the stud, so it seats on a small area ⚑ [uncertain].

## Safety

Fire from poor joints: a loose or badly crimped terminal becomes a high-resistance connection that can reach 'temperatures above 1000 °C' and 'ignite most flammable materials', and fuses and RCDs can't detect it (Wikipedia 'High resistance connection'). A 3D-printer maker issued a recall because heater-cartridge crimp connections failed from flexing in the cable chain and could cause fires (Hackaday on the Wanhao Duplicator i3). Pull-test every crimp and replace any that move. Wrong tool or size: pull-outs and failures (Hackaday 2023). Batteries: make sure no power is on the cable being crimped, and near vehicle batteries a spark can ignite the hydrogen they give off; wear eye and face protection and keep fingers clear of the crimper's jaws (SG Tool Aid crimper instructions). Mains: these terminals appear in mains equipment, but this entry gives no mains wiring steps; mains work must follow local law (in England, Building Regulations Part P; Approved Document P, 2013 edition).

## Related

- Crimped butt splice: the same crimp barrel used to join two wires end to end
- Wire-end ferrule: a crimped sleeve that tidies a stranded wire end for screw and spring terminal blocks, instead of a ring or fork
- Screw terminal (terminal block, barrier strip): what ring and fork terminals are usually screwed into
- Soldered wire joint and Solder sleeve: heat-made alternatives; crimp-solder-and-seal terminals combine both (Grote catalogue)
- High-current battery plug (bullet connectors): plug-and-unplug ends for battery and motor leads
- Wire-to-board plug connectors: the much smaller crimp contacts used in multi-pin plastic housings
- Heat-shrink tubing: seals and insulates bare terminals and lugs
- Spring-clamp wire connector: tool-free alternative for joining wires
- Cable gland and strain relief: stops pulls reaching the crimp
- Wave and disc springs: Belleville washers keep bolted busbar and lug joints tight

## Make it yourself

- [Quick Connector (For Spade Terminals) (Distracted by Design, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1599622-quick-connector-for-spade-terminals): Printed friction-fit two-wire plug and socket that houses standard male and female spade terminals, offset so it fits only one way *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- [Wire Ring Terminal Boot Protector (tubeless2276, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/1306699-wire-ring-terminal-boot-protector): Scalable TPU insulating boot for ring terminals on 14-16 AWG wire (scale up for 10-12 AWG) *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- [PARKSIDE X20V_Team Battery connector with Faston terminal (Marin, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/70578-parkside-x20v_team-battery-connector-with-faston-t): Printed power-tool battery adapter in which crimped male blade terminals are pressed into grooves and potted with epoxy to touch the battery's contacts *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*

## Pictures, videos and models

- [Kabelschuh verschiedene commons.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Kabelschuh_verschiedene_commons.jpg): Insulated ring and spade terminals, FASTON blade tabs and receptacles, and male and female bullet terminals side by side *(licence: CC BY-SA 3.0 / GFDL)*
- [Kabelschuh detailfoto 2.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Kabelschuh_detailfoto_2.jpg): Close-up of two ring-tongue terminals before and after crimping *(licence: CC BY-SA 3.0)*
- [Female Faston Style Terminals.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Female_Faston_Style_Terminals.jpg): Insulated female blade receptacles in three sizes and colours, with a matchstick for scale *(licence: CC BY-SA 4.0)*
- [Good In A Pinch: The Physics Of Crimped Connections (Hackaday, 2017)](https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/): Cross-section photo of a good open-barrel F-crimp and an explanation of the wire crimp, the insulation crimp and crimp height *(licence: link only)*
- [Crimping tool 04.jpg (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Crimping_tool_04.jpg): A wire and terminal being crimped in a hand crimping tool *(licence: CC BY-SA 3.0)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 5 sentences on this page marked [uncertain].
- ⚑ Research note: *Crimp terminals*: the wire-size colour code differs (Wikipedia *Crimp* and the Grote catalogue: red 22-18 AWG; Wikipedia *FASTON*: red 22-16 AWG; Wikipedia *Electrical connector* gives the metric DIN 46245 code with yellow as 'over 4 to 6 mm²', which looks garbled). Toothed washers under earth terminals: a Hammond ground kit uses an internal lock washer, but GM TechLink says never to use star washers on vehicle grounds. Both sides are recorded.

## Sources

- <https://en.wikipedia.org/wiki/Electrical_connector>
- <https://en.wikipedia.org/wiki/Crimp_(joining)>
- <https://en.wikipedia.org/wiki/FASTON_terminal>
- <https://en.wikipedia.org/wiki/High_resistance_connection>
- <https://hackaday.com/2017/02/09/good-in-a-pinch-the-physics-of-crimped-connections/>
- <https://hackaday.com/2023/12/18/ask-hackaday-what-do-you-do-when-you-cant-solder/>
- <https://hackaday.com/tag/design-fail-manufacturing/>
- <https://hackaday.com/2016/12/07/dont-leave-3d-printers-unattended-they-can-catch-fire/>
- <https://nepp.nasa.gov/files/27631/nstd87394a.pdf>
- <https://www.grote.com/file-attachments/ACC_CAT_04_TERMINAL_CONN.pdf>
- <https://images.toolsid.com/sg-tool-aid/items/pdf/18840-instructions.pdf>
- <https://www.hammfg.com/files/parts/bulletins/BUL86513.pdf>
- <https://www.corvetteactioncenter.com/tech/knowledgebase/article/26/1996-2005-corvette-gm-techlink-star-washers-in-grounds-349.html>
- <https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf>
- <https://commons.wikimedia.org/wiki/File:Kabelschuh_verschiedene_commons.jpg>
- <https://commons.wikimedia.org/wiki/File:Kabelschuh_detailfoto_2.jpg>
- <https://commons.wikimedia.org/wiki/File:Female_Faston_Style_Terminals.jpg>
- <https://commons.wikimedia.org/wiki/File:Crimping_tool_04.jpg>
- <https://api.printables.com/graphql/>
