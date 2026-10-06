---
title: High-current battery plug
description: A two-pin plug and socket with thick metal contacts in a shaped housing that fits only one way round, soldered
  (or crimped) onto heavy wires so a battery pack can be plugged into a model, robot or charger and unplugged by hand, carrying
  tens of amps; the plug and the wire must both suit the current.
num: 352
term: High-current battery connector (polarised DC power plug; bullet connector)
plain_name: A chunky two-pin plug with fat metal pins in a shaped plastic body that only fits one way round, used to plug
  a big rechargeable battery into a drone, model car, robot or charger and pull it out again, carrying a lot of current without
  melting
aliases:
- battery plug, battery connector, LiPo connector, power lead, discharge lead (RC hobby terms)
- 'XT60, XT30, XT90, XT120 (AMASS, brand): yellow polarised plugs with gold-plated brass bullet contacts (AMASS XT60 datasheet;
  Holybro ''Connector & Wire Rating'')'
- 'XT90-S / anti-spark connector (brand variants): a plug with a built-in resistor contact that limits the spark when connecting
  (Aloft Hobbies); AS150, AS300 (AMASS, brand) larger plugs listed by Holybro'
- 'Deans (brand), T-plug, T-connector, Ultra Plug: flat contacts set at right angles in a T so it only fits one way (Wikipedia
  ''DC connector''; Commons ''Deans connector 1.JPG'')'
- 'Tamiya connector (brand), standard and mini Tamiya: latched plug on RC car and airsoft battery packs (Wikipedia ''Tamiya
  connector'')'
- 'EC3, EC5 (E-flite, brand): 3.5 mm and 5 mm contacts in a polarised housing (Horizon Hobby)'
- 'gold bullet connectors, banana plugs (RC usage): single round pin-and-socket pairs, 2, 3.5, 4, 5.5, 6 and 8 mm, used between
  speed controller and motor (Oscar Liang 2014)'
- 'MC4 (brand, Stäubli; MC4-type from other makers): sealed, locking single-pole solar-panel connectors (Wikipedia ''MC4 connector'')'
- 'Anderson SB / SBS (brand): large plugs for vehicle dual-battery systems and UPS banks (Wikipedia ''DC connector''); Anderson
  Powerpole and SAE leads are covered in Genderless connector'
- polarised connector, keyed connector, reverse-polarity-proof connector
family: electrical connections
other_families: [quick-release & tool-free]
finder:
  job: [join and hold, 'lock, and release by hand']
  motion: none
  special_behaviour: [quick-release, hand-release only]
  holding_principle: [friction or clamping, shape]
  reuse_cycles: many times
  seal: none
  access_needed: not applicable
  print_in_place: 'no'
  maker_difficulty: moderate
  processes: [off-the-shelf part, 3D print (FDM), laser cut]
  connects: [wires]
  power_source: [none]
  power_loss: not applicable
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  electrical_band: above about 30 A
  tools: [soldering iron, crimper, heat gun, hand tools]
  load_max: light
  usual_process: off-the-shelf part
  adjustable: 'no'
  removability: tool-free quick release
  power: passive
needs_confirming:
  tools:
    kind: source uncertain
    reason: '`tools_needed` is marked [uncertain] here: "…W iron to fit a T-plug; bigger plugs and thicker wire need more
      heat [uncertain]), solder and flux, wire stri…"'
  load_max:
    kind: best guess
    reason: electrical entry whose mechanical load has no light/medium/heavy band; set to light
confirmed: []
open_points:
- kind: content
  note: '*High-current battery plug*: current ratings differ (AMASS via Holybro: XT60 30 A continuous, 60 A burst; Oscar Liang
    2014: XT60 60 A, bullets 2 mm 20 A to 8 mm 200 A; Horizon Hobby: EC3 60 A continuous; Wikipedia: Deans 40 A (70 A pulse),
    Tamiya rated 20 A, about 15 A in use). Recorded side by side; design to the lower figure.'
uncertain_fields: [processes, tools_needed]
diagram_idea: End-on outlines of four plug faces (XT60 with its bevelled corners, Deans T-plug, Tamiya, a bullet pair) showing
  that each only fits one way, with + and − marked, beside a simple chart linking plug size, wire gauge and continuous amps
  (XT60 + 12 AWG = 30 A, XT90 + 10 AWG = 45 A, AS150 + 8 AWG = 75 A), and a small inset of the anti-spark resistor contact
  touching first.
