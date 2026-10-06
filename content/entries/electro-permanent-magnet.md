---
title: Electro-permanent magnet
description: 'A solid-state magnet made of two kinds of permanent magnet and a coil: a short pulse of current flips one of
  the magnets so the pair either adds up (on, gripping steel strongly) or cancels out (off), and it stays in that state with
  no power until the next pulse.'
num: 104
term: Electropermanent magnet (EPM)
plain_name: A magnet you switch on or off with a quick zap of electricity; after the zap it keeps holding (or stays off) with
  no power at all
aliases:
- electro-permanent magnet / EP magnet
- EPM gripper / electropermanent magnetic gripper / magnetic payload gripper (drones)
- programmable magnet / switchable electropermanent magnet
- electro-permanent lifting magnet (cranes)
- electro-permanent magnetic chuck / electro-permanent work holding (machine tools)
- electro-permanent magnetic end-of-arm tooling (EOAT) / magnetic quick changer (robots)
- FluxGrip (brand, Zubax Robotics)
- OpenGrab EPM (brand, NicaDrone and Zubax; discontinued)
- ferreed (1960s telephone switch built on the same idea)
family: powered & active connectors
other_families:
- clamping, magnetic & friction connections
- quick-release & tool-free
finder:
  job: [hold or release using power, join and hold]
  motion: none
  special_behaviour: [quick-release]
  holding_principle: [magnetic]
  reuse_cycles: effectively unlimited
  seal: none
  access_needed: one side only
  print_in_place: 'no'
  maker_difficulty: hard
  processes: [off-the-shelf part, 3D print (FDM), sheet metal]
  connects: [any solid parts]
  power_source: [electricity]
  power_loss: keeps its last state
  motion_in: [not applicable]
  motion_out: [not applicable]
  shaft_layout: [not applicable]
  overload_response: not applicable
  clicks: not applicable
  tools: [soldering iron, crimper, hand tools]
  load_max: heavy
  usual_process: off-the-shelf part
  adjustable: 'yes'
  removability: tool-free quick release
  power: powered
needs_confirming:
  reuse_cycles:
    kind: source uncertain
    reason: '`reuse_cycles` is marked [uncertain] here: "effectively unlimited [uncertain:…"'
  connects:
    kind: best guess
    reason: joins parts, but no specific kind of part found; set to any solid parts
  power_source:
    kind: best guess
    reason: powered, but no power source named in `power`; defaulted to electricity
confirmed: []
open_points: []
uncertain_fields: [reuse_cycles, make_it_yourself]
diagram_idea: 'Two side-by-side cutaways of a short neodymium bar and an alnico bar between two iron end caps, with a coil
  round the alnico and a steel plate below: ''ON'', with both magnet arrows pointing the same way and field lines passing
  out through the plate, and ''OFF'', with the alnico arrow reversed and the field lines looping round inside; a small lightning
  bolt on the coil marks the brief switching pulse, and a battery icon crossed out shows that no power is needed in either
  state.'
links:
- url: https://commons.wikimedia.org/wiki/File:Electropermanent_magnet_switching_simulation.gif
  title: Electropermanent magnet switching simulation.gif (Wikimedia Commons, Magneticswizard)
  shows: Animated simulation of an EPM switching ON and OFF by reversing the AlNiCo magnetisation, showing the flux lines
    and holding force on a steel workpiece
  license: CC BY 4.0
- url: https://en.wikipedia.org/wiki/Electropermanent_magnet
  title: Electropermanent magnet (Wikipedia)
  shows: Explanation with diagrams of the on and off states, magnetic-circuit simulations and air-gap animation; lists uses
    (drone grippers, Project Ara, programmable matter)
  license: text CC BY-SA 4.0; images per file
- url: https://www.hizook.com/electropermanent-magnets-programmable-magnets-zero-static-power-consumption-enable-s/
  title: 'Electropermanent Magnets: Programmable Magnets with Zero Static Power Consumption Enable Smallest Modular Robots
    Yet (Hizook)'
  shows: Photos and cross-sections of MIT's tiny EPMs and 12 mm 'Pebbles' robots, B-H curves, a historic ferreed switch and
    an industrial work-holding chuck
  license: link only
- url: https://www.youtube.com/watch?v=FqN77SZF5zU
  title: 'EEVblog 1656 - MAILBAG: ElectroPermanent Magnet, DIN PSU''s, Sponge, Beelink EQ14 N150 PC (EEVblog, YouTube; title
    confirmed via YouTube oEmbed)'
  shows: Dave Jones testing a Zubax FluxGrip EPM; the EPM segment starts at about 7:30 (per Hackaday)
  license: link only
- url: https://hackaday.com/2013/07/12/electro-permanent-magnets-for-quadcopters/
  title: Electro-permanent Magnets For Quadcopters (Hackaday, 2013)
  shows: The open-hardware OpenGrab EPM used to let quadcopters pick up and drop steel payloads, with photos and links
  license: link only
make_it_yourself:
- url: https://github.com/Zubax/opengrab_epm_v3
  title: OpenGrab EPM v3 (Zubax/NicaDrone, GitHub; README read via raw.githubusercontent.com)
  what_it_is: 'Open-hardware electropermanent magnet gripper: hardware design files, firmware and flashing instructions (product
    discontinued; the design remains a reference)'
  license: hardware CC BY-SA 4.0; firmware GPL v3
- url: https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf
  title: 'Electropermanent Magnetic Connectors and Actuators: Devices and Their Application in Programmable Matter (Ara Knaian,
    MIT PhD thesis, 2010, PDF)'
  what_it_is: Physics, design formulas, materials and methods for building and testing small EPMs from NdFeB and alnico rods
    with iron end caps, plus drive-circuit details
  license: 'link only [uncertain: thesis copyright terms not checked]'
- url: https://ardupilot.org/copter/docs/common-electro-permanent-magnet-V3.html
  title: Electro Permanent Magnet Gripper (OpenGrab EPM v3) (ArduPilot Copter documentation)
  what_it_is: How to wire and control an EPM gripper from a drone flight controller (PWM, DroneCAN, mission commands) and
    where to mount it
  license: link only
- url: https://fluxgrip.zubax.com/
  title: FluxGrip reference manual (Zubax Robotics)
  what_it_is: 'Integration manual for a ready-made EPM gripper: how it works, holding-force physics, electrical interface
    and fault handling'
  license: link only
sources:
- https://en.wikipedia.org/wiki/Electropermanent_magnet
- https://www.hizook.com/electropermanent-magnets-programmable-magnets-zero-static-power-consumption-enable-s/
- https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf
- https://dspace.mit.edu/handle/1721.1/60151
- https://fluxgrip.zubax.com/chapters/functional.html
- https://fluxgrip.zubax.com/chapters/hardware/fg40.html
- https://fluxgrip.zubax.com/
- https://zubax.com/blog/zubax-robotics-releases-fluxgrip-fg40-an-electropermanent-magnet-for-payload-attachment-in-drones-that-will-obsolete-existing-electromechanical-alternatives/2296
- https://ardupilot.org/copter/docs/common-electro-permanent-magnet-V3.html
- https://raw.githubusercontent.com/Zubax/opengrab_epm_v3/master/README.md
- https://github.com/Zubax/opengrab_epm_v3 (appeared in search results; README read via raw.githubusercontent.com)
- https://hackaday.com/2013/07/12/electro-permanent-magnets-for-quadcopters/
- https://hackaday.com/2026/04/01/watch-an-electro-permanent-magnet-in-action/
- https://hackaday.com/tag/epm/
- https://www.walmagmagnetics.com/blog/differences-between-permanent-magnets-electropermanent-magnets-and-electromagnets
- https://www.hvrmagnet.com/blog/why-doesnt-the-electro-permanent-lifting-magnet-force-disappear-after-power-failure/
- https://www.hvrmagnet.com/blog/electro-permanent-magnetic-eoat-with-quick-change-system/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9317373/
- https://www.kjmagnetics.com/neodymium-magnet-safety.asp
- https://www.kjmagnetics.com/blog/temperature-and-neodymium-magnets
- https://www.cpsc.gov/content/cpsc-warns-high-powered-magnets-and-children-make-a-deadly-mix
- https://help.prusa3d.com/article/pla_2062
- https://help.prusa3d.com/article/petg_2059
- https://help.prusa3d.com/article/asa_1809
- https://commons.wikimedia.org/wiki/File:Electropermanent_magnet_switching_simulation.gif
- https://www.youtube.com/watch?v=FqN77SZF5zU (verified via YouTube oEmbed)
- https://www.modlabupenn.org/wp-content/uploads/tosun2016epface.pdf
- https://www.modlabupenn.org/ep-face/
research: research/connection-types/results/Electropermanent_magnet.json
---