links:
- url: https://commons.wikimedia.org/wiki/File:T-plug.jpg
  title: T-plug.jpg (Wikimedia Commons, .tirnado)
  shows: A T-shaped polarised plug for low-voltage power circuits (Deans-style T-plug)
  license: CC BY-SA 3.0
- url: https://commons.wikimedia.org/wiki/File:Deans_connector_1.JPG
  title: Deans connector 1.JPG (Wikimedia Commons, KundaliniZero)
  shows: 'A Deans-style T-plug pair: the male half with two flat gold contacts at right angles, and the matching female half,
    so it fits only one way'
  license: CC BY-SA 3.0
- url: https://commons.wikimedia.org/wiki/File:Tamiya_Connector.gif
  title: Tamiya Connector.gif (Wikimedia Commons)
  shows: A standard Tamiya battery connector, the plug used on many RC car battery packs
  license: Public domain
- url: https://commons.wikimedia.org/wiki/File:MC4_Connector_Front_and_Top_View.jpg
  title: MC4 Connector Front and Top View.jpg (Wikimedia Commons, Orion Lawlor)
  shows: Positive and negative MC4 solar connectors, showing the red sealing ring and the locking clips
  license: CC0
- url: https://commons.wikimedia.org/wiki/File:Tamiya_adapter.jpg
  title: Tamiya adapter.jpg (Wikimedia Commons, Cqdx)
  shows: An adapter cable between a standard Tamiya and a mini Tamiya connector, showing the two sizes side by side
  license: CC0
make_it_yourself:
- url: https://www.printables.com/model/82137-xt60-panel-mount
  title: XT60 Panel Mount (Fuzebox, Printables) (URL from Printables API, page not opened)
  what_it_is: 40 x 14 mm, 3 mm thick plate that holds an XT60 in a panel with M3 screws; prints without supports
  license: Creative Commons Attribution-NonCommercial-ShareAlike
- url: https://www.printables.com/model/117183-xt30-xt60-xt90-solder-assistant
  title: XT30 XT60 XT90 Solder Assistant (Guyzerr, Printables) (URL from Printables API, page not opened)
  what_it_is: Holder that grips a mated XT30, XT60 or XT90 pair and its wires while you solder, keeping the pins aligned
  license: Creative Commons Attribution-NonCommercial-ShareAlike
- url: https://www.printables.com/model/120493-xt60xt90-connector-soldering-tool
  title: XT60/XT90 connector soldering tool (LuKowalski, Printables) (URL from Printables API, page not opened)
  what_it_is: Spring-loaded PETG jig that lines the wires up with XT60 or XT90 contacts to speed soldering and avoid overheating
    the housing; needs two springs and M2 screws
  license: Creative Commons Attribution-NonCommercial-ShareAlike
sources:
- https://docs.holybro.com/power-module-and-pdb/power-module/connector-and-wire-rating
- https://mrsdprojects.ri.cmu.edu/2025teamb/wp-content/uploads/sites/84/2025/05/xt60.pdf
- https://en.wikipedia.org/wiki/DC_connector
- https://en.wikipedia.org/wiki/Tamiya_connector
- https://en.wikipedia.org/wiki/MC4_connector
- https://oscarliang.com/choosing-gold-bullet-connectors-motor-esc/
- https://assets.horizonhobby.com/product/connector-ec3-battery-with-4-wire-16-awg/EFLAEC310.html
- https://assets.horizonhobby.com/product/extension-lead-ec5-with-6-wire-10-awg/EFLAEC506.html
- https://alofthobbies.com/products/xt90-s-with-spark-suppression
- https://flitetest.com/articles/how-to-soldering-battery-connector
- https://flitetest.com/articles/soldering-battery-connectors
- https://ehs.mit.edu/wp-content/uploads/2019/09/Lithium_Battery_Safety_Guidance.pdf
- https://help.prusa3d.com/article/pla_2062
- https://commons.wikimedia.org/wiki/File:T-plug.jpg
- https://commons.wikimedia.org/wiki/File:Deans_connector_1.JPG
- https://commons.wikimedia.org/wiki/File:Tamiya_Connector.gif
- https://commons.wikimedia.org/wiki/File:MC4_Connector_Front_and_Top_View.jpg
- https://commons.wikimedia.org/wiki/File:Tamiya_adapter.jpg
- https://api.printables.com/graphql/
research: research/connection-types/results/Highcurrent_battery_plug_bullet_connector_polarised_battery_connector.json
glossary: [form-fit--force-fit--material-bond, keying, gland]
---

A two-pin plug and socket with thick metal contacts in a shaped housing that fits only one way round, soldered (or crimped) onto heavy wires so a battery pack can be plugged into a model, robot or charger and unplugged by hand, carrying tens of amps; the plug and the wire must both suit the current.

**In plain words:** A chunky two-pin plug with fat metal pins in a shaped plastic body that only fits one way round, used to plug a big rechargeable battery into a drone, model car, robot or charger and pull it out again, carrying a lot of current without melting. **Proper term:** High-current battery connector (polarised DC power plug; bullet connector).

**Also called:** battery plug, battery connector, LiPo connector, power lead, discharge lead (RC hobby terms); XT60, XT30, XT90, XT120 (AMASS, brand): yellow polarised plugs with gold-plated brass bullet contacts (AMASS XT60 datasheet; Holybro 'Connector & Wire Rating'); XT90-S / anti-spark connector (brand variants): a plug with a built-in resistor contact that limits the spark when connecting (Aloft Hobbies); AS150, AS300 (AMASS, brand) larger plugs listed by Holybro; Deans (brand), T-plug, T-connector, Ultra Plug: flat contacts set at right angles in a T so it only fits one way (Wikipedia 'DC connector'; Commons 'Deans connector 1.JPG'); Tamiya connector (brand), standard and mini Tamiya: latched plug on RC car and airsoft battery packs (Wikipedia 'Tamiya connector'); EC3, EC5 (E-flite, brand): 3.5 mm and 5 mm contacts in a polarised housing (Horizon Hobby); gold bullet connectors, banana plugs (RC usage): single round pin-and-socket pairs, 2, 3.5, 4, 5.5, 6 and 8 mm, used between speed controller and motor (Oscar Liang 2014); MC4 (brand, Stäubli; MC4-type from other makers): sealed, locking single-pole solar-panel connectors (Wikipedia 'MC4 connector'); Anderson SB / SBS (brand): large plugs for vehicle dual-battery systems and UPS banks (Wikipedia 'DC connector'); Anderson Powerpole and SAE leads are covered in Genderless connector; polarised connector, keyed connector, reverse-polarity-proof connector.

## How it works

Each contact is a round or flat metal pin that slides into a matching socket; the tight fit presses the metal surfaces firmly together, so the joint has a very low resistance (0.55 milliohm for an XT60 contact; AMASS datasheet) and stays cool at tens of amps. The plastic housing is shaped (bevelled corners, a T or D-shaped contact layout) so the halves only fit with positive to positive, which stops a battery being connected backwards (Wikipedia 'DC connector'). The current rating depends on how hot the plug gets: AMASS rates a genuine XT60 at 30 A continuous for a temperature rise under 60 °C, with 12 AWG wire (Holybro), so a thinner wire or poor solder joint lowers the real rating. Anti-spark versions first connect through a small resistor so the speed controller's capacitors charge slowly before the main contacts close (Aloft Hobbies).

## Parts

A few parts per side: a moulded plastic housing (nylon, flame-retardant) holding two contacts, usually gold-plated brass bullets with solder cups (AMASS XT60 datasheet); the battery lead and device lead each get one half. Variants add a latch (Tamiya), a resistor contact (anti-spark XT90-S), or a rubber seal ring and locking clips (MC4). Loose bullet connectors are single pins and sockets, one pair per wire, insulated with heat-shrink (Oscar Liang 2014).

## Everyday examples

- The yellow XT60 plug on a drone's lithium battery and power module (Holybro 'Connector & Wire Rating')
- The latched Tamiya plug on radio-controlled car battery packs and airsoft gun batteries (Wikipedia 'Tamiya connector')
- The red Deans-style T-plug on RC car batteries (Commons 'Deans connector 1.JPG')
- The black MC4 plugs on the leads of a solar panel (Wikipedia 'MC4 connector')