A solid-state magnet made of two kinds of permanent magnet and a coil: a short pulse of current flips one of the magnets so the pair either adds up (on, gripping steel strongly) or cancels out (off), and it stays in that state with no power until the next pulse.

**In plain words:** A magnet you switch on or off with a quick zap of electricity; after the zap it keeps holding (or stays off) with no power at all. **Proper term:** Electropermanent magnet (EPM).

**Also called:** electro-permanent magnet / EP magnet; EPM gripper / electropermanent magnetic gripper / magnetic payload gripper (drones); programmable magnet / switchable electropermanent magnet; electro-permanent lifting magnet (cranes); electro-permanent magnetic chuck / electro-permanent work holding (machine tools); electro-permanent magnetic end-of-arm tooling (EOAT) / magnetic quick changer (robots); FluxGrip (brand, Zubax Robotics); OpenGrab EPM (brand, NicaDrone and Zubax; discontinued); ferreed (1960s telephone switch built on the same idea).

## How it works

The neodymium magnet always points the same way and is too 'hard' to be changed. The alnico magnet can be re-magnetised in either direction by a very short, strong current pulse through the coil wound around it. When both magnets point the same way, their field flows out through the iron pole pieces and grips a steel plate like a strong permanent magnet (on). A pulse the other way flips only the alnico, so the field just loops round inside the device and almost none reaches the outside (off). No current is needed to stay on or off: energy is used only for the moment of switching.

## Parts

A small assembly that acts as one unit: a strong 'hard' permanent magnet (neodymium, NdFeB) and a switchable 'semi-hard' magnet (usually alnico) side by side, soft-iron pole pieces capping both ends, a copper coil wound around the alnico, and a driver circuit (energy-storage capacitor, H-bridge switches and a controller) that fires the pulses. Plus a steel target plate on the object being held.

## Everyday examples