## When to use it

Use one when a battery has to be unplugged often, for charging or swapping, and the current is too high for small signal plugs: drones, RC cars, boats and planes, combat and hobby robots, and similar battery packs. Pick the size from the current and match the wire to it (Holybro). Use bullet connectors between a speed controller and motor when you want to swap motors or reverse a motor by swapping two wires without resoldering (Oscar Liang 2014). Use a latched type (Tamiya) where vibration or knocks could pull a plain plug apart, and a sealed, locking MC4-type connector for solar panels outdoors (Wikipedia). The polarised shape is the main safety feature: it stops a pack being plugged in backwards (Wikipedia 'DC connector').

## When not to use it

Not for mains: these are for battery and low-voltage DC wiring. Not for small currents or signals: use a wire-to-board plug (JST-type balance and servo plugs) or a standard barrel jack. If any half must mate any other half, use a genderless connector such as Anderson Powerpole (see Genderless connector). Don't use a plug or wire that is undersized for the current: change both to the next size up (Holybro). Don't use plain friction plugs where a tug, crash or vibration must never disconnect power; add a latch or strap, or use a locking type. Don't mix MC4 connectors from different makers: certifications and the US National Electrical Code and UL 6703 require the same type and brand (Wikipedia 'MC4 connector'). Don't unplug under load to switch something off; use a switch or fuse. Battery systems above about 60 V bring shock and arc hazards that need proper protection (MIT 'Lithium Battery Safety Guidance').

## Details

- **What it does (jobs):**
  - join and hold: makes an electrical joint for battery power that can be plugged and unplugged by hand (the finder reaches this entry through the 'electrical connections' family)
  - lock, and release by hand: latching types (Tamiya's latch; MC4's locking clips, which need a tool to release) stop the plug pulling apart by accident (Wikipedia 'Tamiya connector', 'MC4 connector')
- **Movement:** none: once mated the halves don't move; they are pushed together and pulled apart along one line.
- **Directions it can move (degrees of freedom):** 0 when mated. While plugging in, the halves slide along one axis only.
- **Special behaviour:**
  - quick-release: plug in and pull apart by hand, with no tools, to swap or charge a battery (Oscar Liang 2014). The housing shape also lets it fit only one way round ([keying](../glossary.md#keying)), which is not one of the listed behaviours
  - hand-release only: Tamiya plugs have a latch that 'prevents accidental disconnection' until pressed (Wikipedia 'Tamiya connector'), and MC4 plugs lock and 'require a tool to disconnect them' (Wikipedia 'MC4 connector'); plain XT, Deans, EC and bullet plugs have no latch
- **How it holds:**
  - friction or clamping ([force-fit](../glossary.md#form-fit--force-fit--material-bond)): XT, Deans, EC and bullet plugs are held together only by the tight fit of their contacts
  - shape (the parts interlock; form-fit): Tamiya's latch and MC4's locking clips hook into the other half (Wikipedia 'Tamiya connector', 'MC4 connector')
- **Input and output:** not applicable
- **Power:** passive (no power needed).
- **Load:** Electrical: above about 30 A (genuine AMASS ratings with the matching wire, continuous / 1-minute burst at under 60 °C temperature rise: XT60 with 12 AWG 30/60 A, XT90 with 10 AWG 45/90 A, XT120 with 8 AWG 60/120 A, AS150 with 8 AWG 75/150 A, AS300 with 6 AWG 150/300 A (Holybro); small types are lower, e.g. Tamiya 'up to about 15 A' in practice (Wikipedia)); extra-low voltage only (as used by makers for battery packs; the plugs themselves are rated higher, e.g. XT60 500 V DC (AMASS) and MC4 1500 V DC (Wikipedia), but solar strings at hundreds of volts are outside this entry). Mechanical: light: friction-held plugs (XT, Deans, EC, bullets) can be pulled apart by a firm tug or a crash; latched Tamiya and locked MC4 hold against pulling (Wikipedia). The solder joints at the back are weak against bending and pulling, so the wires need strain relief.
- **Play and precision:** not applicable
- **Taking it apart:** tool-free quick release: the two halves plug and unplug by hand (MC4 needs its unlocking tool). The wires are soldered or crimped into each half and are not meant to come out.
- **How often it can be reused:** many times: AMASS recommends 1000 mating cycles for the XT60 (AMASS XT60 datasheet). Sparks when connecting and pulling apart under load pit the contacts and shorten their life (Aloft Hobbies; Wikipedia 'MC4 connector').
- **Sealing:** none for XT, Deans, EC, Tamiya and bullet plugs (Tamiya's housing separates the two contacts so it is usable in damp, dirty conditions, but it is not sealed; Wikipedia 'Tamiya connector'). Watertight for MC4-type solar connectors: a rubber sealing ring keeps out moisture, but only on cable of the correct diameter (Wikipedia 'MC4 connector').
- **Adjustable:** no.
- **Access needed:** not applicable: most are in-line plugs on flying leads. Panel-mount versions are fixed into a printed or cut panel from the front (Printables 'XT60 Panel Mount').
- **Materials:** Contacts: brass, gold-plated (AMASS XT60: brass gold plated, contact resistance 0.55 milliohm). Housing: nylon (PA) to UL94 V-0 flame rating, working range −20 to 120 °C (AMASS XT60 datasheet); some Deans-style housings soften when soldered (Wikipedia 'DC connector'). Wire: stranded copper, often soft silicone-insulated wire (Flite Test), sized to the plug: 12 AWG for XT60, 10 AWG for XT90, 8 AWG for XT120 and AS150, 6 AWG for AS300 (Holybro). Choose bullets that fit the wire without cutting strands away (Oscar Liang 2014). MC4: double-insulated, UV- and heat-resistant PV cable of the right diameter (Wikipedia 'MC4 connector').
- **Heat, cold, water and wear:** Heat: AMASS XT60 working range is −20 to 120 °C, and its current rating assumes a temperature rise of under 60 °C (AMASS datasheet; Holybro). Deans-type housings can soften and twist if overheated while soldering (Wikipedia 'DC connector'). Lithium packs themselves should be kept out of direct sunlight, off hot surfaces and out of hot places (MIT). Water: XT, Deans, EC and bullet plugs are not sealed; Tamiya plugs are usable in damp, dirty conditions at low current (Wikipedia); MC4 is sealed by a rubber ring when used on the correct cable, and its cable must be UV- and heat-resistant because 'most cables deteriorate if used outdoors without protection from sunlight' (Wikipedia 'MC4 connector'). Corrosion: leftover soldering flux paste is corrosive, so clean it off (Flite Test). Wear: arcing on connection pits the contacts and raises their resistance (Wikipedia 'MC4 connector'; Aloft Hobbies).

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: plugs, sockets and ready-made leads are bought and soldered or crimped onto the wires
  - 3D print (FDM): panel mounts, holders and soldering jigs for the plugs (see make_it_yourself)
  - laser cut: plates with a cut-out for a panel-mount plug ⚑ [uncertain]
- **Printing it in one piece (print in place):** no: the contacts are metal and are bought; only mounts, holders and jigs are printed.
- **Tools:** To fit: a soldering iron with enough heat for thick wire and large brass contacts (a Flite Test community guide used a 30 W iron to fit a T-plug; bigger plugs and thicker wire need more heat ⚑ [uncertain]), solder and flux, wire strippers, heat-shrink tubing and a heat gun, and a holder or jig (Flite Test). Crimp-type plugs (Tamiya-type, Anderson, MC4) need their matching crimp tool, and MC4 needs its unlocking tool (Wikipedia 'MC4 connector'). A multimeter to check polarity before first use. To use: none.
- **Difficulty:** moderate: the plugs are cheap and easy to buy, but soldering thick wire into big brass cups needs a hot iron and some practice without melting the housing (Flite Test; Wikipedia 'DC connector'), and the real hazard is shorting a live lithium pack while working on its leads (Flite Test).

### 3D printing tips

1) Never let a printed part carry current or stand in for a contact; print only mounts, covers, strain reliefs and jigs. 2) Material: AMASS ratings allow the plug to warm by up to 60 °C at its rated current (Holybro), while PLA 'gets soft and deforms at temperatures over 60 °C' (Prusa 'PLA'), so print mounts that hold high-current plugs in PETG, ABS or ASA; jig designers also recommend PETG (Printables 120493). 3) Panel mounts: a popular XT60 panel mount is a 40 x 14 mm, 3 mm thick plate for M3 screws that prints without supports, and its author notes some off-brand XT60s need a patch of tape to fit tightly, so check your plug's real size and print a test (Printables 82137). 4) Soldering jigs: printed holders keep the plug and wires still; keep the male and female halves plugged together while soldering so the pins stay aligned if the housing softens (Printables 117183; Flite Test). 5) Leave room in printed battery bays for the plug body, the heat-shrink over the solder cups and the bend of thick wire, and add a strap or clamp so a yank on the battery pulls the housing, not the solder joints (see Cable [gland](../glossary.md#gland) and strain relief).

### Buying one (off-the-shelf parts)

XT30, XT60, XT90 and XT120 plugs and sockets, and XT90-S anti-spark versions (AMASS, brand; Holybro; Aloft Hobbies); AS150 and AS300 larger plugs (Holybro); Deans-style T-plugs (Wikipedia 'DC connector'); standard and mini Tamiya housings and crimp contacts, also made by Molex, e.g. housing 19-09-1029 with crimp 02-09-1119 (Wikipedia 'Tamiya connector'); EC3 and EC5 plugs and leads (Horizon Hobby); gold bullet connectors 2, 3.5, 4, 5.5, 6 and 8 mm (Oscar Liang 2014); MC4 and MC4-compatible solar connectors with matching crimp and unlocking tools (Wikipedia 'MC4 connector'); Anderson SB / SBS plugs (Wikipedia 'DC connector'); ready-made pigtails and adapter leads; silicone wire in 6-14 AWG; heat-shrink tubing. Brand names are given only as catalogue search terms.

## Rules of thumb

- Size the plug and the wire together. Genuine AMASS ratings (continuous, 4 hours / burst, 1 minute; both at under 60 °C temperature rise): XT60 + 12 AWG 30 A / 60 A; XT90 + 10 AWG 45 A / 90 A; XT120 + 8 AWG 60 A / 120 A; AS150 + 8 AWG 75 A / 150 A; AS300 + 6 AWG 150 A / 300 A. For higher currents change both the plug type and the wire size (Holybro 'Connector & Wire Rating').
- AMASS's own XT60 datasheet gives: rated current 30 A, momentary current 60 A, 500 V DC, contact resistance 0.55 milliohm, 1000 mating cycles, recommended wire 12 AWG, working temperature −20 to 120 °C; the female (XT60-F) is listed for the battery and the male (XT60-M) for the controller (AMASS XT60-F / XT60-M datasheet).
- Figures from other sources are higher and are not measured the same way; record them side by side and design to the lower one: Oscar Liang's rules give 2 mm bullets up to 20 A, 3.5 mm 40 A, XT60 60 A, 4 mm 70 A, 6 mm 120 A, 8 mm 200 A (Oscar Liang 2014); Horizon Hobby says EC3 is 'capable of 60 continuous amps' and EC5 'more than 120A continuous current with 10-awg wire' (Horizon Hobby); Deans-type plugs up to 40 A (pulse 70 A) depending on make (Wikipedia 'DC connector'); Tamiya is rated 20 A at 160 V but about 15 A at 12 V in real use (Wikipedia 'Tamiya connector').
- Change a battery's plug one wire at a time: cut one lead, solder and heat-shrink it, then do the other, so both bare ends are never exposed together (Flite Test 'How to - Soldering battery connector'; Flite Test 'Soldering Battery Connectors').
- Slide the heat-shrink on before soldering, make sure both the wire and the cup are hot enough to take solder, don't overheat the housing, and double-check polarity (red to +) before plugging in (Flite Test 'Soldering Battery Connectors').
- On a Deans-type T-plug the negative (−) is usually the parallel pin and the positive (+) the perpendicular pin (Wikipedia 'DC connector'). On a Tamiya the positive goes to the square terminal, but some airsoft packs are wired the other way (Wikipedia 'Tamiya connector').
- Choose bullet connectors that fit the wire: if you have to cut strands away to make it fit, the connector is too small (Oscar Liang 2014).
- Never connect or disconnect DC connectors under load: the arc can melt the contacts, raising resistance and causing overheating, and DC arcs don't self-extinguish like AC (Wikipedia 'MC4 connector'). Use an anti-spark plug where large capacitors cause a spark on connecting (Aloft Hobbies).

## Common failures

Melted or twisted housing from too much soldering heat, leaving pins misaligned so the plug won't mate; solder with the halves plugged together and work quickly (Wikipedia 'DC connector'; Flite Test). Cold or dry solder joints in the big cups because the wire or cup wasn't hot enough (Flite Test). Plug or wire too small for the current, so it runs hot (Holybro). Pitted, high-resistance contacts from sparks when plugging in or unplugging under load (Aloft Hobbies; Wikipedia 'MC4 connector'). Wrong polarity wiring, especially on Tamiya packs where some airsoft packs are reversed (Wikipedia 'Tamiya connector'; Flite Test). Ordering the wrong half, because many hobby shops name the gender after the housing rather than the metal contact (Wikipedia 'Tamiya connector'). Off-brand plugs that differ slightly in size and don't fit mounts (Printables 82137). Strands cut off to squeeze wire into a small bullet (Oscar Liang 2014). Exposed copper at the solder cups if the heat-shrink is left off or slides back (readers of Flite Test's guide ask how to stop it sliding). Mixed-brand MC4 connectors that don't seal or overheat (Wikipedia 'MC4 connector').

## Safety

Shorted lithium packs burn: 'short-circuiting them will transform all this energy into heat/fire' (Flite Test), and fires at MIT were linked to 'shorts from improperly wired or isolated connections' (MIT 'Lithium Battery Safety Guidance'). When rewiring a pack, keep at least one wire insulated at all times and never cut both leads together (Flite Test). Reversed polarity: 'Do not reverse the polarity' (MIT); the T-plug's shape exists to stop reversed connection and the 'LiPo flash' that can cause burns (Wikipedia 'DC connector'); check polarity with a meter before first use. The plug and the wire must both suit the current, or they overheat (Holybro). Don't connect or disconnect under load: DC arcs melt contacts (Wikipedia 'MC4 connector'). Charging: use the right charger and settings, balance-charge packs of 2 cells and more, and never charge unattended (MIT). Disconnect a pack that smells, gets hot or swells (MIT). Solar: panel strings can reach 600-1500 V DC (Wikipedia 'MC4 connector'), which is dangerous and must be installed under local electrical rules, so this entry gives no solar or mains wiring steps. Soldering burns and fumes: see Soldered wire joint.

## Related

- Genderless connector (hermaphroditic coupling): Anderson Powerpole and SAE leads, where any half mates any other; Powerpole is the genderless choice for battery power
- Keying (one-way-only fit): the shaped housing that stops reversed connection is keying
- Soldered wire joint: how wires are usually fixed into XT, Deans and bullet plugs
- Heat-shrink tubing: insulates each solder cup and bullet
- Crimp terminals (ring, fork and spade terminals): crimped bullet and blade terminals for car and appliance wiring
- Wire-to-board plug connectors: the small JST-type plugs used for battery balance leads and low-current power
- Standard plug-and-socket connector (barrel jack, USB): low-current DC power
- Magnetic connector: a plug held by magnets that breaks away safely when pulled
- Battery holder and battery contacts: spring contacts for loose cylindrical cells at low current
- Binding post and banana plug: test-lead plugs; RC 'banana' bullets share the name but are soldered in-line
- Cable gland and strain relief: keeps pulls on the battery lead off the solder joints

## Make it yourself

- [XT60 Panel Mount (Fuzebox, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/82137-xt60-panel-mount): 40 x 14 mm, 3 mm thick plate that holds an XT60 in a panel with M3 screws; prints without supports *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- [XT30 XT60 XT90 Solder Assistant (Guyzerr, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/117183-xt30-xt60-xt90-solder-assistant): Holder that grips a mated XT30, XT60 or XT90 pair and its wires while you solder, keeping the pins aligned *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*
- [XT60/XT90 connector soldering tool (LuKowalski, Printables) (URL from Printables API, page not opened)](https://www.printables.com/model/120493-xt60xt90-connector-soldering-tool): Spring-loaded PETG jig that lines the wires up with XT60 or XT90 contacts to speed soldering and avoid overheating the housing; needs two springs and M2 screws *(licence: Creative Commons Attribution-NonCommercial-ShareAlike)*

## Pictures, videos and models

- [T-plug.jpg (Wikimedia Commons, .tirnado)](https://commons.wikimedia.org/wiki/File:T-plug.jpg): A T-shaped polarised plug for low-voltage power circuits (Deans-style T-plug) *(licence: CC BY-SA 3.0)*
- [Deans connector 1.JPG (Wikimedia Commons, KundaliniZero)](https://commons.wikimedia.org/wiki/File:Deans_connector_1.JPG): A Deans-style T-plug pair: the male half with two flat gold contacts at right angles, and the matching female half, so it fits only one way *(licence: CC BY-SA 3.0)*
- [Tamiya Connector.gif (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Tamiya_Connector.gif): A standard Tamiya battery connector, the plug used on many RC car battery packs *(licence: Public domain)*
- [MC4 Connector Front and Top View.jpg (Wikimedia Commons, Orion Lawlor)](https://commons.wikimedia.org/wiki/File:MC4_Connector_Front_and_Top_View.jpg): Positive and negative MC4 solar connectors, showing the red sealing ring and the locking clips *(licence: CC0)*
- [Tamiya adapter.jpg (Wikimedia Commons, Cqdx)](https://commons.wikimedia.org/wiki/File:Tamiya_adapter.jpg): An adapter cable between a standard Tamiya and a mini Tamiya connector, showing the two sizes side by side *(licence: CC0)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 2 sentences on this page marked [uncertain].
- ⚑ Finder value `tools` = soldering iron, crimper, heat gun, hand tools (source uncertain): `tools_needed` is marked ⚑ [uncertain] here: "…W iron to fit a T-plug; bigger plugs and thicker wire need more heat ⚑ [uncertain]), solder and flux, wire stri…"
- ⚑ Finder value `load_max` = light (best guess): electrical entry whose mechanical load has no light/medium/heavy band; set to light
- ⚑ Research note: *High-current battery plug*: current ratings differ (AMASS via Holybro: XT60 30 A continuous, 60 A burst; Oscar Liang 2014: XT60 60 A, bullets 2 mm 20 A to 8 mm 200 A; Horizon Hobby: EC3 60 A continuous; Wikipedia: Deans 40 A (70 A pulse), Tamiya rated 20 A, about 15 A in use). Recorded side by side; design to the lower figure.

## Sources

- <https://docs.holybro.com/power-module-and-pdb/power-module/connector-and-wire-rating>
- <https://mrsdprojects.ri.cmu.edu/2025teamb/wp-content/uploads/sites/84/2025/05/xt60.pdf>
- <https://en.wikipedia.org/wiki/DC_connector>
- <https://en.wikipedia.org/wiki/Tamiya_connector>
- <https://en.wikipedia.org/wiki/MC4_connector>
- <https://oscarliang.com/choosing-gold-bullet-connectors-motor-esc/>
- <https://assets.horizonhobby.com/product/connector-ec3-battery-with-4-wire-16-awg/EFLAEC310.html>
- <https://assets.horizonhobby.com/product/extension-lead-ec5-with-6-wire-10-awg/EFLAEC506.html>
- <https://alofthobbies.com/products/xt90-s-with-spark-suppression>
- <https://flitetest.com/articles/how-to-soldering-battery-connector>
- <https://flitetest.com/articles/soldering-battery-connectors>
- <https://ehs.mit.edu/wp-content/uploads/2019/09/Lithium_Battery_Safety_Guidance.pdf>
- <https://help.prusa3d.com/article/pla_2062>
- <https://commons.wikimedia.org/wiki/File:T-plug.jpg>
- <https://commons.wikimedia.org/wiki/File:Deans_connector_1.JPG>
- <https://commons.wikimedia.org/wiki/File:Tamiya_Connector.gif>
- <https://commons.wikimedia.org/wiki/File:MC4_Connector_Front_and_Top_View.jpg>
- <https://commons.wikimedia.org/wiki/File:Tamiya_adapter.jpg>
- <https://api.printables.com/graphql/>