- big crane magnets in steel mills and warehouses that lift steel plates and keep holding them even if the power fails (electro-permanent lifting magnets)
- the magnetic table on a grinding or milling machine that clamps a steel workpiece at the push of a button (electro-permanent chuck)
- delivery and rescue drones that drop a package by releasing a magnet
- the free-spinning scroll wheel on some computer mice (Logitech's MagSpeed wheel uses one, according to Wikipedia)

## When to use it

When you need a strong magnetic grip that can be switched electrically but must keep holding for a long time with no power, or must not let go if the power fails: drone payload release, robot grippers and quick tool changers, battery-powered props or modular robots that snap together, work holding and lifting. It has no moving parts to wear, jam, vibrate loose or ice up, uses no power while holding (great for batteries), and does not heat up while holding. It is also a good way to dock robot modules that must stay joined with no power: the SMORES-EP modular robot's EP-Face connector sets four EPMs in a ring in a 3D-printed face, so any face mates with any other in four orientations (genderless, or hermaphroditic), connects or lets go in 80 ms using 2.5 J, holds 88.4 N, and can pull two modules together across a 4 mm gap (Tosun, Davey, Liu and Yim 2016). Paired EPM coils can even pass data through the magnetic coupling (Tosun et al. 2016).

## When not to use it

Not when the part must be released if power fails (e.g. an exit door): use a holding electromagnet (maglock). Not for non-steel objects: fit a steel plate or use a vacuum gripper. Not when the object may be knocked away and come back without a re-pulse (it loses part of its hold). Not for cheap, simple projects where a hobby electromagnet, servo latch or solenoid latch will do, since EPMs are expensive to buy and hard to make. Not where sideways or peeling loads are large: add a mechanical lip or a latch. For hand-operated holding with no electronics at all, use a switchable permanent magnet (rotary magnetic base).

## Details

- **What it does (jobs):**
  - hold or release using power: power is needed only to switch between holding and releasing, not to keep holding
  - join and hold: clamps a steel part, tool, payload or workpiece firmly in place
- **Movement:** none: nothing moves inside (entirely solid-state); only the direction of magnetisation inside the alnico changes
- **Directions it can move (degrees of freedom):** 0 while switched on and in contact with the steel (very strong against pulling straight off, weaker against sliding); when switched off the parts are simply separate (6, completely free).
- **Special behaviour:**
  - quick-release: a pulse releases the load on command, e.g. a drone dropping a package or a robot putting down a steel part; it then stays released with no power until the next 'on' pulse
- **How it holds:** magnetic: permanent-magnet pull that is switched electrically (not a powered hold, because no power is used while holding)
- **Input and output:** not applicable
- **Power:** powered, but only to switch: e.g. the Zubax FluxGrip FG40 uses about 4 J per switch at a constant 1 A from a 4-30 V supply (idle 50 mW), and the 12 mm MIT 'Pebbles' EPMs used 5 mJ pulses. If power is lost it keeps its last state: a holding EPM keeps holding and a released one stays released. So a power cut will not drop the load, but you also cannot release it without power.
- **Load:** light to medium in small sizes, heavy in industrial lifters: a 72 g Zubax FG40 holds up to 250 N (25 kgf) on a 4 mm polished iron sheet; the OpenGrab EPM v3 (under 4 x 4 x 2 cm) held 200 N, about 15 kg of cargo; a tiny EPM in Knaian's MIT thesis held 4.4 N, over 2,000 times its own weight; industrial electro-permanent lifting magnets lift heavy steel plates and blocks. Strongest pulling straight off, weaker against sliding, and only with flat, clean, thick enough steel in full contact.
- **Play and precision:** Not a precise locator: it holds the steel wherever it touches the pole faces. No play once on. Needs full, flat contact; if the steel is pulled away and allowed to snap back, the hold is weaker until the magnet is pulsed on again.
- **Taking it apart:** tool-free quick release: switched off with a pulse, then the part simply lifts away; the EPM unit itself is screwed or bolted in place
- **How often it can be reused:** effectively unlimited ⚑ [uncertain: it is solid-state with no moving parts, but no public switching-cycle limit was found; Zubax gives the FG40's magnetisation cycle limit only on request and quotes a 50,000 h service life]
- **Sealing:** none: it holds but does not seal the joint (the Zubax FG40 unit itself is sealed to IP69)
- **Adjustable:** Yes, partly: the holding force can be set anywhere between off and full by the length of the switching pulse (in Knaian's tests the force rose steadily with pulse length up to about 100 µs, then levelled off at 4.4 N). Mounting position is fixed.
- **Access needed:** one side only (blind): it grips a steel surface from one side
- **Materials:** Inside: NdFeB (neodymium-iron-boron) as the fixed hard magnet, AlNiCo (e.g. Alnico 5) as the switchable semi-hard magnet, iron or a high-permeability alloy such as Hiperco for the pole pieces, and copper magnet wire; housed in polymer composite or metal. Target: iron or low-carbon steel only; Zubax recommends a material with high permeability (relative permeability above 1,000) and high saturation (above 2 T) and rates the FG40 on 4 mm polished iron, while OpenGrab shipped a thin steel target square to stick onto non-steel payloads.
- **Heat, cold, water and wear:** Very tolerant of vibration, dust and water when sealed (the FG40 is IP69, works from -40 °C, and is described as resistant to seawater, salts, acids, vibration and extreme temperatures), with an internal limit of +73 °C set by its polymer composite. Neodymium magnets lose some strength when warm and lose it permanently above their maximum operating temperature (K&J: 150 °C for N42SH grade; a small N42 magnet at 100 °C dropped about 32%). The hold does not creep or fade with time because nothing is powered or sprung, but it is partly lost if the steel is pulled away and let back. A strong brownout can stop it switching (the FG40 detects deep brownouts and latches a fault). Its field can disturb a nearby compass (keep about 10 cm away).

## Making it

- **Ways to make or get it:**
  - off-the-shelf part: EPM grippers for drones and robots, electro-permanent lifting magnets, electro-permanent magnetic chucks and quick changers
  - 3D print (FDM): mounting brackets, drone payload hooks and boxes carrying a steel target plate, coil holders or bobbins for home-made EPMs
  - sheet metal: steel target plates and iron pole pieces
- **Printing it in one piece (print in place):** no: the EPM is a bought or hand-assembled unit (magnets, pole pieces and coil); printed mounts and payload parts are separate
- **Tools:** To fit: screwdriver or bolts and a way to attach a steel target plate to the payload (screws or glue). To wire: soldering iron or crimp tool, and a control signal (RC-servo PWM, CAN/DroneCAN or a logic input on commercial units). For a home-made EPM: coil-winding set-up, a pulse circuit (capacitor bank and H-bridge) and an oscilloscope or current probe to check the pulse.
- **Difficulty:** hard to build, easy to buy: making one needs alnico and neodymium magnets, iron pole pieces, a hand-wound coil and a pulse circuit that delivers a strong, very short current pulse (5 A for 100 µs in Knaian's 12 mm cubes, up to kiloamp pulses in large research devices) from a charged capacitor; ready-made EPM grippers such as the Zubax FluxGrip just plug in but are relatively expensive

### 3D printing tips

You can't print the magnet itself, but printing is very handy around it. Target plates: glue or screw a flat steel or iron plate into the printed payload so it sits proud of (or flush with) the plastic and touches the whole pole face; a printed skin over the steel acts as an air gap. Zubax rates its FG40 on 4 mm polished iron and recommends direct contact across the entire area; OpenGrab supplied a thin steel square to stick on payloads, which works but holds less than thick iron. Keep the payload from peeling or sliding: add a printed lip, cone or pins around the magnet so sideways loads are taken by the plastic and the magnet only has to resist a straight pull. Mount the EPM rigidly with screws into heat-set inserts. On drones, keep the EPM at least about 10 cm from the compass, or test the compass readings if it has to be closer (ArduPilot). Heat is rarely a problem because it draws almost nothing while holding, but the FG40's own internal temperature limit is +73 °C, so don't enclose it next to hot motors or batteries in sun; PETG or ASA mounts are safer than PLA outdoors (Prusa: PLA softens above about 60 °C, PETG suits parts below about 80 °C, ASA up to about 93 °C and resists UV). Home-made EPMs: research builds have used custom 3D-printed holders to hold bundles of alnico rods while the coil was wound around them (a 40-turn coil round 200 Alnico-5 rods, pulsed at about 1 kA for about 50 µs, in an open-access medical-research paper), and Knaian's thesis gives materials, methods and design formulas for small EPMs made from cylindrical NdFeB and alnico rods with iron end caps. Check magnet polarity before gluing, because the hard magnet must line up with the pole pieces. Design any printed jig so the strong neodymium magnet can't snap onto steel tools and trap fingers. Docking faces: the EP-Face design lets the steel pole pieces stand 0.5 mm proud of the 3D-printed face, so the metal faces touch first and no air gap is left between them; a lip on each pole piece sits on a ledge in the print, so the plastic carries the load and the glue only locates the magnet. To get all pole faces in one flat plane, the builders put the magnets loosely in the printed face, stood it on a flat steel block, switched the magnets on so they pulled themselves flat against the steel, and left them there while the glue cured (Tosun et al. 2016).

### Buying one (off-the-shelf parts)

Electropermanent magnet gripper for drones and robots (Zubax FluxGrip FG40 family: FG401M, FG401MA with RC-PWM/analogue control, FG402M with redundant CAN; OpenGrab EPM v3, discontinued); electro-permanent lifting magnet (with controller and battery-free holding); electro-permanent magnetic chuck (compensated or non-compensated) for grinding and milling; electro-permanent magnetic end-of-arm tooling / quick-change plates for robots; for home builds: Alnico 5 rods, NdFeB rod or block magnets, soft-iron or low-carbon steel pole pieces, enamelled magnet wire, high-current H-bridge MOSFETs and low-ESR capacitors; steel target plates.

## Rules of thumb

- Energy break-even: an EPM needs about 10 times more power than an equivalent electromagnet during its short switching pulse, but uses less energy overall whenever the hold lasts longer than a break-even time of about 10 ms at centimetre scale (about 100 µs at millimetre scale); in the 12 mm Pebbles that meant switching less often than every 2 ms (Knaian thesis, pp. 21-22 and 92-93, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
- Switching energy grows with the magnet's volume while holding force grows with its face area, so scaling an EPM down keeps it efficient (Knaian thesis, p. 22, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
- Holding force rises in proportion to the switching pulse length and then saturates (4.4 N at about 100 µs for the thesis device), so a shorter pulse gives a partial hold (Knaian thesis, p. 103, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
- Pulling the steel away and letting it come back weakens an EPM: after being pulled 0.75 mm away and returned, the test device held only about half its original force, so re-pulse it 'on' while the steel is in contact (Knaian thesis, pp. 102-103, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf; Zubax: 'only able to retain full magnetization as long as it is held in contact with the payload', https://fluxgrip.zubax.com/chapters/functional.html).
- Force versus distance: in contact an EPM holds as hard as a rare-earth magnet, but its pull drops off faster with distance, like a magnet made of the semi-hard material (Knaian thesis, p. 22, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
- Pulse example for small EPMs: 20 V supply, 100 µs square pulse, about 5 A peak, 5 mJ per switch, supplied from a 100 µF tantalum capacitor (Knaian thesis, p. 110, https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf).
- Commercial example: Zubax FG40, 72 g, 4 x 4 x 2 cm, 25 kgf on 4 mm polished iron, 4 J per (de)magnetisation at a constant 1 A, 50 mW idle, 4-30 V DC, IP69 (https://fluxgrip.zubax.com/chapters/hardware/fg40.html). Holding force follows F = B²A/(2μ0) and falls quickly as the air gap grows (https://fluxgrip.zubax.com/chapters/functional.html).
- Only the alnico switches because its coercivity (resistance to being re-magnetised) is about 50 kA/m against about 1,120 kA/m for NdFeB (Wikipedia, https://en.wikipedia.org/wiki/Electropermanent_magnet).
- On drones, magnetic interference from an EPM is minimal at 10 cm; test the compass if it is mounted closer (ArduPilot, https://ardupilot.org/copter/docs/common-electro-permanent-magnet-V3.html).
- Robot-docking example, the EP-Face (four EPMs in a 42 mm circle on an 80 mm SMORES-EP module): mean holding force 88.4 N (standard deviation 13.9 N) pulling straight apart; 80 ms and 2.5 J to switch a whole face at about 12 V; draws modules together across a 4 mm gap face to face or 7 mm sideways; still holds one module's weight at 25° misalignment; much weaker in shear and twist, where only friction and the magnets' pull resist (Tosun et al. 2016, IEEE/RSJ IROS, https://www.modlabupenn.org/wp-content/uploads/tosun2016epface.pdf).

## Common failures

(1) Weak or no grip: the steel is thin, painted, rough, curved or only partly touching, or it is not steel at all; use a flat iron or mild-steel plate (4 mm on the FG40 rating) in full contact. (2) Grip fades after a bump: the payload was pulled away and returned, partly demagnetising the alnico; pulse it on again once in contact. (3) It won't switch: supply voltage too low or sagging (OpenGrab flags an error below 4.5 V; the FG40 latches a fault on deep brownout), or the pulse is too short to fully flip the alnico. (4) Part stays stuck when switched off: some residual force remains, especially with stronger 'compensated' industrial EPMs, which need a demagnetising cycle before the workpiece comes away (Walmag). (5) Drone compass errors: mounted too close to the compass. (6) Home-made unit loses strength: neodymium magnet overheated or the magnets assembled with the wrong polarity. (7) Docked robot modules: if one module stops working with its magnets switched on, its neighbour can't undock by switching its own magnets off, because the stuck side still holds; and dirt or debris on the faces creates an air gap that weakens the hold, so docking faces need clean surroundings (Tosun et al. 2016).

## Safety

A power cut does not release the load: this is safer for lifting, but it also means you cannot drop the load or free something trapped without power, so plan an emergency way to power the release. Switching circuits store energy in charged capacitors and fire high-current pulses: OpenGrab's documentation warns to avoid contact with its high-voltage parts ('If you do not cycle the EPM you cannot get zapped') and Zubax warns not to disassemble the FG40 because of the risk of electric shock. Never release a load above people. Strong neodymium magnets inside home-made EPMs can pinch fingers badly, shatter if they slam together, affect pacemakers and implanted devices, and are dangerous if swallowed (K&J Magnetics; US CPSC).

## Related

- Holding electromagnet (maglock): also electric, but needs current all the time it holds and lets go if the power fails
- Switchable permanent magnet (rotary magnetic base): the hand-operated cousin; a knob turns one magnet against another instead of an electric pulse flipping it
- Magnet joint (embedded permanent magnets): always on, pulled apart by hand
- Holding magnet with electrical release: a permanent magnet that holds with no power and lets go only while a reverse current flows through its coil
- Servo or motorised latch: also holds with no power and needs power only to change state, but has moving parts and works on any material
- Latching (bistable) solenoid: also keeps its last position with no power, using a permanent magnet and a reverse pulse, but moves a bolt instead of gripping steel
- Vacuum (suction) gripper: grips non-steel objects but needs continuous vacuum
- Magnetic connector: magnets hold the two halves of a plug together while spring contacts carry the current; robot-module docks use the same idea with EPMs, so the hold needs no power (Tosun et al. 2016)

## Make it yourself

- [OpenGrab EPM v3 (Zubax/NicaDrone, GitHub; README read via raw.githubusercontent.com)](https://github.com/Zubax/opengrab_epm_v3): Open-hardware electropermanent magnet gripper: hardware design files, firmware and flashing instructions (product discontinued; the design remains a reference) *(licence: hardware CC BY-SA 4.0; firmware GPL v3)*
- [Electropermanent Magnetic Connectors and Actuators: Devices and Their Application in Programmable Matter (Ara Knaian, MIT PhD thesis, 2010, PDF)](https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf): Physics, design formulas, materials and methods for building and testing small EPMs from NdFeB and alnico rods with iron end caps, plus drive-circuit details *(licence: link only ⚑ [uncertain: thesis copyright terms not checked])*
- [Electro Permanent Magnet Gripper (OpenGrab EPM v3) (ArduPilot Copter documentation)](https://ardupilot.org/copter/docs/common-electro-permanent-magnet-V3.html): How to wire and control an EPM gripper from a drone flight controller (PWM, DroneCAN, mission commands) and where to mount it *(licence: link only)*
- [FluxGrip reference manual (Zubax Robotics)](https://fluxgrip.zubax.com/): Integration manual for a ready-made EPM gripper: how it works, holding-force physics, electrical interface and fault handling *(licence: link only)*

## Pictures, videos and models

- [Electropermanent magnet switching simulation.gif (Wikimedia Commons, Magneticswizard)](https://commons.wikimedia.org/wiki/File:Electropermanent_magnet_switching_simulation.gif): Animated simulation of an EPM switching ON and OFF by reversing the AlNiCo magnetisation, showing the flux lines and holding force on a steel workpiece *(licence: CC BY 4.0)*
- [Electropermanent magnet (Wikipedia)](https://en.wikipedia.org/wiki/Electropermanent_magnet): Explanation with diagrams of the on and off states, magnetic-circuit simulations and air-gap animation; lists uses (drone grippers, Project Ara, programmable matter) *(licence: text CC BY-SA 4.0; images per file)*
- [Electropermanent Magnets: Programmable Magnets with Zero Static Power Consumption Enable Smallest Modular Robots Yet (Hizook)](https://www.hizook.com/electropermanent-magnets-programmable-magnets-zero-static-power-consumption-enable-s/): Photos and cross-sections of MIT's tiny EPMs and 12 mm 'Pebbles' robots, B-H curves, a historic ferreed switch and an industrial work-holding chuck *(licence: link only)*
- [EEVblog 1656 - MAILBAG: ElectroPermanent Magnet, DIN PSU's, Sponge, Beelink EQ14 N150 PC (EEVblog, YouTube; title confirmed via YouTube oEmbed)](https://www.youtube.com/watch?v=FqN77SZF5zU): Dave Jones testing a Zubax FluxGrip EPM; the EPM segment starts at about 7:30 (per Hackaday) *(licence: link only)*
- [Electro-permanent Magnets For Quadcopters (Hackaday, 2013)](https://hackaday.com/2013/07/12/electro-permanent-magnets-for-quadcopters/): The open-hardware OpenGrab EPM used to let quadcopters pick up and drop steel payloads, with photos and links *(licence: link only)*

## Needs confirming

⚑ marks something nobody has confirmed yet: a fact the research could not confirm from a source, a finder value that is a best guess, or an open point from the research notes. Corrections are welcome (see `research/needs-confirming.md`).

- ⚑ 2 sentences on this page marked [uncertain].
- ⚑ Finder value `reuse_cycles` = effectively unlimited (source uncertain): `reuse_cycles` is marked ⚑ [uncertain] here: "effectively unlimited ⚑ [uncertain:…"
- ⚑ Finder value `connects` = any solid parts (best guess): joins parts, but no specific kind of part found; set to any solid parts
- ⚑ Finder value `power_source` = electricity (best guess): powered, but no power source named in `power`; defaulted to electricity

## Sources

- <https://en.wikipedia.org/wiki/Electropermanent_magnet>
- <https://www.hizook.com/electropermanent-magnets-programmable-magnets-zero-static-power-consumption-enable-s/>
- <https://fab.cba.mit.edu/classes/865.18/discrete/micro/knaian_electropermanent.pdf>
- <https://dspace.mit.edu/handle/1721.1/60151>
- <https://fluxgrip.zubax.com/chapters/functional.html>
- <https://fluxgrip.zubax.com/chapters/hardware/fg40.html>
- <https://fluxgrip.zubax.com/>
- <https://zubax.com/blog/zubax-robotics-releases-fluxgrip-fg40-an-electropermanent-magnet-for-payload-attachment-in-drones-that-will-obsolete-existing-electromechanical-alternatives/2296>
- <https://ardupilot.org/copter/docs/common-electro-permanent-magnet-V3.html>
- <https://raw.githubusercontent.com/Zubax/opengrab_epm_v3/master/README.md>
- <https://github.com/Zubax/opengrab_epm_v3 (appeared in search results; README read via raw.githubusercontent.com)>
- <https://hackaday.com/2013/07/12/electro-permanent-magnets-for-quadcopters/>
- <https://hackaday.com/2026/04/01/watch-an-electro-permanent-magnet-in-action/>
- <https://hackaday.com/tag/epm/>
- <https://www.walmagmagnetics.com/blog/differences-between-permanent-magnets-electropermanent-magnets-and-electromagnets>
- <https://www.hvrmagnet.com/blog/why-doesnt-the-electro-permanent-lifting-magnet-force-disappear-after-power-failure/>
- <https://www.hvrmagnet.com/blog/electro-permanent-magnetic-eoat-with-quick-change-system/>
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC9317373/>
- <https://www.kjmagnetics.com/neodymium-magnet-safety.asp>
- <https://www.kjmagnetics.com/blog/temperature-and-neodymium-magnets>
- <https://www.cpsc.gov/content/cpsc-warns-high-powered-magnets-and-children-make-a-deadly-mix>
- <https://help.prusa3d.com/article/pla_2062>
- <https://help.prusa3d.com/article/petg_2059>
- <https://help.prusa3d.com/article/asa_1809>
- <https://commons.wikimedia.org/wiki/File:Electropermanent_magnet_switching_simulation.gif>
- <https://www.youtube.com/watch?v=FqN77SZF5zU (verified via YouTube oEmbed)>
- <https://www.modlabupenn.org/wp-content/uploads/tosun2016epface.pdf>
- <https://www.modlabupenn.org/ep-face/>
